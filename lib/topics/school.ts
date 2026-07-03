import type { Topic } from "../types";

// TOPIC: School Life — subjects, timetables, the school day, opinions.
// House style follows lib/topics/greetings.ts (AoPS pedagogy, discovery-first).

export const school: Topic = {
  id: "school",
  title: "School Life",
  titleChinese: { hanzi: "学校生活", pinyin: "xuéxiào shēnghuó" },
  subject: "chinese",
  icon: "🏫",
  color: "sky",
  intro:
    "Which lessons do you have today? Which do you love, and which make you groan? This topic gives you the whole school day in Mandarin: naming subjects, reading timetables, and — the exam favourite — giving your opinion with a reason. Along the way you'll crack one of the most satisfying codes in Chinese: the days of the week are just numbers.",
  guide: [
    {
      heading: "Days of the week: crack the number code",
      discovery: {
        problem:
          "Look at these three days: {{星期一|xīngqīyī|Monday}} = 'week-one', {{星期二|xīngqī'èr|Tuesday}} = 'week-two', {{星期三|xīngqīsān|Wednesday}} = 'week-three'. Without being told, write down Thursday and Friday. Then predict Sunday… and get ready for a surprise.",
        idea:
          "Thursday is {{星期四|xīngqīsì}} and Friday is {{星期五|xīngqīwǔ}} — you just built them from numbers you already know. The surprise: Sunday is NOT 星期七. It's {{星期日|xīngqīrì|Sunday ('week-sun')}} or the chattier {{星期天|xīngqītiān}}. Six days follow the rule; one day is the exception. Learn the rule plus the exception and you own the whole week.",
      },
      body:
        "{{星期|xīngqī|week}} plus a number gives you Monday to Saturday: {{星期一|xīngqīyī}}, {{星期二|xīngqī'èr}}, {{星期三|xīngqīsān}}, {{星期四|xīngqīsì}}, {{星期五|xīngqīwǔ}}, {{星期六|xīngqīliù}}. Sunday breaks the pattern: {{星期日|xīngqīrì}} (written style) or {{星期天|xīngqītiān}} (spoken style).\n\nTo ask the day, use {{几|jǐ|how many}} in the number's seat: {{今天星期几？|Jīntiān xīngqī jǐ?|What day is it today?}} Answer: {{今天星期三。|Jīntiān xīngqīsān.|Today is Wednesday.}} Notice you don't need {{是|shì|to be}} — Chinese happily says 'today Wednesday' (adding 是 is also fine: 今天是星期三).\n\nAnchor yourself in time with three words:\n- {{昨天|zuótiān|yesterday}}\n- {{今天|jīntiān|today}}\n- {{明天|míngtiān|tomorrow}}",
      whyItWorks:
        "Why numbers? Chinese loves systems that recycle what you already know. Once you can count to six, you get six days free — no new words to memorise, just one pattern plus one exception. And the exception makes sense too: {{日|rì}} means 'sun/day', so 星期日 is literally 'sun-day' — pleasingly close to English 'Sunday'. When a language gives you a pattern, always push it as far as it goes, then note exactly where it breaks.",
      strategies: ["Find the pattern, then hunt for the exception", "Question words sit in the answer's seat"],
      keyPoints: [
        "星期 + number = Monday to Saturday (星期一…星期六)",
        "Sunday is the exception: 星期日 or 星期天 — never 星期七",
        "今天星期几？ asks the day; 几 sits where the number will go",
        "是 is optional: 今天星期五 and 今天是星期五 both work",
        "昨天 → 今天 → 明天: yesterday, today, tomorrow",
      ],
      vocab: [
        { hanzi: "星期", pinyin: "xīngqī", english: "week", pos: "noun" },
        {
          hanzi: "星期一",
          pinyin: "xīngqīyī",
          english: "Monday",
          pos: "noun",
          example: { hanzi: "星期一我上学。", pinyin: "Xīngqīyī wǒ shàngxué.", english: "On Monday I go to school." },
        },
        { hanzi: "星期五", pinyin: "xīngqīwǔ", english: "Friday", pos: "noun" },
        { hanzi: "星期六", pinyin: "xīngqīliù", english: "Saturday", pos: "noun" },
        { hanzi: "星期日", pinyin: "xīngqīrì", english: "Sunday (written style)", pos: "noun" },
        { hanzi: "星期天", pinyin: "xīngqītiān", english: "Sunday (spoken style)", pos: "noun" },
        { hanzi: "今天", pinyin: "jīntiān", english: "today", pos: "noun" },
        { hanzi: "明天", pinyin: "míngtiān", english: "tomorrow", pos: "noun" },
        { hanzi: "昨天", pinyin: "zuótiān", english: "yesterday", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "今天星期几？ → 今天星期 + number",
          example: { hanzi: "今天星期几？今天星期二。", pinyin: "Jīntiān xīngqī jǐ? Jīntiān xīngqī'èr.", english: "What day is it today? It's Tuesday." },
          note: "几 sits exactly where the number goes in the answer — swap 几 for the number and you're done.",
        },
        {
          pattern: "星期 + 1–6 (Sunday = 星期日/天)",
          example: { hanzi: "明天星期六。", pinyin: "Míngtiān xīngqīliù.", english: "Tomorrow is Saturday." },
          note: "Six days from one pattern; only Sunday needs its own word.",
        },
      ],
    },
    {
      heading: "Your subjects: naming lessons and counting with 节",
      discovery: {
        problem:
          "Chinese subject names are tiny descriptions. {{电脑|diànnǎo|computer}} is literally 'electric brain', and {{课|kè}} means 'lesson'. So what is {{电脑课|diànnǎo kè}}? Now decode {{数学|shùxué}} — 数 means 'number' and 学 means 'study'. Which subject is 'number-study'?",
        idea:
          "电脑课 is computing/ICT — the electric-brain lesson! And 数学 ('number-study') is maths. Almost every subject name is a compound you can take apart: {{历史|lìshǐ|history}}, {{地理|dìlǐ|geography ('earth-logic')}}, {{美术|měishù|art ('beauty-skill')}}. Decode the parts and the word explains itself.",
      },
      body:
        "Your Year 8 subjects:\n- {{汉语|Hànyǔ|Chinese language}} (also called {{中文|Zhōngwén|Chinese}})\n- {{英语|Yīngyǔ|English}}\n- {{数学|shùxué|maths}}\n- {{科学|kēxué|science}}\n- {{历史|lìshǐ|history}}\n- {{地理|dìlǐ|geography}}\n- {{体育|tǐyù|PE}}\n- {{美术|měishù|art}}\n- {{音乐|yīnyuè|music}}\n- {{电脑课|diànnǎo kè|computing}}\n\nAdd {{课|kè|lesson, class}} to any of them to mean the lesson itself: {{数学课|shùxué kè|maths lesson}}.\n\nTo COUNT lessons, Chinese needs a measure word — and for lessons it's {{节|jié|measure word for lessons}}: {{三节课|sān jié kè|three lessons}}, never 三课. Ask {{你今天有几节课？|Nǐ jīntiān yǒu jǐ jié kè?|How many lessons do you have today?}} — {{有|yǒu|to have}} is the verb.\n\nTo say WHICH lesson in the day, put {{第|dì|(ordinal marker)}} in front of the number: {{第一节|dì yī jié|first period}}, {{第二节|dì èr jié|second period}}.",
      whyItWorks:
        "Why 节? It originally means a segment of bamboo — and a school day really is chopped into segments, one lesson per segment. Chinese counts almost everything with a measure word that hints at its shape or nature; 节 is the 'segment' one, which is why it also counts train carriages and batteries. And 第 is a free gift: number + 节 counts lessons (三节 = three of them), while 第 + number + 节 orders them (第三节 = the third one). One little 第 turns 'how many' into 'which'.",
      strategies: ["Decode compounds — every part carries meaning", "Counting vs ordering: 三节 = three, 第三节 = the third"],
      keyPoints: [
        "Subject + 课 = the lesson: 数学课, 音乐课",
        "汉语 and 中文 both mean Chinese — you'll meet both",
        "Lessons take the measure word 节: 三节课, not 三课",
        "有 is the verb for having lessons: 我今天有六节课",
        "第 + number + 节 = which period: 第一节 = first period",
      ],
      vocab: [
        { hanzi: "汉语", pinyin: "Hànyǔ", english: "Chinese (language)", pos: "noun" },
        { hanzi: "英语", pinyin: "Yīngyǔ", english: "English (language)", pos: "noun" },
        {
          hanzi: "数学",
          pinyin: "shùxué",
          english: "maths",
          pos: "noun",
          example: { hanzi: "我有数学课。", pinyin: "Wǒ yǒu shùxué kè.", english: "I have a maths lesson." },
        },
        { hanzi: "科学", pinyin: "kēxué", english: "science", pos: "noun" },
        { hanzi: "历史", pinyin: "lìshǐ", english: "history", pos: "noun" },
        { hanzi: "地理", pinyin: "dìlǐ", english: "geography", pos: "noun" },
        { hanzi: "体育", pinyin: "tǐyù", english: "PE, sport", pos: "noun" },
        { hanzi: "美术", pinyin: "měishù", english: "art", pos: "noun" },
        { hanzi: "音乐", pinyin: "yīnyuè", english: "music", pos: "noun" },
        { hanzi: "节", pinyin: "jié", english: "measure word for lessons", pos: "measure word" },
      ],
      patterns: [
        {
          pattern: "Subject + 有 + number + 节 + 课",
          example: { hanzi: "我今天有五节课。", pinyin: "Wǒ jīntiān yǒu wǔ jié kè.", english: "I have five lessons today." },
          note: "节 must sit between the number and 课 — Chinese never counts nouns bare.",
        },
        {
          pattern: "第 + number + 节 (+ 课)",
          example: { hanzi: "第一节是英语课。", pinyin: "Dì yī jié shì Yīngyǔ kè.", english: "The first period is English." },
          note: "第 turns a counting number into an ordering number: third lesson, first period.",
        },
      ],
    },
    {
      heading: "The school day: 上 and 下 run everything",
      discovery: {
        problem:
          "You know {{上午|shàngwǔ|morning}} and {{下午|xiàwǔ|afternoon}}. Now meet {{上课|shàngkè|to start class / have class}} and {{下课|xiàkè|class ends}}. Two pairs, same two characters: {{上|shàng|up; to start}} and {{下|xià|down; to finish}}. So if {{上学|shàngxué}} uses 上 with 学 (study/school) — what must it mean?",
        idea:
          "上学 means 'to go to school'! 上 marks going up / getting started (morning, class begins, off to school); 下 marks coming down / wrapping up (afternoon, class over). One pair of characters organises the entire school day. The odd one out is {{放学|fàngxué|school finishes}} — {{放|fàng}} means 'to release': at the end of the day, school sets you free.",
      },
      body:
        "The school-day verbs, in the order they happen:\n- {{上学|shàngxué|to go to school}}\n- {{上课|shàngkè|to have class / class starts}}\n- {{下课|xiàkè|class ends}}\n- {{放学|fàngxué|school finishes}}\n- {{做作业|zuò zuòyè|to do homework}}\n- {{考试|kǎoshì|to take an exam}}\n- {{学习|xuéxí|to study, to learn}}\n\nNow the single most important grammar rule in this topic: **time comes before the verb** (usually right after the subject). {{我星期一上午有三节课。|Wǒ xīngqīyī shàngwǔ yǒu sān jié kè.|I have three lessons on Monday morning.}} English can dangle 'on Monday morning' at the end; Chinese cannot: 我有三节课星期一上午 is wrong.\n\nOrder times from BIG to SMALL: day before part-of-day — 星期一 (big) then 上午 (small).\n\nTo say where something happens, {{在|zài|at, in}} + place also goes before the verb: {{我在学校学习。|Wǒ zài xuéxiào xuéxí.|I study at school.}}",
      whyItWorks:
        "Chinese sentences work like a film script: first set the scene (when, where), then roll the action. 我 (who) 星期一上午 (when) 在学校 (where) 上课 (what happens). English lets you bolt the scenery on at the end; Chinese fixes it up front, always big-to-small — that's also why the date order is year-month-day. If you remember 'scene first, action second', half of Chinese word order comes free.",
      strategies: ["Time before verb — always", "Scene first, action second", "Big to small: 星期一 before 上午"],
      keyPoints: [
        "上 = up/start (上午, 上课, 上学); 下 = down/finish (下午, 下课)",
        "放学 = school lets you go — 放 means 'release'",
        "Time words go BEFORE the verb: 我星期五考试, never 我考试星期五",
        "Big time before small time: 明天下午, 星期三上午",
        "在 + place also sits before the verb: 我在学校做作业",
      ],
      vocab: [
        { hanzi: "上学", pinyin: "shàngxué", english: "to go to school", pos: "verb" },
        { hanzi: "上课", pinyin: "shàngkè", english: "to have class; class starts", pos: "verb" },
        { hanzi: "下课", pinyin: "xiàkè", english: "class ends", pos: "verb" },
        { hanzi: "放学", pinyin: "fàngxué", english: "school finishes", pos: "verb" },
        {
          hanzi: "做作业",
          pinyin: "zuò zuòyè",
          english: "to do homework",
          pos: "verb phrase",
          example: { hanzi: "我晚上做作业。", pinyin: "Wǒ wǎnshang zuò zuòyè.", english: "I do homework in the evening." },
        },
        { hanzi: "考试", pinyin: "kǎoshì", english: "to take an exam; exam", pos: "verb/noun" },
        { hanzi: "学习", pinyin: "xuéxí", english: "to study, to learn", pos: "verb" },
        { hanzi: "上午", pinyin: "shàngwǔ", english: "morning", pos: "noun" },
        { hanzi: "下午", pinyin: "xiàwǔ", english: "afternoon", pos: "noun" },
        { hanzi: "在", pinyin: "zài", english: "at, in (before a place)", pos: "preposition" },
      ],
      patterns: [
        {
          pattern: "Subject + time + verb",
          example: { hanzi: "我星期五下午考试。", pinyin: "Wǒ xīngqīwǔ xiàwǔ kǎoshì.", english: "I have an exam on Friday afternoon." },
          note: "The time phrase is glued before the verb — English end-position is a classic error.",
        },
        {
          pattern: "Subject + 在 + place + verb",
          example: { hanzi: "我在学校做作业。", pinyin: "Wǒ zài xuéxiào zuò zuòyè.", english: "I do my homework at school." },
          note: "Where, like when, is scenery — it goes before the action.",
        },
        {
          pattern: "上 vs 下 pairs",
          example: { hanzi: "上午上课，下午下课。", pinyin: "Shàngwǔ shàngkè, xiàwǔ xiàkè.", english: "Classes start in the morning and end in the afternoon." },
          note: "上 = up/begin, 下 = down/finish — one contrast, four words.",
        },
      ],
    },
    {
      heading: "Opinions: 喜欢, 觉得 and winning the 'why' game",
      discovery: {
        problem:
          "{{我喜欢数学。|Wǒ xǐhuan shùxué.|I like maths.}} You also know {{最|zuì|most}} and {{不|bù|not}}. Without a dictionary, what do {{我最喜欢数学|wǒ zuì xǐhuan shùxué}} and {{我不喜欢数学|wǒ bù xǐhuan shùxué}} mean?",
        idea:
          "'Maths is my favourite' (most-like) and 'I don't like maths'. Little words stack up in front of the verb: 不喜欢, 最喜欢, even 最不喜欢 ('like least of all'). You never learned those as phrases — you built them.",
      },
      body:
        "Like, dislike, favourite:\n- {{我喜欢音乐。|Wǒ xǐhuan yīnyuè.|I like music.}}\n- {{我不喜欢考试。|Wǒ bù xǐhuan kǎoshì.|I don't like exams.}}\n- {{我最喜欢体育课。|Wǒ zuì xǐhuan tǐyù kè.|PE is my favourite lesson.}}\n\nThe exam question you WILL meet: {{你最喜欢什么课？为什么？|Nǐ zuì xǐhuan shénme kè? Wèishénme?|What's your favourite subject? Why?}}\n\nFor 'I think…', use {{觉得|juéde|to think, to feel}} + subject + adjective:\n- {{我觉得数学很难。|Wǒ juéde shùxué hěn nán.|I think maths is hard.}}\n- {{我觉得英语很容易。|Wǒ juéde Yīngyǔ hěn róngyì.|I think English is easy.}}\n- {{我觉得历史很有意思。|Wǒ juéde lìshǐ hěn yǒu yìsi.|I think history is interesting.}}\n- {{我觉得地理没意思。|Wǒ juéde dìlǐ méi yìsi.|I think geography is boring.}}\n\nGive a reason with the matched pair {{因为|yīnwèi|because}}…{{所以|suǒyǐ|so, therefore}}…: {{因为体育很有意思，所以我最喜欢体育。|Yīnwèi tǐyù hěn yǒu yìsi, suǒyǐ wǒ zuì xǐhuan tǐyù.|Because PE is fun, PE is my favourite.}}\n\nPinyin watch: 不难 is bù nán — {{难|nán|difficult}} is 2nd tone, and 不 only changes to bú before a 4th tone (as in 不是 bú shì).",
      whyItWorks:
        "Why does Chinese use BOTH 因为 and 所以 when English forbids 'because…so…' in one sentence? Chinese likes to signpost both halves of a logic pair: here comes the reason (因为), here comes the result (所以). It feels like double-marking to an English speaker, but it makes long sentences easier to follow — you always know which half you're in. In the exam, a 因为…所以 sentence is the cheapest way to turn a one-mark answer into a two-mark answer.",
      strategies: ["Build, don't memorise: stack 不 / 最 in front of 喜欢", "Answer why-questions with the 因为…所以 frame", "Opinion + reason scores double"],
      keyPoints: [
        "喜欢 / 不喜欢 / 最喜欢 + subject: like / dislike / favourite",
        "觉得 + subject + 很难 / 很容易 / 很有意思 / 没意思 gives your view",
        "为什么 asks why; answer with 因为… (reason) 所以… (result)",
        "Chinese keeps BOTH 因为 and 所以 in one sentence",
        "Pinyin: 不难 = bù nán; 不 becomes bú only before 4th tones (不是 bú shì)",
      ],
      vocab: [
        {
          hanzi: "喜欢",
          pinyin: "xǐhuan",
          english: "to like",
          pos: "verb",
          example: { hanzi: "你喜欢科学吗？", pinyin: "Nǐ xǐhuan kēxué ma?", english: "Do you like science?" },
        },
        { hanzi: "最", pinyin: "zuì", english: "most (最喜欢 = favourite)", pos: "adverb" },
        { hanzi: "觉得", pinyin: "juéde", english: "to think, to feel", pos: "verb" },
        { hanzi: "难", pinyin: "nán", english: "difficult", pos: "adjective" },
        { hanzi: "容易", pinyin: "róngyì", english: "easy", pos: "adjective" },
        { hanzi: "有意思", pinyin: "yǒu yìsi", english: "interesting, fun", pos: "adjective phrase" },
        { hanzi: "没意思", pinyin: "méi yìsi", english: "boring, dull", pos: "adjective phrase" },
        { hanzi: "为什么", pinyin: "wèishénme", english: "why", pos: "question word" },
        { hanzi: "因为", pinyin: "yīnwèi", english: "because", pos: "conjunction" },
        { hanzi: "所以", pinyin: "suǒyǐ", english: "so, therefore", pos: "conjunction" },
      ],
      patterns: [
        {
          pattern: "我最喜欢 + subject",
          example: { hanzi: "我最喜欢美术课。", pinyin: "Wǒ zuì xǐhuan měishù kè.", english: "Art is my favourite lesson." },
          note: "最 sits directly before 喜欢 — 'most-like' = favourite.",
        },
        {
          pattern: "觉得 + subject + adjective",
          example: { hanzi: "我觉得科学很有意思。", pinyin: "Wǒ juéde kēxué hěn yǒu yìsi.", english: "I think science is really interesting." },
          note: "No 是 before the adjective — 很 does the linking job.",
        },
        {
          pattern: "因为 A，所以 B",
          example: {
            hanzi: "因为数学很难，所以我不喜欢数学。",
            pinyin: "Yīnwèi shùxué hěn nán, suǒyǐ wǒ bù xǐhuan shùxué.",
            english: "Because maths is hard, I don't like it.",
          },
          note: "Keep both halves — Chinese pairs 因为 with 所以.",
        },
      ],
    },
    {
      heading: "People, places and gentle comparisons with 比",
      discovery: {
        problem:
          "Chinese place names are transparent: {{图书馆|túshūguǎn|library}} is 'chart-book-building'. Now decode {{实验室|shíyànshì}}: {{实验|shíyàn}} means 'experiment' and {{室|shì}} means 'room'. And {{同学|tóngxué}}: 同 = same, 学 = study. Who is a 'same-study' person?",
        idea:
          "实验室 is the science lab (experiment-room), and a 同学 is a classmate — someone who studies the same things alongside you. Just like subjects, the people and places of school are compounds that explain themselves. Decode, don't memorise.",
      },
      body:
        "People at school:\n- {{老师|lǎoshī|teacher}}\n- {{同学|tóngxué|classmate}}\n- {{校长|xiàozhǎng|head teacher}} — literally 'school-chief'\n\nPlaces around school:\n- {{教室|jiàoshì|classroom}}\n- {{图书馆|túshūguǎn|library}}\n- {{操场|cāochǎng|sports field, playground}}\n- {{食堂|shítáng|canteen}} — the 'food hall'\n- {{实验室|shíyànshì|laboratory}}\n\nUse them with 在: {{我在图书馆做作业。|Wǒ zài túshūguǎn zuò zuòyè.|I do my homework in the library.}}\n\nFinally, a gentle new tool: comparing with {{比|bǐ|than, compared with}}. The shape is **A + 比 + B + adjective**: {{数学比英语难。|Shùxué bǐ Yīngyǔ nán.|Maths is harder than English.}} Read it as 'A, compared with B, is hard'. One trap: no {{很|hěn}} in a 比 sentence — 数学比英语很难 is wrong, because the comparison itself already says 'how hard'.",
      whyItWorks:
        "English changes the adjective to compare (hard → harder). Chinese never touches the adjective; instead it inserts the measuring stick 比 B before it. So 数学比英语难 is literally 'maths, measured against English, is hard' — the 'more' is built into 比. That's also why 很 gets evicted: 很 answers 'how hard in general?', but a 比 sentence answers 'hard compared with what?' — two different questions, and the sentence only has room for one.",
      strategies: ["Decode compounds — every part carries meaning", "比 sentence: A 比 B + bare adjective (no 很)"],
      keyPoints: [
        "老师 teaches you, 同学 studies with you, 校长 runs the school",
        "教室 / 图书馆 / 操场 / 食堂 / 实验室: classroom, library, field, canteen, lab",
        "A 比 B + adjective = 'A is more-adjective than B'",
        "Never add 很 in a 比 sentence: 数学比英语难 ✓, 数学比英语很难 ✗",
        "The adjective never changes — 比 carries the 'more'",
      ],
      vocab: [
        { hanzi: "老师", pinyin: "lǎoshī", english: "teacher", pos: "noun" },
        { hanzi: "同学", pinyin: "tóngxué", english: "classmate", pos: "noun" },
        { hanzi: "校长", pinyin: "xiàozhǎng", english: "head teacher", pos: "noun" },
        { hanzi: "教室", pinyin: "jiàoshì", english: "classroom", pos: "noun" },
        { hanzi: "图书馆", pinyin: "túshūguǎn", english: "library", pos: "noun" },
        { hanzi: "操场", pinyin: "cāochǎng", english: "sports field, playground", pos: "noun" },
        { hanzi: "食堂", pinyin: "shítáng", english: "canteen", pos: "noun" },
        { hanzi: "实验室", pinyin: "shíyànshì", english: "laboratory", pos: "noun" },
        {
          hanzi: "比",
          pinyin: "bǐ",
          english: "than, compared with",
          pos: "preposition",
          example: { hanzi: "汉语比英语有意思。", pinyin: "Hànyǔ bǐ Yīngyǔ yǒu yìsi.", english: "Chinese is more interesting than English." },
        },
      ],
      patterns: [
        {
          pattern: "A + 比 + B + adjective",
          example: { hanzi: "科学比历史容易。", pinyin: "Kēxué bǐ lìshǐ róngyì.", english: "Science is easier than history." },
          note: "No 很 and no change to the adjective — 比 does all the comparing.",
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "星期", pinyin: "xīngqī", english: "week" },
      { hanzi: "星期一", pinyin: "xīngqīyī", english: "Monday" },
      { hanzi: "星期日", pinyin: "xīngqīrì", english: "Sunday" },
      { hanzi: "今天", pinyin: "jīntiān", english: "today" },
      { hanzi: "明天", pinyin: "míngtiān", english: "tomorrow" },
      { hanzi: "昨天", pinyin: "zuótiān", english: "yesterday" },
      { hanzi: "汉语", pinyin: "Hànyǔ", english: "Chinese (language)" },
      { hanzi: "中文", pinyin: "Zhōngwén", english: "Chinese (language)" },
      { hanzi: "英语", pinyin: "Yīngyǔ", english: "English" },
      { hanzi: "数学", pinyin: "shùxué", english: "maths" },
      { hanzi: "科学", pinyin: "kēxué", english: "science" },
      { hanzi: "历史", pinyin: "lìshǐ", english: "history" },
      { hanzi: "地理", pinyin: "dìlǐ", english: "geography" },
      { hanzi: "体育", pinyin: "tǐyù", english: "PE, sport" },
      { hanzi: "美术", pinyin: "měishù", english: "art" },
      { hanzi: "音乐", pinyin: "yīnyuè", english: "music" },
      { hanzi: "电脑课", pinyin: "diànnǎo kè", english: "computing (lesson)" },
      { hanzi: "课", pinyin: "kè", english: "lesson, class" },
      { hanzi: "节", pinyin: "jié", english: "measure word for lessons" },
      { hanzi: "第一节", pinyin: "dì yī jié", english: "first period" },
      { hanzi: "上学", pinyin: "shàngxué", english: "to go to school" },
      { hanzi: "上课", pinyin: "shàngkè", english: "to have class; class starts" },
      { hanzi: "下课", pinyin: "xiàkè", english: "class ends" },
      { hanzi: "放学", pinyin: "fàngxué", english: "school finishes" },
      { hanzi: "做作业", pinyin: "zuò zuòyè", english: "to do homework" },
      { hanzi: "考试", pinyin: "kǎoshì", english: "to take an exam; exam" },
      { hanzi: "学习", pinyin: "xuéxí", english: "to study, to learn" },
      { hanzi: "上午", pinyin: "shàngwǔ", english: "morning" },
      { hanzi: "下午", pinyin: "xiàwǔ", english: "afternoon" },
      { hanzi: "有", pinyin: "yǒu", english: "to have" },
      { hanzi: "喜欢", pinyin: "xǐhuan", english: "to like" },
      { hanzi: "觉得", pinyin: "juéde", english: "to think, to feel" },
      { hanzi: "难", pinyin: "nán", english: "difficult" },
      { hanzi: "容易", pinyin: "róngyì", english: "easy" },
      { hanzi: "有意思", pinyin: "yǒu yìsi", english: "interesting, fun" },
    ],
    patterns: [
      {
        pattern: "今天星期几？",
        example: { hanzi: "今天星期几？今天星期四。", pinyin: "Jīntiān xīngqī jǐ? Jīntiān xīngqīsì.", english: "What day is it? Thursday." },
      },
      {
        pattern: "Subject + time + 有 + number + 节课",
        example: {
          hanzi: "我星期三上午有两节课。",
          pinyin: "Wǒ xīngqīsān shàngwǔ yǒu liǎng jié kè.",
          english: "I have two lessons on Wednesday morning.",
        },
      },
      {
        pattern: "我最喜欢 + subject",
        example: { hanzi: "我最喜欢音乐课。", pinyin: "Wǒ zuì xǐhuan yīnyuè kè.", english: "Music is my favourite lesson." },
      },
      {
        pattern: "觉得 + subject + adjective",
        example: { hanzi: "我觉得历史很有意思。", pinyin: "Wǒ juéde lìshǐ hěn yǒu yìsi.", english: "I think history is really interesting." },
      },
      {
        pattern: "因为 A，所以 B",
        example: {
          hanzi: "因为汉语很有意思，所以我最喜欢汉语。",
          pinyin: "Yīnwèi Hànyǔ hěn yǒu yìsi, suǒyǐ wǒ zuì xǐhuan Hànyǔ.",
          english: "Because Chinese is interesting, it's my favourite subject.",
        },
      },
      {
        pattern: "A + 比 + B + adjective",
        example: { hanzi: "数学比英语难。", pinyin: "Shùxué bǐ Yīngyǔ nán.", english: "Maths is harder than English." },
      },
    ],
    mnemonics: [
      { hanzi: "课", tip: "讠(words) + 果 (fruit) — a lesson is the fruit of all that talking." },
      { hanzi: "星", tip: "日 (sun) above 生 (born) — a star is a newborn sun. 星期 'star-period' = week." },
      { hanzi: "学", tip: "Sparks of knowledge raining onto a roof with 子 (child) underneath — a child soaking up learning." },
      { hanzi: "比", tip: "Two people standing side by side, sizing each other up — that's comparing." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "sch-quiz-mcq-q01",
        question: "Using the number code, what day is {{星期四|xīngqīsì}}?",
        options: ["Tuesday", "Thursday", "Friday", "Sunday"],
        answerIndex: 1,
        explanation:
          "星期 + number names the day, and {{四|sì}} is four — so 星期四 is day four, Thursday. No memorising needed: count it.",
        guideRef: "Days of the week: crack the number code",
        difficulty: "warmup",
        strategy: "Find the pattern, then hunt for the exception",
      },
      {
        id: "sch-quiz-mcq-q02",
        question: "Which subject is {{数学|shùxué}} — literally 'number-study'?",
        options: ["Science", "History", "Maths", "Geography"],
        answerIndex: 2,
        explanation:
          "数 means 'number' and 学 means 'study' — the study of numbers is maths. Decoding the parts beats memorising the word.",
        guideRef: "Your subjects: naming lessons and counting with 节",
        difficulty: "warmup",
        strategy: "Decode compounds — every part carries meaning",
      },
      {
        id: "sch-quiz-mcq-q03",
        question: "Fill the gap: {{我今天有三|wǒ jīntiān yǒu sān}} ___ {{课|kè}}.",
        options: ["{{个|gè}}", "{{节|jié}}", "{{岁|suì}}", "{{吗|ma}}"],
        answerIndex: 1,
        explanation:
          "Lessons take the measure word {{节|jié}} ('segment'): 三节课 = three lessons. 岁 counts years of age, and 吗 is a question particle, not a measure word.",
        guideRef: "Your subjects: naming lessons and counting with 节",
        difficulty: "warmup",
      },
      {
        id: "sch-quiz-mcq-q04",
        question: "The bell goes and your teacher says {{下课！|xiàkè!}} What just happened?",
        options: ["Class is starting", "Class has ended", "School is starting", "An exam is starting"],
        answerIndex: 1,
        explanation:
          "下 marks finishing (as in 下午, the 'down' half of the day), so 下课 means class is over. Class starting would be {{上课|shàngkè}}.",
        guideRef: "The school day: 上 and 下 run everything",
        difficulty: "core",
        hints: ["Think of the 上/下 pairs: which one is 'up/start' and which is 'down/finish'?", "上课 = class starts, so 下课 = …"],
        strategy: "Find the pattern, then hunt for the exception",
      },
      {
        id: "sch-quiz-mcq-q05",
        question: "Which sentence correctly says 'I have a Chinese lesson on Monday'?",
        options: [
          "{{我有汉语课星期一。|Wǒ yǒu Hànyǔ kè xīngqīyī.}}",
          "{{有我汉语课星期一。|Yǒu wǒ Hànyǔ kè xīngqīyī.}}",
          "{{我星期一有汉语课。|Wǒ xīngqīyī yǒu Hànyǔ kè.}}",
          "{{汉语课有我星期一。|Hànyǔ kè yǒu wǒ xīngqīyī.}}",
        ],
        answerIndex: 2,
        explanation:
          "Time goes BEFORE the verb: 我 (who) + 星期一 (when) + 有汉语课 (action). Option one is the classic English-order error, dangling the time at the end.",
        guideRef: "The school day: 上 and 下 run everything",
        difficulty: "core",
        hints: [
          "Where does Chinese put time words — before or after the verb?",
          "Scene first, action second: who → when → what happens.",
        ],
        strategy: "Time before verb — always",
      },
      {
        id: "sch-quiz-mcq-q06",
        question: "Your penpal asks: {{你最喜欢什么课？|Nǐ zuì xǐhuan shénme kè?}} Which reply actually answers the question?",
        options: [
          "{{我不喜欢考试。|Wǒ bù xǐhuan kǎoshì.}}",
          "{{我最喜欢体育课。|Wǒ zuì xǐhuan tǐyù kè.}}",
          "{{我今天有五节课。|Wǒ jīntiān yǒu wǔ jié kè.}}",
          "{{我在学校上课。|Wǒ zài xuéxiào shàngkè.}}",
        ],
        answerIndex: 1,
        explanation:
          "The question asks for your FAVOURITE subject (最喜欢), so the answer should echo 最喜欢 + a subject: 我最喜欢体育课. The others talk about exams, lesson counts and places — none names a favourite.",
        guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
        difficulty: "core",
        hints: ["Question words sit in the answer's seat — replace 什么课 with a subject.", "Echo the question's shape: 你最喜欢… → 我最喜欢…"],
        strategy: "Question words sit in the answer's seat",
      },
      {
        id: "sch-quiz-mcq-q07",
        question: "What does {{我觉得历史很有意思|wǒ juéde lìshǐ hěn yǒu yìsi}} mean?",
        options: [
          "I think history is very hard.",
          "I don't like history.",
          "I think history is very interesting.",
          "History is my favourite subject.",
        ],
        answerIndex: 2,
        explanation:
          "觉得 = 'I think/feel', 历史 = history, 很有意思 = very interesting. 'Very hard' would be 很难, and 'favourite' would need 最喜欢.",
        guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
        difficulty: "core",
        hints: ["觉得 introduces an opinion: 'I think…'.", "有意思 is literally 'has meaning/flavour' — interesting."],
      },
      {
        id: "sch-quiz-mcq-q08",
        question: "The number code covers Monday to Saturday. Which of these really means Sunday?",
        options: ["{{星期七|xīngqīqī}}", "{{星期日|xīngqīrì}}", "{{星期六|xīngqīliù}}", "{{七星期|qī xīngqī}}"],
        answerIndex: 1,
        explanation:
          "Sunday is the one exception to the number code: {{星期日|xīngqīrì}} ('week-sun'), or 星期天 in speech. 星期七 doesn't exist, and 星期六 is Saturday.",
        guideRef: "Days of the week: crack the number code",
        difficulty: "core",
        hints: ["Six days follow the rule; the seventh breaks it.", "日 means 'sun' — think of English 'SUN-day'."],
        strategy: "Find the pattern, then hunt for the exception",
      },
      {
        id: "sch-quiz-mcq-q09",
        question:
          "Decode the timetable: {{我星期三上午有两节课：第一节是科学，第二节是美术。|Wǒ xīngqīsān shàngwǔ yǒu liǎng jié kè: dì yī jié shì kēxué, dì èr jié shì měishù.}} What is the SECOND lesson on Wednesday morning?",
        options: ["Science", "Art", "Music", "Maths"],
        answerIndex: 1,
        explanation:
          "第二节是美术 — the second period is 美术, art. 科学 (science) is the first period, and 美术 ('beauty-skill') must not be confused with 音乐 (music).",
        guideRef: "Your subjects: naming lessons and counting with 节",
        difficulty: "challenge",
        hints: [
          "第 + number + 节 tells you WHICH period — find 第二节.",
          "Everything after 第二节是 names the subject you need.",
          "美术 is 'beauty-skill'; 音乐 is 'sound-joy'. Which one appears?",
        ],
        strategy: "Decode compounds — every part carries meaning",
      },
      {
        id: "sch-quiz-mcq-q10",
        question:
          "Challenge: {{我觉得数学比科学难。|Wǒ juéde shùxué bǐ kēxué nán.}} Which statement is TRUE for this speaker?",
        options: [
          "Science is harder than maths.",
          "Maths and science are equally hard.",
          "Maths is harder than science.",
          "The speaker likes maths more than science.",
        ],
        answerIndex: 2,
        explanation:
          "The 比 frame is A 比 B + adjective = 'A is more-adjective than B'. A is 数学 (maths), B is 科学 (science), adjective 难 — maths is harder. The sentence says nothing about liking, only difficulty.",
        guideRef: "People, places and gentle comparisons with 比",
        difficulty: "challenge",
        hints: [
          "Label the frame: A 比 B + adjective.",
          "Which subject sits in the A seat, before 比?",
          "比 only compares the adjective given (难) — it says nothing about 喜欢.",
        ],
        strategy: "比 sentence: A 比 B + bare adjective (no 很)",
      },
    ],
    qa: [
      {
        id: "sch-quiz-qa-q01",
        question: "Translate into English: {{我最喜欢音乐课。|Wǒ zuì xǐhuan yīnyuè kè.}}",
        modelAnswer: "Music is my favourite lesson. (Also fine: 'I like music class the most.')",
        markScheme: [
          "Identifies {{音乐|yīnyuè}} as music",
          "{{最喜欢|zuì xǐhuan}} rendered as 'favourite' / 'like most'",
          "Recognises {{课|kè}} as lesson/class",
        ],
        commonError: "Translating 最喜欢 as just 'like' — 最 upgrades it to 'like MOST', i.e. favourite.",
        guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
        difficulty: "warmup",
        hints: ["最 means 'most' — what does 'most-like' mean in natural English?"],
      },
      {
        id: "sch-quiz-qa-q02",
        question:
          "Your penpal writes: {{你最喜欢什么课？为什么？|Nǐ zuì xǐhuan shénme kè? Wèishénme?}} Reply in Chinese with your favourite subject AND a reason. (Characters or pinyin.)",
        modelAnswer:
          "{{我最喜欢汉语课，因为汉语很有意思。|Wǒ zuì xǐhuan Hànyǔ kè, yīnwèi Hànyǔ hěn yǒu yìsi.|Chinese is my favourite lesson, because it's really interesting.}} (Any subject + any sensible reason scores; the full 因为…所以 frame also works: 因为汉语很有意思，所以我最喜欢汉语课。)",
        markScheme: [
          "Uses {{我最喜欢|wǒ zuì xǐhuan}} + a subject",
          "Gives a reason introduced by {{因为|yīnwèi}}",
          "Reason uses an opinion word such as {{有意思|yǒu yìsi}}, {{容易|róngyì}} or {{难|nán}}",
          "If both halves used: 因为 pairs with 所以 in the right order (reason first)",
        ],
        commonError:
          "Answering without a reason — the question asks 为什么, and 'opinion + 因为 reason' is what earns the second mark.",
        guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
        difficulty: "core",
        hints: [
          "Two jobs: name the favourite (我最喜欢…), then explain (因为…).",
          "Steal the question's own words: 你最喜欢什么课 → 我最喜欢 + subject + 课.",
          "A safe reason shape: 因为 + subject + 很有意思 / 很容易.",
        ],
        strategy: "Answer why-questions with the 因为…所以 frame",
        solutions: [
          {
            label: "Echo the question (recommended)",
            steps: [
              "Swap 你 → 我 and drop the question words: 你最喜欢什么课 → 我最喜欢___课.",
              "Fill the blank with your subject: 我最喜欢汉语课.",
              "Bolt on the reason: ，因为汉语很有意思。",
            ],
          },
          {
            label: "Reason-first with the full frame",
            steps: [
              "Start from the reason: 因为汉语很有意思.",
              "Add the result half with 所以: 所以我最喜欢汉语课.",
              "Together: 因为汉语很有意思，所以我最喜欢汉语课。 — reason before result, both signposts in place.",
            ],
          },
        ],
      },
      {
        id: "sch-quiz-qa-q03",
        question:
          "Read this timetable note and answer in English: {{我星期五有四节课。上午有数学和英语，下午有体育和电脑课。我最喜欢星期五，因为我喜欢体育。|Wǒ xīngqīwǔ yǒu sì jié kè. Shàngwǔ yǒu shùxué hé Yīngyǔ, xiàwǔ yǒu tǐyù hé diànnǎo kè. Wǒ zuì xǐhuan xīngqīwǔ, yīnwèi wǒ xǐhuan tǐyù.}} (a) How many lessons on Friday? (b) Which lessons are in the afternoon? (c) Why is Friday this student's favourite day?",
        modelAnswer:
          "(a) Four. (b) PE and computing. (c) Because they like PE (which is on Friday afternoon).",
        markScheme: [
          "(a) Four lessons ({{四节课|sì jié kè}})",
          "(b) PE ({{体育|tǐyù}}) and computing ({{电脑课|diànnǎo kè}}) — the {{下午|xiàwǔ}} pair",
          "(c) Reason after {{因为|yīnwèi}}: they like PE",
        ],
        commonError:
          "Mixing up 上午 and 下午 and giving maths/English for (b) — remember 上 = the early 'up' half of the day, 下 = the later half.",
        guideRef: "The school day: 上 and 下 run everything",
        difficulty: "core",
        hints: [
          "Chop the passage at the time words: 星期五 / 上午 / 下午.",
          "For (c), the reason always follows 因为.",
        ],
        strategy: "Scene first, action second",
      },
      {
        id: "sch-quiz-qa-q04",
        question:
          "A classmate writes {{我做作业星期天。|Wǒ zuò zuòyè xīngqītiān.}} for 'I do homework on Sunday.' Explain what is wrong and write the corrected sentence.",
        modelAnswer:
          "The time word is in the wrong place: Chinese puts time BEFORE the verb, not after it (that's English order). Corrected: {{我星期天做作业。|Wǒ xīngqītiān zuò zuòyè.}}",
        markScheme: [
          "Identifies the error: time phrase placed after the verb",
          "States the rule: time goes before the verb (after the subject)",
          "Correct sentence: 我星期天做作业 (or 星期天我做作业)",
        ],
        commonError:
          "Only fixing the sentence without stating the rule — the question asks you to EXPLAIN, so name the time-before-verb rule for full marks.",
        guideRef: "The school day: 上 and 下 run everything",
        difficulty: "core",
        hints: [
          "Compare with a correct sentence: 我星期五下午考试. Where does the time sit?",
          "Scene first, action second: who → when → action.",
        ],
        strategy: "Time before verb — always",
        solutions: [
          {
            label: "Rule check",
            steps: [
              "Label the pieces: 我 (subject) + 做作业 (verb phrase) + 星期天 (time).",
              "Rule: time attaches before the verb — 我 + 星期天 + 做作业.",
              "Rewrite: 我星期天做作业。",
            ],
          },
          {
            label: "Film-script method",
            steps: [
              "Set the scene first: who and when → 我星期天…",
              "Then roll the action → 做作业.",
              "Read it back: 我星期天做作业。 Scene, then action — it sounds right.",
            ],
          },
        ],
      },
      {
        id: "sch-quiz-qa-q05",
        question:
          "Challenge: combine these two facts into ONE sentence using 因为…所以…: {{数学很难|shùxué hěn nán|maths is hard}} and {{我不喜欢数学|wǒ bù xǐhuan shùxué|I don't like maths}}.",
        modelAnswer:
          "{{因为数学很难，所以我不喜欢数学。|Yīnwèi shùxué hěn nán, suǒyǐ wǒ bù xǐhuan shùxué.|Because maths is hard, I don't like it.}}",
        markScheme: [
          "{{因为|yīnwèi}} introduces the reason (数学很难)",
          "{{所以|suǒyǐ}} introduces the result (我不喜欢数学)",
          "Reason comes first, result second",
          "Both halves kept intact",
        ],
        commonError:
          "Putting the result first (所以我不喜欢…，因为…) or dropping 所以 because English forbids 'because…so' — Chinese wants reason first and BOTH signposts.",
        guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
        difficulty: "challenge",
        hints: [
          "Which fact is the cause and which is the effect?",
          "Frame: 因为 + reason，所以 + result.",
          "Slot each fact in whole — you don't need to change a single character.",
        ],
        strategy: "Answer why-questions with the 因为…所以 frame",
        solutions: [
          {
            label: "Cause-and-effect sort",
            steps: [
              "Ask: which fact explains the other? Maths being hard explains the dislike — so 数学很难 is the reason.",
              "Load the frame: 因为 + 数学很难，所以 + 我不喜欢数学.",
              "Result: 因为数学很难，所以我不喜欢数学。",
            ],
          },
          {
            label: "Frame-first",
            steps: [
              "Write the empty frame: 因为___，所以___。",
              "The 因为 slot takes the state of the world (数学很难); the 所以 slot takes your response to it (我不喜欢数学).",
              "Check the pinyin habit too: 不喜欢 is bù xǐhuan — 不 stays bù because 喜 is 3rd tone, not 4th.",
            ],
          },
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "sch-mcq-a",
        title: "Paper A — Subjects & timetables",
        description: "Subject names, days of the week, counting lessons with 节 and reading timetables.",
        questions: [
          {
            id: "sch-mcq-a-q01",
            question: "What subject is {{英语|Yīngyǔ}}?",
            options: ["Chinese", "English", "Music", "Science"],
            answerIndex: 1,
            explanation: "英 is the 'Eng-' of England and 语 means 'language' — English. Compare 汉语, the language of the Han people: Chinese.",
            guideRef: "Your subjects: naming lessons and counting with 节",
            difficulty: "warmup",
          },
          {
            id: "sch-mcq-a-q02",
            question: "Which subject gets you running around outside?",
            options: ["{{美术|měishù}}", "{{历史|lìshǐ}}", "{{体育|tǐyù}}", "{{地理|dìlǐ}}"],
            answerIndex: 2,
            explanation: "体育 ('body-education') is PE. 美术 is art, 历史 history, 地理 geography.",
            guideRef: "Your subjects: naming lessons and counting with 节",
            difficulty: "warmup",
          },
          {
            id: "sch-mcq-a-q03",
            question: "What day is {{星期五|xīngqīwǔ}}?",
            options: ["Wednesday", "Thursday", "Friday", "Saturday"],
            answerIndex: 2,
            explanation: "五 is five, so 星期五 is day five — Friday. Count Monday = 1 along the week.",
            guideRef: "Days of the week: crack the number code",
            difficulty: "warmup",
          },
          {
            id: "sch-mcq-a-q04",
            question: "What does {{明天|míngtiān}} mean?",
            options: ["Yesterday", "Today", "Tomorrow", "Sunday"],
            answerIndex: 2,
            explanation: "明天 is tomorrow (明 = bright — the next bright day). 昨天 is yesterday, 今天 today.",
            guideRef: "Days of the week: crack the number code",
            difficulty: "warmup",
          },
          {
            id: "sch-mcq-a-q05",
            question: "{{电脑|diànnǎo}} is literally 'electric brain'. So {{电脑课|diànnǎo kè}} is…",
            options: ["a science experiment", "computing class", "an electricity bill", "a brain-training game"],
            answerIndex: 1,
            explanation: "The 'electric brain' is the computer, and 课 makes it the lesson: computing/ICT class.",
            guideRef: "Your subjects: naming lessons and counting with 节",
            difficulty: "core",
            hints: ["What machine is an 'electric brain'?", "课 turns a thing into the lesson about it."],
            strategy: "Decode compounds — every part carries meaning",
          },
          {
            id: "sch-mcq-a-q06",
            question: "A friend asks {{你今天有几节课？|Nǐ jīntiān yǒu jǐ jié kè?}} What do they want to know?",
            options: [
              "Which lesson you like best",
              "How many lessons you have today",
              "What time school finishes",
              "Which classroom you are in",
            ],
            answerIndex: 1,
            explanation:
              "几 asks 'how many' and sits where the number will go: 有几节课 = 'have how-many lessons'. Answer by swapping 几 for a number: 我今天有六节课.",
            guideRef: "Your subjects: naming lessons and counting with 节",
            difficulty: "core",
            hints: ["几 always fishes for a number.", "Question words sit in the answer's seat — what kind of answer fits?"],
            strategy: "Question words sit in the answer's seat",
          },
          {
            id: "sch-mcq-a-q07",
            question: "What does {{第三节|dì sān jié}} mean?",
            options: ["Three lessons", "The third period", "Three o'clock", "Wednesday"],
            answerIndex: 1,
            explanation:
              "第 turns counting into ordering: 三节 = three lessons, but 第三节 = the THIRD period. One character changes 'how many' into 'which'.",
            guideRef: "Your subjects: naming lessons and counting with 节",
            difficulty: "core",
            hints: ["Without 第 it would be a count. What does 第 add?", "Counting vs ordering: 三节 = three, 第三节 = the third."],
            strategy: "Counting vs ordering: 三节 = three, 第三节 = the third",
          },
          {
            id: "sch-mcq-a-q08",
            question: "Fill the gap: {{我明天|wǒ míngtiān}} ___ {{四节课。|sì jié kè.}}",
            options: ["{{是|shì}}", "{{有|yǒu}}", "{{在|zài}}", "{{叫|jiào}}"],
            answerIndex: 1,
            explanation:
              "You HAVE lessons, so the verb is 有: 我明天有四节课. 是 is 'to be', 在 marks places, 叫 is 'to be called'.",
            guideRef: "Your subjects: naming lessons and counting with 节",
            difficulty: "core",
            hints: ["In English you 'have' four lessons — Chinese uses the same idea.", "Which verb means 'to have'?"],
          },
          {
            id: "sch-mcq-a-q09",
            question: "Which question would get the answer {{今天星期二。|Jīntiān xīngqī'èr.}}?",
            options: [
              "{{今天星期几？|Jīntiān xīngqī jǐ?}}",
              "{{你今天有几节课？|Nǐ jīntiān yǒu jǐ jié kè?}}",
              "{{你几岁？|Nǐ jǐ suì?}}",
              "{{你叫什么名字？|Nǐ jiào shénme míngzi?}}",
            ],
            answerIndex: 0,
            explanation:
              "The answer names a day, so the question must ask the day: 今天星期几？ — 几 sits exactly where 二 sits in the answer. The others ask about lesson counts, age and names.",
            guideRef: "Days of the week: crack the number code",
            difficulty: "core",
            hints: ["Work backwards from the answer: which word did 几 get replaced by?", "Match the question's shape to the answer's shape."],
            strategy: "Question words sit in the answer's seat",
          },
          {
            id: "sch-mcq-a-q10",
            question: "Choose the correct way to say 'I have two lessons in the morning.'",
            options: [
              "{{我有两节课上午。|Wǒ yǒu liǎng jié kè shàngwǔ.}}",
              "{{我上午有两节课。|Wǒ shàngwǔ yǒu liǎng jié kè.}}",
              "{{上午两节课我有。|Shàngwǔ liǎng jié kè wǒ yǒu.}}",
              "{{我有上午两节课。|Wǒ yǒu shàngwǔ liǎng jié kè.}}",
            ],
            answerIndex: 1,
            explanation:
              "Time before the verb: 我 + 上午 + 有两节课. The first option copies English order (time last) — the classic error this topic trains you out of.",
            guideRef: "The school day: 上 and 下 run everything",
            difficulty: "core",
            hints: ["Who → when → action.", "上午 must come before 有."],
            strategy: "Time before verb — always",
          },
          {
            id: "sch-mcq-a-q11",
            question: "{{美术|měishù}} and {{音乐|yīnyuè}} are easy to mix up. Which line is correct?",
            options: [
              "美术 = music, 音乐 = art",
              "美术 = art, 音乐 = music",
              "Both mean art",
              "Both mean music",
            ],
            answerIndex: 1,
            explanation:
              "Decode them: 美术 is 'beauty-skill' = art; 音乐 is 'sound-joy' = music. The characters carry the clue, so you never need to guess.",
            guideRef: "Your subjects: naming lessons and counting with 节",
            difficulty: "core",
            hints: ["音 means 'sound' — which subject is made of sound?"],
            strategy: "Decode compounds — every part carries meaning",
          },
          {
            id: "sch-mcq-a-q12",
            question:
              "Decode the timetable: {{我星期二有地理和历史，星期四有科学和数学。|Wǒ xīngqī'èr yǒu dìlǐ hé lìshǐ, xīngqīsì yǒu kēxué hé shùxué.}} On which day does this student have SCIENCE?",
            options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            answerIndex: 2,
            explanation:
              "科学 (science) appears in the 星期四 half of the sentence, and 星期四 is day four — Thursday. Tuesday (星期二) has geography and history instead.",
            guideRef: "Days of the week: crack the number code",
            difficulty: "challenge",
            hints: [
              "Split the sentence at the two day-words.",
              "Find 科学, then look left for its day.",
              "Convert 星期四 with the number code: 四 = ?",
            ],
            strategy: "Find the pattern, then hunt for the exception",
          },
          {
            id: "sch-mcq-a-q13",
            question:
              "Challenge: {{今天星期三。|Jīntiān xīngqīsān.}} Your friend says {{我们明天考试。|Wǒmen míngtiān kǎoshì.}} On which day is the exam?",
            options: ["{{星期二|xīngqī'èr}}", "{{星期三|xīngqīsān}}", "{{星期四|xīngqīsì}}", "{{星期五|xīngqīwǔ}}"],
            answerIndex: 2,
            explanation:
              "Today is Wednesday (星期三); 明天 means tomorrow, so the exam is on day four — 星期四, Thursday. Two facts combined, nothing memorised.",
            guideRef: "Days of the week: crack the number code",
            difficulty: "challenge",
            hints: [
              "Step 1: what day is 今天?",
              "Step 2: 明天 moves you one day forward.",
              "Wednesday + 1 = ? Now convert back into 星期 + number.",
            ],
            strategy: "Build, don't memorise",
          },
        ],
      },
      {
        id: "sch-mcq-b",
        title: "Paper B — Opinions & the school day",
        description: "Likes and dislikes, 觉得 opinions, reasons with 因为…所以, school people and places, and 比 comparisons.",
        questions: [
          {
            id: "sch-mcq-b-q01",
            question: "What does {{喜欢|xǐhuan}} mean?",
            options: ["to have", "to like", "to study", "to think"],
            answerIndex: 1,
            explanation: "喜欢 means 'to like': 我喜欢音乐 = I like music. 'To have' is 有, 'to study' 学习, 'to think' 觉得.",
            guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
            difficulty: "warmup",
          },
          {
            id: "sch-mcq-b-q02",
            question: "It's the end of the day and everyone heads home. Which word describes this?",
            options: ["{{上学|shàngxué}}", "{{上课|shàngkè}}", "{{考试|kǎoshì}}", "{{放学|fàngxué}}"],
            answerIndex: 3,
            explanation:
              "放学 — 放 means 'to release', so school 'releases' you at home time. 上学 is going TO school, the other end of the day.",
            guideRef: "The school day: 上 and 下 run everything",
            difficulty: "warmup",
          },
          {
            id: "sch-mcq-b-q03",
            question: "Where do you go to borrow a book?",
            options: ["{{操场|cāochǎng}}", "{{图书馆|túshūguǎn}}", "{{食堂|shítáng}}", "{{实验室|shíyànshì}}"],
            answerIndex: 1,
            explanation:
              "图书馆 has 书 (book) inside it — the book building, i.e. the library. 操场 is the sports field, 食堂 the canteen, 实验室 the lab.",
            guideRef: "People, places and gentle comparisons with 比",
            difficulty: "warmup",
            strategy: "Decode compounds — every part carries meaning",
          },
          {
            id: "sch-mcq-b-q04",
            question: "{{食|shí}} relates to food. So the {{食堂|shítáng}} is the…",
            options: ["classroom", "canteen", "library", "staff room"],
            answerIndex: 1,
            explanation: "食堂 is the 'food hall' — the canteen. Decoding 食 saves you: no food in a classroom or library!",
            guideRef: "People, places and gentle comparisons with 比",
            difficulty: "core",
            hints: ["Which school place is all about food?"],
            strategy: "Decode compounds — every part carries meaning",
          },
          {
            id: "sch-mcq-b-q05",
            question: "What does {{我觉得科学很容易|wǒ juéde kēxué hěn róngyì}} mean?",
            options: [
              "I think science is very easy.",
              "I think science is very hard.",
              "I like science the most.",
              "Science class has finished.",
            ],
            answerIndex: 0,
            explanation:
              "觉得 gives an opinion, and 容易 means 'easy' — the opposite of 难. 'Favourite' would need 最喜欢, which isn't here.",
            guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
            difficulty: "core",
            hints: ["容易 and 难 are opposites — which is which?", "觉得 = 'I think/feel that…'."],
          },
          {
            id: "sch-mcq-b-q06",
            question: "Your friend yawns: {{我觉得这节课很|wǒ juéde zhè jié kè hěn}}… Which word finishes their complaint that the lesson is BORING?",
            options: ["{{有意思|yǒu yìsi}}", "{{没意思|méi yìsi}}", "{{容易|róngyì}}", "{{好|hǎo}}"],
            answerIndex: 1,
            explanation:
              "没意思 is the flip side of 有意思: 有 = has (interest) → interesting; 没 = lacks (interest) → boring. The yawn is the clue.",
            guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
            difficulty: "core",
            hints: ["有 and 没 are opposites: has vs lacks.", "If 有意思 = interesting, then 没意思 = …"],
            strategy: "Build, don't memorise",
          },
          {
            id: "sch-mcq-b-q07",
            question: "Fill the gap to say 'I think maths is hard': {{我|wǒ}} ___ {{数学很难。|shùxué hěn nán.}}",
            options: ["{{喜欢|xǐhuan}}", "{{觉得|juéde}}", "{{是|shì}}", "{{比|bǐ}}"],
            answerIndex: 1,
            explanation:
              "Opinions about how something IS use 觉得 ('I think/feel'): 我觉得数学很难. 喜欢 would say you LIKE it, and 比 needs two things to compare.",
            guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
            difficulty: "core",
            hints: ["You're not saying you like it — you're giving a judgement.", "Which verb introduces 'I think…'?"],
          },
          {
            id: "sch-mcq-b-q08",
            question: "Who is the {{校长|xiàozhǎng}} — literally the 'school-chief'?",
            options: ["A classmate", "The head teacher", "A subject teacher", "The librarian"],
            answerIndex: 1,
            explanation:
              "校 = school, 长 = chief/head → the head teacher. Your subject teacher is 老师 and your classmate is 同学 ('same-study' person).",
            guideRef: "People, places and gentle comparisons with 比",
            difficulty: "core",
            hints: ["长 marks the person in charge.", "Who is 'chief' of a whole school?"],
            strategy: "Decode compounds — every part carries meaning",
          },
          {
            id: "sch-mcq-b-q09",
            question: "Which is the correct pinyin for 不难 (not difficult)?",
            options: ["bú nán", "bù nán", "bū nán", "bǔ nán"],
            answerIndex: 1,
            explanation:
              "难 is 2nd tone (nán), and 不 only changes to bú before a 4th tone (不是 bú shì, 不去 bú qù). Before 2nd tone it stays bù: bù nán.",
            guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
            difficulty: "core",
            hints: ["What tone is nán?", "The 不→bú change is triggered by ONE tone only — the 4th."],
            strategy: "Find the pattern, then hunt for the exception",
          },
          {
            id: "sch-mcq-b-q10",
            question: "What does {{为什么|wèishénme}} ask?",
            options: ["When?", "Where?", "Why?", "How many?"],
            answerIndex: 2,
            explanation:
              "为什么 asks 'why?' — literally 'for what?'. Spot 什么 (what) hiding inside it. Answer it with 因为… (because…).",
            guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
            difficulty: "core",
            hints: ["什么 is inside the word — 'for WHAT reason'."],
          },
          {
            id: "sch-mcq-b-q11",
            question: "Spot the error: which sentence is WRONG?",
            options: [
              "{{我下午做作业。|Wǒ xiàwǔ zuò zuòyè.}}",
              "{{我在图书馆做作业。|Wǒ zài túshūguǎn zuò zuòyè.}}",
              "{{我做作业星期六。|Wǒ zuò zuòyè xīngqīliù.}}",
              "{{我星期六做作业。|Wǒ xīngqīliù zuò zuòyè.}}",
            ],
            answerIndex: 2,
            explanation:
              "我做作业星期六 puts the time AFTER the verb — English order, not Chinese. Time (and 在 + place) must come before the verb, as the other three sentences correctly show.",
            guideRef: "The school day: 上 and 下 run everything",
            difficulty: "challenge",
            hints: [
              "Check each sentence: where does the time or place phrase sit?",
              "The rule: scene (when/where) before action.",
              "Three sentences obey the rule; one copies English.",
            ],
            strategy: "Time before verb — always",
          },
          {
            id: "sch-mcq-b-q12",
            question:
              "Challenge: {{因为我觉得历史比地理有意思，所以我最喜欢历史。|Yīnwèi wǒ juéde lìshǐ bǐ dìlǐ yǒu yìsi, suǒyǐ wǒ zuì xǐhuan lìshǐ.}} What is this student's favourite subject, and why?",
            options: [
              "Geography — it's more interesting than history",
              "History — it's more interesting than geography",
              "History — it's easier than geography",
              "Geography — history is too hard",
            ],
            answerIndex: 1,
            explanation:
              "Unpack the frames one at a time: 历史比地理有意思 = 'history is more interesting than geography' (A 比 B + adjective), and 所以我最喜欢历史 gives the result: history is the favourite. The adjective is 有意思, not 容易, so 'easier' is a trap.",
            guideRef: "People, places and gentle comparisons with 比",
            difficulty: "challenge",
            hints: [
              "Two frames are stacked: 因为…所以… and A 比 B + adjective.",
              "In the 比 part, which subject sits in the A seat?",
              "The favourite is named after 最喜欢 — check it matches your A.",
            ],
            strategy: "比 sentence: A 比 B + bare adjective (no 很)",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "sch-qa-a",
        title: "Paper A — Timetables & the school day",
        description: "Translating timetable sentences, reading comprehension and the time-before-verb rule.",
        questions: [
          {
            id: "sch-qa-a-q01",
            question: "Translate into Chinese: 'Today is Monday.' (Characters or pinyin.)",
            modelAnswer:
              "{{今天星期一。|Jīntiān xīngqīyī.}} (今天是星期一 with 是 is also correct.)",
            markScheme: [
              "{{今天|jīntiān}} first",
              "{{星期一|xīngqīyī}} for Monday (星期 + one)",
              "是 optional — with or without both score",
            ],
            commonError: "Writing 星期天 (Sunday) for Monday — 天 is not the number 一; Sunday is the exception day.",
            guideRef: "Days of the week: crack the number code",
            difficulty: "warmup",
            hints: ["Monday is day number one."],
          },
          {
            id: "sch-qa-a-q02",
            question: "Translate into Chinese: 'I have three lessons on Wednesday morning.' (Characters or pinyin.)",
            modelAnswer: "{{我星期三上午有三节课。|Wǒ xīngqīsān shàngwǔ yǒu sān jié kè.}}",
            markScheme: [
              "Time before the verb: 星期三上午 comes before 有",
              "Big-to-small time order: 星期三 before 上午",
              "Verb {{有|yǒu}} for having lessons",
              "Measure word 节: {{三节课|sān jié kè}}, not 三课",
            ],
            commonError:
              "English word order: 我有三节课星期三上午 ✗ — time must move in front of the verb.",
            guideRef: "The school day: 上 and 下 run everything",
            difficulty: "core",
            hints: [
              "Build the scene first: who → when (day, then part of day).",
              "Then the action: 有 + number + 节课.",
              "Don't forget the measure word between 三 and 课.",
            ],
            strategy: "Time before verb — always",
            solutions: [
              {
                label: "Scene-then-action (recommended)",
                steps: [
                  "Scene: 我 (who) + 星期三 (big time) + 上午 (small time).",
                  "Action: 有 + 三节课.",
                  "Assemble: 我星期三上午有三节课。",
                ],
              },
              {
                label: "Fix the English order",
                steps: [
                  "Literal English order gives: 我有三节课 + 星期三上午 — flag the dangling time.",
                  "Move the whole time chunk in front of the verb 有.",
                  "Result: 我星期三上午有三节课。 — same pieces, Chinese order.",
                ],
              },
            ],
          },
          {
            id: "sch-qa-a-q03",
            question:
              "Read and answer in English: {{我星期一有五节课。第一节是汉语，第二节是数学。我上午在教室上课，下午在操场上体育课。|Wǒ xīngqīyī yǒu wǔ jié kè. Dì yī jié shì Hànyǔ, dì èr jié shì shùxué. Wǒ shàngwǔ zài jiàoshì shàngkè, xiàwǔ zài cāochǎng shàng tǐyù kè.}} (a) How many lessons on Monday? (b) What is the first period? (c) Where is the student in the afternoon?",
            modelAnswer:
              "(a) Five. (b) Chinese. (c) On the sports field (having PE).",
            markScheme: [
              "(a) Five ({{五节课|wǔ jié kè}})",
              "(b) Chinese ({{汉语|Hànyǔ}}) — the {{第一节|dì yī jié}}",
              "(c) Sports field / playground ({{操场|cāochǎng}})",
            ],
            commonError:
              "Answering (b) with maths — 数学 is 第二节, the SECOND period. 第 + number tells you exactly which slot.",
            guideRef: "Your subjects: naming lessons and counting with 节",
            difficulty: "core",
            hints: [
              "Scan for the question's key: a number after 有, a subject after 第一节是, a place after 下午在.",
              "在 + place tells you where — find the one attached to 下午.",
            ],
            strategy: "Counting vs ordering: 三节 = three, 第三节 = the third",
          },
          {
            id: "sch-qa-a-q04",
            question: "Write the Chinese question you would ask a friend to find out how many lessons they have today.",
            modelAnswer: "{{你今天有几节课？|Nǐ jīntiān yǒu jǐ jié kè?}}",
            markScheme: [
              "Subject {{你|nǐ}} + time {{今天|jīntiān}} before the verb",
              "Verb {{有|yǒu}}",
              "{{几|jǐ}} in the number's seat: 几节课",
            ],
            commonError:
              "Using 什么 instead of 几 — 什么 asks 'what', but a lesson COUNT needs the number-asking word 几.",
            guideRef: "Your subjects: naming lessons and counting with 节",
            difficulty: "core",
            hints: [
              "Start from the answer: 我今天有六节课.",
              "Swap 我→你 and replace the number with the question word that asks for numbers.",
            ],
            strategy: "Question words sit in the answer's seat",
            solutions: [
              {
                label: "Work backwards from the answer",
                steps: [
                  "Imagine the reply: 我今天有六节课。",
                  "Swap the pronoun: 我 → 你.",
                  "Replace the number 六 with 几 (the number-fishing question word): 你今天有几节课？",
                ],
              },
            ],
          },
          {
            id: "sch-qa-a-q05",
            question: "Translate into Chinese: 'My first lesson on Friday is Chinese.' (Characters or pinyin.)",
            modelAnswer:
              "{{我星期五第一节课是汉语。|Wǒ xīngqīwǔ dì yī jié kè shì Hànyǔ.}} (星期五我的第一节课是汉语 is also acceptable.)",
            markScheme: [
              "{{星期五|xīngqīwǔ}} placed before the rest (time first)",
              "{{第一节|dì yī jié}} for 'first lesson/period'",
              "{{是|shì}} linking to the subject name",
              "{{汉语|Hànyǔ}} or {{中文|Zhōngwén}} for Chinese",
            ],
            commonError:
              "Dropping 第 (一节课 = 'one lesson', a count — you need 第一节, the FIRST one).",
            guideRef: "Your subjects: naming lessons and counting with 节",
            difficulty: "core",
            hints: [
              "Which little word turns 'one lesson' into 'the first lesson'?",
              "Order: 我 + 星期五 + 第一节课 + 是 + subject.",
            ],
            strategy: "Counting vs ordering: 三节 = three, 第三节 = the third",
          },
          {
            id: "sch-qa-a-q06",
            question:
              "Challenge — decode this fuller timetable note and answer in English: {{我星期四很忙。上午有四节课：第一节是英语，第二节是科学，第三节和第四节是数学。下午我在实验室上科学课，放学以后在图书馆做作业。|Wǒ xīngqīsì hěn máng. Shàngwǔ yǒu sì jié kè: dì yī jié shì Yīngyǔ, dì èr jié shì kēxué, dì sān jié hé dì sì jié shì shùxué. Xiàwǔ wǒ zài shíyànshì shàng kēxué kè, fàngxué yǐhòu zài túshūguǎn zuò zuòyè.}} (a) How many lessons on Thursday morning? (b) Which subject takes up TWO periods? (c) Where does the student go after school, and to do what?",
            modelAnswer:
              "(a) Four. (b) Maths (periods three and four). (c) To the library, to do homework.",
            markScheme: [
              "(a) Four morning lessons ({{四节课|sì jié kè}})",
              "(b) Maths — {{第三节和第四节|dì sān jié hé dì sì jié}} are both 数学",
              "(c) Library ({{图书馆|túshūguǎn}}) + doing homework ({{做作业|zuò zuòyè}})",
            ],
            commonError:
              "Answering (b) with science because 科学 appears twice — the afternoon 科学课 is in the lab, but the TWO MORNING PERIODS (第三节和第四节) are maths.",
            guideRef: "The school day: 上 and 下 run everything",
            difficulty: "challenge",
            hints: [
              "Chop the passage at 上午 / 下午 / 放学以后 — three scenes.",
              "For (b), look for one subject named after TWO 第…节 slots joined by 和.",
              "For (c), 在 + place + verb tells you where AND what.",
            ],
            strategy: "Scene first, action second",
            solutions: [
              {
                label: "Scene-by-scene table",
                steps: [
                  "Scene 1 (上午): four periods — English, science, maths, maths.",
                  "Scene 2 (下午): science in the lab (实验室).",
                  "Scene 3 (放学以后): library (图书馆) + homework (做作业).",
                  "Now each question reads straight off the table: (a) 4, (b) maths, (c) library / homework.",
                ],
              },
              {
                label: "Keyword hunt",
                steps: [
                  "(a) Find 有 + number + 节课 after 上午 → 四节课 = four.",
                  "(b) Find the 和 joining two 第…节 slots → 第三节和第四节是数学 → maths.",
                  "(c) Find the phrase after 放学以后 → 在图书馆做作业 → library, homework.",
                ],
              },
            ],
          },
          {
            id: "sch-qa-a-q07",
            question:
              "Grammar explanation: a classmate writes {{我今天有六课。|Wǒ jīntiān yǒu liù kè.}} Explain why this is wrong and correct it.",
            modelAnswer:
              "Chinese cannot count a noun with a bare number — it needs a measure word between the number and the noun. Lessons take {{节|jié}}, so it must be {{我今天有六节课。|Wǒ jīntiān yǒu liù jié kè.}}",
            markScheme: [
              "Identifies the missing measure word",
              "Names 节 as the measure word for lessons",
              "Corrected sentence: 我今天有六节课",
            ],
            commonError:
              "Correcting with the all-purpose 个 (六个课 ✗) — lessons specifically take 节, the 'segment' measure word.",
            guideRef: "Your subjects: naming lessons and counting with 节",
            difficulty: "core",
            hints: [
              "What must always sit between a number and its noun in Chinese?",
              "Which measure word chops the school day into segments?",
            ],
            strategy: "Decode compounds — every part carries meaning",
          },
        ],
      },
      {
        id: "sch-qa-b",
        title: "Paper B — Opinions & my school day",
        description: "Giving opinions with reasons, penpal replies, 比 comparisons and short descriptions of your day.",
        questions: [
          {
            id: "sch-qa-b-q01",
            question: "Translate into English: {{我不喜欢考试，因为考试很难。|Wǒ bù xǐhuan kǎoshì, yīnwèi kǎoshì hěn nán.}}",
            modelAnswer: "I don't like exams, because exams are (very) hard.",
            markScheme: [
              "不喜欢 = don't like",
              "考试 = exams / tests",
              "因为…很难 = because they are hard",
            ],
            commonError: "Missing the 不 and translating as 'I like exams' — always scan for 不 before the verb.",
            guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
            difficulty: "warmup",
            hints: ["不 flips the verb; 因为 introduces the reason."],
          },
          {
            id: "sch-qa-b-q02",
            question:
              "A penpal writes: {{我最喜欢地理。你呢？你最喜欢什么课？为什么？|Wǒ zuì xǐhuan dìlǐ. Nǐ ne? Nǐ zuì xǐhuan shénme kè? Wèishénme?}} Write a reply of at least two sentences in Chinese: name your favourite subject and give a reason using 因为 (or the full 因为…所以 frame).",
            modelAnswer:
              "{{我最喜欢科学课，因为科学很有意思。我觉得地理也很好！|Wǒ zuì xǐhuan kēxué kè, yīnwèi kēxué hěn yǒu yìsi. Wǒ juéde dìlǐ yě hěn hǎo!|My favourite is science, because it's really interesting. I think geography is great too!}} (Any subject + sensible reason scores.)",
            markScheme: [
              "我最喜欢 + subject",
              "Reason with 因为 (opinion word such as 有意思 / 容易)",
              "At least two sentences; bonus for reacting to the penpal's 地理 with 也",
              "If 所以 used: reason before result",
            ],
            commonError:
              "Writing only 我喜欢科学 — the question asks for the FAVOURITE (最) and a WHY (因为); missing either loses marks.",
            guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
            difficulty: "core",
            hints: [
              "Echo their shape: 我最喜欢___课.",
              "Add 因为 + a 觉得-style opinion: 很有意思 / 很容易.",
              "也 ('also') is an easy extra sentence: 我觉得地理也很有意思.",
            ],
            strategy: "Answer why-questions with the 因为…所以 frame",
            solutions: [
              {
                label: "Two-sentence recipe",
                steps: [
                  "Sentence 1: favourite + reason — 我最喜欢科学课，因为科学很有意思。",
                  "Sentence 2: react to theirs with 也 — 我觉得地理也很好。",
                ],
              },
              {
                label: "Full-frame version",
                steps: [
                  "Reason first: 因为科学很有意思，",
                  "Result second: 所以我最喜欢科学课。",
                  "Then add any second sentence about 地理 to hit the two-sentence minimum.",
                ],
              },
            ],
          },
          {
            id: "sch-qa-b-q03",
            question:
              "Grammar explanation: your friend translates 'Because PE is fun, I like PE' as {{因为体育很有意思，我喜欢体育。|Yīnwèi tǐyù hěn yǒu yìsi, wǒ xǐhuan tǐyù.}} and asks if anything is missing. What would a Chinese speaker naturally add, and why does Chinese do this when English doesn't?",
            modelAnswer:
              "Add {{所以|suǒyǐ}} before the second half: 因为体育很有意思，所以我喜欢体育。 Chinese likes to signpost BOTH halves of a logic pair — 因为 marks the reason and 所以 marks the result. English forbids 'because…so…' together, but in Chinese the matched pair is the natural, complete pattern.",
            markScheme: [
              "Adds 所以 at the start of the result clause",
              "Explains 因为 = reason signpost, 所以 = result signpost",
              "Notes the contrast with English (which drops one of the pair)",
            ],
            commonError:
              "Thinking the sentence is wrong without 所以 — it is understandable, but the paired frame is the natural pattern and what examiners look for.",
            guideRef: "Opinions: 喜欢, 觉得 and winning the 'why' game",
            difficulty: "core",
            hints: [
              "因为 has a partner word — what is it?",
              "Think about WHY double-marking helps a listener follow a long sentence.",
            ],
            strategy: "Answer why-questions with the 因为…所以 frame",
          },
          {
            id: "sch-qa-b-q04",
            question: "Translate into Chinese: 'I think maths is harder than English.' (Characters or pinyin.)",
            modelAnswer: "{{我觉得数学比英语难。|Wǒ juéde shùxué bǐ Yīngyǔ nán.}}",
            markScheme: [
              "Opinion frame {{觉得|juéde}}",
              "比 frame in order: 数学 (A) + 比 + 英语 (B) + 难",
              "No 很 before 难",
              "Adjective 难 unchanged (no word for 'harder' needed)",
            ],
            commonError:
              "Adding 很: 数学比英语很难 ✗ — the comparison already says how hard, so the adjective stays bare in a 比 sentence.",
            guideRef: "People, places and gentle comparisons with 比",
            difficulty: "core",
            hints: [
              "Frame: A 比 B + adjective. Which subject is A ('the harder one')?",
              "English changes hard → harder; Chinese changes nothing. What carries the 'more'?",
              "Check: did you sneak in a 很? Take it out.",
            ],
            strategy: "比 sentence: A 比 B + bare adjective (no 很)",
            solutions: [
              {
                label: "Fill the frame",
                steps: [
                  "Identify A (the 'more' one): maths → 数学.",
                  "Identify B (the yardstick): English → 英语.",
                  "Slot into A 比 B + 难, wrap in 我觉得: 我觉得数学比英语难。",
                ],
              },
              {
                label: "Build from the plain sentence",
                steps: [
                  "Start with the plain opinion: 我觉得数学很难。",
                  "To compare, insert the yardstick 比英语 before the adjective and delete 很.",
                  "Result: 我觉得数学比英语难。 — 比 replaces the job 很 was doing.",
                ],
              },
            ],
          },
          {
            id: "sch-qa-b-q05",
            question:
              "Write two or three Chinese sentences about your school day: say when you go to school (or have a certain lesson), and one thing you do after school. Use time-before-verb order.",
            modelAnswer:
              "{{我星期一到星期五上学。我上午有四节课，第一节是英语。放学以后我在图书馆做作业。|Wǒ xīngqīyī dào xīngqīwǔ shàngxué. Wǒ shàngwǔ yǒu sì jié kè, dì yī jié shì Yīngyǔ. Fàngxué yǐhòu wǒ zài túshūguǎn zuò zuòyè.|I go to school Monday to Friday. I have four lessons in the morning; the first is English. After school I do homework in the library.}} (Any accurate sentences with correct time placement score.)",
            markScheme: [
              "At least two sentences on the school day",
              "Every time word placed before its verb",
              "Uses school-day vocabulary (上学 / 上课 / 放学 / 做作业 / 有…节课)",
              "Bonus: 在 + place before the verb (在图书馆做作业)",
            ],
            commonError:
              "Slipping into English order in the last sentence (我做作业放学以后 ✗) — every clause needs scene-before-action, not just the first one.",
            guideRef: "The school day: 上 and 下 run everything",
            difficulty: "core",
            hints: [
              "Recipe: sentence 1 = when + 上学; sentence 2 = when + 有…节课; sentence 3 = 放学以后 + where + what.",
              "Check every sentence: does anything about time or place come after the verb?",
            ],
            strategy: "Scene first, action second",
          },
          {
            id: "sch-qa-b-q06",
            question:
              "Challenge: using both the 比 frame and the 因为…所以 frame in ONE sentence, say that you like PE best because PE is easier than maths (or compare two subjects of your choice).",
            modelAnswer:
              "{{因为体育比数学容易，所以我最喜欢体育。|Yīnwèi tǐyù bǐ shùxué róngyì, suǒyǐ wǒ zuì xǐhuan tǐyù.|Because PE is easier than maths, PE is my favourite.}}",
            markScheme: [
              "比 comparison correct: A 比 B + bare adjective (no 很)",
              "因为 introduces the comparison as the reason",
              "所以 introduces the result (最喜欢 + subject)",
              "Reason before result",
            ],
            commonError:
              "Sneaking 很 into the 比 half (体育比数学很容易 ✗) or dropping 所以 — this question tests keeping BOTH frames intact at once.",
            guideRef: "People, places and gentle comparisons with 比",
            difficulty: "challenge",
            hints: [
              "Build the inner 比 sentence first: 体育比数学容易.",
              "That whole sentence becomes the 因为 half.",
              "Finish with 所以 + 我最喜欢 + your winner.",
            ],
            strategy: "比 sentence: A 比 B + bare adjective (no 很)",
            solutions: [
              {
                label: "Inside-out assembly",
                steps: [
                  "Step 1 — the comparison: 体育比数学容易 (no 很!).",
                  "Step 2 — wrap it as the reason: 因为体育比数学容易，",
                  "Step 3 — add the result: 所以我最喜欢体育。",
                ],
              },
              {
                label: "Frame-first assembly",
                steps: [
                  "Write the empty double frame: 因为 A 比 B + adjective，所以我最喜欢 A。",
                  "Choose A = 体育, B = 数学, adjective = 容易.",
                  "Fill and read back: 因为体育比数学容易，所以我最喜欢体育。 The favourite (after 最喜欢) must match your A.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
