import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "weather-m1",
    title: "Weather Paper 1 — Conditions, Radicals & Thermometers",
    questions: [
      {
        id: "weather-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "weather-conditions",
        question: "How do you ask **'What is the weather like today?'** in Mandarin?",
        options: [
          "今天天气怎么样？",
          "今天天气多少度？",
          "今天什么天气吗？",
          "天气今天是谁？",
        ],
        answerIndex: 0,
        hints: ["Use the question phrase **怎么样** (*zěnmeyàng*, how is it / what is it like) at the end."],
        explanation:
          "**今天天气怎么样？** (*Jīntiān tiānqì zěnmeyàng?*) is the natural way to ask what today's weather is like. **今天天气多少度？** asks specifically 'how many degrees', whilst **什么…吗** mixes two incompatible question markers.",
      },
      {
        id: "weather-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "weather-conditions",
        question: "Which character pair means **'sunny day'** — and why does its first character have **日** on the left?",
        options: [
          "晴天 — because 日 is the sun radical",
          "阴天 — because 月 means bright sun",
          "请天 — because 讠 means clear sky",
          "眼睛 — because 目 means sunshine",
        ],
        answerIndex: 0,
        hints: ["Look for the sun radical **日** (*rì*) paired with **青** (*qīng*)."],
        explanation:
          "**晴天** (*qíngtiān*) means 'sunny day', and **晴** starts with the sun radical **日** (*rì*). **请** (*qǐng*, please) uses the speech radical **讠**, **眼睛** (*yǎnjing*, eyes) uses the eye radical **目**, and **阴天** (*yīntiān*) means 'overcast day'.",
      },
      {
        id: "weather-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-conditions",
        question: "How does Mandarin say **'It is raining heavily in Singapore this afternoon'**?",
        options: [
          "今天下午新加坡大下雨。",
          "今天下午新加坡下大雨。",
          "今天下午新加坡是下雨大。",
          "新加坡今天下午是下大雨。",
        ],
        answerIndex: 1,
        hints: [
          "Remember **下雨** (*xià yǔ*) is a Verb + Object pair ('fall + rain').",
          "Where must the adjective **大** sit to describe the noun **雨** — and is **是** allowed before a verb?",
        ],
        explanation:
          "**今天下午新加坡下大雨。** is correct because **下雨** splits apart to put **大** directly before the noun **雨** (**下大雨**), with no **是** before a verb phrase. **大下雨** puts the adjective in the wrong spot, and **是下大雨** wrongly adds **是**.",
      },
      {
        id: "weather-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "weather-conditions",
        question: "All four of **雪** (*xuě*), **雷** (*léi*), **雾** (*wù*) and **零** (*líng*) share which radical at the top?",
        options: [
          "氵 (three-dot water)",
          "冫 (two-dot ice)",
          "雨 (rain cloud)",
          "灬 (four-dot fire)",
        ],
        answerIndex: 2,
        hints: ["Look at the wide roof with four small strokes inside at the top of **雪**, **雷** and **雾**."],
        explanation:
          "They all wear **雨** (*yǔ*, rain) compressed at the top, signalling sky/cloud phenomena: **雪** (snow), **雷** (thunder), **雾** (fog) and **零** (originally sparse raindrops, now zero).",
      },
      {
        id: "weather-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-conditions",
        question: "Which of these weather sentences uses **是** (*shì*) **grammatically correctly**?",
        options: [
          "今天是刮大风。",
          "今天是下雨。",
          "今天是很潮湿。",
          "今天是阴天。",
        ],
        answerIndex: 3,
        hints: [
          "**是** links a subject to a **noun**, never a bare verb or a plain adjective.",
          "Which option ends in **天** (*tiān*, day), making it a noun?",
        ],
        explanation:
          "**今天是阴天。** is right because **阴天** ('overcast day') is a noun ending in **天**. **刮大风** and **下雨** are verb-object phrases, and **很潮湿** is an adjective phrase — none of those take **是** in standard descriptions.",
      },
      {
        id: "weather-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "temperature-degree",
        question: "What does **零下八度** (*língxià bā dù*) mean in English?",
        options: [
          "18°C",
          "8°C",
          "0.8°C",
          "−8°C",
        ],
        answerIndex: 3,
        hints: ["**零** means zero and **下** means below."],
        explanation:
          "**零下** literally means 'below zero', so **零下八度** means **−8°C**. Plain **八度** is 8°C and **十八度** is 18°C.",
      },
      {
        id: "weather-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "temperature-degree",
        question: "Which sentence naturally describes Singapore's afternoon heat and humidity?",
        options: [
          "新加坡的下午是热和是潮湿。",
          "新加坡的下午很热，也很潮湿。",
          "新加坡的下午热一点儿比北京。",
          "新加坡是三十两度。",
        ],
        answerIndex: 1,
        hints: [
          "Adjectives like **热** and **潮湿** use **很** instead of **是**.",
          "Remember **和** (*hé*) joins nouns, NOT two adjective/verb clauses — use **，也…** instead!",
        ],
        explanation:
          "**新加坡的下午很热，也很潮湿。** links both adjectives properly with **很** and joins the two clauses with **，也**. **是热和是潮湿** commits two errors at once: using **是** with adjectives and joining clauses with **和**.",
      },
      {
        id: "weather-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "temperature-degree",
        question: "Look at the radicals of **冷** (*lěng*), **潮湿** (*cháoshī*) and **热** (*rè*). Which statement is accurate?",
        options: [
          "冷 has 3-dot water 氵, whilst 潮湿 has 2-dot ice 冫.",
          "热 has 4-dot rain 灬 because tropical rain is hot.",
          "冷 has 2-dot ice 冫, 潮湿 has 3-dot water 氵, and 热 has 4-dot fire 灬.",
          "All three characters share the exact same water radical.",
        ],
        answerIndex: 2,
        hints: [
          "Count the strokes on the left of **冷** (2 strokes) versus **潮湿** (3 strokes).",
          "What do the 4 dots **灬** at the bottom of **热** represent?",
        ],
        explanation:
          "**冷** uses the 2-dot ice radical **冫**, **潮湿** uses the 3-dot liquid water radical **氵** on both characters, and **热** uses the 4-dot fire radical **灬** at the bottom!",
      },
      {
        id: "weather-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "temperature-degree",
        question: "What is the exact Pinyin (including neutral tones) for **暖和** ('pleasantly warm')?",
        options: [
          "nuǎnhé",
          "nǎnhē",
          "luǎnhuo",
          "nuǎnhuo",
        ],
        answerIndex: 3,
        hints: [
          "The first character **暖** starts with **n-** in the 3rd tone (*nuǎn*).",
          "In this everyday weather word, **和** changes pronunciation from *hé* to a neutral-tone syllable ending in *-uo*!",
        ],
        explanation:
          "In **暖和**, **和** is pronounced **huo** (neutral tone), giving **nuǎnhuo**. Reading it as *nuǎnhé* is one of the most common Year 8 pronunciation traps!",
      },
      {
        id: "weather-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "time-weather-forecasts",
        question: "Which sentence means **'The weather forecast says it will snow tomorrow'**?",
        options: [
          "天气预报说明天会下雪。",
          "天气预报说昨天会下雪。",
          "天气预报说明天下雪了没有。",
          "明天天气预报已经下雪。",
        ],
        answerIndex: 0,
        hints: ["Look for **明天** (tomorrow) + **会** (will) + **下雪** (snow)."],
        explanation:
          "**天气预报说明天会下雪。** combines **明天** (tomorrow) with the future prediction modal **会** (*huì*) + **下雪**. **昨天** means 'yesterday', which clashes with **会**.",
      },
      {
        id: "weather-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "time-weather-forecasts",
        question: "How do you correctly say **'It did NOT rain yesterday'** in Mandarin?",
        options: [
          "昨天不下雨了。",
          "昨天没下雨了。",
          "昨天没下雨。",
          "昨天不会下雨。",
        ],
        answerIndex: 2,
        hints: [
          "Past events are negated with **没** (*méi*) or **没有**, NOT **不**.",
          "When **没** appears before a verb, what happens to **了**?",
        ],
        explanation:
          "**昨天没下雨。** is right: negate completed past actions with **没(有)** and **drop 了**! **昨天没下雨了** is ungrammatical because **没** ('did not happen') and **了** ('happened') contradict each other.",
      },
      {
        id: "weather-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "weather-activities",
        question: "Which measure word completes **一___雨伞** (*an umbrella*)?",
        options: [
          "个 (gè)",
          "件 (jiàn)",
          "条 (tiáo)",
          "把 (bǎ)",
        ],
        answerIndex: 3,
        hints: ["Think of how your hand grips an umbrella's handle — look for the hand radical **扌**!"],
        explanation:
          "**把** (*bǎ*, with the hand radical **扌**) is the measure word for objects with handles that you grasp, such as **一把雨伞** (an umbrella) and **一把椅子** (a chair). **件** is for tops/raincoats (**一件雨衣**).",
      },
      {
        id: "weather-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-activities",
        question: "Choose the sentence with **100% accurate word order** for *'If it rains tomorrow, we will stay at home'*:",
        options: [
          "如果明天下雨，就我们待在家。",
          "如果明天下雨，我们就待在家。",
          "如果明天下雨，所以我们待在家。",
          "明天下雨如果，我们待在家就。",
        ],
        answerIndex: 1,
        hints: [
          "**如果** (*if*) pairs with **就** (*then*), not **所以**.",
          "**就** is an adverb — must it sit *before* or *after* the subject **我们**?",
        ],
        explanation:
          "**如果明天下雨，我们就待在家。** places the adverb **就** strictly between the subject **我们** and the verb **待在家**. **就我们待在家** puts **就** before the subject, and **如果…所以…** mismatches two different connector pairs.",
      },
      {
        id: "weather-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reading-weather-reports",
        question: "A weather app shows for London: **伦敦：早上有雾，下午阴转小雨，6–11度。** What will London's afternoon weather be?",
        options: [
          "Sunny in the afternoon after morning rain",
          "Thick fog all afternoon with thunder",
          "Overcast turning to light rain in the afternoon",
          "Heavy snow with sub-zero temperatures",
        ],
        answerIndex: 2,
        hints: [
          "Focus on the second half: **下午阴转小雨**.",
          "**阴** = overcast, **转** = turning into, **小雨** = light rain.",
        ],
        explanation:
          "**下午阴转小雨** means 'in the afternoon, overcast (**阴**) turning to (**转**) light rain (**小雨**)'. Fog (**有雾**) is only in the early morning (**早上**), and **6–11度** is above zero.",
      },
      {
        id: "weather-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reading-weather-reports",
        question: "Today Singapore is **31°C** and Beijing is **19°C**. Which Mandarin comparison is **both factually true and grammatically correct**?",
        options: [
          "今天新加坡比北京很热。",
          "今天新加坡的气温比北京小十二度。",
          "今天北京没有新加坡冷。",
          "今天北京比新加坡凉快。",
        ],
        answerIndex: 3,
        hints: [
          "Eliminate any sentence that puts **很** after **比** or uses **小** for **气温**.",
          "Check the facts: 19°C in Beijing is pleasantly cooler (**凉快**) than 31°C in Singapore!",
        ],
        explanation:
          "**今天北京比新加坡凉快。** ('Today Beijing is cooler than Singapore') is both true and grammatically clean! **比北京很热** wrongly inserts **很** into a **比** sentence, **气温…小** should be **低** (low), and **北京没有新加坡冷** falsely claims Beijing is less cold than Singapore.",
      },
    ],
  },
  {
    id: "weather-m2",
    title: "Weather Paper 2 — Forecasts, Comparisons & Knock-On Plans",
    questions: [
      {
        id: "weather-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "weather-conditions",
        question: "What does **外面打雷了！** (*Wàimiàn dǎ léi le!*) warn you about?",
        options: [
          "It has started thundering outside!",
          "It is pleasantly breezy outside!",
          "The fog has cleared outside!",
          "It is snowing lightly outside!",
        ],
        answerIndex: 0,
        hints: ["**打雷** (*dǎ léi*) has the rain-cloud radical **雨** over **田**."],
        explanation:
          "**打雷** means 'to thunder', and sentence-final **了** marks a new situation ('It has started thundering outside!'). Breezy/cool is **凉快**, fog is **雾**, and snow is **下雪**.",
      },
      {
        id: "weather-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-conditions",
        question: "In Mandarin, how do you say **'strong wind is blowing at the seaside today'**?",
        options: [
          "今天海边刮大风。",
          "今天海边大刮风。",
          "今天在海边是刮风很大。",
          "海边今天风刮大是。",
        ],
        answerIndex: 0,
        hints: [
          "**刮风** (*guā fēng*, blow + wind) is a separable verb-object phrase.",
          "Put **大** right before the noun **风**, with no **是**.",
        ],
        explanation:
          "**今天海边刮大风。** inserts **大** directly before the noun **风** inside **刮风**. **大刮风** misplaces the adjective before the verb, and **是刮风** wrongly adds **是**.",
      },
      {
        id: "weather-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "temperature-degree",
        question: "You step onto a chilly Singapore MRT carriage and exclaim: **空调太冷了！** What does **太…了** express here?",
        options: [
          "Not very cold",
          "A little bit warm",
          "Too cold! / Way too cold!",
          "Cooler than yesterday",
        ],
        answerIndex: 2,
        hints: ["**太 + Adjective + 了** is Mandarin's classic exclamation frame."],
        explanation:
          "**太冷了！** (*tài lěng le!*) means 'Too cold! / Freezing cold!'. 'Not too cold' drops **了** (**不太冷**), and 'cooler than yesterday' uses **比昨天凉快**.",
      },
      {
        id: "weather-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "temperature-degree",
        question: "How do you say **'not too hot'** in Mandarin (for example, describing a pleasant 25°C day)?",
        options: [
          "不太热了",
          "没太热了",
          "不是太热吗",
          "不太热",
        ],
        answerIndex: 3,
        hints: [
          "Negate adjectives with **不**, not **没**.",
          "When **太 + Adjective** is negated as **不太…**, do you keep or drop **了**?",
        ],
        explanation:
          "**不太热** (*bú tài rè*, not too hot) drops **了**! **太热了** uses **了** for an emphatic positive exclamation, whereas negated **不太 + Adjective** never takes **了**.",
      },
      {
        id: "weather-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "temperature-degree",
        question: "Compare **有点儿冷** (*yǒudiǎnr lěng*) and **冷一点儿** (*lěng yìdiǎnr*). Which sentence uses them accurately?",
        options: [
          "今天早上冷有点儿。",
          "今天比昨天有点儿冷。",
          "今天早上有点儿冷，比昨天冷一点儿。",
          "今天一点儿冷。",
        ],
        answerIndex: 2,
        hints: [
          "**有点儿** ('a little bit', slightly undesirable) goes **BEFORE** the adjective.",
          "**一点儿** ('a little more' in comparisons) goes **AFTER** the adjective!",
        ],
        explanation:
          "**今天早上有点儿冷，比昨天冷一点儿。** ('This morning is a bit chilly — a little colder than yesterday') nails both rules: **有点儿 + Adjective** describes a standalone feeling, while **Adjective + 一点儿** follows **比** in a comparison!",
      },
      {
        id: "weather-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "time-weather-forecasts",
        question: "Put these words into natural Mandarin order: **会 / 下午 / 下大雨 / 明天**",
        options: [
          "下午明天会下大雨。",
          "会下大雨明天下午。",
          "明天下午会下大雨。",
          "明天会下午下大雨。",
        ],
        answerIndex: 2,
        hints: ["Mandarin orders time from **biggest unit to smallest unit**, right at the start of the sentence!"],
        explanation:
          "**明天下午会下大雨。** puts time at the front in big-to-small order (**明天** day → **下午** part of day), followed by modal **会** + verb **下大雨**. **下午明天** is English-style small-to-big order, and **会下大雨明天下午** puts time at the end.",
      },
      {
        id: "weather-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "time-weather-forecasts",
        question: "Look out of the classroom window at black storm clouds over Tanglin! Which phrase best says **'It is about to rain!'**?",
        options: [
          "快要下雨了！",
          "昨天下雨了！",
          "正在没下雨！",
          "下雨过！",
        ],
        answerIndex: 0,
        hints: [
          "Which frame expresses an **imminent** event about to happen any minute?",
          "Look for **快要 + Verb + 了**.",
        ],
        explanation:
          "**快要下雨了！** (*Kuài yào xià yǔ le!*) means 'It's about to rain any moment!'. **昨天下雨了** is yesterday, **正在没下雨** mixes incompatible markers, and **过** is for past life experience.",
      },
      {
        id: "weather-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "time-weather-forecasts",
        question: "What is the spoken tone pattern of **不会** (*bú huì*, will not) in **明天不会下雨**?",
        options: [
          "bù huì (4th tone + 4th tone)",
          "bú huì (2nd tone + 4th tone — tone sandhi!)",
          "bǔ huǐ (3rd tone + 3rd tone)",
          "bū huī (1st tone + 1st tone)",
        ],
        answerIndex: 1,
        hints: [
          "**会** (*huì*) is 4th tone.",
          "What happens to **不** (*bù*) whenever it stands directly in front of another 4th-tone syllable?",
        ],
        explanation:
          "Before a 4th-tone syllable like **会** (*huì*), **不** shifts from 4th tone to **2nd tone**: **bú huì**! This tone-sandhi rule also applies to **不是** (*bú shì*) and **不太热** (*bú tài rè*).",
      },
      {
        id: "weather-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-activities",
        question: "Complete the cause-and-effect sentence: **___外面打雷，___足球比赛取消了。**",
        options: [
          "虽然 … 但是",
          "不但 … 而且",
          "如果 … 可是",
          "因为 … 所以",
        ],
        answerIndex: 3,
        hints: [
          "Thundering outside is the **reason** the football match on the pitch was cancelled!",
          "Choose the 'Because…, therefore…' connector pair.",
        ],
        explanation:
          "**因为外面打雷，所以足球比赛取消了。** ('Because it is thundering outside, the football match was cancelled') expresses logical cause and effect. **虽然…但是…** ('although… but…') would imply thunder shouldn't stop football!",
      },
      {
        id: "weather-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-activities",
        question: "Look carefully at the three characters pronounced *dài* or *dāi*: **带**, **戴**, **待**. Which sentence uses the right character?",
        options: [
          "下大雨了，我带在家看书。",
          "下午会下雨，别忘了带一把雨伞。",
          "今天很冷，我待一顶帽子。",
          "明天是晴天，不用戴雨伞。",
        ],
        answerIndex: 1,
        hints: [
          "**带** (*dài*) = carry/bring an object with you.",
          "**待** (*dāi*) = stay in a place (**待在家**); **戴** (*dài*) = wear accessories on head/neck/hands.",
        ],
        explanation:
          "**下午会下雨，别忘了带一把雨伞。** correctly uses **带** (*dài*, bring/carry) for an umbrella! Staying at home requires **待在家**, and wearing a hat requires **戴一顶帽子**.",
      },
      {
        id: "weather-m2-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "weather-activities",
        question: "What does **如果是晴天，我们就去海边。** tell you the speakers plan to do on a sunny day?",
        options: [
          "Stay indoors at a shopping centre",
          "Go to the beach / seaside",
          "Cancel their swimming lesson",
          "Go skiing in the mountains",
        ],
        answerIndex: 1,
        hints: ["**海** (*hǎi*) means sea and **边** (*biān*) means side/edge."],
        explanation:
          "**去海边** (*qù hǎibiān*) means 'go to the beach / seaside'. Notice **海** starts with the three-dot water radical **氵**!",
      },
      {
        id: "weather-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reading-weather-reports",
        question: "Read this bulletin: **北京今天晴转多云，最高气温四度，最低气温零下六度，刮大风，很干燥。** How many degrees is the gap between Beijing's high and low today?",
        options: [
          "2 degrees",
          "6 degrees",
          "10 degrees",
          "12 degrees",
        ],
        answerIndex: 2,
        hints: [
          "Find **最高气温** (maximum temperature) and **最低气温** (minimum temperature).",
          "**四度** = +4°C, and **零下六度** = −6°C. Calculate 4 − (−6)!",
        ],
        explanation:
          "Beijing's high is **四度** (+4 degrees) and its low is **零下六度** (−6 degrees). From −6 up to 0 is 6 degrees, plus 4 degrees above zero = **10 degrees**!",
      },
      {
        id: "weather-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reading-weather-reports",
        question: "Based on the same Beijing bulletin (**最高气温四度，最低气温零下六度，刮大风，很干燥**), which piece of advice fits best?",
        options: [
          "天气又热又潮湿，去海边游泳吧！",
          "下午下大雨，一定要穿短裤。",
          "外面很冷，也很干燥，应该多穿衣服、多喝水。",
          "今天二十八度，不用穿外套。",
        ],
        answerIndex: 2,
        hints: [
          "Beijing is cold (**四度 / 零下六度**), windy (**刮大风**) and dry (**干燥**).",
          "Match both cold (**多穿衣服**) and dry (**多喝水**).",
        ],
        explanation:
          "**外面很冷，也很干燥，应该多穿衣服、多喝水。** ('It is cold and dry outside; you should wear more clothes and drink plenty of water') matches −6–4 degrees and **很干燥** accurately.",
      },
      {
        id: "weather-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reading-weather-reports",
        question: "Which sentence correctly expresses **'Today's air temperature is around 30 degrees'**?",
        options: [
          "今天的气温在左右三十度。",
          "今天的气温是三十左右度。",
          "今天左右的气温是大三十度。",
          "今天的气温在三十度左右。",
        ],
        answerIndex: 3,
        hints: [
          "**左右** (*zuǒyòu*, approximately / around) literally means 'left-right'.",
          "Where does **左右** sit relative to **Number + Measure Word** (**三十度**)?",
        ],
        explanation:
          "**今天的气温在三十度左右。** places **左右** directly **after** the complete number + measure word phrase **三十度** (just like **两点左右** 'around 2 o'clock'). Putting **左右** before the number or splitting **三十** and **度** is ungrammatical.",
      },
      {
        id: "weather-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "time-weather-forecasts",
        question: "Spot the **ONLY** sentence below that has **zero** grammar mistakes:",
        options: [
          "昨天北京比哈尔滨很暖和。",
          "明天新加坡可能会下大雨。",
          "前天没有下雪了。",
          "今天下午是刮风很大。",
        ],
        answerIndex: 1,
        hints: [
          "Test each sentence for the classic traps: **比…很**, **没…了**, and **是 + Verb**.",
          "Check how **可能会** ('might / possibly will') combines with **下大雨**.",
        ],
        explanation:
          "**明天新加坡可能会下大雨。** ('Tomorrow Singapore might have heavy rain') is 100% natural! **比哈尔滨很暖和** illegally puts **很** in a **比** comparison, **没有下雪了** illegally keeps **了** with **没有**, and **是刮风很大** illegally puts **是** before **刮风**.",
      },
    ],
  },
  {
    id: "weather-m3",
    title: "Weather Paper 3 — IGCSE Reading, Idiomatic Nuance & World Cities",
    questions: [
      {
        id: "weather-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "weather-conditions",
        question: "What is the difference between **晴天** (*qíngtiān*) and **多云** (*duōyún*)?",
        options: [
          "晴天 means sunny/clear sky; 多云 means cloudy.",
          "晴天 means foggy; 多云 means thundering.",
          "晴天 means snowing; 多云 means windy.",
          "晴天 means humid; 多云 means below zero.",
        ],
        answerIndex: 0,
        hints: ["**云** (*yún*) means cloud, so **多云** is literally 'many clouds'."],
        explanation:
          "**晴天** means a clear, sunny day, whilst **多云** (*duōyún*, many clouds) means cloudy or partly cloudy.",
      },
      {
        id: "weather-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "temperature-degree",
        question: "After an afternoon downpour in Singapore, the temperature drops to 24°C with a gentle breeze. Which word best describes this pleasant coolness?",
        options: [
          "闷热 (mēnrè)",
          "凉快 (liángkuai)",
          "零下 (língxià)",
          "干燥 (gānzào)",
        ],
        answerIndex: 1,
        hints: ["Look for the word with the 2-dot cool radical **冫** + **快** (*liángkuai*)."],
        explanation:
          "**凉快** (*liángkuai*) means pleasantly cool and breezy! **闷热** (*mēnrè*) is stiflingly muggy (how it feels *before* the storm), **零下** is below zero, and **干燥** is dry/arid.",
      },
      {
        id: "weather-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-conditions",
        question: "Which sentence correctly describes what is happening **right now** outside?",
        options: [
          "外面正在下小雨呢。",
          "外面正在是晴天呢。",
          "外面会正在刮风。",
          "外面正在下了大雨。",
        ],
        answerIndex: 0,
        hints: [
          "Ongoing actions right now use **正在 + Verb (+ 呢)**.",
          "**正在** cannot combine with **是晴天**, **会**, or completed **了**!",
        ],
        explanation:
          "**外面正在下小雨呢。** ('It is drizzling outside right now') pairs **正在…呢** cleanly with the action verb **下小雨**. **正在** never pairs with **了** (**正在下了** ✗) or future **会**.",
      },
      {
        id: "weather-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "temperature-degree",
        question: "How do you say **'Singapore's weather is both hot and humid'** using the **又…又…** (*both… and…*) frame?",
        options: [
          "新加坡的天气又热又潮湿。",
          "新加坡的天气是热和潮湿。",
          "新加坡的天气又晴天又下雨。",
          "新加坡又温度又三十度。",
        ],
        answerIndex: 0,
        hints: [
          "**又 + Adjective 1 + 又 + Adjective 2** links two simultaneous qualities without **是** or **很**.",
          "Pick the two adjectives meaning 'hot' and 'humid'.",
        ],
        explanation:
          "**新加坡的天气又热又潮湿。** uses **又 + Adj + 又 + Adj** smoothly to combine 'hot' (**热**) and 'humid' (**潮湿**). **是热和潮湿** translates English word-for-word and breaks Mandarin adjective rules.",
      },
      {
        id: "weather-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "time-weather-forecasts",
        question: "If today's temperature is **差不多** (*chàbuduō*) compared with yesterday's, what does **今天的温度跟昨天差不多** mean?",
        options: [
          "Today's temperature is much higher than yesterday's.",
          "Today's temperature is much lower than yesterday's.",
          "Today's temperature is roughly the same as yesterday's.",
          "Today's temperature dropped below zero.",
        ],
        answerIndex: 2,
        hints: [
          "**A 跟 B 差不多** literally means 'A compared with B has not much difference'.",
          "Think about whether the two days are very different or nearly equal.",
        ],
        explanation:
          "**今天的温度跟昨天差不多** means 'Today's temperature is almost the same as yesterday's' (**差不多** = roughly similar / almost the same). 'Much higher' would be **高得多**.",
      },
      {
        id: "weather-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "time-weather-forecasts",
        question: "How do you say **'Today is MUCH hotter than yesterday'** in Mandarin?",
        options: [
          "今天比昨天多多热。",
          "今天比昨天非常热。",
          "今天比昨天热得多。",
          "今天很热比昨天。",
        ],
        answerIndex: 2,
        hints: [
          "Start with **今天比昨天 + Adjective** (**热**).",
          "Where does **得多** ('much more') sit — before or after the adjective?",
        ],
        explanation:
          "**今天比昨天热得多。** places **得多** right **after** the adjective **热**! **比昨天非常热** breaks the rule banning degree adverbs (**很 / 非常**) before the adjective in **比** sentences.",
      },
      {
        id: "weather-m3-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "weather-activities",
        question: "Your mum calls out as you leave for school: **外面阴天，可能会下雨，带一把雨伞吧！** Why is she telling you to bring an umbrella?",
        options: [
          "Because it is already snowing outside.",
          "Because it is overcast outside and might rain.",
          "Because the sun is blazing hot at 35°C.",
          "Because there is thick fog at the beach.",
        ],
        answerIndex: 1,
        hints: ["Break down **阴天** (overcast) and **可能会下雨** (might rain)."],
        explanation:
          "**外面阴天，可能会下雨** means 'It is overcast outside and it might rain', so **带一把雨伞吧！** advises you to bring an umbrella.",
      },
      {
        id: "weather-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-activities",
        question: "Which sentence accurately translates: **'Because it rained heavily yesterday, I did not go to East Coast Park'**?",
        options: [
          "因为昨天下大雨，所以我没去东海岸公园。",
          "因为昨天下大雨，我所以不去东海岸公园了。",
          "虽然昨天下大雨，所以我没去了东海岸公园。",
          "因为昨天是大雨，所以我不去昨天东海岸公园。",
        ],
        answerIndex: 0,
        hints: [
          "Pair **因为** with **所以** at the start of the second clause.",
          "For 'did not go yesterday', use **没去** (never *没去了*!).",
        ],
        explanation:
          "**因为昨天下大雨，所以我没去东海岸公园。** pairs **因为…所以…** cleanly and negates the past trip with **没去** (no **了**!). **没去了** and **我所以** are both ungrammatical.",
      },
      {
        id: "weather-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "weather-activities",
        question: "Examine the tone sandhi in **一把雨伞** (*yì bǎ yǔsǎn*). Notice **把** (3rd), **雨** (3rd), **伞** (3rd) — and **一** before **把**! Which Pinyin shows how **一** is actually pronounced before the 3rd-tone **把**?",
        options: [
          "yī (1st tone)",
          "yí (2nd tone)",
          "yǐ (3rd tone)",
          "yì (4th tone)",
        ],
        answerIndex: 3,
        hints: [
          "**一** is 1st tone when counting alone, 2nd tone before a 4th tone (**一件** *yí jiàn*), and changes to another tone before 1st, 2nd or 3rd tones!",
          "**把** (*bǎ*) is a 3rd-tone measure word.",
        ],
        explanation:
          "Before a 1st, 2nd or 3rd-tone syllable (like **把** *bǎ*), **一** shifts to **4th tone**: **yì bǎ yǔsǎn**! (Before a 4th-tone syllable like **件** *jiàn*, it shifts to 2nd tone: *yí jiàn*.)",
      },
      {
        id: "weather-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reading-weather-reports",
        question: "Read Xiaoming's message from Sydney in December:\n> **十二月北京下大雪，零下八度，可是我在悉尼每天都去海边游泳，因为这里二十八度，是晴天！**\nWhy can Xiaoming swim at the beach in December?",
        options: [
          "He is swimming in an indoor heated pool in Beijing.",
          "Sydney is 28°C and sunny in December.",
          "Beijing is 28°C in December this year.",
          "He enjoys winter ice-swimming at −8°C.",
        ],
        answerIndex: 1,
        hints: [
          "Check where **这里** ('here') refers to after **可是我在悉尼…** (*but I am in Sydney…*).",
          "What temperature and sky condition does he report for Sydney?",
        ],
        explanation:
          "Xiaoming writes **我在悉尼…因为这里二十八度，是晴天！** — he is in Sydney (Southern Hemisphere summer!), where it is 28°C and sunny, contrasting with Beijing's −8°C snow.",
      },
      {
        id: "weather-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reading-weather-reports",
        question: "Look at this 3-day Singapore forecast:\n- **星期五**：多云，26–31°C\n- **星期六**：上午晴天，下午雷阵雨，25–30°C\n- **星期天**：全天晴天，27–33°C\n\nMeimei wants to cycle at East Coast Park **in the sunshine without getting rained on**. Based on the forecast, which plan makes the most sense?",
        options: [
          "Saturday afternoon, because 25–30°C is coolest and dry all day",
          "Saturday morning (晴天 and cooler than Sunday) or Sunday if it must be afternoon",
          "Friday afternoon, because Friday is 全天晴天",
          "None of the days have any sunshine at all",
        ],
        answerIndex: 1,
        hints: [
          "Check Saturday afternoon carefully: **下午雷阵雨** means afternoon thundery showers!",
          "Compare Saturday morning (**上午晴天**, max 30°C) against Sunday (**全天晴天**, max 33°C).",
        ],
        explanation:
          "Saturday afternoon has **雷阵雨** (thundery showers), so she would get drenched! To stay dry in the sun, she should either go **Saturday morning** (**上午晴天**, cooler 25–30 degrees) or **Sunday** (**全天晴天** all day sunny, though hotter at 33 degrees).",
      },
      {
        id: "weather-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reading-weather-reports",
        question: "In Mandarin weather reports, how do you ask **'What is tomorrow's maximum temperature?'**",
        options: [
          "明天的最大气温是多少度？",
          "明天的高多温度是几？",
          "明天的最高气温是多少度？",
          "明天天气有多大？",
        ],
        answerIndex: 2,
        hints: [
          "Does Mandarin pair **气温** (air temperature) with **大/小** or **高/低**?",
          "'Maximum / highest' is **最高** (*zuìgāo*).",
        ],
        explanation:
          "**明天的最高气温是多少度？** uses **最高气温** (*zuìgāo qìwēn*, highest air temperature). Mandarin always describes temperatures as **高** (high) or **低** (low), never **大** (big).",
      },
      {
        id: "weather-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "time-weather-forecasts",
        question: "What does **北京今天没有昨天那么冷** (*Běijīng jīntiān méiyǒu zuótiān nàme lěng*) mean?",
        options: [
          "Beijing is colder today than yesterday.",
          "Beijing was not cold at all yesterday or today.",
          "Beijing has never been cold.",
          "Beijing is not as cold today as it was yesterday.",
        ],
        answerIndex: 3,
        hints: [
          "**A 没有 B (那么) + Adjective** is the negative comparison pattern ('A is not as Adj as B').",
          "So which day was colder — yesterday (**昨天**) or today (**今天**)?",
        ],
        explanation:
          "**A 没有 B 那么冷** means 'A is not as cold as B' — so Beijing today is **not as cold as yesterday** (i.e. yesterday was colder, and today warmed up slightly!).",
      },
      {
        id: "weather-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "weather-conditions",
        question: "After heavy rain stops, a news report says: **下雨以后，气温下降了四度。** If it was **31°C** before the rain, what is the temperature now?",
        options: [
          "35°C",
          "4°C",
          "−4°C",
          "27°C",
        ],
        answerIndex: 3,
        hints: [
          "Does **下降** (*xiàjiàng*) mean 'rise' or 'drop/fall'?",
          "Look at **下** (down) in **下降** and subtract **四度** (4°C) from 31°C!",
        ],
        explanation:
          "**下降了四度** means 'dropped by 4 degrees' (contrasting with **升高**, rose). Subtracting 4°C from 31°C gives **27°C**!",
      },
      {
        id: "weather-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "weather-activities",
        question: "Choose the best IGCSE-level complex sentence combining weather, reason, comparison AND advice:",
        options: [
          "因为今天下午比昨天热得多，而且可能会下大雨，所以你出门应该多喝水，也别忘了带一把雨伞。",
          "因为今天下午比昨天很热，所以就你带一个雨伞和是喝水。",
          "如果今天下午是下大雨，因为比昨天热，就我们不去是晴天。",
          "今天下午热比昨天，所以因为下雨带把雨伞了没。",
        ],
        answerIndex: 0,
        hints: [
          "Check every clause for clean grammar: **比昨天热得多** (no **很**!), **可能会下大雨** (no **是**!), **因为…所以…**, and **一把雨伞**.",
          "Eliminate options with **比…很**, **就你**, **一个雨伞** or **是下大雨**.",
        ],
        explanation:
          "**因为今天下午比昨天热得多，而且可能会下大雨，所以你出门应该多喝水，也别忘了带一把雨伞。** flawlessly weaves **比…热得多**, **而且**, **因为…所以…**, **应该** and **一把雨伞** into top-band IGCSE prose!",
      },
    ],
  },
];
