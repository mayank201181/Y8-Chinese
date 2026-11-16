import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "greetings-routine",
  title: "自我介绍与日常 — Self-Introduction, Family & Daily Routine",
  strand: "Foundations",
  icon: "👋",
  summary: "Introduce your name, nationality, family, pets and full Singapore school-day timetable with natural Mandarin word order.",
  intro:
    "Whether you are meeting a new classmate at Tanglin Trust School, chatting to an auntie at a Singapore hawker centre (**小贩中心** *xiǎofàn zhōngxīn*), or sitting your IGCSE 0547 speaking roleplay, every conversation begins with who you are, who is in your family, and how your day unfolds. In this bridge topic you will master Mandarin's clean, puzzle-like building blocks: **in-situ questions**, **family vs general classifiers**, **big-to-small clock times**, and the golden **Subject + Time + Action** sentence frame.",
  guide: [
    {
      id: "greetings-identity",
      heading: "Greetings, name, nationality & grade: 你叫什么名字？",
      discovery: {
        problem:
          "Compare these two sentences carefully:\n- Statement: **你叫大卫。** (*Nǐ jiào Dàwèi.* — You are called David.)\n- Question: **你叫什么名字？** (*Nǐ jiào shénme míngzi?* — What is your name?)\n\nNotice where **什么名字** (*shénme míngzi*, what name) sits in the Mandarin question compared with English 'What is your name?'. Now work out how to ask: **'Which country are you from?'** if the statement is **你是新加坡人。** (*Nǐ shì Xīnjiāpōrén.*)",
        idea:
          "English drags question words like *what* and *which* to the very front of the sentence and scrambles the verb order. Mandarin leaves the sentence order **completely untouched** and simply slots the question word right into the spot where the answer belongs! Replace **新加坡** (*Xīnjiāpō*) with **哪国** (*nǎ guó*, which country) and you immediately get **你是哪国人？** (*Nǐ shì nǎ guó rén?*).",
      },
      body:
        "### 1. Polite & Everyday Greetings\n\nMandarin adjusts greetings according to who you are speaking to and the time of day:\n\n| Hanzi | Pinyin | English | When to use it |\n|---|---|---|---|\n| **你好** | *nǐ hǎo* | Hello | Peers, classmates, everyday situations |\n| **您好** | *nín hǎo* | Hello (respectful) | Teachers (**王老师，您好！**), elders, strangers |\n| **早上好** | *zǎoshang hǎo* | Good morning | Early morning at home or school |\n| **下午好 / 晚上好** | *xiàwǔ hǎo / wǎnshang hǎo* | Good afternoon / evening | Afternoon or evening greetings |\n| **再见** | *zàijiàn* | Goodbye | Literally 'see you again' (**明天见** = see you tomorrow) |\n\n> **Tone Sandhi Secret:** Both **你** (*nǐ*) and **好** (*hǎo*) are 3rd tones, so in real speech the first flips to a rising 2nd tone (*ní hǎo*) — though we always write the Pinyin as *nǐ hǎo*! Similarly, in **不客气** (*bú kèqi*, you're welcome), **不** (*bù*) rises to *bú* before the 4th-tone **客** (*kè*).\n\n### 2. Name, Surname, Nationality, Age & Grade\n\nChinese names always place the **family surname (**姓** *xìng*) FIRST**, followed by the given name:\n- **我姓林，叫林美美。** (*Wǒ xìng Lín, jiào Lín Měiměi.*) — My surname is Lin; I am called Lin Meimei.\n- **我是英国人，可是我住在新加坡。** (*Wǒ shì Yīngguórén, kěshì wǒ zhù zài Xīnjiāpō.*) — I am British, but I live in Singapore.\n- **我今年十二岁，上八年级。** (*Wǒ jīnnián shí'èr suì, shàng bā niánjí.*) — I am 12 years old this year and in Year 8.\n\n> **Watch out for 是 (*shì*):** Use **是** for nouns (**我是学生**, **我是新加坡人**), NEVER before age (**我十三岁**, NOT *我是十三岁*) and NEVER before adjectives (**我很高兴**, NOT *我是高兴*).\n\n### 3. Two Essential Particles: **吗** (*ma*) vs **呢** (*ne*)\n- **吗** (*ma*) turns any statement into a **yes/no question**: **你是中国人吗？** (*Nǐ shì Zhōngguórén ma?* — Are you Chinese?). Never combine **吗** with a question word like **什么** or **哪**!\n- **呢** (*ne*) bounces the topic back ('And what about…?'): **我十二岁，你呢？** (*Wǒ shí'èr suì, nǐ ne?* — I am 12; what about you?).",
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="In-situ question word swap showing statement and question sharing identical Mandarin word order">' +
        '<rect x="10" y="10" width="620" height="240" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="38" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1e293b">Mandarin In-Situ Questions: Keep the Exact Same Word Order!</text>' +
        '<rect x="36" y="58" width="130" height="72" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>' +
        '<text x="101" y="86" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0369a1">你</text>' +
        '<text x="101" y="106" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0369a1">Nǐ (Subject)</text>' +
        '<rect x="186" y="58" width="130" height="72" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>' +
        '<text x="251" y="86" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#b45309">是</text>' +
        '<text x="251" y="106" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#b45309">shì (Verb)</text>' +
        '<rect x="336" y="58" width="268" height="72" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="2"/>' +
        '<text x="470" y="86" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#c81e1e">哪国人 ？</text>' +
        '<text x="470" y="108" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#991b1b">nǎ guó rén? (Question Slot)</text>' +
        '<text x="470" y="152" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0d9488">↓ Swap directly for answer ↓</text>' +
        '<rect x="36" y="166" width="130" height="68" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>' +
        '<text x="101" y="194" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0369a1">我</text>' +
        '<text x="101" y="214" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0369a1">Wǒ (I)</text>' +
        '<rect x="186" y="166" width="130" height="68" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>' +
        '<text x="251" y="194" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#b45309">是</text>' +
        '<text x="251" y="214" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#b45309">shì (am)</text>' +
        '<rect x="336" y="166" width="268" height="68" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>' +
        '<text x="470" y="194" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#15803d">新加坡人 。</text>' +
        '<text x="470" y="214" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#166534">Xīnjiāpōrén. (Singaporean)</text>' +
        "</svg>",
      diagramCaption: "In Mandarin, the question phrase 哪国人 sits in the exact slot where the answer 新加坡人 goes — zero word-order scrambling!",
      workedExamples: [
        {
          title: "Answering & bouncing back an identity question",
          problem:
            "A new teacher greets you: **你好！你叫什么名字？今年几岁？** Write a polite reply saying your name is Chen Ming (**陈明**), you are 13 years old this year, and you are in Year 8.",
          steps: [
            "Greet the teacher respectfully using **您好** (*nín hǎo*) because they are a teacher.",
            "Give your name with **我叫陈明** (*Wǒ jiào Chén Míng*).",
            "State your age without **是**: **我今年十三岁** (*wǒ jīnnián shísān suì*), and add your grade with **上**: **上八年级** (*shàng bā niánjí*).",
          ],
          answer: "老师您好！我叫陈明，今年十三岁，上八年级。 (Lǎoshī nín hǎo! Wǒ jiào Chén Míng, jīnnián shísān suì, shàng bā niánjí.)",
          yourTurn: {
            question: "Translate into Mandarin (Hanzi or Pinyin): 'I am twelve years old this year.'",
            answer: {
              type: "text",
              accept: [
                "我今年十二岁",
                "我今年十二岁。",
                "今年我十二岁",
                "今年我十二岁。",
                "Wǒ jīnnián shí'èr suì",
                "Wǒ jīnnián shí èr suì",
                "Jīnnián wǒ shí'èr suì",
              ],
              display: "我今年十二岁。 (Wǒ jīnnián shí'èr suì.)",
            },
            solution: "Subject 我 + time 今年 + age 十二岁 (remember: NEVER put 是 before 十二岁!).",
          },
        },
      ],
      keyPoints: [
        "Use **您好** (*nín hǎo* — heart radical **心** under **你**) for teachers and elders; **你好** (*nǐ hǎo*) for peers.",
        "Chinese names put the surname (**姓** *xìng*) first: **王小明** = surname **王**, given name **小明**.",
        "Never put **是** before ages (**我十二岁**) or adjectives (**我很好**).",
        "Use **吗** ONLY for yes/no questions — never add **吗** when **什么**, **几**, **谁** or **哪** is already in the sentence.",
      ],
      whyItWorks:
        "Linguists call Mandarin a *wh-in-situ* language ('question words stay in place'). Because Mandarin relies on word position rather than case endings to show who does what to whom, keeping the question word in the exact slot of the missing information makes every question a ready-made template for its own answer!",
      strategies: [
        "Mirror the Question: Copy the examiner's question frame, swap **你** → **我**, and replace the question word (**什么 / 几 / 哪国**) with your fact.",
        "Check the **吗** Ban: Scan your question — if it already contains **什么, 谁, 几, 哪**, delete **吗** at the end!",
      ],
      thinkDeeper:
        "Why does the character **姓** (*xìng*, surname) combine the female radical **女** (*nǚ*) with **生** (*shēng*, birth)? What does that clue reveal about prehistoric Chinese society?",
    },
    {
      id: "family-pets",
      heading: "Family members & pets: 你家有几口人？",
      discovery: {
        problem:
          "Look at these three accurate Mandarin sentences:\n1. **我家有五口人。** (*Wǒ jiā yǒu wǔ kǒu rén.* — My family has five people.)\n2. **我有一个哥哥和两个妹妹。** (*Wǒ yǒu yí gè gēge hé liǎng gè mèimei.* — I have one older brother and two younger sisters.)\n3. **我家没有猫，有一只小狗。** (*Wǒ jiā méiyǒu māo, yǒu yì zhī xiǎogǒu.* — My family doesn't have a cat; we have a puppy.)\n\nSpot **three grammar rules** hiding here: (a) When do we use **口** vs **个** vs **只**? (b) How do we say 'do not have'? (c) What kind of words does **和** (*hé*) join?",
        idea:
          "(a) **口** (*kǒu*, literally 'mouths to feed') counts total family members (**五口人**), **个** (*gè*) counts individual people (**一个哥哥**), and **只** (*zhī*) counts pets like cats and dogs (**一只小狗**). (b) **有** (*yǒu*) is ALWAYS negated with **没** → **没有** (*méiyǒu*), never ***不有***. (c) **和** (*hé*) joins nouns (**哥哥和妹妹**), NEVER two separate clauses!",
      },
      body:
        "### 1. Immediate & Extended Family Vocabulary\n\nMandarin distinguishes older vs younger siblings and paternal vs maternal grandparents right inside the noun:\n\n| Hanzi | Pinyin | English | Radical / Memory Clue |\n|---|---|---|---|\n| **爸爸 / 妈妈** | *bàba / māma* | dad / mum | **父** (father) on top of **爸**; **女** (female) + **马** (*mǎ* sound) in **妈** |\n| **哥哥 / 弟弟** | *gēge / dìdi* | older brother / younger brother | Male siblings (second syllable is neutral tone!) |\n| **姐姐 / 妹妹** | *jiějie / mèimei* | older sister / younger sister | **女** + **未** (*wèi*, not yet grown) = **妹** (younger sister!) |\n| **爷爷 / 奶奶** | *yéye / nǎinai* | paternal grandpa / grandma | Dad's parents |\n\n### 2. Counting People & Pets: **口** vs **个** vs **只**\n- **你家有几口人？** (*Nǐ jiā yǒu jǐ kǒu rén?*) — How many people are in your family?\n  - Reply: **我家有四口人：爸爸、妈妈、姐姐和我。** (*Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ.*)\n  - Note the listing comma **、** (*dùnhào*) used between nouns in a Chinese list!\n  - **Tone sandhi:** **一口人** is spoken *yì kǒu rén*; for two individual people say **两个人** (*liǎng gè rén*).\n- **Pets (**宠物** *chǒngwù*):** Use the verb **养** (*yǎng*, to keep/raise) and classifier **只** (*zhī*):\n  - **我家养了两只猫和一只狗。** (*Wǒ jiā yǎng le liǎng zhī māo hé yì zhī gǒu.*)\n\n### 3. Two Classic Traps: **没有** and **和**\n1. **Never write *不有*!** The verb **有** (*yǒu*, to have) only ever pairs with **没** (*méi*): **我没有弟弟** (*Wǒ méiyǒu dìdi*).\n2. **Never join two sentences with 和 (*hé*)!**\n   - Wrong: ***我有一个哥哥，和他十五岁。*** ✗\n   - Right: **我有一个哥哥，他十五岁。** ✓ (Use a comma, or **还有** *háiyǒu* / **也** *yě* before a verb!)",
      workedExamples: [
        {
          title: "Describing your family and pets accurately",
          problem:
            "Translate into Mandarin: 'There are four people in my family: Dad, Mum, my younger sister and me. We keep one dog.'",
          steps: [
            "Count total family members with **口**: **我家有四口人** (*Wǒ jiā yǒu sì kǒu rén*).",
            "List the members using **、** between items and **和** before the last noun: **爸爸、妈妈、妹妹和我** (*bàba, māma, mèimei hé wǒ*).",
            "Add the pet clause with **养** + **一只狗**: **我们家养了一只狗** or **我家有一只狗**.",
          ],
          answer: "我家有四口人：爸爸、妈妈、妹妹和我。我家养了一只狗。 (Wǒ jiā yǒu sì kǒu rén: bàba, māma, mèimei hé wǒ. Wǒ jiā yǎng le yì zhī gǒu.)",
          yourTurn: {
            question: "How do you say 'I do not have an older brother' in Mandarin?",
            answer: {
              type: "text",
              accept: [
                "我没有哥哥",
                "我没有哥哥。",
                "Wǒ méiyǒu gēge",
                "Wǒ méi yǒu gēge",
              ],
              display: "我没有哥哥。 (Wǒ méiyǒu gēge.)",
            },
            solution: "Negate 有 with 没 (没有), never 不: 我没有哥哥 (Wǒ méiyǒu gēge).",
          },
        },
      ],
      keyPoints: [
        "Use **口** (*kǒu*) for total family size (**我家有四口人**), **个** (*gè*) for specific relatives (**一个姐姐**), and **只** (*zhī*) for dogs and cats (**一只猫**).",
        "Always negate **有** with **没有** (*méiyǒu*) — ***不有*** is 100% ungrammatical.",
        "**和** (*hé*) connects nouns/pronouns (**爸爸和妈妈**), NEVER full verb clauses.",
        "Always include **和我** (*hé wǒ*, 'and me') at the end when listing the people in **我家有…口人** so the headcount adds up!",
      ],
      whyItWorks:
        "In traditional agricultural censuses, officials counted households by how many *mouths* (**口** *kǒu*) needed grain, which is why **几口人** became the warm, idiomatic way to ask about a household's size. Meanwhile, the character **家** (*jiā*, home/family) places a pig (**豕**) underneath a roof (**宀**) — proof of a settled, well-fed household!",
      strategies: [
        "Headcount Check: If you write **我家有四口人**, count the nouns in your list (**爸爸、妈妈、弟弟和我** = 4) to make sure you didn't forget yourself!",
        "Clause-Joiner Swap: Whenever you feel tempted to write ', and I also...' between two clauses, delete **和** and put **也** (*yě*) right before the second verb instead.",
      ],
      thinkDeeper:
        "Compare **妈妈** (*māma*), **姐姐** (*jiějie*), **妹妹** (*mèimei*) and **奶奶** (*nǎinai*). Every one of them is a *phono-semantic compound* (形声字): the left side **女** gives the meaning category, while the right side hints at the pronunciation or meaning. Can you spot how **马** (*mǎ*) helps you remember the sound of **妈** (*mā*)?",
    },
    {
      id: "clock-times",
      heading: "Telling the clock time: 现在几点？",
      discovery: {
        problem:
          "In English we say **'7:30 in the morning'** (small unit → big unit) and **'quarter to eight'** (minutes → hour). Compare how Mandarin says them:\n- **早上七点半** (*zǎoshang qī diǎn bàn* — 7:30 am)\n- **下午三点一刻** (*xiàwǔ sān diǎn yí kè* — 3:15 pm)\n- **差五分八点** (*chà wǔ fēn bā diǎn* — 7:55 / five to eight)\n\nWhat is the strict order of **time-of-day + hour + minutes** in Mandarin, and which number word is used for **2:00**?",
        idea:
          "Mandarin ALWAYS zooms in from **biggest time unit to smallest**: **Part of day (早上/下午) → Hour (点) → Minutes (分 / 半 / 刻)**! And because **点** (*diǎn*, o'clock) behaves like a measure word on the clock face, **2 o'clock** is ALWAYS **两点** (*liǎng diǎn*), whereas **12 o'clock** stays **十二点** (*shí'èr diǎn*)!",
      },
      body:
        "### 1. Hours, Halves, Quarters & Minutes\n\n| Clock | Mandarin | Pinyin | Literal Breakdown |\n|---|---|---|---|\n| 2:00 | **两点** | *liǎng diǎn* | Two o'clock (use **两**, never ***二点***!) |\n| 6:05 | **六点零五分** | *liù diǎn líng wǔ fēn* | 6 o'clock zero-five minutes |\n| 7:15 | **七点一刻** / **七点十五分** | *qī diǎn yí kè* | 7 o'clock one quarter (1 **刻** = 15 min) |\n| 7:30 | **七点半** / **七点三十分** | *qī diǎn bàn* | 7 o'clock half |\n| 8:45 | **八点三刻** / **差一刻九点** | *bā diǎn sān kè / chà yí kè jiǔ diǎn* | 8 o'clock 3 quarters / short 1 quarter to 9 |\n| 7:55 | **差五分八点** / **七点五十五分** | *chà wǔ fēn bā diǎn* | Short 5 minutes of 8 o'clock |\n\n### 2. Big-to-Small Time-of-Day Labels\n\nUnlike English *am/pm* tacked onto the end, Mandarin puts the part of the day **BEFORE** the hour:\n- **早上** (*zǎoshang*, early morning ~6:00–8:59) → **早上六点半** (6:30 am)\n- **上午** (*shàngwǔ*, morning ~9:00–11:59) → **上午十点一刻** (10:15 am)\n- **中午** (*zhōngwǔ*, noon ~12:00–12:59) → **中午十二点** (12:00 pm)\n- **下午** (*xiàwǔ*, afternoon ~1:00–5:59) → **下午两点二十分** (2:20 pm)\n- **晚上** (*wǎnshang*, evening/night ~6:00–11:59) → **晚上九点半** (9:30 pm)",
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mandarin clock face showing dian on top, yi ke at 15, ban at 30, san ke at 45, and cha wu fen on the left">' +
        '<rect x="10" y="10" width="620" height="240" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<circle cx="215" cy="132" r="76" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>' +
        '<circle cx="215" cy="132" r="4" fill="#c81e1e"/>' +
        '<line x1="215" y1="132" x2="215" y2="78" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>' +
        '<line x1="215" y1="132" x2="266" y2="132" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>' +
        '<text x="215" y="42" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">…点整 (:00)</text>' +
        '<text x="300" y="136" text-anchor="start" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0d9488">一刻 (:15 yí kè)</text>' +
        '<text x="215" y="232" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">半 (:30 bàn)</text>' +
        '<text x="138" y="88" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="bold" fill="#7c2d12">差…分 (:50/:55)</text>' +
        '<text x="130" y="136" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">三刻 (:45)</text>' +
        '<rect x="405" y="34" width="205" height="196" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>' +
        '<text x="507" y="60" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">Big → Small Zoom Order</text>' +
        '<text x="422" y="90" font-family="sans-serif" font-size="13" fill="#1e293b">1. Day: 每天 (měitiān)</text>' +
        '<text x="422" y="118" font-family="sans-serif" font-size="13" fill="#b45309">2. Period: 早上 (zǎoshang)</text>' +
        '<text x="422" y="146" font-family="sans-serif" font-size="13" fill="#c81e1e">3. Hour: 七点 (qī diǎn)</text>' +
        '<text x="422" y="174" font-family="sans-serif" font-size="13" fill="#0d9488">4. Mins: 一刻 (yí kè)</text>' +
        '<text x="507" y="208" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">= 每天早上七点一刻</text>' +
        "</svg>",
      diagramCaption: "Clock quarters (一刻 = :15, 半 = :30, 三刻 = :45) plus Mandarin's strict Big-to-Small time zoom.",
      workedExamples: [
        {
          title: "Converting digital times into natural Mandarin",
          problem: "Write **(a) 2:30 pm** and **(b) 7:50 am** in Mandarin characters and Pinyin.",
          steps: [
            "For (a) 2:30 pm: put the period **下午** (*xiàwǔ*) first, use **两点** (*liǎng diǎn*) for 2 o'clock, then **半** (*bàn*) for :30 → **下午两点半**.",
            "For (b) 7:50 am: put **早上** (*zǎoshang*) first, then either **七点五十分** (*qī diǎn wǔshí fēn*) OR **差十分八点** (*chà shí fēn bā diǎn*, ten to eight).",
          ],
          answer: "(a) 下午两点半 (xiàwǔ liǎng diǎn bàn); (b) 早上七点五十分 / 早上差十分八点",
          yourTurn: {
            question: "Write '3:15 pm' in Mandarin using 刻 (kè) for quarter past:",
            answer: {
              type: "text",
              accept: [
                "下午三点一刻",
                "Xiàwǔ sān diǎn yí kè",
                "xiàwǔ sān diǎn yī kè",
              ],
              display: "下午三点一刻 (xiàwǔ sān diǎn yí kè)",
            },
            solution: "Period first (下午) + 3 o'clock (三点) + one quarter (一刻) = 下午三点一刻.",
          },
        },
      ],
      keyPoints: [
        "Always order time from **largest to smallest**: **每天 → 早上/下午/晚上 → 点 → 分/半/刻**.",
        "2:00 is ALWAYS **两点** (*liǎng diǎn*), whereas 12:00 is **十二点** (*shí'èr diǎn*) and :20 minutes is **二十分** (*èrshí fēn*).",
        "**一刻** (*yí kè*) = 15 minutes past; **半** (*bàn*) = 30 minutes past; **三刻** (*sān kè*) = 45 minutes past.",
        "**差 + X分 + Y点** means *X minutes to Y o'clock* (so **差五分九点** = 8:55, NOT 9:05!).",
      ],
      whyItWorks:
        "Ancient Chinese water clocks (*lòukè* 漏刻) divided a day into 96 notches (**刻** *kè*, literally 'carved mark' — notice the knife radical **刂** on the right!), each lasting exactly 15 minutes. That ancient carving on a bronze ruler is why modern Mandarin speakers still say **一刻** for 15 minutes!",
      strategies: [
        "Reverse English AM/PM: Whenever you see '8:30 am', flip 'am' to the front (**早上** / **上午**) before translating '8:30' (**八点半**).",
        "Watch the Next Hour with **差**: In **差十分四点**, subtract 10 minutes from 4:00 → 3:50!",
      ],
      thinkDeeper:
        "Why do we say **两点** (*liǎng diǎn*) for 2 o'clock, **两刻** is avoided (we say **半** instead!), and yet 2:22 is **两点二十二分** (*liǎng diǎn èrshí'èr fēn*)? Test your hypothesis about single-digit 2 before a unit vs multi-digit numbers!",
    },
    {
      id: "daily-routine",
      heading: "School-day routine: 起床, 上学, 睡觉",
      discovery: {
        problem:
          "An English-speaking pupil wants to say: *'I get up at 6:30 every morning.'* They translate word-for-word and write:\n- ***我起床在六点半每天早上。*** ✗\n\nCompare that with what a native speaker in Singapore actually says:\n- **我每天早上六点半起床。** (*Wǒ měitiān zǎoshang liù diǎn bàn qǐchuáng.*) ✓\n\nSpot the **two big differences** between English and Mandarin!",
        idea:
          "1. **Time NEVER goes at the end of a Mandarin sentence!** It must sit **before the action verb** (right after or right before the subject).\n2. **Never translate English 'at' before clock times as 在 (*zài*)!** Just place the time phrase (**每天早上六点半**) directly before the verb (**起床**) with no preposition at all!",
      },
      body:
        "### 1. The Golden Daily-Routine Formula\n\n**Subject + Time (Big → Small) + (Place) + Action Verb**\n\n- **我早上六点半起床。** (*Wǒ zǎoshang liù diǎn bàn qǐchuáng.*) — I get up at 6:30 am.\n- **哥哥早上七点吃早饭。** (*Gēge zǎoshang qī diǎn chī zǎofàn.*) — My older brother eats breakfast at 7:00 am.\n- **我们上午八点开始上课。** (*Wǒmen shàngwǔ bā diǎn kāishǐ shàngkè.*) — We start class at 8:00 am.\n- **我下午三点半放学，四点回家。** (*Wǒ xiàwǔ sān diǎn bàn fàngxué, sì diǎn huí jiā.*) — I finish school at 3:30 pm and get home at 4:00.\n- **我下午五点在家做作业。** (*Wǒ xiàwǔ wǔ diǎn zài jiā zuò zuòyè.*) — I do homework at home at 5:00 pm.\n- **妹妹晚上九点睡觉。** (*Mèimei wǎnshang jiǔ diǎn shuìjiào.*) — My younger sister goes to bed at 9:00 pm.\n\n### 2. Separable Verb-Object Pairs (离合词)\n\nMany routine verbs are actually **Verb + Noun Object** pairs:\n- **起床** (*qǐchuáng* = rise + bed), **刷牙** (*shuā yá* = brush + teeth), **洗脸** (*xǐ liǎn* = wash + face)\n- **吃早饭 / 吃午饭 / 吃晚饭** (*chī zǎofàn / wǔfàn / wǎnfàn* = eat + meal)\n- **上学 / 上课 / 放学** (*shàngxué / shàngkè / fàngxué*), **回家** (*huí jiā*), **做作业** (*zuò zuòyè*), **睡觉** (*shuìjiào*)\n\n> **Crucial Tip:** Because **上学** and **回家** already have 'school' and 'home' built right into them, you say **我去上学** or **我四点回家** — NEVER ***我回家家*** or ***我回在家***!",
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Daily routine sentence train showing Subject plus Time plus Place plus Action Verb">' +
        '<rect x="10" y="10" width="620" height="240" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="38" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1e293b">The Mandarin Routine Train: Time &amp; Place Always Ride BEFORE the Verb!</text>' +
        '<rect x="28" y="64" width="112" height="86" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>' +
        '<text x="84" y="92" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1">1. SUBJECT</text>' +
        '<text x="84" y="118" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#1e293b">我</text>' +
        '<text x="84" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">Wǒ (I)</text>' +
        '<text x="152" y="112" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#64748b">→</text>' +
        '<rect x="164" y="64" width="176" height="86" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>' +
        '<text x="252" y="92" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">2. TIME (no 在!)</text>' +
        '<text x="252" y="118" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">下午五点</text>' +
        '<text x="252" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">xiàwǔ wǔ diǎn</text>' +
        '<text x="352" y="112" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#64748b">→</text>' +
        '<rect x="364" y="64" width="108" height="86" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>' +
        '<text x="418" y="92" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">3. PLACE</text>' +
        '<text x="418" y="118" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">在家</text>' +
        '<text x="418" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">zài jiā</text>' +
        '<text x="484" y="112" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#64748b">→</text>' +
        '<rect x="496" y="64" width="116" height="86" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="2"/>' +
        '<text x="554" y="92" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">4. ACTION</text>' +
        '<text x="554" y="118" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">做作业</text>' +
        '<text x="554" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">zuò zuòyè</text>' +
        '<rect x="48" y="172" width="544" height="58" rx="10" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>' +
        '<text x="320" y="196" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#9f1239">TRAP ALERT: Never write *我在下午五点做作业* or *我做作业下午五点*!</text>' +
        '<text x="320" y="216" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#881337">Use 在 (zài) for PLACES (在家, 在学校), NEVER before clock times!</text>' +
        "</svg>",
      diagramCaption: "Every routine sentence follows Subject → Time (without 在!) → Place → Action Verb.",
      workedExamples: [
        {
          title: "Unscrambling an English school-day sentence into STPV",
          problem:
            "Put these blocks into natural Mandarin order and translate: **吃早饭 / 我 / 七点一刻 / 每天早上**.",
          steps: [
            "Start with the Subject: **我** (*Wǒ*).",
            "Arrange the Time blocks from biggest to smallest: **每天早上** (*měitiān zǎoshang*, every morning) + **七点一刻** (*qī diǎn yí kè*, 7:15).",
            "Finish with the Action Verb phrase: **吃早饭** (*chī zǎofàn*, eat breakfast).",
          ],
          answer: "我每天早上七点一刻吃早饭。 — I eat breakfast at 7:15 every morning.",
          yourTurn: {
            question: "Translate into Mandarin: 'I go to bed at 9:30 pm.'",
            answer: {
              type: "text",
              accept: [
                "我晚上九点半睡觉",
                "我晚上九点半睡觉。",
                "晚上九点半我睡觉",
                "Wǒ wǎnshang jiǔ diǎn bàn shuìjiào",
                "Wǒ wǎnshang jiǔ diǎn sānshí fēn shuìjiào",
                "我晚上九点三十分睡觉",
                "我晚上九点三十分睡觉。",
              ],
              display: "我晚上九点半睡觉。 (Wǒ wǎnshang jiǔ diǎn bàn shuìjiào.)",
            },
            solution: "Subject (我) + Time big-to-small (晚上九点半) + Verb (睡觉) = 我晚上九点半睡觉。",
          },
        },
      ],
      keyPoints: [
        "Golden routine order: **Subject + Time + (Place) + Verb** (**我早上七点吃早饭**).",
        "NEVER put **在** (*zài*) before a clock time (***在七点*** ✗ → **七点** ✓); save **在** for places (**在家**, **在学校**).",
        "Don't forget the meal verb **吃** (*chī*): 'have breakfast' is **吃早饭**, never just ***早饭***.",
        "Link consecutive morning actions smoothly with **先…然后…** (*xiān… ránhòu…*, first… then…) or **…以后** (*…yǐhòu*, after…).",
      ],
      whyItWorks:
        "Mandarin sentences set the *stage* before filming the *action*: first tell the listener **who** (**我**), **when** (**下午五点**), and **where** (**在家**), and only then drop the action camera (**做作业**). Once you picture setting the stage before acting, English end-loaded times immediately feel backwards!",
      strategies: [
        "Stage-Before-Action Test: Underline the time phrase in the English prompt first and drag it directly in front of the Mandarin verb.",
        "Drop 'My' on Body Routine Verbs: Write **刷牙洗脸** (*shuā yá xǐ liǎn*), never ***刷我的牙，洗我的脸***.",
      ],
      thinkDeeper:
        "Notice how **上课** (*shàngkè*) can split open to insert a school subject: **上中文课** (*shàng Zhōngwén kè*, attend Chinese class). Based on that pattern, what do you think **睡午觉** (*shuì wǔjiào*) means when **午** (*wǔ*, noon) slips inside **睡觉** (*shuìjiào*)?",
    },
    {
      id: "introducing-yourself",
      heading: "Putting a full self-introduction together",
      discovery: {
        problem:
          "Read two Year 8 self-introductions:\n- **Version 1:** *我叫大卫。我十二岁。我是英国人。我住新加坡。我家有四口人。我六点半起床。我七点半上学。*\n- **Version 2:** **大家好！我叫大卫，今年十二岁。我是英国人，可是现在跟家人一起住在新加坡，上八年级。我家有四口人：爸爸、妈妈、妹妹和我，我们还养了一只可爱的小狗。我每天早上六点半起床，七点一刻坐校车去上学。认识大家我很高兴！**\n\nBoth are grammatically accurate — so why would Version 2 score top marks in IGCSE 0547 Writing & Speaking while Version 1 drops marks for style?",
        idea:
          "Version 1 repeats **我… 我… 我…** seven times in choppy 4-word bursts. Version 2 weaves ideas together using natural connectors (**可是** *kěshì* = but, **还** *hái* = also/in addition, **跟…一起** = together with), drops repeated subjects when the topic hasn't changed, and frames the speech with a warm opening (**大家好！**) and closing (**认识大家我很高兴！**).",
      },
      body:
        "### 1. The 5-Part Year 8 Self-Introduction Blueprint (~80–100 Characters)\n\n| Step | What to Include | High-Scoring Mandarin Frame |\n|---|---|---|\n| **1. Greeting & Name** | Greeting, surname + full name | **大家好！我姓陈，叫陈明。** |\n| **2. Age, Nationality & Home** | Age, nationality, living in Singapore, Year 8 | **我今年十三岁，是英国人，现在住在新加坡，上八年级。** |\n| **3. Family & Pets** | Household size (**口**), members (**、/和**), pets (**养/只**) | **我家有四口人：爸爸、妈妈、姐姐和我。我家还养了一只小猫。** |\n| **4. Daily Timetable** | 3–4 timed actions in STPV order | **我每天早上六点半起床，七点吃早饭，七点半去上学，下午三点半放学。** |\n| **5. Polite Sign-off** | Pleased to meet everyone / bounce-back question | **认识你们我很高兴！你呢？** |\n\n### 2. Four Easy Connector Upgrades\n- **可是 / 但是** (*kěshì / dànshì*, however/but): **我是英国人，可是我住在新加坡。**\n- **还** (*hái*, also / in addition — before a verb): **我家还养了一只小狗。**\n- **先…然后…** (*xiān… ránhòu…*, first… then…): **我早上六点半起床，先刷牙洗脸，然后吃早饭。**\n- **…以后** (*…yǐhòu*, after doing…): **放学以后，我四点一刻回家做作业。**",
      diagram:
        '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-step self-introduction flow from greeting and identity to family, school routine, and friendly sign-off">' +
        '<rect x="10" y="10" width="620" height="240" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="36" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">80-Character Year 8 Self-Introduction Flow (自我介绍)</text>' +
        '<rect x="24" y="56" width="108" height="128" rx="12" fill="#fee2e2" stroke="#c81e1e" stroke-width="1.5"/>' +
        '<text x="78" y="80" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c81e1e">1. Name</text>' +
        '<text x="78" y="106" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">大家好！</text>' +
        '<text x="78" y="128" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e293b">我姓…叫…</text>' +
        '<text x="78" y="154" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">Greeting + Name</text>' +
        '<rect x="146" y="56" width="112" height="128" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>' +
        '<text x="202" y="80" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">2. Profile</text>' +
        '<text x="202" y="106" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">今年十二岁</text>' +
        '<text x="202" y="128" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">住在新加坡</text>' +
        '<text x="202" y="150" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">上八年级</text>' +
        '<rect x="272" y="56" width="116" height="128" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>' +
        '<text x="330" y="80" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d">3. Family</text>' +
        '<text x="330" y="106" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">有…口人</text>' +
        '<text x="330" y="128" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">爸爸、妈妈和我</text>' +
        '<text x="330" y="150" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">养了一只狗</text>' +
        '<rect x="402" y="56" width="112" height="128" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>' +
        '<text x="458" y="80" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1">4. Routine</text>' +
        '<text x="458" y="106" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">早上六点半起床</text>' +
        '<text x="458" y="128" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">七点半上学</text>' +
        '<text x="458" y="150" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e293b">晚上九点半睡觉</text>' +
        '<rect x="528" y="56" width="88" height="128" rx="12" fill="#f3e8ff" stroke="#7e22ce" stroke-width="1.5"/>' +
        '<text x="572" y="80" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#7e22ce">5. Close</text>' +
        '<text x="572" y="112" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">认识大家</text>' +
        '<text x="572" y="134" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">我很高兴！</text>' +
        '<rect x="40" y="200" width="560" height="36" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1"/>' +
        '<text x="320" y="223" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#854d0e">Glue with connectors: 可是 (but) · 还 (also) · 先…然后… (first… then…) · …以后 (after…)</text>' +
        "</svg>",
      diagramCaption: "Link the 5 core pillars with connectors (可是, 还, 先…然后…, …以后) to turn simple facts into fluent Year 8 prose.",
      workedExamples: [
        {
          title: "Upgrading choppy sentences with connectors",
          problem:
            "Combine these two choppy sentences smoothly into one natural Mandarin sentence: **1) 我下午三点半放学。 2) 我下午四点一刻回家做作业。**",
          steps: [
            "Avoid repeating **我** and **下午** twice when the subject and afternoon timeframe stay the same.",
            "Use **放学以后** (*fàngxué yǐhòu*, after finishing school) or a comma to bridge the two events cleanly.",
          ],
          answer: "我下午三点半放学，四点一刻回家做作业。 (or 下午三点半放学以后，我四点一刻回家做作业。)",
          yourTurn: {
            question: "Complete this sentence with the Mandarin phrase for 'after finishing school': '____，我四点回家。' (Hint: 放学 + 以后)",
            answer: {
              type: "text",
              accept: [
                "放学以后",
                "fàngxué yǐhòu",
              ],
              display: "放学以后 (fàngxué yǐhòu)",
            },
            solution: "In Mandarin, 'after X' puts 以后 AFTER the action X: 放学以后 (fàngxué yǐhòu).",
          },
        },
      ],
      keyPoints: [
        "Avoid starting every clause with **我** — once the subject is clear, drop repeated **我** across comma-linked clauses.",
        "In Mandarin, **…以后** (*…yǐhòu*, after…) goes **AFTER** the action (**放学以后** = after finishing school, **吃早饭以后** = after eating breakfast).",
        "Use **、** (*dùnhào*) between listed family nouns and **，**/**。** between clauses.",
        "Always check IGCSE bullet coverage: every prompt bullet must be answered to earn full Communication marks!",
      ],
      whyItWorks:
        "Mandarin is a *topic-prominent* language: once you establish **我** (I) as the topic at the start of a sentence, listeners naturally carry that subject forward across commas until you introduce a new subject like **我家** or **我哥哥**. Dropping redundant pronouns makes your Chinese sound instantly authentic.",
      strategies: [
        "Pronoun Diet: Read your draft aloud — if three consecutive clauses start with **我**, merge two with a comma or **先…然后…**.",
        "Bullet Tick-Off: Before finishing a written paragraph, tick off Name, Age/Grade, Home, Family/Pets, and Routine against the prompt.",
      ],
      thinkDeeper:
        "Why does Mandarin put **以后** (*yǐhòu*, after) *after* the event (**吃早饭以后** = 'eating-breakfast-afterwards'), whereas English puts 'after' *before* it? Think about how a timeline flows from earlier to later!",
    },
  ],
  learn: {
    flashcards: [
      { front: "你好 vs 您好", back: "nǐ hǎo (hello to peers) vs nín hǎo (polite hello to teachers/elders — 心 heart under 你)" },
      { front: "不客气", back: "bú kèqi — you're welcome (tone sandhi: 不 shifts to 2nd tone bú before 4th-tone 客!)" },
      { front: "你叫什么名字？", back: "Nǐ jiào shénme míngzi? — What is your name? (in-situ question word)" },
      { front: "你是哪国人？", back: "Nǐ shì nǎ guó rén? — What nationality are you? (哪 nǎ = which)" },
      { front: "我今年十二岁，上八年级。", back: "Wǒ jīnnián shí'èr suì, shàng bā niánjí. — I am 12 this year and in Year 8 (no 是 before age!)" },
      { front: "你家有几口人？", back: "Nǐ jiā yǒu jǐ kǒu rén? — How many people are in your family? (口 counts household members)" },
      { front: "我没有哥哥。", back: "Wǒ méiyǒu gēge. — I don't have an older brother (ALWAYS 没有, never *不有*!)" },
      { front: "我家养了一只小狗。", back: "Wǒ jiā yǎng le yì zhī xiǎogǒu. — My family keeps a puppy (养 = keep pets, 只 = animal classifier)" },
      { front: "两点一刻 / 两点半", back: "liǎng diǎn yí kè (2:15) / liǎng diǎn bàn (2:30) — always 两点 for 2 o'clock!" },
      { front: "差五分八点", back: "chà wǔ fēn bā diǎn — five to eight (7:55 — subtract from the upcoming hour!)" },
      { front: "早上 / 上午 / 中午 / 下午 / 晚上", back: "early morning / morning / noon / afternoon / evening — placed BEFORE the clock hour!" },
      { front: "起床 → 刷牙洗脸 → 吃早饭", back: "qǐchuáng (get up) → shuā yá xǐ liǎn (brush teeth & wash face) → chī zǎofàn (eat breakfast)" },
      { front: "上学 → 上课 → 放学 → 回家", back: "shàngxué (go to school) → shàngkè (have class) → fàngxué (finish school) → huí jiā (go home)" },
      { front: "我晚上九点半睡觉。", back: "Wǒ wǎnshang jiǔ diǎn bàn shuìjiào. — I go to bed at 9:30 pm (Subject + Time + Verb)" },
    ],
    mustKnow: [
      "Can you greet a teacher politely with 您好 and state your surname (姓) and full name (叫)?",
      "Can you state your age (今年十二/十三岁) without inserting 是, and say you attend Year 8 (上八年级)?",
      "Can you ask and answer nationality questions using 哪国人 (新加坡人, 英国人, 中国人)?",
      "Can you ask yes/no questions with 吗 and bounce questions back with 呢 — without ever mixing 吗 with 什么/几/哪?",
      "Can you distinguish 口 (family headcount: 五口人), 个 (specific people: 两个妹妹) and 只 (pets: 一只猫)?",
      "Can you negate 有 exclusively with 没有 (never *不有*) and restrict 和 to joining nouns only?",
      "Can you tell any clock time using 点, 半, 刻, 分 and 差…分…点, using 两点 for 2 o'clock?",
      "Can you place parts of the day BEFORE the hour (早上七点半) and put Time BEFORE the verb without 在?",
      "Can you link a complete 80-character Year 8 self-introduction with 可是, 还, 先…然后… and …以后?",
    ],
    misconceptions: [
      {
        wrong: "*我是十二岁。* (putting 是 before age like English 'I am 12')",
        right: "**我今年十二岁。** (*Wǒ jīnnián shí'èr suì.* — Numbers + 岁 act as a predicate on their own; never add 是!)",
      },
      {
        wrong: "*你叫什么名字吗？* (adding 吗 onto a wh-question)",
        right: "**你叫什么名字？** (*Nǐ jiào shénme míngzi?* — 什么 already makes it a question; adding 吗 asks a question twice!)",
      },
      {
        wrong: "*我不有弟弟。* (negating 有 with 不)",
        right: "**我没有弟弟。** (*Wǒ méiyǒu dìdi.* — 有 is the one verb in Mandarin that ALWAYS takes 没, never 不.)",
      },
      {
        wrong: "*我有一个姐姐，和她十四岁。* (using 和 to join two clauses)",
        right: "**我有一个姐姐，她十四岁。** (*Wǒ yǒu yí gè jiějie, tā shísì suì.* — 和 joins nouns ONLY, never verb clauses!)",
      },
      {
        wrong: "*二点半下午* (using 二 for 2:00 and putting 'pm' after the hour)",
        right: "**下午两点半** (*xiàwǔ liǎng diǎn bàn* — big-to-small order puts 下午 first, and 2 o'clock is always 两点!)",
      },
      {
        wrong: "*我在七点起床每天早上。* (using 在 before clock time and putting time at the end)",
        right: "**我每天早上七点起床。** (*Wǒ měitiān zǎoshang qī diǎn qǐchuáng.* — Subject + Time [no 在!] + Verb.)",
      },
    ],
    examMistakes: [
      "Forgetting to include **和我** ('and me') when listing family members after **我家有四口人**, leaving only 3 people named.",
      "Writing **哪** (*nǎ*, which — with mouth radical 口) without its mouth radical as **那** (*nà*, that) in **你是哪国人？**.",
      "Misreading **差十分八点** (*chà shí fēn bā diǎn*) in IGCSE Listening as 8:10 instead of **7:50** ('10 minutes short of 8').",
      "Dropping the verb **吃** before meals (writing ***我七点早饭*** instead of **我七点吃早饭**).",
      "Writing ***回在家*** or ***去回家*** instead of clean **回家** (*huí jiā*).",
      "Putting **以后** before the action like English 'after school' (***以后放学*** ✗) instead of after it (**放学以后** ✓).",
      "Confusing **他** (*tā*, he — person radical 亻) and **她** (*tā*, she — female radical 女) when writing about mum or sisters.",
    ],
    mnemonics: [
      {
        topic: "Polite 您 (nín) vs casual 你 (nǐ)",
        device: "Put your teacher on your HEART (心)!",
        explanation: "Adding the heart radical **心** right underneath **你** creates **您** (*nín*), reminding you to use it respectfully with teachers and elders.",
      },
      {
        topic: "Character 家 (jiā — family / home)",
        device: "A PIG (豕) safe under a ROOF (宀) = HOME!",
        explanation: "The top roof **宀** shelters **豕** (an ancient pictograph of a pig). Having livestock under your roof meant a settled family home.",
      },
      {
        topic: "Younger sister 妹 (mèi) vs older sister 姐 (jiě)",
        device: "女 (girl) + 未 (wèi = NOT YET grown) = 妹妹!",
        explanation: "**未** (*wèi*) has a shorter top branch on the tree — she hasn't grown tall yet, so she is the *younger* sister!",
      },
      {
        topic: "Sleeping 睡 (shuì) & waking 早 (zǎo)",
        device: "Drooping EYES (目+垂) = 睡; SUN (日) rising over the horizon (十) = 早!",
        explanation: "In **睡**, the eye radical **目** meets **垂** (droop) — drooping eyelids mean sleep! In **早**, the sun **日** sits right above the treetop/horizon **十** for early morning.",
      },
    ],
    realWorld: [
      {
        title: "Morning Greetings in Singapore Schools & Kopitiams",
        detail: "In Singapore, pupils greet teachers with a crisp **王老师早！** or **老师早上好！**, while at neighbourhood kopitiams and hawker centres (**小贩中心**), ordering aunties and uncles warmly call people **小弟** (*xiǎodì*) or **小妹** (*xiǎomèi*).",
        emoji: "🏫",
      },
      {
        title: "Why Chinese Names Put Surname First",
        detail: "Whether it is **林俊杰** (JJ Lin, born in Singapore) or **陈洁仪** (Kit Chan), Chinese names honour family heritage first (**姓**) and personal identity second (**名**). In class, calling a teacher **陈老师** (Surname + Title) is polite — never *老师陈*!",
        emoji: "🪪",
      },
      {
        title: "MRT & Bus Announcements Across Singapore",
        detail: "From Orchard (**乌节** *Wūjié*) to Clementi (**金文泰** *Jīnwéntài*) near Tanglin, bilingual signs and station clocks use 24-hour digital displays, while spoken Mandarin uses **早上七点一刻** as commuters catch the morning train.",
        emoji: "🚇",
      },
      {
        title: "Tone Sandhi in Real Conversation",
        detail: "Native speakers don't pronounce syllables like robots: **你好** flows as *ní hǎo*, **不客气** glides as *bú kèqi*, and **一口人** shifts to *yì kǒu rén*. Spotting these natural pitch shifts boosts both your IGCSE Speaking fluency and Listening comprehension!",
        emoji: "🎵",
      },
    ],
    videos: [
      {
        title: "Mandarin Self-Introduction for Beginners & IGCSE Chinese",
        channel: "Chinese Zero to Hero",
        url: "https://www.youtube.com/results?search_query=mandarin+chinese+self+introduction+igcse+0547",
      },
      {
        title: "Family Members & 口 vs 个 in Chinese",
        channel: "Everyday Chinese",
        url: "https://www.youtube.com/results?search_query=chinese+family+members+ji+kou+ren",
      },
      {
        title: "How to Tell Clock Time in Mandarin (点, 半, 刻, 差)",
        channel: "Grace Mandarin Chinese",
        url: "https://www.youtube.com/results?search_query=how+to+tell+time+in+mandarin+chinese+dian+ban+ke",
      },
      {
        title: "Daily Routine & STPV Word Order in Mandarin",
        channel: "Yoyo Chinese",
        url: "https://www.youtube.com/results?search_query=mandarin+daily+routine+word+order+qichuang+shangxue",
      },
    ],
    formulas: [
      {
        name: "Surname + Full Name",
        formula: "我姓 + Surname，叫 + Full Name。",
        note: "我姓林，叫林美美。 (Wǒ xìng Lín, jiào Lín Měiměi.)",
      },
      {
        name: "Age & School Year (No 是!)",
        formula: "Subject + 今年 + Number + 岁，上 + Grade + 年级。",
        note: "我今年十二岁，上八年级。 (Wǒ jīnnián shí'èr suì, shàng bā niánjí.)",
      },
      {
        name: "Family Headcount & List",
        formula: "我家有 + Number + 口人：A、B + 和我。",
        note: "我家有四口人：爸爸、妈妈、弟弟和我。 (Wǒ jiā yǒu sì kǒu rén: bàba, māma, dìdi hé wǒ.)",
      },
      {
        name: "Clock Time ('To' the Hour)",
        formula: "差 + Minutes + 分 + Next Hour + 点",
        note: "差五分八点 = 7:55 (five to eight). 下午两点一刻 = 2:15 pm.",
      },
      {
        name: "Daily Routine STPV Order",
        formula: "Subject + Time (Big → Small) + (在 + Place) + Verb",
        note: "我每天早上六点半起床。 / 我下午五点在家做作业。",
      },
    ],
  },
};
