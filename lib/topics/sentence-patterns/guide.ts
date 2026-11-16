import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "sentence-patterns",
  title: "句型与连词 — Mandarin Sentence Patterns & Connectors",
  strand: "Term 3 · Food & Grammar",
  icon: "🧱",
  summary:
    "Master Mandarin's golden STPV word order, crisp 比/没有 comparisons, and paired connectors to build fluent IGCSE sentences.",
  intro:
    "Why does translating word-for-word from English produce instant 'Chinglish' in Mandarin? Because English states the action first and tacks *where*, *with whom*, and *when* onto the tail end — whereas Mandarin acts like a film director: **Who → When → With Whom → Where → Action**! Once you lock in the **STPV Golden Rule**, avoid the famous **比** (*bǐ*) + **很** trap, and snap paired connectors like **因为…所以…** and **不但…而且…** into place, your Year 8 sentences jump straight to Cambridge IGCSE 0547 top-band fluency.",
  guide: [
    {
      id: "stpv-word-order",
      heading: "The Golden Rule: Subject + Time + Place + Verb (STPV)",
      discovery: {
        problem:
          "An English speaker wants to say: *'I play basketball with friends at school on Friday afternoon.'* They translate word-for-word: **我打篮球跟朋友在学校星期五下午** — and their Mandarin teacher puts four red arrows on the page! Rearrange the five blocks (**我** / **星期五下午** / **跟朋友一起** / **在学校** / **打篮球**) into natural Mandarin order. What principle decides where every block goes?",
        idea:
          "Mandarin sets the entire **stage** BEFORE the actor performs the **action**! First name the actor (**我**), then zoom in on **Time** (**星期五下午**), **Companion** (**跟朋友一起**), and **Place** (**在学校**), and finally deliver the **Verb + Object** (**打篮球**): **我星期五下午跟朋友一起在学校打篮球。**",
      },
      body: `In English, adverbials of place, company, and time pile up *after* the verb (*"eat chicken rice at the hawker centre at noon"*). In Mandarin, **nothing comes after Verb + Object except duration or complement** — every stage-setting detail sits **before the verb**!

| Slot | Role | Mandarin Example | Pinyin |
|---|---|---|---|
| **S** — Subject | Who? | **我** | *Wǒ* |
| **T** — Time | When? (big → small) | **星期天中午** | *xīngqītiān zhōngwǔ* |
| **With** — Companion | With whom? | **跟家人一起** | *gēn jiārén yìqǐ* |
| **P** — Place / Transport | Where? / How? | **在小贩中心** | *zài xiǎofàn zhōngxīn* |
| **V (+ O)** — Action | Do what? | **吃鸡饭。** | *chī jīfàn.* |

> **Two flexibility notes & two unbreakable laws:**
> - **Time** usually goes right after Subject (**我星期天…**), though you may also front **Time** before Subject for emphasis (**星期天我…**). **NEVER** put Time at the end of the sentence (*我吃鸡饭星期天* ✗)!
> - **Place** (**在** + place) and **Companion** (**跟** + person + **一起**) **MUST** stand before the action verb (*我吃鸡饭在小贩中心* ✗ → **我在小贩中心吃鸡饭** ✓).
> - **Transport before 去**: say **坐地铁去乌节路** (*zuò dìtiě qù Wūjiélù*, literally *"take MRT go Orchard Road"*), never *去乌节路坐地铁* (which means going to Orchard Road in order to ride the MRT!).`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mandarin STPV word order blueprint showing Subject, Time, Companion, Place and Verb-Object in sequence">
  <rect x="8" y="8" width="624" height="244" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="34" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Mandarin Film-Director Order: Set the Stage Before the Action!</text>
  <rect x="22" y="54" width="96" height="92" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="2"/>
  <text x="70" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c81e1e">1. SUBJECT</text>
  <text x="70" y="103" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#1e293b">我</text>
  <text x="70" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Wǒ</text>
  <text x="70" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">I</text>
  <text x="128" y="105" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">→</text>
  <rect x="138" y="54" width="112" height="92" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <text x="194" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309">2. TIME</text>
  <text x="194" y="103" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="bold" fill="#1e293b">星期六下午</text>
  <text x="194" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">xīngqīliù xiàwǔ</text>
  <text x="194" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">Sat afternoon</text>
  <text x="260" y="105" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">→</text>
  <rect x="270" y="54" width="116" height="92" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <text x="328" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">3. WITH WHOM</text>
  <text x="328" y="103" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="bold" fill="#1e293b">跟朋友一起</text>
  <text x="328" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">gēn péngyou yìqǐ</text>
  <text x="328" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">with friends</text>
  <text x="396" y="105" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">→</text>
  <rect x="406" y="54" width="104" height="92" rx="12" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
  <text x="458" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0d9488">4. PLACE</text>
  <text x="458" y="103" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="bold" fill="#1e293b">在学校</text>
  <text x="458" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">zài xuéxiào</text>
  <text x="458" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">at school</text>
  <text x="520" y="105" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">→</text>
  <rect x="530" y="54" width="88" height="92" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
  <text x="574" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">5. VERB</text>
  <text x="574" y="103" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">打篮球</text>
  <text x="574" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">dǎ lánqiú</text>
  <text x="574" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">play b-ball</text>
  <rect x="22" y="164" width="596" height="72" rx="10" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
  <text x="320" y="188" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#be123c">English Trap: Never put Place or Time at the end!</text>
  <text x="320" y="210" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">✗ 我打篮球在学校星期六下午  →  ✓ 我星期六下午跟朋友一起在学校打篮球。</text>
  <text x="320" y="228" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">Time may also lead: 星期六下午我跟朋友一起在学校打篮球。</text>
</svg>`,
      diagramCaption:
        "Mandarin builds the scene from widest frame (Time) to closest context (With Whom + Place) before firing the Verb.",
      workedExamples: [
        {
          title: "Translating an English sentence with Time + Place + Companion",
          problem:
            "Translate into Mandarin using STPV order: *'My older sister revises Chinese with classmates in the library every evening.'*",
          steps: [
            "Identify the blocks: Subject = **姐姐** (*jiějie*), Time = **每天晚上** (*měitiān wǎnshang*), Companion = **跟同学一起** (*gēn tóngxué yìqǐ*), Place = **在图书馆** (*zài túshūguǎn*), Verb + Object = **复习中文** (*fùxí Zhōngwén*).",
            "Line them up in **S + T + With + P + V** order (do NOT put *in the library* or *every evening* at the end!).",
            "Assemble smoothly: **姐姐每天晚上跟同学一起在图书馆复习中文。**",
          ],
          answer:
            "**姐姐每天晚上跟同学一起在图书馆复习中文。** (*Jiějie měitiān wǎnshang gēn tóngxué yìqǐ zài túshūguǎn fùxí Zhōngwén.*)",
          yourTurn: {
            question:
              "Unscramble into natural Mandarin STPV order: **看书 / 我 / 星期天上午 / 在家**",
            answer: {
              type: "text",
              accept: [
                "我星期天上午在家看书",
                "星期天上午我在家看书",
                "Wǒ xīngqītiān shàngwǔ zài jiā kàn shū",
                "Xīngqītiān shàngwǔ wǒ zài jiā kàn shū",
              ],
              display: "我星期天上午在家看书。",
            },
            solution:
              "Subject (**我**) + Time (**星期天上午**) + Place (**在家**) + Verb (**看书**) → **我星期天上午在家看书。** (Fronting Time as **星期天上午我在家看书** is also natural!)",
          },
        },
      ],
      keyPoints: [
        "**Golden Formula**: **Subject + Time + (跟…一起) + (在 + Place) + Verb + Object**.",
        "**Time** goes right after Subject (or right at the very start), **never** at the end of a Mandarin sentence.",
        "Bigger time units always precede smaller ones: **星期五下午四点** (*Friday → afternoon → 4 o'clock*).",
        "**在 + Place** marks where an action happens before the verb (**在东海岸公园骑自行车**).",
        "Transport is a method before **去**: **坐地铁去学校** (*take MRT to go to school*).",
      ],
      whyItWorks:
        "Mandarin is a **topic-prominent, background-before-foreground** language. Just like Mandarin dates zoom from Year → Month → Day and addresses zoom from Country → City → Street, Mandarin clauses zoom from **When → With Whom → Where → Action** so the listener can picture the setting before the action happens.",
      strategies: [
        "**Highlight & Slot**: Underline *When*, *With whom*, and *Where* in an English sentence and drag all three in front of the verb before translating.",
        "**Verb-Last Check**: Check that your main action verb + object sit at the end of the clause, not buried in the middle.",
      ],
      thinkDeeper:
        "Compare **我在桌子上看书** (*I read a book on the table*) and **我把书放在桌子上** (*I put the book onto the table*). Why can **在桌子上** follow the verb **放** (*put*), when it cannot follow **看书**?",
    },
    {
      id: "bi-comparisons",
      heading: "Comparisons with 比 (bǐ) and 没有 (méiyǒu)",
      discovery: {
        problem:
          "Spot the hidden error! A student knows *'Singapore is hot'* is **新加坡很热** (*Xīnjiāpō hěn rè*). So to say *'Singapore is hotter than Beijing'*, they write: **新加坡比北京很热。** Why does a native speaker immediately wince at **很** here — and what do you write instead if you want to say *'much hotter'*?",
        idea:
          "In **新加坡很热**, **很** acts as a dummy degree link so **热** doesn't sound like an abrupt comparison. Once **比** (*compared with*) enters the sentence, **比** *already* supplies the comparative degree! Keeping **很** clashes with **比**. Drop **很** (**新加坡比北京热**), and if you mean *'much hotter'*, put **得多** *after* the adjective: **新加坡比北京热得多**!",
      },
      body: `Mandarin has three clean comparison frames — one for *"more than"*, one for *"not as … as"*, and one for *"the same as"*:

| Meaning | Mandarin Frame | Example |
|---|---|---|
| **A is more Adj than B** | **A + 比 + B + Adj** | **新加坡比北京热。** (*Singapore is hotter than Beijing.*) |
| **A is MUCH / A BIT more Adj** | **A + 比 + B + Adj + 得多 / 一点儿** | **飞机比公共汽车快得多。** (*Planes are much faster than buses.*) |
| **A is EVEN more Adj than B** | **A + 比 + B + 更 + Adj** | **今天比昨天更潮湿。** (*Today is even more humid than yesterday.*) |
| **A is NOT as Adj as B** | **A + 没有 + B + (那么) + Adj** | **今天没有昨天那么热。** (*Today is not as hot as yesterday.*) |
| **A is AS Adj AS B** | **A + 跟 / 和 + B + 一样 (+ Adj)** | **哥哥跟爸爸一样高。** (*My older brother is as tall as Dad.*) |

> **Three IGCSE 0547 Comparison Rules to tattoo on your brain:**
> 1. **NO 很 / 非常 / 真 with 比**: Never write *A 比 B 很贵* ✗ or *A 比 B 非常贵* ✗ → write **A 比 B 贵** ✓ or **A 比 B 贵得多** ✓!
> 2. **Degree gap goes AFTER the adjective**: *a bit cheaper* = **便宜一点儿** (*piányi yìdiǎnr*); *much colder* = **冷得多** (*lěng de duō*).
> 3. **Use 没有 for negative comparisons**: Instead of clunky *不比*, say **上海没有哈尔滨那么冷** (*Shanghai is not as cold as Harbin*).`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three Mandarin comparison frames: A bi B Adjective, A meiyou B name Adjective, and A gen B yiyang Adjective">
  <rect x="8" y="8" width="624" height="244" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Three Comparison Frames (比较句) — Watch Where Modifiers Sit!</text>
  <rect x="20" y="46" width="600" height="62" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.8"/>
  <text x="36" y="70" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">1. MORE THAN (A &gt; B):</text>
  <text x="205" y="70" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">新加坡  +  比  +  北京  +  热  (+ 得多 / 一点儿)</text>
  <text x="36" y="94" font-family="sans-serif" font-size="12" fill="#991b1b">TRAP: NEVER put 很 or 非常 before Adj! (✗ 比北京很热 → ✓ 比北京热得多)</text>
  <rect x="20" y="118" width="600" height="58" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
  <text x="36" y="142" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">2. NOT AS … AS (A &lt; B):</text>
  <text x="210" y="142" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">上海  +  没有  +  哈尔滨  +  (那么)  +  冷</text>
  <text x="36" y="164" font-family="sans-serif" font-size="12" fill="#78350f">Shànghǎi méiyǒu Hā'ěrbīn nàme lěng — Shanghai is not as cold as Harbin.</text>
  <rect x="20" y="186" width="600" height="56" rx="12" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.8"/>
  <text x="36" y="210" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0d9488">3. EQUAL TO (A = B):</text>
  <text x="205" y="210" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">小贩中心  +  跟  +  餐厅  +  一样  +  好吃</text>
  <text x="36" y="231" font-family="sans-serif" font-size="12" fill="#115e59">Negative equality: A 跟 B 不一样 (A is different from B).</text>
</svg>`,
      diagramCaption:
        "Memorise the three comparison rows: 比 for greater, 没有…(那么) for less, and 跟…一样 for equal.",
      workedExamples: [
        {
          title: "Comparing prices with 'much' and 'not as'",
          problem:
            "Write two Mandarin sentences comparing **大餐厅** (*big restaurants*) and **小贩中心** (*hawker centres*) using **贵** (*expensive*): (a) Big restaurants are much more expensive than hawker centres; (b) Hawker centres are not as expensive as big restaurants.",
          steps: [
            "For (a), use **A + 比 + B + Adj + 得多** (remember: NO **很**!): **大餐厅比小贩中心贵得多。**",
            "For (b), flip A and B with **A + 没有 + B + (那么) + Adj**: **小贩中心没有大餐厅那么贵。**",
          ],
          answer:
            "(a) **大餐厅比小贩中心贵得多。**  (b) **小贩中心没有大餐厅那么贵。**",
          yourTurn: {
            question:
              "Translate into Mandarin: *'This pair of trousers is a little bit cheaper than that pair.'* (Use **这条裤子**, **那条**, **便宜**, **一点儿**.)",
            answer: {
              type: "text",
              accept: [
                "这条裤子比那条便宜一点儿",
                "这条裤子比那条裤子便宜一点儿",
                "这条裤子比那条便宜一点",
                "Zhè tiáo kùzi bǐ nà tiáo piányi yìdiǎnr",
                "Zhè tiáo kùzi bǐ nà tiáo piányi yīdiǎnr",
                "Zhè tiáo kùzi bǐ nà tiáo kùzi piányi yìdiǎnr",
                "Zhè tiáo kùzi bǐ nà tiáo kùzi piányi yīdiǎnr",
              ],
              display: "这条裤子比那条便宜一点儿。",
            },
            solution:
              "**A** (**这条裤子**) + **比** + **B** (**那条**) + **Adj** (**便宜**) + **一点儿** → **这条裤子比那条便宜一点儿。**",
          },
        },
      ],
      keyPoints: [
        "**A + 比 + B + Adjective** = A is more [Adj] than B — **never** insert **很** or **非常**!",
        "To quantify the gap, attach **一点儿** (*a little*) or **得多** (*much more*) **after** the adjective.",
        "**更** (*even more*) IS allowed before the adjective (**今天比昨天更热**) when B already has that quality.",
        "**A + 没有 + B + (那么) + Adjective** = A is not as [Adj] as B.",
        "**A + 跟/和 + B + 一样 (+ Adjective)** = A is the same as / as [Adj] as B.",
      ],
      whyItWorks:
        "Historically, **比** (*bǐ*) is two people standing side-by-side (**匕** + **匕**) to measure who is taller! Because **比** sets up a relative comparison rather than an absolute rating, absolute intensifiers like **很** (*very*) contradict the relative scale — only relative modifiers (**更** before, or **一点儿 / 得多** after) make logical sense.",
      strategies: [
        "**The Red-Pen 很 Hunt**: Every time you write **比**, scan right and cross out any accidental **很** or **非常**.",
        "**Flip Check**: Practise converting every **A 比 B Adj** sentence into **B 没有 A 那么 Adj** — both express the same real-world fact!",
      ],
      thinkDeeper:
        "What is the subtle difference in meaning between **我不比你高** (*Wǒ bù bǐ nǐ gāo*) and **我没有你高** (*Wǒ méiyǒu nǐ gāo*)? Suppose we are the exact same height (165 cm each) — which sentence is true?",
    },
    {
      id: "cause-contrast",
      heading: "Cause & concession pairs: 因为…所以… & 虽然…但是…",
      discovery: {
        problem:
          "In English class, your teacher crosses out *'Because it was raining, so we stayed home'* and *'Although Chinese is hard, but it is fun'* as grammar crimes! Yet in Mandarin class, writing **因为下雨，我们待在家** without **所以**, or **虽然中文很难，很有意思** without **但是**, loses marks! Why does Mandarin insist on **paired** connectors?",
        idea:
          "Mandarin clauses balance like bookends! The opening connector (**因为** *because*, **虽然** *although*, **如果** *if*) announces the logical relationship, and the closing partner (**所以** *therefore*, **但是/可是** *but*, **就** *then*) locks the second clause into place.",
      },
      body: `Master these three core two-part logical bridges:

| Logical Link | Paired Pattern | Natural Mandarin Example |
|---|---|---|
| **Cause → Result** | **因为 …，所以 …** | **因为外面下大雨，所以我们待在家。** (*Because it's raining heavily outside, we stay at home.*) |
| **Concession → Contrast** | **虽然 …，但是 / 可是 …** | **虽然榴莲很贵，但是爸爸很喜欢吃。** (*Although durian is expensive, Dad loves eating it.*) |
| **Condition → Consequence** | **如果 / 要是 …，(Subj) + 就 …** | **如果明天晴天，我们就去圣淘沙。** (*If it is sunny tomorrow, we will go to Sentosa.*) |

### Watch Subject Placement in **如果…就…**!
**因为**, **所以**, **虽然**, and **但是** are **conjunctions** — the subject of clause 2 normally comes *after* **所以** or **但是** (**所以我们去** / **但是我很开心**).

**就** (*jiù*, "then"), however, is an **adverb**! Like **也** and **都**, **就 MUST stand AFTER the subject and BEFORE the verb**:
- ✗ *如果明天下雨，**就我们**不去公园。* (Wrong — adverb before subject!)
- ✓ **如果明天下雨，我们就不去公园。** (*Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù gōngyuán.*)`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mandarin paired connectors bridge showing yinwei suoyi, suiran danshi, and ruguo Subject jiu Verb">
  <rect x="8" y="8" width="624" height="244" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Paired Connector Bookends — Keep BOTH Halves in Mandarin!</text>
  <rect x="24" y="48" width="276" height="54" rx="10" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.8"/>
  <text x="162" y="71" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#c81e1e">因为 + Cause Clause，</text>
  <text x="162" y="91" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">因为今天我发烧了，</text>
  <text x="320" y="80" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">⇒</text>
  <rect x="340" y="48" width="276" height="54" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="478" y="71" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#15803d">所以 + Result Clause。</text>
  <text x="478" y="91" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">所以我去看医生。</text>
  <rect x="24" y="114" width="276" height="54" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
  <text x="162" y="137" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">虽然 + Concession Clause，</text>
  <text x="162" y="157" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">虽然汉字很难写，</text>
  <text x="320" y="146" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">⇌</text>
  <rect x="340" y="114" width="276" height="54" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
  <text x="478" y="137" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0284c7">但是 / 可是 + Contrast。</text>
  <text x="478" y="157" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">但是非常有意思。</text>
  <rect x="24" y="180" width="276" height="56" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.8"/>
  <text x="162" y="203" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0d9488">如果 / 要是 + Condition，</text>
  <text x="162" y="223" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">如果明天不下雨，</text>
  <text x="320" y="212" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#64748b">→</text>
  <rect x="340" y="180" width="276" height="56" rx="10" fill="#fae8ff" stroke="#9333ea" stroke-width="1.8"/>
  <text x="478" y="203" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#7e22ce">Subject + 就 + Verb！</text>
  <text x="478" y="223" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">我们就去东海岸公园！(NOT *就我们*)</text>
</svg>`,
      diagramCaption:
        "Keep both halves of 因为…所以… and 虽然…但是…, and always park 就 after the second clause's subject.",
      workedExamples: [
        {
          title: "Joining clauses with 虽然…但是… and 如果…就…",
          problem:
            "Combine into one smooth Mandarin sentence using **虽然…但是…**: *'This hawker centre is small. The chicken rice is delicious.'*",
          steps: [
            "Clause 1 (concession) takes **虽然**: **虽然这个小贩中心很小，** (*Suīrán zhège xiǎofàn zhōngxīn hěn xiǎo,*).",
            "Clause 2 (contrast) MUST keep **但是** (or **可是**): **但是鸡饭很好吃。** (*dànshì jīfàn hěn hǎochī.*).",
            "Join with a comma: **虽然这个小贩中心很小，但是鸡饭很好吃。**",
          ],
          answer:
            "**虽然这个小贩中心很小，但是鸡饭很好吃。** (*Suīrán zhège xiǎofàn zhōngxīn hěn xiǎo, dànshì jīfàn hěn hǎochī.*)",
          yourTurn: {
            question:
              "Translate into Mandarin using **如果…就…**: *'If you are free tomorrow, we will go watch a film.'* (Use **如果你明天有空**, **我们**, **去看电影**.)",
            answer: {
              type: "text",
              accept: [
                "如果你明天有空，我们就去看电影",
                "如果你明天有空我们就去看电影",
                "要是你明天有空，我们就去看电影",
                "Rúguǒ nǐ míngtiān yǒu kòng, wǒmen jiù qù kàn diànyǐng",
              ],
              display: "如果你明天有空，我们就去看电影。",
            },
            solution:
              "Put **就** AFTER the subject **我们** and BEFORE **去看电影**: **如果你明天有空，我们就去看电影。**",
          },
        },
      ],
      keyPoints: [
        "Always write **both** halves of **因为…，所以…** (*because … therefore …*) and **虽然…，但是/可是…** (*although … yet …*).",
        "When both clauses share one subject, you can say **因为我生病了，所以没去上学** OR **我因为生病了，所以没去上学**.",
        "Never drop **但是 / 可是** after **虽然** — a lone **虽然** sounds unfinished in Mandarin!",
        "In **如果 / 要是 …，Subject + 就 + Verb**, **就** is an adverb and MUST sit **after** the subject (**我们就去**, never *就我们去*).",
      ],
      whyItWorks:
        "Spoken Mandarin has many homophones and no verb endings to mark clause boundaries. Pairing an opening signal (**因为 / 虽然 / 如果**) with a midpoint hinge (**所以 / 但是 / 就**) creates acoustic symmetry so listeners instantly hear where the condition/reason ends and the main point begins.",
      strategies: [
        "**Bookend Check**: Whenever you write **因为** or **虽然**, immediately write **，所以** or **，但是** before filling in the second clause so you never forget the partner.",
        "**Adverb Pinning for 就**: Treat **就** exactly like **也** (*also*) — pin it right after the subject and right before the verb!",
      ],
      thinkDeeper:
        "Can you reverse the order in Mandarin and put **因为** in the *second* clause, like English *'I didn't go out because it rained'*? (Hint: **我没出去，因为下雨了** exists in speech, so why is **因为下雨，所以我没出去** preferred in IGCSE writing?)",
    },
    {
      id: "addition-simultaneous",
      heading: "Upgrading sentences: 不但…而且… & 一边…一边…",
      discovery: {
        problem:
          "Compare these two **不但…而且…** sentences:\n1. **姐姐不但会说中文，而且会说法文。** (*My older sister can speak not only Chinese, but also French.*)\n2. **不但姐姐会说中文，而且弟弟也会说中文。** (*Not only can my older sister speak Chinese, my younger brother can speak Chinese too.*)\nWhy did **姐姐** stand *before* **不但** in Sentence 1, yet jump *after* **不但** in Sentence 2?",
        idea:
          "Look at how many subjects there are! When **one** person does both things (Sentence 1), that shared subject leads the whole sentence: **Subject + 不但…, 而且…**. When **two different** subjects are being linked (Sentence 2: **姐姐** vs **弟弟**), **不但** must stand at the very front so its scope covers Subject 1!",
      },
      body: `To earn top marks for range of structures, swap repetitive **和** and **也** sentences for **addition**, **simultaneous**, and **sequence** patterns:

### 1. Upgrading Addition: **不但 …，而且 (也/还) …** (*not only … but also …*)
- **Same subject** (90% of Year 8 sentences): **Subject + 不但 + Clause 1，而且 + (也/还) + Clause 2**
  - **新加坡的小贩中心不但便宜，而且很好吃。** (*Singapore's hawker centres are not only cheap, but also delicious.*)
- **Two different subjects**: **不但 + Subject 1 …，而且 + Subject 2 + 也 …**
  - **不但我喜欢吃榴莲，而且爸爸也喜欢吃。** (*Not only do I like eating durian, Dad likes eating it too.*)

> **The #1 English Trap with 和 (*hé*):** **和** ONLY joins **nouns or pronouns** (**苹果和香蕉**, **我和弟弟**). **NEVER** use **和** to join two verbs or two clauses (*我喜欢游泳和打篮球* is borderline only as noun-like objects; *我去乌节路和买衣服* ✗ is wrong! Use **而且**, **也**, **还**, or **先…再…**!).

### 2. Two Actions at the Same Time: **Subject + 一边 + Verb 1，一边 + Verb 2**
- **哥哥喜欢一边听音乐，一边做作业。** (*My older brother likes listening to music while doing homework.*)
- **奶奶常常一边喝茶，一边跟朋友聊天。** (*Grandma often drinks tea while chatting with friends.*)

### 3. Step-by-Step Sequence: **Subject + 先 + Verb 1，再 / 然后 + Verb 2**
- **放学以后，我先做作业，再玩电脑游戏。** (*After school, I first do homework, then play computer games.*)`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of budan erqie addition, yibian yibian simultaneous actions, and xian zai sequential actions">
  <rect x="8" y="8" width="624" height="244" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">Three High-Impact Sentence Upgraders</text>
  <rect x="22" y="46" width="596" height="60" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.8"/>
  <text x="38" y="69" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">ADDITION (升级): Subject + 不但 …，而且 (也/还) …</text>
  <text x="38" y="91" font-family="sans-serif" font-size="13" fill="#1e293b">这家餐厅不但干净，而且菜很好吃。 (Two subjects → 不但 Subj 1…，而且 Subj 2 也…)</text>
  <rect x="22" y="116" width="290" height="120" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
  <text x="167" y="139" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0284c7">SIMULTANEOUS (同时): 一边…一边…</text>
  <rect x="40" y="150" width="254" height="30" rx="6" fill="#bae6fd"/>
  <text x="167" y="170" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0c4a6e">Track A: 一边听音乐 (listen to music)</text>
  <rect x="40" y="190" width="254" height="30" rx="6" fill="#bae6fd"/>
  <text x="167" y="210" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0c4a6e">Track B: 一边跑步 (jog at same time)</text>
  <rect x="328" y="116" width="290" height="120" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="473" y="139" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">SEQUENCE (先后): 先…，再 / 然后…</text>
  <rect x="344" y="164" width="112" height="44" rx="8" fill="#bbf7d0"/>
  <text x="400" y="184" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#14532d">1. 先洗手</text>
  <text x="400" y="200" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#166534">wash hands first</text>
  <text x="473" y="190" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#15803d">→</text>
  <rect x="490" y="164" width="112" height="44" rx="8" fill="#bbf7d0"/>
  <text x="546" y="184" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#14532d">2. 再吃晚饭</text>
  <text x="546" y="200" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#166534">then eat dinner</text>
</svg>`,
      diagramCaption:
        "Choose 不但…而且… to stack qualities, 一边…一边… for parallel actions, and 先…再… for step-by-step order.",
      workedExamples: [
        {
          title: "Upgrading two simple sentences with 不但…而且…",
          problem:
            "Upgrade these two flat sentences into one top-band sentence using **不但…而且…**: **坐地铁很快。坐地铁很方便。** (*Taking the MRT is fast. Taking the MRT is convenient.*)",
          steps: [
            "Check the subject: both sentences share the same subject **坐地铁** (*zuò dìtiě*).",
            "Place the shared subject BEFORE **不但**: **坐地铁不但很快，**.",
            "Introduce the second quality with **而且**: **而且很方便。**",
          ],
          answer:
            "**坐地铁不但很快，而且很方便。** (*Zuò dìtiě búdàn hěn kuài, érqiě hěn fāngbiàn.*)",
          yourTurn: {
            question:
              "Translate into Mandarin using **一边…一边…**: *'We eat dinner while chatting.'* (Use **我们**, **吃晚饭**, **聊天**.)",
            answer: {
              type: "text",
              accept: [
                "我们一边吃晚饭，一边聊天",
                "我们一边吃晚饭一边聊天",
                "Wǒmen yìbiān chī wǎnfàn, yìbiān liáotiān",
                "Wǒmen yībiān chī wǎnfàn, yībiān liáotiān",
              ],
              display: "我们一边吃晚饭，一边聊天。",
            },
            solution:
              "Subject (**我们**) + **一边** + Action 1 (**吃晚饭**) + **，一边** + Action 2 (**聊天**) → **我们一边吃晚饭，一边聊天。**",
          },
        },
      ],
      keyPoints: [
        "**Same subject**: **Subject + 不但 …，而且 (也/还) …** (**弟弟不但聪明，而且很努力**).",
        "**Different subjects**: **不但 + Subject 1 …，而且 + Subject 2 + 也 …**.",
        "**一边 + Verb 1，一边 + Verb 2** is ONLY for two active actions happening simultaneously.",
        "**先** (*first*) and **再** (*then*) are adverbs — put the subject BEFORE **先** (**我先做作业，再看电视**).",
        "**和** (*hé*) NEVER connects two clauses or sentences!",
      ],
      whyItWorks:
        "**一边** literally means *'one side'*! Picture doing one action with your left side (**一边**) and another with your right side (**一边**) at the exact same moment — which is why static states like *'being 13 years old'* cannot use **一边…一边…**.",
      strategies: [
        "**Ban Clause-Level 和**: Whenever you are tempted to write **和** between two verbs or sentences, replace it with **先…再…** (if sequential), **一边…一边…** (if simultaneous), or **不但…而且…** (if building a point).",
        "**Count Your Subjects**: Before writing **不但**, count whether there is 1 subject (put Subject first) or 2 subjects (put **不但** first).",
      ],
      thinkDeeper:
        "Why can you say **我一边走路，一边听音乐** (*walk while listening to music*), yet **✗ 我一边是学生，一边喜欢运动** sounds comical? What kind of verbs work inside **一边…一边…**?",
    },
    {
      id: "combining-clauses",
      heading: "Building high-scoring IGCSE complex sentences",
      discovery: {
        problem:
          "Read Candidate A's paragraph and Candidate B's paragraph about eating out in Singapore:\n- **Candidate A**: *我星期天去小贩中心。我跟家人去。鸡饭很好吃。鸡饭很便宜。天气很热。我很开心。* (6 choppy sentences)\n- **Candidate B**: **星期天中午，我跟家人一起坐地铁去小贩中心吃午饭。虽然天气比昨天热一点儿，但是我们都很开心，因为那里的鸡饭不但便宜，而且非常好吃！**\nCount how many core grammar patterns Candidate B wove together!",
        idea:
          "Candidate B combined **five** patterns effortlessly: (1) **STPV + 坐地铁去** stage-setting, (2) **虽然…但是…** concession, (3) **比…一点儿** comparison, (4) **因为** reason, and (5) **不但…而且…** addition! On Cambridge IGCSE 0547 Writing, Language marks reward **variety of complex structures** over sheer character count.",
      },
      body: `Here is your **4-Step IGCSE Sentence-Upgrading Checklist** whenever you draft an 80–130 character response:

| Upgrade Step | Choppy Year 7 Draft | High-Scoring Year 8 / IGCSE Upgrade |
|---|---|---|
| **1. Merge Time + Companion + Transport + Place (STPV)** | *我星期六去东海岸公园。我跟朋友去。我们骑自行车。* | **星期六下午，我跟朋友一起在东海岸公园骑自行车。** |
| **2. Add a 比 or 没有 comparison** | *北京冬天很冷。新加坡很热。* | **北京的冬天比新加坡冷得多，新加坡没有北京那么冷。** |
| **3. Balance opinions with 虽然…但是…** | *打羽毛球很累。打羽毛球很有意思。* | **虽然打羽毛球有一点儿累，但是非常有意思。** |
| **4. Stack two positives with 不但…而且…** | *多吃蔬菜好吃。多吃蔬菜对身体好。* | **多吃蔬菜不但好吃，而且对身体很好。** |

> **Golden Pacing Rule — Don't Over-Stuff One Sentence!**
> Aim for **2 to 3 clauses per sentence**, not a 60-character monster! Alternate one **STPV + Sequence** sentence (**我们先…，然后…**), one **Comparison + Reason** sentence (**因为…比…，所以…**), and one **Concession or Addition** sentence (**虽然…但是…** / **不但…而且…**).`,
      workedExamples: [
        {
          title: "Transforming four choppy sentences into a Band-1 IGCSE mini-paragraph",
          problem:
            "Combine these four ideas into **two** fluent Mandarin sentences:\n1. *Tomorrow is Sunday.*\n2. *If it doesn't rain, I'll go to Orchard Road with Mum.*\n3. *Shopping malls there are much cooler than outside.*\n4. *Things there are not only pretty, but also convenient to buy.*",
          steps: [
            "Sentence 1 — merge ideas 1 & 2 using **如果…就…** + **STPV (跟妈妈一起去…)**: **明天是星期天，如果不下雨，我就跟妈妈一起去乌节路逛街。**",
            "Sentence 2 — merge ideas 3 & 4 using **因为** + **比…得多** + **不但…而且…**: **那里的商场不但比外面凉快得多，而且买东西非常方便。**",
          ],
          answer:
            "**明天是星期天，如果不下雨，我就跟妈妈一起去乌节路逛街。那里的商场不但比外面凉快得多，而且买东西非常方便。**",
          yourTurn: {
            question:
              "Combine using **因为…所以…** in STPV order: *'Because it rained yesterday, I watched films at home.'* (Use **因为昨天下雨**, **所以我在家看电影**.)",
            answer: {
              type: "text",
              accept: [
                "因为昨天下雨，所以我在家看电影",
                "因为昨天下雨了，所以我在家看电影",
                "因为昨天下雨，所以我昨天在家看电影",
                "Yīnwèi zuótiān xià yǔ, suǒyǐ wǒ zài jiā kàn diànyǐng",
                "Yīnwèi zuótiān xià yǔ le, suǒyǐ wǒ zài jiā kàn diànyǐng",
              ],
              display: "因为昨天下雨，所以我在家看电影。",
            },
            solution:
              "**因为昨天下雨** (cause) + **，所以** + **我** (S) + **在家** (P) + **看电影** (V) → **因为昨天下雨，所以我在家看电影。**",
          },
        },
      ],
      keyPoints: [
        "IGCSE 0547 awards top Language marks when a paragraph showcases **STPV + at least 3 distinct connector/comparison frames**.",
        "Keep **Choice Questions** (**还是**) separate from **Statement 'or'** (**或者**): **周末我看书或者听音乐** (statement) vs **你看书还是听音乐？** (question).",
        "Place adverbs (**也**, **都**, **常常**, **先**, **再**, **就**) **after the subject and before the verb/preposition**.",
        "Read your finished paragraph aloud: every clause should end cleanly on the predicate, never on a dangling place or time!",
      ],
      whyItWorks:
        "Chinese prose achieves rhythm through **four-beat and paired symmetry** (*对偶 duì'ǒu*). Pairing clauses with **因为…所以…**, **虽然…但是…**, and **不但…而且…** mirrors classical parallel style while making your argument crystal-clear to an examiner.",
      strategies: [
        "**The 3-Connector Quota**: Before submitting any IGCSE 80–130 character task, tick off at least **one comparison** (**比 / 没有 / 一样**) and **two paired connectors**.",
        "**Clause-End Audit**: Scan the last word before every **，** and **。** — if you spot **在学校** or **星期六** at the end, move it in front of the verb!",
      ],
      thinkDeeper:
        "Can you nest two connector pairs — for instance, putting **不但…而且…** *inside* the **因为** half of **因为…所以…**? Try crafting a natural sentence about Singapore's MRT!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is Mandarin's Golden Word Order (STPV)?",
        back: "**Subject + Time + (跟…一起) + (在 + Place) + Verb + Object** — e.g. **我星期六跟朋友一起在学校打篮球。**",
      },
      {
        front: "Where can Time go in a Mandarin sentence — and where can it NEVER go?",
        back: "Right **after the Subject** (**我今天…**) or **before the Subject** (**今天我…**) — **NEVER at the end** (*我去学校今天* ✗)!",
      },
      {
        front: "How do you say 'A is hotter than B' using 比?",
        back: "**A + 比 + B + 热** (e.g. **新加坡比北京热**). **NEVER** add **很** (*新加坡比北京很热* ✗)!",
      },
      {
        front: "How do you say 'much colder' and 'a bit cheaper' in a 比 sentence?",
        back: "Put **得多** or **一点儿** **AFTER** the adjective: **冷得多** (*lěng de duō*), **便宜一点儿** (*piányi yìdiǎnr*).",
      },
      {
        front: "How do you say 'A is not as [Adj] as B'?",
        back: "**A + 没有 + B + (那么) + Adjective** — e.g. **今天没有昨天那么热。**",
      },
      {
        front: "How do you say 'A is as [Adj] as B'?",
        back: "**A + 跟 / 和 + B + 一样 + Adjective** — e.g. **哥哥跟爸爸一样高。**",
      },
      {
        front: "因为 …，所以 … (*yīnwèi … suǒyǐ …*)",
        back: "**Because …, therefore …** — Mandarin keeps **BOTH** halves together!",
      },
      {
        front: "虽然 …，但是 / 可是 … (*suīrán … dànshì / kěshì …*)",
        back: "**Although …, (but) …** — never leave **虽然** without **但是** or **可是** in the second clause!",
      },
      {
        front: "Where does 就 (*jiù*) go in 如果 …，就 …?",
        back: "**AFTER** the second clause's subject and **BEFORE** its verb: **如果明天下雨，我们就不去。** (*NOT 就我们*!)",
      },
      {
        front: "When does Subject go BEFORE vs AFTER 不但 in 不但…而且…?",
        back: "**Same subject** → **Subject + 不但…** (**姐姐不但聪明，而且努力**); **two different subjects** → **不但 + Subj 1…，而且 + Subj 2…**.",
      },
      {
        front: "Subject + 一边 + Verb 1，一边 + Verb 2",
        back: "Doing two active actions **at the same time** — e.g. **我一边听音乐，一边跑步。**",
      },
      {
        front: "Subject + 先 + Verb 1，再 / 然后 + Verb 2",
        back: "**First** do Verb 1, **then** do Verb 2 — e.g. **我先做作业，再看电视。**",
      },
      {
        front: "Why is *我喜欢看书和我去图书馆* wrong?",
        back: "**和** (*hé*) ONLY joins **nouns/pronouns**, NEVER clauses or sentences!",
      },
      {
        front: "或者 (*huòzhě*) vs 还是 (*háishi*) — both mean 'or'!",
        back: "**或者** = 'or' in **statements** (**我喝茶或者咖啡**); **还是** = 'or' in **choice questions** (**你喝茶还是咖啡？**).",
      },
    ],
    mustKnow: [
      "Can you arrange Subject, Time, Companion (**跟…一起**), and Place (**在…**) in STPV order before the verb?",
      "Can you place transport phrases before **去** (e.g. **坐地铁去乌节路**)?",
      "Can you build a **比** comparison without accidentally inserting **很** or **非常**?",
      "Can you add **得多** (*much more*) and **一点儿** (*a little more*) after the adjective in a **比** sentence?",
      "Can you express negative and equal comparisons using **A 没有 B (那么) Adj** and **A 跟 B 一样 Adj**?",
      "Can you connect clauses using both halves of **因为…所以…** and **虽然…但是…**?",
      "Can you place **就** accurately after the second subject in **如果…，Subject + 就 + Verb**?",
      "Can you distinguish **一边…一边…** (simultaneous) from **先…再…** (sequential)?",
      "Can you choose **或者** for statements and **还是** for questions, and avoid joining clauses with **和**?",
    ],
    misconceptions: [
      {
        wrong: "Putting place and time at the end like English: *我打篮球在学校星期五。*",
        right: "Set the stage BEFORE the verb (STPV): **我星期五在学校打篮球。**",
      },
      {
        wrong: "Keeping **很** inside a **比** comparison: *新加坡比北京很热。*",
        right: "Drop **很**! Say **新加坡比北京热** (or **新加坡比北京热得多** for *much hotter*).",
      },
      {
        wrong: "Dropping **但是** after **虽然** because English forbids *'Although…, but…'*: *虽然中文很难，我喜欢中文。*",
        right: "Mandarin requires both bookends: **虽然中文很难，但是我很喜欢学中文。**",
      },
      {
        wrong: "Putting **就** before the subject: *如果明天晴天，就我们去海边。*",
        right: "**就** is an adverb and must follow the subject: **如果明天晴天，我们就去海边。**",
      },
      {
        wrong: "Joining two clauses with **和**: *妈妈做晚饭和爸爸洗碗。*",
        right: "**和** only joins nouns! Use a comma, **一边…一边…**, or **也**: **妈妈做晚饭，爸爸洗碗。**",
      },
      {
        wrong: "Putting **也** at the end of the sentence like English *'too'*: *我喜欢吃鸡饭也。*",
        right: "**也** always goes right before the verb/adjective: **我也喜欢吃鸡饭。**",
      },
    ],
    examMistakes: [
      "Writing **很** or **非常** before the adjective in **比** sentences — one of the most tested traps in IGCSE 0547 MCQ and gap-fill papers!",
      "Putting **一点儿** *before* the adjective (*比昨天一点儿冷* ✗) instead of *after* it (**比昨天冷一点儿** ✓; remember **有点儿冷** has no **比**!).",
      "Confusing **或者** (statements) and **还是** (questions), or adding **吗** onto the end of a **还是** choice question (*你想喝茶还是咖啡吗？* ✗).",
      "Forgetting **一起** or putting **跟朋友** after the verb (*我去电影院跟朋友* ✗ → **我跟朋友一起去电影院** ✓).",
      "Putting **先** before the subject (*先我做作业* ✗ → **我先做作业** ✓).",
      "Misplacing the subject in two-person **不但…而且…** sentences (*我不但去，而且弟弟也去* ✗ → **不但我去，而且弟弟也去** ✓).",
      "Reversing serial transport verbs (*我去圣淘沙坐公共汽车* ✗ → **我坐公共汽车去圣淘沙** ✓).",
    ],
    mnemonics: [
      {
        topic: "STPV Word Order",
        device: "**S**ome **T**igers **P**ractise **V**iolin (**S → T → P → V**)",
        explanation:
          "**S**ubject → **T**ime → **P**lace (with **跟…一起** right beside it) → **V**erb! Never let Place or Time sneak past the Violin!",
      },
      {
        topic: "No 很 with 比",
        device: "**比** (*bǐ*) and **很** (*hěn*) are **Allergic Rivals**",
        explanation:
          "The moment **比** walks into the room, **很** sneezes and leaves! Want 'much more'? Invite **得多** *after* the adjective instead.",
      },
      {
        topic: "Paired Connectors",
        device: "**Chopsticks Come in Pairs!** (**因为+所以**, **虽然+但是**, **不但+而且**)",
        explanation:
          "You can't pick up dumplings with one chopstick, and you shouldn't write **因为** or **虽然** without its partner chopstick in Clause 2!",
      },
      {
        topic: "Position of 就, 先, 再, 也",
        device: "**S-A-V Glue** (Subject → Adverb → Verb)",
        explanation:
          "Short one-syllable adverbs (**就**, **先**, **再**, **也**, **都**) glue themselves right between the **S**ubject and the **V**erb (**我们就去**, **我先吃**, **我也去**).",
      },
    ],
    realWorld: [
      {
        title: "Comparing Hawker Stalls vs Restaurants in Singapore",
        emoji: "🍛",
        detail:
          "Locals constantly use **比** and **不但…而且…** when recommending stalls at Maxwell or Tiong Bahru Hawker Centre: **这家海南鸡饭不但比餐厅便宜得多，而且更好吃！**",
      },
      {
        title: "Tropical Rain Contingency Plans (如果…就…)",
        emoji: "⛈️",
        detail:
          "Afternoon thunderstorms shape every outdoor plan in Singapore: **如果下午下大雨，我们就不去东海岸公园骑自行车，改去乌节路看电影。**",
      },
      {
        title: "MRT Directions in STPV & 先…再… Order",
        emoji: "🚇",
        detail:
          "Giving MRT interchange directions uses **先…再…** and serial verbs naturally: **你先坐绿线到政府大厦站，再换红线去乌节路。** (*First take the Green Line to City Hall, then transfer to the Red Line to Orchard.*)",
      },
      {
        title: "Climate Contrasts: Singapore vs Beijing & Harbin",
        emoji: "❄️",
        detail:
          "Year 8 students travelling in December experience dramatic **比** and **没有** contrasts: **哈尔滨的冬天比北京冷得多；新加坡一年四季都很热，没有冬天。**",
      },
      {
        title: "Multitasking Teens (一边…一边…)",
        emoji: "🎧",
        detail:
          "Parents across China and Singapore say the exact same sentence every evening: **别一边看手机，一边吃饭！** (*Don't look at your phone while eating!*)",
      },
    ],
    videos: [
      {
        title: "Chinese Word Order STPV (Subject + Time + Place + Verb) Explained",
        channel: "Grace Mandarin Chinese",
        url: "https://www.youtube.com/results?search_query=mandarin+chinese+word+order+time+place+verb+grace+mandarin",
      },
      {
        title: "How to Make Comparisons in Mandarin with 比 (bǐ) and 没有 (méiyǒu)",
        channel: "Chinese Zero to Hero",
        url: "https://www.youtube.com/results?search_query=chinese+comparisons+bi+meiyou+yiyang+grammar",
      },
      {
        title: "Essential Paired Conjunctions: 因为…所以, 虽然…但是, 不但…而且",
        channel: "Everyday Chinese",
        url: "https://www.youtube.com/results?search_query=mandarin+paired+conjunctions+yinwei+suoyi+suiran+danshi+budan+erqie",
      },
      {
        title: "Simultaneous & Sequential Actions: 一边…一边… and 先…再…",
        channel: "Yoyo Chinese",
        url: "https://www.youtube.com/results?search_query=chinese+grammar+yibian+yibian+xian+zai+ranhou",
      },
    ],
    formulas: [
      {
        name: "STPV Golden Word Order",
        formula: "Subject + Time + (跟 Person 一起) + (在 Place) + Verb + Object",
        note: "我星期六下午跟朋友一起在学校打篮球。 Wǒ xīngqīliù xiàwǔ gēn péngyou yìqǐ zài xuéxiào dǎ lánqiú.",
      },
      {
        name: "比 Comparison (+ Degree Gap)",
        formula: "A + 比 + B + Adjective (+ 得多 / 一点儿)  [NO 很!]",
        note: "新加坡比北京热得多。 Xīnjiāpō bǐ Běijīng rè de duō.",
      },
      {
        name: "Negative & Equal Comparisons",
        formula: "A + 没有 + B + (那么) + Adj  |  A + 跟 + B + 一样 + Adj",
        note: "今天没有昨天那么冷。 / 哥哥跟爸爸一样高。",
      },
      {
        name: "Cause & Concession Bookends",
        formula: "因为 + Cause，所以 + Result  |  虽然 + Fact，但是 + Contrast",
        note: "虽然汉字很难，但是很有意思。 Suīrán Hànzì hěn nán, dànshì hěn yǒu yìsi.",
      },
      {
        name: "Conditional Consequence",
        formula: "如果 / 要是 + Condition，Subject + 就 + Verb",
        note: "如果明天不下雨，我们就去东海岸公园。",
      },
      {
        name: "Addition & Simultaneous Actions",
        formula: "Subj + 不但…，而且…  |  Subj + 一边 + V1，一边 + V2",
        note: "这家餐厅的菜不但便宜，而且好吃。 / 我一边听音乐，一边跑步。",
      },
    ],
  },
};
