"use client";
// The Vocab tab: every Simplified Mandarin word/phrase for the topic with zh-CN audio
// (🔊 Normal 0.9x + 🐢 Slow 0.55x), Pinyin visibility toggle (Show / Hide Pinyin challenge),
// Flip Flashcards, and 3-way Self-Test (Hanzi → Meaning, Audio → Hanzi/Pinyin, Meaning → Hanzi/Pinyin).
import { useMemo, useState } from "react";
import type { VocabItem } from "@/lib/types";
import { VOCAB } from "@/lib/generated/vocab";
import { speakChinese } from "@/lib/speech";
import { checkAnswer } from "@/lib/answerCheck";
import { stripPinyinTones } from "@/lib/chinese/pinyin";
import { usePinyinVisible } from "@/lib/pinyinDisplay";
import { useStore } from "@/lib/store";
import { AnswerInput } from "./AnswerInput";
import { PinyinToggleButton, SpeakButtons, useSpeechAvailable } from "./HanziAudio";

type Mode = "list" | "cards" | "test";
type TestKind = "zh-en" | "listen" | "en-zh";

/** Deterministic shuffle from a numeric seed so re-renders stay pure. */
function shuffled<T>(arr: T[], seed: number): T[] {
  const out = [...arr];
  let s = (seed * 2654435761) >>> 0 || 1;
  for (let i = out.length - 1; i > 0; i--) {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    const j = (s >>> 0) % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Accepted English meanings for a VocabItem ("cold / flu;感冒" -> ["cold / flu", "cold", "flu"]). */
function englishVariants(en: string): string[] {
  const base = en.replace(/\([^)]*\)/g, "").trim();
  const parts = base
    .split(/[;/,]/)
    .map((x) => x.trim())
    .filter(Boolean);
  const withoutTo = parts.flatMap((p) => (p.toLowerCase().startsWith("to ") ? [p, p.slice(3).trim()] : [p]));
  return [...new Set([en.trim(), base, ...withoutTo])].filter(Boolean);
}

export function VocabTab({ topicId, topicTitle }: { topicId: string; topicTitle: string }) {
  const groups = useMemo(() => VOCAB[topicId] ?? [], [topicId]);
  const all = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  const [mode, setMode] = useState<Mode>("list");
  const [query, setQuery] = useState("");
  const speech = useSpeechAvailable();
  const pinyinVisible = usePinyinVisible();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    const qBare = stripPinyinTones(q);
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (it) =>
            it.hanzi.includes(q) ||
            it.pinyin.toLowerCase().includes(q) ||
            (qBare.length >= 2 && stripPinyinTones(it.pinyin).includes(qBare)) ||
            it.english.toLowerCase().includes(q) ||
            it.pos.toLowerCase().includes(q) ||
            (it.notes?.toLowerCase().includes(q) ?? false),
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, query]);

  if (!all.length) {
    return <p className="text-ink-2">Vocabulary for {topicTitle} is on its way.</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Vocabulary mode">
          {(
            [
              ["list", "📖", `Browse (${all.length})`],
              ["cards", "🃏", "Flip cards"],
              ["test", "🎯", "Self-test"],
            ] as const
          ).map(([id, icon, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id)}
              aria-pressed={mode === id}
              className={`btn btn-sm ${mode === id ? "btn-primary" : "btn-secondary"}`}
            >
              <span aria-hidden>{icon}</span> {label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <PinyinToggleButton />
          {mode === "list" ? (
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter Hanzi, Pinyin or English…"
              aria-label="Filter vocabulary"
              className="input max-w-xs text-sm"
            />
          ) : null}
        </div>
      </div>

      {mode === "list" ? (
        <div className="space-y-5">
          <p className="text-sm text-ink-2">
            {speech
              ? "Tap 🔊 for normal speed (0.9x) or 🐢 for slow tone-by-tone pronunciation (0.55x). "
              : "Audio uses your browser's Mandarin (zh-CN) voice — try Chrome, Edge or Safari. "}
            {!pinyinVisible ? "Pinyin is hidden for character practice — hover or tap a blurred line to peek!" : "Toggle 'Pinyin: ON' above to hide Pinyin and test your character recognition."}
          </p>
          {filtered.length === 0 ? <p className="text-ink-2">No words match &ldquo;{query}&rdquo;.</p> : null}
          {filtered.map((g) => (
            <section key={g.title} className="card overflow-hidden">
              <header className="flex items-center justify-between border-b border-line bg-surface-2 px-4 py-2.5">
                <h2 className="font-extrabold">{g.title}</h2>
                <span className="text-xs font-bold text-ink-2">{g.items.length} words</span>
              </header>
              <ul className="divide-y divide-line">
                {g.items.map((it) => (
                  <li key={it.hanzi} className="px-4 py-3">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <SpeakButtons text={it.hanzi} />
                      <span lang="zh-CN" className="text-xl font-black tracking-wide text-ink">
                        {it.hanzi}
                      </span>
                      <span
                        className={`text-sm font-bold text-brand transition ${
                          pinyinVisible ? "" : "blur-[5px] opacity-40 hover:blur-none hover:opacity-100 focus:blur-none"
                        }`}
                        title={!pinyinVisible ? "Hover to peek Pinyin" : undefined}
                      >
                        {it.pinyin}
                      </span>
                      <span className="rounded-md bg-surface-2 px-2 py-0.5 text-xs font-bold text-ink-2">{it.pos}</span>
                      <span className="font-semibold text-ink sm:ml-auto">{it.english}</span>
                    </div>
                    {it.notes ? <div className="mt-1 text-xs text-ink-2">💡 {it.notes}</div> : null}
                    {it.example ? (
                      <div className="mt-2 flex flex-wrap items-center gap-2 rounded-xl bg-surface-2/70 px-3 py-2 text-xs">
                        <SpeakButtons text={it.example.hanzi} compact />
                        <span lang="zh-CN" className="font-bold text-ink text-sm">
                          {it.example.hanzi}
                        </span>
                        <span
                          className={`font-medium text-brand transition ${
                            pinyinVisible ? "" : "blur-[4px] opacity-40 hover:blur-none hover:opacity-100"
                          }`}
                        >
                          {it.example.pinyin}
                        </span>
                        <span className="text-ink-2">— {it.example.en}</span>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : null}

      {mode === "cards" ? <Flashcards items={all} pinyinVisible={pinyinVisible} /> : null}
      {mode === "test" ? <VocabTest key={topicId} topicId={topicId} items={all} speech={speech} pinyinVisible={pinyinVisible} /> : null}
    </div>
  );
}

function Flashcards({ items, pinyinVisible }: { items: VocabItem[]; pinyinVisible: boolean }) {
  const [seed, setSeed] = useState(0);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [enFirst, setEnFirst] = useState(false);
  const deck = useMemo(() => (seed === 0 ? items : shuffled(items, seed)), [items, seed]);
  const card = deck[idx % deck.length];

  function go(delta: number) {
    setIdx((i) => (i + delta + deck.length) % deck.length);
    setFlipped(false);
  }

  const showChineseSide = flipped ? enFirst : !enFirst;

  return (
    <div className="mx-auto max-w-lg space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="font-bold text-ink-2">
          Card {(idx % deck.length) + 1} of {deck.length}
        </span>
        <div className="flex gap-1.5">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setEnFirst((v) => !v);
              setFlipped(false);
            }}
          >
            {enFirst ? "英 → 中" : "中 → 英"}
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setSeed((s) => s + 1);
              setIdx(0);
              setFlipped(false);
            }}
          >
            🔀 Shuffle
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="card flex min-h-60 w-full flex-col items-center justify-center gap-2 p-6 text-center transition hover:bg-surface-2"
        aria-label="Flip card"
      >
        <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
          {showChineseSide ? "简体中文 · Mandarin" : "English Meaning"}
        </div>
        {showChineseSide ? (
          <>
            <div lang="zh-CN" className="text-4xl font-black tracking-wide text-ink sm:text-5xl">
              {card.hanzi}
            </div>
            <div
              className={`text-lg font-bold text-brand transition ${
                pinyinVisible || flipped ? "" : "blur-[5px] opacity-35"
              }`}
            >
              {card.pinyin}
            </div>
            <span className="rounded-md bg-surface-2 px-2 py-0.5 text-xs font-bold text-ink-2">{card.pos}</span>
          </>
        ) : (
          <>
            <div className="text-2xl font-black text-ink sm:text-3xl">{card.english}</div>
            <span className="rounded-md bg-surface-2 px-2 py-0.5 text-xs font-bold text-ink-2">{card.pos}</span>
          </>
        )}
        {flipped && card.notes ? <div className="mt-1 text-xs text-ink-2">💡 {card.notes}</div> : null}
        {flipped && card.example ? (
          <div className="mt-2 rounded-xl bg-surface-2 px-3 py-1.5 text-xs text-ink-2">
            <span lang="zh-CN" className="font-bold text-ink">
              {card.example.hanzi}
            </span>{" "}
            ({card.example.pinyin}) — {card.example.en}
          </div>
        ) : null}
        <div className="mt-2 text-xs text-ink-2">Tap card to flip</div>
      </button>

      <div className="flex items-center justify-between gap-2">
        <button type="button" className="btn btn-secondary" onClick={() => go(-1)}>
          ← Prev
        </button>
        <SpeakButtons text={card.hanzi} />
        <button type="button" className="btn btn-primary" onClick={() => go(1)}>
          Next →
        </button>
      </div>
    </div>
  );
}

function VocabTest({
  topicId,
  items,
  speech,
  pinyinVisible,
}: {
  topicId: string;
  items: VocabItem[];
  speech: boolean;
  pinyinVisible: boolean;
}) {
  const [kind, setKind] = useState<TestKind>("zh-en");
  const [seed, setSeed] = useState(1);
  const deck = useMemo(() => shuffled(items, seed).slice(0, Math.min(10, items.length)), [items, seed]);
  const [i, setI] = useState(0);
  const [value, setValue] = useState("");
  const [result, setResult] = useState<null | { state: "right" | "tone" | "wrong"; msg?: string }>(null);
  const [score, setScore] = useState(0);
  const { setBest } = useStore();
  const done = i >= deck.length;
  const card = deck[i];

  function check() {
    if (!card || !value.trim()) return;
    const accept = kind === "zh-en" ? englishVariants(card.english) : [card.hanzi, card.pinyin];
    const r = checkAnswer({ type: "text", accept }, value);
    if (r.status === "correct") {
      setResult({ state: "right" });
      setScore((s) => s + 1);
    } else if (r.status === "close") {
      setResult({ state: "tone", msg: r.feedback });
    } else {
      setResult({ state: "wrong", msg: r.feedback });
    }
  }

  function next() {
    const ni = i + 1;
    setI(ni);
    setValue("");
    setResult(null);
    if (ni >= deck.length) setBest(`vocab:${topicId}`, score);
    else if (kind === "listen" && deck[ni]) speakChinese(deck[ni].hanzi);
  }

  function restart(k: TestKind = kind) {
    setKind(k);
    setSeed((s) => s + 1);
    setI(0);
    setScore(0);
    setValue("");
    setResult(null);
    if (k === "listen" && deck[0]) {
      setTimeout(() => speakChinese(deck[0].hanzi), 80);
    }
  }

  return (
    <div className="mx-auto max-w-lg space-y-3">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Self-test mode">
        <button
          type="button"
          className={`btn btn-sm ${kind === "zh-en" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => restart("zh-en")}
          aria-pressed={kind === "zh-en"}
        >
          🇨🇳 → 🇬🇧 Hanzi → Meaning
        </button>
        {speech ? (
          <button
            type="button"
            className={`btn btn-sm ${kind === "listen" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => restart("listen")}
            aria-pressed={kind === "listen"}
          >
            👂 Audio → Hanzi / Pinyin
          </button>
        ) : null}
        <button
          type="button"
          className={`btn btn-sm ${kind === "en-zh" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => restart("en-zh")}
          aria-pressed={kind === "en-zh"}
        >
          🇬🇧 → 🇨🇳 Meaning → Hanzi / Pinyin
        </button>
      </div>

      {done ? (
        <div className="card p-6 text-center">
          <div className="text-4xl" aria-hidden>
            {score >= 8 ? "🏆" : score >= 5 ? "👍" : "💪"}
          </div>
          <h3 className="mt-2 text-xl font-extrabold">
            {score} / {deck.length}
          </h3>
          <p className="text-ink-2">
            {score >= 8 ? "太棒了 (Tài bàng le)! These words are sticking." : "Flip through the cards once more, then try another set of 10!"}
          </p>
          <button type="button" className="btn btn-primary mt-4" onClick={() => restart()}>
            New set of 10
          </button>
        </div>
      ) : card ? (
        <div className="card space-y-3 p-5">
          <div className="flex items-center justify-between text-sm text-ink-2">
            <span>
              Word {i + 1} of {deck.length}
            </span>
            <span>Score {score}</span>
          </div>

          {kind === "zh-en" ? (
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">What does this mean in English?</div>
              <div className="mt-1 flex items-center gap-3">
                <span lang="zh-CN" className="text-4xl font-black text-ink">
                  {card.hanzi}
                </span>
                <SpeakButtons text={card.hanzi} />
              </div>
              {pinyinVisible ? <div className="mt-0.5 text-sm font-bold text-brand">{card.pinyin}</div> : null}
            </div>
          ) : kind === "listen" ? (
            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Listen &amp; type Simplified Hanzi or toned Pinyin</div>
              <div className="flex flex-wrap items-center gap-2">
                <button type="button" className="btn btn-primary btn-sm" onClick={() => speakChinese(card.hanzi, { slow: false })}>
                  🔊 Play (0.9x)
                </button>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => speakChinese(card.hanzi, { slow: true })}>
                  🐢 Slow (0.55x)
                </button>
                <span className="text-xs text-ink-2">Hint: {card.pos}</span>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Write in Simplified Hanzi or toned Pinyin</div>
              <div className="text-2xl font-black text-ink">{card.english}</div>
              <div className="text-xs text-ink-2">Category: {card.pos}</div>
            </div>
          )}

          <AnswerInput
            value={value}
            onChange={setValue}
            onSubmit={result && result.state !== "tone" ? next : check}
            type="text"
            disabled={!!result && result.state !== "tone"}
            autoFocus
            label={kind === "zh-en" ? "English meaning" : "Simplified Hanzi or Pinyin"}
          />

          {result ? (
            <div
              role="status"
              aria-live="polite"
              className={`rounded-xl px-3 py-2 text-sm ${
                result.state === "right" ? "bg-good-soft" : result.state === "tone" ? "bg-warn-soft" : "bg-bad-soft"
              }`}
            >
              {result.state === "right" ? (
                <strong>✅ 太棒了! Correct: </strong>
              ) : result.state === "tone" ? (
                <strong>🟡 {result.msg ?? "Almost — check your Pinyin tones!"} </strong>
              ) : (
                <strong>❌ Not quite. </strong>
              )}
              {result.state !== "tone" ? (
                <span>
                  <strong lang="zh-CN">{card.hanzi}</strong> (<em>{card.pinyin}</em>) = {card.english}
                </span>
              ) : null}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-2">
            {!result || result.state === "tone" ? (
              <button type="button" className="btn btn-primary" onClick={check} disabled={!value.trim()}>
                Check
              </button>
            ) : null}
            {result && result.state !== "tone" ? (
              <button type="button" className="btn btn-secondary" onClick={next}>
                Next →
              </button>
            ) : (
              <button type="button" className="btn btn-ghost" onClick={() => setResult({ state: "wrong" })}>
                Show answer
              </button>
            )}
            {result && result.state !== "tone" ? <SpeakButtons text={card.hanzi} /> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
