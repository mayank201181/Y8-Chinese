import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "hobbies-m1",
    title: "Paper 1 · Sport Verbs, Instruments & Preferences",
    questions: [
      {
        id: "hobbies-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sports-verbs",
        question: "Which verb completes **___ 篮球** ('play basketball')?",
        options: ["打 (dǎ)", "踢 (tī)", "玩 (wán)", "骑 (qí)"],
        answerIndex: 0,
        hints: ["Basketball is played with your hands — look for the verb with the 扌(hand) radical!"],
        explanation:
          "Hand and racket ball sports always use **打** (*dǎ*): **打篮球**. **踢** is for foot sports (**踢足球**), **骑** is for cycling/horses, and **玩** is never used for ball sports.",
      },
      {
        id: "hobbies-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sports-verbs",
        question: "Which sport MUST use the verb **踢** (*tī*, to kick) rather than **打**?",
        options: ["网球 (tennis)", "足球 (football)", "羽毛球 (badminton)", "乒乓球 (table tennis)"],
        answerIndex: 1,
        hints: ["Notice the 足 (foot) radical in both 踢 and the correct sport!"],
        explanation:
          "**足球** (*zúqiú*, football) is kicked with the feet, so it pairs with **踢**: **踢足球**. Tennis, badminton, and table tennis are racket/paddle sports played with the hands (**打**).",
      },
      {
        id: "hobbies-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sports-verbs",
        question: "At East Coast Park in Singapore, families love **骑自行车** (*qí zìxíngchē*). What activity is this?",
        options: ["Rollerblading", "Swimming in the sea", "Riding a bicycle / cycling", "Playing beach volleyball"],
        answerIndex: 2,
        hints: ["骑 (with 马 horse radical) means straddling and riding; 自行车 means 'self-moving vehicle'."],
        explanation:
          "**骑自行车** (*qí zìxíngchē*) means 'riding a bicycle / cycling'. Swimming is **游泳**, and beach volleyball is **打沙滩排球**.",
      },
      {
        id: "hobbies-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "creative-music-hobbies",
        question: "Choose the correct verb for **___ 钢琴** ('play the piano').",
        options: ["拉 (lā)", "吹 (chuī)", "玩 (wán)", "弹 (tán)"],
        answerIndex: 3,
        hints: ["Piano keys are struck/pressed with the fingers, just like guitar strings are plucked."],
        explanation:
          "Keyboard and plucked-string instruments take **弹** (*tán*): **弹钢琴** (and **弹吉他**). **拉** is for bowed strings (**拉小提琴**), and **吹** is for wind instruments (**吹笛子**).",
      },
      {
        id: "hobbies-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "creative-music-hobbies",
        question: "Why does Mandarin say **拉小提琴** (*lā xiǎotíqín*) for 'play the violin' instead of *弹小提琴*?",
        options: [
          "Because playing the violin involves pulling a bow back and forth across strings",
          "Because the violin is larger than a piano",
          "Because 拉 has the 口 (mouth) radical for blowing air",
          "Because 小提琴 is a percussion instrument",
        ],
        answerIndex: 0,
        hints: [
          "拉 literally means 'to pull' (notice the 扌 hand radical).",
          "Picture what a violinist's right hand holds and pulls!",
        ],
        explanation:
          "**拉** (*lā*, 'pull') describes the physical motion of drawing a horsehair bow across strings — used for **拉小提琴** (violin), **拉大提琴** (cello), and **拉二胡** (erhu).",
      },
      {
        id: "hobbies-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "creative-music-hobbies",
        question: "In which hobby is the verb **玩** (*wán*) **100% natural and correct**?",
        options: ["玩网球", "玩电脑游戏", "玩小提琴", "玩中国象棋"],
        answerIndex: 1,
        hints: ["玩 is used for video/computer games and toys — NOT sports, instruments, or board games!"],
        explanation:
          "**玩电脑游戏** (*wán diànnǎo yóuxì*, play computer games) is the proper home for **玩**! Tennis uses **打网球**, violin uses **拉小提琴**, and Chinese chess uses **下中国象棋**.",
      },
      {
        id: "hobbies-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "likes-degrees",
        question: "Which sentence correctly translates **'My favourite sport is swimming'**?",
        options: [
          "我很最喜欢的运动是游泳。",
          "我喜欢的运动最是游泳。",
          "我最喜欢的运动是游泳。",
          "我是最喜欢运动游泳。",
        ],
        answerIndex: 2,
        hints: [
          "Never stack 很 and 最 together!",
          "Use the noun-modifying frame: 我最喜欢的运动 + 是 + 游泳.",
        ],
        explanation:
          "**我最喜欢的运动是游泳。** uses superlative **最喜欢** to modify **运动** via **的**. Saying **很最喜欢** illegally stacks two degree adverbs.",
      },
      {
        id: "hobbies-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "likes-degrees",
        question: "Choose the ONLY grammatical sentence meaning **'I am very interested in Chinese calligraphy'**.",
        options: [
          "我很感兴趣对中国书法。",
          "我对中国书法感兴趣很。",
          "我跟中国书法很感兴趣。",
          "我对中国书法很感兴趣。",
        ],
        answerIndex: 3,
        hints: [
          "Where must prepositional phrases (对 + Topic) stand in Mandarin?",
          "Put 对中国书法 BEFORE 很感兴趣!",
        ],
        explanation:
          "**我对中国书法很感兴趣。** follows **Subject + 对 + Topic + 很 + 感兴趣**. Putting **对中国书法** at the end copies English 'interested in…' word order, and **跟** means 'with', not 'towards/in'.",
      },
      {
        id: "hobbies-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ability-hui-neng",
        question: "How do you say **'My younger sister knows how to swim'** (she learned the skill)?",
        options: ["妹妹会游泳。", "妹妹可以游泳。", "妹妹得游泳。", "妹妹在游泳。"],
        answerIndex: 0,
        hints: [
          "Which modal verb expresses a learned skill (languages, instruments, swimming, cycling)?",
          "可以 is permission, 得 is 'must', and 在 marks ongoing action right now.",
        ],
        explanation:
          "**妹妹会游泳。** (*Mèimei huì yóuyǒng.*) uses **会** (*huì*) for a learned skill. **在游泳** means 'is swimming right now', and **可以** asks or grants permission.",
      },
      {
        id: "hobbies-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ability-hui-neng",
        question: "Daming is on the school football team, yet today he says: **“我今天脚疼，___ 去踢足球。”** Which word fits the blank?",
        options: ["不会 (bú huì)", "不能 (bù néng)", "不有 (bù yǒu)", "没会 (méi huì)"],
        answerIndex: 1,
        hints: [
          "Daming hasn't forgotten *how* to play football — his sore foot stops him today!",
          "Choose the modal negative for circumstantial/physical inability.",
        ],
        explanation:
          "**不能** (*bù néng*) expresses circumstantial or physical inability today ('cannot go because my foot hurts'). Saying **不会踢足球** would mean he doesn't know how to play football at all!",
      },
      {
        id: "hobbies-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ability-hui-neng",
        question: "Inside the National Gallery in Singapore, you want to ask a staff member: **'Excuse me, may I take photos here?'** What do you say?",
        options: [
          "请问，这里会拍照吗？",
          "请问，这里得拍照吗？",
          "请问，这里可以拍照吗？",
          "请问，这里最拍照吗？",
        ],
        answerIndex: 2,
        hints: [
          "You are asking about museum rules / permission.",
          "Pick the two-character modal verb for 'may / be allowed to'!",
        ],
        explanation:
          "**请问，这里可以拍照吗？** uses **可以** (*kěyǐ*) to ask politely for permission. **会拍照吗** would bizarrely ask whether the room knows how to operate a camera!",
      },
      {
        id: "hobbies-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "likes-degrees",
        question: "What is the correct tone-marked Pinyin for **爱好** ('hobby') and **音乐** ('music')?",
        options: [
          "àihǎo & yīnlè",
          "àihǎo & yīnyuè",
          "àihào & yīnlè",
          "àihào & yīnyuè",
        ],
        answerIndex: 3,
        hints: ["Watch both polyphones: 好 = 'fond of' (4th tone) and 乐 = 'music' (yuè)!"],
        explanation:
          "In **爱好**, **好** means 'to like / be fond of' and takes the 4th tone (**àihào**). In **音乐**, **乐** means 'music' and is read **yuè** (**yīnyuè**), unlike **快乐** (*kuàilè*).",
      },
      {
        id: "hobbies-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ability-hui-neng",
        question: "Which sentence correctly says **'Older brother plays badminton very well'**?",
        options: [
          "哥哥打羽毛球打得很好。",
          "哥哥打羽毛球得很好。",
          "哥哥很打羽毛球好。",
          "哥哥得打羽毛球很好。",
        ],
        answerIndex: 0,
        hints: [
          "Neutral-tone 得 (de) MUST attach directly to a verb, never to a noun like 羽毛球!",
          "Repeat the verb 打 before 得很好.",
        ],
        explanation:
          "**哥哥打羽毛球打得很好。** repeats the verb **打** so that **得** sits immediately after a verb (**打得很好**). **打羽毛球得很好** wrongly attaches **得** to the noun **羽毛球**.",
      },
      {
        id: "hobbies-m1-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cca-hobby-profile",
        question: "In Singapore schools, every student joins **课外活动** (*kèwài huódòng*). What does this mean?",
        options: [
          "Final-year examinations",
          "Co-curricular activities (CCAs)",
          "School canteen lunch menus",
          "Morning assembly speeches",
        ],
        answerIndex: 1,
        hints: ["课外 = outside classroom lessons; 活动 = activities."],
        explanation:
          "**课外活动** (*kèwài huódòng*) means 'co-curricular / extracurricular activities' (Singapore's school CCAs).",
      },
      {
        id: "hobbies-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cca-hobby-profile",
        question: "Choose the correct measure word for a sports match: **下个星期五我们有一 ___ 篮球比赛。**",
        options: ["本 (běn)", "双 (shuāng)", "场 (chǎng)", "件 (jiàn)"],
        answerIndex: 2,
        hints: [
          "Sports matches, concerts, films, and heavy rainstorms all share this event classifier!",
          "Same character as the second syllable of 运动场.",
        ],
        explanation:
          "Matches, performances, and films use the event classifier **场** (*chǎng*): **一场篮球比赛**. **本** is for books, **双** is for pairs, and **件** is for tops/matters.",
      },
    ],
  },
  {
    id: "hobbies-m2",
    title: "Paper 2 · Word Order, Separable Verbs & Hobby Reasons",
    questions: [
      {
        id: "hobbies-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "creative-music-hobbies",
        question: "Grandpa sits at a stone table under his HDB block moving carved pieces on a board. What is his hobby?",
        options: ["爬山 (páshān)", "集邮 (jíyóu)", "滑冰 (huábīng)", "下棋 (xiàqí)"],
        answerIndex: 3,
        hints: ["Board games and chess use the verb 下 ('place pieces down')."],
        explanation:
          "**下棋** (*xiàqí*) means 'playing chess / board games' (such as **下中国象棋**). **爬山** is hiking, **集邮** is stamp collecting, and **滑冰** is ice-skating.",
      },
      {
        id: "hobbies-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sports-verbs",
        question: "Which sentence follows Mandarin's **Golden STPV (Subject + Time + Place + Verb)** rule?",
        options: [
          "我星期六下午在学校体育馆打羽毛球。",
          "我打羽毛球在学校体育馆星期六下午。",
          "我在学校体育馆打羽毛球星期六下午。",
          "星期六下午打羽毛球我学校体育馆在。",
        ],
        answerIndex: 0,
        hints: [
          "Both Time (星期六下午) and Place (在学校体育馆) MUST come BEFORE the verb 打羽毛球!",
          "Check the order: Subject → Time → Place → Verb.",
        ],
        explanation:
          "**我星期六下午在学校体育馆打羽毛球。** puts Subject (**我**) + Time (**星期六下午**) + Place (**在学校体育馆**) before the action (**打羽毛球**). Putting place or time after the verb copies English word order.",
      },
      {
        id: "hobbies-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sports-verbs",
        question: "**游泳** (*yóuyǒng*) is a separable verb-object compound. How do you correctly say **'I swam for one hour yesterday'**?",
        options: [
          "我昨天游泳了一个小时。",
          "我昨天游了一个小时泳。",
          "我昨天一个小时游泳了。",
          "我昨天做了一个小时游泳。",
        ],
        answerIndex: 1,
        hints: [
          "Split 游 (verb) and 泳 (object)!",
          "Insert 了 + duration (一个小时) right between 游 and 泳.",
        ],
        explanation:
          "Because **游泳** is a separable **Verb + Object** compound (**游** + **泳**), **了** and the duration **一个小时** slot right between them: **游了一个小时泳**! Saying *游泳了一个小时* treats a verb-object phrase like a single verb.",
      },
      {
        id: "hobbies-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "creative-music-hobbies",
        question: "Which instrument belongs to a Singapore school's **华乐团** (*Huáyuètuán*, Chinese Orchestra) and uses the verb **吹** (*chuī*, to blow)?",
        options: ["钢琴 (gāngqín)", "小提琴 (xiǎotíqín)", "笛子 (dízi)", "二胡 (èrhú)"],
        answerIndex: 2,
        hints: [
          "吹 has the 口 (mouth) radical — you need a wind instrument!",
          "Notice the 竹 (bamboo) radical at the top of the correct instrument.",
        ],
        explanation:
          "**笛子** (*dízi*, Chinese bamboo flute) is a wind instrument played by blowing (**吹笛子**). **二胡** is also in the Chinese Orchestra, but it is a bowed two-stringed fiddle (**拉二胡**).",
      },
      {
        id: "hobbies-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "creative-music-hobbies",
        question: "How do you naturally say **'I like listening to music while drawing'**?",
        options: [
          "我喜欢不但听音乐，而且画画。",
          "我喜欢虽然听音乐，但是画画。",
          "我喜欢因为听音乐，所以画画。",
          "我喜欢一边听音乐，一边画画。",
        ],
        answerIndex: 3,
        hints: [
          "Which paired pattern expresses doing two ongoing actions at the exact same time?",
          "Look for the repeated two-character word meaning 'on one side… on the other side…'.",
        ],
        explanation:
          "**一边…一边…** (*yìbiān … yìbiān …*) expresses two simultaneous actions: **一边听音乐，一边画画** ('listening to music while drawing'). **不但…而且…** means 'not only… but also…'.",
      },
      {
        id: "hobbies-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "likes-degrees",
        question: "Someone asks why you never watch soap operas on TV. Which reply means **'Because watching TV is really boring'**?",
        options: [
          "因为看电视真没意思。",
          "因为看电视真不意思。",
          "因为看电视真没有意思了不。",
          "因为看电视真好意思。",
        ],
        answerIndex: 0,
        hints: [
          "'Interesting' is 有意思 (literally 'has meaning/fun').",
          "How do you ALWAYS negate 有 in Mandarin — 不 or 没?",
        ],
        explanation:
          "Since **有意思** starts with **有**, its negative MUST use **没**: **没意思** (*méi yìsi*, boring). **有** is never negated with **不** (*不意思* is ungrammatical), and **不好意思** means 'excuse me / embarrassed'!",
      },
      {
        id: "hobbies-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "likes-degrees",
        question: "Which sentence contains the classic **clause-level 和 error** that IGCSE examiners penalise?",
        options: [
          "我喜欢打网球和游泳。",
          "姐姐喜欢唱歌，和弟弟喜欢踢足球。",
          "我和好朋友一起去体育馆。",
          "爸爸喜欢看书和听音乐。",
        ],
        answerIndex: 1,
        hints: [
          "和 can join two nouns/pronouns (我和朋友) or two short verb phrases sharing ONE subject (喜欢唱歌和跳舞).",
          "和 can NEVER join two full clauses with different subjects ('Sister likes X, AND Brother likes Y')!",
        ],
        explanation:
          "**姐姐喜欢唱歌，和弟弟喜欢踢足球** is wrong because **和** NEVER connects two separate clauses in Mandarin! Simply use a comma (**姐姐喜欢唱歌，弟弟喜欢踢足球**). The other three sentences join words/phrases under one subject.",
      },
      {
        id: "hobbies-m2-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "likes-degrees",
        question: "Put these three preference expressions in order from **MOST positive** to **MOST negative**:\n1. **不太喜欢**   2. **最喜欢**   3. **讨厌**",
        options: ["1 → 2 → 3", "3 → 1 → 2", "2 → 1 → 3", "2 → 3 → 1"],
        answerIndex: 2,
        hints: ["最喜欢 = favourite; 不太喜欢 = don't really like; 讨厌 = hate/dislike strongly."],
        explanation:
          "**最喜欢** (2, like best) → **不太喜欢** (1, don't really like) → **讨厌** (3, strongly dislike/hate) gives **2 → 1 → 3**.",
      },
      {
        id: "hobbies-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ability-hui-neng",
        question: "Which sentence is an **alternative grammatical way** to say **美美弹钢琴弹得非常好** ('Meimei plays the piano really well')?",
        options: [
          "美美弹得钢琴非常好。",
          "美美弹钢琴非常好得。",
          "美美得弹钢琴非常好。",
          "美美钢琴弹得非常好。",
        ],
        answerIndex: 3,
        hints: [
          "Keep 得 (de) glued right after the verb 弹!",
          "Instead of repeating 弹, move the object 钢琴 BEFORE 弹.",
        ],
        explanation:
          "Fronting the object **钢琴** gives **美美钢琴弹得非常好**, keeping **得** directly attached to the verb **弹** (**弹得非常好**). Splitting **弹得钢琴** or putting **得** at the end is ungrammatical.",
      },
      {
        id: "hobbies-m2-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cca-hobby-profile",
        question: "Read carefully: **我今年十三岁，从八岁开始学打羽毛球，到现在已经学了五年了。** Which statement is **TRUE**?",
        options: [
          "The speaker still plays badminton now and has learned it for 5 years",
          "The speaker learned badminton for 8 years and has now quit",
          "The speaker will start learning badminton at age 15",
          "The speaker only played badminton for 5 months in primary school",
        ],
        answerIndex: 0,
        hints: [
          "十三岁 (13 years old) minus 八岁 (started at age 8) = 五年 (5 years).",
          "What does 到现在已经学了五年了 (with double 了) tell you about whether they still play?",
        ],
        explanation:
          "Starting at age 8 (**从八岁开始**) and being 13 now (**今年十三岁**) equals 5 years (**五年**), and **到现在已经学了五年了** (double **了**) confirms the speaker is **still** learning/playing badminton up to the present!",
      },
      {
        id: "hobbies-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cca-hobby-profile",
        question: "Translate: **'After school I go to the sports field with my friends to play football.'**",
        options: [
          "放学以后我去运动场踢足球跟朋友一起。",
          "放学以后我跟朋友一起去运动场踢足球。",
          "我踢足球在运动场跟朋友一起放学以后。",
          "放学以后我跟朋友去运动场打足球一起。",
        ],
        answerIndex: 1,
        hints: [
          "With-phrases (跟朋友一起) MUST stand BEFORE the verb 去运动场踢足球!",
          "Check the verb for 足球: 踢, never 打!",
        ],
        explanation:
          "**放学以后我跟朋友一起去运动场踢足球。** places Time (**放学以后**), Subject (**我**), and With-phrase (**跟朋友一起**) before **去运动场踢足球**. Putting **跟朋友一起** at the end or saying *打足球* are classic errors.",
      },
      {
        id: "hobbies-m2-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sports-verbs",
        question: "Look at the radicals in **滑冰** (*huábīng*) and **滑雪** (*huáxuě*). Which one do you do on a frozen rink and which on a snowy mountain?",
        options: [
          "滑冰 = skiing; 滑雪 = ice-skating",
          "Both mean swimming indoors",
          "滑冰 = ice-skating; 滑雪 = skiing",
          "滑冰 = rollerblading; 滑雪 = hiking",
        ],
        answerIndex: 2,
        hints: ["冰 = ice (冫two-drop ice radical); 雪 = snow (雨 rain top)!"],
        explanation:
          "**冰** (*bīng*) means 'ice' (**滑冰** = ice-skating) and **雪** (*xuě*) means 'snow' (**滑雪** = skiing).",
      },
      {
        id: "hobbies-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ability-hui-neng",
        question: "Fill in the three blanks in order using **会**, **能**, and **可以**:\n**小丽很 ___ 唱歌，一分钟 ___ 唱完这首快歌。老师，晚会的时候她 ___ 唱这首歌吗？**",
        options: [
          "可以 / 会 / 能",
          "能 / 可以 / 会",
          "会 / 可以 / 能",
          "会 / 能 / 可以",
        ],
        answerIndex: 3,
        hints: [
          "Blank 1: 很 ___ 唱歌 ('really good at / skilled at singing') — only ONE of these modals can take 很!",
          "Blank 2: measurable physical speed/capability ('can finish singing this fast song in 1 minute') = 能; Blank 3: asking the teacher permission = 可以.",
        ],
        explanation:
          "**很会唱歌** = skilled at singing (**会** is the modal that pairs naturally with **很** to mean 'good at'!), **一分钟能唱完** = measurable capability (**能**), and **她可以唱…吗？** = asking the teacher's permission (**可以**).",
      },
      {
        id: "hobbies-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cca-hobby-profile",
        question: "Read: **昨天的校际网球比赛非常精彩，虽然对手很强，但是我们校队最后赢了！** What was the result of yesterday's tennis match?",
        options: [
          "Our school team won in the end despite strong opponents",
          "Our school team lost because it rained heavily",
          "The tennis match was cancelled until next week",
          "Nobody watched the match because it was boring",
        ],
        answerIndex: 0,
        hints: [
          "虽然对手很强 = although the opponents were strong.",
          "赢了 (yíng le) = won!",
        ],
        explanation:
          "**虽然对手很强，但是我们校队最后赢了！** means 'Although the opponents were strong, our school team won (**赢了**) in the end!'",
      },
      {
        id: "hobbies-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "likes-degrees",
        question: "Compare these two sentences:\n- A: **爸爸比妈妈更喜欢做饭。**\n- B: **爸爸没有妈妈那么喜欢拍照。**\nWho likes photography (**拍照**) MORE?",
        options: ["Dad (爸爸)", "Mum (妈妈)", "Both equally", "Neither of them likes photography"],
        answerIndex: 1,
        hints: [
          "Sentence A is about cooking (做饭); Sentence B is about photography (拍照).",
          "Decode A 没有 B 那么… ('A is not as … as B')!",
        ],
        explanation:
          "In Sentence B, **爸爸没有妈妈那么喜欢拍照** means 'Dad does not like taking photos as much as Mum does' — so **Mum (妈妈)** likes photography more!",
      },
    ],
  },
  {
    id: "hobbies-m3",
    title: "Paper 3 · IGCSE Club Notices, Timetables & Comprehension",
    questions: [
      {
        id: "hobbies-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sports-verbs",
        question: "Grandma goes to the Singapore Botanic Gardens at 7 a.m. every day to practise **太极拳** (*tàijíquán*, Tai Chi). Which verb precedes **太极拳**?",
        options: ["踢 (tī)", "骑 (qí)", "打 (dǎ)", "弹 (tán)"],
        answerIndex: 2,
        hints: ["Hand-form martial arts use the exact same hand-radical verb as basketball and badminton!"],
        explanation:
          "Tai Chi uses hand forms and movements, so Mandarin says **打太极拳** (*dǎ tàijíquán*).",
      },
      {
        id: "hobbies-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cca-hobby-profile",
        question: "Read the Tanglin CCA noticeboard:\n- **羽毛球队：星期二、星期四下午 3:30–5:00（体育馆）**\n- **华乐团：星期三下午 3:30–5:30（音乐室）**\n- **摄影俱乐部：星期五下午 3:30–4:30（美术室）**\nHow many hours per week does a student in the **羽毛球队** (Badminton Team) train **in total**?",
        options: ["1.5 hours", "2 hours", "2.5 hours", "3 hours"],
        answerIndex: 3,
        hints: [
          "3:30 to 5:00 p.m. is 1.5 hours per session.",
          "Notice the days listed for 羽毛球队: 星期二、星期四 (BOTH Tuesday AND Thursday)!",
        ],
        explanation:
          "Each badminton session (**3:30–5:00**) lasts 1.5 hours, and the team trains twice a week (**星期二、星期四**), giving 1.5 × 2 = **3 hours** per week in total!",
      },
      {
        id: "hobbies-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "likes-degrees",
        question: "Read Anni's message:\n**以前我很讨厌跑步，觉得又热又累；可是自从跟好朋友一起在东海岸公园跑步以后，我现在越来越喜欢跑步了！**\nHow has Anni's attitude towards running changed?",
        options: [
          "She used to hate running, but now likes it more and more after running with her good friend",
          "She used to love running, but quit because East Coast Park is too hot",
          "She prefers cycling alone rather than running with friends",
          "She only runs indoors on a treadmill now",
        ],
        answerIndex: 0,
        hints: [
          "以前我很讨厌跑步 = in the past I hated running.",
          "越来越喜欢 = like it more and more!",
        ],
        explanation:
          "**以前…讨厌…；可是现在越来越喜欢跑步了** contrasts her past dislike (**以前讨厌**) with growing enjoyment now (**越来越喜欢**) since running at East Coast Park with her friend.",
      },
      {
        id: "hobbies-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "creative-music-hobbies",
        question: "Read: **哥哥周末很少出门，总是待在房间里玩电脑游戏。妈妈说这样对眼睛不好，让他多去户外运动。** Why is Mum worried about older brother?",
        options: [
          "He spends too much money buying sports shoes",
          "Staying indoors playing computer games all weekend is bad for his eyes",
          "He practises the guitar too loudly at night",
          "He hurt his knee playing football outdoors",
        ],
        answerIndex: 1,
        hints: [
          "很少出门 = rarely goes out; 玩电脑游戏 = plays computer games.",
          "对眼睛不好 = bad for one's eyes!",
        ],
        explanation:
          "Older brother rarely goes out at weekends and always plays computer games in his room (**总是待在房间里玩电脑游戏**), which Mum warns is bad for his eyes (**对眼睛不好**).",
      },
      {
        id: "hobbies-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ability-hui-neng",
        question: "Spot the **ONLY** sentence where **得** is used **100% accurately**:",
        options: [
          "弟弟游泳得比我快。",
          "弟弟游得泳比我快。",
          "弟弟游泳游得比我快。",
          "弟弟得游泳比我快。",
        ],
        answerIndex: 2,
        hints: [
          "游泳 is a Verb + Object compound (游 = verb, 泳 = object).",
          "Degree particle 得 must follow the verb 游 — repeat 游 after 游泳!",
        ],
        explanation:
          "Because **游泳** is a Verb + Object compound, you repeat the verb **游** before **得**: **弟弟游泳游得比我快** ('Little brother swims faster than me'). *游泳得…* puts **得** after the noun **泳**, and *游得泳* splits the complement inside the object.",
      },
      {
        id: "hobbies-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cca-hobby-profile",
        question: "Read this club poster:\n**欢迎参加中文戏剧社！不管你会不会演戏，只要你对说中文和表演感兴趣，都可以报名！**\nWho is allowed to sign up (**报名**) for the Chinese Drama Club?",
        options: [
          "Only students who already know how to act professionally",
          "Only students who play an instrument in the orchestra",
          "Only Year 9 and Year 10 students",
          "Anyone interested in speaking Mandarin and performing, whether or not they know how to act yet",
        ],
        answerIndex: 3,
        hints: [
          "不管你会不会演戏 = regardless of whether you know how to act or not.",
          "只要…都… = as long as…, everyone can…!",
        ],
        explanation:
          "**不管你会不会演戏** ('no matter whether you know how to act or not') + **只要你对说中文和表演感兴趣，都可以报名** welcomes anyone interested in speaking Mandarin and performing!",
      },
      {
        id: "hobbies-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sports-verbs",
        question: "Which pair of activities **BOTH** contain the **足** (foot) radical in their first character because your legs/feet power the motion?",
        options: [
          "跑步 & 跳舞 (running & dancing)",
          "画画 & 看书 (drawing & reading)",
          "唱歌 & 吹笛子 (singing & playing flute)",
          "做饭 & 拍照 (cooking & photography)",
        ],
        answerIndex: 0,
        hints: [
          "Look closely at the left side of 跑 (pǎo) and 跳 (tiào)!",
          "Compare with 踢 (tī) in 踢足球.",
        ],
        explanation:
          "Both **跑** (*pǎo*, run) in **跑步** and **跳** (*tiào*, jump/leap) in **跳舞** start with the **足** (foot) radical on the left!",
      },
      {
        id: "hobbies-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cca-hobby-profile",
        question: "Read this survey of 40 Year 8 students' favourite sports:\n**喜欢打篮球的有十二个人，喜欢游泳的比喜欢打篮球的多三个人，剩下的学生最喜欢打羽毛球和踢足球。**\nHow many students chose **swimming (游泳)** as their favourite?",
        options: ["9 students", "15 students", "25 students", "27 students"],
        answerIndex: 1,
        hints: [
          "喜欢打篮球的有十二个人 = 12 students like basketball.",
          "喜欢游泳的比喜欢打篮球的多三个人 = 'those who like swimming are 3 MORE than those who like basketball'!",
        ],
        explanation:
          "12 students like basketball (**十二个人**), and swimming has **3 more than basketball** (**比喜欢打篮球的多三个人**): 12 + 3 = **15 students**!",
      },
      {
        id: "hobbies-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "creative-music-hobbies",
        question: "Read: **妹妹觉得看英文小说很有意思，可是我觉得看电影比看书更有意思。** What is the narrator's opinion?",
        options: [
          "Reading books is much more interesting than watching films",
          "Both reading books and watching films are boring",
          "Watching films is even more interesting than reading books",
          "Only younger sister likes watching films",
        ],
        answerIndex: 2,
        hints: [
          "Focus on the second clause after 可是我觉得…",
          "A 比 B 更有意思 = 'A is even more interesting than B'.",
        ],
        explanation:
          "**我觉得看电影比看书更有意思** means 'I think watching films (**看电影**) is even more interesting than reading books (**看书**).' ",
      },
      {
        id: "hobbies-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "likes-degrees",
        question: "Which sentence uses **不但…而且…** accurately to justify a hobby?",
        options: [
          "打网球不但可以锻炼身体，但是能交新朋友。",
          "打网球不但可以锻炼身体，所以能交新朋友。",
          "打网球可以锻炼身体不但，而且交新朋友。",
          "打网球不但可以锻炼身体，而且能交很多新朋友。",
        ],
        answerIndex: 3,
        hints: [
          "Pair 不但 with 而且 (never 但是 or 所以).",
          "Place 不但 right after the shared topic/subject 打网球!",
        ],
        explanation:
          "**打网球不但可以锻炼身体，而且能交很多新朋友。** places **不但** after the shared subject **打网球** and completes the pair with **而且**.",
      },
      {
        id: "hobbies-m3-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cca-hobby-profile",
        question: "When it pours with tropical rain in Singapore, students move from the outdoor **运动场** (*yùndòngchǎng*) into the indoor **体育馆** (*tǐyùguǎn*). What is a **体育馆**?",
        options: [
          "Indoor sports hall / gymnasium",
          "School library",
          "Science laboratory",
          "Outdoor running track",
        ],
        answerIndex: 0,
        hints: ["体育 = physical education / sports; 馆 = indoor hall/building."],
        explanation:
          "**体育馆** (*tǐyùguǎn*) is an indoor sports hall / gymnasium, contrasting with the open-air **运动场** / **操场** (sports field).",
      },
      {
        id: "hobbies-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "creative-music-hobbies",
        question: "Four friends introduce their musical hobbies:\n- 小明：我会**弹**一种西洋乐器，有黑白琴键。\n- 小华：我会**拉**一种只有两根弦的中国乐器。\n- 小丽：我会**吹**一种竹子做的中国乐器。\n- 小文：我会**拉**一种西洋管弦乐器。\nWhat instrument does **Xiaohua (小华)** play?",
        options: ["钢琴 (piano)", "二胡 (erhu)", "笛子 (bamboo flute)", "小提琴 (violin)"],
        answerIndex: 1,
        hints: [
          "Xiaohua uses the verb 拉 (bowed instrument) — that narrows it to 二胡 or 小提琴.",
          "Read Xiaohua's clue: 只有两根弦的中国乐器 ('a Chinese instrument with only TWO strings')!",
        ],
        explanation:
          "**拉** + **两根弦的中国乐器** ('two-stringed Chinese instrument') uniquely identifies **二胡** (*èrhú* — notice **二** = two!). Xiaoming plays **钢琴** (black-and-white keys), Xiaoli plays **笛子** (bamboo wind), and Xiaowen plays **小提琴** (Western bowed string).",
      },
      {
        id: "hobbies-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ability-hui-neng",
        question: "A swimming-pool sign reads: **水深两米，不会游泳的人不可以下水！** Who is prohibited from entering this pool?",
        options: [
          "Anyone under two metres tall",
          "Swimmers wearing goggles",
          "People who do not know how to swim",
          "School swimming-team members",
        ],
        answerIndex: 2,
        hints: [
          "水深两米 = water depth 2 metres.",
          "不会游泳的人 = people who don't know how to swim; 不可以下水 = must not enter the water.",
        ],
        explanation:
          "Because the water is 2 metres deep (**水深两米**), **不会游泳的人不可以下水** warns that people who do not know how to swim (**不会游泳的人**) are not allowed into the water.",
      },
      {
        id: "hobbies-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sports-verbs",
        question: "Which sentence correctly expresses **'Every morning Dad jogs in the park for half an hour'**?",
        options: [
          "爸爸每天早上在公园跑步半个小时了。",
          "爸爸在公园跑半个小时步每天早上。",
          "爸爸每天早上半个小时在公园跑步。",
          "爸爸每天早上在公园跑半个小时步。",
        ],
        answerIndex: 3,
        hints: [
          "First check STPV: 爸爸 (S) + 每天早上 (T) + 在公园 (P) before the verb!",
          "Second check separable verb 跑步: insert duration 半个小时 BETWEEN 跑 and 步!",
        ],
        explanation:
          "**爸爸每天早上在公园跑半个小时步。** nails both rules at once: STPV (**爸爸每天早上在公园…**) AND splitting separable **跑步** round the duration (**跑半个小时步**).",
      },
      {
        id: "hobbies-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cca-hobby-profile",
        question: "Which paragraph opening has **ZERO** Mandarin grammar mistakes?",
        options: [
          "我对学校的课外活动很感兴趣，今年我参加了羽毛球队，每个星期四跟朋友一起练习。",
          "我很感兴趣对学校的课外活动，今年我参加了羽毛球队，和每个星期四练习。",
          "我对学校的课外活动很最喜欢，今年参加了玩羽毛球队每个星期四。",
          "我参加学校的课外活动今年，每个星期四练习羽毛球跟朋友一起在体育馆。",
        ],
        answerIndex: 0,
        hints: [
          "Check 对…很感兴趣 word order (prepositional phrase BEFORE 很感兴趣).",
          "Check there is NO clause-level 和, NO 很最, NO 玩羽毛球, and STPV is respected!",
        ],
        explanation:
          "**我对学校的课外活动很感兴趣，今年我参加了羽毛球队，每个星期四跟朋友一起练习。** follows every Mandarin grammar rule cleanly, while the other three contain *感兴趣对…*, clause-level *和*, *很最*, *玩羽毛球*, or English-order trailing modifiers.",
      },
    ],
  },
];
