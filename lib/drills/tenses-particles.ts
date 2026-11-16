import type { Drill, DrillItem, Rng } from "./types.ts";

interface Term {
  hz: string;
  py: string;
  en: string;
}

const SUBJECTS: readonly Term[] = [
  { hz: "我", py: "Wǒ", en: "I" },
  { hz: "妈妈", py: "Māma", en: "Mum" },
  { hz: "爸爸", py: "Bàba", en: "Dad" },
  { hz: "哥哥", py: "Gēge", en: "my older brother" },
  { hz: "姐姐", py: "Jiějie", en: "my older sister" },
  { hz: "弟弟", py: "Dìdi", en: "my younger brother" },
  { hz: "小明", py: "Xiǎomíng", en: "Xiaoming" },
  { hz: "美美", py: "Měiměi", en: "Meimei" },
];

const PAST_TIMES: readonly Term[] = [
  { hz: "昨天", py: "zuótiān", en: "yesterday" },
  { hz: "今天早上", py: "jīntiān zǎoshang", en: "this morning" },
  { hz: "上个星期", py: "shàng gè xīngqī", en: "last week" },
  { hz: "前天", py: "qiántiān", en: "the day before yesterday" },
];

const QUANT_EVENTS: readonly {
  verbHz: string;
  verbPy: string;
  verbEn: string;
  objHz: string;
  objPy: string;
  objEn: string;
}[] = [
  {
    verbHz: "吃",
    verbPy: "chī",
    verbEn: "ate",
    objHz: "两个包子",
    objPy: "liǎng gè bāozi",
    objEn: "two steamed buns",
  },
  {
    verbHz: "喝",
    verbPy: "hē",
    verbEn: "drank",
    objHz: "三杯水",
    objPy: "sān bēi shuǐ",
    objEn: "three glasses of water",
  },
  {
    verbHz: "买",
    verbPy: "mǎi",
    verbEn: "bought",
    objHz: "两件衬衫",
    objPy: "liǎng jiàn chènshān",
    objEn: "two shirts",
  },
  {
    verbHz: "看",
    verbPy: "kàn",
    verbEn: "read",
    objHz: "一本中文书",
    objPy: "yì běn Zhōngwén shū",
    objEn: "one Chinese book",
  },
  {
    verbHz: "吃",
    verbPy: "chī",
    verbEn: "ate",
    objHz: "八个小笼包",
    objPy: "bā gè xiǎolóngbāo",
    objEn: "eight soup dumplings",
  },
  {
    verbHz: "买",
    verbPy: "mǎi",
    verbEn: "bought",
    objHz: "三斤芒果",
    objPy: "sān jīn mángguǒ",
    objEn: "1.5 kg of mangoes",
  },
];

const EXP_ITEMS: readonly {
  verbHz: string;
  verbPy: string;
  objHz: string;
  objPy: string;
  en: string;
}[] = [
  { verbHz: "去", verbPy: "qù", objHz: "北京", objPy: "Běijīng", en: "been to Beijing" },
  { verbHz: "去", verbPy: "qù", objHz: "长城", objPy: "Chángchéng", en: "been to the Great Wall" },
  { verbHz: "去", verbPy: "qù", objHz: "哈尔滨", objPy: "Hā'ěrbīn", en: "been to Harbin" },
  { verbHz: "吃", verbPy: "chī", objHz: "北京烤鸭", objPy: "Běijīng kǎoyā", en: "eaten Peking roast duck" },
  { verbHz: "吃", verbPy: "chī", objHz: "榴莲", objPy: "liúlián", en: "eaten durian" },
  { verbHz: "尝", verbPy: "cháng", objHz: "辣椒螃蟹", objPy: "làjiāo pángxiè", en: "tasted chilli crab" },
  { verbHz: "看", verbPy: "kàn", objHz: "下雪", objPy: "xià xuě", en: "seen snow" },
  { verbHz: "学", verbPy: "xué", objHz: "弹钢琴", objPy: "tán gāngqín", en: "learned piano" },
];

const ONGOING_ACTIONS: readonly {
  placeHz: string;
  placePy: string;
  placeEn: string;
  actHz: string;
  actPy: string;
  actEn: string;
}[] = [
  {
    placeHz: "房间",
    placePy: "fángjiān",
    placeEn: "in the bedroom",
    actHz: "做作业",
    actPy: "zuò zuòyè",
    actEn: "doing homework",
  },
  {
    placeHz: "厨房",
    placePy: "chúfáng",
    placeEn: "in the kitchen",
    actHz: "做晚饭",
    actPy: "zuò wǎnfàn",
    actEn: "cooking dinner",
  },
  {
    placeHz: "图书馆",
    placePy: "túshūguǎn",
    placeEn: "in the library",
    actHz: "看书",
    actPy: "kàn shū",
    actEn: "reading books",
  },
  {
    placeHz: "客厅",
    placePy: "kètīng",
    placeEn: "in the living room",
    actHz: "看电视",
    actPy: "kàn diànshì",
    actEn: "watching TV",
  },
  {
    placeHz: "体育馆",
    placePy: "tǐyùguǎn",
    placeEn: "in the sports hall",
    actHz: "打篮球",
    actPy: "dǎ lánqiú",
    actEn: "playing basketball",
  },
  {
    placeHz: "公园",
    placePy: "gōngyuán",
    placeEn: "in the park",
    actHz: "跑步",
    actPy: "pǎobù",
    actEn: "jogging",
  },
];

const FUTURE_PLANS: readonly {
  timeHz: string;
  timePy: string;
  timeEn: string;
  actHz: string;
  actPy: string;
  actEn: string;
}[] = [
  {
    timeHz: "这个周末",
    timePy: "zhège zhōumò",
    timeEn: "this weekend",
    actHz: "去圣淘沙游泳",
    actPy: "qù Shèngtáoshā yóuyǒng",
    actEn: "go swimming on Sentosa",
  },
  {
    timeHz: "明天下午",
    timePy: "míngtiān xiàwǔ",
    timeEn: "tomorrow afternoon",
    actHz: "去乌节路买衣服",
    actPy: "qù Wūjiélù mǎi yīfu",
    actEn: "buy clothes on Orchard Road",
  },
  {
    timeHz: "下个星期",
    timePy: "xià gè xīngqī",
    timeEn: "next week",
    actHz: "学弹吉他",
    actPy: "xué tán jítā",
    actEn: "learn to play the guitar",
  },
  {
    timeHz: "明年暑假",
    timePy: "míngnián shǔjià",
    timeEn: "next summer holiday",
    actHz: "去上海旅行",
    actPy: "qù Shànghǎi lǚxíng",
    actEn: "travel to Shanghai",
  },
  {
    timeHz: "下个月",
    timePy: "xià gè yuè",
    timeEn: "next month",
    actHz: "去植物园散步",
    actPy: "qù Zhíwùyuán sànbù",
    actEn: "take a walk at the Botanic Gardens",
  },
];

const IMMINENT_ITEMS: readonly {
  specTimeHz: string;
  specTimePy: string;
  specTimeEn: string;
  eventHz: string;
  eventPy: string;
  eventEn: string;
}[] = [
  {
    specTimeHz: "下个星期",
    specTimePy: "Xià gè xīngqī",
    specTimeEn: "Next week",
    eventHz: "放假",
    eventPy: "fàngjià",
    eventEn: "the holidays start",
  },
  {
    specTimeHz: "明天早上八点",
    specTimePy: "Míngtiān zǎoshang bā diǎn",
    specTimeEn: "At 8 a.m. tomorrow",
    eventHz: "考试",
    eventPy: "kǎoshì",
    eventEn: "the exam starts",
  },
  {
    specTimeHz: "还有五分钟",
    specTimePy: "Hái yǒu wǔ fēnzhōng",
    specTimeEn: "In five minutes",
    eventHz: "上课",
    eventPy: "shàng kè",
    eventEn: "class begins",
  },
  {
    specTimeHz: "下午六点",
    specTimePy: "Xiàwǔ liù diǎn",
    specTimeEn: "At 6 p.m.",
    eventHz: "吃晚饭",
    eventPy: "chī wǎnfàn",
    eventEn: "eat dinner",
  },
  {
    specTimeHz: "下个月",
    specTimePy: "Xià gè yuè",
    specTimeEn: "Next month",
    eventHz: "毕业",
    eventPy: "bìyè",
    eventEn: "graduate",
  },
];

function capFirst(s: string): string {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

export const drills: Drill[] = [
  {
    id: "tenses-particles.completed-le",
    topicId: "tenses-particles",
    title: "Completed Action & New-State 了 Builder",
    level: 1,
    guideRef: "completed-action-le",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const subj = rng.pick(SUBJECTS);
      const pt = rng.pick(PAST_TIMES);
      const ev = rng.pick(QUANT_EVENTS);

      if (tier === 1) {
        const ansHz = `${subj.hz}${pt.hz}${ev.verbHz}了${ev.objHz}`;
        const altHz = `${pt.hz}${subj.hz}${ev.verbHz}了${ev.objHz}`;
        const ansPy = `${subj.py} ${pt.py} ${ev.verbPy} le ${ev.objPy}`;
        return {
          prompt: `Build a **completed-action** sentence with **Verb + 了** (*${subj.en} ${ev.verbEn} ${ev.objEn} ${pt.en}*):\n- Subject: **${subj.hz}**\n- Time: **${pt.hz}**\n- Verb: **${ev.verbHz}**\n- Quantified object: **${ev.objHz}**`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`${subj.hz}${pt.hz}了${ev.verbHz}${ev.objHz}`],
              },
              feedback:
                "Put **了** AFTER the verb **" + ev.verbHz + "**, never before it!",
            },
          ],
          hint: "Order: **Subject + Time + Verb + 了 + Number/Classifier + Noun**.",
          solution: [
            `Slot **了** right after **${ev.verbHz}** and before **${ev.objHz}**.`,
            `Answer: **${ansHz}。** (*${ansPy}.*)`,
          ],
        };
      }

      if (tier === 2) {
        // Test "Needs 了 vs NO-了 Zone!"
        const habits = [
          {
            hz: `${subj.hz}每天早上七点起床`,
            py: `${subj.py} měitiān zǎoshang qī diǎn qǐchuáng`,
            broken: `${subj.hz}每天早上七点起床了。`,
            reason: "**每天早上** marks a habitual routine, which takes NO **了**!",
          },
          {
            hz: `昨天天气很热`,
            py: `Zuótiān tiānqì hěn rè`,
            broken: `昨天天气很热了。`,
            reason: "Static past descriptions with **很 + Adjective** take NO **了**!",
          },
          {
            hz: `${subj.hz}周末常常打羽毛球`,
            py: `${subj.py} zhōumò chángcháng dǎ yǔmáoqiú`,
            broken: `${subj.hz}周末常常打羽毛球了。`,
            reason: "**常常** (*often*) marks a habit, so **了** must be removed!",
          },
          {
            hz: `去年${subj.hz}常常去游泳`,
            py: `Qùnián ${subj.py.toLowerCase()} chángcháng qù yóuyǒng`,
            broken: `去年${subj.hz}常常去游泳了。`,
            reason: "Even with **去年** (*last year*), repeated habits with **常常** take NO **了**!",
          },
        ] as const;

        if (rng.bool(0.5)) {
          const h = rng.pick(habits);
          return {
            prompt: `This sentence is inside the **NO-了 Zone**! Delete the illegal **了** and type the corrected Mandarin sentence:\n\n**✗ ${h.broken}**`,
            answer: {
              type: "text",
              accept: [h.hz, h.py],
              display: `${h.hz}。`,
            },
            hint: "Habits (**每天 / 常常**) and **很 + Adjective** take zero **了**!",
            solution: [
              h.reason,
              `Corrected sentence: **${h.hz}。**`,
            ],
          };
        }

        const ansHz = `${subj.hz}已经${ev.verbHz}了${ev.objHz}了`;
        const altHz = `${subj.hz}已经${ev.verbHz}了${ev.objHz}`;
        const ansPy = `${subj.py} yǐjīng ${ev.verbPy} le ${ev.objPy} le`;
        return {
          prompt: `Express **already completed** using **已经** and **Verb + 了**:\n- Subject: **${subj.hz}** (${subj.en})\n- Verb: **${ev.verbHz}**\n- Quantified object: **${ev.objHz}** (${ev.objEn})`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}。`,
          },
          hint: `Frame: **${subj.hz} + 已经 + ${ev.verbHz}了 + ${ev.objHz} (+ 了)**.`,
          solution: [
            `Combine **已经** before the verb with **${ev.verbHz}了${ev.objHz}**: **${ansHz}。**`,
          ],
        };
      }

      // Tier 3: Relative completion chain "Time + Subj + V1 + 了 + Obj1 + 就 + V2"
      const chains = [
        { v1: "吃了早饭", py1: "chī le zǎofàn", v2: "去学校", py2: "qù xuéxiào", en: "eats breakfast, goes straight to school" },
        { v1: "做完了作业", py1: "zuò wán le zuòyè", v2: "看电视", py2: "kàn diànshì", en: "finishes homework, watches TV right away" },
        { v1: "洗了澡", py1: "xǐ le zǎo", v2: "睡觉", py2: "shuìjiào", en: "takes a shower, goes straight to sleep" },
        { v1: "下了课", py1: "xià le kè", v2: "去图书馆", py2: "qù túshūguǎn", en: "finishes class, goes straight to the library" },
      ] as const;
      const ch = rng.pick(chains);
      const tWord = rng.pick([
        { hz: "明天", py: "míngtiān", en: "Tomorrow" },
        { hz: "每天", py: "měitiān", en: "Every day" },
        { hz: "今天晚上", py: "jīntiān wǎnshang", en: "Tonight" },
      ] as const);
      const ansHz = `${subj.hz}${tWord.hz}${ch.v1}就${ch.v2}`;
      const altHz = `${tWord.hz}${subj.hz}${ch.v1}就${ch.v2}`;
      const ansPy = `${subj.py} ${tWord.py} ${ch.py1} jiù ${ch.py2}`;
      return {
        prompt: `Build a **relative-completion** chain (*${tWord.en}, right after ${subj.en} ${ch.en}*) using **了…就…**:\n- Subject & Time: **${subj.hz}** + **${tWord.hz}**\n- Completed first: **${ch.v1}**\n- Immediate next action: **就${ch.v2}**`,
        answer: {
          type: "text",
          accept: [ansHz, altHz, ansPy],
          display: `${ansHz}。`,
        },
        hint: `Order: **${subj.hz} + ${tWord.hz} + ${ch.v1} + 就 + ${ch.v2}**.`,
        solution: [
          `Action 1 (**${ch.v1}**) completes first, triggering **就${ch.v2}**.`,
          `Answer: **${ansHz}。**`,
        ],
      };
    },
  },
  {
    id: "tenses-particles.le-vs-guo",
    topicId: "tenses-particles",
    title: "了 vs 过 Aspect Chooser & Experience Builder",
    level: 2,
    guideRef: "past-experience-guo",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const subj = rng.pick(SUBJECTS);
      const exp = rng.pick(EXP_ITEMS);

      if (tier === 1) {
        // Choose 了 vs 过 single-character blank
        const isGuo = rng.bool(0.55);
        if (isGuo) {
          const cue = rng.pick(["以前", "从来没"] as const);
          const sentence =
            cue === "以前"
              ? `${subj.hz}以前${exp.verbHz} ______ ${exp.objHz}。`
              : `${subj.hz}从来没${exp.verbHz} ______ ${exp.objHz}。`;
          return {
            prompt: `Type **了** or **过** to fill in the blank (*life experience*):\n\n**${sentence}**`,
            answer: {
              type: "text",
              accept: ["过", "guo", "guò"],
              display: "过 (guo)",
            },
            traps: [
              {
                spec: { type: "text", accept: ["了", "le"] },
                feedback:
                  `Look at **${cue}**! Life experience (*ever / never once in life*) always takes **过** (and **没** NEVER takes **了**!).`,
              },
            ],
            hint: "Cue words **以前** (*previously*) and **从来没** (*never once*) point to life-experience **过**!",
            solution: [
              `**${cue}** signals lifetime experience → **${exp.verbHz}过${exp.objHz}**.`,
              "Answer: **过**.",
            ],
          };
        }
        const pt = rng.pick(PAST_TIMES);
        const ev = rng.pick(QUANT_EVENTS);
        return {
          prompt: `Type **了** or **过** to fill in the blank (*specific past event + quantity*):\n\n**${subj.hz}${pt.hz}${ev.verbHz} ______ ${ev.objHz}。**`,
          answer: {
            type: "text",
            accept: ["了", "le"],
            display: "了 (le)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["过", "guo", "guò"] },
              feedback:
                `Specific past time (**${pt.hz}**) + specific quantity (**${ev.objHz}**) records a single completed event → use **了**!`,
            },
          ],
          hint: "Specific past day + counted object = completed event (**了**)!",
          solution: [
            `**${pt.hz}** + **${ev.objHz}** is a bounded single event → **${ev.verbHz}了${ev.objHz}**.`,
            "Answer: **了**.",
          ],
        };
      }

      if (tier === 2) {
        // Build full affirmative or negative 过 sentence
        if (rng.bool(0.5)) {
          const times = rng.pick([
            { hz: "一次", py: "yí cì", en: "once" },
            { hz: "两次", py: "liǎng cì", en: "twice" },
            { hz: "三次", py: "sān cì", en: "three times" },
          ] as const);
          const ansHz = `${subj.hz}${exp.verbHz}过${exp.objHz}${times.hz}`;
          const altHz = `${subj.hz}${exp.verbHz}过${times.hz}${exp.objHz}`;
          const ansPy = `${subj.py} ${exp.verbPy} guo ${exp.objPy} ${times.py}`;
          return {
            prompt: `Build a **life-experience** sentence with frequency (*${subj.en} — has ${exp.en} ${times.en}*):\n- Subject: **${subj.hz}**\n- Experience: **${exp.verbHz}过** + **${exp.objHz}**\n- Frequency: **${times.hz}**`,
            answer: {
              type: "text",
              accept: [ansHz, altHz, ansPy],
              display: `${ansHz}。`,
            },
            hint: `Order: **${subj.hz} + ${exp.verbHz}过 + ${exp.objHz} + ${times.hz}**.`,
            solution: [
              `Keep **${exp.verbHz}过** together and place **${times.hz}** at the end: **${ansHz}。**`,
            ],
          };
        }
        // Negative experience: KEEP 过!
        const ansHz = `${subj.hz}没${exp.verbHz}过${exp.objHz}`;
        const altHz = `${subj.hz}没有${exp.verbHz}过${exp.objHz}`;
        const ansPy = `${subj.py} méi ${exp.verbPy} guo ${exp.objPy}`;
        return {
          prompt: `Express **NEVER experienced in life** (*${subj.en} — has never ${exp.en}*) using **没…过**:\n- Subject: **${subj.hz}**\n- Verb + Object: **${exp.verbHz}** + **${exp.objHz}**`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [
                  `${subj.hz}不${exp.verbHz}过${exp.objHz}`,
                  `${subj.hz}没${exp.verbHz}${exp.objHz}`,
                ],
              },
              feedback:
                "Use **没** (never **不**) AND **KEEP 过** after the verb: **" + ansHz + "**!",
            },
          ],
          hint: "Negate life experience with **没 + Verb + 过 + Object** (KEEP **过**!).",
          solution: [
            `Glue **过** onto **${exp.verbHz}** even after **没**: **${ansHz}。**`,
          ],
        };
      }

      // Tier 3: Negate EITHER a Verb+了 sentence (must DROP 了!) OR a Verb+过 sentence (must KEEP 过!)
      if (rng.bool(0.5)) {
        const pt = rng.pick(PAST_TIMES);
        const ev = rng.pick(QUANT_EVENTS);
        const pos = `${subj.hz}${pt.hz}${ev.verbHz}了${ev.objHz}。`;
        // Drop quantity or keep noun? Keep simple object noun or full phrase:
        const bareNouns: Record<string, { hz: string; py: string }> = {
          两个包子: { hz: "包子", py: "bāozi" },
          三杯水: { hz: "水", py: "shuǐ" },
          两件衬衫: { hz: "衬衫", py: "chènshān" },
          一本中文书: { hz: "中文书", py: "Zhōngwén shū" },
          八个小笼包: { hz: "小笼包", py: "xiǎolóngbāo" },
          三斤芒果: { hz: "芒果", py: "mángguǒ" },
        };
        const bn = bareNouns[ev.objHz] ?? { hz: ev.objHz, py: ev.objPy };
        const ansHz = `${subj.hz}${pt.hz}没${ev.verbHz}${bn.hz}`;
        const altHz = `${subj.hz}${pt.hz}没有${ev.verbHz}${bn.hz}`;
        const ansPy = `${subj.py} ${pt.py} méi ${ev.verbPy} ${bn.py}`;
        return {
          prompt: `Negate this **completed-action** sentence using **没** and the bare noun **${bn.hz}** (watch what happens to **了**!):\n\n**${pos}**`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`${subj.hz}${pt.hz}没${ev.verbHz}了${bn.hz}`],
              },
              feedback:
                "Deadly Trap! When **没** negates a past verb, **了** MUST disappear!",
            },
          ],
          hint: `Use **没${ev.verbHz}${bn.hz}** and DELETE **了**!`,
          solution: [
            `Negating **Verb + 了** with **没** extinguishes **了**: **${ansHz}。**`,
          ],
        };
      }

      const pos = `${subj.hz}以前${exp.verbHz}过${exp.objHz}。`;
      const ansHz = `${subj.hz}以前没${exp.verbHz}过${exp.objHz}`;
      const altHz = `${subj.hz}没${exp.verbHz}过${exp.objHz}`;
      const altHz2 = `${subj.hz}以前没有${exp.verbHz}过${exp.objHz}`;
      const ansPy = `${subj.py} yǐqián méi ${exp.verbPy} guo ${exp.objPy}`;
      return {
        prompt: `Negate this **life-experience** sentence using **没** (watch whether **过** stays or drops!):\n\n**${pos}**`,
        answer: {
          type: "text",
          accept: [ansHz, altHz, altHz2, ansPy],
          display: `${ansHz}。`,
        },
        traps: [
          {
            spec: {
              type: "text",
              accept: [
                `${subj.hz}以前没${exp.verbHz}${exp.objHz}`,
                `${subj.hz}以前不${exp.verbHz}过${exp.objHz}`,
              ],
            },
            feedback:
              "Unlike **了**, life-experience **过** MUST STAY in the negative (**没 + Verb + 过**)!",
          },
        ],
        hint: `Keep **过** attached: **${subj.hz}(以前)没${exp.verbHz}过${exp.objHz}**.`,
        solution: [
          `Negating **Verb + 过** keeps **过**: **${ansHz}。**`,
        ],
      };
    },
  },
  {
    id: "tenses-particles.zhengzai-future",
    topicId: "tenses-particles",
    title: "正在 Ongoing & Future Markers (会, 打算, 快要…了 / 就要…了)",
    level: 2,
    guideRef: "ongoing-zhengzai",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const subj = rng.pick(SUBJECTS);

      if (tier === 1) {
        const ong = rng.pick(ONGOING_ACTIONS);
        const ansHz = `${subj.hz}正在${ong.actHz}呢`;
        const altHz = `${subj.hz}正在${ong.actHz}`;
        const altHz2 = `${subj.hz}在${ong.actHz}呢`;
        const ansPy = `${subj.py} zhèngzài ${ong.actPy} ne`;
        return {
          prompt: `Express **ongoing right now** (*${subj.en} — is ${ong.actEn} right now*) using **正在…呢**:\n- Subject: **${subj.hz}**\n- Action: **${ong.actHz}**`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, altHz2, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`${subj.hz}是正在${ong.actHz}呢`, `${subj.hz}正在${ong.actHz}了`],
              },
              feedback:
                "Never put **是** before **正在**, and never put **了** at the end of an ongoing **正在** sentence!",
            },
          ],
          hint: `Frame: **${subj.hz} + 正在 + ${ong.actHz} + 呢**.`,
          solution: [
            `Wrap **${ong.actHz}** in **正在 … 呢**: **${ansHz}。**`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Ongoing WITH place (merge 正在 + 在!)
          const ong = rng.pick(ONGOING_ACTIONS);
          const ansHz = `${subj.hz}正在${ong.placeHz}${ong.actHz}呢`;
          const altHz = `${subj.hz}正在${ong.placeHz}${ong.actHz}`;
          const ansPy = `${subj.py} zhèngzài ${ong.placePy} ${ong.actPy} ne`;
          return {
            prompt: `Combine **正在…呢** with a **place** (*${subj.en} — is ${ong.actEn} ${ong.placeEn} right now*):\n- Subject: **${subj.hz}**\n- Place: **${ong.placeHz}**\n- Action: **${ong.actHz}**`,
            answer: {
              type: "text",
              accept: [ansHz, altHz, ansPy],
              display: `${ansHz}。`,
            },
            traps: [
              {
                spec: {
                  type: "text",
                  accept: [`${subj.hz}正在在${ong.placeHz}${ong.actHz}呢`],
                },
                feedback:
                  "Merge **正在 + 在** into ONE **正在**! Write **" + ansHz + "**.",
              },
            ],
            hint: `Merge into one **正在**: **${subj.hz} + 正在 + ${ong.placeHz} + ${ong.actHz} + 呢**.`,
            solution: [
              `Fuse **正在** + Place (**${ong.placeHz}**) + Verb (**${ong.actHz}**) + **呢**: **${ansHz}。**`,
            ],
          };
        }
        // Planned future with 打算
        const fp = rng.pick(FUTURE_PLANS);
        const ansHz = `${subj.hz}${fp.timeHz}打算${fp.actHz}`;
        const altHz = `${fp.timeHz}${subj.hz}打算${fp.actHz}`;
        const altHz2 = `${subj.hz}打算${fp.timeHz}${fp.actHz}`;
        const ansPy = `${subj.py} ${fp.timePy} dǎsuàn ${fp.actPy}`;
        return {
          prompt: `Build a **future plan** sentence using **打算** (*${capFirst(fp.timeEn)}, ${subj.en} plans to ${fp.actEn}*):\n- Subject: **${subj.hz}**\n- Time: **${fp.timeHz}**\n- Action: **${fp.actHz}**`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, altHz2, ansPy],
            display: `${ansHz}。`,
          },
          hint: `Order: **${subj.hz} + ${fp.timeHz} + 打算 + ${fp.actHz}**.`,
          solution: [
            `Planned intention uses **打算**: **${ansHz}。**`,
          ],
        };
      }

      // Tier 3: 快要…了 vs 就要…了 vs 会 forecast
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const im = rng.pick(IMMINENT_ITEMS);
        const ansHz = `${im.specTimeHz}就要${im.eventHz}了`;
        const ansPy = `${im.specTimePy} jiùyào ${im.eventPy} le`;
        return {
          prompt: `A **specific time** stands at the front! Build the imminent-future sentence (*${im.specTimeEn}, ${im.eventEn} very soon!*):\n- Specific time: **${im.specTimeHz}**\n- Event: **${im.eventHz}**`,
          answer: {
            type: "text",
            accept: [ansHz, ansPy],
            display: `${ansHz}！`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`${im.specTimeHz}快要${im.eventHz}了`],
              },
              feedback:
                "Specific time in front (**" + im.specTimeHz + "**) FORBIDS **快要**! Swap **快要** to **就要**: **" + ansHz + "**.",
            },
          ],
          hint: "Specific Time + **就要** + Verb + **了**!",
          solution: [
            `Because **${im.specTimeHz}** is a specific time, choose **就要…了**: **${ansHz}！**`,
          ],
        };
      }
      if (mode === 2) {
        const im = rng.pick(IMMINENT_ITEMS);
        const ansHz = `${subj.hz}快要${im.eventHz}了`;
        const altHz = `快要${im.eventHz}了`;
        const ansPy = `${subj.py} kuàiyào ${im.eventPy} le`;
        return {
          prompt: `NO specific time word is given! Express *about to happen very soon* for **${subj.hz}** + **${im.eventHz}** using **快要…了**:`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}！`,
          },
          hint: `Frame: **${subj.hz} + 快要 + ${im.eventHz} + 了**.`,
          solution: [
            `With no specific time in front, use **快要…了**: **${ansHz}！**`,
          ],
        };
      }
      const forecasts = [
        { tHz: "明天下午", tPy: "Míngtiān xiàwǔ", wHz: "下雨", wPy: "xià yǔ", en: "Tomorrow afternoon it will rain" },
        { tHz: "今天晚上", tPy: "Jīntiān wǎnshang", wHz: "刮大风", wPy: "guā dà fēng", en: "Tonight there will be strong wind" },
        { tHz: "明天", tPy: "Míngtiān", wHz: "下雪", wPy: "xià xuě", en: "Tomorrow it will snow" },
        { tHz: "后天", tPy: "Hòutiān", wHz: "是晴天", wPy: "shì qíngtiān", en: "The day after tomorrow will be sunny" },
      ] as const;
      const fc = rng.pick(forecasts);
      const neg = rng.bool(0.4);
      const auxHz = neg ? "不会" : "会";
      const auxPy = neg ? "bú huì" : "huì";
      const ansHz = `${fc.tHz}${auxHz}${fc.wHz}`;
      const ansPy = `${fc.tPy} ${auxPy} ${fc.wPy}`;
      return {
        prompt: `Write a **weather prediction** using **${auxHz}**:\n- Time: **${fc.tHz}**\n- Forecast (${neg ? "NEGATIVE — won't" : "POSITIVE — will"}): **${fc.wHz}** (${fc.en})`,
        answer: {
          type: "text",
          accept: [ansHz, ansPy],
          display: `${ansHz}。`,
        },
        traps: [
          {
            spec: {
              type: "text",
              accept: [`${fc.tHz}${neg ? "不打算" : "打算"}${fc.wHz}`],
            },
            feedback:
              "Weather cannot make personal plans (**打算**)! Use prediction modal **会 / 不会**.",
          },
        ],
        hint: `Frame: **${fc.tHz} + ${auxHz} + ${fc.wHz}**.`,
        solution: [
          `Weather forecasts take **${auxHz}**: **${ansHz}。**`,
        ],
      };
    },
  },
  {
    id: "tenses-particles.bu-vs-mei",
    topicId: "tenses-particles",
    title: "不 vs 没 Ultimate Negation Showdown",
    level: 3,
    guideRef: "bu-vs-mei",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const subj = rng.pick(SUBJECTS);

      if (tier === 1) {
        const cases = [
          {
            blank: `${subj.hz} ______ 有宠物。`,
            ans: "没",
            py: "méi",
            wrong: "不",
            why: "The verb **有** (*have*) is ALWAYS negated with **没** (**没有**), NEVER *不有*!",
          },
          {
            blank: `${subj.hz}平时 ______ 喝咖啡。`,
            ans: "不",
            py: "bù",
            wrong: "没",
            why: "**平时** (*usually*) marks a present habit → negate with **不**!",
          },
          {
            blank: `${subj.hz}昨天 ______ 看电视。`,
            ans: "没",
            py: "méi",
            wrong: "不",
            why: "**昨天** (*yesterday*) is a past action that didn't happen → negate with **没**!",
          },
          {
            blank: `明天${subj.hz} ______ 去游泳。`,
            ans: "不",
            py: "bú",
            wrong: "没",
            why: "**明天** (*tomorrow*) is a future plan/refusal → negate with **不**!",
          },
          {
            blank: `今天天气 ______ 冷。`,
            ans: "不",
            py: "bù",
            wrong: "没",
            why: "Adjectives like **冷** negate with **不**, not **没**!",
          },
          {
            blank: `${subj.hz}以前 ______ 去过北京。`,
            ans: "没",
            py: "méi",
            wrong: "不",
            why: "Life experience (**Verb + 过**) negates with **没**, keeping **过**!",
          },
        ] as const;
        const c = rng.pick(cases);
        return {
          prompt: `Type **不** or **没** to complete the sentence:\n\n**${c.blank}**`,
          answer: {
            type: "text",
            accept: [c.ans, c.py],
            display: `${c.ans} (${c.py})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [c.wrong] },
              feedback: c.why,
            },
          ],
          hint: "Check: **有 / past action / 过** → **没**; **habit / future / adjective / 是** → **不**!",
          solution: [
            c.why,
            `Answer: **${c.ans}**.`,
          ],
        };
      }

      if (tier === 2) {
        // Full negated sentence construction (testing NO 了, 没有, 明天不, 昨天不+Adj)
        const prompts = [
          {
            ask: `Negate accurately (*${subj.en} didn't buy clothes yesterday* — watch **了**!):\n- **${subj.hz}** + **昨天** + negate(**买了衣服**)`,
            accept: [
              `${subj.hz}昨天没买衣服`,
              `${subj.hz}昨天没有买衣服`,
              `昨天${subj.hz}没买衣服`,
              `${subj.py} zuótiān méi mǎi yīfu`,
            ],
            trap: `${subj.hz}昨天没买了衣服`,
            trapMsg: "Delete **了**! **没** and **了** can never appear on the same verb.",
            sol: `Past non-occurrence uses **没** and drops **了**: **${subj.hz}昨天没买衣服。**`,
          },
          {
            ask: `Negate accurately (*${subj.en} doesn't have time tomorrow* — watch **有**!):\n- **${subj.hz}** + **明天** + negate(**有时间**)`,
            accept: [
              `${subj.hz}明天没有时间`,
              `明天${subj.hz}没有时间`,
              `${subj.hz}明天没时间`,
              `${subj.py} míngtiān méiyǒu shíjiān`,
            ],
            trap: `${subj.hz}明天不有时间`,
            trapMsg: "Even with **明天**, **有** ALWAYS negates as **没有** — ***不有*** never exists!",
            sol: `**有** always negates with **没**: **${subj.hz}明天没有时间。**`,
          },
          {
            ask: `Negate accurately (*Yesterday ${subj.en} wasn't tired* — watch adjectives in the past!):\n- **${subj.hz}** + **昨天** + negate(**累**)`,
            accept: [
              `${subj.hz}昨天不累`,
              `昨天${subj.hz}不累`,
              `${subj.py} zuótiān bú lèi`,
            ],
            trap: `${subj.hz}昨天没累`,
            trapMsg: "**累** (*tired*) is an adjective! Even with **昨天**, adjectives negate with **不** (**不累**).",
            sol: `Adjectives negate with **不** even in the past: **${subj.hz}昨天不累。**`,
          },
          {
            ask: `Negate ongoing present (*${subj.en} isn't watching TV right now*):\n- **${subj.hz}** + negate(**正在看电视呢**)`,
            accept: [
              `${subj.hz}没在看电视`,
              `${subj.hz}没有在看电视`,
              `${subj.py} méi zài kàn diànshì`,
            ],
            trap: `${subj.hz}不正在看电视`,
            trapMsg: "Negate ongoing present with **没在 + Verb** (and drop **呢**), never *不正在*!",
            sol: `Ongoing negation uses **没在**: **${subj.hz}没在看电视。**`,
          },
        ] as const;
        const p = rng.pick(prompts);
        return {
          prompt: p.ask,
          answer: {
            type: "text",
            accept: [...p.accept],
            display: `${p.accept[0]}。`,
          },
          traps: [
            {
              spec: { type: "text", accept: [p.trap] },
              feedback: p.trapMsg,
            },
          ],
          hint: "Check the verb/adjective type first (**有** vs **Adj** vs **Action**), then the timeframe!",
          solution: [p.sol],
        };
      }

      // Tier 3: Contrast two clauses (昨天没 + V vs 明天也不 + V, or 从来不 vs 从来没…过)
      const acts = [
        { hz: "打篮球", py: "dǎ lánqiú", en: "play basketball" },
        { hz: "去图书馆", py: "qù túshūguǎn", en: "go to the library" },
        { hz: "喝奶茶", py: "hē nǎichá", en: "drink bubble tea" },
        { hz: "看电影", py: "kàn diànyǐng", en: "watch a film" },
      ] as const;
      const act = rng.pick(acts);
      if (rng.bool(0.6)) {
        const ansHz = `${subj.hz}昨天没${act.hz}，明天也不${act.hz}`;
        const altHz = `${subj.hz}昨天没有${act.hz}，明天也不${act.hz}`;
        const ansPy = `${subj.py} zuótiān méi ${act.py}, míngtiān yě bù ${act.py}`;
        return {
          prompt: `Build a **two-clause negation contrast** (*Yesterday ${subj.en} didn't ${act.en}, and tomorrow won't ${act.en} either*):\n- Subject: **${subj.hz}**\n- Action: **${act.hz}**\n- Clause 1: **昨天…**  |  Clause 2: **，明天也…**`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [
                  `${subj.hz}昨天不${act.hz}，明天也不${act.hz}`,
                  `${subj.hz}昨天没${act.hz}，明天也没${act.hz}`,
                  `${subj.hz}昨天没${act.hz}了，明天也不${act.hz}`,
                ],
              },
              feedback:
                "Use **没** (with NO **了**!) for **昨天**, and switch to **不** for **明天**!",
            },
          ],
          hint: `Clause 1 = **${subj.hz}昨天没${act.hz}**; Clause 2 = **，明天也不${act.hz}**.`,
          solution: [
            `Past non-occurrence = **昨天没${act.hz}**; future refusal = **明天也不${act.hz}**.`,
            `Full sentence: **${ansHz}。**`,
          ],
        };
      }

      const exp = rng.pick(EXP_ITEMS);
      const ansHz = `${subj.hz}从来没${exp.verbHz}过${exp.objHz}`;
      const altHz = `${subj.hz}从来没有${exp.verbHz}过${exp.objHz}`;
      const ansPy = `${subj.py} cónglái méi ${exp.verbPy} guo ${exp.objPy}`;
      return {
        prompt: `Express **never once in one's life** (*${subj.en} — has never once ${exp.en}*) using **从来没…过**:\n- Subject: **${subj.hz}**\n- Experience verb + object: **${exp.verbHz}** + **${exp.objHz}**`,
        answer: {
          type: "text",
          accept: [ansHz, altHz, ansPy],
          display: `${ansHz}！`,
        },
        traps: [
          {
            spec: {
              type: "text",
              accept: [`${subj.hz}从来不${exp.verbHz}过${exp.objHz}`],
            },
            feedback:
              "**从来不** is for habits (no **过**)! With **Verb + 过** life experience, use **从来没**!",
          },
        ],
        hint: `Frame: **${subj.hz} + 从来没 + ${exp.verbHz}过 + ${exp.objHz}**.`,
        solution: [
          `Lifetime 'never once' pairs **从来没** with **${exp.verbHz}过**: **${ansHz}！**`,
        ],
      };
    },
  },
];
