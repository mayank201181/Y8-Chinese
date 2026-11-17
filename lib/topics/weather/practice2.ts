import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "weather-p3",
    title: "Weather Practice Paper 3 — IGCSE Synthesis & World Forecasts",
    questions: [
      {
        id: "weather-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "weather-conditions",
        question: "Write **'cloudy / partly cloudy'** ('many clouds') in Mandarin (2 characters):",
        answer: {
          type: "text",
          accept: ["多云", "duōyún", "duō yún"],
          display: "多云 (duōyún)",
        },
        hints: ["Combine **多** (*duō*, many) + **云** (*yún*, cloud)."],
        solution: ["'Cloudy' is **多云** (*duōyún*)."],
      },
      {
        id: "weather-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "weather-conditions",
        question: "Write **'light rain / drizzle'** in Mandarin by inserting **小** into **下雨**:",
        answer: {
          type: "text",
          accept: ["下小雨", "xià xiǎo yǔ", "xiàxiǎoyǔ"],
          display: "下小雨 (xià xiǎo yǔ)",
        },
        hints: ["Place **小** directly before the noun **雨**."],
        solution: ["Split **下** + **雨** → **下小雨** (*xià xiǎo yǔ*)."],
      },
      {
        id: "weather-p3-q03",
        kind: "short",
        difficulty: "warmup",
        guideRef: "temperature-degree",
        question: "Write **'zero degrees (0°C)'** in Mandarin (2 characters):",
        answer: {
          type: "text",
          accept: ["零度", "líng dù", "língdù"],
          display: "零度 (líng dù)",
        },
        hints: ["Use **零** (*líng*, zero with the rain roof **雨**) + **度** (*dù*)."],
        solution: ["0°C = **零度** (*líng dù*)."],
      },
      {
        id: "weather-p3-q04",
        kind: "short",
        difficulty: "core",
        guideRef: "temperature-degree",
        question: "Write **'comfortable'** in Mandarin (2 characters, e.g. **二十四度的天气很______**):",
        answer: {
          type: "text",
          accept: ["舒服", "shūfu", "shūfú"],
          display: "舒服 (shūfu)",
        },
        hints: [
          "Think of how an air-conditioned room at 24°C feels after coming in from the heat.",
          "Starts with **舒** (*shū*) + **服** (*fu*, neutral tone).",
        ],
        solution: ["'Comfortable' is **舒服** (*shūfu*)."],
      },
      {
        id: "weather-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "temperature-degree",
        question: "Translate into Mandarin: **'Beijing's autumn is very dry.'** → **北京的秋天很______。** (Fill in the 2-character adjective for 'dry'.)",
        answer: {
          type: "text",
          accept: ["干燥", "gānzào", "gān zào"],
          display: "干燥 (gānzào)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["潮湿", "cháoshī"] },
            feedback: "潮湿 means humid/wet (Singapore's climate) — Beijing's autumn is the exact opposite: 干燥 (dry)!",
          },
        ],
        hints: [
          "Opposite of **潮湿** (*cháoshī*, humid).",
          "Second character **燥** has the fire radical **火** on the left!",
        ],
        solution: ["'Dry' is **干燥** (*gānzào*)."],
      },
      {
        id: "weather-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "time-weather-forecasts",
        question: "Translate into Mandarin: **'Yesterday it did not snow.'** (Use **昨天**, **没**, and **下雪**.)",
        answer: {
          type: "text",
          accept: [
            "昨天没下雪",
            "昨天没有下雪",
            "Zuótiān méi xià xuě",
            "Zuótiān méiyǒu xià xuě",
          ],
          display: "昨天没下雪。 (Zuótiān méi xià xuě.)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["昨天没下雪了", "昨天没有下雪了"] },
            feedback: "Drop 了! Never combine 没(有) with 了 in negated past events.",
          },
        ],
        hints: [
          "Time first: **昨天**.",
          "Negate past action with **没** + **下雪** (no **了**!).",
        ],
        solution: ["**昨天没下雪。** (*Zuótiān méi xià xuě.*)."],
      },
      {
        id: "weather-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "time-weather-forecasts",
        question: "Unscramble into a natural Mandarin sentence: **要 / 看 / 下雨 / 快 / 了** (*Look, it's about to rain!*)",
        answer: {
          type: "text",
          accept: [
            "看快要下雨了",
            "看，快要下雨了",
            "Kàn, kuài yào xià yǔ le",
          ],
          display: "看，快要下雨了！ (Kàn, kuài yào xià yǔ le!)",
        },
        hints: [
          "Start with **看，** (*Look,*).",
          "Use the imminent-action frame **快要 + Verb + 了**!",
        ],
        solution: [
          "Opening call: **看，**",
          "Imminent weather frame: **快要下雨了！**",
        ],
      },
      {
        id: "weather-p3-q08",
        kind: "short",
        difficulty: "core",
        guideRef: "weather-activities",
        question: "Write **'wear a raincoat'** in Mandarin using the top/coat classifier **件** (*jiàn*) (5 characters: **穿一___雨衣**):",
        answer: {
          type: "text",
          accept: ["穿一件雨衣", "chuān yí jiàn yǔyī", "chuān yījiàn yǔyī"],
          display: "穿一件雨衣 (chuān yí jiàn yǔyī)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["穿一把雨衣"] },
            feedback: "把 is for umbrellas (雨伞) with handles! Raincoats (雨衣) are upper-body garments, so use 件 (jiàn).",
          },
        ],
        hints: [
          "Verb 'to wear clothes': **穿** (*chuān*).",
          "Raincoats use **件** (*jiàn*): **一件雨衣**.",
        ],
        solution: ["**穿一件雨衣** (*chuān yí jiàn yǔyī*)."],
      },
      {
        id: "weather-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "weather-activities",
        question: "Translate into Mandarin: **'If tomorrow is windy, we will not go to the beach.'** (Use **刮风** and **如果…就…**.)",
        answer: {
          type: "text",
          accept: [
            "如果明天刮风，我们就不去海边",
            "如果明天刮风，我们就不去海边了",
            "Rúguǒ míngtiān guā fēng, wǒmen jiù bú qù hǎibiān",
            "Rúguǒ míngtiān guā fēng, wǒmen jiù bù qù hǎibiān",
            "Rúguǒ míngtiān guā fēng, wǒmen jiù bú qù hǎibiān le",
          ],
          display: "如果明天刮风，我们就不去海边。 (Rúguǒ míngtiān guā fēng, wǒmen jiù bú qù hǎibiān.)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["如果明天刮风，就我们不去海边"] },
            feedback: "Remember: put the subject 我们 BEFORE the adverb 就 → 我们就不去海边!",
          },
        ],
        hints: [
          "Clause 1: **如果明天刮风，** (no **是** before **刮风**!).",
          "Clause 2: **我们** + **就** + **不去海边**.",
        ],
        solution: ["**如果明天刮风，我们就不去海边。**"],
      },
      {
        id: "weather-p3-q10",
        kind: "short",
        difficulty: "core",
        guideRef: "reading-weather-reports",
        question: "Read: **伦敦今天早上有雾，中午十二度，下午下雨以后气温下降了三度。** What was London's temperature in °C **after** the afternoon rain? (Type a number.)",
        answer: {
          type: "number",
          value: 9,
          display: "9",
        },
        traps: [
          {
            spec: { type: "number", value: 15 },
            feedback: "下降 (xiàjiàng) means 'dropped/fell', not rose! Subtract 3 from 12: 12 − 3 = 9.",
          },
        ],
        hints: [
          "Midday (**中午**) = **十二度** (12°C).",
          "**下降了三度** = dropped by 3 degrees → 12 − 3!",
        ],
        solution: ["12°C − 3°C = **9**°C (**九度**)."],
      },
      {
        id: "weather-p3-q11",
        kind: "short",
        difficulty: "challenge",
        guideRef: "reading-weather-reports",
        question: "Translate into Mandarin: **'Today's temperature is roughly the same as yesterday's.'** (Use **跟…差不多**.)",
        answer: {
          type: "text",
          accept: [
            "今天的温度跟昨天差不多",
            "今天的气温跟昨天差不多",
            "今天的温度跟昨天的差不多",
            "今天的气温跟昨天的差不多",
            "Jīntiān de wēndù gēn zuótiān chàbuduō",
            "Jīntiān de qìwēn gēn zuótiān chàbuduō",
            "Jīntiān de wēndù gēn zuótiān de chàbuduō",
            "Jīntiān de qìwēn gēn zuótiān de chàbuduō",
          ],
          display: "今天的温度跟昨天差不多。 (Jīntiān de wēndù gēn zuótiān chàbuduō.)",
        },
        hints: [
          "Subject: **今天的温度** (or **今天的气温**).",
          "Comparison of similarity: **跟昨天差不多** (*gēn zuótiān chàbuduō*).",
        ],
        solution: ["**今天的温度跟昨天差不多。**"],
      },
      {
        id: "weather-p3-q12",
        kind: "short",
        difficulty: "challenge",
        guideRef: "time-weather-forecasts",
        question: "Translate into Mandarin: **'Today is not as hot as yesterday.'** (Use the negative comparison **没有…那么…**.)",
        answer: {
          type: "text",
          accept: [
            "今天没有昨天那么热",
            "今天没有昨天热",
            "今天没昨天那么热",
            "今天没昨天热",
            "Jīntiān méiyǒu zuótiān nàme rè",
            "Jīntiān méiyǒu zuótiān rè",
          ],
          display: "今天没有昨天那么热。 (Jīntiān méiyǒu zuótiān nàme rè.)",
        },
        hints: [
          "Negative comparison frame: **A + 没有 + B + (那么) + Adjective**.",
          "Here A = **今天**, B = **昨天**, Adjective = **热**.",
        ],
        solution: ["**今天没有昨天那么热。** (*Jīntiān méiyǒu zuótiān nàme rè.*)."],
      },
      {
        id: "weather-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "weather-conditions",
        marks: 5,
        question:
          "**IGCSE 0547 School Notice / CCA Message (约50–70字):**\nYou are the student captain of Tanglin's football team. A sudden tropical thunderstorm hits at 3:30 pm! Write a message to your teammates in Simplified Chinese covering ALL FIVE points:\n1. What the weather outside is doing right now (**正在下大雨 / 打雷**).\n2. Today's temperature or how it feels outside.\n3. Why today's football practice/match is cancelled (**因为…所以…取消了**).\n4. What teammates should do right now (e.g. **待在教室 / 回家带雨伞**).\n5. Tomorrow afternoon's sunny/cool forecast and rescheduling practice.",
        hints: [
          "Use **正在…呢** for the storm happening right now (**外面正在下大雨呢**) and **因为…所以…取消了** for cancelling training.",
          "Remind players to **待在教室** and **带一把雨伞**, then give tomorrow's **晴天** forecast.",
        ],
        modelAnswer:
          "同学们好！现在外面正在下大雨呢，而且打雷、刮大风，很不安全。因为今天的天气太不好了，所以我们下午的足球训练取消了。大家现在请待在教室里做作业，回家的时候别忘了带一把雨伞。天气预报说明天下午是晴天，二十八度，很凉快，我们明天下午再踢足球吧！",
        markScheme: [
          {
            point: "Describes ongoing stormy weather using 正在 + 下大雨 / 打雷 / 刮大风.",
            keywords: ["正在", "下大雨", "下雨", "打雷", "刮"],
          },
          {
            point: "Uses 因为…所以… to announce cancellation (取消) or inability to play.",
            keywords: ["因为", "所以", "取消", "不能"],
          },
          {
            point: "Gives sensible immediate advice (待在… / 带一把雨伞).",
            keywords: ["待", "教室", "家", "雨伞"],
          },
          {
            point: "States tomorrow afternoon's forecast and temperature in 度.",
            keywords: ["明天", "下午", "晴天", "多云", "度", "凉快"],
          },
          {
            point: "Proposes rescheduling football clearly and politely.",
            keywords: ["踢足球", "训练", "比赛", "吧"],
          },
        ],
        commonError:
          "Writing *现在外面正在下了大雨* (combining 正在 with 了) or *带一个雨伞* instead of **一把雨伞**.",
      },
      {
        id: "weather-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "reading-weather-reports",
        marks: 6,
        question:
          "**IGCSE 0547 Magazine Article (90–130 characters):**\nWrite an article for the school Chinese magazine titled **《新加坡的天气》** (*Singapore's Weather*). Cover:\n- Typical daily temperatures (**…度左右**) and feelings (**又热又潮湿**)\n- Why Singapore's afternoons often bring surprises (**常常下大雨 / 打雷**)\n- Why indoor places like the MRT (**地铁**) or cinemas feel like a different climate (**空调太冷了**)\n- How Singapore's weather compares with a city you have visited (**比…**) and your personal opinion!",
        hints: [
          "Use **三十度左右** and **又热又潮湿** for daily outdoor weather, then **虽然…但是…** to contrast with **地铁里的空调太冷了**!",
          "Compare Singapore with another city using **比…冷得多 / 热得多** and finish with **我觉得…**.",
        ],
        modelAnswer:
          "新加坡每天的气温都在三十度左右，天气又热又潮湿。早上常常是晴天，可是下午突然会下大雨，有时候还会打雷，所以我每天书包里都带一把雨伞。虽然外面太热了，但是新加坡地铁和电影院里的空调太冷了，只有二十度左右！去年十二月我去过伦敦，伦敦比新加坡冷得多，也常常有雾。我觉得新加坡下完雨以后的晚上最凉快、最舒服！",
        markScheme: [
          {
            point: "Describes Singapore's typical temperature (度 / 左右) and heat/humidity (热 / 潮湿).",
            keywords: ["新加坡", "度", "热", "潮湿", "左右"],
          },
          {
            point: "Explains afternoon weather changes (下午 / 下大雨 / 打雷) and carrying an umbrella (一把雨伞).",
            keywords: ["下午", "下大雨", "下雨", "打雷", "一把雨伞", "雨伞"],
          },
          {
            point: "Contrasts outdoor heat with indoor air-con cold using 虽然…但是… or 太冷了.",
            keywords: ["虽然", "但是", "空调", "地铁", "太冷了"],
          },
          {
            point: "Compares Singapore accurately with another city using 比.",
            keywords: ["比", "伦敦", "北京", "哈尔滨", "悉尼", "得多"],
          },
          {
            point: "Expresses a clear personal opinion with 我觉得 / 最喜欢 and supporting reason.",
            keywords: ["我觉得", "舒服", "凉快", "喜欢"],
          },
          {
            point: "Demonstrates rich IGCSE range (又…又…, 去过, connectors, accurate classifiers).",
            keywords: ["又", "而且", "常常", "因为", "所以"],
          },
        ],
        commonError:
          "Using English clause-joining *和* between sentences instead of **而且 / 可是 / 所以**.",
      },
    ],
  },
];
