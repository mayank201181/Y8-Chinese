import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "time-measure-words-m1",
    title: "Paper 1 · Calendar Dates, Days & 二 vs 两",
    questions: [
      {
        id: "time-measure-words-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dates-days",
        question: "Which Mandarin phrase correctly writes **'Tuesday, 17th November 2026'**?",
        options: [
          "二〇二六年十一月十七号星期二",
          "星期二，十七号十一月二〇二六年",
          "十七号十一月二〇二六年星期二",
          "二〇二六年十七号十一月星期两",
        ],
        answerIndex: 0,
        hints: [
          "Mandarin dates ALWAYS zoom in from largest time unit to smallest!",
          "Check the order: Year (年) → Month (月) → Date (号) → Weekday (星期).",
        ],
        explanation:
          "**二〇二六年十一月十七号星期二** follows Mandarin's strict **Year → Month → Date → Weekday** order and uses **星期二** (never ***星期两***). The other choices follow English small-to-big order.",
      },
      {
        id: "time-measure-words-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dates-days",
        question: "How do you say **'Sunday'** in Mandarin?",
        options: [
          "星期七 (xīngqīqī)",
          "星期天 / 星期日 (xīngqītiān / xīngqīrì)",
          "星期六 (xīngqīliù)",
          "星期零 (xīngqīlíng)",
        ],
        answerIndex: 1,
        hints: [
          "Monday to Saturday use numbers 1 to 6, whereas Sunday is the ONE exception!",
          "Look for 'sky' (天) or 'sun/day' (日).",
        ],
        explanation:
          "**星期天 / 星期日** means Sunday (spoken **星期天**, formal/written **星期日**). ***星期七*** does not exist in Mandarin, and **星期六** is Saturday.",
      },
      {
        id: "time-measure-words-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dates-days",
        question: "If **今天** (*today*) is **星期四** (*Thursday*), what day of the week is **后天** (*hòutiān*)?",
        options: [
          "星期二 (Tuesday)",
          "星期五 (Friday)",
          "星期六 (Saturday)",
          "星期三 (Wednesday)",
        ],
        answerIndex: 2,
        hints: [
          "Recall the 5-day timeline: 前天 (-2) → 昨天 (-1) → 今天 (0) → 明天 (+1) → 后天 (+2).",
          "Count 2 days forward from 星期四 (Thursday)!",
        ],
        explanation:
          "**星期六 (Saturday)** — **明天** (+1 day) is **星期五** (Friday), so **后天** (+2 days, the day after tomorrow) is **星期六** (Saturday). **星期二** would be **前天** (-2 days).",
      },
      {
        id: "time-measure-words-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dates-days",
        question: "Singapore's National Day (**国庆节**) is **八月九日** (*bā yuè jiǔ rì*). Which English date is that?",
        options: [
          "8th September",
          "9th October",
          "18th September",
          "9th August",
        ],
        answerIndex: 3,
        hints: [
          "Month comes first: 八月 = Month 8.",
          "Date comes second: 九日 = 9th day.",
        ],
        explanation:
          "**9th August** — **八月** is Month 8 (August) and **九日** is the 9th. **8th September** would be **九月八日**.",
      },
      {
        id: "time-measure-words-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "er-vs-liang",
        question: "Choose the pair that uses **二** and **两** with 100% accuracy for **'February'** vs **'two months'**:",
        options: [
          "二月 (February)  vs  两个月 (two months)",
          "两月 (February)  vs  二个月 (two months)",
          "二个月 (February)  vs  两月 (two months)",
          "两个月 (February)  vs  二月 (two months)",
        ],
        answerIndex: 0,
        hints: [
          "Calendar month names use cardinal/ordinal 二 with NO 个.",
          "Counting a quantity of 2 months requires standalone 两 + classifier 个!",
        ],
        explanation:
          "**二月 (February) vs 两个月 (two months)** — **二月** names the 2nd calendar month (no **个**), whereas **两个月** counts a duration of two months using **两 + 个**.",
      },
      {
        id: "time-measure-words-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "er-vs-liang",
        question: "How do you write **'22 students'** in Mandarin?",
        options: [
          "二十两个学生",
          "二十二个学生",
          "两十二个学生",
          "两两个学生",
        ],
        answerIndex: 1,
        hints: [
          "Check the multi-digit rule: does 两 EVER appear inside 12, 20, or 22?",
          "Only standalone single-digit '2' before a classifier becomes 两!",
        ],
        explanation:
          "**二十二个学生** (*èrshí'èr gè xuésheng*) — multi-digit numbers like 12, 20, and 22 ALWAYS keep **二** in every digit slot, even directly before **个**!",
      },
      {
        id: "time-measure-words-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "er-vs-liang",
        question: "How is the number **105** written and spoken in Mandarin?",
        options: [
          "一百五 (yìbǎi wǔ)",
          "百零五 (bǎi líng wǔ)",
          "一百零五 (yìbǎi líng wǔ)",
          "一千零五 (yìqiān líng wǔ)",
        ],
        answerIndex: 2,
        hints: [
          "Always state 一 before 百 for one hundred.",
          "Watch the internal zero in the tens column: without 零, 一百五 means 150!",
        ],
        explanation:
          "**一百零五 (yìbǎi líng wǔ)** includes **一** before **百** and **零** for the empty tens place. In spoken Chinese, **一百五** is shorthand for **150** (**一百五十**), not 105!",
      },
      {
        id: "time-measure-words-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "er-vs-liang",
        question: "Which phrase correctly says **'the second lesson / Period 2'** using the ordinal prefix **第** (*dì*)?",
        options: [
          "第两节课",
          "二第节课",
          "两第节课",
          "第二节课",
        ],
        answerIndex: 3,
        hints: [
          "Ordinals put 第 (dì) BEFORE the number.",
          "Does 第 ever pair with 两, or must it take 二?",
        ],
        explanation:
          "**第二节课** (*dì-èr jié kè*) — the ordinal prefix **第** ALWAYS precedes **二** (**第二** = 2nd); ***第两*** never exists.",
      },
      {
        id: "time-measure-words-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "core-measure-words",
        question: "Which measure word completes **两___词典** (*two dictionaries*)?",
        options: [
          "本 (běn)",
          "张 (zhāng)",
          "口 (kǒu)",
          "双 (shuāng)",
        ],
        answerIndex: 0,
        hints: [
          "A dictionary (词典 cídiǎn) is a thick bound volume with a spine, just like 书 (book).",
          "Recall the character with 木 (tree) + a stroke at the root!",
        ],
        explanation:
          "**本 (běn)** classifies bound books, notebooks, and dictionaries (**两本词典**). **张** is for single flat sheets/tickets, **口** is for household members, and **双** is for pairs.",
      },
      {
        id: "time-measure-words-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "core-measure-words",
        question: "At a Singapore hawker centre, you order a plate of chicken rice and a bowl of noodles: **一___鸡饭，一___面条。** Which pair of classifiers fits?",
        options: [
          "杯 ， 本",
          "盘 ， 碗",
          "条 ， 件",
          "张 ， 双",
        ],
        answerIndex: 1,
        hints: [
          "Chicken rice is served on a flat plate/dish (with the vessel radical 皿 at the bottom).",
          "Noodles are served in a deep bowl (with the stoneware radical 石 on the left).",
        ],
        explanation:
          "**盘 ， 碗** gives **一盘鸡饭** (*a plate of chicken rice*) and **一碗面条** (*a bowl of noodles*). **杯** is for cups/glasses, and **本** is for books.",
      },
      {
        id: "time-measure-words-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-animal-classifiers",
        question: "How do you say **'a pair of trousers'** in Mandarin?",
        options: [
          "一双裤子",
          "一件裤子",
          "一条裤子",
          "一张裤子",
        ],
        answerIndex: 2,
        hints: [
          "Don't fall for the English word 'pair'! Are trousers two separate disconnected objects or one long garment?",
          "Which classifier groups long, narrow items like trousers, skirts, fish, and roads?",
        ],
        explanation:
          "**一条裤子** (*yì tiáo kùzi*) — Mandarin classifies trousers as one long, tubular garment (**条**). **双** is reserved for two physically separate items like shoes (**一双鞋**) or chopsticks (**一双筷子**), and **件** is for tops/coats.",
      },
      {
        id: "time-measure-words-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "clothing-animal-classifiers",
        question: "Which noun takes the pair classifier **双** (*shuāng*)?",
        options: [
          "衬衫 (shirt)",
          "桌子 (table)",
          "小鱼 (little fish)",
          "筷子 (chopsticks)",
        ],
        answerIndex: 3,
        hints: [
          "双 (又 + 又) requires two separate matching pieces used together!",
          "Test each item: shirt (top), table (flat), fish (long), chopsticks (two sticks).",
        ],
        explanation:
          "**筷子 (chopsticks)** come in a matched pair of two separate sticks (**一双筷子**). **衬衫** takes **件**, **桌子** takes **张**, and **小鱼** takes **条**.",
      },
      {
        id: "time-measure-words-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-animal-classifiers",
        question: "Why do **一张电影票** (*a cinema ticket*) and **一张桌子** (*a table*) share the exact same classifier **张** (*zhāng*)?",
        options: [
          "Because both feature a flat surface or flat sheet!",
          "Because both are made exclusively of paper.",
          "Because both are bought only at weekends.",
          "Because 张 is the universal fallback classifier for all nouns.",
        ],
        answerIndex: 0,
        hints: [
          "Compare the geometry of a paper ticket/photo with the top of a desk, table, or bed.",
          "What visual shape links all 张 nouns?",
        ],
        explanation:
          "**Because both feature a flat surface or flat sheet!** Mandarin's **张** groups flat slips (paper, tickets, photos) together with flat-topped furniture (tables, desks, beds).",
      },
      {
        id: "time-measure-words-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "demonstratives-duration",
        question: "Which sentence correctly translates **'This shirt is very nice-looking'**?",
        options: [
          "这衬衫很好看。",
          "这件衬衫很好看。",
          "这条衬衫很好看。",
          "这双衬衫很好看。",
        ],
        answerIndex: 1,
        hints: [
          "Demonstratives like 这 (this) MUST be followed by a measure word before a noun!",
          "Shirts (衬衫) are upper-body tops — pick the top classifier!",
        ],
        explanation:
          "**这件衬衫很好看。** includes the mandatory classifier **件** (for upper-body clothing) between **这** and **衬衫**. ***这衬衫*** drops the classifier, and **条 / 双** don't match shirts.",
      },
      {
        id: "time-measure-words-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "demonstratives-duration",
        question: "Contrast **两点** and **两个小时**. Which sentence accurately says **'I study Chinese for two hours every day'**?",
        options: [
          "我每天两点学中文。",
          "我每天两个小时学中文。",
          "我每天学两个小时中文。",
          "我每天学两点中文。",
        ],
        answerIndex: 2,
        hints: [
          "First pick 'two hours' (duration = 两个小时) rather than '2 o'clock' (两点)!",
          "Second, does a duration sit BEFORE the verb 学 or AFTER the verb 学?",
        ],
        explanation:
          "**我每天学两个小时中文。** uses **两个小时** (for two hours) placed **AFTER** the verb **学**. **我每天两点学中文** means 'I study Chinese *at 2:00* every day', and putting **两个小时** before **学** breaks duration placement.",
      },
    ],
  },
  {
    id: "time-measure-words-m2",
    title: "Paper 2 · Classifier Mastery, Calendar Logic & Durations",
    questions: [
      {
        id: "time-measure-words-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dates-days",
        question: "How do you say **'this year'**, **'last year'**, and **'next year'** in Mandarin?",
        options: [
          "这个年 · 上个年 · 下个年",
          "今天 · 昨天 · 明天",
          "一月 · 二月 · 三月",
          "今年 · 去年 · 明年",
        ],
        answerIndex: 3,
        hints: [
          "Warning: 年 NEVER takes 这个/上个/下个!",
          "Look for 今 (present), 去 (gone/past), and 明 (next) paired with 年.",
        ],
        explanation:
          "**今年 · 去年 · 明年** (*jīnnián, qùnián, míngnián*) mean this year, last year, and next year. ***这个年 / 上个年 / 下个年*** is a classic English-to-Mandarin error!",
      },
      {
        id: "time-measure-words-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dates-days",
        question: "Listen/read carefully: **昨天是十月三十号星期五。请问，明天是几月几号星期几？** *(Hint: October has 31 days!)*",
        options: [
          "十一月一号星期天",
          "十月三十一号星期六",
          "十一月一号星期七",
          "十月三十二号星期天",
        ],
        answerIndex: 0,
        hints: [
          "Step 1: If 昨天 (yesterday) was Friday 30th October, then 今天 (today) is Saturday 31st October.",
          "Step 2: Advance one more day to 明天 (tomorrow) — October ends on the 31st, and Sunday is never *星期七*!",
        ],
        explanation:
          "**十一月一号星期天** (Sunday, 1st November) — yesterday was Fri 30 Oct, so today is Sat 31 Oct, making **明天** (tomorrow) **Sunday, 1st November** (**十一月一号星期天**).",
      },
      {
        id: "time-measure-words-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dates-days",
        question: "In Singapore, people often say **礼拜六** (*lǐbàiliù*) and **礼拜天** (*lǐbàitiān*). What do those two words mean?",
        options: [
          "June and July",
          "Saturday and Sunday",
          "6 o'clock and 7 o'clock",
          "Last week and next week",
        ],
        answerIndex: 1,
        hints: [
          "礼拜 (lǐbài) is the everyday colloquial synonym for 星期 (xīngqī) in Singapore!",
          "Match 六 (6) and 天 (sky/Sunday).",
        ],
        explanation:
          "**Saturday and Sunday** — in Singapore Mandarin, **礼拜** replaces **星期** in everyday speech, so **礼拜六 = 星期六** and **礼拜天 = 星期天**.",
      },
      {
        id: "time-measure-words-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "er-vs-liang",
        question: "In which of these four expressions MUST you fill the blank with **二** (*èr*) rather than **两** (*liǎng*)?",
        options: [
          "___杯苹果汁 (two glasses of apple juice)",
          "___只小狗 (two puppies)",
          "星期___ (Tuesday)",
          "___张桌子 (two tables)",
        ],
        answerIndex: 2,
        hints: [
          "Standalone '2' before a classifier (杯, 只, 张) always takes 两.",
          "Days of the week use ordinal/serial numbering!",
        ],
        explanation:
          "**星期二 (Tuesday)** uses **二** because weekday names are numbered serially (Day 2 of the week). The other three count objects with classifiers (**两杯, 两只, 两张**), so they require **两**.",
      },
      {
        id: "time-measure-words-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "core-measure-words",
        question: "Choose the accurate set of classifiers for: **1 bottle of water · 2 cups of tea · 3 bowls of cooked rice**",
        options: [
          "一杯水 · 两碗茶 · 三盘米饭",
          "一瓶水 · 二杯茶 · 三碗米饭",
          "一本水 · 两杯茶 · 三口米饭",
          "一瓶水 · 两杯茶 · 三碗米饭",
        ],
        answerIndex: 3,
        hints: [
          "Match bottle = 瓶 (píng), cup = 杯 (bēi), bowl = 碗 (wǎn).",
          "Also check the number 2 before 杯: 二杯 or 两杯?",
        ],
        explanation:
          "**一瓶水 · 两杯茶 · 三碗米饭** pairs **瓶** (bottle), **杯** (cup, with **两**!), and **碗** (bowl). ***二杯茶*** breaks the **两** + classifier rule.",
      },
      {
        id: "time-measure-words-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-animal-classifiers",
        question: "In a park at East Coast (**东海岸公园**), you spot **two fish** in a pond and **two birds** in a tree. How do you count them?",
        options: [
          "两条鱼和两只鸟",
          "两只鱼和两条鸟",
          "两个鱼和两双鸟",
          "两双鱼和两件鸟",
        ],
        answerIndex: 0,
        hints: [
          "Fish have long, sleek, undulating bodies — which shape classifier matches them?",
          "Small birds take the critter/animal classifier 只!",
        ],
        explanation:
          "**两条鱼和两只鸟** (*liǎng tiáo yú hé liǎng zhī niǎo*) uses long/flexible **条** for fish and **只** for birds. Reversing them (**两只鱼 / 两条鸟**) breaks Mandarin's shape categories.",
      },
      {
        id: "time-measure-words-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-animal-classifiers",
        question: "Meimei packed an outfit for her Beijing school trip: **一___外套、一___裙子和一___运动鞋。** Fill in the three blanks in order:",
        options: [
          "条 、 件 、 双",
          "件 、 条 、 双",
          "件 、 双 、 条",
          "张 、 条 、 只",
        ],
        answerIndex: 1,
        hints: [
          "Head-to-toe scan: 外套 (coat/jacket = top), 裙子 (skirt = lower-body garment), 运动鞋 (trainers = footwear pair).",
          "Match top = 件, skirt = 条, shoes = 双!",
        ],
        explanation:
          "**件 、 条 、 双** gives **一件外套** (one coat), **一条裙子** (one skirt), and **一双运动鞋** (one pair of trainers).",
      },
      {
        id: "time-measure-words-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "demonstratives-duration",
        question: "Which duration phrase is **100% GRAMMATICAL** (with NO extra or missing **个**)?",
        options: [
          "三个天 (three days)",
          "两个年 (two years)",
          "三个星期 (three weeks)",
          "十五个分钟 (fifteen minutes)",
        ],
        answerIndex: 2,
        hints: [
          "Chant the self-measuring trio that NEVER takes 个: 年 · 天 · 分钟!",
          "Which unit (week = 星期) DOES require 个 when counting how many weeks?",
        ],
        explanation:
          "**三个星期 (three weeks)** requires **个**! By contrast, **天** (**三天**), **年** (**两年**), and **分钟** (**十五分钟**) are self-measuring and NEVER take **个**.",
      },
      {
        id: "time-measure-words-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "demonstratives-duration",
        question: "Choose the correct question asking **'Which book do you like?'**:",
        options: [
          "你喜欢那本书？",
          "你喜欢哪书？",
          "你喜欢哪张书？",
          "你喜欢哪本书？",
        ],
        answerIndex: 3,
        hints: [
          "Distinguish 哪 (nǎ, which — with mouth radical 口) from 那 (nà, that).",
          "Make sure 哪 is followed by the bound-book classifier 本!",
        ],
        explanation:
          "**你喜欢哪本书？** (*Nǐ xǐhuan nǎ běn shū?*) uses **哪** ('which', with **口**) + book classifier **本**. **那本书** means 'that book' (not a question!), ***哪书*** omits the classifier, and **张** is for flat sheets.",
      },
      {
        id: "time-measure-words-m2-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "er-vs-liang",
        question: "Compare **110** and **101** in Mandarin. Which pair writes **110 first** and **101 second** in standard formal Mandarin?",
        options: [
          "一百一十  and  一百零一",
          "一百零一  and  一百一十",
          "百十  and  百一",
          "一百零十  and  一百一",
        ],
        answerIndex: 0,
        hints: [
          "110 has 1 hundred + 1 ten + 0 ones (no internal zero gap!).",
          "101 has 1 hundred + 0 tens + 1 one (an internal zero gap requiring 零!).",
        ],
        explanation:
          "**一百一十** (*yìbǎi yīshí*) is 110 (100 + 10), while **一百零一** (*yìbǎi líng yī*) is 101 (100 + 0 + 1). Note that casual **一百一** means 110, never 101!",
      },
      {
        id: "time-measure-words-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "demonstratives-duration",
        question: "What is the key grammar difference between **几** (*jǐ*) and **多少** (*duōshao*) when asking 'how many'?",
        options: [
          "几 is only for money, while 多少 is only for family members.",
          "几 expects a small number (~1–10) and MUST take a measure word; 多少 expects >10 (or any number) and 个 is optional.",
          "多少 must always be followed by 吗 at the end of the sentence.",
          "几 can never be used with dates or clock times.",
        ],
        answerIndex: 1,
        hints: [
          "Compare 你家有几口人？ (small household count, classifier 口 mandatory) with 你们学校有多少(个)学生？ (hundreds of students, 个 optional).",
          "Remember neither 几 nor 多少 can ever take 吗!",
        ],
        explanation:
          "**几 expects a small number (~1–10) and MUST take a measure word** (**几个人, 几本书**), whereas **多少 asks about larger or open quantities and allows 个 to be dropped** (**多少学生**).",
      },
      {
        id: "time-measure-words-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "clothing-animal-classifiers",
        question: "Xiaoming's puppy hid ONE of his trainers, so he is holding a **single shoe** in his hand. How do you say **'one single shoe'** (NOT a pair!) in Mandarin?",
        options: [
          "一双鞋",
          "一条鞋",
          "一只鞋",
          "一件鞋",
        ],
        answerIndex: 2,
        hints: [
          "一双鞋 means a PAIR of shoes (two shoes).",
          "Which classifier also counts ONE single item from a natural pair (one shoe, one sock, one eye, one ear)?",
        ],
        explanation:
          "**一只鞋** (*yì zhī xié*) — besides counting small animals, **只** classifies *one individual member* of a pair (**一只鞋** = one shoe, **一只袜子** = one odd sock), whereas **一双鞋** = two shoes!",
      },
      {
        id: "time-measure-words-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "core-measure-words",
        question: "Look at the bottom component **皿** (*mǐn*) inside **盘** (*pán*, plate) and the left component **石** (*shí*) inside **碗** (*wǎn*, bowl). What do those radicals tell us?",
        options: [
          "Both mean liquid water.",
          "Both represent bamboo chopsticks.",
          "皿 means tree wood and 石 means paper.",
          "皿 depicts a shallow dish/vessel and 石 points to stoneware/porcelain bowls!",
        ],
        answerIndex: 3,
        hints: [
          "Visualise 皿: it looks like a flat-bottomed serving dish!",
          "石 means stone/mineral — what are ceramic/porcelain bowls fired from?",
        ],
        explanation:
          "**皿 depicts a shallow dish/vessel** (giving **盘**, plate/tray) and **石 points to mineral/stoneware ceramics** (giving **碗**, bowl)!",
      },
      {
        id: "time-measure-words-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "demonstratives-duration",
        question: "Which sentence accurately says **'We stayed in Beijing for five days'**?",
        options: [
          "我们在北京住了五天。",
          "我们在北京住了五个天。",
          "我们五天住在北京了。",
          "我们在北京五号住了。",
        ],
        answerIndex: 0,
        hints: [
          "Duration ('for five days') goes AFTER the verb 住了!",
          "Check whether 天 ever takes 个, and don't confuse 五天 (5 days) with 五号 (the 5th of the month).",
        ],
        explanation:
          "**我们在北京住了五天。** places the self-measuring duration **五天** (no **个**!) directly after **住了**. ***五个天*** adds an illegal **个**, and **五号** means the 5th calendar date.",
      },
      {
        id: "time-measure-words-m2-q15",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dates-days",
        question: "How is the year **2008** (the year of the Beijing Olympics) read aloud in Mandarin?",
        options: [
          "两千八年 (liǎngqiān bā nián)",
          "二〇〇八年 (èr líng líng bā nián)",
          "二十八年 (èrshíbā nián)",
          "两〇〇八个年 (liǎng líng líng bā gè nián)",
        ],
        answerIndex: 1,
        hints: [
          "Calendar years are normally read digit by digit using 二 and 零/〇, followed by 年!",
          "Pronounce EVERY zero digit!",
        ],
        explanation:
          "**二〇〇八年 (èr líng líng bā nián)** reads all four digits `2-0-0-8` cleanly followed by **年** (with no **个**). *(Note: 两千零八年 is occasionally heard, whereas *两千八年* would mean 2800!)*",
      },
    ],
  },
  {
    id: "time-measure-words-m3",
    title: "Paper 3 · IGCSE Reading, Shopping Receipts & Time Traps",
    questions: [
      {
        id: "time-measure-words-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dates-days",
        question:
          "Read this message carefully:\n> **今天是三月三十号星期一。后天是我妹妹的生日，我们打算去乌节路吃饭。**\n\n*(Hint: March **三月** has 31 days!)* When is the younger sister's birthday?",
        options: [
          "三月三十一号星期二 (Tue 31 March)",
          "四月二号星期四 (Thu 2 April)",
          "四月一号星期三 (Wed 1 April)",
          "三月二十八号星期六 (Sat 28 March)",
        ],
        answerIndex: 2,
        hints: [
          "Today (今天) = Mon 30 March. 后天 = 2 days after today!",
          "Step +1 day (明天) = Tue 31 March. Now step +1 more day into April (四月)!",
        ],
        explanation:
          "**四月一号星期三 (Wed 1 April)** — since March has 31 days, tomorrow (**明天**) is Tuesday 31st March, so the day after tomorrow (**后天**) rolls into **Wednesday 1st April**!",
      },
      {
        id: "time-measure-words-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-animal-classifiers",
        question:
          "Read Mum's Orchard Road shopping list:\n> **妈妈在乌节路买了两件白衬衫、一条蓝裙子、一双黑鞋和三双袜子。**\n\nHow many **separate shopping items/packs** (counting each pair of shoes/socks as 1 unit on the list: 2 + 1 + 1 + 3) did Mum buy?",
        options: [
          "Five",
          "Six",
          "Eight",
          "Seven",
        ],
        answerIndex: 3,
        hints: [
          "Add the quantities across all four noun phrases: 两件 (2) + 一条 (1) + 一双 (1) + 三双 (3).",
          "Check: 2 + 1 + 1 + 3 = ?",
        ],
        explanation:
          "**Seven** — 2 white shirts (**两件白衬衫**) + 1 blue skirt (**一条蓝裙子**) + 1 pair of black shoes (**一双黑鞋**) + 3 pairs of socks (**三双袜子**) = **7** units.",
      },
      {
        id: "time-measure-words-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "demonstratives-duration",
        question:
          "Read David's study diary:\n> **星期二下午四点我开始做作业。我做了四十分钟数学作业，又做了五十分钟中文作业。**\n\nAt what time did David **finish** all his homework?",
        options: [
          "下午五点半 (5:30 pm)",
          "下午四点五十分 (4:50 pm)",
          "下午五点一刻 (5:15 pm)",
          "下午六点 (6:00 pm)",
        ],
        answerIndex: 0,
        hints: [
          "Start time (point-in-time): 下午四点 = 4:00 pm.",
          "Total duration: 四十分钟 (40 min) + 五十分钟 (50 min) = 90 minutes = 1 hour 30 minutes!",
        ],
        explanation:
          "**下午五点半 (5:30 pm)** — starting at 4:00 pm (**下午四点**) and adding 40 + 50 = 90 minutes (1 hour 30 minutes) finishes at **5:30 pm** (**下午五点半**).",
      },
      {
        id: "time-measure-words-m3-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dates-days",
        question: "Which Mandarin question asks **'What day of the week is tomorrow?'**",
        options: [
          "明天是几月几号？",
          "明天是星期几？",
          "明天是几点？",
          "明天有几个星期？",
        ],
        answerIndex: 1,
        hints: [
          "几月几号 asks for the month and date; 几点 asks for the clock time.",
          "Replace the weekday number in 星期一..六 with 几!",
        ],
        explanation:
          "**明天是星期几？** (*Míngtiān shì xīngqījǐ?*) slots **几** into the weekday number position. **几月几号** asks the calendar date, and **几个星期** asks 'how many weeks?'.",
      },
      {
        id: "time-measure-words-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "er-vs-liang",
        question: "How many times should **两** (*liǎng*) and **二** (*èr*) appear when translating: **'On Tuesday 2nd February, two students read 22 books for two hours'**?",
        options: [
          "两 appears 5 times, 二 appears 1 time",
          "两 appears 3 times, 二 appears 2 times",
          "两 appears 2 times, 二 appears 5 times",
          "两 appears 4 times, 二 appears 3 times",
        ],
        answerIndex: 2,
        hints: [
          "Translate each chunk carefully: February 2nd Tuesday = 二月二号星期二 (count the 二s!).",
          "two students = 两个学生; 22 books = 二十二本书 (two 二s!); two hours = 两个小时.",
        ],
        explanation:
          "**两 appears 2 times, 二 appears 5 times** — **二月二号星期二** uses **二** 3 times, **二十二本书** uses **二** 2 more times (= 5 **二**s), while standalone **两个学生** and **两个小时** use **两** 2 times!",
      },
      {
        id: "time-measure-words-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "core-measure-words",
        question: "Which phrase contains a **WRONG** measure word?",
        options: [
          "三本中文书 (three Chinese books)",
          "一盘饺子 (a plate of dumplings)",
          "两杯绿茶 (two cups of green tea)",
          "一本电影票 (one cinema ticket)",
        ],
        answerIndex: 3,
        hints: [
          "Check whether each noun is a bound volume, a plate of food, a cup of drink, or a flat slip of card!",
          "Is a cinema ticket (电影票) a thick bound book (本) or a flat card (张)?",
        ],
        explanation:
          "**一本电影票** is wrong because a cinema ticket is a flat slip of card/paper and requires **张** (**一张电影票**), not **本** (which is only for bound books/volumes).",
      },
      {
        id: "time-measure-words-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-animal-classifiers",
        question: "Notice the left-hand radical **衤** inside **衬衫** (*chènshān*, shirt), **裤子** (*kùzi*, trousers), and **裙子** (*qúnzi*, skirt). What does the 5-stroke radical **衤** (*yī*) represent?",
        options: [
          "clothing / garments (from 衣 yī)",
          "ceremony / altar (4-stroke 礻 shì)",
          "water / washing (氵 shuǐ)",
          "silk thread (纟 mì)",
        ],
        answerIndex: 0,
        hints: [
          "衬衫, 裤子, and 裙子 are all items you wear!",
          "Notice the extra side stroke that distinguishes 5-stroke 衤 (from 衣 clothing) from 4-stroke 礻!",
        ],
        explanation:
          "**clothing / garments (from 衣 yī)** — the 5-stroke **衤** (*yīzìpáng*) marks clothing characters like **衬, 衫, 裤, 裙, 袜**. Don't confuse it with 4-stroke **礻** (seen in **祝 / 礼**)!",
      },
      {
        id: "time-measure-words-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "demonstratives-duration",
        question: "Spot the **ONE sentence** where both calendar point-in-time and time duration are written with 100% grammatical accuracy:",
        options: [
          "去年八个月我去上海住了两个月。",
          "去年八月我去上海住了两个月。",
          "去年八月我两个月去上海住了。",
          "上个年八月我去上海住了二月。",
        ],
        answerIndex: 1,
        hints: [
          "Contrast 'August' (calendar month = 八月, no 个) with 'for two months' (duration = 两个月, with 两 + 个!).",
          "Make sure 'last year' is 去年 (never *上个年*), and put the duration 两个月 AFTER 住了!",
        ],
        explanation:
          "**去年八月我去上海住了两个月。** ('Last August I went to Shanghai and stayed for two months') uses **去年** (last year), **八月** (August, before the verb), and **两个月** (duration of 2 months, after **住了**).",
      },
      {
        id: "time-measure-words-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dates-days",
        question: "If **前天** (*the day before yesterday*) was **星期五** (*Friday*), what day of the week is **今天** (*today*)?",
        options: [
          "星期三 (Wednesday)",
          "星期六 (Saturday)",
          "星期天 (Sunday)",
          "星期一 (Monday)",
        ],
        answerIndex: 2,
        hints: [
          "前天 is 2 days BEFORE today!",
          "If 2 days ago was Friday (星期五), then yesterday (昨天) was Saturday (星期六), so today is…",
        ],
        explanation:
          "**星期天 (Sunday)** — **前天** (-2 days) = Friday, **昨天** (-1 day) = Saturday, so **今天** (0) = **星期天**!",
      },
      {
        id: "time-measure-words-m3-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "er-vs-liang",
        question: "How do you say **'2,000 Singapore dollars'** (**新币** *Xīnbì*) in natural Mandarin?",
        options: [
          "二百新币",
          "二十百新币",
          "千两新币",
          "两千新币",
        ],
        answerIndex: 3,
        hints: [
          "Thousand is 千 (qiān).",
          "Before 千, Mandarin uses 两: 两千!",
        ],
        explanation:
          "**两千新币** (*liǎngqiān Xīnbì*) — 1,000 is **千**, and 2,000 uses **两千**. **二百** is only 200.",
      },
      {
        id: "time-measure-words-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "demonstratives-duration",
        question: "Which question asks **'How long does it take to go to Sentosa by MRT?'**",
        options: [
          "坐地铁去圣淘沙要多长时间？",
          "坐地铁去圣淘沙是几点？",
          "坐地铁去圣淘沙是几月几号？",
          "坐地铁去圣淘沙要多少张？",
        ],
        answerIndex: 0,
        hints: [
          "Look for the duration question phrase meaning 'how long (time)?'.",
          "几点 asks 'what clock time', not 'how long'!",
        ],
        explanation:
          "**坐地铁去圣淘沙要多长时间？** uses **多长时间** (*duō cháng shíjiān*, how long) after **要** (takes/needs). **几点** asks for a clock timestamp, and **几月几号** asks for a calendar date.",
      },
      {
        id: "time-measure-words-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "core-measure-words",
        question: "In spoken Mandarin, **一** (*yī*) rises to 2nd tone **yí** ONLY before a 4th-tone classifier, and falls to 4th tone **yì** before 1st, 2nd, or 3rd-tone classifiers. Which classifier phrase is pronounced with rising **yí**?",
        options: [
          "一杯水 (one cup of water)",
          "一件衬衫 (one shirt)",
          "一条鱼 (one fish)",
          "一碗米饭 (one bowl of rice)",
        ],
        answerIndex: 1,
        hints: [
          "Check the underlying tone of each classifier: 杯 (bēi, 1st), 件 (jiàn, 4th), 条 (tiáo, 2nd), 碗 (wǎn, 3rd).",
          "Pick the phrase whose classifier is 4th tone!",
        ],
        explanation:
          "**一件衬衫** (*yí jiàn chènshān*) — **件** (*jiàn*) is a 4th tone, causing **一** to rise to **yí**. Before **杯** (1st), **条** (2nd), and **碗** (3rd), **一** shifts to falling 4th tone **yì**!",
      },
      {
        id: "time-measure-words-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-animal-classifiers",
        question: "Which group of three nouns can **ALL** be counted with the classifier **条** (*tiáo*)?",
        options: [
          "衬衫 、 外套 、 毛衣",
          "书 、 词典 、 票",
          "裤子 、 裙子 、 鱼",
          "鞋 、 袜子 、 筷子",
        ],
        answerIndex: 2,
        hints: [
          "Look for the group where all three items share a long, narrow, or flowing shape (or lower-body garments + swimming fish)!",
          "Eliminate tops (件), books/tickets (本/张), and separate pairs (双).",
        ],
        explanation:
          "**裤子 、 裙子 、 鱼** (trousers, skirts, and fish) all take **条** (*tiáo*)! Shirts/coats/jumpers take **件**, shoes/socks/chopsticks take **双**, and books/tickets split between **本** and **张**.",
      },
      {
        id: "time-measure-words-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dates-days",
        question: "What is the subtle difference between **八月九号** and **八月九日**?",
        options: [
          "号 means August while 日 means September.",
          "八月九号 means 8 hours 9 minutes, while 八月九日 means 9th August.",
          "号 can only be used for birthdays, while 日 is only for Sundays.",
          "Both mean 9th August — 号 is preferred in everyday spoken Mandarin, while 日 is more formal/written!",
        ],
        answerIndex: 3,
        hints: [
          "Both expressions name the exact same calendar date!",
          "Think of spoken conversation vs printed notices/newspapers.",
        ],
        explanation:
          "**Both mean 9th August — 号 (*hào*) is preferred in everyday spoken Mandarin, while 日 (*rì*) is used in formal writing, news, and holiday names** like **八月九日国庆节**.",
      },
      {
        id: "time-measure-words-m3-q15",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "demonstratives-duration",
        question: "Translate **'half an hour'** (30 minutes duration) into Mandarin:",
        options: [
          "半点 (bàn diǎn)",
          "半个小时 (bàn gè xiǎoshí)",
          "个半小时 (gè bàn xiǎoshí)",
          "半天 (bàn tiān)",
        ],
        answerIndex: 1,
        hints: [
          "Duration 'hour' is 小时 (xiǎoshí) with classifier 个.",
          "For 'half an hour', 半 stands BEFORE 个: 半个小时!",
        ],
        explanation:
          "**半个小时 (bàn gè xiǎoshí)** means 'half an hour'. (*Note:* **一个半小时** means *one and a half hours*, **半天** means half a day, and ***半点*** is ungrammatical without an hour number!)",
      },
    ],
  },
];
