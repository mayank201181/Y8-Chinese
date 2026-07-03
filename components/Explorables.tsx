"use client";

// Interactive explorables: small parameter-driven widgets that let learners
// poke at a language rule (tones, numbers, word order, time, money, measure
// words) and watch the Chinese change live.

import React, { useCallback, useState } from "react";
import { Zh, speakChinese } from "@/lib/chinese";

/* ------------------------------------------------------------------ */
/* shared helpers                                                      */
/* ------------------------------------------------------------------ */

const DIGITS = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

const CHAR_PINYIN: Record<string, string> = {
  零: "líng",
  一: "yī",
  二: "èr",
  三: "sān",
  四: "sì",
  五: "wǔ",
  六: "liù",
  七: "qī",
  八: "bā",
  九: "jiǔ",
  十: "shí",
  百: "bǎi",
  两: "liǎng",
  点: "diǎn",
  半: "bàn",
  刻: "kè",
  分: "fēn",
  差: "chà",
  块: "kuài",
  毛: "máo",
  元: "yuán",
  角: "jiǎo",
  钱: "qián",
};

function pinyinFor(hanzi: string): string {
  return Array.from(hanzi)
    .map((c) => CHAR_PINYIN[c] ?? c)
    .join(" ");
}

/** 0-999 → hanzi numeral (十三 not 一十三; 一百零五; 二百五十八). */
function numberToHanzi(n: number): string {
  if (n <= 0) return "零";
  const h = Math.floor(n / 100);
  const t = Math.floor(n / 10) % 10;
  const o = n % 10;
  let s = "";
  if (h) s += DIGITS[h] + "百";
  if (t) s += (h === 0 && t === 1 ? "" : DIGITS[t]) + "十";
  else if (h && o) s += "零";
  if (o) s += DIGITS[o];
  return s;
}

function shuffleArr<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 rounded-xl bg-amber-50/80 px-3 py-2 text-sm leading-relaxed text-slate-600 ring-1 ring-amber-100">
      💡 {children}
    </p>
  );
}

function SpeakButton({ text, label }: { text: string; label?: string }) {
  return (
    <button
      type="button"
      onClick={() => speakChinese(text)}
      className="rounded-full bg-rose-50 px-2.5 py-1.5 text-lg ring-1 ring-rose-200 transition-colors hover:bg-rose-100"
      aria-label={label ?? `Listen to ${text}`}
      title="Listen"
    >
      🔊
    </button>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${
        active
          ? "border-rose-300 bg-rose-100 text-rose-700"
          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

function Stepper({
  label,
  value,
  display,
  onDec,
  onInc,
}: {
  label: string;
  value: number;
  display?: string;
  onDec: () => void;
  onInc: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-16 text-sm font-semibold text-slate-600">{label}</span>
      <button
        type="button"
        onClick={onDec}
        className="h-9 w-9 rounded-full border border-slate-200 bg-white text-lg font-bold text-slate-600 hover:bg-slate-50"
        aria-label={`decrease ${label}`}
      >
        −
      </button>
      <span className="w-12 text-center text-lg font-bold tabular-nums text-slate-900">
        {display ?? value}
      </span>
      <button
        type="button"
        onClick={onInc}
        className="h-9 w-9 rounded-full border border-slate-200 bg-white text-lg font-bold text-slate-600 hover:bg-slate-50"
        aria-label={`increase ${label}`}
      >
        +
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Tone lab                                                         */
/* ------------------------------------------------------------------ */

interface ToneChar {
  hanzi: string;
  meaning: string;
}

const TONE_SYLLABLES: {
  base: string;
  forms: [string, string, string, string, string]; // tones 1-4 + neutral
  chars: (ToneChar | null)[];
}[] = [
  {
    base: "ma",
    forms: ["mā", "má", "mǎ", "mà", "ma"],
    chars: [
      { hanzi: "妈", meaning: "mum" },
      { hanzi: "麻", meaning: "hemp; numb" },
      { hanzi: "马", meaning: "horse" },
      { hanzi: "骂", meaning: "to scold" },
      { hanzi: "吗", meaning: "question particle" },
    ],
  },
  {
    base: "ba",
    forms: ["bā", "bá", "bǎ", "bà", "ba"],
    chars: [
      { hanzi: "八", meaning: "eight" },
      { hanzi: "拔", meaning: "to pull out" },
      { hanzi: "把", meaning: "to hold; handle" },
      { hanzi: "爸", meaning: "dad" },
      { hanzi: "吧", meaning: "suggestion particle" },
    ],
  },
  {
    base: "shi",
    forms: ["shī", "shí", "shǐ", "shì", "shi"],
    chars: [
      { hanzi: "诗", meaning: "poem" },
      { hanzi: "十", meaning: "ten" },
      { hanzi: "史", meaning: "history" },
      { hanzi: "是", meaning: "to be" },
      null,
    ],
  },
  {
    base: "tang",
    forms: ["tāng", "táng", "tǎng", "tàng", "tang"],
    chars: [
      { hanzi: "汤", meaning: "soup" },
      { hanzi: "糖", meaning: "sugar; sweets" },
      { hanzi: "躺", meaning: "to lie down" },
      { hanzi: "烫", meaning: "scalding hot" },
      null,
    ],
  },
  {
    base: "yu",
    forms: ["yū", "yú", "yǔ", "yù", "yu"],
    chars: [
      null,
      { hanzi: "鱼", meaning: "fish" },
      { hanzi: "雨", meaning: "rain" },
      { hanzi: "玉", meaning: "jade" },
      null,
    ],
  },
];

const TONES: { label: string; name: string; path: string; hint: string }[] = [
  {
    label: "1st ˉ",
    name: "Tone 1 — high and flat",
    path: "M 10 14 L 90 14",
    hint: "hold a high note, like singing laaa",
  },
  {
    label: "2nd ˊ",
    name: "Tone 2 — rising",
    path: "M 10 46 Q 50 40 90 12",
    hint: "voice goes up, like asking huh?",
  },
  {
    label: "3rd ˇ",
    name: "Tone 3 — dip down then up",
    path: "M 10 24 Q 45 60 90 18",
    hint: "scoop down then up, like a thoughtful we-ell…",
  },
  {
    label: "4th ˋ",
    name: "Tone 4 — sharp fall",
    path: "M 10 10 L 90 50",
    hint: "quick drop, like a firm No!",
  },
  {
    label: "neutral ·",
    name: "Neutral tone — short and light",
    path: "M 44 34 L 62 36",
    hint: "a quick, unstressed tap — common in particles",
  },
];

const MA_ROW: { hanzi: string; pinyin: string; meaning: string }[] = [
  { hanzi: "妈", pinyin: "mā", meaning: "mum" },
  { hanzi: "麻", pinyin: "má", meaning: "hemp" },
  { hanzi: "马", pinyin: "mǎ", meaning: "horse" },
  { hanzi: "骂", pinyin: "mà", meaning: "scold" },
  { hanzi: "吗", pinyin: "ma", meaning: "…?" },
];

function ToneLab() {
  const [syl, setSyl] = useState(0);
  const [tone, setTone] = useState(0);
  const s = TONE_SYLLABLES[syl];
  const t = TONES[tone];
  const form = s.forms[tone];
  const example = s.chars[tone];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {TONE_SYLLABLES.map((x, i) => (
          <Chip key={x.base} active={syl === i} onClick={() => setSyl(i)}>
            {x.base}
          </Chip>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {TONES.map((x, i) => (
          <Chip key={x.label} active={tone === i} onClick={() => setTone(i)}>
            {x.label}
          </Chip>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-5 rounded-2xl bg-slate-50 p-4">
        <p className="text-5xl font-bold text-slate-900">{form}</p>
        <svg
          viewBox="0 0 100 60"
          role="img"
          aria-label={t.name}
          className="h-16 w-24 shrink-0 rounded-xl bg-white ring-1 ring-slate-200"
        >
          <line x1="0" y1="55" x2="100" y2="55" stroke="#e2e8f0" strokeWidth="2" />
          <path
            d={t.path}
            fill="none"
            stroke="#f43f5e"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        <div className="min-w-40 flex-1">
          <p className="text-sm font-bold text-slate-800">{t.name}</p>
          <p className="text-xs text-slate-500">{t.hint}</p>
          {example ? (
            <p className="mt-1.5 flex items-center gap-2 text-sm text-slate-700">
              <Zh hanzi={example.hanzi} pinyin={form} className="text-xl" />
              <span>= {example.meaning}</span>
              <SpeakButton text={example.hanzi} />
            </p>
          ) : (
            <p className="mt-1.5 text-xs italic text-slate-400">
              (no common character says “{form}” — try another tone!)
            </p>
          )}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-5 gap-1.5">
        {MA_ROW.map((m, i) => (
          <button
            key={m.hanzi}
            type="button"
            onClick={() => speakChinese(m.hanzi)}
            className={`rounded-xl border p-2 text-center transition-colors hover:bg-rose-50 ${
              syl === 0 && tone === i
                ? "border-rose-300 bg-rose-50"
                : "border-slate-200 bg-white"
            }`}
            title="Listen"
          >
            <span className="zh block text-xl" lang="zh-Hans">
              {m.hanzi}
            </span>
            <span className="block text-xs font-semibold text-slate-600">{m.pinyin}</span>
            <span className="block text-[10px] text-slate-400">{m.meaning}</span>
          </button>
        ))}
      </div>

      <Caption>
        In Mandarin, tones change the <strong>meaning</strong> of a word, not the mood.
        Say <em>ma</em> five ways and you get five different words — mum, hemp, horse,
        scold, or a question mark you can hear!
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Number builder                                                   */
/* ------------------------------------------------------------------ */

function NumberBuilder() {
  const [n, setN] = useState(258);
  const hanzi = numberToHanzi(n);
  const h = Math.floor(n / 100);
  const t = Math.floor(n / 10) % 10;
  const o = n % 10;

  const blocks: string[] = [];
  if (n === 0) blocks.push("零 (zero)");
  if (h) blocks.push(`${h} × 百 (hundred)`);
  if (h && !t && o) blocks.push("零 (placeholder for the empty tens)");
  if (t) blocks.push(h === 0 && t === 1 ? "十 (just “ten”, no 一)" : `${t} × 十 (ten)`);
  if (o) blocks.push(`${o}`);

  return (
    <div>
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={0}
          max={999}
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="w-full accent-rose-500"
          aria-label="Choose a number from 0 to 999"
        />
        <input
          type="number"
          min={0}
          max={999}
          value={n}
          onChange={(e) =>
            setN(Math.max(0, Math.min(999, Number(e.target.value) || 0)))
          }
          className="w-20 rounded-xl border border-slate-200 px-2 py-1.5 text-center font-bold tabular-nums"
          aria-label="Number"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 rounded-2xl bg-slate-50 p-4">
        <p className="text-3xl font-bold tabular-nums text-slate-400">{n} =</p>
        <Zh hanzi={hanzi} pinyin={pinyinFor(hanzi)} className="text-4xl font-bold" />
        <SpeakButton text={hanzi} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        <span className="font-semibold text-slate-500">Building blocks:</span>
        {blocks.map((b, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="text-slate-400">+</span>}
            <span className="rounded-full bg-sky-50 px-2.5 py-1 font-medium text-sky-700 ring-1 ring-sky-200">
              {b}
            </span>
          </React.Fragment>
        ))}
      </div>

      <Caption>
        Chinese numbers are pure Lego: digits 一到九, plus 十 (10) and 百 (100). Say
        <em> how many</em> of each block, biggest first. Two quirks: 10–19 is just
        十一…十九 (no 一 in front), and a skipped tens column needs a spoken 零 — 105 is
        一百<strong>零</strong>五, so nobody hears “一百五” and thinks 150.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Sentence builder                                                 */
/* ------------------------------------------------------------------ */

interface SbWord {
  hanzi: string;
  pinyin: string;
}
interface SbSentence {
  english: string;
  words: SbWord[]; // correct order
  altOrders?: string[]; // other acceptable joined-hanzi orders
  note: string;
}

const SB_SENTENCES: SbSentence[] = [
  {
    english: "I also like cats.",
    words: [
      { hanzi: "我", pinyin: "wǒ" },
      { hanzi: "也", pinyin: "yě" },
      { hanzi: "喜欢", pinyin: "xǐhuan" },
      { hanzi: "猫", pinyin: "māo" },
    ],
    note: "也 (also) sits right before the verb — never at the end like English “too”.",
  },
  {
    english: "We all go to school.",
    words: [
      { hanzi: "我们", pinyin: "wǒmen" },
      { hanzi: "都", pinyin: "dōu" },
      { hanzi: "去", pinyin: "qù" },
      { hanzi: "学校", pinyin: "xuéxiào" },
    ],
    note: "都 (all) comes after the subject and before the verb: subject + 都 + verb.",
  },
  {
    english: "I get up at seven o'clock.",
    words: [
      { hanzi: "我", pinyin: "wǒ" },
      { hanzi: "七点", pinyin: "qī diǎn" },
      { hanzi: "起床", pinyin: "qǐchuáng" },
    ],
    note: "Time goes BEFORE the verb: 我 + 七点 + 起床, never 我起床七点.",
  },
  {
    english: "He drinks tea at home.",
    words: [
      { hanzi: "他", pinyin: "tā" },
      { hanzi: "在家", pinyin: "zài jiā" },
      { hanzi: "喝", pinyin: "hē" },
      { hanzi: "茶", pinyin: "chá" },
    ],
    note: "Place (在家) also goes before the verb — the opposite of English.",
  },
  {
    english: "Tomorrow I am going to Beijing.",
    words: [
      { hanzi: "我", pinyin: "wǒ" },
      { hanzi: "明天", pinyin: "míngtiān" },
      { hanzi: "去", pinyin: "qù" },
      { hanzi: "北京", pinyin: "Běijīng" },
    ],
    altOrders: ["明天我去北京"],
    note: "Time can sit after the subject (我明天去…) or move right to the front for emphasis (明天我去…) — but never after the verb.",
  },
  {
    english: "We all watch TV in the evening.",
    words: [
      { hanzi: "我们", pinyin: "wǒmen" },
      { hanzi: "晚上", pinyin: "wǎnshang" },
      { hanzi: "都", pinyin: "dōu" },
      { hanzi: "看", pinyin: "kàn" },
      { hanzi: "电视", pinyin: "diànshì" },
    ],
    altOrders: ["晚上我们都看电视"],
    note: "Stack them up: subject + time + 都 + verb + object. 都 still hugs the verb.",
  },
];

function shuffledPool(len: number): number[] {
  const base = Array.from({ length: len }, (_, i) => i);
  for (let attempt = 0; attempt < 10; attempt++) {
    const p = shuffleArr(base);
    if (p.some((v, i) => v !== i)) return p;
  }
  return base.reverse();
}

function SentenceBuilder() {
  const [si, setSi] = useState(0);
  const [pool, setPool] = useState<number[]>(() =>
    shuffledPool(SB_SENTENCES[0].words.length)
  );
  const [built, setBuilt] = useState<number[]>([]);
  const [result, setResult] = useState<"right" | "wrong" | null>(null);

  const sentence = SB_SENTENCES[si];

  const reset = useCallback((i: number) => {
    setSi(i);
    setPool(shuffledPool(SB_SENTENCES[i].words.length));
    setBuilt([]);
    setResult(null);
  }, []);

  const take = (wi: number) => {
    setPool((p) => p.filter((x) => x !== wi));
    setBuilt((b) => [...b, wi]);
    setResult(null);
  };
  const putBack = (wi: number) => {
    setBuilt((b) => b.filter((x) => x !== wi));
    setPool((p) => [...p, wi]);
    setResult(null);
  };

  const correctHanzi = sentence.words.map((w) => w.hanzi).join("");
  const check = () => {
    const joined = built.map((i) => sentence.words[i].hanzi).join("");
    const ok =
      built.length === sentence.words.length &&
      (joined === correctHanzi || (sentence.altOrders ?? []).includes(joined));
    setResult(ok ? "right" : "wrong");
    speakChinese(correctHanzi + "。");
  };

  return (
    <div>
      <label className="text-sm font-semibold text-slate-600">
        Build this sentence:{" "}
        <select
          value={si}
          onChange={(e) => reset(Number(e.target.value))}
          className="ml-1 rounded-xl border border-slate-200 bg-white px-2 py-1.5 text-sm font-semibold text-slate-800"
        >
          {SB_SENTENCES.map((s, i) => (
            <option key={i} value={i}>
              {s.english}
            </option>
          ))}
        </select>
      </label>

      {/* answer row */}
      <div className="mt-3 flex min-h-16 flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-3">
        {built.length === 0 && (
          <span className="text-sm italic text-slate-400">
            tap the tiles below, in order…
          </span>
        )}
        {built.map((wi) => (
          <button
            key={wi}
            type="button"
            onClick={() => putBack(wi)}
            className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 hover:bg-rose-100"
            title="Put back"
          >
            <Zh
              hanzi={sentence.words[wi].hanzi}
              pinyin={sentence.words[wi].pinyin}
              className="text-xl"
            />
          </button>
        ))}
      </div>

      {/* tile pool */}
      <div className="mt-3 flex flex-wrap gap-2">
        {pool.map((wi) => (
          <button
            key={wi}
            type="button"
            onClick={() => take(wi)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm hover:bg-sky-50"
          >
            <Zh
              hanzi={sentence.words[wi].hanzi}
              pinyin={sentence.words[wi].pinyin}
              className="text-xl"
            />
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          disabled={built.length !== sentence.words.length}
          onClick={check}
          className="rounded-full bg-rose-500 px-4 py-2 text-sm font-bold text-white hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ✔️ Check
        </button>
        <button
          type="button"
          onClick={() => reset(si)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50"
        >
          🔀 Reshuffle
        </button>
        <SpeakButton text={correctHanzi + "。"} label="Hear the correct sentence" />
      </div>

      {result && (
        <div
          className={`pop-in mt-3 rounded-2xl p-4 ${
            result === "right"
              ? "bg-emerald-50 ring-1 ring-emerald-200"
              : "bg-amber-50 ring-1 ring-amber-200"
          }`}
        >
          <p className="font-bold text-slate-900">
            {result === "right" ? "🎉 Perfect word order!" : "🤔 Not quite — here's the right order:"}
          </p>
          <p className="mt-2 flex flex-wrap items-center gap-1.5">
            {sentence.words.map((w, i) => (
              <Zh key={i} hanzi={w.hanzi} pinyin={w.pinyin} className="text-2xl" />
            ))}
            <span className="ml-1 text-sm text-slate-500">= {sentence.english}</span>
          </p>
          <p className="mt-2 text-sm text-slate-600">💡 {sentence.note}</p>
        </div>
      )}

      <Caption>
        Chinese is Subject–Verb–Object like English, but <strong>when</strong> and{" "}
        <strong>where</strong> come before the verb, and little words like 也 (also) and
        都 (all) glue themselves to the front of the verb. Nail the slots and every
        sentence clicks into place.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Clock time                                                       */
/* ------------------------------------------------------------------ */

function hourHanzi(h: number): string {
  return h === 2 ? "两" : numberToHanzi(h);
}

function clockReadings(h: number, m: number): { main: string; alts: string[] } {
  const hh = hourHanzi(h);
  const nextH = hourHanzi(h === 12 ? 1 : h + 1);
  if (m === 0) return { main: hh + "点", alts: [] };
  if (m === 15) return { main: hh + "点一刻", alts: [hh + "点十五分"] };
  if (m === 30) return { main: hh + "点半", alts: [hh + "点三十分"] };
  if (m === 45)
    return { main: hh + "点四十五分", alts: [hh + "点三刻", "差一刻" + nextH + "点"] };
  const minHanzi = (m < 10 ? "零" : "") + numberToHanzi(m) + "分";
  const alts: string[] = [];
  if (m > 45) alts.push("差" + numberToHanzi(60 - m) + "分" + nextH + "点");
  return { main: hh + "点" + minHanzi, alts };
}

function ClockTime() {
  const [h, setH] = useState(3);
  const [m, setM] = useState(30);
  const { main, alts } = clockReadings(h, m);
  const digital = `${h}:${String(m).padStart(2, "0")}`;

  return (
    <div>
      <div className="flex flex-wrap gap-x-8 gap-y-3">
        <Stepper
          label="Hour"
          value={h}
          onDec={() => setH((x) => (x === 1 ? 12 : x - 1))}
          onInc={() => setH((x) => (x === 12 ? 1 : x + 1))}
        />
        <Stepper
          label="Minutes"
          value={m}
          display={String(m).padStart(2, "0")}
          onDec={() => setM((x) => (x === 0 ? 55 : x - 5))}
          onInc={() => setM((x) => (x === 55 ? 0 : x + 5))}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 rounded-2xl bg-slate-50 p-4">
        <p className="text-3xl font-bold tabular-nums text-slate-400">{digital} =</p>
        <Zh hanzi={main} pinyin={pinyinFor(main)} className="text-3xl font-bold" />
        <SpeakButton text={main} />
      </div>

      {alts.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <span className="font-semibold text-slate-500">Also heard:</span>
          {alts.map((a) => (
            <span key={a} className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2.5 py-1 ring-1 ring-sky-200">
              <Zh hanzi={a} pinyin={pinyinFor(a)} />
              <button
                type="button"
                onClick={() => speakChinese(a)}
                aria-label={`Listen to ${a}`}
                title="Listen"
              >
                🔊
              </button>
            </span>
          ))}
        </div>
      )}

      <Caption>
        点 = o'clock, 半 = half past, 刻 = a quarter (一刻 = quarter past, 三刻 = quarter
        to the next hour), and 差 means “short of” — 差一刻八点 is literally “a quarter
        short of eight”. Bonus quirk: two o'clock is 两点, never 二点!
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Money counter                                                    */
/* ------------------------------------------------------------------ */

function moneyNum(n: number): string {
  return n === 2 ? "两" : numberToHanzi(n);
}

function MoneyCounter() {
  const [tenths, setTenths] = useState(85); // 8.5 yuan
  const kuai = Math.floor(tenths / 10);
  const mao = tenths % 10;

  let colloquial = "";
  if (kuai > 0) colloquial += moneyNum(kuai) + "块";
  if (mao > 0) colloquial += moneyNum(mao) + "毛";
  if (mao === 0) colloquial += "钱";

  let formal = "";
  if (kuai > 0) formal += numberToHanzi(kuai) + "元";
  if (mao > 0) formal += numberToHanzi(mao) + "角";

  return (
    <div>
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={1}
          max={999}
          value={tenths}
          onChange={(e) => setTenths(Number(e.target.value))}
          className="w-full accent-rose-500"
          aria-label="Choose a price from 0.1 to 99.9 yuan"
        />
        <span className="w-20 shrink-0 text-right text-xl font-bold tabular-nums text-slate-900">
          ¥{(tenths / 10).toFixed(1)}
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            🗣️ Spoken (in the shop)
          </p>
          <div className="mt-1 flex items-center gap-2">
            <Zh hanzi={colloquial} pinyin={pinyinFor(colloquial)} className="text-2xl font-bold" />
            <SpeakButton text={colloquial} />
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            🧾 Written (on the price tag)
          </p>
          <div className="mt-1 flex items-center gap-2">
            <Zh hanzi={formal} pinyin={pinyinFor(formal)} className="text-2xl font-bold" />
            <SpeakButton text={formal} />
          </div>
        </div>
      </div>

      <Caption>
        Chinese money has two registers. Speaking, you say 块 (kuài, “lump”) and 毛
        (máo) — like English “quid”. Writing and formal speech use 元 (yuán) and 角
        (jiǎo). A tiny third unit, 分 (fēn, 1/100 yuan), exists but prices rarely use
        it today. Note 两块 for ¥2 — the “two of something” word 两 again!
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Measure-word matcher                                             */
/* ------------------------------------------------------------------ */

interface MwNoun {
  hanzi: string;
  pinyin: string;
  english: string;
  mw: string;
  phrasePinyin: string; // for 一 + MW + noun (with tone sandhi on 一)
}

const MW_NOUNS: MwNoun[] = [
  { hanzi: "书", pinyin: "shū", english: "book", mw: "本", phrasePinyin: "yì běn shū" },
  { hanzi: "猫", pinyin: "māo", english: "cat", mw: "只", phrasePinyin: "yì zhī māo" },
  { hanzi: "人", pinyin: "rén", english: "person", mw: "个", phrasePinyin: "yí gè rén" },
  { hanzi: "老师", pinyin: "lǎoshī", english: "teacher", mw: "个", phrasePinyin: "yí gè lǎoshī" },
  { hanzi: "苹果", pinyin: "píngguǒ", english: "apple", mw: "个", phrasePinyin: "yí gè píngguǒ" },
  { hanzi: "车", pinyin: "chē", english: "car", mw: "辆", phrasePinyin: "yí liàng chē" },
  { hanzi: "裤子", pinyin: "kùzi", english: "trousers", mw: "条", phrasePinyin: "yì tiáo kùzi" },
  { hanzi: "鱼", pinyin: "yú", english: "fish", mw: "条", phrasePinyin: "yì tiáo yú" },
  { hanzi: "笔", pinyin: "bǐ", english: "pen", mw: "支", phrasePinyin: "yì zhī bǐ" },
  { hanzi: "照片", pinyin: "zhàopiàn", english: "photo", mw: "张", phrasePinyin: "yì zhāng zhàopiàn" },
];

const MW_INFO: Record<string, { pinyin: string; why: string }> = {
  个: { pinyin: "gè", why: "the all-purpose default — people and most objects" },
  本: { pinyin: "běn", why: "bound things: books, notebooks, dictionaries" },
  只: { pinyin: "zhī", why: "most animals: cats, dogs, birds" },
  条: { pinyin: "tiáo", why: "long, bendy things: fish, rivers, roads, trousers" },
  辆: { pinyin: "liàng", why: "vehicles with wheels: cars, bikes, buses" },
  张: { pinyin: "zhāng", why: "flat things: paper, photos, tickets, tables" },
  支: { pinyin: "zhī", why: "stick-shaped things: pens, pencils (also written 枝)" },
  件: { pinyin: "jiàn", why: "items of clothing (tops) and “matters”" },
};

function mwOptionsFor(noun: MwNoun): string[] {
  const all = Object.keys(MW_INFO).filter((k) => k !== noun.mw);
  return shuffleArr([noun.mw, ...shuffleArr(all).slice(0, 2)]);
}

function MeasureWordGame() {
  const [ni, setNi] = useState(0);
  const [options, setOptions] = useState<string[]>(() => mwOptionsFor(MW_NOUNS[0]));
  const [wrong, setWrong] = useState<string[]>([]);
  const [solved, setSolved] = useState(false);

  const noun = MW_NOUNS[ni];
  const phrase = "一" + noun.mw + noun.hanzi;

  const pickNoun = (i: number) => {
    setNi(i);
    setOptions(mwOptionsFor(MW_NOUNS[i]));
    setWrong([]);
    setSolved(false);
  };

  const guess = (mw: string) => {
    if (solved) return;
    if (mw === noun.mw) {
      setSolved(true);
      speakChinese("一" + noun.mw + noun.hanzi);
    } else {
      setWrong((w) => (w.includes(mw) ? w : [...w, mw]));
    }
  };

  return (
    <div>
      <p className="text-sm font-semibold text-slate-600">Pick a noun:</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {MW_NOUNS.map((x, i) => (
          <Chip key={x.hanzi} active={ni === i} onClick={() => pickNoun(i)}>
            <span className="zh mr-1" lang="zh-Hans">
              {x.hanzi}
            </span>
            <span className="text-xs font-normal text-slate-400">{x.english}</span>
          </Chip>
        ))}
      </div>

      <p className="mt-4 text-sm font-semibold text-slate-600">
        Which measure word makes “one {noun.english}”? 一 __ {noun.hanzi}
      </p>
      <div className="mt-2 flex gap-2">
        {options.map((mw) => {
          const isWrong = wrong.includes(mw);
          const isRight = solved && mw === noun.mw;
          return (
            <button
              key={mw}
              type="button"
              onClick={() => guess(mw)}
              disabled={isWrong || solved}
              className={`rounded-2xl border-2 px-5 py-3 text-2xl font-bold transition-colors ${
                isRight
                  ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                  : isWrong
                    ? "border-rose-300 bg-rose-50 text-rose-400 line-through"
                    : "border-slate-200 bg-white text-slate-800 hover:bg-sky-50"
              }`}
              lang="zh-Hans"
            >
              {mw}
            </button>
          );
        })}
      </div>

      {wrong.length > 0 && !solved && (
        <div className="pop-in mt-3 rounded-2xl bg-amber-50 p-3 text-sm text-slate-700 ring-1 ring-amber-200">
          {wrong.map((mw) => (
            <p key={mw}>
              ❌ <strong>{mw}</strong> ({MW_INFO[mw]?.pinyin}) is for{" "}
              {MW_INFO[mw]?.why} — not a {noun.english}. Try again!
            </p>
          ))}
        </div>
      )}

      {solved && (
        <div className="pop-in mt-3 flex flex-wrap items-center gap-3 rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-200">
          <Zh hanzi={phrase} pinyin={noun.phrasePinyin} className="text-3xl font-bold" />
          <SpeakButton text={phrase} />
          <p className="text-sm text-slate-700">
            ✅ <strong>{noun.mw}</strong> ({MW_INFO[noun.mw]?.pinyin}) —{" "}
            {MW_INFO[noun.mw]?.why}.
          </p>
        </div>
      )}

      <Caption>
        You can't say “one book” in Chinese without a <strong>measure word</strong>:
        number + MW + noun (一本书, not 一书). 个 is the safe default, but each shape
        family has its own: 本 for bound things, 只 for animals, 条 for long bendy
        things, 辆 for vehicles, 张 for flat things, 支 for sticks, 件/条 for clothes.
      </Caption>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* registry + default component                                        */
/* ------------------------------------------------------------------ */

export const EXPLORABLES_ALL: Record<
  string,
  { title: string; description: string; Component: React.ComponentType }
> = {
  "tone-lab": {
    title: "🎵 Tone Lab",
    description:
      "Mix a syllable with each of the four tones (plus the sneaky neutral tone) and hear how the meaning transforms.",
    Component: ToneLab,
  },
  "number-builder": {
    title: "🔢 Number Builder",
    description:
      "Slide from 0 to 999 and watch the Chinese number assemble itself from just eleven building blocks.",
    Component: NumberBuilder,
  },
  "sentence-builder": {
    title: "🧱 Sentence Builder",
    description:
      "Drag-free tile puzzle: rebuild real sentences and master Chinese word order — time and place before the verb!",
    Component: SentenceBuilder,
  },
  "clock-time": {
    title: "⏰ Clock Time Machine",
    description:
      "Spin the hands and read the time out loud the Chinese way, with 点, 半, 刻 and the clever 差 trick.",
    Component: ClockTime,
  },
  "money-counter": {
    title: "💰 Money Counter",
    description:
      "Set any price in yuan and see both the street version (块/毛) and the price-tag version (元/角).",
    Component: MoneyCounter,
  },
  "measure-word": {
    title: "📏 Measure-Word Matcher",
    description:
      "Every Chinese noun needs its counting word. Pick a noun, guess its measure word, learn the shape-logic behind it.",
    Component: MeasureWordGame,
  },
};

export const DEFAULT_INTERACTIVES: Record<string, string[]> = {
  greetings: ["tone-lab"],
  family: ["measure-word"],
  school: ["sentence-builder"],
  hobbies: ["sentence-builder"],
  food: ["measure-word", "money-counter"],
  shopping: ["money-counter", "number-builder"],
  "daily-routine": ["clock-time"],
  weather: ["tone-lab"],
  travel: ["sentence-builder"],
  home: ["measure-word"],
  health: ["number-builder"],
  festivals: ["number-builder"],
};

export default function Explorables({
  topicId,
  keys,
}: {
  topicId?: string;
  keys?: string[];
}) {
  const wanted = keys ?? (topicId ? DEFAULT_INTERACTIVES[topicId] : undefined) ?? [];
  const entries = wanted
    .map((k) => ({ key: k, entry: EXPLORABLES_ALL[k] }))
    .filter((x): x is { key: string; entry: (typeof EXPLORABLES_ALL)[string] } =>
      Boolean(x.entry)
    );

  if (entries.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
        🛠️ An interactive for this topic is coming soon — check back after your next
        lesson!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {entries.map(({ key, entry }) => (
        <section
          key={key}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <h3 className="text-lg font-bold text-slate-900">{entry.title}</h3>
          <p className="mt-1 mb-4 text-sm text-slate-500">{entry.description}</p>
          <entry.Component />
        </section>
      ))}
    </div>
  );
}
