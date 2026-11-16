import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "weather",
  title: "天气 — Weather & Forecasts",
  strand: "Term 1 · Weather & Health",
  icon: "🌦️",
  summary:
    "Describe sunshine, tropical downpours, sub-zero temperatures and multi-day forecasts across Singapore, Beijing and the world.",
  intro:
    "Stepping out of Tanglin's air-conditioned classroom into a 32°C Singapore afternoon feels like walking into a warm towel — until dramatic dark clouds roll over Orchard Road and **下大雨** (*xià dà yǔ*, heavy rain) begins five minutes later! In Mandarin, weather words aren't all adjectives: some are nouns (**晴天** *qíngtiān*), some are adjectives (**热** *rè*, **潮湿** *cháoshī*), and others are hidden verb-object pairs (**下雨** *xià yǔ*, **刮风** *guā fēng*). Once you spot which category each weather word belongs to, you can build crisp forecasts, compare world cities and explain how the sky shapes your weekend plans.",
  guide: [
    {
      id: "weather-conditions",
      heading: "Weather types: 晴天, 阴天, 下雨, 下雪, 刮风",
      discovery: {
        problem:
          "Look at how Mandarin says 'heavy rain' and 'strong wind':\n- **下雨** (*xià yǔ*, to rain) → **下大雨** (*xià dà yǔ*, heavy rain)\n- **刮风** (*guā fēng*, to be windy) → **刮大风** (*guā dà fēng*, strong wind)\n\nWhy does **大** (*dà*, big/heavy) jump into the **middle** of the two characters instead of going at the front like English 'heavy rain'?",
        idea:
          "Because **下雨** is literally a **Verb + Object** pair: **下** (*xià* = fall) + **雨** (*yǔ* = rain), and **刮风** is **刮** (*guā* = blow) + **风** (*fēng* = wind)! Since **雨** and **风** are nouns, the describing word **大** (*dà*) or **小** (*xiǎo*) slots directly in front of the noun: *fall big rain* (**下大雨**) and *blow big wind* (**刮大风**).",
      },
      body: `To ask about the weather in Mandarin, place the time and place first, then ask **天气怎么样？** (*tiānqì zěnmeyàng?*, How is the weather?):

> **今天新加坡的天气怎么样？** (*Jīntiān Xīnjiāpō de tiānqì zěnmeyàng?* — What is Singapore's weather like today?)

Mandarin weather expressions split into **three grammatical families** — knowing which family a word belongs to stops you from adding an unwanted **是** (*shì*)!

| Family | Mandarin | Pinyin | English | How to use in a sentence |
|---|---|---|---|---|
| **1. Sky Nouns (use 是)** | **晴天** | *qíngtiān* | sunny / clear day | 今天**是晴天**。 |
| | **阴天** | *yīntiān* | overcast / grey day | 昨天**是阴天**。 |
| **2. Cloud Adjective (no 是)** | **多云** | *duōyún* | cloudy (many clouds) | 今天上午**多云**。 |
| **3. Verb + Object Actions (NEVER 是!)** | **下雨** | *xià yǔ* | to rain (fall + rain) | 新加坡常常**下雨**。 |
| | **下雪** | *xià xuě* | to snow (fall + snow) | 北京冬天**下雪**。 |
| | **刮风** | *guā fēng* | windy (blow + wind) | 海边**刮大风**。 |
| | **打雷** | *dǎ léi* | to thunder (strike + thunder) | 外面**打雷**了！ |
| | **有雾** | *yǒu wù* | foggy (have + fog) | 伦敦早上**有雾**。 |

**Radical Detective Tip — The Rain Roof 雨 (*yǔ*):**
Look closely at the top of **雪** (*xuě*, snow), **雷** (*léi*, thunder), **雾** (*wù*, fog) and **零** (*líng*, zero): every single one wears **雨** (*yǔ*, rain) squashed at the top like a storm cloud! Meanwhile **晴** (*qíng*, sunny) has the sun radical **日** (*rì*) on the left, while **阴** (*yīn*, overcast) hides the sun in shade.`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three grammar families of Mandarin weather words: sky nouns with shi, adjective predicates, and separable verb-object weather actions">
  <rect width="640" height="260" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="28" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Three Grammar Families of Weather Words (天气词的三类用法)</text>

  <rect x="20" y="46" width="186" height="194" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="113" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">1. Sky Nouns (+ 是)</text>
  <text x="113" y="102" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">晴天 · 阴天</text>
  <text x="113" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">qíngtiān · yīntiān</text>
  <rect x="34" y="140" width="158" height="44" rx="8" fill="#ffffff"/>
  <text x="113" y="160" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">今天是晴天。</text>
  <text x="113" y="176" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Today is a sunny day.</text>
  <text x="113" y="212" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#b45309">晴 has sun 日; 阴 = shade</text>

  <rect x="226" y="46" width="186" height="194" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="319" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0d9488">2. Cloud State (no 是)</text>
  <text x="319" y="102" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">多云 · 有雾</text>
  <text x="319" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">duōyún · yǒu wù</text>
  <rect x="240" y="140" width="158" height="44" rx="8" fill="#ffffff"/>
  <text x="319" y="160" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">今天上午多云。</text>
  <text x="319" y="176" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Cloudy this morning.</text>
  <text x="319" y="212" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0d9488">雾 has rain roof 雨</text>

  <rect x="432" y="46" width="188" height="194" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="526" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">3. Verb + Object (NO 是!)</text>
  <text x="526" y="100" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1e293b">下雨 · 下雪 · 刮风</text>
  <text x="526" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Insert 大 / 小 in the middle!</text>
  <rect x="446" y="140" width="160" height="44" rx="8" fill="#ffffff"/>
  <text x="526" y="160" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">下 + 大 + 雨 = 下大雨</text>
  <text x="526" y="176" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">刮 + 大 + 风 = 刮大风</text>
  <text x="526" y="212" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#c81e1e">✗ 今天是下雨 → ✓ 今天下雨</text>
</svg>`,
      diagramCaption:
        "Match each weather word to its grammar family: nouns take 是, whilst verb-object pairs like 下雨 split apart to welcome 大 or 小 in the middle.",
      workedExamples: [
        {
          title: "Building a 'heavy rain & strong wind' sentence",
          problem:
            "Translate into Mandarin: 'Today Singapore is raining heavily and has strong winds.'",
          steps: [
            "Start with Subject / Time + Place: **今天新加坡** (*Jīntiān Xīnjiāpō*).",
            "'Raining heavily' uses the separable verb-object **下雨** with **大** in the middle → **下大雨** (*xià dà yǔ*). Do NOT add **是**!",
            "'Strong winds' splits **刮风** with **大** in the middle → **刮大风** (*guā dà fēng*). Join the two verb phrases with **，也** (*, yě*, and also).",
          ],
          answer: "今天新加坡下大雨，也刮大风。 (Jīntiān Xīnjiāpō xià dà yǔ, yě guā dà fēng.)",
          yourTurn: {
            question:
              "How do you say 'light rain' (drizzle) in Mandarin by inserting 小 (xiǎo) into 下雨?",
            answer: {
              type: "text",
              accept: ["下小雨", "xià xiǎo yǔ", "xiàxiǎoyǔ"],
              display: "下小雨 (xià xiǎo yǔ)",
            },
            solution:
              "Split **下** (fall) + **雨** (rain) and place **小** (light/small) right before the noun **雨**: **下小雨** (*xià xiǎo yǔ*).",
          },
        },
      ],
      keyPoints: [
        "Ask about weather with **[Time] + [Place] + 天气怎么样？** (*tiānqì zěnmeyàng?*).",
        "**晴天** (*qíngtiān*) and **阴天** (*yīntiān*) end in **天** (day), so they act as nouns: **今天是晴天**.",
        "**下雨**, **下雪**, **刮风**, **打雷** are **Verb + Object** phrases — NEVER put **是** in front of them.",
        "Insert intensity adjectives (**大** heavy/strong, **小** light) *inside* verb-object pairs: **下大雨**, **下小雨**, **刮大风**.",
      ],
      whyItWorks:
        "English treats 'rain' and 'snow' as verbs with a dummy subject ('*It* is raining'), which tempts learners to translate 'is' as **是**. Mandarin has no dummy 'it' — instead, the sky or time/place is the topic (**今天**, **外面**), and **下雨** literally states the event 'falls rain'. Because **雨** is a genuine noun object, adjectives like **大** must sit directly before **雨**, never before the verb **下**!",
      strategies: [
        "Spot the Radical Roof (雨 = precipitation/cloud, 日 = sun)",
        "Split Verb-Object Pairs (Verb + 大/小 + Noun)",
      ],
      thinkDeeper:
        "If **下雨** means 'falls rain', how do you think Mandarin says 'rained for the whole day' using **一整天** (*yì zhěng tiān*, one whole day)? Where would **了** and **一整天** sit inside **下…雨**?",
    },
    {
      id: "temperature-degree",
      heading: "Temperatures & feelings: 温度, 度, 热, 冷, 暖和, 凉快",
      discovery: {
        problem:
          "Compare these three student sentences about Singapore's heat. Only TWO are natural Mandarin — which one is **wrong**, and why?\n1. **今天新加坡是热。**\n2. **今天新加坡很热。**\n3. **今天新加坡太热了！**",
        idea:
          "Sentence 1 (**今天新加坡是热**) is **wrong**! In Mandarin, adjectives like **热** (*rè*, hot) and **冷** (*lěng*, cold) already contain the 'is' meaning (they are *stative verbs*). You link them with a degree adverb such as **很** (*hěn*), **非常** (*fēicháng*) or **太…了** (*tài…le*), **never** **是**!",
      },
      body: `Both China and Singapore measure temperature in **degrees Celsius (°C)** — written **度** (*dù*) or formally **摄氏度** (*shèshìdù*).

### 1. Reading Thermometers & Negative Degrees
- **Positive temperatures:** Number + **度** (*dù*), e.g. **三十度** (*sānshí dù*, 30°C), **二十六到三十二度** (*26°C to 32°C*).
- **Zero degrees:** **零度** (*líng dù*, 0°C).
- **Below zero (minus):** **零下** (*língxià*, literally 'zero-below') + Number + **度**:
  - **−5°C** → **零下五度** (*língxià wǔ dù*)
  - **−18°C** → **零下十八度** (*língxià shíbā dù*)

### 2. Six Essential Weather Feelings
| Hanzi | Pinyin | English | Radical & Pronunciation Clue |
|---|---|---|---|
| **热** | *rè* | hot | Bottom **灬** = 4 fire sparks! |
| **冷** | *lěng* | cold | Left **冫** = 2 ice crystals (two-dot ice, NOT 3-dot water **氵**!) |
| **暖和** | *nuǎnhuo* | pleasantly warm | Sun **日** on left; **和** is neutral tone *huo* (NOT *hé*!) |
| **凉快** | *liángkuai* | pleasantly cool / breezy | Ice **冫** on left; **快** is neutral tone *kuai* |
| **潮湿** | *cháoshī* | humid / damp | Both characters have 3-dot water **氵** — Singapore's signature word! |
| **舒服** | *shūfu* | comfortable | **服** is neutral tone *fu*; e.g. air-con at **二十四度很舒服** |

### 3. Degree Adverbs (No 是 Allowed!)
- **Subject + 很 / 非常 / 有点儿 + Adjective:** **今天很潮湿** (*Today is humid*), **早上有点儿冷** (*A bit chilly this morning*).
- **Exclamation frame:** **太 + Adjective + 了！** → **今天太热了！** (*Today is way too hot!*). *(Careful: negative **不太热** 'not too hot' drops **了**!)*`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Thermometer scale in Mandarin from minus 15 degrees lingxia shiwu du cold leng up to 33 degrees re and chaoshi in Singapore">
  <rect width="640" height="260" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="26" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Mandarin Temperature &amp; Feeling Scale (气温与冷热感觉)</text>

  <line x1="60" y1="125" x2="580" y2="125" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>

  <rect x="28" y="52" width="122" height="54" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="89" y="73" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1">零下十度 (−10°C)</text>
  <text x="89" y="93" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">非常冷 (fēicháng lěng)</text>
  <circle cx="89" cy="125" r="8" fill="#0284c7"/>

  <rect x="166" y="146" width="118" height="54" rx="10" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="225" y="167" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0d9488">零度 (0°C)</text>
  <text x="225" y="187" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">很冷 (hěn lěng)</text>
  <circle cx="225" cy="125" r="8" fill="#0d9488"/>

  <rect x="296" y="52" width="128" height="54" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="360" y="73" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">十八度 (18°C)</text>
  <text x="360" y="93" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">凉快 / 舒服</text>
  <circle cx="360" cy="125" r="8" fill="#15803d"/>

  <rect x="404" y="146" width="118" height="54" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="463" y="167" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">二十三度 (23°C)</text>
  <text x="463" y="187" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">很暖和 (nuǎnhuo)</text>
  <circle cx="463" cy="125" r="8" fill="#b45309"/>

  <rect x="480" y="52" width="136" height="54" rx="10" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="548" y="73" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">三十三度 (33°C)</text>
  <text x="548" y="93" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">太热了 · 潮湿</text>
  <circle cx="548" cy="125" r="8" fill="#c81e1e"/>

  <text x="320" y="234" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#475569">Grammar Golden Rule: Subject + 很 / 非常 / 有点儿 / 太…了 + Adjective (NEVER 是!)</text>
</svg>`,
      diagramCaption:
        "From Harbin's 零下十度 (−10°C) to Singapore's 三十三度 (33°C): pair every feeling adjective with 很, 非常, 有点儿 or 太…了.",
      workedExamples: [
        {
          title: "Writing negative temperatures and feelings",
          problem:
            "Harbin's temperature today is −12°C and it is extremely cold. Write this in Mandarin.",
          steps: [
            "Express 'Harbin today's air temperature': **哈尔滨今天的气温是…** (*Hā'ěrbīn jīntiān de qìwēn shì…*).",
            "Convert −12°C using **零下 + Number + 度**: **零下十二度** (*língxià shí'èr dù*).",
            "Add 'extremely cold' with **非常** + **冷** (no **是**!): **非常冷** (*fēicháng lěng*).",
          ],
          answer:
            "哈尔滨今天的气温是零下十二度，非常冷。 (Hā'ěrbīn jīntiān de qìwēn shì língxià shí'èr dù, fēicháng lěng.)",
          yourTurn: {
            question: "How do you write '−8°C' in Mandarin?",
            answer: {
              type: "text",
              accept: ["零下八度", "língxià bā dù", "líng xià bā dù"],
              display: "零下八度 (língxià bā dù)",
            },
            solution:
              "Use **零下** ('below zero') + **八** (8) + **度** (degrees): **零下八度** (*língxià bā dù*).",
          },
        },
      ],
      keyPoints: [
        "**零下 + Number + 度** expresses minus temperatures: **零下五度** = −5°C.",
        "Never use **是** before weather adjectives! Say **今天很热** / **今天太冷了**, never *今天是热*.",
        "Watch two-dot ice **冫** (**冷**, **凉**) vs three-dot water **氵** (**温**, **潮湿**) vs four-dot fire **灬** (**热**).",
        "Pronounce the neutral-tone second syllables naturally: **暖和** (*nuǎnhuo*), **凉快** (*liángkuai*), **舒服** (*shūfu*).",
      ],
      whyItWorks:
        "In Chinese character design, stroke counts on the left or bottom carry physical temperature clues! Two strokes **冫** (*liǎngdiǎnshuǐ*) depict cracked ice crystals (**冷** cold, **凉** cool); three strokes **氵** (*sāndiǎnshuǐ*) depict flowing liquid water or moisture (**潮湿** humid, **温** warm water); four strokes **灬** (*sìdiǎndǐ*) at the base of **热** are an ancient picture of roaring flames under a pot!",
      strategies: [
        "Count the Radical Dots (2 = Ice 冫, 3 = Water 氵, 4 = Fire 灬)",
        "Swap English 'is' for 很 before Adjectives",
      ],
      thinkDeeper:
        "Why does **很冷** (*hěn lěng*) sound like *hén lěng* when spoken aloud? Check the tones of both characters — where else in this weather list does the 3rd-tone + 3rd-tone sandhi rule trigger?",
    },
    {
      id: "time-weather-forecasts",
      heading: "Past, today & tomorrow's forecast: 昨天, 今天, 明天会…",
      discovery: {
        problem:
          "Mandarin verbs never change shape — **下雨** stays **下雨** whether it rained yesterday or will rain tomorrow! Look at these three sentences and spot the tiny marker words doing all the tense work:\n- **昨天下雨了。** (*Zuótiān xià yǔ le.*)\n- **今天没下雨。** (*Jīntiān méi xià yǔ.*)\n- **明天会下雨。** (*Míngtiān huì xià yǔ.*)",
        idea:
          "Instead of verb endings like '-ed' or 'will', Mandarin combines a **time word near the front** (**昨天 / 今天 / 明天**) with a **particle or modal**: **了** (*le*) for completed past events, **没** (*méi*, without 了!) for 'did not', and **会** (*huì*) or **不会** (*bú huì*) for future predictions!",
      },
      body: `Weather bulletins move smoothly across **yesterday (昨天)**, **today (今天)** and **tomorrow (明天)**. Remember the golden Mandarin word order: **Time goes at the beginning** (either right before or right after the city/subject), **never** at the end!

### 1. Past, Present & Future Forecast Markers
| Timeframe | Affirmative Pattern | Negative Pattern | Example |
|---|---|---|---|
| **Past (昨天)** | Verb + **了** | **没(有)** + Verb *(drop 了!)* | 昨天**下雨了**。 / 昨天**没下雨**。 |
| **Right now (现在)** | **正在** + Verb (+ **呢**) | **没(在)** + Verb | 外面**正在下大雨呢**。 |
| **Imminent (soon)** | **(快)要** + Verb + **了** | — | 看黑云，**快要下雨了**！ |
| **Future forecast (明天)** | **会** / **可能会** + Verb | **不会** + Verb | 明天下午**会刮大风**。 / 明天**不会下雨**。 |

### 2. Comparing Days with 比 (*bǐ*) and 转 (*zhuǎn*)
- **Comparing two days:** **A + 比 + B + Adjective** (+ **一点儿** *a little* / **得多** *much more*)
  - **今天比昨天凉快。** (*Jīntiān bǐ zuótiān liángkuai.* — Today is cooler than yesterday.)
  - **明天比今天热一点儿。** (*Tomorrow will be a little hotter than today.*)
  - **TRAP ALERT:** NEVER put **很** or **非常** inside a **比** comparison! (*今天比昨天很热* ✗ → **今天比昨天热** ✓).
- **Forecast shorthand 转 (*zhuǎn*, turning to):** Chinese TV and phone apps use **转** when weather shifts mid-day: **多云转晴** (*cloudy turning sunny*), **阴转小雨** (*overcast turning to light rain*).`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-day weather forecast timeline showing yesterday zuotian with le or mei, today jintian with zhengzai, and tomorrow mingtian with hui or bu hui">
  <rect width="640" height="260" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="28" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Forecast Timeframes &amp; Comparisons (昨天 → 今天 → 明天)</text>

  <rect x="22" y="48" width="184" height="136" rx="12" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
  <text x="114" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155">昨天 (Yesterday)</text>
  <text x="114" y="98" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">✓ 昨天下雨了 (27°C)</text>
  <text x="114" y="122" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">✗ 昨天没下雨 (NO 了!)</text>
  <text x="114" y="156" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Past: Verb + 了 / 没 + Verb</text>

  <rect x="228" y="48" width="184" height="136" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="320" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">今天 (Today)</text>
  <text x="320" y="98" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">是晴天 · 三十一度</text>
  <text x="320" y="122" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0d9488">正在刮风呢 / 快要下雨了</text>
  <text x="320" y="156" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Now: 正在…呢 | Soon: 快要…了</text>

  <rect x="434" y="48" width="184" height="136" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="526" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">明天 (Tomorrow)</text>
  <text x="526" y="98" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">✓ 明天会下大雨</text>
  <text x="526" y="122" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">✗ 明天不会下雪</text>
  <text x="526" y="156" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Future prediction: 会 / 不会</text>

  <rect x="60" y="198" width="520" height="44" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="320" y="218" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">Comparison: 今天比昨天热 (31°C &gt; 27°C) — NEVER put 很 after 比!</text>
  <text x="320" y="235" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1e293b">Big-to-small time order: 明天下午 (Tomorrow afternoon), NEVER 下午明天</text>
</svg>`,
      diagramCaption:
        "Keep time words near the front in big-to-small order (明天下午) and choose the right aspect/modal marker for yesterday, now and tomorrow.",
      workedExamples: [
        {
          title: "Forecasting tomorrow & comparing with today",
          problem:
            "Translate into Mandarin: 'The weather forecast says tomorrow afternoon it will not rain, and tomorrow will be cooler than today.'",
          steps: [
            "'The weather forecast says': **天气预报说** (*Tiānqì yùbào shuō*).",
            "'Tomorrow afternoon' in big-to-small order: **明天下午** (*míngtiān xiàwǔ*). 'Will not rain' uses **不会下雨** (*bú huì xià yǔ*).",
            "'Tomorrow will be cooler than today' uses **A + 比 + B + Adjective** (no **很**!): **明天比今天凉快** (*míngtiān bǐ jīntiān liángkuai*).",
          ],
          answer:
            "天气预报说明天下午不会下雨，明天比今天凉快。 (Tiānqì yùbào shuō míngtiān xiàwǔ bú huì xià yǔ, míngtiān bǐ jīntiān liángkuai.)",
          yourTurn: {
            question:
              "Translate into Mandarin: 'Yesterday it did not rain.' (Watch out: do NOT use 了 with 没!)",
            answer: {
              type: "text",
              accept: [
                "昨天没下雨",
                "昨天没有下雨",
                "Zuótiān méi xià yǔ",
                "Zuótiān méiyǒu xià yǔ",
              ],
              display: "昨天没下雨。 (Zuótiān méi xià yǔ.)",
            },
            solution:
              "Negate a past action with **没** (or **没有**) and **drop 了**: **昨天没下雨** (*Zuótiān méi xià yǔ*).",
          },
        },
      ],
      keyPoints: [
        "Future weather predictions use **会** (*huì*, will/likely to) and **不会** (*bú huì*, won't): **明天会下雨**.",
        "Past weather uses **了** (**昨天下雨了**) in the positive, and **没(有)** *without* **了** in the negative (**昨天没下雨**).",
        "Big-to-small time order always holds: **明天早上** (*tomorrow morning*), **今天晚上** (*tonight*).",
        "In **A 比 B + Adjective**, never insert **很**! Add **一点儿** or **得多** *after* the adjective if needed (**热得多**).",
      ],
      whyItWorks:
        "Why does **会** mean both 'can speak Chinese' (**我会说中文**) and 'it will rain tomorrow' (**明天会下雨**)? Originally **会** meant 'things coming together / knowing how a pattern unfolds'. When applied to a person, knowing the pattern means a learned skill; when applied to the sky, knowing how conditions come together expresses a natural prediction!",
      strategies: [
        "Pin Time to the Front (Subject + Time + Weather)",
        "Ban 很 from 比 Sentences (A 比 B + bare Adjective)",
      ],
      thinkDeeper:
        "What is the difference in meaning between **外面下雨了** (*Wàimiàn xià yǔ le*) when you look out of the window right now, versus **昨天下雨了** (*Zuótiān xià yǔ le*)? Hint: sentence-final **了** can signal a *new situation*!",
    },
    {
      id: "weather-activities",
      heading: "Weather & knock-on plans: 因为下雨，所以…",
      discovery: {
        problem:
          "In English we say: *'Because it is raining heavily, I stay at home.'* Notice English forbids saying *'Because…, **so**…'* in the same sentence.\n\nNow look at natural Mandarin:\n> **因为外面下大雨，所以我待在家。**\n\nAnd look at an 'if… then…' plan:\n> **如果明天是晴天，我们就去东海岸公园。**\n\nSpot TWO word-order surprises in Mandarin!",
        idea:
          "Surprise 1: Mandarin loves **paired connectors** — **因为** (*because*) teams up with **所以** (*so*), and **如果** (*if*) teams up with **就** (*then*)! Surprise 2: **就** (*jiù*) MUST stand **after the second subject** and right before the verb (**我们就去**, NEVER *就我们去*!), whereas **所以** stands right at the start of the second clause (**所以我…**).",
      },
      body: `In IGCSE speaking and writing, examiners award higher marks as soon as you connect weather to **real-life decisions** — what you carry, where you go, or what gets cancelled!

### 1. Two High-Scoring Connector Frames
1. **Cause & Effect — 因为…，所以… (*yīnwèi…, suǒyǐ…* = Because…, therefore…):**
   - **因为今天下大雨，所以我们不能在操场上踢足球。**
   - (*Because it's raining heavily today, we cannot play football on the field.*)
2. **Conditional Plan — 如果…，Subject + 就 + Verb (*rúguǒ…, S + jiù + V* = If…, then S will…):**
   - **如果明天下午下雨，我就带一把雨伞。**
   - (*If it rains tomorrow afternoon, I will bring an umbrella.*)
   - **Word-Order Lock:** Put the subject **before** **就**! (**我就带** ✓, **我们就待在家** ✓; *就我带* ✗).

### 2. Essential Weather Gear & Knock-On Actions
- **带一把雨伞** (*dài yì bǎ yǔsǎn*) — bring an umbrella *(classifier **把** bǎ = object with a handle!)*
- **穿一件雨衣** (*chuān yí jiàn yǔyī*) — wear a raincoat
- **待在家看书 / 看电影** (*dāi zài jiā kàn shū / kàn diànyǐng*) — stay at home and read / watch a film
- **去圣淘沙 / 去海边** (*qù Shèngtáoshā / qù hǎibiān*) — go to Sentosa / go to the beach
- **去东海岸公园骑自行车** (*qù Dōnghǎi'àn Gōngyuán qí zìxíngchē*) — cycle at East Coast Park
- **比赛取消了** (*bǐsài qǔxiāo le*) — the match was cancelled`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of paired Mandarin connectors yinwei suoyi and ruguo subject jiu verb for weather plans">
  <rect width="640" height="260" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="28" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Linking Weather to Plans: Two Golden Connector Frames</text>

  <rect x="24" y="46" width="592" height="88" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="42" y="70" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">1. Real Cause &amp; Effect: 因为 (Because) … ， 所以 (Therefore) + Subject + Verb</text>
  <text x="320" y="98" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">因为 外面打雷 ， 所以 我们 待在家 。</text>
  <text x="320" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Yīnwèi wàimiàn dǎ léi, suǒyǐ wǒmen dāi zài jiā. (Keep BOTH halves of the pair!)</text>

  <rect x="24" y="148" width="592" height="94" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="42" y="172" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0d9488">2. Future Plan ('If… then…'): 如果 (If) … ， Subject + 就 (then) + Verb</text>
  <text x="320" y="200" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">如果 明天下雨 ， 我 就 带一把雨伞 。</text>
  <text x="320" y="224" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c81e1e">Watch 就 position: 我就带 ✓ (Subject BEFORE 就!) — NEVER 就我带 ✗</text>
</svg>`,
      diagramCaption:
        "Notice the crucial difference in the second clause: 所以 comes BEFORE the subject (所以我们…), whereas 就 comes AFTER the subject (我们就…).",
      workedExamples: [
        {
          title: "Using 如果…就… for a Sentosa beach plan",
          problem:
            "Translate into Mandarin: 'If tomorrow is a sunny day, we will go to the beach.'",
          steps: [
            "First clause ('If tomorrow is a sunny day'): **如果明天是晴天，** (*Rúguǒ míngtiān shì qíngtiān,* — remember **是** with the sky noun **晴天**!).",
            "Second clause ('we will go to the beach'): put the subject **我们** *before* **就**, then **去海边**.",
            "Combine smoothly: **如果明天是晴天，我们就去海边。**",
          ],
          answer:
            "如果明天是晴天，我们就去海边。 (Rúguǒ míngtiān shì qíngtiān, wǒmen jiù qù hǎibiān.)",
          yourTurn: {
            question:
              "Complete with the right measure word and noun in Mandarin: 'bring an umbrella' = 带一___雨伞 (write the full 4-character phrase).",
            answer: {
              type: "text",
              accept: ["带一把雨伞", "dài yì bǎ yǔsǎn", "dài yībǎ yǔsǎn"],
              display: "带一把雨伞 (dài yì bǎ yǔsǎn)",
            },
            solution:
              "Umbrellas have a handle you grip with your hand, so the classifier is **把** (*bǎ*): **带一把雨伞** (*dài yì bǎ yǔsǎn*).",
          },
        },
      ],
      keyPoints: [
        "Always write **both halves** of **因为…，所以…** (*because…, therefore…*) for complete Mandarin style.",
        "In **如果…，Subject + 就 + Verb**, **就** is an adverb, so it **must** follow the subject (**我就去**, never *就我去*).",
        "Don't mix up homophones: **带** (*dài* = bring/carry, **带一把雨伞**) vs **待** (*dāi* = stay, **待在家**).",
        "Use **把** (*bǎ*) as the measure word for **雨伞** (*yǔsǎn*, umbrella).",
      ],
      whyItWorks:
        "Why does **所以** sit *before* **我们** while **就** sits *after* **我们**? Because **所以** is a true conjunction ('therefore'), free to open the clause, whereas **就** is an *adverb* ('right then / consequently'), and in Mandarin **all adverbs live strictly between the Subject and the Verb** (just like **也**, **都**, **常常** and **很**)!",
      strategies: [
        "Pair Every Connector (因为↔所以, 如果↔就)",
        "Lock Adverbs Between Subject and Verb (Subject + 就 + Verb)",
      ],
      thinkDeeper:
        "Check the tones in **一把雨伞** (*yì bǎ yǔsǎn*). Three 3rd-tone characters (**把 雨 伞**) stand in a row, preceded by **一**! How does a native speaker pronounce the tones of all four syllables smoothly?",
    },
    {
      id: "reading-weather-reports",
      heading: "Comparing city weather reports (IGCSE 0547 style)",
      discovery: {
        problem:
          "Read this December weather bulletin for four cities:\n- **新加坡**：26°C–32°C，下午下大雨\n- **北京**：−6°C–2°C，晴天，刮大风\n- **伦敦**：4°C–9°C，有雾转小雨\n- **悉尼**：21°C–29°C，多云\n\nWhy are **新加坡** and **悉尼** both warm/hot in December while **北京** is below zero — and how would you say *'Beijing's minimum temperature is 32 degrees lower than Singapore's'*?",
        idea:
          "Singapore sits near the equator (warm & humid all year) while Sydney (**悉尼**) is in the Southern Hemisphere (December is summer!). To compare temperatures in Mandarin, use **气温高 / 低** (*temperature is high / low* — never *大/小*): **北京的最低气温比新加坡低三十二度**!",
      },
      body: `In **Cambridge IGCSE 0547** Reading and Writing papers, multi-city weather tables test whether you can decode forecast shorthand, spot hemisphere or time-of-day details, and give practical advice.

### 1. Reading Multi-City Forecast Bulletins
| City | Forecast Bulletin (中文预报) | Key Vocabulary Decoded |
|---|---|---|
| **新加坡** (*Xīnjiāpō*) | **上午多云，下午有雷阵雨，26–32度，很潮湿。** | Cloudy AM, thundery showers PM, humid |
| **北京** (*Běijīng*) | **晴天，刮大风，零下六度到两度，非常干燥。** | Sunny, strong wind, −6°C to 2°C, very dry |
| **伦敦** (*Lúndūn*) | **早上有雾，下午阴转小雨，4–9度，有点儿冷。** | Foggy early AM, overcast turning to drizzle PM |
| **悉尼** (*Xīní*) | **晴转多云，21–28度，暖和舒服。** | Sunny turning cloudy, warm and comfortable |

### 2. Three IGCSE Weather-Report Power Moves
1. **Temperature ranges use 到 (*dào*, to):** **二十六到三十二度** (*26 to 32°C*) or **零下六度到两度** (*−6°C to 2°C*).
2. **Describe 气温 with 高 (*gāo*, high) and 低 (*dī*, low):**
   - **今天新加坡的最高气温是三十二度。** (*Singapore's max temp today is 32°C.*)
3. **Finish with practical advice using 应该 (*yīnggāi*, should) or 别忘了 (*bié wàng le*, don't forget):**
   - **下午会下雨，出门别忘了带一把雨伞。** (*It'll rain this afternoon; don't forget an umbrella when going out.*)`,
      workedExamples: [
        {
          title: "Writing a complete IGCSE mini-forecast with advice",
          problem:
            "Write a 2-sentence forecast in Mandarin for Singapore tomorrow: 'Tomorrow Singapore's air temperature will be 25 to 31 degrees, sunny in the morning and raining heavily in the afternoon. When you go out, you should bring an umbrella.'",
          steps: [
            "Sentence 1 (temperature + AM/PM weather): **明天新加坡的气温是二十五到三十一度，上午是晴天，下午会下大雨。**",
            "Sentence 2 (practical advice): **出门的时候，你应该带一把雨伞。** (or **出门别忘了带一把雨伞。**).",
          ],
          answer:
            "明天新加坡的气温是二十五到三十一度，上午是晴天，下午会下大雨。出门的时候，你应该带一把雨伞。",
          yourTurn: {
            question:
              "In Mandarin weather reports, what single character joins two conditions when one turns into another (e.g. 'cloudy turning sunny' = 多云___晴)?",
            answer: {
              type: "text",
              accept: ["转", "zhuǎn"],
              display: "转 (zhuǎn)",
            },
            solution:
              "**转** (*zhuǎn*, turning into) links morning and afternoon conditions in compact bulletins: **多云转晴** (*duōyún zhuǎn qíng*).",
          },
        },
      ],
      keyPoints: [
        "Express temperature ranges with **A 到 B 度** (*A dào B dù*), e.g. **零下五度到三度**.",
        "Temperatures (**气温 / 温度**) are **高** (*gāo*, high) or **低** (*dī*, low) — never *大* or *小*.",
        "**转** (*zhuǎn*) means 'turning into' in forecasts: **晴转多云**, **阴转小雨**.",
        "Turn raw weather facts into top-band IGCSE writing by adding **因为…所以…** or **应该带…** advice.",
      ],
      whyItWorks:
        "Broadcast Mandarin values four-syllable rhythm and economy. Phrases like **多云转晴** (*duōyún zhuǎn qíng*) pack a whole day's meteorological shift into just four crisp syllables, letting newsreaders cover thirty provinces in ninety seconds!",
      strategies: [
        "Decode Forecast Shorthand (转 = turning to, 到 = range)",
        "Fact + Feeling + Advice Paragraph Formula",
      ],
      thinkDeeper:
        "Suppose a friend in London texts you: **明天我坐飞机来新加坡，新加坡十二月冷不冷？我要不要带雨伞？** Draft a 3-sentence reply contrasting London and Singapore in December!",
    },
  ],
  learn: {
    flashcards: [
      { front: "天气怎么样？", back: "tiānqì zěnmeyàng? — What is the weather like?" },
      { front: "晴天 vs 阴天", back: "qíngtiān (sunny day, 日 sun) vs yīntiān (overcast day) — both nouns, use 是!" },
      { front: "下雨 / 下大雨 / 下小雨", back: "xià yǔ (to rain) / xià dà yǔ (heavy rain) / xià xiǎo yǔ (light rain) — verb-object, NO 是!" },
      { front: "刮大风 & 打雷", back: "guā dà fēng (strong wind blows) & dǎ léi (to thunder)" },
      { front: "下雪 & 有雾", back: "xià xuě (to snow) & yǒu wù (foggy) — both wear the rain radical 雨!" },
      { front: "气温 / 温度", back: "qìwēn (air temperature) / wēndù (temperature); measured in 度 (dù, °C)" },
      { front: "零下五度", back: "língxià wǔ dù — minus 5 degrees (−5°C)" },
      { front: "热 vs 冷", back: "rè (hot, 灬 fire radical) vs lěng (cold, 冫 ice radical)" },
      { front: "暖和 vs 凉快", back: "nuǎnhuo (pleasantly warm) vs liángkuai (pleasantly cool) — neutral-tone 2nd syllable!" },
      { front: "潮湿 vs 干燥", back: "cháoshī (humid/damp, 氵 water) vs gānzào (dry, 火 fire)" },
      { front: "明天会下雨", back: "Míngtiān huì xià yǔ — It will rain tomorrow (negative: 明天不会下雨)" },
      { front: "今天比昨天凉快", back: "Jīntiān bǐ zuótiān liángkuai — Today is cooler than yesterday (NO 很 after 比!)" },
      { front: "带一把雨伞", back: "dài yì bǎ yǔsǎn — to bring an umbrella (classifier 把 for handles)" },
      { front: "如果明天下雨，我就待在家。", back: "Rúguǒ míngtiān xià yǔ, wǒ jiù dāi zài jiā — If it rains tomorrow, I'll stay home (Subject BEFORE 就!)" },
    ],
    mustKnow: [
      "Can you ask what the weather is like in any city today or tomorrow using 天气怎么样？",
      "Can you distinguish sky nouns that take 是 (晴天, 阴天) from verb-object actions that forbid 是 (下雨, 下雪, 刮风)?",
      "Can you insert 大 or 小 inside separable weather verbs to say 'heavy rain' (下大雨) and 'strong wind' (刮大风)?",
      "Can you read and write positive, zero (零度) and sub-zero temperatures (零下十度)?",
      "Can you describe how Singapore and Beijing feel using 很/太…了 with 热, 冷, 暖和, 凉快, 潮湿 and 舒服 (without 是)?",
      "Can you contrast yesterday's weather (下雨了 / 没下雨) with tomorrow's forecast (会下雨 / 不会下雨)?",
      "Can you compare two days or cities using A 比 B + Adjective without sneaking 很 in?",
      "Can you link weather to plans using 因为…所以… and 如果…，Subject + 就…?",
      "Can you use the handle classifier 把 correctly in 一把雨伞?",
    ],
    misconceptions: [
      {
        wrong: "今天新加坡是热。 (Putting 是 before an adjective)",
        right: "今天新加坡很热 / 太热了！ (Link Mandarin adjectives with 很, 非常 or 太…了, never 是.)",
      },
      {
        wrong: "今天是下雨。 (Treating 下雨 as a noun/adjective after 是)",
        right: "今天下雨。 / 今天会下雨。 (下雨 is a verb-object action 'falls rain' — no 是 needed!)",
      },
      {
        wrong: "今天大下雨 / 大刮风。 (Putting 大 before the verb)",
        right: "今天下大雨 / 刮大风。 (大 modifies the noun 雨 or 风 inside the verb-object pair.)",
      },
      {
        wrong: "今天比昨天很热。 (Using 很 inside a 比 comparison)",
        right: "今天比昨天热。 / 今天比昨天热得多。 (Never put 很 before the adjective in a 比 sentence!)",
      },
      {
        wrong: "昨天没下雨了。 (Keeping 了 in a negated past sentence)",
        right: "昨天没下雨。 (Negate past events with 没(有) and drop 了 completely.)",
      },
      {
        wrong: "如果明天下雨，就我待在家。 (Putting 就 before the subject)",
        right: "如果明天下雨，我就待在家。 (就 is an adverb and must stand AFTER the subject 我!)",
      },
    ],
    examMistakes: [
      "Confusing 晴天 (qíngtiān, sunny — 日 sun radical) with 请 (qǐng, please — 讠 speech radical) or 情 (qíng, feeling — 忄 heart radical) in reading & writing.",
      "Writing 3-dot water 氵 instead of 2-dot ice 冫 on 冷 (lěng) and 凉 (liáng).",
      "Forgetting the second half of paired connectors (writing 因为… without 所以…, or misplacing 就 before the subject in 如果…就…).",
      "Using 一个雨伞 instead of the required handle measure word 一把雨伞 (yì bǎ yǔsǎn).",
      "Mixing up 带 (dài = bring/carry, 带雨伞) with 戴 (dài = wear accessories) or 待 (dāi = stay, 待在家).",
      "Missing the Southern Hemisphere trap in IGCSE reading tables: 悉尼 (Sydney) in 十二月 (December) is 暖和/热, whereas 北京 and 伦敦 are 冷!",
      "Describing 气温 (temperature) as *大/小* instead of 高/低 (最高气温 / 最低气温).",
    ],
    mnemonics: [
      {
        topic: "2, 3, 4 Radical Temperature Dots (冫 vs 氵 vs 灬)",
        device: "2 = Ice crystals (冫冷), 3 = Liquid drops (氵潮湿), 4 = Roaring flames (灬热)!",
        explanation:
          "As the number of radical strokes rises from 2 to 3 to 4, the physical temperature rises from freezing ice (冷/凉) to liquid moisture (温/潮湿) to blazing heat (热)!",
      },
      {
        topic: "晴 (Sunny) vs 阴 (Overcast)",
        device: "Sun 日 on the left = 晴 (clear sky); Moon/shade 月 on the right = 阴 (sun hidden)!",
        explanation:
          "Spot the sun radical 日 in 晴天 and you will never mix it up with 请 (speech 讠) or 眼睛 (eye 目).",
      },
      {
        topic: "Rain Roof 雨 Family (雪, 雷, 雾, 零)",
        device: "Four drops under a wide cloud roof = sky weather!",
        explanation:
          "Whenever 雨 sits squashed at the top of a character, think of things falling or forming in the clouds: 雪 (snow), 雷 (thunder), 雾 (fog), and 零 (zero/raindrops).",
      },
      {
        topic: "Subject BEFORE 就 in 如果…就…",
        device: "Person first, THEN jump (就) into action: 我就去!",
        explanation:
          "Because 就 is an adverb, the person (我 / 我们 / 你) always steps up before 就.",
      },
    ],
    realWorld: [
      {
        title: "Singapore's Sumatra Squalls & Afternoon 雷阵雨",
        detail:
          "If you check the NEA myENV app in Singapore, you'll constantly see 雷阵雨 (léizhènyǔ, thundery showers) and 潮湿 (cháoshī, 80%+ humidity). Knowing 一把雨伞 is survival skill walking from Redhill or Buona Vista MRT!",
        emoji: "⛈️",
      },
      {
        title: "Singapore's 'Indoor Winter': 地铁空调太冷了！",
        detail:
          "Outside on Orchard Road (乌节路) it's 三十二度 (32°C), yet cinemas and MRT trains blast air-con at 二十度! Locals joke Singapore actually has two climates every day: 外面太热了 and 里面太冷了.",
        emoji: "🚇",
      },
      {
        title: "CCTV 新闻联播 Weather Map & 转 Shorthand",
        detail:
          "Every evening at 7:30 pm across China, millions watch the national 天气预报 map sweep from 哈尔滨 (零下二十度，下大雪) down to 海南 (二十八度，多云转晴).",
        emoji: "📺",
      },
      {
        title: "Harbin International Ice & Snow Festival (哈尔滨冰雪大世界)",
        detail:
          "Because Harbin stays below 零下十度 for months, sculptors carve full-sized glowing castles out of frozen Songhua River ice blocks that never melt until March!",
        emoji: "🧊",
      },
      {
        title: "Where English Got the Word 'Typhoon' (台风 táifēng)",
        detail:
          "Sailors in the South China Sea encountered fierce tropical cyclones called 大风 ('daai fung' in Cantonese) / 台风 (táifēng in Mandarin), blending with Greek 'typhon' to give English 'typhoon'!",
        emoji: "🌀",
      },
    ],
    videos: [
      {
        title: "Talking About Weather in Mandarin Chinese (天气怎么样)",
        channel: "ChinesePod / Everyday Chinese",
        url: "https://www.youtube.com/results?search_query=mandarin+chinese+weather+tianqi+zenmeyang+igcse",
      },
      {
        title: "CCTV Weather Forecast Listening Practice (中文天气预报)",
        channel: "Mandarin Click / Slow Chinese",
        url: "https://www.youtube.com/results?search_query=slow+chinese+weather+forecast+tianqi+yubao",
      },
      {
        title: "Using 因为…所以… and 如果…就… in Chinese",
        channel: "Grace Mandarin Chinese",
        url: "https://www.youtube.com/results?search_query=chinese+grammar+yinwei+suoyi+ruguo+jiu",
      },
      {
        title: "Chinese Comparisons with 比 (bǐ) Without Mistakes",
        channel: "Yoyo Chinese",
        url: "https://www.youtube.com/results?search_query=mandarin+bi+comparison+weather+grammar",
      },
    ],
    formulas: [
      {
        name: "Asking About Weather",
        formula: "[Time] + [Place] + (的)天气怎么样？",
        note: "今天新加坡的天气怎么样？ Jīntiān Xīnjiāpō de tiānqì zěnmeyàng?",
      },
      {
        name: "Separable Weather Verb-Object",
        formula: "下 + (大 / 小) + 雨 / 雪  ·  刮 + (大) + 风",
        note: "下午会下大雨。 Xiàwǔ huì xià dà yǔ. (NEVER add 是!)",
      },
      {
        name: "Sub-Zero & Range Temperatures",
        formula: "零下 + Num + 度 (−N°C)  ·  A 到 B 度 (A–B°C)",
        note: "北京零下五度到三度。 Běijīng língxià wǔ dù dào sān dù.",
      },
      {
        name: "Weather Comparison (比)",
        formula: "A + 比 + B + Adjective (+ 一点儿 / 得多)",
        note: "今天比昨天凉快一点儿。 (NEVER put 很 before the adjective!)",
      },
      {
        name: "Cause & Conditional Plans",
        formula: "因为 + Weather，所以 + Plan  ·  如果 + Weather，Subject + 就 + Verb",
        note: "如果明天下雨，我就带一把雨伞。",
      },
    ],
  },
};
