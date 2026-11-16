import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "greetings-routine-m1",
    title: "Paper 1 · Greetings, Identity & Family Foundations",
    questions: [
      {
        id: "greetings-routine-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "greetings-identity",
        question: "You meet your new Chinese teacher, Teacher Wang (**王老师**), in the school corridor at Tanglin. Which greeting is the most polite?",
        options: [
          "王老师，您好！",
          "老师王，你好！",
          "王老师，再见！",
          "王老师，不客气！",
        ],
        answerIndex: 0,
        hints: [
          "Look for the respectful form of 'you' that puts the heart radical 心 underneath 你.",
          "Remember that Chinese puts the surname BEFORE the title (王老师), never *老师王*.",
        ],
        explanation:
          "**王老师，您好！** (*Wáng lǎoshī, nín hǎo!*) places the surname before the title and uses polite **您好** (*nín hǎo*). **老师王，你好！** reverses surname and title, while **再见** means goodbye and **不客气** means you're welcome.",
      },
      {
        id: "greetings-routine-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "greetings-identity",
        question: "How is **你好** (*nǐ hǎo*) naturally pronounced in everyday spoken Mandarin due to third-tone sandhi?",
        options: [
          "nǐ hào",
          "ní hǎo",
          "nì hǎo",
          "nī hāo",
        ],
        answerIndex: 1,
        hints: [
          "Both 你 (nǐ) and 好 (hǎo) carry the dipping 3rd tone.",
          "When two 3rd tones meet side by side, what tone does the FIRST syllable change into when spoken?",
        ],
        explanation:
          "When two 3rd tones occur back-to-back, the first shifts to a rising 2nd tone in speech (**ní hǎo**), even though standard written Pinyin keeps **nǐ hǎo**. **nì hǎo** and **nǐ hào** use a falling 4th tone instead.",
      },
      {
        id: "greetings-routine-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "greetings-identity",
        question: "Someone says **谢谢你！** (*Xièxie nǐ!* — Thank you!). Which reply is natural AND shows the accurate spoken tone sandhi on **不**?",
        options: [
          "没关系 (méi guānxi)",
          "不客气 (bù kèqi)",
          "不客气 (bú kèqi)",
          "对不起 (duìbuqǐ)",
        ],
        answerIndex: 2,
        hints: [
          "First separate 'you're welcome' from 'no problem' (which replies to sorry).",
          "Before the 4th-tone syllable 客 (kè), what happens to the tone on 不?",
        ],
        explanation:
          "**不客气 (bú kèqi)** means 'you're welcome', and **不** rises to 2nd tone *bú* before 4th-tone **客** (*kè*). **没关系** replies to **对不起** (sorry), and *bù kèqi* misses the mandatory 4th-tone sandhi on **不**.",
      },
      {
        id: "greetings-routine-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greetings-identity",
        question: "Which sentence accurately states 'I am twelve years old this year' in Mandarin?",
        options: [
          "我是十二岁今年。",
          "我今年是十二岁。",
          "今年十二岁是我。",
          "我今年十二岁。",
        ],
        answerIndex: 3,
        hints: [
          "Where do time words like 今年 (this year) sit in a Mandarin sentence?",
          "Does Mandarin ever use 是 (shì) before an age with 岁 (suì)?",
        ],
        explanation:
          "**我今年十二岁。** (*Wǒ jīnnián shí'èr suì.*) puts **今年** right after the subject and omits **是** before age. Adding **是** (**我今年是十二岁** / **我是十二岁今年**) is an English 'I am 12' interference error.",
      },
      {
        id: "greetings-routine-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greetings-identity",
        question: "Which question is grammatically **CORRECT** for asking someone's name?",
        options: [
          "你叫什么名字？",
          "你叫什么名字吗？",
          "什么名字你叫？",
          "你是什么名字吗？",
        ],
        answerIndex: 0,
        hints: [
          "Mandarin keeps question words in-situ right where the answer belongs (我叫___).",
          "Check whether 吗 is allowed when 什么 is already inside the sentence!",
        ],
        explanation:
          "**你叫什么名字？** (*Nǐ jiào shénme míngzi?*) keeps **什么名字** in-situ after **叫** with no **吗**. **你叫什么名字吗？** wrongly stacks **吗** onto a wh-question, and **什么名字你叫？** copies English word order.",
      },
      {
        id: "greetings-routine-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "greetings-identity",
        question: "A classmate introduces himself: **我姓林，叫林天乐。** (*Wǒ xìng Lín, jiào Lín Tiānlè.*) What is his **surname**?",
        options: [
          "天乐 (Tiānlè)",
          "林 (Lín)",
          "林天 (Líntiān)",
          "乐 (Lè)",
        ],
        answerIndex: 1,
        hints: [
          "What does the verb 姓 (xìng) specifically introduce?",
          "In Chinese names, does the family name come first or last?",
        ],
        explanation:
          "**林 (Lín)** is his surname because **姓** means 'to be surnamed' and Chinese names always place the family surname before the given name (**天乐** *Tiānlè*).",
      },
      {
        id: "greetings-routine-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greetings-identity",
        question: "Choose the right character to complete the nationality question: **你是___国人？** (*Nǐ shì nǎ guó rén?* — What nationality are you?)",
        options: [
          "那 (nà)",
          "呢 (ne)",
          "哪 (nǎ)",
          "吗 (ma)",
        ],
        answerIndex: 2,
        hints: [
          "You need 'which' (nǎ, 3rd tone), not 'that' (nà, 4th tone).",
          "Asking 'which?' uses your mouth — look for the character with the mouth radical 口 on the left of 那!",
        ],
        explanation:
          "**哪 (nǎ)** has the mouth radical **口** and means 'which' (**哪国人** = which country's person). **那 (nà)** without **口** means 'that', while **呢** and **吗** are sentence-final particles.",
      },
      {
        id: "greetings-routine-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "family-pets",
        question: "Which question naturally asks 'How many people are in your family?'",
        options: [
          "你家有几只人？",
          "你家有几个人吗？",
          "你家是几口人？",
          "你家有几口人？",
        ],
        answerIndex: 3,
        hints: [
          "Which verb expresses 'there are / has' for a family — 是 or 有?",
          "Which classifier counts the 'mouths' in a household?",
        ],
        explanation:
          "**你家有几口人？** (*Nǐ jiā yǒu jǐ kǒu rén?*) pairs **有** (have) with the household classifier **口** (*kǒu*). **只** is for animals, **你家有几个人吗？** illegally mixes **几** with **吗**, and **是** cannot replace **有**.",
      },
      {
        id: "greetings-routine-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "family-pets",
        question: "How do you say 'I do not have a younger sister' in Mandarin?",
        options: [
          "我没有妹妹。",
          "我不有妹妹。",
          "我没是妹妹。",
          "我没有姐姐。",
        ],
        answerIndex: 0,
        hints: [
          "Remember the golden negation rule for 有 (yǒu): can 不 EVER stand in front of 有?",
          "Check the sibling character: 女 + 未 (not yet grown) = younger sister!",
        ],
        explanation:
          "**我没有妹妹。** (*Wǒ méiyǒu mèimei.*) correctly negates **有** with **没** and uses **妹妹** (younger sister). ***我不有妹妹*** is ungrammatical because **有** never takes **不**, and **姐姐** means older sister.",
      },
      {
        id: "greetings-routine-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "family-pets",
        question: "Fill in the two missing measure words: **我家有四___人，我们还养了两___猫。**",
        options: [
          "个 ， 口",
          "口 ， 只",
          "只 ， 口",
          "口 ， 个",
        ],
        answerIndex: 1,
        hints: [
          "The first blank counts total members in a family household.",
          "The second blank counts pet cats (猫 māo).",
        ],
        explanation:
          "**口 ， 只** gives **四口人** (four family members) and **两只猫** (two cats). **只** is standard for small animals like cats and dogs, whereas **个** is not used for cats.",
      },
      {
        id: "greetings-routine-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "family-pets",
        question: "Which sentence uses **和** (*hé*, and) **CORRECTLY**?",
        options: [
          "我叫大卫，和我住在新加坡。",
          "我有一个哥哥，和他上十年级。",
          "我有一个姐姐和一个弟弟。",
          "我早上六点半起床，和七点吃早饭。",
        ],
        answerIndex: 2,
        hints: [
          "Test what sits on both sides of 和 in each sentence: are they nouns or full verb clauses?",
          "Remember: Mandarin 和 can ONLY link nouns or pronouns, never two clauses!",
        ],
        explanation:
          "**我有一个姐姐和一个弟弟。** connects two noun phrases (**一个姐姐** and **一个弟弟**). Every other sentence wrongly uses **和** to join two separate verb clauses — an English 'and' trap!",
      },
      {
        id: "greetings-routine-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "clock-times",
        question: "How do you say **2:30 pm** in Mandarin?",
        options: [
          "下午二点半",
          "两点半下午",
          "上午两点半",
          "下午两点半",
        ],
        answerIndex: 3,
        hints: [
          "Big-to-small order: does 'afternoon' (下午) go before or after the hour?",
          "Which word for 'two' must be used before 点 (o'clock)?",
        ],
        explanation:
          "**下午两点半** (*xiàwǔ liǎng diǎn bàn*) puts **下午** (afternoon) first and uses **两点** (never ***二点***) for 2 o'clock. **两点半下午** follows English order, and **上午** means morning.",
      },
      {
        id: "greetings-routine-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clock-times",
        question: "A station clock at Orchard MRT reads **07:55**. Which Mandarin time expression matches **07:55**?",
        options: [
          "早上差五分八点",
          "早上八点零五分",
          "早上差五分七点",
          "晚上七点五十五分",
        ],
        answerIndex: 0,
        hints: [
          "07:55 is 5 minutes short of 8:00 in the early morning (早上).",
          "In 差 + minutes + 分 + hour + 点, the hour named is the UPCOMING hour!",
        ],
        explanation:
          "**早上差五分八点** (*zǎoshang chà wǔ fēn bā diǎn*) literally means 'early morning, 5 minutes short of 8 o'clock' = 07:55. **差五分七点** would be 06:55, **八点零五分** is 08:05, and **晚上** is evening.",
      },
      {
        id: "greetings-routine-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "daily-routine",
        question: "Choose the sentence with 100% natural Mandarin word order for 'I go to school at 7:15 every morning.'",
        options: [
          "我去上学在七点一刻每天早上。",
          "我每天早上七点一刻去上学。",
          "我在每天早上七点一刻去上学。",
          "我每天七点一刻早上去上学。",
        ],
        answerIndex: 1,
        hints: [
          "Time goes BEFORE the verb 去上学, ordered from biggest unit (每天) to smallest (一刻).",
          "Remember: NEVER put 在 before a clock time!",
        ],
        explanation:
          "**我每天早上七点一刻去上学。** follows **Subject + 每天 → 早上 → 七点一刻 + Verb** with no **在**. **我在每天…** wrongly adds **在** before time, and **七点一刻早上** scrambles big-to-small order.",
      },
      {
        id: "greetings-routine-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "introducing-yourself",
        question: "In a self-introduction, Meimei says: **我十二岁，你呢？** What is she asking with **你呢？**",
        options: [
          "Are you twelve years old too?",
          "Do you know me?",
          "And what about you (how old are you)?",
          "What is your surname?",
        ],
        answerIndex: 2,
        hints: [
          "Look at the statement right before 你呢: 我十二岁 (I am 12 years old).",
          "What job does the bounce-back particle 呢 (ne) perform in dialogue?",
        ],
        explanation:
          "**And what about you (how old are you)?** — **呢** (*ne*) bounces the current topic (age) straight back to the listener without repeating the full question **你今年几岁？**.",
      },
    ],
  },
  {
    id: "greetings-routine-m2",
    title: "Paper 2 · Clock Times, School Routine & Particles",
    questions: [
      {
        id: "greetings-routine-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "clock-times",
        question: "What digital time does **下午三点一刻** (*xiàwǔ sān diǎn yí kè*) represent?",
        options: [
          "15:45",
          "03:15",
          "15:30",
          "15:15",
        ],
        answerIndex: 3,
        hints: [
          "下午 means afternoon (add 12 hours to 3 o'clock).",
          "One 刻 (kè) equals one quarter of an hour — how many minutes is that?",
        ],
        explanation:
          "**15:15** — **下午三点** is 3:00 pm (15:00) and **一刻** (*yí kè*) is one 15-minute quarter. **15:45** would be **下午三点三刻**, and **03:15** is in the middle of the night.",
      },
      {
        id: "greetings-routine-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "daily-routine",
        question: "Look at the character **睡** in **睡觉** (*shuìjiào*, to sleep). Its left-hand radical **目** (*mù*) means:",
        options: [
          "eye (drooping eyelids when you sleep)",
          "sun (daylight)",
          "bed / wood",
          "mouth (snoring)",
        ],
        answerIndex: 0,
        hints: [
          "Compare 目 (two inner strokes, shaped like an upright eye) with 日 (one inner stroke, sun).",
          "Combined with 垂 (chuí, droop), what body part droops when you fall asleep?",
        ],
        explanation:
          "**目** (*mù*) is the **eye** radical: **目** (eye) + **垂** (droop) pictures drooping eyelids when falling asleep! **日** (one inner bar) is the sun radical, **木** is wood, and **口** is mouth.",
      },
      {
        id: "greetings-routine-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "daily-routine",
        question: "Which sentence correctly says 'My older brother does homework at home at 5:00 pm'?",
        options: [
          "哥哥在家下午五点做作业。",
          "哥哥下午五点在家做作业。",
          "哥哥做作业在家下午五点。",
          "哥哥在下午五点在家做作业。",
        ],
        answerIndex: 1,
        hints: [
          "When both Time (下午五点) and Place (在家) appear before the verb, which comes first in STPV?",
          "Check that 在 appears ONLY before the place 家, not before the time!",
        ],
        explanation:
          "**哥哥下午五点在家做作业。** follows the exact **Subject + Time + Place + Verb (STPV)** order. **在家下午五点** swaps Place and Time, and **在下午五点** wrongly puts **在** before a clock time.",
      },
      {
        id: "greetings-routine-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greetings-identity",
        question: "David says: **我是英国人，可是我住在新加坡，上八年级。** Which statement about David is **TRUE**?",
        options: [
          "He is Singaporean and lives in the UK.",
          "He is 8 years old and lives in Singapore.",
          "He is British, lives in Singapore, and is in Year 8.",
          "He is British and studies Chinese for 8 hours a day.",
        ],
        answerIndex: 2,
        hints: [
          "Break down 英国人 (nationality) vs 住在新加坡 (where he lives).",
          "Does 八年级 mean 8 years old (八岁) or Year 8 / Grade 8?",
        ],
        explanation:
          "**He is British, lives in Singapore, and is in Year 8.** **英国人** = British, **住在新加坡** = lives in Singapore, and **上八年级** = attends Year 8 (not 8 years old, which would be **八岁**).",
      },
      {
        id: "greetings-routine-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "family-pets",
        question: "Read Xiaoming's sentence: **我家有五口人：爸爸、妈妈、哥哥、妹妹和我。** How many **siblings** does Xiaoming have?",
        options: [
          "Five",
          "Three",
          "One",
          "Two",
        ],
        answerIndex: 3,
        hints: [
          "Five (五口人) is the total family size including parents and Xiaoming himself.",
          "Count only the brothers/sisters listed between 妈妈 and 我!",
        ],
        explanation:
          "**Two** — Xiaoming has one older brother (**哥哥**) and one younger sister (**妹妹**). **爸爸** and **妈妈** are his parents, and **我** is Xiaoming himself, making 5 family members in total.",
      },
      {
        id: "greetings-routine-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clock-times",
        question: "How do you write **12:05 pm** (just past noon) in Mandarin?",
        options: [
          "中午十二点零五分",
          "中午十两点五分",
          "下午十二点五十分",
          "中午两点零五分",
        ],
        answerIndex: 0,
        hints: [
          "Is the number 12 written 十二 or *十两*?",
          "For single-digit minutes (:05), remember the placeholder 零 (líng)!",
        ],
        explanation:
          "**中午十二点零五分** (*zhōngwǔ shí'èr diǎn líng wǔ fēn*) uses **中午** (noon), **十二点** (12 always uses **二**, never ***十两***!), and **零五分** (:05). **五十分** is :50.",
      },
      {
        id: "greetings-routine-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "daily-routine",
        question: "Put these morning actions into the most logical real-life chronological order:\n1. **去上学**  2. **起床**  3. **吃早饭**  4. **刷牙洗脸**",
        options: [
          "2 → 3 → 4 → 1",
          "2 → 4 → 3 → 1",
          "4 → 2 → 3 → 1",
          "1 → 2 → 4 → 3",
        ],
        answerIndex: 1,
        hints: [
          "You have to get out of bed (起床) before brushing your teeth and washing your face (刷牙洗脸)!",
          "Going to school (去上学) comes last after breakfast (吃早饭).",
        ],
        explanation:
          "**2 → 4 → 3 → 1** represents **起床** (get up) → **刷牙洗脸** (brush teeth & wash face) → **吃早饭** (eat breakfast) → **去上学** (go to school).",
      },
      {
        id: "greetings-routine-m2-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "daily-routine",
        question: "Which Mandarin phrase means 'finish school for the day' (e.g. at 3:30 pm)?",
        options: [
          "上学 (shàngxué)",
          "上课 (shàngkè)",
          "放学 (fàngxué)",
          "睡觉 (shuìjiào)",
        ],
        answerIndex: 2,
        hints: [
          "上 starts school/lessons; which verb literally means 'release from school'?",
          "Check the tones: fàngxué.",
        ],
        explanation:
          "**放学 (fàngxué)** means to finish school for the day. **上学** means to go to school, **上课** means to start/attend class, and **睡觉** means to go to bed.",
      },
      {
        id: "greetings-routine-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "introducing-yourself",
        question: "How do you say '**After finishing school**, I go home at 4:00' in natural Mandarin?",
        options: [
          "以后放学，我四点回家。",
          "放学以后，我四点回在家。",
          "以后放学，我去回家四点。",
          "放学以后，我四点回家。",
        ],
        answerIndex: 3,
        hints: [
          "Does 以后 (after) stand BEFORE or AFTER the event 放学 in Mandarin?",
          "Check the verb 回家 — does it ever take 在 in the middle?",
        ],
        explanation:
          "**放学以后，我四点回家。** places **以后** *after* **放学** ('finishing-school-afterwards') and uses clean **四点回家**. ***以后放学*** copies English word order, and ***回在家*** wrongly inserts **在**.",
      },
      {
        id: "greetings-routine-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greetings-identity",
        question: "Which sentence correctly uses the adverb **也** (*yě*, also / too)?",
        options: [
          "我姐姐也上八年级。",
          "我姐姐上八年级也。",
          "也我姐姐上八年级。",
          "我姐姐上也八年级。",
        ],
        answerIndex: 0,
        hints: [
          "Unlike English 'too' at the end of a sentence, where must Mandarin adverbs like 也 stand?",
          "Place 也 directly after the subject (我姐姐) and right BEFORE the verb (上)!",
        ],
        explanation:
          "**我姐姐也上八年级。** places **也** immediately before the verb **上**. Putting **也** at the end (**…八年级也**) or before the subject (**也我姐姐…**) breaks Mandarin adverb placement.",
      },
      {
        id: "greetings-routine-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "family-pets",
        question: "Look at the spoken tone sandhi of **一** (*yī*). In which phrase is **一** pronounced in the **rising 2nd tone (*yí*)** rather than the falling 4th tone (*yì*)?",
        options: [
          "一口人 (one family member)",
          "一个哥哥 (one older brother)",
          "一只小狗 (one puppy)",
          "一起上学 (go to school together)",
        ],
        answerIndex: 1,
        hints: [
          "Rule for 一 (yī): it becomes rising 2nd tone yí BEFORE a 4th-tone syllable, and falling 4th tone yì before 1st, 2nd or 3rd tones!",
          "Check the underlying tone of 口 (kǒu, 3rd), 个 (gè, 4th), 只 (zhī, 1st), and 起 (qǐ, 3rd).",
        ],
        explanation:
          "**一个哥哥** (*yí gè gēge*) — because **个** (*gè*) originates as a 4th tone, **一** rises to **yí**. Before **只** (1st tone) and **口 / 起** (3rd tones), **一** shifts to falling 4th tone **yì** (*yì kǒu rén, yì zhī xiǎogǒu, yìqǐ*).",
      },
      {
        id: "greetings-routine-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greetings-identity",
        question: "Why is ***我是很高兴*** considered unnatural or wrong when saying 'I am happy'?",
        options: [
          "高兴 is a verb, so it needs 了 instead of 是.",
          "很 can only be used with negative sentences.",
          "Adjectives in Mandarin link to the subject with 很 (我很高兴), not with the noun-copula 是.",
          "高兴 can only describe teachers, not students.",
        ],
        answerIndex: 2,
        hints: [
          "What part of speech is 高兴 (gāoxìng) — a noun or an adjective?",
          "Recall the rule: 是 links nouns (我是学生), while 很 links adjectives!",
        ],
        explanation:
          "**Adjectives in Mandarin link to the subject with 很 (我很高兴), not with the noun-copula 是.** Mandarin adjectives act as stative verbs, so adding **是** creates a textbook English-interference error.",
      },
      {
        id: "greetings-routine-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "clock-times",
        question: "Linlin catches the school bus at **早上六点三刻** (*zǎoshang liù diǎn sān kè*), and the ride takes **20 minutes**. At what time does she reach school?",
        options: [
          "早上六点五十分 (06:50)",
          "早上七点一刻 (07:15)",
          "早上六点三十五分 (06:35)",
          "早上七点零五分 (07:05)",
        ],
        answerIndex: 3,
        hints: [
          "First convert 六点三刻 into digital time: 3 quarters (三刻) = 3 × 15 minutes = 45 minutes.",
          "Now add 20 minutes to 06:45!",
        ],
        explanation:
          "**早上七点零五分 (07:05)** — **六点三刻** is 06:45 (three 15-minute quarters). Adding 20 minutes gives 07:05, which in Mandarin requires **零** (*líng*) before single-digit minutes: **七点零五分**.",
      },
      {
        id: "greetings-routine-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "introducing-yourself",
        question: "Which sentence best combines 'I get up at 6:30 am' and 'first brush my teeth, then eat breakfast'?",
        options: [
          "我早上六点半起床，先刷牙，然后吃早饭。",
          "我早上六点半起床，然后刷牙，先吃早饭。",
          "我起床早上六点半，先刷我的牙，和吃早饭。",
          "我在六点半起床，先早饭，然后刷牙。",
        ],
        answerIndex: 0,
        hints: [
          "Check the sequence connector pair for 'first… then…': 先…然后….",
          "Make sure 早上六点半 precedes 起床 without 在, and 吃早饭 keeps its verb 吃!",
        ],
        explanation:
          "**我早上六点半起床，先刷牙，然后吃早饭。** uses STPV time placement and the natural sequence pair **先…然后…** (*xiān… ránhòu…*). Reversing **然后** and **先** flips the logic, and **和** cannot link verb clauses.",
      },
      {
        id: "greetings-routine-m2-q15",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "family-pets",
        question: "Which pair of family members refers to **Dad's parents** (paternal grandfather and grandmother)?",
        options: [
          "哥哥 、 姐姐",
          "爷爷 、 奶奶",
          "爸爸 、 妈妈",
          "弟弟 、 妹妹",
        ],
        answerIndex: 1,
        hints: [
          "Look for the elder generation: one has the father component 父 on top, the other has the female radical 女.",
          "哥哥/姐姐 and 弟弟/妹妹 are siblings!",
        ],
        explanation:
          "**爷爷 、 奶奶** (*yéye, nǎinai*) mean paternal grandfather and grandmother. **爸爸、妈妈** are parents, while **哥哥、姐姐** and **弟弟、妹妹** are older and younger siblings.",
      },
    ],
  },
  {
    id: "greetings-routine-m3",
    title: "Paper 3 · Reading Comprehension & IGCSE Traps",
    questions: [
      {
        id: "greetings-routine-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "introducing-yourself",
        question:
          "Read this message from a penpal:\n> **你好！我叫张文博，今年十三岁，是中国人，现在跟爸爸妈妈一起住在新加坡。我是独生子，没有兄弟姐妹，可是我家养了一只可爱的小白猫。**\n\nHow many **people** live in Zhang Wenbo's household?",
        options: [
          "Four people",
          "Two people",
          "Three people",
          "Five people",
        ],
        answerIndex: 2,
        hints: [
          "Look carefully at 跟爸爸妈妈一起住 and 没有兄弟姐妹 (no brothers or sisters).",
          "Don't count the pet cat (小白猫) as a person!",
        ],
        explanation:
          "**Three people** — Wenbo lives with his dad and mum (**爸爸妈妈**), and **没有兄弟姐妹** confirms he has no siblings (**独生子** = only child). The white cat (**一只小白猫**) is a pet, not counted in **几口人**!",
      },
      {
        id: "greetings-routine-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "daily-routine",
        question:
          "Read Meimei's afternoon schedule:\n> **我们下午三点一刻放学。我四点回到家，先喝一杯牛奶，四点半开始做作业，晚上六点半跟家人一起吃晚饭。**\n\nWhat does Meimei do at **4:30 pm**?",
        options: [
          "She finishes school.",
          "She arrives home and drinks milk.",
          "She eats dinner with her family.",
          "She starts doing her homework.",
        ],
        answerIndex: 3,
        hints: [
          "Match each time marker to the action right AFTER it!",
          "Find 四点半 in the passage and read the verb phrase immediately following it.",
        ],
        explanation:
          "**She starts doing her homework** — **四点半开始做作业** means she starts homework at 4:30. She finishes school at 3:15 (**三点一刻**), gets home at 4:00 (**四点**), and eats dinner at 6:30 (**六点半**).",
      },
      {
        id: "greetings-routine-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "greetings-identity",
        question: "If a classmate steps on your foot by accident and says **对不起！** (*Duìbuqǐ!*), what should you reply?",
        options: [
          "没关系！ (Méi guānxi!)",
          "不客气！ (Bú kèqi!)",
          "请问！ (Qǐngwèn!)",
          "早上好！ (Zǎoshang hǎo!)",
        ],
        answerIndex: 0,
        hints: [
          "对不起 means 'I'm sorry'.",
          "Distinguish 'It doesn't matter / No problem' from 'You're welcome'!",
        ],
        explanation:
          "**没关系！ (Méi guānxi!)** ('No problem / It doesn't matter') is the natural paired response to **对不起** (sorry). **不客气** replies to **谢谢** (thank you).",
      },
      {
        id: "greetings-routine-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greetings-identity",
        question: "You want to write about your older sister: 'She is 15 years old this year.' Which pronoun character MUST you choose?",
        options: [
          "他今年十五岁。",
          "她今年十五岁。",
          "你今年十五岁。",
          "我今年十五岁。",
        ],
        answerIndex: 1,
        hints: [
          "Both 'he' and 'she' sound like tā in spoken Mandarin, so look closely at the left-hand radical!",
          "Which character has the female radical 女 on the left?",
        ],
        explanation:
          "**她今年十五岁。** uses **她** (*tā*, she) with the female radical **女** to refer to an older sister. **他** (*tā*) has the standing person radical **亻** and refers to 'he/him'.",
      },
      {
        id: "greetings-routine-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "clock-times",
        question: "Which of these four Mandarin time expressions represents the **EARLIEST** time in a single day?",
        options: [
          "上午九点一刻",
          "早上七点半",
          "早上差一刻七点",
          "早上七点零五分",
        ],
        answerIndex: 2,
        hints: [
          "Convert all four options into 24-hour digital times first!",
          "Pay close attention to 差一刻七点: does 差 subtract 15 minutes from 7:00 or add to it?",
        ],
        explanation:
          "**早上差一刻七点** is **06:45** ('a quarter short of 7:00 am'), making it earlier than **早上七点零五分** (07:05), **早上七点半** (07:30), and **上午九点一刻** (09:15).",
      },
      {
        id: "greetings-routine-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "daily-routine",
        question: "Spot the **ONE grammatically flawless** Mandarin routine sentence below:",
        options: [
          "我每天早上七点早饭。",
          "弟弟晚上九点半在床睡觉。",
          "姐姐下午四点去回家。",
          "我们上午八点半上中文课。",
        ],
        answerIndex: 3,
        hints: [
          "Check if a meal sentence is missing its verb 吃, or if 回家 has an extra 去.",
          "Remember that 上课 is separable, allowing 中文 (Chinese) to sit neatly between 上 and 课!",
        ],
        explanation:
          "**我们上午八点半上中文课。** correctly inserts **中文** inside separable **上课** after the big-to-small time **上午八点半**. ***七点早饭*** forgets the verb **吃**, and ***去回家*** wrongly adds **去** before **回家**.",
      },
      {
        id: "greetings-routine-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "greetings-identity",
        question: "Which question-and-answer pair is **100% grammatical**?",
        options: [
          "你是八年级的学生吗？——是的，我是。",
          "你是哪国人吗？——我是新加坡人。",
          "你今年几岁吗？——我十二岁。",
          "他是谁吗？——他是我哥哥。",
        ],
        answerIndex: 0,
        hints: [
          "Check the 吗 rule: 吗 ONLY goes on statements turned into yes/no questions!",
          "Eliminate any question that combines 吗 with 哪, 几, or 谁.",
        ],
        explanation:
          "**你是八年级的学生吗？——是的，我是。** is a genuine yes/no question, so **吗** is right at home. The other three illegally attach **吗** onto sentences that already contain wh-words (**哪国, 几, 谁**).",
      },
      {
        id: "greetings-routine-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "family-pets",
        question:
          "Examine the radical clues inside these four characters from our topic:\n- **妈** (*mā*)   **姓** (*xìng*)   **家** (*jiā*)   **问** (*wèn*)\n\nWhich explanation of a character's structure is **ACCURATE**?",
        options: [
          "问 puts 日 (sun) inside 门 (door) because people ask questions in the morning.",
          "家 puts 豕 (pig) under 宀 (roof) because keeping livestock under a roof meant a settled household.",
          "妈 uses 马 (horse) for meaning because mothers rode horses in ancient China.",
          "姓 uses 心 (heart) on the left to show family love.",
        ],
        answerIndex: 1,
        hints: [
          "Check each radical carefully: what is inside 门 in 问? Why is 马 in 妈 (sound vs meaning)?",
          "Recall what animal 豕 represents underneath the roof radical 宀 in 家!",
        ],
        explanation:
          "**家 puts 豕 (pig) under 宀 (roof)** to represent a settled home. In **问**, **口** (mouth, not sun!) sits inside **门** (door); in **妈**, **马** (*mǎ*) provides the *sound*, not the meaning; and **姓** uses **女 + 生**, not **心**.",
      },
      {
        id: "greetings-routine-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clock-times",
        question: "Why do Mandarin speakers say **两点** (*liǎng diǎn*) for 2:00, yet **十二点** (*shí'èr diǎn*) for 12:00 and **二十分** (*èrshí fēn*) for 20 minutes?",
        options: [
          "Because 点 can never appear with 二 in any number.",
          "Because 下午 requires 两 while 早上 requires 二.",
          "Because standalone 2 before a classifier/unit uses 两, whereas multi-digit numbers (12, 20, 22) keep 二.",
          "Because 十二点 is only used in written Chinese, never spoken.",
        ],
        answerIndex: 2,
        hints: [
          "Compare standalone '2' + unit (两点) with numbers like 12 (十二) and 20 (二十).",
          "Does Mandarin ever say *十两* or *两十*?",
        ],
        explanation:
          "**Standalone 2 before a classifier/unit uses 两, whereas multi-digit numbers (12, 20, 22) keep 二.** Mandarin never says ***十两*** or ***两十***, so 12:20 is **十二点二十分** while 2:00 is **两点**.",
      },
      {
        id: "greetings-routine-m3-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "greetings-identity",
        question: "You want to politely ask a security uncle at Sentosa (**圣淘沙**) what time it is. How should you begin your question?",
        options: [
          "不客气，现在几点？",
          "再见，现在几点？",
          "没关系，现在几点？",
          "请问，现在几点？",
        ],
        answerIndex: 3,
        hints: [
          "Which two-character phrase literally means 'please allow me to ask / excuse me, may I ask'?",
          "Look for 请 (please) + 问 (ask).",
        ],
        explanation:
          "**请问，现在几点？** (*Qǐngwèn, xiànzài jǐ diǎn?*) opens politely with **请问** ('Excuse me, may I ask…'). **不客气** = you're welcome, **再见** = goodbye, and **没关系** = no problem.",
      },
      {
        id: "greetings-routine-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "introducing-yourself",
        question:
          "Read this excerpt from Leo's self-introduction:\n> **我爸爸是英国人，妈妈是新加坡人。我有一个哥哥，他今年十五岁，上十年级；我十二岁，上八年级。我们每天早上六点四十五分一起吃早饭。**\n\nWhich detail is **CONFIRMED** by the passage?",
        options: [
          "Leo is 3 years younger than his older brother, and they eat breakfast together at 6:45 am.",
          "Leo and his brother are in the same school grade.",
          "Both of Leo's parents are British.",
          "Leo eats breakfast alone at 6:15 am.",
        ],
        answerIndex: 0,
        hints: [
          "Compare the brother's age (十五岁 = 15) with Leo's age (十二岁 = 12).",
          "Convert 六点四十五分 into digital time and check 一起 (together).",
        ],
        explanation:
          "**Leo is 3 years younger than his older brother (15 − 12 = 3), and they eat breakfast together at 6:45 am** (**六点四十五分一起吃早饭**). His dad is British while his mum is Singaporean, and his brother is in Year 10 (**十年级**).",
      },
      {
        id: "greetings-routine-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "family-pets",
        question: "Which verb specifically means 'to keep / raise' when talking about family pets (**我家___了一只小狗**)?",
        options: [
          "住 (zhù)",
          "养 (yǎng)",
          "姓 (xìng)",
          "叫 (jiào)",
        ],
        answerIndex: 1,
        hints: [
          "住 means to live/reside, 姓 is surname, and 叫 is to be called.",
          "Look for the verb with 羊 (sheep) on top, originally meaning to tend/raise animals!",
        ],
        explanation:
          "**养 (yǎng)** means to keep or raise pets/animals (**养宠物 / 养了一只小狗**). **住** means to live in a place, **姓** means to be surnamed, and **叫** means to be called.",
      },
      {
        id: "greetings-routine-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "daily-routine",
        question: "An IGCSE roleplay card asks: **你每天晚上几点睡觉？** Which reply directly and accurately answers the examiner?",
        options: [
          "我每天早上六点半睡觉。",
          "我睡觉在晚上九点半。",
          "我每天晚上九点半睡觉。",
          "我是晚上九点半起床。",
        ],
        answerIndex: 2,
        hints: [
          "Mirror the examiner's sentence frame: swap 你 → 我, and replace 几点 with a sensible bedtime!",
          "Keep 晚上九点半 BEFORE 睡觉 with no 在.",
        ],
        explanation:
          "**我每天晚上九点半睡觉。** mirrors the prompt's exact STPV frame and gives a sensible evening bedtime (9:30 pm). **早上六点半** is early morning, **睡觉在…** breaks word order, and **起床** means getting up.",
      },
      {
        id: "greetings-routine-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "introducing-yourself",
        question: "Which sentence connects two clauses smoothly **WITHOUT** falling into any English-to-Mandarin grammar trap?",
        options: [
          "我没有哥哥，和我不有弟弟。",
          "我是十三岁，可是我妹妹是十岁。",
          "在早上七点我吃早饭，以后我去上学。",
          "我没有哥哥，也没有弟弟，只有一个妹妹。",
        ],
        answerIndex: 3,
        hints: [
          "Check every sentence for classic traps: *不有*, *是 + age*, *在 + clock time*, and standalone *以后 + clause*.",
          "Look at how 没有哥哥，也没有弟弟 uses 也 before the second 没有!",
        ],
        explanation:
          "**我没有哥哥，也没有弟弟，只有一个妹妹。** ('I don't have an older brother, nor do I have a younger brother; I only have one younger sister') is 100% idiomatic. The distractors commit classic errors: ***和 / 不有***, ***是十三岁***, and ***在早上七点***.",
      },
      {
        id: "greetings-routine-m3-q15",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "clock-times",
        question: "Which Mandarin word means **noon / midday** (around 12:00–1:00 pm)?",
        options: [
          "早上 (zǎoshang)",
          "中午 (zhōngwǔ)",
          "下午 (xiàwǔ)",
          "晚上 (wǎnshang)",
        ],
        answerIndex: 1,
        hints: [
          "午 (wǔ) means noon: 上午 is before noon, 下午 is after noon.",
          "Which character means 'middle'?",
        ],
        explanation:
          "**中午 (zhōngwǔ)** literally means 'middle of noon' (midday). **早上** is early morning, **下午** is afternoon, and **晚上** is evening.",
      },
    ],
  },
];
