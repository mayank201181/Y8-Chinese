import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "eating-out-m1",
    title: "Paper 1 · Arriving, Ordering & Five Flavours Foundations",
    questions: [
      {
        id: "eating-out-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "entering-seating",
        question: "When you walk into a Chinese restaurant and the server greets you with **「欢迎光临！请问几位？」**, what are they asking?",
        options: [
          "Welcome! How many people are in your party?",
          "Welcome! Would you like to pay by card?",
          "Welcome! Is the food too spicy for you?",
          "Welcome! What time does the restaurant close?",
        ],
        answerIndex: 0,
        hints: ["**几** (*jǐ*) means 'how many', and **位** (*wèi*) is the polite classifier for guests!"],
        explanation:
          "**欢迎光临！** means 'Welcome!' and **请问几位？** politely asks 'How many people (in your group)?' using **位** (*wèi*).",
      },
      {
        id: "eating-out-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "entering-seating",
        question: "What does **小贩中心** (*xiǎofàn zhōngxīn*) mean in Singapore Mandarin?",
        options: [
          "supermarket",
          "hawker centre",
          "hospital",
          "train station",
        ],
        answerIndex: 1,
        hints: ["**小贩** means stall vendor, and **中心** means centre!"],
        explanation:
          "**小贩中心** (*xiǎofàn zhōngxīn*) is a **hawker centre** — Singapore's iconic community dining hub. Supermarket is **超市**, hospital is **医院**, and train/MRT station is **地铁站**.",
      },
      {
        id: "eating-out-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ordering-dishes",
        question: "What is the Mandarin word for **menu**?",
        options: ["买单 (mǎidān)", "简单 (jiǎndān)", "菜单 (càidān)", "收据 (shōujù)"],
        answerIndex: 2,
        hints: ["Combine **菜** (*cài*, dishes) + **单** (*dān*, list)."],
        explanation:
          "**菜单** (*càidān*) means 'menu' (list of dishes). **买单** means 'to pay the bill', **简单** means 'simple', and **收据** means 'receipt'.",
      },
      {
        id: "eating-out-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "five-flavours",
        question: "Match the five Mandarin flavours **酸、甜、苦、辣、咸** in exact order:",
        options: [
          "sweet, sour, spicy, salty, bitter",
          "spicy, salty, sour, bitter, sweet",
          "salty, bitter, sweet, sour, spicy",
          "sour, sweet, bitter, spicy, salty",
        ],
        answerIndex: 3,
        hints: ["Start with **酸** (*suān*, sour like vinegar) and **甜** (*tián*, sweet like sugar)!"],
        explanation:
          "**酸** (*suān*) = sour, **甜** (*tián*) = sweet, **苦** (*kǔ*) = bitter, **辣** (*là*) = spicy, and **咸** (*xián*) = salty.",
      },
      {
        id: "eating-out-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "paying-the-bill",
        question: "At the end of your meal, you call **「服务员，买单！」** What do you want to do?",
        options: [
          "Pay / settle the bill",
          "Order another plate of dumplings",
          "Ask where the washroom is",
          "Cancel the reservation",
        ],
        answerIndex: 0,
        hints: ["**买单** (*mǎidān*) is the universal restaurant phrase equivalent to **结账**!"],
        explanation:
          "**服务员，买单！** (or **结账！**) means 'Waiter, the bill please!' — asking to pay at the end of a meal.",
      },
      {
        id: "eating-out-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "entering-seating",
        question: "Which classifier correctly completes **学校旁边新开了一 ____ 中国饭馆** (*A Chinese restaurant has newly opened next to the school*)?",
        options: ["个 (gè)", "家 (jiā)", "张 (zhāng)", "条 (tiáo)"],
        answerIndex: 1,
        hints: [
          "Think of the classifier used for shops, supermarkets, hotels, companies and restaurants.",
          "Historically, inns and restaurants were family-run courtyards!",
        ],
        explanation:
          "Restaurants, cafés, shops and companies take the classifier **家** (*jiā*): **一家中国饭馆**. **张** is for tables/menus, **条** is for fish/roads, and **个** is unidiomatic for establishments.",
      },
      {
        id: "eating-out-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ordering-dishes",
        question: "Why is *我想点菜一盘炒饭* ungrammatical, and how should you fix it?",
        options: [
          "点菜 can only be used for drinks; say 我想点水一盘炒饭",
          "点菜 already contains the object 菜 ('dishes'), so drop 菜 when naming a dish: 我想点一盘炒饭",
          "一盘 can never go with 炒饭; say 我想点菜一瓶炒饭",
          "想 can never stand before 点; say 我点菜想一盘炒饭",
        ],
        answerIndex: 1,
        hints: [
          "Break **点菜** into its two parts: **点** (order) + **菜** (dishes).",
          "What happens to **菜** when a specific dish (**一盘炒饭**) fills the object slot?",
        ],
        explanation:
          "**点菜** is a separable Verb + Object compound ('order-dishes'). When you name a specific item, it replaces **菜**, so you say **我想点一盘炒饭** (or **来一盘炒饭**).",
      },
      {
        id: "eating-out-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ordering-dishes",
        question: "The waiter asks **「还要别的吗？」** (*Would you like anything else?*). You have ordered plenty for everyone. Which reply is natural and polite?",
        options: [
          "欢迎光临，请坐！",
          "请问你们有几位？",
          "够了，谢谢！",
          "我对花生过敏！",
        ],
        answerIndex: 2,
        hints: [
          "Look for the phrase meaning 'That's enough, thank you!'",
          "**够** (*gòu*) means 'enough'.",
        ],
        explanation:
          "**够了，谢谢！** (*Gòu le, xièxie!*) politely tells the server 'That's enough, thank you!' **欢迎光临** and **请问几位** are things the waiter says upon arrival.",
      },
      {
        id: "eating-out-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "five-flavours",
        question: "Which sentence uses **好吃** and **好喝** with 100% accuracy?",
        options: [
          "小笼包很好喝，酸辣汤很好吃。",
          "小笼包很好吃，酸辣汤也很好吃。",
          "小笼包很好喝，酸辣汤也很好喝。",
          "小笼包很好吃，酸辣汤很好喝。",
        ],
        answerIndex: 3,
        hints: [
          "Match each adjective to its consumption verb: you **吃** (*eat*) soup dumplings, and you **喝** (*drink*) soup!",
          "**汤** (*tāng*) NEVER takes **好吃** in idiomatic Mandarin.",
        ],
        explanation:
          "Solid foods like **小笼包** are **好吃** (*hǎochī*), while all drinks and soups (**酸辣汤**) are **好喝** (*hǎohē*) because Mandarin uses **喝汤**.",
      },
      {
        id: "eating-out-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "five-flavours",
        question: "You cannot handle spicy food well and dislike coriander. What should you tell the server when ordering beef noodles?",
        options: [
          "请多放辣椒，多放香菜。",
          "请不要太辣，也不要放香菜。",
          "请给我来两碗很咸的冰水。",
          "我对米饭很满意，请打包。",
        ],
        answerIndex: 1,
        hints: [
          "'Not too spicy' = **不要太辣**; 'don't put coriander' = **不要放香菜**.",
          "Eliminate **多放** ('put plenty of'), which asks for the exact opposite!",
        ],
        explanation:
          "**请不要太辣，也不要放香菜。** politely asks the kitchen not to make it too spicy and not to add coriander (**香菜**). **多放辣椒** would ask for extra chilli!",
      },
      {
        id: "eating-out-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "paying-the-bill",
        question: "What does **「不好意思，我们只收现金，不能刷卡。」** mean?",
        options: [
          "Sorry, we only accept cards, not cash.",
          "Sorry, we only accept mobile payment, not QR codes.",
          "Sorry, we only accept cash; you cannot pay by card.",
          "Sorry, we have sold out of roast duck today.",
        ],
        answerIndex: 2,
        hints: [
          "**只收** = only accept; **现金** (*xiànjīn*) = cash.",
          "**刷卡** (*shuākǎ*) = swipe/pay by card.",
        ],
        explanation:
          "**只收现金** means 'only accept cash', and **不能刷卡** means 'cannot pay by card'.",
      },
      {
        id: "eating-out-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "paying-the-bill",
        question: "Your family ordered too much food and wants to take the remaining dishes home in boxes. Which verb do you use?",
        options: ["排队 (páiduì)", "点菜 (diǎncài)", "刷卡 (shuākǎ)", "打包 (dǎbāo)"],
        answerIndex: 3,
        hints: [
          "Think of the Singlish word *dabao / tapao*!",
          "Literally 'wrap into a packet/bundle'.",
        ],
        explanation:
          "**打包** (*dǎbāo*) means to pack up leftover food or order takeaway. **排队** is queueing, **点菜** is ordering, and **刷卡** is paying by card.",
      },
      {
        id: "eating-out-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "restaurant-review",
        question: "Look carefully at the pronunciation of **便宜** (*cheap / good value*). Which Pinyin is right?",
        options: ["piányi", "biànyi", "piānyí", "fāngbiàn"],
        answerIndex: 0,
        hints: [
          "**便** is a multi-reading character (*duōyīnzì*): it is *biàn* in **方便** (convenient), but changes initial consonant in **便宜**!",
          "Second tone on the first syllable, neutral tone on the second.",
        ],
        explanation:
          "**便宜** ('inexpensive / cheap') is pronounced **piányi** (2nd tone + neutral tone), never *biànyi*!",
      },
      {
        id: "eating-out-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "entering-seating",
        question: "Choose the sentence that uses **坐** and **座** with 100% character accuracy:",
        options: [
          "服务员说：「那边有一个空坐位，请座！」",
          "服务员说：「那边有一个空座位，请坐！」",
          "服务员说：「那边有一个空座位，请座！」",
          "服务员说：「那边有一个空坐位，请坐！」",
        ],
        answerIndex: 1,
        hints: [
          "**座位** ('seat') is a noun under a roof, so it needs the shelter radical **广** (**座**).",
          "**请坐** ('please sit') is an action verb, so it uses bare **坐** (two people **人人** on earth **土**)!",
        ],
        explanation:
          "**座位** (*zuòwèi*, seat — noun) requires **座** with **广**, while **请坐** (*qǐng zuò*, please sit — verb) requires **坐** without **广**.",
      },
      {
        id: "eating-out-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "restaurant-review",
        question: "Read the review snippet:\n**「这家上海餐厅虽然要排队，但是小笼包又香又好吃，服务员也很热情，我们都很满意！」**\nWhat was the ONLY downside mentioned about the restaurant?",
        options: [
          "The soup dumplings were cold and salty",
          "The servers were rude and slow",
          "You had to queue up",
          "The prices were far too expensive",
        ],
        answerIndex: 2,
        hints: [
          "Look inside the **虽然……** ('Although…') clause right at the start!",
          "**排队** (*páiduì*) means to queue / stand in line.",
        ],
        explanation:
          "The **虽然** clause concedes one drawback — **要排队** ('you have to queue up') — before praising the delicious soup dumplings (**又香又好吃**) and warm staff (**服务员也很热情**).",
      },
    ],
  },
  {
    id: "eating-out-m2",
    title: "Paper 2 · Ordering Nuances, Allergies & Settling the Bill",
    questions: [
      {
        id: "eating-out-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "entering-seating",
        question: "In Singapore Mandarin, how does an indoor air-conditioned mall **食阁** (*shígé*) differ from an open-air **小贩中心** (*xiǎofàn zhōngxīn*)?",
        options: [
          "食阁 is an indoor mall food court, whereas 小贩中心 is an open-air community hawker centre",
          "食阁 only sells raw vegetables, whereas 小贩中心 only sells Western steak",
          "食阁 means hospital canteen, whereas 小贩中心 means school library",
          "食阁 means hotel bedroom, whereas 小贩中心 means airport gate",
        ],
        answerIndex: 0,
        hints: ["Think of Food Republic inside an Orchard Road mall (**食阁**) vs Maxwell Food Centre (**小贩中心**)!"],
        explanation:
          "In Singapore, **食阁** (*shígé*) refers to an indoor air-conditioned food court (usually inside a shopping mall), whereas **小贩中心** (*xiǎofàn zhōngxīn*) is an open-air hawker centre.",
      },
      {
        id: "eating-out-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ordering-dishes",
        question: "The dumplings are so tasty that your family wants **one more plate**. What do you say to the server?",
        options: [
          "不要一盘饺子！",
          "再来一盘饺子！",
          "买单一盘饺子！",
          "找钱一盘饺子！",
        ],
        answerIndex: 1,
        hints: ["Put **再** (*zài*, again / another) right before the ordering verb **来**!"],
        explanation:
          "**再来一盘饺子！** (*Zài lái yī pán jiǎozi!*) idiomatically asks the server to 'Bring another plate of dumplings!'",
      },
      {
        id: "eating-out-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "five-flavours",
        question: "Unsweetened black coffee (**黑咖啡**) and bitter gourd (**苦瓜**) both have which flavour?",
        options: ["甜 (tián)", "酸 (suān)", "咸 (xián)", "苦 (kǔ)"],
        answerIndex: 3,
        hints: ["Look at the first character of **苦瓜** (*kǔguā*, bitter gourd)!"],
        explanation:
          "**苦** (*kǔ*) means 'bitter'. **甜** is sweet, **酸** is sour, and **咸** is salty.",
      },
      {
        id: "eating-out-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "paying-the-bill",
        question: "What does **扫码** (*sǎomǎ*) mean on a restaurant table sticker?",
        options: [
          "wash your hands",
          "mind your step",
          "scan the QR code",
          "no smoking",
        ],
        answerIndex: 2,
        hints: ["Often seen in **扫码点菜** (order via phone) and **扫码支付** (pay via phone)!"],
        explanation:
          "**扫码** (*sǎomǎ*, short for **扫描二维码**) means 'to scan the QR code' to view the menu, order, or pay.",
      },
      {
        id: "eating-out-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "five-flavours",
        question: "How do you tell a waiter in natural Mandarin: *'I am allergic to peanuts'*?",
        options: [
          "我对花生过敏。",
          "我是过敏给花生。",
          "我吃素花生过敏。",
          "花生对我很满意。",
        ],
        answerIndex: 0,
        hints: [
          "Recall the Mandarin allergy frame: **Subject + 对 + [Allergen] + 过敏**.",
          "Never use **是** or **给** with **过敏**!",
        ],
        explanation:
          "Mandarin expresses allergies with **对 + Allergen + 过敏**: **我对花生过敏。** (*Wǒ duì huāshēng guòmǐn.*)",
      },
      {
        id: "eating-out-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ordering-dishes",
        question: "Which measure word specifically counts **courses / cooked dishes** ordered for the table — e.g. **我们一共点了四 ____ 菜**?",
        options: ["位 (wèi)", "家 (jiā)", "双 (shuāng)", "道 (dào)"],
        answerIndex: 3,
        hints: [
          "**位** counts guests, **家** counts restaurants, and **双** counts chopsticks.",
          "Think of **这道菜很好吃** ('This dish is delicious')!",
        ],
        explanation:
          "**道** (*dào*) is the measure word for restaurant courses or cooked dishes: **四道菜** (four dishes), **这道特色菜** (this signature dish).",
      },
      {
        id: "eating-out-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "five-flavours",
        question: "Grandad prefers Cantonese steamed fish and light vegetable broth rather than heavy, oily, salty food. Which adjective describes his preferred flavour profile?",
        options: [
          "清淡 (qīngdàn)",
          "麻辣 (málà)",
          "油腻 (yóunì)",
          "太咸 (tài xián)",
        ],
        answerIndex: 0,
        hints: [
          "Notice the soothing three-dot water radical **氵** in both characters!",
          "It is the opposite of heavy/greasy (**油腻**) and fiery (**麻辣**).",
        ],
        explanation:
          "**清淡** (*qīngdàn*) means light, mild and gently seasoned — neither oily nor overly salty or spicy.",
      },
      {
        id: "eating-out-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "five-flavours",
        question: "In English we say *'sweet and sour pork'*. How does Mandarin order those two flavours?",
        options: [
          "甜咸猪肉 (sweet-salty pork)",
          "苦辣猪肉 (bitter-spicy pork)",
          "酸甜猪肉 (sour-sweet pork)",
          "咸酸猪肉 (salty-sour pork)",
        ],
        answerIndex: 2,
        hints: [
          "Think of the fixed order of the Five Flavours: **酸、甜、苦、辣、咸**!",
          "Which comes first in Mandarin — **酸** or **甜**?",
        ],
        explanation:
          "Mandarin reverses the English pair and says **酸甜** (*suāntián*, literally 'sour-sweet'), matching the traditional **酸甜苦辣咸** sequence!",
      },
      {
        id: "eating-out-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "paying-the-bill",
        question: "The server says: **「一共七十六块，您给我一百块，找您二十四块。」** What does **找您二十四块** mean?",
        options: [
          "You still owe me 24 dollars",
          "Here is 24 dollars in change for you",
          "Please look for 24 dollars on the floor",
          "The service charge is 24 dollars",
        ],
        answerIndex: 1,
        hints: [
          "Check the maths: 100 − 76 = 24!",
          "In payment dialogues, **找 (钱)** means 'to give change'.",
        ],
        explanation:
          "When paying cash, **找您二十四块** means 'Here is 24 yuan/dollars change for you' (100 paid minus 76 total = 24 change).",
      },
      {
        id: "eating-out-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "paying-the-bill",
        question: "It is pouring with rain outside (**下大雨**), so instead of going out to a restaurant, you use an app on your phone to have food delivered home. What is this called?",
        options: [
          "点外卖 (diǎn wàimài)",
          "欢迎光临 (huānyíng guānglín)",
          "去排队 (qù páiduì)",
          "看菜单 (kàn càidān)",
        ],
        answerIndex: 0,
        hints: [
          "**外** = outside, **卖** = sell/deliver.",
          "Contrast **打包** (packing food in person at the restaurant) with ordering delivery to your home!",
        ],
        explanation:
          "**点外卖** (*diǎn wàimài*, or **叫外卖**) means ordering food delivery to your home or office.",
      },
      {
        id: "eating-out-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "restaurant-review",
        question: "Which sentence correctly uses **又…又…** to praise a hawker stall?",
        options: [
          "这家摊位的鸡饭是便宜和好吃。",
          "这家摊位的鸡饭又便宜又好吃！",
          "这家摊位的鸡饭又便宜但是好吃！",
          "这家摊位的鸡饭便宜和又是好吃！",
        ],
        answerIndex: 1,
        hints: [
          "Mandarin NEVER joins two bare adjectives with **和** or puts **是** before them.",
          "Use the twin frame **又 + Adj 1 + 又 + Adj 2**!",
        ],
        explanation:
          "**这家摊位的鸡饭又便宜又好吃！** ('This stall's chicken rice is both cheap and delicious!') uses **又…又…** idiomatically without **是** or **和**.",
      },
      {
        id: "eating-out-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "entering-seating",
        question: "You want the waiter to recommend the restaurant's best signature dish. Which question should you ask?",
        options: [
          "请问洗手间在哪里？",
          "请问这里可以刷卡吗？",
          "请问你们有什么特色菜？",
          "请问一共多少钱？",
        ],
        answerIndex: 2,
        hints: [
          "Look for the noun meaning 'house speciality / signature dish': **特色菜** (*tèsècài*).",
          "Eliminate questions about the washroom, card payment, or total price.",
        ],
        explanation:
          "**请问你们有什么特色菜？** (*Excuse me, what signature dishes do you have?*) asks the server for house specialities.",
      },
      {
        id: "eating-out-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "paying-the-bill",
        question: "Read the itemized bill at a Beijing restaurant:\n**北京烤鸭：128元 · 清蒸鱼：62元 · 炒青菜：24元 · 米饭（四碗）：每碗3元 · 酸梅汤（一壶）：18元**\nWhat is the grand total (**一共多少钱**)?",
        options: ["232元", "235元", "244元", "256元"],
        answerIndex: 2,
        hints: [
          "Watch **米饭（四碗）：每碗3元** — there are 4 bowls at 3元 each (4 × 3 = 12元)!",
          "Add 128 + 62 + 24 + 12 + 18 carefully.",
        ],
        explanation:
          "128 (烤鸭) + 62 (蒸鱼) + 24 (青菜) + 12 (4 × 3元 rice) + 18 (酸梅汤) = 190 + 24 + 12 + 18 = **244元**.",
      },
      {
        id: "eating-out-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "five-flavours",
        question: "Read the group's dietary notes before ordering:\n- **奶奶吃素。**\n- **妹妹不能吃辣，而且对海鲜过敏。**\nWhich shared dish can **BOTH** Grandma and Younger Sister eat safely?",
        options: [
          "麻辣炒虾 (numbing-spicy stir-fried prawns)",
          "清炒青菜豆腐 (lightly stir-fried greens and tofu)",
          "酸辣牛肉汤 (hot-and-sour beef soup)",
          "清蒸鱼 (steamed fish)",
        ],
        answerIndex: 1,
        hints: [
          "Grandma is vegetarian (**吃素** → no beef, prawns, or fish!).",
          "Younger Sister cannot eat spicy food (**不能吃辣**) and is allergic to seafood (**对海鲜过敏**).",
        ],
        explanation:
          "**清炒青菜豆腐** (lightly stir-fried greens and tofu) contains no meat, no seafood, and no chilli — making it completely safe for both Grandma (**吃素**) and Younger Sister (**不能吃辣、对海鲜过敏**).",
      },
      {
        id: "eating-out-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "restaurant-review",
        question: "Which sentence correctly uses **不但…而且…** when BOTH clauses share the same subject (**这家餐厅的菜**)?",
        options: [
          "这家餐厅的菜不但好吃，而且不贵。",
          "不但这家餐厅的菜好吃，但是不贵。",
          "这家餐厅的菜虽然好吃，而且不贵。",
          "这家餐厅的菜不但好吃，所以很贵。",
        ],
        answerIndex: 0,
        hints: [
          "**不但** (*bùdàn*, not only) ALWAYS pairs with **而且** (*érqiě*, but also) — never with *但是* or *所以*!",
          "When there is only ONE subject, place the subject BEFORE **不但**: **Subject + 不但…，而且…**.",
        ],
        explanation:
          "**这家餐厅的菜不但好吃，而且不贵。** pairs **不但** with **而且** and places the shared subject (**这家餐厅的菜**) cleanly in front of **不但**.",
      },
    ],
  },
  {
    id: "eating-out-m3",
    title: "Paper 3 · Radicals, Cultural Idioms & IGCSE Restaurant Reading",
    questions: [
      {
        id: "eating-out-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ordering-dishes",
        question: "In **我要一份海南鸡饭** (*Wǒ yào yī fèn Hǎinán jīfàn*), what does **份** (*fèn*) mean?",
        options: ["bottle", "pair", "portion / serving", "restaurant"],
        answerIndex: 2,
        hints: ["Also used in **一份套餐** (one set meal)!"],
        explanation:
          "**份** (*fèn*) is the versatile restaurant measure word meaning 'portion / serving / order'.",
      },
      {
        id: "eating-out-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "five-flavours",
        question: "Which kitchen seasoning makes a dish taste **咸** (*xián*, salty)?",
        options: ["糖 (táng, sugar)", "醋 (cù, vinegar)", "冰 (bīng, ice)", "盐 (yán, salt)"],
        answerIndex: 3,
        hints: ["Remember the healthy kitchen request **少放盐**!"],
        explanation:
          "**盐** (*yán*, salt — alongside **酱油** soya sauce) makes food salty (**咸**). **糖** makes food sweet (**甜**), and **醋** makes food sour (**酸**).",
      },
      {
        id: "eating-out-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "paying-the-bill",
        question: "Which word is the standard Mandarin synonym of **买单** (*mǎidān*, pay the bill)?",
        options: ["结账 (jiézhàng)", "点菜 (diǎncài)", "请坐 (qǐng zuò)", "慢用 (mànyòng)"],
        answerIndex: 0,
        hints: ["Look for **账** (*zhàng*, bill/account) with the money/shell radical **贝**!"],
        explanation:
          "**结账** (*jiézhàng*) means 'to settle the bill / check out', synonymous with **买单**.",
      },
      {
        id: "eating-out-m3-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "restaurant-review",
        question: "What does **服务员很热情** (*Fúwùyuán hěn rèqíng*) praise about a restaurant?",
        options: [
          "The air-conditioning is broken and the room is too hot",
          "The servers are very warm, welcoming and helpful",
          "The dishes are extremely spicy",
          "The restaurant is right next to the MRT station",
        ],
        answerIndex: 1,
        hints: ["**热** (warm) + **情** (feeling/attitude) describes friendly hospitality, not room temperature!"],
        explanation:
          "**热情** (*rèqíng*) means warm, welcoming and enthusiastic — a classic compliment for polite **服务员**.",
      },
      {
        id: "eating-out-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "five-flavours",
        question: "Why do **酸** (*suān*, sour), **醋** (*cù*, vinegar), and **酱** (*jiàng*, fermented sauce) all contain the radical **酉** (*yǒu*)?",
        options: [
          "Because 酉 depicts a clay jar used for fermenting grain into wine, vinegar and sauces",
          "Because 酉 means deep-frying in boiling oil",
          "Because 酉 pictures a pair of silver chopsticks",
          "Because 酉 is only used for sweet fruit desserts",
        ],
        answerIndex: 0,
        hints: [
          "Compare **酒** (*jiǔ*, alcohol/wine = water **氵** + **酉**)!",
          "What happens when wine ferments longer in a jar?",
        ],
        explanation:
          "**酉** depicts an ancient amphora/fermentation vessel. Fermenting grain creates **酒** (wine), **醋** (vinegar — which tastes **酸** sour!), and **酱油** (soya sauce).",
      },
      {
        id: "eating-out-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "paying-the-bill",
        question: "Why do **贵** (*guì*, expensive) and **账** (*zhàng*, bill/account) both contain the component **贝** (*bèi*)?",
        options: [
          "Because 贝 means 'seafood restaurant'",
          "Because cowrie shells (贝) were used as money in ancient China",
          "Because 贝 represents a wooden dining table",
          "Because 贝 is the phonetic sound *guì*",
        ],
        answerIndex: 1,
        hints: [
          "**贝** originally pictures a sea shell (*cowrie shell*).",
          "Think of other **贝** characters like **财** (wealth) and **费** (fee/cost)!",
        ],
        explanation:
          "In Shang and Zhou dynasty China, rare cowrie shells (**贝**) served as currency — so characters relating to price, bills and money (**贵**, **账**, **财**, **费**) carry the **贝** radical!",
      },
      {
        id: "eating-out-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ordering-dishes",
        question: "You order bubble tea in Singapore or Taipei and say: **「来一杯珍珠奶茶，少糖、不加冰。」** How will your drink be made?",
        options: [
          "Extra sugar and extra ice",
          "No milk and boiling hot",
          "Less sugar and no ice added",
          "Salty cheese foam with chilli",
        ],
        answerIndex: 2,
        hints: [
          "**少糖** = less sugar.",
          "**加** (*jiā*) = to add, so **不加冰** = do not add ice!",
        ],
        explanation:
          "**少糖** means 'less sugar' and **不加冰** means 'no ice added'.",
      },
      {
        id: "eating-out-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "entering-seating",
        question: "Put this doorway conversation into logical chronological order:\n**① 这边请坐，这是菜单。  ② 欢迎光临！请问几位？  ③ 谢谢！我们可以先点两壶茶吗？  ④ 我们有五位，靠窗户有座位吗？**",
        options: [
          "② → ④ → ① → ③",
          "④ → ② → ③ → ①",
          "① → ③ → ② → ④",
          "③ → ① → ④ → ②",
        ],
        answerIndex: 0,
        hints: [
          "Who speaks first when you step through the restaurant door?",
          "Match Question **请问几位？** (②) directly to Answer **我们有五位……** (④)!",
        ],
        explanation:
          "First the server greets and asks party size (②), the guest answers 5 people and asks for a window seat (④), the server seats them and hands over the menu (①), and the guest thanks them and orders tea (③).",
      },
      {
        id: "eating-out-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "five-flavours",
        question: "Look at the character **甜** (*tián*, sweet): **舌 + 甘**. How do those two parts explain its meaning?",
        options: [
          "Fire (火) roasting sweet potatoes",
          "Tongue (舌) tasting something sweet/pleasant (甘)",
          "Water (氵) dissolving white salt",
          "Hands (手) wrapping a dumpling",
        ],
        answerIndex: 1,
        hints: [
          "**舌** (*shé*) is the body part inside your mouth that tastes flavours!",
          "**甘** (*gān*) means sweet.",
        ],
        explanation:
          "**甜** is an associative compound (*huìyìzì*) combining **舌** (tongue) + **甘** (sweet) — tasting sweetness on your tongue.",
      },
      {
        id: "eating-out-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "restaurant-review",
        question: "Complete the sentence idiomatically: **全家人 ____ 这家西餐厅的环境和服务都很满意。**",
        options: ["给 (gěi)", "在 (zài)", "跟 (gēn)", "对 (duì)"],
        answerIndex: 3,
        hints: [
          "Recall the fixed preposition used with **满意** ('satisfied with…') and **感兴趣** ('interested in…')!",
          "Pattern: **Subject + ____ + Target + 很满意**.",
        ],
        explanation:
          "'To be satisfied with…' uses **对**: **对……很满意** (*duì … hěn mǎnyì*). Never use *给* or *在* here.",
      },
      {
        id: "eating-out-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ordering-dishes",
        question: "Which sentence uses the separable verb **排队** (*páiduì*, to queue) or **点菜** (*diǎncài*, to order) with 100% native grammar?",
        options: [
          "我们排队了半个小时在门口。",
          "我们在门口排了半个小时的队，才吃上这盘鸡饭。",
          "我们点菜了四道特色菜和两碗汤。",
          "服务员，我们已经点菜完了三个菜。",
        ],
        answerIndex: 1,
        hints: [
          "**排队** is Verb (**排**) + Object (**队**), so duration (**半个小时**) slips INSIDE between **排** and **队**!",
          "Also check STPV: **在门口** must come BEFORE the verb, and **点菜** drops **菜** before **四道特色菜**.",
        ],
        explanation:
          "Because **排队** is a separable verb-object compound, duration goes right after **排**: **在门口排了半个小时的队** ('queued at the entrance for half an hour'). The others fail on STPV, separable duration, or keeping **菜** before a specific dish count.",
      },
      {
        id: "eating-out-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "paying-the-bill",
        question: "Read the notice on a restaurant counter in Shanghai:\n**「本店支持扫码点菜与手机支付；如需纸质菜单或用现金结账，请找服务员。满100元送酸梅汤一扎！」**\nWhich statement is TRUE according to the notice?",
        options: [
          "Customers are banned from paying with cash",
          "Paper menus are unavailable under any circumstances",
          "You must pay an extra 100 RMB fee to scan the QR code",
          "If you spend 100 RMB or more, you get a complimentary jug of sour-plum drink",
        ],
        answerIndex: 3,
        hints: [
          "**如需……请找服务员** means 'if you need [a paper menu or cash payment], please ask a waiter' — so neither is banned!",
          "Look at the final promotion: **满100元送酸梅汤一扎** (**送** = give free of charge).",
        ],
        explanation:
          "**满100元送酸梅汤一扎** means orders reaching 100元 receive a free jug of **酸梅汤** (sour-plum drink). Paper menus (**纸质菜单**) and cash (**现金**) are still available upon asking a server.",
      },
      {
        id: "eating-out-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "restaurant-review",
        question: "Read two online reviews of **老北京饺子馆**:\n- **小李**：「饺子皮薄馅大，非常香！就是周末人太多，等了四十分钟才有座位。」\n- **小陈**：「价格很便宜，一个人二十五块钱就能吃饱，下次一定再来！」\nWhat do Xiao Li and Xiao Chen agree on overall?",
        options: [
          "Both had a positive view of the food/value, though Xiao Li noted a 40-minute wait for a seat at weekends",
          "Both complained that the dumplings were overpriced and tiny",
          "Both said the restaurant was completely empty on weekends",
          "Both vowed never to return to the restaurant again",
        ],
        answerIndex: 0,
        hints: [
          "Xiao Li says **非常香！** (super fragrant/tasty) with one minor caveat (**就是周末人太多，等了四十分钟才有座位**).",
          "Xiao Chen praises **价格很便宜** (very cheap — 25 yuan fills you up) and says **下次一定再来！**",
        ],
        explanation:
          "Xiao Li loved the dumplings despite waiting 40 minutes for a weekend seat, and Xiao Chen praised the great value (25 yuan to eat one's fill) and promised to return.",
      },
      {
        id: "eating-out-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "five-flavours",
        question: "In Mandarin, people often talk about experiencing **生活的酸甜苦辣** (*shēnghuó de suān tián kǔ là*). What does this idiom mean figuratively?",
        options: [
          "Buying four bottles of kitchen sauces at the supermarket",
          "All the joys, sorrows, ups and downs of life",
          "Only eating vegetarian food on Mondays",
          "Working part-time as a chef in Sichuan",
        ],
        answerIndex: 1,
        hints: [
          "**生活** (*shēnghuó*) means 'life'.",
          "Think about what **甜** (sweetness = happy times) and **苦 / 酸** (bitterness / heartache = tough times) symbolise!",
        ],
        explanation:
          "**生活的酸甜苦辣** uses the flavours sour, sweet, bitter and spicy metaphorically to mean 'the joys and sorrows / ups and downs of life'.",
      },
      {
        id: "eating-out-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "paying-the-bill",
        question: "Four friends eat hotpot together. The food costs **168元**, four drinks cost **8元 each**, and they use a **20元 discount voucher** (**优惠券减20元**) before splitting the final bill equally among the **4** friends. How much does EACH friend pay?",
        options: ["37元", "42元", "50元", "45元"],
        answerIndex: 3,
        hints: [
          "Step 1: Total before discount = 168 + (4 × 8) = 200元.",
          "Step 2: Subtract the 20元 discount (**减20元**), then divide by 4!",
        ],
        explanation:
          "Food + drinks = 168 + 32 = 200元. Minus the 20元 voucher = 180元. Divided equally among 4 friends: 180 ÷ 4 = **45元** each.",
      },
    ],
  },
];
