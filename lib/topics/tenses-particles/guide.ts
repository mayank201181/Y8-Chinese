import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "tenses-particles",
  title: "时态与助词 — Time & Aspect Particles in Mandarin",
  strand: "Term 3 · Food & Grammar",
  icon: "⏳",
  summary:
    "Express past completion (了), life experience (过), ongoing present (正在…呢), future plans (会/打算/快要…了), and master 不 vs 没.",
  intro:
    "Good news first: Mandarin verbs **never conjugate**! Whether it's *eat*, *ate*, *eaten*, or *eating*, the character **吃** (*chī*) never changes a single stroke. So how do Mandarin speakers tell apart *'I ate two bowls of rice yesterday'*, *'I have tasted Peking duck before'*, *'I am eating right now'*, and *'I'm about to eat'*? Instead of tense endings, Mandarin snaps crystal-clear **time words** and **aspect particles** (**了**, **过**, **正在…呢**) around the verb — and splits negation cleanly between **不** (*bù*) and **没** (*méi*).",
  guide: [
    {
      id: "completed-action-le",
      heading: "Completed action & change of state: 了 (le)",
      discovery: {
        problem:
          "An English speaker learns that **吃了** means *'ate'*, so they translate *'Yesterday I was very happy because last year I often went swimming'* as: **✗ 昨天我很开心了，因为去年我常常去游泳了。** Their teacher crosses out BOTH **了**s! Wait — if **昨天** (*yesterday*) and **去年** (*last year*) are both in the past, why is **了** banned in both clauses?",
        idea:
          "Because **了 is NOT a past-tense marker — it is an ASPECT marker!** Mandarin **了** does only two jobs: (1) **Verb + 了** marks a **specific bounded action that finished** (**我吃了两碗米饭**), and (2) **Sentence-final 了** announces a **change into a new state** (**下雨了！** *It started raining!*). Static past feelings with **很** (**昨天我很开心**) and repeated past habits with **常常** (**去年常常游泳**) are neither bounded single events nor sudden changes, so they take **ZERO 了**!",
      },
      body: `Understand the **Two Jobs of 了 (*le*)** — and the **No-了 Zone**:

| Type of 了 | Pattern | Example | Meaning |
|---|---|---|---|
| **1. Completed Action (Verb-了)** | **Subj (+ Past Time) + Verb + 了 + Quantified Object** | **妈妈昨天买了三斤苹果。** | *Mum bought 1.5 kg of apples yesterday.* |
| **2. Change of State (Sentence-了)** | **Clause / State + 了** | **下雨了！ / 我饿了！** | *It has started raining! / I'm hungry now!* |
| **Both Combined (Already)** | **Subj + 已经 + Verb + Object + 了** | **我已经吃晚饭了。** | *I have already eaten dinner.* |

### The 4 Golden "NO-了" Zones
Never add **了** to:
1. **Habitual routines** (even in the past!): **我每天七点起床** / **去年我常常打篮球** (NO **了**!).
2. **Adjectives modified by 很 / 非常**: **昨天天气很热** (NO **了**! Compare **天热了** = *the weather has turned hot*).
3. **Mental/state verbs** like **是**, **有**, **在**, **喜欢**, **觉得**, **希望**: **昨天是星期一** (*NOT 是了*).
4. **Negative past sentences with 没 / 没有**: **我昨天没看电视** (**NEVER** *没看了*!).`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing the two jobs of le: Verb plus le for completed action, sentence-final le for new state, and the No-le zone">
  <rect x="8" y="8" width="624" height="244" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">了 (le) ≠ Past Tense! Memorise Its Two Exact Jobs</text>
  <rect x="22" y="48" width="290" height="106" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="167" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">JOB 1: Completed Action (Verb + 了)</text>
  <text x="167" y="96" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1e293b">弟弟吃了八个小笼包。</text>
  <text x="167" y="116" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#166534">Dìdi chī le bā gè xiǎolóngbāo.</text>
  <text x="167" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#14532d">Specific bounded action + quantity!</text>
  <rect x="328" y="48" width="290" height="106" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
  <text x="473" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">JOB 2: New Situation (Sentence-Final 了)</text>
  <text x="473" y="96" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1e293b">外面下雨了！ / 我饿了！</text>
  <text x="473" y="116" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#78350f">Wàimiàn xià yǔ le! / Wǒ è le!</text>
  <text x="473" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400e">Was NOT raining/hungry → NOW it is!</text>
  <rect x="22" y="166" width="596" height="72" rx="10" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.8"/>
  <text x="320" y="188" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">THE NO-了 ZONE (Never add 了 here — even in the past!)</text>
  <text x="320" y="209" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">✗ 昨天很热了 → ✓ 昨天很热   |   ✗ 去年常常游泳了 → ✓ 去年常常游泳   |   ✗ 没去了 → ✓ 没去</text>
  <text x="320" y="227" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991b1b">Habits (每天/常常), 很 + Adj, state verbs (是/有/喜欢), and 没 negation take NO 了!</text>
</svg>`,
      diagramCaption:
        "Use Verb + 了 for a specific completed event, sentence-final 了 for a fresh change of state, and zero 了 for habits or 很 + Adjective.",
      workedExamples: [
        {
          title: "Placing Verb-了 before a quantified object",
          problem:
            "Translate into Mandarin: *'This morning I drank two cups of milk.'* (Use **我今天早上**, **喝**, **两杯牛奶**.)",
          steps: [
            "Check if this is a specific completed action with a quantity (**两杯牛奶**): Yes — use **Verb + 了**!",
            "Place **了** right after the verb **喝** and BEFORE the number + classifier **两杯牛奶**.",
            "Assemble in STPV order: **我今天早上喝了两杯牛奶。**",
          ],
          answer:
            "**我今天早上喝了两杯牛奶。** (*Wǒ jīntiān zǎoshang hē le liǎng bēi niúnǎi.*)",
          yourTurn: {
            question:
              "Translate into Mandarin: *'Mum bought three shirts yesterday.'* (Use **妈妈昨天**, **买**, **三件衬衫**.)",
            answer: {
              type: "text",
              accept: [
                "妈妈昨天买了三件衬衫",
                "昨天妈妈买了三件衬衫",
                "Māma zuótiān mǎi le sān jiàn chènshān",
                "Zuótiān māma mǎi le sān jiàn chènshān",
              ],
              display: "妈妈昨天买了三件衬衫。",
            },
            solution:
              "Specific completed purchase with a quantity → **妈妈昨天** + **买了** + **三件衬衫** → **妈妈昨天买了三件衬衫。**",
          },
        },
      ],
      keyPoints: [
        "**Verb + 了 + Number + Classifier + Noun** marks a completed, bounded event (**买了两本书**, **吃了三个包子**).",
        "**Sentence-final 了** marks a **new state** (**下雨了**, **我渴了**, **十点半了**).",
        "**已经 … 了** (*already*) almost always closes with **了** (**我已经做完作业了**).",
        "Ask if something has happened yet with **…了吗？** or **…了没有？**; answer *'not yet'* with **还没(有)…** (NO **了**!).",
        "**Never** put **了** with **常常 / 每天**, **很 + Adj**, **是 / 喜欢**, or **没**!",
      ],
      whyItWorks:
        "Linguists call Mandarin an **aspect-prominent** language rather than a tense-prominent language. *Tense* asks *'When on the calendar did it happen?'* (answered in Mandarin by time nouns like **昨天** or **明天**), whereas *aspect* (**了**) zooms in on the **contour** of the event — whether its boundary was crossed!",
      strategies: [
        "**Bounded-Event Test**: Before writing **了**, ask: *Did a single specific action cross its finish line, or did a state just flip?* If it's a habit or static description, leave **了** out!",
        "**Quantity Magnet**: Whenever you see a past verb + **Number + Classifier + Noun** (**两碗面**, **一双鞋**), slot **了** right between the verb and the number.",
      ],
      thinkDeeper:
        "Why can **了** appear in a **future** sentence like **我明天吃了早饭就去学校** (*Tomorrow, right after I've eaten breakfast, I'll go to school*)? What does that prove about whether **了** means 'past tense'?",
    },
    {
      id: "past-experience-guo",
      heading: "Life experience: Verb + 过 (guo)",
      discovery: {
        problem:
          "Two friends ask about Uncle Chen and Beijing:\n- Sentence A: **陈叔叔去了北京。** (*Chén shūshu qù le Běijīng.*)\n- Sentence B: **陈叔叔去过北京。** (*Chén shūshu qù guo Běijīng.*)\nIn ONLY ONE of these sentences could Uncle Chen still be sitting in a Beijing hotel right now! Which one — and why does the other guarantee he is no longer there?",
        idea:
          "In Sentence A (**去了北京**), **了** simply marks that his departure/trip to Beijing happened — he might very well still be in Beijing right now! In Sentence B (**去过北京**), **过** (*literally 'to cross/pass through'*) marks a **closed life experience** (*'has been to Beijing before'*), which guarantees the trip is over and he has returned!",
      },
      body: `Whenever English says *"Have you **ever** -ed?"* or *"I have -ed **before** (in my life)"*, reach straight for **Verb + 过 (*guo*)**!

| Pattern | Mandarin Example | English Meaning |
|---|---|---|
| **Affirmative** | **我以前去过长城。** | *I have been to the Great Wall before.* |
| **With Frequency** | **那部电影我看过两次。** | *I have watched that film twice.* |
| **Question (吗 / 没有)** | **你吃过北京烤鸭吗？ / 你吃过北京烤鸭没有？** | *Have you ever eaten Peking roast duck?* |
| **Negative (KEEP 过!)** | **我没(有)吃过榴莲。 / 我从来没看过下雪！** | *I have never eaten durian. / I've never once seen snow!* |

> **The Crucial Negation Difference Between 了 and 过!**
> - Negating **Verb + 了** → **DROP 了**: **我吃了早饭** → **我没吃早饭** (*NEVER 没吃了* ✗!).
> - Negating **Verb + 过** → **KEEP 过**: **我去过北京** → **我没去过北京** (*KEEP 过* ✓! Because **我没去北京** means *"I didn't go to Beijing [that specific time]"*, whereas **我没去过北京** means *"I have NEVER been to Beijing in my life"*!).`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Verb plus le specific event versus Verb plus guo life experience and their negative forms">
  <rect x="8" y="8" width="624" height="244" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">了 (Specific Completed Event) vs 过 (Ever Experienced in Life)</text>
  <rect x="22" y="48" width="290" height="188" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.8"/>
  <text x="167" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#c81e1e">Verb + 了 (Specific Time / Event)</text>
  <text x="167" y="98" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">我昨天吃了鸡饭。</text>
  <text x="167" y="117" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7f1d1d">I ate chicken rice yesterday.</text>
  <line x1="42" y1="134" x2="292" y2="134" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="167" y="156" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#991b1b">NEGATIVE → DROP 了!</text>
  <text x="167" y="182" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1e293b">✓ 我昨天没吃鸡饭。</text>
  <text x="167" y="206" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#b91c1c">✗ NEVER write 没吃了!</text>
  <rect x="328" y="48" width="290" height="188" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
  <text x="473" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0284c7">Verb + 过 (Life Experience Badge)</text>
  <text x="473" y="98" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">我以前吃过北京烤鸭。</text>
  <text x="473" y="117" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0c4a6e">I have eaten Peking duck before.</text>
  <line x1="348" y1="134" x2="598" y2="134" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="473" y="156" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1">NEGATIVE → KEEP 过!</text>
  <text x="473" y="182" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1e293b">✓ 我没吃过北京烤鸭。</text>
  <text x="473" y="206" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#075985">Cue words: 以前 (before), 从来没 (never once)</text>
</svg>`,
      diagramCaption:
        "Contrast Verb + 了 (yesterday's event — drops 了 in negative) with Verb + 过 (lifetime badge — keeps 过 in 没…过!).",
      workedExamples: [
        {
          title: "Asking and answering a life-experience question with 过",
          problem:
            "Translate both lines into Mandarin:\n- Q: *'Have you ever been to Shanghai?'*\n- A: *'I have never been to Shanghai, but I have been to Beijing twice.'*",
          steps: [
            "Question (*ever been to*): **你去过上海吗？** (*Nǐ qù guo Shànghǎi ma?*).",
            "Negative experience (*never been* — keep **过**!): **我没去过上海，**.",
            "Contrast + frequency (*been to Beijing twice* — place **两次** after **北京**): **但是我去过北京两次。**",
          ],
          answer:
            "**你去过上海吗？ 我没去过上海，但是我去过北京两次。**",
          yourTurn: {
            question:
              "Translate into Mandarin: *'I have never seen snow.'* (Use **我**, **没** or **从来没**, **看过**, **下雪**.)",
            answer: {
              type: "text",
              accept: [
                "我没看过下雪",
                "我没有看过下雪",
                "我从来没看过下雪",
                "我从来没有看过下雪",
                "Wǒ méi kàn guo xià xuě",
                "Wǒ méi kàn guò xià xuě",
                "Wǒ méiyǒu kàn guo xià xuě",
                "Wǒ méiyǒu kàn guò xià xuě",
                "Wǒ cónglái méi kàn guo xià xuě",
                "Wǒ cónglái méi kàn guò xià xuě",
              ],
              display: "我没看过下雪。",
            },
            solution:
              "Negate life experience with **没(有) + Verb + 过** (keep **过**!): **我没看过下雪。** (or **我从来没看过下雪！**)",
          },
        },
      ],
      keyPoints: [
        "**Verb + 过** (*guo*, neutral tone) means *'have ever experienced [Verb]-ing before'*.",
        "Often pairs with **以前** (*previously/before*), **从来没** (*never once*), and frequency counts (**一次**, **两次**).",
        "Negate with **没(有) + Verb + 过** — **always KEEP 过**!",
        "Word order with place + times: **我去过北京两次** (*Verb + 过 + Place + Number + 次*).",
      ],
      whyItWorks:
        "As a full verb (**guò**, 4th tone), **过** means *'to cross a bridge or pass through'*. Softened to neutral tone **guo** right after a verb, it treats the experience like a landscape you have **passed through** at least once in your life and come out the other side!",
      strategies: [
        "**The 'Ever / Before' Radar**: If the English thought contains *ever*, *never in my life*, or *before*, use **过**; if it pins down *this morning / at 7 p.m. yesterday*, use **了**.",
        "**Sticky 过 Rule**: Glue **过** to its verb in both positive (**去过**) and negative (**没去过**).",
      ],
      thinkDeeper:
        "Why does **✗ 我昨天出生过** (*I have experienced being born yesterday*) sound ridiculous in Mandarin? What must be true about an action for **过** to make sense?",
    },
    {
      id: "ongoing-zhengzai",
      heading: "Right now: 正在 / 在 … (呢)",
      discovery: {
        problem:
          "Look closely at the character **在** in both sentences below:\n1. **姐姐在图书馆看书。** (*Jiějie zài túshūguǎn kàn shū.*)\n2. **姐姐在看书呢。** (*Jiějie zài kàn shū ne.*)\nIn Sentence 1, **在** is followed by a **place** (**图书馆**). In Sentence 2, **在** is followed directly by a **verb** (**看书**)! What two completely different jobs is **在** doing — and what happens when you combine BOTH in *'My older sister is reading in the library right now'*?",
        idea:
          "Before a **place**, **在** is the location preposition (*at/in*). Directly before a **verb**, **在** (short for **正在**) is the **ongoing aspect marker** (*am/is/are -ing right now*)! When you combine both (**正在** + **图书馆** + **看书呢**), Mandarin neatly merges **正在 + 在** into a single **正在**: **姐姐正在图书馆看书呢！** (never *正在在图书馆*!).",
      },
      body: `To say someone is **right in the middle of doing something** (*am / is / are -ing*), wrap the verb phrase in **正在 / 在 … (呢)**:

| Strength | Frame | Example |
|---|---|---|
| **Full & Vivid** | **Subj + 正在 + Verb + Object + 呢** | **弟弟正在做作业呢。** (*My younger brother is doing homework right now.*) |
| **Everyday Short Form** | **Subj + 在 + Verb + Object (+ 呢)** | **妈妈在做晚饭呢。** (*Mum is cooking dinner.*) |
| **With a Place** | **Subj + 正在 + Place + Verb + Object (+ 呢)** | **哥哥正在体育馆打篮球呢。** (*My older brother is playing basketball in the sports hall right now.*) |
| **Spoken Particle Only** | **Clause + 呢** | **外面下雨呢！** (*It's raining outside right now!*) |

### Negating Ongoing Actions
To say *"I am NOT -ing right now"*, use **没(在) + Verb** — and **DROP 呢**:
- **我没在看电视，我在复习中文呢！** (*I'm not watching TV — I'm revising Chinese right now!*)
- **NEVER** combine **正在** with completed **了** (*✗ 我正在吃饭了* — an action cannot be both in-progress and finished!).`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ongoing present structure Subject plus zhengzai or zai plus Verb plus ne, and merging zhengzai with Place">
  <rect x="8" y="8" width="624" height="244" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Live-Camera Frame: 正在 / 在 … (呢) = Right Now (-ing)</text>
  <rect x="24" y="52" width="110" height="78" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="2"/>
  <text x="79" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c81e1e">SUBJECT</text>
  <text x="79" y="104" text-anchor="middle" font-family="sans-serif" font-size="19" font-weight="bold" fill="#1e293b">弟弟</text>
  <text x="79" y="121" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Dìdi</text>
  <text x="148" y="96" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">+</text>
  <rect x="162" y="52" width="146" height="78" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <text x="235" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309">ONGOING MARKER</text>
  <text x="235" y="104" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">正在 / 在</text>
  <text x="235" y="121" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">zhèngzài / zài</text>
  <text x="322" y="96" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">+</text>
  <rect x="336" y="52" width="154" height="78" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
  <text x="413" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">VERB + OBJECT</text>
  <text x="413" y="104" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">看电视</text>
  <text x="413" y="121" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">kàn diànshì</text>
  <text x="504" y="96" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">+</text>
  <rect x="518" y="52" width="98" height="78" rx="12" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
  <text x="567" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0d9488">OPTIONAL</text>
  <text x="567" y="104" text-anchor="middle" font-family="sans-serif" font-size="19" font-weight="bold" fill="#1e293b">(呢)</text>
  <text x="567" y="121" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">ne</text>
  <rect x="24" y="148" width="592" height="88" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="320" y="172" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8">With a Place? Merge 正在 + 在 into ONE 正在!</text>
  <text x="320" y="196" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1e293b">✓ 姐姐正在图书馆看书呢。  (NOT ✗ 姐姐正在在图书馆看书呢)</text>
  <text x="320" y="218" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">Negative: 我没在玩手机 (NOT *我不正在玩手机* and NEVER add 了!)</text>
</svg>`,
      diagramCaption:
        "Wrap ongoing actions in 正在 / 在 … (呢), merge 正在 + 在 + Place into 正在 + Place, and never mix 正在 with 了.",
      workedExamples: [
        {
          title: "Describing what someone is doing right now in a place",
          problem:
            "Translate into Mandarin: *'Grandpa is drinking tea in the living room right now.'* (Use **爷爷**, **正在**, **客厅** *kètīng*, **喝茶**, **呢**.)",
          steps: [
            "Start with Subject **爷爷** + **正在**.",
            "Add the place **客厅** directly after **正在** (do NOT write *正在在客厅*!).",
            "Add Verb + Object **喝茶** and close with **呢**: **爷爷正在客厅喝茶呢。**",
          ],
          answer:
            "**爷爷正在客厅喝茶呢。** (*Yéye zhèngzài kètīng hē chá ne.*)",
          yourTurn: {
            question:
              "Translate into Mandarin: *'Mum is cooking dinner right now.'* (Use **妈妈**, **正在** or **在**, **做晚饭**, **呢**.)",
            answer: {
              type: "text",
              accept: [
                "妈妈正在做晚饭呢",
                "妈妈在做晚饭呢",
                "妈妈正在做晚饭",
                "妈妈在做晚饭",
                "Māma zhèngzài zuò wǎnfàn ne",
                "Māma zài zuò wǎnfàn ne",
              ],
              display: "妈妈正在做晚饭呢。",
            },
            solution:
              "**妈妈** + **正在** (or **在**) + **做晚饭** + **呢** → **妈妈正在做晚饭呢。**",
          },
        },
      ],
      keyPoints: [
        "**正在 + Verb (+ 呢)** or **在 + Verb (+ 呢)** expresses *am / is / are -ing* (**妹妹正在画画呢**). Remember: NEVER translate *is/am* as **是** before **正在**!",
        "When adding a place, write **正在 + Place + Verb (+ 呢)** — drop the second **在**!",
        "Sentence-final **呢** in a statement adds a warm, vivid *'right at this moment'* tone.",
        "Negate ongoing actions with **没在 + Verb** (**弟弟没在睡觉**), and never mix **正在** with **了**.",
      ],
      whyItWorks:
        "**正** (*zhèng*) means *'precisely / right on target'* and **在** (*zài*) means *'located in'*. Together, **正在** literally locates you **right inside the middle of the action** — which explains why you never need English *is/am/are* (**是**) in front of it!",
      strategies: [
        "**Ban 是 Before -ing**: English *'is reading'* tempts learners to write *是在看书* — cross out **是** and write **正在看书呢**!",
        "**Double-在 Deduplication**: If **正在** meets **在学校**, fuse them into **正在学校**.",
      ],
      thinkDeeper:
        "Compare **他穿着一件白衬衫** (*wearing a white shirt*) and **他正在穿衬衫呢** (*putting on a shirt right now*). How do **着** (*zhe*, static ongoing state) and **正在** (*active ongoing motion*) split English *'wearing'* into two crystal-clear ideas?",
    },
    {
      id: "future-markers",
      heading: "Talking about the future: 要, 会, 打算, 快要…了",
      discovery: {
        problem:
          "English uses *'will'* or *'going to'* for everything — weather forecasts, holiday plans, and trains about to pull in! In Mandarin, why would saying **✗ 明天天气打算下雨** (*Tomorrow the weather plans to rain*) make everyone burst out laughing, and why is **✗ 下个星期快要考试了** slightly off whereas **✓ 下个星期就要考试了** is spot-on?",
        idea:
          "Mandarin picks its future marker by **who controls the future**: (1) **会** (*huì*) is for **predictions/likelihood** (like weather — clouds can't make plans!), (2) **打算 / 准备** are for **conscious human plans**, (3) **要** is for **scheduled/determined events**, and (4) **快要…了** vs **就要…了** marks **imminent events** — with **就要…了** required whenever a specific time word (**下个星期**, **八点**) stands in front!",
      },
      body: `Choose the right Mandarin future marker for the job:

| Future Shade | Marker | Example | Key Rule |
|---|---|---|---|
| **Prediction / Promise** | **会** (*huì*) | **明天下午会下雨。** | Weather forecasts & promises (**我一定会来！**); negate with **不会**. |
| **Thought-Out Plan** | **打算 / 准备** (*dǎsuàn / zhǔnbèi*) | **暑假我打算去上海旅行。** | Great for IGCSE weekend/holiday plans! |
| **Scheduled / Firm Intention** | **要** (*yào*) | **下个星期学校要开运动会。** | Stronger than **想** (*would like to*). |
| **About to Happen Soon!** | **快要 … 了 / 快 … 了** | **快要放假了！ / 电影快开始了！** | **NO specific time** allowed before **快要**! |
| **About to Happen [at Time]!** | **Time + 就要 … 了** | **还有五分钟就要上课了！** | Use **就要…了** whenever a time expression precedes! |

> **Wait — why is 了 at the end of 快要…了 in a FUTURE sentence?!**
> Remember Section 1: sentence-final **了** marks a **change of state**, NOT past tense! **快要下雨了** literally means *"The new state of raining is just about to arrive!"*`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four Mandarin future markers: hui prediction, dasuan plan, yao scheduled intention, and kuaiyao le versus jiuyao le imminent future">
  <rect x="8" y="8" width="624" height="244" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Four Shades of the Future in Mandarin</text>
  <rect x="22" y="48" width="290" height="88" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
  <text x="167" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0284c7">1. PREDICTION: 会 (huì)</text>
  <text x="167" y="95" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">今天晚上会下雨。</text>
  <text x="167" y="118" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0c4a6e">Forecasts &amp; promises (Negate: 不会下雨)</text>
  <rect x="328" y="48" width="290" height="88" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="473" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">2. INTENTION / PLAN: 打算 / 准备</text>
  <text x="473" y="95" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">周末我打算去圣淘沙。</text>
  <text x="473" y="118" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#14532d">Personal plans (Softer wish: 想去)</text>
  <rect x="22" y="148" width="290" height="88" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
  <text x="167" y="170" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">3. SCHEDULED / GOING TO: 要 (yào)</text>
  <text x="167" y="195" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">我明天要去看牙医。</text>
  <text x="167" y="218" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#78350f">Negate future action with 不去 (NOT *不要*!)</text>
  <rect x="328" y="148" width="290" height="88" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.8"/>
  <text x="473" y="170" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">4. IMMINENT: 快要…了 vs 就要…了</text>
  <text x="473" y="195" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">快要放假了！ / 下周就要考试了！</text>
  <text x="473" y="218" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991b1b">Specific time in front → MUST use 就要…了!</text>
</svg>`,
      diagramCaption:
        "Match your future marker to the meaning: 会 for forecasts, 打算/准备 for plans, 要 for firm schedules, and 快要…了 / 就要…了 for imminent events.",
      workedExamples: [
        {
          title: "Choosing between 会, 打算, and 快要…了 / 就要…了",
          problem:
            "Translate into Mandarin:\n(a) *'The weather forecast says tomorrow will be sunny.'*\n(b) *'The holidays are about to start!'*",
          steps: [
            "For (a), weather is a prediction → use **会**: **天气预报说明天会是晴天。** (or **明天会晴天**).",
            "For (b), no specific time is named and it's happening very soon → use **快要…了**: **快要放假了！**",
          ],
          answer:
            "(a) **天气预报说明天会是晴天。**  (b) **快要放假了！**",
          yourTurn: {
            question:
              "Translate into Mandarin using **打算**: *'Next week I plan to learn to play the guitar.'* (Use **下个星期**, **我打算**, **学弹吉他**.)",
            answer: {
              type: "text",
              accept: [
                "下个星期我打算学弹吉他",
                "我下个星期打算学弹吉他",
                "我打算下个星期学弹吉他",
                "Xià gè xīngqī wǒ dǎsuàn xué tán jítā",
                "Wǒ xià gè xīngqī dǎsuàn xué tán jítā",
              ],
              display: "我下个星期打算学弹吉他。",
            },
            solution:
              "**我下个星期打算学弹吉他。** (Fronting **下个星期** as **下个星期我打算学弹吉他** is equally natural!)",
          },
        },
      ],
      keyPoints: [
        "Time words alone can already signal future when clear (**我明天去乌节路**), and markers add precision!",
        "**会** (*huì*) = prediction/likelihood (**明天会下雨**); **打算 / 准备** = deliberate plan (**我打算复习**).",
        "**想** (*would like to*) is softer than **要** (*going to / determined to*).",
        "**快要 + Verb + 了** = *about to happen soon* (no specific time word!); **Time + 就要 + Verb + 了** = *about to happen at [Time]*.",
        "Years use **去年** (*last year*) and **明年** (*next year*) — NEVER *上个年* or *下个年*!",
      ],
      whyItWorks:
        "Notice how **会** means both *'learned skill'* (**我会游泳**) and *'will likely happen'* (**明天会下雨**): in both cases, **会** expresses **potential** — what a person or situation has the capacity/tendency to do!",
      strategies: [
        "**Human Plan vs Sky Forecast**: Ask *'Is a person planning this?'* → **打算 / 准备**. *'Is it a forecast or promise?'* → **会**.",
        "**Specific-Time Trigger**: Spot a clock time or **下个星期 / 明天** before *'about to'*? Swap **快要…了** to **就要…了**!",
      ],
      thinkDeeper:
        "Compare **我明天不去** and **别去 / 不要去**! Why shouldn't you answer *'Are you going tomorrow?'* (**你明天要去吗？**) with **我不要去** unless you want to sound like a stubborn toddler?",
    },
    {
      id: "bu-vs-mei",
      heading: "The ultimate negation showdown: 不 (bù) vs 没 / 没有 (méi)",
      discovery: {
        problem:
          "Spot why THREE of these four sentences are wrong and ONLY ONE is 100% grammatical:\n1. **✗ 我不有一个哥哥。**\n2. **✗ 我昨天不去图书馆。**\n3. **✗ 我昨天没去了图书馆。**\n4. **✓ 我昨天没去图书馆，明天也不去。**\nWhat single master rule explains why **不** and **没** divide the Mandarin universe the way they do?",
        idea:
          "**没 / 没有** checks **objective reality up to now**: (a) **possession with 有** (**没有** — NEVER *不有*!) and (b) **whether an action happened / has been experienced** (**昨天没去** — and since it didn't happen, **了** MUST disappear!). **不** handles **everything else**: present habits (**我不喝咖啡**), future intentions (**明天不去**), adjectives (**今天不热**), and **是 / 会 / 想 / 应该**!",
      },
      body: `Print this **不 vs 没 Master Decision Table** in your mind — it solves 99% of IGCSE negation questions in two seconds:

| Situation | Use 不 or 没? | Correct Example | Deadly Trap to Avoid |
|---|---|---|---|
| **Possession (有 *have*)** | **ALWAYS 没** (**没有**) | **我没有零花钱。** (*I don't have pocket money.*) | ✗ **NEVER** write *不有* — even for tomorrow (**明天没有课**)! |
| **Past Completed Action** | **没 / 没有** (NO **了**!) | **我昨天没看电视。** (*I didn't watch TV yesterday.*) | ✗ **NEVER** write *昨天不看* or *昨天没看了*! |
| **Past Life Experience** | **没(有) … 过** (KEEP **过**!) | **我没去过哈尔滨。** (*I've never been to Harbin.*) | ✗ Don't drop **过** if you mean *never in my life*! |
| **Ongoing Right Now** | **没(在)** | **弟弟没在睡觉。** (*He isn't sleeping right now.*) | ✗ Never write *不正在*! |
| **Present Habit / Routine** | **不** | **爸爸平时不喝奶茶。** (*Dad doesn't usually drink bubble tea.*) | **从来不** = never as a habit (**从来不抽烟**). |
| **Future Plan / Refusal** | **不** | **明天我不去游泳。** (*I won't go swimming tomorrow.*) | ✗ Never use **没** for future (**明天没去** ✗)! |
| **Adjectives & 是 / 会 / 想** | **不** | **今天不冷。 / 我不是英国人。** | Even in the past, **是** and adjectives take **不** (**昨天不冷**)! |

> **Bonus Pinyin Tone-Sandhi Tip for 不!**
> **不** is normally 4th tone (**bù**: **不吃** *bù chī*, **不喝** *bù hē*, **不冷** *bù lěng*), EXCEPT right before another **4th-tone** syllable, where it glides up to **2nd tone bú**: **不是** (*bú shì*), **不去** (*bú qù*), **不会** (*bú huì*), **不要** (*búyào*)!`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision matrix comparing Bu negation for habits, future, adjectives and shi versus Mei negation for past actions, guo experience and you possession">
  <rect x="8" y="8" width="624" height="244" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">The Ultimate Negation Split: 不 (bù) vs 没 / 没有 (méi)</text>
  <rect x="22" y="48" width="290" height="188" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="2"/>
  <text x="167" y="72" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#c81e1e">TEAM 不 (bù / bú)</text>
  <text x="38" y="98" font-family="sans-serif" font-size="12" fill="#1e293b">• Habits &amp; Routines: 我平时不喝咖啡。</text>
  <text x="38" y="122" font-family="sans-serif" font-size="12" fill="#1e293b">• Future Intentions: 明天我不去乌节路。</text>
  <text x="38" y="146" font-family="sans-serif" font-size="12" fill="#1e293b">• Adjectives (even past!): 昨天不冷。</text>
  <text x="38" y="170" font-family="sans-serif" font-size="12" fill="#1e293b">• 是 / 会 / 想 / 应该: 我不是医生 / 不会下雪。</text>
  <rect x="38" y="188" width="258" height="34" rx="8" fill="#fecaca"/>
  <text x="167" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#7f1d1d">Sandhi: bù → bú before 4th tone (不是 bú shì)</text>
  <rect x="328" y="48" width="290" height="188" rx="12" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
  <text x="473" y="72" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0d9488">TEAM 没 / 没有 (méi)</text>
  <text x="344" y="98" font-family="sans-serif" font-size="12" fill="#1e293b">• Possession 有 (ALWAYS!): 我没有姐姐。</text>
  <text x="344" y="122" font-family="sans-serif" font-size="12" fill="#1e293b">• Past Action (DROP 了!): 昨天没买衣服。</text>
  <text x="344" y="146" font-family="sans-serif" font-size="12" fill="#1e293b">• Life Experience (KEEP 过!): 没去过北京。</text>
  <text x="344" y="170" font-family="sans-serif" font-size="12" fill="#1e293b">• Ongoing Right Now: 他没在看电视。</text>
  <rect x="344" y="188" width="258" height="34" rx="8" fill="#99f6e4"/>
  <text x="473" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#134e4a">IRON LAW: NEVER *不有* &amp; NEVER *没 + Verb + 了*!</text>
</svg>`,
      diagramCaption:
        "Use 不 for habits, future, adjectives, and 是/会/想; use 没(有) for 有, past events (drop 了!), life experience (keep 过!), and ongoing 没在.",
      workedExamples: [
        {
          title: "Contrasting past fact (没) vs future plan (不) in one sentence",
          problem:
            "Translate into Mandarin: *'Yesterday I didn't eat breakfast, and tomorrow I won't drink coffee.'*",
          steps: [
            "Clause 1 is an objective past event that didn't happen → negate with **没** and **NO 了**: **我昨天没吃早饭，**.",
            "Clause 2 is a future intention → negate with **不**: **明天我不喝咖啡。**",
          ],
          answer:
            "**我昨天没吃早饭，明天我不喝咖啡。** (*Wǒ zuótiān méi chī zǎofàn, míngtiān wǒ bù hē kāfēi.*)",
          yourTurn: {
            question:
              "Negate this completed-action sentence accurately (*'Xiaoming didn't go to school yesterday'*): **小明昨天去了学校。**",
            answer: {
              type: "text",
              accept: [
                "小明昨天没去学校",
                "小明昨天没有去学校",
                "昨天小明没去学校",
                "昨天小明没有去学校",
                "Xiǎomíng zuótiān méi qù xuéxiào",
                "Xiǎomíng zuótiān méiyǒu qù xuéxiào",
              ],
              display: "小明昨天没去学校。",
            },
            solution:
              "Replace completed aspect with **没(有)** before **去**, and **DROP 了**: **小明昨天没去学校。**",
          },
        },
      ],
      keyPoints: [
        "**有** (*have*) is **100% loyal to 没**: always **没有**, NEVER *不有* (even in **明天没有时间**!).",
        "Negating a past action uses **没(有) + Verb** and **MUST drop 了** (**我没吃**, NEVER *我没吃了*!).",
        "Negating life experience uses **没(有) + Verb + 过** and **KEEPS 过** (**我没吃过**).",
        "Even in the past, **adjectives** (**昨天不热**) and **是 / 喜欢 / 会** (**我以前不喜欢吃鱼**) negate with **不**, not **没**!",
        "Contrast **从来不** (*never by habit/choice*) vs **从来没 + Verb + 过** (*never once experienced in life*).",
      ],
      whyItWorks:
        "**没** is literally short for **没有** (*does not exist / has not occurred*). So **我昨天没去** literally means *'My going yesterday did not occur'* — which instantly explains both why **了** (completion) vanishes and why subjective choices, habits, future plans, and qualities (**不**) don't use **没**!",
      strategies: [
        "**Check the Verb First**: Is the verb **有**? Instant **没有**! Is it **是**, **会**, **想**, or an **adjective**? Instant **不**!",
        "**Check the Timeline Next**: Did an action fail to happen in the past? **没 + Verb** (delete **了**!). Is it a habit or future plan? **不 + Verb**!",
      ],
      thinkDeeper:
        "What is the real-life difference between **我昨天没去派对** (*méi qù*) and **我昨天不去派对** (*bú qù*, say inside a story: **妈妈让我去，可是我不去**)? Why can **不** occasionally appear in a past story?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Do Mandarin verbs conjugate for past, present, or future?",
        back: "**Never!** **吃** stays **吃** — Mandarin uses **time nouns** (**昨天 / 现在 / 明天**) and **aspect markers** (**了 / 过 / 正在**) instead.",
      },
      {
        front: "What are the TWO jobs of 了 (*le*)?",
        back: "1. **Verb + 了** = completed bounded action (**我吃了两碗面**)\n2. **Sentence-final 了** = new state / change (**下雨了！ / 我饿了！**).",
      },
      {
        front: "Name 4 places where 了 is FORBIDDEN!",
        back: "1. Habits (**每天 / 常常**)\n2. **很 / 非常 + Adjective** (**昨天很热**)\n3. State verbs (**是 / 有 / 喜欢**)\n4. Negative past with **没** (*NEVER 没去了*!).",
      },
      {
        front: "What does Verb + 过 (*guo*) express?",
        back: "**Past life experience** (*have ever -ed before*): **我去过北京两次 / 你吃过榴莲吗？**",
      },
      {
        front: "How do 了 and 过 behave differently when negated with 没?",
        back: "Negating **了** **DROPS 了** (**吃了 → 没吃**); negating **过** **KEEPS 过** (**吃过 → 没吃过**)!",
      },
      {
        front: "陈叔叔去了北京 vs 陈叔叔去过北京 — where is Uncle Chen now?",
        back: "**去了北京** = he went to Beijing (may still be there!); **去过北京** = he has been to Beijing before (and has returned!).",
      },
      {
        front: "How do you express 'am / is / are -ing right now' in Mandarin?",
        back: "**Subject + 正在 / 在 + Verb + Object (+ 呢)** — e.g. **弟弟正在做作业呢。** (NO **是**!)",
      },
      {
        front: "How do you combine 正在 with a location like 在图书馆?",
        back: "Merge into ONE **正在**: **姐姐正在图书馆看书呢** (*NEVER 正在在图书馆*!).",
      },
      {
        front: "会 (*huì*) vs 打算 (*dǎsuàn*) for the future",
        back: "**会** = prediction or promise (**明天会下雨**); **打算** (or **准备**) = deliberate personal plan (**周末我打算去游泳**).",
      },
      {
        front: "快要…了 vs 就要…了 — when MUST you pick 就要…了?",
        back: "Whenever a **specific time expression** stands in front: **下个星期就要考试了！** (vs **快要考试了！** with no time word).",
      },
      {
        front: "How do you ALWAYS negate 有 (*to have*) — even for tomorrow?",
        back: "**没有** (*méiyǒu*) — **NEVER** *不有*! E.g. **我明天没有中文课。**",
      },
      {
        front: "When do you negate with 不 (*bù*) vs 没 (*méi*)?",
        back: "**不** = habits, future, adjectives, **是/会/想**; **没** = **有**, past actions (drop **了**!), **过** experience, ongoing **没在**.",
      },
      {
        front: "从来不 (*cónglái bù*) vs 从来没…过 (*cónglái méi … guo*)",
        back: "**从来不** = never as a habit (**爸爸从来不喝可乐**); **从来没…过** = never once experienced in life (**我从来没看过下雪**).",
      },
      {
        front: "How do you say 'last week / next week' vs 'last year / next year'?",
        back: "Weeks & months take **上个 / 下个** (**上个星期**, **下个月**); years take **去年** (*last year*) and **明年** (*next year*) — NEVER *上个年*!",
      },
    ],
    mustKnow: [
      "Can you place **了** right after the verb and before a quantified object (**买了三斤苹果**)?",
      "Can you use sentence-final **了** to announce a new state (**下雨了**, **我饿了**) and keep **了** off **很 + Adjective**?",
      "Can you ask and answer life-experience questions with **Verb + 过** and **没(有) + Verb + 过**?",
      "Can you place frequency counts like **一次 / 两次** accurately (**去过北京两次**)?",
      "Can you express ongoing actions with **正在 / 在 … (呢)** without inserting **是** or **了**?",
      "Can you choose accurately between **会** (forecast), **打算 / 准备** (plan), **要** (scheduled), and **快要…了 / 就要…了** (imminent)?",
      "Can you negate past actions with **没(有)** while dropping **了** (**昨天没去**)?",
      "Can you negate **有** with **没有** in every timeframe, and negate adjectives / **是** / future plans with **不**?",
      "Can you apply **不** tone sandhi (*bù* → *bú* before 4th tone: **不是** *bú shì*, **不去** *bú qù*)?",
    ],
    misconceptions: [
      {
        wrong: "Treating **了** as an automatic past-tense stamp on every sentence with **昨天** or **去年**: *昨天天气很热了，我很高兴了。*",
        right: "**了** marks completion or change, NOT past tense! Static descriptions with **很** take zero **了**: **昨天天气很热，我很高兴。**",
      },
      {
        wrong: "Keeping **了** when negating a past sentence: *我昨天没吃了早饭。*",
        right: "If the action didn't happen, it wasn't completed! Delete **了**: **我昨天没吃早饭。**",
      },
      {
        wrong: "Dropping **过** when negating life experience: *我没去北京* (when trying to say *'I have never been to Beijing'*).",
        right: "Keep **过** to express *never in my life*: **我没去过北京。**",
      },
      {
        wrong: "Translating English *'is/am/are -ing'* with **是**: *弟弟是在看电视。*",
        right: "**正在** or **在** directly precedes the verb with NO **是**: **弟弟正在看电视呢。**",
      },
      {
        wrong: "Negating **有** with **不**: *我不有弟弟 / 明天我不有空。*",
        right: "**有** is ALWAYS negated with **没**: **我没有弟弟 / 明天我没有空。**",
      },
      {
        wrong: "Saying *上个年* for 'last year' and *下个年* for 'next year' by analogy with **上个星期 / 下个星期**.",
        right: "Days and years have dedicated words without **个**: **昨天 / 明天** and **去年 / 明年**!",
      },
    ],
    examMistakes: [
      "Selecting **没去了** or **没有买了** in IGCSE 0547 grammar MCQs — examiners include a **没 + Verb + 了** distractor on almost every paper!",
      "Putting a specific time before **快要…了** (*明天快要下雨了* / *下星期快要考试了* ✗ → use **明天会下雨** or **下个星期就要考试了** ✓).",
      "Confusing **以前** word order: writing *以前睡觉我刷牙* ✗ instead of **睡觉以前我刷牙** (*Event + 以前 = before Event*; standalone **以前** = *in the past*).",
      "Using **不** for yesterday's action (*昨天我不看电影* ✗ → **昨天我没看电影** ✓) or **没** for tomorrow's plan (*明天我没去* ✗ → **明天我不去** ✓).",
      "Adding **吗** at the end of a **…了没有？** or **…过没有？** question (*你吃饭了没有吗？* ✗).",
      "Mixing **正在** with **了** (*妹妹正在唱歌了* ✗ → **妹妹正在唱歌呢** ✓).",
      "Writing *二次* instead of **两次** for *'twice'* (**去过两次** ✓; **第二次** = *the second time*).",
    ],
    mnemonics: [
      {
        topic: "没 Destroys 了",
        device: "**Water (没's 氵) Puts Out Completion's Spark (了)!**",
        explanation:
          "**没** has the three-dot water radical **氵**! The moment **没** splashes onto a past verb, **了** is extinguished (**吃了 → 没吃**). **过** is a stone bridge, so it survives the water (**去过 → 没去过**)!",
      },
      {
        topic: "有 Always Takes 没",
        device: "**没有** Are Inseparable Best Mates — ***不有* Does Not Exist!**",
        explanation:
          "You already know the word **没有** (*méiyǒu*) as one unit — never break them up with **不**!",
      },
      {
        topic: "上 = Past, 下 = Future",
        device: "**Calendar Scroll Reads Top-to-Bottom (上 → 下)**",
        explanation:
          "Picture a vertical Chinese wall scroll: earlier weeks/months sit **above** (**上个星期** = last week, **上个月** = last month) and upcoming ones sit **below** (**下个星期** = next week, **下个月** = next month)!",
      },
      {
        topic: "就要…了 vs 快要…了",
        device: "**Specific Time Needs 就 (Jiù = Just on Schedule)!**",
        explanation:
          "Got a clock time or **下个星期** in front? Use **就要…了** (**八点就要上课了**). No time word? **快要…了** (**快要上课了**)!",
      },
    ],
    realWorld: [
      {
        title: "Singapore's Classic Greeting: 你吃饱了吗？",
        emoji: "🍜",
        detail:
          "At hawker centres and HDB lift lobbies across Singapore, neighbours greet each other with **你吃饱了吗？** (*Have you eaten until full?*) — answered with **吃饱了！** (completed + new state **了**) or **还没吃呢！** (*Not yet!* — zero **了**!).",
      },
      {
        title: "MRT Platform Announcements (快…了)",
        emoji: "🚆",
        detail:
          "On the East-West and Thomson-East Coast MRT lines, Mandarin announcements warn commuters: **列车快到了，请站在黄线后面** (*The train is about to arrive — please stand behind the yellow line*).",
      },
      {
        title: "Singaporeans Talking About Snow (从来没看过下雪!)",
        emoji: "⛄",
        detail:
          "Because Singapore sits 1° north of the equator, **我以前从来没看过下雪，今年十二月我打算去哈尔滨看雪！** combines **以前**, **从来没…过**, and **打算** in one authentic Year 8 travel story.",
      },
      {
        title: "Sudden Tropical Downpours (下雨了!)",
        emoji: "☔",
        detail:
          "Blue skies at Tanglin can turn dark in three minutes — when the first drops hit the window, everyone shouts **下雨了！** (change-of-state **了**!), followed ten minutes later by **外面正在下大雨呢！** (ongoing!).",
      },
      {
        title: "Foodie Bucket Lists Across China & Singapore (吃过…吗？)",
        emoji: "🥟",
        detail:
          "Comparing food adventures uses **吃过 / 尝过** non-stop: **你吃过上海的小笼包和北京烤鸭吗？我都吃过，可是还没尝过四川火锅！**",
      },
    ],
    videos: [
      {
        title: "Chinese Particle 了 (le) Made Simple: Completed Action vs Change of State",
        channel: "Grace Mandarin Chinese",
        url: "https://www.youtube.com/results?search_query=chinese+particle+le+completed+action+change+of+state+grace+mandarin",
      },
      {
        title: "Difference Between 了 (le) and 过 (guo) in Mandarin Chinese",
        channel: "Chinese Zero to Hero",
        url: "https://www.youtube.com/results?search_query=difference+between+le+and+guo+mandarin+chinese+grammar",
      },
      {
        title: "Expressing Ongoing & Future Tense in Mandarin: 正在, 会, 要, 打算, 快要…了",
        channel: "Yoyo Chinese",
        url: "https://www.youtube.com/results?search_query=mandarin+ongoing+zhengzai+future+hui+yao+dasuan+kuaiyao+le",
      },
      {
        title: "不 (bù) vs 没 (méi) — Never Confuse Mandarin Negation Again!",
        channel: "Everyday Chinese",
        url: "https://www.youtube.com/results?search_query=bu+vs+mei+chinese+negation+grammar+explained",
      },
    ],
    formulas: [
      {
        name: "Completed Action & New State (了)",
        formula: "Subj + Verb + 了 + Num + MW + Noun  |  New State + 了",
        note: "我今天早上吃了两个包子。 / 外面下雨了！",
      },
      {
        name: "Past Life Experience (过)",
        formula: "Subj (+ 以前) + Verb + 过 + Obj (+ 一/两次)  |  Neg: 没(有) + Verb + 过",
        note: "我去过北京两次。 / 我没吃过榴莲。",
      },
      {
        name: "Ongoing Present (-ing Right Now)",
        formula: "Subj + 正在 / 在 (+ Place) + Verb + Obj (+ 呢)",
        note: "弟弟正在房间做作业呢。 Dìdi zhèngzài fángjiān zuò zuòyè ne.",
      },
      {
        name: "Future Predictions & Plans",
        formula: "Subj + 会 (forecast) / 打算 (plan) / 要 (going to) + Verb",
        note: "明天会下雨，所以我打算在家看书。",
      },
      {
        name: "Imminent Future (About to Happen)",
        formula: "快要 + Verb + 了  |  Specific Time + 就要 + Verb + 了",
        note: "快要放假了！ / 下个星期就要考试了！",
      },
      {
        name: "不 vs 没 Master Split",
        formula: "不 + Habit / Future / Adj / 是  |  没(有) + Past Verb [NO 了!] / 有",
        note: "我平时不喝咖啡；我昨天没看电视。",
      },
    ],
  },
};
