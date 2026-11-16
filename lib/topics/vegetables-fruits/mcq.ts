import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "vegetables-fruits-m1",
    title: "Paper 1 · Fruits, Vegetables, Weights & Prices Foundations",
    questions: [
      {
        id: "vegetables-fruits-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "fruits-vocab",
        question: "Which tropical fruit — famous in Singapore as the 'King of Fruits' — is **榴莲** (*liúlián*)?",
        options: ["durian", "mango", "watermelon", "strawberry"],
        answerIndex: 0,
        hints: ["It has a spiky shell, strong aroma, and is banned on Singapore's MRT!"],
        explanation:
          "**榴莲** (*liúlián*) is **durian**. 'Mango' is **芒果** (*mángguǒ*), 'watermelon' is **西瓜** (*xīguā*), and 'strawberry' is **草莓** (*cǎoméi*).",
      },
      {
        id: "vegetables-fruits-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "fruits-vocab",
        question: "What does **草莓** (*cǎoméi*) mean in English?",
        options: ["grape", "strawberry", "banana", "orange"],
        answerIndex: 1,
        hints: ["Both characters share the plant/grass top radical **艹** (*cǎo* = grass/herb, *méi* = berry)."],
        explanation:
          "**草莓** (*cǎoméi*) means **strawberry**. 'Grape' is **葡萄** (*pútao*), 'banana' is **香蕉** (*xiāngjiāo*), and 'orange' is **橙子** (*chéngzi*).",
      },
      {
        id: "vegetables-fruits-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "vegetables-vocab",
        question: "Which Mandarin word means **'potato'** (literally 'earth-bean')?",
        options: ["豆腐", "洋葱", "土豆", "蘑菇"],
        answerIndex: 2,
        hints: ["Look for **土** (*tǔ*, soil/earth) + **豆** (*dòu*, bean)!"],
        explanation:
          "**土豆** (*tǔdòu*, literally 'earth-bean') means **potato**. **豆腐** (*dòufu*) is tofu, **洋葱** (*yángcōng*) is onion, and **蘑菇** (*mógu*) is mushroom.",
      },
      {
        id: "vegetables-fruits-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "vegetables-vocab",
        question: "Both **西红柿** (*xīhóngshì*) and **番茄** (*fānqié*) mean which kitchen ingredient?",
        options: ["cucumber", "carrot", "Chinese cabbage", "tomato"],
        answerIndex: 3,
        hints: ["Think of the classic Chinese home-cooked dish **西红柿炒鸡蛋** (or **番茄酱** ketchup in Singapore)!"],
        explanation:
          "Both **西红柿** (common in Northern China) and **番茄** (common in Singapore & Southern China) mean **tomato**.",
      },
      {
        id: "vegetables-fruits-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "money-weights",
        question: "In standard Chinese market weights, how many **斤** (*jīn*) equal **1 公斤** (*gōngjīn*, 1 kilogram)?",
        options: ["2 斤 (两斤)", "5 斤 (五斤)", "10 斤 (十斤)", "0.5 斤 (半斤)"],
        answerIndex: 0,
        hints: ["**1 斤** = 500 grams, and **1 公斤** = 1,000 grams."],
        explanation:
          "Because **1 斤 = 500 g** and **1 公斤 = 1,000 g (1 kg)**, **1 公斤 = 2 斤 (两斤)**.",
      },
      {
        id: "vegetables-fruits-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fruits-vocab",
        question: "Choose the ONLY grammatical sentence for *'These mangoes are both fragrant and sweet'*:",
        options: [
          "这些芒果是又香又甜。",
          "这些芒果又香又甜。",
          "这些芒果又香和甜。",
          "这些芒果是香和甜。",
        ],
        answerIndex: 1,
        hints: [
          "Mandarin stative adjectives NEVER take **是** before them!",
          "Which paired structure means 'both [Adj 1] and [Adj 2]'?",
        ],
        explanation:
          "**这些芒果又香又甜。** links two adjectives cleanly with **又…又…** and no **是**. Adding **是** before adjectives or joining two adjectives with **和** breaks Mandarin grammar.",
      },
      {
        id: "vegetables-fruits-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fruits-vocab",
        question: "Match the three fruits to their most natural shape/container measure words: **___葡萄**, **___草莓**, **___香蕉**.",
        options: [
          "条 · 本 · 件",
          "块 · 双 · 张",
          "串 · 盒 · 根",
          "口 · 碗 · 顶",
        ],
        answerIndex: 2,
        hints: [
          "Grapes come in a cluster/bunch (**串**), strawberries in a punnet/box (**盒**), and a single banana is long and stick-like (**根**).",
          "Look at the character **串** — items strung together on a stem!",
        ],
        explanation:
          "**一串葡萄** (a bunch of grapes), **一盒草莓** (a punnet of strawberries), and **一根香蕉** (a single banana) match each fruit's exact physical form.",
      },
      {
        id: "vegetables-fruits-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "vegetables-vocab",
        question: "How do you say *'We should eat plenty of fresh vegetables'* in idiomatic Mandarin?",
        options: [
          "我们应该吃多新鲜的蔬菜。",
          "我们应该新鲜的蔬菜吃多。",
          "多我们应该吃新鲜的蔬菜。",
          "我们应该多吃新鲜的蔬菜。",
        ],
        answerIndex: 3,
        hints: [
          "In health advice ('eat more / eat plenty of'), does **多** stand BEFORE or AFTER **吃**?",
          "**应该** ('should') precedes **多吃**.",
        ],
        explanation:
          "**我们应该多吃新鲜的蔬菜。** places adverbial **多** directly before **吃** (**多吃** = eat plenty of). Writing *吃多* copies English word order.",
      },
      {
        id: "vegetables-fruits-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "money-weights",
        question: "A stallholder says: **青菜三块五一斤！** How much does **1 斤** of greens cost?",
        options: [
          "3.50 yuan/dollars",
          "3.05 yuan/dollars",
          "35.00 yuan/dollars",
          "0.35 yuan/dollars",
        ],
        answerIndex: 0,
        hints: [
          "In spoken Chinese money, when the unit after **块** is omitted, it always stands for the **next unit down** (**毛** = 0.10)!",
          "How would 3.05 have to be said instead (using **零**)?",
        ],
        explanation:
          "**三块五** is spoken shorthand for **三块五毛** = **3.50**. To say 3.05, you MUST insert **零**: **三块零五分**.",
      },
      {
        id: "vegetables-fruits-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "money-weights",
        question: "What is the accurate tone-marked Pinyin distinction between **买** (to buy) and **卖** (to sell)?",
        options: [
          "买 is mài (4th tone); 卖 is mǎi (3rd tone).",
          "买 is mǎi (3rd tone); 卖 is mài (4th tone).",
          "Both are pronounced mǎi (3rd tone).",
          "买 is mǎi; 卖 is māi (1st tone).",
        ],
        answerIndex: 1,
        hints: [
          "Recall the stallholder memory hook: **卖** has extra stock **十** on top, shouted in a falling tone!",
          "**买** dips low like an empty basket ready to buy.",
        ],
        explanation:
          "**买** ('to buy') is 3rd tone **mǎi**, while **卖** ('to sell', with **十** on top) is 4th tone **mài**.",
      },
      {
        id: "vegetables-fruits-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "bargaining-tai-le",
        question: "What is the correct Pinyin for **便宜** ('cheap / inexpensive')?",
        options: ["biànyí", "fāngbiàn", "piányi", "piànyí"],
        answerIndex: 2,
        hints: ["Watch out! **便** is *biàn* in **方便** ('convenient'), but changes initial consonant AND tone when it means 'cheap'!"],
        explanation:
          "When meaning 'cheap', **便宜** is pronounced **piányi** (2nd tone *pián* + neutral *yi*), NEVER *biànyí*!",
      },
      {
        id: "vegetables-fruits-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bargaining-tai-le",
        question: "Which sentence politely asks a market seller to **make the price a bit cheaper**?",
        options: [
          "老板，有点儿便宜吧！",
          "老板，一点儿贵吧！",
          "老板，太便宜了！",
          "老板，可以便宜一点儿吗？",
        ],
        answerIndex: 3,
        hints: [
          "Does a polite request for adjustment put **一点儿** BEFORE or AFTER the adjective **便宜**?",
          "Why does *有点儿便宜* sound strange?",
        ],
        explanation:
          "**老板，可以便宜一点儿吗？** ('Boss, could you make it a little cheaper?') places **一点儿** AFTER the adjective **便宜**. **有点儿** before an adjective expresses a mild complaint (**有点儿贵**), never a bargaining request.",
      },
      {
        id: "vegetables-fruits-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bargaining-tai-le",
        question: "At checkout, the fruit seller says: **一共十六块，您给二十，找您四块。** What does **找您四块** mean?",
        options: [
          "Here is 4 yuan/dollars change for you.",
          "You still owe me 4 yuan/dollars.",
          "Please look on the floor for 4 yuan/dollars.",
          "I am giving you a 4-yuan discount.",
        ],
        answerIndex: 0,
        hints: [
          "Check the arithmetic: total (**一共**) = 16, customer paid (**您给**) = 20.",
          "20 − 16 = 4! What does **找(钱)** mean at a shop till?",
        ],
        explanation:
          "In shopping contexts, **找钱** / **找您…** means **to give change**: total is 16, you handed over 20, so **找您四块** = 'Here is 4 yuan/dollars change for you.'",
      },
      {
        id: "vegetables-fruits-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-dialogue",
        question: "What is a **巴刹** (*bāshā*) in Singapore Mandarin?",
        options: [
          "an MRT train ticket",
          "a traditional wet market / fresh food market",
          "a cinema screen",
          "a sweet fruit dessert",
        ],
        answerIndex: 1,
        hints: [
          "Borrowed from Malay *pasar* (equivalent to Mainland China's **菜市场**).",
          "Where Grandma goes early on Sunday morning to buy fresh **青菜** and **鱼**!",
        ],
        explanation:
          "In Singapore & Malaysian Mandarin, **巴刹** (*bāshā*) means a **wet market** (fresh food market), corresponding to **菜市场** (*càishìchǎng*) in China.",
      },
      {
        id: "vegetables-fruits-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "market-dialogue",
        question: "Read this market purchase carefully:\n**苹果八块钱一斤。妈妈买了一公斤苹果，还有一盒十二块钱的草莓。她给老板三十块钱，老板应该找她多少钱？**",
        options: [
          "10 块钱",
          "6 块钱",
          "2 块钱",
          "28 块钱",
        ],
        answerIndex: 2,
        hints: [
          "Trap 1: Apples are **8 yuan per 斤**, and Mum bought **一公斤 (1 kg = 2 斤)**!",
          "Trap 2: Calculate **一共** (16 + 12 = 28), then subtract from **30** to find **找她多少钱** (change)!",
        ],
        explanation:
          "**一公斤苹果** = 2 斤 × 8 = **16 yuan**. Plus strawberries (**12 yuan**) = **28 yuan** total (**一共二十八块**). She pays **30 yuan**, so the seller gives her 30 − 28 = **2 块钱 (两块钱)** change!",
      },
    ],
  },

  {
    id: "vegetables-fruits-m2",
    title: "Paper 2 · Radicals, Classifiers, Discounts & Market Calculations",
    questions: [
      {
        id: "vegetables-fruits-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "fruits-vocab",
        question: "Look at the character **鲜** in **新鲜** (*xīnxiān*, fresh). Which two animal characters sit side by side inside **鲜**?",
        options: [
          "牛 (ox) + 马 (horse)",
          "鸟 (bird) + 虫 (insect)",
          "狗 (dog) + 猫 (cat)",
          "鱼 (fish) + 羊 (sheep/lamb)",
        ],
        answerIndex: 3,
        hints: ["Left side swims in water (**鱼**); right side has horns (**羊**)!"],
        explanation:
          "**鲜** combines **鱼** (*yú*, fish) + **羊** (*yáng*, lamb) — two ingredients prized in ancient Chinese cuisine for fresh, delicate umami flavour!",
      },
      {
        id: "vegetables-fruits-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "vegetables-vocab",
        question: "Which vegetable is **胡萝卜** (*húluóbo*)?",
        options: ["carrot", "cucumber", "sweetcorn", "aubergine"],
        answerIndex: 0,
        hints: ["Rabbits love it! Plain **萝卜** is white radish, and adding **胡** makes it orange."],
        explanation:
          "**胡萝卜** (*húluóbo*) is **carrot**. 'Cucumber' is **黄瓜**, 'sweetcorn' is **玉米**, and 'aubergine' is **茄子**.",
      },
      {
        id: "vegetables-fruits-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "fruits-vocab",
        question: "If a green mango tastes **酸** (*suān*), how does it taste?",
        options: ["sweet", "sour / tangy", "spicy", "salty"],
        answerIndex: 1,
        hints: ["Think of lemons (**柠檬很酸**)!"],
        explanation:
          "**酸** (*suān*) means **sour / tangy** (like lemons or unripe mangoes). 'Sweet' is **甜** (*tián*), 'spicy' is **辣** (*là*), and 'salty' is **咸** (*xián*).",
      },
      {
        id: "vegetables-fruits-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "vegetables-vocab",
        question: "Complete the healthy-eating sentence: **每天吃蔬菜和水果____身体很好。**",
        options: ["跟", "在", "对", "去"],
        answerIndex: 2,
        hints: [
          "Recall the IGCSE health frame meaning *'is very good FOR one's body/health'*.",
          "**A + ___ + 身体好**.",
        ],
        explanation:
          "The idiomatic structure is **A + 对 + 身体(很)好** (*A duì shēntǐ hěn hǎo* — 'A is very good for your health').",
      },
      {
        id: "vegetables-fruits-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "money-weights",
        question: "Compare **半斤** (*bàn jīn*) and **一斤半** (*yì jīn bàn*). How many grams is each (given 1 斤 = 500 g)?",
        options: [
          "半斤 = 500 g; 一斤半 = 1,500 g",
          "半斤 = 150 g; 一斤半 = 500 g",
          "Both equal 750 g",
          "半斤 = 250 g; 一斤半 = 750 g",
        ],
        answerIndex: 3,
        hints: [
          "**半斤** = 0.5 斤 (half of 500 g).",
          "**一斤半** = 1 斤 + 0.5 斤 = 1.5 斤!",
        ],
        explanation:
          "**半斤** is half a jin (0.5 × 500 g = **250 g**), whereas **一斤半** is one-and-a-half jin (1.5 × 500 g = **750 g**). Notice **半** stands *before* **斤** for 0.5, and *after* **斤** when added to a whole number!",
      },
      {
        id: "vegetables-fruits-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "money-weights",
        question: "How is a supermarket price tag reading **14.60 元** spoken naturally in everyday Mandarin?",
        options: [
          "十四块六 (or 十四块六毛)",
          "十四块零六",
          "一四元六分",
          "十四毛六块",
        ],
        answerIndex: 0,
        hints: [
          "**14 元** in speech is **十四块**.",
          "**6 角 (0.60)** in speech is **六毛**, or shortened to **六** right after **十四块**!",
        ],
        explanation:
          "**14.60 元** (**十四元六角**) is spoken naturally as **十四块六** or **十四块六毛(钱)**.",
      },
      {
        id: "vegetables-fruits-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "money-weights",
        question: "Which of these spoken money expressions is **UNGRAMMATICAL**?",
        options: [
          "两块五毛钱",
          "两块五钱",
          "两块五",
          "两元五角",
        ],
        answerIndex: 1,
        hints: [
          "Check the rule about dropping **毛** when the noun **钱** is still attached at the end!",
          "Can you drop **毛** if **钱** follows immediately?",
        ],
        explanation:
          "**两块五钱** is ungrammatical! You can drop **毛** ONLY at the very end of the price phrase (**两块五**). If you keep the noun **钱**, you MUST keep **毛** too: **两块五毛钱**.",
      },
      {
        id: "vegetables-fruits-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bargaining-tai-le",
        question: "A Singapore supermarket sign says: **今天进口苹果打八折！** If a bag of imported apples normally costs **S$10**, how much do you pay today?",
        options: ["S$2", "S$80", "S$8", "S$9.20"],
        answerIndex: 2,
        hints: [
          "Remember the golden Chinese discount rule: **打八折** states the fraction you **PAY**, not the fraction taken off!",
          "8 out of 10 of S$10 = ?",
        ],
        explanation:
          "In Mandarin, **打八折** (*dǎ bā zhé*) means you pay **80%** of the original price (20% off): 10 × 0.8 = **S$8** (**八块新币**).",
      },
      {
        id: "vegetables-fruits-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bargaining-tai-le",
        question: "Fill in the two blanks accurately:\n**这个榴莲_______贵，老板，可以便宜_______吗？**",
        options: [
          "一点儿 … 有点儿",
          "有点儿 … 有点儿",
          "一点儿 … 一点儿",
          "有点儿 … 一点儿",
        ],
        answerIndex: 3,
        hints: [
          "Blank 1 stands **BEFORE** the adjective **贵** (a mild complaint).",
          "Blank 2 stands **AFTER** the adjective **便宜** (a polite bargaining request).",
        ],
        explanation:
          "**有点儿** goes BEFORE an adjective to express a mild complaint (**有点儿贵** = a bit pricey), while **一点儿** goes AFTER an adjective in comparisons/requests (**便宜一点儿** = a bit cheaper).",
      },
      {
        id: "vegetables-fruits-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bargaining-tai-le",
        question: "After putting two punnets of strawberries into a bag, the stallholder asks: **还要别的吗？** What is she asking?",
        options: [
          "Would you like anything else?",
          "Are you paying by card or cash?",
          "Do you have a shopping bag?",
          "Are these strawberries sweet enough?",
        ],
        answerIndex: 0,
        hints: [
          "**还** = still/also, **要** = want, **别的** = other things.",
          "Think of what a shopkeeper asks right before adding up your final bill!",
        ],
        explanation:
          "**还要别的吗？** (*Hái yào bié de ma?*) means **'Would you like anything else?'** — to which a shopper replies **再来…** (if buying more) or **不要了，够了** ('Nothing else, that's enough').",
      },
      {
        id: "vegetables-fruits-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fruits-vocab",
        question: "Why is it wrong to say *西瓜很好喝* when eating slices of watermelon?",
        options: [
          "西瓜 can only be described as 贵 or 便宜.",
          "好喝 is for drinks/liquids (like 西瓜汁 watermelon juice), whereas solid fruit slices use 好吃!",
          "西瓜 must use 好玩 instead.",
          "很 can never precede 好喝.",
        ],
        answerIndex: 1,
        hints: [
          "Look at the second character of **好吃** (**吃** = eat) vs **好喝** (**喝** = drink).",
          "Do you **吃西瓜** or *喝西瓜*?",
        ],
        explanation:
          "Because you **eat** solid fruit (**吃西瓜**), watermelon slices are **好吃** (*hǎochī*, delicious to eat) and **多汁** (*duōzhī*, juicy). **好喝** (*hǎohē*) is reserved for beverages and soups like **西瓜汁很好喝**!",
      },
      {
        id: "vegetables-fruits-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "money-weights",
        question: "Look at the spoken price **两块二** (*liǎng kuài èr* = ¥2.20). Why is the first '2' **两** while the second '2' is **二**?",
        options: [
          "Mandarin forbids repeating the same character twice in one price.",
          "两 is used for yuan and 二 is always required before 毛.",
          "The first '2' sits directly before the classifier 块 (requiring 两块), whereas 毛 was dropped at the end, leaving a bare numeral 二!",
          "两块二 actually means ¥2.02.",
        ],
        answerIndex: 2,
        hints: [
          "Test what happens if you do NOT drop **毛**: you say **两块两毛**!",
          "Why did **两毛** switch to **二** once **毛** vanished?",
        ],
        explanation:
          "Before an explicit measure word (**块** or **毛**), '2' becomes **两** (**两块两毛**). When **毛** is omitted in shorthand, the trailing '2' has no measure word after it, so it reverts to bare counting numeral **二**: **两块二** (¥2.20).",
      },
      {
        id: "vegetables-fruits-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "vegetables-vocab",
        question: "A Tanglin student writes: **我妈妈买了一斤萝卜和两根黄瓜做沙拉，因为胡萝卜是橙色的！** What vocabulary slip did the student make in the first clause?",
        options: [
          "黄瓜 cannot take the classifier 根.",
          "沙拉 cannot contain vegetables.",
          "一斤 cannot be used with root vegetables.",
          "They wrote 萝卜 (white radish) in the first clause when they meant orange 胡萝卜 (carrot)!",
        ],
        answerIndex: 3,
        hints: [
          "Compare **萝卜** in the first clause with **因为胡萝卜是橙色的** ('because carrots are orange') in the second clause!",
          "What colour is plain **萝卜** vs **胡萝卜**?",
        ],
        explanation:
          "Plain **萝卜** (*luóbo*) refers to white radish (daikon), NOT orange carrot! To mean orange carrot consistently, you must keep **胡**: **一斤胡萝卜**.",
      },
      {
        id: "vegetables-fruits-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "market-dialogue",
        question: "Read this supermarket vs wet-market comparison:\n**奶奶每天早上都去巴刹买菜，因为她觉得巴刹的青菜和豆腐比超市新鲜，而且可以跟老板聊天。妈妈平时工作很忙，所以周末常常去超市买一整个星期的水果和蔬菜。**\nWhich statement matches the passage?",
        options: [
          "Grandma goes to the wet market every morning because she finds the greens and tofu fresher than the supermarket's and enjoys chatting with stallholders.",
          "Mum goes to the wet market every morning before work.",
          "Grandma prefers the supermarket because it has air-conditioning.",
          "Mum never buys fruit at the supermarket.",
        ],
        answerIndex: 0,
        hints: [
          "Check **奶奶**'s sentence first: **巴刹的青菜和豆腐比超市新鲜，而且可以跟老板聊天**.",
          "Contrast that with **妈妈** (busy on weekdays, shops at **超市** at weekends).",
        ],
        explanation:
          "Grandma visits the **巴刹** every morning because she thinks its greens and tofu are fresher than the supermarket's (**比超市新鲜**) and she can chat with the stallholders (**跟老板聊天**), whereas busy Mum stocks up weekly at the **超市**.",
      },
      {
        id: "vegetables-fruits-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "bargaining-tai-le",
        question: "At a weekend fruit fair:\n- **芒果**：原价 (original price) **二十块钱一公斤**，今天**打七五折**。\n- **葡萄**：**十八块钱一串**，买两串**便宜四块** (¥4 off the pair)。\nIf Dad buys **1 公斤 of mangoes** and **2 bunches of grapes**, how much does he pay altogether?",
        options: [
          "51 块钱",
          "47 块钱",
          "49 块钱",
          "37 块钱",
        ],
        answerIndex: 1,
        hints: [
          "**打七五折** = pay **75%** (0.75 × 20 = 15).",
          "Grapes: 2 bunches = 2 × 18 = 36, minus **便宜四块** (36 − 4 = 32). Add the two subtotals!",
        ],
        explanation:
          "Mangoes at **打七五折** (75% of 20) cost **15 块**. Two bunches of grapes cost 2 × 18 − 4 = **32 块**. Altogether (**一共**), Dad pays 15 + 32 = **47 块钱**!",
      },
    ],
  },

  {
    id: "vegetables-fruits-m3",
    title: "Paper 3 · IGCSE Listening/Reading Traps & Cultural Context",
    questions: [
      {
        id: "vegetables-fruits-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "vegetables-vocab",
        question: "What ingredient is **豆腐** (*dòufu*)?",
        options: ["potato", "mushroom", "tofu / bean curd", "sweetcorn"],
        answerIndex: 2,
        hints: ["Made from soya beans (**豆**) and sounds right like its English loanword!"],
        explanation:
          "**豆腐** (*dòufu*) is **tofu / bean curd** (in fact, English 'tofu' comes via Japanese from Chinese **豆腐**!).",
      },
      {
        id: "vegetables-fruits-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "fruits-vocab",
        question: "What does **多汁** (*duōzhī*) mean when describing an orange (**橙子**)?",
        options: ["seedless", "expensive", "sour", "juicy"],
        answerIndex: 3,
        hints: ["**多** = lots of, **汁** (*zhī*, with water radical **氵**) = juice!"],
        explanation:
          "**多汁** (*duōzhī*, literally 'many-juices') means **juicy**.",
      },
      {
        id: "vegetables-fruits-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "money-weights",
        question: "What question is a shopper asking when they point at mangoes and say **老板，芒果怎么卖？**",
        options: [
          "How are the mangoes sold / what is the price per unit?",
          "Where were these mangoes grown?",
          "Why are you selling mangoes today?",
          "Have all the mangoes sold out?",
        ],
        answerIndex: 0,
        hints: ["**怎么卖** literally asks 'how sold?' — prompting an answer like **八块钱一斤**!"],
        explanation:
          "**怎么卖？** (*zěnme mài?*) is the most natural market question for asking **both the price and the unit** (e.g. per jin, per kilo, or per box).",
      },
      {
        id: "vegetables-fruits-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "fruits-vocab",
        question: "Read: **妹妹不喜欢吃柠檬，因为太酸了；她最喜欢吃熟了的香蕉和芒果，因为又香又甜。** Which fruits does the younger sister love most?",
        options: [
          "Lemons and green apples",
          "Ripe bananas and mangoes",
          "Watermelons and durians",
          "Strawberries and grapes",
        ],
        answerIndex: 1,
        hints: [
          "Skip what she dislikes (**柠檬** = lemon).",
          "Look after **她最喜欢吃…**: what does **熟了的香蕉和芒果** mean?",
        ],
        explanation:
          "**熟了的香蕉和芒果** means **ripe bananas and mangoes**, which she loves because they are both fragrant and sweet (**又香又甜**).",
      },
      {
        id: "vegetables-fruits-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "vegetables-vocab",
        question: "Which group contains **ONLY vegetables** (no fruits)?",
        options: [
          "西红柿 · 草莓 · 黄瓜 · 青菜",
          "土豆 · 菠萝 · 洋葱 · 白菜",
          "黄瓜 · 胡萝卜 · 洋葱 · 白菜",
          "蘑菇 · 桃子 · 茄子 · 辣椒",
        ],
        answerIndex: 2,
        hints: [
          "Spot the sneaky fruit hiding in three of the groups: **草莓** (strawberry), **菠萝** (pineapple), **桃子** (peach)!",
          "Verify all four items in the remaining list.",
        ],
        explanation:
          "**黄瓜** (cucumber), **胡萝卜** (carrot), **洋葱** (onion), and **白菜** (Chinese cabbage) are all culinary vegetables. The other lists sneak in **草莓** (strawberry), **菠萝** (pineapple), or **桃子** (peach).",
      },
      {
        id: "vegetables-fruits-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "money-weights",
        question: "How do you write **¥5.08** (*five yuan and eight cents — zero dimes!*) accurately in Mandarin?",
        options: [
          "五块八",
          "五元八角",
          "五十八分",
          "五块零八分 (or 五元零八分)",
        ],
        answerIndex: 3,
        hints: [
          "Remember **五块八** means **5.80**, NOT 5.08!",
          "When the **角/毛** (tenths) place is empty (0), you MUST say **零** (*líng*) and include **分**!",
        ],
        explanation:
          "Because the tenths (**角/毛**) column is zero, ¥5.08 must include **零** and end with **分**: **五块零八分** (spoken) or **五元零八分** (written). **五块八** is ¥5.80!",
      },
      {
        id: "vegetables-fruits-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bargaining-tai-le",
        question: "Choose the sentence that uses **比** (*bǐ*, comparison) **correctly** to compare fruit prices:",
        options: [
          "榴莲比香蕉贵得多。",
          "榴莲比香蕉很贵。",
          "榴莲很比香蕉贵。",
          "榴莲比香蕉太贵了。",
        ],
        answerIndex: 0,
        hints: [
          "Golden **比** rule: NEVER use **很** or **太** before the adjective in an **A 比 B + Adj** sentence!",
          "To say 'much more expensive', put **得多** *after* **贵**.",
        ],
        explanation:
          "**榴莲比香蕉贵得多。** ('Durians are much more expensive than bananas') is 100% grammatical. Degree adverbs like **很** and **太** are strictly forbidden before the adjective in **比** comparisons!",
      },
      {
        id: "vegetables-fruits-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bargaining-tai-le",
        question: "A stallholder says: **对不起，今天的草莓已经卖完了，明天早上再来买吧！** Why can't you buy strawberries right now?",
        options: [
          "The strawberries are too sour today.",
          "Today's strawberries have already sold out.",
          "The shop only accepts cash today.",
          "Strawberries are too expensive today.",
        ],
        answerIndex: 1,
        hints: [
          "Look at **已经卖完了** (*yǐjīng màiwán le*).",
          "**卖** (*mài*) = sell, **完** (*wán*) = finished!",
        ],
        explanation:
          "**已经卖完了** means **have already sold out**, so the seller invites you to come back tomorrow morning (**明天早上再来买吧**).",
      },
      {
        id: "vegetables-fruits-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "market-dialogue",
        question: "In the buyer's line **老板，再来两块豆腐吧！**, what does **再来…** mean?",
        options: [
          "Please come back to my house twice.",
          "I will return to the shop later.",
          "Please give me / I'll also take (two pieces of tofu)!",
          "Tofu arrived at the market again.",
        ],
        answerIndex: 2,
        hints: [
          "At a market stall or restaurant, **来 + Quantity + Item** is a lively way to order/request an item!",
          "**再** here means 'in addition / also'.",
        ],
        explanation:
          "At food stalls and restaurants, **来** acts as a brisk ordering verb ('bring / give me'), so **再来两块豆腐吧！** means **'I'll also take / please add two pieces of tofu!'**",
      },
      {
        id: "vegetables-fruits-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "vegetables-vocab",
        question: "Look at the radicals of **蔬, 菜, 苹, 草, 莓, 葡, 萄, 蘑, 菇**. Every single one shares **艹** at the top because **艹** is the semantic radical for:",
        options: [
          "water and juice",
          "metal coins and trade",
          "cooking over fire",
          "grass, herbs, and plants",
        ],
        answerIndex: 3,
        hints: [
          "Think of **草** (*cǎo*, grass) — **艹** is its compressed top-radical form!",
          "Notice that every character in the list names a berry, vine, mushroom, or leafy vegetable.",
        ],
        explanation:
          "**艹** (*cǎozìtóu*, 'grass-character top') is the semantic radical for **grass, herbs, berries, vines, and plants**, appearing across dozens of fruit and vegetable characters.",
      },
      {
        id: "vegetables-fruits-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "money-weights",
        question: "Compare **新币** (*Xīnbì*) and **人民币** (*Rénmínbì*). Where is each currency used?",
        options: [
          "新币 is Singapore dollars (SGD); 人民币 is Chinese yuan (RMB).",
          "新币 is brand-new coins; 人民币 is old banknotes.",
          "Both are used only in Beijing.",
          "新币 is Malaysian ringgit; 人民币 is Hong Kong dollars.",
        ],
        answerIndex: 0,
        hints: [
          "**新** stands for **新加坡** (Singapore)!",
          "**人民币** literally means 'People's Currency', the official currency of China.",
        ],
        explanation:
          "**新币** (*Xīnbì*, short for 新加坡元) is the **Singapore dollar (SGD)**, while **人民币** (*Rénmínbì*, 'People's Currency') is **China's currency (RMB)**.",
      },
      {
        id: "vegetables-fruits-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "market-dialogue",
        question: "Read this dialogue at a neighbourhood **巴刹**:\n- 阿姨：**小妹妹，今天想买什么？西瓜两块钱一斤，很甜！**\n- 小丽：**阿姨，这个西瓜多重？**\n- 阿姨：**正好六斤半！**\n- 小丽：**好，我要这个西瓜，再来两斤三块五一斤的青菜。**\nHow much is Xiaoli's **entire bill** before any bargaining?",
        options: [
          "16.50 块",
          "20 块",
          "13 块",
          "23.50 块",
        ],
        answerIndex: 1,
        hints: [
          "Watermelon: **六斤半** (6.5 jin) × **两块** (2.00/jin) = ?",
          "Greens: **两斤** (2 jin) × **三块五** (3.50/jin) = ? Add both items!",
        ],
        explanation:
          "Watermelon: 6.5 斤 × 2 = **13 块**. Greens: 2 斤 × 3.50 = **7 块**. Total (**一共**) = 13 + 7 = **20 块** (**二十块钱**).",
      },
      {
        id: "vegetables-fruits-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "bargaining-tai-le",
        question: "Two supermarkets sell the exact same box of cherries (original price **¥60**):\n- **超市甲 (Supermarket A)**: **打八折** (*dǎ bā zhé*)\n- **超市乙 (Supermarket B)**: **买两盒减三十块** (*buy 2 boxes, get ¥30 off total*)\nIf you need **2 boxes** of cherries, which shop is cheaper and by how much?",
        options: [
          "Supermarket A is cheaper by ¥6.",
          "Both supermarkets cost the exact same (¥96).",
          "Supermarket B is cheaper by ¥6 (¥90 vs ¥96).",
          "Supermarket A is cheaper by ¥66.",
        ],
        answerIndex: 2,
        hints: [
          "Supermarket A (**打八折** = pay 80%): 2 boxes = 2 × 60 × 0.8 = ?",
          "Supermarket B: 2 × 60 − 30 = ? Compare the two totals!",
        ],
        explanation:
          "At Supermarket A (**打八折**), one box is 60 × 0.8 = ¥48, so 2 boxes cost **¥96**. At Supermarket B, 2 boxes cost 120 − 30 = **¥90**. Therefore **Supermarket B is cheaper by ¥6**!",
      },
      {
        id: "vegetables-fruits-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "vegetables-vocab",
        question: "Compare these two sentences with **多** and **吃**:\n1. **妈妈让我多吃蔬菜。**\n2. **昨天晚上我吃多了，肚子有点儿疼！**\nWhy does moving **多** from before **吃** to after **吃** change the meaning completely?",
        options: [
          "多吃 is past tense; 吃多 is future tense.",
          "They mean the exact same thing.",
          "多吃 is only for fruit; 吃多 is only for meat.",
          "Pre-verbal 多吃 advises 'eat more / plenty of' as a healthy habit, whereas post-verbal resultative 吃多了 means 'overate / ate too much'!",
        ],
        answerIndex: 3,
        hints: [
          "Look at the consequence in Sentence 2: **肚子有点儿疼** ('my tummy hurts a bit')!",
          "Pre-verbal modifier = intended manner/habit; post-verbal complement = unintended excess result.",
        ],
        explanation:
          "**多吃蔬菜** ('eat plenty of vegetables') places **多** before the verb as positive advice. Putting **多** *after* the verb (**吃多了**) turns it into a resultative complement meaning **'ate too much / overate'**!",
      },
      {
        id: "vegetables-fruits-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "fruits-vocab",
        question: "Read this Singapore cultural note:\n**在新加坡，人们把榴莲叫做“水果之王”，把山竹叫做“水果之后”。老一辈的人常说，吃太多榴莲容易“上火”（嗓子疼），所以吃完榴莲以后应该吃几个山竹！**\nWhy do older Singaporeans recommend eating mangosteens (**山竹**) after durian (**榴莲**)?",
        options: [
          "Because eating too much durian can make you 'heaty' (sore throat), and cooling mangosteens balance it out.",
          "Because mangosteens are much more expensive than durians.",
          "Because durians are sour and need sweet mangosteens.",
          "Because you are allowed to eat durians on the MRT if you bring mangosteens.",
        ],
        answerIndex: 0,
        hints: [
          "Look at **吃太多榴莲容易“上火”（嗓子疼），所以吃完榴莲以后应该吃几个山竹**.",
          "Recall from Illness vocab that **嗓子疼** means 'sore throat'!",
        ],
        explanation:
          "In traditional Chinese & Southeast Asian food wisdom, rich durian is 'heaty' (**上火**, causing **嗓子疼** sore throat if you eat too much), so people eat cooling 'Queen of Fruits' mangosteens (**山竹**) afterwards to restore balance!",
      },
    ],
  },
];
