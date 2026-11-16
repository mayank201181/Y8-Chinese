"use client";

import { useState } from "react";
import { WidgetFrame, Segmented, Stepper, Readout, type WidgetDef } from "./kit";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { usePinyinVisible } from "@/lib/pinyinDisplay";

// ---------------------------------------------------------------------------
// Helpers: Mandarin Count + Money
// ---------------------------------------------------------------------------

const CN_DIGITS = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

function toMandarinQty(n: number): string {
  if (n === 2) return "两";
  if (n < 10) return CN_DIGITS[n];
  if (n < 20) return n === 10 ? "十" : `十${CN_DIGITS[n % 10]}`;
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  return `${CN_DIGITS[tens]}十${ones === 0 ? "" : CN_DIGITS[ones]}`;
}

function toMandarinDollars(n: number): string {
  if (n === 0) return "零块";
  if (n < 100) return `${toMandarinQty(n)}块钱`;
  const h = Math.floor(n / 100);
  const rem = n % 100;
  const hStr = h === 2 ? "两百" : `${CN_DIGITS[h]}百`;
  if (rem === 0) return `${hStr}块钱`;
  if (rem < 10) return `${hStr}零${CN_DIGITS[rem]}块钱`;
  const tens = Math.floor(rem / 10);
  const ones = rem % 10;
  return `${hStr}${CN_DIGITS[tens]}十${ones === 0 ? "" : CN_DIGITS[ones]}块钱`;
}

// ---------------------------------------------------------------------------
// Widget 1: Hawker & Dim-Sum Restaurant Order Pad (点菜平板)
// ---------------------------------------------------------------------------

interface MenuItem {
  id: string;
  icon: string;
  zh: string;
  py: string;
  en: string;
  mw: string;
  mwPy: string;
  price: number;
  kind: "food" | "drink";
}

const MENU_ITEMS: MenuItem[] = [
  { id: "beef-noodle", icon: "🍜", zh: "牛肉面", py: "niúròumiàn", en: "beef noodle soup", mw: "碗", mwPy: "wǎn", price: 7, kind: "food" },
  { id: "chicken-rice", icon: "🍗", zh: "海南鸡饭", py: "Hǎinán jīfàn", en: "Hainanese chicken rice", mw: "盘", mwPy: "pán", price: 5, kind: "food" },
  { id: "xiaolongbao", icon: "🥟", zh: "小笼包", py: "xiǎolóngbāo", en: "soup dumplings", mw: "笼", mwPy: "lóng", price: 6, kind: "food" },
  { id: "sweet-sour-fish", icon: "🐟", zh: "糖醋鱼", py: "tángcùyú", en: "sweet & sour fish", mw: "盘", mwPy: "pán", price: 14, kind: "food" },
  { id: "greens", icon: "🥬", zh: "炒青菜", py: "chǎo qīngcài", en: "stir-fried greens", mw: "盘", mwPy: "pán", price: 6, kind: "food" },
  { id: "lemon-tea", icon: "🍋", zh: "柠檬茶", py: "níngméngchá", en: "iced lemon tea", mw: "杯", mwPy: "bēi", price: 3, kind: "drink" },
  { id: "bubble-tea", icon: "🧋", zh: "珍珠奶茶", py: "zhēnzhū nǎichá", en: "bubble milk tea", mw: "杯", mwPy: "bēi", price: 4, kind: "drink" },
  { id: "water", icon: "🧊", zh: "冰水", py: "bīngshuǐ", en: "iced water", mw: "杯", mwPy: "bēi", price: 1, kind: "drink" },
];

interface CustomReq {
  id: string;
  zh: string;
  py: string;
  en: string;
}

const CUSTOM_REQS: CustomReq[] = [
  { id: "no-spicy", zh: "不要太辣", py: "bú yào tài là", en: "not too spicy" },
  { id: "less-salt", zh: "少放盐", py: "shǎo fàng yán", en: "less salt" },
  { id: "no-coriander", zh: "不要香菜", py: "bú yào xiāngcài", en: "no coriander" },
  { id: "no-ice", zh: "不要冰", py: "bú yào bīng", en: "no ice" },
  { id: "takeaway", zh: "打包带走", py: "dǎbāo dàizǒu", en: "takeaway / pack to go" },
];

function HawkerOrderPad() {
  const showPinyin = usePinyinVisible();
  const [partySize, setPartySize] = useState<number>(4);
  const [cart, setCart] = useState<Record<string, number>>({
    "chicken-rice": 2,
    xiaolongbao: 1,
    "lemon-tea": 2,
  });
  const [reqs, setReqs] = useState<string[]>(["no-spicy", "no-ice"]);
  const [payMethod, setPayMethod] = useState<"phone" | "card" | "cash">("phone");

  const adjustQty = (id: string, delta: number, itemZh: string) => {
    setCart((prev) => {
      const nextVal = Math.max(0, Math.min(6, (prev[id] ?? 0) + delta));
      const copy = { ...prev, [id]: nextVal };
      if (nextVal === 0) delete copy[id];
      return copy;
    });
    if (delta > 0) speakChinese(itemZh);
  };

  const toggleReq = (id: string, zh: string) => {
    setReqs((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    speakChinese(zh);
  };

  const orderedItems = MENU_ITEMS.filter((m) => (cart[m.id] ?? 0) > 0);
  const totalCount = orderedItems.reduce((sum, m) => sum + (cart[m.id] ?? 0), 0);
  const totalDollars = orderedItems.reduce((sum, m) => sum + (cart[m.id] ?? 0) * m.price, 0);

  const orderedPhrasesZh = orderedItems.map((m) => `${toMandarinQty(cart[m.id])}${m.mw}${m.zh}`);
  const reqPhrasesZh = CUSTOM_REQS.filter((r) => reqs.includes(r.id)).map((r) => r.zh);

  const seatingZh = `服务员：欢迎光临！请问几位？ 顾客：我们有${toMandarinQty(partySize)}个人。`;
  const orderBodyZh =
    orderedPhrasesZh.length > 0
      ? `服务员，我们要点菜！来${orderedPhrasesZh.join("、")}。${reqPhrasesZh.length > 0 ? `请问可以${reqPhrasesZh.join("，")}吗？` : "够了，谢谢！"}`
      : "服务员，请给我看一下菜单！";

  const payMethodZh =
    payMethod === "phone" ? "可以用手机付钱吗？" : payMethod === "card" ? "可以刷卡吗？" : "我付现金，给您钱！";

  const billDialogueZh =
    totalDollars > 0
      ? `服务员，买单！一共多少钱？ 一共${toMandarinDollars(totalDollars)}。 ${payMethodZh}`
      : "您还没有点菜呢！";

  return (
    <WidgetFrame
      title="点菜平板 · Hawker & Dim-Sum Restaurant Order Pad"
      tryThis={[
        "Adjust **几位？ (Party size)** and tap `+` / `−` on dishes to watch classifiers (**碗 / 盘 / 笼 / 杯**) and **两** (for 2) update automatically.",
        "Toggle dietary requests like **不要太辣** (not too spicy), **少放盐** (less salt), or **不要冰** (no ice).",
        "Check the itemised bill at the bottom and listen to **服务员，买单！一共…块钱** with 🔊!",
      ]}
      caption={
        <span>
          <strong>Ordering & bill essentials:</strong> Use <strong>我要 / 来 + Number + Classifier + Dish</strong> to order,{" "}
          <strong>不要… / 少放…</strong> for dietary requests, and <strong>服务员，买单！</strong> to ask for the bill.
        </span>
      }
    >
      <div className="space-y-4">
        {/* Top bar: Party size + Quick clear */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface-2 p-3.5">
          <div className="min-w-[220px]">
            <Stepper
              label="Party Size (请问几位？)"
              value={partySize}
              min={1}
              max={8}
              onChange={setPartySize}
              format={(v) => `${toMandarinQty(v)}位 (${v})`}
            />
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-ink-2">
            <span>{seatingZh}</span>
            <SpeakButtons text={`欢迎光临！请问几位？ 我们有${toMandarinQty(partySize)}个人。`} compact />
          </div>
        </div>

        {/* Bilingual Menu Grid */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              1. Tap Dishes & Drinks on the Tablet Menu (点击点菜)
            </span>
            {totalCount > 0 ? (
              <button
                type="button"
                onClick={() => setCart({})}
                className="text-xs font-bold text-brand underline"
              >
                Clear Order (清空)
              </button>
            ) : null}
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {MENU_ITEMS.map((m) => {
              const count = cart[m.id] ?? 0;
              return (
                <div
                  key={m.id}
                  className={`flex items-center justify-between gap-2 rounded-xl border p-2.5 transition ${
                    count > 0 ? "border-brand bg-brand-soft/40 shadow-sm" : "border-line bg-surface"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-2xl leading-none" aria-hidden>
                      {m.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="truncate text-sm font-extrabold text-ink">{m.zh}</span>
                        <span className="chip text-[10px]">一{m.mw}</span>
                      </div>
                      {showPinyin ? <div className="text-[11px] font-semibold text-brand">{m.py}</div> : null}
                      <div className="truncate text-[11px] text-ink-2">
                        {m.en} · <strong>${m.price}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => adjustQty(m.id, -1, m.zh)}
                      disabled={count === 0}
                      aria-label={`Remove one ${m.en}`}
                      className="kbd h-8 min-w-8 text-sm disabled:opacity-40"
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-sm font-extrabold tabular-nums text-ink">{count}</span>
                    <button
                      type="button"
                      onClick={() => adjustQty(m.id, 1, m.zh)}
                      aria-label={`Add one ${m.en}`}
                      className="kbd h-8 min-w-8 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flavour & Dietary Customisations */}
        <div className="rounded-2xl border border-line bg-surface p-3.5">
          <div className="mb-2 text-xs font-extrabold uppercase tracking-wide text-ink-2">
            2. Flavour & Dietary Requests (口味与打包要求)
          </div>
          <div className="flex flex-wrap gap-1.5">
            {CUSTOM_REQS.map((r) => {
              const active = reqs.includes(r.id);
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => toggleReq(r.id, r.zh)}
                  className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                    active
                      ? "border-brand bg-brand text-white shadow-sm"
                      : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {r.zh}
                  {showPinyin ? <span className="ml-1 font-normal opacity-85">({r.py})</span> : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Ordering & Itemised Bill */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface-2 p-4">
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <span className="chip border-brand/30 bg-surface text-brand">Step A · Ordering (点菜)</span>
              <SpeakButtons text={orderBodyZh} compact />
            </div>
            <p className="text-sm font-extrabold leading-relaxed text-ink">{orderBodyZh}</p>
            <p className="mt-2 text-xs text-ink-2">
              Notice how <strong>来 (lái)</strong> works politely like &ldquo;bring us…&rdquo; at a Chinese restaurant or hawker stall!
            </p>
          </div>

          <div className="rounded-2xl border border-brand/30 bg-brand-soft/40 p-4">
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <span className="chip border-good/40 bg-surface text-good">Step B · Paying the Bill (买单)</span>
              <SpeakButtons text={billDialogueZh} compact />
            </div>
            <p className="text-sm font-extrabold leading-relaxed text-ink">{billDialogueZh}</p>
            <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
              <Segmented
                label="Payment method"
                value={payMethod}
                onChange={setPayMethod}
                options={[
                  { value: "phone", label: "📱 手机付钱" },
                  { value: "card", label: "💳 刷卡" },
                  { value: "cash", label: "💵 现金" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Guests (几位)" value={`${toMandarinQty(partySize)}位`} tone="ink" />
          <Readout label="Dishes & Drinks" value={`${totalCount} items`} tone="good" />
          <Readout label="Total Bill (一共)" value={`${toMandarinDollars(totalDollars)} ($${totalDollars})`} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Five-Flavours Taste Wheel (酸 · 甜 · 苦 · 辣 · 咸)
// ---------------------------------------------------------------------------

interface FlavourAxis {
  key: "suan" | "tian" | "ku" | "la" | "xian";
  zh: string;
  py: string;
  en: string;
  color: string;
}

const FLAVOUR_AXES: FlavourAxis[] = [
  { key: "suan", zh: "酸", py: "suān", en: "Sour", color: "#ca8a04" },
  { key: "tian", zh: "甜", py: "tián", en: "Sweet", color: "#db2777" },
  { key: "ku", zh: "苦", py: "kǔ", en: "Bitter", color: "#15803d" },
  { key: "la", zh: "辣", py: "là", en: "Spicy", color: "#dc2626" },
  { key: "xian", zh: "咸", py: "xián", en: "Salty / Savoury", color: "#0369a1" },
];

interface SignatureDish {
  id: string;
  icon: string;
  zh: string;
  py: string;
  en: string;
  isDrink?: boolean;
  scores: Record<FlavourAxis["key"], number>; // 0..5
  flavourPhraseZh: string;
  flavourPhrasePy: string;
  flavourPhraseEn: string;
}

const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: "sweet-sour-fish",
    icon: "🐟",
    zh: "糖醋鱼",
    py: "tángcùyú",
    en: "Sweet & Sour Fish",
    scores: { suan: 4.5, tian: 4.8, ku: 0.3, la: 0.8, xian: 2.2 },
    flavourPhraseZh: "又酸又甜",
    flavourPhrasePy: "yòu suān yòu tián",
    flavourPhraseEn: "both sour and sweet",
  },
  {
    id: "mala-hotpot",
    icon: "🍲",
    zh: "麻辣火锅",
    py: "málà huǒguō",
    en: "Sichuan Mala Hotpot",
    scores: { suan: 0.6, tian: 0.8, ku: 0.5, la: 5.0, xian: 4.2 },
    flavourPhraseZh: "又麻又辣、很香",
    flavourPhrasePy: "yòu má yòu là, hěn xiāng",
    flavourPhraseEn: "numbingly spicy and fragrant",
  },
  {
    id: "bitter-gourd",
    icon: "🥒",
    zh: "清炒苦瓜",
    py: "qīngchǎo kǔguā",
    en: "Stir-fried Bitter Gourd",
    scores: { suan: 0.4, tian: 0.6, ku: 4.7, la: 0.4, xian: 2.5 },
    flavourPhraseZh: "有一点儿苦，但是很清淡",
    flavourPhrasePy: "yǒu yìdiǎnr kǔ, dànshì hěn qīngdàn",
    flavourPhraseEn: "a little bitter, yet light and healthy",
  },
  {
    id: "lemon-tea",
    icon: "🍋",
    zh: "冰柠檬茶",
    py: "bīng níngméngchá",
    en: "Iced Lemon Tea",
    isDrink: true,
    scores: { suan: 4.4, tian: 3.8, ku: 0.7, la: 0.0, xian: 0.2 },
    flavourPhraseZh: "酸酸甜甜、很凉快",
    flavourPhrasePy: "suānsuān tiántián, hěn liángkuai",
    flavourPhraseEn: "sweet-tangy and refreshing",
  },
  {
    id: "roast-duck",
    icon: "🦆",
    zh: "北京烤鸭",
    py: "Běijīng kǎoyā",
    en: "Beijing Roast Duck",
    scores: { suan: 0.8, tian: 3.2, ku: 0.2, la: 0.5, xian: 4.5 },
    flavourPhraseZh: "咸甜适中、非常香",
    flavourPhrasePy: "xiántián shìzhōng, fēicháng xiāng",
    flavourPhraseEn: "savory-sweet and super aromatic",
  },
];

const SECOND_CLAUSES = [
  { id: "cheap", zh: "一点儿也不贵", py: "yìdiǎnr yě bú guì", en: "not expensive at all" },
  { id: "healthy", zh: "对身体很好", py: "duì shēntǐ hěn hǎo", en: "very good for your health" },
  { id: "famous", zh: "在新加坡很有名", py: "zài Xīnjiāpō hěn yǒumíng", en: "very famous in Singapore" },
];

function FiveFlavoursWheel() {
  const showPinyin = usePinyinVisible();
  const [dishId, setDishId] = useState<string>("sweet-sour-fish");
  const [clause2Id, setClause2Id] = useState<string>("cheap");

  const dish = SIGNATURE_DISHES.find((d) => d.id === dishId) ?? SIGNATURE_DISHES[0];
  const clause2 = SECOND_CLAUSES.find((c) => c.id === clause2Id) ?? SECOND_CLAUSES[0];

  // SVG Pentagon Radar Geometry
  const cx = 140;
  const cy = 122;
  const maxR = 78;

  const vertexAt = (idx: number, radius: number) => {
    const angleRad = ((-90 + idx * 72) * Math.PI) / 180;
    return {
      x: +(cx + Math.cos(angleRad) * radius).toFixed(1),
      y: +(cy + Math.sin(angleRad) * radius).toFixed(1),
    };
  };

  const ringPolygons = [1, 2, 3, 4, 5].map((level) => {
    const r = (level / 5) * maxR;
    return FLAVOUR_AXES.map((_, i) => {
      const pt = vertexAt(i, r);
      return `${pt.x},${pt.y}`;
    }).join(" ");
  });

  const dataPoints = FLAVOUR_AXES.map((axis, i) => {
    const val = dish.scores[axis.key];
    return vertexAt(i, (val / 5) * maxR);
  });
  const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  const deliciousWordZh = dish.isDrink ? "好喝" : "好吃";
  const deliciousWordPy = dish.isDrink ? "hǎohē" : "hǎochī";
  const deliciousWordEn = dish.isDrink ? "delicious to drink (好喝)" : "delicious to eat (好吃)";

  const reviewZh = `这家餐厅的${dish.zh}不但${dish.flavourPhraseZh}、非常${deliciousWordZh}，而且${clause2.zh}！`;
  const reviewPy = `Zhè jiā cāntīng de ${dish.py} búdàn ${dish.flavourPhrasePy}, fēicháng ${deliciousWordPy}, érqiě ${clause2.py}!`;
  const reviewEn = `This restaurant's ${dish.en} is not only ${dish.flavourPhraseEn} and ${deliciousWordEn}, but also ${clause2.en}!`;

  return (
    <WidgetFrame
      title="五味雷达轮 · Five-Flavours Taste Wheel (`酸 · 甜 · 苦 · 辣 · 咸`)"
      tryThis={[
        "Click **糖醋鱼**, **麻辣火锅**, **清炒苦瓜**, or **冰柠檬茶** to morph the 5-axis flavour polygon on the SVG wheel!",
        "Tap any flavour label (**酸 / 甜 / 苦 / 辣 / 咸**) on the diagram to hear its pronunciation.",
        "Notice how switching from **糖醋鱼** (food) to **冰柠檬茶** (drink) automatically flips **好吃** → **好喝** inside your **不但…而且…** review!",
      ]}
      caption={
        <span>
          <strong>好吃 vs 好喝 trap:</strong> Solid dishes are <strong>好吃</strong> (tasty to eat), while drinks and soups are{" "}
          <strong>好喝</strong> (tasty to drink). Pair two flavours with <strong>又…又…</strong> (e.g. <strong>又酸又甜</strong>)!
        </span>
      }
    >
      <div className="space-y-4">
        {/* Dish Selector */}
        <div className="flex flex-wrap gap-1.5">
          {SIGNATURE_DISHES.map((d) => {
            const active = d.id === dish.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => {
                  setDishId(d.id);
                  speakChinese(d.zh);
                }}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-extrabold transition ${
                  active
                    ? "border-brand bg-brand-soft text-brand shadow-sm"
                    : "border-line bg-surface text-ink hover:bg-surface-2"
                }`}
              >
                <span className="text-base" aria-hidden>
                  {d.icon}
                </span>
                <span>{d.zh}</span>
                <span className="font-normal text-ink-2">({d.en})</span>
              </button>
            );
          })}
        </div>

        {/* SVG Pentagon Radar + Flavour Bars */}
        <div className="grid items-center gap-4 rounded-2xl border border-line bg-surface-2 p-4 sm:grid-cols-2">
          <div className="diagram-svg">
            <svg viewBox="0 0 280 242" role="img" aria-label={`Five flavours radar chart for ${dish.en}`}>
              {/* Concentric pentagons */}
              {ringPolygons.map((pts, idx) => (
                <polygon
                  key={idx}
                  points={pts}
                  fill={idx === 4 ? "#fff7ed" : "none"}
                  stroke="#cbd5e1"
                  strokeWidth={idx === 4 ? 1.8 : 1}
                />
              ))}

              {/* Axis spokes */}
              {FLAVOUR_AXES.map((axis, i) => {
                const outer = vertexAt(i, maxR);
                return <line key={axis.key} x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke="#cbd5e1" strokeWidth={1} />;
              })}

              {/* Dish Flavour Polygon */}
              <polygon
                points={dataPolygon}
                fill="rgba(200, 30, 30, 0.24)"
                stroke="#c81e1e"
                strokeWidth={2.8}
                strokeLinejoin="round"
              />

              {/* Data dots */}
              {dataPoints.map((pt, i) => (
                <circle key={i} cx={pt.x} cy={pt.y} r={4.5} fill="#c81e1e" stroke="#ffffff" strokeWidth={1.5} />
              ))}

              {/* Interactive Flavour Labels around Pentagon */}
              {FLAVOUR_AXES.map((axis, i) => {
                const lbl = vertexAt(i, maxR + 24);
                return (
                  <g
                    key={axis.key}
                    onClick={() => speakChinese(axis.zh)}
                    style={{ cursor: "pointer" }}
                    role="button"
                    aria-label={`Speak ${axis.zh} (${axis.en})`}
                  >
                    <circle cx={lbl.x} cy={lbl.y} r={17} fill="#ffffff" stroke={axis.color} strokeWidth={2} />
                    <text x={lbl.x} y={lbl.y + 1} fontSize={12} fontWeight="800" textAnchor="middle" fill={axis.color}>
                      {axis.zh}
                    </text>
                    <text x={lbl.x} y={lbl.y + 11} fontSize={7.5} fontWeight="700" textAnchor="middle" fill="#475569">
                      {axis.py}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-line bg-surface p-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-extrabold text-ink">
                  {dish.icon} {dish.zh} ({dish.en})
                </span>
                <span className={`chip ${dish.isDrink ? "border-info/40 text-info" : "border-good/40 text-good"}`}>
                  Use {deliciousWordZh}!
                </span>
              </div>
              <p className="mt-1 text-sm font-bold text-brand">{dish.flavourPhraseZh}</p>
              {showPinyin ? <p className="text-xs text-ink-2">{dish.flavourPhrasePy}</p> : null}
              <p className="mt-0.5 text-xs text-ink-2">{dish.flavourPhraseEn}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
                Add Second Point for 不但…而且… Review:
              </div>
              <div className="flex flex-col gap-1.5">
                {SECOND_CLAUSES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setClause2Id(c.id)}
                    className={`rounded-lg border px-3 py-1.5 text-left text-xs font-bold transition ${
                      clause2Id === c.id
                        ? "border-brand bg-brand-soft text-brand"
                        : "border-line bg-surface text-ink-2 hover:text-ink"
                    }`}
                  >
                    而且{c.zh} ({c.en})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Review Sentence Output */}
        <div className="rounded-2xl border border-brand/30 bg-brand-soft/40 p-4">
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="chip border-brand/40 bg-surface text-brand">IGCSE Food Critic Sentence · 不但…而且…</span>
            <SpeakButtons text={reviewZh} compact />
          </div>
          <p className="text-lg font-extrabold text-ink">{reviewZh}</p>
          {showPinyin ? <p className="mt-1 text-xs font-semibold text-brand">{reviewPy}</p> : null}
          <p className="mt-1 text-xs text-ink-2">{reviewEn}</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "hawker-dimsum-order-pad",
    title: "Hawker & Dim-Sum Restaurant Order Pad (点菜平板)",
    blurb: "Tap dishes on a bilingual menu, customise flavours (不要太辣 / 少放盐 / 不要冰), and generate live 点菜 & 买单 dialogues with audio.",
    Component: HawkerOrderPad,
  },
  {
    id: "five-flavours-taste-wheel",
    title: "Five-Flavours Taste Wheel (酸 · 甜 · 苦 · 辣 · 咸)",
    blurb: "Explore classic dishes on an interactive SVG pentagon taste wheel and build 不但…而且… food reviews contrasting 好吃 vs 好喝.",
    Component: FiveFlavoursWheel,
  },
];
