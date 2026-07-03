"use client";

// Flashcard trainer + pattern & mnemonic cards for a topic's Learn Smart deck.

import React, { useCallback, useMemo, useState } from "react";
import type { Topic, VocabItem } from "@/lib/types";
import { useStore } from "@/lib/store";
import { Zh, speakChinese } from "@/lib/chinese";

type Mode = "all" | "learning" | "mastered";

const MODE_LABELS: { key: Mode; label: string }[] = [
  { key: "all", label: "🃏 All cards" },
  { key: "learning", label: "😅 Still learning" },
  { key: "mastered", label: "🌟 Mastered" },
];

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function ConfidenceDots({ level }: { level: number }) {
  return (
    <span
      className="inline-flex items-center gap-1"
      title={`Confidence ${level}/3`}
      aria-label={`Confidence ${level} out of 3`}
    >
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            level >= i ? "bg-emerald-400" : "bg-slate-200"
          }`}
        />
      ))}
    </span>
  );
}

export default function VocabTrainer({ topic }: { topic: Topic }) {
  const { progress, recordVocab } = useStore();
  const vocab = topic.learn.vocab;

  const confidenceOf = useCallback(
    (hanzi: string) => progress.vocabKnown[`${topic.id}:${hanzi}`] ?? 0,
    [progress.vocabKnown, topic.id]
  );

  const buildDeck = useCallback(
    (m: Mode): VocabItem[] => {
      if (m === "learning") return vocab.filter((v) => confidenceOf(v.hanzi) < 2);
      if (m === "mastered") return vocab.filter((v) => confidenceOf(v.hanzi) >= 2);
      return [...vocab];
    },
    [vocab, confidenceOf]
  );

  const [mode, setMode] = useState<Mode>("all");
  const [deck, setDeck] = useState<VocabItem[]>(() => [...vocab]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [tally, setTally] = useState({ got: 0, learning: 0 });
  const [finished, setFinished] = useState(false);

  const startDeck = useCallback(
    (m: Mode, doShuffle: boolean) => {
      const d = buildDeck(m);
      setDeck(doShuffle ? shuffle(d) : d);
      setIdx(0);
      setFlipped(false);
      setTally({ got: 0, learning: 0 });
      setFinished(false);
    },
    [buildDeck]
  );

  const pickMode = (m: Mode) => {
    setMode(m);
    startDeck(m, false);
  };

  const card = deck[idx] as VocabItem | undefined;

  const answer = (known: boolean) => {
    if (!card) return;
    recordVocab(topic.id, card.hanzi, known);
    setTally((t) =>
      known ? { ...t, got: t.got + 1 } : { ...t, learning: t.learning + 1 }
    );
    setFlipped(false);
    if (idx + 1 >= deck.length) setFinished(true);
    else setIdx(idx + 1);
  };

  const masteredCount = useMemo(
    () => vocab.filter((v) => confidenceOf(v.hanzi) >= 2).length,
    [vocab, confidenceOf]
  );

  return (
    <div className="space-y-8">
      {/* ---- Flashcards ---- */}
      <section>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {MODE_LABELS.map((m) => (
            <button
              key={m.key}
              type="button"
              onClick={() => pickMode(m.key)}
              className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${
                mode === m.key
                  ? "border-rose-300 bg-rose-100 text-rose-700"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {m.label}
            </button>
          ))}
          <span className="ml-auto text-sm font-medium text-slate-500">
            {deck.length === 0
              ? "0 cards"
              : finished
                ? `${deck.length} of ${deck.length} done`
                : `Card ${idx + 1} of ${deck.length}`}
            <span className="ml-2 text-xs text-slate-400">
              ({masteredCount}/{vocab.length} mastered)
            </span>
          </span>
        </div>

        {deck.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            {mode === "mastered"
              ? "No mastered cards yet — flip through the deck and hit ✅ to grow this pile!"
              : "Nothing here — every card is mastered. Amazing! 🎉"}
          </div>
        ) : finished ? (
          <div className="pop-in rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <p className="text-4xl">🎉</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">Deck complete!</h3>
            <p className="mt-2 text-slate-600">
              ✅ Got it: <strong className="text-emerald-600">{tally.got}</strong>
              {" · "}😅 Still learning:{" "}
              <strong className="text-amber-600">{tally.learning}</strong>
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => startDeck(mode, false)}
                className="rounded-full bg-rose-500 px-4 py-2 text-sm font-bold text-white hover:bg-rose-600"
              >
                🔁 Restart
              </button>
              <button
                type="button"
                onClick={() => startDeck(mode, true)}
                className="rounded-full border border-rose-300 bg-white px-4 py-2 text-sm font-bold text-rose-600 hover:bg-rose-50"
              >
                🔀 Shuffle & go again
              </button>
            </div>
          </div>
        ) : card ? (
          <div>
            <div
              className="flip-card mx-auto max-w-xl cursor-pointer select-none"
              onClick={() => setFlipped((f) => !f)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setFlipped((f) => !f);
                }
              }}
              aria-label={flipped ? "Show hanzi side" : "Reveal meaning"}
            >
              <div className={`flip-inner h-72 ${flipped ? "flipped" : ""}`}>
                {/* front */}
                <div className="flip-face flex flex-col items-center justify-center rounded-3xl border-2 border-rose-200 bg-white p-6 shadow-sm">
                  <div className="absolute left-4 top-4">
                    <ConfidenceDots level={confidenceOf(card.hanzi)} />
                  </div>
                  <button
                    type="button"
                    className="absolute right-4 top-4 rounded-full bg-rose-50 p-2 text-xl hover:bg-rose-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakChinese(card.hanzi);
                    }}
                    aria-label="Listen"
                    title="Listen"
                  >
                    🔊
                  </button>
                  <Zh hanzi={card.hanzi} pinyin={card.pinyin} className="text-6xl font-bold" />
                  <p className="mt-6 text-xs font-medium uppercase tracking-wide text-slate-400">
                    tap to reveal
                  </p>
                </div>
                {/* back */}
                <div className="flip-face flip-back flex flex-col items-center justify-center rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                  <p className="text-center text-3xl font-bold text-slate-900">
                    {card.english}
                  </p>
                  {card.pos && (
                    <span className="mt-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
                      {card.pos}
                    </span>
                  )}
                  {card.example && (
                    <div className="mt-4 text-center">
                      <p className="text-xl">
                        <Zh hanzi={card.example.hanzi} pinyin={card.example.pinyin} />
                        <button
                          type="button"
                          className="ml-2 align-middle text-base"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (card.example) speakChinese(card.example.hanzi);
                          }}
                          aria-label="Listen to example"
                        >
                          🔊
                        </button>
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{card.example.english}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {flipped && (
              <div className="pop-in mx-auto mt-4 flex max-w-xl justify-center gap-3">
                <button
                  type="button"
                  onClick={() => answer(false)}
                  className="flex-1 rounded-2xl border-2 border-amber-300 bg-amber-50 px-4 py-3 font-bold text-amber-700 hover:bg-amber-100"
                >
                  😅 Still learning
                </button>
                <button
                  type="button"
                  onClick={() => answer(true)}
                  className="flex-1 rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3 font-bold text-emerald-700 hover:bg-emerald-100"
                >
                  ✅ Got it!
                </button>
              </div>
            )}
          </div>
        ) : null}
      </section>

      {/* ---- Sentence patterns ---- */}
      {topic.learn.patterns.length > 0 && (
        <section>
          <h3 className="mb-3 text-lg font-bold text-slate-900">🧩 Sentence patterns</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {topic.learn.patterns.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-slate-900">{p.pattern}</p>
                  <button
                    type="button"
                    className="shrink-0 rounded-full bg-white p-1.5 text-base ring-1 ring-sky-200 hover:bg-sky-100"
                    onClick={() => speakChinese(p.example.hanzi)}
                    aria-label={`Listen to ${p.example.hanzi}`}
                    title="Listen"
                  >
                    🔊
                  </button>
                </div>
                <p className="mt-2 text-lg">
                  <Zh hanzi={p.example.hanzi} pinyin={p.example.pinyin} />
                </p>
                <p className="text-sm text-slate-600">{p.example.english}</p>
                {p.note && <p className="mt-2 text-xs text-slate-500">💡 {p.note}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---- Mnemonics ---- */}
      {topic.learn.mnemonics && topic.learn.mnemonics.length > 0 && (
        <section>
          <h3 className="mb-3 text-lg font-bold text-slate-900">🧠 Memory tricks</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {topic.learn.mnemonics.map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-violet-200 bg-violet-50/60 p-4"
              >
                <button
                  type="button"
                  onClick={() => speakChinese(m.hanzi)}
                  className="zh shrink-0 text-4xl font-bold text-slate-900 hover:text-violet-700"
                  title="Listen"
                  aria-label={`Listen to ${m.hanzi}`}
                  lang="zh-Hans"
                >
                  {m.hanzi}
                </button>
                <p className="text-sm text-slate-700">{m.tip}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
