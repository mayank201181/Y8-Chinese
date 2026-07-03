import type { Topic } from "../types";

// Weather & Seasons — Cambridge IGCSE 0547 pathway, Year 8.
// House style: see lib/topics/greetings.ts (exemplar).

export const weather: Topic = {
  id: "weather",
  title: "Weather & Seasons",
  titleChinese: { hanzi: "天气与季节", pinyin: "tiānqì yǔ jìjié" },
  subject: "chinese",
  icon: "🌦️",
  color: "cyan",
  intro:
    "Weather is the world's favourite small talk — and in Chinese it comes with a twist: rain 'falls', wind 'scrapes', and you'll discover why you can never say 很下雨. Along the way you'll compare steamy Singapore with snowy Beijing, read real weather forecasts, and learn to pack the right things for tomorrow.",
  guide: [
    {
      heading: "Asking about the weather: 天气怎么样？",
      discovery: {
        problem:
          "You already know {{你好吗？|nǐ hǎo ma?|How are you?}} gets a yes/no-style answer ('I'm fine'). But if you ask {{今天天气好吗？|jīntiān tiānqì hǎo ma?|Is the weather good today?}}, your friend can only say yes or no — you learn almost nothing! What kind of question word would let them describe the weather instead?",
        idea:
          "Chinese has an open question word: {{怎么样|zěnmeyàng|how is it? / what's it like?}}. {{今天天气怎么样？|Jīntiān tiānqì zěnmeyàng?|What's the weather like today?}} invites a description — sunny, cloudy, raining — not just 'yes'. Like all Chinese question words, it sits exactly where the answer will go: swap 怎么样 out, drop the answer in.",
      },
      body:
        "The all-purpose weather question is {{今天天气怎么样？|Jīntiān tiānqì zěnmeyàng?|What's the weather like today?}}\n\nThree sky-words cover most answers:\n- {{晴天|qíngtiān|sunny day / clear sky}} — {{今天晴天。|Jīntiān qíngtiān.|It's sunny today.}}\n- {{阴天|yīntiān|overcast day}} — grey sky, no sun\n- {{多云|duōyún|cloudy}} — literally 'many clouds'\n\nNotice you don't need {{是|shì|to be}}: {{今天晴天|jīntiān qíngtiān}} is literally 'today sunny-day', and that's a complete, natural sentence.\n\nCharacter clue: {{晴|qíng|clear/sunny}} has the sun radical 日 on its left — sun out, sky clear. Its opposite {{阴|yīn|overcast}} is the same 阴 as in yīn-yáng: the dark, shadowed half.",
      whyItWorks:
        "Why does 怎么样 go at the END? Because Chinese question words sit in the answer's seat. Answer: {{今天天气很好。|Jīntiān tiānqì hěn hǎo.|The weather is very good today.}} Question: 今天天气怎么样？ — same shape, with 怎么样 parked where the description belongs. Learn the statement and the question comes free; answering is just swapping the question word for your answer.",
      strategies: ["Question words sit in the answer's seat", "Open questions beat yes/no questions when you want information"],
      keyPoints: [
        "今天天气怎么样？ = What's the weather like today?",
        "怎么样 asks for a description; 吗 only allows yes/no",
        "No 是 needed: 今天晴天 is a complete sentence",
        "晴 has the sun radical 日; 阴 is the dark half of yin-yang",
      ],
      vocab: [
        { hanzi: "天气", pinyin: "tiānqì", english: "weather", pos: "noun" },
        {
          hanzi: "怎么样",
          pinyin: "zěnmeyàng",
          english: "how is it? / what's it like?",
          pos: "question word",
          example: { hanzi: "今天天气怎么样？", pinyin: "Jīntiān tiānqì zěnmeyàng?", english: "What's the weather like today?" },
        },
        { hanzi: "今天", pinyin: "jīntiān", english: "today", pos: "noun" },
        { hanzi: "晴天", pinyin: "qíngtiān", english: "sunny day, clear sky", pos: "noun" },
        { hanzi: "阴天", pinyin: "yīntiān", english: "overcast day", pos: "noun" },
        { hanzi: "多云", pinyin: "duōyún", english: "cloudy", pos: "adjective" },
      ],
      patterns: [
        {
          pattern: "今天天气怎么样？",
          example: { hanzi: "今天天气怎么样？", pinyin: "Jīntiān tiānqì zěnmeyàng?", english: "What's the weather like today?" },
          note: "怎么样 sits at the end, in the answer's seat — no word-order flip.",
        },
        {
          pattern: "今天 + sky word",
          example: { hanzi: "今天多云。", pinyin: "Jīntiān duōyún.", english: "It's cloudy today." },
          note: "No 是 needed — 'today cloudy' is already a full sentence.",
        },
      ],
    },
    {
      heading: "Rain falls, wind scrapes: the weather verbs",
      discovery: {
        problem:
          "A student wrote {{今天很下雨|jīntiān hěn xià yǔ}} for 'it's very rainy today' — and the teacher marked it wrong. But 很热 ('very hot') is fine! Look closely at the pieces: {{下|xià|to fall / go down}} + {{雨|yǔ|rain}}. What kind of word is 下雨 really — and why won't 很 stick to it?",
        idea:
          "{{下雨|xià yǔ|to rain (lit. 'fall rain')}} is a **verb + noun**, an *event*, not an adjective. 很 only boosts adjectives (很冷, 很热). You can't 'very fall rain' any more than you can 'very play football' in English. Same family: {{下雪|xià xuě|to snow ('fall snow')}} and {{刮风|guā fēng|to be windy ('scrape wind')}} — Chinese pictures the wind scraping past your face!",
      },
      body:
        "Chinese treats weather as something the sky *does*:\n- {{下雨|xià yǔ|to rain}} — rain falls\n- {{下雪|xià xuě|to snow}} — snow falls\n- {{刮风|guā fēng|to be windy}} — wind 'scrapes'\n\nSo 'it's raining today' is simply {{今天下雨。|Jīntiān xià yǔ.|It's raining today.}} To announce a change that's just happened, add {{了|le}}: {{下雨了！|Xià yǔ le!|It's started raining!}}\n\nWant to say the rain is HEAVY? Don't boost the verb — describe the noun: {{雨很大。|Yǔ hěn dà.|The rain is heavy (lit. 'the rain is big').}} Likewise {{风很大|fēng hěn dà|it's very windy (the wind is big)}}.\n\n**Never** 很下雨 ✗, 很刮风 ✗ — 很 refuses to attach to verbs.",
      whyItWorks:
        "English hides the difference: 'rainy' (adjective) and 'raining' (verb) sound similar, so learners assume 下雨 is an adjective like 冷. Chinese keeps them strictly apart: adjectives (冷, 热) take 很; events (下雨, 刮风) never do. When you want intensity for an event, shift the adjective onto the noun inside it: 雨很大 — 'the RAIN is big'. Spot the word class first, and the grammar chooses itself.",
      strategies: ["Ask 'is it a thing the sky DOES or a way the sky IS?'", "To intensify an event, describe its noun: 雨很大, not 很下雨"],
      keyPoints: [
        "下雨, 下雪, 刮风 are verbs (events), not adjectives",
        "很 + verb is always wrong: 很下雨 ✗",
        "Heavy rain / strong wind: 雨很大, 风很大",
        "了 announces a change: 下雨了！ = it's started raining",
      ],
      vocab: [
        {
          hanzi: "下雨",
          pinyin: "xià yǔ",
          english: "to rain",
          pos: "verb + noun",
          example: { hanzi: "今天下雨。", pinyin: "Jīntiān xià yǔ.", english: "It's raining today." },
        },
        { hanzi: "下雪", pinyin: "xià xuě", english: "to snow", pos: "verb + noun" },
        { hanzi: "刮风", pinyin: "guā fēng", english: "to be windy", pos: "verb + noun" },
        { hanzi: "雨", pinyin: "yǔ", english: "rain", pos: "noun" },
        { hanzi: "雪", pinyin: "xuě", english: "snow", pos: "noun" },
        { hanzi: "风", pinyin: "fēng", english: "wind", pos: "noun" },
        {
          hanzi: "大",
          pinyin: "dà",
          english: "big; (of rain/wind) heavy, strong",
          pos: "adjective",
          example: { hanzi: "雨很大。", pinyin: "Yǔ hěn dà.", english: "The rain is heavy." },
        },
      ],
      patterns: [
        {
          pattern: "今天/明天 + weather verb",
          example: { hanzi: "今天刮风。", pinyin: "Jīntiān guā fēng.", english: "It's windy today." },
          note: "The time word goes first; no 是, no 很.",
        },
        {
          pattern: "Weather verb + 了 (new situation)",
          example: { hanzi: "下雪了！", pinyin: "Xià xuě le!", english: "It's started snowing!" },
          note: "了 flags a change — perfect for looking out of the window in surprise.",
        },
        {
          pattern: "Noun + 很大 (intensity for events)",
          example: { hanzi: "风很大。", pinyin: "Fēng hěn dà.", english: "The wind is strong." },
          note: "Boost the noun, never the verb: 雨很大 ✓, 很下雨 ✗.",
        },
      ],
    },
    {
      heading: "Hot, cold and just right: temperature and feel",
      discovery: {
        problem:
          "Four temperature words: {{冷|lěng|cold}}, {{热|rè|hot}}, {{暖和|nuǎnhuo|(pleasantly) warm}}, {{凉快|liángkuai|(pleasantly) cool}}. Two are complaints, two are compliments. A Beijinger sighs happily in spring: 今天很暖和！ A Singaporean sighs happily under a ceiling fan: 真凉快！ Can you work out the pattern — which pair carries the built-in smile?",
        idea:
          "暖和 and 凉快 are the *comfortable* pair: warm-in-a-nice-way and cool-in-a-nice-way. 冷 and 热 are the extremes you grumble about. Chinese bakes the feeling into the word — so choosing between 凉快 and 冷 tells your listener whether you're enjoying the temperature or suffering it.",
      },
      body:
        "Temperature words are adjectives, so they link straight to the subject — no 是, usually with an intensity word in front. Meet the intensity ladder:\n- {{有点儿|yǒudiǎnr|a bit (grumbling)}} — {{今天有点儿冷。|Jīntiān yǒudiǎnr lěng.|It's a bit cold today.}}\n- {{很|hěn|very (neutral default)}} — {{今天很热。|Jīntiān hěn rè.|It's (very) hot today.}}\n- {{非常|fēicháng|extremely}} — {{新加坡非常热。|Xīnjiāpō fēicháng rè.|Singapore is extremely hot.}}\n- {{太…了|tài…le|too…!}} — {{太热了！|Tài rè le!|It's too hot!}}\n\n有点儿 has a built-in frown — use it for mild complaints, not compliments.\n\nFor exact temperatures use {{度|dù|degree(s)}} after the number: {{今天三十二度。|Jīntiān sānshí'èr dù.|It's 32 degrees today.}} A very Singapore sentence! No verb needed — just time + number + 度.",
      whyItWorks:
        "Why does everyone say 很热 rather than plain 热? A bare adjective in Chinese hints at a comparison: 今天热 sounds like 'today (as opposed to yesterday) is the hot one'. Adding 很 switches that contrast off — here 很 is glue, and its 'very' meaning is faint. So 我很好 doesn't boast 'I'm VERY good'; it's just the natural, complete way to say 'I'm fine'. The same glue holds 今天很冷 together.",
      strategies: ["Pick the word with the right feeling: 凉快 smiles, 冷 shivers", "Default to 很 with adjectives — bare adjectives imply contrast"],
      keyPoints: [
        "冷/热 = extremes; 暖和/凉快 = pleasant warm/cool",
        "Intensity ladder: 有点儿 < 很 < 非常 < 太…了",
        "有点儿 is for complaints: 有点儿冷 ✓, 有点儿凉快 ✗",
        "Temperatures: number + 度 — 今天三十二度",
      ],
      vocab: [
        { hanzi: "冷", pinyin: "lěng", english: "cold", pos: "adjective" },
        { hanzi: "热", pinyin: "rè", english: "hot", pos: "adjective" },
        { hanzi: "暖和", pinyin: "nuǎnhuo", english: "(pleasantly) warm", pos: "adjective" },
        { hanzi: "凉快", pinyin: "liángkuai", english: "(pleasantly) cool", pos: "adjective" },
        {
          hanzi: "度",
          pinyin: "dù",
          english: "degree(s)",
          pos: "measure word",
          example: { hanzi: "今天三十二度。", pinyin: "Jīntiān sānshí'èr dù.", english: "It's 32 degrees today." },
        },
        { hanzi: "有点儿", pinyin: "yǒudiǎnr", english: "a bit (negative nuance)", pos: "adverb" },
        { hanzi: "非常", pinyin: "fēicháng", english: "extremely", pos: "adverb" },
        { hanzi: "太…了", pinyin: "tài…le", english: "too…!", pos: "adverb pattern" },
      ],
      patterns: [
        {
          pattern: "Subject + 很/非常/有点儿 + adjective",
          example: { hanzi: "今天有点儿冷。", pinyin: "Jīntiān yǒudiǎnr lěng.", english: "It's a bit cold today." },
          note: "Adjectives never take 是; they take an intensity word instead.",
        },
        {
          pattern: "Time + number + 度",
          example: { hanzi: "明天二十九度。", pinyin: "Míngtiān èrshíjiǔ dù.", english: "It'll be 29 degrees tomorrow." },
          note: "No verb needed — degrees work like ages (我十三岁).",
        },
      ],
    },
    {
      heading: "Four seasons — and Singapore's missing winter",
      discovery: {
        problem:
          "Your Beijing penpal asks: {{你们的冬天冷吗？|Nǐmen de dōngtiān lěng ma?|Is your winter cold?}} You look out at 32-degree sunshine over the MRT station… There's a problem with the question itself. What is it, and how do you answer honestly in Chinese?",
        idea:
          "Singapore doesn't HAVE a winter to be cold! {{新加坡没有冬天，一年都是夏天！|Xīnjiāpō méiyǒu dōngtiān, yì nián dōu shì xiàtiān!|Singapore has no winter — it's summer all year round!}} {{没有|méiyǒu|to not have}} denies the season exists, and {{都|dōu|all}} sweeps up the whole year. Two little words demolish the question politely.",
      },
      body:
        "The four {{季节|jìjié|seasons}} all end in 天, like a matching set:\n- {{春天|chūntiān|spring}} — warm, flowers\n- {{夏天|xiàtiān|summer}} — hot\n- {{秋天|qiūtiān|autumn}} — cool, leaves fall\n- {{冬天|dōngtiān|winter}} — cold, maybe snow\n\nBeijing has all four, each with its own character. Singapore, sitting almost on the equator, effectively has one: {{新加坡一年都很热。|Xīnjiāpō yì nián dōu hěn rè.|Singapore is hot all year round.}}\n\nTo crown a champion, use {{最|zuì|the most}} before the adjective: {{冬天最冷。|Dōngtiān zuì lěng.|Winter is the coldest.}} {{夏天最热。|Xiàtiān zuì rè.|Summer is the hottest.}} 最 works with any adjective — it's the superlative switch.",
      whyItWorks:
        "Why 一年**都**是夏天 and not just 一年是夏天? 都 means 'in every case' and points backwards at 一年, spreading the statement across all twelve months. Without 都 the sentence feels incomplete, like 'the year is summer'. With it: 'the whole year, in every part, is summer'. 都 is Chinese's little totality-stamp — you met it in 我们都是学生 ('we are ALL students'), and it works identically here.",
      strategies: ["Learn vocabulary in matching sets — the seasons all end in 天", "都 points backwards: find what it totals up"],
      keyPoints: [
        "春天, 夏天, 秋天, 冬天 — all end in 天",
        "新加坡没有冬天 — 没有 denies something exists",
        "一年都… — 都 spreads a statement over the whole year",
        "最 + adjective = superlative: 冬天最冷",
      ],
      vocab: [
        { hanzi: "季节", pinyin: "jìjié", english: "season", pos: "noun" },
        { hanzi: "春天", pinyin: "chūntiān", english: "spring", pos: "noun" },
        { hanzi: "夏天", pinyin: "xiàtiān", english: "summer", pos: "noun" },
        { hanzi: "秋天", pinyin: "qiūtiān", english: "autumn", pos: "noun" },
        { hanzi: "冬天", pinyin: "dōngtiān", english: "winter", pos: "noun" },
        {
          hanzi: "最",
          pinyin: "zuì",
          english: "the most (superlative)",
          pos: "adverb",
          example: { hanzi: "冬天最冷。", pinyin: "Dōngtiān zuì lěng.", english: "Winter is the coldest." },
        },
        { hanzi: "都", pinyin: "dōu", english: "all, in every case", pos: "adverb" },
        { hanzi: "没有", pinyin: "méiyǒu", english: "to not have", pos: "verb" },
      ],
      patterns: [
        {
          pattern: "Place + 没有 + season",
          example: { hanzi: "新加坡没有冬天。", pinyin: "Xīnjiāpō méiyǒu dōngtiān.", english: "Singapore has no winter." },
        },
        {
          pattern: "Subject + 最 + adjective",
          example: { hanzi: "夏天最热。", pinyin: "Xiàtiān zuì rè.", english: "Summer is the hottest." },
          note: "最 replaces 很 — never stack them (最很热 ✗).",
        },
      ],
    },
    {
      heading: "Comparing cities and reading the forecast",
      discovery: {
        problem:
          "Decode this sentence piece by piece: {{北京比新加坡冷。|Běijīng bǐ Xīnjiāpō lěng.|}} — 北京 + {{比|bǐ|compared to}} + 新加坡 + 冷. Literally 'Beijing COMPARE Singapore cold'. So which city is the cold one? And here's the trap: would you say 北京比新加坡很冷?",
        idea:
          "The word BEFORE 比 wins the adjective: 北京比新加坡冷 = 'Beijing is colder than Singapore'. And no — 很 is banned in 比 sentences! 比 already measures the difference, so 很 has no job to do: 北京比新加坡冷 ✓, 北京比新加坡很冷 ✗.",
      },
      body:
        "**Comparing:** A 比 B + adjective means 'A is more-adjective than B':\n{{新加坡比伦敦热。|Xīnjiāpō bǐ Lúndūn rè.|Singapore is hotter than London.}}\n\nTo compare the other way, softly, use {{没有…那么…|méiyǒu…nàme…|not as … as}}: {{上海没有北京那么冷。|Shànghǎi méiyǒu Běijīng nàme lěng.|Shanghai is not as cold as Beijing.}}\n\n**Forecasting:** for future weather, use {{会|huì|will (likely to)}}: {{明天会下雨吗？|Míngtiān huì xià yǔ ma?|Will it rain tomorrow?}} Answer with the verb itself: {{会。|Huì.|Yes (it will).}} or {{不会。|Bú huì.|No (it won't).}}\n\n**Planning:** {{要|yào|to need to / be going to}} covers what to do about it: {{你要带雨伞。|Nǐ yào dài yǔsǎn.|You need to take an umbrella.}} {{我要穿毛衣。|Wǒ yào chuān máoyī.|I'm going to wear a jumper.}} Note the verb split: {{穿|chuān|to wear}} for clothes, {{带|dài|to bring/take}} for things you carry.\n\n**The forecast mini-genre:** a {{天气预报|tiānqì yùbào|weather forecast}} strings short phrases together, no frills: {{今天晴天，二十八度。|Jīntiān qíngtiān, èrshíbā dù.|Today: sunny, 28 degrees.}} Read them left to right: sky, then temperature, then any warnings.",
      whyItWorks:
        "Why is 很 banned after 比? 很 sets an absolute level ('very cold on the world scale'); 比 sets a relative one ('colder than that city'). One sentence can't point at both scales at once, so 比 kicks 很 out. If you want to size the gap, Chinese adds it AFTER the adjective instead: 北京比新加坡冷得多 ('colder by a lot') — the gap-word takes the seat 很 wanted.",
      strategies: ["The word before 比 wins the adjective", "In 比 sentences, delete 很 on sight", "Answer 会…吗 questions with 会 or 不会 — echo the verb"],
      keyPoints: [
        "A 比 B + adjective: A is more-adj than B",
        "No 很 in 比 sentences: 北京比新加坡很冷 ✗",
        "没有…那么… = not as … as (gentler comparison)",
        "明天会下雨吗？ → 会 / 不会",
        "穿 for clothes (穿毛衣), 带 for carried items (带雨伞)",
      ],
      vocab: [
        {
          hanzi: "比",
          pinyin: "bǐ",
          english: "compared to; than",
          pos: "preposition",
          example: { hanzi: "北京比新加坡冷。", pinyin: "Běijīng bǐ Xīnjiāpō lěng.", english: "Beijing is colder than Singapore." },
        },
        { hanzi: "会", pinyin: "huì", english: "will (likely to happen)", pos: "auxiliary verb" },
        { hanzi: "要", pinyin: "yào", english: "to need to; be going to", pos: "auxiliary verb" },
        { hanzi: "带", pinyin: "dài", english: "to bring, to take along", pos: "verb" },
        { hanzi: "雨伞", pinyin: "yǔsǎn", english: "umbrella", pos: "noun" },
        { hanzi: "穿", pinyin: "chuān", english: "to wear", pos: "verb" },
        { hanzi: "毛衣", pinyin: "máoyī", english: "jumper, sweater", pos: "noun" },
        { hanzi: "天气预报", pinyin: "tiānqì yùbào", english: "weather forecast", pos: "noun" },
        { hanzi: "明天", pinyin: "míngtiān", english: "tomorrow", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "A + 比 + B + adjective",
          example: { hanzi: "夏天比春天热。", pinyin: "Xiàtiān bǐ chūntiān rè.", english: "Summer is hotter than spring." },
          note: "No 很 before the adjective — 比 already measures the difference.",
        },
        {
          pattern: "A + 没有 + B + 那么 + adjective",
          example: { hanzi: "新加坡没有北京那么冷。", pinyin: "Xīnjiāpō méiyǒu Běijīng nàme lěng.", english: "Singapore is not as cold as Beijing." },
        },
        {
          pattern: "明天会 + verb + 吗？",
          example: { hanzi: "明天会下雪吗？", pinyin: "Míngtiān huì xià xuě ma?", english: "Will it snow tomorrow?" },
          note: "Reply by echoing the verb: 会 / 不会.",
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "天气", pinyin: "tiānqì", english: "weather" },
      { hanzi: "怎么样", pinyin: "zěnmeyàng", english: "how is it? / what's it like?" },
      { hanzi: "晴天", pinyin: "qíngtiān", english: "sunny day, clear sky" },
      { hanzi: "阴天", pinyin: "yīntiān", english: "overcast day" },
      { hanzi: "多云", pinyin: "duōyún", english: "cloudy" },
      { hanzi: "下雨", pinyin: "xià yǔ", english: "to rain" },
      { hanzi: "下雪", pinyin: "xià xuě", english: "to snow" },
      { hanzi: "刮风", pinyin: "guā fēng", english: "to be windy" },
      { hanzi: "雨", pinyin: "yǔ", english: "rain" },
      { hanzi: "雪", pinyin: "xuě", english: "snow" },
      { hanzi: "风", pinyin: "fēng", english: "wind" },
      { hanzi: "冷", pinyin: "lěng", english: "cold" },
      { hanzi: "热", pinyin: "rè", english: "hot" },
      { hanzi: "暖和", pinyin: "nuǎnhuo", english: "(pleasantly) warm" },
      { hanzi: "凉快", pinyin: "liángkuai", english: "(pleasantly) cool" },
      { hanzi: "度", pinyin: "dù", english: "degree(s)" },
      { hanzi: "有点儿", pinyin: "yǒudiǎnr", english: "a bit (grumbling)" },
      { hanzi: "非常", pinyin: "fēicháng", english: "extremely" },
      { hanzi: "太…了", pinyin: "tài…le", english: "too…!" },
      { hanzi: "季节", pinyin: "jìjié", english: "season" },
      { hanzi: "春天", pinyin: "chūntiān", english: "spring" },
      { hanzi: "夏天", pinyin: "xiàtiān", english: "summer" },
      { hanzi: "秋天", pinyin: "qiūtiān", english: "autumn" },
      { hanzi: "冬天", pinyin: "dōngtiān", english: "winter" },
      { hanzi: "最", pinyin: "zuì", english: "the most (superlative)" },
      { hanzi: "都", pinyin: "dōu", english: "all, in every case" },
      { hanzi: "比", pinyin: "bǐ", english: "compared to; than" },
      { hanzi: "会", pinyin: "huì", english: "will (likely to)" },
      { hanzi: "要", pinyin: "yào", english: "to need to; be going to" },
      { hanzi: "带", pinyin: "dài", english: "to bring, take along" },
      { hanzi: "雨伞", pinyin: "yǔsǎn", english: "umbrella" },
      { hanzi: "穿", pinyin: "chuān", english: "to wear" },
      { hanzi: "毛衣", pinyin: "máoyī", english: "jumper, sweater" },
      { hanzi: "天气预报", pinyin: "tiānqì yùbào", english: "weather forecast" },
    ],
    patterns: [
      {
        pattern: "今天天气怎么样？",
        example: { hanzi: "今天天气怎么样？", pinyin: "Jīntiān tiānqì zěnmeyàng?", english: "What's the weather like today?" },
      },
      {
        pattern: "Time + weather verb",
        example: { hanzi: "明天下雨。", pinyin: "Míngtiān xià yǔ.", english: "It'll rain tomorrow." },
      },
      {
        pattern: "Subject + 很/非常/有点儿 + adjective",
        example: { hanzi: "今天有点儿冷。", pinyin: "Jīntiān yǒudiǎnr lěng.", english: "It's a bit cold today." },
      },
      {
        pattern: "A + 比 + B + adjective",
        example: { hanzi: "北京比新加坡冷。", pinyin: "Běijīng bǐ Xīnjiāpō lěng.", english: "Beijing is colder than Singapore." },
      },
      {
        pattern: "A + 没有 + B + 那么 + adjective",
        example: { hanzi: "上海没有北京那么冷。", pinyin: "Shànghǎi méiyǒu Běijīng nàme lěng.", english: "Shanghai is not as cold as Beijing." },
      },
      {
        pattern: "明天会 + verb + 吗？",
        example: { hanzi: "明天会下雨吗？", pinyin: "Míngtiān huì xià yǔ ma?", english: "Will it rain tomorrow?" },
      },
    ],
    mnemonics: [
      { hanzi: "雪", tip: "雨 (rain) sits on top — snow is just rain in its winter coat. The broom-stroke below sweeps it off the path." },
      { hanzi: "热", tip: "The four dots at the bottom are the fire radical 灬 — flames under a pot make things HOT." },
      { hanzi: "冷", tip: "The two-dot radical 冫 on the left is the ICE radical — two icicles. Compare 冰 (ice) itself." },
      { hanzi: "晴", tip: "日 (sun) on the left + 青 (blue-green) — the sun in a blue sky = a clear, sunny day." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "wx-quiz-mcq-q01",
        question: "What does {{今天天气怎么样？|Jīntiān tiānqì zěnmeyàng?}} ask?",
        options: [
          "What's the weather like today?",
          "Is it raining today?",
          "What season is it now?",
          "What's the date today?",
        ],
        answerIndex: 0,
        explanation:
          "{{怎么样|zěnmeyàng}} is the open question word 'what's it like?', so the sentence asks for a description of today's weather. 'Is it raining?' would need {{吗|ma}} after 下雨.",
        guideRef: "Asking about the weather: 天气怎么样？",
        difficulty: "warmup",
      },
      {
        id: "wx-quiz-mcq-q02",
        question: "What does {{下雪|xià xuě}} mean?",
        options: ["It's raining", "It's snowing", "It's windy", "It's sunny"],
        answerIndex: 1,
        explanation:
          "{{雪|xuě}} is snow and {{下|xià}} means 'to fall' — snow falls. Rain is {{下雨|xià yǔ}}, wind is {{刮风|guā fēng}}, sunny is {{晴天|qíngtiān}}.",
        guideRef: "Rain falls, wind scrapes: the weather verbs",
        difficulty: "warmup",
      },
      {
        id: "wx-quiz-mcq-q03",
        question: "Choose the correct way to say 'It's raining today.'",
        options: [
          "{{今天很下雨。|Jīntiān hěn xià yǔ.}}",
          "{{今天是下雨。|Jīntiān shì xià yǔ.}}",
          "{{今天下雨。|Jīntiān xià yǔ.}}",
          "{{下雨很大今天。|Xià yǔ hěn dà jīntiān.}}",
        ],
        answerIndex: 2,
        explanation:
          "下雨 is a verb (an event), so it takes no 很 and no 是 — time word + verb is the whole sentence. 很下雨 breaks the rule that 很 only boosts adjectives; 是下雨 adds a verb where one already exists.",
        guideRef: "Rain falls, wind scrapes: the weather verbs",
        difficulty: "core",
        hints: [
          "Is 下雨 a way the sky IS, or a thing the sky DOES?",
          "Events never take 很 or 是 — what's left when you strip both out?",
        ],
        strategy: "Ask 'is it a thing the sky DOES or a way the sky IS?'",
      },
      {
        id: "wx-quiz-mcq-q04",
        question:
          "The aircon at school is fierce and you want to grumble mildly: 'It's a bit cold.' Which fits best?",
        options: [
          "{{有点儿冷。|Yǒudiǎnr lěng.}}",
          "{{非常冷。|Fēicháng lěng.}}",
          "{{太冷了！|Tài lěng le!}}",
          "{{最冷。|Zuì lěng.}}",
        ],
        answerIndex: 0,
        explanation:
          "{{有点儿|yǒudiǎnr}} means 'a bit' with a built-in frown — perfect for a mild complaint. 非常 is 'extremely', 太…了 is a full-volume 'TOO cold!', and 最 is the superlative 'the coldest'.",
        guideRef: "Hot, cold and just right: temperature and feel",
        difficulty: "core",
        hints: ["You want the gentlest rung of the intensity ladder.", "Which word carries a built-in complaint?"],
      },
      {
        id: "wx-quiz-mcq-q05",
        question: "{{今天三十二度。|Jīntiān sānshí'èr dù.}} — what's the temperature?",
        options: ["23 degrees", "32 degrees", "12 degrees", "3.2 degrees"],
        answerIndex: 1,
        explanation:
          "三十二 builds as 三(3) + 十(ten) + 二(2) = 32. Reading it backwards as 23 (二十三) is the classic slip — the digit BEFORE 十 multiplies it, the digit AFTER adds.",
        guideRef: "Hot, cold and just right: temperature and feel",
        difficulty: "core",
        hints: ["三十 = three tens.", "Then add whatever follows 十."],
      },
      {
        id: "wx-quiz-mcq-q06",
        question: "Which season is {{秋天|qiūtiān}}?",
        options: ["spring", "summer", "autumn", "winter"],
        answerIndex: 2,
        explanation:
          "秋天 is autumn — the pleasantly cool ({{凉快|liángkuai}}) season. Spring is 春天, summer 夏天, winter 冬天.",
        guideRef: "Four seasons — and Singapore's missing winter",
        difficulty: "warmup",
      },
      {
        id: "wx-quiz-mcq-q07",
        question: "What does {{北京比新加坡冷。|Běijīng bǐ Xīnjiāpō lěng.}} mean?",
        options: [
          "Singapore is colder than Beijing",
          "Beijing is colder than Singapore",
          "Beijing and Singapore are both cold",
          "Beijing is not as cold as Singapore",
        ],
        answerIndex: 1,
        explanation:
          "In A 比 B + adjective, the word BEFORE 比 wins the adjective: Beijing (before 比) is the colder one. Reading it the other way round is the number-one 比 error.",
        guideRef: "Comparing cities and reading the forecast",
        difficulty: "core",
        hints: ["比 means 'compared to'. Who is being measured against whom?", "The city before 比 is the subject — the adjective describes it."],
        strategy: "The word before 比 wins the adjective",
      },
      {
        id: "wx-quiz-mcq-q08",
        question: "Your friend asks: {{明天会下雨吗？|Míngtiān huì xià yǔ ma?}} What are they asking — and what's a natural 'no'?",
        options: [
          "'Did it rain yesterday?' — answer 没有",
          "'Is it raining now?' — answer 不是",
          "'Will it rain tomorrow?' — answer 不会",
          "'Does it rain often?' — answer 不常",
        ],
        answerIndex: 2,
        explanation:
          "{{会|huì}} marks a likely future event, and 明天 is tomorrow, so it asks 'Will it rain tomorrow?'. You answer a 会…吗 question by echoing the verb: {{会|huì|yes, it will}} or {{不会|bú huì|no, it won't}}.",
        guideRef: "Comparing cities and reading the forecast",
        difficulty: "core",
        hints: ["明天 gives you the time frame.", "Chinese answers yes/no questions by echoing the key verb."],
        strategy: "Answer 会…吗 questions with 会 or 不会 — echo the verb",
      },
      {
        id: "wx-quiz-mcq-q09",
        question:
          "Challenge: {{哈尔滨比北京冷，北京比上海冷。|Hā'ěrbīn bǐ Běijīng lěng, Běijīng bǐ Shànghǎi lěng.}} Which city is the coldest ({{最冷|zuì lěng}})?",
        options: ["哈尔滨 (Hā'ěrbīn)", "北京 (Běijīng)", "上海 (Shànghǎi)", "You can't tell from the sentence"],
        answerIndex: 0,
        explanation:
          "Chain the comparisons: Harbin < colder than > Beijing, and Beijing < colder than > Shanghai. So Harbin is colder than Beijing, which is already colder than Shanghai — Harbin sits at the cold end: 哈尔滨最冷. Two 比 sentences CAN be chained, just like a < b < c in maths.",
        guideRef: "Comparing cities and reading the forecast",
        difficulty: "challenge",
        hints: [
          "Take one clause at a time: who wins the adjective in 哈尔滨比北京冷?",
          "Line the three cities up on a thermometer, coldest to warmest.",
          "Harbin beats Beijing at being cold; Beijing beats Shanghai. Who's at the end of the chain?",
        ],
        strategy: "Chain comparisons like inequalities in maths",
      },
      {
        id: "wx-quiz-mcq-q10",
        question:
          "Challenge: the forecast says {{明天多云，二十九度，不会下雨。|Míngtiān duōyún, èrshíjiǔ dù, bú huì xià yǔ.}} Which statement is true?",
        options: [
          "Tomorrow: sunny, 29 degrees, rain likely",
          "Tomorrow: cloudy, 29 degrees, no rain expected",
          "Tomorrow: overcast, 9 degrees, snow expected",
          "Today: cloudy, 29 degrees, raining now",
        ],
        answerIndex: 1,
        explanation:
          "Read it in chunks, left to right: 明天 (tomorrow) + 多云 (cloudy) + 二十九度 (29 degrees) + 不会下雨 (won't rain). 不会 negates the future event — no umbrella needed.",
        guideRef: "Comparing cities and reading the forecast",
        difficulty: "challenge",
        hints: [
          "Forecasts read left to right: time, sky, temperature, warnings.",
          "What does 不会 do to 下雨?",
        ],
        strategy: "Read forecasts in chunks: sky, then temperature, then warnings",
      },
    ],
    qa: [
      {
        id: "wx-quiz-qa-q01",
        question:
          "Write a one-line Chinese weather report for today: sunny, 28 degrees. (Characters or pinyin.)",
        modelAnswer: "{{今天晴天，二十八度。|Jīntiān qíngtiān, èrshíbā dù.|Today: sunny, 28 degrees.}}",
        markScheme: [
          "Time word {{今天|jīntiān}} first",
          "Sky word {{晴天|qíngtiān}} for sunny",
          "Temperature as {{二十八度|èrshíbā dù|28 degrees}} — number then 度",
          "No 是 and no 很 inserted",
        ],
        commonError: "今天是晴天 isn't wrong, but the crisp forecast style drops 是: 今天晴天，二十八度。",
        guideRef: "Comparing cities and reading the forecast",
        difficulty: "warmup",
        hints: ["Forecast recipe: time + sky + number 度."],
      },
      {
        id: "wx-quiz-qa-q02",
        question:
          "A classmate writes {{今天很下雨。|Jīntiān hěn xià yǔ.}} ✗ Explain in English WHY this is wrong, then write two correct ways to express the idea.",
        modelAnswer:
          "下雨 ('fall rain') is a verb + noun — an event, not an adjective — and 很 can only intensify adjectives like 冷 or 热, never verbs. Correct: {{今天下雨。|Jīntiān xià yǔ.|It's raining today.}} To say the rain is heavy, boost the noun instead: {{雨很大。|Yǔ hěn dà.|The rain is heavy.}}",
        markScheme: [
          "Identifies 下雨 as a verb/event, not an adjective",
          "States 很 only attaches to adjectives",
          "Correct sentence 今天下雨",
          "Heavy-rain version 雨很大 (or 下大雨)",
        ],
        commonError: "Explaining it as 'word order' — the order isn't the issue; the word CLASS of 下雨 is.",
        guideRef: "Rain falls, wind scrapes: the weather verbs",
        difficulty: "core",
        hints: [
          "What kind of word is 下雨 — a doing word or a describing word?",
          "很 has a strict diet: adjectives only.",
          "For intensity, which noun inside 下雨 can 很大 describe?",
        ],
        strategy: "Ask 'is it a thing the sky DOES or a way the sky IS?'",
      },
      {
        id: "wx-quiz-qa-q03",
        question:
          "Your penpal asks: {{明天会下雨吗？|Míngtiān huì xià yǔ ma?}} Reply in Chinese: yes it will rain, and tell them to take an umbrella.",
        modelAnswer:
          "{{会，明天会下雨。你要带雨伞。|Huì, míngtiān huì xià yǔ. Nǐ yào dài yǔsǎn.|Yes — it'll rain tomorrow. You need to take an umbrella.}}",
        markScheme: [
          "Echo-answer {{会|huì}} (not 是/对 alone)",
          "Full statement 明天会下雨",
          "Advice with {{要|yào}}: 你要带雨伞",
          "{{带|dài}} (not 穿) used with 雨伞",
        ],
        commonError: "你要穿雨伞 ✗ — 穿 is for clothes you wear; an umbrella is carried, so it takes 带.",
        guideRef: "Comparing cities and reading the forecast",
        difficulty: "core",
        hints: [
          "Answer a 会…吗 question by echoing which word?",
          "Advice pattern: 你要 + verb + thing.",
        ],
        solutions: [
          {
            label: "Echo the question (recommended)",
            steps: [
              "Take 明天会下雨吗？ and strip the 吗: 明天会下雨 is your ready-made answer.",
              "Front it with the echo 会 for a natural 'yes'.",
              "Add the advice: 你要 + 带 + 雨伞 — umbrellas are carried (带), not worn (穿).",
            ],
          },
          {
            label: "Build from patterns",
            steps: [
              "Pattern 1: time + 会 + weather verb → 明天会下雨.",
              "Pattern 2: person + 要 + verb + object → 你要带雨伞.",
              "Join them: 会，明天会下雨。你要带雨伞。",
            ],
          },
        ],
      },
      {
        id: "wx-quiz-qa-q04",
        question:
          "Translate into English: {{北京的冬天很冷，常常下雪。|Běijīng de dōngtiān hěn lěng, chángcháng xià xuě.}} ({{常常|chángcháng}} = often)",
        modelAnswer:
          "Beijing's winter is very cold, and it often snows.",
        markScheme: [
          "北京的冬天 = Beijing's winter (的 shows possession)",
          "很冷 = (very) cold",
          "常常 = often",
          "下雪 = it snows (verb, not 'snowy')",
        ],
        commonError: "Translating 下雪 as 'falls snow' word-for-word — smooth English wants 'it snows' or 'it's snowy'.",
        guideRef: "Rain falls, wind scrapes: the weather verbs",
        difficulty: "core",
        hints: ["的 links owner to thing: whose winter?", "常常 sits before the verb, like English 'often'."],
      },
      {
        id: "wx-quiz-qa-q05",
        question:
          "Challenge: {{北京比上海冷，上海比广州冷。|Běijīng bǐ Shànghǎi lěng, Shànghǎi bǐ Guǎngzhōu lěng.}} Which city is coldest? Answer with one Chinese sentence using {{最|zuì}}.",
        modelAnswer: "{{北京最冷。|Běijīng zuì lěng.|Beijing is the coldest.}}",
        markScheme: [
          "Identifies Beijing as coldest",
          "Uses 最 directly before 冷",
          "No 很 or 比 mixed into the 最 sentence",
        ],
        commonError: "北京最很冷 ✗ — 最 replaces 很; the superlative slot only fits one word.",
        guideRef: "Four seasons — and Singapore's missing winter",
        difficulty: "challenge",
        hints: [
          "Chain the two clauses: who beats whom at being cold?",
          "Beijing > Shanghai > Guangzhou on the cold scale.",
          "Superlative pattern: subject + 最 + adjective.",
        ],
        strategy: "Chain comparisons like inequalities in maths",
        solutions: [
          {
            label: "Thermometer line",
            steps: [
              "Draw a cold–hot line. Clause 1 puts 北京 colder than 上海.",
              "Clause 2 puts 上海 colder than 广州, so the order is 北京 – 上海 – 广州, coldest first.",
              "The city at the cold end takes 最: 北京最冷。",
            ],
          },
          {
            label: "Inequality chaining",
            steps: [
              "Rewrite each 比 sentence as an inequality: 北京 < 上海 < 广州 in temperature.",
              "The smallest temperature = the coldest city = 北京.",
              "State it with the superlative switch 最: 北京最冷。",
            ],
          },
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "wx-mcq-a",
        title: "Paper A — What's the weather like?",
        description: "Weather talk, weather verbs, temperature and feel.",
        questions: [
          {
            id: "wx-mcq-a-q01",
            question: "What does {{天气|tiānqì}} mean?",
            options: ["weather", "sky", "sun", "season"],
            answerIndex: 0,
            explanation: "天气 (literally 'sky-air') means weather. Season is {{季节|jìjié}}.",
            guideRef: "Asking about the weather: 天气怎么样？",
            difficulty: "warmup",
          },
          {
            id: "wx-mcq-a-q02",
            question: "Blue sky, blazing sun over the Padang. Which word describes the day?",
            options: ["{{阴天|yīntiān}}", "{{多云|duōyún}}", "{{晴天|qíngtiān}}", "{{下雪|xià xuě}}"],
            answerIndex: 2,
            explanation:
              "晴天 is a clear, sunny day — the character 晴 carries the sun radical 日. 阴天 is overcast, 多云 is cloudy, and 下雪 (snowing) would be big news in Singapore.",
            guideRef: "Asking about the weather: 天气怎么样？",
            difficulty: "warmup",
          },
          {
            id: "wx-mcq-a-q03",
            question: "What does {{刮风|guā fēng}} mean?",
            options: ["It's windy", "It's raining", "It's sunny", "It's snowing"],
            answerIndex: 0,
            explanation:
              "刮 means 'to scrape' and 风 is wind — Chinese pictures the wind scraping past. It's a verb phrase, so no 很 in front, ever.",
            guideRef: "Rain falls, wind scrapes: the weather verbs",
            difficulty: "warmup",
          },
          {
            id: "wx-mcq-a-q04",
            question: "Which word is the opposite of {{冷|lěng}}?",
            options: ["{{暖和|nuǎnhuo}}", "{{凉快|liángkuai}}", "{{热|rè}}", "{{雪|xuě}}"],
            answerIndex: 2,
            explanation:
              "冷 and 热 are the two extremes: cold vs hot. 暖和 and 凉快 are the comfortable middle pair — pleasantly warm and pleasantly cool.",
            guideRef: "Hot, cold and just right: temperature and feel",
            difficulty: "core",
          },
          {
            id: "wx-mcq-a-q05",
            question:
              "Complete the sentence: 今天___，别忘了带雨伞！ (Jīntiān ___, bié wàng le dài yǔsǎn! — Today ___, don't forget to take an umbrella!)",
            options: ["{{晴天|qíngtiān}}", "{{刮风|guā fēng}}", "{{下雨|xià yǔ}}", "{{凉快|liángkuai}}"],
            answerIndex: 2,
            explanation:
              "An umbrella ({{雨伞|yǔsǎn}}) is for rain — the character 雨 is hiding inside 雨伞! 下雨 is the only option that makes the advice sensible.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "core",
            hints: ["Look at the first character of 雨伞 — what weather is it built for?"],
          },
          {
            id: "wx-mcq-a-q06",
            question: "{{今天阴天。|Jīntiān yīntiān.}} What's the sky doing?",
            options: [
              "Completely grey and overcast",
              "Clear and sunny",
              "Snowing heavily",
              "Dark because it's night",
            ],
            answerIndex: 0,
            explanation:
              "阴天 is an overcast, grey-sky day — 阴 is the dark, shadowed half of yin-yang. Clear and sunny is 晴天.",
            guideRef: "Asking about the weather: 天气怎么样？",
            difficulty: "core",
          },
          {
            id: "wx-mcq-a-q07",
            question: "{{今天太热了！|Jīntiān tài rè le!}} What is the speaker doing?",
            options: [
              "Complaining that it's far too hot",
              "Saying it's a little warm",
              "Saying it will be hot tomorrow",
              "Asking whether it's hot",
            ],
            answerIndex: 0,
            explanation:
              "太…了 is the top rung of the intensity ladder — an exclamation that something has gone past comfortable: 'It's TOO hot!'. 'A little warm' would be 有点儿热.",
            guideRef: "Hot, cold and just right: temperature and feel",
            difficulty: "core",
          },
          {
            id: "wx-mcq-a-q08",
            question: "Which of these is an EVENT (a verb phrase), not a describing word?",
            options: ["{{冷|lěng}}", "{{下雪|xià xuě}}", "{{暖和|nuǎnhuo}}", "{{热|rè}}"],
            answerIndex: 1,
            explanation:
              "下雪 = 'snow falls' — a verb + noun event, which is why 很下雪 is impossible. 冷, 热 and 暖和 are all adjectives and happily take 很.",
            guideRef: "Rain falls, wind scrapes: the weather verbs",
            difficulty: "core",
            hints: ["Which one could you NOT put 很 in front of?"],
            strategy: "Ask 'is it a thing the sky DOES or a way the sky IS?'",
          },
          {
            id: "wx-mcq-a-q09",
            question: "{{今天二十八度，很暖和。|Jīntiān èrshíbā dù, hěn nuǎnhuo.}} What's the temperature?",
            options: ["8 degrees", "18 degrees", "28 degrees", "82 degrees"],
            answerIndex: 2,
            explanation:
              "二十八 = 二(2)×十(10) + 八(8) = 28. Reading 二十八 as 82 reverses the builder: 82 would be 八十二.",
            guideRef: "Hot, cold and just right: temperature and feel",
            difficulty: "core",
          },
          {
            id: "wx-mcq-a-q10",
            question: "Which is the correct way to ask about the weather?",
            options: [
              "{{今天天气怎么样？|Jīntiān tiānqì zěnmeyàng?}}",
              "{{今天天气什么？|Jīntiān tiānqì shénme?}}",
              "{{怎么样今天天气？|Zěnmeyàng jīntiān tiānqì?}}",
              "{{今天天气是吗？|Jīntiān tiānqì shì ma?}}",
            ],
            answerIndex: 0,
            explanation:
              "怎么样 asks 'what is it like?' and sits at the END, in the answer's seat. 什么 asks 'what thing?' (wrong meaning), and moving 怎么样 to the front imports English word order into Chinese.",
            guideRef: "Asking about the weather: 天气怎么样？",
            difficulty: "core",
            strategy: "Question words sit in the answer's seat",
          },
          {
            id: "wx-mcq-a-q11",
            question: "Challenge: exactly ONE of these sentences is wrong. Which?",
            options: [
              "{{今天刮风。|Jīntiān guā fēng.}}",
              "{{今天很刮风。|Jīntiān hěn guā fēng.}}",
              "{{今天风很大。|Jīntiān fēng hěn dà.}}",
              "{{今天有点儿冷。|Jīntiān yǒudiǎnr lěng.}}",
            ],
            answerIndex: 1,
            explanation:
              "刮风 is a verb phrase, and 很 refuses to attach to verbs: 很刮风 ✗. For a strong wind, describe the noun instead — 风很大 ✓, exactly what option three does.",
            guideRef: "Rain falls, wind scrapes: the weather verbs",
            difficulty: "challenge",
            hints: [
              "Check each sentence: does 很 ever sit in front of a VERB?",
              "刮风 is an event, like 下雨. What did the discovery say about 很下雨?",
            ],
            strategy: "In doubt, sort each word: adjective or verb?",
          },
          {
            id: "wx-mcq-a-q12",
            question:
              "Challenge: {{昨天下雨，今天多云，明天会晴天。|Zuótiān xià yǔ, jīntiān duōyún, míngtiān huì qíngtiān.}} What was the weather YESTERDAY?",
            options: ["Rainy", "Cloudy", "Sunny", "Windy"],
            answerIndex: 0,
            explanation:
              "Match the time words in order: {{昨天|zuótiān|yesterday}} pairs with 下雨 (rain), 今天 with 多云 (cloudy), 明天 with 会晴天 (will be sunny). The question asks about yesterday — rain.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "challenge",
            hints: [
              "Underline the three time words first.",
              "昨天 = yesterday. Which weather word sits right after it?",
            ],
            strategy: "Read forecasts in chunks: sky, then temperature, then warnings",
          },
        ],
      },
      {
        id: "wx-mcq-b",
        title: "Paper B — Seasons & comparisons",
        description: "The four seasons, Singapore vs the world, 比 and 最.",
        questions: [
          {
            id: "wx-mcq-b-q01",
            question: "Which season is {{春天|chūntiān}}?",
            options: ["spring", "summer", "autumn", "winter"],
            answerIndex: 0,
            explanation: "春天 is spring, the warm flower season. The set runs 春天, 夏天, 秋天, 冬天 — all ending in 天.",
            guideRef: "Four seasons — and Singapore's missing winter",
            difficulty: "warmup",
          },
          {
            id: "wx-mcq-b-q02",
            question: "What does {{季节|jìjié}} mean?",
            options: ["temperature", "festival", "season", "sky"],
            answerIndex: 2,
            explanation: "季节 means season — as in 新加坡只有一个季节 (Singapore only has one season!).",
            guideRef: "Four seasons — and Singapore's missing winter",
            difficulty: "warmup",
          },
          {
            id: "wx-mcq-b-q03",
            question: "Which season comes straight after {{夏天|xiàtiān}}?",
            options: ["{{春天|chūntiān}}", "{{秋天|qiūtiān}}", "{{冬天|dōngtiān}}", "another {{夏天|xiàtiān}}"],
            answerIndex: 1,
            explanation:
              "The cycle is 春天 → 夏天 → 秋天 → 冬天: autumn follows summer. (In Singapore, the joke answer 'another 夏天' is dangerously close to the truth.)",
            guideRef: "Four seasons — and Singapore's missing winter",
            difficulty: "warmup",
          },
          {
            id: "wx-mcq-b-q04",
            question: "What does {{新加坡没有冬天。|Xīnjiāpō méiyǒu dōngtiān.}} mean?",
            options: [
              "Singapore has no winter",
              "Singapore's winter is not cold",
              "Singapore doesn't like winter",
              "Singapore has four seasons",
            ],
            answerIndex: 0,
            explanation:
              "没有 here means 'does not have': the sentence denies that the season exists at all — which is exactly Singapore's situation on the equator.",
            guideRef: "Four seasons — and Singapore's missing winter",
            difficulty: "core",
          },
          {
            id: "wx-mcq-b-q05",
            question: "Choose the correct translation of 'Beijing is colder than Singapore.'",
            options: [
              "{{新加坡比北京冷。|Xīnjiāpō bǐ Běijīng lěng.}}",
              "{{北京比新加坡冷。|Běijīng bǐ Xīnjiāpō lěng.}}",
              "{{北京比新加坡很冷。|Běijīng bǐ Xīnjiāpō hěn lěng.}}",
              "{{北京冷比新加坡。|Běijīng lěng bǐ Xīnjiāpō.}}",
            ],
            answerIndex: 1,
            explanation:
              "Pattern: A 比 B + adjective, with A the colder one — so Beijing goes before 比. Option three smuggles in 很 (banned in 比 sentences); option four puts the adjective before 比 (English word order in disguise).",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "core",
            hints: ["Who should stand before 比?", "And remember: 比 sentences never take 很."],
            strategy: "The word before 比 wins the adjective",
          },
          {
            id: "wx-mcq-b-q06",
            question: "What does {{冬天最冷。|Dōngtiān zuì lěng.}} mean?",
            options: [
              "Winter is the coldest",
              "Winter is very cold",
              "Winter is colder than autumn",
              "Winter is not cold",
            ],
            answerIndex: 0,
            explanation:
              "最 is the superlative switch: 最冷 = 'the coldest', crowning winter champion of all the seasons. 'Very cold' would be 很冷; 'colder than autumn' would need 比秋天冷.",
            guideRef: "Four seasons — and Singapore's missing winter",
            difficulty: "core",
          },
          {
            id: "wx-mcq-b-q07",
            question: "What does {{新加坡一年都是夏天。|Xīnjiāpō yì nián dōu shì xiàtiān.}} mean?",
            options: [
              "Singapore's summer lasts one month",
              "In Singapore it's summer all year round",
              "Singapore has summer once a year",
              "Singapore's summer is the hottest",
            ],
            answerIndex: 1,
            explanation:
              "都 spreads the statement across the whole of 一年: every part of the year is summer. That's the classic description of Singapore's climate.",
            guideRef: "Four seasons — and Singapore's missing winter",
            difficulty: "core",
            hints: ["What does 都 total up here?"],
          },
          {
            id: "wx-mcq-b-q08",
            question: "What does {{上海没有北京那么冷。|Shànghǎi méiyǒu Běijīng nàme lěng.}} mean?",
            options: [
              "Shanghai is not as cold as Beijing",
              "Beijing is not as cold as Shanghai",
              "Shanghai and Beijing are equally cold",
              "Neither Shanghai nor Beijing is cold",
            ],
            answerIndex: 0,
            explanation:
              "A 没有 B 那么 + adjective = 'A is not as … as B'. The subject (Shanghai) falls short of Beijing's level of coldness — so Beijing is still the colder city.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "core",
            hints: ["没有…那么… measures A against B. Who fails to reach whose level?"],
          },
          {
            id: "wx-mcq-b-q09",
            question: "{{天气很冷的时候，你要穿什么？|Tiānqì hěn lěng de shíhou, nǐ yào chuān shénme?|When the weather is very cold, what should you wear?}}",
            options: ["{{毛衣|máoyī}}", "{{雨伞|yǔsǎn}}", "{{雨|yǔ}}", "{{晴天|qíngtiān}}"],
            answerIndex: 0,
            explanation:
              "毛衣 (jumper) is the only thing you can 穿 (wear). An umbrella is carried, not worn — it takes 带, never 穿.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "core",
            hints: ["穿 only works with clothes."],
          },
          {
            id: "wx-mcq-b-q10",
            question: "{{在北京，哪个季节最热？|Zài Běijīng, nǎge jìjié zuì rè?|In Beijing, which season is the hottest?}}",
            options: ["{{春天|chūntiān}}", "{{夏天|xiàtiān}}", "{{秋天|qiūtiān}}", "{{冬天|dōngtiān}}"],
            answerIndex: 1,
            explanation:
              "夏天 (summer) is the hottest season — 夏天最热. Note the question word 哪个 ('which') sits where the answer goes, as always.",
            guideRef: "Four seasons — and Singapore's missing winter",
            difficulty: "core",
          },
          {
            id: "wx-mcq-b-q11",
            question:
              "Challenge: {{广州比北京热，海南比广州热。|Guǎngzhōu bǐ Běijīng rè, Hǎinán bǐ Guǎngzhōu rè.}} Which place is the hottest?",
            options: ["北京 (Běijīng)", "广州 (Guǎngzhōu)", "海南 (Hǎinán)", "They're all the same"],
            answerIndex: 2,
            explanation:
              "Chain it: Guangzhou beats Beijing at being hot, and Hainan beats Guangzhou. So the heat order is 海南 > 广州 > 北京 — Hainan is hottest: 海南最热.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "challenge",
            hints: [
              "One clause at a time: who wins each 比?",
              "Line the three places up on a heat scale — who's on top?",
            ],
            strategy: "Chain comparisons like inequalities in maths",
          },
          {
            id: "wx-mcq-b-q12",
            question: "Challenge: which sentence is grammatically WRONG?",
            options: [
              "{{北京比新加坡冷。|Běijīng bǐ Xīnjiāpō lěng.}}",
              "{{北京比新加坡很冷。|Běijīng bǐ Xīnjiāpō hěn lěng.}}",
              "{{新加坡没有北京那么冷。|Xīnjiāpō méiyǒu Běijīng nàme lěng.}}",
              "{{北京的冬天最冷。|Běijīng de dōngtiān zuì lěng.}}",
            ],
            answerIndex: 1,
            explanation:
              "很 is banned in 比 sentences: 比 sets a relative scale and 很 an absolute one, and a sentence can't point at both. 北京比新加坡冷 ✓; to size the gap say 冷得多, never 很冷.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "challenge",
            hints: ["Scan for an illegal passenger in the 比 pattern.", "Which little intensity word can never ride in a 比 sentence?"],
            strategy: "In 比 sentences, delete 很 on sight",
          },
          {
            id: "wx-mcq-b-q13",
            question:
              "Challenge — read the forecast: {{天气预报：北京，下雪，零下五度。上海，多云，十度。新加坡，下雨，三十一度。|Tiānqì yùbào: Běijīng, xià xuě, língxià wǔ dù. Shànghǎi, duōyún, shí dù. Xīnjiāpō, xià yǔ, sānshíyī dù.}} ({{零下|língxià}} = below zero) In which city do you need a jumper AND will you see snow?",
            options: ["上海 (Shànghǎi)", "新加坡 (Xīnjiāpō)", "北京 (Běijīng)", "None of them"],
            answerIndex: 2,
            explanation:
              "Scan each city's chunk: Beijing — 下雪 (snowing) at 零下五度 (minus 5°): jumper AND snow. Shanghai is merely cloudy at 10°, and Singapore is 31° with rain — umbrella weather, not jumper weather.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "challenge",
            hints: [
              "Treat the forecast as a table: city, sky, temperature.",
              "Which sky-word means snow, and which temperature is coldest?",
            ],
            strategy: "Read forecasts in chunks: sky, then temperature, then warnings",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "wx-qa-a",
        title: "Paper A — Weather reports & translations",
        description: "Reading forecasts, writing reports, fixing classic errors.",
        questions: [
          {
            id: "wx-qa-a-q01",
            question: "Translate into English: {{今天刮风，很冷。|Jīntiān guā fēng, hěn lěng.}}",
            modelAnswer: "It's windy today, and (it's) very cold.",
            markScheme: [
              "刮风 = it's windy (an event, not 'scraping wind' word-for-word)",
              "很冷 = (very) cold",
              "今天 = today, placed naturally in the English",
            ],
            commonError: "Translating 刮风 literally as 'scrape wind' — English just says 'it's windy'.",
            guideRef: "Rain falls, wind scrapes: the weather verbs",
            difficulty: "warmup",
            hints: ["Two chunks: an event, then a feeling."],
          },
          {
            id: "wx-qa-a-q02",
            question:
              "Write a Chinese weather report for Singapore today: sunny, extremely hot, 31 degrees. (Characters or pinyin.)",
            modelAnswer:
              "{{今天晴天，非常热，三十一度。|Jīntiān qíngtiān, fēicháng rè, sānshíyī dù.|Today: sunny, extremely hot, 31 degrees.}}",
            markScheme: [
              "Time word 今天 first",
              "晴天 for sunny",
              "非常热 for 'extremely hot' (not 太热了, which is a complaint)",
              "三十一度 with 度 after the number",
            ],
            commonError: "三十一 vs 十三: 31 is 三十一 (three-ten-one). 十三 is 13 — check which side of 十 the digit sits.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "core",
            hints: [
              "Forecast recipe: time + sky + feel + degrees.",
              "'Extremely' is the rung above 很 on the intensity ladder.",
            ],
          },
          {
            id: "wx-qa-a-q03",
            question:
              "Read this three-city forecast, then answer in English: {{天气预报：北京，晴天，五度。上海，多云，十五度。新加坡，下雨，三十度。|Tiānqì yùbào: Běijīng, qíngtiān, wǔ dù. Shànghǎi, duōyún, shíwǔ dù. Xīnjiāpō, xià yǔ, sānshí dù.}} (a) Which city will have rain? (b) Which city is coldest? (c) In which city should you 带雨伞, and in which should you 穿毛衣?",
            modelAnswer:
              "(a) Singapore — 下雨. (b) Beijing — 5 degrees is the lowest of the three. (c) Take an umbrella (带雨伞) in Singapore because of the rain; wear a jumper (穿毛衣) in Beijing because it's only 5 degrees.",
            markScheme: [
              "(a) Singapore / 新加坡 (matches 下雨)",
              "(b) Beijing / 北京 (5° is lowest — compares all three temperatures)",
              "(c) Umbrella → Singapore (rain); jumper → Beijing (cold)",
              "Reasons given, not just city names",
            ],
            commonError:
              "Picking Shanghai as coldest because 多云 'sounds gloomy' — judge temperature by the NUMBER (五度 < 十五度 < 三十度), not the sky word.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "challenge",
            hints: [
              "Turn the forecast into a table: city | sky | degrees.",
              "For (b), compare only the numbers before 度.",
              "For (c), match the item to the problem: umbrellas fight rain, jumpers fight cold.",
            ],
            strategy: "Read forecasts in chunks: sky, then temperature, then warnings",
          },
          {
            id: "wx-qa-a-q04",
            question:
              "A friend asks: {{今天天气怎么样？|Jīntiān tiānqì zěnmeyàng?}} Reply in Chinese: it's cloudy and a bit cold.",
            modelAnswer: "{{今天多云，有点儿冷。|Jīntiān duōyún, yǒudiǎnr lěng.|It's cloudy today and a bit cold.}}",
            markScheme: [
              "多云 for cloudy (阴天 also acceptable for overcast)",
              "有点儿冷 for 'a bit cold'",
              "No 是 inserted before 多云",
            ],
            commonError: "一点儿冷 ✗ — 'a bit + adjective' as a grumble is 有点儿冷; 一点儿 hangs AFTER adjectives in comparisons (冷一点儿).",
            guideRef: "Hot, cold and just right: temperature and feel",
            difficulty: "core",
            hints: [
              "Answer in the same shape as the question — swap 怎么样 for your description.",
              "Which 'a bit' word goes BEFORE the adjective?",
            ],
            strategy: "Question words sit in the answer's seat",
          },
          {
            id: "wx-qa-a-q05",
            question:
              "Translate into Chinese: 'It will snow tomorrow. You need to wear a jumper.' (Characters or pinyin.)",
            modelAnswer: "{{明天会下雪。你要穿毛衣。|Míngtiān huì xià xuě. Nǐ yào chuān máoyī.}}",
            markScheme: [
              "明天会下雪 — 会 before the weather verb for the future",
              "你要 for 'you need to'",
              "穿毛衣 — 穿 (wear) with clothing",
            ],
            commonError: "明天下雪 without 会 states a timetable fact; the forecast-flavoured 'will' wants 会. And never 带毛衣 unless you mean 'pack a jumper in your bag'.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "core",
            hints: [
              "Which little word marks 'will (probably) happen'?",
              "Jumpers are worn, umbrellas are carried — pick the verb to match.",
            ],
          },
          {
            id: "wx-qa-a-q06",
            question:
              "Challenge — editor's desk: each sentence below hides one error. Fix both and explain each fix briefly in English. (1) {{今天很下雨。|Jīntiān hěn xià yǔ.}} ✗ (2) {{明天是下雪。|Míngtiān shì xià xuě.}} ✗",
            modelAnswer:
              "(1) {{今天下雨。|Jīntiān xià yǔ.}} — 下雨 is a verb, and 很 only attaches to adjectives; delete 很 (or say 雨很大 for heavy rain). (2) {{明天会下雪。|Míngtiān huì xià xuě.}} — 下雪 already contains its verb, so 是 is wrong; the future 'will' is 会, not 是.",
            markScheme: [
              "(1) corrected to 今天下雨 (or 今天下雨了 / 雨很大)",
              "(1) reason: 很 cannot modify verbs / 下雨 is an event",
              "(2) corrected to 明天会下雪 (明天下雪 also accepted)",
              "(2) reason: 是 doesn't mark the future; 会 does / 下雪 needs no extra verb",
            ],
            commonError: "Fixing (2) by deleting 下, leaving 明天是雪 ('tomorrow is snow') — still wrong: the event verb 下 must stay.",
            guideRef: "Rain falls, wind scrapes: the weather verbs",
            difficulty: "challenge",
            hints: [
              "For (1): what word class is 下雨, and what does 很 demand?",
              "For (2): which word marks future weather — 是 or 会?",
              "Both fixes are one-word surgeries.",
            ],
            strategy: "Ask 'is it a thing the sky DOES or a way the sky IS?'",
          },
        ],
      },
      {
        id: "wx-qa-b",
        title: "Paper B — Seasons, comparisons & plans",
        description: "Four seasons, 比 and 最, and the Singapore–Beijing contrast.",
        questions: [
          {
            id: "wx-qa-b-q01",
            question: "Write the four seasons in Chinese, in order starting from spring. (Characters or pinyin.)",
            modelAnswer:
              "{{春天|chūntiān|spring}}, {{夏天|xiàtiān|summer}}, {{秋天|qiūtiān|autumn}}, {{冬天|dōngtiān|winter}}.",
            markScheme: [
              "All four seasons present",
              "Correct order: 春天 → 夏天 → 秋天 → 冬天",
              "Each ends in 天 (or correct pinyin with tones)",
            ],
            commonError: "Mixing up 春 (chūn) and 秋 (qiū) — spring starts the year, autumn follows summer.",
            guideRef: "Four seasons — and Singapore's missing winter",
            difficulty: "warmup",
            hints: ["They all share the same last character — you only need four first characters."],
          },
          {
            id: "wx-qa-b-q02",
            question:
              "Translate into English: {{新加坡没有冬天，一年都是夏天。|Xīnjiāpō méiyǒu dōngtiān, yì nián dōu shì xiàtiān.}}",
            modelAnswer: "Singapore has no winter — it's summer all year round.",
            markScheme: [
              "没有冬天 = has no winter (not 'winter is not…')",
              "一年都 = all year / the whole year",
              "Overall meaning: summer all year round",
            ],
            commonError: "Rendering 都 as 'all are' mechanically ('one year all is summer') — 都 here spreads over time: 'ALL year round'.",
            guideRef: "Four seasons — and Singapore's missing winter",
            difficulty: "core",
            hints: ["What does 没有 do to 冬天?", "都 points backwards at 一年."],
          },
          {
            id: "wx-qa-b-q03",
            question: "Write in Chinese: 'Summer is hotter than spring.' (Characters or pinyin.)",
            modelAnswer: "{{夏天比春天热。|Xiàtiān bǐ chūntiān rè.|Summer is hotter than spring.}}",
            markScheme: [
              "夏天 before 比 (summer is the hotter one)",
              "比 + 春天 in the middle",
              "Bare adjective 热 at the end — no 很",
            ],
            commonError: "夏天比春天很热 ✗ — 很 is banned in 比 sentences; 比 already measures the difference.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "core",
            hints: [
              "Which season should stand before 比?",
              "Check the end of your sentence: is a forbidden intensity word hiding there?",
            ],
            strategy: "The word before 比 wins the adjective",
            solutions: [
              {
                label: "Slot the pattern (recommended)",
                steps: [
                  "Pattern: A 比 B + adjective, where A wins the adjective.",
                  "Hotter one = summer → A = 夏天; B = 春天; adjective = 热.",
                  "Assemble: 夏天比春天热。 No 很 — 比 has already done the measuring.",
                ],
              },
              {
                label: "Translate then repair",
                steps: [
                  "Word-by-word English gives 'summer than spring hot' — suspicious but keep going.",
                  "Reorder to the Chinese frame: comparer + 比 + comparee + adjective.",
                  "Delete any 很 that crept in: 夏天比春天热。",
                ],
              },
            ],
          },
          {
            id: "wx-qa-b-q04",
            question:
              "Answer in a full Chinese sentence, with a reason: {{你最喜欢哪个季节？为什么？|Nǐ zuì xǐhuan nǎge jìjié? Wèishénme?|Which season do you like most? Why?}} ({{喜欢|xǐhuan}} = to like; {{因为|yīnwèi}} = because)",
            modelAnswer:
              "{{我最喜欢秋天，因为秋天很凉快。|Wǒ zuì xǐhuan qiūtiān, yīnwèi qiūtiān hěn liángkuai.|I like autumn most, because autumn is pleasantly cool.}} (Any season with a sensible weather reason earns full marks.)",
            markScheme: [
              "我最喜欢 + a season",
              "因为 introducing the reason",
              "Weather reason uses topic language (凉快 / 暖和 / 下雪 / 不冷 etc.)",
              "很 (or another intensity word) glueing the adjective, where an adjective is used",
            ],
            commonError: "我最喜欢是秋天 ✗ — 喜欢 is already the verb; no 是 needed.",
            guideRef: "Hot, cold and just right: temperature and feel",
            difficulty: "core",
            hints: [
              "Frame: 我最喜欢…，因为….",
              "Pick a comfortable adjective — 凉快 and 暖和 come with a built-in smile.",
            ],
          },
          {
            id: "wx-qa-b-q05",
            question:
              "{{海南比广州热，广州比上海热。|Hǎinán bǐ Guǎngzhōu rè, Guǎngzhōu bǐ Shànghǎi rè.}} (a) In English: which place is hottest, and how do you know? (b) In Chinese: state it with 最.",
            modelAnswer:
              "(a) Hainan. The first clause puts Hainan above Guangzhou for heat, the second puts Guangzhou above Shanghai — chaining them gives Hainan > Guangzhou > Shanghai. (b) {{海南最热。|Hǎinán zuì rè.|Hainan is the hottest.}}",
            markScheme: [
              "(a) Hainan identified",
              "(a) Reasoning chains the two 比 sentences (an order/inequality, not a guess)",
              "(b) 海南最热 — 最 directly before 热",
              "No 很 or 比 mixed into the 最 sentence",
            ],
            commonError: "Answering 上海 by mis-reading 比 backwards — remember the word BEFORE 比 wins the adjective.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "core",
            hints: [
              "Who wins the adjective in each clause?",
              "Stack the two results into one ordering, hottest first.",
            ],
            strategy: "Chain comparisons like inequalities in maths",
          },
          {
            id: "wx-qa-b-q06",
            question:
              "Challenge: your Beijing penpal has never visited Singapore. Write 2–3 Chinese sentences comparing the two cities' weather. Use 比 at least once, and 没有 or 最 at least once.",
            modelAnswer:
              "{{新加坡一年都很热，没有冬天。|Xīnjiāpō yì nián dōu hěn rè, méiyǒu dōngtiān.|Singapore is hot all year round and has no winter.}} {{北京比新加坡冷。|Běijīng bǐ Xīnjiāpō lěng.|Beijing is colder than Singapore.}} {{北京的冬天最冷，常常下雪。|Běijīng de dōngtiān zuì lěng, chángcháng xià xuě.|Beijing's winter is the coldest, and it often snows.}}",
            markScheme: [
              "A correct 比 sentence with the colder/hotter city before 比 and no 很",
              "没有 (e.g. 新加坡没有冬天) or 最 (e.g. 冬天最冷) used correctly",
              "Both cities mentioned; content factually sensible (Singapore hot year-round, Beijing colder)",
              "Weather verbs used without 很 (e.g. 常常下雪 ✓, 很下雪 ✗)",
            ],
            commonError: "北京比新加坡很冷 ✗ — the 很 must go; and check 下雪 never picks up a 很 either.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "challenge",
            hints: [
              "Sentence 1: describe Singapore (一年都…, 没有冬天).",
              "Sentence 2: one clean 比 sentence — which city stands before 比?",
              "Sentence 3: crown a champion with 最, or add 常常下雪 for Beijing colour.",
            ],
            strategy: "Build from patterns you own: 一年都…, A 比 B…, 最…",
            solutions: [
              {
                label: "Three-sentence scaffold",
                steps: [
                  "Describe Singapore with the totality-stamp: 新加坡一年都很热，没有冬天。",
                  "Compare with 比, colder city first, no 很: 北京比新加坡冷。",
                  "Finish with a superlative or detail: 北京的冬天最冷，常常下雪。",
                ],
              },
              {
                label: "Contrast-first plan",
                steps: [
                  "Lead with the sharpest contrast: 新加坡没有冬天，北京有四个季节。",
                  "Support it with a comparison: 新加坡比北京热。 (Hotter city before 比.)",
                  "Close with what that means in winter: 冬天北京最冷，你要穿毛衣。",
                ],
              },
            ],
          },
          {
            id: "wx-qa-b-q07",
            question:
              "Your friend is visiting Beijing in December. Write two Chinese sentences of advice: tell them Beijing's winter is very cold and will snow, and that they need to wear a jumper.",
            modelAnswer:
              "{{北京的冬天很冷，会下雪。|Běijīng de dōngtiān hěn lěng, huì xià xuě.|Beijing's winter is very cold and it will snow.}} {{你要穿毛衣。|Nǐ yào chuān máoyī.|You need to wear a jumper.}}",
            markScheme: [
              "北京的冬天很冷 — 的 linking, 很 with the adjective",
              "会下雪 for 'will snow' (no 很, no 是)",
              "你要穿毛衣 — 要 for the advice, 穿 with clothing",
            ],
            commonError: "你要带毛衣 says 'pack a jumper' — fine advice, but the question asks for WEAR, which is 穿.",
            guideRef: "Comparing cities and reading the forecast",
            difficulty: "core",
            hints: [
              "Sentence 1: place 的 season + 很 + adjective, then 会 + weather verb.",
              "Sentence 2: 你要 + wear-verb + clothing.",
            ],
          },
        ],
      },
    ],
  },
};
