import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "illness-m1",
    title: "Paper 1 · Body Parts, Symptoms & Clinic Basics",
    questions: [
      {
        id: "illness-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "body-parts",
        question: "Which Mandarin word means **eyes**?",
        options: ["眼睛 (yǎnjing)", "耳朵 (ěrduo)", "鼻子 (bízi)", "嘴巴 (zuǐba)"],
        answerIndex: 0,
        hints: ["Look for the pair of characters that both contain the 目 (eye) radical on the left."],
        explanation:
          "**眼睛** (*yǎnjing*) means 'eyes' — both characters start with the **目** (*mù*, eye) radical. **耳朵** means 'ears', **鼻子** means 'nose', and **嘴巴** means 'mouth'.",
      },
      {
        id: "illness-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "body-parts",
        question: "Choose the correct measure word to complete the phrase: **两 ___ 腿** ('two legs').",
        options: ["本 (běn)", "条 (tiáo)", "张 (zhāng)", "件 (jiàn)"],
        answerIndex: 1,
        hints: ["Think of the classifier used for long, flexible things like trousers, roads, and rivers."],
        explanation:
          "Legs are long and slender, so Mandarin uses **条** (*tiáo*): **两条腿**. **本** is for books, **张** is for flat surfaces like faces or mouths (**一张嘴**), and **件** is for tops/coats.",
      },
      {
        id: "illness-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "body-parts",
        question: "In Singapore Mandarin, people often say **喉咙痛** (*hóulóng tòng*). Which northern/standard Mandarin phrase has the exact same meaning?",
        options: ["肚子疼 (dùzi téng)", "牙疼 (yáténg)", "嗓子疼 (sǎngzi téng)", "头疼 (tóuténg)"],
        answerIndex: 2,
        hints: ["Both 喉咙 and its synonym start with the 口 (mouth/throat) radical."],
        explanation:
          "**喉咙** (*hóulóng*) and **嗓子** (*sǎngzi*) both mean 'throat', so **嗓子疼** means 'sore throat'. **肚子疼** is a tummy ache, **牙疼** is a toothache, and **头疼** is a headache.",
      },
      {
        id: "illness-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "symptoms-illness",
        question: "How do you naturally say **'I caught a cold'** in Mandarin?",
        options: ["我是感冒。", "我有感冒。", "我吃感冒。", "我感冒了。"],
        answerIndex: 3,
        hints: ["Illnesses in Mandarin act directly as verbs — do NOT translate English 'have' or 'am'!"],
        explanation:
          "**我感冒了。** (*Wǒ gǎnmào le.*) treats **感冒** directly as a verb plus **了** for a new state. Saying **我有感冒** or **我是感冒** copies English 'have/am' grammar word-for-word and sounds unnatural.",
      },
      {
        id: "illness-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "symptoms-illness",
        question: "A nurse touches Xiaoming's forehead and says: **“你发烧三十八度五！”** What symptom does Xiaoming have?",
        options: ["A fever of 38.5°C", "A toothache", "A twisted ankle", "A peanut allergy"],
        answerIndex: 0,
        hints: ["烧 contains the 火 (fire) radical, and 三十八度五 is a temperature in degrees Celsius."],
        explanation:
          "**发烧** (*fāshāo*) means 'to have a fever', and **三十八度五** means '38.5 degrees' (°C). None of the other symptoms involve body temperature.",
      },
      {
        id: "illness-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "symptoms-illness",
        question: "Which question would a GP in a Singapore clinic most naturally ask first when a patient sits down?",
        options: [
          "你喜欢什么运动？",
          "你哪里不舒服？",
          "你要买几斤苹果？",
          "今天天气怎么样？",
        ],
        answerIndex: 1,
        hints: [
          "Look for the word meaning 'unwell / uncomfortable'.",
          "哪里 means 'where' — literally 'Where do you feel unwell?'",
        ],
        explanation:
          "**你哪里不舒服？** (*Nǐ nǎlǐ bù shūfu?*) means 'Where do you feel unwell?' — the classic opening question in a clinic consultation. The other sentences ask about sports, buying apples, and the weather.",
      },
      {
        id: "illness-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "at-the-clinic",
        question: "How do you say **'take medicine'** (i.e. swallow tablets) in Mandarin?",
        options: ["看药 (kàn yào)", "穿药 (chuān yào)", "吃药 (chī yào)", "打药 (dǎ yào)"],
        answerIndex: 2,
        hints: [
          "Mandarin does NOT use 'take' (拿) for swallowing pills.",
          "Think of the everyday verb used for meals and snacks!",
        ],
        explanation:
          "Mandarin says **吃药** (*chī yào*, literally 'eat medicine') for taking pills or tablets. **看药** would mean 'look at medicine', and **拿药** means collecting medicine at the pharmacy counter.",
      },
      {
        id: "illness-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "at-the-clinic",
        question: "What is the correct Mandarin way to address **Dr Wang**?",
        options: ["医生王", "王先生医生", "大王医生", "王医生"],
        answerIndex: 3,
        hints: [
          "Compare how you address Teacher Li (李老师).",
          "In Mandarin, does the surname come before or after the professional title?",
        ],
        explanation:
          "In Mandarin, the surname ALWAYS precedes the title: **王医生** (*Wáng yīshēng*, Dr Wang), just like **李老师** (Teacher Li). **医生王** copies English word order and is incorrect.",
      },
      {
        id: "illness-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "at-the-clinic",
        question: "Look at the medicine packet instruction: **饭后吃，一天两次，一次一片。** When should the patient take this medicine?",
        options: [
          "After meals, twice a day, one tablet each time",
          "Before meals, once a day, two tablets each time",
          "After meals, once a day, two tablets each time",
          "Before bedtime, twice a day, two tablets each time",
        ],
        answerIndex: 0,
        hints: [
          "饭后 contrasts with 饭前 (后 = after, 前 = before).",
          "一天两次 = twice a day; 一次一片 = one tablet per dose.",
        ],
        explanation:
          "**饭后** (*fànhòu*) means 'after meals', **一天两次** means 'twice a day', and **一次一片** means 'one tablet each time'. Watch out not to swap **两次** (twice) and **一片** (one tablet)!",
      },
      {
        id: "illness-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "modal-advice",
        question: "In the sentence **你发烧了，今天得在家休息**, how is **得** pronounced and what does it mean?",
        options: [
          "de (neutral tone) — degree particle",
          "děi (3rd tone) — must / have to",
          "dé (2nd tone) — to obtain",
          "dèi (4th tone) — should not",
        ],
        answerIndex: 1,
        hints: [
          "Notice that 得 stands directly BEFORE the verb phrase 在家休息.",
          "This spoken modal verb has a dipping 3rd tone.",
        ],
        explanation:
          "When **得** stands before a verb to express obligation ('must / have to'), it is pronounced **děi** (3rd tone). Neutral-tone *de* follows verbs (**跑得快**), and 2nd-tone *dé* appears in **得到** ('obtain').",
      },
      {
        id: "illness-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "modal-advice",
        question: "Which sentence correctly translates **'You should drink more warm water'**?",
        options: [
          "你应该喝温水多。",
          "你应该温水多喝。",
          "你应该多喝温水。",
          "你多应该喝温水。",
        ],
        answerIndex: 2,
        hints: [
          "In Mandarin advice, where does 多 ('more') sit relative to the action verb 喝?",
          "Put 应该 first, then 多 right in front of the verb!",
        ],
        explanation:
          "**你应该多喝温水。** (*Nǐ yīnggāi duō hē wēnshuǐ.*) puts modal **应该** first and adverbial **多** directly BEFORE the verb **喝**. **喝温水多** copies English word order and is ungrammatical.",
      },
      {
        id: "illness-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "modal-advice",
        question: "Your little brother is coughing badly and reaches for iced cola. Which warning is grammatically natural?",
        options: ["不喝冰可乐了！", "没喝冰可乐！", "不用冰可乐喝！", "别喝冰可乐！"],
        answerIndex: 3,
        hints: [
          "Look for the punchy imperative word meaning 'Don't!' before a verb.",
          "没 negates past actions, not commands.",
        ],
        explanation:
          "**别喝冰可乐！** (*Bié hē bīng kělè!*) uses **别** ('don't!') directly before the verb **喝** to give a clear warning. **没喝** means 'didn't drink' in the past.",
      },
      {
        id: "illness-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "body-parts",
        question: "Going into a clinic requires wearing a face mask. Which verb pairs with **口罩** (*kǒuzhào*, face mask)?",
        options: ["戴口罩 (dài kǒuzhào)", "穿口罩 (chuān kǒuzhào)", "打口罩 (dǎ kǒuzhào)", "开口罩 (kāi kǒuzhào)"],
        answerIndex: 0,
        hints: [
          "Is a face mask main clothing (like a shirt/trousers) or an accessory worn on the head/face (like glasses and hats)?",
          "Choose the accessory verb!",
        ],
        explanation:
          "Face masks, glasses, hats, and scarves are accessories, so Mandarin always uses **戴** (*dài*): **戴口罩**. **穿** (*chuān*) is reserved for clothes and shoes.",
      },
      {
        id: "illness-m1-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sick-leave-note",
        question: "When writing a sick-leave email (**请假条**) to your Chinese teacher, how should you begin?",
        options: [
          "你好，老师陈！",
          "尊敬的陈老师，您好！",
          "喂，陈老师你好！",
          "亲爱的陈，你好！",
        ],
        answerIndex: 1,
        hints: ["Put the surname before 老师, and use the respectful pronoun with 心 (heart) underneath!"],
        explanation:
          "**尊敬的陈老师，您好！** puts surname before title (**陈老师**) and uses polite **您好** (*nínhǎo*) for a teacher. **喂** is for answering phone calls, and **老师陈** has backwards word order.",
      },
      {
        id: "illness-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "at-the-clinic",
        question: "Read carefully: **医生给美美开了感冒药，让她一天吃三次，一次吃两片。美美一共要吃两天的药。** How many tablets will Meimei take in total over the **two days**?",
        options: ["4 tablets", "6 tablets", "12 tablets", "8 tablets"],
        answerIndex: 2,
        hints: [
          "First work out how many tablets Meimei takes in ONE day: 一天吃三次，一次吃两片.",
          "Multiply that daily total by 两天 (2 days)!",
        ],
        explanation:
          "**一天吃三次，一次吃两片** means 3 × 2 = 6 tablets per day. Over **两天** (2 days), she takes 6 × 2 = 12 tablets in total (**十二片药**). 6 is the single-day trap!",
      },
    ],
  },
  {
    id: "illness-m2",
    title: "Paper 2 · Radicals, Grammar Traps & Clinic Dialogues",
    questions: [
      {
        id: "illness-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "body-parts",
        question: "What semantic clue do the characters **病** (*bìng*), **疼** (*téng*), and **痛** (*tòng*) all share?",
        options: [
          "They all contain the 口 (mouth) radical",
          "They all contain the 月 (flesh) radical",
          "They all contain the 艹 (herb) radical",
          "They all contain the 疒 (sickness) radical",
        ],
        answerIndex: 3,
        hints: ["Look at the frame wrapping over the top and left side of 病, 疼, and 痛."],
        explanation:
          "**病**, **疼**, and **痛** are all framed by **疒** (*bìngzìtóu*, the sickness radical), which pictures a sick person resting on a bed. **艹** appears in **药** (medicine), and **月** appears in body parts like **肚子** and **腿**.",
      },
      {
        id: "illness-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "symptoms-illness",
        question: "Choose the ONLY grammatically correct sentence for **'My head hurts a bit'**.",
        options: [
          "我的头有点儿疼。",
          "我的头疼有点儿。",
          "我有一点儿头疼了有。",
          "我的头很有点儿疼。",
        ],
        answerIndex: 0,
        hints: [
          "Where does 有点儿 ('a little bit' for unwelcome feelings) stand relative to 疼?",
          "Never combine 很 and 有点儿 together!",
        ],
        explanation:
          "**我的头有点儿疼。** places the degree adverb **有点儿** directly BEFORE **疼**. Putting **有点儿** after the verb (**疼有点儿**) or stacking **很** + **有点儿** breaks Mandarin adverb rules.",
      },
      {
        id: "illness-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "symptoms-illness",
        question: "How do you say **'I am allergic to seafood'** in Mandarin?",
        options: [
          "我跟海鲜过敏。",
          "我对海鲜过敏。",
          "我给海鲜过敏。",
          "我在海鲜过敏。",
        ],
        answerIndex: 1,
        hints: [
          "Think of the preposition meaning 'towards / to' — the exact same one used in 对…感兴趣!",
          "Frame: Subject + ___ + Allergen + 过敏.",
        ],
        explanation:
          "Allergies always use the frame **对 + Noun + 过敏**: **我对海鲜过敏** (*Wǒ duì hǎixiān guòmǐn*). **跟** means 'with', **给** means 'for/give', and **在** marks location.",
      },
      {
        id: "illness-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "body-parts",
        question: "Which sentence describes someone's appearance **accurately** in Mandarin?",
        options: [
          "姐姐的头发是很长。",
          "姐姐有长头发很。",
          "姐姐的头发很长，眼睛很大。",
          "姐姐的眼睛大很。",
        ],
        answerIndex: 2,
        hints: [
          "Remember how Mandarin links a noun subject to an adjective predicate!",
          "Never put 是 before an adjective like 长 or 大 — use 很 before the adjective instead.",
        ],
        explanation:
          "**姐姐的头发很长，眼睛很大。** uses the natural Topic-Comment pattern with **很** before adjectives. **头发是很长** misuses **是** before an adjective, and **大很** puts **很** in the wrong order.",
      },
      {
        id: "illness-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "at-the-clinic",
        question: "In the clinic sentence **护士先帮我量体温**, what is the Pinyin of **量** and what does the phrase mean?",
        options: [
          "liàng — prescribe medicine",
          "liáng — give an injection",
          "liàng — check blood pressure",
          "liáng — take one's temperature",
        ],
        answerIndex: 3,
        hints: [
          "体温 means 'body temperature'.",
          "When 量 is a verb meaning 'to measure', it takes the rising 2nd tone!",
        ],
        explanation:
          "**量体温** (*liáng tǐwēn*) means 'to measure/take one's body temperature', and the verb **量** takes the 2nd tone (*liáng*) — unlike the 4th-tone noun *liàng* in **数量** (quantity).",
      },
      {
        id: "illness-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "at-the-clinic",
        question: "Which sentence follows Mandarin's **Golden STPV (Subject + Time + Place + Verb)** word order?",
        options: [
          "妈妈今天早上带我去诊所看病。",
          "妈妈带我去诊所看病今天早上。",
          "今天早上看病在诊所妈妈。",
          "妈妈去诊所今天早上看病。",
        ],
        answerIndex: 0,
        hints: [
          "Time expressions (今天早上) must come BEFORE the verb phrase, never at the end of the sentence!",
          "Check Subject (妈妈) + Time (今天早上) + Action (带我去诊所看病).",
        ],
        explanation:
          "**妈妈今天早上带我去诊所看病。** places Subject (**妈妈**) + Time (**今天早上**) before the serial verb phrase (**带我去诊所看病**). Putting **今天早上** at the end copies English word order.",
      },
      {
        id: "illness-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "modal-advice",
        question: "A patient asks: **“医生，我的感冒好多了，明天还得吃药吗？”** If the patient **does NOT need to** take medicine tomorrow, what should the doctor reply?",
        options: [
          "明天不得吃药。",
          "明天不用吃药了。",
          "明天没得吃药。",
          "明天不有吃药。",
        ],
        answerIndex: 1,
        hints: [
          "How do you negate modal 得 (děi, 'have to')?",
          "You want 'no need to / don't have to', NOT formal legal 'prohibited' (*不得*).",
        ],
        explanation:
          "The negative of **得** (*děi*, must / have to) is **不用** (*búyòng*, don't need to): **明天不用吃药了。** **不得** means 'strictly prohibited' on formal signs, and **不有** does not exist in Mandarin.",
      },
      {
        id: "illness-m2-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "symptoms-illness",
        question: "After eating three bowls of spicy noodles and two ice creams, Daming clutches his belly and groans. What is wrong with him?",
        options: ["他牙疼。", "他耳朵不舒服。", "他肚子疼。", "他手疼。"],
        answerIndex: 2,
        hints: ["Which body part digests food and reacts to ice cream right after spicy noodles?"],
        explanation:
          "**他肚子疼。** (*Tā dùzi téng.*) means 'He has a tummy/stomach ache', matching overeating spicy noodles and ice cream. **牙疼** is toothache, **耳朵** is ear, and **手疼** is hand pain.",
      },
      {
        id: "illness-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "modal-advice",
        question: "Dentist Lin tells a Year 8 student: **“为了保护牙齿，你应该 ___ 吃糖，早晚刷牙。”** Which word fits the blank?",
        options: ["多 (duō)", "别 (bié)", "没 (méi)", "少 (shǎo)"],
        answerIndex: 3,
        hints: [
          "To protect your teeth, should you eat MORE sweets or FEWER sweets?",
          "Note that 应该 is already in front of the blank, so 别 ('don't!') cannot follow 应该 directly.",
        ],
        explanation:
          "**少** (*shǎo*, less/fewer) placed before **吃** gives **你应该少吃糖** ('you should eat fewer sweets'). **多吃糖** would advise eating more sweets, and **应该别** is ungrammatical (use **不应该** instead).",
      },
      {
        id: "illness-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sick-leave-note",
        question: "Which sentence correctly uses **因为…所以…** to explain a school absence?",
        options: [
          "因为我今天发烧了，所以我不能去学校上课。",
          "因为我今天发烧了，但是我不能去学校上课。",
          "虽然我今天发烧了，所以我不能去学校上课。",
          "因为我今天发烧了，和不能去学校上课。",
        ],
        answerIndex: 0,
        hints: [
          "Pair 'because' with 'therefore' — never mix Karena/Although pairs or join clauses with 和!",
          "因为 always partners with 所以.",
        ],
        explanation:
          "Mandarin pairs **因为…所以…** ('because… therefore…'). Mixing **因为** with **但是** or **虽然** with **所以** scrambles two different connector pairs, and **和** can NEVER join two clauses in Mandarin!",
      },
      {
        id: "illness-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "symptoms-illness",
        question: "Which sentence about **yesterday's** illness is 100% grammatically accurate?",
        options: [
          "我昨天不去了学校，因为我生病。",
          "我昨天没去学校，因为我生病了。",
          "我昨天没去了学校，因为我有生病。",
          "我昨天没有去学校了，因为我是生病。",
        ],
        answerIndex: 1,
        hints: [
          "How do you negate a past action ('didn't go yesterday') — 不 or 没?",
          "Crucial tense rule: when you use 没(有) before a verb, can you keep completed-action 了 after the verb?",
        ],
        explanation:
          "**我昨天没去学校，因为我生病了。** uses **没** (not **不**) to negate a past action and drops **了** after **去** (**没去**, NEVER *没去了*!). Meanwhile **我生病了** correctly marks the onset of illness.",
      },
      {
        id: "illness-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sick-leave-note",
        question: "Your classmate Anni messages you that she is at home with flu. Which reply is warmest and most idiomatic?",
        options: [
          "祝你生日快乐！",
          "欢迎光临！慢用！",
          "你要好好休息，祝你早日康复！",
          "太贵了，便宜一点儿吧！",
        ],
        answerIndex: 2,
        hints: [
          "Look for the four-character blessing that wishes someone a speedy recovery.",
          "康复 means 'recover health'.",
        ],
        explanation:
          "**你要好好休息，祝你早日康复！** means 'Rest well, wishing you a speedy recovery!' **生日快乐** is for birthdays, **欢迎光临** is for restaurants, and **太贵了** is for market bargaining.",
      },
      {
        id: "illness-m2-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "at-the-clinic",
        question: "Little Didi cries at the clinic: **“妈妈，我害怕打针，我只想吃药！”** What is Didi afraid of?",
        options: ["Having his temperature taken", "Drinking warm water", "Opening his mouth", "Having an injection"],
        answerIndex: 3,
        hints: ["针 has the 钅(metal) radical — think of a sharp metal needle!"],
        explanation:
          "**打针** (*dǎzhēn*) means 'having an injection / jab' (notice the metal radical **钅** in **针**, needle). He says he is scared of an injection and only wants to take medicine (**吃药**).",
      },
      {
        id: "illness-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "at-the-clinic",
        question: "Read this short clinic dialogue:\n- 医生：你哪里不舒服？什么时候开始的？\n- 林林：从前天晚上开始，我就一直咳嗽，今天早上还发烧了。\nHow long has Linlin been coughing if **today is Wednesday (星期三)**?",
        options: [
          "Since Monday evening",
          "Since Tuesday morning",
          "Since Thursday evening",
          "Only since Wednesday morning",
        ],
        answerIndex: 0,
        hints: [
          "Today is 星期三 (Wednesday). Yesterday (昨天) was Tuesday.",
          "What day was 前天 (the day before yesterday)?",
        ],
        explanation:
          "**前天** (*qiántiān*) means 'the day before yesterday'. Since today is Wednesday (**星期三**), **前天晚上** was **Monday evening** (**星期一晚上**). Only the fever (**发烧**) started this morning!",
      },
      {
        id: "illness-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sick-leave-note",
        question: "Which phrase correctly expresses **'ask Teacher Zhang for two days' sick leave'**?",
        options: [
          "请假张老师二天",
          "向张老师请两天病假",
          "给老师张请假两天病",
          "对张老师请二天假病",
        ],
        answerIndex: 1,
        hints: [
          "请假 is a separable verb (请 + duration + 病假)!",
          "Use 向 + Person + 请…假, and remember 两 (not 二) before 天!",
        ],
        explanation:
          "**向张老师请两天病假** uses **向** ('from/to' a person in polite requests), puts surname before title (**张老师**), uses **两** before **天**, and inserts **两天病** inside the separable verb **请…假**!",
      },
    ],
  },
  {
    id: "illness-m3",
    title: "Paper 3 · IGCSE Reading Comprehension & Nuance",
    questions: [
      {
        id: "illness-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "body-parts",
        question: "Which character contains the **艹** (grass/herb) radical because traditional remedies were made from plants?",
        options: ["病 (bìng)", "医 (yī)", "药 (yào)", "疼 (téng)"],
        answerIndex: 2,
        hints: ["Look at the top of each character for 艹 (two little crosses on a horizontal stroke)."],
        explanation:
          "**药** (*yào*, medicine) has the **艹** grass/herb radical on top, reflecting plant-based Chinese herbal medicine (**中药**). **病** and **疼** use the **疒** sickness radical.",
      },
      {
        id: "illness-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "symptoms-illness",
        question: "Read: **哥哥昨天踢了两个小时足球，今天两条腿又酸又累，走不动路了。** Why can't older brother walk properly today?",
        options: [
          "He caught a bad cold in the rain",
          "He has a high fever of 39 degrees",
          "He ate sour fruit and has a stomach-ache",
          "Both his legs are sore and tired after two hours of football",
        ],
        answerIndex: 3,
        hints: [
          "两条腿 means 'both legs', and 又…又… means 'both… and…'.",
          "酸 on muscles/limbs means 'aching / sore' (not sour food!).",
        ],
        explanation:
          "When describing muscles like **腿** (legs) or **脖子** (neck), **酸** (*suān*) means 'aching / sore with lactic acid', not 'sour taste'! After playing football for two hours yesterday, both his legs are sore and tired (**又酸又累**).",
      },
      {
        id: "illness-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "symptoms-illness",
        question: "Read: **一到春天，花园里有很多花粉，爸爸就不停地打喷嚏、流鼻涕。** What is most likely happening to Dad?",
        options: [
          "He has a pollen allergy (hay fever) causing sneezing and a runny nose",
          "He has toothache from eating too much sugar",
          "He injured his knee while jogging in the park",
          "He feels drowsy after taking cold tablets",
        ],
        answerIndex: 0,
        hints: [
          "花粉 (huāfěn) = flower + powder = pollen.",
          "打喷嚏 = sneeze; 流鼻涕 = runny nose.",
        ],
        explanation:
          "In spring (**春天**), pollen (**花粉**) in the garden makes Dad sneeze non-stop (**不停地打喷嚏**) and have a runny nose (**流鼻涕**) — classic hay fever / pollen allergy (**花粉过敏**).",
      },
      {
        id: "illness-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "at-the-clinic",
        question: "Read the clinic sign:\n**温馨提示：如果您发烧或者咳嗽，请先戴好口罩，再到护士台量体温。**\nWhat must a coughing patient do **first**?",
        options: [
          "Pay the consultation fee at the counter",
          "Put on a face mask properly",
          "Take two tablets with warm water",
          "Go straight into the doctor's room",
        ],
        answerIndex: 1,
        hints: [
          "Follow the sequence markers 先…再… ('first… then…').",
          "What comes right after 请先?",
        ],
        explanation:
          "**请先戴好口罩，再到护士台量体温** uses **先…再…** ('first… then…'): first put on a face mask properly (**戴好口罩**), and only *then* go to the nurse's station to have your temperature taken.",
      },
      {
        id: "illness-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "modal-advice",
        question: "Read this note on a medicine bottle: **注意：吃了这种感冒药以后会觉得很困，所以吃药以后不要开车。** Why shouldn't someone drive after taking this medicine?",
        options: [
          "It makes you very hungry",
          "It gives you a sore throat",
          "It makes you feel very sleepy/drowsy",
          "It must be taken before breakfast",
        ],
        answerIndex: 2,
        hints: [
          "Remember the visual character 困 (a tree 木 boxed inside an enclosure 囗).",
          "What feeling makes driving dangerous after cold medicine?",
        ],
        explanation:
          "**困** (*kùn*) means 'sleepy / drowsy'. The label warns that taking this cold medicine makes you feel very drowsy (**会觉得很困**), so you must not drive afterwards (**不要开车**).",
      },
      {
        id: "illness-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "modal-advice",
        question: "Which sentence uses **不但…而且…** ('not only… but also…') accurately in a health context?",
        options: [
          "多运动不但对身体好，但是能让我们少生病。",
          "不但多运动对身体好，所以能让我们少生病。",
          "多运动对身体好不但，而且少生病。",
          "多运动不但对身体好，而且能让我们少生病。",
        ],
        answerIndex: 3,
        hints: [
          "Keep the paired connector halves matched: 不但 always partners with 而且.",
          "When both clauses share the same subject (多运动), 不但 goes right after the subject!",
        ],
        explanation:
          "**多运动不但对身体好，而且能让我们少生病。** places **不但** right after the shared subject (**多运动**) and pairs it cleanly with **而且**. Mixing **不但** with **但是** or **所以** breaks the connector pair.",
      },
      {
        id: "illness-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "at-the-clinic",
        question: "Read Dr Chen's notes for Xiao Wen:\n**体温：37.8°C（低烧）。嗓子发炎。不用打针，开三天西药。白片早晚各吃一片；黄片一天三次，一次两片。**\nHow many tablets (**white + yellow combined**) does Xiao Wen take in **one day**?",
        options: ["8 tablets", "3 tablets", "6 tablets", "9 tablets"],
        answerIndex: 0,
        hints: [
          "Calculate the white tablets (白片) per day first: 早晚各吃一片 ('morning and evening, 1 tablet each').",
          "Now calculate the yellow tablets (黄片) per day: 一天三次，一次两片 (3 × 2), then add them together!",
        ],
        explanation:
          "**白片早晚各吃一片** = 1 in the morning + 1 in the evening = **2 white tablets/day**. **黄片一天三次，一次两片** = 3 × 2 = **6 yellow tablets/day**. Total per day = 2 + 6 = 8 tablets!",
      },
      {
        id: "illness-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sick-leave-note",
        question: "Read Weiming's sick-leave note:\n**李老师，您好！昨天下午我在东海岸公园淋了大雨，晚上就开始发烧、头疼。今天上午妈妈带我去诊所看病，医生让我今天和明天都在家休息，所以我星期四才能回学校上课。**\nOn which day of the week is Weiming writing this note?",
        options: ["Monday (星期一)", "Tuesday (星期二)", "Wednesday (星期三)", "Thursday (星期四)"],
        answerIndex: 1,
        hints: [
          "Look at the doctor's instruction: 今天和明天都在家休息 ('rest at home both today and tomorrow').",
          "If he can only return to school on Thursday (星期四), what day must tomorrow and today be?",
        ],
        explanation:
          "Weiming must rest at home **today and tomorrow** (**今天和明天**) and can only return to school on **Thursday** (**星期四**). Therefore tomorrow is Wednesday (**星期三**), which means **today** is **Tuesday** (**星期二**)!",
      },
      {
        id: "illness-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "body-parts",
        question: "In the sentence **爷爷今年七十五岁了，但是身体还很健康，耳朵和眼睛都很好**, what does **身体** refer to?",
        options: [
          "Only his stomach",
          "His clinic medical card",
          "His overall physical health and body",
          "His hospital doctor",
        ],
        answerIndex: 2,
        hints: [
          "Notice how 身体 pairs with 很健康 ('very healthy').",
          "身体 can mean both the physical body and a person's general health.",
        ],
        explanation:
          "**身体** (*shēntǐ*) means both 'physical body' and 'overall health'. Saying **身体还很健康** means Grandpa is still in great physical health at age 75.",
      },
      {
        id: "illness-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "symptoms-illness",
        question: "Mum looks at you at breakfast and asks: **“你的脸色怎么这么不好？是不是没睡好？”** What did Mum notice?",
        options: [
          "Your schoolbag is too heavy",
          "Your voice is very loud",
          "Your trainers are dirty",
          "You look pale / unwell in the face",
        ],
        answerIndex: 3,
        hints: [
          "脸 = face + 色 = colour.",
          "Put them together to get 'facial complexion' — 脸色不好 means looking pale or unwell!",
        ],
        explanation:
          "**脸色** (*liǎnsè*) literally means 'face colour / complexion'. **脸色不好** means looking pale, peaky, or unwell, prompting Mum to ask if you didn't sleep well.",
      },
      {
        id: "illness-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "modal-advice",
        question: "Compare these two doctor statements:\n1. **你不用吃这种药。**\n2. **你千万别吃这种药！**\nWhat is the exact difference in meaning?",
        options: [
          "Sentence 1 says you don't need to take it; Sentence 2 warns you strictly NOT to take it",
          "Sentence 1 warns it is dangerous; Sentence 2 says it is optional",
          "Both mean 'take more of this medicine after meals'",
          "Sentence 1 refers to yesterday; Sentence 2 refers to last week",
        ],
        answerIndex: 0,
        hints: [
          "不用 negates obligation ('don't need to').",
          "千万别 is an urgent negative command ('under no circumstances do it!').",
        ],
        explanation:
          "**不用吃** means 'there is no need to take it' (e.g. you have already recovered), whereas **千万别吃！** means 'definitely do NOT take it!' (e.g. because you are allergic to it).",
      },
      {
        id: "illness-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "at-the-clinic",
        question: "Complete the sentence naturally: **吃了药、睡了一觉以后，我觉得 ___。** ('After taking medicine and having a sleep, I feel much better.')",
        options: ["好一点儿有", "好多了", "多好了不", "很最好了"],
        answerIndex: 1,
        hints: [
          "Compare 舒服多了 ('much more comfortable').",
          "To say 'much more [adjective]' in Mandarin, put 多了 AFTER the adjective!",
        ],
        explanation:
          "**好多了** (*hǎo duō le*, 'much better') uses the structure **Adjective + 多了** (compare **舒服多了**, much more comfortable). Note the contrast with **多喝水**, where **多** sits before a *verb*!",
      },
      {
        id: "illness-m3-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sick-leave-note",
        question: "What is a **请假条** (*qǐngjiàtiáo*)?",
        options: [
          "A restaurant menu",
          "A thermometer",
          "A written leave-of-absence / sick-leave note",
          "A bottle of cough syrup",
        ],
        answerIndex: 2,
        hints: ["请假 = ask for leave; 条 = a slip/note."],
        explanation:
          "**请假条** (*qǐngjiàtiáo*) is a written note requesting leave of absence (such as sick leave from school). A menu is **菜单**, and a thermometer is **体温计**.",
      },
      {
        id: "illness-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "symptoms-illness",
        question: "Read: **新加坡外面的气温有三十二度，可是乌节路商场里的空调只有十八度。小丽没带外套，回家以后就头疼、流鼻涕了。** According to the passage, why did Xiaoli fall ill?",
        options: [
          "She swam in cold sea water at Sentosa",
          "She ate raw seafood at a hawker centre",
          "She stayed up until midnight playing computer games",
          "The huge temperature drop into the cold air-conditioned mall without a jacket",
        ],
        answerIndex: 3,
        hints: [
          "Compare outside temperature (三十二度 = 32°C) with the Orchard Road mall's air-con (空调十八度 = 18°C).",
          "What did Xiaoli forget to bring (没带外套)?",
        ],
        explanation:
          "Outside was 32°C while the air-conditioning (**空调**) inside the Orchard Road mall was 18°C, and Xiaoli didn't bring a jacket (**没带外套**), causing her headache and runny nose when she got home.",
      },
      {
        id: "illness-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "modal-advice",
        question: "Which piece of health advice contains **ZERO** grammar errors?",
        options: [
          "要想身体健康，我们应该多吃蔬菜水果，少喝甜的饮料，每天早睡早起。",
          "要想身体健康，我们应该吃蔬菜水果多，喝少甜的饮料，早睡早起每天。",
          "要想身体健康，我们得不吃蔬菜，别多休息在晚上。",
          "要想身体健康，我们应该是有运动每天在公园。",
        ],
        answerIndex: 0,
        hints: [
          "Check that 多 and 少 stand directly BEFORE their verbs (多吃, 少喝).",
          "Check STPV word order: 每天 must precede 早睡早起, never sit at the end!",
        ],
        explanation:
          "**要想身体健康，我们应该多吃蔬菜水果，少喝甜的饮料，每天早睡早起。** puts **多** and **少** before **吃** and **喝**, and places time **每天** before **早睡早起**. All three distractors violate pre-verbal modifier or STPV rules.",
      },
    ],
  },
];
