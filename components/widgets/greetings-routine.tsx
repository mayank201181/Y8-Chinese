"use client";
import { useState } from "react";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Widget 1: Pinyin 4-Tone Pitch Contour Studio
// ---------------------------------------------------------------------------

type ToneKey = "t1" | "t2" | "t3" | "t4" | "neutral" | "sandhi";

interface ToneSpec {
  key: ToneKey;
  badge: string;
  name: string;
  contour: string;
  pitchNums: string;
  tip: string;
  /** SVG cubic/quadratic path in viewBox 0 0 420 210 where y(5)=30, y(1)=174 */
  path: string;
  startPt: [number, number];
  endPt: [number, number];
  midPt?: [number, number];
  strokeClass: string;
}

// Pitch level 1..5 -> SVG y coordinate (5 = 30, 4 = 66, 3 = 102, 2 = 138, 1 = 174)
const pitchY = (lvl: number) => 174 - (lvl - 1) * 36;

const TONES: ToneSpec[] = [
  {
    key: "t1",
    badge: "1st · ā",
    name: "第一声 (High & Flat)",
    contour: "5 → 5",
    pitchNums: "55",
    tip: "Hold a clear, steady high note like singing ‘laaa’ at the top of your comfortable voice.",
    path: `M 78 ${pitchY(5)} L 368 ${pitchY(5)}`,
    startPt: [78, pitchY(5)],
    endPt: [368, pitchY(5)],
    strokeClass: "stroke-brand",
  },
  {
    key: "t2",
    badge: "2nd · á",
    name: "第二声 (Rising)",
    contour: "3 → 5",
    pitchNums: "35",
    tip: "Climb crisply from mid-pitch to high, just like asking a surprised ‘What?!’ in English.",
    path: `M 78 ${pitchY(3)} Q 215 ${pitchY(3.4)} 368 ${pitchY(5)}`,
    startPt: [78, pitchY(3)],
    endPt: [368, pitchY(5)],
    strokeClass: "stroke-good",
  },
  {
    key: "t3",
    badge: "3rd · ǎ",
    name: "第三声 (Low / Dipping)",
    contour: "2 → 1 → 4",
    pitchNums: "214",
    tip: "Drop down to your lowest creaky register (2→1), then gently rebound (→4) when spoken alone.",
    path: `M 78 ${pitchY(2)} Q 195 ${pitchY(0.65)} 245 ${pitchY(1.2)} T 368 ${pitchY(4)}`,
    startPt: [78, pitchY(2)],
    midPt: [205, pitchY(1)],
    endPt: [368, pitchY(4)],
    strokeClass: "stroke-info",
  },
  {
    key: "t4",
    badge: "4th · à",
    name: "第四声 (Sharp Falling)",
    contour: "5 → 1",
    pitchNums: "51",
    tip: "Drop decisively from the very top (5) straight to the bottom (1), like a firm ‘Stop!’.",
    path: `M 78 ${pitchY(5)} L 368 ${pitchY(1)}`,
    startPt: [78, pitchY(5)],
    endPt: [368, pitchY(1)],
    strokeClass: "stroke-accent",
  },
  {
    key: "neutral",
    badge: "0 · a",
    name: "轻声 (Neutral Tone)",
    contour: "Short & Light",
    pitchNums: "·",
    tip: "Unstressed, short and light — no tone mark written! Common on particles (吗 ma, 呢 ne) and reduplicated family words (妈妈 māma).",
    path: `M 160 ${pitchY(3.5)} Q 205 ${pitchY(2.4)} 250 ${pitchY(2.3)}`,
    startPt: [160, pitchY(3.5)],
    endPt: [250, pitchY(2.3)],
    strokeClass: "stroke-ink-2",
  },
  {
    key: "sandhi",
    badge: "3+3 → 2+3",
    name: "三声变调 (3rd-Tone Sandhi)",
    contour: "214 + 214 → 35 + 214",
    pitchNums: "35 + 214",
    tip: "When TWO 3rd tones meet (你好 nǐ hǎo), the first syllable is SPOKEN as a 2nd tone (ní hǎo), while the written Pinyin keeps both 3rd-tone marks!",
    path: `M 72 ${pitchY(3)} Q 140 ${pitchY(3.4)} 205 ${pitchY(5)} M 230 ${pitchY(2)} Q 295 ${pitchY(0.75)} 376 ${pitchY(3.8)}`,
    startPt: [72, pitchY(3)],
    midPt: [205, pitchY(5)],
    endPt: [376, pitchY(3.8)],
    strokeClass: "stroke-brand",
  },
];

interface SyllableExample {
  hanzi: string;
  pinyin: string;
  spokenNote?: string;
  en: string;
  tone: ToneKey;
}

interface PairGroup {
  id: string;
  label: string;
  subtitle: string;
  items: SyllableExample[];
}

const PAIR_GROUPS: PairGroup[] = [
  {
    id: "ma",
    label: "妈 / 麻 / 马 / 骂 / 吗",
    subtitle: "The classic 5-way ‘ma’ set — same consonant & vowel, 5 completely different meanings.",
    items: [
      { hanzi: "妈", pinyin: "mā", en: "mum (妈妈 māma)", tone: "t1" },
      { hanzi: "麻", pinyin: "má", en: "hemp / numb (麻辣 málà)", tone: "t2" },
      { hanzi: "马", pinyin: "mǎ", en: "horse", tone: "t3" },
      { hanzi: "骂", pinyin: "mà", en: "to scold", tone: "t4" },
      { hanzi: "吗", pinyin: "ma", en: "yes/no question particle", tone: "neutral" },
    ],
  },
  {
    id: "mai",
    label: "买 vs 卖",
    subtitle: "Essential shopping minimal pair: dipping 3rd tone buys, falling 4th tone sells!",
    items: [
      { hanzi: "买", pinyin: "mǎi", en: "to buy (买东西)", tone: "t3" },
      { hanzi: "卖", pinyin: "mài", en: "to sell (怎么卖？)", tone: "t4" },
    ],
  },
  {
    id: "dumpling-sleep",
    label: "水饺 vs 睡觉",
    subtitle: "Ordering lunch vs going to bed — watch the tones AND the 3+3 sandhi on 水饺!",
    items: [
      {
        hanzi: "水饺",
        pinyin: "shuǐjiǎo",
        spokenNote: "spoken: shuíjiǎo (3+3 → 2+3)",
        en: "boiled dumplings 🥟",
        tone: "sandhi",
      },
      {
        hanzi: "睡觉",
        pinyin: "shuìjiào",
        spokenNote: "two sharp 4th tones (51 + 51)",
        en: "to sleep 😴",
        tone: "t4",
      },
    ],
  },
  {
    id: "sandhi-lab",
    label: "你好 & 3+3 Sandhi",
    subtitle: "Every two-syllable 3rd+3rd word shifts its first syllable to 2nd tone in real speech.",
    items: [
      { hanzi: "你好", pinyin: "nǐ hǎo", spokenNote: "spoken: ní hǎo", en: "hello 👋", tone: "sandhi" },
      { hanzi: "很好", pinyin: "hěn hǎo", spokenNote: "spoken: hén hǎo", en: "very good 👍", tone: "sandhi" },
      { hanzi: "可以", pinyin: "kěyǐ", spokenNote: "spoken: kéyǐ", en: "may / can ✅", tone: "sandhi" },
      { hanzi: "水果", pinyin: "shuǐguǒ", spokenNote: "spoken: shuíguǒ", en: "fruit 🍓", tone: "sandhi" },
    ],
  },
];

const PITCH_LEVELS = [
  { lvl: 5, label: "5 高 High" },
  { lvl: 4, label: "4 半高" },
  { lvl: 3, label: "3 中 Mid" },
  { lvl: 2, label: "2 半低" },
  { lvl: 1, label: "1 低 Low" },
];

function PinyinToneStudio() {
  const [groupId, setGroupId] = useState<string>("ma");
  const [itemIdx, setItemIdx] = useState<number>(0);
  const [customTone, setCustomTone] = useState<ToneKey | null>(null);
  const [showGhostAll, setShowGhostAll] = useState<boolean>(true);

  const group = PAIR_GROUPS.find((g) => g.id === groupId) ?? PAIR_GROUPS[0];
  const safeIdx = itemIdx < group.items.length ? itemIdx : 0;
  const activeItem = group.items[safeIdx];
  const activeToneKey = customTone ?? activeItem.tone;
  const spec = TONES.find((t) => t.key === activeToneKey) ?? TONES[0];

  const selectGroup = (nextId: string) => {
    setGroupId(nextId);
    setItemIdx(0);
    setCustomTone(null);
  };

  const selectItem = (idx: number) => {
    setItemIdx(idx);
    setCustomTone(null);
  };

  return (
    <WidgetFrame
      title="Pinyin 4-Tone Pitch Contour Studio (四声与变调)"
      tryThis={[
        "Step through **妈 / 麻 / 马 / 骂 / 吗** and press **🐢 Slow** to hear the pitch curve match your voice.",
        "Switch to **水饺 vs 睡觉** — hear why mixing up **shuǐjiǎo** and **shuìjiào** turns dumplings into bedtime!",
        "Open **你好 & 3+3 Sandhi** to see why **nǐ hǎo** is written with two 3rd tones but spoken **ní hǎo**.",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>{spec.name}</strong> ({spec.contour}): {spec.tip}
          </p>
          {activeItem.spokenNote ? (
            <p className="font-semibold text-brand">
              💡 Pronunciation rule for <strong>{activeItem.hanzi}</strong> ({activeItem.pinyin}): {activeItem.spokenNote}.
            </p>
          ) : null}
        </div>
      }
    >
      <div className="space-y-4">
        {/* Minimal-pair set selector */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Minimal-pair set"
            value={groupId}
            onChange={selectGroup}
            options={PAIR_GROUPS.map((g) => ({ value: g.id, label: g.label }))}
          />
          <button
            type="button"
            onClick={() => setShowGhostAll((v) => !v)}
            aria-pressed={showGhostAll}
            className={`btn btn-sm ${showGhostAll ? "btn-secondary border-brand text-brand" : "btn-ghost"}`}
          >
            {showGhostAll ? "✓ Ghost 4 tones ON" : "Show all 4 curves"}
          </button>
        </div>

        <p className="text-xs font-semibold text-ink-2">{group.subtitle}</p>

        {/* Word cards inside active minimal-pair set */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {group.items.map((it, idx) => {
            const active = idx === safeIdx && customTone === null;
            return (
              <button
                key={it.hanzi + it.pinyin}
                type="button"
                onClick={() => {
                  selectItem(idx);
                  speakChinese(it.hanzi, { slow: false });
                }}
                className={`flex flex-col items-center rounded-xl border p-2.5 text-center transition ${
                  active ? "border-brand bg-brand-soft shadow-sm" : "border-line bg-surface hover:bg-surface-2"
                }`}
              >
                <span className="text-2xl font-extrabold text-ink">{it.hanzi}</span>
                <span className="mt-0.5 text-sm font-bold text-brand">{it.pinyin}</span>
                <span className="mt-0.5 text-[11px] leading-tight text-ink-2">{it.en}</span>
              </button>
            );
          })}
        </div>

        {/* Pitch chart + live audio card */}
        <div className="grid gap-4 lg:grid-cols-[1.45fr_1fr]">
          <div className="rounded-xl border border-line bg-surface p-3">
            <svg
              viewBox="0 0 420 205"
              className="h-auto w-full"
              role="img"
              aria-label={`Mandarin pitch contour chart showing ${spec.name} (${spec.contour})`}
            >
              {/* Pitch horizontal guide lines 5..1 */}
              {PITCH_LEVELS.map(({ lvl, label }) => {
                const y = pitchY(lvl);
                return (
                  <g key={lvl}>
                    <line
                      x1={68}
                      x2={392}
                      y1={y}
                      y2={y}
                      className="stroke-line"
                      strokeWidth={lvl === 5 || lvl === 1 || lvl === 3 ? 1.4 : 1}
                      strokeDasharray={lvl === 2 || lvl === 4 ? "4 4" : undefined}
                    />
                    <text x={60} y={y + 4} fontSize={11} fontWeight={700} textAnchor="end" className="fill-ink-2">
                      {label}
                    </text>
                  </g>
                );
              })}

              {/* Optional ghost curves of the 4 tones for comparison */}
              {showGhostAll && activeToneKey !== "sandhi"
                ? TONES.slice(0, 4).map((gt) =>
                    gt.key === spec.key ? null : (
                      <path
                        key={gt.key}
                        d={gt.path}
                        fill="none"
                        className="stroke-ink-2"
                        strokeOpacity={0.2}
                        strokeWidth={3}
                        strokeLinecap="round"
                      />
                    ),
                  )
                : null}

              {/* If sandhi mode, show dashed original first 3rd tone to visualise the shift! */}
              {spec.key === "sandhi" ? (
                <g>
                  <path
                    d={`M 72 ${pitchY(2)} Q 138 ${pitchY(0.8)} 198 ${pitchY(2.6)}`}
                    fill="none"
                    className="stroke-ink-2"
                    strokeOpacity={0.45}
                    strokeWidth={2.5}
                    strokeDasharray="5 4"
                  />
                  <text x={135} y={pitchY(1) + 18} fontSize={10} fontWeight={700} textAnchor="middle" className="fill-ink-2">
                    written 3rd (214) shifts up ↑
                  </text>
                  <line x1={218} x2={218} y1={22} y2={184} className="stroke-line" strokeWidth={1.2} strokeDasharray="3 3" />
                  <text x={140} y={20} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-brand">
                    Syllable 1 → spoken 2nd (35)
                  </text>
                  <text x={305} y={20} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-info">
                    Syllable 2 → stays 3rd (214)
                  </text>
                </g>
              ) : null}

              {/* Active contour path */}
              <path
                d={spec.path}
                fill="none"
                className={spec.strokeClass}
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Key control points */}
              <circle cx={spec.startPt[0]} cy={spec.startPt[1]} r={6} className="fill-surface stroke-ink" strokeWidth={2.5} />
              {spec.midPt ? (
                <circle cx={spec.midPt[0]} cy={spec.midPt[1]} r={5.5} className="fill-surface stroke-brand" strokeWidth={2.5} />
              ) : null}
              <circle cx={spec.endPt[0]} cy={spec.endPt[1]} r={7} className="fill-brand stroke-surface" strokeWidth={2} />

              {/* Bottom time label */}
              <text x={230} y={198} fontSize={10} fontWeight={700} textAnchor="middle" className="fill-ink-2">
                Syllable duration (Time →) · Pitch code: {spec.pitchNums}
              </text>
            </svg>
          </div>

          {/* Right readout + direct tone explorer + Normal/Slow TTS */}
          <div className="flex flex-col justify-between rounded-xl border border-line bg-surface-2 p-4">
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="chip">{spec.badge}</span>
                  <div className="mt-2 text-4xl font-extrabold tracking-wide text-ink">{activeItem.hanzi}</div>
                  <div className="mt-0.5 text-xl font-extrabold text-brand">{activeItem.pinyin}</div>
                  {activeItem.spokenNote ? (
                    <div className="mt-0.5 text-xs font-bold text-good">{activeItem.spokenNote}</div>
                  ) : null}
                  <div className="mt-1 text-sm font-semibold text-ink-2">{activeItem.en}</div>
                </div>
                <SpeakButtons text={activeItem.hanzi} />
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => speakChinese(activeItem.hanzi, { slow: false })}
                  className="btn btn-primary btn-sm flex-1"
                >
                  🔊 Normal (0.9×)
                </button>
                <button
                  type="button"
                  onClick={() => speakChinese(activeItem.hanzi, { slow: true })}
                  className="btn btn-secondary btn-sm flex-1"
                >
                  🐢 Slow (0.55×)
                </button>
              </div>
            </div>

            <div className="mt-4 border-t border-line pt-3">
              <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">
                Inspect any tone curve directly:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {TONES.map((t) => {
                  const isOn = spec.key === t.key;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setCustomTone(t.key)}
                      className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                        isOn ? "border-brand bg-brand text-white" : "border-line bg-surface text-ink-2 hover:text-ink"
                      }`}
                    >
                      {t.badge}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: School-Day Clock & STPV Routine Builder
// ---------------------------------------------------------------------------

type DayPeriod = "zaoshang" | "shangwu" | "zhongwu" | "xiawu" | "wanshang";

interface PeriodDef {
  id: DayPeriod;
  hanzi: string;
  pinyin: string;
  en: string;
  defaultHour: number;
}

const PERIODS: PeriodDef[] = [
  { id: "zaoshang", hanzi: "早上", pinyin: "zǎoshang", en: "early morning (6–9am)", defaultHour: 7 },
  { id: "shangwu", hanzi: "上午", pinyin: "shàngwǔ", en: "morning (9–12pm)", defaultHour: 10 },
  { id: "zhongwu", hanzi: "中午", pinyin: "zhōngwǔ", en: "noon (12–1:30pm)", defaultHour: 12 },
  { id: "xiawu", hanzi: "下午", pinyin: "xiàwǔ", en: "afternoon (1:30–6pm)", defaultHour: 4 },
  { id: "wanshang", hanzi: "晚上", pinyin: "wǎnshang", en: "evening / night (6–11pm)", defaultHour: 9 },
];

interface MinuteOpt {
  min: number;
  label: string;
}

const MINUTE_OPTS: MinuteOpt[] = [
  { min: 0, label: ":00 整" },
  { min: 5, label: ":05 零五分" },
  { min: 15, label: ":15 一刻" },
  { min: 30, label: ":30 半" },
  { min: 45, label: ":45 三刻" },
  { min: 55, label: ":55 差五分" },
];

interface SubjectOpt {
  hanzi: string;
  pinyin: string;
  en: string;
}

const SUBJECTS: SubjectOpt[] = [
  { hanzi: "我", pinyin: "Wǒ", en: "I" },
  { hanzi: "哥哥", pinyin: "Gēge", en: "My older brother" },
  { hanzi: "姐姐", pinyin: "Jiějie", en: "My older sister" },
  { hanzi: "我们", pinyin: "Wǒmen", en: "We" },
];

interface RoutineAction {
  id: string;
  hanzi: string;
  pinyin: string;
  en: string;
  emoji: string;
  suggestedPeriod: DayPeriod;
  suggestedHour: number;
  suggestedMin: number;
}

const ACTIONS: RoutineAction[] = [
  { id: "wake", hanzi: "起床", pinyin: "qǐchuáng", en: "get up", emoji: "⏰", suggestedPeriod: "zaoshang", suggestedHour: 6, suggestedMin: 30 },
  { id: "breakfast", hanzi: "吃早饭", pinyin: "chī zǎofàn", en: "eat breakfast", emoji: "🥟", suggestedPeriod: "zaoshang", suggestedHour: 7, suggestedMin: 15 },
  { id: "school", hanzi: "去上学", pinyin: "qù shàngxué", en: "go to school", emoji: "🚌", suggestedPeriod: "zaoshang", suggestedHour: 7, suggestedMin: 45 },
  { id: "chinese", hanzi: "上中文课", pinyin: "shàng Zhōngwén kè", en: "have Chinese class", emoji: "📖", suggestedPeriod: "shangwu", suggestedHour: 10, suggestedMin: 0 },
  { id: "lunch", hanzi: "吃午饭", pinyin: "chī wǔfàn", en: "eat lunch", emoji: "🍱", suggestedPeriod: "zhongwu", suggestedHour: 12, suggestedMin: 30 },
  { id: "home", hanzi: "放学回家", pinyin: "fàngxué huíjiā", en: "finish school & go home", emoji: "🏠", suggestedPeriod: "xiawu", suggestedHour: 3, suggestedMin: 30 },
  { id: "homework", hanzi: "做作业", pinyin: "zuò zuòyè", en: "do homework", emoji: "✏️", suggestedPeriod: "wanshang", suggestedHour: 7, suggestedMin: 0 },
  { id: "sleep", hanzi: "睡觉", pinyin: "shuìjiào", en: "go to sleep", emoji: "🌙", suggestedPeriod: "wanshang", suggestedHour: 9, suggestedMin: 30 },
];

const HOUR_WORDS: Record<number, { hanzi: string; pinyin: string }> = {
  1: { hanzi: "一", pinyin: "yī" },
  2: { hanzi: "两", pinyin: "liǎng" }, // 2 o'clock ALWAYS uses 两!
  3: { hanzi: "三", pinyin: "sān" },
  4: { hanzi: "四", pinyin: "sì" },
  5: { hanzi: "五", pinyin: "wǔ" },
  6: { hanzi: "六", pinyin: "liù" },
  7: { hanzi: "七", pinyin: "qī" },
  8: { hanzi: "八", pinyin: "bā" },
  9: { hanzi: "九", pinyin: "jiǔ" },
  10: { hanzi: "十", pinyin: "shí" },
  11: { hanzi: "十一", pinyin: "shíyī" },
  12: { hanzi: "十二", pinyin: "shí'èr" },
};

function formatClockPhrase(hour: number, min: number): { hanzi: string; pinyin: string; note: string | null } {
  if (min === 55) {
    const nextH = hour === 12 ? 1 : hour + 1;
    const hw = HOUR_WORDS[nextH];
    return {
      hanzi: `差五分${hw.hanzi}点`,
      pinyin: `chà wǔ fēn ${hw.pinyin} diǎn`,
      note: `5 minutes to ${nextH} uses 差 (chà = short of): 差五分${hw.hanzi}点 (or ${HOUR_WORDS[hour].hanzi}点五十五分).`,
    };
  }
  const hw = HOUR_WORDS[hour];
  const twoNote = hour === 2 ? "2 o’clock ALWAYS uses 两点 (liǎng diǎn) — never *二点*! (Though 12 o’clock is 十二点.)" : null;

  if (min === 0) return { hanzi: `${hw.hanzi}点`, pinyin: `${hw.pinyin} diǎn`, note: twoNote };
  if (min === 5) {
    return {
      hanzi: `${hw.hanzi}点零五分`,
      pinyin: `${hw.pinyin} diǎn líng wǔ fēn`,
      note: twoNote ?? "Single-digit minutes (01–09) insert 零 (líng) before the number: 零五分.",
    };
  }
  if (min === 15) {
    return {
      hanzi: `${hw.hanzi}点一刻`,
      pinyin: `${hw.pinyin} diǎn yí kè`,
      note: twoNote ?? "一刻 (yí kè) = a quarter past (:15). You can also say 十五分.",
    };
  }
  if (min === 30) {
    return {
      hanzi: `${hw.hanzi}点半`,
      pinyin: `${hw.pinyin} diǎn bàn`,
      note: twoNote ?? "半 (bàn) = half past (:30) — quick and natural!",
    };
  }
  return {
    hanzi: `${hw.hanzi}点三刻`,
    pinyin: `${hw.pinyin} diǎn sān kè`,
    note: twoNote ?? "三刻 (sān kè) = three-quarters past (:45), or 四十五分.",
  };
}

interface RoutineChallenge {
  promptEn: string;
  subjIdx: number;
  period: DayPeriod;
  hour: number;
  min: number;
  actionId: string;
}

const ROUTINE_QUIZ: RoutineChallenge[] = [
  {
    promptEn: "I eat breakfast at 7:15 in the early morning.",
    subjIdx: 0,
    period: "zaoshang",
    hour: 7,
    min: 15,
    actionId: "breakfast",
  },
  {
    promptEn: "My older sister finishes school and goes home at 3:30 in the afternoon.",
    subjIdx: 2,
    period: "xiawu",
    hour: 3,
    min: 30,
    actionId: "home",
  },
  {
    promptEn: "We have Chinese class at 10:00 in the morning.",
    subjIdx: 3,
    period: "shangwu",
    hour: 10,
    min: 0,
    actionId: "chinese",
  },
  {
    promptEn: "My older brother goes to sleep at 9:30 in the evening.",
    subjIdx: 1,
    period: "wanshang",
    hour: 9,
    min: 30,
    actionId: "sleep",
  },
];

function SchoolRoutineClock() {
  const [mode, setMode] = useState<"explore" | "quiz">("explore");
  const [subjIdx, setSubjIdx] = useState<number>(0);
  const [period, setPeriod] = useState<DayPeriod>("zaoshang");
  const [hour, setHour] = useState<number>(7);
  const [min, setMin] = useState<number>(30);
  const [actionId, setActionId] = useState<string>("breakfast");
  const [quizIdx, setQuizIdx] = useState<number>(0);

  const subj = SUBJECTS[subjIdx] ?? SUBJECTS[0];
  const per = PERIODS.find((p) => p.id === period) ?? PERIODS[0];
  const act = ACTIONS.find((a) => a.id === actionId) ?? ACTIONS[0];
  const clock = formatClockPhrase(hour, min);

  const fullHanzi = `${subj.hanzi}${per.hanzi}${clock.hanzi}${act.hanzi}。`;
  const fullPinyin = `${subj.pinyin} ${per.pinyin} ${clock.pinyin} ${act.pinyin}.`;
  const digitalMin = String(min).padStart(2, "0");
  const fullEn = `${subj.en} ${subjIdx === 0 || subjIdx === 3 ? act.en : act.en + "s"} at ${hour}:${digitalMin} (${per.en.split(" ")[0]}).`;

  // Clock hand angles in degrees (0 deg = 12 o'clock)
  const minAngle = min * 6;
  const hourAngle = ((hour % 12) + min / 60) * 30;
  const rad = (deg: number) => ((deg - 90) * Math.PI) / 180;
  const hx = 100 + 44 * Math.cos(rad(hourAngle));
  const hy = 100 + 44 * Math.sin(rad(hourAngle));
  const mx = 100 + 66 * Math.cos(rad(minAngle));
  const my = 100 + 66 * Math.sin(rad(minAngle));

  const activeQuiz = ROUTINE_QUIZ[quizIdx];
  const quizSolved =
    mode === "quiz" &&
    subjIdx === activeQuiz.subjIdx &&
    period === activeQuiz.period &&
    hour === activeQuiz.hour &&
    min === activeQuiz.min &&
    actionId === activeQuiz.actionId;

  return (
    <WidgetFrame
      title="School-Day Clock & STPV Routine Builder (日常作息与时间语序)"
      tryThis={[
        "Click **2** on the clock dial: notice Mandarin says **两点 (liǎng diǎn)**, NEVER *二点*!",
        "Try **:15 一刻**, **:30 半**, and **:55 差五分** — watch how big-to-small order keeps **早上 / 下午** BEFORE the hour.",
        "Switch to **🎯 Quiz Mode** and build all 4 target sentences without putting time at the end!",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>Golden Word Order (STPV):</strong>{" "}
            <span className="font-bold text-brand">Subject ({subj.hanzi})</span> +{" "}
            <span className="font-bold text-good">
              Time ({per.hanzi}
              {clock.hanzi})
            </span>{" "}
            + <span className="font-bold text-info">Action ({act.hanzi})</span>. Unlike English, Mandarin{" "}
            <strong>never</strong> puts clock time at the end of the sentence!
          </p>
          {clock.note ? <p className="text-ink-2">⏱️ {clock.note}</p> : null}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: "explore", label: "🧭 Free Builder" },
              { value: "quiz", label: "🎯 Quiz Challenge" },
            ]}
          />
          <div className="flex flex-wrap gap-1">
            {SUBJECTS.map((s, idx) => (
              <button
                key={s.hanzi}
                type="button"
                onClick={() => setSubjIdx(idx)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  subjIdx === idx ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                {s.hanzi} ({s.en})
              </button>
            ))}
          </div>
        </div>

        {/* Quiz banner */}
        {mode === "quiz" ? (
          <div
            className={`rounded-xl border p-3 transition ${
              quizSolved ? "border-good bg-good-soft" : "border-brand bg-brand-soft"
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
                  Challenge {quizIdx + 1} of {ROUTINE_QUIZ.length}
                </div>
                <div className="text-sm font-bold text-ink">Target: “{activeQuiz.promptEn}”</div>
              </div>
              {quizSolved ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-good">✅ 太棒了！ Exact match!</span>
                  <button
                    type="button"
                    onClick={() => {
                      speakChinese(fullHanzi);
                      setQuizIdx((i) => (i + 1) % ROUTINE_QUIZ.length);
                    }}
                    className="btn btn-good btn-sm"
                  >
                    Next →
                  </button>
                </div>
              ) : (
                <span className="text-xs font-semibold text-ink-2">Set Who + Period + Clock + Action below</span>
              )}
            </div>
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-[220px_1fr]">
          {/* Interactive SVG Clock Dial */}
          <div className="flex flex-col items-center rounded-xl border border-line bg-surface p-3">
            <svg viewBox="0 0 200 200" className="h-44 w-44" role="img" aria-label={`Analog clock showing ${hour}:${digitalMin}`}>
              <circle cx={100} cy={100} r={90} className="fill-surface-2 stroke-line" strokeWidth={3} />
              {Array.from({ length: 12 }, (_, idx) => {
                const h = idx + 1;
                const a = rad(h * 30);
                const nx = 100 + 72 * Math.cos(a);
                const ny = 100 + 72 * Math.sin(a);
                const selected = h === hour;
                return (
                  <g key={h} onClick={() => setHour(h)} className="cursor-pointer">
                    <circle
                      cx={nx}
                      cy={ny}
                      r={13}
                      className={selected ? "fill-brand" : "fill-surface hover:fill-brand-soft"}
                    />
                    <text
                      x={nx}
                      y={ny + 4}
                      fontSize={12}
                      fontWeight={800}
                      textAnchor="middle"
                      className={selected ? "fill-white" : "fill-ink"}
                    >
                      {h}
                    </text>
                  </g>
                );
              })}
              {/* Minute hand */}
              <line x1={100} y1={100} x2={mx} y2={my} className="stroke-info" strokeWidth={3.5} strokeLinecap="round" />
              {/* Hour hand */}
              <line x1={100} y1={100} x2={hx} y2={hy} className="stroke-brand" strokeWidth={5} strokeLinecap="round" />
              <circle cx={100} cy={100} r={5} className="fill-ink" />
            </svg>
            <div className="mt-1 text-center text-xs font-bold text-ink-2">
              Click a number (1–12) for the hour · Digital: <span className="text-ink">{hour}:{digitalMin}</span>
            </div>
          </div>

          {/* Period, Minute & Action Controls */}
          <div className="space-y-3">
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">
                1. Time of Day (Biggest unit first!)
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PERIODS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPeriod(p.id)}
                    className={`rounded-xl border px-3 py-1.5 text-left text-xs transition ${
                      period === p.id ? "border-good bg-good-soft font-extrabold text-good" : "border-line bg-surface font-semibold text-ink-2 hover:text-ink"
                    }`}
                  >
                    <div>{p.hanzi} · {p.pinyin}</div>
                    <div className="text-[10px] opacity-80">{p.en}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">2. Minutes (点 · 半 · 刻 · 差)</div>
              <div className="flex flex-wrap gap-1.5">
                {MINUTE_OPTS.map((m) => (
                  <button
                    key={m.min}
                    type="button"
                    onClick={() => setMin(m.min)}
                    className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                      min === m.min ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2 hover:text-ink"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">3. Daily Routine Action</div>
              <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                {ACTIONS.map((a) => {
                  const isOn = a.id === actionId;
                  return (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => {
                        setActionId(a.id);
                        if (mode === "explore") {
                          setPeriod(a.suggestedPeriod);
                          setHour(a.suggestedHour);
                          setMin(a.suggestedMin);
                        }
                      }}
                      className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-left text-xs transition ${
                        isOn ? "border-info bg-info-soft font-extrabold text-info" : "border-line bg-surface font-semibold text-ink hover:bg-surface-2"
                      }`}
                    >
                      <span aria-hidden>{a.emoji}</span>
                      <span>
                        <span className="block">{a.hanzi}</span>
                        <span className="block text-[10px] text-ink-2">{a.en}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Live STPV Sentence Output */}
        <div className="rounded-xl border border-line bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5 text-lg sm:text-2xl font-extrabold">
              <span className="rounded-lg bg-brand-soft px-2.5 py-1 text-brand" title="Subject">
                {subj.hanzi}
              </span>
              <span className="text-ink-2">+</span>
              <span className="rounded-lg bg-good-soft px-2.5 py-1 text-good" title="Time (Period + Clock)">
                {per.hanzi}
                {clock.hanzi}
              </span>
              <span className="text-ink-2">+</span>
              <span className="rounded-lg bg-info-soft px-2.5 py-1 text-info" title="Verb-Object Action">
                {act.hanzi}
              </span>
              <span className="text-ink">。</span>
            </div>
            <SpeakButtons text={fullHanzi} />
          </div>
          <div className="mt-2 text-sm font-bold text-brand">{fullPinyin}</div>
          <div className="mt-0.5 text-xs font-semibold text-ink-2">
            English: “{fullEn}” — <span className="text-bad">✗ Never say *{subj.hanzi}{act.hanzi}{per.hanzi}{clock.hanzi}*!</span>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "pinyin-tone-studio",
    title: "Pinyin 4-Tone Pitch Contour Studio",
    blurb: "See and hear Mandarin’s 5-level pitch curves, minimal pairs (买/卖, 水饺/睡觉) and 3rd-tone sandhi.",
    Component: PinyinToneStudio,
  },
  {
    id: "school-routine-clock",
    title: "School-Day Clock & STPV Routine Builder",
    blurb: "Set the clock dial and build natural Subject + Time + Action sentences with audio and quiz challenges.",
    Component: SchoolRoutineClock,
  },
];
