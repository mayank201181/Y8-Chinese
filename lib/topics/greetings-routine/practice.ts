import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "greetings-routine-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "greetings-identity",
      question: "How do you politely say 'Hello' to an older relative or teacher in Mandarin?",
      options: [
        "您好！ (Nín hǎo!)",
        "再见！ (Zàijiàn!)",
        "对不起！ (Duìbuqǐ!)",
        "不客气！ (Bú kèqi!)",
      ],
      answerIndex: 0,
      hints: [
        "Look for the respectful pronoun 您 (nín) with the heart radical 心 underneath 你.",
      ],
      explanation:
        "**您好！ (Nín hǎo!)** is the respectful greeting for teachers and elders. **再见** means goodbye, **对不起** means sorry, and **不客气** means you're welcome.",
    },
    {
      id: "greetings-routine-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "greetings-identity",
      question: "Translate into Mandarin (Hanzi or tone-marked Pinyin): **'I am Singaporean.'**",
      answer: {
        type: "text",
        accept: [
          "我是新加坡人",
          "我是新加坡人。",
          "Wǒ shì Xīnjiāpōrén",
          "Wǒ shì Xīnjiāpō rén",
        ],
        display: "我是新加坡人。 (Wǒ shì Xīnjiāpōrén.)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["我是新加坡", "Wǒ shì Xīnjiāpō"] },
          feedback: "Almost! 新加坡 is the country 'Singapore' — add 人 (rén, person) at the end to say 'Singaporean'!",
        },
      ],
      hints: [
        "Country 新加坡 (Xīnjiāpō) + 人 (rén) = Singaporean.",
      ],
      solution: [
        "Use **我是** (*Wǒ shì*, I am) + **新加坡人** (*Xīnjiāpōrén*, Singaporean).",
        "Full sentence: **我是新加坡人。**",
      ],
    },
    {
      id: "greetings-routine-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "family-pets",
      question: "Fill in the missing measure word for total family members: **你家有几___人？** (Type the single Hanzi character or Pinyin.)",
      answer: {
        type: "text",
        accept: ["口", "kǒu"],
        display: "口 (kǒu)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["只", "zhī"] },
          feedback: "只 (zhī) counts pets and small animals — use 口 (kǒu, 'mouths') for household family size!",
        },
      ],
      hints: [
        "Think of 'mouths to feed' in a household!",
      ],
      solution: [
        "Mandarin uses **口** (*kǒu*) in **你家有几口人？** (*Nǐ jiā yǒu jǐ kǒu rén?*) to ask how many people are in your family.",
      ],
    },
    {
      id: "greetings-routine-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "family-pets",
      question: "Which sentence correctly translates 'My family keeps one puppy'?",
      options: [
        "我家养了一口小狗。",
        "我家养了一只小狗。",
        "我家不有小狗。",
        "我家住了一只小狗。",
      ],
      answerIndex: 1,
      hints: [
        "Use the verb 养 (yǎng, keep/raise).",
        "Dogs and cats take the classifier 只 (zhī), not 口!",
      ],
      explanation:
        "**我家养了一只小狗。** pairs **养** (keep pets) with the animal classifier **只** (*zhī*). **口** is for family members, ***不有*** is ungrammatical, and **住** means to reside.",
    },
    {
      id: "greetings-routine-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "clock-times",
      question: "Write **7:30 am** (early morning) in Mandarin (Hanzi or Pinyin):",
      answer: {
        type: "text",
        accept: [
          "早上七点半",
          "zǎoshang qī diǎn bàn",
          "早上七点三十分",
          "zǎoshang qī diǎn sānshí fēn",
        ],
        display: "早上七点半 (zǎoshang qī diǎn bàn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["七点半早上", "qī diǎn bàn zǎoshang"] },
          feedback: "Big-to-small order! Put 早上 (early morning) BEFORE 七点半 (7:30).",
        },
      ],
      hints: [
        "Put the part of the day (早上 zǎoshang) BEFORE the hour!",
        "Use 点 (diǎn) for o'clock and 半 (bàn) for half past.",
      ],
      solution: [
        "Big-to-small order: **早上** (*zǎoshang*, early morning) → **七点** (*qī diǎn*, 7 o'clock) → **半** (*bàn*, half).",
        "Answer: **早上七点半** (*zǎoshang qī diǎn bàn*).",
      ],
    },
    {
      id: "greetings-routine-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "clock-times",
      question: "What digital 24-hour time does **晚上差十分九点** (*wǎnshang chà shí fēn jiǔ diǎn*) mean?",
      options: [
        "21:10",
        "09:10",
        "20:50",
        "08:50",
      ],
      answerIndex: 2,
      hints: [
        "晚上 means evening (pm), so 9 o'clock is 21:00.",
        "差十分九点 means '10 minutes short of 9 o'clock' — subtract 10 minutes from 21:00!",
      ],
      explanation:
        "**20:50** — **晚上** places it in the evening, and **差十分九点** means 10 minutes before 9:00 pm (21:00 − 0:10 = 20:50). **21:10** would be **晚上九点十分**.",
    },
    {
      id: "greetings-routine-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "daily-routine",
      question: "Unscramble these words into a natural Mandarin sentence: **起床 / 六点半 / 我 / 早上**",
      answer: {
        type: "text",
        accept: [
          "我早上六点半起床",
          "我早上六点半起床。",
          "早上六点半我起床",
          "早上六点半我起床。",
          "Wǒ zǎoshang liù diǎn bàn qǐchuáng",
        ],
        display: "我早上六点半起床。 (Wǒ zǎoshang liù diǎn bàn qǐchuáng.)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["我起床早上六点半", "Wǒ qǐchuáng zǎoshang liù diǎn bàn"] },
          feedback: "Time NEVER goes at the end in Mandarin! Move 早上六点半 BEFORE the verb 起床.",
        },
      ],
      hints: [
        "Follow Subject + Time (Big → Small) + Action Verb.",
        "Put 早上 before 六点半, and place 起床 at the very end!",
      ],
      solution: [
        "Subject **我** + Time **早上六点半** + Verb **起床**.",
        "Result: **我早上六点半起床。**",
      ],
    },
    {
      id: "greetings-routine-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "daily-routine",
      question: "Which verb phrase means **'to do homework'**?",
      options: [
        "吃晚饭 (chī wǎnfàn)",
        "刷牙 (shuā yá)",
        "放学 (fàngxué)",
        "做作业 (zuò zuòyè)",
      ],
      answerIndex: 3,
      hints: [
        "做 (zuò) means 'to do / make'.",
        "作业 (zuòyè) means 'schoolwork / homework'.",
      ],
      explanation:
        "**做作业 (zuò zuòyè)** means to do homework. **吃晚饭** is eat dinner, **刷牙** is brush teeth, and **放学** is finish school.",
    },
    {
      id: "greetings-routine-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "greetings-identity",
      question: "Complete the bounce-back question with ONE particle (Hanzi or Pinyin): **我上八年级，你___？** (*I am in Year 8; what about you?*)",
      answer: {
        type: "text",
        accept: ["呢", "ne"],
        display: "呢 (ne)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["吗", "ma"] },
          feedback: "吗 turns a statement into a yes/no question (*你吗？* doesn't work!). Use 呢 (ne) for 'And what about you?'.",
        },
      ],
      hints: [
        "Which particle bounces the current topic back to the listener ('what about you?')?",
        "It has the mouth radical 口 + 尼!",
      ],
      solution: [
        "**呢** (*ne*) means 'and what about…?' after a noun or pronoun: **你呢？** (*Nǐ ne?*).",
      ],
    },
    {
      id: "greetings-routine-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "introducing-yourself",
      question: "Choose the natural Mandarin way to say '**After eating breakfast**, I go to school.'",
      options: [
        "吃早饭以后，我去上学。",
        "以后吃早饭，我去上学。",
        "吃早饭以后，和我去上学。",
        "早饭以后，我去上学学校。",
      ],
      answerIndex: 0,
      hints: [
        "In Mandarin, 以后 (yǐhòu, after) stands AFTER the action phrase 吃早饭!",
        "Check that 和 is not misused before a verb clause.",
      ],
      explanation:
        "**吃早饭以后，我去上学。** puts **以后** after **吃早饭** and links cleanly to **我去上学**. ***以后吃早饭*** copies English order, and **和** cannot join clauses.",
    },
  ],
  papers: [
    {
      id: "greetings-routine-p1",
      title: "Practice Paper 1 · Personal Profile, Family & Morning Routine",
      questions: [
        {
          id: "greetings-routine-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "greetings-identity",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'What is your name?'**",
          answer: {
            type: "text",
            accept: [
              "你叫什么名字",
              "你叫什么名字？",
              "请问你叫什么名字",
              "请问，你叫什么名字",
              "Nǐ jiào shénme míngzi",
              "Qǐngwèn nǐ jiào shénme míngzi",
            ],
            display: "你叫什么名字？ (Nǐ jiào shénme míngzi?)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["你叫什么名字吗", "Nǐ jiào shénme míngzi ma"] },
              feedback: "Delete 吗! Sentences with 什么 (what) are already questions — never add 吗 on top.",
            },
          ],
          hints: [
            "Keep Mandarin's in-situ order: You (你) + are called (叫) + what name (什么名字)?",
          ],
          solution: [
            "Subject **你** + verb **叫** + question phrase **什么名字**.",
            "Answer: **你叫什么名字？** (*Nǐ jiào shénme míngzi?*).",
          ],
        },
        {
          id: "greetings-routine-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "greetings-identity",
          question: "Read: **大家好！我姓王，叫王小文，今年十三岁。** How old is Wang Xiaowen? (Give a number.)",
          answer: {
            type: "number",
            value: 13,
          },
          hints: [
            "Look at the number right before 岁 (suì, years old): 十三.",
          ],
          solution: [
            "**十三岁** (*shísān suì*) means **13** years old (**十** = 10 + **三** = 3).",
          ],
        },
        {
          id: "greetings-routine-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "greetings-identity",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'I am in Year 8.'** (Use **上** + **八年级**.)",
          answer: {
            type: "text",
            accept: [
              "我上八年级",
              "我上八年级。",
              "Wǒ shàng bā niánjí",
            ],
            display: "我上八年级。 (Wǒ shàng bā niánjí.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我是八年级", "Wǒ shì bā niánjí"] },
              feedback: "Use the verb 上 (shàng, attend) directly before 八年级: 我上八年级 (or 我是八年级的学生).",
            },
          ],
          hints: [
            "Start with 我 (Wǒ) + the verb 上 (shàng, attend).",
            "Follow with 八年级 (bā niánjí, Year 8).",
          ],
          solution: [
            "In Mandarin, attending a school year uses **上** (*shàng*): **我上八年级。** (*Wǒ shàng bā niánjí.*).",
          ],
        },
        {
          id: "greetings-routine-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "family-pets",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'There are four people in my family.'**",
          answer: {
            type: "text",
            accept: [
              "我家有四口人",
              "我家有四口人。",
              "我们家有四口人",
              "Wǒ jiā yǒu sì kǒu rén",
              "Wǒmen jiā yǒu sì kǒu rén",
            ],
            display: "我家有四口人。 (Wǒ jiā yǒu sì kǒu rén.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我家是四口人", "Wǒ jiā shì sì kǒu rén"] },
              feedback: "Use 有 (yǒu, has / there are) rather than 是: 我家有四口人。",
            },
          ],
          hints: [
            "Start with 我家有… (My family has…).",
            "Use the household measure word 口 (kǒu) between 四 and 人.",
          ],
          solution: [
            "Combine **我家有** (*Wǒ jiā yǒu*) + **四口人** (*sì kǒu rén*) = **我家有四口人。**",
          ],
        },
        {
          id: "greetings-routine-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "family-pets",
          question: "Negate this sentence in Mandarin: **我有一个弟弟。** → **'I do not have a younger brother.'**",
          answer: {
            type: "text",
            accept: [
              "我没有弟弟",
              "我没有弟弟。",
              "Wǒ méiyǒu dìdi",
              "Wǒ méi yǒu dìdi",
            ],
            display: "我没有弟弟。 (Wǒ méiyǒu dìdi.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我不有弟弟", "Wǒ bù yǒu dìdi"] },
              feedback: "Trap alert! 有 is NEVER negated with 不 — always use 没有 (méiyǒu)!",
            },
            {
              spec: { type: "text", accept: ["我没有一个弟弟", "Wǒ méiyǒu yí gè dìdi"] },
              feedback: "Drop 一个 in the negative! Just say 我没有弟弟 (Wǒ méiyǒu dìdi).",
            },
          ],
          hints: [
            "Remember the golden negation rule for 有: use 没有 (méiyǒu).",
            "Drop 一个 (one) when saying you have none at all!",
          ],
          solution: [
            "Replace **有一个** with **没有**: **我没有弟弟。** (*Wǒ méiyǒu dìdi.*).",
          ],
        },
        {
          id: "greetings-routine-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "family-pets",
          question: "Read: **我家有爸爸、妈妈、两个姐姐和我，我们还养了一只小狗和两只猫。** How many **pets** does the family keep in total? (Give a number.)",
          answer: {
            type: "number",
            value: 3,
          },
          hints: [
            "Ignore the 5 family members in the first clause!",
            "Add the number of puppies (一只小狗) and cats (两只猫) after 养了.",
          ],
          solution: [
            "**一只小狗** (1 puppy) + **两只猫** (2 cats) = **3** pets in total.",
          ],
        },
        {
          id: "greetings-routine-p1-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "clock-times",
          question: "Write **2:00 pm** in Mandarin (Hanzi or Pinyin):",
          answer: {
            type: "text",
            accept: [
              "下午两点",
              "xiàwǔ liǎng diǎn",
              "下午两点整",
              "xiàwǔ liǎng diǎn zhěng",
              "下午两点钟",
              "xiàwǔ liǎng diǎn zhōng",
            ],
            display: "下午两点 (xiàwǔ liǎng diǎn)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["下午二点", "xiàwǔ èr diǎn"] },
              feedback: "Watch out! 2 o'clock ALWAYS uses 两 (liǎng diǎn), never *二点*!",
            },
          ],
          hints: [
            "Put 下午 (afternoon) first, then '2 o'clock' using 两 (liǎng).",
          ],
          solution: [
            "Period **下午** (*xiàwǔ*) + **两点** (*liǎng diǎn*) = **下午两点**.",
          ],
        },
        {
          id: "greetings-routine-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "clock-times",
          question: "Convert **早上六点三刻** (*zǎoshang liù diǎn sān kè*) into 24-hour digital format **HH:MM** (e.g. `08:30`):",
          answer: {
            type: "text",
            accept: ["06:45", "6:45", "6:45 am", "06:45 am"],
            display: "06:45",
          },
          traps: [
            {
              spec: { type: "text", accept: ["06:15", "6:15"] },
              feedback: "06:15 is 六点一刻 (one quarter). Here it says 三刻 (THREE quarters = 45 minutes)!",
            },
            {
              spec: { type: "text", accept: ["06:03", "6:03", "06:30", "6:30"] },
              feedback: "One 刻 (kè) is 15 minutes, so 三刻 = 3 × 15 = 45 minutes!",
            },
          ],
          hints: [
            "早上六点 is 06:00 in the morning.",
            "One 刻 (kè) = 15 minutes, so work out 3 × 15 minutes for 三刻!",
          ],
          solution: [
            "**早上六点** = 06:00, and **三刻** = 3 × 15 = 45 minutes.",
            "Digital time: **06:45**.",
          ],
        },
        {
          id: "greetings-routine-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "daily-routine",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'I eat breakfast at 7:00 am.'** (Use **早上**.)",
          answer: {
            type: "text",
            accept: [
              "我早上七点吃早饭",
              "我早上七点吃早饭。",
              "早上七点我吃早饭",
              "我早上七点吃早餐",
              "我早上七点吃早餐。",
              "Wǒ zǎoshang qī diǎn chī zǎofàn",
              "Wǒ zǎoshang qī diǎn chī zǎocān",
            ],
            display: "我早上七点吃早饭。 (Wǒ zǎoshang qī diǎn chī zǎofàn.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我在早上七点吃早饭", "Wǒ zài zǎoshang qī diǎn chī zǎofàn"] },
              feedback: "Drop 在! Mandarin NEVER puts 在 before clock times — just write 我早上七点吃早饭。",
            },
            {
              spec: { type: "text", accept: ["我早上七点早饭", "Wǒ zǎoshang qī diǎn zǎofàn"] },
              feedback: "Don't forget the verb 吃 (chī, eat) before 早饭!",
            },
          ],
          hints: [
            "Follow Subject (我) + Time (早上七点, no 在!) + Action (吃早饭).",
            "Make sure you include the verb 吃 before 早饭.",
          ],
          solution: [
            "Subject **我** + Time **早上七点** + Verb-Object **吃早饭** = **我早上七点吃早饭。**",
          ],
        },
        {
          id: "greetings-routine-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "daily-routine",
          question: "Unscramble into a grammatical Mandarin sentence: **放学 / 下午 / 我们 / 三点半**",
          answer: {
            type: "text",
            accept: [
              "我们下午三点半放学",
              "我们下午三点半放学。",
              "下午三点半我们放学",
              "下午三点半我们放学。",
              "Wǒmen xiàwǔ sān diǎn bàn fàngxué",
            ],
            display: "我们下午三点半放学。 (Wǒmen xiàwǔ sān diǎn bàn fàngxué.)",
          },
          hints: [
            "Start with 我们 (we), then put the time in big-to-small order (下午 → 三点半).",
            "Place the verb 放学 (finish school) at the end.",
          ],
          solution: [
            "**我们** (we) + **下午三点半** (3:30 pm) + **放学** (finish school) = **我们下午三点半放学。**",
          ],
        },
        {
          id: "greetings-routine-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "greetings-identity",
          question: "Translate into English: **我是英国人，可是我住在新加坡。**",
          answer: {
            type: "text",
            accept: [
              "I am British, but I live in Singapore",
              "I am British, however I live in Singapore",
              "I'm British, but I live in Singapore",
              "I'm British, however I live in Singapore",
              "I am English, but I live in Singapore",
              "I am from the UK, but I live in Singapore",
              "I'm from the UK, but I live in Singapore",
            ],
            display: "I am British, but I live in Singapore.",
          },
          hints: [
            "英国人 = British person; 可是 = but / however.",
            "住在新加坡 = live in Singapore.",
          ],
          solution: [
            "**我是英国人** = I am British; **可是** = but; **我住在新加坡** = I live in Singapore.",
          ],
        },
        {
          id: "greetings-routine-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "introducing-yourself",
          question: "Fill in the missing two-character connector meaning **'then / afterwards'** in **我早上六点半起床，先刷牙洗脸，___吃早饭。**",
          answer: {
            type: "text",
            accept: ["然后", "ránhòu"],
            display: "然后 (ránhòu)",
          },
          hints: [
            "Look at 先 (xiān, first) earlier in the sentence!",
            "Which connector pairs with 先 to form 'first… then…' (先…___…)?",
          ],
          solution: [
            "**先…然后…** (*xiān… ránhòu…*) is the classic Mandarin pair for 'first… then…'.",
          ],
        },
        {
          id: "greetings-routine-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "greetings-identity",
          marks: 5,
          question:
            "**IGCSE 0547 Roleplay Task (Speaking / Short Writing Prep):**\nYou are talking to a new classmate from Beijing on your first day of Year 8 in Singapore. Answer all **5 questions** in complete Mandarin sentences:\n1. **你好！你叫什么名字？**\n2. **你是哪国人？**\n3. **你今年几岁？上几年级？**\n4. **你家有几口人？**\n5. **你家养宠物吗？**",
          hints: [
            "Use the Mirror Strategy: copy each question's structure, change 你 to 我, and slot your answer into the question word's spot!",
            "Remember: NO 是 before age, use 口 for family headcount, and negate/answer question 5 with 养了一只… or 没有养宠物.",
          ],
          modelAnswer:
            "1. 你好！我姓陈，叫陈大卫。\n2. 我是英国人，现在住在新加坡。\n3. 我今年十二岁，上八年级。\n4. 我家有四口人：爸爸、妈妈、妹妹和我。\n5. 我家养了一只小狗。",
          markScheme: [
            { point: "Greets and states name accurately with 叫 (and optional 姓).", keywords: ["你好", "我叫", "jiào"] },
            { point: "States nationality accurately with 我是…人.", keywords: ["我是", "人", "shì"] },
            { point: "Gives age with 岁 (no 是!) and Year 8 with 上八年级.", keywords: ["岁", "八年级", "suì", "niánjí"] },
            { point: "Answers family headcount using 有…口人.", keywords: ["有", "口人", "kǒu"] },
            { point: "Answers pet question clearly using 养 / 只 or 没有.", keywords: ["养", "只", "没有", "狗", "猫", "宠物"] },
          ],
          commonError: "Writing *我是十二岁* (inserting 是 before age) or forgetting 口 in 我家有四口人.",
        },
        {
          id: "greetings-routine-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "introducing-yourself",
          marks: 5,
          question:
            "**IGCSE 0547 Directed Writing (~80–100 Chinese characters):**\nWrite an email (**自我介绍**) to your new exchange buddy in Shanghai (**上海**). You MUST cover all five bullet points:\n- Your name, age, and nationality;\n- Where you live in Singapore and what school year you are in;\n- Your family members and any pets;\n- Your morning and afternoon school-day timetable (at least 3 clock times);\n- A friendly closing question for your buddy.",
          hints: [
            "Open warmly with 你好！ and group related facts with commas instead of starting every sentence with 我.",
            "Include at least two connectors such as 可是, 还, 先…然后…, or 放学以后!",
            "Double-check that every clock time sits BEFORE its verb without 在.",
          ],
          modelAnswer:
            "你好！我叫林美美，今年十二岁，是新加坡人。我现在住在新加坡乌节路附近，上八年级。我家有四口人：爸爸、妈妈、哥哥和我，我们还养了一只可爱的小白猫。我每天早上六点半起床，先刷牙洗脸，然后七点吃早饭，七点半去上学。我们下午三点半放学，放学以后我四点回家做作业。认识你我很高兴！你每天几点上学呢？",
          markScheme: [
            { point: "States name, age (with 岁, no 是) and nationality.", keywords: ["叫", "岁", "人"] },
            { point: "Mentions living in Singapore (住在新加坡) and grade (上八年级).", keywords: ["住", "新加坡", "年级"] },
            { point: "Describes family size/members (口人, 爸爸/妈妈) and pet detail.", keywords: ["家", "口人", "爸爸", "妈妈"] },
            { point: "Gives at least three timed routine actions in correct Subject + Time + Verb order.", keywords: ["点", "起床", "上学", "放学", "睡觉", "吃早饭", "做作业"] },
            { point: "Uses natural connectors (可是/还/先…然后/以后) and ends with a polite closing/question.", keywords: ["高兴", "呢", "吗", "以后", "然后", "可是", "还"] },
          ],
          commonError: "Putting clock times at the end of clauses like English, or linking verb clauses with 和.",
        },
      ],
    },
    {
      id: "greetings-routine-p2",
      title: "Practice Paper 2 · Afternoon Timetable, Reading & Accuracy",
      questions: [
        {
          id: "greetings-routine-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "greetings-identity",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'You're welcome'** (the polite response to **谢谢**).",
          answer: {
            type: "text",
            accept: [
              "不客气",
              "不客气！",
              "bú kèqi",
              "bù kèqi",
              "bú kèqì",
              "bù kèqì",
            ],
            display: "不客气 (bú kèqi)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["没关系", "méi guānxi"] },
              feedback: "没关系 ('no problem') replies to 对不起 (sorry). For 谢谢 (thank you), use 不客气!",
            },
          ],
          hints: [
            "Three characters starting with 不 (spoken bú due to tone sandhi!).",
          ],
          solution: [
            "**不客气** (*bú kèqi*) means 'you're welcome' in reply to **谢谢**.",
          ],
        },
        {
          id: "greetings-routine-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "greetings-identity",
          question: "Write the Mandarin question for: **'Are you Chinese?'** (Use **中国人** and **吗**.)",
          answer: {
            type: "text",
            accept: [
              "你是中国人吗",
              "你是中国人吗？",
              "Nǐ shì Zhōngguórén ma",
              "Nǐ shì Zhōngguó rén ma",
            ],
            display: "你是中国人吗？ (Nǐ shì Zhōngguórén ma?)",
          },
          hints: [
            "Start with the statement 你是中国人 (You are Chinese) and attach 吗 at the end!",
          ],
          solution: [
            "Statement **你是中国人** + yes/no particle **吗** = **你是中国人吗？**",
          ],
        },
        {
          id: "greetings-routine-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "family-pets",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'one older brother and two younger sisters'**",
          answer: {
            type: "text",
            accept: [
              "一个哥哥和两个妹妹",
              "yí gè gēge hé liǎng gè mèimei",
              "yī gè gēge hé liǎng gè mèimei",
              "yí ge gēge hé liǎng ge mèimei",
              "yī ge gēge hé liǎng ge mèimei",
            ],
            display: "一个哥哥和两个妹妹 (yí gè gēge hé liǎng gè mèimei)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["一个哥哥和二个妹妹", "yí gè gēge hé èr gè mèimei"] },
              feedback: "Before a measure word like 个, ALWAYS use 两 (liǎng gè), never *二个*!",
            },
          ],
          hints: [
            "Individual relatives take the measure word 个 (gè).",
            "Use 两 (liǎng) for 'two' before 个, and join the two noun phrases with 和 (hé).",
          ],
          solution: [
            "**一个哥哥** (*yí gè gēge*) + **和** (*hé*) + **两个妹妹** (*liǎng gè mèimei*).",
          ],
        },
        {
          id: "greetings-routine-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "clock-times",
          question: "Write **'five to eight'** (07:55) in Mandarin using **差** (*chà*):",
          answer: {
            type: "text",
            accept: [
              "差五分八点",
              "chà wǔ fēn bā diǎn",
              "早上差五分八点",
              "zǎoshang chà wǔ fēn bā diǎn",
              "八点差五分",
              "bā diǎn chà wǔ fēn",
            ],
            display: "差五分八点 (chà wǔ fēn bā diǎn)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["差五分七点", "chà wǔ fēn qī diǎn"] },
              feedback: "差五分七点 means 5 minutes before 7 (06:55)! For 07:55, count 5 minutes short of 8 o'clock (八点).",
            },
          ],
          hints: [
            "Formula: 差 + minutes + 分 + upcoming hour + 点.",
            "07:55 is 5 minutes short of 8 o'clock (八点).",
          ],
          solution: [
            "**差** (short of) + **五分** (5 minutes) + **八点** (8 o'clock) = **差五分八点**.",
          ],
        },
        {
          id: "greetings-routine-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "clock-times",
          question: "Read: **校车早上六点五十分来我家，七点二十分到学校。** How many **minutes** does the school bus journey take? (Give a number.)",
          answer: {
            type: "number",
            value: 30,
          },
          hints: [
            "Convert 六点五十分 (departure) and 七点二十分 (arrival) into digital times.",
            "Work out the minutes from 06:50 to 07:20!",
          ],
          solution: [
            "**六点五十分** = 06:50; **七点二十分** = 07:20.",
            "From 06:50 to 07:00 is 10 minutes, plus 20 minutes to 07:20 = **30** minutes.",
          ],
        },
        {
          id: "greetings-routine-p2-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "daily-routine",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'brush teeth and wash face'** (4 characters):",
          answer: {
            type: "text",
            accept: [
              "刷牙洗脸",
              "刷牙和洗脸",
              "shuā yá xǐ liǎn",
            ],
            display: "刷牙洗脸 (shuā yá xǐ liǎn)",
          },
          hints: [
            "刷牙 (brush teeth) + 洗脸 (wash face) — no 'my' needed in Mandarin!",
          ],
          solution: [
            "**刷牙** (*shuā yá*) + **洗脸** (*xǐ liǎn*) = **刷牙洗脸**.",
          ],
        },
        {
          id: "greetings-routine-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "daily-routine",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'We eat dinner at 7:00 pm.'** (Use **我们** and **晚上**.)",
          answer: {
            type: "text",
            accept: [
              "我们晚上七点吃晚饭",
              "我们晚上七点吃晚饭。",
              "我们晚上七点吃晚餐",
              "我们晚上七点吃晚餐。",
              "Wǒmen wǎnshang qī diǎn chī wǎnfàn",
              "Wǒmen wǎnshang qī diǎn chī wǎncān",
            ],
            display: "我们晚上七点吃晚饭。 (Wǒmen wǎnshang qī diǎn chī wǎnfàn.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我们吃晚饭晚上七点", "Wǒmen chī wǎnfàn wǎnshang qī diǎn"] },
              feedback: "Move the time 晚上七点 BEFORE the verb 吃晚饭!",
            },
          ],
          hints: [
            "Order: Subject (我们) + Time (晚上七点) + Verb-Object (吃晚饭).",
            "Remember NOT to put 在 before 晚上七点, and include the verb 吃!",
          ],
          solution: [
            "**我们** + **晚上七点** + **吃晚饭** = **我们晚上七点吃晚饭。**",
          ],
        },
        {
          id: "greetings-routine-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "daily-routine",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'I do homework at home at 5:00 pm.'** (Use **下午**, **在家**, and **做作业**.)",
          answer: {
            type: "text",
            accept: [
              "我下午五点在家做作业",
              "我下午五点在家做作业。",
              "下午五点我在家做作业",
              "下午五点我在家做作业。",
              "Wǒ xiàwǔ wǔ diǎn zài jiā zuò zuòyè",
              "Xiàwǔ wǔ diǎn wǒ zài jiā zuò zuòyè",
            ],
            display: "我下午五点在家做作业。 (Wǒ xiàwǔ wǔ diǎn zài jiā zuò zuòyè.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我在家下午五点做作业", "Wǒ zài jiā xiàwǔ wǔ diǎn zuò zuòyè"] },
              feedback: "Close! In STPV order, Time (下午五点) comes BEFORE Place (在家): 我下午五点在家做作业。",
            },
          ],
          hints: [
            "Golden STPV order: Subject (我) → Time (下午五点) → Place (在家) → Action (做作业).",
            "Use 在 only before 家 (at home), never before 下午五点!",
          ],
          solution: [
            "Follow STPV: **我** + **下午五点** + **在家** + **做作业** = **我下午五点在家做作业。**",
          ],
        },
        {
          id: "greetings-routine-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "greetings-identity",
          question: "Fix the grammar error in ***他今年是十四岁*** and write the corrected Mandarin sentence (for 'He is 14 years old this year'):",
          answer: {
            type: "text",
            accept: [
              "他今年十四岁",
              "他今年十四岁。",
              "Tā jīnnián shísì suì",
            ],
            display: "他今年十四岁。 (Tā jīnnián shísì suì.)",
          },
          hints: [
            "Spot the unwanted English-interference verb right before 十四岁!",
            "Delete 是!",
          ],
          solution: [
            "Delete **是** before age: **他今年十四岁。** (*Tā jīnnián shísì suì.*).",
          ],
        },
        {
          id: "greetings-routine-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "family-pets",
          question: "Read: **我爷爷今年七十岁，奶奶六十八岁，他们住在上海。** Where do the speaker's paternal grandparents live? (Answer in English or Hanzi.)",
          answer: {
            type: "text",
            accept: ["上海", "Shanghai", "Shànghǎi", "in Shanghai"],
            display: "Shanghai (上海)",
          },
          hints: [
            "Look right after 他们住在… (They live in…).",
            "上海 (Shànghǎi) is China's largest coastal city.",
          ],
          solution: [
            "**住在上海** (*zhù zài Shànghǎi*) means they live in **Shanghai (上海)**.",
          ],
        },
        {
          id: "greetings-routine-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "introducing-yourself",
          question: "Translate into Mandarin (Hanzi or Pinyin): **'Pleased to meet you!'** (Literally: 'Meeting you, I am very happy' — **认识你…**)",
          answer: {
            type: "text",
            accept: [
              "认识你我很高兴",
              "认识你我很高兴！",
              "认识你很高兴",
              "认识你很高兴！",
              "很高兴认识你",
              "很高兴认识你！",
              "Rènshi nǐ wǒ hěn gāoxìng",
              "Rènshi nǐ hěn gāoxìng",
              "Hěn gāoxìng rènshi nǐ",
            ],
            display: "认识你我很高兴！ (Rènshi nǐ wǒ hěn gāoxìng!)",
          },
          hints: [
            "Combine 认识你 (knowing/meeting you) with 我很高兴 (I am very happy).",
            "Remember: link 高兴 with 很 (我很高兴), never *我是高兴*!",
          ],
          solution: [
            "Both **认识你我很高兴！** and **很高兴认识你！** are natural, idiomatic ways to say 'Pleased to meet you!'.",
          ],
        },
        {
          id: "greetings-routine-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "daily-routine",
          question: "Read: **弟弟晚上八点三刻睡觉，我比弟弟晚半个小时睡觉。** At what digital 24-hour time (**HH:MM**) does the speaker (**我**) go to bed?",
          answer: {
            type: "text",
            accept: ["21:15", "9:15 pm", "09:15 pm"],
            display: "21:15",
          },
          hints: [
            "晚上八点三刻 = 8:45 pm (20:45).",
            "晚半个小时 means half an hour (30 minutes) LATER than 20:45!",
          ],
          solution: [
            "Younger brother sleeps at **晚上八点三刻** = 20:45.",
            "Adding 30 minutes (**半个小时**) to 20:45 gives **21:15** (9:15 pm).",
          ],
        },
        {
          id: "greetings-routine-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "daily-routine",
          marks: 5,
          question:
            "**IGCSE 0547 Roleplay Task — School-Day Routine:**\nYour Chinese partner school interviewer asks about your school day in Singapore. Reply in **5 full Mandarin sentences**:\n1. **你每天早上几点起床？**\n2. **你几点吃早饭？**\n3. **你们上午几点开始上课？**\n4. **你下午几点放学？放学以后做什么？**\n5. **你晚上几点睡觉？**",
          hints: [
            "Keep Subject + Time (Big → Small) + Verb in every single answer, with zero 在 before clock times!",
            "Notice question 4 has TWO parts: what time you finish school AND what you do afterwards (放学以后…).",
          ],
          modelAnswer:
            "1. 我每天早上六点半起床。\n2. 我早上七点吃早饭。\n3. 我们上午八点一刻开始上课。\n4. 我下午三点半放学，放学以后我四点回家做作业。\n5. 我晚上九点半睡觉。",
          markScheme: [
            { point: "States wake-up time using 早上 + 点 + 起床 in STPV order.", keywords: ["早上", "点", "起床"] },
            { point: "States breakfast time including the verb 吃 (吃早饭/吃早餐).", keywords: ["点", "吃早饭", "吃早餐"] },
            { point: "States lesson start time using 上午 + 点 + 上课.", keywords: ["点", "上课"] },
            { point: "States school finish time (放学) AND an after-school activity using 以后 or comma.", keywords: ["放学", "回家", "做作业", "以后"] },
            { point: "States evening bedtime using 晚上 + 点 + 睡觉.", keywords: ["晚上", "点", "睡觉"] },
          ],
          commonError: "Forgetting to answer the second half of prompt 4 (放学以后做什么？), or writing *在六点半*.",
        },
        {
          id: "greetings-routine-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "family-pets",
          marks: 5,
          question:
            "**IGCSE 0547 Blog Post (~80–100 Chinese characters) — 我的一家人 (My Family):**\nWrite a short blog post introducing your family and your family's daily routine in Singapore. Cover:\n- How many people are in your family and who they are;\n- Your sibling's (or cousin's/parent's) age or nationality;\n- Whether your family keeps any pets;\n- What time your family eats breakfast or dinner together;\n- Why you like your family (**我爱我家 / 我们很高兴**).",
          hints: [
            "Use 口人 for family total, 个 for specific siblings, and 只 for pets.",
            "Include 跟家人一起 (together with my family) before 吃早饭 or 吃晚饭 for authentic Year 8 style!",
          ],
          modelAnswer:
            "大家好！我叫王小明，今年十三岁，住在新加坡。我家有四口人：爸爸、妈妈、姐姐和我。我爸爸是中国人，妈妈是新加坡人；姐姐今年十五岁，上十年级。我家还养了一只可爱的小黄狗。每天晚上七点，我们一家人一起在家吃晚饭。我很爱我的家人，我们每天都很高兴！",
          markScheme: [
            { point: "Introduces household size with 口人 and lists family members + 和我.", keywords: ["口人", "爸爸", "妈妈", "和我"] },
            { point: "Gives accurate age (岁) or nationality (…国人/新加坡人) of a family member.", keywords: ["岁", "人", "年级"] },
            { point: "Describes family pets with 养 + 只 (or states 没有养宠物).", keywords: ["养", "只", "宠物", "没有", "狗", "猫"] },
            { point: "Describes a timed family meal in STPV order (e.g. 晚上七点一起吃晚饭).", keywords: ["点", "吃晚饭", "吃早饭", "一起"] },
            { point: "Expresses warm feeling about family using 很 / 爱 without *是高兴*.", keywords: ["爱", "高兴", "很", "喜欢"] },
          ],
          commonError: "Using 和 to join clauses (*我有一个姐姐，和她十五岁*) instead of a comma or semicolon.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "greetings-routine-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "clock-times",
      question:
        "**Time-Zone Detective:**\nSingapore and Beijing share the exact same time zone (UTC+8), while London (GMT in winter) is **8 hours behind** Singapore. When David calls his grandparents in London from Singapore at **晚上八点一刻** (*wǎnshang bā diǎn yí kè*), what time is it in London? Write your answer in **Mandarin characters** (including **上午 / 中午 / 下午** as appropriate!).",
      answer: {
        type: "text",
        accept: [
          "中午十二点一刻",
          "下午十二点一刻",
          "中午十二点十五分",
          "下午十二点十五分",
          "zhōngwǔ shí'èr diǎn yí kè",
          "zhōngwǔ shí èr diǎn yí kè",
          "zhōngwǔ shí'èr diǎn yī kè",
          "zhōngwǔ shí èr diǎn yī kè",
        ],
        display: "中午十二点一刻 (zhōngwǔ shí'èr diǎn yí kè — 12:15 pm)",
      },
      hints: [
        "First decode 晚上八点一刻 into 24-hour Singapore time: 20:15.",
        "Subtract 8 hours from 20:15 to get London's time: 12:15 (just past noon!).",
        "Express 12:15 pm in Mandarin using 中午 (noon) + 十二点 + 一刻.",
      ],
      solution: [
        "Singapore time **晚上八点一刻** = 20:15.",
        "Subtracting 8 hours gives 12:15 right after midday in London.",
        "In Mandarin big-to-small order: **中午十二点一刻** (*zhōngwǔ shí'èr diǎn yí kè*).",
      ],
    },
    {
      id: "greetings-routine-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "family-pets",
      question:
        "**Family Logic Puzzle:**\nRead all three clues carefully:\n1. **小文家有五口人。**\n2. **小文没有哥哥，也没有妹妹。**\n3. **小文住在爸爸妈妈家，家里没有爷爷奶奶，可是小文有两个兄弟姐妹。**\n\nWho MUST Xiaowen's two siblings be?",
      options: [
        "一个姐姐和一个弟弟 (one older sister and one younger brother)",
        "两个姐姐或者两个弟弟，或者一个姐姐和一个弟弟",
        "一个哥哥和一个姐姐 (one older brother and one older sister)",
        "一个弟弟和一个妹妹 (one younger brother and one younger sister)",
      ],
      answerIndex: 1,
      hints: [
        "Cross off the ruled-out sibling types from Clue 2: NO 哥哥 (older brother) and NO 妹妹 (younger sister).",
        "Which sibling categories remain possible out of {哥哥, 姐姐, 弟弟, 妹妹}?",
        "Check whether Clue 3 forces one of each or allows two of the same remaining type!",
      ],
      explanation:
        "**两个姐姐或者两个弟弟，或者一个姐姐和一个弟弟** — Clue 2 eliminates **哥哥** and **妹妹**, leaving only **姐姐** (older sister) and **弟弟** (younger brother). Since Clue 3 simply states Xiaowen has two siblings (**两个兄弟姐妹**), they could be 2 older sisters, 2 younger brothers, or 1 older sister + 1 younger brother!",
    },
    {
      id: "greetings-routine-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "clock-times",
      question:
        "**Mirror-Clock Riddle:**\nMeimei leaves home at **早上差十分七点**, arrives at school **35 minutes** later, and has assembly **一刻** (*yí kè*) after arriving at school. At what digital time (**HH:MM**) does her assembly start?",
      answer: {
        type: "text",
        accept: ["07:40", "7:40", "7:40 am", "07:40 am"],
        display: "07:40",
      },
      hints: [
        "Step 1: 早上差十分七点 = 10 minutes short of 7:00 am = 06:50.",
        "Step 2: Add 35 minutes for the journey to school (06:50 + 35 min = 07:25).",
        "Step 3: Add 一刻 (15 minutes) to 07:25!",
      ],
      solution: [
        "Departure **早上差十分七点** = 06:50.",
        "Arrival at school: 06:50 + 35 minutes = 07:25.",
        "Assembly starts **一刻** (15 minutes) later: 07:25 + 15 minutes = **07:40**.",
      ],
    },
    {
      id: "greetings-routine-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "greetings-identity",
      question:
        "**Tone Sandhi Chain Puzzle:**\nIn spoken Mandarin, **不** (*bù*) flips to *bú* ONLY before a 4th tone, while **一** (*yī*) flips to *yí* before a 4th tone and *yì* before 1st, 2nd or 3rd tones. Which set of three phrases has **ALL THREE** spoken pronunciations marked with 100% accuracy?",
      options: [
        "不客气 (bú kèqi) · 一刻 (yí kè) · 一只猫 (yì zhī māo)",
        "不客气 (bù kèqi) · 一刻 (yì kè) · 一只猫 (yí zhī māo)",
        "不客气 (bú kèqi) · 一刻 (yì kè) · 一只猫 (yì zhī māo)",
        "不客气 (bú kèqi) · 一刻 (yí kè) · 一只猫 (yí zhī māo)",
      ],
      answerIndex: 0,
      hints: [
        "Check 客 (kè) and 刻 (kè): both are 4th tones! What must 不 and 一 become right before a 4th tone?",
        "Now check 只 (zhī) in 一只猫: 只 is a 1st tone, so what tone does 一 shift to before a 1st tone?",
      ],
      explanation:
        "**不客气 (bú kèqi) · 一刻 (yí kè) · 一只猫 (yì zhī māo)** — before 4th-tone **客** (*kè*) and **刻** (*kè*), both **不** and **一** rise to 2nd tone (*bú*, *yí*). Before 1st-tone **只** (*zhī*), **一** falls to 4th tone (*yì*).",
    },
    {
      id: "greetings-routine-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "daily-routine",
      question:
        "**Separable Verb Cipher:**\nIn Mandarin, **上课** (*shàngkè*, attend class) splits open to form **上中文课** (*attend Chinese class*), and **睡觉** (*shuìjiào*, sleep) splits open to insert **午** (*wǔ*, noon) as **睡午觉** (*take an afternoon/midday nap*). Following the exact same separable verb-object rule on **吃早饭**, write the 4-character phrase meaning **'eat what meal?'** using **什么** (*shénme*) + **饭** (*fàn*):",
      answer: {
        type: "text",
        accept: ["吃什么饭", "chī shénme fàn"],
        display: "吃什么饭 (chī shénme fàn)",
      },
      hints: [
        "In 吃早饭, 吃 (eat) is the verb and 饭 (meal/rice) is the noun object.",
        "Replace 早 (morning) in the middle slot with 什么 (what)!",
      ],
      solution: [
        "Split **吃饭** (*chī fàn*) into Verb **吃** + Modifier **什么** + Object **饭** → **吃什么饭** (*chī shénme fàn*).",
      ],
    },
    {
      id: "greetings-routine-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "introducing-yourself",
      question:
        "**Spot the Zero-Error Paragraph:**\nFour Year 8 students drafted mini self-introductions. Three contain subtle grammar errors; **ONLY ONE** is 100% grammatical and idiomatic. Which one?",
      options: [
        "我叫陈乐，今年是十二岁。我家有四口人：爸爸、妈妈、弟弟和我。",
        "我叫陈乐，今年十二岁。我家有四口人：爸爸、妈妈和弟弟。我在早上七点去上学。",
        "我叫陈乐，今年十二岁。我家有四口人：爸爸、妈妈、弟弟和我。放学以后，我四点回家做作业。",
        "我叫陈乐，今年十二岁吗？我家不有宠物，和我晚上九点半睡觉。",
      ],
      answerIndex: 2,
      hints: [
        "Check for five traps: (1) *是十二岁*, (2) headcount mismatch (四口人 with only 3 people listed!), (3) *在早上七点*, (4) *不有*, and (5) *和* joining clauses.",
        "Count the family members listed in each candidate carefully!",
      ],
      explanation:
        "**我叫陈乐，今年十二岁。我家有四口人：爸爸、妈妈、弟弟和我。放学以后，我四点回家做作业。** passes every single test: no **是** before age, 4 family members matching **四口人**, **放学以后** in the right order, and clean STPV routine syntax!",
    },
    {
      id: "greetings-routine-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "daily-routine",
      question:
        "**Full Multi-Clause Translation:**\nTranslate into natural Mandarin (Hanzi): **'After finishing school, my older sister goes home at 4:15.'** (Use **放学以后**, **我姐姐**, and **一刻**.)",
      answer: {
        type: "text",
        accept: [
          "放学以后，我姐姐四点一刻回家",
          "放学以后，我姐姐四点一刻回家。",
          "放学以后我姐姐四点一刻回家",
          "我姐姐放学以后四点一刻回家",
          "我姐姐放学以后下午四点一刻回家",
          "放学以后，我姐姐下午四点一刻回家",
          "放学以后，我姐姐下午四点一刻回家。",
          "Fàngxué yǐhòu, wǒ jiějie sì diǎn yí kè huí jiā",
          "Fàngxué yǐhòu, wǒ jiějie sì diǎn yī kè huí jiā",
          "Wǒ jiějie fàngxué yǐhòu sì diǎn yí kè huí jiā",
          "Fàngxué yǐhòu, wǒ jiějie xiàwǔ sì diǎn yí kè huí jiā",
          "Fàngxué yǐhòu, wǒ jiějie xiàwǔ sì diǎn yī kè huí jiā",
        ],
        display: "放学以后，我姐姐四点一刻回家。",
      },
      hints: [
        "Put 以后 AFTER 放学: 放学以后，…",
        "Follow STPV in the second clause: Subject (我姐姐) + Time (四点一刻) + Verb (回家).",
      ],
      solution: [
        "Clause 1: **放学以后** (*Fàngxué yǐhòu*, after finishing school).",
        "Clause 2: **我姐姐四点一刻回家** (*wǒ jiějie sì diǎn yí kè huí jiā*).",
        "Combined: **放学以后，我姐姐四点一刻回家。**",
      ],
    },
    {
      id: "greetings-routine-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "family-pets",
      question:
        "**Headcount Equation:**\nRead carefully: **大卫家有六口人：爷爷、奶奶、爸爸、妈妈、大卫和一个妹妹。爷爷家也养了两只狗和一只猫。请问，大卫有几个姐姐？** (Give a single number!)",
      answer: {
        type: "number",
        value: 0,
      },
      hints: [
        "Read the final question carefully: 大卫有几个姐姐？ = How many OLDER sisters does David have?",
        "Count all 6 people in 大卫家有六口人: Grandpa (1), Grandma (2), Dad (3), Mum (4), David (5), and one younger sister 妹妹 (6).",
      ],
      solution: [
        "All 6 household members are accounted for: **爷爷、奶奶、爸爸、妈妈、大卫** and **一个妹妹** (younger sister).",
        "Therefore David has **0** older sisters (**姐姐**).",
      ],
    },
  ],
};
