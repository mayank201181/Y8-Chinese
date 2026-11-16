// Client-side Mandarin Chinese text-to-speech via the Web Speech API (no network, no keys).
// Picks the best available Simplified Mandarin voice: zh-CN / zh-SG first, then any zh-* / cmn-*.

let cached: SpeechSynthesisVoice | null | undefined;

export function speechAvailable(): boolean {
  return (
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    typeof window.SpeechSynthesisUtterance === "function"
  );
}

function pickVoice(): SpeechSynthesisVoice | null {
  if (cached !== undefined && cached !== null) return cached;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const zh = voices.filter((v) => {
    const l = v.lang.toLowerCase();
    return l.startsWith("zh") || l.startsWith("cmn");
  });
  const score = (v: SpeechSynthesisVoice) => {
    const l = v.lang.toLowerCase();
    const langScore = l === "zh-cn" || l === "zh_cn" ? 5 : l === "zh-sg" || l === "cmn-hans-cn" ? 4 : l.includes("tw") || l.includes("hk") ? 1 : 2;
    const nameScore = /xiaoxiao|yunxi|ting-ting|tingting|meijia|lili|google|neural|natural|premium|enhanced/i.test(v.name) ? 3 : 0;
    return langScore + nameScore + (v.localService ? 1 : 0);
  };
  cached = zh.sort((a, b) => score(b) - score(a))[0] ?? null;
  return cached;
}

/** Extract clean speakable text (strip markdown formatting). */
function cleanMandarinText(text: string): string {
  return text
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Speak Mandarin Chinese text (`zh-CN`).
 * Normal pace = 0.9; `slow: true` = 0.55 for clear tone & syllable listening.
 */
export function speakChinese(text: string, opts: { slow?: boolean; onEnd?: () => void } = {}): boolean {
  if (!speechAvailable()) return false;
  const cleaned = cleanMandarinText(text);
  if (!cleaned) return false;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(cleaned);
  u.lang = "zh-CN";
  const v = pickVoice();
  if (v) u.voice = v;
  u.rate = opts.slow ? 0.55 : 0.9;
  if (opts.onEnd) u.onend = opts.onEnd;
  synth.speak(u);
  return true;
}

/** Alias kept for shared widget compatibility if needed. */
export const speakSpanish = speakChinese;

export function hasChineseVoice(): boolean {
  return speechAvailable() && !!pickVoice();
}
