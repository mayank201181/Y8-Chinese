import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "seasons-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "four-seasons",
      question: "Write **'autumn'** in Mandarin (2 characters):",
      answer: {
        type: "text",
        accept: ["秋天", "秋季", "qiūtiān", "qiū tiān", "qiūjì"],
        display: "秋天 (qiūtiān)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["春天", "chūntiān"] },
          feedback: "春天 means spring! 'Autumn' combines grain 禾 + fire 火 → 秋天 (qiūtiān).",
        },
      ],
      hints: ["Starts with **秋** (grain **禾** + fire **火**) + **天**."],
      solution: ["'Autumn' in Mandarin is **秋天** (*qiūtiān*)."],
    },
    {
      id: "seasons-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "four-seasons",
      question: "Which 4-character idiom (**成语**) means **'having four clearly distinct seasons'**?",
      options: ["四季分明", "四季如夏", "春暖花开", "秋高气爽"],
      answerIndex: 0,
      hints: ["Look for **四季** (four seasons) + **分明** (clearly separated)."],
      explanation:
        "**四季分明** (*sìjì fēnmíng*) means having four distinct seasons (like Beijing), whereas **四季如夏** describes tropical Singapore.",
    },
    {
      id: "seasons-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "singapore-vs-beijing",
      question: "Translate into Mandarin: **'Singapore has no winter.'**",
      answer: {
        type: "text",
        accept: ["新加坡没有冬天", "Xīnjiāpō méiyǒu dōngtiān"],
        display: "新加坡没有冬天。 (Xīnjiāpō méiyǒu dōngtiān.)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["新加坡不有冬天"] },
          feedback: "Never negate 有 with 不! 'Does not have / has no' is ALWAYS 没有 (méiyǒu)!",
        },
      ],
      hints: [
        "Negate **有** (*have*) with **没有** (*méiyǒu*).",
        "'Winter' is **冬天** (*dōngtiān*).",
      ],
      solution: ["**新加坡** + **没有** + **冬天** → **新加坡没有冬天。**"],
    },
    {
      id: "seasons-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "clothing-chuan-dai",
      question: "Choose the **ONLY** phrase that pairs the right verb (**穿** vs **戴**) AND the right classifier:",
      options: [
        "穿一顶帽子",
        "穿一双牛仔裤",
        "戴一条围巾",
        "戴一件毛衣",
      ],
      answerIndex: 2,
      hints: [
        "Hats and scarves are accessories (**戴**), whilst jeans and jumpers are clothes (**穿**).",
        "Scarves and jeans are long items (**条**), not **双**!",
      ],
      explanation:
        "**戴一条围巾** (*wear a scarf*) gets both the accessory verb **戴** and the long-item classifier **条** right! Hats need **戴一顶帽子**, jeans need **穿一条牛仔裤**, and jumpers need **穿一件毛衣**.",
    },
    {
      id: "seasons-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "clothing-chuan-dai",
      question: "Write **'one pair of trainers / sports shoes'** in Mandarin (5 characters: 一___运动鞋):",
      answer: {
        type: "text",
        accept: ["一双运动鞋", "yì shuāng yùndòngxié", "yīshuāng yùndòngxié"],
        display: "一双运动鞋 (yì shuāng yùndòngxié)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["一条运动鞋", "一件运动鞋"] },
          feedback: "Trainers come in two separate matching shoes, so use the pair classifier 双 (shuāng): 一双运动鞋!",
        },
      ],
      hints: [
        "Shoes are two separate matching pieces.",
        "Use the pair measure word **双** (*shuāng*).",
      ],
      solution: ["'One pair of trainers' = **一双运动鞋** (*yì shuāng yùndòngxié*)."],
    },
    {
      id: "seasons-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "clothing-chuan-dai",
      question: "Write **'wear a hat'** in Mandarin using the accessory verb and crown classifier (5 characters: **___一___帽子**):",
      answer: {
        type: "text",
        accept: ["戴一顶帽子", "dài yì dǐng màozi", "dài yīdǐng màozi"],
        display: "戴一顶帽子 (dài yì dǐng màozi)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["穿一顶帽子"] },
          feedback: "Hats are accessories perched on your head — use 戴 (dài), never 穿!",
        },
        {
          spec: { type: "text", accept: ["带一顶帽子"] },
          feedback: "Watch the character! 带 means carry in your hand/bag; wearing an accessory on your head uses 戴!",
        },
      ],
      hints: [
        "Accessory verb: **戴** (*dài*).",
        "Classifier for hats sitting on the crown of your head: **顶** (*dǐng*).",
      ],
      solution: ["**戴** + **一顶** + **帽子** → **戴一顶帽子** (*dài yì dǐng màozi*)."],
    },
    {
      id: "seasons-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "singapore-vs-beijing",
      question: "How do you say **'Singapore's January weather is the same as July's'**?",
      options: [
        "新加坡一月的天气比七月一样。",
        "新加坡一月的天气跟七月一样。",
        "新加坡一月一样七月的天气。",
        "新加坡一月的天气是跟七月比。",
      ],
      answerIndex: 1,
      hints: [
        "Similarity uses **A + 跟 + B + 一样**.",
        "Never combine **比** with **一样**!",
      ],
      explanation:
        "**新加坡一月的天气跟七月一样。** uses **A 跟 B 一样** cleanly. **比** is only for unequal comparisons ('more/less than'), never for **一样**.",
    },
    {
      id: "seasons-quiz-q08",
      kind: "short",
      difficulty: "warmup",
      guideRef: "seasonal-activities",
      question: "Write **'to ski'** in Mandarin (2 characters):",
      answer: {
        type: "text",
        accept: ["滑雪", "huá xuě", "huáxuě"],
        display: "滑雪 (huá xuě)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["滑冰", "huá bīng"] },
          feedback: "滑冰 means 'to ice-skate' (on ice 冰)! 'To ski' glides on snow (雪) → 滑雪!",
        },
      ],
      hints: ["Combine **滑** (*huá*, glide) + **雪** (*xuě*, snow)."],
      solution: ["'To ski' is **滑雪** (*huá xuě*)."],
    },
    {
      id: "seasons-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "seasonal-activities",
      question: "Which sentence follows clean Mandarin **STPV** word order for *'In summer I often go to the beach to swim'*?",
      options: [
        "我常常去游泳在海边夏天。",
        "夏天我常常去海边游泳。",
        "常常我夏天游泳去海边。",
        "我去海边常常夏天游泳。",
      ],
      answerIndex: 1,
      hints: [
        "Put Season (**夏天**) and Subject (**我**) at the start.",
        "Follow with **常常** + **去海边** (go to the beach) + **游泳** (swim)!",
      ],
      explanation:
        "**夏天我常常去海边游泳。** puts Season + Subject + Frequency Adverb (**常常**) + Destination + Action in crisp chronological Mandarin order!",
    },
    {
      id: "seasons-quiz-q10",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "describing-favourite-season",
      question: "Complete the paired concession sentence: **虽然新加坡一年四季都很热，___我还是很喜欢住在这里。**",
      options: ["所以", "因为", "而且", "但是"],
      answerIndex: 3,
      hints: [
        "**虽然** (*suīrán*, although) ALWAYS demands its 'but' partner at the start of the second clause!",
        "Look for **但是** (*dànshì*).",
      ],
      explanation:
        "**虽然…，但是…** (*although…, yet/but…*) is Mandarin's mandatory concession pair. **所以** pairs with **因为**, and **而且** pairs with **不但**.",
    },
  ],

  papers: [
    {
      id: "seasons-p1",
      title: "Seasons Practice Paper 1 — Four Seasons, Climates & Wardrobe Classifiers",
      questions: [
        {
          id: "seasons-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "four-seasons",
          question: "Write **'spring'** in Mandarin (2 characters):",
          answer: {
            type: "text",
            accept: ["春天", "春季", "chūntiān", "chūn tiān", "chūnjì"],
            display: "春天 (chūntiān)",
          },
          hints: ["Starts with **春** (sun **日** at the bottom) + **天**."],
          solution: ["'Spring' is **春天** (*chūntiān*)."],
        },
        {
          id: "seasons-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "four-seasons",
          question: "Write **'winter'** in Mandarin (2 characters):",
          answer: {
            type: "text",
            accept: ["冬天", "冬季", "dōngtiān", "dōng tiān", "dōngjì"],
            display: "冬天 (dōngtiān)",
          },
          hints: ["Starts with **冬** (two ice dots **冫** at the bottom) + **天**."],
          solution: ["'Winter' is **冬天** (*dōngtiān*)."],
        },
        {
          id: "seasons-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "four-seasons",
          question: "Translate into Mandarin: **'I like summer best.'**",
          answer: {
            type: "text",
            accept: [
              "我最喜欢夏天",
              "我最喜欢的季节是夏天",
              "Wǒ zuì xǐhuan xiàtiān",
            ],
            display: "我最喜欢夏天。 (Wǒ zuì xǐhuan xiàtiān.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我的最喜欢是夏天"] },
              feedback: "Use 最喜欢 as a verb directly before 夏天: 我最喜欢夏天!",
            },
          ],
          hints: [
            "Subject: **我**.",
            "'Like best' = **最喜欢**, followed by **夏天**.",
          ],
          solution: ["**我最喜欢夏天。** (*Wǒ zuì xǐhuan xiàtiān.*)."],
        },
        {
          id: "seasons-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "four-seasons",
          question: "Translate into Mandarin using **不…也不…**: **'neither cold nor hot'** (5 characters):",
          answer: {
            type: "text",
            accept: [
              "不冷也不热",
              "不热也不冷",
              "bù lěng yě bú rè",
              "bù lěng yě bù rè",
            ],
            display: "不冷也不热 (bù lěng yě bú rè)",
          },
          hints: [
            "Frame: **不 + Adjective 1 + 也不 + Adjective 2**.",
            "Combine **冷** (cold) and **热** (hot).",
          ],
          solution: ["**不冷也不热** (*bù lěng yě bú rè*, neither cold nor hot)."],
        },
        {
          id: "seasons-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "singapore-vs-beijing",
          question: "Unscramble into a natural Mandarin sentence: **很热 / 四季 / 新加坡 / 都 / 一年**",
          answer: {
            type: "text",
            accept: [
              "新加坡一年四季都很热",
              "一年四季新加坡都很热",
              "Xīnjiāpō yìnián sìjì dōu hěn rè",
              "Xīnjiāpō yīnián sìjì dōu hěn rè",
            ],
            display: "新加坡一年四季都很热。 (Xīnjiāpō yìnián sìjì dōu hěn rè.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["新加坡都一年四季很热"] },
              feedback: "Place 都 AFTER '一年四季' (all four seasons) and right before 很热!",
            },
          ],
          hints: [
            "Start with **新加坡** + **一年四季** (*all year round*).",
            "Put **都** (*all*) right before **很热**!",
          ],
          solution: ["**新加坡一年四季都很热。** (*Xīnjiāpō yìnián sìjì dōu hěn rè.*)."],
        },
        {
          id: "seasons-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "singapore-vs-beijing",
          question: "Translate into Mandarin: **'Singapore's climate is different from Beijing's.'** (Use **跟…不一样**.)",
          answer: {
            type: "text",
            accept: [
              "新加坡的气候跟北京不一样",
              "新加坡的气候和北京不一样",
              "新加坡的气候跟北京的不一样",
              "Xīnjiāpō de qìhòu gēn Běijīng bù yíyàng",
              "Xīnjiāpō de qìhòu gēn Běijīng bù yīyàng",
            ],
            display: "新加坡的气候跟北京不一样。 (Xīnjiāpō de qìhòu gēn Běijīng bù yíyàng.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["新加坡的气候比北京不一样"] },
              feedback: "Use 跟 (or 和), NEVER 比, with 一样 / 不一样!",
            },
          ],
          hints: [
            "'Singapore's climate' = **新加坡的气候**.",
            "Frame: **A + 跟 + B + 不一样**.",
          ],
          solution: ["**新加坡的气候跟北京不一样。**"],
        },
        {
          id: "seasons-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-chuan-dai",
          question: "Write **'wear a jumper / woollen sweater'** in Mandarin (5 characters: **穿一___毛衣**):",
          answer: {
            type: "text",
            accept: ["穿一件毛衣", "chuān yí jiàn máoyī", "chuān yījiàn máoyī"],
            display: "穿一件毛衣 (chuān yí jiàn máoyī)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["戴一件毛衣"] },
              feedback: "Jumpers (毛衣) are core upper-body garments — use 穿 (chuān), not 戴!",
            },
          ],
          hints: [
            "Upper-body garments take the verb **穿** (*chuān*).",
            "Their measure word is **件** (*jiàn*).",
          ],
          solution: ["**穿一件毛衣** (*chuān yí jiàn máoyī*)."],
        },
        {
          id: "seasons-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-chuan-dai",
          question: "Write **'a pair of jeans'** in Mandarin (5 characters: 一___牛仔裤):",
          answer: {
            type: "text",
            accept: ["一条牛仔裤", "yì tiáo niúzǎikù", "yītiáo niúzǎikù"],
            display: "一条牛仔裤 (yì tiáo niúzǎikù)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["一双牛仔裤"] },
              feedback: "Trap alert! Jeans are ONE connected garment, so Mandarin uses 条 (tiáo), NEVER 双!",
            },
          ],
          hints: [
            "Don't be tricked by English 'a pair of jeans'!",
            "Use the long-garment classifier **条** (*tiáo*).",
          ],
          solution: ["**一条牛仔裤** (*yì tiáo niúzǎikù*)."],
        },
        {
          id: "seasons-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-chuan-dai",
          question: "Write **'wear a pair of gloves'** in Mandarin (5 characters: ___一___手套):",
          answer: {
            type: "text",
            accept: [
              "戴一双手套",
              "戴一副手套",
              "dài yì shuāng shǒutào",
              "dài yī shuāng shǒutào",
              "dài yí fù shǒutào",
              "dài yī fù shǒutào",
            ],
            display: "戴一双手套 (dài yì shuāng shǒutào)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["穿一双手套"] },
              feedback: "Gloves (手套) count as hand accessories in Mandarin — use 戴 (dài), not 穿!",
            },
          ],
          hints: [
            "Gloves are an accessory → verb **戴** (*dài*).",
            "Two separate gloves → classifier **双** (*shuāng*, or **副**).",
          ],
          solution: ["**戴一双手套** (*dài yì shuāng shǒutào*)."],
        },
        {
          id: "seasons-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "seasonal-activities",
          question: "Write **'go hiking / climb hills'** in Mandarin (3 characters: 去______):",
          answer: {
            type: "text",
            accept: ["去爬山", "qù pá shān", "qù páshān"],
            display: "去爬山 (qù pá shān)",
          },
          hints: [
            "**去** (go) + **爬** (*pá*, climb) + **山** (*shān*, mountain/hill).",
            "Classic autumn outdoor activity!",
          ],
          solution: ["'Go hiking' is **去爬山** (*qù pá shān*)."],
        },
        {
          id: "seasons-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-chuan-dai",
          question: "Read Meimei's shopping receipt from Orchard Road:\n> **我今天去乌节路买了两件T恤衫、一条裙子、两双袜子和一顶帽子。**\nHow many **total clothing/accessory items** (counting each pair of socks **双** as 1 item on the receipt, i.e. 2 + 1 + 2 + 1) did Meimei buy? (Type a number.)",
          answer: {
            type: "number",
            value: 6,
            display: "6",
          },
          hints: [
            "Add up each quantity: **两件** (2) + **一条** (1) + **两双** (2) + **一顶** (1).",
            "Calculate 2 + 1 + 2 + 1!",
          ],
          solution: [
            "2 T-shirts (**两件T恤衫**) + 1 skirt (**一条裙子**) + 2 pairs of socks (**两双袜子**) + 1 hat (**一顶帽子**) = **6**.",
          ],
        },
        {
          id: "seasons-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "describing-favourite-season",
          question: "Translate into Mandarin using **虽然…，但是…**: **'Although winter is very cold, I like skiing.'**",
          answer: {
            type: "text",
            accept: [
              "虽然冬天很冷，但是我喜欢滑雪",
              "虽然冬天很冷，可是我喜欢滑雪",
              "虽然冬天很冷，但是我很喜欢滑雪",
              "虽然冬天很冷，可是我很喜欢滑雪",
              "冬天虽然很冷，但是我喜欢滑雪",
              "冬天虽然很冷，可是我喜欢滑雪",
              "Suīrán dōngtiān hěn lěng, dànshì wǒ xǐhuan huá xuě",
            ],
            display: "虽然冬天很冷，但是我喜欢滑雪。 (Suīrán dōngtiān hěn lěng, dànshì wǒ xǐhuan huá xuě.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["虽然冬天很冷，我喜欢滑雪"] },
              feedback: "In Mandarin, 虽然 ('although') MUST be partnered by 但是 or 可是 ('but') in the second clause!",
            },
          ],
          hints: [
            "Clause 1: **虽然冬天很冷，** (link **冷** with **很**, not **是**!).",
            "Clause 2: **但是我喜欢滑雪。**",
          ],
          solution: [
            "Concession clause: **虽然冬天很冷，**",
            "Main clause with mandatory partner **但是**: **但是我喜欢滑雪。**",
          ],
        },
        {
          id: "seasons-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "clothing-chuan-dai",
          marks: 5,
          question:
            "**IGCSE 0547 Holiday Packing Message (约50–70字):**\nYour pen-pal from Shanghai is visiting Singapore for the first time next month and asks what clothes to pack! Write a helpful message in Simplified Chinese covering ALL FIVE points:\n1. Describe Singapore's year-round climate (**一年四季都很热 / 潮湿**).\n2. Mention afternoon rain and advise packing an umbrella (**带一把雨伞**).\n3. Recommend everyday outdoor clothes using **穿** + accurate classifiers (**件 / 条 / 双**).\n4. Recommend one accessory using **戴** (e.g. **太阳镜 / 帽子**).\n5. Warn about chilly indoor air-conditioning (**空调**) and suggest packing **一件外套**!",
          hints: [
            "Separate **穿** (T恤衫, 短裤, 凉鞋/运动鞋) cleanly from **戴** (一顶帽子 / 一副太阳镜) and **带** (一把雨伞 / 一件外套).",
            "Check every measure word: **件** (tops/jackets), **条** (shorts/trousers), **双** (shoes), **顶** (hat), **副** (sunglasses), **把** (umbrella).",
          ],
          modelAnswer:
            "欢迎你下个月来新加坡！新加坡没有冬天，一年四季都很热、很潮湿，下午常常下大雨，所以你的行李箱里一定要带一把雨伞。你在外面每天可以穿一件T恤衫、一条短裤和一双运动鞋，也可以戴一顶帽子和一副太阳镜。不过新加坡地铁和商场里的空调太冷了，最好再带一件薄外套！",
          markScheme: [
            {
              point: "Describes Singapore's tropical climate accurately (一年四季都很热 / 四季如夏 / 潮湿).",
              keywords: ["新加坡", "一年四季", "四季", "热", "潮湿"],
            },
            {
              point: "Mentions rain and advises packing an umbrella using 带 + 一把雨伞.",
              keywords: ["下雨", "下大雨", "带", "一把雨伞", "雨伞"],
            },
            {
              point: "Recommends clothes with 穿 and accurate classifiers (件 / 条 / 双).",
              keywords: ["穿", "件", "条", "双", "短裤", "运动鞋"],
            },
            {
              point: "Recommends at least one accessory using 戴 (帽子 / 太阳镜).",
              keywords: ["戴", "帽子", "太阳镜", "顶", "副"],
            },
            {
              point: "Explains indoor air-con cold (空调) and advises bringing a jacket (一件外套).",
              keywords: ["空调", "冷", "外套"],
            },
          ],
          commonError:
            "Writing *穿一顶帽子* instead of **戴一顶帽子**, or *一双短裤* instead of **一条短裤**.",
        },
        {
          id: "seasons-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "describing-favourite-season",
          marks: 6,
          question:
            "**IGCSE 0547 Extended Essay (90–130 characters):**\nWrite an article titled **《我最喜欢的季节》** (*My Favourite Season*). Include:\n- A comparison between Singapore's climate and a four-season country/city (**北京 / 日本 / 英国**)\n- Which season is your favourite and at least two reasons why\n- What clothes and accessories (**穿** + **戴** + colours + classifiers) you wear in that season\n- What seasonal activities you do or plan to do (**打算…**)",
          hints: [
            "Follow the 4-step blueprint: Singapore's **四季如夏** → contrast with **四季分明** using **跟…不一样** or **比** → **我最喜欢的季节是…，因为…** → outfits (**穿…戴…**) & activities!",
            "Drop in an idiom like **春暖花开** or **秋高气爽** and pair **虽然…但是…** for top language marks.",
          ],
          modelAnswer:
            "我住在新加坡。新加坡一年四季如夏，跟北京四季分明的气候很不一样。虽然新加坡没有秋天，但是我最喜欢的季节是秋天！因为秋天不冷也不热，秋高气爽，比夏天舒服得多。在秋天，我可以穿一件黄色的毛衣、一条蓝色的牛仔裤和一双白色的运动鞋，还可以戴一条围巾。今年十月放假的时候，我们全家打算去北京爬山、看美丽的红叶！",
          markScheme: [
            {
              point: "Contrasts Singapore's climate with a four-season place using 不一样 or 四季分明 / 四季如夏.",
              keywords: ["新加坡", "不一样", "四季分明", "四季如夏", "气候"],
            },
            {
              point: "Clearly states favourite season (最喜欢) with logical weather/feeling reasons.",
              keywords: ["最喜欢", "因为", "春天", "夏天", "秋天", "冬天"],
            },
            {
              point: "Includes an accurate 比 comparison without 很.",
              keywords: ["比", "得多", "一点儿", "舒服", "凉快", "冷"],
            },
            {
              point: "Uses 穿 with colours and accurate classifiers (件 / 条 / 双).",
              keywords: ["穿", "件", "条", "双", "色"],
            },
            {
              point: "Uses 戴 accurately for at least one accessory (帽子 / 围巾 / 手套 / 太阳镜).",
              keywords: ["戴", "帽子", "围巾", "手套", "太阳镜", "眼镜"],
            },
            {
              point: "Describes seasonal activities and/or holiday plans (打算 / 爬山 / 滑雪 / 看花 / 游泳).",
              keywords: ["打算", "爬山", "看红叶", "滑雪", "堆雪人", "看花", "游泳"],
            },
          ],
          commonError:
            "Writing *我的最喜欢季节* (missing **的** after **最喜欢**) or forgetting **但是** after **虽然**.",
        },
      ],
    },

    {
      id: "seasons-p2",
      title: "Seasons Practice Paper 2 — Outfit Details, Idioms & Suitcase Packing",
      questions: [
        {
          id: "seasons-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "four-seasons",
          question: "Write **'summer'** in Mandarin (2 characters):",
          answer: {
            type: "text",
            accept: ["夏天", "夏季", "xiàtiān", "xià tiān", "xiàjì"],
            display: "夏天 (xiàtiān)",
          },
          hints: ["Starts with **夏** (*xià*) + **天**."],
          solution: ["'Summer' is **夏天** (*xiàtiān*)."],
        },
        {
          id: "seasons-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "clothing-chuan-dai",
          question: "Write **'school uniform'** in Mandarin (2 characters):",
          answer: {
            type: "text",
            accept: ["校服", "xiàofú", "xiào fú"],
            display: "校服 (xiàofú)",
          },
          hints: ["Combine **校** (*xiào*, school) + **服** (*fú*, clothing)."],
          solution: ["'School uniform' is **校服** (*xiàofú*)."],
        },
        {
          id: "seasons-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "four-seasons",
          question: "Write the 4-character spring idiom meaning **'spring is warm and flowers bloom'**:",
          answer: {
            type: "text",
            accept: ["春暖花开", "chūn nuǎn huā kāi", "chūnnuǎnhuākāi"],
            display: "春暖花开 (chūn nuǎn huā kāi)",
          },
          hints: [
            "First two characters: **春暖** (*spring warm*).",
            "Last two characters: **花开** (*flowers open/bloom*).",
          ],
          solution: ["**春暖花开** (*chūn nuǎn huā kāi*)."],
        },
        {
          id: "seasons-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-chuan-dai",
          question: "Translate into Mandarin: **'a red skirt'** (7 characters, using **条** and **红色的**):",
          answer: {
            type: "text",
            accept: [
              "一条红色的裙子",
              "一条红裙子",
              "yì tiáo hóngsè de qúnzi",
              "yī tiáo hóngsè de qúnzi",
            ],
            display: "一条红色的裙子 (yì tiáo hóngsè de qúnzi)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["一件红色的裙子"] },
              feedback: "Skirts (裙子) use the lower-body / long classifier 条 (tiáo), not 件!",
            },
          ],
          hints: [
            "Skirts take the measure word **条** (*tiáo*).",
            "Order: **一条 + 红色的 + 裙子**.",
          ],
          solution: ["**一条红色的裙子** (*yì tiáo hóngsè de qúnzi*)."],
        },
        {
          id: "seasons-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-chuan-dai",
          question: "Write **'wear a pair of sunglasses'** in Mandarin (6 characters: 戴一___太阳镜):",
          answer: {
            type: "text",
            accept: ["戴一副太阳镜", "dài yí fù tàiyángjìng", "dài yīfù tàiyángjìng"],
            display: "戴一副太阳镜 (dài yí fù tàiyángjìng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["穿一副太阳镜"] },
              feedback: "Sunglasses are face accessories — use 戴 (dài), never 穿!",
            },
          ],
          hints: [
            "Accessory verb: **戴** (*dài*).",
            "Classifier for glasses & sunglasses: **副** (*fù*).",
          ],
          solution: ["**戴一副太阳镜** (*dài yí fù tàiyángjìng*)."],
        },
        {
          id: "seasons-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-chuan-dai",
          question: "Write **'puffer jacket / down coat'** in Mandarin (3 characters):",
          answer: {
            type: "text",
            accept: ["羽绒服", "yǔróngfú", "yǔ róng fú"],
            display: "羽绒服 (yǔróngfú)",
          },
          hints: [
            "**羽** (*yǔ*, feather) + **绒** (*róng*, down fluff) + **服** (*fú*, garment).",
            "Essential coat for Harbin winters!",
          ],
          solution: ["'Puffer jacket / down coat' is **羽绒服** (*yǔróngfú*)."],
        },
        {
          id: "seasons-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "singapore-vs-beijing",
          question: "Translate into Mandarin: **'Beijing's climate has four distinct seasons.'** (Use **四季分明**.)",
          answer: {
            type: "text",
            accept: [
              "北京的气候四季分明",
              "北京气候四季分明",
              "Běijīng de qìhòu sìjì fēnmíng",
              "Běijīng qìhòu sìjì fēnmíng",
            ],
            display: "北京的气候四季分明。 (Běijīng de qìhòu sìjì fēnmíng.)",
          },
          hints: [
            "Subject: **北京的气候** (*Beijing's climate*).",
            "Predicate idiom: **四季分明** (*has four distinct seasons* — no **是** needed!).",
          ],
          solution: ["**北京的气候四季分明。** (*Běijīng de qìhòu sìjì fēnmíng.*)."],
        },
        {
          id: "seasons-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "seasonal-activities",
          question: "Translate into Mandarin: **'pack a suitcase'** (5 characters):",
          answer: {
            type: "text",
            accept: ["收拾行李箱", "shōushi xínglǐxiāng", "收拾行李", "shōushi xínglǐ"],
            display: "收拾行李箱 (shōushi xínglǐxiāng)",
          },
          hints: [
            "Verb 'pack / tidy up': **收拾** (*shōushi*).",
            "Noun 'suitcase': **行李箱** (*xínglǐxiāng*).",
          ],
          solution: ["**收拾行李箱** (*shōushi xínglǐxiāng*)."],
        },
        {
          id: "seasons-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "seasonal-activities",
          question: "Unscramble into a natural Mandarin sentence: **打算 / 滑雪 / 冬天 / 去日本 / 我们**",
          answer: {
            type: "text",
            accept: [
              "冬天我们打算去日本滑雪",
              "我们冬天打算去日本滑雪",
              "我们打算冬天去日本滑雪",
              "Dōngtiān wǒmen dǎsuàn qù Rìběn huá xuě",
              "Wǒmen dōngtiān dǎsuàn qù Rìběn huá xuě",
              "Wǒmen dǎsuàn dōngtiān qù Rìběn huá xuě",
            ],
            display: "冬天我们打算去日本滑雪。 (Dōngtiān wǒmen dǎsuàn qù Rìběn huá xuě.)",
          },
          hints: [
            "Put Season + Subject first: **冬天我们** (or **我们冬天**).",
            "Follow with **打算** (plan to) + **去日本** (go to Japan) + **滑雪** (ski)!",
          ],
          solution: [
            "Time & Subject: **冬天我们**.",
            "Intention + Place + Action: **打算去日本滑雪**.",
          ],
        },
        {
          id: "seasons-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "clothing-chuan-dai",
          question: "Read: **哥哥的行李箱里有三双袜子和一双运动鞋。** How many **individual socks and shoes** (counting left and right separately!) are inside his suitcase? (Type a number.)",
          answer: {
            type: "number",
            value: 8,
            display: "8",
          },
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "4 is the number of PAIRS (三双 + 一双 = 4 pairs)! Since each 双 has 2 individual pieces, multiply 4 × 2 = 8!",
            },
          ],
          hints: [
            "**三双袜子** = 3 pairs of socks, and **一双运动鞋** = 1 pair of trainers (4 pairs total).",
            "Each **双** contains 2 separate items: calculate 4 × 2!",
          ],
          solution: [
            "3 pairs of socks = 6 individual socks; 1 pair of trainers = 2 individual shoes.",
            "6 + 2 = **8** individual pieces.",
          ],
        },
        {
          id: "seasons-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "singapore-vs-beijing",
          question: "Translate into Mandarin: **'Beijing's winter is much colder than Singapore's.'**",
          answer: {
            type: "text",
            accept: [
              "北京的冬天比新加坡冷得多",
              "北京冬天比新加坡冷得多",
              "北京的冬天比新加坡的冬天冷得多",
              "北京的冬天比新加坡冷多了",
              "北京冬天比新加坡冷多了",
              "Běijīng de dōngtiān bǐ Xīnjiāpō lěng de duō",
            ],
            display: "北京的冬天比新加坡冷得多。 (Běijīng de dōngtiān bǐ Xīnjiāpō lěng de duō.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["北京的冬天比新加坡很冷"] },
              feedback: "Never put 很 before 冷 in a 比 comparison — use 冷得多 after 比!",
            },
          ],
          hints: [
            "A = **北京的冬天**, B = **新加坡**.",
            "Use **比** + **冷得多** (no **很**!).",
          ],
          solution: ["**北京的冬天比新加坡冷得多。**"],
        },
        {
          id: "seasons-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "clothing-chuan-dai",
          question: "Fix the **TWO errors** (verb + classifier) in *弟弟戴一双牛仔裤* — rewrite the corrected 8-character Mandarin sentence meaning **'My younger brother wears a pair of jeans'**:",
          answer: {
            type: "text",
            accept: ["弟弟穿一条牛仔裤", "Dìdi chuān yì tiáo niúzǎikù", "Dìdi chuān yī tiáo niúzǎikù"],
            display: "弟弟穿一条牛仔裤。 (Dìdi chuān yì tiáo niúzǎikù.)",
          },
          hints: [
            "Error 1 (verb): Jeans are a core garment, not an accessory — replace **戴** with **穿**!",
            "Error 2 (classifier): Jeans are one connected garment — swap **双** for **条**!",
          ],
          solution: [
            "Replace the accessory verb **戴** with **穿**, and correct **一双牛仔裤** to **一条牛仔裤** → **弟弟穿一条牛仔裤。**",
          ],
        },
        {
          id: "seasons-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "seasonal-activities",
          marks: 5,
          question:
            "**IGCSE 0547 Diary Entry — Preparing for a Winter Trip (约50–70字):**\nTomorrow your family is flying from Singapore to **哈尔滨** (*Harbin*) for the December school holidays! Write a diary entry in Simplified Chinese covering ALL FIVE points:\n1. Where you are flying tomorrow and with whom (**跟家人一起去…**).\n2. Contrast Harbin's December weather/temperature with Singapore's.\n3. What you are packing in your suitcase right now (**正在收拾行李箱…带…**).\n4. Name at least **two clothes** (**穿**) and **two accessories** (**戴**) with classifiers.\n5. Two winter activities you plan to do there (**滑雪 / 堆雪人 / 看冰灯**).",
          hints: [
            "Use **正在收拾行李箱呢** for packing right now, and contrast **新加坡三十度** with **哈尔滨零下二十度**!",
            "Include classifiers like **一件羽绒服、两条牛仔裤、一顶帽子、一双手套** and end with **打算去滑雪和堆雪人**.",
          ],
          modelAnswer:
            "明天我跟爸爸妈妈一起坐飞机去哈尔滨旅行！新加坡现在三十一度，非常热，可是哈尔滨十二月是冬天，零下二十度，比新加坡冷得多。我现在正在收拾行李箱呢，带了一件红色的羽绒服、两条厚裤子、一顶帽子和一双手套。到了哈尔滨，我们打算去滑雪、堆雪人，还要看漂亮的冰灯！",
          markScheme: [
            {
              point: "States travel destination, time and companions using 跟…一起.",
              keywords: ["明天", "跟", "一起", "哈尔滨", "旅行"],
            },
            {
              point: "Contrasts Harbin's freezing winter with hot Singapore using 比 or 零下.",
              keywords: ["新加坡", "冬天", "零下", "比", "冷"],
            },
            {
              point: "Mentions packing suitcase using 收拾行李箱 and 带.",
              keywords: ["收拾", "行李箱", "带"],
            },
            {
              point: "Includes accurate clothing & accessory items with classifiers (件 / 条 / 顶 / 双).",
              keywords: ["件", "条", "顶", "双", "羽绒服", "帽子", "手套", "围巾"],
            },
            {
              point: "Names two winter activities planned (滑雪 / 堆雪人 / 滑冰 / 看冰灯).",
              keywords: ["打算", "滑雪", "堆雪人", "滑冰", "冰灯"],
            },
          ],
          commonError:
            "Mixing up **带** (pack in suitcase) and **戴** (wear hat/gloves on body).",
        },
        {
          id: "seasons-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "describing-favourite-season",
          marks: 5,
          question:
            "**IGCSE 0547 School Fashion & Uniform Column (80–120 characters):**\nWrite a short piece for the Tanglin student newsletter comparing **what you wear on school days** (**穿校服**) versus **what you wear at the weekend** in Singapore, and what outfit you wish you could wear if Singapore had autumn or winter! Cover:\n1. Weekday uniform items & colours (**校服 / 衬衫 / 短裤 / 裙子 / 皮鞋 / 袜子**).\n2. Weekend casual outfit on Orchard Road or at Sentosa.\n3. One accessory you wear (**戴手表 / 太阳镜 / 帽子**).\n4. Why you dress differently at weekends.\n5. What autumn/winter outfit you would love to try (**如果…就…**).",
          hints: [
            "Contrast **星期一到星期五穿校服…** with **周末我喜欢穿…** using colours + **的** + classifiers!",
            "Finish with an imaginative **如果新加坡有秋天/冬天，我就穿一件大衣和戴一条围巾！**",
          ],
          modelAnswer:
            "在新加坡，星期一到星期五上学的时候，我都穿校服：一件白衬衫、一条蓝短裤、一双白袜子和一双黑皮鞋，手上还戴一块手表。到了周末，因为天气太热了，我去乌节路或者圣淘沙的时候最喜欢穿舒服的T恤衫、牛仔裤和运动鞋，有时候也戴一副太阳镜。如果新加坡有凉快的秋天，我就每天穿漂亮的毛衣和外套了！",
          markScheme: [
            {
              point: "Describes weekday school uniform items accurately with 穿 and classifiers.",
              keywords: ["星期", "校服", "衬衫", "皮鞋", "袜子", "穿"],
            },
            {
              point: "Describes contrasting weekend casual outfit and Singapore venue.",
              keywords: ["周末", "牛仔裤", "运动鞋", "乌节路", "圣淘沙", "海边"],
            },
            {
              point: "Uses 戴 accurately for at least one accessory (手表 / 太阳镜 / 帽子 / 眼镜).",
              keywords: ["戴", "手表", "太阳镜", "帽子", "眼镜"],
            },
            {
              point: "Gives a clear comfort/weather reason using 因为….",
              keywords: ["因为", "舒服", "热", "凉快"],
            },
            {
              point: "Uses 如果…就… accurately for a hypothetical autumn/winter outfit.",
              keywords: ["如果", "就", "毛衣", "外套", "大衣", "围巾"],
            },
          ],
          commonError:
            "Writing *穿一块手表* instead of **戴一块手表**, or putting **就** before **我** in **如果…我就…**.",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "seasons-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "clothing-chuan-dai",
      question:
        "**Classifier Matrix Challenge:**\nRead this sentence with FIVE classifier blanks:\n> **妈妈买了一___大衣、两___牛仔裤、一___靴子、一___帽子和一___太阳镜。**\nWhich sequence of five classifiers fills every blank without a single mistake?",
      options: [
        "件 、 条 、 双 、 顶 、 副",
        "件 、 双 、 双 、 顶 、 把",
        "条 、 条 、 只 、 件 、 副",
        "件 、 条 、 条 、 把 、 双",
      ],
      answerIndex: 0,
      hints: [
        "Check items 1–3: **大衣** (coat → **件**), **牛仔裤** (jeans → **条**, NOT **双**!), **靴子** (boots → **双**).",
        "Check items 4–5: **帽子** (hat on head crown → **顶**), **太阳镜** (sunglasses → **副**).",
      ],
      explanation:
        "**一件大衣** (coat), **两条牛仔裤** (jeans — single connected long garments!), **一双靴子** (pair of boots), **一顶帽子** (hat), and **一副太阳镜** (sunglasses) = **件、条、双、顶、副**!",
    },
    {
      id: "seasons-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "four-seasons",
      question:
        "**Radical & Triplication Puzzle:**\nIn **炎热** (*yánrè*, scorching summer heat), the character **炎** stacks **TWO** fire radicals (**火 + 火**) vertically! What single Simplified Chinese character sits on the **left** of **秋** (*qiū*, autumn) next to **火**, representing ripened harvest grain stalks? (Type the single Hanzi character or its Pinyin `hé`.)",
      answer: {
        type: "text",
        accept: ["禾", "hé", "grain"],
        display: "禾 (hé — grain stalk)",
      },
      hints: [
        "Split **秋** into its left component and right component (**火**).",
        "Look at **木** (tree) with an extra drooping grain-ear stroke at the top: **禾** (*hé*)!",
      ],
      solution: [
        "**秋** = **禾** (*hé*, ripened grain stalk) on the left + **火** (*huǒ*, fire/golden-red autumn glow) on the right.",
      ],
    },
    {
      id: "seasons-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "seasonal-activities",
      question:
        "**Three Homophones Showdown (*dài* vs *dài* vs *dāi*):**\nChoose the sentence that places **带**, **戴** and **待** in the exact order Blank 1 → Blank 2 → Blank 3:\n> **今天北京下大雪，如果你不想___在家，出门的时候一定要___一顶帽子，还要___一把雨伞！**",
      options: [
        "带 、 戴 、 待",
        "待 、 戴 、 带",
        "戴 、 待 、 带",
        "待 、 带 、 戴",
      ],
      answerIndex: 1,
      hints: [
        "Blank 1 (**___在家**, stay at home) = **待** (*dāi*).",
        "Blank 2 (**___一顶帽子**, wear a hat) = **戴** (*dài*); Blank 3 (**___一把雨伞**, carry an umbrella) = **带** (*dài*).",
      ],
      explanation:
        "**待在家** (*dāi zài jiā*, stay at home) → **戴一顶帽子** (*dài yì dǐng màozi*, wear a hat) → **带一把雨伞** (*dài yì bǎ yǔsǎn*, bring an umbrella) = **待、戴、带**!",
    },
    {
      id: "seasons-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "clothing-chuan-dai",
      question:
        "**Hemisphere & Wardrobe Logic:**\nFour pen-pals take photos on **15 July (七月十五号)**:\n1. **小明** is in **北京** (35°C, blazing sun).\n2. **美美** is in **新加坡** (31°C, afternoon downpour).\n3. **大卫** is in **悉尼** (9°C, chilly Southern Hemisphere winter wind).\n4. **安娜** is in **昆明** (20°C, **四季如春**).\n\nWho is the **ONLY** person wearing **一件大衣和一条围巾** outdoors on 15 July? (Write the person's Chinese name.)",
      answer: {
        type: "text",
        accept: ["大卫", "Dàwèi", "Dawei", "David"],
        display: "大卫 (Dàwèi — in Sydney's July winter!)",
      },
      hints: [
        "**一件大衣和一条围巾** = an overcoat and a scarf!",
        "Check which city is experiencing **9°C Southern Hemisphere winter** in July (**七月**).",
      ],
      solution: [
        "July (**七月**) is mid-winter in Sydney (**悉尼**, 9°C), so **大卫** (*Dàwèi*) is the only one wearing an overcoat and scarf!",
      ],
    },
    {
      id: "seasons-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "singapore-vs-beijing",
      question:
        "**Error-Correction Surgery:**\nRewrite this flawed sentence to fix the grammar error (keep the meaning *'Beijing's climate is very different from Singapore's'*):\n> *北京的气候比新加坡很不一样。*",
      answer: {
        type: "text",
        accept: [
          "北京的气候跟新加坡很不一样",
          "北京的气候和新加坡很不一样",
          "北京的气候跟新加坡不一样",
          "北京的气候和新加坡不一样",
          "北京的气候跟新加坡的很不一样",
          "北京的气候和新加坡的很不一样",
          "北京的气候跟新加坡的不一样",
          "北京的气候和新加坡的不一样",
          "Běijīng de qìhòu gēn Xīnjiāpō hěn bù yíyàng",
          "Běijīng de qìhòu gēn Xīnjiāpō hěn bù yīyàng",
        ],
        display: "北京的气候跟新加坡很不一样。 (Běijīng de qìhòu gēn Xīnjiāpō hěn bù yíyàng.)",
      },
      hints: [
        "Look at **比**: can **比** ever be used with **不一样**?",
        "Replace **比** with **跟** (or **和**) → **北京的气候跟新加坡很不一样**!",
      ],
      solution: [
        "**不一样** ('different') links A and B with **跟 / 和**, never **比**!",
        "Corrected sentence: **北京的气候跟新加坡很不一样。**",
      ],
    },
    {
      id: "seasons-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "clothing-chuan-dai",
      question:
        "**Shopping Bill Calculation (RMB 元):**\nAt a Shanghai shop, winter items are priced as follows:\n- **毛衣**：一件一百二十元 (120 RMB)\n- **牛仔裤**：一条一百五十元 (150 RMB)\n- **围巾**：一条六十元 (60 RMB)\n- **手套**：一双四十元 (40 RMB)\n\nSister buys **两件毛衣、一条牛仔裤、一条围巾和两双手套**. Because it is a winter sale, orders over 500 RMB get **五十元** (50 RMB) off! How much does she pay in total in RMB? (Type a number.)",
      answer: {
        type: "number",
        value: 480,
        display: "480",
      },
      traps: [
        {
          spec: { type: "number", value: 530 },
          feedback: "530 RMB is the subtotal before the discount! Since 530 > 500, subtract 五十元 (50 RMB) off: 530 − 50 = 480!",
        },
      ],
      hints: [
        "Calculate subtotal: (2 × 120) + 150 + 60 + (2 × 40) = 240 + 150 + 60 + 80 = 530 RMB.",
        "Since 530 > 500, subtract the **五十元** (50 RMB) discount!",
      ],
      solution: [
        "**两件毛衣** = 2 × 120 = 240 元.",
        "**一条牛仔裤** (150) + **一条围巾** (60) + **两双手套** (2 × 40 = 80) = 290 元.",
        "Subtotal = 240 + 290 = 530 元 (> 500 元) → 530 − 50 = **480** 元.",
      ],
    },
    {
      id: "seasons-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "clothing-chuan-dai",
      question:
        "**Aspect Particle Nuance — 穿 vs 穿着:**\nCompare:\n1. **早上七点我穿校服。** (*At 7 am I put on my school uniform.*)\n2. **老师今天穿着一件白色的衬衫。** (*Today the teacher is wearing a white shirt.*)\n\nWhat role does the particle **着** (*zhe*) play right after **穿** or **戴** in Sentence 2?",
      options: [
        "It turns the verb into a completed past action last year.",
        "It marks a continuous state ('has on / is wearing') rather than the momentary action of putting it on.",
        "It negates the sentence so it means 'is not wearing'.",
        "It turns a shirt into an accessory like 戴.",
      ],
      answerIndex: 1,
      hints: [
        "At 7 am you perform the action of getting dressed (**穿**); all day in class the shirt stays on your body (**穿着**).",
        "Think of **戴着一副眼镜** ('wearing glasses' as an ongoing state)!",
      ],
      explanation:
        "Attaching **着** (*zhe*, neutral tone) to **穿** (**穿着**) or **戴** (**戴着**) describes a **continuous state** ('is wearing / has on'), whereas bare **穿 / 戴** can also mean the physical action of 'putting on'!",
    },
    {
      id: "seasons-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "describing-favourite-season",
      question:
        "**High-Precision Translation:**\nTranslate into Mandarin: **'Beijing's summer is as hot as Singapore's.'** (Use **北京的夏天**, **跟…一样**, and **热**.)",
      answer: {
        type: "text",
        accept: [
          "北京的夏天跟新加坡一样热",
          "北京的夏天和新加坡一样热",
          "北京夏天跟新加坡一样热",
          "北京的夏天跟新加坡的一样热",
          "北京的夏天和新加坡的一样热",
          "北京的夏天跟新加坡的夏天一样热",
          "Běijīng de xiàtiān gēn Xīnjiāpō yíyàng rè",
          "Běijīng de xiàtiān gēn Xīnjiāpō yīyàng rè",
        ],
        display: "北京的夏天跟新加坡一样热。 (Běijīng de xiàtiān gēn Xīnjiāpō yíyàng rè.)",
      },
      hints: [
        "Use the equality frame **A + 跟 + B + 一样 + Adjective**.",
        "A = **北京的夏天**, B = **新加坡**, Adjective = **热**.",
      ],
      solution: [
        "**北京的夏天** + **跟** + **新加坡** + **一样热** → **北京的夏天跟新加坡一样热。**",
      ],
    },
  ],
};
