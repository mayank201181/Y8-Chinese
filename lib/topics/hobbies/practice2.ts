import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "hobbies-p3",
    title: "Practice Paper 3 · Club Notices, Translations & IGCSE Writing",
    questions: [
      {
        id: "hobbies-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "sports-verbs",
        question: "Translate into Mandarin (3 characters): **play tennis**.",
        answer: {
          type: "text",
          accept: ["打网球", "dǎ wǎngqiú"],
          display: "打网球 (dǎ wǎngqiú)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["玩网球", "踢网球"] },
            feedback: "Tennis is a racket sport played with your hand, so use 打 (dǎ): 打网球!",
          },
        ],
        hints: ["Use 打 (dǎ) + 网球 (wǎngqiú — 网 looks like a net!)."],
        solution: ["**打网球** (*dǎ wǎngqiú*) = play tennis."],
      },
      {
        id: "hobbies-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "creative-music-hobbies",
        question: "Write the two-character Mandarin verb meaning **to take photos / photography**.",
        answer: {
          type: "text",
          accept: ["拍照", "照相", "pāizhào", "zhàoxiàng"],
          display: "拍照 (pāizhào)",
        },
        hints: ["Starts with 拍 (pāi, tap/shoot) + 照 (zhào)."],
        solution: ["**拍照** (*pāizhào*) = to take photos."],
      },
      {
        id: "hobbies-p3-q03",
        kind: "short",
        difficulty: "core",
        guideRef: "creative-music-hobbies",
        question: "Translate into Mandarin (3 characters): **play the piano**.",
        answer: {
          type: "text",
          accept: ["弹钢琴", "tán gāngqín"],
          display: "弹钢琴 (tán gāngqín)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["玩钢琴", "打钢琴", "拉钢琴"] },
            feedback: "Piano keys are pressed/struck with fingers — use 弹 (tán): 弹钢琴!",
          },
        ],
        hints: [
          "Keyboard instruments take 弹 (tán, 2nd tone).",
          "'Piano' = 钢琴 (gāngqín).",
        ],
        solution: ["**弹** (*tán*) + **钢琴** (*gāngqín*) → **弹钢琴**."],
      },
      {
        id: "hobbies-p3-q04",
        kind: "short",
        difficulty: "core",
        guideRef: "sports-verbs",
        question: "Translate into Mandarin (2 characters): **go skiing**.",
        answer: {
          type: "text",
          accept: ["滑雪", "huáxuě", "huá xuě"],
          display: "滑雪 (huáxuě)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["滑冰", "huábīng"] },
            feedback: "滑冰 is ice-skating (冰 = ice)! For skiing on snow, use 雪 (xuě): 滑雪.",
          },
        ],
        hints: [
          "滑 (huá, glide) + 雪 (xuě, snow).",
          "Do not confuse with 滑冰 (ice-skating)!",
        ],
        solution: ["**滑雪** (*huáxuě*) = to ski."],
      },
      {
        id: "hobbies-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "likes-degrees",
        question: "Translate into Mandarin: **My younger brother hates rainy days.** (Use **弟弟**, **讨厌**, and **下雨天**.)",
        answer: {
          type: "text",
          accept: [
            "弟弟讨厌下雨天",
            "我弟弟讨厌下雨天",
            "我的弟弟讨厌下雨天",
            "Dìdi tǎoyàn xiàyǔtiān",
            "Wǒ dìdi tǎoyàn xiàyǔtiān",
            "Wǒ de dìdi tǎoyàn xiàyǔtiān",
          ],
          display: "弟弟讨厌下雨天。 (Dìdi tǎoyàn xiàyǔtiān.)",
        },
        hints: [
          "Subject: 弟弟.",
          "Verb 'hate/dislike strongly': 讨厌 (tǎoyàn) + 下雨天.",
        ],
        solution: ["**弟弟** + **讨厌** + **下雨天** → **弟弟讨厌下雨天。**"],
      },
      {
        id: "hobbies-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "likes-degrees",
        question: "Translate into English: **我对摄影一点儿也不感兴趣。**",
        answer: {
          type: "text",
          accept: [
            "i am not interested in photography at all",
            "i am not at all interested in photography",
            "im not interested in photography at all",
          ],
          display: "I am not interested in photography at all.",
        },
        hints: [
          "摄影 = photography; 对…感兴趣 = interested in…",
          "一点儿也不… = 'not at all…'!",
        ],
        solution: [
          "**我对摄影** (towards photography) + **一点儿也不感兴趣** (am not at all interested).",
        ],
      },
      {
        id: "hobbies-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "ability-hui-neng",
        question: "Translate into Mandarin: **I don't know how to ice-skate.** (Use **不会**.)",
        answer: {
          type: "text",
          accept: ["我不会滑冰", "我不会溜冰", "Wǒ bú huì huábīng", "Wǒ bù huì huábīng", "Wǒ bú huì liūbīng", "Wǒ bù huì liūbīng"],
          display: "我不会滑冰。 (Wǒ bú huì huábīng.)",
        },
        hints: [
          "Lack of a learned skill uses 不会 (bú huì).",
          "'Ice-skate' = 滑冰 (huábīng).",
        ],
        solution: ["**我不会** + **滑冰** → **我不会滑冰。**"],
      },
      {
        id: "hobbies-p3-q08",
        kind: "short",
        difficulty: "core",
        guideRef: "ability-hui-neng",
        question: "Unscramble into a grammatical Mandarin sentence:\n**打得 / 哥哥 / 很好 / 乒乓球 / 。**",
        answer: {
          type: "text",
          accept: ["哥哥乒乓球打得很好", "Gēge pīngpāngqiú dǎ de hěn hǎo"],
          display: "哥哥乒乓球打得很好。",
        },
        hints: [
          "Front the object 乒乓球 right after 哥哥 so 得 stays glued to 打!",
          "Order: 哥哥 + 乒乓球 + 打得 + 很好.",
        ],
        solution: ["**哥哥乒乓球打得很好。**"],
      },
      {
        id: "hobbies-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "cca-hobby-profile",
        question: "Read the community club poster:\n**青少年网球班：一节课二十五新币；如果一次报名十节课，一共只要二百二十新币！**\nHow many Singapore dollars (**新币**) do you **save** on 10 lessons if you sign up for all 10 lessons at once? (Type a number.)",
        answer: {
          type: "number",
          value: 30,
          display: "30 (省三十新币)",
        },
        hints: [
          "Paying lesson-by-lesson for 10 lessons: 10 × 25 (二十五) = 250 SGD.",
          "Package price for 10 lessons: 二百二十 = 220 SGD. Subtract 250 − 220!",
        ],
        solution: [
          "10 individual lessons: 10 × 25 = 250 SGD.",
          "10-lesson bundle (**二百二十新币**): 220 SGD.",
          "Amount saved: 250 − 220 = **30 SGD**.",
        ],
      },
      {
        id: "hobbies-p3-q10",
        kind: "short",
        difficulty: "core",
        guideRef: "cca-hobby-profile",
        question: "Write the Mandarin verb meaning **to win** (a match or competition).",
        answer: {
          type: "text",
          accept: ["赢", "赢了", "yíng", "yíng le"],
          display: "赢 (yíng)",
        },
        hints: [
          "Antonym of 输 (shū, to lose).",
          "Appears in 我们校队赢了比赛！; Pinyin is yíng.",
        ],
        solution: ["**赢** (*yíng*) = to win."],
      },
      {
        id: "hobbies-p3-q11",
        kind: "short",
        difficulty: "core",
        guideRef: "cca-hobby-profile",
        question: "Translate into Mandarin: **practise the piano for one hour** (using **练习**, **一个小时**, and **钢琴** in the right order!).",
        answer: {
          type: "text",
          accept: ["练习一个小时钢琴", "练习一个小时的钢琴", "liànxí yí gè xiǎoshí gāngqín", "liànxí yī gè xiǎoshí gāngqín"],
          display: "练习一个小时钢琴 (liànxí yí gè xiǎoshí gāngqín)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["一个小时练习钢琴"] },
            feedback: "Duration ('for one hour') MUST go AFTER the verb 练习 and before the noun 钢琴: 练习一个小时钢琴!",
          },
        ],
        hints: [
          "Put the verb 练习 first!",
          "Duration 一个小时 goes right between 练习 and 钢琴.",
        ],
        solution: ["Verb **练习** + duration **一个小时** + object **钢琴** → **练习一个小时钢琴**."],
      },
      {
        id: "hobbies-p3-q12",
        kind: "short",
        difficulty: "core",
        guideRef: "creative-music-hobbies",
        question: "Write the two-character Mandarin noun for **musical instrument** (remember Pinyin *yuèqì*!).",
        answer: {
          type: "text",
          accept: ["乐器", "yuèqì"],
          display: "乐器 (yuèqì)",
        },
        hints: [
          "First character is 乐 (read yuè, as in 音乐).",
          "Second character is 器 (qì, device/instrument).",
        ],
        solution: ["**乐器** (*yuèqì*) = musical instrument."],
      },
      {
        id: "hobbies-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "sports-verbs",
          marks: 5,
        question:
          "**Weekend Sport Diary — A Morning at East Coast Park (东海岸公园运动记 · 80–110 characters):**\nWrite a short diary entry in Mandarin about going to **东海岸公园** (*East Coast Park*) last Sunday with your family or friends to do sports. Include:\n1. When you went and who went with you (**跟…一起**);\n2. How the weather was that morning;\n3. At least **two** sports/activities you did there (using accurate verbs like **骑自行车, 跑步, 打沙滩排球, 散步**);\n4. How long you exercised for;\n5. How you felt afterwards.",
        hints: [
          "Remember completed-action 了 for last Sunday (上个星期天)!",
          "Show off a separable verb duration like 跑了半个小时步 or 骑了一个小时自行车.",
        ],
        modelAnswer:
          "上个星期天早上天气晴朗，也很凉快，我跟爸爸妈妈一起去东海岸公园做运动。我们先沿着海边骑了一个小时自行车，然后我和爸爸还在沙滩上打了半个小时排球，妈妈在一边拍照和散步。运动完以后，我们喝了冰凉的椰子水。虽然有一点儿累，但是我觉得非常开心，也很放松！",
        markScheme: [
          {
            point: "States time and companions accurately using 跟/和…一起 before 去东海岸公园.",
            keywords: ["星期天", "周日", "一起", "东海岸公园"],
          },
          {
            point: "Describes the morning weather briefly (晴天/晴朗/凉快/好).",
            keywords: ["天气", "晴", "凉快", "热"],
          },
          {
            point: "Names at least two accurate outdoor activities (骑自行车, 跑步, 打排球, 散步, 游泳).",
            keywords: ["骑", "跑", "打", "散步", "游泳"],
          },
          {
            point: "Includes an accurate post-verbal duration (一个小时 / 半个小时 / 分钟).",
            keywords: ["小时", "分钟"],
          },
          {
            point: "Concludes with feelings/reflection using connectors such as 虽然…但是… (累 + 开心/高兴/放松).",
            keywords: ["累", "开心", "高兴", "放松"],
          },
        ],
        commonError:
          "Forgetting completed-action 了 in a past-weekend diary or misusing *玩排球* instead of 打排球.",
      },
      {
        id: "hobbies-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "likes-degrees",
        marks: 5,
        question:
          "**IGCSE 0547 Opinion Essay — Sports vs Quiet Hobbies (运动爱好与安静的爱好 · 100–130 characters):**\nYour Mandarin teacher asks the class: *Should Year 8 students spend their free time only on active sports, or also have quiet hobbies like music and reading?* Write a balanced short essay in Mandarin that:\n- Explains why **sports** (**运动**) are important for teenagers;\n- Explains why **quiet/creative hobbies** (**听音乐、弹琴、看书、画画**) also matter;\n- Gives **your own** personal combination of one active hobby and one quiet hobby;\n- Uses **不但…而且…** AND **对…感兴趣**;\n- Sums up your advice for classmates.",
        hints: [
          "Balance both sides cleanly: 一方面，运动…；另一方面，安静的爱好…",
          "Make sure both 不但…而且… and 对…感兴趣 appear naturally!",
        ],
        modelAnswer:
          "我觉得八年级的学生既需要运动爱好，也需要安静的爱好。一方面，打篮球、游泳等运动不但能锻炼身体，而且可以让我们交很多好朋友；另一方面，看书、画画或者听音乐能让我们在考试以后放松心情。我自己最喜欢踢足球，同时也对弹吉他非常感兴趣。所以我建议同学们动静结合，每天既多运动，也抽时间培养一个安静的爱好！",
        markScheme: [
          {
            point: "Explains the benefits of active sports (运动 + 锻炼身体 / 对身体好 / 健康 / 交朋友).",
            keywords: ["运动", "身体", "健康", "朋友"],
          },
          {
            point: "Explains the value of quiet/creative hobbies (看书/音乐/画画 + 放松 / 安静 / 有意思).",
            keywords: ["音乐", "看书", "画画", "放松"],
          },
          {
            point: "Shares personal active + quiet hobbies with accurate collocations.",
            keywords: ["我", "喜欢", "打", "踢", "游泳", "弹", "拉"],
          },
          {
            point: "Uses BOTH 不但…而且… and 对…感兴趣 accurately.",
            keywords: ["不但", "而且", "感兴趣"],
          },
          {
            point: "Gives a clear concluding recommendation for classmates (建议 / 应该 / 同学们).",
            keywords: ["建议", "应该", "同学"],
          },
        ],
        commonError:
          "Writing only about one hobby instead of addressing both active and quiet hobbies as asked.",
      },
    ],
  },
];
