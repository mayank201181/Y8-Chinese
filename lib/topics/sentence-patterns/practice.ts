import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "sentence-patterns-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "stpv-word-order",
      question:
        "Choose the natural Mandarin STPV sentence for *'We eat chicken rice at the hawker centre at noon'*:",
      options: [
        "我们中午在小贩中心吃鸡饭。",
        "我们吃鸡饭在小贩中心中午。",
        "我们在小贩中心吃鸡饭中午。",
        "中午吃鸡饭我们在小贩中心。",
      ],
      answerIndex: 0,
      hints: [
        "Order: **Subject (我们) + Time (中午) + Place (在小贩中心) + Verb (吃鸡饭)**.",
      ],
      explanation:
        "**我们中午在小贩中心吃鸡饭。** places both Time (**中午**) and Place (**在小贩中心**) before the verb **吃鸡饭**.",
    },
    {
      id: "sentence-patterns-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "bi-comparisons",
      question:
        "Translate into Mandarin using **比** (remember: NO **很**!): *'Singapore is hotter than London.'* (Use **新加坡**, **伦敦**, **热**.)",
      answer: {
        type: "text",
        accept: [
          "新加坡比伦敦热",
          "Xīnjiāpō bǐ Lúndūn rè",
        ],
        display: "新加坡比伦敦热。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["新加坡比伦敦很热", "Xīnjiāpō bǐ Lúndūn hěn rè"],
          },
          feedback:
            "Watch out for the classic trap! Never use **很** inside a **比** comparison — drop **很** and write **新加坡比伦敦热**.",
        },
      ],
      hints: [
        "Use the frame **A + 比 + B + Adjective**.",
      ],
      solution: [
        "Slot A = **新加坡**, Slot B = **伦敦**, Adjective = **热**.",
        "Drop **很** completely: **新加坡比伦敦热。**",
      ],
    },
    {
      id: "sentence-patterns-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "cause-contrast",
      question:
        "Fill in the missing two-character connector: **因为我感冒了，______ 今天在家休息。**",
      answer: {
        type: "text",
        accept: ["所以", "suǒyǐ"],
        display: "所以 (suǒyǐ)",
      },
      hints: [
        "Which connector pairs with **因为** (*because*) to mean *'therefore / so'*?",
      ],
      solution: [
        "**因为…，所以…** is Mandarin's paired cause-and-effect frame.",
        "Missing word: **所以** (*suǒyǐ*).",
      ],
    },
    {
      id: "sentence-patterns-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "bi-comparisons",
      question:
        "How do you say *'Taking the bus is not as fast as taking the MRT'*?",
      options: [
        "坐公共汽车比坐地铁不快。",
        "坐公共汽车没有坐地铁那么快。",
        "坐公共汽车跟坐地铁那么快。",
        "坐地铁没有坐公共汽车那么快。",
      ],
      answerIndex: 1,
      hints: [
        "Use **A + 没有 + B + (那么) + Adjective** for *'A is not as [Adj] as B'*.",
        "Put the slower transport (**坐公共汽车**) in slot A!",
      ],
      explanation:
        "**坐公共汽车没有坐地铁那么快。** means *'Taking the bus is not as fast as taking the MRT'*. **坐地铁没有坐公共汽车那么快** flips the meaning!",
    },
    {
      id: "sentence-patterns-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "stpv-word-order",
      question:
        "Unscramble into natural STPV order: **骑自行车 / 我 / 星期天 / 跟爸爸一起 / 在东海岸公园**",
      answer: {
        type: "text",
        accept: [
          "我星期天跟爸爸一起在东海岸公园骑自行车",
          "星期天我跟爸爸一起在东海岸公园骑自行车",
          "Wǒ xīngqītiān gēn bàba yìqǐ zài Dōnghǎi'àn Gōngyuán qí zìxíngchē",
          "Wǒ xīngqītiān gēn bàba yīqǐ zài Dōnghǎi'àn Gōngyuán qí zìxíngchē",
          "Xīngqītiān wǒ gēn bàba yìqǐ zài Dōnghǎi'àn Gōngyuán qí zìxíngchē",
          "Xīngqītiān wǒ gēn bàba yīqǐ zài Dōnghǎi'àn Gōngyuán qí zìxíngchē",
        ],
        display: "我星期天跟爸爸一起在东海岸公园骑自行车。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["我骑自行车跟爸爸一起在东海岸公园星期天"],
          },
          feedback:
            "That's English word order! Move Time (**星期天**), Companion (**跟爸爸一起**), and Place (**在东海岸公园**) BEFORE **骑自行车**.",
        },
      ],
      hints: [
        "Keep **骑自行车** at the very end!",
        "Line up **我 + 星期天 + 跟爸爸一起 + 在东海岸公园 + 骑自行车**.",
      ],
      solution: [
        "Subject (**我**) + Time (**星期天**) + Companion (**跟爸爸一起**) + Place (**在东海岸公园**) + Verb (**骑自行车**).",
        "Answer: **我星期天跟爸爸一起在东海岸公园骑自行车。**",
      ],
    },
    {
      id: "sentence-patterns-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "cause-contrast",
      question:
        "Fill in the missing two-character contrast connector: **虽然榴莲很贵，______ 妈妈很喜欢吃。**",
      answer: {
        type: "text",
        accept: ["但是", "可是", "dànshì", "kěshì"],
        display: "但是 (dànshì) / 可是 (kěshì)",
      },
      hints: [
        "Look at **虽然** (*although*) at the start.",
        "Mandarin requires *'but'* (**但是** or **可是**) in the second clause!",
      ],
      solution: [
        "**虽然** must pair with **但是** (or **可是**) in the second clause.",
        "Answer: **但是** (or **可是**).",
      ],
    },
    {
      id: "sentence-patterns-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "addition-simultaneous",
      question:
        "Which sentence correctly uses **一边…一边…**?",
      options: [
        "一边我走路，一边听音乐。",
        "我走路一边，听音乐一边。",
        "我一边走路，一边听音乐。",
        "我一边是新加坡人，一边是学生。",
      ],
      answerIndex: 2,
      hints: [
        "Subject **我** goes BEFORE the first **一边**.",
        "Both verbs must be active simultaneous actions!",
      ],
      explanation:
        "**我一边走路，一边听音乐。** (*I walk while listening to music*) puts **我** first and links two simultaneous active actions.",
    },
    {
      id: "sentence-patterns-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "bi-comparisons",
      question:
        "Translate into Mandarin: *'Winter in Beijing is much colder than Singapore.'* (Use **北京的冬天**, **新加坡**, **冷**, **得多**.)",
      answer: {
        type: "text",
        accept: [
          "北京的冬天比新加坡冷得多",
          "北京的冬天比新加坡的冬天冷得多",
          "Běijīng de dōngtiān bǐ Xīnjiāpō lěng de duō",
        ],
        display: "北京的冬天比新加坡冷得多。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["北京的冬天比新加坡很冷"],
          },
          feedback:
            "Don't use **很** with **比**! To say *'much colder'*, put **得多** AFTER **冷**: **北京的冬天比新加坡冷得多**.",
        },
      ],
      hints: [
        "Frame: **A + 比 + B + 冷 + 得多**.",
        "Remember: **得多** goes AFTER the adjective **冷**!",
      ],
      solution: [
        "A (**北京的冬天**) + **比** + B (**新加坡**) + Adj (**冷**) + **得多**.",
        "Answer: **北京的冬天比新加坡冷得多。**",
      ],
    },
    {
      id: "sentence-patterns-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "cause-contrast",
      question:
        "Unscramble the second clause in **如果明天晴天，______**: **去海边 / 就 / 我们**",
      answer: {
        type: "text",
        accept: [
          "我们就去海边",
          "wǒmen jiù qù hǎibiān",
        ],
        display: "我们就去海边",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["就我们去海边", "jiù wǒmen qù hǎibiān"],
          },
          feedback:
            "**就** is an adverb, not a conjunction! Put the subject **我们** BEFORE **就**: **我们就去海边**.",
        },
      ],
      hints: [
        "Where do single-syllable adverbs like **就** and **也** go?",
        "Subject (**我们**) + **就** + Verb (**去海边**).",
      ],
      solution: [
        "Place **就** between the subject **我们** and the verb phrase **去海边**.",
        "Answer: **我们就去海边**.",
      ],
    },
    {
      id: "sentence-patterns-quiz-q10",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "combining-clauses",
      question:
        "Choose the sentence that upgrades *'Fruit at the wet market is fresh. It is also cheap.'* using **不但…而且…**:",
      options: [
        "不但巴刹的水果新鲜，而且它便宜弟弟。",
        "巴刹的水果新鲜不但，便宜而且。",
        "巴刹的水果虽然新鲜，而且很便宜。",
        "巴刹的水果不但新鲜，而且很便宜。",
      ],
      answerIndex: 3,
      hints: [
        "Both clauses share ONE subject (**巴刹的水果**), so put the subject BEFORE **不但**!",
        "Pair **不但** with **而且**.",
      ],
      explanation:
        "**巴刹的水果不但新鲜，而且很便宜。** places the shared subject **巴刹的水果** first, followed by **不但新鲜，而且很便宜**.",
    },
  ],
  papers: [
    {
      id: "sentence-patterns-p1",
      title: "Practice Paper 1 — STPV Word Order & Comparisons Mastery",
      questions: [
        {
          id: "sentence-patterns-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "stpv-word-order",
          question:
            "Unscramble into STPV order: **做作业 / 我 / 晚上七点 / 在房间**",
          answer: {
            type: "text",
            accept: [
              "我晚上七点在房间做作业",
              "晚上七点我在房间做作业",
              "Wǒ wǎnshang qī diǎn zài fángjiān zuò zuòyè",
              "Wǎnshang qī diǎn wǒ zài fángjiān zuò zuòyè",
            ],
            display: "我晚上七点在房间做作业。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["我在房间做作业晚上七点", "我做作业在房间晚上七点"],
              },
              feedback:
                "Never put Time (**晚上七点**) or Place (**在房间**) after **做作业**! Use **S + T + P + V**.",
            },
          ],
          hints: [
            "Put **我** + **晚上七点** + **在房间** + **做作业**.",
          ],
          solution: [
            "Subject (**我**) + Time (**晚上七点**) + Place (**在房间**) + Verb (**做作业**).",
            "Answer: **我晚上七点在房间做作业。**",
          ],
        },
        {
          id: "sentence-patterns-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "stpv-word-order",
          question:
            "Translate into Mandarin: *'Every morning I take the MRT to school.'* (Use **我**, **每天早上**, **坐地铁**, **去学校**.)",
          answer: {
            type: "text",
            accept: [
              "我每天早上坐地铁去学校",
              "每天早上我坐地铁去学校",
              "Wǒ měitiān zǎoshang zuò dìtiě qù xuéxiào",
              "Měitiān zǎoshang wǒ zuò dìtiě qù xuéxiào",
            ],
            display: "我每天早上坐地铁去学校。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["我每天早上去学校坐地铁"],
              },
              feedback:
                "Put the transport method **坐地铁** BEFORE **去学校** (*take MRT go school*)!",
            },
          ],
          hints: [
            "Remember: Transport (**坐地铁**) comes BEFORE **去学校**!",
          ],
          solution: [
            "**我** + **每天早上** + **坐地铁** + **去学校** → **我每天早上坐地铁去学校。**",
          ],
        },
        {
          id: "sentence-patterns-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "bi-comparisons",
          question:
            "Translate into Mandarin: *'Watermelon is sweeter than apples.'* (Use **西瓜**, **苹果**, **甜**.)",
          answer: {
            type: "text",
            accept: [
              "西瓜比苹果甜",
              "Xīguā bǐ píngguǒ tián",
            ],
            display: "西瓜比苹果甜。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["西瓜比苹果很甜"],
              },
              feedback:
                "Drop **很**! Never use **很** in a **比** comparison.",
            },
          ],
          hints: [
            "Use **A + 比 + B + 甜** (no **很**!).",
          ],
          solution: [
            "**西瓜** + **比** + **苹果** + **甜** → **西瓜比苹果甜。**",
          ],
        },
        {
          id: "sentence-patterns-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "bi-comparisons",
          question:
            "Translate into Mandarin using **一样**: *'History lessons are as interesting as Chinese lessons.'* (Use **历史课**, **跟**, **中文课**, **一样**, **有意思**.)",
          answer: {
            type: "text",
            accept: [
              "历史课跟中文课一样有意思",
              "历史课和中文课一样有意思",
              "Lìshǐ kè gēn Zhōngwén kè yíyàng yǒu yìsi",
              "Lìshǐ kè gēn Zhōngwén kè yīyàng yǒu yìsi",
              "Lìshǐ kè hé Zhōngwén kè yíyàng yǒu yìsi",
              "Lìshǐ kè hé Zhōngwén kè yīyàng yǒu yìsi",
            ],
            display: "历史课跟中文课一样有意思。",
          },
          hints: [
            "Frame: **A + 跟 + B + 一样 + 有意思**.",
          ],
          solution: [
            "**历史课** + **跟** + **中文课** + **一样** + **有意思** → **历史课跟中文课一样有意思。**",
          ],
        },
        {
          id: "sentence-patterns-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "stpv-word-order",
          question:
            "Translate into Mandarin in STPV order: *'Mum buys clothes on Orchard Road on Saturday afternoon.'* (Use **妈妈**, **星期六下午**, **在乌节路**, **买衣服**.)",
          answer: {
            type: "text",
            accept: [
              "妈妈星期六下午在乌节路买衣服",
              "星期六下午妈妈在乌节路买衣服",
              "Māma xīngqīliù xiàwǔ zài Wūjiélù mǎi yīfu",
              "Xīngqīliù xiàwǔ māma zài Wūjiélù mǎi yīfu",
            ],
            display: "妈妈星期六下午在乌节路买衣服。",
          },
          hints: [
            "Identify S (**妈妈**), T (**星期六下午**), P (**在乌节路**), V (**买衣服**).",
            "Make sure both Time and Place stand BEFORE **买衣服**!",
          ],
          solution: [
            "Arrange in STPV order: **妈妈** + **星期六下午** + **在乌节路** + **买衣服**.",
            "Answer: **妈妈星期六下午在乌节路买衣服。**",
          ],
        },
        {
          id: "sentence-patterns-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "bi-comparisons",
          question:
            "Fix the ONE grammar error in this sentence and type the corrected Mandarin sentence: **今天比昨天很凉快。**",
          answer: {
            type: "text",
            accept: [
              "今天比昨天凉快",
              "今天比昨天凉快得多",
              "今天比昨天更凉快",
              "Jīntiān bǐ zuótiān liángkuai",
            ],
            display: "今天比昨天凉快。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["今天比昨天非常凉快"],
              },
              feedback:
                "**非常** is banned with **比** for the exact same reason as **很**! Drop **很** (or use **凉快得多**).",
            },
          ],
          hints: [
            "Spot the word that is allergic to **比**!",
            "Delete **很** (or replace it with **更**, or put **得多** after **凉快**).",
          ],
          solution: [
            "**很** cannot modify the adjective in a **比** comparison.",
            "Corrected sentence: **今天比昨天凉快。** (or **今天比昨天凉快得多。**)",
          ],
        },
        {
          id: "sentence-patterns-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "bi-comparisons",
          question:
            "Rewrite **大餐厅比小贩中心贵** from the hawker centre's perspective using **没有…那么…** (*Hawker centres are not as expensive as big restaurants*):",
          answer: {
            type: "text",
            accept: [
              "小贩中心没有大餐厅那么贵",
              "小贩中心没有大餐厅贵",
              "Xiǎofàn zhōngxīn méiyǒu dà cāntīng nàme guì",
              "Xiǎofàn zhōngxīn méiyǒu dà cāntīng guì",
            ],
            display: "小贩中心没有大餐厅那么贵。",
          },
          hints: [
            "Flip the two places so **小贩中心** comes first.",
            "Use **小贩中心 + 没有 + 大餐厅 + (那么) + 贵**.",
          ],
          solution: [
            "Start with the cheaper place (**小贩中心**), add **没有大餐厅那么**, and finish with **贵**.",
            "Answer: **小贩中心没有大餐厅那么贵。**",
          ],
        },
        {
          id: "sentence-patterns-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "cause-contrast",
          question:
            "Combine using **因为…，所以…**: **今天下大雨** (cause) → **我们在家看电影** (result).",
          answer: {
            type: "text",
            accept: [
              "因为今天下大雨，所以我们在家看电影",
              "因为今天下大雨所以我们在家看电影",
              "Yīnwèi jīntiān xià dà yǔ, suǒyǐ wǒmen zài jiā kàn diànyǐng",
            ],
            display: "因为今天下大雨，所以我们在家看电影。",
          },
          hints: [
            "Keep BOTH halves: **因为** before the rain clause and **所以** before the result clause.",
            "Check STPV in the result clause: **我们在家看电影**.",
          ],
          solution: [
            "Clause 1: **因为今天下大雨，**",
            "Clause 2: **所以我们在家看电影。**",
          ],
        },
        {
          id: "sentence-patterns-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "cause-contrast",
          question:
            "Combine using **虽然…，但是…**: **写汉字很难** (concession) → **很有意思** (contrast).",
          answer: {
            type: "text",
            accept: [
              "虽然写汉字很难，但是很有意思",
              "虽然写汉字很难但是很有意思",
              "虽然写汉字很难，可是很有意思",
              "Suīrán xiě Hànzì hěn nán, dànshì hěn yǒu yìsi",
            ],
            display: "虽然写汉字很难，但是很有意思。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["虽然写汉字很难，很有意思"],
              },
              feedback:
                "Don't drop **但是**! Unlike English, Mandarin requires **但是** (or **可是**) in the second clause after **虽然**.",
            },
          ],
          hints: [
            "Put **虽然** at the start of Clause 1.",
            "Put **但是** at the start of Clause 2!",
          ],
          solution: [
            "Join both bookends: **虽然写汉字很难，但是很有意思。**",
          ],
        },
        {
          id: "sentence-patterns-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "addition-simultaneous",
          question:
            "Translate into Mandarin using **先…，再…**: *'Every evening I revise Chinese first, then watch TV.'* (Use **我每天晚上**, **复习中文**, **看电视**.)",
          answer: {
            type: "text",
            accept: [
              "我每天晚上先复习中文，再看电视",
              "我每天晚上先复习中文再看电视",
              "每天晚上我先复习中文，再看电视",
              "Wǒ měitiān wǎnshang xiān fùxí Zhōngwén, zài kàn diànshì",
            ],
            display: "我每天晚上先复习中文，再看电视。",
          },
          hints: [
            "Put **我每天晚上** first.",
            "Place **先** right before **复习中文**, and **再** right before **看电视**.",
          ],
          solution: [
            "**我每天晚上** + **先复习中文** + **，再看电视** → **我每天晚上先复习中文，再看电视。**",
          ],
        },
        {
          id: "sentence-patterns-p1-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "addition-simultaneous",
          question:
            "Combine these two sentences with DIFFERENT subjects using **不但…，而且…**:\n1. **姐姐喜欢打羽毛球。**\n2. **妹妹也喜欢打羽毛球。**",
          answer: {
            type: "text",
            accept: [
              "不但姐姐喜欢打羽毛球，而且妹妹也喜欢打羽毛球",
              "不但姐姐喜欢打羽毛球而且妹妹也喜欢打羽毛球",
              "不但姐姐喜欢打羽毛球，而且妹妹也喜欢",
              "Búdàn jiějie xǐhuan dǎ yǔmáoqiú, érqiě mèimei yě xǐhuan dǎ yǔmáoqiú",
              "Bùdàn jiějie xǐhuan dǎ yǔmáoqiú, érqiě mèimei yě xǐhuan dǎ yǔmáoqiú",
            ],
            display: "不但姐姐喜欢打羽毛球，而且妹妹也喜欢打羽毛球。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["姐姐不但喜欢打羽毛球，而且妹妹也喜欢打羽毛球"],
              },
              feedback:
                "Look closely — there are TWO different subjects (**姐姐** and **妹妹**)! Move **不但** BEFORE **姐姐**: **不但姐姐喜欢打羽毛球，而且妹妹也喜欢打羽毛球。**",
            },
          ],
          hints: [
            "Are the subjects the same or different? (**姐姐** vs **妹妹**!)",
            "With two different subjects, **不但** must stand BEFORE **姐姐**!",
          ],
          solution: [
            "Because Subject 1 (**姐姐**) ≠ Subject 2 (**妹妹**), place **不但** at the very front.",
            "Answer: **不但姐姐喜欢打羽毛球，而且妹妹也喜欢打羽毛球。**",
          ],
        },
        {
          id: "sentence-patterns-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "combining-clauses",
          question:
            "Read the cinema ticket sign:\n- **成人票 (Adult)**: $14\n- **学生票 (Student)**: $9 (星期一至星期五)\n- **周末票 (Weekend, all ages)**: $15\nIn Year 8, Xiaoming goes with his **parents (爸爸和妈妈)** on **Wednesday evening**. How many dollars ($ SGD) do their **3 tickets** cost altogether? (Type a number.)",
          answer: {
            type: "number",
            value: 37,
            display: "$37",
          },
          hints: [
            "Wednesday (**星期三**) falls inside **星期一至星期五** (Monday to Friday).",
            "Calculate 2 adult tickets ($14 × 2) + 1 weekday student ticket ($9)!",
          ],
          solution: [
            "Parents (**爸爸和妈妈**) = 2 adults × $14 = $28.",
            "Xiaoming (student on Wednesday) = $9.",
            "Total = 28 + 9 = **$37**.",
          ],
        },
        {
          id: "sentence-patterns-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "combining-clauses",
          marks: 5,
          question:
            "**IGCSE 0547 Short Writing (5 marks)** — Write 3–4 connected Mandarin sentences (50–70 characters) comparing **eating at a Singapore hawker centre (小贩中心)** with **eating at a big restaurant (大餐厅)**. You MUST include:\n1. Who you go with and when (STPV order)\n2. A **比** or **没有** comparison\n3. **虽然…但是…**\n4. **不但…而且…**",
          hints: [
            "Open with STPV: **星期天中午，我常常跟家人一起在小贩中心吃午饭。**",
            "Use **虽然…但是…** and **不但…而且…** + **比…便宜得多** (remember: NO **很** with **比**!).",
          ],
          modelAnswer:
            "星期天中午，我常常跟家人一起在小贩中心吃午饭。虽然小贩中心没有大餐厅那么安静，但是那里的菜非常好吃。小贩中心的海南鸡饭不但比大餐厅便宜得多，而且很新鲜，所以我最喜欢去小贩中心吃饭！",
          markScheme: [
            {
              point: "Uses accurate STPV word order with time, companion (跟…一起), and place (在小贩中心) before the verb",
              keywords: ["跟", "一起", "在", "小贩中心", "吃"],
            },
            {
              point: "Includes an accurate 比 or 没有 comparison (with NO 很 before the adjective in 比)",
              keywords: ["比", "没有", "便宜", "贵", "得多"],
            },
            {
              point: "Uses both halves of 虽然…但是/可是… logically",
              keywords: ["虽然", "但是", "可是"],
            },
            {
              point: "Uses 不但…而且… with correct subject placement",
              keywords: ["不但", "而且"],
            },
            {
              point: "Clear personal opinion or conclusion using 因为/所以 or 最喜欢",
              keywords: ["所以", "因为", "喜欢", "好吃"],
            },
          ],
          commonError:
            "Writing *比大餐厅很便宜* (adding 很 to 比) or forgetting 但是 after 虽然.",
        },
        {
          id: "sentence-patterns-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "combining-clauses",
          marks: 5,
          question:
            "**IGCSE 0547 Directed Writing (5 marks)** — Write an 80–110 character email in Mandarin to your Beijing pen-pal **李明** explaining your **school-day & weekend routine in Singapore**. Include:\n1. How you travel to school and when lessons run (**从…到…** or STPV)\n2. What you do first vs afterwards after school (**先…再/然后…**)\n3. A climate comparison between Singapore and Beijing (**比**)\n4. Your weekend plan if the weather is good (**如果…就…**)",
          hints: [
            "Put transport BEFORE **去学校** (**坐地铁去学校**) and school hours as **从八点到下午三点半在学校上课**.",
            "Remember to place **就** AFTER your weekend subject (**我们就去…**), and drop **很** in **新加坡比北京热得多**!",
          ],
          modelAnswer:
            "李明，你好！我每天早上六点半起床，坐地铁去学校。我们从八点到下午三点半在学校上课。放学以后，我先在房间做作业，再一边听音乐一边休息。新加坡的天气比北京热得多。如果这个星期六不下雨，我就跟朋友一起去东海岸公园骑自行车！",
          markScheme: [
            {
              point: "Describes morning travel and school hours in STPV order (坐地铁/公共汽车去学校, 从…到…)",
              keywords: ["坐", "去学校", "从", "到", "上课"],
            },
            {
              point: "Uses 先…再… or 先…然后… for after-school routine",
              keywords: ["先", "再", "然后", "做作业"],
            },
            {
              point: "Compares Singapore and Beijing weather accurately with 比 (+ 得多/一点儿, no 很)",
              keywords: ["新加坡", "比", "北京", "热", "冷"],
            },
            {
              point: "Uses 如果/要是…，Subject + 就 + Verb with 就 placed after the subject",
              keywords: ["如果", "要是", "就"],
            },
            {
              point: "Cohesive letter greeting/flow and natural Year 8 vocabulary (80–110 characters)",
              keywords: ["你好", "周末", "星期", "一起"],
            },
          ],
          commonError:
            "Placing 就 before the subject (*就我们去*) or putting transport after 去 (*去学校坐地铁*).",
        },
      ],
    },
    {
      id: "sentence-patterns-p2",
      title: "Practice Paper 2 — Connectors, Sequences & Error-Spotting",
      questions: [
        {
          id: "sentence-patterns-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "addition-simultaneous",
          question:
            "Fill in the right word for *'or'* in this choice question: **你想喝咖啡 ______ 绿茶？**",
          answer: {
            type: "text",
            accept: ["还是", "háishi"],
            display: "还是 (háishi)",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["或者", "huòzhě"],
              },
              feedback:
                "**或者** is only for statements! In a choice question (**？**), always use **还是**.",
            },
          ],
          hints: [
            "Look at the question mark **？** — is this a statement or a choice question?",
          ],
          solution: [
            "Choice questions (*A or B?*) use **还是** (*háishi*).",
          ],
        },
        {
          id: "sentence-patterns-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "addition-simultaneous",
          question:
            "Fill in the right word for *'or'* in this statement: **星期天我常常在家看书 ______ 听音乐。**",
          answer: {
            type: "text",
            accept: ["或者", "huòzhě"],
            display: "或者 (huòzhě)",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["还是", "háishi"],
              },
              feedback:
                "**还是** is for questions! In a calm statement (**。**), use **或者**.",
            },
          ],
          hints: [
            "Notice the full stop **。** — this is a statement, not a question!",
          ],
          solution: [
            "Statements meaning *'either A or B'* use **或者** (*huòzhě*).",
          ],
        },
        {
          id: "sentence-patterns-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "stpv-word-order",
          question:
            "Fill in the distance preposition: **我家 ______ 学校很近，走路十分钟就到了。** (*My home is very close to school.*)",
          answer: {
            type: "text",
            accept: ["离", "lí"],
            display: "离 (lí)",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["从", "cóng"],
              },
              feedback:
                "**从** is for movement (*from A to B*: **从家到学校**). For distance (*close to / far from*), use **离**!",
            },
          ],
          hints: [
            "Pattern: **Place A + ______ + Place B + 很近 / 很远**.",
          ],
          solution: [
            "Static distance between two places uses **离** (*lí*): **我家离学校很近**.",
          ],
        },
        {
          id: "sentence-patterns-p2-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "stpv-word-order",
          question:
            "Translate into Mandarin: *'Let's go to the library together!'* (Use **我们**, **一起**, **去图书馆**, **吧**.)",
          answer: {
            type: "text",
            accept: [
              "我们一起去图书馆吧",
              "Wǒmen yìqǐ qù túshūguǎn ba",
              "Wǒmen yīqǐ qù túshūguǎn ba",
            ],
            display: "我们一起去图书馆吧！",
          },
          hints: [
            "Place **一起** right before the verb **去图书馆**, and **吧** at the end!",
          ],
          solution: [
            "**我们** + **一起** + **去图书馆** + **吧** → **我们一起去图书馆吧！**",
          ],
        },
        {
          id: "sentence-patterns-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "bi-comparisons",
          question:
            "Translate into Mandarin: *'Today is even hotter than yesterday.'* (Use **今天**, **昨天**, **更**, **热**.)",
          answer: {
            type: "text",
            accept: [
              "今天比昨天更热",
              "Jīntiān bǐ zuótiān gèng rè",
            ],
            display: "今天比昨天更热。",
          },
          hints: [
            "Unlike **很**, **更** (*even more*) IS placed directly before **热**!",
            "Frame: **今天 + 比 + 昨天 + 更 + 热**.",
          ],
          solution: [
            "**今天** + **比** + **昨天** + **更热** → **今天比昨天更热。**",
          ],
        },
        {
          id: "sentence-patterns-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "addition-simultaneous",
          question:
            "Translate into Mandarin using **一边…一边…**: *'Grandma likes drinking tea while chatting.'* (Use **奶奶喜欢**, **喝茶**, **聊天**.)",
          answer: {
            type: "text",
            accept: [
              "奶奶喜欢一边喝茶，一边聊天",
              "奶奶喜欢一边喝茶一边聊天",
              "Nǎinai xǐhuan yìbiān hē chá, yìbiān liáotiān",
              "Nǎinai xǐhuan yībiān hē chá, yībiān liáotiān",
            ],
            display: "奶奶喜欢一边喝茶，一边聊天。",
          },
          hints: [
            "Keep **奶奶喜欢** at the front.",
            "Put **一边** before **喝茶** and **一边** before **聊天**.",
          ],
          solution: [
            "**奶奶喜欢** + **一边喝茶，一边聊天** → **奶奶喜欢一边喝茶，一边聊天。**",
          ],
        },
        {
          id: "sentence-patterns-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "addition-simultaneous",
          question:
            "Combine using **不但…，而且…** (same subject!): **新加坡很干净。新加坡很安全 (safe — ānquán)。**",
          answer: {
            type: "text",
            accept: [
              "新加坡不但很干净，而且很安全",
              "新加坡不但很干净而且很安全",
              "新加坡不但干净，而且很安全",
              "新加坡不但干净，而且安全",
              "Xīnjiāpō búdàn hěn gānjìng, érqiě hěn ānquán",
              "Xīnjiāpō bùdàn hěn gānjìng, érqiě hěn ānquán",
            ],
            display: "新加坡不但很干净，而且很安全。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["不但新加坡很干净，而且很安全"],
              },
              feedback:
                "Since BOTH clauses describe **新加坡** (same subject!), put **新加坡** BEFORE **不但**: **新加坡不但很干净，而且很安全。**",
            },
          ],
          hints: [
            "There is only ONE subject (**新加坡**).",
            "Put **新加坡** BEFORE **不但**!",
          ],
          solution: [
            "Shared subject (**新加坡**) + **不但很干净** + **，而且很安全**.",
            "Answer: **新加坡不但很干净，而且很安全。**",
          ],
        },
        {
          id: "sentence-patterns-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "cause-contrast",
          question:
            "Translate into Mandarin using **如果…，…就…**: *'If tomorrow is sunny, I will go swimming.'* (Use **如果明天晴天** or **如果明天是晴天**, **我**, **去游泳**.)",
          answer: {
            type: "text",
            accept: [
              "如果明天晴天，我就去游泳",
              "如果明天晴天我就去游泳",
              "如果明天是晴天，我就去游泳",
              "如果明天是晴天我就去游泳",
              "Rúguǒ míngtiān qíngtiān, wǒ jiù qù yóuyǒng",
              "Rúguǒ míngtiān shì qíngtiān, wǒ jiù qù yóuyǒng",
            ],
            display: "如果明天晴天，我就去游泳。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["如果明天晴天，就我去游泳", "如果明天是晴天，就我去游泳"],
              },
              feedback:
                "Put the subject **我** BEFORE the adverb **就**: **我就去游泳**!",
            },
          ],
          hints: [
            "Clause 1: **如果明天晴天，**",
            "Clause 2: **我 + 就 + 去游泳** (never *就我*!).",
          ],
          solution: [
            "Place **就** right after **我** and before **去游泳**: **如果明天晴天，我就去游泳。**",
          ],
        },
        {
          id: "sentence-patterns-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "stpv-word-order",
          question:
            "Fix the word order in this sentence: **弟弟给妈妈买礼物昨天在乌节路。**",
          answer: {
            type: "text",
            accept: [
              "弟弟昨天在乌节路给妈妈买礼物",
              "昨天弟弟在乌节路给妈妈买礼物",
              "弟弟昨天给妈妈在乌节路买礼物",
              "Dìdi zuótiān zài Wūjiélù gěi māma mǎi lǐwù",
              "Zuótiān dìdi zài Wūjiélù gěi māma mǎi lǐwù",
            ],
            display: "弟弟昨天在乌节路给妈妈买礼物。",
          },
          hints: [
            "Move Time (**昨天**) and Place (**在乌节路**) in front of **给妈妈买礼物**!",
            "Keep **买礼物** at the very end.",
          ],
          solution: [
            "Subject (**弟弟**) + Time (**昨天**) + Place (**在乌节路**) + Recipient (**给妈妈**) + Verb (**买礼物**).",
            "Answer: **弟弟昨天在乌节路给妈妈买礼物。**",
          ],
        },
        {
          id: "sentence-patterns-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "bi-comparisons",
          question:
            "Translate into Mandarin: *'This pair of trainers is a little bit more expensive than that pair.'* (Use **这双运动鞋**, **那双**, **贵**, **一点儿**.)",
          answer: {
            type: "text",
            accept: [
              "这双运动鞋比那双贵一点儿",
              "这双运动鞋比那双运动鞋贵一点儿",
              "这双运动鞋比那双贵一点",
              "Zhè shuāng yùndòngxié bǐ nà shuāng guì yìdiǎnr",
              "Zhè shuāng yùndòngxié bǐ nà shuāng guì yīdiǎnr",
            ],
            display: "这双运动鞋比那双贵一点儿。",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: ["这双运动鞋比那双一点儿贵", "这双运动鞋比那双有点儿贵"],
              },
              feedback:
                "Put **一点儿** AFTER the adjective **贵** in a **比** sentence: **贵一点儿**!",
            },
          ],
          hints: [
            "Classifier for pairs of shoes is **双** (*shuāng*).",
            "Put **一点儿** AFTER **贵**: **这双运动鞋比那双贵一点儿**.",
          ],
          solution: [
            "A (**这双运动鞋**) + **比** + B (**那双**) + Adj (**贵**) + **一点儿**.",
            "Answer: **这双运动鞋比那双贵一点儿。**",
          ],
        },
        {
          id: "sentence-patterns-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "combining-clauses",
          question:
            "Replace the illegal clause-level **和** in **妈妈去巴刹买青菜和做晚饭** using **先…，再…** (*Mum first goes to the wet market to buy greens, then cooks dinner*):",
          answer: {
            type: "text",
            accept: [
              "妈妈先去巴刹买青菜，再做晚饭",
              "妈妈先去巴刹买青菜再做晚饭",
              "Māma xiān qù bāshā mǎi qīngcài, zài zuò wǎnfàn",
            ],
            display: "妈妈先去巴刹买青菜，再做晚饭。",
          },
          hints: [
            "**和** cannot join two verb phrases (**去巴刹买青菜** and **做晚饭**).",
            "Put **先** before **去巴刹买青菜** and **再** before **做晚饭**!",
          ],
          solution: [
            "Insert **先** before Action 1 and replace **和** with **，再** before Action 2.",
            "Answer: **妈妈先去巴刹买青菜，再做晚饭。**",
          ],
        },
        {
          id: "sentence-patterns-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "bi-comparisons",
          question:
            "Read the weather bulletin:\n- **北京**: 12°C\n- **上海**: 17°C\n- **新加坡**: 31°C\nHow many degrees Celsius (**度**) warmer is **新加坡** than **北京**? (Type a number.)",
          answer: {
            type: "number",
            value: 19,
            display: "19",
          },
          hints: [
            "Compare **新加坡** (31°C) and **北京** (12°C) — don't accidentally subtract **上海** (17°C)!",
            "Compute {{31 - 12}}.",
          ],
          solution: [
            "Singapore = 31°C; Beijing = 12°C.",
            "31 − 12 = **19** (**新加坡比北京热十九度**).",
          ],
        },
        {
          id: "sentence-patterns-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "cause-contrast",
          marks: 4,
          question:
            "**IGCSE 0547 Roleplay Preparation (4 marks)** — Your friend asks why you prefer **taking the MRT (坐地铁)** over **taking a taxi (坐出租车)** in Singapore, and what you do on the train. Write 3–4 Mandarin sentences addressing:\n1. Why you prefer the MRT (**因为…所以…**)\n2. Comparing MRT and taxi prices or speed (**比** or **没有**)\n3. Two positive points about the MRT (**不但…而且…**)\n4. What you do while riding the MRT (**一边…一边…**)",
          hints: [
            "Start with **因为我家离地铁站很近，所以我每天坐地铁…**.",
            "Combine **不但比坐出租车便宜得多，而且…**, then add **我常常一边坐地铁，一边听音乐**.",
          ],
          modelAnswer:
            "因为我家离地铁站很近，所以我每天都坐地铁出门。坐地铁不但比坐出租车便宜得多，而且非常准时，不会堵车。我常常一边坐地铁，一边听中文歌或者看书。",
          markScheme: [
            {
              point: "Explains reason clearly using 因为…所以…",
              keywords: ["因为", "所以", "地铁"],
            },
            {
              point: "Compares MRT and taxi using 比 or 没有 accurately",
              keywords: ["比", "没有", "出租车", "便宜", "快"],
            },
            {
              point: "Upgrades description with 不但…而且…",
              keywords: ["不但", "而且"],
            },
            {
              point: "Describes simultaneous activity on the MRT using 一边…一边…",
              keywords: ["一边"],
            },
          ],
          commonError:
            "Writing *一边坐地铁，一边是学生* (non-action verb) or *比出租车很便宜*.",
        },
        {
          id: "sentence-patterns-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "combining-clauses",
          marks: 5,
          question:
            "**IGCSE 0547 Article Writing (5 marks)** — Write an 80–120 character contribution for your school's Mandarin newsletter titled **我最喜欢的科目 (My Favourite School Subject)**. Include:\n1. Which subject you like most and when/where you study it (STPV)\n2. Compare its difficulty or interest with another subject (**比 / 没有 / 跟…一样**)\n3. A concession using **虽然…但是…**\n4. How you revise for it (**先…再…**)\n5. A conditional goal (**如果…就…**)",
          hints: [
            "State your schedule in STPV order (**每个星期…在学校上中文课**).",
            "Weave in **虽然…但是…**, **跟…一样有意思**, **先复习生词，再写汉字**, and **如果…，我就…**.",
          ],
          modelAnswer:
            "我最喜欢的科目是中文。我们每个星期一、星期三和星期五上午在学校上中文课。虽然写汉字比写英文难一点儿，但是中文课跟历史课一样有意思！每天晚上回家以后，我先复习生词，再写汉字练习。如果我每天努力学习，明年我就能去北京旅行！",
          markScheme: [
            {
              point: "States favourite subject and class schedule/place in STPV order",
              keywords: ["最喜欢", "在", "上课", "星期"],
            },
            {
              point: "Includes an accurate comparison (比, 没有, or 跟…一样)",
              keywords: ["比", "没有", "一样"],
            },
            {
              point: "Uses both halves of 虽然…但是/可是…",
              keywords: ["虽然", "但是", "可是"],
            },
            {
              point: "Describes study sequence with 先…再/然后…",
              keywords: ["先", "再", "然后", "复习"],
            },
            {
              point: "Concludes with a conditional goal using 如果/要是…就… (with 就 after subject)",
              keywords: ["如果", "要是", "就"],
            },
          ],
          commonError:
            "Omitting 但是 after 虽然, or placing 时间/地点 after 上课.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "sentence-patterns-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "stpv-word-order",
      question:
        "**Meaning Minimal Pair!** Compare:\n- Sentence 1: **哥哥坐公共汽车去图书馆。**\n- Sentence 2: **哥哥去公共汽车站坐公共汽车。**\nWhy are **坐** and **去** in opposite orders, yet BOTH sentences are 100% grammatical?",
      options: [
        "Mandarin serial verbs always follow chronological / method-then-goal order: in (1) he rides the bus *as the method* to reach the library; in (2) he first walks to the bus stop *in order to* board the bus!",
        "Word order between **坐** and **去** is completely random in Mandarin.",
        "Sentence 2 is only grammatical in Beijing, not in Singapore.",
        "Because **图书馆** is bigger than **公共汽车站**.",
      ],
      answerIndex: 0,
      hints: [
        "Picture the real-life sequence of actions in your head!",
        "In Sentence 1, which happens first: getting on the bus or arriving at the library? In Sentence 2, which happens first: going to the bus stop or getting on the bus?",
      ],
      explanation:
        "Mandarin serial verbs strictly mirror **chronological / means-before-purpose order** (**V1 → V2**)! In (1), boarding the bus (**坐公共汽车**) is the means to reach the library (**去图书馆**). In (2), going to the bus stop (**去公共汽车站**) happens first in order to board the bus (**坐公共汽车**).",
    },
    {
      id: "sentence-patterns-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "bi-comparisons",
      question:
        "**Three-Way Logic Puzzle!** Read carefully:\n1. **小明没有大卫那么高。**\n2. **阿里比大卫高一点儿。**\n3. **文文跟小明一样高。**\nWho is the **tallest** of the four students (**小明**, **大卫**, **阿里**, **文文**)? Type their Mandarin name.",
      answer: {
        type: "text",
        accept: ["阿里", "Ālǐ"],
        display: "阿里 (Ālǐ)",
      },
      hints: [
        "Clue 1 (**小明没有大卫那么高**) means Xiaoming < David.",
        "Clue 2 (**阿里比大卫高一点儿**) means Ali > David; Clue 3 (**文文跟小明一样高**) means Wenwen = Xiaoming.",
        "Rank all four: Wenwen = Xiaoming < David < Ali!",
      ],
      solution: [
        "From (1): **小明 < 大卫**.",
        "From (2): **阿里 > 大卫**.",
        "From (3): **文文 = 小明**.",
        "Full height order: **阿里 > 大卫 > 小明 = 文文**, so the tallest is **阿里**!",
      ],
    },
    {
      id: "sentence-patterns-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "addition-simultaneous",
      question:
        "**Subject-Scope Surgery!** Rewrite this single-subject sentence so that **不但** links TWO subjects (**我** and **哥哥**) who both enjoy playing tennis (**喜欢打网球**):\nBase idea: *Not only do I like playing tennis, my older brother also likes playing tennis.*",
      answer: {
        type: "text",
        accept: [
          "不但我喜欢打网球，而且哥哥也喜欢打网球",
          "不但我喜欢打网球而且哥哥也喜欢打网球",
          "不但我喜欢打网球，而且哥哥也喜欢",
          "Búdàn wǒ xǐhuan dǎ wǎngqiú, érqiě gēge yě xǐhuan dǎ wǎngqiú",
          "Bùdàn wǒ xǐhuan dǎ wǎngqiú, érqiě gēge yě xǐhuan dǎ wǎngqiú",
        ],
        display: "不但我喜欢打网球，而且哥哥也喜欢打网球。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["我不但喜欢打网球，而且哥哥也喜欢打网球"],
          },
          feedback:
            "Nearly! Because Clause 1 (**我**) and Clause 2 (**哥哥**) have DIFFERENT subjects, **不但** must jump in front of **我**: **不但我喜欢打网球，而且哥哥也喜欢打网球。**",
        },
      ],
      hints: [
        "Compare the subjects: Clause 1 has **我**, Clause 2 has **哥哥**.",
        "Put **不但** BEFORE **我**, and put **而且哥哥也…** in Clause 2!",
      ],
      solution: [
        "Two different subjects require **不但 + Subj 1 + …, 而且 + Subj 2 + 也 + …**.",
        "Answer: **不但我喜欢打网球，而且哥哥也喜欢打网球。**",
      ],
    },
    {
      id: "sentence-patterns-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "bi-comparisons",
      question:
        "**Subtle Nuance!** Both sentences below are 100% grammatical:\n- Sentence X: **今天比昨天热。**\n- Sentence Y: **今天比昨天更热。**\nIf yesterday in Beijing was **−4°C** and today is **+2°C**, why would a native speaker say **今天比昨天暖和**, yet NEVER say **今天比昨天更热**?",
      options: [
        "Because **更** cannot be used with weather words.",
        "Because **比…更 + Adj** presupposes that B (*yesterday*) ALREADY possessed that quality (*was already hot*) — and −4°C was freezing, not hot!",
        "Because **热** can only be used in summer.",
        "Because negative numbers require **没有**.",
      ],
      answerIndex: 1,
      hints: [
        "Translate **更热** literally into English: *'even hotter'*.",
        "If someone says *'Today (+2°C) is even hotter than yesterday (−4°C)'*, what false assumption does *'even hotter'* make about yesterday?",
      ],
      explanation:
        "**A 比 B 更 + Adj** means *'A is EVEN MORE [Adj] than B'*, which presupposes that B was **already [Adj]**! At −4°C, yesterday was freezing (**冷**), not hot (**热**), so **更热** makes no logical sense (whereas in 31°C → 34°C Singapore, **今天比昨天更热** is spot-on!).",
    },
    {
      id: "sentence-patterns-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "stpv-word-order",
      question:
        "**Full 6-Block STPV Scramble!** Arrange all six blocks into one natural Mandarin sentence (put **我** first):\n**在体育馆 / 打羽毛球 / 我 / 星期五下午四点 / 跟同学一起 / 高高兴兴地** (*happily — manner adverb right before the verb!*)",
      answer: {
        type: "text",
        accept: [
          "我星期五下午四点跟同学一起在体育馆高高兴兴地打羽毛球",
          "我星期五下午四点在体育馆跟同学一起高高兴兴地打羽毛球",
          "Wǒ xīngqīwǔ xiàwǔ sì diǎn gēn tóngxué yìqǐ zài tǐyùguǎn gāogāoxìngxìng de dǎ yǔmáoqiú",
          "Wǒ xīngqīwǔ xiàwǔ sì diǎn gēn tóngxué yīqǐ zài tǐyùguǎn gāogāoxìngxìng de dǎ yǔmáoqiú",
        ],
        display: "我星期五下午四点跟同学一起在体育馆高高兴兴地打羽毛球。",
      },
      hints: [
        "Start with **我 + 星期五下午四点** (Subject + Time).",
        "Next put Companion (**跟同学一起**) and Place (**在体育馆**).",
        "Manner (**高高兴兴地**) hugs the verb **打羽毛球** right at the end!",
      ],
      solution: [
        "1. Subject + Time: **我星期五下午四点**",
        "2. Companion + Place: **跟同学一起在体育馆**",
        "3. Manner + Verb-Object: **高高兴兴地打羽毛球**",
        "Full sentence: **我星期五下午四点跟同学一起在体育馆高高兴兴地打羽毛球。**",
      ],
    },
    {
      id: "sentence-patterns-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "cause-contrast",
      question:
        "**Adverb vs Conjunction Detective!** Look at the placement of the bold word in Clause 2 across four sentences:\n1. **因为下雨，所以我们不去。**\n2. **虽然很累，但是我很开心。**\n3. **如果不下雨，我们就去。**\n4. **他先洗手，再他吃饭。**\nWhich sentence breaks Mandarin's adverb-placement rule?",
      options: [
        "Sentence 1 (**所以我们不去**)",
        "Sentence 2 (**但是我很开心**)",
        "Sentence 4 (**他先洗手，再他吃饭** — **再** is an adverb like **就**, so it cannot stand BEFORE the subject **他**!)",
        "Sentence 3 (**我们就去**)",
      ],
      answerIndex: 2,
      hints: [
        "**所以** and **但是** are conjunctions (can precede the subject).",
        "**就**, **先**, **再**, and **也** are **adverbs** — can an adverb ever stand BEFORE a subject like **他**?",
      ],
      explanation:
        "**再** (*zài*, then) is an adverb, NOT a conjunction! Saying **再他吃饭** is just as ungrammatical as *就他去* or *也他去*. When the subject is the same, drop the repeated **他** (**他先洗手，再吃饭**), or place **他** before **再**.",
    },
    {
      id: "sentence-patterns-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "combining-clauses",
      question:
        "**Multi-Clue Menu Deduction!** Four friends order lunch at a Singapore hawker centre:\n- **牛肉面** costs **$6**.\n- **海南鸡饭**比**牛肉面**便宜**两块钱**。\n- **叻沙 (Laksa)**跟**牛肉面**一样贵。\n- **海鲜炒饭**比**海南鸡饭**贵**五块钱**。\nIf they order **one of each** of the four dishes, how many dollars ($ SGD) do they pay altogether? (Type a number.)",
      answer: {
        type: "number",
        value: 25,
        display: "$25",
      },
      hints: [
        "Work out each dish step-by-step from **牛肉面 = $6**!",
        "**海南鸡饭** = 6 − 2 = $4; **叻沙** = $6 (same as **牛肉面**).",
        "**海鲜炒饭** = **海南鸡饭** ($4) + 5 = $9. Now sum all four!",
      ],
      solution: [
        "**牛肉面** = $6.",
        "**海南鸡饭** (**比牛肉面便宜两块**) = 6 − 2 = $4.",
        "**叻沙** (**跟牛肉面一样贵**) = $6.",
        "**海鲜炒饭** (**比海南鸡饭贵五块**) = 4 + 5 = $9.",
        "Total = 6 + 4 + 6 + 9 = **$25**.",
      ],
    },
    {
      id: "sentence-patterns-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "combining-clauses",
      question:
        "**Nested Connector Masterpiece!** Translate into Mandarin:\n*'Because taking the MRT is not only fast, but also cheap, therefore I take the MRT every day.'*\n(Use **因为坐地铁**, **不但快，而且便宜**, **所以我每天坐地铁**.)",
      answer: {
        type: "text",
        accept: [
          "因为坐地铁不但快，而且便宜，所以我每天坐地铁",
          "因为坐地铁不但快而且便宜所以我每天坐地铁",
          "因为坐地铁不但很快，而且很便宜，所以我每天都坐地铁",
          "因为坐地铁不但很快，而且很便宜，所以我每天坐地铁",
          "因为坐地铁不但快，而且便宜，所以我每天都坐地铁",
          "Yīnwèi zuò dìtiě búdàn kuài, érqiě piányi, suǒyǐ wǒ měitiān zuò dìtiě",
          "Yīnwèi zuò dìtiě bùdàn kuài, érqiě piányi, suǒyǐ wǒ měitiān zuò dìtiě",
        ],
        display: "因为坐地铁不但快，而且便宜，所以我每天坐地铁。",
      },
      hints: [
        "Nest **不但快，而且便宜** right inside the **因为坐地铁…** cause clause!",
        "Close the outer pair with **，所以我每天坐地铁**.",
      ],
      solution: [
        "Outer frame: **因为 [Cause]，所以 [Result]**.",
        "Inner cause clause: **坐地铁不但快，而且便宜**.",
        "Combined: **因为坐地铁不但快，而且便宜，所以我每天坐地铁。**",
      ],
    },
  ],
};
