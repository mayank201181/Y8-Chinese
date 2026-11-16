"use client";
import { useState } from "react";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Widget 1: Interactive Body Map & Symptom Checker (哪里不舒服？)
// ---------------------------------------------------------------------------

type BodyPartId = "tou" | "yanjing" | "yachi" | "sangzi" | "duzi" | "tui";
type ExtraSymId = "fashao" | "kesou" | "ganmao" | "liubiti";

interface BodyPartSpec {
  id: BodyPartId;
  zh: string;
  py: string;
  en: string;
  painZh: string;
  painPy: string;
  painEn: string;
  cx: number;
  cy: number;
  labelSide: "left" | "right";
}

const BODY_PARTS: BodyPartSpec[] = [
  { id: "tou", zh: "头", py: "tóu", en: "head", painZh: "头疼", painPy: "tóuténg", painEn: "have a headache", cx: 130, cy: 40, labelSide: "left" },
  { id: "yanjing", zh: "眼睛", py: "yǎnjing", en: "eyes", painZh: "眼睛疼", painPy: "yǎnjing téng", painEn: "my eyes hurt / ache", cx: 130, cy: 56, labelSide: "right" },
  { id: "yachi", zh: "牙齿", py: "yáchǐ", en: "teeth", painZh: "牙疼", painPy: "yáténg", painEn: "have a toothache", cx: 130, cy: 73, labelSide: "left" },
  { id: "sangzi", zh: "嗓子", py: "sǎngzi", en: "throat", painZh: "嗓子疼", painPy: "sǎngzi téng", painEn: "have a sore throat", cx: 130, cy: 94, labelSide: "right" },
  { id: "duzi", zh: "肚子", py: "dùzi", en: "stomach / tummy", painZh: "肚子疼", painPy: "dùzi téng", painEn: "have a stomachache", cx: 130, cy: 152, labelSide: "left" },
  { id: "tui", zh: "腿", py: "tuǐ", en: "leg", painZh: "腿疼", painPy: "tuǐ téng", painEn: "my leg hurts", cx: 146, cy: 222, labelSide: "right" },
];

interface ExtraSymSpec {
  id: ExtraSymId;
  zh: string;
  py: string;
  en: string;
  emoji: string;
}

const EXTRA_SYMS: ExtraSymSpec[] = [
  { id: "fashao", zh: "发烧了", py: "fāshāo le", en: "have a fever", emoji: "🤒" },
  { id: "kesou", zh: "一直咳嗽", py: "yìzhí késou", en: "keep coughing", emoji: "😷" },
  { id: "ganmao", zh: "感冒了", py: "gǎnmào le", en: "caught a cold", emoji: "🤧" },
  { id: "liubiti", zh: "流鼻涕", py: "liú bítì", en: "have a runny nose", emoji: "🧻" },
];

interface SymptomChallenge {
  promptEn: string;
  part: BodyPartId;
  extra: ExtraSymId | null;
}

const SYMPTOM_QUIZ: SymptomChallenge[] = [
  { promptEn: "I have a headache, and moreover I have a fever.", part: "tou", extra: "fashao" },
  { promptEn: "I have a sore throat, and moreover I keep coughing.", part: "sangzi", extra: "kesou" },
  { promptEn: "I have a stomachache (no fever or cough).", part: "duzi", extra: null },
  { promptEn: "I have a toothache!", part: "yachi", extra: null },
];

function BodySymptomChecker() {
  const [mode, setMode] = useState<"explore" | "quiz">("explore");
  const [partId, setPartId] = useState<BodyPartId>("tou");
  const [extraId, setExtraId] = useState<ExtraSymId | null>("fashao");
  const [quizIdx, setQuizIdx] = useState<number>(0);

  const part = BODY_PARTS.find((b) => b.id === partId) ?? BODY_PARTS[0];
  const extra = EXTRA_SYMS.find((e) => e.id === extraId) ?? null;

  const sentenceZh = extra ? `我${part.painZh}，而且${extra.zh}。` : `我${part.painZh}，很不舒服。`;
  const sentencePy = extra
    ? `Wǒ ${part.painPy}, érqiě ${extra.py}.`
    : `Wǒ ${part.painPy}, hěn bù shūfu.`;
  const sentenceEn = extra
    ? `I ${part.painEn}, and moreover I ${extra.en}.`
    : `I ${part.painEn} and feel very unwell.`;

  const curQuiz = SYMPTOM_QUIZ[quizIdx % SYMPTOM_QUIZ.length];
  const quizMatched = mode === "quiz" && partId === curQuiz.part && extraId === curQuiz.extra;

  return (
    <WidgetFrame
      title="Interactive Body Map & Symptom Checker (哪里不舒服？)"
      tryThis={[
        "Tap **头 / 眼睛 / 牙齿 / 嗓子 / 肚子 / 腿** directly on the body map — notice how **疼 (téng)** goes *right after* the body part!",
        "Look closely at **牙齿 → 牙疼** (drops 齿 in everyday speech!) and add **发烧了** or **咳嗽** with **而且 (érqiě = moreover)**.",
        "Switch to **🎯 Symptom Quiz** and diagnose all 4 clinic patients!",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>Topic–Comment Body Structure:</strong> Mandarin says <strong>我 + {part.painZh}</strong> (literally “I — {part.en} hurts”) without needing 我的! And <strong>发烧了</strong> uses change-of-state <strong>了</strong> (“now have a fever”).
          </p>
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
              { value: "explore", label: "🩺 Body & Symptom Explorer" },
              { value: "quiz", label: "🎯 Symptom Quiz" },
            ]}
          />
          <span className="text-xs font-bold text-ink-2">Doctor asks: “你怎么了？哪里不舒服？”</span>
        </div>

        {mode === "quiz" ? (
          <div className={`rounded-xl border p-3 ${quizMatched ? "border-good bg-good-soft" : "border-brand bg-brand-soft"}`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
                  Patient {(quizIdx % SYMPTOM_QUIZ.length) + 1} of {SYMPTOM_QUIZ.length}
                </div>
                <div className="text-sm font-bold text-ink">Target: “{curQuiz.promptEn}”</div>
              </div>
              {quizMatched ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-good">✅ 诊断正确！</span>
                  <button
                    type="button"
                    onClick={() => {
                      speakChinese(sentenceZh);
                      setQuizIdx((i) => i + 1);
                    }}
                    className="btn btn-good btn-sm"
                  >
                    Next Patient →
                  </button>
                </div>
              ) : (
                <span className="text-xs font-semibold text-ink-2">Click the body part + toggle extra symptom</span>
              )}
            </div>
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-[260px_1fr]">
          {/* Interactive SVG Human Figure */}
          <div className="flex flex-col items-center rounded-xl border border-line bg-surface p-3">
            <svg
              viewBox="0 0 260 280"
              className="h-64 w-full max-w-[250px]"
              role="img"
              aria-label={`Human body map highlighting ${part.zh} (${part.en})`}
            >
              {/* Friendly human silhouette */}
              {/* Head */}
              <circle cx={130} cy={56} r={28} className="fill-surface-2 stroke-ink-2" strokeWidth={2} />
              {/* Neck */}
              <rect x={121} y={83} width={18} height={16} rx={4} className="fill-surface-2 stroke-ink-2" strokeWidth={2} />
              {/* Torso */}
              <rect x={96} y={98} width={68} height={88} rx={20} className="fill-surface-2 stroke-ink-2" strokeWidth={2} />
              {/* Left & Right Arms */}
              <rect x={68} y={102} width={22} height={78} rx={11} className="fill-surface-2 stroke-ink-2" strokeWidth={2} />
              <rect x={170} y={102} width={22} height={78} rx={11} className="fill-surface-2 stroke-ink-2" strokeWidth={2} />
              {/* Left & Right Legs */}
              <rect x={101} y={184} width={24} height={82} rx={11} className="fill-surface-2 stroke-ink-2" strokeWidth={2} />
              <rect x={135} y={184} width={24} height={82} rx={11} className="fill-surface-2 stroke-ink-2" strokeWidth={2} />

              {/* Fever thermometer badge near head if 发烧了 */}
              {extraId === "fashao" ? (
                <text x={172} y={40} fontSize={18}>
                  🤒
                </text>
              ) : null}

              {/* Clickable Body Part Hotspots & Callout Labels */}
              {BODY_PARTS.map((b) => {
                const active = b.id === partId;
                const lx = b.labelSide === "left" ? 38 : 222;
                return (
                  <g
                    key={b.id}
                    onClick={() => {
                      setPartId(b.id);
                      speakChinese(b.painZh);
                    }}
                    className="cursor-pointer"
                  >
                    <line
                      x1={b.cx}
                      y1={b.cy}
                      x2={b.labelSide === "left" ? 68 : 192}
                      y2={b.cy}
                      className={active ? "stroke-brand" : "stroke-line"}
                      strokeWidth={active ? 2 : 1.2}
                    />
                    {active ? (
                      <circle cx={b.cx} cy={b.cy} r={12} className="fill-brand" opacity={0.25} />
                    ) : null}
                    <circle
                      cx={b.cx}
                      cy={b.cy}
                      r={active ? 6.5 : 4.5}
                      className={active ? "fill-brand stroke-white" : "fill-info stroke-surface"}
                      strokeWidth={1.8}
                    />
                    <rect
                      x={lx - 32}
                      y={b.cy - 11}
                      width={64}
                      height={22}
                      rx={6}
                      className={active ? "fill-brand" : "fill-surface stroke-line"}
                      strokeWidth={1}
                    />
                    <text
                      x={lx}
                      y={b.cy + 4}
                      fontSize={11}
                      fontWeight={800}
                      textAnchor="middle"
                      className={active ? "fill-white" : "fill-ink"}
                    >
                      {b.zh}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right Symptom Controls */}
          <div className="flex flex-col justify-between space-y-3">
            <div>
              <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                1. Where does it hurt? (点击身体部位)
              </div>
              <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                {BODY_PARTS.map((b) => {
                  const on = b.id === partId;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => {
                        setPartId(b.id);
                        speakChinese(b.painZh);
                      }}
                      className={`rounded-xl border px-3 py-2 text-left transition ${
                        on ? "border-brand bg-brand-soft" : "border-line bg-surface hover:bg-surface-2"
                      }`}
                    >
                      <div className="text-sm font-extrabold text-ink">
                        {b.zh} → <span className="text-brand">{b.painZh}</span>
                      </div>
                      <div className="text-[11px] text-ink-2">
                        {b.painPy} ({b.en})
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                2. Add Fever / Cold / Cough (而且… optional)
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {EXTRA_SYMS.map((e) => {
                  const on = extraId === e.id;
                  return (
                    <button
                      key={e.id}
                      type="button"
                      onClick={() => setExtraId((prev) => (prev === e.id ? null : e.id))}
                      aria-pressed={on}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left transition ${
                        on ? "border-accent bg-accent-soft font-extrabold text-ink" : "border-line bg-surface text-ink-2 hover:text-ink"
                      }`}
                    >
                      <span className="text-lg" aria-hidden>{e.emoji}</span>
                      <span>
                        <span className="block text-sm font-extrabold text-ink">{e.zh}</span>
                        <span className="block text-[11px] text-ink-2">{e.py} · {e.en}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Patient Speech Bubble */}
            <div className="rounded-xl border border-line bg-surface-2 p-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-bold uppercase text-brand">🗣️ Patient says (病人说):</div>
                  <div className="mt-0.5 text-xl font-extrabold text-ink">{sentenceZh}</div>
                  <div className="text-sm font-bold text-brand">{sentencePy}</div>
                  <div className="text-xs text-ink-2">“{sentenceEn}”</div>
                </div>
                <SpeakButtons text={sentenceZh} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Doctor's Clinic Prescription Pad (看医生 · 处方单)
// ---------------------------------------------------------------------------

interface PatientCase {
  id: string;
  nameZh: string;
  complaintZh: string;
  complaintPy: string;
  complaintEn: string;
  emoji: string;
  bestCareId: string;
  bestDontId: string;
  needsMedicine: boolean;
}

const CASES: PatientCase[] = [
  {
    id: "flu",
    nameZh: "林明 (13岁)",
    complaintZh: "医生，我头疼、发烧三十八度半，还一直咳嗽。",
    complaintPy: "Yīshēng, wǒ tóuténg, fāshāo sānshíbā dù bàn, hái yìzhí késou.",
    complaintEn: "Doctor, I have a headache, a 38.5°C fever, and keep coughing.",
    emoji: "🤒",
    bestCareId: "water-rest",
    bestDontId: "no-ice",
    needsMedicine: true,
  },
  {
    id: "throat",
    nameZh: "陈欣怡 (12岁)",
    complaintZh: "医生，我嗓子疼极了，说话很不舒服。",
    complaintPy: "Yīshēng, wǒ sǎngzi téng jíle, shuōhuà hěn bù shūfu.",
    complaintEn: "Doctor, my throat hurts terribly and speaking is uncomfortable.",
    emoji: "😷",
    bestCareId: "warm-water",
    bestDontId: "no-spicy",
    needsMedicine: true,
  },
  {
    id: "tummy",
    nameZh: "张伟 (13岁)",
    complaintZh: "医生，我昨天喝了太多冰可乐，今天肚子疼。",
    complaintPy: "Yīshēng, wǒ zuótiān hē le tài duō bīng kělè, jīntiān dùzi téng.",
    complaintEn: "Doctor, I drank too much iced cola yesterday and have a stomachache today.",
    emoji: "🤢",
    bestCareId: "warm-water",
    bestDontId: "no-ice",
    needsMedicine: true,
  },
  {
    id: "tooth",
    nameZh: "王小雨 (12岁)",
    complaintZh: "医生，我每天吃很多巧克力，现在牙疼！",
    complaintPy: "Yīshēng, wǒ měitiān chī hěn duō qiǎokèlì, xiànzài yáténg!",
    complaintEn: "Doctor, I eat lots of chocolate every day, and now I have a toothache!",
    emoji: "🦷",
    bestCareId: "brush-rest",
    bestDontId: "less-sugar",
    needsMedicine: false,
  },
];

const CARE_OPTIONS = [
  { id: "water-rest", zh: "多喝温水，在家多休息", py: "duō hē wēnshuǐ, zài jiā duō xiūxi", en: "drink plenty of warm water & rest more at home" },
  { id: "warm-water", zh: "多喝温水，早点睡觉", py: "duō hē wēnshuǐ, zǎodiǎn shuìjiào", en: "drink plenty of warm water & go to bed early" },
  { id: "brush-rest", zh: "每天早晚刷牙，好好检查牙齿", py: "měitiān zǎowǎn shuāyá, hǎohāo jiǎnchá yáchǐ", en: "brush teeth morning & night and get a dental check-up" },
];

const DONT_OPTIONS = [
  { id: "no-ice", zh: "别喝冰水", py: "bié hē bīngshuǐ", en: "don’t drink iced water" },
  { id: "no-spicy", zh: "别吃太辣的东西", py: "bié chī tài là de dōngxi", en: "don’t eat overly spicy food" },
  { id: "less-sugar", zh: "少吃糖和巧克力", py: "shǎo chī táng hé qiǎokèlì", en: "eat less sugar and chocolate" },
];

const NUM_WORD: Record<number, { zh: string; py: string }> = {
  1: { zh: "一", py: "yī" },
  2: { zh: "两", py: "liǎng" },
  3: { zh: "三", py: "sān" },
  4: { zh: "四", py: "sì" },
};

// Note: before 次 (times), 2 is traditionally 两次 (liǎng cì); before 片 (tablets), 两片 (liǎng piàn)!
function PrescriptionPad() {
  const [caseId, setCaseId] = useState<string>("flu");
  const [modal, setModal] = useState<"yinggai" | "dei">("yinggai");
  const [careId, setCareId] = useState<string>("water-rest");
  const [dontId, setDontId] = useState<string>("no-ice");
  const [includeMeds, setIncludeMeds] = useState<boolean>(true);
  const [timesPerDay, setTimesPerDay] = useState<number>(3);
  const [pillsPerDose, setPillsPerDose] = useState<number>(2);

  const patient = CASES.find((c) => c.id === caseId) ?? CASES[0];
  const care = CARE_OPTIONS.find((c) => c.id === careId) ?? CARE_OPTIONS[0];
  const dont = DONT_OPTIONS.find((d) => d.id === dontId) ?? DONT_OPTIONS[0];

  const modalSpec =
    modal === "yinggai"
      ? { zh: "应该", py: "yīnggāi", en: "should" }
      : { zh: "得", py: "děi", en: "must / have to" };

  const tWord = NUM_WORD[timesPerDay];
  const pWord = NUM_WORD[pillsPerDose];
  const medClauseZh = includeMeds ? `你得吃药：一天${tWord.zh}次，一次${pWord.zh}片。` : "";
  const medClausePy = includeMeds ? `Nǐ děi chīyào: yì tiān ${tWord.py} cì, yí cì ${pWord.py} piàn.` : "";

  const rxZh = `你${modalSpec.zh}${care.zh}，${dont.zh}。${medClauseZh}`;
  const rxPy = `Nǐ ${modalSpec.py} ${care.py}, ${dont.py}. ${medClausePy}`.trim();

  const careMatched = careId === patient.bestCareId && dontId === patient.bestDontId;

  return (
    <WidgetFrame
      title="Doctor’s Clinic Prescription Pad (看医生 · 处方单)"
      tryThis={[
        "Listen to each patient’s symptoms, then match the best **多… (Do more)** and **别… (Don’t)** advice!",
        "Switch between **应该 (yīnggāi)** and **得 (děi)**: notice **得** is pronounced **děi** (‘must’), NOT *de* or *dé*!",
        "Adjust the medicine dosage (**一天三次，一次两片**) — notice both **两次** and **两片** use **两**!",
      ]}
      caption={
        <p>
          <strong>Clinic Grammar Trio:</strong> ① Advice with <strong>应该</strong> (should) or <strong>得 (děi)</strong> (must) + <strong>多 + Verb</strong> (<em>多喝温水</em> = drink MORE warm water); ② Medicine schedule <strong>一天 X 次，一次 Y 片</strong>; ③ Prohibition with <strong>别 / 不要 + Verb</strong> (<em>别喝冰水</em> = don’t drink iced water)!
        </p>
      }
    >
      <div className="space-y-4">
        {/* Patient Case Picker */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {CASES.map((c) => {
            const on = c.id === caseId;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setCaseId(c.id);
                  setIncludeMeds(c.needsMedicine);
                }}
                className={`flex flex-col items-start rounded-xl border p-2.5 text-left transition ${
                  on ? "border-brand bg-brand-soft shadow-sm" : "border-line bg-surface hover:bg-surface-2"
                }`}
              >
                <span className="text-xl" aria-hidden>{c.emoji}</span>
                <span className="mt-1 text-xs font-extrabold text-ink">{c.nameZh}</span>
                <span className="line-clamp-2 text-[11px] text-ink-2">{c.complaintZh}</span>
              </button>
            );
          })}
        </div>

        {/* Patient Complaint Card */}
        <div className="rounded-xl border border-line bg-surface p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="chip">{patient.emoji} 病人：{patient.nameZh}</span>
              <div className="mt-1.5 text-base font-extrabold text-ink">“{patient.complaintZh}”</div>
              <div className="text-xs font-bold text-brand">{patient.complaintPy}</div>
              <div className="text-xs text-ink-2">“{patient.complaintEn}”</div>
            </div>
            <SpeakButtons text={patient.complaintZh} compact />
          </div>
        </div>

        {/* Doctor's Prescription Controls */}
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-line bg-surface p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">1. Modal Verb</span>
              <Segmented
                label="Modal verb"
                value={modal}
                onChange={setModal}
                options={[
                  { value: "yinggai", label: "应该 yīnggāi (should)" },
                  { value: "dei", label: "得 děi (must!)" },
                ]}
              />
            </div>

            <div>
              <div className="mb-1 text-xs font-extrabold uppercase tracking-wide text-ink-2">2. Care Advice (多…)</div>
              <div className="space-y-1.5">
                {CARE_OPTIONS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCareId(c.id)}
                    className={`w-full rounded-xl border px-3 py-1.5 text-left text-xs transition ${
                      careId === c.id ? "border-good bg-good-soft font-extrabold text-good" : "border-line bg-surface-2 text-ink hover:border-brand"
                    }`}
                  >
                    <div>{c.zh}</div>
                    <div className="text-[10px] opacity-80">{c.en}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-1 text-xs font-extrabold uppercase tracking-wide text-ink-2">3. What to Avoid (别 / 少…)</div>
              <div className="space-y-1.5">
                {DONT_OPTIONS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDontId(d.id)}
                    className={`w-full rounded-xl border px-3 py-1.5 text-left text-xs transition ${
                      dontId === d.id ? "border-bad bg-bad-soft font-extrabold text-bad" : "border-line bg-surface-2 text-ink hover:border-brand"
                    }`}
                  >
                    <div>🚫 {d.zh}</div>
                    <div className="text-[10px] opacity-80">{d.en}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Medicine Dosage + Live Prescription Pad */}
          <div className="flex flex-col justify-between rounded-xl border-2 border-line bg-surface-2 p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-line pb-2">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-brand">🏥 东陵医院处方单 · Rx Pad</div>
                  <div className="text-xs text-ink-2">Patient: {patient.nameZh}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeMeds((v) => !v)}
                  aria-pressed={includeMeds}
                  className={`btn btn-sm ${includeMeds ? "btn-primary" : "btn-secondary"}`}
                >
                  {includeMeds ? "💊 吃药 ON" : "No Pills"}
                </button>
              </div>

              {includeMeds ? (
                <div className="space-y-2 rounded-xl bg-surface p-3">
                  <Stepper
                    label="Times per day (一天几次)"
                    value={timesPerDay}
                    min={1}
                    max={4}
                    format={(v) => `一天${NUM_WORD[v].zh}次`}
                    onChange={setTimesPerDay}
                  />
                  <Stepper
                    label="Tablets per dose (一次几片)"
                    value={pillsPerDose}
                    min={1}
                    max={3}
                    format={(v) => `一次${NUM_WORD[v].zh}片`}
                    onChange={setPillsPerDose}
                  />
                </div>
              ) : null}

              <div className="rounded-xl bg-surface p-3">
                <div className="text-base font-extrabold leading-relaxed text-ink">{rxZh}</div>
                <div className="mt-1 text-xs font-bold text-brand">{rxPy}</div>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2">
              <span className={`text-xs font-extrabold ${careMatched ? "text-good" : "text-warn"}`}>
                {careMatched
                  ? "✅ 完美处方！ Spot-on advice for this patient!"
                  : "💡 Tip: Check if another 多… / 别… fits this patient’s exact cause even better!"}
              </span>
              <SpeakButtons text={rxZh} />
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "body-symptom-checker",
    title: "Interactive Body Map & Symptom Checker (哪里不舒服？)",
    blurb: "Tap body parts on the figure and combine aches (疼) with fever/cough (而且发烧了) in explore or quiz mode.",
    Component: BodySymptomChecker,
  },
  {
    id: "clinic-prescription-pad",
    title: "Doctor’s Clinic Prescription Pad (看医生)",
    blurb: "Write Mandarin prescriptions with 应该, 得 (děi), 多喝温水, 一天三次一次两片 and 别喝冰水.",
    Component: PrescriptionPad,
  },
];
