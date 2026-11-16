import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "tenses-particles-p3",
    title: "Practice Paper 3 — Integrated Timeframes & IGCSE Exam Tasks",
    questions: [
      {
        id: "tenses-particles-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "completed-action-le",
        question:
          "How do you exclaim *'It has started raining!'* in 3 characters?",
        answer: {
          type: "text",
          accept: ["下雨了", "xià yǔ le"],
          display: "下雨了！",
        },
        hints: [
          "**下雨** + change-of-state **了**.",
        ],
        solution: [
          "**下雨了！** (*Xià yǔ le!*) signals the onset of rain.",
        ],
      },
      {
        id: "tenses-particles-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "past-experience-guo",
        question:
          "Translate into Mandarin: *'Have you ever eaten xiaolongbao (soup dumplings)?'* (Use **你**, **吃过**, **小笼包**, **吗**.)",
        answer: {
          type: "text",
          accept: [
            "你吃过小笼包吗",
            "Nǐ chī guo xiǎolóngbāo ma",
            "Nǐ chī guò xiǎolóngbāo ma",
          ],
          display: "你吃过小笼包吗？",
        },
        hints: [
          "Order: **你 + 吃过 + 小笼包 + 吗**.",
        ],
        solution: [
          "**你吃过小笼包吗？** (*Nǐ chī guo xiǎolóngbāo ma?*)",
        ],
      },
      {
        id: "tenses-particles-p3-q03",
        kind: "short",
        difficulty: "warmup",
        guideRef: "future-markers",
        question:
          "Type the Mandarin phrase for **'next week'** (4 characters):",
        answer: {
          type: "text",
          accept: ["下个星期", "xià gè xīngqī"],
          display: "下个星期 (xià gè xīngqī)",
        },
        traps: [
          {
            spec: {
              type: "text",
              accept: ["上个星期", "shàng gè xīngqī"],
            },
            feedback:
              "**上个星期** means *last week*! Upcoming weeks sit 'below' on the calendar scroll: **下个星期**.",
          },
        ],
        hints: [
          "Upcoming = **下个** + **星期**.",
        ],
        solution: [
          "*'Next week'* is **下个星期** (*xià gè xīngqī*).",
        ],
      },
      {
        id: "tenses-particles-p3-q04",
        kind: "short",
        difficulty: "warmup",
        guideRef: "bu-vs-mei",
        question:
          "Give a polite three-character negative command meaning *'Don't talk!'* using **别** and **说话**:",
        answer: {
          type: "text",
          accept: [
            "别说话",
            "不要说话",
            "bié shuōhuà",
            "búyào shuōhuà",
            "bùyào shuōhuà",
          ],
          display: "别说话！",
        },
        hints: [
          "Put **别** directly before **说话**!",
        ],
        solution: [
          "**别说话！** (*Bié shuōhuà!*, Don't talk!)",
        ],
      },
      {
        id: "tenses-particles-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "completed-action-le",
        question:
          "Translate into Mandarin: *'Today I have already drunk four glasses of water.'* (Use **我今天已经**, **喝**, **四杯水**, **了**.)",
        answer: {
          type: "text",
          accept: [
            "我今天已经喝了四杯水了",
            "我今天已经喝了四杯水",
            "今天我已经喝了四杯水了",
            "今天我已经喝了四杯水",
            "Wǒ jīntiān yǐjīng hē le sì bēi shuǐ le",
            "Wǒ jīntiān yǐjīng hē le sì bēi shuǐ",
          ],
          display: "我今天已经喝了四杯水了。",
        },
        hints: [
          "Put completed **了** right after **喝** (**喝了四杯水**).",
          "**已经** welcomes sentence-final **了** at the end too!",
        ],
        solution: [
          "**我今天已经** + **喝了四杯水** + **(了)** → **我今天已经喝了四杯水了。**",
        ],
      },
      {
        id: "tenses-particles-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "ongoing-zhengzai",
        question:
          "Negate the ongoing present in Mandarin: *'My younger brother isn't sleeping right now.'* (Use **弟弟**, **没在**, **睡觉**.)",
        answer: {
          type: "text",
          accept: [
            "弟弟没在睡觉",
            "弟弟没有在睡觉",
            "Dìdi méi zài shuìjiào",
            "Dìdi méiyǒu zài shuìjiào",
          ],
          display: "弟弟没在睡觉。",
        },
        traps: [
          {
            spec: {
              type: "text",
              accept: ["弟弟不正在睡觉", "弟弟没在睡觉了"],
            },
            feedback:
              "Negate ongoing present with **没在 + Verb** (never *不正在* and never with **了**!): **弟弟没在睡觉**.",
          },
        ],
        hints: [
          "Use **没在** right before **睡觉**.",
          "Drop **呢** and never add **了**!",
        ],
        solution: [
          "**弟弟** + **没在** + **睡觉** → **弟弟没在睡觉。**",
        ],
      },
      {
        id: "tenses-particles-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "future-markers",
        question:
          "Translate into Mandarin using **打算**: *'This weekend I plan to watch a film with friends.'* (Use **这个周末**, **我打算**, **跟朋友一起**, **去看电影**.)",
        answer: {
          type: "text",
          accept: [
            "这个周末我打算跟朋友一起去看电影",
            "我这个周末打算跟朋友一起去看电影",
            "这个周末我打算跟朋友一起看电影",
            "这个周末我打算和朋友一起去看电影",
            "Zhège zhōumò wǒ dǎsuàn gēn péngyou yìqǐ qù kàn diànyǐng",
            "Zhège zhōumò wǒ dǎsuàn gēn péngyou yīqǐ qù kàn diànyǐng",
          ],
          display: "这个周末我打算跟朋友一起去看电影。",
        },
        hints: [
          "Place **跟朋友一起** BEFORE **去看电影**!",
          "Combine **这个周末 + 我打算 + 跟朋友一起 + 去看电影**.",
        ],
        solution: [
          "**这个周末我打算跟朋友一起去看电影。**",
        ],
      },
      {
        id: "tenses-particles-p3-q08",
        kind: "short",
        difficulty: "core",
        guideRef: "past-experience-guo",
        question:
          "Translate into Mandarin using **学过**: *'My younger sister learned a little painting before.'* (Use **妹妹以前**, **学过**, **一点儿画画**.)",
        answer: {
          type: "text",
          accept: [
            "妹妹以前学过一点儿画画",
            "以前妹妹学过一点儿画画",
            "Mèimei yǐqián xué guo yìdiǎnr huàhuà",
            "Mèimei yǐqián xué guo yīdiǎnr huàhuà",
            "Mèimei yǐqián xué guò yìdiǎnr huàhuà",
            "Mèimei yǐqián xué guò yīdiǎnr huàhuà",
          ],
          display: "妹妹以前学过一点儿画画。",
        },
        hints: [
          "Start with **妹妹以前**.",
          "Follow with **学过** + **一点儿画画**.",
        ],
        solution: [
          "**妹妹以前学过一点儿画画。** (*Mèimei yǐqián xué guo yìdiǎnr huàhuà.*)",
        ],
      },
      {
        id: "tenses-particles-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "bu-vs-mei",
        question:
          "Fix BOTH errors in this sentence and type the corrected Mandarin sentence: **昨天天气很热了，可是我没喝了冰水。**",
        answer: {
          type: "text",
          accept: [
            "昨天天气很热，可是我没喝冰水",
            "昨天天气很热可是我没喝冰水",
            "昨天天气很热，可是我没有喝冰水",
            "Zuótiān tiānqì hěn rè, kěshì wǒ méi hē bīngshuǐ",
          ],
          display: "昨天天气很热，可是我没喝冰水。",
        },
        hints: [
          "Error 1: **很 + Adjective** (**很热**) is a static state — delete the first **了**!",
          "Error 2: **没 + Verb** (**没喝**) can NEVER keep **了** — delete the second **了** too!",
        ],
        solution: [
          "Remove **了** after **很热** (static adjective) and remove **了** after **没喝** (negated past verb).",
          "Corrected sentence: **昨天天气很热，可是我没喝冰水。**",
        ],
      },
      {
        id: "tenses-particles-p3-q10",
        kind: "short",
        difficulty: "core",
        guideRef: "completed-action-le",
        question:
          "Unscramble into natural Mandarin order: **散步 / 吃晚饭 / 以后 / 我们 / 去公园** (*After eating dinner, we go to the park for a walk.*)",
        answer: {
          type: "text",
          accept: [
            "吃晚饭以后我们去公园散步",
            "我们吃晚饭以后去公园散步",
            "Chī wǎnfàn yǐhòu wǒmen qù gōngyuán sànbù",
            "Wǒmen chī wǎnfàn yǐhòu qù gōngyuán sànbù",
          ],
          display: "吃晚饭以后，我们去公园散步。",
        },
        hints: [
          "*'After eating dinner'* is **吃晚饭以后** (Event + **以后**).",
          "Follow with **我们去公园散步**!",
        ],
        solution: [
          "**吃晚饭以后，我们去公园散步。**",
        ],
      },
      {
        id: "tenses-particles-p3-q11",
        kind: "short",
        difficulty: "challenge",
        guideRef: "completed-action-le",
        question:
          "Read: **医生开的药一共二十四片，一天吃三次，一次吃两片。我已经吃了两天了。** How many tablets (**片**) are **still left**? (Type a number.)",
        answer: {
          type: "number",
          value: 12,
          display: "12",
        },
        hints: [
          "Per day: **一天吃三次，一次吃两片** = {{3 * 2 = 6}} tablets per day.",
          "Already taken for **两天** (2 days) = {{2 * 6 = 12}} tablets. Subtract from **二十四** (24)!",
        ],
        solution: [
          "Daily dose = 3 times × 2 tablets = 6 tablets/day.",
          "Taken over 2 days (**已经吃了两天了**) = 2 × 6 = 12 tablets.",
          "Tablets remaining = 24 − 12 = **12**.",
        ],
      },
      {
        id: "tenses-particles-p3-q12",
        kind: "short",
        difficulty: "challenge",
        guideRef: "future-markers",
        question:
          "Translate into Mandarin: *'The MRT train is almost arriving!'* (Use **地铁**, **快到了** or **快要到了**.)",
        answer: {
          type: "text",
          accept: [
            "地铁快到了",
            "地铁快要到了",
            "Dìtiě kuài dào le",
            "Dìtiě kuàiyào dào le",
          ],
          display: "地铁快到了！",
        },
        hints: [
          "Subject **地铁** + imminent **快(要) + 到 + 了**.",
          "No specific clock time is present, so **快…了 / 快要…了** fits cleanly!",
        ],
        solution: [
          "**地铁快到了！** (or **地铁快要到了！**)",
        ],
      },
      {
        id: "tenses-particles-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "future-markers",
        marks: 4,
        question:
          "**IGCSE 0547 Roleplay Preparation (4 marks)** — Your friend asks about **last weekend vs next weekend**. Write 3–4 Mandarin sentences (50–75 characters) covering:\n1. What you **did last weekend** (**上个星期… Verb + 了**)\n2. One thing you **didn't do** last weekend (**没 + Verb**, no **了**!)\n3. What weather **will be like** this weekend (**会**)\n4. What you **plan to do** this weekend (**打算 / 准备**)",
        hints: [
          "Contrast **上个星期六我跟爸爸去了东海岸公园，没在家玩电脑游戏**.",
          "Follow with **天气预报说这个周末会是晴天，所以我打算跟朋友一起去游泳！**",
        ],
        modelAnswer:
          "上个星期六我跟家人一起去了植物园散步，晚上没看电视。天气预报说这个周末不会下雨，会是晴天。所以我打算星期六下午跟好朋友一起去圣淘沙游泳！",
        markScheme: [
          {
            point: "Describes last weekend's completed activity using 上个星期/周末 + Verb + 了",
            keywords: ["上个", "了"],
          },
          {
            point: "Includes an accurate past negation with 没(有) + Verb and NO 了",
            keywords: ["没"],
          },
          {
            point: "Mentions weekend weather prediction with 会 / 不会",
            keywords: ["会"],
          },
          {
            point: "States upcoming weekend plan with 打算 or 准备",
            keywords: ["打算", "准备"],
          },
        ],
        commonError:
          "Using 不 instead of 没 for last weekend, or 打算 for weather.",
      },
      {
        id: "tenses-particles-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "bu-vs-mei",
        marks: 5,
        question:
          "**IGCSE 0547 Extended Writing (5 marks)** — Write an 80–120 character letter in Mandarin to your cousin **表姐** as the end-of-term holidays approach (**快要放假了！**). Include:\n1. Excitement that holidays are **about to start** (**快要放假了 / 下个星期就要放假了**)\n2. What you **are busy doing right now** (**正在…呢**)\n3. A sport/instrument/dish you **have tried before** (**…过**) vs one you **have never tried** (**从来没…过**)\n4. Contrast a **habit with 不** and a **past fact with 没**\n5. Your **holiday plan** with her (**打算 / 准备 / 希望**)",
        hints: [
          "Open warmly: **表姐，你好！下个星期就要放假了，我太高兴了！这几天我正在复习功课呢。**",
          "Weave in **我以前学过网球，可是从来没滑过雪**, **我平时不喝奶茶；昨天我没看电影**, and **放假以后我打算去上海看你！**",
        ],
        modelAnswer:
          "表姐，你好！下个星期就要放假了，我非常开心！这几天我正在家里认真复习功课呢，昨天晚上我没看电视。我平时不玩电脑游戏，周末常常打羽毛球。我以前吃过上海小笼包，可是从来没去过上海。放假以后，我打算跟爸爸妈妈一起去上海看你！",
        markScheme: [
          {
            point: "Uses 快要放假了 or (Time +) 就要放假了 accurately",
            keywords: ["快要", "就要", "放假"],
          },
          {
            point: "Describes current ongoing activity with 正在…(呢)",
            keywords: ["正在", "呢"],
          },
          {
            point: "Contrasts positive experience (Verb + 过) with negative experience (没…过 / 从来没…过)",
            keywords: ["过", "没"],
          },
          {
            point: "Distinguishes 不 (habit/future) and 没 (past non-occurrence, no 了) accurately",
            keywords: ["不", "没"],
          },
          {
            point: "Closes with a clear holiday plan using 打算, 准备, or 希望",
            keywords: ["打算", "准备", "希望", "以后"],
          },
        ],
        commonError:
          "Writing *明天快要放假了* (time before 快要) or *没看了电视*.",
      },
    ],
  },
];
