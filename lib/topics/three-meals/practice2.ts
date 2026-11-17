import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "three-meals-p3",
    title: "Practice Paper 3 · Comprehensive Meals, Drinks & IGCSE Writing",
    questions: [
      {
        id: "three-meals-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "meals-staples",
        question: "Write the Mandarin word for **noodles** (Simplified Hanzi or toned Pinyin).",
        answer: {
          type: "text",
          accept: ["面条", "miàntiáo"],
          display: "面条 (miàntiáo)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["面包", "miànbāo"] },
            feedback: "**面包** (*miànbāo*) is bread; noodles are **面条** (*miàntiáo* — **条** = long strips)!",
          },
        ],
        hints: ["Combine **面** (*miàn*, wheat dough) + **条** (*tiáo*, long strip)."],
        solution: ["'Noodles' is **面条** (*miàntiáo*)."],
      },
      {
        id: "three-meals-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "meats-dishes",
        question: "Write the Mandarin word for **chicken meat** (Simplified Hanzi or toned Pinyin).",
        answer: {
          type: "text",
          accept: ["鸡肉", "jīròu"],
          display: "鸡肉 (jīròu)",
        },
        hints: ["Combine **鸡** (*jī*, chicken) + **肉** (*ròu*, meat)."],
        solution: ["Chicken (**鸡**) + meat (**肉**) = **鸡肉** (*jīròu*)."],
      },
      {
        id: "three-meals-p3-q03",
        kind: "short",
        difficulty: "warmup",
        guideRef: "drinks-containers",
        question: "Translate into Mandarin (Hanzi or toned Pinyin): **a cup of coffee**.",
        answer: {
          type: "text",
          accept: ["一杯咖啡", "yī bēi kāfēi", "yì bēi kāfēi"],
          display: "一杯咖啡 (yī bēi kāfēi)",
        },
        hints: ["Use **一杯** (*yī bēi*) + **咖啡** (*kāfēi*)."],
        solution: ["'A cup of coffee' = **一杯咖啡** (*yī bēi kāfēi*)."],
      },
      {
        id: "three-meals-p3-q04",
        kind: "short",
        difficulty: "warmup",
        guideRef: "hungry-thirsty-full",
        question: "What does **慢用** (*mànyòng*) mean in English when said at the dinner table?",
        answer: {
          type: "text",
          accept: [
            "enjoy your meal",
            "bon appetit",
            "bon appétit",
            "please enjoy your meal",
            "eat slowly",
            "take your time",
            "take your time eating",
          ],
          display: "Enjoy your meal!",
        },
        hints: ["Literally 'eat/use slowly' — the polite Chinese phrase said as people start eating!"],
        solution: ["**慢用** (*mànyòng*) means **Enjoy your meal!**"],
      },
      {
        id: "three-meals-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "meals-staples",
        question: "Translate into Mandarin (Hanzi or toned Pinyin): **Dad eats congee (rice porridge) for breakfast.**",
        answer: {
          type: "text",
          accept: [
            "爸爸早饭吃粥",
            "爸爸早饭喝粥",
            "爸爸早餐吃粥",
            "爸爸早餐喝粥",
            "早饭爸爸吃粥",
            "早饭爸爸喝粥",
            "Bàba zǎofàn chī zhōu",
            "Bàba zǎofàn hē zhōu",
            "Bàba zǎocān chī zhōu",
            "Bàba zǎocān hē zhōu",
            "Zǎofàn bàba chī zhōu",
            "Zǎofàn bàba hē zhōu",
          ],
          display: "爸爸早饭喝粥 / 爸爸早饭吃粥",
        },
        traps: [
          {
            spec: { type: "text", accept: ["爸爸吃粥给早饭", "爸爸喝粥给早饭"] },
            feedback: "Never translate 'for breakfast' as *给早饭* — place **早饭** right before **吃/喝**!",
          },
        ],
        hints: [
          "Put **爸爸** + **早饭** + **喝/吃** + **粥** (*zhōu*).",
          "Both **喝粥** and **吃粥** are idiomatic in Mandarin!",
        ],
        solution: ["Subject (**爸爸**) + Meal (**早饭**) + **喝/吃** + **粥** → **爸爸早饭喝粥。** (or **吃粥**)."],
      },
      {
        id: "three-meals-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "meats-dishes",
        question: "What does **上海小笼包** (*Shànghǎi xiǎolóngbāo*) mean in English?",
        answer: {
          type: "text",
          accept: [
            "shanghai soup dumplings",
            "shanghai steamed soup dumplings",
            "shanghai steamed soup buns",
            "shanghai xiaolongbao",
            "soup dumplings",
            "xiaolongbao",
          ],
          display: "Shanghai soup dumplings (xiaolongbao)",
        },
        hints: [
          "**上海** = Shanghai; **小笼** = small bamboo steamer basket.",
          "**小笼包** are Shanghai's famous steamed **soup dumplings**!",
        ],
        solution: ["**上海小笼包** means **Shanghai soup dumplings**."],
      },
      {
        id: "three-meals-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "drinks-containers",
        question: "Translate into Mandarin (Hanzi or toned Pinyin): **two bowls of soup**.",
        answer: {
          type: "text",
          accept: ["两碗汤", "liǎng wǎn tāng"],
          display: "两碗汤 (liǎng wǎn tāng)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["二碗汤", "èr wǎn tāng"] },
            feedback: "Always use **两** (*liǎng*), never **二**, before the measure word **碗**!",
          },
        ],
        hints: [
          "Use **两** for 2 before a classifier.",
          "'Bowl' is **碗** (*wǎn*) and 'soup' is **汤** (*tāng*).",
        ],
        solution: ["**两** + **碗** + **汤** = **两碗汤** (*liǎng wǎn tāng*)."],
      },
      {
        id: "three-meals-p3-q08",
        kind: "short",
        difficulty: "core",
        guideRef: "hungry-thirsty-full",
        question: "Unscramble into a natural Mandarin sentence:\n**吃饱了 / 谢谢妈妈 / 已经 / 我**",
        answer: {
          type: "text",
          accept: [
            "谢谢妈妈，我已经吃饱了",
            "谢谢妈妈我已经吃饱了",
            "我已经吃饱了，谢谢妈妈",
            "Xièxie māma, wǒ yǐjīng chībǎo le",
          ],
          display: "谢谢妈妈，我已经吃饱了！",
        },
        hints: [
          "Start politely with **谢谢妈妈** ('Thank you, Mum').",
          "Place the adverb **已经** (*yǐjīng*, already) BEFORE **吃饱了**.",
        ],
        solution: ["**谢谢妈妈，我已经吃饱了！** ('Thank you, Mum, I am already full!')"],
      },
      {
        id: "three-meals-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "healthy-balanced-diet",
        question: "Write the two-character Mandarin noun/adjective meaning **healthy / health** (Simplified Hanzi or toned Pinyin).",
        answer: {
          type: "text",
          accept: ["健康", "jiànkāng"],
          display: "健康 (jiànkāng)",
        },
        hints: [
          "It is the first half of **健康饮食** (*healthy diet*).",
          "Pronounced *jiànkāng* (4th tone + 1st tone).",
        ],
        solution: ["'Healthy / health' is **健康** (*jiànkāng*)."],
      },
      {
        id: "three-meals-p3-q10",
        kind: "short",
        difficulty: "challenge",
        guideRef: "drinks-containers",
        question: "Read the supermarket shopping list:\n**三盒牛奶（每盒4元）· 两瓶橙汁（每瓶5元）· 一包大米（18元）**\nWhat is the total cost in **元**? Write a single number.",
        answer: {
          type: "number",
          value: 40,
          display: "40 元",
        },
        traps: [
          {
            spec: { type: "number", value: 27 },
            feedback: "Remember to multiply each unit price (**每盒4元**, **每瓶5元**) by its quantity (**三盒** = 3, **两瓶** = 2)!",
          },
        ],
        hints: [
          "**三盒牛奶** = 3 × 4元; **两瓶橙汁** = 2 × 5元; **一包大米** = 18元.",
          "Add the three subtotals together.",
        ],
        solution: [
          "Milk: 3 × 4 = 12元; orange juice: 2 × 5 = 10元; rice: 18元.",
          "Total = 12 + 10 + 18 = **40** 元.",
        ],
      },
      {
        id: "three-meals-p3-q11",
        kind: "short",
        difficulty: "challenge",
        guideRef: "meats-dishes",
        question: "Read: **「外婆今天晚上做了三道菜：西红柿炒鸡蛋、清蒸鱼和炒青菜，没有做肉菜。」** How many of Grandma's dishes contain **eggs or seafood**? Write a single number.",
        answer: {
          type: "number",
          value: 2,
          display: "2",
        },
        hints: [
          "Check each of the three dishes: (1) **西红柿炒鸡蛋**, (2) **清蒸鱼**, (3) **炒青菜**.",
          "Count which ones have eggs (**鸡蛋**) or fish/seafood (**鱼**).",
        ],
        solution: [
          "**西红柿炒鸡蛋** has eggs (**鸡蛋**) and **清蒸鱼** has fish (**鱼**), while **炒青菜** is vegetables only — so **2** dishes.",
        ],
      },
      {
        id: "three-meals-p3-q12",
        kind: "short",
        difficulty: "challenge",
        guideRef: "healthy-balanced-diet",
        question: "Translate into Mandarin (Hanzi or toned Pinyin): **Eat more vegetables and fruit.**",
        answer: {
          type: "text",
          accept: [
            "多吃蔬菜和水果",
            "多吃蔬菜水果",
            "要多吃蔬菜和水果",
            "应该多吃蔬菜和水果",
            "duō chī shūcài hé shuǐguǒ",
            "duō chī shūcài shuǐguǒ",
          ],
          display: "多吃蔬菜和水果 (duō chī shūcài hé shuǐguǒ)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["吃多蔬菜和水果"] },
            feedback: "Put **多** (*duō*, more) right BEFORE **吃**: **多吃蔬菜和水果**!",
          },
        ],
        hints: [
          "Place **多** directly before **吃**.",
          "'Vegetables and fruit' = **蔬菜和水果** (*shūcài hé shuǐguǒ*).",
        ],
        solution: ["**多** + **吃** + **蔬菜和水果** = **多吃蔬菜和水果**."],
      },
      {
        id: "three-meals-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "drinks-containers",
        marks: 4,
        question:
          "**IGCSE 0547 Roleplay Task — Preparing a Class Picnic (4 marks)**\nYou are helping your Mandarin teacher plan food and drinks for a Year 8 picnic at East Coast Park (**东海岸公园**). Write 4 complete Mandarin sentences explaining:\n1. Two staple foods or snacks we should bring (with quantities and classifiers);\n2. Two healthy drinks we should bring (with quantities and container classifiers);\n3. One drink we should NOT buy too much of, and why;\n4. What cutlery/tableware everyone needs to bring or use.",
        modelAnswer:
          "我们可以带十个三明治和两盘饺子去东海岸公园。饮料方面，我们应该带十瓶水和五盒苹果汁。我们不要买太多可乐，因为可乐太甜了，对身体不好。大家别忘了带筷子和勺子！",
        markScheme: [
          {
            point: "Names two foods/snacks with valid quantities & classifiers (个, 盘, 盒).",
            keywords: ["三明治", "面包", "饺子", "包子", "炒饭", "鸡饭", "水果"],
          },
          {
            point: "Names two drinks with container classifiers (瓶, 盒, 杯).",
            keywords: ["瓶", "盒", "杯", "水", "果汁", "苹果汁", "橙汁", "绿茶", "牛奶"],
          },
          {
            point: "Explains avoiding a sugary drink (可乐 / 奶茶) using 甜 / 糖 / 对身体不好.",
            keywords: ["不要", "少", "可乐", "奶茶", "甜", "糖", "对身体不好"],
          },
          {
            point: "Mentions tableware (筷子 / 刀叉 / 勺子).",
            keywords: ["筷子", "刀叉", "勺子"],
          },
        ],
        commonError:
          "Using **二** instead of **两** before measure words (*二盘饺子* ✗ → **两盘饺子** ✓).",
        hints: [
          "Double-check **两** before **盘 / 瓶 / 盒** whenever the quantity is 2!",
          "Give a clear reason with **因为……太甜了，对身体不好**.",
        ],
      },
      {
        id: "three-meals-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "healthy-balanced-diet",
        marks: 5,
        question:
          "**IGCSE 0547 Blog Post — 80–130 Characters (5 marks)**\nYour cousin **小华** skips breakfast every morning, drinks two cups of bubble tea every afternoon, and eats burgers late at night (**夜宵**). Write a supportive Mandarin message giving him advice:\n- Explain why skipping **早饭** is bad and suggest a quick, nutritious breakfast;\n- Comment on his **奶茶** and **夜宵** habits (**糖太多 / 太油腻**);\n- Recommend healthier lunch/dinner choices (**鱼 / 鸡肉 / 蔬菜 / 汤**) and encourage him with **健康饮食**.",
        modelAnswer:
          "小华：听说你每天早上不吃早饭，这让我很担心，因为不吃早饭上课容易累，对身体不好。你早上可以吃一个鸡蛋和两片面包，再喝一杯热牛奶，很有营养！另外，奶茶里的糖太多了，夜宵吃汉堡包也太油腻了，你应该少喝奶茶、少吃快餐。午饭和晚饭多吃蒸鱼、鸡肉和青菜，喝一碗热汤。希望你注意健康饮食，身体越来越好！",
        markScheme: [
          {
            point: "Addresses skipping breakfast (不吃早饭) and explains negative impact (容易累 / 对身体不好).",
            keywords: ["不吃早饭", "不吃早餐", "累", "对身体不好"],
          },
          {
            point: "Suggests a specific nutritious breakfast with classifiers and 有营养.",
            keywords: ["鸡蛋", "面包", "牛奶", "粥", "包子", "豆浆", "营养"],
          },
          {
            point: "Critiques sugary bubble tea (奶茶 / 糖 / 甜) and greasy late-night fast food (夜宵 / 汉堡包 / 快餐 / 油腻).",
            keywords: ["奶茶", "夜宵", "汉堡", "快餐", "甜", "糖", "油腻"],
          },
          {
            point: "Uses 多吃/多喝 and 少吃/少喝 accurately before verbs.",
            keywords: ["多吃", "多喝", "少吃", "少喝"],
          },
          {
            point: "Recommends healthy dinner dishes/soup (鱼/鸡肉/青菜/喝…汤) and mentions 健康饮食.",
            keywords: ["鱼", "鸡", "菜", "汤", "健康"],
          },
        ],
        commonError:
          "Sounding rude instead of supportive — soften advice with **你应该…**, **你可以…**, and **希望你…**!",
        hints: [
          "Address all three of Xiao Hua's habits (**早饭**, **奶茶**, **夜宵**).",
          "Remember **喝一碗汤** (never *吃汤*) and **多吃 / 少喝** word order.",
        ],
      },
    ],
  },
];
