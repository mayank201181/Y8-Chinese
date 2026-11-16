import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "greetings-routine-p3",
    title: "Practice Paper 3 · Extended Singapore Contexts & IGCSE Writing",
    questions: [
      {
        id: "greetings-routine-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "greetings-identity",
        question: "Translate into Mandarin (Hanzi or Pinyin): **'Good morning, teacher!'**",
        answer: {
          type: "text",
          accept: [
            "老师早上好",
            "老师早上好！",
            "老师，早上好",
            "老师，早上好！",
            "Lǎoshī zǎoshang hǎo",
            "Lǎoshī, zǎoshang hǎo",
          ],
          display: "老师，早上好！ (Lǎoshī, zǎoshang hǎo!)",
        },
        hints: [
          "Address the person first (老师 lǎoshī), followed by 早上好 (zǎoshang hǎo)!",
        ],
        solution: [
          "Put the addressee first: **老师，早上好！** (*Lǎoshī, zǎoshang hǎo!*).",
        ],
      },
      {
        id: "greetings-routine-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "greetings-identity",
        question: "Write the Mandarin response meaning **'No problem / It doesn't matter'** when someone says **对不起** (*sorry*):",
        answer: {
          type: "text",
          accept: [
            "没关系",
            "没关系！",
            "méi guānxi",
            "méi guānxì",
          ],
          display: "没关系 (méi guānxi)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["不客气", "bú kèqi"] },
            feedback: "不客气 replies to 谢谢 (thank you). For 对不起 (sorry), reply 没关系!",
          },
        ],
        hints: [
          "Three characters starting with 没 (méi).",
        ],
        solution: [
          "**没关系** (*méi guānxi*) is the natural polite response to **对不起**.",
        ],
      },
      {
        id: "greetings-routine-p3-q03",
        kind: "short",
        difficulty: "core",
        guideRef: "greetings-identity",
        question: "Translate into Mandarin (Hanzi or Pinyin): **'My surname is Lin.'** (Use **姓** *xìng*.)",
        answer: {
          type: "text",
          accept: [
            "我姓林",
            "我姓林。",
            "Wǒ xìng Lín",
          ],
          display: "我姓林。 (Wǒ xìng Lín.)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["我是姓林", "Wǒ shì xìng Lín"] },
            feedback: "姓 is already a verb ('to be surnamed'), so no 是 is needed: 我姓林。",
          },
        ],
        hints: [
          "姓 (xìng) works directly as a verb: Subject + 姓 + 林.",
          "Do not put 是 before 姓 — write three characters starting with 我!",
        ],
        solution: [
          "**我** (*Wǒ*) + **姓** (*xìng*, be surnamed) + **林** (*Lín*) = **我姓林。**",
        ],
      },
      {
        id: "greetings-routine-p3-q04",
        kind: "short",
        difficulty: "core",
        guideRef: "family-pets",
        question: "Complete the sentence with the right animal measure word (single Hanzi or Pinyin): **姐姐很喜欢那___小白猫。**",
        answer: {
          type: "text",
          accept: ["只", "zhī"],
          display: "只 (zhī)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["个", "gè", "口", "kǒu"] },
            feedback: "Cats and dogs take the animal classifier 只 (zhī), not 个 or 口!",
          },
        ],
        hints: [
          "Which measure word counts cats, dogs, and small birds?",
          "In Pinyin it is zhī (1st tone)!",
        ],
        solution: [
          "**那只小白猫** (*nà zhī xiǎo bái māo*, that little white cat) uses the classifier **只** (*zhī*).",
        ],
      },
      {
        id: "greetings-routine-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "family-pets",
        question: "Unscramble into a grammatical Mandarin sentence: **也 / 姐姐 / 八年级 / 我 / 上** (*My older sister is also in Year 8.*)",
        answer: {
          type: "text",
          accept: [
            "我姐姐也上八年级",
            "我姐姐也上八年级。",
            "Wǒ jiějie yě shàng bā niánjí",
          ],
          display: "我姐姐也上八年级。 (Wǒ jiějie yě shàng bā niánjí.)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["我姐姐上八年级也", "Wǒ jiějie shàng bā niánjí yě"] },
            feedback: "也 (also) NEVER goes at the end of a Mandarin sentence — put 也 directly BEFORE the verb 上!",
          },
        ],
        hints: [
          "Subject is 我姐姐 (my older sister).",
          "Put the adverb 也 right BEFORE the verb 上, followed by 八年级.",
        ],
        solution: [
          "**我姐姐** (Subject) + **也** (also) + **上** (attend) + **八年级** (Year 8) = **我姐姐也上八年级。**",
        ],
      },
      {
        id: "greetings-routine-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "clock-times",
        question: "Write **8:05 am** (early morning) in Mandarin (Hanzi or Pinyin — don't forget **零**!):",
        answer: {
          type: "text",
          accept: [
            "早上八点零五分",
            "早上八点零五",
            "上午八点零五分",
            "zǎoshang bā diǎn líng wǔ fēn",
            "shàngwǔ bā diǎn líng wǔ fēn",
          ],
          display: "早上八点零五分 (zǎoshang bā diǎn líng wǔ fēn)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["早上八点五分", "zǎoshang bā diǎn wǔ fēn"] },
            feedback: "Include 零 (líng) for ':05' on the clock: 早上八点零五分!",
          },
        ],
        hints: [
          "Put 早上 first, then 八点 (8 o'clock).",
          "For single-digit minutes (:05), say 零五分 (líng wǔ fēn).",
        ],
        solution: [
          "Big-to-small: **早上** + **八点** + **零五分** = **早上八点零五分**.",
        ],
      },
      {
        id: "greetings-routine-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "clock-times",
        question: "Convert **下午差一刻五点** (*xiàwǔ chà yí kè wǔ diǎn*) into 24-hour digital time **HH:MM**:",
        answer: {
          type: "text",
          accept: ["16:45", "4:45 pm", "04:45 pm"],
          display: "16:45",
        },
        traps: [
          {
            spec: { type: "text", accept: ["17:15", "5:15 pm"] },
            feedback: "差一刻五点 means a quarter (15 min) BEFORE 5:00 pm, not after!",
          },
          {
            spec: { type: "text", accept: ["04:45", "4:45"] },
            feedback: "Remember 下午 means afternoon — convert 4:45 pm into 24-hour time (16:45)!",
          },
        ],
        hints: [
          "下午五点 = 17:00 (5:00 pm).",
          "差一刻 means 15 minutes BEFORE 17:00!",
        ],
        solution: [
          "**下午五点** = 17:00; subtract **一刻** (15 minutes) → **16:45**.",
        ],
      },
      {
        id: "greetings-routine-p3-q08",
        kind: "short",
        difficulty: "warmup",
        guideRef: "daily-routine",
        question: "Translate into Mandarin (Hanzi or Pinyin): **'have Chinese class'** (3 characters, inserting **中文** inside separable **上课**):",
        answer: {
          type: "text",
          accept: [
            "上中文课",
            "shàng Zhōngwén kè",
          ],
          display: "上中文课 (shàng Zhōngwén kè)",
        },
        hints: [
          "Split 上课 open into 上 + ___ + 课 and place 中文 in the middle!",
        ],
        solution: [
          "Separable **上课** opens up around the subject: **上中文课** (*shàng Zhōngwén kè*).",
        ],
      },
      {
        id: "greetings-routine-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "daily-routine",
        question: "Read this Singapore school morning schedule:\n> **大卫早上六点一刻起床，六点四十分吃早饭，七点零五分坐校车去上学，七点五十分到学校。**\n\nHow many **minutes** last between David getting up (**起床**) and eating breakfast (**吃早饭**)? (Give a number.)",
        answer: {
          type: "number",
          value: 25,
        },
        hints: [
          "起床 time: 六点一刻 = 06:15.",
          "吃早饭 time: 六点四十分 = 06:40. Subtract 06:15 from 06:40!",
        ],
        solution: [
          "Gets up at **六点一刻** (06:15) and eats breakfast at **六点四十分** (06:40).",
          "40 − 15 = **25** minutes.",
        ],
      },
      {
        id: "greetings-routine-p3-q10",
        kind: "short",
        difficulty: "core",
        guideRef: "daily-routine",
        question: "Using the same passage (**七点零五分坐校车去上学，七点五十分到学校**), how many **minutes** is David's school-bus ride? (Give a number.)",
        answer: {
          type: "number",
          value: 45,
        },
        hints: [
          "Bus departure: 七点零五分 = 07:05.",
          "Arrival at school: 七点五十分 = 07:50.",
        ],
        solution: [
          "From **07:05** to **07:50** is 50 − 5 = **45** minutes.",
        ],
      },
      {
        id: "greetings-routine-p3-q11",
        kind: "short",
        difficulty: "core",
        guideRef: "greetings-identity",
        question: "Translate into Mandarin (Hanzi or Pinyin): **'Excuse me, what time is it now?'** (Use **请问** and **现在**.)",
        answer: {
          type: "text",
          accept: [
            "请问，现在几点",
            "请问，现在几点？",
            "请问现在几点",
            "请问现在几点？",
            "请问，现在是几点",
            "请问现在是几点",
            "Qǐngwèn, xiànzài jǐ diǎn",
            "Qǐngwèn, xiànzài shì jǐ diǎn",
          ],
          display: "请问，现在几点？ (Qǐngwèn, xiànzài jǐ diǎn?)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["请问，现在几点吗", "Qǐngwèn, xiànzài jǐ diǎn ma"] },
            feedback: "Never add 吗 when the question word 几 (jǐ) is already in the sentence!",
          },
        ],
        hints: [
          "Start with 请问 (Excuse me, may I ask), then 现在 (now) + 几点 (what time)?",
          "Remember: do NOT add 吗 because 几 is already a question word!",
        ],
        solution: [
          "**请问，现在几点？** (*Qǐngwèn, xiànzài jǐ diǎn?*).",
        ],
      },
      {
        id: "greetings-routine-p3-q12",
        kind: "short",
        difficulty: "core",
        guideRef: "introducing-yourself",
        question: "Translate into English: **放学以后，我回家做作业。**",
        answer: {
          type: "text",
          accept: [
            "After finishing school, I go home to do homework",
            "After school, I go home to do homework",
            "After school, I go home and do homework",
            "After school, I go home and do my homework",
            "After finishing school, I go home to do my homework",
            "After finishing school, I go home and do homework",
            "After finishing school, I go home and do my homework",
            "After school I go home to do my homework",
          ],
          display: "After finishing school, I go home to do homework.",
        },
        hints: [
          "放学以后 = after finishing school / after school.",
          "回家 = go home; 做作业 = do homework.",
        ],
        solution: [
          "**放学以后** (after school finishes) + **我回家做作业** (I go home to do homework).",
        ],
      },
      {
        id: "greetings-routine-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "clock-times",
        marks: 4,
        question:
          "**IGCSE 0547 Short Timetable Task:**\nLook at Xiaoming's Monday notes and write **4 full Mandarin sentences** describing his day in **Subject + Time + Action** order:\n- **06:30** — get up\n- **08:15** — have Chinese class (**上中文课**)\n- **12:30** — eat lunch (**吃午饭**)\n- **21:45** — go to bed",
        hints: [
          "Include the right time-of-day word (早上, 上午, 中午, 晚上) BEFORE each clock time!",
          "Use 半 for :30, 一刻 for :15, and 三刻 (or 四十五分) for :45.",
        ],
        modelAnswer:
          "1. 小明早上六点半起床。\n2. 他上午八点一刻上中文课。\n3. 他中午十二点半吃午饭。\n4. 他晚上九点三刻睡觉。",
        markScheme: [
          { point: "Writes 06:30 wake-up accurately (早上六点半起床).", keywords: ["早上", "六点半", "起床"] },
          { point: "Writes 08:15 Chinese lesson accurately (上午八点一刻/十五分上中文课).", keywords: ["八点", "中文课"] },
          { point: "Writes 12:30 lunch accurately (中午十二点半吃午饭/吃午餐).", keywords: ["中午", "十二点半", "吃午饭", "吃午餐"] },
          { point: "Writes 21:45 bedtime accurately (晚上九点三刻/四十五分睡觉).", keywords: ["晚上", "九点", "睡觉"] },
        ],
        commonError: "Writing *在早上六点半* or forgetting 吃 before 午饭.",
      },
      {
        id: "greetings-routine-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "introducing-yourself",
        marks: 5,
        question:
          "**IGCSE 0547 Speech Script (~90–120 Chinese characters) — Welcome Speech to Visiting Beijing Students:**\nA group of Year 8 students from Beijing is visiting your school in Singapore! Write a short welcome speech introducing yourself, your family, and a typical Singapore school day. Include:\n- A polite greeting to teachers and classmates (**老师们、同学们**), plus your name and age;\n- Your nationality and where your family lives in Singapore;\n- Your family members and pets;\n- Your school-day routine (when lessons start, when school finishes, and what you do after school);\n- A warm welcome to Singapore (**欢迎你们来新加坡！**).",
        hints: [
          "Open with 老师们、同学们，大家好！ to sound like a genuine assembly speaker.",
          "Link clauses smoothly with 可是, 还, 先…然后…, and 放学以后.",
        ],
        modelAnswer:
          "老师们、同学们，大家好！我姓林，叫林天乐，今年十三岁。我是新加坡人，跟家人一起住在东海岸公园附近，今年上八年级。我家有五口人：爸爸、妈妈、姐姐、弟弟和我，我们还养了一只小狗。在新加坡，我每天早上六点半起床，上午八点开始上课，下午三点半放学。放学以后，我常常回家做作业，晚上七点跟家人一起吃晚饭。欢迎你们来新加坡，认识大家我很高兴！",
        markScheme: [
          { point: "Greets teachers/students politely and gives name and age (no 是 before 岁).", keywords: ["大家好", "叫", "岁"] },
          { point: "States nationality and Singapore home + Year 8 grade.", keywords: ["新加坡", "住", "八年级"] },
          { point: "Introduces family headcount/members (口人) and pets (养/只).", keywords: ["口人", "爸爸", "妈妈", "养", "只"] },
          { point: "Describes school timetable in STPV order with at least two times + after-school detail.", keywords: ["点", "上课", "放学", "以后", "做作业"] },
          { point: "Ends with a warm welcome to Singapore and natural connectors.", keywords: ["欢迎", "高兴"] },
        ],
        commonError: "Repeating 我 at the start of every single clause instead of grouping clauses smoothly with commas.",
      },
    ],
  },
];
