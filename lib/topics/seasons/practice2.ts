import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "seasons-p3",
    title: "Seasons Practice Paper 3 — IGCSE Synthesis, Outfits & World Climates",
    questions: [
      {
        id: "seasons-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "four-seasons",
        question: "Write **'season'** in Mandarin (2 characters, as in **四个______**):",
        answer: {
          type: "text",
          accept: ["季节", "jìjié", "jì jié"],
          display: "季节 (jìjié)",
        },
        hints: ["Starts with **季** (*jì*) + **节** (*jié*)."],
        solution: ["'Season' is **季节** (*jìjié*)."],
      },
      {
        id: "seasons-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "clothing-chuan-dai",
        question: "Write **'take off'** (clothes/shoes — the opposite of **穿**) in Mandarin (1 character):",
        answer: {
          type: "text",
          accept: ["脱", "tuō"],
          display: "脱 (tuō)",
        },
        hints: ["Pronounced **tuō** (1st tone), with **月** on the left."],
        solution: ["'To take off (clothes/shoes)' is **脱** (*tuō*)."],
      },
      {
        id: "seasons-p3-q03",
        kind: "short",
        difficulty: "core",
        guideRef: "four-seasons",
        question: "Write the 4-character idiom meaning **'like summer in all four seasons'** (used for Singapore's climate):",
        answer: {
          type: "text",
          accept: ["四季如夏", "sìjì rú xià", "sìjìrúxià"],
          display: "四季如夏 (sìjì rú xià)",
        },
        hints: [
          "Starts with **四季** (*four seasons*).",
          "Ends with **如夏** (*like summer*).",
        ],
        solution: ["**四季如夏** (*sìjì rú xià*)."],
      },
      {
        id: "seasons-p3-q04",
        kind: "short",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "Write **'a white shirt'** in Mandarin (7 characters, using **件** and **白色的**):",
        answer: {
          type: "text",
          accept: [
            "一件白色的衬衫",
            "一件白色的衬衣",
            "一件白衬衫",
            "一件白衬衣",
            "yí jiàn báisè de chènshān",
            "yījiàn báisè de chènshān",
            "yí jiàn báisè de chènyī",
          ],
          display: "一件白色的衬衫 (yí jiàn báisè de chènshān)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["一条白色的衬衫"] },
            feedback: "Shirts (衬衫) are upper-body garments, so use 件 (jiàn), not 条!",
          },
        ],
        hints: [
          "Classifier for shirts: **件** (*jiàn*).",
          "Combine **一件** + **白色的** + **衬衫** (both characters of **衬衫** have 5-stroke **衤**!).",
        ],
        solution: ["**一件白色的衬衫** (*yí jiàn báisè de chènshān*)."],
      },
      {
        id: "seasons-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "Write **'wear a wristwatch'** in Mandarin using the accessory verb and **块** (or **只**) (5 characters: ___一___手表):",
        answer: {
          type: "text",
          accept: [
            "戴一块手表",
            "戴一只手表",
            "dài yí kuài shǒubiǎo",
            "dài yī kuài shǒubiǎo",
            "dài yì zhī shǒubiǎo",
            "dài yī zhī shǒubiǎo",
          ],
          display: "戴一块手表 (dài yí kuài shǒubiǎo)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["穿一块手表", "穿一只手表"] },
            feedback: "Watches are wrist accessories — use 戴 (dài), never 穿!",
          },
        ],
        hints: [
          "Wristwatches are accessories → verb **戴** (*dài*).",
          "Use classifier **块** (*kuài*) or **只** (*zhī*).",
        ],
        solution: ["**戴一块手表** (*dài yí kuài shǒubiǎo*)."],
      },
      {
        id: "seasons-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "seasonal-activities",
        question: "Write **'view red autumn leaves'** in Mandarin (3 characters):",
        answer: {
          type: "text",
          accept: ["看红叶", "kàn hóngyè", "kànhóngyè"],
          display: "看红叶 (kàn hóngyè)",
        },
        hints: [
          "**看** (*kàn*, look at/view) + **红** (*hóng*, red) + **叶** (*yè*, leaves).",
          "Famous October activity at Beijing's Fragrant Hills (**香山**)!",
        ],
        solution: ["'View red leaves' is **看红叶** (*kàn hóngyè*)."],
      },
      {
        id: "seasons-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "seasonal-activities",
        question: "Translate into Mandarin: **'In spring our whole family goes to the park to see flowers.'** (Use **春天**, **我们全家**, and **去公园看花**.)",
        answer: {
          type: "text",
          accept: [
            "春天我们全家去公园看花",
            "我们全家春天去公园看花",
            "春天我们全家一起去公园看花",
            "Chūntiān wǒmen quánjiā qù gōngyuán kàn huā",
          ],
          display: "春天我们全家去公园看花。 (Chūntiān wǒmen quánjiā qù gōngyuán kàn huā.)",
        },
        hints: [
          "Keep STPV word order: **春天** + **我们全家** + **去公园** + **看花**.",
          "Never put **春天** or **在公园** at the end of the sentence!",
        ],
        solution: ["**春天我们全家去公园看花。**"],
      },
      {
        id: "seasons-p3-q08",
        kind: "short",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "Translate into Mandarin: **'This jacket fits very well / is very suitable.'** → **这件外套很______。** (Fill in the 2-character adjective.)",
        answer: {
          type: "text",
          accept: ["合适", "合身", "héshì", "hé shì", "héshēn"],
          display: "合适 (héshì)",
        },
        hints: [
          "Starts with **合** (*hé*, match/fit together) + **适** (*shì*, suitable).",
          "Used when trying on clothes that are **不大不小**!",
        ],
        solution: ["'Suitable / fitting well' is **合适** (*héshì*)."],
      },
      {
        id: "seasons-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "singapore-vs-beijing",
        question: "Unscramble into a natural Mandarin sentence: **凉快 / 比 / 秋天 / 夏天 / 得多**",
        answer: {
          type: "text",
          accept: [
            "秋天比夏天凉快得多",
            "Qiūtiān bǐ xiàtiān liángkuai de duō",
          ],
          display: "秋天比夏天凉快得多。 (Qiūtiān bǐ xiàtiān liángkuai de duō.)",
        },
        hints: [
          "Which season is cooler — **秋天** (autumn) or **夏天** (summer)? Put **秋天** first!",
          "Place **得多** right *after* **凉快**.",
        ],
        solution: ["**秋天比夏天凉快得多。** (*Autumn is much cooler than summer.*)."],
      },
      {
        id: "seasons-p3-q10",
        kind: "short",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "Read: **姐姐买了两件衬衫（一件八十元）和一条裙子（一百四十元）。** How much did she spend in total in RMB (**元**)? (Type a number.)",
        answer: {
          type: "number",
          value: 300,
          display: "300",
        },
        traps: [
          {
            spec: { type: "number", value: 220 },
            feedback: "Look closely at 两件衬衫! She bought TWO shirts at 80 RMB each (2 × 80 = 160 RMB), plus 140 RMB for the skirt = 300!",
          },
        ],
        hints: [
          "**两件衬衫（一件八十元）** = 2 shirts × 80 RMB = 160 RMB.",
          "Add **一条裙子（一百四十元）** = 140 RMB!",
        ],
        solution: [
          "2 shirts × 80 元 = 160 元.",
          "160 元 + 140 元 = **300** 元.",
        ],
      },
      {
        id: "seasons-p3-q11",
        kind: "short",
        difficulty: "challenge",
        guideRef: "clothing-chuan-dai",
        question: "Translate into Mandarin: **'two pairs of black leather shoes'** (7 characters, using **两**, **双**, and **黑色的**):",
        answer: {
          type: "text",
          accept: [
            "两双黑色的皮鞋",
            "两双黑皮鞋",
            "liǎng shuāng hēisè de píxié",
          ],
          display: "两双黑色的皮鞋 (liǎng shuāng hēisè de píxié)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["二双黑色的皮鞋", "二双黑皮鞋"] },
            feedback: "Always use 两 (liǎng), NEVER 二, before a measure word like 双!",
          },
        ],
        hints: [
          "Use **两** before the pair classifier **双**: **两双**.",
          "Follow with **黑色的** + **皮鞋** (*leather shoes*).",
        ],
        solution: ["**两双黑色的皮鞋** (*liǎng shuāng hēisè de píxié*)."],
      },
      {
        id: "seasons-p3-q12",
        kind: "short",
        difficulty: "challenge",
        guideRef: "describing-favourite-season",
        question: "Translate into Mandarin: **'My favourite season is spring.'** (Include **的** in the right place!)",
        answer: {
          type: "text",
          accept: [
            "我最喜欢的季节是春天",
            "Wǒ zuì xǐhuan de jìjié shì chūntiān",
          ],
          display: "我最喜欢的季节是春天。 (Wǒ zuì xǐhuan de jìjié shì chūntiān.)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["我最喜欢季节是春天", "我的最喜欢季节是春天"] },
            feedback: "Place 的 right after 我最喜欢 to modify 季节: 我最喜欢的季节是春天!",
          },
        ],
        hints: [
          "The modifier **我最喜欢** ('that I like best') needs **的** right before **季节**!",
          "Finish with **是春天**.",
        ],
        solution: ["**我最喜欢的季节是春天。** (*Wǒ zuì xǐhuan de jìjié shì chūntiān.*)."],
      },
      {
        id: "seasons-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "four-seasons",
        marks: 5,
        question:
          "**IGCSE 0547 Postcard from Beijing in Autumn (约50–70字):**\nImagine you are on a Tanglin school exchange trip in **北京** in October (**十月**)! Write a message home to your parents in Singapore covering ALL FIVE points:\n1. What season it is in Beijing right now and how the air/sky feels (**秋天 / 秋高气爽 / 凉快**).\n2. Compare Beijing's weather right now with Singapore's (**比新加坡…**).\n3. What clothes & accessories you are wearing today (**穿…戴…** + classifiers).\n4. Where you went today and what you saw (**去香山爬山 / 看红叶**).\n5. How you feel about this season!",
        hints: [
          "Use **北京现在是秋天，秋高气爽，比新加坡凉快得多** to cover Points 1 and 2 cleanly!",
          "Describe your outfit with **穿一件毛衣、一条牛仔裤和一双运动鞋，戴一条围巾**, then add **去爬山看红叶**.",
        ],
        modelAnswer:
          "爸爸妈妈好！我现在在北京。十月的北京是秋天，秋高气爽，白天十八度，比新加坡凉快得多，一点儿也不潮湿。今天我穿了一件蓝色的毛衣、一条牛仔裤和一双运动鞋，还戴了一条围巾。上午我们跟老师一起去香山爬山、看红叶，风景美极了！我太喜欢北京的秋天了！",
        markScheme: [
          {
            point: "Identifies Beijing's autumn season and pleasant cool climate (秋天 / 秋高气爽 / 凉快).",
            keywords: ["北京", "秋天", "秋高气爽", "凉快", "十月"],
          },
          {
            point: "Compares Beijing accurately with Singapore using 比 (without 很).",
            keywords: ["比", "新加坡", "得多", "一点儿"],
          },
          {
            point: "Describes outfit accurately using 穿 and 戴 with classifiers.",
            keywords: ["穿", "戴", "件", "条", "双", "毛衣", "围巾"],
          },
          {
            point: "Describes hiking / viewing red leaves in STPV order.",
            keywords: ["爬山", "看红叶", "红叶", "公园", "山"],
          },
          {
            point: "Expresses clear enthusiasm/feeling about autumn.",
            keywords: ["喜欢", "舒服", "高兴", "开心", "美"],
          },
        ],
        commonError:
          "Writing *我们去爬山在香山今天* (English end-heavy order) instead of **今天我们去香山爬山**.",
      },
      {
        id: "seasons-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "describing-favourite-season",
        marks: 6,
        question:
          "**IGCSE 0547 Comparative Speech Script (90–130 characters):**\nWrite a speech for your Mandarin class titled **《新加坡与中国的四季和穿着》** (*Seasons & Clothing in Singapore vs China*). Include:\n- Why Singapore's wardrobe stays nearly the same all year (**一年四季如夏**)\n- How people in northern China change outfits across **春夏秋冬**\n- Accurate contrast of **穿**, **戴** and **带**, plus at least **three different classifiers** (**件, 条, 双, 顶, 副**)\n- Which climate you prefer living or holidaying in, using **虽然…但是…** and **因为…所以…**!",
        hints: [
          "Organise into two crisp paragraphs: Paragraph 1 on Singapore (**穿T恤衫、短裤，戴太阳镜，带雨伞**), Paragraph 2 on China's four seasons (**四季分明：春天…冬天穿羽绒服、戴帽子和手套**).",
          "Close with **虽然…但是…** and **因为…所以…** to state your personal verdict!",
        ],
        modelAnswer:
          "大家好！新加坡的气候跟中国北方很不一样。因为新加坡一年四季如夏，每天都很热，所以我们平常只穿一件T恤衫、一条短裤和一双凉鞋，出门戴一副太阳镜，书包里带一把雨伞。可是北京四季分明：春天春暖花开，人们穿衬衫和外套；冬天非常寒冷，常常下雪，大家都要穿厚羽绒服和靴子，还要戴一顶帽子和一双手套。虽然住在新加坡不用买很多厚衣服很方便，但是我放假的时候最喜欢去中国看雪、滑雪！",
        markScheme: [
          {
            point: "Contrasts Singapore and China's climates using 不一样, 四季如夏 and 四季分明.",
            keywords: ["新加坡", "不一样", "四季如夏", "四季分明", "气候"],
          },
          {
            point: "Uses 穿, 戴 and 带 accurately without mixing them up.",
            keywords: ["穿", "戴", "带"],
          },
          {
            point: "Demonstrates at least three distinct classifiers accurately (件 / 条 / 双 / 顶 / 副 / 把).",
            keywords: ["件", "条", "双", "顶", "副", "把"],
          },
          {
            point: "Describes seasonal wardrobe changes across China's seasons.",
            keywords: ["春天", "冬天", "羽绒服", "衬衫", "外套", "手套", "帽子"],
          },
          {
            point: "Uses paired 因为…所以… accurately.",
            keywords: ["因为", "所以"],
          },
          {
            point: "Uses paired 虽然…但是… to justify personal preference.",
            keywords: ["虽然", "但是", "喜欢"],
          },
        ],
        commonError:
          "Using **双** for trousers/shorts (*一双短裤*) or forgetting **但是** in **虽然…但是…**.",
      },
    ],
  },
];
