"use client";

import { useState } from "react";
import { WidgetFrame, Segmented, Readout, type WidgetDef } from "./kit";
import { SpeakButtons } from "@/components/HanziAudio";
import { speakChinese } from "@/lib/speech";
import { usePinyinVisible } from "@/lib/pinyinDisplay";

// ---------------------------------------------------------------------------
// Widget 1: Weekly CCA & Weekend Timetable Planner
// ---------------------------------------------------------------------------

interface FrequencyOption {
  id: string;
  zh: string;
  py: string;
  en: string;
  pct: number;
  barClass: string;
}

const FREQUENCIES: FrequencyOption[] = [
  { id: "zongshi", zh: "总是", py: "zǒngshì", en: "always (100%)", pct: 100, barClass: "bg-brand" },
  { id: "changchang", zh: "常常", py: "chángcháng", en: "often (80%)", pct: 80, barClass: "bg-good" },
  { id: "youshihou", zh: "有时候", py: "yǒushíhou", en: "sometimes (50%)", pct: 50, barClass: "bg-accent" },
  { id: "henshao", zh: "很少", py: "hěn shǎo", en: "seldom (15%)", pct: 15, barClass: "bg-warn" },
  { id: "congbu", zh: "从不", py: "cóngbù", en: "never (0%)", pct: 0, barClass: "bg-ink-2" },
];

interface CcaActivity {
  id: string;
  icon: string;
  zh: string;
  py: string;
  en: string;
  kind: "sport" | "arts" | "leisure";
}

const CCA_ACTIVITIES: CcaActivity[] = [
  { id: "badminton", icon: "🏸", zh: "打羽毛球", py: "dǎ yǔmáoqiú", en: "play badminton", kind: "sport" },
  { id: "basketball", icon: "🏀", zh: "打篮球", py: "dǎ lánqiú", en: "play basketball", kind: "sport" },
  { id: "football", icon: "⚽", zh: "踢足球", py: "tī zúqiú", en: "play football", kind: "sport" },
  { id: "swim", icon: "🏊", zh: "游泳", py: "yóuyǒng", en: "go swimming", kind: "sport" },
  { id: "piano", icon: "🎹", zh: "弹钢琴", py: "tán gāngqín", en: "play the piano", kind: "arts" },
  { id: "library", icon: "📚", zh: "去图书馆看书", py: "qù túshūguǎn kànshū", en: "read in the library", kind: "leisure" },
  { id: "games", icon: "🎮", zh: "玩电脑游戏", py: "wán diànnǎo yóuxì", en: "play computer games", kind: "leisure" },
  { id: "rest", icon: "🛋️", zh: "在家休息", py: "zài jiā xiūxi", en: "rest at home", kind: "leisure" },
];

interface WeekdaySlot {
  dayIdx: number;
  zh: string;
  py: string;
  shortEn: string;
  isWeekend?: boolean;
}

const WEEK_DAYS: WeekdaySlot[] = [
  { dayIdx: 0, zh: "星期一", py: "Xīngqīyī", shortEn: "Mon" },
  { dayIdx: 1, zh: "星期二", py: "Xīngqī'èr", shortEn: "Tue" },
  { dayIdx: 2, zh: "星期三", py: "Xīngqīsān", shortEn: "Wed" },
  { dayIdx: 3, zh: "星期四", py: "Xīngqīsì", shortEn: "Thu" },
  { dayIdx: 4, zh: "星期五", py: "Xīngqīwǔ", shortEn: "Fri" },
  { dayIdx: 5, zh: "星期六", py: "Xīngqīliù", shortEn: "Sat", isWeekend: true },
  { dayIdx: 6, zh: "星期天", py: "Xīngqītiān", shortEn: "Sun", isWeekend: true },
];

interface WeekendOuting {
  id: string;
  icon: string;
  placeZh: string;
  placePy: string;
  actZh: string;
  actPy: string;
  en: string;
}

const WEEKEND_OUTINGS: WeekendOuting[] = [
  {
    id: "orchard",
    icon: "🛍️",
    placeZh: "去乌节路",
    placePy: "qù Wūjié Lù",
    actZh: "逛街买东西",
    actPy: "guàngjiē mǎi dōngxi",
    en: "go shopping on Orchard Road",
  },
  {
    id: "sentosa",
    icon: "🏖️",
    placeZh: "去圣淘沙",
    placePy: "qù Shèngtáoshā",
    actZh: "晒太阳、游泳",
    actPy: "shài tàiyáng, yóuyǒng",
    en: "sunbathe and swim at Sentosa",
  },
  {
    id: "cinema",
    icon: "🎬",
    placeZh: "去电影院",
    placePy: "qù diànyǐngyuàn",
    actZh: "看电影",
    actPy: "kàn diànyǐng",
    en: "watch a film at the cinema",
  },
  {
    id: "hawker",
    icon: "🥟",
    placeZh: "去小贩中心",
    placePy: "qù xiǎofàn zhōngxīn",
    actZh: "吃好吃的菜",
    actPy: "chī hǎochī de cài",
    en: "eat tasty dishes at a hawker centre",
  },
];

const COMPANIONS = [
  { id: "friends", zh: "跟好朋友一起", py: "gēn hǎo péngyou yìqǐ", en: "together with good friends" },
  { id: "family", zh: "跟家人一起", py: "gēn jiārén yìqǐ", en: "together with my family" },
  { id: "classmates", zh: "跟同学一起", py: "gēn tóngxué yìqǐ", en: "together with classmates" },
];

const INTENTIONS = [
  { id: "dasuan", zh: "打算", py: "dǎsuàn", en: "plan to (intention)" },
  { id: "zhunbei", zh: "准备", py: "zhǔnbèi", en: "prepare / plan to" },
  { id: "xiang", zh: "想", py: "xiǎng", en: "would like to" },
];

function WeeklyCcaPlanner() {
  const showPinyin = usePinyinVisible();
  const [selectedDay, setSelectedDay] = useState<number>(2); // Wednesday default
  const [daySchedule, setDaySchedule] = useState<Record<number, string>>({
    0: "library",
    1: "badminton",
    2: "basketball",
    3: "piano",
    4: "badminton",
    5: "games",
    6: "rest",
  });
  const [freqId, setFreqId] = useState<string>("changchang");
  const [weekendDay, setWeekendDay] = useState<"sat" | "sun">("sat");
  const [intentionId, setIntentionId] = useState<string>("dasuan");
  const [companionId, setCompanionId] = useState<string>("friends");
  const [outingId, setOutingId] = useState<string>("cinema");

  const activeDay = WEEK_DAYS[selectedDay];
  const activeAct = CCA_ACTIVITIES.find((a) => a.id === daySchedule[selectedDay]) ?? CCA_ACTIVITIES[0];
  const activeFreq = FREQUENCIES.find((f) => f.id === freqId) ?? FREQUENCIES[1];
  const activeIntention = INTENTIONS.find((i) => i.id === intentionId) ?? INTENTIONS[0];
  const activeCompanion = COMPANIONS.find((c) => c.id === companionId) ?? COMPANIONS[0];
  const activeOuting = WEEKEND_OUTINGS.find((o) => o.id === outingId) ?? WEEKEND_OUTINGS[2];

  const timeSlotZh = activeDay.isWeekend ? `${activeDay.zh}上午` : `${activeDay.zh}放学以后`;
  const timeSlotPy = activeDay.isWeekend ? `${activeDay.py} shàngwǔ` : `${activeDay.py} fàngxué yǐhòu`;
  const timeSlotEn = activeDay.isWeekend ? `on ${activeDay.shortEn} mornings` : `after school on ${activeDay.shortEn}`;

  const habitSentenceZh = `我${timeSlotZh}${activeFreq.zh}${activeAct.zh}。`;
  const habitSentencePy = `Wǒ ${timeSlotPy} ${activeFreq.py} ${activeAct.py}.`;
  const habitSentenceEn =
    activeFreq.id === "congbu"
      ? `I never ${activeAct.en} ${timeSlotEn}.`
      : `I ${activeFreq.en.split(" ")[0]} ${activeAct.en} ${timeSlotEn}.`;

  const wkDayZh = weekendDay === "sat" ? "这个星期六下午" : "这个星期天下午";
  const wkDayPy = weekendDay === "sat" ? "Zhège Xīngqīliù xiàwǔ" : "Zhège Xīngqītiān xiàwǔ";
  const wkDayEn = weekendDay === "sat" ? "This Saturday afternoon" : "This Sunday afternoon";

  const planSentenceZh = `${wkDayZh}我${activeIntention.zh}${activeCompanion.zh}${activeOuting.placeZh}${activeOuting.actZh}。`;
  const planSentencePy = `${wkDayPy} wǒ ${activeIntention.py} ${activeCompanion.py} ${activeOuting.placePy} ${activeOuting.actPy}.`;
  const planSentenceEn = `${wkDayEn}, I ${activeIntention.en.split(" (")[0]} ${activeOuting.en} ${activeCompanion.en}.`;

  const ccaDaysCount = Object.entries(daySchedule).filter(
    ([idx, act]) => Number(idx) < 5 && act !== "rest" && act !== "games",
  ).length;

  return (
    <WidgetFrame
      title="新加坡学生一周课外活动与周末计划 · CCA & Weekend Planner"
      tryThis={[
        "Click any day **星期一 – 星期天** and change its CCA (`课外活动`), then slide the frequency meter from **总是** (100%) down to **从不** (0%).",
        "Notice where the frequency adverb sits: **always BEFORE the action verb** (`我星期三放学以后常常打篮球`).",
        "Build a **这个周末** plan below with **打算 + 跟…一起 + 去…** and listen to both sentences with 🔊!",
      ]}
      caption={
        <span>
          <strong>Grammar contrast:</strong> Routine habits use a general day + frequency adverb (
          <strong>常常 / 有时候</strong>), whereas specific upcoming plans use <strong>这个星期六 + 打算 + 跟…一起</strong>.
        </span>
      }
    >
      <div className="space-y-5">
        {/* Mon - Sun interactive timetable strip */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              1. Tap a Day on Your Timetable (点击选择星期)
            </span>
            <span className="chip">{ccaDaysCount} weekday CCAs scheduled</span>
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {WEEK_DAYS.map((d) => {
              const assigned = CCA_ACTIVITIES.find((a) => a.id === daySchedule[d.dayIdx]) ?? CCA_ACTIVITIES[0];
              const isSelected = d.dayIdx === selectedDay;
              return (
                <button
                  key={d.dayIdx}
                  type="button"
                  onClick={() => setSelectedDay(d.dayIdx)}
                  className={`flex flex-col items-center rounded-xl border p-2 text-center transition ${
                    isSelected
                      ? "border-brand bg-brand-soft text-brand shadow-sm"
                      : d.isWeekend
                        ? "border-line bg-accent-soft/50 text-ink hover:border-accent"
                        : "border-line bg-surface text-ink hover:bg-surface-2"
                  }`}
                >
                  <span className="text-xs font-extrabold">{d.zh}</span>
                  {showPinyin ? <span className="text-[10px] text-ink-2">{d.shortEn}</span> : null}
                  <span className="my-1.5 text-2xl leading-none" aria-hidden>
                    {assigned.icon}
                  </span>
                  <span className="line-clamp-1 text-[11px] font-bold">{assigned.zh}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Activity picker + Frequency meter */}
        <div className="grid gap-4 rounded-2xl border border-line bg-surface-2 p-4 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              2. Activity for {activeDay.zh} ({activeDay.shortEn})
            </div>
            <div className="flex flex-wrap gap-1.5">
              {CCA_ACTIVITIES.map((act) => {
                const active = act.id === activeAct.id;
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => {
                      setDaySchedule((prev) => ({ ...prev, [selectedDay]: act.id }));
                      speakChinese(act.zh);
                    }}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                      active
                        ? "border-brand bg-surface text-brand shadow-sm"
                        : "border-line bg-surface text-ink-2 hover:text-ink"
                    }`}
                  >
                    <span aria-hidden>{act.icon}</span>
                    <span>{act.zh}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
                3. Frequency Meter (频率副词)
              </span>
              <span className="text-xs font-extrabold text-brand">{activeFreq.en}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {FREQUENCIES.map((f) => {
                const active = f.id === activeFreq.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => {
                      setFreqId(f.id);
                      speakChinese(f.zh);
                    }}
                    className={`rounded-lg border px-2.5 py-1.5 text-xs font-extrabold transition ${
                      active
                        ? "border-brand bg-brand text-white shadow-sm"
                        : "border-line bg-surface text-ink hover:bg-surface-2"
                    }`}
                  >
                    {f.zh}
                    {showPinyin ? <span className="ml-1 font-normal opacity-85">({f.py})</span> : null}
                  </button>
                );
              })}
            </div>
            {/* Visual frequency bar */}
            <div className="mt-2 space-y-1">
              <div className="h-3 w-full overflow-hidden rounded-full border border-line bg-surface">
                <div
                  className={`h-full transition-all duration-300 ${activeFreq.barClass}`}
                  style={{ width: `${Math.max(activeFreq.pct, 4)}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-semibold text-ink-2">
                <span>0% 从不</span>
                <span>50% 有时候</span>
                <span>100% 总是</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekend Plan Builder */}
        <div className="space-y-3 rounded-2xl border border-line bg-surface p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-brand">
              4. Special Weekend Outing Generator (这个周末打算做什么？)
            </span>
            <Segmented
              label="Weekend day"
              value={weekendDay}
              onChange={setWeekendDay}
              options={[
                { value: "sat", label: "这个星期六" },
                { value: "sun", label: "这个星期天" },
              ]}
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="space-y-1">
              <div className="text-xs font-bold text-ink-2">Intention Verb (意愿动词)</div>
              <div className="flex flex-wrap gap-1.5">
                {INTENTIONS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIntentionId(item.id)}
                    className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                      intentionId === item.id
                        ? "border-brand bg-brand-soft text-brand"
                        : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                    }`}
                  >
                    {item.zh}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold text-ink-2">With Whom (跟谁一起)</div>
              <div className="flex flex-wrap gap-1.5">
                {COMPANIONS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCompanionId(c.id)}
                    className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                      companionId === c.id
                        ? "border-brand bg-brand-soft text-brand"
                        : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                    }`}
                  >
                    {c.zh}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold text-ink-2">Singapore Destination (地点与活动)</div>
              <div className="flex flex-wrap gap-1.5">
                {WEEKEND_OUTINGS.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setOutingId(o.id)}
                    className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                      outingId === o.id
                        ? "border-brand bg-brand-soft text-brand"
                        : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                    }`}
                  >
                    {o.icon} {o.placeZh}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Sentence Contrast Cards */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-good-soft/50 p-3.5">
            <div className="mb-1 flex items-center justify-between gap-2">
              <span className="chip border-good/40 bg-surface text-good">Routine Habit · 日常习惯</span>
              <SpeakButtons text={habitSentenceZh} compact />
            </div>
            <p className="text-lg font-extrabold text-ink">{habitSentenceZh}</p>
            {showPinyin ? <p className="mt-0.5 text-xs font-semibold text-brand">{habitSentencePy}</p> : null}
            <p className="mt-1 text-xs text-ink-2">{habitSentenceEn}</p>
          </div>

          <div className="rounded-2xl border border-brand/30 bg-brand-soft/40 p-3.5">
            <div className="mb-1 flex items-center justify-between gap-2">
              <span className="chip border-brand/40 bg-surface text-brand">Weekend Plan · 周末计划</span>
              <SpeakButtons text={planSentenceZh} compact />
            </div>
            <p className="text-lg font-extrabold text-ink">{planSentenceZh}</p>
            {showPinyin ? <p className="mt-0.5 text-xs font-semibold text-brand">{planSentencePy}</p> : null}
            <p className="mt-1 text-xs text-ink-2">{planSentenceEn}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Selected Day" value={`${activeDay.zh} ${activeAct.icon}`} tone="ink" />
          <Readout label="Frequency Slot" value={`${activeFreq.zh} + Verb`} tone="good" />
          <Readout label="Weekend Pattern" value={`${activeIntention.zh} + 跟…一起`} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Friend Invitation Chat Simulator (我们一起去…好吗？)
// ---------------------------------------------------------------------------

interface InvitePlace {
  id: string;
  nameZh: string;
  namePy: string;
  actZh: string;
  actPy: string;
  en: string;
  meetSpotZh: string;
  meetSpotPy: string;
  meetSpotEn: string;
}

const INVITE_PLACES: InvitePlace[] = [
  {
    id: "orchard",
    nameZh: "乌节路",
    namePy: "Wūjié Lù",
    actZh: "逛街买东西",
    actPy: "guàngjiē mǎi dōngxi",
    en: "Orchard Road to go shopping",
    meetSpotZh: "乌节地铁站",
    meetSpotPy: "Wūjié dìtiězhàn",
    meetSpotEn: "Orchard MRT station",
  },
  {
    id: "sentosa",
    nameZh: "圣淘沙",
    namePy: "Shèngtáoshā",
    actZh: "去海边游泳",
    actPy: "qù hǎibiān yóuyǒng",
    en: "Sentosa to swim at the beach",
    meetSpotZh: "怡丰城门口",
    meetSpotPy: "Yífēngchéng ménkǒu",
    meetSpotEn: "the entrance of VivoCity",
  },
  {
    id: "cinema",
    nameZh: "电影院",
    namePy: "diànyǐngyuàn",
    actZh: "看新的中国电影",
    actPy: "kàn xīn de Zhōngguó diànyǐng",
    en: "the cinema to watch a new Chinese movie",
    meetSpotZh: "电影院门口",
    meetSpotPy: "diànyǐngyuàn ménkǒu",
    meetSpotEn: "the cinema entrance",
  },
];

const INVITE_TIMES = [
  { id: "sat-pm", zh: "这个星期六下午两点", py: "zhège Xīngqīliù xiàwǔ liǎng diǎn", en: "this Saturday at 2:00 pm" },
  { id: "sun-am", zh: "这个星期天上午十点", py: "zhège Xīngqītiān shàngwǔ shí diǎn", en: "this Sunday at 10:00 am" },
  { id: "fri-after", zh: "星期五放学以后", py: "Xīngqīwǔ fàngxué yǐhòu", en: "Friday after school" },
];

const INVITE_TAGS = [
  { id: "haoma", zh: "好吗？", py: "hǎo ma?", en: "is that okay?" },
  { id: "zenmeyang", zh: "怎么样？", py: "zěnmeyàng?", en: "how about that?" },
  { id: "xingma", zh: "行吗？", py: "xíng ma?", en: "does that work?" },
];

type ReplyOutcome = "accept" | "reschedule" | "decline";

interface ChatMessage {
  sender: "me" | "friend";
  zh: string;
  py: string;
  en: string;
  badge: string;
}

function FriendInvitationChat() {
  const showPinyin = usePinyinVisible();
  const [placeId, setPlaceId] = useState<string>("orchard");
  const [timeId, setTimeId] = useState<string>("sat-pm");
  const [tagId, setTagId] = useState<string>("haoma");
  const [outcome, setOutcome] = useState<ReplyOutcome>("accept");

  const place = INVITE_PLACES.find((p) => p.id === placeId) ?? INVITE_PLACES[0];
  const time = INVITE_TIMES.find((t) => t.id === timeId) ?? INVITE_TIMES[0];
  const tag = INVITE_TAGS.find((t) => t.id === tagId) ?? INVITE_TAGS[0];

  const msg1: ChatMessage = {
    sender: "me",
    badge: "1 · Check free time (问有没有空)",
    zh: `美玲，你${time.zh}有空吗？`,
    py: `Měilíng, nǐ ${time.py} yǒu kòng ma?`,
    en: `Meiling, are you free ${time.en}?`,
  };

  const msg2: ChatMessage = {
    sender: "me",
    badge: "2 · Polite invite (我们一起…好吗？)",
    zh: `我们一起去${place.nameZh}${place.actZh}，${tag.zh}`,
    py: `Wǒmen yìqǐ qù ${place.namePy} ${place.actPy}, ${tag.py}`,
    en: `Shall we go together to ${place.en} — ${tag.en}`,
  };

  const msg3: ChatMessage =
    outcome === "accept"
      ? {
          sender: "friend",
          badge: "3 · Enthusiastic Accept (高兴接受)",
          zh: "太好了！我有空，我也想去！我们几点在哪里见面？",
          py: "Tài hǎo le! Wǒ yǒu kòng, wǒ yě xiǎng qù! Wǒmen jǐ diǎn zài nǎlǐ jiànmiàn?",
          en: "Awesome! I'm free and I'd love to go too! What time and where shall we meet?",
        }
      : outcome === "reschedule"
        ? {
            sender: "friend",
            badge: "3 · Suggest New Time (改时间)",
            zh: "不好意思，那个时候我有钢琴课。星期天下午三点去，怎么样？",
            py: "Bù hǎoyìsi, nàge shíhou wǒ yǒu gāngqín kè. Xīngqītiān xiàwǔ sān diǎn qù, zěnmeyàng?",
            en: "Sorry, I have a piano lesson then. How about going on Sunday at 3:00 pm?",
          }
        : {
            sender: "friend",
            badge: "3 · Polite Decline + Reason (礼貌拒绝)",
            zh: "不好意思，我这个周末有事，得在家复习中文考试。我们下个周末再去吧！",
            py: "Bù hǎoyìsi, wǒ zhège zhōumò yǒu shì, děi zài jiā fùxí Zhōngwén kǎoshì. Wǒmen xià ge zhōumò zài qù ba!",
            en: "Sorry, I have something on this weekend and must revise for my Chinese test at home. Let's go next weekend instead!",
          };

  const msg4: ChatMessage =
    outcome === "accept"
      ? {
          sender: "me",
          badge: "4 · Confirm Meeting Place (确定见面地点)",
          zh: `我们在${place.meetSpotZh}见面吧，不见不散！`,
          py: `Wǒmen zài ${place.meetSpotPy} jiànmiàn ba, bú jiàn bú sàn!`,
          en: `Let's meet at ${place.meetSpotEn} — see you there!`,
        }
      : outcome === "reschedule"
        ? {
            sender: "me",
            badge: "4 · Agree to New Plan (同意新时间)",
            zh: `好啊，没问题！那我们星期天下午三点在${place.meetSpotZh}见！`,
            py: `Hǎo a, méi wèntí! Nà wǒmen Xīngqītiān xiàwǔ sān diǎn zài ${place.meetSpotPy} jiàn!`,
            en: `Sure, no problem! Then let's meet Sunday at 3:00 pm at ${place.meetSpotEn}!`,
          }
        : {
            sender: "me",
            badge: "4 · Warm Understanding (礼貌回应)",
            zh: "没关系！祝你考试顺利，我们下个星期六再一起去！",
            py: "Méi guānxi! Zhù nǐ kǎoshì shùnlì, wǒmen xià ge Xīngqīliù zài yìqǐ qù!",
            en: "No worries! Good luck with your test — let's go together next Saturday!",
          };

  const messages = [msg1, msg2, msg3, msg4];
  const fullTranscriptZh = messages.map((m) => m.zh).join(" ");

  return (
    <WidgetFrame
      title="微信约朋友模拟器 · Friend Invitation Chat (`我们一起去…好吗？`)"
      tryThis={[
        "Pick **乌节路** (Orchard Rd), **圣淘沙** (Sentosa), or **电影院** (Cinema) and swap the invitation tag between **好吗？** and **怎么样？**.",
        "Switch Meiling's reply between **Accept (太好了！)**, **Reschedule (改时间)**, and **Polite Decline (不好意思，我有事)**.",
        "Notice how a polite Chinese refusal NEVER just says *不要* — it softens with **不好意思** + reason + **下次吧**!",
      ]}
      caption={
        <span>
          <strong>Golden invitation formula:</strong> Check availability first (<strong>你 + Time + 有空吗？</strong>), then
          propose together (<strong>我们一起去 + Place + Action，好吗？</strong>).
        </span>
      }
    >
      <div className="space-y-4">
        {/* Controls */}
        <div className="grid gap-3 rounded-2xl border border-line bg-surface-2 p-3.5 sm:grid-cols-3">
          <div className="space-y-1.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Where to Go (去哪里)</div>
            <div className="flex flex-col gap-1.5">
              {INVITE_PLACES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPlaceId(p.id)}
                  className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-bold transition ${
                    placeId === p.id
                      ? "border-brand bg-surface text-brand shadow-sm"
                      : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  <div>{p.nameZh} · {p.actZh}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">When & Question Tag</div>
            <div className="flex flex-col gap-1.5">
              {INVITE_TIMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTimeId(t.id)}
                  className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-bold transition ${
                    timeId === t.id
                      ? "border-brand bg-surface text-brand shadow-sm"
                      : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  {t.zh}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-1 pt-1">
              {INVITE_TAGS.map((tg) => (
                <button
                  key={tg.id}
                  type="button"
                  onClick={() => setTagId(tg.id)}
                  className={`rounded-md border px-2 py-1 text-xs font-bold transition ${
                    tagId === tg.id ? "border-brand bg-brand text-white" : "border-line bg-surface text-ink-2"
                  }`}
                >
                  {tg.zh}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Friend&apos;s Reply (美玲的回答)</div>
            <div className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => setOutcome("accept")}
                className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-bold transition ${
                  outcome === "accept"
                    ? "border-good bg-good-soft text-good"
                    : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                ✅ Accept · 太好了！我有空
              </button>
              <button
                type="button"
                onClick={() => setOutcome("reschedule")}
                className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-bold transition ${
                  outcome === "reschedule"
                    ? "border-warn bg-warn-soft text-warn"
                    : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                🔄 Reschedule · 改星期天去怎么样？
              </button>
              <button
                type="button"
                onClick={() => setOutcome("decline")}
                className={`rounded-lg border px-2.5 py-1.5 text-left text-xs font-bold transition ${
                  outcome === "decline"
                    ? "border-bad bg-bad-soft text-bad"
                    : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                🙏 Polite Decline · 不好意思，我有事
              </button>
            </div>
          </div>
        </div>

        {/* Phone Chat Window */}
        <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
          <div className="flex items-center justify-between border-b border-line bg-surface-2 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-sm font-extrabold text-brand">
                美
              </span>
              <div>
                <div className="text-sm font-extrabold text-ink">美玲 (Meiling) · 微信聊天</div>
                <div className="text-[11px] text-ink-2">Tap 🔊 on any bubble or listen to the whole chat</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-ink-2">Full chat:</span>
              <SpeakButtons text={fullTranscriptZh} compact />
            </div>
          </div>

          <div className="space-y-3 p-4">
            {messages.map((m, idx) => {
              const isMe = m.sender === "me";
              return (
                <div key={idx} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                  <span className="mb-1 text-[11px] font-bold text-ink-2">{m.badge}</span>
                  <div
                    className={`max-w-[90%] rounded-2xl border px-3.5 py-2.5 sm:max-w-[80%] ${
                      isMe
                        ? "rounded-tr-sm border-brand/30 bg-brand-soft/50 text-ink"
                        : "rounded-tl-sm border-line bg-surface-2 text-ink"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-base font-extrabold leading-snug">{m.zh}</p>
                      <SpeakButtons text={m.zh} compact />
                    </div>
                    {showPinyin ? <p className="mt-1 text-xs font-semibold text-brand">{m.py}</p> : null}
                    <p className="mt-1 text-xs text-ink-2">{m.en}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "weekly-cca-weekend-planner",
    title: "Weekly CCA & Weekend Timetable Planner",
    blurb: "Schedule Mon–Sun Singapore CCAs with frequency adverbs (总是 → 从不) and contrast routine habits against 打算 + 跟…一起 weekend plans.",
    Component: WeeklyCcaPlanner,
  },
  {
    id: "friend-invitation-chat",
    title: "Friend Invitation Chat Simulator (我们一起去…好吗？)",
    blurb: "Roleplay inviting a friend to Orchard Road, Sentosa, or the cinema — practising time, place, 跟…一起, and polite accept/decline replies.",
    Component: FriendInvitationChat,
  },
];
