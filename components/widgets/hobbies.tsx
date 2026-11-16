"use client";
import { useState } from "react";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Widget 1: Sport & Music Action-Verb Matcher (打 · 踢 · 弹 · 拉 · 骑)
// ---------------------------------------------------------------------------

type ActionVerbKey = "da" | "ti" | "tan" | "la" | "qi";

interface VerbSpec {
  key: ActionVerbKey;
  zh: string;
  py: string;
  radical: string;
  radicalMeaning: string;
  motionTitle: string;
  whyRule: string;
  badgeColor: string;
}

const VERBS: VerbSpec[] = [
  {
    key: "da",
    zh: "打",
    py: "dǎ",
    radical: "扌 (手)",
    radicalMeaning: "hand radical",
    motionTitle: "Strike / bounce / swing with hands or racket",
    whyRule: "Every court or table ball sport played with your HANDS or a RACKET uses 打 — NEVER *玩篮球*!",
    badgeColor: "border-brand bg-brand-soft text-brand",
  },
  {
    key: "ti",
    zh: "踢",
    py: "tī",
    radical: "⻊ (足)",
    radicalMeaning: "foot radical",
    motionTitle: "Kick with the foot",
    whyRule: "Look at the left side of 踢: ⻊ means ‘foot’! Football is kicked with your feet, so it MUST be 踢足球.",
    badgeColor: "border-good bg-good-soft text-good",
  },
  {
    key: "tan",
    zh: "弹",
    py: "tán",
    radical: "弓",
    radicalMeaning: "bow / elastic string",
    motionTitle: "Press keys or pluck strings with fingers",
    whyRule: "Instruments whose notes sound by pressing keys or plucking taut strings take 弹 (弹钢琴, 弹吉他).",
    badgeColor: "border-info bg-info-soft text-info",
  },
  {
    key: "la",
    zh: "拉",
    py: "lā",
    radical: "扌 (手)",
    radicalMeaning: "hand radical",
    motionTitle: "Pull / draw a bow across strings",
    whyRule: "拉 literally means ‘pull’! Bowed instruments like the violin (小提琴) or erhu (二胡) pull a horsehair bow back and forth.",
    badgeColor: "border-accent bg-accent-soft text-ink",
  },
  {
    key: "qi",
    zh: "骑",
    py: "qí",
    radical: "马",
    radicalMeaning: "horse radical",
    motionTitle: "Straddle & ride on two wheels or horseback",
    whyRule: "Look at 马 (‘horse’) inside 骑! Anything you straddle to ride — a bike or a horse — uses 骑.",
    badgeColor: "border-line bg-surface-2 text-ink",
  },
];

interface ActivityItem {
  id: string;
  nounZh: string;
  nounPy: string;
  en: string;
  emoji: string;
  verb: ActionVerbKey;
}

const ACTIVITIES: ActivityItem[] = [
  { id: "basketball", nounZh: "篮球", nounPy: "lánqiú", en: "basketball", emoji: "🏀", verb: "da" },
  { id: "badminton", nounZh: "羽毛球", nounPy: "yǔmáoqiú", en: "badminton", emoji: "🏸", verb: "da" },
  { id: "tennis", nounZh: "网球", nounPy: "wǎngqiú", en: "tennis", emoji: "🎾", verb: "da" },
  { id: "pingpong", nounZh: "乒乓球", nounPy: "pīngpāngqiú", en: "table tennis", emoji: "🏓", verb: "da" },
  { id: "football", nounZh: "足球", nounPy: "zúqiú", en: "football / soccer", emoji: "⚽", verb: "ti" },
  { id: "piano", nounZh: "钢琴", nounPy: "gāngqín", en: "piano", emoji: "🎹", verb: "tan" },
  { id: "guitar", nounZh: "吉他", nounPy: "jítā", en: "guitar", emoji: "🎸", verb: "tan" },
  { id: "violin", nounZh: "小提琴", nounPy: "xiǎotíqín", en: "violin", emoji: "🎻", verb: "la" },
  { id: "bike", nounZh: "自行车", nounPy: "zìxíngchē", en: "bicycle", emoji: "🚲", verb: "qi" },
];

function VerbMechanicsDiagram({ verbKey }: { verbKey: ActionVerbKey }) {
  return (
    <svg
      viewBox="0 0 260 135"
      className="h-auto w-full rounded-xl border border-line bg-surface"
      role="img"
      aria-label={`Physical motion diagram for ${verbKey}`}
    >
      {verbKey === "da" ? (
        <g>
          <text x={44} y={76} fontSize={36} textAnchor="middle">🖐️</text>
          <path d="M 74 62 Q 112 30 148 64" fill="none" className="stroke-brand" strokeWidth={4} strokeDasharray="5 4" />
          <text x={172} y={76} fontSize={36} textAnchor="middle">🏀</text>
          <text x={218} y={76} fontSize={32} textAnchor="middle">🏸</text>
          <text x={130} y={118} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-brand">
            扌 Hand / Racket impact → 打 (dǎ)
          </text>
        </g>
      ) : null}
      {verbKey === "ti" ? (
        <g>
          <text x={58} y={76} fontSize={36} textAnchor="middle">👟</text>
          <path d="M 90 70 L 154 50" fill="none" className="stroke-good" strokeWidth={4} strokeLinecap="round" />
          <text x={188} y={64} fontSize={36} textAnchor="middle">⚽</text>
          <text x={130} y={118} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-good">
            ⻊ Foot kick motion → 踢 (tī)
          </text>
        </g>
      ) : null}
      {verbKey === "tan" ? (
        <g>
          <text x={60} y={74} fontSize={34} textAnchor="middle">🎹</text>
          <text x={130} y={68} fontSize={26} textAnchor="middle">👇🎶</text>
          <text x={200} y={74} fontSize={34} textAnchor="middle">🎸</text>
          <text x={130} y={118} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-info">
            弓 Pluck strings / press keys → 弹 (tán)
          </text>
        </g>
      ) : null}
      {verbKey === "la" ? (
        <g>
          <text x={82} y={74} fontSize={38} textAnchor="middle">🎻</text>
          <line x1={120} y1={62} x2={205} y2={62} className="stroke-accent" strokeWidth={4} strokeLinecap="round" />
          <text x={162} y={48} fontSize={12} fontWeight={800} textAnchor="middle" className="fill-ink">
            ← 拉 bow pull →
          </text>
          <text x={130} y={118} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-ink">
            扌 Draw bow across strings → 拉 (lā)
          </text>
        </g>
      ) : null}
      {verbKey === "qi" ? (
        <g>
          <text x={86} y={74} fontSize={38} textAnchor="middle">🚲</text>
          <text x={174} y={74} fontSize={38} textAnchor="middle">🐎</text>
          <text x={130} y={118} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-ink">
            马 Straddle & ride → 骑 (qí)
          </text>
        </g>
      ) : null}
    </svg>
  );
}

function SportMusicVerbMatcher() {
  const [mode, setMode] = useState<"explore" | "quiz">("explore");
  const [actId, setActId] = useState<string>("basketball");
  const [qIdx, setQIdx] = useState<number>(0);
  const [pickedVerb, setPickedVerb] = useState<ActionVerbKey | null>(null);
  const [score, setScore] = useState<number>(0);

  const act = ACTIVITIES.find((a) => a.id === actId) ?? ACTIVITIES[0];
  const vSpec = VERBS.find((v) => v.key === act.verb) ?? VERBS[0];

  const collocationZh = `${vSpec.zh}${act.nounZh}`;
  const collocationPy = `${vSpec.py} ${act.nounPy}`;
  const exSentenceZh = `我周末喜欢跟朋友一起${collocationZh}。`;

  const quizItem = ACTIVITIES[qIdx % ACTIVITIES.length];
  const quizCorrectVerb = VERBS.find((v) => v.key === quizItem.verb) ?? VERBS[0];

  return (
    <WidgetFrame
      title="Sport & Music Action-Verb Matcher (打 · 踢 · 弹 · 拉 · 骑)"
      tryThis={[
        "Click **篮球**, **足球**, **钢琴**, **小提琴** and **自行车** — inspect the character radical (**扌 / ⻊ / 弓 / 马**) that unlocks each verb!",
        "Notice why English says ‘play’ for everything, whereas saying ***玩篮球*** or ***弹小提琴*** sounds wrong in Mandarin!",
        "Switch to **🎯 Reflex Quiz** and aim for 9/9!",
      ]}
      caption={
        <p>
          <strong>Radical Detective ({vSpec.zh} {vSpec.py}):</strong> Radical <strong>{vSpec.radical}</strong> ({vSpec.radicalMeaning}) — {vSpec.whyRule}
        </p>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Mode"
            value={mode}
            onChange={(m) => {
              setMode(m);
              setPickedVerb(null);
            }}
            options={[
              { value: "explore", label: "🔍 Mechanics Explorer" },
              { value: "quiz", label: "🎯 Reflex Quiz" },
            ]}
          />
          {mode === "quiz" ? <span className="chip">Score: {score}</span> : null}
        </div>

        {mode === "explore" ? (
          <>
            {/* Activity buttons */}
            <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-5">
              {ACTIVITIES.map((a) => {
                const on = a.id === actId;
                const vb = VERBS.find((v) => v.key === a.verb);
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => {
                      setActId(a.id);
                      if (vb) speakChinese(`${vb.zh}${a.nounZh}`);
                    }}
                    className={`flex flex-col items-center rounded-xl border p-2 text-center transition ${
                      on ? "border-brand bg-brand-soft shadow-sm" : "border-line bg-surface hover:bg-surface-2"
                    }`}
                  >
                    <span className="text-2xl" aria-hidden>{a.emoji}</span>
                    <span className="mt-0.5 text-sm font-extrabold text-ink">
                      <span className="text-brand">{vb?.zh}</span>
                      {a.nounZh}
                    </span>
                    <span className="text-[10px] text-ink-2">{a.en}</span>
                  </button>
                );
              })}
            </div>

            <div className="grid gap-4 md:grid-cols-[260px_1fr]">
              <VerbMechanicsDiagram verbKey={vSpec.key} />

              <div className="flex flex-col justify-between rounded-xl border border-line bg-surface-2 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className={`inline-block rounded-lg border px-2.5 py-0.5 text-xs font-extrabold ${vSpec.badgeColor}`}>
                      Verb: {vSpec.zh} ({vSpec.py}) · Radical {vSpec.radical}
                    </span>
                    <div className="mt-2 text-3xl font-extrabold text-ink">
                      <span className="text-brand">{vSpec.zh}</span>
                      {act.nounZh} <span className="text-xl">{act.emoji}</span>
                    </div>
                    <div className="text-sm font-bold text-brand">{collocationPy} — to {vSpec.key === "qi" ? "ride a" : "play"} {act.en}</div>
                  </div>
                  <SpeakButtons text={collocationZh} />
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-2.5">
                  <div>
                    <div className="text-xs font-bold text-ink-2">In a full STPV sentence:</div>
                    <div className="text-sm font-extrabold text-ink">{exSentenceZh}</div>
                  </div>
                  <SpeakButtons text={exSentenceZh} compact />
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Reflex Quiz */
          <div className="space-y-3 rounded-xl border border-line bg-surface p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="chip">Item {(qIdx % ACTIVITIES.length) + 1} / {ACTIVITIES.length}</span>
                <div className="mt-2 flex items-center gap-2 text-2xl font-extrabold text-ink">
                  <span>{quizItem.emoji}</span>
                  <span className="rounded-lg border-2 border-dashed border-brand px-3 py-0.5 text-brand">？</span>
                  <span>{quizItem.nounZh}</span>
                  <span className="text-sm font-semibold text-ink-2">({quizItem.nounPy} · {quizItem.en})</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setQIdx((i) => i + 1);
                  setPickedVerb(null);
                }}
                className="btn btn-secondary btn-sm"
              >
                Next →
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {VERBS.map((v) => {
                const isChosen = pickedVerb === v.key;
                const isRight = v.key === quizItem.verb;
                return (
                  <button
                    key={v.key}
                    type="button"
                    onClick={() => {
                      if (pickedVerb !== quizItem.verb && isRight) {
                        setScore((s) => s + 1);
                        speakChinese(`${v.zh}${quizItem.nounZh}`);
                      }
                      setPickedVerb(v.key);
                    }}
                    className={`rounded-xl border p-2.5 text-center transition ${
                      isChosen
                        ? isRight
                          ? "border-good bg-good-soft text-good"
                          : "border-bad bg-bad-soft text-bad"
                        : "border-line bg-surface-2 hover:border-brand"
                    }`}
                  >
                    <div className="text-2xl font-extrabold">{v.zh}</div>
                    <div className="text-xs font-bold">{v.py}</div>
                    <div className="text-[10px] text-ink-2">{v.radical}</div>
                  </button>
                );
              })}
            </div>

            {pickedVerb !== null ? (
              <div
                className={`rounded-xl p-3 text-sm font-semibold ${
                  pickedVerb === quizItem.verb ? "bg-good-soft text-good" : "bg-bad-soft text-bad"
                }`}
              >
                {pickedVerb === quizItem.verb ? (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span>
                      ✅ 太棒了！ <strong>{quizCorrectVerb.zh}{quizItem.nounZh}</strong> — {quizCorrectVerb.whyRule}
                    </span>
                    <SpeakButtons text={`${quizCorrectVerb.zh}${quizItem.nounZh}`} compact />
                  </div>
                ) : (
                  <span>
                    Not {VERBS.find((v) => v.key === pickedVerb)?.zh}! Think about how your hands, feet or body interact with {quizItem.nounZh} ({quizItem.en}).
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
// Widget 2: Ability & Preference Builder (会 / 能 / 可以 & 最喜欢 CCA Card)
// ---------------------------------------------------------------------------

type ModalCanKey = "hui" | "neng" | "keyi";

interface CanScenario {
  id: string;
  titleEn: string;
  correct: ModalCanKey;
  zhBefore: string;
  zhAfter: string;
  fullZh: string;
  fullPy: string;
  en: string;
  explanation: string;
}

const CAN_SCENARIOS: CanScenario[] = [
  {
    id: "swim-skill",
    titleEn: "Learned Skill: “I know how to swim (I took lessons).”",
    correct: "hui",
    zhBefore: "我从小就学游泳，所以我",
    zhAfter: "游泳。",
    fullZh: "我从小就学游泳，所以我很会游泳。",
    fullPy: "Wǒ cóngxiǎo jiù xué yóuyǒng, suǒyǐ wǒ hěn huì yóuyǒng.",
    en: "I learned swimming since I was young, so I know how to swim well.",
    explanation: "会 (huì) = learned skill acquired through study or practice (swimming, speaking Chinese, playing piano).",
  },
  {
    id: "fever-swim",
    titleEn: "Circumstance: “I have a fever today, so I can’t swim.”",
    correct: "neng",
    zhBefore: "我今天发烧了，不",
    zhAfter: "去游泳。",
    fullZh: "我今天发烧了，不能去游泳。",
    fullPy: "Wǒ jīntiān fāshāo le, bù néng qù yóuyǒng.",
    en: "I have a fever today, so I cannot go swimming.",
    explanation: "能 (néng) / 不能 = physical ability or real-world circumstance! (Saying *不会游泳* here would mean you forgot how to swim!)",
  },
  {
    id: "photo-permission",
    titleEn: "Permission: “Excuse me, may I take photos here?”",
    correct: "keyi",
    zhBefore: "请问，这里",
    zhAfter: "拍照吗？",
    fullZh: "请问，这里可以拍照吗？",
    fullPy: "Qǐngwèn, zhèlǐ kěyǐ pāizhào ma?",
    en: "Excuse me, may / can I take photos here?",
    explanation: "可以 (kěyǐ) = asking or giving permission (‘is it allowed?’). Negation: 这里不可以拍照!",
  },
];

interface CcaOption {
  id: string;
  ccaZh: string;
  ccaPy: string;
  actZh: string;
  actPy: string;
  en: string;
  emoji: string;
}

const CCA_LIST: CcaOption[] = [
  { id: "bball", ccaZh: "篮球队", ccaPy: "lánqiúduì", actZh: "打篮球", actPy: "dǎ lánqiú", en: "Basketball Team", emoji: "🏀" },
  { id: "swim", ccaZh: "游泳队", ccaPy: "yóuyǒngduì", actZh: "游泳", actPy: "yóuyǒng", en: "Swimming Team", emoji: "🏊" },
  { id: "piano", ccaZh: "音乐社", ccaPy: "yīnyuèshè", actZh: "弹钢琴", actPy: "tán gāngqín", en: "Music Club (Piano)", emoji: "🎹" },
  { id: "football", ccaZh: "足球队", ccaPy: "zúqiúduì", actZh: "踢足球", actPy: "tī zúqiú", en: "Football Team", emoji: "⚽" },
  { id: "photo", ccaZh: "摄影社", ccaPy: "shèyǐngshè", actZh: "拍照", actPy: "pāizhào", en: "Photography CCA", emoji: "📷" },
];

const PREF_LEVELS = [
  { id: "zuixihuan", zh: "最喜欢", py: "zuì xǐhuan", en: "like most / favourite" },
  { id: "feichang", zh: "非常喜欢", py: "fēicháng xǐhuan", en: "really love" },
  { id: "ganxingqu", zh: "对…很感兴趣", py: "duì … hěn gǎn xìngqù", en: "am very interested in" },
];

const REASONS = [
  { id: "healthy", zh: "因为不但很有意思，而且对身体好", py: "yīnwèi búdàn hěn yǒuyìsi, érqiě duì shēntǐ hǎo", en: "because it’s not only fun, but also good for health" },
  { id: "relax", zh: "因为可以放松心情，认识新朋友", py: "yīnwèi kěyǐ fàngsōng xīnqíng, rènshi xīn péngyou", en: "because I can relax and make new friends" },
];

function AbilityPreferenceBuilder() {
  const [scenId, setScenId] = useState<string>("swim-skill");
  const [chosenModal, setChosenModal] = useState<ModalCanKey>("hui");

  const [ccaId, setCcaId] = useState<string>("bball");
  const [prefId, setPrefId] = useState<string>("zuixihuan");
  const [reasonId, setReasonId] = useState<string>("healthy");

  const scen = CAN_SCENARIOS.find((s) => s.id === scenId) ?? CAN_SCENARIOS[0];
  const modalRight = chosenModal === scen.correct;

  const cca = CCA_LIST.find((c) => c.id === ccaId) ?? CCA_LIST[0];
  const pref = PREF_LEVELS.find((p) => p.id === prefId) ?? PREF_LEVELS[0];
  const reason = REASONS.find((r) => r.id === reasonId) ?? REASONS[0];

  const prefClauseZh =
    pref.id === "ganxingqu" ? `我对${cca.actZh}很感兴趣` : `我${pref.zh}${cca.actZh}`;
  const prefClausePy =
    pref.id === "ganxingqu"
      ? `Wǒ duì ${cca.actPy} hěn gǎn xìngqù`
      : `Wǒ ${pref.py} ${cca.actPy}`;

  const ccaProfileZh = `我的课外活动是${cca.ccaZh}。我会${cca.actZh}，${prefClauseZh}，${reason.zh}！`;
  const ccaProfilePy = `Wǒ de kèwài huódòng shì ${cca.ccaPy}. Wǒ huì ${cca.actPy}, ${prefClausePy.toLowerCase()}, ${reason.py}!`;

  return (
    <WidgetFrame
      title="Ability & Preference Builder (会 / 能 / 可以 · 课外活动 CCA)"
      tryThis={[
        "Test all 3 ‘Can’ scenarios: see why **会 (learned skill)**, **能 (circumstance)** and **可以 (permission)** are NOT interchangeable!",
        "Try **对…很感兴趣** in the CCA builder — notice the hobby goes *between* **对** and **很感兴趣**!",
        "Listen to your full Singapore CCA (`课外活动`) self-introduction card at normal and slow speeds.",
      ]}
      caption={
        <p>
          <strong>English “can” = 3 Mandarin modals:</strong> <strong>会 (huì)</strong> = know how to (learned skill);{" "}
          <strong>能 (néng)</strong> = able to given circumstances; <strong>可以 (kěyǐ)</strong> = allowed / permitted!
        </p>
      }
    >
      <div className="space-y-5">
        {/* Part A: 会 vs 能 vs 可以 Showdown */}
        <div className="rounded-xl border border-line bg-surface p-4 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
            Part 1 · Which “Can” Fits? (会 vs 能 vs 可以)
          </div>

          <div className="grid gap-1.5 sm:grid-cols-3">
            {CAN_SCENARIOS.map((s) => {
              const active = s.id === scenId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setScenId(s.id);
                    setChosenModal(s.correct);
                  }}
                  className={`rounded-xl border p-2.5 text-left text-xs transition ${
                    active ? "border-brand bg-brand-soft font-extrabold text-ink" : "border-line bg-surface-2 font-semibold text-ink-2 hover:text-ink"
                  }`}
                >
                  {s.titleEn}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface-2 p-3">
            <div className="flex flex-wrap items-center gap-1.5 text-lg font-extrabold text-ink">
              <span>{scen.zhBefore}</span>
              {(["hui", "neng", "keyi"] as ModalCanKey[]).map((m) => {
                const label = m === "hui" ? "会" : m === "neng" ? "能" : "可以";
                const picked = chosenModal === m;
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => {
                      setChosenModal(m);
                      if (m === scen.correct) speakChinese(scen.fullZh);
                    }}
                    className={`rounded-lg border px-2.5 py-0.5 text-base font-extrabold transition ${
                      picked
                        ? m === scen.correct
                          ? "border-good bg-good text-white"
                          : "border-bad bg-bad text-white"
                        : "border-line bg-surface text-ink-2 hover:text-ink"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
              <span>{scen.zhAfter}</span>
            </div>
            <SpeakButtons text={scen.fullZh} compact />
          </div>

          <div className={`rounded-lg px-3 py-2 text-xs font-semibold ${modalRight ? "bg-good-soft text-good" : "bg-bad-soft text-bad"}`}>
            {modalRight ? (
              <span>
                ✅ <strong>{scen.fullZh}</strong> ({scen.fullPy}) — {scen.explanation}
              </span>
            ) : (
              <span>❌ Careful! {scen.explanation}</span>
            )}
          </div>
        </div>

        {/* Part B: Singapore CCA & Preference Card Builder */}
        <div className="rounded-xl border border-line bg-surface p-4 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wide text-info">
            Part 2 · Build Your Year 8 CCA Profile Card (我的课外活动)
          </div>

          <div className="flex flex-wrap gap-1.5">
            {CCA_LIST.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCcaId(c.id)}
                className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                  ccaId === c.id ? "border-info bg-info-soft text-info" : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                }`}
              >
                {c.emoji} {c.ccaZh} ({c.actZh})
              </button>
            ))}
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <div className="mb-1 text-[11px] font-bold uppercase text-ink-2">Preference Pattern</div>
              <div className="flex flex-wrap gap-1">
                {PREF_LEVELS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPrefId(p.id)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                      prefId === p.id ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface-2 text-ink-2"
                    }`}
                  >
                    {p.zh}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-1 text-[11px] font-bold uppercase text-ink-2">Upgrade Reason (因为…)</div>
              <div className="flex flex-wrap gap-1">
                {REASONS.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setReasonId(r.id)}
                    className={`rounded-lg border px-2.5 py-1 text-left text-xs font-bold transition ${
                      reasonId === r.id ? "border-good bg-good-soft text-good" : "border-line bg-surface-2 text-ink-2"
                    }`}
                  >
                    {r.en.replace("because ", "")}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-surface-2 p-3.5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="chip">{cca.emoji} Singapore CCA Card · {cca.en}</span>
                <div className="mt-1.5 text-lg font-extrabold text-ink">{ccaProfileZh}</div>
                <div className="mt-0.5 text-xs font-bold text-brand">{ccaProfilePy}</div>
              </div>
              <SpeakButtons text={ccaProfileZh} />
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "sport-music-verb-matcher",
    title: "Sport & Music Action-Verb Matcher (打 · 踢 · 弹 · 拉 · 骑)",
    blurb: "See why Mandarin matches physical hand, foot, string and riding motions to exact verbs — with radical clues and quiz mode.",
    Component: SportMusicVerbMatcher,
  },
  {
    id: "ability-preference-builder",
    title: "Ability & Preference Builder (会 / 能 / 可以 & 最喜欢)",
    blurb: "Separate Mandarin’s three ‘can’ modals (会, 能, 可以) and build a high-scoring Singapore CCA profile card.",
    Component: AbilityPreferenceBuilder,
  },
];
