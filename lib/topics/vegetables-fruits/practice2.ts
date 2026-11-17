import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "vegetables-fruits-p3",
    title: "Practice Paper 3 · Wet Markets, Discounts & Extended IGCSE Writing",
    questions: [
      {
        id: "vegetables-fruits-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "fruits-vocab",
        question:
          "Write the Mandarin noun for **'mango'** (2 characters or tone-marked Pinyin):",
        answer: {
          type: "text",
          accept: ["芒果", "mángguǒ"],
          display: "芒果 (mángguǒ)",
        },
        hints: ["Sound-loan **芒** (*máng*) + **果** (*guǒ*, fruit)."],
        solution: [
          "'Mango' is **芒果** (*mángguǒ*).",
        ],
      },
      {
        id: "vegetables-fruits-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "vegetables-vocab",
        question:
          "Write the Mandarin noun for **'mushroom'** (2 characters or tone-marked Pinyin):",
        answer: {
          type: "text",
          accept: ["蘑菇", "mógu", "mógū"],
          display: "蘑菇 (mógu)",
        },
        hints: ["Both characters wear the **艹** plant radical; pronounced *mógu*."],
        solution: [
          "'Mushroom' is **蘑菇** (*mógu*).",
        ],
      },
      {
        id: "vegetables-fruits-p3-q03",
        kind: "short",
        difficulty: "warmup",
        guideRef: "money-weights",
        question:
          "Write the Mandarin word for **'supermarket'** (2 characters or tone-marked Pinyin):",
        answer: {
          type: "text",
          accept: ["超市", "chāoshì"],
          display: "超市 (chāoshì)",
        },
        hints: ["Short for **超级市场** (*chāojí shìchǎng*)."],
        solution: [
          "'Supermarket' is **超市** (*chāoshì*).",
        ],
      },
      {
        id: "vegetables-fruits-p3-q04",
        kind: "short",
        difficulty: "core",
        guideRef: "fruits-vocab",
        question:
          "Translate into Mandarin: *'One slice of chilled watermelon'* (Use **一**, **块**, **冰**, and **西瓜**):",
        answer: {
          type: "text",
          accept: ["一块冰西瓜", "yí kuài bīng xīguā", "yī kuài bīng xīguā"],
          display: "一块冰西瓜 (yí kuài bīng xīguā)",
        },
        hints: [
          "Classifier **块** (*kuài*) is used for slices/chunks of watermelon.",
          "**冰** (*bīng*, iced/chilled) sits right before **西瓜**.",
        ],
        solution: [
          "Number + Classifier + Modifier + Noun → **一块冰西瓜**.",
        ],
      },
      {
        id: "vegetables-fruits-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "vegetables-vocab",
        question:
          "Translate into Mandarin: *'Eating carrots is good for your health.'* (Use **吃胡萝卜** and **对身体好**.)",
        answer: {
          type: "text",
          accept: [
            "吃胡萝卜对身体好",
            "吃胡萝卜对身体很好",
            "Chī húluóbo duì shēntǐ hǎo",
            "Chī húluóbo duì shēntǐ hěn hǎo",
          ],
          display: "吃胡萝卜对身体好。 (Chī húluóbo duì shēntǐ hǎo.)",
        },
        hints: [
          "Put the action topic **吃胡萝卜** first.",
          "Follow with **对身体(很)好**.",
        ],
        solution: [
          "Topic (**吃胡萝卜**) + Comment (**对身体好**) → **吃胡萝卜对身体好。**",
        ],
      },
      {
        id: "vegetables-fruits-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "money-weights",
        question:
          "Convert the spoken price **十五块六** into formal **written price-tag Mandarin** using **元** and **角** (5 characters):",
        answer: {
          type: "text",
          accept: ["十五元六角", "15元6角", "shíwǔ yuán liù jiǎo"],
          display: "十五元六角 (shíwǔ yuán liù jiǎo)",
        },
        hints: [
          "Replace spoken **块** with written **元** (*yuán*).",
          "Restore the dropped tenths unit as written **角** (*jiǎo*)!",
        ],
        solution: [
          "**十五块六** (15.60) is written formally as **十五元六角**.",
        ],
      },
      {
        id: "vegetables-fruits-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "money-weights",
        question:
          "Chinese cabbage (**白菜**) costs **两块四一斤** (2.40 per jin). How much do **两斤半** (2.5 jin) cost? Type a whole number.",
        answer: {
          type: "number",
          value: 6,
          display: "6",
        },
        hints: [
          "**两块四** = 2.40 per jin.",
          "Multiply 2.40 × **2.5** (**两斤半**)!",
        ],
        solution: [
          "2.40 × 2.5 = **6** yuan (**六块钱**).",
        ],
      },
      {
        id: "vegetables-fruits-p3-q08",
        kind: "short",
        difficulty: "core",
        guideRef: "bargaining-tai-le",
        question:
          "Translate into Mandarin: *'Could you make it a little cheaper?'* (Use **可以**, **便宜一点儿**, and **吗**.)",
        answer: {
          type: "text",
          accept: [
            "可以便宜一点儿吗",
            "可以便宜一点吗",
            "Kěyǐ piányi yìdiǎnr ma",
            "Kěyǐ piányi yìdiǎn ma",
            "Kěyǐ piányi yīdiǎnr ma",
            "Kěyǐ piányi yīdiǎn ma",
          ],
          display: "可以便宜一点儿吗？ (Kěyǐ piányi yìdiǎnr ma?)",
        },
        hints: [
          "Start with **可以** (*kěyǐ*, can/could).",
          "Keep **一点儿** AFTER **便宜**, then finish with **吗**!",
        ],
        solution: [
          "**可以** + **便宜一点儿** + **吗？** → **可以便宜一点儿吗？**",
        ],
      },
      {
        id: "vegetables-fruits-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "bargaining-tai-le",
        question:
          "A fruit gift basket has an original price of **八十块钱** (¥80). During Chinese New Year it is **打七折** (*dǎ qī zhé*). How many yuan do you **save** (the discount amount taken off, NOT what you pay)? Type a number.",
        answer: {
          type: "number",
          value: 24,
          display: "24",
        },
        traps: [
          {
            spec: { type: "number", value: 56 },
            feedback: "56 yuan is what you PAY (70% of 80)! Re-read the question: it asks how many yuan you **save** (80 − 56)!",
          },
        ],
        hints: [
          "**打七折** means you pay 70% (80 × 0.7 = 56), so you get **30% off**!",
          "Savings = 80 − 56 (or 80 × 0.3).",
        ],
        solution: [
          "Sale price at **打七折** = 80 × 0.7 = 56 yuan.",
          "Amount saved = 80 − 56 = **24** yuan.",
        ],
      },
      {
        id: "vegetables-fruits-p3-q10",
        kind: "short",
        difficulty: "core",
        guideRef: "market-dialogue",
        question:
          "Write the two-character Singapore/Malaysian Mandarin noun for a traditional **'wet market'** (borrowed from Malay *pasar*):",
        answer: {
          type: "text",
          accept: ["巴刹", "bāshā"],
          display: "巴刹 (bāshā)",
        },
        hints: [
          "Two characters pronounced *bāshā*.",
          "Equivalent to Mainland China's **菜市场**!",
        ],
        solution: [
          "Singapore's traditional wet market is **巴刹** (*bāshā*).",
        ],
      },
      {
        id: "vegetables-fruits-p3-q11",
        kind: "short",
        difficulty: "challenge",
        guideRef: "market-dialogue",
        question:
          "Read this conversation at a fruit shop:\n- 爸爸：**老板，榴莲怎么卖？**\n- 老板：**一盒三十五块新币，两盒六十块！**\n- 爸爸：**好，我买两盒榴莲，再来三斤四块钱一斤的山竹。给您一百块新币！**\nHow much change (**找多少钱**) in SGD does Dad receive back? Type a number.",
        answer: {
          type: "number",
          value: 28,
          display: "28",
        },
        hints: [
          "2 boxes of durian = **60** SGD (bundle deal!).",
          "3 jin of mangosteens = 3 × 4 = **12** SGD. Subtract (60 + 12) from **100**!",
        ],
        solution: [
          "Durian bundle (2 boxes) = 60 SGD; Mangosteens (3 × 4) = 12 SGD.",
          "Total bill = 60 + 12 = 72 SGD.",
          "Change from 100 SGD = 100 − 72 = **28** SGD (**找您二十八块新币**).",
        ],
      },
      {
        id: "vegetables-fruits-p3-q12",
        kind: "short",
        difficulty: "challenge",
        guideRef: "vegetables-vocab",
        question:
          "Read Auntie Mei's cooking blog:\n**今天中午我用三个西红柿和四个鸡蛋做了西红柿炒鸡蛋，还用一块豆腐和半斤蘑菇做了一碗热汤，孩子们都说好吃极了！**\nHow many **jin** of mushrooms did Auntie Mei put into the soup? Give your answer as a decimal (e.g. `1.5`).",
        answer: {
          type: "number",
          value: 0.5,
          display: "0.5",
        },
        hints: [
          "Look right before **蘑菇** (*mógu*, mushrooms): **半斤蘑菇**.",
          "What number is **半** (*bàn*)?",
        ],
        solution: [
          "**半斤蘑菇** means half a jin = **0.5** jin (250 g) of mushrooms.",
        ],
      },
      {
        id: "vegetables-fruits-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "bargaining-tai-le",
        marks: 5,
        question:
          "**IGCSE 0547 Complete Stall Dialogue Task (5 marks)**\nWrite a natural 6-line mini-dialogue (50–80 characters) between **小美 (Xiǎoměi)** and a market **老板 (Lǎobǎn)** buying mangoes and cucumbers. Include:\n1. Xiaomei asks how mangoes are sold (**怎么卖**).\n2. Seller states the price per **斤** and praises their taste (**又香又甜**).\n3. Xiaomei says it is a bit expensive (**有点儿贵**) and bargains (**便宜一点儿吧**).\n4. Seller gives a deal if she buys **两斤**, and asks **还要别的吗？**.\n5. Xiaomei adds **两根黄瓜**, asks the total (**一共多少钱**), pays, and gets change (**找您…**).",
        modelAnswer:
          "小美：老板，请问芒果怎么卖？\n老板：今天的芒果又香又甜，十块钱一斤！\n小美：有点儿贵，我买两斤，便宜一点儿吧！\n老板：好吧，两斤算你十八块！还要别的吗？\n小美：再来两根黄瓜吧，一共多少钱？给您三十块。\n老板：黄瓜三块，一共二十一块，找您九块！",
        markScheme: [
          {
            point: "Xiaomei asks mango price using 怎么卖 or 多少钱一斤.",
            keywords: ["芒果", "怎么卖", "多少钱"],
          },
          {
            point: "Seller quotes price per 斤 and describes taste with 又…又… or 甜/新鲜.",
            keywords: ["斤", "又", "甜", "香", "新鲜"],
          },
          {
            point: "Xiaomei uses 有点儿贵/太贵了 and bargains with 便宜一点儿.",
            keywords: ["贵", "便宜一点"],
          },
          {
            point: "Seller offers two-jin price and asks 还要别的吗.",
            keywords: ["两斤", "还要别的吗"],
          },
          {
            point: "Includes 两根黄瓜, 一共多少钱, and accurate change (找您…).",
            keywords: ["两根", "黄瓜", "一共", "找"],
          },
        ],
        hints: [
          "Make sure the arithmetic in your final two lines adds up accurately!",
          "Use **两根黄瓜** and **两斤芒果** (never *二*).",
        ],
        commonError:
          "Arithmetic mismatch between **一共**, amount paid, and **找您…**.",
      },
      {
        id: "vegetables-fruits-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "market-dialogue",
        marks: 6,
        question:
          "**IGCSE 0547 Comparative Essay — 巴刹与超市 (6 marks)**\nWrite a 90–130 character article in Simplified Chinese comparing shopping at a traditional Singapore wet market (**巴刹**) vs a modern supermarket (**超市**). You MUST cover:\n1. Who in your family prefers the **巴刹** and why.\n2. Who prefers the **超市** and why (e.g. air-conditioning **冷气**, **打折**).\n3. Use at least ONE **比** comparison (e.g. **巴刹的蔬菜比超市新鲜 / 便宜**).\n4. Use **虽然…但是…** or **不但…而且…**.\n5. Describe an item you bought recently with its weight/classifier and price in **块/新币**.\n6. Conclude which place YOU prefer and why.",
        modelAnswer:
          "在新加坡，人们可以去巴刹或者超市买菜。奶奶最喜欢早上六点去巴刹，因为巴刹的青菜和豆腐比超市新鲜，而且可以跟老板讲价，买得多就便宜一点儿。妈妈平时很忙，喜欢周末去超市，因为超市不但有冷气很舒服，而且水果常常打八折。上个星期天我在超市买了一盒十二块新币的甜草莓。虽然巴刹有一点儿热，但是我更喜欢去巴刹，因为那里非常热闹！",
        markScheme: [
          {
            point: "Explains why a family member likes the 巴刹 (freshness, bargaining, atmosphere).",
            keywords: ["巴刹", "新鲜", "便宜"],
          },
          {
            point: "Explains why a family member likes the 超市 (air-con, convenience, discounts).",
            keywords: ["超市", "舒服", "打", "方便", "冷气"],
          },
          {
            point: "Uses a grammatical 比 comparison (with no 很 before the adjective!).",
            keywords: ["比"],
          },
          {
            point: "Uses paired connectors 虽然…但是… or 不但…而且….",
            keywords: ["虽然", "但是", "不但", "而且"],
          },
          {
            point: "Mentions a specific recent purchase with classifier and price (块/元/新币).",
            keywords: ["买了", "斤", "公斤", "盒", "串", "块", "新币", "元"],
          },
          {
            point: "States personal preference with a clear reason (更喜欢 + 因为).",
            keywords: ["喜欢", "觉得", "因为"],
          },
        ],
        hints: [
          "Double-check your **比** sentence: write **巴刹的青菜比超市新鲜** (NO **很** before **新鲜**!).",
          "Include both halves of **虽然…但是…** and **不但…而且…**.",
        ],
        commonError:
          "Writing *比超市很新鲜* (putting **很** inside a **比** comparison).",
      },
    ],
  },
];
