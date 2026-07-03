import type { MCQ, QA, Topic } from "./types";
import { greetings } from "./topics/greetings";
import { family } from "./topics/family";
import { school } from "./topics/school";
import { hobbies } from "./topics/hobbies";
import { food } from "./topics/food";
import { shopping } from "./topics/shopping";
import { dailyRoutine } from "./topics/daily-routine";
import { weather } from "./topics/weather";
import { travel } from "./topics/travel";
import { home } from "./topics/home";
import { health } from "./topics/health";
import { festivals } from "./topics/festivals";

// Card metadata for all 12 topics — rendered on the home grid even before a
// topic's content module lands (unloaded ones show as "coming soon").
export const TOPIC_META: {
  id: string;
  title: string;
  hanzi: string;
  pinyin: string;
  icon: string;
  color: string;
  blurb: string;
}[] = [
  { id: "greetings", title: "Greetings & Introducing Yourself", hanzi: "问候", pinyin: "wènhòu", icon: "👋", color: "rose", blurb: "Hello, names, ages and your first real conversation." },
  { id: "family", title: "Family & Friends", hanzi: "家人", pinyin: "jiārén", icon: "👨‍👩‍👧‍👦", color: "amber", blurb: "Talk about who's in your family and describe people." },
  { id: "school", title: "School Life", hanzi: "学校", pinyin: "xuéxiào", icon: "🏫", color: "sky", blurb: "Subjects, timetables, teachers and opinions about school." },
  { id: "hobbies", title: "Hobbies & Free Time", hanzi: "爱好", pinyin: "àihào", icon: "⚽", color: "emerald", blurb: "Sports, music, screens — say what you love (and hate) doing." },
  { id: "food", title: "Food & Drink", hanzi: "饮食", pinyin: "yǐnshí", icon: "🥟", color: "orange", blurb: "Order food, talk taste, and survive a Chinese menu." },
  { id: "shopping", title: "Shopping & Money", hanzi: "购物", pinyin: "gòuwù", icon: "🛍️", color: "fuchsia", blurb: "Prices, bargaining, colours, sizes and spending pocket money." },
  { id: "daily-routine", title: "Daily Routine, Time & Dates", hanzi: "日常", pinyin: "rìcháng", icon: "⏰", color: "violet", blurb: "Clock times, dates, days — and describing your whole day." },
  { id: "weather", title: "Weather & Seasons", hanzi: "天气", pinyin: "tiānqì", icon: "🌦️", color: "cyan", blurb: "Forecasts, seasons and comparing hot Singapore with snowy Beijing." },
  { id: "travel", title: "Travel & Transport", hanzi: "交通", pinyin: "jiāotōng", icon: "🚄", color: "blue", blurb: "Getting around, directions, holidays and journeys." },
  { id: "home", title: "Home & Neighbourhood", hanzi: "家", pinyin: "jiā", icon: "🏠", color: "lime", blurb: "Rooms, furniture, where you live and what's nearby." },
  { id: "health", title: "Health & Body", hanzi: "健康", pinyin: "jiànkāng", icon: "🩺", color: "red", blurb: "Body parts, feeling ill, the doctor and staying healthy." },
  { id: "festivals", title: "Chinese Festivals & Culture", hanzi: "节日", pinyin: "jiérì", icon: "🏮", color: "yellow", blurb: "Chinese New Year, mooncakes, red packets and traditions." },
];

export const TOPICS: Topic[] = [
  greetings,
  family,
  school,
  hobbies,
  food,
  shopping,
  dailyRoutine,
  weather,
  travel,
  home,
  health,
  festivals,
];

export const TOPIC_BY_ID: Record<string, Topic> = Object.fromEntries(
  TOPICS.map((t) => [t.id, t])
);

export interface IndexedQuestion {
  qid: string;
  kind: "mcq" | "qa";
  topicId: string | null; // null => comprehensive exam
  q: MCQ | QA;
}

function* allQuestions(): Generator<IndexedQuestion> {
  for (const t of TOPICS) {
    for (const q of t.quiz.mcq) yield { qid: q.id, kind: "mcq", topicId: t.id, q };
    for (const q of t.quiz.qa) yield { qid: q.id, kind: "qa", topicId: t.id, q };
    for (const p of t.questionBank.mcqPapers)
      for (const q of p.questions) yield { qid: q.id, kind: "mcq", topicId: t.id, q };
    for (const p of t.questionBank.qaPapers)
      for (const q of p.questions) yield { qid: q.id, kind: "qa", topicId: t.id, q };
  }
}

export const QUESTION_INDEX: Record<string, IndexedQuestion> = (() => {
  const idx: Record<string, IndexedQuestion> = {};
  const dupes: string[] = [];
  for (const iq of allQuestions()) {
    if (idx[iq.qid]) dupes.push(iq.qid);
    idx[iq.qid] = iq;
  }
  if (dupes.length && typeof console !== "undefined") {
    console.warn("Duplicate question ids:", dupes);
  }
  return idx;
})();
