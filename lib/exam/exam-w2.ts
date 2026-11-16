import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-w2",
  title: "Paper 4 — Full End-of-Year IGCSE 0547 Foundation Mock (年末综合模拟考)",
  calculator: false,
  minutes: 60,
  questions: [
    // =========================================================================
    // SECTION A: IGCSE PART 1 — SIGNS, NOTICES & EVERYDAY VOCABULARY (Q01–Q08)
    // =========================================================================
    {
      id: "exam-w2-q01",
      kind: "mcq",
      topicId: "greetings-routine",
      guideRef: "daily-routine",
      difficulty: "warmup",
      question:
        "Read this boarding-house lights-out rule on a school dormitory door:\n\n" +
        "> **宿舍规定：学生每天早上六点半起床，晚上十点以前必须关灯睡觉。**\n\n" +
        "What must students do **before 10:00 pm** every evening?",
      options: [
        "Turn off the lights and go to sleep",
        "Wake up and brush their teeth",
        "Finish their homework in the dining hall",
        "Take a shower and wash their clothes",
      ],
      answerIndex: 0,
      hints: [
        "**晚上十点以前** (*wǎnshang shí diǎn yǐqián*) means 'before 10:00 pm'.",
        "**关灯** (*guān dēng*) = turn off the light, and **睡觉** (*shuìjiào*) = go to sleep.",
      ],
      explanation:
        "**晚上十点以前必须关灯睡觉** means students must (**必须**) switch off the lights (**关灯**) and go to sleep (**睡觉**) before 10:00 pm. **早上六点半起床** (get up at 6:30 am) is the morning rule.",
    },
    {
      id: "exam-w2-q02",
      kind: "mcq",
      topicId: "time-measure-words",
      guideRef: "core-measure-words",
      difficulty: "warmup",
      question:
        "Mum leaves a sticky note on the fridge before going to work:\n\n" +
        "> **冰箱里有两盒牛奶、一碗鸡蛋面和三个苹果。**\n\n" +
        "Which classifier on the note means **'carton(s) / box(es)'**?",
      options: [
        "碗 (wǎn)",
        "盒 (hé)",
        "个 (gè)",
        "杯 (bēi)",
      ],
      answerIndex: 1,
      hints: [
        "Look at the word right before **牛奶** (*niúnǎi*, milk): **两盒牛奶**.",
        "**碗** is 'bowl' (for the egg noodles) and **个** is the general classifier (for the three apples).",
      ],
      explanation:
        "**盒** (*hé*) means 'box / carton', as in **两盒牛奶** (*liǎng hé niúnǎi*, two cartons of milk). **碗** (*wǎn*) is 'bowl', **个** (*gè*) is the general classifier, and **杯** (*bēi*) is 'cup / glass'.",
    },
    {
      id: "exam-w2-q03",
      kind: "mcq",
      topicId: "weather",
      guideRef: "temperature-degree",
      difficulty: "warmup",
      question:
        "A digital display at Changi Airport Terminal 3 shows destination weather for passengers:\n\n" +
        "> **上海今日天气：阴天，气温八度到十三度，有点儿冷。**\n\n" +
        "What is the weather like in Shanghai today?",
      options: [
        "Sunny, 18°C to 30°C, very hot",
        "Snowing heavily, -8°C to -3°C, freezing",
        "Overcast, 8°C to 13°C, a bit cold",
        "Thunderstorms, 28°C, hot and humid",
      ],
      answerIndex: 2,
      hints: [
        "**阴天** (*yīntiān*) means overcast (cloudy sky without sun).",
        "**八度到十三度** (*bā dù dào shísān dù*) gives the temperature range in °C.",
      ],
      explanation:
        "**阴天** is overcast, **气温八度到十三度** is 8°C to 13°C, and **有点儿冷** (*yǒudiǎnr lěng*) means 'a little cold'.",
    },
    {
      id: "exam-w2-q04",
      kind: "mcq",
      topicId: "illness",
      guideRef: "modal-advice",
      difficulty: "warmup",
      question:
        "A health poster outside the school clinic reads:\n\n" +
        "> **预防感冒小贴士：勤洗手、多喝温水、早睡早起、多运动！**\n\n" +
        "Which piece of advice is **NOT** on the poster?",
      options: [
        "Wash your hands frequently",
        "Drink plenty of warm water",
        "Go to bed early and wake up early",
        "Take two cold tablets every morning",
      ],
      answerIndex: 3,
      hints: [
        "Match the four phrases: **勤洗手** (wash hands often), **多喝温水** (drink plenty of warm water), **早睡早起** (early to bed, early to rise), and **多运动** (exercise more).",
        "Check whether **吃药** (taking medicine) appears anywhere!",
      ],
      explanation:
        "The poster lists four daily prevention habits (**预防感冒小贴士**): **勤洗手** (wash hands frequently), **多喝温水** (drink plenty of warm water), **早睡早起** (sleep early and rise early), and **多运动** (do plenty of exercise). It never tells healthy students to take cold tablets every morning!",
    },
    {
      id: "exam-w2-q05",
      kind: "short",
      topicId: "hobbies",
      guideRef: "sports-verbs",
      difficulty: "warmup",
      question:
        "Complete this notice outside the school football pitch with the single Mandarin verb meaning **'kick / play (football)'**:\n\n" +
        "> **星期四放学以后，八年级男生在操场____足球。**\n\n" +
        "Type the single character (or toned Pinyin).",
      answer: {
        type: "text",
        accept: ["踢", "tī"],
        display: "踢 (tī)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["打", "dǎ", "玩", "wán"] },
          feedback: "**打** is for hand/racquet sports (like 打篮球, 打网球), and **玩** isn't used for ball sports — football is played with the foot (**足**), so use **踢**!",
        },
      ],
      hints: [
        "Look at the foot radical **⻊** — which action verb pairs with **足球** (*zúqiú*)?",
        "Never use **打** or **玩** for football!",
      ],
      solution: [
        "Football (**足球**) is played with the feet, so Mandarin always uses **踢足球** (*tī zúqiú*).",
      ],
    },
    {
      id: "exam-w2-q06",
      kind: "mcq",
      topicId: "leisure-plans",
      guideRef: "frequency-adverbs",
      difficulty: "warmup",
      question:
        "In a Year 8 leisure survey, four students describe how often they play computer games (**玩电脑游戏**). Who **NEVER** plays computer games?",
      options: [
        "**家豪：** 我从不玩电脑游戏，我更喜欢在外面踢球。",
        "**志强：** 我周末常常跟哥哥一起玩电脑游戏。",
        "**美玲：** 我有时候星期五晚上玩半个小时。",
        "**小雨：** 我很少玩电脑游戏，一个月只玩一次。",
      ],
      answerIndex: 0,
      hints: [
        "Rank the four frequency adverbs from highest to zero: **常常** (often) → **有时候** (sometimes) → **很少** (seldom) → **从不** (never).",
        "Find the student who uses **从不** (*cóng bù*).",
      ],
      explanation:
        "**从不** (*cóng bù*, short for **从来不**) means **'never'**, so **家豪** never plays computer games. **常常** = often, **有时候** = sometimes, and **很少** = seldom/rarely.",
    },
    {
      id: "exam-w2-q07",
      kind: "mcq",
      topicId: "vegetables-fruits",
      guideRef: "vegetables-vocab",
      difficulty: "warmup",
      question:
        "Grandma's shopping list for tonight's soup reads:\n\n" +
        "> **买：土豆、胡萝卜、洋葱、蘑菇和一块豆腐。**\n\n" +
        "Which set of ingredients matches Grandma's list completely?",
      options: [
        "Tomatoes, cucumbers, green leafy vegetables, cabbage, and fish",
        "Potatoes, carrots, onions, mushrooms, and a block of tofu",
        "Apples, bananas, strawberries, grapes, and a watermelon",
        "Beef, chicken, prawns, eggs, and noodles",
      ],
      answerIndex: 1,
      hints: [
        "**土豆** (*tǔdòu*, 'earth-bean') = potato, and **胡萝卜** (*húluóbo*) = carrot.",
        "**洋葱** (*yángcōng*) = onion, **蘑菇** (*mógu*) = mushroom, and **豆腐** (*dòufu*) = tofu.",
      ],
      explanation:
        "**土豆** (potatoes), **胡萝卜** (carrots), **洋葱** (onions), **蘑菇** (mushrooms), and **一块豆腐** (a block of tofu) match the five soup ingredients on Grandma's list.",
    },
    {
      id: "exam-w2-q08",
      kind: "mcq",
      topicId: "three-meals",
      guideRef: "hungry-thirsty-full",
      difficulty: "warmup",
      question:
        "A sign above the tray-return station in a Singapore school canteen says:\n\n" +
        "> **吃饱以后，请自己把盘子和碗放到这里。珍惜粮食，不要浪费！**\n\n" +
        "What does this canteen sign ask students to do?",
      options: [
        "Order food at the counter before finding a seat",
        "Wash their own chopsticks and spoons in the kitchen",
        "Return their own plates and bowls here after eating their fill, and not waste food",
        "Only buy fruit and drinks during morning break",
      ],
      answerIndex: 2,
      hints: [
        "**吃饱以后** (*chī bǎo yǐhòu*) means 'after eating until full'.",
        "**把盘子和碗放到这里** means 'put your plates and bowls here', and **不要浪费** means 'do not waste (food)'.",
      ],
      explanation:
        "The sign reminds students: once you have finished eating (**吃饱以后**), please return your own plates and bowls (**盘子和碗**) to this station yourself (**自己…放到这里**), cherish food, and don't waste it (**不要浪费**).",
    },

    // =========================================================================
    // SECTION B: IGCSE PART 2 — GRAMMAR, CALCULATIONS & SHORT READING (Q09–Q20)
    // =========================================================================
    {
      id: "exam-w2-q09",
      kind: "short",
      topicId: "time-measure-words",
      guideRef: "er-vs-liang",
      difficulty: "core",
      question:
        "Translate **'22 students'** into Simplified Hanzi (or toned Pinyin) — watch closely whether `22` uses **二** or **两** before the classifier **个**!",
      answer: {
        type: "text",
        accept: [
          "二十二个学生",
          "èrshí'èr gè xuésheng",
          "èrshí'èr ge xuésheng",
          "èrshí èr gè xuésheng",
          "èrshí'èr gè xuéshēng",
          "èrshí'èr ge xuéshēng",
        ],
        display: "二十二个学生 (èrshí'èr gè xuésheng)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["二十两个学生", "两十二个学生", "两十两个学生"] },
          feedback: "**两** is ONLY used for standalone '2' before a measure word (like **两个学生** = 2 students) or before 百/千. Numbers ending in 2 from **十二** (12) and **二十二** (22) upwards ALWAYS use **二**!",
        },
        {
          spec: { type: "text", accept: ["二十二学生"] },
          feedback: "Don't forget the classifier **个** (*gè*) between the number **二十二** and the noun **学生**!",
        },
      ],
      hints: [
        "Remember the **二 vs 两** boundary: standalone `2` before a measure word is **两** (**两个**), whereas multi-digit tens/units like `12`, `20`, `22` ALWAYS use **二**!",
        "Don't forget the measure word **个** before **学生**.",
      ],
      solution: [
        "`22` is **二十二** (*èrshí'èr*) — never *二十两* or *两十二*.",
        "Insert the classifier **个** before **学生**: **二十二个学生**.",
      ],
    },
    {
      id: "exam-w2-q10",
      kind: "mcq",
      topicId: "weather",
      guideRef: "time-weather-forecasts",
      difficulty: "core",
      question:
        "Read this radio weather update:\n\n" +
        "> **听众朋友们，早上好！昨天新加坡下了一下午的大雨，最高气温只有二十七度，非常凉快。今天是晴天，最高气温会升到三十三度，比昨天热得多。明天下午还会有雷阵雨。**\n\n" +
        "Which comparison between **yesterday**, **today**, and **tomorrow** is **correct**?",
      options: [
        "Today is cooler than yesterday because it is raining all afternoon.",
        "Yesterday was 33°C and sunny, while today is 27°C and rainy.",
        "Both today and tomorrow will be dry and sunny all day.",
        "Yesterday was cool (max 27°C) with afternoon heavy rain, today is sunny and much hotter (up to 33°C), and tomorrow afternoon will have thundershowers again.",
      ],
      answerIndex: 3,
      hints: [
        "Track the three time markers one by one: **昨天** (yesterday), **今天** (today), and **明天下午** (tomorrow afternoon).",
        "Check which day was **二十七度** (27°C) and which day rises to **三十三度** (33°C).",
      ],
      explanation:
        "Yesterday (**昨天**) had heavy afternoon rain and a cool high of only 27°C; today (**今天**) is sunny (**晴天**) and rises to 33°C (**比昨天热得多**); and tomorrow afternoon (**明天下午**) will bring thundershowers (**雷阵雨**).",
    },
    {
      id: "exam-w2-q11",
      kind: "short",
      topicId: "seasons",
      guideRef: "singapore-vs-beijing",
      difficulty: "core",
      question:
        "Complete this negative comparison sentence in Simplified Hanzi (or toned Pinyin) meaning **'Autumn in Beijing is NOT as hot as Singapore'** using **没有** (*méiyǒu*):\n\n" +
        "> **北京的秋天________新加坡那么热。**",
      answer: {
        type: "text",
        accept: ["没有", "méiyǒu"],
        display: "没有 (méiyǒu)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["不比"] },
          feedback: "Notice **那么热** ('that hot') later in the sentence! The structure pairing with **那么 + Adj** for 'not as [adj] as' is **A + 没有 + B + 那么 + Adj**.",
        },
      ],
      hints: [
        "Look at **……新加坡那么热** after the blank.",
        "Recall the standard Mandarin negative comparison formula: **A + ____ + B + (那么) + Adjective**.",
      ],
      solution: [
        "To say 'A is not as [adjective] as B', Mandarin uses **A + 没有 + B + (那么) + Adjective**: **北京的秋天没有新加坡那么热。**",
      ],
    },
    {
      id: "exam-w2-q12",
      kind: "mcq",
      topicId: "hobbies",
      guideRef: "creative-music-hobbies",
      difficulty: "core",
      question:
        "Read this short note on the school Cultural Night programme:\n\n" +
        "> **第三个节目：八年级的林小雨同学一边弹吉他，一边唱中文歌《月亮代表我的心》。她学吉他已经四年了！**\n\n" +
        "What will Lin Xiaoyu do in the third performance item?",
      options: [
        "Play the guitar and sing a Mandarin song at the same time",
        "Play the piano first, and then dance to a Mandarin song",
        "Play the violin while her classmate sings in English",
        "Teach the audience how to play the guitar in four minutes",
      ],
      answerIndex: 0,
      hints: [
        "Recall the simultaneous-action frame **一边……一边……** (*yìbiān … yìbiān …*).",
        "Check her two actions: **弹吉他** (play the guitar) and **唱中文歌** (sing a Mandarin song).",
      ],
      explanation:
        "**一边弹吉他，一边唱中文歌** means she will play the guitar and sing a Mandarin song simultaneously. Also note **她学吉他已经四年了** means she has already been learning guitar for four years!",
    },
    {
      id: "exam-w2-q13",
      kind: "short",
      topicId: "vegetables-fruits",
      guideRef: "money-weights",
      difficulty: "core",
      question:
        "Remember the metric-to-Chinese weight conversion: **1 公斤 (1 kg) = 2 斤 (2 × 500 g)**.\n\n" +
        "At a supermarket in Shanghai, apples are priced per *jīn*:\n\n" +
        "> **红富士苹果：六块钱一斤**\n\n" +
        "Grandpa buys **两公斤** (**2 kg**) of these apples. How much does he pay in total (in **块 / 元**)? Enter a number.",
      answer: {
        type: "number",
        value: 24,
      },
      traps: [
        {
          spec: { type: "number", value: 12 },
          feedback: "Watch the units! The price tag is **六块钱一斤** (per 500 g *jīn*), whereas Grandpa buys **两公斤** (2 **kg** = 4 *jīn*)!",
        },
      ],
      hints: [
        "Convert **两公斤** (2 kg) into **斤** first: since 1 **公斤** = 2 **斤**, how many **斤** are in 2 **公斤**?",
        "Multiply that number of **斤** by **六块钱** (6 yuan per *jīn*).",
      ],
      solution: [
        "1 **公斤** (kg) = 2 **斤** (500 g each), so **两公斤** = 2 × 2 = **4 斤**.",
        "At **六块钱一斤** (6 yuan per *jīn*), Grandpa pays 4 × 6 = **24** yuan (**二十四块钱**).",
      ],
    },
    {
      id: "exam-w2-q14",
      kind: "short",
      topicId: "three-meals",
      guideRef: "meals-staples",
      difficulty: "core",
      question:
        "Translate **'eat dinner'** (the verb-object phrase, e.g. in 'We eat dinner at 7 pm') into Simplified Hanzi (or toned Pinyin):",
      answer: {
        type: "text",
        accept: [
          "吃晚饭",
          "吃晚餐",
          "chī wǎnfàn",
          "chī wǎncān",
        ],
        display: "吃晚饭 (chī wǎnfàn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["晚饭", "晚餐"] },
          feedback: "**晚饭** alone is only the noun 'dinner' — don't drop the verb **吃** (*chī*, eat)!",
        },
      ],
      hints: [
        "In Mandarin, you never use a meal noun as a verb on its own — include **吃** (*chī*, to eat)!",
        "Combine **吃** + **晚饭** (*wǎnfàn*, or **晚餐** *wǎncān*).",
      ],
      solution: [
        "'To eat dinner / have dinner' is **吃晚饭** (*chī wǎnfàn*) or **吃晚餐** (*chī wǎncān*).",
      ],
    },
    {
      id: "exam-w2-q15",
      kind: "mcq",
      topicId: "eating-out",
      guideRef: "paying-the-bill",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hawker stall menu board showing chicken rice, dumpling soup, green vegetables and barley water prices">' +
        '<rect x="20" y="14" width="600" height="192" rx="14" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/>' +
        '<rect x="20" y="14" width="600" height="46" rx="14" fill="#15803d"/>' +
        '<text x="320" y="44" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#ffffff">东海岸小贩中心 · 陈记海南鸡饭</text>' +
        '<text x="60" y="92" font-family="sans-serif" font-size="17" fill="#1e293b">• 海南鸡饭（一盘）…… 5 新币</text>' +
        '<text x="350" y="92" font-family="sans-serif" font-size="17" fill="#1e293b">• 水饺汤（一碗）……… 6 新币</text>' +
        '<text x="60" y="128" font-family="sans-serif" font-size="17" fill="#1e293b">• 蚝油青菜（一盘）…… 4 新币</text>' +
        '<text x="350" y="128" font-family="sans-serif" font-size="17" fill="#1e293b">• 冰薏米水（一杯）…… 2 新币</text>' +
        '<text x="320" y="174" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#c81e1e">堂食免收打包费 · 外带（打包）每份加收 1 新币盒子费</text>' +
        "</svg>",
      question:
        "Look at the stall menu board above. Enhui orders **两盘海南鸡饭** and **两杯冰薏米水** to **eat at a table there** (**堂食**, dine-in), while her brother additionally orders **一碗水饺汤** as **takeaway** (**打包**) for Mum at home. How much do they pay altogether in Singapore dollars (**新币**)?",
      options: [
        "S$20",
        "S$21",
        "S$23",
        "S$19",
      ],
      answerIndex: 1,
      hints: [
        "Calculate the food & drinks first: 2 × S$5 (**两盘海南鸡饭**) + 2 × S$2 (**两杯冰薏米水**) + 1 × S$6 (**一碗水饺汤**).",
        "Now read the red bottom rule carefully: **堂食免收打包费 · 外带（打包）每份加收 1 新币盒子费** — only the **1 takeaway item** adds S$1!",
      ],
      explanation:
        "Dine-in (**堂食**) items have no box fee: 2 plates of chicken rice (2 × 5 = 10) + 2 glasses of iced barley water (2 × 2 = 4) = S$14. The 1 bowl of dumpling soup is takeaway (**打包**), costing S$6 + S$1 container fee = S$7. Total: 14 + 7 = **S$21**.",
    },
    {
      id: "exam-w2-q16",
      kind: "short",
      topicId: "sentence-patterns",
      guideRef: "stpv-word-order",
      difficulty: "core",
      question:
        "Translate **'Mum reads books at home in the evening'** into Simplified Hanzi (or toned Pinyin) following strict **STPV** word order (using **妈妈**, **晚上**, **在家**, **看书**):",
      answer: {
        type: "text",
        accept: [
          "妈妈晚上在家看书",
          "妈妈晚上在家里看书",
          "晚上妈妈在家看书",
          "晚上妈妈在家里看书",
          "māma wǎnshang zài jiā kànshū",
          "māma wǎnshang zài jiā kàn shū",
          "māma wǎnshang zài jiālǐ kànshū",
          "wǎnshang māma zài jiā kàn shū",
          "wǎnshang māma zài jiālǐ kàn shū",
        ],
        display: "妈妈晚上在家看书。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["妈妈看书在家晚上", "妈妈在家看书晚上", "妈妈在家晚上看书"],
          },
          feedback: "Follow **STPV**: Subject (**妈妈**) + Time (**晚上**) + Place (**在家**) + Verb (**看书**)!",
        },
      ],
      hints: [
        "Order the four parts as **Subject → Time → Place → Verb**.",
        "Time (**晚上**) comes before Place (**在家**), and both come before **看书**.",
      ],
      solution: [
        "**妈妈** (Subject) + **晚上** (Time) + **在家** (Place) + **看书** (Verb) → **妈妈晚上在家看书。**",
      ],
    },
    {
      id: "exam-w2-q17",
      kind: "mcq",
      topicId: "time-measure-words",
      guideRef: "clothing-animal-classifiers",
      difficulty: "core",
      question:
        "Read this Lost Property notice sent out by the Year 8 Office:\n\n" +
        "> **失物招领：今天下午体育课以后，老师在操场旁边捡到一件深蓝色的外套、一双白色的运动鞋、一副黑色的眼镜和两张地铁卡。请丢东西的同学到办公室来领！**\n\n" +
        "Which item was **NOT** found beside the sports field?",
      options: [
        "A dark-blue jacket",
        "A pair of black glasses",
        "A pair of blue jeans",
        "Two MRT cards",
      ],
      answerIndex: 2,
      hints: [
        "Check each classifier + noun pair in the notice: **一件深蓝色的外套**, **一双白色的运动鞋**, **一副黑色的眼镜**, and **两张地铁卡**.",
        "Notice **一副** (*yí fù*) is the classifier for a pair of glasses (**眼镜**), and **张** (*zhāng*) is for flat cards!",
      ],
      explanation:
        "The teacher found a dark-blue jacket (**一件深蓝色的外套**), a pair of white trainers (**一双白色的运动鞋**), a pair of black glasses (**一副黑色的眼镜**), and two MRT cards (**两张地铁卡**). Blue jeans (**蓝色牛仔裤**) are not mentioned.",
    },
    {
      id: "exam-w2-q18",
      kind: "mcq",
      topicId: "illness",
      guideRef: "at-the-clinic",
      difficulty: "core",
      question:
        "Read Peishan's recovery diary entry:\n\n" +
        "> **星期二晚上我突然肚子疼，还发烧了。星期三早上爸爸带我去医院检查，医生说我吃了不干净的东西，不用打针，只要吃两天药、喝热粥就会好。今天是星期五，我已经完全好了，又能回学校上课了！**\n\n" +
        "According to the diary, what caused Peishan's illness?",
      options: [
        "She got caught in heavy rain without an umbrella.",
        "She stayed up too late revising for an exam.",
        "She exercised for too long in hot weather.",
        "She ate something unclean / unhygienic.",
      ],
      answerIndex: 3,
      hints: [
        "Look closely at what the doctor diagnosed: **医生说我……**.",
        "**不干净的东西** (*bù gānjìng de dōngxi*) literally means 'unclean food/things'.",
      ],
      explanation:
        "The diary states **医生说我吃了不干净的东西** — the doctor said she had eaten something unclean/unhygienic. After taking medicine for two days and eating hot rice porridge (**喝热粥**), she recovered fully by Friday.",
    },
    {
      id: "exam-w2-q19",
      kind: "mcq",
      topicId: "tenses-particles",
      guideRef: "completed-action-le",
      difficulty: "core",
      question:
        "Be careful: Mandarin does **NOT** put **了** after every past-sounding English verb! In which sentence is **了** used **correctly**?",
      options: [
        "我妈妈每天早上都喝了一杯咖啡。",
        "哥哥昨天在书店买了两本中文词典。",
        "北京的冬天很冷了，常常下雪了。",
        "我昨天生病，所以没去了学校。",
      ],
      answerIndex: 1,
      hints: [
        "Eliminate habitual routines (**每天早上…**), **很 + Adjective** descriptions (*很冷了*), and **没 + Verb** negations (*没去了*)!",
        "Look for a **specific completed past event** with a quantified object (**两本中文词典**).",
      ],
      explanation:
        "**哥哥昨天在书店买了两本中文词典** ('Older brother bought two Chinese dictionaries at the bookshop yesterday') is a specific completed past action with a quantified object, where **Verb + 了** is mandatory. Habitual actions (**每天**), **很 + Adj**, and **没 + Verb** do not take completed-action **了**.",
    },
    {
      id: "exam-w2-q20",
      kind: "mcq",
      topicId: "tenses-particles",
      guideRef: "past-experience-guo",
      difficulty: "core",
      question:
        "Compare **去了** vs **去过** in these two sentences:\n\n" +
        "- Sentence 1: **王老师上个月去了中国，现在她还在北京呢！**\n" +
        "- Sentence 2: **李老师以前去过中国，不过她现在在新加坡教我们中文。**\n\n" +
        "Where is **each teacher** right now?",
      options: [
        "Miss Wang is still in Beijing right now, while Miss Li is currently in Singapore.",
        "Both Miss Wang and Miss Li are in Beijing right now.",
        "Miss Wang is in Singapore right now, while Miss Li is in Beijing.",
        "Neither Miss Wang nor Miss Li has ever been to China.",
      ],
      answerIndex: 0,
      hints: [
        "Read the second clause of Sentence 1 (**现在她还在北京呢**) and Sentence 2 (**不过她现在在新加坡**).",
        "Linguistic insight: **去过** implies you went there in the past and **have since returned**, whereas **去了** simply states the trip happened (and she can still be there!).",
      ],
      explanation:
        "**去过** (*qùguo*) expresses a past life experience whose state has ended (Miss Li visited China before and is back in Singapore now), whereas **去了** (*qùle*) marks a completed departure — and the text explicitly confirms Miss Wang is **still in Beijing right now** (**现在她还在北京呢**).",
    },

    // =========================================================================
    // SECTION C: IGCSE PART 3 — EXTENDED MULTI-PARAGRAPH READING (Q21–Q27)
    // =========================================================================
    {
      id: "exam-w2-q21",
      kind: "mcq",
      topicId: "weather",
      guideRef: "reading-weather-reports",
      difficulty: "challenge",
      question:
        "Read this email from Uncle Chen in Kunming (**昆明**) to his niece in Singapore:\n\n" +
        "> **小敏：**\n" +
        "> 听说你们十二月放假的时候想来中国旅游。如果你怕冷，不想去零下十几度的哈尔滨，也不想去刮大风的北京，那就来叔叔住的昆明吧！\n" +
        "> 昆明被称为“春城”，因为这里一年四季都像春天一样暖和。十二月白天的最高气温差不多有十八、十九度，常常是晴天。不过早晚有一点儿凉，最低气温只有七度左右，所以你除了穿长袖衬衫和牛仔裤以外，早晚出门还得穿一件外套。\n\n" +
        "Why is Kunming (**昆明**) nicknamed **“春城”** (*Spring City*), and what clothing advice does Uncle Chen give for December mornings and evenings?",
      options: [
        "Because flowers only bloom in March; Xiaomin should only pack shorts and sandals.",
        "Because it is warm like spring all year round; however, mornings and evenings drop to around 7°C, so besides long-sleeved shirts and jeans she must also wear a jacket when going out early or late.",
        "Because it rains every afternoon like spring; she must pack boots and two umbrellas.",
        "Because Kunming is hotter than Singapore in December; she doesn't need a jacket at all.",
      ],
      answerIndex: 1,
      hints: [
        "Read the explanation right after **因为**: **这里一年四季都像春天一样暖和**.",
        "Then read the **不过** sentence in Paragraph 2 carefully: **早晚有一点儿凉，最低气温只有七度左右…早晚出门还得穿一件外套**.",
      ],
      explanation:
        "Uncle Chen explains that Kunming is called 'Spring City' because it feels warm like spring all year round (**一年四季都像春天一样暖和**). However, mornings and evenings (**早晚**) are a little chilly at around 7°C (**七度左右**), so besides long-sleeved shirts and jeans, she must wear a jacket (**还得穿一件外套**) early and late in the day.",
    },
    {
      id: "exam-w2-q22",
      kind: "mcq",
      topicId: "hobbies",
      guideRef: "cca-hobby-profile",
      difficulty: "challenge",
      question:
        "Read this interview with Year 8 student **张子轩** (*Zhāng Zǐxuān*) in the Tanglin school magazine:\n\n" +
        "> 刚上七年级的时候，子轩只喜欢在家玩电脑游戏，很少运动，所以常常感冒。后来体育老师鼓励他参加学校的羽毛球社。虽然刚开始练球的时候他又累又觉得难，每次打完球手臂都很酸，但是他没有放弃。\n" +
        "> 现在子轩上八年级了，每个星期二和星期四放学以后都会跟队友一起练一个半小时羽毛球。不但他的球打得越来越好，而且身体也比以前健康多了，今年一次病也没生过！除此之外，他还对拍运动照片很感兴趣，常常帮学校校刊拍照。\n\n" +
        "Which statement accurately reflects how Zixuan has changed from Year 7 to Year 8?",
      options: [
        "In Year 7 he was captain of the badminton team, but in Year 8 he quit sport to play computer games.",
        "He gave up badminton after a week because his arms ached too much, and switched to swimming.",
        "In Year 7 he rarely exercised and often caught colds; now in Year 8 he trains in badminton twice a week for 1.5 hours each time, hasn't fallen ill once this year, and also photographs sports for the school magazine.",
        "He practises badminton every day for four hours and dislikes photography.",
      ],
      answerIndex: 2,
      hints: [
        "Contrast Paragraph 1 (**刚上七年级的时候…很少运动，所以常常感冒**) with Paragraph 2 (**现在子轩上八年级了…**).",
        "Notice **今年一次病也没生过** ('has not been ill even once this year') and **对拍运动照片很感兴趣**.",
      ],
      explanation:
        "In Year 7 (**七年级**), Zixuan stayed home playing computer games, rarely exercised, and often caught colds. After persevering with the Badminton Club, in Year 8 (**八年级**) he practises every Tuesday and Thursday after school for 1.5 hours (**一个半小时**), is much healthier (**今年一次病也没生过**), and also takes sports photos for the school magazine (**校刊**).",
    },
    {
      id: "exam-w2-q23",
      kind: "short",
      topicId: "leisure-plans",
      guideRef: "weekend-diary-plan",
      difficulty: "challenge",
      question:
        "Read Yunxi's blog post about her busy weekend:\n\n" +
        "> **上个星期六上午，我先在家帮妈妈打扫房间，再去图书馆借了三本历史书。下午本来打算跟表妹去游泳，可是她突然有点儿咳嗽，我们就改成在她家一边吃水果一边看电影了。下个星期天是我十三岁的生日，爸爸准备带我们全家人去圣淘沙玩一天！**\n\n" +
        "How old will Yunxi turn **next Sunday** (**下个星期天**)? Enter a number.",
      answer: {
        type: "number",
        value: 13,
      },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback: "3 (**三本**) was the number of history books she borrowed at the library — read the final sentence for her birthday age!",
        },
        {
          spec: { type: "number", value: 14 },
          feedback: "Look closely at **下个星期天是我十三岁的生日** — next Sunday IS her 13th birthday!",
        },
      ],
      hints: [
        "Scan down to the final sentence starting with **下个星期天** (next Sunday).",
        "Read the age right before **岁的生日**!",
      ],
      solution: [
        "The final sentence reads **下个星期天是我十三岁的生日** ('Next Sunday is my 13th birthday'), so she turns **13**.",
      ],
    },
    {
      id: "exam-w2-q24",
      kind: "mcq",
      topicId: "three-meals",
      guideRef: "healthy-balanced-diet",
      difficulty: "challenge",
      question:
        "Read Dr Lin's nutrition column comparing three students' daily diets:\n\n" +
        "- **小杰：** 早上只喝一杯冰可乐；中午吃两块炸鸡和薯条；晚上十一点还吃一碗方便面。\n" +
        "- **小慧：** 因为想减肥，所以早饭和午饭都不吃，晚上只吃一个苹果和两片黄瓜。\n" +
        "- **小宇：** 早上七点吃一碗鸡蛋粥和一个包子；中午在学校吃米饭、蒸鱼和炒青菜；下午打完球喝一瓶牛奶和吃一根香蕉；晚上跟家人吃豆腐汤和鸡肉。\n" +
        "> **林医生点评：** 不吃正餐或者吃太多油炸快餐都对中学生长身体不利。只有三餐规律、荤素搭配，才是真正的健康饮食！\n\n" +
        "What is Dr Lin's verdict?",
      options: [
        "Xiaohui has the healthiest diet because eating only apples and cucumber helps teenagers grow.",
        "Xiaojie has the most balanced diet because instant noodles at 11 pm give extra energy.",
        "All three students have unhealthy diets and should stop eating meat and rice.",
        "Both skipping proper meals (like Xiaohui) and eating too much deep-fried fast food (like Xiaojie) harm secondary students' growth; only regular three meals balancing meat/fish and vegetables (like Xiaoyu) are truly healthy.",
      ],
      answerIndex: 3,
      hints: [
        "Read **林医生点评** (*Dr Lin's commentary*) at the bottom carefully!",
        "**不吃正餐** refers to Xiaohui skipping breakfast and lunch; **油炸快餐** refers to Xiaojie's fried fast food; and **三餐规律、荤素搭配** ('regular three meals, meat-and-veg balanced') matches Xiaoyu!",
      ],
      explanation:
        "Dr Lin warns that **不吃正餐** (skipping main meals, as Xiaohui does) and **吃太多油炸快餐** (too much fried fast food, as Xiaojie eats) both harm teenagers' growth (**长身体不利**). Only **三餐规律、荤素搭配** (regular meals balancing protein and vegetables, exemplified by Xiaoyu) is truly healthy.",
    },
    {
      id: "exam-w2-q25",
      kind: "mcq",
      topicId: "sentence-patterns",
      guideRef: "addition-simultaneous",
      difficulty: "challenge",
      question:
        "Read this review of a new community library café in Bukit Timah (**武吉知马**):\n\n" +
        "> **这家新开的书店咖啡馆环境特别安静。周末很多中学生喜欢来这里，一边喝热茶或者果汁，一边写作业。这里的简餐不但味道清淡健康，而且学生凭学生证买单还能打九折！难怪才开了一个月，就已经这么受欢迎了。**\n\n" +
        "If a student shows their **student ID card** (**学生证**) when paying for a **S$20** meal here (**打九折** = 90% of original price, i.e. 10% off), how much do they pay, and why do students love coming here?",
      options: [
        "They pay S$18; it is very quiet for doing homework with a drink, and the light, healthy meals give students 10% off.",
        "They pay S$2; the café plays loud pop music and sells spicy barbecue.",
        "They pay S$11; the café has been open for nine years.",
        "They pay S$20; discounts only apply to teachers on weekdays.",
      ],
      answerIndex: 0,
      hints: [
        "**Important Chinese discount rule:** Unlike English '10% off', Mandarin **打九折** (*dǎ jiǔ zhé*) means you pay **9/10 (90%)** of the price! What is 90% of S$20?",
        "Also check the environment (**特别安静**), activity (**一边喝…一边写作业**), and food (**清淡健康**).",
      ],
      explanation:
        "In Chinese, **打九折** means paying **90%** of the original price (10% discount): 20 × 0.9 = **S$18**. Students love the quiet environment (**特别安静**) where they can sip tea/juice while doing homework (**一边喝…一边写作业**) and enjoy light, healthy meals.",
    },
    {
      id: "exam-w2-q26",
      kind: "mcq",
      topicId: "sentence-patterns",
      guideRef: "combining-clauses",
      difficulty: "challenge",
      question:
        "Read this passage written by a Singaporean student after a two-week school exchange in Hangzhou (**杭州**):\n\n" +
        "> **虽然这次去杭州交流只有短短两个星期，但是我的中文进步得非常快。刚开始的时候，因为杭州人说话比我们的中文老师快一点儿，所以我常常听不懂；不过住在我家的寄宿家庭姐姐每天晚饭以后都耐心地陪我聊天，还带我去菜市场学怎么买菜、讲价。回新加坡以前，我已经能自己用中文在餐厅点菜、买单了！**\n\n" +
        "What helped the writer overcome her initial listening difficulty in Hangzhou?",
      options: [
        "She spoke only English for the entire two weeks and used a translation app at restaurants.",
        "Her host-family older sister patiently chatted with her every evening after dinner and took her to the food market to practise buying vegetables and bargaining.",
        "She stayed inside her hotel room watching television all day.",
        "Her Singapore Mandarin teacher ordered all her meals for her.",
      ],
      answerIndex: 1,
      hints: [
        "First spot the problem: **因为杭州人说话比我们的中文老师快一点儿，所以我常常听不懂**.",
        "Then read what changed after **不过** (*búguò*, however): **住在我家的寄宿家庭姐姐每天晚饭以后都耐心地陪我聊天，还带我去菜市场……**.",
      ],
      explanation:
        "At first she often couldn't understand local speakers because they spoke slightly faster than her teacher (**比我们的中文老师快一点儿**). However (**不过**), her host-family older sister (**寄宿家庭姐姐**) patiently chatted with her after dinner every evening and took her to the market to practise buying groceries and bargaining (**学怎么买菜、讲价**), enabling her to order and pay the bill independently in Mandarin before flying back to Singapore.",
    },
    {
      id: "exam-w2-q27",
      kind: "short",
      topicId: "tenses-particles",
      guideRef: "bu-vs-mei",
      difficulty: "challenge",
      question:
        "Read these four sentences about **Mingzhe's** sports & food experiences very carefully:\n\n" +
        "1. **明哲每个星期三下午都打网球。**\n" +
        "2. **上个星期三因为下大雨，他没打网球。**\n" +
        "3. **他以前吃过北京烤鸭，觉得很好吃。**\n" +
        "4. **不过他从来没吃过榴莲，也不想试！**\n\n" +
        "Which food has Mingzhe **NEVER eaten** in his life and **does not want to try**? Answer in **English** (one word) or **Simplified Hanzi**.",
      answer: {
        type: "text",
        accept: ["榴莲", "liúlián", "durian", "durians"],
        display: "榴莲 (liúlián — durian)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["烤鸭", "北京烤鸭", "roast duck", "peking duck"] },
          feedback: "Look at Sentence 3: **他以前吃过北京烤鸭** means he HAS eaten Peking roast duck before! Check Sentence 4 (**从来没吃过…**)!",
        },
      ],
      hints: [
        "Compare Sentence 3 (**吃过…**) with Sentence 4 (**从来没吃过…，也不想试！**).",
        "Remember Singapore's famous spiky fruit **榴莲** (*liúlián*)!",
      ],
      solution: [
        "Sentence 4 says **不过他从来没吃过榴莲，也不想试！** — he has never eaten **durian** (**榴莲**, *liúlián*) in his life and doesn't want to try it.",
      ],
    },

    // =========================================================================
    // SECTION D: IGCSE 0547 EXTENDED WRITING TASKS — 80–130 CHARACTERS (Q28–Q30)
    // =========================================================================
    {
      id: "exam-w2-q28",
      kind: "written",
      topicId: "greetings-routine",
      guideRef: "introducing-yourself",
      difficulty: "challenge",
      marks: 6,
      question:
        "**IGCSE 0547 Extended Writing Task 1 — Email to a New Pen-Pal in Beijing (给北京笔友的信 — 6 marks):**\n\n" +
        "Write an email of **80–130 Chinese characters** in **Simplified Hanzi** introducing yourself to your new Year 8 pen-pal **王明** (*Wáng Míng*) in Beijing. You **must** cover all **6 points** below:\n\n" +
        "1. Your **name, age, year group** (**八年级**), and that you live in **Singapore** (**新加坡**).\n" +
        "2. How many people are in your **family** (using **口**), who they are, and whether you have any **pets**.\n" +
        "3. Your typical **school-day routine** (at least **two** clock times + actions in **Subject + Time + Verb** order).\n" +
        "4. Your **favourite sport or musical/creative hobby**, how often you do it, and **why** you enjoy it.\n" +
        "5. What you **eat and drink** on a normal school day (mentioning at least one healthy food/drink habit).\n" +
        "6. Use at least **two** connecting structures (e.g. **因为……所以……**, **不但……而且……**, **虽然……但是……**, **一边……一边……**) and end with a friendly question to Wang Ming.",
      hints: [
        "Open warmly: **王明，你好！我叫……，今年十三岁，在新加坡上八年级。**",
        "Check classifiers (**我家有四口人**, **一只小狗**) and **STPV** routine order (**我每天早上六点半起床，七点一刻去上学**).",
        "Include a hobby + reason (**我最喜欢打羽毛球，因为不但好玩，而且对身体很好**), a meal sentence, and a closing question (**你平时喜欢做什么运动呢？**).",
      ],
      modelAnswer:
        "王明，你好！很高兴认识你！我叫林家豪，今年十三岁，现在住在新加坡，上八年级。我家有四口人：爸爸、妈妈、妹妹和我，我们还养了一只可爱的小狗。我每天早上六点半起床，吃两个鸡蛋和喝一杯热牛奶以后，七点一刻坐校车去上学。放学以后，我常常在学校体育馆跟朋友一起打羽毛球。因为打羽毛球不但很有意思，而且对身体很好，所以我最喜欢这项运动。你平时喜欢做什么运动呢？希望快点收到你的回信！",
      markScheme: [
        {
          point: "Introduces name, age, Year 8 (八年级), and living in Singapore (新加坡)",
          keywords: ["岁", "八年级", "新加坡"],
        },
        {
          point: "Describes family size using 口 (几口人) with family members and/or pet detail",
          keywords: ["口人", "爸爸", "妈妈", "哥哥", "姐姐", "弟弟", "妹妹", "狗", "猫"],
        },
        {
          point: "Describes school-day routine with accurate clock times before verbs (点…起床 / 上学 / 放学 / 睡觉)",
          keywords: ["点", "起床", "上学", "放学", "睡觉"],
        },
        {
          point: "Explains favourite sport or creative hobby with frequency and a clear reason",
          keywords: ["喜欢", "打", "踢", "游泳", "弹", "画画", "看书", "常常"],
        },
        {
          point: "Mentions daily meals/drinks accurately with meal verbs and container classifiers",
          keywords: ["吃", "喝", "早饭", "午饭", "晚饭", "牛奶", "面包", "鸡蛋", "米饭", "面条", "蔬菜", "水果"],
        },
        {
          point: "Uses paired connectors naturally (因为…所以 / 不但…而且 / 虽然…但是) and asks Wang Ming a closing question",
          keywords: ["因为", "所以", "不但", "而且", "虽然", "但是", "吗", "呢"],
        },
      ],
      commonError:
        "Writing *我家有四个人* instead of **四口人**, putting clock times at the end of sentences (*我起床在六点半*), or connecting clauses with **和**.",
    },
    {
      id: "exam-w2-q29",
      kind: "written",
      topicId: "seasons",
      guideRef: "describing-favourite-season",
      difficulty: "challenge",
      marks: 6,
      question:
        "**IGCSE 0547 Extended Writing Task 2 — Climate, Seasons & Travel Essay (新加坡与四季之旅 — 6 marks):**\n\n" +
        "Your school Mandarin magazine is running a competition titled **《我最喜欢的季节》** (*My Favourite Season*). Write an article of **80–130 Chinese characters** in **Simplified Hanzi** covering **all 6 points**:\n\n" +
        "1. Describe **Singapore's weather and climate** across the year (e.g. hot, humid **潮湿**, rainy, no winter).\n" +
        "2. Compare Singapore's climate with **another city or country** you have visited (**去过**) or want to visit using a **比** or **没有** comparison (with NO **很** after **比**!).\n" +
        "3. State clearly **which season you like best** (**我最喜欢……**) and **why**.\n" +
        "4. Describe what **clothes and accessories** people wear in that season, distinguishing **穿** and **戴** accurately.\n" +
        "5. Describe at least **two seasonal activities** you did (**了 / 过**) or **plan to do** (**打算**) there.\n" +
        "6. Express how that season makes you feel and maintain accurate **STPV** word order throughout.",
      hints: [
        "Start by describing Singapore: **我住在新加坡，这里一年四季都很热，也很潮湿，常常下大雨。**",
        "Add a clean **比** sentence + **去过**: **去年十二月我跟家人去过北京，北京的冬天比新加坡冷得多！**",
        "Use **穿** for coats/jumpers and **戴** for hats/scarves/gloves (**穿厚大衣和毛衣，还要戴帽子、围巾和手套**), plus seasonal activities (**滑雪、堆雪人** or **看红叶、爬山**) and future plans (**明年我打算再去一次**).",
      ],
      modelAnswer:
        "我住在新加坡，这里一年四季都很热，也很潮湿，没有冬天，不过下午常常下雷阵雨。我最喜欢的季节是秋天，因为秋天不冷也不热，非常凉快舒服。去年十月我跟爸妈去过北京旅游，北京的秋天比新加坡凉快得多！在那里，我每天穿着长袖衬衫、牛仔裤和一件薄外套，有时候还戴一顶帽子。我们不但去公园看了美丽的红叶，而且还一起去爬山、吃北京烤鸭。明年假期我打算再去中国看冬天的雪，一定特别好玩！",
      markScheme: [
        {
          point: "Describes Singapore's year-round tropical weather accurately (热, 潮湿, 下雨, 没有冬天)",
          keywords: ["新加坡", "四季", "热", "潮湿", "下雨", "冬天"],
        },
        {
          point: "Uses a grammatical 比 or 没有 climate comparison (e.g. 比新加坡冷得多 / 没有新加坡那么热 — no 很 with 比)",
          keywords: ["比", "没有", "得多", "一点儿"],
        },
        {
          point: "States favourite season clearly (最喜欢春天/夏天/秋天/冬天) with a logical reason",
          keywords: ["最喜欢", "春天", "夏天", "秋天", "冬天", "因为"],
        },
        {
          point: "Distinguishes 穿 (garments) and 戴 (accessories) with accurate clothing vocabulary",
          keywords: ["穿", "戴", "外套", "大衣", "毛衣", "衬衫", "帽子", "围巾", "手套", "眼镜"],
        },
        {
          point: "Includes past experience/completed action (去过 / 了) and/or future plan (打算) for seasonal activities",
          keywords: ["去过", "了", "打算", "滑雪", "堆雪人", "爬山", "游泳", "看花", "红叶"],
        },
        {
          point: "Expresses personal feelings/evaluation clearly with natural connectors and STPV order",
          keywords: ["舒服", "开心", "高兴", "好玩", "不但", "而且", "虽然", "但是"],
        },
      ],
      commonError:
        "Writing *北京比新加坡很冷* (putting **很** inside a **比** comparison) or *穿帽子和围巾* (using **穿** instead of **戴** for accessories).",
    },
    {
      id: "exam-w2-q30",
      kind: "written",
      topicId: "eating-out",
      guideRef: "restaurant-review",
      difficulty: "challenge",
      marks: 6,
      question:
        "**IGCSE 0547 Extended Writing Task 3 — Celebrating a Birthday Meal Out (难忘的生日晚餐 — 6 marks):**\n\n" +
        "Write a blog post of **80–130 Chinese characters** in **Simplified Hanzi** recounting a meal out at a restaurant or hawker centre in Singapore to celebrate a family member's birthday. Cover **all 6 points**:\n\n" +
        "1. **When, with whom, and where** you went (using **STPV** + **跟……一起**).\n" +
        "2. **What food and drinks** your family ordered (using at least **three** accurate classifiers such as **盘, 碗, 只, 杯, 壶, 瓶**).\n" +
        "3. Describe the **flavours** of the dishes (e.g. **甜, 酸, 辣, 咸, 清淡, 香, 好吃 / 好喝**) and any dietary preference.\n" +
        "4. Mention **how much it cost** or how your parents **paid the bill** (**买单 / 刷卡 / 用手机付钱**), evaluating whether it was expensive or good value.\n" +
        "5. Contrast eating out with **healthy eating at home** or mention what you **plan** (**打算**) to cook/do next time.\n" +
        "6. Use completed-action **了** accurately and include at least one upgrading structure (**不但……而且……** or **虽然……但是……**).",
      hints: [
        "Open with **STPV**: **上个星期天晚上，我跟爸爸、妈妈和妹妹一起去乌节路的一家中餐厅给妈妈过生日。**",
        "Pack in rich classifiers & flavours: **我们点了半只烤鸭、一盘西红柿炒鸡蛋、一碗豆腐汤和一壶热绿茶。烤鸭又香又好吃，豆腐汤很清淡。**",
        "Mention paying the bill (**爸爸用手机买单，一共花了八十新币，不但好吃而且不算贵**) and your next-time plan (**下次爸爸过生日，我打算在家给他做长寿面！**).",
      ],
      modelAnswer:
        "上个星期天晚上，我跟爸爸和妹妹一起去牛车水的一家中餐厅给妈妈过生日。我们点了半只北京烤鸭、一盘西红柿炒鸡蛋、一盘清炒青菜、四碗米饭和一壶热绿茶。因为妈妈不能吃太辣，所以我们点的菜都很清淡。烤鸭皮脆肉香，西红柿炒鸡蛋酸酸甜甜的，非常好吃，绿茶也很好喝！吃饱以后，爸爸用手机付钱买单，一共花了七十八新币。那家餐厅的菜不但新鲜好吃，而且价钱也不贵。下个月爸爸过生日的时候，我打算自己在家给他做一碗鸡蛋面！",
      markScheme: [
        {
          point: "Sets the scene in accurate STPV order (Time + 跟 family 一起 +去 restaurant/hawker centre + birthday purpose)",
          keywords: ["星期", "晚上", "中午", "跟", "一起", "餐厅", "饭馆", "小贩中心", "生日"],
        },
        {
          point: "Lists ordered dishes and drinks with accurate classifiers (盘, 碗, 只, 杯, 壶, 瓶) and 两 where needed",
          keywords: ["点", "盘", "碗", "只", "杯", "壶", "瓶"],
        },
        {
          point: "Describes flavours accurately (酸, 甜, 辣, 咸, 清淡, 香) distinguishing 好吃 (food) and 好喝 (drinks)",
          keywords: ["甜", "酸", "辣", "清淡", "香", "好吃", "好喝"],
        },
        {
          point: "Includes bill/price/payment detail (买单 / 结账 / 花了…新币/块 / 刷卡 / 手机付钱 / 贵 / 便宜)",
          keywords: ["买单", "结账", "付钱", "刷卡", "新币", "块", "元", "便宜", "不贵"],
        },
        {
          point: "Mentions future plan (打算) or healthy home-cooking comparison",
          keywords: ["打算", "下次", "健康", "在家", "做饭", "做"],
        },
        {
          point: "Uses completed-action 了 and paired connectors (不但…而且 / 虽然…但是 / 因为…所以) accurately",
          keywords: ["了", "不但", "而且", "虽然", "但是", "因为", "所以"],
        },
      ],
      commonError:
        "Using **好吃** to describe drinks like tea or juice instead of **好喝**, or writing *二碗米饭* instead of **两碗米饭**.",
    },
  ],
};
