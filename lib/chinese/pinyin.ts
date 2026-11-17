// ---------------------------------------------------------------------------
// Mandarin Chinese & Pinyin utilities (pure TypeScript, client- & server-safe).
//
// Handles:
// - Tone-number Pinyin → tone-marked Pinyin ("xia4 yu3" → "xià yǔ", "nv3" → "nǚ")
// - Canonical Pinyin comparison (syllable-spacing & case agnostic, tone-strict)
// - Toneless Pinyin skeleton comparison (for the "check your tones" nudge)
// - Full-width / half-width Chinese & English punctuation normalisation
// - Opposite-term (antonym) guard so antonyms are never treated as close/typos
// ---------------------------------------------------------------------------

const TONE_MAP: Record<string, [string, string, string, string, string]> = {
  a: ["a", "ā", "á", "ǎ", "à"],
  e: ["e", "ē", "é", "ě", "è"],
  i: ["i", "ī", "í", "ǐ", "ì"],
  o: ["o", "ō", "ó", "ǒ", "ò"],
  u: ["u", "ū", "ú", "ǔ", "ù"],
  ü: ["ü", "ǖ", "ǘ", "ǚ", "ǜ"],
};

const TONED_TO_BASE: Record<string, [string, number]> = {
  ā: ["a", 1], á: ["a", 2], ǎ: ["a", 3], à: ["a", 4],
  ē: ["e", 1], é: ["e", 2], ě: ["e", 3], è: ["e", 4],
  ī: ["i", 1], í: ["i", 2], ǐ: ["i", 3], ì: ["i", 4],
  ō: ["o", 1], ó: ["o", 2], ǒ: ["o", 3], ò: ["o", 4],
  ū: ["u", 1], ú: ["u", 2], ǔ: ["u", 3], ù: ["u", 4],
  ǖ: ["ü", 1], ǘ: ["ü", 2], ǚ: ["ü", 3], ǜ: ["ü", 4],
};

export const TONE_VOWEL_GROUPS: { base: string; tones: string[] }[] = [
  { base: "a", tones: ["ā", "á", "ǎ", "à"] },
  { base: "e", tones: ["ē", "é", "ě", "è"] },
  { base: "i", tones: ["ī", "í", "ǐ", "ì"] },
  { base: "o", tones: ["ō", "ó", "ǒ", "ò"] },
  { base: "u", tones: ["ū", "ú", "ǔ", "ù"] },
  { base: "ü", tones: ["ǖ", "ǘ", "ǚ", "ǜ", "ü"] },
];

export const CHINESE_KEYPAD_EXTRAS = ["。", "？", "！", "，", "、"];

/** True if the string contains at least one CJK Unified Ideograph (Hanzi). */
export function hasHanzi(s: string): boolean {
  return /[\u4e00-\u9fff\u3400-\u4dbf]/.test(s);
}

/** True if the string contains any tone-marked Pinyin vowel. */
export function hasToneMarks(s: string): boolean {
  return /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/i.test(s);
}

/** True if the string looks like tone-numbered Pinyin, e.g. "xia4 yu3", "nv3", "ma5". */
export function hasToneNumbers(s: string): boolean {
  return !hasHanzi(s) && /(?:^|[^a-z0-9])[a-züv:]+[1-5](?=$|[^0-9])/i.test(s);
}

/** Apply a tone (1..5, where 5/0 = neutral) to a single Pinyin syllable (lowercase, u:/v normalised to ü). */
export function applyToneToSyllable(rawSyl: string, tone: number): string {
  const syl = rawSyl.replace(/u:/g, "ü").replace(/v/g, "ü");
  if (tone < 1 || tone > 4) return syl;
  // Standard Pinyin tone placement rule:
  // 1) 'a' or 'e' always takes the tone mark.
  // 2) In 'ou', 'o' takes the mark.
  // 3) Otherwise, the last vowel in the syllable takes the mark.
  let idx = syl.indexOf("a");
  if (idx < 0) idx = syl.indexOf("e");
  if (idx < 0 && syl.includes("ou")) idx = syl.indexOf("o");
  if (idx < 0) {
    for (let i = syl.length - 1; i >= 0; i--) {
      if ("iouü".includes(syl[i])) {
        idx = i;
        break;
      }
    }
  }
  if (idx < 0) return syl;
  const v = syl[idx];
  const row = TONE_MAP[v];
  if (!row) return syl;
  return syl.slice(0, idx) + row[tone] + syl.slice(idx + 1);
}

/**
 * Convert tone-number Pinyin ("xia4 yu3", "xia4yu3", "nv3 hai2", "lu:4 cha2", "ma5")
 * into standard lowercase tone-marked Pinyin ("xià yǔ", "xiàyǔ", "nǚ hái", "lǜ chá", "ma").
 * Strings without tone numbers are returned with u: → ü normalised if Pinyin-like.
 */
export function numberedToTonedPinyin(input: string): string {
  if (!input || hasHanzi(input)) return input;
  const s = input.normalize("NFC");
  if (!/[a-zA-ZüÜvV:][0-5]/.test(s)) return s;
  return s.replace(
    /([bpmfdtnlgkhjqxrzcsyw]{0,2}(?:u:|ü|v|[aeiouv])+?(?:ngr|nr|ng|n|r)?)([0-5])/gi,
    (_, syl: string, d: string) => applyToneToSyllable(syl.toLowerCase(), Number(d)),
  );
}

/** Convert full-width ASCII characters and Chinese punctuation into normalised spaces/forms. */
export function normalisePunctuation(s: string): string {
  return s
    .normalize("NFC")
    // Full-width digits & ASCII letters -> half-width
    .replace(/[\uff10-\uff19\uff21-\uff3a\uff41-\uff5a]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) - 0xfee0),
    )
    .replace(/['‘’`´]/g, "")
    .replace(/[。！？，、；：“”‘’（）《》【】「」『』·…—–\-¿?¡!.,;:"()[\]{}/\\~]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Normalise a Mandarin/Pinyin/English free-text answer:
 * - Punctuation (both Chinese full-width and English half-width) becomes spaces
 * - Spaces between CJK characters are removed ("下 雨" -> "下雨")
 * - Case is folded to lower-case
 */
export function normMandarin(s: string): string {
  const cleaned = normalisePunctuation(s).toLowerCase();
  // Remove spaces adjacent to Hanzi so "今天 下雨" and "今天下雨" match identically
  return cleaned
    .replace(/([\u4e00-\u9fff\u3400-\u4dbf])\s+(?=[\u4e00-\u9fff\u3400-\u4dbf0-9])/g, "$1")
    .replace(/([0-9])\s+(?=[\u4e00-\u9fff\u3400-\u4dbf])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Keep legacy alias so shared components importing normSpanish keep working if any. */
export const normSpanish = normMandarin;

/**
 * Canonical toned Pinyin key (syllable-space insensitive, converts tone numbers first).
 * Example: "Xià yǔ!", "xià yǔ", "xiàyǔ", "xia4 yu3", "xia4yu3" -> "xiàyǔ".
 */
export function canonPinyin(s: string): string {
  const toned = numberedToTonedPinyin(s.normalize("NFC"));
  return normalisePunctuation(toned)
    .toLowerCase()
    .replace(/u:/g, "ü")
    .replace(/\s+/g, "");
}

/**
 * Curated lexical neutral-tone equivalences (Beijing 轻声 <-> Singapore/citation tone).
 * Only the unstressed 2nd syllable varies; the 1st syllable's exact tone is strictly preserved,
 * and minimal pairs where neutral tone changes meaning (e.g. 东西 dōngxi vs dōngxī) are excluded.
 */
const LEXICAL_NEUTRAL_REWRITES: [RegExp, string][] = [
  [/bàbà/g, "bàba"],
  [/māmā/g, "māma"],
  [/gēgē/g, "gēge"],
  [/jiějiě/g, "jiějie"],
  [/dìdì/g, "dìdi"],
  [/mèimèi/g, "mèimei"],
  [/yéyé/g, "yéye"],
  [/nǎinǎi/g, "nǎinai"],
  [/shūshū/g, "shūshu"],
  [/zǎoshàng/g, "zǎoshang"],
  [/wǎnshàng/g, "wǎnshang"],
  [/xǐhuān/g, "xǐhuan"],
  [/yīfú/g, "yīfu"],
  [/shūfú/g, "shūfu"],
  [/míngzì/g, "míngzi"],
  [/rènsh[íì]/g, "rènshi"],
  [/guānxì/g, "guānxi"],
  [/kèqì/g, "kèqi"],
  [/xiūxī/g, "xiūxi"],
  [/piàoliàng/g, "piàoliang"],
  [/piányí/g, "piányi"],
  [/péngyǒu/g, "péngyou"],
  [/xuéshēng/g, "xuésheng"],
  [/xiānshēng/g, "xiānsheng"],
  [/shíhòu/g, "shíhou"],
  [/késòu/g, "késou"],
  [/pútáo/g, "pútao"],
  [/mógū/g, "mógu"],
  [/dòufǔ/g, "dòufu"],
  [/liángkuài/g, "liángkuai"],
  [/nuǎnhuó/g, "nuǎnhuo"],
  [/jiākè/g, "jiákè"],
  [/ěrduǒ/g, "ěrduo"],
  [/zuǐbā/g, "zuǐba"],
  [/tóuf[àā]/g, "tóufa"],
  [/yǎnjīng/g, "yǎnjing"],
  [/hùshì/g, "hùshi"],
  [/dǎsuàn/g, "dǎsuan"],
  [/duōshǎo/g, "duōshao"],
  [/xièxiè/g, "xièxie"],
  [/háishì/g, "háishi"],
  [/yàoshì/g, "yàoshi"],
  [/yìsī/g, "yìsi"],
  [/zhǔyì/g, "zhǔyi"],
  [/rènào/g, "rènao"],
  [/shōushí/g, "shōushi"],
  [/chuānghù/g, "chuānghu"],
  [/jiàqián/g, "jiàqian"],
  [/gùshì/g, "gùshi"],
  [/huángguā/g, "huánggua"],
  [/húluóbó/g, "húluóbo"],
  [/luóbó/g, "luóbo"],
  [/wǒmén/g, "wǒmen"],
  [/nǐmén/g, "nǐmen"],
  [/tāmén/g, "tāmen"],
  [/shénmé/g, "shénme"],
  [/zěnmé/g, "zěnme"],
  [/chàb[ùú]duō/g, "chàbuduō"],
];

/**
 * Canonical Pinyin comparison key that also forgives standard pedagogical vs orthographic
 * conventions:
 * - Beijing neutral tone vs citation tone on known lexical compounds (wǎnshang <-> wǎnshàng)
 * - 一 tone sandhi (yī <-> yí/yì) when `hasYi` is true
 * - 不 tone sandhi (bù <-> bú) when `hasBu` is true
 * - Experiential 过 (guò <-> guo) after a verb when `hasGuo` is true
 */
export function canonPinyinFlexible(
  s: string,
  opts: { hasYi?: boolean; hasBu?: boolean; hasGuo?: boolean } = {},
): string {
  let out = canonPinyin(s);
  for (const [re, rep] of LEXICAL_NEUTRAL_REWRITES) {
    out = out.replace(re, rep);
  }
  if (opts.hasYi) {
    out = out.replace(/y[íì]/g, "yī");
  }
  if (opts.hasBu) {
    out = out.replace(/bú/g, "bù");
  }
  if (opts.hasGuo && out.length > 3) {
    out = out.replace(/guò/g, "guo");
  }
  return out;
}

/**
 * Strip all Pinyin tone marks (and map ü/v/u: -> u) for the "Almost — check your tones!" nudge.
 * Example: "xià yǔ" -> "xiayu", "nǚhái" -> "nuhai", "nv hai" -> "nuhai".
 */
export function stripPinyinTones(s: string): string {
  const toned = numberedToTonedPinyin(s.normalize("NFC"));
  let out = "";
  for (const ch of normalisePunctuation(toned).toLowerCase()) {
    const mapped = TONED_TO_BASE[ch];
    if (mapped) {
      out += mapped[0] === "ü" ? "u" : mapped[0];
    } else if (ch === "ü" || ch === "v") {
      out += "u";
    } else if (ch !== " " && ch !== ":") {
      out += ch;
    }
  }
  return out;
}

/** Alias used by VocabTab / legacy callers. */
export const stripAccents = stripPinyinTones;

// ---------------------------------------------------------------------------
// Antonym guard — opposite Mandarin terms must NEVER be treated as close!
// ---------------------------------------------------------------------------

const ANTONYM_PAIRS: [string, string][] = [
  ["热", "冷"],
  ["rè", "lěng"],
  ["暖和", "凉快"],
  ["晴天", "阴天"],
  ["qíngtiān", "yīntiān"],
  ["贵", "便宜"],
  ["guì", "piányi"],
  ["早饭", "晚饭"],
  ["zǎofàn", "wǎnfàn"],
  ["早餐", "晚餐"],
  ["早上", "晚上"],
  ["上午", "下午"],
  ["昨天", "明天"],
  ["前天", "后天"],
  ["大", "小"],
  ["多", "少"],
  ["快", "慢"],
  ["高", "矮"],
  ["长", "短"],
  ["好", "坏"],
  ["酸", "甜"],
  ["饿", "饱"],
  ["渴", "饱"],
  ["穿", "脱"],
  ["穿", "戴"],
  ["chuān", "dài"],
  ["打", "踢"],
  ["dǎ", "tī"],
  ["二", "两"],
  ["èr", "liǎng"],
  ["了", "过"],
  ["le", "guò"],
  ["好吃", "好喝"],
  ["买", "卖"],
  ["去", "来"],
  ["上", "下"],
  ["左", "右"],
  ["前", "后"],
  ["里", "外"],
  ["有", "没有"],
  ["不", "没"],
  ["bù", "méi"],
  ["喜欢", "讨厌"],
  ["常常", "很少"],
  ["经常", "很少"],
  ["总是", "从不"],
  ["哥哥", "弟弟"],
  ["姐姐", "妹妹"],
  ["爸爸", "妈妈"],
  ["爷爷", "奶奶"],
  ["春天", "秋天"],
  ["夏天", "冬天"],
];

/** Returns true if `input` is a direct opposite of one of the accepted answers. */
export function isOppositeMandarin(accepted: string[], input: string): boolean {
  const normIn = normMandarin(input);
  if (!normIn) return false;
  const normAcc = new Set(accepted.map(normMandarin));
  if (normAcc.has(normIn)) return false;
  for (const [a, b] of ANTONYM_PAIRS) {
    if (normAcc.has(a) && normIn === b) return true;
    if (normAcc.has(b) && normIn === a) return true;
  }
  return false;
}

const CN_DIGITS: Record<string, number> = {
  零: 0, 〇: 0, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9,
};

const CN_MULTS: Record<string, number> = {
  十: 10, 百: 100, 千: 1000,
};

function parseChineseInt(s: string): number | null {
  if (!s) return null;
  if (s === "零" || s === "〇") return 0;
  // Pure digit string like 一九九八
  if (/^[零〇一二三四五六七八九]+$/.test(s) && s.length > 1) {
    return Number([...s].map((c) => CN_DIGITS[c]).join(""));
  }
  let total = 0;
  let section = 0;
  let curr = 0;
  let hasCurr = false;
  for (const ch of s) {
    if (ch in CN_DIGITS) {
      const d = CN_DIGITS[ch];
      if (d === 0) {
        curr = 0;
        hasCurr = false;
      } else {
        if (hasCurr) return null;
        curr = d;
        hasCurr = true;
      }
    } else if (ch in CN_MULTS) {
      const m = CN_MULTS[ch];
      if (m === 10 && !hasCurr && section === 0) {
        section += 10;
      } else {
        if (!hasCurr) return null;
        section += curr * m;
        curr = 0;
        hasCurr = false;
      }
    } else if (ch === "万") {
      section += curr;
      if (section === 0) return null;
      total += section * 10000;
      section = 0;
      curr = 0;
      hasCurr = false;
    } else {
      return null;
    }
  }
  return total + section + curr;
}

const CN_TRAILING_UNIT_RE =
  /(?:个小时|个星期|摄氏度|人民币|分钟|小时|块钱|新币|公斤|口人|个人|节课|[元块毛角分度片粒岁斤克天周月年号日人口页次道份碗杯盘瓶盒本件条双只顶副把家袋串笼壶张支棵])$/;

/**
 * Parse a Chinese numeral answer such as "十三" (13), "两" (2), "三百四十五分钟" (345),
 * "零下十三度" (-13), "十九块五" (19.5), or "十五元六角" (15.6).
 * Returns null if the string is not a clean single Chinese number.
 */
export function parseChineseNumber(raw: string): number | null {
  let s = normalisePunctuation(raw).replace(/\s+/g, "");
  if (!s) return null;
  let sign = 1;
  if (s.startsWith("零下") || s.startsWith("负")) {
    sign = -1;
    s = s.replace(/^(?:零下|负)/, "");
  }
  // Spoken/written currency decimal: 十九块五, 十五元六角, 三块八毛钱
  const moneyMatch = s.match(/^([零〇一二两三四五六七八九十百千万]+)(?:块|元)([一二三四五六七八九])(?:毛|角)?(?:钱)?$/);
  if (moneyMatch) {
    const whole = parseChineseInt(moneyMatch[1]);
    const tenths = CN_DIGITS[moneyMatch[2]];
    if (whole === null || tenths === undefined) return null;
    return sign * (whole + tenths / 10);
  }
  // Chinese decimal with 点: 十九点五(度/元...)
  s = s.replace(CN_TRAILING_UNIT_RE, "");
  const decMatch = s.match(/^([零〇一二两三四五六七八九十百千万]+)点([零〇一二三四五六七八九]+)$/);
  if (decMatch) {
    const whole = parseChineseInt(decMatch[1]);
    if (whole === null) return null;
    const fracStr = [...decMatch[2]].map((c) => CN_DIGITS[c]).join("");
    return sign * parseFloat(`${whole}.${fracStr}`);
  }
  const v = parseChineseInt(s);
  return v === null ? null : sign * v;
}
