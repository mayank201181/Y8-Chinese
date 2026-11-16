"use client";

import { useState } from "react";
import { WidgetFrame, Segmented, Readout, type WidgetDef } from "./kit";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { usePinyinVisible } from "@/lib/pinyinDisplay";

// ---------------------------------------------------------------------------
// Widget 1: STPV Sentence Tile Scrambler & Architect
// ---------------------------------------------------------------------------

type SlotKind = "subj" | "time" | "with" | "place" | "verb";

interface TileDef {
  kind: SlotKind;
  zh: string;
  py: string;
  en: string;
}

const SLOT_META: Record<
  SlotKind,
  {
    code: string;
    zhTag: string;
    enTag: string;
    chipClass: string;
    tileClass: string;
  }
> = {
  subj: {
    code: "S",
    zhTag: "主语 [红]",
    enTag: "Subject",
    chipClass: "border-brand bg-brand-soft text-brand",
    tileClass: "border-brand bg-brand-soft/80 text-brand",
  },
  time: {
    code: "T",
    zhTag: "时间 [琥珀]",
    enTag: "Time",
    chipClass: "border-accent bg-accent-soft text-brand-2",
    tileClass: "border-accent bg-accent-soft/85 text-brand-2",
  },
  with: {
    code: "W",
    zhTag: "跟谁 [紫]",
    enTag: "With",
    chipClass: "border-s-geometry bg-surface-2 text-s-geometry",
    tileClass: "border-s-geometry bg-surface-2 text-s-geometry",
  },
  place: {
    code: "P",
    zhTag: "地点 [青]",
    enTag: "Place",
    chipClass: "border-s-ratio bg-info-soft text-s-ratio",
    tileClass: "border-s-ratio bg-info-soft/85 text-s-ratio",
  },
  verb: {
    code: "V",
    zhTag: "动作 [绿]",
    enTag: "Verb-Object",
    chipClass: "border-good bg-good-soft text-good",
    tileClass: "border-good bg-good-soft/85 text-good",
  },
};

const CANONICAL_ORDER: SlotKind[] = ["subj", "time", "with", "place", "verb"];

interface ScramblePuzzle {
  id: string;
  englishPrompt: string;
  tiles: TileDef[]; // stored in canonical order: S, T, W, P, V
  scrambledIndices: number[]; // deterministic English-like trap scramble!
}

const PUZZLES: ScramblePuzzle[] = [
  {
    id: "basketball",
    englishPrompt: "I play basketball at school with my friends on Saturday afternoon.",
    tiles: [
      { kind: "subj", zh: "我", py: "Wǒ", en: "I" },
      { kind: "time", zh: "星期六下午", py: "Xīngqīliù xiàwǔ", en: "on Saturday afternoon" },
      { kind: "with", zh: "跟朋友一起", py: "gēn péngyou yìqǐ", en: "with friends" },
      { kind: "place", zh: "在学校", py: "zài xuéxiào", en: "at school" },
      { kind: "verb", zh: "打篮球", py: "dǎ lánqiú", en: "play basketball" },
    ],
    scrambledIndices: [0, 4, 3, 2, 1], // English order!
  },
  {
    id: "library",
    englishPrompt: "Older sister reads Chinese books in the library with her classmates after school.",
    tiles: [
      { kind: "subj", zh: "姐姐", py: "Jiějie", en: "Older sister" },
      { kind: "time", zh: "放学以后", py: "fàngxué yǐhòu", en: "after school" },
      { kind: "with", zh: "跟同学一起", py: "gēn tóngxué yìqǐ", en: "with classmates" },
      { kind: "place", zh: "在图书馆", py: "zài túshūguǎn", en: "in the library" },
      { kind: "verb", zh: "看中文书", py: "kàn Zhōngwén shū", en: "reads Chinese books" },
    ],
    scrambledIndices: [3, 0, 4, 1, 2],
  },
  {
    id: "hawker",
    englishPrompt: "We ate chicken rice at the hawker centre with Dad yesterday evening.",
    tiles: [
      { kind: "subj", zh: "我们", py: "Wǒmen", en: "We" },
      { kind: "time", zh: "昨天晚上", py: "zuótiān wǎnshang", en: "yesterday evening" },
      { kind: "with", zh: "跟爸爸一起", py: "gēn bàba yìqǐ", en: "with Dad" },
      { kind: "place", zh: "在小贩中心", py: "zài xiǎofàn zhōngxīn", en: "at the hawker centre" },
      { kind: "verb", zh: "吃了鸡饭", py: "chī le jīfàn", en: "ate chicken rice" },
    ],
    scrambledIndices: [0, 4, 2, 3, 1],
  },
  {
    id: "orchard",
    englishPrompt: "Younger brother goes shopping on Orchard Road with Mum every Sunday.",
    tiles: [
      { kind: "subj", zh: "弟弟", py: "Dìdi", en: "Younger brother" },
      { kind: "time", zh: "每个星期天", py: "měi ge Xīngqītiān", en: "every Sunday" },
      { kind: "with", zh: "跟妈妈一起", py: "gēn māma yìqǐ", en: "with Mum" },
      { kind: "place", zh: "去乌节路", py: "qù Wūjié Lù", en: "to Orchard Road" },
      { kind: "verb", zh: "买东西", py: "mǎi dōngxi", en: "goes shopping" },
    ],
    scrambledIndices: [1, 0, 4, 3, 2],
  },
];

const ARCH_OPTIONS: Record<SlotKind, { zh: string; py: string; en: string }[]> = {
  subj: [
    { zh: "我", py: "Wǒ", en: "I" },
    { zh: "哥哥", py: "Gēge", en: "Older brother" },
    { zh: "我们", py: "Wǒmen", en: "We" },
  ],
  time: [
    { zh: "每天早上", py: "měitiān zǎoshang", en: "every morning" },
    { zh: "星期五放学后", py: "Xīngqīwǔ fàngxué hòu", en: "Friday after school" },
    { zh: "这个周末", py: "zhège zhōumò", en: "this weekend" },
  ],
  with: [
    { zh: "跟好朋友一起", py: "gēn hǎo péngyou yìqǐ", en: "with good friends" },
    { zh: "跟家人一起", py: "gēn jiārén yìqǐ", en: "with my family" },
    { zh: "跟老师一起", py: "gēn lǎoshī yìqǐ", en: "with the teacher" },
  ],
  place: [
    { zh: "在公园", py: "zài gōngyuán", en: "in the park" },
    { zh: "在体育馆", py: "zài tǐyùguǎn", en: "in the sports hall" },
    { zh: "在家里", py: "zài jiālǐ", en: "at home" },
  ],
  verb: [
    { zh: "打羽毛球", py: "dǎ yǔmáoqiú", en: "play badminton" },
    { zh: "练习说中文", py: "liànxí shuō Zhōngwén", en: "practise speaking Chinese" },
    { zh: "听音乐", py: "tīng yīnyuè", en: "listen to music" },
  ],
};

function StpvScramblerArchitect() {
  const showPinyin = usePinyinVisible();
  const [mode, setMode] = useState<"scrambler" | "architect">("scrambler");
  const [puzzleIdx, setPuzzleIdx] = useState<number>(0);
  const [placed, setPlaced] = useState<SlotKind[]>([]);
  const [solvedCount, setSolvedCount] = useState<number>(0);

  // Architect selections
  const [archSel, setArchSel] = useState<Record<SlotKind, number>>({
    subj: 0,
    time: 1,
    with: 0,
    place: 1,
    verb: 0,
  });

  const puzzle = PUZZLES[puzzleIdx];
  const bankTiles = puzzle.scrambledIndices
    .map((i) => puzzle.tiles[i])
    .filter((t) => !placed.includes(t.kind));

  const placedTiles = placed.map((k) => puzzle.tiles.find((t) => t.kind === k)!);
  const isComplete = placed.length === CANONICAL_ORDER.length;
  // Also accept Time + Subject + With + Place + Verb! Both S-T-W-P-V and T-S-W-P-V are valid Mandarin!
  const isExactStpv =
    isComplete && placed.every((k, idx) => k === CANONICAL_ORDER[idx]);
  const isTimeFirstValid =
    isComplete &&
    placed[0] === "time" &&
    placed[1] === "subj" &&
    placed[2] === "with" &&
    placed[3] === "place" &&
    placed[4] === "verb";
  const isCorrect = isExactStpv || isTimeFirstValid;

  const addTile = (tile: TileDef) => {
    const next = [...placed, tile.kind];
    setPlaced(next);
    speakChinese(tile.zh);
    if (next.length === 5) {
      const ok1 = next.every((k, i) => k === CANONICAL_ORDER[i]);
      const ok2 =
        next[0] === "time" &&
        next[1] === "subj" &&
        next[2] === "with" &&
        next[3] === "place" &&
        next[4] === "verb";
      if (ok1 || ok2) {
        setSolvedCount((c) => c + 1);
        const fullZh = next.map((k) => puzzle.tiles.find((t) => t.kind === k)!.zh).join("") + "。";
        speakChinese(fullZh);
      }
    }
  };

  const removeTile = (kind: SlotKind) => {
    setPlaced((prev) => prev.filter((k) => k !== kind));
  };

  const diagnoseError = (): string => {
    if (!isComplete || isCorrect) return "";
    const verbPos = placed.indexOf("verb");
    if (verbPos < 4) {
      const afterVerb = placed.slice(verbPos + 1).map((k) => SLOT_META[k].enTag).join(" / ");
      return `English-order trap! You put ${afterVerb} AFTER the Verb. In Mandarin, Time, With, and Place MUST come BEFORE the Verb!`;
    }
    if (placed.indexOf("place") < placed.indexOf("time")) {
      return "Almost! Put Time [琥珀] BEFORE Place [青] (Time → With → Place → Verb).";
    }
    return "Check the golden rail: Subject [红] → Time [琥珀] → With [紫] → Place [青] → Verb-Object [绿]!";
  };

  const archSentenceZh = CANONICAL_ORDER.map((k) => ARCH_OPTIONS[k][archSel[k]].zh).join("") + "。";
  const archSentencePy = CANONICAL_ORDER.map((k) => ARCH_OPTIONS[k][archSel[k]].py).join(" ") + ".";
  const archEnglishOrder: SlotKind[] = ["subj", "verb", "place", "with", "time"];

  return (
    <WidgetFrame
      title="STPV 黄金语序拼图 · Sentence Tile Scrambler & Architect"
      tryThis={[
        "In **Scrambler Mode**, tap the colour-coded tiles to translate the English sentence — resist putting **Place [青]** or **Time [琥珀]** at the end!",
        "Notice the 5 colour slots: **Subject `[红]` + Time `[琥珀]` + With `[紫]` + Place `[青]` + Verb-Object `[绿]`**.",
        "Switch to **Architect Mode** to swap blocks freely and compare English order (`S-V-P-W-T`) vs Mandarin STPV!",
      ]}
      caption={
        <span>
          <strong>Golden STPV Rule:</strong> Mandarin sets the stage first — <strong>Who + When + With Whom + Where</strong> — and delivers the{" "}
          <strong>Action Verb last</strong>! (Putting Time before Subject, e.g. <strong>星期六我…</strong>, is also natural!)
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Widget mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: "scrambler", label: "🧩 语序闯关 Scrambler" },
              { value: "architect", label: "🏗️ 自由搭建 Architect" },
            ]}
          />
          <div className="flex flex-wrap gap-1">
            {CANONICAL_ORDER.map((k) => (
              <span key={k} className={`chip ${SLOT_META[k].chipClass}`}>
                {SLOT_META[k].zhTag}
              </span>
            ))}
          </div>
        </div>

        {mode === "scrambler" ? (
          <div className="space-y-4">
            {/* Puzzle header */}
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-surface-2 px-3.5 py-2.5">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
                  Puzzle {puzzleIdx + 1} of {PUZZLES.length} · Translate into Mandarin STPV:
                </span>
                <p className="text-sm font-extrabold text-ink">&ldquo;{puzzle.englishPrompt}&rdquo;</p>
              </div>
              <span className="chip border-good/40 bg-surface text-good">Solved: {solvedCount}</span>
            </div>

            {/* Target Rail */}
            <div className="rounded-2xl border-2 border-dashed border-line bg-surface p-3.5">
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-ink-2">
                <span>Your Mandarin Sentence Rail (tap a placed tile to remove it):</span>
                {placed.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => setPlaced([])}
                    className="font-extrabold text-brand underline"
                  >
                    Clear Rail
                  </button>
                ) : null}
              </div>

              <div className="flex min-h-14 flex-wrap items-center gap-2">
                {placedTiles.length === 0 ? (
                  <span className="text-xs text-ink-2">
                    Tap tiles below in <strong>[红] → [琥珀] → [紫] → [青] → [绿]</strong> order…
                  </span>
                ) : (
                  placedTiles.map((t) => (
                    <button
                      key={t.kind}
                      type="button"
                      onClick={() => removeTile(t.kind)}
                      className={`rounded-xl border-2 px-3 py-2 text-left transition ${SLOT_META[t.kind].tileClass}`}
                    >
                      <div className="text-[10px] font-extrabold uppercase">{SLOT_META[t.kind].zhTag}</div>
                      <div className="text-base font-extrabold">{t.zh}</div>
                      {showPinyin ? <div className="text-[11px] opacity-85">{t.py}</div> : null}
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Scrambled Bank */}
            <div>
              <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                Scrambled Tile Bank (点击词块拼句子)
              </div>
              <div className="flex flex-wrap gap-2">
                {bankTiles.map((t) => (
                  <button
                    key={t.kind}
                    type="button"
                    onClick={() => addTile(t)}
                    className={`rounded-xl border-2 px-3.5 py-2 text-left shadow-sm transition hover:-translate-y-0.5 ${SLOT_META[t.kind].tileClass}`}
                  >
                    <div className="text-[10px] font-extrabold uppercase">{SLOT_META[t.kind].zhTag}</div>
                    <div className="text-base font-extrabold">{t.zh}</div>
                    {showPinyin ? <div className="text-[11px] opacity-85">{t.py}</div> : null}
                    <div className="text-[10px] opacity-75">{t.en}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Instant Validation Banner */}
            {isComplete ? (
              <div
                className={`rounded-2xl border p-3.5 ${
                  isCorrect ? "border-good bg-good-soft text-good" : "border-bad bg-bad-soft text-bad"
                }`}
              >
                {isCorrect ? (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-extrabold">
                        🎉 太棒了！Perfect Mandarin STPV Word Order!
                      </div>
                      <div className="mt-0.5 text-base font-extrabold text-ink">
                        {placedTiles.map((t) => t.zh).join("")}。
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <SpeakButtons text={placedTiles.map((t) => t.zh).join("") + "。"} compact />
                      <button
                        type="button"
                        onClick={() => {
                          setPuzzleIdx((i) => (i + 1) % PUZZLES.length);
                          setPlaced([]);
                        }}
                        className="btn btn-good btn-sm"
                      >
                        Next Puzzle →
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-extrabold">⚠️ {diagnoseError()}</p>
                    <button
                      type="button"
                      onClick={() => setPlaced([])}
                      className="btn btn-secondary btn-sm"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ) : (
          /* Architect Mode */
          <div className="space-y-4">
            <div className="grid gap-2.5 sm:grid-cols-5">
              {CANONICAL_ORDER.map((k) => (
                <div key={k} className="space-y-1.5 rounded-xl border border-line bg-surface p-2.5">
                  <span className={`chip w-full justify-center ${SLOT_META[k].chipClass}`}>
                    {SLOT_META[k].zhTag}
                  </span>
                  <div className="flex flex-col gap-1">
                    {ARCH_OPTIONS[k].map((opt, idx) => (
                      <button
                        key={opt.zh}
                        type="button"
                        onClick={() => {
                          setArchSel((prev) => ({ ...prev, [k]: idx }));
                          speakChinese(opt.zh);
                        }}
                        className={`rounded-lg border px-2 py-1.5 text-left text-xs font-bold transition ${
                          archSel[k] === idx
                            ? SLOT_META[k].tileClass
                            : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                        }`}
                      >
                        <div>{opt.zh}</div>
                        <div className="text-[10px] font-normal opacity-80">{opt.en}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* English vs Mandarin Contrast */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-surface-2 p-3.5">
                <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                  🇬🇧 English Order (S → V → P → W → T)
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {archEnglishOrder.map((k) => (
                    <span key={k} className={`rounded-lg border px-2 py-1 text-xs font-bold ${SLOT_META[k].tileClass}`}>
                      {ARCH_OPTIONS[k][archSel[k]].en}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-brand/30 bg-brand-soft/40 p-3.5">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wide text-brand">
                    🇨🇳 Mandarin STPV Order (S → T → W → P → V)
                  </span>
                  <SpeakButtons text={archSentenceZh} compact />
                </div>
                <p className="text-lg font-extrabold text-ink">{archSentenceZh}</p>
                {showPinyin ? <p className="mt-0.5 text-xs font-semibold text-brand">{archSentencePy}</p> : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Paired Connector Bridge Builder
// ---------------------------------------------------------------------------

interface ConnectorPair {
  id: string;
  pillar1Zh: string;
  pillar1Py: string;
  pillar2Zh: string;
  pillar2Py: string;
  meaningEn: string;
  englishTrapNote: string;
  sameSubj: {
    subjZh: string;
    clause1Zh: string;
    clause2Zh: string;
    fullZh: string;
    fullPy: string;
    fullEn: string;
    subjRule: string;
  };
  diffSubj: {
    subj1Zh: string;
    clause1Zh: string;
    subj2Zh: string;
    clause2Zh: string;
    fullZh: string;
    fullPy: string;
    fullEn: string;
    subjRule: string;
  };
}

const CONNECTORS: ConnectorPair[] = [
  {
    id: "yinwei-suoyi",
    pillar1Zh: "因为",
    pillar1Py: "yīnwèi",
    pillar2Zh: "所以",
    pillar2Py: "suǒyǐ",
    meaningEn: "Because … therefore …",
    englishTrapNote: "English says 'Because it rained, we stayed home' (NEVER 'because… therefore…'). Mandarin NEEDS BOTH 因为 and 所以!",
    sameSubj: {
      subjZh: "我",
      clause1Zh: "今天生病发烧了",
      clause2Zh: "不能去学校上课",
      fullZh: "因为我今天生病发烧了，所以我不能去学校上课。",
      fullPy: "Yīnwèi wǒ jīntiān shēngbìng fāshāo le, suǒyǐ wǒ bù néng qù xuéxiào shàngkè.",
      fullEn: "Because I fell sick with a fever today, I cannot go to school for class.",
      subjRule: "With 因为…所以…, the subject (我) sits AFTER 因为 and 所以 (or can be omitted in the 2nd half).",
    },
    diffSubj: {
      subj1Zh: "外面",
      clause1Zh: "下大雨",
      subj2Zh: "我们",
      clause2Zh: "不打算去海边游泳",
      fullZh: "因为外面下大雨，所以我们不打算去海边游泳。",
      fullPy: "Yīnwèi wàimiàn xià dàyǔ, suǒyǐ wǒmen bù dǎsuàn qù hǎibiān yóuyǒng.",
      fullEn: "Because it is raining heavily outside, we don't plan to swim at the beach.",
      subjRule: "Different subjects (外面 vs 我们): each subject sits right after its own connector!",
    },
  },
  {
    id: "suiran-danshi",
    pillar1Zh: "虽然",
    pillar1Py: "suīrán",
    pillar2Zh: "但是",
    pillar2Py: "dànshì",
    meaningEn: "Although … however …",
    englishTrapNote: "English forbids 'Although… but…' together — yet Mandarin REQUIRES 虽然 paired with 但是 (or 可是)!",
    sameSubj: {
      subjZh: "中文",
      clause1Zh: "有一点儿难",
      clause2Zh: "非常有意思",
      fullZh: "虽然中文有一点儿难，但是非常有意思。",
      fullPy: "Suīrán Zhōngwén yǒu yìdiǎnr nán, dànshì fēicháng yǒuyìsi.",
      fullEn: "Although Chinese is a little difficult, it is very interesting.",
      subjRule: "Same subject (中文): place 中文 before or right after 虽然, and omit it after 但是!",
    },
    diffSubj: {
      subj1Zh: "苦瓜",
      clause1Zh: "有一点儿苦",
      subj2Zh: "爷爷",
      clause2Zh: "很喜欢吃",
      fullZh: "虽然苦瓜有一点儿苦，但是爷爷很喜欢吃。",
      fullPy: "Suīrán kǔguā yǒu yìdiǎnr kǔ, dànshì yéye hěn xǐhuan chī.",
      fullEn: "Although bitter gourd is a bit bitter, Grandpa really likes eating it.",
      subjRule: "Two different subjects (苦瓜 vs 爷爷): 苦瓜 follows 虽然, and 爷爷 follows 但是.",
    },
  },
  {
    id: "budan-erqie",
    pillar1Zh: "不但",
    pillar1Py: "búdàn",
    pillar2Zh: "而且",
    pillar2Py: "érqiě",
    meaningEn: "Not only … but also …",
    englishTrapNote: "Watch the Subject jump! Same subject = BEFORE 不但; Two different subjects = AFTER 不但 and 而且 (+ 也)!",
    sameSubj: {
      subjZh: "姐姐",
      clause1Zh: "会弹钢琴",
      clause2Zh: "拉小提琴拉得很好",
      fullZh: "姐姐不但会弹钢琴，而且拉小提琴拉得很好。",
      fullPy: "Jiějie búdàn huì tán gāngqín, érqiě lā xiǎotíqín lā de hěn hǎo.",
      fullEn: "Older sister not only can play the piano, but also plays the violin very well.",
      subjRule: "⭐ SAME subject (姐姐): 姐姐 MUST stand BEFORE 不但 (姐姐不但…，而且…)!",
    },
    diffSubj: {
      subj1Zh: "姐姐",
      clause1Zh: "喜欢吃饺子",
      subj2Zh: "弟弟",
      clause2Zh: "也喜欢吃饺子",
      fullZh: "不但姐姐喜欢吃饺子，而且弟弟也喜欢吃饺子。",
      fullPy: "Búdàn jiějie xǐhuan chī jiǎozi, érqiě dìdi yě xǐhuan chī jiǎozi.",
      fullEn: "Not only does older sister like eating dumplings, younger brother also likes eating dumplings.",
      subjRule: "⭐ DIFFERENT subjects (姐姐 vs 弟弟): 不但 comes FIRST, and 弟弟 takes 也 after 而且!",
    },
  },
  {
    id: "yibian-yibian",
    pillar1Zh: "一边",
    pillar1Py: "yìbiān",
    pillar2Zh: "一边",
    pillar2Py: "yìbiān",
    meaningEn: "While doing A, doing B simultaneously",
    englishTrapNote: "English only says 'while' once ('I listen to music while eating'). Mandarin repeats 一边 before BOTH verbs!",
    sameSubj: {
      subjZh: "哥哥",
      clause1Zh: "听音乐",
      clause2Zh: "跑步",
      fullZh: "哥哥一边听音乐，一边跑步。",
      fullPy: "Gēge yìbiān tīng yīnyuè, yìbiān pǎobù.",
      fullEn: "Older brother listens to music while running.",
      subjRule: "Simultaneous actions always share ONE actor doing two actions at the same time: Subject + 一边 V1，一边 V2!",
    },
    diffSubj: {
      subj1Zh: "我们",
      clause1Zh: "喝茶",
      subj2Zh: "",
      clause2Zh: "跟朋友聊天",
      fullZh: "我们一边喝茶，一边跟朋友聊天。",
      fullPy: "Wǒmen yìbiān hē chá, yìbiān gēn péngyou liáotiān.",
      fullEn: "We drink tea while chatting with friends.",
      subjRule: "Note: 一边…一边… always requires the SAME person/group doing two actions simultaneously!",
    },
  },
];

function PairedConnectorBridge() {
  const showPinyin = usePinyinVisible();
  const [connId, setConnId] = useState<string>("suiran-danshi");
  const [leftPillarOn, setLeftPillarOn] = useState<boolean>(true);
  const [rightPillarOn, setRightPillarOn] = useState<boolean>(true);
  const [subjMode, setSubjMode] = useState<"same" | "diff">("same");

  const conn = CONNECTORS.find((c) => c.id === connId) ?? CONNECTORS[1];
  const bridgeIntact = leftPillarOn && rightPillarOn;
  const activeExample = subjMode === "same" ? conn.sameSubj : conn.diffSubj;

  return (
    <WidgetFrame
      title="关联词双桥墩 · Paired Connector Bridge (`因为…所以` · `虽然…但是` · `不但…而且`)"
      tryThis={[
        "Click **虽然…但是…** and try turning OFF **Pillar 2 (但是)** — see why translating English *'Although…'* without **但是** collapses the Mandarin bridge!",
        "Select **不但…而且…** and flip between **Same Subject (同一个主语)** and **Different Subjects (不同主语)** to watch **姐姐** jump across **不但**!",
      ]}
      caption={
        <span>
          <strong>Two-pillar bridge law:</strong> Paired connectors in Mandarin act like twin suspension towers — keep{" "}
          <strong>both halves</strong> in the sentence so the two clauses lock together cleanly!
        </span>
      }
    >
      <div className="space-y-4">
        {/* Connector Picker */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {CONNECTORS.map((c) => {
            const active = c.id === conn.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setConnId(c.id);
                  setLeftPillarOn(true);
                  setRightPillarOn(true);
                }}
                className={`rounded-xl border p-2.5 text-left transition ${
                  active
                    ? "border-brand bg-brand-soft text-brand shadow-sm"
                    : "border-line bg-surface text-ink hover:bg-surface-2"
                }`}
              >
                <div className="text-sm font-extrabold">
                  {c.pillar1Zh}…{c.pillar2Zh}…
                </div>
                {showPinyin ? (
                  <div className="text-[11px] font-semibold opacity-80">
                    {c.pillar1Py} … {c.pillar2Py}
                  </div>
                ) : null}
                <div className="mt-0.5 text-[11px] text-ink-2">{c.meaningEn}</div>
              </button>
            );
          })}
        </div>

        {/* Interactive SVG Two-Pillar Bridge */}
        <div className="rounded-2xl border border-line bg-surface-2 p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setLeftPillarOn((v) => !v)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-extrabold transition ${
                  leftPillarOn ? "border-good bg-good text-white" : "border-bad bg-bad-soft text-bad"
                }`}
              >
                {leftPillarOn ? `✓ Pillar 1: ${conn.pillar1Zh} (ON)` : `✗ Pillar 1: ${conn.pillar1Zh} (MISSING)`}
              </button>
              <button
                type="button"
                onClick={() => setRightPillarOn((v) => !v)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-extrabold transition ${
                  rightPillarOn ? "border-good bg-good text-white" : "border-bad bg-bad-soft text-bad"
                }`}
              >
                {rightPillarOn ? `✓ Pillar 2: ${conn.pillar2Zh} (ON)` : `✗ Pillar 2: ${conn.pillar2Zh} (MISSING)`}
              </button>
            </div>

            <Segmented
              label="Subject mode"
              value={subjMode}
              onChange={setSubjMode}
              options={[
                { value: "same", label: "👤 同一个主语 Same Subject" },
                { value: "diff", label: "👥 不同主语 Two Subjects" },
              ]}
            />
          </div>

          <div className="diagram-svg">
            <svg viewBox="0 0 460 155" role="img" aria-label="Two-pillar Mandarin paired connector bridge">
              {/* River water */}
              <rect x={0} y={128} width={460} height={27} fill="#bae6fd" />

              {/* Left Tower (Pillar 1) */}
              <g opacity={leftPillarOn ? 1 : 0.22}>
                <rect x={95} y={32} width={36} height={102} rx={5} fill="#c81e1e" />
                <text x={113} y={56} fontSize={13} fontWeight="800" textAnchor="middle" fill="#ffffff">
                  {conn.pillar1Zh}
                </text>
              </g>

              {/* Right Tower (Pillar 2) */}
              <g opacity={rightPillarOn ? 1 : 0.22}>
                <rect x={285} y={32} width={36} height={102} rx={5} fill="#c81e1e" />
                <text x={303} y={56} fontSize={13} fontWeight="800" textAnchor="middle" fill="#ffffff">
                  {conn.pillar2Zh}
                </text>
              </g>

              {/* Suspension Cables */}
              {bridgeIntact ? (
                <path
                  d="M 20 88 Q 65 55 113 36 Q 208 92 303 36 Q 365 55 440 88"
                  fill="none"
                  stroke="#b45309"
                  strokeWidth={3}
                />
              ) : null}

              {/* Bridge Deck */}
              {bridgeIntact ? (
                <g>
                  <rect x={16} y={86} width={428} height={16} rx={4} fill="#15803d" />
                  <text x={208} y={98} fontSize={10.5} fontWeight="800" textAnchor="middle" fill="#ffffff">
                    ✓ STURDY PAIRED BRIDGE — Both connectors locked in!
                  </text>
                </g>
              ) : (
                <g>
                  <path
                    d="M 16 88 L 195 108 L 222 100 L 444 90"
                    fill="none"
                    stroke="#c2410c"
                    strokeWidth={8}
                    strokeDasharray="10 4"
                  />
                  <text x={230} y={76} fontSize={11.5} fontWeight="800" textAnchor="middle" fill="#c2410c">
                    ⚠️ Bridge Sagging! Keep BOTH {conn.pillar1Zh} and {conn.pillar2Zh}!
                  </text>
                </g>
              )}
            </svg>
          </div>

          <p className="mt-2 text-xs font-semibold text-ink-2">💡 {conn.englishTrapNote}</p>
        </div>

        {/* Live Sentence & Subject Position Spotlight */}
        <div
          className={`rounded-2xl border p-4 ${
            bridgeIntact ? "border-good/40 bg-good-soft/40" : "border-bad/40 bg-bad-soft/40"
          }`}
        >
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="chip border-brand/30 bg-surface text-brand">
              {subjMode === "same" ? "Same Subject Pattern" : "Two Subjects Pattern"}
            </span>
            <SpeakButtons text={activeExample.fullZh} compact />
          </div>

          {bridgeIntact ? (
            <>
              <p className="text-lg font-extrabold text-ink">{activeExample.fullZh}</p>
              {showPinyin ? <p className="mt-1 text-xs font-semibold text-brand">{activeExample.fullPy}</p> : null}
              <p className="mt-1 text-xs text-ink-2">{activeExample.fullEn}</p>
            </>
          ) : (
            <p className="text-sm font-extrabold text-bad">
              ❌ Incomplete connector pair! Re-enable{" "}
              {!leftPillarOn && !rightPillarOn
                ? `${conn.pillar1Zh} and ${conn.pillar2Zh}`
                : !leftPillarOn
                  ? conn.pillar1Zh
                  : conn.pillar2Zh}{" "}
              above to restore the natural Mandarin sentence.
            </p>
          )}

          <div className="mt-2.5 rounded-xl bg-surface px-3 py-2 text-xs font-bold text-ink">
            🧭 <strong>Subject Placement Rule:</strong> {activeExample.subjRule}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Readout label="Pillar 1 (前半句)" value={conn.pillar1Zh} tone={leftPillarOn ? "good" : "bad"} />
          <Readout label="Pillar 2 (后半句)" value={conn.pillar2Zh} tone={rightPillarOn ? "good" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "stpv-tile-scrambler-architect",
    title: "STPV Sentence Tile Scrambler & Architect",
    blurb: "Arrange colour-coded Subject [红] + Time [琥珀] + With [紫] + Place [青] + Verb [绿] tiles and contrast English vs Mandarin word order.",
    Component: StpvScramblerArchitect,
  },
  {
    id: "paired-connector-bridge-builder",
    title: "Paired Connector Bridge Builder (因为…所以 · 虽然…但是 · 不但…而且 · 一边…一边)",
    blurb: "Test a two-pillar SVG bridge showing why Mandarin requires both halves of paired connectors and where subjects sit.",
    Component: PairedConnectorBridge,
  },
];
