"use client";

import { useState } from "react";
import { WidgetFrame, Segmented, Stepper, Readout, type WidgetDef } from "./kit";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { usePinyinVisible } from "@/lib/pinyinDisplay";

// ---------------------------------------------------------------------------
// Helpers: Mandarin Weight & Money Formatting (块/毛 vs 元/角, 二 vs 两)
// ---------------------------------------------------------------------------

const DIGITS_ZH = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const DIGITS_PY = ["líng", "yī", "èr", "sān", "sì", "wǔ", "liù", "qī", "bā", "jiǔ"];

/** Convert integer 0..999 into Chinese numerals, using 两 when value === 2 before a classifier. */
function intBeforeClassifier(n: number): { zh: string; py: string } {
  if (n === 2) return { zh: "两", py: "liǎng" };
  if (n < 10) return { zh: DIGITS_ZH[n], py: DIGITS_PY[n] };
  if (n < 20) {
    const ones = n % 10;
    return {
      zh: ones === 0 ? "十" : `十${DIGITS_ZH[ones]}`,
      py: ones === 0 ? "shí" : ones === 2 ? "shí'èr" : `shí${DIGITS_PY[ones]}`,
    };
  }
  if (n < 100) {
    const tens = Math.floor(n / 10);
    const ones = n % 10;
    return {
      zh: `${DIGITS_ZH[tens]}十${ones === 0 ? "" : DIGITS_ZH[ones]}`,
      py: `${DIGITS_PY[tens]}shí${ones === 0 ? "" : ones === 2 ? "'èr" : DIGITS_PY[ones]}`,
    };
  }
  const hundreds = Math.floor(n / 100);
  const rem = n % 100;
  const hZh = hundreds === 2 ? "两百" : `${DIGITS_ZH[hundreds]}百`;
  const hPy = hundreds === 2 ? "liǎngbǎi" : `${DIGITS_PY[hundreds]}bǎi`;
  if (rem === 0) return { zh: hZh, py: hPy };
  if (rem < 10) return { zh: `${hZh}零${DIGITS_ZH[rem]}`, py: `${hPy} líng ${DIGITS_PY[rem]}` };
  const tens = Math.floor(rem / 10);
  const ones = rem % 10;
  return {
    zh: `${hZh}${DIGITS_ZH[tens]}十${ones === 0 ? "" : DIGITS_ZH[ones]}`,
    py: `${hPy} ${DIGITS_PY[tens]}shí${ones === 0 ? "" : ones === 2 ? "'èr" : DIGITS_PY[ones]}`,
  };
}

function formatMoneyMandarin(amount: number, register: "spoken" | "written"): { zh: string; py: string; note: string } {
  const totalTenths = Math.round(amount * 10);
  const dollars = Math.floor(totalTenths / 10);
  const tenths = totalTenths % 10;

  const d = intBeforeClassifier(dollars);
  if (register === "spoken") {
    if (tenths === 0) {
      return {
        zh: `${d.zh}块钱`,
        py: `${d.py} kuài qián`,
        note: "Whole dollars in speech use 块(钱).",
      };
    }
    const t = tenths === 2 ? { zh: "两毛", py: "liǎng máo" } : { zh: DIGITS_ZH[tenths], py: DIGITS_PY[tenths] };
    if (tenths === 2) {
      return {
        zh: `${d.zh}块两毛`,
        py: `${d.py} kuài liǎng máo`,
        note: "20 cents uses 两毛 in spoken Mandarin.",
      };
    }
    return {
      zh: `${d.zh}块${t.zh}`,
      py: `${d.py} kuài ${t.py}`,
      note: `Spoken shortcut! "${d.zh}块${t.zh}" drops 毛 at the end (= ${d.zh}块${t.zh}毛).`,
    };
  }

  // Written register: 元 / 角
  if (tenths === 0) {
    return {
      zh: `${d.zh}元`,
      py: `${d.py} yuán`,
      note: "Written price tags & menus use 元 instead of 块.",
    };
  }
  const t = intBeforeClassifier(tenths);
  return {
    zh: `${d.zh}元${t.zh}角`,
    py: `${d.py} yuán ${t.py} jiǎo`,
    note: "Formal written Chinese always keeps 角 (10-cent unit) explicit.",
  };
}

// ---------------------------------------------------------------------------
// Widget 1: Wet-Market Scale & Price Calculator (巴刹称重台)
// ---------------------------------------------------------------------------

interface ProduceItem {
  id: string;
  category: "fruit" | "veg";
  icon: string;
  zh: string;
  py: string;
  en: string;
  pricePerJin: number; // SGD / RMB numeric price per 1 斤 (500g)
  tasteZh: string;
  tasteEn: string;
}

const PRODUCE: ProduceItem[] = [
  { id: "apple", category: "fruit", icon: "🍎", zh: "苹果", py: "píngguǒ", en: "apples", pricePerJin: 3.5, tasteZh: "又甜又脆", tasteEn: "sweet & crisp" },
  { id: "strawberry", category: "fruit", icon: "🍓", zh: "草莓", py: "cǎoméi", en: "strawberries", pricePerJin: 6.5, tasteZh: "酸酸甜甜", tasteEn: "sweet & tangy" },
  { id: "mango", category: "fruit", icon: "🥭", zh: "芒果", py: "mángguǒ", en: "mangoes", pricePerJin: 4.5, tasteZh: "非常甜、多汁", tasteEn: "very sweet & juicy" },
  { id: "durian", category: "fruit", icon: "🦔", zh: "榴莲", py: "liúlián", en: "durian (SG favourite!)", pricePerJin: 12.0, tasteZh: "很香、很浓", tasteEn: "fragrant & rich" },
  { id: "tomato", category: "veg", icon: "🍅", zh: "西红柿", py: "xīhóngshì", en: "tomatoes", pricePerJin: 2.5, tasteZh: "很新鲜", tasteEn: "very fresh" },
  { id: "greens", category: "veg", icon: "🥬", zh: "青菜", py: "qīngcài", en: "green vegetables", pricePerJin: 2.0, tasteZh: "对身体好", tasteEn: "good for health" },
  { id: "cucumber", category: "veg", icon: "🥒", zh: "黄瓜", py: "huángguā", en: "cucumbers", pricePerJin: 1.5, tasteZh: "清脆爽口", tasteEn: "crisp & refreshing" },
  { id: "potato", category: "veg", icon: "🥔", zh: "土豆", py: "tǔdòu", en: "potatoes", pricePerJin: 1.5, tasteZh: "便宜又好吃", tasteEn: "cheap & tasty" },
];

function WetMarketScale() {
  const showPinyin = usePinyinVisible();
  const [itemId, setItemId] = useState<string>("strawberry");
  const [unit, setUnit] = useState<"jin" | "gongjin">("jin");
  const [qty, setQty] = useState<number>(2);
  const [register, setRegister] = useState<"spoken" | "written">("spoken");

  const item = PRODUCE.find((p) => p.id === itemId) ?? PRODUCE[1];

  // 1 斤 = 500g; 1 公斤 = 1000g = 2 斤
  const grams = unit === "jin" ? qty * 500 : qty * 1000;
  const jinEquivalent = unit === "jin" ? qty : qty * 2;
  const unitPriceSelected = unit === "jin" ? item.pricePerJin : item.pricePerJin * 2;
  const totalPrice = +(jinEquivalent * item.pricePerJin).toFixed(2);

  const qtyFormatted = intBeforeClassifier(qty);
  const unitZh = unit === "jin" ? "斤" : "公斤";
  const unitPy = unit === "jin" ? "jīn" : "gōngjīn";

  const unitMoney = formatMoneyMandarin(unitPriceSelected, register);
  const totalMoney = formatMoneyMandarin(totalPrice, register);
  const spokenCompare = formatMoneyMandarin(totalPrice, "spoken");
  const writtenCompare = formatMoneyMandarin(totalPrice, "written");

  // SVG scale needle angle: max dial = 6000g (6kg = 12斤) -> 300 degrees sweep
  const clampedGrams = Math.min(grams, 6000);
  const needleAngleDeg = (clampedGrams / 6000) * 300;
  const panDropPx = Math.min(14, (clampedGrams / 6000) * 14);

  const dialogueAskZh = `老板，${item.zh}怎么卖？`;
  const dialogueAnswerZh = `${item.zh}${item.tasteZh}，一${unitZh}${unitMoney.zh}。`;
  const dialogueOrderZh = `我要${qtyFormatted.zh}${unitZh}${item.zh}。一共${totalMoney.zh}！`;
  const fullAudioZh = `${dialogueAskZh} ${dialogueAnswerZh} ${dialogueOrderZh}`;

  return (
    <WidgetFrame
      title="巴刹称重台 · Wet-Market Scale & Price Calculator (`斤/公斤` · `块/毛`)"
      tryThis={[
        "Pick a fruit or vegetable and step the weight to **2** — notice **两斤 / 两公斤** (never *二斤* before a measure word!).",
        "Flip between **1 斤 (500g)** and **1 公斤 (1kg = 2斤)** and watch the market scale needle double.",
        "Switch between **Spoken (块/毛)** and **Written (元/角)** to hear how `6.5` becomes **六块五** vs **六元五角**!",
      ]}
      caption={
        <span>
          <strong>Market maths rule:</strong> In China and Singapore wet markets (<strong>巴刹</strong>), <strong>一斤 = 500g</strong> and{" "}
          <strong>一公斤 = 1kg (两斤)</strong>. In spoken Mandarin, <strong>块 / 毛</strong> replaces written <strong>元 / 角</strong>.
        </span>
      }
    >
      <div className="space-y-5">
        {/* Produce Picker */}
        <div>
          <div className="mb-2 text-xs font-extrabold uppercase tracking-wide text-ink-2">
            1. Choose Fresh Produce (选择蔬菜或水果)
          </div>
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {PRODUCE.map((p) => {
              const active = p.id === item.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setItemId(p.id);
                    speakChinese(p.zh);
                  }}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left transition ${
                    active
                      ? "border-brand bg-brand-soft text-brand shadow-sm"
                      : "border-line bg-surface text-ink hover:bg-surface-2"
                  }`}
                >
                  <span className="text-2xl leading-none" aria-hidden>
                    {p.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-extrabold">{p.zh}</div>
                    {showPinyin ? <div className="truncate text-[11px] text-ink-2">{p.py}</div> : null}
                    <div className="text-[11px] font-bold opacity-80">${p.pricePerJin.toFixed(1)} / 斤</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* SVG Scale + Controls side by side */}
        <div className="grid items-center gap-4 rounded-2xl border border-line bg-surface-2 p-4 sm:grid-cols-2">
          {/* SVG Spring Scale */}
          <div className="diagram-svg flex flex-col items-center">
            <svg viewBox="0 0 260 235" role="img" aria-label={`Market scale weighing ${grams} grams of ${item.en}`}>
              {/* Produce items sitting in the pan */}
              <g transform={`translate(0, ${panDropPx})`}>
                {Array.from({ length: Math.min(qty, 6) }).map((_, idx) => {
                  const offsetX = 95 + (idx % 3) * 26 + (idx >= 3 ? 8 : 0);
                  const offsetY = idx >= 3 ? 24 : 38;
                  return (
                    <text key={idx} x={offsetX} y={offsetY} fontSize={24} textAnchor="middle">
                      {item.icon}
                    </text>
                  );
                })}
                {/* Tray / Pan */}
                <path
                  d="M 55 44 Q 130 62 205 44 L 192 54 Q 130 68 68 54 Z"
                  fill="#9ca3af"
                  stroke="#4b5563"
                  strokeWidth={2}
                />
                {/* Support Pillar */}
                <rect x={122} y={55} width={16} height={24} rx={3} fill="#6b7280" />
              </g>

              {/* Scale Body */}
              <path
                d="M 74 84 L 186 84 L 200 218 Q 200 226 190 226 L 70 226 Q 60 226 60 218 Z"
                fill="#dc2626"
                stroke="#991b1b"
                strokeWidth={2.5}
              />

              {/* Dial Face */}
              <circle cx={130} cy={152} r={54} fill="#fffbeb" stroke="#374151" strokeWidth={3} />

              {/* Tick marks around 0..6kg */}
              {[0, 1, 2, 3, 4, 5, 6].map((kgVal) => {
                const deg = -150 + (kgVal / 6) * 300;
                const rad = ((deg - 90) * Math.PI) / 180;
                const x1 = 130 + Math.cos(rad) * 42;
                const y1 = 152 + Math.sin(rad) * 42;
                const x2 = 130 + Math.cos(rad) * 50;
                const y2 = 152 + Math.sin(rad) * 50;
                const tx = 130 + Math.cos(rad) * 32;
                const ty = 152 + Math.sin(rad) * 32 + 3.5;
                return (
                  <g key={kgVal}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1f2937" strokeWidth={2} />
                    <text x={tx} y={ty} fontSize={9.5} fontWeight="800" textAnchor="middle" fill="#1f2937">
                      {kgVal}kg
                    </text>
                  </g>
                );
              })}

              <text x={130} y={178} fontSize={9} fontWeight="700" textAnchor="middle" fill="#b45309">
                {jinEquivalent}斤 · {grams}g
              </text>

              {/* Rotating Needle (starts at -150 deg for 0kg) */}
              <g transform={`translate(130, 152) rotate(${-150 + needleAngleDeg})`}>
                <line x1={0} y1={8} x2={0} y2={-40} stroke="#c81e1e" strokeWidth={3} strokeLinecap="round" />
                <circle cx={0} cy={0} r={5} fill="#1f2937" />
              </g>
            </svg>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <div>
              <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                2. Weight Unit (重量单位)
              </div>
              <Segmented
                label="Weight unit"
                value={unit}
                onChange={(nextUnit) => {
                  setUnit(nextUnit);
                  if (nextUnit === "gongjin" && qty > 3) setQty(3);
                }}
                options={[
                  { value: "jin", label: "斤 (jīn · 500g)" },
                  { value: "gongjin", label: "公斤 (gōngjīn · 1kg)" },
                ]}
              />
            </div>

            <Stepper
              label={`Quantity (${unitZh})`}
              value={qty}
              min={1}
              max={unit === "jin" ? 6 : 3}
              onChange={setQty}
              format={(v) => `${intBeforeClassifier(v).zh}${unitZh} (${v})`}
            />

            <div>
              <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                3. Money Register (口语 vs 书面语)
              </div>
              <Segmented
                label="Money register"
                value={register}
                onChange={setRegister}
                options={[
                  { value: "spoken", label: "Spoken · 块 / 毛" },
                  { value: "written", label: "Written · 元 / 角" },
                ]}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Readout label="Spoken (口语)" value={spokenCompare.zh} tone="brand" />
              <Readout label="Price Tag (书面)" value={`${writtenCompare.zh} ($${totalPrice.toFixed(2)})`} tone="ink" />
            </div>
          </div>
        </div>

        {/* Live Market Stall Dialogue */}
        <div className="rounded-2xl border border-line bg-surface p-4">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <span className="chip border-brand/30 bg-brand-soft text-brand">Live Market Dialogue · 买菜对话</span>
            <SpeakButtons text={fullAudioZh} compact />
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between gap-2 rounded-xl bg-surface-2 px-3 py-2">
              <div>
                <span className="font-extrabold text-brand">顾客 (You): </span>
                <span className="font-bold text-ink">{dialogueAskZh}</span>
                <span className="ml-2 text-xs text-ink-2">(Boss, how are the {item.en} sold?)</span>
              </div>
              <SpeakButtons text={dialogueAskZh} compact />
            </div>
            <div className="flex items-center justify-between gap-2 rounded-xl bg-surface-2 px-3 py-2">
              <div>
                <span className="font-extrabold text-good">老板 (Stallholder): </span>
                <span className="font-bold text-ink">{dialogueAnswerZh}</span>
                <span className="ml-2 text-xs text-ink-2">({item.tasteEn} — ${unitPriceSelected.toFixed(2)} per {unitZh}.)</span>
              </div>
              <SpeakButtons text={dialogueAnswerZh} compact />
            </div>
            <div className="flex items-center justify-between gap-2 rounded-xl border border-brand/30 bg-brand-soft/40 px-3 py-2">
              <div>
                <span className="font-extrabold text-brand">顾客 (You): </span>
                <span className="font-extrabold text-ink">{dialogueOrderZh}</span>
                {showPinyin ? (
                  <div className="mt-0.5 text-xs font-semibold text-brand">
                    Wǒ yào {qtyFormatted.py} {unitPy} {item.py}. Yígòng {totalMoney.py}!
                  </div>
                ) : null}
              </div>
              <SpeakButtons text={dialogueOrderZh} compact />
            </div>
          </div>
          <p className="mt-2 text-xs text-ink-2">💡 {totalMoney.note}</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Bargaining Simulator (太贵了！便宜一点儿吧)
// ---------------------------------------------------------------------------

interface BargainDeal {
  id: string;
  icon: string;
  zh: string;
  py: string;
  en: string;
  unitMeasure: string;
  askingPrice: number;
  politePrice: number;
  bundlePrice: number; // for buying 2
}

const BARGAIN_DEALS: BargainDeal[] = [
  {
    id: "mango-box",
    icon: "🥭",
    zh: "大芒果",
    py: "dà mángguǒ",
    en: "large mangoes (2 jin)",
    unitMeasure: "两斤",
    askingPrice: 12,
    politePrice: 10,
    bundlePrice: 9,
  },
  {
    id: "durian-pack",
    icon: "🦔",
    zh: "猫山王榴莲",
    py: "Māoshānwáng liúlián",
    en: "Mao Shan Wang durian",
    unitMeasure: "一盒",
    askingPrice: 20,
    politePrice: 17,
    bundlePrice: 16,
  },
  {
    id: "watermelon",
    icon: "🍉",
    zh: "大西瓜",
    py: "dà xīguā",
    en: "big watermelon",
    unitMeasure: "一个",
    askingPrice: 10,
    politePrice: 8,
    bundlePrice: 8,
  },
];

type StrategyId = "polite" | "bundle" | "lowball" | "nopush";

interface StrategyOption {
  id: StrategyId;
  labelEn: string;
  buyerZh: string;
  buyerPy: string;
  buyerEn: string;
  moodScore: number; // 0..100
  moodLabel: string;
}

const STRATEGIES: StrategyOption[] = [
  {
    id: "polite",
    labelEn: "Polite Haggle (太贵了！便宜一点儿吧)",
    buyerZh: "老板，太贵了！便宜一点儿吧，可以吗？",
    buyerPy: "Lǎobǎn, tài guì le! Piányi yìdiǎnr ba, kěyǐ ma?",
    buyerEn: "Boss, that's too expensive! Make it a little cheaper, okay?",
    moodScore: 88,
    moodLabel: "😊 老板很高兴 (Happy to give a friendly discount!)",
  },
  {
    id: "bundle",
    labelEn: "Student Sweetener (我是学生，常来买！)",
    buyerZh: "我是学生，常常来买水果，再便宜一点儿吧！",
    buyerPy: "Wǒ shì xuésheng, chángcháng lái mǎi shuǐguǒ, zài piányi yìdiǎnr ba!",
    buyerEn: "I'm a student and often come to buy fruit — make it even a bit cheaper!",
    moodScore: 95,
    moodLabel: "🤩 老板非常开心 (Loves regular customers — best deal!)",
  },
  {
    id: "lowball",
    labelEn: "Extreme Lowball (两块钱卖不卖？)",
    buyerZh: "太贵了！两块钱卖不卖？",
    buyerPy: "Tài guì le! Liǎng kuài qián mài bú mài?",
    buyerEn: "Too expensive! Will you sell it for 2 dollars or not?",
    moodScore: 25,
    moodLabel: "😤 老板不高兴 (Too extreme — Uncle refuses to drop the price!)",
  },
  {
    id: "nopush",
    labelEn: "Pay Full Asking Price (好，我要了)",
    buyerZh: "好，很新鲜，我就买吧！一共多少钱？",
    buyerPy: "Hǎo, hěn xīnxiān, wǒ jiù mǎi ba! Yígòng duōshao qián?",
    buyerEn: "Okay, it's very fresh, I'll take it! How much altogether?",
    moodScore: 82,
    moodLabel: "😄 老板笑眯眯 (Easy sale, zero discount)",
  },
];

function BargainingSimulator() {
  const showPinyin = usePinyinVisible();
  const [dealId, setDealId] = useState<string>("mango-box");
  const [strategyId, setStrategyId] = useState<StrategyId>("polite");
  const [cashNote, setCashNote] = useState<20 | 50>(20);

  const deal = BARGAIN_DEALS.find((d) => d.id === dealId) ?? BARGAIN_DEALS[0];
  const strategy = STRATEGIES.find((s) => s.id === strategyId) ?? STRATEGIES[0];

  const finalPrice =
    strategyId === "polite"
      ? deal.politePrice
      : strategyId === "bundle"
        ? deal.bundlePrice
        : deal.askingPrice;

  const saved = deal.askingPrice - finalPrice;
  const effectiveCash = cashNote < finalPrice ? 50 : cashNote;
  const change = effectiveCash - finalPrice;

  const askMoney = intBeforeClassifier(deal.askingPrice);
  const finalMoney = intBeforeClassifier(finalPrice);
  const cashMoney = intBeforeClassifier(effectiveCash);
  const changeMoney = intBeforeClassifier(change);

  const uncleReplyZh =
    strategyId === "polite"
      ? `好吧好吧，看你这么有礼貌，算你${finalMoney.zh}块钱吧！还要别的吗？`
      : strategyId === "bundle"
        ? `哈哈，好！学生优惠，最低${finalMoney.zh}块钱卖给你！还要别的吗？`
        : strategyId === "lowball"
          ? `哎呀，两块钱太少了，不卖！最少也要${finalMoney.zh}块钱。`
          : `好嘞！一共${finalMoney.zh}块钱。还要别的吗？`;

  const payLineZh = `不要别的了，谢谢。给您${cashMoney.zh}块钱。`;
  const changeLineZh =
    change === 0
      ? `谢谢，正好${finalMoney.zh}块！慢走！`
      : `谢谢！收您${cashMoney.zh}块，找您${changeMoney.zh}块钱。慢走！`;

  const fullDialogueZh = `老板，${deal.zh}怎么卖？ ${deal.unitMeasure}${askMoney.zh}块钱。 ${strategy.buyerZh} ${uncleReplyZh} ${payLineZh} ${changeLineZh}`;

  return (
    <WidgetFrame
      title="巴刹砍价模拟器 · Bargaining Simulator (`太贵了！便宜一点儿吧`)"
      tryThis={[
        "Pick **猫山王榴莲** or **大芒果**, then test all 4 bargaining strategies on Uncle Chen (`陈老板`).",
        "Compare what happens to the **Mood Meter** and **Final Price** when you use polite **便宜一点儿吧** vs aggressive **两块钱卖不卖？**!",
        "Pay with a **20块** or **50块** note at the bottom to practise **给您…块** and **找您…块** (giving change).",
      ]}
      caption={
        <span>
          <strong>Polite bargaining secret:</strong> Pair <strong>太贵了！</strong> (Too expensive!) with the softening particle{" "}
          <strong>一点儿</strong> (a little bit) + <strong>吧 / 可以吗？</strong> to get a smile and a lower price!
        </span>
      }
    >
      <div className="space-y-4">
        {/* Item selection */}
        <div className="grid gap-2 sm:grid-cols-3">
          {BARGAIN_DEALS.map((d) => {
            const active = d.id === deal.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setDealId(d.id)}
                className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${
                  active ? "border-brand bg-brand-soft text-brand shadow-sm" : "border-line bg-surface hover:bg-surface-2"
                }`}
              >
                <span className="text-3xl leading-none" aria-hidden>
                  {d.icon}
                </span>
                <div>
                  <div className="font-extrabold text-ink">{d.zh}</div>
                  <div className="text-xs text-ink-2">
                    {d.unitMeasure} · Asking: <strong>${d.askingPrice}</strong>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Strategy buttons */}
        <div className="space-y-2 rounded-2xl border border-line bg-surface-2 p-3.5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            Choose Your Bargaining Move (选择你的砍价策略)
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {STRATEGIES.map((s) => {
              const active = s.id === strategyId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setStrategyId(s.id);
                    speakChinese(s.buyerZh);
                  }}
                  className={`rounded-xl border p-2.5 text-left transition ${
                    active ? "border-brand bg-surface shadow-sm" : "border-line bg-surface/70 hover:bg-surface"
                  }`}
                >
                  <div className="text-xs font-extrabold text-brand">{s.labelEn}</div>
                  <div className="mt-0.5 text-sm font-bold text-ink">{s.buyerZh}</div>
                  {showPinyin ? <div className="text-[11px] text-ink-2">{s.buyerPy}</div> : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stallholder Mood Meter & Savings */}
        <div className="grid gap-3 rounded-2xl border border-line bg-surface p-3.5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-extrabold">
              <span className="uppercase tracking-wide text-ink-2">Stallholder Mood (老板心情)</span>
              <span className={strategy.moodScore >= 75 ? "text-good" : "text-bad"}>{strategy.moodScore}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full border border-line bg-surface-2">
              <div
                className={`h-full transition-all duration-300 ${strategy.moodScore >= 75 ? "bg-good" : "bg-bad"}`}
                style={{ width: `${strategy.moodScore}%` }}
              />
            </div>
            <p className="text-xs font-bold text-ink">{strategy.moodLabel}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="space-y-1">
              <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Pay with Cash Note (付现金)</div>
              <Segmented
                label="Cash note"
                value={String(effectiveCash) as "20" | "50"}
                onChange={(v) => setCashNote(Number(v) as 20 | 50)}
                options={[
                  { value: "20", label: "💵 二十块 ($20)" },
                  { value: "50", label: "💵 五十块 ($50)" },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Readouts */}
        <div className="grid grid-cols-3 gap-2">
          <Readout label="Final Price (成交价)" value={`${finalMoney.zh}块 ($${finalPrice})`} tone="brand" />
          <Readout label="You Saved (省了)" value={saved > 0 ? `${intBeforeClassifier(saved).zh}块 ($${saved})` : "零块 ($0)"} tone={saved > 0 ? "good" : "ink"} />
          <Readout label="Change (找钱)" value={`${changeMoney.zh}块 ($${change})`} tone="ink" />
        </div>

        {/* Full Bargaining Transcript */}
        <div className="space-y-2 rounded-2xl border border-line bg-surface p-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Complete Stall Transcript</span>
            <SpeakButtons text={fullDialogueZh} compact />
          </div>
          <p className="text-ink">
            <strong className="text-brand">你：</strong>老板，{deal.zh}怎么卖？{" "}
            <strong className="ml-2 text-good">老板：</strong>{deal.unitMeasure}{askMoney.zh}块钱。
          </p>
          <p className="text-ink">
            <strong className="text-brand">你：</strong>{strategy.buyerZh}
          </p>
          <p className="text-ink">
            <strong className="text-good">老板：</strong>{uncleReplyZh}
          </p>
          <div className="flex items-center justify-between gap-2 rounded-xl bg-good-soft/50 px-3 py-2">
            <div>
              <p className="font-bold text-ink">
                <strong className="text-brand">你：</strong>{payLineZh}
              </p>
              <p className="font-extrabold text-ink">
                <strong className="text-good">老板：</strong>{changeLineZh}
              </p>
            </div>
            <SpeakButtons text={`${payLineZh} ${changeLineZh}`} compact />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "wet-market-scale-calculator",
    title: "Wet-Market Scale & Price Calculator (巴刹称重台)",
    blurb: "Weigh fruits and vegetables in 斤 (500g) or 公斤 (1kg) on a live SVG scale and compare spoken 块/毛 against written 元/角.",
    Component: WetMarketScale,
  },
  {
    id: "bargaining-simulator",
    title: "Bargaining Simulator (太贵了！便宜一点儿吧)",
    blurb: "Negotiate prices with Uncle Chen using 怎么卖？, 太贵了！, 便宜一点儿吧, and calculate exact Mandarin change (找您…块).",
    Component: BargainingSimulator,
  },
];
