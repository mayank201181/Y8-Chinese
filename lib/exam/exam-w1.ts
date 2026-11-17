import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-w1",
  title: "Paper 2 — Mandarin Grammar, Classifiers & Sentence Structures (语法与句型)",
  calculator: false,
  minutes: 45,
  questions: [
    // =========================================================================
    // SECTION A: CLASSIFIERS, 二 VS 两, ACTION VERBS & CORE GRAMMAR (Q01–Q08)
    // =========================================================================
    {
      id: "exam-w1-q01",
      kind: "mcq",
      topicId: "time-measure-words",
      guideRef: "er-vs-liang",
      difficulty: "warmup",
      question:
        "Choose the pair of words that correctly completes **both** blanks:\n\n" +
        "> **星期____下午____点，我有中文课。**\n" +
        "> *(At 2 o'clock on Tuesday afternoon, I have Mandarin class.)*",
      options: [
        "二 …… 两",
        "两 …… 二",
        "两 …… 两",
        "二 …… 二",
      ],
      answerIndex: 0,
      hints: [
        "Days of the week work like ordinal numbers (Monday = 1, Tuesday = 2): do we say **星期二** or **星期两**?",
        "For 2 o'clock on the clock, Mandarin treats **点** (*diǎn*) like a measure word: **两点** (*liǎng diǎn*).",
      ],
      explanation:
        "Tuesday is an ordinal day of the week, so it always uses **二**: **星期二** (*xīngqī'èr*). By contrast, 2 o'clock on the clock uses **两** before **点**: **两点** (*liǎng diǎn*). Never say *星期两* or *二点*!",
    },
    {
      id: "exam-w1-q02",
      kind: "mcq",
      topicId: "greetings-routine",
      guideRef: "family-pets",
      difficulty: "warmup",
      question:
        "In Mandarin, **和** (*hé*, 'and') can join nouns or pronouns, **never** two whole clauses with separate verbs. Which sentence below is **grammatically correct**?",
      options: [
        "我家有四口人，和我们住在新加坡。",
        "我有一个哥哥和一个妹妹。",
        "爸爸喜欢喝茶，和妈妈喜欢喝咖啡。",
        "我早上七点起床，和八点上学。",
      ],
      answerIndex: 1,
      hints: [
        "Eliminate any sentence where **和** sits between two full verb phrases or clauses after a comma.",
        "Look for the sentence where **和** simply connects two family-member noun phrases!",
      ],
      explanation:
        "**我有一个哥哥和一个妹妹** joins two noun phrases (**一个哥哥** and **一个妹妹**), which is exactly how **和** works in Mandarin. Never use **和** like English 'and' to link two clauses (*爸爸喜欢喝茶，妈妈喜欢喝咖啡* needs no **和**, or uses **而 / 也**).",
    },
    {
      id: "exam-w1-q03",
      kind: "mcq",
      topicId: "seasons",
      guideRef: "clothing-chuan-dai",
      difficulty: "warmup",
      question:
        "Select the correct verbs (**穿** *chuān* vs **戴** *dài*) and classifiers to complete this outfit description:\n\n" +
        "> **冬天去北京，她____着一____毛衣，还____着一____帽子。**",
      options: [
        "戴 / 件 / 穿 / 顶",
        "穿 / 条 / 穿 / 顶",
        "穿 / 件 / 戴 / 顶",
        "穿 / 件 / 戴 / 双",
      ],
      answerIndex: 2,
      hints: [
        "Main garments put onto the torso/legs take **穿** (*chuān*), whereas accessories (hats, scarves, glasses, gloves) take **戴** (*dài*).",
        "Upper-body tops like **毛衣** (jumper) use **件** (*jiàn*), and hats (**帽子**) use **顶** (*dǐng*).",
      ],
      explanation:
        "A jumper (**毛衣**) is main upper-body clothing, so it takes **穿** + **件**: **穿着一件毛衣**. A hat (**帽子**) is an accessory worn on the head, so it takes **戴** + **顶**: **戴着一顶帽子** (**条** is for long items like trousers/scarves, and **双** is for pairs like shoes/gloves).",
    },
    {
      id: "exam-w1-q04",
      kind: "mcq",
      topicId: "hobbies",
      guideRef: "sports-verbs",
      difficulty: "warmup",
      question:
        "Which option matches **every** sport or instrument with its authentic Mandarin action verb?",
      options: [
        "玩篮球 · 打足球 · 弹钢琴",
        "踢羽毛球 · 打网球 · 拉吉他",
        "打足球 · 骑自行车 · 弹小提琴",
        "打羽毛球 · 踢足球 · 弹吉他",
      ],
      answerIndex: 3,
      hints: [
        "Hand/racquet sports take **打** (*dǎ*), foot sports take **踢** (*tī*) — and Mandarin NEVER uses **玩** (*wán*) before ball sports!",
        "Check the instruments too: **弹** (*tán*) is for plucked/keyboard instruments (**钢琴**, **吉他**), whereas **拉** (*lā*) is for bowed strings (**小提琴**).",
      ],
      explanation:
        "**打羽毛球** (play badminton — hand/racquet), **踢足球** (play football — foot), and **弹吉他** (play the guitar — plucked strings) are all idiomatic. English speakers often mistranslate 'play basketball' as *玩篮球* instead of **打篮球**, or mix up **弹** and **拉**.",
    },
    {
      id: "exam-w1-q05",
      kind: "mcq",
      topicId: "weather",
      guideRef: "temperature-degree",
      difficulty: "warmup",
      question:
        "How do you naturally say **'Singapore is very humid today'** in Mandarin?",
      options: [
        "今天新加坡很潮湿。",
        "今天新加坡是潮湿。",
        "今天新加坡是很潮湿。",
        "新加坡是潮湿今天。",
      ],
      answerIndex: 0,
      hints: [
        "In Mandarin, predicate adjectives like **热**, **冷**, and **潮湿** act as stative verbs on their own — they NEVER take **是** (*shì*) in a normal description!",
        "Link the subject and adjective with a degree adverb such as **很** (*hěn*).",
      ],
      explanation:
        "**今天新加坡很潮湿** (*Jīntiān Xīnjiāpō hěn cháoshī*) follows the core rule **Subject + 很 + Adjective**. Putting **是** before an adjective (*新加坡是潮湿* or *是很潮湿*) is one of the most common English-interference mistakes in IGCSE Mandarin.",
    },
    {
      id: "exam-w1-q06",
      kind: "short",
      topicId: "three-meals",
      guideRef: "hungry-thirsty-full",
      difficulty: "warmup",
      question:
        "Complete the sentence with the single Mandarin particle that expresses a **new state / change of situation** ('I wasn't hungry earlier, and **now** I am hungry'):\n\n" +
        "> **十二点半，我饿____，我们去吃午饭吧！**\n\n" +
        "Type the missing character (or toned/neutral Pinyin).",
      answer: {
        type: "text",
        accept: ["了", "le", "le5"],
        display: "了 (le)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["过", "guo"] },
          feedback: "过 (*guo*) means past life experience ('have experienced being hungry before'), whereas a new current state ('I'm hungry now!') uses sentence-final **了**!",
        },
      ],
      hints: [
        "Think of phrases like **下雨____！** ('It's started raining!') and **我吃饱____！** ('I'm full now!').",
        "Which particle marks a change of state at the end of a clause?",
      ],
      solution: [
        "Sentence-final **了** (*le*) marks a **change of state**: **我饿了** (*Wǒ è le* = 'I'm hungry now').",
      ],
    },
    {
      id: "exam-w1-q07",
      kind: "short",
      topicId: "vegetables-fruits",
      guideRef: "bargaining-tai-le",
      difficulty: "warmup",
      question:
        "In Mandarin, when you ask a seller to make something '**a little** cheaper', **一点儿** (*yìdiǎnr*) goes **after** the adjective, not before it!\n\n" +
        "Translate **'a little cheaper'** into Simplified Hanzi (or toned Pinyin) to complete:\n\n" +
        "> **老板，二十块一斤太贵了，可以________吗？**",
      answer: {
        type: "text",
        accept: [
          "便宜一点儿",
          "便宜一点",
          "便宜点儿",
          "便宜点",
          "piányi yìdiǎnr",
          "piányi yīdiǎnr",
          "piányi yìdiǎn",
          "piányi yīdiǎn",
          "piányí yìdiǎnr",
          "piányí yìdiǎn",
        ],
        display: "便宜一点儿 (piányi yìdiǎnr)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["一点儿便宜", "一点便宜", "有一点儿便宜"] },
          feedback: "Word-order trap! **一点儿 + Adj** doesn't exist, and **有一点儿 + Adj** is for complaints (like 有一点儿贵). For requests/comparisons ('a bit cheaper'), put **一点儿** AFTER the adjective: **Adj + 一点儿**!",
        },
      ],
      hints: [
        "Start with the adjective for 'cheap': **便宜** (*piányi*).",
        "Place **一点儿** (*yìdiǎnr*) or **一点** directly **after** the adjective: **Adjective + 一点(儿)**.",
      ],
      solution: [
        "'Cheap' is **便宜** (*piányi*).",
        "To say 'a little [adjective]-er' in polite requests or comparisons, Mandarin uses **Adjective + 一点儿**: **便宜一点儿** (*piányi yìdiǎnr*).",
      ],
    },
    {
      id: "exam-w1-q08",
      kind: "mcq",
      topicId: "illness",
      guideRef: "body-parts",
      difficulty: "warmup",
      question:
        "Which sentence uses the correct Mandarin structure to say **'My stomach hurts a lot today'**?",
      options: [
        "我的肚子是疼今天。",
        "我今天肚子很疼。",
        "我今天有很疼在肚子。",
        "今天疼我的肚子。",
      ],
      answerIndex: 1,
      hints: [
        "In Mandarin symptom sentences, name the person + time first, then the **body part + (很)疼** right after it.",
        "Never translate English 'have a pain in...' literally with *有疼在…* or *是疼*!",
      ],
      explanation:
        "**我今天肚子很疼** (*Wǒ jīntiān dùzi hěn téng*) follows the natural Mandarin topic-comment body-part pattern: **Person + Time + Body Part + (很)疼** (just like **我头疼**, **我嗓子疼**).",
    },

    // =========================================================================
    // SECTION B: STPV WORD ORDER, MODALS, COMPARISONS & CONNECTORS (Q09–Q22)
    // =========================================================================
    {
      id: "exam-w1-q09",
      kind: "short",
      topicId: "time-measure-words",
      guideRef: "core-measure-words",
      difficulty: "core",
      question:
        "Fill in the blank with the single **classifier (measure word)** specifically used for bound **books, dictionaries, and magazines**:\n\n" +
        "> **我昨天在书店买了三____中文书。**\n\n" +
        "Type the single character (or toned Pinyin).",
      answer: {
        type: "text",
        accept: ["本", "běn"],
        display: "本 (běn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["个", "gè"] },
          feedback: "个 is the general classifier for people/fruits, not books — books take their own dedicated classifier!",
        },
        {
          spec: { type: "text", accept: ["张", "zhāng"] },
          feedback: "张 is for flat single sheets (paper, tickets, tables), whereas bound books take **本**!",
        },
      ],
      hints: [
        "Don't use the general classifier **个** — bound volumes have their own core classifier.",
        "Think of the character **本** (*běn*), which also appears in **课本** (textbook) and **笔记本** (notebook).",
      ],
      solution: [
        "Books, dictionaries, and notebooks use the measure word **本** (*běn*): **三本中文书** (*sān běn Zhōngwén shū*, three Chinese books).",
      ],
    },
    {
      id: "exam-w1-q10",
      kind: "mcq",
      topicId: "illness",
      guideRef: "modal-advice",
      difficulty: "core",
      question:
        "The character **得** has three pronunciations (*de*, *dé*, *děi*). In which sentence below is **得** pronounced **děi** and used as a modal verb meaning **'must / have to'**?",
      options: [
        "姐姐唱歌唱得很好听。",
        "他跑步跑得非常快。",
        "你发烧了，今天得在家好好休息。",
        "妹妹高兴得跳了起来。",
      ],
      answerIndex: 2,
      hints: [
        "When **得** sits **after** a verb (like **唱得…**, **跑得…**), it is neutral-tone *de* introducing a degree/result complement.",
        "When **得** means **'must / have to'** (*děi*), it stands **before** a verb or prepositional phrase!",
      ],
      explanation:
        "In **你发烧了，今天得在家好好休息** (*Nǐ fāshāo le, jīntiān děi zài jiā hǎohǎo xiūxi*), **得** (*děi*) stands before **在家好好休息** and means 'must / have to'. In the other three sentences, **得** (*de*) follows a verb/adjective to introduce a complement.",
    },
    {
      id: "exam-w1-q11",
      kind: "mcq",
      topicId: "leisure-plans",
      guideRef: "frequency-adverbs",
      difficulty: "core",
      question:
        "Where do frequency adverbs like **常常** (*chángcháng*, often) and **很少** (*hěn shǎo*, seldom) belong in a Mandarin sentence? Choose the **only** grammatically correct sentence:",
      options: [
        "常常我周末去图书馆看书。",
        "我周末去图书馆看书常常。",
        "我去常常周末图书馆看书。",
        "我周末常常去图书馆看书。",
      ],
      answerIndex: 3,
      hints: [
        "Mandarin never places frequency adverbs at the very end of the sentence like English 'often'.",
        "Follow the golden order: **Subject + Time + Frequency Adverb + Place/Direction + Verb**.",
      ],
      explanation:
        "In **我周末常常去图书馆看书**, the order is **Subject (我) + Time (周末) + Frequency Adverb (常常) + Action (去图书馆看书)**. Unlike English, **常常** cannot dangle at the end of the clause or precede the subject.",
    },
    {
      id: "exam-w1-q12",
      kind: "mcq",
      topicId: "eating-out",
      guideRef: "ordering-dishes",
      difficulty: "core",
      question:
        "At a restaurant table, you want to order **one bowl of beef noodles, one plate of dumplings, and two glasses of iced water**. Which sentence uses **every** classifier accurately?",
      options: [
        "服务员，来一碗牛肉面、一盘饺子和两杯冰水。",
        "服务员，来一杯牛肉面、一碗饺子和两盘冰水。",
        "服务员，来一盘牛肉面、两双饺子和一碗冰水。",
        "服务员，来二碗牛肉面、一个饺子和二杯冰水。",
      ],
      answerIndex: 0,
      hints: [
        "Match each container to the food/drink: **碗** (*wǎn*, bowl), **盘** (*pán*, plate/dish), and **杯** (*bēi*, cup/glass).",
        "Also check **两** vs **二** before **杯**!",
      ],
      explanation:
        "**一碗牛肉面** (a bowl of beef noodles), **一盘饺子** (a plate of dumplings), and **两杯冰水** (two glasses of iced water) pair each item with its natural container classifier — and use **两** (not **二**) before **杯**.",
    },
    {
      id: "exam-w1-q13",
      kind: "short",
      topicId: "greetings-routine",
      guideRef: "daily-routine",
      difficulty: "core",
      question:
        "Unscramble these Mandarin words into a natural sentence meaning **'My younger brother goes to school at 7:30 in the morning'**:\n\n" +
        "`七点半` · `上学` · `弟弟` · `早上`\n\n" +
        "Write the full sentence in Simplified Hanzi (or toned Pinyin).",
      answer: {
        type: "text",
        accept: [
          "弟弟早上七点半上学",
          "早上七点半弟弟上学",
          "dìdi zǎoshang qī diǎn bàn shàngxué",
          "zǎoshang qī diǎn bàn dìdi shàngxué",
        ],
        display: "弟弟早上七点半上学。",
      },
      traps: [
        {
          spec: { type: "text", accept: ["弟弟上学早上七点半", "弟弟七点半早上上学"] },
          feedback: "Check two rules: (1) Time goes BEFORE the verb **上学** (never at the end!), and (2) Time goes big-to-small: **早上** before **七点半**!",
        },
      ],
      hints: [
        "Put the time **before** the verb **上学** (*shàngxué*).",
        "Inside the time phrase, Mandarin always orders time from bigger unit to smaller unit: **早上** (morning) → **七点半** (7:30).",
      ],
      solution: [
        "Subject: **弟弟** (*dìdi*).",
        "Time (big-to-small): **早上七点半** (*zǎoshang qī diǎn bàn*).",
        "Verb: **上学** (*shàngxué*).",
        "Full sentence: **弟弟早上七点半上学。**",
      ],
    },
    {
      id: "exam-w1-q14",
      kind: "mcq",
      topicId: "hobbies",
      guideRef: "ability-hui-neng",
      difficulty: "core",
      question:
        "Choose the correct modal verbs (**会**, **能**, **可以**) to fill the three blanks:\n\n" +
        "1. 妹妹学了两年游泳，现在她已经____游泳了。\n" +
        "2. 老师，请问教室里____喝水吗？\n" +
        "3. 我今天发烧了，不____去参加篮球比赛。",
      options: [
        "1. 可以 · 2. 会 · 3. 能",
        "1. 会 · 2. 可以 · 3. 能",
        "1. 能 · 2. 会 · 3. 可以",
        "1. 可以 · 2. 能 · 3. 可以",
      ],
      answerIndex: 1,
      hints: [
        "Blank 1 emphasises a **learned skill** (knowing how to swim after taking lessons for two years: **会游泳**).",
        "Blank 2 asks polite **permission** ('May I drink water in the classroom?'), and Blank 3 explains being **unable due to circumstances** (having a fever today: **不能去**).",
      ],
      explanation:
        "**会** (*huì*) expresses a learned skill (Sentence 1: **她已经会游泳了**); **可以** (*kěyǐ*) asks for or grants permission (Sentence 2: **教室里可以喝水吗？**); and **不能** (*bù néng*) expresses inability due to circumstances like illness (Sentence 3: **我今天发烧了，不能去…**).",
    },
    {
      id: "exam-w1-q15",
      kind: "mcq",
      topicId: "weather",
      guideRef: "time-weather-forecasts",
      difficulty: "core",
      question:
        "Which sentence correctly uses Mandarin time and future/past markers to contrast **yesterday's** weather with **tomorrow's** forecast?",
      options: [
        "昨天会下雨，明天也下大雨了。",
        "昨天没下雨了，明天不有雨。",
        "昨天下了一天雨，不过天气预报说明天会是晴天。",
        "昨天正在下雨，明天去晴天过。",
      ],
      answerIndex: 2,
      hints: [
        "Check the time logic: **昨天** (yesterday) takes completed action **了** (or negative **没** without **了**), whereas **明天** (tomorrow) takes a prediction marker like **会** (*huì*).",
        "Remember: *没…了* and *不有* are both ungrammatical!",
      ],
      explanation:
        "**昨天下了一天雨，不过天气预报说明天会是晴天** accurately uses **下了** for yesterday's completed rain and **会** for tomorrow's forecast prediction. Notice why the distractors fail: **会** shouldn't predict yesterday, *没下雨了* illegally mixes **没** + **了**, and **有** is always negated with **没有**, never *不有*.",
    },
    {
      id: "exam-w1-q16",
      kind: "short",
      topicId: "three-meals",
      guideRef: "drinks-containers",
      difficulty: "core",
      question:
        "Translate **'two bottles of apple juice'** into Simplified Hanzi (or toned Pinyin), taking care with **两 vs 二** and the classifier for **bottles**:",
      answer: {
        type: "text",
        accept: [
          "两瓶苹果汁",
          "liǎng píng píngguǒzhī",
          "liǎng píng píngguǒ zhī",
        ],
        display: "两瓶苹果汁 (liǎng píng píngguǒzhī)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["二瓶苹果汁"] },
          feedback: "Before a measure word like **瓶**, always use **两** (*liǎng*), never **二**!",
        },
        {
          spec: { type: "text", accept: ["两杯苹果汁"] },
          feedback: "杯 (*bēi*) means 'cups/glasses', whereas the question asks for **bottles** (**瓶**, *píng*)!",
        },
      ],
      hints: [
        "Use **两** (*liǎng*) before a classifier, followed by **瓶** (*píng*, bottle).",
        "'Apple juice' combines **苹果** (*píngguǒ*) + **汁** (*zhī*, juice).",
      ],
      solution: [
        "2 before a measure word = **两** (*liǎng*).",
        "Bottle classifier = **瓶** (*píng*).",
        "Apple juice = **苹果汁** (*píngguǒzhī*).",
        "Answer: **两瓶苹果汁**.",
      ],
    },
    {
      id: "exam-w1-q17",
      kind: "short",
      topicId: "vegetables-fruits",
      guideRef: "money-weights",
      difficulty: "core",
      question:
        "In spoken Mandarin, when another unit directly follows **块** (*kuài*), the smaller unit **毛** (*máo*, 10 cents) is often dropped — e.g. ¥6.50 is spoken as **六块五**.\n\n" +
        "Write **¥3.80** in natural **spoken Mandarin** characters (e.g. using **块**, with or without **毛**):",
      answer: {
        type: "text",
        accept: [
          "三块八",
          "三块八毛",
          "三块八毛钱",
          "三元八角",
          "sān kuài bā",
          "sān kuài bā máo",
          "sān kuài bā máo qián",
          "sān yuán bā jiǎo",
        ],
        display: "三块八 / 三块八毛 (sān kuài bā)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["三点八块", "三块八十"] },
          feedback: "In spoken Mandarin prices, 80 cents is **八毛** (eight 10-cent units), shortened to **三块八** or **三块八毛** — never *三块八十*!",
        },
      ],
      hints: [
        "¥3 is **三块** (*sān kuài*).",
        "80 cents is 8 × 10 cents = **八毛** (*bā máo*), which shortens in speech to **三块八** (or **三块八毛**).",
      ],
      solution: [
        "1 **块** = 10 **毛**, so 0.80 yuan = **八毛**.",
        "Spoken Mandarin says **三块八** (*sān kuài bā*) or **三块八毛** (*sān kuài bā máo*).",
      ],
    },
    {
      id: "exam-w1-q18",
      kind: "short",
      topicId: "leisure-plans",
      guideRef: "making-plans-dasuan",
      difficulty: "core",
      question:
        "Arrange these segments into a single grammatical Mandarin sentence meaning **'I plan to go shopping on Orchard Road with my older sister this weekend'**:\n\n" +
        "`去乌节路买东西` · `我` · `跟姐姐一起` · `这个周末` · `打算`\n\n" +
        "Write the full sentence in Simplified Hanzi (or toned Pinyin).",
      answer: {
        type: "text",
        accept: [
          "这个周末我打算跟姐姐一起去乌节路买东西",
          "我这个周末打算跟姐姐一起去乌节路买东西",
          "我打算这个周末跟姐姐一起去乌节路买东西",
          "zhège zhōumò wǒ dǎsuàn gēn jiějie yìqǐ qù Wūjiélù mǎi dōngxi",
          "wǒ zhège zhōumò dǎsuàn gēn jiějie yìqǐ qù Wūjiélù mǎi dōngxi",
          "wǒ dǎsuàn zhège zhōumò gēn jiějie yìqǐ qù Wūjiélù mǎi dōngxi",
          "zhège zhōumò wǒ dǎsuàn gēn jiějie yīqǐ qù Wūjiélù mǎi dōngxi",
          "wǒ zhège zhōumò dǎsuàn gēn jiějie yīqǐ qù Wūjiélù mǎi dōngxi",
          "wǒ dǎsuàn zhège zhōumò gēn jiějie yīqǐ qù Wūjiélù mǎi dōngxi",
        ],
        display: "我这个周末打算跟姐姐一起去乌节路买东西。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: [
              "我打算去乌节路买东西跟姐姐一起这个周末",
              "我这个周末打算去乌节路买东西跟姐姐一起",
            ],
          },
          feedback: "Watch English word order! In Mandarin, **跟姐姐一起** ('with my older sister') MUST come BEFORE the action **去乌节路买东西**, never at the end!",
        },
      ],
      hints: [
        "Start with Subject + Time (or Time + Subject) + **打算** (*dǎsuàn*, plan to).",
        "Remember that the 'with someone' phrase (**跟姐姐一起**) must come **before** the main action (**去乌节路买东西**)!",
      ],
      solution: [
        "Frame: **Subject (我) + Time (这个周末) + Intention (打算) + With-phrase (跟姐姐一起) + Action (去乌节路买东西)**.",
        "Result: **我这个周末打算跟姐姐一起去乌节路买东西。** (Putting **这个周末** first is equally natural!)",
      ],
    },
    {
      id: "exam-w1-q19",
      kind: "short",
      topicId: "seasons",
      guideRef: "singapore-vs-beijing",
      difficulty: "core",
      question:
        "**Sentence Transformation (比 comparison):**\n" +
        "Rewrite this idea using **比** (*bǐ*) and **得多** (*de duō*, 'much more'):\n\n" +
        "> English target: **'Singapore's winter is much hotter than Beijing's.'**\n" +
        "> *(Use **新加坡的冬天**, **北京**, **比**, **热得多** — and beware the **很** trap!)*",
      answer: {
        type: "text",
        accept: [
          "新加坡的冬天比北京热得多",
          "新加坡的冬天比北京的冬天热得多",
          "Xīnjiāpō de dōngtiān bǐ Běijīng rè de duō",
          "Xīnjiāpō de dōngtiān bǐ Běijīng de dōngtiān rè de duō",
        ],
        display: "新加坡的冬天比北京热得多。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["新加坡的冬天比北京很热", "新加坡的冬天比北京很热得多"],
          },
          feedback: "Classic IGCSE trap! NEVER put **很** before the adjective in a **比** comparison — use **Adjective + 得多** directly (**热得多**)!",
        },
      ],
      hints: [
        "Use the pattern **A + 比 + B + Adjective + 得多**.",
        "Never include **很** or **非常** in a **比** sentence — write **热得多** directly after **北京**!",
      ],
      solution: [
        "A = **新加坡的冬天**, B = **北京** (or **北京的冬天**).",
        "Adjective + degree = **热得多** (*rè de duō*, much hotter) — with NO **很**.",
        "Answer: **新加坡的冬天比北京热得多。**",
      ],
    },
    {
      id: "exam-w1-q20",
      kind: "short",
      topicId: "sentence-patterns",
      guideRef: "stpv-word-order",
      difficulty: "core",
      question:
        "**STPV Golden Rule Unscramble:**\n" +
        "Arrange all four blocks into a single correct Mandarin sentence meaning **'Xiaoming plays basketball at the sports hall at 4 o'clock on Friday afternoon'**:\n\n" +
        "`在体育馆` · `小明` · `打篮球` · `星期五下午四点`",
      answer: {
        type: "text",
        accept: [
          "小明星期五下午四点在体育馆打篮球",
          "星期五下午四点小明在体育馆打篮球",
          "Xiǎomíng xīngqīwǔ xiàwǔ sì diǎn zài tǐyùguǎn dǎ lánqiú",
          "xīngqīwǔ xiàwǔ sì diǎn Xiǎomíng zài tǐyùguǎn dǎ lánqiú",
        ],
        display: "小明星期五下午四点在体育馆打篮球。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: [
              "小明在体育馆打篮球星期五下午四点",
              "小明打篮球在体育馆星期五下午四点",
              "小明在体育馆星期五下午四点打篮球",
            ],
          },
          feedback: "Follow **S – T – P – V** strictly: Subject (**小明**) → Time (**星期五下午四点**) → Place (**在体育馆**) → Verb (**打篮球**)!",
        },
      ],
      hints: [
        "Recall the **STPV** golden order: **Subject → Time → Place → Verb**.",
        "Time (**星期五下午四点**) comes **before** Place (**在体育馆**), and both come **before** the action (**打篮球**).",
      ],
      solution: [
        "**S** (Subject): **小明**",
        "**T** (Time): **星期五下午四点**",
        "**P** (Place): **在体育馆**",
        "**V** (Verb-object): **打篮球**",
        "Full sentence: **小明星期五下午四点在体育馆打篮球。**",
      ],
    },
    {
      id: "exam-w1-q21",
      kind: "mcq",
      topicId: "time-measure-words",
      guideRef: "demonstratives-duration",
      difficulty: "core",
      question:
        "Contrast **point-in-time** (before the verb) with **time duration** (how long an action lasted). Which sentence correctly says **'Yesterday evening I studied Mandarin for two hours'**?",
      options: [
        "我昨天晚上两个小时学了中文。",
        "我昨天晚上学中文了二个小时。",
        "我学了中文昨天晚上两个小时。",
        "我昨天晚上学了两个小时中文。",
      ],
      answerIndex: 3,
      hints: [
        "Point-in-time (**昨天晚上**, yesterday evening) goes **before** the verb **学**.",
        "Duration (**两个小时**, for two hours) goes **after** **Verb + 了** and before the object **中文**: **Verb + 了 + Duration + Object**!",
      ],
      explanation:
        "In Mandarin, point-in-time (**昨天晚上**) precedes the verb, whereas duration (**两个小时**) goes after **Verb + 了**: **我昨天晚上学了两个小时中文** (or *我昨天晚上学中文学了两个小时*). Putting duration before the verb (*两个小时学了*) or using *二个小时* is ungrammatical.",
    },
    {
      id: "exam-w1-q22",
      kind: "short",
      topicId: "sentence-patterns",
      guideRef: "addition-simultaneous",
      difficulty: "core",
      question:
        "**Simultaneous Actions Transformation:**\n" +
        "Combine these two simultaneous actions using **一边……一边……** (*yìbiān … yìbiān …*):\n\n" +
        "- Subject: **哥哥** (*gēge*)\n" +
        "- Action 1: **听音乐** (*tīng yīnyuè*, listen to music)\n" +
        "- Action 2: **跑步** (*pǎobù*, jog/run)\n\n" +
        "Write the combined sentence in Simplified Hanzi (or toned Pinyin).",
      answer: {
        type: "text",
        accept: [
          "哥哥一边听音乐一边跑步",
          "哥哥一边跑步一边听音乐",
          "gēge yìbiān tīng yīnyuè yìbiān pǎobù",
          "gēge yībiān tīng yīnyuè yībiān pǎobù",
          "gēge yìbiān pǎobù yìbiān tīng yīnyuè",
          "gēge yībiān pǎobù yībiān tīng yīnyuè",
        ],
        display: "哥哥一边听音乐，一边跑步。",
      },
      hints: [
        "Place the subject **哥哥** once at the start of the sentence.",
        "Follow the frame **Subject + 一边 + Verb Phrase 1 + 一边 + Verb Phrase 2**.",
      ],
      solution: [
        "To express doing two actions at the same time, place **一边** directly before each verb phrase after the shared subject:",
        "**哥哥一边听音乐，一边跑步。** (or **哥哥一边跑步，一边听音乐。**)",
      ],
    },

    // =========================================================================
    // SECTION C: CHALLENGE TRANSFORMATIONS, ASPECT & COMPLEX SYNTAX (Q23–Q30)
    // =========================================================================
    {
      id: "exam-w1-q23",
      kind: "mcq",
      topicId: "hobbies",
      guideRef: "likes-degrees",
      difficulty: "challenge",
      question:
        "How do you express **'My older sister is very interested in Chinese calligraphy'** using the idiomatic **感兴趣** (*gǎn xìngqù*) structure?",
      options: [
        "姐姐对中国书法很感兴趣。",
        "姐姐很感兴趣在中国书法。",
        "姐姐是感兴趣中国书法。",
        "中国书法是姐姐很感兴趣。",
      ],
      answerIndex: 0,
      hints: [
        "Never translate English '**in** Chinese calligraphy' with **在**!",
        "Recall the fixed preposition frame: **A + 对 + B + (很)感兴趣**.",
      ],
      explanation:
        "Mandarin always introduces the target of interest before the verb phrase using **对** (*duì*): **Person + 对 + Thing + 很感兴趣** → **姐姐对中国书法很感兴趣**. Translating English 'interested in X' word-for-word as *感兴趣在 X* is an exam classic error.",
    },
    {
      id: "exam-w1-q24",
      kind: "mcq",
      topicId: "illness",
      guideRef: "sick-leave-note",
      difficulty: "challenge",
      question:
        "Compare subject placement with paired connectors (**因为……所以……**) and modal advice (**应该 / 别**). Which complex sick-leave sentence is **100% grammatical and idiomatic**?",
      options: [
        "因为我昨天发烧了，可是医生说我应该不去学校。",
        "因为我感冒了，所以医生让我今天在家休息，别喝冰水。",
        "虽然我嗓子很疼，所以妈妈带我去看病了。",
        "因为医生开了药，但是我得一天三次吃。",
      ],
      answerIndex: 1,
      hints: [
        "Check that connector pairs match properly: **因为** pairs with **所以** (cause → result), whereas **虽然** pairs with **但是 / 可是** (concession).",
        "Also check word order on medicine dosage (*一天吃三次药*, not *一天三次吃*) and negative advice (**不应该去** or **别去**, not *应该不去*).",
      ],
      explanation:
        "**因为我感冒了，所以医生让我今天在家休息，别喝冰水** pairs **因为……所以……** accurately and uses **让** (told/let) + **别喝冰水** (don't drink iced water) idiomatically. The distractors mismatch connector pairs (*因为…可是*, *虽然…所以*, *因为…但是*) and misplace negatives/frequencies.",
    },
    {
      id: "exam-w1-q25",
      kind: "mcq",
      topicId: "leisure-plans",
      guideRef: "weekend-diary-plan",
      difficulty: "challenge",
      question:
        "Which two-clause sentence accurately contrasts a **habitual routine** (first clause) with a **specific plan for next weekend** (second clause)?",
      options: [
        "我每个星期六都去了游泳，下个星期六我常常去圣淘沙。",
        "我平时星期六没去打网球，下个星期六我去了看电影。",
        "我平时星期六常常在家看书，不过下个星期六我打算跟朋友去圣淘沙。",
        "我每个星期六正在看书，下个星期六我以前去过圣淘沙。",
      ],
      answerIndex: 2,
      hints: [
        "Habitual routines (**平时 / 每个星期六**) do **NOT** take completed-action **了** — they use frequency words like **常常**.",
        "Specific future plans (**下个星期六**) take **打算 / 准备 / 要**, never **常常** or **过**!",
      ],
      explanation:
        "**我平时星期六常常在家看书，不过下个星期六我打算跟朋友去圣淘沙** uses **平时 + 常常** (with no **了**) for the habitual Saturday routine, and **下个星期六 + 打算** for next Saturday's specific plan.",
    },
    {
      id: "exam-w1-q26",
      kind: "mcq",
      topicId: "eating-out",
      guideRef: "restaurant-review",
      difficulty: "challenge",
      question:
        "Pay close attention to **subject placement** with **不但……而且……** (*not only … but also …*):\n" +
        "- **Same subject:** Subject + **不但** …，**而且** …\n" +
        "- **Two different subjects:** **不但** + Subject 1 …，**而且** + Subject 2 …\n\n" +
        "Which restaurant review sentence follows this rule **correctly**?",
      options: [
        "这家小贩中心的鸡饭不但便宜，而且服务员也很热情。",
        "不但这家餐厅的菜很好吃，而且很便宜。",
        "这家餐厅不但服务员很热情，而且我也常常去。",
        "这家餐厅的牛肉面不但很好吃，而且一点儿也不贵。",
      ],
      answerIndex: 3,
      hints: [
        "Check whether both clauses describe the **same** subject or **two different** subjects!",
        "In **这家餐厅的牛肉面不但很好吃，而且一点儿也不贵**, what is delicious AND not expensive at all?",
      ],
      explanation:
        "In **这家餐厅的牛肉面不但很好吃，而且一点儿也不贵**, both **很好吃** and **一点儿也不贵** describe the same subject (**这家餐厅的牛肉面**), so placing the subject before **不但** is 100% right. When two clauses have different subjects (e.g. the chicken rice vs the staff), **不但** must go *before* the first subject (*不但鸡饭便宜，而且服务员也很热情*).",
    },
    {
      id: "exam-w1-q27",
      kind: "mcq",
      topicId: "tenses-particles",
      guideRef: "ongoing-zhengzai",
      difficulty: "challenge",
      question:
        "How do you correctly negate an **ongoing present action** — e.g. to reply **'Younger sister is NOT watching TV right now; she is doing her homework'**?",
      options: [
        "妹妹没在看电视，她正在做作业呢。",
        "妹妹不正在看电视了，她做作业呢。",
        "妹妹没有看电视过，她正在做作业。",
        "妹妹在看电视不，她会做作业呢。",
      ],
      answerIndex: 0,
      hints: [
        "Ongoing action is **正在 / 在 + Verb (+ 呢)**.",
        "To negate an ongoing action ('is not -ing right now'), Mandarin uses **没(有)在 + Verb** — never *不正在…了*!",
      ],
      explanation:
        "Ongoing actions with **在 / 正在** are negated with **没在 + Verb** (or **没有在 + Verb**), never *不正在* and never with **了**: **妹妹没在看电视，她正在做作业呢**.",
    },
    {
      id: "exam-w1-q28",
      kind: "short",
      topicId: "tenses-particles",
      guideRef: "bu-vs-mei",
      difficulty: "challenge",
      question:
        "**Negative Past Transformation (不 vs 没):**\n" +
        "Rewrite the affirmative sentence below in the **negative** ('I did **not** eat breakfast yesterday morning'):\n\n" +
        "> Affirmative: **我昨天早上吃了早饭。**\n\n" +
        "Write the full negative sentence in Simplified Hanzi (or toned Pinyin) — watch what happens to **了**!",
      answer: {
        type: "text",
        accept: [
          "我昨天早上没吃早饭",
          "我昨天早上没有吃早饭",
          "昨天早上我没吃早饭",
          "昨天早上我没有吃早饭",
          "wǒ zuótiān zǎoshang méi chī zǎofàn",
          "wǒ zuótiān zǎoshang méiyǒu chī zǎofàn",
          "zuótiān zǎoshang wǒ méi chī zǎofàn",
          "zuótiān zǎoshang wǒ méiyǒu chī zǎofàn",
        ],
        display: "我昨天早上没吃早饭。",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["我昨天早上没吃了早饭", "我昨天早上没有吃了早饭"],
          },
          feedback: "Golden tense rule: **没(有)** means the action did NOT happen, so **了** (completion) MUST be dropped! Never write *没吃了*!",
        },
        {
          spec: {
            type: "text",
            accept: ["我昨天早上不吃早饭", "我昨天早上不吃了早饭"],
          },
          feedback: "**不** negates habits or future refusal ('I don't/won't eat breakfast'). To say an action **did not happen yesterday**, use **没 / 没有**!",
        },
      ],
      hints: [
        "Did the action fail to happen in the past (**昨天早上**)? Choose **没** (or **没有**) rather than **不**.",
        "Crucial rule: when you add **没 / 没有** before the verb, you MUST **delete 了**!",
      ],
      solution: [
        "1. Replace affirmative past completion with **没** or **没有** before the verb **吃** (never **不**, which is for habits/future).",
        "2. Remove **了** completely — an action that didn't happen cannot be completed (*没吃了* is always wrong!).",
        "Answer: **我昨天早上没吃早饭。** (or **我昨天早上没有吃早饭。**)",
      ],
    },
    {
      id: "exam-w1-q29",
      kind: "written",
      topicId: "sentence-patterns",
      guideRef: "combining-clauses",
      difficulty: "challenge",
      marks: 5,
      question:
        "**IGCSE Sentence-Upgrading Task (句型升级 — 5 marks):**\n\n" +
        "A Year 8 student wrote five choppy clauses in English-influenced order. Combine and rewrite them into a smooth **2–3 sentence Mandarin mini-paragraph** in Simplified Hanzi using **all five** target structures below:\n\n" +
        "1. **STPV word order:** Last Saturday afternoon (**上个星期六下午**), my friends and I (**我和朋友**) played badminton (**打羽毛球**) at the school sports hall (**在学校体育馆**).\n" +
        "2. **Duration after Verb + 了:** We played for **two hours** (**两个小时**).\n" +
        "3. **虽然……但是……** concession: Although the weather was very hot (**虽然天气很热**), we were very happy (**但是我们都很高兴 / 开心**).\n" +
        "4. **因为……所以……** cause & effect: Because we were both hungry and thirsty (**因为我们又饿又渴**), we went to a hawker centre (**所以我们去小贩中心**) to eat chicken rice and drink iced lemon tea.\n" +
        "5. **不但……而且……** review: The food there is not only delicious (**不但好吃**), but also cheap (**而且很便宜 / 不贵**).",
      hints: [
        "Sentence 1: Follow **STPV** (**上个星期六下午，我和朋友在学校体育馆打羽毛球**) and add duration with **打了两个小时**.",
        "Sentence 2: Pair **虽然……但是……** cleanly, then start Sentence 3 with **因为我们又饿又渴，所以我们去小贩中心……**.",
        "Finish with **那里的菜不但好吃，而且很便宜！** — check every paired connector has both halves!",
      ],
      modelAnswer:
        "上个星期六下午，我和朋友在学校体育馆打羽毛球，我们打了两个小时。虽然那天天气很热，但是我们都玩得非常开心。打完球以后，因为我们又饿又渴，所以我们一起去小贩中心吃鸡饭、喝冰柠檬茶。那家小贩中心的菜不但好吃，而且很便宜！",
      markScheme: [
        {
          point: "Correct STPV word order for last Saturday afternoon at the sports hall playing badminton (Time → Place → Verb)",
          keywords: ["上个星期六", "在学校体育馆", "打羽毛球"],
        },
        {
          point: "Correct post-verbal duration structure with 了 and 两 (e.g. 打了两个小时)",
          keywords: ["打了两个小时", "两个小时"],
        },
        {
          point: "Complete paired concession structure 虽然……但是…… contrasting hot weather with feeling happy",
          keywords: ["虽然", "但是", "热", "高兴", "开心"],
        },
        {
          point: "Complete paired causal structure 因为……所以…… linking hunger/thirst to going to the hawker centre",
          keywords: ["因为", "所以", "饿", "渴", "小贩中心"],
        },
        {
          point: "Complete paired addition structure 不但……而且…… praising both taste (好吃) and price (便宜 / 不贵)",
          keywords: ["不但", "而且", "好吃", "便宜", "不贵"],
        },
      ],
      commonError:
        "Dropping the second half of Mandarin paired connectors (writing *虽然天气很热，我们很高兴* without **但是**, or *因为…* without **所以**), or placing *在学校体育馆* after *打羽毛球*.",
    },
    {
      id: "exam-w1-q30",
      kind: "written",
      topicId: "tenses-particles",
      guideRef: "past-experience-guo",
      difficulty: "challenge",
      marks: 5,
      question:
        "**IGCSE Aspect & Particle Transformation Task (时态与助词运用 — 5 marks):**\n\n" +
        "Mandarin verbs never conjugate — instead, particles and time words carry the timeframe! Translate the **5 numbered sentences** below into **Simplified Hanzi**, choosing the exact Mandarin particle or marker needed for each:\n\n" +
        "1. *(Past life experience — affirmative)*: I **have been to** Beijing before, and I **have eaten** Peking roast duck.\n" +
        "2. *(Past life experience — negative)*: My younger brother **has never seen** snow before (**下雪** / **雪**).\n" +
        "3. *(Ongoing present)*: Right now Mum **is cooking** dinner in the kitchen (**在厨房做晚饭**).\n" +
        "4. *(Completed past — negative)*: Yesterday it rained heavily, so Dad **did not** go jogging.\n" +
        "5. *(Future plan + prediction)*: Next December we **plan to** go to Harbin (**哈尔滨**); the weather forecast says it **will** snow there!",
      hints: [
        "1 & 2 test experiential **过** (*guo*): remember affirmative **去过 / 吃过** and negative **没(有)看过** (keep **过**!).",
        "3 needs **正在……（呢）**; 4 needs **没(有)去跑步** (NO **了**!).",
        "5 needs **打算** (planned intention) in the first clause and **会** (weather prediction) before **下雪** in the second clause.",
      ],
      modelAnswer:
        "1. 我以前去过北京，也吃过北京烤鸭。\n" +
        "2. 弟弟以前没看过雪（/ 没见过下雪）。\n" +
        "3. 现在妈妈正在厨房做晚饭呢。\n" +
        "4. 昨天下大雨了，所以爸爸没去跑步。\n" +
        "5. 明年十二月我们打算去哈尔滨，天气预报说那里会下雪！",
      markScheme: [
        {
          point: "Sentence 1 uses Verb + 过 accurately for past life experience (去过北京, 吃过烤鸭)",
          keywords: ["去过北京", "吃过", "烤鸭"],
        },
        {
          point: "Sentence 2 negates past experience with 没(有) + Verb + 过 while keeping 过 (没看过雪 / 没见过雪)",
          keywords: ["没看过", "没有看过", "没见过", "雪"],
        },
        {
          point: "Sentence 3 uses 正在 (or 在) before the location/verb (正在厨房做晚饭 / 在做晚饭) for ongoing present",
          keywords: ["正在", "做晚饭"],
        },
        {
          point: "Sentence 4 negates yesterday's action with 没 / 没有 and NO 了 after the negated verb (爸爸没去跑步)",
          keywords: ["昨天", "没去跑步", "没有去跑步", "没跑步"],
        },
        {
          point: "Sentence 5 contrasts 打算 / 准备 for the family's plan with 会 for predicted snowfall (会下雪)",
          keywords: ["打算", "哈尔滨", "会下雪"],
        },
      ],
      commonError:
        "Dropping **过** in negative experience (*弟弟没看雪* instead of **没看过雪**), or adding **了** after **没** (*爸爸没去了跑步*).",
    },
  ],
};
