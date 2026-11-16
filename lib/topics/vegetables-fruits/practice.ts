import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "vegetables-fruits-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "fruits-vocab",
      question: "What does **西瓜** (*xīguā*) mean in English?",
      options: ["watermelon", "apple", "banana", "papaya"],
      answerIndex: 0,
      hints: ["Literally 'western melon' (**西** + **瓜**)."],
      explanation:
        "**西瓜** (*xīguā*) is **watermelon**. 'Apple' is **苹果**, 'banana' is **香蕉**, and 'papaya' is **木瓜**.",
    },
    {
      id: "vegetables-fruits-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "fruits-vocab",
      question:
        "Write the Mandarin adjective for **'sweet'** (1 character or tone-marked Pinyin):",
      answer: {
        type: "text",
        accept: ["甜", "tián"],
        display: "甜 (tián)",
      },
      hints: ["Left radical **舌** (tongue) + **甘** (sweetness), pronounced *tián*."],
      solution: [
        "'Sweet' in Mandarin is **甜** (*tián*).",
      ],
    },
    {
      id: "vegetables-fruits-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "vegetables-vocab",
      question: "Which Mandarin word means **'green leafy vegetables / greens'**?",
      options: ["黄瓜", "青菜", "土豆", "洋葱"],
      answerIndex: 1,
      hints: ["**青** = green, **菜** = vegetable."],
      explanation:
        "**青菜** (*qīngcài*) means **green leafy vegetables / greens**. **黄瓜** is cucumber, **土豆** is potato, and **洋葱** is onion.",
    },
    {
      id: "vegetables-fruits-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "vegetables-vocab",
      question:
        "Write the Mandarin word for **'carrot'** (3 characters or tone-marked Pinyin — don't forget the first character!):",
      answer: {
        type: "text",
        accept: ["胡萝卜", "húluóbo", "húluóbó"],
        display: "胡萝卜 (húluóbo)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["萝卜", "luóbo"] },
          feedback: "Plain **萝卜** is white radish! Add **胡** at the front for orange carrot: **胡萝卜**.",
        },
      ],
      hints: [
        "Starts with **胡** (*hú*, Silk Road) + **萝卜** (*luóbo*, radish).",
        "Three characters: **胡萝卜**.",
      ],
      solution: [
        "Orange 'carrot' is **胡萝卜** (*húluóbo*).",
      ],
    },
    {
      id: "vegetables-fruits-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "money-weights",
      question: "Grapes cost **八块钱一斤** (8 yuan per 500 g). How much does **1 公斤** (1 kg) of grapes cost?",
      options: ["8 块钱", "4 块钱", "16 块钱", "24 块钱"],
      answerIndex: 2,
      hints: [
        "Convert **1 公斤** into **斤** first!",
        "1 公斤 = **2 斤**, so multiply 8 by 2.",
      ],
      explanation:
        "Because **1 公斤 = 2 斤**, 1 kg of grapes costs 2 × 8 = **16 块钱**.",
    },
    {
      id: "vegetables-fruits-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "money-weights",
      question:
        "A market vendor calls out: **西红柿四块五一斤！** Write the price of 1 jin of tomatoes as a decimal number (e.g. `2.8`):",
      answer: {
        type: "number",
        value: 4.5,
        display: "4.50",
      },
      traps: [
        {
          spec: { type: "number", value: 4.05 },
          feedback: "**四块五** is spoken shorthand for **四块五毛** = **4.50**, NOT 4.05 (which would need **零**: 四块零五分)!",
        },
      ],
      hints: [
        "In spoken money, a single digit right after **块** stands for **毛** (tenths = 0.10).",
        "**四块** (4) + **五(毛)** (0.50) = ?",
      ],
      solution: [
        "**四块五** = **四块五毛** = **4.5** (¥4.50 / $4.50).",
      ],
    },
    {
      id: "vegetables-fruits-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "bargaining-tai-le",
      question: "Which exclamation means **'Too expensive!'**?",
      options: ["太甜了！", "便宜一点儿吧！", "还要别的吗？", "太贵了！"],
      answerIndex: 3,
      hints: [
        "**贵** (*guì*) means 'expensive'.",
        "Wrap **太…了** around **贵**!",
      ],
      explanation:
        "**太贵了！** (*Tài guì le!*) means **'Too expensive!'**. **太甜了！** is 'Too sweet!', **便宜一点儿吧！** is 'Make it a bit cheaper!', and **还要别的吗？** is 'Anything else?'.",
    },
    {
      id: "vegetables-fruits-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "bargaining-tai-le",
      question:
        "Write the tone-marked Pinyin for **便宜** ('cheap') — watch the initial consonant of **便**!",
      answer: {
        type: "text",
        accept: ["piányi", "piányí"],
        display: "piányi",
      },
      traps: [
        {
          spec: { type: "text", accept: ["biànyí", "biànyi"] },
          feedback: "Trap alert! **便** is *biàn* in **方便** (convenient), but when it means 'cheap', it is pronounced **piányi**!",
        },
      ],
      hints: [
        "Starts with **p-** (2nd tone), NOT *b-*!",
        "Second syllable is neutral tone (*yi*).",
      ],
      solution: [
        "**便宜** ('cheap') is pronounced **piányi**.",
      ],
    },
    {
      id: "vegetables-fruits-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "market-dialogue",
      question:
        "Your vegetables cost **十三块钱** (13 dollars) altogether (**一共**). You hand the stallholder **二十块钱** (20 dollars). How many dollars change (**找多少钱**) do you get back? Type a number.",
      answer: {
        type: "number",
        value: 7,
        display: "7",
      },
      hints: [
        "Total (**一共**) = 13; Paid = 20.",
        "Change (**找钱**) = 20 − 13.",
      ],
      solution: [
        "20 − 13 = **7** dollars (**找您七块钱**).",
      ],
    },
    {
      id: "vegetables-fruits-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "market-dialogue",
      question: "When the seller asks **还要别的吗？**, which reply politely says *'Nothing else, that's enough, thank you'*?",
      options: [
        "不要了，够了，谢谢！",
        "太贵了，便宜一点儿吧！",
        "老板，苹果怎么卖？",
        "找您五块钱！",
      ],
      answerIndex: 0,
      hints: [
        "Look for **够了** (*gòu le*, that's enough) and **谢谢** (*xièxie*, thank you).",
        "**找您五块钱** is said by the seller, not the buyer!",
      ],
      explanation:
        "**不要了，够了，谢谢！** ('Nothing else, that's enough, thank you!') smoothly closes your order so the seller can total up the bill.",
    },
  ],

  papers: [
    {
      id: "vegetables-fruits-p1",
      title: "Practice Paper 1 · Fruits, Vegetables, Weights & Money",
      questions: [
        {
          id: "vegetables-fruits-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "fruits-vocab",
          question:
            "Write the Mandarin noun for **'apple'** (2 characters or tone-marked Pinyin):",
          answer: {
            type: "text",
            accept: ["苹果", "píngguǒ"],
            display: "苹果 (píngguǒ)",
          },
          hints: ["**苹** (*píng*) + **果** (*guǒ*, fruit)."],
          solution: [
            "'Apple' is **苹果** (*píngguǒ*).",
          ],
        },
        {
          id: "vegetables-fruits-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "fruits-vocab",
          question:
            "What does **新鲜** (*xīnxiān*) mean in English?",
          answer: {
            type: "text",
            accept: ["fresh", "very fresh"],
            display: "fresh",
          },
          hints: ["Think of **鱼 + 羊 = 鲜** at an early-morning wet market!"],
          solution: [
            "**新鲜** (*xīnxiān*) means **fresh**.",
          ],
        },
        {
          id: "vegetables-fruits-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "vegetables-vocab",
          question:
            "Write the Mandarin noun for **'cucumber'** (literally 'yellow melon' — 2 characters or Pinyin):",
          answer: {
            type: "text",
            accept: ["黄瓜", "huángguā"],
            display: "黄瓜 (huángguā)",
          },
          hints: ["**黄** (*huáng*, yellow) + **瓜** (*guā*, melon)."],
          solution: [
            "'Cucumber' is **黄瓜** (*huángguā*).",
          ],
        },
        {
          id: "vegetables-fruits-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "fruits-vocab",
          question:
            "Translate into Mandarin: *'This punnet of strawberries is both big and sweet.'* (Use **这盒草莓**, **又…又…**, **大**, and **甜**.)",
          answer: {
            type: "text",
            accept: [
              "这盒草莓又大又甜",
              "Zhè hé cǎoméi yòu dà yòu tián",
            ],
            display: "这盒草莓又大又甜。 (Zhè hé cǎoméi yòu dà yòu tián.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["这盒草莓是又大又甜", "这盒草莓是大和甜"] },
              feedback: "Never put **是** before adjectives or join adjectives with **和** — link directly with **又大又甜**!",
            },
          ],
          hints: [
            "Subject: **这盒草莓** (*zhè hé cǎoméi*).",
            "Pair the two adjectives directly with **又…又…** (NO **是**!).",
          ],
          solution: [
            "Subject (**这盒草莓**) + **又大又甜** → **这盒草莓又大又甜。**",
          ],
        },
        {
          id: "vegetables-fruits-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "vegetables-vocab",
          question:
            "Unscramble these chunks into a natural healthy-eating sentence:\n**对身体 / 每天 / 很好 / 多吃蔬菜**",
          answer: {
            type: "text",
            accept: [
              "每天多吃蔬菜对身体很好",
              "Měitiān duō chī shūcài duì shēntǐ hěn hǎo",
            ],
            display: "每天多吃蔬菜对身体很好。",
          },
          traps: [
            {
              spec: { type: "text", accept: ["每天对身体很好多吃蔬菜"] },
              feedback: "Put the topic action (**每天多吃蔬菜**) FIRST, followed by the comment (**对身体很好**)!",
            },
          ],
          hints: [
            "Start with the healthy habit: **每天多吃蔬菜** ('eating plenty of vegetables every day').",
            "Finish with its benefit: **对身体很好** ('is very good for your health').",
          ],
          solution: [
            "Habit (**每天多吃蔬菜**) + Benefit (**对身体很好**) → **每天多吃蔬菜对身体很好。**",
          ],
        },
        {
          id: "vegetables-fruits-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "money-weights",
          question:
            "How do you say **'two jin (1 kg) of apples'** in Mandarin? (Use **两**, **斤**, and **苹果**.)",
          answer: {
            type: "text",
            accept: ["两斤苹果", "liǎng jīn píngguǒ"],
            display: "两斤苹果 (liǎng jīn píngguǒ)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["二斤苹果", "èr jīn píngguǒ", "两斤个苹果"] },
              feedback: "Use **两** (never **二**) before **斤**, and do NOT add **个** because **斤** is already a measure word!",
            },
          ],
          hints: [
            "Before measure word **斤**, always use **两** (*liǎng*).",
            "**斤** is itself a classifier, so no **个** is needed!",
          ],
          solution: [
            "Number (**两**) + Weight classifier (**斤**) + Noun (**苹果**) → **两斤苹果**.",
          ],
        },
        {
          id: "vegetables-fruits-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "money-weights",
          question:
            "Rewrite the formal price-tag expression **八元五角** (*8.50 yuan*) in natural **spoken** three-character shorthand (using **块**):",
          answer: {
            type: "text",
            accept: ["八块五", "八块五毛", "bā kuài wǔ", "bā kuài wǔ máo"],
            display: "八块五 (bā kuài wǔ)",
          },
          hints: [
            "Swap written **元** for spoken **块** (*kuài*).",
            "Drop **角/毛** at the end for crisp spoken shorthand!",
          ],
          solution: [
            "**八元五角** becomes **八块五** (or **八块五毛**) in everyday speech.",
          ],
        },
        {
          id: "vegetables-fruits-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "money-weights",
          question:
            "Onions cost **三块钱一斤** (3 yuan per jin). Chef Wang buys **两公斤** (*2 kilograms*) of onions. How much does he pay in yuan? Type a number.",
          answer: {
            type: "number",
            value: 12,
            display: "12",
          },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback: "Careful! The price is per **斤** (500 g), and Chef Wang bought **两公斤** (2 kg = **4 斤**), not 2 斤!",
            },
          ],
          hints: [
            "Convert **两公斤** (2 kg) into **斤** first (1 公斤 = 2 斤).",
            "4 斤 × 3 yuan/斤 = ?",
          ],
          solution: [
            "**两公斤** = 2 × 2 = **4 斤**.",
            "Cost = 4 × 3 = **12** yuan.",
          ],
        },
        {
          id: "vegetables-fruits-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "bargaining-tai-le",
          question:
            "Translate into Mandarin: *'Durian is a bit expensive.'* (Use **榴莲**, **有点儿**, and **贵**.)",
          answer: {
            type: "text",
            accept: [
              "榴莲有点儿贵",
              "榴莲有点贵",
              "榴莲有一点儿贵",
              "榴莲有一点贵",
              "Liúlián yǒudiǎnr guì",
              "Liúlián yǒudiǎn guì",
            ],
            display: "榴莲有点儿贵。 (Liúlián yǒudiǎnr guì.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["榴莲贵一点儿", "榴莲一点儿贵"] },
              feedback: "For a mild complaint ('a bit pricey'), put **有点儿** BEFORE the adjective **贵**: **榴莲有点儿贵**!",
            },
          ],
          hints: [
            "Mild complaints use **有点儿** BEFORE the adjective.",
            "No **是** needed!",
          ],
          solution: [
            "Subject (**榴莲**) + **有点儿** + Adjective (**贵**) → **榴莲有点儿贵。**",
          ],
        },
        {
          id: "vegetables-fruits-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "bargaining-tai-le",
          question:
            "Translate this classic bargaining line into Mandarin: *'Make it a little cheaper, please!'* (Use **便宜**, **一点儿**, and **吧**.)",
          answer: {
            type: "text",
            accept: [
              "便宜一点儿吧",
              "便宜一点吧",
              "piányi yìdiǎnr ba",
              "piányi yìdiǎn ba",
              "piányi yīdiǎnr ba",
              "piányi yīdiǎn ba",
            ],
            display: "便宜一点儿吧！ (Piányi yìdiǎnr ba!)",
          },
          hints: [
            "In a bargaining request, **一点儿** goes AFTER the adjective **便宜**!",
            "Finish with softening particle **吧**.",
          ],
          solution: [
            "Adjective (**便宜**) + **一点儿** + **吧** → **便宜一点儿吧！**",
          ],
        },
        {
          id: "vegetables-fruits-p1-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "bargaining-tai-le",
          question:
            "A box of imported peaches normally costs **四十块钱** (¥40). Today the supermarket sign says **打八五折** (*dǎ bāwǔ zhé*). How many yuan does the box cost today? Type a number.",
          answer: {
            type: "number",
            value: 34,
            display: "34",
          },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback: "**打八五折** means you PAY **85%** of ¥40 (15% off), NOT 85% off!",
            },
          ],
          hints: [
            "**打八五折** means you pay **85%** (0.85) of the original price.",
            "Calculate 40 × 0.85!",
          ],
          solution: [
            "**打八五折** = pay 85%: 40 × 0.85 = **34** yuan.",
          ],
        },
        {
          id: "vegetables-fruits-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "market-dialogue",
          question:
            "Read this wet-market receipt aloud in your head:\n- **一斤半蘑菇** (at **八块钱一斤**)\n- **两块豆腐** (at **一块五一块** — 1.50 per block)\n- **一串香蕉** (**四块五**)\nWhat is the exact total (**一共多少钱**) in yuan/dollars? Type a decimal or whole number.",
          answer: {
            type: "number",
            value: 19.5,
            display: "19.50",
          },
          hints: [
            "Mushrooms: **一斤半** (1.5) × 8 = 12.",
            "Tofu: 2 × **一块五** (1.50) = 3; Bananas: **四块五** = 4.50. Sum all three!",
          ],
          solution: [
            "Mushrooms: 1.5 × 8 = 12.00.",
            "Tofu: 2 × 1.50 = 3.00.",
            "Bananas: 4.50.",
            "Total = 12 + 3 + 4.50 = **19.5** (**十九块五**).",
          ],
        },
        {
          id: "vegetables-fruits-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "market-dialogue",
          marks: 5,
          question:
            "**IGCSE 0547 Market Roleplay Task (5 marks)**\nWrite the customer's (**顾客**) 5 lines (45–70 characters total) at a fruit stall. Cover ALL five prompts:\n1. Greet the stallholder (**老板**) politely and ask how strawberries are sold (**草莓怎么卖 / 多少钱一盒**).\n2. Say the price is a bit expensive (**有点儿贵** or **太贵了**) and ask to make it a bit cheaper (**便宜一点儿**).\n3. Say you want **two punnets of strawberries** (**两盒草莓**) and **one bunch of grapes** (**一串葡萄**).\n4. When asked *还要别的吗？*, say that's enough (**够了**) and ask the total (**一共多少钱**).\n5. Hand over money (**给您…块钱**) and thank the seller.",
          modelAnswer:
            "1. 老板，您好！请问草莓怎么卖？\n2. 十五块一盒太贵了！可以便宜一点儿吗？\n3. 好，我要买两盒草莓，再来一串新鲜的葡萄。\n4. 不要别的了，够了。请问一共多少钱？\n5. 给您五十块钱，谢谢！",
          markScheme: [
            {
              point: "Greets seller politely and asks the price of strawberries (怎么卖 / 多少钱).",
              keywords: ["草莓", "怎么卖", "多少钱"],
            },
            {
              point: "Reacts to price (太贵了 / 有点儿贵) and bargains politely (便宜一点儿).",
              keywords: ["贵", "便宜一点"],
            },
            {
              point: "Uses accurate quantities & classifiers: 两盒草莓 and 一串葡萄.",
              keywords: ["两盒", "草莓", "一串", "葡萄"],
            },
            {
              point: "Closes order politely (够了 / 不要了) and asks total (一共多少钱).",
              keywords: ["够了", "不要", "一共", "多少钱"],
            },
            {
              point: "Hands over payment politely (给您…块) and says thank you (谢谢).",
              keywords: ["给", "块", "元", "谢谢"],
            },
          ],
          hints: [
            "Check your classifiers carefully: **两盒草莓** (never *二盒*) and **一串葡萄**!",
            "Put **一点儿** AFTER **便宜**: **便宜一点儿吗 / 便宜一点儿吧**.",
          ],
          commonError:
            "Writing *二盒草莓* instead of **两盒草莓**, or *有点儿便宜* instead of **便宜一点儿**.",
        },
        {
          id: "vegetables-fruits-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "market-dialogue",
          marks: 6,
          question:
            "**IGCSE 0547 Directed Writing — 去巴刹买菜 (6 marks)**\nWrite an 80–120 character blog post in Simplified Chinese about going shopping for fruit and vegetables with a family member in Singapore. Include:\n1. **When**, **where** (**巴刹** or **超市**), and **who** you went with (**跟…一起**).\n2. At least **two vegetables** and **two fruits** you bought, with accurate measure words (**斤 / 公斤 / 盒 / 串 / 个**).\n3. How the fruit/veg looked or tasted (**又…又…**, e.g. **又新鲜又甜**).\n4. How much you spent altogether (**一共…块钱**) and whether you bargained or got a discount (**便宜一点儿 / 打折**).\n5. Why eating vegetables and fruit is important (**多吃…对身体好**).\n6. How you felt about the shopping trip.",
          modelAnswer:
            "上个星期天早上，我跟妈妈一起去家附近的巴刹买菜。我们买了两斤西红柿、一斤青菜和两块豆腐。妈妈还买了一盒草莓和一个大西瓜，那里的水果又新鲜又甜！因为妈妈跟老板很熟，所以老板给我们便宜了三块钱，一共花了二十五块新币。医生说每天多吃蔬菜和水果对身体很好。我觉得去巴刹买东西很有意思！",
          markScheme: [
            {
              point: "States timeframe, place (巴刹/超市/菜市场), and companion (跟…一起).",
              keywords: ["跟", "一起", "巴刹", "超市", "菜市场"],
            },
            {
              point: "Names at least two vegetables and two fruits with accurate classifiers.",
              keywords: ["斤", "公斤", "盒", "串", "块", "个"],
            },
            {
              point: "Describes freshness/taste using 又…又… or 很/非常.",
              keywords: ["又", "新鲜", "甜", "好吃", "多汁"],
            },
            {
              point: "Mentions total price (一共…块/元) and bargaining or discount (便宜/打折).",
              keywords: ["一共", "块", "元", "新币", "便宜", "打"],
            },
            {
              point: "Explains health benefit using 多吃 and 对身体好 / 健康 / 营养.",
              keywords: ["多吃", "对身体", "健康", "营养"],
            },
            {
              point: "Expresses personal opinion/feeling about the trip.",
              keywords: ["觉得", "有意思", "开心", "高兴", "喜欢"],
            },
          ],
          hints: [
            "Remember past completed **买** takes **了** (**我们买了…**), while adjectives in **又新鲜又甜** take NO **是**!",
            "Include **新币** (*Xīnbì*) for authentic Singapore flavour.",
          ],
          commonError:
            "Putting **是** before **又新鲜又甜** or writing *吃多蔬菜* instead of **多吃蔬菜**.",
        },
      ],
    },

    {
      id: "vegetables-fruits-p2",
      title: "Practice Paper 2 · Tastes, Classifiers, Bargaining & Receipts",
      questions: [
        {
          id: "vegetables-fruits-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "fruits-vocab",
          question:
            "Write the Mandarin noun for **'banana'** (2 characters or tone-marked Pinyin):",
          answer: {
            type: "text",
            accept: ["香蕉", "xiāngjiāo"],
            display: "香蕉 (xiāngjiāo)",
          },
          hints: ["Literally 'fragrant plantain': **香** (*xiāng*) + **蕉** (*jiāo*)."],
          solution: [
            "'Banana' is **香蕉** (*xiāngjiāo*).",
          ],
        },
        {
          id: "vegetables-fruits-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "vegetables-vocab",
          question:
            "What vegetable is **洋葱** (*yángcōng*) in English?",
          answer: {
            type: "text",
            accept: ["onion", "onions", "an onion"],
            display: "onion",
          },
          hints: ["Chopping it makes your eyes water! Literally 'foreign spring-onion'."],
          solution: [
            "**洋葱** (*yángcōng*) is **onion**.",
          ],
        },
        {
          id: "vegetables-fruits-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "money-weights",
          question:
            "Write the three-character Mandarin question phrase meaning **'how much (money)?'**:",
          answer: {
            type: "text",
            accept: ["多少钱", "duōshao qián", "duōshǎo qián"],
            display: "多少钱 (duōshao qián)",
          },
          hints: ["**多少** (*duōshao*, how much) + **钱** (*qián*, money)."],
          solution: [
            "'How much money?' is **多少钱** (*duōshao qián*).",
          ],
        },
        {
          id: "vegetables-fruits-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "fruits-vocab",
          question:
            "Fill in the best shape classifier for **a bunch/cluster of grapes** (1 character or Pinyin): **一___葡萄**",
          answer: {
            type: "text",
            accept: ["串", "chuàn"],
            display: "串 (chuàn)",
          },
          hints: [
            "Look for the character shaped like two items threaded together on a stem!",
            "Pronounced *chuàn* (4th tone).",
          ],
          solution: [
            "A bunch/cluster of grapes uses **串** (*chuàn*): **一串葡萄**.",
          ],
        },
        {
          id: "vegetables-fruits-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "vegetables-vocab",
          question:
            "Translate into Mandarin: *'Tofu is very nutritious.'* (Use **豆腐**, **很有**, and **营养**.)",
          answer: {
            type: "text",
            accept: [
              "豆腐很有营养",
              "Dòufu hěn yǒu yíngyǎng",
            ],
            display: "豆腐很有营养。 (Dòufu hěn yǒu yíngyǎng.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["豆腐是营养", "豆腐很营养"] },
              feedback: "**营养** is a noun ('nutrition'), so Mandarin says **很有营养** ('has lots of nutrition' = very nutritious)!",
            },
          ],
          hints: [
            "Because **营养** (*yíngyǎng*) is a noun, combine **很有** + **营养**!",
            "Subject (**豆腐**) + **很有营养**.",
          ],
          solution: [
            "Idiomatic Mandarin says **豆腐很有营养。** (*Dòufu hěn yǒu yíngyǎng.*).",
          ],
        },
        {
          id: "vegetables-fruits-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "money-weights",
          question:
            "How many **grams** are in **两斤半** (*liǎng jīn bàn*)? (Remember **1 斤 = 500 g**.) Type a number.",
          answer: {
            type: "number",
            value: 1250,
            display: "1,250",
          },
          hints: [
            "**两斤** = 2 × 500 g = 1,000 g.",
            "**半** after **斤** adds 0.5 斤 = 250 g!",
          ],
          solution: [
            "**两斤半** = 2.5 斤 = 2.5 × 500 g = **1,250** grams.",
          ],
        },
        {
          id: "vegetables-fruits-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "money-weights",
          question:
            "Translate into Mandarin: *'How are oranges sold?'* (Use **橙子** and **怎么卖**.)",
          answer: {
            type: "text",
            accept: [
              "橙子怎么卖",
              "请问橙子怎么卖",
              "老板橙子怎么卖",
              "Chéngzi zěnme mài",
              "Qǐngwèn chéngzi zěnme mài",
              "Lǎobǎn chéngzi zěnme mài",
            ],
            display: "橙子怎么卖？ (Chéngzi zěnme mài?)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["橙子怎么买", "Chéngzi zěnme mǎi"] },
              feedback: "Watch **卖** (*mài*, 4th tone = sell) vs **买** (*mǎi*, 3rd tone = buy)! You ask the vendor how they are **sold**: **怎么卖**.",
            },
          ],
          hints: [
            "Put the item topic first (**橙子**), followed by **怎么卖？**.",
            "Be careful to use **卖** (*mài*, sell, with **十** on top) rather than **买**!",
          ],
          solution: [
            "Topic (**橙子**) + **怎么卖？** → **橙子怎么卖？**",
          ],
        },
        {
          id: "vegetables-fruits-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "bargaining-tai-le",
          question:
            "Unscramble into a natural Mandarin comparison:\n**便宜得多 / 香蕉 / 榴莲 / 比** (Meaning: *'Bananas are much cheaper than durians.'*)",
          answer: {
            type: "text",
            accept: [
              "香蕉比榴莲便宜得多",
              "Xiāngjiāo bǐ liúlián piányi de duō",
            ],
            display: "香蕉比榴莲便宜得多。",
          },
          traps: [
            {
              spec: { type: "text", accept: ["榴莲比香蕉便宜得多"] },
              feedback: "Check which fruit is cheaper! **香蕉** (bananas) are much cheaper than **榴莲** (durians): **香蕉比榴莲便宜得多**.",
            },
          ],
          hints: [
            "Frame: **A + 比 + B + Adjective + 得多**.",
            "Put the cheaper item (**香蕉**) in slot A!",
          ],
          solution: [
            "A (**香蕉**) + **比** + B (**榴莲**) + **便宜得多** → **香蕉比榴莲便宜得多。**",
          ],
        },
        {
          id: "vegetables-fruits-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "bargaining-tai-le",
          question:
            "Fill in the two-character adverb meaning **'altogether / in total'**:\n**西红柿和黄瓜____十二块六。**",
          answer: {
            type: "text",
            accept: ["一共", "yígòng", "yīgòng"],
            display: "一共 (yígòng)",
          },
          hints: [
            "Starts with **一** + **共** (*gòng*, together/shared).",
            "Pronounced *yígòng* (with tone sandhi on 一).",
          ],
          solution: [
            "'Altogether / in total' is **一共** (*yígòng*).",
          ],
        },
        {
          id: "vegetables-fruits-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "market-dialogue",
          question:
            "Translate the seller's phrase **找您五块五** into English (state the exact dollar/yuan amount and what the seller is doing):",
          answer: {
            type: "text",
            accept: [
              "here is 5.50 change",
              "here is 5.50 change for you",
              "give you 5.50 change",
              "giving you 5.50 change",
              "5.50 change",
              "here is $5.50 change",
              "here is $5.50 change for you",
              "here is ¥5.50 change",
              "here is ¥5.50 change for you",
              "here is 5.50 yuan change",
              "here is 5.50 yuan change for you",
              "here is 5.50 dollars change",
              "here is 5.50 dollars change for you",
              "your change is 5.50",
            ],
            display: "Here is 5.50 change for you.",
          },
          hints: [
            "**找您…** at a till means 'here is … change for you'.",
            "**五块五** = 5.50!",
          ],
          solution: [
            "**找您五块五** means **'Here is 5.50 change for you.'**",
          ],
        },
        {
          id: "vegetables-fruits-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "market-dialogue",
          question:
            "Read this supermarket receipt puzzle:\n**妈妈在超市买了一袋十块钱的土豆、两盒十五块钱一盒的草莓，还有一公斤六块钱一斤的胡萝卜。因为今天超市会员打九折，妈妈最后付了多少钱？**\nCalculate the final discounted amount Mum paid. Type a number.",
          answer: {
            type: "number",
            value: 46.8,
            display: "46.80",
          },
          hints: [
            "Subtotal BEFORE discount: Potatoes (10) + 2 punnets of strawberries (2 × 15 = 30) + **1 公斤 (= 2 斤!)** carrots (2 × 6 = 12) = 52.",
            "**打九折** = pay **90%** (52 × 0.9 = ?).",
          ],
          solution: [
            "Potatoes = 10; Strawberries = 2 × 15 = 30; Carrots (**一公斤 = 2 斤**) = 2 × 6 = 12.",
            "Pre-discount total = 10 + 30 + 12 = 52.",
            "**打九折** (pay 90%): 52 × 0.9 = **46.8** (**四十六块八**).",
          ],
        },
        {
          id: "vegetables-fruits-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "bargaining-tai-le",
          question:
            "Fix the word-order error in this bargaining request by typing the corrected Mandarin sentence:\n✗ **老板，一点儿便宜吧！**",
          answer: {
            type: "text",
            accept: [
              "便宜一点儿吧",
              "便宜一点吧",
              "老板便宜一点儿吧",
              "老板便宜一点吧",
              "piányi yìdiǎnr ba",
              "piányi yīdiǎnr ba",
              "Lǎobǎn, piányi yìdiǎnr ba",
              "Lǎobǎn, piányi yīdiǎnr ba",
            ],
            display: "老板，便宜一点儿吧！",
          },
          hints: [
            "Where must **一点儿** stand relative to the adjective **便宜**?",
            "Move **一点儿** AFTER **便宜**!",
          ],
          solution: [
            "Comparative/request **一点儿** always follows the adjective: **老板，便宜一点儿吧！**",
          ],
        },
        {
          id: "vegetables-fruits-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "vegetables-vocab",
          marks: 5,
          question:
            "**IGCSE 0547 Healthy Ingredients Note (5 marks)**\nYour family is cooking dinner for cousins visiting Singapore. Write a 50–70 character shopping note in Mandarin for your older brother (**哥哥**) listing what to buy at the supermarket (**超市**). Include:\n1. Ask him to go to the supermarket this afternoon (**今天下午去超市**).\n2. List **three vegetables / tofu items** with exact quantities & classifiers (e.g. **两斤西红柿**, **两根黄瓜**, **两块豆腐**).\n3. List **two fruits** to eat after dinner (**吃晚饭以后**), describing what kind to pick (**新鲜 / 甜**).\n4. Remind him to check if fruit is on discount (**打折**) or not too expensive (**不要太贵**).\n5. Mention that you gave him **五十块钱** on the table.",
          modelAnswer:
            "哥哥，今天下午请你去超市买一些菜，好吗？请买两斤西红柿、两根黄瓜和两块豆腐。吃晚饭以后我们要吃水果，请买一串甜葡萄和一个新鲜的西瓜。如果草莓打折，也可以买一盒，不要太贵！桌子上给你放了五十块钱，谢谢！",
          markScheme: [
            {
              point: "Asks older brother politely to go to the supermarket this afternoon.",
              keywords: ["哥哥", "下午", "超市"],
            },
            {
              point: "Lists three vegetables/tofu items with accurate quantities and classifiers.",
              keywords: ["西红柿", "番茄", "黄瓜", "青菜", "白菜", "土豆", "胡萝卜", "豆腐", "蘑菇", "洋葱"],
            },
            {
              point: "Lists two fruits for after dinner (以后) with freshness/taste adjectives.",
              keywords: ["以后", "新鲜", "甜", "葡萄", "西瓜", "苹果", "香蕉", "芒果", "橙子"],
            },
            {
              point: "Mentions checking discounts (打折) or avoiding overly expensive items (贵/便宜).",
              keywords: ["打折", "打", "贵", "便宜"],
            },
            {
              point: "States leaving 50 dollars/yuan (五十块/元).",
              keywords: ["五十", "块", "元", "钱"],
            },
          ],
          hints: [
            "Remember **两** before **斤, 根, 块, 盒**!",
            "Put **吃晚饭** BEFORE **以后**: **吃晚饭以后**.",
          ],
          commonError:
            "Writing *以后吃晚饭* or forgetting classifiers between numbers and vegetables.",
        },
        {
          id: "vegetables-fruits-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "fruits-vocab",
          marks: 5,
          question:
            "**IGCSE 0547 Favourite Fruits & Healthy Diet Article (5 marks)**\nWrite an 80–110 character article for your school Mandarin magazine titled **我最喜欢的水果和蔬菜**. Cover:\n1. Your favourite fruit (**最喜欢的水果**) and how it looks/tastes using **又…又…**.\n2. One tropical fruit famous in Singapore (e.g. **榴莲 / 芒果 / 山竹 / 木瓜**) and what your family thinks of it (**虽然…但是…** or **觉得**).\n3. Your favourite vegetable dish (e.g. **西红柿炒鸡蛋 / 炒青菜**) and how often you eat it.\n4. One fruit or vegetable you rarely eat and why (**因为有点儿酸…**).\n5. Healthy eating advice to Year 8 classmates (**多吃…对身体好**).",
          modelAnswer:
            "我最喜欢吃的水果是草莓和西瓜，因为西瓜又甜又多汁，热天吃冰西瓜太舒服了！在新加坡，榴莲非常有名。虽然爸爸很喜欢吃榴莲，但是我觉得榴莲的味道太重了，而且有点儿贵。蔬菜方面，我每个星期都吃妈妈做的西红柿炒鸡蛋，我很少吃柠檬，因为太酸了。同学们，我们每天都应该多吃新鲜的蔬菜和水果，因为很有营养，对身体很好！",
          markScheme: [
            {
              point: "States favourite fruit and describes it with 又…又….",
              keywords: ["最喜欢", "又"],
            },
            {
              point: "Discusses a tropical fruit in Singapore using 虽然…但是… or family opinions.",
              keywords: ["新加坡", "榴莲", "芒果", "山竹", "木瓜", "菠萝", "虽然", "觉得"],
            },
            {
              point: "Mentions a vegetable/dish and frequency of eating it.",
              keywords: ["西红柿", "番茄", "青菜", "白菜", "土豆", "胡萝卜", "豆腐", "常常", "每天", "每个星期"],
            },
            {
              point: "Explains a disliked/rarely eaten item with 因为 and taste adjective (酸/苦).",
              keywords: ["很少", "不", "因为", "酸", "贵"],
            },
            {
              point: "Gives healthy diet advice with 多吃 and 对身体好 / 营养 / 健康.",
              keywords: ["多吃", "对身体", "营养", "健康"],
            },
          ],
          hints: [
            "Use **虽然爸爸很喜欢吃榴莲，但是我觉得…** to score top grammar marks!",
            "Avoid putting **是** before **甜**, **酸**, or **贵**.",
          ],
          commonError:
            "Using **好喝** instead of **好吃** for solid fruit, or omitting **但是** after **虽然**.",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "vegetables-fruits-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "money-weights",
      question:
        "**Spoken Money Minimal-Pair Puzzle:**\nA Beijing cashier reads two receipts aloud:\n- Receipt A: **十六块八**\n- Receipt B: **十六块零八分**\nWhat is the **positive difference** (Receipt A minus Receipt B) in yuan? Give your answer as a decimal (e.g. `0.45`).",
      answer: {
        type: "number",
        value: 0.72,
        display: "0.72",
      },
      hints: [
        "Decode Receipt A: **十六块八** = 16 yuan + 8 **毛** = **16.80**.",
        "Decode Receipt B: **十六块零八分** = 16 yuan + 0 dimes + 8 **分** = **16.08**. Subtract!",
      ],
      solution: [
        "Receipt A (**十六块八**) = 16.80 yuan.",
        "Receipt B (**十六块零八分**) = 16.08 yuan.",
        "Difference = 16.80 − 16.08 = **0.72** yuan (**七毛二分**).",
      ],
    },
    {
      id: "vegetables-fruits-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "bargaining-tai-le",
      question:
        "**Grammar Logic — 有点儿 vs 一点儿:**\nFour sentences attempt to use **有点儿** or **一点儿** with food and price adjectives. Only **ONE** is 100% natural and grammatical in Mandarin — which one?",
      options: [
        "这些绿葡萄有点儿酸，你有甜一点儿的葡萄吗？",
        "这些绿葡萄酸一点儿，你有有点儿甜的葡萄吗？",
        "老板，这个西瓜太贵了，有点儿便宜吧！",
        "今天的青菜一点儿贵，可是很新鲜。",
      ],
      answerIndex: 0,
      hints: [
        "Test Clause 1 (complaining grapes are slightly too sour): must be **有点儿 + Adj** (**有点儿酸**).",
        "Test Clause 2 (asking for grapes that are *a bit sweeter* by comparison): must be **Adj + 一点儿** (**甜一点儿**).",
      ],
      explanation:
        "**这些绿葡萄有点儿酸，你有甜一点儿的葡萄吗？** nails both rules in a single sentence: **有点儿酸** (pre-adjectival mild complaint: 'a bit too sour') + **甜一点儿的葡萄** (post-adjectival comparative request: 'grapes that are a bit sweeter')!",
    },
    {
      id: "vegetables-fruits-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "market-dialogue",
      question:
        "**Multi-Unit Wet-Market Brainteaser:**\nAt Tekka **巴刹**, Uncle Chen posts these prices:\n- **西红柿**：**四块钱一斤**\n- **胡萝卜**：**六块钱一公斤** *(watch the unit!)*\n- **草莓**：**十四块钱一盒**（买两盒**打八五折**）\nAuntie Lin buys **一公斤半** (1.5 kg) of tomatoes, **一公斤** (1 kg) of carrots, and **两盒** (2 punnets) of strawberries. How much does she pay in total? Type a decimal or integer.",
      answer: {
        type: "number",
        value: 41.8,
        display: "41.80",
      },
      hints: [
        "Tomatoes are priced per **斤**, and she bought **1.5 公斤 = 3 斤**! Carrots are ALREADY priced per **公斤** (1 公斤 = 6)!",
        "Strawberries: 2 × 14 = 28, then apply **打八五折** (28 × 0.85 = 23.80). Sum all three!",
      ],
      solution: [
        "1. Tomatoes: **一公斤半** = 3 **斤** × 4 = **12.00**.",
        "2. Carrots: priced per **公斤**, so **一公斤** = **6.00**.",
        "3. Strawberries: 2 × 14 = 28, at **打八五折** (× 0.85) = **23.80**.",
        "Total = 12 + 6 + 23.80 = **41.8** (**四十一块八**).",
      ],
    },
    {
      id: "vegetables-fruits-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "fruits-vocab",
      question:
        "**Character Etymology & Radical Detective:**\nExamine the four characters **鲜 (fresh)**, **甜 (sweet)**, **贵 (expensive)**, and **休 (rest)**. Which pairing of **character → internal radical structure → original meaning** is **INCORRECT**?",
      options: [
        "鲜 → 鱼 (fish) + 羊 (lamb) → fresh umami delicacy",
        "甜 → 舌 (tongue) + 甘 (sweet) → sweet taste on the tongue",
        "贵 → contains 贝 (cowrie shell) → costly in ancient shell currency",
        "贵 → contains 水 (water) → juicy and expensive fruit",
      ],
      answerIndex: 3,
      hints: [
        "Inspect the bottom of **贵**: **贝** (*bèi*) is the cowrie-shell money radical!",
        "Is there any water radical (**水 / 氵**) inside **贵**?",
      ],
      explanation:
        "**贵** contains the cowrie-shell money radical **贝** at the bottom — there is NO water radical (**水**) in **贵**! (**水** appears in **水果** and **汁**.)",
    },
    {
      id: "vegetables-fruits-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "money-weights",
      question:
        "**The 两 vs 二 Master Test:**\nWrite **¥2.20** in natural three-character **spoken** Mandarin shorthand (using **块**, dropping **毛** — pay close attention to which '2' goes before **块** and which '2' goes at the end!):",
      answer: {
        type: "text",
        accept: ["两块二", "liǎng kuài èr"],
        display: "两块二 (liǎng kuài èr)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["二块二", "两块两"] },
          feedback: "Almost! Before the explicit unit **块**, use **两** (**两块**); once **毛** is dropped at the end, the bare trailing digit reverts to **二**: **两块二**!",
        },
      ],
      hints: [
        "First '2' precedes the measure word **块** → **两块**.",
        "Second '2' has dropped **毛**, leaving a bare final numeral → **二**!",
      ],
      solution: [
        "Before **块** use **两**, and for the bare trailing tenths digit (with **毛** omitted) use **二**: **两块二** (*liǎng kuài èr*).",
      ],
    },
    {
      id: "vegetables-fruits-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "money-weights",
      question:
        "**Idiom Maths — 半斤八两 (*bàn jīn bā liǎng*):**\nIn traditional old Chinese market scales (still heard in Singapore wet-market idioms!), **1 old 斤** was divided into **16 两 (taels)** instead of 10. Based on that 16-tael scale, why does the idiom **半斤八两** ('half a jin vs eight taels') mean *'six of one and half a dozen of the other / completely equal'*?",
      options: [
        "Because 8 is larger than 0.5.",
        "Because half of a 16-tael 斤 equals exactly 8 两 (0.5 × 16 = 8), so the two weights balance identically!",
        "Because fruit costs 8 yuan per half jin.",
        "Because 16 + 8 = 24 hours in a day.",
      ],
      answerIndex: 1,
      hints: [
        "Calculate **半斤** (half of 1 old **斤**) when 1 old **斤** = **16 两**!",
        "0.5 × 16 两 = ?",
      ],
      explanation:
        "On the traditional 16-tael scale (**一斤十六两**), **半斤** (half a jin) is 16 ÷ 2 = **8 两 (八两)**! So **半斤** and **八两** weigh the exact same amount — giving Mandarin its classic idiom for two things that are dead even!",
    },
    {
      id: "vegetables-fruits-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "bargaining-tai-le",
      question:
        "**Reverse Bargaining Algebra:**\nXiaoming buys **3 斤** of mangoes, hands the stallholder a **¥50** note, and receives **¥15.50** (**十五块五**) in change (**找钱**). What price **per 斤** did Xiaoming pay for the mangoes? Type a decimal number.",
      answer: {
        type: "number",
        value: 11.5,
        display: "11.50",
      },
      hints: [
        "First find how much Xiaoming spent in total (**一共**): 50 − 15.50 = 34.50.",
        "Divide total spent by **3 斤**!",
      ],
      solution: [
        "Total spent (**一共**) = 50 − 15.50 = 34.50 yuan.",
        "Price per **斤** = 34.50 ÷ 3 = **11.5** yuan (**十一块五一斤**).",
      ],
    },
    {
      id: "vegetables-fruits-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "vegetables-vocab",
      question:
        "**6-Chunk Sentence Architect:**\nUnscramble ALL six chunks into ONE 100% grammatical Mandarin sentence:\n**比超市 / 巴刹的青菜 / 便宜得多 / 又新鲜 / 而且 / 又好吃**\n(Start with **巴刹的青菜又新鲜又好吃**!)",
      answer: {
        type: "text",
        accept: [
          "巴刹的青菜又新鲜又好吃而且比超市便宜得多",
          "Bāshā de qīngcài yòu xīnxiān yòu hǎochī, érqiě bǐ chāoshì piányi de duō",
        ],
        display: "巴刹的青菜又新鲜又好吃，而且比超市便宜得多。",
      },
      hints: [
        "Clause 1: **巴刹的青菜又新鲜又好吃** ('The greens at the wet market are both fresh and delicious').",
        "Clause 2 starts with **而且** ('moreover'), followed by the **比** comparison (**比超市便宜得多**).",
      ],
      solution: [
        "1. Dual adjective description: **巴刹的青菜又新鲜又好吃**",
        "2. Connector + **比** comparison: **而且比超市便宜得多**",
        "Full sentence: **巴刹的青菜又新鲜又好吃，而且比超市便宜得多。**",
      ],
    },
  ],
};
