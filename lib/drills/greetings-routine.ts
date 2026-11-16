import type { Drill, DrillItem, Rng } from "./types.ts";

const CN_NUM: Record<number, { hz: string; py: string }> = {
  1: { hz: "一", py: "yī" },
  2: { hz: "二", py: "èr" },
  3: { hz: "三", py: "sān" },
  4: { hz: "四", py: "sì" },
  5: { hz: "五", py: "wǔ" },
  6: { hz: "六", py: "liù" },
  7: { hz: "七", py: "qī" },
  8: { hz: "八", py: "bā" },
  9: { hz: "九", py: "jiǔ" },
  10: { hz: "十", py: "shí" },
  11: { hz: "十一", py: "shíyī" },
  12: { hz: "十二", py: "shí'èr" },
  13: { hz: "十三", py: "shísān" },
  14: { hz: "十四", py: "shísì" },
  15: { hz: "十五", py: "shíwǔ" },
  16: { hz: "十六", py: "shíliù" },
  20: { hz: "二十", py: "èrshí" },
  25: { hz: "二十五", py: "èrshíwǔ" },
  35: { hz: "三十五", py: "sānshíwǔ" },
  40: { hz: "四十", py: "sìshí" },
  50: { hz: "五十", py: "wǔshí" },
  55: { hz: "五十五", py: "wǔshíwǔ" },
};

function hourMandarin(h12: number): { hz: string; py: string } {
  if (h12 === 2) return { hz: "两点", py: "liǎng diǎn" };
  const n = CN_NUM[h12];
  return { hz: `${n.hz}点`, py: `${n.py} diǎn` };
}

const SUBJECTS = [
  { hz: "我", py: "Wǒ", en: "I", verbS: false },
  { hz: "哥哥", py: "Gēge", en: "My older brother", verbS: true },
  { hz: "姐姐", py: "Jiějie", en: "My older sister", verbS: true },
  { hz: "弟弟", py: "Dìdi", en: "My younger brother", verbS: true },
  { hz: "妹妹", py: "Mèimei", en: "My younger sister", verbS: true },
  { hz: "爸爸", py: "Bàba", en: "Dad", verbS: true },
  { hz: "妈妈", py: "Māma", en: "Mum", verbS: true },
  { hz: "小明", py: "Xiǎomíng", en: "Xiaoming", verbS: true },
  { hz: "美美", py: "Měiměi", en: "Meimei", verbS: true },
] as const;

const NATIONALITIES = [
  { hz: "新加坡人", py: "Xīnjiāpōrén", en: "Singaporean" },
  { hz: "英国人", py: "Yīngguórén", en: "British" },
  { hz: "中国人", py: "Zhōngguórén", en: "Chinese" },
] as const;

const GRADES = [
  { n: 7, hz: "七年级", py: "qī niánjí", en: "Year 7" },
  { n: 8, hz: "八年级", py: "bā niánjí", en: "Year 8" },
  { n: 9, hz: "九年级", py: "jiǔ niánjí", en: "Year 9" },
  { n: 10, hz: "十年级", py: "shí niánjí", en: "Year 10" },
] as const;

const identityDrill: Drill = {
  id: "greetings-routine.identity-profile",
  topicId: "greetings-routine",
  title: "Identity, Age, Grade & Nationality Builder",
  level: 1,
  guideRef: "greetings-identity",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const subj = rng.pick(SUBJECTS);
    if (tier === 1) {
      const mode = rng.int(1, 2);
      if (mode === 1) {
        const age = rng.int(11, 16);
        const ageCn = CN_NUM[age];
        const be = subj.en === "I" ? "am" : "is";
        return {
          prompt: `Translate into Mandarin (Hanzi or tone-marked Pinyin):\n**"${subj.en} ${be} ${age} years old this year."**`,
          answer: {
            type: "text",
            accept: [
              `${subj.hz}今年${ageCn.hz}岁`,
              `${subj.hz}今年${ageCn.hz}岁。`,
              `${subj.py} jīnnián ${ageCn.py} suì`,
              `${subj.py} jīnnián ${ageCn.py.replace("'", " ")} suì`,
            ],
            display: `${subj.hz}今年${ageCn.hz}岁。 (${subj.py} jīnnián ${ageCn.py} suì.)`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`${subj.hz}今年是${ageCn.hz}岁`, `${subj.hz}是${ageCn.hz}岁`],
              },
              feedback: "Remember: NEVER put 是 (shì) before an age with 岁!",
            },
          ],
          hint: "Subject + 今年 (this year) + Number + 岁 (no 是!).",
          solution: [
            `Start with Subject **${subj.hz}** + time **今年** (*jīnnián*).`,
            `Add age **${ageCn.hz}岁** (*${ageCn.py} suì*) with NO **是**: **${subj.hz}今年${ageCn.hz}岁。**`,
          ],
        };
      }
      const nat = rng.pick(NATIONALITIES);
      const be = subj.en === "I" ? "am" : "is";
      return {
        prompt: `Translate into Mandarin (Hanzi or Pinyin):\n**"${subj.en} ${be} ${nat.en}."**`,
        answer: {
          type: "text",
          accept: [
            `${subj.hz}是${nat.hz}`,
            `${subj.hz}是${nat.hz}。`,
            `${subj.py} shì ${nat.py}`,
          ],
          display: `${subj.hz}是${nat.hz}。 (${subj.py} shì ${nat.py}.)`,
        },
        hint: "Use 是 (shì) to link the subject to the nationality noun (…人).",
        solution: [
          `Link Subject **${subj.hz}** with **是** (*shì*) + **${nat.hz}** (*${nat.py}*).`,
          `Answer: **${subj.hz}是${nat.hz}。**`,
        ],
      };
    }

    if (tier === 2) {
      const grade = rng.pick(GRADES);
      const useAlso = rng.bool(0.45);
      const be = subj.en === "I" ? "am" : "is";
      if (useAlso) {
        return {
          prompt: `Translate into Mandarin using **也** (*yě*, also) and **上** (*shàng*):\n**"${subj.en} ${be} also in ${grade.en}."**`,
          answer: {
            type: "text",
            accept: [
              `${subj.hz}也上${grade.hz}`,
              `${subj.hz}也上${grade.hz}。`,
              `${subj.py} yě shàng ${grade.py}`,
            ],
            display: `${subj.hz}也上${grade.hz}。 (${subj.py} yě shàng ${grade.py}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${subj.hz}上${grade.hz}也`] },
              feedback: "Place the adverb 也 directly BEFORE the verb 上, never at the end!",
            },
          ],
          hint: "Put 也 (yě) right before the verb 上 (shàng) + Grade.",
          solution: [
            `Subject **${subj.hz}** + adverb **也** (*yě*) + verb **上** (*shàng*) + **${grade.hz}**.`,
            `Answer: **${subj.hz}也上${grade.hz}。**`,
          ],
        };
      }
      const nat = rng.pick(NATIONALITIES);
      const qPron = rng.pick([
        { hz: "你", py: "Nǐ", en: "Are you" },
        { hz: "他", py: "Tā", en: "Is he" },
        { hz: "她", py: "Tā", en: "Is she" },
        { hz: "王老师", py: "Wáng lǎoshī", en: "Is Teacher Wang" },
      ] as const);
      return {
        prompt: `Write the Mandarin yes/no question using **吗** (*ma*):\n**"${qPron.en} ${nat.en}?"**`,
        answer: {
          type: "text",
          accept: [
            `${qPron.hz}是${nat.hz}吗`,
            `${qPron.hz}是${nat.hz}吗？`,
            `${qPron.py} shì ${nat.py} ma`,
          ],
          display: `${qPron.hz}是${nat.hz}吗？ (${qPron.py} shì ${nat.py} ma?)`,
        },
        hint: "Turn the statement 'Subject + 是 + Nationality' into a yes/no question by adding 吗 at the end.",
        solution: [
          `Statement: **${qPron.hz}是${nat.hz}** (${qPron.py} shì ${nat.py}).`,
          `Add **吗** (*ma*) at the end: **${qPron.hz}是${nat.hz}吗？**`,
        ],
      };
    }

    // tier 3: combined age + grade or nationality + bounce-back 呢
    const age = rng.int(11, 15);
    const ageCn = CN_NUM[age];
    const grade = rng.pick(GRADES);
    const be = subj.en === "I" ? "am" : "is";
    return {
      prompt: `Translate both clauses into Mandarin (separate with a comma **，**):\n**"${subj.en} ${be} ${age} years old this year, and in ${grade.en}."** (Use **今年** and **上** — NO **和**!)`,
      answer: {
        type: "text",
        accept: [
          `${subj.hz}今年${ageCn.hz}岁，上${grade.hz}`,
          `${subj.hz}今年${ageCn.hz}岁，上${grade.hz}。`,
          `${subj.py} jīnnián ${ageCn.py} suì, shàng ${grade.py}`,
          `${subj.py} jīnnián ${ageCn.py.replace("'", " ")} suì, shàng ${grade.py}`,
        ],
        display: `${subj.hz}今年${ageCn.hz}岁，上${grade.hz}。`,
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: [`${subj.hz}今年${ageCn.hz}岁，和上${grade.hz}`],
          },
          feedback: "Never use 和 to join two verb/predicate clauses! Use a comma directly before 上.",
        },
      ],
      hint: "Clause 1: Subject + 今年 + Age + 岁 (no 是!). Clause 2: comma + 上 + Grade (no 和!).",
      solution: [
        `First clause (no **是**): **${subj.hz}今年${ageCn.hz}岁**.`,
        `Second clause (drop repeated subject, no **和**): **上${grade.hz}**.`,
        `Combined: **${subj.hz}今年${ageCn.hz}岁，上${grade.hz}。**`,
      ],
    };
  },
};

const SIBLINGS = [
  { hz: "哥哥", py: "gēge", enSg: "older brother", enPl: "older brothers" },
  { hz: "姐姐", py: "jiějie", enSg: "older sister", enPl: "older sisters" },
  { hz: "弟弟", py: "dìdi", enSg: "younger brother", enPl: "younger brothers" },
  { hz: "妹妹", py: "mèimei", enSg: "younger sister", enPl: "younger sisters" },
] as const;

const PETS = [
  { hz: "狗", py: "gǒu", enSg: "dog", enPl: "dogs" },
  { hz: "小狗", py: "xiǎogǒu", enSg: "puppy", enPl: "puppies" },
  { hz: "猫", py: "māo", enSg: "cat", enPl: "cats" },
  { hz: "小猫", py: "xiǎomāo", enSg: "kitten", enPl: "kittens" },
] as const;

const familyPetsDrill: Drill = {
  id: "greetings-routine.family-pets-classifiers",
  topicId: "greetings-routine",
  title: "Family & Pets: 口 vs 个 vs 只 & 没有",
  level: 1,
  guideRef: "family-pets",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const owner = rng.pick([
      { hz: "我家", py: "Wǒ jiā", en: "My family" },
      { hz: "小明家", py: "Xiǎomíng jiā", en: "Xiaoming's family" },
      { hz: "美美家", py: "Měiměi jiā", en: "Meimei's family" },
      { hz: "他家", py: "Tā jiā", en: "His family" },
      { hz: "她家", py: "Tā jiā", en: "Her family" },
    ] as const);

    if (tier === 1) {
      const n = rng.int(3, 8);
      const nCn = CN_NUM[n];
      return {
        prompt: `Translate into Mandarin using the household measure word **口** (*kǒu*):\n**"${owner.en} has ${n} people."**`,
        answer: {
          type: "text",
          accept: [
            `${owner.hz}有${nCn.hz}口人`,
            `${owner.hz}有${nCn.hz}口人。`,
            `${owner.py} yǒu ${nCn.py} kǒu rén`,
          ],
          display: `${owner.hz}有${nCn.hz}口人。 (${owner.py} yǒu ${nCn.py} kǒu rén.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${owner.hz}有${nCn.hz}只人`] },
            feedback: "只 (zhī) is for animals! Use 口 (kǒu) for household family members.",
          },
        ],
        hint: "Owner + 有 (yǒu) + Number + 口人 (kǒu rén).",
        solution: [
          `Use **有** (*yǒu*) + **${nCn.hz}口人** (*${nCn.py} kǒu rén*) for household headcount.`,
          `Answer: **${owner.hz}有${nCn.hz}口人。**`,
        ],
      };
    }

    if (tier === 2) {
      const isNeg = rng.bool(0.45);
      const sib = rng.pick(SIBLINGS);
      const person = rng.pick([
        { hz: "我", py: "Wǒ", en: "I", negEn: "do not have" },
        { hz: "小明", py: "Xiǎomíng", en: "Xiaoming", negEn: "does not have" },
        { hz: "美美", py: "Měiměi", en: "Meimei", negEn: "does not have" },
        { hz: "他", py: "Tā", en: "He", negEn: "does not have" },
      ] as const);
      if (isNeg) {
        const art = /^[aeiou]/i.test(sib.enSg) ? "an" : "a";
        return {
          prompt: `Translate into Mandarin:\n**"${person.en} ${person.negEn} ${art} ${sib.enSg}."**`,
          answer: {
            type: "text",
            accept: [
              `${person.hz}没有${sib.hz}`,
              `${person.hz}没有${sib.hz}。`,
              `${person.py} méiyǒu ${sib.py}`,
            ],
            display: `${person.hz}没有${sib.hz}。 (${person.py} méiyǒu ${sib.py}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${person.hz}不有${sib.hz}`] },
              feedback: "Trap alert! NEVER negate 有 with 不 — always write 没有 (méiyǒu)!",
            },
          ],
          hint: "Negate 有 with 没有 (méiyǒu), and drop 'one' (一个).",
          solution: [
            `**有** is always negated as **没有** (*méiyǒu*): **${person.hz}没有${sib.hz}。**`,
          ],
        };
      }
      const count = rng.int(1, 3);
      const countHz = count === 1 ? "一" : count === 2 ? "两" : "三";
      const countPy = count === 1 ? "yì" : count === 2 ? "liǎng" : "sān";
      const pet = rng.pick(PETS);
      const petEn = count === 1 ? `1 ${pet.enSg}` : `${count} ${pet.enPl}`;
      return {
        prompt: `Translate into Mandarin using **有** (*yǒu*) and the animal classifier **只** (*zhī*):\n**"${owner.en} has ${petEn}."**`,
        answer: {
          type: "text",
          accept: [
            `${owner.hz}有${countHz}只${pet.hz}`,
            `${owner.hz}有${countHz}只${pet.hz}。`,
            `${owner.py} yǒu ${countPy} zhī ${pet.py}`,
            `${owner.py} yǒu ${count === 1 ? "yī" : countPy} zhī ${pet.py}`,
          ],
          display: `${owner.hz}有${countHz}只${pet.hz}。 (${owner.py} yǒu ${countPy} zhī ${pet.py}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${owner.hz}有二只${pet.hz}`] },
            feedback: "Before a measure word like 只, 'two' is ALWAYS 两 (liǎng zhī), never *二只*!",
          },
        ],
        hint: "Use 两 (liǎng) if the count is 2, followed by 只 (zhī) + pet!",
        solution: [
          `Count + animal classifier **只**: **${countHz}只${pet.hz}** (*${countPy} zhī ${pet.py}*).`,
          `Full sentence: **${owner.hz}有${countHz}只${pet.hz}。**`,
        ],
      };
    }

    // tier 3: joining two sibling noun phrases with 和 and 个/两
    const [s1, s2] = rng.shuffle(SIBLINGS).slice(0, 2);
    const c1 = rng.int(1, 2);
    const c2 = rng.int(1, 2);
    const c1Hz = c1 === 1 ? "一个" : "两个";
    const c1Py = c1 === 1 ? "yí gè" : "liǎng gè";
    const c2Hz = c2 === 1 ? "一个" : "两个";
    const c2Py = c2 === 1 ? "yí gè" : "liǎng gè";
    const en1 = c1 === 1 ? `1 ${s1.enSg}` : `2 ${s1.enPl}`;
    const en2 = c2 === 1 ? `1 ${s2.enSg}` : `2 ${s2.enPl}`;
    const person = rng.pick([
      { hz: "我", py: "Wǒ", en: "I have" },
      { hz: "小明", py: "Xiǎomíng", en: "Xiaoming has" },
      { hz: "美美", py: "Měiměi", en: "Meimei has" },
    ] as const);
    return {
      prompt: `Translate into Mandarin using **个** (*gè*) and **和** (*hé*):\n**"${person.en} ${en1} and ${en2}."**`,
      answer: {
        type: "text",
        accept: [
          `${person.hz}有${c1Hz}${s1.hz}和${c2Hz}${s2.hz}`,
          `${person.hz}有${c1Hz}${s1.hz}和${c2Hz}${s2.hz}。`,
          `${person.py} yǒu ${c1Py} ${s1.py} hé ${c2Py} ${s2.py}`,
        ],
        display: `${person.hz}有${c1Hz}${s1.hz}和${c2Hz}${s2.hz}。`,
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: [
              `${person.hz}有二个${s1.hz}和${c2Hz}${s2.hz}`,
              `${person.hz}有${c1Hz}${s1.hz}和二个${s2.hz}`,
            ],
          },
          feedback: "Always use 两个 (liǎng gè) for 2 before a classifier, never *二个*!",
        },
      ],
      hint: "Individual siblings take 个 (一个 / 两个), and noun phrases join with 和.",
      solution: [
        `First noun phrase: **${c1Hz}${s1.hz}** (*${c1Py} ${s1.py}*).`,
        `Join with **和** (*hé*) + second noun phrase **${c2Hz}${s2.hz}** (*${c2Py} ${s2.py}*).`,
        `Result: **${person.hz}有${c1Hz}${s1.hz}和${c2Hz}${s2.hz}。**`,
      ],
    };
  },
};

const PERIODS = [
  { hz: "早上", py: "zǎoshang", en: "am (early morning)", hours: [6, 7, 8] },
  { hz: "上午", py: "shàngwǔ", en: "am (morning)", hours: [9, 10, 11] },
  { hz: "下午", py: "xiàwǔ", en: "pm (afternoon)", hours: [1, 2, 3, 4, 5] },
  { hz: "晚上", py: "wǎnshang", en: "pm (evening)", hours: [7, 8, 9, 10] },
] as const;

const clockDrill: Drill = {
  id: "greetings-routine.clock-converter",
  topicId: "greetings-routine",
  title: "Clock Time Converter: 点, 半, 刻 & 差",
  level: 2,
  guideRef: "clock-times",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const period = rng.pick(PERIODS);
    const h = rng.pick(period.hours);
    const hObj = hourMandarin(h);
    const isPm = period.hz === "下午" || period.hz === "晚上";
    const h24 = isPm ? h + 12 : h;

    if (tier === 1) {
      const mins = rng.pick([0, 30] as const);
      const padM = mins === 0 ? "00" : "30";
      const hzTime = mins === 0 ? `${period.hz}${hObj.hz}` : `${period.hz}${hObj.hz}半`;
      const pyTime = mins === 0 ? `${period.py} ${hObj.py}` : `${period.py} ${hObj.py} bàn`;
      const acceptList =
        mins === 0
          ? [hzTime, `${hzTime}整`, pyTime]
          : [hzTime, `${period.hz}${hObj.hz}三十分`, pyTime, `${period.py} ${hObj.py} sānshí fēn`];
      return {
        prompt: `Write **${h}:${padM} ${period.en}** in Mandarin (Hanzi or Pinyin):`,
        answer: {
          type: "text",
          accept: acceptList,
          display: `${hzTime} (${pyTime})`,
        },
        traps:
          h === 2
            ? [
                {
                  spec: { type: "text", accept: [`${period.hz}二点`, `${period.hz}二点半`] },
                  feedback: "Watch out! 2 o'clock is ALWAYS 两点 (liǎng diǎn), never *二点*!",
                },
              ]
            : undefined,
        hint: "Big-to-small order: Period (早上/上午/下午/晚上) + Hour + 点 (+ 半 for :30).",
        solution: [
          `Put the period **${period.hz}** (*${period.py}*) first.`,
          `Follow with **${hObj.hz}${mins === 30 ? "半" : ""}** → **${hzTime}** (*${pyTime}*).`,
        ],
      };
    }

    if (tier === 2) {
      const mins = rng.pick([5, 15, 20, 45] as const);
      const padM = String(mins).padStart(2, "0");
      if (mins === 15 || mins === 45) {
        const keHz = mins === 15 ? "一刻" : "三刻";
        const kePy = mins === 15 ? "yí kè" : "sān kè";
        const minNumHz = mins === 15 ? "十五分" : "四十五分";
        return {
          prompt: `Write **${h}:${padM} ${period.en}** in Mandarin using **刻** (*kè*):`,
          answer: {
            type: "text",
            accept: [
              `${period.hz}${hObj.hz}${keHz}`,
              `${period.py} ${hObj.py} ${kePy}`,
              `${period.hz}${hObj.hz}${minNumHz}`,
            ],
            display: `${period.hz}${hObj.hz}${keHz} (${period.py} ${hObj.py} ${kePy})`,
          },
          hint: `Period (${period.hz}) + ${h} o'clock + ${mins === 15 ? "一刻 (:15)" : "三刻 (:45)"}.`,
          solution: [
            `Big-to-small: **${period.hz}** + **${hObj.hz}** + **${keHz}** (*${kePy}*).`,
            `Answer: **${period.hz}${hObj.hz}${keHz}**.`,
          ],
        };
      }
      // mins === 5 or 20
      const minHz = mins === 5 ? "零五分" : "二十分";
      const minPy = mins === 5 ? "líng wǔ fēn" : "èrshí fēn";
      return {
        prompt: `Write **${h}:${padM} ${period.en}** in Mandarin (Hanzi or Pinyin):`,
        answer: {
          type: "text",
          accept: [
            `${period.hz}${hObj.hz}${minHz}`,
            `${period.py} ${hObj.py} ${minPy}`,
          ],
          display: `${period.hz}${hObj.hz}${minHz} (${period.py} ${hObj.py} ${minPy})`,
        },
        traps:
          mins === 5
            ? [
                {
                  spec: { type: "text", accept: [`${period.hz}${hObj.hz}五分`] },
                  feedback: "Include 零 (líng) before single-digit minutes: 零五分!",
                },
              ]
            : undefined,
        hint: mins === 5 ? "Remember 零 (líng) for :05 → 零五分!" : "Use 二十分 (èrshí fēn) for :20!",
        solution: [
          `Period **${period.hz}** + Hour **${hObj.hz}** + Minutes **${minHz}**.`,
          `Answer: **${period.hz}${hObj.hz}${minHz}**.`,
        ],
      };
    }

    // tier 3: decode 差…分…点 into 24-hour digital HH:MM
    const shortMins = rng.pick([5, 10, 15] as const);
    const nextH12 = h + 1;
    const nextHObj = hourMandarin(nextH12);
    const actualM = 60 - shortMins;
    const digital24 = `${String(h24).padStart(2, "0")}:${String(actualM).padStart(2, "0")}`;
    const shortHz = shortMins === 15 ? "差一刻" : `差${CN_NUM[shortMins].hz}分`;
    const shortPy = shortMins === 15 ? "chà yí kè" : `chà ${CN_NUM[shortMins].py} fēn`;
    const wrongAfter = `${String(isPm ? nextH12 + 12 : nextH12).padStart(2, "0")}:${String(shortMins).padStart(2, "0")}`;

    return {
      prompt: `Convert **${period.hz}${shortHz}${nextHObj.hz}** (*${period.py} ${shortPy} ${nextHObj.py}*) into **24-hour digital time** (` + "`HH:MM`" + `):`,
      answer: {
        type: "text",
        accept: [digital24, `${h24}:${actualM}`],
        display: digital24,
      },
      traps: [
        {
          spec: { type: "text", accept: [wrongAfter] },
          feedback: `差 means 'short of / BEFORE' ${nextHObj.hz} — subtract ${shortMins} minutes from ${nextH12}:00 instead of adding!`,
        },
      ],
      hint: `差 means '${shortMins} minutes BEFORE ${nextH12}:00' in the ${isPm ? "afternoon/evening (+12h)" : "morning"}.`,
      solution: [
        `**${period.hz}${nextHObj.hz}** corresponds to ${String(isPm ? nextH12 + 12 : nextH12).padStart(2, "0")}:00 in 24-hour time.`,
        `Subtract ${shortMins} minutes (**${shortHz}**): **${digital24}**.`,
      ],
    };
  },
};

const ROUTINE_EVENTS = [
  { hz: "起床", py: "qǐchuáng", enI: "get up", en3: "gets up", periods: ["早上"], hours: [6, 7] },
  { hz: "吃早饭", py: "chī zǎofàn", enI: "eat breakfast", en3: "eats breakfast", periods: ["早上"], hours: [6, 7, 8] },
  { hz: "去上学", py: "qù shàngxué", enI: "go to school", en3: "goes to school", periods: ["早上"], hours: [7, 8] },
  { hz: "上中文课", py: "shàng Zhōngwén kè", enI: "have Chinese class", en3: "has Chinese class", periods: ["上午"], hours: [8, 9, 10, 11] },
  { hz: "吃午饭", py: "chī wǔfàn", enI: "eat lunch", en3: "eats lunch", periods: ["中午"], hours: [12] },
  { hz: "放学", py: "fàngxué", enI: "finish school", en3: "finishes school", periods: ["下午"], hours: [2, 3, 4] },
  { hz: "回家", py: "huí jiā", enI: "go home", en3: "goes home", periods: ["下午"], hours: [3, 4, 5] },
  { hz: "做作业", py: "zuò zuòyè", enI: "do homework", en3: "does homework", periods: ["下午", "晚上"], hours: [4, 5, 7, 8], place: { hz: "在家", py: "zài jiā", en: "at home" } },
  { hz: "吃晚饭", py: "chī wǎnfàn", enI: "eat dinner", en3: "eats dinner", periods: ["晚上"], hours: [6, 7, 8], place: { hz: "在家", py: "zài jiā", en: "at home" } },
  { hz: "睡觉", py: "shuìjiào", enI: "go to bed", en3: "goes to bed", periods: ["晚上"], hours: [9, 10] },
] as const;

const PERIOD_LOOKUP: Record<string, { py: string; en: string }> = {
  早上: { py: "zǎoshang", en: "in the morning" },
  上午: { py: "shàngwǔ", en: "in the morning" },
  中午: { py: "zhōngwǔ", en: "at noon" },
  下午: { py: "xiàwǔ", en: "in the afternoon" },
  晚上: { py: "wǎnshang", en: "in the evening" },
};

const stpvRoutineDrill: Drill = {
  id: "greetings-routine.stpv-routine",
  topicId: "greetings-routine",
  title: "STPV Daily-Routine Sentence Builder",
  level: 3,
  guideRef: "daily-routine",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const subj = rng.pick(SUBJECTS);
    const ev = rng.pick(ROUTINE_EVENTS);
    const perHz = rng.pick(ev.periods);
    const perInfo = PERIOD_LOOKUP[perHz];
    const h = rng.pick(ev.hours);
    const hObj = hourMandarin(h);
    const minChoice = tier === 1 ? rng.pick([0, 30] as const) : rng.pick([0, 15, 30] as const);
    const minHz = minChoice === 0 ? "" : minChoice === 15 ? "一刻" : "半";
    const minPy = minChoice === 0 ? "" : minChoice === 15 ? " yí kè" : " bàn";
    const minEn = minChoice === 0 ? "00" : minChoice === 15 ? "15" : "30";
    const actEn = subj.verbS ? ev.en3 : ev.enI;

    if (tier === 1) {
      const fullHz = `${subj.hz}${perHz}${hObj.hz}${minHz}${ev.hz}`;
      const fullPy = `${subj.py} ${perInfo.py} ${hObj.py}${minPy} ${ev.py}`;
      return {
        prompt: `Translate into Mandarin using **Subject + Time + Action** order (use **${perHz}**):\n**"${subj.en} ${actEn} at ${h}:${minEn} ${perInfo.en}."**`,
        answer: {
          type: "text",
          accept: [fullHz, `${fullHz}。`, fullPy],
          display: `${fullHz}。 (${fullPy}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${subj.hz}在${perHz}${hObj.hz}${minHz}${ev.hz}`] },
            feedback: "Drop 在! Never put 在 before a clock time in Mandarin.",
          },
          {
            spec: { type: "text", accept: [`${subj.hz}${ev.hz}${perHz}${hObj.hz}${minHz}`] },
            feedback: "Move the time phrase BEFORE the action verb!",
          },
        ],
        hint: `Order: ${subj.hz} + ${perHz}${hObj.hz}${minHz} + ${ev.hz} (no 在!).`,
        solution: [
          `1. Subject: **${subj.hz}**`,
          `2. Time (big → small, no **在**): **${perHz}${hObj.hz}${minHz}**`,
          `3. Action verb: **${ev.hz}** → **${fullHz}。**`,
        ],
      };
    }

    if (tier === 2) {
      // Unscramble with 每天
      const fullHz = `${subj.hz}每天${perHz}${hObj.hz}${minHz}${ev.hz}`;
      const fullPy = `${subj.py} měitiān ${perInfo.py} ${hObj.py}${minPy} ${ev.py}`;
      const altHz = `每天${perHz}${hObj.hz}${minHz}${subj.hz}${ev.hz}`;
      const blocks = [`${hObj.hz}${minHz}`, ev.hz, subj.hz, `每天${perHz}`];
      return {
        prompt: `Unscramble these blocks into a natural Mandarin sentence:\n**${blocks.join(" / ")}**`,
        answer: {
          type: "text",
          accept: [fullHz, `${fullHz}。`, altHz, `${altHz}。`, fullPy],
          display: `${fullHz}。 (${fullPy}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${subj.hz}${ev.hz}每天${perHz}${hObj.hz}${minHz}`] },
            feedback: "Time NEVER sits after the verb in Mandarin! Put 每天… BEFORE the action verb.",
          },
        ],
        hint: "Subject + 每天 + Period + Clock Hour + Action Verb.",
        solution: [
          `Arrange Time from biggest to smallest: **每天${perHz}** → **${hObj.hz}${minHz}**.`,
          `Place Time before **${ev.hz}**: **${fullHz}。**`,
        ],
      };
    }

    // tier 3: full STPV with Place (在家 / 在学校)
    const placeEvents = [
      { hz: "做作业", py: "zuò zuòyè", enI: "do homework", en3: "does homework", perHz: "下午", perPy: "xiàwǔ", perEn: "pm", hours: [4, 5], placeHz: "在家", placePy: "zài jiā", placeEn: "at home" },
      { hz: "吃晚饭", py: "chī wǎnfàn", enI: "eat dinner", en3: "eats dinner", perHz: "晚上", perPy: "wǎnshang", perEn: "pm", hours: [6, 7, 8], placeHz: "在家", placePy: "zài jiā", placeEn: "at home" },
      { hz: "吃午饭", py: "chī wǔfàn", enI: "eat lunch", en3: "eats lunch", perHz: "中午", perPy: "zhōngwǔ", perEn: "pm", hours: [12], placeHz: "在学校", placePy: "zài xuéxiào", placeEn: "at school" },
      { hz: "上中文课", py: "shàng Zhōngwén kè", enI: "have Chinese class", en3: "has Chinese class", perHz: "上午", perPy: "shàngwǔ", perEn: "am", hours: [8, 9, 10], placeHz: "在学校", placePy: "zài xuéxiào", placeEn: "at school" },
    ] as const;
    const pev = rng.pick(placeEvents);
    const ph = rng.pick(pev.hours);
    const phObj = hourMandarin(ph);
    const pmChoice = rng.pick([0, 15, 30] as const);
    const pmHz = pmChoice === 0 ? "" : pmChoice === 15 ? "一刻" : "半";
    const pmPy = pmChoice === 0 ? "" : pmChoice === 15 ? " yí kè" : " bàn";
    const pmEn = pmChoice === 0 ? "00" : pmChoice === 15 ? "15" : "30";
    const pActEn = subj.verbS ? pev.en3 : pev.enI;
    const fullHz = `${subj.hz}${pev.perHz}${phObj.hz}${pmHz}${pev.placeHz}${pev.hz}`;
    const fullPy = `${subj.py} ${pev.perPy} ${phObj.py}${pmPy} ${pev.placePy} ${pev.py}`;

    return {
      prompt: `Translate into Mandarin using full **Subject + Time + Place + Verb (STPV)** order (use **${pev.perHz}** and **${pev.placeHz}**):\n**"${subj.en} ${pActEn} ${pev.placeEn} at ${ph}:${pmEn} ${pev.perEn}."**`,
      answer: {
        type: "text",
        accept: [fullHz, `${fullHz}。`, fullPy],
        display: `${fullHz}。 (${fullPy}.)`,
      },
      traps: [
        {
          spec: { type: "text", accept: [`${subj.hz}${pev.placeHz}${pev.perHz}${phObj.hz}${pmHz}${pev.hz}`] },
          feedback: "Almost! In STPV order, Time comes BEFORE Place: Time → 在+Place → Verb!",
        },
      ],
      hint: `STPV: ${subj.hz} (S) + ${pev.perHz}${phObj.hz}${pmHz} (T) + ${pev.placeHz} (P) + ${pev.hz} (V).`,
      solution: [
        `1. Subject: **${subj.hz}**`,
        `2. Time (no **在**): **${pev.perHz}${phObj.hz}${pmHz}**`,
        `3. Place (with **在**): **${pev.placeHz}**`,
        `4. Verb: **${pev.hz}** → **${fullHz}。**`,
      ],
    };
  },
};

export const drills: Drill[] = [
  identityDrill,
  familyPetsDrill,
  clockDrill,
  stpvRoutineDrill,
];
