import type { Drill } from "./types.ts";
import { roundTo } from "./helpers.ts";

const FRUITS = [
  { hz: "苹果", py: "píngguǒ", enSg: "apple", enPl: "apples", mwHz: "个", mwPy: "gè", mwEn: "" },
  { hz: "香蕉", py: "xiāngjiāo", enSg: "banana", enPl: "bananas", mwHz: "根", mwPy: "gēn", mwEn: "" },
  { hz: "西瓜", py: "xīguā", enSg: "slice of watermelon", enPl: "slices of watermelon", mwHz: "块", mwPy: "kuài", mwEn: "slice of" },
  { hz: "草莓", py: "cǎoméi", enSg: "punnet of strawberries", enPl: "punnets of strawberries", mwHz: "盒", mwPy: "hé", mwEn: "punnet of" },
  { hz: "葡萄", py: "pútao", enSg: "bunch of grapes", enPl: "bunches of grapes", mwHz: "串", mwPy: "chuàn", mwEn: "bunch of" },
  { hz: "橙子", py: "chéngzi", enSg: "orange", enPl: "oranges", mwHz: "个", mwPy: "gè", mwEn: "" },
  { hz: "芒果", py: "mángguǒ", enSg: "mango", enPl: "mangoes", mwHz: "个", mwPy: "gè", mwEn: "" },
  { hz: "榴莲", py: "liúlián", enSg: "box of durian", enPl: "boxes of durian", mwHz: "盒", mwPy: "hé", mwEn: "box of" },
  { hz: "桃子", py: "táozi", enSg: "peach", enPl: "peaches", mwHz: "个", mwPy: "gè", mwEn: "" },
];

const ADJ_PAIRS = [
  { a1Hz: "新鲜", a1Py: "xīnxiān", a1En: "fresh", a2Hz: "甜", a2Py: "tián", a2En: "sweet" },
  { a1Hz: "大", a1Py: "dà", a1En: "big", a2Hz: "甜", a2Py: "tián", a2En: "sweet" },
  { a1Hz: "甜", a1Py: "tián", a1En: "sweet", a2Hz: "多汁", a2Py: "duōzhī", a2En: "juicy" },
  { a1Hz: "香", a1Py: "xiāng", a1En: "fragrant", a2Hz: "好吃", a2Py: "hǎochī", a2En: "delicious" },
  { a1Hz: "新鲜", a1Py: "xīnxiān", a1En: "fresh", a2Hz: "便宜", a2Py: "piányi", a2En: "cheap" },
];

const NUM_QTY = [
  { n: 1, hz: "一", py: "yī", en: "one" },
  { n: 2, hz: "两", py: "liǎng", en: "two" },
  { n: 3, hz: "三", py: "sān", en: "three" },
  { n: 4, hz: "四", py: "sì", en: "four" },
  { n: 5, hz: "五", py: "wǔ", en: "five" },
];

const VEGS = [
  { hz: "西红柿", py: "xīhóngshì", en: "tomatoes", unitHz: "斤", unitPy: "jīn", unitEn: "jin of" },
  { hz: "黄瓜", py: "huángguā", en: "cucumbers", unitHz: "根", unitPy: "gēn", unitEn: "" },
  { hz: "青菜", py: "qīngcài", en: "leafy greens", unitHz: "斤", unitPy: "jīn", unitEn: "jin of" },
  { hz: "白菜", py: "báicài", en: "Chinese cabbages", unitHz: "斤", unitPy: "jīn", unitEn: "jin of" },
  { hz: "土豆", py: "tǔdòu", en: "potatoes", unitHz: "袋", unitPy: "dài", unitEn: "bag(s) of" },
  { hz: "胡萝卜", py: "húluóbo", en: "carrots", unitHz: "根", unitPy: "gēn", unitEn: "" },
  { hz: "洋葱", py: "yángcōng", en: "onions", unitHz: "斤", unitPy: "jīn", unitEn: "jin of" },
  { hz: "蘑菇", py: "mógu", en: "mushrooms", unitHz: "盒", unitPy: "hé", unitEn: "box(es) of" },
  { hz: "豆腐", py: "dòufu", en: "tofu", unitHz: "块", unitPy: "kuài", unitEn: "piece(s) of" },
];

const PEOPLE = [
  { hz: "我们", py: "Wǒmen", en: "We" },
  { hz: "弟弟", py: "Dìdi", en: "My younger brother" },
  { hz: "妹妹", py: "Mèimei", en: "My younger sister" },
  { hz: "哥哥", py: "Gēge", en: "My older brother" },
  { hz: "姐姐", py: "Jiějie", en: "My older sister" },
  { hz: "爷爷", py: "Yéye", en: "Grandpa" },
  { hz: "奶奶", py: "Nǎinai", en: "Grandma" },
  { hz: "孩子们", py: "Háizimen", en: "Children" },
];

const CN_DIGITS = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

function intToCn(n: number, beforeMeasureWord = false): string {
  if (n === 100) return "一百";
  if (n === 2 && beforeMeasureWord) return "两";
  if (n < 10) return CN_DIGITS[n];
  if (n === 10) return "十";
  if (n < 20) return "十" + CN_DIGITS[n % 10];
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  return CN_DIGITS[tens] + "十" + (ones ? CN_DIGITS[ones] : "");
}

function spokenPrice(yuan: number, mao: number): string {
  const yStr = `${intToCn(yuan, true)}块`;
  if (mao === 0) return `${yStr}钱`;
  return `${yStr}${CN_DIGITS[mao]}`;
}

const MARKET_ITEMS = [
  { hz: "苹果", en: "apples" },
  { hz: "西红柿", en: "tomatoes" },
  { hz: "青菜", en: "greens" },
  { hz: "橙子", en: "oranges" },
  { hz: "芒果", en: "mangoes" },
  { hz: "葡萄", en: "grapes" },
  { hz: "胡萝卜", en: "carrots" },
  { hz: "蘑菇", en: "mushrooms" },
  { hz: "香蕉", en: "bananas" },
  { hz: "白菜", en: "Chinese cabbage" },
];

const WEIGHT_SPECS = [
  { hz: "半斤", jin: 0.5, desc: "0.5 斤 (half a jin)" },
  { hz: "一斤", jin: 1, desc: "1 斤" },
  { hz: "一斤半", jin: 1.5, desc: "1.5 斤 (one and a half jin)" },
  { hz: "两斤", jin: 2, desc: "2 斤" },
  { hz: "一公斤", jin: 2, desc: "1 公斤 (= 2 斤!)" },
  { hz: "两斤半", jin: 2.5, desc: "2.5 斤" },
  { hz: "三斤", jin: 3, desc: "3 斤" },
  { hz: "两公斤", jin: 4, desc: "2 公斤 (= 4 斤!)" },
];

const DISCOUNTS = [
  { hz: "打九折", py: "dǎ jiǔ zhé", factor: 0.9, pctPay: 90, pctOff: 10 },
  { hz: "打八五折", py: "dǎ bāwǔ zhé", factor: 0.85, pctPay: 85, pctOff: 15 },
  { hz: "打八折", py: "dǎ bā zhé", factor: 0.8, pctPay: 80, pctOff: 20 },
  { hz: "打七五折", py: "dǎ qīwǔ zhé", factor: 0.75, pctPay: 75, pctOff: 25 },
  { hz: "打七折", py: "dǎ qī zhé", factor: 0.7, pctPay: 70, pctOff: 30 },
  { hz: "打六折", py: "dǎ liù zhé", factor: 0.6, pctPay: 60, pctOff: 40 },
];

const COMPLAINT_ADJS = [
  { hz: "贵", py: "guì", en: "expensive" },
  { hz: "酸", py: "suān", en: "sour" },
  { hz: "小", py: "xiǎo", en: "small" },
];

const REQUEST_ADJS = [
  { hz: "便宜", py: "piányi", en: "cheaper" },
  { hz: "甜", py: "tián", en: "sweeter" },
  { hz: "大", py: "dà", en: "bigger" },
];

export const drills: Drill[] = [
  {
    id: "vegetables-fruits.fruit-classifiers-taste",
    topicId: "vegetables-fruits",
    title: "Fruits, Shape Classifiers & 又…又… Descriptions",
    level: 1,
    guideRef: "fruits-vocab",
    generate(rng, tier) {
      const fruit = rng.pick(FRUITS);

      if (tier === 1) {
        const qty = rng.pick(NUM_QTY);
        const hzAns = `${qty.hz}${fruit.mwHz}${fruit.hz}`;
        const pyAns = `${qty.py} ${fruit.mwPy} ${fruit.py}`;
        const enPhrase = qty.n === 1 ? `${qty.en} ${fruit.enSg}` : `${qty.en} ${fruit.enPl}`;
        const traps =
          qty.n === 2
            ? [
                {
                  spec: { type: "text" as const, accept: [`二${fruit.mwHz}${fruit.hz}`] },
                  feedback: `Before measure word **${fruit.mwHz}**, always use **两** (*liǎng*), never **二**!`,
                },
              ]
            : undefined;
        return {
          prompt: `Translate into Mandarin using the natural classifier **${fruit.mwHz}** (*${fruit.mwPy}*):\n*"${enPhrase}"*`,
          answer: {
            type: "text",
            accept: [hzAns, pyAns],
            display: `${hzAns} (${pyAns})`,
          },
          traps,
          hint: `Number (**${qty.hz}**) + Classifier (**${fruit.mwHz}**) + Fruit (**${fruit.hz}**).`,
          solution: [
            `Combine Number + Classifier + Noun: **${hzAns}** (*${pyAns}*).`,
          ],
        };
      }

      const pair = rng.pick(ADJ_PAIRS);
      if (tier === 2) {
        const dem = rng.pick([
          { hz: "这", py: "Zhè", en: "This" },
          { hz: "那", py: "Nà", en: "That" },
        ]);
        const subjHz = `${dem.hz}${fruit.mwHz}${fruit.hz}`;
        const subjPy = `${dem.py} ${fruit.mwPy} ${fruit.py}`;
        const hzAns = `${subjHz}又${pair.a1Hz}又${pair.a2Hz}`;
        const pyAns = `${subjPy} yòu ${pair.a1Py} yòu ${pair.a2Py}`;
        return {
          prompt: `Describe this fruit in Mandarin using **又…又…** (with NO **是**!):\n*"${dem.en} ${fruit.enSg} is **both ${pair.a1En} and ${pair.a2En}**."* (Use **${subjHz}**, **${pair.a1Hz}**, **${pair.a2Hz}**.)`,
          answer: {
            type: "text",
            accept: [hzAns, pyAns],
            display: `${hzAns}。 (${pyAns}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${subjHz}是又${pair.a1Hz}又${pair.a2Hz}`] },
              feedback: "Never put **是** before stative adjectives in Mandarin!",
            },
          ],
          hint: `Frame: ${subjHz} + 又${pair.a1Hz} + 又${pair.a2Hz}.`,
          solution: [
            `Link the two adjectives directly with **又…又…**: **${hzAns}。**`,
          ],
        };
      }

      // tier === 3: Unscramble classifier + 又…又… sentence
      const person = rng.pick(PEOPLE.slice(1, 7));
      const qty = rng.pick(NUM_QTY.slice(0, 3));
      const hz1 = `${person.hz}买了${qty.hz}${fruit.mwHz}${fruit.hz}又${pair.a1Hz}又${pair.a2Hz}`;
      const chunks = rng.shuffle([
        `${person.hz}买了`,
        `${qty.hz}${fruit.mwHz}${fruit.hz}`,
        `又${pair.a1Hz}`,
        `又${pair.a2Hz}`,
      ]);
      const altHz = `${person.hz}买了${qty.hz}${fruit.mwHz}${fruit.hz}又${pair.a2Hz}又${pair.a1Hz}`;
      return {
        prompt: `Unscramble into a two-clause Mandarin description (keep **又${pair.a1Hz}** before **又${pair.a2Hz}**):\n**${chunks.join(" / ")}**`,
        answer: {
          type: "text",
          accept: [hz1, altHz],
          display: `${person.hz}买了${qty.hz}${fruit.mwHz}${fruit.hz}，又${pair.a1Hz}又${pair.a2Hz}。`,
        },
        hint: `Start with who bought what (**${person.hz}买了${qty.hz}${fruit.mwHz}${fruit.hz}**), then describe it (**又${pair.a1Hz}又${pair.a2Hz}**).`,
        solution: [
          `Clause 1 (purchase): **${person.hz}买了${qty.hz}${fruit.mwHz}${fruit.hz}**`,
          `Clause 2 (quality): **又${pair.a1Hz}又${pair.a2Hz}**`,
          `Full sentence: **${person.hz}买了${qty.hz}${fruit.mwHz}${fruit.hz}，又${pair.a1Hz}又${pair.a2Hz}。**`,
        ],
      };
    },
  },

  {
    id: "vegetables-fruits.veg-healthy-diet",
    topicId: "vegetables-fruits",
    title: "Vegetables, Quantities & Healthy Diet (多吃…对身体好)",
    level: 1,
    guideRef: "vegetables-vocab",
    generate(rng, tier) {
      if (tier === 1) {
        const qty = rng.pick(NUM_QTY.slice(1, 5));
        const veg = rng.pick(VEGS);
        const hzAns = `${qty.hz}${veg.unitHz}${veg.hz}`;
        const pyAns = `${qty.py} ${veg.unitPy} ${veg.py}`;
        const unitLabel = veg.unitEn ? `${veg.unitEn} ` : "";
        return {
          prompt: `Write this market quantity in Mandarin using **${veg.unitHz}** (*${veg.unitPy}*):\n*"${qty.en} ${unitLabel}${veg.en}"* (Use **${veg.hz}**.)`,
          answer: {
            type: "text",
            accept: [hzAns, pyAns],
            display: `${hzAns} (${pyAns})`,
          },
          traps:
            qty.n === 2
              ? [
                  {
                    spec: { type: "text", accept: [`二${veg.unitHz}${veg.hz}`] },
                    feedback: `Use **两** before **${veg.unitHz}**, never **二**!`,
                  },
                ]
              : undefined,
          hint: `Combine **${qty.hz}** + **${veg.unitHz}** + **${veg.hz}**.`,
          solution: [
            `Quantity + Classifier + Vegetable: **${hzAns}** (*${pyAns}*).`,
          ],
        };
      }

      if (tier === 2) {
        const person = rng.pick(PEOPLE);
        const pickTwo = rng.shuffle(VEGS).slice(0, 2);
        const v1 = pickTwo[0];
        const v2 = pickTwo[1];
        const hzAns = `${person.hz}应该多吃${v1.hz}和${v2.hz}`;
        const pyAns = `${person.py} yīnggāi duō chī ${v1.py} hé ${v2.py}`;
        return {
          prompt: `Give healthy eating advice in Mandarin:\n*"${person.en} should **eat plenty of** ${v1.en} and ${v2.en}."* (Use **${person.hz}**, **应该**, **多吃**, **${v1.hz}**, **和**, **${v2.hz}**.)`,
          answer: {
            type: "text",
            accept: [hzAns, pyAns],
            display: `${hzAns}。 (${pyAns}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${person.hz}应该吃多${v1.hz}和${v2.hz}`] },
              feedback: "Put **多** BEFORE the verb **吃** (**多吃**), never *吃多*!",
            },
          ],
          hint: `Order: ${person.hz}应该 + 多吃 + ${v1.hz}和${v2.hz}.`,
          solution: [
            `Adverbial **多** stands before **吃**: **${hzAns}。**`,
          ],
        };
      }

      // tier === 3: 多吃 X 和 Y 对身体很好
      const veg = rng.pick(VEGS);
      const fruit = rng.pick(FRUITS);
      const freq = rng.pick([
        { hz: "每天", py: "Měitiān", en: "every day" },
        { hz: "常常", py: "Chángcháng", en: "often" },
      ]);
      const hzAns = `${freq.hz}多吃${veg.hz}和${fruit.hz}对身体很好`;
      const hzAlt = `${freq.hz}多吃${veg.hz}和${fruit.hz}对身体好`;
      const pyAns = `${freq.py} duō chī ${veg.py} hé ${fruit.py} duì shēntǐ hěn hǎo`;
      return {
        prompt: `Translate using the **对身体很好** health frame:\n*"Eating plenty of ${veg.en} and ${fruit.hz} (${fruit.py}) ${freq.en} is very good for your health."* (Start with **${freq.hz}多吃${veg.hz}和${fruit.hz}**.)`,
        answer: {
          type: "text",
          accept: [hzAns, hzAlt, pyAns],
          display: `${hzAns}。`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${freq.hz}吃多${veg.hz}和${fruit.hz}对身体很好`] },
            feedback: "Write **多吃** (before the verb), not *吃多*!",
          },
        ],
        hint: `Topic (**${freq.hz}多吃${veg.hz}和${fruit.hz}**) + **对身体很好**.`,
        solution: [
          `1. Healthy habit topic: **${freq.hz}多吃${veg.hz}和${fruit.hz}**`,
          `2. Health benefit frame: **对身体很好** → **${hzAns}。**`,
        ],
      };
    },
  },

  {
    id: "vegetables-fruits.money-weights-calc",
    topicId: "vegetables-fruits",
    title: "Chinese Money (块/毛) & Market Weight (斤/公斤) Calculator",
    level: 2,
    guideRef: "money-weights",
    generate(rng, tier) {
      if (tier === 1) {
        const item = rng.pick(MARKET_ITEMS);
        const yuan = rng.int(2, 28);
        const useCentsWithZero = rng.bool(0.25);
        if (useCentsWithZero) {
          const fen = rng.int(2, 9);
          const val = roundTo(yuan + fen / 100, 2);
          const spoken = `${intToCn(yuan, true)}块零${CN_DIGITS[fen]}分`;
          return {
            prompt: `A supermarket receipt for **${item.hz}** (${item.en}) reads **${spoken}**. Write this exact price as a decimal number (e.g. \`5.06\`):`,
            answer: {
              type: "number",
              value: val,
              display: val.toFixed(2),
            },
            traps: [
              {
                spec: { type: "number", value: roundTo(yuan + fen / 10, 2) },
                feedback: `Notice **零${CN_DIGITS[fen]}分**! **零** shows 0 dimes (**毛**), so **${CN_DIGITS[fen]}分** is in the hundredths column (${val.toFixed(2)})!`,
              },
            ],
            hint: `**${intToCn(yuan, true)}块** = ${yuan}, and **零${CN_DIGITS[fen]}分** = 0.0${fen}.`,
            solution: [
              `**${intToCn(yuan, true)}块** = ${yuan}; **零${CN_DIGITS[fen]}分** = 0.0${fen}.`,
              `Decimal value = **${val.toFixed(2)}**.`,
            ],
          };
        }

        const mao = rng.int(1, 9);
        const val = roundTo(yuan + mao / 10, 2);
        const spoken = spokenPrice(yuan, mao);
        const trapVal = roundTo(yuan + mao / 100, 2);
        return {
          prompt: `At the market, the seller quotes **${item.hz}** (${item.en}) at **${spoken}一斤**. Write **${spoken}** as a decimal number:`,
          answer: {
            type: "number",
            value: val,
            display: val.toFixed(2),
          },
          traps: [
            {
              spec: { type: "number", value: trapVal },
              feedback: `**${spoken}** is spoken shorthand for **${spoken}毛** = **${val.toFixed(2)}**, NEVER ${trapVal.toFixed(2)}!`,
            },
          ],
          hint: `In spoken shorthand, the digit right after **块** stands for **毛** (tenths = 0.${mao}0).`,
          solution: [
            `**${intToCn(yuan, true)}块** = ${yuan}, and trailing **${CN_DIGITS[mao]}** = ${mao} 毛 (0.${mao}0).`,
            `Price = **${val.toFixed(2)}**.`,
          ],
        };
      }

      if (tier === 2) {
        const item = rng.pick(MARKET_ITEMS);
        const w = rng.pick(WEIGHT_SPECS);
        // Pick even-friendly unit price so w.jin * unitPrice has at most 2 clean decimal places
        const yuan = rng.int(2, 12);
        const mao = rng.pick([0, 2, 4, 5, 6, 8]);
        const unitPrice = roundTo(yuan + mao / 10, 2);
        const total = roundTo(w.jin * unitPrice, 2);
        const priceStr = spokenPrice(yuan, mao);
        const traps = w.hz.includes("公斤")
          ? [
              {
                spec: { type: "number" as const, value: roundTo((w.jin / 2) * unitPrice, 2) },
                feedback: `Watch the unit! The stall quotes per **斤** (500 g), and the buyer asked for **${w.hz}** (${w.jin} 斤) — remember **1 公斤 = 2 斤**!`,
              },
            ]
          : undefined;
        return {
          prompt: `**${item.hz}** cost **${priceStr}一斤**. A shopper buys **${w.hz}${item.hz}**. How much do they pay in total? Type a number.`,
          answer: {
            type: "number",
            value: total,
            display: String(total),
          },
          traps,
          hint: `**${priceStr}** = ${unitPrice.toFixed(2)} per 斤, and **${w.hz}** = ${w.desc}. Multiply!`,
          solution: [
            `Unit price (**${priceStr}**) = ${unitPrice.toFixed(2)} per 斤.`,
            `Quantity (**${w.hz}**) = ${w.jin} 斤.`,
            `Total = ${w.jin} × ${unitPrice.toFixed(2)} = **${total}**.`,
          ],
        };
      }

      // tier === 3: Two-item wet-market basket mixing 公斤 and 斤!
      const pair = rng.shuffle(MARKET_ITEMS).slice(0, 2);
      const it1 = pair[0];
      const it2 = pair[1];
      const p1Yuan = rng.int(3, 10);
      const p1Mao = rng.pick([0, 5]);
      const p1 = roundTo(p1Yuan + p1Mao / 10, 2);
      const kg1 = rng.pick([
        { hz: "一公斤", jin: 2 },
        { hz: "两公斤", jin: 4 },
      ]);
      const p2Yuan = rng.int(4, 12);
      const p2 = p2Yuan;
      const w2 = rng.pick([
        { hz: "半斤", jin: 0.5 },
        { hz: "一斤半", jin: 1.5 },
        { hz: "三斤", jin: 3 },
      ]);
      const total = roundTo(kg1.jin * p1 + w2.jin * p2, 2);
      const wrongNoDouble = roundTo((kg1.jin / 2) * p1 + w2.jin * p2, 2);
      return {
        prompt: `Wet-market basket calculation:\n- **${it1.hz}**：**${spokenPrice(p1Yuan, p1Mao)}一斤** → Mum buys **${kg1.hz}**\n- **${it2.hz}**：**${intToCn(p2Yuan, true)}块钱一斤** → Mum buys **${w2.hz}**\nHow much does Mum pay **一共** (altogether)? Type a number.`,
        answer: {
          type: "number",
          value: total,
          display: String(total),
        },
        traps: [
          {
            spec: { type: "number", value: wrongNoDouble },
            feedback: `Don't forget to convert **${kg1.hz}** into **${kg1.jin} 斤** (1 公斤 = 2 斤)!`,
          },
        ],
        hint: `Convert **${kg1.hz}** = ${kg1.jin} 斤, and **${w2.hz}** = ${w2.jin} 斤, then sum both subtotals.`,
        solution: [
          `**${it1.hz}**: **${kg1.hz}** = ${kg1.jin} 斤 × ${p1} = ${roundTo(kg1.jin * p1, 2)}.`,
          `**${it2.hz}**: **${w2.hz}** = ${w2.jin} 斤 × ${p2} = ${roundTo(w2.jin * p2, 2)}.`,
          `Total (**一共**) = **${total}**.`,
        ],
      };
    },
  },

  {
    id: "vegetables-fruits.bargaining-discounts",
    topicId: "vegetables-fruits",
    title: "Bargaining (有点儿 vs 一点儿), 打折 & Change (找钱)",
    level: 3,
    guideRef: "bargaining-tai-le",
    generate(rng, tier) {
      if (tier === 1) {
        const item = rng.pick(MARKET_ITEMS);
        const isComplaint = rng.bool(0.5);
        if (isComplaint) {
          const adj = rng.pick(COMPLAINT_ADJS);
          const hzAns = `${item.hz}有点儿${adj.hz}`;
          const hzAlt = `${item.hz}有一点儿${adj.hz}`;
          return {
            prompt: `Express a mild complaint in Mandarin using **有点儿**:\n*"The ${item.en} (**${item.hz}**) are **a bit too ${adj.en}** (**${adj.hz}**)."*`,
            answer: {
              type: "text",
              accept: [hzAns, hzAlt],
              display: `${hzAns}。`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`${item.hz}${adj.hz}一点儿`, `${item.hz}一点儿${adj.hz}`] },
                feedback: `Mild complaints put **有点儿** BEFORE the adjective: **${hzAns}**!`,
              },
            ],
            hint: `Put **有点儿** BEFORE **${adj.hz}** (and NO **是**!).`,
            solution: [
              `Mild complaint frame: Topic (**${item.hz}**) + **有点儿** + Adjective (**${adj.hz}**) → **${hzAns}。**`,
            ],
          };
        }

        const adj = rng.pick(REQUEST_ADJS);
        const hzAns = `${adj.hz}一点儿吧`;
        const hzAlt = `${adj.hz}一点吧`;
        const pyAns = `${adj.py} yìdiǎnr ba`;
        return {
          prompt: `Make a polite market request for **${item.hz}** (${item.en}) using **一点儿** and **吧**:\n*"Make it **a little ${adj.en}** (**${adj.hz}**), please!"*`,
          answer: {
            type: "text",
            accept: [hzAns, hzAlt, `老板${hzAns}`, pyAns],
            display: `${hzAns}！ (${pyAns}!)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`有点儿${adj.hz}吧`, `一点儿${adj.hz}吧`] },
              feedback: `Polite requests/comparisons put **一点儿** AFTER the adjective: **${hzAns}**!`,
            },
          ],
          hint: `Adjective (**${adj.hz}**) + **一点儿** + **吧**!`,
          solution: [
            `Comparative request frame: **${adj.hz}** + **一点儿** + **吧** → **${hzAns}！**`,
          ],
        };
      }

      if (tier === 2) {
        const fruit = rng.pick(FRUITS);
        const disc = rng.pick(DISCOUNTS);
        const orig = rng.pick([20, 30, 40, 50, 60, 80, 100]);
        const salePrice = roundTo(orig * disc.factor, 2);
        const wrongOff = roundTo(orig * (1 - disc.factor), 2);
        return {
          prompt: `Supermarket promotion: A gift box of **${fruit.hz}** normally costs **${intToCn(orig, true)}块钱** (¥${orig}). Today it is **${disc.hz}** (*${disc.py}*). How much do you **pay** today in yuan? Type a number.`,
          answer: {
            type: "number",
            value: salePrice,
            display: String(salePrice),
          },
          traps:
            wrongOff !== salePrice
              ? [
                  {
                    spec: { type: "number", value: wrongOff },
                    feedback: `Remember: **${disc.hz}** means you PAY **${disc.pctPay}%** (${disc.pctOff}% off), NOT ${disc.pctPay}% off!`,
                  },
                ]
              : undefined,
          hint: `**${disc.hz}** means multiply the original price (${orig}) by **${disc.factor}** (you pay ${disc.pctPay}%).`,
          solution: [
            `In Mandarin, **${disc.hz}** = pay ${disc.pctPay}% (${disc.pctOff}% off).`,
            `Sale price = ${orig} × ${disc.factor} = **${salePrice}** yuan.`,
          ],
        };
      }

      // tier === 3: Bargain + Change (找钱) calculation
      const item = rng.pick(MARKET_ITEMS);
      const qtyJin = rng.pick([2, 3, 4]);
      const unitYuan = rng.int(6, 14);
      const rawSubtotal = qtyJin * unitYuan;
      const bargainCut = rng.int(2, 5);
      const agreedTotal = rawSubtotal - bargainCut;
      const notes = [20, 30, 50, 100];
      const paid = notes.find((n) => n > agreedTotal) ?? 100;
      const change = paid - agreedTotal;
      return {
        prompt: `Read this bargaining dialogue:\n- 顾客：**老板，${item.hz}怎么卖？**\n- 老板：**${intToCn(unitYuan, true)}块钱一斤！**\n- 顾客：**有点儿贵！我买${intToCn(qtyJin, true)}斤，便宜一点儿吧！**\n- 老板：**好吧，给你便宜${intToCn(bargainCut, true)}块！**\n- 顾客：**太好了，给您${intToCn(paid, true)}块钱。**\nHow much **change** (**老板应该找顾客多少钱**) should the seller hand back? Type a number.`,
        answer: {
          type: "number",
          value: change,
          display: String(change),
        },
        traps:
          agreedTotal !== change
            ? [
                {
                  spec: { type: "number", value: agreedTotal },
                  feedback: `${agreedTotal} is the bargained total (**一共**)! Subtract ${agreedTotal} from **${paid}** to find the change (**找钱**)!`,
                },
              ]
            : undefined,
        hint: `Original = ${qtyJin} × ${unitYuan} = ${rawSubtotal}; minus ${bargainCut} discount = ${agreedTotal}; Change = ${paid} − ${agreedTotal}.`,
        solution: [
          `1. Original price for ${qtyJin} 斤 = ${qtyJin} × ${unitYuan} = ${rawSubtotal}.`,
          `2. After **便宜${intToCn(bargainCut, true)}块**: ${rawSubtotal} − ${bargainCut} = ${agreedTotal}.`,
          `3. Change (**找钱**) from ${paid} = ${paid} − ${agreedTotal} = **${change}** 块钱.`,
        ],
      };
    },
  },
];
