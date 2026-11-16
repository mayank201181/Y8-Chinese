import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "vegetables-fruits",
  title: "蔬菜与水果 — Vegetables, Fruits & Market Shopping",
  strand: "Term 3 · Food & Grammar",
  icon: "🍓",
  summary:
    "Master fruits, vegetables, taste descriptions, Chinese weights (斤/公斤), spoken vs written money (块/毛 vs 元/角), and lively wet-market bargaining!",
  intro:
    "Step into a bustling morning **巴刹** (*bāshā*, Singapore wet market) in Tiong Bahru or a lively **菜市场** (*càishìchǎng*) in Beijing and your senses light up: pyramids of ruby **草莓** (*cǎoméi*, strawberries), spiky **榴莲** (*liúlián*, durians), crisp **青菜** (*qīngcài*, leafy greens), and stallholders calling out **五块五一斤，又新鲜又甜！** (*5.50 per 500g — both fresh and sweet!*). In this topic you'll crack the radical code hidden inside Chinese plant names, convert effortlessly between **斤** (500g) and **公斤** (1kg), decode spoken market prices like **三块五**, and bargain like a local with **太贵了！便宜一点儿吧！**",
  guide: [
    {
      id: "fruits-vocab",
      heading: "Fruits & describing taste/freshness: 苹果, 西瓜, 草莓",
      discovery: {
        problem:
          "Look closely at the characters in these two fruit baskets:\n- Basket A: **苹果** (*píngguǒ*), **草莓** (*cǎoméi*), **葡萄** (*pútao*), **芒果** (*mángguǒ*)\n- Basket B: **橙子** (*chéngzi*), **桃子** (*táozi*), **木瓜** (*mùguā*), **榴莲** (*liúlián*)\n\nWhat shared visual component crowns the characters in Basket A (**艹**), what component stands on the left in Basket B (**木**), and why isn't there a verb **是** in **草莓很甜** (*Strawberries are sweet*)?",
        idea:
          "Mandarin characters encode **botany**! **艹** (the grass/plant top radical) marks herbaceous plants, vines, and berries (**苹, 草, 莓, 葡, 萄, 芒**), while **木** (the tree radical) marks woody fruit trees (**橙, 桃, 榴**). And in Mandarin, **adjectives act as stative verbs** — so you link Subject + **很 / 非常 / 又…又…** + Adjective directly (**草莓很甜**), NEVER *草莓是甜*!",
      },
      body: `Mandarin's word for fruit is **水果** (*shuǐguǒ* — literally 'water-fruit', celebrating how juicy fresh fruit is!).

### Essential Fruits & Their Classifiers

| Hanzi | Pinyin | English | Best Measure Word(s) |
|---|---|---|---|
| **苹果** | *píngguǒ* | apple | **一个苹果** (one), **一斤苹果** (500g) |
| **香蕉** | *xiāngjiāo* | banana | **一根香蕉** (single), **一串香蕉** (bunch) |
| **西瓜** | *xīguā* | watermelon | **一个西瓜** (whole), **一块西瓜** (slice) |
| **草莓** | *cǎoméi* | strawberry | **一盒草莓** (punnet), **一颗草莓** (berry) |
| **葡萄** | *pútao* | grape (neutral *tao*!) | **一串葡萄** (bunch/cluster) |
| **橙子** | *chéngzi* | orange | **一个橙子** |
| **芒果** | *mángguǒ* | mango | **一个芒果** |
| **榴莲** | *liúlián* | durian (Singapore King of Fruits!) | **一个榴莲**, **一盒榴莲** |

### Describing Taste, Freshness & Texture
- **新鲜** (*xīnxiān*, fresh — notice **鲜** = **鱼** fish + **羊** lamb!)
- **甜** (*tián*, sweet — **舌** tongue + **甘** sweet) vs **酸** (*suān*, sour/tangy)
- **好吃** (*hǎochī*, delicious — for solid food!) & **多汁** (*duōzhī*, juicy) & **香** (*xiāng*, fragrant)

### Upgrading Descriptions with **又…又…** (*both … and …*)
Pair two positive (or two negative) adjectives seamlessly without **是**:
- **这盒草莓又新鲜又甜！** (*Zhè hé cǎoméi yòu xīnxiān yòu tián!* — This punnet of strawberries is both fresh and sweet!)
- **这个西瓜又大又多汁。** (*Zhège xīguā yòu dà yòu duōzhī.* — This watermelon is both big and juicy.)`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Botanical radicals and classifiers for Mandarin fruits plus the you A you B adjective pattern">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="34" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Cracking Fruit Characters: Radicals, Classifiers &amp; 又…又…</text>
  <rect x="26" y="50" width="186" height="106" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="119" y="72" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#15803d">艹 PLANT / VINE TOP</text>
  <text x="119" y="98" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="bold" fill="#1e293b">草莓 · 葡萄 · 苹果</text>
  <text x="119" y="120" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#475569">cǎoméi · pútao · píngguǒ</text>
  <text x="119" y="141" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#15803d">一盒草莓 · 一串葡萄</text>
  <rect x="227" y="50" width="186" height="106" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="320" y="72" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#b45309">木 TREE RADICAL LEFT</text>
  <text x="320" y="98" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="bold" fill="#1e293b">橙子 · 桃子 · 榴莲</text>
  <text x="320" y="120" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#475569">chéngzi · táozi · liúlián</text>
  <text x="320" y="141" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#b45309">Grows on woody trees!</text>
  <rect x="428" y="50" width="186" height="106" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="521" y="72" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#c81e1e">SHAPE CLASSIFIERS</text>
  <text x="521" y="96" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">一根香蕉 (1 banana)</text>
  <text x="521" y="118" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">一块西瓜 (1 slice)</text>
  <text x="521" y="140" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">一串葡萄 (1 bunch)</text>
  <rect x="26" y="172" width="588" height="64" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="196" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#15803d">✓ 这些芒果又香又甜！ (Zhèxiē mángguǒ yòu xiāng yòu tián! — Both fragrant &amp; sweet!)</text>
  <text x="320" y="220" text-anchor="middle" font-family="sans-serif" font-size="12.5" fill="#c81e1e">✗ Trap: Never put 是 before plain adjectives (*芒果是甜* ✗ → 芒果很甜 ✓)</text>
</svg>`,
      diagramCaption:
        "Spot 艹 (herb/berry/vine) and 木 (tree), pick vivid classifiers, and link two adjectives with 又…又….",
      workedExamples: [
        {
          title: "Describing Fruit with Classifiers + 又…又…",
          problem:
            "Translate into Mandarin: *'This bunch of grapes is both fresh and sweet.'* (Use **这串葡萄**, **又…又…**, **新鲜**, and **甜**.)",
          steps: [
            "Demonstrative + classifier + noun: **这串葡萄** (*zhè chuàn pútao*, this bunch of grapes).",
            "Do NOT use **是**! Link the two adjectives with **又…又…**: **又新鲜又甜**.",
            "Combine: **这串葡萄又新鲜又甜。**",
          ],
          answer: "这串葡萄又新鲜又甜。 (Zhè chuàn pútao yòu xīnxiān yòu tián.)",
          yourTurn: {
            question:
              "Translate into Mandarin: *'Watermelon is very sweet.'* (Use **西瓜**, **很**, and **甜** — remember NO **是**!)",
            answer: {
              type: "text",
              accept: ["西瓜很甜", "Xīguā hěn tián"],
              display: "西瓜很甜。 (Xīguā hěn tián.)",
            },
            solution:
              "Subject (**西瓜**) + Degree link (**很**) + Stative adjective (**甜**) → **西瓜很甜。**",
          },
        },
      ],
      keyPoints: [
        "Core fruits: **苹果** (apple), **香蕉** (banana), **西瓜** (watermelon), **草莓** (strawberry), **葡萄** (grape), **橙子** (orange), **芒果** (mango), **榴莲** (durian).",
        "Match shape/container classifiers for top marks: **一根香蕉** (single banana), **一串葡萄** (bunch of grapes), **一盒草莓** (punnet of strawberries), **一块西瓜** (slice of watermelon).",
        "Link Subject + **很 / 非常 / 有点儿** + Adjective with NO **是** (**柠檬有点儿酸**).",
        "Use **又 + Adj 1 + 又 + Adj 2** to say 'both … and …' (**又大又甜**).",
      ],
      whyItWorks:
        "Why does **西瓜很甜** need **很** even when you just mean neutral 'Watermelon is sweet'? Without a degree word like **很**, a bare adjective (**西瓜甜**) sounds comparative in Mandarin ('Watermelon is sweeter [than the other fruit]')! Soft **很** neutralises that comparison so it states a simple description.",
      strategies: [
        "Radical Scan: Unfamiliar food word in IGCSE Reading with **艹** on top or **木** on the side? It's almost certainly a plant, fruit, or vegetable!",
        "The **舌 + 甘 = 甜** Picture: Your tongue (**舌**) tasting something sweet (**甘**) spells **甜** (*tián*).",
      ],
      thinkDeeper:
        "Why is watermelon called **西瓜** ('western melon') while papaya is **木瓜** ('tree melon')? Chinese classifies gourd-like fruits under **瓜** (*guā*): watermelon arrived from Central/Western Asia along the Silk Road (**西** = west), whereas tropical papaya hangs right off a tree trunk (**木** = tree)!",
    },
    {
      id: "vegetables-vocab",
      heading: "Vegetables & ingredients: 西红柿, 黄瓜, 青菜, 土豆",
      discovery: {
        problem:
          "Look at the literal meanings of three everyday vegetables in Mandarin:\n- **西红柿** (*xīhóngshì*) = 'western red persimmon'\n- **胡萝卜** (*húluóbo*) = 'Silk-Road radish'\n- **洋葱** (*yángcōng*) = 'ocean/foreign spring-onion'\n\nWhy do **西** (*west*), **胡** (*Central/Western Asian*), and **洋** (*overseas/ocean*) keep appearing inside vegetable names?",
        idea:
          "Chinese vegetable names are **edible history lessons**! Native crops got direct names (**白菜** = white veg, **青菜** = green veg), crops from the ancient overland Silk Road got **胡** or **西** (**胡萝卜**, **西瓜**), and crops arriving later by sea trade got **洋** or **番** (**洋葱**, **番茄** / **西红柿**)!",
      },
      body: `Notice how both characters of **蔬菜** (*shūcài*, vegetables) wear the plant crown **艹**!

### Core Vegetables & Tofu

| Hanzi | Pinyin | British English | Helpful Clue / Regional Note |
|---|---|---|---|
| **西红柿 / 番茄** | *xīhóngshì / fānqié* | tomato | **西红柿** (North China) = **番茄** (Singapore / South China) |
| **黄瓜** | *huángguā* | cucumber | Literally 'yellow melon'; classifier **一根黄瓜** |
| **青菜** | *qīngcài* | green leafy veg / greens | Classic dish: **炒青菜** (*chǎo qīngcài*, stir-fried greens) |
| **白菜** | *báicài* | Chinese cabbage | Source of English *bok choy*! |
| **土豆** | *tǔdòu* | potato | Literally 'earth-bean' (**土** = soil); also **马铃薯** in SG |
| **胡萝卜** | *húluóbo* | carrot | Neutral *bo*! Plain **萝卜** = white radish |
| **洋葱** | *yángcōng* | onion | 'Foreign spring-onion' |
| **蘑菇** | *mógu* | mushroom | Neutral *gu*; both characters wear **艹** |
| **豆腐** | *dòufu* | tofu / bean curd | Made from soya beans (**豆**); **一块 / 一盒豆腐** |

### Talking About Healthy Eating (健康饮食)
IGCSE 0547 Term 3 topics love linking vegetables and fruit to health advice:
- **多吃 + Healthy Food，少吃 + Junk Food**:
  **我们应该多吃蔬菜和水果，少吃糖。** (*We should eat more vegetables and fruit, and eat less sugar.*)
  Notice that **多** and **少** stand **directly before the verb 吃** as adverbs ('eat more / eat less')!
- **A + 对身体好** (*A is good for one's health*):
  **胡萝卜和青菜很有营养，对身体很好。** (*Carrots and greens are very nutritious and very good for your health.*)`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Origin clues for Chinese vegetable names and healthy eating grammar frames duo chi and dui shenti hao">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="34" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Edible History: Decoding Vegetable Names &amp; Healthy Diet Frames</text>
  <rect x="26" y="50" width="186" height="96" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="119" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">COLOUR &amp; EARTH CLUES</text>
  <text x="119" y="96" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">青菜 · 白菜 · 黄瓜</text>
  <text x="119" y="118" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">土豆 (earth-bean = potato)</text>
  <text x="119" y="136" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">豆腐 dòufu (soya bean curd)</text>
  <rect x="227" y="50" width="186" height="96" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="320" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309">SILK ROAD &amp; SEA TRADE</text>
  <text x="320" y="96" text-anchor="middle" font-family="sans-serif" font-size="14.5" font-weight="bold" fill="#1e293b">胡萝卜 (carrot)</text>
  <text x="320" y="116" text-anchor="middle" font-family="sans-serif" font-size="14.5" font-weight="bold" fill="#1e293b">西红柿 = 番茄 (tomato)</text>
  <text x="320" y="136" text-anchor="middle" font-family="sans-serif" font-size="14.5" font-weight="bold" fill="#1e293b">洋葱 (onion)</text>
  <rect x="428" y="50" width="186" height="96" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="521" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0d9488">HEALTHY ADVICE VERBS</text>
  <text x="521" y="98" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">多吃蔬菜水果</text>
  <text x="521" y="118" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#475569">duō chī (eat plenty of…)</text>
  <text x="521" y="136" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0d9488">多/少 BEFORE 吃!</text>
  <rect x="26" y="162" width="588" height="72" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="187" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">Golden Health Frame:  [Food] + 很有营养 ， 对身体很好。</text>
  <text x="320" y="214" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#15803d">每天多吃新鲜的蔬菜和水果对身体很好！ (Eating fresh veg &amp; fruit daily is great for your health!)</text>
</svg>`,
      diagramCaption:
        "Remember 西红柿 = 番茄 (tomato), keep 胡 on 胡萝卜 (carrot), and put 多/少 BEFORE 吃!",
      workedExamples: [
        {
          title: "Giving Healthy Diet Advice with 多吃 & 对身体好",
          problem:
            "Translate into Mandarin: *'We should eat plenty of vegetables and fruit.'* (Use **我们**, **应该**, **多吃**, and **蔬菜和水果**.)",
          steps: [
            "Start with Subject + Modal: **我们应该** (*wǒmen yīnggāi*, we should).",
            "Put **多** BEFORE the verb **吃** (NEVER *吃多*!): **多吃** (*duō chī*).",
            "Add the objects: **我们应该多吃蔬菜和水果。**",
          ],
          answer: "我们应该多吃蔬菜和水果。 (Wǒmen yīnggāi duō chī shūcài hé shuǐguǒ.)",
          yourTurn: {
            question:
              "Both **西红柿** and **番茄** refer to the same ingredient in Mandarin. What is it in English?",
            answer: {
              type: "text",
              accept: ["tomato", "tomatoes", "a tomato"],
              display: "tomato",
            },
            solution:
              "**西红柿** (*xīhóngshì*, Northern Mandarin) and **番茄** (*fānqié*, Singapore & Southern China) both mean **tomato**!",
          },
        },
      ],
      keyPoints: [
        "Know both **西红柿** (*xīhóngshì*) and **番茄** (*fānqié*) for 'tomato' — IGCSE listening & reading papers use both!",
        "Don't drop **胡** from **胡萝卜** (*húluóbo*, carrot): **萝卜** alone is white radish.",
        "Put **多** and **少** BEFORE the verb when giving advice: **多吃青菜** (*eat more greens*), **少喝可乐** (*drink less cola*).",
        "Use **对身体好** (*duì shēntǐ hǎo*, good for your body/health) and **很有营养** (*very nutritious*) to justify healthy choices.",
      ],
      whyItWorks:
        "In English, 'more' follows the verb ('eat more vegetables'), tempting students to write *吃多蔬菜*. In Mandarin, **多吃** treats **多** as an adverbial instruction modifying the habit ('do more of eating X'), whereas *吃多了* after the verb means 'ate too much and got a stomach ache'!",
      strategies: [
        "Singapore Dual-Vocab Advantage: Living in Singapore means you hear **番茄** & **马铃薯** locally while textbooks print **西红柿** & **土豆** — knowing both makes you unstoppable in Reading!",
        "The **多吃…对身体好** Sandwich: Works in every food, health, or lifestyle essay.",
      ],
      thinkDeeper:
        "Why is cucumber called **黄瓜** ('yellow melon') when every cucumber in the supermarket is bright green? Farmers pick cucumbers *unripe* while tender and green, but if you leave a cucumber on the vine until fully mature with seeds inside, its skin turns golden yellow!",
    },
    {
      id: "money-weights",
      heading: "Weights & Chinese money: 斤, 公斤, 元/块, 角/毛",
      discovery: {
        problem:
          "At a Beijing fruit stall, the cardboard sign reads:\n**苹果：6.50元 / 斤**\nWhen you ask **苹果怎么卖？** (*How are apples sold?*), the stallholder calls out:\n**六块五一斤！**\n\nIf you want **1 kilogram (1 公斤)** of apples, how many **斤** must you ask for, why did **元** turn into **块**, and what happened to **角 / 毛** after **五**?",
        idea:
          "Three market rules unlock every shopping task in China and Singapore:\n1. **1 公斤 (1 kg) = 2 斤** (so **1 斤 = 500 g**)! For 1 kg, ask for **两斤** (*liǎng jīn*) — costing 2 × 6.50 = **13 yuan**.\n2. **元 / 角** (*yuán / jiǎo*) is **formal/written** money on signs; **块 / 毛** (*kuài / máo*) is **spoken** everyday money.\n3. In speech, the second unit (**毛**) drops automatically when another unit preceded it: **六块五** = **六块五毛** = **6.50** (NEVER 6.05)!",
      },
      body: `### 1. Market Weights: **斤** (*jīn*) vs **公斤** (*gōngjīn*)
- **一斤** (*yì jīn*) = **500 grams** (half a kilogram)
- **半斤** (*bàn jīn*) = **250 grams** | **一斤半** (*yì jīn bàn*) = **750 grams** (1.5 jin — note **半** moves *after* **斤**!)
- **一公斤** (*yì gōngjīn*) = **两斤** (*liǎng jīn*) = **1,000 grams (1 kg)**
- Watch **两 vs 二**: always **两斤** (*liǎng jīn*) and **两公斤**, NEVER *二斤*!

### 2. Written vs Spoken Chinese Money (1 元 = 10 角 = 100 分)

| Decimal Value | Written / Price Tag (**元 / 角 / 分**) | Everyday Spoken (**块 / 毛**) | Spoken Shorthand! |
|---|---|---|---|
| **5.00** | **五元** (*wǔ yuán*) | **五块(钱)** (*wǔ kuài qián*) | **五块** |
| **3.50** | **三元五角** (*sān yuán wǔ jiǎo*) | **三块五毛(钱)** | **三块五** (*sān kuài wǔ*) |
| **12.80** | **十二元八角** | **十二块八毛(钱)** | **十二块八** (*shí'èr kuài bā*) |
| **2.05** | **两元零五分** | **两块零五分** | Must say **零** (*líng*)! |

> **Singapore vs China Currency:** China uses **人民币** (*Rénmínbì*, RMB / ¥), while Singapore uses **新币** (*Xīnbì*, SGD / S\$). Remarkably, Singaporeans ALSO say **五块钱** (*wǔ kuài qián*) and **三块半 / 三块五** for \$5.00 and \$3.50 in everyday 华语!

### 3. Two Natural Ways to Ask the Price
- **请问，[Item]多少钱一斤 / 一盒？** (*Excuse me, how much is [Item] per jin / per punnet?*)
- **老板，这个西瓜怎么卖？** (*Boss, how is this watermelon sold?* — asks both price AND unit!)`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conversion chart between jin and gongjin weights and between written yuan jiao and spoken kuai mao money">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="34" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Market Maths: Weights (斤 vs 公斤) &amp; Money (元/角 vs 块/毛)</text>
  <rect x="26" y="50" width="284" height="110" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="168" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">WEIGHT CONVERSION SCALE</text>
  <text x="168" y="98" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1e293b">1 公斤 (1 kg) = 2 斤 (两斤)</text>
  <text x="168" y="122" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1e293b">1 斤 = 500 g  |  半斤 = 250 g</text>
  <text x="168" y="144" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">一斤半 = 1.5 斤 (750 g)</text>
  <rect x="330" y="50" width="284" height="110" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="472" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0d9488">WRITTEN vs SPOKEN MONEY</text>
  <text x="472" y="98" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Tag: 三元五角 (3.50)</text>
  <text x="472" y="122" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#15803d">Spoken: 三块五毛 = 三块五!</text>
  <text x="472" y="144" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#c81e1e">Trap: 三块五 is 3.50, NEVER 3.05!</text>
  <rect x="26" y="174" width="588" height="62" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="320" y="198" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#15803d">Asking &amp; Answering Unit Price:  苹果怎么卖？ → 五块钱一斤。 (5 yuan per 500g)</text>
  <text x="320" y="221" text-anchor="middle" font-family="sans-serif" font-size="12.5" fill="#1e293b">Always use 两 before 块/斤/盒: 两块钱 · 两斤西红柿 · 两盒草莓 (keep 二 for 十二块 / 二十块!)</text>
</svg>`,
      diagramCaption:
        "Memorise 1 公斤 = 2 斤 and spoken shorthand 三块五 = 3.50 — two favourite IGCSE Listening calculation traps!",
      workedExamples: [
        {
          title: "Calculating Market Totals Across 斤 and 公斤",
          problem:
            "Tomatoes cost **四块钱一斤** (*4 yuan per jin*), and strawberries cost **十二块五一盒** (*12.50 yuan per punnet*). Mum buys **1 公斤** of tomatoes and **2 punnets** of strawberries. How much does she pay altogether (**一共多少钱**)?",
          steps: [
            "Convert **1 公斤** into **斤**: 1 公斤 = **2 斤** (**两斤**). So tomatoes cost 2 × 4 = **8 yuan**.",
            "Decode **十二块五**: spoken shorthand for **12.50 yuan**. Two punnets cost 2 × 12.50 = **25 yuan**.",
            "Add together (**一共**): 8 + 25 = **33 yuan** (**三十三块钱**).",
          ],
          answer: "33 yuan (三十三块钱)",
          yourTurn: {
            question:
              "Apples cost **六块五一斤** (*6.50 per jin*). How much do **两斤** (*2 jin* = 1 kg) of apples cost in yuan? Type a number.",
            answer: {
              type: "number",
              value: 13,
              display: "13",
            },
            solution:
              "**六块五** = 6.50 yuan per jin. Buying **两斤** (2 jin) costs 2 × 6.50 = **13** yuan.",
          },
        },
      ],
      keyPoints: [
        "**1 公斤 = 2 斤 = 1,000 g**, so if a sign gives price per **斤** and a buyer asks for **一公斤**, multiply the **斤** price by **2**!",
        "Written **元 / 角** corresponds directly to spoken **块 / 毛** (1 元 = 10 角; 1 块 = 10 毛).",
        "Spoken **三块五** = **3.50** (short for 三块五毛). However, if you add **钱** at the end, you MUST keep **毛**: **三块五毛钱** (never *三块五钱*!).",
        "Use **两** for 2 units (**两块钱**, **两毛**, **两斤**), **二** inside teens/tens (**十二块**, **二十块**, **两块二** = 2.20!).",
      ],
      whyItWorks:
        "Notice why **两块二** (*liǎng kuài èr*, 2.20) uses **两** at the front and **二** at the end! At the start, **块** is an explicit measure word right after '2' (requiring **两块**). At the end, **毛** has been dropped, leaving '2' standing alone as a bare numeral — so it reverts to **二**!",
      strategies: [
        "Unit-Check First: Before multiplying any IGCSE market problem, underline whether the price is per **斤**, per **公斤**, per **个**, or per **盒**!",
        "**买** (*mǎi*, 3rd tone = buy) vs **卖** (*mài*, 4th tone = sell): **卖** has a **十** ('plus/extra stock') on its head because the seller has goods to sell!",
      ],
      thinkDeeper:
        "In traditional Singapore & Hong Kong wet markets, an old *kati* (**司马斤**) was slightly heavier (~600 g, divided into 16 *taels* **十六两** — origin of the idiom **半斤八两**, 'half a jin vs eight taels' = six of one and half a dozen of the other!). Mainland China standardised **1 斤 = 500 g (10 两)** in 1959 to fit the metric kilogram cleanly.",
    },
    {
      id: "bargaining-tai-le",
      heading: "Shopping & bargaining: 太贵了！便宜一点儿吧",
      discovery: {
        problem:
          "Compare these two sentences spoken at a fruit stall:\n1. **榴莲有点儿贵。** (*Liúlián yǒudiǎnr guì.* — Durian is a bit expensive.)\n2. **老板，便宜一点儿吧！** (*Lǎobǎn, piányi yìdiǎnr ba!* — Boss, make it a bit cheaper!)\n\nBoth English translations say *'a bit'*, yet Sentence 1 puts **有点儿** *before* the adjective **贵**, whereas Sentence 2 puts **一点儿** *after* the adjective **便宜**. Why?",
        idea:
          "This is one of Mandarin's sharpest grammar contrasts!\n- **有点儿 + Adjective** (*yǒudiǎnr*, BEFORE adj) expresses a mild **complaint / unwanted quality** ('slightly too pricey / sour').\n- **Adjective + 一点儿** (*yìdiǎnr*, AFTER adj) expresses a **comparison or polite request to adjust** ('a little cheaper / sweeter, please!')!",
      },
      body: `At wet markets (**巴刹 / 菜市场**) and street stalls — unlike fixed-price supermarkets (**超市**) — friendly bargaining is part of daily life!

### 1. Price Reactions & Bargaining Phrases
- **贵** (*guì*, expensive — cowrie-shell money radical **贝** at the bottom!)
- **便宜** (*piányi*, cheap — **pronunciation trap**: *piányi*, NEVER *biànyí*!)
- **太贵了！** (*Tài guì le!* — Too expensive! Frame: **太 + Adjective + 了**)
- **可以便宜一点儿吗？** (*Kěyǐ piányi yìdiǎnr ma?* — Could you make it a little cheaper?)
- **便宜一点儿吧！** (*Piányi yìdiǎnr ba!* — Make it a bit cheaper, go on! Softening particle **吧**!)
- **打八折** (*dǎ bā zhé* — **20% off**, because Chinese discounts state the **80% you pay**!)

### 2. Wrapping Up the Purchase & Change (**找钱**)
- Seller: **还要别的吗？** (*Hái yào bié de ma?* — Would you like anything else?)
- Buyer: **不要了，够了。一共多少钱？** (*Nothing else, that's enough. How much altogether?*)
- Buyer: **给您二十块钱。** (*Here is 20 yuan/dollars for you.*)
- Seller: **一共十八块，找您两块！** (*18 in total — **here is 2 yuan change for you**!*)`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison between youdianr before adjective and yidianr after adjective plus bargaining and change calculation">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="34" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Bargaining Toolkit: 有点儿 vs 一点儿, 打折 &amp; 找钱</text>
  <rect x="26" y="50" width="284" height="96" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="168" y="72" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#c81e1e">有点儿 + ADJ (Mild Complaint)</text>
  <text x="168" y="99" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="bold" fill="#1e293b">草莓有点儿贵 / 有点儿酸。</text>
  <text x="168" y="121" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#475569">yǒudiǎnr BEFORE adj = slightly too…</text>
  <rect x="330" y="50" width="284" height="96" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="472" y="72" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#15803d">ADJ + 一点儿 (Request / Compare)</text>
  <text x="472" y="99" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="bold" fill="#1e293b">老板，便宜一点儿吧！</text>
  <text x="472" y="121" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#475569">yìdiǎnr AFTER adj = make it a bit …-er!</text>
  <rect x="26" y="160" width="284" height="76" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="168" y="183" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#b45309">CHINESE DISCOUNT RULE (打折)</text>
  <text x="168" y="206" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">打八折 = Pay 80% (20% OFF!)</text>
  <text x="168" y="225" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#475569">¥50 at 打八折 → 50 × 0.8 = ¥40</text>
  <rect x="330" y="160" width="284" height="76" rx="10" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="472" y="183" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#0d9488">CHANGE AT THE TILL (找钱)</text>
  <text x="472" y="206" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">给二十，一共十七块五</text>
  <text x="472" y="225" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0d9488">→ 找您两块五！ ($2.50 change)</text>
</svg>`,
      diagramCaption:
        "Never confuse 有点儿贵 ('a bit pricey') with 便宜一点儿 ('a bit cheaper'), and remember 打八折 = pay 80%!",
      workedExamples: [
        {
          title: "Bargaining + Calculating Change (找钱)",
          problem:
            "Mangoes are **十块钱一斤**. You buy **两斤** and ask **老板，便宜一点儿吧！** The seller agrees: **好吧，两斤十八块！** If you hand over **二十块钱**, how much change (**找多少钱**) do you receive, and how does the seller say it?",
          steps: [
            "Original price for 2 jin = 2 × 10 = 20 yuan, bargained down to **18 yuan** (**十八块**).",
            "Change from **20 yuan** = 20 − 18 = **2 yuan**.",
            "Remember the **两 vs 二** rule before **块**: **找您两块钱！** (*Zhǎo nín liǎng kuài qián!*).",
          ],
          answer: "2 yuan — 找您两块钱！ (Zhǎo nín liǎng kuài qián!)",
          yourTurn: {
            question:
              "Translate into Mandarin: *'Too expensive!'* (3 characters using **太…了** and **贵**):",
            answer: {
              type: "text",
              accept: ["太贵了", "tài guì le"],
              display: "太贵了！ (Tài guì le!)",
            },
            solution:
              "Wrap **太…了** around **贵**: **太贵了！** (*Tài guì le!*).",
          },
        },
      ],
      keyPoints: [
        "Pronounce **便宜** as *piányi* (2nd tone + neutral), NEVER *biànyí*!",
        "**太 + Adjective + 了** (**太贵了！ / 太甜了！**) expresses 'too …!' or enthusiastic 'so …!' (**太好吃了！**).",
        "**有点儿 + Adj** = mild complaint (*有点儿酸*, a bit too sour); **Adj + 一点儿** = comparative adjustment (*便宜一点儿*, a bit cheaper). Never say *一点儿贵* or *有点儿便宜*!",
        "**找您[Amount]** means 'Here is [Amount] change for you', and **打N折** means 'multiply the original price by N/10' (**打七折** = pay 70% = 30% off!).",
      ],
      whyItWorks:
        "Why does **找钱** (*zhǎo qián*, literally 'look for money') mean 'give change'? In traditional market stalls before electronic tills, a vendor had to rummage through a wooden cash pouch to *search out* small coins to make up the exact difference owed back to the customer!",
      strategies: [
        "Polite Bargaining Combo: Pair a compliment + quantity + gentle request: **您的草莓真新鲜！我买两盒，便宜一点儿吧！**",
        "Discount Quick-Multiply: See **打九折**? Multiply by **0.9**. See **打七五折**? Multiply by **0.75**!",
      ],
      thinkDeeper:
        "Why can you say **这件衣服有点儿贵** ('This outfit is a bit expensive'), yet you CANNOT say *这件衣服有点儿便宜* in normal situations? Because **有点儿** carries an inbuilt nuance of *falling short of what you want* — and nobody complains that something is 'unfortunately a bit cheap'!",
    },
    {
      id: "market-dialogue",
      heading: "At a wet market or supermarket (巴刹与超市)",
      discovery: {
        problem:
          "Read this snippet between Grandma and a Tiong Bahru wet-market (**巴刹**) vendor:\n- 奶奶：**老板，今天的青菜怎么卖？**\n- 老板：**很新鲜！两块五一斤。您要几斤？**\n- 奶奶：**我要两斤青菜。西红柿多少钱一斤？**\n- 老板：**西红柿四块钱一斤。**\n- 奶奶：**我买一斤半西红柿。一共多少钱？**\n\nWork out Grandma's exact total bill before reading the solution!",
        idea:
          "Break market dialogues into clean item lines:\n1. **两斤青菜** at **两块五 (2.50)** per jin → 2 × 2.50 = **5.00**.\n2. **一斤半西红柿** (**1.5 jin**, because **半** after **斤** = +0.5!) at **四块 (4.00)** per jin → 1.5 × 4.00 = **6.00**.\n3. Total (**一共**) = 5.00 + 6.00 = **11.00** (**十一块钱**).",
      },
      body: `In Singapore, families shop at both traditional **巴刹** (*bāshā*, wet markets — unbeatable early-morning freshness and friendly chat) and air-conditioned **超市** (*chāoshì*, supermarkets like FairPrice — clear metric **公斤** labels, **打折** promotions, and mobile payment).

### Anatomy of a Complete 6-Turn Market Dialogue

| Turn | Speaker | Mandarin | Function |
|---|---|---|---|
| 1 | 顾客 (Buyer) | **老板，请问草莓怎么卖？** | Polite greeting + ask unit price |
| 2 | 老板 (Seller) | **今天的草莓又大又甜，十五块钱一盒！** | Praise freshness + quote price |
| 3 | 顾客 | **十五块有点儿贵！我买两盒，便宜一点儿吧。** | Mild reaction + bulk bargain |
| 4 | 老板 | **好吧，两盒二十六块！还要别的吗？** | Offer deal + ask 'anything else?' |
| 5 | 顾客 | **再来一串香蕉吧。一共多少钱？** | Add second item + ask total |
| 6 | 老板 | **香蕉四块，一共三十块。您给五十，找您二十块！** | Calculate total + hand back change |

### Comparing **巴刹** vs **超市** in IGCSE Writing
To shine in 80–130 character Term 3 essays, compare both shopping venues using **虽然…但是…** and **不但…而且…**:
- **虽然巴刹没有冷气，有点儿热，但是那里的蔬菜和水果又新鲜又便宜，还可以跟老板讲价！** (*Although the wet market has no air-conditioning and is a bit hot, the veg and fruit there are both fresh and cheap, and you can bargain with the stallholder!*)`,
      workedExamples: [
        {
          title: "Tracking a Multi-Item Market Dialogue",
          problem:
            "Read the final turns at a fruit stall:\n- 妈妈：**我要一个西瓜和三斤橙子。西瓜多少钱一个？**\n- 老板：**这个大西瓜十二块。橙子六块钱一斤，三斤十八块，给您便宜两块，算十六块吧！**\n- 妈妈：**太好了，谢谢！给您三十块钱。**\n\n1) How much do the oranges cost *after* the discount?\n2) How much change (**找多少钱**) should the seller give Mum?",
          steps: [
            "Watermelon = **12 yuan** (**十二块**).",
            "Oranges: 3 × 6 = 18 yuan, minus a 2-yuan discount (**便宜两块，算十六块**) = **16 yuan**.",
            "Total bill = 12 + 16 = **28 yuan**. Mum pays **30 yuan**, so change = 30 − 28 = **2 yuan** (**找您两块**).",
          ],
          answer: "1) 16 yuan; 2) 2 yuan change (找您两块).",
          yourTurn: {
            question:
              "At a market stall, a customer buys **一斤半** (*yì jīn bàn*) of mushrooms at **八块钱一斤** (8 yuan per jin). How much does that cost in yuan? Type a number.",
            answer: {
              type: "number",
              value: 12,
              display: "12",
            },
            solution:
              "**一斤半** = 1.5 jin. At 8 yuan per jin: 1.5 × 8 = **12** yuan.",
          },
        },
      ],
      keyPoints: [
        "Distinguish **半斤** (*bàn jīn* = 0.5 jin = 250g) from **一斤半** (*yì jīn bàn* = 1.5 jin = 750g).",
        "Use polite address **老板** (*lǎobǎn*, boss/stallholder) or **阿姨 / 叔叔** (*auntie / uncle*) and respectful **您** (*nín*).",
        "Know the full checkout loop: **还要别的吗？** → **不要了，够了。一共多少钱？** → **给您…** → **找您…**.",
        "Compare Singapore's **巴刹** (fresh, lively, bargaining) and **超市** (air-conditioned, convenient, **打折**) for top IGCSE cultural marks.",
      ],
      whyItWorks:
        "Notice how **再来一串香蕉** ('come another bunch of bananas') uses **来** as a brisk, idiomatic ordering/buying verb at stalls and restaurants — much livelier than repeating **我要买** in every single line!",
      strategies: [
        "Jot a 3-Column Scratch Table in Listening: Write `Item | Qty × Unit Price | Subtotal` as soon as a market audio track starts — examiners love changing the price mid-dialogue via bargaining!",
        "Check **找** (*change*) vs **一共** (*total*): Always read the final question word carefully so you don't write the total bill when asked how much *change* the buyer got!",
      ],
      thinkDeeper:
        "Why is Singapore's wet market called **巴刹** (*bāshā*) in Mandarin? Early Hokkien, Teochew, and Cantonese settlers borrowed Malay *pasar* (itself from Persian *bāzār*, 'bazaar') — making **巴刹** a wonderful linguistic crossroads of Persian, Malay, and Chinese heritage!",
    },
  ],
  learn: {
    flashcards: [
      { front: "水果 vs 蔬菜 (shuǐguǒ vs shūcài)", back: "fruit ('water-fruit') vs vegetables (both chars have 艹 plant top!)" },
      { front: "草莓 · 葡萄 · 西瓜 · 榴莲", back: "strawberry (cǎoméi) · grape (pútao) · watermelon (xīguā) · durian (liúlián)" },
      { front: "西红柿 = 番茄 (xīhóngshì = fānqié)", back: "tomato (Northern Mandarin vs Singapore/Southern Mandarin)" },
      { front: "土豆 · 胡萝卜 · 黄瓜 · 青菜 · 豆腐", back: "potato · carrot (keep 胡!) · cucumber · leafy greens · tofu" },
      { front: "又新鲜又甜 (yòu xīnxiān yòu tián)", back: "both fresh and sweet (NO 是 before adjectives!)" },
      { front: "多吃蔬菜，对身体好", back: "eat plenty of vegetables; good for your health (多 goes BEFORE 吃!)" },
      { front: "一斤 vs 一公斤 (yì jīn vs yì gōngjīn)", back: "1 斤 = 500g; 1 公斤 = 1kg = 2 斤 (两斤)" },
      { front: "半斤 vs 一斤半", back: "半斤 (bàn jīn) = 0.5 jin (250g); 一斤半 (yì jīn bàn) = 1.5 jin (750g)" },
      { front: "三元五角 = 三块五(毛)", back: "3.50 yuan/dollars (written 元/角 vs spoken 块/毛; NEVER 3.05!)" },
      { front: "怎么卖？ (zěnme mài?)", back: "How is it sold? / What's the price per unit? (mài 4th tone = sell; mǎi 3rd tone = buy)" },
      { front: "便宜 (piányi) vs 贵 (guì)", back: "cheap (pronounced piányi, NOT biànyí!) vs expensive" },
      { front: "有点儿贵 vs 便宜一点儿吧", back: "有点儿 + Adj = slightly too pricey (complaint); Adj + 一点儿 = make it a bit cheaper (request)" },
      { front: "打八折 (dǎ bā zhé)", back: "20% off — you PAY 80% of the original price!" },
      { front: "还要别的吗？ → 够了。找您两块。", back: "Anything else? → That's enough. Here is $2 change for you." },
    ],
    mustKnow: [
      "Can you name eight fruits and eight vegetables in Simplified Hanzi and tone-marked Pinyin (including 榴莲, 草莓, 西红柿/番茄, 胡萝卜, 土豆, 豆腐)?",
      "Can you pair fruits and veg with natural classifiers (一盒草莓, 一串葡萄, 一根香蕉/黄瓜, 一块西瓜/豆腐)?",
      "Can you describe food without 是 using 很 and 又…又… (又新鲜又甜, 又大又多汁)?",
      "Can you give healthy diet advice using 多吃/少吃 and 对身体好?",
      "Can you convert instantly between 斤 (500g), 半斤 (250g), 一斤半 (750g), and 公斤 (1kg = 2斤)?",
      "Can you read written prices (六元八角) and spoken prices (六块八 = 6.80 vs 六块零八分 = 6.08)?",
      "Can you distinguish 买 (mǎi, buy) from 卖 (mài, sell) and pronounce 便宜 accurately as piányi?",
      "Can you contrast 有点儿贵 (before adj) with 便宜一点儿吧 (after adj) and calculate 打折 discounts?",
      "Can you complete a full 巴刹/超市 shopping dialogue including 还要别的吗, 一共多少钱, and 找钱?",
    ],
    misconceptions: [
      {
        wrong: "这些草莓是很甜。 (Putting 是 before an adjective like English 'are sweet'.)",
        right: "这些草莓很甜。 OR 这些草莓又大又甜。 (Mandarin stative adjectives link directly with 很 or 又…又…, NEVER 是!)",
      },
      {
        wrong: "三块五 = $3.05. (Misreading the dropped second unit as cents.)",
        right: "三块五 = 三块五毛 = $3.50! ($3.05 MUST insert 零: 三块零五分.)",
      },
      {
        wrong: "老板，有点儿便宜吧！ (Using 有点儿 before 便宜 to ask for a discount.)",
        right: "老板，便宜一点儿吧！ (Requests/comparisons put 一点儿 AFTER the adjective; 有点儿 before an adjective complains!)",
      },
      {
        wrong: "打八折 means 80% off! (Applying English '% off' logic to 折.)",
        right: "打八折 means you PAY 80% (i.e. 20% off)! Multiply original price × 0.8.",
      },
      {
        wrong: "我要买二斤苹果和二块豆腐。 (Using 二 before measure words 斤 and 块.)",
        right: "我要买两斤苹果和两块豆腐。 (Always use 两 before classifiers/units; keep 二 for 十二/二十 or bare trailing decimals like 两块二!)",
      },
      {
        wrong: "我们应该吃多蔬菜。 (Copying English 'eat more vegetables'.)",
        right: "我们应该多吃蔬菜。 (Adverbial 多/少 stands BEFORE the verb 吃!)",
      },
    ],
    examMistakes: [
      "Forgetting to double the price when a stall sign quotes per 斤 (500g) and the audio/question buys 一公斤 (1kg = 2斤)!",
      "Confusing 半斤 (0.5 jin) with 一斤半 (1.5 jin) in listening comprehension totals.",
      "Writing the total bill (一共) when the IGCSE question actually asks 老板应该找她多少钱？ ('How much change should the seller give her?').",
      "Mispronouncing 便宜 as *fāngbiàn*'s *biàn* instead of *piányi* in IGCSE Speaking roleplays.",
      "Mixing up 买 (mǎi, buy) and 卖 (mài, sell) — e.g. misreading 卖完了 ('sold out') as 'finished buying'.",
      "Dropping 胡 from 胡萝卜 (carrot) and accidentally writing 萝卜 (white radish).",
      "Saying *三块五钱* — if you include the noun 钱 at the end, you CANNOT drop 毛: say 三块五 OR 三块五毛钱!",
    ],
    mnemonics: [
      {
        topic: "买 (mǎi, buy) vs 卖 (mài, sell)",
        device: "Extra stock 十 on top = SELL (卖, falling 4th tone!)",
        explanation: "When your stall has a pile of stock (十) on top, you shout loudly in a falling 4th tone (mài!) to SELL it; once your basket is empty on top, you dip into 3rd tone (mǎi) to BUY more!",
      },
      {
        topic: "鲜 (xiān, fresh) & 甜 (tián, sweet)",
        device: "鱼 + 羊 = 鲜 (fresh); 舌 + 甘 = 甜 (sweet)",
        explanation: "Freshly caught fish (鱼) + tender lamb (羊) = ultimate freshness (新鲜); a tongue (舌) tasting 甘 (sweetness) = 甜!",
      },
      {
        topic: "贵 (guì, expensive) Shell Radical",
        device: "Cowrie shell 贝 at the base of 贵 & 财 & 货",
        explanation: "3,000 years ago in Shang-dynasty China, rare sea shells (贝) were money — anything costing lots of shells was 贵 (expensive)!",
      },
      {
        topic: "有点儿 vs 一点儿 Position Lock",
        device: "Complaint BEFORE (有点儿贵), Bargain AFTER (便宜一点儿)",
        explanation: "Grumble upfront with 有点儿贵, then nudge the price down afterwards with 便宜一点儿吧!",
      },
    ],
    realWorld: [
      {
        title: "Singapore Wet Markets (巴刹) vs FairPrice 超市",
        detail: "At neighbourhood 巴刹 like Tiong Bahru or Tekka Market, early-morning shoppers buy leafy 青菜, 豆腐, and tropical fruits in 斤/公斤 or bundles, chatting in Mandarin with aunties and uncles.",
        emoji: "🥬",
      },
      {
        title: "Durian (榴莲) & Mangosteen (山竹) Season in Geylang",
        detail: "In Singapore, spiky 榴莲 (Mao Shan Wang 猫山王!) is crowned the 'King of Fruits' (and famously banned on the MRT due to its aroma), paired traditionally with cooling purple 山竹 ('Queen of Fruits').",
        emoji: "👑",
      },
      {
        title: "Cashless Markets in China: WeChat Pay & Alipay",
        detail: "Even tiny vegetable stalls in Beijing or Chengdu hang green and blue QR codes so shoppers scan and pay exact amounts like 八块六毛 (¥8.60) in two seconds — no loose 毛 coins needed!",
        emoji: "📲",
      },
      {
        title: "Why Chinese People Say '茄子!' (Aubergine!) for Photos",
        detail: "Instead of English 'Cheese!', Mandarin speakers shout 茄子！ (Qiézi!) when taking group photos because the long rising syllable qié stretches your mouth into a natural grin!",
        emoji: "📸",
      },
    ],
    videos: [
      {
        title: "Buying Fruit & Bargaining in Mandarin Chinese (买水果)",
        channel: "Everyday Chinese",
        url: "https://www.youtube.com/results?search_query=buying+fruit+bargaining+mandarin+chinese+dialogue",
      },
      {
        title: "Chinese Money Explained: 元/块, 角/毛 & Spoken Prices",
        channel: "Grace Mandarin Chinese",
        url: "https://www.youtube.com/results?search_query=chinese+money+kuai+mao+yuan+jiao+explained",
      },
      {
        title: "有点儿 (yǒudiǎnr) vs 一点儿 (yìdiǎnr) — Never Mix Them Up!",
        channel: "Chinese Zero to Hero",
        url: "https://www.youtube.com/results?search_query=youdianr+vs+yidianr+chinese+grammar",
      },
      {
        title: "Fruits & Vegetables Vocabulary in Mandarin Chinese",
        channel: "Little Fox Chinese / Mandarin Click",
        url: "https://www.youtube.com/results?search_query=fruits+and+vegetables+in+mandarin+chinese+vocabulary",
      },
    ],
    formulas: [
      {
        name: "Dual Description (Both… and…)",
        formula: "Subject + 又 + Adjective 1 + 又 + Adjective 2",
        note: "这盒草莓又新鲜又甜！ (Zhè hé cǎoméi yòu xīnxiān yòu tián!)",
      },
      {
        name: "Healthy Diet Advice",
        formula: "多吃 + [Veg/Fruit] ， 对身体很好",
        note: "每天多吃蔬菜和水果，对身体很好。",
      },
      {
        name: "Asking & Quoting Market Price",
        formula: "[Item] + 怎么卖 / 多少钱一斤？ → [Price] + 一斤",
        note: "西红柿怎么卖？ 四块五一斤。 (4.50 per 500g)",
      },
      {
        name: "Complaint vs Polite Bargain",
        formula: "有点儿 + Adjective  vs  Adjective + 一点儿 + 吧",
        note: "有点儿贵！老板，便宜一点儿吧！",
      },
      {
        name: "Market Total & Change Formula",
        formula: "1 公斤 = 2 斤  |  找钱 = Paid − 一共",
        note: "一共十八块，您给二十，找您两块！",
      },
    ],
  },
};
