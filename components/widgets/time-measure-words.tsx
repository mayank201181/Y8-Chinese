"use client";
import { useState } from "react";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Widget 1: Measure-Word Classifier Machine (量词机)
// ---------------------------------------------------------------------------

type MwKey = "ge" | "kou" | "ben" | "bei" | "wan" | "pan" | "jian" | "tiao" | "shuang" | "zhi" | "zhang";

interface ClassifierSpec {
  key: MwKey;
  hanzi: string;
  pinyin: string;
  category: string;
  rule: string;
}

const CLASSIFIERS: ClassifierSpec[] = [
  { key: "ge", hanzi: "个", pinyin: "gè", category: "General / People", rule: "Default all-rounder for people, fruits, buns and abstract things (一个人, 一个苹果)." },
  { key: "kou", hanzi: "口", pinyin: "kǒu", category: "Household Members", rule: "Literally ‘mouths to feed’ — used specifically when counting family members (我家有四口人)." },
  { key: "ben", hanzi: "本", pinyin: "běn", category: "Bound Books", rule: "Used for bound volumes with spines: books, dictionaries, notebooks and magazines." },
  { key: "bei", hanzi: "杯", pinyin: "bēi", category: "Cups & Glasses", rule: "Container classifier for drinks in a cup, mug or glass (茶, 咖啡, 果汁, 奶茶)." },
  { key: "wan", hanzi: "碗", pinyin: "wǎn", category: "Bowls", rule: "Container classifier for food or soup served in a bowl (米饭, 面条, 汤)." },
  { key: "pan", hanzi: "盘", pinyin: "pán", category: "Plates & Dishes", rule: "Container classifier for shared dishes on a flat plate (饺子, 炒菜)." },
  { key: "jian", hanzi: "件", pinyin: "jiàn", category: "Tops & Matters", rule: "Upper-body garments (衬衫, 毛衣, 外套, T恤衫) and matters/gifts (一件事)." },
  { key: "tiao", hanzi: "条", pinyin: "tiáo", category: "Long & Flexible", rule: "Long, narrow or winding shapes: trousers, skirts, fish, rivers, roads and scarves!" },
  { key: "shuang", hanzi: "双", pinyin: "shuāng", category: "Matched Pairs", rule: "Two items used together as a pair: shoes, socks, chopsticks, gloves, eyes." },
  { key: "zhi", hanzi: "只", pinyin: "zhī", category: "Small Animals", rule: "Pets, birds and small animals (狗, 猫, 鸟), or one single item of a pair." },
  { key: "zhang", hanzi: "张", pinyin: "zhāng", category: "Flat Surfaces", rule: "Flat objects or furniture with a flat top: paper, tickets, photos, tables, beds." },
];

interface NounItem {
  id: string;
  noun: string;
  pinyin: string;
  en: string;
  emoji: string;
  mw: MwKey;
  /** Optional context prefix for natural Mandarin, e.g. 我家有… */
  prefix?: { hanzi: string; pinyin: string; en: string };
}

const NOUN_ITEMS: NounItem[] = [
  { id: "friend", noun: "朋友", pinyin: "péngyou", en: "friend(s)", emoji: "🧑‍🤝‍🧑", mw: "ge" },
  { id: "family", noun: "人", pinyin: "rén", en: "family member(s)", emoji: "👨‍👩‍👧‍👦", mw: "kou", prefix: { hanzi: "我家有", pinyin: "Wǒ jiā yǒu ", en: "My family has " } },
  { id: "book", noun: "中文书", pinyin: "Zhōngwén shū", en: "Chinese book(s)", emoji: "📕", mw: "ben" },
  { id: "milktea", noun: "奶茶", pinyin: "nǎichá", en: "cup(s) of bubble tea", emoji: "🧋", mw: "bei" },
  { id: "noodles", noun: "牛肉面", pinyin: "niúròumiàn", en: "bowl(s) of beef noodles", emoji: "🍜", mw: "wan" },
  { id: "dumplings", noun: "饺子", pinyin: "jiǎozi", en: "plate(s) of dumplings", emoji: "🥟", mw: "pan" },
  { id: "sweater", noun: "毛衣", pinyin: "máoyī", en: "sweater(s)", emoji: "🧥", mw: "jian" },
  { id: "trousers", noun: "裤子", pinyin: "kùzi", en: "pair(s) of trousers", emoji: "👖", mw: "tiao" },
  { id: "fish", noun: "鱼", pinyin: "yú", en: "fish", emoji: "🐟", mw: "tiao" },
  { id: "chopsticks", noun: "筷子", pinyin: "kuàizi", en: "pair(s) of chopsticks", emoji: "🥢", mw: "shuang" },
  { id: "shoes", noun: "运动鞋", pinyin: "yùndòngxié", en: "pair(s) of trainers", emoji: "👟", mw: "shuang" },
  { id: "dog", noun: "小狗", pinyin: "xiǎogǒu", en: "puppy / puppies", emoji: "🐶", mw: "zhi" },
  { id: "ticket", noun: "电影票", pinyin: "diànyǐngpiào", en: "cinema ticket(s)", emoji: "🎟️", mw: "zhang" },
];

const DIGITS_ZH = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const DIGITS_PY = ["líng", "yī", "èr", "sān", "sì", "wǔ", "liù", "qī", "bā", "jiǔ"];

/** Convert 1..30 to Mandarin number BEFORE a measure word (2 -> 两, 12 -> 十二, 20 -> 二十, 22 -> 二十二). */
function numberBeforeMw(n: number): { hanzi: string; pinyin: string; ruleNote: string } {
  if (n === 2) {
    return {
      hanzi: "两",
      pinyin: "liǎng",
      ruleNote: "⚡ 2 before ANY measure word MUST be 两 (liǎng), NEVER *二*! (Say 两本书, never *二本书*.)",
    };
  }
  if (n < 10) {
    return {
      hanzi: DIGITS_ZH[n],
      pinyin: DIGITS_PY[n],
      ruleNote: `Standard counting numeral ${DIGITS_ZH[n]} (${DIGITS_PY[n]}) + Measure Word + Noun.`,
    };
  }
  if (n === 10) {
    return { hanzi: "十", pinyin: "shí", ruleNote: "10 is 十 (shí)." };
  }
  if (n < 20) {
    const u = n - 10;
    return {
      hanzi: `十${DIGITS_ZH[u]}`,
      pinyin: u === 2 ? "shí'èr" : `shí${DIGITS_PY[u]}`,
      ruleNote:
        n === 12
          ? "⚡ Watch out! 12 uses 二 (十二 shí'èr), NEVER *十两*! Only standalone ‘2’ becomes 两."
          : `10 + ${u} = 十${DIGITS_ZH[u]}.`,
    };
  }
  const tens = Math.floor(n / 10);
  const u = n % 10;
  const hanzi = u === 0 ? `${DIGITS_ZH[tens]}十` : `${DIGITS_ZH[tens]}十${DIGITS_ZH[u]}`;
  const pinyin =
    u === 0
      ? `${DIGITS_PY[tens]}shí`
      : u === 2
        ? `${DIGITS_PY[tens]}shí'èr`
        : `${DIGITS_PY[tens]}shí${DIGITS_PY[u]}`;
  const ruleNote =
    n === 20 || n === 22
      ? `⚡ Multiples & endings in tens (${hanzi}) ALWAYS keep 二 — never *两十* or *二十两*!`
      : `${tens} tens${u ? ` + ${u}` : ""} = ${hanzi}.`;
  return { hanzi, pinyin, ruleNote };
}

const COUNT_PRESETS = [1, 2, 4, 10, 12, 20, 22];

function ClassifierMachine() {
  const [mode, setMode] = useState<"lab" | "challenge">("lab");
  const [itemId, setItemId] = useState<string>("book");
  const [count, setCount] = useState<number>(2);

  // Challenge state
  const [qIdx, setQIdx] = useState<number>(0);
  const [pickedNum, setPickedNum] = useState<"liang" | "er">("liang");
  const [pickedMw, setPickedMw] = useState<MwKey | null>(null);

  const item = NOUN_ITEMS.find((i) => i.id === itemId) ?? NOUN_ITEMS[0];
  const mwSpec = CLASSIFIERS.find((c) => c.key === item.mw) ?? CLASSIFIERS[0];
  const num = numberBeforeMw(count);

  const phraseHanzi = `${item.prefix?.hanzi ?? ""}${num.hanzi}${mwSpec.hanzi}${item.noun}`;
  const phrasePinyin = `${item.prefix?.pinyin ?? ""}${num.pinyin} ${mwSpec.pinyin} ${item.pinyin}`;
  const phraseEn = `${item.prefix?.en ?? ""}${count} ${item.en}`;

  // Challenge items (deterministic list)
  const CHALLENGES: { item: NounItem; n: number; needsTwoChoice: boolean; correctTwo: "liang" | "er" }[] = [
    { item: NOUN_ITEMS[7], n: 2, needsTwoChoice: true, correctTwo: "liang" }, // 两条裤子
    { item: NOUN_ITEMS[2], n: 12, needsTwoChoice: true, correctTwo: "er" }, // 十二本中文书
    { item: NOUN_ITEMS[9], n: 2, needsTwoChoice: true, correctTwo: "liang" }, // 两双筷子
    { item: NOUN_ITEMS[1], n: 4, needsTwoChoice: false, correctTwo: "liang" }, // 我家有四口人
    { item: NOUN_ITEMS[12], n: 2, needsTwoChoice: true, correctTwo: "liang" }, // 两张电影票
    { item: NOUN_ITEMS[6], n: 20, needsTwoChoice: true, correctTwo: "er" }, // 二十件毛衣
  ];

  const curQ = CHALLENGES[qIdx % CHALLENGES.length];
  const qMwOk = pickedMw === curQ.item.mw;
  const qTwoOk = !curQ.needsTwoChoice || pickedNum === curQ.correctTwo;
  const qSolved = pickedMw !== null && qMwOk && qTwoOk;
  const curTargetMw = CLASSIFIERS.find((c) => c.key === curQ.item.mw) ?? CLASSIFIERS[0];
  const curTargetNum = numberBeforeMw(curQ.n);
  const curTargetHanzi = `${curQ.item.prefix?.hanzi ?? ""}${curTargetNum.hanzi}${curTargetMw.hanzi}${curQ.item.noun}`;

  return (
    <WidgetFrame
      title="Measure-Word Classifier Machine (量词机 · 二 vs 两)"
      tryThis={[
        "Pick **中文书**, **裤子**, **筷子** and **电影票** — see how Mandarin classifies objects by shape, container or pair!",
        "Jump the count between **2**, **12**, **20** and **22**: watch **两 (liǎng)** flip back to **二 (èr)** in **十二** and **二十二**.",
        "Switch to **🎯 Self-Check Challenge** to test both your classifier choice and the **二 vs 两** trap.",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>Why {mwSpec.hanzi} ({mwSpec.pinyin})?</strong> {mwSpec.category} — {mwSpec.rule}
          </p>
          <p className="font-semibold text-brand">{num.ruleNote}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Mode"
            value={mode}
            onChange={(m) => {
              setMode(m);
              setPickedMw(null);
            }}
            options={[
              { value: "lab", label: "⚙️ Sorter Lab (11 Classifiers)" },
              { value: "challenge", label: "🎯 Self-Check Challenge" },
            ]}
          />
        </div>

        {mode === "lab" ? (
          <>
            {/* Object Grid */}
            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-5">
              {NOUN_ITEMS.map((it) => {
                const on = it.id === itemId;
                const mw = CLASSIFIERS.find((c) => c.key === it.mw);
                return (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => setItemId(it.id)}
                    className={`flex items-center justify-between gap-1.5 rounded-xl border px-2.5 py-2 text-left transition ${
                      on ? "border-brand bg-brand-soft shadow-sm" : "border-line bg-surface hover:bg-surface-2"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="text-lg" aria-hidden>{it.emoji}</span>
                      <span>
                        <span className="block text-sm font-extrabold text-ink">{it.noun}</span>
                        <span className="block text-[10px] text-ink-2">{it.pinyin}</span>
                      </span>
                    </span>
                    <span className={`rounded-md px-1.5 py-0.5 text-xs font-extrabold ${on ? "bg-brand text-white" : "bg-surface-2 text-brand"}`}>
                      {mw?.hanzi}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Count Stepper + 二/两 presets */}
            <div className="grid gap-3 rounded-xl border border-line bg-surface p-3 sm:grid-cols-2">
              <Stepper label="Quantity (数量)" value={count} min={1} max={30} onChange={setCount} />
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold text-ink-2">Test 二 vs 两:</span>
                {COUNT_PRESETS.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setCount(n)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-extrabold tabular-nums transition ${
                      count === n ? "border-brand bg-brand text-white" : "border-line bg-surface-2 text-ink hover:border-brand"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Machine Output */}
            <div className="rounded-xl border border-line bg-surface-2 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {item.prefix ? (
                    <span className="rounded-xl border border-line bg-surface px-3 py-2 text-center">
                      <span className="block text-[10px] font-bold uppercase text-ink-2">Context</span>
                      <span className="text-xl font-extrabold text-ink">{item.prefix.hanzi}</span>
                    </span>
                  ) : null}
                  <span className="rounded-xl border border-brand bg-brand-soft px-3 py-2 text-center">
                    <span className="block text-[10px] font-bold uppercase text-brand">Number</span>
                    <span className="text-2xl font-extrabold text-brand">{num.hanzi}</span>
                    <span className="block text-xs font-bold text-brand">{num.pinyin}</span>
                  </span>
                  <span className="text-lg font-bold text-ink-2">+</span>
                  <span className="rounded-xl border border-good bg-good-soft px-3 py-2 text-center">
                    <span className="block text-[10px] font-bold uppercase text-good">Classifier</span>
                    <span className="text-2xl font-extrabold text-good">{mwSpec.hanzi}</span>
                    <span className="block text-xs font-bold text-good">{mwSpec.pinyin}</span>
                  </span>
                  <span className="text-lg font-bold text-ink-2">+</span>
                  <span className="rounded-xl border border-info bg-info-soft px-3 py-2 text-center">
                    <span className="block text-[10px] font-bold uppercase text-info">Noun {item.emoji}</span>
                    <span className="text-2xl font-extrabold text-info">{item.noun}</span>
                    <span className="block text-xs font-bold text-info">{item.pinyin}</span>
                  </span>
                </div>
                <SpeakButtons text={phraseHanzi} />
              </div>

              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-2.5">
                <div>
                  <span className="text-lg font-extrabold text-ink">{phraseHanzi}</span>
                  <span className="ml-2 text-sm font-bold text-brand">({phrasePinyin})</span>
                </div>
                <div className="text-xs font-semibold text-ink-2">Meaning: “{phraseEn}”</div>
              </div>
            </div>
          </>
        ) : (
          /* Self-check Challenge Mode */
          <div className="space-y-3 rounded-xl border border-line bg-surface p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="chip">Question {(qIdx % CHALLENGES.length) + 1} / {CHALLENGES.length}</span>
                <div className="mt-1.5 text-lg font-extrabold text-ink">
                  {curQ.item.emoji} Express in Mandarin: <span className="text-brand">{curQ.item.prefix?.en ?? ""}{curQ.n} × {curQ.item.noun} ({curQ.item.en})</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setQIdx((q) => q + 1);
                  setPickedMw(null);
                  setPickedNum("liang");
                }}
                className="btn btn-secondary btn-sm"
              >
                Skip / Next →
              </button>
            </div>

            {curQ.needsTwoChoice ? (
              <div>
                <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">
                  Step 1: Does {curQ.n} use 两 (liǎng) or 二 (èr)?
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPickedNum("liang")}
                    className={`btn btn-sm ${pickedNum === "liang" ? "btn-primary" : "btn-secondary"}`}
                  >
                    两 (liǎng) — {curQ.n === 2 ? "两…" : curQ.n === 12 ? "*十两…" : "*二十两…"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPickedNum("er")}
                    className={`btn btn-sm ${pickedNum === "er" ? "btn-primary" : "btn-secondary"}`}
                  >
                    二 (èr) — {curQ.n === 2 ? "*二…" : curQ.n === 12 ? "十二…" : "二十…"}
                  </button>
                </div>
              </div>
            ) : null}

            <div>
              <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">
                Step {curQ.needsTwoChoice ? "2" : "1"}: Choose the matching classifier (量词)
              </div>
              <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-6">
                {CLASSIFIERS.map((c) => {
                  const chosen = pickedMw === c.key;
                  return (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => {
                        setPickedMw(c.key);
                        if (c.key === curQ.item.mw && (!curQ.needsTwoChoice || pickedNum === curQ.correctTwo)) {
                          speakChinese(curTargetHanzi);
                        }
                      }}
                      className={`rounded-xl border p-2 text-center transition ${
                        chosen
                          ? c.key === curQ.item.mw
                            ? "border-good bg-good-soft text-good"
                            : "border-bad bg-bad-soft text-bad"
                          : "border-line bg-surface-2 hover:border-brand"
                      }`}
                    >
                      <div className="text-xl font-extrabold">{c.hanzi}</div>
                      <div className="text-[11px] font-bold">{c.pinyin}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {pickedMw !== null ? (
              <div className={`rounded-xl p-3 text-sm font-semibold ${qSolved ? "bg-good-soft text-good" : "bg-bad-soft text-bad"}`}>
                {qSolved ? (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span>
                      ✅ 正确！ <strong>{curTargetHanzi}</strong> — {curTargetMw.rule}
                    </span>
                    <SpeakButtons text={curTargetHanzi} compact />
                  </div>
                ) : (
                  <span>
                    {!qTwoOk
                      ? `Check 二 vs 两: ${curTargetNum.ruleNote} `
                      : `Not ${CLASSIFIERS.find((c) => c.key === pickedMw)?.hanzi} — think about the shape/container of ${curQ.item.noun} (${curQ.item.en})!`}
                  </span>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Mandarin Big-to-Small Date & Calendar Explorer
// ---------------------------------------------------------------------------

const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const WEEKDAYS = [
  { idx: 0, zhSpoken: "星期天", zhFormal: "星期日", pySpoken: "Xīngqītiān", pyFormal: "Xīngqīrì", en: "Sunday" },
  { idx: 1, zhSpoken: "星期一", zhFormal: "星期一", pySpoken: "Xīngqīyī", pyFormal: "Xīngqīyī", en: "Monday" },
  { idx: 2, zhSpoken: "星期二", zhFormal: "星期二", pySpoken: "Xīngqī'èr", pyFormal: "Xīngqī'èr", en: "Tuesday" },
  { idx: 3, zhSpoken: "星期三", zhFormal: "星期三", pySpoken: "Xīngqīsān", pyFormal: "Xīngqīsān", en: "Wednesday" },
  { idx: 4, zhSpoken: "星期四", zhFormal: "星期四", pySpoken: "Xīngqīsì", pyFormal: "Xīngqīsì", en: "Thursday" },
  { idx: 5, zhSpoken: "星期五", zhFormal: "星期五", pySpoken: "Xīngqīwǔ", pyFormal: "Xīngqīwǔ", en: "Friday" },
  { idx: 6, zhSpoken: "星期六", zhFormal: "星期六", pySpoken: "Xīngqīliù", pyFormal: "Xīngqīliù", en: "Saturday" },
];

const RELATIVE_DAYS: { offset: number; hanzi: string; pinyin: string; en: string }[] = [
  { offset: -2, hanzi: "前天", pinyin: "qiántiān", en: "2 days ago" },
  { offset: -1, hanzi: "昨天", pinyin: "zuótiān", en: "yesterday" },
  { offset: 0, hanzi: "今天", pinyin: "jīntiān", en: "today" },
  { offset: 1, hanzi: "明天", pinyin: "míngtiān", en: "tomorrow" },
  { offset: 2, hanzi: "后天", pinyin: "hòutiān", en: "day after tomorrow" },
];

const YEAR_DIGITS_ZH = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const YEAR_DIGITS_PY = ["líng", "yī", "èr", "sān", "sì", "wǔ", "liù", "qī", "bā", "jiǔ"];

function yearToMandarin(y: number): { hanzi: string; pinyin: string } {
  const digits = String(y).split("").map(Number);
  return {
    hanzi: digits.map((d) => YEAR_DIGITS_ZH[d]).join("") + "年",
    pinyin: digits.map((d) => YEAR_DIGITS_PY[d]).join(" ") + " nián",
  };
}

function cardinal1to31(n: number): { hanzi: string; pinyin: string } {
  if (n <= 10) {
    return n === 10
      ? { hanzi: "十", pinyin: "shí" }
      : { hanzi: DIGITS_ZH[n], pinyin: DIGITS_PY[n] };
  }
  if (n < 20) {
    const u = n - 10;
    return { hanzi: `十${DIGITS_ZH[u]}`, pinyin: u === 2 ? "shí'èr" : `shí${DIGITS_PY[u]}` };
  }
  const t = Math.floor(n / 10);
  const u = n % 10;
  return {
    hanzi: u === 0 ? `${DIGITS_ZH[t]}十` : `${DIGITS_ZH[t]}十${DIGITS_ZH[u]}`,
    pinyin:
      u === 0
        ? `${DIGITS_PY[t]}shí`
        : u === 2
          ? `${DIGITS_PY[t]}shí'èr`
          : `${DIGITS_PY[t]}shí${DIGITS_PY[u]}`,
  };
}

function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function MandarinDateExplorer() {
  const [baseYear, setBaseYear] = useState<number>(2026);
  const [baseMonth, setBaseMonth] = useState<number>(11);
  const [baseDay, setBaseDay] = useState<number>(17);
  const [relOffset, setRelOffset] = useState<number>(0);
  const [style, setStyle] = useState<"spoken" | "formal">("spoken");

  const maxDay = daysInMonth(baseYear, baseMonth);
  const clampedBaseDay = Math.min(baseDay, maxDay);

  // Compute target UTC date after applying Yesterday / Today / Tomorrow offset
  const targetDate = new Date(Date.UTC(baseYear, baseMonth - 1, clampedBaseDay + relOffset));
  const y = targetDate.getUTCFullYear();
  const m = targetDate.getUTCMonth() + 1;
  const d = targetDate.getUTCDate();
  const wk = WEEKDAYS[targetDate.getUTCDay()];

  const yZh = yearToMandarin(y);
  const mNum = cardinal1to31(m);
  const dNum = cardinal1to31(d);
  const dayMarker = style === "spoken" ? { zh: "号", py: "hào" } : { zh: "日", py: "rì" };
  const wkZh = style === "spoken" ? wk.zhSpoken : wk.zhFormal;
  const wkPy = style === "spoken" ? wk.pySpoken : wk.pyFormal;

  const relSpec = RELATIVE_DAYS.find((r) => r.offset === relOffset) ?? RELATIVE_DAYS[2];

  const fullSentenceZh = `${relSpec.hanzi}是${yZh.hanzi}${mNum.hanzi}月${dNum.hanzi}${dayMarker.zh}，${wkZh}。`;
  const fullSentencePy = `${relSpec.pinyin[0].toUpperCase() + relSpec.pinyin.slice(1)} shì ${yZh.pinyin} ${mNum.pinyin}yuè ${dNum.pinyin}${dayMarker.py}, ${wkPy}.`;
  const englishDate = `${wk.en}, ${d} ${MONTHS_EN[m - 1]} ${y}`;

  return (
    <WidgetFrame
      title="Mandarin Big-to-Small Date & Calendar Explorer (年月日与星期)"
      tryThis={[
        "Set the date to **Sunday** and toggle **Spoken (口语)** vs **Written (书面语)**: notice **号 → 日** and **星期天 → 星期日** (never *星期七*!).",
        "Click **前天 / 昨天 / 今天 / 明天 / 后天** to jump across month boundaries and hear the live date sentence.",
        "Compare the **English Small → Big** funnel with **Mandarin Big → Small**: Year → Month → Day → Weekday!",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>Why digit-by-digit for years?</strong> Years read each digit individually (<strong>{yZh.hanzi}</strong> ={" "}
            <em>{yZh.pinyin}</em>), whereas months (<strong>{mNum.hanzi}月</strong>) and dates (<strong>{dNum.hanzi}{dayMarker.zh}</strong>) read as whole numbers — and 2nd/12th/22nd ALWAYS use <strong>二</strong>, never 两!
          </p>
          {wk.idx === 0 ? (
            <p className="font-semibold text-brand">
              🌟 Sunday alert: Monday–Saturday use numbers 1–6 (星期一…星期六), but Sunday is ALWAYS <strong>星期天</strong> or <strong>星期日</strong> — NEVER *星期七*!
            </p>
          ) : null}
        </div>
      }
    >
      <div className="space-y-4">
        {/* Spoken vs Written register + Relative day jumper */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Register"
            value={style}
            onChange={setStyle}
            options={[
              { value: "spoken", label: "🗣️ Spoken (号 · 星期天)" },
              { value: "formal", label: "📝 Written (日 · 星期日)" },
            ]}
          />

          <div className="flex flex-wrap gap-1">
            {RELATIVE_DAYS.map((r) => {
              const active = r.offset === relOffset;
              return (
                <button
                  key={r.hanzi}
                  type="button"
                  onClick={() => setRelOffset(r.offset)}
                  className={`rounded-xl border px-2.5 py-1.5 text-xs transition ${
                    active ? "border-brand bg-brand text-white font-extrabold" : "border-line bg-surface text-ink-2 font-bold hover:text-ink"
                  }`}
                >
                  {r.hanzi} ({r.en})
                </button>
              );
            })}
          </div>
        </div>

        {/* Anchor Date Controls */}
        <div className="grid gap-3 rounded-xl border border-line bg-surface p-3 sm:grid-cols-3">
          <Stepper
            label="Anchor Year (年)"
            value={baseYear}
            min={2024}
            max={2030}
            onChange={(v) => {
              setBaseYear(v);
              setRelOffset(0);
            }}
          />
          <Stepper
            label="Month (月)"
            value={baseMonth}
            min={1}
            max={12}
            format={(v) => `${v}月`}
            onChange={(v) => {
              setBaseMonth(v);
              setRelOffset(0);
            }}
          />
          <Stepper
            label={`Day (${dayMarker.zh})`}
            value={clampedBaseDay}
            min={1}
            max={maxDay}
            format={(v) => `${v}${dayMarker.zh}`}
            onChange={(v) => {
              setBaseDay(v);
              setRelOffset(0);
            }}
          />
        </div>

        {/* Visual Funnel Comparison: Mandarin Big-to-Small vs English Small-to-Big */}
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-brand bg-brand-soft p-3.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
              🇨🇳🇸🇬 Mandarin: BIGGEST → SMALLEST
            </div>
            <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
              <span className="rounded-lg bg-surface px-2.5 py-1.5 text-center shadow-sm">
                <span className="block text-[10px] font-bold text-ink-2">1. YEAR</span>
                <span className="text-base font-extrabold text-brand">{yZh.hanzi}</span>
              </span>
              <span className="font-bold text-brand">→</span>
              <span className="rounded-lg bg-surface px-2.5 py-1.5 text-center shadow-sm">
                <span className="block text-[10px] font-bold text-ink-2">2. MONTH</span>
                <span className="text-base font-extrabold text-good">{mNum.hanzi}月</span>
              </span>
              <span className="font-bold text-brand">→</span>
              <span className="rounded-lg bg-surface px-2.5 py-1.5 text-center shadow-sm">
                <span className="block text-[10px] font-bold text-ink-2">3. DAY</span>
                <span className="text-base font-extrabold text-info">{dNum.hanzi}{dayMarker.zh}</span>
              </span>
              <span className="font-bold text-brand">→</span>
              <span className="rounded-lg bg-surface px-2.5 py-1.5 text-center shadow-sm">
                <span className="block text-[10px] font-bold text-ink-2">4. WEEKDAY</span>
                <span className="text-base font-extrabold text-ink">{wkZh}</span>
              </span>
            </div>
            <div className="mt-2 text-xs font-semibold text-ink-2">
              Numeric shorthand: <strong>{y}年{m}月{d}{dayMarker.zh}{wkZh}</strong>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-surface p-3.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              🇬🇧 English (UK / Singapore): SMALL → BIG
            </div>
            <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
              <span className="rounded-lg bg-surface-2 px-2.5 py-1.5 text-center">
                <span className="block text-[10px] font-bold text-ink-2">WEEKDAY</span>
                <span className="text-sm font-bold text-ink">{wk.en}</span>
              </span>
              <span className="text-ink-2">→</span>
              <span className="rounded-lg bg-surface-2 px-2.5 py-1.5 text-center">
                <span className="block text-[10px] font-bold text-ink-2">DAY</span>
                <span className="text-sm font-bold text-ink">{d}</span>
              </span>
              <span className="text-ink-2">→</span>
              <span className="rounded-lg bg-surface-2 px-2.5 py-1.5 text-center">
                <span className="block text-[10px] font-bold text-ink-2">MONTH</span>
                <span className="text-sm font-bold text-ink">{MONTHS_EN[m - 1]}</span>
              </span>
              <span className="text-ink-2">→</span>
              <span className="rounded-lg bg-surface-2 px-2.5 py-1.5 text-center">
                <span className="block text-[10px] font-bold text-ink-2">YEAR</span>
                <span className="text-sm font-bold text-ink">{y}</span>
              </span>
            </div>
            <div className="mt-2 text-xs font-semibold text-ink-2">
              Notice Mandarin reverses the zoom: Universe → Year → Month → Day → Hour!
            </div>
          </div>
        </div>

        {/* Full Sentence Readout + Audio */}
        <div className="rounded-xl border border-line bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xl font-extrabold text-ink">{fullSentenceZh}</div>
              <div className="mt-1 text-sm font-bold text-brand">{fullSentencePy}</div>
              <div className="mt-0.5 text-xs font-semibold text-ink-2">
                {relSpec.en[0].toUpperCase() + relSpec.en.slice(1)} is {englishDate}.
              </div>
            </div>
            <SpeakButtons text={fullSentenceZh} />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "classifier-machine",
    title: "Measure-Word Classifier Machine (量词机)",
    blurb: "Sort everyday nouns into Mandarin’s 11 core classifiers and master the 二 vs 两 number switch.",
    Component: ClassifierMachine,
  },
  {
    id: "mandarin-date-explorer",
    title: "Mandarin Big-to-Small Date & Calendar Explorer",
    blurb: "Zoom from Year → Month → Day → Weekday, jump across 昨天/今天/明天, and hear spoken vs formal dates.",
    Component: MandarinDateExplorer,
  },
];
