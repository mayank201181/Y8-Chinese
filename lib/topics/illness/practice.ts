import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "illness-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "body-parts",
      question: "Which body part is **肚子** (*dùzi*)?",
      options: ["neck", "tummy / stomach", "shoulder", "knee"],
      answerIndex: 1,
      hints: ["You clutch this body part when you eat too much ice cream: 肚子疼!"],
      explanation:
        "**肚子** (*dùzi*) means 'tummy / belly / stomach'. 'Neck' is **脖子**, 'shoulder' is **肩膀**, and 'knee' is **膝盖**.",
    },
    {
      id: "illness-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "symptoms-illness",
      question: "Translate into Mandarin (Hanzi or Pinyin): **I have a headache.**",
      answer: {
        type: "text",
        accept: ["我头疼", "我头痛", "我的头疼", "我的头痛", "Wǒ tóuténg", "Wǒ tóutòng", "Wǒ de tóu téng", "Wǒ de tóu tòng"],
        display: "我头疼。 (Wǒ tóuténg.)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["我有头疼", "我有头痛", "wǒ yǒu tóuténg"] },
          feedback: "Drop 有! In Mandarin, 头疼 acts directly as a verb: say 我头疼, never *我有头疼*.",
        },
      ],
      hints: ["Put 头 ('head') right before 疼 ('ache') — do NOT use 有!"],
      solution: [
        "Subject: **我** (*Wǒ*).",
        "Body part + ache: **头疼** (*tóuténg*) or **头痛** (*tóutòng*) with no **有**.",
        "Full sentence: **我头疼。**",
      ],
    },
    {
      id: "illness-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "at-the-clinic",
      question: "What does **看医生** (*kàn yīshēng*) mean?",
      options: ["to become a doctor", "to prescribe medicine", "to see a doctor", "to take an injection"],
      answerIndex: 2,
      hints: ["看 here works just like English 'see' in 'see a doctor'."],
      explanation:
        "**看医生** (*kàn yīshēng*) — and **看病** (*kànbìng*) — mean 'to see / consult a doctor'. 'Prescribe medicine' is **开药**, and 'have an injection' is **打针**.",
    },
    {
      id: "illness-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "at-the-clinic",
      question: "Translate into Mandarin: **take medicine** (two characters, literally 'eat medicine').",
      answer: {
        type: "text",
        accept: ["吃药", "chī yào"],
        display: "吃药 (chī yào)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["拿药", "ná yào"] },
          feedback: "拿药 means picking up medicine from the pharmacy counter! To swallow tablets, Mandarin says 吃药 ('eat medicine').",
        },
      ],
      hints: [
        "Mandarin uses the verb 'to eat' for swallowing tablets.",
        "Combine 吃 (chī) + 药 (yào).",
      ],
      solution: [
        "Use **吃** (*chī*, eat) + **药** (*yào*, medicine) → **吃药** (*chī yào*).",
      ],
    },
    {
      id: "illness-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "modal-advice",
      question: "Complete the doctor's advice: **你感冒了，应该 ___ 休息。** ('You caught a cold; you should rest more.')",
      options: ["少 (shǎo)", "别 (bié)", "没 (méi)", "多 (duō)"],
      answerIndex: 3,
      hints: [
        "You want 'rest MORE', placing the modifier right before the verb 休息.",
        "少休息 would mean 'rest less'!",
      ],
      explanation:
        "**多** (*duō*) goes directly before the verb **休息** to mean 'rest more': **应该多休息**. **少** means 'less', **别** means 'don't', and **没** negates past actions.",
    },
    {
      id: "illness-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "at-the-clinic",
      question: "A medicine label says: **一天三次，一次两片。** How many tablets do you take in **one single day**? (Type a number.)",
      answer: {
        type: "number",
        value: 6,
        display: "6 (六片)",
      },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "2 tablets (两片) is the amount for ONE dose (一次), not the whole day!",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "3 (三次) is how many times a day you take the medicine — multiply by 2 tablets per dose!",
        },
      ],
      hints: [
        "一天三次 = 3 times per day.",
        "一次两片 = 2 tablets each time. Multiply 3 × 2!",
      ],
      solution: [
        "**一天三次** = 3 doses per day.",
        "**一次两片** = 2 tablets per dose.",
        "Total in one day = 3 × 2 = 6 tablets.",
      ],
    },
    {
      id: "illness-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "modal-advice",
      question: "Which Pinyin correctly matches **得** in **我今天得去看医生** ('I must go to see the doctor today')?",
      options: ["děi", "de", "dé", "dēi"],
      answerIndex: 0,
      hints: [
        "Before a verb meaning 'must / have to', 得 takes a dipping third tone.",
        "Neutral tone de only appears AFTER a verb (e.g. 跑得快).",
      ],
      explanation:
        "Modal **得** ('must / have to') before a verb is pronounced **děi** (3rd tone).",
    },
    {
      id: "illness-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "symptoms-illness",
      question: "How do you say **to have a fever** in Mandarin (two characters)?",
      answer: {
        type: "text",
        accept: ["发烧", "fāshāo"],
        display: "发烧 (fāshāo)",
      },
      hints: [
        "Literally 'emit heat/burn'.",
        "First character 发 (fā), second character 烧 (shāo, with the 火 fire radical).",
      ],
      solution: [
        "**发烧** (*fāshāo*) = to have a fever / high temperature.",
      ],
    },
    {
      id: "illness-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "sick-leave-note",
      question: "Which closing phrase wishes an unwell classmate **'Get well soon!'**?",
      options: ["慢走！", "祝你早日康复！", "好久不见！", "新年快乐！"],
      answerIndex: 1,
      hints: [
        "早日 = at an early date; 康复 = restore health.",
        "Eliminate greetings for New Year or 'long time no see'.",
      ],
      explanation:
        "**祝你早日康复！** (*Zhù nǐ zǎorì kāngfù!*) means 'Wishing you a speedy recovery / Get well soon!'.",
    },
    {
      id: "illness-quiz-q10",
      kind: "short",
      difficulty: "core",
      guideRef: "modal-advice",
      question: "Translate into Mandarin: **Don't drink iced water!** (Use **别**.)",
      answer: {
        type: "text",
        accept: ["别喝冰水", "你别喝冰水", "Bié hē bīngshuǐ", "Nǐ bié hē bīngshuǐ"],
        display: "别喝冰水！ (Bié hē bīngshuǐ!)",
      },
      hints: [
        "Start with 别 (bié, 'don't!'), followed immediately by the verb 'drink' (喝).",
        "'Iced water' is 冰水 (bīngshuǐ).",
      ],
      solution: [
        "Imperative 'don't': **别** (*bié*).",
        "Verb + object: **喝冰水** (*hē bīngshuǐ*).",
        "Full warning: **别喝冰水！**",
      ],
    },
  ],

  papers: [
    {
      id: "illness-p1",
      title: "Practice Paper 1 · Symptoms, Dosages & Clinic Roleplay",
      questions: [
        {
          id: "illness-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "body-parts",
          question: "Write the Mandarin word for **throat** (accepts either standard northern or Singapore everyday term).",
          answer: {
            type: "text",
            accept: ["嗓子", "喉咙", "sǎngzi", "hóulóng"],
            display: "嗓子 (sǎngzi) / 喉咙 (hóulóng)",
          },
          hints: ["Both everyday words for throat use characters with the 口 (mouth) radical!"],
          solution: [
            "Standard spoken Mandarin: **嗓子** (*sǎngzi*).",
            "Widely used in Singapore & southern Mandarin: **喉咙** (*hóulóng*).",
          ],
        },
        {
          id: "illness-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "body-parts",
          question: "Fill in the correct measure word (classifier) for a **pair** of eyes: **一 ___ 眼睛**.",
          answer: {
            type: "text",
            accept: ["双", "shuāng"],
            display: "双 (shuāng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["只", "zhī"] },
              feedback: "一只眼睛 is ONE eye — for a pair of eyes (like shoes or chopsticks), use 双 (shuāng)!",
            },
          ],
          hints: ["Use the exact same pair-classifier as shoes (运动鞋) and chopsticks (筷子)."],
          solution: [
            "A natural pair uses **双** (*shuāng*): **一双眼睛** (*yì shuāng yǎnjing*).",
          ],
        },
        {
          id: "illness-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "symptoms-illness",
          question: "Translate into Mandarin: **sore throat** (Body Part + 疼 or 痛).",
          answer: {
            type: "text",
            accept: ["嗓子疼", "嗓子痛", "喉咙痛", "喉咙疼", "sǎngzi téng", "sǎngzi tòng", "hóulóng tòng", "hóulóng téng"],
            display: "嗓子疼 (sǎngzi téng) / 喉咙痛 (hóulóng tòng)",
          },
          hints: ["Place 嗓子 or 喉咙 first, then 疼 or 痛 right after it."],
          solution: [
            "Body part (**嗓子** / **喉咙**) + ache (**疼** / **痛**) → **嗓子疼** or **喉咙痛**.",
          ],
        },
        {
          id: "illness-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "symptoms-illness",
          question: "Unscramble these words into a natural Mandarin question:\n**不舒服 / 哪里 / 你 / ？**",
          answer: {
            type: "text",
            accept: ["你哪里不舒服", "Nǐ nǎlǐ bù shūfu"],
            display: "你哪里不舒服？ (Nǐ nǎlǐ bù shūfu?)",
          },
          hints: [
            "Mandarin keeps wh-question words in-situ (no question-word fronting like English!).",
            "Order: Subject (你) + Location question word (哪里) + Predicate (不舒服).",
          ],
          solution: [
            "Subject first: **你** (*Nǐ*).",
            "Where: **哪里** (*nǎlǐ*).",
            "Feel unwell: **不舒服** (*bù shūfu*).",
            "Result: **你哪里不舒服？**",
          ],
        },
        {
          id: "illness-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "symptoms-illness",
          question: "Translate into Mandarin: **My little brother has a toothache.** (Use **弟弟**.)",
          answer: {
            type: "text",
            accept: [
              "弟弟牙疼",
              "弟弟牙痛",
              "我弟弟牙疼",
              "我弟弟牙痛",
              "我的弟弟牙疼",
              "我的弟弟牙痛",
              "Dìdi yáténg",
              "Dìdi yátòng",
              "Wǒ dìdi yáténg",
              "Wǒ dìdi yátòng",
              "Wǒ de dìdi yáténg",
              "Wǒ de dìdi yátòng",
            ],
            display: "弟弟牙疼。 (Dìdi yáténg.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["弟弟有牙疼", "我弟弟有牙疼", "dìdi yǒu yáténg"] },
              feedback: "Drop 有! Say 弟弟牙疼 directly.",
            },
          ],
          hints: [
            "Subject: 弟弟 (Dìdi).",
            "'Toothache' is simply 牙疼 (yáténg) — do NOT insert 有!",
          ],
          solution: [
            "Subject **弟弟** + symptom verb **牙疼** → **弟弟牙疼。**",
          ],
        },
        {
          id: "illness-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "at-the-clinic",
          question: "Translate into English: **护士先帮我量体温。**",
          answer: {
            type: "text",
            accept: [
              "the nurse took my temperature first",
              "the nurse takes my temperature first",
              "first the nurse helped me take my temperature",
              "first the nurse helps me take my temperature",
              "the nurse helped me take my temperature first",
              "the nurse helps me take my temperature first",
              "first the nurse took my temperature",
              "first the nurse takes my temperature",
              "the nurse first took my temperature",
              "the nurse first takes my temperature",
              "the nurse first helped me take my temperature",
              "the nurse first helps me take my temperature",
              "the nurse measured my temperature first",
            ],
            display: "The nurse took my temperature first.",
          },
          hints: [
            "护士 = nurse; 先 = first; 帮我 = helped me.",
            "量体温 = measure/take body temperature.",
          ],
          solution: [
            "**护士** (the nurse) + **先** (first) + **帮我** (helped me) + **量体温** (take my temperature).",
          ],
        },
        {
          id: "illness-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "at-the-clinic",
          question: "Fill in the two missing measure words in the dosage instruction (write the full 8-character phrase): **一天三 ___，一次两 ___。** ('three times a day, two tablets each time')",
          answer: {
            type: "text",
            accept: [
              "一天三次，一次两片",
              "一天三次一次两片",
              "yì tiān sān cì, yí cì liǎng piàn",
              "yī tiān sān cì, yī cì liǎng piàn",
            ],
            display: "一天三次，一次两片 (yì tiān sān cì, yí cì liǎng piàn)",
          },
          hints: [
            "First blank: verbal frequency classifier meaning 'times' (次 cì).",
            "Second blank: classifier for flat pills/tablets (片 piàn).",
          ],
          solution: [
            "Frequency uses **次** (*cì*): **一天三次**.",
            "Tablets use **片** (*piàn*): **一次两片**.",
          ],
        },
        {
          id: "illness-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "modal-advice",
          question: "Unscramble into a grammatical Mandarin advice sentence:\n**温水 / 你 / 多 / 应该 / 喝 / 。**",
          answer: {
            type: "text",
            accept: ["你应该多喝温水", "Nǐ yīnggāi duō hē wēnshuǐ"],
            display: "你应该多喝温水。 (Nǐ yīnggāi duō hē wēnshuǐ.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["你应该喝温水多", "nǐ yīnggāi hē wēnshuǐ duō"] },
              feedback: "Remember the pre-verb magnet rule: 多 MUST stand directly BEFORE the verb 喝 (多喝温水)!",
            },
          ],
          hints: [
            "Start with Subject + Modal: 你应该...",
            "Put 多 immediately BEFORE the verb 喝!",
          ],
          solution: [
            "Subject + modal: **你应该**.",
            "Pre-verbal **多** + verb **喝** + object **温水** → **多喝温水**.",
            "Full sentence: **你应该多喝温水。**",
          ],
        },
        {
          id: "illness-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "modal-advice",
          question: "Complete the allergy sentence with the single missing preposition: **我 ___ 花生过敏。** ('I am allergic to peanuts.')",
          answer: {
            type: "text",
            accept: ["对", "duì"],
            display: "对 (duì)",
          },
          hints: [
            "Use the exact same preposition as in ___中国文化感兴趣.",
            "Frame: Subject + ___ + Allergen + 过敏.",
          ],
          solution: [
            "Allergies use **对** (*duì*): **我对花生过敏。**",
          ],
        },
        {
          id: "illness-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "at-the-clinic",
          question: "Read: **王医生给小明开了三天的药。这种药早晚各吃一次，每次吃两片。** How many tablets did Dr Wang prescribe for Xiaoming **in total for all three days**? (Type a number.)",
          answer: {
            type: "number",
            value: 12,
            display: "12 (十二片)",
          },
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "4 tablets is for ONE day (morning 2 + evening 2). Multiply by 三天 (3 days)!",
            },
            {
              spec: { type: "number", value: 6 },
              feedback: "Check carefully: 早晚各吃一次 = 2 doses/day, and 每次吃两片 = 2 tablets/dose (2 × 2 = 4 per day), for 3 days!",
            },
          ],
          hints: [
            "早晚各吃一次 = once in the morning and once in the evening = 2 times per day.",
            "2 times/day × 2 tablets/dose = 4 tablets per day; now multiply by 三天 (3 days)!",
          ],
          solution: [
            "**早晚各吃一次** = 2 doses per day.",
            "**每次吃两片** = 2 tablets per dose → 2 × 2 = 4 tablets per day.",
            "For **三天** (3 days): 4 × 3 = 12 tablets in total.",
          ],
        },
        {
          id: "illness-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "sick-leave-note",
          question: "Fix the past-negation error in *我昨天没去了学校* — write the correct 7-character Mandarin sentence.",
          answer: {
            type: "text",
            accept: ["我昨天没去学校", "我昨天没有去学校", "Wǒ zuótiān méi qù xuéxiào", "Wǒ zuótiān méiyǒu qù xuéxiào"],
            display: "我昨天没去学校。 (Wǒ zuótiān méi qù xuéxiào.)",
          },
          hints: [
            "没 (méi) negates past actions.",
            "Can completed-action 了 stay in the sentence when you negate with 没?",
          ],
          solution: [
            "Delete **了**! Past negation **没(有)** never co-occurs with completed-action **了**.",
            "Correct sentence: **我昨天没去学校。**",
          ],
        },
        {
          id: "illness-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "body-parts",
          question: "Translate into Mandarin: **wear a face mask** (3 characters — choose **戴** or **穿** carefully!).",
          answer: {
            type: "text",
            accept: ["戴口罩", "dài kǒuzhào"],
            display: "戴口罩 (dài kǒuzhào)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["穿口罩", "chuān kǒuzhào"] },
              feedback: "穿 is only for clothes and shoes! A face mask is worn as an accessory on the face, so use 戴 (dài): 戴口罩.",
            },
          ],
          hints: [
            "Face masks use the same verb as glasses (眼镜) and hats (帽子).",
            "Combine 戴 (dài) + 口罩 (kǒuzhào).",
          ],
          solution: [
            "Use accessory verb **戴** (*dài*) + **口罩** (*kǒuzhào*) → **戴口罩**.",
          ],
        },
        {
          id: "illness-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "at-the-clinic",
          marks: 5,
          question:
            "**IGCSE 0547 Roleplay Task (看医生角色扮演):**\nYou are at a clinic in Singapore speaking to **王医生** (*Dr Wang*). Answer the doctor's five questions in complete Mandarin sentences:\n1. 你哪里不舒服？ *(Say you have a headache and a sore throat.)*\n2. 什么时候开始的？ *(Say it started yesterday evening.)*\n3. 你发烧吗？ *(Say yes, you have a fever of 38.5 degrees.)*\n4. 昨天你吃了什么或者做了什么？ *(Give one sensible reason, e.g. got caught in heavy rain or drank too much iced water.)*\n5. *(Thank Dr Wang politely and ask how to take the medicine.)*",
          hints: [
            "Remember NOT to use 有 before 头疼, 嗓子疼, or 发烧!",
            "For question 5, address him as 王医生 and ask 这种药怎么吃？",
          ],
          modelAnswer:
            "1. 王医生，我头疼，嗓子也很疼。\n2. 是从昨天晚上开始的。\n3. 我发烧了，今天早上量体温是三十八度五。\n4. 昨天下午下大雨，我没带雨伞，淋了雨。\n5. 谢谢您，王医生！请问这种药怎么吃？",
          markScheme: [
            {
              point: "States headache and sore throat naturally without 有 (头疼/头痛 + 嗓子疼/喉咙痛).",
              keywords: ["头疼", "头痛", "嗓子", "喉咙"],
            },
            {
              point: "States onset time clearly (昨天晚上开始).",
              keywords: ["昨天晚上", "昨晚", "开始"],
            },
            {
              point: "States fever and temperature accurately (发烧 + 三十八度五 / 38.5度).",
              keywords: ["发烧", "三十八", "38", "度"],
            },
            {
              point: "Gives a clear cause in the past (e.g. 下雨 / 冰水 / 空调太冷).",
              keywords: ["昨天", "雨", "冰", "冷", "吃"],
            },
            {
              point: "Thanks 王医生 politely using 您/谢谢 and asks how to take the medicine (药怎么吃).",
              keywords: ["谢谢", "王医生", "药", "怎么吃"],
            },
          ],
          commonError:
            "Saying *我有头疼* instead of 我头疼, or writing *医生王* instead of 王医生.",
        },
        {
          id: "illness-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "sick-leave-note",
          marks: 5,
          question:
            "**IGCSE 0547 Short Writing — Sick-Leave Email (请假条 · 80–120 characters):**\nWrite an email in Mandarin to your form tutor **李老师** (*Teacher Li*) asking for sick leave today. You MUST include:\n- A polite greeting to Teacher Li;\n- Your symptoms and when they started;\n- Where you went to see the doctor and what advice/medicine the doctor gave;\n- How many days of sick leave (**病假**) you are requesting;\n- A polite thank-you and sign-off.",
          hints: [
            "Open with 尊敬的李老师，您好！ (use 您 throughout!).",
            "Use 因为…所以… for your symptoms and 应该 / 得 (děi) + 多喝温水 / 多休息 for the doctor's advice.",
          ],
          modelAnswer:
            "尊敬的李老师，您好！因为昨天晚上我突然感冒了，不但发烧，而且一直咳嗽、嗓子疼，所以我今天不能来学校上课。今天早上妈妈带我去家附近的诊所看医生。医生给我开了感冒药，说我得在家多喝温水、多休息两天。我想向您请两天病假。谢谢您的理解！祝好！学生：林伟",
          markScheme: [
            {
              point: "Uses respectful salutation and pronoun (李老师 + 您好 / 您).",
              keywords: ["李老师", "您好", "您"],
            },
            {
              point: "Describes at least two symptoms and when they began (感冒/发烧/咳嗽/头疼 + 昨天/今天早上).",
              keywords: ["感冒", "发烧", "咳嗽", "疼", "痛"],
            },
            {
              point: "Mentions clinic/hospital visit and medication (诊所/医院 + 看医生/看病 + 开药/吃药).",
              keywords: ["诊所", "医院", "看医生", "看病", "药"],
            },
            {
              point: "Includes doctor's advice using modal/pre-verbal structures (多喝水 / 多休息 / 得 / 应该).",
              keywords: ["多喝", "多休息", "休息", "应该", "得"],
            },
            {
              point: "Requests a specific duration of sick leave and closes politely (请…假 + 谢谢).",
              keywords: ["请", "假", "谢谢"],
            },
          ],
          commonError:
            "Forgetting polite 您 when addressing 李老师, or writing *二天* instead of 两天.",
        },
      ],
    },
    {
      id: "illness-p2",
      title: "Practice Paper 2 · Reading Labels, Grammar Precision & Recovery Diary",
      questions: [
        {
          id: "illness-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "body-parts",
          question: "Write the Mandarin word for **hospital** (two characters).",
          answer: {
            type: "text",
            accept: ["医院", "yīyuàn"],
            display: "医院 (yīyuàn)",
          },
          hints: ["Starts with 医 (medical) + 院 (courtyard/institution)."],
          solution: ["**医院** (*yīyuàn*) = hospital."],
        },
        {
          id: "illness-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "body-parts",
          question: "In Singapore, a neighbourhood GP clinic is called a **诊所**. Write its tone-marked Pinyin (or tone numbers).",
          answer: {
            type: "text",
            accept: ["zhěnsuǒ", "zhěn suǒ", "zhénsuǒ", "zhén suǒ"],
            display: "zhěnsuǒ",
          },
          hints: ["Both syllables carry the 3rd tone in citation form!"],
          solution: ["**诊** (*zhěn*, 3rd tone) + **所** (*suǒ*, 3rd tone) → **zhěnsuǒ**."],
        },
        {
          id: "illness-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "symptoms-illness",
          question: "Translate into Mandarin: **My throat hurts a bit.** (Use **嗓子** and **有点儿**.)",
          answer: {
            type: "text",
            accept: [
              "我嗓子有点儿疼",
              "我的嗓子有点儿疼",
              "我嗓子有点疼",
              "我的嗓子有点疼",
              "我嗓子有点儿痛",
              "我的嗓子有点儿痛",
              "我嗓子有点痛",
              "我的嗓子有点痛",
              "Wǒ sǎngzi yǒudiǎnr téng",
              "Wǒ de sǎngzi yǒudiǎnr téng",
              "Wǒ sǎngzi yǒudiǎn téng",
              "Wǒ de sǎngzi yǒudiǎn téng",
              "Wǒ sǎngzi yǒudiǎnr tòng",
            ],
            display: "我嗓子有点儿疼。 (Wǒ sǎngzi yǒudiǎnr téng.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我嗓子疼有点儿", "我的嗓子疼有点儿"] },
              feedback: "Place 有点儿 BEFORE 疼, never after it: 我嗓子有点儿疼!",
            },
          ],
          hints: [
            "Body-part Topic-Comment frame: 我(的)嗓子...",
            "Put 有点儿 BEFORE 疼!",
          ],
          solution: [
            "**我(的)嗓子** + **有点儿** + **疼** → **我嗓子有点儿疼。**",
          ],
        },
        {
          id: "illness-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "symptoms-illness",
          question: "Translate into English: **妹妹感冒了，一直流鼻涕。**",
          answer: {
            type: "text",
            accept: [
              "my younger sister caught a cold and keeps having a runny nose",
              "my little sister caught a cold and her nose keeps running",
              "my younger sister caught a cold and her nose keeps running",
              "younger sister caught a cold and her nose keeps running",
              "younger sister has a cold and her nose keeps running",
              "my younger sister has a cold and her nose keeps running",
              "my little sister has a cold and her nose keeps running",
              "my younger sister has a cold and keeps having a runny nose",
              "my little sister has a cold and keeps having a runny nose",
              "my little sister has a cold and has a runny nose all the time",
              "my younger sister has a cold and has a runny nose all the time",
            ],
            display: "My younger sister caught a cold and her nose keeps running.",
          },
          hints: [
            "一直 (yìzhí) means 'continuously / keeps on'.",
            "流鼻涕 (liú bítì) = runny nose.",
          ],
          solution: [
            "**妹妹感冒了** (My younger sister caught a cold), **一直流鼻涕** (and her nose keeps running).",
          ],
        },
        {
          id: "illness-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "at-the-clinic",
          question: "How do you say **prescribe medicine** in Mandarin (two characters, using **开**)?",
          answer: {
            type: "text",
            accept: ["开药", "kāi yào"],
            display: "开药 (kāi yào)",
          },
          hints: [
            "Doctors 'write out / issue' (开 kāi) a prescription for medicine (药 yào).",
            "Do not confuse with 吃药 ('take medicine').",
          ],
          solution: ["**开药** (*kāi yào*) = to prescribe medicine."],
        },
        {
          id: "illness-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "modal-advice",
          question: "Translate into Mandarin: **You shouldn't eat too many sweets.** (Use **不应该** and **糖**.)",
          answer: {
            type: "text",
            accept: [
              "你不应该吃太多糖",
              "你不应该吃太多的糖",
              "您不应该吃太多糖",
              "Nǐ bù yīnggāi chī tài duō táng",
              "Nín bù yīnggāi chī tài duō táng",
            ],
            display: "你不应该吃太多糖。 (Nǐ bù yīnggāi chī tài duō táng.)",
          },
          hints: [
            "Start with 你不应该 ('you should not') + 吃 ('eat').",
            "'Too many sweets' = 太多糖 (tài duō táng).",
          ],
          solution: [
            "**你不应该** (You shouldn't) + **吃太多糖** (eat too many sweets) → **你不应该吃太多糖。**",
          ],
        },
        {
          id: "illness-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "modal-advice",
          question: "Rewrite **你必须在家休息** ('You must rest at home') in everyday spoken Mandarin using **得** (*děi*): write the 6-character sentence.",
          answer: {
            type: "text",
            accept: ["你得在家休息", "Nǐ děi zài jiā xiūxi"],
            display: "你得在家休息。 (Nǐ děi zài jiā xiūxi.)",
          },
          hints: [
            "Replace 必须 directly with 得 (děi).",
            "Keep location 在家 before the verb 休息!",
          ],
          solution: [
            "Replace **必须** with **得** (*děi*): **你得在家休息。**",
          ],
        },
        {
          id: "illness-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "at-the-clinic",
          question: "Read the clinic receipt: **看诊费：三十五新币；药费：十八新币。** How many Singapore dollars (**新币**) did the visit cost **altogether**? (Type a number.)",
          answer: {
            type: "number",
            value: 53,
            display: "53 (五十三新币)",
          },
          hints: [
            "看诊费 (consultation fee) = 三十五 = 35 SGD.",
            "药费 (medicine fee) = 十八 = 18 SGD. Add 35 + 18!",
          ],
          solution: [
            "Consultation fee **三十五** (35) + medicine fee **十八** (18) = 35 + 18 = 53 SGD.",
          ],
        },
        {
          id: "illness-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "symptoms-illness",
          question: "After resting for a day, someone asks how you feel. Write the 3-character Mandarin phrase meaning **much better**.",
          answer: {
            type: "text",
            accept: ["好多了", "hǎo duō le"],
            display: "好多了 (hǎo duō le)",
          },
          hints: [
            "Adjective 好 ('good/well') + 多了 ('much more').",
            "Three characters: 好 + 多 + 了.",
          ],
          solution: [
            "**好多了** (*hǎo duō le*) = much better!",
          ],
        },
        {
          id: "illness-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "body-parts",
          question: "Unscramble into a natural Mandarin sentence describing Grandpa:\n**很 / 爷爷 / 身体 / 的 / 健康 / 。**",
          answer: {
            type: "text",
            accept: ["爷爷的身体很健康", "Yéye de shēntǐ hěn jiànkāng", "Yéyé de shēntǐ hěn jiànkāng"],
            display: "爷爷的身体很健康。 (Yéye de shēntǐ hěn jiànkāng.)",
          },
          hints: [
            "Subject noun phrase: 爷爷的身体 ('Grandpa's body/health').",
            "Predicate: 很健康 ('is very healthy' — no 是!).",
          ],
          solution: [
            "Possessive subject **爷爷的身体** + **很健康** → **爷爷的身体很健康。**",
          ],
        },
        {
          id: "illness-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "sick-leave-note",
          question: "What two-character verb means **to ask for leave** (e.g. from school or work)?",
          answer: {
            type: "text",
            accept: ["请假", "qǐngjià", "qǐng jià"],
            display: "请假 (qǐngjià)",
          },
          hints: [
            "请 (ask/request) + 假 (jià, 4th tone — leave/holiday).",
            "Appears inside 请假条.",
          ],
          solution: ["**请假** (*qǐngjià*) = to ask for leave."],
        },
        {
          id: "illness-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "modal-advice",
          question: "Translate into Mandarin: **Do not go swimming!** (Use **不要**.)",
          answer: {
            type: "text",
            accept: [
              "不要去游泳",
              "你不要去游泳",
              "不要游泳",
              "你不要游泳",
              "Búyào qù yóuyǒng",
              "Bùyào qù yóuyǒng",
              "Nǐ búyào qù yóuyǒng",
              "Nǐ bùyào qù yóuyǒng",
            ],
            display: "不要去游泳！ (Búyào qù yóuyǒng!)",
          },
          hints: [
            "Start with 不要 (búyào, 'don't / must not').",
            "'Go swimming' = 去游泳 (qù yóuyǒng).",
          ],
          solution: [
            "**不要** + **去游泳** → **不要去游泳！**",
          ],
        },
        {
          id: "illness-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "modal-advice",
          marks: 5,
          question:
            "**Caring Message to an Unwell Friend (给生病朋友的留言 · 60–90 characters):**\nYour best friend **大明** (*Daming*) messaged you to say he caught a bad cold (**重感冒**), has a sore throat, and missed today's basketball practice. Write a supportive reply in Mandarin that:\n1. Expresses sympathy on hearing he fell ill;\n2. Tells him not to worry about basketball practice;\n3. Gives **two** pieces of positive advice (using **应该** or **多 + Verb**);\n4. Gives **one** warning about what NOT to do (using **别** or **不要**);\n5. Wishes him a speedy recovery.",
          hints: [
            "Use 多喝温水 and 多休息 for your two positive tips, and 别喝冰水 for the negative warning.",
            "Finish with 祝你早日康复！",
          ],
          modelAnswer:
            "大明，听到你得了重感冒、嗓子疼，我很难过。你先不用担心篮球队的练习！你应该按时吃药，在家多喝温水、多休息，千万别喝冰水，也不要熬夜。祝你早日康复，我们等你回来一起打篮球！",
          markScheme: [
            {
              point: "Expresses care/sympathy about Daming's illness (听到你生病/感冒 + 难过/担心).",
              keywords: ["感冒", "生病", "难过", "担心"],
            },
            {
              point: "Reassures him about basketball practice (不用担心 / 篮球).",
              keywords: ["篮球", "不用", "别担心"],
            },
            {
              point: "Gives two positive advice points using 应该 / 多 + Verb (吃药, 多喝水, 多休息).",
              keywords: ["应该", "多喝", "多休息", "吃药"],
            },
            {
              point: "Gives one clear negative warning using 别 or 不要 (别喝冰水 / 不要熬夜 / 不要运动).",
              keywords: ["别", "不要"],
            },
            {
              point: "Closes with an idiomatic recovery wish (早日康复 / 快点好起来).",
              keywords: ["早日康复", "康复", "好起来"],
            },
          ],
          commonError:
            "Writing *喝水多* instead of 多喝水, or forgetting 别/不要 for the negative advice point.",
        },
        {
          id: "illness-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "sick-leave-note",
          marks: 5,
          question:
            "**IGCSE 0547 Extended Diary Entry — The Day I Fell Ill (生病日记 · 100–130 characters):**\nWrite a diary entry in Mandarin about a day you fell ill in Singapore. Include:\n- Why you fell ill (e.g. tropical rain or freezing mall air-conditioning);\n- Your symptoms;\n- Going to the clinic (**诊所**) with a family member and what the doctor did;\n- How you feel now after taking medicine and resting;\n- What healthy habit you plan to keep in future.",
          hints: [
            "Sequence your story clearly with 昨天… → 今天早上… → 吃了药以后，现在… → 以后我要…",
            "Show off STPV word order, 因为…所以…, and 好多了!",
          ],
          modelAnswer:
            "昨天下午放学的时候下大雨，我没带雨伞，回家以后就感冒了，不但头疼，而且发烧三十八度。今天早上爸爸带我去家附近的诊所看病。护士先帮我量体温，然后陈医生检查了我的嗓子，给我开了三天的药，让我多喝温水、多休息。吃了药睡了一觉以后，我现在觉得好多了！以后出门我一定要带雨伞，还要每天多运动，保护好身体。",
          markScheme: [
            {
              point: "Explains the cause of falling ill clearly (下雨 / 空调 / 没带伞 / 穿得少).",
              keywords: ["雨", "空调", "冷", "因为"],
            },
            {
              point: "Describes multiple symptoms accurately without 有 (感冒, 头疼, 发烧, 咳嗽, 嗓子疼).",
              keywords: ["感冒", "头疼", "头痛", "发烧", "咳嗽", "嗓子"],
            },
            {
              point: "Narrates the clinic visit and examination/prescription (诊所/医院, 量体温, 检查, 开药).",
              keywords: ["诊所", "医院", "检查", "体温", "开药"],
            },
            {
              point: "Describes current recovery state after medicine/rest (吃药, 休息, 好多了 / 舒服多了).",
              keywords: ["吃药", "休息", "好多了", "舒服"],
            },
            {
              point: "Reflects on a future healthy habit (以后 + 多运动 / 带雨伞 / 早睡 / 健康).",
              keywords: ["以后", "运动", "健康", "身体"],
            },
          ],
          commonError:
            "Mixing up past negation (*没带了雨伞* instead of 没带雨伞) or omitting transition words.",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "illness-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "body-parts",
      question:
        "**Radical Detective Puzzle:** An unfamiliar medical character **痰** (*tán*) appears on a Chinese cough-syrup box: **止咳化痰** (*zhǐké huàtán*, stops coughing and clears *tán*). Look at its two components: **疒** (outer frame) + **炎** (*yán*, two fires stacked = inflammation/heat). Based on radical logic and context, what is **痰** most likely to mean?",
      options: [
        "Phlegm / mucus from an inflamed throat",
        "A wooden walking stick",
        "A pair of reading glasses",
        "A hospital car park ticket",
      ],
      answerIndex: 0,
      hints: [
        "疒 is the sickness radical (as in 病, 疼, 痛).",
        "止咳 means 'stop coughing', and 炎 (double 火 fire) points to throat/lung inflammation!",
      ],
      explanation:
        "Combining **疒** (sickness) + **炎** (heat/inflammation) alongside **止咳** (stop coughing) pinpoints **痰** (*tán*) as **phlegm / mucus**! Radical decomposition lets you crack unknown IGCSE characters on medical packaging.",
    },
    {
      id: "illness-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "at-the-clinic",
      question:
        "**Prescription Maths Puzzle:** Grandma has a bottle containing **三十片** (30 tablets) of medicine. The doctor's label reads:\n**头两天：一天三次，一次两片；第三天开始：一天两次，一次一片。**\n*(First two days: 3 times a day, 2 tablets each time; from the 3rd day onwards: twice a day, 1 tablet each time.)*\nAfter **five full days** of taking her medicine exactly as instructed, how many tablets are **left in the bottle**? (Type a number.)",
      answer: {
        type: "number",
        value: 12,
        display: "12 (十二片)",
      },
      traps: [
        {
          spec: { type: "number", value: 18 },
          feedback: "18 is the total number of tablets Grandma ATE over the 5 days — subtract 18 from 三十片 (30) to find how many are LEFT!",
        },
      ],
      hints: [
        "Days 1 & 2 (头两天 = 2 days): each day is 3 × 2 = 6 tablets → 2 × 6 = 12 tablets used.",
        "Days 3, 4 & 5 (3 more days): each day is 2 × 1 = 2 tablets → 3 × 2 = 6 tablets used.",
        "Subtract total tablets eaten (12 + 6 = 18) from the starting bottle of 三十片 (30)!",
      ],
      solution: [
        "Starting bottle: **三十片** = 30 tablets.",
        "First 2 days (**头两天**): 2 × (3 × 2) = 12 tablets.",
        "Days 3, 4, and 5 (3 days): 3 × (2 × 1) = 6 tablets.",
        "Total consumed = 12 + 6 = 18 tablets; remaining = 30 − 18 = 12 tablets.",
      ],
    },
    {
      id: "illness-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "modal-advice",
      question:
        "**Polyphone Showdown (多音字):** Which sentence contains **得** pronounced in **ALL THREE** different ways (*de*, *dé*, *děi*) in the exact order **děi → de → dé**?",
      options: [
        "你得睡得早，才能得到好身体。",
        "你睡得早，得吃药，得到健康。",
        "得到健康以后，你睡得好，还得运动。",
        "你跑得快，跳得高，说得好。",
      ],
      answerIndex: 0,
      hints: [
        "First slot needs děi ('must'): 得 + Verb.",
        "Second slot needs neutral de (degree complement): Verb + 得 + Adjective.",
        "Third slot needs dé ('obtain'): 得到.",
      ],
      explanation:
        "In **你得(děi)睡得(de)早，才能得(dé)到好身体**, the first **得** precedes **睡** (*děi* = must), the second follows **睡** (*shuì de zǎo* = sleep early, degree complement *de*), and the third is **得到** (*dédào* = obtain)!",
    },
    {
      id: "illness-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "symptoms-illness",
      question:
        "**Grammar Contrast Puzzle:** Translate into Mandarin: **'I am a bit dizzy, so please give me a little warm water.'** *(Carefully distinguish **有点儿** before an adjective/verb vs **一点儿** before a noun!)*",
      answer: {
        type: "text",
        accept: [
          "我有点儿头晕，所以请给我一点儿温水",
          "我有点头晕，所以请给我一点温水",
          "我有点儿头晕，请给我一点儿温水",
          "我有点头晕，请给我一点温水",
          "我头有点儿晕，所以请给我一点儿温水",
          "因为我有点儿头晕，所以请给我一点儿温水",
          "Wǒ yǒudiǎnr tóuyūn, suǒyǐ qǐng gěi wǒ yìdiǎnr wēnshuǐ",
          "Wǒ yǒudiǎnr tóuyūn, qǐng gěi wǒ yìdiǎnr wēnshuǐ",
          "Wǒ yǒudiǎnr tóuyūn, suǒyǐ qǐng gěi wǒ yīdiǎnr wēnshuǐ",
          "Wǒ yǒudiǎnr tóuyūn, qǐng gěi wǒ yīdiǎnr wēnshuǐ",
          "Wǒ yǒudiǎn tóuyūn, suǒyǐ qǐng gěi wǒ yìdiǎn wēnshuǐ",
          "Wǒ yǒudiǎn tóuyūn, qǐng gěi wǒ yìdiǎn wēnshuǐ",
        ],
        display: "我有点儿头晕，请给我一点儿温水。",
      },
      hints: [
        "'A bit dizzy' modifies an unwelcome state (头晕), so use 有点儿 BEFORE 头晕: 我有点儿头晕.",
        "'A little warm water' quantifies a noun (温水), so use 一点儿 BEFORE 温水: 请给我一点儿温水.",
      ],
      solution: [
        "Adverbial 'slightly/a bit' before symptom: **我有点儿头晕** (*Wǒ yǒudiǎnr tóuyūn*).",
        "Quantifier 'a little' before noun: **请给我一点儿温水** (*qǐng gěi wǒ yìdiǎnr wēnshuǐ*).",
      ],
    },
    {
      id: "illness-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "at-the-clinic",
      question:
        "Read the notice outside a Singapore neighbourhood GP clinic (**仁爱家庭诊所**):\n- **星期一至星期五：上午 8:30–12:30，下午 2:00–5:00，晚上 6:30–9:00**\n- **星期六：上午 8:30–1:00（下午和晚上休息）**\n- **星期日及公共假期：全天休息**\nXiaoming starts having a stomach-ache at **3:15 p.m. on Saturday (星期六下午三点一刻)**. According to the notice, can he see the doctor at this clinic right away?",
      options: [
        "Yes, because the afternoon session runs from 2:00 to 5:00 p.m.",
        "No, because on Saturdays the clinic closes at 1:00 p.m. for the afternoon and evening",
        "Yes, if he waits until 6:30 p.m. on Saturday evening",
        "No, because the clinic is closed all day on Saturdays",
      ],
      answerIndex: 1,
      hints: [
        "Don't just look at 下午 2:00–5:00 — check which DAYS that applies to (星期一至星期五)!",
        "Read the 星期六 line carefully: 下午和晚上休息.",
      ],
      explanation:
        "The 2:00–5:00 p.m. session is only Monday to Friday (**星期一至星期五**). On Saturday (**星期六**), the clinic is only open 8:30 a.m.–1:00 p.m. and is closed in the afternoon and evening (**下午和晚上休息**).",
    },
    {
      id: "illness-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sick-leave-note",
      question:
        "Combine these two clauses into ONE sophisticated Mandarin sentence meaning **'Not only do I have a fever, I also have a sore throat'**, using **不但…而且…** and subject **我**:",
      answer: {
        type: "text",
        accept: [
          "我不但发烧，而且嗓子疼",
          "我不但发烧，而且嗓子痛",
          "我不但发烧，而且喉咙痛",
          "我不但发烧，而且喉咙疼",
          "我不但发烧了，而且嗓子疼",
          "我不但发烧了，而且喉咙痛",
          "我不但发烧，而且嗓子也疼",
          "我不但发烧了，而且嗓子也疼",
          "我不但发烧，而且喉咙也痛",
          "Wǒ búdàn fāshāo, érqiě sǎngzi téng",
          "Wǒ búdàn fāshāo, érqiě hóulóng tòng",
          "Wǒ bùdàn fāshāo, érqiě sǎngzi téng",
          "Wǒ bùdàn fāshāo, érqiě hóulóng tòng",
        ],
        display: "我不但发烧，而且嗓子疼。 (Wǒ búdàn fāshāo, érqiě sǎngzi téng.)",
      },
      hints: [
        "Since both clauses are about 我, place 我 BEFORE 不但: 我不但...",
        "First symptom: 发烧; second clause: 而且嗓子疼 (or 喉咙痛).",
      ],
      solution: [
        "Shared subject first: **我** + **不但发烧** + **，而且嗓子疼。**",
      ],
    },
    {
      id: "illness-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "body-parts",
      question:
        "Chinese idiom detective: People often joke **“牙疼不是病，疼起来要人命！”** (*Yáténg bú shì bìng, téng qǐlái yào rén mìng!*). What does **疼起来** express here?",
      options: [
        "Once it starts hurting / when the pain flares up",
        "Stand up while brushing your teeth",
        "After the toothache has completely healed",
        "Go upstairs to the dental clinic",
      ],
      answerIndex: 0,
      hints: [
        "Verb/Adjective + 起来 has a figurative aspect meaning beyond physical 'standing up'!",
        "Compare 热起来 ('start getting hot') and 哭起来 ('burst into tears').",
      ],
      explanation:
        "Attached to a verb or adjective, **…起来** (*qǐlái*) is an inchoative aspect marker meaning **'once it starts / flares up'** — so the proverb means 'Toothache isn't a serious disease, yet once it flares up it feels fatal!'",
    },
    {
      id: "illness-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "modal-advice",
      question:
        "Translate into natural Mandarin following **STPV** and pre-verbal **多** rules:\n**'When you are ill, you should rest more at home.'**\n*(Use **生病的时候** at the start, **你应该**, **在家**, and **多休息**.)*",
      answer: {
        type: "text",
        accept: [
          "生病的时候，你应该在家多休息",
          "你生病的时候，应该在家多休息",
          "生病的时候你应该在家多休息",
          "你生病的时候应该在家多休息",
          "Shēngbìng de shíhou, nǐ yīnggāi zài jiā duō xiūxi",
          "Nǐ shēngbìng de shíhou, yīnggāi zài jiā duō xiūxi",
        ],
        display: "生病的时候，你应该在家多休息。",
      },
      hints: [
        "Time clause first: 生病的时候，...",
        "Place (在家) MUST come BEFORE the verb phrase (多休息)!",
      ],
      solution: [
        "Time frame: **生病的时候，**",
        "Subject + Modal + Place + Pre-verbal 多 + Verb: **你应该在家多休息。**",
      ],
    },
  ],
};
