import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "leisure-plans-m1",
    title: "Paper 1 · Free Time, Frequency & Plans Foundations",
    questions: [
      {
        id: "leisure-plans-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "free-time-activities",
        question: "What does **看电影** (*kàn diànyǐng*) mean in British English?",
        options: [
          "to watch a film",
          "to watch television",
          "to go online",
          "to take photographs",
        ],
        answerIndex: 0,
        hints: ["**看** means 'to watch', and **电影** literally means 'electric shadow'."],
        explanation:
          "**看电影** (*kàn diànyǐng*) means 'to watch a film' (or go to the cinema). 'To watch television' is **看电视** (*kàn diànshì*), and 'to go online' is **上网** (*shàngwǎng*).",
      },
      {
        id: "leisure-plans-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "free-time-activities",
        question: "Which Mandarin verb phrase specifically means 'to go window-shopping / stroll round the shops'?",
        options: ["散步", "逛街", "聊天", "休息"],
        answerIndex: 1,
        hints: ["Look for **街** (*jiē*, street) paired with a verb meaning 'stroll leisurely'."],
        explanation:
          "**逛街** (*guàngjiē*) means strolling round shops or shopping malls (even without buying anything). **散步** (*sànbù*) is going for a gentle walk in a park, **聊天** (*liáotiān*) is chatting, and **休息** (*xiūxi*) is resting.",
      },
      {
        id: "leisure-plans-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "free-time-activities",
        question: "What is the correct tone-marked Pinyin for **有空** ('to be free / have spare time')?",
        options: ["yǒu kōng", "yóu kòng", "yǒu kòng", "yòu kōng"],
        answerIndex: 2,
        hints: ["**有** is 3rd tone (*yǒu*), and **空** changes from 1st tone ('sky') to 4th tone when it means 'free time'!"],
        explanation:
          "In **有空** ('to have free time'), **空** is pronounced in the 4th tone: **yǒu kòng**. First-tone *kōng* refers to the sky or empty air (**天空**, **空气**).",
      },
      {
        id: "leisure-plans-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "frequency-adverbs",
        question: "Which frequency adverb means **'rarely / seldom'** (~10% of the time)?",
        options: ["总是", "常常", "有时候", "很少"],
        answerIndex: 3,
        hints: ["Literally 'very little / very few'."],
        explanation:
          "**很少** (*hěn shǎo*) means 'rarely / seldom'. **总是** (*zǒngshì*) is 'always', **常常** (*chángcháng*) is 'often', and **有时候** (*yǒushíhou*) is 'sometimes'.",
      },
      {
        id: "leisure-plans-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "frequency-adverbs",
        question: "Choose the sentence with natural Mandarin word order for *'I often go online at the weekend'*:",
        options: [
          "我周末常常上网。",
          "我上网常常周末。",
          "常常我上网在周末。",
          "我周末上网常常。",
        ],
        answerIndex: 0,
        hints: ["Remember Stage-Before-Action: Subject + Time + Frequency Adverb + Verb!"],
        explanation:
          "**我周末常常上网。** follows Subject (**我**) + Time (**周末**) + Frequency Adverb (**常常**) + Verb (**上网**). Mandarin never places **常常** or **周末** at the end of the sentence.",
      },
      {
        id: "leisure-plans-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "free-time-activities",
        question: "How do you say *'Grandpa reads books in the library on Sundays'* in natural Mandarin?",
        options: [
          "爷爷看书在图书馆星期天。",
          "爷爷星期天在图书馆看书。",
          "爷爷在图书馆星期天看书。",
          "星期天看书爷爷在图书馆。",
        ],
        answerIndex: 1,
        hints: [
          "Use STPV word order: Subject → Time → Place → Verb.",
          "Time (**星期天**) comes BEFORE Place (**在图书馆**), and both come before **看书**.",
        ],
        explanation:
          "**爷爷星期天在图书馆看书。** puts Subject (**爷爷**) + Time (**星期天**) + Location (**在图书馆**) + Action (**看书**) in exact STPV order. Putting **在图书馆** before **星期天** or after **看书** breaks STPV.",
      },
      {
        id: "leisure-plans-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "free-time-activities",
        question: "Why is *我常常聊天朋友* ungrammatical, and how should you fix it?",
        options: [
          "聊天 only applies to family members, so use 说话朋友.",
          "聊天 must go at the start of the sentence: 聊天我朋友.",
          "聊天 is a separable verb-object pair, so say 我常常跟朋友聊天.",
          "朋友 must take 个, so say 我常常聊天一个朋友.",
        ],
        answerIndex: 2,
        hints: [
          "In **聊天**, **聊** is the verb ('chat') and **天** is already its grammatical object!",
          "How do you introduce the person you do an activity *with*?",
        ],
        explanation:
          "Because **聊天** (*liáotiān*) already contains a verb (**聊**) + object (**天**), you cannot attach **朋友** after it. Introduce your companion before the verb with **跟**: **我常常跟朋友聊天。**",
      },
      {
        id: "leisure-plans-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "frequency-adverbs",
        question: "Rank these four frequency expressions from **most frequent (100%)** to **least frequent (0%)**:",
        options: [
          "常常 → 总是 → 有时候 → 从不",
          "总是 → 有时候 → 经常 → 从不",
          "经常 → 总是 → 很少 → 有时候",
          "总是 → 经常 → 有时候 → 从不",
        ],
        answerIndex: 3,
        hints: [
          "Which word means 100% ('always') and which means 0% ('never')?",
          "**经常** ('frequently/often') sits around 75%, higher than **有时候** ('sometimes', ~50%).",
        ],
        explanation:
          "From highest to lowest frequency: **总是** (100%, always) → **经常** (~75%, frequently) → **有时候** (~50%, sometimes) → **从不** (0%, never).",
      },
      {
        id: "leisure-plans-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "frequency-adverbs",
        question: "How do you say *'My older sister watches a film twice a week'*?",
        options: [
          "姐姐一个星期看两次电影。",
          "姐姐一个星期两次看电影。",
          "姐姐看电影一个星期二次。",
          "姐姐二次看电影一个星期。",
        ],
        answerIndex: 0,
        hints: [
          "Does the measure word **次** take **二** or **两**?",
          "Exact counted occurrences (**两次**) split verb-object phrases right after the verb **看**!",
        ],
        explanation:
          "**姐姐一个星期看两次电影。** uses **两次** (*liǎng cì*, never *二次*) and places the frequency complement directly after the verb **看** and before the object **电影**.",
      },
      {
        id: "leisure-plans-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-plans-dasuan",
        question: "Complete the question naturally: **这个周末你____做什么？** (*What do you plan to do this weekend?*)",
        options: ["总是", "打算", "以前", "从不"],
        answerIndex: 1,
        hints: [
          "Look at **这个周末** (*this weekend*) — it asks about a specific upcoming plan, not a habit or past time.",
          "Which verb means 'to plan / intend to'?",
        ],
        explanation:
          "**打算** (*dǎsuàn*, to plan to) asks about a specific upcoming intention: **这个周末你打算做什么？** **总是** and **从不** describe general habits, while **以前** means 'before / in the past'.",
      },
      {
        id: "leisure-plans-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-plans-dasuan",
        question: "Which sentence correctly says *'On Saturday I plan to do homework first, and then play on my phone'*?",
        options: [
          "星期六先我打算做作业，再玩手机。",
          "星期六我打算做作业先，玩手机再。",
          "星期六我打算先做作业，再玩手机。",
          "先星期六我做作业打算，再玩手机。",
        ],
        answerIndex: 2,
        hints: [
          "Both **先** ('first') and **再** ('then') are adverbs that must stand directly before their action verbs.",
          "**打算** governs the whole planned sequence.",
        ],
        explanation:
          "**星期六我打算先做作业，再玩手机。** puts **打算** after the subject, followed by **先 + Verb 1** (**先做作业**) and **再 + Verb 2** (**再玩手机**). Putting **先** before **我** or after **做作业** is ungrammatical.",
      },
      {
        id: "leisure-plans-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "together-invitations",
        question: "Translate: *'I often go to East Coast Park with my family.'*",
        options: [
          "我常常去东海岸公园跟家人。",
          "我跟家人常常去东海岸公园一起。",
          "跟家人我去常常东海岸公园。",
          "我常常跟家人一起去东海岸公园。",
        ],
        answerIndex: 3,
        hints: [
          "Where does **跟家人一起** ('together with family') sit relative to **去**?",
          "Frequency adverb **常常** comes BEFORE **跟家人一起**.",
        ],
        explanation:
          "**我常常跟家人一起去东海岸公园。** follows Subject (**我**) + Frequency (**常常**) + Companion (**跟家人一起**) + Verb + Destination (**去东海岸公园**). Never leave **跟家人** or **一起** dangling at the end!",
      },
      {
        id: "leisure-plans-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "together-invitations",
        question: "Your friend texts: **我们星期天一起去圣淘沙，怎么样？** Which reply enthusiastically **accepts** the invitation?",
        options: [
          "好主意！我们几点见面？",
          "不好意思，星期天我有事。",
          "真不巧，我没有空。",
          "我们改天再去吧！",
        ],
        answerIndex: 0,
        hints: ["Look for the phrase meaning *'Good idea! What time shall we meet?'*"],
        explanation:
          "**好主意！我们几点见面？** ('Good idea! What time shall we meet?') warmly accepts the invitation. The other three choices (**不好意思…**, **真不巧…**, **改天再去吧**) all politely decline.",
      },
      {
        id: "leisure-plans-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weekend-diary-plan",
        question: "Which time expression means **'last weekend'**?",
        options: ["下个周末", "上个周末", "这个周末", "每个周末"],
        answerIndex: 1,
        hints: [
          "Mandarin pictures time vertically from top to bottom.",
          "Does 'above' (**上**) or 'below' (**下**) represent earlier time?",
        ],
        explanation:
          "**上个周末** (*shàng gè zhōumò*) means 'last weekend' (earlier time sits 'above'). **下个周末** is 'next weekend', **这个周末** is 'this weekend', and **每个周末** is 'every weekend'.",
      },
      {
        id: "leisure-plans-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "weekend-diary-plan",
        question: "Choose the ONLY sentence whose time marker, aspect particle, and negation all match without contradiction:",
        options: [
          "上个周末我打算去了电影院看电影。",
          "这个周末我跟姐姐去了乌节路逛街。",
          "上个周末因为下大雨，所以我没去公园散步。",
          "上个周末我没有去了图书馆看书。",
        ],
        answerIndex: 2,
        hints: [
          "Check each sentence's time phrase (**上个周末** = past vs **这个周末** = upcoming).",
          "Remember two strict bans: future **打算** never pairs with completed **了**, and past negative **没/没有** NEVER co-occurs with **了**!",
        ],
        explanation:
          "**上个周末因为下大雨，所以我没去公园散步。** is 100% grammatical: past **上个周末** is negated cleanly with **没去** (no **了**). Combining **打算** with **去了**, using **去了** for an upcoming **这个周末** plan, or writing *没有去了* are classic IGCSE aspect errors.",
      },
    ],
  },
  {
    id: "leisure-plans-m2",
    title: "Paper 2 · Invitations, Word Order & Singapore Hangouts",
    questions: [
      {
        id: "leisure-plans-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "free-time-activities",
        question: "What does **睡懒觉** (*shuì lǎnjiào*) mean when describing your Sunday morning?",
        options: [
          "to go to bed early",
          "to revise in the bedroom",
          "to feel sleepy in class",
          "to have a lie-in / sleep in late",
        ],
        answerIndex: 3,
        hints: ["**睡** = sleep, **懒** = lazy — what 'lazy sleep' do people enjoy on Sunday mornings?"],
        explanation:
          "**睡懒觉** (*shuì lǎnjiào*) means 'to have a lie-in / sleep in late'. 'To go to bed early' is **早睡** or **早点睡觉**.",
      },
      {
        id: "leisure-plans-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "free-time-activities",
        question: "Which building is **博物馆** (*bówùguǎn*)?",
        options: ["museum", "library", "cinema", "shopping mall"],
        answerIndex: 0,
        hints: ["Compare **图书馆** (books **书** = library) with **博物馆** (abundant **博** + artefacts **物**)."],
        explanation:
          "**博物馆** (*bówùguǎn*) is 'museum'. 'Library' is **图书馆** (*túshūguǎn*), 'cinema' is **电影院** (*diànyǐngyuàn*), and 'shopping mall' is **商场** (*shāngchǎng*).",
      },
      {
        id: "leisure-plans-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "frequency-adverbs",
        question: "Which sentence correctly uses **每天…都…** (*'My dad reads books every evening'*)?",
        options: [
          "爸爸都每天晚上看书。",
          "爸爸每天晚上都看书。",
          "爸爸每天晚上看书都。",
          "都爸爸每天晚上看书。",
        ],
        answerIndex: 1,
        hints: ["**都** (*dōu*) is an adverb: it must come AFTER the **每** phrase and directly BEFORE the verb!"],
        explanation:
          "**爸爸每天晚上都看书。** places **都** right after **每天晚上** and directly before the verb **看书**. **都** can never stand before the word it quantifies (**每天**) or at the end of a sentence.",
      },
      {
        id: "leisure-plans-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "frequency-adverbs",
        question: "Read Xiaoming's habit: **小明周末有时候在家上网，有时候去公园跑步。** How often does Xiaoming go running in the park?",
        options: [
          "Always (every single weekend)",
          "Never",
          "Sometimes",
          "Twice every day",
        ],
        answerIndex: 2,
        hints: [
          "Look at the repeated pattern **有时候…，有时候…**.",
          "What does **有时候** (*yǒushíhou*) mean?",
        ],
        explanation:
          "**有时候…，有时候…** means 'sometimes …, sometimes …', so Xiaoming **sometimes** surfs the internet at home and **sometimes** goes running in the park.",
      },
      {
        id: "leisure-plans-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-plans-dasuan",
        question: "In the question **这个假期你有什么打算？**, what part of speech is **打算**?",
        options: ["verb", "adjective", "adverb", "noun"],
        answerIndex: 3,
        hints: [
          "Look at the words right before **打算**: **有什么…** ('have what …').",
          "What kind of word follows **有什么**?",
        ],
        explanation:
          "After **有什么** ('what … do you have?'), **打算** functions as a **noun** meaning 'plan(s)'. **打算** is versatile: it works both as a verb (**我打算去…**) and as a noun (**有什么打算**).",
      },
      {
        id: "leisure-plans-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-plans-dasuan",
        question: "Which sentence best expresses a polite, gentle wish (*'I'd like to rest at home this Sunday afternoon'*) rather than a strict obligation?",
        options: [
          "这个星期天下午我想在家休息。",
          "这个星期天下午我得在家休息。",
          "这个星期天下午我从不在家休息。",
          "这个星期天下午我已经在家休息了。",
        ],
        answerIndex: 0,
        hints: [
          "Compare **想** (*xiǎng*, would like to) vs **得** (*děi*, must/have to).",
          "Which verb expresses a soft personal wish?",
        ],
        explanation:
          "**想** (*xiǎng*) expresses a gentle wish ('would like to'): **这个星期天下午我想在家休息。** **得** (*děi*) means 'must / have to', **从不** means 'never', and **已经…了** means 'already'.",
      },
      {
        id: "leisure-plans-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-plans-dasuan",
        question: "Translate *'After eating lunch, we plan to go shopping'* into idiomatic Mandarin:",
        options: [
          "以前吃午饭，我们打算去买东西。",
          "吃午饭以后，我们打算去买东西。",
          "以后吃午饭，我们打算买东西去。",
          "吃午饭以前，我们打算去买东西了。",
        ],
        answerIndex: 1,
        hints: [
          "'After' is **以后** (*yǐhòu*), while **以前** means 'before'.",
          "Does **以后** go BEFORE or AFTER the event phrase **吃午饭**?",
        ],
        explanation:
          "In Mandarin, **以后** ('after') is placed **after** the event clause: **吃午饭以后** ('eat lunch after' = after eating lunch). Writing *以后吃午饭* copies English word order and is wrong.",
      },
      {
        id: "leisure-plans-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "together-invitations",
        question: "Which of these invitation sentences contains a **grammatical error**?",
        options: [
          "我们星期六一起去看电影，好吗？",
          "你明天下午有空吗？",
          "我们一起去乌节路逛街，怎么样吗？",
          "我们三点在地铁站门口见面吧！",
        ],
        answerIndex: 2,
        hints: [
          "Check the question words at the end of each sentence.",
          "Can an open question word like **怎么样** also take the yes/no particle **吗**?",
        ],
        explanation:
          "**我们一起去乌节路逛街，怎么样吗？** is ungrammatical because **怎么样** ('how about it?') is already a question expression — adding **吗** doubles up question markers! Say **…，怎么样？** or **…，好吗？**.",
      },
      {
        id: "leisure-plans-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "together-invitations",
        question: "How do you politely decline a classmate's Saturday cinema invitation because you are busy?",
        options: [
          "我不去，电影很没意思！",
          "太好了，我们在门口等你！",
          "没问题，星期六下午见！",
          "不好意思，星期六下午我有事，我们改天再去吧！",
        ],
        answerIndex: 3,
        hints: [
          "Look for a polite apology opener (**不好意思**), a gentle reason (**我有事**), and a friendly rain check (**改天**).",
          "Avoid blunt refusals or acceptances!",
        ],
        explanation:
          "**不好意思，星期六下午我有事，我们改天再去吧！** ('Sorry, I have something on Saturday afternoon — let's go another day!') is warm, idiomatic, and scores full communication marks in IGCSE roleplays.",
      },
      {
        id: "leisure-plans-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "together-invitations",
        question: "Choose the correct sentence for *'Let's meet at the cinema entrance at 2 p.m.'*:",
        options: [
          "我们下午两点在电影院门口见面。",
          "我们见面下午两点在电影院门口。",
          "我们在电影院门口下午两点见面你。",
          "我们下午两点见面在电影院门口。",
        ],
        answerIndex: 0,
        hints: [
          "Apply STPV order: Subject (**我们**) + Time (**下午两点**) + Location (**在电影院门口**) + Verb (**见面**).",
          "Remember **见面** never takes a direct object like *见面你*!",
        ],
        explanation:
          "**我们下午两点在电影院门口见面。** puts Time (**下午两点**) before Location (**在电影院门口**), and both before **见面**.",
      },
      {
        id: "leisure-plans-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "free-time-activities",
        question: "Read: **姐姐周末很少在家看电视，她常常去植物园拍照或者散步。** What does the older sister rarely do at the weekend?",
        options: [
          "Take photos at the Botanic Gardens",
          "Watch television at home",
          "Go for a walk in the Botanic Gardens",
          "Read books in the library",
        ],
        answerIndex: 1,
        hints: [
          "Find the adverb **很少** (*hěn shǎo*, rarely) in the first clause.",
          "What activity immediately follows **很少在家**?",
        ],
        explanation:
          "**很少在家看电视** means she **rarely watches television at home**. By contrast, **常常去植物园拍照或者散步** says she *often* goes to the Botanic Gardens to take photos or stroll.",
      },
      {
        id: "leisure-plans-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-plans-dasuan",
        question: "How do you negate **打算** to say *'This weekend I don't plan to go out'*?",
        options: [
          "这个周末我没打算出去了。",
          "这个周末我打算没出去。",
          "这个周末我不打算出去。",
          "这个周末我别打算出去。",
        ],
        answerIndex: 2,
        hints: [
          "Is a weekend intention a present/future mental state (**不**) or a completed past action (**没**)?",
          "Avoid adding **了** when negating a future plan!",
        ],
        explanation:
          "Present/future intentions with **打算** are negated with **不** directly before **打算**: **这个周末我不打算出去。** (**别** means 'don't!' as an imperative command.)",
      },
      {
        id: "leisure-plans-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "together-invitations",
        question: "Put all five chunks into the ONLY grammatical Mandarin order:\n① **去乌节路买衣服**  ② **打算**  ③ **这个星期六**  ④ **我**  ⑤ **跟妈妈一起**",
        options: [
          "④ ② ⑤ ① ③",
          "③ ④ ⑤ ② ①",
          "④ ③ ① ② ⑤",
          "③ ④ ② ⑤ ①",
        ],
        answerIndex: 3,
        hints: [
          "Start with Time + Subject (**这个星期六我**).",
          "Does the auxiliary intention verb **打算** come BEFORE or AFTER **跟妈妈一起**?",
          "Auxiliary verbs (**打算 / 想 / 要**) always precede prepositional phrases (**跟…一起 / 在…**).",
        ],
        explanation:
          "The natural order is ③ **这个星期六** + ④ **我** + ② **打算** + ⑤ **跟妈妈一起** + ① **去乌节路买衣服** → **这个星期六我打算跟妈妈一起去乌节路买衣服。** Putting **跟妈妈一起** before **打算** (*我跟妈妈一起打算…*) changes the meaning or sounds awkward when only 'I' am stating my plan.",
      },
      {
        id: "leisure-plans-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "weekend-diary-plan",
        question: "Read Dalin's diary:\n**平时周末我总是睡懒觉，可是上个星期天我早上六点半就起床了，因为我要跟爸爸去东海岸公园骑自行车。这个周末我准备在家好好休息！**\nWhy did Dalin get up at 6:30 a.m. last Sunday?",
        options: [
          "Because he was going cycling at East Coast Park with his dad.",
          "Because he always gets up at 6:30 a.m. every weekend.",
          "Because he needed to rest at home all morning.",
          "Because he had an early Chinese lesson at school.",
        ],
        answerIndex: 0,
        hints: [
          "Look right after **因为** ('because') in the middle sentence.",
          "Contrast his usual habit (**平时周末总是睡懒觉**) with what happened **上个星期天**.",
        ],
        explanation:
          "After **因为**, Dalin explains **我要跟爸爸去东海岸公园骑自行车** — he was going cycling at East Coast Park with his dad. Normally (**平时周末**) he sleeps in, and **这个周末** he plans to rest at home.",
      },
      {
        id: "leisure-plans-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "frequency-adverbs",
        question: "Compare these two negative sentences:\n1. **我不常跟朋友去商场。**\n2. **我从来不跟朋友去商场。**\nWhat is the exact difference in meaning?",
        options: [
          "Sentence 1 is past tense; Sentence 2 is future tense.",
          "Sentence 1 means 'I don't often go to the mall with friends'; Sentence 2 means 'I never go to the mall with friends'.",
          "Sentence 1 is polite; Sentence 2 is ungrammatical.",
          "Sentence 1 means 'I never go'; Sentence 2 means 'I rarely go'.",
        ],
        answerIndex: 1,
        hints: [
          "**不常** negates **常** ('often' → 'not often').",
          "**从来不** means 'never at all (0%)'.",
        ],
        explanation:
          "**不常** (*bù cháng*) means 'not often / seldom' (maybe occasionally), whereas **从来不** (*cónglái bù*) is absolute 0% habitual negation ('never'). Both describe present/general habits.",
      },
    ],
  },
  {
    id: "leisure-plans-m3",
    title: "Paper 3 · IGCSE Reading, Dialogues & Nuance",
    questions: [
      {
        id: "leisure-plans-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "free-time-activities",
        question: "Which phrase means **'on ordinary weekdays / usually'** (often used to contrast with **周末**)?",
        options: ["放假", "改天", "平时", "门口"],
        answerIndex: 2,
        hints: ["**平** = ordinary/usual, **时** = time."],
        explanation:
          "**平时** (*píngshí*) means 'usually / on ordinary weekdays' (e.g. **我平时很忙，周末才有空**). **放假** is 'on holiday', **改天** is 'another day', and **门口** is 'entrance'.",
      },
      {
        id: "leisure-plans-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "making-plans-dasuan",
        question: "What does **准备** (*zhǔnbèi*) mean in **下个周末我们准备去植物园野餐**?",
        options: [
          "finished doing",
          "rarely do",
          "forgot to",
          "plan to / prepare to",
        ],
        answerIndex: 3,
        hints: ["Like **打算**, **准备** before an action verb expresses an upcoming plan or preparation."],
        explanation:
          "**准备** (*zhǔnbèi*) means 'to prepare to / intend to / plan to', so the sentence means 'Next weekend we plan to go to the Botanic Gardens for a picnic.'",
      },
      {
        id: "leisure-plans-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "together-invitations",
        question: "What does **改天** (*gǎitiān*) mean in **我们改天再一起去看电影吧！**?",
        options: [
          "another day (rain check)",
          "every single day",
          "yesterday",
          "all day long",
        ],
        answerIndex: 0,
        hints: ["**改** means 'change' and **天** means 'day' — literally 'change the day'!"],
        explanation:
          "**改天** (*gǎitiān*, literally 'change day') means 'another day' — the standard friendly phrase when rescheduling an invitation.",
      },
      {
        id: "leisure-plans-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "free-time-activities",
        question: "Look closely at the measure word in **我想看那___新电影** (*'I'd like to watch that new film'*). Which classifier fits **电影**?",
        options: ["本", "部", "件", "张"],
        answerIndex: 1,
        hints: [
          "**本** is for books, **件** is for tops/matters, **张** is for flat tickets/tables.",
          "Films, dramas, and mobile phones use a dedicated classifier!",
        ],
        explanation:
          "Films take the measure word **部** (*bù*): **一部新电影** / **那部新电影**. Note that a *cinema ticket* (**电影票**) is flat paper, so a ticket takes **张** (**一张电影票**).",
      },
      {
        id: "leisure-plans-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "free-time-activities",
        question: "Compare:\n- **星期六我在家看书。**\n- **星期六我去图书馆看书。**\nWhy does the first sentence use **在** while the second uses **去**?",
        options: [
          "因为 家 cannot follow 去 in Mandarin.",
          "因为 图书馆 is bigger than 家.",
          "在 marks the static location where an action happens; 去 marks going to a destination in order to do the action.",
          "在 is only for past tense and 去 is only for future tense.",
        ],
        answerIndex: 2,
        hints: [
          "Translate **在家** ('at home') vs **去图书馆** ('go to the library').",
          "Think about static location vs movement towards a venue.",
        ],
        explanation:
          "**在 + Place + Verb** states *where* you perform an activity (**在家看书** = read at home), while **去 + Place + Verb** forms a serial-verb chain meaning *go somewhere to do* the activity (**去图书馆看书** = go to the library to read).",
      },
      {
        id: "leisure-plans-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "frequency-adverbs",
        question: "Which sentence has a **wrong** use of **了**?",
        options: [
          "上个星期六我看了两部电影。",
          "太好了！明天我们可以一起去圣淘沙！",
          "昨天下午我去超市买了很多东西。",
          "我爸爸每个周末都去了公园散步。",
        ],
        answerIndex: 3,
        hints: [
          "Check which sentence describes a **repeated habitual routine** (**每个周末都…**).",
          "Do habitual routines take completed-action **了**?",
        ],
        explanation:
          "**我爸爸每个周末都去了公园散步。** is wrong because **每个周末都…** describes an ongoing habitual routine, which NEVER takes completed-action **了** (it should be **每个周末都去公园散步**). Note that **太好了！** uses modal exclamation **太…了**, not past tense!",
      },
      {
        id: "leisure-plans-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "frequency-adverbs",
        question: "How do you say *'We go to the museum once a month'* in Mandarin?",
        options: [
          "我们一个月去一次博物馆。",
          "我们一次去博物馆一个月。",
          "我们去博物馆一个月一趟次。",
          "一个月一次我们博物馆去。",
        ],
        answerIndex: 0,
        hints: [
          "Timeframe (**一个月**) stands before the verb **去**.",
          "Counted occurrence (**一次**) stands right AFTER **去** and before **博物馆**.",
        ],
        explanation:
          "**我们一个月去一次博物馆。** follows Subject (**我们**) + Period (**一个月**) + Verb (**去**) + Frequency Count (**一次**) + Destination Object (**博物馆**).",
      },
      {
        id: "leisure-plans-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-plans-dasuan",
        question: "Read this WhatsApp exchange:\n- A: **明天上午十点我们一起去打网球，好吗？**\n- B: **不好意思，明天上午十点我要上中文课。下午三点怎么样？**\nWhat is B proposing?",
        options: [
          "Cancelling tennis completely because B hates sport.",
          "Meeting at 3 p.m. instead because B has a Chinese lesson at 10 a.m.",
          "Inviting A to join the Chinese lesson at 10 a.m.",
          "Playing tennis at 10 a.m. before going to Chinese class at 3 p.m.",
        ],
        answerIndex: 1,
        hints: [
          "Why can't B make 10 a.m. (**上午十点我要上中文课**)?",
          "What counter-suggestion does B float with **下午三点怎么样？**?",
        ],
        explanation:
          "B politely explains that at 10 a.m. tomorrow they have a Chinese lesson (**我要上中文课**), and counter-proposes **下午三点怎么样？** ('How about 3 p.m.?').",
      },
      {
        id: "leisure-plans-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "making-plans-dasuan",
        question: "Which sentence correctly uses **如果…就…** (*if … then …*) for a weekend plan?",
        options: [
          "如果星期天不下雨，就我们去东海岸公园野餐。",
          "星期天如果不下雨，我们去东海岸公园野餐就。",
          "如果星期天不下雨，我们就去东海岸公园野餐。",
          "就如果星期天不下雨，我们去东海岸公园野餐。",
        ],
        answerIndex: 2,
        hints: [
          "Just like **先** and **都**, **就** (*jiù*) is an adverb!",
          "Where must **就** sit relative to the subject **我们** in the second clause?",
        ],
        explanation:
          "**如果星期天不下雨，我们就去东海岸公园野餐。** places **就** right AFTER the subject **我们** and BEFORE the verb **去** (NEVER *就我们…*!).",
      },
      {
        id: "leisure-plans-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "together-invitations",
        question: "Look at the difference between **见** and **见面**. Which sentence is **grammatically correct**?",
        options: [
          "星期六我打算去商场见面朋友。",
          "我们明天三点见在地铁站。",
          "我很久没有见面他了。",
          "星期六我打算去商场跟朋友见面。",
        ],
        answerIndex: 3,
        hints: [
          "**见** can take a direct object (**见朋友**), whereas **见面** is a separable verb-object pair!",
          "How do you introduce the person with **见面**?",
        ],
        explanation:
          "**星期六我打算去商场跟朋友见面。** correctly uses **跟 + Person + 见面** (you could also say **去商场见朋友**). Writing *见面朋友* or *见面他* treats separable **见面** as if it could take another object.",
      },
      {
        id: "leisure-plans-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weekend-diary-plan",
        question: "Why do **上个周末**, **这个周末**, and **下个周末** all include **个**, whereas **昨天 / 今天 / 明天** do not?",
        options: [
          "周末 behaves like a countable noun taking 个 after 上/这/下 (just like 上个星期), whereas 天/年 fuse directly with 昨/今/明.",
          "个 shows past tense in Mandarin.",
          "周末 is an adjective so it requires 个.",
          "个 is optional slang used only in Singapore.",
        ],
        answerIndex: 0,
        hints: [
          "Compare **这个星期 / 下个月 / 这个周末** vs **今天 / 明年**.",
          "Demonstratives and **上/下** need a measure word before **星期**, **月**, and **周末**!",
        ],
        explanation:
          "Nouns like **星期**, **月**, and **周末** require the classifier **个** after **上 / 这 / 下 / 每** (**上个周末**, **每个星期**), whereas single-syllable units **天** and **年** bond directly (**明天**, **去年**, **每天**).",
      },
      {
        id: "leisure-plans-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "weekend-diary-plan",
        question: "Read Linlin's IGCSE blog post:\n**上个周末因为我有数学考试，所以两天都在家复习，哪儿也没去，觉得有点儿无聊。这个周末考完试了，我打算星期六先睡个懒觉，下午再跟好朋友去乌节路看一部新电影，一定很开心！**\nWhich statement is **TRUE** according to the passage?",
        options: [
          "Linlin went to Orchard Road last Saturday after her maths exam.",
          "Linlin stayed home all last weekend revising for maths and found it a bit boring.",
          "Linlin plans to revise in the library this Saturday morning.",
          "Linlin's maths exam is next Monday.",
        ],
        answerIndex: 1,
        hints: [
          "Separate **上个周末** ('last weekend') from **这个周末** ('this weekend').",
          "**两天都在家复习，哪儿也没去，觉得有点儿无聊** describes last weekend!",
        ],
        explanation:
          "Last weekend (**上个周末**), Linlin had an upcoming maths exam, so she revised at home for both days, went nowhere (**哪儿也没去**), and felt a bit bored (**觉得有点儿无聊**). Now that the exam is finished (**考完试了**), she plans a lie-in and an Orchard Road cinema trip *this* Saturday.",
      },
      {
        id: "leisure-plans-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "frequency-adverbs",
        question: "Four Tanglin Year 8 students compare how often they go to the cinema:\n- **小文**: 我每个月看两次电影。\n- **小丽**: 我从不去电影院看电影，我总是上网看。\n- **小海**: 我每个星期六都去电影院看电影。\n- **小美**: 我一年只去一次电影院。\nWho visits the **cinema** (*电影院*) most often?",
        options: ["小文", "小丽", "小海", "小美"],
        answerIndex: 2,
        hints: [
          "Watch out for the trap in Xiaoli's sentence: she says **总是**, but *where* does she watch films?",
          "Compare **每个月两次** (twice a month), **每个星期六都去** (every Saturday ≈ 4 times a month), and **一年一次** (once a year).",
        ],
        explanation:
          "**小海** visits the cinema most often — **每个星期六都去电影院** (every Saturday, ~4 times a month). **小文** goes twice a month, **小美** goes once a year, and **小丽** *never* goes to the cinema (**从不去电影院**), even though she always watches online!",
      },
      {
        id: "leisure-plans-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "making-plans-dasuan",
        question: "Why would a native speaker say **这个周末我打算去游泳** rather than *这个周末我会去游泳* when answering *What are your plans?*",
        options: [
          "会 can never be used before two-character verbs like 游泳.",
          "打算 is only used for water sports.",
          "会 is past tense whereas 打算 is future tense.",
          "打算 expresses a deliberate personal plan/intention, whereas future 会 mainly expresses prediction or likelihood (like 明天会下雨).",
        ],
        answerIndex: 3,
        hints: [
          "Think of the two main jobs of **会**: learned skill (**我会游泳**) and prediction (**明天会下雨**).",
          "When stating what you have *chosen and planned* to do this weekend, which verb signals personal intention?",
        ],
        explanation:
          "English uses 'will' for both weather predictions and personal plans, tempting learners to overuse **会**. In Mandarin, **会** marks learned skill or prediction/likelihood, whereas deliberate weekend plans naturally use **打算**, **准备**, or **要**.",
      },
      {
        id: "leisure-plans-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "together-invitations",
        question: "Read the full invitation chain:\n- 美美: **大伟，这个星期天上午你有空吗？我们一起去植物园散步，好吗？**\n- 大伟: **星期天上午我要去爷爷奶奶家吃饭。下午两点我有空，我们下午去，怎么样？**\n- 美美: **没问题！那我们下午两点在植物园地铁站门口见面，不见不散！**\nWhere and when have Meimei and Dawei agreed to meet?",
        options: [
          "Sunday at 2 p.m. at the Botanic Gardens MRT station entrance.",
          "Sunday at 10 a.m. at Dawei's grandparents' house.",
          "Saturday at 2 p.m. inside the Botanic Gardens café.",
          "Next weekend because Dawei is busy all Sunday.",
        ],
        answerIndex: 0,
        hints: [
          "Dawei cannot make Sunday morning (**星期天上午**), so he proposes **下午两点** (2 p.m.).",
          "Check Meimei's final confirmation: **下午两点在植物园地铁站门口见面**.",
        ],
        explanation:
          "They agree to meet on **Sunday at 2 p.m.** (**星期天下午两点**) at the **Botanic Gardens MRT station entrance** (**植物园地铁站门口**).",
      },
    ],
  },
];
