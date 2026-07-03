import type { Topic } from "../types";

// Hobbies & Free Time — verb collocations (打/踢/玩/弹/拉), pastimes, preferences,
// ability with 会, frequency words and invitations. House style follows greetings.ts.

export const hobbies: Topic = {
  id: "hobbies",
  title: "Hobbies & Free Time",
  titleChinese: { hanzi: "爱好与空闲时间", pinyin: "àihào yǔ kòngxián shíjiān" },
  subject: "chinese",
  icon: "⚽",
  color: "emerald",
  intro:
    "What do you do at the weekend? In this topic you'll learn to talk about sports, music, screens and everything in between — and you'll crack one of Chinese's best secrets: why the single English word 'play' splits into five different Chinese verbs. By the end you can say what you like, what you can do, how often you do it, and invite a friend along.",
  guide: [
    {
      heading: "Why 'play' is five different verbs",
      discovery: {
        problem:
          "In English you PLAY basketball, PLAY football, PLAY computer games, PLAY the piano and PLAY the violin — one verb for everything. Now look at the Chinese: {{打篮球|dǎ lánqiú|play basketball}}, {{踢足球|tī zúqiú|play football}}, {{玩电脑游戏|wán diànnǎo yóuxì|play computer games}}, {{弹钢琴|tán gāngqín|play the piano}}, {{拉小提琴|lā xiǎotíqín|play the violin}}. Five different verbs! Before reading on: what do you think decides which verb an activity gets?",
        idea:
          "The verb describes **what your body actually does**. {{打|dǎ|to hit}} = hitting with hands or a racket. {{踢|tī|to kick}} = kicking with feet. {{玩|wán|to play around}} = having fun with a toy or game. {{弹|tán|to pluck/press}} = fingers plucking strings or pressing keys. {{拉|lā|to pull}} = pulling a bow across strings. Once you know the logic, you can predict the verb for activities you've never seen — that's a system, not a word list.",
      },
      body:
        "Sort every activity by the physical action:\n\n- **Hands or racket → {{打|dǎ}}**: {{打篮球|dǎ lánqiú|play basketball}}, {{打网球|dǎ wǎngqiú|play tennis}}, {{打乒乓球|dǎ pīngpāngqiú|play table tennis}}, {{打羽毛球|dǎ yǔmáoqiú|play badminton}}\n- **Feet → {{踢|tī}}**: {{踢足球|tī zúqiú|play football}} — the only common school sport you kick\n- **Games and toys → {{玩|wán}}**: {{玩电脑游戏|wán diànnǎo yóuxì|play computer games}}\n- **Plucked strings or keys → {{弹|tán}}**: {{弹钢琴|tán gāngqín|play the piano}}, {{弹吉他|tán jítā|play the guitar}}\n- **Bowed strings → {{拉|lā}}**: {{拉小提琴|lā xiǎotíqín|play the violin}} — you literally 'pull' the bow\n\nTest yourself: volleyball is hit with the hands, so it must be 打排球. A cello is played with a bow, so it must be 拉大提琴. You just produced Chinese you were never taught.",
      whyItWorks:
        "English 'play' is a grab-bag verb — it tells you almost nothing about the action. Chinese verbs are more literal: they name the movement itself. That's why swapping them sounds absurd to a Chinese ear: 踢钢琴 would mean 'kick the piano'! When you meet a new sport or instrument, don't ask 'how do I say play?' — ask 'what does the body do?' and the verb chooses itself.",
      strategies: [
        "Ask: what does the body actually do?",
        "Predict the verb for a new activity, then check",
      ],
      keyPoints: [
        "打 for hand/racket sports: 打篮球, 打网球, 打乒乓球, 打羽毛球",
        "踢 for kicking: 踢足球",
        "玩 for games and toys: 玩电脑游戏",
        "弹 for plucked/keyboard instruments: 弹钢琴, 弹吉他",
        "拉 for bowed instruments: 拉小提琴",
      ],
      vocab: [
        {
          hanzi: "打篮球",
          pinyin: "dǎ lánqiú",
          english: "to play basketball",
          pos: "verb phrase",
          example: { hanzi: "我常常打篮球。", pinyin: "Wǒ chángcháng dǎ lánqiú.", english: "I often play basketball." },
        },
        { hanzi: "打网球", pinyin: "dǎ wǎngqiú", english: "to play tennis", pos: "verb phrase" },
        { hanzi: "打乒乓球", pinyin: "dǎ pīngpāngqiú", english: "to play table tennis", pos: "verb phrase" },
        { hanzi: "打羽毛球", pinyin: "dǎ yǔmáoqiú", english: "to play badminton", pos: "verb phrase" },
        { hanzi: "踢足球", pinyin: "tī zúqiú", english: "to play football", pos: "verb phrase" },
        { hanzi: "玩电脑游戏", pinyin: "wán diànnǎo yóuxì", english: "to play computer games", pos: "verb phrase" },
        { hanzi: "弹钢琴", pinyin: "tán gāngqín", english: "to play the piano", pos: "verb phrase" },
        { hanzi: "弹吉他", pinyin: "tán jítā", english: "to play the guitar", pos: "verb phrase" },
        { hanzi: "拉小提琴", pinyin: "lā xiǎotíqín", english: "to play the violin", pos: "verb phrase" },
      ],
      patterns: [
        {
          pattern: "打 + ball sport (hands/racket)",
          example: { hanzi: "我打羽毛球。", pinyin: "Wǒ dǎ yǔmáoqiú.", english: "I play badminton." },
          note: "打 literally means 'hit' — any sport where hands or a racket strike the ball.",
        },
        {
          pattern: "弹 / 拉 + instrument",
          example: { hanzi: "她拉小提琴。", pinyin: "Tā lā xiǎotíqín.", english: "She plays the violin." },
          note: "弹 = pluck or press (piano, guitar); 拉 = pull a bow (violin, cello).",
        },
      ],
    },
    {
      heading: "看, 听, 唱, 跳: everyday pastimes in verb + object pairs",
      discovery: {
        problem:
          "Three pastimes: {{看书|kàn shū|read (books)}}, {{看电视|kàn diànshì|watch TV}}, {{看电影|kàn diànyǐng|watch films}}. English needs two different verbs — 'read' and 'watch'. How many does Chinese use, and what does that tell you about how {{看|kàn}} really works?",
        idea:
          "Just one! {{看|kàn}} simply means 'to look at with attention' — Chinese doesn't care whether the thing you're looking at is a page or a screen. English slices the world one way, Chinese another. Expect this often: one Chinese verb can cover several English ones, and vice versa.",
      },
      body:
        "Most pastimes are neat **verb + object** pairs — learn them as two-part chunks:\n\n- {{看书|kàn shū|read books}}, {{看电视|kàn diànshì|watch TV}}, {{看电影|kàn diànyǐng|watch films}}\n- {{听音乐|tīng yīnyuè|listen to music}}\n- {{唱歌|chàng gē|to sing}} — literally 'sing songs'\n- {{跳舞|tiào wǔ|to dance}} — literally 'jump dances'\n- {{画画|huà huà|to draw}} — literally 'draw drawings'!\n\nNotice 唱歌, 跳舞 and 画画: Chinese likes verbs to carry a little default object, even when English says just 'sing', 'dance', 'draw'. Other essentials: {{游泳|yóuyǒng|to swim}}, {{跑步|pǎo bù|to run/go running}}, {{上网|shàng wǎng|to go online}} (literally 'go up onto the net') and {{拍照|pāi zhào|to take photos}}.",
      whyItWorks:
        "Why does Chinese say 'sing songs' and 'draw drawings'? A bare verb like 唱 feels unfinished — like a sentence stopping mid-air. The default object completes the rhythm. The bonus for you: each chunk is a ready-made mini-sentence. 我唱歌 is already 'I sing.' Learn the pair, get the grammar free.",
      strategies: ["Learn pastimes as two-part chunks", "Don't assume English and Chinese slice meanings the same way"],
      keyPoints: [
        "看 covers both 'read' (看书) and 'watch' (看电视, 看电影)",
        "唱歌, 跳舞, 画画 carry built-in objects: 'sing songs', 'jump dances', 'draw drawings'",
        "上网 = go online; 拍照 = take photos",
        "Learn verb + object as one chunk — it's a ready-made sentence",
      ],
      vocab: [
        { hanzi: "看书", pinyin: "kàn shū", english: "to read (books)", pos: "verb phrase" },
        { hanzi: "看电视", pinyin: "kàn diànshì", english: "to watch TV", pos: "verb phrase" },
        { hanzi: "看电影", pinyin: "kàn diànyǐng", english: "to watch a film", pos: "verb phrase" },
        {
          hanzi: "听音乐",
          pinyin: "tīng yīnyuè",
          english: "to listen to music",
          pos: "verb phrase",
          example: { hanzi: "我喜欢听音乐。", pinyin: "Wǒ xǐhuan tīng yīnyuè.", english: "I like listening to music." },
        },
        { hanzi: "唱歌", pinyin: "chàng gē", english: "to sing", pos: "verb phrase" },
        { hanzi: "跳舞", pinyin: "tiào wǔ", english: "to dance", pos: "verb phrase" },
        { hanzi: "画画", pinyin: "huà huà", english: "to draw, to paint", pos: "verb phrase" },
        { hanzi: "游泳", pinyin: "yóuyǒng", english: "to swim", pos: "verb" },
        { hanzi: "跑步", pinyin: "pǎo bù", english: "to run, go running", pos: "verb phrase" },
        { hanzi: "上网", pinyin: "shàng wǎng", english: "to go online", pos: "verb phrase" },
      ],
      patterns: [
        {
          pattern: "Subject + verb + object chunk",
          example: { hanzi: "他晚上看书。", pinyin: "Tā wǎnshang kàn shū.", english: "He reads in the evening." },
          note: "The pastime chunk slots straight in after the subject (and any time word).",
        },
      ],
    },
    {
      heading: "The preference ladder: from 讨厌 to 最喜欢",
      discovery: {
        problem:
          "Here are five feelings, shuffled: {{爱|ài|to love}}, {{讨厌|tǎoyàn|to hate}}, {{最喜欢|zuì xǐhuan|to like most}}, {{喜欢|xǐhuan|to like}}, {{不太喜欢|bú tài xǐhuan|to not really like}}. Can you arrange them into a ladder from strongest dislike to strongest like?",
        idea:
          "讨厌 → 不太喜欢 → 喜欢 → 爱 → 最喜欢 ('like MOST' — your absolute favourite). Two building blocks do the work: {{不太|bú tài|not very}} softens 喜欢, and {{最|zuì|most}} turbo-charges it. You don't learn five words — you learn one word and two dials.",
      },
      body:
        "{{喜欢|xǐhuan|to like}} takes a whole verb phrase after it — say what you like *doing*:\n\n{{我喜欢打网球。|Wǒ xǐhuan dǎ wǎngqiú.|I like playing tennis.}}\n{{我最喜欢看电影。|Wǒ zuì xǐhuan kàn diànyǐng.|My favourite thing is watching films.}}\n{{我不太喜欢跑步。|Wǒ bú tài xǐhuan pǎo bù.|I don't really like running.}}\n\nTo ask about hobbies: {{你有什么爱好？|Nǐ yǒu shénme àihào?|What hobbies do you have?}} or {{你喜欢做什么？|Nǐ xǐhuan zuò shénme?|What do you like doing?}} Just like 你叫什么名字, the question word 什么 sits where the answer will go.\n\nA slightly fancier way to show interest: {{对|duì|towards}} + topic + {{感兴趣|gǎn xìngqù|to be interested in}} — {{我对音乐感兴趣。|Wǒ duì yīnyuè gǎn xìngqù.|I'm interested in music.}}\n\nTo give a reason, add {{因为|yīnwèi|because}}: {{我喜欢游泳，因为很有意思。|Wǒ xǐhuan yóuyǒng, yīnwèi hěn yǒu yìsi.|I like swimming because it's really fun.}}",
      whyItWorks:
        "Why does 喜欢 take a verb phrase and not English's '-ing' form? Chinese verbs never change shape — no -ing, no -ed, ever. So 'I like swimming' is simply 喜欢 + 游泳, verb straight after verb. That's also why 最喜欢 works: 最 ('most') stacks in front of 喜欢 exactly like 'most-like' = favourite. Small words in front of the verb do the work English does with endings.",
      strategies: ["One word, two dials: 不太 softens, 最 maximises", "Question words sit in the answer's seat"],
      keyPoints: [
        "Ladder: 讨厌 < 不太喜欢 < 喜欢 < 爱 < 最喜欢",
        "喜欢 + verb phrase: 我喜欢听音乐 — no '-ing' needed",
        "Ask hobbies with 你有什么爱好？ or 你喜欢做什么？",
        "对…感兴趣 = to be interested in…",
        "因为 introduces your reason: …，因为很有意思",
      ],
      vocab: [
        {
          hanzi: "喜欢",
          pinyin: "xǐhuan",
          english: "to like",
          pos: "verb",
          example: { hanzi: "我喜欢画画。", pinyin: "Wǒ xǐhuan huà huà.", english: "I like drawing." },
        },
        { hanzi: "爱", pinyin: "ài", english: "to love", pos: "verb" },
        { hanzi: "最", pinyin: "zuì", english: "most (superlative)", pos: "adverb" },
        { hanzi: "不太", pinyin: "bú tài", english: "not very, not really", pos: "adverb" },
        { hanzi: "讨厌", pinyin: "tǎoyàn", english: "to hate, can't stand", pos: "verb" },
        { hanzi: "爱好", pinyin: "àihào", english: "hobby", pos: "noun" },
        { hanzi: "做", pinyin: "zuò", english: "to do", pos: "verb" },
        { hanzi: "对…感兴趣", pinyin: "duì… gǎn xìngqù", english: "to be interested in…", pos: "pattern" },
        { hanzi: "因为", pinyin: "yīnwèi", english: "because", pos: "conjunction" },
        { hanzi: "有意思", pinyin: "yǒu yìsi", english: "interesting, fun", pos: "adjective phrase" },
      ],
      patterns: [
        {
          pattern: "Subject + (最/不太) 喜欢 + verb phrase",
          example: { hanzi: "我最喜欢玩电脑游戏。", pinyin: "Wǒ zuì xǐhuan wán diànnǎo yóuxì.", english: "My favourite thing is playing computer games." },
          note: "最 in front = favourite; 不太 in front = don't really like.",
        },
        {
          pattern: "你有什么爱好？",
          example: { hanzi: "你有什么爱好？", pinyin: "Nǐ yǒu shénme àihào?", english: "What hobbies do you have?" },
          note: "什么 sits inside the sentence, right where the answer will go.",
        },
        {
          pattern: "对 + topic + 感兴趣",
          example: { hanzi: "他对足球感兴趣。", pinyin: "Tā duì zúqiú gǎn xìngqù.", english: "He's interested in football." },
          note: "The topic goes in the middle — 对 points the interest at it.",
        },
      ],
    },
    {
      heading: "会: skills you have learned (and why it isn't 喜欢)",
      discovery: {
        problem:
          "A student writes: {{我会游泳，可是我不喜欢游泳。|Wǒ huì yóuyǒng, kěshì wǒ bù xǐhuan yóuyǒng.}} — 'I 会 swim, but I don't like swimming.' Both halves are true at once. So what exactly does {{会|huì}} mean, if it's clearly not 'like'?",
        idea:
          "{{会|huì}} means 'can, know how to' — a **learned skill**. You weren't born able to swim; you learned it, so now you 会 it. Liking is a feeling; 会 is an ability. You can 会 something you hate, and love something you can't do (yet!).",
      },
      body:
        "The pattern is simply {{会|huì}} + verb phrase:\n\n{{我会游泳。|Wǒ huì yóuyǒng.|I can swim.}}\n{{我会弹一点儿钢琴。|Wǒ huì tán yìdiǎnr gāngqín.|I can play a little piano.}}\n\nNegative: {{我不会弹钢琴。|Wǒ bú huì tán gāngqín.|I can't play the piano.}} Listen to the pinyin: 不 is normally bù, but before a 4th-tone word like 会 it changes to **bú** — bú huì. (Same rule you met in 不客气.)\n\nQuestion and short answers:\n{{你会拉小提琴吗？|Nǐ huì lā xiǎotíqín ma?|Can you play the violin?}}\n{{会。|Huì.|Yes (I can).}} / {{不会。|Bú huì.|No (I can't).}}\n\nChinese has no single word for yes/no — you echo the verb back. To say you're working on a skill, use {{学|xué|to learn}}: {{我学弹吉他。|Wǒ xué tán jítā.|I'm learning to play the guitar.}}",
      whyItWorks:
        "Why echo the verb instead of saying 'yes'? A Chinese question 你会游泳吗 already contains the whole answer sentence (你会游泳) — the 吗 just asks 'true or false?'. So the answer is the verb itself, confirmed (会) or denied (不会). It's the same discovery as 吗-questions in Greetings: the question and answer share one skeleton.",
      strategies: ["会 = learned skill, 喜欢 = feeling — test each sentence against both", "Answer 吗-questions by echoing the verb"],
      keyPoints: [
        "会 + verb = can, know how to (a learned skill)",
        "不会 is pronounced bú huì — 不 turns 2nd tone before a 4th tone",
        "Answer 你会…吗？ with 会 or 不会, not a word for 'yes/no'",
        "会 and 喜欢 are independent: you can have either without the other",
        "可是 = but; 学 = to learn",
      ],
      vocab: [
        {
          hanzi: "会",
          pinyin: "huì",
          english: "can, know how to",
          pos: "verb",
          example: { hanzi: "我会打乒乓球。", pinyin: "Wǒ huì dǎ pīngpāngqiú.", english: "I can play table tennis." },
        },
        { hanzi: "不会", pinyin: "bú huì", english: "cannot, don't know how to", pos: "verb phrase" },
        { hanzi: "可是", pinyin: "kěshì", english: "but", pos: "conjunction" },
        { hanzi: "学", pinyin: "xué", english: "to learn, to study", pos: "verb" },
        { hanzi: "一点儿", pinyin: "yìdiǎnr", english: "a little", pos: "phrase" },
        { hanzi: "也", pinyin: "yě", english: "also", pos: "adverb" },
      ],
      patterns: [
        {
          pattern: "Subject + 会 + verb phrase",
          example: { hanzi: "她会弹吉他。", pinyin: "Tā huì tán jítā.", english: "She can play the guitar." },
          note: "会 sits directly before the skill; negate with 不会 (bú huì).",
        },
        {
          pattern: "你会…吗？ → 会 / 不会",
          example: { hanzi: "你会游泳吗？会。", pinyin: "Nǐ huì yóuyǒng ma? Huì.", english: "Can you swim? Yes." },
          note: "No word for 'yes' — echo the verb to answer.",
        },
      ],
    },
    {
      heading: "Time words first, then the fun: 常常, 周末 and inviting friends",
      discovery: {
        problem:
          "English says 'I play basketball **at the weekend**' — time at the END. Here's the Chinese: {{我周末打篮球。|Wǒ zhōumò dǎ lánqiú.}} Where has the time word gone? And would {{我打篮球周末|wǒ dǎ lánqiú zhōumò}} work?",
        idea:
          "Time comes **before the verb** in Chinese — right after (or even before) the subject. 我打篮球周末 is wrong, always. Rule of thumb: set the scene first (who, when), then the action. Chinese sentences run like a film: scene, then plot.",
      },
      body:
        "The frequency toolkit, all sitting before the verb:\n\n- {{每天|měi tiān|every day}}: {{我每天上网。|Wǒ měi tiān shàng wǎng.|I go online every day.}}\n- {{常常|chángcháng|often}}: {{他常常踢足球。|Tā chángcháng tī zúqiú.|He often plays football.}}\n- {{有时候|yǒushíhou|sometimes}}: {{我有时候画画。|Wǒ yǒushíhou huà huà.|I sometimes draw.}}\n- {{周末|zhōumò|weekend}}: {{我周末看电影。|Wǒ zhōumò kàn diànyǐng.|I watch films at the weekend.}}\n- {{空闲时间|kòngxián shíjiān|free time}}: {{我空闲时间听音乐。|Wǒ kòngxián shíjiān tīng yīnyuè.|In my free time I listen to music.}}\n\nTo do things **with** someone, use {{跟|gēn|with}} + person + {{一起|yìqǐ|together}}, also before the verb: {{我跟朋友一起打羽毛球。|Wǒ gēn péngyou yìqǐ dǎ yǔmáoqiú.|I play badminton with my friends.}}\n\nInviting someone is beautifully simple — state the plan with {{去|qù|to go}}, then add {{好吗|hǎo ma|okay?}}:\n\n{{我们去打篮球，好吗？|Wǒmen qù dǎ lánqiú, hǎo ma?|Let's go and play basketball, okay?}}\n{{好啊！|Hǎo a!|Sure!}}",
      whyItWorks:
        "Why must time come before the verb? Chinese word order follows the logic 'frame first': when + where + who-with are the frame, the verb is the event inside it. English tolerates time at either end; Chinese doesn't — the frame must be up before the action starts. Knowing the *principle* saves you memorising a rule for every time word: they ALL go before the verb, from 每天 to 周末 to 空闲时间.",
      strategies: ["Frame first: when and who-with before the verb", "Invite with plan + 好吗？ — no special grammar needed"],
      keyPoints: [
        "Time words go before the verb: 我周末打篮球, never 我打篮球周末",
        "每天 / 常常 / 有时候 = every day / often / sometimes",
        "跟 + person + 一起 + verb = do something together with someone",
        "Invite: 我们去…，好吗？ Accept: 好啊！",
      ],
      vocab: [
        { hanzi: "常常", pinyin: "chángcháng", english: "often", pos: "adverb" },
        { hanzi: "每天", pinyin: "měi tiān", english: "every day", pos: "time word" },
        { hanzi: "有时候", pinyin: "yǒushíhou", english: "sometimes", pos: "time word" },
        { hanzi: "周末", pinyin: "zhōumò", english: "weekend", pos: "time word" },
        { hanzi: "空闲时间", pinyin: "kòngxián shíjiān", english: "free time", pos: "noun phrase" },
        {
          hanzi: "一起",
          pinyin: "yìqǐ",
          english: "together",
          pos: "adverb",
          example: { hanzi: "我们一起唱歌。", pinyin: "Wǒmen yìqǐ chàng gē.", english: "We sing together." },
        },
        { hanzi: "跟", pinyin: "gēn", english: "with", pos: "preposition" },
        { hanzi: "去", pinyin: "qù", english: "to go", pos: "verb" },
        { hanzi: "朋友", pinyin: "péngyou", english: "friend", pos: "noun" },
        { hanzi: "好啊", pinyin: "hǎo a", english: "sure! great!", pos: "interjection" },
      ],
      patterns: [
        {
          pattern: "Subject + time word + verb phrase",
          example: { hanzi: "我周末常常游泳。", pinyin: "Wǒ zhōumò chángcháng yóuyǒng.", english: "I often swim at the weekend." },
          note: "Two time words can stack (周末 + 常常) — both still before the verb.",
        },
        {
          pattern: "跟 + person + 一起 + verb",
          example: { hanzi: "我跟弟弟一起玩电脑游戏。", pinyin: "Wǒ gēn dìdi yìqǐ wán diànnǎo yóuxì.", english: "I play computer games with my little brother." },
        },
        {
          pattern: "我们去…，好吗？",
          example: { hanzi: "我们去看电影，好吗？", pinyin: "Wǒmen qù kàn diànyǐng, hǎo ma?", english: "Let's go and see a film, okay?" },
          note: "State the plan, then 好吗？ turns it into a friendly invitation.",
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "爱好", pinyin: "àihào", english: "hobby" },
      { hanzi: "打篮球", pinyin: "dǎ lánqiú", english: "to play basketball" },
      { hanzi: "打网球", pinyin: "dǎ wǎngqiú", english: "to play tennis" },
      { hanzi: "打乒乓球", pinyin: "dǎ pīngpāngqiú", english: "to play table tennis" },
      { hanzi: "打羽毛球", pinyin: "dǎ yǔmáoqiú", english: "to play badminton" },
      { hanzi: "踢足球", pinyin: "tī zúqiú", english: "to play football" },
      { hanzi: "玩电脑游戏", pinyin: "wán diànnǎo yóuxì", english: "to play computer games" },
      { hanzi: "弹钢琴", pinyin: "tán gāngqín", english: "to play the piano" },
      { hanzi: "弹吉他", pinyin: "tán jítā", english: "to play the guitar" },
      { hanzi: "拉小提琴", pinyin: "lā xiǎotíqín", english: "to play the violin" },
      { hanzi: "看书", pinyin: "kàn shū", english: "to read (books)" },
      { hanzi: "看电视", pinyin: "kàn diànshì", english: "to watch TV" },
      { hanzi: "看电影", pinyin: "kàn diànyǐng", english: "to watch a film" },
      { hanzi: "听音乐", pinyin: "tīng yīnyuè", english: "to listen to music" },
      { hanzi: "唱歌", pinyin: "chàng gē", english: "to sing" },
      { hanzi: "跳舞", pinyin: "tiào wǔ", english: "to dance" },
      { hanzi: "画画", pinyin: "huà huà", english: "to draw, to paint" },
      { hanzi: "游泳", pinyin: "yóuyǒng", english: "to swim" },
      { hanzi: "跑步", pinyin: "pǎo bù", english: "to run, go running" },
      { hanzi: "上网", pinyin: "shàng wǎng", english: "to go online" },
      { hanzi: "拍照", pinyin: "pāi zhào", english: "to take photos" },
      { hanzi: "喜欢", pinyin: "xǐhuan", english: "to like" },
      { hanzi: "爱", pinyin: "ài", english: "to love" },
      { hanzi: "最喜欢", pinyin: "zuì xǐhuan", english: "to like most, favourite" },
      { hanzi: "不太", pinyin: "bú tài", english: "not very, not really" },
      { hanzi: "讨厌", pinyin: "tǎoyàn", english: "to hate" },
      { hanzi: "对…感兴趣", pinyin: "duì… gǎn xìngqù", english: "to be interested in…" },
      { hanzi: "会", pinyin: "huì", english: "can, know how to" },
      { hanzi: "可是", pinyin: "kěshì", english: "but" },
      { hanzi: "常常", pinyin: "chángcháng", english: "often" },
      { hanzi: "每天", pinyin: "měi tiān", english: "every day" },
      { hanzi: "有时候", pinyin: "yǒushíhou", english: "sometimes" },
      { hanzi: "周末", pinyin: "zhōumò", english: "weekend" },
      { hanzi: "空闲时间", pinyin: "kòngxián shíjiān", english: "free time" },
      { hanzi: "一起", pinyin: "yìqǐ", english: "together" },
    ],
    patterns: [
      {
        pattern: "喜欢 + verb phrase",
        example: { hanzi: "我喜欢听音乐。", pinyin: "Wǒ xǐhuan tīng yīnyuè.", english: "I like listening to music." },
      },
      {
        pattern: "Subject + time word + verb",
        example: { hanzi: "我每天跑步。", pinyin: "Wǒ měi tiān pǎo bù.", english: "I run every day." },
      },
      {
        pattern: "会 + verb phrase",
        example: { hanzi: "我会弹吉他。", pinyin: "Wǒ huì tán jítā.", english: "I can play the guitar." },
      },
      {
        pattern: "跟 + person + 一起 + verb",
        example: { hanzi: "我跟朋友一起踢足球。", pinyin: "Wǒ gēn péngyou yìqǐ tī zúqiú.", english: "I play football with my friends." },
      },
      {
        pattern: "我们去…，好吗？",
        example: { hanzi: "我们去打网球，好吗？", pinyin: "Wǒmen qù dǎ wǎngqiú, hǎo ma?", english: "Let's go and play tennis, okay?" },
      },
      {
        pattern: "对 + topic + 感兴趣",
        example: { hanzi: "我对音乐感兴趣。", pinyin: "Wǒ duì yīnyuè gǎn xìngqù.", english: "I'm interested in music." },
      },
    ],
    mnemonics: [
      { hanzi: "打", tip: "The left side is 扌, the hand radical — 打 sports are the ones your hands do." },
      { hanzi: "踢", tip: "The left side is 足, the foot radical — 踢 is kicking, so football is 踢足球." },
      { hanzi: "弹", tip: "弹 contains 弓 (bow). Fingers spring off strings and keys like a bowstring — pianos and guitars take 弹." },
      { hanzi: "会", tip: "人 (person) over 云 (cloud) — a person who has learned a skill floats above the clouds: 会 = 'can'." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "hob-quiz-mcq-q01",
        question: "Which verb goes with {{篮球|lánqiú|basketball}}?",
        options: ["{{打|dǎ}}", "{{踢|tī}}", "{{弹|tán}}", "{{拉|lā}}"],
        answerIndex: 0,
        explanation:
          "Basketball is played with the hands, so it takes {{打|dǎ|to hit}}: 打篮球. 踢 is kicking (football), 弹 and 拉 are for instruments.",
        guideRef: "Why 'play' is five different verbs",
        difficulty: "warmup",
        strategy: "Ask: what does the body actually do?",
      },
      {
        id: "hob-quiz-mcq-q02",
        question: "What does {{看电影|kàn diànyǐng}} mean?",
        options: ["To read books", "To watch TV", "To watch a film", "To listen to music"],
        answerIndex: 2,
        explanation:
          "{{电影|diànyǐng}} is 'film' (literally 'electric shadow'), so 看电影 = watch a film. 看书 is reading and 看电视 is watching TV — same verb 看, different objects.",
        guideRef: "看, 听, 唱, 跳: everyday pastimes in verb + object pairs",
        difficulty: "warmup",
      },
      {
        id: "hob-quiz-mcq-q03",
        question:
          "You've never been taught the word for volleyball: {{排球|páiqiú}}. It's hit with the hands. Which is correct?",
        options: [
          "{{踢排球|tī páiqiú}}",
          "{{打排球|dǎ páiqiú}}",
          "{{弹排球|tán páiqiú}}",
          "{{拉排球|lā páiqiú}}",
        ],
        answerIndex: 1,
        explanation:
          "Hands hit the ball, so volleyball joins the {{打|dǎ}} family: 打排球. The verb system lets you predict words you were never taught — that's the whole point of learning the logic instead of a list.",
        guideRef: "Why 'play' is five different verbs",
        difficulty: "core",
        hints: [
          "Don't translate 'play' — ask what your body does in volleyball.",
          "Hands or racket striking a ball → which verb family?",
        ],
        strategy: "Predict the verb for a new activity, then check",
      },
      {
        id: "hob-quiz-mcq-q04",
        question:
          "The cello ({{大提琴|dàtíqín}}) is played by pulling a bow across the strings. Which verb must it take?",
        options: ["{{弹|tán}}", "{{打|dǎ}}", "{{拉|lā}}", "{{玩|wán}}"],
        answerIndex: 2,
        explanation:
          "A bow is *pulled* across the strings, exactly like the violin — so 拉大提琴, matching {{拉小提琴|lā xiǎotíqín}}. 弹 is only for plucked strings and keys.",
        guideRef: "Why 'play' is five different verbs",
        difficulty: "core",
        hints: [
          "Which instrument that you already know is also played with a bow?",
          "The violin verb literally means 'to pull'.",
        ],
      },
      {
        id: "hob-quiz-mcq-q05",
        question: "Which sentence correctly says 'I don't really like running'?",
        options: [
          "{{我不太喜欢跑步。|Wǒ bú tài xǐhuan pǎo bù.}}",
          "{{我太不喜欢跑步。|Wǒ tài bù xǐhuan pǎo bù.}}",
          "{{我不喜欢太跑步。|Wǒ bù xǐhuan tài pǎo bù.}}",
          "{{我讨厌跑步。|Wǒ tǎoyàn pǎo bù.}}",
        ],
        answerIndex: 0,
        explanation:
          "{{不太|bú tài|not very}} sits as one unit directly before 喜欢: 我不太喜欢跑步. Option 4 is a real sentence but far too strong — 讨厌 means 'hate', not 'don't really like'.",
        guideRef: "The preference ladder: from 讨厌 to 最喜欢",
        difficulty: "core",
        hints: [
          "不太 is a fixed pair — keep the two characters together.",
          "The softener goes right in front of the feeling verb.",
        ],
      },
      {
        id: "hob-quiz-mcq-q06",
        question:
          "{{她会游泳，可是她不喜欢游泳。|Tā huì yóuyǒng, kěshì tā bù xǐhuan yóuyǒng.}} What does this tell us?",
        options: [
          "She likes swimming but can't swim",
          "She can swim but doesn't like swimming",
          "She can't swim and hates it",
          "She loves swimming and swims well",
        ],
        answerIndex: 1,
        explanation:
          "{{会|huì}} = can (a learned skill), {{可是|kěshì}} = but, {{不喜欢|bù xǐhuan}} = doesn't like. Ability and enjoyment are independent in Chinese — you can 会 something you don't enjoy.",
        guideRef: "会: skills you have learned (and why it isn't 喜欢)",
        difficulty: "core",
        hints: [
          "会 is about skill, 喜欢 is about feeling.",
          "可是 flips the direction: '…, but …'.",
        ],
        strategy: "会 = learned skill, 喜欢 = feeling — test each sentence against both",
      },
      {
        id: "hob-quiz-mcq-q07",
        question: "Which is the correct way to say 'I play football at the weekend'?",
        options: [
          "{{我踢足球周末。|Wǒ tī zúqiú zhōumò.}}",
          "{{周末我踢足球在。|Zhōumò wǒ tī zúqiú zài.}}",
          "{{我周末踢足球。|Wǒ zhōumò tī zúqiú.}}",
          "{{我踢周末足球。|Wǒ tī zhōumò zúqiú.}}",
        ],
        answerIndex: 2,
        explanation:
          "Time words come **before the verb**: 我 + 周末 + 踢足球. English puts 'at the weekend' at the end, but copying that order into Chinese (option 1) is always wrong.",
        guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
        difficulty: "core",
        hints: [
          "Frame first: who and when, then the action.",
          "周末 must come somewhere before 踢.",
        ],
        strategy: "Frame first: when and who-with before the verb",
      },
      {
        id: "hob-quiz-mcq-q08",
        question:
          "Read the dialogue. A: {{我们去打乒乓球，好吗？|Wǒmen qù dǎ pīngpāngqiú, hǎo ma?}} B: {{好啊！|Hǎo a!}} What just happened?",
        options: [
          "A asked if B can play table tennis; B said yes",
          "A invited B to play table tennis; B accepted",
          "A asked what B's hobby is; B said table tennis",
          "A invited B to play badminton; B refused",
        ],
        answerIndex: 1,
        explanation:
          "我们去… + {{好吗|hǎo ma}} is an invitation ('let's go…, okay?'), and {{好啊|hǎo a}} is an enthusiastic yes. An ability question would use 会 (你会打乒乓球吗？).",
        guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
        difficulty: "core",
        hints: [
          "好吗 at the end of a plan = 'shall we?'",
          "There's no 会 here, so it's not about ability.",
        ],
      },
      {
        id: "hob-quiz-mcq-q09",
        question:
          "Spot the error: {{我很喜欢弹小提琴。|Wǒ hěn xǐhuan tán xiǎotíqín.}}",
        options: [
          "很 should be 最",
          "弹 should be 拉",
          "喜欢 should be 会",
          "Nothing is wrong",
        ],
        answerIndex: 1,
        explanation:
          "The violin is a **bowed** instrument, so it takes {{拉|lā|to pull}}: 拉小提琴. 弹 is for plucked strings and keyboards (吉他, 钢琴). 很喜欢 ('really like') is perfectly fine Chinese.",
        guideRef: "Why 'play' is five different verbs",
        difficulty: "challenge",
        hints: [
          "The grammar is fine — check the verb-instrument match.",
          "How is a violin physically played: plucked or bowed?",
        ],
        strategy: "Ask: what does the body actually do?",
      },
      {
        id: "hob-quiz-mcq-q10",
        question:
          "Challenge — decode a sentence combining three patterns: {{他周末最喜欢跟朋友一起玩电脑游戏。|Tā zhōumò zuì xǐhuan gēn péngyou yìqǐ wán diànnǎo yóuxì.}}",
        options: [
          "His friends' favourite weekend activity is computer games",
          "He sometimes plays computer games with friends at the weekend",
          "At the weekend his favourite thing is playing computer games with friends",
          "Every day he plays computer games with his friends",
        ],
        answerIndex: 2,
        explanation:
          "Peel the layers: 他 (he) + 周末 (time, before the verb) + 最喜欢 (likes most) + 跟朋友一起 (with friends) + 玩电脑游戏 (play computer games). 最喜欢 belongs to 他, and 周末 is 'at the weekend', not 'sometimes' or 'every day'.",
        difficulty: "challenge",
        hints: [
          "Chop it into chunks: 他 / 周末 / 最喜欢 / 跟朋友一起 / 玩电脑游戏.",
          "Who does 最喜欢 belong to — him or the friends?",
        ],
        strategy: "Frame first: when and who-with before the verb",
      },
    ],
    qa: [
      {
        id: "hob-quiz-qa-q01",
        question: "Translate into Chinese: 'I like listening to music.' (Characters or pinyin.)",
        modelAnswer: "{{我喜欢听音乐。|Wǒ xǐhuan tīng yīnyuè.|I like listening to music.}}",
        markScheme: [
          "Subject {{我|wǒ}}",
          "Verb {{喜欢|xǐhuan}} directly after the subject",
          "Verb phrase {{听音乐|tīng yīnyuè}} straight after 喜欢 — no extra words",
        ],
        commonError:
          "Trying to translate '-ing' with an extra word. Chinese verbs never change form: 喜欢 + 听音乐 is complete.",
        guideRef: "The preference ladder: from 讨厌 to 最喜欢",
        difficulty: "warmup",
        hints: ["Pattern: 我喜欢 + verb phrase."],
      },
      {
        id: "hob-quiz-qa-q02",
        question:
          "A friend asks: {{你会弹钢琴吗？|Nǐ huì tán gāngqín ma?}} Reply in Chinese saying you can't play the piano, but you can play the guitar.",
        modelAnswer:
          "{{我不会弹钢琴，可是我会弹吉他。|Wǒ bú huì tán gāngqín, kěshì wǒ huì tán jítā.|I can't play the piano, but I can play the guitar.}}",
        markScheme: [
          "Negative ability {{不会|bú huì}} + 弹钢琴",
          "Linking word {{可是|kěshì|but}}",
          "Positive ability {{会|huì}} + 弹吉他",
          "Both instruments take the verb {{弹|tán}}",
        ],
        commonError:
          "Using 不喜欢 instead of 不会 — the question asks about ability (会), not enjoyment. Also remember the tone: bú huì, not bù huì.",
        guideRef: "会: skills you have learned (and why it isn't 喜欢)",
        difficulty: "core",
        hints: [
          "Echo the question's verb: 会 / 不会 + instrument phrase.",
          "Join the two halves with 可是.",
        ],
        solutions: [
          {
            label: "Echo the question (recommended)",
            steps: [
              "The question 你会弹钢琴吗 contains the answer skeleton: 你会弹钢琴.",
              "Swap 你→我 and negate: 我不会弹钢琴.",
              "Add the contrast with 可是, reusing the same shape: 可是我会弹吉他.",
            ],
          },
          {
            label: "Build from the pattern",
            steps: [
              "Pattern: subject + 会/不会 + verb phrase.",
              "Half 1: 我 + 不会 + 弹钢琴. Half 2: 我 + 会 + 弹吉他.",
              "Glue with 可是: 我不会弹钢琴，可是我会弹吉他。",
            ],
          },
        ],
      },
      {
        id: "hob-quiz-qa-q03",
        question:
          "Read this message and answer in English: {{你好！我叫王明。我的爱好是打羽毛球。我周末常常跟朋友一起打。|Nǐ hǎo! Wǒ jiào Wáng Míng. Wǒ de àihào shì dǎ yǔmáoqiú. Wǒ zhōumò chángcháng gēn péngyou yìqǐ dǎ.}} (a) What is Wang Ming's hobby? (b) When does he do it? (c) Who with?",
        modelAnswer:
          "(a) Playing badminton. (b) At the weekend — and 常常 tells us he does it often. (c) Together with his friends (跟朋友一起).",
        markScheme: [
          "Hobby: badminton ({{打羽毛球|dǎ yǔmáoqiú}})",
          "Time: at the weekend ({{周末|zhōumò}}), often ({{常常|chángcháng}})",
          "Company: with friends ({{跟朋友一起|gēn péngyou yìqǐ}})",
        ],
        commonError:
          "Missing 常常 — 'often' is part of the answer to (b). Time and frequency words hide before the verb, so scan there first.",
        guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
        difficulty: "core",
        hints: [
          "All the when/who-with information sits before the final verb 打.",
          "跟…一起 marks who he does it with.",
        ],
      },
      {
        id: "hob-quiz-qa-q04",
        question:
          "Write 2–3 sentences in Chinese about your own hobby: say what your favourite activity is, how often you do it, and why you like it. (Characters or pinyin.)",
        modelAnswer:
          "{{我最喜欢游泳。|Wǒ zuì xǐhuan yóuyǒng.|My favourite thing is swimming.}} {{我每天游泳。|Wǒ měi tiān yóuyǒng.|I swim every day.}} {{我喜欢游泳，因为很有意思。|Wǒ xǐhuan yóuyǒng, yīnwèi hěn yǒu yìsi.|I like swimming because it's really fun.}}",
        markScheme: [
          "Favourite stated with {{最喜欢|zuì xǐhuan}} + activity",
          "Frequency word ({{每天|měi tiān}} / {{常常|chángcháng}} / {{有时候|yǒushíhou}} / {{周末|zhōumò}}) placed before the verb",
          "Reason introduced with {{因为|yīnwèi}}",
          "Correct activity verb (打/踢/玩/弹/拉/看/听…)",
        ],
        commonError:
          "Putting the frequency word after the verb (我游泳每天 ✗) — time always comes before the verb.",
        guideRef: "The preference ladder: from 讨厌 to 最喜欢",
        difficulty: "core",
        hints: [
          "Sentence 1: 我最喜欢 + activity. Sentence 2: 我 + frequency + activity.",
          "Reason: …，因为很有意思。",
        ],
        solutions: [
          {
            label: "Three-sentence skeleton",
            steps: [
              "Favourite: 我最喜欢 + activity (e.g. 我最喜欢打篮球).",
              "Frequency: 我 + time word + activity (e.g. 我周末常常打篮球).",
              "Reason: 我喜欢 + activity + ，因为很有意思.",
            ],
          },
          {
            label: "Compress into two sentences",
            steps: [
              "Merge favourite and frequency: 我周末最喜欢打篮球.",
              "Add the reason clause: 我喜欢打篮球，因为很有意思。",
              "Check: every time word is before its verb, and the activity verb matches the action.",
            ],
          },
        ],
      },
      {
        id: "hob-quiz-qa-q05",
        question:
          "Grammar explanation: your classmate asks why Chinese says {{打篮球|dǎ lánqiú}} but {{踢足球|tī zúqiú}}, when English uses 'play' for both. Explain the rule, and predict which verb the drum ({{鼓|gǔ}}, hit with sticks) should take.",
        modelAnswer:
          "Chinese picks the verb by the physical action, not by a general word like 'play'. Basketball is hit with the hands, so it takes {{打|dǎ|to hit}}; football is kicked, so it takes {{踢|tī|to kick}}. The same logic gives 弹 for plucked/keyboard instruments and 拉 for bowed ones. A drum is struck, like a hand/racket action — so it must be 打鼓.",
        markScheme: [
          "Verb chosen by the physical action of the body",
          "打 = hit (hands/racket) → 打篮球",
          "踢 = kick → 踢足球",
          "Prediction: drums are struck → {{打鼓|dǎ gǔ}}",
        ],
        commonError:
          "Answering 'that's just how Chinese says it' — the examiner wants the *system*: verb = body action, which is what makes new words predictable.",
        guideRef: "Why 'play' is five different verbs",
        difficulty: "challenge",
        strategy: "Ask: what does the body actually do?",
        hints: [
          "What do 打, 踢, 弹, 拉 each literally mean as actions?",
          "How do you physically play a drum?",
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "hob-mcq-a",
        title: "Paper A — Sports & music",
        description: "The 打/踢/弹/拉 verb system, ability with 会, and reading skill sentences.",
        questions: [
          {
            id: "hob-mcq-a-q01",
            question: "What does {{踢足球|tī zúqiú}} mean?",
            options: ["To play basketball", "To play football", "To play tennis", "To run"],
            answerIndex: 1,
            explanation:
              "{{踢|tī}} = kick and {{足球|zúqiú}} = football (literally 'foot ball') — the one big sport you kick.",
            guideRef: "Why 'play' is five different verbs",
            difficulty: "warmup",
          },
          {
            id: "hob-mcq-a-q02",
            question: "Which of these takes the verb {{拉|lā}}?",
            options: [
              "{{钢琴|gāngqín|piano}}",
              "{{吉他|jítā|guitar}}",
              "{{小提琴|xiǎotíqín|violin}}",
              "{{乒乓球|pīngpāngqiú|table tennis}}",
            ],
            answerIndex: 2,
            explanation:
              "拉 means 'to pull' — you pull a bow across violin strings: 拉小提琴. Piano and guitar take 弹, table tennis takes 打.",
            guideRef: "Why 'play' is five different verbs",
            difficulty: "warmup",
          },
          {
            id: "hob-mcq-a-q03",
            question: "{{打羽毛球|dǎ yǔmáoqiú}} means…",
            options: ["To play badminton", "To play volleyball", "To play the piano", "To take photos"],
            answerIndex: 0,
            explanation:
              "{{羽毛|yǔmáo}} means 'feather' — a lovely clue, since shuttlecocks were made of feathers. 打羽毛球 = play badminton.",
            guideRef: "Why 'play' is five different verbs",
            difficulty: "warmup",
          },
          {
            id: "hob-mcq-a-q04",
            question: "Which sentence is correct?",
            options: [
              "{{我打足球。|Wǒ dǎ zúqiú.}}",
              "{{我踢足球。|Wǒ tī zúqiú.}}",
              "{{我弹足球。|Wǒ tán zúqiú.}}",
              "{{我拉足球。|Wǒ lā zúqiú.}}",
            ],
            answerIndex: 1,
            explanation:
              "Football is kicked, so only 踢足球 works. 打足球 is the classic slip when your brain autopilots on 'ball sport → 打' — football is the exception because feet, not hands, do the work.",
            guideRef: "Why 'play' is five different verbs",
            difficulty: "core",
            hints: ["Which body part plays football?"],
            strategy: "Ask: what does the body actually do?",
          },
          {
            id: "hob-mcq-a-q05",
            question:
              "The drum ({{鼓|gǔ}}) is struck with sticks. Predict its verb.",
            options: ["{{打|dǎ}}", "{{弹|tán}}", "{{拉|lā}}", "{{踢|tī}}"],
            answerIndex: 0,
            explanation:
              "Striking is 打's job — 打鼓 (play the drums). Even though a drum is an instrument, the action is hitting, not plucking or bowing. The action, not the category, chooses the verb.",
            guideRef: "Why 'play' is five different verbs",
            difficulty: "core",
            hints: [
              "Don't sort by 'instrument vs sport' — sort by movement.",
              "Sticks striking a surface is closest to which verb's meaning?",
            ],
            strategy: "Predict the verb for a new activity, then check",
          },
          {
            id: "hob-mcq-a-q06",
            question:
              "The electronic keyboard ({{电子琴|diànzǐqín}}) has keys like a piano. Which verb does it take?",
            options: ["{{打|dǎ}}", "{{踢|tī}}", "{{弹|tán}}", "{{拉|lā}}"],
            answerIndex: 2,
            explanation:
              "Keys are pressed by the fingers, just like 钢琴 — so 弹电子琴. Anything with keys or plucked strings joins the 弹 family.",
            guideRef: "Why 'play' is five different verbs",
            difficulty: "core",
            hints: ["It works exactly like a piano — which verb does 钢琴 take?"],
          },
          {
            id: "hob-mcq-a-q07",
            question:
              "{{她会打网球，也会打乒乓球。|Tā huì dǎ wǎngqiú, yě huì dǎ pīngpāngqiú.}} What do we learn?",
            options: [
              "She likes tennis more than table tennis",
              "She can play tennis and also table tennis",
              "She plays tennis every day",
              "She can play tennis but not table tennis",
            ],
            answerIndex: 1,
            explanation:
              "会 = can, and {{也|yě|also}} adds the second skill: she can play both. Nothing here mentions liking, frequency, or inability.",
            guideRef: "会: skills you have learned (and why it isn't 喜欢)",
            difficulty: "core",
            hints: ["也 means 'also' — it adds, it doesn't contrast."],
          },
          {
            id: "hob-mcq-a-q08",
            question:
              "Fill the gap: {{你|nǐ}} ___ {{弹钢琴吗？|tán gāngqín ma?}} (Can you play the piano?)",
            options: ["{{会|huì}}", "{{是|shì}}", "{{很|hěn}}", "{{去|qù}}"],
            answerIndex: 0,
            explanation:
              "Asking about a learned skill needs {{会|huì}}: 你会弹钢琴吗？ 是 is 'to be', 很 is 'very', 去 is 'to go' — none expresses ability.",
            guideRef: "会: skills you have learned (and why it isn't 喜欢)",
            difficulty: "core",
            hints: ["Which word means 'can / know how to'?"],
          },
          {
            id: "hob-mcq-a-q09",
            question: "Odd one out: which of these does NOT take {{打|dǎ}}?",
            options: [
              "{{篮球|lánqiú|basketball}}",
              "{{网球|wǎngqiú|tennis}}",
              "{{足球|zúqiú|football}}",
              "{{羽毛球|yǔmáoqiú|badminton}}",
            ],
            answerIndex: 2,
            explanation:
              "Basketball, tennis and badminton are all hand/racket sports (打). Football is kicked — 踢足球. The 球 in the name doesn't decide the verb; the body action does.",
            guideRef: "Why 'play' is five different verbs",
            difficulty: "core",
            hints: ["One of these is played with the feet."],
            strategy: "Ask: what does the body actually do?",
          },
          {
            id: "hob-mcq-a-q10",
            question: "How do you say 'I can swim'?",
            options: [
              "{{我会游泳。|Wǒ huì yóuyǒng.}}",
              "{{我是游泳。|Wǒ shì yóuyǒng.}}",
              "{{我游泳会。|Wǒ yóuyǒng huì.}}",
              "{{我喜欢游泳。|Wǒ xǐhuan yóuyǒng.}}",
            ],
            answerIndex: 0,
            explanation:
              "会 goes directly before the skill: 我会游泳. 我是游泳 wrongly uses 'to be'; 我游泳会 breaks the word order; 我喜欢游泳 says you *like* it, not that you *can* do it.",
            guideRef: "会: skills you have learned (and why it isn't 喜欢)",
            difficulty: "core",
            hints: ["Subject + 会 + verb phrase."],
          },
          {
            id: "hob-mcq-a-q11",
            question:
              "Challenge: the guzheng ({{古筝|gǔzhēng}}) is a Chinese zither whose strings you pluck with your fingertips. Its verb must be…",
            options: ["{{拉|lā}}", "{{弹|tán}}", "{{打|dǎ}}", "{{唱|chàng}}"],
            answerIndex: 1,
            explanation:
              "Plucked strings belong to the {{弹|tán}} family, like the guitar: 弹古筝. 拉 would need a bow, 打 a strike, and 唱 is singing. You just classified a traditional Chinese instrument you'd never met.",
            difficulty: "challenge",
            hints: [
              "Ignore that it looks exotic — what do the fingers do to the strings?",
              "Plucking is the same action as which instrument you already know?",
            ],
            strategy: "Predict the verb for a new activity, then check",
          },
          {
            id: "hob-mcq-a-q12",
            question:
              "Spot the error: {{我最喜欢拉吉他。|Wǒ zuì xǐhuan lā jítā.}}",
            options: [
              "最 is in the wrong place",
              "喜欢 cannot take a verb phrase",
              "拉 should be 弹",
              "吉他 should come before 拉",
            ],
            answerIndex: 2,
            explanation:
              "Guitar strings are plucked, not bowed, so it must be {{弹吉他|tán jítā}}. Everything else is fine: 最喜欢 + verb phrase is exactly the right pattern.",
            guideRef: "Why 'play' is five different verbs",
            difficulty: "challenge",
            hints: [
              "The preference grammar is correct — inspect the instrument verb.",
              "拉 needs a bow. Does a guitar have one?",
            ],
          },
          {
            id: "hob-mcq-a-q13",
            question:
              "Challenge: {{他不会踢足球，可是他常常看足球比赛。|Tā bú huì tī zúqiú, kěshì tā chángcháng kàn zúqiú bǐsài.}} ({{比赛|bǐsài}} = match) What's the best summary?",
            options: [
              "He plays football often but never watches it",
              "He can't play football, but he often watches football matches",
              "He hates football and never watches it",
              "He can play football and sometimes watches matches",
            ],
            answerIndex: 1,
            explanation:
              "不会踢足球 = can't play (no skill), 可是 = but, 常常看…比赛 = often watches matches. Being unable to play doesn't stop him being a fan — 会 and enjoyment are separate ideas.",
            guideRef: "会: skills you have learned (and why it isn't 喜欢)",
            difficulty: "challenge",
            hints: [
              "Split at 可是 and translate each half separately.",
              "常常 tells you the frequency of the second half.",
            ],
          },
        ],
      },
      {
        id: "hob-mcq-b",
        title: "Paper B — Screens, weekends & invitations",
        description: "Pastimes, preferences, time-word order and invitation dialogues.",
        questions: [
          {
            id: "hob-mcq-b-q01",
            question: "What does {{上网|shàng wǎng}} mean?",
            options: ["To go online", "To watch TV", "To go running", "To play chess"],
            answerIndex: 0,
            explanation:
              "Literally 'go up onto the net' — 上网 = go online / surf the internet.",
            guideRef: "看, 听, 唱, 跳: everyday pastimes in verb + object pairs",
            difficulty: "warmup",
          },
          {
            id: "hob-mcq-b-q02",
            question: "{{周末|zhōumò}} means…",
            options: ["Every day", "Evening", "Weekend", "Free time"],
            answerIndex: 2,
            explanation:
              "周 = week, 末 = end: 'week-end'. Chinese builds it from exactly the same two ideas as English.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "warmup",
          },
          {
            id: "hob-mcq-b-q03",
            question: "Which question asks about someone's hobbies?",
            options: [
              "{{你叫什么名字？|Nǐ jiào shénme míngzi?}}",
              "{{你有什么爱好？|Nǐ yǒu shénme àihào?}}",
              "{{你多大？|Nǐ duō dà?}}",
              "{{你好吗？|Nǐ hǎo ma?}}",
            ],
            answerIndex: 1,
            explanation:
              "{{爱好|àihào}} = hobby, so 你有什么爱好？ = 'what hobbies do you have?'. The others ask name, age and how you are.",
            guideRef: "The preference ladder: from 讨厌 to 最喜欢",
            difficulty: "warmup",
          },
          {
            id: "hob-mcq-b-q04",
            question: "Which sentence correctly says 'I often watch TV'?",
            options: [
              "{{我看电视常常。|Wǒ kàn diànshì chángcháng.}}",
              "{{常常我看电视吗。|Chángcháng wǒ kàn diànshì ma.}}",
              "{{我看常常电视。|Wǒ kàn chángcháng diànshì.}}",
              "{{我常常看电视。|Wǒ chángcháng kàn diànshì.}}",
            ],
            answerIndex: 3,
            explanation:
              "常常 is a frequency word, so it lives before the verb: 我 + 常常 + 看电视. Options 1 and 3 copy English word order into the wrong slots.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "core",
            hints: ["Frequency words behave like time words: before the verb."],
            strategy: "Frame first: when and who-with before the verb",
          },
          {
            id: "hob-mcq-b-q05",
            question:
              "{{我有时候画画，有时候拍照。|Wǒ yǒushíhou huà huà, yǒushíhou pāi zhào.}} What does {{有时候|yǒushíhou}} mean here?",
            options: ["Always", "Sometimes", "Never", "At the weekend"],
            answerIndex: 1,
            explanation:
              "有时候 = 'sometimes' (literally 'there-are-times'). Doubled up like this it means 'sometimes…, other times…': sometimes I draw, sometimes I take photos.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "core",
            hints: ["Break it down: 有 (there are) + 时候 (times)."],
          },
          {
            id: "hob-mcq-b-q06",
            question: "How do you say 'I play computer games with my friends'?",
            options: [
              "{{我跟朋友一起玩电脑游戏。|Wǒ gēn péngyou yìqǐ wán diànnǎo yóuxì.}}",
              "{{我玩电脑游戏跟朋友一起。|Wǒ wán diànnǎo yóuxì gēn péngyou yìqǐ.}}",
              "{{跟我朋友玩一起电脑游戏。|Gēn wǒ péngyou wán yìqǐ diànnǎo yóuxì.}}",
              "{{我一起玩电脑游戏跟朋友。|Wǒ yìqǐ wán diànnǎo yóuxì gēn péngyou.}}",
            ],
            answerIndex: 0,
            explanation:
              "The whole 'who-with' frame — {{跟朋友一起|gēn péngyou yìqǐ}} — comes before the verb 玩, just like time words do. English tacks 'with my friends' on the end; Chinese never does.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "core",
            hints: [
              "跟…一起 is part of the frame — set the frame before the action.",
              "Nothing comes after 玩电脑游戏.",
            ],
          },
          {
            id: "hob-mcq-b-q07",
            question:
              "A: {{我们周末去看电影，好吗？|Wǒmen zhōumò qù kàn diànyǐng, hǎo ma?}} B: {{好啊！|Hǎo a!}} When are they going to the cinema?",
            options: ["Tonight", "Every day", "At the weekend", "Tomorrow morning"],
            answerIndex: 2,
            explanation:
              "The time word {{周末|zhōumò}} sits before the verb phrase 去看电影 — they're going at the weekend, and 好啊 confirms B is in.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "core",
            hints: ["Scan the words before 去 for the time."],
          },
          {
            id: "hob-mcq-b-q08",
            question:
              "{{我不太喜欢跑步。|Wǒ bú tài xǐhuan pǎo bù.}} What is the speaker's feeling about running?",
            options: [
              "They absolutely hate it",
              "They don't really like it (mild dislike)",
              "They quite like it",
              "It's their favourite",
            ],
            answerIndex: 1,
            explanation:
              "{{不太|bú tài}} = 'not very' — a polite, mild dislike, several rungs above {{讨厌|tǎoyàn|hate}} on the preference ladder. Chinese speakers often soften opinions this way.",
            guideRef: "The preference ladder: from 讨厌 to 最喜欢",
            difficulty: "core",
            hints: ["Where does 不太喜欢 sit on the ladder compared with 讨厌?"],
          },
          {
            id: "hob-mcq-b-q09",
            question:
              "{{我对电脑游戏感兴趣。|Wǒ duì diànnǎo yóuxì gǎn xìngqù.}} means…",
            options: [
              "I'm interested in computer games",
              "I play computer games every day",
              "Computer games are bad for me",
              "I can make computer games",
            ],
            answerIndex: 0,
            explanation:
              "The pattern 对 + topic + {{感兴趣|gǎn xìngqù}} means 'to be interested in' — 对 points the interest at 电脑游戏.",
            guideRef: "The preference ladder: from 讨厌 to 最喜欢",
            difficulty: "core",
            hints: ["感兴趣 = 'feel interest'; 对 marks what the interest is aimed at."],
          },
          {
            id: "hob-mcq-b-q10",
            question:
              "Your friend asks: {{我们去游泳，好吗？|Wǒmen qù yóuyǒng, hǎo ma?}} You can't swim. Which reply is honest and makes sense?",
            options: [
              "{{好啊！|Hǎo a!}}",
              "{{我不会游泳。|Wǒ bú huì yóuyǒng.}}",
              "{{我十三岁。|Wǒ shísān suì.}}",
              "{{再见！|Zàijiàn!}}",
            ],
            answerIndex: 1,
            explanation:
              "我不会游泳 ('I can't swim') explains why you must turn the invitation down. 好啊 would accept it, and the other two answer questions nobody asked.",
            guideRef: "会: skills you have learned (and why it isn't 喜欢)",
            difficulty: "core",
            hints: [
              "You need to talk about ability, not age or goodbyes.",
              "Negative of 会 is 不会 (bú huì).",
            ],
          },
          {
            id: "hob-mcq-b-q11",
            question:
              "Challenge — spot the error in this sentence written by a student: {{我看电视周末。|Wǒ kàn diànshì zhōumò.}}",
            options: [
              "看 should be 听",
              "周末 must move to before 看电视",
              "电视 should be 电影",
              "Nothing is wrong",
            ],
            answerIndex: 1,
            explanation:
              "Time words can never trail after the verb in Chinese. The fix: {{我周末看电视。|Wǒ zhōumò kàn diànshì.}} The student copied English order ('I watch TV at the weekend') word for word.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "challenge",
            hints: [
              "Read it as a film script: has the scene been set before the action?",
              "Where do 每天, 常常 and 周末 always live?",
            ],
            strategy: "Frame first: when and who-with before the verb",
          },
          {
            id: "hob-mcq-b-q12",
            question:
              "Challenge: {{我周末常常跟妹妹一起唱歌，有时候也跳舞。|Wǒ zhōumò chángcháng gēn mèimei yìqǐ chàng gē, yǒushíhou yě tiào wǔ.}} ({{妹妹|mèimei}} = little sister) Which statement is TRUE?",
            options: [
              "The speaker often sings with their little sister at weekends",
              "The speaker's sister sings every day",
              "The speaker never dances",
              "The speaker sings alone on weekdays",
            ],
            answerIndex: 0,
            explanation:
              "Layer by layer: 周末 (weekends) + 常常 (often) + 跟妹妹一起 (with little sister) + 唱歌 (sing). The second clause adds that they sometimes (有时候) dance too — so 'never dances' is false.",
            difficulty: "challenge",
            hints: [
              "Chunk it: time + frequency + who-with + action.",
              "有时候也跳舞 rules one option out completely.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "hob-qa-a",
        title: "Paper A — Hobbies in writing",
        description: "Translation, reading comprehension and explaining the verb system.",
        questions: [
          {
            id: "hob-qa-a-q01",
            question: "Translate into Chinese: 'I like playing basketball.' (Characters or pinyin.)",
            modelAnswer: "{{我喜欢打篮球。|Wǒ xǐhuan dǎ lánqiú.|I like playing basketball.}}",
            markScheme: [
              "Subject {{我|wǒ}} + verb {{喜欢|xǐhuan}}",
              "Correct sport verb {{打|dǎ}} (hands → 打)",
              "Object {{篮球|lánqiú}} after 打",
            ],
            commonError:
              "Using 玩 or 踢 for basketball — hands play basketball, so it must be 打篮球.",
            guideRef: "Why 'play' is five different verbs",
            difficulty: "warmup",
            hints: ["喜欢 + verb phrase; pick the verb by body action."],
          },
          {
            id: "hob-qa-a-q02",
            question: "What does {{我最喜欢跳舞。|Wǒ zuì xǐhuan tiào wǔ.}} mean in English?",
            modelAnswer:
              "'My favourite thing is dancing' / 'I like dancing most of all.' {{最|zuì|most}} in front of 喜欢 marks the top of the preference ladder.",
            markScheme: [
              "喜欢 = like; {{最|zuì}} = most → favourite",
              "跳舞 = to dance",
              "Overall meaning: dancing is the speaker's favourite activity",
            ],
            commonError:
              "Translating 最喜欢 as just 'like' and losing the superlative — 最 is doing important work.",
            guideRef: "The preference ladder: from 讨厌 to 最喜欢",
            difficulty: "warmup",
            hints: ["最 turbo-charges the verb after it."],
          },
          {
            id: "hob-qa-a-q03",
            question:
              "Translate into Chinese: 'He can play the piano and can also play the guitar.' (Characters or pinyin.)",
            modelAnswer:
              "{{他会弹钢琴，也会弹吉他。|Tā huì tán gāngqín, yě huì tán jítā.|He can play the piano and can also play the guitar.}}",
            markScheme: [
              "Ability with {{会|huì}} before each skill",
              "{{也|yě|also}} before the second 会",
              "Both instruments take {{弹|tán}}",
            ],
            commonError:
              "Putting 也 at the end like English 'too' — 也 always goes before the verb: 也会弹吉他, never 会弹吉他也.",
            guideRef: "会: skills you have learned (and why it isn't 喜欢)",
            difficulty: "core",
            hints: [
              "Skeleton: 他会… ，也会… 。",
              "Piano and guitar are both plucked/keyed — same verb.",
            ],
            solutions: [
              {
                label: "Two clauses, one glue word",
                steps: [
                  "Clause 1: 他 + 会 + 弹钢琴.",
                  "Clause 2 reuses the subject silently: 也 + 会 + 弹吉他.",
                  "Join with a comma: 他会弹钢琴，也会弹吉他。",
                ],
              },
              {
                label: "Check with the verb system",
                steps: [
                  "Piano: keys pressed → 弹钢琴. Guitar: strings plucked → 弹吉他.",
                  "Ability word for learned skills is 会, placed before each verb phrase.",
                  "'Also' = 也, which must stand before 会, giving 也会弹吉他.",
                ],
              },
            ],
          },
          {
            id: "hob-qa-a-q04",
            question:
              "Read Li Mei's message and answer in English: {{你好！我叫李美。我的爱好是画画和听音乐。我有时候跟朋友一起去看电影。|Nǐ hǎo! Wǒ jiào Lǐ Měi. Wǒ de àihào shì huà huà hé tīng yīnyuè. Wǒ yǒushíhou gēn péngyou yìqǐ qù kàn diànyǐng.}} ({{和|hé}} = and) (a) Name both of Li Mei's hobbies. (b) How often does she go to the cinema? (c) Who does she go with?",
            modelAnswer:
              "(a) Drawing/painting (画画) and listening to music (听音乐). (b) Sometimes (有时候). (c) With her friends (跟朋友一起).",
            markScheme: [
              "Hobby 1: drawing/painting",
              "Hobby 2: listening to music",
              "Frequency: sometimes ({{有时候|yǒushíhou}})",
              "Company: friends ({{跟朋友一起|gēn péngyou yìqǐ}})",
            ],
            commonError:
              "Giving only one hobby — 和 links TWO hobbies, so (a) needs both for full marks.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "core",
            hints: [
              "和 works like 'and' between the two hobbies.",
              "The when and who-with both sit before 去看电影.",
            ],
          },
          {
            id: "hob-qa-a-q05",
            question:
              "A penpal asks: {{你喜欢做什么？|Nǐ xǐhuan zuò shénme?}} Reply in Chinese with TWO activities, using {{有时候|yǒushíhou}} or {{常常|chángcháng}} for at least one of them.",
            modelAnswer:
              "{{我常常打羽毛球，有时候看书。|Wǒ chángcháng dǎ yǔmáoqiú, yǒushíhou kàn shū.|I often play badminton, and sometimes I read.}}",
            markScheme: [
              "Two different activities with correct verbs",
              "At least one frequency word ({{常常|chángcháng}} / {{有时候|yǒushíhou}})",
              "Frequency word placed before its verb",
              "First person 我 as subject",
            ],
            commonError:
              "Answering with 是 ('I am…') — the question asks what you like DOING, so answer with verb phrases.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "core",
            hints: [
              "Shape: 我 + frequency + activity 1，+ frequency + activity 2.",
              "Check each activity's verb against the body-action rule.",
            ],
          },
          {
            id: "hob-qa-a-q06",
            question:
              "Grammar explanation: a classmate translates 'I play the piano' as {{我玩钢琴|wǒ wán gāngqín}} ✗. Explain why this is wrong, give the correct sentence, and state the rule that prevents this mistake.",
            modelAnswer:
              "玩 means 'to play around / have fun with' (toys, games) — it doesn't work for instruments. The piano's keys are pressed with the fingers, so the verb is {{弹|tán}}: {{我弹钢琴。|Wǒ tán gāngqín.}} The rule: Chinese chooses the 'play' verb by the physical action — 打 hit, 踢 kick, 玩 play around, 弹 pluck/press, 拉 bow — so English 'play' must be re-sorted by what the body does.",
            markScheme: [
              "玩 = play around with toys/games, not instruments",
              "Correct verb 弹 for keyboard instruments; corrected sentence 我弹钢琴",
              "Rule: the verb is chosen by the physical action, not by English 'play'",
            ],
            commonError:
              "Only correcting the sentence without stating the rule — the explanation mark comes from naming the body-action system.",
            guideRef: "Why 'play' is five different verbs",
            difficulty: "challenge",
            strategy: "Ask: what does the body actually do?",
            hints: [
              "What kinds of things CAN take 玩?",
              "What do fingers do on piano keys, and which verb names that action?",
            ],
          },
        ],
      },
      {
        id: "hob-qa-b",
        title: "Paper B — Weekends & invitations in writing",
        description: "Invitations, dialogues, free-time routines and word-order fixes.",
        questions: [
          {
            id: "hob-qa-b-q01",
            question:
              "Translate into English: {{我们去打羽毛球，好吗？|Wǒmen qù dǎ yǔmáoqiú, hǎo ma?}}",
            modelAnswer:
              "'Let's go and play badminton, okay?' / 'Shall we go and play badminton?' — a friendly invitation made by stating a plan and adding 好吗.",
            markScheme: [
              "我们去 = let's go / we go",
              "打羽毛球 = play badminton",
              "好吗 recognised as 'okay? / shall we?' (invitation)",
            ],
            commonError:
              "Translating 好吗 as 'is it good?' word-for-word — as a sentence tag it means 'okay? shall we?'.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "warmup",
            hints: ["Plan + 好吗？ = invitation."],
          },
          {
            id: "hob-qa-b-q02",
            question: "What does {{我每天上网。|Wǒ měi tiān shàng wǎng.}} mean in English?",
            modelAnswer: "'I go online every day.' 每天 (every day) sits before the verb 上网 (go online).",
            markScheme: [
              "每天 = every day",
              "上网 = go online / use the internet",
              "Natural English word order in the translation",
            ],
            commonError:
              "Translating 上网 literally as 'go up net' — idiomatically it means 'go online'.",
            guideRef: "看, 听, 唱, 跳: everyday pastimes in verb + object pairs",
            difficulty: "warmup",
          },
          {
            id: "hob-qa-b-q03",
            question:
              "Translate into Chinese: 'At the weekend I often go swimming with my friends.' (Characters or pinyin.)",
            modelAnswer:
              "{{我周末常常跟朋友一起去游泳。|Wǒ zhōumò chángcháng gēn péngyou yìqǐ qù yóuyǒng.|At the weekend I often go swimming with my friends.}}",
            markScheme: [
              "Time frame 周末 (+ 常常) before the verb",
              "{{跟朋友一起|gēn péngyou yìqǐ}} also before the verb",
              "Verb phrase (去)游泳 at the end",
              "Nothing trailing after the verb phrase",
            ],
            commonError:
              "Copying English order: 我去游泳跟朋友在周末 ✗ — every frame element (when, who-with) must come before the verb.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "core",
            hints: [
              "Order: who → when/how often → who-with → action.",
              "'With my friends' is 跟朋友一起, placed before 去游泳.",
            ],
            solutions: [
              {
                label: "Slot-filling (recommended)",
                steps: [
                  "Draw the slots: [subject] [time] [frequency] [跟…一起] [verb phrase].",
                  "Fill them: 我 / 周末 / 常常 / 跟朋友一起 / 去游泳.",
                  "Read it off: 我周末常常跟朋友一起去游泳。",
                ],
              },
              {
                label: "Fix the English order",
                steps: [
                  "English: I / often go swimming / with my friends / at the weekend.",
                  "Move every frame piece ('at the weekend', 'with my friends', 'often') to before the verb.",
                  "Result keeps only 去游泳 at the end: 我周末常常跟朋友一起去游泳。",
                ],
              },
            ],
          },
          {
            id: "hob-qa-b-q04",
            question:
              "Read the dialogue and answer in English. A: {{你周末做什么？|Nǐ zhōumò zuò shénme?}} B: {{我常常打网球，有时候看书。你呢？|Wǒ chángcháng dǎ wǎngqiú, yǒushíhou kàn shū. Nǐ ne?}} A: {{我跟弟弟一起玩电脑游戏。|Wǒ gēn dìdi yìqǐ wán diànnǎo yóuxì.}} ({{弟弟|dìdi}} = little brother) (a) What does B often do? (b) What does B sometimes do? (c) What does A do, and with whom?",
            modelAnswer:
              "(a) B often plays tennis. (b) B sometimes reads. (c) A plays computer games with his/her little brother.",
            markScheme: [
              "B often: plays tennis ({{常常打网球|chángcháng dǎ wǎngqiú}})",
              "B sometimes: reads ({{有时候看书|yǒushíhou kàn shū}})",
              "A: plays computer games",
              "A's companion: little brother ({{跟弟弟一起|gēn dìdi yìqǐ}})",
            ],
            commonError:
              "Swapping 常常 and 有时候 — match each frequency word to the activity that follows it, not the one before.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "core",
            hints: [
              "Each frequency word governs the verb straight after it.",
              "你呢？ bounces the question back — A's answer comes last.",
            ],
          },
          {
            id: "hob-qa-b-q05",
            question:
              "Write a two-line Chinese dialogue: invite your friend to watch a film this weekend, and write their accepting reply. (Characters or pinyin.)",
            modelAnswer:
              "{{我们周末去看电影，好吗？|Wǒmen zhōumò qù kàn diànyǐng, hǎo ma?|Let's go and see a film this weekend, okay?}} — {{好啊！|Hǎo a!|Sure!}}",
            markScheme: [
              "我们 + 去 + activity as the plan",
              "Time word 周末 before the verb",
              "Invitation tag {{好吗|hǎo ma}} at the end",
              "Accepting reply {{好啊|hǎo a}}",
            ],
            commonError:
              "Using 好吗 in the reply too — the asker says 好吗？, the accepter says 好啊！ Mixing them up reverses the roles.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "core",
            hints: [
              "Line 1: 我们 + time + 去 + activity，好吗？",
              "Line 2 is just two characters plus '!'.",
            ],
          },
          {
            id: "hob-qa-b-q06",
            question:
              "Write 3 sentences in Chinese about your free time: (1) your favourite activity with 最喜欢, (2) how often you do it and who with, (3) why you like it, using 因为. (Characters or pinyin.)",
            modelAnswer:
              "{{我最喜欢打乒乓球。|Wǒ zuì xǐhuan dǎ pīngpāngqiú.|My favourite is table tennis.}} {{我周末常常跟朋友一起打。|Wǒ zhōumò chángcháng gēn péngyou yìqǐ dǎ.|I often play with friends at the weekend.}} {{我喜欢打乒乓球，因为很有意思。|Wǒ xǐhuan dǎ pīngpāngqiú, yīnwèi hěn yǒu yìsi.|I like it because it's really fun.}}",
            markScheme: [
              "Sentence 1: 最喜欢 + activity with the correct verb",
              "Sentence 2: frequency word AND 跟…一起, both before the verb",
              "Sentence 3: reason with {{因为|yīnwèi}}",
              "Consistent activity across the three sentences",
            ],
            commonError:
              "Word order slips in sentence 2 — both the time word and 跟…一起 must come before the verb, in that order: 我 + 周末 + 常常 + 跟朋友一起 + 打.",
            guideRef: "The preference ladder: from 讨厌 to 最喜欢",
            difficulty: "challenge",
            hints: [
              "Reuse the frames: 我最喜欢…。 我 + time + 跟…一起 + verb。 …，因为很有意思。",
              "Keep the same hobby in all three sentences so the paragraph hangs together.",
            ],
            solutions: [
              {
                label: "Frame-by-frame build",
                steps: [
                  "Pick one activity and lock in its verb (e.g. 打乒乓球).",
                  "S1: 我最喜欢 + activity. S2: 我 + 周末/每天 + 常常/有时候 + 跟朋友一起 + verb.",
                  "S3: 我喜欢 + activity + ，因为很有意思。 Check: no time or companion words after any verb.",
                ],
              },
              {
                label: "Upgrade a simple answer",
                steps: [
                  "Start minimal: 我喜欢打乒乓球。我打乒乓球。我喜欢。",
                  "Upgrade each: add 最 to sentence 1; add 周末常常跟朋友一起 to sentence 2; add 因为很有意思 to sentence 3.",
                  "The upgrades are exactly what the mark scheme rewards.",
                ],
              },
            ],
          },
          {
            id: "hob-qa-b-q07",
            question:
              "Grammar explanation: a student wrote {{我打篮球每天，我玩游戏跟哥哥。|Wǒ dǎ lánqiú měi tiān, wǒ wán yóuxì gēn gēge.}} ({{哥哥|gēge}} = older brother) Both halves contain the SAME kind of mistake. Identify it, explain the rule, and write both halves correctly.",
            modelAnswer:
              "Both halves put frame words AFTER the verb, copying English order. In Chinese, time words and 跟-phrases must come BEFORE the verb ('frame first, then the action'). Corrected: {{我每天打篮球，我跟哥哥一起玩游戏。|Wǒ měi tiān dǎ lánqiú, wǒ gēn gēge yìqǐ wán yóuxì.}} (Adding 一起 after 跟哥哥 makes it fully natural.)",
            markScheme: [
              "Identifies the shared error: frame words placed after the verb",
              "States the rule: time words and 跟-phrases go before the verb",
              "Correction 1: 我每天打篮球",
              "Correction 2: 我跟哥哥(一起)玩游戏",
            ],
            commonError:
              "Fixing only the 每天 half — the 跟哥哥 phrase follows exactly the same before-the-verb rule, and spotting that pattern is the point of the question.",
            guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
            difficulty: "challenge",
            strategy: "Frame first: when and who-with before the verb",
            hints: [
              "Compare each half with the slot order: subject → time → who-with → verb.",
              "What do 每天 and 跟哥哥 have in common? Where must both stand?",
            ],
          },
        ],
      },
    ],
  },
};
