import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "eating-out",
  title: "出去吃饭 — Eating Out & Ordering at a Restaurant",
  strand: "Term 3 · Food & Grammar",
  icon: "🥢",
  summary:
    "Step confidently into any Chinese restaurant or Singapore hawker centre: get seated, order dishes with 来 and 点, customize the five flavours (酸甜苦辣咸), settle the bill, and write vivid reviews.",
  intro:
    "Whether you are queueing at a bustling Singapore **小贩中心** (*xiǎofàn zhōngxīn*, hawker centre), scanning a QR code (**扫码点菜**) at an Orchard Road **餐厅** (*cāntīng*), or sharing Peking roast duck with family in a Beijing **饭馆** (*fànguǎn*), **出去吃饭** (*chūqù chīfàn*, eating out) is one of the most rewarding real-world Mandarin skills you can learn. In this topic you will master every stage of a meal out — from **欢迎光临！请问几位？** at the door right through to **服务员，买单！** and writing high-scoring IGCSE restaurant reviews.",
  guide: [
    {
      id: "entering-seating",
      heading: "Arriving at a restaurant: 请问几位？菜单",
      discovery: {
        problem:
          "When you walk into a restaurant in Beijing or Singapore, the server (**服务员**) smiles and asks **「欢迎光临！请问几位？」** (*Huānyíng guānglín! Qǐngwèn jǐ wèi?*). Notice they use **位** (*wèi*) instead of **个** (*gè*). Meanwhile, on the table card you see **座位** (*zuòwèi*), while the server says **「请坐！」** (*Qǐng zuò!*). Why does Mandarin switch from **个 → 位** and from **坐 → 座**?",
        idea:
          "**位** (*wèi*) is the polite, respectful classifier for guests and customers — asking *几个？* would sound blunt! And look at **坐** vs **座**: **坐** (two people **人人** sitting on the ground **土**) is the **verb 'to sit'**, while adding the shelter/building radical **广** on top creates **座**, the **noun 'seat'**!",
      },
      body: `### 1. Where Are We Eating Out? (**一家 + Venue**)

Notice that restaurants, cafés and shops take the classifier **家** (*jiā*, establishment):

| Mandarin | Pinyin | English | Context Note |
|---|---|---|---|
| **一家饭馆** | *yī jiā fànguǎn* | a restaurant | Everyday / traditional word (food radical **饣** in both!) |
| **一家餐厅** | *yī jiā cāntīng* | a restaurant / dining hall | Modern restaurants (**中餐馆** vs **西餐厅**) |
| **小贩中心** | *xiǎofàn zhōngxīn* | hawker centre | Open-air Singapore community food hub |
| **食阁** | *shígé* | food court | Air-conditioned mall food court (e.g. on **乌节路**) |
| **咖啡店** | *kāfēidiàn* | café / kopitiam | Modern café or neighbourhood kopitiam |

### 2. Doorway Dialogue: Getting Seated & Asking for the Menu

- **服务员** (*fúwùyuán*, server): **欢迎光临！请问你们有几位？** (*Welcome! Excuse me, how many in your party?*)
- **客人** (*kèrén*, customer): **我们有四位 / 四个人。靠窗户有座位吗？** (*There are four of us. Is there a seat by the window?*)
- **服务员**: **有，这边请坐！这是菜单。** (*Yes, please sit over here! Here is the menu.*)
- **客人**: **谢谢！请问你们有什么特色菜？** (*Thank you! May I ask what signature dishes you have?*)`,
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step restaurant arrival flow in Mandarin from welcome greeting to viewing the menu"><rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="320" y="34" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">进餐厅四步曲 — Arriving &amp; Getting Seated</text><rect x="22" y="58" width="136" height="172" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/><text x="90" y="84" text-anchor="middle" font-size="13" font-weight="bold" fill="#c81e1e">1. 欢迎 (Greet)</text><text x="90" y="114" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">欢迎光临！</text><text x="90" y="136" text-anchor="middle" font-size="13" fill="#1e293b">请问几位？</text><text x="90" y="166" text-anchor="middle" font-size="11" fill="#475569">Huānyíng guānglín!</text><text x="90" y="184" text-anchor="middle" font-size="11" fill="#475569">Qǐngwèn jǐ wèi?</text><text x="90" y="212" text-anchor="middle" font-size="11" fill="#c81e1e">位 = polite guest MW</text><rect x="176" y="58" width="136" height="172" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/><text x="244" y="84" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">2. 人数 (Party)</text><text x="244" y="114" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">我们有四位。</text><text x="244" y="136" text-anchor="middle" font-size="13" fill="#1e293b">有座位吗？</text><text x="244" y="166" text-anchor="middle" font-size="11" fill="#475569">Wǒmen yǒu sì wèi.</text><text x="244" y="184" text-anchor="middle" font-size="11" fill="#475569">Yǒu zuòwèi ma?</text><text x="244" y="212" text-anchor="middle" font-size="11" fill="#b45309">座 = seat (noun)</text><rect x="330" y="58" width="136" height="172" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/><text x="398" y="84" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">3. 入座 (Seat)</text><text x="398" y="114" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">这边请坐！</text><text x="398" y="136" text-anchor="middle" font-size="13" fill="#1e293b">一张桌子</text><text x="398" y="166" text-anchor="middle" font-size="11" fill="#475569">Zhèbiān qǐng zuò!</text><text x="398" y="184" text-anchor="middle" font-size="11" fill="#475569">yī zhāng zhuōzi</text><text x="398" y="212" text-anchor="middle" font-size="11" fill="#0d9488">坐 = sit (verb)</text><rect x="484" y="58" width="134" height="172" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/><text x="551" y="84" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">4. 菜单 (Menu)</text><text x="551" y="114" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">可以看菜单吗？</text><text x="551" y="136" text-anchor="middle" font-size="13" fill="#1e293b">有什么特色菜？</text><text x="551" y="166" text-anchor="middle" font-size="11" fill="#475569">càidān = menu</text><text x="551" y="184" text-anchor="middle" font-size="11" fill="#475569">tèsècài = speciality</text><text x="551" y="212" text-anchor="middle" font-size="11" fill="#15803d">扫码点菜 QR order</text></svg>',
      diagramCaption:
        "From stepping through the door to opening the menu: notice 位 (polite classifier), 坐 (verb: sit) vs 座 (noun: seat).",
      workedExamples: [
        {
          title: "Asking politely for a menu and signature dishes",
          problem:
            "Translate into polite Mandarin: 'Waiter, may we look at the menu?'",
          steps: [
            "Address the server politely first: **服务员** (*fúwùyuán*).",
            "Use **我们可以……吗？** ('May we…?') + **看菜单** (*kàn càidān*, look at the menu) or **看一下菜单** (softened with **一下**).",
            "Combine smoothly: **服务员，我们可以看菜单吗？**",
          ],
          answer: "服务员，我们可以看菜单吗？ (Fúwùyuán, wǒmen kěyǐ kàn càidān ma?)",
          yourTurn: {
            question:
              "When the waiter asks **「请问几位？」**, how do you reply 'Four people (polite)' in Mandarin (Hanzi or toned Pinyin)?",
            answer: {
              type: "text",
              accept: [
                "四位",
                "我们有四位",
                "我们四位",
                "我们有四个人",
                "四个人",
                "sì wèi",
                "wǒmen yǒu sì wèi",
                "wǒmen sì wèi",
                "wǒmen yǒu sì gè rén",
                "sì gè rén",
              ],
              display: "四位 / 我们有四位。 (Sì wèi / Wǒmen yǒu sì wèi.)",
            },
            solution:
              "Echo the polite guest classifier **位** (*wèi*): **四位** (or **我们有四位** / **我们有四个人**).",
          },
        },
      ],
      keyPoints: [
        "Restaurants and shops take the classifier **家** (*jiā*): **一家中国饭馆**, **一家西餐厅**.",
        "**小贩中心** (*xiǎofàn zhōngxīn*, hawker centre) vs **食阁** (*shígé*, indoor food court) captures Singapore dining accurately.",
        "**几位？** (*jǐ wèi?*) uses the polite classifier **位** for customers.",
        "Distinguish **请坐** (*qǐng zuò*, please sit — verb) from **座位** (*zuòwèi*, seat — noun with **广**).",
      ],
      whyItWorks:
        "Why are restaurants counted with **家** (*jiā*, 'family/home')? Historically in China, inns, teahouses and restaurants were family-run establishments occupying a household courtyard — so **一家饭馆** literally meant 'one family-house restaurant', and that classifier stayed for modern businesses, supermarkets and hospitals too!",
      strategies: [
        "Polite Opener Pair: Start staff questions with 服务员，请问… to sound natural and respectful.",
        "广 Shelter Check: 广 + 坐 = 座 (a physical seat under a roof); bare 坐 = action 'to sit'.",
      ],
      thinkDeeper:
        "At a Singapore **小贩中心**, there is no **服务员** greeting you with **请问几位？** — instead locals reserve a **座位** with a packet of tissues (*chope*!) before queueing (**排队**) at stalls. How would you explain that difference in two Mandarin sentences to a friend from Beijing?",
    },
    {
      id: "ordering-dishes",
      heading: "Ordering food & drinks: 点菜, 来一碗…, 我要…",
      discovery: {
        problem:
          "Compare these two sentences:\n1. **现在可以点菜了吗？** (*Are we ready to order dishes now?*)\n2. *我想点菜一只北京烤鸭。* (✗ UNGRAMMATICAL!)\nWhy is Sentence 1 completely right while Sentence 2 is wrong — and why do native speakers constantly start orders with the verb **来** (*lái*, literally 'come'), as in **来一碗牛肉面，来一盘饺子**?",
        idea:
          "**点菜** (*diǎncài*) is a **Verb + Object** compound (**点** = order + **菜** = dishes)! When no specific dish follows, keep **菜** (**点菜** = 'order food'). The moment you name a specific dish, **北京烤鸭** replaces **菜**, so you use **点** alone: **我想点北京烤鸭**! And **来** ('bring over / let's have…') is the liveliest, most authentic spoken verb for ordering from a server!",
      },
      body: `### 1. Three Natural Ways to Order (**点 · 要 · 来**)

When the server asks **「你们想点什么？」** (*What would you like to order?*), mix these three native patterns:

| Pattern | Example | Nuance |
|---|---|---|
| **我想点 + Dish** | **我想点一盘西红柿炒鸡蛋。** | Polite & standard ('I'd like to order…') |
| **我要 + Portion + Dish** | **我要一份海南鸡饭和一杯冰绿茶。** | Direct & clear — great at hawker stalls! |
| **(请给我们) 来 + Qty + MW + Dish** | **来一碗牛肉面、一盘饺子、两杯苹果汁！** | Idiomatic restaurant Mandarin ('Bring us…') |

Want another round of something delicious? Put **再** (*zài*, again / another) right before **来**: **服务员，再来一盘小笼包，再来两碗米饭！**

### 2. Essential Restaurant Measure Words & Closing the Order

- **一道菜** (*yī dào cài*) — one course / cooked dish (**我们点了四道菜**).
- **一份…** (*yī fèn…*) — one portion / set (**一份午餐套餐**, one lunch set).
- **一碗 / 一盘 / 一杯 / 一瓶** — one bowl / plate / cup / bottle.
- Closing smoothly when the server asks **「还要别的吗？」** (*Would you like anything else?*):
  - **够了，谢谢！** (*Gòu le, xièxie!* — That's enough, thank you!)`,
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ordering formula diagram showing dian, yao and lai plus number, measure word and dish"><rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="320" y="34" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">点菜黄金公式 — Ordering Dishes Like a Native Speaker</text><rect x="24" y="56" width="166" height="132" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/><text x="107" y="82" text-anchor="middle" font-size="14" font-weight="bold" fill="#c81e1e">Ordering Verb</text><text x="107" y="110" text-anchor="middle" font-size="13" fill="#1e293b">我想点… (polite)</text><text x="107" y="136" text-anchor="middle" font-size="13" fill="#1e293b">我要… (direct)</text><text x="107" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="#c81e1e">来… / 再来… (native!)</text><text x="206" y="126" text-anchor="middle" font-size="22" font-weight="bold" fill="#64748b">+</text><rect x="222" y="56" width="186" height="132" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/><text x="315" y="82" text-anchor="middle" font-size="14" font-weight="bold" fill="#b45309">Qty (两!) + Classifier</text><text x="315" y="108" text-anchor="middle" font-size="13" fill="#1e293b">一碗 (bowl) · 一盘 (plate)</text><text x="315" y="132" text-anchor="middle" font-size="13" fill="#1e293b">两杯 (cups) · 一份 (portion)</text><text x="315" y="156" text-anchor="middle" font-size="13" fill="#1e293b">一道 (course) · 一条 (fish)</text><text x="424" y="126" text-anchor="middle" font-size="22" font-weight="bold" fill="#64748b">+</text><rect x="440" y="56" width="176" height="132" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/><text x="528" y="82" text-anchor="middle" font-size="14" font-weight="bold" fill="#15803d">Dish / Drink</text><text x="528" y="108" text-anchor="middle" font-size="13" fill="#1e293b">牛肉面 · 饺子</text><text x="528" y="132" text-anchor="middle" font-size="13" fill="#1e293b">海南鸡饭 · 蒸鱼</text><text x="528" y="156" text-anchor="middle" font-size="13" fill="#1e293b">冰水 · 珍珠奶茶</text><rect x="24" y="202" width="592" height="36" rx="8" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.2"/><text x="320" y="225" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">服务员：「还要别的吗？」 → 客人：「够了，谢谢！」 (Never say *点菜牛肉面* — drop 菜!)</text></svg>',
      diagramCaption:
        "Combine 点 / 要 / 来 with Quantity + Classifier + Dish, and close politely with 够了，谢谢！",
      workedExamples: [
        {
          title: "Ordering a full meal with 来",
          problem:
            "Translate into natural restaurant Mandarin: 'Bring one bowl of beef noodles, one plate of dumplings, and two glasses of iced water.'",
          steps: [
            "Lead with the colloquial ordering verb **来** (*lái*, bring / let's have).",
            "Pair each item with its exact container classifier (and **两** for 2!): **一碗牛肉面** (bowl), **一盘饺子** (plate), **两杯冰水** (glasses).",
            "Join cleanly: **来一碗牛肉面、一盘饺子、两杯冰水。** (or with **和** before the last item).",
          ],
          answer: "来一碗牛肉面、一盘饺子、两杯冰水。 (Lái yī wǎn niúròumiàn, yī pán jiǎozi, liǎng bēi bīngshuǐ.)",
          yourTurn: {
            question:
              "When the waiter asks **「还要别的吗？」** ('Would you like anything else?'), how do you reply 'That's enough, thank you!' in Mandarin (Hanzi or toned Pinyin)?",
            answer: {
              type: "text",
              accept: [
                "够了，谢谢",
                "够了谢谢",
                "谢谢，够了",
                "gòu le, xièxie",
                "xièxie, gòu le",
              ],
              display: "够了，谢谢！ (Gòu le, xièxie!)",
            },
            solution:
              "**够了** (*gòu le*, 'that's enough') + **谢谢** (*xièxie*, 'thank you'): **够了，谢谢！**",
          },
        },
      ],
      keyPoints: [
        "**点菜** means 'to order food' in general; drop **菜** when naming a dish (**点一盘炒饭**, never *点菜一盘炒饭*!).",
        "**来 + Number + Classifier + Dish** (**来一碗…**, **来一盘…**, **来一杯…**) is authentic everyday ordering Mandarin.",
        "**再来…** (*zài lái…*) asks for 'another / one more…' (**再来一碗米饭**).",
        "Use **道** (*dào*) for restaurant courses (**四道菜**) and **份** (*fèn*) for portions or set meals (**一份套餐**).",
      ],
      whyItWorks:
        "Separable verb-object compounds (**离合词**, *líhécí*) like **点菜** (order-dishes), **吃饭** (eat-meal), **排队** (line-up-queue), and **买单** (pay-bill) already contain a built-in generic object! Just as you wouldn't say *'I ate-a-meal noodles'* in English, Mandarin drops the generic **菜** or **饭** as soon as a specific dish steps into the object slot.",
      strategies: [
        "Drop-菜 Check: General = 点菜; Specific dish = 点 + Dish.",
        "来 Trio Rhythm: Practise ordering in threes — 来一碗…，一盘…，两杯…!",
      ],
      thinkDeeper:
        "Where do we place **了** when saying 'We have already ordered'? Because **点菜** is a separable verb + object, **了** slips *inside* between **点** and **菜**: **我们已经点了菜** (or at the very end for a new state: **我们点菜了**)! Compare that with **排了半个小时的队** ('queued for half an hour').",
    },
    {
      id: "five-flavours",
      heading: "The five flavours & dietary requests: 酸甜苦辣咸",
      discovery: {
        problem:
          "Traditional Chinese culinary philosophy groups all tastes around **五味** (*wǔwèi*, the Five Flavours): **酸、甜、苦、辣、咸** (*suān, tián, kǔ, là, xián*). Look closely at three of those characters:\n- **甜** (*tián*, sweet) = **舌** + **甘**\n- **酸** (*suān*, sour) = **酉** + 夋 (and compare **醋** *cù*, vinegar!)\n- **苦** (*kǔ*, bitter) = **艹** + 古\nCan you figure out what **舌**, **酉**, and **艹** picture on the plate or tongue?",
        idea:
          "**舌** (*shé*) is your **tongue** tasting something sweet (**甘**)! **酉** (*yǒu*) is an ancient **fermentation jar** — fermented wine turns **sour** (**酸**) into **vinegar** (**醋**)! And **艹** is the **grass/herb** radical on top of **苦** because medicinal herbs and bitter greens (**苦瓜**) taste bitter!",
      },
      body: `### 1. Describing Taste (**味道怎么样？** *How does it taste?*)

| Mandarin | Pinyin | Meaning | Classic Example |
|---|---|---|---|
| **酸** | *suān* | sour / tangy | **酸辣汤有一点儿酸。** (Hot-and-sour soup is a bit tangy.) |
| **甜** | *tián* | sweet | **这道酸甜鱼酸酸甜甜的。** (Sweet-and-sour fish — note Mandarin says *sour-sweet*!) |
| **苦** | *kǔ* | bitter | **黑咖啡有点儿苦。** (Black coffee is slightly bitter.) |
| **辣** | *là* | spicy / chilli-hot | **四川火锅又麻又辣！** (Sichuan hotpot is numbing and spicy!) |
| **咸** | *xián* | salty / savoury | **今天的汤太咸了。** (Today's soup is too salty.) |
| **清淡** | *qīngdàn* | light / mild | **广东菜很清淡，不油腻。** (Cantonese food is light and not greasy.) |
| **香** | *xiāng* | fragrant / savoury | **烤鸭真香啊！** (The roast duck smells and tastes amazing!) |

> **TRAP ALERT — 好吃 vs 好喝**: Solid foods are **好吃** (*hǎochī*, 'good to eat': **饺子很好吃**), whereas ALL drinks AND soups (**汤**) MUST be **好喝** (*hǎohē*, 'good to drink': **绿茶很好喝**, **鱼汤很好喝**)!

### 2. Polite Dietary Requests & Allergies (**忌口**)

Tell the server how you want your food prepared BEFORE the kitchen starts cooking:
- **不要太辣 / 不要辣椒** (*bù yào tài là / bù yào làjiāo*) — Not too spicy / no chilli, please.
- **少放盐 / 少放油** (*shǎo fàng yán / shǎo fàng yóu*) — Put less salt / less oil (**放** = put in seasoning).
- **不要放香菜** (*bù yào fàng xiāngcài*) — Please don't put coriander/cilantro in.
- **我吃素，不吃肉。** (*Wǒ chīsù, bù chī ròu.*) — I am vegetarian and don't eat meat.
- **我对花生过敏。** (*Wǒ duì huāshēng guòmǐn.*) — I am allergic to peanuts (**对 + Allergen + 过敏**).
- Drink customisation: **少糖、不加冰** (*shǎotáng, bù jiā bīng*, less sugar, no ice).`,
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pentagon wheel of the five Mandarin flavours suan, tian, ku, la, xian plus dietary request phrases"><rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="195" y="34" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">五味 — The Five Flavours</text><circle cx="195" cy="145" r="76" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5,4"/><rect x="150" y="48" width="90" height="44" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/><text x="195" y="68" text-anchor="middle" font-size="14" font-weight="bold" fill="#b45309">酸 suān</text><text x="195" y="84" text-anchor="middle" font-size="11" fill="#1e293b">sour · 醋</text><rect x="252" y="104" width="90" height="44" rx="10" fill="#fce7f3" stroke="#be185d" stroke-width="1.5"/><text x="297" y="124" text-anchor="middle" font-size="14" font-weight="bold" fill="#be185d">甜 tián</text><text x="297" y="140" text-anchor="middle" font-size="11" fill="#1e293b">sweet · 糖</text><rect x="224" y="186" width="90" height="44" rx="10" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/><text x="269" y="206" text-anchor="middle" font-size="14" font-weight="bold" fill="#c81e1e">辣 là</text><text x="269" y="222" text-anchor="middle" font-size="11" fill="#1e293b">spicy · 辣椒</text><rect x="76" y="186" width="90" height="44" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/><text x="121" y="206" text-anchor="middle" font-size="14" font-weight="bold" fill="#0284c7">咸 xián</text><text x="121" y="222" text-anchor="middle" font-size="11" fill="#1e293b">salty · 盐</text><rect x="48" y="104" width="90" height="44" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/><text x="93" y="124" text-anchor="middle" font-size="14" font-weight="bold" fill="#15803d">苦 kǔ</text><text x="93" y="140" text-anchor="middle" font-size="11" fill="#1e293b">bitter · 咖啡</text><rect x="372" y="48" width="244" height="184" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="1.5"/><text x="494" y="74" text-anchor="middle" font-size="14" font-weight="bold" fill="#0d9488">Polite Kitchen Requests</text><text x="388" y="102" font-size="12" fill="#1e293b">• 请不要太辣 (not too spicy)</text><text x="388" y="126" font-size="12" fill="#1e293b">• 请少放盐 (put less salt)</text><text x="388" y="150" font-size="12" fill="#1e293b">• 不要放香菜 (no coriander)</text><text x="388" y="174" font-size="12" fill="#1e293b">• 我吃素 (I am vegetarian)</text><text x="388" y="198" font-size="12" fill="#1e293b">• 我对花生过敏 (peanut allergy)</text><text x="388" y="220" font-size="11" font-weight="bold" fill="#c81e1e">Food = 好吃 · Drink/Soup = 好喝!</text></svg>',
      diagramCaption:
        "Master the five flavours (酸甜苦辣咸), pair food with 好吃 and drinks/soup with 好喝, and state dietary requests clearly.",
      workedExamples: [
        {
          title: "Making a polite kitchen customisation request",
          problem:
            "Translate into Mandarin: 'Waiter, please don't make the beef noodles too spicy, and don't put coriander in.'",
          steps: [
            "Open politely with **服务员** (*fúwùyuán*).",
            "Name the dish as the topic: **牛肉面请不要太辣** ('for the beef noodles, please not too spicy').",
            "Add 'and don't put coriander': **也不要放香菜** (*yě bù yào fàng xiāngcài*).",
            "Join cleanly: **服务员，牛肉面请不要太辣，也不要放香菜。**",
          ],
          answer:
            "服务员，牛肉面请不要太辣，也不要放香菜。 (Fúwùyuán, niúròumiàn qǐng bù yào tài là, yě bù yào fàng xiāngcài.)",
          yourTurn: {
            question:
              "How do you say 'not too spicy' in Mandarin (Hanzi or toned Pinyin)?",
            answer: {
              type: "text",
              accept: [
                "不要太辣",
                "请不要太辣",
                "别太辣",
                "bù yào tài là",
                "qǐng bù yào tài là",
                "bié tài là",
              ],
              display: "不要太辣 (bù yào tài là)",
            },
            solution:
              "**不要** (*bù yào*, don't want / please don't make it) + **太辣** (*tài là*, too spicy) = **不要太辣**.",
          },
        },
      ],
      keyPoints: [
        "Memorise the five flavours in classic Chinese order: **酸甜苦辣咸** (*suān tián kǔ là xián* — sour, sweet, bitter, spicy, salty).",
        "Solid dishes are **好吃**; drinks AND soups (**汤**) are **好喝**!",
        "Use **少放 + seasoning** (**少放盐**, **少放糖**) and **不要(放) + ingredient** (**不要香菜**, **不要辣椒**).",
        "Allergy frame: **我对 + [Allergen] + 过敏** (e.g. **我对花生过敏**, **我对海鲜过敏**).",
      ],
      whyItWorks:
        "In Mandarin, you can even use **酸甜苦辣** metaphorically to mean 'the ups and downs / joys and sorrows of life' (**生活的酸甜苦辣**), because sweet moments (**甜**) contrast with tough, bitter challenges (**苦** — as in **吃苦**, enduring hardship)!",
      strategies: [
        "好吃 vs 好喝 Mirror: Whatever verb you consume it with (吃 or 喝) becomes 好 + Verb!",
        "对…过敏 Frame: Never say *过敏给花生* — anchor 对 right before the allergen.",
      ],
      thinkDeeper:
        "Notice how regional Chinese cuisines map onto flavours: Sichuan/Hunan loves **麻辣** (numbing-spicy), Jiangsu/Shanghai loves **甜** (subtle sweetness), Shanxi is famous for aged **醋** (**酸**), and Guangdong/Cantonese prizes **清淡** & **鲜** (light freshness). Which style is most common in Singapore Cantonese dim sum vs *mala xiangguo* stalls?",
    },
    {
      id: "paying-the-bill",
      heading: "Paying the bill & reviews: 服务员，买单！",
      discovery: {
        problem:
          "At the end of a restaurant meal, you will hear two expressions meaning 'settle the bill': **买单** (*mǎidān*) and **结账** (*jiézhàng*). Look literally at **买单**: **买** = 'buy' and **单** = 'the bill/list'! Why on earth would someone say 'buy the bill' — and what radical sits on the left of **账** (*zhàng*) and at the bottom of **贵** (*guì*, expensive)?",
        idea:
          "**买单** started in Cantonese (*maai daan*, where *maai* meant 'totalling up the bill'), sounded just like Mandarin **买单**, and spread nationwide across China and Singapore! Meanwhile, **账** (account/bill) and **贵** (expensive) both contain **贝** (*bèi*, cowrie shell) — because cowrie shells were ancient China's very first money!",
      },
      body: `### 1. Calling for the Bill & Modern Payment Methods

- **服务员，买单！** / **服务员，结账！** (*Waiter, the bill please!*)
- **请问一共多少钱？** (*Qǐngwèn yīgòng duōshao qián?* — Excuse me, how much is it altogether?)
- **这里可以刷卡吗？** (*Zhèlǐ kěyǐ shuākǎ ma?* — Can I pay by card here?)
- **可以用手机支付 / 扫码付钱吗？** (*Can I pay by mobile payment / scan QR to pay?*)
- **不好意思，我们只收现金。** (*Sorry, we only accept cash.*)
- **一共八十五块，您给我一百块，找您十五块。** (*85 dollars in total; you gave me 100, here is 15 dollars change.*)

### 2. Leftovers, Delivery & Praising a Restaurant

- **打包** (*dǎbāo*) — pack leftovers to take home, or order takeaway at a hawker stall (*dabao* in Singlish!): **请帮我们打包。**
- **点外卖** (*diǎn wàimài*) — order food delivery to your home via an app.
- **Praising with 不但…而且…**:
  - **这家餐厅的菜不但好吃，而且不贵！** (*Not only is this restaurant's food delicious, it's also not expensive!*)
  - **服务员不但很热情，而且上菜很快。** (*Not only are the servers warm and welcoming, the food also arrives quickly.*)`,
      workedExamples: [
        {
          title: "Settling the bill and checking change",
          problem:
            "Your family ordered **四道菜** costing **68元**, **两碗米饭** costing **4元** in total, and **一壶绿茶** costing **12元**. You ask the waiter the total and pay with **100元** cash. Write the waiter's reply stating the total and the change (**找您…**).",
          steps: [
            "Add the bill carefully: 68 + 4 + 12 = **84元** (**八十四块**).",
            "Calculate change from 100元: 100 − 84 = **16元** (**十六块**).",
            "Write the waiter's polite line using **一共** (altogether) and **找您** (give you change): **一共八十四块，找您十六块。**",
          ],
          answer: "一共八十四块，找您十六块。 (Yīgòng bāshísì kuài, zhǎo nín shíliù kuài.)",
          yourTurn: {
            question:
              "Translate into Mandarin (Hanzi or toned Pinyin): 'Waiter, the bill please!'",
            answer: {
              type: "text",
              accept: [
                "服务员，买单",
                "服务员买单",
                "服务员，结账",
                "服务员结账",
                "服务员，请买单",
                "服务员，请结账",
                "Fúwùyuán, mǎidān",
                "Fúwùyuán, jiézhàng",
                "Fúwùyuán, qǐng mǎidān",
                "Fúwùyuán, qǐng jiézhàng",
              ],
              display: "服务员，买单！ / 服务员，结账！",
            },
            solution:
              "Call **服务员** (*fúwùyuán*) + **买单** (*mǎidān*) or **结账** (*jiézhàng*): **服务员，买单！**",
          },
        },
      ],
      keyPoints: [
        "**买单** (*mǎidān*) and **结账** (*jiézhàng*) both mean 'pay/settle the bill'.",
        "Know all three payment modes: **现金** (cash), **刷卡** (card), and **手机支付 / 扫码** (mobile / QR pay).",
        "**找** (*zhǎo*) means 'to give change' in money contexts (**找您五块钱**).",
        "**打包** (*dǎbāo*) = takeaway / pack leftovers; **外卖** (*wàimài*) = food delivery.",
      ],
      whyItWorks:
        "Spot the cowrie-shell money radical **贝** (*bèi*) across financial Mandarin: **贵** (expensive), **贱** (cheap), **账** (bill/account), **财** (wealth), **购** (purchase), and **费** (fee). Whenever **贝** appears in a character, value, trade or payment is almost always involved!",
      strategies: [
        "Three-Way Payment Check: Ask 可以刷卡还是用手机支付？ if you don't carry 现金.",
        "不但…而且… Praise Frame: Pair taste (好吃) with price (便宜 / 不贵) or service (热情).",
      ],
      thinkDeeper:
        "In Mainland China, cash (**现金**) and plastic credit cards (**刷卡**) have almost vanished in everyday restaurants because everyone uses **扫码点菜** and **手机支付** (WeChat Pay / Alipay), while Singapore hawker stalls display a unified SGQR code for PayNow alongside cash. How has technology changed restaurant vocabulary in just ten years?",
    },
    {
      id: "restaurant-review",
      heading: "Roleplay & writing a restaurant/hawker review",
      discovery: {
        problem:
          "Read two Year 8 student reviews of a restaurant:\n- **Student 1**: *星期六我去饭馆。我吃鸡饭。鸡饭好吃。我喝绿茶。绿茶好喝。*\n- **Student 2**: **上个星期六晚上，我跟家人一起去乌节路的一家中餐馆吃晚饭。虽然人很多、要排队，但是环境很干净，服务员也很热情。我们点了北京烤鸭、清蒸鱼和酸辣汤，味道好极了！**\nWhy does Student 2 score top band in IGCSE 0547 while Student 1 gets stuck in a basic band?",
        idea:
          "Top-band IGCSE reviews weave **5 dimensions** together instead of listing food nouns: (1) **STPV opening** (When + Who + Where + Why), (2) **Ambience & Service** (**环境干净**, **服务员热情**, **热闹/排队**), (3) **Specific Dishes & Flavours** (**酸甜/清淡/香/新鲜**), (4) **Complex Connectors** (**虽然…但是…**, **不但…而且…**), and (5) **Recommendation** (**推荐 / 满意**).",
      },
      body: `### The 5-Step IGCSE Restaurant / Hawker Review Blueprint

Use this repeatable structure for any 80–130 character account of eating out:

1. **Set the Scene (STPV + Occasion)**:
   - **上个星期天中午，为了庆祝爸爸的生日，我们全家人一起去东海岸公园的一家海鲜餐厅吃午饭。**
2. **Describe Ambience & Service (**环境与服务**)**:
   - **虽然周末客人非常多，我们排了二十分钟的队，但是餐厅又大又干净，服务员也非常热情。**
3. **Detail What You Ordered & Flavours (**点菜与味道**)**:
   - **我们点了一条清蒸鱼、一盘炒虾、一盘青菜和一碗西红柿鸡蛋汤。海鲜非常新鲜，蒸鱼很清淡，汤又酸又甜，好喝极了！**
4. **Evaluate Price & Payment (**价格与结账**)**:
   - **这顿饭一共花了八十新币，爸爸用手机付了钱。我觉得这里的菜不但美味，而且不太贵。**
5. **Give Your Verdict & Recommendation (**总结与推荐**)**:
   - **全家人对这顿饭都很满意。我非常推荐大家去试试这家餐厅！**`,
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-part IGCSE restaurant review blueprint showing scene, ambience, dishes and flavours, price, and recommendation"><rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="320" y="34" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">IGCSE 餐厅评价五步法 — 5-Star Review Blueprint</text><rect x="20" y="54" width="114" height="180" rx="10" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/><text x="77" y="78" text-anchor="middle" font-size="12" font-weight="bold" fill="#c81e1e">1. 时间地点</text><text x="77" y="98" text-anchor="middle" font-size="11" fill="#1e293b">STPV Scene</text><text x="77" y="128" text-anchor="middle" font-size="11" fill="#1e293b">上个周末</text><text x="77" y="150" text-anchor="middle" font-size="11" fill="#1e293b">跟家人一起</text><text x="77" y="172" text-anchor="middle" font-size="11" fill="#1e293b">去一家中餐馆</text><text x="77" y="206" text-anchor="middle" font-size="10" fill="#c81e1e">庆祝生日</text><rect x="143" y="54" width="114" height="180" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/><text x="200" y="78" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">2. 环境服务</text><text x="200" y="98" text-anchor="middle" font-size="11" fill="#1e293b">Vibe &amp; Staff</text><text x="200" y="128" text-anchor="middle" font-size="11" fill="#1e293b">干净 · 热闹</text><text x="200" y="150" text-anchor="middle" font-size="11" fill="#1e293b">要排队</text><text x="200" y="172" text-anchor="middle" font-size="11" fill="#1e293b">服务员热情</text><text x="200" y="206" text-anchor="middle" font-size="10" fill="#b45309">虽然…但是…</text><rect x="266" y="54" width="114" height="180" rx="10" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/><text x="323" y="78" text-anchor="middle" font-size="12" font-weight="bold" fill="#0d9488">3. 菜肴味道</text><text x="323" y="98" text-anchor="middle" font-size="11" fill="#1e293b">Food &amp; Taste</text><text x="323" y="128" text-anchor="middle" font-size="11" fill="#1e293b">点了三道菜</text><text x="323" y="150" text-anchor="middle" font-size="11" fill="#1e293b">新鲜 · 清淡</text><text x="323" y="172" text-anchor="middle" font-size="11" fill="#1e293b">酸甜 · 香</text><text x="323" y="206" text-anchor="middle" font-size="10" fill="#0d9488">好吃 &amp; 好喝!</text><rect x="389" y="54" width="114" height="180" rx="10" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/><text x="446" y="78" text-anchor="middle" font-size="12" font-weight="bold" fill="#4338ca">4. 价格买单</text><text x="446" y="98" text-anchor="middle" font-size="11" fill="#1e293b">Price &amp; Pay</text><text x="446" y="128" text-anchor="middle" font-size="11" fill="#1e293b">一共六十块</text><text x="446" y="150" text-anchor="middle" font-size="11" fill="#1e293b">不贵 / 便宜</text><text x="446" y="172" text-anchor="middle" font-size="11" fill="#1e293b">刷卡 / 扫码</text><text x="446" y="206" text-anchor="middle" font-size="10" fill="#4338ca">不但…而且…</text><rect x="512" y="54" width="108" height="180" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/><text x="566" y="78" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">5. 总结推荐</text><text x="566" y="98" text-anchor="middle" font-size="11" fill="#1e293b">Verdict</text><text x="566" y="128" text-anchor="middle" font-size="11" fill="#1e293b">非常满意</text><text x="566" y="150" text-anchor="middle" font-size="11" fill="#1e293b">下次还要去</text><text x="566" y="172" text-anchor="middle" font-size="11" fill="#1e293b">向大家推荐</text><text x="566" y="206" text-anchor="middle" font-size="10" fill="#15803d">★★★★★</text></svg>',
      diagramCaption:
        "Tick off all 5 columns — Scene, Vibe/Service, Dishes/Taste, Price/Payment, Verdict — to turn simple sentences into a top-band IGCSE review.",
      workedExamples: [
        {
          title: "Upgrading two choppy sentences into an IGCSE review line",
          problem:
            "Combine *这家小贩中心很热闹* and *这里的鸡饭好吃，也很便宜* using **不但…而且…**.",
          steps: [
            "Keep the lively setting first: **这个小贩中心非常热闹，**",
            "Link the two strengths of the chicken rice with **不但…而且…** ('not only… but also…'): **这里的鸡饭不但好吃，而且很便宜！**",
          ],
          answer:
            "这个小贩中心非常热闹，这里的鸡饭不但好吃，而且很便宜！",
          yourTurn: {
            question:
              "Translate into Mandarin (Hanzi or toned Pinyin): 'This restaurant is very clean.'",
            answer: {
              type: "text",
              accept: [
                "这家餐厅很干净",
                "这家餐厅非常干净",
                "这家饭馆很干净",
                "这家饭馆非常干净",
                "Zhè jiā cāntīng hěn gānjìng",
                "Zhè jiā fànguǎn hěn gānjìng",
              ],
              display: "这家餐厅很干净。 (Zhè jiā cāntīng hěn gānjìng.)",
            },
            solution:
              "Use the establishment classifier **家** (**这家餐厅**) + **很干净** (*hěn gānjìng*, very clean): **这家餐厅很干净。**",
          },
        },
      ],
      keyPoints: [
        "Comment on ALL three review pillars: **味道** (taste), **环境** (environment/cleanliness), and **服务** (service).",
        "Use **又 + Adj1 + 又 + Adj2** for twin qualities: **又酸又甜** (sweet & sour), **又便宜又好吃** (cheap & tasty), **又大又干净** (big & clean).",
        "Use **了** properly for past dining actions: **去了…**, **点了三道菜**, **排了二十分钟的队**.",
        "Close with a personal opinion & future wish: **我对这顿饭很满意，下次还想跟朋友一起去！**",
      ],
      whyItWorks:
        "Cambridge IGCSE 0547 mark schemes split marks between **Content/Communication** (answering every bullet point) and **Language** (range of vocabulary + complex structures). Hitting **环境 / 服务 / 味道 / 价格** satisfies Content, while **虽然…但是…**, **不但…而且…** and **又…又…** unlock top Language bands automatically!",
      strategies: [
        "Three-Pillar Audit: Check your draft mentions 味道 (taste), 环境 (vibe) and 服务 (service).",
        "又…又… Double-Up: Upgrade single adjectives into vivid pairs like 又香又脆 or 又便宜又好吃.",
      ],
      thinkDeeper:
        "If a meal out went *badly* (you queued an hour, the soup was cold and too salty **太咸了**, and the waiter forgot your order), how would you adapt **虽然…但是…** and **不满意** to write an honest 1-star review politely?",
    },
  ],
  learn: {
    flashcards: [
      { front: "饭馆 / 餐厅 (classifier?)", back: "fànguǎn / cāntīng — restaurant (classifier: 家 jiā — 一家餐厅)" },
      { front: "小贩中心 vs 食阁", back: "xiǎofàn zhōngxīn (hawker centre) vs shígé (indoor mall food court)" },
      { front: "欢迎光临！请问几位？", back: "Huānyíng guānglín! Qǐngwèn jǐ wèi? — Welcome! How many people?" },
      { front: "请坐 vs 座位", back: "qǐng zuò (please sit — verb) vs zuòwèi (seat — noun with 广)" },
      { front: "服务员 & 菜单", back: "fúwùyuán (waiter/server) & càidān (menu)" },
      { front: "点菜 vs 点 + Dish", back: "diǎncài (order food in general) vs diǎn + specific dish (NEVER *点菜烤鸭*!)" },
      { front: "来一碗… / 来一盘… / 来一杯…", back: "lái yī wǎn / pán / bēi — bring / I'll have one bowl / plate / cup of…" },
      { front: "还要别的吗？ → 够了，谢谢！", back: "Would you like anything else? → That's enough, thank you!" },
      { front: "酸 · 甜 · 苦 · 辣 · 咸", back: "suān (sour) · tián (sweet) · kǔ (bitter) · là (spicy) · xián (salty)" },
      { front: "清淡 & 香", back: "qīngdàn (light/mild in flavour) & xiāng (fragrant/savoury)" },
      { front: "好吃 vs 好喝", back: "hǎochī (delicious solid food) vs hǎohē (tasty drink OR soup 汤!)" },
      { front: "不要太辣 · 少放盐 · 不要香菜", back: "not too spicy · put less salt · no coriander" },
      { front: "我吃素 / 我对花生过敏", back: "Wǒ chīsù (I'm vegetarian) / Wǒ duì huāshēng guòmǐn (I'm allergic to peanuts)" },
      { front: "买单 / 结账", back: "mǎidān / jiézhàng — pay/settle the bill" },
      { front: "刷卡 · 现金 · 手机支付 · 打包", back: "pay by card · cash · mobile payment · takeaway / pack leftovers" },
    ],
    mustKnow: [
      "Can you use **一家** with restaurants (**一家中餐馆**) and reply to **请问几位？** politely (**我们有四位**)?",
      "Can you tell apart **坐** (verb: to sit, **请坐**) and **座** (noun: seat, **座位**)?",
      "Can you order dishes naturally using **点**, **我要**, and **来一碗 / 一盘 / 一杯**, dropping **菜** from **点菜** when naming a dish?",
      "Can you name all five flavours (**酸、甜、苦、辣、咸**) plus **清淡** and **香**?",
      "Can you choose **好吃** for solid food and **好喝** for all drinks and **汤**?",
      "Can you make polite dietary requests (**不要太辣**, **少放盐**, **不要放香菜**, **我吃素**, **我对花生过敏**)?",
      "Can you ask for the bill (**服务员，买单 / 结账！**), ask the total (**一共多少钱？**), and ask how to pay (**可以刷卡 / 扫码吗？**)?",
      "Can you ask to pack leftovers (**打包**) or order food delivery (**点外卖**)?",
      "Can you write a 5-step restaurant/hawker review praising **环境**, **服务**, **味道** and **价格** with **不但…而且…**?",
    ],
    misconceptions: [
      {
        wrong: "我想点菜一盘饺子。 (Keeping 菜 after 点 when a specific dish follows)",
        right: "我想点一盘饺子。 / 来一盘饺子。 (点菜 already contains 'dishes' — drop 菜 when naming the dish!)",
      },
      {
        wrong: "这碗酸辣汤很好吃！ (Using 好吃 'good to eat' for soup)",
        right: "这碗酸辣汤很好喝！ (Because you 喝汤 in Mandarin, soup is always 好喝!)",
      },
      {
        wrong: "一个中国饭馆 (Using 个 as the measure word for a restaurant)",
        right: "一家中国饭馆 (Restaurants, cafés, hotels and shops use the classifier 家 jiā!)",
      },
      {
        wrong: "我过敏花生。 (Translating 'allergic to peanuts' without 对)",
        right: "我对花生过敏。 (Mandarin requires 对 + Allergen + 过敏!)",
      },
      {
        wrong: "这里的菜是便宜和好吃。 (Using 是 before adjectives and joining adjectives with 和)",
        right: "这里的菜又便宜又好吃！ / 这里的菜不但好吃，而且很便宜！ (Use 又…又… or 不但…而且… — never 是 or 和 between adjectives!)",
      },
      {
        wrong: "Pronouncing 便宜 (cheap) as *biànyi* because 方便 is *fāngbiàn*.",
        right: "Pronounce 便宜 as *piányi* (2nd tone + neutral)! 便 is a multi-reading character (多音字).",
      },
    ],
    examMistakes: [
      "Writing **坐位** instead of **座位** (*zuòwèi*, seat) or **请座** instead of **请坐** (*qǐng zuò*, please sit).",
      "Confusing **买单** (*mǎidān*, pay the bill) with **菜单** (*càidān*, menu) — check the first character (**买** vs **菜**)!",
      "Saying *甜酸猪肉* word-for-word from English 'sweet and sour' instead of Mandarin's order **酸甜** (*suāntián*).",
      "Using **吃**/**好吃** with **汤**, **绿茶**, or **奶茶** instead of **喝**/**好喝**.",
      "Forgetting **少放** ('put less') when requesting kitchen adjustments (*少盐菜* ✗ → **请少放盐** ✓).",
      "Confusing **打包** (*dǎbāo*, pack leftovers / takeaway in person) with **外卖** (*wàimài*, app delivery to your home).",
      "In IGCSE writing, describing only what you ate and forgetting to mention **环境** (ambience), **服务** (service) or whether you **推荐** (recommend) the place.",
    ],
    mnemonics: [
      {
        topic: "坐 (sit — verb) vs 座 (seat — noun)",
        device: "Two people (人人) sit on the ground (土) = 坐; add a restaurant roof (广) over them = 座 (an indoor seat)!",
        explanation:
          "Checking whether you mean the action ('sit down!' 请坐) or the physical place under a roof ('a seat' 座位) prevents spelling mix-ups.",
      },
      {
        topic: "甜 (tián, sweet) & 酸 (suān, sour)",
        device: "甜 = Tongue (舌) + Sweet (甘); 酸 & 醋 (vinegar) both start with a fermenting wine jar (酉)!",
        explanation:
          "Your tongue tastes sugar in 甜, while wine left in a jar (酉) ferments into sour (酸) vinegar (醋).",
      },
      {
        topic: "菜单 (càidān, menu) vs 买单 (mǎidān, pay bill)",
        device: "Start of meal: pick 菜 from the 菜单; End of meal: open your wallet to 买单!",
        explanation:
          "单 means 'list/slip' in both — dishes list (菜单) at the beginning, bill slip (买单) at the end.",
      },
    ],
    realWorld: [
      {
        title: "UNESCO-Listed Singapore Hawker Centres (小贩中心)",
        detail:
          "From Lau Pa Sat and Maxwell to Old Airport Road, Singapore's **小贩中心** serve restaurant-quality dishes like **海南鸡饭** and **炒粿条** for \$4–\$6, where diners *chope* a **座位**, **排队** at famous stalls, and **打包** dinner home.",
        emoji: "🏮",
      },
      {
        title: "QR-Code Ordering & Mobile Pay (扫码点菜与手机支付)",
        detail:
          "Sit down at almost any restaurant in Shanghai, Beijing or Shenzhen — and increasingly across Singapore — and you scan a table QR code (**扫码点菜**), tick **不要香菜 / 微辣** right on your phone, and pay via **手机支付** in seconds!",
        emoji: "📱",
      },
      {
        title: "Singlish 'Dabao / Tapao' = Mandarin 打包!",
        detail:
          "Every resident in Singapore knows *'Uncle, chicken rice dabao!'* — it comes straight from Cantonese/Mandarin **打包** (*dǎbāo*, literally 'wrap into a bundle'), originally when food was wrapped in banana leaves or paper.",
        emoji: "🥡",
      },
      {
        title: "China's Regional Flavour Map: 南甜北咸，东辣西酸",
        detail:
          "A classic saying maps regional tastes across China: southerners/Jiangsu love subtle **甜** (sweet), northerners favour savoury **咸** (salty), Sichuan/Hunan crave **麻辣** (numbing-spicy), and Shanxi puts fragrant **醋** (**酸**, sour) on everything!",
        emoji: "🌶️",
      },
    ],
    videos: [
      {
        title: "How to Order Food at a Chinese Restaurant (点菜 & 买单)",
        channel: "Mandarin Corner",
        url: "https://www.youtube.com/results?search_query=ordering+food+at+a+chinese+restaurant+mandarin+dialogue+diancai+maidan",
      },
      {
        title: "The Five Flavours in Mandarin Chinese: 酸甜苦辣咸",
        channel: "ChinesePod",
        url: "https://www.youtube.com/results?search_query=five+flavours+in+chinese+suan+tian+ku+la+xian+mandarin",
      },
      {
        title: "Dietary Restrictions & Food Allergies in Mandarin",
        channel: "Yoyo Chinese",
        url: "https://www.youtube.com/results?search_query=how+to+say+vegetarian+no+spicy+food+allergy+in+mandarin+chinese",
      },
      {
        title: "Ordering Hawker Food in Mandarin in Singapore (小贩中心)",
        channel: "Learn Chinese Now",
        url: "https://www.youtube.com/results?search_query=ordering+food+in+mandarin+singapore+hawker+centre+dabao",
      },
    ],
    formulas: [
      {
        name: "Restaurant Ordering Frame",
        formula: "(请给我们) 来 / 我想点 / 我要 + Qty + 碗 / 盘 / 杯 / 份 / 道 + Dish",
        note: "来一碗牛肉面、一盘饺子和两杯冰水！ (Lái yī wǎn niúròumiàn, yī pán jiǎozi hé liǎng bēi bīngshuǐ!)",
      },
      {
        name: "Kitchen & Drink Customisation",
        formula: "请不要(太) + Adj  |  请少放 + Seasoning  |  不要(放) + Ingredient",
        note: "请不要太辣，少放盐，不要放香菜。 (Qǐng bù yào tài là, shǎo fàng yán, bù yào fàng xiāngcài.)",
      },
      {
        name: "Food Allergy Frame",
        formula: "Subject + 对 + Allergen (花生 / 海鲜 / 牛奶) + 过敏",
        note: "我对花生过敏，这道菜里有花生吗？ (Wǒ duì huāshēng guòmǐn, zhè dào cài lǐ yǒu huāshēng ma?)",
      },
      {
        name: "Twin-Adjective Praise (又…又…)",
        formula: "Noun + 又 + Adj 1 + 又 + Adj 2",
        note: "小贩中心的菜又便宜又好吃！四川火锅又麻又辣！ (Never join two adjectives with 和!)",
      },
      {
        name: "High-Scoring Review Frame (不但…而且…)",
        formula: "这家餐厅的菜 + 不但 + 好吃 / 新鲜，而且 + 不贵 / 服务员很热情",
        note: "这家餐厅的菜不但好吃，而且不贵！ (Zhè jiā cāntīng de cài bùdàn hǎochī, érqiě bù guì!)",
      },
    ],
  },
};
