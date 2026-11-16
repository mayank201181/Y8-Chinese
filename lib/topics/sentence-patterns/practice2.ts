import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "sentence-patterns-p3",
    title: "Practice Paper 3 — Integrated IGCSE Sentence Building & Translation",
    questions: [
      {
        id: "sentence-patterns-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "stpv-word-order",
        question:
          "Unscramble into STPV order: **踢足球 / 弟弟 / 下午四点 / 在学校**",
        answer: {
          type: "text",
          accept: [
            "弟弟下午四点在学校踢足球",
            "下午四点弟弟在学校踢足球",
            "Dìdi xiàwǔ sì diǎn zài xuéxiào tī zúqiú",
            "Xiàwǔ sì diǎn dìdi zài xuéxiào tī zúqiú",
          ],
          display: "弟弟下午四点在学校踢足球。",
        },
        hints: [
          "Put **弟弟** + **下午四点** + **在学校** + **踢足球**.",
        ],
        solution: [
          "Subject (**弟弟**) + Time (**下午四点**) + Place (**在学校**) + Verb (**踢足球**).",
          "Answer: **弟弟下午四点在学校踢足球。**",
        ],
      },
      {
        id: "sentence-patterns-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "bi-comparisons",
        question:
          "Translate into Mandarin: *'Aeroplanes are much faster than trains.'* (Use **飞机**, **火车**, **快**, **得多**.)",
        answer: {
          type: "text",
          accept: [
            "飞机比火车快得多",
            "Fēijī bǐ huǒchē kuài de duō",
          ],
          display: "飞机比火车快得多。",
        },
        traps: [
          {
            spec: {
              type: "text",
              accept: ["飞机比火车很块", "飞机比火车很快"],
            },
            feedback:
              "Never use **很** with **比**! Put **得多** AFTER **快**: **飞机比火车快得多**.",
          },
        ],
        hints: [
          "Frame: **飞机 + 比 + 火车 + 快 + 得多**.",
        ],
        solution: [
          "**飞机** + **比** + **火车** + **快得多** → **飞机比火车快得多。**",
        ],
      },
      {
        id: "sentence-patterns-p3-q03",
        kind: "short",
        difficulty: "warmup",
        guideRef: "cause-contrast",
        question:
          "Fill in the opening connector: **______ 新加坡离赤道很近，所以一年四季都很热。**",
        answer: {
          type: "text",
          accept: ["因为", "yīnwèi"],
          display: "因为 (yīnwèi)",
        },
        hints: [
          "Look at **所以** (*therefore*) in the second clause — what cause word opens the sentence?",
        ],
        solution: [
          "**因为** (*because*) pairs with **所以** (*therefore*).",
        ],
      },
      {
        id: "sentence-patterns-p3-q04",
        kind: "short",
        difficulty: "warmup",
        guideRef: "addition-simultaneous",
        question:
          "Fill in the missing single-character adverb: **爸爸喜欢喝咖啡，妈妈 ______ 喜欢喝咖啡。** (*Dad likes drinking coffee, and Mum likes drinking coffee too.*)",
        answer: {
          type: "text",
          accept: ["也", "yě"],
          display: "也 (yě)",
        },
        hints: [
          "Single-character adverb meaning *'also / too'*, placed right before **喜欢**!",
        ],
        solution: [
          "**也** (*yě*, also) sits between Subject (**妈妈**) and Verb (**喜欢**).",
        ],
      },
      {
        id: "sentence-patterns-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "stpv-word-order",
        question:
          "Translate into Mandarin in STPV order: *'On Sunday morning my older sister revises in the library.'* (Use **姐姐**, **星期天上午**, **在图书馆**, **复习**.)",
        answer: {
          type: "text",
          accept: [
            "姐姐星期天上午在图书馆复习",
            "星期天上午姐姐在图书馆复习",
            "Jiějie xīngqītiān shàngwǔ zài túshūguǎn fùxí",
            "Xīngqītiān shàngwǔ jiějie zài túshūguǎn fùxí",
          ],
          display: "姐姐星期天上午在图书馆复习。",
        },
        hints: [
          "Order: **姐姐 + 星期天上午 + 在图书馆 + 复习**.",
          "Remember bigger time (**星期天**) comes before smaller time (**上午**)!",
        ],
        solution: [
          "**姐姐** (S) + **星期天上午** (T) + **在图书馆** (P) + **复习** (V) → **姐姐星期天上午在图书馆复习。**",
        ],
      },
      {
        id: "sentence-patterns-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "bi-comparisons",
        question:
          "Translate into Mandarin using **没有…那么…**: *'Shanghai is not as cold as Harbin.'* (Use **上海**, **哈尔滨**, **冷**.)",
        answer: {
          type: "text",
          accept: [
            "上海没有哈尔滨那么冷",
            "上海没有哈尔滨冷",
            "Shànghǎi méiyǒu Hā'ěrbīn nàme lěng",
            "Shànghǎi méiyǒu Hā'ěrbīn lěng",
          ],
          display: "上海没有哈尔滨那么冷。",
        },
        hints: [
          "Put **上海** in slot A and **哈尔滨** in slot B.",
          "Frame: **上海 + 没有 + 哈尔滨 + (那么) + 冷**.",
        ],
        solution: [
          "**上海** + **没有** + **哈尔滨** + **那么冷** → **上海没有哈尔滨那么冷。**",
        ],
      },
      {
        id: "sentence-patterns-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "cause-contrast",
        question:
          "Combine using **虽然…，但是…**: **今天我很累** → **我很开心**.",
        answer: {
          type: "text",
          accept: [
            "虽然今天我很累，但是我很开心",
            "虽然今天我很累但是我很开心",
            "虽然我今天很累，但是我很开心",
            "虽然今天很累，但是我很开心",
            "Suīrán jīntiān wǒ hěn lèi, dànshì wǒ hěn kāixīn",
          ],
          display: "虽然今天我很累，但是我很开心。",
        },
        hints: [
          "Start Clause 1 with **虽然**.",
          "Start Clause 2 with **但是**!",
        ],
        solution: [
          "Pair both halves: **虽然今天我很累，但是我很开心。**",
        ],
      },
      {
        id: "sentence-patterns-p3-q08",
        kind: "short",
        difficulty: "core",
        guideRef: "addition-simultaneous",
        question:
          "Translate into Mandarin using **不但…，而且…**: *'This restaurant's dishes are not only delicious, but also cheap.'* (Use **这家餐厅的菜**, **好吃**, **便宜**.)",
        answer: {
          type: "text",
          accept: [
            "这家餐厅的菜不但好吃，而且便宜",
            "这家餐厅的菜不但好吃而且便宜",
            "这家餐厅的菜不但好吃，而且很便宜",
            "这家餐厅的菜不但很好吃，而且很便宜",
            "Zhè jiā cāntīng de cài búdàn hǎochī, érqiě piányi",
            "Zhè jiā cāntīng de cài bùdàn hǎochī, érqiě piányi",
            "Zhè jiā cāntīng de cài búdàn hǎochī, érqiě hěn piányi",
            "Zhè jiā cāntīng de cài bùdàn hǎochī, érqiě hěn piányi",
          ],
          display: "这家餐厅的菜不但好吃，而且很便宜。",
        },
        hints: [
          "One shared subject (**这家餐厅的菜**) goes BEFORE **不但**.",
          "Follow with **不但好吃，而且(很)便宜**.",
        ],
        solution: [
          "**这家餐厅的菜** + **不但好吃** + **，而且(很)便宜** → **这家餐厅的菜不但好吃，而且很便宜。**",
        ],
      },
      {
        id: "sentence-patterns-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "addition-simultaneous",
        question:
          "Translate into Mandarin using **一边…，一边…**: *'My older sister likes jogging while listening to music.'* (Use **姐姐喜欢**, **跑步**, **听音乐**.)",
        answer: {
          type: "text",
          accept: [
            "姐姐喜欢一边跑步，一边听音乐",
            "姐姐喜欢一边跑步一边听音乐",
            "姐姐喜欢一边听音乐，一边跑步",
            "姐姐喜欢一边听音乐一边跑步",
            "Jiějie xǐhuan yìbiān pǎobù, yìbiān tīng yīnyuè",
            "Jiějie xǐhuan yībiān pǎobù, yībiān tīng yīnyuè",
            "Jiějie xǐhuan yìbiān tīng yīnyuè, yìbiān pǎobù",
            "Jiějie xǐhuan yībiān tīng yīnyuè, yībiān pǎobù",
          ],
          display: "姐姐喜欢一边跑步，一边听音乐。",
        },
        hints: [
          "Start with **姐姐喜欢**.",
          "Link the two active actions with **一边…，一边…**.",
        ],
        solution: [
          "**姐姐喜欢一边跑步，一边听音乐。**",
        ],
      },
      {
        id: "sentence-patterns-p3-q10",
        kind: "short",
        difficulty: "core",
        guideRef: "cause-contrast",
        question:
          "Fix the word-order error in Clause 2 and write the complete corrected sentence: **如果下午下雨，就不去我们踢足球。**",
        answer: {
          type: "text",
          accept: [
            "如果下午下雨，我们就不去踢足球",
            "如果下午下雨我们就不去踢足球",
            "Rúguǒ xiàwǔ xià yǔ, wǒmen jiù bú qù tī zúqiú",
            "Rúguǒ xiàwǔ xià yǔ, wǒmen jiù bù qù tī zúqiú",
          ],
          display: "如果下午下雨，我们就不去踢足球。",
        },
        hints: [
          "Find the subject of Clause 2 (**我们**).",
          "Put **我们** first, then **就**, then **不去踢足球**!",
        ],
        solution: [
          "In Clause 2, Subject (**我们**) must come BEFORE the adverb **就** and negative verb **不去踢足球**.",
          "Corrected sentence: **如果下午下雨，我们就不去踢足球。**",
        ],
      },
      {
        id: "sentence-patterns-p3-q11",
        kind: "short",
        difficulty: "challenge",
        guideRef: "combining-clauses",
        question:
          "Read: **周末在牛车水买东西的人比平时多得多。星期二有大约两百个人，周末的人数是星期二的三倍。** About how many people shop there at the weekend? (Type a number.)",
        answer: {
          type: "number",
          value: 600,
          display: "600",
        },
        hints: [
          "**两百** = 200; **三倍** (*sān bèi*) = 3 times as many!",
          "Compute {{200 * 3}}.",
        ],
        solution: [
          "Tuesday = **两百** (200) people.",
          "Weekend = **三倍** (3×) = 200 × 3 = **600**.",
        ],
      },
      {
        id: "sentence-patterns-p3-q12",
        kind: "short",
        difficulty: "challenge",
        guideRef: "combining-clauses",
        question:
          "Translate into Mandarin using **先…，然后…**: *'We went to Sentosa first, and after that went to eat dinner.'* (Use **我们**, **去了圣淘沙** or **去圣淘沙**, **去吃晚饭**.)",
        answer: {
          type: "text",
          accept: [
            "我们先去了圣淘沙，然后去吃晚饭",
            "我们先去了圣淘沙然后去吃晚饭",
            "我们先去圣淘沙，然后去吃晚饭",
            "我们先去圣淘沙然后去吃晚饭",
            "Wǒmen xiān qù le Shèngtáoshā, ránhòu qù chī wǎnfàn",
            "Wǒmen xiān qù Shèngtáoshā, ránhòu qù chī wǎnfàn",
          ],
          display: "我们先去了圣淘沙，然后去吃晚饭。",
        },
        hints: [
          "Put **先** AFTER **我们** (**我们先…**).",
          "Join the second step with **，然后去吃晚饭**.",
        ],
        solution: [
          "Subject (**我们**) + **先去了圣淘沙** + **，然后去吃晚饭** → **我们先去了圣淘沙，然后去吃晚饭。**",
        ],
      },
      {
        id: "sentence-patterns-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "bi-comparisons",
        marks: 4,
        question:
          "**IGCSE 0547 Comparison Paragraph (4 marks)** — Write 3–4 Mandarin sentences (50–70 characters) comparing **two seasons or two cities** you know well (e.g. **新加坡** vs **北京**, or **夏天** vs **秋天**). Include:\n1. One **比…得多 / 一点儿** sentence (no **很**!)\n2. One **没有…那么…** sentence\n3. One **跟…一样 / 不一样** sentence\n4. Which one you prefer and why (**因为…所以…**)",
        hints: [
          "Open with **新加坡的天气跟北京的天气很不一样**.",
          "Contrast **北京的冬天比新加坡冷得多** and **新加坡没有北京那么冷**, then close with **因为…所以…**.",
        ],
        modelAnswer:
          "新加坡的天气跟北京的天气很不一样。北京的冬天比新加坡冷得多，有时候还会下雪；新加坡的冬天没有北京那么冷，一年四季都很热。因为我很喜欢凉快的天气，所以我最喜欢北京的秋天！",
        markScheme: [
          {
            point: "Uses 比 + Adjective (+ 得多 / 一点儿) accurately without 很",
            keywords: ["比", "得多", "一点儿"],
          },
          {
            point: "Uses 没有…(那么) + Adjective accurately",
            keywords: ["没有"],
          },
          {
            point: "Uses 跟/和…一样 or 不一样 accurately",
            keywords: ["一样"],
          },
          {
            point: "Justifies preference using 因为…所以…",
            keywords: ["因为", "所以", "喜欢"],
          },
        ],
        commonError:
          "Writing *比新加坡很冷* or mixing 比 with 一样 (*比北京一样*).",
      },
      {
        id: "sentence-patterns-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "combining-clauses",
        marks: 5,
        question:
          "**IGCSE 0547 Blog Post (5 marks)** — Write an 80–120 character blog post in Mandarin about **a memorable Saturday with friends in Singapore**. Showcase your full toolkit:\n1. STPV word order with time, **跟朋友一起**, transport, and place\n2. **先…，然后/再…** sequence of two activities\n3. **一边…，一边…** simultaneous moment\n4. **虽然…，但是…**\n5. **不但…，而且…**",
        hints: [
          "Set the scene in STPV order: **上个星期六上午，我跟好朋友一起坐地铁去圣淘沙玩。**",
          "Chain **我们先…，然后…**, **一边…，一边…**, **虽然…，但是…**, and **不但…，而且…** across 3–4 crisp sentences.",
        ],
        modelAnswer:
          "上个星期六上午，我跟好朋友一起坐地铁去圣淘沙玩。我们先在海边游泳，然后去一家小餐厅吃午饭。我们一边喝冰果汁，一边开心地聊天。虽然那天下午天气比早上热一点儿，有点儿累，但是圣淘沙不但风景很美，而且非常好玩，我们都觉得很开心！",
        markScheme: [
          {
            point: "Sets the scene in accurate STPV order with time, 跟…一起, and place/transport",
            keywords: ["星期六", "跟", "一起", "去"],
          },
          {
            point: "Sequences activities clearly with 先…，然后/再…",
            keywords: ["先", "然后", "再"],
          },
          {
            point: "Includes simultaneous actions with 一边…一边…",
            keywords: ["一边"],
          },
          {
            point: "Balances a drawback and positive point with 虽然…但是/可是…",
            keywords: ["虽然", "但是", "可是"],
          },
          {
            point: "Upgrades description with 不但…而且… (and optional 比 comparison)",
            keywords: ["不但", "而且"],
          },
        ],
        commonError:
          "Using 和 to link clauses instead of 先…然后… or 而且.",
      },
    ],
  },
];
