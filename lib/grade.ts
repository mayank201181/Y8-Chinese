// Instant self-assessment of written answers against a keyword mark scheme.
// Chinese-aware: mark-scheme points may embed {{汉字|pinyin|gloss}} chunks; the
// hanzi (and its pinyin, tone-marks stripped) count as the keywords for that point.

export type GradeVerdict = "correct" | "partial" | "needs-work";

export interface GradeResult {
  verdict: GradeVerdict;
  hit: number;
  total: number;
  matchedPoints: boolean[];
}

const CHUNK_RE = /\{\{([^|{}]+)\|([^|{}]+)(?:\|([^{}]+))?\}\}/g;

const TONE_MAP: Record<string, string> = {
  ā: "a", á: "a", ǎ: "a", à: "a",
  ē: "e", é: "e", ě: "e", è: "e",
  ī: "i", í: "i", ǐ: "i", ì: "i",
  ō: "o", ó: "o", ǒ: "o", ò: "o",
  ū: "u", ú: "u", ǔ: "u", ù: "u",
  ǖ: "v", ǘ: "v", ǚ: "v", ǜ: "v", ü: "v",
};

function stripTones(s: string): string {
  return s
    .toLowerCase()
    .split("")
    .map((c) => TONE_MAP[c] ?? c)
    .join("");
}

function normalize(s: string): string {
  return stripTones(s)
    .replace(/[，。！？、；：""''．,.!?;:'"()（）\s]/g, "")
    .toLowerCase();
}

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "of", "to", "in", "on", "at", "is", "are",
  "was", "were", "it", "that", "this", "with", "for", "as", "by", "be", "use",
  "uses", "using", "say", "says", "e.g", "eg", "i.e", "ie", "must", "should",
  "answer", "mention", "mentions", "correct", "correctly", "word", "any",
  "one", "two", "e", "g", "chinese", "sentence", "phrase", "means", "meaning",
]);

/** Keywords for one mark-scheme point: hanzi chunks + pinyin + significant English words. */
function keywordsFor(point: string): { zh: string[]; latin: string[] } {
  const zh: string[] = [];
  const latin: string[] = [];
  let rest = point;
  for (const m of point.matchAll(CHUNK_RE)) {
    zh.push(m[1]);
    latin.push(normalize(m[2]));
    rest = rest.replace(m[0], " ");
  }
  // Bare CJK sequences outside {{}} count too
  for (const m of rest.matchAll(/[一-鿿]{1,}/g)) zh.push(m[0]);
  rest = rest.replace(/[一-鿿]+/g, " ");
  // Quoted terms are explicit keywords
  for (const m of rest.matchAll(/["'“”]([^"'“”]{2,})["'“”]/g)) latin.push(normalize(m[1]));
  for (const w of rest.toLowerCase().split(/[^a-zà-ǜā-ǹ0-9]+/i)) {
    if (w.length >= 3 && !STOPWORDS.has(w)) latin.push(stripTones(w));
  }
  return { zh, latin: [...new Set(latin)].filter((w) => w.length >= 2) };
}

/** Does the learner's answer satisfy one mark-scheme point? */
function pointMatched(answerRaw: string, answerNorm: string, point: string): boolean {
  const { zh, latin } = keywordsFor(point);
  // Any hanzi keyword present -> hit
  for (const k of zh) if (answerRaw.includes(k)) return true;
  // Pinyin (tones stripped) present -> hit
  for (const k of latin) {
    if (k.length >= 2 && /[a-z]/.test(k) && answerNorm.includes(k)) return true;
  }
  return false;
}

export function gradeAnswer(answer: string, markScheme: string[]): GradeResult {
  const answerRaw = answer;
  const answerNorm = normalize(answer);
  const matchedPoints = markScheme.map((p) => pointMatched(answerRaw, answerNorm, p));
  const hit = matchedPoints.filter(Boolean).length;
  const total = markScheme.length;
  const ratio = total === 0 ? 0 : hit / total;
  const verdict: GradeVerdict =
    ratio >= 0.75 ? "correct" : ratio >= 0.35 ? "partial" : "needs-work";
  return { verdict, hit, total, matchedPoints };
}
