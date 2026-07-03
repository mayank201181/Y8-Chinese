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
    {
      heading: "Where are you from? 是 and the country-name code",
      discovery: {
        problem:
          "{{中国|Zhōngguó|China}} is literally 'middle country', and {{中国人|Zhōngguórén|Chinese person}} is 'middle-country person'. {{英国人|Yīngguórén}} means 'a British person'. Singapore is {{新加坡|Xīnjiāpō}} — so without ever being taught the word, how would you say 'a Singaporean'?",
        idea:
          "**Country + {{人|rén|person}} = nationality.** {{新加坡人|Xīnjiāpōrén|Singaporean}}, {{美国人|Měiguórén|American}}, {{法国人|Fǎguórén|French person}} — you never memorise nationality words in Chinese, you build them. That's the country-name code.",
      },
      body:
        "Remember how ages banned {{是|shì|to be}}? Here it finally earns its place. When you link two **nouns** — 'I' and 'a student', 'she' and 'a Singaporean' — Chinese does use 是:\n\n{{我是学生。|Wǒ shì xuésheng.|I am a student.}}\n{{她是新加坡人。|Tā shì Xīnjiāpōrén.|She is Singaporean.}}\n\nTo ask where someone is from, use {{哪|nǎ|which}}: {{你是哪国人？|Nǐ shì nǎ guó rén?|Which country are you from?}} Just like {{什么|shénme}}, the question word 哪国 sits exactly where the answer will go: {{我是英国人。|Wǒ shì Yīngguórén.|I am British.}}\n\nTo say what you are NOT, put {{不|bù|not}} in front of the verb: {{我不是中国人。|Wǒ bú shì Zhōngguórén.|I am not Chinese.}} Pinyin alert: 不 is normally bù, but before another 4th tone it flips to rising bú — that's why we write bú shì.\n\nYour core country set:\n- {{中国|Zhōngguó|China}}\n- {{英国|Yīngguó|Britain / the UK}}\n- {{美国|Měiguó|the USA}}\n- {{新加坡|Xīnjiāpō|Singapore}}",
      whyItWorks:
        "Why does 是 appear here when ages forbade it? Think of 是 as an equals sign between two nouns: 我 = 学生. An age ({{十三岁|shísān suì}}) or an adjective ({{很好|hěn hǎo}}) *describes* you rather than equating you with another noun, so 是 stays out. Quick test before you speak: is the next word a noun? Use 是. An age or adjective? No 是. That one check catches the two most common Year 8 errors in a single move.",
      strategies: ["Country + 人 = nationality — build, don't memorise", "Noun after? 是. Age or adjective after? No 是."],
      keyPoints: [
        "是 links noun to noun: 我是学生, 她是英国人",
        "Country + 人 = nationality: 新加坡 + 人 = 新加坡人",
        "你是哪国人？ asks nationality — 哪国 sits in the answer's seat",
        "Negate with 不 before the verb: 我不是中国人 (said bú shì)",
      ],
      vocab: [
        {
          hanzi: "是",
          pinyin: "shì",
          english: "to be (links nouns)",
          pos: "verb",
          example: { hanzi: "我是学生。", pinyin: "Wǒ shì xuésheng.", english: "I am a student." },
        },
        { hanzi: "人", pinyin: "rén", english: "person", pos: "noun" },
        { hanzi: "哪", pinyin: "nǎ", english: "which", pos: "question word" },
        { hanzi: "国", pinyin: "guó", english: "country", pos: "noun" },
        { hanzi: "不", pinyin: "bù", english: "not (bú before a 4th tone)", pos: "adverb" },
        { hanzi: "中国", pinyin: "Zhōngguó", english: "China", pos: "noun" },
        { hanzi: "英国", pinyin: "Yīngguó", english: "Britain, the UK", pos: "noun" },
        { hanzi: "美国", pinyin: "Měiguó", english: "the USA", pos: "noun" },
        {
          hanzi: "新加坡",
          pinyin: "Xīnjiāpō",
          english: "Singapore",
          pos: "noun",
          example: { hanzi: "我是新加坡人。", pinyin: "Wǒ shì Xīnjiāpōrén.", english: "I am Singaporean." },
        },
      ],
      patterns: [
        {
          pattern: "Subject + 是 + country + 人",
          example: { hanzi: "他是美国人。", pinyin: "Tā shì Měiguórén.", english: "He is American." },
          note: "Drop the 人 and you claim to BE the country: 我是新加坡 = 'I am Singapore'!",
        },
        {
          pattern: "你是哪国人？",
          example: { hanzi: "你是哪国人？", pinyin: "Nǐ shì nǎ guó rén?", english: "Which country are you from?" },
          note: "哪国 replaces the country in the answer — same no-flip rule as 什么.",
        },
        {
          pattern: "Subject + 不 + verb",
          example: { hanzi: "我不是中国人。", pinyin: "Wǒ bú shì Zhōngguórén.", english: "I am not Chinese." },
          note: "不 always goes directly before the verb; before a 4th tone it is said bú.",
        },
      ],
    },
    {
      heading: "Polite phrases & classroom Chinese",
      discovery: {
        problem:
          "Three real classroom sentences all start the same way: {{请坐|qǐng zuò|please sit down}}, {{请进|qǐng jìn|please come in}}, {{请问|qǐngwèn|excuse me, may I ask…}}. What job is {{请|qǐng}} doing? And if 'say it again' is {{再说一遍|zài shuō yí biàn}}, how would you politely ask the teacher to repeat something?",
        idea:
          "{{请|qǐng|please}} in front of any instruction makes it a polite request — 'please / I invite you to…'. So {{请再说一遍|qǐng zài shuō yí biàn|please say it again}}. One little word upgrades everything you already know how to say.",
      },
      body:
        "Chinese politeness comes in **fixed pairs** — learn the phrase and its reply together, like a serve and a return:\n- {{谢谢|xièxie|thank you}} → {{不客气|bú kèqi|you're welcome}}\n- {{对不起|duìbuqǐ|sorry}} → {{没关系|méi guānxi|it doesn't matter}}\n\nYour classroom survival kit:\n- {{老师，我有问题。|Lǎoshī, wǒ yǒu wèntí.|Teacher, I have a question.}}\n- {{我不懂。|Wǒ bù dǒng.|I don't understand.}}\n- {{请再说一遍。|Qǐng zài shuō yí biàn.|Please say it again.}}\n- {{请问…|qǐngwèn…|Excuse me, may I ask…}} — the polite opener for any question to a stranger or teacher.\n\nPinyin tone alert: {{不|bù}} flips to bú before a 4th tone (bú kèqi, bú shì) but stays bù elsewhere (bù dǒng). {{一|yī}} plays the same game: before a 4th tone it becomes yí, which is why we say yí biàn.",
      whyItWorks:
        "Why is the reply to 'thank you' literally 'don't be a guest' ({{不客气|bú kèqi}})? In Chinese culture, politeness often works by *waving the thanks away*: 'no need for guest-manners between us'. Likewise {{没关系|méi guānxi}} is literally 'it has no connection' — your mistake doesn't matter. Knowing the literal meanings does two jobs: the pairs stick in your memory, and you'll never mix up which reply answers which phrase.",
      strategies: ["Learn pairs, not single phrases", "One polite word (请) upgrades any request"],
      keyPoints: [
        "谢谢 → 不客气; 对不起 → 没关系 — never swap the replies",
        "请 + instruction = polite request: 请坐, 请进, 请再说一遍",
        "请问 politely opens a question to a stranger or teacher",
        "老师，我有问题 / 我不懂 — say them instead of staying stuck",
      ],
      vocab: [
        {
          hanzi: "请",
          pinyin: "qǐng",
          english: "please; to invite",
          pos: "verb",
          example: { hanzi: "请坐。", pinyin: "Qǐng zuò.", english: "Please sit down." },
        },
        { hanzi: "请问", pinyin: "qǐngwèn", english: "excuse me, may I ask…", pos: "phrase" },
        { hanzi: "老师", pinyin: "lǎoshī", english: "teacher", pos: "noun" },
        { hanzi: "有", pinyin: "yǒu", english: "to have", pos: "verb" },
        { hanzi: "问题", pinyin: "wèntí", english: "question, problem", pos: "noun" },
        { hanzi: "懂", pinyin: "dǒng", english: "to understand", pos: "verb" },
        {
          hanzi: "再说一遍",
          pinyin: "zài shuō yí biàn",
          english: "say it again (one more time)",
          pos: "phrase",
          example: {
            hanzi: "请再说一遍。",
            pinyin: "Qǐng zài shuō yí biàn.",
            english: "Please say it again.",
          },
        },
      ],
      patterns: [
        {
          pattern: "请 + verb phrase",
          example: { hanzi: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn.", english: "Please say it again." },
          note: "请 fronts any instruction to make it polite — 请坐, 请进, 请问.",
        },
        {
          pattern: "老师，我 + verb phrase",
          example: { hanzi: "老师，我有问题。", pinyin: "Lǎoshī, wǒ yǒu wèntí.", english: "Teacher, I have a question." },
          note: "Name the person first to get their attention, then say your sentence.",
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
      { hanzi: "是", pinyin: "shì", english: "to be (links nouns)" },
      { hanzi: "人", pinyin: "rén", english: "person" },
      { hanzi: "哪国", pinyin: "nǎ guó", english: "which country (哪 which + 国 country)" },
      { hanzi: "中国", pinyin: "Zhōngguó", english: "China" },
      { hanzi: "英国", pinyin: "Yīngguó", english: "Britain, the UK" },
      { hanzi: "美国", pinyin: "Měiguó", english: "the USA" },
      { hanzi: "新加坡", pinyin: "Xīnjiāpō", english: "Singapore" },
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
      {
        pattern: "Subject + 是 + country + 人",
        example: { hanzi: "我是新加坡人。", pinyin: "Wǒ shì Xīnjiāpōrén.", english: "I am Singaporean." },
      },
      {
        pattern: "你是哪国人？",
        example: { hanzi: "你是哪国人？", pinyin: "Nǐ shì nǎ guó rén?", english: "Which country are you from?" },
      },
    ],
    mnemonics: [
      { hanzi: "好", tip: "女 (woman) + 子 (child) together = 'good' — a mother with her child." },
      { hanzi: "您", tip: "你 (you) with 心 (heart) underneath — putting your heart into 'you' makes it polite." },
      { hanzi: "国", tip: "A border 口 drawn around 玉 (jade) — a country is a wall guarding its treasure." },
      { hanzi: "请", tip: "讠 (speech) + 青 — polite requests are made with words, so 请 carries the speech radical." },
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
      {
        id: "greet-quiz-mcq-q07",
        question: "Which sentence correctly says 'I am Singaporean'?",
        options: [
          "{{我是新加坡人。|Wǒ shì Xīnjiāpōrén.}}",
          "{{我新加坡人。|Wǒ Xīnjiāpōrén.}}",
          "{{我是新加坡。|Wǒ shì Xīnjiāpō.}}",
          "{{我是人新加坡。|Wǒ shì rén Xīnjiāpō.}}",
        ],
        answerIndex: 0,
        explanation:
          "Nationality links two nouns ('I' and 'a Singaporean'), so — unlike ages — it DOES need {{是|shì}}. And the {{人|rén}} is essential: {{我是新加坡|wǒ shì Xīnjiāpō}} claims you ARE the country. 人 always follows the country name, never leads it.",
        guideRef: "Where are you from? 是 and the country-name code",
        difficulty: "core",
        strategy: "Noun after? 是. Age or adjective after? No 是.",
        hints: [
          "Is 'a Singaporean' a noun or an adjective in this sentence?",
          "Two checks: does it need 是, and what does country + 人 build?",
        ],
      },
      {
        id: "greet-quiz-mcq-q08",
        question: "A visitor asks you {{你是哪国人？|Nǐ shì nǎ guó rén?}} What are they asking?",
        options: [
          "What is your name?",
          "Which country are you from?",
          "How old are you?",
          "Are you a student?",
        ],
        answerIndex: 1,
        explanation:
          "{{哪|nǎ}} means 'which' and {{国|guó}} means 'country', so 哪国人 = 'a person of which country?'. The question word sits exactly where your answer will go: {{我是新加坡人|wǒ shì Xīnjiāpōrén}}.",
        guideRef: "Where are you from? 是 and the country-name code",
        difficulty: "core",
        strategy: "Question words sit in the answer's seat",
        hints: [
          "Break it up: 哪 (which) + 国 (country) + 人 (person).",
          "Whatever replaces 哪国 in your reply is the answer they want.",
        ],
      },
      {
        id: "greet-quiz-mcq-q09",
        question:
          "You want to stop a stranger politely before asking a question. Which word do you open with?",
        options: [
          "{{没关系|méi guānxi}}",
          "{{你呢|nǐ ne}}",
          "{{请问|qǐngwèn}}",
          "{{再见|zàijiàn}}",
        ],
        answerIndex: 2,
        explanation:
          "{{请问|qǐngwèn}} — literally 'please (may I) ask' — is the polite opener for questions to strangers and teachers. {{没关系|méi guānxi}} replies to an apology, {{你呢|nǐ ne}} bounces a question back, and {{再见|zàijiàn}} says goodbye.",
        guideRef: "Polite phrases & classroom Chinese",
        difficulty: "core",
        hints: [
          "It starts with the 'please' word.",
          "请 + 问 = please + ask.",
        ],
      },
      {
        id: "greet-quiz-mcq-q10",
        question:
          "Challenge: decode {{你也是英国人吗？|Nǐ yě shì Yīngguórén ma?}} — it stacks three patterns you know into one sentence.",
        options: [
          "You are not British.",
          "Are you also British?",
          "Is he British too?",
          "Which country are you from?",
        ],
        answerIndex: 1,
        explanation:
          "Layer by layer: {{你是英国人|nǐ shì Yīngguórén}} = 'you are British'; {{也|yě}} before the verb adds 'also'; final {{吗|ma}} turns the whole thing into a yes/no question. Statement + 也 + 吗 = 'Are you ALSO British?' — three small rules decode a sentence you were never taught.",
        guideRef: "Where are you from? 是 and the country-name code",
        difficulty: "challenge",
        strategy: "Build, don't memorise",
        hints: [
          "Strip it back: find the plain statement hiding inside.",
          "也 sits before the verb and means 'also'.",
          "What does a final 吗 always do?",
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
      {
        id: "greet-quiz-qa-q04",
        question:
          "Your penpal writes: {{我是中国人。你是哪国人？|Wǒ shì Zhōngguórén. Nǐ shì nǎ guó rén?}} Reply in a full Chinese sentence saying you are British.",
        modelAnswer: "{{我是英国人。|Wǒ shì Yīngguórén.|I am British.}}",
        markScheme: [
          "Subject {{我|wǒ}}",
          "Uses {{是|shì}} (nationality links two nouns)",
          "{{英国|Yīngguó}} for Britain",
          "Ends with {{人|rén}} — 英国人, not just 英国",
        ],
        commonError: "我是英国 ✗ — without 人 you've said 'I am Britain'. Country + 人 = nationality.",
        guideRef: "Where are you from? 是 and the country-name code",
        difficulty: "core",
        strategy: "Question words sit in the answer's seat",
        hints: [
          "Her own sentence 我是中国人 is a template — what needs swapping?",
          "Country + 人, and keep the 是 because a noun follows.",
        ],
        solutions: [
          {
            label: "Echo the penpal (recommended)",
            steps: [
              "Her statement 我是中国人 already has the exact shape you need.",
              "Swap the country: 中国 → 英国, keep everything else.",
              "Result: 我是英国人。 — her question 你是哪国人 even shows you the seat where 英国 goes.",
            ],
          },
          {
            label: "Build from the pattern",
            steps: [
              "Pattern: subject + 是 + country + 人.",
              "我 + 是 + 英国 + 人 → 我是英国人。",
              "Check: a noun (英国人) follows, so 是 is correct here — this is not an age sentence.",
            ],
          },
        ],
      },
      {
        id: "greet-quiz-qa-q05",
        question:
          "You meet your friend's grandmother for the first time. Write (a) a polite greeting and (b) a polite question asking her surname.",
        modelAnswer: "{{您好！您贵姓？|Nín hǎo! Nín guì xìng?|Hello (polite)! What is your honourable surname?}}",
        markScheme: [
          "Greeting uses polite {{您|nín}}: 您好",
          "Surname question is {{您贵姓|nín guì xìng}}",
          "Avoids casual forms (你好 / 你叫什么) for an elder",
        ],
        commonError:
          "你好！你叫什么名字？ ✗ for this situation — fine between classmates, but too casual for an elder. 您 and 贵姓 carry the respect.",
        guideRef: "Names: 叫 and the two ways to ask",
        difficulty: "core",
        strategy: "Register matters — match the phrase to the person",
        hints: [
          "Which 'you' shows respect?",
          "For surnames there's a formal question with 贵 ('honourable') built in.",
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
          {
            id: "greet-mcq-a-q05",
            question: "What does {{中国|Zhōngguó}} mean?",
            options: ["Britain", "America", "China", "Singapore"],
            answerIndex: 2,
            explanation:
              "中国 is literally 'middle country' — China. 英国 is Britain, 美国 America, 新加坡 Singapore.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "warmup",
          },
          {
            id: "greet-mcq-a-q06",
            question: "Choose the sentence that means 'He is American.'",
            options: [
              "{{他是美国。|Tā shì Měiguó.}}",
              "{{他是美国人。|Tā shì Měiguórén.}}",
              "{{他美国人。|Tā Měiguórén.}}",
              "{{他是中国人。|Tā shì Zhōngguórén.}}",
            ],
            answerIndex: 1,
            explanation:
              "Nationality needs the full chain 是 + country + 人. 他是美国 says 'he is America' (missing 人); 他美国人 is missing 是, which noun sentences require; 他是中国人 means 'he is Chinese'.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "core",
            hints: [
              "Two ingredients to check: the linking verb and the word for 'person'.",
              "Pattern: subject + 是 + country + 人.",
            ],
          },
          {
            id: "greet-mcq-a-q07",
            question:
              "Which reply actually answers the question? A: {{你是哪国人？|Nǐ shì nǎ guó rén?}} B: ___",
            options: [
              "{{我十三岁。|Wǒ shísān suì.}}",
              "{{我叫王明。|Wǒ jiào Wáng Míng.}}",
              "{{我是新加坡人。|Wǒ shì Xīnjiāpōrén.}}",
              "{{我很好。|Wǒ hěn hǎo.}}",
            ],
            answerIndex: 2,
            explanation:
              "哪国 asks 'which country', so the answer must put a country in that seat: 我是新加坡人. The others answer age, name and 'how are you?' — real questions, but not this one.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "core",
            strategy: "Question words sit in the answer's seat",
            hints: [
              "Find the question word first: 哪国.",
              "The correct reply swaps 哪国 for an actual country.",
            ],
          },
          {
            id: "greet-mcq-a-q08",
            question:
              "In pinyin we write {{不是|bú shì}} as bú shì, not bù shì. Why?",
            options: [
              "不 flips to a rising tone before another 4th tone",
              "不 is always pronounced bú",
              "是 loses its tone after 不",
              "It's just a common spelling mistake",
            ],
            answerIndex: 0,
            explanation:
              "Tone sandhi: 不 is bù on its own, but two falling tones in a row are awkward, so before a 4th tone it rises — bú shì, bú kèqi. Before other tones it stays bù: bù dǒng, bù hǎo.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "core",
            hints: [
              "Say bù shì aloud — two falling tones back to back. Comfortable?",
              "Compare 不客气 (bú kèqi) with 不懂 (bù dǒng): what does the following tone decide?",
            ],
          },
          {
            id: "greet-mcq-a-q09",
            question:
              "The teacher explains something and you're lost. Which is the best thing to say?",
            options: [
              "{{没关系。|Méi guānxi.}}",
              "{{不客气。|Bú kèqi.}}",
              "{{再见！|Zàijiàn!}}",
              "{{我不懂。请再说一遍。|Wǒ bù dǒng. Qǐng zài shuō yí biàn.}}",
            ],
            answerIndex: 3,
            explanation:
              "'I don't understand. Please say it again.' names the problem and politely asks for a repeat. 没关系 forgives an apology, 不客气 answers thanks, and 再见 walks out of the lesson!",
            guideRef: "Polite phrases & classroom Chinese",
            difficulty: "core",
            hints: [
              "You need two moves: admit you're lost, then request a repeat.",
              "请 is the word that turns 'say it again' into a polite ask.",
            ],
          },
          {
            id: "greet-mcq-a-q10",
            question: "Your teacher says {{请坐|qǐng zuò}}. What should you do?",
            options: ["Sit down", "Stand up", "Answer a question", "Leave the room"],
            answerIndex: 0,
            explanation:
              "请 = please + 坐 = sit → 'please sit down'. 请 in front of any instruction makes it a polite request, so decoding 请-sentences is just decoding the verb after it.",
            guideRef: "Polite phrases & classroom Chinese",
            difficulty: "core",
            hints: [
              "请 is only the politeness — the action is in the word after it.",
            ],
          },
          {
            id: "greet-mcq-a-q11",
            question:
              "You bump into a classmate and say {{对不起|duìbuqǐ}}. Which reply should you expect?",
            options: [
              "{{不客气|bú kèqi}}",
              "{{没关系|méi guānxi}}",
              "{{你呢|nǐ ne}}",
              "{{您好|nín hǎo}}",
            ],
            answerIndex: 1,
            explanation:
              "Politeness comes in fixed pairs: 对不起 (sorry) → 没关系 (it doesn't matter). 不客气 is the partner of 谢谢 — swapping the two replies is the classic slip.",
            guideRef: "Polite phrases & classroom Chinese",
            difficulty: "core",
            strategy: "Learn pairs, not single phrases",
            hints: [
              "Which pair does 对不起 belong to — the 'thanks' pair or the 'sorry' pair?",
              "不客气 literally waves away thanks, not apologies.",
            ],
          },
          {
            id: "greet-mcq-a-q12",
            question: "Challenge: spot the sentence a Chinese teacher would mark WRONG.",
            options: [
              "{{我是学生。|Wǒ shì xuésheng.}}",
              "{{我是十三岁。|Wǒ shì shísān suì.}}",
              "{{她是英国人。|Tā shì Yīngguórén.}}",
              "{{我不是中国人。|Wǒ bú shì Zhōngguórén.}}",
            ],
            answerIndex: 1,
            explanation:
              "是 is an equals sign between nouns: 学生 and 英国人 are nouns, so those sentences are fine, and 不 negates 是 correctly. But an age describes you rather than equating you with a noun, so 我是十三岁 breaks the rule — it must be 我十三岁.",
            guideRef: "Age and the missing verb",
            difficulty: "challenge",
            strategy: "Noun after? 是. Age or adjective after? No 是.",
            hints: [
              "Every option uses 是 — so the error is about what FOLLOWS 是.",
              "Which option has 是 before something that isn't a noun?",
              "Remember the missing-verb rule for ages.",
            ],
          },
          {
            id: "greet-mcq-a-q13",
            question:
              "Challenge: {{法国|Fǎguó}} means France — a country you haven't studied. What must {{她是法国人|tā shì Fǎguórén}} mean?",
            options: [
              "She is in France.",
              "She speaks French.",
              "She is French.",
              "She likes France.",
            ],
            answerIndex: 2,
            explanation:
              "The country-name code works on countries you've never seen: 法国 (France) + 人 (person) = a French person, and 是 equates her with that noun. Being IN France, SPEAKING French or LIKING France would all need different verbs — 是…人 can only state nationality.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "challenge",
            strategy: "Country + 人 = nationality — build, don't memorise",
            hints: [
              "Apply the formula: country + 人 = ?",
              "是 links her to a noun — which option is 'she = a ___ person'?",
            ],
          },
        ],
      },
      {
        id: "greet-mcq-b",
        title: "Paper B — Conversations & culture",
        description:
          "Real exchanges, register choices and reading short introductions — the topic in action.",
        questions: [
          {
            id: "greet-mcq-b-q01",
            question: "What does {{老师|lǎoshī}} mean?",
            options: ["Student", "Teacher", "Friend", "Grandmother"],
            answerIndex: 1,
            explanation:
              "老师 means teacher — which is why 老师好 is how a class greets one: person + 好.",
            guideRef: "Polite phrases & classroom Chinese",
            difficulty: "warmup",
          },
          {
            id: "greet-mcq-b-q02",
            question: "It's 8 a.m. and you walk into the classroom. Which greeting fits?",
            options: [
              "{{早上好|zǎoshang hǎo}}",
              "{{晚上好|wǎnshang hǎo}}",
              "{{晚安|wǎn'ān}}",
              "{{再见|zàijiàn}}",
            ],
            answerIndex: 0,
            explanation:
              "早上 is the morning, so 早上好 = good morning. 晚上好 is for the evening, 晚安 is a bedtime sign-off, and 再见 says goodbye.",
            guideRef: "Saying hello (and why there are no 'a.m./p.m.' rules)",
            difficulty: "warmup",
          },
          {
            id: "greet-mcq-b-q03",
            question: "Which country is {{新加坡|Xīnjiāpō}}?",
            options: ["China", "America", "Britain", "Singapore"],
            answerIndex: 3,
            explanation:
              "新加坡 is Singapore — a sound-borrowed name, unlike meaning-built 中国 ('middle country').",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "warmup",
          },
          {
            id: "greet-mcq-b-q04",
            question:
              "A: {{你叫什么名字？|Nǐ jiào shénme míngzi?}} Which reply fits the question?",
            options: [
              "{{我是新加坡人。|Wǒ shì Xīnjiāpōrén.}}",
              "{{我叫陈丽。|Wǒ jiào Chén Lì.}}",
              "{{我十二岁。|Wǒ shí'èr suì.}}",
              "{{我很好。|Wǒ hěn hǎo.}}",
            ],
            answerIndex: 1,
            explanation:
              "什么名字 asks for a name, so the reply must put a name where 什么 sat: 我叫陈丽. The others give nationality, age and wellbeing — answers to different questions.",
            guideRef: "Names: 叫 and the two ways to ask",
            difficulty: "core",
            strategy: "Question words sit in the answer's seat",
            hints: [
              "Underline the question word: 什么名字.",
              "The right answer fills that exact slot with a real name.",
            ],
          },
          {
            id: "greet-mcq-b-q05",
            question:
              "A: {{你是哪国人？|Nǐ shì nǎ guó rén?}} B: {{我是美国人。你呢？|Wǒ shì Měiguórén. Nǐ ne?}} What did B say?",
            options: [
              "Are you American?",
              "I'm British — and you?",
              "I'm American — and you?",
              "I'm American and I'm thirteen.",
            ],
            answerIndex: 2,
            explanation:
              "美国 + 人 = an American, and the tail 你呢？ bounces the question straight back — 'and you?'. No 吗 here, so B isn't asking a yes/no question, and nothing mentions age.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "core",
            hints: [
              "Decode the country first: 美国.",
              "呢 is the bounce-back particle from your very first lesson.",
            ],
          },
          {
            id: "greet-mcq-b-q06",
            question:
              "Your Chinese friend 李华 (Lǐ Huá) signs an email to a British friend as 'Hua Li'. Why did the name order change?",
            options: [
              "Chinese puts the family name first; English puts it last",
              "She made a spelling mistake",
              "李 is her given name, so it moves",
              "Chinese names have no surnames",
            ],
            answerIndex: 0,
            explanation:
              "In Chinese, 李 (the family name) comes first: 李华. English reverses the convention — given name first — so she flips it to 'Hua Li' for an English reader. Same name, two cultural orders.",
            guideRef: "Names: 叫 and the two ways to ask",
            difficulty: "core",
            hints: [
              "Which part of 李华 is the surname?",
              "Where does English put surnames — and where does Chinese?",
            ],
          },
          {
            id: "greet-mcq-b-q07",
            question:
              "Your friend says {{我是英国人。|Wǒ shì Yīngguórén.}} You are too, so you reply {{我也是英国人。|Wǒ yě shì Yīngguórén.}} What does {{也|yě}} add?",
            options: ["not", "also / too", "very", "a question"],
            answerIndex: 1,
            explanation:
              "也 means 'also' and sits directly before the verb: 我 + 也 + 是… = 'I also am…'. 'Not' would be 不, 'very' is 很, and questions need 吗 or a question word.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "core",
            hints: [
              "Compare the two sentences — only one word differs.",
              "The reply agrees with the friend rather than contradicting them.",
            ],
          },
          {
            id: "greet-mcq-b-q08",
            question: "Which pairing of person and greeting is correct?",
            options: [
              "Head teacher → {{您好|nín hǎo}}; classmate → {{你好|nǐ hǎo}}",
              "Head teacher → {{你好|nǐ hǎo}}; classmate → {{您好|nín hǎo}}",
              "Head teacher → {{晚安|wǎn'ān}}; classmate → {{再见|zàijiàn}}",
              "Head teacher → {{你呢|nǐ ne}}; classmate → {{吗|ma}}",
            ],
            answerIndex: 0,
            explanation:
              "您 is the respectful 'you', so 您好 suits teachers and adults; 你好 is right between equals. Reversing them isn't wrong grammar, but it misjudges register — too stiff with friends, too casual with the head.",
            guideRef: "Saying hello (and why there are no 'a.m./p.m.' rules)",
            difficulty: "core",
            strategy: "Register matters — match the phrase to the person",
            hints: [
              "Which pronoun has the heart (心) of politeness underneath?",
              "Respect flows upwards: the polite form goes to the senior person.",
            ],
          },
          {
            id: "greet-mcq-b-q09",
            question:
              "You apologise to your teacher and she smiles: {{没关系。|Méi guānxi.}} What did she mean?",
            options: [
              "You're welcome",
              "It doesn't matter",
              "Please say it again",
              "Be more careful",
            ],
            answerIndex: 1,
            explanation:
              "没关系 — literally 'it has no connection' — is the fixed reply to 对不起: your slip doesn't matter. 'You're welcome' is 不客气, the partner of 谢谢, not of an apology.",
            guideRef: "Polite phrases & classroom Chinese",
            difficulty: "core",
            strategy: "Learn pairs, not single phrases",
            hints: [
              "You said 对不起 — which reply is its fixed partner?",
              "Think of the literal meaning: 'no connection (to anything important)'.",
            ],
          },
          {
            id: "greet-mcq-b-q10",
            question:
              "Read: {{她叫林美，今年十二岁，是新加坡人。|Tā jiào Lín Měi, jīnnián shí'èr suì, shì Xīnjiāpōrén.}} Which statement is TRUE?",
            options: [
              "Lin Mei is 13 and Chinese",
              "Lin Mei is 12 and Chinese",
              "Lin Mei is 12 and Singaporean",
              "Lin Mei is 20 and Singaporean",
            ],
            answerIndex: 2,
            explanation:
              "Anchor on the signal words: the number before 岁 is 十二 (12), and the country before 人 is 新加坡 (Singapore). Both facts must match — options that get one right and one wrong are traps.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "core",
            hints: [
              "Find 岁 and read the number just before it.",
              "Find 人 and read the country just before it.",
            ],
          },
          {
            id: "greet-mcq-b-q11",
            question:
              "Challenge: decode {{他不是中国人，他是新加坡人。|Tā bú shì Zhōngguórén, tā shì Xīnjiāpōrén.}}",
            options: [
              "He is both Chinese and Singaporean.",
              "He isn't Chinese; he's Singaporean.",
              "He isn't Singaporean; he's Chinese.",
              "Is he Chinese or Singaporean?",
            ],
            answerIndex: 1,
            explanation:
              "不 negates only the verb it sits before, so 不是 hits the FIRST clause: not Chinese. The second clause has plain 是: he IS Singaporean. There's no 吗 and no question word, so it can't be a question — order of negation is everything.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "challenge",
            strategy: "Build, don't memorise",
            hints: [
              "Split at the comma — two separate statements.",
              "Which clause contains 不, and which is left positive?",
              "No 吗 anywhere, so rule out the question option.",
            ],
          },
          {
            id: "greet-mcq-b-q12",
            question:
              "Challenge: you meet a new teacher for the first time and want to greet them and ask their surname. Which is pitch-perfect?",
            options: [
              "{{你好！你叫什么？|Nǐ hǎo! Nǐ jiào shénme?}}",
              "{{晚安！你几岁？|Wǎn'ān! Nǐ jǐ suì?}}",
              "{{您好！请问，您贵姓？|Nín hǎo! Qǐngwèn, nín guì xìng?}}",
              "{{再见！您好吗？|Zàijiàn! Nín hǎo ma?}}",
            ],
            answerIndex: 2,
            explanation:
              "Three polite signals stack up in 您好！请问，您贵姓？ — 您好 (respectful hello), 请问 (polite opener) and 贵姓 (honourable surname). 你好！你叫什么？ is classmate-level casual; 晚安！你几岁？ says goodnight then asks a small child's age question; 再见！您好吗？ says goodbye before saying hello!",
            guideRef: "Names: 叫 and the two ways to ask",
            difficulty: "challenge",
            strategy: "Register matters — match the phrase to the person",
            hints: [
              "Count the politeness signals in each option: 您, 请问, 贵姓.",
              "几岁 is for small children — a double register error towards a teacher.",
              "Check the openers even make sense: one option says goodbye first.",
            ],
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
          {
            id: "greet-qa-a-q03",
            question: "Translate into Chinese: 'Thank you! Goodbye!' (Characters or pinyin.)",
            modelAnswer: "{{谢谢！再见！|Xièxie! Zàijiàn!}}",
            markScheme: [
              "{{谢谢|xièxie}} for thank you",
              "{{再见|zàijiàn}} for goodbye",
            ],
            commonError: "Mixing up 再见 (goodbye) with 不客气 (you're welcome) — 不客气 is a REPLY to thanks, not a farewell.",
            guideRef: "Polite phrases & classroom Chinese",
            difficulty: "warmup",
            hints: ["Two short set phrases — no grammar needed."],
          },
          {
            id: "greet-qa-a-q04",
            question:
              "Translate into Chinese: 'I am British. I am 13 this year.' (Characters or pinyin.)",
            modelAnswer:
              "{{我是英国人。我今年十三岁。|Wǒ shì Yīngguórén. Wǒ jīnnián shísān suì.}}",
            markScheme: [
              "Nationality uses {{是|shì}}: 我是英国人",
              "{{人|rén}} present after 英国",
              "Age has NO 是: 我(今年)十三岁",
              "Correct number {{十三|shísān}} + {{岁|suì}}",
            ],
            commonError:
              "The two classic errors in one question: 我是英国 ✗ (missing 人 — 'I am Britain') and 我是十三岁 ✗ (是 never goes with ages).",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "core",
            strategy: "Noun after? 是. Age or adjective after? No 是.",
            hints: [
              "Two sentences, two different rules about 是.",
              "Nationality = noun, so 是 stays; age = description, so 是 goes.",
              "Don't forget the 人 after the country.",
            ],
            solutions: [
              {
                label: "Pattern by pattern",
                steps: [
                  "Sentence 1 pattern: subject + 是 + country + 人 → 我是英国人。",
                  "Sentence 2 pattern: subject + (今年) + number + 岁 → 我今年十三岁。",
                  "Join them — no linking word needed between separate sentences.",
                ],
              },
              {
                label: "The 是-check",
                steps: [
                  "Ask of each sentence: is the word after the gap a NOUN?",
                  "'British (person)' is a noun → use 是. '13 years old' is a description → no 是.",
                  "Write both, then re-read checking every 是 has a noun after it.",
                ],
              },
            ],
          },
          {
            id: "greet-qa-a-q05",
            question:
              "A tourist stops you: {{请问，你是哪国人？|Qǐngwèn, nǐ shì nǎ guó rén?}} Reply as a student living in Singapore, then bounce the question back.",
            modelAnswer: "{{我是新加坡人。你呢？|Wǒ shì Xīnjiāpōrén. Nǐ ne?|I'm Singaporean. And you?}}",
            markScheme: [
              "{{我是新加坡人|wǒ shì Xīnjiāpōrén}} with 是 and final 人",
              "Bounces back with {{你呢|nǐ ne}} (or the full question 你是哪国人)",
            ],
            commonError:
              "我是新加坡 ✗ — that says 'I am Singapore'. The 人 is what turns a country into a nationality.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "core",
            strategy: "Question words sit in the answer's seat",
            hints: [
              "Their question shows you the frame — swap 你→我 and fill 哪国's seat.",
              "The cheapest way to return any question is 你呢？",
            ],
          },
          {
            id: "greet-qa-a-q06",
            question:
              "Challenge: a student wrote {{我是十二岁，我是英国。|Wǒ shì shí'èr suì, wǒ shì Yīngguó.}} Find and fix BOTH errors, and explain the rule each one breaks.",
            modelAnswer:
              "Corrected: {{我十二岁，我是英国人。|Wǒ shí'èr suì, wǒ shì Yīngguórén.}} Error 1: ages never take {{是|shì}} — 是 only links nouns, and an age is a description. Error 2: 英国 is the country; to state nationality you need country + {{人|rén}}, otherwise you've claimed to BE Britain.",
            markScheme: [
              "Removes 是 before 十二岁",
              "Adds 人 after 英国",
              "Explains: 是 links nouns, so it never goes with ages",
              "Explains: country + 人 = nationality",
            ],
            commonError:
              "Fixing only one error — check the whole sentence against BOTH 是-rules before you finish.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "challenge",
            strategy: "Noun after? 是. Age or adjective after? No 是.",
            hints: [
              "There are exactly two errors — one per clause.",
              "Run the 是-check on each clause: what follows 是, a noun or a description?",
              "In the second clause, something is missing rather than wrong.",
            ],
          },
        ],
      },
      {
        id: "greet-qa-b",
        title: "Paper B — Real conversations",
        description:
          "Roleplay, dialogue reading and a full self-introduction — everything from the topic working together.",
        questions: [
          {
            id: "greet-qa-b-q01",
            question:
              "Write the correct Chinese reply to each: (a) {{谢谢！|Xièxie!}} (b) {{对不起！|Duìbuqǐ!}}",
            modelAnswer:
              "(a) {{不客气。|Bú kèqi.|You're welcome.}} (b) {{没关系。|Méi guānxi.|It doesn't matter.}}",
            markScheme: [
              "(a) {{不客气|bú kèqi}}",
              "(b) {{没关系|méi guānxi}}",
              "Replies not swapped between the two",
            ],
            commonError:
              "Swapping the pairs — 不客气 waves away THANKS, 没关系 waves away an APOLOGY.",
            guideRef: "Polite phrases & classroom Chinese",
            difficulty: "warmup",
            hints: ["Each politeness phrase has one fixed partner reply."],
          },
          {
            id: "greet-qa-b-q02",
            question:
              "A new classmate asks: {{你叫什么名字？你多大？|Nǐ jiào shénme míngzi? Nǐ duō dà?}} Reply in two full Chinese sentences using the name 王明 (Wáng Míng) and age 13.",
            modelAnswer:
              "{{我叫王明。我今年十三岁。|Wǒ jiào Wáng Míng. Wǒ jīnnián shísān suì.}}",
            markScheme: [
              "{{我叫王明|wǒ jiào Wáng Míng}} using 叫",
              "Age sentence with {{十三岁|shísān suì}}",
              "No 是 in the age sentence",
              "Both questions answered",
            ],
            commonError: "我是十三岁 ✗ — the age question tempts you into the 是-with-age error every time.",
            guideRef: "Names: 叫 and the two ways to ask",
            difficulty: "core",
            strategy: "Question words sit in the answer's seat",
            hints: [
              "Echo each question: swap 你→我 and fill the question word's seat.",
              "什么名字 → the name; 多大 → number + 岁.",
            ],
          },
          {
            id: "greet-qa-b-q03",
            question:
              "You didn't understand what the teacher said. Write two polite Chinese sentences: say you don't understand, then ask the teacher to say it again.",
            modelAnswer:
              "{{老师，我不懂。请再说一遍。|Lǎoshī, wǒ bù dǒng. Qǐng zài shuō yí biàn.|Teacher, I don't understand. Please say it again.}}",
            markScheme: [
              "{{我不懂|wǒ bù dǒng}} with 不 before the verb",
              "Request includes {{请|qǐng}}",
              "{{再说一遍|zài shuō yí biàn}} for 'say it again'",
              "(Bonus) addresses the teacher first: 老师，…",
            ],
            commonError:
              "Dropping 请 — 再说一遍 alone is an order ('say it again!'), not a polite request.",
            guideRef: "Polite phrases & classroom Chinese",
            difficulty: "core",
            strategy: "One polite word (请) upgrades any request",
            hints: [
              "Negate 懂 the same way you negate 是.",
              "Which single word turns an instruction into a request?",
            ],
          },
          {
            id: "greet-qa-b-q04",
            question:
              "Read the dialogue. A: {{请问，您贵姓？|Qǐngwèn, nín guì xìng?}} B: {{我姓陈。你呢？|Wǒ xìng Chén. Nǐ ne?}} A: {{我姓李。|Wǒ xìng Lǐ.}} Answer in English: (a) What did A ask? (b) What is B's surname? (c) What is A's surname? (d) Which TWO words show A is being especially polite?",
            modelAnswer:
              "(a) B's (honourable) surname. (b) Chen ({{陈|Chén}}). (c) Li ({{李|Lǐ}}). (d) {{请问|qǐngwèn}} and {{您|nín}} (in 您贵姓 — plus 贵 itself counts).",
            markScheme: [
              "(a) asking the surname",
              "(b) Chen",
              "(c) Li",
              "(d) any two of: 请问 / 您 / 贵",
            ],
            commonError:
              "Swapping the surnames — track who says 我姓… in each turn; 你呢 hands the question back.",
            guideRef: "Names: 叫 and the two ways to ask",
            difficulty: "core",
            hints: [
              "姓 marks each surname — there are two.",
              "Politeness words: the polite opener and the polite 'you'.",
            ],
          },
          {
            id: "greet-qa-b-q05",
            question:
              "Translate into Chinese: 'Are you Chinese? I am not Chinese; I am Singaporean.' (Characters or pinyin.)",
            modelAnswer:
              "{{你是中国人吗？我不是中国人，我是新加坡人。|Nǐ shì Zhōngguórén ma? Wǒ bú shì Zhōngguórén, wǒ shì Xīnjiāpōrén.}}",
            markScheme: [
              "Question formed with final {{吗|ma}} (no word-order flip)",
              "Negative with {{不是|bú shì}}",
              "Both nationalities end in {{人|rén}}",
              "Pinyin (if used): bú shì, not bù shì",
            ],
            commonError:
              "Flipping word order English-style for the question ('是你…?' ✗) — 吗 at the end does the whole job.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "core",
            strategy: "Build, don't memorise",
            hints: [
              "Build the statement 你是中国人 first — then how does Chinese make it a question?",
              "For 'not', 不 slots directly before 是.",
              "Say the negative aloud: which tone does 不 take before 是?",
            ],
            solutions: [
              {
                label: "Statement + 吗 (recommended)",
                steps: [
                  "Build the plain statement: 你是中国人 ('you are Chinese').",
                  "Add 吗 to the end — Chinese never flips word order for yes/no questions: 你是中国人吗？",
                  "For the answer, reuse the same frame twice: drop 不 before 是 for the negative, then swap the country for the positive.",
                ],
              },
              {
                label: "Three frames, one pattern",
                steps: [
                  "All three sentences are the SAME pattern: subject + (不) + 是 + country + 人 (+ 吗).",
                  "Fill the frame three times: 你/是/中国人/吗 → 我/不是/中国人 → 我/是/新加坡人.",
                  "Check every nationality ends in 人 and that 不 sits directly before 是 (said bú shì).",
                ],
              },
            ],
          },
          {
            id: "greet-qa-b-q06",
            question:
              "Challenge: write a four-sentence self-introduction to your new class: greet everyone, give your name (use 李华, Lǐ Huá), your age (12), and your nationality (British).",
            modelAnswer:
              "{{大家好！我叫李华。我今年十二岁。我是英国人。|Dàjiā hǎo! Wǒ jiào Lǐ Huá. Wǒ jīnnián shí'èr suì. Wǒ shì Yīngguórén.}}",
            markScheme: [
              "Greets the group: {{大家好|dàjiā hǎo}} (or 你们好)",
              "{{我叫李华|wǒ jiào Lǐ Huá}}",
              "Age with no 是: 我(今年)十二岁",
              "Nationality with 是 and 人: 我是英国人",
            ],
            commonError:
              "The 是-mix-up under pressure: adding it to the age or dropping it (or the 人) from the nationality. Run the 是-check on every sentence before you finish.",
            guideRef: "Where are you from? 是 and the country-name code",
            difficulty: "challenge",
            strategy: "Build, don't memorise",
            hints: [
              "Four sentences = four patterns you already own: person+好, 我叫…, age, nationality.",
              "Greet the GROUP, not one person — which greeting covers everyone?",
              "Double-check 是: absent from the age sentence, present (with 人) in the nationality one.",
            ],
          },
        ],
      },
    ],
  },
};
