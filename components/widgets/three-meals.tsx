"use client";

import { useState } from "react";
import { WidgetFrame, Segmented, Readout, type WidgetDef } from "./kit";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { usePinyinVisible } from "@/lib/pinyinDisplay";

// ---------------------------------------------------------------------------
// Widget 1: Three-Meals Plate & Classifier Builder (一日三餐营养盘)
// ---------------------------------------------------------------------------

type MealKey = "zaofan" | "wufan" | "wanfan";

interface MealInfo {
  id: MealKey;
  zh: string;
  py: string;
  en: string;
  timeHint: string;
}

const MEALS: MealInfo[] = [
  { id: "zaofan", zh: "早饭", py: "zǎofàn", en: "Breakfast", timeHint: "早上七点" },
  { id: "wufan", zh: "午饭", py: "wǔfàn", en: "Lunch", timeHint: "中午十二点半" },
  { id: "wanfan", zh: "晚饭", py: "wǎnfàn", en: "Dinner", timeHint: "晚上七点" },
];

interface FoodChoice {
  id: string;
  icon: string;
  phraseZh: string;
  phrasePy: string;
  nounZh: string;
  classifierZh: string;
  classifierNote: string;
  en: string;
  healthPts: number;
  isVeg?: boolean;
  isSugary?: boolean;
}

const STAPLES: FoodChoice[] = [
  { id: "rice", icon: "🍚", phraseZh: "一碗米饭", phrasePy: "yì wǎn mǐfàn", nounZh: "米饭", classifierZh: "碗 (bowl)", classifierNote: "碗 (wǎn) for bowls of rice, noodles, soup, porridge", en: "a bowl of rice", healthPts: 25 },
  { id: "noodles", icon: "🍜", phraseZh: "一碗面条", phrasePy: "yì wǎn miàntiáo", nounZh: "面条", classifierZh: "碗 (bowl)", classifierNote: "碗 (wǎn) for bowls of noodles", en: "a bowl of noodles", healthPts: 25 },
  { id: "dumplings", icon: "🥟", phraseZh: "一盘饺子", phrasePy: "yì pán jiǎozi", nounZh: "饺子", classifierZh: "盘 (plate)", classifierNote: "盘 (pán) for flat plates of dumplings or stir-fries", en: "a plate of dumplings", healthPts: 25 },
  { id: "baozi", icon: "🥮", phraseZh: "两个包子", phrasePy: "liǎng ge bāozi", nounZh: "包子", classifierZh: "个 (item)", classifierNote: "两个 (never 二个!) for steamed buns", en: "two steamed buns", healthPts: 25 },
  { id: "bread", icon: "🍞", phraseZh: "两片面包", phrasePy: "liǎng piàn miànbāo", nounZh: "面包", classifierZh: "片 (slice)", classifierNote: "片 (piàn) for flat slices of bread or fruit", en: "two slices of bread", healthPts: 22 },
];

const DISHES: FoodChoice[] = [
  { id: "greens", icon: "🥬", phraseZh: "一盘青菜", phrasePy: "yì pán qīngcài", nounZh: "青菜", classifierZh: "盘 (plate)", classifierNote: "盘 (pán) for plated vegetable & meat dishes", en: "a plate of green vegetables", healthPts: 35, isVeg: true },
  { id: "tomato-egg", icon: "🍅", phraseZh: "一盘西红柿炒鸡蛋", phrasePy: "yì pán xīhóngshì chǎo jīdàn", nounZh: "西红柿炒鸡蛋", classifierZh: "盘 (plate)", classifierNote: "Classic home dish: stir-fried tomato & egg!", en: "a plate of tomato stir-fried with egg", healthPts: 35, isVeg: true },
  { id: "chicken", icon: "🍗", phraseZh: "一盘海南鸡肉", phrasePy: "yì pán Hǎinán jīròu", nounZh: "海南鸡肉", classifierZh: "盘 (plate)", classifierNote: "盘 (pán) for sliced Hainanese chicken", en: "a plate of Hainanese chicken", healthPts: 28 },
  { id: "fish", icon: "🐟", phraseZh: "一条蒸鱼", phrasePy: "yì tiáo zhēngyú", nounZh: "蒸鱼", classifierZh: "条 (long/fish)", classifierNote: "条 (tiáo) is the special classifier for whole fish!", en: "a steamed fish", healthPts: 32 },
  { id: "fries", icon: "🍟", phraseZh: "一包薯条", phrasePy: "yì bāo shǔtiáo", nounZh: "薯条", classifierZh: "包 (pack)", classifierNote: "包 (bāo) for packets/bags of snacks", en: "a pack of French fries", healthPts: 10, isSugary: true },
];

const DRINKS: FoodChoice[] = [
  { id: "milk", icon: "🥛", phraseZh: "一杯牛奶", phrasePy: "yì bēi niúnǎi", nounZh: "牛奶", classifierZh: "杯 (cup/glass)", classifierNote: "杯 (bēi) for cups, mugs and glasses of drink", en: "a glass of milk", healthPts: 30 },
  { id: "greentea", icon: "🍵", phraseZh: "一杯绿茶", phrasePy: "yì bēi lǜchá", nounZh: "绿茶", classifierZh: "杯 (cup)", classifierNote: "杯 (bēi) for tea and coffee", en: "a cup of green tea", healthPts: 30 },
  { id: "soup", icon: "🥣", phraseZh: "一碗鸡蛋汤", phrasePy: "yì wǎn jīdàntāng", nounZh: "鸡蛋汤", classifierZh: "碗 (bowl)", classifierNote: "In Chinese, soup uses 喝 (drink) + 碗 (bowl)!", en: "a bowl of egg soup", healthPts: 32 },
  { id: "water", icon: "💧", phraseZh: "一瓶水", phrasePy: "yì píng shuǐ", nounZh: "水", classifierZh: "瓶 (bottle)", classifierNote: "瓶 (píng) for bottles of water or juice", en: "a bottle of water", healthPts: 32 },
  { id: "cola", icon: "🥤", phraseZh: "一杯可乐", phrasePy: "yì bēi kělè", nounZh: "可乐", classifierZh: "杯 (cup)", classifierNote: "可乐 is tasty, but 少喝可乐 (drink less cola)!", en: "a cup of cola", healthPts: 8, isSugary: true },
];

interface MealSelection {
  stapleId: string;
  dishId: string;
  drinkId: string;
}

function ThreeMealsPlateBuilder() {
  const showPinyin = usePinyinVisible();
  const [meal, setMeal] = useState<MealKey>("wufan");
  const [plates, setPlates] = useState<Record<MealKey, MealSelection>>({
    zaofan: { stapleId: "baozi", dishId: "tomato-egg", drinkId: "milk" },
    wufan: { stapleId: "rice", dishId: "greens", drinkId: "soup" },
    wanfan: { stapleId: "noodles", dishId: "fish", drinkId: "greentea" },
  });

  const mealMeta = MEALS.find((m) => m.id === meal) ?? MEALS[1];
  const sel = plates[meal];
  const staple = STAPLES.find((s) => s.id === sel.stapleId) ?? STAPLES[0];
  const dish = DISHES.find((d) => d.id === sel.dishId) ?? DISHES[0];
  const drink = DRINKS.find((dr) => dr.id === sel.drinkId) ?? DRINKS[0];

  const updateSlot = (patch: Partial<MealSelection>, speakText: string) => {
    setPlates((prev) => ({ ...prev, [meal]: { ...prev[meal], ...patch } }));
    speakChinese(speakText);
  };

  const rawScore = staple.healthPts + dish.healthPts + drink.healthPts + (dish.isVeg ? 8 : 0);
  const balanceScore = Math.min(100, rawScore);

  const adviceZh =
    dish.isSugary || drink.isSugary
      ? "提示：快餐和可乐糖分高，应该多吃蔬菜，少喝可乐！"
      : dish.isVeg
        ? "太棒了！有主食、有蔬菜，营养非常均衡！"
        : "不错！有蛋白质和主食，如果再加一盘青菜就更健康了！";

  const sentenceZh = `今天${mealMeta.zh}我吃${staple.phraseZh}和${dish.phraseZh}，还喝${drink.phraseZh}。`;
  const sentencePy = `Jīntiān ${mealMeta.py} wǒ chī ${staple.phrasePy} hé ${dish.phrasePy}, hái hē ${drink.phrasePy}.`;
  const sentenceEn = `For ${mealMeta.en.toLowerCase()} today, I eat ${staple.en} and ${dish.en}, and also drink ${drink.en}.`;

  return (
    <WidgetFrame
      title="一日三餐营养盘 · Three-Meals Plate & Classifier Builder"
      tryThis={[
        "Switch between **早饭** (breakfast), **午饭** (lunch), and **晚饭** (dinner) to build a balanced day.",
        "Watch how each item brings its own **measure word (量词)**: **一碗米饭** (bowl), **一盘饺子** (plate), **一条蒸鱼** (fish), **一杯牛奶** (cup)!",
        "Try selecting **薯条** + **可乐** vs **青菜** + **鸡蛋汤** to see how your **营养均衡分** changes.",
      ]}
      caption={
        <span>
          <strong>Verb + Classifier rule:</strong> Always include <strong>吃</strong> for solid food (including <strong>吃早饭</strong>!) and{" "}
          <strong>喝</strong> for drinks AND soup (<strong>喝一碗鸡蛋汤</strong>).
        </span>
      }
    >
      <div className="space-y-4">
        {/* Meal Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Select meal"
            value={meal}
            onChange={setMeal}
            options={MEALS.map((m) => ({
              value: m.id,
              label: `${m.zh} (${m.en})`,
            }))}
          />
          <span className="chip">{mealMeta.timeHint}</span>
        </div>

        {/* SVG Divided Meal Plate + Drink Cup */}
        <div className="grid items-center gap-4 rounded-2xl border border-line bg-surface-2 p-4 sm:grid-cols-2">
          <div className="diagram-svg">
            <svg viewBox="0 0 300 205" role="img" aria-label={`Divided plate for ${mealMeta.en}`}>
              {/* Main Dinner Plate */}
              <circle cx={112} cy={104} r={86} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={4} />
              <circle cx={112} cy={104} r={74} fill="#ffffff" stroke="#e2e8f0" strokeWidth={2} />
              {/* Divider line across plate */}
              <line x1={112} y1={30} x2={112} y2={178} stroke="#cbd5e1" strokeWidth={3} strokeDasharray="5 3" />

              {/* Left Half: Staple */}
              <text x={72} y={96} fontSize={36} textAnchor="middle">
                {staple.icon}
              </text>
              <text x={72} y={124} fontSize={11} fontWeight="800" textAnchor="middle" fill="#1e293b">
                {staple.phraseZh}
              </text>
              <rect x={44} y={132} width={56} height={18} rx={9} fill="#fee2e2" />
              <text x={72} y={144} fontSize={9.5} fontWeight="800" textAnchor="middle" fill="#c81e1e">
                {staple.classifierZh}
              </text>

              {/* Right Half: Dish */}
              <text x={152} y={96} fontSize={36} textAnchor="middle">
                {dish.icon}
              </text>
              <text x={152} y={124} fontSize={10.5} fontWeight="800" textAnchor="middle" fill="#1e293b">
                {dish.nounZh}
              </text>
              <rect x={122} y={132} width={60} height={18} rx={9} fill="#dcfce7" />
              <text x={152} y={144} fontSize={9.5} fontWeight="800" textAnchor="middle" fill="#15803d">
                {dish.classifierZh}
              </text>

              {/* Side Drink Coaster & Cup */}
              <circle cx={248} cy={110} r={40} fill="#fef3c7" stroke="#f59e0b" strokeWidth={2.5} />
              <text x={248} y={102} fontSize={32} textAnchor="middle">
                {drink.icon}
              </text>
              <text x={248} y={125} fontSize={10.5} fontWeight="800" textAnchor="middle" fill="#1e293b">
                {drink.phraseZh}
              </text>
              <rect x={218} y={156} width={60} height={18} rx={9} fill="#e0f2fe" />
              <text x={248} y={168} fontSize={9.5} fontWeight="800" textAnchor="middle" fill="#0369a1">
                {drink.classifierZh}
              </text>
            </svg>
          </div>

          {/* Classifier Inspector + Nutrition Score */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <Readout
                label="Nutrition Score (营养分)"
                value={`${balanceScore} / 100`}
                tone={balanceScore >= 85 ? "good" : balanceScore >= 65 ? "brand" : "bad"}
              />
              <Readout label="Current Meal" value={mealMeta.zh} tone="ink" />
            </div>

            <div className="space-y-1.5 rounded-xl border border-line bg-surface p-3 text-xs">
              <div className="font-extrabold uppercase tracking-wide text-ink-2">Classifier Breakdown (量词配对)</div>
              <p className="text-ink">
                🍚 <strong>{staple.phraseZh}</strong> — {staple.classifierNote}
              </p>
              <p className="text-ink">
                🥢 <strong>{dish.phraseZh}</strong> — {dish.classifierNote}
              </p>
              <p className="text-ink">
                🥤 <strong>{drink.phraseZh}</strong> — {drink.classifierNote}
              </p>
            </div>

            <div
              className={`rounded-xl border px-3 py-2 text-xs font-bold ${
                balanceScore >= 80
                  ? "border-good/30 bg-good-soft text-good"
                  : "border-warn/40 bg-warn-soft text-warn"
              }`}
            >
              {adviceZh}
            </div>
          </div>
        </div>

        {/* 3 Food Category Pickers */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="space-y-1.5 rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">1. Staple (主食 · 吃)</div>
            <div className="flex flex-wrap gap-1.5">
              {STAPLES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => updateSlot({ stapleId: s.id }, s.phraseZh)}
                  className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                    s.id === staple.id
                      ? "border-brand bg-brand-soft text-brand"
                      : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                  }`}
                >
                  {s.icon} {s.phraseZh}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5 rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-good">2. Dish (菜肴 · 吃)</div>
            <div className="flex flex-wrap gap-1.5">
              {DISHES.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => updateSlot({ dishId: d.id }, d.phraseZh)}
                  className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                    d.id === dish.id
                      ? "border-good bg-good-soft text-good"
                      : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                  }`}
                >
                  {d.icon} {d.phraseZh}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5 rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-info">3. Drink / Soup (饮料/汤 · 喝)</div>
            <div className="flex flex-wrap gap-1.5">
              {DRINKS.map((dr) => (
                <button
                  key={dr.id}
                  type="button"
                  onClick={() => updateSlot({ drinkId: dr.id }, dr.phraseZh)}
                  className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                    dr.id === drink.id
                      ? "border-info bg-info-soft text-info"
                      : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                  }`}
                >
                  {dr.icon} {dr.phraseZh}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Sentence */}
        <div className="rounded-2xl border border-brand/30 bg-brand-soft/40 p-4">
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="chip border-brand/40 bg-surface text-brand">Your Meal Description · 三餐造句</span>
            <SpeakButtons text={sentenceZh} compact />
          </div>
          <p className="text-lg font-extrabold text-ink">{sentenceZh}</p>
          {showPinyin ? <p className="mt-1 text-xs font-semibold text-brand">{sentencePy}</p> : null}
          <p className="mt-1 text-xs text-ink-2">{sentenceEn}</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Appetite & Mealtime Reaction Lab (饿 · 渴 · 吃饱了)
// ---------------------------------------------------------------------------

interface AppetiteScenario {
  id: string;
  icon: string;
  titleEn: string;
  contextZh: string;
  hungerPct: number;
  thirstPct: number;
  reactionZh: string;
  reactionPy: string;
  reactionEn: string;
  grammarTip: string;
}

const SCENARIOS: AppetiteScenario[] = [
  {
    id: "hungry",
    icon: "🕛",
    titleEn: "12:15 pm before lunch",
    contextZh: "现在中午十二点一刻，还没吃午饭。",
    hungerPct: 92,
    thirstPct: 35,
    reactionZh: "我饿了！我想吃一碗牛肉面。",
    reactionPy: "Wǒ è le! Wǒ xiǎng chī yì wǎn niúròumiàn.",
    reactionEn: "I'm hungry now! I'd like to eat a bowl of beef noodles.",
    grammarTip: "Sentence-final 了 in 我饿了 marks a NEW state ('I have become hungry').",
  },
  {
    id: "thirsty",
    icon: "⚽",
    titleEn: "After PE football in 32°C Singapore heat",
    contextZh: "体育课踢了一个小时足球，天气很热。",
    hungerPct: 30,
    thirstPct: 96,
    reactionZh: "我很渴！我想喝一大瓶冰水。",
    reactionPy: "Wǒ hěn kě! Wǒ xiǎng hē yí dà píng bīngshuǐ.",
    reactionEn: "I'm very thirsty! I want to drink a big bottle of iced water.",
    grammarTip: "Adjectives take 很 (我很渴) or change-of-state 了 (我渴了) — NEVER *我是渴*!",
  },
  {
    id: "full",
    icon: "🫃",
    titleEn: "Grandma offers a third bowl of dumplings",
    contextZh: "晚饭已经吃了两碗饺子，奶奶问还要不要。",
    hungerPct: 5,
    thirstPct: 20,
    reactionZh: "谢谢奶奶，我吃饱了，真的吃不下了！",
    reactionPy: "Xièxie nǎinai, wǒ chībǎo le, zhēn de chī bú xià le!",
    reactionEn: "Thank you Grandma, I'm full — I really can't eat another bite!",
    grammarTip: "吃饱了 = 吃 (eat) + 饱 (full result) + 了 (completed state).",
  },
  {
    id: "healthy-advice",
    icon: "🥗",
    titleEn: "Giving healthy diet advice to a classmate",
    contextZh: "同学每天喝三杯可乐，从不吃蔬菜。",
    hungerPct: 50,
    thirstPct: 50,
    reactionZh: "你应该多吃蔬菜和水果，少喝可乐！",
    reactionPy: "Nǐ yīnggāi duō chī shūcài hé shuǐguǒ, shǎo hē kělè!",
    reactionEn: "You should eat more vegetables and fruit, and drink less cola!",
    grammarTip: "Put 多 (more) and 少 (less) BEFORE the verb: 多吃蔬菜，少喝可乐!",
  },
];

interface QuizItem {
  promptEn: string;
  options: { zh: string; py: string; isCorrect: boolean; why: string }[];
}

const QUIZ_ITEMS: QuizItem[] = [
  {
    promptEn: "Your stomach is rumbling before breakfast. How do you say 'I am hungry now!'?",
    options: [
      { zh: "我饿了！", py: "Wǒ è le!", isCorrect: true, why: "Correct! Change-of-state 了 shows you've become hungry." },
      { zh: "我是饿！", py: "Wǒ shì è!", isCorrect: false, why: "Trap! Never put 是 before an adjective like 饿." },
      { zh: "我吃饱了！", py: "Wǒ chībǎo le!", isCorrect: false, why: "我吃饱了 means 'I am full' (after eating)!" },
    ],
  },
  {
    promptEn: "You just finished running in PE and need water. What do you say?",
    options: [
      { zh: "我很渴，想喝一瓶水。", py: "Wǒ hěn kě, xiǎng hē yì píng shuǐ.", isCorrect: true, why: "Spot on! 很渴 (very thirsty) + 喝一瓶水 (drink a bottle of water)." },
      { zh: "我很渴，想吃一瓶水。", py: "Wǒ hěn kě, xiǎng chī yì píng shuǐ.", isCorrect: false, why: "Drinks always take 喝 (hē), not 吃!" },
      { zh: "我很饿，想喝米饭。", py: "Wǒ hěn è, xiǎng hē mǐfàn.", isCorrect: false, why: "饿 means hungry, and rice uses 吃!" },
    ],
  },
  {
    promptEn: "How do you advise your younger brother to eat more fruit and drink less cola?",
    options: [
      { zh: "多吃水果，少喝可乐！", py: "Duō chī shuǐguǒ, shǎo hē kělè!", isCorrect: true, why: "Correct! 多 + Verb (eat more) and 少 + Verb (drink less)." },
      { zh: "吃多水果，喝少可乐！", py: "Chī duō shuǐguǒ, hē shǎo kělè!", isCorrect: false, why: "In standard Mandarin advice, 多/少 goes BEFORE the verb: 多吃 / 少喝." },
      { zh: "不吃水果，多喝可乐！", py: "Bù chī shuǐguǒ, duō hē kělè!", isCorrect: false, why: "That says 'don't eat fruit, drink more cola'!" },
    ],
  },
  {
    promptEn: "Your host family offers more food, but you are completely full. What is polite and natural?",
    options: [
      { zh: "谢谢，我吃饱了！", py: "Xièxie, wǒ chībǎo le!", isCorrect: true, why: "Perfect polite table manners: 谢谢，我吃饱了！" },
      { zh: "不要，我不饿过。", py: "Bú yào, wǒ bú è guo.", isCorrect: false, why: "Ungrammatical and too blunt!" },
      { zh: "我早上七点早饭。", py: "Wǒ zǎoshang qī diǎn zǎofàn.", isCorrect: false, why: "Missing the verb 吃, and unrelated to being full!" },
    ],
  },
];

function AppetiteReactionLab() {
  const showPinyin = usePinyinVisible();
  const [mode, setMode] = useState<"explore" | "quiz">("explore");
  const [scenarioIdx, setScenarioIdx] = useState<number>(0);
  const [quizIdx, setQuizIdx] = useState<number>(0);
  const [pickedOpt, setPickedOpt] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);

  const sc = SCENARIOS[scenarioIdx];
  const q = QUIZ_ITEMS[quizIdx];

  const handlePick = (optIdx: number) => {
    if (pickedOpt !== null) return;
    setPickedOpt(optIdx);
    const chosen = q.options[optIdx];
    speakChinese(chosen.zh);
    if (chosen.isCorrect) setScore((s) => s + 1);
  };

  const nextQuiz = () => {
    setPickedOpt(null);
    setQuizIdx((prev) => (prev + 1) % QUIZ_ITEMS.length);
  };

  return (
    <WidgetFrame
      title="饿 · 渴 · 吃饱了 · Appetite & Mealtime Reaction Lab"
      tryThis={[
        "In **Explore Mode**, click through all 4 real-life moments and watch the **饥饿度 (Hunger)** and **口渴度 (Thirst)** gauges react.",
        "Switch to **Quick Self-Quiz** to test **我饿了 / 我很渴 / 我吃饱了 / 多吃…少喝…** and catch classic traps like `*我是饿`!",
      ]}
      caption={
        <span>
          <strong>Key pattern:</strong> <strong>我饿了</strong> (hungry), <strong>我很渴</strong> (thirsty),{" "}
          <strong>我吃饱了</strong> (full), and healthy advice <strong>多 + Verb …，少 + Verb …</strong>!
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Lab mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: "explore", label: "🔍 情景探索 Explore" },
              { value: "quiz", label: "⚡ 快问快答 Self-Quiz" },
            ]}
          />
          {mode === "quiz" ? <span className="chip border-good/40 bg-good-soft text-good">Score: {score}</span> : null}
        </div>

        {mode === "explore" ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {SCENARIOS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setScenarioIdx(idx);
                    speakChinese(item.reactionZh);
                  }}
                  className={`rounded-xl border p-2.5 text-left transition ${
                    idx === scenarioIdx
                      ? "border-brand bg-brand-soft text-brand shadow-sm"
                      : "border-line bg-surface hover:bg-surface-2"
                  }`}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className="mt-1 text-xs font-extrabold leading-snug text-ink">{item.titleEn}</div>
                </button>
              ))}
            </div>

            <div className="grid gap-4 rounded-2xl border border-line bg-surface-2 p-4 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Situation (情景)</div>
                <p className="text-sm font-bold text-ink">{sc.contextZh}</p>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span>饥饿度 Hunger (饿)</span>
                    <span>{sc.hungerPct}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-surface">
                    <div className="h-full bg-brand transition-all duration-300" style={{ width: `${sc.hungerPct}%` }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span>口渴度 Thirst (渴)</span>
                    <span>{sc.thirstPct}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-surface">
                    <div className="h-full bg-info transition-all duration-300" style={{ width: `${sc.thirstPct}%` }} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-line bg-surface p-3.5">
                <div>
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="chip border-brand/30 bg-brand-soft text-brand">Best Mandarin Reaction</span>
                    <SpeakButtons text={sc.reactionZh} compact />
                  </div>
                  <p className="text-lg font-extrabold text-ink">{sc.reactionZh}</p>
                  {showPinyin ? <p className="mt-0.5 text-xs font-semibold text-brand">{sc.reactionPy}</p> : null}
                  <p className="mt-1 text-xs text-ink-2">{sc.reactionEn}</p>
                </div>
                <p className="mt-3 rounded-lg bg-warn-soft px-2.5 py-1.5 text-xs font-semibold text-warn">
                  💡 {sc.grammarTip}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3 rounded-2xl border border-line bg-surface-2 p-4">
            <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wide text-ink-2">
              <span>
                Question {quizIdx + 1} of {QUIZ_ITEMS.length}
              </span>
              <button
                type="button"
                onClick={() => {
                  setQuizIdx(0);
                  setPickedOpt(null);
                  setScore(0);
                }}
                className="text-brand underline"
              >
                Reset Quiz
              </button>
            </div>

            <p className="text-base font-extrabold text-ink">{q.promptEn}</p>

            <div className="space-y-2">
              {q.options.map((opt, idx) => {
                const chosen = pickedOpt === idx;
                const revealed = pickedOpt !== null;
                let style = "border-line bg-surface text-ink hover:bg-surface-2";
                if (revealed && opt.isCorrect) style = "border-good bg-good-soft text-good";
                else if (chosen && !opt.isCorrect) style = "border-bad bg-bad-soft text-bad";

                return (
                  <button
                    key={opt.zh}
                    type="button"
                    onClick={() => handlePick(idx)}
                    className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition ${style}`}
                  >
                    <div>
                      <div className="text-base font-extrabold">{opt.zh}</div>
                      {showPinyin ? <div className="text-xs opacity-85">{opt.py}</div> : null}
                      {revealed && (chosen || opt.isCorrect) ? (
                        <div className="mt-1 text-xs font-semibold">{opt.why}</div>
                      ) : null}
                    </div>
                    <span className="text-lg">{revealed ? (opt.isCorrect ? "✅" : chosen ? "❌" : "") : "👉"}</span>
                  </button>
                );
              })}
            </div>

            {pickedOpt !== null ? (
              <div className="flex items-center justify-between pt-1">
                <SpeakButtons text={q.options.find((o) => o.isCorrect)?.zh ?? ""} compact />
                <button type="button" onClick={nextQuiz} className="btn btn-primary btn-sm">
                  Next Scenario →
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "three-meals-plate-builder",
    title: "Three-Meals Plate & Classifier Builder (一日三餐营养盘)",
    blurb: "Assemble 早饭, 午饭, and 晚饭 on a divided SVG plate — pairing 碗, 盘, 杯, 瓶, 条 classifiers and scoring nutritional balance.",
    Component: ThreeMealsPlateBuilder,
  },
  {
    id: "appetite-mealtime-reaction-lab",
    title: "Appetite & Mealtime Reaction Lab (饿 · 渴 · 吃饱了)",
    blurb: "Explore hunger, thirst, fullness, and healthy diet advice (我饿了, 我很渴, 我吃饱了, 多吃蔬菜，少喝可乐) with audio and a quick quiz.",
    Component: AppetiteReactionLab,
  },
];
