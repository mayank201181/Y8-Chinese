import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "time-measure-words",
  title: "时间与量词 — Dates, Time & Measure Words",
  strand: "Foundations",
  icon: "📅",
  summary: "Master Mandarin's effortless number-based calendar, the 二 vs 两 rule, shape-based classifiers, and point-in-time vs duration syntax.",
  intro:
    "English makes learners memorise 12 Latin month names (*January… December*) and 7 Norse/Roman weekday names (*Monday… Sunday*), then scrambles dates between British DD/MM/YYYY and American MM/DD/YYYY. Mandarin sweeps all of that away with pure logic: months are simply **Months 1 to 12**, weekdays are **Days 1 to 6 + Sky/Sun Day**, and every date zooms cleanly from **biggest unit to smallest**. Pair that calendar superpower with Mandarin's visual **measure words (**量词** *liàngcí*)** and you can count, point out, and time anything in Singapore or China!",
  guide: [
    {
      id: "dates-days",
      heading: "Years, months, dates & days: 今天几月几号？星期几？",
      discovery: {
        problem:
          "Singapore's National Day falls on **Sunday, 9th August 2026**. In British English we write *Sunday, 9 August 2026* (weekday → day → month → year).\n\nNow look at how Mandarin writes the exact same date:\n- **二〇二六年八月九日星期日** (*Èr líng èr liù nián bā yuè jiǔ rì xīngqīrì*)\n\nWhat rule governs the order of all four units, and how are **2026**, **August**, and **Sunday** formed?",
        idea:
          "Mandarin zooms in strictly from **LARGEST unit to SMALLEST**: **Year (**年**) → Month (**月**) → Date (**号 / 日**) → Weekday (**星期**)**! Even better: years are read digit-by-digit (**二〇二六年**), August is simply Month 8 (**八月**), and weekdays run **星期一** to **星期六** (Days 1–6) plus **星期日 / 星期天** for Sunday!",
      },
      body:
        "### 1. Years, Months & Dates (Big → Small)\n\n- **Years (**年** *nián*):** Read digit by digit using **零 / 〇** (*líng*) for zero:\n  - 2026 = **二〇二六年** (*èr líng èr liù nián*); 2008 = **二〇〇八年** (*èr líng líng bā nián*).\n- **Months (**月** *yuè*):** Number 1–12 + **月**: **一月** (Jan), **二月** (Feb — ALWAYS **二**, never ***两月***!), … **十二月** (Dec).\n- **Dates (**号** *hào* spoken / **日** *rì* formal written):** Number 1–31 + **号 / 日**:\n  - **今天几月几号？** (*Jīntiān jǐ yuè jǐ hào?*) — What is today's date?\n  - **今天是十一月十七号。** (*Jīntiān shì shíyī yuè shíqī hào.*) — Today is 17th November.\n\n### 2. Days of the Week & Relative Days\n\n| Mandarin | Pinyin | Colloquial SG / Short | English |\n|---|---|---|---|\n| **星期一 … 星期六** | *xīngqīyī … xīngqīliù* | **礼拜一 / 周一 … 周六** | Monday (Day 1) … Saturday (Day 6) |\n| **星期天 / 星期日** | *xīngqītiān / xīngqīrì* | **礼拜天 / 周日** | Sunday (NEVER ***星期七***!) |\n| **前天 → 昨天 → 今天 → 明天 → 后天** | *qiántiān → zuótiān → jīntiān → míngtiān → hòutiān* | — | Day before yesterday → Yesterday → Today → Tomorrow → Day after tomorrow |\n| **去年 → 今年 → 明年** | *qùnián → jīnnián → míngnián* | — | Last year → This year → Next year |",
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mandarin big-to-small date funnel from Year to Month to Date to Weekday, plus five-day timeline">' +
        '<rect x="10" y="10" width="620" height="240" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="36" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Mandarin Calendar Order: Always Biggest → Smallest!</text>' +
        '<rect x="28" y="54" width="142" height="72" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="2"/>' +
        '<text x="99" y="82" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="bold" fill="#c81e1e">二〇二六年</text>' +
        '<text x="99" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991b1b">1. Year (digit by digit)</text>' +
        '<text x="181" y="95" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">→</text>' +
        '<rect x="192" y="54" width="122" height="72" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>' +
        '<text x="253" y="82" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="bold" fill="#b45309">十一月</text>' +
        '<text x="253" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400e">2. Month (11 = Nov)</text>' +
        '<text x="325" y="95" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">→</text>' +
        '<rect x="336" y="54" width="122" height="72" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>' +
        '<text x="397" y="82" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="bold" fill="#15803d">十七号</text>' +
        '<text x="397" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#166534">3. Date (spoken 号)</text>' +
        '<text x="469" y="95" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">→</text>' +
        '<rect x="480" y="54" width="132" height="72" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>' +
        '<text x="546" y="82" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="bold" fill="#0369a1">星期二</text>' +
        '<text x="546" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#075985">4. Weekday (Tue)</text>' +
        '<line x1="56" y1="190" x2="584" y2="190" stroke="#94a3b8" stroke-width="3"/>' +
        '<circle cx="88" cy="190" r="8" fill="#64748b"/><text x="88" y="172" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">前天 (-2d)</text><text x="88" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">qiántiān</text>' +
        '<circle cx="204" cy="190" r="8" fill="#0284c7"/><text x="204" y="172" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1">昨天 (-1d)</text><text x="204" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0369a1">zuótiān</text>' +
        '<circle cx="320" cy="190" r="10" fill="#c81e1e"/><text x="320" y="170" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#c81e1e">今天 (Today)</text><text x="320" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c81e1e">jīntiān</text>' +
        '<circle cx="436" cy="190" r="8" fill="#15803d"/><text x="436" y="172" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">明天 (+1d)</text><text x="436" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803d">míngtiān</text>' +
        '<circle cx="552" cy="190" r="8" fill="#b45309"/><text x="552" y="172" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">后天 (+2d)</text><text x="552" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#b45309">hòutiān</text>' +
        "</svg>",
      diagramCaption: "Full dates zoom from Year → Month → Day → Weekday, while the 5-day timeline steps symmetrically around 今天.",
      workedExamples: [
        {
          title: "Writing full dates and solving calendar-shift puzzles",
          problem:
            "If **昨天是五月三十一日星期六** (*Yesterday was Saturday, 31st May*), what are **today's month, date, and day of the week** in Mandarin?",
          steps: [
            "May (**五月**) has 31 days, so the day after 31st May rolls into **1st June** (**六月一号** or **六月一日**).",
            "The day after Saturday (**星期六**) is **Sunday** — which in Mandarin is **星期天** or **星期日** (NEVER ***星期七***!).",
            "Combine in big-to-small order: **今天是六月一号星期天。**",
          ],
          answer: "今天是六月一号星期天。 (Jīntiān shì liù yuè yī hào xīngqītiān.)",
          yourTurn: {
            question: "Write '9th August' (Singapore's National Day) in Mandarin using 号 or 日:",
            answer: {
              type: "text",
              accept: [
                "八月九号",
                "八月九日",
                "bā yuè jiǔ hào",
                "bā yuè jiǔ rì",
              ],
              display: "八月九日 / 八月九号 (bā yuè jiǔ rì / hào)",
            },
            solution: "Month first (August = 八月) + Date second (9th = 九号 / 九日) = 八月九日.",
          },
        },
      ],
      keyPoints: [
        "Dates ALWAYS run **Year (**年**) → Month (**月**) → Date (**号 / 日**) → Weekday (**星期**)**.",
        "Years are read **digit by digit**: 2026 = **二〇二六年** (*èr líng èr liù nián*).",
        "**星期一** starts on **Monday** (Day 1), and Sunday is **星期天** or **星期日** — NEVER ***星期七***!",
        "Never say ***这个年*** for 'this year' — use **今年** (and **去年** = last year, **明年** = next year).",
      ],
      whyItWorks:
        "Notice how Mandarin's ISO-style `YYYY-MM-DD` date format matches computer sorting! Even better, contrast **八月** (*bā yuè*, August — no **个**) with **八个月** (*bā gè yuè*, eight months — with **个**): the presence or absence of **个** cleanly separates a calendar name from a quantity of months!",
      strategies: [
        "Sunday Alarm Bell: Whenever a calendar puzzle lands on Day 7, immediately write **星期天 / 星期日**, never **七**.",
        "Count on Knuckles for Month Ends: Check 30-day vs 31-day months carefully in **昨天 / 今天 / 明天 / 后天** listening traps!",
      ],
      thinkDeeper:
        "In Singapore, people very often say **礼拜天** (*lǐbàitiān*) for Sunday and **礼拜一** (*lǐbàiyī*) for Monday. **礼拜** literally means 'worship / bow respectfully'. How did that word come to mean 'week' in Chinese?",
    },
    {
      id: "er-vs-liang",
      heading: "Numbers & the 二 (èr) vs 两 (liǎng) rule",
      discovery: {
        problem:
          "Why do native Mandarin speakers say:\n- **二月二十二号星期二** (*Èryuè èrshí'èr hào xīngqī'èr* — Tuesday 22nd February) — using **二** FOUR times!\n- **两个人买了两本书** (*Liǎng gè rén mǎi le liǎng běn shū* — Two people bought two books) — using **两** TWICE!\n- **二十二个人** (*Èrshí'èr gè rén* — 22 people) — going back to **二** even right before **个**!\n\nCan you crack the exact rule deciding between **二** (*èr*) and **两** (*liǎng*)?",
        idea:
          "Use **两** (*liǎng*) when **standalone quantity '2'** sits directly in front of a **measure word** (**两个人, 两本书, 两点, 两个小时**) or **千** (**两千**). Use **二** (*èr*) everywhere else: counting/math, ordinals (**第二**), calendar dates (**二月, 二号, 星期二**), phone/bus digits, and inside ANY multi-digit number ending in 2 (**十二, 二十, 二十二个人**)!",
      },
      body:
        "### 1. Counting from 0 to 9,999\n\n- **11–19:** **十 + digit** → **十二** (12), **十九** (19). *(Never write 一十二 for standalone 12!)*\n- **20–99:** **digit + 十 (+ digit)** → **二十** (20), **三十五** (35), **九十九** (99).\n- **100+ (**百** *bǎi*) & 1,000+ (**千** *qiān*):**\n  - Always include **一** before 100 or 1,000: **一百** (100), **一千** (1,000).\n  - If there is an internal zero gap (like 105), say **零** (*líng*) once: **一百零五** (*yìbǎi líng wǔ*).\n  - Watch **110 vs 101**: **一百一十** (110) vs **一百零一** (101)!\n\n### 2. The Complete **二** (*èr*) vs **两** (*liǎng*) Showdown\n\n| Situation | Winner | Authentic Examples |\n|---|---|---|\n| **Standalone 2 + Measure Word** | **两** (*liǎng*) | **两个人**, **两只狗**, **两杯水**, **两点** (2:00) |\n| **Before 千 (1,000) [and often 百]** | **两** (*liǎng*) | **两千** (2,000), **两百 / 二百** (200) |\n| **Multi-digit numbers (12, 20, 22…)** | **二** (*èr*) | **十二个人** (12 people), **二十本书** (20 books) |\n| **Ordinals with 第 (*dì*)** | **二** (*èr*) | **第二** (2nd), **第二天** (the 2nd/next day) |\n| **Dates, Months, Weekdays & Floors** | **二** (*èr*) | **二月** (Feb), **二号** (2nd), **星期二** (Tue), **二楼** (2nd floor) |\n| **Phone / Bus / Room Numbers** | **二** (*èr*) | Bus 22 = **二二路**, Room 202 = **二〇二号** |",
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision flowchart contrasting Er for digits, dates, ordinals and multi-digit 12 or 22 versus Liang for standalone 2 before a measure word">' +
        '<rect x="10" y="10" width="620" height="240" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<rect x="180" y="24" width="280" height="48" rx="12" fill="#1e293b"/>' +
        '<text x="320" y="53" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#ffffff">Need to say "2" in Mandarin?</text>' +
        '<line x1="250" y1="72" x2="155" y2="108" stroke="#15803d" stroke-width="2.5"/>' +
        '<line x1="390" y1="72" x2="485" y2="108" stroke="#c81e1e" stroke-width="2.5"/>' +
        '<rect x="26" y="108" width="260" height="126" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>' +
        '<text x="156" y="134" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#15803d">Use 两 (liǎng)</text>' +
        '<text x="156" y="156" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534">Standalone "2" + Measure Word / 千</text>' +
        '<text x="156" y="180" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">• 两个人 · 两本书 · 两只猫</text>' +
        '<text x="156" y="202" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">• 两点 (2:00) · 两个小时</text>' +
        '<text x="156" y="222" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#15803d">• 两千 (2,000) · 两百 (200)</text>' +
        '<rect x="354" y="108" width="260" height="126" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="2"/>' +
        '<text x="484" y="134" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#c81e1e">Use 二 (èr)</text>' +
        '<text x="484" y="156" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#991b1b">Digits, Dates, Ordinals &amp; 12 / 20 / 22</text>' +
        '<text x="484" y="180" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">• 二月 · 二号 · 星期二</text>' +
        '<text x="484" y="202" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">• 第二 (2nd) · 二楼 (Floor 2)</text>' +
        '<text x="484" y="222" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#c81e1e">• 十二个人 · 二十二本书</text>' +
        "</svg>",
      diagramCaption: "Ask one question: is it standalone '2' right before a classifier/千 (→ 两), or a digit/date/ordinal/multi-digit number (→ 二)?",
      workedExamples: [
        {
          title: "Choosing 二 vs 两 in tricky pairs",
          problem:
            "Translate both phrases carefully: **(a) February vs two months** and **(b) the 2nd book vs 2 books**.",
          steps: [
            "In (a), 'February' is Month #2 (an ordinal calendar label) → **二月** (*èryuè*). 'Two months' counts a quantity using the measure word **个** → **两个月** (*liǎng gè yuè*).",
            "In (b), 'the 2nd book' uses the ordinal prefix **第** → **第二本书** (*dì-èr běn shū*). '2 books' is standalone 2 + classifier **本** → **两本书** (*liǎng běn shū*).",
          ],
          answer: "(a) 二月 vs 两个月; (b) 第二本书 vs 两本书",
          yourTurn: {
            question: "How do you write '22 people' in Mandarin characters?",
            answer: {
              type: "text",
              accept: [
                "二十二个人",
                "èrshí'èr gè rén",
                "èrshí èr gè rén",
                "èrshí'èr ge rén",
                "èrshí èr ge rén",
              ],
              display: "二十二个人 (èrshí'èr gè rén)",
            },
            solution: "Multi-digit numbers ending in 2 ALWAYS keep 二 even right before 个: 二十二个人 (never *二十两个人*!).",
          },
        },
      ],
      keyPoints: [
        "Standalone **2 + Measure Word** is ALWAYS **两** (**两个人, 两杯茶, 两点**).",
        "Multi-digit numbers ending in 2 ALWAYS keep **二** (**十二个人, 二十二本书** — NEVER ***十两*** or ***二十两***!).",
        "Ordinals with **第** ALWAYS take **二**: **第二** (*dì-èr*, 2nd), **第二个星期** (the 2nd week).",
        "Contrast **二月** (February) vs **两个月** (two months), and **星期二** (Tuesday) vs **两个星期** (two weeks)!",
      ],
      whyItWorks:
        "Historically, **两** (*liǎng*) meant 'a matched pair / both sides of a balance scale' (look at the two symmetrical figures inside **两**!), so it naturally attached to counted objects with classifiers, while **二** (*èr* — literally two horizontal tally strokes!) remained the pure mathematical and serial numeral.",
      strategies: [
        "The Standalone-2 Test: Circle the '2'. If it is part of 12, 20, 22, a date, or after **第**, pick **二**; if it stands alone counting a noun with a classifier, pick **两**!",
        "Zero-Gap Check: In 3-digit numbers like 205, remember one **零** in the middle: **两百零五**.",
      ],
      thinkDeeper:
        "Why do Mandarin speakers say **两点** (*liǎng diǎn*) for 2:00 on the clock, yet **二点五** (*èr diǎn wǔ*) for the decimal `2.5`? How does the meaning of **点** change between those two expressions?",
    },
    {
      id: "core-measure-words",
      heading: "Essential classifiers: 个, 口, 本, 杯, 碗, 盘",
      discovery: {
        problem:
          "In English we say *'three sheets of paper'*, *'two bowls of rice'*, and *'a cup of tea'*, yet we say *'three books'* and *'two friends'* with nothing in between.\n\nIn Mandarin, **EVERY noun** acts like *paper* or *tea* when counted: **Number + Measure Word + Noun**!\nMatch these four phrases to their logic: **三个人**, **三本书**, **一杯茶**, **一碗米饭**.",
        idea:
          "Mandarin never glues a number straight onto a noun (***三书*** ✗). Instead, a **measure word (**量词** *liàngcí*)** bridges the number and the noun, grouping objects by **human/general unit (**个**)**, **bound spine (**本**)**, or **container (**杯, 碗, 盘, 瓶**)**!",
      },
      body:
        "### 1. Your Six Core Everyday Classifiers\n\n| Classifier | Pinyin | Used For | Classic Examples |\n|---|---|---|---|\n| **个** | *gè* | People, fruits, weeks, hours, general items | **一个人**, **两个苹果**, **三个星期** |\n| **口** | *kǒu* | Total family members in a household | **我家有四口人** (*sì kǒu rén*) |\n| **本** | *běn* | Bound volumes with spines (books, dictionaries, notebooks) | **一本书**, **两本词典**, **三本练习本** |\n| **杯** | *bēi* | Cups, mugs & glasses of drinks | **一杯绿茶**, **两杯冰水**, **一杯咖啡** |\n| **碗** | *wǎn* | Bowls of rice, noodles, soup or porridge | **一碗米饭**, **两碗牛肉面**, **一碗汤** |\n| **盘** | *pán* | Plates / flat dishes of food | **一盘鸡饭** (a plate of chicken rice!), **两盘饺子** |\n\n> **Bonus Container:** **瓶** (*píng*) = bottle of (**一瓶水**, **两瓶牛奶**).\n\n### 2. Radical Clues Inside Container Classifiers\n- **本** (*běn*): **木** (tree/wood) with a mark at the root — books are bound from wood pulp!\n- **杯** (*bēi*): **木** (wood) + **不** (*bù*, sound clue) — ancient cups were carved from wood.\n- **碗** (*wǎn*): **石** (stone/ceramic) on the left — porcelain/stoneware bowls.\n- **盘** (*pán*): **皿** (*mǐn*, shallow dish) at the bottom — a serving plate!",
      workedExamples: [
        {
          title: "Ordering lunch at a Singapore hawker centre with classifiers",
          problem:
            "Translate into Mandarin: 'I would like one plate of chicken rice, one bowl of soup, and two cups of iced tea.' (Use **我要…**, **鸡饭**, **汤**, and **冰茶**.)",
          steps: [
            "Chicken rice comes on a flat plate → **一盘鸡饭** (*yì pán jīfàn*).",
            "Soup comes in a bowl → **一碗汤** (*yì wǎn tāng*).",
            "Two cups of iced tea use **两** + **杯** → **两杯冰茶** (*liǎng bēi bīngchá*).",
          ],
          answer: "我要一盘鸡饭、一碗汤和两杯冰茶。 (Wǒ yào yì pán jīfàn, yì wǎn tāng hé liǎng bēi bīngchá.)",
          yourTurn: {
            question: "Translate into Mandarin: 'three Chinese books' (use 中文书):",
            answer: {
              type: "text",
              accept: [
                "三本中文书",
                "sān běn Zhōngwén shū",
              ],
              display: "三本中文书 (sān běn Zhōngwén shū)",
            },
            solution: "Books have bound spines, so use 本 (běn): 三本中文书 (sān běn Zhōngwén shū).",
          },
        },
      ],
      keyPoints: [
        "NEVER put a number directly before a noun without a measure word (***三书*** ✗ → **三本书** ✓).",
        "Use **本** (*běn*) for bound books, dictionaries (**词典**), and magazines — NEVER for a single flat sheet of paper!",
        "Match food & drink containers accurately: **杯** (cup/glass), **碗** (bowl), **盘** (plate), **瓶** (bottle).",
        "Remember **一** tone sandhi: **一个** (*yí gè* — before 4th tone) vs **一杯 / 一本 / 一碗 / 一盘** (*yì bēi / yì běn / yì wǎn / yì pán* — before 1st/2nd/3rd tones).",
      ],
      whyItWorks:
        "Linguists classify Mandarin nouns as *mass-like* until packaged by a classifier — very much like English *'two loaves of bread'* or *'three heads of cattle'*. Classifiers also rescue spoken Mandarin from homophones: hearing **yì běn shū** immediately signals 'one book' (**一本书**) rather than 'one tree' (**一棵树** *yì kē shù*)!",
      strategies: [
        "Picture the Container or Spine: Before choosing a measure word, visualise holding the item — bound spine (**本**), cup (**杯**), deep bowl (**碗**), or flat plate (**盘**).",
        "Fallback vs Precision: In speaking emergencies **个** is understood, but IGCSE Reading & Writing specifically rewards accurate classifiers!",
      ],
      thinkDeeper:
        "Notice how changing the classifier on the SAME noun changes the picture: what is the difference between **一杯水** (*yì bēi shuǐ*) and **一瓶水** (*yì píng shuǐ*), or **一碗饺子** (*yì wǎn jiǎozi*) and **一盘饺子** (*yì pán jiǎozi*)?",
    },
    {
      id: "clothing-animal-classifiers",
      heading: "Shape & pair classifiers: 件, 条, 双, 只, 张",
      discovery: {
        problem:
          "Here is a puzzle that surprises almost every English speaker:\n- Why do **trousers** (**裤子**), a **fish** (**鱼**), a **river** (**河**), and **Orchard Road** (**路**) ALL share the exact same Mandarin measure word **条** (*tiáo*)?\n- Meanwhile, why do **shoes** (**鞋**) and **chopsticks** (**筷子**) take **双** (*shuāng*), while **trousers** CANNOT take **双**?",
        idea:
          "Mandarin classifiers group objects by **3D visual shape**, NOT by English idioms! **条** (*tiáo*) classifies anything **long, narrow, and flexible/winding** (trousers, skirts, fish, roads, rivers). And while English calls trousers 'a *pair* of trousers', Mandarin sees **one connected garment** (**一条裤子**), reserving **双** (*shuāng* — two hands **又+又**) strictly for **two separate matching items** like two shoes (**一双鞋**) or two chopsticks (**一双筷子**)!",
      },
      body:
        "### 1. Five Visual Shape & Pair Classifiers\n\n| Classifier | Pinyin | Visual Shape / Rule | Must-Know Nouns |\n|---|---|---|---|\n| **件** | *jiàn* | Upper-body tops, coats, jumpers & abstract matters | **一件衬衫** (shirt), **一件毛衣** (jumper), **一件外套** (coat) |\n| **条** | *tiáo* | Long, narrow, ribbon-like or winding things | **一条裤子** (trousers), **一条裙子** (skirt), **一条鱼** (fish), **一条路** (road) |\n| **双** | *shuāng* | Matched pairs of two separate objects (**又+又**) | **一双鞋** (shoes), **一双袜子** (socks), **一双筷子** (chopsticks) |\n| **只** | *zhī* | Small animals, birds, OR *one single item* from a pair! | **一只狗**, **两只鸟** (birds), **一只猫**, **一只袜子** (one odd sock!) |\n| **张** | *zhāng* | Flat surfaces, sheets, cards & furniture tops | **一张纸** (paper), **两张票** (tickets), **一张桌子** (table), **一张床** (bed) |",
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five shape cards illustrating Jian for tops, Tiao for long items like trousers and fish, Shuang for pairs, Zhi for animals, and Zhang for flat surfaces">' +
        '<rect x="10" y="10" width="620" height="240" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="36" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">See Like a Mandarin Speaker: Shape &amp; Pair Classifiers</text>' +
        '<rect x="22" y="54" width="112" height="178" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>' +
        '<text x="78" y="82" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="#c81e1e">件</text>' +
        '<text x="78" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#991b1b">jiàn · Tops</text>' +
        '<text x="78" y="132" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">衬衫 (shirt)</text>' +
        '<text x="78" y="154" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">外套 (coat)</text>' +
        '<text x="78" y="176" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">毛衣 (jumper)</text>' +
        '<rect x="144" y="54" width="116" height="178" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>' +
        '<text x="202" y="82" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="#b45309">条</text>' +
        '<text x="202" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e">tiáo · Long</text>' +
        '<text x="202" y="132" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">裤子 (trousers!)</text>' +
        '<text x="202" y="154" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">裙子 (skirt)</text>' +
        '<text x="202" y="176" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">鱼 (fish) · 路</text>' +
        '<rect x="270" y="54" width="112" height="178" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>' +
        '<text x="326" y="82" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="#15803d">双</text>' +
        '<text x="326" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534">shuāng · Pair</text>' +
        '<text x="326" y="132" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">鞋 (shoes)</text>' +
        '<text x="326" y="154" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">筷子 (chopsticks)</text>' +
        '<text x="326" y="176" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">袜子 (socks)</text>' +
        '<rect x="392" y="54" width="110" height="178" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>' +
        '<text x="447" y="82" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="#0369a1">只</text>' +
        '<text x="447" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#075985">zhī · Critters</text>' +
        '<text x="447" y="132" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">狗 (dog)</text>' +
        '<text x="447" y="154" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">猫 (cat)</text>' +
        '<text x="447" y="176" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">鸟 (bird)</text>' +
        '<rect x="512" y="54" width="106" height="178" rx="12" fill="#f3e8ff" stroke="#7e22ce" stroke-width="1.5"/>' +
        '<text x="565" y="82" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="bold" fill="#7e22ce">张</text>' +
        '<text x="565" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6b21a8">zhāng · Flat</text>' +
        '<text x="565" y="132" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">票 (ticket)</text>' +
        '<text x="565" y="154" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">桌子 (table)</text>' +
        '<text x="565" y="176" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">纸 · 照片</text>' +
        "</svg>",
      diagramCaption: "Group outfits, animals, and objects by 3D shape: tops (件), long ribbons (条), separate pairs (双), critters (只), flat tops/sheets (张).",
      workedExamples: [
        {
          title: "Packing a suitcase with accurate clothing & item classifiers",
          problem:
            "Fill in the right classifiers for: **(a) one shirt**, **(b) two pairs of trousers**, **(c) one pair of trainers**, and **(d) two cinema tickets**.",
          steps: [
            "(a) A shirt (**衬衫**) is an upper-body top → **一件衬衫** (*yí jiàn chènshān*).",
            "(b) Trousers (**裤子**) are long garments → **两条裤子** (*liǎng tiáo kùzi* — NEVER ***两双裤子***!).",
            "(c) Trainers (**运动鞋**) come in two separate matching shoes → **一双运动鞋** (*yì shuāng yùndòngxié*).",
            "(d) Cinema tickets (**电影票**) are flat slips of card → **两张电影票** (*liǎng zhāng diànyǐngpiào*).",
          ],
          answer: "(a) 一件衬衫; (b) 两条裤子; (c) 一双运动鞋; (d) 两张电影票",
          yourTurn: {
            question: "Translate into Mandarin: 'two fish' (use 鱼 yú):",
            answer: {
              type: "text",
              accept: [
                "两条鱼",
                "liǎng tiáo yú",
              ],
              display: "两条鱼 (liǎng tiáo yú)",
            },
            solution: "Standalone 2 before a classifier uses 两, and fish take the long/flexible classifier 条: 两条鱼.",
          },
        },
      ],
      keyPoints: [
        "Outfit split: **tops** take **件** (**一件衬衫**), **bottoms** take **条** (**一条裤子, 一条裙子**), and **footwear/socks** take **双** (**一双鞋**).",
        "NEVER translate English 'a pair of trousers' with **双** — trousers are ONE connected piece of cloth (**一条裤子**)!",
        "Fish take **条** (**两条鱼**), whereas cats, dogs, and birds take **只** (**两只小鸟**).",
        "Flat surfaces — whether thin (**一张票, 一张纸**) or furniture with a flat top (**一张桌子, 一张床**) — all take **张**!",
      ],
      whyItWorks:
        "Look at the character **双** (*shuāng*): it literally places two right-hand pictographs (**又 + 又**) side by side! Once you see those two separate hands, you will never accidentally use **双** for trousers (which can't be pulled apart into two separate halves without scissors!).",
      strategies: [
        "Head-to-Toe Outfit Scan: Top = **件**, Legs = **条**, Feet = **双**!",
        "Can-You-Separate-Them Test: Only use **双** if the two pieces are physically separate (two shoes, two chopsticks, two socks).",
      ],
      thinkDeeper:
        "What happens if your puppy hides ONE of your trainers under the sofa and you are holding the single remaining shoe? Which classifier replaces **双** in **一___鞋** (*one single shoe*)?",
    },
    {
      id: "demonstratives-duration",
      heading: "这/那/哪 + Measure Word & time durations",
      discovery: {
        problem:
          "Compare two almost identical-looking sentences about studying Chinese:\n1. **我上午八点上中文课。** (*Wǒ shàngwǔ bā diǎn shàng Zhōngwén kè.* — I have Chinese class **at 8:00 am**.)\n2. **我每天学一个小时中文。** (*Wǒ měitiān xué yí gè xiǎoshí Zhōngwén.* — I study Chinese **for one hour** every day.)\n\nWhere does a **point in time** (*at 8:00*) sit relative to the verb, and where does a **time duration** (*for one hour*) sit?",
        idea:
          "A **point in time** (*when* something happens: **上午八点**, **星期二**) ALWAYS goes **BEFORE the verb**! A **time duration** (*how long* an action lasts: **一个小时**, **二十分钟**, **三天**) goes **AFTER the verb** (right between the verb and its object, e.g. **学一个小时中文** or **学中文学了一个小时**)!",
      },
      body:
        "### 1. Demonstratives (**这 / 那 / 哪**) & Quantity Questions (**几 / 多少**)\n\nJust like numbers, **这** (*zhè*, this), **那** (*nà*, that), **哪** (*nǎ*, which), and **几** (*jǐ*, how many) **MUST keep the noun's exact measure word**:\n- **这本书** (*zhè běn shū*, this book) · **那件衬衫** (*nà jiàn chènshān*, that shirt) · **哪双鞋？** (*nǎ shuāng xié?*, which pair of shoes?)\n- **几口人？** (*jǐ kǒu rén?*, how many family members? — usually expecting 1–10; classifier **mandatory**!)\n- **多少(个)学生？** (*duōshao [gè] xuésheng?*, how many students? — expecting >10 or any number; classifier **optional**!)\n\n### 2. Point-in-Time vs Duration (and Which Units Need **个**!)\n\n| Concept | Mandarin Unit | Needs **个**? | Example |\n|---|---|---|---|\n| **Clock point** vs **Hour duration** | **点** vs **个小时** | **点** no · **小时** YES | **两点** (2:00) vs **两个小时** (for 2 hours) |\n| **Calendar month** vs **Month duration** | **月** vs **个月** | Calendar no · Duration YES | **二月** (February) vs **两个月** (for 2 months) |\n| **Weekday** vs **Week duration** | **星期二** vs **个星期** | Weekday no · Duration YES | **星期二** (Tuesday) vs **两个星期** (for 2 weeks) |\n| **Self-measuring durations** | **年, 天, 分钟** | **NEVER use 个!** | **三年** (3 years), **五天** (5 days), **二十分钟** (20 mins) |",
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Point-in-Time placed BEFORE the verb versus Time Duration placed AFTER the verb">' +
        '<rect x="10" y="10" width="620" height="240" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="36" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">WHEN (Before Verb) vs HOW LONG (After Verb)</text>' +
        '<rect x="28" y="54" width="584" height="82" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>' +
        '<text x="46" y="78" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1">POINT IN TIME (When? → BEFORE Verb):</text>' +
        '<text x="46" y="108" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">我  +  上午八点 (WHEN)  +  上 (VERB)  +  中文课。</text>' +
        '<text x="46" y="126" font-family="sans-serif" font-size="12" fill="#475569">Wǒ shàngwǔ bā diǎn shàng Zhōngwén kè. — I have Chinese class at 8:00 am.</text>' +
        '<rect x="28" y="150" width="584" height="86" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>' +
        '<text x="46" y="174" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">TIME DURATION (How long? → AFTER Verb):</text>' +
        '<text x="46" y="204" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">我每天  +  学 (VERB)  +  一个小时 (DURATION)  +  中文。</text>' +
        '<text x="46" y="224" font-family="sans-serif" font-size="12" fill="#475569">Wǒ měitiān xué yí gè xiǎoshí Zhōngwén. — I study Chinese for 1 hour every day.</text>' +
        "</svg>",
      diagramCaption: "Put WHEN (上午八点) BEFORE the verb, and put HOW LONG (一个小时) AFTER the verb!",
      workedExamples: [
        {
          title: "Combining demonstrative classifiers and post-verb durations",
          problem:
            "Translate into Mandarin: **(a) 'How much is that pair of shoes?'** and **(b) 'Yesterday I read a book for two hours.'** (Use **看** + duration + **书**.)",
          steps: [
            "For (a), 'that pair of shoes' needs **那** + pair classifier **双** + **鞋**: **那双鞋多少钱？**",
            "For (b), put point-in-time **昨天** BEFORE **看**, and put duration **两个小时** AFTER **看** (with **了**): **我昨天看了两个小时书。**",
          ],
          answer: "(a) 那双鞋多少钱？; (b) 我昨天看了两个小时书。",
          yourTurn: {
            question: "Translate into Mandarin: 'this dictionary' (use 这 + classifier + 词典):",
            answer: {
              type: "text",
              accept: [
                "这本词典",
                "zhè běn cídiǎn",
              ],
              display: "这本词典 (zhè běn cídiǎn)",
            },
            solution: "Dictionaries are bound volumes, so 这 MUST be followed by 本: 这本词典.",
          },
        },
      ],
      keyPoints: [
        "**这 / 那 / 哪 + Measure Word + Noun**: NEVER drop the measure word (***这书*** ✗ → **这本书** ✓)!",
        "**点** = clock time (**两点** = 2:00); **个小时** = duration (**两个小时** = for 2 hours).",
        "**年**, **天**, and **分钟** are self-measuring — NEVER put **个** in front of them (**三天**, NEVER ***三个天***!).",
        "Point-in-time sits **BEFORE** the verb (**八点做作业**); duration sits **AFTER** the verb (**做了一个小时作业**).",
      ],
      whyItWorks:
        "Think of a film script: **Point-in-time** sets the scene timestamp *before* the action starts (**八点** → **看书**), whereas **Duration** measures how far the action ran *after* it began (**看了** → **两个小时** → **书**). And **年 / 天** were ancient measure words themselves, which is why adding **个** before **天** would stack two classifiers on top of each other!",
      strategies: [
        "When-Before / How-Long-After Check: Ask yourself 'Does this answer *what time* or *for how long*?' before placing a time phrase.",
        "Self-Measuring Trio Memory: Chant **年 · 天 · 分钟 — NO 个!** vs **个小时 · 个星期 · 个月 — KEEP 个!**",
      ],
      thinkDeeper:
        "Compare **他去了三天** (*He went for three days*) with **他三天没去上学** (*He hasn't gone to school for three days*). Why does a *negative* duration jump BEFORE **没**? Hint: did any action happen for three days to measure afterwards?",
    },
  ],
  learn: {
    flashcards: [
      { front: "二〇二六年十一月十七号星期二", back: "Èr líng èr liù nián shíyī yuè shíqī hào xīngqī'èr — Tuesday, 17th November 2026 (Big → Small!)" },
      { front: "星期天 / 星期日", back: "xīngqītiān / xīngqīrì — Sunday (NEVER *星期七*!)" },
      { front: "前天 → 昨天 → 今天 → 明天 → 后天", back: "qiántiān (-2d) → zuótiān (-1d) → jīntiān (today) → míngtiān (+1d) → hòutiān (+2d)" },
      { front: "二月 vs 两个月", back: "èryuè = February (Month #2, no 个) vs liǎng gè yuè = two months (duration, 两 + 个!)" },
      { front: "第二 vs 两个", back: "dì-èr = second (2nd — ordinals ALWAYS take 二!) vs liǎng gè = two items (standalone 2 + classifier takes 两)" },
      { front: "二十二个人", back: "èrshí'èr gè rén — 22 people (multi-digit numbers ending in 2 ALWAYS keep 二!)" },
      { front: "一本书 / 两本词典", back: "yì běn shū / liǎng běn cídiǎn — 1 book / 2 dictionaries (本 for bound spines)" },
      { front: "一杯茶 · 一碗面 · 一盘鸡饭", back: "a cup of tea (杯) · a bowl of noodles (碗) · a plate of chicken rice (盘)" },
      { front: "一件衬衫 vs 一条裤子 vs 一双鞋", back: "a shirt (件 = top) vs a pair of trousers (条 = long garment, NOT 双!) vs a pair of shoes (双 = 2 separate items)" },
      { front: "两条鱼 vs 两只小鸟", back: "liǎng tiáo yú (two fish — long/winding 条!) vs liǎng zhī xiǎoniǎo (two birds — small animal 只)" },
      { front: "一张票 / 一张桌子", back: "yì zhāng piào (a ticket) / yì zhāng zhuōzi (a table) — 张 for flat sheets & flat tabletops!" },
      { front: "这本书 / 哪双鞋？", back: "zhè běn shū (this book) / nǎ shuāng xié? (which pair of shoes?) — 这/那/哪 MUST take the classifier!" },
      { front: "两点 vs 两个小时", back: "liǎng diǎn = 2:00 o'clock (point in time) vs liǎng gè xiǎoshí = 2 hours (duration)" },
      { front: "三天 / 两年 / 二十分钟", back: "3 days / 2 years / 20 minutes — 年, 天, and 分钟 NEVER take 个!" },
    ],
    mustKnow: [
      "Can you say and write any full date in Mandarin's strict Year → Month → Date → Weekday order?",
      "Can you name all 12 months and 7 days of the week without ever writing *星期七* or *两月*?",
      "Can you navigate listener calendar puzzles across 前天, 昨天, 今天, 明天, 后天 and 去年, 今年, 明年?",
      "Can you choose accurately between 二 (dates, ordinals 第二, phone/bus digits, 12/20/22) and 两 (standalone 2 before classifiers/千)?",
      "Can you match everyday food & study nouns to 个, 口, 本, 杯, 碗, 盘, 瓶?",
      "Can you match outfits, animals, and flat objects to 件, 条 (including 裤子 and 鱼!), 双, 只, 张?",
      "Can you include the exact measure word after 这, 那, 哪, and 几 (这件衣服, 哪本书)?",
      "Can you contrast calendar points (八点, 二月, 星期二) with durations (两个小时, 两个月, 两个星期, 三天)?",
      "Can you place points-in-time BEFORE the verb and durations AFTER the verb (学了一个小时中文)?",
    ],
    misconceptions: [
      {
        wrong: "*星期七* for Sunday and *两月* for February",
        right: "**星期天 / 星期日** for Sunday, and **二月** for February (**两个月** means 'a duration of two months'!).",
      },
      {
        wrong: "*一双裤子* (translating English 'a pair of trousers' literally with 双)",
        right: "**一条裤子** (*yì tiáo kùzi* — trousers are one connected long garment, so they take **条**, never **双**!).",
      },
      {
        wrong: "*二十两个人* or *第两课* (over-using 两 inside multi-digit numbers or ordinals)",
        right: "**二十二个人** (*èrshí'èr gè rén*) and **第二课** (*dì-èr kè* — multi-digit numbers and **第** ordinals ALWAYS keep **二**!).",
      },
      {
        wrong: "*这书* / *那衣服* (forgetting the measure word after 这 or 那)",
        right: "**这本书** (*zhè běn shū*) and **那件衣服** (*nà jiàn yīfu* — **这 / 那 / 哪** require a measure word before singular nouns!).",
      },
      {
        wrong: "*三个天* / *两个年* (putting 个 before 天 or 年)",
        right: "**三天** (*sān tiān*, 3 days) and **两年** (*liǎng nián*, 2 years — **天** and **年** are self-measuring and NEVER take **个**!).",
      },
      {
        wrong: "*我一个小时学中文* or *我学中文在两点* (swapping point-in-time and duration slots)",
        right: "**我两点学中文** (point BEFORE verb, no **在**) vs **我学一个小时中文** (duration AFTER verb!).",
      },
    ],
    examMistakes: [
      "Falling for IGCSE Listening date traps where the speaker says **昨天是十月十号，明天是我生日** — making the birthday **十月十二号** (two days after yesterday!), not 10th or 11th October!",
      "Confusing **两点** (*2 o'clock*) with **两个小时** (*for 2 hours*) in reading and writing tasks.",
      "Using **本** for a ticket or sheet of paper (***一本票*** ✗) instead of flat-surface **张** (**一张票** ✓).",
      "Using **只** for fish (***两只鱼*** ✗) instead of long/flexible **条** (**两条鱼** ✓).",
      "Writing ***这个年*** for 'this year' instead of **今年** (*jīnnián*) — note that 'this month' IS **这个月** and 'this week' IS **这个星期**, making **今年** a crucial exception!",
      "Leaving out **零** (*líng*) in numbers with an internal zero gap like 105 (**一百零五**, NOT ***一百五*** which means 150 in casual speech!).",
      "Mixing up **那** (*nà*, that) and **哪** (*nǎ*, which — with mouth radical **口**) before classifiers.",
    ],
    mnemonics: [
      {
        topic: "Pair classifier 双 (shuāng) vs Long classifier 条 (tiáo)",
        device: "双 = TWO HANDS (又 + 又) holding TWO separate items!",
        explanation: "If you can hold one in your left hand and one in your right hand (2 shoes, 2 socks, 2 chopsticks), use **双**. Trousers are sewn together as one long piece → **一条裤子**!",
      },
      {
        topic: "Book classifier 本 (běn)",
        device: "木 (tree) + root bar = wood pulp bound into a BOOK!",
        explanation: "Adding a horizontal stroke at the base of **木** (tree) forms **本** (root/origin/volume) — every bound book or dictionary (**词典**) takes **本**.",
      },
      {
        topic: "Flat classifier 张 (zhāng)",
        device: "弓 (bow) stretched LONG (长) & FLAT!",
        explanation: "Think of stretching a sheet taut and flat: paper, tickets, photos, tabletops, and beds all take **张**.",
      },
      {
        topic: "Self-measuring durations: 年 · 天 · 分钟",
        device: "Years, Days & Minutes fly solo — NO 个 allowed!",
        explanation: "**两年, 三天, 十五分钟** stand without **个**, whereas **两个月, 两个星期, 两个小时** MUST keep **个**.",
      },
    ],
    realWorld: [
      {
        title: "Singapore Public Holidays by Calendar Date",
        detail: "In Singapore, key dates are remembered cleanly in Mandarin: **一月一日** (New Year's Day), **八月九日** (**新加坡国庆节** — National Day!), and **十二月二十五日** (Christmas Day), while Lunar New Year (**春节**) follows the traditional lunisolar calendar.",
        emoji: "🇸🇬",
      },
      {
        title: "Ordering at a Hawker Centre or Din Tai Fung",
        detail: "Listen at any Singapore **小贩中心** or restaurant and you will hear classifiers non-stop: **一盘海南鸡饭** (a plate of Hainanese chicken rice), **两碗叻沙** (two bowls of laksa), **一笼小笼包** (a steamer basket of soup dumplings), and **两杯薏米水** (two cups of barley water)!",
        emoji: "🍜",
      },
      {
        title: "Why '150' Is NOT 一百零五 in Casual Speech",
        detail: "At markets in Beijing or Chinatown, **一百五** (*yìbǎi wǔ*) is shorthand for **150** (**一百五十**), NOT 105! To say **105**, you MUST pronounce **零**: **一百零五** (*yìbǎi líng wǔ*) — otherwise you'll overpay by 45 dollars!",
        emoji: "💴",
      },
      {
        title: "Singapore Bus Numbers & Phone Digits: 幺 (yāo) for One",
        detail: "When reading bus numbers, room numbers, or mobile numbers aloud in Mandarin, **1** (*yī*) sounds dangerously close to **7** (*qī*) over noisy lines — so speakers often replace **一** with **幺** (*yāo*) and always use **二** (never **两**): Room 217 = *èr yāo qī*!",
        emoji: "🚌",
      },
    ],
    videos: [
      {
        title: "Dates, Months & Days of the Week in Mandarin Chinese",
        channel: "Everyday Chinese",
        url: "https://www.youtube.com/results?search_query=mandarin+chinese+dates+months+days+of+the+week",
      },
      {
        title: "二 (èr) vs 两 (liǎng) — Complete Chinese Number Rule",
        channel: "Grace Mandarin Chinese",
        url: "https://www.youtube.com/results?search_query=er+vs+liang+mandarin+chinese+explained",
      },
      {
        title: "Top 15 Essential Chinese Measure Words (量词)",
        channel: "Chinese Zero to Hero",
        url: "https://www.youtube.com/results?search_query=essential+chinese+measure+words+classifiers+ge+ben+tiao+jian+zhang",
      },
      {
        title: "Time Duration vs Point in Time in Mandarin Grammar",
        channel: "ShuoShuoChinese",
        url: "https://www.youtube.com/results?search_query=mandarin+time+duration+vs+point+in+time+xiaoshi",
      },
    ],
    formulas: [
      {
        name: "Full Calendar Date (Big → Small)",
        formula: "XXXX年 + M月 + D号/日 + 星期X",
        note: "二〇二六年八月九日星期日 (Sunday, 9th August 2026).",
      },
      {
        name: "Counting Objects with Classifiers",
        formula: "Number (两 for 2!) + Measure Word + Noun",
        note: "两本书 · 一条裤子 · 一双鞋 · 两张电影票 · 一盘鸡饭",
      },
      {
        name: "Demonstrative / 'Which' + Classifier",
        formula: "这 / 那 / 哪 / 几 + Measure Word + Noun",
        note: "这件衬衫 (this shirt) · 哪双运动鞋？ (which pair of trainers?)",
      },
      {
        name: "Calendar Point vs Quantity Duration",
        formula: "二月 (Feb) vs 两个月 (2 mos) · 两点 (2:00) vs 两个小时 (2 hrs)",
        note: "Self-measuring durations NEVER take 个: 两年 · 五天 · 二十分钟.",
      },
      {
        name: "Time Duration After the Verb",
        formula: "Subject + Verb (+ 了) + Duration + (Object)",
        note: "我每天学一个小时中文。 / 昨天我看了两个小时书。",
      },
    ],
  },
};
