import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "eating-out-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "entering-seating",
      question: "What is the Mandarin word for **waiter / waitress / server**?",
      options: [
        "客人 (kèrén)",
        "服务员 (fúwùyuán)",
        "医生 (yīshēng)",
        "老师 (lǎoshī)",
      ],
      answerIndex: 1,
      hints: ["**服务** (*fúwù*) means 'service' and **员** (*yuán*) means 'staff member'."],
      explanation:
        "**服务员** (*fúwùyuán*) means waiter/waitress/server. **客人** is guest/customer, **医生** is doctor, and **老师** is teacher.",
    },
    {
      id: "eating-out-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "entering-seating",
      question: "Write the Mandarin word for **menu** (Simplified Hanzi or toned Pinyin).",
      answer: {
        type: "text",
        accept: ["菜单", "càidān"],
        display: "菜单 (càidān)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["买单", "mǎidān"] },
          feedback: "**买单** (*mǎidān*) means 'pay the bill'! 'Menu' starts with **菜** (dishes): **菜单** (*càidān*).",
        },
      ],
      hints: ["Combine **菜** (*cài*, dishes) + **单** (*dān*, list)."],
      solution: ["'Menu' is **菜单** (*càidān*)."],
    },
    {
      id: "eating-out-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "ordering-dishes",
      question: "Translate into natural restaurant Mandarin (Hanzi or toned Pinyin): **Bring (I'll have) one bowl of beef noodles.**",
      answer: {
        type: "text",
        accept: [
          "来一碗牛肉面",
          "请来一碗牛肉面",
          "请给我来一碗牛肉面",
          "我要一碗牛肉面",
          "我想点一碗牛肉面",
          "lái yī wǎn niúròumiàn",
          "lái yì wǎn niúròumiàn",
          "qǐng lái yī wǎn niúròumiàn",
          "wǒ yào yī wǎn niúròumiàn",
          "wǒ xiǎng diǎn yī wǎn niúròumiàn",
        ],
        display: "来一碗牛肉面 (lái yī wǎn niúròumiàn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["我想点菜一碗牛肉面", "点菜一碗牛肉面"] },
          feedback: "Drop **菜** from **点菜** whenever a specific dish follows!",
        },
      ],
      hints: ["Use the ordering verb **来** + **一碗牛肉面** (*yī wǎn niúròumiàn*)."],
      solution: ["**来一碗牛肉面** (*lái yī wǎn niúròumiàn*) or **我要一碗牛肉面**."],
    },
    {
      id: "eating-out-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "five-flavours",
      question: "Which flavour word means **spicy / chilli-hot**?",
      options: ["酸 (suān)", "甜 (tián)", "辣 (là)", "咸 (xián)"],
      answerIndex: 2,
      hints: ["Appears in **不要太辣** ('not too spicy') and **辣椒** ('chilli pepper')!"],
      explanation:
        "**辣** (*là*) means 'spicy'. **酸** is sour, **甜** is sweet, and **咸** is salty.",
    },
    {
      id: "eating-out-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "five-flavours",
      question: "Fill in the blank with **好吃** or **好喝**: **这家饭馆的酸辣汤非常 ____！**",
      answer: {
        type: "text",
        accept: ["好喝", "hǎohē"],
        display: "好喝 (hǎohē)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["好吃", "hǎochī"] },
          feedback: "**酸辣汤** is a soup (**汤**) — because Mandarin says **喝汤**, soup MUST be **好喝**, not *好吃*!",
        },
      ],
      hints: [
        "Look at the noun: **酸辣汤** ends in **汤** (*tāng*, soup).",
        "Do you **吃** or **喝** soup in Mandarin?",
      ],
      solution: ["Because soup takes **喝**, 'tasty soup' is **好喝** (*hǎohē*)."],
    },
    {
      id: "eating-out-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "five-flavours",
      question: "Translate into Mandarin (Hanzi or toned Pinyin): **put less salt**.",
      answer: {
        type: "text",
        accept: [
          "少放盐",
          "请少放盐",
          "shǎo fàng yán",
          "qǐng shǎo fàng yán",
        ],
        display: "少放盐 (shǎo fàng yán)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["放少盐", "fàng shǎo yán"] },
          feedback: "Put **少** right BEFORE the verb **放** (*fàng*, put/add): **少放盐**!",
        },
      ],
      hints: [
        "Place **少** (*shǎo*) BEFORE the seasoning verb **放** (*fàng*, put in).",
        "'Salt' is **盐** (*yán*).",
      ],
      solution: ["**少** + **放** + **盐** = **少放盐** (*shǎo fàng yán*)."],
    },
    {
      id: "eating-out-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "paying-the-bill",
      question: "You want to ask if the restaurant accepts card payment. Which question do you ask?",
      options: [
        "请问这里可以打包吗？",
        "请问这里可以排队吗？",
        "请问这里可以点菜吗？",
        "请问这里可以刷卡吗？",
      ],
      answerIndex: 3,
      hints: [
        "Look for the verb-object compound meaning 'swipe/tap a card'.",
        "**刷** = swipe/brush, **卡** = card.",
      ],
      explanation:
        "**请问这里可以刷卡吗？** asks 'Excuse me, can I pay by card here?' **打包** is takeaway, **排队** is queueing, and **点菜** is ordering.",
    },
    {
      id: "eating-out-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "paying-the-bill",
      question: "Write the two-character Mandarin verb meaning **to pack leftovers / takeaway** (Simplified Hanzi or toned Pinyin).",
      answer: {
        type: "text",
        accept: ["打包", "dǎbāo"],
        display: "打包 (dǎbāo)",
      },
      hints: [
        "Origin of Singlish *dabao / tapao*!",
        "Literally **打** + **包** ('make a bundle/packet').",
      ],
      solution: ["'Takeaway / pack up leftovers' is **打包** (*dǎbāo*)."],
    },
    {
      id: "eating-out-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "restaurant-review",
      question: "Which sentence praises BOTH a restaurant's food and its affordable price naturally?",
      options: [
        "这家餐厅的菜不但好吃，而且不贵。",
        "这家餐厅的菜是好吃和是不贵。",
        "虽然这家餐厅的菜好吃，而且不贵。",
        "这家餐厅的菜不但好吃，但是很便宜。",
      ],
      answerIndex: 0,
      hints: [
        "Pair **不但** (*bùdàn*, not only) with **而且** (*érqiě*, but also).",
        "Eliminate any choice mixing *虽然…而且* or *不但…但是*, or putting **是** before adjectives!",
      ],
      explanation:
        "**这家餐厅的菜不但好吃，而且不贵。** pairs **不但……而且……** cleanly without **是**.",
    },
    {
      id: "eating-out-quiz-q10",
      kind: "short",
      difficulty: "challenge",
      guideRef: "five-flavours",
      question: "Translate into Mandarin (Hanzi or toned Pinyin): **I am allergic to seafood.**",
      answer: {
        type: "text",
        accept: [
          "我对海鲜过敏",
          "Wǒ duì hǎixiān guòmǐn",
        ],
        display: "我对海鲜过敏。 (Wǒ duì hǎixiān guòmǐn.)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["我过敏海鲜", "我是过敏海鲜"] },
          feedback: "Remember the preposition **对**: **我对海鲜过敏** (Subject + **对** + Allergen + **过敏**)!",
        },
      ],
      hints: [
        "Use the allergy pattern: **我 + 对 + [Allergen] + 过敏**.",
        "'Seafood' is **海鲜** (*hǎixiān*).",
      ],
      solution: ["**我** + **对** + **海鲜** + **过敏** → **我对海鲜过敏。**"],
    },
  ],

  papers: [
    {
      id: "eating-out-p1",
      title: "Practice Paper 1 · Seating, Ordering & Flavours",
      questions: [
        {
          id: "eating-out-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "entering-seating",
          question: "Write the Mandarin phrase for **hawker centre** (Simplified Hanzi or toned Pinyin).",
          answer: {
            type: "text",
            accept: ["小贩中心", "xiǎofàn zhōngxīn"],
            display: "小贩中心 (xiǎofàn zhōngxīn)",
          },
          hints: ["Four characters: **小贩** (*xiǎofàn*, vendor) + **中心** (*zhōngxīn*, centre)."],
          solution: ["'Hawker centre' in Singapore Mandarin is **小贩中心** (*xiǎofàn zhōngxīn*)."],
        },
        {
          id: "eating-out-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "entering-seating",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **a Chinese restaurant** (use the establishment classifier **家**).",
          answer: {
            type: "text",
            accept: [
              "一家中餐馆",
              "一家中餐厅",
              "一家中国饭馆",
              "一家中国餐厅",
              "yī jiā zhōngcānguǎn",
              "yī jiā zhōngcāntīng",
              "yī jiā Zhōngguó fànguǎn",
              "yī jiā Zhōngguó cāntīng",
            ],
            display: "一家中餐馆 / 一家中国饭馆",
          },
          traps: [
            {
              spec: { type: "text", accept: ["一个中餐馆", "一个中国饭馆"] },
              feedback: "Restaurants take the establishment classifier **家** (*jiā*), not **个**!",
            },
          ],
          hints: ["Use **一家** (*yī jiā*) + **中餐馆** (or **中国饭馆**)."],
          solution: ["**一家中餐馆** (*yī jiā zhōngcānguǎn*) or **一家中国饭馆**."],
        },
        {
          id: "eating-out-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "ordering-dishes",
          question: "What does **点菜** (*diǎncài*) mean in English?",
          answer: {
            type: "text",
            accept: [
              "to order food",
              "order food",
              "to order dishes",
              "order dishes",
              "ordering food",
            ],
            display: "to order food / dishes",
          },
          hints: ["**点** = select/order from a menu; **菜** = dishes."],
          solution: ["**点菜** (*diǎncài*) means **to order food / dishes**."],
        },
        {
          id: "eating-out-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "five-flavours",
          question: "Write the single Mandarin character meaning **salty** (Simplified Hanzi or toned Pinyin).",
          answer: {
            type: "text",
            accept: ["咸", "xián"],
            display: "咸 (xián)",
          },
          hints: ["The 5th character in **酸甜苦辣咸** (*suān tián kǔ là xián*)!"],
          solution: ["'Salty' is **咸** (*xián*)."],
        },
        {
          id: "eating-out-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "entering-seating",
          question: "Unscramble into a polite question to a waiter:\n**吗 / 可以 / 我们 / 看菜单 / 服务员**",
          answer: {
            type: "text",
            accept: [
              "服务员，我们可以看菜单吗",
              "服务员我们可以看菜单吗",
              "Fúwùyuán, wǒmen kěyǐ kàn càidān ma",
            ],
            display: "服务员，我们可以看菜单吗？",
          },
          hints: [
            "Call **服务员** first, then **我们可以** ('may we') + **看菜单** ('look at the menu').",
            "Place question particle **吗** right at the end!",
          ],
          solution: ["**服务员，我们可以看菜单吗？** (*Waiter, may we look at the menu?*)"],
        },
        {
          id: "eating-out-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "ordering-dishes",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **Bring another plate of dumplings!** (Use **再来**).",
          answer: {
            type: "text",
            accept: [
              "再来一盘饺子",
              "请再来一盘饺子",
              "zài lái yī pán jiǎozi",
              "qǐng zài lái yī pán jiǎozi",
            ],
            display: "再来一盘饺子！ (Zài lái yī pán jiǎozi!)",
          },
          hints: [
            "**再来** (*zài lái*) means 'bring another / one more'.",
            "'A plate of dumplings' = **一盘饺子** (*yī pán jiǎozi*).",
          ],
          solution: ["Combine **再来** + **一盘饺子** → **再来一盘饺子！**"],
        },
        {
          id: "eating-out-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "five-flavours",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **Grandma is vegetarian.**",
          answer: {
            type: "text",
            accept: [
              "奶奶吃素",
              "外婆吃素",
              "我奶奶吃素",
              "Nǎinai chīsù",
              "Wàipó chīsù",
            ],
            display: "奶奶吃素。 (Nǎinai chīsù.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["奶奶是吃素"] },
              feedback: "**吃素** (*chīsù*, eat vegetarian food) is already a verb-object phrase — no **是** needed!",
            },
          ],
          hints: [
            "'Grandma' = **奶奶** (*nǎinai*).",
            "'Eat vegetarian / be vegetarian' = **吃素** (*chīsù*, no **是** needed).",
          ],
          solution: ["**奶奶** + **吃素** = **奶奶吃素。**"],
        },
        {
          id: "eating-out-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "five-flavours",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **Sichuan food is both numbing and spicy!** (Use **四川菜** and **又…又…**; put **麻** before **辣**).",
          answer: {
            type: "text",
            accept: [
              "四川菜又麻又辣",
              "Sìchuān cài yòu má yòu là",
            ],
            display: "四川菜又麻又辣！ (Sìchuān cài yòu má yòu là!)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["四川菜是麻和辣", "四川菜麻和辣"] },
              feedback: "Never join adjectives with **和** or put **是** before them — use **又麻又辣**!",
            },
          ],
          hints: [
            "Use the twin-adjective frame **Subject + 又 + Adj 1 + 又 + Adj 2**.",
            "Put **麻** (*má*, numbing) first and **辣** (*là*, spicy) second.",
          ],
          solution: ["**四川菜** + **又麻又辣** → **四川菜又麻又辣！**"],
        },
        {
          id: "eating-out-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "paying-the-bill",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **Excuse me, how much is it altogether?**",
          answer: {
            type: "text",
            accept: [
              "请问一共多少钱",
              "请问，一共多少钱",
              "一共多少钱",
              "Qǐngwèn yīgòng duōshao qián",
              "Yīgòng duōshao qián",
            ],
            display: "请问一共多少钱？ (Qǐngwèn yīgòng duōshao qián?)",
          },
          hints: [
            "'Excuse me, may I ask' = **请问** (*qǐngwèn*).",
            "'Altogether how much money' = **一共多少钱** (*yīgòng duōshao qián*).",
          ],
          solution: ["**请问一共多少钱？** (*Qǐngwèn yīgòng duōshao qián?*)"],
        },
        {
          id: "eating-out-p1-q10",
          kind: "short",
          difficulty: "challenge",
          guideRef: "paying-the-bill",
          question: "Read the receipt at an Orchard Road **餐厅**:\n**酸甜鱼：26新币 · 西红柿炒鸡蛋：14新币 · 四碗米饭：共8新币 · 一壶绿茶：10新币**\nDad pays with a **100新币** note. How many **新币** change (**找钱**) should he receive? Write a number.",
          answer: {
            type: "number",
            value: 42,
            display: "42 新币",
          },
          traps: [
            {
              spec: { type: "number", value: 58 },
              feedback: "58新币 is the bill total — subtract from 100新币 to find the change (**找钱**)!",
            },
            {
              spec: { type: "number", value: 18 },
              feedback: "Look closely at **四碗米饭：共8新币** — **共8新币** means 8 SGD *in total* for all 4 bowls (not 8 × 4)!",
            },
          ],
          hints: [
            "Watch **共8新币**: **共** (short for **一共**) means all four bowls together cost 8 SGD!",
            "Total = 26 + 14 + 8 + 10 = 58 SGD; now subtract 58 from 100.",
          ],
          solution: [
            "Total bill = 26 + 14 + 8 (total for 4 rice) + 10 = 58新币.",
            "Change from 100新币 = 100 − 58 = **42** 新币.",
          ],
        },
        {
          id: "eating-out-p1-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "ordering-dishes",
          question: "Read the dialogue:\n— **你们想点什么？**\n— **我们要一份烤鸭、一盘炒青菜和两碗酸辣汤。烤鸭请打包，其他的在这里吃。**\nWhich item is being taken home in a takeaway box? Answer in **English**.",
          answer: {
            type: "text",
            accept: [
              "roast duck",
              "the roast duck",
              "roasted duck",
              "duck",
            ],
            display: "roast duck (烤鸭)",
          },
          hints: [
            "Spot the takeaway verb **打包** (*dǎbāo*) in the second sentence!",
            "Which dish stands right in front of **请打包**?",
          ],
          solution: [
            "**烤鸭请打包** means 'please pack the **roast duck** for takeaway', while the other dishes are eaten there (**其他的在这里吃**).",
          ],
        },
        {
          id: "eating-out-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "restaurant-review",
          question: "Unscramble into a high-scoring review sentence:\n**不但 / 而且 / 这家饭馆的菜 / 很便宜 / 非常好吃**",
          answer: {
            type: "text",
            accept: [
              "这家饭馆的菜不但非常好吃，而且很便宜",
              "这家饭馆的菜不但非常好吃而且很便宜",
              "这家饭馆的菜不但很便宜，而且非常好吃",
              "Zhè jiā fànguǎn de cài bùdàn fēicháng hǎochī, érqiě hěn piányi",
              "Zhè jiā fànguǎn de cài búdàn fēicháng hǎochī, érqiě hěn piányi",
              "Zhè jiā fànguǎn de cài bùdàn hěn piányi, érqiě fēicháng hǎochī",
              "Zhè jiā fànguǎn de cài búdàn hěn piányi, érqiě fēicháng hǎochī",
            ],
            display: "这家饭馆的菜不但非常好吃，而且很便宜。",
          },
          hints: [
            "Start with the shared subject **这家饭馆的菜** ('This restaurant's food').",
            "Follow with **不但……，而且……** ('not only…, but also…').",
          ],
          solution: [
            "Shared subject (**这家饭馆的菜**) + **不但非常好吃** + **而且很便宜** → **这家饭馆的菜不但非常好吃，而且很便宜。**",
          ],
        },
        {
          id: "eating-out-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "ordering-dishes",
          marks: 5,
          question:
            "**IGCSE 0547 Restaurant Roleplay (5 marks)**\nYou are dining at a Chinese restaurant in Beijing with two friends. Write your 5 lines in Mandarin responding to the waiter:\n1. Tell the waiter how many people are in your group (**3 people**, polite) and ask for a menu;\n2. Order **two main dishes** and **one soup** with exact classifiers;\n3. Make **one dietary or flavour request** (e.g. not too spicy / no coriander / less salt);\n4. Order **drinks** for the three of you;\n5. Ask for the bill and ask if you can **pay by card or mobile payment**.",
          modelAnswer:
            "您好！我们有三位，请问可以看菜单吗？我们想点一只北京烤鸭、一盘炒青菜和一碗西红柿鸡蛋汤。炒青菜请少放盐，也不要放辣椒。请再给我们来三杯冰绿茶。服务员，买单！请问这里可以刷卡或者用手机支付吗？",
          markScheme: [
            {
              point: "States 3 people politely (三位 / 三个人) and asks for the menu (菜单).",
              keywords: ["三位", "三个人", "菜单"],
            },
            {
              point: "Orders two dishes and one soup using 点 / 要 / 来 and accurate classifiers (盘, 道, 份, 条, 只, 碗).",
              keywords: ["点", "要", "来", "盘", "碗", "汤"],
            },
            {
              point: "Makes a clear kitchen customization request (不要太辣 / 少放盐 / 不要香菜 / 吃素 / 过敏).",
              keywords: ["不要", "少放", "辣", "盐", "香菜", "吃素", "过敏"],
            },
            {
              point: "Orders three drinks with a container classifier (三杯 / 三瓶).",
              keywords: ["三杯", "三瓶", "茶", "水", "果汁", "可乐", "咖啡"],
            },
            {
              point: "Calls to pay the bill (买单 / 结账) and asks about 刷卡 or 手机支付 / 扫码.",
              keywords: ["买单", "结账", "刷卡", "手机", "扫码"],
            },
          ],
          commonError:
            "Writing *点菜一盘炒青菜* (remember to drop **菜** from **点菜** when naming a dish!).",
          hints: [
            "Check that you say **三位** (for 3 people) and **三杯……** (for 3 drinks).",
            "Drop **菜** after **点** when naming specific dishes!",
          ],
        },
        {
          id: "eating-out-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "restaurant-review",
          marks: 5,
          question:
            "**IGCSE 0547 Article / Review — 80–130 Characters (5 marks)**\nWrite a review for your school magazine about a recent meal out with your family at a **restaurant** or **Singapore hawker centre (小贩中心)**. Include:\n- **When**, **where**, and **with whom** you went (STPV order);\n- What the **ambience (环境)** and **service (服务)** were like;\n- What dishes/drinks you ordered and how they **tasted** (use at least **two flavour words**);\n- How much it cost / how you paid, and whether you **recommend (推荐)** it.",
          modelAnswer:
            "上个星期六晚上，我跟爸爸妈妈一起去牛车水的小贩中心吃晚饭。虽然周末那里非常热闹，还要排队，但是环境很干净。我们点了两盘海南鸡饭、一条蒸鱼、一盘酸甜猪肉和三杯冰甘蔗汁。鸡饭真香，酸甜猪肉又酸又甜，果汁也很好喝！这顿饭一共只花了三十新币，爸爸扫码付了钱。小贩中心的美食不但便宜，而且美味，我非常推荐大家去！",
          markScheme: [
            {
              point: "Sets the scene in accurate STPV order (Time + 跟…一起 + 去 Venue + 吃饭).",
              keywords: ["星期", "周末", "一起", "去", "餐厅", "饭馆", "小贩中心", "食阁"],
            },
            {
              point: "Describes ambience/service (环境, 干净, 热闹, 排队, 服务员, 热情).",
              keywords: ["环境", "干净", "热闹", "排队", "服务", "热情"],
            },
            {
              point: "Names dishes & drinks ordered and uses at least two taste/flavour words (酸, 甜, 苦, 辣, 咸, 清淡, 香, 新鲜, 好吃, 好喝).",
              keywords: ["酸", "甜", "辣", "咸", "清淡", "香", "新鲜", "好吃", "好喝"],
            },
            {
              point: "Mentions price/value (一共, 块/元/新币, 便宜, 不贵) and/or payment method (刷卡, 扫码, 手机支付, 现金).",
              keywords: ["一共", "块", "元", "新币", "便宜", "不贵", "刷卡", "扫码", "手机", "现金"],
            },
            {
              point: "Gives a clear conclusion/recommendation (满意, 推荐, 下次还去) using complex connectors (虽然…但是 / 不但…而且 / 又…又).",
              keywords: ["推荐", "满意", "虽然", "不但", "又"],
            },
          ],
          commonError:
            "Using **好吃** for drinks/soups instead of **好喝**, or putting place/time at the end of the opening sentence.",
          hints: [
            "Follow the 5-step review blueprint from Section 5!",
            "Pair solid dishes with **好吃** and drinks/soup with **好喝**.",
          ],
        },
      ],
    },
    {
      id: "eating-out-p2",
      title: "Practice Paper 2 · Dietary Requests, Payment & Hawker Culture",
      questions: [
        {
          id: "eating-out-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "entering-seating",
          question: "Write the four-character polite phrase meaning **Welcome!** said by restaurant staff when customers enter (Simplified Hanzi or toned Pinyin).",
          answer: {
            type: "text",
            accept: ["欢迎光临", "huānyíng guānglín"],
            display: "欢迎光临 (huānyíng guānglín)",
          },
          hints: ["Four characters starting with **欢迎** (*huānyíng*, welcome) + **光临** (*guānglín*)!"],
          solution: ["Staff greet arriving guests with **欢迎光临！** (*Huānyíng guānglín!*)."],
        },
        {
          id: "eating-out-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "ordering-dishes",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **one set meal** (use **份** and **套餐**).",
          answer: {
            type: "text",
            accept: ["一份套餐", "yī fèn tàocān", "yí fèn tàocān"],
            display: "一份套餐 (yī fèn tàocān)",
          },
          hints: ["Combine **一份** (*yī fèn*, one portion/order) + **套餐** (*tàocān*, set meal)."],
          solution: ["'One set meal' = **一份套餐** (*yī fèn tàocān*)."],
        },
        {
          id: "eating-out-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "five-flavours",
          question: "What does **香菜** (*xiāngcài*) mean in English?",
          answer: {
            type: "text",
            accept: ["coriander", "cilantro", "chinese parsley", "fresh coriander", "fresh cilantro"],
            display: "coriander / cilantro",
          },
          hints: ["Literally 'fragrant herb/vegetable' — often topped on beef noodles unless you say **不要香菜**!"],
          solution: ["**香菜** (*xiāngcài*) is **coriander** (also called **cilantro**)."],
        },
        {
          id: "eating-out-p2-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "paying-the-bill",
          question: "Write the Mandarin word for **cash** (Simplified Hanzi or toned Pinyin).",
          answer: {
            type: "text",
            accept: ["现金", "xiànjīn"],
            display: "现金 (xiànjīn)",
          },
          hints: ["Two characters: **现** (*xiàn*, present/on-hand) + **金** (*jīn*, gold/money)."],
          solution: ["'Cash' is **现金** (*xiànjīn*)."],
        },
        {
          id: "eating-out-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "entering-seating",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **Is there a seat?** (Use **有** and **座位**).",
          answer: {
            type: "text",
            accept: [
              "有座位吗",
              "有没有座位",
              "请问有座位吗",
              "请问有没有座位",
              "还有座位吗",
              "yǒu zuòwèi ma",
              "yǒu méiyǒu zuòwèi",
              "qǐngwèn yǒu zuòwèi ma",
              "hái yǒu zuòwèi ma",
            ],
            display: "有座位吗？ (Yǒu zuòwèi ma?)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["有坐位吗"] },
              feedback: "Careful with the character! The noun 'seat' needs the roof radical **广**: **座位** (*zuòwèi*), not *坐位*!",
            },
          ],
          hints: [
            "Check that **座** in **座位** has the shelter radical **广** on top!",
            "Frame as **有座位吗？**",
          ],
          solution: ["**有座位吗？** (*Yǒu zuòwèi ma?*)"],
        },
        {
          id: "eating-out-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "ordering-dishes",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **We ordered four dishes.** (Use the course measure word **道**).",
          answer: {
            type: "text",
            accept: [
              "我们点了四道菜",
              "Wǒmen diǎn le sì dào cài",
            ],
            display: "我们点了四道菜。 (Wǒmen diǎn le sì dào cài.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我们点菜了四道菜"] },
              feedback: "Drop the first **菜** after **点** when **四道菜** follows: **我们点了四道菜**!",
            },
          ],
          hints: [
            "Use **我们点了** (*wǒmen diǎn le*, we ordered).",
            "'Four courses/dishes' = **四道菜** (*sì dào cài*).",
          ],
          solution: ["**我们点了四道菜。** (*Wǒmen diǎn le sì dào cài.*)"],
        },
        {
          id: "eating-out-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "five-flavours",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **Today's soup is too salty.**",
          answer: {
            type: "text",
            accept: [
              "今天的汤太咸了",
              "今天汤太咸了",
              "Jīntiān de tāng tài xián le",
            ],
            display: "今天的汤太咸了。 (Jīntiān de tāng tài xián le.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["今天的汤是太咸了"] },
              feedback: "Never put **是** before **太……了**! Say **今天的汤太咸了**.",
            },
          ],
          hints: [
            "'Today's soup' = **今天的汤** (*jīntiān de tāng*).",
            "Use the **太 + Adj + 了** frame with **咸** (*xián*, salty) — no **是**!",
          ],
          solution: ["**今天的汤** + **太咸了** → **今天的汤太咸了。**"],
        },
        {
          id: "eating-out-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "five-flavours",
          question: "You want your bubble tea with **less sugar and no ice**. Write the 5-character Mandarin customisation phrase (**少糖，____** — Hanzi or toned Pinyin for the whole 5-character phrase).",
          answer: {
            type: "text",
            accept: [
              "少糖，不加冰",
              "少糖不加冰",
              "少糖，不要冰",
              "少糖不要冰",
              "少糖，去冰",
              "shǎotáng, bù jiā bīng",
              "shǎo táng bù jiā bīng",
              "shǎotáng, búyào bīng",
            ],
            display: "少糖，不加冰 (shǎotáng, bù jiā bīng)",
          },
          hints: [
            "'Less sugar' = **少糖** (*shǎotáng*).",
            "'No ice added' = **不加冰** (*bù jiā bīng*).",
          ],
          solution: ["**少糖，不加冰** (*shǎotáng, bù jiā bīng*)."],
        },
        {
          id: "eating-out-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "restaurant-review",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **The servers here are very warm and welcoming.** (Use **这里的服务员** and **热情**).",
          answer: {
            type: "text",
            accept: [
              "这里的服务员很热情",
              "这里的服务员非常热情",
              "这里的服务员都很热情",
              "Zhèlǐ de fúwùyuán hěn rèqíng",
              "Zhèlǐ de fúwùyuán fēicháng rèqíng",
              "Zhèlǐ de fúwùyuán dōu hěn rèqíng",
            ],
            display: "这里的服务员很热情。 (Zhèlǐ de fúwùyuán hěn rèqíng.)",
          },
          hints: [
            "Start with **这里的服务员** ('the servers here').",
            "Add **很热情** (*hěn rèqíng*, very warm/welcoming — no **是**!).",
          ],
          solution: ["**这里的服务员很热情。** (*Zhèlǐ de fúwùyuán hěn rèqíng.*)"],
        },
        {
          id: "eating-out-p2-q10",
          kind: "short",
          difficulty: "challenge",
          guideRef: "paying-the-bill",
          question: "Read the delivery app checkout screen (**外卖订单**):\n**两份海南鸡饭（每份6新币）· 一份炒青菜（5新币）· 两杯薏米水（每杯2新币）· 配送费（delivery fee）：4新币**\nWhat is the total amount to pay in SGD? Write a single number.",
          answer: {
            type: "number",
            value: 25,
            display: "$25",
          },
          traps: [
            {
              spec: { type: "number", value: 21 },
              feedback: "Don't forget to include the **配送费：4新币** (delivery fee)!",
            },
            {
              spec: { type: "number", value: 17 },
              feedback: "Multiply **两份** (2 portions × 6) and **两杯** (2 cups × 2), plus 5 + 4!",
            },
          ],
          hints: [
            "Compute (2 × 6) + 5 + (2 × 2) first.",
            "Then add the 4新币 delivery fee (**配送费**)!",
          ],
          solution: [
            "Chicken rice: 2 × 6 = 12; greens: 5; barley water: 2 × 2 = 4; delivery fee: 4.",
            "Total = 12 + 5 + 4 + 4 = **25** 新币.",
          ],
        },
        {
          id: "eating-out-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "entering-seating",
          question: "Read: **「星期五晚上七点，那家火锅店门口有很多人在排队。我们等了半个小时才有座位。」** How many **minutes** did they wait for a seat? Write a number.",
          answer: {
            type: "number",
            value: 30,
            display: "30 minutes",
          },
          hints: [
            "Look at the duration phrase **等了半个小时** ('waited for half an hour').",
            "Convert **半个小时** into minutes!",
          ],
          solution: ["**半个小时** = half an hour = **30** minutes."],
        },
        {
          id: "eating-out-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "restaurant-review",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **I am very satisfied with this restaurant.** (Use **对…很满意** and **这家餐厅**).",
          answer: {
            type: "text",
            accept: [
              "我对这家餐厅很满意",
              "我对这家餐厅非常满意",
              "Wǒ duì zhè jiā cāntīng hěn mǎnyì",
              "Wǒ duì zhè jiā cāntīng fēicháng mǎnyì",
            ],
            display: "我对这家餐厅很满意。 (Wǒ duì zhè jiā cāntīng hěn mǎnyì.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我很满意这家餐厅", "我对这个餐厅很满意"] },
              feedback: "Use **对** + **这家餐厅** (establishment classifier **家**) + **很满意**!",
            },
          ],
          hints: [
            "Pattern: **我 + 对 + 这家餐厅 + 很满意**.",
            "Remember **家** is the classifier for **餐厅**.",
          ],
          solution: ["**我对这家餐厅很满意。** (*Wǒ duì zhè jiā cāntīng hěn mǎnyì.*)"],
        },
        {
          id: "eating-out-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "five-flavours",
          marks: 4,
          question:
            "**IGCSE 0547 Short Note Task — Hosting Exchange Students (4 marks)**\nFour students from Britain are visiting Tanglin and you are booking lunch at a Chinese restaurant. Write a polite note in Mandarin to the restaurant manager explaining:\n1. What day and time you are coming, and how many people (**8 people**, polite);\n2. That one student is **vegetarian (吃素)** and another is **allergic to peanuts (花生)**;\n3. What flavours the guests like (e.g. **酸甜 / 清淡**) and that dishes should **not be too spicy**;\n4. Asking the manager to **recommend two signature dishes (特色菜)**.",
          modelAnswer:
            "经理您好！这个星期六中午十二点半，我们一共有八位客人想来贵餐厅吃午饭。我们当中有两位英国同学：一位吃素，另一位对花生过敏。大家都喜欢吃酸甜或者清淡的菜，请不要做得太辣。请问您可以给我们推荐两道特色菜吗？谢谢！",
          markScheme: [
            {
              point: "States day/time in big-to-small order and party size politely (八位 / 八个人).",
              keywords: ["星期", "点", "八位", "八个人"],
            },
            {
              point: "Clearly states both dietary requirements: 吃素 and 对花生过敏.",
              keywords: ["吃素", "花生", "过敏"],
            },
            {
              point: "Describes preferred flavours (酸甜 / 清淡) and requests 不要太辣.",
              keywords: ["酸甜", "清淡", "不要太辣", "不吃辣"],
            },
            {
              point: "Politely asks for dish recommendations using 推荐 and 特色菜.",
              keywords: ["推荐", "特色菜"],
            },
          ],
          commonError:
            "Forgetting **对** in **对花生过敏**, or putting the clock time after **来餐厅**.",
          hints: [
            "Use **对花生过敏** for the peanut allergy.",
            "Keep your date/time (**这个星期六中午十二点半**) BEFORE **来**!",
          ],
        },
        {
          id: "eating-out-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "paying-the-bill",
          marks: 5,
          question:
            "**IGCSE 0547 Diary Entry — 80–130 Characters (5 marks)**\nWrite a Mandarin diary entry about celebrating a family member's birthday at a restaurant last weekend. Include:\n- Who the birthday was for and which restaurant you went to;\n- How you ordered (e.g. **菜单** or **扫码点菜**) and at least **three dishes/drinks** you shared;\n- What happened when **paying the bill (买单 / 结账)** and packing leftovers (**打包**);\n- How everyone felt at the end of the evening.",
          modelAnswer:
            "十月十八日 星期日 晴\n今天是爷爷的生日，晚上我们全家人去一家有名的中餐馆吃晚饭。那家饭馆既干净又热闹，服务员很热情。爸爸用手机扫码点了五道菜：北京烤鸭、清蒸鱼、酸甜虾、炒青菜和一大碗鸡汤。蒸鱼很清淡、很新鲜，鸡汤也非常好喝！因为菜太多了，我们吃不完，就请服务员把剩下的烤鸭打包。最后妈妈去柜台刷卡结账，全家人对这顿生日晚餐都非常满意！",
          markScheme: [
            {
              point: "Explains the birthday occasion and restaurant venue in STPV order.",
              keywords: ["生日", "家人", "饭馆", "餐厅", "中餐馆", "西餐厅"],
            },
            {
              point: "Mentions ordering (点 / 菜单 / 扫码) and names at least three dishes/drinks/soup.",
              keywords: ["点", "烤鸭", "鱼", "虾", "青菜", "汤", "面", "饺子"],
            },
            {
              point: "Describes flavours accurately (清淡 / 新鲜 / 酸甜 / 香 / 好吃 / 好喝).",
              keywords: ["清淡", "新鲜", "酸甜", "香", "好吃", "好喝"],
            },
            {
              point: "Includes packing leftovers (打包) and settling the bill (买单 / 结账 / 刷卡 / 扫码 / 现金).",
              keywords: ["打包", "买单", "结账", "刷卡", "扫码", "手机", "付钱"],
            },
            {
              point: "Expresses family satisfaction (满意 / 开心 / 高兴) with cohesive connectors (因为…所以 / 又…又).",
              keywords: ["满意", "开心", "高兴", "因为"],
            },
          ],
          commonError:
            "Forgetting past-action **了** (**点了**, **去了**) when narrating last weekend's meal.",
          hints: [
            "Include **吃不完……打包** ('couldn't finish it, so packed leftovers') for authentic detail!",
            "Make sure **汤** is described as **好喝**, not *好吃*.",
          ],
        },
      ],
    },
  ],

  challenge: [
    {
      id: "eating-out-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "entering-seating",
      question:
        "**Character Minimal-Pair Puzzle**: Which sentence uses EVERY homophone pair (**坐/座**, **买/菜**, **位/味**) with 100% accuracy?",
      options: [
        "四位客人找到座位坐下，看了菜单点菜，觉得味道很好，最后去买单。",
        "四味客人找到坐位座下，看了买单点菜，觉得位道很好，最后去菜单。",
        "四位客人找到坐位坐下，看了菜单点菜，觉得味道很好，最后去菜单。",
        "四味客人找到座位座下，看了菜单点菜，觉得味道很好，最后去买单。",
      ],
      answerIndex: 0,
      hints: [
        "Check each pair's meaning: **四位客人** (4 guests) vs **味道** (flavour); **座位** (seat — noun) vs **坐下** (sit down — verb).",
        "At the start you read the **菜单** (menu); at the end you **买单** (pay the bill)!",
      ],
      explanation:
        "**四位客人** (polite guest MW **位**), **座位** (noun with **广**), **坐下** (verb **坐**), **菜单** (menu), **味道** (taste **味**), and **买单** (pay bill) are all written with exact character precision.",
    },
    {
      id: "eating-out-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "five-flavours",
      question:
        "**Five-Flavour Table Deduction**: Five dishes sit on a Lazy Susan turntable — **苦瓜炒蛋**, **酸辣汤**, **北京烤鸭**, **糖醋鱼**, and **麻辣火锅**:\n- Dish X tastes both **酸** and **甜**, contains seafood, and is NOT a soup.\nWrite the Mandarin name of Dish X (Simplified Hanzi or toned Pinyin).",
      answer: {
        type: "text",
        accept: ["糖醋鱼", "tángcùyú"],
        display: "糖醋鱼 (tángcùyú — sweet-and-sour fish)",
      },
      hints: [
        "Look at the ingredients inside each dish name: **糖** (*táng*) = sugar (sweet **甜**), **醋** (*cù*) = vinegar (sour **酸**), **鱼** = fish (seafood)!",
        "**酸辣汤** is sour + spicy and IS a soup, so rule it out.",
      ],
      solution: [
        "**糖** (sugar → **甜**) + **醋** (vinegar → **酸**) + **鱼** (fish, not a soup) uniquely identifies **糖醋鱼** (*tángcùyú*, sweet-and-sour fish)!",
      ],
    },
    {
      id: "eating-out-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "paying-the-bill",
      question:
        "**Restaurant Promo Maths**: A dim sum restaurant in Singapore offers **「满50新币减10新币」** (*Spend \$50 or more and get \$10 off*). Your family orders:\n- **三笼小笼包** (\$8 per basket **每笼8新币**)\n- **两盘炒饭** (\$9 per plate)\n- **一壶菊花茶** (\$6)\n- **两份甜点** (\$5 per portion)\nHow much does your family actually pay AFTER checking whether they qualify for the promotion? Write a single number.",
      answer: {
        type: "number",
        value: 48,
        display: "$48",
      },
      hints: [
        "First calculate the pre-discount subtotal: (3 × 8) + (2 × 9) + 6 + (2 × 5).",
        "Check whether that subtotal is ≥ 50 — if yes, subtract 10 (**减10新币**)!",
      ],
      solution: [
        "Subtotal = (3 × \$8) + (2 × \$9) + \$6 + (2 × \$5) = 24 + 18 + 6 + 10 = \$58.",
        "Since \$58 ≥ \$50, the **满50减10** promotion applies: 58 − 10 = **48** (\$48).",
      ],
    },
    {
      id: "eating-out-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "ordering-dishes",
      question:
        "**Separable Verb Mastery**: All four words **吃饭**, **点菜**, **排队**, and **买单** are separable verb-object compounds (*líhécí*). Which sentence breaks Mandarin's separable-verb rule?",
      options: [
        "我们已经点了菜，等一下就上菜。",
        "周末那家餐厅人太多，我们排了一个小时的队。",
        "爸爸去柜台买完了单，我们就回家了。",
        "妈妈想点菜一条清蒸鱼和两碗米饭。",
      ],
      answerIndex: 3,
      hints: [
        "In separable Verb + Object words, aspect/result markers (**了**, **完**) and durations go BETWEEN the verb and object (**点了菜**, **排了一个小时的队**, **买完了单**).",
        "What can NEVER follow the full Verb+Object compound **点菜** directly?",
      ],
      explanation:
        "*点菜一条清蒸鱼* is ungrammatical because **点菜** already has **菜** in its object slot — you cannot attach a second object after it! Drop **菜** and say **妈妈想点一条清蒸鱼和两碗米饭**.",
    },
    {
      id: "eating-out-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "five-flavours",
      question:
        "**China's Regional Flavour Saying**: Complete the classic 8-character cultural proverb mapping regional tastes across China:\n**南甜北 ____，东辣西酸**\n(*South sweet, North ____, East spicy, West sour* — hint: northern Chinese cuisine favours savoury soy/salt seasoning!). Write the missing single character in Hanzi or toned Pinyin.",
      answer: {
        type: "text",
        accept: ["咸", "xián"],
        display: "咸 (xián)",
      },
      hints: [
        "Check which of the Five Flavours (**酸甜苦辣咸**) represents savoury/salty northern cooking!",
        "**甜**, **辣**, and **酸** are already in the proverb — between **苦** and **咸**, which describes savoury dishes?",
      ],
      solution: [
        "The famous culinary saying is **南甜北咸，东辣西酸** (*Nán tián běi xián, dōng là xī suān*) — missing character: **咸** (*xián*, salty/savoury).",
      ],
    },
    {
      id: "eating-out-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "ordering-dishes",
      question:
        "**Natural Restaurant Translation**: Translate into Mandarin (Hanzi or toned Pinyin):\n**Please don't put coriander in.** (Use **请不要放…**).",
      answer: {
        type: "text",
        accept: [
          "请不要放香菜",
          "请别放香菜",
          "不要放香菜",
          "Qǐng bù yào fàng xiāngcài",
          "Bù yào fàng xiāngcài",
        ],
        display: "请不要放香菜。 (Qǐng bù yào fàng xiāngcài.)",
      },
      hints: [
        "'Please don't put' = **请不要放** (*qǐng bù yào fàng*).",
        "'Coriander / cilantro' = **香菜** (*xiāngcài*).",
      ],
      solution: ["**请不要放** + **香菜** → **请不要放香菜。**"],
    },
    {
      id: "eating-out-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "restaurant-review",
      question:
        "**Connector Subject-Placement Rule**: Compare:\n- Same subject: **这家餐厅的菜不但好吃，而且不贵。**\n- TWO different subjects (*the dishes* are tasty, AND *the servers* are welcoming): where MUST **不但** stand?",
      options: [
        "BEFORE the first subject: 不但菜很好吃，而且服务员也很热情。",
        "At the very end of the sentence: 菜很好吃，服务员也很热情不但。",
        "Right before 热情: 菜很好吃，而且服务员不但很热情。",
        "Inside 服务员: 菜很好吃，服不但务员很热情。",
      ],
      answerIndex: 0,
      hints: [
        "Recall the golden Mandarin connector rule for **不但…而且…** and **虽然…但是…**:",
        "1 subject → Subject before **不但**; 2 different subjects → **不但** BEFORE Subject 1!",
      ],
      explanation:
        "When the two clauses have DIFFERENT subjects (**菜** vs **服务员**), **不但** moves in front of the first subject: **不但菜很好吃，而且服务员也很热情。**",
    },
    {
      id: "eating-out-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "paying-the-bill",
      question:
        "**Polite Leftovers Request**: Unscramble into a natural Mandarin request using the **把** (*bǎ*) disposal structure:\n**打包 / 请帮我们 / 剩下的菜 / 把**",
      answer: {
        type: "text",
        accept: [
          "请帮我们把剩下的菜打包",
          "Qǐng bāng wǒmen bǎ shèngxià de cài dǎbāo",
        ],
        display: "请帮我们把剩下的菜打包。",
      },
      hints: [
        "Start politely with **请帮我们** ('Please help us').",
        "In a **把** sentence, **把 + Object (剩下的菜, the leftover dishes)** MUST come BEFORE the action verb (**打包**)!",
      ],
      solution: [
        "**请帮我们** + **把剩下的菜** (object moved before verb) + **打包** → **请帮我们把剩下的菜打包。**",
      ],
    },
  ],
};
