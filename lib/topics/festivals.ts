import type { Topic } from "../types";

// Chinese Festivals & Culture — 中国节日
// House style: matches lib/topics/greetings.ts (AoPS pedagogy, discovery-first,
// inline {{hanzi|pinyin|gloss}} syntax, laddered hints, why-it-works).

export const festivals: Topic = {
  id: "festivals",
  title: "Chinese Festivals & Culture",
  titleChinese: { hanzi: "中国节日", pinyin: "Zhōngguó jiérì" },
  subject: "chinese",
  icon: "🏮",
  color: "yellow",
  intro:
    "Why is there always a fish on the New Year table — and why must you NOT finish it? Why does Chinatown glow red every January or February? Chinese festivals are packed with stories, sound-puns and patterns, and living in Singapore you get front-row seats. By the end of this topic you can talk about Chinese New Year, the Mid-Autumn and Dragon Boat festivals, work out anyone's zodiac animal, and give wishes and presents in natural Mandarin.",
  guide: [
    {
      heading: "过年: Chinese New Year, the big one",
      discovery: {
        problem:
          "English says you 'celebrate' New Year. Chinese says {{过年|guònián|to spend/pass the New Year}} — literally 'to PASS the year'. The same verb turns up in {{过生日|guò shēngrì|to have a birthday}} and {{过节|guòjié|to celebrate a festival}}. What must {{过|guò|to pass, to spend}} really mean — and once you know it, how many 'celebrate' phrases can you build for free?",
        idea:
          "{{过|guò}} means 'to pass through / to spend (time)'. A festival isn't a thing you watch — it's a stretch of time you live through with your family. Learn one verb and you unlock a whole family of phrases: {{过年|guònián}}, {{过节|guòjié}}, {{过生日|guò shēngrì}}, {{过中秋节|guò Zhōngqiūjié|to spend Mid-Autumn Festival}}. You discovered a rule, not a phrase list!",
      },
      body:
        "Chinese New Year is called {{春节|Chūnjié|Spring Festival}}, and it is the most important festival of the year: {{春节是最重要的节日。|Chūnjié shì zuì zhòngyào de jiérì.|Spring Festival is the most important festival.}}\n\nIts date follows the {{农历|nónglì|lunar calendar}} — the traditional calendar that tracks the moon — so on our calendar it lands somewhere between late January and mid-February, a different date every year. Day one of the lunar year is New Year's Day, and in Singapore both that day and the next are public holidays.\n\nWhat happens? Families clean the house (sweeping out last year's bad luck), decorate everything in {{红色|hóngsè|red (colour)}} — red is the lucky colour — and go visiting relatives to {{拜年|bàinián|to pay a New Year visit}}. In the streets you'll see {{舞龙|wǔ lóng|dragon dance}} and {{舞狮|wǔ shī|lion dance}} performances with drums and cymbals. The two essential greetings:\n- {{新年快乐！|Xīnnián kuàilè!|Happy New Year!}}\n- {{恭喜发财！|Gōngxǐ fācái!|Congratulations, may you prosper!}} — literally 'congratulations, get rich!'\n\nIn Singapore, Chinatown — {{牛车水|Niúchēshuǐ|Chinatown (Singapore), lit. 'ox-cart water'}} — hosts a huge light-up and street market for weeks before the festival. The name remembers the ox carts that once delivered water there.",
      whyItWorks:
        "Why does the date jump around? The {{农历|nónglì}} is a lunar calendar: each month starts on a new moon, and twelve moon-months are about 354 days — 11 days short of a solar year. So the festival drifts earlier each year until a catch-up 'leap month' pulls it back. That's why New Year can be in January one year and February the next, and it's why 农历 dates and school-calendar dates never quite line up.",
      strategies: [
        "Learn the verb, not the phrase — 过 unlocks 过年, 过节, 过生日",
        "Anchor new words to things you've seen in Singapore",
      ],
      keyPoints: [
        "春节 (Chinese New Year) is the most important festival — 最重要的节日",
        "过 + occasion = to celebrate/spend it: 过年, 过节, 过生日",
        "Dates follow the 农历 lunar calendar, so they change every year",
        "Red = lucky; greetings: 新年快乐, 恭喜发财; visiting = 拜年",
        "Singapore's Chinatown is 牛车水 — 'ox-cart water'",
      ],
      vocab: [
        {
          hanzi: "春节",
          pinyin: "Chūnjié",
          english: "Spring Festival, Chinese New Year",
          pos: "noun",
          example: {
            hanzi: "春节是最重要的节日。",
            pinyin: "Chūnjié shì zuì zhòngyào de jiérì.",
            english: "Spring Festival is the most important festival.",
          },
        },
        { hanzi: "过年", pinyin: "guònián", english: "to celebrate New Year", pos: "verb" },
        { hanzi: "节日", pinyin: "jiérì", english: "festival", pos: "noun" },
        { hanzi: "新年快乐", pinyin: "xīnnián kuàilè", english: "Happy New Year", pos: "greeting" },
        {
          hanzi: "恭喜发财",
          pinyin: "gōngxǐ fācái",
          english: "congratulations, may you prosper",
          pos: "greeting",
        },
        { hanzi: "拜年", pinyin: "bàinián", english: "to pay a New Year visit", pos: "verb" },
        { hanzi: "舞龙", pinyin: "wǔ lóng", english: "dragon dance", pos: "noun" },
        { hanzi: "舞狮", pinyin: "wǔ shī", english: "lion dance", pos: "noun" },
        { hanzi: "农历", pinyin: "nónglì", english: "lunar calendar", pos: "noun" },
        { hanzi: "红色", pinyin: "hóngsè", english: "red (colour)", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "过 + occasion",
          example: {
            hanzi: "我们在新加坡过春节。",
            pinyin: "Wǒmen zài Xīnjiāpō guò Chūnjié.",
            english: "We celebrate Chinese New Year in Singapore.",
          },
          note: "One verb for every celebration: 过年, 过节, 过生日, 过中秋节.",
        },
        {
          pattern: "最重要的节日是…",
          example: {
            hanzi: "最重要的节日是春节。",
            pinyin: "Zuì zhòngyào de jiérì shì Chūnjié.",
            english: "The most important festival is Spring Festival.",
          },
          note: "最 = most; swap in 最喜欢的 (favourite) to give opinions: 我最喜欢的节日是中秋节.",
        },
      ],
    },
    {
      heading: "红包 and giving: the 给 sandwich",
      discovery: {
        problem:
          "Here is what every child in Singapore hopes to hear at New Year: {{妈妈给我一个红包。|Māma gěi wǒ yí gè hóngbāo.|Mum gives me a hongbao.}} Read it word by word: 妈妈 (Mum) + 给 (give) + 我 (me) + 一个 (one) + 红包 (red packet). Two things come after {{给|gěi|to give}} — a person and a thing. Which comes first, and could you swap them?",
        idea:
          "The order is fixed: **给 + person + thing** — first WHO gets it, then WHAT they get. {{给我一个红包|gěi wǒ yí gè hóngbāo}} is right; 给一个红包我 is always wrong. It's a sandwich: 给 on top, person in the middle, thing underneath — and it never gets rearranged.",
      },
      body:
        "A {{红包|hóngbāo|red packet of money}} — 'hongbao' in Singapore English — is a red envelope of money given at Chinese New Year. Married adults give them to children and unmarried relatives, always in fresh, crisp notes. The red envelope carries the luck; the money inside carries the love.\n\nTo talk about giving, use {{给|gěi|to give}} with the person before the thing:\n- {{奶奶给我一个红包。|Nǎinai gěi wǒ yí gè hóngbāo.|Grandma gives me a hongbao.}}\n- {{我给妹妹一个灯笼。|Wǒ gěi mèimei yí gè dēnglong.|I give my little sister a lantern.}}\n\nFor presents, the verb is {{送|sòng|to give (as a gift)}}: {{我送妈妈一个礼物。|Wǒ sòng māma yí gè lǐwù.|I give Mum a present.}} 送 adds the flavour of 'gift', while 给 is plain 'hand over'.\n\nTo wish someone well, start with {{祝|zhù|to wish (someone)}}:\n- {{祝你生日快乐！|Zhù nǐ shēngrì kuàilè!|Happy birthday to you!}}\n- {{祝你新年快乐！|Zhù nǐ xīnnián kuàilè!|Wishing you a happy New Year!}}\n- {{祝你中秋节快乐！|Zhù nǐ Zhōngqiūjié kuàilè!|Happy Mid-Autumn Festival!}}\n\nSpot the machine: 祝 + person + occasion + {{快乐|kuàilè|happy}}. Feed in any festival, out comes a wish.",
      whyItWorks:
        "Why person-before-thing? Think about English: 'Mum gives ME A HONGBAO' — English does exactly the same when it drops the word 'to'! Chinese simply has no second option: there is no 'gives a hongbao to me' word order to fall back on. So the rule is stricter but simpler — 给 + person + thing, every single time. The 祝 pattern works the same way: 祝 + person + the happy thing you wish them.",
      strategies: [
        "Person before thing — always, after 给, 送 and 祝",
        "Build a wish machine: 祝 + 你 + occasion + 快乐",
      ],
      keyPoints: [
        "给 + person + thing: 妈妈给我一个红包 — never 给一个红包我",
        "送 = give as a gift: 我送妈妈一个礼物",
        "祝你…快乐 makes any wish: 生日快乐, 新年快乐, 中秋节快乐",
        "Hongbao: red envelope, crisp notes, given by married adults to children",
      ],
      vocab: [
        {
          hanzi: "红包",
          pinyin: "hóngbāo",
          english: "red packet (of money)",
          pos: "noun",
          example: {
            hanzi: "爷爷给我一个红包。",
            pinyin: "Yéye gěi wǒ yí gè hóngbāo.",
            english: "Grandpa gives me a hongbao.",
          },
        },
        { hanzi: "给", pinyin: "gěi", english: "to give", pos: "verb" },
        { hanzi: "送", pinyin: "sòng", english: "to give (as a gift)", pos: "verb" },
        { hanzi: "礼物", pinyin: "lǐwù", english: "present, gift", pos: "noun" },
        { hanzi: "祝", pinyin: "zhù", english: "to wish (someone)", pos: "verb" },
        { hanzi: "快乐", pinyin: "kuàilè", english: "happy", pos: "adjective" },
        { hanzi: "生日快乐", pinyin: "shēngrì kuàilè", english: "happy birthday", pos: "greeting" },
      ],
      patterns: [
        {
          pattern: "给 + person + thing",
          example: {
            hanzi: "妈妈给我一个红包。",
            pinyin: "Māma gěi wǒ yí gè hóngbāo.",
            english: "Mum gives me a hongbao.",
          },
          note: "Person first, thing second — the order never swaps.",
        },
        {
          pattern: "祝 + person + occasion + 快乐",
          example: {
            hanzi: "祝你新年快乐！",
            pinyin: "Zhù nǐ xīnnián kuàilè!",
            english: "Wishing you a happy New Year!",
          },
          note: "A wish machine: swap the occasion — 生日, 新年, 中秋节 — and the pattern still works.",
        },
        {
          pattern: "送 + person + thing",
          example: {
            hanzi: "我送老师一个礼物。",
            pinyin: "Wǒ sòng lǎoshī yí gè lǐwù.",
            english: "I give the teacher a present.",
          },
          note: "Same sandwich shape as 给, with the added meaning of 'gift'.",
        },
      ],
    },
    {
      heading: "Lucky food: the sound-pun on every plate",
      discovery: {
        problem:
          "为什么过年吃鱼？Why do families ALWAYS serve a whole fish at the New Year's Eve dinner — and deliberately leave some uneaten? Clue: say {{鱼|yú|fish}} out loud. Now say {{余|yú|surplus, left over}}. What do you notice about the two sounds?",
        idea:
          "They are IDENTICAL — yú and yú. So the saying {{年年有余|niánnián yǒu yú|may every year bring a surplus}} sounds exactly like '年年有鱼' ('every year there is fish'). Serving fish is serving the wish; leaving some fish on the plate literally leaves a 'surplus' for next year. Chinese festival food is full of these sound-puns — once you know the trick, you can decode them everywhere.",
      },
      body:
        "The feast on New Year's Eve is the {{年夜饭|niányèfàn|New Year's Eve reunion dinner}} — the one meal of the year the whole family must eat together. Almost every dish is a pun or a symbol:\n- {{鱼|yú|fish}} sounds like {{余|yú|surplus}} → {{年年有余|niánnián yǒu yú|may every year bring a surplus}}. Don't finish the fish!\n- {{饺子|jiǎozi|dumplings}} are folded into the shape of old gold ingots — eating them is 'eating wealth'.\n- {{年糕|niángāo|New Year cake (sticky rice cake)}} sounds like 年高 — 'year higher' — so eating it wishes you a better year than the last.\n\nSingapore adds its own dish: {{鱼生|yúshēng|raw fish salad (yusheng)}}. Everyone stands, digs in their chopsticks and tosses the salad as high as they can — the 'lo hei' toss, from {{捞起|lāoqǐ|to toss up / scoop up}} — shouting wishes while they toss. Higher toss, higher luck. You will not find this in Beijing; it's a Singapore-and-Malaysia special.\n\nNotice the word order in festival sentences: the time expression comes first. {{过年我们吃鱼。|Guònián wǒmen chī yú.|At New Year we eat fish.}} — 'At-New-Year we eat fish', never 'we eat fish at New Year'.",
      whyItWorks:
        "Why is Chinese so full of puns? Mandarin only has about 400 different syllables, so thousands of characters must share sounds — homophones are everywhere. Festival culture turns this into a game: any food whose name sounds like a lucky word becomes a lucky food. It also works in reverse: the number 4, {{四|sì|four}}, sounds close to {{死|sǐ|death}}, so hongbao amounts and phone numbers avoid 4. Same trick, both directions — sound decides meaning-by-association.",
      strategies: [
        "Decode the pun: ask 'what lucky word does this food sound like?'",
        "Time words go first: 过年我们吃鱼",
      ],
      keyPoints: [
        "鱼 yú sounds like 余 yú 'surplus' → 年年有余; leave some fish uneaten",
        "年夜饭 is the compulsory family reunion dinner on New Year's Eve",
        "年糕 puns on 'year higher'; 饺子 look like gold ingots",
        "鱼生 / lo hei tossing is a Singapore special — higher toss, higher luck",
        "Time expressions come first: 过年我们吃鱼",
      ],
      vocab: [
        {
          hanzi: "年夜饭",
          pinyin: "niányèfàn",
          english: "New Year's Eve reunion dinner",
          pos: "noun",
        },
        {
          hanzi: "鱼",
          pinyin: "yú",
          english: "fish",
          pos: "noun",
          example: {
            hanzi: "过年我们吃鱼。",
            pinyin: "Guònián wǒmen chī yú.",
            english: "At New Year we eat fish.",
          },
        },
        {
          hanzi: "年年有余",
          pinyin: "niánnián yǒu yú",
          english: "may every year bring a surplus",
          pos: "set phrase",
        },
        { hanzi: "饺子", pinyin: "jiǎozi", english: "dumplings", pos: "noun" },
        { hanzi: "年糕", pinyin: "niángāo", english: "New Year sticky rice cake", pos: "noun" },
        { hanzi: "鱼生", pinyin: "yúshēng", english: "yusheng (raw fish salad)", pos: "noun" },
        { hanzi: "吃", pinyin: "chī", english: "to eat", pos: "verb" },
        { hanzi: "有", pinyin: "yǒu", english: "to have; there is", pos: "verb" },
      ],
      patterns: [
        {
          pattern: "Time/occasion + subject + verb + object",
          example: {
            hanzi: "过年我们吃饺子。",
            pinyin: "Guònián wǒmen chī jiǎozi.",
            english: "At New Year we eat dumplings.",
          },
          note: "Chinese puts the time first. Never copy the English order 'we eat dumplings at New Year'.",
        },
      ],
    },
    {
      heading: "中秋节 and 端午节: moon cakes and dragon boats",
      discovery: {
        problem:
          "The Mid-Autumn Festival, {{中秋节|Zhōngqiūjié|Mid-Autumn Festival}}, falls on the 15th day of the 8th lunar month — the exact middle of autumn, the night of the roundest full moon. Look at what people do: eat round {{月饼|yuèbing|mooncakes}}, admire the round {{月亮|yuèliang|moon}}, and sit in a circle with family. Why is everything ROUND?",
        idea:
          "Round stands for {{团圆|tuányuán|family reunion}} — the family circle, complete and unbroken, like the full moon. The 团 in 团圆 even means 'to gather into a ball'. The shape IS the meaning: a full moon over a full table means nobody is missing.",
      },
      body:
        "**{{中秋节|Zhōngqiūjié|Mid-Autumn Festival}}** (September or early October) is the festival of the moon and the family. People eat {{月饼|yuèbing|mooncakes}} — dense round cakes with lotus-seed or red-bean filling — carry glowing {{灯笼|dēnglong|lanterns}}, and gaze at the full {{月亮|yuèliang|moon}}. In Singapore, Chinatown and Gardens by the Bay put on huge lantern displays.\n\nThe story behind it: the archer Hou Yi was given an elixir of immortality. His wife {{嫦娥|Cháng'é|Chang'e, the moon goddess}} drank it to keep it from a thief, floated up to the moon, and lives there still with a jade rabbit. When families admire the moon, they are 'visiting' Chang'e.\n\n**{{端午节|Duānwǔjié|Dragon Boat Festival}}** (5th day of the 5th lunar month, usually June) remembers the poet {{屈原|Qū Yuán|Qu Yuan, ancient poet}}, who drowned himself in a river over two thousand years ago when his kingdom fell. People raced out in boats to save him and threw rice into the water so the fish would eat the rice instead of the poet. Today's festival re-enacts the rescue: {{龙舟|lóngzhōu|dragon boat}} races — long paddle-boats with dragon heads — and {{粽子|zòngzi|sticky rice dumplings in bamboo leaves}}, pyramid-shaped parcels of sticky rice wrapped in bamboo leaves.\n\nTo say who you do things with, use {{跟…一起|gēn… yìqǐ|together with…}}: {{中秋节我跟家人一起看月亮。|Zhōngqiūjié wǒ gēn jiārén yìqǐ kàn yuèliang.|At Mid-Autumn I look at the moon with my family.}}",
      whyItWorks:
        "Every custom is a story compressed into an object. Zongzi = the rice thrown to the fish; dragon boat races = the dash to save Qu Yuan; mooncakes and moon-gazing = visiting Chang'e; round food = the unbroken family circle. If you remember the STORY, the vocabulary comes free — you'll never mix up which festival gets 粽子 and which gets 月饼, because you know why each food exists.",
      strategies: [
        "Attach each food to its story — the story stores the vocab for you",
        "Round = reunion: let the symbol do the remembering",
      ],
      keyPoints: [
        "中秋节: mooncakes 月饼, lanterns 灯笼, full moon 月亮, reunion 团圆",
        "Chang'e 嫦娥 lives on the moon — the story behind moon-gazing",
        "端午节: dragon boat 龙舟 races and zongzi 粽子, both re-enacting the rescue of Qu Yuan",
        "跟…一起 = together with: 我跟家人一起吃月饼",
      ],
      vocab: [
        {
          hanzi: "中秋节",
          pinyin: "Zhōngqiūjié",
          english: "Mid-Autumn Festival",
          pos: "noun",
        },
        { hanzi: "月亮", pinyin: "yuèliang", english: "moon", pos: "noun" },
        {
          hanzi: "月饼",
          pinyin: "yuèbing",
          english: "mooncake",
          pos: "noun",
          example: {
            hanzi: "中秋节我们吃月饼。",
            pinyin: "Zhōngqiūjié wǒmen chī yuèbing.",
            english: "At Mid-Autumn Festival we eat mooncakes.",
          },
        },
        { hanzi: "灯笼", pinyin: "dēnglong", english: "lantern", pos: "noun" },
        { hanzi: "团圆", pinyin: "tuányuán", english: "family reunion", pos: "noun" },
        { hanzi: "家人", pinyin: "jiārén", english: "family members", pos: "noun" },
        { hanzi: "端午节", pinyin: "Duānwǔjié", english: "Dragon Boat Festival", pos: "noun" },
        { hanzi: "龙舟", pinyin: "lóngzhōu", english: "dragon boat", pos: "noun" },
        {
          hanzi: "粽子",
          pinyin: "zòngzi",
          english: "sticky rice dumpling in bamboo leaves",
          pos: "noun",
        },
      ],
      patterns: [
        {
          pattern: "跟 + person + 一起 + verb",
          example: {
            hanzi: "我跟家人一起吃月饼。",
            pinyin: "Wǒ gēn jiārén yìqǐ chī yuèbing.",
            english: "I eat mooncakes together with my family.",
          },
          note: "跟…一起 slots in before the verb — with-phrases never go at the end as in English.",
        },
        {
          pattern: "Festival + 我们 + verb…",
          example: {
            hanzi: "端午节我们看龙舟。",
            pinyin: "Duānwǔjié wǒmen kàn lóngzhōu.",
            english: "At Dragon Boat Festival we watch the dragon boats.",
          },
          note: "The festival name works as a time word and goes first.",
        },
      ],
    },
    {
      heading: "生肖: which animal are you?",
      discovery: {
        problem:
          "A Chinese friend asks: {{你属什么？|Nǐ shǔ shénme?|What zodiac animal are you?}} — literally 'you belong-to what?'. You've never met {{属|shǔ|to belong to (a zodiac year)}} before. But you know two things: question words sit where the answer goes, and a typical answer is {{我属马。|Wǒ shǔ mǎ.|I'm a horse (zodiac).}} — 'I belong-to horse'. So what is the question really asking?",
        idea:
          "It's asking for your zodiac animal — the animal of the year you were born. 属 means 'to belong to (a birth-year animal)'. Bonus pun: {{属|shǔ}} sounds exactly like {{鼠|shǔ|rat}}, the FIRST zodiac animal. So 我属鼠 ('I'm a rat') is 'wǒ shǔ shǔ' — Chinese speakers find this funny too.",
      },
      body:
        "The {{生肖|shēngxiào|Chinese zodiac}} is a cycle of twelve animals, one per year, always in this order:\n\n{{鼠|shǔ|rat}} → {{牛|niú|ox}} → {{虎|hǔ|tiger}} → {{兔|tù|rabbit}} → {{龙|lóng|dragon}} → {{蛇|shé|snake}} → {{马|mǎ|horse}} → {{羊|yáng|goat}} → {{猴|hóu|monkey}} → {{鸡|jī|rooster}} → {{狗|gǒu|dog}} → {{猪|zhū|pig}} — then back to the rat.\n\nEveryone born in the same lunar year shares the same animal. 2024 was a dragon year, 2025 a snake year, 2026 a horse year: {{今年是马年。|Jīnnián shì mǎ nián.|This year is the year of the horse.}} One trap: the zodiac year changes at Chinese New Year, not on 1 January — someone born in January 2026 was still born in the SNAKE year, because New Year 2026 fell in February.\n\nAsk and answer:\n- {{你属什么？|Nǐ shǔ shénme?|What's your zodiac animal?}}\n- {{我属龙。|Wǒ shǔ lóng.|I'm a dragon.}}\n\nBecause the cycle is exactly twelve years, people born 12, 24 or 36 years apart share an animal. That's why Chinese speakers can politely work out roughly how old you are from your animal — no rude 'how old are you?' needed.",
      whyItWorks:
        "The cycle is pure clock arithmetic. Twelve animals, one per year, repeating forever — like a clock face with animals instead of numbers. Add or subtract any multiple of 12 and you land on the SAME animal: a dragon's little brother born 12 years later is also a dragon. For gaps that aren't multiples of 12, just walk round the circle: 3 years after a dog year is dog → pig → rat → ox, an ox year. Once you see it as a circle, every zodiac puzzle becomes counting.",
      strategies: [
        "Treat the zodiac as a 12-hour clock: ±12 years = same animal",
        "For other gaps, walk the circle animal by animal",
      ],
      keyPoints: [
        "12 animals in fixed order, starting 鼠 rat and ending 猪 pig",
        "你属什么？我属 + animal — the verb is 属 shǔ",
        "The zodiac year flips at Chinese New Year, not 1 January",
        "±12, ±24, ±36 years = same animal; other gaps: count round the circle",
        "2026 is a horse year: 今年是马年",
      ],
      vocab: [
        { hanzi: "生肖", pinyin: "shēngxiào", english: "Chinese zodiac", pos: "noun" },
        {
          hanzi: "属",
          pinyin: "shǔ",
          english: "to belong to (a zodiac year)",
          pos: "verb",
          example: {
            hanzi: "我属龙。",
            pinyin: "Wǒ shǔ lóng.",
            english: "I'm a dragon (zodiac).",
          },
        },
        { hanzi: "鼠", pinyin: "shǔ", english: "rat (zodiac)", pos: "noun" },
        { hanzi: "牛", pinyin: "niú", english: "ox (zodiac)", pos: "noun" },
        { hanzi: "虎", pinyin: "hǔ", english: "tiger (zodiac)", pos: "noun" },
        { hanzi: "龙", pinyin: "lóng", english: "dragon", pos: "noun" },
        { hanzi: "蛇", pinyin: "shé", english: "snake (zodiac)", pos: "noun" },
        { hanzi: "马", pinyin: "mǎ", english: "horse", pos: "noun" },
        { hanzi: "狗", pinyin: "gǒu", english: "dog", pos: "noun" },
        { hanzi: "猪", pinyin: "zhū", english: "pig (zodiac)", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "你属什么？— 我属 + animal",
          example: {
            hanzi: "你属什么？我属蛇。",
            pinyin: "Nǐ shǔ shénme? Wǒ shǔ shé.",
            english: "What's your zodiac animal? I'm a snake.",
          },
          note: "什么 sits where the animal will go — the question keeps the statement's shape.",
        },
        {
          pattern: "今年是 + animal + 年",
          example: {
            hanzi: "今年是马年。",
            pinyin: "Jīnnián shì mǎ nián.",
            english: "This year is the year of the horse.",
          },
          note: "Works for any year: 明年是羊年 — next year is the goat year.",
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "春节", pinyin: "Chūnjié", english: "Spring Festival, Chinese New Year" },
      { hanzi: "节日", pinyin: "jiérì", english: "festival" },
      { hanzi: "过年", pinyin: "guònián", english: "to celebrate New Year" },
      { hanzi: "过", pinyin: "guò", english: "to spend, to celebrate (an occasion)" },
      { hanzi: "新年快乐", pinyin: "xīnnián kuàilè", english: "Happy New Year" },
      { hanzi: "恭喜发财", pinyin: "gōngxǐ fācái", english: "congratulations, may you prosper" },
      { hanzi: "红包", pinyin: "hóngbāo", english: "red packet (of money)" },
      { hanzi: "拜年", pinyin: "bàinián", english: "to pay a New Year visit" },
      { hanzi: "舞龙", pinyin: "wǔ lóng", english: "dragon dance" },
      { hanzi: "舞狮", pinyin: "wǔ shī", english: "lion dance" },
      { hanzi: "年夜饭", pinyin: "niányèfàn", english: "New Year's Eve reunion dinner" },
      { hanzi: "饺子", pinyin: "jiǎozi", english: "dumplings" },
      { hanzi: "鱼", pinyin: "yú", english: "fish" },
      { hanzi: "年年有余", pinyin: "niánnián yǒu yú", english: "may every year bring a surplus" },
      { hanzi: "年糕", pinyin: "niángāo", english: "New Year sticky rice cake" },
      { hanzi: "鱼生", pinyin: "yúshēng", english: "yusheng (raw fish salad)" },
      { hanzi: "红色", pinyin: "hóngsè", english: "red (colour)" },
      { hanzi: "农历", pinyin: "nónglì", english: "lunar calendar" },
      { hanzi: "中秋节", pinyin: "Zhōngqiūjié", english: "Mid-Autumn Festival" },
      { hanzi: "月亮", pinyin: "yuèliang", english: "moon" },
      { hanzi: "月饼", pinyin: "yuèbing", english: "mooncake" },
      { hanzi: "灯笼", pinyin: "dēnglong", english: "lantern" },
      { hanzi: "团圆", pinyin: "tuányuán", english: "family reunion" },
      { hanzi: "家人", pinyin: "jiārén", english: "family members" },
      { hanzi: "端午节", pinyin: "Duānwǔjié", english: "Dragon Boat Festival" },
      { hanzi: "龙舟", pinyin: "lóngzhōu", english: "dragon boat" },
      { hanzi: "粽子", pinyin: "zòngzi", english: "sticky rice dumpling in bamboo leaves" },
      { hanzi: "生肖", pinyin: "shēngxiào", english: "Chinese zodiac" },
      { hanzi: "属", pinyin: "shǔ", english: "to belong to (a zodiac year)" },
      { hanzi: "龙", pinyin: "lóng", english: "dragon" },
      { hanzi: "马", pinyin: "mǎ", english: "horse" },
      { hanzi: "祝", pinyin: "zhù", english: "to wish (someone)" },
      { hanzi: "给", pinyin: "gěi", english: "to give" },
      { hanzi: "送", pinyin: "sòng", english: "to give (as a gift)" },
      { hanzi: "礼物", pinyin: "lǐwù", english: "present, gift" },
    ],
    patterns: [
      {
        pattern: "过 + occasion",
        example: {
          hanzi: "我们在新加坡过春节。",
          pinyin: "Wǒmen zài Xīnjiāpō guò Chūnjié.",
          english: "We celebrate Chinese New Year in Singapore.",
        },
      },
      {
        pattern: "给 + person + thing",
        example: {
          hanzi: "妈妈给我一个红包。",
          pinyin: "Māma gěi wǒ yí gè hóngbāo.",
          english: "Mum gives me a hongbao.",
        },
      },
      {
        pattern: "祝 + person + occasion + 快乐",
        example: {
          hanzi: "祝你中秋节快乐！",
          pinyin: "Zhù nǐ Zhōngqiūjié kuàilè!",
          english: "Happy Mid-Autumn Festival to you!",
        },
      },
      {
        pattern: "你属什么？— 我属 + animal",
        example: {
          hanzi: "你属什么？我属龙。",
          pinyin: "Nǐ shǔ shénme? Wǒ shǔ lóng.",
          english: "What's your zodiac animal? I'm a dragon.",
        },
      },
      {
        pattern: "Time/festival first: Festival + subject + verb",
        example: {
          hanzi: "中秋节我们吃月饼。",
          pinyin: "Zhōngqiūjié wǒmen chī yuèbing.",
          english: "At Mid-Autumn Festival we eat mooncakes.",
        },
      },
      {
        pattern: "最重要的节日是…",
        example: {
          hanzi: "最重要的节日是春节。",
          pinyin: "Zuì zhòngyào de jiérì shì Chūnjié.",
          english: "The most important festival is Spring Festival.",
        },
      },
    ],
    mnemonics: [
      {
        hanzi: "鱼",
        tip: "鱼 yú sounds exactly like 余 yú 'surplus' — that single pun explains the whole 年年有余 fish tradition.",
      },
      {
        hanzi: "月",
        tip: "月 is a drawing of a crescent moon. See it inside 月亮 (moon) and 月饼 (moon + cake = mooncake).",
      },
      {
        hanzi: "红",
        tip: "红 hóng = red, the lucky colour — it starts 红包 (red packet) and 红色 (red). Lucky things in this topic are red things.",
      },
      {
        hanzi: "属",
        tip: "属 shǔ ('belong to a zodiac year') sounds exactly like 鼠 shǔ, the rat — the FIRST zodiac animal. 我属鼠 = 'wǒ shǔ shǔ'.",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "fest-quiz-mcq-q01",
        question: "Which greeting do you say at Chinese New Year?",
        options: [
          "{{生日快乐|shēngrì kuàilè}}",
          "{{新年快乐|xīnnián kuàilè}}",
          "{{再见|zàijiàn}}",
          "{{谢谢|xièxie}}",
        ],
        answerIndex: 1,
        explanation:
          "{{新年快乐|xīnnián kuàilè}} = 'new year happy' = Happy New Year. {{生日快乐|shēngrì kuàilè}} is for birthdays — same 快乐 pattern, wrong occasion.",
        guideRef: "过年: Chinese New Year, the big one",
        difficulty: "warmup",
      },
      {
        id: "fest-quiz-mcq-q02",
        question: "What is a {{红包|hóngbāo}}?",
        options: [
          "A red lantern",
          "A red envelope of money",
          "A sticky rice dumpling",
          "A New Year visit",
        ],
        answerIndex: 1,
        explanation:
          "红 = red, 包 = packet/parcel: a red envelope of money given at Chinese New Year — 'hongbao' in Singapore English. The lantern is {{灯笼|dēnglong}}, the dumpling {{粽子|zòngzi}}, the visit {{拜年|bàinián}}.",
        guideRef: "红包 and giving: the 给 sandwich",
        difficulty: "warmup",
      },
      {
        id: "fest-quiz-mcq-q03",
        question: "What does {{恭喜发财|gōngxǐ fācái}} literally wish someone?",
        options: [
          "Long life and health",
          "Congratulations — may you get rich",
          "Safe travels home",
          "Good luck in exams",
        ],
        answerIndex: 1,
        explanation:
          "恭喜 = congratulations, 发财 = to make a fortune — so literally 'congratulations, get rich!'. It's the classic New Year wish for prosperity.",
        guideRef: "过年: Chinese New Year, the big one",
        difficulty: "core",
        hints: ["发财 is about money — 财 means wealth."],
      },
      {
        id: "fest-quiz-mcq-q04",
        question: "Choose the correct way to say 'Mum gives me a hongbao.'",
        options: [
          "{{妈妈给一个红包我。|Māma gěi yí gè hóngbāo wǒ.}}",
          "{{给妈妈我一个红包。|Gěi māma wǒ yí gè hóngbāo.}}",
          "{{妈妈给我一个红包。|Māma gěi wǒ yí gè hóngbāo.}}",
          "{{我给妈妈一个红包。|Wǒ gěi māma yí gè hóngbāo.}}",
        ],
        answerIndex: 2,
        explanation:
          "The order after {{给|gěi}} is fixed: person first, thing second — 给 + 我 + 一个红包. Option A puts the thing first (always wrong), and option D has Mum RECEIVING the hongbao — right grammar, wrong direction!",
        guideRef: "红包 and giving: the 给 sandwich",
        difficulty: "core",
        hints: [
          "The 给 sandwich: 给 + person + thing.",
          "Check WHO is giving and WHO is getting — two options have correct grammar.",
        ],
        strategy: "Person before thing — always",
      },
      {
        id: "fest-quiz-mcq-q05",
        question: "Why is a whole fish always served at the New Year's Eve dinner?",
        options: [
          "Fish is the cheapest festival food",
          "{{鱼|yú|fish}} sounds exactly like {{余|yú|surplus}}, so fish 'is' the wish 年年有余",
          "Fish is red, the lucky colour",
          "Chang'e is said to love fish",
        ],
        answerIndex: 1,
        explanation:
          "It's a sound-pun: 鱼 and 余 are both yú, so serving fish acts out {{年年有余|niánnián yǒu yú|may every year bring a surplus}}. That's also why some fish is deliberately left over — a real 'surplus' on the plate.",
        guideRef: "Lucky food: the sound-pun on every plate",
        difficulty: "core",
        hints: ["Say 鱼 aloud, then say 余 aloud."],
        strategy: "Decode the pun",
      },
      {
        id: "fest-quiz-mcq-q06",
        question: "At which festival do people eat {{月饼|yuèbing}} and carry {{灯笼|dēnglong}}?",
        options: [
          "{{春节|Chūnjié}}",
          "{{端午节|Duānwǔjié}}",
          "{{中秋节|Zhōngqiūjié}}",
          "A birthday",
        ],
        answerIndex: 2,
        explanation:
          "月饼 = mooncakes, and the moon festival is {{中秋节|Zhōngqiūjié|Mid-Autumn Festival}} — the character 月 (moon) is the giveaway. 端午节 has 粽子 and dragon boats; 春节 has 饺子 and 年糕.",
        guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
        difficulty: "core",
        hints: ["Find the character 月 (moon) in 月饼 — which festival celebrates the moon?"],
      },
      {
        id: "fest-quiz-mcq-q07",
        question: "A friend asks {{你属什么？|Nǐ shǔ shénme?}} Which is a sensible reply?",
        options: [
          "{{我属龙。|Wǒ shǔ lóng.}}",
          "{{我十三岁。|Wǒ shísān suì.}}",
          "{{我叫大明。|Wǒ jiào Dàmíng.}}",
          "{{我很好。|Wǒ hěn hǎo.}}",
        ],
        answerIndex: 0,
        explanation:
          "你属什么？ asks for your zodiac animal, so the answer uses the same verb: {{我属龙|wǒ shǔ lóng|I'm a dragon}}. The others answer 'how old are you?', 'what's your name?' and 'how are you?'.",
        guideRef: "生肖: which animal are you?",
        difficulty: "core",
        hints: [
          "什么 sits where the answer goes — the reply keeps the question's shape.",
          "The reply should reuse the verb 属.",
        ],
      },
      {
        id: "fest-quiz-mcq-q08",
        question: "Which sentence uses {{过|guò}} correctly to mean 'celebrate'?",
        options: [
          "{{我们过一个礼物。|Wǒmen guò yí gè lǐwù.}}",
          "{{我们过生日。|Wǒmen guò shēngrì.}}",
          "{{我们过妈妈。|Wǒmen guò māma.}}",
          "{{我们过红色。|Wǒmen guò hóngsè.}}",
        ],
        answerIndex: 1,
        explanation:
          "过 means 'to pass/spend' an OCCASION — a stretch of time like 年, 节 or 生日. {{过生日|guò shēngrì}} = to have a birthday. You can't 'pass' a present, a person or a colour.",
        guideRef: "过年: Chinese New Year, the big one",
        difficulty: "core",
        hints: ["过 needs a time/occasion after it, not an object or a person."],
        strategy: "Learn the verb, not the phrase",
      },
      {
        id: "fest-quiz-mcq-q09",
        question:
          "Challenge: Mei was born in a dragon year. Her cousin is exactly 24 years older. What is her cousin's zodiac animal?",
        options: ["Dragon", "Snake", "Rat", "Impossible to know"],
        answerIndex: 0,
        explanation:
          "The zodiac repeats every 12 years, and 24 is 12 + 12 — two full trips round the circle land you back on the SAME animal. Any age gap that's a multiple of 12 means the same animal, so the cousin is also a dragon.",
        guideRef: "生肖: which animal are you?",
        difficulty: "challenge",
        hints: [
          "How long is one full cycle of the zodiac?",
          "24 = 12 × 2 — what does going round the circle twice do?",
        ],
        strategy: "Treat the zodiac as a 12-hour clock",
      },
      {
        id: "fest-quiz-mcq-q10",
        question:
          "Challenge: {{年糕|niángāo|New Year cake}} sounds like 年高 — 'year high(er)'. Using the same pun logic as 鱼/余, what wish are you 'eating' when you eat 年糕?",
        options: [
          "May you grow very tall",
          "May every new year be better (higher) than the last",
          "May you always have leftovers",
          "May your family reunite",
        ],
        answerIndex: 1,
        explanation:
          "The pun maps the food's name onto a lucky phrase: 年高 = 'year higher', i.e. rising year on year — each year better than the last. 'Leftovers' is the 鱼/余 pun, and reunion 团圆 belongs to Mid-Autumn's round foods. (It's about your YEAR rising, not your height!)",
        guideRef: "Lucky food: the sound-pun on every plate",
        difficulty: "challenge",
        hints: [
          "Ask: what lucky idea does 'year + higher' suggest?",
          "The pun is about the year improving, not about the eater's body.",
        ],
        strategy: "Decode the pun",
      },
    ],
    qa: [
      {
        id: "fest-quiz-qa-q01",
        question:
          "It's your friend's birthday. Write a wish in Chinese using the 祝 pattern. (Characters or pinyin.)",
        modelAnswer: "{{祝你生日快乐！|Zhù nǐ shēngrì kuàilè!|Happy birthday to you!}}",
        markScheme: [
          "Starts with {{祝|zhù}} (祝你 accepted as one chunk)",
          "Person {{你|nǐ}} straight after 祝",
          "Occasion {{生日|shēngrì|birthday}} before 快乐",
          "Ends with {{快乐|kuàilè|happy}}",
        ],
        commonError: "Putting 快乐 first (快乐生日 ✗) — the occasion comes before 快乐, English-style 'happy birthday' order is reversed.",
        guideRef: "红包 and giving: the 给 sandwich",
        difficulty: "warmup",
        hints: ["The wish machine: 祝 + 你 + occasion + 快乐."],
      },
      {
        id: "fest-quiz-qa-q02",
        question:
          "Write in Chinese: 'Grandpa gives me two hongbao.' ({{爷爷|yéye}} = grandpa; {{两个|liǎng gè}} = two.) Characters or pinyin.",
        modelAnswer: "{{爷爷给我两个红包。|Yéye gěi wǒ liǎng gè hóngbāo.|Grandpa gives me two hongbao.}}",
        markScheme: [
          "Subject {{爷爷|yéye}} first",
          "Verb {{给|gěi}}",
          "Person {{我|wǒ}} immediately after 给, BEFORE the thing",
          "{{两个红包|liǎng gè hóngbāo}} last",
        ],
        commonError:
          "爷爷给两个红包我 ✗ — copying English 'gives two hongbao to me'. After 给, the person always comes before the thing.",
        guideRef: "红包 and giving: the 给 sandwich",
        difficulty: "core",
        hints: [
          "The 给 sandwich: 给 + person + thing.",
          "Who receives? 我 — so 我 sits right after 给.",
        ],
        solutions: [
          {
            label: "Build from the pattern (recommended)",
            steps: [
              "Pattern: giver + 给 + receiver + thing.",
              "Slot in: 爷爷 (giver) + 给 + 我 (receiver) + 两个红包 (thing).",
              "Result: 爷爷给我两个红包。",
            ],
          },
          {
            label: "Edit a known sentence",
            steps: [
              "Start from the guide sentence 妈妈给我一个红包。",
              "Swap the giver: 妈妈 → 爷爷.",
              "Swap the amount: 一个 → 两个.",
              "Result: 爷爷给我两个红包。 — same skeleton, new fillings.",
            ],
          },
        ],
      },
      {
        id: "fest-quiz-qa-q03",
        question:
          "Explain in English: why do Chinese families always serve fish at the New Year's Eve dinner, and why do they deliberately not finish it?",
        modelAnswer:
          "Because of a sound-pun: {{鱼|yú|fish}} is pronounced exactly like {{余|yú|surplus/left over}}, so having fish on the table acts out the saying {{年年有余|niánnián yǒu yú}} — 'may every year bring a surplus'. Leaving some fish uneaten makes the pun literally true: there really is something 'left over' to carry into the new year.",
        markScheme: [
          "鱼 and 余 sound the same (both yú)",
          "余 means surplus / having something left over",
          "Links to the phrase 年年有余 (surplus every year)",
          "Leaving fish uneaten = leaving a real 'surplus' for next year",
        ],
        commonError:
          "Saying 'fish is lucky' without the pun — the mark is for explaining WHY it's lucky: the identical sounds of 鱼 and 余.",
        guideRef: "Lucky food: the sound-pun on every plate",
        difficulty: "core",
        hints: [
          "Say the words 鱼 and 余 out loud — what do you notice?",
          "Connect the leftover fish to the meaning of 余.",
        ],
      },
      {
        id: "fest-quiz-qa-q04",
        question:
          "Read the passage, then answer in English: {{春节我们在新加坡过年。年夜饭我们吃鱼和饺子。奶奶给我一个红包。我最喜欢舞狮。|Chūnjié wǒmen zài Xīnjiāpō guònián. Niányèfàn wǒmen chī yú hé jiǎozi. Nǎinai gěi wǒ yí gè hóngbāo. Wǒ zuì xǐhuan wǔ shī.}} (a) Where does the family celebrate New Year? (b) Name the two foods at the reunion dinner. (c) Who gives the writer a hongbao? (d) What does the writer like best?",
        modelAnswer:
          "(a) In Singapore. (b) Fish and dumplings. (c) Grandma. (d) The lion dance.",
        markScheme: [
          "(a) Singapore ({{新加坡|Xīnjiāpō}})",
          "(b) fish ({{鱼|yú}}) AND dumplings ({{饺子|jiǎozi}}) — both needed",
          "(c) grandma ({{奶奶|nǎinai}})",
          "(d) the lion dance ({{舞狮|wǔ shī}})",
        ],
        commonError:
          "Mixing up 舞狮 (lion dance) and 舞龙 (dragon dance) — 狮 is lion, 龙 is dragon.",
        guideRef: "过年: Chinese New Year, the big one",
        difficulty: "core",
        hints: [
          "Scan for the question's keyword: place → 在…, food → 吃…, giver → …给我.",
          "最喜欢 = like best — the answer follows it.",
        ],
      },
      {
        id: "fest-quiz-qa-q05",
        question:
          "Challenge: 2026 is a horse year ({{马年|mǎ nián}}). Your auntie says: {{我属马。|Wǒ shǔ mǎ.}} She is clearly an adult, not 0 or 12 years old. Give TWO possible ages she turns in 2026, and explain how the zodiac cycle tells you.",
        modelAnswer:
          "She turns an age that is a multiple of 12 — for an adult, most likely 24, 36 or 48 in 2026. The zodiac repeats every 12 years, so horse-year people were born 0, 12, 24, 36… years before any other horse year. Since 2026 is a horse year and she's an adult, her age this year must be one of those multiples of 12.",
        markScheme: [
          "States the cycle repeats every 12 years",
          "Age in a matching year must be a multiple of 12",
          "Gives two sensible adult ages (any two of 24 / 36 / 48 / 60…)",
          "Links the reasoning: same animal ⇒ whole number of cycles apart",
        ],
        commonError:
          "Forgetting the cycle can go round more than once — she needn't be exactly 12; ANY multiple of 12 works.",
        guideRef: "生肖: which animal are you?",
        difficulty: "challenge",
        strategy: "Treat the zodiac as a 12-hour clock",
        hints: [
          "Same animal = a whole number of cycles apart.",
          "One cycle is 12 years; she has lived through several.",
        ],
        solutions: [
          {
            label: "Count in cycles (recommended)",
            steps: [
              "Same animal as the current year means her age is 0, 12, 24, 36… — a multiple of 12.",
              "Rule out 0 and 12 (she's an adult).",
              "Answer: any two of 24, 36, 48, 60…",
            ],
          },
          {
            label: "List the horse years",
            steps: [
              "Step back 12 at a time from 2026: 2014, 2002, 1990, 1978 are all horse years.",
              "Born 2002 → turns 24 in 2026; born 1990 → turns 36; born 1978 → turns 48.",
              "Pick two adult options: e.g. 24 and 36.",
            ],
          },
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "fest-mcq-a",
        title: "Paper A — Chinese New Year",
        description: "过年 customs, greetings, hongbao and lucky food.",
        questions: [
          {
            id: "fest-mcq-a-q01",
            question: "What does {{过年|guònián}} mean?",
            options: [
              "To celebrate Chinese New Year",
              "To eat dinner",
              "To go to school",
              "Last year",
            ],
            answerIndex: 0,
            explanation:
              "过 = to pass/spend, 年 = year: to spend the New Year, i.e. celebrate it. The same 过 appears in 过节 and 过生日.",
            guideRef: "过年: Chinese New Year, the big one",
            difficulty: "warmup",
          },
          {
            id: "fest-mcq-a-q02",
            question: "Which colour is the lucky colour of Chinese New Year?",
            options: [
              "{{白色|báisè|white}}",
              "{{红色|hóngsè|red}}",
              "{{黑色|hēisè|black}}",
              "{{蓝色|lánsè|blue}}",
            ],
            answerIndex: 1,
            explanation:
              "Red — 红色 — is THE lucky colour: red decorations, red clothes, red packets (红包). White is traditionally a funeral colour, so it's avoided at New Year.",
            guideRef: "过年: Chinese New Year, the big one",
            difficulty: "warmup",
          },
          {
            id: "fest-mcq-a-q03",
            question: "What are {{饺子|jiǎozi}}?",
            options: ["Mooncakes", "Lanterns", "Dumplings", "Fireworks"],
            answerIndex: 2,
            explanation:
              "饺子 are dumplings — folded like old gold ingots, which is why eating them at New Year means 'eating wealth'.",
            guideRef: "Lucky food: the sound-pun on every plate",
            difficulty: "warmup",
          },
          {
            id: "fest-mcq-a-q04",
            question: "What do you do when you {{拜年|bàinián}}?",
            options: [
              "Watch a dragon boat race",
              "Visit relatives to wish them a happy New Year",
              "Toss a raw fish salad",
              "Hang lanterns in the garden",
            ],
            answerIndex: 1,
            explanation:
              "拜年 = to pay a New Year visit: going from house to house greeting relatives (and, if you're young, collecting hongbao). Dragon boats belong to 端午节 and lanterns to 中秋节.",
            guideRef: "过年: Chinese New Year, the big one",
            difficulty: "core",
          },
          {
            id: "fest-mcq-a-q05",
            question: "Singapore's Chinatown is called {{牛车水|Niúchēshuǐ}}. What does the name literally mean?",
            options: [
              "Golden dragon river",
              "Ox-cart water",
              "Red lantern street",
              "New year market",
            ],
            answerIndex: 1,
            explanation:
              "牛 = ox, 车 = cart, 水 = water: 'ox-cart water', remembering the ox carts that once delivered water to the district.",
            guideRef: "过年: Chinese New Year, the big one",
            difficulty: "core",
            hints: ["Take it character by character: 牛 + 车 + 水."],
          },
          {
            id: "fest-mcq-a-q06",
            question: "When is the {{年夜饭|niányèfàn}} eaten?",
            options: [
              "On New Year's Eve",
              "At Mid-Autumn Festival",
              "On the fifth day of New Year",
              "On your birthday",
            ],
            answerIndex: 0,
            explanation:
              "年夜 = 'year night' — the last evening of the old year. The 年夜饭 is the reunion dinner on New Year's Eve, the one meal the whole family must share.",
            guideRef: "Lucky food: the sound-pun on every plate",
            difficulty: "core",
          },
          {
            id: "fest-mcq-a-q07",
            question: "Choose the correct sentence for 'Auntie gives my little brother a hongbao.'",
            options: [
              "{{阿姨给一个红包弟弟。|Āyí gěi yí gè hóngbāo dìdi.}}",
              "{{阿姨给弟弟一个红包。|Āyí gěi dìdi yí gè hóngbāo.}}",
              "{{弟弟给阿姨一个红包。|Dìdi gěi āyí yí gè hóngbāo.}}",
              "{{给阿姨弟弟一个红包。|Gěi āyí dìdi yí gè hóngbāo.}}",
            ],
            answerIndex: 1,
            explanation:
              "给 + person + thing: 给 + 弟弟 + 一个红包. Option C reverses giver and receiver — little brothers don't hand out hongbao to aunties!",
            guideRef: "红包 and giving: the 给 sandwich",
            difficulty: "core",
            hints: ["Receiver right after 给, thing last.", "Check the direction: who gives, who gets?"],
            strategy: "Person before thing — always",
          },
          {
            id: "fest-mcq-a-q08",
            question: "What is {{舞狮|wǔ shī}}?",
            options: ["Dragon dance", "Lion dance", "Fan dance", "Fireworks display"],
            answerIndex: 1,
            explanation:
              "狮 = lion, so 舞狮 is the lion dance (two performers inside one lion costume). The dragon dance is {{舞龙|wǔ lóng}} — a long dragon carried on poles by a whole team.",
            guideRef: "过年: Chinese New Year, the big one",
            difficulty: "core",
          },
          {
            id: "fest-mcq-a-q09",
            question: "Why does Chinese New Year fall on a different date each year?",
            options: [
              "The government picks a new date every year",
              "It follows the 农历 lunar calendar, whose months track the moon",
              "It always falls on the first Monday of February",
              "It depends on the zodiac animal",
            ],
            answerIndex: 1,
            explanation:
              "The festival follows the {{农历|nónglì|lunar calendar}}: months start on new moons, and twelve moon-months fall about 11 days short of a solar year, so the date drifts between late January and mid-February.",
            guideRef: "过年: Chinese New Year, the big one",
            difficulty: "core",
            hints: ["农历 tracks the moon, not the sun."],
          },
          {
            id: "fest-mcq-a-q10",
            question:
              "At a Singapore reunion dinner, everyone stands and tosses the {{鱼生|yúshēng}} salad high with their chopsticks. Why toss it HIGH?",
            options: [
              "To mix the dressing evenly",
              "The higher the toss, the higher your luck rises in the new year",
              "To cool the fish down",
              "It's a race to finish first",
            ],
            answerIndex: 1,
            explanation:
              "The 'lo hei' toss (from {{捞起|lāoqǐ|to toss/scoop up}}) acts out rising fortunes: the higher you toss, the higher your luck climbs. It's a Singapore-and-Malaysia tradition you won't see in Beijing.",
            guideRef: "Lucky food: the sound-pun on every plate",
            difficulty: "core",
          },
          {
            id: "fest-mcq-a-q11",
            question:
              "Challenge: hongbao amounts avoid the number 4 — no $4, $40 or $44. Using the sound-pun logic from this topic, why?",
            options: [
              "{{四|sì|four}} sounds close to {{死|sǐ|death}} — an unlucky echo",
              "Four is hard to divide between relatives",
              "The number 4 is written in white, the funeral colour",
              "Four hongbao would be too heavy to carry",
            ],
            answerIndex: 0,
            explanation:
              "Same pun mechanism as 鱼/余, but in reverse: 四 sì sounds close to 死 sǐ ('death'), so 4 carries an unlucky echo. Puns can make a word lucky (鱼) or unlucky (四) — the sound does the work.",
            guideRef: "Lucky food: the sound-pun on every plate",
            difficulty: "challenge",
            hints: [
              "Which unlucky word sounds like sì?",
              "The 鱼/余 trick also works for BAD associations.",
            ],
            strategy: "Decode the pun",
          },
          {
            id: "fest-mcq-a-q12",
            question:
              "Challenge: at a New Year gathering you hear: {{大家过年好！|Dàjiā guònián hǎo!}} Combining the 'person + 好' greeting pattern with 过年, what is the speaker doing?",
            options: [
              "Wishing everyone a happy New Year",
              "Asking whether everyone had dinner",
              "Saying goodbye to everyone",
              "Asking everyone's zodiac animal",
            ],
            answerIndex: 0,
            explanation:
              "大家 = everyone, 过年好 = 'may your New Year be good' — the greeting pattern person + 好 stretched over 过年. You decoded a sentence you were never taught by combining two patterns.",
            guideRef: "过年: Chinese New Year, the big one",
            difficulty: "challenge",
            hints: [
              "Break it up: 大家 + 过年 + 好.",
              "Remember 你好 and 老师好 — person + 好 is a greeting.",
            ],
            strategy: "Build, don't memorise",
          },
        ],
      },
      {
        id: "fest-mcq-b",
        title: "Paper B — Festivals through the year",
        description: "Mid-Autumn, Dragon Boat, the zodiac, and festival wishes.",
        questions: [
          {
            id: "fest-mcq-b-q01",
            question: "What does {{月亮|yuèliang}} mean?",
            options: ["Sun", "Moon", "Star", "Lantern"],
            answerIndex: 1,
            explanation:
              "月亮 is the moon — the character 月 is a drawing of a crescent moon, and it reappears in 月饼 (mooncake).",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "warmup",
          },
          {
            id: "fest-mcq-b-q02",
            question: "At which festival do people eat {{粽子|zòngzi}}?",
            options: [
              "{{端午节|Duānwǔjié}}",
              "{{中秋节|Zhōngqiūjié}}",
              "{{春节|Chūnjié}}",
              "Christmas",
            ],
            answerIndex: 0,
            explanation:
              "粽子 — sticky rice wrapped in bamboo leaves — belongs to the Dragon Boat Festival 端午节, re-enacting the rice thrown into the river to protect Qu Yuan.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "warmup",
          },
          {
            id: "fest-mcq-b-q03",
            question: "What is a {{灯笼|dēnglong}}?",
            options: ["A dumpling", "A dragon boat", "A lantern", "A red packet"],
            answerIndex: 2,
            explanation:
              "灯笼 is a lantern — 灯 means lamp/light. Children carry glowing lanterns at Mid-Autumn Festival.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "warmup",
          },
          {
            id: "fest-mcq-b-q04",
            question: "Which set of activities belongs to {{中秋节|Zhōngqiūjié}}?",
            options: [
              "Racing dragon boats and eating zongzi",
              "Eating mooncakes, carrying lanterns and admiring the full moon",
              "Giving hongbao and watching lion dances",
              "Eating birthday cake and singing",
            ],
            answerIndex: 1,
            explanation:
              "中秋节 is the moon festival: 月饼 (mooncakes), 灯笼 (lanterns), 月亮 (the full moon) and family 团圆. Dragon boats and zongzi are 端午节; hongbao and lion dances are 春节.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "core",
          },
          {
            id: "fest-mcq-b-q05",
            question: "According to the legend, who lives on the moon?",
            options: [
              "{{屈原|Qū Yuán}}, the poet",
              "{{嫦娥|Cháng'é}}, who drank the elixir of immortality",
              "The Jade Emperor",
              "The twelve zodiac animals",
            ],
            answerIndex: 1,
            explanation:
              "嫦娥 drank the elixir of immortality and floated up to the moon, where she lives with a jade rabbit. Qu Yuan is the poet remembered at the Dragon Boat Festival — different story, different festival.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "core",
          },
          {
            id: "fest-mcq-b-q06",
            question: "In the Qu Yuan story, why did people throw rice into the river?",
            options: [
              "As a present for the river dragon",
              "So the fish would eat the rice instead of the poet's body",
              "To feed the dragon boat racers",
              "To make the river rise",
            ],
            answerIndex: 1,
            explanation:
              "The rice was a decoy: if the fish were busy eating rice, they would leave Qu Yuan's body alone. Today's 粽子 are that rice, wrapped and eaten in his memory.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "core",
            hints: ["Think about what hungry fish in the river might otherwise do."],
          },
          {
            id: "fest-mcq-b-q07",
            question: "What does {{龙舟|lóngzhōu}} mean?",
            options: ["Dragon dance", "Dragon boat", "Dragon year", "Dragon king"],
            answerIndex: 1,
            explanation:
              "龙 = dragon, 舟 = boat: the long racing boats with carved dragon heads. Don't confuse it with 舞龙, the dragon DANCE at New Year.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "core",
          },
          {
            id: "fest-mcq-b-q08",
            question: "Mooncakes, the full moon and families sitting together are all round. What does the round shape symbolise?",
            options: [
              "Wealth and gold coins",
              "{{团圆|tuányuán}} — the complete, reunited family circle",
              "The wheel of the year",
              "The sun",
            ],
            answerIndex: 1,
            explanation:
              "Round = 团圆, reunion: the family circle complete and unbroken like the full moon. The 团 in 团圆 literally means 'to gather into a ball'.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "core",
          },
          {
            id: "fest-mcq-b-q09",
            question: "Which animal comes FIRST in the zodiac cycle?",
            options: [
              "{{龙|lóng|dragon}}",
              "{{牛|niú|ox}}",
              "{{鼠|shǔ|rat}}",
              "{{猪|zhū|pig}}",
            ],
            answerIndex: 2,
            explanation:
              "The cycle starts with the rat 鼠 and ends with the pig 猪. Bonus pun: 鼠 shǔ sounds exactly like the verb 属 shǔ in 我属鼠.",
            guideRef: "生肖: which animal are you?",
            difficulty: "core",
          },
          {
            id: "fest-mcq-b-q10",
            question:
              "{{今年是马年。明年是什么年？|Jīnnián shì mǎ nián. Míngnián shì shénme nián?|This year is the horse year. What year is next year?}}",
            options: [
              "{{蛇年|shé nián|snake year}}",
              "{{羊年|yáng nián|goat year}}",
              "{{龙年|lóng nián|dragon year}}",
              "{{马年|mǎ nián|horse year}}",
            ],
            answerIndex: 1,
            explanation:
              "In the cycle …龙 → 蛇 → 马 → 羊…, the goat follows the horse, so next year is 羊年. The snake came BEFORE the horse — walking the circle backwards is the classic slip.",
            guideRef: "生肖: which animal are you?",
            difficulty: "core",
            hints: ["Recite the order: 龙, 蛇, 马, 羊…", "明年 = next year — step FORWARD one animal."],
            strategy: "Walk the circle animal by animal",
          },
          {
            id: "fest-mcq-b-q11",
            question: "What does {{祝你中秋节快乐！|Zhù nǐ Zhōngqiūjié kuàilè!}} mean?",
            options: [
              "Happy New Year!",
              "Happy birthday!",
              "Happy Mid-Autumn Festival!",
              "Congratulations, may you prosper!",
            ],
            answerIndex: 2,
            explanation:
              "The wish machine: 祝 + 你 + occasion + 快乐. Here the occasion is 中秋节, Mid-Autumn Festival — so it's a Mid-Autumn wish.",
            guideRef: "红包 and giving: the 给 sandwich",
            difficulty: "core",
          },
          {
            id: "fest-mcq-b-q12",
            question:
              "Challenge: Ben was born in a dog year. His sister is exactly 3 years younger. Walking the cycle (…狗 dog → 猪 pig → 鼠 rat → 牛 ox…), what is his sister's animal?",
            options: [
              "{{猪|zhū|pig}}",
              "{{鼠|shǔ|rat}}",
              "{{牛|niú|ox}}",
              "{{狗|gǒu|dog}}",
            ],
            answerIndex: 2,
            explanation:
              "Three years AFTER the dog year: +1 = pig, +2 = rat, +3 = ox. So she's an ox 牛. (Only gaps that are multiples of 12 give the SAME animal.)",
            guideRef: "生肖: which animal are you?",
            difficulty: "challenge",
            hints: [
              "Younger = born LATER = step forwards round the circle.",
              "Count three steps from 狗: one… two… three.",
            ],
            strategy: "Walk the circle animal by animal",
          },
          {
            id: "fest-mcq-b-q13",
            question:
              "Challenge — read and infer: {{小明说：我最喜欢的节日不是春节。这个节日我们吃月饼，看月亮。|Xiǎomíng shuō: wǒ zuì xǐhuan de jiérì bú shì Chūnjié. Zhège jiérì wǒmen chī yuèbing, kàn yuèliang.}} Which festival is Xiaoming's favourite?",
            options: [
              "{{春节|Chūnjié}}",
              "{{端午节|Duānwǔjié}}",
              "{{中秋节|Zhōngqiūjié}}",
              "His birthday",
            ],
            answerIndex: 2,
            explanation:
              "He rules out 春节 himself (不是春节), then gives two clues: eating 月饼 and watching the 月亮 — both point to Mid-Autumn Festival. The answer is never stated; the CLUES name it. That's inference, the exam skill.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "challenge",
            hints: [
              "不是春节 eliminates one option straight away.",
              "Which festival owns 月饼 and 月亮?",
            ],
            strategy: "Attach each food to its story",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "fest-qa-a",
        title: "Paper A — Chinese New Year written practice",
        description: "Wishes, hongbao sentences, puns and a reading passage.",
        questions: [
          {
            id: "fest-qa-a-q01",
            question:
              "Your neighbour greets you at Chinese New Year. Write TWO different New Year greetings in Chinese. (Characters or pinyin.)",
            modelAnswer:
              "{{新年快乐！|Xīnnián kuàilè!|Happy New Year!}} and {{恭喜发财！|Gōngxǐ fācái!|Congratulations, may you prosper!}} (祝你新年快乐 also accepted.)",
            markScheme: [
              "One greeting: {{新年快乐|xīnnián kuàilè}} (with or without 祝你)",
              "A second, different greeting: {{恭喜发财|gōngxǐ fācái}} (or 过年好)",
              "Both appropriate to New Year (not 生日快乐 or 中秋节快乐)",
            ],
            commonError:
              "Offering 生日快乐 — right pattern, wrong festival. Check the occasion before you attach 快乐.",
            guideRef: "过年: Chinese New Year, the big one",
            difficulty: "warmup",
            hints: ["One wish is about the new year, the other about prosperity."],
          },
          {
            id: "fest-qa-a-q02",
            question:
              "Write in Chinese: 'At New Year, Grandma gives me a hongbao and I give Mum a present.' ({{奶奶|nǎinai}} = grandma.) Characters or pinyin.",
            modelAnswer:
              "{{过年奶奶给我一个红包，我送妈妈一个礼物。|Guònián nǎinai gěi wǒ yí gè hóngbāo, wǒ sòng māma yí gè lǐwù.}} (我给妈妈一个礼物 also accepted.)",
            markScheme: [
              "Time word 过年 (or 春节) at the FRONT",
              "{{奶奶给我一个红包|nǎinai gěi wǒ yí gè hóngbāo}} — person before thing",
              "{{我送妈妈一个礼物|wǒ sòng māma yí gè lǐwù}} (送 or 给) — person before thing",
              "Both clauses keep receiver directly after the verb",
            ],
            commonError:
              "Putting the time at the end (奶奶给我一个红包过年 ✗) — Chinese time words go first, and the thing never comes before the person.",
            guideRef: "红包 and giving: the 给 sandwich",
            difficulty: "core",
            hints: [
              "Start with the time: 过年….",
              "Two 给-sandwiches: verb + person + thing, twice.",
            ],
            solutions: [
              {
                label: "Build clause by clause (recommended)",
                steps: [
                  "Time first: 过年.",
                  "Clause 1: 奶奶 (giver) + 给 + 我 (receiver) + 一个红包.",
                  "Clause 2: 我 (giver) + 送 + 妈妈 (receiver) + 一个礼物.",
                  "Join with a comma: 过年奶奶给我一个红包，我送妈妈一个礼物。",
                ],
              },
              {
                label: "Reuse a known skeleton",
                steps: [
                  "Take 妈妈给我一个红包 from the guide.",
                  "Swap the giver to 奶奶 for clause 1.",
                  "For clause 2, flip roles: 我 gives to 妈妈, thing becomes 一个礼物, verb upgrades to 送 for gift-flavour.",
                  "Prefix the time word 过年 to the whole sentence.",
                ],
              },
            ],
          },
          {
            id: "fest-qa-a-q03",
            question:
              "Read the passage, then answer in English: {{春节前，我们去牛车水买东西。年夜饭有鱼、饺子和年糕。爸爸说：年年有余！大年初一我们去拜年，我有八个红包！|Chūnjié qián, wǒmen qù Niúchēshuǐ mǎi dōngxi. Niányèfàn yǒu yú, jiǎozi hé niángāo. Bàba shuō: niánnián yǒu yú! Dànián chūyī wǒmen qù bàinián, wǒ yǒu bā gè hóngbāo!}} (a) Where does the family go shopping before New Year? (b) Name the three foods at the reunion dinner. (c) What does Dad exclaim? (d) How many hongbao does the writer collect?",
            modelAnswer:
              "(a) Chinatown (Niucheshui / 牛车水). (b) Fish, dumplings and New Year cake (niangao). (c) 'Nian nian you yu' — may every year bring a surplus. (d) Eight.",
            markScheme: [
              "(a) Chinatown / 牛车水",
              "(b) fish, dumplings, niangao — all three",
              "(c) 年年有余 / 'may every year have surplus' (meaning, not just sounds)",
              "(d) eight ({{八|bā}})",
            ],
            commonError:
              "Translating 年年有余 as 'every year has fish' — the written phrase uses 余 (surplus); the fish is the pun, not the meaning.",
            guideRef: "Lucky food: the sound-pun on every plate",
            difficulty: "core",
            hints: [
              "Scan for question keywords: 去…买东西 (shopping), 年夜饭有… (foods), 爸爸说 (Dad says), 几个红包 (how many).",
              "八 = 8.",
            ],
          },
          {
            id: "fest-qa-a-q04",
            question:
              "A visitor asks: 'Why is EVERYTHING red at Chinese New Year, and why did my Singaporean friends refuse to put $4 in a hongbao?' Answer both parts in English.",
            modelAnswer:
              "Red is the traditional lucky colour, believed to bring good fortune and scare off bad luck — so decorations, clothes and money envelopes are all red. The $4 refusal is a sound-pun: 四 sì (four) sounds close to 死 sǐ (death), so amounts with 4 carry an unlucky echo and are avoided; even amounts with 8 (发 fā, prosper) are preferred.",
            markScheme: [
              "Red = lucky colour / brings good fortune (wards off bad luck)",
              "Red explains 红包, red clothes, red decorations",
              "四 sì sounds like 死 sǐ 'death'",
              "So 4 is avoided in hongbao amounts (8 preferred is a bonus point)",
            ],
            commonError:
              "Answering 'because it's tradition' — the examiner wants the MECHANISM: red = luck, and the 四/死 sound-pun.",
            guideRef: "Lucky food: the sound-pun on every plate",
            difficulty: "core",
            hints: [
              "Part two is a pun question — which unlucky word sounds like sì?",
              "Compare with the 鱼/余 pun, but in the unlucky direction.",
            ],
          },
          {
            id: "fest-qa-a-q05",
            question:
              "Describe in 3-4 Chinese sentences how your family celebrates Chinese New Year. Try to use 过, 吃, 给 and a greeting. (Characters or pinyin; invent details if you need to.)",
            modelAnswer:
              "{{我们在新加坡过春节。|Wǒmen zài Xīnjiāpō guò Chūnjié.}} {{年夜饭我们吃鱼和饺子。|Niányèfàn wǒmen chī yú hé jiǎozi.}} {{爷爷奶奶给我红包。|Yéye nǎinai gěi wǒ hóngbāo.}} {{我说：祝你们新年快乐！|Wǒ shuō: zhù nǐmen xīnnián kuàilè!}}",
            markScheme: [
              "Uses 过 + 春节/年 correctly",
              "A food sentence with 吃 (time word first is a bonus)",
              "A 给 sentence with person before thing",
              "A greeting or 祝-wish, spelt/toned correctly",
              "3-4 connected sentences on the family theme",
            ],
            commonError:
              "Word-for-word English order: 我们吃饺子在春节 ✗ — the time expression (春节 / 年夜饭) must move to the front.",
            guideRef: "红包 and giving: the 给 sandwich",
            difficulty: "challenge",
            strategy: "Build each sentence from a pattern you own",
            hints: [
              "Sentence starters: 我们在新加坡过…, 年夜饭我们吃…, …给我…, 祝你们….",
              "One idea per sentence — short and correct beats long and broken.",
            ],
          },
          {
            id: "fest-qa-a-q06",
            question:
              "Explain to a classmate (in English) what happens during a 'lo hei' ({{捞起|lāoqǐ}}) and why Singaporeans do it at Chinese New Year.",
            modelAnswer:
              "Everyone stands around a plate of yusheng (鱼生, raw fish salad), digs in their chopsticks together and tosses the ingredients as high as possible while shouting wishes. Tossing high acts out rising luck — the higher the toss, the better the coming year. It's a Singapore-and-Malaysia tradition, not something done in mainland China.",
            markScheme: [
              "Yusheng / 鱼生 raw fish salad shared by the group",
              "Everyone tosses it together with chopsticks (while calling out wishes)",
              "Higher toss = higher/rising luck for the new year",
              "Identified as a Singapore/Malaysia tradition",
            ],
            commonError:
              "Leaving out the WHY — the toss symbolises fortunes rising; without that, it's just messy salad.",
            guideRef: "Lucky food: the sound-pun on every plate",
            difficulty: "core",
            hints: ["Cover: what the dish is, what everyone does, and what the height means."],
          },
        ],
      },
      {
        id: "fest-qa-b",
        title: "Paper B — Festivals through the year",
        description: "Mid-Autumn, Dragon Boat, zodiac reasoning and describing your favourite festival.",
        questions: [
          {
            id: "fest-qa-b-q01",
            question:
              "Translate into English: {{祝你中秋节快乐！|Zhù nǐ Zhōngqiūjié kuàilè!}}",
            modelAnswer: "Happy Mid-Autumn Festival! (literally: 'I wish you Mid-Autumn Festival happiness.')",
            markScheme: [
              "Recognises 祝(你) as 'wishing you'",
              "中秋节 = Mid-Autumn Festival",
              "快乐 = happy — whole wish rendered naturally",
            ],
            commonError:
              "Mistaking 中秋节 for New Year — check the festival inside the 祝…快乐 frame before translating.",
            guideRef: "红包 and giving: the 给 sandwich",
            difficulty: "warmup",
            hints: ["Frame: 祝 + you + OCCASION + happy — just identify the occasion."],
          },
          {
            id: "fest-qa-b-q02",
            question:
              "Retell the story of {{嫦娥|Cháng'é}} in English in two or three sentences, and say what people 'visit' her with at Mid-Autumn Festival.",
            modelAnswer:
              "Chang'e was the wife of the archer Hou Yi, who was given an elixir of immortality. She drank it (to keep it from a thief), floated up to the moon, and still lives there with a jade rabbit. At Mid-Autumn, families 'visit' her by gazing at the full moon while eating mooncakes.",
            markScheme: [
              "Chang'e drank the elixir of immortality",
              "She floated/flew up to the moon and lives there (jade rabbit a bonus)",
              "People remember her by moon-gazing / eating mooncakes at Mid-Autumn",
            ],
            commonError:
              "Swapping in Qu Yuan — he's the Dragon Boat poet. Chang'e is the MOON story; match the story to the festival.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "core",
            hints: [
              "Three beats: elixir → moon → remembered every Mid-Autumn.",
            ],
          },
          {
            id: "fest-qa-b-q03",
            question:
              "The Dragon Boat Festival has two famous customs: {{龙舟|lóngzhōu}} races and eating {{粽子|zòngzi}}. Explain in English how EACH one re-enacts part of the Qu Yuan story.",
            modelAnswer:
              "Qu Yuan was a poet who drowned himself in a river when his kingdom fell. The dragon boat races re-enact the villagers racing out in boats to try to save him; the zongzi re-enact the rice people threw into the river so the fish would eat the rice instead of his body — today the rice is wrapped in bamboo leaves and eaten in his memory.",
            markScheme: [
              "Qu Yuan: poet who drowned in a river",
              "Boat races = the rush/race to save him",
              "Rice thrown so fish would spare his body",
              "Zongzi = that rice, now wrapped in bamboo leaves",
            ],
            commonError:
              "Explaining only ONE custom — the question says EACH; two customs need two links to the story.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "core",
            hints: [
              "Boats ↔ rescue attempt; rice ↔ protecting the body.",
              "Answer in two labelled parts so neither is missed.",
            ],
          },
          {
            id: "fest-qa-b-q04",
            question:
              "Answer in full Chinese sentences: {{你属什么？今年是什么年？|Nǐ shǔ shénme? Jīnnián shì shénme nián?}} (Invent an animal if you're not sure of yours; 2026 is the horse year.)",
            modelAnswer:
              "{{我属蛇。|Wǒ shǔ shé.|I'm a snake (zodiac).}} {{今年是马年。|Jīnnián shì mǎ nián.|This year is the horse year.}} (Any animal accepted for the first answer, as long as the pattern 我属… is right.)",
            markScheme: [
              "First answer uses 我属 + animal (echoes the question's verb 属)",
              "No 是 inserted (我是属蛇 ✗ / 我属是 ✗)",
              "Second answer uses 今年是 + animal + 年",
              "Animal for 2026 given as 马 (horse)",
            ],
            commonError:
              "我是蛇 ✗ — that says 'I AM a snake' (the actual reptile!). The zodiac verb is 属: 我属蛇.",
            guideRef: "生肖: which animal are you?",
            difficulty: "core",
            hints: [
              "Both answers copy the question's shape — swap 什么 for the answer.",
              "Question 1 verb: 属. Question 2 frame: 今年是…年.",
            ],
          },
          {
            id: "fest-qa-b-q05",
            question:
              "Read the passage, then answer in English: {{中秋节我跟家人一起吃晚饭。晚饭以后，我们去花园看月亮。妹妹有一个红色的灯笼。妈妈给我们月饼，我最喜欢吃月饼！|Zhōngqiūjié wǒ gēn jiārén yìqǐ chī wǎnfàn. Wǎnfàn yǐhòu, wǒmen qù huāyuán kàn yuèliang. Mèimei yǒu yí gè hóngsè de dēnglong. Māma gěi wǒmen yuèbing, wǒ zuì xǐhuan chī yuèbing!}} (a) Who does the writer eat dinner with? (b) Where do they go after dinner, and to do what? (c) What does the little sister have? (d) What does the writer like best?",
            modelAnswer:
              "(a) Their family. (b) To the garden, to look at the moon. (c) A red lantern. (d) Eating mooncakes.",
            markScheme: [
              "(a) family / family members ({{家人|jiārén}})",
              "(b) the garden ({{花园|huāyuán}}) + to watch the moon — both place and purpose",
              "(c) a red lantern ({{红色的灯笼|hóngsè de dēnglong}})",
              "(d) (eating) mooncakes ({{月饼|yuèbing}})",
            ],
            commonError:
              "Missing half of (b) — the question asks WHERE and WHAT FOR; 去花园 gives the place, 看月亮 the purpose.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "core",
            hints: [
              "跟…一起 tells you the companions; 去 + place + verb tells you where and why.",
              "最喜欢 flags the favourite.",
            ],
          },
          {
            id: "fest-qa-b-q06",
            question:
              "Challenge: You are 13 and were born in a snake year. Your uncle says: {{我也属蛇！|Wǒ yě shǔ shé!|I'm also a snake!}} He is older than 30 and younger than 45. Work out exactly how much older he is than you, and how old he is. Explain your reasoning.",
            modelAnswer:
              "Two snakes must be a multiple of 12 years apart: 12, 24, 36… A 12-year gap makes him 25 (too young); a 24-year gap makes him 37, which fits 30-45; a 36-year gap makes him 49 (too old). So he is exactly 24 years older than you, and he is 37.",
            markScheme: [
              "Same animal ⇒ age gap is a multiple of 12",
              "Tests the candidate gaps (12 / 24 / 36) against 13 + gap",
              "Rejects 25 (too young) and 49 (too old) using the 30-45 window",
              "Concludes: 24 years older, aged 37",
            ],
            commonError:
              "Stopping at 'a multiple of 12' without using the 30-45 clue to pin down WHICH multiple — the question asks for an exact answer.",
            guideRef: "生肖: which animal are you?",
            difficulty: "challenge",
            strategy: "Treat the zodiac as a 12-hour clock, then test each case",
            hints: [
              "Same animal — what does that force about the age gap?",
              "Try each possible gap: 13+12, 13+24, 13+36 — which lands between 30 and 45?",
            ],
            solutions: [
              {
                label: "List and eliminate (recommended)",
                steps: [
                  "Same zodiac animal ⇒ the gap is 12, 24 or 36… years.",
                  "Compute his age for each: 13+12 = 25, 13+24 = 37, 13+36 = 49.",
                  "Only 37 lies between 30 and 45.",
                  "So the gap is 24 years and he is 37.",
                ],
              },
              {
                label: "Work from the age window",
                steps: [
                  "He is between 30 and 45, so the gap is between 30−13 = 17 and 45−13 = 32 years.",
                  "The only multiple of 12 between 17 and 32 is 24.",
                  "Gap = 24 ⇒ age = 13 + 24 = 37.",
                ],
              },
            ],
          },
          {
            id: "fest-qa-b-q07",
            question:
              "Challenge: Write 3-4 Chinese sentences about your favourite festival, using 最喜欢的节日, 过, a food sentence, and 跟家人一起. (Characters or pinyin; any festival from this topic.)",
            modelAnswer:
              "{{我最喜欢的节日是中秋节。|Wǒ zuì xǐhuan de jiérì shì Zhōngqiūjié.}} {{每年我们在新加坡过中秋节。|Měi nián wǒmen zài Xīnjiāpō guò Zhōngqiūjié.}} {{中秋节我们吃月饼。|Zhōngqiūjié wǒmen chī yuèbing.}} {{晚上我跟家人一起看月亮。|Wǎnshang wǒ gēn jiārén yìqǐ kàn yuèliang.}}",
            markScheme: [
              "Opinion frame 我最喜欢的节日是… used correctly",
              "过 + festival sentence",
              "Food sentence with the time word first (e.g. 中秋节我们吃月饼)",
              "跟家人一起 placed BEFORE the verb",
              "Festival, foods and activities all match (no mooncakes at 端午节!)",
            ],
            commonError:
              "Mixing festivals and foods (春节我们吃月饼 ✗) — each festival owns its foods; let the story check your sentence.",
            guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
            difficulty: "challenge",
            strategy: "Build each sentence from a pattern you own",
            hints: [
              "Skeletons: 我最喜欢的节日是…。 我们…过…。 …我们吃…。 我跟家人一起…。",
              "Check the food matches the festival before you finish.",
            ],
          },
        ],
      },
    ],
  },
};
