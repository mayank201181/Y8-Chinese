import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "sentence-patterns-m1",
    title: "Paper 1 — Core STPV, Comparisons & Paired Connectors",
    questions: [
      {
        id: "sentence-patterns-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stpv-word-order",
        question:
          "Which sentence puts **Subject + Time + Place + Verb (STPV)** in natural Mandarin order for *'I read books in the library at the weekend'*?",
        options: [
          "我周末在图书馆看书。",
          "我看书在图书馆周末。",
          "我在图书馆看书周末。",
          "我周末看书在图书馆。",
        ],
        answerIndex: 0,
        hints: [
          "Mandarin sets the stage (When + Where) BEFORE the action verb (**看书**).",
        ],
        explanation:
          "**我周末在图书馆看书。** follows **S (我) + T (周末) + P (在图书馆) + V (看书)**. Putting **在图书馆** or **周末** after **看书** copies English word order and is ungrammatical in Mandarin.",
      },
      {
        id: "sentence-patterns-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "bi-comparisons",
        question:
          "Choose the grammatically **correct** Mandarin sentence for *'Singapore is hotter than Beijing'*:",
        options: [
          "新加坡比北京很热。",
          "新加坡比北京热。",
          "新加坡很热比北京。",
          "新加坡比北京非常热。",
        ],
        answerIndex: 1,
        hints: [
          "Remember the golden **比** rule: **比** and **很 / 非常** never appear together!",
        ],
        explanation:
          "**新加坡比北京热。** uses **A + 比 + B + Adjective** cleanly. Adding **很** or **非常** (**比北京很热** / **比北京非常热**) is a classic English-speaker mistake because **比** already expresses comparison.",
      },
      {
        id: "sentence-patterns-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cause-contrast",
        question:
          "Fill in the blank: **因为今天下大雨，______ 我们不去东海岸公园。**",
        options: ["但是", "而且", "所以", "或者"],
        answerIndex: 2,
        hints: [
          "Which connector partners with **因为** (*because*) to mean *'therefore / so'*?",
        ],
        explanation:
          "**所以** (*suǒyǐ*, therefore) completes the cause-and-effect pair **因为…，所以…**. **但是** (*but*) pairs with **虽然**, and **而且** (*moreover*) pairs with **不但**.",
      },
      {
        id: "sentence-patterns-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cause-contrast",
        question:
          "Fill in the blank: **______ 汉字很难写，但是很有意思。**",
        options: ["因为", "如果", "不但", "虽然"],
        answerIndex: 3,
        hints: [
          "Look at **但是** (*but*) in the second clause — which concession word opens the pair?",
        ],
        explanation:
          "**虽然** (*suīrán*, although) pairs with **但是** (*dànshì*, but) in **虽然…，但是…**. **因为** pairs with **所以**, **如果** pairs with **就**, and **不但** pairs with **而且**.",
      },
      {
        id: "sentence-patterns-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "addition-simultaneous",
        question:
          "Which connector pair means *'not only … but also …'*?",
        options: [
          "不但…而且…",
          "一边…一边…",
          "因为…所以…",
          "先…再…",
        ],
        answerIndex: 0,
        hints: [
          "Think of upgrading two positive qualities of a dish or restaurant.",
        ],
        explanation:
          "**不但…而且…** (*búdàn … érqiě …*) means *'not only … but also …'*. **一边…一边…** means *'while doing … also doing …'*, and **先…再…** means *'first … then …'*.",
      },
      {
        id: "sentence-patterns-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpv-word-order",
        question:
          "How do you say *'On Saturday afternoon, Xiaoming plays basketball with friends at school'*?",
        options: [
          "小明打篮球跟朋友一起在学校星期六下午。",
          "小明星期六下午跟朋友一起在学校打篮球。",
          "小明跟朋友一起打篮球在学校星期六下午。",
          "小明在学校打篮球跟朋友一起星期六下午。",
        ],
        answerIndex: 1,
        hints: [
          "Keep the main action **打篮球** at the very end!",
          "Order the pre-verbal blocks as **Subject + Time + Companion (跟…一起) + Place (在…) + Verb**.",
        ],
        explanation:
          "**小明星期六下午跟朋友一起在学校打篮球。** places Time (**星期六下午**), Companion (**跟朋友一起**), and Place (**在学校**) all before the action verb **打篮球**, whereas the distractors leave adverbials trailing after the verb.",
      },
      {
        id: "sentence-patterns-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bi-comparisons",
        question:
          "How do you say *'Harbin's winter is much colder than Shanghai's'*?",
        options: [
          "哈尔滨的冬天比上海很冷。",
          "哈尔滨的冬天比上海得多冷。",
          "哈尔滨的冬天比上海冷得多。",
          "哈尔滨的冬天没有上海冷得多。",
        ],
        answerIndex: 2,
        hints: [
          "Never use **很** in a **比** comparison.",
          "Where does **得多** (*much more*) sit relative to the adjective **冷**?",
        ],
        explanation:
          "**哈尔滨的冬天比上海冷得多。** puts the degree gap **得多** immediately AFTER the adjective **冷**. **比上海很冷** illegally uses **很**, and **得多冷** puts **得多** on the wrong side of the adjective.",
      },
      {
        id: "sentence-patterns-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bi-comparisons",
        question:
          "Today is 28°C and yesterday was 33°C. Which sentence accurately describes this using **没有**?",
        options: [
          "昨天没有今天那么热。",
          "今天比昨天热一点儿。",
          "今天跟昨天一样热。",
          "今天没有昨天那么热。",
        ],
        answerIndex: 3,
        hints: [
          "**A 没有 B (那么) 热** means *'A is not as hot as B'*.",
          "Since today (28°C) is cooler than yesterday (33°C), which day goes in slot A?",
        ],
        explanation:
          "**今天没有昨天那么热。** means *'Today is not as hot as yesterday'*, matching 28°C vs 33°C. **昨天没有今天那么热** reverses the two days!",
      },
      {
        id: "sentence-patterns-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cause-contrast",
        question:
          "Choose the grammatically **correct** conditional sentence for *'If it doesn't rain tomorrow, we will go to Sentosa'*:",
        options: [
          "如果明天不下雨，我们就去圣淘沙。",
          "如果明天不下雨，就我们去圣淘沙。",
          "如果明天不下雨，我们去圣淘沙就。",
          "明天如果下不雨，我们就去圣淘沙。",
        ],
        answerIndex: 0,
        hints: [
          "**就** (*jiù*, then) is an adverb, NOT a conjunction.",
          "Like **也** and **都**, **就** must stand AFTER the subject **我们** and BEFORE the verb **去**.",
        ],
        explanation:
          "**如果明天不下雨，我们就去圣淘沙。** correctly places the adverb **就** between the subject **我们** and the verb **去**. **就我们去** wrongly places **就** in front of the subject.",
      },
      {
        id: "sentence-patterns-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "addition-simultaneous",
        question:
          "Which sentence correctly expresses *'My older brother likes listening to music while doing homework'*?",
        options: [
          "哥哥喜欢先听音乐，先做作业。",
          "哥哥喜欢一边听音乐，一边做作业。",
          "哥哥喜欢听音乐和做作业一起。",
          "一边哥哥喜欢听音乐，一边做作业。",
        ],
        answerIndex: 1,
        hints: [
          "Two active actions happening at the exact same moment use **一边 + Verb 1，一边 + Verb 2**.",
          "Check where the subject **哥哥喜欢** sits!",
        ],
        explanation:
          "**哥哥喜欢一边听音乐，一边做作业。** places **一边** directly before each simultaneous verb phrase (**听音乐** and **做作业**). **一边哥哥…** misplaces **一边** before the subject.",
      },
      {
        id: "sentence-patterns-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpv-word-order",
        question:
          "Which sentence correctly says *'Mum takes the MRT to Orchard Road every Saturday'*?",
        options: [
          "妈妈每个星期六去乌节路坐地铁。",
          "妈妈坐地铁每个星期六去乌节路。",
          "妈妈每个星期六坐地铁去乌节路。",
          "妈妈去乌节路每个星期六坐地铁。",
        ],
        answerIndex: 2,
        hints: [
          "Put Time (**每个星期六**) right after the subject **妈妈**.",
          "In Mandarin serial verbs, does transport (**坐地铁**) come BEFORE or AFTER **去乌节路**?",
        ],
        explanation:
          "**妈妈每个星期六坐地铁去乌节路。** puts Time before Transport, and Transport (**坐地铁**) before Destination (**去乌节路**). **去乌节路坐地铁** means going to Orchard Road in order to ride the MRT!",
      },
      {
        id: "sentence-patterns-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "addition-simultaneous",
        question:
          "Spot the sentence where **和** (*hé*) is used **incorrectly**:",
        options: [
          "我喜欢吃草莓和西瓜。",
          "爸爸和妈妈都是新加坡人。",
          "桌子上有一本书和两支笔。",
          "我每天早上七点起床和七点半去上学。",
        ],
        answerIndex: 3,
        hints: [
          "What part of speech is **和** allowed to connect?",
          "**和** connects nouns or pronouns — NEVER two verb clauses!",
        ],
        explanation:
          "**我每天早上七点起床和七点半去上学。** is ungrammatical because **和** cannot link two verb clauses (**起床** and **去上学**). Natural Mandarin says **我每天早上七点起床，七点半去上学** (or uses **先…再…**).",
      },
      {
        id: "sentence-patterns-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "combining-clauses",
        question:
          "Choose the right pair of words meaning *'or'* to complete BOTH sentences:\n1. **你想喝奶茶 ______ 绿茶？**\n2. **周末我常常在家看书 ______ 听音乐。**",
        options: [
          "还是 ； 或者",
          "或者 ； 还是",
          "还是 ； 还是",
          "或者 ； 或者",
        ],
        answerIndex: 0,
        hints: [
          "Sentence 1 is a choice **question** (ends with **？**).",
          "Sentence 2 is a calm **statement** (ends with **。**).",
        ],
        explanation:
          "**还是** is used in choice questions (**你想喝奶茶还是绿茶？**), whereas **或者** is used in statements (**看书或者听音乐**).",
      },
      {
        id: "sentence-patterns-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "addition-simultaneous",
        question:
          "Both **姐姐** and **弟弟** speak Mandarin. Which sentence places **不但** in the **grammatically correct** position?",
        options: [
          "姐姐不但会说中文，而且弟弟也会说中文。",
          "不但姐姐会说中文，而且弟弟也会说中文。",
          "姐姐会说不但中文，而且弟弟也会说中文。",
          "姐姐不但会说中文，弟弟而且也会说中文。",
        ],
        answerIndex: 1,
        hints: [
          "Count how many subjects are being compared across the two clauses (**姐姐** vs **弟弟**).",
          "When TWO different subjects are linked, **不但** must stand BEFORE the first subject!",
        ],
        explanation:
          "**不但姐姐会说中文，而且弟弟也会说中文。** is right because the two clauses have DIFFERENT subjects (**姐姐** and **弟弟**), so **不但** must precede **姐姐** (and **而且** precedes **弟弟**).",
      },
      {
        id: "sentence-patterns-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "combining-clauses",
        question:
          "Which complex sentence has **100% natural** Mandarin word order and grammar?",
        options: [
          "虽然这家小贩中心比大餐厅很便宜，鸡饭很好吃。",
          "因为今天比昨天一点儿热，所以就我们去游泳。",
          "虽然这家小贩中心很小，但是鸡饭不但便宜，而且比大餐厅好吃得多。",
          "我星期天去小贩中心跟家人一起和吃了鸡饭。",
        ],
        answerIndex: 2,
        hints: [
          "Check every sentence for the classic traps: **比 + 很**, **一点儿** before Adj, **就** before Subject, and **和** joining verbs!",
          "Test **虽然…，但是…** + **不但…，而且…** + **比…好吃得多**.",
        ],
        explanation:
          "**虽然这家小贩中心很小，但是鸡饭不但便宜，而且比大餐厅好吃得多。** combines **虽然…但是…**, **不但…而且…**, and **比…好吃得多** flawlessly. The other sentences contain **比…很便宜** (and missing **但是**), **一点儿热** + **就我们**, and post-verbal **跟家人一起** + clause-level **和**.",
      },
    ],
  },
  {
    id: "sentence-patterns-m2",
    title: "Paper 2 — Degree Modifiers, Word-Order Traps & Logic",
    questions: [
      {
        id: "sentence-patterns-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "bi-comparisons",
        question:
          "How do you say *'My older brother is as tall as Dad'*?",
        options: [
          "哥哥比爸爸一样高。",
          "哥哥没有爸爸一样高。",
          "哥哥跟爸爸高一样。",
          "哥哥跟爸爸一样高。",
        ],
        answerIndex: 3,
        hints: [
          "Equality uses **A + 跟/和 + B + 一样 + Adjective**.",
        ],
        explanation:
          "**哥哥跟爸爸一样高。** uses the equality pattern **A + 跟 + B + 一样 + 高**. Never mix **比** with **一样**, and always place **一样** BEFORE the adjective **高**.",
      },
      {
        id: "sentence-patterns-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stpv-word-order",
        question:
          "Where must the time phrase **早上七点** (*7 a.m.*) NOT appear in a Mandarin sentence?",
        options: [
          "At the very end after the verb: *我起床早上七点。*",
          "Right after the subject: *我早上七点起床。*",
          "At the very front before the subject: *早上七点我起床。*",
          "Between **每天** and the verb: *我每天早上七点起床。*",
        ],
        answerIndex: 0,
        hints: [
          "Unlike English, Mandarin never puts point-in-time expressions at the tail end of a clause!",
        ],
        explanation:
          "**我起床早上七点。** is ungrammatical because point-in-time phrases (**早上七点**) must appear before the verb (either before or right after the subject), never at the end.",
      },
      {
        id: "sentence-patterns-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "addition-simultaneous",
        question:
          "Complete the sequence: **放学以后，我 ______ 做作业，______ 玩电脑游戏。** (*After school, I first do homework, then play computer games.*)",
        options: [
          "一边 ； 一边",
          "先 ； 再",
          "不但 ； 而且",
          "因为 ； 所以",
        ],
        answerIndex: 1,
        hints: [
          "Doing homework *first* and playing games *afterwards* is a two-step sequence!",
        ],
        explanation:
          "**先…再…** (*xiān … zài …*, first … then …) expresses sequential order. **一边…一边…** would mean doing homework and playing computer games simultaneously!",
      },
      {
        id: "sentence-patterns-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stpv-word-order",
        question:
          "How do you say *'I phone Grandma in the evening'* using **给** (*gěi*)?",
        options: [
          "我打电话给奶奶晚上。",
          "我晚上打电话跟奶奶。",
          "我晚上给奶奶打电话。",
          "给奶奶我打电话晚上。",
        ],
        answerIndex: 2,
        hints: [
          "Recipient phrase **给奶奶** (*to Grandma*) goes after Time (**晚上**) and BEFORE the verb (**打电话**).",
        ],
        explanation:
          "**我晚上给奶奶打电话。** follows **Subject (我) + Time (晚上) + Recipient (给奶奶) + Verb (打电话)**.",
      },
      {
        id: "sentence-patterns-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bi-comparisons",
        question:
          "Which word IS grammatically allowed directly **before** the adjective in a **比** sentence (e.g. **今天比昨天 ______ 热**)?",
        options: ["很", "非常", "真", "更"],
        answerIndex: 3,
        hints: [
          "**很**, **非常**, and **真** are absolute intensifiers and clash with **比**.",
          "Which adverb means *'even more'* (implying yesterday was already hot, and today is even hotter)?",
        ],
        explanation:
          "**更** (*gèng*, even more) is a relative degree adverb, so **今天比昨天更热** (*Today is even hotter than yesterday*) is completely natural, whereas **很**, **非常**, and **真** are forbidden with **比**.",
      },
      {
        id: "sentence-patterns-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bi-comparisons",
        question:
          "How do you say *'This jumper is a little bit cheaper than that one'*?",
        options: [
          "这件毛衣比那件便宜一点儿。",
          "这件毛衣比那件一点儿便宜。",
          "这件毛衣比那件有一点儿便宜。",
          "这件毛衣没有那件便宜一点儿。",
        ],
        answerIndex: 0,
        hints: [
          "In a **比** sentence, small-difference **一点儿** goes AFTER the adjective.",
          "Don't confuse **Adj + 一点儿** (comparative) with **有点儿 + Adj** (mild complaint without **比**).",
        ],
        explanation:
          "**这件毛衣比那件便宜一点儿。** places **一点儿** right after **便宜**. Putting **一点儿** or **有一点儿** before **便宜** breaks the **比** frame.",
      },
      {
        id: "sentence-patterns-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpv-word-order",
        question:
          "Which sentence correctly expresses *'My home is very close to the MRT station'*?",
        options: [
          "我家从地铁站很近。",
          "我家离地铁站很近。",
          "我家到地铁站很近从。",
          "离我家地铁站很近从。",
        ],
        answerIndex: 1,
        hints: [
          "**从** (*cóng*) means *'from'* for movement/time (**从家到学校**), NOT static distance!",
          "Which preposition measures distance between Place A and Place B?",
        ],
        explanation:
          "**我家离地铁站很近。** uses **A + 离 + B + 很近 / 很远** for distance. Using **从** instead of **离** (**我家从地铁站很近**) is a classic English translation trap.",
      },
      {
        id: "sentence-patterns-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cause-contrast",
        question:
          "Read: **我想去公园跑步，______ 外面下大雨了，______ 我只好在家做运动。** Choose the best pair of connectors:",
        options: [
          "因为 ； 但是",
          "虽然 ； 而且",
          "可是 ； 所以",
          "如果 ； 就",
        ],
        answerIndex: 2,
        hints: [
          "Clause 1 (*I wanted to jog in the park*) contrasts with Clause 2 (*it started raining heavily outside*).",
          "Clause 2 then causes Clause 3 (*I had no choice but to exercise at home*).",
        ],
        explanation:
          "**可是** (*but*) introduces the unexpected rain blocking the plan, and **所以** (*so/therefore*) introduces the resulting decision to exercise indoors.",
      },
      {
        id: "sentence-patterns-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "addition-simultaneous",
        question:
          "Where must **也** (*yě*, also/too) go to say *'Mum likes drinking green tea; I like drinking green tea too'*?",
        options: [
          "妈妈喜欢喝绿茶，我喜欢喝绿茶也。",
          "妈妈喜欢喝绿茶，也我喜欢喝绿茶。",
          "妈妈喜欢喝绿茶，我喜欢也喝绿茶。",
          "妈妈喜欢喝绿茶，我也喜欢喝绿茶。",
        ],
        answerIndex: 3,
        hints: [
          "Mandarin never puts **也** at the end of a sentence like English *'too'*.",
          "Place **也** right after the subject **我** and before the verb **喜欢**!",
        ],
        explanation:
          "**妈妈喜欢喝绿茶，我也喜欢喝绿茶。** puts the adverb **也** directly between Subject (**我**) and Verb (**喜欢**). **也** can never stand before the subject (**也我**) or at the end (**…也**).",
      },
      {
        id: "sentence-patterns-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpv-word-order",
        question:
          "Look at the four time blocks: **八点** / **早上** / **星期二** / **明天**. What is the ONLY natural Mandarin order from first to last?",
        options: [
          "明天星期二早上八点",
          "八点早上星期二明天",
          "早上八点明天星期二",
          "星期二早上八点明天",
        ],
        answerIndex: 0,
        hints: [
          "Mandarin orders time from **BIGGEST unit to SMALLEST unit**.",
          "Compare Day (**明天星期二**) → Part of Day (**早上**) → Exact Clock Time (**八点**).",
        ],
        explanation:
          "**明天星期二早上八点** zooms smoothly from largest unit to smallest: Day (**明天星期二**) → Morning (**早上**) → Hour (**八点**).",
      },
      {
        id: "sentence-patterns-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cause-contrast",
        question:
          "Which sentence uses **要不然** (*otherwise / or else*) logically and grammatically?",
        options: [
          "因为今天很冷，要不然我穿了毛衣。",
          "你应该早点儿睡觉，要不然明天上课会很累。",
          "虽然西瓜很甜，要不然我很喜欢吃。",
          "要不然你去图书馆，我们就看书。",
        ],
        answerIndex: 1,
        hints: [
          "**要不然** warns what bad result will happen if you DON'T follow the first clause's advice.",
          "Test which sentence gives advice followed by the consequence of ignoring it!",
        ],
        explanation:
          "**你应该早点儿睡觉，要不然明天上课会很累。** (*You should go to bed early, otherwise you'll be tired in class tomorrow*) uses **要不然** naturally after health advice.",
      },
      {
        id: "sentence-patterns-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "addition-simultaneous",
        question:
          "I bought a shirt, and *also* bought a pair of jeans (same subject adding a second item). Which adverb fits best in: **我买了一件衬衫，______ 买了一条牛仔裤。**?",
        options: ["或者", "还是", "还", "一边"],
        answerIndex: 2,
        hints: [
          "Look for the adverb read *hái* meaning *'in addition / also'* when the same person adds another action.",
          "**或者** means *'or'*, and **一边** requires a pair of simultaneous actions.",
        ],
        explanation:
          "**还** (*hái*, in addition / also) is ideal when one subject adds a second action or object (**买了一件衬衫，还买了一条牛仔裤**).",
      },
      {
        id: "sentence-patterns-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "bi-comparisons",
        question:
          "Read the price board at a Singapore fruit stall:\n- **芒果**: $6 / 公斤\n- **苹果**: $4 / 公斤\n- **榴莲**: $18 / 公斤\nWhich statement is **TRUE** according to the prices?",
        options: [
          "苹果比芒果贵一点儿。",
          "榴莲没有芒果那么贵。",
          "芒果跟榴莲一样贵。",
          "榴莲比苹果贵得多，苹果没有芒果那么贵。",
        ],
        answerIndex: 3,
        hints: [
          "Check each comparison carefully against $18 (durian) > $6 (mango) > $4 (apple).",
          "Does **苹果没有芒果那么贵** match $4 vs $6?",
        ],
        explanation:
          "Durian ($18) is much more expensive than apples ($4) (**榴莲比苹果贵得多**), and apples ($4) are not as expensive as mangoes ($6) (**苹果没有芒果那么贵**). All three other statements contradict the price board!",
      },
      {
        id: "sentence-patterns-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "addition-simultaneous",
        question:
          "Why is **✗ 弟弟一边十三岁，一边上八年级** ungrammatical in Mandarin?",
        options: [
          "Because **一边…一边…** can only link two dynamic, active actions performed at the same time — not static facts or states.",
          "Because **一边** must go before **弟弟**.",
          "Because **十三岁** requires **比**.",
          "Because numbers cannot appear inside **一边…一边…**.",
        ],
        answerIndex: 0,
        hints: [
          "Compare *listening to music while jogging* (**一边听音乐，一边跑步**) with *being 13 years old*.",
          "Is *being 13* an active physical/mental action?",
        ],
        explanation:
          "**一边…一边…** connects two simultaneous **dynamic actions** (like **吃饭**, **看电视**, **跑步**, **聊天**). Static states like age or grade (**十三岁**, **上八年级**) are not active actions.",
      },
      {
        id: "sentence-patterns-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "combining-clauses",
        question:
          "A student wants to say: *'Although taking the bus is cheaper than taking a taxi, taking the bus is not as fast as taking the MRT.'* Choose the **flawless** translation:",
        options: [
          "虽然坐公共汽车比坐出租车很便宜，坐公共汽车没有坐地铁那么快。",
          "虽然坐公共汽车比坐出租车便宜，但是没有坐地铁那么快。",
          "因为坐公共汽车比坐出租车便宜，但是没有坐地铁快得多。",
          "虽然坐公共汽车没有坐出租车便宜，但是比坐地铁快。",
        ],
        answerIndex: 1,
        hints: [
          "Verify both connectors (**虽然…，但是…**) are present!",
          "Verify there is NO **很** after **比坐出租车**, and that *'not as fast as MRT'* uses **没有坐地铁那么快**.",
        ],
        explanation:
          "**虽然坐公共汽车比坐出租车便宜，但是没有坐地铁那么快。** keeps both halves of **虽然…但是…**, uses **比** without **很**, and uses **没有…那么快** accurately. The distractors drop **但是** + add **很**, mix **因为** with **但是**, or flip the meaning!",
      },
    ],
  },
  {
    id: "sentence-patterns-m3",
    title: "Paper 3 — IGCSE 0547 Exam Contexts & Reading Logic",
    questions: [
      {
        id: "sentence-patterns-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stpv-word-order",
        question:
          "Complete the sentence in STPV order: **爷爷和奶奶每天晚饭以后 ______ 散步。** (*Grandpa and Grandma take a walk in the park after dinner every day.*)",
        options: [
          "去在公园",
          "散步在公园",
          "在公园",
          "公园在",
        ],
        answerIndex: 2,
        hints: [
          "What location block goes right before the verb **散步**?",
        ],
        explanation:
          "**在公园** (*in the park*) sits between Time (**每天晚饭以后**) and Verb (**散步**): **爷爷和奶奶每天晚饭以后在公园散步。**",
      },
      {
        id: "sentence-patterns-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "bi-comparisons",
        question:
          "How do you say *'Singapore's winter is different from Beijing's winter'*?",
        options: [
          "新加坡的冬天比北京的冬天不一样。",
          "新加坡的冬天没有北京的冬天不一样。",
          "新加坡的冬天跟北京的冬天一样不。",
          "新加坡的冬天跟北京的冬天不一样。",
        ],
        answerIndex: 3,
        hints: [
          "Use **A + 跟 + B + 不一样** for *'A is different from B'*.",
        ],
        explanation:
          "**新加坡的冬天跟北京的冬天不一样。** uses **A + 跟 + B + 不一样**. Never pair **比** with **不一样**!",
      },
      {
        id: "sentence-patterns-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cause-contrast",
        question:
          "Which question word asks *'why'*, normally answered with **因为…**?",
        options: ["为什么", "怎么样", "多少钱", "什么时候"],
        answerIndex: 0,
        hints: [
          "**为** (*for*) + **什么** (*what*) = *for what reason / why*.",
        ],
        explanation:
          "**为什么** (*wèishénme*) means *'why'*. **怎么样** asks *'how is it'*, **多少钱** asks *'how much money'*, and **什么时候** asks *'when'*.",
      },
      {
        id: "sentence-patterns-m3-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "addition-simultaneous",
        question:
          "Choose the natural Mandarin sentence for *'Please wash your hands first, then eat dinner'*:",
        options: [
          "请洗手先，吃晚饭再。",
          "请先洗手，再吃晚饭。",
          "请一边洗手，一边吃晚饭。",
          "请洗手和吃晚饭。",
        ],
        answerIndex: 1,
        hints: [
          "**先** and **再** always stand directly BEFORE their verbs!",
        ],
        explanation:
          "**请先洗手，再吃晚饭。** places **先** before **洗手** and **再** before **吃晚饭**. **一边洗手，一边吃晚饭** would mean washing hands and eating dinner at the exact same moment!",
      },
      {
        id: "sentence-patterns-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpv-word-order",
        question:
          "Unscramble: **吃午饭 / 中午 / 跟同事一起 / 爸爸 / 在小贩中心**",
        options: [
          "爸爸吃午饭在小贩中心跟同事一起中午。",
          "爸爸在小贩中心吃午饭中午跟同事一起。",
          "爸爸中午跟同事一起在小贩中心吃午饭。",
          "跟同事一起吃午饭爸爸中午在小贩中心。",
        ],
        answerIndex: 2,
        hints: [
          "Follow **S (爸爸) + T (中午) + With (跟同事一起) + P (在小贩中心) + V (吃午饭)**.",
          "Check that **吃午饭** comes at the very end!",
        ],
        explanation:
          "**爸爸中午跟同事一起在小贩中心吃午饭。** lines up Subject → Time → Companion → Place → Verb-Object cleanly.",
      },
      {
        id: "sentence-patterns-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cause-contrast",
        question:
          "Read: **这道四川菜很好吃，______ 对我来说有一点儿太辣了。** Which mild-contrast connector fits best?",
        options: ["所以", "而且", "因为", "不过"],
        answerIndex: 3,
        hints: [
          "Clause 1 praises the dish (*delicious*), while Clause 2 adds a polite reservation (*a little too spicy for me*).",
          "Which connector means *'however / though'*?",
        ],
        explanation:
          "**不过** (*búguò*, however / only) adds a gentle qualification after a compliment. **所以** (*therefore*), **而且** (*moreover*), and **因为** (*because*) do not express contrast.",
      },
      {
        id: "sentence-patterns-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bi-comparisons",
        question:
          "Which sentence is **WRONG** when comparing two school subjects?",
        options: [
          "数学课比历史课难得多。",
          "中文课跟英文课一样有意思。",
          "科学课没有艺术课那么容易。",
          "地理课比音乐课非常难。",
        ],
        answerIndex: 3,
        hints: [
          "Check all four options for the forbidden intensifier inside a **比** clause!",
          "Can **非常** stand before **难** when **比** is used?",
        ],
        explanation:
          "**地理课比音乐课非常难。** is ungrammatical because **非常** (like **很**) cannot modify the adjective in a **比** comparison — it should be **地理课比音乐课难得多**.",
      },
      {
        id: "sentence-patterns-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "addition-simultaneous",
        question:
          "Complete this restaurant review: **牛车水那家餐厅 ______ 环境很干净，______ 服务员非常热情。**",
        options: [
          "不但 ； 而且",
          "虽然 ； 但是",
          "因为 ； 所以",
          "如果 ； 就",
        ],
        answerIndex: 0,
        hints: [
          "Both clauses are positive compliments (*clean environment* + *enthusiastic staff*).",
          "Which pair stacks two positive points together?",
        ],
        explanation:
          "**不但…而且…** (*not only … but also …*) stacks two positive qualities in a review. **虽然…但是…** requires opposing ideas (one positive, one negative).",
      },
      {
        id: "sentence-patterns-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "combining-clauses",
        question:
          "Why is **✗ 你星期六想去看电影还是去游泳吗？** ungrammatical?",
        options: [
          "Because **还是** cannot connect verb phrases.",
          "Because **还是** ALREADY forms an A-or-B choice question, so adding **吗** at the end turns a choice question into a broken yes/no question!",
          "Because **星期六** must go at the end of the sentence.",
          "Because **想** cannot be used in questions.",
        ],
        answerIndex: 1,
        hints: [
          "**吗** asks a yes/no question; **还是** asks a *which one: A or B?* choice question.",
          "Can you answer *'Do you want to watch a film or go swimming?'* with *'Yes'*?",
        ],
        explanation:
          "A **还是** question (**你星期六想去看电影还是去游泳？**) already asks the listener to choose between A and B. Tacking **吗** onto the end is redundant and ungrammatical!",
      },
      {
        id: "sentence-patterns-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpv-word-order",
        question:
          "How do you say *'We have lessons from 8:00 a.m. to 3:30 p.m. at school'*?",
        options: [
          "我们上课在学校从早上八点到下午三点半。",
          "我们从早上八点上课在学校到下午三点半。",
          "我们从早上八点到下午三点半在学校上课。",
          "在学校上课我们从早上八点到下午三点半。",
        ],
        answerIndex: 2,
        hints: [
          "Treat **从早上八点到下午三点半** as the **Time** block and **在学校** as the **Place** block.",
          "Put **S + Time (从…到…) + Place (在学校) + Verb (上课)**!",
        ],
        explanation:
          "**我们从早上八点到下午三点半在学校上课。** keeps **从…到…** (Time) + **在学校** (Place) neatly in front of the verb **上课**.",
      },
      {
        id: "sentence-patterns-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cause-contrast",
        question:
          "Read Mei Mei's message: **虽然今天我有钢琴课，有点儿忙，但是下午五点以后就有空了。如果你也想去乌节路，我们就五点半在地铁站见面吧！** When can Mei Mei meet?",
        options: [
          "Before 5:00 p.m. at school",
          "She cannot meet at all today because of her piano lesson",
          "At 5:00 p.m. inside the cinema",
          "At 5:30 p.m. at the MRT station (if her friend also wants to go)",
        ],
        answerIndex: 3,
        hints: [
          "Trace **虽然…但是…** first: she has piano class, *but* after 5 p.m. she is free!",
          "Then read **如果…，我们就五点半在地铁站见面吧**.",
        ],
        explanation:
          "**虽然…但是…** shows that despite her piano lesson, she is free after 5 p.m., and **我们就五点半在地铁站见面吧** proposes meeting at 5:30 p.m. at the MRT station.",
      },
      {
        id: "sentence-patterns-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "bi-comparisons",
        question:
          "Suppose **小明** is 165 cm tall and **大卫** is ALSO 165 cm tall. Which Mandarin sentence is **logically TRUE**?",
        options: [
          "小明不比大卫高。",
          "小明没有大卫高。",
          "小明比大卫高一点儿。",
          "小明跟大卫不一样高。",
        ],
        answerIndex: 0,
        hints: [
          "At 165 cm vs 165 cm, **小明跟大卫一样高** (*equally tall*).",
          "**没有大卫高** strictly means *shorter than David* (< 165 cm), whereas **不比大卫高** literally means *not taller than David* (≤ 165 cm)!",
        ],
        explanation:
          "**小明不比大卫高** literally denies that Xiaoming is taller (so ≤ 165 cm, which is TRUE when they are both 165 cm!), whereas **小明没有大卫高** means Xiaoming is strictly shorter than David.",
      },
      {
        id: "sentence-patterns-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "combining-clauses",
        question:
          "Read: **星期六早上，我先在家复习一个小时中文，然后再跟朋友一起坐公共汽车去体育馆打羽毛球。** What is the exact chronological order of actions?",
        options: [
          "Take the bus → play badminton → revise Chinese at home",
          "Revise Chinese at home first → take the bus with friends → play badminton at the sports hall",
          "Revise Chinese on the bus while going to play badminton",
          "Play badminton at home first → go to the library by bus",
        ],
        answerIndex: 1,
        hints: [
          "Split at **先…，然后再…** (*first …, and after that …*).",
          "Inside the second clause, check the serial verbs **坐公共汽车** → **去体育馆** → **打羽毛球**.",
        ],
        explanation:
          "**先在家复习…** happens first at home; **然后再跟朋友一起坐公共汽车去体育馆打羽毛球** happens next (take bus with friends → go to sports hall → play badminton).",
      },
      {
        id: "sentence-patterns-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "combining-clauses",
        question:
          "Identify the **ONLY** sentence below with zero grammar errors:",
        options: [
          "因为昨天我发烧了，我看医生去医院。",
          "弟弟喜欢一边吃早饭，一边先看电视。",
          "如果你每天多吃蔬菜和水果，身体就会更健康。",
          "不但我喜欢夏天，而且喜欢游泳。",
        ],
        answerIndex: 2,
        hints: [
          "Check subject placement in **不但** (1 subject vs 2 subjects!), serial verbs (**去医院看医生**), and adverb placement in **如果…，身体就会…**.",
          "Remember **和** CAN join two nouns (**蔬菜和水果**)!",
        ],
        explanation:
          "**如果你每天多吃蔬菜和水果，身体就会更健康。** uses noun-level **和**, **如果…，Subject (身体) + 就 + 会…**, and relative **更** cleanly. The others say **看医生去医院** (backwards serial verbs), clash **一边** with **先**, or put **不但** before **我** when there is only one subject!",
      },
      {
        id: "sentence-patterns-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "combining-clauses",
        question:
          "Read this mini-review:\n**很多人觉得大餐厅一定比小贩中心好，可是我不这么觉得。小贩中心的菜不但跟大餐厅一样好吃，而且价钱便宜得多！**\nWhat is the writer's main opinion?",
        options: [
          "Big restaurants are both tastier and cheaper than hawker centres.",
          "Hawker-centre food isn't as tasty as big restaurants, though it is cheaper.",
          "Hawker centres and big restaurants charge roughly the same prices.",
          "Hawker-centre food is just as delicious as big-restaurant food, and much cheaper too!",
        ],
        answerIndex: 3,
        hints: [
          "**可是我不这么觉得** (*yet I don't think so*) rejects the idea that big restaurants are necessarily better.",
          "Decode **不但跟大餐厅一样好吃** (*not only as tasty as big restaurants*) + **而且价钱便宜得多** (*but also much cheaper in price*).",
        ],
        explanation:
          "**不但跟大餐厅一样好吃，而且价钱便宜得多** combines equality (**跟…一样好吃**) with a **得多** comparison (**便宜得多**) inside **不但…而且…**, proving the writer thinks hawker food is equally tasty and far cheaper.",
      },
    ],
  },
];
