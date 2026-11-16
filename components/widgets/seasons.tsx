"use client";
import { useState } from "react";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Widget 1: Singapore vs Beijing Four-Seasons Climate Comparator
// ---------------------------------------------------------------------------

type SeasonId = "chuntian" | "xiatian" | "qiutian" | "dongtian";
type CompPattern = "bi" | "meiyou" | "yiyang";

interface SeasonClimate {
  id: SeasonId;
  zh: string;
  py: string;
  en: string;
  emoji: string;
  sgTemp: number;
  bjTemp: number;
  sgRainMm: number;
  bjRainMm: number;
  bjIdiomZh: string;
  bjIdiomPy: string;
  bjDescEn: string;
}

const SEASONS: SeasonClimate[] = [
  {
    id: "chuntian",
    zh: "春天",
    py: "chūntiān",
    en: "Spring (Mar–May)",
    emoji: "🌸",
    sgTemp: 31,
    bjTemp: 15,
    sgRainMm: 185,
    bjRainMm: 25,
    bjIdiomZh: "春暖花开，很暖和",
    bjIdiomPy: "chūnnuǎn-huākāi, hěn nuǎnhuo",
    bjDescEn: "warm with flowers blooming, dry",
  },
  {
    id: "xiatian",
    zh: "夏天",
    py: "xiàtiān",
    en: "Summer (Jun–Aug)",
    emoji: "☀️",
    sgTemp: 31,
    bjTemp: 30,
    sgRainMm: 165,
    bjRainMm: 175,
    bjIdiomZh: "非常炎热，常常下雨",
    bjIdiomPy: "fēicháng yánrè, chángcháng xiàyǔ",
    bjDescEn: "hot and rainy — surprisingly close to Singapore!",
  },
  {
    id: "qiutian",
    zh: "秋天",
    py: "qiūtiān",
    en: "Autumn (Sep–Nov)",
    emoji: "🍂",
    sgTemp: 30,
    bjTemp: 14,
    sgRainMm: 205,
    bjRainMm: 30,
    bjIdiomZh: "秋高气爽，很凉快",
    bjIdiomPy: "qiūgāo-qìshuǎng, hěn liángkuai",
    bjDescEn: "crisp blue skies & golden leaves",
  },
  {
    id: "dongtian",
    zh: "冬天",
    py: "dōngtiān",
    en: "Winter (Dec–Feb)",
    emoji: "⛄",
    sgTemp: 29,
    bjTemp: -4,
    sgRainMm: 245,
    bjRainMm: 5,
    bjIdiomZh: "非常寒冷，有时候下雪",
    bjIdiomPy: "fēicháng hánlěng, yǒushíhou xiàxuě",
    bjDescEn: "freezing (−4°C), dry & snowy",
  },
];

function buildComparison(s: SeasonClimate, pat: CompPattern): { zh: string; py: string; en: string; wrongHen: string } {
  if (pat === "bi") {
    if (s.id === "xiatian") {
      return {
        zh: "新加坡的夏天比北京热一点儿，也更潮湿。",
        py: "Xīnjiāpō de xiàtiān bǐ Běijīng rè yìdiǎnr, yě gèng cháoshī.",
        en: "Singapore’s summer is a little hotter than Beijing’s, and also more humid.",
        wrongHen: "*新加坡的夏天比北京很热 ✗",
      };
    }
    if (s.id === "dongtian") {
      return {
        zh: "北京的冬天比新加坡冷得多！",
        py: "Běijīng de dōngtiān bǐ Xīnjiāpō lěng de duō!",
        en: "Beijing’s winter is MUCH colder than Singapore’s!",
        wrongHen: "*北京的冬天比新加坡很冷 ✗",
      };
    }
    return {
      zh: `北京的${s.zh}比新加坡凉快得多，新加坡常常下雨。`,
      py: `Běijīng de ${s.py} bǐ Xīnjiāpō liángkuai de duō, Xīnjiāpō chángcháng xiàyǔ.`,
      en: `Beijing’s ${s.en.split(" ")[0].toLowerCase()} is much cooler than Singapore’s; Singapore often rains.`,
      wrongHen: `*北京的${s.zh}比新加坡很凉快 ✗`,
    };
  }

  if (pat === "meiyou") {
    if (s.id === "xiatian") {
      return {
        zh: "北京的夏天没有新加坡那么潮湿。",
        py: "Běijīng de xiàtiān méiyǒu Xīnjiāpō nàme cháoshī.",
        en: "Beijing’s summer is not as humid as Singapore’s.",
        wrongHen: "*北京的夏天不比新加坡很潮湿 (unnatural) — use 没有 A 那么 + Adj!",
      };
    }
    return {
      zh: `北京的${s.zh}没有新加坡那么热。`,
      py: `Běijīng de ${s.py} méiyǒu Xīnjiāpō nàme rè.`,
      en: `Beijing’s ${s.en.split(" ")[0].toLowerCase()} is not as hot as Singapore’s.`,
      wrongHen: `*北京的${s.zh}没有新加坡很热 ✗ (use 那么, not 很!)`,
    };
  }

  //跟…一样 / 不一样
  if (s.id === "xiatian") {
    return {
      zh: "北京的夏天跟新加坡差不多一样热！",
      py: "Běijīng de xiàtiān gēn Xīnjiāpō chàbuduō yíyàng rè!",
      en: "Beijing’s summer is almost equally as hot as Singapore’s!",
      wrongHen: "*北京的夏天跟新加坡一样很热 ✗ (no 很 after 一样!)",
    };
  }
  return {
    zh: `北京的${s.zh}跟新加坡很不一样：新加坡一年四季都很热。`,
    py: `Běijīng de ${s.py} gēn Xīnjiāpō hěn bù yíyàng: Xīnjiāpō yìnián-sìjì dōu hěn rè.`,
    en: `Beijing’s ${s.en.split(" ")[0].toLowerCase()} is very different from Singapore’s: Singapore is hot all year round.`,
    wrongHen: "*A 比 B 很… is ALWAYS wrong in Mandarin!",
  };
}

// SVG helpers for dual temperature & rainfall chart (viewBox 0 0 460 225)
const tempToY = (t: number) => 152 - ((t + 10) / 46) * 116; // -10°C -> 152, +36°C -> 36
const colX = (idx: number) => 86 + idx * 104;

function ClimateComparator() {
  const [seasonId, setSeasonId] = useState<SeasonId>("dongtian");
  const [pattern, setPattern] = useState<CompPattern>("bi");
  const [testHenTrap, setTestHenTrap] = useState<boolean>(false);

  const seasonIdx = SEASONS.findIndex((s) => s.id === seasonId);
  const season = SEASONS[seasonIdx >= 0 ? seasonIdx : 3];
  const comp = buildComparison(season, pattern);

  const sgLinePoints = SEASONS.map((s, i) => `${colX(i)},${tempToY(s.sgTemp)}`).join(" ");
  const bjLinePoints = SEASONS.map((s, i) => `${colX(i)},${tempToY(s.bjTemp)}`).join(" ");

  return (
    <WidgetFrame
      title="Singapore vs Beijing Four-Seasons Climate Comparator (新加坡 vs 北京)"
      tryThis={[
        "Click across **春天 → 夏天 → 秋天 → 冬天** on the chart: compare Singapore’s flat ~30°C tropical line with Beijing’s 34°C swing!",
        "Switch between **A 比 B**, **A 没有 B 那么…**, and **A 跟 B 一样** — notice how **夏天** makes the two cities nearly equal!",
        "Click **🚫 Test the ‘很’ Trap** to see the #1 exam mistake students make with **比**.",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>{season.emoji} 北京的{season.zh}：</strong> {season.bjIdiomZh} (<em>{season.bjIdiomPy}</em> — {season.bjDescEn}). Meanwhile, <strong>新加坡一年四季都很热，没有冬天</strong>!
          </p>
          <p className="font-semibold text-brand">
            🔥 Golden Comparison Rule: NEVER put <strong>很</strong> or <strong>非常</strong> after <strong>比</strong>! To say “much colder”, put <strong>得多 (de duō)</strong> <em>after</em> the adjective: <strong>冷得多</strong>.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        {/* Season tabs + Comparison pattern */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {SEASONS.map((s) => {
              const active = s.id === seasonId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSeasonId(s.id)}
                  className={`rounded-xl border px-3 py-1.5 text-sm font-extrabold transition ${
                    active ? "border-brand bg-brand text-white shadow-sm" : "border-line bg-surface text-ink hover:bg-surface-2"
                  }`}
                >
                  {s.emoji} {s.zh} ({s.py})
                </button>
              );
            })}
          </div>

          <Segmented
            label="Comparison structure"
            value={pattern}
            onChange={setPattern}
            options={[
              { value: "bi", label: "A 比 B + Adj" },
              { value: "meiyou", label: "A 没有 B (那么)" },
              { value: "yiyang", label: "跟…一样 / 不一样" },
            ]}
          />
        </div>

        {/* Dual-City SVG Temperature & Rainfall Chart */}
        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-brand">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand" /> 🇸🇬 新加坡 (Singapore °C & rain)
              </span>
              <span className="inline-flex items-center gap-1.5 text-info">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-info" /> 🇨🇳 北京 (Beijing °C & rain)
              </span>
            </div>
            <span className="text-ink-2">Click any season column to inspect</span>
          </div>

          <svg
            viewBox="0 0 460 225"
            className="h-auto w-full"
            role="img"
            aria-label="Seasonal temperature and rainfall chart comparing Singapore and Beijing across spring, summer, autumn and winter"
          >
            {/* Reference temperature lines */}
            {[-10, 0, 15, 30].map((t) => {
              const y = tempToY(t);
              return (
                <g key={t}>
                  <line
                    x1={46}
                    x2={436}
                    y1={y}
                    y2={y}
                    className={t === 0 ? "stroke-ink-2" : "stroke-line"}
                    strokeWidth={t === 0 ? 1.4 : 1}
                    strokeDasharray={t === 0 ? "4 3" : undefined}
                  />
                  <text x={40} y={y + 4} fontSize={10} fontWeight={700} textAnchor="end" className="fill-ink-2">
                    {t}°C
                  </text>
                </g>
              );
            })}

            {/* Clickable season columns + rainfall bars at bottom */}
            {SEASONS.map((s, idx) => {
              const x = colX(idx);
              const isSel = s.id === seasonId;
              const sgRainH = (s.sgRainMm / 260) * 32;
              const bjRainH = (s.bjRainMm / 260) * 32;
              return (
                <g key={s.id} onClick={() => setSeasonId(s.id)} className="cursor-pointer">
                  <rect
                    x={x - 44}
                    y={16}
                    width={88}
                    height={196}
                    rx={10}
                    className={isSel ? "fill-brand-soft" : "fill-transparent hover:fill-surface-2"}
                    opacity={isSel ? 0.55 : 0.45}
                  />
                  {/* Rainfall mini bars (baseline y = 192) */}
                  <rect x={x - 18} y={192 - sgRainH} width={15} height={sgRainH} rx={3} className="fill-brand" opacity={0.45} />
                  <rect x={x + 3} y={192 - bjRainH} width={15} height={bjRainH} rx={3} className="fill-info" opacity={0.65} />
                  <text x={x} y={210} fontSize={12} fontWeight={800} textAnchor="middle" className={isSel ? "fill-brand" : "fill-ink"}>
                    {s.emoji} {s.zh}
                  </text>
                </g>
              );
            })}

            {/* Temperature polylines */}
            <polyline points={sgLinePoints} fill="none" className="stroke-brand" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={bjLinePoints} fill="none" className="stroke-info" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />

            {/* Temperature data points & labels */}
            {SEASONS.map((s, idx) => {
              const x = colX(idx);
              const ySg = tempToY(s.sgTemp);
              const yBj = tempToY(s.bjTemp);
              return (
                <g key={`pts-${s.id}`} pointerEvents="none">
                  <circle cx={x} cy={ySg} r={5.5} className="fill-brand stroke-surface" strokeWidth={2} />
                  <text x={x} y={ySg - 9} fontSize={10.5} fontWeight={800} textAnchor="middle" className="fill-brand">
                    {s.sgTemp}°
                  </text>
                  <circle cx={x} cy={yBj} r={5.5} className="fill-info stroke-surface" strokeWidth={2} />
                  <text
                    x={x}
                    y={s.id === "xiatian" ? yBj + 17 : yBj - 9}
                    fontSize={10.5}
                    fontWeight={800}
                    textAnchor="middle"
                    className="fill-info"
                  >
                    {s.bjTemp}°
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Comparison Readout + 很 Trap Button */}
        <div className="rounded-xl border border-line bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xl font-extrabold text-ink">{comp.zh}</div>
              <div className="mt-1 text-sm font-bold text-brand">{comp.py}</div>
              <div className="mt-0.5 text-xs font-semibold text-ink-2">{comp.en}</div>
            </div>
            <div className="flex items-center gap-2">
              <SpeakButtons text={comp.zh} />
              <button
                type="button"
                onClick={() => setTestHenTrap((v) => !v)}
                aria-pressed={testHenTrap}
                className={`btn btn-sm ${testHenTrap ? "border-bad bg-bad-soft text-bad" : "btn-secondary"}`}
              >
                🚫 Test ‘很’ Trap
              </button>
            </div>
          </div>

          {testHenTrap ? (
            <div className="mt-3 rounded-xl border border-bad bg-bad-soft p-3 text-xs font-bold text-bad">
              <div>❌ Ungrammatical: {comp.wrongHen}</div>
              <div className="mt-1 text-ink">
                ✅ Why? In Mandarin, <strong>很</strong> is a neutral linking dummy-degree word used in plain statements (<em>北京很冷</em>). Once you compare with <strong>比</strong>, the comparison itself supplies the degree — so <strong>很</strong> is strictly banned! Use <strong>…得多</strong> (much more) or <strong>…一点儿</strong> (a little more) <em>after</em> the adjective instead.
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: 穿 vs 戴 Four-Seasons Suitcase Packer
// ---------------------------------------------------------------------------

type WearVerb = "chuan" | "dai";

interface ClothingItem {
  id: string;
  zh: string;
  py: string;
  en: string;
  emoji: string;
  verb: WearVerb;
  mwZh: string;
  mwPy: string;
  warmth: "hot" | "mild" | "cold" | "any";
}

const WARDROBE: ClothingItem[] = [
  { id: "tshirt", zh: "T恤衫", py: "T-xùshān", en: "T-shirt", emoji: "👕", verb: "chuan", mwZh: "件", mwPy: "jiàn", warmth: "hot" },
  { id: "sweater", zh: "毛衣", py: "máoyī", en: "sweater / jumper", emoji: "🧶", verb: "chuan", mwZh: "件", mwPy: "jiàn", warmth: "cold" },
  { id: "coat", zh: "外套", py: "wàitào", en: "coat / jacket", emoji: "🧥", verb: "chuan", mwZh: "件", mwPy: "jiàn", warmth: "cold" },
  { id: "trousers", zh: "裤子", py: "kùzi", en: "trousers", emoji: "👖", verb: "chuan", mwZh: "条", mwPy: "tiáo", warmth: "any" },
  { id: "trainers", zh: "运动鞋", py: "yùndòngxié", en: "sports shoes", emoji: "👟", verb: "chuan", mwZh: "双", mwPy: "shuāng", warmth: "any" },
  { id: "hat", zh: "帽子", py: "màozi", en: "winter / sun hat", emoji: "🧢", verb: "dai", mwZh: "顶", mwPy: "dǐng", warmth: "any" },
  { id: "scarf", zh: "围巾", py: "wéijīn", en: "scarf", emoji: "🧣", verb: "dai", mwZh: "条", mwPy: "tiáo", warmth: "cold" },
  { id: "gloves", zh: "手套", py: "shǒutào", en: "gloves", emoji: "🧤", verb: "dai", mwZh: "双", mwPy: "shuāng", warmth: "cold" },
  { id: "sunglasses", zh: "太阳镜", py: "tàiyángjìng", en: "sunglasses", emoji: "🕶️", verb: "dai", mwZh: "副", mwPy: "fù", warmth: "hot" },
];

interface TripDest {
  id: string;
  labelZh: string;
  labelPy: string;
  en: string;
  climate: "cold" | "hot" | "mild";
  recommendedIds: string[];
}

const TRIPS: TripDest[] = [
  {
    id: "bj-winter",
    labelZh: "北京的冬天 (−4°C)",
    labelPy: "Běijīng de dōngtiān",
    en: "Beijing in Winter — freezing & snowy",
    climate: "cold",
    recommendedIds: ["sweater", "coat", "trousers", "trainers", "hat", "scarf", "gloves"],
  },
  {
    id: "sg-summer",
    labelZh: "新加坡的夏天 (31°C)",
    labelPy: "Xīnjiāpō de xiàtiān",
    en: "Singapore all year — hot & sunny",
    climate: "hot",
    recommendedIds: ["tshirt", "trousers", "trainers", "hat", "sunglasses"],
  },
  {
    id: "bj-autumn",
    labelZh: "北京的秋天 (14°C)",
    labelPy: "Běijīng de qiūtiān",
    en: "Beijing in Autumn — crisp & breezy",
    climate: "mild",
    recommendedIds: ["coat", "trousers", "trainers", "scarf"],
  },
];

function joinMandarinList(phrases: string[]): string {
  if (phrases.length === 0) return "";
  if (phrases.length === 1) return phrases[0];
  return `${phrases.slice(0, -1).join("、")}和${phrases[phrases.length - 1]}`;
}

function SuitcasePacker() {
  const [tripId, setTripId] = useState<string>("bj-winter");
  const [packedIds, setPackedIds] = useState<string[]>(["sweater", "coat", "trousers", "scarf", "gloves"]);

  const trip = TRIPS.find((t) => t.id === tripId) ?? TRIPS[0];

  const toggleItem = (id: string) => {
    setPackedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const packedItems = WARDROBE.filter((w) => packedIds.includes(w.id));
  const chuanItems = packedItems.filter((i) => i.verb === "chuan");
  const daiItems = packedItems.filter((i) => i.verb === "dai");

  const chuanListZh = joinMandarinList(chuanItems.map((i) => `一${i.mwZh}${i.zh}`));
  const daiListZh = joinMandarinList(daiItems.map((i) => `一${i.mwZh}${i.zh}`));

  const clauseParts: string[] = [];
  if (chuanListZh) clauseParts.push(`穿${chuanListZh}`);
  if (daiListZh) clauseParts.push(`戴${daiListZh}`);
  const tripCityZh = trip.labelZh.split(" ")[0];
  const packingSentenceZh = clauseParts.length
    ? `去${tripCityZh}，我${clauseParts.join("，")}。`
    : `去${tripCityZh}旅行，请点击上面的衣服放进行李箱！`;

  // Check if student packed winter gear for Singapore or summer T-shirt only for Beijing winter
  let climateTip = "Tap items in the wardrobe above to pack or unpack your suitcase.";
  if (trip.climate === "hot" && packedItems.some((i) => i.warmth === "cold")) {
    climateTip = "🥵 哇！新加坡三十一度，穿毛衣或戴围巾、手套太热了！ (Too hot for winter woollies in 31°C Singapore!)";
  } else if (trip.climate === "cold" && !packedItems.some((i) => i.id === "coat" || i.id === "sweater")) {
    climateTip = "🥶 小心感冒！北京冬天零下四度，别忘了穿毛衣和厚外套！ (Don’t forget a sweater & coat for −4°C Beijing!)";
  } else if (packedItems.length > 0) {
    climateTip = "✅ 行李打包得很合适！ Notice how Mandarin splits 穿 (garments & shoes) from 戴 (accessories) and uses 顿号 (、) in lists!";
  }

  return (
    <WidgetFrame
      title="穿 vs 戴 Four-Seasons Suitcase Packer (四季行李箱)"
      tryThis={[
        "Pack for **北京的冬天 (−4°C)** vs **新加坡的夏天 (31°C)** — watch items sort automatically into **穿 (chuān)** vs **戴 (dài)**!",
        "Check every classifier: **一件**毛衣, **一条**裤子/围巾, **一双**运动鞋/手套, **一顶**帽子, **一副**太阳镜!",
        "Notice Mandarin list punctuation: **顿号 (、)** separates items in a list before the final **和**.",
      ]}
      caption={
        <p>
          <strong>Rule of Thumb — 穿 (chuān) vs 戴 (dài):</strong> Core clothes your body/legs/feet <em>step or slip through</em> take{" "}
          <strong className="text-brand">穿</strong> (毛衣, 外套, T恤衫, 裤子, 运动鞋). Accessories perched on your head, neck, hands or face take{" "}
          <strong className="text-info">戴</strong> (帽子, 围巾, 手套, 太阳镜, 手表)!
        </p>
      }
    >
      <div className="space-y-4">
        {/* Destination selector + Auto-pack helper */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {TRIPS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTripId(t.id)}
                className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                  tripId === t.id ? "border-brand bg-brand text-white" : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                ✈️ {t.labelZh}
              </button>
            ))}
          </div>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => setPackedIds(trip.recommendedIds)}
              className="btn btn-secondary btn-sm"
            >
              ✨ Recommended Pack
            </button>
            <button
              type="button"
              onClick={() => setPackedIds([])}
              className="btn btn-ghost btn-sm"
            >
              Empty
            </button>
          </div>
        </div>

        {/* Wardrobe Grid */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {WARDROBE.map((item) => {
            const packed = packedIds.includes(item.id);
            const isChuan = item.verb === "chuan";
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  toggleItem(item.id);
                  speakChinese(`${item.verb === "chuan" ? "穿" : "戴"}一${item.mwZh}${item.zh}`);
                }}
                aria-pressed={packed}
                className={`flex flex-col items-center rounded-xl border p-2.5 text-center transition ${
                  packed
                    ? isChuan
                      ? "border-brand bg-brand-soft shadow-sm"
                      : "border-info bg-info-soft shadow-sm"
                    : "border-line bg-surface hover:bg-surface-2"
                }`}
              >
                <div className="flex w-full items-center justify-between text-[10px] font-extrabold">
                  <span className={isChuan ? "text-brand" : "text-info"}>
                    {isChuan ? "穿 chuān" : "戴 dài"}
                  </span>
                  <span className="rounded bg-surface-2 px-1 text-ink-2">一{item.mwZh}</span>
                </div>
                <span className="my-1 text-2xl" aria-hidden>{item.emoji}</span>
                <span className="text-sm font-extrabold text-ink">{item.zh}</span>
                <span className="text-[11px] font-bold text-ink-2">{item.py}</span>
                <span className="text-[10px] text-ink-2">{item.en}</span>
              </button>
            );
          })}
        </div>

        {/* Open Suitcase Compartments: 穿 vs 戴 */}
        <div className="grid gap-3 rounded-xl border-2 border-dashed border-line bg-surface p-3.5 md:grid-cols-2">
          <div className="rounded-xl bg-brand-soft p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
              🧳 Left Compartment: 穿 (chuān) — Garments & Footwear ({chuanItems.length})
            </div>
            {chuanItems.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {chuanItems.map((i) => (
                  <button
                    key={i.id}
                    type="button"
                    onClick={() => toggleItem(i.id)}
                    className="inline-flex items-center gap-1 rounded-lg bg-surface px-2.5 py-1 text-xs font-extrabold text-ink shadow-sm hover:opacity-80"
                    title="Click to remove"
                  >
                    <span>{i.emoji}</span>
                    <span className="text-brand">一{i.mwZh}</span>
                    <span>{i.zh}</span>
                    <span className="text-ink-2">×</span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-xs text-ink-2">No 穿 garments packed yet (e.g. 毛衣, 外套, 裤子, 运动鞋).</p>
            )}
          </div>

          <div className="rounded-xl bg-info-soft p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-info">
              🎒 Right Compartment: 戴 (dài) — Accessories ({daiItems.length})
            </div>
            {daiItems.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {daiItems.map((i) => (
                  <button
                    key={i.id}
                    type="button"
                    onClick={() => toggleItem(i.id)}
                    className="inline-flex items-center gap-1 rounded-lg bg-surface px-2.5 py-1 text-xs font-extrabold text-ink shadow-sm hover:opacity-80"
                    title="Click to remove"
                  >
                    <span>{i.emoji}</span>
                    <span className="text-info">一{i.mwZh}</span>
                    <span>{i.zh}</span>
                    <span className="text-ink-2">×</span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-xs text-ink-2">No 戴 accessories packed yet (e.g. 帽子, 围巾, 手套, 太阳镜).</p>
            )}
          </div>
        </div>

        {/* Live Packing Sentence + Climate Advice */}
        <div className="rounded-xl border border-line bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-lg font-extrabold text-ink">{packingSentenceZh}</div>
              <div className="mt-1 text-xs font-semibold text-ink-2">{climateTip}</div>
            </div>
            {packedItems.length > 0 ? <SpeakButtons text={packingSentenceZh} /> : null}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "sg-beijing-climate-comparator",
    title: "Singapore vs Beijing Four-Seasons Climate Comparator",
    blurb: "Compare tropical Singapore with four-season Beijing using 比, 没有 and 跟…一样 — without falling into the 很 trap!",
    Component: ClimateComparator,
  },
  {
    id: "chuan-dai-suitcase-packer",
    title: "穿 vs 戴 Four-Seasons Suitcase Packer",
    blurb: "Pack garments (穿) and accessories (戴) with exact classifiers (件/条/双/顶/副) for Beijing or Singapore.",
    Component: SuitcasePacker,
  },
];
