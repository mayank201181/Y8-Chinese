import type { Topic } from "../types";

// EXEMPLAR TOPIC — house style for all topic files.
// Content agents: match this structure, tone and pedagogy exactly.

export const greetings: Topic = {
  id: "greetings",
  title: "Greetings & Introducing Yourself",
  titleChinese: { hanzi: "问候与自我介绍", pinyin: "wènhòu yǔ zìwǒ jièshào" },
  subject: "chinese",
  icon: "👋",
  color: "rose",
  intro:
    "Every conversation in Chinese starts here: saying hello, telling someone your name and age, and asking about theirs. By the end of this topic you can hold your first real Mandarin conversation — and understand why Chinese greetings work the way they do.",
  guide: [
    {
      heading: "Saying hello (and why there are no 'a.m./p.m.' rules)",
      discovery: {
        problem:
          "A puzzle before we start: {{你好|nǐ hǎo|hello}} literally means 'you good'. {{老师好|lǎoshī hǎo}} means 'hello teacher' — literally 'teacher good'. So what do you think {{你们好|nǐmen hǎo}} means, and how would you greet everyone in the class at once?",
        idea:
          "Chinese greetings follow a pattern: **person + {{好|hǎo|good}}**. Once you spot it, you can build greetings you were never taught: {{你们好|nǐmen hǎo|hello everyone (you-plural good)}}, {{大家好|dàjiā hǎo|hello everybody}}, {{妈妈好|māma hǎo|hello Mum}}. You discovered a rule, not a phrase list!",
      },
      body:
        "The all-purpose greeting is {{你好|nǐ hǎo|hello}}. To be polite to a teacher or an adult you don't know well, swap {{你|nǐ|you}} for the polite {{您|nín|you (polite)}}: {{您好|nín hǎo}}.\n\nTime-of-day greetings follow the same building-block logic:\n- {{早上好|zǎoshang hǎo|good morning}}\n- {{下午好|xiàwǔ hǎo|good afternoon}}\n- {{晚上好|wǎnshang hǎo|good evening}}\n\nTo ask how someone is, add the question word {{吗|ma}} : {{你好吗？|nǐ hǎo ma?|How are you?}} A common reply is {{我很好|wǒ hěn hǎo|I'm very well}}, then bounce it back with {{你呢？|nǐ ne?|and you?}}",
      whyItWorks:
        "Why does {{吗|ma}} turn a statement into a question? Chinese doesn't rearrange word order like English ('You are…' → 'Are you…?'). Instead it keeps the sentence identical and drops a question marker on the end. {{你好|nǐ hǎo}} = 'you are good'; {{你好吗|nǐ hǎo ma}} = 'you are good + ?'. One tiny word does the job of English word-flipping.",
      strategies: ["Find the pattern", "Build, don't memorise"],
      keyPoints: [
        "person + 好 makes a greeting: 你好, 您好, 老师好, 大家好",
        "您 is the polite 'you' — use it for teachers and adults",
        "吗 at the end of a sentence turns it into a yes/no question",
        "你呢? bounces a question back: 'and you?'",
      ],
      vocab: [
        { hanzi: "你好", pinyin: "nǐ hǎo", english: "hello", pos: "greeting" },
        { hanzi: "您好", pinyin: "nín hǎo", english: "hello (polite)", pos: "greeting" },
        { hanzi: "早上好", pinyin: "zǎoshang hǎo", english: "good morning", pos: "greeting" },
        { hanzi: "晚上好", pinyin: "wǎnshang hǎo", english: "good evening", pos: "greeting" },
        { hanzi: "再见", pinyin: "zàijiàn", english: "goodbye", pos: "greeting" },
        { hanzi: "吗", pinyin: "ma", english: "question particle", pos: "particle" },
        { hanzi: "呢", pinyin: "ne", english: "and…? (bounce-back particle)", pos: "particle" },
      ],
      patterns: [
        {
          pattern: "Person + 好",
          example: { hanzi: "老师好！", pinyin: "lǎoshī hǎo!", english: "Hello, teacher!" },
          note: "Works with any person word — that's why 大家好 means 'hello everyone'.",
        },
        {
          pattern: "Statement + 吗？",
          example: { hanzi: "你好吗？", pinyin: "nǐ hǎo ma?", english: "How are you?" },
          note: "吗 turns any statement into a yes/no question without changing word order.",
        },
      ],
    },
    {
      heading: "Names: 叫 and the two ways to ask",
      discovery: {
        problem:
          "Here are two real questions Chinese people ask: {{你叫什么名字？|nǐ jiào shénme míngzi?|What's your name?}} and {{您贵姓？|nín guì xìng?|What's your (honourable) surname?}} One is for classmates, one is for your head teacher. Which is which — and what clue gives it away?",
        idea:
          "The clue is {{您|nín}} (polite you) and {{贵|guì|honourable/expensive}}. {{您贵姓|nín guì xìng}} literally asks 'your honourable surname?' — formal register. Chinese often shows politeness by *word choice*, not just tone of voice.",
      },
      body:
        "To give your full name or nickname, use {{叫|jiào|to be called}}:\n\n{{我叫李明。|Wǒ jiào Lǐ Míng.|I'm called Li Ming.}}\n\nTo ask someone's name: {{你叫什么名字？|nǐ jiào shénme míngzi?|What is your name?}} Notice {{什么|shénme|what}} sits **inside** the sentence, exactly where the answer will go — Chinese question words don't jump to the front like English 'what'.\n\nFor surnames, use {{姓|xìng|to be surnamed}}: {{我姓王。|Wǒ xìng Wáng.|My surname is Wang.}} In Chinese names the **family name comes first**: in 王小明 (Wáng Xiǎomíng), 王 is the surname.",
      whyItWorks:
        "English moves question words to the front: 'You are called WHAT' → 'WHAT are you called?'. Chinese leaves the word order alone and just replaces the unknown part with a question word. Answer: {{我叫李明|wǒ jiào Lǐ Míng}}. Question: {{你叫什么？|nǐ jiào shénme?}} — same shape, 什么 sits in the answer's seat. Learn the statement and you get the question free.",
      strategies: ["Question words sit in the answer's seat", "Work backwards from the answer"],
      keyPoints: [
        "我叫… = I'm called… (full name or given name)",
        "我姓… = my surname is…",
        "Question words (什么) stay where the answer goes — no word-order flip",
        "Chinese names put the family name first",
      ],
      vocab: [
        { hanzi: "叫", pinyin: "jiào", english: "to be called", pos: "verb" },
        { hanzi: "名字", pinyin: "míngzi", english: "name", pos: "noun" },
        { hanzi: "什么", pinyin: "shénme", english: "what", pos: "question word" },
        { hanzi: "姓", pinyin: "xìng", english: "surname; to be surnamed", pos: "noun/verb" },
        {
          hanzi: "我",
          pinyin: "wǒ",
          english: "I, me",
          pos: "pronoun",
          example: { hanzi: "我叫安娜。", pinyin: "Wǒ jiào Ānnà.", english: "I'm called Anna." },
        },
      ],
      patterns: [
        {
          pattern: "我叫 + name",
          example: { hanzi: "我叫小美。", pinyin: "Wǒ jiào Xiǎoměi.", english: "I'm called Xiaomei." },
        },
        {
          pattern: "你叫什么名字？",
          example: {
            hanzi: "你叫什么名字？",
            pinyin: "Nǐ jiào shénme míngzi?",
            english: "What's your name?",
          },
          note: "什么 replaces the name — the question keeps the statement's word order.",
        },
      ],
    },
    {
      heading: "Age and the missing verb",
      discovery: {
        problem:
          "In English you say 'I AM twelve.' Look at the Chinese: {{我十二岁|wǒ shí'èr suì|I'm 12 years old}}. Count the words: 我 (I) + 十二 (twelve) + 岁 (years-old). Something English needs is missing. What — and does Chinese care?",
        idea:
          "There's no {{是|shì|to be}}! With ages (and adjectives like 好), Chinese skips 'am/is/are'. Saying {{我是十二岁|wǒ shì shí'èr suì}} is a classic English-speaker error.",
      },
      body:
        "Ask a young person's age with {{你几岁？|nǐ jǐ suì?|How old are you?}} — {{几|jǐ|how many (small numbers)}} expects an answer under about 10, so for teens and adults it's more natural to ask {{你多大？|nǐ duō dà?|How old are you?}}\n\nAnswer: {{我十三岁。|Wǒ shísān suì.|I'm 13.}} No 是!\n\nYou'll need numbers 1–99: {{十一|shíyī|11}} is 'ten-one', {{二十|èrshí|20}} is 'two-ten', {{二十五|èrshíwǔ|25}} is 'two-ten-five'. The whole number system is three building blocks: digits, 十, and position.",
      whyItWorks:
        "Chinese treats '十二岁' like an adjective describing you, and adjectives connect directly: {{我很好|wǒ hěn hǎo}} ('I very good' — no 'am'). English inserts 'to be' because its grammar demands a verb; Chinese grammar doesn't. Knowing *why* stops you translating word-for-word.",
      strategies: ["Don't translate word-for-word", "Spot what's missing on purpose"],
      keyPoints: [
        "Ages never use 是: 我十二岁, NOT 我是十二岁",
        "几岁 for small kids; 多大 for teens/adults",
        "Numbers build from digits + 十: 25 = 二十五",
      ],
      vocab: [
        { hanzi: "岁", pinyin: "suì", english: "years old", pos: "measure word" },
        { hanzi: "几", pinyin: "jǐ", english: "how many (under ~10)", pos: "question word" },
        { hanzi: "多大", pinyin: "duō dà", english: "how old", pos: "question phrase" },
        { hanzi: "今年", pinyin: "jīnnián", english: "this year", pos: "noun" },
        { hanzi: "十", pinyin: "shí", english: "ten", pos: "number" },
      ],
      patterns: [
        {
          pattern: "Subject + number + 岁",
          example: { hanzi: "我今年十三岁。", pinyin: "Wǒ jīnnián shísān suì.", english: "I'm 13 this year." },
          note: "No 是 before the age — ever.",
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "你好", pinyin: "nǐ hǎo", english: "hello" },
      { hanzi: "您好", pinyin: "nín hǎo", english: "hello (polite)" },
      { hanzi: "早上好", pinyin: "zǎoshang hǎo", english: "good morning" },
      { hanzi: "下午好", pinyin: "xiàwǔ hǎo", english: "good afternoon" },
      { hanzi: "晚上好", pinyin: "wǎnshang hǎo", english: "good evening" },
      { hanzi: "再见", pinyin: "zàijiàn", english: "goodbye" },
      { hanzi: "明天见", pinyin: "míngtiān jiàn", english: "see you tomorrow" },
      { hanzi: "谢谢", pinyin: "xièxie", english: "thank you" },
      { hanzi: "不客气", pinyin: "bú kèqi", english: "you're welcome" },
      { hanzi: "对不起", pinyin: "duìbuqǐ", english: "sorry" },
      { hanzi: "没关系", pinyin: "méi guānxi", english: "it doesn't matter" },
      { hanzi: "我", pinyin: "wǒ", english: "I, me" },
      { hanzi: "你", pinyin: "nǐ", english: "you" },
      { hanzi: "您", pinyin: "nín", english: "you (polite)" },
      { hanzi: "他", pinyin: "tā", english: "he, him" },
      { hanzi: "她", pinyin: "tā", english: "she, her" },
      { hanzi: "叫", pinyin: "jiào", english: "to be called" },
      { hanzi: "名字", pinyin: "míngzi", english: "name" },
      { hanzi: "姓", pinyin: "xìng", english: "surname" },
      { hanzi: "什么", pinyin: "shénme", english: "what" },
      { hanzi: "岁", pinyin: "suì", english: "years old" },
      { hanzi: "几", pinyin: "jǐ", english: "how many (small)" },
      { hanzi: "今年", pinyin: "jīnnián", english: "this year" },
      { hanzi: "很", pinyin: "hěn", english: "very" },
      { hanzi: "好", pinyin: "hǎo", english: "good" },
      { hanzi: "也", pinyin: "yě", english: "also" },
      { hanzi: "吗", pinyin: "ma", english: "question particle" },
      { hanzi: "呢", pinyin: "ne", english: "and…? particle" },
    ],
    patterns: [
      {
        pattern: "Person + 好",
        example: { hanzi: "大家好！", pinyin: "Dàjiā hǎo!", english: "Hello everyone!" },
      },
      {
        pattern: "我叫 + name",
        example: { hanzi: "我叫马克。", pinyin: "Wǒ jiào Mǎkè.", english: "I'm called Mark." },
      },
      {
        pattern: "Subject + number + 岁",
        example: { hanzi: "她十二岁。", pinyin: "Tā shí'èr suì.", english: "She is 12." },
      },
      {
        pattern: "Statement + 吗？",
        example: { hanzi: "你是学生吗？", pinyin: "Nǐ shì xuésheng ma?", english: "Are you a student?" },
      },
    ],
    mnemonics: [
      { hanzi: "好", tip: "女 (woman) + 子 (child) together = 'good' — a mother with her child." },
      { hanzi: "您", tip: "你 (you) with 心 (heart) underneath — putting your heart into 'you' makes it polite." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "greet-quiz-mcq-q01",
        question: "Which greeting is the most polite way to say hello to your head teacher?",
        options: ["{{你好|nǐ hǎo}}", "{{您好|nín hǎo}}", "{{再见|zàijiàn}}", "{{你呢|nǐ ne}}"],
        answerIndex: 1,
        explanation:
          "{{您|nín}} is the polite form of 'you', so {{您好|nín hǎo}} shows respect. {{再见|zàijiàn}} means goodbye, and {{你呢|nǐ ne}} means 'and you?'.",
        guideRef: "Saying hello (and why there are no 'a.m./p.m.' rules)",
        difficulty: "warmup",
      },
      {
        id: "greet-quiz-mcq-q02",
        question: "What does {{大家好|dàjiā hǎo}} mean?",
        options: ["Good morning", "Hello everyone", "How are you?", "See you tomorrow"],
        answerIndex: 1,
        explanation:
          "{{大家|dàjiā}} means 'everyone', and the pattern person + {{好|hǎo}} makes a greeting — so 'hello everyone'.",
        guideRef: "Saying hello (and why there are no 'a.m./p.m.' rules)",
        difficulty: "warmup",
        strategy: "Find the pattern",
      },
      {
        id: "greet-quiz-mcq-q03",
        question: "Choose the correct way to say 'I am 13 years old.'",
        options: [
          "{{我是十三岁。|Wǒ shì shísān suì.}}",
          "{{我十三岁。|Wǒ shísān suì.}}",
          "{{我十三。|Wǒ shísān.}}",
          "{{十三岁我。|Shísān suì wǒ.}}",
        ],
        answerIndex: 1,
        explanation:
          "Ages take no {{是|shì|to be}} in Chinese: subject + number + {{岁|suì}}. Adding 是 is the classic English-speaker error; dropping 岁 leaves just the number 'thirteen'.",
        guideRef: "Age and the missing verb",
        difficulty: "core",
        hints: [
          "Think about the 'missing verb' discovery — what does Chinese skip that English needs?",
          "The correct shape is subject + number + 岁, with nothing in between.",
        ],
      },
      {
        id: "greet-quiz-mcq-q04",
        question:
          "Your friend asks {{你好吗？|nǐ hǎo ma?}} You feel great and want to ask them back. Which reply is best?",
        options: [
          "{{我很好，你呢？|Wǒ hěn hǎo, nǐ ne?}}",
          "{{你好！|Nǐ hǎo!}}",
          "{{我叫大卫。|Wǒ jiào Dàwèi.}}",
          "{{再见！|Zàijiàn!}}",
        ],
        answerIndex: 0,
        explanation:
          "{{我很好|wǒ hěn hǎo}} answers the question ('I'm very well') and {{你呢？|nǐ ne?}} bounces it back. The others greet, give a name, or say goodbye — none answers 'how are you?'.",
        guideRef: "Saying hello (and why there are no 'a.m./p.m.' rules)",
        difficulty: "core",
        hints: [
          "Two jobs: answer their question, then return it.",
          "呢 is the 'bounce-back' particle.",
        ],
      },
      {
        id: "greet-quiz-mcq-q05",
        question: "In the name 王小明 (Wáng Xiǎomíng), which part is the family name?",
        options: ["王", "小", "明", "小明"],
        answerIndex: 0,
        explanation:
          "Chinese puts the family name first: 王 (Wáng) is the surname, 小明 (Xiǎomíng) the given name.",
        guideRef: "Names: 叫 and the two ways to ask",
        difficulty: "warmup",
      },
      {
        id: "greet-quiz-mcq-q06",
        question:
          "Challenge: {{他们|tāmen}} means 'they'. Using patterns from this topic, what must {{他们好吗？|tāmen hǎo ma?}} mean?",
        options: [
          "Are they well?",
          "Hello, everyone!",
          "They are very good.",
          "How old are they?",
        ],
        answerIndex: 0,
        explanation:
          "他们好 = 'they are good'; adding {{吗|ma}} turns it into the yes/no question 'Are they well?'. You combined two patterns to decode a sentence you were never taught — that's the real skill.",
        difficulty: "challenge",
        strategy: "Build, don't memorise",
        hints: [
          "Break it into pieces: 他们 + 好 + 吗.",
          "What does 吗 always do to the sentence before it?",
        ],
      },
    ],
    qa: [
      {
        id: "greet-quiz-qa-q01",
        question:
          "Write a Chinese sentence introducing yourself with the name 李华 (Lǐ Huá). (Characters or pinyin.)",
        modelAnswer: "{{我叫李华。|Wǒ jiào Lǐ Huá.|I'm called Li Hua.}}",
        markScheme: [
          "Uses {{我|wǒ}} as the subject",
          "Uses the verb {{叫|jiào}} for 'to be called'",
          "Name 李华 (Lǐ Huá) placed after 叫",
        ],
        commonError: "Adding 是 (我是叫李华 ✗) — 叫 is already the verb.",
        guideRef: "Names: 叫 and the two ways to ask",
        difficulty: "warmup",
        hints: ["Pattern: 我叫 + name."],
      },
      {
        id: "greet-quiz-qa-q02",
        question:
          "Your penpal writes: {{你今年多大？|Nǐ jīnnián duō dà?}} Reply in a full Chinese sentence saying you are 12 this year.",
        modelAnswer: "{{我今年十二岁。|Wǒ jīnnián shí'èr suì.|I'm 12 this year.}}",
        markScheme: [
          "Subject {{我|wǒ}} (optionally with {{今年|jīnnián}})",
          "Correct number {{十二|shí'èr|twelve}}",
          "Ends with {{岁|suì}}",
          "No {{是|shì}} before the age",
        ],
        commonError: "我是十二岁 ✗ — ages never take 是.",
        guideRef: "Age and the missing verb",
        difficulty: "core",
        hints: [
          "Echo the question's shape: 你今年多大 → 我今年…",
          "Number then 岁, and remember what to leave out.",
        ],
        solutions: [
          {
            label: "Echo the question (recommended)",
            steps: [
              "Take the question 你今年多大？ and swap 你→我.",
              "Replace the question phrase 多大 with the answer 十二岁.",
              "Result: 我今年十二岁。 — question words sit in the answer's seat, so answering is just swapping.",
            ],
          },
          {
            label: "Build from the pattern",
            steps: [
              "Pattern: subject + (time) + number + 岁.",
              "我 + 今年 + 十二 + 岁 → 我今年十二岁。",
            ],
          },
        ],
      },
      {
        id: "greet-quiz-qa-q03",
        question:
          "Explain the difference between {{你几岁？|nǐ jǐ suì?}} and {{你多大？|nǐ duō dà?}}, and say which you'd use with a Year 8 classmate.",
        modelAnswer:
          "Both ask 'how old are you?'. {{几岁|jǐ suì}} is for small children because {{几|jǐ}} expects a small number (under about 10); {{多大|duō dà}} is for teenagers and adults. For a Year 8 classmate, 你多大？ is the natural choice.",
        markScheme: [
          "Both mean 'how old are you'",
          "{{几|jǐ}} expects a small number / used for young children",
          "{{多大|duō dà}} used for teens and adults",
          "Classmate: use 多大",
        ],
        guideRef: "Age and the missing verb",
        difficulty: "challenge",
        strategy: "Register matters — match the phrase to the person",
        hints: [
          "Think about what size of number 几 expects.",
          "A Year 8 student is older than 10…",
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "greet-mcq-a",
        title: "Paper A — Greetings essentials",
        questions: [
          {
            id: "greet-mcq-a-q01",
            question: "What does {{再见|zàijiàn}} mean?",
            options: ["Hello", "Thank you", "Goodbye", "Sorry"],
            answerIndex: 2,
            explanation: "再见 literally means 'again see' — see you again, i.e. goodbye.",
            difficulty: "warmup",
          },
          {
            id: "greet-mcq-a-q02",
            question: "Someone says {{谢谢|xièxie}}. What's the natural reply?",
            options: [
              "{{不客气|bú kèqi}}",
              "{{对不起|duìbuqǐ}}",
              "{{你好|nǐ hǎo}}",
              "{{我很好|wǒ hěn hǎo}}",
            ],
            answerIndex: 0,
            explanation:
              "谢谢 = thank you → 不客气 = you're welcome. 对不起 is 'sorry' (whose reply is {{没关系|méi guānxi}}).",
            difficulty: "warmup",
          },
          {
            id: "greet-mcq-a-q03",
            question: "Which question politely asks a stranger's surname?",
            options: [
              "{{你叫什么？|nǐ jiào shénme?}}",
              "{{您贵姓？|nín guì xìng?}}",
              "{{你几岁？|nǐ jǐ suì?}}",
              "{{你好吗？|nǐ hǎo ma?}}",
            ],
            answerIndex: 1,
            explanation:
              "您贵姓 uses polite 您 and 贵 ('honourable') — the formal way to ask a surname.",
            difficulty: "core",
          },
          {
            id: "greet-mcq-a-q04",
            question:
              "Challenge: {{晚安|wǎn'ān}} means 'good night (before bed)'. A friend texts you 晚安. What should you NOT reply?",
            options: [
              "{{晚安|wǎn'ān}}",
              "{{明天见|míngtiān jiàn}}",
              "{{早上好|zǎoshang hǎo}}",
              "{{再见|zàijiàn}}",
            ],
            answerIndex: 2,
            explanation:
              "早上好 is 'good morning' — the wrong end of the day. The others all work as sign-offs at night.",
            difficulty: "challenge",
            hints: ["晚 relates to evening/night, 早 to morning."],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "greet-qa-a",
        title: "Paper A — Written practice",
        questions: [
          {
            id: "greet-qa-a-q01",
            question:
              "Translate into Chinese: 'Hello! My surname is Wang. What is your name?' (Characters or pinyin.)",
            modelAnswer:
              "{{你好！我姓王。你叫什么名字？|Nǐ hǎo! Wǒ xìng Wáng. Nǐ jiào shénme míngzi?}}",
            markScheme: [
              "Greeting {{你好|nǐ hǎo}}",
              "{{我姓王|wǒ xìng Wáng}} using 姓 for the surname",
              "Question {{你叫什么名字|nǐ jiào shénme míngzi}} with 什么 in place",
            ],
            commonError:
              "Using 叫 for the surname (我叫王 means 'I'm called Wang' — acceptable for a name, but 姓 is the word for surnames).",
            difficulty: "core",
            hints: [
              "Three sentences: greeting, surname, question.",
              "Surname verb is 姓; 'be called' is 叫.",
            ],
          },
          {
            id: "greet-qa-a-q02",
            question:
              "A new student writes: {{大家好！我叫陈丽，我今年十三岁。|Dàjiā hǎo! Wǒ jiào Chén Lì, wǒ jīnnián shísān suì.}} Answer in English: (a) What is her name? (b) How old is she? (c) Who is she greeting?",
            modelAnswer:
              "(a) Chen Li. (b) 13 this year. (c) Everyone — 大家好 greets the whole group/class.",
            markScheme: [
              "Name: Chen Li ({{陈丽|Chén Lì}})",
              "Age: 13 / thirteen",
              "Greeting everyone / the whole class ({{大家|dàjiā}})",
            ],
            difficulty: "core",
          },
        ],
      },
    ],
  },
};
