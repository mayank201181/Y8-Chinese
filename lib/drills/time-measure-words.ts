import type { Drill, DrillItem, Rng } from "./types.ts";

const DIGITS_CN = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"] as const;
const DIGITS_PY = ["líng", "yī", "èr", "sān", "sì", "wǔ", "liù", "qī", "bā", "jiǔ"] as const;

function numToCn1To31(n: number): { hz: string; py: string } {
  if (n <= 9) return { hz: DIGITS_CN[n], py: DIGITS_PY[n] };
  if (n === 10) return { hz: "十", py: "shí" };
  if (n < 20) {
    const u = n % 10;
    const py = u === 2 ? "shí'èr" : `shí${DIGITS_PY[u]}`;
    return { hz: `十${DIGITS_CN[u]}`, py };
  }
  const t = Math.floor(n / 10);
  const u = n % 10;
  if (u === 0) return { hz: `${DIGITS_CN[t]}十`, py: `${DIGITS_PY[t]}shí` };
  const uPy = u === 2 ? "'èr" : DIGITS_PY[u];
  return { hz: `${DIGITS_CN[t]}十${DIGITS_CN[u]}`, py: `${DIGITS_PY[t]}shí${uPy}` };
}

const MONTHS_EN = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const WEEKDAYS = [
  { idx: 1, hz: "星期一", altHz: "星期一", py: "xīngqīyī", en: "Monday" },
  { idx: 2, hz: "星期二", altHz: "星期二", py: "xīngqī'èr", en: "Tuesday" },
  { idx: 3, hz: "星期三", altHz: "星期三", py: "xīngqīsān", en: "Wednesday" },
  { idx: 4, hz: "星期四", altHz: "星期四", py: "xīngqīsì", en: "Thursday" },
  { idx: 5, hz: "星期五", altHz: "星期五", py: "xīngqīwǔ", en: "Friday" },
  { idx: 6, hz: "星期六", altHz: "星期六", py: "xīngqīliù", en: "Saturday" },
  { idx: 7, hz: "星期天", altHz: "星期日", py: "xīngqītiān", en: "Sunday" },
] as const;

function ordinalEn(d: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = d % 100;
  return `${d}${s[(v - 20) % 10] || s[v] || s[0]}`;
}

const datesCalendarDrill: Drill = {
  id: "time-measure-words.dates-calendar",
  topicId: "time-measure-words",
  title: "Calendar Dates, Weekdays & Timeline Shifts",
  level: 1,
  guideRef: "dates-days",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const m = rng.int(1, 12);
      const d = rng.int(1, 28);
      const mCn = numToCn1To31(m);
      const dCn = numToCn1To31(d);
      return {
        prompt: `Write **${ordinalEn(d)} ${MONTHS_EN[m]}** in Mandarin (using **号** or **日**):`,
        answer: {
          type: "text",
          accept: [
            `${mCn.hz}月${dCn.hz}号`,
            `${mCn.hz}月${dCn.hz}日`,
            `${mCn.py} yuè ${dCn.py} hào`,
            `${mCn.py} yuè ${dCn.py} rì`,
          ],
          display: `${mCn.hz}月${dCn.hz}号 (${mCn.py} yuè ${dCn.py} hào)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${dCn.hz}号${mCn.hz}月`, `${dCn.hz}日${mCn.hz}月`] },
            feedback: "Big-to-small order! Put Month (月) BEFORE Date (号/日)!",
          },
          ...(m === 2
            ? [
                {
                  spec: { type: "text" as const, accept: [`两月${dCn.hz}号`, `两个月${dCn.hz}号`] },
                  feedback: "February is ALWAYS 二月 (never *两月* or 两个月)!",
                },
              ]
            : []),
        ],
        hint: "Mandarin date order: Month (M月) → Date (D号 / D日).",
        solution: [
          `${MONTHS_EN[m]} = Month ${m} = **${mCn.hz}月**.`,
          `${ordinalEn(d)} = **${dCn.hz}号** (or **${dCn.hz}日**) → **${mCn.hz}月${dCn.hz}号**.`,
        ],
      };
    }

    if (tier === 2) {
      const m = rng.int(1, 12);
      const d = rng.int(1, 28);
      const wd = rng.pick(WEEKDAYS);
      const mCn = numToCn1To31(m);
      const dCn = numToCn1To31(d);
      return {
        prompt: `Write **"${wd.en}, ${ordinalEn(d)} ${MONTHS_EN[m]}"** in Mandarin using **号** (remember Big → Small!):`,
        answer: {
          type: "text",
          accept: [
            `${mCn.hz}月${dCn.hz}号${wd.hz}`,
            `${mCn.hz}月${dCn.hz}号${wd.altHz}`,
            `${mCn.hz}月${dCn.hz}日${wd.hz}`,
            `${mCn.hz}月${dCn.hz}日${wd.altHz}`,
            `${mCn.py} yuè ${dCn.py} hào ${wd.py}`,
          ],
          display: `${mCn.hz}月${dCn.hz}号${wd.hz}`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${wd.hz}${mCn.hz}月${dCn.hz}号`] },
            feedback: "Weekday is smaller than Month and Date, so put 星期 at the END!",
          },
          ...(wd.idx === 7
            ? [
                {
                  spec: { type: "text" as const, accept: [`${mCn.hz}月${dCn.hz}号星期七`] },
                  feedback: "Sunday is NEVER *星期七*! Use 星期天 or 星期日.",
                },
              ]
            : []),
        ],
        hint: "Zoom from largest to smallest: Month (月) → Date (号) → Weekday (星期).",
        solution: [
          `1. Month: **${mCn.hz}月**`,
          `2. Date: **${dCn.hz}号**`,
          `3. Weekday: **${wd.hz}** → **${mCn.hz}月${dCn.hz}号${wd.hz}**.`,
        ],
      };
    }

    // tier 3: calendar shift puzzle across 前天 / 昨天 / 今天 / 明天 / 后天
    const m = rng.int(1, 12);
    const startD = rng.int(5, 24);
    const startWIdx = rng.int(0, 6); // 0..6 for Mon..Sun
    const shifts = [
      { givenHz: "今天", givenEn: "today", targetHz: "明天", targetEn: "tomorrow", delta: 1 },
      { givenHz: "今天", givenEn: "today", targetHz: "后天", targetEn: "the day after tomorrow", delta: 2 },
      { givenHz: "今天", givenEn: "today", targetHz: "昨天", targetEn: "yesterday", delta: -1 },
      { givenHz: "今天", givenEn: "today", targetHz: "前天", targetEn: "the day before yesterday", delta: -2 },
      { givenHz: "昨天", givenEn: "yesterday", targetHz: "明天", targetEn: "tomorrow", delta: 2 },
      { givenHz: "前天", givenEn: "the day before yesterday", targetHz: "今天", targetEn: "today", delta: 2 },
    ] as const;
    const sh = rng.pick(shifts);
    const endD = startD + sh.delta;
    const endWIdx = (startWIdx + sh.delta + 7) % 7;
    const startWd = WEEKDAYS[startWIdx];
    const endWd = WEEKDAYS[endWIdx];
    const mCn = numToCn1To31(m);
    const sDCn = numToCn1To31(startD);
    const eDCn = numToCn1To31(endD);

    return {
      prompt: `Calendar puzzle: **${sh.givenHz}是${mCn.hz}月${sDCn.hz}号${startWd.hz}。请问，${sh.targetHz}是几月几号星期几？** (Write in Mandarin using **号**!)`,
      answer: {
        type: "text",
        accept: [
          `${mCn.hz}月${eDCn.hz}号${endWd.hz}`,
          `${mCn.hz}月${eDCn.hz}号${endWd.altHz}`,
          `${sh.targetHz}是${mCn.hz}月${eDCn.hz}号${endWd.hz}`,
          `${sh.targetHz}是${mCn.hz}月${eDCn.hz}号${endWd.altHz}`,
          `${mCn.py} yuè ${eDCn.py} hào ${endWd.py}`,
        ],
        display: `${mCn.hz}月${eDCn.hz}号${endWd.hz}`,
      },
      hint: `Shift from ${sh.givenHz} (${sh.givenEn}) to ${sh.targetHz} (${sh.targetEn}) is ${sh.delta > 0 ? `+${sh.delta}` : sh.delta} day(s)!`,
      solution: [
        `From **${sh.givenHz}** (${sh.givenEn}) to **${sh.targetHz}** (${sh.targetEn}) shifts by **${sh.delta > 0 ? `+${sh.delta}` : sh.delta}** day(s).`,
        `Date: ${startD} ${sh.delta > 0 ? `+ ${sh.delta}` : `− ${Math.abs(sh.delta)}`} = ${endD} → **${mCn.hz}月${eDCn.hz}号**.`,
        `Weekday: ${startWd.en} shifted by ${sh.delta} → **${endWd.hz}** → **${mCn.hz}月${eDCn.hz}号${endWd.hz}**.`,
      ],
    };
  },
};

const ER_LIANG_NOUNS = [
  { mw: "个", mwPy: "gè", hz: "学生", py: "xuésheng", enSg: "student", enPl: "students" },
  { mw: "个", mwPy: "gè", hz: "朋友", py: "péngyou", enSg: "friend", enPl: "friends" },
  { mw: "本", mwPy: "běn", hz: "书", py: "shū", enSg: "book", enPl: "books" },
  { mw: "本", mwPy: "běn", hz: "词典", py: "cídiǎn", enSg: "dictionary", enPl: "dictionaries" },
  { mw: "杯", mwPy: "bēi", hz: "茶", py: "chá", enSg: "cup of tea", enPl: "cups of tea" },
  { mw: "碗", mwPy: "wǎn", hz: "米饭", py: "mǐfàn", enSg: "bowl of rice", enPl: "bowls of rice" },
  { mw: "件", mwPy: "jiàn", hz: "衬衫", py: "chènshān", enSg: "shirt", enPl: "shirts" },
  { mw: "条", mwPy: "tiáo", hz: "裤子", py: "kùzi", enSg: "pair of trousers", enPl: "pairs of trousers" },
  { mw: "双", mwPy: "shuāng", hz: "鞋", py: "xié", enSg: "pair of shoes", enPl: "pairs of shoes" },
  { mw: "张", mwPy: "zhāng", hz: "票", py: "piào", enSg: "ticket", enPl: "tickets" },
] as const;

const erVsLiangDrill: Drill = {
  id: "time-measure-words.er-vs-liang",
  topicId: "time-measure-words",
  title: "Numbers, Hundreds & 二 vs 两 Showdown",
  level: 2,
  guideRef: "er-vs-liang",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const noun = rng.pick(ER_LIANG_NOUNS);

    if (tier === 1) {
      const useTwo = rng.bool(0.55);
      if (useTwo) {
        return {
          prompt: `Translate into Mandarin using **二** or **两** accurately:\n**"2 ${noun.enPl}"**`,
          answer: {
            type: "text",
            accept: [
              `两${noun.mw}${noun.hz}`,
              `liǎng ${noun.mwPy} ${noun.py}`,
            ],
            display: `两${noun.mw}${noun.hz} (liǎng ${noun.mwPy} ${noun.py})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`二${noun.mw}${noun.hz}`] },
              feedback: `Standalone '2' before the classifier ${noun.mw} ALWAYS takes 两, never 二!`,
            },
          ],
          hint: `Standalone '2' + Measure Word (${noun.mw}) requires 两 (liǎng)!`,
          solution: [
            `Standalone 2 before classifier **${noun.mw}** uses **两**: **两${noun.mw}${noun.hz}**.`,
          ],
        };
      }
      const ordN = rng.pick([1, 2, 3, 4, 5] as const);
      const ordCn = DIGITS_CN[ordN];
      const ordPy = DIGITS_PY[ordN];
      const ordWord = ["", "first", "second", "third", "fourth", "fifth"][ordN];
      return {
        prompt: `Translate into Mandarin using the ordinal prefix **第** (*dì*):\n**"the ${ordWord} ${noun.enSg}"**`,
        answer: {
          type: "text",
          accept: [
            `第${ordCn}${noun.mw}${noun.hz}`,
            `dì-${ordPy} ${noun.mwPy} ${noun.py}`,
            `dì ${ordPy} ${noun.mwPy} ${noun.py}`,
          ],
          display: `第${ordCn}${noun.mw}${noun.hz}`,
        },
        traps:
          ordN === 2
            ? [
                {
                  spec: { type: "text", accept: [`第两${noun.mw}${noun.hz}`] },
                  feedback: "Ordinals with 第 ALWAYS use 二 (第二), NEVER *第两*!",
                },
              ]
            : undefined,
        hint: `Ordinal = 第 + Number (use 二 for 2nd!) + ${noun.mw} + ${noun.hz}.`,
        solution: [
          `Attach **第** before **${ordCn}** + classifier **${noun.mw}** + **${noun.hz}** → **第${ordCn}${noun.mw}${noun.hz}**.`,
        ],
      };
    }

    if (tier === 2) {
      // Multi-digit ending in 2 (12, 20, 22, 32) + MW + Noun
      const qty = rng.pick([12, 20, 22, 32] as const);
      const qtyCn =
        qty === 12
          ? { hz: "十二", py: "shí'èr" }
          : qty === 20
            ? { hz: "二十", py: "èrshí" }
            : qty === 22
              ? { hz: "二十二", py: "èrshí'èr" }
              : { hz: "三十二", py: "sānshí'èr" };
      const wrongLiang = qtyCn.hz.replace(/二/g, "两");
      return {
        prompt: `Translate into Mandarin (watch **二 vs 两** in multi-digit numbers!):\n**"${qty} ${noun.enPl}"**`,
        answer: {
          type: "text",
          accept: [
            `${qtyCn.hz}${noun.mw}${noun.hz}`,
            `${qtyCn.py} ${noun.mwPy} ${noun.py}`,
            `${qtyCn.py.replace("'", " ")} ${noun.mwPy} ${noun.py}`,
          ],
          display: `${qtyCn.hz}${noun.mw}${noun.hz} (${qtyCn.py} ${noun.mwPy} ${noun.py})`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${wrongLiang}${noun.mw}${noun.hz}`] },
            feedback: `Multi-digit numbers like ${qty} ALWAYS keep 二 — never replace digits in 12, 20, or 22 with 两!`,
          },
        ],
        hint: `Multi-digit ${qty} keeps 二 (${qtyCn.hz}), followed by ${noun.mw}${noun.hz}!`,
        solution: [
          `Multi-digit numbers ending in 2 keep **二**: **${qtyCn.hz}**.`,
          `Add classifier **${noun.mw}** + **${noun.hz}** → **${qtyCn.hz}${noun.mw}${noun.hz}**.`,
        ],
      };
    }

    // tier 3: 3-digit numbers with internal zero (e.g. 102..909) or hundreds + tens
    const h = rng.int(1, 9);
    const hasZeroGap = rng.bool(0.6);
    if (hasZeroGap) {
      const u = rng.int(1, 9);
      const val = h * 100 + u;
      const hHz = h === 2 ? "两百" : `${DIGITS_CN[h]}百`;
      const altHHz = `${DIGITS_CN[h]}百`;
      const ans1 = `${hHz}零${DIGITS_CN[u]}`;
      const ans2 = `${altHHz}零${DIGITS_CN[u]}`;
      return {
        prompt: `Write the number **${val}** in formal Mandarin characters (watch the internal zero!):`,
        answer: {
          type: "text",
          accept: ans1 === ans2 ? [ans1] : [ans1, ans2],
          display: ans1,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${hHz}${DIGITS_CN[u]}`, `${altHHz}${DIGITS_CN[u]}`] },
            feedback: `Without 零, ${altHHz}${DIGITS_CN[u]} means ${h * 100 + u * 10}! Include 零 for the zero in the tens place.`,
          },
        ],
        hint: "Hundreds + 零 (for the empty tens column) + Ones!",
        solution: [
          `${h * 100} = **${hHz}**; empty tens slot = **零**; ones = **${DIGITS_CN[u]}**.`,
          `Result: **${ans1}**.`,
        ],
      };
    }
    const t = rng.int(1, 9);
    const u = rng.int(1, 9);
    const val = h * 100 + t * 10 + u;
    const hHz = h === 2 ? "两百" : `${DIGITS_CN[h]}百`;
    const tail = `${DIGITS_CN[t]}十${DIGITS_CN[u]}`;
    const ans1 = `${hHz}${tail}`;
    return {
      prompt: `Convert the Mandarin number **${ans1}** into Arabic digits:`,
      answer: {
        type: "number",
        value: val,
      },
      hint: `${hHz} = ${h * 100}, ${DIGITS_CN[t]}十 = ${t * 10}, ${DIGITS_CN[u]} = ${u}.`,
      solution: [
        `**${hHz}** (${h * 100}) + **${DIGITS_CN[t]}十** (${t * 10}) + **${DIGITS_CN[u]}** (${u}) = **${val}**.`,
      ],
    };
  },
};

const CORE_MW_ITEMS = [
  { mw: "个", py: "gè", noun: "苹果", nPy: "píngguǒ", enSg: "apple", enPl: "apples", clue: "general classifier for fruits & people" },
  { mw: "个", py: "gè", noun: "好朋友", nPy: "hǎo péngyou", enSg: "good friend", enPl: "good friends", clue: "general classifier for individual people" },
  { mw: "口", py: "kǒu", noun: "人", nPy: "rén", enSg: "family member (in household)", enPl: "family members (in household)", clue: "household headcount ('mouths')" },
  { mw: "本", py: "běn", noun: "中文书", nPy: "Zhōngwén shū", enSg: "Chinese book", enPl: "Chinese books", clue: "bound volumes with a spine" },
  { mw: "本", py: "běn", noun: "词典", nPy: "cídiǎn", enSg: "dictionary", enPl: "dictionaries", clue: "bound volumes with a spine" },
  { mw: "杯", py: "bēi", noun: "绿茶", nPy: "lǜchá", enSg: "cup of green tea", enPl: "cups of green tea", clue: "cup / glass container" },
  { mw: "杯", py: "bēi", noun: "咖啡", nPy: "kāfēi", enSg: "cup of coffee", enPl: "cups of coffee", clue: "cup / glass container" },
  { mw: "碗", py: "wǎn", noun: "米饭", nPy: "mǐfàn", enSg: "bowl of cooked rice", enPl: "bowls of cooked rice", clue: "deep bowl container" },
  { mw: "碗", py: "wǎn", noun: "牛肉面", nPy: "niúròumiàn", enSg: "bowl of beef noodles", enPl: "bowls of beef noodles", clue: "deep bowl container" },
  { mw: "盘", py: "pán", noun: "鸡饭", nPy: "jīfàn", enSg: "plate of chicken rice", enPl: "plates of chicken rice", clue: "flat serving plate (皿)" },
  { mw: "盘", py: "pán", noun: "饺子", nPy: "jiǎozi", enSg: "plate of dumplings", enPl: "plates of dumplings", clue: "flat serving plate (皿)" },
  { mw: "瓶", py: "píng", noun: "冰水", nPy: "bīngshuǐ", enSg: "bottle of iced water", enPl: "bottles of iced water", clue: "bottle container" },
] as const;

const coreClassifiersDrill: Drill = {
  id: "time-measure-words.core-classifiers",
  topicId: "time-measure-words",
  title: "Core Classifiers: 个, 口, 本, 杯, 碗, 盘, 瓶",
  level: 2,
  guideRef: "core-measure-words",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const it = rng.pick(CORE_MW_ITEMS);
    const n = rng.int(1, 5);
    const nHz = n === 2 ? "两" : DIGITS_CN[n];
    const nPy = n === 2 ? "liǎng" : DIGITS_PY[n];
    const enQty = n === 1 ? `1 ${it.enSg}` : `${n} ${it.enPl}`;

    if (tier === 1) {
      return {
        prompt: `Fill in the single missing measure word (Hanzi or Pinyin):\n**${nHz}___${it.noun}** (*${enQty}*)`,
        answer: {
          type: "text",
          accept: [it.mw, it.py],
          display: `${it.mw} (${it.py})`,
        },
        hint: `Clue: ${it.clue}.`,
        solution: [
          `**${it.noun}** (*${it.nPy}*) takes **${it.mw}** (*${it.py}* — ${it.clue}): **${nHz}${it.mw}${it.noun}**.`,
        ],
      };
    }

    if (tier === 2) {
      return {
        prompt: `Translate the full phrase into Mandarin (Hanzi or Pinyin):\n**"${enQty}"** (use **${it.noun}**)`,
        answer: {
          type: "text",
          accept: [
            `${nHz}${it.mw}${it.noun}`,
            `${nPy} ${it.py} ${it.nPy}`,
          ],
          display: `${nHz}${it.mw}${it.noun} (${nPy} ${it.py} ${it.nPy})`,
        },
        traps:
          n === 2
            ? [
                {
                  spec: { type: "text", accept: [`二${it.mw}${it.noun}`] },
                  feedback: `Remember to use 两 (not 二) before ${it.mw}!`,
                },
              ]
            : undefined,
        hint: `Number (${n === 2 ? "两!" : nHz}) + Classifier (${it.clue}) + ${it.noun}.`,
        solution: [
          `Number **${nHz}** + classifier **${it.mw}** (*${it.py}*) + **${it.noun}** = **${nHz}${it.mw}${it.noun}**.`,
        ],
      };
    }

    // tier 3: hawker / bookshop order sentence with Subject + 买了/要 + Qty + MW + Noun
    const buyer = rng.pick([
      { hz: "我", py: "Wǒ", en: "I bought" },
      { hz: "妈妈", py: "Māma", en: "Mum bought" },
      { hz: "爸爸", py: "Bàba", en: "Dad bought" },
      { hz: "姐姐", py: "Jiějie", en: "My older sister bought" },
    ] as const);
    const shopItems = CORE_MW_ITEMS.filter((x) => x.mw !== "口" && x.noun !== "好朋友");
    const sIt = rng.pick(shopItems);
    const sEnQty = n === 1 ? `1 ${sIt.enSg}` : `${n} ${sIt.enPl}`;
    const fullHz = `${buyer.hz}买了${nHz}${sIt.mw}${sIt.noun}`;
    const fullPy = `${buyer.py} mǎi le ${nPy} ${sIt.py} ${sIt.nPy}`;

    return {
      prompt: `Translate into Mandarin using **买了** (*mǎi le*, bought) and the accurate classifier:\n**"${buyer.en} ${sEnQty}."** (use **${sIt.noun}**)`,
      answer: {
        type: "text",
        accept: [fullHz, `${fullHz}。`, fullPy],
        display: `${fullHz}。 (${fullPy}.)`,
      },
      traps: [
        {
          spec: { type: "text", accept: [`${buyer.hz}买了${nHz}${sIt.noun}`] },
          feedback: `Never glue a number straight onto ${sIt.noun}! Insert the classifier ${sIt.mw}.`,
        },
      ],
      hint: `${buyer.hz} + 买了 + ${nHz} + (${sIt.clue}) + ${sIt.noun}.`,
      solution: [
        `Subject + verb: **${buyer.hz}买了**`,
        `Quantity + classifier + noun: **${nHz}${sIt.mw}${sIt.noun}** → **${fullHz}。**`,
      ],
    };
  },
};

const SHAPE_MW_ITEMS = [
  { mw: "件", py: "jiàn", noun: "白衬衫", nPy: "bái chènshān", enSg: "white shirt", enPl: "white shirts", why: "upper-body clothing top" },
  { mw: "件", py: "jiàn", noun: "外套", nPy: "wàitào", enSg: "coat", enPl: "coats", why: "upper-body jacket/coat" },
  { mw: "条", py: "tiáo", noun: "裤子", nPy: "kùzi", enSg: "pair of trousers", enPl: "pairs of trousers", why: "one long connected garment (NEVER 双!)" },
  { mw: "条", py: "tiáo", noun: "裙子", nPy: "qúnzi", enSg: "skirt", enPl: "skirts", why: "lower-body flowing garment" },
  { mw: "条", py: "tiáo", noun: "小鱼", nPy: "xiǎoyú", enSg: "little fish", enPl: "little fish", why: "long, sleek swimming shape" },
  { mw: "双", py: "shuāng", noun: "运动鞋", nPy: "yùndòngxié", enSg: "pair of trainers", enPl: "pairs of trainers", why: "two separate matching shoes (又+又)" },
  { mw: "双", py: "shuāng", noun: "筷子", nPy: "kuàizi", enSg: "pair of chopsticks", enPl: "pairs of chopsticks", why: "two separate matching sticks (又+又)" },
  { mw: "只", py: "zhī", noun: "小狗", nPy: "xiǎogǒu", enSg: "puppy", enPl: "puppies", why: "small animal" },
  { mw: "只", py: "zhī", noun: "小鸟", nPy: "xiǎoniǎo", enSg: "little bird", enPl: "little birds", why: "bird / small critter" },
  { mw: "张", py: "zhāng", noun: "电影票", nPy: "diànyǐngpiào", enSg: "cinema ticket", enPl: "cinema tickets", why: "flat card/slip" },
  { mw: "张", py: "zhāng", noun: "桌子", nPy: "zhuōzi", enSg: "table", enPl: "tables", why: "flat tabletop surface" },
] as const;

const shapePairDrill: Drill = {
  id: "time-measure-words.shape-pair-duration",
  topicId: "time-measure-words",
  title: "Shape Classifiers (件/条/双/只/张), 这/那/哪 & Durations",
  level: 3,
  guideRef: "clothing-animal-classifiers",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const it = rng.pick(SHAPE_MW_ITEMS);

    if (tier === 1) {
      const n = rng.int(1, 4);
      const nHz = n === 2 ? "两" : DIGITS_CN[n];
      const enQty = n === 1 ? `1 ${it.enSg}` : `${n} ${it.enPl}`;
      return {
        prompt: `Choose the right shape/pair classifier (Hanzi or Pinyin) for:\n**${nHz}___${it.noun}** (*${enQty}*)`,
        answer: {
          type: "text",
          accept: [it.mw, it.py],
          display: `${it.mw} (${it.py})`,
        },
        traps:
          it.noun === "裤子"
            ? [
                {
                  spec: { type: "text", accept: ["双", "shuāng"] },
                  feedback: "Trap! Trousers are ONE connected long garment in Mandarin — use 条 (tiáo), never 双!",
                },
              ]
            : undefined,
        hint: `Shape clue: ${it.why}.`,
        solution: [
          `**${it.noun}** takes **${it.mw}** (*${it.py}* — ${it.why}): **${nHz}${it.mw}${it.noun}**.`,
        ],
      };
    }

    if (tier === 2) {
      // Demonstratives 这 / 那 / 哪 + MW + Noun
      const dem = rng.pick([
        { hz: "这", py: "zhè", en: "this" },
        { hz: "那", py: "nà", en: "that" },
        { hz: "哪", py: "nǎ", en: "which" },
      ] as const);
      const cleanEn = it.enSg.replace(/^pair of /, "pair of ");
      return {
        prompt: `Translate into Mandarin (remember **Demonstrative + Classifier + Noun**!):\n**"${dem.en} ${cleanEn}"** (use **${it.noun}**)`,
        answer: {
          type: "text",
          accept: [
            `${dem.hz}${it.mw}${it.noun}`,
            `${dem.py} ${it.py} ${it.nPy}`,
          ],
          display: `${dem.hz}${it.mw}${it.noun} (${dem.py} ${it.py} ${it.nPy})`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${dem.hz}${it.noun}`] },
            feedback: `Don't drop the classifier! Insert ${it.mw} between ${dem.hz} and ${it.noun}.`,
          },
          ...(dem.hz === "哪"
            ? [
                {
                  spec: { type: "text" as const, accept: [`那${it.mw}${it.noun}`] },
                  feedback: "Use 哪 (nǎ, which — with mouth radical 口), not 那 (nà, that)!",
                },
              ]
            : []),
        ],
        hint: `${dem.hz} (${dem.en}) + ${it.mw} (${it.why}) + ${it.noun}.`,
        solution: [
          `Combine **${dem.hz}** + classifier **${it.mw}** + **${it.noun}** → **${dem.hz}${it.mw}${it.noun}**.`,
        ],
      };
    }

    // tier 3: combine two distinct shape classifiers with 和 in a shopping sentence
    const [a, b] = rng.shuffle(SHAPE_MW_ITEMS).slice(0, 2);
    const n1 = rng.int(1, 3);
    const n2 = rng.int(1, 3);
    const n1Hz = n1 === 2 ? "两" : DIGITS_CN[n1];
    const n1Py = n1 === 2 ? "liǎng" : DIGITS_PY[n1];
    const n2Hz = n2 === 2 ? "两" : DIGITS_CN[n2];
    const n2Py = n2 === 2 ? "liǎng" : DIGITS_PY[n2];
    const en1 = n1 === 1 ? `1 ${a.enSg}` : `${n1} ${a.enPl}`;
    const en2 = n2 === 1 ? `1 ${b.enSg}` : `${n2} ${b.enPl}`;
    const fullHz = `${n1Hz}${a.mw}${a.noun}和${n2Hz}${b.mw}${b.noun}`;
    const fullPy = `${n1Py} ${a.py} ${a.nPy} hé ${n2Py} ${b.py} ${b.nPy}`;

    return {
      prompt: `Translate both items into Mandarin joined with **和** (*hé*):\n**"${en1} and ${en2}"** (use **${a.noun}** and **${b.noun}**)`,
      answer: {
        type: "text",
        accept: [fullHz, fullPy],
        display: `${fullHz} (${fullPy})`,
      },
      hint: `First: ${a.why} (${a.mw}); Second: ${b.why} (${b.mw}). Watch 两 if either count is 2!`,
      solution: [
        `Item 1: **${n1Hz}${a.mw}${a.noun}** (*${a.why}*).`,
        `Item 2: **${n2Hz}${b.mw}${b.noun}** (*${b.why}*).`,
        `Joined with **和**: **${fullHz}**.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  datesCalendarDrill,
  erVsLiangDrill,
  coreClassifiersDrill,
  shapePairDrill,
];
