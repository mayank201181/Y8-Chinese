import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "tenses-particles-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "completed-action-le",
      question:
        "Choose the natural Mandarin sentence for *'Mum bought two kg of apples yesterday'*:",
      options: [
        "妈妈昨天买了两公斤苹果。",
        "妈妈昨天买两公斤苹果正在。",
        "妈妈昨天了买两公斤苹果。",
        "妈妈昨天没买了两公斤苹果。",
      ],
      answerIndex: 0,
      hints: [
        "Place completed-action **了** directly AFTER **买** and BEFORE **两公斤苹果**.",
      ],
      explanation:
        "**妈妈昨天买了两公斤苹果。** uses **Verb + 了 + Number + Classifier + Noun** cleanly.",
    },
    {
      id: "tenses-particles-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "past-experience-guo",
      question:
        "Fill in the single-character life-experience particle: **你吃 ______ 北京烤鸭吗？** (*Have you ever eaten Peking roast duck?*)",
      answer: {
        type: "text",
        accept: ["过", "guo", "guò", "guo5"],
        display: "过 (guo)",
      },
      hints: [
        "Which neutral-tone particle after **吃** asks *'have you ever eaten before'*?",
      ],
      solution: [
        "Past life experience uses **Verb + 过** (*guo*): **你吃过北京烤鸭吗？**",
      ],
    },
    {
      id: "tenses-particles-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "ongoing-zhengzai",
      question:
        "Translate into Mandarin: *'My younger brother is doing homework right now.'* (Use **弟弟**, **正在**, **做作业**, **呢**.)",
      answer: {
        type: "text",
        accept: [
          "弟弟正在做作业呢",
          "弟弟正在做作业",
          "弟弟在做作业呢",
          "Dìdi zhèngzài zuò zuòyè ne",
          "Dìdi zhèngzài zuò zuòyè",
        ],
        display: "弟弟正在做作业呢。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["弟弟是正在做作业呢", "弟弟正在做作业了"],
          },
          feedback:
            "Never add **是** before **正在**, and never put **了** on an ongoing **正在** sentence!",
        },
      ],
      hints: [
        "Frame: **弟弟 + 正在 + 做作业 + 呢**.",
      ],
      solution: [
        "**弟弟** + **正在** + **做作业** + **呢** → **弟弟正在做作业呢。**",
      ],
    },
    {
      id: "tenses-particles-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "future-markers",
      question:
        "How do you say *'The weather forecast says it will rain tomorrow'*?",
      options: [
        "天气预报说明天打算下雨。",
        "天气预报说明天会下雨。",
        "天气预报说明天下雨过。",
        "天气预报说明天正在下雨了。",
      ],
      answerIndex: 1,
      hints: [
        "Weather is a **prediction**, NOT a human plan (**打算**).",
        "Which future word marks predictions and likelihood?",
      ],
      explanation:
        "**天气预报说明天会下雨。** uses **会** (*huì*) for future weather prediction.",
    },
    {
      id: "tenses-particles-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "bu-vs-mei",
      question:
        "Translate into Mandarin (watch out for the **了** trap!): *'I didn't eat breakfast this morning.'* (Use **我今天早上**, **没**, **吃早饭**.)",
      answer: {
        type: "text",
        accept: [
          "我今天早上没吃早饭",
          "我今天早上没有吃早饭",
          "今天早上我没吃早饭",
          "今天早上我没有吃早饭",
          "Wǒ jīntiān zǎoshang méi chī zǎofàn",
          "Wǒ jīntiān zǎoshang méiyǒu chī zǎofàn",
        ],
        display: "我今天早上没吃早饭。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["我今天早上没吃了早饭", "我今天早上不吃早饭"],
          },
          feedback:
            "Remember: past non-occurrence uses **没** (NOT **不**) and **DROPS 了**! Write **我今天早上没吃早饭**.",
        },
      ],
      hints: [
        "Negate a past action with **没** (or **没有**).",
        "Make sure there is NO **了** anywhere in the sentence!",
      ],
      solution: [
        "Past action negation = **没 + Verb** (zero **了**!): **我今天早上没吃早饭。**",
      ],
    },
    {
      id: "tenses-particles-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "past-experience-guo",
      question:
        "Translate into Mandarin (keep **过**!): *'I have never been to Harbin.'* (Use **我**, **没** or **没有**, **去过**, **哈尔滨**.)",
      answer: {
        type: "text",
        accept: [
          "我没去过哈尔滨",
          "我没有去过哈尔滨",
          "我从来没去过哈尔滨",
          "Wǒ méi qù guo Hā'ěrbīn",
          "Wǒ méi qù guò Hā'ěrbīn",
          "Wǒ méiyǒu qù guo Hā'ěrbīn",
          "Wǒ méiyǒu qù guò Hā'ěrbīn",
        ],
        display: "我没去过哈尔滨。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["我不去过哈尔滨", "我没去哈尔滨"],
          },
          feedback:
            "Use **没** (never **不**) AND keep **过** after **去** so it means *never in my life*: **我没去过哈尔滨**!",
        },
      ],
      hints: [
        "Negate life experience with **没(有) + Verb + 过**.",
        "Keep **过** attached to **去**!",
      ],
      solution: [
        "**我** + **没(有)** + **去过** + **哈尔滨** → **我没去过哈尔滨。**",
      ],
    },
    {
      id: "tenses-particles-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "bu-vs-mei",
      question:
        "Choose the correct negation for *'I don't usually drink cola'*:",
      options: [
        "我平时没喝可乐。",
        "我平时没喝了可乐。",
        "我平时不喝可乐。",
        "我平时不喝过可乐。",
      ],
      answerIndex: 2,
      hints: [
        "**平时** (*usually*) signals a **habit**.",
        "Do habits negate with **不** or **没**?",
      ],
      explanation:
        "**我平时不喝可乐。** uses **不** for a present habit/routine.",
    },
    {
      id: "tenses-particles-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "future-markers",
      question:
        "Fill in the two-character imminent-future word after a specific time: **下个星期 ______ 放假了！** (*Next week the holidays are about to start!*)",
      answer: {
        type: "text",
        accept: ["就要", "jiùyào"],
        display: "就要 (jiùyào)",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["快要", "kuàiyào"],
          },
          feedback:
            "Look at **下个星期** in front! When a specific time expression precedes *'about to'*, you MUST use **就要** (not **快要**).",
        },
      ],
      hints: [
        "Specific time (**下个星期**) stands at the start!",
        "Swap **快要** for **______** (**…了**).",
      ],
      solution: [
        "Specific Time + **就要** + Verb + **了**: **下个星期就要放假了！**",
      ],
    },
    {
      id: "tenses-particles-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "completed-action-le",
      question:
        "How do you exclaim *'It has started snowing!'* in three characters using **下雪** and change-of-state **了**?",
      answer: {
        type: "text",
        accept: ["下雪了", "xià xuě le"],
        display: "下雪了！",
      },
      hints: [
        "Attach sentence-final **了** right after **下雪** to announce the new weather state!",
        "Three characters: **下雪 + 了**.",
      ],
      solution: [
        "**下雪** + change-of-state **了** → **下雪了！**",
      ],
    },
    {
      id: "tenses-particles-quiz-q10",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "bu-vs-mei",
      question:
        "Choose the sentence with **ZERO** grammar mistakes:",
      options: [
        "明天我不有时间去打网球。",
        "上个年我去过北京两次。",
        "昨天天气很冷了，所以我没出门了。",
        "虽然我还没去过长城，但是明年暑假我打算跟家人一起去！",
      ],
      answerIndex: 3,
      hints: [
        "Spot the errors in the distractors: ***不有***, ***上个年***, and ***很冷了 / 没出门了***!",
        "Verify **还没去过长城** + **明年暑假我打算…**.",
      ],
      explanation:
        "**虽然我还没去过长城，但是明年暑假我打算跟家人一起去！** uses **还没去过** (negative experience) and **明年暑假…打算…** (future plan) flawlessly.",
    },
  ],
  papers: [
    {
      id: "tenses-particles-p1",
      title: "Practice Paper 1 — Aspect Particles 了, 过 & Ongoing 正在",
      questions: [
        {
          id: "tenses-particles-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "completed-action-le",
          question:
            "Translate into Mandarin: *'I'm hungry now!'* (3 characters using **我** and **饿了**.)",
          answer: {
            type: "text",
            accept: ["我饿了", "Wǒ è le"],
            display: "我饿了！",
          },
          hints: [
            "Subject **我** + change-of-state **饿了**.",
          ],
          solution: [
            "**我饿了！** (*Wǒ è le!*) announces the new state of being hungry.",
          ],
        },
        {
          id: "tenses-particles-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "completed-action-le",
          question:
            "Translate into Mandarin: *'My younger brother ate eight soup dumplings yesterday.'* (Use **弟弟昨天**, **吃**, **八个小笼包**.)",
          answer: {
            type: "text",
            accept: [
              "弟弟昨天吃了八个小笼包",
              "昨天弟弟吃了八个小笼包",
              "Dìdi zuótiān chī le bā gè xiǎolóngbāo",
              "Zuótiān dìdi chī le bā gè xiǎolóngbāo",
            ],
            display: "弟弟昨天吃了八个小笼包。",
          },
          hints: [
            "Slot completed-action **了** right between **吃** and **八个小笼包**!",
          ],
          solution: [
            "**弟弟昨天** + **吃了** + **八个小笼包** → **弟弟昨天吃了八个小笼包。**",
          ],
        },
        {
          id: "tenses-particles-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "past-experience-guo",
          question:
            "Translate into Mandarin: *'I have been to the Great Wall before.'* (Use **我以前**, **去过**, **长城**.)",
          answer: {
            type: "text",
            accept: [
              "我以前去过长城",
              "以前我去过长城",
              "我去过长城",
              "Wǒ yǐqián qù guo Chángchéng",
              "Wǒ yǐqián qù guò Chángchéng",
            ],
            display: "我以前去过长城。",
          },
          hints: [
            "Order: **我以前 + 去过 + 长城**.",
          ],
          solution: [
            "**我以前去过长城。** (*Wǒ yǐqián qù guo Chángchéng.*)",
          ],
        },
        {
          id: "tenses-particles-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "ongoing-zhengzai",
          question:
            "Translate into Mandarin: *'Older brother is listening to music right now.'* (Use **哥哥**, **正在**, **听音乐**, **呢**.)",
          answer: {
            type: "text",
            accept: [
              "哥哥正在听音乐呢",
              "哥哥正在听音乐",
              "哥哥在听音乐呢",
              "Gēge zhèngzài tīng yīnyuè ne",
            ],
            display: "哥哥正在听音乐呢。",
          },
          hints: [
            "Frame: **哥哥 + 正在 + 听音乐 + 呢**.",
          ],
          solution: [
            "**哥哥正在听音乐呢。** (*Gēge zhèngzài tīng yīnyuè ne.*)",
          ],
        },
        {
          id: "tenses-particles-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "completed-action-le",
          question:
            "Fix the ONE error in this habitual sentence and type the corrected Mandarin sentence: **爷爷每天早上六点起床了。**",
          answer: {
            type: "text",
            accept: [
              "爷爷每天早上六点起床",
              "每天早上爷爷六点起床",
              "Yéye měitiān zǎoshang liù diǎn qǐchuáng",
            ],
            display: "爷爷每天早上六点起床。",
          },
          hints: [
            "Look at **每天早上** (*every morning*) — this is a daily habit!",
            "Delete the particle that should never appear on habitual routines.",
          ],
          solution: [
            "Habitual routines with **每天** do NOT take **了**.",
            "Corrected sentence: **爷爷每天早上六点起床。**",
          ],
        },
        {
          id: "tenses-particles-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "completed-action-le",
          question:
            "Translate into Mandarin using **已经…了**: *'I have already finished my homework.'* (Use **我已经**, **做完作业**, **了**.)",
          answer: {
            type: "text",
            accept: [
              "我已经做完作业了",
              "我已经做完了作业",
              "我已经做完了作业了",
              "Wǒ yǐjīng zuò wán zuòyè le",
            ],
            display: "我已经做完作业了。",
          },
          hints: [
            "**已经** goes right after **我** and before **做完作业**.",
            "Close the sentence with **了**!",
          ],
          solution: [
            "**我已经** + **做完作业** + **了** → **我已经做完作业了。**",
          ],
        },
        {
          id: "tenses-particles-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "past-experience-guo",
          question:
            "Translate into Mandarin (watch where **两次** goes!): *'I have been to Beijing twice.'* (Use **我**, **去过**, **北京**, **两次**.)",
          answer: {
            type: "text",
            accept: [
              "我去过北京两次",
              "我去过两次北京",
              "Wǒ qù guo Běijīng liǎng cì",
              "Wǒ qù guò Běijīng liǎng cì",
              "Wǒ qù guo liǎng cì Běijīng",
              "Wǒ qù guò liǎng cì Běijīng",
            ],
            display: "我去过北京两次。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["我两次去过北京", "我去过北京二次"],
              },
              feedback:
                "Put **两次** (with **两**, never *二次*!) AFTER **去过北京**: **我去过北京两次**.",
            },
          ],
          hints: [
            "Keep **去过** together, followed by **北京**, then **两次**.",
            "Remember: before measure word **次**, always use **两**, never **二**!",
          ],
          solution: [
            "**我** + **去过** + **北京** + **两次** → **我去过北京两次。**",
          ],
        },
        {
          id: "tenses-particles-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "ongoing-zhengzai",
          question:
            "Fix the double-**在** error and type the clean Mandarin sentence: **小明正在在体育馆打羽毛球呢。**",
          answer: {
            type: "text",
            accept: [
              "小明正在体育馆打羽毛球呢",
              "小明正在体育馆打羽毛球",
              "小明在体育馆打羽毛球呢",
              "Xiǎomíng zhèngzài tǐyùguǎn dǎ yǔmáoqiú ne",
            ],
            display: "小明正在体育馆打羽毛球呢。",
          },
          hints: [
            "Look at **正在在体育馆** — **正在** already contains **在**!",
            "Merge **正在 + 在** into a single **正在**.",
          ],
          solution: [
            "Drop the duplicate **在**: **小明正在体育馆打羽毛球呢。**",
          ],
        },
        {
          id: "tenses-particles-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "future-markers",
          question:
            "Translate into Mandarin using **准备**: *'We are planning to go to Sentosa next month.'* (Use **我们准备**, **下个月**, **去圣淘沙**.)",
          answer: {
            type: "text",
            accept: [
              "我们准备下个月去圣淘沙",
              "下个月我们准备去圣淘沙",
              "我们下个月准备去圣淘沙",
              "Wǒmen zhǔnbèi xià gè yuè qù Shèngtáoshā",
              "Xià gè yuè wǒmen zhǔnbèi qù Shèngtáoshā",
            ],
            display: "我们准备下个月去圣淘沙。",
          },
          hints: [
            "*'Next month'* is **下个月**.",
            "Combine **我们准备 + 下个月 + 去圣淘沙**.",
          ],
          solution: [
            "**我们准备下个月去圣淘沙。** (or **我们下个月准备去圣淘沙。**)",
          ],
        },
        {
          id: "tenses-particles-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "bu-vs-mei",
          question:
            "Fix the deadly negation error and write the corrected Mandarin sentence: **姐姐上个星期没买了那条裙子。**",
          answer: {
            type: "text",
            accept: [
              "姐姐上个星期没买那条裙子",
              "姐姐上个星期没有买那条裙子",
              "上个星期姐姐没买那条裙子",
              "Jiějie shàng gè xīngqī méi mǎi nà tiáo qúnzi",
            ],
            display: "姐姐上个星期没买那条裙子。",
          },
          hints: [
            "Look at **没买了**!",
            "When **没** negates a past verb, **了** MUST disappear.",
          ],
          solution: [
            "Delete **了** after **买**: **姐姐上个星期没买那条裙子。**",
          ],
        },
        {
          id: "tenses-particles-p1-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "past-experience-guo",
          question:
            "Read: **这本中文书一共有一百二十页。我上个星期看了四十五页，今天又看了三十五页。** How many pages have I **not yet read** (**还没看**)? (Type a number.)",
          answer: {
            type: "number",
            value: 40,
            display: "40",
          },
          hints: [
            "Total pages (**一共**) = **一百二十** (120).",
            "Pages already read (**看了**) = **四十五** (45) + **三十五** (35) = 80. Subtract from 120!",
          ],
          solution: [
            "Total = 120 pages.",
            "Read = 45 + 35 = 80 pages.",
            "Remaining (**还没看**) = 120 − 80 = **40** pages.",
          ],
        },
        {
          id: "tenses-particles-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "bu-vs-mei",
          question:
            "Translate BOTH clauses into one Mandarin sentence: *'Yesterday I didn't go to the library, and tomorrow I won't go either.'* (Use **我昨天没去图书馆**, **明天也不去**.)",
          answer: {
            type: "text",
            accept: [
              "我昨天没去图书馆，明天也不去",
              "我昨天没去图书馆明天也不去",
              "昨天我没去图书馆，明天也不去",
              "我昨天没有去图书馆，明天也不去",
              "Wǒ zuótiān méi qù túshūguǎn, míngtiān yě bú qù",
              "Wǒ zuótiān méi qù túshūguǎn, míngtiān yě bù qù",
            ],
            display: "我昨天没去图书馆，明天也不去。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [
                  "我昨天不去图书馆，明天也不去",
                  "我昨天没去图书馆，明天也没去",
                ],
              },
              feedback:
                "Check BOTH halves! Yesterday's non-occurrence needs **没去**, while tomorrow's refusal needs **不去**!",
            },
          ],
          hints: [
            "Clause 1 (past **昨天**): **没去图书馆** (NO **了**!).",
            "Clause 2 (future **明天**): **明天也不去** (use **不**!).",
          ],
          solution: [
            "Past fact = **我昨天没去图书馆，**",
            "Future plan = **明天也不去。**",
          ],
        },
        {
          id: "tenses-particles-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "past-experience-guo",
          marks: 4,
          question:
            "**IGCSE 0547 Short Writing (4 marks)** — Write 3–4 Mandarin sentences (50–70 characters) about **your travel & food experiences**. Include:\n1. One place you **have been to before** (**去过** + number of times)\n2. What you **ate or saw** on a specific trip (**Verb + 了**)\n3. One famous place or food you **have not experienced yet** (**还没…过**)\n4. Where you **plan to go** next holiday (**打算 / 准备**)",
          hints: [
            "Use **我以前去过北京两次** and **去年冬天我吃了北京烤鸭**.",
            "Contrast with **我还没去过上海** (keep **过**!) and **明年暑假我打算去上海旅行**.",
          ],
          modelAnswer:
            "我以前跟家人去过北京两次。去年冬天我们在北京吃了好吃的北京烤鸭，还看了雪。虽然我还没去过上海，但是明年暑假我打算跟爸爸妈妈一起去上海旅行！",
          markScheme: [
            {
              point: "States a past travel experience accurately using 去过 (+ 一次/两次)",
              keywords: ["去过", "次"],
            },
            {
              point: "Describes a specific completed past action with Verb + 了",
              keywords: ["吃了", "看了", "买了", "去了"],
            },
            {
              point: "Expresses an unexperienced item/place using 没(有)…过 or 还没…过 (keeping 过!)",
              keywords: ["没去过", "没吃过", "还没"],
            },
            {
              point: "States an upcoming holiday plan using 打算, 准备, or 想",
              keywords: ["打算", "准备", "明年", "下个"],
            },
          ],
          commonError:
            "Writing *没去了* or forgetting 过 in *我还没去上海* when meaning 'have never been'.",
        },
        {
          id: "tenses-particles-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "ongoing-zhengzai",
          marks: 5,
          question:
            "**IGCSE 0547 Sunday Diary Entry (5 marks)** — It is **4:00 p.m. on Sunday**. Write an 80–110 character diary/message in Mandarin covering **all three timeframes** seamlessly:\n1. What you **did this morning** (**Verb + 了**) and one thing you **didn't do** (**没 + Verb**, no **了**!)\n2. What you and your family members **are doing right now** (**正在 / 在 … 呢**)\n3. What is **about to happen** or what you **will/plan to do tonight** (**快要…了 / 就要…了 / 会 / 打算**)",
          hints: [
            "Morning: **今天早上我复习了两个小时中文，没玩电脑游戏。**",
            "Now (4 p.m.): **现在妈妈正在厨房做晚饭呢，弟弟在看电视。** Evening: **六点就要吃晚饭了，晚饭以后我打算看书！**",
          ],
          modelAnswer:
            "今天是星期天。早上我在房间复习了中文，没玩电脑游戏。现在是下午四点，外面正在下雨呢！妈妈正在厨房做晚饭呢，弟弟在客厅画画。六点就要吃晚饭了。吃晚饭以后，我打算跟家人一起看一部中国电影！",
          markScheme: [
            {
              point: "Uses Verb + 了 accurately for a completed morning activity",
              keywords: ["了", "早上", "上午"],
            },
            {
              point: "Uses 没(有) + Verb (with NO 了) for something not done in the past",
              keywords: ["没"],
            },
            {
              point: "Describes ongoing actions right now using 正在…呢 / 在…呢",
              keywords: ["正在", "呢"],
            },
            {
              point: "Uses imminent future (快要…了 / 就要…了) accurately",
              keywords: ["快要", "就要", "快"],
            },
            {
              point: "States evening plan or forecast with 打算 / 准备 / 会 / 要",
              keywords: ["打算", "准备", "会", "要", "晚上"],
            },
          ],
          commonError:
            "Mixing 正在 with 了 (*正在做晚饭了*) or keeping 了 after 没 (*没玩了*).",
        },
      ],
    },
    {
      id: "tenses-particles-p2",
      title: "Practice Paper 2 — Future Markers, Time Words & 不 vs 没 Showdown",
      questions: [
        {
          id: "tenses-particles-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "bu-vs-mei",
          question:
            "Fill in **不** or **没**: **我家 ______ 有宠物。** (*My family doesn't have pets.*)",
          answer: {
            type: "text",
            accept: ["没", "méi"],
            display: "没 (méi)",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["不", "bù"],
              },
              feedback:
                "Look at **有** right after the blank! **有** is ALWAYS negated with **没** (**没有**), NEVER *不有*!",
            },
          ],
          hints: [
            "Which character ALWAYS negates **有**?",
          ],
          solution: [
            "**有** is always negated by **没** → **没有** (*méiyǒu*).",
          ],
        },
        {
          id: "tenses-particles-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "bu-vs-mei",
          question:
            "Fill in **不** or **没**: **我 ______ 是英国人，我是新加坡人。**",
          answer: {
            type: "text",
            accept: ["不", "bú", "bù"],
            display: "不 (bú)",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["没", "méi"],
              },
              feedback:
                "The verb **是** (*to be*) is ALWAYS negated with **不** (**不是** *bú shì*), never **没**!",
            },
          ],
          hints: [
            "How do you say *'am not'* before **是**?",
          ],
          solution: [
            "**是** is always negated with **不**: **我不是英国人** (*Wǒ bú shì Yīngguórén*).",
          ],
        },
        {
          id: "tenses-particles-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "future-markers",
          question:
            "Type the Mandarin word for **'last year'** (2 characters — Simplified Hanzi or toned Pinyin):",
          answer: {
            type: "text",
            accept: ["去年", "qùnián"],
            display: "去年 (qùnián)",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["上个年", "上年"],
              },
              feedback:
                "Years never take **上个**! *'Last year'* is **去年** (*qùnián*).",
            },
          ],
          hints: [
            "2 characters: **______ 年** (NOT *上个年*!).",
          ],
          solution: [
            "*'Last year'* in Mandarin is **去年** (*qùnián*).",
          ],
        },
        {
          id: "tenses-particles-p2-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "completed-action-le",
          question:
            "Translate into Mandarin: *'Thank you, I'm full (have eaten until full)!'* (Use **谢谢**, **我吃饱了**.)",
          answer: {
            type: "text",
            accept: [
              "谢谢，我吃饱了",
              "谢谢我吃饱了",
              "谢谢，我已经吃饱了",
              "Xièxie, wǒ chī bǎo le",
            ],
            display: "谢谢，我吃饱了！",
          },
          hints: [
            "Combine **谢谢，** + **我吃饱了**.",
          ],
          solution: [
            "**谢谢，我吃饱了！** (*Xièxie, wǒ chī bǎo le!*)",
          ],
        },
        {
          id: "tenses-particles-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "future-markers",
          question:
            "Translate into Mandarin using **快要…了**: *'The train is about to depart!'* (Use **火车**, **开车**.)",
          answer: {
            type: "text",
            accept: [
              "火车快要开车了",
              "火车快开车了",
              "Huǒchē kuàiyào kāichē le",
              "Huǒchē kuài kāichē le",
            ],
            display: "火车快要开车了！",
          },
          hints: [
            "No specific time is given, so wrap **开车** inside **快要…了**!",
            "**火车 + 快要 + 开车 + 了**.",
          ],
          solution: [
            "**火车** + **快要开车了** → **火车快要开车了！**",
          ],
        },
        {
          id: "tenses-particles-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "completed-action-le",
          question:
            "Unscramble into natural Mandarin order: **刷牙 / 我 / 睡觉 / 以前** (*Before going to sleep, I brush my teeth.*)",
          answer: {
            type: "text",
            accept: [
              "睡觉以前我刷牙",
              "我睡觉以前刷牙",
              "Shuìjiào yǐqián wǒ shuāyá",
              "Wǒ shuìjiào yǐqián shuāyá",
            ],
            display: "睡觉以前，我刷牙。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["以前睡觉我刷牙", "我刷牙以前睡觉"],
              },
              feedback:
                "Put **以前** AFTER **睡觉** (**睡觉以前** = *before sleeping*), and place that time block BEFORE **刷牙**!",
            },
          ],
          hints: [
            "*'Before sleeping'* in Mandarin is **睡觉以前** (Event + **以前**).",
            "Put **睡觉以前** before **我刷牙** (or right after **我**).",
          ],
          solution: [
            "**睡觉以前，我刷牙。** (or **我睡觉以前刷牙。**)",
          ],
        },
        {
          id: "tenses-particles-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "past-experience-guo",
          question:
            "Turn this statement into a **…没有？** experience question (do NOT use **吗**!): **你去过新加坡植物园。**",
          answer: {
            type: "text",
            accept: [
              "你去过新加坡植物园没有",
              "Nǐ qù guo Xīnjiāpō Zhíwùyuán méiyǒu",
              "Nǐ qù guò Xīnjiāpō Zhíwùyuán méiyǒu",
            ],
            display: "你去过新加坡植物园没有？",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["你去过新加坡植物园没有吗"],
              },
              feedback:
                "Drop **吗**! **…过 + Object + 没有？** is already a complete question.",
            },
          ],
          hints: [
            "Keep **你去过新加坡植物园** unchanged and append **没有** at the end!",
            "Never add **吗** after **没有**.",
          ],
          solution: [
            "**你去过新加坡植物园没有？** (*Have you ever been to the Singapore Botanic Gardens?*)",
          ],
        },
        {
          id: "tenses-particles-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "ongoing-zhengzai",
          question:
            "Translate into Mandarin: *'The teacher is wearing a pair of glasses.'* (Use **老师**, **戴着**, **一副眼镜**.)",
          answer: {
            type: "text",
            accept: [
              "老师戴着一副眼镜",
              "Lǎoshī dài zhe yí fù yǎnjìng",
              "Lǎoshī dài zhe yī fù yǎnjìng",
            ],
            display: "老师戴着一副眼镜。",
          },
          hints: [
            "Accessories like glasses use **戴** (*dài*) + continuous state particle **着** (*zhe*).",
            "Classifier for a pair of glasses is **副** (*fù*).",
          ],
          solution: [
            "**老师** + **戴着** + **一副眼镜** → **老师戴着一副眼镜。**",
          ],
        },
        {
          id: "tenses-particles-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "bu-vs-mei",
          question:
            "Translate into Mandarin using **从来不**: *'Dad never eats spicy dishes.'* (Use **爸爸**, **从来不**, **吃辣的菜**.)",
          answer: {
            type: "text",
            accept: [
              "爸爸从来不吃辣的菜",
              "Bàba cónglái bù chī là de cài",
            ],
            display: "爸爸从来不吃辣的菜。",
          },
          hints: [
            "Habitual *'never'* uses **从来不** right before the verb **吃**.",
            "Order: **爸爸 + 从来不 + 吃辣的菜**.",
          ],
          solution: [
            "**爸爸从来不吃辣的菜。** (*Bàba cónglái bù chī là de cài.*)",
          ],
        },
        {
          id: "tenses-particles-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "bu-vs-mei",
          question:
            "Answer **你吃午饭了吗？** with *'I haven't eaten lunch yet'* using **还没**: (Use **我还没**, **吃午饭**, optional **呢**.)",
          answer: {
            type: "text",
            accept: [
              "我还没吃午饭呢",
              "我还没吃午饭",
              "我还没有吃午饭呢",
              "我还没有吃午饭",
              "Wǒ hái méi chī wǔfàn ne",
              "Wǒ hái méi chī wǔfàn",
            ],
            display: "我还没吃午饭呢。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["我还没吃了午饭", "我还没吃午饭了"],
              },
              feedback:
                "Never put **了** inside a **还没** ('not yet') sentence! Write **我还没吃午饭呢**.",
            },
          ],
          hints: [
            "Use **我还没 + 吃午饭 (+ 呢)**.",
            "Make sure there is NO **了**!",
          ],
          solution: [
            "**我还没吃午饭呢。** (*I haven't eaten lunch yet.*)",
          ],
        },
        {
          id: "tenses-particles-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "future-markers",
          question:
            "Read the timetable: **现在是早上七点四十五分，八点就要上课了！** How many minutes are left before class starts? (Type a number.)",
          answer: {
            type: "number",
            value: 15,
            display: "15",
          },
          hints: [
            "**七点四十五分** = 7:45 a.m.; **八点** = 8:00 a.m.",
            "Compute {{60 - 45}} minutes!",
          ],
          solution: [
            "From 7:45 (**七点四十五分**) to 8:00 (**八点**) is 60 − 45 = **15** minutes (**还有十五分钟就要上课了**).",
          ],
        },
        {
          id: "tenses-particles-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "completed-action-le",
          question:
            "Translate this relative-completion chain into Mandarin: *'Tomorrow after I eat breakfast, I will go to school right away.'* (Use **明天我吃了早饭**, **就去学校**.)",
          answer: {
            type: "text",
            accept: [
              "明天我吃了早饭就去学校",
              "我明天吃了早饭就去学校",
              "明天我吃了早饭，就去学校",
              "Míngtiān wǒ chī le zǎofàn jiù qù xuéxiào",
              "Wǒ míngtiān chī le zǎofàn jiù qù xuéxiào",
            ],
            display: "明天我吃了早饭就去学校。",
          },
          hints: [
            "Use **Verb 1 + 了 + Object + 就 + Verb 2** (**吃了早饭就去学校**).",
            "Even with **明天**, **吃了** marks that breakfast finishes before leaving for school!",
          ],
          solution: [
            "**明天我** + **吃了早饭** (completed first) + **就去学校** (happens immediately next) → **明天我吃了早饭就去学校。**",
          ],
        },
        {
          id: "tenses-particles-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "bu-vs-mei",
          marks: 4,
          question:
            "**IGCSE 0547 Sick-Leave Message (4 marks)** — Write a 50–70 character message to **王老师** explaining why you are absent today. Include:\n1. Change-of-state symptom (**发烧了 / 生病了**)\n2. Why you **didn't come** to school today (**没来上学** — no **了**!)\n3. What you **are doing right now** (**正在 / 在 … 呢**)\n4. What the doctor says or when you **will return** (**会 / 打算**)",
          hints: [
            "Open politely: **王老师，您好！今天早上我发烧了，所以没来上学。**",
            "Add **我现在正在医院看医生呢** (or **正在家休息呢**) and **医生说明天我就会好，明天我一定会去上课！**",
          ],
          modelAnswer:
            "王老师，您好！今天早上我突然发烧了，嗓子也很疼，所以今天没来上学。我现在正在家休息呢，刚刚吃了药。医生说明天我就会好一点儿，希望明天能回学校上课！",
          markScheme: [
            {
              point: "Uses change-of-state 了 accurately for falling ill/fever (生病了 / 发烧了)",
              keywords: ["生病了", "发烧了", "感冒了"],
            },
            {
              point: "Negates coming to school accurately with 没(有)来 (and NO 了)",
              keywords: ["没来", "没有来", "没去"],
            },
            {
              point: "Describes current action with 正在 / 在 … (呢) or 刚刚",
              keywords: ["正在", "在", "刚刚"],
            },
            {
              point: "Includes future recovery/return using 会, 希望, or 打算",
              keywords: ["会", "希望", "打算", "明天"],
            },
          ],
          commonError:
            "Writing *今天我不来上学了* or *没来了上学*.",
        },
        {
          id: "tenses-particles-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "future-markers",
          marks: 5,
          question:
            "**IGCSE 0547 Article (5 marks)** — Write an 80–120 character article titled **我的中文学习之旅 (My Mandarin Learning Journey)** spanning past, present, and future:\n1. How long you **have already studied** Mandarin (**已经学了…了**)\n2. What Chinese culture/food/places you **have experienced** (**…过**) and **haven't experienced yet** (**还没…过**)\n3. What you **usually do** vs **never do** when studying (**平时 / 常常** + **不**)\n4. What you **are preparing for right now** (**正在 / 快要…了 / 就要…了**)\n5. Your **future plan** (**打算 / 希望 / 会**)",
          hints: [
            "Open with **我已经学了三年中文了！** and share **吃过 / 看过 / 还没去过**.",
            "Include **平时我每天复习生词，上课从来不玩手机**, **下个星期就要考试了，我正在努力复习呢**, and **明年我打算去中国旅行！**",
          ],
          modelAnswer:
            "我已经学了三年中文了！我吃过小笼包和北京烤鸭，也看过两部中国电影，可是还没去过北京。我平时每天晚上都写汉字，上课的时候从来不说英文。下个月就要中文考试了，所以我最近正在认真复习生词呢。我希望明年暑假能跟家人一起去北京看长城！",
          markScheme: [
            {
              point: "States duration of learning with (已经)学了 + duration (+ 了)",
              keywords: ["学了", "已经", "中文"],
            },
            {
              point: "Contrasts positive experience (Verb + 过) and negative experience (还没…过 / 没…过)",
              keywords: ["过", "还没", "没去过"],
            },
            {
              point: "Includes habitual routine and 不 negation (平时 / 每天 / 从来不)",
              keywords: ["平时", "每天", "不"],
            },
            {
              point: "Uses ongoing 正在…呢 and/or imminent 就要…了 / 快要…了",
              keywords: ["正在", "就要", "快要"],
            },
            {
              point: "Concludes with future aspiration using 希望, 打算, 准备, or 会",
              keywords: ["希望", "打算", "准备", "明年"],
            },
          ],
          commonError:
            "Writing *上个年* instead of 去年, or dropping 过 in *还没去北京*.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "tenses-particles-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "completed-action-le",
      question:
        "**The Double-了 Mystery!** Compare:\n- Sentence A: **我在新加坡住了五年。** (*one 了*)\n- Sentence B: **我在新加坡住了五年了。** (*two 了s!*)\nWhich person is **still living in Singapore right now**?",
      options: [
        "Person B (**住了五年了** — the second sentence-final **了** brings the 5-year state right up to the present, meaning 5 years *so far and still living here*!)",
        "Person A (**住了五年** — one **了** always means present tense)",
        "Neither of them lives in Singapore now",
        "Both sentences mean 'I will move to Singapore in five years'",
      ],
      answerIndex: 0,
      hints: [
        "In Sentence A, **住了五年** is a closed bounded block of 5 years (e.g. from 2015 to 2020 before moving away).",
        "What happens when you add sentence-final **了** (*up to the current state*) at the very end in Sentence B?",
      ],
      explanation:
        "**Verb + 了 + Duration** (**住了五年**) records a finished 5-year period, whereas **Verb + 了 + Duration + 了** (**住了五年了**) means *'have lived here for 5 years up to now — and still do!'*.",
    },
    {
      id: "tenses-particles-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "bu-vs-mei",
      question:
        "**Minimal-Pair Detective!** Suppose Mum asked Xiaoming yesterday to tidy his room, and Xiaoming stubbornly **refused** on the spot. In the story **妈妈昨天让小明整理房间，可是小明 ______ 整理**, which single character (**不** or **没**) captures Xiaoming's **willful refusal** (*'refused to / wouldn't tidy'*) rather than merely forgetting?",
      answer: {
        type: "text",
        accept: ["不", "bù"],
        display: "不 (bù)",
      },
      hints: [
        "**没整理** simply states the objective fact that the room didn't get tidied (maybe he ran out of time).",
        "Which negator expresses **subjective willpower / refusal** (*would not!*) even inside a past narrative?",
      ],
      solution: [
        "**不** negates **subjective volition/willingness**, so inside a past story **可是小明不整理** means *'yet Xiaoming refused to tidy it'*, whereas **小明没整理** neutrally reports that he didn't tidy it!",
      ],
    },
    {
      id: "tenses-particles-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "past-experience-guo",
      question:
        "**Why Does 过 Sound Weird Here?** Which of these four sentences misuses **过** (*guo*)?",
      options: [
        "我以前去过东海岸公园。",
        "你吃过海南鸡饭吗？",
        "我爷爷一九五〇年出生过。",
        "姐姐学过两年小提琴。",
      ],
      answerIndex: 2,
      hints: [
        "**过** treats an event as a **repeatable life experience** that happened and ended.",
        "Can a person experience *being born* (**出生**) as a repeatable past episode?",
      ],
      explanation:
        "**我爷爷一九五〇年出生过** is nonsensical because **过** marks a repeatable experience you pass through in life — once-only irreversible milestones like **出生** (*be born*) or **毕业** at a specific date use **是…的** (**是一九五〇年出生的**), never **过**!",
    },
    {
      id: "tenses-particles-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "future-markers",
      question:
        "**Imminent-Future Surgery!** Fix the grammar clash between **还有十分钟** (*10 minutes left*) and **快要** by typing the complete corrected Mandarin sentence:\n\n**✗ 还有十分钟快要上课了！**",
      answer: {
        type: "text",
        accept: [
          "还有十分钟就要上课了",
          "Hái yǒu shí fēnzhōng jiùyào shàng kè le",
        ],
        display: "还有十分钟就要上课了！",
      },
      hints: [
        "**还有十分钟** is a specific countdown time expression standing at the front!",
        "Swap **快要** to the two-character marker that partners with specific times.",
      ],
      solution: [
        "When a specific time or countdown (**还有十分钟**) leads the sentence, replace **快要** with **就要**: **还有十分钟就要上课了！**",
      ],
    },
    {
      id: "tenses-particles-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "completed-action-le",
      question:
        "**Before vs After Logic!** Read carefully:\n**星期六早上，哥哥跑步以前喝了一杯水；跑步以后吃了两个鸡蛋和一片面包。**\nWhat was the **VERY FIRST** thing Older Brother consumed on Saturday morning? Type the Mandarin noun (**水**, **鸡蛋**, or **面包**).",
      answer: {
        type: "text",
        accept: ["水", "一杯水", "shuǐ", "yì bēi shuǐ", "yī bēi shuǐ"],
        display: "水 (一杯水)",
      },
      hints: [
        "Decode **跑步以前** (*before jogging*) vs **跑步以后** (*after jogging*)!",
        "What did he consume **跑步以前**?",
      ],
      solution: [
        "**跑步以前喝了一杯水** = *Before jogging, he drank a glass of water*.",
        "**跑步以后吃了两个鸡蛋和一片面包** = *After jogging, he ate two eggs and a slice of bread*.",
        "Therefore the very first thing he consumed was **水** (**一杯水**)!",
      ],
    },
    {
      id: "tenses-particles-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "ongoing-zhengzai",
      question:
        "**Three Particles on One Verb!** Match the exact English meanings of **穿** (*wear/put on*) with **了**, **过**, **着**, and **正在**:\n1. **他正在穿毛衣呢。**\n2. **他穿着一件毛衣。**\n3. **他以前没穿过毛衣！** (e.g. growing up in tropical Singapore!)",
      options: [
        "(1) He wore a jumper; (2) He will wear a jumper; (3) He hates jumpers.",
        "(1) He is pulling a jumper on right now; (2) He has a jumper on; (3) He has never worn a jumper in his life!",
        "(1) He has a jumper on; (2) He is pulling a jumper on; (3) He didn't buy a jumper yesterday.",
        "(1) He never wears jumpers; (2) He bought a jumper; (3) He is washing a jumper.",
      ],
      answerIndex: 1,
      hints: [
        "**正在穿** = dynamic motion in progress right now.",
        "**穿着** = steady state on his body; **没穿过** = never once experienced in his life!",
      ],
      explanation:
        "One invariant verb **穿** expresses three completely distinct aspects via particles: **正在穿** (putting it on right now), **穿着** (wearing it as a continuous state), and **没穿过** (has never worn one before)!",
    },
    {
      id: "tenses-particles-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "past-experience-guo",
      question:
        "**Travel Tally Puzzle!** Read Meimei's travel log:\n- **我去过三次北京。**\n- **我去上海的次数比北京多两次。**\n- **我还没去过哈尔滨。**\n- **去年我去过一次伦敦。**\nHow many trips (**次**) in total has Meimei made across all four cities combined? (Type a number.)",
      answer: {
        type: "number",
        value: 9,
        display: "9",
      },
      hints: [
        "Beijing = **三次** (3).",
        "Shanghai (**比北京多两次**) = 3 + 2 = 5; Harbin (**还没去过**) = 0; London (**一次**) = 1.",
        "Add {{3 + 5 + 0 + 1}}!",
      ],
      solution: [
        "Beijing: 3 times.",
        "Shanghai: 3 + 2 = 5 times.",
        "Harbin: 0 times (**还没去过**).",
        "London: 1 time.",
        "Total = 3 + 5 + 0 + 1 = **9** trips.",
      ],
    },
    {
      id: "tenses-particles-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "bu-vs-mei",
      question:
        "**Triple-Negation Translation!** Translate into Mandarin with 100% accurate negators (**不** vs **没**):\n*'I don't have an older brother, I didn't play basketball yesterday, and I won't play basketball tomorrow.'*\n(Use **我没有哥哥**, **昨天没打篮球**, **明天也不打篮球**.)",
      answer: {
        type: "text",
        accept: [
          "我没有哥哥，昨天没打篮球，明天也不打篮球",
          "我没有哥哥，昨天没有打篮球，明天也不打篮球",
          "我没有哥哥昨天没打篮球明天也不打篮球",
          "我没有哥哥，我昨天没打篮球，明天也不打篮球",
          "我没有哥哥，我昨天没有打篮球，明天也不打篮球",
          "Wǒ méiyǒu gēge, zuótiān méi dǎ lánqiú, míngtiān yě bù dǎ lánqiú",
          "Wǒ méiyǒu gēge, zuótiān méiyǒu dǎ lánqiú, míngtiān yě bù dǎ lánqiú",
        ],
        display: "我没有哥哥，昨天没打篮球，明天也不打篮球。",
      },
      hints: [
        "Possession (**有**) → **没有哥哥**.",
        "Past non-occurrence (**昨天**) → **昨天没打篮球** (NO **了**!).",
        "Future refusal/plan (**明天**) → **明天也不打篮球** (use **不**!).",
      ],
      solution: [
        "1. Possession: **我没有哥哥，**",
        "2. Past event: **昨天没打篮球，**",
        "3. Future plan: **明天也不打篮球。**",
      ],
    },
  ],
};
