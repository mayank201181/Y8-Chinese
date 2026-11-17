import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "time-measure-words-p3",
    title: "Practice Paper 3 · Singapore Contexts, Classifiers & Extended Writing",
    questions: [
      {
        id: "time-measure-words-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "dates-days",
        question: "Write **'1st January'** (New Year's Day) in Mandarin (Hanzi or Pinyin):",
        answer: {
          type: "text",
          accept: [
            "一月一号",
            "一月一日",
            "yīyuè yī hào",
            "yīyuè yī rì",
            "yī yuè yī hào",
            "yī yuè yī rì",
          ],
          display: "一月一日 / 一月一号 (yīyuè yī rì / hào)",
        },
        hints: [
          "Month 1 (一月) + 1st date (一号 / 一日).",
        ],
        solution: [
          "Big-to-small: **一月** (January) + **一日 / 一号** (1st) = **一月一日**.",
        ],
      },
      {
        id: "time-measure-words-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "dates-days",
        question: "Translate into Mandarin (Hanzi or Pinyin): **'the day after tomorrow'** (2 characters):",
        answer: {
          type: "text",
          accept: ["后天", "hòutiān"],
          display: "后天 (hòutiān)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["明天", "míngtiān"] },
            feedback: "明天 is 'tomorrow' (+1 day). 'The day after tomorrow' (+2 days) uses 后 (behind/after): 后天!",
          },
        ],
        hints: [
          "Pair 后 (hòu, after) with 天 (tiān, day).",
        ],
        solution: [
          "**后天** (*hòutiān*) means the day after tomorrow.",
        ],
      },
      {
        id: "time-measure-words-p3-q03",
        kind: "short",
        difficulty: "core",
        guideRef: "er-vs-liang",
        question: "Write the number **350** in formal Mandarin characters (do NOT abbreviate **十**):",
        answer: {
          type: "text",
          accept: ["三百五十", "sānbǎi wǔshí"],
          display: "三百五十 (sānbǎi wǔshí)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["三百零五十"] },
            feedback: "There is no internal zero gap between hundreds and tens in 350 — write 三百五十!",
          },
        ],
        hints: [
          "3 hundreds = 三百.",
          "5 tens = 五十 (no 零 needed because the tens slot is non-zero!).",
        ],
        solution: [
          "**三百** (300) + **五十** (50) = **三百五十** (*sānbǎi wǔshí*).",
        ],
      },
      {
        id: "time-measure-words-p3-q04",
        kind: "short",
        difficulty: "core",
        guideRef: "er-vs-liang",
        question: "Translate into Mandarin (Hanzi or Pinyin): **'the first lesson / Period 1'** (using ordinal prefix **第** and **节课**):",
        answer: {
          type: "text",
          accept: ["第一节课", "dì-yī jié kè", "dì yī jié kè"],
          display: "第一节课 (dì-yī jié kè)",
        },
        hints: [
          "Use the ordinal prefix 第 (dì) + 一 (first).",
          "Follow with 节课 (jié kè, class period).",
        ],
        solution: [
          "**第一** (*dì-yī*, 1st) + **节课** (*jié kè*, lesson period) = **第一节课**.",
        ],
      },
      {
        id: "time-measure-words-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "core-measure-words",
        question: "Translate into Mandarin (Hanzi or Pinyin): **'a plate of dumplings'** (use **饺子** *jiǎozi*):",
        answer: {
          type: "text",
          accept: ["一盘饺子", "yì pán jiǎozi", "yī pán jiǎozi"],
          display: "一盘饺子 (yì pán jiǎozi)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["一杯饺子", "一本饺子"] },
            feedback: "Use the flat-dish/plate classifier 盘 (pán — vessel radical 皿 at the bottom): 一盘饺子!",
          },
        ],
        hints: [
          "Plate / dish is 盘 (pán).",
          "Combine 一 + 盘 + 饺子!",
        ],
        solution: [
          "**一** + **盘** (*pán*, plate) + **饺子** (*jiǎozi*) = **一盘饺子**.",
        ],
      },
      {
        id: "time-measure-words-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "core-measure-words",
        question: "Translate into Mandarin (Hanzi or Pinyin): **'two cups of iced water'** (use **冰水** *bīngshuǐ*):",
        answer: {
          type: "text",
          accept: ["两杯冰水", "liǎng bēi bīngshuǐ"],
          display: "两杯冰水 (liǎng bēi bīngshuǐ)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["二杯冰水", "liǎng wǎn bīngshuǐ"] },
            feedback: "Use 两 (not 二) before the cup/glass classifier 杯 (bēi): 两杯冰水!",
          },
        ],
        hints: [
          "Standalone '2' before a classifier takes 两.",
          "Cup/glass is 杯 (bēi).",
        ],
        solution: [
          "**两** + **杯** + **冰水** = **两杯冰水** (*liǎng bēi bīngshuǐ*).",
        ],
      },
      {
        id: "time-measure-words-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "clothing-animal-classifiers",
        question: "Translate into Mandarin (Hanzi or Pinyin): **'two pairs of trousers'** (use **裤子** *kùzi*):",
        answer: {
          type: "text",
          accept: ["两条裤子", "liǎng tiáo kùzi"],
          display: "两条裤子 (liǎng tiáo kùzi)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["两双裤子", "二条裤子"] },
            feedback: "English says 'pairs of trousers', whereas Mandarin uses the long-garment classifier 条 (with 两!): 两条裤子!",
          },
        ],
        hints: [
          "Don't fall for English 'pairs' — trousers take 条 (tiáo), never 双!",
          "Use 两 before 条.",
        ],
        solution: [
          "**两** + **条** + **裤子** = **两条裤子** (*liǎng tiáo kùzi*).",
        ],
      },
      {
        id: "time-measure-words-p3-q08",
        kind: "short",
        difficulty: "core",
        guideRef: "clothing-animal-classifiers",
        question: "Read this pet-shop inventory:\n> **店里有四只小狗、三只白猫、五条金鱼和两只小鸟。**\n\nHow many animals in the shop are counted with the classifier **只** (*zhī*)? (Give a single number!)",
        answer: {
          type: "number",
          value: 9,
        },
        hints: [
          "Skip 五条金鱼 (5 goldfish), because fish take 条!",
          "Add the puppies (四只) + white cats (三只) + little birds (两只).",
        ],
        solution: [
          "4 puppies (**四只小狗**) + 3 cats (**三只白猫**) + 2 birds (**两只小鸟**) = **9** animals counted with **只** (the 5 goldfish use **条**).",
        ],
      },
      {
        id: "time-measure-words-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "demonstratives-duration",
        question: "Translate into Mandarin (Hanzi or Pinyin): **'which MRT ticket?'** (use **哪** + classifier + **地铁票**):",
        answer: {
          type: "text",
          accept: ["哪张地铁票", "nǎ zhāng dìtiěpiào", "nǎ zhāng dìtiě piào"],
          display: "哪张地铁票 (nǎ zhāng dìtiěpiào)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["那张地铁票", "哪地铁票"] },
            feedback: "Use 哪 (nǎ, which — with mouth radical 口) + flat classifier 张: 哪张地铁票!",
          },
        ],
        hints: [
          "Use 哪 (which, with 口) rather than 那 (that).",
          "Tickets are flat cards, so insert 张 (zhāng) before 地铁票!",
        ],
        solution: [
          "**哪** + **张** + **地铁票** = **哪张地铁票** (*nǎ zhāng dìtiěpiào*).",
        ],
      },
      {
        id: "time-measure-words-p3-q10",
        kind: "short",
        difficulty: "core",
        guideRef: "demonstratives-duration",
        question: "Translate into Mandarin (Hanzi or Pinyin): **'two weeks'** (a duration of 2 weeks, using **星期**):",
        answer: {
          type: "text",
          accept: ["两个星期", "liǎng gè xīngqī", "liǎng ge xīngqī"],
          display: "两个星期 (liǎng gè xīngqī)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["星期二", "两星期", "二个星期"] },
            feedback: "星期二 means Tuesday! 'Two weeks' requires 两 + classifier 个 + 星期: 两个星期!",
          },
        ],
        hints: [
          "Unlike 天 and 年, 星期 MUST take the classifier 个 when counting weeks!",
          "Use 两 before 个: 两个星期.",
        ],
        solution: [
          "**两** + **个** + **星期** = **两个星期** (*liǎng gè xīngqī*).",
        ],
      },
      {
        id: "time-measure-words-p3-q11",
        kind: "short",
        difficulty: "core",
        guideRef: "dates-days",
        question: "Write the year **2026** in Mandarin characters (using **〇** or **零**, followed by **年**):",
        answer: {
          type: "text",
          accept: [
            "二〇二六年",
            "二零二六年",
            "èr líng èr liù nián",
          ],
          display: "二〇二六年 (èr líng èr liù nián)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["两〇两六年", "二〇二六个年"] },
            feedback: "Read calendar years digit by digit using 二 (never 两!) and NEVER put 个 before 年!",
          },
        ],
        hints: [
          "Read digit by digit: 2-0-2-6 + 年.",
          "Always use 二 (never 两) when reading year digits!",
        ],
        solution: [
          "Digits `2-0-2-6` + **年** = **二〇二六年** / **二零二六年** (*èr líng èr liù nián*).",
        ],
      },
      {
        id: "time-measure-words-p3-q12",
        kind: "short",
        difficulty: "core",
        guideRef: "demonstratives-duration",
        question: "Read: **坐地铁去学校要十五分钟，走路去学校要四十分钟。** How many **minutes faster** is taking the MRT than walking? (Give a number!)",
        answer: {
          type: "number",
          value: 25,
        },
        hints: [
          "MRT duration: 十五分钟 = 15 minutes.",
          "Walking duration: 四十分钟 = 40 minutes. Subtract 15 from 40!",
        ],
        solution: [
          "40 minutes (**四十分钟**) − 15 minutes (**十五分钟**) = **25** minutes faster.",
        ],
      },
      {
        id: "time-measure-words-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "clothing-animal-classifiers",
        marks: 4,
        question:
          "**IGCSE 0547 Hawker Centre & Bookshop Note:**\nWrite **4 complete Mandarin sentences** describing what your family did on Saturday:\n1. State Saturday's date (e.g. **十一月十四号星期六**);\n2. Say you bought **2 Chinese books** and **1 dictionary** at a bookshop;\n3. Say your sister bought **1 shirt** and **1 pair of trainers**;\n4. Say your family ate **2 plates of chicken rice** and drank **4 cups of tea** for **1 hour**.",
        hints: [
          "Double-check every classifier: 本 (books/dictionary), 件 (shirt), 双 (trainers), 盘 (chicken rice), 杯 (tea)!",
          "Use 两 (never 二) for every standalone '2' before a classifier.",
        ],
        modelAnswer:
          "1. 上个星期六是十一月十四号。\n2. 我在书店买了两本中文书和一本词典。\n3. 姐姐买了一件衬衫和一双运动鞋。\n4. 我们一家人吃了两盘鸡饭，喝了四杯茶，吃了一个小时。",
        markScheme: [
          { point: "Writes date and Saturday (星期六) accurately.", keywords: ["月", "号", "日", "星期六"] },
          { point: "Uses 两本 and 一本 accurately for books and dictionary.", keywords: ["两本", "词典", "书"] },
          { point: "Uses 一件 (shirt) and 一双 (trainers) accurately.", keywords: ["一件", "一双"] },
          { point: "Uses 两盘 (chicken rice), 四杯 (tea) and 一个小时 (1 hour).", keywords: ["盘", "杯", "小时"] },
        ],
        commonError: "Writing *二本中文书* or *二盘鸡饭* instead of 两本 / 两盘.",
      },
      {
        id: "time-measure-words-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "dates-days",
        marks: 5,
        question:
          "**IGCSE 0547 Email (~90–120 Chinese characters) — 假期旅行回顾 (Holiday Trip Recap):**\nWrite an email to your friend in London telling them about a holiday trip your family took last year (**去年**) or last month (**上个月**). Include:\n- Which year, month, and date you departed, and which day of the week you returned;\n- How many days (**几天**) or weeks (**几个星期**) you stayed;\n- How long the flight or train ride took (**几个小时**);\n- What souvenirs, clothes, or tickets you bought (using at least **3 different measure words**);\n- When you hope to travel together next year (**明年**).",
        hints: [
          "Keep Year → Month → Date → Weekday order, and remember 住五天 (no 个 before 天!) vs 住两个星期 (keep 个 before 星期!).",
          "Put flight/train duration AFTER 坐飞机要… or 坐了….",
        ],
        modelAnswer:
          "你好！去年十二月十号星期四，我和家人一起去北京旅行，我们在北京住了十天，十二月二十号星期天回新加坡。从新加坡坐飞机去北京要六个半小时。在北京，我买了两件毛衣、一条围巾、三本中文故事书和四张明信片。那两件毛衣非常暖和！明年八月你有空吗？我们一起去上海玩一个星期，怎么样？",
        markScheme: [
          { point: "Gives departure/return dates and weekdays in Big → Small order.", keywords: ["月", "号", "日", "星期"] },
          { point: "States stay duration accurately (e.g. 十天 without 个, or 两个星期 with 个).", keywords: ["住", "天", "星期"] },
          { point: "States travel duration accurately using 小时 / 分钟.", keywords: ["小时", "分钟"] },
          { point: "Uses at least three distinct classifiers (件, 条, 本, 张, 双, etc.) with accurate 两.", keywords: ["件", "条", "本", "张", "双"] },
          { point: "Invites friend for next year (明年) using polite question structure.", keywords: ["明年", "一起"] },
        ],
        commonError: "Writing *十个天* instead of 十天, or reversing British date order (*十号十二月*).",
      },
    ],
  },
];
