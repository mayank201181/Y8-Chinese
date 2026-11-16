import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "time-measure-words-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "dates-days",
      question: "Write **'25th December'** in Mandarin (Hanzi or Pinyin, using **号** or **日**):",
      answer: {
        type: "text",
        accept: [
          "十二月二十五号",
          "十二月二十五日",
          "shí'èryuè èrshíwǔ hào",
          "shí'èryuè èrshíwǔ rì",
          "shí èr yuè èr shí wǔ hào",
          "shí èr yuè èr shí wǔ rì",
        ],
        display: "十二月二十五日 / 十二月二十五号",
      },
      traps: [
        {
          spec: { type: "text", accept: ["二十五号十二月", "二十五日十二月"] },
          feedback: "Big-to-small order! Put Month 12 (十二月) BEFORE the 25th (二十五号).",
        },
      ],
      hints: [
        "Big-to-small order: December (Month 12 = 十二月) + 25th (二十五号 / 二十五日).",
      ],
      solution: [
        "December = **十二月**, 25th = **二十五号 / 二十五日** → **十二月二十五日**.",
      ],
    },
    {
      id: "time-measure-words-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "dates-days",
      question: "If **今天** is **星期天** (*Sunday*), what day of the week was **昨天** (*yesterday*)?",
      options: [
        "星期六 (Saturday)",
        "星期一 (Monday)",
        "星期五 (Friday)",
        "星期二 (Tuesday)",
      ],
      answerIndex: 0,
      hints: [
        "昨天 means yesterday (1 day before today).",
      ],
      explanation:
        "**星期六 (Saturday)** is one day before **星期天** (Sunday). **星期一** (Monday) would be **明天** (tomorrow).",
    },
    {
      id: "time-measure-words-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "er-vs-liang",
      question: "Fill in the blank with **二** or **两**: **妈妈买了___本英汉词典。** (*Mum bought two English-Chinese dictionaries.*)",
      answer: {
        type: "text",
        accept: ["两", "liǎng"],
        display: "两 (liǎng)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["二", "èr"] },
          feedback: "Standalone '2' directly before a measure word like 本 ALWAYS uses 两 (liǎng), never 二!",
        },
      ],
      hints: [
        "Look right after the blank: 本 (běn) is a measure word!",
        "Standalone 2 before a measure word always takes 两.",
      ],
      solution: [
        "Before the classifier **本**, standalone 'two' is **两** (*liǎng*): **两本英汉词典**.",
      ],
    },
    {
      id: "time-measure-words-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "er-vs-liang",
      question: "How do you say **'the second day / the next day'** in Mandarin?",
      options: [
        "第两天",
        "第二天",
        "两个天",
        "二个天",
      ],
      answerIndex: 1,
      hints: [
        "Ordinals ('the 2nd…') start with 第 (dì).",
        "第 ALWAYS pairs with 二, never 两!",
      ],
      explanation:
        "**第二天** (*dì-èr tiān*) means the second day (or the following day in a story). ***第两*** never exists, and **天** never takes **个**.",
    },
    {
      id: "time-measure-words-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      guideRef: "core-measure-words",
      question: "Fill in the missing container measure word (Hanzi or Pinyin): **请给我一___绿茶。** (*Please give me a cup of green tea.*)",
      answer: {
        type: "text",
        accept: ["杯", "bēi"],
        display: "杯 (bēi)",
      },
      hints: [
        "Which classifier means 'cup / glass of' (wood radical 木 + 不)?",
      ],
      solution: [
        "**一杯绿茶** (*yì bēi lǜchá*) uses **杯** (*bēi*, cup/glass).",
      ],
    },
    {
      id: "time-measure-words-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "clothing-animal-classifiers",
      question: "Choose the right measure words for **'one shirt and one pair of trousers'**: **一___衬衫和一___裤子**",
      options: [
        "件 ， 双",
        "条 ， 件",
        "件 ， 条",
        "张 ， 条",
      ],
      answerIndex: 2,
      hints: [
        "Shirts (衬衫) are upper-body tops; trousers (裤子) are one long connected garment.",
        "Never use 双 for trousers!",
      ],
      explanation:
        "**件 ， 条** gives **一件衬衫** (top = **件**) and **一条裤子** (long garment = **条**, never **双**).",
    },
    {
      id: "time-measure-words-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "clothing-animal-classifiers",
      question: "Translate into Mandarin (Hanzi or Pinyin): **'four tickets'** (use **票** *piào*):",
      answer: {
        type: "text",
        accept: ["四张票", "sì zhāng piào"],
        display: "四张票 (sì zhāng piào)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["四本票", "四个票"] },
          feedback: "Tickets are flat slips of card/paper — use the flat-surface classifier 张 (zhāng): 四张票!",
        },
      ],
      hints: [
        "Tickets (票) are flat cards/sheets.",
        "Use the flat-surface classifier 张 (zhāng) between 四 and 票!",
      ],
      solution: [
        "Number **四** + flat classifier **张** + **票** = **四张票** (*sì zhāng piào*).",
      ],
    },
    {
      id: "time-measure-words-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "clothing-animal-classifiers",
      question: "Which phrase accurately translates **'two pairs of chopsticks'**?",
      options: [
        "两条筷子",
        "二双筷子",
        "两只筷子",
        "两双筷子",
      ],
      answerIndex: 3,
      hints: [
        "A pair of chopsticks uses 双 (shuāng), whereas 只 counts single sticks!",
        "Check 'two' before 双: 两双 or *二双*?",
      ],
      explanation:
        "**两双筷子** (*liǎng shuāng kuàizi*) means two pairs of chopsticks (4 sticks total). **两只筷子** means only two individual chopsticks (= 1 pair), and ***二双*** breaks the **两** rule.",
    },
    {
      id: "time-measure-words-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "demonstratives-duration",
      question: "Translate into Mandarin (Hanzi or Pinyin): **'this pair of shoes'** (use **这** + classifier + **鞋**):",
      answer: {
        type: "text",
        accept: ["这双鞋", "zhè shuāng xié", "这双鞋子", "zhè shuāng xiézi"],
        display: "这双鞋 (zhè shuāng xié)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["这鞋", "这个鞋"] },
          feedback: "Include the pair classifier 双 (shuāng) right after 这: 这双鞋!",
        },
      ],
      hints: [
        "Demonstrative 这 MUST be followed by a measure word.",
        "A pair of shoes uses 双 (shuāng).",
      ],
      solution: [
        "**这** (*zhè*) + **双** (*shuāng*) + **鞋** (*xié*) = **这双鞋**.",
      ],
    },
    {
      id: "time-measure-words-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "demonstratives-duration",
      question: "Translate into Mandarin (Hanzi or Pinyin): **'three days'** (a duration of 3 days):",
      answer: {
        type: "text",
        accept: ["三天", "sān tiān"],
        display: "三天 (sān tiān)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["三个天", "sān gè tiān"] },
          feedback: "Trap alert! 天 (day) is self-measuring and NEVER takes 个 — just write 三天!",
        },
        {
          spec: { type: "text", accept: ["三号", "三日"] },
          feedback: "三号 / 三日 means 'the 3rd of the month' (a date), whereas 'three days' is 三天!",
        },
      ],
      hints: [
        "Use 天 (tiān) for day durations.",
        "Remember: 年, 天, and 分钟 are self-measuring — NO 个 allowed!",
      ],
      solution: [
        "**天** measures itself directly after a number: **三天** (*sān tiān*).",
      ],
    },
  ],
  papers: [
    {
      id: "time-measure-words-p1",
      title: "Practice Paper 1 · Dates, Numbers & Everyday Classifiers",
      questions: [
        {
          id: "time-measure-words-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "dates-days",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'What is today's date?'** (Use **今天** and **几月几号**.)",
          answer: {
            type: "text",
            accept: [
              "今天几月几号",
              "今天几月几号？",
              "今天是几月几号",
              "今天是几月几号？",
              "Jīntiān jǐ yuè jǐ hào",
              "Jīntiān shì jǐ yuè jǐ hào",
            ],
            display: "今天几月几号？ (Jīntiān jǐ yuè jǐ hào?)",
          },
          hints: [
            "Start with 今天 (today), followed by 几月几号 (what month, what date).",
          ],
          solution: [
            "**今天几月几号？** (*Jīntiān jǐ yuè jǐ hào?*) or **今天是几月几号？**",
          ],
        },
        {
          id: "time-measure-words-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "dates-days",
          question: "Write **'Wednesday, 1st May'** in Mandarin using **号** (remember Big → Small!):",
          answer: {
            type: "text",
            accept: [
              "五月一号星期三",
              "wǔ yuè yī hào xīngqīsān",
            ],
            display: "五月一号星期三 (wǔ yuè yī hào xīngqīsān)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["星期三五月一号", "一号五月星期三"] },
              feedback: "Zoom from BIGGEST to SMALLEST: Month (五月) → Date (一号) → Weekday (星期三)!",
            },
          ],
          hints: [
            "Order: May (五月) → 1st (一号) → Wednesday (星期三).",
          ],
          solution: [
            "Big-to-small: **五月** + **一号** + **星期三** = **五月一号星期三**.",
          ],
        },
        {
          id: "time-measure-words-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "dates-days",
          question: "Read: **今天是八月七号星期五，后天是新加坡国庆节。** Which day of the week is National Day? Answer in **Mandarin** (e.g. `星期一`):",
          answer: {
            type: "text",
            accept: ["星期天", "星期日", "礼拜天", "xīngqītiān", "xīngqīrì"],
            display: "星期天 / 星期日 (Sunday)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["星期七", "xīngqīqī"] },
              feedback: "Sunday is NEVER *星期七*! Always write 星期天 or 星期日.",
            },
          ],
          hints: [
            "Today (今天) is Friday (星期五). 后天 means 2 days after today!",
            "2 days after Friday is Sunday — watch out for the Sunday rule!",
          ],
          solution: [
            "Friday (**星期五**) + 2 days (**后天**) = Sunday (**星期天 / 星期日**).",
          ],
        },
        {
          id: "time-measure-words-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "er-vs-liang",
          question: "Write the number **208** in Mandarin characters:",
          answer: {
            type: "text",
            accept: ["两百零八", "二百零八", "liǎngbǎi líng bā", "èrbǎi líng bā"],
            display: "两百零八 / 二百零八",
          },
          traps: [
            {
              spec: { type: "text", accept: ["两百八", "二百八"] },
              feedback: "Careful! 两百八 means 280 in spoken Chinese — include 零 (líng) for the zero in 208!",
            },
          ],
          hints: [
            "2 hundreds = 两百 (or 二百).",
            "Include 零 (líng) for the empty tens column before 八!",
          ],
          solution: [
            "200 (**两百 / 二百**) + internal zero (**零**) + 8 (**八**) = **两百零八**.",
          ],
        },
        {
          id: "time-measure-words-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "er-vs-liang",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'12 people'**",
          answer: {
            type: "text",
            accept: ["十二个人", "shí'èr gè rén", "shí èr gè rén", "shí'èr ge rén", "shí èr ge rén"],
            display: "十二个人 (shí'èr gè rén)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["十两个人", "十二人"] },
              feedback: "12 always uses 二 (十二), and people need the classifier 个: 十二个人!",
            },
          ],
          hints: [
            "12 is a multi-digit number ending in 2, so keep 二 (十二).",
            "Insert the general classifier 个 before 人!",
          ],
          solution: [
            "**十二** (12) + **个** (classifier) + **人** (people) = **十二个人**.",
          ],
        },
        {
          id: "time-measure-words-p1-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "core-measure-words",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'two bowls of cooked rice'** (use **米饭**):",
          answer: {
            type: "text",
            accept: ["两碗米饭", "liǎng wǎn mǐfàn"],
            display: "两碗米饭 (liǎng wǎn mǐfàn)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["二碗米饭", "liǎng bēi mǐfàn", "两杯米饭"] },
              feedback: "Use 两 (not 二) before the bowl classifier 碗 (wǎn): 两碗米饭!",
            },
          ],
          hints: [
            "Standalone '2' before a classifier uses 两, and 'bowl' is 碗 (wǎn).",
          ],
          solution: [
            "**两** + **碗** + **米饭** = **两碗米饭** (*liǎng wǎn mǐfàn*).",
          ],
        },
        {
          id: "time-measure-words-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "core-measure-words",
          question: "Read this hawker-centre receipt:\n> **一盘鸡饭（五块）、两碗牛肉面（十二块）、三杯冰茶（六块）。**\n\nHow many **food and drink items** were ordered in total (counting plates + bowls + cups)? (Give a single number.)",
          answer: {
            type: "number",
            value: 6,
          },
          hints: [
            "Ignore the prices in brackets (五块, 十二块, 六块)!",
            "Add 一盘 (1) + 两碗 (2) + 三杯 (3).",
          ],
          solution: [
            "1 plate (**一盘**) + 2 bowls (**两碗**) + 3 cups (**三杯**) = **6** items in total.",
          ],
        },
        {
          id: "time-measure-words-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-animal-classifiers",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'two white shirts'** (use **白衬衫**):",
          answer: {
            type: "text",
            accept: ["两件白衬衫", "两件白色的衬衫", "liǎng jiàn bái chènshān"],
            display: "两件白衬衫 (liǎng jiàn bái chènshān)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["两条白衬衫", "二件白衬衫"] },
              feedback: "Shirts are tops, so use 件 (jiàn) with 两: 两件白衬衫!",
            },
          ],
          hints: [
            "Use 两 for '2' before a classifier.",
            "Shirts (衬衫) are upper-body tops, so choose 件 (jiàn)!",
          ],
          solution: [
            "**两** + **件** + **白衬衫** = **两件白衬衫** (*liǎng jiàn bái chènshān*).",
          ],
        },
        {
          id: "time-measure-words-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-animal-classifiers",
          question: "Fill in the missing classifier (single Hanzi or Pinyin): **房间里有一___大桌子。** (*There is one big table in the room.*)",
          answer: {
            type: "text",
            accept: ["张", "zhāng"],
            display: "张 (zhāng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["本", "běn", "条", "tiáo"] },
              feedback: "Tables have a flat tabletop surface — use 张 (zhāng)!",
            },
          ],
          hints: [
            "Think about the flat surface of a tabletop!",
            "Which classifier covers paper, tickets, photos, beds, and tables?",
          ],
          solution: [
            "Flat-topped furniture like **桌子** (table) and **床** (bed) takes **张** (*zhāng*).",
          ],
        },
        {
          id: "time-measure-words-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "demonstratives-duration",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'that skirt'** (use **那** + classifier + **裙子**):",
          answer: {
            type: "text",
            accept: ["那条裙子", "nà tiáo qúnzi"],
            display: "那条裙子 (nà tiáo qúnzi)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["那裙子", "哪条裙子"] },
              feedback: "Use 那 (nà, that — no 口!) + classifier 条 (for skirts/trousers) + 裙子: 那条裙子!",
            },
          ],
          hints: [
            "Use 那 (nà, that) rather than 哪 (which).",
            "Skirts (裙子) take the long/lower-body garment classifier 条 (tiáo)!",
          ],
          solution: [
            "**那** + **条** + **裙子** = **那条裙子** (*nà tiáo qúnzi*).",
          ],
        },
        {
          id: "time-measure-words-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "demonstratives-duration",
          question: "Unscramble into a grammatical Mandarin sentence: **中文 / 一个小时 / 我 / 学 / 每天** (*I study Chinese for one hour every day.*)",
          answer: {
            type: "text",
            accept: [
              "我每天学一个小时中文",
              "我每天学一个小时中文。",
              "每天我学一个小时中文",
              "每天我学一个小时中文。",
              "Wǒ měitiān xué yí gè xiǎoshí Zhōngwén",
              "Wǒ měitiān xué yī gè xiǎoshí Zhōngwén",
              "Wǒ měitiān xué yí ge xiǎoshí Zhōngwén",
              "Wǒ měitiān xué yī ge xiǎoshí Zhōngwén",
            ],
            display: "我每天学一个小时中文。 (Wǒ měitiān xué yí gè xiǎoshí Zhōngwén.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我每天一个小时学中文"] },
              feedback: "一个小时 is a DURATION ('for one hour'), so place it AFTER the verb 学, not before!",
            },
          ],
          hints: [
            "Start with 我每天 (I every day) + verb 学 (study).",
            "Place the duration 一个小时 AFTER 学 and BEFORE the object 中文!",
          ],
          solution: [
            "**我每天** + **学** (verb) + **一个小时** (duration) + **中文** (object) = **我每天学一个小时中文。**",
          ],
        },
        {
          id: "time-measure-words-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "demonstratives-duration",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'twenty minutes'** (a duration of 20 minutes):",
          answer: {
            type: "text",
            accept: ["二十分钟", "èrshí fēnzhōng"],
            display: "二十分钟 (èrshí fēnzhōng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["二十个分钟", "两十分钟"] },
              feedback: "20 uses 二十 (never *两十*), and 分钟 NEVER takes 个: 二十分钟!",
            },
          ],
          hints: [
            "20 is 二十 (èrshí).",
            "Duration 'minutes' is 分钟 (fēnzhōng), with NO 个!",
          ],
          solution: [
            "**二十** + **分钟** (self-measuring, no **个**) = **二十分钟** (*èrshí fēnzhōng*).",
          ],
        },
        {
          id: "time-measure-words-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "dates-days",
          marks: 5,
          question:
            "**IGCSE 0547 Roleplay Task — Dates, Birthdays & Study Time:**\nAnswer your examiner's **5 questions** in full, natural Mandarin sentences:\n1. **请问，今天几月几号？星期几？**\n2. **你的生日是几月几号？**\n3. **你书包里有几本书？**\n4. **你每天学多长时间中文？**\n5. **这个周末你打算买什么衣服？（用量词！）**",
          hints: [
            "Keep Year → Month → Date → Weekday order in questions 1 and 2.",
            "Put the duration AFTER 学 in question 4 (e.g. 学一个小时中文), and use 件/条/双 accurately in question 5!",
          ],
          modelAnswer:
            "1. 今天是十一月十七号星期二。\n2. 我的生日是五月十号。\n3. 我书包里有四本书和一本词典。\n4. 我每天学一个小时中文。\n5. 这个周末我打算买一件白衬衫和一双运动鞋。",
          markScheme: [
            { point: "Gives today's month, date (号/日) and weekday (星期) in big-to-small order.", keywords: ["月", "号", "日", "星期"] },
            { point: "States birthday clearly using 生日 + 月 + 号/日.", keywords: ["生日", "月"] },
            { point: "Counts books in schoolbag using the classifier 本 (and 两 if 2).", keywords: ["本", "书"] },
            { point: "Places study duration AFTER 学 (e.g. 学一个小时/三十分钟中文).", keywords: ["小时", "分钟", "中文"] },
            { point: "Names clothing to buy with accurate classifier 件, 条, or 双.", keywords: ["件", "条", "双"] },
          ],
          commonError: "Putting 一个小时 before 学 (*我一个小时学中文*) or forgetting classifiers on books and clothes.",
        },
        {
          id: "time-measure-words-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "clothing-animal-classifiers",
          marks: 5,
          question:
            "**IGCSE 0547 Diary Entry (~80–100 Chinese characters) — 生日购物与晚餐 (Birthday Shopping & Dinner):**\nWrite a diary entry about celebrating a family member's birthday in Singapore. Include:\n- The full date and day of the week of the birthday;\n- Where you went shopping (e.g. **乌节路** Orchard Road) and **how long** you travelled by MRT;\n- At least **three gifts/clothes** you bought using **different measure words** (**件 / 条 / 双 / 本 / 张**);\n- What dishes and drinks your family ordered for birthday dinner using **盘 / 碗 / 杯**;\n- How everyone felt at the end of the day.",
          hints: [
            "Start with a diary header or opening sentence giving Year/Month/Date/Weekday!",
            "Showcase at least 5 distinct classifiers across gifts and dinner to impress the IGCSE examiner.",
          ],
          modelAnswer:
            "昨天是十月十八号星期天，是我妈妈的生日。上午十点我们一家人坐地铁去乌节路买东西，坐地铁要二十五分钟。我给妈妈买了一本书，爸爸买了两件漂亮的衬衫和一条蓝裙子，哥哥买了一双运动鞋。晚上七点，我们在饭馆点了两盘饺子、四碗长寿面和四杯绿茶。妈妈非常高兴，我们也玩得很开心！",
          markScheme: [
            { point: "States date and weekday in accurate big-to-small Mandarin order.", keywords: ["月", "号", "日", "星期"] },
            { point: "Mentions shopping place and travel duration (分钟/小时).", keywords: ["分钟", "小时", "地铁", "乌节路"] },
            { point: "Uses at least two accurate gift/clothing classifiers (本, 件, 条, 双, 张).", keywords: ["本", "件", "条", "双", "张"] },
            { point: "Orders birthday dinner using container classifiers (盘, 碗, 杯).", keywords: ["盘", "碗", "杯"] },
            { point: "Concludes with natural feelings (高兴 / 开心) and accurate 二 vs 两 throughout.", keywords: ["高兴", "开心"] },
          ],
          commonError: "Writing *二件衬衫* instead of 两件衬衫, or *一双裙子* instead of 一条裙子.",
        },
      ],
    },
    {
      id: "time-measure-words-p2",
      title: "Practice Paper 2 · Classifiers in Action, Numbers & Duration Contrasts",
      questions: [
        {
          id: "time-measure-words-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "dates-days",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'the day before yesterday'** (2 characters):",
          answer: {
            type: "text",
            accept: ["前天", "qiántiān"],
            display: "前天 (qiántiān)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["昨天", "zuótiān"] },
              feedback: "昨天 is 'yesterday' (1 day ago). 'The day before yesterday' (2 days ago) uses 前 (front/earlier): 前天!",
            },
          ],
          hints: [
            "Use 前 (qián, earlier/before) + 天 (tiān, day).",
          ],
          solution: [
            "**前天** (*qiántiān*) means the day before yesterday (2 days ago).",
          ],
        },
        {
          id: "time-measure-words-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "dates-days",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'next year'** (2 characters):",
          answer: {
            type: "text",
            accept: ["明年", "míngnián"],
            display: "明年 (míngnián)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["下个年", "下年"] },
              feedback: "Never say *下个年*! Pair 明 (next, as in 明天) with 年: 明年!",
            },
          ],
          hints: [
            "Just as 明天 means tomorrow, ___年 means next year!",
          ],
          solution: [
            "**明年** (*míngnián*) means next year.",
          ],
        },
        {
          id: "time-measure-words-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "er-vs-liang",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'February'** (the calendar month, NOT 'two months'!):",
          answer: {
            type: "text",
            accept: ["二月", "èryuè"],
            display: "二月 (èryuè)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["两月", "两个月"] },
              feedback: "两个月 means 'for two months', and *两月* doesn't exist! February is Month #2: 二月!",
            },
          ],
          hints: [
            "Calendar months are numbered 1–12 + 月 with NO 个.",
            "Month #2 ALWAYS uses 二!",
          ],
          solution: [
            "February = Month 2 = **二月** (*èryuè*).",
          ],
        },
        {
          id: "time-measure-words-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "er-vs-liang",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'for two months'** (a duration of 2 months):",
          answer: {
            type: "text",
            accept: ["两个月", "liǎng gè yuè", "liǎng ge yuè"],
            display: "两个月 (liǎng gè yuè)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["二月", "二个月"] },
              feedback: "二月 means February! Counting 2 months requires 两 + classifier 个: 两个月!",
            },
          ],
          hints: [
            "Counting months requires the measure word 个 between the number and 月.",
            "Standalone '2' before 个 must be 两!",
          ],
          solution: [
            "**两** + **个** + **月** = **两个月** (*liǎng gè yuè*, two months).",
          ],
        },
        {
          id: "time-measure-words-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "core-measure-words",
          question: "Fill in the missing classifier (single Hanzi or Pinyin): **我买了一___苹果汁。** (*I bought a bottle of apple juice.*)",
          answer: {
            type: "text",
            accept: ["瓶", "píng"],
            display: "瓶 (píng)",
          },
          hints: [
            "Look for the Mandarin classifier specifically meaning 'bottle of'.",
            "Its Pinyin is píng (2nd tone), with 瓦 on the right!",
          ],
          solution: [
            "**瓶** (*píng*) means 'bottle of': **一瓶苹果汁**.",
          ],
        },
        {
          id: "time-measure-words-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-animal-classifiers",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'three little fish'** (use **小鱼** *xiǎoyú*):",
          answer: {
            type: "text",
            accept: ["三条小鱼", "sān tiáo xiǎoyú"],
            display: "三条小鱼 (sān tiáo xiǎoyú)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["三只小鱼", "三个小鱼"] },
              feedback: "Fish have long, sleek swimming bodies — always use 条 (tiáo) for fish: 三条小鱼!",
            },
          ],
          hints: [
            "Which shape classifier matches long, narrow, flexible things like trousers, roads, and fish?",
            "Put 条 (tiáo) between 三 and 小鱼!",
          ],
          solution: [
            "**三** + **条** + **小鱼** = **三条小鱼** (*sān tiáo xiǎoyú*).",
          ],
        },
        {
          id: "time-measure-words-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-animal-classifiers",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'two little birds'** (use **小鸟** *xiǎoniǎo*):",
          answer: {
            type: "text",
            accept: ["两只小鸟", "liǎng zhī xiǎoniǎo"],
            display: "两只小鸟 (liǎng zhī xiǎoniǎo)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["二只小鸟", "两条小鸟"] },
              feedback: "Use 两 (not 二) + small-animal/bird classifier 只 (zhī): 两只小鸟!",
            },
          ],
          hints: [
            "Standalone '2' before a classifier uses 两.",
            "Birds take the critter classifier 只 (zhī).",
          ],
          solution: [
            "**两** + **只** + **小鸟** = **两只小鸟** (*liǎng zhī xiǎoniǎo*).",
          ],
        },
        {
          id: "time-measure-words-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "demonstratives-duration",
          question: "Fix the missing-classifier mistake in ***你喜欢哪衣服？*** and write the complete grammatical Mandarin question (using **件**):",
          answer: {
            type: "text",
            accept: [
              "你喜欢哪件衣服",
              "你喜欢哪件衣服？",
              "Nǐ xǐhuan nǎ jiàn yīfu",
            ],
            display: "你喜欢哪件衣服？ (Nǐ xǐhuan nǎ jiàn yīfu?)",
          },
          hints: [
            "哪 (which) MUST be followed by a measure word before 衣服!",
            "Insert 件 right between 哪 and 衣服.",
          ],
          solution: [
            "Add the clothing classifier **件** after **哪**: **你喜欢哪件衣服？**",
          ],
        },
        {
          id: "time-measure-words-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "demonstratives-duration",
          question: "Read: **哥哥每天晚上七点开始看书，看到八点半。** For how many **minutes** in total does the older brother read each evening? (Give a number.)",
          answer: {
            type: "number",
            value: 90,
          },
          hints: [
            "Start time: 晚上七点 = 7:00 pm; end time: 八点半 = 8:30 pm.",
            "Convert 1 hour 30 minutes into total minutes!",
          ],
          solution: [
            "From 7:00 pm (**七点**) to 8:30 pm (**八点半**) is 1 hour 30 minutes = **90** minutes.",
          ],
        },
        {
          id: "time-measure-words-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "er-vs-liang",
          question: "Convert **两千零二十五** (*liǎngqiān líng èrshíwǔ*) into Arabic digits:",
          answer: {
            type: "number",
            value: 2025,
          },
          hints: [
            "两千 = 2,000; 零 = 0 hundreds.",
            "二十五 = 25.",
          ],
          solution: [
            "**两千** (2,000) + **零** (0) + **二十五** (25) = **2025**.",
          ],
        },
        {
          id: "time-measure-words-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "demonstratives-duration",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'Yesterday I did homework for two hours.'** (Use **昨天我做了…作业**.)",
          answer: {
            type: "text",
            accept: [
              "昨天我做了两个小时作业",
              "昨天我做了两个小时作业。",
              "我昨天做了两个小时作业",
              "我昨天做了两个小时作业。",
              "昨天我做了两个小时的作业",
              "昨天我做了两个小时的作业。",
              "我昨天做了两个小时的作业",
              "我昨天做了两个小时的作业。",
              "Zuótiān wǒ zuò le liǎng gè xiǎoshí zuòyè",
              "Zuótiān wǒ zuò le liǎng ge xiǎoshí zuòyè",
            ],
            display: "昨天我做了两个小时作业。",
          },
          traps: [
            {
              spec: { type: "text", accept: ["昨天我两个小时做了作业", "昨天我做了两点作业"] },
              feedback: "Use 两个小时 (for 2 hours, not 两点!) and place it AFTER 做了: 昨天我做了两个小时作业。",
            },
          ],
          hints: [
            "Put point-in-time 昨天 BEFORE 做了.",
            "Put duration 两个小时 AFTER 做了 and BEFORE 作业!",
          ],
          solution: [
            "**昨天** (when, before verb) + **我做了** + **两个小时** (how long, after verb) + **作业** = **昨天我做了两个小时作业。**",
          ],
        },
        {
          id: "time-measure-words-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "dates-days",
          question: "Read: **去年我在七年级，今年我在八年级，明年我在几年级？** Write the grade number ONLY (as a single digit):",
          answer: {
            type: "number",
            value: 9,
          },
          hints: [
            "去年 (last year) = Year 7; 今年 (this year) = Year 8.",
            "What school year will you be in 明年 (next year)?",
          ],
          solution: [
            "Last year = Year 7 (**七年级**), this year = Year 8 (**八年级**), so next year (**明年**) = Year **9** (**九年级**).",
          ],
        },
        {
          id: "time-measure-words-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "core-measure-words",
          marks: 5,
          question:
            "**IGCSE 0547 Short Writing — Packing & Ordering Checklist:**\nYou are going on a 3-day school camp in Sentosa (**圣淘沙**). Write **5 full Mandarin sentences** stating:\n1. Which month and date the camp starts (e.g. **六月十号星期三**);\n2. How many days you will stay at Sentosa (**住三天**);\n3. What clothes and shoes you are packing (use **件**, **条**, and **双**);\n4. How many books or tickets you are bringing (use **本** or **张**);\n5. What drinks and snacks/meals you want to have on the first day (use **瓶 / 杯 / 碗 / 盘**).",
          hints: [
            "Check that 三天 has NO 个!",
            "Make sure every single number '2' before a classifier uses 两, never 二.",
          ],
          modelAnswer:
            "1. 我们六月十号星期三去圣淘沙。\n2. 我们在圣淘沙住三天。\n3. 我带了三件T恤衫、两条裤子和一双运动鞋。\n4. 我还带了两本中文书和一张地图。\n5. 第一天中午我想吃一盘鸡饭，喝两瓶冰水。",
          markScheme: [
            { point: "Writes start date in accurate Month + Date + Weekday order.", keywords: ["月", "号", "日", "星期"] },
            { point: "Places self-measuring duration 三天 after 住 (no 个!).", keywords: ["住", "三天"] },
            { point: "Packs outfit using 件, 条, and 双 accurately.", keywords: ["件", "条", "双"] },
            { point: "Includes 本 (books) or 张 (tickets/map/paper) accurately.", keywords: ["本", "张"] },
            { point: "Uses food/drink container classifiers (盘/碗/杯/瓶) and 第一天.", keywords: ["盘", "碗", "杯", "瓶"] },
          ],
          commonError: "Writing *三个天* instead of 三天, or forgetting the classifier after 一/两.",
        },
        {
          id: "time-measure-words-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "demonstratives-duration",
          marks: 5,
          question:
            "**IGCSE 0547 Article (~90–110 Chinese characters) — 我的学习与周末时间表 (My Study & Weekend Schedule):**\nWrite an article for your school magazine about how you manage your time during the week. Cover:\n- Today's full date and what year group you are in this year (**今年**);\n- How long you spend at school each day and how long you do homework;\n- Which day of the week is your favourite and why;\n- Something you bought last weekend using **这 / 那 + Measure Word**;\n- Your plan for next month or next year (**下个月 / 明年**).",
          hints: [
            "Contrast points-in-time BEFORE the verb (星期五…) with durations AFTER the verb (学七个小时 / 做了一个小时作业)!",
            "Use 这件 / 这本 / 那双 accurately when describing what you bought.",
          ],
          modelAnswer:
            "今天是二〇二六年十一月十七号星期二。我今年十二岁，在新加坡上八年级。从星期一到星期五，我每天在学校上课七个小时，回家以后做一个小时作业，还学三十分钟中文。我最喜欢星期五，因为第二天是周末！上个星期天我去乌节路买了一双运动鞋和两本故事书，这双运动鞋非常舒服。明年夏天我打算去北京住两个星期！",
          markScheme: [
            { point: "States full date in Big → Small order and uses 今年 accurately.", keywords: ["年", "月", "星期", "今年"] },
            { point: "Includes at least two accurate post-verb durations (个小时 / 分钟).", keywords: ["小时", "分钟"] },
            { point: "Explains favourite weekday using 星期 and 因为.", keywords: ["喜欢", "星期", "因为"] },
            { point: "Uses 这 or 那 + accurate classifier (这双/这本/这件/那条).", keywords: ["这", "那", "双", "本", "件", "条"] },
            { point: "States a future plan using 下个月 or 明年 (+ optional duration 两个星期).", keywords: ["明年", "下个月", "打算"] },
          ],
          commonError: "Confusing 两点 (2 o'clock) with 两个小时 (2 hours), or omitting the classifier after 这.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "time-measure-words-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "dates-days",
      question:
        "**Leap-Year Calendar Riddle:**\nRead every word carefully:\n> **二〇二四年是闰年（二月有二十九天）。在二〇二四年，如果前天是二月二十八号星期三，请问后天是几月几号星期几？**\n\nWrite your answer in **Mandarin characters** using **号** (format: `M月D号星期X`):",
      answer: {
        type: "text",
        accept: [
          "三月三号星期天",
          "三月三号星期日",
          "三月三日星期天",
          "三月三日星期日",
          "sān yuè sān hào xīngqītiān",
          "sān yuè sān hào xīngqīrì",
        ],
        display: "三月三号星期天 (Sunday, 3rd March)",
      },
      hints: [
        "Notice the leap-year clue: February 2024 has **29 days** (二月有二十九天)!",
        "From 前天 (-2 days) to 后天 (+2 days) is a jump of **+4 days** forward!",
        "Step day by day: 前天 = Feb 28 (Wed) → 昨天 = Feb 29 (Thu) → 今天 = Mar 1 (Fri) → 明天 = Mar 2 (Sat) → 后天 = ?",
      ],
      solution: [
        "Since 2024 is a leap year, **二月** has 29 days.",
        "Stepping +4 days from **前天** (Wed 28 Feb): **昨天** = Thu 29 Feb → **今天** = Fri 1 Mar → **明天** = Sat 2 Mar → **后天** = **Sun 3 Mar**.",
        "In Mandarin big-to-small order (never *星期七*!): **三月三号星期天**.",
      ],
    },
    {
      id: "time-measure-words-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "er-vs-liang",
      question:
        "**The Ultimate 二 vs 两 Gauntlet:**\nFill in the five blanks in order: **___月___号星期___，我坐___路公共汽车去买了___本书。** (*On Tuesday 2nd February, I took the No. 2 bus to buy 2 books.*)",
      options: [
        "二 、 二 、 二 、 二 、 两",
        "两 、 二 、 二 、 两 、 两",
        "二 、 二 、 两 、 二 、 两",
        "二 、 两 、 二 、 二 、 二",
      ],
      answerIndex: 0,
      hints: [
        "Check the first four slots: February (month), 2nd (date), Tuesday (weekday), and Route #2 bus (bus code number).",
        "Only the fifth slot counts a quantity of books before the classifier 本!",
      ],
      explanation:
        "**二 、 二 、 二 、 二 、 两** — **二月** (Feb), **二号** (2nd), **星期二** (Tue), and **二路公共汽车** (Route #2 bus) are all calendar/serial numbers taking **二**, while **两本书** (2 books) counts objects before **本** and takes **两**!",
    },
    {
      id: "time-measure-words-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "clothing-animal-classifiers",
      question:
        "**Chopstick & Shoe Headcount Puzzle:**\nRead carefully: **桌上有三双筷子和一只筷子；门边有两双鞋和一只鞋。** How many **individual chopsticks** and **individual shoes** are there altogether if you add every single stick and every single shoe? (Give ONE total number!)",
      answer: {
        type: "number",
        value: 12,
      },
      hints: [
        "Remember: 一双 (1 pair) = 2 individual items, while 一只 = 1 single item!",
        "Chopsticks: 三双 (3 × 2 = 6) + 一只 (1) = 7 chopsticks.",
        "Shoes: 两双 (2 × 2 = 4) + 一只 (1) = 5 shoes. Now add 7 + 5!",
      ],
      solution: [
        "Chopsticks: **三双筷子** (3 × 2 = 6) + **一只筷子** (1) = 7 individual chopsticks.",
        "Shoes: **两双鞋** (2 × 2 = 4) + **一只鞋** (1) = 5 individual shoes.",
        "Total individual items: 7 + 5 = **12**.",
      ],
    },
    {
      id: "time-measure-words-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "core-measure-words",
      question:
        "**Homophone Rescue by Classifier:**\nIn spoken Mandarin, **shū** (1st tone) could be **书** (*book*), while **shù** (4th tone) could be **树** (*tree*). Even in fast noisy speech at a market, why can a listener instantly tell **yì běn shū** apart from **yì tiáo yú** or **yì zhāng piào** before the noun even finishes?",
      options: [
        "Because classifiers only exist in written characters, never in speech.",
        "Because each classifier pre-announces the semantic shape/category of the upcoming noun (bound spine 本, long ribbon 条, flat sheet 张)!",
        "Because every noun in Mandarin changes its tone after 一.",
        "Because 本, 条, and 张 all mean the number ten.",
      ],
      answerIndex: 1,
      hints: [
        "Think about what mental image pops into your head the instant you hear 本 vs 条 vs 张!",
        "How does narrowing down the shape category help listeners decode short single-syllable Mandarin nouns?",
      ],
      explanation:
        "**Because each classifier pre-announces the semantic shape/category of the upcoming noun!** Mandarin has many short, similar-sounding syllables, so hearing **本** primes the brain for a bound volume before **书** even arrives.",
    },
    {
      id: "time-measure-words-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "er-vs-liang",
      question:
        "**Market Price Trap:**\nAt a Chinatown market, Auntie Lin quotes **一百五** (*yìbǎi wǔ*) for a jacket, while Uncle Chen quotes **一百零五** (*yìbǎi líng wǔ*) for the same jacket. By how many dollars is Uncle Chen **cheaper** than Auntie Lin? (Give a number!)",
      answer: {
        type: "number",
        value: 45,
      },
      hints: [
        "Recall the real-world Chinese shorthand rule: what number does 一百五 (without 零!) stand for?",
        "一百五 = 一百五十 (150), whereas 一百零五 = 105! Subtract 105 from 150.",
      ],
      solution: [
        "In spoken Chinese, **一百五** (*yìbǎi wǔ*) is shorthand for **150** (**一百五十**), whereas **一百零五** is **105**.",
        "Difference: 150 − 105 = **45** dollars cheaper!",
      ],
    },
    {
      id: "time-measure-words-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "demonstratives-duration",
      question:
        "**Spot the Flawless Sentence:**\nOnly **ONE** of the four sentences below handles calendar points, durations, classifiers, AND **二 / 两** without a single mistake. Which one?",
      options: [
        "今年二月我去北京住了两个星期，买了二十两本书。",
        "这个年二月我去北京住了两个星期，买了二十二本书。",
        "今年二月我去北京住了两个星期，买了二十二本书。",
        "今年两个月我去北京住了二个星期，买了两十二本书。",
      ],
      answerIndex: 2,
      hints: [
        "Check four traps: (1) 今年 vs *这个年*, (2) 二月 (Feb) vs 两个月, (3) 两个星期 vs *二个星期*, and (4) 二十二本书 vs *二十两本书*.",
        "Eliminate any option breaking even one of those four rules!",
      ],
      explanation:
        "**今年二月我去北京住了两个星期，买了二十二本书。** nails all four rules: **今年** (this year), **二月** (February), **住了两个星期** (stayed for 2 weeks, post-verb with **两 + 个**), and **二十二本书** (multi-digit 22 keeps **二**!).",
    },
    {
      id: "time-measure-words-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "demonstratives-duration",
      question:
        "**Point + Duration Translation:**\nTranslate into natural Mandarin (Hanzi): **'On Sunday I read books for two hours.'** (Use **星期天**, **我看了**, **两个小时**, and **书**.)",
      answer: {
        type: "text",
        accept: [
          "星期天我看了两个小时书",
          "星期天我看了两个小时书。",
          "我星期天看了两个小时书",
          "我星期天看了两个小时书。",
          "星期天我看了两个小时的书",
          "星期天我看了两个小时的书。",
          "我星期天看了两个小时的书",
          "星期日我看了两个小时书",
          "我星期日看了两个小时书",
          "Xīngqītiān wǒ kàn le liǎng gè xiǎoshí shū",
          "Xīngqītiān wǒ kàn le liǎng ge xiǎoshí shū",
        ],
        display: "星期天我看了两个小时书。",
      },
      hints: [
        "Put WHEN (星期天) BEFORE the verb 看了!",
        "Put HOW LONG (两个小时) AFTER 看了 and BEFORE 书!",
      ],
      solution: [
        "Point-in-time **星期天** goes before **看了**, and duration **两个小时** goes between **看了** and **书**: **星期天我看了两个小时书。**",
      ],
    },
    {
      id: "time-measure-words-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "dates-days",
      question:
        "**Month-Length + Classifier Cipher:**\nAdd these three numbers together:\n- The month number of **十一月** +\n- The number of days in **一个星期** +\n- The number of individual socks in **三双袜子**.\n\nWhat is the total? (Give a single number!)",
      answer: {
        type: "number",
        value: 24,
      },
      hints: [
        "十一月 = Month 11.",
        "一个星期 (one week) has 7 days; 三双袜子 (3 pairs of socks) = 3 × 2 = 6 individual socks.",
        "Add 11 + 7 + 6!",
      ],
      solution: [
        "Month number of **十一月** = 11.",
        "Days in **一个星期** = 7.",
        "Individual socks in **三双袜子** = 3 × 2 = 6.",
        "Total: 11 + 7 + 6 = **24**.",
      ],
    },
  ],
};
