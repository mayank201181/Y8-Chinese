import type { Drill, Rng } from "./types.ts";

const PEOPLE = [
  { zh: "我", py: "Wǒ", en: "I" },
  { zh: "妈妈", py: "Māma", en: "Mum" },
  { zh: "爸爸", py: "Bàba", en: "Dad" },
  { zh: "哥哥", py: "Gēge", en: "My older brother" },
  { zh: "姐姐", py: "Jiějie", en: "My older sister" },
  { zh: "奶奶", py: "Nǎinai", en: "Grandma" },
  { zh: "爷爷", py: "Yéye", en: "Grandad" },
  { zh: "小明", py: "Xiǎomíng", en: "Xiao Ming" },
  { zh: "美美", py: "Měiměi", en: "Mei Mei" },
] as const;

const VENUES = [
  { zh: "中餐馆", py: "zhōngcānguǎn", en: "Chinese restaurant", usesJia: true },
  { zh: "西餐厅", py: "xīcāntīng", en: "Western restaurant", usesJia: true },
  { zh: "上海餐厅", py: "Shànghǎi cāntīng", en: "Shanghai restaurant", usesJia: true },
  { zh: "北京饭馆", py: "Běijīng fànguǎn", en: "Beijing restaurant", usesJia: true },
  { zh: "海鲜餐厅", py: "hǎixiān cāntīng", en: "seafood restaurant", usesJia: true },
  { zh: "火锅店", py: "huǒguōdiàn", en: "hotpot restaurant", usesJia: true },
  { zh: "咖啡店", py: "kāfēidiàn", en: "café", usesJia: true },
] as const;

const PARTY_NUMS = [
  { n: 2, zh: "两", py: "liǎng", en: "two" },
  { n: 3, zh: "三", py: "sān", en: "three" },
  { n: 4, zh: "四", py: "sì", en: "four" },
  { n: 5, zh: "五", py: "wǔ", en: "five" },
  { n: 6, zh: "六", py: "liù", en: "six" },
  { n: 7, zh: "七", py: "qī", en: "seven" },
  { n: 8, zh: "八", py: "bā", en: "eight" },
  { n: 10, zh: "十", py: "shí", en: "ten" },
] as const;

interface MenuItem {
  zh: string;
  py: string;
  en: string;
  mw: string;
  mwPy: string;
  mwEnSg: string;
  mwEnPl: string;
  isLiquid: boolean;
  price: number;
}

const MENU_ITEMS: readonly MenuItem[] = [
  { zh: "牛肉面", py: "niúròumiàn", en: "beef noodles", mw: "碗", mwPy: "wǎn", mwEnSg: "bowl of", mwEnPl: "bowls of", isLiquid: false, price: 12 },
  { zh: "酸辣汤", py: "suānlàtāng", en: "hot-and-sour soup", mw: "碗", mwPy: "wǎn", mwEnSg: "bowl of", mwEnPl: "bowls of", isLiquid: true, price: 8 },
  { zh: "鱼汤", py: "yútāng", en: "fish soup", mw: "碗", mwPy: "wǎn", mwEnSg: "bowl of", mwEnPl: "bowls of", isLiquid: true, price: 9 },
  { zh: "米饭", py: "mǐfàn", en: "cooked rice", mw: "碗", mwPy: "wǎn", mwEnSg: "bowl of", mwEnPl: "bowls of", isLiquid: false, price: 2 },
  { zh: "饺子", py: "jiǎozi", en: "dumplings", mw: "盘", mwPy: "pán", mwEnSg: "plate of", mwEnPl: "plates of", isLiquid: false, price: 10 },
  { zh: "蛋炒饭", py: "dànchǎofàn", en: "egg fried rice", mw: "盘", mwPy: "pán", mwEnSg: "plate of", mwEnPl: "plates of", isLiquid: false, price: 9 },
  { zh: "海南鸡饭", py: "Hǎinán jīfàn", en: "Hainanese chicken rice", mw: "盘", mwPy: "pán", mwEnSg: "plate of", mwEnPl: "plates of", isLiquid: false, price: 6 },
  { zh: "炒青菜", py: "chǎo qīngcài", en: "stir-fried greens", mw: "盘", mwPy: "pán", mwEnSg: "plate of", mwEnPl: "plates of", isLiquid: false, price: 8 },
  { zh: "清蒸鱼", py: "qīngzhēng yú", en: "steamed fish", mw: "条", mwPy: "tiáo", mwEnSg: "", mwEnPl: "", isLiquid: false, price: 24 },
  { zh: "午餐套餐", py: "wǔcān tàocān", en: "lunch set meal", mw: "份", mwPy: "fèn", mwEnSg: "", mwEnPl: "", isLiquid: false, price: 15 },
  { zh: "冰水", py: "bīngshuǐ", en: "iced water", mw: "杯", mwPy: "bēi", mwEnSg: "glass of", mwEnPl: "glasses of", isLiquid: true, price: 2 },
  { zh: "绿茶", py: "lǜchá", en: "green tea", mw: "杯", mwPy: "bēi", mwEnSg: "cup of", mwEnPl: "cups of", isLiquid: true, price: 4 },
  { zh: "珍珠奶茶", py: "zhēnzhū nǎichá", en: "pearl milk tea", mw: "杯", mwPy: "bēi", mwEnSg: "cup of", mwEnPl: "cups of", isLiquid: true, price: 5 },
  { zh: "苹果汁", py: "píngguǒzhī", en: "apple juice", mw: "杯", mwPy: "bēi", mwEnSg: "glass of", mwEnPl: "glasses of", isLiquid: true, price: 4 },
];

const ORDER_QTYS = [
  { n: 1, zh: "一", py: "yī", en: "one" },
  { n: 2, zh: "两", py: "liǎng", en: "two" },
  { n: 3, zh: "三", py: "sān", en: "three" },
  { n: 4, zh: "四", py: "sì", en: "four" },
] as const;

function menuPhraseEn(q: (typeof ORDER_QTYS)[number], m: MenuItem): string {
  if (!m.mwEnSg) {
    return `${q.en} ${m.en}${q.n > 1 && m.zh === "午餐套餐" ? "s" : ""}`;
  }
  return `${q.en} ${q.n === 1 ? m.mwEnSg : m.mwEnPl} ${m.en}`;
}

export const drills: Drill[] = [
  {
    id: "eating-out.entering-seating",
    topicId: "eating-out",
    title: "Arriving, Venues & Polite Seating (进店与入座)",
    level: 1,
    guideRef: "entering-seating",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const mode = rng.bool(0.5);
        if (mode) {
          const pNum = rng.pick(PARTY_NUMS);
          const zhAns = `我们有${pNum.zh}位`;
          const pyAns = `Wǒmen yǒu ${pNum.py} wèi`;
          return {
            prompt: `The waiter greets you: **「欢迎光临！请问你们有几位？」**\nReply politely in Mandarin using **我们有…位**: **There are ${pNum.en} of us.**`,
            answer: {
              type: "text",
              accept: [zhAns, `${pNum.zh}位`, `我们${pNum.zh}位`, pyAns, `${pNum.py} wèi`],
              display: `${zhAns}。 (${pyAns}.)`,
            },
            traps:
              pNum.n === 2
                ? [
                    {
                      spec: { type: "text", accept: ["我们有二位", "二位"] },
                      feedback: "Before the classifier **位**, '2' must be **两** (*liǎng*): **我们有两位**!",
                    },
                  ]
                : undefined,
            hint: `Use **我们有** + **${pNum.zh}** + polite guest classifier **位** (*wèi*).`,
            solution: [
              `Number = **${pNum.zh}** (*${pNum.py}*), polite guest classifier = **位** (*wèi*).`,
              `Polite reply: **${zhAns}。**`,
            ],
          };
        }
        const q = rng.pick(ORDER_QTYS.slice(0, 3));
        const v = rng.pick(VENUES);
        const zhAns = `${q.zh}家${v.zh}`;
        const pyAns = `${q.py} jiā ${v.py}`;
        const enNoun = q.n === 1 ? v.en : `${v.en}s`;
        return {
          prompt: `Write in Mandarin using the establishment measure word **家** (*jiā*):\n**${q.en} ${enNoun}**`,
          answer: {
            type: "text",
            accept: [zhAns, pyAns],
            display: `${zhAns} (${pyAns})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${q.zh}个${v.zh}`] },
              feedback: "Restaurants and cafés take the establishment classifier **家** (*jiā*), not **个**!",
            },
          ],
          hint: `Combine **${q.zh}** + **家** (*jiā*) + **${v.zh}**.`,
          solution: [`Establishment classifier **家** → **${zhAns}** (*${pyAns}*).`],
        };
      }

      if (tier === 2) {
        const p = rng.pick(PEOPLE);
        const days = [
          { zh: "星期五晚上", py: "xīngqīwǔ wǎnshang", en: "on Friday evening" },
          { zh: "星期六中午", py: "xīngqīliù zhōngwǔ", en: "on Saturday at noon" },
          { zh: "星期天晚上", py: "xīngqītiān wǎnshang", en: "on Sunday evening" },
          { zh: "今天中午", py: "jīntiān zhōngwǔ", en: "today at noon" },
          { zh: "昨天晚上", py: "zuótiān wǎnshang", en: "yesterday evening" },
        ] as const;
        const d = rng.pick(days);
        const v = rng.pick(VENUES);
        const mealWord = d.zh.includes("中午") ? "吃午饭" : "吃晚饭";
        const mealPy = d.zh.includes("中午") ? "chī wǔfàn" : "chī wǎnfàn";
        const mealEn = d.zh.includes("中午") ? "lunch" : "dinner";
        const past = d.zh.startsWith("昨天");
        const verbGo = past ? "去了" : "去";
        const verbGoPy = past ? "qù le" : "qù";
        const verbEn = past ? "went to" : p.zh === "我" ? "go to" : "goes to";
        const zhAns = `${p.zh}${d.zh}${verbGo}一家${v.zh}${mealWord}`;
        const pyAns = `${p.py} ${d.py} ${verbGoPy} yī jiā ${v.py} ${mealPy}`;
        return {
          prompt: `Translate into Mandarin using STPV word order and **一家**:\n**${p.en} ${verbEn} a ${v.en} to eat ${mealEn} ${d.en}.**`,
          answer: {
            type: "text",
            accept: [
              zhAns,
              `${d.zh}${p.zh}${verbGo}一家${v.zh}${mealWord}`,
              pyAns,
            ],
            display: `${zhAns}。`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${p.zh}${verbGo}一家${v.zh}${mealWord}${d.zh}`] },
              feedback: `Time (**${d.zh}**) MUST come BEFORE **${verbGo}** in Mandarin STPV word order!`,
            },
          ],
          hint: `Order: **${p.zh}** + **${d.zh}** + **${verbGo}一家${v.zh}** + **${mealWord}**.`,
          solution: [
            `Time before verb: **${d.zh}**.`,
            `Venue + purpose: **${verbGo}一家${v.zh}${mealWord}**.`,
            `Full sentence: **${zhAns}。**`,
          ],
        };
      }

      // Tier 3: Polite Seating / Menu / Speciality Requests
      const requests = [
        {
          en: "Waiter, may we look at the menu?",
          zh: "服务员，我们可以看菜单吗",
          alt: "服务员我们可以看菜单吗",
          py: "Fúwùyuán, wǒmen kěyǐ kàn càidān ma",
          trap: "服务员，我们可以看买单吗",
          tip: "'Menu' is **菜单** (*càidān*), not **买单** (pay the bill)!",
        },
        {
          en: "Waiter, is there a seat by the window?",
          zh: "服务员，靠窗户有座位吗",
          alt: "服务员靠窗户有座位吗",
          py: "Fúwùyuán, kào chuānghu yǒu zuòwèi ma",
          trap: "服务员，靠窗户有坐位吗",
          tip: "The noun 'seat' requires the shelter radical **广**: **座位** (*zuòwèi*)!",
        },
        {
          en: "Excuse me, what signature dishes does your restaurant have?",
          zh: "请问你们餐厅有什么特色菜",
          alt: "请问你们有什么特色菜",
          py: "Qǐngwèn nǐmen cāntīng yǒu shénme tèsècài",
          trap: "请问你们餐厅有什么菜单",
          tip: "'Signature / house speciality dish' is **特色菜** (*tèsècài*)!",
        },
      ] as const;
      const pNum = rng.pick(PARTY_NUMS);
      const req = rng.pick(requests);
      const zhFull = `我们有${pNum.zh}位。${req.zh}`;
      const pyFull = `Wǒmen yǒu ${pNum.py} wèi. ${req.py}`;
      return {
        prompt: `Translate both parts into polite restaurant Mandarin:\n**There are ${pNum.en} of us. ${req.en}**`,
        answer: {
          type: "text",
          accept: [
            zhFull,
            `我们有${pNum.zh}位，${req.zh}`,
            `我们有${pNum.zh}位，${req.alt}`,
            pyFull,
          ],
          display: `${zhFull}？`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`我们有${pNum.zh}位，${req.trap}`] },
            feedback: req.tip,
          },
        ],
        hint: `Start with **我们有${pNum.zh}位**, then add **${req.zh}？** (${req.tip})`,
        solution: [
          `Party size: **我们有${pNum.zh}位。**`,
          `Polite question: **${req.zh}？**`,
        ],
      };
    },
  },

  {
    id: "eating-out.ordering-dishes",
    topicId: "eating-out",
    title: "Ordering Dishes with 来, 点 & 再来 (点菜句型)",
    level: 2,
    guideRef: "ordering-dishes",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const q = rng.pick(ORDER_QTYS);
      const item = rng.pick(MENU_ITEMS);
      const phraseEn = menuPhraseEn(q, item);

      if (tier === 1) {
        const zhAns = `来${q.zh}${item.mw}${item.zh}`;
        const pyAns = `Lái ${q.py} ${item.mwPy} ${item.py}`;
        return {
          prompt: `Order this item like a native speaker starting with **来** (*lái*, bring / let's have):\n**Bring ${phraseEn}!**`,
          answer: {
            type: "text",
            accept: [zhAns, `请来${q.zh}${item.mw}${item.zh}`, pyAns],
            display: `${zhAns}！ (${pyAns}!)`,
          },
          traps:
            q.n === 2
              ? [
                  {
                    spec: { type: "text", accept: [`来二${item.mw}${item.zh}`] },
                    feedback: `Use **两** (*liǎng*), never **二**, before the classifier **${item.mw}**!`,
                  },
                ]
              : undefined,
          hint: `Combine **来** + **${q.zh}${item.mw}** (*${q.py} ${item.mwPy}*) + **${item.zh}**.`,
          solution: [
            `Classifier for **${item.zh}** is **${item.mw}** (*${item.mwPy}*).`,
            `Order: **${zhAns}！**`,
          ],
        };
      }

      if (tier === 2) {
        const p = rng.pick(PEOPLE);
        const useZaiLai = rng.bool(0.4) && q.n === 1;
        if (useZaiLai) {
          const zhAns = `再来一${item.mw}${item.zh}`;
          const pyAns = `Zài lái yī ${item.mwPy} ${item.py}`;
          const anotherEn = item.mwEnSg ? `another ${item.mwEnSg} ${item.en}` : `another ${item.en}`;
          return {
            prompt: `Ask the server for one more round using **再来** (*zài lái*):\n**Bring ${anotherEn}!**`,
            answer: {
              type: "text",
              accept: [zhAns, `请再来一${item.mw}${item.zh}`, pyAns],
              display: `${zhAns}！ (${pyAns}!)`,
            },
            hint: `Use **再来** + **一${item.mw}${item.zh}**.`,
            solution: [`'Bring another…' = **${zhAns}！** (*${pyAns}!*)`],
          };
        }
        const zhAns = `${p.zh}想点${q.zh}${item.mw}${item.zh}`;
        const pyAns = `${p.py} xiǎng diǎn ${q.py} ${item.mwPy} ${item.py}`;
        return {
          prompt: `Translate into Mandarin using **想点** (remember to drop **菜** from **点菜**!):\n**${p.en} would like to order ${phraseEn}.**`,
          answer: {
            type: "text",
            accept: [zhAns, pyAns],
            display: `${zhAns}。 (${pyAns}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${p.zh}想点菜${q.zh}${item.mw}${item.zh}`] },
              feedback: "**点菜** already has **菜** as its object — drop **菜** when naming a specific dish (**想点…**)!",
            },
          ],
          hint: `Use **${p.zh}想点** (NO **菜**!) + **${q.zh}${item.mw}${item.zh}**.`,
          solution: [
            `Drop **菜** from **点菜** before a specific item.`,
            `Full sentence: **${zhAns}。**`,
          ],
        };
      }

      // Tier 3: Ordering a food + a drink/soup together with 来
      const solids = MENU_ITEMS.filter((m) => !m.isLiquid);
      const liquids = MENU_ITEMS.filter((m) => m.isLiquid);
      const food = rng.pick(solids);
      const drink = rng.pick(liquids);
      const q1 = rng.pick(ORDER_QTYS.slice(0, 3));
      const q2 = rng.pick(ORDER_QTYS.slice(1, 4));
      const zhAns = `来${q1.zh}${food.mw}${food.zh}和${q2.zh}${drink.mw}${drink.zh}`;
      const zhComma = `来${q1.zh}${food.mw}${food.zh}、${q2.zh}${drink.mw}${drink.zh}`;
      const pyAns = `Lái ${q1.py} ${food.mwPy} ${food.py} hé ${q2.py} ${drink.mwPy} ${drink.py}`;
      return {
        prompt: `Order both items together starting with **来** and joining with **和**:\n**Bring ${menuPhraseEn(q1, food)} and ${menuPhraseEn(q2, drink)}!**`,
        answer: {
          type: "text",
          accept: [zhAns, zhComma, `请${zhAns}`, pyAns],
          display: `${zhAns}！`,
        },
        hint: `Check both classifiers (**${food.mw}** and **${drink.mw}**) and remember **两** for 2!`,
        solution: [
          `Item 1: **${q1.zh}${food.mw}${food.zh}**`,
          `Item 2: **${q2.zh}${drink.mw}${drink.zh}**`,
          `Combined: **${zhAns}！**`,
        ],
      };
    },
  },

  {
    id: "eating-out.five-flavours",
    topicId: "eating-out",
    title: "Five Flavours, 好吃 vs 好喝 & Dietary Requests (五味与忌口)",
    level: 2,
    guideRef: "five-flavours",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const dem = rng.pick([
          { zh: "这", py: "Zhè", en: "This" },
          { zh: "那", py: "Nà", en: "That" },
        ] as const);
        const deg = rng.pick([
          { zh: "很", py: "hěn", en: "very" },
          { zh: "非常", py: "fēicháng", en: "extremely" },
        ] as const);
        const item = rng.pick(MENU_ITEMS);
        const goodWord = item.isLiquid ? "好喝" : "好吃";
        const goodPy = item.isLiquid ? "hǎohē" : "hǎochī";
        const wrongWord = item.isLiquid ? "好吃" : "好喝";
        const zhAns = `${dem.zh}${item.mw}${item.zh}${deg.zh}${goodWord}`;
        const pyAns = `${dem.py} ${item.mwPy} ${item.py} ${deg.py} ${goodPy}`;
        const thisEn = item.mwEnSg ? `${dem.en} ${item.mwEnSg} ${item.en}` : `${dem.en} ${item.en}`;
        return {
          prompt: `Translate into Mandarin (choose carefully between **好吃** and **好喝**!):\n**${thisEn} is ${deg.en} delicious/tasty.**`,
          answer: {
            type: "text",
            accept: [
              zhAns,
              `${dem.zh}${item.mw}${item.zh}很${goodWord}`,
              `${dem.zh}${item.mw}${item.zh}非常${goodWord}`,
              pyAns,
            ],
            display: `${zhAns}。 (${pyAns}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${dem.zh}${item.mw}${item.zh}${deg.zh}${wrongWord}`, `${dem.zh}${item.mw}${item.zh}很${wrongWord}`] },
              feedback: item.isLiquid
                ? `Drinks AND soups (**${item.zh}**) take **好喝** (*hǎohē*), never *好吃*!`
                : `Solid dishes (**${item.zh}**) take **好吃** (*hǎochī*), never *好喝*!`,
            },
          ],
          hint: `Classifier = **${item.mw}**; ${item.isLiquid ? "liquids & soups use **好喝**" : "solid foods use **好吃**"}!`,
          solution: [
            `Demonstrative + classifier: **${dem.zh}${item.mw}${item.zh}**.`,
            `Predicate: **${deg.zh}${goodWord}** (no **是**!). Result: **${zhAns}。**`,
          ],
        };
      }

      if (tier === 2) {
        const useAllergy = rng.bool(0.45);
        if (useAllergy) {
          const p = rng.pick(PEOPLE);
          const allergens = [
            { zh: "花生", py: "huāshēng", en: "peanuts" },
            { zh: "海鲜", py: "hǎixiān", en: "seafood" },
            { zh: "牛奶", py: "niúnǎi", en: "milk" },
            { zh: "鸡蛋", py: "jīdàn", en: "eggs" },
            { zh: "虾", py: "xiā", en: "prawns" },
          ] as const;
          const al = rng.pick(allergens);
          const beEn = p.zh === "我" ? "am" : "is";
          const zhAns = `${p.zh}对${al.zh}过敏`;
          const pyAns = `${p.py} duì ${al.py} guòmǐn`;
          return {
            prompt: `Translate into Mandarin using **对…过敏**:\n**${p.en} ${beEn} allergic to ${al.en}.**`,
            answer: {
              type: "text",
              accept: [zhAns, pyAns],
              display: `${zhAns}。 (${pyAns}.)`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`${p.zh}过敏${al.zh}`, `${p.zh}是过敏${al.zh}`] },
                feedback: `Use the fixed frame **Subject + 对 + ${al.zh} + 过敏** (no **是**)!`,
              },
            ],
            hint: `Frame: **${p.zh}** + **对** + **${al.zh}** + **过敏**.`,
            solution: [`Allergy sentence: **${zhAns}。** (*${pyAns}.*)`],
          };
        }

        const customs = [
          { en: "Please put less salt", zh: "请少放盐", alt: "少放盐", py: "Qǐng shǎo fàng yán", trap: "请放少盐" },
          { en: "Please put less sugar", zh: "请少放糖", alt: "少放糖", py: "Qǐng shǎo fàng táng", trap: "请放少糖" },
          { en: "Please put less oil", zh: "请少放油", alt: "少放油", py: "Qǐng shǎo fàng yóu", trap: "请放少油" },
          { en: "Please don't put coriander in", zh: "请不要放香菜", alt: "请不要香菜", py: "Qǐng bù yào fàng xiāngcài", trap: "请放不要香菜" },
          { en: "Please don't put chilli in", zh: "请不要放辣椒", alt: "请不要辣椒", py: "Qǐng bù yào fàng làjiāo", trap: "请放不要辣椒" },
        ] as const;
        const dish = rng.pick([
          { zh: "牛肉面", py: "niúròumiàn", en: "For the beef noodles" },
          { zh: "炒青菜", py: "chǎo qīngcài", en: "For the stir-fried greens" },
          { zh: "蛋炒饭", py: "dànchǎofàn", en: "For the egg fried rice" },
          { zh: "酸辣汤", py: "suānlàtāng", en: "For the hot-and-sour soup" },
          { zh: "这道菜", py: "zhè dào cài", en: "For this dish" },
        ] as const);
        const c = rng.pick(customs);
        const zhAns = `${dish.zh}${c.zh}`;
        const pyAns = `${dish.py} ${c.py.toLowerCase()}`;
        return {
          prompt: `Tell the server politely in Mandarin:\n**${dish.en}, ${c.en.toLowerCase()}.**`,
          answer: {
            type: "text",
            accept: [zhAns, `${dish.zh}，${c.zh}`, `${dish.zh}${c.alt}`, pyAns],
            display: `${dish.zh}，${c.zh}。`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${dish.zh}${c.trap}`] },
              feedback: "Keep **少** or **不要** right BEFORE the verb **放** (*fàng*, put/add)!",
            },
          ],
          hint: `Topic (**${dish.zh}**) + **${c.zh}**.`,
          solution: [`Topic-comment request: **${dish.zh}，${c.zh}。**`],
        };
      }

      // Tier 3: Twin-adjective flavour descriptions with 又…又…
      const pairs = [
        { a1: "酸", p1: "suān", e1: "sour", a2: "甜", p2: "tián", e2: "sweet" },
        { a1: "麻", p1: "má", e1: "numbing", a2: "辣", p2: "là", e2: "spicy" },
        { a1: "香", p1: "xiāng", e1: "fragrant", a2: "好吃", p2: "hǎochī", e2: "delicious" },
        { a1: "清淡", p1: "qīngdàn", e1: "light", a2: "新鲜", p2: "xīnxiān", e2: "fresh" },
        { a1: "便宜", p1: "piányi", e1: "cheap", a2: "好吃", p2: "hǎochī", e2: "delicious" },
      ] as const;
      const subjects = [
        { zh: "这道特色菜", py: "Zhè dào tèsècài", en: "This signature dish" },
        { zh: "这家饭馆的饺子", py: "Zhè jiā fànguǎn de jiǎozi", en: "This restaurant's dumplings" },
        { zh: "小贩中心的鸡饭", py: "Xiǎofàn zhōngxīn de jīfàn", en: "The hawker centre's chicken rice" },
        { zh: "妈妈做的鱼", py: "Māma zuò de yú", en: "The fish Mum made" },
        { zh: "这里的牛肉面", py: "Zhèlǐ de niúròumiàn", en: "The beef noodles here" },
      ] as const;
      const sub = rng.pick(subjects);
      const pr = rng.pick(pairs);
      const zhAns = `${sub.zh}又${pr.a1}又${pr.a2}`;
      const pyAns = `${sub.py} yòu ${pr.p1} yòu ${pr.p2}`;
      return {
        prompt: `Translate into Mandarin using **又…又…** (keep **${pr.e1}** first, **${pr.e2}** second):\n**${sub.en} is both ${pr.e1} and ${pr.e2}!**`,
        answer: {
          type: "text",
          accept: [zhAns, pyAns],
          display: `${zhAns}！ (${pyAns}!)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${sub.zh}是${pr.a1}和${pr.a2}`, `${sub.zh}${pr.a1}和${pr.a2}`] },
            feedback: "Never join adjectives with **和** or put **是** before them — use **又 + Adj 1 + 又 + Adj 2**!",
          },
        ],
        hint: `Combine **${sub.zh}** + **又${pr.a1}又${pr.a2}**!`,
        solution: [`Twin-adjective praise: **${zhAns}！**`],
      };
    },
  },

  {
    id: "eating-out.paying-the-bill",
    topicId: "eating-out",
    title: "Paying the Bill, Change & Discounts (买单与结账)",
    level: 3,
    guideRef: "paying-the-bill",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const solids = MENU_ITEMS.filter((m) => !m.isLiquid);
        const liquids = MENU_ITEMS.filter((m) => m.isLiquid);
        const d1 = rng.pick(solids);
        const d2 = rng.pick(liquids);
        const q1 = rng.pick(ORDER_QTYS.slice(0, 3));
        const q2 = rng.pick(ORDER_QTYS.slice(1, 4));
        const total = q1.n * d1.price + q2.n * d2.price;
        return {
          prompt: `Work out the restaurant bill (**一共多少钱？**):\n- **${q1.zh}${d1.mw}${d1.zh}**（每${d1.mw} **${d1.price}元**）\n- **${q2.zh}${d2.mw}${d2.zh}**（每${d2.mw} **${d2.price}元**）\nWrite the total in **元** as a single number.`,
          answer: {
            type: "number",
            value: total,
            display: `${total} 元`,
          },
          traps: [
            {
              spec: { type: "number", value: d1.price + d2.price },
              feedback: `Multiply each unit price by its quantity: **${q1.zh}** = ${q1.n} and **${q2.zh}** = ${q2.n}!`,
            },
          ],
          hint: `(${q1.n} × ${d1.price}) + (${q2.n} × ${d2.price}) = ?`,
          solution: [
            `**${q1.zh}${d1.mw}${d1.zh}** = ${q1.n} × ${d1.price} = ${q1.n * d1.price}元.`,
            `**${q2.zh}${d2.mw}${d2.zh}** = ${q2.n} × ${d2.price} = ${q2.n * d2.price}元.`,
            `Total (**一共**) = **${total}** 元.`,
          ],
        };
      }

      if (tier === 2) {
        const p = rng.pick(PEOPLE);
        const actions = [
          {
            en: "can we pay by card here?",
            zh: "这里可以刷卡吗",
            py: "zhèlǐ kěyǐ shuākǎ ma",
          },
          {
            en: "can we use mobile payment here?",
            zh: "这里可以用手机支付吗",
            py: "zhèlǐ kěyǐ yòng shǒujī zhīfù ma",
          },
          {
            en: "can we scan the QR code to pay?",
            zh: "可以扫码付钱吗",
            py: "kěyǐ sǎomǎ fùqián ma",
          },
          {
            en: "please help us pack the leftovers (takeaway).",
            zh: "请帮我们打包",
            py: "qǐng bāng wǒmen dǎbāo",
          },
        ] as const;
        const act = rng.pick(actions);
        const billWord = rng.bool(0.5) ? { zh: "买单", py: "mǎidān" } : { zh: "结账", py: "jiézhàng" };
        const zhAns = `服务员，${p.zh}想${billWord.zh}，${act.zh}`;
        const pyAns = `Fúwùyuán, ${p.py} xiǎng ${billWord.py}, ${act.py}`;
        return {
          prompt: `Translate into Mandarin using **${billWord.zh}**:\n**Waiter, ${p.en} would like to settle the bill — ${act.en}**`,
          answer: {
            type: "text",
            accept: [
              zhAns,
              `服务员${p.zh}想${billWord.zh}，${act.zh}`,
              `服务员，${p.zh}要${billWord.zh}，${act.zh}`,
              pyAns,
            ],
            display: `${zhAns}${act.zh.endsWith("吗") ? "？" : "。"}`,
          },
          hint: `Combine **服务员，${p.zh}想${billWord.zh}** + **${act.zh}**.`,
          solution: [
            `Call & settle bill: **服务员，${p.zh}想${billWord.zh}**`,
            `Follow-up: **${act.zh}**`,
          ],
        };
      }

      // Tier 3: Promotion + Cash Change Calculation (满X减Y & 找钱)
      const solids = MENU_ITEMS.filter((m) => !m.isLiquid);
      const liquids = MENU_ITEMS.filter((m) => m.isLiquid);
      const d1 = rng.pick(solids);
      const d2 = rng.pick(liquids);
      const q1 = rng.int(2, 4);
      const q2 = rng.int(2, 4);
      const zhNum = ["零", "一", "两", "三", "四"];
      const subtotal = q1 * d1.price + q2 * d2.price;
      const threshold = 40;
      const discount = 8;
      const afterPromo = subtotal >= threshold ? subtotal - discount : subtotal;
      const cashNote = afterPromo < 50 ? 50 : afterPromo < 100 ? 100 : 200;
      const change = cashNote - afterPromo;
      const traps: Array<{ spec: { type: "number"; value: number }; feedback: string }> = [];
      if (afterPromo !== change) {
        traps.push({
          spec: { type: "number", value: afterPromo },
          feedback: `${afterPromo}元 is the bill amount — subtract from ${cashNote}元 to find the change (**找钱**)!`,
        });
      }
      if (subtotal >= threshold && cashNote - subtotal >= 0 && cashNote - subtotal !== change) {
        traps.push({
          spec: { type: "number", value: cashNote - subtotal },
          feedback: `Look! The subtotal (${subtotal}元) qualifies for **满${threshold}元减${discount}元**, so the bill drops to ${afterPromo}元 before calculating change!`,
        });
      }
      return {
        prompt: `Read the restaurant promotion and receipt carefully:\n- Promotion: **「满${threshold}元减${discount}元」** (*Spend ${threshold}元 or more, get ${discount}元 off*)\n- Order: **${zhNum[q1]}${d1.mw}${d1.zh}**（每${d1.mw}${d1.price}元）+ **${zhNum[q2]}${d2.mw}${d2.zh}**（每${d2.mw}${d2.price}元）\nIf you pay with **${cashNote}元现金**, how many **元** change (**找钱**) should the waiter give back? Write a single number.`,
        answer: {
          type: "number",
          value: change,
          display: `${change} 元`,
        },
        traps: traps.length ? traps : undefined,
        hint: `Subtotal = (${q1} × ${d1.price}) + (${q2} × ${d2.price}) = ${subtotal}元. Check if ${subtotal} ≥ ${threshold}, then subtract from ${cashNote}元!`,
        solution: [
          `Subtotal = (${q1} × ${d1.price}) + (${q2} × ${d2.price}) = ${subtotal}元.`,
          subtotal >= threshold
            ? `Since ${subtotal} ≥ ${threshold}, apply **满${threshold}减${discount}**: ${subtotal} − ${discount} = ${afterPromo}元.`
            : `Since ${subtotal} < ${threshold}, no discount applies (bill = ${afterPromo}元).`,
          `Change (**找钱**) from ${cashNote}元 = ${cashNote} − ${afterPromo} = **${change}** 元.`,
        ],
      };
    },
  },
];
