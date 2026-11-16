import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "seasons",
  title: "四季与穿着 — Four Seasons & Clothing",
  strand: "Term 1 · Weather & Health",
  icon: "🍂",
  summary:
    "Contrast Singapore's year-round tropical warmth with Beijing's four distinct seasons, master 穿 vs 戴, and match every outfit to its Mandarin classifier.",
  intro:
    "Living in Singapore, your daily wardrobe probably looks like **一件T恤衫** (*a T-shirt*) and **一条短裤** (*a pair of shorts*) from January right through to December — because **新加坡一年四季都很热**! Yet step onto a flight to **北京** (*Běijīng*), **哈尔滨** (*Hā'ěrbīn*) or **伦敦** (*Lúndūn*) for the school holidays, and suddenly you need **羽绒服** (*puffer jackets*), **围巾** (*scarves*) and **手套** (*gloves*). In this topic, you'll unlock Mandarin's four seasons, compare world climates without falling into **比** traps, and master why English 'wear' splits into two razor-sharp Mandarin verbs: **穿** (*chuān*) and **戴** (*dài*).",
  guide: [
    {
      id: "four-seasons",
      heading: "The four seasons: 春天, 夏天, 秋天, 冬天",
      discovery: {
        problem:
          "Look closely at the characters for **spring**, **autumn** and **winter**:\n- **春** (*chūn*, spring) has **日** at the bottom.\n- **秋** (*qiū*, autumn) combines **禾** (grain stalk) + **火** (fire).\n- **冬** (*dōng*, winter) has two tiny strokes **冫** at the bottom.\n\nWhy did ancient Chinese scribes build **sun**, **grain + fire**, and **ice** right into the calendar?",
        idea:
          "China's agricultural year followed nature visually! In **春** (spring), the warm sun **日** awakens green shoots; in **秋** (autumn), golden harvest grain **禾** turns fiery red-orange like **火**; and in **冬** (winter), two ice crystals **冫** freeze the ground solid!",
      },
      body: `A year has four seasons: **一年有四个季节** (*Yìnián yǒu sì ge jìjié*). Notice each season adds **天** (*tiān*) in everyday speech, or stands as a single character in four-character idioms (**成语**, *chéngyǔ*): **春夏秋冬**!

| Season | Pinyin | Typical Climate | Upgrade Idiom / Phrase |
|---|---|---|---|
| **春天** | *chūntiān* | **暖和** (*nuǎnhuo*, warm), **常下小雨** | **春暖花开** (*spring is warm & flowers bloom*) |
| **夏天** | *xiàtiān* | **炎热** (*yánrè*, scorching), **常下大雨** | **烈日炎炎** / **又热又潮湿** |
| **秋天** | *qiūtiān* | **凉快** (*liángkuai*, cool), **干燥** (*dry*) | **秋高气爽** (*clear skies & crisp air*) |
| **冬天** | *dōngtiān* | **寒冷** (*hánlěng*, freezing), **常下雪** | **冰天雪地** (*world of ice & snow*) |

### Asking & Justifying Your Favourite Season
> **Q: 你最喜欢哪个季节？为什么？** (*Nǐ zuì xǐhuan nǎge jìjié? Wèishénme?* — Which season do you like best? Why?)
> **A: 我最喜欢秋天，因为秋天不冷也不热，非常凉快。** (*I like autumn best, because autumn is neither cold nor hot — very cool.*)

Notice the neat balanced frame **不 + Adj 1 + 也不 + Adj 2** (**不冷也不热**, *neither cold nor hot*) — examiners love seeing this in IGCSE speaking and writing!`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wheel of the four seasons in Mandarin showing chuntian spring, xiatian summer, qiutian autumn and dongtian winter with radicals and chengyu">
  <rect width="640" height="260" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="26" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">一年有四个季节 — The Four Seasons &amp; Upgrading Idioms</text>

  <rect x="24" y="44" width="284" height="94" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="166" y="68" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#15803d">🌸 春天 (chūntiān — Spring)</text>
  <text x="166" y="92" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">很暖和 · 春暖花开 (warm &amp; flowers bloom)</text>
  <text x="166" y="116" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Radical clue: Sun 日 warms sprouting shoots</text>

  <rect x="332" y="44" width="284" height="94" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="474" y="68" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#c81e1e">☀️ 夏天 (xiàtiān — Summer)</text>
  <text x="474" y="92" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">非常炎热 · 常常下大雨</text>
  <text x="474" y="116" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Radical clue: 炎 = double fire 火 + 火!</text>

  <rect x="24" y="150" width="284" height="94" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="166" y="174" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#b45309">🍂 秋天 (qiūtiān — Autumn)</text>
  <text x="166" y="198" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">不冷也不热 · 秋高气爽 (crisp air)</text>
  <text x="166" y="222" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Radical clue: 秋 = grain 禾 + fire 火 (red leaves)</text>

  <rect x="332" y="150" width="284" height="94" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="474" y="174" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0369a1">❄️ 冬天 (dōngtiān — Winter)</text>
  <text x="474" y="198" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">十分寒冷 · 常常下大雪</text>
  <text x="474" y="222" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Radical clue: 冬 &amp; 寒 both hold 2-dot ice 冫!</text>
</svg>`,
      diagramCaption:
        "Each season pairs a core Year 8 feeling adjective (暖和, 热, 凉快, 冷) with an IGCSE upgrade word (春暖花开, 炎热, 秋高气爽, 寒冷).",
      workedExamples: [
        {
          title: "Answering 'Which season do you like best and why?'",
          problem:
            "Translate into Mandarin: 'I like spring best, because spring is very warm and flowers bloom.'",
          steps: [
            "'I like spring best' uses **最喜欢** (*zuì xǐhuan*, most like): **我最喜欢春天，**.",
            "Give the reason with **因为** (*yīnwèi*): **因为春天很暖和** or use the 4-character idiom **春暖花开**!",
          ],
          answer:
            "我最喜欢春天，因为春天春暖花开，非常暖和。 (Wǒ zuì xǐhuan chūntiān, yīnwèi chūntiān chūn nuǎn huā kāi, fēicháng nuǎnhuo.)",
          yourTurn: {
            question:
              "Which 4-character Mandarin idiom (成语) describes clear autumn skies and crisp, refreshing air?",
            answer: {
              type: "text",
              accept: ["秋高气爽", "qiū gāo qì shuǎng", "qiūgāoqìshuǎng"],
              display: "秋高气爽 (qiū gāo qì shuǎng)",
            },
            solution:
              "**秋高气爽** (*qiū gāo qì shuǎng* — literally 'autumn high, air crisp') is the classic 4-character idiom for pleasant autumn weather.",
          },
        },
      ],
      keyPoints: [
        "The four seasons are **春天** (*chūntiān*), **夏天** (*xiàtiān*), **秋天** (*qiūtiān*), and **冬天** (*dōngtiān*).",
        "Express 'favourite season' with the verb phrase **最喜欢…** (**我最喜欢冬天**), never *我的最喜欢季节*.",
        "Use **不冷也不热** (*neither cold nor hot*) to praise mild spring or autumn weather.",
        "Drop in **春暖花开** (spring) or **秋高气爽** (autumn) to earn top IGCSE language marks!",
      ],
      whyItWorks:
        "Why doesn't Mandarin use a word like 'favourite' as an adjective? Because **喜欢** (*xǐhuan*, to like) is a psychological verb, and superlative **最** (*zuì*, most) is an adverb that scales verbs and adjectives directly: **最喜欢** = 'like the most'!",
      strategies: [
        "Decode Season Radicals (春=日, 炎=火+火, 秋=禾+火, 冬=冫)",
        "Upgrade Simple Adjectives with 4-Character 成语",
      ],
      thinkDeeper:
        "Notice **炎** (*yán* in **炎热**, scorching) stacks two **火** characters vertically. What do you think **焱** (three **火**!) or **森** (three **木** trees) means? Chinese calls this character-building trick *triplication*!",
    },
    {
      id: "singapore-vs-beijing",
      heading: "Comparing climates: 新加坡 vs 北京",
      discovery: {
        problem:
          "A Tanglin student writes two sentences comparing Singapore and Beijing:\n1. **新加坡没有冬天，一年四季都很热。**\n2. **北京的冬天比新加坡很冷。**\n\nSentence 1 is 100% natural, while Sentence 2 loses a grammar mark! Can you spot the illegal character in Sentence 2 and replace it with a proper post-adjective upgrade?",
        idea:
          "In Sentence 2, **很** (*hěn*) is illegal inside a **比** (*bǐ*) comparison! Delete **很** (**北京的冬天比新加坡冷**), or upgrade by placing **得多** (*much more*) **after** the adjective: **北京的冬天比新加坡冷得多**!",
      },
      body: `Contrasting **新加坡** (1° north of the equator) with **北京** (40° north) is one of the richest topics in Year 8 and IGCSE 0547 Mandarin!

### 1. Describing Tropical vs Four-Season Climates
- **Singapore (热带气候 — Tropical Climate):**
  - **新加坡一年四季都很热，没有冬天，也没有秋天。** (*Singapore is hot all year round, with neither winter nor autumn.*)
  - **新加坡一年四季如夏，常常下大雨。** (*Singapore is like summer all year round and often has heavy rain.*)
- **Beijing (四季分明 — Four Distinct Seasons):**
  - **北京气候四季分明：春天暖和，夏天炎热，秋天凉快，冬天寒冷。** (*Beijing has four distinct seasons: warm spring, hot summer, cool autumn, freezing winter.*)

### 2. Three Essential Climate Comparison Patterns
| Pattern | Structure | Natural Example |
|---|---|---|
| **Superior / More (比)** | **A + 比 + B + Adj (+ 得多 / 一点儿)** | **北京的冬天比新加坡冷得多。** *(Beijing's winter is much colder than Singapore's.)* |
| **Different (不一样)** | **A + 跟/和 + B + (很)不一样** | **新加坡的气候跟北京很不一样。** *(Singapore's climate is very different from Beijing's.)* |
| **Same / Similar (一样)** | **A + 跟/和 + B + 一样 (+ Adj)** | **北京的夏天跟新加坡一样热！** *(Beijing's summer is just as hot as Singapore's!)* |`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side by side climate comparison between tropical Singapore yinian siji ru xia and four-season Beijing siji fenming with bi and yiyang patterns">
  <rect width="640" height="260" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="26" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Climate Showdown: 新加坡 vs 北京 (气候比较)</text>

  <rect x="22" y="44" width="276" height="128" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="160" y="68" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#c81e1e">🇸🇬 新加坡 (Singapore)</text>
  <text x="160" y="92" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">一年四季如夏 · 没有冬天</text>
  <text x="160" y="114" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">26–33°C all year · 又热又潮湿</text>
  <text x="160" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#c81e1e">从来不下雪 (Never snows!)</text>

  <rect x="342" y="44" width="276" height="128" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="480" y="68" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">🇨🇳 北京 (Beijing)</text>
  <text x="480" y="92" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">气候四季分明 (4 distinct seasons)</text>
  <text x="480" y="114" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">Summer 35°C · Winter −10°C &amp; 干燥</text>
  <text x="480" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0369a1">冬天常常下雪 (Snows in winter!)</text>

  <rect x="22" y="184" width="596" height="60" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="320" y="206" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">1. 新加坡的气候跟北京不一样。  2. 北京的冬天比新加坡冷得多。</text>
  <text x="320" y="228" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">3. 北京的夏天跟新加坡一样热！ (A 跟 B 一样 + Adjective)</text>
</svg>`,
      diagramCaption:
        "Combine 四季如夏 (Singapore) and 四季分明 (Beijing) with 跟…不一样, 比…冷得多 and 跟…一样热.",
      workedExamples: [
        {
          title: "Comparing climates with 跟…不一样 and 比…得多",
          problem:
            "Translate into Mandarin: 'Singapore's climate is different from Beijing's; Beijing's winter is much colder than Singapore's.'",
          steps: [
            "First clause ('different from'): use **A 跟 B 不一样** → **新加坡的气候跟北京不一样，**.",
            "Second clause ('much colder than'): use **A 比 B + Adjective + 得多** (no **很**!) → **北京的冬天比新加坡冷得多。**",
          ],
          answer:
            "新加坡的气候跟北京不一样，北京的冬天比新加坡冷得多。 (Xīnjiāpō de qìhòu gēn Běijīng bù yíyàng, Běijīng de dōngtiān bǐ Xīnjiāpō lěng de duō.)",
          yourTurn: {
            question:
              "Translate into Mandarin: 'Beijing's summer is as hot as Singapore's.' (Use 跟…一样热.)",
            answer: {
              type: "text",
              accept: [
                "北京的夏天跟新加坡一样热",
                "北京的夏天和新加坡一样热",
                "北京夏天跟新加坡一样热",
                "Běijīng de xiàtiān gēn Xīnjiāpō yíyàng rè",
                "Běijīng de xiàtiān gēn Xīnjiāpō yīyàng rè",
              ],
              display: "北京的夏天跟新加坡一样热。 (Běijīng de xiàtiān gēn Xīnjiāpō yíyàng rè.)",
            },
            solution:
              "Use **A + 跟 + B + 一样 + Adjective**: **北京的夏天跟新加坡一样热。**",
          },
        },
      ],
      keyPoints: [
        "Use **一年四季都很热** or **四季如夏** for Singapore, and **四季分明** for four-season cities like Beijing.",
        "Notice **都** (*dōu*, all) must stand **after** **一年四季**: **新加坡一年四季都很热**.",
        "Express difference with **A 跟 B 不一样**, and equality with **A 跟 B 一样 (+ Adjective)**.",
        "In **北京的冬天比新加坡冷得多**, **得多** goes *after* **冷**, with zero **很**!",
      ],
      whyItWorks:
        "Why does Mandarin say **A 跟 B 一样** (*A with B one-appearance*) instead of 'A is the same *as* B'? Mandarin sets the two items side by side first using **跟 / 和** ('with'), then states the verdict on the pair (**一样** = identical appearance, **不一样** = not identical)!",
      strategies: [
        "Set the Pair First with 跟 (A 跟 B 一样 / 不一样)",
        "Use 都 After 'Every / All Four Seasons' (一年四季都…)",
      ],
      thinkDeeper:
        "People often assume Beijing is always cooler than Singapore — yet in July, Beijing regularly hits **三十七度** (37°C), higher than Singapore's **三十二度**! How would you write *'Beijing's summer is even hotter than Singapore's'* in Mandarin?",
    },
    {
      id: "clothing-chuan-dai",
      heading: "Clothes & accessories: 穿 (wear) vs 戴 (put on accessories)",
      discovery: {
        problem:
          "In English, you **wear** a shirt, **wear** trousers, **wear** shoes, **wear** a hat, **wear** glasses, and **wear** a watch — one verb does everything!\n\nIn Mandarin, look at how the outfits divide:\n- **穿** (*chuān*): **穿衬衫、穿毛衣、穿裤子、穿裙子、穿运动鞋、穿袜子**\n- **戴** (*dài*): **戴帽子、戴围巾、戴手套、戴眼镜、戴手表**\n\nWhat physical test decides whether an item takes **穿** or **戴**? And why are trousers **一条裤子** instead of *一双裤子*?",
        idea:
          "1) **穿** literally means *to pass your body/limbs into* core garments and footwear that clothe you, whereas **戴** means *to perch, wrap or clip an accessory onto* your head, face, neck, hands or wrist! 2) English says 'a *pair* of trousers', tempting learners to use **双** (*pair*), but **双** is ONLY for **two separate pieces** (shoes, socks, gloves). Because trousers are sewn into **one long flexible garment**, Mandarin uses **条** (*tiáo*): **一条裤子**!",
      },
      body: `Mastering **穿 vs 戴** AND the **five clothing classifiers** is a guaranteed mark-winner on every Year 8 test and IGCSE 0547 exam!

### 1. The Ultimate 穿 vs 戴 + Classifier Matrix
| Verb | Classifier | Shape / Logic | Items in This Group |
|---|---|---|---|
| **穿** (*chuān*) | **件** (*jiàn*) | Upper-body tops, coats & outfits | **衣服**, **衬衫** (shirt), **T恤衫** (T-shirt), **毛衣** (jumper), **外套** (jacket), **大衣** (overcoat), **羽绒服** (puffer) |
| **穿** (*chuān*) | **条** (*tiáo*) | Long / lower-body single garments | **裤子** (trousers), **短裤** (shorts), **牛仔裤** (jeans), **裙子** (skirt), **连衣裙** (dress) |
| **穿** (*chuān*) | **双** (*shuāng*) | Footwear & socks (2 separate pieces!) | **鞋**, **运动鞋** (trainers), **皮鞋** (leather shoes), **凉鞋** (sandals), **靴子** (boots), **袜子** (socks) |
| **戴** (*dài*) | **顶** (*dǐng*) | Sits on the crown (**顶**) of the head | **帽子** (hat / cap) → **戴一顶帽子** |
| **戴** (*dài*) | **条** (*tiáo*) | Long flexible neckwear | **围巾** (scarf), **领带** (tie) → **戴一条围巾** |
| **戴** (*dài*) | **双 / 副** | Accessories in pairs/sets | **一双手套** (gloves), **一副眼镜** (glasses), **一副太阳镜** (sunglasses) *(watch: **一块手表**)* |

### 2. Radical Warning — The 5-Stroke Clothing Radical 衤 (*yīzìpáng*)!
Look at the left side of **衬衫** (*shirt*), **裤子** (*trousers*), **裙子** (*skirt*) and **袜子** (*socks*):
- **衤** (*yīzìpáng*, from **衣** clothing) has **TWO little strokes** on the right shoulder (5 strokes total)!
- Never confuse it with **礻** (*shìzìpáng*, only 1 stroke on the right, 4 strokes total), which means altar/blessing (**祝**, **神**)!

### 3. Adding Colours to Outfits
Place **Number + Classifier + Colour + 的 + Noun**:
> **姐姐穿一件红色的毛衣和一条蓝色的牛仔裤。**
> (*My older sister wears a red jumper and a pair of blue jeans.*)`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Infographic comparing chuan for core garments and footwear with jian, tiao, shuang versus dai for accessories with ding, tiao, fu, shuang">
  <rect width="640" height="260" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="26" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">穿 (chuān) vs 戴 (dài) &amp; The 5 Clothing Classifiers</text>

  <rect x="20" y="42" width="292" height="202" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="166" y="66" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0369a1">👕 穿 (chuān) — Core Clothes &amp; Shoes</text>
  <rect x="34" y="78" width="264" height="44" rx="8" fill="#ffffff"/>
  <text x="166" y="96" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">一件 (jiàn) — Tops &amp; Coats</text>
  <text x="166" y="114" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">衬衫 · T恤衫 · 毛衣 · 外套 · 大衣 · 羽绒服</text>

  <rect x="34" y="130" width="264" height="44" rx="8" fill="#ffffff"/>
  <text x="166" y="148" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c81e1e">一条 (tiáo) — Trousers &amp; Skirts (NOT 双!)</text>
  <text x="166" y="166" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">裤子 · 短裤 · 牛仔裤 · 裙子 · 连衣裙</text>

  <rect x="34" y="182" width="264" height="48" rx="8" fill="#ffffff"/>
  <text x="166" y="200" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">一双 (shuāng) — Footwear &amp; Socks (2 pieces)</text>
  <text x="166" y="218" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">运动鞋 · 皮鞋 · 凉鞋 · 靴子 · 袜子</text>

  <rect x="328" y="42" width="292" height="202" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="474" y="66" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#b45309">🧢 戴 (dài) — Accessories Only!</text>
  <rect x="342" y="78" width="264" height="44" rx="8" fill="#ffffff"/>
  <text x="474" y="96" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">一顶帽子 (yì dǐng màozi — hat)</text>
  <text x="474" y="114" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">顶 = crown/peak of the head</text>

  <rect x="342" y="130" width="264" height="44" rx="8" fill="#ffffff"/>
  <text x="474" y="148" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">一条围巾 · 一双手套</text>
  <text x="474" y="166" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">long scarf (条) · pair of gloves (双)</text>

  <rect x="342" y="182" width="264" height="48" rx="8" fill="#ffffff"/>
  <text x="474" y="200" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">一副眼镜 / 太阳镜 · 一块手表</text>
  <text x="474" y="218" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">glasses/sunglasses (副) · wristwatch (块/只)</text>
</svg>`,
      diagramCaption:
        "Memorise the two golden traps: 1) Accessories take 戴 (never 穿帽子!); 2) Trousers & jeans take 条 (never 一双裤子!).",
      workedExamples: [
        {
          title: "Building a winter outfit with 穿, 戴 and exact classifiers",
          problem:
            "Translate into Mandarin: 'In winter he wears a black coat, a pair of blue jeans, a hat and a red scarf.'",
          steps: [
            "Group the **穿** garments first: 'a black coat' = **一件黑色的大衣**, and 'a pair of blue jeans' = **一条蓝色的牛仔裤** (use **条**, NOT **双**!).",
            "Switch verb to **戴** for the accessories! 'A hat' = **一顶帽子**, and 'a red scarf' = **一条红色的围巾**.",
            "Join cleanly: **冬天他穿一件黑色的大衣和一条蓝色的牛仔裤，戴一顶帽子和一条红色的围巾。**",
          ],
          answer:
            "冬天他穿一件黑色的大衣和一条蓝色的牛仔裤，戴一顶帽子和一条红色的围巾。",
          yourTurn: {
            question:
              "Write 'wear a pair of glasses' in Mandarin using the right verb (穿 or 戴) and classifier (副): ___一___眼镜 (write the full 5-character phrase).",
            answer: {
              type: "text",
              accept: ["戴一副眼镜", "dài yí fù yǎnjìng", "dài yīfù yǎnjìng"],
              display: "戴一副眼镜 (dài yí fù yǎnjìng)",
            },
            solution:
              "Glasses are an accessory perched on your nose/ears, so the verb is **戴** (*dài*) and the classifier is **副** (*fù*): **戴一副眼镜** (*dài yí fù yǎnjìng*).",
          },
        },
      ],
      keyPoints: [
        "**穿** (*chuān*) is for clothes and footwear (**衬衫, 毛衣, 裤子, 裙子, 鞋, 袜子**); **戴** (*dài*) is for accessories (**帽子, 围巾, 手套, 眼镜, 手表**).",
        "Trousers, shorts, jeans, skirts and scarves all take **条** (*tiáo*) — NEVER say *一双裤子*!",
        "**双** (*shuāng*) requires two physically separate items (**一双运动鞋, 一双袜子, 一双手套**).",
        "Hats take **顶** (**一顶帽子**), tops/coats take **件** (**一件毛衣**), and glasses take **副** (**一副眼镜**).",
      ],
      whyItWorks:
        "Look at the character **穿**: cave/hole **穴** on top + tooth **牙** boring through! Putting on a shirt, trousers or shoes means pushing your arms, legs or feet *through an opening*. By contrast, **戴** originally meant carrying something ceremonially *on top of your head or body surface* — which is why hats, glasses, scarves and watches all belong to **戴**!",
      strategies: [
        "Apply the 'Limb-Through-Opening' Test (穿) vs 'Perch-on-Outside' Test (戴)",
        "Count Physical Pieces: 1 Connected Item = 条 (裤子), 2 Separate Pieces = 双 (鞋)",
      ],
      thinkDeeper:
        "Why do **手套** (gloves) and **袜子** (socks) both take the classifier **双** (*shuāng*, pair), yet **袜子** uses the verb **穿** (**穿袜子**) whilst **手套** uses the verb **戴** (**戴手套**)? Think about what counts as essential base clothing versus an outer accessory!",
    },
    {
      id: "seasonal-activities",
      heading: "Seasonal activities & travel plans",
      discovery: {
        problem:
          "Imagine you live in Singapore and your family is flying to **哈尔滨** (*Harbin*) in December (**十二月**). Look at these three *dài / chuān* words in one packing checklist:\n> **十二月去哈尔滨旅行，行李箱里要带一件羽绒服；到了哈尔滨，要穿羽绒服、戴帽子和手套去堆雪人！**\n\nExplain the exact job of **带**, **穿**, and **戴** in that single sentence!",
        idea:
          "**带** (*dài*) = **pack / bring along** in your suitcase (**带一件羽绒服**); **穿** (*chuān*) = **wear on your torso/legs/feet** once you arrive (**穿羽绒服**); and **戴** (*dài*) = **put on accessories** (**戴帽子和手套**) before heading out into the snow!",
      },
      body: `Pairing each season with signature activities — and explaining what you pack (**收拾行李箱**) when travelling out of tropical Singapore — brings your Mandarin paragraphs to life!

### 1. Classic Activities Across the Four Seasons
| Season | Signature Activities (STPV Word Order!) |
|---|---|
| **春天** (*Spring*) | **去公园看花** (*view blossoms in the park*), **去植物园野餐** (*picnic at the Botanic Gardens*), **散步** (*stroll*) |
| **夏天** (*Summer*) | **去海边游泳** (*swim at the beach*), **吃冰淇淋** (*eat ice cream*), **穿T恤衫和短裤** |
| **秋天** (*Autumn*) | **去爬山** (*go hiking*), **看红叶** (*see red autumn leaves*), **骑自行车** (*cycle*) |
| **冬天** (*Winter*) | **去滑雪** (*go skiing*), **滑冰** (*ice-skate*), **在院子里堆雪人** (*build a snowman*) |

### 2. Golden STPV Word Order for Seasonal Plans
Always keep **Time (Season) + Subject + Place + Action** (or **Subject + Season + Place + Action**):
- **夏天我常常去圣淘沙游泳。** (*In summer I often go to Sentosa to swim.*)
- **十二月我们全家打算去日本滑雪。** (*In December our whole family plans to go to Japan to ski.*)

### 3. Packing a Suitcase from Singapore (收拾行李箱)
- **我下个星期去北京旅行，正在收拾行李箱呢。** (*I'm travelling to Beijing next week and am packing my suitcase right now.*)
- **因为北京现在是冬天，所以我带了一件羽绒服、两条牛仔裤、一顶帽子和一双手套。**`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Travel suitcase checklist from tropical Singapore to winter China contrasting dai bring in suitcase, chuan wear garments, and dai wear accessories">
  <rect width="640" height="260" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="26" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Seasonal Activities &amp; The Three Verbs: 带 vs 穿 vs 戴</text>

  <rect x="20" y="44" width="190" height="196" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="115" y="68" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">🧳 1. 带 (dài — Pack / Bring)</text>
  <text x="115" y="94" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">收拾行李箱 (pack suitcase):</text>
  <text x="115" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">带一件羽绒服</text>
  <text x="115" y="142" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">带一把雨伞</text>
  <text x="115" y="172" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Carry in bag/luggage</text>
  <text x="115" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">去中国旅行 (travel to China)</text>

  <rect x="225" y="44" width="190" height="196" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="320" y="68" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1">🧥 2. 穿 (chuān) + 戴 (dài)</text>
  <text x="320" y="94" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">Dress for the season:</text>
  <text x="320" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1">穿毛衣、牛仔裤、靴子</text>
  <text x="320" y="142" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309">戴帽子、围巾、手套</text>
  <text x="320" y="172" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">夏: 穿T恤衫、戴太阳镜</text>
  <text x="320" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">Match verb + classifier!</text>

  <rect x="430" y="44" width="190" height="196" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="525" y="68" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">⛷️ 3. Seasonal Actions</text>
  <text x="525" y="98" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">春: 去公园看花 / 野餐</text>
  <text x="525" y="124" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">夏: 去海边游泳 / 吃冰淇淋</text>
  <text x="525" y="150" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">秋: 去爬山 / 看红叶</text>
  <text x="525" y="176" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">冬: 去滑雪 / 堆雪人</text>
  <text x="525" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c81e1e">STPV: Season + Place + Verb</text>
</svg>`,
      diagramCaption:
        "Keep the trio crystal clear: 带 (pack/bring), 穿 (wear clothes/shoes), 戴 (wear accessories), followed by STPV seasonal actions!",
      workedExamples: [
        {
          title: "Describing autumn activities & outfits in STPV order",
          problem:
            "Translate into Mandarin: 'In autumn I like wearing a jumper and trainers to go to the mountains to see red leaves.'",
          steps: [
            "Put the season & subject at the start: **秋天我喜欢…** (*Qiūtiān wǒ xǐhuan…*).",
            "Add the outfit with **穿** and classifiers: **穿一件毛衣和一双运动鞋**.",
            "Finish with destination + purpose action: **去山上 / 去公园看红叶** (or **去爬山看红叶**).",
          ],
          answer:
            "秋天我喜欢穿一件毛衣和一双运动鞋去爬山、看红叶。",
          yourTurn: {
            question:
              "Translate into Mandarin: 'build a snowman' (3 characters):",
            answer: {
              type: "text",
              accept: ["堆雪人", "duī xuěrén", "duīxuěrén"],
              display: "堆雪人 (duī xuěrén)",
            },
            solution:
              "**堆** (*duī*, pile up) + **雪人** (*xuěrén*, snow-person) = **堆雪人** (*duī xuěrén*).",
          },
        },
      ],
      keyPoints: [
        "Match each season to 2–3 natural activities: **看花** (spring), **游泳 / 吃冰淇淋** (summer), **爬山 / 看红叶** (autumn), **滑雪 / 堆雪人** (winter).",
        "Distinguish **带** (*pack/bring in luggage*) from **戴** (*wear accessories*) — same Pinyin *dài*, totally different characters!",
        "Keep Mandarin's **Subject + Season/Time + Place + Verb** order (**冬天我们去日本滑雪**).",
      ],
      whyItWorks:
        "In Mandarin serial verb constructions (**穿羽绒服去滑雪**, *wear a puffer jacket to go to ski*), actions unfold in chronological real-world order: first you put on the jacket (**穿…**), next you go to the slope (**去…**), and finally you ski (**滑雪**)!",
      strategies: [
        "Chronological Serial Verbs (Dress First → Go to Place → Do Activity)",
        "Distinguish Homophones 带 (bring) vs 戴 (wear accessory)",
      ],
      thinkDeeper:
        "In June (**六月**), school holidays arrive at Tanglin! If one classmate flies to **北京** and another flies to **悉尼** (Australia) in June, how will their **行李箱** packing lists be completely opposite?",
    },
    {
      id: "describing-favourite-season",
      heading: "Writing about seasons, climate & outfits",
      discovery: {
        problem:
          "Compare two IGCSE answers to *'Talk about the climate where you live and your favourite season'*:\n- **Basic (Band 3):** *我住在新加坡。新加坡很热。我穿T恤衫。我喜欢冬天。冬天冷。*\n- **Top-Band (Band 1):** *虽然我住在一年四季如夏的新加坡，每天都穿T恤衫和短裤，但是我最喜欢的季节是冬天！因为北京的冬天常常下大雪，比新加坡凉快得多，所以我十二月打算带羽绒服和围巾去北京滑雪、堆雪人。*\n\nCount the structural upgrades that lift the second paragraph to full marks!",
        idea:
          "The Band 1 paragraph weaves **虽然…但是…** (*although… but…*), an idiom (**四季如夏**), **最喜欢的季节**, **因为…所以…**, a **比…得多** comparison, accurate **带/穿/戴** outfits, and future travel plans (**打算去…滑雪**) into two cohesive sentences!",
      },
      body: `In **Cambridge IGCSE 0547** Paper 4 (Writing) and Paper 3 (Speaking Topic Conversation), 'Seasons, Climate & Clothing' is a classic 80–130-character prompt. Use this **4-Step Paragraph Blueprint** to hit top marks every time:

### The 4-Step Top-Band Blueprint
1. **Home Climate & Daily Outfit (新加坡的气候与穿着):**
   - **我住在新加坡。新加坡没有冬天，一年四季如夏，每天都很热、很潮湿，所以我平常穿一件T恤衫、一条短裤和一双运动鞋。**
2. **Contrast with Four-Season City (对比四季分明的地方):**
   - **中国的气候跟新加坡很不一样，北京四季分明：春天春暖花开，秋天秋高气爽。**
3. **Justify Your Favourite Season (我最喜欢的季节 + 原因):**
   - **虽然新加坡不下雪，但是我最喜欢冬天，因为冬天可以穿漂亮的毛衣和大衣，戴红色的围巾和手套。**
4. **Memorable Trip or Future Plan (旅行经历或打算):**
   - **今年十二月放假的时候，我们全家打算去哈尔滨看冰灯、滑雪和堆雪人！**`,
      workedExamples: [
        {
          title: "Upgrading choppy sentences with 虽然…但是…",
          problem:
            "Combine into one smooth IGCSE sentence using **虽然…，但是…**: 'Singapore does not snow; I like winter best.'",
          steps: [
            "Clause 1 with **虽然** (*although*): **虽然新加坡不下雪，** (or **虽然新加坡没有冬天，**).",
            "Clause 2 with **但是** (*but* — mandatory partner in Mandarin!): **但是我最喜欢冬天。**",
          ],
          answer:
            "虽然新加坡不下雪，但是我最喜欢冬天。 (Suīrán Xīnjiāpō bú xià xuě, dànshì wǒ zuì xǐhuan dōngtiān.)",
          yourTurn: {
            question:
              "In Mandarin's 'Although…, (but)…' frame, which 2-character word MUST introduce the second clause to partner with 虽然?",
            answer: {
              type: "text",
              accept: ["但是", "可是", "dànshì", "kěshì"],
              display: "但是 / 可是 (dànshì / kěshì)",
            },
            solution:
              "**虽然** (*suīrán*, although) pairs with **但是** (*dànshì*) or **可是** (*kěshì*) at the start of the second clause!",
          },
        },
      ],
      keyPoints: [
        "Structure extended writing around **Climate → Outfit (穿 + 戴 + classifiers) → Comparison (比 / 不一样) → Activity/Trip**.",
        "Pair **虽然** (*although*) with **但是 / 可是** (*but*) — never leave **虽然** hanging alone!",
        "Include at least two clothing classifiers (**一件…、一条…、一双…、一顶…**) and one 4-character idiom (**四季如夏 / 四季分明 / 春暖花开 / 秋高气爽**) to showcase range.",
      ],
      whyItWorks:
        "IGCSE 0547 mark schemes split marks between **Task Completion / Communication** and **Language Range & Accuracy**. Explicitly contrasting **穿** vs **戴** with varied classifiers (**件, 条, 双, 顶, 副**) plus **虽然…但是…** and **比** ticks every single complex-grammar descriptor on the examiner's grid!",
      strategies: [
        "4-Step Blueprint (Home Climate → Comparison → Favourite Season & Outfit → Holiday Plan)",
        "Showcase Classifier Variety (件 + 条 + 双 + 顶)",
      ],
      thinkDeeper:
        "If an examiner asks in your oral exam: **新加坡一年四季都很热，为什么很多新加坡人出门还带一件外套？** (*Singapore is hot all year round — why do many Singaporeans still bring a jacket when going out?*), how can you give a witty 2-sentence answer?",
    },
  ],
  learn: {
    flashcards: [
      { front: "春天 · 夏天 · 秋天 · 冬天", back: "chūntiān (spring) · xiàtiān (summer) · qiūtiān (autumn) · dōngtiān (winter)" },
      { front: "春暖花开 & 秋高气爽", back: "chūn nuǎn huā kāi (warm spring & blooming flowers) & qiū gāo qì shuǎng (crisp autumn skies)" },
      { front: "四季分明 vs 四季如夏", back: "sìjì fēnmíng (4 distinct seasons, e.g. Beijing) vs sìjì rú xià (like summer all year, e.g. Singapore)" },
      { front: "A 跟 B 一样 / 不一样", back: "A is the same as B (yíyàng) / A is different from B (bù yíyàng)" },
      { front: "穿 (chuān) vs 戴 (dài)", back: "穿 = wear core clothes & shoes; 戴 = put on accessories (hat, scarf, gloves, glasses, watch)" },
      { front: "一件衬衫 / 毛衣 / 外套 / 羽绒服", back: "jiàn = classifier for tops, shirts, jumpers, jackets & puffer coats" },
      { front: "一条裤子 / 牛仔裤 / 裙子 / 围巾", back: "tiáo = classifier for long items: trousers, jeans, skirts & scarves (NEVER 双 for trousers!)" },
      { front: "一双运动鞋 / 袜子 / 手套", back: "shuāng = classifier for separated pairs: trainers, socks & gloves" },
      { front: "一顶帽子", back: "yì dǐng màozi — a hat/cap (verb: 戴; classifier: 顶 crown of head)" },
      { front: "一副眼镜 / 太阳镜", back: "yí fù yǎnjìng / tàiyángjìng — a pair of glasses / sunglasses (verb: 戴; classifier: 副)" },
      { front: "收拾行李箱", back: "shōushi xínglǐxiāng — to pack a suitcase" },
      { front: "滑雪 · 滑冰 · 堆雪人", back: "huá xuě (ski) · huá bīng (ice-skate) · duī xuěrén (build a snowman)" },
      { front: "爬山 & 看红叶", back: "pá shān (hike / climb hills) & kàn hóngyè (view red autumn leaves)" },
      { front: "虽然…，但是…", back: "suīrán…, dànshì… — Although…, (but)… (Mandarin requires BOTH halves!)" },
    ],
    mustKnow: [
      "Can you name all four seasons (春天, 夏天, 秋天, 冬天) and ask 你最喜欢哪个季节？为什么？",
      "Can you contrast Singapore's tropical climate (一年四季如夏 / 没有冬天) with Beijing's four distinct seasons (四季分明)?",
      "Can you compare two cities' climates using A 比 B 冷得多, A 跟 B 一样热, and A 跟 B 不一样?",
      "Can you choose accurately between 穿 (clothes & footwear) and 戴 (hats, scarves, gloves, glasses, watches)?",
      "Can you remember why trousers and jeans use 一条裤子 / 一条牛仔裤 instead of 双?",
      "Can you match 件, 条, 双, 顶, and 副 to every outfit item in your wardrobe?",
      "Can you distinguish the 5-stroke clothing radical 衤 (衬衫, 裤子, 裙子, 袜子) from the 4-stroke altar radical 礻?",
      "Can you describe seasonal activities (看花, 游泳, 爬山, 滑雪, 堆雪人) in clean STPV word order?",
      "Can you tell apart the homophones 带 (pack/bring in luggage) and 戴 (wear accessories)?",
    ],
    misconceptions: [
      {
        wrong: "一双裤子 / 一双牛仔裤 (Translating English 'a pair of trousers/jeans' with 双)",
        right: "一条裤子 / 一条牛仔裤 (Trousers are ONE connected long garment → use 条! Reserve 双 for 2 separate pieces like 鞋/袜子.)",
      },
      {
        wrong: "穿帽子 / 穿眼镜 / 穿围巾 (Using 穿 for every English 'wear')",
        right: "戴帽子 / 戴眼镜 / 戴围巾 (Accessories on your head, face, neck, hands or wrist require 戴 dài!)",
      },
      {
        wrong: "戴运动鞋 / 戴袜子 (Over-using 戴 for shoes and socks)",
        right: "穿运动鞋 / 穿袜子 (Footwear and socks clothe your feet through an opening → always 穿 chuān!)",
      },
      {
        wrong: "我的最喜欢季节是秋天。 (Treating 最喜欢 like an English adjective)",
        right: "我最喜欢的季节是秋天。 / 我最喜欢秋天。 (Include 的 before 季节, or use 最喜欢 directly as a verb!)",
      },
      {
        wrong: "新加坡都一年四季很热。 (Putting 都 before the time phrase)",
        right: "新加坡一年四季都很热。 (The adverb 都 'all' must stand AFTER '一年四季' and right before 很热!)",
      },
      {
        wrong: "戴着一双眼睛 (Confusing 眼睛 eyes with 眼镜 glasses!)",
        right: "戴着一副眼镜 (眼镜 yǎnjìng = glasses with metal/mirror radical 钅in 镜; 眼睛 yǎnjing = eyeballs with 目!)",
      },
    ],
    examMistakes: [
      "Writing *一双裤子* or *一双裙子* instead of **一条裤子 / 一条裙子** — one of the most frequent IGCSE 0547 Paper 4 errors!",
      "Swapping **穿** and **戴** (e.g. writing *穿一顶帽子* instead of **戴一顶帽子**, or *戴毛衣* instead of **穿毛衣**).",
      "Missing the extra right-hand stroke on the clothing radical **衤** (5 strokes) in **衬衫, 裤子, 裙子, 袜子**, turning it into **礻** (4 strokes).",
      "Confusing **眼镜** (*yǎnjìng*, glasses, 4th tone) with **眼睛** (*yǎnjing*, eyes, neutral tone) in reading comprehension.",
      "Confusing **带** (pack/bring: **行李箱里带毛衣**) with **戴** (wear accessory: **头上戴帽子**).",
      "Writing **虽然…** without **但是 / 可是** in the second clause.",
      "Forgetting **的** between a two-character colour (**红色 / 蓝色 / 白色**) and a clothing noun (**一件红色的毛衣**).",
    ],
    mnemonics: [
      {
        topic: "一条裤子 (NOT 双!) — The Washing-Line Test",
        device: "Pick it up off the floor: 1 connected item = 条; 2 separate pieces = 双!",
        explanation:
          "If you pick up jeans (牛仔裤) or a skirt (裙子), the whole garment comes up in ONE long piece → 条! Pick up one trainer (运动鞋) or one glove (手套), and the other stays on the floor → 双!",
      },
      {
        topic: "Clothing Radical 衤 Has TWO Shoulder Strokes (5 strokes)",
        device: "Clothes need TWO sleeves — so 衤 has TWO little strokes on the right!",
        explanation:
          "Count the two small strokes on the right side of 衤 in 衬衫, 裤, 裙, 袜 so you never draw the 1-stroke altar radical 礻.",
      },
      {
        topic: "一顶帽子 (dǐng for hats)",
        device: "A hat sits on the 顶 (peak/crown) of your head!",
        explanation:
          "屋顶 means rooftop and 山顶 means mountain peak — so 一顶帽子 sits right on your head's peak!",
      },
      {
        topic: "秋 = 禾 (Grain) + 火 (Fire)",
        device: "Harvest grain turning fiery gold and red = Autumn (秋天)!",
        explanation:
          "Remembering grain 禾 on the left + fire 火 on the right locks in both the character strokes and 看红叶 (viewing red autumn leaves).",
      },
    ],
    realWorld: [
      {
        title: "Singapore's 'Sweater Weather' = 22°C Monsoon Week!",
        detail:
          "Every December–January during the Northeast Monsoon surge, Singapore occasionally dips to 二十二度 (22°C) with steady rain — and Orchard Road suddenly fills with locals happily wearing 毛衣 and 外套!",
        emoji: "🧥",
      },
      {
        title: "Packing at Changi Airport (樟宜机场) for December Ski Trips",
        detail:
          "At Changi Terminal 3 in December, you'll spot families boarding flights in T恤衫 and 短裤 while carrying 羽绒服 over their arms for 北京, 哈尔滨 or Hokkaido!",
        emoji: "✈️",
      },
      {
        title: "Fragrant Hills Red Leaves in Beijing (北京香山红叶)",
        detail:
          "Every October when 北京 is 秋高气爽, hundreds of thousands hike Fragrant Hills (香山) to admire hillsides ablaze with crimson smoke-tree leaves (看红叶).",
        emoji: "🍁",
      },
      {
        title: "Kunming the 'Spring City' (春城昆明 — 四季如春)",
        detail:
          "Just as Singapore is 四季如夏 (like summer all year), Kunming in Yunnan sits on a high plateau at 1,900m where temperatures hover around 18–22°C all year — earning the nickname 春城 (四季如春)!",
        emoji: "🌺",
      },
      {
        title: "Why 牛仔裤 Literally Means 'Cowboy Trousers'",
        detail:
          "When blue denim jeans arrived in Hong Kong and China from America, speakers coined 牛仔裤 (niúzǎikù): 牛 (cattle/cow) + 仔 (young lad) + 裤 (trousers)!",
        emoji: "👖",
      },
    ],
    videos: [
      {
        title: "Four Seasons & Climate in Mandarin Chinese (春夏秋冬)",
        channel: "Everyday Chinese / Mandarin Click",
        url: "https://www.youtube.com/results?search_query=mandarin+chinese+four+seasons+chun+xia+qiu+dong+igcse",
      },
      {
        title: "穿 (chuān) vs 戴 (dài) & Chinese Clothing Measure Words",
        channel: "Grace Mandarin Chinese",
        url: "https://www.youtube.com/results?search_query=chinese+chuan+vs+dai+clothing+measure+words+jian+tiao+shuang",
      },
      {
        title: "Comparing Climates with 比 and 一样 / 不一样",
        channel: "Chinese Zero to Hero",
        url: "https://www.youtube.com/results?search_query=chinese+grammar+gen+yiyang+bu+yiyang+bi+comparison",
      },
      {
        title: "IGCSE Chinese 0547 Speaking & Writing: My Favourite Season",
        channel: "IGCSE Mandarin Prep",
        url: "https://www.youtube.com/results?search_query=igcse+chinese+0547+seasons+weather+clothing",
      },
    ],
    formulas: [
      {
        name: "Favourite Season & Reason",
        formula: "我最喜欢 + Season，因为 + Climate / Activity。",
        note: "我最喜欢秋天，因为秋天秋高气爽，可以去爬山。",
      },
      {
        name: "Climate Equality & Difference",
        formula: "A + 跟 + B + 一样 (+ Adj)  ·  A + 跟 + B + (很)不一样",
        note: "新加坡的气候跟北京很不一样。",
      },
      {
        name: "穿 vs 戴 Outfit Formula",
        formula: "穿 + Num + 件/条/双 + Garment/Shoes  ·  戴 + Num + 顶/条/双/副 + Accessory",
        note: "穿一件毛衣、一条牛仔裤，戴一顶帽子、一副眼镜。",
      },
      {
        name: "Year-Round Generalisation (都)",
        formula: "Place + 一年四季 + 都 + 很 + Adjective",
        note: "新加坡一年四季都很热。",
      },
      {
        name: "Concession Pair (虽然…但是…)",
        formula: "虽然 + Concession Clause，但是 + Main Clause",
        note: "虽然新加坡不下雪，但是我最喜欢冬天。",
      },
    ],
  },
};
