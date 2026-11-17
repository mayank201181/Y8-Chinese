import type { WrittenQ } from "./types.ts";
import { normMandarin } from "./chinese/pinyin.ts";

const IDK_RE =
  /^(?:我?不知道|我?不懂|我?不会(?:写|做|说|答)?|不清楚|没写|没有答案|i\s*don'?t\s*know|do\s*not\s*know|idk|no\s*idea|not\s*sure|none|nothing|n\/?a|pass)$/i;

function stripMd(s: string): string {
  return s
    .replace(/\*\*|\*|`|__/g, "")
    .replace(/^\s*(?:[-•>]|(?:\d+|[a-zA-Z])[.)])\s*/gm, "");
}

function foldForMatch(x: string): string {
  return x
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/**
 * Suggest self-assessment ticks for a WrittenQ response.
 * - Rejects blank / "I don't know" / "我不知道" non-answers (0 marks).
 * - Strips verbatim lines/questions copied from `q.question` so pasting the prompt earns 0 marks.
 * - Matches mark-scheme keywords (accent- and case-insensitive, word-bounded for short Latin tokens).
 */
export function suggestMarks(q: WrittenQ, text: string): boolean[] {
  const zero = () => q.markScheme.map(() => false);
  const raw = (text ?? "").trim();
  if (!raw) return zero();

  const normRaw = normMandarin(raw);
  if (!normRaw || IDK_RE.test(normRaw)) return zero();

  const plainPrompt = stripMd(q.question);
  if (normRaw === normMandarin(plainPrompt)) return zero();

  // Scrub verbatim lines and sentences copied directly from the prompt.
  let working = stripMd(raw);
  const promptChunks = new Set<string>();
  for (const line of plainPrompt.split(/\n+/)) {
    const t = line.trim();
    if (t.length >= 6) promptChunks.add(t);
    for (const clause of t.split(/[。？！?!;；]+/)) {
      const c = clause.trim();
      if (c.length >= 5 || (c.length >= 4 && /[你几哪吗…]/.test(c))) {
        promptChunks.add(c);
      }
    }
  }
  for (const chunk of [...promptChunks].sort((a, b) => b.length - a.length)) {
    if (chunk && working.includes(chunk)) {
      working = working.split(chunk).join(" ");
    }
  }

  const normWorking = normMandarin(working);
  if (!normWorking || IDK_RE.test(normWorking)) return zero();

  const t = ` ${foldForMatch(working)} `;
  const hit = (k: string) => {
    const f = foldForMatch(k).trim();
    if (!f) return false;
    if (f.length > 3 || /[\u4e00-\u9fff]/.test(f)) {
      return t.includes(f);
    }
    const esc = f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z0-9])${esc}([^a-z0-9]|$)`).test(t);
  };
  return q.markScheme.map((p) => p.keywords.some((k) => k && hit(k)));
}
