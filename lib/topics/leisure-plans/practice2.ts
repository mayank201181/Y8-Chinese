import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "leisure-plans-p3",
    title: "Practice Paper 3 · Extended Reading, Singapore Plans & IGCSE Writing",
    questions: [
      {
        id: "leisure-plans-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "free-time-activities",
        question:
          "Write the Mandarin noun for **'cinema'** (3 characters or tone-marked Pinyin):",
        answer: {
          type: "text",
          accept: ["电影院", "diànyǐngyuàn"],
          display: "电影院 (diànyǐngyuàn)",
        },
        hints: ["**电影** (*diànyǐng*, film) + **院** (*yuàn*, venue/institution)."],
        solution: [
          "'Cinema' is **电影院** (*diànyǐngyuàn*).",
        ],
      },
      {
        id: "leisure-plans-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "free-time-activities",
        question:
          "What does **在家休息** (*zài jiā xiūxi*) mean in English?",
        answer: {
          type: "text",
          accept: [
            "rest at home",
            "to rest at home",
            "relax at home",
            "to relax at home",
            "resting at home",
          ],
          display: "to rest at home",
        },
        hints: ["**在家** = at home; **休息** = rest / relax."],
        solution: [
          "**在家休息** means **to rest / relax at home**.",
        ],
      },
      {
        id: "leisure-plans-p3-q03",
        kind: "short",
        difficulty: "warmup",
        guideRef: "together-invitations",
        question:
          "Write the enthusiastic three-character Mandarin phrase meaning **'Brilliant! / That's great!'** when accepting an invitation:",
        answer: {
          type: "text",
          accept: ["太好了", "太棒了", "tài hǎo le", "tài bàng le"],
          display: "太好了！ (Tài hǎo le!)",
        },
        hints: ["Uses the exclamation frame **太…了** around **好**!"],
        solution: [
          "**太好了！** (*Tài hǎo le!*) means 'Brilliant! / That's great!'.",
        ],
      },
      {
        id: "leisure-plans-p3-q04",
        kind: "short",
        difficulty: "core",
        guideRef: "free-time-activities",
        question:
          "Translate into Mandarin: *'Younger brother goes to the library to read books on Saturdays.'* (Use **弟弟**, **星期六**, **去图书馆**, and **看书**.)",
        answer: {
          type: "text",
          accept: [
            "弟弟星期六去图书馆看书",
            "星期六弟弟去图书馆看书",
            "Dìdi xīngqīliù qù túshūguǎn kàn shū",
            "Xīngqīliù dìdi qù túshūguǎn kàn shū",
          ],
          display: "弟弟星期六去图书馆看书。 (Dìdi xīngqīliù qù túshūguǎn kàn shū.)",
        },
        hints: [
          "Put Subject + Time first (**弟弟星期六**).",
          "Follow with serial verb **去图书馆看书**.",
        ],
        solution: [
          "Subject + Time + Destination + Action → **弟弟星期六去图书馆看书。**",
        ],
      },
      {
        id: "leisure-plans-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "frequency-adverbs",
        question:
          "Unscramble into a grammatical Mandarin sentence:\n**都 / 奶奶 / 散步 / 每天早上 / 去公园**",
        answer: {
          type: "text",
          accept: [
            "奶奶每天早上都去公园散步",
            "每天早上奶奶都去公园散步",
            "Nǎinai měitiān zǎoshang dōu qù gōngyuán sànbù",
            "Měitiān zǎoshang nǎinai dōu qù gōngyuán sànbù",
          ],
          display: "奶奶每天早上都去公园散步。",
        },
        traps: [
          {
            spec: { type: "text", accept: ["奶奶都每天早上再去公园散步", "奶奶都每天早上去公园散步"] },
            feedback: "**都** must stand AFTER the **每** phrase (**每天早上**) and directly before **去公园散步**!",
          },
        ],
        hints: [
          "Pair **每天早上** with **都** right before the verb!",
          "Keep **去公园** before **散步**.",
        ],
        solution: [
          "Subject (**奶奶**) + **每天早上** + **都** + **去公园散步** → **奶奶每天早上都去公园散步。**",
        ],
      },
      {
        id: "leisure-plans-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "frequency-adverbs",
        question:
          "Translate into Mandarin: *'I go to the beach twice a month.'* (Use **我**, **一个月**, **去**, **两次**, and **海边**.)",
        answer: {
          type: "text",
          accept: [
            "我一个月去两次海边",
            "一个月我去两次海边",
            "Wǒ yí gè yuè qù liǎng cì hǎibiān",
            "Wǒ yī gè yuè qù liǎng cì hǎibiān",
            "Yí gè yuè wǒ qù liǎng cì hǎibiān",
          ],
          display: "我一个月去两次海边。 (Wǒ yí gè yuè qù liǎng cì hǎibiān.)",
        },
        hints: [
          "Start with **我一个月**.",
          "Place **两次** right AFTER the verb **去** and BEFORE **海边**!",
        ],
        solution: [
          "Subject + Period (**我一个月**) + Verb + Count + Place (**去两次海边**) → **我一个月去两次海边。**",
        ],
      },
      {
        id: "leisure-plans-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "making-plans-dasuan",
        question:
          "Translate into Mandarin: *'During the holidays I would like to go to Sentosa.'* (Use **放假的时候**, **我**, **想**, and **去圣淘沙**.)",
        answer: {
          type: "text",
          accept: [
            "放假的时候我想去圣淘沙",
            "我放假的时候想去圣淘沙",
            "Fàngjià de shíhou wǒ xiǎng qù Shèngtáoshā",
            "Wǒ fàngjià de shíhou xiǎng qù Shèngtáoshā",
          ],
          display: "放假的时候我想去圣淘沙。",
        },
        hints: [
          "Put the time clause **放假的时候** before or right after **我**.",
          "'Would like to' is **想** (*xiǎng*).",
        ],
        solution: [
          "Time clause (**放假的时候**) + Subject (**我**) + Wish (**想**) + Action (**去圣淘沙**) → **放假的时候我想去圣淘沙。**",
        ],
      },
      {
        id: "leisure-plans-p3-q08",
        kind: "short",
        difficulty: "core",
        guideRef: "making-plans-dasuan",
        question:
          "Unscramble into a sequenced weekend plan:\n**再上网 / 先做运动 / 打算 / 星期天 / 我**",
        answer: {
          type: "text",
          accept: [
            "星期天我打算先做运动再上网",
            "我星期天打算先做运动再上网",
            "Xīngqītiān wǒ dǎsuàn xiān zuò yùndòng, zài shàngwǎng",
            "Wǒ xīngqītiān dǎsuàn xiān zuò yùndòng, zài shàngwǎng",
          ],
          display: "星期天我打算先做运动，再上网。",
        },
        hints: [
          "Start with **星期天我打算** (or **我星期天打算**).",
          "Order the two steps: **先做运动** ('first do sport'), **再上网** ('then go online').",
        ],
        solution: [
          "Assemble: **星期天我打算先做运动，再上网。**",
        ],
      },
      {
        id: "leisure-plans-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "together-invitations",
        question:
          "Fill in the missing three-character tag question meaning **'how about it?'**:\n**这个星期天我们一起去东海岸公园骑自行车，_______？**",
        answer: {
          type: "text",
          accept: ["怎么样", "好不好", "zěnmeyàng", "hǎo bu hǎo", "hǎo bù hǎo"],
          display: "怎么样 (zěnmeyàng)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["怎么样吗", "zěnmeyàng ma"] },
            feedback: "Never add **吗** after **怎么样** — **怎么样** is already a question word!",
          },
        ],
        hints: [
          "Three characters starting with **怎么** (*zěnme*).",
          "Do NOT add **吗** at the end!",
        ],
        solution: [
          "**怎么样？** (*zěnmeyàng?*, 'how about it?') completes the polite invitation.",
        ],
      },
      {
        id: "leisure-plans-p3-q10",
        kind: "short",
        difficulty: "core",
        guideRef: "together-invitations",
        question:
          "Translate into Mandarin: *'Let's meet at the shopping mall entrance at 3 o'clock.'* (Use **我们**, **三点**, **在商场门口**, and **见面**.)",
        answer: {
          type: "text",
          accept: [
            "我们三点在商场门口见面",
            "三点我们在商场门口见面",
            "Wǒmen sān diǎn zài shāngchǎng ménkǒu jiànmiàn",
            "Sān diǎn wǒmen zài shāngchǎng ménkǒu jiànmiàn",
          ],
          display: "我们三点在商场门口见面。",
        },
        hints: [
          "Follow STPV: Subject (**我们**) + Time (**三点**) + Location (**在商场门口**) + Verb (**见面**).",
          "Keep **三点** before **在商场门口**!",
        ],
        solution: [
          "Subject + Time + Location + Verb → **我们三点在商场门口见面。**",
        ],
      },
      {
        id: "leisure-plans-p3-q11",
        kind: "short",
        difficulty: "challenge",
        guideRef: "weekend-diary-plan",
        question:
          "Read this notice about a Saturday cinema outing:\n**星期六下午两点半，我们在乌节路地铁站门口见面。电影三点一刻开始，五点一刻结束。看完电影以后，我们一起去吃晚饭。**\nHow many **hours** long is the film? Type a number.",
        answer: {
          type: "number",
          value: 2,
          display: "2",
        },
        hints: [
          "Start time: **三点一刻** (3:15 p.m.).",
          "End time: **五点一刻** (5:15 p.m.). Subtract start from end!",
        ],
        solution: [
          "From **三点一刻** (3:15) to **五点一刻** (5:15) is **2** hours.",
        ],
      },
      {
        id: "leisure-plans-p3-q12",
        kind: "short",
        difficulty: "challenge",
        guideRef: "weekend-diary-plan",
        question:
          "Read Jiajia's reflection:\n**上个周末我跟表姐去了国家博物馆，看到了很多有意思的东西。下个周末如果天气好，我准备跟爸爸去植物园拍照。**\nWhere did Jiajia go **last weekend**? Answer in English.",
        answer: {
          type: "text",
          accept: [
            "national museum",
            "the national museum",
            "national museum of singapore",
            "the national museum of singapore",
            "museum",
            "the museum",
          ],
          display: "the National Museum (国家博物馆)",
        },
        hints: [
          "Look at the **上个周末** clause (not **下个周末**!).",
          "**国家** = national, **博物馆** = museum.",
        ],
        solution: [
          "In the **上个周末** sentence, **去了国家博物馆** means she went to **the National Museum**.",
        ],
      },
      {
        id: "leisure-plans-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "making-plans-dasuan",
        marks: 5,
        question:
          "**IGCSE 0547 School Holiday Plan Email (5 marks)**\nWrite a 50–75 character email in Mandarin to your Chinese teacher explaining your plans for the upcoming one-week school holiday (**下个星期放假**). Cover ALL five points:\n1. Mention that school breaks up next week (**下个星期放假**).\n2. State one study plan using **打算** or **准备** (e.g. reading Chinese books or going to the library).\n3. Sequence two holiday activities using **先…，再 / 然后…**.\n4. Mention an outdoor activity you will do with family (**跟家人一起**) if the weather is good (**如果天气好…就…**).\n5. Express a hope for the holiday (**希望**).",
        modelAnswer:
          "王老师，您好！下个星期放假，我有空了。我打算每天早上先在家复习一个小时中文，再去图书馆看书。如果周末天气好，我们就跟家人一起去东海岸公园骑自行车和野餐。我希望这个假期过得既充实又开心！",
        markScheme: [
          {
            point: "Mentions upcoming school holiday (放假 / 假期).",
            keywords: ["放假", "假期"],
          },
          {
            point: "States a study or reading plan using 打算 or 准备.",
            keywords: ["打算", "准备", "看书", "复习", "图书馆", "中文"],
          },
          {
            point: "Sequences two activities using 先 and 再 / 然后.",
            keywords: ["先", "再", "然后"],
          },
          {
            point: "Uses 如果…就… or 跟家人一起 for an outdoor family activity.",
            keywords: ["如果", "就", "跟", "一起", "家人", "爸爸", "妈妈"],
          },
          {
            point: "Expresses a personal hope using 希望.",
            keywords: ["希望"],
          },
        ],
        hints: [
          "Address your teacher respectfully with **老师，您好！**.",
          "Remember **就** must come AFTER the subject in **如果天气好，我们就…**!",
        ],
        commonError:
          "Putting **先** or **就** before the subject instead of after the subject.",
      },
      {
        id: "leisure-plans-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "weekend-diary-plan",
        marks: 6,
        question:
          "**IGCSE 0547 Extended Essay — 周末生活 (6 marks)**\nYour Beijing penpal **林林 (Línlín)** asked how Singapore Year 8 students spend their weekends. Write a 90–130 character letter in Simplified Chinese covering:\n1. Why weekdays (**平时**) are busy and how often you do leisure activities.\n2. What Singapore teenagers often do at weekends (mention at least two activities and a Singapore place).\n3. What you did **last Sunday** (**上个星期天**) and how it was.\n4. What you **plan** to do **this Saturday** (**这个星期六**) and with whom (**跟…一起**).\n5. One thing you **rarely** or **never** (**很少 / 从不**) do at the weekend and why.\n6. Invite Linlin to visit Singapore during the holidays (**放假的时候**).",
        modelAnswer:
          "林林，你好！我在新加坡上八年级，平时功课很多，所以我很少看电视。周末新加坡的学生常常跟朋友一起去乌节路的商场逛街或者看电影。上个星期天我跟爸爸去了植物园散步，风景美极了！这个星期六我打算先上中文课，下午再跟同学一起去游泳。我周末从不睡懒觉，因为早上很凉快。放假的时候欢迎你来新加坡玩！",
        markScheme: [
          {
            point: "Contrasts busy weekdays (平时) with leisure frequency.",
            keywords: ["平时", "忙", "功课", "作业"],
          },
          {
            point: "Describes typical Singapore weekend activities and a local place.",
            keywords: ["常常", "经常", "乌节路", "圣淘沙", "东海岸", "植物园", "商场", "逛街", "电影"],
          },
          {
            point: "Accounts for last Sunday (上个星期天) with 了 and an opinion.",
            keywords: ["上个星期天", "了"],
          },
          {
            point: "States this Saturday's plan (这个星期六) with 打算/准备 and 跟…一起.",
            keywords: ["这个星期六", "打算", "准备", "跟", "一起"],
          },
          {
            point: "Mentions something rarely/never done (很少/从不) with a reason (因为).",
            keywords: ["很少", "从不", "从来不", "因为"],
          },
          {
            point: "Invites Linlin to Singapore during the holidays (放假 / 假期 / 欢迎).",
            keywords: ["放假", "假期", "欢迎", "来新加坡"],
          },
        ],
        hints: [
          "Open with **林林，你好！** and weave connectors (**因为…所以…**, **先…再…**) throughout.",
          "Double-check all 6 bullet prompts before finishing!",
        ],
        commonError:
          "Omitting the negative habit bullet (**很少 / 从不 + 因为…**) or forgetting **了** on **上个星期天**.",
      },
    ],
  },
];
