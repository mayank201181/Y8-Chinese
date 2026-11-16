import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "three-meals-m1",
    title: "Paper 1 · Three Meals, Staples & Drinks Foundations",
    questions: [
      {
        id: "three-meals-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "meals-staples",
        question: "What does **午饭** (*wǔfàn*) mean in English?",
        options: ["breakfast", "lunch", "dinner", "late-night snack"],
        answerIndex: 1,
        hints: ["Remember **午** (*wǔ*) means 'noon' (as in **中午**, midday)."],
        explanation:
          "**午饭** (*wǔfàn*) means 'lunch' because **午** refers to midday. **早饭** is breakfast, **晚饭** is dinner, and **夜宵** is a late-night snack.",
      },
      {
        id: "three-meals-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "meals-staples",
        question: "Which Mandarin word means 'dumplings'?",
        options: ["面条 (miàntiáo)", "面包 (miànbāo)", "饺子 (jiǎozi)", "米饭 (mǐfàn)"],
        answerIndex: 2,
        hints: ["Look for the food radical **饣** on the first character and **子** (*zi*) on the second."],
        explanation:
          "**饺子** (*jiǎozi*) means 'dumplings'. **面条** is noodles, **面包** is bread, and **米饭** is cooked rice.",
      },
      {
        id: "three-meals-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "meats-dishes",
        question: "Following Mandarin's **Animal + 肉** pattern, what is **牛肉** (*niúròu*)?",
        options: ["牛肉 = beef", "牛肉 = pork", "牛肉 = lamb", "牛肉 = chicken"],
        answerIndex: 0,
        hints: ["**牛** (*niú*) means cow/ox, and **肉** (*ròu*) means meat."],
        explanation:
          "**牛** (cow/ox) + **肉** (meat) = **牛肉** (beef). Pork is **猪肉**, lamb is **羊肉**, and chicken is **鸡肉**.",
      },
      {
        id: "three-meals-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "drinks-containers",
        question: "Which verb MUST pair with **汤** (*tāng*, soup) in Mandarin?",
        options: ["吃 (chī)", "穿 (chuān)", "打 (dǎ)", "喝 (hē)"],
        answerIndex: 3,
        hints: ["In Mandarin you sip soup like a drink rather than 'eating' it!"],
        explanation:
          "Mandarin always uses **喝** (*hē*, to drink) with soup: **喝汤** (*hē tāng*). Saying *吃汤* is an English-transfer mistake.",
      },
      {
        id: "three-meals-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "hungry-thirsty-full",
        question: "Look at the left-hand radicals of **喝** and **渴**. Which pair is completely accurate?",
        options: [
          "喝 = thirsty; 渴 = to drink",
          "喝 = hungry; 渴 = full",
          "喝 = to drink (mouth 口); 渴 = thirsty (water 氵)",
          "喝 = to eat (mouth 口); 渴 = soup (water 氵)",
        ],
        answerIndex: 2,
        hints: ["**口** is a mouth; **氵** is three drops of water."],
        explanation:
          "**喝** (*hē*) has the mouth radical **口** because you drink with your mouth, whereas **渴** (*kě*) has the water radical **氵** because when you are thirsty you need water.",
      },
      {
        id: "three-meals-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "meals-staples",
        question: "Which sentence naturally translates *'I eat bread and an egg for breakfast'*?",
        options: [
          "我早饭吃面包和一个鸡蛋。",
          "我吃面包和一个鸡蛋给早饭。",
          "我有早饭面包和一个鸡蛋。",
          "我早饭喝面包和一个鸡蛋。",
        ],
        answerIndex: 0,
        hints: [
          "Mandarin does NOT translate 'for' with **给** (*gěi*) when naming a meal.",
          "Place the mealtime noun right before the verb **吃**: Subject + **早饭** + **吃** + Food.",
        ],
        explanation:
          "**我早饭吃面包和一个鸡蛋。** follows natural Mandarin order (Subject + Meal + **吃** + Object). *给早饭* translates English 'for' literally, *有早饭* misuses **有** for 'have a meal', and **喝** means 'to drink'.",
      },
      {
        id: "three-meals-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "meats-dishes",
        question: "Mum bought one whole fish at the market to steam for dinner. How do you say 'one fish'?",
        options: ["一个鱼", "一只鱼", "一条鱼", "一件鱼"],
        answerIndex: 2,
        hints: [
          "Think about the long, flexible shape of a fish.",
          "Which classifier is shared by fish, trousers, rivers and roads?",
        ],
        explanation:
          "Whole fish take the long, flexible classifier **条** (*tiáo*): **一条鱼** (*yī tiáo yú*). **个** is generic, **只** is for small animals/birds/prawns, and **件** is for tops/matters.",
      },
      {
        id: "three-meals-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "drinks-containers",
        question: "How do you say 'two glasses of green tea' in accurate Mandarin and Pinyin?",
        options: [
          "二杯绿茶 (èr bēi lǜchá)",
          "两碗绿茶 (liǎng wǎn lùchá)",
          "两瓶绿茶 (liǎng píng lǜchá)",
          "两杯绿茶 (liǎng bēi lǜchá)",
        ],
        answerIndex: 3,
        hints: [
          "Before a measure word, '2' must be **两** (*liǎng*), never **二**.",
          "'Glass/cup' is **杯** (*bēi*), and **绿** has the **ü** fourth-tone vowel *lǜ*.",
        ],
        explanation:
          "**两杯绿茶** (*liǎng bēi lǜchá*) uses **两** before the cup/glass classifier **杯** and spells *lǜchá* with **ü**. *二杯* breaks the **两** rule, **瓶** means 'bottle', and **碗** means 'bowl'.",
      },
      {
        id: "three-meals-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hungry-thirsty-full",
        question: "Grandma offers you a third bowl of rice, but you cannot eat another bite. What is the politest, most natural reply?",
        options: [
          "谢谢奶奶，我已经吃饱了！",
          "谢谢奶奶，我是很饱！",
          "奶奶，我很饿了！",
          "奶奶，不要米饭！",
        ],
        answerIndex: 0,
        hints: [
          "You want to thank Grandma first (**谢谢奶奶**) and say you are already full.",
          "Remember 'full from eating' is **吃饱了** (*chībǎo le*), never *是饱*.",
        ],
        explanation:
          "**谢谢奶奶，我已经吃饱了！** ('Thank you Grandma, I am already full!') is warm and grammatically spot-on. *我是很饱* wrongly puts **是** before an adjective, **我很饿了** means 'hungry', and *不要米饭* sounds abrupt.",
      },
      {
        id: "three-meals-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "healthy-balanced-diet",
        question: "Which sentence gives grammatically natural healthy-diet advice in Mandarin?",
        options: [
          "我们应该吃多水果，喝少可乐。",
          "我们应该多吃水果，少喝可乐。",
          "我们应该水果多吃，可乐少喝了。",
          "我们应该多喝水果，少吃可乐。",
        ],
        answerIndex: 1,
        hints: [
          "Where do **多** (*duō*, more) and **少** (*shǎo*, less) sit relative to the verb?",
          "Check that **吃** pairs with solid fruit and **喝** pairs with liquid cola!",
        ],
        explanation:
          "**我们应该多吃水果，少喝可乐。** places **多** and **少** right BEFORE the verbs **吃** and **喝**. *吃多水果 / 喝少可乐* copies English word order, and *多喝水果* mixes up eat vs drink.",
      },
      {
        id: "three-meals-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "meats-dishes",
        question: "What do the four dots **灬** at the bottom of **煮** (*zhǔ*, boil) and **蒸** (*zhēng*, steam) represent?",
        options: [
          "Four drops of cold rain",
          "Four grains of uncooked rice",
          "Fire / flames underneath a cooking pot",
          "Four pairs of chopsticks on a table",
        ],
        answerIndex: 2,
        hints: [
          "Think about what heats water inside a pot to boil noodles or steam fish.",
          "**灬** is the compressed bottom form of the character **火** (*huǒ*).",
        ],
        explanation:
          "The four-dot radical **灬** (*sìdiǎndǐ*) is a variant of **火** (fire), picturing flames burning underneath a pot to boil (**煮**) or steam (**蒸**) food.",
      },
      {
        id: "three-meals-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "drinks-containers",
        question: "Match the three items to their most natural container measure words: **__炒饭**, **__汤**, **__牛奶 (carton)**.",
        options: [
          "一盘炒饭 · 一碗汤 · 一盒牛奶",
          "一瓶炒饭 · 一杯汤 · 一双牛奶",
          "一盒炒饭 · 一盘汤 · 一条牛奶",
          "一碗炒饭 · 一瓶汤 · 一盘牛奶",
        ],
        answerIndex: 0,
        hints: [
          "Fried rice is served on a flat plate (**盘**), soup in a deep bowl (**碗**), and school milk in a carton (**盒**).",
          "Eliminate any option that puts soup on a plate (**盘**) or in a bottle (**瓶**).",
        ],
        explanation:
          "**一盘炒饭** (a plate of fried rice), **一碗汤** (a bowl of soup), and **一盒牛奶** (a carton of milk) match each food or drink with its real-life container.",
      },
      {
        id: "three-meals-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "meals-staples",
        question: "In Singapore, families and teens often head to a hawker centre at 10:30 p.m. for a late-night meal. What is this meal called?",
        options: ["早餐 (zǎocān)", "午餐 (wǔcān)", "甜点 (tiándiǎn)", "夜宵 (yèxiāo)"],
        answerIndex: 3,
        hints: [
          "Look for the character **夜** (*yè*), which means 'night'.",
          "**甜点** means dessert, regardless of the time of day.",
        ],
        explanation:
          "**夜宵** (*yèxiāo*) means a late-night snack or supper (**夜** = night). **早餐** is breakfast, **午餐** is lunch, and **甜点** is dessert.",
      },
      {
        id: "three-meals-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "healthy-balanced-diet",
        question: "Read Mei Ling's diary: **「我以前每天都喝一杯珍珠奶茶，妈妈说奶茶里的糖太多了，对身体不好。现在我每天带一瓶水去学校，一个星期只喝一次奶茶。」** How many times a week does Mei Ling drink bubble tea NOW?",
        options: [
          "Every day (7 times a week)",
          "Once a week",
          "Never — she stopped completely",
          "Twice a week",
        ],
        answerIndex: 1,
        hints: [
          "Distinguish **以前** (*yǐqián*, previously/before) from **现在** (*xiànzài*, now).",
          "Read the final clause carefully: **一个星期只喝一次奶茶**.",
        ],
        explanation:
          "**以前** ('previously') she drank bubble tea every day, but **现在** ('now') **一个星期只喝一次奶茶** means she only (**只**) drinks bubble tea **once a week** (**一次**).",
      },
      {
        id: "three-meals-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hungry-thirsty-full",
        question: "Which sentence contains NO grammar or vocabulary errors?",
        options: [
          "弟弟踢完足球以后，他是很渴，想喝二瓶冰水。",
          "姐姐用一双筷子吃了一碗牛肉面。",
          "爸爸今天早上在七点有了早饭。",
          "奶奶做了一条蒸鸡肉和两碗吃汤。",
        ],
        answerIndex: 1,
        hints: [
          "Check every sentence for classic traps: *是 + adjective*, *二 + classifier*, *有 + meal*, and wrong classifiers/verbs!",
          "**筷子** takes **双**, and **牛肉面** takes **碗**.",
        ],
        explanation:
          "**姐姐用一双筷子吃了一碗牛肉面。** is 100% natural: **一双筷子** (a pair of chopsticks) and **一碗牛肉面** (a bowl of beef noodles). The other choices fail on *是很渴* + *二瓶*, *有了早饭* + *在七点*, and *一条蒸鸡肉* + *吃汤*.",
      },
    ],
  },
  {
    id: "three-meals-m2",
    title: "Paper 2 · Dishes, Classifiers & Mealtime Dialogues",
    questions: [
      {
        id: "three-meals-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "meals-staples",
        question: "What is **粥** (*zhōu*)?",
        options: [
          "congee / rice porridge",
          "egg fried rice",
          "steamed stuffed bun",
          "sandwich",
        ],
        answerIndex: 0,
        hints: ["Look inside **粥** — the character **米** (rice) sits right in the middle!"],
        explanation:
          "**粥** (*zhōu*) is congee / rice porridge. Egg fried rice is **蛋炒饭**, steamed stuffed bun is **包子**, and sandwich is **三明治**.",
      },
      {
        id: "three-meals-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "meats-dishes",
        question: "Which famous Singaporean hawker dish is **海南鸡饭** (*Hǎinán jīfàn*)?",
        options: [
          "Peking roast duck",
          "Shanghai soup dumplings",
          "Stir-fried tomato and eggs",
          "Hainanese chicken rice",
        ],
        answerIndex: 3,
        hints: ["**鸡** = chicken, **饭** = rice."],
        explanation:
          "**海南鸡饭** (*Hǎinán jīfàn*) is Hainanese chicken rice. Peking roast duck is **北京烤鸭**, Shanghai soup dumplings are **小笼包**, and tomato-egg stir-fry is **西红柿炒鸡蛋**.",
      },
      {
        id: "three-meals-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "drinks-containers",
        question: "If **苹果** (*píngguǒ*) is 'apple' and **橙子** (*chéngzi*) is 'orange', what does **汁** (*zhī*) mean in **苹果汁** and **橙汁**?",
        options: ["milk", "tea", "juice", "ice"],
        answerIndex: 2,
        hints: ["Notice the three-dot water radical **氵** on the left of **汁**!"],
        explanation:
          "**汁** (*zhī*) means 'juice' — combine any fruit with **汁** to make its juice (**果汁**, **苹果汁**, **橙汁**). Milk is **奶**, tea is **茶**, and ice is **冰**.",
      },
      {
        id: "three-meals-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "hungry-thirsty-full",
        question: "Which classifier goes with **筷子** (*kuàizi*, chopsticks)?",
        options: ["一把 (yī bǎ)", "一双 (yī shuāng)", "一条 (yī tiáo)", "一张 (yī zhāng)"],
        answerIndex: 1,
        hints: ["Chopsticks always come as a matching pair of two!"],
        explanation:
          "**双** (*shuāng*) is the classifier for pairs (**一双筷子**, **一双鞋**, **一双袜子**). **把** is for objects with handles (like a spoon **一把勺子**), **条** is for long flexible things, and **张** is for flat surfaces.",
      },
      {
        id: "three-meals-m2-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "healthy-balanced-diet",
        question: "What does **对身体好** (*duì shēntǐ hǎo*) mean?",
        options: [
          "very delicious",
          "already full",
          "too greasy",
          "good for one's health",
        ],
        answerIndex: 3,
        hints: ["**身体** (*shēntǐ*) means 'body / health', and **好** means 'good'."],
        explanation:
          "**对身体好** literally means 'towards the body good' — i.e. 'good for your health'. 'Very delicious' is **很好吃**, 'already full' is **已经吃饱了**, and 'too greasy' is **太油腻了**.",
      },
      {
        id: "three-meals-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "meals-staples",
        question: "What is the key difference between **包子** (*bāozi*) and **馒头** (*mántou*)?",
        options: [
          "包子 has a meat or vegetable/sweet filling inside, whereas 馒头 is a plain unstuffed steamed bun",
          "包子 is deep-fried in oil, whereas 馒头 is baked in an oven",
          "包子 is made from rice grains, whereas 馒头 is made from potatoes",
          "包子 is a cold drink, whereas 馒头 is a hot soup",
        ],
        answerIndex: 0,
        hints: [
          "**包** literally means 'to wrap' — think about wrapping a filling inside dough!",
          "Both are steamed wheat buns popular across China.",
        ],
        explanation:
          "Both are steamed wheat-flour buns, but **包子** wraps a savoury or sweet filling inside (**肉包子**, **菜包子**), while **馒头** is soft, plain steamed bread without filling.",
      },
      {
        id: "three-meals-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "meats-dishes",
        question: "Look at the dish name **西红柿炒鸡蛋**. Which cooking method is used to prepare it?",
        options: [
          "Steaming over boiling water (蒸)",
          "Roasting in an oven (烤)",
          "Stir-frying in a hot wok (炒)",
          "Deep-frying in oil (炸)",
        ],
        answerIndex: 2,
        hints: [
          "Spot the verb sitting right between **西红柿** (tomato) and **鸡蛋** (egg).",
          "**炒** (*chǎo*) appears in **炒饭** (*chǎofàn*, fried rice) too!",
        ],
        explanation:
          "The verb **炒** (*chǎo*) means 'to stir-fry' over high heat in a wok, so **西红柿炒鸡蛋** is stir-fried tomato and scrambled eggs.",
      },
      {
        id: "three-meals-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "drinks-containers",
        question: "Complete the dialogue naturally:\n— **你想喝什么饮料？**\n— **________。**",
        options: [
          "我想吃一盘蛋炒饭",
          "我想要一杯冰苹果汁",
          "我已经吃饱了，慢用",
          "我早饭吃了两个包子",
        ],
        answerIndex: 1,
        hints: [
          "The question asks **你想喝什么饮料？** ('What drink would you like to drink?').",
          "Pick the only response that names a **drink** (*饮料*)!",
        ],
        explanation:
          "Since the question asks what **饮料** (beverage) you want to **喝** (drink), **我想要一杯冰苹果汁** ('I would like a glass of iced apple juice') is the only logical answer; **蛋炒饭** and **包子** are solid foods.",
      },
      {
        id: "three-meals-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hungry-thirsty-full",
        question: "Compare **我很饿** (*Wǒ hěn è*) and **我饿了** (*Wǒ è le*). What extra nuance does sentence-final **了** add in **我饿了**?",
        options: [
          "It means 'I was hungry last year'",
          "It means 'I am NEVER hungry'",
          "It marks a change of state: 'I've got hungry now!'",
          "It turns the statement into a yes/no question",
        ],
        answerIndex: 2,
        hints: [
          "Think of **下雨了！** ('It has started raining!').",
          "Sentence-final **了** signals a new situation that wasn't true earlier.",
        ],
        explanation:
          "Sentence-final **了** marks a **change of state** (**我饿了** = 'I'm hungry now / I've become hungry!'), whereas **我很饿** simply describes your current state ('I am very hungry'). Yes/no questions use **吗**, not **了**.",
      },
      {
        id: "three-meals-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "healthy-balanced-diet",
        question: "Fill in the paired connector: **________ 炸鸡很好吃，________ 太油腻了，所以我很少吃。**",
        options: [
          "因为 …… 所以 ……",
          "虽然 …… 但是 ……",
          "不但 …… 而且 ……",
          "一边 …… 一边 ……",
        ],
        answerIndex: 1,
        hints: [
          "'Fried chicken is tasty' is positive (+), while 'it is too greasy' is negative (−).",
          "Which connector pair expresses contrast ('Although…, however…')?",
        ],
        explanation:
          "**虽然……但是……** ('Although…, however…') contrasts a positive point (**很好吃**, tasty) with a drawback (**太油腻了**, too greasy). **因为……所以……** expresses cause, **不但……而且……** adds matching points, and **一边……一边……** describes simultaneous actions.",
      },
      {
        id: "three-meals-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "meals-staples",
        question: "Put these segments into correct Mandarin STPV order: **① 吃午饭  ② 每天中午十二点半  ③ 我跟同学  ④ 在学校食堂**",
        options: [
          "③ ② ④ ① (我跟同学每天中午十二点半在学校食堂吃午饭。)",
          "③ ① ④ ② (我跟同学吃午饭在学校食堂每天中午十二点半。)",
          "② ① ③ ④ (每天中午十二点半吃午饭我跟同学在学校食堂。)",
          "③ ④ ① ② (我跟同学在学校食堂吃午饭每天中午十二点半。)",
        ],
        answerIndex: 0,
        hints: [
          "Follow the Golden STPV Rule: **Subject + Time + Place + Verb-Object**.",
          "Neither Place (**在学校食堂**) nor Time (**每天中午十二点半**) can go after **吃午饭**!",
        ],
        explanation:
          "Mandarin strictly follows **Subject (我跟同学) + Time (每天中午十二点半) + Place (在学校食堂) + Verb (吃午饭)**. Putting place or time at the end copies English word order.",
      },
      {
        id: "three-meals-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "meats-dishes",
        question: "Look at the character **鲜** (*xiān*, fresh / umami) in **海鲜** (*hǎixiān*, seafood). Which two animal characters are fused inside **鲜**?",
        options: [
          "猪 (pig) + 鸡 (chicken)",
          "牛 (cow) + 马 (horse)",
          "鸟 (bird) + 虫 (insect)",
          "鱼 (fish) + 羊 (sheep/lamb)",
        ],
        answerIndex: 3,
        hints: [
          "Split **鲜** vertically into its left half and right half.",
          "One swims in water; the other grazes on land!",
        ],
        explanation:
          "**鲜** combines **鱼** (*yú*, fish) on the left and **羊** (*yáng*, sheep/lamb) on the right — two prized fresh ingredients in ancient Chinese cuisine.",
      },
      {
        id: "three-meals-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "drinks-containers",
        question: "Xiao Ming buys breakfast for his family: **两碗粥** (\$3 each), **四个包子** (\$1.50 each), and **三杯豆浆** (\$2 each). How much does he spend altogether?",
        options: ["\$14", "\$16", "\$18", "\$20"],
        answerIndex: 2,
        hints: [
          "Translate the Chinese numbers carefully: **两** = 2, **四** = 4, **三** = 3.",
          "Calculate each item's subtotal: (2 × \$3) + (4 × \$1.50) + (3 × \$2).",
        ],
        explanation:
          "**两碗粥** = 2 × \$3 = \$6; **四个包子** = 4 × \$1.50 = \$6; **三杯豆浆** = 3 × \$2 = \$6. Adding \$6 + \$6 + \$6 gives **\$18**.",
      },
      {
        id: "three-meals-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "healthy-balanced-diet",
        question: "Read the school nutrition poster:\n**「早饭要吃好，午饭要吃饱，晚饭要吃少。不吃早饭的学生上课容易累。」**\nAccording to the poster, what happens to students who skip breakfast?",
        options: [
          "They get thirsty during PE lessons",
          "They easily feel tired in class",
          "They eat too many snacks at lunch",
          "They cannot fall asleep at night",
        ],
        answerIndex: 1,
        hints: [
          "Focus on the second sentence: **不吃早饭的学生上课容易累**.",
          "**上课** = in class / attending lessons; **容易** = easily; **累** = tired.",
        ],
        explanation:
          "**不吃早饭的学生** (students who don't eat breakfast) **上课容易累** (easily get tired during class). **累** (*lèi*) means 'tired', not thirsty (**渴**) or hungry (**饿**).",
      },
      {
        id: "three-meals-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "hungry-thirsty-full",
        question: "Your British exchange partner eats Western steak with a knife and fork, while you eat dumplings with chopsticks. Which Mandarin sentence expresses this accurately?",
        options: [
          "他用刀叉吃牛排，我用筷子吃饺子。",
          "他吃刀叉用牛排，我吃筷子用饺子。",
          "他穿刀叉吃牛排，我戴筷子吃饺子。",
          "他用一双刀叉喝牛排，我用一条筷子吃饺子。",
        ],
        answerIndex: 0,
        hints: [
          "In Mandarin, tool phrases (**用 + tool**, 'using…') MUST come BEFORE the main action verb!",
          "Eliminate choices that use clothing verbs (**穿/戴**) or wrong verbs/classifiers.",
        ],
        explanation:
          "Mandarin places **用 + instrument** BEFORE the verb (**用刀叉吃牛排**, **用筷子吃饺子** — 'use knife-and-fork to eat steak, use chopsticks to eat dumplings'). Putting **用** after **吃** copies English word order.",
      },
    ],
  },
  {
    id: "three-meals-m3",
    title: "Paper 3 · IGCSE Reading, Radicals & Healthy Diet Mastery",
    questions: [
      {
        id: "three-meals-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "meals-staples",
        question: "Which word is the formal/written equivalent of **早饭** (*zǎofàn*)?",
        options: ["午餐 (wǔcān)", "晚餐 (wǎncān)", "早餐 (zǎocān)", "快餐 (kuàicān)"],
        answerIndex: 2,
        hints: ["Keep **早** (morning) and swap **饭** for **餐** (*cān*)."],
        explanation:
          "**早餐** (*zǎocān*) is the formal/menu word for breakfast (**早饭**). **午餐** is lunch, **晚餐** is dinner, and **快餐** is fast food.",
      },
      {
        id: "three-meals-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "drinks-containers",
        question: "What does **豆浆** (*dòujiāng*) mean?",
        options: ["cow's milk", "soya milk", "coffee", "bubble tea"],
        answerIndex: 1,
        hints: ["**豆** (*dòu*) means 'bean / soya bean' (just like **豆腐** *dòufu*, tofu!)."],
        explanation:
          "**豆浆** (*dòujiāng*) is soya milk (**豆** = soya bean). Cow's milk is **牛奶**, coffee is **咖啡**, and bubble/milk tea is **奶茶**.",
      },
      {
        id: "three-meals-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "meats-dishes",
        question: "Which item below is NOT a type of meat or seafood?",
        options: ["羊肉 (yángròu)", "虾 (xiā)", "烤鸭 (kǎoyā)", "三明治 (sānmíngzhì)"],
        answerIndex: 3,
        hints: ["Three of these come from sheep, prawns, and duck; one is a bread lunch item!"],
        explanation:
          "**三明治** (*sānmíngzhì*) is a 'sandwich' (a phonetic loanword from English). **羊肉** is lamb, **虾** is prawn, and **烤鸭** is roast duck.",
      },
      {
        id: "three-meals-m3-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "hungry-thirsty-full",
        question: "When a host or waiter sets dishes on your table and says **「请慢用！」** (*Qǐng mànyòng!*), what do they mean?",
        options: [
          "Please hurry up and leave!",
          "Please enjoy your meal!",
          "Please wash the bowls!",
          "Please pay the bill now!",
        ],
        answerIndex: 1,
        hints: ["Literally 'please eat/use slowly' — the polite Chinese equivalent of *Bon appétit*!"],
        explanation:
          "**请慢用！** literally means 'please eat slowly' and is the standard polite Mandarin expression for 'Enjoy your meal!'",
      },
      {
        id: "three-meals-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "healthy-balanced-diet",
        question: "Which phrase best describes a diet with the right mix of vegetables, fruit, protein and grains?",
        options: [
          "营养均衡 (yíngyǎng jūnhéng)",
          "非常油腻 (fēicháng yóunì)",
          "太多零食 (tài duō língshí)",
          "一日一餐 (yī rì yī cān)",
        ],
        answerIndex: 0,
        hints: [
          "**营养** (*yíngyǎng*) means 'nutrition'.",
          "**均衡** (*jūnhéng*) means 'balanced' — eliminate choices about grease or snacks!",
        ],
        explanation:
          "**营养均衡** (*yíngyǎng jūnhéng*) means 'nutritionally balanced'. **非常油腻** means 'very greasy', **太多零食** means 'too many snacks', and *一日一餐* would mean 'one meal a day'.",
      },
      {
        id: "three-meals-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "meals-staples",
        question: "Look at the four characters **饭**, **饺**, **馒**, **饿**. What semantic radical do ALL four share on the left, and what does it signal?",
        options: [
          "氵 (water radical — liquids and rain)",
          "饣 (food radical — eating, cooked food and hunger)",
          "火 (fire radical — high-heat cooking)",
          "口 (mouth radical — speaking and shouting)",
        ],
        answerIndex: 1,
        hints: [
          "All four words relate to meals (**饭**), dumplings (**饺**), steamed buns (**馒**) and hunger (**饿**).",
          "**饣** is the simplified side-form of **食** (*shí*, food/eat).",
        ],
        explanation:
          "All four characters carry **饣** (*shízìpáng*, the food radical derived from **食**), signalling cooked grain foods, pastries, or appetite states like **饿** (hungry) and **饱** (full).",
      },
      {
        id: "three-meals-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "drinks-containers",
        question: "Look closely at **冰水** (*bīngshuǐ*, iced water) vs **汤** (*tāng*, soup). Why does **冰** have TWO dots (**冫**) on the left while **汤** has THREE dots (**氵**)?",
        options: [
          "冫 is the ice/cold radical, whereas 氵 is the liquid water radical",
          "冫 means sweet drinks, whereas 氵 means salty drinks",
          "冫 is only used for foreign loanwords, whereas 氵 is native Chinese",
          "冫 means two cups, whereas 氵 means three cups",
        ],
        answerIndex: 0,
        hints: [
          "Remember **冷** (*lěng*, cold) and **凉** (*liáng*, cool) also have **冫**!",
          "**氵** comes from **水** (liquid water).",
        ],
        explanation:
          "The two-dot radical **冫** (*liǎngdiǎnshuǐ*) marks ice, freezing or coldness (**冰**, **冷**, **凉**), whereas the three-dot radical **氵** (*sāndiǎnshuǐ*) marks flowing liquids (**汤**, **汁**, **渴**).",
      },
      {
        id: "three-meals-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "meats-dishes",
        question: "Read the dinner menu note: **「大明不吃猪肉，也不吃羊肉，但是他很喜欢吃海鲜。」** Which two dishes can Da Ming happily eat?",
        options: [
          "猪肉饺子和烤羊肉 (pork dumplings and roast lamb)",
          "猪肉包子和牛肉面 (pork buns and beef noodles)",
          "羊肉汤和蒸鱼 (lamb soup and steamed fish)",
          "蒸鱼和炒虾 (steamed fish and stir-fried prawns)",
        ],
        answerIndex: 3,
        hints: [
          "Da Ming does NOT eat **猪肉** (pork) or **羊肉** (lamb), so rule out any option containing either!",
          "He loves **海鲜** (*hǎixiān*, seafood) — look for fish and prawns.",
        ],
        explanation:
          "Since Da Ming avoids both **猪肉** and **羊肉** and loves **海鲜** (seafood), **蒸鱼和炒虾** (steamed fish and stir-fried prawns) fits his diet completely.",
      },
      {
        id: "three-meals-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "hungry-thirsty-full",
        question: "Why does **筷子** (*kuàizi*, chopsticks) have the radical **⺮** at the very top?",
        options: [
          "Because chopsticks were invented only for eating grass vegetables (艹)",
          "Because chopsticks look like two eyebrows on a face",
          "Because chopsticks are traditionally made from bamboo (竹)",
          "Because ⺮ represents steam rising from a hot bowl",
        ],
        answerIndex: 2,
        hints: [
          "Compare **⺮** (six strokes) carefully with the grass radical **艹** (three strokes) — they are different radicals!",
          "**⺮** is the compressed top form of **竹** (*zhú*, bamboo).",
        ],
        explanation:
          "**⺮** (*zhúzìtóu*) is the bamboo radical (from **竹**, bamboo), reflecting that traditional Chinese chopsticks have been crafted from bamboo for thousands of years.",
      },
      {
        id: "three-meals-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "drinks-containers",
        question: "In English we call standard Western tea *'black tea'*. What is it called in Mandarin, and why?",
        options: [
          "黑茶 — translated word-for-word from English 'black'",
          "红茶 (hóngchá, 'red tea') — named after the reddish-amber colour of the brewed tea",
          "白茶 (báichá, 'white tea') — because milk is always added",
          "蓝茶 (lánchá, 'blue tea') — named after porcelain teacups",
        ],
        answerIndex: 1,
        hints: [
          "Look inside a clear glass mug of English Breakfast tea held up to the light — what colour is the liquid?",
          "Recall our Discovery note in Section 3!",
        ],
        explanation:
          "Standard 'black tea' in Mandarin is **红茶** (*hóngchá*, literally 'red tea'), named after the warm reddish-copper colour of the brewed infusion rather than the dark dried leaves.",
      },
      {
        id: "three-meals-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "meals-staples",
        question: "Read the comparison of two cousins' breakfasts:\n**「住在北京的表哥早饭常常吃包子和热粥；住在新加坡的表妹早饭喜欢吃烤面包、两个鸡蛋，还喝一杯热奶茶。」**\nWhich statement is TRUE according to the passage?",
        options: [
          "Both cousins drink hot milk tea every morning",
          "The cousin in Beijing eats toast and eggs, while the cousin in Singapore eats congee",
          "The cousin in Beijing eats steamed buns and hot congee, while the cousin in Singapore has toast, two eggs and hot milk tea",
          "Neither cousin eats breakfast before going to school",
        ],
        answerIndex: 2,
        hints: [
          "Match each location carefully: **住在北京的表哥** (older male cousin living in Beijing) vs **住在新加坡的表妹** (younger female cousin living in Singapore).",
          "**烤面包** = toast; **热粥** = hot congee.",
        ],
        explanation:
          "The passage states that the cousin in Beijing (**表哥**) often eats **包子和热粥** (buns and hot congee), while the cousin in Singapore (**表妹**) likes **烤面包、两个鸡蛋** and **一杯热奶茶** (toast, two eggs and a cup of hot milk tea).",
      },
      {
        id: "three-meals-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "healthy-balanced-diet",
        question: "A doctor checks Leo's daily food log: **早饭：没吃 · 午饭：两个汉堡包、一大杯可乐 · 晚饭：炸鸡、薯条 · 夜宵：比萨饼**. Which piece of advice from the doctor matches Leo's log best?",
        options: [
          "你的饮食非常健康，请继续多吃快餐！",
          "你每天吃太多蔬菜和水果了，应该多吃一点儿肉。",
          "你一定要吃早饭，还要少吃油腻的快餐，少喝可乐，多吃蔬菜和水果。",
          "你每天喝太多绿茶和白开水了，应该多喝甜的饮料。",
        ],
        answerIndex: 2,
        hints: [
          "Leo skipped breakfast (**早饭：没吃**) and ate only greasy fast food (**汉堡包, 炸鸡, 比萨饼**) plus sugary **可乐**.",
          "Pick the advice that addresses skipping breakfast AND cutting down on fast food & cola.",
        ],
        explanation:
          "Leo skipped breakfast and ate greasy fast food all day, so the doctor rightly advises: **你一定要吃早饭，还要少吃油腻的快餐，少喝可乐，多吃蔬菜和水果。**",
      },
      {
        id: "three-meals-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "meats-dishes",
        question: "Which group contains ONLY dishes or foods cooked using **direct dry/oil heat** (**火** radical methods) rather than boiling/steaming?",
        options: [
          "蒸鱼 · 煮面条 · 蒸包子",
          "白米饭 · 鸡蛋汤 · 热粥",
          "冰水 · 苹果汁 · 牛奶",
          "北京烤鸭 · 蛋炒饭 · 烤面包",
        ],
        answerIndex: 3,
        hints: [
          "Look for characters containing the left-side **火** radical (**烤** roast/toast and **炒** stir-fry).",
          "**蒸** and **煮** use boiling water/steam (**灬**).",
        ],
        explanation:
          "**北京烤鸭** (**烤** roast), **蛋炒饭** (**炒** stir-fry), and **烤面包** (**烤** toast) all use **火**-radical dry/wok heat methods, whereas **蒸** and **煮** cook with steam or boiling water.",
      },
      {
        id: "three-meals-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "drinks-containers",
        question: "Choose the sentence where EVERY measure word (**碗**, **盘**, **条**, **双**, **盒**) is used idiomatically:",
        options: [
          "妈妈做了一双炒饭、一盒蒸鱼和一条鸡蛋汤，给我拿了一盘筷子和一碗牛奶。",
          "妈妈做了一瓶炒饭、一杯蒸鱼和一双鸡蛋汤，给我拿了一条筷子和一盘牛奶。",
          "妈妈做了一盒炒饭、一双蒸鱼和一盘鸡蛋汤，给我拿了一碗筷子和一条牛奶。",
          "妈妈做了一盘炒饭、一条蒸鱼和一碗鸡蛋汤，给我拿了一双筷子和一盒牛奶。",
        ],
        answerIndex: 3,
        hints: [
          "Start by checking **蒸鱼** (whole fish → **条**) and **筷子** (pair → **双**).",
          "Then verify the vessels: **炒饭** → plate (**盘**), **汤** → bowl (**碗**), **牛奶** → carton (**盒**).",
        ],
        explanation:
          "**一盘炒饭** (plate of fried rice), **一条蒸鱼** (one steamed fish), **一碗鸡蛋汤** (bowl of egg soup), **一双筷子** (pair of chopsticks), and **一盒牛奶** (carton of milk) are all 100% idiomatic pairings.",
      },
      {
        id: "three-meals-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "healthy-balanced-diet",
        question: "Which sentence best translates: *'Not only is fish very nutritious, it is also not greasy, so eating fish often is good for your health'*?",
        options: [
          "鱼虽然很有营养，但是不油腻，因为常吃鱼给身体好。",
          "鱼不但很有营养，而且不油腻，所以常吃鱼对身体好。",
          "鱼不但太油腻了，而且没有营养，所以少吃鱼对身体好。",
          "鱼一边很有营养，一边不油腻，所以吃多鱼是好身体。",
        ],
        answerIndex: 1,
        hints: [
          "'Not only… but also…' is **不但……而且……**, followed by **所以** ('therefore/so').",
          "Remember 'good for health' is **对身体好**, never *给身体好* or *是好身体*!",
        ],
        explanation:
          "**鱼不但很有营养，而且不油腻，所以常吃鱼对身体好。** links two positive qualities cleanly with **不但……而且……**, places **常** before **吃鱼**, and closes with idiomatic **对身体好**.",
      },
    ],
  },
];
