import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "hobbies",
  title: "爱好与运动 — Hobbies, Sports & Music",
  strand: "Term 2 · Hobbies & Leisure",
  icon: "🏀",
  summary:
    "Master Mandarin's physical-motion verbs for sports (打/踢/骑) and instruments (弹/拉/吹), express degrees of preference and interest (最喜欢, 对…感兴趣), distinguish 会 vs 能 vs 可以, and describe Singapore school CCAs.",
  intro:
    "In English, one single verb — **play** — does everything: you *play* basketball, *play* football, *play* the piano, *play* the violin, *play* chess, and *play* computer games! Mandarin thinks like a physicist instead: every sport and musical instrument chooses its verb according to **what part of your body moves and how**. Once you see the physical logic behind **打, 踢, 骑, 弹, 拉, 吹, 下**, and **玩**, you will sound ten times more natural talking about East Coast Park cycling, Tanglin CCAs (**课外活动**), or IGCSE 0547 leisure topics!",
  guide: [
    {
      id: "sports-verbs",
      heading: "Action verbs for sports: 打 (hand) vs 踢 (foot) vs 骑",
      discovery: {
        problem:
          "An English speaker looks up 'play' in a dictionary, finds **玩** (*wán*), and says *我周末喜欢玩篮球和玩足球*. Every Chinese listener bursts out laughing! Look at the left-hand radicals of **打** (*dǎ*) and **踢** (*tī*): what physical clue tells you which verb goes with **篮球** (basketball) and which goes with **足球** (football)?",
        idea:
          "**打** starts with **扌** (the hand radical) — you use it for ball or racket sports played with your **hands** (**打篮球**, **打网球**, **打羽毛球**)! **踢** starts with **足** (the foot radical) — you use it for sports kicked with your **feet** (**踢足球**)! Meanwhile **玩** (*wán*) only means 'mess around / play games or toys' (**玩电脑游戏**).",
      },
      body: `### The Golden Sport-Verb Matrix

Never use **玩** (*wán*) for sports! Group every sport by the physical action your body performs:

| Verb | Pinyin | Radical Clue | Sports Using This Verb |
|---|---|---|---|
| **打** | *dǎ* | **扌** (hand) — hit, throw, swing racket | **打篮球** (basketball), **打网球** (tennis), **打羽毛球** (badminton), **打乒乓球** (table tennis), **打排球** (volleyball), **打棒球** (baseball), **打太极拳** (Tai Chi) |
| **踢** | *tī* | **足** (foot) — kick | **踢足球** (*tī zúqiú*, football) |
| **骑** | *qí* | **马** (horse) — straddle & ride | **骑自行车** (*qí zìxíngchē*, cycle), **骑马** (*qímǎ*, horse-riding) |
| **滑** | *huá* | **氵** — glide smoothly | **滑冰** (*huábīng*, ice-skate), **滑雪** (*huáxuě*, ski) |
| *(Self-contained)* | — | Verb-object compounds | **游泳** (*yóuyǒng*, swim), **跑步** (*pǎobù*, run/jog), **爬山** (*páshān*, hike), **散步** (*sànbù*, stroll) |

### Separable Verb Alert: 游泳 & 跑步

**游泳** (swim) and **跑步** (run) are already **Verb + Object** pairs (**游** = swim + **泳** = a swim; **跑** = run + **步** = steps):
- Never add another verb like *做游泳* or *打跑步* — just say **我去游泳** (*Wǒ qù yóuyǒng*)!
- When adding a duration, slip the time *between* the two characters: **游了一个小时泳** (*swam for an hour*), **跑了半个小时步** (*jogged for half an hour*).`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification diagram of Mandarin sport verbs comparing da for hand sports, ti for football, qi for cycling and standalone verbs youyong and paobu">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">运动动词 · Why Mandarin Never Says &quot;玩篮球&quot;!</text>
  <rect x="22" y="48" width="192" height="190" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="118" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#c81e1e">打 dǎ (扌hand / racket)</text>
  <text x="118" y="98" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">打篮球 (basketball)</text>
  <text x="118" y="122" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">打羽毛球 (badminton)</text>
  <text x="118" y="146" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">打网球 (tennis)</text>
  <text x="118" y="170" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">打乒乓球 (table tennis)</text>
  <text x="118" y="194" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">打排球 (volleyball)</text>
  <text x="118" y="220" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#c81e1e">打太极拳 (Tai Chi)</text>
  <rect x="226" y="48" width="188" height="90" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="320" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">踢 tī (足 foot / kick)</text>
  <text x="320" y="100" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">踢足球 tī zúqiú</text>
  <text x="320" y="122" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">football (NEVER 打足球!)</text>
  <rect x="226" y="148" width="188" height="90" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="320" y="172" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0d9488">骑 qí (马 straddle)</text>
  <text x="320" y="198" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">骑自行车 (cycle)</text>
  <text x="320" y="220" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">骑马 (ride a horse)</text>
  <rect x="426" y="48" width="192" height="190" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="522" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#15803d">Standalone Verbs</text>
  <text x="522" y="100" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">游泳 yóuyǒng (swim)</text>
  <text x="522" y="126" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">跑步 pǎobù (run/jog)</text>
  <text x="522" y="152" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">滑冰 / 滑雪 (skate/ski)</text>
  <text x="522" y="178" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">爬山 páshān (hike)</text>
  <rect x="442" y="194" width="160" height="32" rx="6" fill="#ffffff" stroke="#15803d"/>
  <text x="522" y="214" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803d">STPV: 周末在公园骑车</text>
</svg>`,
      diagramCaption:
        "Match the sport to the body part in motion: 扌hand (打), 足 foot (踢), 马 straddle (骑), or standalone verb-object compounds.",
      workedExamples: [
        {
          title: "STPV + Sport Verbs in Singapore",
          problem:
            "Translate into Mandarin: 'On Sunday morning my family goes to East Coast Park to ride bicycles.'",
          steps: [
            "Time + Subject (or Subject + Time): **星期天早上我们一家人** (*Xīngqītiān zǎoshang wǒmen yìjiārén*).",
            "Destination + Purpose: **去东海岸公园** (*qù Dōnghǎi'àn Gōngyuán*).",
            "Cycling uses **骑** (*qí*, straddle), never 开 or 坐: **骑自行车** (*qí zìxíngchē*).",
          ],
          answer: "星期天早上我们一家人去东海岸公园骑自行车。",
          yourTurn: {
            question:
              "Translate into Mandarin: 'play badminton' (3 or 4 characters — choose the right action verb!).",
            answer: {
              type: "text",
              accept: ["打羽毛球", "打羽球", "dǎ yǔmáoqiú", "dǎ yǔqiú"],
              display: "打羽毛球 (dǎ yǔmáoqiú)",
            },
            solution:
              "Badminton is played with a racket in your hand, so use **打** (*dǎ*): **打羽毛球** (*dǎ yǔmáoqiú*).",
          },
        },
      ],
      keyPoints: [
        "**打** (*dǎ*) = all hand and racket ball sports (**打篮球, 打羽毛球, 打网球, 打乒乓球, 打排球**).",
        "**踢** (*tī*) = foot sports (**踢足球**); **骑** (*qí*) = straddling a bike or horse (**骑自行车, 骑马**).",
        "**游泳** (swim) and **跑步** (run) are complete verb-object pairs — never add 做 or 打 in front!",
        "Obey **STPV** word order: **我放学以后在学校体育馆打篮球** (Subject + Time + Place + Verb).",
      ],
      whyItWorks:
        "Classical and modern Chinese verbs encode **manner of action** rather than abstract game categories. Instead of an umbrella verb like English *play*, Mandarin preserves the concrete physical gesture — striking with the hand (**打**), kicking with the foot (**踢**), or straddling a mount (**骑**).",
      strategies: [
        "Hands-or-Feet Check: before naming any ball game, picture whether your hands or feet touch the ball/racket!",
        "Anti-玩 Shield: reserve 玩 strictly for 玩电脑游戏 / 玩手机 / 去圣淘沙玩.",
      ],
      thinkDeeper:
        "Look at the characters **乒** (*pīng*) and **乓** (*pāng*) in **乒乓球** (table tennis): both are built by removing one bottom stroke from **兵** (*bīng*, soldier) — left stroke missing vs right stroke missing! Why is that visual symmetry so clever for ping-pong?",
    },
    {
      id: "creative-music-hobbies",
      heading: "Music, arts & quiet hobbies: 弹钢琴, 画画, 看书",
      discovery: {
        problem:
          "Just like sports, Mandarin refuses to say *玩* for musical instruments! Look at these three phrases: **弹钢琴** (*tán gāngqín*, play the piano), **拉小提琴** (*lā xiǎotíqín*, play the violin), and **吹笛子** (*chuī dízi*, play the flute). Why do piano, violin, and flute require **three completely different verbs**?",
        idea:
          "Watch the musician's hands and mouth! **弹** (*tán*) is for **pressing keys or plucking strings** with your fingers (piano, guitar, guzheng). **拉** (*lā*, literally 'pull') is for **drawing a bow** across strings (violin, cello, erhu). **吹** (*chuī*, with **口** mouth radical) is for **blowing** wind instruments (flute, trumpet)!",
      },
      body: `### Musical Instruments: 弹 vs 拉 vs 吹

| Verb | Pinyin | Physical Motion | Instruments |
|---|---|---|---|
| **弹** | *tán* (2nd tone!) | Pluck strings or press keys | **弹钢琴** (piano), **弹吉他** (guitar), **弹古筝** (guzheng) |
| **拉** | *lā* (1st tone) | Pull/push a horsehair bow | **拉小提琴** (violin), **拉大提琴** (cello), **拉二胡** (erhu) |
| **吹** | *chuī* (1st tone) | Blow air with the mouth (**口**) | **吹笛子** (bamboo flute) |
| **打** | *dǎ* (3rd tone) | Strike percussion | **打鼓** (*dǎgǔ*, play the drums) |

> **Polyphone Alert on 乐:** In **音乐** (*yīnyuè*, music), **乐器** (*yuèqì*, musical instrument), and **华乐团** (*Huáyuètuán*, Chinese Orchestra), **乐** is pronounced **yuè** — whereas in **快乐** (*kuàilè*, happy) and **可乐** (*kělè*, cola) it is **lè**!

### Creative, Cultural & Quiet Hobbies

- **唱歌** (*chànggē*) — sing songs · **跳舞** (*tiàowǔ*) — dance · **听音乐** (*tīng yīnyuè*) — listen to music
- **画画** (*huàhuà*) — draw / paint · **写书法** (*xiě shūfǎ*) — practise calligraphy
- **看书 / 阅读** (*kànshū / yuèdú*) — read books · **拍照** (*pāizhào*) — take photos
- **做饭** (*zuòfàn*) — cook · **下棋** (*xiàqí*) — play chess (**下** = place pieces down on a board!)
- **玩电脑游戏** (*wán diànnǎo yóuxì*) — play computer games (here **玩** IS right!)

### Doing Two Hobbies at Once: 一边…一边…

When two ongoing actions happen simultaneously, link them with **一边 + Verb 1，一边 + Verb 2**:
- **我喜欢一边听音乐，一边画画。** (*Wǒ xǐhuan yìbiān tīng yīnyuè, yìbiān huàhuà.* — I like painting while listening to music.)`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Musical instrument and creative hobby verb chart comparing tan for piano and guitar, la for violin and erhu, chui for flute, xia for chess and wan for computer games">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">乐器与文艺动词 · Instrument &amp; Hobby Verb Map</text>
  <rect x="24" y="50" width="186" height="106" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="117" y="74" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0d9488">弹 tán (keys / pluck)</text>
  <text x="117" y="102" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">弹钢琴 (piano)</text>
  <text x="117" y="124" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">弹吉他 (guitar)</text>
  <text x="117" y="144" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">弹古筝 (guzheng)</text>
  <rect x="227" y="50" width="186" height="106" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="320" y="74" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">拉 lā (pull bow)</text>
  <text x="320" y="102" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">拉小提琴 (violin)</text>
  <text x="320" y="124" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">拉二胡 (erhu)</text>
  <text x="320" y="144" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">拉大提琴 (cello)</text>
  <rect x="430" y="50" width="186" height="106" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="523" y="74" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#c81e1e">吹 chuī (blow air)</text>
  <text x="523" y="102" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">吹笛子 (flute)</text>
  <text x="523" y="128" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#c81e1e">口 mouth radical!</text>
  <rect x="24" y="170" width="592" height="66" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="320" y="193" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">Quiet &amp; Creative Collocations:</text>
  <text x="320" y="218" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">画画 (paint) · 看书 (read) · 拍照 (photos) · 下棋 (chess) · 玩电脑游戏 (games)</text>
</svg>`,
      diagramCaption:
        "Choose 弹 for keys/plucked strings, 拉 for bowed strings, 吹 for wind instruments, 下 for board games, and 玩 for video games.",
      workedExamples: [
        {
          title: "Contrasting two instruments in the family",
          problem:
            "Translate into Mandarin: 'My older sister likes playing the piano, and my younger brother likes playing the violin.'",
          steps: [
            "Piano uses **弹** (*tán*): **姐姐喜欢弹钢琴** (*Jiějie xǐhuan tán gāngqín*).",
            "Violin is bowed, so it MUST use **拉** (*lā*): **弟弟喜欢拉小提琴** (*dìdi xǐhuan lā xiǎotíqín*).",
            "Remember NEVER to join two full clauses with 和 — use a comma instead!",
          ],
          answer: "姐姐喜欢弹钢琴，弟弟喜欢拉小提琴。",
          yourTurn: {
            question:
              "Translate into Mandarin: 'play the violin' (4 characters — pick the bowed-string verb!).",
            answer: {
              type: "text",
              accept: ["拉小提琴", "lā xiǎotíqín"],
              display: "拉小提琴 (lā xiǎotíqín)",
            },
            solution:
              "A violin is played by pulling a bow across strings, so use **拉** (*lā*): **拉小提琴** (*lā xiǎotíqín*).",
          },
        },
      ],
      keyPoints: [
        "**弹** (*tán*) = piano & guitar (**弹钢琴, 弹吉他**); **拉** (*lā*) = violin & erhu (**拉小提琴, 拉二胡**); **吹** (*chuī*) = flute (**吹笛子**).",
        "Chess and board games take **下** (**下棋**, *xiàqí*), while computer/phone games take **玩** (**玩电脑游戏**).",
        "**爱好** (*àihào*, hobby) has 4th-tone **hào**; **音乐** (*yīnyuè*, music) has **yuè**.",
        "Use **一边…一边…** to describe two simultaneous leisure actions (**一边听音乐，一边看书**).",
      ],
      whyItWorks:
        "Notice the shared bottom component **琴** (*qín*) in **钢琴** (steel-*qín* = piano), **小提琴** (small-handheld-*qín* = violin), and **古筝/古琴**: in ancient China, **琴** represented stringed zithers with two jade kings (**王王**) symbolising stretched strings over a soundboard!",
      strategies: [
        "Finger-vs-Bow Test: if fingers strike keys or pluck strings → 弹; if a hand pulls a bow → 拉.",
        "No-Clause-和 Rule: when listing two people's hobbies as full sentences, separate with a comma or 也, NEVER 和!",
      ],
      thinkDeeper:
        "Why does Mandarin call photography **拍照** (*pāizhào*, literally 'slap/tap a reflection') while reading silently is **看书** (*kànshū*, 'look at a book')?",
    },
    {
      id: "likes-degrees",
      heading: "Expressing preferences: 喜欢, 最喜欢, 感兴趣",
      discovery: {
        problem:
          "Compare English and Mandarin word order for expressing interest:\n- English: 'I am very interested **in Chinese music**.'\n- Mandarin: **我对中国音乐很感兴趣。**\nWhere did 'in Chinese music' move, and where did 'very' (**很**) land?",
        idea:
          "Mandarin prepositional phrases (**对中国音乐**, 'towards Chinese music') ALWAYS jump **BEFORE** the verb/adjective predicate! And degree adverbs (**很 / 非常 / 不**) sit directly in front of **感兴趣**: **Subject + 对 + Topic + 很/非常/不 + 感兴趣**!",
      },
      body: `### The Preference Thermometer (喜好程度)

Ask about hobbies with:
- **你的爱好是什么？** (*Nǐ de àihào shì shénme?*) — What is your hobby?
- **你空的时候喜欢做什么？** (*Nǐ kòng de shíhou xǐhuan zuò shénme?*) — What do you like doing in your free time?

From strongest love down to strong dislike:

| Mandarin | Pinyin | Meaning | Grammar Tip |
|---|---|---|---|
| **最喜欢** | *zuì xǐhuan* | like best / favourite | NEVER say *很最喜欢*! |
| **非常喜欢** | *fēicháng xǐhuan* | really / extremely like | Stronger than 很 |
| **很喜欢** | *hěn xǐhuan* | like very much | Standard positive statement |
| **喜欢** | *xǐhuan* | like | Neutral |
| **不太喜欢** | *bú tài xǐhuan* | don't really like | Polite, softened negative (*bú tài*) |
| **不喜欢** | *bù xǐhuan* | don't like | Direct negative |
| **讨厌** | *tǎoyàn* | dislike / hate | Strong negative (**最讨厌** = hate most) |

### Upgrading to IGCSE Grade A*: 对…感兴趣

Instead of repeating **我喜欢…** five times in an essay, swap in the golden **对…感兴趣** (*duì … gǎn xìngqù*) frame:
- **我对摄影很感兴趣。** (*Wǒ duì shèyǐng hěn gǎn xìngqù.* — I am very interested in photography.)
- **弟弟对画画不感兴趣，他对踢足球感兴趣。** (*My little brother isn't interested in drawing; he's interested in football.*)

### Giving Rich Reasons (为什么？因为…)

Always justify your preferences with **因为** (*yīnwèi*):
- **因为很有意思 / 很好玩** — because it is very interesting / fun
- **因为对身体好 / 很健康** — because it is good for your health
- **因为可以放松心情** — because it helps me relax
- **因为可以交很多新朋友** — because I can make lots of new friends`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Preference scale from zui xihuan down to taoyan alongside the dui something hen gan xingqu sentence frame">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">喜好温度计与句型 · Preference Scale &amp; 对…感兴趣 Frame</text>
  <rect x="24" y="48" width="224" height="188" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="38" y="60" width="196" height="30" rx="6" fill="#dcfce7" stroke="#15803d"/>
  <text x="136" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">★★★ 最喜欢 zuì xǐhuan</text>
  <rect x="38" y="98" width="196" height="30" rx="6" fill="#e0f2fe" stroke="#0d9488"/>
  <text x="136" y="118" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0d9488">★★ 非常 / 很喜欢</text>
  <rect x="38" y="136" width="196" height="30" rx="6" fill="#fef3c7" stroke="#b45309"/>
  <text x="136" y="156" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#b45309">☆ 不太喜欢 bú tài xǐhuan</text>
  <rect x="38" y="174" width="196" height="30" rx="6" fill="#fee2e2" stroke="#c81e1e"/>
  <text x="136" y="194" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c81e1e">✗ 讨厌 tǎoyàn (dislike)</text>
  <text x="136" y="224" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Trap: NEVER say 很最喜欢!</text>
  <rect x="266" y="48" width="350" height="106" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="441" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0d9488">High-Scoring Interest Formula:</text>
  <text x="441" y="98" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">Subject + 对 + Hobby + (很/不) + 感兴趣</text>
  <rect x="284" y="110" width="314" height="32" rx="6" fill="#ffffff" stroke="#0d9488"/>
  <text x="441" y="131" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">我对中国书法很感兴趣。(interested in calligraphy)</text>
  <rect x="266" y="164" width="350" height="72" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="441" y="188" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">Top Reasons (因为…):</text>
  <text x="441" y="214" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">很有意思 · 对身体好 · 可以放松 · 可以交新朋友</text>
</svg>`,
      diagramCaption:
        "Vary your preference verbs from 最喜欢 down to 讨厌, and showcase the pre-verbal 对 + Topic + 很感兴趣 frame.",
      workedExamples: [
        {
          title: "Expressing interest + a two-part reason",
          problem:
            "Translate into Mandarin: 'I am very interested in swimming because it is not only cool, but also good for my health.'",
          steps: [
            "Interest frame: **我对游泳很感兴趣** (*Wǒ duì yóuyǒng hěn gǎn xìngqù*).",
            "Reason with **因为** + **不但…而且…**: **因为游泳不但很凉快，而且对身体好。**",
          ],
          answer: "我对游泳很感兴趣，因为游泳不但很凉快，而且对身体好。",
          yourTurn: {
            question:
              "Translate into Mandarin: 'I am very interested in music.' (Use **对…感兴趣**!)",
            answer: {
              type: "text",
              accept: [
                "我对音乐很感兴趣",
                "我对音乐非常感兴趣",
                "Wǒ duì yīnyuè hěn gǎn xìngqù",
                "Wǒ duì yīnyuè fēicháng gǎn xìngqù",
              ],
              display: "我对音乐很感兴趣。 (Wǒ duì yīnyuè hěn gǎn xìngqù.)",
            },
            solution:
              "Put **对音乐** before the verb phrase and **很** right before **感兴趣**: **我对音乐很感兴趣。**",
          },
        },
      ],
      keyPoints: [
        "To say 'my favourite sport is…', use **我最喜欢的运动是…** (*Wǒ zuì xǐhuan de yùndòng shì…*) or **我最喜欢…**.",
        "Never combine **很** and **最** (*很最喜欢* ✗).",
        "**A + 对 + B + (很 / 非常 / 不) + 感兴趣** puts the topic BEFORE **感兴趣**; negate with **不感兴趣**.",
        "Contrast **有意思** (interesting) with its negative **没意思** (boring — uses **没**, never *不意思*!).",
      ],
      whyItWorks:
        "In Mandarin, prepositional coverbs like **对** ('towards/facing'), **在** ('at'), and **跟** ('with') evolved from serial verbs ('face X and feel interest'). That historical origin explains why **对 + X** must always come *before* the main feeling **感兴趣**!",
      strategies: [
        "Synonym rotation: in one paragraph, use 最喜欢 once, 非常喜欢 once, and 对…很感兴趣 once to win full vocabulary-range marks.",
        "Reason pair: always attach a 因为 clause (对身体好 / 可以放松) whenever you state a favourite hobby.",
      ],
      thinkDeeper:
        "Compare **我对篮球不感兴趣** and **我对篮球没兴趣**: why does **感兴趣** negate with **不**, whereas **有兴趣** negates with **没**?",
    },
    {
      id: "ability-hui-neng",
      heading: "Ability & permission: 会 (learned skill) vs 能 vs 可以",
      discovery: {
        problem:
          "English uses the single word **can** in all three of these sentences:\n1. 'I **can** swim.' (I learned how to swim.)\n2. 'My leg hurts today, so I **can't** swim.' (Circumstances stop me today.)\n3. '**Can** I take photos inside this museum?' (Asking permission.)\nWhy must Mandarin use **three different modal verbs** — **会**, **能**, and **可以** — for those three 'cans'?",
        idea:
          "Mandarin separates *know-how* from *circumstance* and *permission*! **会** (*huì*) = a skill stored in your brain/muscles through learning (**我会游泳**). **能** (*néng*) = physical capability or whether today's situation allows it (**今天腿疼，不能游泳**). **可以** (*kěyǐ*) = rules and permission (**这里可以拍照吗？**)!",
      },
      body: `### Cracking the Three 'Cans': 会 vs 能 vs 可以

| Modal | Pinyin | Core Meaning | Negative | Classic Example |
|---|---|---|---|---|
| **会** | *huì* | **Learned skill** (know how to) | **不会** (*bú huì*) | **我会弹钢琴，不会拉小提琴。** (I know how to play piano, not violin.) |
| **能** | *néng* | **Capability / Circumstance** (able to) | **不能** (*bù néng*) | **下雨了，我们不能去踢足球。** (It's raining, so we can't go play football.) |
| **可以** | *kěyǐ* | **Permission / Possibility** (allowed to) | **不可以 / 不能** | **老师，这里可以拍照吗？** (Teacher, may I take photos here?) |

> **Aha! Check:** Imagine Olympic swimmer Joseph Schooling has a fever today. Does he say *我今天不会游泳*? **NO!** He still *knows how* to swim (**他会游泳**); he just **不能去游泳** today because he is ill!

### Saying How Well Someone Plays: Verb + 得 (*de*) + Adjective

To describe *how well* someone performs a sport or hobby, use neutral-tone **得** (*de*) after the verb!

- **No object:** **弟弟跑得很快。** (*Dìdi pǎo de hěn kuài.* — Little brother runs very fast.)
- **With an object (like 打篮球 or 弹钢琴):** **得** MUST hug the verb directly — never put **得** after the noun (*打篮球得很好* ✗)! Use either:
  1. **Repeat the verb:** **姐姐弹钢琴弹得非常好。**
  2. **Front the object:** **姐姐钢琴弹得非常好。**`,
      diagram: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision tree for Mandarin modal verbs hui for learned skills, neng for circumstance or capability, and keyi for permission, plus the de degree complement rule">
  <rect x="8" y="8" width="624" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">三个“Can”与程度补语 · 会 vs 能 vs 可以 + 得 (de)</text>
  <rect x="22" y="48" width="190" height="106" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="117" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#15803d">会 huì (Learned Skill)</text>
  <text x="117" y="96" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">Did you have to LEARN it?</text>
  <text x="117" y="118" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">我会游泳 / 我会弹吉他</text>
  <text x="117" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Neg: 不会 bú huì</text>
  <rect x="225" y="48" width="190" height="106" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
  <text x="320" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#b45309">能 néng (Circumstance)</text>
  <text x="320" y="96" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">Does time/health allow it?</text>
  <text x="320" y="118" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">今天下雨，不能踢球</text>
  <text x="320" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Neg: 不能 bù néng</text>
  <rect x="428" y="48" width="190" height="106" rx="12" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/>
  <text x="523" y="72" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0d9488">可以 kěyǐ (Permission)</text>
  <text x="523" y="96" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">Is it allowed by rules?</text>
  <text x="523" y="118" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">这里可以拍照吗？</text>
  <text x="523" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Neg: 不可以 bù kěyǐ</text>
  <rect x="22" y="168" width="596" height="68" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>
  <text x="320" y="191" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">Degree Complement Rule (Verb + 得 de + Adjective):</text>
  <text x="320" y="217" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">✗ 他打篮球得很好   →   ✓ 他打篮球打得很好  /  ✓ 他篮球打得很好</text>
</svg>`,
      diagramCaption:
        "Pick 会 for learned know-how, 能 for situational ability, 可以 for permission, and attach 得 (de) directly to the verb.",
      workedExamples: [
        {
          title: "Combining 会, 不能, and a 得 complement",
          problem:
            "Translate into Mandarin: 'Xiaoming can play basketball, and he plays very well, but today he has a fever so he cannot go.'",
          steps: [
            "Learned skill uses **会**: **小明会打篮球** (*Xiǎomíng huì dǎ lánqiú*).",
            "'Plays very well' fronts the object or repeats the verb before **得**: **而且打得很好** (*érqiě dǎ de hěn hǎo*).",
            "Circumstance ('has a fever today so cannot go') uses **不能**: **但是今天他发烧了，不能去。**",
          ],
          answer: "小明会打篮球，而且打得很好，但是今天他发烧了，不能去。",
          yourTurn: {
            question:
              "Translate into Mandarin: 'I know how to swim.' (Use the learned-skill modal!)",
            answer: {
              type: "text",
              accept: ["我会游泳", "Wǒ huì yóuyǒng"],
              display: "我会游泳。 (Wǒ huì yóuyǒng.)",
            },
            solution:
              "Swimming is a learned skill, so use **会** (*huì*): **我会游泳** (*Wǒ huì yóuyǒng*).",
          },
        },
      ],
      keyPoints: [
        "**会** (*huì*) = learned skill (**我会游泳、会弹吉他、会说中文**); negative **不会**.",
        "**能** (*néng*) = physical ability or whether circumstances allow (**今天功课太多，不能去打球**).",
        "**可以** (*kěyǐ*) = asking/granting permission (**可以进去吗？** — No: **不可以！**).",
        "**得** (*de*) must follow a **verb**, never an object noun: say **他篮球打得很好** or **他打篮球打得很好**.",
      ],
      whyItWorks:
        "Mandarin verbs can only hold **one right-hand attachment** at a time — either an object (**篮球**) OR a complement (**得很好**), never both side-by-side! Repeating the verb (**打篮球 + 打得很好**) or moving **篮球** in front gives **得** direct contact with **打**.",
      strategies: [
        "Joseph Schooling Test: ask 'Did they forget the skill, or does today's situation block them?' Skill = 会/不会; situation = 能/不能!",
        "Verb-Echo Trick: whenever you want to say someone plays [X] well, echo the verb: 弹钢琴弹得好, 踢足球踢得好, 唱歌儿唱得好.",
      ],
      thinkDeeper:
        "Remember from the Illness topic that **得** can also be read *děi* ('must')! Read this playful sentence aloud with the right tones: **要想篮球打得好，你得每天练习！** Which **得** is *de* and which is *děi*?",
    },
    {
      id: "cca-hobby-profile",
      heading: "Talking about Singapore CCAs & club life",
      discovery: {
        problem:
          "How do you say 'I have been learning the piano for five years' in Mandarin? Notice what happens if you try to put the object after the duration: compare **我学了五年钢琴** vs *我学钢琴五年* — where does the duration **五年** sit, and what does a second **了** at the very end (**我学了五年钢琴了**) add?",
        idea:
          "Duration phrases (**五年** five years, **一个小时** one hour) sit right after **Verb + 了** and BEFORE the noun object: **学了五年钢琴**! Adding a **double 了** at the end (**我学了五年钢琴了**) tells the listener *'…and I am STILL learning it today!'* — pure gold for describing your school CCAs!",
      },
      body: `### Describing Singapore School CCAs (**课外活动** *kèwài huódòng*)

At Tanglin Trust School and across Singapore, **CCAs** (**课外活动**) are a central part of school life — from varsity squads (**校队**, *xiàoduì*) like **羽毛球队** (badminton team) and **游泳队** (swimming squad) to **管弦乐队** (orchestra), **华乐团** (Chinese orchestra), **戏剧社** (drama club), and **摄影俱乐部** (photography club).

### Key CCA Sentence Building Blocks

1. **Joining a CCA (参加):**
   - **今年我参加了学校的羽毛球队和音乐俱乐部。**
   - (*This year I joined the school's badminton team and music club.*)
2. **When, Where & With Whom You Practise (STPV + 跟…一起):**
   - **每个星期二和星期四放学以后，我跟队友一起在体育馆练习两个小时。**
   - (*Every Tuesday and Thursday after school, I practise for two hours in the sports hall with my teammates.*)
3. **How Long You Have Learned It (Double 了 Duration):**
   - **我从八岁开始学打网球，已经学了五年了。**
   - (*I started learning tennis at age eight and have already been learning for five years.*)
4. **Matches & Benefits (比赛与收获):**
   - **上个月我们参加了一场校际比赛，还赢了第一名！参加课外活动不但能锻炼身体，而且让我交了很多好朋友。**`,
      workedExamples: [
        {
          title: "Writing a rich CCA sentence with STPV + Duration",
          problem:
            "Translate into Mandarin: 'Every Wednesday afternoon after school, I practise basketball with my friends in the sports hall for one hour.'",
          steps: [
            "Time first: **每个星期三下午放学以后** (*Měi gè xīngqīsān xiàwǔ fàngxué yǐhòu*).",
            "Subject + With-phrase + Place (all BEFORE the verb!): **我跟朋友一起在体育馆** (*wǒ gēn péngyou yìqǐ zài tǐyùguǎn*).",
            "Verb + Duration + Object: **练习一个小时篮球。** (*liànxí yí gè xiǎoshí lánqiú.*)",
          ],
          answer: "每个星期三下午放学以后，我跟朋友一起在体育馆练习一个小时篮球。",
          yourTurn: {
            question:
              "What is the four-character Mandarin term for **co-curricular activities (CCAs)**?",
            answer: {
              type: "text",
              accept: ["课外活动", "kèwài huódòng"],
              display: "课外活动 (kèwài huódòng)",
            },
            solution:
              "**课外** (*kèwài*, outside lessons) + **活动** (*huódòng*, activities) → **课外活动** (*kèwài huódòng*).",
          },
        },
      ],
      keyPoints: [
        "**参加课外活动** (*cānjiā kèwài huódòng*) = take part in CCAs; **参加比赛** = enter a competition/match (**一场比赛**).",
        "Keep **Time → 跟…一起 → 在 + Place** BEFORE the main verb (**放学以后我跟朋友一起在运动场踢足球**).",
        "Use **从…开始学** ('started learning from [age/year]') + **已经学了 [X] 年了** ('have already been learning for X years').",
        "Connect benefits with **不但…而且…**: **不但能锻炼身体 / 放松心情，而且可以交很多新朋友**.",
      ],
      whyItWorks:
        "Mandarin distinguishes strictly between **when** an action happens (point-in-time BEFORE the verb: **四点练习**) and **how long** an action lasts (duration AFTER the verb: **练习一个小时**). Keeping those two slots separate makes even 25-character sentences crystal clear!",
      strategies: [
        "5-W CCA Blueprint: hit What club (参加) → When & Where (星期几在体育馆) → With whom (跟队友一起) → How long (学了几年了) → Why you love it (不但…而且…).",
        "Double-了 Polish: drop 已经学了三年了 into any IGCSE oral or essay on hobbies for instant grammatical sophistication.",
      ],
      thinkDeeper:
        "Compare **我学了三年钢琴** (one 了) and **我学了三年钢琴了** (two 了s): which one could describe someone who learned piano in primary school and quit, and which one guarantees they STILL play today?",
    },
  ],
  learn: {
    flashcards: [
      { front: "打篮球 / 打羽毛球 / 打网球", back: "play basketball / badminton / tennis (hand & racket sports use 打 dǎ!)" },
      { front: "踢足球 (tī zúqiú)", back: "play football (foot sport uses 踢 tī — never *打足球* or *玩足球*!)" },
      { front: "骑自行车 (qí zìxíngchē)", back: "ride a bicycle / go cycling (straddling uses 骑 qí)" },
      { front: "游泳 & 跑步 (yóuyǒng & pǎobù)", back: "swim & run/jog (separable verb-object compounds: 游了一个小时泳)" },
      { front: "弹钢琴 / 弹吉他 (tán gāngqín / tán jítā)", back: "play the piano / guitar (keys & plucked strings use 弹 tán)" },
      { front: "拉小提琴 / 拉二胡 (lā xiǎotíqín / lā èrhú)", back: "play the violin / erhu (bowed strings use 拉 lā!)" },
      { front: "吹笛子 (chuī dízi)", back: "play the flute (wind instruments use 吹 chuī)" },
      { front: "下棋 vs 玩电脑游戏", back: "play chess (xiàqí) vs play computer games (wán diànnǎo yóuxì)" },
      { front: "爱好 (àihào) & 音乐 (yīnyuè)", back: "hobby (4th tone hào!) & music (yuè, not lè!)" },
      { front: "对…感兴趣 (duì … gǎn xìngqù)", back: "to be interested in… (我对画画很感兴趣)" },
      { front: "有意思 vs 没意思", back: "interesting/fun (yǒu yìsi) vs boring (méi yìsi — negated with 没!)" },
      { front: "会 vs 能 vs 可以 (huì / néng / kěyǐ)", back: "learned skill (会) vs capability/circumstance (能) vs permission (可以)" },
      { front: "他篮球打得很好", back: "He plays basketball very well (Verb + 得 de + Adj — never *打篮球得很好*!)" },
      { front: "课外活动 (kèwài huódòng)", back: "co-curricular activities (CCAs) — 参加学校的课外活动" },
    ],
    mustKnow: [
      "Can you choose the exact verb (打, 踢, 骑, 滑) for every ball, racket, and outdoor sport without ever saying *玩篮球*?",
      "Can you match musical instruments and board games to their physical verbs (弹钢琴/吉他, 拉小提琴/二胡, 吹笛子, 下棋)?",
      "Can you express a full spectrum of preferences from 最喜欢 and 非常喜欢 down to 不太喜欢 and 讨厌?",
      "Can you build sentences with A + 对 + B + (很/非常/不) + 感兴趣?",
      "Can you justify hobbies with reasons like 很有意思, 对身体好, 可以放松心情, and 可以交新朋友?",
      "Can you distinguish 会 (learned skill), 能 (circumstance/ability), and 可以 (permission) accurately?",
      "Can you describe how well someone performs a sport or hobby using Verb + 得 (de) + Adjective?",
      "Can you combine two simultaneous hobbies with 一边…一边…?",
      "Can you write an 80–130 character profile of your Singapore school CCAs (课外活动), including how long you have practised (已经学了…年了)?",
    ],
    misconceptions: [
      {
        wrong: "我放学以后喜欢玩篮球和玩钢琴。(Using English 'play' = 玩 for sports and musical instruments.)",
        right: "我放学以后喜欢打篮球和弹钢琴。(Use 打/踢 for ball sports and 弹/拉/吹 for instruments; 玩 is for 玩电脑游戏!)",
      },
      {
        wrong: "弟弟会弹小提琴。(Using 弹 for a violin.)",
        right: "弟弟会拉小提琴。(A violin is played by pulling a bow, so it ALWAYS takes 拉 lā; 弹 is for piano and guitar!)",
      },
      {
        wrong: "我很最喜欢游泳。(Stacking 很 and 最 together.)",
        right: "我最喜欢游泳。(最 'most' is already a superlative — never add 很 in front of 最!)",
      },
      {
        wrong: "我感兴趣对中国音乐。(Putting 对中国音乐 after 感兴趣 like English 'interested in…'.)",
        right: "我对中国音乐很感兴趣。(Prepositional 对 + Topic MUST come BEFORE 感兴趣!)",
      },
      {
        wrong: "我今天发烧了，所以不会去游泳。(Using 不会 when an illness stops you going today.)",
        right: "我今天发烧了，所以不能去游泳。(不会游泳 means you never learned how to swim; circumstantial 'can't go today' is 不能!)",
      },
      {
        wrong: "姐姐弹钢琴得非常好。(Putting 得 de right after the noun 钢琴.)",
        right: "姐姐弹钢琴弹得非常好 / 姐姐钢琴弹得非常好。(Degree particle 得 must follow a VERB, never an object noun!)",
      },
    ],
    examMistakes: [
      "Misreading polyphones in oral exams: reading 爱好 as *àihǎo* instead of **àihào** (4th tone!), or 音乐/乐器 as *yīnlè/lèqì* instead of **yīnyuè/yuèqì**.",
      "Putting place or time at the end of sport sentences (*我打羽毛球在体育馆星期六* ✗ → **我星期六在体育馆打羽毛球** ✓).",
      "Joining two clauses with 和 (*姐姐喜欢画画，和哥哥喜欢踢足球* ✗ — delete 和 or use 哥哥喜欢踢足球 after a comma!).",
      "Negating 有意思 ('interesting') as *不有意思* or *不意思* instead of **没意思** ('boring').",
      "Forgetting the classifier 场 (chǎng) for sports matches: write **一场足球比赛**, not *一个足球比赛*.",
      "Writing duration before the verb (*我一个小时跑步* ✗) instead of after the verb (**我跑了一个小时步** ✓).",
      "Confusing 踢足球 (football) with 打排球 (volleyball) or 打棒球 (baseball) under exam time pressure — check the 足 foot radical in 踢足球!",
    ],
    mnemonics: [
      {
        topic: "打 (dǎ) vs 踢 (tī) for Ball Sports",
        device: "扌(hand) in 打 = hands/rackets (basketball, tennis, badminton); 足 (foot) in 踢 = feet (踢足球)!",
        explanation:
          "The left-hand radical literally draws the body part touching the ball or racket.",
      },
      {
        topic: "弹 (tán) vs 拉 (lā) vs 吹 (chuī) for Instruments",
        device: "Tap/pluck keys = 弹 (piano/guitar); Pull a long bow = 拉 (violin/erhu); Mouth 口 blows = 吹 (flute)!",
        explanation:
          "Mime playing the instrument for half a second in an exam and your hands/mouth will tell you the exact Mandarin verb!",
      },
      {
        topic: "乒 (pīng) & 乓 (pāng) in 乒乓球",
        device: "A ping-pong table (丘) with the ball bouncing left (丿) on 乒 and right (丶) on 乓 — sounding just like 'ping-pong'!",
        explanation:
          "One of modern Chinese's most playful visual + onomatopoeic character pairs.",
      },
      {
        topic: "The Joseph Schooling Rule: 会 vs 能 vs 可以",
        device: "Brain skill = 会; Body/schedule today = 能; Boss/teacher's rules = 可以!",
        explanation:
          "Three quick B-words (Brain, Body/schedule, Boss) separate every English 'can' cleanly.",
      },
    ],
    realWorld: [
      {
        title: "Singapore School CCAs (课外活动) & Chinese Orchestra (华乐团)",
        detail:
          "Every secondary student in Singapore joins a CCA — from badminton, rugby, and swimming squads to Symphonic Band and Chinese Orchestra (华乐团), where students learn traditional instruments like 拉二胡 (erhu), 弹古筝 (guzheng), and 吹笛子 (bamboo flute)!",
        emoji: "🎶",
      },
      {
        title: "Weekend Cycling at East Coast Park (东海岸公园骑自行车)",
        detail:
          "Renting bicycles and rollerblades along the 15 km seafront path at East Coast Park (东海岸公园) — followed by satay and coconut water — is one of Singapore families' favourite weekend sports.",
        emoji: "🚲",
      },
      {
        title: "Badminton & Table Tennis Powerhouses (羽毛球与国球乒乓球)",
        detail:
          "Badminton (羽毛球 — remember Singapore world champion Loh Kean Yew 骆建佑!) fills community-club sports halls (民众俱乐部体育馆) across Singapore every evening, while table tennis (乒乓球) is celebrated in China as the 国球 ('national ball game').",
        emoji: "🏸",
      },
      {
        title: "Void-Deck Chinese Chess (组屋楼下下象棋)",
        detail:
          "Walk underneath HDB blocks in Chinatown or Toa Payoh and you will spot uncles gathered round stone tables playing Chinese chess (下中国象棋) — using stone-carved pieces stamped with characters like 马 (horse), 车 (chariot), and 炮 (cannon)!",
        emoji: "♟️",
      },
      {
        title: "Winter Sports Boom in China (滑冰与滑雪)",
        detail:
          "Since Beijing hosted the 2022 Winter Olympics (冬奥会), millions of teenagers across China — and Singaporean families travelling to Hokkaido or northern China in December — have taken up ice-skating (滑冰) and skiing (滑雪).",
        emoji: "⛷️",
      },
    ],
    videos: [
      {
        title: "Sports & Hobbies in Mandarin Chinese — 打 vs 踢 vs 弹 vs 拉",
        channel: "Everyday Chinese",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+sports+and+hobbies+da+ti+tan+la",
      },
      {
        title: "Difference Between 会, 能, and 可以 in Mandarin Grammar",
        channel: "Grace Mandarin Chinese",
        url: "https://www.youtube.com/results?search_query=Grace+Mandarin+Chinese+hui+neng+keyi+difference",
      },
      {
        title: "How to Use 得 (Complement of Degree: 打得很好) in Chinese",
        channel: "Chinese Zero to Hero",
        url: "https://www.youtube.com/results?search_query=Chinese+Zero+to+Hero+complement+of+degree+de",
      },
      {
        title: "IGCSE Chinese 0547 Hobbies, Sports & School CCAs Speaking Prep",
        channel: "Mandarin Click",
        url: "https://www.youtube.com/results?search_query=IGCSE+Chinese+0547+hobbies+sports+extracurricular+activities",
      },
    ],
    formulas: [
      {
        name: "Sport & Instrument Action Verbs",
        formula: "打 (hand/racket) · 踢 (foot) · 骑 (cycle/horse) · 弹 (piano/guitar) · 拉 (violin/erhu) · 吹 (flute)",
        note: "姐姐会弹钢琴，哥哥喜欢踢足球。 (Never use 玩 for sports or instruments!)",
      },
      {
        name: "Expressing Interest Frame",
        formula: "Subject + 对 + Topic/Hobby + (很 / 非常 / 不) + 感兴趣",
        note: "我对中国书法很感兴趣。 Wǒ duì Zhōngguó shūfǎ hěn gǎn xìngqù.",
      },
      {
        name: "Three Modals for 'Can'",
        formula: "会 + Learned Skill  |  能 + Circumstance/Capability  |  可以 + Permission",
        note: "我会游泳，可是今天发烧不能去。这里可以拍照吗？",
      },
      {
        name: "Degree Complement (How Well)",
        formula: "Subject + (Verb) + Object + Verb + 得 (de) + 很/非常 + Adjective",
        note: "他打羽毛球打得非常好 / 他羽毛球打得非常好。",
      },
      {
        name: "Ongoing Duration ('Have Been Learning For…')",
        formula: "从 + [Age/Time] + 开始学…，已经学了 + [Duration] + 了",
        note: "我从七岁开始学弹钢琴，已经学了六年了。",
      },
    ],
  },
};
