import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "three-meals",
  title: "一日三餐 — Three Meals a Day & Drinks",
  strand: "Term 3 · Food & Grammar",
  icon: "🥟",
  summary:
    "Talk fluently about breakfast, lunch and dinner, staple foods, classic Singapore and Chinese dishes, drinks with container classifiers, hunger/thirst, and balanced healthy eating.",
  intro:
    "Food sits right at the heart of both Chinese and Singaporean daily life — so much so that a traditional greeting in Mandarin is literally **你吃饭了吗？** (*Nǐ chīfàn le ma?*, 'Have you eaten yet?'). In this topic you will master how to describe your **一日三餐** (*yī rì sān cān*, three meals a day), spot the radical patterns behind cooking methods and meats, pair drinks and dishes with exact container classifiers (**碗**, **盘**, **杯**, **瓶**, **盒**), express hunger, thirst and fullness naturally, and give thoughtful advice on **健康饮食** (*jiànkāng yǐnshí*, a healthy diet).",
  guide: [
    {
      id: "meals-staples",
      heading: "Three meals & staple foods: 早饭, 午饭, 晚饭, 米饭, 面条",
      discovery: {
        problem:
          "Look at the three Mandarin words for meals: **早饭** (*zǎofàn*), **午饭** (*wǔfàn*), **晚饭** (*wǎnfàn*) — and compare them with **米饭** (*mǐfàn*) and **炒饭** (*chǎofàn*). What does **饭** (*fàn*) mean in each group, and how can you work out **早餐 / 午餐 / 晚餐** without a dictionary?",
        idea:
          "**饭** (*fàn*) originally means cooked grain/rice, and because rice has been a cornerstone of Chinese meals for millennia, **饭** expanded to mean 'meal'! Combine **早** (morning), **午** (noon) and **晚** (evening) with **饭** (everyday speech) or **餐** (*cān*, formal meal) and all three mealtimes unlock instantly.",
      },
      body: `Mandarin names the three daily meals (**一日三餐**, *yī rì sān cān*) by pairing the time of day with **饭** (*fàn*, spoken) or **餐** (*cān*, slightly more formal/written):

| Meal | Everyday (**饭**) | Formal / Menu (**餐**) | Typical Sentence |
|---|---|---|---|
| Breakfast | **早饭** (*zǎofàn*) | **早餐** (*zǎocān*) | **我早上七点吃早饭。** (*Wǒ zǎoshang qī diǎn chī zǎofàn.*) |
| Lunch | **午饭** (*wǔfàn*) | **午餐** (*wǔcān*) | **我们在学校吃午饭。** (*Wǒmen zài xuéxiào chī wǔfàn.*) |
| Dinner | **晚饭** (*wǎnfàn*) | **晚餐** (*wǎncān*) | **妈妈晚上做晚饭。** (*Māma wǎnshang zuò wǎnfàn.*) |

Between or after main meals, you might also hear **零食** (*língshí*, snacks), **快餐** (*kuàicān*, fast food), **甜点** (*tiándiǎn*, dessert) and Singapore's beloved **夜宵** (*yèxiāo*, late-night supper).

### Staple Foods (**主食**, *zhǔshí*)

Across the Chinese-speaking world, a meal balances **主食** (*zhǔshí*, carbohydrate staples) with **菜** (*cài*, accompanying dishes):

- **Rice family**: **米饭** (*mǐfàn*, cooked white rice), **炒饭** (*chǎofàn*, fried rice), **蛋炒饭** (*dànchǎofàn*, egg fried rice), **粥** (*zhōu*, congee / rice porridge).
- **Wheat & steamed family**: **面条** (*miàntiáo*, noodles), **包子** (*bāozi*, steamed stuffed bun), **馒头** (*mántou*, plain steamed bun), **饺子** (*jiǎozi*, dumplings), **小笼包** (*xiǎolóngbāo*, soup dumplings).
- **Breakfast & Western staples**: **面包** (*miànbāo*, bread), **鸡蛋** (*jīdàn*, chicken egg), **三明治** (*sānmíngzhì*, sandwich), **汉堡包** (*hànbǎobāo*, burger), **比萨饼** (*bǐsàbǐng*, pizza).

> **Word-Order Tip**: Notice how you say *what* you eat for a specific meal without needing the English word 'for': **Subject + Meal + 吃 + Food** — e.g. **我早饭吃面包和鸡蛋** (*Wǒ zǎofàn chī miànbāo hé jīdàn*, 'For breakfast I eat bread and eggs').`,
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of three meals a day in Mandarin: zaofan, wufan and wanfan with staple foods"><rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="320" y="36" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">一日三餐 (yī rì sān cān) — Three Meals &amp; Staples</text><line x1="60" y1="72" x2="580" y2="72" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/><circle cx="120" cy="72" r="9" fill="#b45309"/><circle cx="320" cy="72" r="9" fill="#0d9488"/><circle cx="520" cy="72" r="9" fill="#c81e1e"/><rect x="30" y="92" width="180" height="142" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/><text x="120" y="116" text-anchor="middle" font-size="15" font-weight="bold" fill="#b45309">早饭 / 早餐</text><text x="120" y="135" text-anchor="middle" font-size="12" fill="#1e293b">zǎofàn · Breakfast (07:00)</text><text x="120" y="162" text-anchor="middle" font-size="13" fill="#1e293b">面包 · 鸡蛋 · 粥</text><text x="120" y="184" text-anchor="middle" font-size="13" fill="#1e293b">包子 · 牛奶 · 豆浆</text><text x="120" y="214" text-anchor="middle" font-size="11" fill="#b45309">我早饭吃包子和鸡蛋。</text><rect x="230" y="92" width="180" height="142" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/><text x="320" y="116" text-anchor="middle" font-size="15" font-weight="bold" fill="#0d9488">午饭 / 午餐</text><text x="320" y="135" text-anchor="middle" font-size="12" fill="#1e293b">wǔfàn · Lunch (12:30)</text><text x="320" y="162" text-anchor="middle" font-size="13" fill="#1e293b">炒饭 · 面条 · 鸡饭</text><text x="320" y="184" text-anchor="middle" font-size="13" fill="#1e293b">三明治 · 饺子</text><text x="320" y="214" text-anchor="middle" font-size="11" fill="#0d9488">我们在学校吃午饭。</text><rect x="430" y="92" width="180" height="142" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/><text x="520" y="116" text-anchor="middle" font-size="15" font-weight="bold" fill="#c81e1e">晚饭 / 晚餐</text><text x="520" y="135" text-anchor="middle" font-size="12" fill="#1e293b">wǎnfàn · Dinner (19:00)</text><text x="520" y="162" text-anchor="middle" font-size="13" fill="#1e293b">米饭 · 蒸鱼 · 烤鸭</text><text x="520" y="184" text-anchor="middle" font-size="13" fill="#1e293b">牛肉 · 青菜 · 汤</text><text x="520" y="214" text-anchor="middle" font-size="11" fill="#c81e1e">全家人一起吃晚饭。</text></svg>',
      diagramCaption:
        "How Mandarin maps Morning (早), Noon (午) and Evening (晚) onto the three daily meals and typical staple foods.",
      workedExamples: [
        {
          title: "Saying what someone eats for a meal",
          problem:
            "Translate into Mandarin: 'My older brother eats fried rice and dumplings for lunch.'",
          steps: [
            "Start with the subject: **哥哥** (*gēge*, older brother).",
            "Place the mealtime noun BEFORE the verb **吃** (no preposition needed for 'for'!): **午饭** (*wǔfàn*).",
            "Add the verb **吃** (*chī*) + the two foods joined by **和** (*hé*): **炒饭和饺子** (*chǎofàn hé jiǎozi*).",
            "Combine cleanly: **哥哥午饭吃炒饭和饺子。**",
          ],
          answer: "哥哥午饭吃炒饭和饺子。 (Gēge wǔfàn chī chǎofàn hé jiǎozi.)",
          yourTurn: {
            question:
              "Translate into Mandarin (Hanzi or toned Pinyin): 'I eat bread and eggs for breakfast.'",
            answer: {
              type: "text",
              accept: [
                "我早饭吃面包和鸡蛋",
                "我早餐吃面包和鸡蛋",
                "早饭我吃面包和鸡蛋",
                "早餐我吃面包和鸡蛋",
                "Wǒ zǎofàn chī miànbāo hé jīdàn",
                "Wǒ zǎocān chī miànbāo hé jīdàn",
                "Zǎofàn wǒ chī miànbāo hé jīdàn",
              ],
              display: "我早饭吃面包和鸡蛋。 (Wǒ zǎofàn chī miànbāo hé jīdàn.)",
            },
            solution:
              "Put Subject (**我**) + Meal (**早饭**) + **吃** + **面包和鸡蛋**: **我早饭吃面包和鸡蛋。**",
          },
        },
      ],
      keyPoints: [
        "**早饭 / 午饭 / 晚饭** are everyday spoken words; **早餐 / 午餐 / 晚餐** are slightly more formal.",
        "Never translate 'for breakfast' with **给** (*gěi*)! Place the meal right before **吃**: **我早饭吃包子**.",
        "Spot the **饣** (*shí*, food radical) on the left of **饭**, **饺**, **馒** and **饼** — it flags cooked foods immediately.",
        "**粥** (*zhōu*, congee) can take either **喝粥** or **吃粥** in everyday Mandarin.",
      ],
      whyItWorks:
        "In Chinese historical geography, the Qinling–Huaihe river line divided wheat-growing northern China (**面条**, **包子**, **饺子**, **馒头**) from rice-growing southern China (**米饭**, **炒饭**, **粥**). Today Singapore hawker centres bring both traditions onto one tray — from Hainanese rice dishes to Shanghai **小笼包**!",
      strategies: [
        "Time-Root Decoding: Pair 早/午/晚 with 饭 or 餐 to build any meal noun.",
        "No-'For' Frame: Use Subject + Mealtime + 吃 + Food without adding 给 or 为.",
      ],
      thinkDeeper:
        "Look closely at the character **粥** (*zhōu*, rice porridge): right in the centre sits **米** (rice), flanked on both sides by **弓** (originally rising wisps of steam in ancient bronze script!). Can you explain why **米饭** uses **米** while **面包** and **面条** use **面** (wheat flour)?",
    },
    {
      id: "meats-dishes",
      heading: "Meats, seafood & classic dishes: 鸡肉, 牛肉, 鱼",
      discovery: {
        problem:
          "English uses completely unrelated French-derived words for farm animals vs their meat: *pig → pork*, *cow → beef*, *sheep → mutton/lamb*. Look at Mandarin: **猪 → 猪肉**, **牛 → 牛肉**, **鸡 → 鸡肉**, **羊 → 羊肉**. What rule is Mandarin following — and look at the cooking verbs **炒**, **烤**, **煮**, **蒸**: what radical connects them?",
        idea:
          "Mandarin is 100% transparent: **Animal + 肉 (*ròu*, meat)** names the meat every single time! Meanwhile, cooking verbs carry heat radicals: **火** (fire on the left of **炒** stir-fry, **烤** roast, **炸** deep-fry) or **灬** (four fire-dots underneath a pot in **煮** boil and **蒸** steam).",
      },
      body: `### 1. Meats & Seafood (**肉类与海鲜**)

| Mandarin | Pinyin | English | Classifier / Tip |
|---|---|---|---|
| **猪肉** | *zhūròu* | pork | **猪** (pig) + **肉** (meat) |
| **牛肉** | *niúròu* | beef | **牛** (cow) + **肉**; e.g. **牛肉面** (*niúròumiàn*) |
| **鸡肉** | *jīròu* | chicken meat | **鸡** (chicken) + **肉** |
| **羊肉** | *yángròu* | lamb / mutton | **羊** (sheep) + **肉** |
| **鱼** | *yú* | fish | Whole fish uses **条** (*tiáo*): **一条鱼** |
| **虾** | *xiā* | prawn / shrimp | **一只虾** (one prawn) or **一盘虾** (a plate of prawns) |
| **海鲜** | *hǎixiān* | seafood | **海** (sea) + **鲜** (fresh: **鱼** + **羊**!) |

### 2. Cooking Methods & Iconic Dishes

Knowing four core cooking verbs lets you decode almost any menu in Beijing or Singapore:

- **炒** (*chǎo*, stir-fry — **火** fire radical): **西红柿炒鸡蛋** (*xīhóngshì chǎo jīdàn*, stir-fried tomato & scrambled eggs), **炒饭** (*chǎofàn*).
- **烤** (*kǎo*, roast / toast — **火** fire radical): **北京烤鸭** (*Běijīng kǎoyā*, Peking roast duck), **烤面包** (*kǎo miànbāo*, toast).
- **蒸** (*zhēng*, steam — **灬** four fire-dots): **蒸鱼** (*zhēng yú*, steamed fish), **蒸包子** (*zhēng bāozi*).
- **煮** (*zhǔ*, boil — **灬** four fire-dots) & **炸** (*zhá*, deep-fry): **煮面条** (*zhǔ miàntiáo*), **炸鸡** (*zhájī*, fried chicken).

And never forget Singapore's national dish: **鸡饭** (*jīfàn*, Hainanese chicken rice — **海南鸡饭**), fragrant poached or roasted chicken served with seasoned rice and chilli-ginger sauce!`,
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fire radicals in Mandarin cooking verbs chao, kao, zhu and zheng"><rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="320" y="34" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">Decoding Cooking Verbs via Fire Radicals (火 &amp; 灬)</text><rect x="28" y="54" width="280" height="182" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/><text x="168" y="80" text-anchor="middle" font-size="15" font-weight="bold" fill="#c81e1e">Left-Side Fire: 火 (huǒ) — Direct Heat</text><text x="60" y="114" font-size="14" font-weight="bold" fill="#1e293b">炒 (chǎo) · stir-fry</text><text x="60" y="134" font-size="12" fill="#475569">→ 西红柿炒鸡蛋 · 炒饭</text><text x="60" y="164" font-size="14" font-weight="bold" fill="#1e293b">烤 (kǎo) · roast / toast</text><text x="60" y="184" font-size="12" fill="#475569">→ 北京烤鸭 · 烤面包</text><text x="60" y="214" font-size="14" font-weight="bold" fill="#1e293b">炸 (zhá) · deep-fry → 炸鸡</text><rect x="332" y="54" width="280" height="182" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/><text x="472" y="80" text-anchor="middle" font-size="15" font-weight="bold" fill="#b45309">Bottom Fire-Dots: 灬 — Pot &amp; Steam</text><text x="364" y="118" font-size="14" font-weight="bold" fill="#1e293b">煮 (zhǔ) · boil in water</text><text x="364" y="140" font-size="12" fill="#475569">→ 煮面条 · 煮鸡蛋 (pot over flames)</text><text x="364" y="178" font-size="14" font-weight="bold" fill="#1e293b">蒸 (zhēng) · steam</text><text x="364" y="200" font-size="12" fill="#475569">→ 蒸鱼 (一条蒸鱼) · 蒸包子</text><text x="472" y="224" text-anchor="middle" font-size="11" fill="#b45309">4 dots 灬 = flames under a cooking vessel!</text></svg>',
      diagramCaption:
        "Left-side 火 marks direct wok/oven/oil heat (炒, 烤, 炸), while bottom four-dot 灬 marks flames heating water or steam under a pot (煮, 蒸).",
      workedExamples: [
        {
          title: "Decoding a Chinese dish name from its building blocks",
          problem:
            "Break down the dish **西红柿炒鸡蛋** (*xīhóngshì chǎo jīdàn*) word by word, and write a sentence saying 'Mum makes stir-fried tomato and eggs for dinner.'",
          steps: [
            "**西红柿** (*xīhóngshì*) = tomato; **炒** (*chǎo*) = stir-fried with; **鸡蛋** (*jīdàn*) = chicken eggs.",
            "Chinese dish names often follow **Ingredient A + Cooking Verb + Ingredient B**.",
            "Build the sentence using Subject + Time/Meal + Verb + Dish: **妈妈晚饭做西红柿炒鸡蛋。**",
          ],
          answer: "妈妈晚饭做西红柿炒鸡蛋。 (Māma wǎnfàn zuò xīhóngshì chǎo jīdàn.)",
          yourTurn: {
            question:
              "What is the Mandarin word for 'beef' (write Hanzi or toned Pinyin)?",
            answer: {
              type: "text",
              accept: ["牛肉", "niúròu"],
              display: "牛肉 (niúròu)",
            },
            solution:
              "**牛** (*niú*, cow/ox) + **肉** (*ròu*, meat) = **牛肉** (*niúròu*).",
          },
        },
      ],
      keyPoints: [
        "Animal + **肉** (*ròu*) builds meat names cleanly: **猪肉**, **牛肉**, **鸡肉**, **羊肉**.",
        "Whole fish takes the long/flexible classifier **条** (*tiáo*): **一条鱼** (*yī tiáo yú*), never *一个鱼*!",
        "Cooking methods use **火** (**炒**, **烤**, **炸**) or **灬** (**煮**, **蒸**).",
        "Singapore's **鸡饭** (*jīfàn*) and Beijing's **烤鸭** (*kǎoyā*) are high-value cultural examples in IGCSE speaking & writing.",
      ],
      whyItWorks:
        "Look at **鲜** (*xiān*, fresh/umami) inside **海鲜** (*hǎixiān*, seafood) and **新鲜** (*xīnxiān*, fresh): it fuses **鱼** (fish) on the left with **羊** (lamb) on the right. Ancient Chinese chefs noticed that cooking fish and lamb together produced an extraordinary savoury sweetness — creating the character for 'fresh flavour'!",
      strategies: [
        "Animal + 肉 Formula: Never memorise meat words in isolation — link each to its animal root.",
        "Heat-Radical Scan: Spot 火 or 灬 on an unfamiliar menu character to know it is a cooking method.",
      ],
      thinkDeeper:
        "Why do we say **鸡饭** (*jīfàn*, chicken rice) and **牛肉面** (*niúròumiàn*, beef noodles) without **肉** in **鸡饭**, yet we MUST include **肉** in **牛肉面**? Think about what *一碗牛面* might sound like compared with **牛肉面**!",
    },
    {
      id: "drinks-containers",
      heading: "Drinks & container classifiers: 牛奶, 果汁, 茶, 咖啡",
      discovery: {
        problem:
          "In English we say *'eat soup'* (or *'have soup'*), *'two waters'*, and *'black tea'*. In Mandarin, all three work differently: you say **喝汤** (*hē tāng*), **两瓶水** (*liǎng píng shuǐ*), and **红茶** (*hóngchá*). Why does Mandarin treat **汤** like a drink, why must **水** have a container classifier, and why is 'black tea' called 'red tea'?",
        idea:
          "Chinese soups (**汤**) are typically clear, savoury broths sipped from a bowl or spoon, so Mandarin uses **喝** (*hē*, drink), never **吃**! Uncountable liquids need a container measure word (**杯** cup, **瓶** bottle, **碗** bowl, **盒** carton) between the number and noun, and Chinese names tea by the amber-red colour of the brewed liquid (**红茶**), whereas English named the dark dried leaves!",
      },
      body: `### 1. Core Drinks (**饮料**, *yǐnliào*) & Soup (**汤**, *tāng*)

All drinks — plus **汤** (*tāng*, soup) — pair with the verb **喝** (*hē*, to drink):

- **Water & Milk**: **水** (*shuǐ*, water), **冰水** (*bīngshuǐ*, iced water), **热水** (*rèshuǐ*, hot water), **牛奶** (*niúnǎi*, milk), **豆浆** (*dòujiāng*, soya milk).
- **Juices (**汁**, *zhī*)**: **果汁** (*guǒzhī*, fruit juice), **苹果汁** (*píngguǒzhī*, apple juice), **橙汁** (*chéngzhī*, orange juice).
- **Tea, Coffee & Fizzy Drinks**: **茶** (*chá*, tea), **绿茶** (*lǜchá*, green tea — watch the **ü**!), **奶茶** (*nǎichá*, milk tea / bubble tea), **咖啡** (*kāfēi*, coffee), **可乐** (*kělè*, cola).

### 2. Matching Food & Drinks to Container Classifiers

Between a number (remember **两** *liǎng* for 2, NEVER **二**!) and a food or drink, choose the container that holds it:

| Classifier | Pinyin | Meaning | Classic Pairings |
|---|---|---|---|
| **杯** | *bēi* | cup / glass | **一杯茶**, **一杯咖啡**, **两杯果汁**, **一杯奶茶** |
| **瓶** | *píng* | bottle | **一瓶水**, **两瓶可乐**, **一瓶苹果汁** |
| **碗** | *wǎn* | bowl | **一碗汤**, **两碗米饭**, **一碗面条**, **一碗粥** |
| **盘** | *pán* | plate / dish | **一盘炒饭**, **一盘饺子**, **一盘鸡饭** |
| **盒** | *hé* | carton / box | **一盒牛奶**, **两盒果汁** |`,
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five Mandarin container measure words bei, ping, wan, pan and he with food and drink examples"><rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="320" y="34" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">Number (两 for 2!) + Container Classifier + Food / Drink</text><rect x="20" y="54" width="114" height="180" rx="10" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/><text x="77" y="84" text-anchor="middle" font-size="22" font-weight="bold" fill="#0d9488">杯</text><text x="77" y="104" text-anchor="middle" font-size="12" fill="#1e293b">bēi · cup/glass</text><text x="77" y="136" text-anchor="middle" font-size="12" fill="#1e293b">一杯绿茶</text><text x="77" y="158" text-anchor="middle" font-size="12" fill="#1e293b">一杯咖啡</text><text x="77" y="180" text-anchor="middle" font-size="12" fill="#1e293b">两杯奶茶</text><text x="77" y="212" text-anchor="middle" font-size="11" fill="#0d9488">cups &amp; mugs</text><rect x="143" y="54" width="114" height="180" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/><text x="200" y="84" text-anchor="middle" font-size="22" font-weight="bold" fill="#0284c7">瓶</text><text x="200" y="104" text-anchor="middle" font-size="12" fill="#1e293b">píng · bottle</text><text x="200" y="136" text-anchor="middle" font-size="12" fill="#1e293b">一瓶冰水</text><text x="200" y="158" text-anchor="middle" font-size="12" fill="#1e293b">两瓶可乐</text><text x="200" y="180" text-anchor="middle" font-size="12" fill="#1e293b">一瓶果汁</text><text x="200" y="212" text-anchor="middle" font-size="11" fill="#0284c7">capped bottles</text><rect x="266" y="54" width="114" height="180" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/><text x="323" y="84" text-anchor="middle" font-size="22" font-weight="bold" fill="#b45309">碗</text><text x="323" y="104" text-anchor="middle" font-size="12" fill="#1e293b">wǎn · bowl</text><text x="323" y="136" text-anchor="middle" font-size="12" fill="#1e293b">一碗汤</text><text x="323" y="158" text-anchor="middle" font-size="12" fill="#1e293b">两碗米饭</text><text x="323" y="180" text-anchor="middle" font-size="12" fill="#1e293b">一碗面条</text><text x="323" y="212" text-anchor="middle" font-size="11" fill="#b45309">deep bowls</text><rect x="389" y="54" width="114" height="180" rx="10" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/><text x="446" y="84" text-anchor="middle" font-size="22" font-weight="bold" fill="#c81e1e">盘</text><text x="446" y="104" text-anchor="middle" font-size="12" fill="#1e293b">pán · plate</text><text x="446" y="136" text-anchor="middle" font-size="12" fill="#1e293b">一盘炒饭</text><text x="446" y="158" text-anchor="middle" font-size="12" fill="#1e293b">一盘饺子</text><text x="446" y="180" text-anchor="middle" font-size="12" fill="#1e293b">一盘鸡饭</text><text x="446" y="212" text-anchor="middle" font-size="11" fill="#c81e1e">flat plates</text><rect x="512" y="54" width="108" height="180" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/><text x="566" y="84" text-anchor="middle" font-size="22" font-weight="bold" fill="#15803d">盒</text><text x="566" y="104" text-anchor="middle" font-size="12" fill="#1e293b">hé · carton</text><text x="566" y="136" text-anchor="middle" font-size="12" fill="#1e293b">一盒牛奶</text><text x="566" y="158" text-anchor="middle" font-size="12" fill="#1e293b">一盒苹果汁</text><text x="566" y="180" text-anchor="middle" font-size="12" fill="#1e293b">两盒鸡饭</text><text x="566" y="212" text-anchor="middle" font-size="11" fill="#15803d">boxes/cartons</text></svg>',
      diagramCaption:
        "Visualise the serving vessel first — cup (杯), bottle (瓶), bowl (碗), plate (盘), or carton (盒) — and remember 两 (liǎng) for 2!",
      workedExamples: [
        {
          title: "Combining 喝/吃 with container measure words and 两",
          problem:
            "Translate into Mandarin: 'Sister drank two glasses of apple juice and one bowl of soup.'",
          steps: [
            "For '2' before a measure word, ALWAYS use **两** (*liǎng*), never **二**.",
            "'Two glasses of apple juice' = **两杯苹果汁** (*liǎng bēi píngguǒzhī*).",
            "'One bowl of soup' = **一碗汤** (*yī wǎn tāng*) — and both juice and soup use the verb **喝** (*hē*)!",
            "Put it together with **了** for a completed action: **姐姐喝了两杯苹果汁和一碗汤。**",
          ],
          answer: "姐姐喝了两杯苹果汁和一碗汤。 (Jiějie hē le liǎng bēi píngguǒzhī hé yī wǎn tāng.)",
          yourTurn: {
            question:
              "How do you say 'two bottles of water' in Mandarin (Hanzi or toned Pinyin)?",
            answer: {
              type: "text",
              accept: ["两瓶水", "liǎng píng shuǐ"],
              display: "两瓶水 (liǎng píng shuǐ)",
            },
            solution:
              "Use **两** (*liǎng*) before a classifier + **瓶** (*píng*, bottle) + **水** (*shuǐ*): **两瓶水**.",
          },
        },
      ],
      keyPoints: [
        "Always **喝汤** (*hē tāng*, drink/have soup) — never *吃汤*!",
        "Fruit + **汁** (*zhī*) forms any fruit juice: **苹果汁**, **橙汁**, **西瓜汁**.",
        "Use **两** (*liǎng*), never **二**, before container classifiers: **两杯茶**, **两碗米饭**, **两瓶水**.",
        "Spell **绿茶** with the umlaut vowel: *lǜchá* (`lv4 cha2` on a keyboard).",
      ],
      whyItWorks:
        "Notice the three-dot water radical **氵** running right through the liquid words **汤** (*tāng*), **汁** (*zhī*), **汽水** (*qìshuǐ*), and **渴** (*kě*, thirsty), while **冰** (*bīng*, ice) drops one dot to become the two-dot ice radical **冫** — because frozen water contracts into crystal!",
      strategies: [
        "Picture-the-Vessel Check: Ask 'Is it served in a bowl (碗), on a plate (盘), in a cup (杯), or in a bottle (瓶)?'",
        "Two = 两 Alarm: Whenever '2' touches a measure word, swap 二 → 两 automatically.",
      ],
      thinkDeeper:
        "Compare **一杯牛奶** (*yī bēi niúnǎi*) and **一盒牛奶** (*yī hé niúnǎi*). Both translate to 'milk', yet they paint two different scenes (at breakfast at home vs in your school backpack!). How do container classifiers make Mandarin more vivid than English *'a milk'*?",
    },
    {
      id: "hungry-thirsty-full",
      heading: "Appetite & mealtime phrases: 饿, 渴, 吃饱了",
      discovery: {
        problem:
          "Students learning Mandarin almost always mix up the lookalike pair **喝** (*hē*, to drink) and **渴** (*kě*, thirsty) because they share the same right-hand side **曷**! Look at their left-hand radicals — **口** vs **氵** — and invent a foolproof rule so you never confuse them again.",
        idea:
          "**喝** (*hē*) has **口** (a mouth) on the left because you **drink with your mouth**. **渴** (*kě*) has **氵** (three drops of water) on the left because when you are **thirsty you crave water**!",
      },
      body: `### 1. Expressing Hunger, Thirst & Fullness

In Mandarin, **饿** (*è*, hungry), **渴** (*kě*, thirsty) and **饱** (*bǎo*, full) are **stative adjectives**, NOT nouns — which means you **NEVER** put **是** (*shì*) in front of them!

| What you want to say | Natural Mandarin | Pinyin | Why it works |
|---|---|---|---|
| I am very hungry. | **我很饿。** | *Wǒ hěn è.* | Subject + **很** + Adjective (no **是**!) |
| I am hungry (now)! | **我饿了！** | *Wǒ è le!* | Sentence-final **了** marks a new feeling |
| I am very thirsty. | **我很渴。** | *Wǒ hěn kě.* | Note speech sandhi: *hěn kě* → *hén kě* |
| I am full! | **我吃饱了！** | *Wǒ chībǎo le!* | Resultative: **吃** (eat) + **饱** (full) + **了** |

### 2. Essential Table Etiquette & Cutlery

- **Never drop the meal verb**: English lets you say *'I had breakfast at 7'*, tempting learners to write *我有早饭* (✗ — that means 'I own some breakfast'!). Always use **吃**: **我七点吃了早饭** (*Wǒ qī diǎn chī le zǎofàn*).
- **Polite table talk**: Hosts and servers say **请慢用！** (*Qǐng mànyòng!*, 'Please enjoy your meal' — literally 'use/eat slowly'). If you finish eating before friends at the table, say **我吃饱了，你们慢用！**
- **Tableware**:
  - **用筷子** (*yòng kuàizi*) / **拿筷子** (*ná kuàizi*) — use / hold chopsticks (**一双筷子**, a pair of chopsticks; bamboo radical **⺮** on top!).
  - **用刀叉** (*yòng dāochā*) — use a knife and fork; **用勺子** (*yòng sháozi*) — use a spoon.`,
      workedExamples: [
        {
          title: "Fixing three classic English-to-Mandarin traps",
          problem:
            "A student writes: *我是饿，我要有晚饭。* Identify BOTH grammar errors and rewrite the sentence naturally.",
          steps: [
            "Error 1: *我是饿* puts **是** before an adjective. Replace with **我很饿** (state) or **我饿了** (new feeling).",
            "Error 2: *有晚饭* translates English 'have dinner' literally with **有** (possess). Mandarin always uses **吃晚饭** (*chī wǎnfàn*).",
            "Natural rewrite: **我饿了，我想吃晚饭。** (or **我很饿，我要吃晚饭。**)",
          ],
          answer: "我饿了，我想吃晚饭。 (Wǒ è le, wǒ xiǎng chī wǎnfàn.)",
          yourTurn: {
            question:
              "Translate into natural Mandarin (Hanzi or toned Pinyin): 'I am full!'",
            answer: {
              type: "text",
              accept: [
                "我吃饱了",
                "我饱了",
                "我已经吃饱了",
                "Wǒ chībǎo le",
                "Wǒ bǎo le",
                "Wǒ yǐjīng chībǎo le",
              ],
              display: "我吃饱了！ (Wǒ chībǎo le!)",
            },
            solution:
              "Combine **吃** (eat) + **饱** (full) + **了** (new state): **我吃饱了！**",
          },
        },
      ],
      keyPoints: [
        "**喝** (mouth **口** = to drink) vs **渴** (water **氵** = thirsty) — check the left radical every time!",
        "Never use **是** before **饿** or **渴**: say **我很饿 / 我饿了** and **我很渴 / 我渴了**.",
        "Never translate 'have lunch' as *有午饭* — always say **吃午饭** (*chī wǔfàn*).",
        "**筷子** (*kuàizi*, chopsticks) takes the pair classifier **双** (*shuāng*): **一双筷子**.",
      ],
      whyItWorks:
        "Look at **饿** (*è*, hungry) and **饱** (*bǎo*, full): both start with the food radical **饣** (*shí*). **饿** combines **饣** (food) + **我** (*wǒ*, me — phonetic & memorable: 'food for me!'), while **饱** combines **饣** + **包** (*bāo*, wrap/stuffed full).",
      strategies: [
        "Radical Twin Split: 口喝 (mouth drinks) vs 氵渴 (thirsty needs water).",
        "Ban '是' & '有': Ban 是 before adjectives (饿/渴) and ban 有 before meals (早饭/午饭/晚饭).",
      ],
      thinkDeeper:
        "Why does Chinese etiquette say **慢用** (*mànyòng*, 'eat slowly') to mean *Bon appétit*, and why do hosts in China and Singapore often say **菜不多，多吃一点儿！** ('There aren't many dishes — eat plenty!') even when the table is overflowing?",
    },
    {
      id: "healthy-balanced-diet",
      heading: "Describing a balanced diet (健康饮食)",
      discovery: {
        problem:
          "Compare English word order *'eat more vegetables'* and *'drink less cola'* with Mandarin **多吃蔬菜** (*duō chī shūcài*) and **少喝可乐** (*shǎo hē kělè*). Where do **多** (*duō*, more) and **少** (*shǎo*, less) sit in Mandarin — before the noun like English, or right BEFORE the verb?",
        idea:
          "In Mandarin healthy-advice frames, **多** and **少** act like adverbs right **before the action verb**: **多 + Verb + Object** (**多喝水**, **多吃水果**) and **少 + Verb + Object** (**少喝可乐**, **少吃快餐**)! Writing *吃多蔬菜* sounds unnatural in standard Mandarin.",
      },
      body: `### 1. High-Scoring IGCSE Diet Patterns (**健康饮食**, *jiànkāng yǐnshí*)

In Year 8 and Cambridge IGCSE 0547 writing/speaking tasks, examiners reward learners who don't just list foods, but **evaluate** whether a diet is healthy (**健康**, *jiànkāng*) and **nutritionally balanced** (**营养均衡**, *yíngyǎng jūnhéng*):

1. **Giving advice with 多/少 + Verb + Noun**:
   - **我们应该多吃蔬菜和水果，多喝水。** (*Wǒmen yīnggāi duō chī shūcài hé shuǐguǒ, duō hē shuǐ.*) — We should eat more vegetables and fruit, and drink more water.
   - **我们要少吃快餐和零食，少喝可乐和奶茶。** (*Wǒmen yào shǎo chī kuàicān hé língshí, shǎo hē kělè hé nǎichá.*) — We should eat less fast food and snacks, and drink less cola and bubble tea.

2. **Explaining WHY using 对身体好 / 对身体不好**:
   - **牛奶、鸡蛋和鱼很有营养，对身体很好。** (*Niúnǎi, jīdàn hé yú hěn yǒu yíngyǎng, duì shēntǐ hěn hǎo.*) — Milk, eggs and fish are very nutritious and good for your health.
   - **炸鸡太油腻了，可乐太甜了，对身体不好。** (*Zhájī tài yóunì le, kělè tài tián le, duì shēntǐ bù hǎo.*) — Fried chicken is too greasy and cola is too sweet; they are bad for your health.

3. **Linking ideas with 虽然…但是… (although… however…) & 因为…所以… (because… therefore…)**:
   - **虽然汉堡包很好吃，但是太油腻了，所以我很少吃。** (*Suīrán hànbǎobāo hěn hǎochī, dànshì tài yóunì le, suǒyǐ wǒ hěn shǎo chī.*)`,
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Healthy balanced diet pyramid in Mandarin showing duo chi and shao chi food groups"><rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><text x="320" y="34" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">健康饮食金字塔 — Healthy Diet Advice Frames</text><polygon points="210,52 90,232 330,232" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/><polygon points="210,52 170,112 250,112" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/><polygon points="170,112 130,172 290,172 250,112" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/><text x="210" y="96" text-anchor="middle" font-size="11" font-weight="bold" fill="#c81e1e">少吃: 糖·炸鸡</text><text x="210" y="146" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">适量: 鱼·鸡肉·牛奶·鸡蛋</text><text x="210" y="206" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">多吃: 蔬菜·水果·米饭·多喝水</text><rect x="358" y="56" width="256" height="82" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/><text x="486" y="78" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">DO MORE: 多 + Verb + Food</text><text x="486" y="100" text-anchor="middle" font-size="12" fill="#1e293b">多吃蔬菜水果 · 多喝温水</text><text x="486" y="122" text-anchor="middle" font-size="12" fill="#15803d">→ 很有营养，对身体好！</text><rect x="358" y="150" width="256" height="82" rx="10" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/><text x="486" y="172" text-anchor="middle" font-size="13" font-weight="bold" fill="#c81e1e">DO LESS: 少 + Verb + Food</text><text x="486" y="194" text-anchor="middle" font-size="12" fill="#1e293b">少吃快餐零食 · 少喝可乐奶茶</text><text x="486" y="216" text-anchor="middle" font-size="12" fill="#c81e1e">→ 太甜 / 太油腻，对身体不好！</text></svg>',
      diagramCaption:
        "Singapore HPB 'My Healthy Plate' style logic in Mandarin: pair 多/少 + Verb with 对身体好 / 对身体不好.",
      workedExamples: [
        {
          title: "Writing a balanced IGCSE health-advice sentence",
          problem:
            "Translate into Mandarin: 'Eating plenty of vegetables and fruit is good for your health.'",
          steps: [
            "'Eat plenty of vegetables and fruit' places **多** BEFORE **吃**: **多吃蔬菜和水果** (*duō chī shūcài hé shuǐguǒ*).",
            "'Is good for your health' uses the fixed frame **对身体好** (*duì shēntǐ hǎo*) — never use **是** before **好**!",
            "Join smoothly: **多吃蔬菜和水果对身体好。**",
          ],
          answer: "多吃蔬菜和水果对身体好。 (Duō chī shūcài hé shuǐguǒ duì shēntǐ hǎo.)",
          yourTurn: {
            question:
              "Translate into Mandarin (Hanzi or toned Pinyin): 'Drink less cola.'",
            answer: {
              type: "text",
              accept: [
                "少喝可乐",
                "要少喝可乐",
                "应该少喝可乐",
                "shǎo hē kělè",
                "yào shǎo hē kělè",
                "yīnggāi shǎo hē kělè",
              ],
              display: "少喝可乐 (shǎo hē kělè)",
            },
            solution:
              "Put **少** (*shǎo*, less) right BEFORE the verb **喝** (*hē*, drink) + **可乐** (*kělè*): **少喝可乐**.",
          },
        },
      ],
      keyPoints: [
        "Place **多** and **少** BEFORE the verb: **多吃水果**, **多喝水**, **少吃快餐**, **少喝可乐**.",
        "Use **对身体好** ('good for health') and **对身体不好** ('bad for health') to justify opinions.",
        "Explain *why* breakfast matters: **不吃早饭对身体不好** ('Skipping breakfast is bad for your health').",
        "Upgrade sentences with **虽然…但是…**, **有营养** (*yǒu yíngyǎng*), **油腻** (*yóunì*, greasy), and **营养均衡** (*yíngyǎng jūnhéng*).",
      ],
      whyItWorks:
        "A famous Chinese proverb sums up **一日三餐** wisdom in twelve rhythmic characters: **早饭要吃好，午饭要吃饱，晚饭要吃少** (*Zǎofàn yào chī hǎo, wǔfàn yào chī bǎo, wǎnfàn yào chī shǎo* — 'Eat breakfast well, eat lunch until full, eat a light dinner')! Quoting or adapting it in an IGCSE essay instantly impresses examiners.",
      strategies: [
        "多/少 + Verb Rule: Anchor 多 and 少 directly in front of 吃 or 喝.",
        "Claim + Reason Pair: Follow every food habit with 因为很有营养 / 对身体(不)好.",
      ],
      thinkDeeper:
        "In Singapore, Nutri-Grade labels rank drinks from A to D based on sugar (**糖**) and saturated fat, and bubble tea (**奶茶**) shops ask you to choose sugar levels (**少糖** / **半糖** / **无糖**). Why can **少糖** modify the noun **糖** directly on a menu label, whereas in a full sentence you say **少放糖** ('put less sugar') or **少吃糖** ('eat less sugar')?",
    },
  ],
  learn: {
    flashcards: [
      { front: "一日三餐", back: "yī rì sān cān — three meals a day" },
      { front: "早饭 / 午饭 / 晚饭", back: "zǎofàn / wǔfàn / wǎnfàn — breakfast / lunch / dinner" },
      { front: "米饭 vs 炒饭", back: "mǐfàn (cooked rice) vs chǎofàn (fried rice)" },
      { front: "面条 · 包子 · 饺子", back: "miàntiáo (noodles) · bāozi (steamed stuffed bun) · jiǎozi (dumplings)" },
      { front: "粥", back: "zhōu — congee / rice porridge (一碗粥)" },
      { front: "鸡饭 & 烤鸭", back: "jīfàn (chicken rice) & kǎoyā (roast duck)" },
      { front: "猪肉 · 牛肉 · 羊肉", back: "zhūròu (pork) · niúròu (beef) · yángròu (lamb)" },
      { front: "一条鱼", back: "yī tiáo yú — one whole fish (classifier 条!)" },
      { front: "绿茶 & 奶茶", back: "lǜchá (green tea — watch ü!) & nǎichá (milk tea / bubble tea)" },
      { front: "喝汤", back: "hē tāng — to have/drink soup (NEVER *吃汤*!)" },
      { front: "碗 · 盘 · 杯 · 瓶 · 盒", back: "wǎn (bowl) · pán (plate) · bēi (cup) · píng (bottle) · hé (carton/box)" },
      { front: "喝 vs 渴", back: "hē (口 mouth = to drink) vs kě (氵 water = thirsty)" },
      { front: "我饿了 / 我吃饱了", back: "Wǒ è le (I'm hungry) / Wǒ chībǎo le (I'm full)" },
      { front: "多吃蔬菜，少喝可乐", back: "duō chī shūcài, shǎo hē kělè — eat more vegetables, drink less cola" },
      { front: "对身体好", back: "duì shēntǐ hǎo — good for one's health" },
    ],
    mustKnow: [
      "Can you name all three meals in both everyday (**早饭/午饭/晚饭**) and formal (**早餐/午餐/晚餐**) Mandarin?",
      "Can you say what you eat for a meal without adding *给* (e.g. **我早饭吃面包和鸡蛋**)?",
      "Can you form meat names using **Animal + 肉** (**猪肉**, **牛肉**, **鸡肉**, **羊肉**) and use **一条鱼** for fish?",
      "Can you recognise cooking methods by their fire radicals (**炒**, **烤**, **炸**, **煮**, **蒸**)?",
      "Can you pair drinks and foods with the right container classifiers (**一碗汤**, **一盘炒饭**, **一杯绿茶**, **两瓶水**, **一盒牛奶**)?",
      "Can you distinguish **喝** (*hē*, to drink — **口**) from **渴** (*kě*, thirsty — **氵**) every time?",
      "Can you express hunger, thirst and fullness without *是* (**我很饿**, **我很渴**, **我吃饱了**)?",
      "Can you place **多** and **少** BEFORE the verb in healthy-diet advice (**多喝水**, **少吃快餐**)?",
      "Can you justify food choices using **很有营养**, **太油腻了**, and **对身体好 / 对身体不好**?",
    ],
    misconceptions: [
      {
        wrong: "我有早饭在七点。 (Translating English 'have breakfast' with 有 and putting time at the end)",
        right: "我早上七点吃早饭。 (Time comes BEFORE the verb, and meals always use 吃, never 有!)",
      },
      {
        wrong: "我晚饭吃一碗汤。 (Using 吃 'eat' with soup)",
        right: "我晚饭喝一碗汤。 (In Mandarin you always DRINK soup: 喝汤!)",
      },
      {
        wrong: "我是很饿，我是很渴。 (Putting 是 'am' before adjectives)",
        right: "我很饿，我很渴。 / 我饿了，我渴了。 (Never use 是 before stative adjectives!)",
      },
      {
        wrong: "二杯奶茶，二碗米饭。 (Using 二 before a measure word)",
        right: "两杯奶茶，两碗米饭。 (Always use 两 liǎng for '2' in front of classifiers!)",
      },
      {
        wrong: "我们应该吃多蔬菜，喝少可乐。 (Putting 多/少 after the verb like English 'eat more')",
        right: "我们应该多吃蔬菜，少喝可乐。 (Put 多 and 少 directly BEFORE the verb!)",
      },
      {
        wrong: "妈妈买了一个鱼。 (Using generic 个 for fish)",
        right: "妈妈买了一条鱼。 (Fish are long and flexible, so they take 条 tiáo!)",
      },
    ],
    examMistakes: [
      "Confusing lookalike characters **喝** (*hē*, drink — **口**) and **渴** (*kě*, thirsty — **氵**) in reading comprehension and dictation.",
      "Writing `lu cha` instead of **绿茶** (*lǜchá*, `lv4 cha2` on keyboards) — forgetting the umlaut **ü** changes the syllable completely.",
      "Using **给早饭** to translate 'for breakfast' (*我吃面包给早饭* ✗) instead of **我早饭吃面包**.",
      "Mixing up **米饭** (*mǐfàn*, plain cooked rice) and **面条** (*miàntiáo*, noodles) or **面包** (*miànbāo*, bread).",
      "Forgetting the bamboo radical **⺮** on **筷子** (*kuàizi*, chopsticks) and pairing it with *个* instead of **一双筷子**.",
      "Writing *好给身体* word-for-word from English 'good for the body' instead of the natural frame **对身体好**.",
      "Listing 6 foods in an IGCSE 80–130 character task without giving **reasons** or **opinions** (**因为很有营养**, **虽然好吃但是太油腻**).",
    ],
    mnemonics: [
      {
        topic: "喝 (hē, drink) vs 渴 (kě, thirsty)",
        device: "Open your MOUTH (口) to 喝; crave THREE DROPS OF WATER (氵) when 渴!",
        explanation:
          "Both share 曷 on the right, so only the left radical changes: 口 = mouth action (drink), 氵 = water needed (thirsty).",
      },
      {
        topic: "饿 (è, hungry) & 饱 (bǎo, full)",
        device: "饿 = Food (饣) + Me (我): 'Food for ME, I'm starving!' · 饱 = Food (饣) + Wrap (包): 'Wrapped full of food!'",
        explanation:
          "The food radical 饣 links both appetite states and gives you a phonetic clue too (我 wǒ → 饿 è; 包 bāo → 饱 bǎo).",
      },
      {
        topic: "粥 (zhōu, congee / porridge)",
        device: "Rice (米) steaming between two curling puffs of vapour (弓 + 米 + 弓)!",
        explanation:
          "Seeing 米 right in the middle of 粥 reminds you immediately that congee is slow-simmered rice porridge.",
      },
      {
        topic: "Three-Meal Proverb Rhythm",
        device: "早吃好，午吃饱，晚吃少 (Morning GOOD, Noon FULL, Evening LITTLE)",
        explanation:
          "Locks in 早/午/晚 order AND the adjectives 好/饱/少 for instant healthy-diet essay sentences.",
      },
    ],
    realWorld: [
      {
        title: "Singapore Kaya Toast & Kopitiam Breakfast",
        detail:
          "A classic Singaporean **早饭** pairs **咖椰烤面包** (*kāyē kǎo miànbāo*, kaya toast) with two soft-boiled **鸡蛋** (*jīdàn*) and hot **咖啡** or **奶茶** — completely different from a northern Beijing breakfast of **包子**, **粥** and **豆浆**!",
        emoji: "🍞",
      },
      {
        title: "Hainanese Chicken Rice (海南鸡饭)",
        detail:
          "Brought to Singapore by immigrants from Hainan Island in southern China, **海南鸡饭** is found in almost every **小贩中心** (*xiǎofàn zhōngxīn*) and school canteen — making **一盘鸡饭** essential everyday vocabulary.",
        emoji: "🍗",
      },
      {
        title: "Singapore Nutri-Grade (A–D) Drink Labels",
        detail:
          "Walk into any FairPrice supermarket or bubble tea shop in Singapore and you will see Nutri-Grade colour badges warning shoppers to **少喝含糖饮料** (drink fewer sugary drinks) and choose **少糖** (less sugar) or **水**.",
        emoji: "🥤",
      },
      {
        title: "Chinese New Year Dumplings (饺子)",
        detail:
          "In northern China, families wrap **饺子** together on New Year's Eve because dumplings are shaped like ancient silver ingots (*元宝*), symbolising wealth and family reunion.",
        emoji: "🥟",
      },
      {
        title: "你吃饭了吗？ — 'Have you eaten yet?'",
        detail:
          "Neighbours in China and older generations in Singapore still greet one another with **你吃饱了吗？** or **你吃饭了吗？** — not an invitation to lunch, but a warm way of asking 'How are you doing?'",
        emoji: "🍚",
      },
    ],
    videos: [
      {
        title: "Chinese Food & Three Meals Vocabulary (IGCSE Mandarin)",
        channel: "Everyday Chinese",
        url: "https://www.youtube.com/results?search_query=mandarin+chinese+three+meals+food+drinks+vocabulary+zaofan+wufan+wanfan",
      },
      {
        title: "Drinks & Measure Words in Mandarin (杯, 瓶, 碗, 盘)",
        channel: "ChineseZeroToHero",
        url: "https://www.youtube.com/results?search_query=mandarin+food+and+drink+measure+words+wan+pan+bei+ping",
      },
      {
        title: "Talking About a Healthy Diet in Chinese (健康饮食)",
        channel: "Grace Mandarin Chinese",
        url: "https://www.youtube.com/results?search_query=healthy+diet+in+mandarin+chinese+jiankang+yinshi+igcse",
      },
      {
        title: "How to Make Stir-Fried Tomato and Eggs (西红柿炒鸡蛋)",
        channel: "Chinese Cooking Demystified",
        url: "https://www.youtube.com/results?search_query=xihongshi+chao+jidan+tomato+egg+stir+fry+chinese",
      },
    ],
    formulas: [
      {
        name: "Mealtime Habit Frame",
        formula: "Subject + (Time) + 早饭 / 午饭 / 晚饭 + 吃 / 喝 + Food / Drink",
        note: "我每天早饭吃面包和鸡蛋，喝一杯牛奶。 (Wǒ měitiān zǎofàn chī miànbāo hé jīdàn, hē yī bēi niúnǎi.)",
      },
      {
        name: "Container Classifier Frame",
        formula: "Number (两 for 2!) + 杯 / 瓶 / 碗 / 盘 / 盒 + Noun",
        note: "两碗米饭 · 一盘鸡饭 · 一杯绿茶 · 两瓶水 (liǎng wǎn mǐfàn · yī pán jīfàn · yī bēi lǜchá · liǎng píng shuǐ)",
      },
      {
        name: "Appetite State vs New Situation",
        formula: "Subject + 很 + 饿 / 渴  |  Subject + 饿了 / 渴了 / 吃饱了",
        note: "我很饿，我想吃饭。 / 谢谢，我已经吃饱了！ (Never put 是 before 饿 or 渴!)",
      },
      {
        name: "Healthy Advice (多 / 少 before Verb)",
        formula: "Subject + 应该 / 要 + 多 / 少 + 吃 / 喝 + Food / Drink",
        note: "我们应该多吃蔬菜和水果，少喝可乐。 (Wǒmen yīnggāi duō chī shūcài hé shuǐguǒ, shǎo hē kělè.)",
      },
      {
        name: "Health Impact Justification",
        formula: "Food / Habit + (很有营养 / 太油腻了) + 对身体好 / 对身体不好",
        note: "多喝水对身体好；常吃快餐对身体不好。 (Duō hē shuǐ duì shēntǐ hǎo; cháng chī kuàicān duì shēntǐ bù hǎo.)",
      },
    ],
  },
};
