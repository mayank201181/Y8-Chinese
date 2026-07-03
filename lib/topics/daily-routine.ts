import type { Topic } from "../types";

// Daily Routine, Time & Dates — Cambridge IGCSE 0547 pathway, Year 8.
// House style: see lib/topics/greetings.ts (exemplar).

export const dailyRoutine: Topic = {
  id: "daily-routine",
  title: "Daily Routine, Time & Dates",
  titleChinese: { hanzi: "日常生活", pinyin: "rìcháng shēnghuó" },
  subject: "chinese",
  icon: "⏰",
  color: "violet",
  intro:
    "What time do you get up? When's your birthday? What's your day like? This topic hands you the Chinese clock and calendar — and unlike English, the whole system is see-through: no 'half past', no 'Wednesday', no month names to memorise. You'll also meet the single most important word-order rule in Chinese: time comes before the verb.",
  guide: [
    {
      heading: "Telling the time: the see-through clock",
      discovery: {
        problem:
          "Three clock times, no teaching yet: {{三点|sān diǎn}} = 3:00, {{四点|sì diǎn}} = 4:00, {{三点半|sān diǎn bàn}} = 3:30. Your move: how would you say 5:00 and 5:30? And if {{十分|shí fēn}} means 'ten minutes', what time must {{三点十分|sān diǎn shí fēn}} be?",
        idea:
          "You just built times you were never taught: 5:00 is {{五点|wǔ diǎn}}, 5:30 is {{五点半|wǔ diǎn bàn}}, and 三点十分 is 3:10. The Chinese clock is **number + {{点|diǎn|o'clock}}**, then bolt on {{半|bàn|half}} or the minutes. No irregular phrases to memorise — it's a construction kit.",
      },
      body:
        "The recipe is **number + {{点|diǎn|o'clock}}**, then add detail:\n- {{六点|liù diǎn|6:00}}\n- {{六点十分|liù diǎn shí fēn|6:10}} (number + {{分|fēn|minute}})\n- {{六点半|liù diǎn bàn|6:30}} ({{半|bàn|half}} = half past)\n- {{六点一刻|liù diǎn yí kè|6:15}} ({{刻|kè|quarter}} = quarter of an hour)\n- {{六点三刻|liù diǎn sān kè|6:45}} (three quarters past)\n\n**The famous trap: 2 o'clock is {{两点|liǎng diǎn|2 o'clock}}, never 二点!** When '2' stands alone before a measure-type word like 点, Chinese uses {{两|liǎng|two (before measure words)}}. But inside a bigger number 二 survives: 12:00 is {{十二点|shí'èr diǎn|12 o'clock}}.\n\nTo ask the time: {{现在几点？|Xiànzài jǐ diǎn?|What time is it now?}} — literally 'now how-many o'clock?'. Answer with the same shape: {{现在四点半。|Xiànzài sì diǎn bàn.|It's 4:30 now.}}",
      whyItWorks:
        "Why is the system so tidy? {{点|diǎn}} literally means 'point/dot' — the points on the clock face. {{刻|kè}} means 'a carved notch': ancient Chinese water clocks had notches carved into them to divide the day, and one 刻 settled at 15 minutes. So 三点一刻 is 'point three, one notch past'. Chinese keeps the maths visible — English hides it behind special phrases like 'half past' and 'quarter to'.",
      strategies: ["Build, don't memorise", "Find the pattern"],
      keyPoints: [
        "number + 点 = o'clock: 六点 = 6:00",
        "半 = :30, 一刻 = :15, 三刻 = :45, number + 分 = exact minutes",
        "2 o'clock is 两点, NOT 二点 — but 12:00 keeps 二: 十二点",
        "Ask the time with 现在几点？",
      ],
      vocab: [
        { hanzi: "点", pinyin: "diǎn", english: "o'clock", pos: "measure word" },
        { hanzi: "分", pinyin: "fēn", english: "minute", pos: "measure word" },
        {
          hanzi: "半",
          pinyin: "bàn",
          english: "half (past)",
          pos: "number",
          example: { hanzi: "七点半", pinyin: "qī diǎn bàn", english: "7:30" },
        },
        {
          hanzi: "刻",
          pinyin: "kè",
          english: "quarter of an hour",
          pos: "measure word",
          example: { hanzi: "三点一刻", pinyin: "sān diǎn yí kè", english: "3:15" },
        },
        { hanzi: "两", pinyin: "liǎng", english: "two (before measure words)", pos: "number" },
        { hanzi: "现在", pinyin: "xiànzài", english: "now", pos: "time word" },
      ],
      patterns: [
        {
          pattern: "Number + 点 (+ 分 / 半 / 刻)",
          example: { hanzi: "现在三点一刻。", pinyin: "Xiànzài sān diǎn yí kè.", english: "It's 3:15 now." },
          note: "One recipe covers every time on the clock — swap the numbers, keep the shape.",
        },
        {
          pattern: "现在几点？",
          example: { hanzi: "现在几点？", pinyin: "Xiànzài jǐ diǎn?", english: "What time is it now?" },
          note: "几 sits where the number will go in the answer — question words sit in the answer's seat.",
        },
      ],
    },
    {
      heading: "Morning or afternoon? Day-parts and counting backwards with 差",
      discovery: {
        problem:
          "English '3 o'clock' is ambiguous — you need 'a.m.' or 'p.m.'. Chinese says {{下午三点|xiàwǔ sān diǎn}}, literally 'afternoon three o'clock'. And here's a stranger one: {{差一刻四点|chà yí kè sì diǎn}}, literally 'lacking one quarter, four o'clock'. What time of day is 下午三点 — and what exact time is 差一刻四点?",
        idea:
          "下午三点 = 3 p.m. — the day-part comes **before** the clock time, bigger unit first. And 差一刻四点 = 3:45: {{差|chà|to lack; to (before the hour)}} counts backwards from the next hour, exactly like English 'quarter TO four'. Chinese has both directions: count up (三点三刻) or count down (差一刻四点).",
      },
      body:
        "Chinese slices the day into named parts:\n- {{早上|zǎoshang|early morning (≈6–9 a.m.)}}\n- {{上午|shàngwǔ|morning / a.m. (≈9–12)}}\n- {{中午|zhōngwǔ|noon, midday}}\n- {{下午|xiàwǔ|afternoon}}\n- {{晚上|wǎnshang|evening, night}}\n\nThe day-part goes **in front of** the clock time: {{早上七点|zǎoshang qī diǎn|7 a.m.}}, {{晚上十点|wǎnshang shí diǎn|10 p.m.}}. Saying 三点下午 is as wrong as English 'o'clock three'.\n\nFor times close to the next hour, {{差|chà|lacking}} reads the clock backwards:\n- {{差一刻四点|chà yí kè sì diǎn|3:45 (quarter to four)}}\n- {{差五分七点|chà wǔ fēn qī diǎn|6:55 (five to seven)}}\n\nSo 3:45 has three names: {{三点四十五分|sān diǎn sìshíwǔ fēn}}, {{三点三刻|sān diǎn sān kè}} and 差一刻四点 — all the same moment.",
      whyItWorks:
        "Why day-part first? Chinese consistently orders information **big to small**: the broad frame (which part of the day) comes before the fine detail (which hour, which minute). Keep this principle — you'll meet it again with dates (year → month → day) and even addresses (country → city → street). One principle, no exceptions to memorise.",
      strategies: ["Big to small — zoom in, never out", "Same time, several names: pick the easiest to say"],
      keyPoints: [
        "Day-part BEFORE clock time: 下午三点 = 3 p.m., never 三点下午",
        "早上 / 上午 / 中午 / 下午 / 晚上 replace a.m./p.m.",
        "差 counts back from the next hour: 差一刻四点 = 3:45",
        "3:45 = 三点四十五分 = 三点三刻 = 差一刻四点",
      ],
      vocab: [
        { hanzi: "早上", pinyin: "zǎoshang", english: "early morning", pos: "time word" },
        { hanzi: "上午", pinyin: "shàngwǔ", english: "morning, a.m.", pos: "time word" },
        { hanzi: "中午", pinyin: "zhōngwǔ", english: "noon, midday", pos: "time word" },
        { hanzi: "下午", pinyin: "xiàwǔ", english: "afternoon", pos: "time word" },
        { hanzi: "晚上", pinyin: "wǎnshang", english: "evening, night", pos: "time word" },
        {
          hanzi: "差",
          pinyin: "chà",
          english: "to lack; (minutes) to (the hour)",
          pos: "verb",
          example: { hanzi: "差一刻八点", pinyin: "chà yí kè bā diǎn", english: "7:45 (quarter to eight)" },
        },
      ],
      patterns: [
        {
          pattern: "Day-part + clock time",
          example: { hanzi: "晚上十点", pinyin: "wǎnshang shí diǎn", english: "10 p.m." },
          note: "Big to small: name the part of the day first, then the hour.",
        },
        {
          pattern: "差 + minutes/刻 + hour + 点",
          example: {
            hanzi: "现在差一刻四点。",
            pinyin: "Xiànzài chà yí kè sì diǎn.",
            english: "It's a quarter to four.",
          },
          note: "差 = 'lacking': the clock is one quarter short of four.",
        },
      ],
    },
    {
      heading: "Dates: the big-to-small rule",
      discovery: {
        problem:
          "Here is today's date in Chinese: {{2026年7月3日|èr líng èr liù nián qī yuè sān rì}}. And a birthday: {{2005年10月1日|èr líng líng wǔ nián shí yuè yī rì}}. Two puzzles: what order do the units come in — and given that {{三月|sānyuè}} is March, what are the Chinese names for April and December?",
        idea:
          "The order is **year → month → day** — big to small, the same principle as 下午三点. And months have no names: April is {{四月|sìyuè|April (month four)}}, December is {{十二月|shí'èryuè|December (month twelve)}}. Twelve English words replaced by numbers you already know.",
      },
      body:
        "Dates stack three units, biggest first:\n- {{年|nián|year}} — years are read digit by digit: {{二〇二六年|èr líng èr liù nián|the year 2026}}\n- {{月|yuè|month}} — {{一月|yīyuè|January}}, {{二月|èryuè|February}} … {{十二月|shí'èryuè|December}}\n- {{日|rì|day (written)}} or {{号|hào|day (spoken)}} — 号 in speech, 日 in writing\n\nSo 3 July 2026 = 二〇二六年七月三日 (say: …七月三号).\n\nDays of the week are numbered too: {{星期一|xīngqīyī|Monday}}, {{星期二|xīngqī'èr|Tuesday}} … {{星期六|xīngqīliù|Saturday}}. The exception is Sunday: {{星期日|xīngqīrì|Sunday}} (or {{星期天|xīngqītiān|Sunday}}) — the 'sun day', not 星期七.\n\nAsk and answer:\n- {{今天几月几号？|Jīntiān jǐ yuè jǐ hào?|What's the date today?}} → {{今天七月三号。|Jīntiān qī yuè sān hào.|Today is 3 July.}}\n- {{今天星期几？|Jīntiān xīngqī jǐ?|What day is it today?}} → {{今天星期五。|Jīntiān xīngqīwǔ.|Today is Friday.}}\n\nNotice: no {{是|shì|to be}} needed in these date sentences (it's optional). With {{昨天|zuótiān|yesterday}} and {{明天|míngtiān|tomorrow}} you can travel in time, and the big one to own is {{生日|shēngrì|birthday}}: {{你的生日是几月几号？|Nǐ de shēngrì shì jǐ yuè jǐ hào?|When is your birthday?}} — and when the day comes, {{生日快乐！|shēngrì kuàilè!|happy birthday!}}",
      whyItWorks:
        "Everything here is one principle wearing different hats. Big-to-small gives 年→月→日, and 'question words sit in the answer's seat' makes questions free: 今天**七月三号** ↔ 今天**几月几号**？ The question is just the answer with the numbers swapped for 几. Learn one date sentence and you own the question, the answer, and every other date.",
      strategies: ["Big to small — zoom in, never out", "Question words sit in the answer's seat"],
      keyPoints: [
        "Date order: 年 → 月 → 日/号 (big to small): 2026年7月3日",
        "Months are numbers: 一月 = January … 十二月 = December",
        "星期 + number for Mon–Sat; Sunday is 星期日/星期天",
        "号 when speaking, 日 when writing",
        "Ask: 今天几月几号？ 今天星期几？ — no word-order change",
      ],
      vocab: [
        { hanzi: "年", pinyin: "nián", english: "year", pos: "noun" },
        { hanzi: "月", pinyin: "yuè", english: "month", pos: "noun" },
        { hanzi: "日", pinyin: "rì", english: "day of the month (written)", pos: "noun" },
        { hanzi: "号", pinyin: "hào", english: "day of the month (spoken)", pos: "measure word" },
        { hanzi: "星期", pinyin: "xīngqī", english: "week", pos: "noun" },
        { hanzi: "今天", pinyin: "jīntiān", english: "today", pos: "time word" },
        { hanzi: "明天", pinyin: "míngtiān", english: "tomorrow", pos: "time word" },
        { hanzi: "昨天", pinyin: "zuótiān", english: "yesterday", pos: "time word" },
        {
          hanzi: "生日",
          pinyin: "shēngrì",
          english: "birthday",
          pos: "noun",
          example: {
            hanzi: "我的生日是十月二号。",
            pinyin: "Wǒ de shēngrì shì shí yuè èr hào.",
            english: "My birthday is 2 October.",
          },
        },
      ],
      patterns: [
        {
          pattern: "X年 + X月 + X日/号",
          example: {
            hanzi: "今天是二〇二六年七月三号。",
            pinyin: "Jīntiān shì èr líng èr liù nián qī yuè sān hào.",
            english: "Today is 3 July 2026.",
          },
          note: "Biggest unit first — the exact opposite of British '3 July 2026'.",
        },
        {
          pattern: "今天星期几？",
          example: { hanzi: "今天星期几？", pinyin: "Jīntiān xīngqī jǐ?", english: "What day is it today?" },
          note: "Answer by swapping 几 for the number: 今天星期三。",
        },
      ],
    },
    {
      heading: "The golden rule: time before the verb",
      discovery: {
        problem:
          "A classmate translates 'I get up at seven' word by word and writes {{我起床七点|wǒ qǐchuáng qī diǎn}}. The teacher marks it wrong and writes {{我七点起床。|Wǒ qī diǎn qǐchuáng.|I get up at seven.}} Compare the two. What rule did your classmate break?",
        idea:
          "**Time comes BEFORE the verb.** Chinese says 'I at-seven get-up', never 'I get up at seven'. This is THE golden word-order rule of this topic: when-words (七点, 每天, 晚上, 星期一…) always stand in front of the action.",
      },
      body:
        "Your daily-routine verbs — each one happens at a time, and the time goes first:\n- {{起床|qǐchuáng|to get up}} → {{我七点起床。|Wǒ qī diǎn qǐchuáng.|I get up at 7.}}\n- {{刷牙|shuāyá|to brush teeth}} and {{洗澡|xǐzǎo|to shower/bathe}}\n- {{吃早饭|chī zǎofàn|to eat breakfast}} → {{我七点半吃早饭。|Wǒ qī diǎn bàn chī zǎofàn.|I eat breakfast at 7:30.}}\n- {{上学|shàngxué|to go to school}}, {{上课|shàngkè|to have lessons}}, {{放学|fàngxué|to finish school}}\n- {{做作业|zuò zuòyè|to do homework}}\n- {{吃晚饭|chī wǎnfàn|to eat dinner}}, {{看电视|kàn diànshì|to watch TV}}\n- {{睡觉|shuìjiào|to sleep, go to bed}} → {{我晚上十点睡觉。|Wǒ wǎnshang shí diǎn shuìjiào.|I go to bed at 10 p.m.}}\n\nStack time words big to small before the verb: {{我每天早上七点起床。|Wǒ měi tiān zǎoshang qī diǎn qǐchuáng.|Every day I get up at 7 a.m.}} — {{每天|měi tiān|every day}} → day-part → clock → verb.\n\nAsking someone about their routine uses the same shape: {{你几点睡觉？|Nǐ jǐ diǎn shuìjiào?|What time do you go to bed?}} — 几点 stands exactly where the time will stand in the answer.",
      whyItWorks:
        "A Chinese sentence works like a film script: first the scene-setting (when, where), then the action. 我 + 每天早上七点 + 起床 = 'Me — scene: every morning at 7 — action: get up.' English tacks time on at the end as an afterthought; Chinese refuses to act before the scene is set. This also explains 下午三点 (frame before detail) — it's the same instinct running through the whole language.",
      strategies: ["Set the scene, then act", "Don't translate word-for-word"],
      keyPoints: [
        "GOLDEN RULE: time before the verb — 我七点起床, never 我起床七点",
        "Stack time words big to small: 每天 + 早上 + 七点 + verb",
        "你几点 + verb? asks when someone does something",
        "The routine verbs: 起床 刷牙 洗澡 吃早饭 上学 放学 做作业 吃晚饭 睡觉",
      ],
      vocab: [
        { hanzi: "起床", pinyin: "qǐchuáng", english: "to get up", pos: "verb" },
        { hanzi: "刷牙", pinyin: "shuāyá", english: "to brush one's teeth", pos: "verb" },
        { hanzi: "洗澡", pinyin: "xǐzǎo", english: "to shower, to bathe", pos: "verb" },
        { hanzi: "吃早饭", pinyin: "chī zǎofàn", english: "to eat breakfast", pos: "verb phrase" },
        { hanzi: "上学", pinyin: "shàngxué", english: "to go to school", pos: "verb" },
        { hanzi: "放学", pinyin: "fàngxué", english: "to finish school", pos: "verb" },
        { hanzi: "做作业", pinyin: "zuò zuòyè", english: "to do homework", pos: "verb phrase" },
        { hanzi: "吃晚饭", pinyin: "chī wǎnfàn", english: "to eat dinner", pos: "verb phrase" },
        { hanzi: "睡觉", pinyin: "shuìjiào", english: "to sleep, to go to bed", pos: "verb" },
        {
          hanzi: "每天",
          pinyin: "měi tiān",
          english: "every day",
          pos: "time word",
          example: {
            hanzi: "我每天六点半起床。",
            pinyin: "Wǒ měi tiān liù diǎn bàn qǐchuáng.",
            english: "I get up at 6:30 every day.",
          },
        },
      ],
      patterns: [
        {
          pattern: "Subject + time + verb",
          example: { hanzi: "我七点起床。", pinyin: "Wǒ qī diǎn qǐchuáng.", english: "I get up at seven." },
          note: "The golden rule: the when-word must come before the action.",
        },
        {
          pattern: "你几点 + verb？",
          example: { hanzi: "你几点睡觉？", pinyin: "Nǐ jǐ diǎn shuìjiào?", english: "What time do you go to bed?" },
          note: "几点 sits in the answer's seat — reply by swapping in the time.",
        },
      ],
    },
    {
      heading: "First…, then…: sequencing your day",
      discovery: {
        problem:
          "Decode this without a dictionary: {{我晚上先做作业，然后吃晚饭，再看电视。|Wǒ wǎnshang xiān zuò zuòyè, ránhòu chī wǎnfàn, zài kàn diànshì.}} You know the three activities. The new words are {{先|xiān}}, {{然后|ránhòu}} and {{再|zài}}. In what order does this person's evening happen?",
        idea:
          "Order: homework → dinner → TV. {{先|xiān|first}}…{{然后|ránhòu|then, after that}}…{{再|zài|then, next}}… is a timeline in words: it chains actions in the exact order they happen, like numbered steps in a recipe.",
      },
      body:
        "Two tools turn single sentences into a whole day:\n\n**1. The chain: 先…然后…再…**\n{{我先刷牙，然后洗澡，再睡觉。|Wǒ xiān shuāyá, ránhòu xǐzǎo, zài shuìjiào.|First I brush my teeth, then I shower, then I go to bed.}}\n\n**2. The bracket: {{从|cóng|from}}…{{到|dào|to, until}}…**\n{{我从三点到四点做作业。|Wǒ cóng sān diǎn dào sì diǎn zuò zuòyè.|I do homework from 3 to 4.}}\nThe whole 从…到… bracket is a time expression, so — golden rule — it stands **before** the verb.\n\n**3. How long? {{小时|xiǎoshí|hour}}**\nA length of time uses {{一个小时|yí ge xiǎoshí|one hour}} or {{半个小时|bàn ge xiǎoshí|half an hour}}. Watch the placement flip: a point of time goes before the verb, but a **duration goes after** it: {{我每天做一个小时作业。|Wǒ měi tiān zuò yí ge xiǎoshí zuòyè.|I do an hour of homework every day.}}",
      whyItWorks:
        "Why does duration behave differently from clock time? A point of time (七点) sets the scene, so it comes before the action — but a duration (一个小时) *measures* the action, and you can only measure something after it exists. Scene-setters go in front; measurements follow. Spotting the job a word does tells you where it sits.",
      strategies: ["Chain actions with 先…然后…再…", "Ask: is this time a scene-setter or a measurement?"],
      keyPoints: [
        "先…然后…再… chains actions in order, like recipe steps",
        "从 X 到 Y = from X until Y — the whole bracket goes before the verb",
        "Durations (一个小时, 半个小时) go AFTER the verb, unlike clock times",
        "从…到… works for dates too: 从星期一到星期五 = Monday to Friday",
      ],
      vocab: [
        { hanzi: "先", pinyin: "xiān", english: "first", pos: "adverb" },
        { hanzi: "然后", pinyin: "ránhòu", english: "then, after that", pos: "conjunction" },
        { hanzi: "再", pinyin: "zài", english: "then, next (in a sequence)", pos: "adverb" },
        { hanzi: "从", pinyin: "cóng", english: "from", pos: "preposition" },
        { hanzi: "到", pinyin: "dào", english: "to, until", pos: "preposition" },
        { hanzi: "小时", pinyin: "xiǎoshí", english: "hour (length of time)", pos: "noun" },
        { hanzi: "上课", pinyin: "shàngkè", english: "to have lessons", pos: "verb" },
        { hanzi: "看电视", pinyin: "kàn diànshì", english: "to watch TV", pos: "verb phrase" },
      ],
      patterns: [
        {
          pattern: "先 + action 1，然后 + action 2，再 + action 3",
          example: {
            hanzi: "我先吃晚饭，然后做作业，再看电视。",
            pinyin: "Wǒ xiān chī wǎnfàn, ránhòu zuò zuòyè, zài kàn diànshì.",
            english: "First I eat dinner, then I do homework, then I watch TV.",
          },
        },
        {
          pattern: "Subject + 从 X 到 Y + verb",
          example: {
            hanzi: "我从上午八点到下午三点上课。",
            pinyin: "Wǒ cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn shàngkè.",
            english: "I have lessons from 8 a.m. to 3 p.m.",
          },
          note: "The 从…到… bracket is one big time expression — before the verb, as always.",
        },
        {
          pattern: "Verb + duration",
          example: {
            hanzi: "我每天看半个小时电视。",
            pinyin: "Wǒ měi tiān kàn bàn ge xiǎoshí diànshì.",
            english: "I watch half an hour of TV every day.",
          },
          note: "Durations measure the action, so they follow the verb — the opposite of clock times.",
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "点", pinyin: "diǎn", english: "o'clock" },
      { hanzi: "分", pinyin: "fēn", english: "minute" },
      { hanzi: "半", pinyin: "bàn", english: "half (past)" },
      { hanzi: "刻", pinyin: "kè", english: "quarter of an hour" },
      { hanzi: "两", pinyin: "liǎng", english: "two (before measure words)" },
      { hanzi: "现在", pinyin: "xiànzài", english: "now" },
      { hanzi: "差", pinyin: "chà", english: "to lack; (minutes) to the hour" },
      { hanzi: "早上", pinyin: "zǎoshang", english: "early morning" },
      { hanzi: "上午", pinyin: "shàngwǔ", english: "morning, a.m." },
      { hanzi: "中午", pinyin: "zhōngwǔ", english: "noon, midday" },
      { hanzi: "下午", pinyin: "xiàwǔ", english: "afternoon" },
      { hanzi: "晚上", pinyin: "wǎnshang", english: "evening, night" },
      { hanzi: "年", pinyin: "nián", english: "year" },
      { hanzi: "月", pinyin: "yuè", english: "month" },
      { hanzi: "日", pinyin: "rì", english: "day of the month (written)" },
      { hanzi: "号", pinyin: "hào", english: "day of the month (spoken)" },
      { hanzi: "星期", pinyin: "xīngqī", english: "week" },
      { hanzi: "星期日", pinyin: "xīngqīrì", english: "Sunday" },
      { hanzi: "今天", pinyin: "jīntiān", english: "today" },
      { hanzi: "明天", pinyin: "míngtiān", english: "tomorrow" },
      { hanzi: "昨天", pinyin: "zuótiān", english: "yesterday" },
      { hanzi: "生日", pinyin: "shēngrì", english: "birthday" },
      { hanzi: "每天", pinyin: "měi tiān", english: "every day" },
      { hanzi: "起床", pinyin: "qǐchuáng", english: "to get up" },
      { hanzi: "刷牙", pinyin: "shuāyá", english: "to brush one's teeth" },
      { hanzi: "洗澡", pinyin: "xǐzǎo", english: "to shower, to bathe" },
      { hanzi: "吃早饭", pinyin: "chī zǎofàn", english: "to eat breakfast" },
      { hanzi: "上学", pinyin: "shàngxué", english: "to go to school" },
      { hanzi: "上课", pinyin: "shàngkè", english: "to have lessons" },
      { hanzi: "放学", pinyin: "fàngxué", english: "to finish school" },
      { hanzi: "做作业", pinyin: "zuò zuòyè", english: "to do homework" },
      { hanzi: "吃晚饭", pinyin: "chī wǎnfàn", english: "to eat dinner" },
      { hanzi: "看电视", pinyin: "kàn diànshì", english: "to watch TV" },
      { hanzi: "睡觉", pinyin: "shuìjiào", english: "to sleep, to go to bed" },
      { hanzi: "小时", pinyin: "xiǎoshí", english: "hour (length of time)" },
    ],
    patterns: [
      {
        pattern: "Number + 点 (+ 分 / 半 / 刻)",
        example: { hanzi: "现在两点半。", pinyin: "Xiànzài liǎng diǎn bàn.", english: "It's 2:30 now." },
      },
      {
        pattern: "Day-part + clock time",
        example: { hanzi: "下午三点", pinyin: "xiàwǔ sān diǎn", english: "3 p.m." },
      },
      {
        pattern: "Subject + time + verb (the golden rule)",
        example: { hanzi: "我七点起床。", pinyin: "Wǒ qī diǎn qǐchuáng.", english: "I get up at seven." },
      },
      {
        pattern: "X年 + X月 + X日/号",
        example: {
          hanzi: "我的生日是十月二号。",
          pinyin: "Wǒ de shēngrì shì shí yuè èr hào.",
          english: "My birthday is 2 October.",
        },
      },
      {
        pattern: "先…然后…再…",
        example: {
          hanzi: "我先刷牙，然后洗澡，再睡觉。",
          pinyin: "Wǒ xiān shuāyá, ránhòu xǐzǎo, zài shuìjiào.",
          english: "First I brush my teeth, then I shower, then I go to bed.",
        },
      },
      {
        pattern: "Subject + 从 X 到 Y + verb",
        example: {
          hanzi: "我从三点到四点做作业。",
          pinyin: "Wǒ cóng sān diǎn dào sì diǎn zuò zuòyè.",
          english: "I do homework from 3 to 4.",
        },
      },
    ],
    mnemonics: [
      {
        hanzi: "明",
        tip: "日 (sun) + 月 (moon) = bright — and the 'bright' new day after tonight's moon is 明天, tomorrow.",
      },
      {
        hanzi: "半",
        tip: "A vertical stroke slices straight down through the middle of 半 — something cut clean in half.",
      },
      {
        hanzi: "早",
        tip: "日 (the sun) sitting just above 十 (imagine a signpost on the horizon) — the sun has only just risen: early.",
      },
      {
        hanzi: "从",
        tip: "从 is two 人 (people), one walking behind the other — following someone FROM one place to the next.",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "dr-quiz-mcq-q01",
        question: "What time is {{三点半|sān diǎn bàn}}?",
        options: ["3:03", "3:30", "3:15", "2:30"],
        answerIndex: 1,
        explanation:
          "三点 = 3 o'clock and {{半|bàn}} = half past, so 三点半 = 3:30. For 3:15 you'd need {{一刻|yí kè}}, and 2:30 would start with {{两点|liǎng diǎn}}.",
        guideRef: "Telling the time: the see-through clock",
        difficulty: "warmup",
      },
      {
        id: "dr-quiz-mcq-q02",
        question: "Which is the correct way to say '2 o'clock'?",
        options: ["{{二点|èr diǎn}}", "{{两点|liǎng diǎn}}", "{{两分|liǎng fēn}}", "{{二号|èr hào}}"],
        answerIndex: 1,
        explanation:
          "Before a measure-type word like {{点|diǎn}}, a standalone '2' becomes {{两|liǎng}} — so 两点, never 二点. 两分 is 'two minutes' and 二号 is 'the 2nd (of the month)'.",
        guideRef: "Telling the time: the see-through clock",
        difficulty: "warmup",
      },
      {
        id: "dr-quiz-mcq-q03",
        question: "What time is {{三点一刻|sān diǎn yí kè}}?",
        options: ["3:15", "3:45", "3:01", "4:15"],
        answerIndex: 0,
        explanation:
          "One {{刻|kè}} is one quarter of an hour (15 minutes), so 三点一刻 = 3:15. 3:45 would be 三点三刻 — three quarters past.",
        guideRef: "Telling the time: the see-through clock",
        difficulty: "core",
        hints: ["刻 means a 'notch' of the clock — how many minutes is one notch?", "一刻 = 15 minutes past the hour named."],
      },
      {
        id: "dr-quiz-mcq-q04",
        question: "Your friend says {{现在差一刻八点。|Xiànzài chà yí kè bā diǎn.}} What time is it?",
        options: ["8:15", "7:45", "8:45", "7:15"],
        answerIndex: 1,
        explanation:
          "{{差|chà}} means 'lacking': the clock is one quarter short of eight, i.e. quarter TO eight = 7:45. Reading it as 'quarter past eight' is the classic trap — 差 always counts backwards from the hour that follows it.",
        guideRef: "Morning or afternoon? Day-parts and counting backwards with 差",
        difficulty: "core",
        hints: [
          "差 = 'lacking' — is the clock before or after eight?",
          "Think of English 'quarter to eight': 15 minutes short of 8:00.",
        ],
        strategy: "Same time, several names: pick the easiest to say",
      },
      {
        id: "dr-quiz-mcq-q05",
        question: "How do you say '3 p.m.' in Chinese?",
        options: [
          "{{下午三点|xiàwǔ sān diǎn}}",
          "{{三点下午|sān diǎn xiàwǔ}}",
          "{{上午三点|shàngwǔ sān diǎn}}",
          "{{晚上三点|wǎnshang sān diǎn}}",
        ],
        answerIndex: 0,
        explanation:
          "The day-part comes BEFORE the clock time (big to small), so 下午三点. 三点下午 reverses the order; 上午三点 is 3 a.m.-ish morning time and 晚上三点 would be 3 at night.",
        guideRef: "Morning or afternoon? Day-parts and counting backwards with 差",
        difficulty: "core",
        hints: ["Chinese orders time information big to small.", "Which is the bigger unit: the day-part or the hour?"],
      },
      {
        id: "dr-quiz-mcq-q06",
        question: "Which is the correct way to write '3 July 2026'?",
        options: ["2026年7月3日", "7月3日2026年", "3日7月2026年", "2026日7月3年"],
        answerIndex: 0,
        explanation:
          "Chinese dates run big to small: 年 (year) → 月 (month) → 日 (day), so 2026年7月3日. British order (day-month-year) is exactly backwards — and the units 年/月/日 must stay glued to their own numbers.",
        guideRef: "Dates: the big-to-small rule",
        difficulty: "core",
        hints: ["Same principle as 下午三点: biggest unit first."],
      },
      {
        id: "dr-quiz-mcq-q07",
        question: "What day is {{星期三|xīngqīsān}}?",
        options: ["Tuesday", "Wednesday", "Thursday", "Sunday"],
        answerIndex: 1,
        explanation:
          "Weekdays are numbered from Monday: 星期一 = Monday, so 星期三 = day three = Wednesday. Sunday breaks the pattern: it's 星期日/星期天, never 星期七.",
        guideRef: "Dates: the big-to-small rule",
        difficulty: "warmup",
      },
      {
        id: "dr-quiz-mcq-q08",
        question: "Choose the correct way to say 'I get up at 7 o'clock.'",
        options: [
          "{{我起床七点。|Wǒ qǐchuáng qī diǎn.}}",
          "{{我七点起床。|Wǒ qī diǎn qǐchuáng.}}",
          "{{我起床在七点。|Wǒ qǐchuáng zài qī diǎn.}}",
          "{{七点起床我。|Qī diǎn qǐchuáng wǒ.}}",
        ],
        answerIndex: 1,
        explanation:
          "The golden rule: time comes BEFORE the verb — 我 + 七点 + 起床. Putting the time after the verb (我起床七点) is word-for-word English; adding 在 doesn't rescue it, and the subject can't dangle at the end.",
        guideRef: "The golden rule: time before the verb",
        difficulty: "core",
        hints: [
          "Where does a when-word stand in a Chinese sentence?",
          "Set the scene, then act: subject → time → verb.",
        ],
        strategy: "Set the scene, then act",
      },
      {
        id: "dr-quiz-mcq-q09",
        question:
          "Challenge: {{他先吃晚饭，然后做作业，再看电视。|Tā xiān chī wǎnfàn, ránhòu zuò zuòyè, zài kàn diànshì.}} What does he do SECOND?",
        options: ["Eat dinner", "Do homework", "Watch TV", "Go to bed"],
        answerIndex: 1,
        explanation:
          "先…然后…再… is a timeline: 先 (first) dinner → 然后 (then) homework → 再 (next) TV. The second slot, 然后, holds 做作业 — do homework.",
        guideRef: "First…, then…: sequencing your day",
        difficulty: "challenge",
        hints: [
          "Match each action to its marker: 先, 然后, 再.",
          "先 = first, 然后 = after that, 再 = next — read them like numbered steps.",
        ],
        strategy: "Chain actions with 先…然后…再…",
      },
      {
        id: "dr-quiz-mcq-q10",
        question: "Challenge: one of these sentences breaks the golden word-order rule. Which one?",
        options: [
          "{{我每天七点半上学。|Wǒ měi tiān qī diǎn bàn shàngxué.}}",
          "{{他晚上九点睡觉。|Tā wǎnshang jiǔ diǎn shuìjiào.}}",
          "{{我妹妹做作业四点。|Wǒ mèimei zuò zuòyè sì diǎn.}}",
          "{{我们下午三点半放学。|Wǒmen xiàwǔ sān diǎn bàn fàngxué.}}",
        ],
        answerIndex: 2,
        explanation:
          "我妹妹做作业四点 puts the time AFTER the verb — English word order. It must be 我妹妹四点做作业. The other three all correctly place their time expressions before the verb.",
        guideRef: "The golden rule: time before the verb",
        difficulty: "challenge",
        hints: [
          "Find the verb in each sentence, then look where the time stands.",
          "In exactly one sentence the clock time trails behind the action.",
        ],
        strategy: "Set the scene, then act",
      },
    ],
    qa: [
      {
        id: "dr-quiz-qa-q01",
        question: "Translate into Chinese: 'It is 4:30 now.' (Characters or pinyin.)",
        modelAnswer: "{{现在四点半。|Xiànzài sì diǎn bàn.|It's 4:30 now.}} (现在是四点半 is also fine.)",
        markScheme: [
          "Uses {{现在|xiànzài}} for 'now' at the start",
          "Correct hour: {{四点|sì diǎn}}",
          "{{半|bàn}} (or 三十分) for the half hour",
        ],
        commonError: "Putting 现在 at the end (四点半现在 ✗) — time-frame words lead the sentence.",
        guideRef: "Telling the time: the see-through clock",
        difficulty: "warmup",
        hints: ["Recipe: 现在 + number + 点 + 半."],
      },
      {
        id: "dr-quiz-qa-q02",
        question:
          "Your penpal asks: {{你几点睡觉？|Nǐ jǐ diǎn shuìjiào?}} Answer in a full Chinese sentence saying you go to bed at 10 p.m.",
        modelAnswer: "{{我晚上十点睡觉。|Wǒ wǎnshang shí diǎn shuìjiào.|I go to bed at 10 p.m.}}",
        markScheme: [
          "Subject {{我|wǒ}}",
          "{{晚上|wǎnshang}} before the clock time (day-part first)",
          "Correct time {{十点|shí diǎn}}",
          "Time expression BEFORE {{睡觉|shuìjiào}}",
        ],
        commonError: "我睡觉晚上十点 ✗ — the time must come before the verb, and 晚上 before 十点.",
        guideRef: "The golden rule: time before the verb",
        difficulty: "core",
        hints: [
          "Echo the question's shape: 你几点睡觉 → 我…睡觉.",
          "几点 sits where your time will sit — just swap it out.",
        ],
        solutions: [
          {
            label: "Echo the question (recommended)",
            steps: [
              "Take 你几点睡觉？ and swap 你 → 我.",
              "Replace the question phrase 几点 with your time, 晚上十点.",
              "Result: 我晚上十点睡觉。 — question words sit in the answer's seat, so answering is just swapping.",
            ],
          },
          {
            label: "Build from the golden rule",
            steps: [
              "Skeleton: subject + time + verb.",
              "Stack the time big to small: 晚上 (day-part) + 十点 (clock).",
              "我 + 晚上十点 + 睡觉 → 我晚上十点睡觉。",
            ],
          },
        ],
      },
      {
        id: "dr-quiz-qa-q03",
        question: "Write 7:45 in Chinese in TWO different ways, and say which you find easier and why.",
        modelAnswer:
          "{{七点四十五分|qī diǎn sìshíwǔ fēn|7:45}} and {{差一刻八点|chà yí kè bā diǎn|quarter to eight}} (or {{七点三刻|qī diǎn sān kè|three quarters past seven}}). Any sensible preference with a reason is fine — e.g. 差一刻八点 matches how we say 'quarter to eight' in English.",
        markScheme: [
          "One counting-up form: 七点四十五分 or 七点三刻",
          "One counting-down form with {{差|chà}}: 差一刻八点",
          "Both forms describe the same time (7:45)",
          "A reason for the preference",
        ],
        commonError: "差一刻七点 ✗ for 7:45 — 差 counts back from the NEXT hour, so it must be 差一刻八点.",
        guideRef: "Morning or afternoon? Day-parts and counting backwards with 差",
        difficulty: "core",
        hints: [
          "One way counts forwards from 7:00, the other backwards from 8:00.",
          "45 minutes = how many 刻?",
        ],
        solutions: [
          {
            label: "Count up from seven",
            steps: [
              "7:45 is 45 minutes past 7 → 七点 + 四十五分.",
              "45 minutes is three quarters → the tidier 七点三刻.",
            ],
          },
          {
            label: "Count down from eight",
            steps: [
              "7:45 is 15 minutes short of 8:00.",
              "差 (lacking) + 一刻 (one quarter) + 八点 → 差一刻八点, exactly like English 'quarter to eight'.",
            ],
          },
        ],
      },
      {
        id: "dr-quiz-qa-q04",
        question: "Translate into Chinese: 'I do homework from 4 p.m. to 5:30 p.m.'",
        modelAnswer:
          "{{我从下午四点到五点半做作业。|Wǒ cóng xiàwǔ sì diǎn dào wǔ diǎn bàn zuò zuòyè.|I do homework from 4 p.m. to 5:30 p.m.}}",
        markScheme: [
          "{{从|cóng}}…{{到|dào}}… bracket used for the time span",
          "Times correct: 下午四点 and 五点半",
          "The whole 从…到… phrase comes BEFORE {{做作业|zuò zuòyè}}",
        ],
        commonError:
          "我做作业从四点到五点半 ✗ — the 从…到… bracket is one big time expression, so it obeys the golden rule and stands before the verb.",
        guideRef: "First…, then…: sequencing your day",
        difficulty: "core",
        hints: [
          "The span 'from…to…' is 从…到….",
          "Treat 从四点到五点半 as a single when-phrase — where do when-phrases go?",
        ],
      },
      {
        id: "dr-quiz-qa-q05",
        question:
          "A friend writes {{我吃早饭七点半。|Wǒ chī zǎofàn qī diǎn bàn.}} Explain in English what is wrong, correct the sentence, and state the rule so they never make the mistake again.",
        modelAnswer:
          "The time is in the wrong place: Chinese puts time expressions BEFORE the verb, but this sentence copies English and puts 七点半 after 吃早饭. Corrected: {{我七点半吃早饭。|Wǒ qī diǎn bàn chī zǎofàn.|I eat breakfast at 7:30.}} Rule: subject + time + verb — set the scene, then act.",
        markScheme: [
          "Identifies the error: time placed after the verb",
          "Corrected sentence: 我七点半吃早饭",
          "States the rule: time comes before the verb (subject + time + verb)",
        ],
        commonError:
          "'Fixing' it as 我吃七点半早饭 ✗ — the time can't be wedged inside the verb phrase either; it stands in front of the whole action.",
        guideRef: "The golden rule: time before the verb",
        difficulty: "challenge",
        strategy: "Set the scene, then act",
        hints: [
          "Compare with a correct sentence you know: 我七点起床.",
          "Where is 七点半 standing, and where should when-words stand?",
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "dr-mcq-a",
        title: "Paper A — Telling the time & dates",
        description: "Clock times with 点/半/刻/分/差, and the big-to-small date system.",
        questions: [
          {
            id: "dr-mcq-a-q01",
            question: "What time is {{五点|wǔ diǎn}}?",
            options: ["5:00", "5:05", "5:30", "10:00"],
            answerIndex: 0,
            explanation: "Number + {{点|diǎn}} = o'clock, so 五点 is simply 5:00.",
            guideRef: "Telling the time: the see-through clock",
            difficulty: "warmup",
          },
          {
            id: "dr-mcq-a-q02",
            question: "What time is {{十一点半|shíyī diǎn bàn}}?",
            options: ["11:03", "10:30", "11:30", "12:30"],
            answerIndex: 2,
            explanation: "十一点 = 11 o'clock and {{半|bàn}} = half past, so 11:30.",
            guideRef: "Telling the time: the see-through clock",
            difficulty: "warmup",
          },
          {
            id: "dr-mcq-a-q03",
            question: "Which is correct for 2:30?",
            options: [
              "{{二点半|èr diǎn bàn}}",
              "{{两点半|liǎng diǎn bàn}}",
              "{{二点三十|èr diǎn sānshí}}",
              "{{两半点|liǎng bàn diǎn}}",
            ],
            answerIndex: 1,
            explanation:
              "Standalone '2' before {{点|diǎn}} must be {{两|liǎng}}: 两点半. Both 二点 options fail the 两-rule, and 两半点 scrambles the order (hour → 点 → 半).",
            guideRef: "Telling the time: the see-through clock",
            difficulty: "core",
            hints: ["Remember the famous trap about '2 o'clock'."],
          },
          {
            id: "dr-mcq-a-q04",
            question: "What time is {{九点五十五分|jiǔ diǎn wǔshíwǔ fēn}}?",
            options: ["9:05", "9:55", "10:55", "5:09"],
            answerIndex: 1,
            explanation:
              "九点 = 9 o'clock, 五十五分 = 55 minutes, so 9:55. (You could also call this time {{差五分十点|chà wǔ fēn shí diǎn|five to ten}}.)",
            guideRef: "Telling the time: the see-through clock",
            difficulty: "core",
            hints: ["Read it in two chunks: 九点 + 五十五分."],
          },
          {
            id: "dr-mcq-a-q05",
            question: "What time is {{差五分七点|chà wǔ fēn qī diǎn}}?",
            options: ["7:05", "6:55", "7:55", "6:05"],
            answerIndex: 1,
            explanation:
              "差五分七点 = 'lacking five minutes, seven o'clock' — five to seven, i.e. 6:55. {{差|chà}} always counts backwards from the hour it names.",
            guideRef: "Morning or afternoon? Day-parts and counting backwards with 差",
            difficulty: "core",
            hints: ["差 = lacking. The clock hasn't reached seven yet.", "English equivalent: 'five to seven'."],
          },
          {
            id: "dr-mcq-a-q06",
            question: "Which month is {{七月|qīyuè}}?",
            options: ["June", "July", "August", "September"],
            answerIndex: 1,
            explanation: "Months are just numbers: 七月 = month seven = July. No month names to memorise!",
            guideRef: "Dates: the big-to-small rule",
            difficulty: "warmup",
          },
          {
            id: "dr-mcq-a-q07",
            question: "How do you say 'December'?",
            options: ["{{二月|èryuè}}", "{{十月|shíyuè}}", "{{十二月|shí'èryuè}}", "{{二十月|èrshíyuè}}"],
            answerIndex: 2,
            explanation:
              "December is month twelve: 十二月. 二月 is February, 十月 is October, and 二十月 ('month twenty') doesn't exist.",
            guideRef: "Dates: the big-to-small rule",
            difficulty: "core",
          },
          {
            id: "dr-mcq-a-q08",
            question:
              "A friend answers: {{七月三号。|Qī yuè sān hào.}} Which question were they asked?",
            options: [
              "{{现在几点？|Xiànzài jǐ diǎn?}}",
              "{{今天几月几号？|Jīntiān jǐ yuè jǐ hào?}}",
              "{{今天星期几？|Jīntiān xīngqī jǐ?}}",
              "{{你几岁？|Nǐ jǐ suì?}}",
            ],
            answerIndex: 1,
            explanation:
              "七月三号 is a month + day, so the question asked for the date: 今天几月几号？ The others ask the clock time, the weekday and someone's age.",
            guideRef: "Dates: the big-to-small rule",
            difficulty: "core",
            hints: ["Match the shape of the answer to the shape of the question — 几 sits where the numbers went."],
          },
          {
            id: "dr-mcq-a-q09",
            question: "What day is {{星期日|xīngqīrì}}?",
            options: ["Saturday", "Sunday", "Monday", "Friday"],
            answerIndex: 1,
            explanation:
              "Sunday is the exception to the numbering: 星期日 (or 星期天), the 'sun day' — never 星期七.",
            guideRef: "Dates: the big-to-small rule",
            difficulty: "warmup",
          },
          {
            id: "dr-mcq-a-q10",
            question: "Today is {{星期二|xīngqī'èr}}. What day is {{明天|míngtiān}}?",
            options: ["{{星期一|xīngqīyī}}", "{{星期二|xīngqī'èr}}", "{{星期三|xīngqīsān}}", "{{星期四|xīngqīsì}}"],
            answerIndex: 2,
            explanation:
              "明天 = tomorrow, one day after 星期二 (Tuesday), so 星期三 (Wednesday). 昨天 (yesterday) would have been 星期一.",
            guideRef: "Dates: the big-to-small rule",
            difficulty: "core",
            hints: ["明天 = tomorrow; count one day forward."],
          },
          {
            id: "dr-mcq-a-q11",
            question:
              "Someone asks {{你的生日是几月几号？|Nǐ de shēngrì shì jǐ yuè jǐ hào?}} Which reply is correct?",
            options: [
              "{{我的生日是九号五月。|Wǒ de shēngrì shì jiǔ hào wǔ yuè.}}",
              "{{我的生日是五月九号。|Wǒ de shēngrì shì wǔ yuè jiǔ hào.}}",
              "{{我的生日是星期五。|Wǒ de shēngrì shì xīngqīwǔ.}}",
              "{{我九岁。|Wǒ jiǔ suì.}}",
            ],
            answerIndex: 1,
            explanation:
              "Dates run big to small: month before day — 五月九号 (9 May). 九号五月 is backwards, 星期五 answers 'what weekday', and 我九岁 answers 'how old are you'.",
            guideRef: "Dates: the big-to-small rule",
            difficulty: "core",
            hints: ["Month or day first? Think big to small."],
          },
          {
            id: "dr-mcq-a-q12",
            question: "Challenge: how is the year in {{2026年|the year 2026}} read aloud?",
            options: [
              "{{二〇二六年|èr líng èr liù nián}}",
              "{{二十二六年|èrshí'èrliù nián}}",
              "{{二六二〇年|èr liù èr líng nián}}",
              "{{六二〇二年|liù èr líng èr nián}}",
            ],
            answerIndex: 0,
            explanation:
              "Years are read digit by digit: 2-0-2-6 → 二〇二六年. You never build them like ordinary big numbers, and the digits keep their left-to-right order.",
            guideRef: "Dates: the big-to-small rule",
            difficulty: "challenge",
            hints: ["Say each digit separately, like reading a phone number.", "〇 = líng = zero."],
          },
          {
            id: "dr-mcq-a-q13",
            question: "Challenge: three of these are the SAME time. Which one is different?",
            options: [
              "{{三点三刻|sān diǎn sān kè}}",
              "{{三点四十五分|sān diǎn sìshíwǔ fēn}}",
              "{{差一刻四点|chà yí kè sì diǎn}}",
              "{{四点一刻|sì diǎn yí kè}}",
            ],
            answerIndex: 3,
            explanation:
              "三点三刻, 三点四十五分 and 差一刻四点 are all 3:45 — counting up in quarters, up in minutes, and down from four. 四点一刻 is 4:15, half an hour later.",
            guideRef: "Morning or afternoon? Day-parts and counting backwards with 差",
            difficulty: "challenge",
            hints: [
              "Convert each option to digits before comparing.",
              "Remember 差 counts backwards from the next hour.",
            ],
            strategy: "Same time, several names: pick the easiest to say",
          },
        ],
      },
      {
        id: "dr-mcq-b",
        title: "Paper B — My day",
        description: "Routine verbs, the time-before-verb rule, sequencing and time spans.",
        questions: [
          {
            id: "dr-mcq-b-q01",
            question: "What does {{起床|qǐchuáng}} mean?",
            options: ["To go to bed", "To get up", "To eat breakfast", "To brush teeth"],
            answerIndex: 1,
            explanation: "起床 = 'rise from the bed' — to get up. Its opposite at the end of the day is {{睡觉|shuìjiào}}.",
            guideRef: "The golden rule: time before the verb",
            difficulty: "warmup",
          },
          {
            id: "dr-mcq-b-q02",
            question: "What does {{每天|měi tiān}} mean?",
            options: ["Today", "Tomorrow", "Every day", "All day"],
            answerIndex: 2,
            explanation: "每 = every, 天 = day → every day. It goes before other time words: 我每天七点起床.",
            guideRef: "The golden rule: time before the verb",
            difficulty: "warmup",
          },
          {
            id: "dr-mcq-b-q03",
            question: "What does {{放学|fàngxué}} mean?",
            options: ["To go to school", "To have lessons", "To finish school", "To do homework"],
            answerIndex: 2,
            explanation:
              "放学 is when school 'releases' you — to finish school. Going TO school is {{上学|shàngxué}}; note the neat 上/放 pair.",
            guideRef: "The golden rule: time before the verb",
            difficulty: "warmup",
          },
          {
            id: "dr-mcq-b-q04",
            question: "Choose the correct sentence for 'I brush my teeth at 7:10.'",
            options: [
              "{{我刷牙七点十分。|Wǒ shuāyá qī diǎn shí fēn.}}",
              "{{我七点十分刷牙。|Wǒ qī diǎn shí fēn shuāyá.}}",
              "{{七点十分我的刷牙。|Qī diǎn shí fēn wǒ de shuāyá.}}",
              "{{我刷七点十分牙。|Wǒ shuā qī diǎn shí fēn yá.}}",
            ],
            answerIndex: 1,
            explanation:
              "Golden rule: subject + time + verb → 我七点十分刷牙. Option 1 copies English order, option 3 turns the sentence into a possessive, and option 4 wedges the time inside the verb.",
            guideRef: "The golden rule: time before the verb",
            difficulty: "core",
            hints: ["Where do when-words stand relative to the verb?"],
          },
          {
            id: "dr-mcq-b-q05",
            question:
              "Someone asks {{你几点睡觉？|Nǐ jǐ diǎn shuìjiào?}} Which is the best reply?",
            options: [
              "{{我晚上十点半睡觉。|Wǒ wǎnshang shí diǎn bàn shuìjiào.}}",
              "{{我睡觉晚上十点半。|Wǒ shuìjiào wǎnshang shí diǎn bàn.}}",
              "{{我十点半岁。|Wǒ shí diǎn bàn suì.}}",
              "{{我不睡觉星期一。|Wǒ bú shuìjiào xīngqīyī.}}",
            ],
            answerIndex: 0,
            explanation:
              "我晚上十点半睡觉 keeps the time before the verb and stacks it big to small (晚上 → 十点半). Option 2 breaks the golden rule; option 3 confuses 点 with 岁; option 4 dangles its time word after the verb too.",
            guideRef: "The golden rule: time before the verb",
            difficulty: "core",
            hints: ["Echo the question: 几点 sits where your time should sit."],
          },
          {
            id: "dr-mcq-b-q06",
            question:
              "What does {{我从上午八点到下午三点上课。|Wǒ cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn shàngkè.}} mean?",
            options: [
              "I have lessons from 8 a.m. to 3 p.m.",
              "I do homework from 8 to 3.",
              "I have lessons at 8 and go home at 3.",
              "I finish school at 8 a.m.",
            ],
            answerIndex: 0,
            explanation:
              "从…到… brackets a span ('from…to…'), and 上课 = to have lessons — so lessons run 8 a.m. to 3 p.m. Option 3 wrongly reads two separate events instead of one continuous span.",
            guideRef: "First…, then…: sequencing your day",
            difficulty: "core",
            hints: ["从 = from, 到 = to/until.", "上课 is 'have lessons', not 'do homework'."],
          },
          {
            id: "dr-mcq-b-q07",
            question:
              "Fill the gaps: 我___三点___四点做作业。 ('I do homework from 3 to 4.')",
            options: ["从 … 到", "到 … 从", "先 … 再", "差 … 分"],
            answerIndex: 0,
            explanation:
              "'From X to Y' is {{从|cóng}} X {{到|dào}} Y — in that order. 到…从 reverses it, 先…再 chains separate actions, and 差…分 belongs to backwards clock-reading.",
            guideRef: "First…, then…: sequencing your day",
            difficulty: "core",
            hints: ["Which word means 'from' and which means 'to'?"],
          },
          {
            id: "dr-mcq-b-q08",
            question:
              "What does {{我每天做一个小时作业。|Wǒ měi tiān zuò yí ge xiǎoshí zuòyè.}} mean?",
            options: [
              "I do homework at 1 o'clock every day.",
              "I do one hour of homework every day.",
              "I do homework once a day.",
              "I start homework after an hour.",
            ],
            answerIndex: 1,
            explanation:
              "一个小时 = one hour as a LENGTH of time, and durations sit after the verb — so 'I do an hour of homework every day'. 'At 1 o'clock' would be 一点, placed before the verb.",
            guideRef: "First…, then…: sequencing your day",
            difficulty: "core",
            hints: [
              "小时 measures how long, 点 names when.",
              "Is 一个小时 before or after the verb? What job does that position do?",
            ],
            strategy: "Ask: is this time a scene-setter or a measurement?",
          },
          {
            id: "dr-mcq-b-q09",
            question:
              "Challenge — read the schedule: {{小明六点半起床，七点吃早饭，七点半上学。他下午三点半放学，四点做作业。|Xiǎomíng liù diǎn bàn qǐchuáng, qī diǎn chī zǎofàn, qī diǎn bàn shàngxué. Tā xiàwǔ sān diǎn bàn fàngxué, sì diǎn zuò zuòyè.}} What does Xiaoming do at 7:30?",
            options: ["Gets up", "Eats breakfast", "Goes to school", "Finishes school"],
            answerIndex: 2,
            explanation:
              "Scan for 七点半 and read the verb after it: 七点半上学 — he goes to school. Because time always comes before its verb, each time-stamp labels the action that follows it.",
            guideRef: "The golden rule: time before the verb",
            difficulty: "challenge",
            hints: [
              "Find 七点半 in the passage.",
              "The verb belonging to a time comes straight after it — read the next word.",
            ],
            strategy: "Set the scene, then act",
          },
          {
            id: "dr-mcq-b-q10",
            question:
              "Challenge: {{我晚上先洗澡，然后吃晚饭，再做作业。|Wǒ wǎnshang xiān xǐzǎo, ránhòu chī wǎnfàn, zài zuò zuòyè.}} Which activity comes LAST?",
            options: ["Shower", "Eat dinner", "Do homework", "Watch TV"],
            answerIndex: 2,
            explanation:
              "The chain runs 先 (shower) → 然后 (dinner) → 再 (homework), so homework is last. Watching TV isn't mentioned at all — don't let plausible distractors invent events.",
            guideRef: "First…, then…: sequencing your day",
            difficulty: "challenge",
            hints: ["再 marks the final step in this chain.", "List the three verbs in marker order before answering."],
            strategy: "Chain actions with 先…然后…再…",
          },
          {
            id: "dr-mcq-b-q11",
            question: "One of these sentences is WRONG. Which?",
            options: [
              "{{我每天六点半起床。|Wǒ měi tiān liù diǎn bàn qǐchuáng.}}",
              "{{他晚上看电视。|Tā wǎnshang kàn diànshì.}}",
              "{{我睡觉十一点。|Wǒ shuìjiào shíyī diǎn.}}",
              "{{我们下午四点做作业。|Wǒmen xiàwǔ sì diǎn zuò zuòyè.}}",
            ],
            answerIndex: 2,
            explanation:
              "我睡觉十一点 puts the time after the verb — it must be 我十一点睡觉. The other three all obey the golden rule: time before the action.",
            guideRef: "The golden rule: time before the verb",
            difficulty: "core",
            hints: ["Check each sentence: verb first or time first?"],
          },
          {
            id: "dr-mcq-b-q12",
            question:
              "Challenge: {{他晚上差五分十点睡觉。|Tā wǎnshang chà wǔ fēn shí diǎn shuìjiào.}} What time does he go to bed?",
            options: ["10:05 p.m.", "9:55 p.m.", "10:55 p.m.", "9:05 p.m."],
            answerIndex: 1,
            explanation:
              "差五分十点 = five minutes short of ten = 9:55, and 晚上 makes it p.m. Two skills stacked: backwards clock-reading with 差, inside a golden-rule routine sentence.",
            guideRef: "Morning or afternoon? Day-parts and counting backwards with 差",
            difficulty: "challenge",
            hints: ["Deal with 差五分十点 first: before or after ten?", "Then let 晚上 tell you a.m. or p.m."],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "dr-qa-a",
        title: "Paper A — Time & dates in writing",
        description: "Writing clock times and dates, and decoding 差-times.",
        questions: [
          {
            id: "dr-qa-a-q01",
            question: "Translate into Chinese: 'It is 9 o'clock in the morning.' (Characters or pinyin.)",
            modelAnswer: "{{现在是上午九点。|Xiànzài shì shàngwǔ jiǔ diǎn.|It's 9 a.m. now.}} (早上九点 also accepted; 是 optional.)",
            markScheme: [
              "Day-part word {{上午|shàngwǔ}} or {{早上|zǎoshang}}",
              "Day-part placed BEFORE the clock time",
              "Correct time {{九点|jiǔ diǎn}}",
            ],
            commonError: "九点上午 ✗ — the day-part must come first: big to small.",
            guideRef: "Morning or afternoon? Day-parts and counting backwards with 差",
            difficulty: "warmup",
            hints: ["Day-part first, then the hour."],
          },
          {
            id: "dr-qa-a-q02",
            question: "Write the date 3 July 2026 in Chinese characters, as it would appear in writing.",
            modelAnswer: "{{二〇二六年七月三日|èr líng èr liù nián qī yuè sān rì|3 July 2026}} (2026年7月3日 with digits also accepted.)",
            markScheme: [
              "Order: 年 → 月 → 日 (big to small)",
              "Year read/written digit by digit: 二〇二六年",
              "{{七月|qīyuè}} for July",
              "{{三日|sān rì}} (日 for writing; 号 acceptable if noted as spoken)",
            ],
            commonError: "British order 三日七月二〇二六年 ✗ — Chinese dates zoom in from the biggest unit, never out.",
            guideRef: "Dates: the big-to-small rule",
            difficulty: "core",
            hints: ["Start with the year.", "Each number carries its own unit: 年, 月, 日."],
          },
          {
            id: "dr-qa-a-q03",
            question:
              "Answer in a full Chinese sentence: {{你的生日是几月几号？|Nǐ de shēngrì shì jǐ yuè jǐ hào?}} (Use any date you like, e.g. 21 October.)",
            modelAnswer:
              "{{我的生日是十月二十一号。|Wǒ de shēngrì shì shí yuè èrshíyī hào.|My birthday is 21 October.}}",
            markScheme: [
              "Starts {{我的生日是|wǒ de shēngrì shì}}",
              "Month before day (big to small)",
              "Month and day numbers correctly formed with 月 and 号/日",
            ],
            commonError: "Day before month (二十一号十月 ✗) — echo the question's order: 几月几号 → X月X号.",
            guideRef: "Dates: the big-to-small rule",
            difficulty: "core",
            hints: ["The question already shows the shape: swap each 几 for a number."],
          },
          {
            id: "dr-qa-a-q04",
            question:
              "Your Chinese friend says {{现在差十分六点。|Xiànzài chà shí fēn liù diǎn.}} What time is it in English — and show how you worked it out.",
            modelAnswer:
              "5:50 (ten to six). 差十分六点 means 'lacking ten minutes, six o'clock', so the time is ten minutes before 6:00.",
            markScheme: [
              "Correct time: 5:50 / ten to six",
              "Explains that {{差|chà}} means 'lacking/short of'",
              "Shows the subtraction or the 'ten to six' reading",
            ],
            commonError: "6:10 ✗ — 差 counts backwards to the hour that follows it, never forwards past it.",
            guideRef: "Morning or afternoon? Day-parts and counting backwards with 差",
            difficulty: "core",
            hints: ["差 = lacking. Has the clock reached six yet?", "Take 6:00 and step back ten minutes."],
            solutions: [
              {
                label: "Subtract from the hour",
                steps: [
                  "差十分六点 = 6:00 minus 10 minutes.",
                  "6:00 − 0:10 = 5:50.",
                ],
              },
              {
                label: "Match the English pattern",
                steps: [
                  "差 + minutes + hour works exactly like English 'X to Y'.",
                  "差十分六点 → 'ten to six' → 5:50 — no arithmetic needed once you hear the pattern.",
                ],
              },
            ],
          },
          {
            id: "dr-qa-a-q05",
            question: "Translate into Chinese: 'Today is Wednesday. Tomorrow is my birthday.'",
            modelAnswer:
              "{{今天星期三。明天是我的生日。|Jīntiān xīngqīsān. Míngtiān shì wǒ de shēngrì.|Today is Wednesday. Tomorrow is my birthday.}}",
            markScheme: [
              "{{今天星期三|jīntiān xīngqīsān}} (是 optional in the weekday sentence)",
              "{{明天|míngtiān}} for tomorrow",
              "{{我的生日|wǒ de shēngrì}} with 的 for 'my'",
            ],
            commonError: "星期三今天 ✗ — the time-frame word (今天/明天) leads its sentence.",
            guideRef: "Dates: the big-to-small rule",
            difficulty: "core",
            hints: ["Two short sentences — don't glue them into one.", "Wednesday = week-day number three."],
          },
          {
            id: "dr-qa-a-q06",
            question:
              "Explain to a Year 7 student WHY Chinese writes dates as 2026年7月3日 rather than 3/7/2026, and write '1 October 2025' in Chinese to prove your rule works.",
            modelAnswer:
              "Chinese orders information big to small: the biggest unit (year) first, zooming in to month, then day — the same logic as 下午三点 (day-part before hour). So 1 October 2025 = {{二〇二五年十月一日|èr líng èr wǔ nián shí yuè yī rì|1 October 2025}}.",
            markScheme: [
              "States the big-to-small principle",
              "Links it to another example (e.g. 下午三点 or addresses)",
              "Correct date: 二〇二五年十月一日 / 2025年10月1日",
            ],
            commonError:
              "Writing 十月 as '十0月' or reading the year as one big number — years go digit by digit: 二〇二五.",
            guideRef: "Dates: the big-to-small rule",
            difficulty: "challenge",
            strategy: "Big to small — zoom in, never out",
            hints: [
              "What ordering rule did you meet with 下午三点?",
              "Apply it: which of year/month/day is the biggest frame?",
            ],
          },
        ],
      },
      {
        id: "dr-qa-b",
        title: "Paper B — My day in Chinese",
        description: "Writing about your routine: the golden rule, sequencing, spans and a full-day schedule to decode.",
        questions: [
          {
            id: "dr-qa-b-q01",
            question: "Translate into English: {{我七点起床。|Wǒ qī diǎn qǐchuáng.}}",
            modelAnswer: "I get up at 7 o'clock.",
            markScheme: [
              "{{起床|qǐchuáng}} = get up (not 'sleep' or 'go to school')",
              "Time correctly read as 7:00",
              "Natural English order ('at seven' after the verb is correct English)",
            ],
            commonError: "Translating too literally as 'I seven o'clock get up' — English wants the time at the end.",
            guideRef: "The golden rule: time before the verb",
            difficulty: "warmup",
            hints: ["起床 is what you do when the alarm rings."],
          },
          {
            id: "dr-qa-b-q02",
            question: "Write a Chinese sentence: you finish school at 3:30 in the afternoon.",
            modelAnswer: "{{我下午三点半放学。|Wǒ xiàwǔ sān diǎn bàn fàngxué.|I finish school at 3:30 p.m.}}",
            markScheme: [
              "Subject {{我|wǒ}}",
              "{{下午|xiàwǔ}} before {{三点半|sān diǎn bàn}} (big to small)",
              "Whole time phrase BEFORE {{放学|fàngxué}}",
            ],
            commonError: "我放学下午三点半 ✗ — golden rule: the time stands in front of the verb.",
            guideRef: "The golden rule: time before the verb",
            difficulty: "core",
            hints: ["Skeleton: 我 + [day-part + clock] + verb.", "'Finish school' is 放学, not 上学."],
          },
          {
            id: "dr-qa-b-q03",
            question: "Translate into Chinese: 'I have lessons from 8:30 a.m. to 3 p.m.'",
            modelAnswer:
              "{{我从上午八点半到下午三点上课。|Wǒ cóng shàngwǔ bā diǎn bàn dào xiàwǔ sān diǎn shàngkè.|I have lessons from 8:30 a.m. to 3 p.m.}}",
            markScheme: [
              "{{从|cóng}}…{{到|dào}}… frame around the two times",
              "Day-parts 上午/下午 before each clock time",
              "Verb {{上课|shàngkè}} after the whole 从…到… bracket",
            ],
            commonError:
              "我上课从八点半到三点 ✗ — the 从…到… span is one big time expression, so it goes before the verb.",
            guideRef: "First…, then…: sequencing your day",
            difficulty: "core",
            hints: ["Build the bracket first: 从…到….", "Then obey the golden rule: bracket before verb."],
          },
          {
            id: "dr-qa-b-q04",
            question:
              "Use 先…然后…再… to write one Chinese sentence: in the evening you shower, then eat dinner, then do homework.",
            modelAnswer:
              "{{我晚上先洗澡，然后吃晚饭，再做作业。|Wǒ wǎnshang xiān xǐzǎo, ránhòu chī wǎnfàn, zài zuò zuòyè.|In the evening I first shower, then eat dinner, then do homework.}}",
            markScheme: [
              "先 + first action ({{洗澡|xǐzǎo}})",
              "然后 + second action ({{吃晚饭|chī wǎnfàn}})",
              "再 + third action ({{做作业|zuò zuòyè}})",
              "Actions in the order given",
            ],
            commonError: "Shuffling the markers (然后…先…再 ✗) — 先 must open the chain, like step 1 of a recipe.",
            guideRef: "First…, then…: sequencing your day",
            difficulty: "core",
            hints: ["Three slots in fixed order: 先 → 然后 → 再.", "Drop one activity into each slot."],
          },
          {
            id: "dr-qa-b-q05",
            question:
              "Challenge — decode 小美's whole day and answer in English: {{小美每天早上六点三刻起床，七点吃早饭，七点半上学。她从八点到下午三点上课，四点做作业，晚上六点吃晚饭，九点半睡觉。|Xiǎoměi měi tiān zǎoshang liù diǎn sān kè qǐchuáng, qī diǎn chī zǎofàn, qī diǎn bàn shàngxué. Tā cóng bā diǎn dào xiàwǔ sān diǎn shàngkè, sì diǎn zuò zuòyè, wǎnshang liù diǎn chī wǎnfàn, jiǔ diǎn bàn shuìjiào.}} (a) What time does she get up? (b) How long is she in lessons? (c) What does she do at 4:00? (d) When does she go to bed?",
            modelAnswer:
              "(a) 6:45 a.m. (六点三刻 = three quarters past six). (b) From 8 a.m. to 3 p.m. — seven hours. (c) Homework (做作业). (d) 9:30 p.m. (晚上九点半).",
            markScheme: [
              "(a) 6:45 — decodes 三刻 as three quarters",
              "(b) 8 a.m.–3 p.m. or 'seven hours' — reads the 从…到… span",
              "(c) does homework",
              "(d) 9:30 p.m. — uses 晚上 for p.m.",
            ],
            commonError:
              "Reading 六点三刻 as 6:03 or 6:30 ✗ — a 刻 is a quarter of an hour, so 三刻 = 45 minutes.",
            guideRef: "First…, then…: sequencing your day",
            difficulty: "challenge",
            strategy: "Set the scene, then act",
            hints: [
              "Each time-stamp labels the verb straight after it.",
              "三刻 = three quarters; 从…到… brackets the lessons.",
              "For (b), subtract the start from the end — mind the a.m./p.m. switch.",
            ],
          },
          {
            id: "dr-qa-b-q06",
            question:
              "Write YOUR own routine: at least three Chinese sentences with times, using {{每天|měi tiān}} at least once. (Example activities: 起床, 上学, 做作业, 睡觉.)",
            modelAnswer:
              "{{我每天七点起床。|Wǒ měi tiān qī diǎn qǐchuáng.|I get up at 7 every day.}} {{我下午三点半放学，四点做作业。|Wǒ xiàwǔ sān diǎn bàn fàngxué, sì diǎn zuò zuòyè.|I finish school at 3:30 p.m. and do homework at 4.}} {{我晚上十点睡觉。|Wǒ wǎnshang shí diǎn shuìjiào.|I go to bed at 10 p.m.}} (Any accurate routine is fine.)",
            markScheme: [
              "At least three sentences, each with a time expression",
              "EVERY time expression before its verb",
              "{{每天|měi tiān}} used correctly (before other time words)",
              "Times correctly formed (点/半/刻/分; 两点 if 2 o'clock)",
            ],
            commonError:
              "One rogue sentence with the time after the verb — check every sentence against the golden rule before you finish.",
            guideRef: "The golden rule: time before the verb",
            difficulty: "core",
            hints: [
              "Reuse the skeleton each time: 我 + (每天) + time + verb.",
              "Vary the day-parts: 早上, 下午, 晚上.",
            ],
          },
          {
            id: "dr-qa-b-q07",
            question:
              "Challenge — be the teacher: a classmate wrote {{我吃晚饭六点半。|Wǒ chī wǎnfàn liù diǎn bàn.}} Explain the golden word-order rule to them in English, give the corrected sentence, and tell them where a DURATION like {{一个小时|yí ge xiǎoshí}} would go instead — with an example.",
            modelAnswer:
              "Points of time go BEFORE the verb in Chinese: the sentence sets the scene (when), then gives the action. Corrected: {{我六点半吃晚饭。|Wǒ liù diǎn bàn chī wǎnfàn.|I eat dinner at 6:30.}} But a duration measures the action, so it goes AFTER the verb: {{我每天做一个小时作业。|Wǒ měi tiān zuò yí ge xiǎoshí zuòyè.|I do an hour of homework every day.}}",
            markScheme: [
              "States the rule: point-of-time before the verb",
              "Corrected sentence: 我六点半吃晚饭",
              "States that durations go after the verb",
              "Gives a correct duration example (e.g. 做一个小时作业 / 看半个小时电视)",
            ],
            commonError:
              "Claiming ALL time words follow the verb or ALL come first — the split is: scene-setters (clock times) before, measurements (durations) after.",
            guideRef: "First…, then…: sequencing your day",
            difficulty: "challenge",
            strategy: "Ask: is this time a scene-setter or a measurement?",
            hints: [
              "Two kinds of time: 'at 6:30' vs 'for an hour'. Which is which here?",
              "Scene-setters lead; measurements follow the action they measure.",
            ],
          },
        ],
      },
    ],
  },
};
