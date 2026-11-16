import type { Drill } from "./types.ts";

const PEOPLE = [
  { zh: "我", py: "Wǒ", en: "I", enPoss: "My", obj: false },
  { zh: "妈妈", py: "Māma", en: "Mum", enPoss: "Mum's", obj: true },
  { zh: "爸爸", py: "Bàba", en: "Dad", enPoss: "Dad's", obj: true },
  { zh: "哥哥", py: "Gēge", en: "My older brother", enPoss: "My older brother's", obj: true },
  { zh: "姐姐", py: "Jiějie", en: "My older sister", enPoss: "My older sister's", obj: true },
  { zh: "弟弟", py: "Dìdi", en: "My younger brother", enPoss: "My younger brother's", obj: true },
  { zh: "妹妹", py: "Mèimei", en: "My younger sister", enPoss: "My younger sister's", obj: true },
  { zh: "小明", py: "Xiǎomíng", en: "Xiaoming", enPoss: "Xiaoming's", obj: true },
  { zh: "美美", py: "Měiměi", en: "Meimei", enPoss: "Meimei's", obj: true },
  { zh: "爷爷", py: "Yéye", en: "Grandpa", enPoss: "Grandpa's", obj: true },
] as const;

const BODY_ITEMS = [
  { zh: "眼睛", py: "yǎnjing", en: "eyes", mw: "双", mwPy: "shuāng", countZh: "一", countPy: "yì", enPhrase: "a pair of big eyes", adjZh: "大", adjPy: "dà", wrongMw: "条" },
  { zh: "耳朵", py: "ěrduo", en: "ears", mw: "只", mwPy: "zhī", countZh: "两", countPy: "liǎng", enPhrase: "two small ears", adjZh: "小", adjPy: "xiǎo", wrongMw: "张" },
  { zh: "手", py: "shǒu", en: "hands", mw: "双", mwPy: "shuāng", countZh: "一", countPy: "yì", enPhrase: "a pair of clean hands", adjZh: "干净的", adjPy: "gānjìng de", wrongMw: "条" },
  { zh: "腿", py: "tuǐ", en: "legs", mw: "条", mwPy: "tiáo", countZh: "两", countPy: "liǎng", enPhrase: "two long legs", adjZh: "长", adjPy: "cháng", wrongMw: "个" },
  { zh: "脚", py: "jiǎo", en: "feet", mw: "双", mwPy: "shuāng", countZh: "一", countPy: "yì", enPhrase: "a pair of small feet", adjZh: "小", adjPy: "xiǎo", wrongMw: "本" },
  { zh: "嘴", py: "zuǐ", en: "mouth", mw: "张", mwPy: "zhāng", countZh: "一", countPy: "yì", enPhrase: "one small mouth", adjZh: "小", adjPy: "xiǎo", wrongMw: "条" },
  { zh: "脸", py: "liǎn", en: "face", mw: "张", mwPy: "zhāng", countZh: "一", countPy: "yì", enPhrase: "one round face", adjZh: "圆", adjPy: "yuán", wrongMw: "双" },
  { zh: "牙", py: "yá", en: "tooth", mw: "颗", mwPy: "kē", countZh: "一", countPy: "yì", enPhrase: "one white tooth", adjZh: "白", adjPy: "bái", wrongMw: "条" },
] as const;

const BODY_DESCRIPTIONS = [
  { part: "头发", py: "tóufa", en: "hair", adj: "长", adjPy: "cháng", adjEn: "very long" },
  { part: "眼睛", py: "yǎnjing", en: "eyes", adj: "大", adjPy: "dà", adjEn: "very big" },
  { part: "身体", py: "shēntǐ", en: "body", adj: "健康", adjPy: "jiànkāng", adjEn: "very healthy" },
  { part: "腿", py: "tuǐ", en: "legs", adj: "酸", adjPy: "suān", adjEn: "very sore" },
  { part: "手", py: "shǒu", en: "hands", adj: "冷", adjPy: "lěng", adjEn: "very cold" },
  { part: "脸", py: "liǎn", en: "face", adj: "红", adjPy: "hóng", adjEn: "very red" },
] as const;

const BASIC_SYMPTOMS = [
  { zh: "头疼", alt: "头痛", py: "tóuténg", altPy: "tóutòng", en1: "have a headache", en3: "has a headache", trapNoun: "头疼" },
  { zh: "肚子疼", alt: "肚子痛", py: "dùzi téng", altPy: "dùzi tòng", en1: "have a tummy ache", en3: "has a tummy ache", trapNoun: "肚子疼" },
  { zh: "嗓子疼", alt: "喉咙痛", py: "sǎngzi téng", altPy: "hóulóng tòng", en1: "have a sore throat", en3: "has a sore throat", trapNoun: "嗓子疼" },
  { zh: "牙疼", alt: "牙痛", py: "yáténg", altPy: "yátòng", en1: "have a toothache", en3: "has a toothache", trapNoun: "牙疼" },
  { zh: "感冒了", alt: "感冒了", py: "gǎnmào le", altPy: "gǎnmào le", en1: "caught a cold", en3: "caught a cold", trapNoun: "感冒" },
  { zh: "发烧了", alt: "发烧了", py: "fāshāo le", altPy: "fāshāo le", en1: "have a fever", en3: "has a fever", trapNoun: "发烧" },
  { zh: "一直咳嗽", alt: "一直咳嗽", py: "yìzhí késou", altPy: "yìzhí késou", en1: "keep coughing", en3: "keeps coughing", trapNoun: "咳嗽" },
] as const;

const TIMES = [
  { zh: "今天早上", py: "jīntiān zǎoshang", en: "this morning" },
  { zh: "今天下午", py: "jīntiān xiàwǔ", en: "this afternoon" },
  { zh: "昨天晚上", py: "zuótiān wǎnshang", en: "last night" },
  { zh: "现在", py: "xiànzài", en: "right now" },
] as const;

const DEGREE_ACHES = [
  { part: "头", py: "tóu", en: "head", degZh: "有点儿", degAlt: "有点", degPy: "yǒudiǎnr", enPred: "hurts a bit" },
  { part: "嗓子", py: "sǎngzi", en: "throat", degZh: "有点儿", degAlt: "有点", degPy: "yǒudiǎnr", enPred: "is a bit sore" },
  { part: "肚子", py: "dùzi", en: "tummy", degZh: "很", degAlt: "很", degPy: "hěn", enPred: "hurts badly" },
  { part: "牙", py: "yá", en: "tooth", degZh: "很", degAlt: "很", degPy: "hěn", enPred: "hurts a lot" },
  { part: "腿", py: "tuǐ", en: "legs", degZh: "有点儿", degAlt: "有点", degPy: "yǒudiǎnr", enPred: "ache a bit" },
] as const;

const ALLERGENS = [
  { zh: "花生", py: "huāshēng", en: "peanuts" },
  { zh: "海鲜", py: "hǎixiān", en: "seafood" },
  { zh: "牛奶", py: "niúnǎi", en: "milk" },
  { zh: "花粉", py: "huāfěn", en: "pollen" },
  { zh: "鸡蛋", py: "jīdàn", en: "eggs" },
  { zh: "芒果", py: "mángguǒ", en: "mangoes" },
] as const;

const DOCTORS = ["王医生", "陈医生", "林医生", "张医生", "李医生"] as const;
const MEDICINES = [
  { zh: "感冒药", py: "gǎnmàoyào", en: "cold medicine" },
  { zh: "咳嗽药", py: "késouyào", en: "cough tablets" },
  { zh: "退烧药", py: "tuìshāoyào", en: "fever tablets" },
  { zh: "消炎药", py: "xiāoyányào", en: "anti-inflammatory tablets" },
] as const;

const ZH_NUM: Record<number, { zh: string; py: string }> = {
  1: { zh: "一", py: "yí" },
  2: { zh: "两", py: "liǎng" },
  3: { zh: "三", py: "sān" },
  4: { zh: "四", py: "sì" },
  5: { zh: "五", py: "wǔ" },
};

const ADVICE_DOS = [
  { zh: "多喝温水", py: "duō hē wēnshuǐ", en: "drink more warm water", wrongOrder: "喝温水多" },
  { zh: "多喝水", py: "duō hē shuǐ", en: "drink more water", wrongOrder: "喝水多" },
  { zh: "多休息", py: "duō xiūxi", en: "rest more", wrongOrder: "休息多" },
  { zh: "早点睡觉", py: "zǎodiǎn shuìjiào", en: "go to sleep earlier", wrongOrder: "睡觉早点" },
  { zh: "少吃糖", py: "shǎo chī táng", en: "eat fewer sweets", wrongOrder: "吃糖少" },
  { zh: "多吃蔬菜", py: "duō chī shūcài", en: "eat more vegetables", wrongOrder: "吃蔬菜多" },
] as const;

const ADVICE_DONTS = [
  { zh: "喝冰水", py: "hē bīngshuǐ", en: "drink iced water" },
  { zh: "喝冰可乐", py: "hē bīng kělè", en: "drink iced cola" },
  { zh: "去游泳", py: "qù yóuyǒng", en: "go swimming" },
  { zh: "去踢足球", py: "qù tī zúqiú", en: "go to play football" },
  { zh: "吃冰淇淋", py: "chī bīngqílín", en: "eat ice cream" },
  { zh: "熬夜", py: "áoyè", en: "stay up late" },
] as const;

export const drills: Drill[] = [
  {
    id: "illness.body-classifiers",
    topicId: "illness",
    title: "Body Parts, Classifiers & Descriptions (身体与量词)",
    level: 1,
    guideRef: "body-parts",
    generate(rng, tier) {
      const p = rng.pick(PEOPLE);
      if (tier === 1) {
        const b = rng.pick(BODY_ITEMS);
        const prompt = `Fill in the correct Mandarin measure word (classifier) for **${p.enPoss.toLowerCase()} ${b.en}**:\n\n**${p.zh}有${b.countZh} ___ ${b.adjZh}${b.zh}。** *(${p.en} ${p.obj ? "has" : "have"} ${b.enPhrase}.)*`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [b.mw, b.mwPy],
            display: `${b.mw} (${b.mwPy})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [b.wrongMw] },
              feedback: `Not ${b.wrongMw}! Match ${b.zh} (${b.en}) with its shape/pair classifier ${b.mw} (${b.mwPy}).`,
            },
          ],
          hint: `Think about the shape or pairing of ${b.zh} (${b.en}) — pairs take 双, one of an animal/ear takes 只, legs take 条, faces/mouths take 张, teeth take 颗.`,
          solution: [
            `Noun: **${b.zh}** (*${b.py}*, ${b.en}).`,
            `Correct classifier: **${b.mw}** (*${b.mwPy}*) → **${b.countZh}${b.mw}${b.adjZh}${b.zh}**.`,
          ],
        };
      }

      if (tier === 2) {
        const d = rng.pick(BODY_DESCRIPTIONS);
        const verbEn = d.part === "眼睛" || d.part === "腿" || d.part === "手" ? "are" : "is";
        const prompt = `Translate into Mandarin (remember: NO **是** before adjectives!):\n\n**"${p.enPoss} ${d.en} ${verbEn} ${d.adjEn}."** *(Use **${p.zh}的${d.part}** and **很${d.adj}**.)*`;
        const ansZh = `${p.zh}的${d.part}很${d.adj}`;
        const ansNoDe = `${p.zh}${d.part}很${d.adj}`;
        const ansPy = `${p.py} de ${d.py} hěn ${d.adjPy}`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [ansZh, ansNoDe, ansPy],
            display: `${ansZh}。 (${ansPy}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${p.zh}的${d.part}是很${d.adj}`, `${p.zh}的${d.part}是${d.adj}`] },
              feedback: "Never put 是 before an adjective in Mandarin! Link the noun to the adjective with 很 instead.",
            },
          ],
          hint: `Use Topic-Comment order: ${p.zh}的${d.part} + 很 + ${d.adj} (no 是!).`,
          solution: [
            `Subject phrase: **${p.zh}的${d.part}** (${p.enPoss} ${d.en}).`,
            `Adjective predicate with **很** (no 是): **很${d.adj}**.`,
            `Full sentence: **${ansZh}。**`,
          ],
        };
      }

      const b = rng.pick(BODY_ITEMS);
      const prompt = `Translate the complete phrase into Mandarin (paying attention to **两** vs **二** and the exact classifier):\n\n**"${p.en} ${p.obj ? "has" : "have"} ${b.enPhrase}."** *(Subject: **${p.zh}**)*`;
      const ansZh = `${p.zh}有${b.countZh}${b.mw}${b.adjZh}${b.zh}`;
      const ansPy = `${p.py} yǒu ${b.countPy} ${b.mwPy} ${b.adjPy} ${b.py}`;
      const traps =
        b.countZh === "两"
          ? [
              {
                spec: { type: "text" as const, accept: [`${p.zh}有二${b.mw}${b.adjZh}${b.zh}`] },
                feedback: "Always use 两 (liǎng), NEVER 二, before a measure word!",
              },
            ]
          : undefined;
      return {
        prompt,
        answer: {
          type: "text",
          accept: [ansZh, ansPy],
          display: `${ansZh}。 (${ansPy}.)`,
        },
        traps,
        hint: `Order: ${p.zh} + 有 + ${b.countZh} + classifier (${b.mw}) + ${b.adjZh} + ${b.zh}.`,
        solution: [
          `Subject + 有: **${p.zh}有**`,
          `Number + classifier + adjective + noun: **${b.countZh}${b.mw}${b.adjZh}${b.zh}**`,
          `Full sentence: **${ansZh}。**`,
        ],
      };
    },
  },

  {
    id: "illness.symptoms-builder",
    topicId: "illness",
    title: "Body-Part + 疼 & Symptoms Builder (症状造句)",
    level: 2,
    guideRef: "symptoms-illness",
    generate(rng, tier) {
      const p = rng.pick(PEOPLE);
      if (tier === 1) {
        const s = rng.pick(BASIC_SYMPTOMS);
        const enVerb = p.obj ? s.en3 : s.en1;
        const prompt = `Translate into natural Mandarin (do NOT use **有**!):\n\n**"${p.en} ${enVerb}."** *(Subject: **${p.zh}**)*`;
        const accepts = Array.from(
          new Set([
            `${p.zh}${s.zh}`,
            `${p.zh}${s.alt}`,
            `${p.py} ${s.py}`,
            `${p.py} ${s.altPy}`,
          ]),
        );
        return {
          prompt,
          answer: {
            type: "text",
            accept: accepts,
            display: `${p.zh}${s.zh}。 (${p.py} ${s.py}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${p.zh}有${s.trapNoun}`, `${p.zh}有${s.zh}`] },
              feedback: `Drop 有! In Mandarin, ${s.zh} acts directly as a predicate after ${p.zh}.`,
            },
          ],
          hint: `Put ${p.zh} first and ${s.zh} right after it — illnesses and aches don't use 有 in Mandarin!`,
          solution: [
            `Subject: **${p.zh}** (*${p.py}*).`,
            `Direct symptom predicate (no 有): **${s.zh}** (*${s.py}*).`,
            `Full sentence: **${p.zh}${s.zh}。**`,
          ],
        };
      }

      if (tier === 2) {
        const t = rng.pick(TIMES);
        const a = rng.pick(DEGREE_ACHES);
        const prompt = `Translate into Mandarin using **STPV** word order and placing **${a.degZh}** in the right spot:\n\n**"${p.enPoss} ${a.en} ${a.enPred} ${t.en}."** *(Start with **${p.zh}${t.zh}…**)*`;
        const ans1 = `${p.zh}${t.zh}${a.part}${a.degZh}疼`;
        const ans2 = `${p.zh}${t.zh}${a.part}${a.degAlt}疼`;
        const ans3 = `${t.zh}${p.zh}${a.part}${a.degZh}疼`;
        const ans4 = `${t.zh}${p.zh}的${a.part}${a.degZh}疼`;
        const ans5 = `${p.zh}的${a.part}${t.zh}${a.degZh}疼`;
        const ansPy = `${p.py} ${t.py} ${a.py} ${a.degPy} téng`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: Array.from(new Set([ans1, ans2, ans3, ans4, ans5, ansPy])),
            display: `${ans1}。 (${ansPy}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${p.zh}${t.zh}${a.part}疼${a.degZh}`] },
              feedback: `Put ${a.degZh} BEFORE 疼, never after it!`,
            },
          ],
          hint: `Put time (${t.zh}) before the symptom, and ${a.degZh} directly BEFORE 疼!`,
          solution: [
            `Subject + Time: **${p.zh}${t.zh}**`,
            `Body part + pre-verbal degree + 疼: **${a.part}${a.degZh}疼**`,
            `Full sentence: **${ans1}。**`,
          ],
        };
      }

      const al = rng.pick(ALLERGENS);
      const beVerb = p.obj ? "is" : "am";
      const prompt = `Translate into Mandarin using the **对…过敏** allergy frame:\n\n**"${p.en} ${beVerb} allergic to ${al.en}."** *(Subject: **${p.zh}**)*`;
      const ansZh = `${p.zh}对${al.zh}过敏`;
      const ansPy = `${p.py} duì ${al.py} guòmǐn`;
      return {
        prompt,
        answer: {
          type: "text",
          accept: [ansZh, ansPy],
          display: `${ansZh}。 (${ansPy}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${p.zh}跟${al.zh}过敏`, `${p.zh}在${al.zh}过敏`] },
            feedback: "Allergies always take the preposition 对 (duì): Subject + 对 + Allergen + 过敏!",
          },
        ],
        hint: `Frame: ${p.zh} + 对 + ${al.zh} (${al.py}) + 过敏 (guòmǐn).`,
        solution: [
          `Subject: **${p.zh}**`,
          `Preposition + allergen: **对${al.zh}** (*duì ${al.py}*)`,
          `Verb: **过敏** (*guòmǐn*) → **${ansZh}。**`,
        ],
      };
    },
  },

  {
    id: "illness.dosage-clinic",
    topicId: "illness",
    title: "Prescription Dosages & Tablet Maths (吃药与剂量计算)",
    level: 2,
    guideRef: "at-the-clinic",
    generate(rng, tier) {
      const doc = rng.pick(DOCTORS);
      const med = rng.pick(MEDICINES);

      if (tier === 1) {
        const times = rng.int(1, 4);
        const pills = rng.int(1, 3);
        const meal = rng.pick([
          { zh: "饭后吃", py: "fànhòu chī", en: "after meals" },
          { zh: "饭前吃", py: "fànqián chī", en: "before meals" },
        ] as const);
        const timesEn = times === 1 ? "once a day" : times === 2 ? "twice a day" : `${times} times a day`;
        const pillsEn = pills === 1 ? "1 tablet each time" : `${pills} tablets each time`;
        const tZh = ZH_NUM[times];
        const pZh = ZH_NUM[pills];
        const prompt = `${doc} prescribes **${med.zh}** (*${med.en}*). Write the Mandarin dosage phrase for:\n\n**"${timesEn}, ${pillsEn}"** *(Format: **一天…次，一次…片** — watch **两** vs **二**!)*`;
        const ans1 = `一天${tZh.zh}次，一次${pZh.zh}片`;
        const ans2 = `一天吃${tZh.zh}次，一次吃${pZh.zh}片`;
        const ansPy = `yì tiān ${tZh.py} cì, yí cì ${pZh.py} piàn`;
        const traps =
          times === 2 || pills === 2
            ? [
                {
                  spec: {
                    type: "text" as const,
                    accept: [
                      `一天${times === 2 ? "二" : tZh.zh}次，一次${pills === 2 ? "二" : pZh.zh}片`,
                    ],
                  },
                  feedback: `Remember to use 两 (liǎng), NEVER 二, before measure words 次 and 片! (${meal.zh}，${ans1})`,
                },
              ]
            : undefined;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [ans1, ans2, ansPy],
            display: `${ans1} (${ansPy})`,
          },
          traps,
          hint: "Use 次 (cì) for times per day and 片 (piàn) for tablets per dose; use 两 for 2!",
          solution: [
            `Frequency: **一天${tZh.zh}次** (${timesEn}).`,
            `Dose size: **一次${pZh.zh}片** (${pillsEn}).`,
            `Full instruction: **${ans1}**`,
          ],
        };
      }

      if (tier === 2) {
        const patient = rng.pick(PEOPLE.slice(1));
        const days = rng.int(2, 5);
        const times = rng.int(2, 4);
        const pills = rng.int(1, 3);
        const dZh = ZH_NUM[days].zh;
        const tZh = ZH_NUM[times].zh;
        const pZh = ZH_NUM[pills].zh;
        const perDay = times * pills;
        const total = days * perDay;
        const prompt = `Read ${doc}'s prescription carefully:\n\n**${doc}给${patient.zh}开了${dZh}天的${med.zh}，一天吃${tZh}次，一次吃${pZh}片。**\n\nHow many tablets of **${med.zh}** will ${patient.en} take **in total over all ${days} days**? *(Type a number.)*`;
        return {
          prompt,
          answer: {
            type: "number",
            value: total,
            display: `${total} (${total}片)`,
          },
          traps: [
            {
              spec: { type: "number", value: perDay },
              feedback: `${perDay} tablets is the amount for ONE day (一天${tZh}次，一次${pZh}片). Multiply by ${dZh}天 (${days} days)!`,
            },
          ],
          hint: `First calculate 1 day: ${tZh}次 × ${pZh}片 = ${perDay} tablets/day. Then multiply by ${dZh}天 (${days} days)!`,
          solution: [
            `Per day: **一天${tZh}次，一次${pZh}片** → ${times} × ${pills} = ${perDay} tablets/day.`,
            `Over **${dZh}天** (${days} days): ${perDay} × ${days} = ${total} tablets in total.`,
          ],
        };
      }

      const patient = rng.pick(PEOPLE.slice(1));
      const bottle = rng.pick([24, 30, 36, 40] as const);
      const bottleZh: Record<number, string> = { 24: "二十四", 30: "三十", 36: "三十六", 40: "四十" };
      const days = rng.int(2, 3);
      const times = rng.int(2, 3);
      const pills = rng.int(1, 2);
      const eaten = days * times * pills;
      const left = bottle - eaten;
      const dZh = ZH_NUM[days].zh;
      const tZh = ZH_NUM[times].zh;
      const pZh = ZH_NUM[pills].zh;
      const prompt = `**Clinic Bottle Puzzle:** ${doc} gives ${patient.zh} a bottle of **${med.zh}** containing **${bottleZh[bottle]}片** tablets. The instruction says:\n\n**饭后吃，一天${tZh}次，一次${pZh}片。**\n\nAfter ${patient.zh} takes the medicine for **${dZh}天** (${days} full days), how many tablets are **left in the bottle**? *(Type a number.)*`;
      const traps =
        eaten !== left
          ? [
              {
                spec: { type: "number" as const, value: eaten },
                feedback: `${eaten} is how many tablets ${patient.zh} ATE in ${days} days — subtract ${eaten} from ${bottle} to find how many are LEFT!`,
              },
            ]
          : undefined;
      return {
        prompt,
        answer: {
          type: "number",
          value: left,
          display: `${left} (还剩${left}片)`,
        },
        traps,
        hint: `Find total tablets eaten (${days} × ${times} × ${pills} = ${eaten}), then subtract from ${bottleZh[bottle]} (${bottle})!`,
        solution: [
          `Starting bottle: **${bottleZh[bottle]}片** = ${bottle} tablets.`,
          `Consumed in **${dZh}天**: ${days} × ${times} × ${pills} = ${eaten} tablets.`,
          `Tablets remaining: ${bottle} − ${eaten} = ${left} tablets.`,
        ],
      };
    },
  },

  {
    id: "illness.doctor-advice",
    topicId: "illness",
    title: "Doctor's Advice Frame: 应该 / 得 (děi) / 多 / 少 / 别",
    level: 3,
    guideRef: "modal-advice",
    generate(rng, tier) {
      if (tier === 1) {
        const subj = rng.pick([
          { zh: "你", py: "Nǐ", en: "You" },
          { zh: "弟弟", py: "Dìdi", en: "Little brother" },
          { zh: "妹妹", py: "Mèimei", en: "Little sister" },
          { zh: "小明", py: "Xiǎomíng", en: "Xiaoming" },
          { zh: "美美", py: "Měiměi", en: "Meimei" },
          { zh: "姐姐", py: "Jiějie", en: "Older sister" },
          { zh: "哥哥", py: "Gēge", en: "Older brother" },
        ] as const);
        const adv = rng.pick(ADVICE_DOS);
        const prompt = `Translate into Mandarin using **应该** (*should*) and placing **多 / 少 / 早点** BEFORE the verb:\n\n**"${subj.en} should ${adv.en}."** *(Subject: **${subj.zh}**)*`;
        const ansZh = `${subj.zh}应该${adv.zh}`;
        const ansPy = `${subj.py} yīnggāi ${adv.py}`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [ansZh, ansPy],
            display: `${ansZh}。 (${ansPy}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${subj.zh}应该${adv.wrongOrder}`] },
              feedback: "Modifier magnet rule! Put 多, 少, and 早点 directly BEFORE the verb, never at the end.",
            },
          ],
          hint: `Order: ${subj.zh} + 应该 + ${adv.zh}.`,
          solution: [
            `Subject + modal: **${subj.zh}应该**`,
            `Pre-verbal modifier + verb phrase: **${adv.zh}** (*${adv.py}*)`,
            `Full sentence: **${ansZh}。**`,
          ],
        };
      }

      if (tier === 2) {
        const sym = rng.pick([
          { zh: "发烧了", py: "fāshāo le", en: "have a fever" },
          { zh: "咳嗽了", py: "késou le", en: "are coughing" },
          { zh: "嗓子疼", py: "sǎngzi téng", en: "have a sore throat" },
          { zh: "肚子疼", py: "dùzi téng", en: "have a tummy ache" },
          { zh: "感冒了", py: "gǎnmào le", en: "caught a cold" },
        ] as const);
        const dont = rng.pick(ADVICE_DONTS);
        const neg = rng.pick([
          { zh: "别", py: "bié" },
          { zh: "不要", py: "búyào" },
        ] as const);
        const prompt = `Complete the warning in Mandarin using **${neg.zh}**:\n\n**"You ${sym.en} — don't ${dont.en}!"**\n*(Write the full sentence starting with **你${sym.zh}，${neg.zh}…**)*`;
        const ans1 = `你${sym.zh}，${neg.zh}${dont.zh}`;
        const ans2 = `${neg.zh === "别" ? "你" + sym.zh + "，不要" + dont.zh : "你" + sym.zh + "，别" + dont.zh}`;
        const ansPy = `Nǐ ${sym.py}, ${neg.py} ${dont.py}`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [ans1, ans2, ansPy],
            display: `${ans1}！ (${ansPy}!)`,
          },
          hint: `Start with 你${sym.zh}， then place ${neg.zh} directly before ${dont.zh}!`,
          solution: [
            `Condition: **你${sym.zh}，**`,
            `Negative imperative: **${neg.zh}${dont.zh}！**`,
          ],
        };
      }

      const sym = rng.pick([
        { zh: "感冒了", py: "gǎnmào le", en: "caught a cold" },
        { zh: "发烧了", py: "fāshāo le", en: "have a fever" },
        { zh: "嗓子疼", py: "sǎngzi téng", en: "have a sore throat" },
        { zh: "头疼", py: "tóuténg", en: "have a headache" },
      ] as const);
      const pos = rng.pick(ADVICE_DOS.slice(0, 4));
      const neg = rng.pick(ADVICE_DONTS.slice(0, 4));
      const prompt = `Translate this full doctor's advice into Mandarin using **得** (*děi*, must) and **别** (*don't*):\n\n**"You ${sym.en}; you must ${pos.en}, and don't ${neg.en}!"**\n*(Frame: **你${sym.zh}，得…，别…！**)*`;
      const ans1 = `你${sym.zh}，得${pos.zh}，别${neg.zh}`;
      const ans2 = `你${sym.zh}，你得${pos.zh}，别${neg.zh}`;
      const ansPy = `Nǐ ${sym.py}, děi ${pos.py}, bié ${neg.py}`;
      return {
        prompt,
        answer: {
          type: "text",
          accept: [ans1, ans2, ansPy],
          display: `${ans1}！ (${ansPy}!)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`你${sym.zh}，得${pos.wrongOrder}，别${neg.zh}`] },
            feedback: "Keep 多 / 早点 directly BEFORE the verb in the positive clause!",
          },
        ],
        hint: `Remember 得 is pronounced děi (3rd tone) before ${pos.zh}, and 别 goes straight before ${neg.zh}.`,
        solution: [
          `Symptom: **你${sym.zh}，**`,
          `Obligation with 得 (děi): **得${pos.zh}，**`,
          `Prohibition with 别: **别${neg.zh}！**`,
        ],
      };
    },
  },
];
