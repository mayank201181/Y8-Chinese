"use client";

import { useState } from "react";
import { WidgetFrame, Segmented, Slider, Readout, type WidgetDef } from "./kit";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { usePinyinVisible } from "@/lib/pinyinDisplay";

// ---------------------------------------------------------------------------
// Widget 1: Mandarin Aspect Timeline (了 · 过 · 正在 · 打算/会)
// ---------------------------------------------------------------------------

interface TimelineStage {
  idx: number;
  id: "guo" | "le" | "zhengzai" | "future";
  shortZh: string;
  markerFormula: string;
  enLabel: string;
}

const STAGES: TimelineStage[] = [
  { idx: 0, id: "guo", shortZh: "以前…过", markerFormula: "Verb + 过 (guo)", enLabel: "Life Experience (ever)" },
  { idx: 1, id: "le", shortZh: "昨天…了", markerFormula: "Verb + 了 (le)", enLabel: "Completed Past" },
  { idx: 2, id: "zhengzai", shortZh: "正在…呢", markerFormula: "正在 + Verb (+ 呢)", enLabel: "Ongoing Right Now" },
  { idx: 3, id: "future", shortZh: "明天打算/会", markerFormula: "打算 / 会 + Verb", enLabel: "Future Plan" },
];

interface AspectVerbPack {
  id: string;
  stemZh: string;
  stemPy: string;
  enForms: string; // e.g. "go / went / gone / going"
  stages: Record<
    TimelineStage["id"],
    {
      affZh: string;
      affPy: string;
      affEn: string;
      negZh: string;
      negPy: string;
      negEn: string;
      ruleNote: string;
    }
  >;
}

const VERB_PACKS: AspectVerbPack[] = [
  {
    id: "qu",
    stemZh: "去",
    stemPy: "qù",
    enForms: "go · went · have gone · going · will go",
    stages: {
      guo: {
        affZh: "我以前去过北京。",
        affPy: "Wǒ yǐqián qù guo Běijīng.",
        affEn: "I have been to Beijing before (life experience).",
        negZh: "我以前没去过北京。",
        negPy: "Wǒ yǐqián méi qù guo Běijīng.",
        negEn: "I have never been to Beijing before.",
        ruleNote: "过 marks ever having experienced something — KEEP 过 when negating with 没 (没去过)!",
      },
      le: {
        affZh: "我昨天去了圣淘沙。",
        affPy: "Wǒ zuótiān qù le Shèngtáoshā.",
        affEn: "I went to Sentosa yesterday (completed event).",
        negZh: "我昨天没去圣淘沙。",
        negPy: "Wǒ zuótiān méi qù Shèngtáoshā.",
        negEn: "I did not go to Sentosa yesterday.",
        ruleNote: "了 marks a completed past action — DROP 了 when negating with 没 (NEVER *没去了*)!",
      },
      zhengzai: {
        affZh: "我现在正在去图书馆呢。",
        affPy: "Wǒ xiànzài zhèngzài qù túshūguǎn ne.",
        affEn: "I am going to the library right now.",
        negZh: "我现在没在去图书馆。",
        negPy: "Wǒ xiànzài méi zài qù túshūguǎn.",
        negEn: "I am not on my way to the library right now.",
        ruleNote: "正在…呢 wraps around the unchanged verb 去 to show action in progress right now.",
      },
      future: {
        affZh: "我明天打算去乌节路。",
        affPy: "Wǒ míngtiān dǎsuàn qù Wūjié Lù.",
        affEn: "I plan to go to Orchard Road tomorrow.",
        negZh: "我明天不打算去乌节路。",
        negPy: "Wǒ míngtiān bù dǎsuàn qù Wūjié Lù.",
        negEn: "I don't plan to go to Orchard Road tomorrow.",
        ruleNote: "Future intentions (打算 / 会 / 要) negate with 不, never 没!",
      },
    },
  },
  {
    id: "chi",
    stemZh: "吃",
    stemPy: "chī",
    enForms: "eat · ate · have eaten · eating · will eat",
    stages: {
      guo: {
        affZh: "我以前吃过北京烤鸭。",
        affPy: "Wǒ yǐqián chī guo Běijīng kǎoyā.",
        affEn: "I have eaten Beijing roast duck before.",
        negZh: "我以前没吃过北京烤鸭。",
        negPy: "Wǒ yǐqián méi chī guo Běijīng kǎoyā.",
        negEn: "I have never eaten Beijing roast duck before.",
        ruleNote: "吃过 = have tasted/eaten at least once in your life. Negate as 没吃过.",
      },
      le: {
        affZh: "我早饭吃了两个包子。",
        affPy: "Wǒ zǎofàn chī le liǎng ge bāozi.",
        affEn: "I ate two steamed buns for breakfast.",
        negZh: "我早饭没吃包子。",
        negPy: "Wǒ zǎofàn méi chī bāozi.",
        negEn: "I didn't eat steamed buns for breakfast.",
        ruleNote: "Notice how 了 vanishes completely in 没吃包子 (because the eating never happened)!",
      },
      zhengzai: {
        affZh: "弟弟正在吃晚饭呢。",
        affPy: "Dìdi zhèngzài chī wǎnfàn ne.",
        affEn: "Younger brother is eating dinner right now.",
        negZh: "弟弟没在吃晚饭。",
        negPy: "Dìdi méi zài chī wǎnfàn.",
        negEn: "Younger brother isn't eating dinner right now.",
        ruleNote: "正在 + 吃 + Object + 呢 = 'is eating right now'.",
      },
      future: {
        affZh: "周末我们会去吃火锅。",
        affPy: "Zhōumò wǒmen huì qù chī huǒguō.",
        affEn: "This weekend we will go eat hotpot.",
        negZh: "周末我们不会去吃火锅。",
        negPy: "Zhōumò wǒmen bú huì qù chī huǒguō.",
        negEn: "This weekend we won't go eat hotpot.",
        ruleNote: "会 expresses future likelihood/plan and negates with 不会.",
      },
    },
  },
  {
    id: "kan",
    stemZh: "看",
    stemPy: "kàn",
    enForms: "watch · watched · have watched · watching · will watch",
    stages: {
      guo: {
        affZh: "我看过那部中国电影。",
        affPy: "Wǒ kàn guo nà bù Zhōngguó diànyǐng.",
        affEn: "I have seen that Chinese movie before.",
        negZh: "我没看过那部中国电影。",
        negPy: "Wǒ méi kàn guo nà bù Zhōngguó diànyǐng.",
        negEn: "I haven't seen that Chinese movie before.",
        ruleNote: "看过 tests life experience; 没看过 keeps 过!",
      },
      le: {
        affZh: "我上个周末看了一场球赛。",
        affPy: "Wǒ shàng ge zhōumò kàn le yì chǎng qiúsài.",
        affEn: "I watched a ball match last weekend.",
        negZh: "我上个周末没看球赛。",
        negPy: "Wǒ shàng ge zhōumò méi kàn qiúsài.",
        negEn: "I didn't watch a ball match last weekend.",
        ruleNote: "Completed specific event last weekend → 看了 (affirmative) vs 没看 (negative, no 了!).",
      },
      zhengzai: {
        affZh: "爸爸正在看天气预报呢。",
        affPy: "Bàba zhèngzài kàn tiānqì yùbào ne.",
        affEn: "Dad is watching the weather forecast right now.",
        negZh: "爸爸没在看天气预报。",
        negPy: "Bàba méi zài kàn tiānqì yùbào.",
        negEn: "Dad isn't watching the weather forecast right now.",
        ruleNote: "Look at 看 — identical character across past, present, and future!",
      },
      future: {
        affZh: "星期六我打算去看电影。",
        affPy: "Xīngqīliù wǒ dǎsuàn qù kàn diànyǐng.",
        affEn: "On Saturday I plan to go watch a film.",
        negZh: "星期六我不打算去看电影。",
        negPy: "Xīngqīliù wǒ bù dǎsuàn qù kàn diànyǐng.",
        negEn: "On Saturday I don't plan to go watch a film.",
        ruleNote: "Future plans use 打算 / 准备 / 要 before the verb.",
      },
    },
  },
];

function MandarinAspectTimeline() {
  const showPinyin = usePinyinVisible();
  const [verbId, setVerbId] = useState<string>("qu");
  const [stageIdx, setStageIdx] = useState<number>(1); // Completed Past default
  const [polarity, setPolarity] = useState<"aff" | "neg">("aff");

  const pack = VERB_PACKS.find((v) => v.id === verbId) ?? VERB_PACKS[0];
  const stage = STAGES[stageIdx];
  const data = pack.stages[stage.id];

  const activeZh = polarity === "aff" ? data.affZh : data.negZh;
  const activePy = polarity === "aff" ? data.affPy : data.negPy;
  const activeEn = polarity === "aff" ? data.affEn : data.negEn;

  const nodeX = (idx: number) => 62 + idx * 112;

  return (
    <WidgetFrame
      title="中文时态时间轴 · Mandarin Aspect Timeline (`过 · 了 · 正在 · 打算`)"
      tryThis={[
        "Slide or click across all 4 timeline stations (**以前…过 → 昨天…了 → 正在…呢 → 明天打算…**) while watching the locked verb stem (**去 / 吃 / 看**).",
        "Flip **肯定句 (Affirmative)** to **否定句 (Negative)** on **昨天…了** vs **以前…过** — see why **了 disappears** (`没去`) while **过 stays** (`没去过`)!",
      ]}
      caption={
        <span>
          <strong>Zero conjugation superpower:</strong> English mutates <em>{pack.enForms}</em>, whereas Mandarin keeps{" "}
          <strong>{pack.stemZh} ({pack.stemPy})</strong> 100% unchanged and snaps time words + aspect particles around it!
        </span>
      }
    >
      <div className="space-y-4">
        {/* Top controls: Verb stem + Affirmative/Negative */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {VERB_PACKS.map((v) => {
              const active = v.id === pack.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    setVerbId(v.id);
                    speakChinese(v.stemZh);
                  }}
                  className={`rounded-xl border px-3 py-1.5 text-sm font-extrabold transition ${
                    active
                      ? "border-brand bg-brand text-white shadow-sm"
                      : "border-line bg-surface text-ink hover:bg-surface-2"
                  }`}
                >
                  Verb: {v.stemZh} ({v.stemPy})
                </button>
              );
            })}
          </div>

          <Segmented
            label="Polarity"
            value={polarity}
            onChange={setPolarity}
            options={[
              { value: "aff", label: "✓ 肯定句 Affirmative" },
              { value: "neg", label: "✗ 否定句 Negative" },
            ]}
          />
        </div>

        {/* SVG Interactive Timeline */}
        <div className="rounded-2xl border border-line bg-surface-2 p-4">
          <div className="diagram-svg">
            <svg viewBox="0 0 460 110" role="img" aria-label="Mandarin four-station aspect timeline">
              {/* Main timeline arrow */}
              <line x1={28} y1={52} x2={432} y2={52} stroke="#94a3b8" strokeWidth={4} strokeLinecap="round" />
              <polygon points="438,52 426,45 426,59" fill="#94a3b8" />

              {STAGES.map((st) => {
                const x = nodeX(st.idx);
                const selected = st.idx === stageIdx;
                return (
                  <g
                    key={st.id}
                    onClick={() => setStageIdx(st.idx)}
                    style={{ cursor: "pointer" }}
                    role="button"
                    aria-label={st.enLabel}
                  >
                    <circle
                      cx={x}
                      cy={52}
                      r={selected ? 18 : 13}
                      fill={selected ? "#c81e1e" : "#ffffff"}
                      stroke={selected ? "#991b1b" : "#64748b"}
                      strokeWidth={3}
                    />
                    <text
                      x={x}
                      y={56}
                      fontSize={10}
                      fontWeight="800"
                      textAnchor="middle"
                      fill={selected ? "#ffffff" : "#1e293b"}
                    >
                      {st.idx + 1}
                    </text>
                    <text
                      x={x}
                      y={24}
                      fontSize={11}
                      fontWeight="800"
                      textAnchor="middle"
                      fill={selected ? "#c81e1e" : "#334155"}
                    >
                      {st.shortZh}
                    </text>
                    <text x={x} y={88} fontSize={9.5} fontWeight="700" textAnchor="middle" fill="#475569">
                      {st.enLabel}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-3">
            <Slider
              label="Scrub across Mandarin Time & Aspect"
              value={stageIdx}
              min={0}
              max={3}
              step={1}
              onChange={setStageIdx}
              format={(v) => `${STAGES[v].shortZh} (${STAGES[v].enLabel})`}
            />
          </div>
        </div>

        {/* Unchanging Verb Stem vs Transformed Sentence */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface p-4 text-center">
            <span className="text-[11px] font-extrabold uppercase tracking-wide text-ink-2">
              Locked Verb Stem (零变形)
            </span>
            <div className="my-1.5 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-brand bg-brand-soft text-3xl font-extrabold text-brand">
              {pack.stemZh}
            </div>
            <span className="text-xs font-bold text-ink">{pack.stemPy} — never conjugates!</span>
          </div>

          <div className="rounded-2xl border border-brand/30 bg-brand-soft/40 p-4 sm:col-span-2">
            <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
              <span className="chip border-brand/40 bg-surface text-brand">{stage.markerFormula}</span>
              <SpeakButtons text={activeZh} compact />
            </div>
            <p className="text-xl font-extrabold text-ink">{activeZh}</p>
            {showPinyin ? <p className="mt-1 text-xs font-semibold text-brand">{activePy}</p> : null}
            <p className="mt-1 text-xs text-ink-2">{activeEn}</p>
            <p className="mt-2.5 rounded-xl bg-surface px-3 py-2 text-xs font-bold text-ink">
              🔑 {data.ruleNote}
            </p>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: 不 vs 没 Negation Gatekeeper
// ---------------------------------------------------------------------------

interface NegationCard {
  id: string;
  blankZh: string;
  fullZh: string;
  fullPy: string;
  en: string;
  answer: "bu" | "mei";
  gate: 1 | 2 | 3;
  trapWarning?: string;
  explanation: string;
}

const NEGATION_CARDS: NegationCard[] = [
  {
    id: "you-pet",
    blankZh: "我家 ___ 有宠物狗。",
    fullZh: "我家没有宠物狗。",
    fullPy: "Wǒ jiā méiyǒu chǒngwù gǒu.",
    en: "My family doesn't have a pet dog.",
    answer: "mei",
    gate: 1,
    explanation: "Gate 1 Law: The verb 有 (to have) is ALWAYS negated with 没 → 没有 (NEVER *不有*)!",
  },
  {
    id: "yesterday-movie",
    blankZh: "我昨天晚上 ___ 看电影。",
    fullZh: "我昨天晚上没看电影。",
    fullPy: "Wǒ zuótiān wǎnshang méi kàn diànyǐng.",
    en: "I didn't watch a film last night.",
    answer: "mei",
    gate: 2,
    trapWarning: "Remember: NO 了 at the end! (*没看了* is wrong!)",
    explanation: "Gate 2 Law: Did-not-happen past actions take 没(有) — and 了 must be dropped!",
  },
  {
    id: "habit-coffee",
    blankZh: "我爸爸平时从 ___ 喝咖啡，只喝绿茶。",
    fullZh: "我爸爸平时从不喝咖啡，只喝绿茶。",
    fullPy: "Wǒ bàba píngshí cóngbù hē kāfēi, zhǐ hē lǜchá.",
    en: "My dad usually never drinks coffee, only green tea.",
    answer: "bu",
    gate: 3,
    explanation: "Gate 3 Law: Present habits and routines (平时 / 常常 / 从不) always take 不!",
  },
  {
    id: "tomorrow-swim",
    blankZh: "明天会下大雨，所以我 ___ 去游泳。",
    fullZh: "明天会下大雨，所以我不去游泳。",
    fullPy: "Míngtiān huì xià dàyǔ, suǒyǐ wǒ bú qù yóuyǒng.",
    en: "It will rain heavily tomorrow, so I won't go swimming.",
    answer: "bu",
    gate: 3,
    explanation: "Gate 3 Law: Future intentions and refusals (明天 / 下个星期) always take 不!",
  },
  {
    id: "guo-durian",
    blankZh: "我弟弟以前 ___ 吃过榴莲。",
    fullZh: "我弟弟以前没吃过榴莲。",
    fullPy: "Wǒ dìdi yǐqián méi chī guo liúlián.",
    en: "My younger brother has never eaten durian before.",
    answer: "mei",
    gate: 2,
    explanation: "Gate 2 Law: Past life experience (Verb + 过) negates with 没(有) — and keeps 过!",
  },
  {
    id: "adj-spicy",
    blankZh: "这盘炒青菜一点儿也 ___ 辣。",
    fullZh: "这盘炒青菜一点儿也不辣。",
    fullPy: "Zhè pán chǎo qīngcài yìdiǎnr yě bú là.",
    en: "This plate of stir-fried greens isn't spicy at all.",
    answer: "bu",
    gate: 3,
    explanation: "Gate 3 Law: Adjectives (辣, 冷, 贵, 好吃) and 是 / 会 / 想 take 不!",
  },
  {
    id: "morning-breakfast",
    blankZh: "我今天早上起晚了，所以 ___ 吃早饭。",
    fullZh: "我今天早上起晚了，所以没吃早饭。",
    fullPy: "Wǒ jīntiān zǎoshang qǐ wǎn le, suǒyǐ méi chī zǎofàn.",
    en: "I woke up late this morning, so I didn't eat breakfast.",
    answer: "mei",
    gate: 2,
    trapWarning: "Notice: 没吃早饭 (no 了 on 吃)!",
    explanation: "Gate 2 Law: Specific past event this morning that did not happen → 没吃早饭!",
  },
  {
    id: "modal-hui",
    blankZh: "妹妹还小，她还 ___ 会骑自行车。",
    fullZh: "妹妹还小，她还不会骑自行车。",
    fullPy: "Mèimei hái xiǎo, tā hái bú huì qí zìxíngchē.",
    en: "Little sister is still young; she cannot ride a bike yet.",
    answer: "bu",
    gate: 3,
    explanation: "Gate 3 Law: Modal verbs like 会 (can), 想 (want), 应该 (should), and 是 ALWAYS take 不!",
  },
];

function BuVsMeiGatekeeper() {
  const showPinyin = usePinyinVisible();
  const [cardIdx, setCardIdx] = useState<number>(0);
  const [chosen, setChosen] = useState<"bu" | "mei" | null>(null);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);

  const card = NEGATION_CARDS[cardIdx];
  const answered = chosen !== null;
  const isRight = chosen === card.answer;

  const choose = (ans: "bu" | "mei") => {
    if (chosen !== null) return;
    setChosen(ans);
    if (ans === card.answer) {
      setScore((s) => s + 1);
      setStreak((st) => st + 1);
      speakChinese(card.fullZh);
    } else {
      setStreak(0);
    }
  };

  const nextCard = () => {
    setChosen(null);
    setCardIdx((i) => (i + 1) % NEGATION_CARDS.length);
  };

  const activeGate = answered ? card.gate : 0;

  return (
    <WidgetFrame
      title="不 vs 没 否定守门员 · Negation Gatekeeper & Sorter"
      tryThis={[
        "Study the 3-gate SVG flowchart: **Gate 1 (有 → 没有)**, **Gate 2 (Past / 过 → 没, drop 了!)**, **Gate 3 (Habits / Future / Adj / 是 / 会 → 不)**.",
        "Play through all 8 rapid-fire cards below — watch the matching gate light up and listen to the complete sentence!",
      ]}
      caption={
        <span>
          <strong>Two deadliest Year 8 traps:</strong> (1) Never say <em>*不有</em> — always <strong>没有</strong>! (2) Never say{" "}
          <em>*没去了</em> — <strong>没</strong> and completed-action <strong>了</strong> cannot share the same verb!
        </span>
      }
    >
      <div className="space-y-4">
        {/* SVG 3-Gate Flowchart */}
        <div className="diagram-svg">
          <svg viewBox="0 0 460 128" role="img" aria-label="Decision tree for Bu versus Mei in Mandarin">
            {/* Gate 1 */}
            <rect
              x={10}
              y={16}
              width={136}
              height={96}
              rx={12}
              fill={activeGate === 1 ? "#dcfce7" : "#f8fafc"}
              stroke={activeGate === 1 ? "#15803d" : "#cbd5e1"}
              strokeWidth={activeGate === 1 ? 3 : 1.8}
            />
            <text x={78} y={38} fontSize={11} fontWeight="800" textAnchor="middle" fill="#1e293b">
              GATE 1 · Verb = 有?
            </text>
            <text x={78} y={64} fontSize={18} fontWeight="800" textAnchor="middle" fill="#15803d">
              没有 (méiyǒu)
            </text>
            <text x={78} y={84} fontSize={9.5} fontWeight="700" textAnchor="middle" fill="#475569">
              ALWAYS 没有!
            </text>
            <text x={78} y={99} fontSize={9} fontWeight="700" textAnchor="middle" fill="#c2410c">
              (Never *不有!)
            </text>

            {/* Gate 2 */}
            <rect
              x={162}
              y={16}
              width={136}
              height={96}
              rx={12}
              fill={activeGate === 2 ? "#dcfce7" : "#f8fafc"}
              stroke={activeGate === 2 ? "#15803d" : "#cbd5e1"}
              strokeWidth={activeGate === 2 ? 3 : 1.8}
            />
            <text x={230} y={38} fontSize={11} fontWeight="800" textAnchor="middle" fill="#1e293b">
              GATE 2 · Past / 过?
            </text>
            <text x={230} y={64} fontSize={18} fontWeight="800" textAnchor="middle" fill="#0369a1">
              没 / 没有
            </text>
            <text x={230} y={84} fontSize={9.5} fontWeight="700" textAnchor="middle" fill="#475569">
              昨天没去 · 没吃过
            </text>
            <text x={230} y={99} fontSize={9} fontWeight="700" textAnchor="middle" fill="#c2410c">
              (Kick 了 out! No *没去了)
            </text>

            {/* Gate 3 */}
            <rect
              x={314}
              y={16}
              width={136}
              height={96}
              rx={12}
              fill={activeGate === 3 ? "#fee2e2" : "#f8fafc"}
              stroke={activeGate === 3 ? "#c81e1e" : "#cbd5e1"}
              strokeWidth={activeGate === 3 ? 3 : 1.8}
            />
            <text x={382} y={38} fontSize={11} fontWeight="800" textAnchor="middle" fill="#1e293b">
              GATE 3 · Everything Else
            </text>
            <text x={382} y={64} fontSize={18} fontWeight="800" textAnchor="middle" fill="#c81e1e">
              不 (bù / bú)
            </text>
            <text x={382} y={84} fontSize={9.5} fontWeight="700" textAnchor="middle" fill="#475569">
              Habit · Future · Adj
            </text>
            <text x={382} y={99} fontSize={9} fontWeight="700" textAnchor="middle" fill="#475569">
              是 · 会 · 想 · 应该
            </text>
          </svg>
        </div>

        {/* Rapid-Fire Sorter Card */}
        <div className="rounded-2xl border border-line bg-surface-2 p-4">
          <div className="mb-2 flex items-center justify-between text-xs font-extrabold uppercase tracking-wide text-ink-2">
            <span>
              Card {cardIdx + 1} of {NEGATION_CARDS.length}
            </span>
            <span>Meaning: &ldquo;{card.en}&rdquo;</span>
          </div>

          <div className="my-3 rounded-2xl border border-line bg-surface p-4 text-center">
            <p className="text-xl font-extrabold text-ink">{ answered ? card.fullZh : card.blankZh }</p>
            {answered && showPinyin ? (
              <p className="mt-1 text-xs font-semibold text-brand">{card.fullPy}</p>
            ) : null}
          </div>

          {/* Two Big Gatekeeper Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => choose("bu")}
              disabled={answered}
              className={`rounded-xl border-2 py-3 text-center font-extrabold transition ${
                answered && card.answer === "bu"
                  ? "border-good bg-good-soft text-good"
                  : chosen === "bu" && !isRight
                    ? "border-bad bg-bad-soft text-bad"
                    : "border-brand/40 bg-surface text-brand hover:bg-brand-soft"
              }`}
            >
              <div className="text-xl">不 (bù)</div>
              <div className="text-[11px] font-semibold opacity-80">Habit · Future · Adj · 是/会</div>
            </button>

            <button
              type="button"
              onClick={() => choose("mei")}
              disabled={answered}
              className={`rounded-xl border-2 py-3 text-center font-extrabold transition ${
                answered && card.answer === "mei"
                  ? "border-good bg-good-soft text-good"
                  : chosen === "mei" && !isRight
                    ? "border-bad bg-bad-soft text-bad"
                    : "border-info/40 bg-surface text-info hover:bg-info-soft"
              }`}
            >
              <div className="text-xl">没 / 没有 (méi)</div>
              <div className="text-[11px] font-semibold opacity-80">Past Action · 过 · Verb 有</div>
            </button>
          </div>

          {/* Instant Explanation + Audio */}
          {answered ? (
            <div
              className={`mt-3 rounded-xl border p-3 ${
                isRight ? "border-good/40 bg-good-soft/60" : "border-bad/40 bg-bad-soft/60"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`text-sm font-extrabold ${isRight ? "text-good" : "text-bad"}`}>
                  {isRight ? "✅ 守门成功！Gatekeeper Correct!" : "❌ 小心陷阱！Check the Gate Rule:"}
                </span>
                <div className="flex items-center gap-2">
                  <SpeakButtons text={card.fullZh} compact />
                  <button type="button" onClick={nextCard} className="btn btn-primary btn-sm">
                    Next Card →
                  </button>
                </div>
              </div>
              <p className="mt-1 text-xs font-bold text-ink">{card.explanation}</p>
              {card.trapWarning ? (
                <p className="mt-1 text-xs font-extrabold text-brand">⚠️ {card.trapWarning}</p>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Score" value={`${score}`} tone="good" />
          <Readout label="Streak" value={`${streak} 🔥`} tone="brand" />
          <Readout label="Active Gate" value={activeGate ? `Gate ${activeGate}` : "Pick 不 or 没"} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "mandarin-aspect-timeline",
    title: "Mandarin Aspect Timeline (了 · 过 · 正在 · 打算/会)",
    blurb: "Scrub the same verb stem across 过 (experience), 了 (completed past), 正在…呢 (ongoing), and 打算/会 (future) — with zero verb conjugation.",
    Component: MandarinAspectTimeline,
  },
  {
    id: "bu-vs-mei-negation-gatekeeper",
    title: "不 vs 没 Negation Gatekeeper",
    blurb: "Master why 有 and past actions (dropping 了!) take 没/没有 while habits, adjectives, modals, and future plans take 不.",
    Component: BuVsMeiGatekeeper,
  },
];
