import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  {
    id: "illness-p3",
    title: "Practice Paper 3 · Clinic Comprehensions & IGCSE Writing",
    questions: [
      {
        id: "illness-p3-q01",
        kind: "short",
        difficulty: "warmup",
        guideRef: "body-parts",
        question: "Write the Mandarin word for **tooth / teeth** (either the 1-character or 2-character form).",
        answer: {
          type: "text",
          accept: ["牙", "牙齿", "yá", "yáchǐ"],
          display: "牙齿 (yáchǐ) / 牙 (yá)",
        },
        hints: ["Appears in 刷牙 (brush teeth) and 牙疼 (toothache)."],
        solution: ["**牙齿** (*yáchǐ*) or **牙** (*yá*) = tooth / teeth."],
      },
      {
        id: "illness-p3-q02",
        kind: "short",
        difficulty: "warmup",
        guideRef: "symptoms-illness",
        question: "Write the two-character Mandarin verb meaning **to cough**.",
        answer: {
          type: "text",
          accept: ["咳嗽", "késou"],
          display: "咳嗽 (késou)",
        },
        hints: ["Both characters start with the 口 (mouth) radical; Pinyin is késou."],
        solution: ["**咳嗽** (*késou*) = to cough."],
      },
      {
        id: "illness-p3-q03",
        kind: "short",
        difficulty: "core",
        guideRef: "body-parts",
        question: "Translate into Mandarin: **both legs** / **two legs** (remember **两** vs **二** and the classifier for legs!).",
        answer: {
          type: "text",
          accept: ["两条腿", "liǎng tiáo tuǐ"],
          display: "两条腿 (liǎng tiáo tuǐ)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["二条腿", "èr tiáo tuǐ"] },
            feedback: "Before a measure word, always use 两 (liǎng), NEVER 二: 两条腿!",
          },
          {
            spec: { type: "text", accept: ["两个腿", "liǎng gè tuǐ"] },
            feedback: "Legs are long and slender, so use the classifier 条 (tiáo) rather than 个: 两条腿!",
          },
        ],
        hints: [
          "Use 两 (liǎng) before measure words.",
          "Classifier for long limbs/trousers is 条 (tiáo).",
        ],
        solution: ["**两** + **条** + **腿** → **两条腿** (*liǎng tiáo tuǐ*)."],
      },
      {
        id: "illness-p3-q04",
        kind: "short",
        difficulty: "core",
        guideRef: "symptoms-illness",
        question: "Translate into Mandarin: **I caught a cold today.** (Put time **今天** in the right place!)",
        answer: {
          type: "text",
          accept: ["我今天感冒了", "今天我感冒了", "Wǒ jīntiān gǎnmào le", "Jīntiān wǒ gǎnmào le"],
          display: "我今天感冒了。 (Wǒ jīntiān gǎnmào le.)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["我今天有感冒", "今天我有感冒"] },
            feedback: "Drop 有! 感冒 acts directly as a verb: 我今天感冒了.",
          },
        ],
        hints: [
          "Put 今天 before the verb (never at the end of the sentence!).",
          "Add 了 after 感冒 to show the new state of catching a cold.",
        ],
        solution: ["**我今天** + **感冒了** → **我今天感冒了。**"],
      },
      {
        id: "illness-p3-q05",
        kind: "short",
        difficulty: "core",
        guideRef: "at-the-clinic",
        question: "Write the two-character Mandarin verb meaning **to have (or give) an injection**.",
        answer: {
          type: "text",
          accept: ["打针", "dǎzhēn", "dǎ zhēn"],
          display: "打针 (dǎzhēn)",
        },
        hints: [
          "Uses action verb 打 + 针 (zhēn, needle with metal 钅 radical).",
          "Little children are often scared of this at the clinic!",
        ],
        solution: ["**打针** (*dǎzhēn*) = to have/give an injection."],
      },
      {
        id: "illness-p3-q06",
        kind: "short",
        difficulty: "core",
        guideRef: "at-the-clinic",
        question: "Translate into English: **请饭前吃药，一次一片。**",
        answer: {
          type: "text",
          accept: [
            "please take the medicine before meals one tablet each time",
            "please take medicine before meals one tablet each time",
            "please take the medicine before meals, one tablet at a time",
            "please take medicine before meals, one tablet at a time",
            "please take medicine before meals, one pill at a time",
            "please take the medicine before meals, one pill at a time",
            "please take medicine before meals, one tablet per dose",
            "please take the medicine before meals, one tablet per dose",
            "take the medicine before meals please, one tablet per dose",
          ],
          display: "Please take the medicine before meals, one tablet each time.",
        },
        hints: [
          "饭前 = before meals (contrast with 饭后 = after meals).",
          "一次一片 = one tablet each time.",
        ],
        solution: [
          "**请饭前吃药** (Please take the medicine before meals), **一次一片** (one tablet each time).",
        ],
      },
      {
        id: "illness-p3-q07",
        kind: "short",
        difficulty: "core",
        guideRef: "modal-advice",
        question: "Unscramble into a natural Mandarin health-habit sentence:\n**糖 / 我们 / 吃 / 应该 / 少 / 。**",
        answer: {
          type: "text",
          accept: ["我们应该少吃糖", "Wǒmen yīnggāi shǎo chī táng"],
          display: "我们应该少吃糖。 (Wǒmen yīnggāi shǎo chī táng.)",
        },
        hints: [
          "Subject + Modal: 我们应该...",
          "Pre-verbal 少 ('less/fewer') goes right in front of 吃!",
        ],
        solution: ["**我们应该** + **少吃糖** → **我们应该少吃糖。**"],
      },
      {
        id: "illness-p3-q08",
        kind: "short",
        difficulty: "core",
        guideRef: "modal-advice",
        question: "How do you negate **你得打针** ('You have to have an injection') to say **'You don't need to have an injection'**? (Use **不用**.)",
        answer: {
          type: "text",
          accept: ["你不用打针", "您不用打针", "Nǐ búyòng dǎzhēn", "Nǐ bùyòng dǎzhēn"],
          display: "你不用打针。 (Nǐ búyòng dǎzhēn.)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["你不得打针", "nǐ bùdé dǎzhēn"] },
            feedback: "Never negate modal 得 (děi) as *不得*! Use 不用 (búyòng, 'no need to'): 你不用打针.",
          },
        ],
        hints: [
          "Replace 得 (děi) directly with 不用 (búyòng).",
          "Keep 打针 at the end!",
        ],
        solution: [
          "Negative of **得** (*děi*) is **不用**: **你不用打针。**",
        ],
      },
      {
        id: "illness-p3-q09",
        kind: "short",
        difficulty: "core",
        guideRef: "at-the-clinic",
        question: "Read: **姐姐每天早上八点、中午一点和晚上七点都要吃药，每次吃三片。** How many tablets does older sister take in **one day**? (Type a number.)",
        answer: {
          type: "number",
          value: 9,
          display: "9 (九片)",
        },
        hints: [
          "Count how many times per day she takes medicine: 早上八点 (8am), 中午一点 (1pm), 晚上七点 (7pm) = 3 times!",
          "Multiply 3 times × 每次吃三片 (3 tablets each time).",
        ],
        solution: [
          "8 a.m., 1 p.m., and 7 p.m. = **3 doses** per day.",
          "Each dose is **三片** (3 tablets) → 3 × 3 = 9 tablets per day.",
        ],
      },
      {
        id: "illness-p3-q10",
        kind: "short",
        difficulty: "core",
        guideRef: "symptoms-illness",
        question: "Write the single-character Mandarin adjective meaning **sleepy / drowsy** (hint: a tree **木** enclosed inside **囗**!).",
        answer: {
          type: "text",
          accept: ["困", "很困", "kùn", "hěn kùn"],
          display: "困 (kùn)",
        },
        hints: [
          "Cold tablets often make you feel this way: 觉得很 ___.",
          "Single character 困 (kùn), or 很困.",
        ],
        solution: ["**困** (*kùn*) = sleepy / drowsy."],
      },
      {
        id: "illness-p3-q11",
        kind: "short",
        difficulty: "core",
        guideRef: "sick-leave-note",
        question: "Translate into Mandarin: **Dr Chen** (using surname **陈** *Chén* and **医生** in the right order!).",
        answer: {
          type: "text",
          accept: ["陈医生", "Chén yīshēng"],
          display: "陈医生 (Chén yīshēng)",
        },
        traps: [
          {
            spec: { type: "text", accept: ["医生陈", "yīshēng chén"] },
            feedback: "In Mandarin, surname ALWAYS comes before title: 陈医生, never *医生陈*!",
          },
        ],
        hints: [
          "Put surname 陈 first, followed by title 医生.",
          "Just like 王老师!",
        ],
        solution: ["Surname **陈** + title **医生** → **陈医生** (*Chén yīshēng*)."],
      },
      {
        id: "illness-p3-q12",
        kind: "short",
        difficulty: "core",
        guideRef: "sick-leave-note",
        question: "Unscramble into a causal sick-leave clause:\n**发烧了 / 因为 / 我 / 所以 / 上学 / 不能 / ， / 。**",
        answer: {
          type: "text",
          accept: [
            "因为我发烧了，所以不能上学",
            "因为我发烧了所以不能上学",
            "因为发烧了，所以我不能上学",
            "因为发烧了所以我不能上学",
            "我因为发烧了，所以不能上学",
            "因为我发烧了，所以我不能上学",
            "Yīnwèi wǒ fāshāo le, suǒyǐ bù néng shàngxué",
            "Yīnwèi fāshāo le, suǒyǐ wǒ bù néng shàngxué",
            "Wǒ yīnwèi fāshāo le, suǒyǐ bù néng shàngxué",
          ],
          display: "因为我发烧了，所以不能上学。",
        },
        hints: [
          "First half: 因为我发烧了 ('Because I have a fever').",
          "Second half: 所以不能上学 ('therefore I cannot go to school').",
        ],
        solution: [
          "**因为我发烧了，所以不能上学。**",
        ],
      },
      {
        id: "illness-p3-q13",
        kind: "written",
        difficulty: "core",
        guideRef: "modal-advice",
        marks: 5,
        question:
          "**School Health Poster — Staying Healthy in Year 8 (健康生活小贴士 · 80–110 characters):**\nYour school's Chinese Society at Tanglin is making a bilingual poster on how Year 8 students can stay healthy and avoid falling ill during exam week. Write **five** clear Mandarin tips covering:\n1. Sleep habits;\n2. Drinking water;\n3. Healthy eating (what to eat MORE of and LESS of);\n4. Daily sport/exercise;\n5. What to bring or wear in cold air-conditioned classrooms.",
        hints: [
          "Use 应该, 要, 多 + Verb, 少 + Verb, and 别/不要 across your five points!",
          "Mention 外套 (jacket) for cold 空调 (air-conditioning) rooms.",
        ],
        modelAnswer:
          "八年级健康生活小贴士：\n1. 我们每天晚上应该早点儿睡觉，别熬夜。\n2. 在学校要多喝温水，少喝冰可乐。\n3. 每天应该多吃新鲜的蔬菜和水果，少吃糖和快餐。\n4. 放学以后要常常运动，比如跑步或者打羽毛球。\n5. 教室里的空调很冷，大家记得带一件外套，别感冒了！",
        markScheme: [
          {
            point: "Gives clear sleep advice (早点睡觉 / 早睡 / 别熬夜).",
            keywords: ["睡觉", "早睡", "熬夜", "休息"],
          },
          {
            point: "Advises drinking more water using pre-verbal 多 (多喝水 / 多喝温水).",
            keywords: ["多喝水", "多喝温水", "喝水"],
          },
          {
            point: "Contrasts eating more healthy food vs less junk/sweets (多吃蔬菜/水果 + 少吃糖/快餐).",
            keywords: ["多吃", "少吃", "蔬菜", "水果"],
          },
          {
            point: "Recommends regular exercise/sport (运动 / 跑步 / 打球 / 游泳).",
            keywords: ["运动", "跑步", "打", "游泳"],
          },
          {
            point: "Mentions bringing/wearing a jacket in cold air-con to prevent colds (空调 + 外套/毛衣 + 感冒).",
            keywords: ["空调", "外套", "衣服", "感冒"],
          },
        ],
        commonError:
          "Placing 多/少 after the verb (*吃多蔬菜*) instead of before the verb (多吃蔬菜).",
      },
      {
        id: "illness-p3-q14",
        kind: "written",
        difficulty: "challenge",
        guideRef: "at-the-clinic",
        marks: 5,
        question:
          "**IGCSE 0547 Article — Helping a Family Member Who Fell Ill (照顾生病的家人 · 100–130 characters):**\nWrite a short article in Mandarin about a time when someone in your family (e.g. **妈妈**, **爸爸**, or **妹妹**) fell ill and how you looked after them. Include:\n- Who fell ill and what symptoms they had;\n- Going to the clinic/hospital and what the doctor advised;\n- Two helpful things **you** did at home to care for them;\n- How long it took them to recover and how you felt.",
        hints: [
          "Show off action phrases like 倒温水 ('pour warm water'), 做面条/粥 ('cook noodles/porridge'), and 提醒他/她按时吃药.",
          "Use connectors like 因为…所以…, 先…然后…, and 最后!",
        ],
        modelAnswer:
          "上个星期六，妈妈因为工作太累感冒了，不但头疼，而且发烧三十八度五。爸爸先开车带妈妈去诊所看医生，医生给她开了感冒药，让她在家多休息。回到家以后，我先给妈妈倒了一杯温水，提醒她饭后吃药，然后还在厨房给她煮了一碗热粥。休息了两天以后，妈妈的病终于好了。虽然我有一点儿累，但是能照顾妈妈，我心里非常开心！",
        markScheme: [
          {
            point: "Identifies the family member and describes at least two symptoms (妈妈/爸爸/妹妹 + 感冒/发烧/头疼/咳嗽).",
            keywords: ["妈妈", "爸爸", "妹妹", "弟弟", "发烧", "感冒", "疼"],
          },
          {
            point: "Describes the doctor/clinic visit and medical advice (诊所/医院 + 看医生 + 开药/多休息).",
            keywords: ["诊所", "医院", "医生", "药", "休息"],
          },
          {
            point: "Details two caring actions performed at home (温水 / 吃药 / 煮粥 / 做饭 / 照顾).",
            keywords: ["水", "吃药", "粥", "面", "做饭", "照顾"],
          },
          {
            point: "States recovery outcome with duration (两天 / 好多了 / 好了).",
            keywords: ["天", "好了", "好多了", "康复"],
          },
          {
            point: "Expresses personal reflection/feeling using a connector like 虽然…但是… (累 + 开心/高兴).",
            keywords: ["虽然", "但是", "开心", "高兴"],
          },
        ],
        commonError:
          "Forgetting to include personal reflection/feelings at the end of an IGCSE narrative task.",
      },
    ],
  },
];
