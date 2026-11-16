import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "three-meals-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "meals-staples",
      question: "How do you say 'breakfast, lunch and dinner' in everyday spoken Mandarin?",
      options: [
        "早饭、午饭、晚饭",
        "米饭、炒饭、鸡饭",
        "早上、中午、晚上",
        "面包、面条、包子",
      ],
      answerIndex: 0,
      hints: ["Combine **早** (morning), **午** (noon) and **晚** (evening) with **饭** (*fàn*, meal)."],
      explanation:
        "**早饭、午饭、晚饭** (*zǎofàn, wǔfàn, wǎnfàn*) are the three daily meals. **早上、中午、晚上** are time-of-day nouns ('morning, noon, evening'), not meals.",
    },
    {
      id: "three-meals-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "meats-dishes",
      question: "Write the Mandarin word for **pork** (Simplified Hanzi or toned Pinyin).",
      answer: {
        type: "text",
        accept: ["猪肉", "zhūròu"],
        display: "猪肉 (zhūròu)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["牛肉", "niúròu"] },
          feedback: "**牛肉** (*niúròu*) is beef (**牛** = cow). Use **猪** (*zhū*, pig) + **肉**!",
        },
      ],
      hints: ["Combine **猪** (*zhū*, pig) + **肉** (*ròu*, meat)."],
      solution: ["Pig (**猪**, *zhū*) + meat (**肉**, *ròu*) = **猪肉** (*zhūròu*)."],
    },
    {
      id: "three-meals-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "drinks-containers",
      question: "Translate into Mandarin (Hanzi or toned Pinyin): **a glass of milk**.",
      answer: {
        type: "text",
        accept: ["一杯牛奶", "yī bēi niúnǎi", "yì bēi niúnǎi"],
        display: "一杯牛奶 (yī bēi niúnǎi)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["一个牛奶", "yī gè niúnǎi"] },
          feedback: "Liquids in a glass or cup take the container classifier **杯** (*bēi*), not **个**!",
        },
      ],
      hints: ["Use **一** + **杯** (*bēi*, cup/glass) + **牛奶** (*niúnǎi*, milk)."],
      solution: ["'One glass of milk' = **一杯牛奶** (*yī bēi niúnǎi*)."],
    },
    {
      id: "three-meals-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "hungry-thirsty-full",
      question: "Which sentence correctly says *'I am very thirsty'* in Mandarin?",
      options: ["我是很渴。", "我很喝。", "我很渴。", "我有渴。"],
      answerIndex: 2,
      hints: ["Never use **是** before adjectives, and choose the character with the water radical **氵**!"],
      explanation:
        "**我很渴。** (*Wǒ hěn kě.*) uses **很** before the stative adjective **渴** (water radical **氵** = thirsty). *我是很渴* misuses **是**, and **喝** means 'to drink'.",
    },
    {
      id: "three-meals-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "meals-staples",
      question: "Translate into Mandarin (Hanzi or toned Pinyin): **two bowls of noodles**.",
      answer: {
        type: "text",
        accept: ["两碗面条", "两碗面", "liǎng wǎn miàntiáo", "liǎng wǎn miàn"],
        display: "两碗面条 (liǎng wǎn miàntiáo)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["二碗面条", "二碗面", "èr wǎn miàntiáo"] },
          feedback: "Watch out! Before a measure word (**碗**), '2' MUST be **两** (*liǎng*), never **二**!",
        },
      ],
      hints: [
        "Remember the **二 vs 两** rule before measure words!",
        "'Bowl' is **碗** (*wǎn*), and 'noodles' is **面条** (*miàntiáo*).",
      ],
      solution: [
        "Use **两** (*liǎng*) for 2 before a classifier + **碗** (*wǎn*, bowl) + **面条** (*miàntiáo*): **两碗面条**.",
      ],
    },
    {
      id: "three-meals-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "meats-dishes",
      question: "Which dish name literally translates as *'stir-fried tomato and chicken eggs'*?",
      options: [
        "北京烤鸭",
        "海南鸡饭",
        "上海小笼包",
        "西红柿炒鸡蛋",
      ],
      answerIndex: 3,
      hints: [
        "**西红柿** = tomato, **鸡蛋** = chicken egg.",
        "Look for the stir-fry verb **炒** (*chǎo*) in the middle!",
      ],
      explanation:
        "**西红柿炒鸡蛋** (*xīhóngshì chǎo jīdàn*) = tomato (**西红柿**) + stir-fry (**炒**) + chicken eggs (**鸡蛋**).",
    },
    {
      id: "three-meals-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "drinks-containers",
      question: "Fill in the missing verb (1 character in Hanzi or toned Pinyin): **晚饭妈妈做了一碗鱼汤，弟弟 ____ 了两碗汤。**",
      answer: {
        type: "text",
        accept: ["喝", "hē"],
        display: "喝 (hē)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["吃", "chī"] },
          feedback: "English says 'eat soup', but Mandarin ALWAYS uses **喝** (*hē*, drink) with **汤**!",
        },
      ],
      hints: [
        "What verb MUST go with **汤** (*tāng*, soup) in Mandarin?",
        "Make sure you pick the character with the mouth radical **口**!",
      ],
      solution: ["In Mandarin you always **喝汤** (*hē tāng*), so the missing verb is **喝** (*hē*)."],
    },
    {
      id: "three-meals-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "hungry-thirsty-full",
      question: "How do you say **a pair of chopsticks** in Mandarin (Hanzi or toned Pinyin)?",
      answer: {
        type: "text",
        accept: ["一双筷子", "yī shuāng kuàizi", "yì shuāng kuàizi"],
        display: "一双筷子 (yī shuāng kuàizi)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["一个筷子", "两个筷子"] },
          feedback: "Chopsticks come as a matched pair, so use the pair classifier **双** (*shuāng*)!",
        },
      ],
      hints: [
        "Which classifier is used for pairs (shoes, socks, chopsticks)?",
        "Combine **一** + **双** (*shuāng*) + **筷子** (*kuàizi*).",
      ],
      solution: ["Pair classifier **双** (*shuāng*) + **筷子** (*kuàizi*) = **一双筷子**."],
    },
    {
      id: "three-meals-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "healthy-balanced-diet",
      question: "Why is *我们应该吃多蔬菜* ungrammatical in standard Mandarin?",
      options: [
        "Because 蔬菜 can only pair with the verb 喝",
        "Because 多 and 少 must stand BEFORE the verb in advice phrases: 多吃蔬菜",
        "Because 应该 must always go at the very end of the sentence",
        "Because 蔬菜 requires 是 right before it",
      ],
      answerIndex: 1,
      hints: [
        "Compare *吃多蔬菜* with **多吃蔬菜** and **少喝可乐**.",
        "Where does **多** sit relative to **吃**?",
      ],
      explanation:
        "In Mandarin advice frames, **多** (*duō*, more) and **少** (*shǎo*, less) go directly BEFORE the verb: **多吃蔬菜** (*duō chī shūcài*), **多喝水** (*duō hē shuǐ*).",
    },
    {
      id: "three-meals-quiz-q10",
      kind: "short",
      difficulty: "challenge",
      guideRef: "healthy-balanced-diet",
      question: "Translate into Mandarin (Hanzi or toned Pinyin): **Drinking plenty of water is good for your health.**",
      answer: {
        type: "text",
        accept: [
          "多喝水对身体好",
          "多喝水对身体很好",
          "多喝水对你身体好",
          "多喝水对你的身体好",
          "Duō hē shuǐ duì shēntǐ hǎo",
          "Duō hē shuǐ duì shēntǐ hěn hǎo",
          "Duō hē shuǐ duì nǐ de shēntǐ hǎo",
        ],
        display: "多喝水对身体好。 (Duō hē shuǐ duì shēntǐ hǎo.)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["喝多水对身体好", "多喝水给身体好", "多喝水是对身体好"] },
          feedback: "Put **多** before **喝** (**多喝水**) and use **对身体好** (no **给** and no **是**!).",
        },
      ],
      hints: [
        "'Drink plenty of water' = **多喝水** (*duō hē shuǐ*).",
        "'Is good for your health' = **对身体好** (*duì shēntǐ hǎo*).",
      ],
      solution: [
        "Combine **多喝水** ('drinking plenty of water') + **对身体好** ('is good for one's health'): **多喝水对身体好。**",
      ],
    },
  ],

  papers: [
    {
      id: "three-meals-p1",
      title: "Practice Paper 1 · Daily Meals, Containers & Appetite",
      questions: [
        {
          id: "three-meals-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "meals-staples",
          question: "Write the Mandarin word for **cooked rice** (Simplified Hanzi or toned Pinyin).",
          answer: {
            type: "text",
            accept: ["米饭", "mǐfàn"],
            display: "米饭 (mǐfàn)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["炒饭", "chǎofàn"] },
              feedback: "**炒饭** is *fried* rice; plain cooked rice is **米饭** (*mǐfàn*).",
            },
          ],
          hints: ["Combine **米** (*mǐ*, rice grain) + **饭** (*fàn*, cooked rice/meal)."],
          solution: ["Cooked white rice is **米饭** (*mǐfàn*)."],
        },
        {
          id: "three-meals-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "meals-staples",
          question: "What does **三明治** (*sānmíngzhì*) mean in English?",
          answer: {
            type: "text",
            accept: ["sandwich", "a sandwich", "sandwiches"],
            display: "sandwich",
          },
          hints: ["Read *sān-míng-zhì* out loud — it's an English loanword for a lunchtime bread item!"],
          solution: ["**三明治** (*sānmíngzhì*) is the phonetic loanword for **sandwich**."],
        },
        {
          id: "three-meals-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "meats-dishes",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **one fish** (whole fish).",
          answer: {
            type: "text",
            accept: ["一条鱼", "yī tiáo yú", "yì tiáo yú"],
            display: "一条鱼 (yī tiáo yú)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["一个鱼", "一只鱼"] },
              feedback: "Fish are long and flexible, so Mandarin always uses **条** (*tiáo*): **一条鱼**!",
            },
          ],
          hints: ["Use the long/flexible measure word **条** (*tiáo*) between **一** and **鱼**."],
          solution: ["**一** + **条** (*tiáo*) + **鱼** (*yú*) = **一条鱼**."],
        },
        {
          id: "three-meals-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "drinks-containers",
          question: "Write the Mandarin word for **green tea** in Hanzi OR accurate tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["绿茶", "lǜchá", "lǜ chá"],
            display: "绿茶 (lǜchá)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["红茶", "hóngchá"] },
              feedback: "**红茶** (*hóngchá*) is black tea ('red tea'); green tea is **绿茶** (*lǜchá*).",
            },
          ],
          hints: ["Combine **绿** (*lǜ*, green — watch the umlaut **ü**!) + **茶** (*chá*, tea)."],
          solution: ["'Green tea' is **绿茶** (*lǜchá*)."],
        },
        {
          id: "three-meals-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "drinks-containers",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **two plates of chicken rice**.",
          answer: {
            type: "text",
            accept: [
              "两盘鸡饭",
              "两盘海南鸡饭",
              "liǎng pán jīfàn",
              "liǎng pán Hǎinán jīfàn",
            ],
            display: "两盘鸡饭 (liǎng pán jīfàn)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["二盘鸡饭", "èr pán jīfàn"] },
              feedback: "Use **两** (*liǎng*), never **二**, before the measure word **盘**!",
            },
          ],
          hints: [
            "Remember '2' before a classifier is **两** (*liǎng*).",
            "'Plate' is **盘** (*pán*), and 'chicken rice' is **鸡饭** (*jīfàn*).",
          ],
          solution: ["**两** (2) + **盘** (plate) + **鸡饭** (chicken rice) = **两盘鸡饭**."],
        },
        {
          id: "three-meals-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "meals-staples",
          question: "Unscramble these words into a natural Mandarin sentence:\n**吃早饭 / 七点 / 每天早上 / 我**",
          answer: {
            type: "text",
            accept: [
              "我每天早上七点吃早饭",
              "每天早上七点我吃早饭",
              "Wǒ měitiān zǎoshang qī diǎn chī zǎofàn",
              "Měitiān zǎoshang qī diǎn wǒ chī zǎofàn",
            ],
            display: "我每天早上七点吃早饭。",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我吃早饭每天早上七点"] },
              feedback: "Time expressions (**每天早上七点**) MUST come BEFORE the verb **吃早饭** in Mandarin!",
            },
          ],
          hints: [
            "Follow **Subject + Big-to-Small Time + Verb-Object**.",
            "Put **每天早上** (every morning) before **七点** (7 o'clock), and both before **吃早饭**.",
          ],
          solution: [
            "Subject (**我**) + Time big-to-small (**每天早上七点**) + Action (**吃早饭**) → **我每天早上七点吃早饭。**",
          ],
        },
        {
          id: "three-meals-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "hungry-thirsty-full",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **I am hungry!** (expressing a new feeling now).",
          answer: {
            type: "text",
            accept: ["我饿了", "我很饿", "Wǒ è le", "Wǒ hěn è"],
            display: "我饿了！ (Wǒ è le!)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我是饿", "我是饿了", "我有饿"] },
              feedback: "Never put **是** or **有** before the adjective **饿**! Say **我饿了** or **我很饿**.",
            },
          ],
          hints: [
            "Use **我** + **饿** (*è*, hungry) + sentence-final **了** (*le*) for a change of state.",
            "Do NOT use **是**!",
          ],
          solution: ["**我饿了！** (*Wǒ è le!*) expresses 'I am hungry (now)!' naturally."],
        },
        {
          id: "three-meals-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "meats-dishes",
          question: "Read the canteen receipt:\n**一盘蛋炒饭：5元 · 一碗牛肉面：8元 · 两瓶苹果汁：每瓶3元**\nHow many **元** (RMB) did the lunch cost in total? Write a single number.",
          answer: {
            type: "number",
            value: 19,
            display: "19 元",
          },
          traps: [
            {
              spec: { type: "number", value: 16 },
              feedback: "Look closely at **两瓶苹果汁：每瓶3元** — there are TWO bottles at 3元 each (2 × 3 = 6元)!",
            },
          ],
          hints: [
            "Check the quantity on the juice: **两瓶** = 2 bottles, and **每瓶3元** = 3元 per bottle.",
            "Add 5 + 8 + (2 × 3).",
          ],
          solution: [
            "Egg fried rice = 5元; beef noodles = 8元; two bottles of apple juice = 2 × 3 = 6元.",
            "Total = 5 + 8 + 6 = **19** 元.",
          ],
        },
        {
          id: "three-meals-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "hungry-thirsty-full",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **My older sister uses chopsticks.**",
          answer: {
            type: "text",
            accept: [
              "姐姐用筷子",
              "我的姐姐用筷子",
              "我姐姐用筷子",
              "姐姐拿筷子",
              "Jiějie yòng kuàizi",
              "Wǒ de jiějie yòng kuàizi",
              "Wǒ jiějie yòng kuàizi",
            ],
            display: "姐姐用筷子。 (Jiějie yòng kuàizi.)",
          },
          hints: [
            "'Older sister' = **姐姐** (*jiějie*).",
            "'To use' = **用** (*yòng*) + 'chopsticks' = **筷子** (*kuàizi*).",
          ],
          solution: ["Combine **姐姐** + **用** + **筷子** → **姐姐用筷子。**"],
        },
        {
          id: "three-meals-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "healthy-balanced-diet",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **Eat less fast food.**",
          answer: {
            type: "text",
            accept: [
              "少吃快餐",
              "要少吃快餐",
              "应该少吃快餐",
              "shǎo chī kuàicān",
              "yào shǎo chī kuàicān",
              "yīnggāi shǎo chī kuàicān",
            ],
            display: "少吃快餐 (shǎo chī kuàicān)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["吃少快餐", "chī shǎo kuàicān"] },
              feedback: "Put **少** (*shǎo*, less) BEFORE the verb **吃**: **少吃快餐**!",
            },
          ],
          hints: [
            "Remember the **多/少 + Verb + Object** rule.",
            "'Fast food' is **快餐** (*kuàicān*).",
          ],
          solution: ["Place **少** right before **吃** + **快餐**: **少吃快餐**."],
        },
        {
          id: "three-meals-p1-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "drinks-containers",
          question: "Read the dialogue:\n— **爸爸，你想喝咖啡还是绿茶？**\n— **我今天不想喝咖啡，给我来一杯热绿茶吧。**\nWhat drink does Dad choose? Answer in **English**.",
          answer: {
            type: "text",
            accept: [
              "hot green tea",
              "green tea",
              "a cup of hot green tea",
              "a cup of green tea",
            ],
            display: "hot green tea (一杯热绿茶)",
          },
          hints: [
            "Check what Dad says he does NOT want (**不想喝咖啡**) vs what he asks for (**给我来一杯热绿茶吧**).",
            "**热** = hot, **绿茶** = green tea.",
          ],
          solution: [
            "Dad says he doesn't want coffee today and asks for **一杯热绿茶** — **hot green tea**.",
          ],
        },
        {
          id: "three-meals-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "healthy-balanced-diet",
          question: "Unscramble into a cohesive Mandarin sentence:\n**很有营养 / 牛奶和鸡蛋 / 对身体好 / 所以**",
          answer: {
            type: "text",
            accept: [
              "牛奶和鸡蛋很有营养，所以对身体好",
              "牛奶和鸡蛋很有营养所以对身体好",
              "Niúnǎi hé jīdàn hěn yǒu yíngyǎng, suǒyǐ duì shēntǐ hǎo",
            ],
            display: "牛奶和鸡蛋很有营养，所以对身体好。",
          },
          hints: [
            "Start with the subject **牛奶和鸡蛋** ('Milk and eggs').",
            "State the cause (**很有营养**, 'are very nutritious') before **所以** ('therefore/so') + result (**对身体好**).",
          ],
          solution: [
            "Subject (**牛奶和鸡蛋**) + Cause (**很有营养**) + **所以** + Result (**对身体好**) → **牛奶和鸡蛋很有营养，所以对身体好。**",
          ],
        },
        {
          id: "three-meals-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "meals-staples",
          marks: 5,
          question:
            "**IGCSE 0547 Roleplay Preparation (5 marks)**\nYour Taiwanese pen-pal asks about your school-day meals in Singapore. Answer all five prompts in complete Mandarin sentences:\n1. What time you eat breakfast (**早饭**).\n2. Two things you eat or drink for breakfast.\n3. Where you eat lunch (**午饭**) on school days.\n4. Your favourite lunch dish (with an accurate measure word).\n5. Who cooks dinner (**晚饭**) in your family.",
          modelAnswer:
            "我每天早上六点半吃早饭。我早饭吃烤面包和一个鸡蛋，还喝一杯牛奶。我星期一到星期五在学校食堂吃午饭。我最喜欢吃一盘海南鸡饭。每天晚上妈妈做晚饭。",
          markScheme: [
            {
              point: "States breakfast time before 吃早饭 (e.g. 六点半吃早饭 / 七点吃早饭).",
              keywords: ["点", "吃早饭", "吃早餐"],
            },
            {
              point: "Names at least two breakfast foods/drinks with accurate verbs (吃/喝).",
              keywords: ["面包", "鸡蛋", "牛奶", "粥", "包子", "豆浆", "果汁"],
            },
            {
              point: "Uses STPV order for lunch location before verb (e.g. 在学校吃午饭).",
              keywords: ["在学校", "食堂", "吃午饭", "吃午餐"],
            },
            {
              point: "States favourite lunch dish with a suitable classifier (一盘/一碗/一个).",
              keywords: ["最喜欢", "一盘", "一碗", "鸡饭", "面条", "炒饭", "饺子"],
            },
            {
              point: "Identifies who cooks dinner (e.g. 妈妈/爸爸做晚饭).",
              keywords: ["妈妈", "爸爸", "奶奶", "做晚饭", "做饭"],
            },
          ],
          commonError:
            "Putting location or time at the end (*我吃午饭在学校* ✗) or using *有早饭* instead of **吃早饭**.",
          hints: [
            "Keep **Time** and **Place** (**在学校食堂**) BEFORE **吃早饭 / 吃午饭**!",
            "Include a container classifier like **一盘鸡饭** or **一碗牛肉面** on point 4.",
          ],
        },
        {
          id: "three-meals-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "healthy-balanced-diet",
          marks: 5,
          question:
            "**IGCSE 0547 Directed Writing — 80–130 Characters (5 marks)**\nWrite an article for your school newsletter titled **《我的一日三餐与健康饮食》** (*My Three Meals & Healthy Diet*). Include:\n- What you typically eat and drink across **早饭**, **午饭** and **晚饭**;\n- One unhealthy food or drink you try to avoid and **why** (**太甜 / 太油腻**);\n- Two pieces of healthy-eating advice for classmates using **多吃 / 多喝 / 少吃 / 少喝** and **对身体好**.",
          modelAnswer:
            "我每天都很注意健康饮食。早上七点，我吃两个鸡蛋和面包，喝一杯热牛奶。中午我在学校吃一盘鸡饭和青菜。晚上妈妈做蒸鱼、米饭和西红柿鸡蛋汤。虽然炸鸡和可乐很好吃、很好喝，但是炸鸡太油腻，可乐太甜了，所以我很少吃快餐。我觉得中学生应该多吃蔬菜和水果，多喝水，少喝奶茶，因为营养均衡对身体很好！",
          markScheme: [
            {
              point: "Describes foods and drinks across 早饭, 午饭 and 晚饭 accurately.",
              keywords: ["早", "午", "晚", "吃", "喝"],
            },
            {
              point: "Uses accurate food/drink classifiers (一杯, 一碗, 一盘, 一条, 两个).",
              keywords: ["一杯", "一碗", "一盘", "一条", "两个", "一瓶"],
            },
            {
              point: "Explains why an unhealthy food/drink is avoided using 油腻, 甜 or 快餐.",
              keywords: ["油腻", "甜", "快餐", "糖", "可乐", "炸鸡", "奶茶"],
            },
            {
              point: "Uses 多吃/多喝 and 少吃/少喝 with 多/少 placed before the verb.",
              keywords: ["多吃", "多喝", "少吃", "少喝"],
            },
            {
              point: "Concludes with health justification (对身体好 / 有营养 / 营养均衡) and connectors (虽然…但是 / 因为…所以).",
              keywords: ["对身体好", "对身体很好", "营养", "虽然", "因为"],
            },
          ],
          commonError:
            "Writing *吃多水果* instead of **多吃水果**, or forgetting to use **喝** with **汤**.",
          hints: [
            "Structure into 3 crisp paragraphs: (1) Three daily meals, (2) What you limit & why (**虽然…但是…**), (3) Advice for classmates (**应该多吃…，少喝…，对身体好**).",
            "Double-check that **汤** pairs with **喝**, not **吃**!",
          ],
        },
      ],
    },
    {
      id: "three-meals-p2",
      title: "Practice Paper 2 · Cooking Methods, Radicals & Nutrition",
      questions: [
        {
          id: "three-meals-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "meals-staples",
          question: "Write the Mandarin word for **steamed stuffed bun** (Simplified Hanzi or toned Pinyin).",
          answer: {
            type: "text",
            accept: ["包子", "bāozi"],
            display: "包子 (bāozi)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["馒头", "mántou"] },
              feedback: "**馒头** is an *unstuffed* plain steamed bun; a stuffed bun is **包子** (*bāozi*).",
            },
          ],
          hints: ["Two characters: **包** (*bāo*, wrap) + neutral-tone **子** (*zi*)."],
          solution: ["A steamed stuffed bun is **包子** (*bāozi*)."],
        },
        {
          id: "three-meals-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "meats-dishes",
          question: "What does **烤鸭** (*kǎoyā*) mean in English?",
          answer: {
            type: "text",
            accept: ["roast duck", "roasted duck", "peking duck"],
            display: "roast duck",
          },
          hints: ["**烤** (*kǎo*, fire radical **火**) = roast; **鸭** (*yā*, bird radical **鸟**) = duck."],
          solution: ["**烤鸭** (*kǎoyā*) means **roast duck** (famous in **北京烤鸭**)."],
        },
        {
          id: "three-meals-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "drinks-containers",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **a carton of milk**.",
          answer: {
            type: "text",
            accept: ["一盒牛奶", "yī hé niúnǎi", "yì hé niúnǎi"],
            display: "一盒牛奶 (yī hé niúnǎi)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["一杯牛奶", "一瓶牛奶"] },
              feedback: "**杯** is a cup/glass and **瓶** is a bottle; for a **carton/box**, use **盒** (*hé*)!",
            },
          ],
          hints: ["Use the box/carton measure word **盒** (*hé*)."],
          solution: ["'One carton of milk' = **一盒牛奶** (*yī hé niúnǎi*)."],
        },
        {
          id: "three-meals-p2-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "hungry-thirsty-full",
          question: "Write the Mandarin word for **knife and fork** (Simplified Hanzi or toned Pinyin).",
          answer: {
            type: "text",
            accept: ["刀叉", "dāochā"],
            display: "刀叉 (dāochā)",
          },
          hints: ["Combine **刀** (*dāo*, knife) + **叉** (*chā*, fork)."],
          solution: ["'Knife and fork' in Mandarin is **刀叉** (*dāochā*)."],
        },
        {
          id: "three-meals-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "meals-staples",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **Mum cooks dinner in the evening.**",
          answer: {
            type: "text",
            accept: [
              "妈妈晚上做晚饭",
              "晚上妈妈做晚饭",
              "妈妈晚上做晚餐",
              "晚上妈妈做晚餐",
              "Māma wǎnshang zuò wǎnfàn",
              "Wǎnshang māma zuò wǎnfàn",
              "Māma wǎnshang zuò wǎncān",
              "Wǎnshang māma zuò wǎncān",
            ],
            display: "妈妈晚上做晚饭。 (Māma wǎnshang zuò wǎnfàn.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["妈妈做晚饭晚上", "妈妈做晚饭在晚上"] },
              feedback: "Time (**晚上**) must come BEFORE the verb **做晚饭**, and time words never take **在**!",
            },
          ],
          hints: [
            "Place **晚上** (*wǎnshang*, in the evening) BEFORE **做晚饭** (*zuò wǎnfàn*, cook dinner).",
            "Do NOT put **在** before **晚上**!",
          ],
          solution: ["Subject (**妈妈**) + Time (**晚上**) + Action (**做晚饭**) → **妈妈晚上做晚饭。**"],
        },
        {
          id: "three-meals-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "meats-dishes",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **My younger brother likes eating prawns and beef.**",
          answer: {
            type: "text",
            accept: [
              "弟弟喜欢吃虾和牛肉",
              "我弟弟喜欢吃虾和牛肉",
              "我的弟弟喜欢吃虾和牛肉",
              "Dìdi xǐhuan chī xiā hé niúròu",
              "Wǒ dìdi xǐhuan chī xiā hé niúròu",
            ],
            display: "弟弟喜欢吃虾和牛肉。 (Dìdi xǐhuan chī xiā hé niúròu.)",
          },
          hints: [
            "'Younger brother' = **弟弟**; 'likes eating' = **喜欢吃**.",
            "'Prawns and beef' = **虾和牛肉** (*xiā hé niúròu*).",
          ],
          solution: ["**弟弟喜欢吃虾和牛肉。** (*Dìdi xǐhuan chī xiā hé niúròu.*)"],
        },
        {
          id: "three-meals-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "drinks-containers",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **three cups of bubble tea (milk tea)**.",
          answer: {
            type: "text",
            accept: [
              "三杯奶茶",
              "三杯珍珠奶茶",
              "sān bēi nǎichá",
              "sān bēi zhēnzhū nǎichá",
            ],
            display: "三杯奶茶 (sān bēi nǎichá)",
          },
          hints: [
            "'Three cups' = **三杯** (*sān bēi*).",
            "'Milk tea / bubble tea' = **奶茶** (*nǎichá*).",
          ],
          solution: ["**三** + **杯** + **奶茶** = **三杯奶茶** (*sān bēi nǎichá*)."],
        },
        {
          id: "three-meals-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "hungry-thirsty-full",
          question: "Fill in the blank with the right character (**喝** or **渴**): **天气太热了，我非常 ____，想买一瓶冰水。**",
          answer: {
            type: "text",
            accept: ["渴", "kě"],
            display: "渴 (kě)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["喝", "hē"] },
              feedback: "After **非常** ('extremely') we need the adjective **渴** (*kě*, thirsty — water radical **氵**), not the verb **喝**!",
            },
          ],
          hints: [
            "**非常 ____** ('extremely ____') needs an adjective meaning 'thirsty'.",
            "Pick the character with three drops of water (**氵**) on the left!",
          ],
          solution: ["'Extremely thirsty' = **非常渴** (*fēicháng kě*, water radical **氵**)."],
        },
        {
          id: "three-meals-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "healthy-balanced-diet",
          question: "What does the adjective **油腻** (*yóunì*) mean in English?",
          answer: {
            type: "text",
            accept: ["greasy", "oily", "fatty", "greasy / oily"],
            display: "greasy / oily",
          },
          hints: [
            "**油** (*yóu*) means cooking oil.",
            "Think of the English adjective describing deep-fried fast food like **炸鸡**!",
          ],
          solution: ["**油腻** (*yóunì*) means **greasy** or **oily**."],
        },
        {
          id: "three-meals-p2-q10",
          kind: "short",
          difficulty: "challenge",
          guideRef: "meals-staples",
          question: "Read the weekly school lunch rota:\n**星期一：牛肉面 · 星期二：蛋炒饭 · 星期三：海南鸡饭 · 星期四：饺子 · 星期五：三明治**\nOn which day of the week are **dumplings** served? Write the Mandarin day (e.g. `星期一`) or toned Pinyin.",
          answer: {
            type: "text",
            accept: ["星期四", "xīngqīsì", "周四", "zhōusì"],
            display: "星期四 (xīngqīsì)",
          },
          hints: [
            "Recall the Mandarin word for dumplings: **饺子** (*jiǎozi*).",
            "Find **饺子** in the schedule and read the day right before the colon!",
          ],
          solution: ["**饺子** (dumplings) appears next to **星期四** (Thursday)."],
        },
        {
          id: "three-meals-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "drinks-containers",
          question: "At a Singapore kopitiam, **一杯热咖啡** costs **\$1.80** and **一盘烤面包** costs **\$2.40**. Mum orders **两杯热咖啡** and **两盘烤面包** and pays with a **\$10** note. How much change (in dollars) does she receive? Write a number.",
          answer: {
            type: "number",
            value: 1.6,
            display: "$1.60",
          },
          traps: [
            {
              spec: { type: "number", value: 8.4 },
              feedback: "\$8.40 is the total spent — remember to subtract from the **\$10** note to find the change!",
            },
            {
              spec: { type: "number", value: 5.8 },
              feedback: "Careful: Mum ordered **两杯** (2 cups) and **两盘** (2 plates), not 1 of each!",
            },
          ],
          hints: [
            "Calculate the total first: (2 × 1.80) + (2 × 2.40).",
            "Subtract that total from 10 to get the change!",
          ],
          solution: [
            "2 coffees = 2 × \$1.80 = \$3.60; 2 plates of toast = 2 × \$2.40 = \$4.80.",
            "Total = \$3.60 + \$4.80 = \$8.40; change from \$10 = 10 − 8.40 = **1.6** (\$1.60).",
          ],
        },
        {
          id: "three-meals-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "healthy-balanced-diet",
          question: "Translate into Mandarin (Hanzi or toned Pinyin): **Skipping breakfast is bad for your health.** (Hint: 'skipping breakfast' = **不吃早饭**).",
          answer: {
            type: "text",
            accept: [
              "不吃早饭对身体不好",
              "不吃早餐对身体不好",
              "Bù chī zǎofàn duì shēntǐ bù hǎo",
              "Bú chī zǎofàn duì shēntǐ bù hǎo",
              "Bù chī zǎocān duì shēntǐ bù hǎo",
              "Bú chī zǎocān duì shēntǐ bù hǎo",
            ],
            display: "不吃早饭对身体不好。 (Bù chī zǎofàn duì shēntǐ bù hǎo.)",
          },
          hints: [
            "Start with the topic phrase **不吃早饭** (*bù chī zǎofàn*, not eating breakfast).",
            "Add 'is bad for your health': **对身体不好** (*duì shēntǐ bù hǎo*).",
          ],
          solution: ["Combine **不吃早饭** + **对身体不好** → **不吃早饭对身体不好。**"],
        },
        {
          id: "three-meals-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "hungry-thirsty-full",
          marks: 4,
          question:
            "**IGCSE 0547 Short Message Task (4 marks)**\nYou have just finished football training after school and text your mum on WhatsApp. Write 4–5 sentences in Mandarin covering:\n1. That you have finished football and are **very hungry and thirsty** right now;\n2. What drink you bought (with a container measure word);\n3. What dish you hope to eat for dinner tonight;\n4. What time you will get home to eat dinner together.",
          modelAnswer:
            "妈妈，我刚踢完足球，现在又饿又渴！我在学校买了一瓶冰水。今天晚饭我想吃西红柿炒鸡蛋和一碗米饭。我六点半回家跟你们一起吃晚饭。",
          markScheme: [
            {
              point: "Expresses being hungry (饿) and thirsty (渴) accurately without 是.",
              keywords: ["饿", "渴"],
            },
            {
              point: "Mentions buying/drinking a beverage with a valid container classifier (一瓶/一杯/一盒).",
              keywords: ["一瓶", "一杯", "一盒", "水", "果汁", "牛奶", "绿茶"],
            },
            {
              point: "Names a desired dinner dish or staple food (晚饭想吃…).",
              keywords: ["晚饭", "想吃", "米饭", "面条", "鱼", "鸡", "牛肉", "饺子", "鸡蛋"],
            },
            {
              point: "States home/dinner time clearly using STPV word order (e.g. 六点半回家).",
              keywords: ["点", "回家", "一起"],
            },
          ],
          commonError:
            "Mixing up **渴** (thirsty) with **喝** (drink), or writing *我是饿和渴* instead of **我很饿，也很渴** / **又饿又渴**.",
          hints: [
            "Try the neat idiom **又饿又渴** (*yòu è yòu kě*, 'both hungry and thirsty')!",
            "Put your time (**六点半**) BEFORE **回家**.",
          ],
        },
        {
          id: "three-meals-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "meats-dishes",
          marks: 5,
          question:
            "**IGCSE 0547 Email Task — 80–130 Characters (5 marks)**\nYour friend in London wants to know what foods your family eats at home in Singapore compared with eating at school. Write an email in Mandarin covering:\n- What everyone in your family likes eating and drinking (mention at least **two meats/seafoods** and **two drinks**);\n- A dish someone in your family knows how to cook (**会做…**);\n- How your family uses tableware (**筷子 / 刀叉 / 勺子**);\n- Why you prefer home-cooked dinner to fast food (**快餐**).",
          modelAnswer:
            "亲爱的大卫：你好！我们全家人喜欢的食物不太一样。爸爸喜欢吃牛肉面、喝热咖啡；妈妈喜欢吃蒸鱼和虾，每天下午喝一杯绿茶。我最喜欢吃海南鸡饭。周末哥哥还会做西红柿炒鸡蛋！我们在家吃饭的时候都用筷子和勺子。虽然快餐很方便，但是太油腻了；妈妈做的晚饭不但好吃，而且很有营养，对身体好！祝好，小明",
          markScheme: [
            {
              point: "Mentions at least two meats/seafoods (牛肉/鸡肉/猪肉/羊肉/鱼/虾/烤鸭).",
              keywords: ["牛肉", "猪肉", "鸡", "羊肉", "鱼", "虾", "海鲜", "烤鸭"],
            },
            {
              point: "Mentions at least two drinks with accurate verbs/classifiers (喝…咖啡/绿茶/牛奶/果汁).",
              keywords: ["咖啡", "茶", "牛奶", "果汁", "豆浆", "可乐"],
            },
            {
              point: "Describes a dish a family member can cook using 会做.",
              keywords: ["会做", "做饭", "炒", "蒸", "煮", "烤"],
            },
            {
              point: "Mentions tableware naturally (用筷子 / 刀叉 / 勺子).",
              keywords: ["筷子", "刀叉", "勺子"],
            },
            {
              point: "Compares home cooking with 快餐 using connectors (虽然…但是 / 不但…而且) and health vocabulary.",
              keywords: ["快餐", "油腻", "营养", "对身体好", "虽然", "不但"],
            },
          ],
          commonError:
            "Using **和** to connect two whole clauses (*爸爸喜欢牛肉，和妈妈喜欢鱼* ✗ — drop **和** between clauses!).",
          hints: [
            "Remember **和** joins nouns (**蒸鱼和虾**), NEVER two full sentences!",
            "Use **不但好吃，而且很有营养** to lift your grammar mark.",
          ],
        },
      ],
    },
  ],

  challenge: [
    {
      id: "three-meals-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "meats-dishes",
      question:
        "**Radical Detective**: Even if you have never seen the characters **炖** (*dùn*) and **煎** (*jiān*) on a Chinese menu before, look closely at their radicals (**火** on the left of **炖**, **灬** at the bottom of **煎**). What can you deduce with certainty?",
      options: [
        "Both characters are types of cold fruit juice",
        "Both characters are heat-based cooking methods (stewing and pan-frying)",
        "Both characters are bamboo tableware items",
        "Both characters are formal words for breakfast",
      ],
      answerIndex: 1,
      hints: [
        "Compare **炖** with **炒 / 烤** (**火** on the left), and compare **煎** with **煮 / 蒸** (**灬** at the bottom).",
        "What semantic field do **火** and **灬** unlock on a restaurant menu?",
      ],
      explanation:
        "Just like **炒/烤** (**火**) and **煮/蒸** (**灬**), **炖** (*dùn*, slow-stew) and **煎** (*jiān*, pan-fry) carry fire radicals, proving both are heat-based cooking verbs!",
    },
    {
      id: "three-meals-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "drinks-containers",
      question:
        "**Menu Logic Puzzle**: Four friends — **小明**, **美美**, **大卫**, and **丽丽** — each order ONE different drink from **绿茶**, **咖啡**, **苹果汁**, and **牛奶**:\n1. **小明** and **丽丽** never drink anything with caffeine (**茶** or **咖啡**).\n2. **美美** dislikes **咖啡**.\n3. **小明** is allergic to dairy (**牛奶**).\nWhich drink did **丽丽** order? Answer in Simplified Hanzi or toned Pinyin.",
      answer: {
        type: "text",
        accept: ["牛奶", "niúnǎi"],
        display: "牛奶 (niúnǎi)",
      },
      hints: [
        "Clue 1 restricts **小明** and **丽丽** to the two caffeine-free drinks: **苹果汁** and **牛奶**.",
        "Clue 3 says **小明** cannot drink **牛奶**, so **小明** must have **苹果汁** — what does that leave for **丽丽**?",
      ],
      solution: [
        "From Clue 1, 小明 and 丽丽 share {苹果汁, 牛奶}.",
        "From Clue 3, 小明 cannot drink 牛奶, so 小明 = **苹果汁**, which forces **丽丽 = 牛奶** (and 美美 = 绿茶, 大卫 = 咖啡).",
      ],
    },
    {
      id: "three-meals-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "meals-staples",
      question:
        "**Pattern Builder**: In Mandarin, `Fruit + 汁 = Fruit Juice` (**苹果 → 苹果汁**) and `Ingredient A + 炒 + Ingredient B = Stir-fry` (**西红柿 + 炒 + 鸡蛋 → 西红柿炒鸡蛋**). Using this exact logic, how do you write **stir-fried beef and green vegetables** using **牛肉** (*niúròu*) and **青菜** (*qīngcài*)? (Put **牛肉** first; Hanzi or toned Pinyin.)",
      answer: {
        type: "text",
        accept: [
          "牛肉炒青菜",
          "niúròu chǎo qīngcài",
        ],
        display: "牛肉炒青菜 (niúròu chǎo qīngcài)",
      },
      hints: [
        "Follow the exact Dish Formula: **Ingredient A + 炒 + Ingredient B**.",
        "Place **牛肉** first, **炒** (*chǎo*) in the middle, and **青菜** last.",
      ],
      solution: [
        "Substitute A = **牛肉** and B = **青菜** into `A + 炒 + B`: **牛肉炒青菜** (*niúròu chǎo qīngcài*).",
      ],
    },
    {
      id: "three-meals-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "hungry-thirsty-full",
      question:
        "**Tone Sandhi Ear-Check**: In natural spoken Mandarin, when two 3rd-tone syllables meet (`3 + 3`), the first shifts to 2nd tone (`2 + 3`). In which appetite/meal phrase below does **很** (*hěn*, 3rd tone) shift to *hén* (`2nd tone`) in speech?",
      options: [
        "很饿 (hěn è)",
        "很渴 (hěn kě)",
        "很甜 (hěn tián)",
        "很香 (hěn xiāng)",
      ],
      answerIndex: 1,
      hints: [
        "Check the tone of each adjective after **很** (*hěn*, tone 3): **饿** (*è*), **渴** (*kě*), **甜** (*tián*), **香** (*xiāng*).",
        "Only ONE of those four adjectives is 3rd tone!",
      ],
      explanation:
        "**渴** (*kě*) is 3rd tone, so **很渴** (`3 + 3`) undergoes 3rd-tone sandhi and is pronounced *hén kě* in speech (though still written *hěn kě* in Pinyin!). **饿** is 4th tone, **甜** is 2nd tone, and **香** is 1st tone.",
    },
    {
      id: "three-meals-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "drinks-containers",
      question:
        "**Hawker Tray Calculation**: At Maxwell Food Centre in Singapore, **一盘海南鸡饭** costs **\$5**, **一碗鱼汤** costs **\$4**, and **一杯冰绿茶** costs **\$2**. A group of classmates orders **三盘海南鸡饭**, **两碗鱼汤**, and **四杯冰绿茶**. What is the total bill in SGD? Write a number.",
      answer: {
        type: "number",
        value: 31,
        display: "$31",
      },
      hints: [
        "Decode the Chinese quantities: **三盘** = 3 plates, **两碗** = 2 bowls, **四杯** = 4 cups.",
        "Compute (3 × 5) + (2 × 4) + (4 × 2).",
      ],
      solution: [
        "3 plates of chicken rice = 3 × \$5 = \$15.",
        "2 bowls of fish soup = 2 × \$4 = \$8; 4 cups of iced green tea = 4 × \$2 = \$8.",
        "Total = 15 + 8 + 8 = **31** (\$31).",
      ],
    },
    {
      id: "three-meals-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "meals-staples",
      question:
        "**Error-Spotting Challenge**: Read the four sentences below very carefully. Three have subtle grammar flaws; ONE is 100% idiomatic Mandarin. Which one?",
      options: [
        "我昨天早上没吃了早饭，所以上课的时候我是很饿。",
        "爸爸每天早上在七点半有两片烤面包和一杯咖啡。",
        "姐姐今天午饭吃了一碗牛肉面，还喝了一碗西红柿鸡蛋汤。",
        "弟弟很喜欢猪肉包子和他每天早饭吃二个包子。",
      ],
      answerIndex: 2,
      hints: [
        "Check negation in the past (*没 + Verb* NEVER takes **了**!), check **是** before adjectives, check **在** before clock times, check **和** between clauses, and check **二 vs 两**!",
        "Verify whether **吃了一碗牛肉面** and **喝了一碗……汤** use the exact right verbs and classifiers.",
      ],
      explanation:
        "**姐姐今天午饭吃了一碗牛肉面，还喝了一碗西红柿鸡蛋汤。** is flawless! The others fail on *没吃了* + *是很饿*, *在七点半* + *有* for eating, and joining clauses with *和* + *二个*.",
    },
    {
      id: "three-meals-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "healthy-balanced-diet",
      question:
        "**Proverb Completion**: Complete the famous 12-character Chinese healthy-eating saying:\n**早饭要吃好，午饭要吃饱，晚饭要吃 ____。**\nWrite the missing single character in Hanzi or toned Pinyin.",
      answer: {
        type: "text",
        accept: ["少", "shǎo"],
        display: "少 (shǎo)",
      },
      hints: [
        "Morning: eat well (**好**); Noon: eat until full (**饱**); Evening: eat a small/light amount!",
        "What opposite of **多** (*duō*) completes the rhyme *hǎo — bǎo — ____*?",
      ],
      solution: [
        "The proverb is **早饭要吃好，午饭要吃饱，晚饭要吃少** (*shǎo*, 'little') — notice how *hǎo*, *bǎo* and *shǎo* all rhyme in `-ǎo`!",
      ],
    },
    {
      id: "three-meals-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "healthy-balanced-diet",
      question:
        "**Multi-Clause Translation**: Translate into Mandarin (Hanzi or toned Pinyin):\n**We should drink more water and drink less cola.**",
      answer: {
        type: "text",
        accept: [
          "我们应该多喝水，少喝可乐",
          "我们应该多喝水少喝可乐",
          "我们要多喝水，少喝可乐",
          "我们应该多喝水，也应该少喝可乐",
          "Wǒmen yīnggāi duō hē shuǐ, shǎo hē kělè",
          "Wǒmen yào duō hē shuǐ, shǎo hē kělè",
        ],
        display: "我们应该多喝水，少喝可乐。",
      },
      traps: [
        {
          spec: { type: "text", accept: ["我们应该喝多水，喝少可乐"] },
          feedback: "Remember to place **多** and **少** BEFORE **喝**: **多喝水，少喝可乐**!",
        },
      ],
      hints: [
        "'We should' = **我们应该** (*wǒmen yīnggāi*).",
        "Put **多** and **少** right before **喝**: **多喝水，少喝可乐**.",
      ],
      solution: [
        "Combine **我们应该** + **多喝水** + **少喝可乐** → **我们应该多喝水，少喝可乐。**",
      ],
    },
  ],
};
