import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "eating-out-p3",
    title: "Practice Paper 3 · Full Dining Dialogue, Reviews & IGCSE Tasks",
    questions: [
      {
        id: "eating-out-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "entering-seating",
        question: "Write the Mandarin phrase for **please take a seat / please sit down** (Simplified Hanzi or toned Pinyin).",
        answer: {
          type: "text",
          accept: ["请坐", "qǐng zuò"],
          display: "请坐 (qǐng zuò)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["请座"] },
            feedback: "'Sit down' is an action verb, so use bare **坐** (two people **人人** on **土**), NOT **座**!",
          },
        ],
        hints: ["Combine **请** (*qǐng*, please) + **坐** (*zuò*, sit — verb without **广**!)."],
        solution: ["'Please sit down' is **请坐** (*qǐng zuò*)."],
      },
      {
        id: "eating-out-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "ordering-dishes",
        question: "Translate into Mandarin (Hanzi or toned Pinyin): **Bring (I'll have) one glass of iced water.** (Use **来一杯…**).",
        answer: {
          type: "text",
          accept: [
            "来一杯冰水",
            "请来一杯冰水",
            "请给我来一杯冰水",
            "我要一杯冰水",
            "lái yī bēi bīngshuǐ",
            "wǒ yào yī bēi bīngshuǐ",
          ],
          display: "来一杯冰水 (lái yī bēi bīngshuǐ)",
        },
        hints: ["Combine **来一杯** (*lái yī bēi*) + **冰水** (*bīngshuǐ*, iced water)."],
        solution: ["**来一杯冰水** (*lái yī bēi bīngshuǐ*)."],
      },
      {
        id: "eating-out-p3-q03",
        kind: "short",
        difficulty: "warmup",
        guideRef: "five-flavours",
        question: "Write the Mandarin adjective meaning **sweet and sour** (2 characters — Simplified Hanzi or toned Pinyin).",
        answer: {
          type: "text",
          accept: ["酸甜", "suāntián"],
          display: "酸甜 (suāntián)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["甜酸", "tiánsuān"] },
            feedback: "Mandarin reverses the English order: put **酸** (*suān*, sour) BEFORE **甜** (*tián*, sweet) → **酸甜**!",
          },
        ],
        hints: ["Remember Mandarin says 'sour-sweet': **酸** first, **甜** second!"],
        solution: ["'Sweet and sour' in Mandarin is **酸甜** (*suāntián*)."],
      },
      {
        id: "eating-out-p3-q04",
        kind: "short",
        difficulty: "warmup",
        guideRef: "paying-the-bill",
        question: "What does **外卖** (*wàimài*) mean in English?",
        answer: {
          type: "text",
          accept: [
            "food delivery",
            "takeaway",
            "delivery",
            "takeout",
            "takeaway food",
          ],
          display: "food delivery / takeaway",
        },
        hints: ["Used in **点外卖** when ordering food to your home via an app!"],
        solution: ["**外卖** (*wàimài*) means **food delivery / takeaway**."],
      },
      {
        id: "eating-out-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "entering-seating",
        question: "Translate into Mandarin (Hanzi or toned Pinyin): **Excuse me, how many people (in your party)?** (Use polite **几位**).",
        answer: {
          type: "text",
          accept: [
            "请问几位",
            "请问你们有几位",
            "请问有几位",
            "Qǐngwèn jǐ wèi",
            "Qǐngwèn nǐmen yǒu jǐ wèi",
          ],
          display: "请问几位？ (Qǐngwèn jǐ wèi?)",
        },
        hints: [
          "Start politely with **请问** (*qǐngwèn*).",
          "Add **几位** (*jǐ wèi*, how many guests).",
        ],
        solution: ["**请问几位？** (*Qǐngwèn jǐ wèi?*)"],
      },
      {
        id: "eating-out-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "ordering-dishes",
        question: "Translate into Mandarin (Hanzi or toned Pinyin): **Would you like anything else?**",
        answer: {
          type: "text",
          accept: [
            "还要别的吗",
            "您还要别的吗",
            "你们还要别的吗",
            "请问还要别的吗",
            "还需要别的吗",
            "Hái yào bié de ma",
            "Nín hái yào bié de ma",
          ],
          display: "还要别的吗？ (Hái yào bié de ma?)",
        },
        hints: [
          "'Still want' = **还要** (*hái yào*).",
          "'Other things?' = **别的吗？** (*bié de ma?*).",
        ],
        solution: ["**还要别的吗？** (*Hái yào bié de ma?*)"],
      },
      {
        id: "eating-out-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "five-flavours",
        question: "Write the two-character Mandarin adjective meaning **light / mild in flavour** (not oily, heavy or salty; Hanzi or toned Pinyin).",
        answer: {
          type: "text",
          accept: ["清淡", "qīngdàn"],
          display: "清淡 (qīngdàn)",
        },
        hints: [
          "Both characters start with the three-dot water radical **氵**!",
          "Pronounced *qīngdàn* (1st tone + 4th tone).",
        ],
        solution: ["'Light / mild in flavour' is **清淡** (*qīngdàn*)."],
      },
      {
        id: "eating-out-p3-q08",
        kind: "short",
        difficulty: "core",
        guideRef: "paying-the-bill",
        question: "Translate into Mandarin (Hanzi or toned Pinyin): **Can we scan the QR code to order?** (Use **可以**, **扫码**, and **点菜**).",
        answer: {
          type: "text",
          accept: [
            "我们可以扫码点菜吗",
            "请问我们可以扫码点菜吗",
            "可以扫码点菜吗",
            "请问可以扫码点菜吗",
            "Wǒmen kěyǐ sǎomǎ diǎncài ma",
            "Qǐngwèn wǒmen kěyǐ sǎomǎ diǎncài ma",
            "Kěyǐ sǎomǎ diǎncài ma",
          ],
          display: "我们可以扫码点菜吗？ (Wǒmen kěyǐ sǎomǎ diǎncài ma?)",
        },
        hints: [
          "Serial verb order: first **扫码** (scan QR code), then **点菜** (order dishes)!",
          "Wrap with **(我们)可以……吗？**",
        ],
        solution: ["**我们可以扫码点菜吗？** (*Wǒmen kěyǐ sǎomǎ diǎncài ma?*)"],
      },
      {
        id: "eating-out-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "restaurant-review",
        question: "Write the two-character Mandarin verb meaning **to recommend** (Simplified Hanzi or toned Pinyin).",
        answer: {
          type: "text",
          accept: ["推荐", "tuījiàn"],
          display: "推荐 (tuījiàn)",
        },
        hints: [
          "Used in **我向大家推荐这家餐厅** ('I recommend this restaurant to everyone').",
          "Pronounced *tuījiàn* (1st tone + 4th tone).",
        ],
        solution: ["'To recommend' is **推荐** (*tuījiàn*)."],
      },
      {
        id: "eating-out-p3-q10",
        kind: "short",
        difficulty: "challenge",
        guideRef: "paying-the-bill",
        question: "Read the receipt at a Shanghai noodle house:\n**三碗牛肉面（每碗16元）· 两盘炒青菜（每盘12元）· 三瓶酸奶（每瓶6元）**\nWhat is the total bill in **元**? Write a single number.",
        answer: {
          type: "number",
          value: 90,
          display: "90 元",
        },
        traps: [
          {
            spec: { type: "number", value: 34 },
            feedback: "Multiply each item's unit price by its Chinese quantity (**三碗** = 3, **两盘** = 2, **三瓶** = 3)!",
          },
        ],
        hints: [
          "Work out each subtotal: (3 × 16) + (2 × 12) + (3 × 6).",
          "48 + 24 + 18 = ?",
        ],
        solution: [
          "Noodles: 3 × 16 = 48元; greens: 2 × 12 = 24元; yoghurt drinks: 3 × 6 = 18元.",
          "Total = 48 + 24 + 18 = **90** 元.",
        ],
      },
      {
        id: "eating-out-p3-q11",
        kind: "short",
        difficulty: "challenge",
        guideRef: "five-flavours",
        question: "Read the waiter's note for Table 6:\n**「六号桌：四位客人。一碗牛肉面（不要香菜，微辣），一盘西红柿炒鸡蛋（少放糖），一条清蒸鱼，两杯热绿茶。」**\nWhich ingredient did the guest ask to **leave out completely** from the beef noodles? Answer in **English**.",
        answer: {
          type: "text",
          accept: ["coriander", "cilantro", "chinese parsley", "fresh coriander", "fresh cilantro"],
          display: "coriander / cilantro (香菜)",
        },
        hints: [
          "Look inside the brackets right after **一碗牛肉面**.",
          "**微辣** means mildly spicy, while **不要香菜** asks to omit which herb?",
        ],
        solution: [
          "**不要香菜** means 'no **coriander / cilantro**' in the beef noodles.",
        ],
      },
      {
        id: "eating-out-p3-q12",
        kind: "short",
        difficulty: "challenge",
        guideRef: "restaurant-review",
        question: "Translate into Mandarin (Hanzi or toned Pinyin): **The chicken rice here is both cheap and delicious!** (Use **这里的鸡饭** and **又…又…**; put **便宜** first).",
        answer: {
          type: "text",
          accept: [
            "这里的鸡饭又便宜又好吃",
            "Zhèlǐ de jīfàn yòu piányi yòu hǎochī",
          ],
          display: "这里的鸡饭又便宜又好吃！",
        },
        traps: [
          {
            spec: { type: "text", accept: ["这里的鸡饭又便宜又好喝"] },
            feedback: "**鸡饭** is solid food, so use **好吃** (*hǎochī*), not **好喝**!",
          },
        ],
        hints: [
          "Start with **这里的鸡饭** ('the chicken rice here').",
          "Use **又便宜又好吃** (twin adjectives with **又…又…**, no **是**!).",
        ],
        solution: ["**这里的鸡饭** + **又便宜又好吃** → **这里的鸡饭又便宜又好吃！**"],
      },
      {
        id: "eating-out-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "entering-seating",
        marks: 4,
        question:
          "**IGCSE 0547 Roleplay Task — At an Orchard Road Food Court (食阁) (4 marks)**\nYour cousin from Shanghai is visiting Singapore for the first time and you take her to a **小贩中心** or **食阁**. Write 4–5 Mandarin sentences explaining to her:\n1. Where you are taking her to eat lunch today;\n2. Why you have to find a **座位** and **排队** first;\n3. Two local dishes and drinks you want to order (**我要 / 来…**) and how they taste;\n4. How people pay at the stall (**现金 / 扫码**).",
        modelAnswer:
          "今天中午我带你去牛车水的小贩中心吃午饭！因为中午人很多，我们先找一个干净的座位，再去摊位排队点菜。我想给你点一盘海南鸡饭和一杯冰甘蔗汁，鸡饭很香、很好吃，甘蔗汁甜甜的、很好喝！这里付钱很方便，可以用现金，也可以用手机扫码。",
        markScheme: [
          {
            point: "Names a Singapore dining venue (小贩中心 / 食阁) in accurate STPV order.",
            keywords: ["小贩中心", "食阁", "午饭", "午餐"],
          },
          {
            point: "Explains finding a seat (座位 — with 广!) and queueing (排队).",
            keywords: ["座位", "排队"],
          },
          {
            point: "Recommends/orders food and drink with accurate taste words (香, 甜, 好吃, 好喝).",
            keywords: ["鸡饭", "面", "汁", "茶", "香", "甜", "好吃", "好喝"],
          },
          {
            point: "Explains payment options clearly (现金 / 扫码 / 手机支付).",
            keywords: ["现金", "扫码", "手机", "付钱"],
          },
        ],
        commonError:
          "Writing *坐位* instead of **座位**, or forgetting **好喝** for the drink.",
        hints: [
          "Spell **座位** with **广** on top of **座**!",
          "Contrast **鸡饭很好吃** with **果汁很好喝**.",
        ],
      },
      {
        id: "eating-out-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "restaurant-review",
        marks: 5,
        question:
          "**IGCSE 0547 Extended Comparison Essay — 80–130 Characters (5 marks)**\nYour Mandarin class is debating **《在家吃饭好，还是出去吃饭好？》** (*Is it better to eat at home or eat out?*). Write a balanced piece in Mandarin covering:\n- Why you sometimes enjoy **出去吃饭** at a **餐厅** or **小贩中心** (variety, lively atmosphere **热闹**, delicious **特色菜**);\n- Two drawbacks of eating out too often (e.g. queueing **排队**, **贵**, or food being too **油腻 / 太咸**);\n- Your overall opinion and how often your family eats out.",
        modelAnswer:
          "我觉得在家吃饭和出去吃饭各有好处。周末我喜欢跟家人一起出去吃饭，因为餐厅和小贩中心很热闹，还可以吃到北京烤鸭、小笼包等各种美味的特色菜。虽然出去吃饭很方便，但是有时候人太多要排队，而且有些饭馆的菜太油腻、太咸，价格也比较贵。妈妈在家做的饭更清淡、更有营养。所以我们平时在家吃晚饭，每个星期六才出去吃一次！",
        markScheme: [
          {
            point: "Explains advantages of 出去吃饭 (热闹, 方便, 特色菜, 美味/好吃).",
            keywords: ["出去吃饭", "餐厅", "饭馆", "小贩中心", "热闹", "方便", "特色菜"],
          },
          {
            point: "Explains drawbacks of eating out (排队, 贵, 油腻, 咸).",
            keywords: ["排队", "贵", "油腻", "咸"],
          },
          {
            point: "Contrasts with home-cooked food using 清淡 / 健康 / 有营养.",
            keywords: ["在家", "清淡", "健康", "营养"],
          },
          {
            point: "Uses paired connectors and comparisons accurately (虽然…但是…, 而且, 更/比).",
            keywords: ["虽然", "但是", "而且", "因为"],
          },
          {
            point: "States personal conclusion and frequency (平时, 周末, 一个星期一次).",
            keywords: ["觉得", "平时", "周末", "星期", "一次"],
          },
        ],
        commonError:
          "Using **很** inside a **比** comparison (*在家吃饭比出去吃饭很健康* ✗ → **更健康 / 健康得多** ✓).",
        hints: [
          "Give BOTH pros and cons using **虽然……但是……** and **而且**!",
          "Finish with a clear routine sentence showing how your family balances both.",
        ],
      },
    ],
  },
];
