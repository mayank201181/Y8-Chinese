// Core content types for the Year 8 Chinese Lab (Cambridge IGCSE 0547 pathway).
//
// Chinese text convention: any prose field (question, body, explanation, options,
// hints, model answers…) may embed inline Chinese using the syntax
//   {{汉字|pīnyīn}}  or  {{汉字|pīnyīn|english gloss}}
// The renderer turns this into <ruby> with toggleable pinyin. Plain-text fields
// that are *only* Chinese (e.g. VocabItem.hanzi) keep hanzi and pinyin separate.

export type Difficulty = "warmup" | "core" | "challenge";

export interface Diagram {
  id: string;
  title: string;
  svg: string; // inline SVG with viewBox, xmlns, role="img", aria-label; no backticks or ${
  caption?: string;
}

export interface VocabItem {
  hanzi: string;
  pinyin: string;
  english: string;
  pos?: string; // part of speech, e.g. "noun", "verb", "measure word"
  example?: { hanzi: string; pinyin: string; english: string };
}

export interface SentencePattern {
  pattern: string; // e.g. "Subject + 在 + place + verb"
  example: { hanzi: string; pinyin: string; english: string };
  note?: string;
}

export interface GuideSection {
  heading: string;
  body: string; // markdown-lite (paragraphs, **bold**, - bullets) + {{hanzi|pinyin|gloss}} inline
  vocab?: VocabItem[];
  patterns?: SentencePattern[];
  diagrams?: Diagram[];
  keyPoints?: string[];
  thinkDeeper?: string;
  // AoPS pedagogy:
  discovery?: { problem: string; idea: string };
  strategies?: string[];
  whyItWorks?: string;
}

export interface MCQ {
  id: string; // globally unique, e.g. "greet-mcq-a-q01"
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  guideRef?: string; // heading of the guide section that teaches this
  difficulty?: Difficulty;
  hints?: string[]; // gentle nudge -> bigger hint -> key step
  strategy?: string;
}

export interface QA {
  id: string;
  question: string;
  modelAnswer: string;
  markScheme: string[]; // keyword/point-based; used by lib/grade.ts self-assessment
  commonError?: string;
  guideRef?: string;
  difficulty?: Difficulty;
  hints?: string[];
  strategy?: string;
  solutions?: { label: string; steps: string[] }[]; // alternative worked methods
}

export interface Paper<T> {
  id: string;
  title: string;
  description?: string;
  questions: T[];
}

export interface LearnSmart {
  vocab: VocabItem[]; // the topic's full flashcard deck
  patterns: SentencePattern[];
  mnemonics?: { hanzi: string; tip: string }[];
}

export interface Topic {
  id: string;
  title: string;
  titleChinese: { hanzi: string; pinyin: string };
  subject: "chinese";
  icon: string; // emoji for topic cards
  color: string; // tailwind-friendly accent, e.g. "rose"
  intro: string;
  guide: GuideSection[];
  learn: LearnSmart;
  quiz: { mcq: MCQ[]; qa: QA[] };
  questionBank: { mcqPapers: Paper<MCQ>[]; qaPapers: Paper<QA>[] };
}

export interface ComprehensiveExam {
  mcqPapers: Paper<MCQ>[];
  qaPapers: Paper<QA>[];
}

// ---- Engagement extras (kept separate from audited content; lib/extras/<id>.ts) ----

export interface TopicExtras {
  topicId: string;
  hook?: string; // one-liner banner at the top of the guide
  didYouKnow?: string[];
  activities?: { title: string; steps: string[] }[]; // "try this at home"
  bonusDiagrams?: Diagram[];
  interactives?: string[]; // keys into the explorables registry
}
