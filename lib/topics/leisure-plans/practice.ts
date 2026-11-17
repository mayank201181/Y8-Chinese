import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "leisure-plans-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "free-time-activities",
      question: "What does **上网** (*shàngwǎng*) mean?",
      options: [
        "to go online / surf the internet",
        "to go to school",
        "to go window-shopping",
        "to play tennis",
      ],
      answerIndex: 0,
      hints: ["**网** (*wǎng*) means 'net / internet'."],
      explanation:
        "**上网** (*shàngwǎng*) literally means 'get onto the net' — to go online or surf the internet. 'To go to school' is **上学**, and 'to go window-shopping' is **逛街**.",
    },
    {
      id: "leisure-plans-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "free-time-activities",
      question:
        "Write the Mandarin noun for **'weekend'** (Simplified Hanzi or tone-marked Pinyin):",
      answer: {
        type: "text",
        accept: ["周末", "zhōumò"],
        display: "周末 (zhōumò)",
      },
      hints: ["Literally 'week-end': **周** (*zhōu*) + **末** (*mò*)."],
      solution: [
        "'Weekend' in Mandarin is **周末** (*zhōumò*).",
      ],
    },
    {
      id: "leisure-plans-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "frequency-adverbs",
      question: "Which adverb means **'sometimes'** (~50% of the time)?",
      options: ["总是", "有时候", "从不", "很少"],
      answerIndex: 1,
      hints: ["Literally 'there are times' (**有** + **时候**)."],
      explanation:
        "**有时候** (*yǒushíhou*) means 'sometimes'. **总是** is 'always', **从不** is 'never', and **很少** is 'rarely'.",
    },
    {
      id: "leisure-plans-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "frequency-adverbs",
      question:
        "Translate into Mandarin: *'I often watch television at home.'* (Use **我**, **常常**, **在家**, and **看电视**.)",
      answer: {
        type: "text",
        accept: [
          "我常常在家看电视",
          "Wǒ chángcháng zài jiā kàn diànshì",
        ],
        display: "我常常在家看电视。 (Wǒ chángcháng zài jiā kàn diànshì.)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["我看电视在家常常", "我常常看电视在家"] },
          feedback: "Remember Stage-Before-Action: **常常** and **在家** must both come BEFORE the verb **看电视**!",
        },
      ],
      hints: [
        "Order the pieces: Subject → Frequency Adverb → Location (**在家**) → Verb-Object (**看电视**).",
        "Keep **常常** before **在家**!",
      ],
      solution: [
        "Place **常常** (*chángcháng*) and **在家** (*zài jiā*) before **看电视**.",
        "Full sentence: **我常常在家看电视。**",
      ],
    },
    {
      id: "leisure-plans-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "making-plans-dasuan",
      question: "Complete the planned sequence: **星期天我打算____做作业，____去公园散步。**",
      options: [
        "虽然 … 但是",
        "因为 … 所以",
        "先 … 再",
        "不但 … 而且",
      ],
      answerIndex: 2,
      hints: [
        "You are ordering two activities chronologically: *first* do homework, *then* go for a walk.",
        "Which pair means 'first …, then …'?",
      ],
      explanation:
        "**先…，再…** (*xiān …, zài …*) expresses a planned sequence ('first do homework, then go for a walk in the park').",
    },
    {
      id: "leisure-plans-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "making-plans-dasuan",
      question:
        "Write the two-character Mandarin verb meaning **'to plan to / intend to'** (as in *'What do you plan to do this weekend?'*):",
      answer: {
        type: "text",
        accept: ["打算", "dǎsuàn"],
        display: "打算 (dǎsuàn)",
      },
      hints: [
        "First character **打** (*dǎ*), second character **算** (*suàn*, calculate/reckon).",
        "Pinyin: *dǎsuàn*.",
      ],
      solution: [
        "The core verb/noun for 'plan / intend to' is **打算** (*dǎsuàn*).",
      ],
    },
    {
      id: "leisure-plans-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "together-invitations",
      question: "Choose the grammatical sentence for *'I go shopping at the mall together with Mum'*:",
      options: [
        "我去商场买东西跟妈妈一起。",
        "我跟妈妈去商场买东西一起。",
        "跟妈妈我去商场一起买东西。",
        "我跟妈妈一起去商场买东西。",
      ],
      answerIndex: 3,
      hints: [
        "Where must **跟妈妈一起** stand relative to the verb **去**?",
        "Keep **跟 + Person + 一起** together as one unit right before **去商场买东西**.",
      ],
      explanation:
        "**我跟妈妈一起去商场买东西。** locks **跟妈妈一起** right after **我** and directly before **去商场买东西**.",
    },
    {
      id: "leisure-plans-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "together-invitations",
      question:
        "Complete this polite invitation tag question in Mandarin (2 characters, meaning *'OK? / alright?'*): **我们星期六一起去看电影，____？**",
      answer: {
        type: "text",
        accept: ["好吗", "hǎo ma"],
        display: "好吗 (hǎo ma)",
      },
      hints: [
        "Combine **好** ('good/OK') + yes/no particle **吗**.",
        "Two characters: **好吗** (*hǎo ma*).",
      ],
      solution: [
        "Adding **好吗？** (*hǎo ma?*, 'OK?') turns a suggestion into a warm, polite invitation.",
      ],
    },
    {
      id: "leisure-plans-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "frequency-adverbs",
      question:
        "How do you say **'twice'** (two occurrences, e.g. *twice a week*) using the measure word **次**?",
      answer: {
        type: "text",
        accept: ["两次", "liǎng cì"],
        display: "两次 (liǎng cì)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["二次", "èr cì"] },
          feedback: "Before a measure word like **次**, Mandarin ALWAYS uses **两** (*liǎng*), never **二**!",
        },
      ],
      hints: [
        "Does a measure word take **二** or **两**?",
        "Combine **两** + **次**.",
      ],
      solution: [
        "Before the occurrence classifier **次** (*cì*), 'two' must be **两**: **两次** (*liǎng cì*).",
      ],
    },
    {
      id: "leisure-plans-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "weekend-diary-plan",
      question: "Complete the past-weekend sentence correctly: **上个周末下雨，所以我____去圣淘沙。**",
      options: ["不", "没", "别", "打算"],
      answerIndex: 1,
      hints: [
        "**上个周末** refers to a completed past weekend.",
        "Which negative word negates past actions?",
      ],
      explanation:
        "Past actions that did not happen are negated with **没** (or **没有**): **所以我没去圣淘沙。** (**不** negates present habits or future intentions.)",
    },
  ],

  papers: [
    {
      id: "leisure-plans-p1",
      title: "Practice Paper 1 · Weekend Routines, Frequency & Intentions",
      questions: [
        {
          id: "leisure-plans-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "free-time-activities",
          question:
            "Write the Mandarin verb phrase for **'to watch a film'** (Simplified Hanzi or tone-marked Pinyin):",
          answer: {
            type: "text",
            accept: ["看电影", "kàn diànyǐng"],
            display: "看电影 (kàn diànyǐng)",
          },
          hints: ["**看** (*kàn*, watch) + **电影** (*diànyǐng*, film)."],
          solution: [
            "**看电影** (*kàn diànyǐng*) means 'to watch a film'.",
          ],
        },
        {
          id: "leisure-plans-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "free-time-activities",
          question:
            "What does **去公园散步** (*qù gōngyuán sànbù*) mean in English?",
          answer: {
            type: "text",
            accept: [
              "go to the park for a walk",
              "to go to the park for a walk",
              "go for a walk in the park",
              "to go for a walk in the park",
              "take a walk in the park",
              "to take a walk in the park",
              "go to the park to take a walk",
              "stroll in the park",
              "go for a stroll in the park",
            ],
            display: "to go for a walk in the park",
          },
          hints: ["**公园** = park, **散步** = go for a walk / stroll."],
          solution: [
            "**去公园** = go to the park; **散步** = go for a walk.",
            "Meaning: **to go for a walk in the park**.",
          ],
        },
        {
          id: "leisure-plans-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "frequency-adverbs",
          question:
            "Write the Mandarin frequency adverb meaning **'always'** (100%):",
          answer: {
            type: "text",
            accept: ["总是", "zǒngshì"],
            display: "总是 (zǒngshì)",
          },
          hints: ["Two characters: **总** (*zǒng*) + **是** (*shì*)."],
          solution: [
            "'Always' (100%) is **总是** (*zǒngshì*).",
          ],
        },
        {
          id: "leisure-plans-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "free-time-activities",
          question:
            "Unscramble these four chunks into a correct Mandarin sentence:\n**买东西 / 妈妈 / 去超市 / 星期六**",
          answer: {
            type: "text",
            accept: [
              "妈妈星期六去超市买东西",
              "星期六妈妈去超市买东西",
              "Māma xīngqīliù qù chāoshì mǎi dōngxi",
              "Xīngqīliù māma qù chāoshì mǎi dōngxi",
            ],
            display: "妈妈星期六去超市买东西。 (Māma xīngqīliù qù chāoshì mǎi dōngxi.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["妈妈买东西去超市星期六", "妈妈去超市星期六买东西"] },
              feedback: "Follow STPV order: Subject (**妈妈**) + Time (**星期六**) + Destination (**去超市**) + Action (**买东西**).",
            },
          ],
          hints: [
            "Put Subject and Time at the start (**妈妈星期六** or **星期六妈妈**).",
            "You must go to the supermarket (**去超市**) before buying things (**买东西**)!",
          ],
          solution: [
            "Subject + Time: **妈妈星期六**.",
            "Serial-verb destination + action: **去超市买东西**.",
            "Result: **妈妈星期六去超市买东西。**",
          ],
        },
        {
          id: "leisure-plans-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "frequency-adverbs",
          question:
            "Translate into Mandarin: *'Grandpa rarely goes online.'* (Use **爷爷**, **很少**, and **上网**.)",
          answer: {
            type: "text",
            accept: [
              "爷爷很少上网",
              "Yéye hěn shǎo shàngwǎng",
            ],
            display: "爷爷很少上网。 (Yéye hěn shǎo shàngwǎng.)",
          },
          hints: [
            "'Rarely' is **很少** (*hěn shǎo*).",
            "Place **很少** directly before the verb **上网**.",
          ],
          solution: [
            "Subject (**爷爷**) + Frequency adverb (**很少**) + Verb (**上网**) → **爷爷很少上网。**",
          ],
        },
        {
          id: "leisure-plans-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "frequency-adverbs",
          question:
            "Unscramble into a natural Mandarin sentence:\n**电影 / 一个星期 / 哥哥 / 一次 / 看**",
          answer: {
            type: "text",
            accept: [
              "哥哥一个星期看一次电影",
              "一个星期哥哥看一次电影",
              "Gēge yí gè xīngqī kàn yí cì diànyǐng",
              "Gēge yī gè xīngqī kàn yī cì diànyǐng",
              "Yí gè xīngqī gēge kàn yí cì diànyǐng",
              "Yī gè xīngqī gēge kàn yī cì diànyǐng",
            ],
            display: "哥哥一个星期看一次电影。 (Gēge yí gè xīngqī kàn yí cì diànyǐng.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["哥哥一个星期一次看电影", "哥哥看电影一个星期一次"] },
              feedback: "Exact occurrence counts like **一次** split verb-object phrases right after the verb **看**: **看一次电影**!",
            },
          ],
          hints: [
            "Start with **哥哥一个星期** ('older brother per week').",
            "Split **看电影** by tucking **一次** right between **看** and **电影**!",
          ],
          solution: [
            "Subject + Time period: **哥哥一个星期**.",
            "Verb + Count + Object: **看一次电影**.",
            "Full sentence: **哥哥一个星期看一次电影。**",
          ],
        },
        {
          id: "leisure-plans-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "making-plans-dasuan",
          question:
            "Translate into Mandarin: *'This weekend I plan to rest at home.'* (Use **这个周末**, **我**, **打算**, and **在家休息**.)",
          answer: {
            type: "text",
            accept: [
              "这个周末我打算在家休息",
              "我这个周末打算在家休息",
              "Zhège zhōumò wǒ dǎsuàn zài jiā xiūxi",
              "Wǒ zhège zhōumò dǎsuàn zài jiā xiūxi",
            ],
            display: "这个周末我打算在家休息。 (Zhège zhōumò wǒ dǎsuàn zài jiā xiūxi.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["这个周末我打算休息在家", "这个周末我在家打算休息"] },
              feedback: "Put **打算** BEFORE the location phrase **在家**, and **在家** BEFORE the verb **休息**!",
            },
          ],
          hints: [
            "Start with **这个周末我打算…**.",
            "Remember location **在家** comes BEFORE **休息**.",
          ],
          solution: [
            "Time + Subject + Intention: **这个周末我打算**.",
            "Location + Action: **在家休息**.",
            "Result: **这个周末我打算在家休息。**",
          ],
        },
        {
          id: "leisure-plans-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "making-plans-dasuan",
          question:
            "Fill in the missing adverb meaning **'first'** in this planned sequence (1 character or Pinyin):\n**星期六我打算___去图书馆看书，再去买奶茶。**",
          answer: {
            type: "text",
            accept: ["先", "xiān"],
            display: "先 (xiān)",
          },
          hints: [
            "Look at **再** ('then') in the second clause — what adverb pairs with **再** to mean 'first …, then …'?",
            "Pronounced *xiān* (1st tone).",
          ],
          solution: [
            "The paired structure is **先…，再…** ('first …, then …'), so the missing word is **先** (*xiān*).",
          ],
        },
        {
          id: "leisure-plans-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "together-invitations",
          question:
            "Translate into Mandarin: *'Are you free this Saturday?'* (Use **你**, **这个星期六**, **有空**, and **吗**.)",
          answer: {
            type: "text",
            accept: [
              "你这个星期六有空吗",
              "这个星期六你有空吗",
              "Nǐ zhège xīngqīliù yǒu kòng ma",
              "Zhège xīngqīliù nǐ yǒu kòng ma",
            ],
            display: "你这个星期六有空吗？ (Nǐ zhège xīngqīliù yǒu kòng ma?)",
          },
          hints: [
            "Subject + Time (**你这个星期六** or **这个星期六你**).",
            "Add **有空吗？** (*yǒu kòng ma?* — note 4th tone *kòng*!).",
          ],
          solution: [
            "Combine Subject + Time + **有空吗**: **你这个星期六有空吗？**",
          ],
        },
        {
          id: "leisure-plans-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "together-invitations",
          question:
            "Read this text reply:\n**不好意思，星期天下午我有事，不能去。我们改天再去吧！**\nWhy can't the friend go on Sunday afternoon? Answer briefly in English.",
          answer: {
            type: "text",
            accept: [
              "they are busy",
              "they have something on",
              "they have something to do",
              "he is busy",
              "she is busy",
              "busy",
              "has something on",
              "have something on",
              "has something to do",
              "have something to do",
              "he has something on",
              "she has something on",
              "he has something to do",
              "she has something to do",
              "they have plans",
              "he has plans",
              "she has plans",
              "something on",
              "something to do",
            ],
            display: "They have something on / are busy (我有事).",
          },
          hints: [
            "Look at the clause **星期天下午我有事**.",
            "What does **有事** (*yǒu shì*) mean idiomatically?",
          ],
          solution: [
            "**我有事** (*wǒ yǒu shì*) literally means 'I have matters/business', i.e. **they have something on / are busy**.",
          ],
        },
        {
          id: "leisure-plans-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "weekend-diary-plan",
          question:
            "Read Xiaoming's weekend log:\n- **星期六上午**：在家做了两个小时作业\n- **星期六下午**：跟三个同学去电影院看电影\n- **星期天**：去爷爷奶奶家吃午饭\nHow many **hours** did Xiaoming spend doing homework on Saturday morning? Type a number.",
          answer: {
            type: "number",
            value: 2,
            display: "2",
          },
          hints: [
            "Look at the **星期六上午** line: **做了两个小时作业**.",
            "What number is **两** (*liǎng*)?",
          ],
          solution: [
            "**两个小时** (*liǎng gè xiǎoshí*) = **2** hours.",
          ],
        },
        {
          id: "leisure-plans-p1-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "weekend-diary-plan",
          question:
            "Translate into Mandarin: *'Last weekend I went window-shopping on Orchard Road with my older sister.'* (Use **上个周末**, **我**, **跟姐姐一起**, **去了乌节路**, and **逛街**.)",
          answer: {
            type: "text",
            accept: [
              "上个周末我跟姐姐一起去了乌节路逛街",
              "上个周末我跟姐姐一起去乌节路逛街了",
              "我上个周末跟姐姐一起去了乌节路逛街",
              "我上个周末跟姐姐一起去乌节路逛街了",
              "Shàng gè zhōumò wǒ gēn jiějie yìqǐ qù le Wūjiélù guàngjiē",
              "Shàng gè zhōumò wǒ gēn jiějie yīqǐ qù le Wūjiélù guàngjiē",
              "Shàng gè zhōumò wǒ gēn jiějie yìqǐ qù Wūjiélù guàngjiē le",
              "Wǒ shàng gè zhōumò gēn jiějie yìqǐ qù le Wūjiélù guàngjiē",
              "Wǒ shàng gè zhōumò gēn jiějie yīqǐ qù le Wūjiélù guàngjiē",
            ],
            display: "上个周末我跟姐姐一起去了乌节路逛街。",
          },
          hints: [
            "Start with **上个周末我** + companion **跟姐姐一起**.",
            "Mark the completed past trip with **了** (**去了乌节路逛街** or **去乌节路逛街了**).",
          ],
          solution: [
            "Time + Subject + Companion: **上个周末我跟姐姐一起**.",
            "Completed past serial verb: **去了乌节路逛街**.",
            "Full sentence: **上个周末我跟姐姐一起去了乌节路逛街。**",
          ],
        },
        {
          id: "leisure-plans-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "together-invitations",
          marks: 5,
          question:
            "**IGCSE 0547 Roleplay / Short Message Task (5 marks)**\nWrite a short message in Mandarin (40–60 characters) inviting your friend **大伟 (Dàwěi)** out this weekend. Include ALL five points:\n1. Ask if Dawei is free this Saturday afternoon (**有空**).\n2. Invite him to go watch a film together (**一起去看电影**).\n3. Use a polite tag question (**好吗** or **怎么样**).\n4. Suggest meeting at 2 p.m. at the MRT station entrance (**下午两点在地铁站门口见面**).\n5. Add what you plan to do after the film (e.g. eat ice cream or chat).",
          modelAnswer:
            "大伟，你好！你这个星期六下午有空吗？我们一起去电影院看电影，怎么样？我们下午两点在地铁站门口见面吧！看完电影以后，我打算跟你一起去吃冰淇淋和聊天。",
          markScheme: [
            {
              point: "Asks whether Dawei is free this Saturday afternoon (星期六下午有空吗).",
              keywords: ["星期六", "有空", "yǒu kòng"],
            },
            {
              point: "Invites him to watch a film together using 一起 and 看电影.",
              keywords: ["一起", "看电影", "电影"],
            },
            {
              point: "Uses a polite invitation tag question (好吗 or 怎么样).",
              keywords: ["好吗", "怎么样", "hǎo ma", "zěnmeyàng"],
            },
            {
              point: "States meeting time and place in STPV order (两点在地铁站门口见面).",
              keywords: ["两点", "地铁站", "门口", "见面"],
            },
            {
              point: "Adds a post-film plan using 以后 / 然后 / 再 / 打算.",
              keywords: ["以后", "然后", "再", "打算", "吃", "聊天"],
            },
          ],
          hints: [
            "Open warmly with **大伟，你这个星期六下午有空吗？**.",
            "Remember STPV for the meetup: **我们下午两点在地铁站门口见面吧！**",
          ],
          commonError:
            "Writing *怎么样吗* at the end of the invitation or putting *在地铁站门口* after *见面*.",
        },
        {
          id: "leisure-plans-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "weekend-diary-plan",
          marks: 6,
          question:
            "**IGCSE 0547 Directed Writing — 我的周末 (6 marks)**\nWrite an 80–120 character blog post in Simplified Chinese about your weekends in Singapore. You MUST cover:\n1. What you usually (**平时 / 常常**) do at the weekend and how often.\n2. Where you went and what you did **last weekend** (**上个周末**, using **了**).\n3. How you felt about last weekend and why (**因为…所以…** or **虽然…但是…**).\n4. Two sequenced activities you **plan** for **this weekend** (**这个周末打算先…，再…**).\n5. Who you are going with (**跟…一起**) and a Singapore location (e.g. **乌节路 / 圣淘沙 / 东海岸公园**).\n6. End with a friendly question to your readers.",
          modelAnswer:
            "平时周末我常常在家看书，有时候跟弟弟一起打羽毛球。上个周末我跟家人去了圣淘沙的海边游泳。虽然天气很热，但是我们玩得非常开心！这个周末我打算星期六上午先在家做作业，下午再跟好朋友一起去乌节路逛街和看电影。你们呢？这个周末你们有什么打算？",
          markScheme: [
            {
              point: "Describes usual weekend routine with a frequency adverb (常常/经常/有时候/总是).",
              keywords: ["常常", "经常", "有时候", "总是", "平时"],
            },
            {
              point: "Describes last weekend (上个周末) accurately with completed aspect 了.",
              keywords: ["上个周末", "了"],
            },
            {
              point: "Gives an opinion/reason using 因为…所以… or 虽然…但是… or 觉得/开心.",
              keywords: ["因为", "虽然", "开心", "有意思", "好玩", "觉得"],
            },
            {
              point: "States upcoming plans for this weekend using 打算/准备 and 先…再/然后….",
              keywords: ["这个周末", "打算", "准备", "先"],
            },
            {
              point: "Includes a companion phrase (跟/和…一起) and a specific place.",
              keywords: ["跟", "一起", "乌节路", "圣淘沙", "东海岸", "公园", "商场", "电影院"],
            },
            {
              point: "Ends with an engaging question to readers (你呢 / 什么打算 / 怎么样).",
              keywords: ["吗", "呢", "什么", "怎么样"],
            },
          ],
          hints: [
            "Keep your timeframes crisp: no **了** with **常常** or **打算**, and do use **了** with **上个周末**!",
            "Use **虽然天气很热，但是…** for effortless complex-sentence marks.",
          ],
          commonError:
            "Mixing past **了** into future **打算** sentences, or omitting **个** in **上个周末 / 这个周末**.",
        },
      ],
    },

    {
      id: "leisure-plans-p2",
      title: "Practice Paper 2 · Dialogues, Sequencing & Reading Comprehension",
      questions: [
        {
          id: "leisure-plans-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "free-time-activities",
          question:
            "Write the Mandarin phrase for **'to chat'** (2 characters or tone-marked Pinyin):",
          answer: {
            type: "text",
            accept: ["聊天", "liáotiān"],
            display: "聊天 (liáotiān)",
          },
          hints: ["**聊** (*liáo*) + **天** (*tiān*)."],
          solution: [
            "'To chat' is **聊天** (*liáotiān*).",
          ],
        },
        {
          id: "leisure-plans-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "frequency-adverbs",
          question:
            "Write the two-character Mandarin adverb meaning **'never'** (habitual 0%, e.g. *Dad never drinks cola*):",
          answer: {
            type: "text",
            accept: ["从不", "从来不", "cóng bù", "cónglái bù"],
            display: "从不 (cóng bù)",
          },
          hints: ["Starts with **从** (*cóng*) + **不** (*bù*)."],
          solution: [
            "Habitual 'never' is **从不** (*cóng bù*) or **从来不** (*cónglái bù*).",
          ],
        },
        {
          id: "leisure-plans-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "free-time-activities",
          question:
            "What Singapore shopping street is **乌节路** (*Wūjiélù*) in English?",
          answer: {
            type: "text",
            accept: ["orchard road", "orchard", "orchard rd"],
            display: "Orchard Road",
          },
          hints: ["**路** means 'Road', and **乌节** sounds like a fruit-tree garden!"],
          solution: [
            "**乌节路** (*Wūjiélù*) is **Orchard Road**, Singapore's famous shopping avenue.",
          ],
        },
        {
          id: "leisure-plans-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "free-time-activities",
          question:
            "Translate into Mandarin: *'I chat with friends online.'* (Use **我**, **在网上**, **跟朋友**, and **聊天**.)",
          answer: {
            type: "text",
            accept: [
              "我在网上跟朋友聊天",
              "我跟朋友在网上聊天",
              "Wǒ zài wǎngshàng gēn péngyou liáotiān",
              "Wǒ zài wǎngshang gēn péngyou liáotiān",
              "Wǒ gēn péngyou zài wǎngshàng liáotiān",
              "Wǒ gēn péngyou zài wǎngshang liáotiān",
            ],
            display: "我在网上跟朋友聊天。 (Wǒ zài wǎngshàng gēn péngyou liáotiān.)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我在网上聊天朋友", "我聊天朋友在网上"] },
              feedback: "Never put **朋友** after **聊天** — use **跟朋友聊天** before the verb!",
            },
          ],
          hints: [
            "Both **在网上** ('online') and **跟朋友** ('with friends') must stand BEFORE **聊天**.",
            "Remember **聊天** is separable!",
          ],
          solution: [
            "Put Subject + Location + Companion before the verb: **我在网上跟朋友聊天。**",
          ],
        },
        {
          id: "leisure-plans-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "frequency-adverbs",
          question:
            "Translate into Mandarin: *'Sometimes I read books, sometimes I listen to music.'* (Use **我**, **有时候…，有时候…**, **看书**, and **听音乐**.)",
          answer: {
            type: "text",
            accept: [
              "我有时候看书有时候听音乐",
              "有时候我看书有时候我听音乐",
              "有时候我看书有时候听音乐",
              "Wǒ yǒushíhou kàn shū, yǒushíhou tīng yīnyuè",
              "Yǒushíhou wǒ kàn shū, yǒushíhou tīng yīnyuè",
            ],
            display: "我有时候看书，有时候听音乐。",
          },
          hints: [
            "Repeat **有时候** before each verb phrase!",
            "Clause 1: **我有时候看书**; Clause 2: **有时候听音乐**.",
          ],
          solution: [
            "Pair the two clauses with **有时候…，有时候…**: **我有时候看书，有时候听音乐。**",
          ],
        },
        {
          id: "leisure-plans-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "making-plans-dasuan",
          question:
            "Unscramble these chunks into a correct Mandarin sentence:\n**去植物园 / 准备 / 下个周末 / 野餐 / 我们**",
          answer: {
            type: "text",
            accept: [
              "下个周末我们准备去植物园野餐",
              "我们下个周末准备去植物园野餐",
              "Xià gè zhōumò wǒmen zhǔnbèi qù zhíwùyuán yěcān",
              "Wǒmen xià gè zhōumò zhǔnbèi qù zhíwùyuán yěcān",
            ],
            display: "下个周末我们准备去植物园野餐。",
          },
          hints: [
            "Start with Time + Subject (**下个周末我们** or **我们下个周末**).",
            "Follow with intention verb **准备**, then destination **去植物园**, then purpose **野餐**.",
          ],
          solution: [
            "Time + Subject + Intention + Destination + Action → **下个周末我们准备去植物园野餐。**",
          ],
        },
        {
          id: "leisure-plans-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "making-plans-dasuan",
          question:
            "Translate *'after watching the film'* into Mandarin using **看完电影** and **以后**:",
          answer: {
            type: "text",
            accept: [
              "看完电影以后",
              "kànwán diànyǐng yǐhòu",
            ],
            display: "看完电影以后 (kànwán diànyǐng yǐhòu)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["以后看完电影", "yǐhòu kànwán diànyǐng"] },
              feedback: "In Mandarin, **以后** ('after') always comes AFTER the event phrase, not before it!",
            },
          ],
          hints: [
            "Mandarin says *'finish-watching film after'*, not *'after finish-watching film'*!",
            "Put **以后** at the end of the phrase.",
          ],
          solution: [
            "Event phrase (**看完电影**) + **以后** → **看完电影以后**.",
          ],
        },
        {
          id: "leisure-plans-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "together-invitations",
          question:
            "Write the polite four-character Mandarin apology phrase used to soften declining an invitation (*'Sorry / Excuse me…'*):",
          answer: {
            type: "text",
            accept: ["不好意思", "bù hǎoyìsi", "bùhǎoyìsi"],
            display: "不好意思 (bù hǎoyìsi)",
          },
          hints: [
            "Starts with **不好** + **意思** ('meaning/feeling').",
            "Four characters: **不好意思**.",
          ],
          solution: [
            "**不好意思** (*bù hǎoyìsi*) is the natural, polite opener when turning down a friend's invitation.",
          ],
        },
        {
          id: "leisure-plans-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "together-invitations",
          question:
            "Translate into Mandarin: *'Good idea!'* (3 characters or tone-marked Pinyin):",
          answer: {
            type: "text",
            accept: ["好主意", "hǎo zhǔyi", "hǎo zhǔyì"],
            display: "好主意！ (Hǎo zhǔyi!)",
          },
          hints: [
            "**好** ('good') + **主意** (*zhǔyi*, idea).",
            "Three characters total.",
          ],
          solution: [
            "'Good idea!' in Mandarin is **好主意！** (*Hǎo zhǔyi!*).",
          ],
        },
        {
          id: "leisure-plans-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "frequency-adverbs",
          question:
            "Look at Lily's monthly schedule:\n- Goes to the library: every Saturday & every Sunday (4 weekends in a month)\n- Goes to the cinema: 2 times a month\n- Goes to the museum: 1 time a month\nIn a 4-weekend month, how many **total trips** to these three venues does Lily make? Type a number.",
          answer: {
            type: "number",
            value: 11,
            display: "11",
          },
          hints: [
            "Library trips: 2 days per weekend × 4 weekends = 8 trips.",
            "Add cinema (2) + museum (1)!",
          ],
          solution: [
            "Library (**每个星期六和星期天**): 2 × 4 = 8 times.",
            "Cinema (**两次**): 2 times; Museum (**一次**): 1 time.",
            "Total = 8 + 2 + 1 = **11** trips.",
          ],
        },
        {
          id: "leisure-plans-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "weekend-diary-plan",
          question:
            "Read this message carefully:\n**小华，上个星期六我本来打算跟你去打网球，可是因为我感冒了，所以在家休息了一天。这个星期六下午三点你有空吗？我们去学校打网球，怎么样？**\nWhy couldn't the writer play tennis last Saturday? Answer briefly in English.",
          answer: {
            type: "text",
            accept: [
              "caught a cold",
              "had a cold",
              "they caught a cold",
              "he caught a cold",
              "she caught a cold",
              "he had a cold",
              "she had a cold",
              "they had a cold",
              "got a cold",
              "they got a cold",
              "cold",
              "because of a cold",
              "ill with a cold",
              "they were ill with a cold",
              "he was ill with a cold",
              "she was ill with a cold",
            ],
            display: "Had / caught a cold (感冒了).",
          },
          hints: [
            "Look right after **可是因为我…** ('but because I…').",
            "Recall from Term 1 Illness vocab what **感冒** (*gǎnmào*) means!",
          ],
          solution: [
            "**因为我感冒了** means 'because I caught/had a cold', so they rested at home all day.",
          ],
        },
        {
          id: "leisure-plans-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "making-plans-dasuan",
          question:
            "Translate into Mandarin: *'This Sunday I don't plan to go shopping.'* (Use **这个星期天**, **我**, **不打算**, and **去买东西**.)",
          answer: {
            type: "text",
            accept: [
              "这个星期天我不打算去买东西",
              "我这个星期天不打算去买东西",
              "这个星期天我不打算买东西",
              "我这个星期天不打算买东西",
              "Zhège xīngqītiān wǒ bù dǎsuàn qù mǎi dōngxi",
              "Wǒ zhège xīngqītiān bù dǎsuàn qù mǎi dōngxi",
            ],
            display: "这个星期天我不打算去买东西。",
          },
          traps: [
            {
              spec: { type: "text", accept: ["这个星期天我没打算去买东西了", "这个星期天我不打算去了买东西"] },
              feedback: "Negate a future plan cleanly with **不打算**, and never add past-action **了**!",
            },
          ],
          hints: [
            "Negate **打算** with **不** (**不打算**).",
            "Do NOT include **了** because Sunday hasn't happened yet!",
          ],
          solution: [
            "Time + Subject + Negated intention + Action → **这个星期天我不打算去买东西。**",
          ],
        },
        {
          id: "leisure-plans-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "together-invitations",
          marks: 5,
          question:
            "**IGCSE 0547 Polite Refusal & Counter-Invitation Task (5 marks)**\nYour friend **美美 (Měiměi)** texted inviting you to go window-shopping on Orchard Road this Saturday morning (**星期六上午**). Write a polite 45–65 character reply in Mandarin covering ALL five points:\n1. Apologise politely (**不好意思**).\n2. Explain why you are busy on Saturday morning (e.g. piano lesson / Chinese class / visiting grandparents).\n3. Say when you ARE free instead (e.g. Saturday afternoon or Sunday, using **有空**).\n4. Propose going together at that new time using **一起** and **怎么样** or **好吗**.\n5. Suggest a meeting place (**在…见面**).",
          modelAnswer:
            "美美，真不好意思！这个星期六上午我有事，因为我要上钢琴课。星期天下午我有空，我们星期天下午一起去乌节路逛街，怎么样？我们两点在乌节路地铁站门口见面吧！",
          markScheme: [
            {
              point: "Uses a polite apology/refusal opener (不好意思 / 对不起).",
              keywords: ["不好意思", "对不起"],
            },
            {
              point: "Gives a clear reason for being unavailable Saturday morning.",
              keywords: ["因为", "要", "有事", "课", "爷爷", "奶奶", "忙"],
            },
            {
              point: "States an alternative free time using 有空.",
              keywords: ["有空", "下午", "星期天"],
            },
            {
              point: "Proposes going together using 一起 and 好吗 / 怎么样.",
              keywords: ["一起", "怎么样", "好吗"],
            },
            {
              point: "Suggests a specific meeting place before 见面.",
              keywords: ["在", "见面", "门口", "地铁站"],
            },
          ],
          hints: [
            "Start with **美美，不好意思！星期六上午我要…**.",
            "Remember to put **在 + Place** BEFORE **见面**!",
          ],
          commonError:
            "Forgetting to counter-propose a new time or putting the meeting location after **见面**.",
        },
        {
          id: "leisure-plans-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "frequency-adverbs",
          marks: 5,
          question:
            "**IGCSE 0547 Family Leisure Survey Paragraph (5 marks)**\nWrite an 80–110 character article in Mandarin comparing what different members of your family do in their free time (**空闲时间 / 周末**). Include:\n1. At least **three** different frequency adverbs from **总是, 常常/经常, 有时候, 很少, 从不**.\n2. One counted frequency expression using **次** (e.g. **一个星期两次**).\n3. At least three family members and distinct leisure activities.\n4. One activity the whole family plans (**打算 / 准备**) to do together (**一起**) next weekend (**下个周末**).\n5. Why you enjoy family weekends.",
          modelAnswer:
            "周末的时候，我们一家人有很多不同的活动。爸爸平时很忙，周末总是去公园跑步，一个星期跑三次。妈妈常常跟朋友去商场买东西，很少看电视。我有时候在家上网听音乐，有时候去图书馆看书，从不睡懒觉。下个周末我们一家人打算一起去东海岸公园野餐，我觉得周末跟家人在一起非常开心！",
          markScheme: [
            {
              point: "Uses at least three distinct frequency adverbs accurately before verbs.",
              keywords: ["总是", "常常", "经常", "有时候", "很少", "从不"],
            },
            {
              point: "Uses a counted frequency phrase with 次 placed after a verb.",
              keywords: ["一次", "两次", "三次", "次"],
            },
            {
              point: "Describes at least three family members and varied leisure activities.",
              keywords: ["爸爸", "妈妈", "哥哥", "姐姐", "弟弟", "妹妹", "爷爷", "奶奶"],
            },
            {
              point: "States a shared plan for 下个周末 using 打算/准备 and 一起.",
              keywords: ["下个周末", "打算", "准备", "一起"],
            },
            {
              point: "Expresses personal opinion/feeling about family weekends.",
              keywords: ["觉得", "开心", "高兴", "有意思", "喜欢"],
            },
          ],
          hints: [
            "Contrast high-frequency (**总是 / 常常**) with low-frequency (**很少 / 从不**) across family members!",
            "Check that your **次** phrase sits AFTER the verb (e.g. **看两次电影** or **跑三次步**).",
          ],
          commonError:
            "Placing **两次** before the verb (*两次看电影*) or forgetting **个** in **下个周末**.",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "leisure-plans-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "frequency-adverbs",
      question:
        "**Linguistic Scope Puzzle:** Compare these two Mandarin sentences:\n- Sentence X: **我周末不常跟朋友出去玩。**\n- Sentence Y: **我周末常常不跟朋友出去玩。**\nSuppose over 10 weekends, Xiaoming stays home on **8 weekends** and goes out with friends on **2 weekends**. Which statement accurately analyses Sentences X and Y?",
      options: [
        "Both X and Y describe Xiaoming, and Y specifically emphasizes 'often choosing NOT to go out', whereas X neutrally states 'not going out often'.",
        "Sentence X means he goes out 8 times; Sentence Y means he goes out 0 times.",
        "Sentence Y is ungrammatical because 不 can never appear after 常常.",
        "Sentence X is past tense while Sentence Y is future tense.",
      ],
      answerIndex: 0,
      hints: [
        "In Mandarin, whatever stands *left* scopes over whatever stands *right*!",
        "**不常** = NOT(often) = seldom (~2/10); **常常不** = OFTEN(not go) = frequently chooses not to (~8/10).",
      ],
      explanation:
        "Mandarin word order obeys strict left-to-right logical scope! **不常** negates **常** ('not often' = 2 out of 10 weekends), whereas **常常不** puts **常常** outside **不** ('often does not go' = 8 out of 10 weekends). Both fit Xiaoming's 2/10 pattern from opposite angles!",
    },
    {
      id: "leisure-plans-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "frequency-adverbs",
      question:
        "**Timetable Maths in Mandarin:**\nRead Anni's Term 2 routine over **4 weeks**:\n- **安妮每个星期上两次钢琴课。**\n- **她两个星期去一次国家图书馆。**\n- **她每个星期天都跟爸爸去公园跑步。**\nAcross those **4 weeks**, how many total sessions of piano + library + park running does Anni complete? Type a single integer.",
      answer: {
        type: "number",
        value: 14,
        display: "14",
      },
      hints: [
        "Piano: **每个星期两次** × 4 weeks = 8.",
        "Library: **两个星期一次** ('once every two weeks') over 4 weeks = 2; Running: **每个星期天** × 4 weeks = 4.",
      ],
      solution: [
        "Piano lessons (**每个星期两次**): 2 × 4 = 8.",
        "Library visits (**两个星期去一次** = once per 2 weeks): 4 ÷ 2 = 2.",
        "Sunday runs (**每个星期天**): 1 × 4 = 4.",
        "Total = 8 + 2 + 4 = **14**.",
      ],
    },
    {
      id: "leisure-plans-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "making-plans-dasuan",
      question:
        "**Aspect Detective — 再 (*zài*) vs 又 (*yòu*):**\nBoth **再** and **又** can translate as 'again / then' in English, yet only ONE option below fills BOTH blanks grammatically:\n**上个星期六我看了一部中国电影，昨天我____看了一部；这个星期六我打算先做作业，____去看一部新电影！**",
      options: [
        "再 … 又",
        "又 … 再",
        "再 … 再",
        "又 … 又",
      ],
      answerIndex: 1,
      hints: [
        "Look at the timeframes: **昨天…看了** is a **realized past** repetition, while **这个星期六打算先…，___去** is an **unrealized future** plan!",
        "Recall from Section 3 why future sequences use **先…再…** rather than **又**.",
      ],
      explanation:
        "**又** (*yòu*) marks a repetition that has *already happened* (**昨天我又看了一部**), whereas **再** (*zài*) marks an *upcoming/planned* repetition or next step (**打算先做作业，再去看一部新电影**). Hence **又 … 再** is the unique solution!",
    },
    {
      id: "leisure-plans-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "together-invitations",
      question:
        "**7-Chunk Master Unscramble:**\nAssemble ALL seven chunks into ONE grammatical Mandarin sentence:\n**一起 / 打算 / 星期六下午 / 逛街 / 我 / 去乌节路 / 跟好朋友**\n(Put **星期六下午** at the very start of the sentence!)",
      answer: {
        type: "text",
        accept: [
          "星期六下午我打算跟好朋友一起去乌节路逛街",
          "Xīngqīliù xiàwǔ wǒ dǎsuàn gēn hǎo péngyou yìqǐ qù Wūjiélù guàngjiē",
          "Xīngqīliù xiàwǔ wǒ dǎsuàn gēn hǎo péngyou yīqǐ qù Wūjiélù guàngjiē",
        ],
        display: "星期六下午我打算跟好朋友一起去乌节路逛街。",
      },
      traps: [
        {
          spec: { type: "text", accept: ["星期六下午我跟好朋友一起打算去乌节路逛街"] },
          feedback: "Close! Put the intention verb **打算** BEFORE **跟好朋友一起** so it states *your* plan cleanly!",
        },
      ],
      hints: [
        "Start with **星期六下午我**.",
        "Order after subject: Intention (**打算**) → Companion (**跟好朋友一起**) → Destination (**去乌节路**) → Purpose (**逛街**).",
      ],
      solution: [
        "1. Time + Subject: **星期六下午我**",
        "2. Intention verb: **打算**",
        "3. Companion phrase: **跟好朋友一起**",
        "4. Serial verb destination + action: **去乌节路逛街**",
        "Full sentence: **星期六下午我打算跟好朋友一起去乌节路逛街。**",
      ],
    },
    {
      id: "leisure-plans-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "free-time-activities",
      question:
        "**Separable Verb Trap:** Four verbs from this unit are **看 (watch)**, **等 (wait for)**, **聊天 (chat)**, and **见面 (meet up)**. Which pair are **separable verb-object compounds (离合词)** that can NEVER take a person directly after them?",
      options: [
        "看 and 等",
        "看 and 聊天",
        "聊天 and 见面",
        "等 and 见面",
      ],
      answerIndex: 2,
      hints: [
        "Test putting **你** right after each word: can you say **看你**? **等你**? *聊天你*? *见面你*?",
        "Why do **聊天** and **见面** require **跟你…**?",
      ],
      explanation:
        "You can say **看你** ('look at you') and **等你** ('wait for you'), because **看** and **等** are transitive verbs. By contrast, **聊天** (chat-sky) and **见面** (meet-face) already have built-in objects (**天**, **面**), so you MUST say **跟你聊天** and **跟你见面**!",
    },
    {
      id: "leisure-plans-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "weekend-diary-plan",
      question:
        "**Error-Spotting Surgery:**\nThis student sentence has **TWO** grammatical mistakes:\n✗ **上个周末我没有去了电影院，因为我打算在家看书了。**\nRewrite the **first clause only** (*'Last weekend I didn't go to the cinema'*) in 100% grammatical Mandarin:",
      answer: {
        type: "text",
        accept: [
          "上个周末我没有去电影院",
          "上个周末我没去电影院",
          "我上个周末没有去电影院",
          "我上个周末没去电影院",
          "Shàng gè zhōumò wǒ méiyǒu qù diànyǐngyuàn",
          "Shàng gè zhōumò wǒ méi qù diànyǐngyuàn",
          "Wǒ shàng gè zhōumò méiyǒu qù diànyǐngyuàn",
          "Wǒ shàng gè zhōumò méi qù diànyǐngyuàn",
        ],
        display: "上个周末我没有去电影院 (Shàng gè zhōumò wǒ méiyǒu qù diànyǐngyuàn)",
      },
      hints: [
        "Look at **没有去了** in the first clause.",
        "Can **没有 / 没** co-occur with completed-action **了**?",
      ],
      solution: [
        "When negating a past action with **没** or **没有**, the action did NOT reach completion, so **了** MUST be deleted!",
        "Corrected clause: **上个周末我没有去电影院** (or **上个周末我没去电影院**).",
      ],
    },
    {
      id: "leisure-plans-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "together-invitations",
      question:
        "**Group-Chat Scheduling Logic:**\nFour friends want to watch a film together this weekend:\n- **小文**: 我星期六全天都有空，星期天下午要上游泳课。\n- **小丽**: 我星期六上午要去医院看奶奶，其他时间都有空。\n- **小海**: 我星期天上午没空，可是星期六下午和星期天下午都有空。\n- **小美**: 我每天晚上都不能出去，白天除了星期天上午以外都有空。\nWhich time slot allows **ALL FOUR** friends to go to the cinema together?",
      options: [
        "星期六上午 (Saturday morning)",
        "星期六晚上 (Saturday evening)",
        "星期天下午 (Sunday afternoon)",
        "星期六下午 (Saturday afternoon)",
      ],
      answerIndex: 3,
      hints: [
        "Eliminate slots one by one: Xiaomei cannot go out any evening (**每天晚上都不能出去**), and Xiaowen is busy **星期天下午**!",
        "Check **星期六上午** (Xiaoli is visiting Grandma) vs **星期六下午** for all four!",
      ],
      explanation:
        "Check every slot: **星期六上午** fails (Xiaoli visits Grandma & Xiaohai only listed Sat/Sun afternoons); **星期六晚上** fails (Xiaomei can never go out in the evening); **星期天下午** fails (Xiaowen has swimming class). On **星期六下午** (Saturday afternoon), all four friends are free!",
    },
    {
      id: "leisure-plans-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "frequency-adverbs",
      question:
        "**Polyphone Tone Precision (多音字):**\nIn Mandarin, changing just ONE tone on **空** flips its meaning completely:\n- In **天空** (*tiānkōng*, sky) and **空气** (*kōngqì*, air), **空** is 1st tone (*kōng*, empty/sky).\n- When **空** means 'free time / spare gap' (as in **有空** *yǒu kòng*), its tone changes! Write the tone-marked Pinyin for **空闲** ('free/spare', as in **空闲时间**):",
      answer: {
        type: "text",
        accept: ["kòngxián", "kòng xián"],
        display: "kòngxián",
      },
      traps: [
        {
          spec: { type: "text", accept: ["kōngxián"] },
          feedback: "Careful! *kōng* (1st tone) means 'sky/empty air'; when **空** means 'free time / spare gap', it MUST be 4th tone: **kòngxián**!",
        },
      ],
      hints: [
        "Recall the crucial 4th tone on **空** when it means 'free time' (just like **有空** *yǒu kòng*).",
        "**闲** ('leisurely/idle') is 2nd tone (*xián*).",
      ],
      solution: [
        "In **空闲时间**, **空** takes the 4th tone (*kòng*, free/unoccupied) and **闲** takes the 2nd tone (*xián*, idle/leisure): **kòngxián**.",
      ],
    },
  ],
};
