import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "tenses-particles-m1",
    title: "Paper 1 — Core Particles: 了, 过, 正在, Future & Negation",
    questions: [
      {
        id: "tenses-particles-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "completed-action-le",
        question:
          "How do you say *'I ate two steamed buns this morning'*?",
        options: [
          "我今天早上吃了两个包子。",
          "我今天早上吃两个包子正在。",
          "我今天早上了吃两个包子。",
          "我今天早上吃过两个包子呢。",
        ],
        answerIndex: 0,
        hints: [
          "Completed action **了** goes immediately AFTER the verb **吃** and BEFORE the quantity **两个包子**.",
        ],
        explanation:
          "**我今天早上吃了两个包子。** places completed-action **了** right between the verb **吃** and the quantified object **两个包子**.",
      },
      {
        id: "tenses-particles-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "past-experience-guo",
        question:
          "Which particle goes in the blank to ask *'Have you ever been to Beijing?'*: **你去 ______ 北京吗？**",
        options: ["正在", "过", "着", "呢"],
        answerIndex: 1,
        hints: [
          "Which neutral-tone particle right after the verb asks about **life experience** (*have ever -ed*)?",
        ],
        explanation:
          "**过** (*guo*) marks past life experience (**你去过北京吗？** = *Have you ever been to Beijing?*). **正在** goes before the verb for ongoing actions, and **呢** goes at the end.",
      },
      {
        id: "tenses-particles-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ongoing-zhengzai",
        question:
          "Choose the natural Mandarin sentence for *'My younger brother is watching TV right now'*:",
        options: [
          "弟弟是看电视了。",
          "弟弟看电视过呢。",
          "弟弟正在看电视呢。",
          "弟弟正在看电视了。",
        ],
        answerIndex: 2,
        hints: [
          "Ongoing present (*is -ing*) uses **正在 … (呢)** — never **是** and never **了**!",
        ],
        explanation:
          "**弟弟正在看电视呢。** uses **正在 + Verb + Object + 呢** for an action in progress right now. **正在…了** is a contradiction because an action cannot be both ongoing and finished.",
      },
      {
        id: "tenses-particles-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "future-markers",
        question:
          "Fill in the blank for a weather forecast: **天气预报说今天下午 ______ 下雨。** (*The weather forecast says it will rain this afternoon.*)",
        options: ["打算", "过", "正在", "会"],
        answerIndex: 3,
        hints: [
          "Clouds cannot make personal plans (**打算**) — which word marks a future **prediction**?",
        ],
        explanation:
          "**会** (*huì*) expresses future likelihood or prediction (**会下雨**). **打算** (*plan to*) requires a conscious person making a plan!",
      },
      {
        id: "tenses-particles-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "bu-vs-mei",
        question:
          "Choose the ONLY grammatically **correct** way to say *'I didn't watch a film yesterday'*:",
        options: [
          "我昨天没看电影。",
          "我昨天不看电影。",
          "我昨天没看了电影。",
          "我昨天不看了电影。",
        ],
        answerIndex: 0,
        hints: [
          "Past actions are negated with **没** — and remember what happens to **了** when **没** appears!",
        ],
        explanation:
          "**我昨天没看电影。** negates the past action with **没** and drops **了**. **昨天不看** misuses **不** for an objective past event, and **没看了** illegally keeps **了** with **没**.",
      },
      {
        id: "tenses-particles-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bu-vs-mei",
        question:
          "How do you say *'I don't have Chinese class tomorrow'*?",
        options: [
          "我明天不有中文课。",
          "我明天没有中文课。",
          "我明天没了中文课。",
          "我明天不没中文课。",
        ],
        answerIndex: 1,
        hints: [
          "Look at the verb **有** (*to have*)!",
          "Does **有** EVER take **不** — even when talking about tomorrow?",
        ],
        explanation:
          "**我明天没有中文课。** is right because the verb **有** (*have*) is ALWAYS negated with **没** (**没有**), even in present or future sentences! ***不有*** never exists in Mandarin.",
      },
      {
        id: "tenses-particles-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "past-experience-guo",
        question:
          "How do you say *'I have never eaten durian'*?",
        options: [
          "我不吃过榴莲。",
          "我没吃了榴莲。",
          "我没吃过榴莲。",
          "我不吃榴莲过。",
        ],
        answerIndex: 2,
        hints: [
          "Life experience uses **过** and negates with **没** (or **没有**), NOT **不**.",
          "Unlike **了**, **过** STAYS attached to the verb in the negative!",
        ],
        explanation:
          "**我没吃过榴莲。** uses **没(有) + Verb + 过**, keeping **过** to mean *never in my life*. **不吃过** wrongly pairs **不** with **过**.",
      },
      {
        id: "tenses-particles-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "completed-action-le",
        question:
          "In which sentence is **了** used **INCORRECTLY**?",
        options: [
          "外面下大雨了！",
          "妈妈昨天买了两公斤芒果。",
          "我已经吃饱了。",
          "我每天早上六点半起床了。",
        ],
        answerIndex: 3,
        hints: [
          "Check which sentence describes a **daily habitual routine** rather than a single completed event or new state!",
          "Look at **每天早上** (*every morning*).",
        ],
        explanation:
          "**我每天早上六点半起床了。** is wrong because habitual routines marked by **每天** or **常常** do NOT take **了** — it should be **我每天早上六点半起床。**",
      },
      {
        id: "tenses-particles-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ongoing-zhengzai",
        question:
          "How do you say *'My older sister is reading in the library right now'*?",
        options: [
          "姐姐正在图书馆看书呢。",
          "姐姐正在在图书馆看书呢。",
          "姐姐是在图书馆看书了。",
          "姐姐在图书馆正在看书过。",
        ],
        answerIndex: 0,
        hints: [
          "When **正在** meets a location (**在图书馆**), fuse **正在 + 在** into a single **正在**!",
          "Never mix **正在** with **了** or **过**.",
        ],
        explanation:
          "**姐姐正在图书馆看书呢。** cleanly merges **正在** + Place (**图书馆**) + Verb (**看书**) + **呢**. **正在在图书馆** repeats **在** awkwardly.",
      },
      {
        id: "tenses-particles-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-markers",
        question:
          "Choose the best word to ask a friend about their **weekend plans**: **这个周末你 ______ 做什么？**",
        options: ["过", "打算", "已经", "刚刚"],
        answerIndex: 1,
        hints: [
          "**这个周末** refers to the upcoming weekend.",
          "Which verb means *'plan to / intend to'*?",
        ],
        explanation:
          "**打算** (*dǎsuàn*, plan to) asks about deliberate future plans (**这个周末你打算做什么？**). **过**, **已经**, and **刚刚** refer to past/completed events.",
      },
      {
        id: "tenses-particles-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-markers",
        question:
          "Look at the specific time phrase **下个星期** (*next week*) at the start: **下个星期 ______ 考试了！** Which imminent-future marker is grammatically required?",
        options: ["快要", "正在", "就要", "以前"],
        answerIndex: 2,
        hints: [
          "Both **快要…了** and **就要…了** mean *'about to'*.",
          "Which one MUST be used when a **specific time expression** (**下个星期**) stands in front?",
        ],
        explanation:
          "**就要** (*jiùyào*) is required after a specific time expression (**下个星期就要考试了！**). **快要…了** cannot follow a specific time noun like **下个星期** or **八点**.",
      },
      {
        id: "tenses-particles-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bu-vs-mei",
        question:
          "Fill in the two blanks accurately: **爸爸平时 ______ 喝咖啡，昨天也 ______ 喝茶。**",
        options: [
          "没 ； 不",
          "没 ； 没",
          "不 ； 不",
          "不 ； 没",
        ],
        answerIndex: 3,
        hints: [
          "**平时** (*usually*) describes a **habit** → **不** or **没**?",
          "**昨天** (*yesterday*) describes a **specific past day** → **不** or **没**?",
        ],
        explanation:
          "Present habits (**平时**) negate with **不** (**平时不喝咖啡**), whereas past actions that did not occur (**昨天**) negate with **没** (**昨天也没喝茶**).",
      },
      {
        id: "tenses-particles-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "past-experience-guo",
        question:
          "Compare two announcements about Teacher Wang:\n- Statement 1: **王老师去了上海。**\n- Statement 2: **王老师去过上海。**\nIf you knock on Teacher Wang's Singapore office door right now and someone replies with Statement 1 (**王老师去了上海**), where is Teacher Wang?",
        options: [
          "She has gone to Shanghai (and is away in Shanghai / on the trip right now)!",
          "She is definitely sitting inside her Singapore office right now.",
          "She has never been to Shanghai in her life.",
          "She is planning to go to Shanghai next year.",
        ],
        answerIndex: 0,
        hints: [
          "**去了上海** marks that her departure for Shanghai has taken place.",
          "Contrast that with **去过上海** (*has been to Shanghai before and returned*).",
        ],
        explanation:
          "**王老师去了上海** means *'Teacher Wang has gone to Shanghai'* (explaining why she isn't in Singapore right now!), whereas **王老师去过上海** simply states she has visited Shanghai at least once in her life.",
      },
      {
        id: "tenses-particles-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "completed-action-le",
        question:
          "Compare **昨天天气很冷** (no **了**) and **天冷了，多穿一件外套吧！** (with **了**). Why does the second sentence have **了** while the first does NOT?",
        options: [
          "Because **外套** requires **了**.",
          "**昨天天气很冷** describes a static state with **很** (no change), whereas **天冷了** announces a **change of state** (*it wasn't cold before, and now it has turned cold*!).",
          "Because **昨天** can never appear in a sentence with **了**.",
          "Because **冷** is a verb in the first sentence and a noun in the second.",
        ],
        answerIndex: 1,
        hints: [
          "Recall Job 2 of **了**: sentence-final **了** signals a **new situation / change of state**!",
          "Does **昨天天气很冷** describe a change, or just how yesterday felt?",
        ],
        explanation:
          "Sentence-final **了** after an bare adjective (**天冷了**, **我饿了**) announces a **new state** (*it has turned cold!*). Static descriptions modified by **很** (**昨天天气很冷**) take no **了**.",
      },
      {
        id: "tenses-particles-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "bu-vs-mei",
        question:
          "Which sentence below is **100% grammatically flawless** across past, present, and future?",
        options: [
          "我以前不吃过北京烤鸭，下个星期打算去尝一尝。",
          "我昨天不去学校，因为我发烧了。",
          "我以前从来没看过下雪，希望明年冬天能去哈尔滨看雪！",
          "弟弟现在正在玩电脑游戏了，还没做完作业。",
        ],
        answerIndex: 2,
        hints: [
          "Eliminate sentences with **不 + V + 过**, **昨天不去** (past non-occurrence), or **正在…了**!",
          "Check **以前从来没看过下雪** + **希望明年…**.",
        ],
        explanation:
          "**我以前从来没看过下雪，希望明年冬天能去哈尔滨看雪！** uses **以前 + 从来没 + 看过** (keeping **过**!) and future **希望明年冬天能…** accurately. The distractors say **不吃过**, **昨天不去**, and **正在…了**.",
      },
    ],
  },
  {
    id: "tenses-particles-m2",
    title: "Paper 2 — Time Expressions, Word Order & Aspect Nuances",
    questions: [
      {
        id: "tenses-particles-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "future-markers",
        question:
          "How do you say *'last year'* and *'next year'* in Mandarin?",
        options: [
          "上个年 ； 下个年",
          "前年 ； 后年",
          "上年 ； 下年",
          "去年 ； 明年",
        ],
        answerIndex: 3,
        hints: [
          "Careful: weeks and months use **上个 / 下个**, NOT years!",
        ],
        explanation:
          "**去年** (*qùnián*) means *'last year'* and **明年** (*míngnián*) means *'next year'*. Mandarin NEVER says *上个年* or *下个年*! (**前年 / 后年** mean *two years ago / the year after next*.)",
      },
      {
        id: "tenses-particles-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "future-markers",
        question:
          "How do you say *'last week'* and *'next month'*?",
        options: [
          "上个星期 ； 下个月",
          "下个星期 ； 上个月",
          "去星期 ； 明月",
          "前个星期 ； 后个月",
        ],
        answerIndex: 0,
        hints: [
          "Think of a vertical calendar scroll: **上** (*above*) = earlier/last; **下** (*below*) = upcoming/next!",
        ],
        explanation:
          "**上个星期** is *'last week'* and **下个月** is *'next month'*, following Mandarin's vertical time metaphor (**上** = past, **下** = future).",
      },
      {
        id: "tenses-particles-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "completed-action-le",
        question:
          "Mum asks: **你做完作业了吗？** (*Have you finished your homework yet?*) How do you reply *'Not yet!'*?",
        options: [
          "还不做完！",
          "还没做完呢！",
          "没做完了！",
          "不没做完！",
        ],
        answerIndex: 1,
        hints: [
          "*'Not yet'* is **还没** (or **还没有**) + Verb — with NO **了**!",
        ],
        explanation:
          "**还没做完呢！** (*I haven't finished yet!*) uses **还没** without **了**. **没做完了** illegally combines **没** and **了**, and **还不** is not used for past/current completion.",
      },
      {
        id: "tenses-particles-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ongoing-zhengzai",
        question:
          "Look at **老师穿着一件白衬衫** (*The teacher is wearing a white shirt*). Why does Mandarin use **着** (*zhe*) here instead of **正在**?",
        options: [
          "Because **老师** cannot use **正在**.",
          "Because **白衬衫** is plural.",
          "**着** describes a **continuous resulting state** (the shirt is already on her body), whereas **正在穿** means she is actively pulling her arms through the sleeves right now!",
          "Because **穿** can never take **了**.",
        ],
        answerIndex: 2,
        hints: [
          "Contrast *having a shirt on all morning* vs *spending 10 seconds putting a shirt on*.",
        ],
        explanation:
          "**Verb + 着** (*chuān zhe*, *dài zhe*, *ná zhe*) marks a **steady continuous state/posture**, whereas **正在穿** marks the physical motion of putting the garment on!",
      },
      {
        id: "tenses-particles-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "past-experience-guo",
        question:
          "Where does **两次** (*twice*) go when saying *'My younger sister has been to Singapore Zoo twice'*?",
        options: [
          "妹妹两次去过新加坡动物园了过。",
          "妹妹去新加坡动物园两次过。",
          "妹妹去过两次在新加坡动物园。",
          "妹妹去过新加坡动物园两次。",
        ],
        answerIndex: 3,
        hints: [
          "Keep **去过** glued together (**Verb + 过**).",
          "Place the destination **新加坡动物园** after **去过**, followed by **两次**!",
        ],
        explanation:
          "**妹妹去过新加坡动物园两次。** keeps **Verb + 过** intact and places the frequency count **两次** at the end after the place object. Never split **去** and **过** as in *去…两次过*!",
      },
      {
        id: "tenses-particles-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "completed-action-le",
        question:
          "How do you say *'Before going to sleep, I brush my teeth'* using **以前**?",
        options: [
          "睡觉以前，我刷牙。",
          "以前睡觉，我刷牙。",
          "我刷牙以前睡觉。",
          "我以前刷牙睡觉。",
        ],
        answerIndex: 0,
        hints: [
          "In Mandarin, **Event + 以前** means *'before [Event]'* (the reverse of English word order!).",
          "Make sure *'before sleeping'* is **睡觉以前**, not *以前睡觉*!",
        ],
        explanation:
          "**睡觉以前，我刷牙。** puts **以前** AFTER the event **睡觉** (*sleeping-before = before sleeping*). **我刷牙以前睡觉** would mean *'Before brushing my teeth, I go to sleep'*!",
      },
      {
        id: "tenses-particles-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bu-vs-mei",
        question:
          "In which word is **不** pronounced with the **2nd tone (*bú*)** instead of the 4th tone (*bù*)?",
        options: [
          "不喝 (not drink)",
          "不去 (not go)",
          "不冷 (not cold)",
          "不吃 (not eat)",
        ],
        answerIndex: 1,
        hints: [
          "**不** shifts from 4th tone (*bù*) to 2nd tone (*bú*) ONLY before another **4th-tone** syllable!",
          "Check the tones of **喝** (*hē*, 1st), **去** (*qù*, 4th), **冷** (*lěng*, 3rd), and **吃** (*chī*, 1st).",
        ],
        explanation:
          "Because **去** (*qù*) is 4th tone, **不去** undergoes tone sandhi to **bú qù**! Before 1st-tone **喝 / 吃** and 3rd-tone **冷**, **不** stays 4th tone (**bù**).",
      },
      {
        id: "tenses-particles-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "completed-action-le",
        question:
          "Which question is the **exact grammatical equivalent** of **你吃午饭了吗？** (*Have you eaten lunch yet?*)",
        options: [
          "你吃午饭了不吗？",
          "你吃午饭了没有吗？",
          "你吃午饭了没有？",
          "你没吃午饭了？",
        ],
        answerIndex: 2,
        hints: [
          "Completed-action questions can end with **…了吗？** OR **…了没有？**.",
          "Never stack **吗** onto the end of **了没有**!",
        ],
        explanation:
          "**你吃午饭了没有？** is the natural affirmative-negative completed-action question matching **你吃午饭了吗？**. Adding **吗** to **了没有** is ungrammatical.",
      },
      {
        id: "tenses-particles-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ongoing-zhengzai",
        question:
          "Mum walks in and asks if you're playing phone games. How do you say *'I'm not playing on my phone right now — I'm looking up vocab!'*?",
        options: [
          "我不正在玩手机呢，我是查生词！",
          "我没玩手机了，我正在查生词了！",
          "我不有玩手机，我在查生词！",
          "我没在玩手机，我在查生词呢！",
        ],
        answerIndex: 3,
        hints: [
          "Negate an ongoing action with **没在 + Verb** (and drop **呢** on the negative clause).",
          "Express the positive ongoing action with **我在查生词呢**!",
        ],
        explanation:
          "**我没在玩手机，我在查生词呢！** negates ongoing present cleanly with **没在** and states the real ongoing action with **在…呢**.",
      },
      {
        id: "tenses-particles-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bu-vs-mei",
        question:
          "How do you say *'Yesterday wasn't cold, and I wasn't tired'*?",
        options: [
          "昨天不冷，我也不累。",
          "昨天没冷，我也没累。",
          "昨天不冷了，我也不累了。",
          "昨天没有冷，我也没有累。",
        ],
        answerIndex: 0,
        hints: [
          "**冷** (*cold*) and **累** (*tired*) are **adjectives**!",
          "Even when talking about **昨天** (*yesterday*), how are adjectives negated in Mandarin?",
        ],
        explanation:
          "**昨天不冷，我也不累。** is right because **adjectives** (**冷**, **累**) describe states rather than bounded events, so they negate with **不** even in the past!",
      },
      {
        id: "tenses-particles-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-markers",
        question:
          "Compare **我想去中国** and **我要去中国**. How do **想** and **要** differ here?",
        options: [
          "**想** is past tense and **要** is future tense.",
          "**想** expresses a polite wish (*would like to go*), whereas **要** expresses a firmer decision or scheduled plan (*am going to / determined to go*).",
          "**想** can only be used with food.",
          "They are opposites.",
        ],
        answerIndex: 1,
        hints: [
          "Think about how polite **我想点一碗面** sounds vs how determined **我明天要去看医生** sounds!",
          "Both point toward a future action, differing in strength of intention.",
        ],
        explanation:
          "Before a verb, **想** (*xiǎng*) means *'would like to'* (wish/desire), while **要** (*yào*) means *'want to / going to'* (stronger intention or scheduled event).",
      },
      {
        id: "tenses-particles-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bu-vs-mei",
        question:
          "Choose the right pair to complete BOTH sentences:\n1. **爷爷 ______ 喝可乐，他只喝绿茶。** (*Grandpa never drinks cola as a habit.*)\n2. **我 ______ 去过伦敦。** (*I have never once been to London in my life.*)",
        options: [
          "从来没 ； 从来不",
          "还没有 ； 从来不",
          "从来不 ； 从来没",
          "不正在 ； 没有了",
        ],
        answerIndex: 2,
        hints: [
          "Habitual *'never'* uses **不** (**从来不**).",
          "Life-experience *'never once'* before **Verb + 过** uses **没** (**从来没**).",
        ],
        explanation:
          "**从来不** expresses a personal habit/rule (**爷爷从来不喝可乐**), while **从来没** pairs with **Verb + 过** for lifetime experience (**我从来没去过伦敦**).",
      },
      {
        id: "tenses-particles-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "completed-action-le",
        question:
          "Look at this **future** sentence: **明天我吃了早饭就去图书馆。** (*Tomorrow, right after I have eaten breakfast, I'll go to the library.*) Why is **了** completely grammatical inside a **明天** (*tomorrow*) sentence?",
        options: [
          "It's a typo — **了** can never appear with **明天**.",
          "Because **早饭** is a noun that always carries **了**.",
          "Because **图书馆** is far away.",
          "Because **了** marks **relative completion** (Action 1 *eating breakfast* finishes BEFORE Action 2 *going to the library* starts), proving **了** is an aspect marker, not past tense!",
        ],
        answerIndex: 3,
        hints: [
          "Look at the sequence of the two tomorrow actions: Action 1 = **吃早饭**, Action 2 = **去图书馆**.",
          "Must Action 1 be *completed* before Action 2 begins?",
        ],
        explanation:
          "Because **了** marks **completion of an action** rather than calendar past tense, **Verb 1 + 了 + Obj + 就 + Verb 2** works in the past, habitual present, AND future (*as soon as V1 is completed, V2 happens*)!",
      },
      {
        id: "tenses-particles-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "future-markers",
        question:
          "Where can **刚刚** (*just now*, adverb) vs **刚才** (*a moment ago*, time noun) sit in a sentence?",
        options: [
          "**刚刚** is an adverb so it stands AFTER the subject (**哥哥刚刚回家**), whereas **刚才** is a time noun so it can stand either BEFORE or AFTER the subject (**刚才哥哥… / 哥哥刚才…**).",
          "Both **刚刚** and **刚才** must go at the very end of the sentence.",
          "**刚刚** means *tomorrow* and **刚才** means *yesterday*.",
          "Neither can be used with verbs.",
        ],
        answerIndex: 0,
        hints: [
          "Recall how adverbs (**也**, **就**, **先**) behave vs time nouns (**昨天**, **今天**).",
          "Time nouns can precede the subject; adverbs must follow the subject!",
        ],
        explanation:
          "**刚刚** is an adverb pinned between Subject and Verb (**哥哥刚刚回家**), while **刚才** is a time noun that can also lead the sentence (**刚才谁打电话了？**).",
      },
      {
        id: "tenses-particles-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "bu-vs-mei",
        question:
          "Read Xiaoming's diary carefully:\n**上个星期六我本来打算跟朋友去东海岸公园骑自行车，可是早上九点突然下大雨了，所以我们没去成。这个星期六如果天气好，我们一定会去！**\nWhich statement is **TRUE**?",
        options: [
          "Xiaoming cycled at East Coast Park last Saturday despite the rain.",
          "Last Saturday's cycling plan was cancelled because heavy rain started at 9 a.m., and they plan to go this Saturday if the weather is good.",
          "Xiaoming has never ridden a bicycle in his life.",
          "It is raining right now on Sunday evening.",
        ],
        answerIndex: 1,
        hints: [
          "**本来打算…** = *originally planned to…*; **突然下大雨了** = *suddenly started raining heavily* (change-of-state **了**!).",
          "**没去成** = *didn't manage to go*; **这个星期六如果天气好，我们一定会去** = *this Saturday if the weather is good, we'll definitely go*.",
        ],
        explanation:
          "The diary contrasts a thwarted past plan (**上个星期六本来打算…，可是…下大雨了，所以我们没去成**) with a conditional future promise (**这个星期六如果天气好，我们一定会去！**).",
      },
    ],
  },
  {
    id: "tenses-particles-m3",
    title: "Paper 3 — IGCSE 0547 Multi-Timeframe Reading & Grammar",
    questions: [
      {
        id: "tenses-particles-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "completed-action-le",
        question:
          "After playing basketball for an hour under the Singapore sun, how do you say *'I'm thirsty now!'*?",
        options: [
          "我渴过！",
          "我渴正在！",
          "我渴了！",
          "我没渴了！",
        ],
        answerIndex: 2,
        hints: [
          "You weren't thirsty earlier, and NOW you are — which particle marks a **new state**?",
        ],
        explanation:
          "**我渴了！** uses sentence-final **了** to announce a change of state (*I've gotten thirsty!*).",
      },
      {
        id: "tenses-particles-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "future-markers",
        question:
          "The school holidays start in just a few days! With NO specific time word at the start, how do you exclaim *'The holidays are about to start!'*?",
        options: [
          "放假过了！",
          "正在放假过！",
          "以前放假了！",
          "快要放假了！",
        ],
        answerIndex: 3,
        hints: [
          "Which imminent-future frame wraps around **放假** to mean *'about to start holidays soon'*?",
        ],
        explanation:
          "**快要放假了！** (*kuàiyào fàngjià le!*) expresses excitement about an imminent event!",
      },
      {
        id: "tenses-particles-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "past-experience-guo",
        question:
          "Fill in the blank: **这本中文小说我看 ______ 一次，非常有意思！** (*I have read this Chinese novel once — it's super interesting!*)",
        options: ["过", "正在", "打算", "会"],
        answerIndex: 0,
        hints: [
          "Look at **一次** (*once*) — which particle marks having experienced reading the novel before?",
        ],
        explanation:
          "**看过一次** (*have read once before*) pairs life-experience **过** with the frequency count **一次**.",
      },
      {
        id: "tenses-particles-m3-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "bu-vs-mei",
        question:
          "Your friend asks: **你明天去不去游泳？** (*Are you going swimming tomorrow?*) How do you say *'I have homework tomorrow, so I'm not going'*?",
        options: [
          "明天我有作业，所以我没去。",
          "明天我有作业，所以我不去。",
          "明天我有作业，所以我没去了。",
          "明天我有作业，所以我不去了过。",
        ],
        answerIndex: 1,
        hints: [
          "**明天** is in the future! Do future refusals/plans take **不** or **没**?",
        ],
        explanation:
          "**明天我有作业，所以我不去。** uses **不** to negate a future intention/plan (**不去** *bú qù*). **没去** refers to the past!",
      },
      {
        id: "tenses-particles-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "completed-action-le",
        question:
          "Choose the natural Mandarin sentence for *'After school, I go home first'* using **以后**:",
        options: [
          "以后放学，我先回家。",
          "我先回家放学以后。",
          "放学以后，我先回家。",
          "放学了以后过，我回家先。",
        ],
        answerIndex: 2,
        hints: [
          "Just like **以前**, **以后** (*after*) stands AFTER the event phrase (**放学** + **以后**).",
          "Keep Time (**放学以后**) before the verb!",
        ],
        explanation:
          "**放学以后，我先回家。** places **以后** right after **放学** (*school-finishing-after = after school*) and keeps Time at the front.",
      },
      {
        id: "tenses-particles-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ongoing-zhengzai",
        question:
          "It's 7:00 p.m. and your phone rings while your family is eating dinner. Which reply is **most natural**?",
        options: [
          "不好意思，我们吃过晚饭呢！",
          "不好意思，我们打算吃晚饭了过！",
          "不好意思，我们是吃晚饭呢！",
          "不好意思，我们正在吃晚饭呢，一会儿给你回电话！",
        ],
        answerIndex: 3,
        hints: [
          "You are **right in the middle** of dinner at 7:00 p.m.",
          "Use **正在 … 呢**!",
        ],
        explanation:
          "**不好意思，我们正在吃晚饭呢，一会儿给你回电话！** (*Sorry, we're right in the middle of eating dinner — I'll call you back in a moment!*) uses **正在…呢** vividly.",
      },
      {
        id: "tenses-particles-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "future-markers",
        question:
          "How do you negate a weather prediction: *'Tomorrow it won't rain'*?",
        options: [
          "明天不会下雨。",
          "明天没会下雨。",
          "明天不打算下雨。",
          "明天还没下雨了。",
        ],
        answerIndex: 0,
        hints: [
          "Positive weather prediction is **明天会下雨**.",
          "Is **会** negated with **不** or **没**?",
        ],
        explanation:
          "Modal verb **会** is ALWAYS negated with **不** → **明天不会下雨** (*bú huì xià yǔ*, it won't rain tomorrow).",
      },
      {
        id: "tenses-particles-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "past-experience-guo",
        question:
          "Which sentence correctly asks *'Have you ever tasted Singapore's chilli crab?'* without using **吗**?",
        options: [
          "你尝新加坡的辣椒螃蟹不尝？",
          "你尝过新加坡的辣椒螃蟹没有？",
          "你尝了新加坡的辣椒螃蟹过吗？",
          "你有尝新加坡的辣椒螃蟹不？",
        ],
        answerIndex: 1,
        hints: [
          "Life experience uses **Verb + 过 + Object**.",
          "Without **吗**, finish the experience question with **…没有？**!",
        ],
        explanation:
          "**你尝过新加坡的辣椒螃蟹没有？** uses the standard **Verb + 过 + Object + 没有？** experience-question frame.",
      },
      {
        id: "tenses-particles-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bu-vs-mei",
        question:
          "Spot the sentence with a **grammar error**:",
        options: [
          "我今天早上没喝牛奶。",
          "姐姐以前学过三年法文。",
          "爸爸上个月没去了北京。",
          "我们准备下个月去圣淘沙玩。",
        ],
        answerIndex: 2,
        hints: [
          "Scan for the deadliest combination in Mandarin negation!",
          "Can **没** and completed-action **了** ever coexist on the same verb?",
        ],
        explanation:
          "**爸爸上个月没去了北京。** is ungrammatical because **没** and **了** cannot appear together — it must be **爸爸上个月没去北京。**",
      },
      {
        id: "tenses-particles-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "completed-action-le",
        question:
          "Read: **我已经学了四年中文了。** (*I have already studied Chinese for four years — and still am!*) What does the **double 了** (**学了 … 四年 … 了**) tell the listener?",
        options: [
          "I stopped studying Chinese four years ago.",
          "I will start studying Chinese in four years' time.",
          "I have never studied Chinese.",
          "I have completed four years so far AND am still continuing to study Chinese right now!",
        ],
        answerIndex: 3,
        hints: [
          "Compare **我学了四年中文** (may have finished in the past) with **我学了四年中文了** (two **了**s!).",
          "The sentence-final **了** brings the accumulated duration right up to the **present state**!",
        ],
        explanation:
          "**Verb + 了 + Duration + 了** (**学了四年中文了**) signals that four years have elapsed AND the action is **still continuing right up to now**!",
      },
      {
        id: "tenses-particles-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bu-vs-mei",
        question:
          "In the clinic, the doctor gives polite negative advice: *'Don't drink iced water when you have a cold!'* Which word fills the blank in **感冒了 ______ 喝冰水！**?",
        options: ["别", "没", "没有", "过"],
        answerIndex: 0,
        hints: [
          "Which imperative word means *'Don't!'* (equivalent to **不要**)?",
          "**没 / 没有** cannot form commands!",
        ],
        explanation:
          "**别** (*bié*, don't!) or **不要** forms negative advice/commands (**感冒了别喝冰水！**).",
      },
      {
        id: "tenses-particles-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "past-experience-guo",
        question:
          "Read the chat group poll about Chinese dishes:\n- **美美**: **北京烤鸭和小笼包我都吃过，可是还没尝过火锅。**\n- **大卫**: **我只吃过小笼包，北京烤鸭和火锅我都没吃过。**\nWhich dish have **BOTH** Meimei and David eaten before?",
        options: [
          "北京烤鸭 (Peking roast duck)",
          "小笼包 (soup dumplings)",
          "火锅 (hotpot)",
          "海南鸡饭 (chicken rice)",
        ],
        answerIndex: 1,
        hints: [
          "List Meimei's **吃过** dishes: **北京烤鸭** + **小笼包** (not **火锅**).",
          "List David's **只吃过** (*only eaten*) dish: **小笼包**!",
        ],
        explanation:
          "Meimei has eaten both **北京烤鸭** and **小笼包**, while David says **我只吃过小笼包** (*I've only eaten xiaolongbao*), so **小笼包** is the dish both have tried.",
      },
      {
        id: "tenses-particles-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "future-markers",
        question:
          "Spot the **ONLY** imminent-future sentence that is grammatically **WRONG**:",
        options: [
          "快要下雨了，快回家吧！",
          "还有十分钟就要下课了！",
          "明天早上八点快要考试了！",
          "地铁快到了！",
        ],
        answerIndex: 2,
        hints: [
          "Check which sentence puts a **specific clock/calendar time** directly before **快要…了**!",
          "Remember: specific time + *about to* MUST use **就要…了**, NEVER **快要…了**!",
        ],
        explanation:
          "**明天早上八点快要考试了！** is ungrammatical because a specific time phrase (**明天早上八点**) cannot precede **快要…了** — it must be **明天早上八点就要考试了！**",
      },
      {
        id: "tenses-particles-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "bu-vs-mei",
        question:
          "Look at **以前我不喜欢吃苦瓜，现在很喜欢吃了！** (*Previously I didn't like eating bitter gourd, and now I really like eating it!*) Why did Clause 1 use **不喜欢** (with **不**) despite **以前** (*in the past*), AND why did Clause 2 end with **了**?",
        options: [
          "Because **苦瓜** is a vegetable.",
          "Because **以前** means *tomorrow*.",
          "Both are exceptions with no rule.",
          "**喜欢** is a mental state verb (negated with **不** even in the past!), and sentence-final **了** in **现在很喜欢吃了** marks the **change of state** from disliking to liking!",
        ],
        answerIndex: 3,
        hints: [
          "First ask: is **喜欢** (*to like*) a bounded physical event or a continuous mental attitude?",
          "Second ask: if you didn't like bitter gourd before and NOW you do, what job is sentence-final **了** performing?",
        ],
        explanation:
          "Mental state verbs like **喜欢**, **是**, and **觉得** always negate with **不** (**以前不喜欢**), and sentence-final **了** in **现在很喜欢吃了** highlights the **new state**!",
      },
      {
        id: "tenses-particles-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ongoing-zhengzai",
        question:
          "Read Linlin's voice transcript at 3:00 p.m. on Sunday:\n**早上我去巴刹买了蔬菜和水果。现在妈妈正在厨房做蛋糕呢，弟弟在客厅画画。晚上外婆要来我们家吃晚饭！**\nMatch the three timeframes in Linlin's message from start to finish:",
        options: [
          "Completed past (**买了**) → Ongoing present (**正在…呢 / 在…**) → Scheduled future (**晚上…要来**)",
          "Future plan → Past experience → Habitual routine",
          "Ongoing present → Completed past → Negative past",
          "Life experience → Imminent future → Past habit",
        ],
        answerIndex: 0,
        hints: [
          "Sentence 1 (**早上…买了…**) = morning completed event.",
          "Sentence 2 (**现在…正在…呢 / 在…**) = 3 p.m. right now; Sentence 3 (**晚上…要来…**) = this evening's scheduled visit!",
        ],
        explanation:
          "Linlin moves chronologically from morning completion (**买了**), to 3 p.m. ongoing actions (**正在做蛋糕呢 / 在客厅画画**), to tonight's scheduled visit (**晚上外婆要来…**).",
      },
    ],
  },
];
