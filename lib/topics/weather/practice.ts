import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "weather-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "weather-conditions",
      question: "Which phrase means **'heavy rain'** in Mandarin?",
      options: ["大雨下", "下大雨", "大下雨", "是下大雨"],
      answerIndex: 1,
      hints: ["Insert **大** right between the verb **下** and the noun **雨**."],
      explanation:
        "**下大雨** (*xià dà yǔ*) splits the verb-object pair **下雨** to put **大** right before **雨**. Never put **是** before **下雨**.",
    },
    {
      id: "weather-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "weather-conditions",
      question: "Write **'sunny day'** in Mandarin (Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["晴天", "qíngtiān", "qíng tiān"],
        display: "晴天 (qíngtiān)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["阴天", "yīntiān"] },
          feedback: "阴天 (yīntiān) means 'overcast day' — look for the sun radical 日 in 晴天!",
        },
        {
          spec: { type: "text", accept: ["请天"] },
          feedback: "Watch the radical! 请 has speech 讠 ('please'), whereas 晴天 needs the sun radical 日!",
        },
      ],
      hints: ["Starts with **晴** (*qíng*, sun radical **日**) + **天** (*tiān*)."],
      solution: [
        "Combine **晴** (*qíng*, clear/sunny with **日**) + **天** (*tiān*, day/sky) → **晴天** (*qíngtiān*).",
      ],
    },
    {
      id: "weather-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "temperature-degree",
      question: "How do you write **'−5°C'** in Mandarin?",
      answer: {
        type: "text",
        accept: ["零下五度", "língxià wǔ dù", "líng xià wǔ dù"],
        display: "零下五度 (língxià wǔ dù)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["五度", "wǔ dù"] },
          feedback: "五度 is +5°C! Add 零下 (língxià, 'below zero') at the front for minus temperatures.",
        },
      ],
      hints: ["Use **零下** ('below zero') + **五** (5) + **度** (degrees)."],
      solution: [
        "Minus temperatures use **零下 + Number + 度**: **零下五度** (*língxià wǔ dù*).",
      ],
    },
    {
      id: "weather-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "temperature-degree",
      question: "Which word best describes Singapore's tropical air (85% moisture) — where BOTH characters carry the three-dot water radical **氵**?",
      options: ["干燥 (gānzào)", "潮湿 (cháoshī)", "凉快 (liángkuai)", "暖和 (nuǎnhuo)"],
      answerIndex: 1,
      hints: [
        "Look for **氵** on the left of *both* characters.",
        "It means 'humid / damp'.",
      ],
      explanation:
        "**潮湿** (*cháoshī*, humid) has **氵** on both characters! **干燥** (*gānzào*) is its opposite ('dry', with fire **火** in **燥**).",
    },
    {
      id: "weather-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "time-weather-forecasts",
      question: "Translate into Mandarin: **'It will rain tomorrow.'**",
      answer: {
        type: "text",
        accept: ["明天会下雨", "Míngtiān huì xià yǔ"],
        display: "明天会下雨。 (Míngtiān huì xià yǔ.)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["明天是下雨", "Míngtiān shì xià yǔ"] },
          feedback: "Don't use 是 before 下雨! Use the future prediction modal 会 (huì): 明天会下雨.",
        },
      ],
      hints: [
        "Start with **明天** (*míngtiān*, tomorrow).",
        "Add the prediction modal **会** (*huì*) + **下雨** (*xià yǔ*).",
      ],
      solution: [
        "Time first (**明天**) + prediction modal (**会**) + weather verb (**下雨**) → **明天会下雨。**",
      ],
    },
    {
      id: "weather-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "time-weather-forecasts",
      question: "Choose the **grammatically correct** Mandarin comparison for *'Today is hotter than yesterday'*:",
      options: [
        "今天比昨天很热。",
        "今天比昨天热。",
        "今天热比昨天。",
        "今天比昨天是热。",
      ],
      answerIndex: 1,
      hints: [
        "Use the frame **A + 比 + B + Adjective**.",
        "Remember: **很** and **是** are strictly banned before the adjective in a **比** comparison!",
      ],
      explanation:
        "**今天比昨天热。** follows **A 比 B + Adjective** cleanly. **今天比昨天很热** falls into the #1 English-speaker trap of adding **很** inside a **比** sentence.",
    },
    {
      id: "weather-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "weather-activities",
      question: "Fill in the measure word to write **'one umbrella'** in Mandarin (3 characters: 一___雨伞):",
      answer: {
        type: "text",
        accept: ["一把雨伞", "yì bǎ yǔsǎn", "yībǎ yǔsǎn"],
        display: "一把雨伞 (yì bǎ yǔsǎn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["一个雨伞", "yí gè yǔsǎn"] },
          feedback: "Avoid 个 here! Umbrellas have a handle you grip with your hand, so use 把 (bǎ): 一把雨伞.",
        },
      ],
      hints: [
        "Which measure word with the hand radical **扌** is used for objects with handles?",
        "It is **把** (*bǎ*).",
      ],
      solution: [
        "Use **把** (*bǎ*) for handled objects: **一把雨伞** (*yì bǎ yǔsǎn*).",
      ],
    },
    {
      id: "weather-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "weather-activities",
      question: "Complete the paired connector sentence: **因为今天刮大风，___我们不去海边。**",
      options: ["但是", "所以", "而且", "如果"],
      answerIndex: 1,
      hints: [
        "**因为** (*yīnwèi*, because) always pairs with its partner meaning 'therefore / so'.",
        "Which two-character connector means 'therefore'?",
      ],
      explanation:
        "**因为…，所以…** (*because…, therefore…*) is Mandarin's paired cause-and-effect structure. **但是** pairs with **虽然**, and **而且** pairs with **不但**.",
    },
    {
      id: "weather-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "reading-weather-reports",
      question: "A forecast reads: **今天新加坡的气温是二十六到三十二度。** What is today's **maximum** temperature in °C? (Type a number.)",
      answer: {
        type: "number",
        value: 32,
        display: "32",
      },
      traps: [
        {
          spec: { type: "number", value: 26 },
          feedback: "二十六 (26) is the minimum temperature — look at the upper end of the range: 三十二 (32)!",
        },
      ],
      hints: [
        "**二十六** = 26 and **三十二** = 32.",
        "Pick the higher value of the range!",
      ],
      solution: [
        "**二十六到三十二度** means '26 to 32 degrees', so the maximum temperature is **32**°C.",
      ],
    },
    {
      id: "weather-quiz-q10",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "reading-weather-reports",
      question: "Read: **明天伦敦早上有雾，下午多云转晴，八到十五度，很凉快。** Which statement is **TRUE**?",
      options: [
        "London will rain heavily tomorrow afternoon.",
        "London will be foggy early tomorrow morning and turn sunny later in the afternoon.",
        "London's temperature will drop below zero tomorrow.",
        "London will be hot and humid at 28 degrees.",
      ],
      answerIndex: 1,
      hints: [
        "Decode **早上有雾** (*foggy in the morning*) and **下午多云转晴** (*cloudy turning sunny in the afternoon*).",
        "Check **八到十五度** (8–15°C).",
      ],
      explanation:
        "**早上有雾** = foggy early morning, and **下午多云转晴** = cloudy turning sunny in the afternoon, with cool 8–15°C temperatures (**很凉快**).",
    },
  ],

  papers: [
    {
      id: "weather-p1",
      title: "Weather Practice Paper 1 — Core Weather, Thermometers & Plans",
      questions: [
        {
          id: "weather-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "weather-conditions",
          question: "Write **'to snow'** in Mandarin (2 characters, or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["下雪", "xià xuě", "xiàxuě"],
            display: "下雪 (xià xuě)",
          },
          hints: ["Combine **下** (*xià*, fall) + **雪** (*xuě*, snow)."],
          solution: ["'To snow' is the verb-object phrase **下雪** (*xià xuě*)."],
        },
        {
          id: "weather-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "weather-conditions",
          question: "Write **'strong wind blows / very windy'** by inserting **大** inside **刮风**:",
          answer: {
            type: "text",
            accept: ["刮大风", "guā dà fēng", "guādàfēng"],
            display: "刮大风 (guā dà fēng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["大刮风", "dà guā fēng"] },
              feedback: "Remember 刮风 is Verb + Noun! Put 大 right before the noun 风: 刮大风.",
            },
          ],
          hints: ["Place **大** directly between **刮** (blow) and **风** (wind)."],
          solution: ["Split **刮** + **风** → **刮大风** (*guā dà fēng*)."],
        },
        {
          id: "weather-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "temperature-degree",
          question: "Translate **二十八度** (*èrshíbā dù*) into a plain number in °C (type the number only):",
          answer: {
            type: "number",
            value: 28,
            display: "28",
          },
          hints: ["**二十** = 20 and **八** = 8."],
          solution: ["**二十八度** = **28** degrees Celsius."],
        },
        {
          id: "weather-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "temperature-degree",
          question: "Write **'−15°C'** in Mandarin (using **零下…度**):",
          answer: {
            type: "text",
            accept: ["零下十五度", "língxià shíwǔ dù", "líng xià shíwǔ dù"],
            display: "零下十五度 (língxià shíwǔ dù)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["十五度", "shíwǔ dù"] },
              feedback: "十五度 is +15°C! Don't forget 零下 (below zero) at the start.",
            },
          ],
          hints: [
            "Start with **零下** (*língxià*, below zero).",
            "Follow with **十五** (15) + **度** (*dù*).",
          ],
          solution: ["−15°C = **零下十五度** (*língxià shíwǔ dù*)."],
        },
        {
          id: "weather-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "temperature-degree",
          question: "Translate into Mandarin: **'Today is too hot!'** (Use the **太…了** frame.)",
          answer: {
            type: "text",
            accept: ["今天太热了", "Jīntiān tài rè le"],
            display: "今天太热了！ (Jīntiān tài rè le!)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["今天是太热了", "Jīntiān shì tài rè le"] },
              feedback: "Drop 是! Adjectives in Mandarin connect directly to 太…了 without 是: 今天太热了！",
            },
          ],
          hints: [
            "Subject: **今天** (*jīntiān*).",
            "Exclamation frame: **太 + 热 + 了** (*tài rè le*).",
          ],
          solution: ["Combine **今天** + **太热了** → **今天太热了！** (*Jīntiān tài rè le!*)."],
        },
        {
          id: "weather-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "weather-conditions",
          question: "Translate into Mandarin: **'Today is an overcast day.'** (Use **是** + sky noun.)",
          answer: {
            type: "text",
            accept: ["今天是阴天", "Jīntiān shì yīntiān", "今天阴天", "Jīntiān yīntiān"],
            display: "今天是阴天。 (Jīntiān shì yīntiān.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["今天是晴天", "Jīntiān shì qíngtiān"] },
              feedback: "晴天 means sunny day! 'Overcast day' is 阴天 (yīntiān).",
            },
          ],
          hints: [
            "'Overcast day' is **阴天** (*yīntiān*).",
            "Link **今天** + **是** + **阴天**.",
          ],
          solution: ["**今天是阴天。** (*Jīntiān shì yīntiān.*)."],
        },
        {
          id: "weather-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "time-weather-forecasts",
          question: "Unscramble into a correct Mandarin sentence: **不会 / 明天 / 下雨 / 早上**",
          answer: {
            type: "text",
            accept: ["明天早上不会下雨", "Míngtiān zǎoshang bú huì xià yǔ", "Míngtiān zǎoshang bù huì xià yǔ"],
            display: "明天早上不会下雨。 (Míngtiān zǎoshang bú huì xià yǔ.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["早上明天不会下雨"] },
              feedback: "Big-to-small time order! Put the day (明天) BEFORE the part of the day (早上): 明天早上.",
            },
          ],
          hints: [
            "Put time first in big-to-small order: **明天早上** (*tomorrow morning*).",
            "Follow with **不会** (*will not*) + **下雨** (*rain*).",
          ],
          solution: [
            "Time (big → small): **明天早上**.",
            "Negative prediction + verb: **不会下雨**.",
            "Full sentence: **明天早上不会下雨。**",
          ],
        },
        {
          id: "weather-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "time-weather-forecasts",
          question: "Translate into Mandarin: **'Today is cooler than yesterday.'** (Use **凉快**.)",
          answer: {
            type: "text",
            accept: ["今天比昨天凉快", "Jīntiān bǐ zuótiān liángkuai", "Jīntiān bǐ zuótiān liángkuài"],
            display: "今天比昨天凉快。 (Jīntiān bǐ zuótiān liángkuai.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["今天比昨天很凉快", "Jīntiān bǐ zuótiān hěn liángkuai"] },
              feedback: "Watch out! NEVER put 很 before the adjective in a 比 comparison — drop 很!",
            },
          ],
          hints: [
            "Use **A + 比 + B + Adjective**: **今天** + **比** + **昨天** + **凉快**.",
            "Do NOT include **很**!",
          ],
          solution: ["**今天比昨天凉快。** (*Jīntiān bǐ zuótiān liángkuai.*)."],
        },
        {
          id: "weather-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "weather-activities",
          question: "Complete the conditional plan in Mandarin (write the missing 3 characters for *'we will go'*): **如果明天是晴天，______海边。**",
          answer: {
            type: "text",
            accept: ["我们就去", "wǒmen jiù qù"],
            display: "我们就去 (wǒmen jiù qù)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["就我们去", "jiù wǒmen qù"] },
              feedback: "Word-order trap! 就 is an adverb, so the subject 我们 MUST stand BEFORE 就: 我们就去.",
            },
          ],
          hints: [
            "Pair **如果** with **就** (*jiù*, then).",
            "Put the subject **我们** *before* **就**, followed by **去**!",
          ],
          solution: [
            "In **如果…，Subject + 就 + Verb**, the missing chunk is **我们就去** (*wǒmen jiù qù*).",
          ],
        },
        {
          id: "weather-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "weather-activities",
          question: "Translate into Mandarin: **'bring an umbrella'** (4 characters, using the handle classifier **把**):",
          answer: {
            type: "text",
            accept: ["带一把雨伞", "dài yì bǎ yǔsǎn", "dài yībǎ yǔsǎn"],
            display: "带一把雨伞 (dài yì bǎ yǔsǎn)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["戴一把雨伞"] },
              feedback: "Wrong character for dài! 戴 is for wearing hats/glasses on the body; carrying an umbrella uses 带!",
            },
          ],
          hints: [
            "Verb 'to bring/carry': **带** (*dài*).",
            "Quantity + classifier + noun: **一把雨伞** (*yì bǎ yǔsǎn*).",
          ],
          solution: ["**带** (bring) + **一把** (one + handle classifier) + **雨伞** (umbrella) → **带一把雨伞**."],
        },
        {
          id: "weather-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "reading-weather-reports",
          question: "Read: **今天北京的最高气温是十度，最低气温是零下三度。** How many degrees is the difference between Beijing's highest and lowest temperatures today? (Type a number.)",
          answer: {
            type: "number",
            value: 13,
            display: "13",
          },
          traps: [
            {
              spec: { type: "number", value: 7 },
              feedback: "Careful with the minus sign! 零下三度 is −3°C, so the gap from −3°C to +10°C is 10 − (−3) = 13 degrees, not 10 − 3.",
            },
          ],
          hints: [
            "**十度** = +10°C, and **零下三度** = −3°C.",
            "Calculate 10 − (−3)!",
          ],
          solution: [
            "Maximum (**最高气温**) = +10°C; Minimum (**最低气温**) = −3°C.",
            "Difference = 10 − (−3) = **13** degrees.",
          ],
        },
        {
          id: "weather-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "weather-activities",
          question: "Translate the full cause-and-effect sentence into Mandarin: **'Because outside is raining heavily, I stay at home.'**",
          answer: {
            type: "text",
            accept: [
              "因为外面下大雨，所以我待在家",
              "因为外面下大雨，所以我待在家里",
              "因为外面下大雨，所以我在家",
              "Yīnwèi wàimiàn xià dà yǔ, suǒyǐ wǒ dāi zài jiā",
            ],
            display: "因为外面下大雨，所以我待在家。 (Yīnwèi wàimiàn xià dà yǔ, suǒyǐ wǒ dāi zài jiā.)",
          },
          hints: [
            "Use **因为…，所以…** (*because…, therefore…*).",
            "'Outside is raining heavily' = **外面下大雨** (no **是**!), and 'I stay at home' = **我待在家**.",
          ],
          solution: [
            "Clause 1: **因为外面下大雨，** (*Yīnwèi wàimiàn xià dà yǔ,*).",
            "Clause 2: **所以我待在家。** (*suǒyǐ wǒ dāi zài jiā.*).",
          ],
        },
        {
          id: "weather-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "time-weather-forecasts",
          marks: 5,
          question:
            "**IGCSE 0547 Roleplay / Short Message Task (约50–70字):**\nYour friend in Beijing messages you asking about Singapore's weather this week. Write a reply in Simplified Chinese covering ALL FIVE points:\n1. What Singapore's weather is like today (e.g. sunny / cloudy).\n2. Today's temperature in degrees (**度**) and how it feels (**热 / 潮湿**).\n3. Whether it rained yesterday (**昨天…**).\n4. Tomorrow afternoon's weather forecast (**明天下午会…**).\n5. One piece of advice on what to bring or do tomorrow.",
          hints: [
            "Link adjectives like **热** and **潮湿** with **很** or **又…又…** (never **是**!).",
            "Use **昨天没下雨** (or **昨天下雨了**) for yesterday, **明天下午会下大雨** for tomorrow, and **别忘了带一把雨伞** for advice.",
          ],
          modelAnswer:
            "今天新加坡上午是晴天，气温是三十一度，又热又潮湿。昨天没下雨，很舒服。可是天气预报说明天下午会下大雨，也会打雷，所以你出门的时候别忘了带一把雨伞！",
          markScheme: [
            {
              point: "States today's sky/weather condition in Singapore accurately (e.g. 晴天 / 多云 / 阴天).",
              keywords: ["今天", "晴天", "多云", "阴天", "新加坡"],
            },
            {
              point: "Gives a realistic temperature with 度 and feeling adjective (热 / 潮湿 / 闷热) without 是.",
              keywords: ["度", "热", "潮湿", "闷热", "气温", "温度"],
            },
            {
              point: "Describes yesterday's weather accurately with 了 or 没 (e.g. 昨天下雨了 / 昨天没下雨).",
              keywords: ["昨天", "下雨了", "没下雨", "没有下雨"],
            },
            {
              point: "States tomorrow afternoon's forecast using 明天下午 + 会 / 可能会.",
              keywords: ["明天", "下午", "会", "天气预报"],
            },
            {
              point: "Gives logical practical advice (e.g. 带一把雨伞 / 待在家 / 多喝水).",
              keywords: ["雨伞", "待在家", "多喝水", "应该", "别忘了", "所以"],
            },
          ],
          commonError:
            "Writing *今天是热* instead of **今天很热**, or *昨天没下雨了* instead of **昨天没下雨**.",
        },
        {
          id: "weather-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "reading-weather-reports",
          marks: 6,
          question:
            "**IGCSE 0547 Extended Writing (80–120 characters):**\nWrite a short weather blog post (**天气日记**) comparing the weather in **two different cities** today (for example **新加坡** and **北京** or **伦敦**) and explaining how the weather affects your weekend plans. Include:\n- Weather conditions & temperatures in both cities\n- At least one **比** comparison\n- Both **因为…所以…** and **如果…就…**",
          hints: [
            "Contrast Singapore's tropical heat (**三十二度，很潮湿**) with a cold or foggy city (**北京零下四度 / 伦敦有雾**), then compare with **A 比 B 热得多**.",
            "Finish with your weekend plans using **因为…所以…** and **如果…，我们就…** (putting **我们** before **就**!).",
          ],
          modelAnswer:
            "今天是星期五。新加坡上午多云，最高气温是三十二度，非常潮湿。我的朋友现在在北京，北京今天是晴天，可是刮大风，气温只有零下四度。新加坡比北京热得多！因为天气预报说明天下午新加坡会下大雨，所以我们不去东海岸公园踢足球了。如果星期天是晴天，我们就去圣淘沙游泳！",
          markScheme: [
            {
              point: "Describes City 1's weather condition and temperature accurately.",
              keywords: ["新加坡", "度", "气温", "多云", "晴天", "下雨"],
            },
            {
              point: "Describes City 2's contrasting weather condition and temperature (e.g. 零下 / 冷 / 有雾).",
              keywords: ["北京", "伦敦", "哈尔滨", "悉尼", "零下", "冷", "刮"],
            },
            {
              point: "Uses an accurate 比 comparison without 很 (e.g. 新加坡比北京热得多).",
              keywords: ["比", "得多", "一点儿"],
            },
            {
              point: "Uses paired 因为…所以… to explain a changed or chosen plan.",
              keywords: ["因为", "所以"],
            },
            {
              point: "Uses paired 如果…，Subject + 就… with 就 placed after the subject.",
              keywords: ["如果", "就"],
            },
            {
              point: "Uses varied, accurate Year 8 vocabulary and natural STPV word order.",
              keywords: ["天气预报", "周末", "星期", "海边", "公园", "圣淘沙", "雨伞"],
            },
          ],
          commonError:
            "Putting 就 before the subject (*如果星期天是晴天，就我们去*) or inserting 很 after 比 (*新加坡比北京很热*).",
        },
      ],
    },

    {
      id: "weather-p2",
      title: "Weather Practice Paper 2 — Forecast Bulletins, Radicals & Logic",
      questions: [
        {
          id: "weather-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "weather-conditions",
          question: "Write **'foggy / there is fog'** in Mandarin (2 characters):",
          answer: {
            type: "text",
            accept: ["有雾", "yǒu wù", "yǒuwù"],
            display: "有雾 (yǒu wù)",
          },
          hints: ["Use **有** (*have/there is*) + **雾** (*wù*, fog with the rain roof **雨**)."],
          solution: ["'Foggy' in Mandarin is **有雾** (*yǒu wù*)."],
        },
        {
          id: "weather-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "weather-conditions",
          question: "Write **'to thunder'** in Mandarin (2 characters):",
          answer: {
            type: "text",
            accept: ["打雷", "dǎ léi", "dǎléi"],
            display: "打雷 (dǎ léi)",
          },
          hints: ["Use **打** (*dǎ*) + **雷** (*léi*, rain roof **雨** over **田**)."],
          solution: ["'To thunder' is **打雷** (*dǎ léi*)."],
        },
        {
          id: "weather-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "temperature-degree",
          question: "Write **'pleasantly warm'** in Mandarin (2 characters; watch the neutral-tone second syllable *nuǎnhuo*!):",
          answer: {
            type: "text",
            accept: ["暖和", "nuǎnhuo"],
            display: "暖和 (nuǎnhuo)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["凉快", "liángkuai"] },
              feedback: "凉快 means 'pleasantly cool' — its opposite 'pleasantly warm' is 暖和 (nuǎnhuo)!",
            },
            {
              spec: { type: "text", accept: ["nuǎnhé"] },
              feedback: "Careful! In 暖和, 和 is pronounced neutral-tone huo (nuǎnhuo), not hé!",
            },
          ],
          hints: ["Starts with **暖** (sun radical **日** on the left) + **和**."],
          solution: ["'Pleasantly warm' is **暖和** (*nuǎnhuo*)."],
        },
        {
          id: "weather-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "temperature-degree",
          question: "Translate into Mandarin: **'This morning is a little bit cold.'** (Use **有点儿**.)",
          answer: {
            type: "text",
            accept: [
              "今天早上有点儿冷",
              "今天早上有点冷",
              "Jīntiān zǎoshang yǒudiǎnr lěng",
              "Jīntiān zǎoshang yǒudiǎn lěng",
            ],
            display: "今天早上有点儿冷。 (Jīntiān zǎoshang yǒudiǎnr lěng.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["今天早上冷一点儿", "今天早上冷有点儿"] },
              feedback: "Put 有点儿 BEFORE the adjective 冷 when describing a standalone feeling: 今天早上有点儿冷.",
            },
          ],
          hints: [
            "'This morning' in big-to-small order = **今天早上**.",
            "Put **有点儿** *before* **冷**!",
          ],
          solution: ["**今天早上** + **有点儿** + **冷** → **今天早上有点儿冷。**"],
        },
        {
          id: "weather-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "time-weather-forecasts",
          question: "Translate into Mandarin: **'It rained yesterday.'** (4 characters, using **了**.)",
          answer: {
            type: "text",
            accept: ["昨天下雨了", "昨天有下雨", "Zuótiān xià yǔ le"],
            display: "昨天下雨了。 (Zuótiān xià yǔ le.)",
          },
          hints: [
            "Start with **昨天** (*zuótiān*, yesterday).",
            "Follow with **下雨** + completed particle **了**.",
          ],
          solution: ["**昨天下雨了。** (*Zuótiān xià yǔ le.*)."],
        },
        {
          id: "weather-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "time-weather-forecasts",
          question: "What does the 4-character forecast shorthand **多云转晴** (*duōyún zhuǎn qíng*) mean in English?",
          answer: {
            type: "text",
            accept: [
              "cloudy turning sunny",
              "cloudy turning clear",
              "partly cloudy turning sunny",
              "cloudy then sunny",
            ],
            display: "cloudy turning sunny",
          },
          hints: [
            "**多云** = cloudy and **晴** = sunny/clear.",
            "**转** (*zhuǎn*) means 'turning into' in weather bulletins.",
          ],
          solution: [
            "**多云** (cloudy) + **转** (turning into) + **晴** (sunny) = **cloudy turning sunny**.",
          ],
        },
        {
          id: "weather-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "time-weather-forecasts",
          question: "Translate into Mandarin: **'Look! Outside is raining right now.'** → **看！外面______下雨呢。** (Fill in the 2-character ongoing marker.)",
          answer: {
            type: "text",
            accept: ["正在", "zhèngzài"],
            display: "正在 (zhèngzài)",
          },
          hints: [
            "Which 2-character adverb pairs with **…呢** to mean 'right in the middle of -ing'?",
            "Starts with **正** (*zhèng*).",
          ],
          solution: ["**正在** (*zhèngzài*) marks an action in progress right now: **外面正在下雨呢。**"],
        },
        {
          id: "weather-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "weather-activities",
          question: "Unscramble into a natural Mandarin sentence: **所以 / 因为 / 比赛 / 刮大风 / 取消了**",
          answer: {
            type: "text",
            accept: [
              "因为刮大风，所以比赛取消了",
              "Yīnwèi guā dà fēng, suǒyǐ bǐsài qǔxiāo le",
            ],
            display: "因为刮大风，所以比赛取消了。 (Yīnwèi guā dà fēng, suǒyǐ bǐsài qǔxiāo le.)",
          },
          hints: [
            "Clause 1 gives the weather cause: **因为刮大风，**.",
            "Clause 2 gives the result: **所以比赛取消了。** (*so the match was cancelled*).",
          ],
          solution: [
            "Cause: **因为刮大风** (*Because strong winds blew*).",
            "Effect: **所以比赛取消了** (*therefore the match was cancelled*).",
          ],
        },
        {
          id: "weather-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "reading-weather-reports",
          question: "Write **'weather forecast'** in Mandarin (4 characters):",
          answer: {
            type: "text",
            accept: ["天气预报", "tiānqì yùbào", "tiānqìyùbào"],
            display: "天气预报 (tiānqì yùbào)",
          },
          hints: [
            "Start with **天气** (*tiānqì*, weather).",
            "Add **预报** (*yùbào*, advance report).",
          ],
          solution: ["'Weather forecast' is **天气预报** (*tiānqì yùbào*)."],
        },
        {
          id: "weather-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "reading-weather-reports",
          question: "Read: **哈尔滨昨天零下十八度，今天升高了五度。** What is Harbin's temperature today in °C? (Type a negative number, e.g. `-10`.)",
          answer: {
            type: "number",
            value: -13,
            display: "−13",
          },
          traps: [
            {
              spec: { type: "number", value: -23 },
              feedback: "升高 (shēnggāo) means 'rose / went UP', not dropped! Add +5 to −18: −18 + 5 = −13.",
            },
            {
              spec: { type: "number", value: 13 },
              feedback: "Don't forget the minus sign! Starting at −18°C and rising 5°C reaches −13°C, still below zero.",
            },
          ],
          hints: [
            "**零下十八度** = −18°C.",
            "**升高了五度** means the temperature *rose* by 5 degrees: calculate −18 + 5!",
          ],
          solution: [
            "Yesterday = **零下十八度** (−18°C).",
            "**升高了五度** = rose by 5°C → −18 + 5 = **−13**°C (**零下十三度**).",
          ],
        },
        {
          id: "weather-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "temperature-degree",
          question: "Translate into Mandarin: **'Singapore's weather is both hot and humid.'** (Use **又…又…**.)",
          answer: {
            type: "text",
            accept: [
              "新加坡的天气又热又潮湿",
              "新加坡天气又热又潮湿",
              "Xīnjiāpō de tiānqì yòu rè yòu cháoshī",
            ],
            display: "新加坡的天气又热又潮湿。 (Xīnjiāpō de tiānqì yòu rè yòu cháoshī.)",
          },
          hints: [
            "Subject: **新加坡的天气**.",
            "Frame: **又 + 热 + 又 + 潮湿** (no **是** or **很** needed!).",
          ],
          solution: ["**新加坡的天气又热又潮湿。** (*Xīnjiāpō de tiānqì yòu rè yòu cháoshī.*)."],
        },
        {
          id: "weather-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "time-weather-forecasts",
          question: "Translate into Mandarin: **'Beijing is much colder than Singapore.'** (Use **冷得多**.)",
          answer: {
            type: "text",
            accept: [
              "北京比新加坡冷得多",
              "Běijīng bǐ Xīnjiāpō lěng de duō",
              "Běijīng bǐ Xīnjiāpō lěngdeduō",
            ],
            display: "北京比新加坡冷得多。 (Běijīng bǐ Xīnjiāpō lěng de duō.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["北京比新加坡很冷"] },
              feedback: "Never put 很 before 冷 in a 比 comparison! Put 得多 AFTER 冷: 北京比新加坡冷得多.",
            },
          ],
          hints: [
            "Use **北京 + 比 + 新加坡 + 冷得多**.",
            "Remember **得多** sits *after* the adjective **冷**.",
          ],
          solution: ["**北京比新加坡冷得多。** (*Běijīng bǐ Xīnjiāpō lěng de duō.*)."],
        },
        {
          id: "weather-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "weather-activities",
          marks: 5,
          question:
            "**IGCSE 0547 Email Response (约50–70字):**\nYour classmate texts you: *'这个星期六我们去东海岸公园骑自行车，好吗？'*\nYou checked the weekend weather forecast and saw a storm on Saturday, but great weather on Sunday! Write a polite reply in Simplified Chinese covering ALL FIVE points:\n1. Thank or respond politely to the invitation.\n2. Explain Saturday's bad weather forecast (e.g. **下大雨 / 打雷 / 刮大风**).\n3. Use **因为…所以…** to explain why Saturday won't work.\n4. Give Sunday's good forecast & temperature (**星期天是晴天…度**).\n5. Suggest going on Sunday instead using **如果…就…** or **怎么样？**",
          hints: [
            "Explain Saturday's storm with **因为星期六下午会下大雨，所以我们不能去…**.",
            "Contrast with Sunday (**星期天是晴天，二十九度**) and propose **如果星期天不下雨，我们就星期天去，怎么样？**",
          ],
          modelAnswer:
            "太好了，我也很想去骑自行车！可是我刚看了天气预报。因为这个星期六下午会下大雨，还会打雷，所以我们星期六不能去东海岸公园。星期天是晴天，二十九度，比星期六舒服。如果星期天不下雨，我们就星期天上午去，怎么样？",
          markScheme: [
            {
              point: "Responds politely to the friend's cycling invitation.",
              keywords: ["好", "想", "骑自行车", "谢谢"],
            },
            {
              point: "Describes Saturday's stormy forecast accurately (下大雨 / 打雷 / 刮大风).",
              keywords: ["星期六", "下大雨", "下雨", "打雷", "刮大风", "天气预报"],
            },
            {
              point: "Uses 因为…所以… accurately to explain why Saturday is unsuitable.",
              keywords: ["因为", "所以", "不能"],
            },
            {
              point: "Gives Sunday's positive weather condition and temperature in 度.",
              keywords: ["星期天", "晴天", "多云", "度", "凉快", "舒服"],
            },
            {
              point: "Proposes Sunday clearly using 如果…就… or polite question 怎么样 / 好吗.",
              keywords: ["如果", "就", "怎么样", "好吗"],
            },
          ],
          commonError:
            "Forgetting STPV order in the suggestion (*我们就去星期天* ✗ instead of **我们就星期天去** ✓).",
        },
        {
          id: "weather-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "reading-weather-reports",
          marks: 5,
          question:
            "**IGCSE 0547 TV Weather Presenter Script (80–120 characters):**\nWrite a lively Mandarin TV weather broadcast (**天气预报广播**) for viewers travelling between **新加坡**, **北京** and **悉尼** in December. Include:\n1. Greeting viewers and introducing today's weather report.\n2. Singapore's weather, temperature range (**…到…度**) & umbrella reminder.\n3. Beijing's sub-zero temperature (**零下…度**) & wind/snow.\n4. Sydney's warm Southern Hemisphere weather.\n5. At least one comparison (**比** or **没有…那么…**).",
          hints: [
            "Open with **大家好，欢迎收看今天的天气预报！** and use **A 到 B 度** for Singapore's range plus **零下…度** for Beijing.",
            "Remember December in Sydney (**悉尼**) is summer (**晴天 / 暖和**), and close with **比北京暖和得多**!",
          ],
          modelAnswer:
            "大家好，欢迎收看今天的天气预报！今天新加坡上午多云，下午会下大雨，气温是二十六到三十一度，很潮湿，出门请带一把雨伞。北京今天刮大风，最高气温两度，最低气温零下七度，非常冷。悉尼今天是晴天，二十五度，没有新加坡那么潮湿，比北京暖和得多！",
          markScheme: [
            {
              point: "Opens naturally as a weather broadcast using 天气预报.",
              keywords: ["大家好", "欢迎", "天气预报"],
            },
            {
              point: "Covers Singapore's conditions, temperature range with 到…度, and 雨伞 advice.",
              keywords: ["新加坡", "到", "度", "雨伞"],
            },
            {
              point: "Covers Beijing's sub-zero temperature using 零下 and snow/wind.",
              keywords: ["北京", "零下", "刮", "下雪", "冷"],
            },
            {
              point: "Accurately portrays Sydney as warm/sunny in December.",
              keywords: ["悉尼", "晴天", "暖和", "舒服"],
            },
            {
              point: "Includes an accurate comparison using 比 or 没有…那么….",
              keywords: ["比", "没有", "得多"],
            },
          ],
          commonError:
            "Forgetting that December in Sydney (悉尼) is summer, or writing *北京比悉尼很冷* with 很.",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "weather-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "weather-conditions",
      question:
        "**Linguistic Puzzle — Separable Weather Verbs:**\nBecause **下雨** is Verb (**下**, fall) + Object (**雨**, rain), Mandarin inserts duration and aspect markers right **between** the two characters! Which sentence correctly says **'Yesterday it rained for two hours'**?",
      options: [
        "昨天下雨了两个小时。",
        "昨天下了两个小时的雨。",
        "昨天两个小时下了雨。",
        "昨天是下雨两个小时了。",
      ],
      answerIndex: 1,
      hints: [
        "Split **下** and **雨** apart!",
        "Attach **了** right after the verb **下**, put the duration **两个小时(的)** in the middle, and finish with the object **雨**.",
      ],
      explanation:
        "**昨天下了两个小时的雨。** splits **下…雨** cleanly: Verb **下** + **了** + duration **两个小时(的)** + Object **雨**! Putting a duration after the intact verb-object (*下雨了两个小时*) sounds unnatural in Mandarin.",
    },
    {
      id: "weather-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "temperature-degree",
      question:
        "**Radical Logic Puzzle:**\nLook at the three characters **冷** (*lěng*), **温** (*wēn*), and **热** (*rè*). Their temperature radicals have **2 strokes** (**冫**), **3 strokes** (**氵**), and **4 strokes** (**灬**). Now find the character in our weather list that means **'dry'** (*zào* in **干燥**): what 4-stroke radical sits on the **left** of **燥**, and what element does it mean in English? (Write the English element word, e.g. `ice`, `water`, `fire`, `wind`, or the single Hanzi radical.)",
      answer: {
        type: "text",
        accept: ["fire", "火", "huǒ", "fire radical"],
        display: "火 / fire",
      },
      hints: [
        "Compare **潮湿** (humid — water **氵** on the left) with its antonym **干燥** (dry).",
        "Look closely at the left side of **燥**: what dries wet things out?",
      ],
      solution: [
        "In **干燥** (*gānzào*, dry), **燥** has the **fire** radical **火** (*huǒ*) on the left because heat/fire evaporates moisture!",
      ],
    },
    {
      id: "weather-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "reading-weather-reports",
      question:
        "**Multi-City Thermometer Deduction:**\nRead these four clues carefully:\n1. **新加坡今天三十一度。**\n2. **伦敦今天比新加坡低十九度。**\n3. **北京今天比伦敦低十五度。**\n4. **哈尔滨今天的气温比北京低十一度。**\n\nWhat is **北京**'s temperature today **written in Mandarin Hanzi** (using **零下…度**)?",
      answer: {
        type: "text",
        accept: ["零下三度", "língxià sān dù", "líng xià sān dù"],
        display: "零下三度 (−3°C)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["三度", "sān dù"] },
          feedback: "Check the sign! London is 31 − 19 = 12°C, so Beijing is 12 − 15 = −3°C (below zero: 零下三度!).",
        },
        {
          spec: { type: "text", accept: ["零下十四度", "língxià shísì dù"] },
          feedback: "零下十四度 (−14°C) is Harbin's temperature! The question asks specifically for 北京 (Beijing).",
        },
      ],
      hints: [
        "Step 1: Singapore = 31°C. London is 19°C lower (**低十九度**): 31 − 19 = 12°C.",
        "Step 2: Beijing is 15°C lower than London (**比伦敦低十五度**): 12 − 15 = −3°C.",
        "Step 3: Express −3°C in Mandarin using **零下…度**!",
      ],
      solution: [
        "新加坡 = 31°C.",
        "伦敦 = 31 − 19 = 12°C.",
        "北京 = 12 − 15 = −3°C → in Mandarin: **零下三度** (*língxià sān dù*).",
      ],
    },
    {
      id: "weather-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "time-weather-forecasts",
      question:
        "**Double Comparison Trap:**\nRead these two true sentences:\n- **上海今天没有新加坡那么热。**\n- **伦敦今天比上海凉快得多。**\n\nRank the three cities from **HOTTEST to COOLEST** today:",
      options: [
        "上海 → 新加坡 → 伦敦",
        "新加坡 → 上海 → 伦敦",
        "伦敦 → 上海 → 新加坡",
        "新加坡 → 伦敦 → 上海",
      ],
      answerIndex: 1,
      hints: [
        "Clue 1: **上海没有新加坡那么热** = Shanghai is *not as hot as* Singapore → Singapore > Shanghai.",
        "Clue 2: **伦敦比上海凉快得多** = London is *much cooler than* Shanghai → Shanghai > London.",
      ],
      explanation:
        "Singapore is hotter than Shanghai (**上海没有新加坡那么热**), and Shanghai is warmer than London (**伦敦比上海凉快得多**). So hottest to coolest is **新加坡 → 上海 → 伦敦**!",
    },
    {
      id: "weather-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "weather-activities",
      question:
        "**Error-Correction Surgery:**\nA student wrote this sentence with **TWO classic grammar errors**:\n> *如果明天是下雨，就我不去海边了。*\n\nRewrite the complete corrected Mandarin sentence (keeping the meaning *'If it rains tomorrow, I will not go to the beach'*):",
      answer: {
        type: "text",
        accept: [
          "如果明天下雨，我就不去海边",
          "如果明天下雨，我就不去海边了",
          "Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù hǎibiān",
          "Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù hǎibiān le",
          "Rúguǒ míngtiān xià yǔ, wǒ jiù bù qù hǎibiān",
          "Rúguǒ míngtiān xià yǔ, wǒ jiù bù qù hǎibiān le",
        ],
        display: "如果明天下雨，我就不去海边。 (Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù hǎibiān.)",
      },
      hints: [
        "Fix 1: Remove **是** before the verb-object **下雨** (**如果明天下雨**).",
        "Fix 2: Move the subject **我** *before* the adverb **就** (**我就不去海边**).",
      ],
      solution: [
        "Drop **是** before **下雨** → **如果明天下雨，**",
        "Place subject **我** before adverb **就** → **我就不去海边。**",
        "Corrected sentence: **如果明天下雨，我就不去海边。**",
      ],
    },
    {
      id: "weather-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "weather-conditions",
      question:
        "**Tone Sandhi Chain Puzzle:**\nIn **我有一把好雨伞** (*I have a good umbrella*), look at the five consecutive 3rd-tone characters in dictionary citation form: **我 (wǒ) 有 (yǒu) … 把 (bǎ) 好 (hǎo) 雨 (yǔ) 伞 (sǎn)**, broken by **一** in the middle! Focus just on **好雨伞** (*good umbrella*, grouped semantically as **好 + [雨伞]**). How are the tones of **好雨伞** spoken naturally?",
      options: [
        "hǎo yúsǎn (3rd / half-3rd + 2nd + 3rd)",
        "háo yū sān (2nd + 1st + 1st)",
        "hào yù sàn (4th + 4th + 4th)",
        "hǎo yǔ sǎn with zero tone sandhi at all",
      ],
      answerIndex: 0,
      hints: [
        "Group the noun **雨伞** (*yǔ + sǎn*, 3rd + 3rd) first: **雨** becomes 2nd tone (*yúsǎn*).",
        "Now **好** (*hǎo*, 3rd tone) sits before a **2nd-tone** syllable (*yú*), so **好** stays a (half-)3rd tone!",
      ],
      explanation:
        "Because **雨伞** forms a tight two-syllable noun, **雨** shifts to 2nd tone (**yúsǎn**). Since **好** now precedes a 2nd tone rather than a 3rd tone, **好** stays (half-)3rd tone: **hǎo yúsǎn**!",
    },
    {
      id: "weather-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "reading-weather-reports",
      question:
        "**Schedule & Forecast Logic:**\nRead Mr Chen's 4-day outdoor CCA rules at Tanglin:\n- If maximum temperature > 33°C, outdoor football is cancelled.\n- If there is **打雷** or **下大雨**, outdoor football is cancelled.\n- Light rain (**下小雨**) or **多云** / **阴天** at ≤ 33°C is STILL ON!\n\nHere is next week's forecast:\n- **星期一**：晴天，最高气温三十五度\n- **星期二**：阴转小雨，二十五到二十九度\n- **星期三**：上午多云，下午下大雨、打雷，三十度\n- **星期四**：多云，二十七到三十二度\n\nHow many days next week can outdoor afternoon football go ahead? (Type a single number.)",
      answer: {
        type: "number",
        value: 2,
        display: "2",
      },
      traps: [
        {
          spec: { type: "number", value: 1 },
          feedback: "Check Tuesday again! 阴转小雨 (drizzle) at 29°C is allowed under Mr Chen's rules — both Tuesday and Thursday go ahead!",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "Check Monday's temperature: 三十五度 (35°C) exceeds 33°C, so Monday is cancelled!",
        },
      ],
      hints: [
        "Monday (**三十五度** = 35°C > 33°C) → cancelled!",
        "Check Tuesday (**阴转小雨**, max 29°C), Wednesday (**下大雨、打雷**), and Thursday (**多云**, max 32°C).",
      ],
      solution: [
        "星期一: 35°C > 33°C → Cancelled.",
        "星期二: Light rain (**下小雨**), 29°C ≤ 33°C → **Goes ahead!**",
        "星期三: Heavy rain & thunder (**下大雨、打雷**) → Cancelled.",
        "星期四: Cloudy (**多云**), 32°C ≤ 33°C → **Goes ahead!**",
        "Total = **2** days (Tuesday and Thursday).",
      ],
    },
    {
      id: "weather-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "time-weather-forecasts",
      question:
        "**High-Precision Translation:**\nTranslate into Mandarin: **'Tomorrow afternoon might thunder.'** (Use **明天下午**, **可能会** and **打雷**.)",
      answer: {
        type: "text",
        accept: [
          "明天下午可能会打雷",
          "明天下午可能打雷",
          "Míngtiān xiàwǔ kěnéng huì dǎ léi",
          "Míngtiān xiàwǔ kěnéng dǎ léi",
        ],
        display: "明天下午可能会打雷。 (Míngtiān xiàwǔ kěnéng huì dǎ léi.)",
      },
      hints: [
        "Big-to-small time first: **明天下午**.",
        "'Might / possibly will' = **可能会**, followed by 'thunder' = **打雷**.",
      ],
      solution: [
        "Time (**明天下午**) + modal (**可能会**) + verb-object (**打雷**) → **明天下午可能会打雷。**",
      ],
    },
  ],
};
