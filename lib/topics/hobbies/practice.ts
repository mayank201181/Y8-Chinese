import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "hobbies-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "sports-verbs",
      question: "How do you say **play table tennis** in Mandarin?",
      options: ["踢乒乓球", "玩乒乓球", "打乒乓球", "骑乒乓球"],
      answerIndex: 2,
      hints: ["Table tennis is played with a paddle in your hand — pick the hand-radical verb!"],
      explanation:
        "**打乒乓球** (*dǎ pīngpāngqiú*) uses **打** because table tennis is played with your hands.",
    },
    {
      id: "hobbies-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "sports-verbs",
      question: "Translate into Mandarin (3 characters): **play football**.",
      answer: {
        type: "text",
        accept: ["踢足球", "tī zúqiú"],
        display: "踢足球 (tī zúqiú)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["打足球", "玩足球", "dǎ zúqiú", "wán zúqiú"] },
          feedback: "Football is kicked with the feet, so Mandarin ALWAYS uses 踢 (tī): 踢足球!",
        },
      ],
      hints: ["Use 踢 (tī, kick) + 足球 (zúqiú, football)."],
      solution: ["Foot sport → **踢足球** (*tī zúqiú*)."],
    },
    {
      id: "hobbies-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "creative-music-hobbies",
      question: "Which phrase means **play the guitar**?",
      options: ["弹吉他 (tán jítā)", "拉吉他 (lā jítā)", "吹吉他 (chuī jítā)", "下吉他 (xià jítā)"],
      answerIndex: 0,
      hints: ["Guitar strings are plucked with fingers — same verb as 弹钢琴!"],
      explanation:
        "**弹吉他** (*tán jítā*) uses **弹** for plucked strings, whereas **拉** is for bowed strings like violin.",
    },
    {
      id: "hobbies-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "creative-music-hobbies",
      question: "Translate into Mandarin (4 characters): **play the violin**.",
      answer: {
        type: "text",
        accept: ["拉小提琴", "lā xiǎotíqín"],
        display: "拉小提琴 (lā xiǎotíqín)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["弹小提琴", "玩小提琴", "tán xiǎotíqín"] },
          feedback: "A violin uses a bow pulled across strings — use 拉 (lā), NEVER 弹 or 玩: 拉小提琴!",
        },
      ],
      hints: [
        "Pulling a bow uses 拉 (lā).",
        "'Violin' is 小提琴 (xiǎotíqín).",
      ],
      solution: ["Bowed string verb **拉** + **小提琴** → **拉小提琴** (*lā xiǎotíqín*)."],
    },
    {
      id: "hobbies-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "likes-degrees",
      question: "Complete the sentence: **我 ___ 画画很感兴趣。** ('I am very interested in drawing.')",
      options: ["跟 (gēn)", "对 (duì)", "在 (zài)", "给 (gěi)"],
      answerIndex: 1,
      hints: [
        "Recall the golden interest formula: Subject + ___ + Topic + 很感兴趣.",
        "Means 'towards / in'.",
      ],
      explanation:
        "**对** (*duì*) completes the frame **A + 对 + B + 很感兴趣**.",
    },
    {
      id: "hobbies-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "likes-degrees",
      question: "How do you say **boring** (the direct negative of **有意思**) in Mandarin? (3 characters)",
      answer: {
        type: "text",
        accept: ["没意思", "méi yìsi"],
        display: "没意思 (méi yìsi)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["不意思", "不有意思", "bù yìsi"] },
          feedback: "有 is ALWAYS negated with 没 (méi), never 不: 没意思!",
        },
      ],
      hints: [
        "Replace 有 in 有意思 with its negative partner.",
        "Negate 有 with 没 (méi)!",
      ],
      solution: ["Negative of **有意思** is **没意思** (*méi yìsi*, boring)."],
    },
    {
      id: "hobbies-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "ability-hui-neng",
      question: "Choose the right modal verb: **我学了三年中文，所以我 ___ 说一点儿中文。**",
      options: ["可以", "得", "别", "会"],
      answerIndex: 3,
      hints: [
        "Speaking Mandarin is a skill acquired through learning (学了三年).",
        "Pick the learned-skill modal!",
      ],
      explanation:
        "**会** (*huì*) expresses a learned skill such as speaking a language (**会说中文**), swimming (**会游泳**), or playing an instrument.",
    },
    {
      id: "hobbies-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "ability-hui-neng",
      question: "Translate into Mandarin: **He runs very fast.** (Use **他** and the degree complement **跑得…**!)",
      answer: {
        type: "text",
        accept: ["他跑得很快", "他跑得非常快", "Tā pǎo de hěn kuài", "Tā pǎo de fēicháng kuài"],
        display: "他跑得很快。 (Tā pǎo de hěn kuài.)",
      },
      hints: [
        "Use Verb (跑) + 得 (de) + 很快.",
        "Start with 他.",
      ],
      solution: [
        "Subject **他** + Verb **跑** + **得很快** → **他跑得很快。**",
      ],
    },
    {
      id: "hobbies-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "cca-hobby-profile",
      question: "Which verb means **to join / take part in** a CCA or competition (**___ 课外活动 / ___ 比赛**)?",
      options: ["练习 (liànxí)", "参加 (cānjiā)", "放松 (fàngsōng)", "讨厌 (tǎoyàn)"],
      answerIndex: 1,
      hints: [
        "练习 means 'practise'; 放松 means 'relax'.",
        "Look for the verb meaning 'participate in / join'!",
      ],
      explanation:
        "**参加** (*cānjiā*) means 'to join / participate in' (**参加课外活动**, **参加比赛**).",
    },
    {
      id: "hobbies-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "sports-verbs",
      question: "Translate into Mandarin (4 characters): **ride a bicycle**.",
      answer: {
        type: "text",
        accept: ["骑自行车", "骑脚踏车", "qí zìxíngchē", "qí jiǎotàchē"],
        display: "骑自行车 (qí zìxíngchē)",
      },
      hints: [
        "Use straddling verb 骑 (qí) + 自行车 (zìxíngchē).",
        "Singapore's 骑脚踏车 is also accepted!",
      ],
      solution: ["**骑** (*qí*) + **自行车** (*zìxíngchē*) → **骑自行车**."],
    },
  ],

  papers: [
    {
      id: "hobbies-p1",
      title: "Practice Paper 1 · Action Verbs, Preferences & Oral Roleplay",
      questions: [
        {
          id: "hobbies-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "sports-verbs",
          question: "Write the two-character Mandarin word for **to swim / swimming**.",
          answer: {
            type: "text",
            accept: ["游泳", "yóuyǒng"],
            display: "游泳 (yóuyǒng)",
          },
          hints: ["Both characters start with the 氵(three-drops water) radical!"],
          solution: ["**游泳** (*yóuyǒng*) = to swim / swimming."],
        },
        {
          id: "hobbies-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "creative-music-hobbies",
          question: "Fill in the correct action verb: **___ 笛子** ('play the bamboo flute').",
          answer: {
            type: "text",
            accept: ["吹", "chuī"],
            display: "吹 (chuī)",
          },
          hints: ["A flute is a wind instrument — choose the verb with the 口 (mouth) radical meaning 'blow'!"],
          solution: ["Wind instruments take **吹** (*chuī*): **吹笛子**."],
        },
        {
          id: "hobbies-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "creative-music-hobbies",
          question: "Write the tone-marked Pinyin (or tone numbers) for **爱好** ('hobby').",
          answer: {
            type: "text",
            accept: ["àihào", "ài hào"],
            display: "àihào",
          },
          traps: [
            {
              spec: { type: "text", accept: ["àihǎo", "ai4 hao3"] },
              feedback: "Polyphone trap! In 爱好 ('hobby'), 好 means 'to be fond of' and takes the 4th tone hào, not 3rd tone hǎo!",
            },
          ],
          hints: ["Both syllables carry the falling 4th tone!"],
          solution: ["**爱** (*ài*, 4th tone) + **好** (*hào*, 4th tone) → **àihào**."],
        },
        {
          id: "hobbies-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "sports-verbs",
          question: "Unscramble into a grammatical Mandarin sentence following **STPV**:\n**打篮球 / 放学以后 / 在体育馆 / 我 / 。**",
          answer: {
            type: "text",
            accept: [
              "我放学以后在体育馆打篮球",
              "放学以后我在体育馆打篮球",
              "Wǒ fàngxué yǐhòu zài tǐyùguǎn dǎ lánqiú",
              "Fàngxué yǐhòu wǒ zài tǐyùguǎn dǎ lánqiú",
            ],
            display: "我放学以后在体育馆打篮球。",
          },
          hints: [
            "Golden STPV order: Subject (我) + Time (放学以后) + Place (在体育馆) + Verb (打篮球).",
            "Time can also go right at the start before 我!",
          ],
          solution: [
            "Subject + Time + Place + Verb → **我放学以后在体育馆打篮球。**",
          ],
        },
        {
          id: "hobbies-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "likes-degrees",
          question: "Translate into Mandarin: **My favourite sport is badminton.**",
          answer: {
            type: "text",
            accept: [
              "我最喜欢的运动是打羽毛球",
              "我最喜欢的运动是羽毛球",
              "Wǒ zuì xǐhuan de yùndòng shì dǎ yǔmáoqiú",
              "Wǒ zuì xǐhuan de yùndòng shì yǔmáoqiú",
            ],
            display: "我最喜欢的运动是打羽毛球。",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我很最喜欢的运动是打羽毛球", "我很最喜欢的运动是羽毛球"] },
              feedback: "Never stack 很 before 最! Just say 我最喜欢的运动是…",
            },
          ],
          hints: [
            "'My favourite sport' = 我最喜欢的运动.",
            "Link with 是 + (打)羽毛球.",
          ],
          solution: [
            "**我最喜欢的运动** + **是** + **打羽毛球** → **我最喜欢的运动是打羽毛球。**",
          ],
        },
        {
          id: "hobbies-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "likes-degrees",
          question: "Unscramble into a natural Mandarin sentence:\n**很 / 中国音乐 / 姐姐 / 感兴趣 / 对 / 。**",
          answer: {
            type: "text",
            accept: ["姐姐对中国音乐很感兴趣", "Jiějie duì Zhōngguó yīnyuè hěn gǎn xìngqù"],
            display: "姐姐对中国音乐很感兴趣。",
          },
          hints: [
            "Subject first: 姐姐.",
            "Prepositional phrase 对中国音乐 MUST come BEFORE 很感兴趣!",
          ],
          solution: [
            "**姐姐** + **对中国音乐** + **很感兴趣** → **姐姐对中国音乐很感兴趣。**",
          ],
        },
        {
          id: "hobbies-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "ability-hui-neng",
          question: "Fill in **会** or **能** to complete the contrast:\n**我 ___ 骑自行车，可是今天下雨，我不 ___ 去东海岸公园骑车。** *(Write the two characters separated by a slash or space, or together as 2 characters.)*",
          answer: {
            type: "text",
            accept: ["会 能", "会/能", "会，能", "会能", "huì néng"],
            display: "会 / 能 (huì / néng)",
          },
          hints: [
            "First blank: knowing how to ride a bike (a learned skill).",
            "Second blank: today's rain prevents going (circumstance).",
          ],
          solution: [
            "Learned skill → **会** (*huì*); circumstantial inability → **能** (*néng*, in **不能**).",
          ],
        },
        {
          id: "hobbies-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "ability-hui-neng",
          question: "Fix the grammar error in *弟弟踢足球得很好* — write a correct Mandarin sentence meaning **'Younger brother plays football very well'**.",
          answer: {
            type: "text",
            accept: [
              "弟弟踢足球踢得很好",
              "弟弟足球踢得很好",
              "Dìdi tī zúqiú tī de hěn hǎo",
              "Dìdi zúqiú tī de hěn hǎo",
            ],
            display: "弟弟踢足球踢得很好。 / 弟弟足球踢得很好。",
          },
          hints: [
            "Degree particle 得 (de) MUST follow the verb 踢 directly, never the noun 足球!",
            "Either repeat 踢 (踢足球踢得很好) or front 足球 (足球踢得很好).",
          ],
          solution: [
            "Repeat the verb: **弟弟踢足球踢得很好。** (or front the object: **弟弟足球踢得很好。**).",
          ],
        },
        {
          id: "hobbies-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "creative-music-hobbies",
          question: "Translate into English: **妈妈喜欢一边做饭，一边听音乐。**",
          answer: {
            type: "text",
            accept: [
              "mum likes cooking while listening to music",
              "mum likes to cook while listening to music",
              "mum likes listening to music while cooking",
              "mother likes cooking while listening to music",
              "mother likes listening to music while cooking",
              "mom likes cooking while listening to music",
              "mom likes listening to music while cooking",
            ],
            display: "Mum likes cooking while listening to music.",
          },
          hints: [
            "一边…一边… = doing two actions at the same time ('while').",
            "做饭 = cook; 听音乐 = listen to music.",
          ],
          solution: [
            "**妈妈喜欢** (Mum likes) + **一边做饭，一边听音乐** (cooking while listening to music).",
          ],
        },
        {
          id: "hobbies-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "cca-hobby-profile",
          question: "Read: **小明每个星期二和星期五练习打网球，每次练习两个小时。** How many hours does Xiaoming practise tennis **in two weeks**? (Type a number.)",
          answer: {
            type: "number",
            value: 8,
            display: "8 (八个小时)",
          },
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "4 hours is for ONE week (Tuesday 2h + Friday 2h). Double it for TWO weeks!",
            },
          ],
          hints: [
            "每个星期二和星期五 = twice a week; 每次两个小时 = 2 hours per session → 2 × 2 = 4 hours per week.",
            "Now multiply by 2 weeks!",
          ],
          solution: [
            "1 week: 2 sessions (**星期二、星期五**) × 2 hours (**两个小时**) = 4 hours/week.",
            "2 weeks: 4 × 2 = 8 hours in total.",
          ],
        },
        {
          id: "hobbies-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "cca-hobby-profile",
          question: "Fill in the event measure word: **上个星期六我们看了一 ___ 精彩的足球比赛。**",
          answer: {
            type: "text",
            accept: ["场", "chǎng"],
            display: "场 (chǎng)",
          },
          hints: [
            "Sports matches, concerts, and films take 场 (chǎng).",
            "Appears in 运动场 and 操场!",
          ],
          solution: ["Matches take **场** (*chǎng*): **一场精彩的足球比赛**."],
        },
        {
          id: "hobbies-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "creative-music-hobbies",
          question: "Translate into Mandarin (2 characters): **play chess** (choose the board-game verb!).",
          answer: {
            type: "text",
            accept: ["下棋", "xiàqí", "xià qí"],
            display: "下棋 (xiàqí)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["玩棋", "打棋", "wán qí", "dǎ qí"] },
              feedback: "Board games like chess and Go use 下 (xià, 'put pieces down on the board'): 下棋!",
            },
          ],
          hints: [
            "Board games use 下 (xià).",
            "Combine 下 + 棋 (qí).",
          ],
          solution: ["**下棋** (*xiàqí*) = play chess."],
        },
        {
          id: "hobbies-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "likes-degrees",
          marks: 5,
          question:
            "**IGCSE 0547 Roleplay Task — Talking About Hobbies & Sports (谈爱好与运动):**\nYour Chinese exchange partner in Beijing asks you five questions. Reply in complete Mandarin sentences:\n1. 你的爱好是什么？ *(Name at least two hobbies — e.g. one sport and one creative/music hobby.)*\n2. 你最喜欢什么运动？为什么？ *(State your favourite sport and give a clear reason.)*\n3. 你每个星期什么时候、在哪里做这个运动？ *(Give both time and place in STPV order.)*\n4. 你会什么乐器？ *(Say one instrument you know how to play, OR say which instrument you don't know how to play yet but want to learn.)*\n5. *(Ask your partner politely what CCAs or clubs they join at school.)*",
          hints: [
            "Check your action verbs carefully: 打/踢/骑 for sports, 弹/拉/吹 for instruments!",
            "For question 5, use 参加 and 课外活动 or 俱乐部.",
          ],
          modelAnswer:
            "1. 我的爱好是打羽毛球和听音乐。\n2. 我最喜欢的运动是游泳，因为新加坡很热，游泳不但很凉快，而且对身体好。\n3. 我每个星期六上午在学校游泳池游泳。\n4. 我会弹钢琴，可是不会拉小提琴。\n5. 请问你在学校参加了什么课外活动？",
          markScheme: [
            {
              point: "Names at least two hobbies using accurate Mandarin collocations (打/踢/弹/拉/画画/看书/听音乐).",
              keywords: ["爱好", "打", "踢", "游泳", "音乐", "看书", "画画", "弹"],
            },
            {
              point: "States favourite sport with 最喜欢 and justifies it with 因为 (对身体好 / 有意思 / 凉快 / 放松).",
              keywords: ["最喜欢", "因为", "身体", "有意思", "凉快", "放松"],
            },
            {
              point: "Uses accurate STPV order with both Time and Place before the sport verb (星期… + 在…).",
              keywords: ["星期", "周末", "每天", "在"],
            },
            {
              point: "Uses 会 / 不会 + accurate instrument verb (弹钢琴/吉他, 拉小提琴/二胡, 吹笛子) + 乐器.",
              keywords: ["会", "弹", "拉", "吹", "钢琴", "吉他", "小提琴", "笛子"],
            },
            {
              point: "Asks a natural question about school CCAs or clubs (参加 + 课外活动 / 俱乐部 + 吗/什么).",
              keywords: ["参加", "课外活动", "俱乐部", "什么"],
            },
          ],
          commonError:
            "Using *玩* for sports/instruments (*玩羽毛球*, *玩钢琴*) or putting place after the verb.",
        },
        {
          id: "hobbies-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "cca-hobby-profile",
          marks: 5,
          question:
            "**IGCSE 0547 Short Essay — My School CCA Life in Singapore (我的课外活动 · 90–130 characters):**\nWrite an article for your school magazine introducing your CCAs (**课外活动**) at school in Singapore. You MUST include:\n- Which CCA(s) or club(s) you joined this year;\n- When, where, and with whom you practise each week;\n- How long you have been learning this sport or skill (**已经学了…年了**);\n- A memorable match or performance;\n- Why you think CCAs are valuable for students.",
          hints: [
            "Showcase STPV + 跟…一起 + duration (练习两个小时).",
            "End with 不但…而且… (e.g. 不但能锻炼身体，而且可以交很多新朋友)!",
          ],
          modelAnswer:
            "在新加坡的学校，课外活动非常丰富。今年我参加了学校的羽毛球队和华乐团。每个星期二和星期四放学以后，我都跟队友一起在体育馆练习两个小时羽毛球。我从九岁开始学打羽毛球，到现在已经学了四年了，打得还不错！上个月我们参加了一场校际比赛，还赢了第二名。我觉得参加课外活动很有意义，不但能锻炼身体、放松心情，而且可以交很多志同道合的新朋友！",
          markScheme: [
            {
              point: "States which school CCA(s)/club(s) were joined using 参加 + 课外活动/队/团/俱乐部.",
              keywords: ["参加", "课外活动", "队", "团", "俱乐部"],
            },
            {
              point: "Gives weekly schedule, partner, and venue in STPV order (星期… + 跟…一起 + 在…练习).",
              keywords: ["星期", "放学", "在", "练习"],
            },
            {
              point: "States how long the skill has been learned (从…开始 / 已经学了…年了).",
              keywords: ["学了", "年", "已经", "开始"],
            },
            {
              point: "Mentions a match, competition, or performance (比赛 / 演出 / 赢).",
              keywords: ["比赛", "演出", "赢"],
            },
            {
              point: "Explains two benefits of CCAs using connectors like 不但…而且… (锻炼身体 / 放松 / 交朋友).",
              keywords: ["不但", "而且", "身体", "放松", "朋友"],
            },
          ],
          commonError:
            "Placing duration before the verb (*我两个小时练习*) instead of after 练习 (练习两个小时).",
        },
      ],
    },
    {
      id: "hobbies-p2",
      title: "Practice Paper 2 · Instruments, Modals & Family Hobby Profile",
      questions: [
        {
          id: "hobbies-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "sports-verbs",
          question: "Write the two-character Mandarin verb meaning **to run / go jogging**.",
          answer: {
            type: "text",
            accept: ["跑步", "pǎobù"],
            display: "跑步 (pǎobù)",
          },
          hints: ["跑 (with 足 foot radical) + 步 (steps)."],
          solution: ["**跑步** (*pǎobù*) = to run / go jogging."],
        },
        {
          id: "hobbies-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "creative-music-hobbies",
          question: "Write the tone-marked Pinyin (or tone numbers) for **音乐** ('music').",
          answer: {
            type: "text",
            accept: ["yīnyuè", "yīn yuè"],
            display: "yīnyuè",
          },
          traps: [
            {
              spec: { type: "text", accept: ["yīnlè", "yin1 le4"] },
              feedback: "Careful! 乐 is read lè in 快乐 ('happy'), but in 音乐 ('music') it is read yuè!",
            },
          ],
          hints: ["First syllable yīn (1st tone); second syllable is yuè (4th tone), NOT lè!"],
          solution: ["**音** (*yīn*) + **乐** (*yuè*) → **yīnyuè**."],
        },
        {
          id: "hobbies-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "creative-music-hobbies",
          question: "Translate into Mandarin (3 characters): **play the erhu** (Chinese two-stringed bowed fiddle).",
          answer: {
            type: "text",
            accept: ["拉二胡", "lā èrhú"],
            display: "拉二胡 (lā èrhú)",
          },
          hints: [
            "Like the violin, the erhu is played with a horsehair bow!",
            "Combine 拉 (lā) + 二胡 (èrhú).",
          ],
          solution: ["Bowed fiddle → **拉二胡** (*lā èrhú*)."],
        },
        {
          id: "hobbies-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "likes-degrees",
          question: "Translate into Mandarin: **I don't really like playing computer games.** (Use **不太喜欢**.)",
          answer: {
            type: "text",
            accept: [
              "我不太喜欢玩电脑游戏",
              "Wǒ bú tài xǐhuan wán diànnǎo yóuxì",
              "Wǒ bù tài xǐhuan wán diànnǎo yóuxì",
            ],
            display: "我不太喜欢玩电脑游戏。",
          },
          hints: [
            "'Don't really like' = 不太喜欢.",
            "'Play computer games' = 玩电脑游戏 (here 玩 IS the right verb!).",
          ],
          solution: ["**我不太喜欢** + **玩电脑游戏** → **我不太喜欢玩电脑游戏。**"],
        },
        {
          id: "hobbies-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "likes-degrees",
          question: "Translate into Mandarin (4 characters): **good for one's health** (using **对** and **身体**).",
          answer: {
            type: "text",
            accept: ["对身体好", "duì shēntǐ hǎo"],
            display: "对身体好 (duì shēntǐ hǎo)",
          },
          hints: [
            "Frame: 对 + Noun + 好.",
            "Combine 对 + 身体 + 好.",
          ],
          solution: ["**对身体好** (*duì shēntǐ hǎo*) = good for one's health."],
        },
        {
          id: "hobbies-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "ability-hui-neng",
          question: "Translate into Mandarin: **May I take photos here?** (Use **这里** and **可以…吗**.)",
          answer: {
            type: "text",
            accept: [
              "这里可以拍照吗",
              "请问这里可以拍照吗",
              "我可以在这里拍照吗",
              "在这里可以拍照吗",
              "Zhèlǐ kěyǐ pāizhào ma",
              "Qǐngwèn zhèlǐ kěyǐ pāizhào ma",
              "Wǒ kěyǐ zài zhèlǐ pāizhào ma",
            ],
            display: "这里可以拍照吗？ (Zhèlǐ kěyǐ pāizhào ma?)",
          },
          hints: [
            "Permission uses 可以 (kěyǐ).",
            "'Take photos' = 拍照 (pāizhào); add 吗 at the end!",
          ],
          solution: ["**这里** + **可以拍照吗？** → **这里可以拍照吗？**"],
        },
        {
          id: "hobbies-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "sports-verbs",
          question: "Translate into Mandarin using separable **游泳**: **swam for two hours** (7 characters, using **两个小时**).",
          answer: {
            type: "text",
            accept: ["游了两个小时泳", "游了两个小时的泳", "游了两小时泳", "yóu le liǎng gè xiǎoshí yǒng"],
            display: "游了两个小时泳 (yóu le liǎng gè xiǎoshí yǒng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["游泳了两个小时", "游了二个小时泳"] },
              feedback: "Split 游 and 泳 around 了 + duration (游了两个小时泳), and always use 两 before 个!",
            },
          ],
          hints: [
            "Split 游泳 into 游 + [了 + duration] + 泳!",
            "Duration = 两个小时 (7 characters total: 游了两个小时泳).",
          ],
          solution: [
            "Verb **游** + **了** + **两个小时** + object **泳** → **游了两个小时泳**.",
          ],
        },
        {
          id: "hobbies-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "cca-hobby-profile",
          question: "Read: **姐姐今年十四岁，她已经学了八年钢琴了。** How old (**几岁**) was older sister when she **first started** learning the piano? (Type a number.)",
          answer: {
            type: "number",
            value: 6,
            display: "6 (六岁)",
          },
          hints: [
            "She is 14 years old now (今年十四岁).",
            "She has already learned piano for 8 years (已经学了八年了) → subtract 14 − 8!",
          ],
          solution: [
            "Current age **十四岁** (14) − duration **八年** (8 years) = started at age **6** (**六岁**).",
          ],
        },
        {
          id: "hobbies-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "ability-hui-neng",
          question: "Unscramble into a natural Mandarin sentence:\n**唱得 / 姐姐 / 好听 / 中文歌 / 很 / 。**",
          answer: {
            type: "text",
            accept: ["姐姐中文歌唱得很好听", "Jiějie Zhōngwén gē chàng de hěn hǎotīng"],
            display: "姐姐中文歌唱得很好听。",
          },
          hints: [
            "Subject + fronted object: 姐姐中文歌...",
            "Verb+得 + degree + adjective: 唱得很好听!",
          ],
          solution: [
            "**姐姐** (Subject) + **中文歌** (Fronted Object) + **唱得很好听** (Complement) → **姐姐中文歌唱得很好听。**",
          ],
        },
        {
          id: "hobbies-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "sports-verbs",
          question: "Write the two-character Mandarin verb meaning **to hike / climb a hill or mountain** (as at Bukit Timah Hill).",
          answer: {
            type: "text",
            accept: ["爬山", "páshān", "pá shān"],
            display: "爬山 (páshān)",
          },
          hints: [
            "First character means 'climb' (爬 pá).",
            "Second character means 'mountain/hill' (山 shān).",
          ],
          solution: ["**爬山** (*páshān*) = to hike / climb a mountain."],
        },
        {
          id: "hobbies-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "cca-hobby-profile",
          question: "Write the three-character Mandarin noun meaning **sports field / outdoor stadium**.",
          answer: {
            type: "text",
            accept: ["运动场", "yùndòngchǎng"],
            display: "运动场 (yùndòngchǎng)",
          },
          hints: [
            "运动 (sport) + 场 (open field/pitch).",
            "Contrasts with indoor 体育馆!",
          ],
          solution: ["**运动场** (*yùndòngchǎng*) = sports field / stadium."],
        },
        {
          id: "hobbies-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "likes-degrees",
          question: "Translate into Mandarin (3 characters): **make friends** (a classic benefit of team sports!).",
          answer: {
            type: "text",
            accept: ["交朋友", "jiāo péngyou"],
            display: "交朋友 (jiāo péngyou)",
          },
          hints: [
            "Verb 交 (jiāo) + noun 朋友 (péngyou).",
            "Often used as 交很多新朋友 ('make lots of new friends').",
          ],
          solution: ["**交朋友** (*jiāo péngyou*) = to make friends."],
        },
        {
          id: "hobbies-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "creative-music-hobbies",
          marks: 5,
          question:
            "**Family Hobbies Snapshot (我们一家的爱好 · 80–110 characters):**\nWrite a short paragraph in Mandarin introducing the different hobbies of your family members (e.g. **爸爸, 妈妈, 哥哥/姐姐/弟弟/妹妹, and 我**). Make sure you:\n1. Mention at least **two sports** using different accurate verbs (**打 / 踢 / 骑 / 游**);\n2. Mention at least **one musical instrument** using **弹 / 拉 / 吹**;\n3. Mention **one quiet/creative hobby** (**画画 / 看书 / 做饭 / 拍照 / 下棋**);\n4. Use **对…感兴趣** at least once;\n5. Include one **得** (*de*) degree complement (e.g. **打得很好 / 做得很好吃**).",
          hints: [
            "Remember NEVER to connect two family members' clauses with 和 — use commas or 也!",
            "Check your 得 sentence carefully: 爸爸做饭做得很好吃 or 哥哥篮球打得很好.",
          ],
          modelAnswer:
            "我们一家人都有不同的爱好。爸爸最喜欢运动，他每个周末都去东海岸公园骑自行车，还会打网球。妈妈对拍照和做饭很感兴趣，她做的中国菜做得非常好吃！姐姐比较安静，喜欢在家弹钢琴和看书。我最喜欢跟同学一起在运动场踢足球，因为既好玩又能锻炼身体。",
          markScheme: [
            {
              point: "Uses at least two distinct, accurate sport collocations (打… / 踢足球 / 骑自行车 / 游泳 / 跑步).",
              keywords: ["打", "踢", "骑", "游泳", "跑步"],
            },
            {
              point: "Includes a musical instrument with the correct action verb (弹钢琴/吉他, 拉小提琴/二胡, 吹笛子).",
              keywords: ["弹钢琴", "弹吉他", "拉小提琴", "拉二胡", "吹笛子"],
            },
            {
              point: "Includes a quiet/creative hobby (画画 / 看书 / 做饭 / 拍照 / 下棋 / 书法).",
              keywords: ["画画", "看书", "做饭", "拍照", "下棋", "书法"],
            },
            {
              point: "Uses the 对…感兴趣 structure accurately.",
              keywords: ["对", "感兴趣"],
            },
            {
              point: "Uses a grammatical Verb + 得 (de) + Adjective degree complement.",
              keywords: ["得很好", "得非常好", "得很快", "得很好吃", "得很好听"],
            },
          ],
          commonError:
            "Linking clauses with *和* (*爸爸喜欢打球，和妈妈喜欢做饭*) or misplacing 得 after an object noun.",
        },
        {
          id: "hobbies-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "ability-hui-neng",
          marks: 5,
          question:
            "**IGCSE 0547 Email — Inviting a Friend to Try a New Sport/Club (邀请朋友参加俱乐部 · 90–130 characters):**\nWrite an email in Mandarin to your friend **美美** (*Meimei*) inviting her to join your weekend badminton or music club at a Singapore community club (**民众俱乐部**). Include:\n- Which club you joined and how well the coach/teacher teaches (**教得…**);\n- Even if she doesn't know how yet (**不会**), why she can still join (**可以**);\n- When and where you meet each week;\n- Why you can't go *this* Saturday (**不能去** — give a brief reason) so suggest starting *next* Saturday instead;\n- Ask her to reply soon.",
          hints: [
            "Notice how this prompt lets you naturally hit ALL THREE modals: 不会 (skill), 可以 (permission/possibility), and 不能 (circumstance this Saturday)!",
            "Use 我们下个星期六一起去，怎么样？ at the end.",
          ],
          modelAnswer:
            "美美，你好！我最近参加了家附近民众俱乐部的羽毛球班，那里的教练打羽毛球打得非常好，也教得很有耐心。虽然你现在还不会打羽毛球，但是完全可以来参加初学者班！我们每个星期六上午十点在体育馆练习。不过这个星期六我要去看牙医，不能去打球。我们下个星期六一起去，好吗？快点给我回信吧！祝好，小丽",
          markScheme: [
            {
              point: "Introduces the club/class and praises the coach/teacher using 得 (民众俱乐部 / 教练 / 教得… / 打得…).",
              keywords: ["俱乐部", "班", "得"],
            },
            {
              point: "Contrasts 不会 (skill) with 可以 (welcome/allowed to join).",
              keywords: ["不会", "可以"],
            },
            {
              point: "Gives clear day, time, and venue in STPV order (星期六 + 点 + 在…).",
              keywords: ["星期六", "点", "在"],
            },
            {
              point: "Explains why this Saturday is impossible using 不能 + a sensible reason, and proposes 下个星期六.",
              keywords: ["不能", "下个星期六", "下周六"],
            },
            {
              point: "Ends with a polite invitation question and sign-off (一起去 / 好吗 / 怎么样 / 回信).",
              keywords: ["一起", "好吗", "怎么样", "回信"],
            },
          ],
          commonError:
            "Confusing 不会 and 不能 when explaining why you cannot attend this Saturday.",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "hobbies-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "creative-music-hobbies",
      question:
        "**Polyphone Triple Puzzle (多音字):** Read this sentence aloud: **我最喜欢音乐课，因为拉二胡让我觉得很快乐！** What are the exact Pinyin readings of the two **乐** characters and **好** if we replace **最喜欢** with **爱好是**?",
      options: [
        "音乐 = yīnyuè, 快乐 = kuàilè, 爱好 = àihào",
        "音乐 = yīnlè, 快乐 = kuàiyuè, 爱好 = àihǎo",
        "音乐 = yīnyuè, 快乐 = kuàiyuè, 爱好 = àihǎo",
        "音乐 = yīnlè, 快乐 = kuàilè, 爱好 = àihào",
      ],
      answerIndex: 0,
      hints: [
        "乐 means 'music' in 音乐 (yuè) and 'joy/happy' in 快乐 (lè).",
        "好 means 'fond of' in 爱好 (4th tone hào)!",
      ],
      explanation:
        "All three classic Year 8 polyphones in one go: **音乐** (*yīnyuè*), **快乐** (*kuàilè*), and **爱好** (*àihào*)!",
    },
    {
      id: "hobbies-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "cca-hobby-profile",
      question:
        "**CCA Timetable Logic Puzzle:** Read Tanglin student Weiwei's weekly CCA schedule:\n- **星期一、星期三：游泳队练习，每次一个半小时；**\n- **星期四：华乐团拉二胡，每次两个小时；**\n- **星期六上午：跟爸爸打四十五分钟网球。**\nHow many **minutes (分钟)** in total does Weiwei spend on all these sports and music activities in **one week**? (Type a number.)",
      answer: {
        type: "number",
        value: 345,
        display: "345 (345分钟)",
      },
      traps: [
        {
          spec: { type: "number", value: 255 },
          feedback: "Did you count 游泳队 only once? Check the days: 星期一、星期三 (Monday AND Wednesday = 2 sessions of 90 minutes)!",
        },
      ],
      hints: [
        "一个半小时 = 1.5 hours = 90 minutes. Swimming is on BOTH 星期一 and 星期三: 2 × 90 = 180 minutes!",
        "星期四 Chinese Orchestra: 两个小时 = 120 minutes.",
        "星期六上午 tennis: 四十五分钟 = 45 minutes. Add 180 + 120 + 45!",
      ],
      solution: [
        "Swimming (**星期一、星期三，每次一个半小时**): 2 × 90 = 180 minutes.",
        "Erhu (**星期四，两个小时**): 120 minutes.",
        "Tennis (**星期六，四十五分钟**): 45 minutes.",
        "Weekly total: 180 + 120 + 45 = **345 minutes**.",
      ],
    },
    {
      id: "hobbies-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "cca-hobby-profile",
      question:
        "**Aspect Subtlety — Single 了 vs Double 了:** Compare:\n1. **爸爸以前学了三年吉他。**\n2. **姐姐已经学了三年吉他了。**\nWhat is the crucial difference in meaning?",
      options: [
        "Dad learned guitar for 3 years in the past (and stopped); Older sister has been learning for 3 years and STILL plays now",
        "Dad still plays guitar every day; Older sister gave up guitar 3 years ago",
        "Both mean they will start learning guitar in 3 years' time",
        "Sentence 1 is grammatical, while Sentence 2 has one 了 too many",
      ],
      answerIndex: 0,
      hints: [
        "Notice 以前 ('in the past / formerly') + single 了 in Sentence 1.",
        "Notice 已经 ('already') + Verb-了 + Duration + sentence-final 了 in Sentence 2!",
      ],
      explanation:
        "Single **Verb + 了 + Duration** (**学了三年吉他**) packages a completed past period (Dad learned for 3 years and stopped). Adding sentence-final **了** (**已经学了三年吉他了**) signals 'up until right now and continuing'!",
    },
    {
      id: "hobbies-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "ability-hui-neng",
      question:
        "Translate into Mandarin using **verb repetition** with **得** (*de*) AND a **比** comparison:\n**'Older sister plays the piano better than me.'** *(Use **姐姐**, **弹钢琴**, and **比我好** — remember NO 很 with 比!)*",
      answer: {
        type: "text",
        accept: [
          "姐姐弹钢琴弹得比我好",
          "姐姐钢琴弹得比我好",
          "Jiějie tán gāngqín tán de bǐ wǒ hǎo",
          "Jiějie gāngqín tán de bǐ wǒ hǎo",
        ],
        display: "姐姐弹钢琴弹得比我好。",
      },
      traps: [
        {
          spec: { type: "text", accept: ["姐姐弹钢琴得比我好", "姐姐弹钢琴弹得比我很好"] },
          feedback: "Check two traps: (1) repeat 弹 before 得 (弹钢琴弹得…), and (2) NEVER put 很 after 比 (*比我很好* ✗ → 比我好 ✓)!",
        },
      ],
      hints: [
        "First attach 得 directly to 弹: 姐姐弹钢琴弹得… (or 姐姐钢琴弹得…).",
        "After 得, put the comparison 比我好 (no 很!).",
      ],
      solution: [
        "Subject + Verb-Object + Verb + 得: **姐姐弹钢琴弹得**",
        "Comparison complement (no 很!): **比我好。**",
      ],
    },
    {
      id: "hobbies-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "sports-verbs",
      question:
        "**Linguistic Pattern Detective:** Look at these four Mandarin activity phrases:\n- **游泳** (*yóuyǒng*) · **跑步** (*pǎobù*) · **唱歌** (*chànggē*) · **跳舞** (*tiàowǔ*)\nAll four belong to the exact same grammatical family (**离合词**, *líhécí* — separable verb-object compounds). Based on how **游了一个小时泳** works, which of the following is the **ONLY** grammatical way to say **'sang two Chinese songs'**?",
      options: [
        "唱歌了两首中文",
        "唱了两首中文歌",
        "两首中文唱歌了",
        "唱了歌两首中文",
      ],
      answerIndex: 1,
      hints: [
        "In 唱歌, 唱 = verb ('sing') and 歌 = noun object ('song')!",
        "Put 了 + 两首中文 right in front of the noun 歌!",
      ],
      explanation:
        "Because **唱** is the verb and **歌** is the noun ('song'), **了** and the modifier **两首中文** slot right between **唱** and **歌**: **唱了两首中文歌**! *唱歌了两首* wrongly treats **唱歌** as an inseparable single verb.",
    },
    {
      id: "hobbies-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "likes-degrees",
      question:
        "Translate into Mandarin using **虽然…但是…** and **对…感兴趣**:\n**'Although I cannot play the violin, I am very interested in classical music.'**\n*(Use **虽然我不会拉小提琴** for the first clause and **古典音乐** for 'classical music'.)*",
      answer: {
        type: "text",
        accept: [
          "虽然我不会拉小提琴，但是我对古典音乐很感兴趣",
          "虽然我不会拉小提琴，但是我对古典音乐非常感兴趣",
          "虽然我不会拉小提琴，但是对古典音乐很感兴趣",
          "Suīrán wǒ bú huì lā xiǎotíqín, dànshì wǒ duì gǔdiǎn yīnyuè hěn gǎn xìngqù",
          "Suīrán wǒ bù huì lā xiǎotíqín, dànshì wǒ duì gǔdiǎn yīnyuè hěn gǎn xìngqù",
        ],
        display: "虽然我不会拉小提琴，但是我对古典音乐很感兴趣。",
      },
      hints: [
        "Pair 虽然… with 但是…!",
        "Second clause: 但是我对古典音乐很感兴趣.",
      ],
      solution: [
        "Concession clause: **虽然我不会拉小提琴，**",
        "Main clause with 对…很感兴趣: **但是我对古典音乐很感兴趣。**",
      ],
    },
    {
      id: "hobbies-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "ability-hui-neng",
      question:
        "**Double 得 Brainteaser:** In the sentence **要想网球打得好，你得每天认真练习！**, what are the Pinyin pronunciations of the **first 得** and the **second 得**?",
      options: [
        "First 得 = děi; second 得 = de",
        "First 得 = de; second 得 = děi",
        "First 得 = dé; second 得 = de",
        "Both are neutral tone de",
      ],
      answerIndex: 1,
      hints: [
        "Look at the position of the first 得: 打 + 得 + 好 (right AFTER a verb + before an adjective).",
        "Look at the position of the second 得: 你 + 得 + 每天认真练习 (BEFORE a verb meaning 'must')!",
      ],
      explanation:
        "In **网球打得好**, **得** follows the verb **打** as a degree complement (**de**, neutral tone). In **你得每天认真练习**, **得** precedes the verb phrase meaning 'must / have to' (**děi**, 3rd tone)!",
    },
    {
      id: "hobbies-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sports-verbs",
      question:
        "Translate into natural Mandarin obeying **Time + 跟…一起 + Place + Verb**:\n**'On Sunday morning I go to East Coast Park with my friends to ride bicycles.'**\n*(Use **星期天早上**, **我跟朋友一起**, **去东海岸公园**, and **骑自行车**.)*",
      answer: {
        type: "text",
        accept: [
          "星期天早上我跟朋友一起去东海岸公园骑自行车",
          "我星期天早上跟朋友一起去东海岸公园骑自行车",
          "星期天早上，我跟朋友一起去东海岸公园骑自行车",
          "Xīngqītiān zǎoshang wǒ gēn péngyou yìqǐ qù Dōnghǎi'àn Gōngyuán qí zìxíngchē",
          "Xīngqītiān zǎoshang wǒ gēn péngyou yīqǐ qù Dōnghǎi'àn Gōngyuán qí zìxíngchē",
          "Wǒ xīngqītiān zǎoshang gēn péngyou yìqǐ qù Dōnghǎi'àn Gōngyuán qí zìxíngchē",
        ],
        display: "星期天早上我跟朋友一起去东海岸公园骑自行车。",
      },
      hints: [
        "Put Time (星期天早上) and With-phrase (跟朋友一起) BEFORE 去东海岸公园!",
        "Finish with the purpose action 骑自行车.",
      ],
      solution: [
        "Time + Subject + With-phrase: **星期天早上我跟朋友一起**",
        "Destination + Sport action: **去东海岸公园骑自行车。**",
      ],
    },
  ],
};
