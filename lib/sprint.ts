// ---------------------------------------------------------------------------
// 60-second Fluency Sprint: quick-fire Mandarin — vocabulary, toned Pinyin,
// measure words (量词) and grammar particles (不/没/了/过/正在/会).
// Pure TypeScript (no React) so it can be unit-tested directly by Node.
// ---------------------------------------------------------------------------
import type { Rng } from "./drills/types.ts";
import type { VocabGroup, VocabItem } from "./types.ts";
import { MEASURE_WORDS, PARTICLE_DRILL_BANK } from "./chinese/grammar.ts";

export type SprintMode = "vocab" | "pinyin" | "classifiers" | "particles" | "mixed";
/** A mode that produces facts directly (everything except "mixed"). */
export type SprintFactMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["vocab", "pinyin", "classifiers", "particles", "mixed"];
const FACT_MODES: readonly SprintFactMode[] = ["vocab", "pinyin", "classifiers", "particles"];

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  /** Sample prompt + answer. */
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  vocab: {
    label: "Vocabulary (英 → 中)",
    icon: "🗣️",
    description: "English → Mandarin across all 12 Year 8 topics. Type Simplified Hanzi or toned Pinyin!",
    example: "to rain → 下雨 / xià yǔ",
  },
  pinyin: {
    label: "Hanzi → Pinyin (拼音)",
    icon: "🎵",
    description: "See the Simplified characters and type the toned Pinyin (tone keys or xia4 yu3).",
    example: "下雨 → xià yǔ (or xia4 yu3)",
  },
  classifiers: {
    label: "Measure Words (量词)",
    icon: "🧮",
    description: "Pick the exact Mandarin classifier: 个, 口, 本, 杯, 碗, 盘, 件, 条, 双, 只, 张…",
    example: "一 ___ 书 (book) → 本 / běn",
  },
  particles: {
    label: "Particles & Grammar",
    icon: "⏳",
    description: "Quick-fire 不 vs 没, 了 vs 过 vs 正在, 比 comparisons, 打 vs 踢, and 穿 vs 戴.",
    example: "我昨天 ___ 去学校 → 没",
  },
  mixed: {
    label: "Mixed Mandarin",
    icon: "🐉",
    description: "Vocab, Pinyin tones, measure words and particles shuffled together — true fluency!",
    example: "下雨 · 一___面条 · 不 vs 没 → …",
  },
};

export interface SprintItem {
  prompt: string;
  /** Every accepted typed answer (checked with checkAnswer text spec: Hanzi or toned Pinyin). */
  answer: string[];
  /** Optional unit/suffix. */
  suffix?: string;
  /** Fact shown after answering, e.g. "下雨 (xià yǔ) = to rain". */
  fact: string;
  mode: SprintFactMode;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const FALLBACK_VOCAB: VocabItem[] = [
  { hanzi: "下雨", pinyin: "xià yǔ", english: "to rain", pos: "verb" },
  { hanzi: "晴天", pinyin: "qíngtiān", english: "sunny day", pos: "noun" },
  { hanzi: "刮风", pinyin: "guā fēng", english: "windy", pos: "verb" },
  { hanzi: "春天", pinyin: "chūntiān", english: "spring", pos: "noun" },
  { hanzi: "冬天", pinyin: "dōngtiān", english: "winter", pos: "noun" },
  { hanzi: "感冒", pinyin: "gǎnmào", english: "cold / flu", pos: "verb" },
  { hanzi: "发烧", pinyin: "fāshāo", english: "to have a fever", pos: "verb" },
  { hanzi: "休息", pinyin: "xiūxi", english: "to rest", pos: "verb" },
  { hanzi: "打篮球", pinyin: "dǎ lánqiú", english: "play basketball", pos: "phrase" },
  { hanzi: "踢足球", pinyin: "tī zúqiú", english: "play football", pos: "phrase" },
  { hanzi: "游泳", pinyin: "yóuyǒng", english: "to swim", pos: "verb" },
  { hanzi: "看电影", pinyin: "kàn diànyǐng", english: "watch a film", pos: "phrase" },
  { hanzi: "草莓", pinyin: "cǎoméi", english: "strawberry", pos: "noun" },
  { hanzi: "西红柿", pinyin: "xīhóngshì", english: "tomato", pos: "noun" },
  { hanzi: "便宜", pinyin: "piányi", english: "cheap", pos: "adjective" },
  { hanzi: "面条", pinyin: "miàntiáo", english: "noodles", pos: "noun" },
  { hanzi: "饺子", pinyin: "jiǎozi", english: "dumplings", pos: "noun" },
  { hanzi: "服务员", pinyin: "fúwùyuán", english: "waiter / server", pos: "noun" },
  { hanzi: "菜单", pinyin: "càidān", english: "menu", pos: "noun" },
  { hanzi: "买单", pinyin: "mǎidān", english: "pay the bill", pos: "verb" },
];

let vocabPool: VocabItem[] = [];

/** Load vocabulary for sprint modes (called with VOCAB from the generated registry). */
export function setSprintVocab(groups: Record<string, VocabGroup[]>): void {
  const items = Object.values(groups)
    .flatMap((gs) => gs.flatMap((g) => g.items))
    .filter((it) => it.hanzi.length <= 6 && it.english.length <= 36 && !/[/(]/.test(it.hanzi));
  vocabPool = items;
}

function pool(): VocabItem[] {
  return vocabPool.length >= 10 ? vocabPool : FALLBACK_VOCAB;
}

function makeVocabItem(rng: Rng): SprintItem {
  const it = rng.pick(pool());
  const cleanEn = it.english.split(/[;/]/)[0].trim();
  return {
    prompt: `${cleanEn} *(${it.pos})*`,
    answer: [it.hanzi, it.pinyin],
    fact: `${cleanEn} → **${it.hanzi}** (*${it.pinyin}*)`,
    mode: "vocab",
  };
}

function makePinyinItem(rng: Rng): SprintItem {
  const it = rng.pick(pool());
  const shortEn = it.english.split(/[;/]/)[0].trim();
  return {
    prompt: `**${it.hanzi}** · *(${shortEn})*`,
    answer: [it.pinyin],
    fact: `**${it.hanzi}** → **${it.pinyin}** (${shortEn})`,
    mode: "pinyin",
  };
}

function makeClassifierItem(rng: Rng): SprintItem {
  const entry = rng.pick(MEASURE_WORDS);
  const noun = rng.pick(entry.nouns);
  const qty = rng.pick(["一", "两", "三"]);
  return {
    prompt: `${qty} ___ **${noun.hanzi}** *(${noun.en})*`,
    answer: [entry.mw, entry.pinyin],
    fact: `${qty}**${entry.mw}**${noun.hanzi} (*${entry.pinyin}*) — ${noun.en}`,
    mode: "classifiers",
  };
}

function makeParticleItem(rng: Rng): SprintItem {
  const p = rng.pick(PARTICLE_DRILL_BANK);
  return {
    prompt: `${p.sentence} *(${p.cue})*`,
    answer: p.accept,
    fact: `${p.sentence.replace("___", `**${p.accept[0]}**`)} — ${p.reason}`,
    mode: "particles",
  };
}

export function sprintItem(mode: SprintMode, rng: Rng): SprintItem {
  const m: SprintFactMode = mode === "mixed" ? rng.pick(FACT_MODES) : mode;
  switch (m) {
    case "vocab":
      return makeVocabItem(rng);
    case "pinyin":
      return makePinyinItem(rng);
    case "classifiers":
      return makeClassifierItem(rng);
    case "particles":
      return makeParticleItem(rng);
  }
}
