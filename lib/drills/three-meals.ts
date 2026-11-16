import type { Drill, Rng } from "./types.ts";

interface Person {
  zh: string;
  py: string;
  en: string;
  enPoss: string;
}

const PEOPLE: readonly Person[] = [
  { zh: "我", py: "Wǒ", en: "I", enPoss: "I" },
  { zh: "妈妈", py: "Māma", en: "Mum", enPoss: "Mum" },
  { zh: "爸爸", py: "Bàba", en: "Dad", enPoss: "Dad" },
  { zh: "哥哥", py: "Gēge", en: "My older brother", enPoss: "older brother" },
  { zh: "姐姐", py: "Jiějie", en: "My older sister", enPoss: "older sister" },
  { zh: "弟弟", py: "Dìdi", en: "My younger brother", enPoss: "younger brother" },
  { zh: "妹妹", py: "Mèimei", en: "My younger sister", enPoss: "younger sister" },
  { zh: "小明", py: "Xiǎomíng", en: "Xiao Ming", enPoss: "Xiao Ming" },
  { zh: "美美", py: "Měiměi", en: "Mei Mei", enPoss: "Mei Mei" },
];

const MEALS = [
  { zh: "早饭", alt: "早餐", py: "zǎofàn", altPy: "zǎocān", en: "breakfast" },
  { zh: "午饭", alt: "午餐", py: "wǔfàn", altPy: "wǔcān", en: "lunch" },
  { zh: "晚饭", alt: "晚餐", py: "wǎnfàn", altPy: "wǎncān", en: "dinner" },
] as const;

interface FoodItem {
  zh: string;
  py: string;
  enSg: string;
  enPl: string;
  mw: string;
  mwPy: string;
  mwEnSg: string;
  mwEnPl: string;
  verb: "吃" | "喝";
  verbPy: "chī" | "hē";
  price: number;
}

const STAPLES: readonly FoodItem[] = [
  { zh: "米饭", py: "mǐfàn", enSg: "cooked rice", enPl: "cooked rice", mw: "碗", mwPy: "wǎn", mwEnSg: "bowl of", mwEnPl: "bowls of", verb: "吃", verbPy: "chī", price: 2 },
  { zh: "炒饭", py: "chǎofàn", enSg: "fried rice", enPl: "fried rice", mw: "盘", mwPy: "pán", mwEnSg: "plate of", mwEnPl: "plates of", verb: "吃", verbPy: "chī", price: 5 },
  { zh: "面条", py: "miàntiáo", enSg: "noodles", enPl: "noodles", mw: "碗", mwPy: "wǎn", mwEnSg: "bowl of", mwEnPl: "bowls of", verb: "吃", verbPy: "chī", price: 6 },
  { zh: "包子", py: "bāozi", enSg: "steamed stuffed bun", enPl: "steamed stuffed buns", mw: "个", mwPy: "gè", mwEnSg: "", mwEnPl: "", verb: "吃", verbPy: "chī", price: 2 },
  { zh: "饺子", py: "jiǎozi", enSg: "dumplings", enPl: "dumplings", mw: "盘", mwPy: "pán", mwEnSg: "plate of", mwEnPl: "plates of", verb: "吃", verbPy: "chī", price: 7 },
  { zh: "面包", py: "miànbāo", enSg: "bread", enPl: "bread", mw: "片", mwPy: "piàn", mwEnSg: "slice of", mwEnPl: "slices of", verb: "吃", verbPy: "chī", price: 2 },
  { zh: "鸡蛋", py: "jīdàn", enSg: "egg", enPl: "eggs", mw: "个", mwPy: "gè", mwEnSg: "", mwEnPl: "", verb: "吃", verbPy: "chī", price: 1 },
  { zh: "三明治", py: "sānmíngzhì", enSg: "sandwich", enPl: "sandwiches", mw: "个", mwPy: "gè", mwEnSg: "", mwEnPl: "", verb: "吃", verbPy: "chī", price: 4 },
  { zh: "鸡饭", py: "jīfàn", enSg: "chicken rice", enPl: "chicken rice", mw: "盘", mwPy: "pán", mwEnSg: "plate of", mwEnPl: "plates of", verb: "吃", verbPy: "chī", price: 5 },
  { zh: "牛肉面", py: "niúròumiàn", enSg: "beef noodles", enPl: "beef noodles", mw: "碗", mwPy: "wǎn", mwEnSg: "bowl of", mwEnPl: "bowls of", verb: "吃", verbPy: "chī", price: 8 },
];

const DRINKS_AND_CONTAINERS: readonly FoodItem[] = [
  { zh: "水", py: "shuǐ", enSg: "water", enPl: "water", mw: "瓶", mwPy: "píng", mwEnSg: "bottle of", mwEnPl: "bottles of", verb: "喝", verbPy: "hē", price: 2 },
  { zh: "冰水", py: "bīngshuǐ", enSg: "iced water", enPl: "iced water", mw: "瓶", mwPy: "píng", mwEnSg: "bottle of", mwEnPl: "bottles of", verb: "喝", verbPy: "hē", price: 2 },
  { zh: "牛奶", py: "niúnǎi", enSg: "milk", enPl: "milk", mw: "盒", mwPy: "hé", mwEnSg: "carton of", mwEnPl: "cartons of", verb: "喝", verbPy: "hē", price: 3 },
  { zh: "绿茶", py: "lǜchá", enSg: "green tea", enPl: "green tea", mw: "杯", mwPy: "bēi", mwEnSg: "cup of", mwEnPl: "cups of", verb: "喝", verbPy: "hē", price: 3 },
  { zh: "奶茶", py: "nǎichá", enSg: "milk tea", enPl: "milk tea", mw: "杯", mwPy: "bēi", mwEnSg: "cup of", mwEnPl: "cups of", verb: "喝", verbPy: "hē", price: 5 },
  { zh: "咖啡", py: "kāfēi", enSg: "coffee", enPl: "coffee", mw: "杯", mwPy: "bēi", mwEnSg: "cup of", mwEnPl: "cups of", verb: "喝", verbPy: "hē", price: 4 },
  { zh: "苹果汁", py: "píngguǒzhī", enSg: "apple juice", enPl: "apple juice", mw: "杯", mwPy: "bēi", mwEnSg: "glass of", mwEnPl: "glasses of", verb: "喝", verbPy: "hē", price: 4 },
  { zh: "橙汁", py: "chéngzhī", enSg: "orange juice", enPl: "orange juice", mw: "瓶", mwPy: "píng", mwEnSg: "bottle of", mwEnPl: "bottles of", verb: "喝", verbPy: "hē", price: 4 },
  { zh: "可乐", py: "kělè", enSg: "cola", enPl: "cola", mw: "瓶", mwPy: "píng", mwEnSg: "bottle of", mwEnPl: "bottles of", verb: "喝", verbPy: "hē", price: 3 },
  { zh: "汤", py: "tāng", enSg: "soup", enPl: "soup", mw: "碗", mwPy: "wǎn", mwEnSg: "bowl of", mwEnPl: "bowls of", verb: "喝", verbPy: "hē", price: 4 },
  { zh: "豆浆", py: "dòujiāng", enSg: "soya milk", enPl: "soya milk", mw: "杯", mwPy: "bēi", mwEnSg: "cup of", mwEnPl: "cups of", verb: "喝", verbPy: "hē", price: 2 },
];

const NUMS = [
  { n: 1, zh: "一", py: "yī", en: "one" },
  { n: 2, zh: "两", py: "liǎng", en: "two" },
  { n: 3, zh: "三", py: "sān", en: "three" },
  { n: 4, zh: "四", py: "sì", en: "four" },
  { n: 5, zh: "五", py: "wǔ", en: "five" },
] as const;

function eatVerbEn(person: Person): string {
  return person.zh === "我" ? "eat" : "eats";
}

function qtyPhraseEn(num: (typeof NUMS)[number], item: FoodItem): string {
  if (item.mw === "个") {
    return `${num.en} ${num.n === 1 ? item.enSg : item.enPl}`;
  }
  const mwWord = num.n === 1 ? item.mwEnSg : item.mwEnPl;
  return `${num.en} ${mwWord} ${item.enPl}`;
}

export const drills: Drill[] = [
  {
    id: "three-meals.meals-staples",
    topicId: "three-meals",
    title: "Three Meals & Staples Word Order (一日三餐)",
    level: 1,
    guideRef: "meals-staples",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const p = rng.pick(PEOPLE);
      const meal = rng.pick(MEALS);
      const food = rng.pick(STAPLES);

      if (tier === 1) {
        const foodLabel = food.mw === "个" ? food.enPl : food.enSg;
        return {
          prompt: `Translate into Mandarin (Hanzi or toned Pinyin):\n**${p.en} ${eatVerbEn(p)} ${foodLabel} for ${meal.en}.**`,
          answer: {
            type: "text",
            accept: [
              `${p.zh}${meal.zh}吃${food.zh}`,
              `${p.zh}${meal.alt}吃${food.zh}`,
              `${meal.zh}${p.zh}吃${food.zh}`,
              `${p.py} ${meal.py} chī ${food.py}`,
              `${p.py} ${meal.altPy} chī ${food.py}`,
            ],
            display: `${p.zh}${meal.zh}吃${food.zh}。 (${p.py} ${meal.py} chī ${food.py}.)`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`${p.zh}吃${food.zh}给${meal.zh}`],
              },
              feedback: `Never translate 'for ${meal.en}' with **给**! Place **${meal.zh}** right BEFORE **吃**.`,
            },
          ],
          hint: `Use Subject (**${p.zh}**) + Meal (**${meal.zh}**) + **吃** + **${food.zh}** (no 'for' word needed!).`,
          solution: [
            `Subject = **${p.zh}** (*${p.py}*), Meal = **${meal.zh}** (*${meal.py}*).`,
            `Place the meal right before **吃**: **${p.zh}${meal.zh}吃${food.zh}。**`,
          ],
        };
      }

      if (tier === 2) {
        const num = rng.pick(NUMS.slice(0, 4));
        const phraseEn = qtyPhraseEn(num, food);
        const zhAns = `${p.zh}${meal.zh}吃了${num.zh}${food.mw}${food.zh}`;
        const pyAns = `${p.py} ${meal.py} chī le ${num.py} ${food.mwPy} ${food.py}`;
        const traps =
          num.n === 2
            ? [
                {
                  spec: {
                    type: "text" as const,
                    accept: [`${p.zh}${meal.zh}吃了二${food.mw}${food.zh}`],
                  },
                  feedback: `Before a measure word (**${food.mw}**), '2' MUST be **两** (*liǎng*), never **二**!`,
                },
              ]
            : [];
        return {
          prompt: `Translate into Mandarin using **吃了** (completed meal):\n**${p.en} ate ${phraseEn} for ${meal.en}.**`,
          answer: {
            type: "text",
            accept: [
              zhAns,
              `${p.zh}${meal.alt}吃了${num.zh}${food.mw}${food.zh}`,
              pyAns,
            ],
            display: `${zhAns}。 (${pyAns}.)`,
          },
          traps,
          hint: `Combine **${p.zh}** + **${meal.zh}** + **吃了** + **${num.zh}${food.mw}${food.zh}**.`,
          solution: [
            `Quantity + classifier: **${num.zh}${food.mw}${food.zh}** (*${num.py} ${food.mwPy} ${food.py}*).`,
            `Full sentence: **${zhAns}。**`,
          ],
        };
      }

      // Tier 3: Mealtime + Staple + Soup/Drink (contrasting 吃 and 喝!)
      const drink = rng.pick(DRINKS_AND_CONTAINERS);
      const drinkEn = qtyPhraseEn(NUMS[0], drink);
      const foodLabel = food.mw === "个" ? `one ${food.enSg}` : qtyPhraseEn(NUMS[0], food);
      const zhAns = `${p.zh}${meal.zh}吃了一${food.mw}${food.zh}，喝了一${drink.mw}${drink.zh}`;
      const zhAlt = `${p.zh}${meal.zh}吃了一${food.mw}${food.zh}，还喝了一${drink.mw}${drink.zh}`;
      const pyAns = `${p.py} ${meal.py} chī le yī ${food.mwPy} ${food.py}, hē le yī ${drink.mwPy} ${drink.py}`;
      return {
        prompt: `Write in Mandarin (separate the two clauses with a comma, no **还** needed):\n**For ${meal.en}, ${p.en === "I" ? "I" : p.en} ate ${foodLabel}, and had (drank) ${drinkEn}.**`,
        answer: {
          type: "text",
          accept: [
            zhAns,
            zhAlt,
            `${p.zh}${meal.alt}吃了一${food.mw}${food.zh}，喝了一${drink.mw}${drink.zh}`,
            pyAns,
          ],
          display: `${zhAns}。`,
        },
        traps:
          drink.zh === "汤"
            ? [
                {
                  spec: {
                    type: "text",
                    accept: [`${p.zh}${meal.zh}吃了一${food.mw}${food.zh}，吃了一碗汤`],
                  },
                  feedback: "Remember: in Mandarin you **喝** (*hē*, drink) soup (**喝了一碗汤**), never *吃汤*!",
                },
              ]
            : undefined,
        hint: `Use **吃了一${food.mw}${food.zh}** for the food and **喝了一${drink.mw}${drink.zh}** for the drink/soup!`,
        solution: [
          `Clause 1 (eat): **${p.zh}${meal.zh}吃了一${food.mw}${food.zh}**`,
          `Clause 2 (drink): **喝了一${drink.mw}${drink.zh}**`,
          `Combined: **${zhAns}。**`,
        ],
      };
    },
  },

  {
    id: "three-meals.meats-dishes",
    topicId: "three-meals",
    title: "Meats, Seafood & Cooking Methods (肉类与菜肴)",
    level: 1,
    guideRef: "meats-dishes",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const p = rng.pick(PEOPLE);
      const meats = [
        { zh: "猪肉", py: "zhūròu", en: "pork", mw: "盘", mwPy: "pán", mwEn: "plate of pork" },
        { zh: "牛肉", py: "niúròu", en: "beef", mw: "盘", mwPy: "pán", mwEn: "plate of beef" },
        { zh: "鸡肉", py: "jīròu", en: "chicken meat", mw: "盘", mwPy: "pán", mwEn: "plate of chicken" },
        { zh: "羊肉", py: "yángròu", en: "lamb", mw: "盘", mwPy: "pán", mwEn: "plate of lamb" },
        { zh: "海鲜", py: "hǎixiān", en: "seafood", mw: "盘", mwPy: "pán", mwEn: "plate of seafood" },
        { zh: "烤鸭", py: "kǎoyā", en: "roast duck", mw: "盘", mwPy: "pán", mwEn: "plate of roast duck" },
        { zh: "虾", py: "xiā", en: "prawns", mw: "盘", mwPy: "pán", mwEn: "plate of prawns" },
      ] as const;

      if (tier === 1) {
        const m = rng.pick(meats);
        const likesEn = p.zh === "我" ? "like eating" : "likes eating";
        return {
          prompt: `Translate into Mandarin (Hanzi or toned Pinyin):\n**${p.en} ${likesEn} ${m.en}.**`,
          answer: {
            type: "text",
            accept: [
              `${p.zh}喜欢吃${m.zh}`,
              `${p.py} xǐhuan chī ${m.py}`,
            ],
            display: `${p.zh}喜欢吃${m.zh}。 (${p.py} xǐhuan chī ${m.py}.)`,
          },
          hint: `Combine **${p.zh}** + **喜欢吃** (*xǐhuan chī*) + **${m.zh}** (*${m.py}*).`,
          solution: [
            `'${m.en}' = **${m.zh}** (*${m.py}*).`,
            `Full sentence: **${p.zh}喜欢吃${m.zh}。**`,
          ],
        };
      }

      if (tier === 2) {
        const dishes = [
          { zh: "一条蒸鱼", py: "yī tiáo zhēng yú", en: "one steamed fish", wrong: "一个蒸鱼", tip: "Whole fish always takes **条** (*tiáo*)!" },
          { zh: "两条鱼", py: "liǎng tiáo yú", en: "two fish", wrong: "二条鱼", tip: "Use **两** before **条**: **两条鱼**!" },
          { zh: "一盘西红柿炒鸡蛋", py: "yī pán xīhóngshì chǎo jīdàn", en: "one plate of stir-fried tomato and eggs", wrong: "一杯西红柿炒鸡蛋", tip: "Stir-fried dishes on a plate use **盘** (*pán*)!" },
          { zh: "一盘北京烤鸭", py: "yī pán Běijīng kǎoyā", en: "one plate of Peking roast duck", wrong: "一瓶北京烤鸭", tip: "Plated roast duck takes **盘** (*pán*)!" },
          { zh: "两盘海南鸡饭", py: "liǎng pán Hǎinán jīfàn", en: "two plates of Hainanese chicken rice", wrong: "二盘海南鸡饭", tip: "Use **两** (*liǎng*) before **盘**!" },
          { zh: "一盘炒虾", py: "yī pán chǎo xiā", en: "one plate of stir-fried prawns", wrong: "一条炒虾", tip: "A plate of stir-fried prawns uses **一盘炒虾**!" },
        ] as const;
        const d = rng.pick(dishes);
        return {
          prompt: `Translate into Mandarin using **做了** (cooked/made):\n**${p.en} made ${d.en}.**`,
          answer: {
            type: "text",
            accept: [
              `${p.zh}做了${d.zh}`,
              `${p.py} zuò le ${d.py}`,
            ],
            display: `${p.zh}做了${d.zh}。 (${p.py} zuò le ${d.py}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${p.zh}做了${d.wrong}`] },
              feedback: d.tip,
            },
          ],
          hint: `${d.tip} Combine **${p.zh}做了** + **${d.zh}**.`,
          solution: [
            `Dish with classifier: **${d.zh}** (*${d.py}*).`,
            `Full sentence: **${p.zh}做了${d.zh}。**`,
          ],
        };
      }

      // Tier 3: Dish Builder (Ingredient A + 炒 + Ingredient B)
      const ingA = rng.pick([
        { zh: "牛肉", py: "niúròu", en: "beef" },
        { zh: "鸡肉", py: "jīròu", en: "chicken" },
        { zh: "猪肉", py: "zhūròu", en: "pork" },
        { zh: "羊肉", py: "yángròu", en: "lamb" },
        { zh: "虾", py: "xiā", en: "prawns" },
        { zh: "西红柿", py: "xīhóngshì", en: "tomato" },
      ] as const);
      const ingB = rng.pick([
        { zh: "鸡蛋", py: "jīdàn", en: "eggs" },
        { zh: "青菜", py: "qīngcài", en: "green vegetables" },
        { zh: "米饭", py: "mǐfàn", en: "rice" },
        { zh: "面条", py: "miàntiáo", en: "noodles" },
      ] as const);
      const zhDish = `${ingA.zh}炒${ingB.zh}`;
      const pyDish = `${ingA.py} chǎo ${ingB.py}`;
      return {
        prompt: `Using the Chinese dish pattern \`Ingredient A + 炒 + Ingredient B\`, write:\n**${p.en} knows how to cook (会做) stir-fried ${ingA.en} with ${ingB.en}** (put **${ingA.en}** first).`,
        answer: {
          type: "text",
          accept: [
            `${p.zh}会做${zhDish}`,
            `${p.py} huì zuò ${pyDish}`,
          ],
          display: `${p.zh}会做${zhDish}。 (${p.py} huì zuò ${pyDish}.)`,
        },
        hint: `'Knows how to cook' = **会做** (*huì zuò*); dish = **${ingA.zh}** + **炒** + **${ingB.zh}**.`,
        solution: [
          `Build dish name: **${zhDish}** (*${pyDish}*).`,
          `Prepend **${p.zh}会做**: **${p.zh}会做${zhDish}。**`,
        ],
      };
    },
  },

  {
    id: "three-meals.drinks-containers",
    topicId: "three-meals",
    title: "Drinks, Container Classifiers & Tray Maths (饮料与量词)",
    level: 2,
    guideRef: "drinks-containers",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const num = rng.pick(NUMS);
        const item = rng.pick(DRINKS_AND_CONTAINERS);
        const phraseEn = qtyPhraseEn(num, item);
        const zhAns = `${num.zh}${item.mw}${item.zh}`;
        const pyAns = `${num.py} ${item.mwPy} ${item.py}`;
        return {
          prompt: `Write in Mandarin (Hanzi or toned Pinyin):\n**${phraseEn}**`,
          answer: {
            type: "text",
            accept: [zhAns, pyAns],
            display: `${zhAns} (${pyAns})`,
          },
          traps:
            num.n === 2
              ? [
                  {
                    spec: { type: "text", accept: [`二${item.mw}${item.zh}`] },
                    feedback: `Use **两** (*liǎng*), NEVER **二**, before the measure word **${item.mw}**!`,
                  },
                ]
              : undefined,
          hint: `Number (**${num.zh}**) + Container (**${item.mw}**, *${item.mwPy}*) + **${item.zh}**.`,
          solution: [
            `Number = **${num.zh}** (*${num.py}*), Classifier = **${item.mw}** (*${item.mwPy}*), Noun = **${item.zh}** (*${item.py}*).`,
            `Result: **${zhAns}** (*${pyAns}*).`,
          ],
        };
      }

      if (tier === 2) {
        const p = rng.pick(PEOPLE);
        const num = rng.pick(NUMS.slice(0, 4));
        const item = rng.pick(DRINKS_AND_CONTAINERS);
        const phraseEn = qtyPhraseEn(num, item);
        const zhAns = `${p.zh}想喝${num.zh}${item.mw}${item.zh}`;
        const pyAns = `${p.py} xiǎng hē ${num.py} ${item.mwPy} ${item.py}`;
        return {
          prompt: `Translate into Mandarin using **想喝** (would like to have/drink):\n**${p.en} would like to have ${phraseEn}.**`,
          answer: {
            type: "text",
            accept: [zhAns, pyAns],
            display: `${zhAns}。 (${pyAns}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${p.zh}想吃${num.zh}${item.mw}${item.zh}`] },
              feedback: `All drinks — including **汤** (soup)! — take the verb **喝** (*hē*), never **吃**!`,
            },
          ],
          hint: `Use **${p.zh}想喝** + **${num.zh}${item.mw}${item.zh}** (remember **两** if the number is 2!).`,
          solution: [
            `Verb for beverages & soup = **喝** (*hē*).`,
            `Full sentence: **${zhAns}。**`,
          ],
        };
      }

      // Tier 3: Hawker / Canteen Tray Price Calculation in Mandarin
      const food = rng.pick(STAPLES);
      const drink = rng.pick(DRINKS_AND_CONTAINERS);
      const qFood = rng.pick(NUMS.slice(0, 4));
      const qDrink = rng.pick(NUMS.slice(1, 5));
      const total = qFood.n * food.price + qDrink.n * drink.price;
      return {
        prompt: `Read the canteen receipt carefully:\n- **一${food.mw}${food.zh}：$${food.price}**\n- **一${drink.mw}${drink.zh}：$${drink.price}**\nIf you buy **${qFood.zh}${food.mw}${food.zh}** and **${qDrink.zh}${drink.mw}${drink.zh}**, how many dollars does it cost altogether? Write a number.`,
        answer: {
          type: "number",
          value: total,
          display: `$${total}`,
        },
        traps: [
          {
            spec: { type: "number", value: food.price + drink.price },
            feedback: `Don't just add $${food.price} + $${drink.price} — multiply by the Chinese quantities **${qFood.zh}** (${qFood.n}) and **${qDrink.zh}** (${qDrink.n})!`,
          },
        ],
        hint: `**${qFood.zh}** = ${qFood.n} and **${qDrink.zh}** = ${qDrink.n}. Work out (${qFood.n} × ${food.price}) + (${qDrink.n} × ${drink.price}).`,
        solution: [
          `**${qFood.zh}${food.mw}${food.zh}** = ${qFood.n} × $${food.price} = $${qFood.n * food.price}.`,
          `**${qDrink.zh}${drink.mw}${drink.zh}** = ${qDrink.n} × $${drink.price} = $${qDrink.n * drink.price}.`,
          `Total = $${qFood.n * food.price} + $${qDrink.n * drink.price} = **$${total}**.`,
        ],
      };
    },
  },

  {
    id: "three-meals.hungry-thirsty-full",
    topicId: "three-meals",
    title: "Appetite, Tableware & Healthy Diet Advice (胃口与健康饮食)",
    level: 3,
    guideRef: "hungry-thirsty-full",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const p = rng.pick(PEOPLE);

      if (tier === 1) {
        const states = [
          {
            en: "very hungry",
            zh: `${p.zh}很饿`,
            alt: `${p.zh}非常饿`,
            py: `${p.py} hěn è`,
            trap: `${p.zh}是很饿`,
            tip: "Never put **是** before **饿**! Use **很饿**.",
          },
          {
            en: "very thirsty",
            zh: `${p.zh}很渴`,
            alt: `${p.zh}非常渴`,
            py: `${p.py} hěn kě`,
            trap: `${p.zh}很喝`,
            tip: "**喝** (*hē*, mouth **口**) means 'to drink'; 'thirsty' needs the water radical **渴** (*kě*, **氵**)!",
          },
          {
            en: "already full (from eating)",
            zh: `${p.zh}已经吃饱了`,
            alt: `${p.zh}吃饱了`,
            py: `${p.py} yǐjīng chībǎo le`,
            trap: `${p.zh}是饱`,
            tip: "Use the resultative phrase **已经吃饱了** (never **是饱**!).",
          },
        ] as const;
        const st = rng.pick(states);
        const beVerb = p.zh === "我" ? "am" : "is";
        return {
          prompt: `Translate into natural Mandarin (Hanzi or toned Pinyin):\n**${p.en} ${beVerb} ${st.en}.**`,
          answer: {
            type: "text",
            accept: [st.zh, st.alt, st.py],
            display: `${st.zh}。 (${st.py}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [st.trap, `${p.zh}是${st.zh.slice(p.zh.length)}`] },
              feedback: st.tip,
            },
          ],
          hint: st.tip,
          solution: [`Natural Mandarin: **${st.zh}。** (*${st.py}.*)`],
        };
      }

      if (tier === 2) {
        const tools = [
          { zh: "筷子", py: "kuàizi", en: "chopsticks" },
          { zh: "刀叉", py: "dāochā", en: "a knife and fork" },
          { zh: "勺子", py: "sháozi", en: "a spoon" },
        ] as const;
        const foods = [
          { zh: "饺子", py: "jiǎozi", en: "dumplings" },
          { zh: "面条", py: "miàntiáo", en: "noodles" },
          { zh: "炒饭", py: "chǎofàn", en: "fried rice" },
          { zh: "鸡饭", py: "jīfàn", en: "chicken rice" },
          { zh: "米饭", py: "mǐfàn", en: "cooked rice" },
        ] as const;
        const tool = rng.pick(tools);
        const f = rng.pick(foods);
        const verbEn = p.zh === "我" ? "use" : "uses";
        const zhAns = `${p.zh}用${tool.zh}吃${f.zh}`;
        const pyAns = `${p.py} yòng ${tool.py} chī ${f.py}`;
        return {
          prompt: `Translate into Mandarin (remember \`用 + tool\` goes BEFORE \`吃\`!):\n**${p.en} ${verbEn} ${tool.en} to eat ${f.en}.**`,
          answer: {
            type: "text",
            accept: [zhAns, pyAns],
            display: `${zhAns}。 (${pyAns}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${p.zh}吃${f.zh}用${tool.zh}`] },
              feedback: "In Mandarin, **用 + tool** MUST come BEFORE the main verb **吃**!",
            },
          ],
          hint: `Order: **${p.zh}** + **用${tool.zh}** + **吃${f.zh}**.`,
          solution: [
            `Tool phrase first: **用${tool.zh}** (*yòng ${tool.py}*).`,
            `Main action second: **吃${f.zh}** (*chī ${f.py}*).`,
            `Full sentence: **${zhAns}。**`,
          ],
        };
      }

      // Tier 3: Healthy Diet Advice (应该 + 多/少 + 吃/喝 + Object)
      const items = [
        { moreLess: "多", mlPy: "duō", mlEn: "more", verb: "吃", vPy: "chī", vEn: "eat", obj: "蔬菜", oPy: "shūcài", oEn: "vegetables" },
        { moreLess: "多", mlPy: "duō", mlEn: "more", verb: "吃", vPy: "chī", vEn: "eat", obj: "水果", oPy: "shuǐguǒ", oEn: "fruit" },
        { moreLess: "多", mlPy: "duō", mlEn: "more", verb: "喝", vPy: "hē", vEn: "drink", obj: "水", oPy: "shuǐ", oEn: "water" },
        { moreLess: "多", mlPy: "duō", mlEn: "more", verb: "吃", vPy: "chī", vEn: "eat", obj: "鱼", oPy: "yú", oEn: "fish" },
        { moreLess: "少", mlPy: "shǎo", mlEn: "less", verb: "吃", vPy: "chī", vEn: "eat", obj: "快餐", oPy: "kuàicān", oEn: "fast food" },
        { moreLess: "少", mlPy: "shǎo", mlEn: "fewer", verb: "吃", vPy: "chī", vEn: "eat", obj: "零食", oPy: "língshí", oEn: "snacks" },
        { moreLess: "少", mlPy: "shǎo", mlEn: "less", verb: "喝", vPy: "hē", vEn: "drink", obj: "可乐", oPy: "kělè", oEn: "cola" },
        { moreLess: "少", mlPy: "shǎo", mlEn: "less", verb: "喝", vPy: "hē", vEn: "drink", obj: "奶茶", oPy: "nǎichá", oEn: "milk tea" },
        { moreLess: "少", mlPy: "shǎo", mlEn: "less", verb: "吃", vPy: "chī", vEn: "eat", obj: "糖", oPy: "táng", oEn: "sugar" },
      ] as const;
      const it = rng.pick(items);
      const zhAns = `${p.zh}应该${it.moreLess}${it.verb}${it.obj}`;
      const pyAns = `${p.py} yīnggāi ${it.mlPy} ${it.vPy} ${it.oPy}`;
      return {
        prompt: `Translate into Mandarin using **应该** (*yīnggāi*, should):\n**${p.en} should ${it.vEn} ${it.mlEn} ${it.obj === "糖" ? "sugar" : it.oEn}.**`,
        answer: {
          type: "text",
          accept: [zhAns, pyAns],
          display: `${zhAns}。 (${pyAns}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${p.zh}应该${it.verb}${it.moreLess}${it.obj}`] },
            feedback: `Put **${it.moreLess}** right BEFORE **${it.verb}**: **${it.moreLess}${it.verb}${it.obj}**!`,
          },
        ],
        hint: `Place **${it.moreLess}** (*${it.mlPy}*) BEFORE **${it.verb}** (*${it.vPy}*): **${p.zh}应该${it.moreLess}${it.verb}${it.obj}**.`,
        solution: [
          `Advice pattern: Subject + **应该** + **${it.moreLess}** + **${it.verb}** + **${it.obj}**.`,
          `Result: **${zhAns}。**`,
        ],
      };
    },
  },
];
