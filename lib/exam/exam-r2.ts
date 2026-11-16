import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-r2",
  title: "Paper 3 — Everyday Situations, Dialogues & Roleplay (日常交际与对话)",
  calculator: false,
  minutes: 50,
  questions: [
    // =========================================================================
    // SECTION A: WARM-UP EVERYDAY EXCHANGES & POLITE RESPONSES (Q01–Q08)
    // =========================================================================
    {
      id: "exam-r2-q01",
      kind: "mcq",
      topicId: "greetings-routine",
      guideRef: "greetings-identity",
      difficulty: "warmup",
      question:
        "On your first morning at a partner school in Suzhou, you meet Principal Zhang (**张校长**) in the corridor. Which greeting is the **most polite and culturally appropriate**?",
      options: [
        "张校长，您好！我是从新加坡来的交换生。",
        "张校长，你好吗？你叫什么名字？",
        "喂，老张！早上好，你几岁？",
        "再见，张校长！我家有四口人。",
      ],
      answerIndex: 0,
      hints: [
        "When addressing a teacher, headteacher, doctor, or elder in Mandarin, use the respectful pronoun **您** (*nín*, with the heart radical **心** underneath) instead of **你**.",
        "Also check that the follow-up sentence makes sense on first meeting!",
      ],
      explanation:
        "**张校长，您好！我是从新加坡来的交换生** ('Hello Principal Zhang! I am an exchange student from Singapore') uses Title + **您好** respectfully and introduces yourself naturally. Asking a principal their name after already using their title, calling them *喂，老张*, or saying **再见** (goodbye) on arrival is inappropriate.",
    },
    {
      id: "exam-r2-q02",
      kind: "mcq",
      topicId: "time-measure-words",
      guideRef: "dates-days",
      difficulty: "warmup",
      question:
        "Complete this short phone dialogue when booking a badminton court at the community club:\n\n" +
        "- **职员：** 请问您想订哪一天的球场？\n" +
        "- **你：** ________________",
      options: [
        "我想订两个小时。",
        "我想订这个星期六下午三点的。",
        "羽毛球场在体育馆二楼。",
        "我跟三个朋友一起打球。",
      ],
      answerIndex: 1,
      hints: [
        "Look closely at the question word **哪一天** (*nǎ yì tiān*, which day).",
        "Pick the reply that gives a specific **day** (and time slot) rather than duration, location, or people.",
      ],
      explanation:
        "**哪一天** asks 'which day?', so **我想订这个星期六下午三点的** ('I'd like to book the one for 3:00 pm this Saturday') directly answers the clerk's question. **两个小时** answers 'how long?' (**多长时间**), **二楼** answers 'where?' (**在哪里**), and **三个朋友** answers 'with whom?'.",
    },
    {
      id: "exam-r2-q03",
      kind: "mcq",
      topicId: "weather",
      guideRef: "weather-conditions",
      difficulty: "warmup",
      question:
        "Mum rings you just as afternoon school finishes in Singapore:\n\n" +
        "- **妈妈：** 喂，小文！外面突然刮大风、下大雨了，你带雨伞了吗？\n" +
        "- **小文：** 糟糕，我忘带了！\n" +
        "- **妈妈：** 别着急，你在学校门口等我，我开车来接你。\n\n" +
        "What should Xiaowen do right now?",
      options: [
        "Run home quickly through the heavy rain",
        "Borrow an umbrella and take the MRT alone",
        "Wait at the school gate for Mum to pick him up by car",
        "Go to the sports field to play football",
      ],
      answerIndex: 2,
      hints: [
        "**糟糕，我忘带了！** means 'Oh no, I forgot to bring one!'",
        "Read Mum's instruction in the final line: **你在学校门口等我，我开车来接你**.",
      ],
      explanation:
        "Mum reassures him (**别着急**, don't worry) and tells him **你在学校门口等我，我开车来接你** — wait for her at the school entrance (**学校门口**), and she will drive over to pick him up (**开车来接你**).",
    },
    {
      id: "exam-r2-q04",
      kind: "mcq",
      topicId: "seasons",
      guideRef: "four-seasons",
      difficulty: "warmup",
      question:
        "You ask your cousin in Beijing for travel advice:\n\n" +
        "- **你：** 我想十月去北京旅游，那时候北京是什么季节？天气怎么样？\n" +
        "- **表姐：** ________________",
      options: [
        "十月是夏天，每天都三十五度，热极了。",
        "十月是冬天，天天都在下大雪。",
        "北京一年四季都没有秋天。",
        "十月是北京的秋天，不冷也不热，非常凉快舒服！",
      ],
      answerIndex: 3,
      hints: [
        "**十月** (*shíyuè*) is October in the northern hemisphere (Beijing).",
        "Recall Beijing's famous autumn weather: **秋天** (*qiūtiān*) is cool (**凉快**) and comfortable (**舒服**).",
      ],
      explanation:
        "October (**十月**) in Beijing is **秋天** (autumn), famous for crisp, cool, pleasant weather: **不冷也不热，非常凉快舒服！** ('neither cold nor hot — very cool and comfortable!').",
    },
    {
      id: "exam-r2-q05",
      kind: "short",
      topicId: "illness",
      guideRef: "symptoms-illness",
      difficulty: "warmup",
      question:
        "At the school medical room, the nurse asks you:\n\n" +
        "> **护士：同学，你怎么了？哪里不舒服？**\n\n" +
        "Complete your reply in Simplified Hanzi (or toned Pinyin) to say **'I have a headache'** (literally: 'My head hurts'):",
      answer: {
        type: "text",
        accept: [
          "我头疼",
          "我头痛",
          "头疼",
          "头痛",
          "我有一点儿头疼",
          "我很头疼",
          "我头很疼",
          "wǒ tóuténg",
          "wǒ tóu téng",
          "tóuténg",
          "wǒ tóutòng",
          "tóutòng",
          "wǒ tóu hěn téng",
          "wǒ hěn tóuténg",
        ],
        display: "我头疼。 (Wǒ tóuténg.)",
      },
      hints: [
        "Use **我** (*wǒ*, I) + **头** (*tóu*, head) + **疼** (*téng*, ache/hurt).",
        "No **是** or **有** is needed!",
      ],
      solution: [
        "In Mandarin, 'I have a headache' is simply **我头疼** (*Wǒ tóuténg*) or **我头很疼** (**头痛** is also accepted).",
      ],
    },
    {
      id: "exam-r2-q06",
      kind: "mcq",
      topicId: "hobbies",
      guideRef: "likes-degrees",
      difficulty: "warmup",
      question:
        "At the school CCA Fair, an older student at the Tennis Club booth greets you:\n\n" +
        "- **学长：** 你好！你平时喜欢做什么运动？\n" +
        "- **你：** ________________",
      options: [
        "我最喜欢打网球，因为既好玩又对身体好！",
        "我喜欢在周末吃西红柿炒鸡蛋。",
        "我今天早上六点半就起床了。",
        "这双运动鞋太贵了，便宜一点儿吧。",
      ],
      answerIndex: 0,
      hints: [
        "The senior student asks **你平时喜欢做什么运动？** ('What sport do you usually like doing?').",
        "Choose the reply that names a **sport** (**运动**) and gives a natural reason!",
      ],
      explanation:
        "**我最喜欢打网球，因为既好玩又对身体好！** ('I like playing tennis best, because it is both fun and good for my health!') directly answers **喜欢做什么运动**.",
    },
    {
      id: "exam-r2-q07",
      kind: "mcq",
      topicId: "leisure-plans",
      guideRef: "together-invitations",
      difficulty: "warmup",
      question:
        "Your friend invites you to watch a new superhero film on Saturday morning, **but** you have a swimming competition. Which reply declines **politely** in natural Mandarin?",
      options: [
        "我不去！那个电影一点儿也没意思。",
        "不好意思，星期六上午我有游泳比赛，我们星期天去好吗？",
        "太好了！那我们星期六早上九点不见不散。",
        "请问电影院怎么走？门票多少钱一张？",
      ],
      answerIndex: 1,
      hints: [
        "In Mandarin, a polite refusal starts with **不好意思** (*bù hǎoyìsi*, 'Sorry / Excuse me'), explains the clash briefly, and often suggests another time.",
        "Avoid blunt **我不去！** or accepting (**太好了！**) when you actually have a competition.",
      ],
      explanation:
        "**不好意思，星期六上午我有游泳比赛，我们星期天去好吗？** apologises politely (**不好意思**), gives the genuine reason (**有游泳比赛**), and suggests Sunday instead.",
    },
    {
      id: "exam-r2-q08",
      kind: "mcq",
      topicId: "vegetables-fruits",
      guideRef: "fruits-vocab",
      difficulty: "warmup",
      question:
        "At Tiong Bahru Market (**中峇鲁巴刹**), a fruit uncle hands you a slice of orange to try:\n\n" +
        "- **老板：** 来，先尝一尝！这批橙子甜不甜？\n" +
        "- **妈妈：** 嗯，又甜又多汁，非常新鲜！给我来两斤吧。\n\n" +
        "What does Mum think of the oranges?",
      options: [
        "They are too sour and dry, so she doesn't buy any.",
        "They are fresh, but far too expensive.",
        "They are both sweet and juicy, and very fresh — so she buys two *jīn*.",
        "They taste bitter, so she asks for watermelons instead.",
      ],
      answerIndex: 2,
      hints: [
        "**尝一尝** (*cháng yi cháng*) means 'have a taste', and **甜不甜？** asks 'Are they sweet?'.",
        "Look at Mum's description: **又甜又多汁，非常新鲜！**",
      ],
      explanation:
        "**又甜又多汁** (*yòu tián yòu duōzhī*) means 'both sweet and juicy', and **非常新鲜** (*fēicháng xīnxiān*) means 'very fresh', so Mum asks for two *jīn* (**给我来两斤吧**).",
    },

    // =========================================================================
    // SECTION B: MULTI-TURN SITUATIONAL DIALOGUES (Q09–Q22)
    // =========================================================================
    {
      id: "exam-r2-q09",
      kind: "mcq",
      topicId: "greetings-routine",
      guideRef: "family-pets",
      difficulty: "core",
      question:
        "Read this conversation when Anya visits Mingxuan's flat in Bishan:\n\n" +
        "- **安雅：** 明轩，这只小猫真可爱！它几岁了？\n" +
        "- **明轩：** 它今年两岁了，是我姐姐去年生日的时候爸爸送给她的。\n" +
        "- **安雅：** 你姐姐今天在家吗？\n" +
        "- **明轩：** 她不在，她去学校图书馆看书了。\n\n" +
        "What do we learn from this dialogue?",
      options: [
        "The kitten is one year old and belongs to Mingxuan's younger sister.",
        "Mingxuan's older sister is in her bedroom studying right now.",
        "Anya brought her own pet cat to Mingxuan's home.",
        "The cat is two years old, was a birthday gift from Dad to Mingxuan's older sister, and his sister is currently at the school library.",
      ],
      answerIndex: 3,
      hints: [
        "Check the cat's age (**今年两岁了**) and who gave it to whom (**姐姐去年生日的时候爸爸送给她的**).",
        "Check where the older sister is right now (**她不在，她去学校图书馆看书了**).",
      ],
      explanation:
        "Mingxuan explains the cat is 2 years old (**两岁了**), Dad gave it to his older sister for her birthday last year (**爸爸送给她的**), and his older sister is out at the school library reading (**去学校图书馆看书了**).",
    },
    {
      id: "exam-r2-q10",
      kind: "mcq",
      topicId: "seasons",
      guideRef: "seasonal-activities",
      difficulty: "core",
      question:
        "Read this conversation between Zihan and his dad the night before flying from Changi Airport to Harbin in December:\n\n" +
        "- **爸爸：** 子涵，你的行李箱收拾好了吗？明天到哈尔滨我们要去滑雪、堆雪人呢！\n" +
        "- **子涵：** 我装了四件T恤衫和两条短裤，够不够？\n" +
        "- **爸爸：** 哎呀，你以为是去圣淘沙游泳啊？那边现在零下十五度！快去拿羽绒服、毛衣、围巾和手套！\n\n" +
        "Why does Dad say **哎呀** (*Āiyā*)?",
      options: [
        "Because Zihan packed summer T-shirts and shorts for a -15°C winter skiing trip!",
        "Because Zihan packed too many heavy winter coats for a beach trip to Sentosa.",
        "Because Zihan forgot his passport and plane ticket at school.",
        "Because their flight to Harbin has been cancelled due to a typhoon.",
      ],
      answerIndex: 0,
      hints: [
        "Look at what Zihan packed: **四件T恤衫和两条短裤** (four T-shirts and two pairs of shorts).",
        "Compare that with Harbin's temperature (**零下十五度**, -15°C) and activities (**滑雪、堆雪人**, skiing and building snowmen)!",
      ],
      explanation:
        "Dad jokes **你以为是去圣淘沙游泳啊？** ('Do you think we're going swimming in Sentosa?') because Zihan packed T-shirts and shorts (**T恤衫和短裤**) when Harbin is **-15°C** (**零下十五度**), telling him to grab his down jacket (**羽绒服**), jumper (**毛衣**), scarf (**围巾**), and gloves (**手套**).",
    },
    {
      id: "exam-r2-q11",
      kind: "mcq",
      topicId: "illness",
      guideRef: "at-the-clinic",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clinic visit summary card showing temperature 38.6 degrees and doctor instructions">' +
        '<rect x="20" y="16" width="600" height="178" rx="14" fill="#f8fafc" stroke="#0d9488" stroke-width="2.5"/>' +
        '<rect x="20" y="16" width="600" height="46" rx="14" fill="#0d9488"/>' +
        '<text x="320" y="46" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#ffffff">仁爱诊所 · 看病记录单 (Clinic Consultation Card)</text>' +
        '<text x="48" y="92" font-family="sans-serif" font-size="17" fill="#1e293b">病人：周凯文 (13岁)　　体温：38.6°C（发烧）</text>' +
        '<text x="48" y="126" font-family="sans-serif" font-size="17" fill="#1e293b">症状：重感冒、咳嗽、嗓子疼（从昨天晚上开始）</text>' +
        '<text x="48" y="160" font-family="sans-serif" font-size="17" font-weight="bold" fill="#c81e1e">医嘱：不用打针；吃三天感冒药，在家休息两天，多喝温水，别吃油炸食物。</text>' +
        "</svg>",
      question:
        "After consulting the doctor at **仁爱诊所**, Kaiwen receives the clinic card above. When Mum asks outside **“医生怎么说？要打针吗？”**, what should Kaiwen tell her?",
      options: [
        "The doctor said I must have an injection today and can go back to school tomorrow.",
        "The doctor said I don't need an injection, but I must take cold medicine for three days, rest at home for two days, drink warm water, and avoid fried food.",
        "The doctor said my temperature is normal and I only have a slight toothache.",
        "The doctor told me to drink plenty of iced water and do outdoor sports.",
      ],
      answerIndex: 1,
      hints: [
        "Look at the red **医嘱** (*yīzhǔ*, doctor's instructions) line at the bottom of the card.",
        "**不用打针** (*búyòng dǎzhēn*) directly answers Mum's question **要打针吗？** ('Do you need an injection?').",
      ],
      explanation:
        "**不用打针** means no injection is needed; **吃三天感冒药，在家休息两天，多喝温水，别吃油炸食物** means take cold medicine for 3 days, rest at home for 2 days, drink plenty of warm water, and don't eat deep-fried food.",
    },
    {
      id: "exam-r2-q12",
      kind: "mcq",
      topicId: "leisure-plans",
      guideRef: "making-plans-dasuan",
      difficulty: "core",
      question:
        "Read this hallway chat between two Year 8 friends on Friday afternoon:\n\n" +
        "- **浩然：** 明天周末了，你打算怎么过？\n" +
        "- **思琪：** 星期六上午我要在家复习中文，下午准备跟妈妈去乌节路买一件生日礼物送给奶奶。\n" +
        "- **浩然：** 真孝顺！那星期天呢？\n" +
        "- **思琪：** 星期天全家人要去奶奶家吃晚饭。\n\n" +
        "Why is Siqi going to Orchard Road (**乌节路**) on Saturday afternoon?",
      options: [
        "To revise for her Mandarin test at a café",
        "To eat birthday dinner with her whole family at a restaurant",
        "To buy a birthday present for her paternal grandmother with Mum",
        "To buy new sports clothes for Haoran",
      ],
      answerIndex: 2,
      hints: [
        "Find **乌节路** in Siqi's first turn and read right to the end of that sentence.",
        "**买一件生日礼物送给奶奶** tells you both *what* she is buying and *for whom*!",
      ],
      explanation:
        "Siqi says **下午准备跟妈妈去乌节路买一件生日礼物送给奶奶** — she plans to go to Orchard Road with her mum to buy a birthday present (**生日礼物**) for her grandma (**奶奶**). The family dinner at Grandma's house happens on **Sunday evening** (**星期天**).",
    },
    {
      id: "exam-r2-q13",
      kind: "short",
      topicId: "vegetables-fruits",
      guideRef: "bargaining-tai-le",
      difficulty: "core",
      question:
        "Read this live bargaining exchange at a fruit stall:\n\n" +
        "- **顾客：** 老板，这葡萄怎么卖？\n" +
        "- **老板：** 十二块钱一斤，非常甜！\n" +
        "- **顾客：** 十二块有一点儿贵，便宜一点儿吧，十块钱一斤怎么样？\n" +
        "- **老板：** 好吧，十块就十块！您要几斤？\n" +
        "- **顾客：** 我要两斤，再拿一个九块钱的西瓜。给您五十块。\n\n" +
        "How much **change** (**找多少钱**, in **块**) should the stall owner hand back to the customer? Enter a number.",
      answer: {
        type: "number",
        value: 21,
      },
      traps: [
        {
          spec: { type: "number", value: 29 },
          feedback: "29 块 is the total **cost** of the fruit (20 + 9 = 29) — subtract that from the **50 块** note the customer handed over to find the **change**!",
        },
        {
          spec: { type: "number", value: 17 },
          feedback: "17 块 used the original price of 12 块/斤 for grapes — notice the owner agreed to the bargained price (**好吧，十块就十块！**)!",
        },
      ],
      hints: [
        "First check the agreed price for grapes: **十块就十块** (10 yuan per *jīn*) × **两斤** (2 *jīn*) = 20 yuan, plus **一个九块钱的西瓜** (9 yuan).",
        "The customer pays **五十块** (50 yuan), so subtract the total cost from 50!",
      ],
      solution: [
        "Bargained grapes: 2 *jīn* × 10 = 20 块.",
        "Watermelon: 1 × 9 = 9 块 → Total spent = 29 块.",
        "Change from 50 块 (**找您钱**): 50 − 29 = **21** 块.",
      ],
    },
    {
      id: "exam-r2-q14",
      kind: "mcq",
      topicId: "three-meals",
      guideRef: "meals-staples",
      difficulty: "core",
      question:
        "In the kitchen at 7:00 pm, Dad calls out:\n\n" +
        "- **爸爸：** 晚饭做好了！今天有牛肉面，也有米饭和蒸鱼。你想吃面条还是吃米饭？\n" +
        "- **你：** ________________",
      options: [
        "是的，我想吃面条还是吃米饭。",
        "我今天早上吃了两个包子和一杯豆浆。",
        "我不饿，我想买两斤土豆。",
        "我今天想吃米饭和蒸鱼，再来一碗汤，谢谢爸爸！",
      ],
      answerIndex: 3,
      hints: [
        "**A 还是 B？** (*háishi*, 'or' in choice questions) NEVER takes **是的** ('yes') as an answer — you must pick one of the options!",
        "Look for the response that chooses between **面条** and **米饭** for tonight's dinner.",
      ],
      explanation:
        "When someone asks an **A 还是 B？** choice question (**你想吃面条还是吃米饭？**), you answer by selecting one option: **我今天想吃米饭和蒸鱼，再来一碗汤，谢谢爸爸！** Replying *是的，…还是…* is a classic Mandarin dialogue error.",
    },
    {
      id: "exam-r2-q15",
      kind: "short",
      topicId: "eating-out",
      guideRef: "entering-seating",
      difficulty: "core",
      question:
        "You walk into a Chinese restaurant with your parents and younger brother (4 people in total). The waiter smiles and says:\n\n" +
        "> **服务员：欢迎光临！请问几位？**\n\n" +
        "Write a natural Mandarin reply telling the waiter there are **four of you** (using **四位** or **四个人** in Simplified Hanzi or toned Pinyin):",
      answer: {
        type: "text",
        accept: [
          "四位",
          "我们有四位",
          "我们四位",
          "我们有四个人",
          "四个人",
          "我们四个人",
          "sì wèi",
          "wǒmen yǒu sì wèi",
          "wǒmen sì wèi",
          "wǒmen yǒu sì gè rén",
          "wǒmen yǒu sì ge rén",
          "wǒmen sì gè rén",
          "sì gè rén",
        ],
        display: "我们有四位 / 四个人。 (Sì wèi / Wǒmen yǒu sì gè rén.)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["四口人", "我们有四口人"] },
          feedback: "**口** (*kǒu*) is only for stating how many members live in your household (**我家有四口人**) — at a restaurant door, say **四位** or **我们有四个人**!",
        },
      ],
      hints: [
        "**请问几位？** (*Qǐngwèn jǐ wèi?*) asks 'How many people in your party?' (**位** is the polite measure word for people/guests).",
        "Reply with **四位** or **我们有四个人** (don't use **口**, which is only for household size!).",
      ],
      solution: [
        "At a restaurant entrance, reply **四位** (*sì wèi*) or **我们有四个人** (*wǒmen yǒu sì gè rén*).",
      ],
    },
    {
      id: "exam-r2-q16",
      kind: "mcq",
      topicId: "sentence-patterns",
      guideRef: "bi-comparisons",
      difficulty: "core",
      question:
        "In a sportswear shop on Orchard Road, Jiamin and her mum compare two pairs of trainers:\n\n" +
        "- **佳敏：** 妈，我喜欢这双白色的运动鞋，比那双黑色的好看多了！\n" +
        "- **妈妈：** 可是白色太容易脏了，而且比那双黑色的贵三十新币。你试试蓝色那双吧，穿起来跟白色的一样舒服，价钱也便宜。\n\n" +
        "Why does Mum suggest the **blue** trainers (**蓝色那双**) instead of the white ones?",
      options: [
        "White gets dirty too easily and costs S$30 more than the black pair, whereas the blue pair is just as comfortable as the white pair and cheaper.",
        "The white trainers are uncomfortable and uglier than the black ones.",
        "The shop does not have Jiamin's size in the white trainers.",
        "The blue trainers are S$30 more expensive than the white ones.",
      ],
      answerIndex: 0,
      hints: [
        "Read Mum's two objections to the white shoes: **白色太容易脏了** (**脏** *zāng* = dirty) and **比那双黑色的贵三十新币**.",
        "Then read her praise for the blue pair: **跟白色的一样舒服，价钱也便宜**.",
      ],
      explanation:
        "Mum points out that white gets dirty too easily (**太容易脏了**) and is S$30 dearer than the black pair (**比那双黑色的贵三十新币**), whereas the blue pair is just as comfortable as the white pair (**跟白色的一样舒服**) and cheaper (**价钱也便宜**).",
    },
    {
      id: "exam-r2-q17",
      kind: "short",
      topicId: "greetings-routine",
      guideRef: "clock-times",
      difficulty: "core",
      question:
        "On the phone, your friend says:\n\n" +
        "> **“电影六点开始，我们差十分六点在电影院门口见面吧！”**\n\n" +
        "What exact digital clock time is **差十分六点** (*chà shí fēn liù diǎn*)? Write it in `HH:MM` format (e.g. `5:50` or `17:50` — or write `五点五十分` in Hanzi).",
      answer: {
        type: "text",
        accept: [
          "5:50",
          "05:50",
          "17:50",
          "五点五十",
          "五点五十分",
          "5点50",
          "5点50分",
          "wǔ diǎn wǔshí fēn",
          "wǔ diǎn wǔshí",
        ],
        display: "5:50 (五点五十分)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["6:10", "06:10", "18:10", "六点十分"] },
          feedback: "Careful! **差** (*chà*) means 'short of / minutes **to** the hour', not past the hour — 10 minutes **to** 6 is 5:50!",
        },
      ],
      hints: [
        "**差** (*chà*) literally means 'lacking / short of'.",
        "**差十分六点** = 10 minutes **to** 6 o'clock!",
      ],
      solution: [
        "**差十分六点** means '10 minutes to 6 o'clock', which is **5:50** (**五点五十分**).",
      ],
    },
    {
      id: "exam-r2-q18",
      kind: "mcq",
      topicId: "time-measure-words",
      guideRef: "demonstratives-duration",
      difficulty: "core",
      question:
        "Outside a clothes shop fitting room, complete the dialogue with the right **demonstrative + classifier** phrases:\n\n" +
        "- **售货员：** 小姐，您手里拿的________红裙子好看，还是挂在那边的________蓝裤子好看？\n" +
        "- **顾客：** 我觉得都很好看，我可以试试吗？",
      options: [
        "这个 …… 那个",
        "这条 …… 那条",
        "这件 …… 那双",
        "这张 …… 那只",
      ],
      answerIndex: 1,
      hints: [
        "'In your hand' (**您手里拿的**) is close to the listener (**这**, this), while 'hanging over there' (**挂在那边的**) is further away (**那**, that).",
        "Both skirts (**裙子**) and trousers (**裤子**) take the long/lower-body garment classifier **条** (*tiáo*)!",
      ],
      explanation:
        "Both **裙子** (skirt) and **裤子** (trousers) use the classifier **条** (*tiáo*), giving **这条红裙子** ('this red skirt' in your hand) and **那条蓝裤子** ('that pair of blue trousers' hanging over there).",
    },
    {
      id: "exam-r2-q19",
      kind: "mcq",
      topicId: "weather",
      guideRef: "weather-activities",
      difficulty: "core",
      question:
        "Your family is deciding Sunday morning plans over breakfast:\n\n" +
        "- **弟弟：** 爸，今天天气这么好，我们去东海岸公园骑自行车吧！\n" +
        "- **爸爸：** 现在虽然是晴天，但是天气预报说中午可能会下雷阵雨。\n" +
        "- **妈妈：** 那我们早一点儿出门，十一点以前回家吃午饭就没问题了！\n\n" +
        "What solution does Mum propose?",
      options: [
        "Stay indoors all day and cancel the cycling trip",
        "Go cycling in the afternoon after lunch instead",
        "Set off earlier in the morning and return home before 11:00 am for lunch before the midday storm",
        "Take a taxi to Orchard Road shopping malls instead of East Coast Park",
      ],
      answerIndex: 2,
      hints: [
        "Dad worries that **中午可能会下雷阵雨** (there might be thundershowers at midday).",
        "Read Mum's smart workaround: **早一点儿出门，十一点以前回家吃午饭**.",
      ],
      explanation:
        "Since thundershowers are only forecast for midday (**中午**), Mum suggests leaving a bit earlier (**早一点儿出门**) and coming home before 11:00 am (**十一点以前回家**) so they still enjoy cycling dry!",
    },
    {
      id: "exam-r2-q20",
      kind: "mcq",
      topicId: "hobbies",
      guideRef: "ability-hui-neng",
      difficulty: "core",
      question:
        "After a friendly table-tennis match at the Youth Centre, your Chinese exchange buddy says:\n\n" +
        "> **“哇，你的乒乓球打得真棒！”**\n\n" +
        "Which reply sounds **modest, natural, and idiomatic** in Mandarin?",
      options: [
        "对，我是全世界打得最好的人！",
        "不，我不会踢足球。",
        "对不起，我今天没带球拍。",
        "哪里哪里，我还打得不够好，还要向你多学习！",
      ],
      answerIndex: 3,
      hints: [
        "**打得真棒！** is a warm compliment ('You play table tennis really brilliantly!').",
        "In Chinese culture, **哪里哪里** (*nǎli nǎli*, 'Not at all / You flatter me') is the classic modest way to respond to praise!",
      ],
      explanation:
        "**哪里哪里，我还打得不够好，还要向你多学习！** ('You flatter me! I don't play well enough yet and still have lots to learn from you!') is the classic, polite Chinese response to a compliment (**打得真棒**).",
    },
    {
      id: "exam-r2-q21",
      kind: "short",
      topicId: "three-meals",
      guideRef: "meats-dishes",
      difficulty: "core",
      question:
        "At Maxwell Food Centre in Singapore, a tourist asks you what local dish you are eating. Complete your sentence in Simplified Hanzi (or toned Pinyin) with Singapore's famous **Hainanese chicken rice** (**鸡饭** or **海南鸡饭**):\n\n" +
        "> **这是新加坡最有名的________，既香又嫩！**",
      answer: {
        type: "text",
        accept: [
          "鸡饭",
          "海南鸡饭",
          "jīfàn",
          "jī fàn",
          "Hǎinán jīfàn",
          "hǎinán jīfàn",
          "hǎinán jī fàn",
        ],
        display: "海南鸡饭 / 鸡饭 (Hǎinán jīfàn)",
      },
      hints: [
        "Combine **鸡** (*jī*, chicken) + **饭** (*fàn*, cooked rice) — with or without **海南** (*Hǎinán*).",
        "Double-check the tone on **鸡** (*jī*, 1st tone) and **饭** (*fàn*, 4th tone) if typing Pinyin.",
      ],
      solution: [
        "Singapore's iconic dish is **鸡饭** (*jīfàn*) or **海南鸡饭** (*Hǎinán jīfàn*).",
      ],
    },
    {
      id: "exam-r2-q22",
      kind: "mcq",
      topicId: "eating-out",
      guideRef: "five-flavours",
      difficulty: "core",
      question:
        "At a Sichuan restaurant, the waiter asks your table before sending the order to the kitchen:\n\n" +
        "- **服务员：** 这道麻婆豆腐平时做得比较辣，你们能吃辣吗？\n" +
        "- **奶奶：** 我年纪大了，不能吃太辣，也不要太咸。\n" +
        "- **爸爸：** 那麻烦您做成微辣，再给我们奶奶单独来一碗清淡的青菜豆腐汤。\n\n" +
        "What does Dad ask the waiter to do?",
      options: [
        "Make the Mapo Tofu mildly spicy, and bring a separate bowl of light vegetable-and-tofu soup for Grandma",
        "Cancel the Mapo Tofu and make every dish extra spicy and salty",
        "Add extra salt and chilli oil to Grandma's soup",
        "Pack all the food for takeaway because Grandma wants to eat at home",
      ],
      answerIndex: 0,
      hints: [
        "**微辣** (*wēi là*) means 'mildly spicy', and **单独** (*dāndú*) means 'separately'.",
        "**清淡** (*qīngdàn*) is the flavour word for light (not spicy, oily, or salty).",
      ],
      explanation:
        "Because Grandma cannot eat food that is too spicy or salty (**不能吃太辣，也不要太咸**), Dad politely says **麻烦您做成微辣** (please make the Mapo Tofu mildly spicy) and orders a separate light vegetable-and-tofu soup (**一碗清淡的青菜豆腐汤**) for Grandma.",
    },

    // =========================================================================
    // SECTION C: CHALLENGE DIALOGUES & 3 IGCSE 0547 ROLEPLAY TASKS (Q23–Q30)
    // =========================================================================
    {
      id: "exam-r2-q23",
      kind: "mcq",
      topicId: "tenses-particles",
      guideRef: "future-markers",
      difficulty: "challenge",
      question:
        "Two classmates chat excitedly outside the exam hall in June:\n\n" +
        "- **宇航：** 考完今天的中文考试，就快要放暑假了！你假期有什么打算？\n" +
        "- **乐怡：** 我爸妈已经买好机票了，下个月我们要去上海看外婆。你呢？\n" +
        "- **宇航：** 我哪儿也不去，打算在新加坡学弹电吉他，还要参加学校的篮球夏令营。\n\n" +
        "Which detail is **accurate** based on their conversation?",
      options: [
        "The summer holiday started two weeks ago.",
        "Leyi's parents have already bought plane tickets to visit her maternal grandmother in Shanghai next month, while Yuhang will stay in Singapore to learn electric guitar and join a basketball camp.",
        "Yuhang is flying to Shanghai with Leyi to play basketball.",
        "Leyi has not decided whether she will travel this holiday.",
      ],
      answerIndex: 1,
      hints: [
        "Spot **快要放暑假了** ('the summer holiday is about to start soon!') and **已经买好机票了** ('have already bought the plane tickets').",
        "**外婆** (*wàipó*) is maternal grandmother, and **哪儿也不去** means 'not going anywhere (overseas)'.",
      ],
      explanation:
        "**快要放暑假了** means summer holiday is *about* to begin; Leyi's parents have already booked flights (**已经买好机票了**) to Shanghai next month to see her maternal grandmother (**外婆**), while Yuhang isn't travelling (**哪儿也不去**) and plans to learn electric guitar (**学弹电吉他**) and attend a basketball camp (**篮球夏令营**) in Singapore.",
    },
    {
      id: "exam-r2-q24",
      kind: "short",
      topicId: "tenses-particles",
      guideRef: "bu-vs-mei",
      difficulty: "challenge",
      question:
        "Mum knocks on your bedroom door at 8:30 pm:\n\n" +
        "- **妈妈：** 志豪，你的中文作业做完了吗？\n" +
        "- **志豪：** 我还____做完呢，还有最后两道题！\n\n" +
        "Fill in the single negation character (**不** or **没**) that pairs with **还……呢** to mean **'not yet'**:",
      answer: {
        type: "text",
        accept: ["没", "没有", "méi", "méiyǒu"],
        display: "没 (méi — 还没做完呢 'haven't finished yet')",
      },
      traps: [
        {
          spec: { type: "text", accept: ["不", "bù"] },
          feedback: "**不** expresses refusal ('I refuse to finish it'). To say an action is **not yet completed** ('haven't finished yet'), Mandarin ALWAYS uses **还没(有) + Verb (呢)**!",
        },
      ],
      hints: [
        "Does Zhihao refuse to do his homework, or has he simply **not finished it yet**?",
        "Recall the fixed Mandarin 'not yet' frame: **还没 + Verb (+ 呢)**.",
      ],
      solution: [
        "'Not yet' in Mandarin is **还没 + Verb (+ 呢)**: **我还没做完呢** (*Wǒ hái méi zuò wán ne*, 'I haven't finished it yet').",
      ],
    },
    {
      id: "exam-r2-q25",
      kind: "mcq",
      topicId: "seasons",
      guideRef: "describing-favourite-season",
      difficulty: "challenge",
      question:
        "During an IGCSE oral practice dialogue, the teacher asks:\n\n" +
        "- **老师：** 你住在新加坡，可是为什么你说自己最喜欢的季节是冬天呢？\n" +
        "- **学生：** ________________\n\n" +
        "Which reply answers **why** coherently, naturally linking Singapore's climate with a personal experience?",
      options: [
        "因为新加坡的冬天常常下大雪，我每天在乌节路滑雪。",
        "虽然新加坡很热，所以我最讨厌穿毛衣和外套。",
        "因为新加坡一年到头都很热，而我前年十二月去日本旅游的时候第一次看到下雪，觉得堆雪人特别好玩，所以最喜欢冬天！",
        "我昨天没去北京，因为北京比新加坡很冷。",
      ],
      answerIndex: 2,
      hints: [
        "Check both factual accuracy (it never snows on Orchard Road!) and grammatical accuracy (watch out for *虽然…所以* or *比…很冷*).",
        "Look for the answer that starts with **因为** and explains why someone living in hot Singapore loves winter.",
      ],
      explanation:
        "The third response explains logically and idiomatically: because Singapore is hot all year round (**一年到头都很热**), seeing snow for the first time on a December trip to Japan two years ago (**前年十二月去日本旅游的时候第一次看到下雪**) and building snowmen made winter their favourite season. The other choices contain factual nonsense or grammar errors (*虽然…所以*, *比…很冷*).",
    },
    {
      id: "exam-r2-q26",
      kind: "mcq",
      topicId: "vegetables-fruits",
      guideRef: "market-dialogue",
      difficulty: "challenge",
      question:
        "Read this wet-market dialogue with a missing line:\n\n" +
        "- **阿姨：** 小姑娘，今天的西红柿和黄瓜都很新鲜，想买点儿什么？\n" +
        "- **美美：** 阿姨，西红柿怎么卖？\n" +
        "- **阿姨：** 四块钱一斤。\n" +
        "- **美美：** 我要两斤西红柿，再拿三根黄瓜。________________\n" +
        "- **阿姨：** 黄瓜算你四块，加西红柿一共十二块。你有零钱吗？\n\n" +
        "Which question from Meimei fits naturally into the blank so Auntie's reply makes complete sense?",
      options: [
        "请问超市几点关门？",
        "这西红柿甜不甜？我不要买黄瓜。",
        "阿姨，找您十二块钱！",
        "一共多少钱？可以便宜一点儿吗？",
      ],
      answerIndex: 3,
      hints: [
        "Look at Auntie's response right after the blank: **黄瓜算你四块，加西红柿一共十二块** ('I'll count the cucumbers as 4 yuan for you, plus the tomatoes that's 12 yuan altogether').",
        "Notice **算你四块** (giving a friendly price) and **一共十二块** (giving the total) — what two things did Meimei just ask?",
      ],
      explanation:
        "**一共多少钱？可以便宜一点儿吗？** ('How much altogether? Can you make it a little cheaper?') triggers Auntie's friendly discount phrasing (**黄瓜算你四块**) and the total calculation (**加西红柿一共十二块**). Saying **找您…** is what the *seller* says when giving change!",
    },
    {
      id: "exam-r2-q27",
      kind: "mcq",
      topicId: "sentence-patterns",
      guideRef: "cause-contrast",
      difficulty: "challenge",
      question:
        "Read this family dinner-table negotiation:\n\n" +
        "- **儿子：** 妈，虽然下个星期有数学和中文考试，但是我每天都已经复习两个小时了。星期六下午我可以跟同学去踢一个小时足球吗？\n" +
        "- **妈妈：** 运动对身体好，只要你星期六上午先把作业做完，下午就可以去踢球；不过六点以前一定要回家吃晚饭！\n\n" +
        "Under what **two conditions** does Mum allow her son to play football on Saturday afternoon?",
      options: [
        "He must finish his homework first on Saturday morning, and he must come home before 6:00 pm for dinner.",
        "He must score 100% in both Maths and Mandarin first, and clean the kitchen.",
        "He can only play football on Sunday evening after 6:00 pm.",
        "He must study for four hours on Saturday afternoon instead of going out.",
      ],
      answerIndex: 0,
      hints: [
        "Spot the conditional frame **只要……就……** (*zhǐyào … jiù …*, 'as long as … then …'): **只要你星期六上午先把作业做完**.",
        "Then check the final restriction after **不过** (*búguò*, however): **六点以前一定要回家吃晚饭**.",
      ],
      explanation:
        "Mum agrees because sport is good for health (**运动对身体好**), provided that (1) he finishes his homework first on Saturday morning (**只要你星期六上午先把作业做完，下午就可以去踢球**), and (2) he returns home before 6:00 pm for dinner (**六点以前一定要回家吃晚饭**).",
    },
    {
      id: "exam-r2-q28",
      kind: "written",
      topicId: "illness",
      guideRef: "sick-leave-note",
      difficulty: "challenge",
      marks: 5,
      question:
        "**IGCSE 0547 Roleplay & Message Task 1 — Sick-Leave Message to Form Tutor (请假留言 — 5 marks):**\n\n" +
        "You woke up unwell this morning in Singapore and went to see the doctor with your mum. Write a polite email/text message in **Simplified Hanzi** (50–70 characters) to **李老师** (*Lǐ lǎoshī*) covering **all 5 bullet points**:\n\n" +
        "1. Greet **李老师** politely and explain that you cannot come to school today (**今天不能去上学**).\n" +
        "2. Describe at least **two** symptoms you have (e.g. **发烧**, **头疼**, **嗓子疼**, **咳嗽**).\n" +
        "3. State that Mum took you to see the doctor this morning (**早上妈妈带我去看医生了**).\n" +
        "4. Report **two** pieces of advice the doctor gave you (using **应该 / 得 / 让我**, e.g. take medicine, drink more water, rest at home for two days).\n" +
        "5. Ask politely about today's Mandarin homework or thank the teacher.",
      hints: [
        "Open respectfully with **李老师，您好！** and explain **因为我生病了，所以今天不能去上学。**",
        "Include two clear symptoms (**我发烧了，嗓子也很疼**) + the morning clinic visit (**今天早上妈妈带我去看医生了**).",
        "Report the doctor's orders (**医生让我吃药、多喝水，还得在家休息两天**) and close politely (**请问今天的中文作业是什么？谢谢老师！**).",
      ],
      modelAnswer:
        "李老师，您好！我今天生病了，发烧，而且嗓子很疼，所以今天不能去上学。今天早上妈妈带我去医院看医生了。医生给我开了感冒药，让我多喝温水，还得在家休息两天。请问今天的中文作业是什么？谢谢李老师！",
      markScheme: [
        {
          point: "Greets 李老师 politely and states inability to attend school today (不能去上学 / 请假)",
          keywords: ["李老师", "您好", "不能去上学", "不能上学", "请假"],
        },
        {
          point: "Describes at least two valid illness symptoms clearly (e.g. 发烧, 头疼, 嗓子疼, 咳嗽, 感冒, 肚子疼)",
          keywords: ["发烧", "头疼", "嗓子疼", "咳嗽", "感冒", "肚子疼"],
        },
        {
          point: "Mentions going to see the doctor this morning with Mum (早上…看医生 / 看病)",
          keywords: ["看医生", "看病", "医院", "早上"],
        },
        {
          point: "Reports doctor's health advice accurately (e.g. 吃药, 多喝水, 在家休息)",
          keywords: ["吃药", "多喝水", "喝温水", "休息"],
        },
        {
          point: "Asks politely about homework or expresses polite thanks at closing (作业 / 谢谢)",
          keywords: ["作业", "谢谢"],
        },
      ],
      commonError:
        "Writing *我是发烧* (adding **是** before symptoms) or *我不能去上学今天* (putting **今天** at the end instead of before **不能**).",
    },
    {
      id: "exam-r2-q29",
      kind: "written",
      topicId: "leisure-plans",
      guideRef: "weekend-diary-plan",
      difficulty: "challenge",
      marks: 5,
      question:
        "**IGCSE 0547 Roleplay & Message Task 2 — Inviting a Friend Out This Weekend (周末邀约 — 5 marks):**\n\n" +
        "Write a WeChat/WhatsApp message in **Simplified Hanzi** (60–80 characters) to your friend **明华** (*Mínghuá*) inviting him/her out this Saturday:\n\n" +
        "1. Ask if Minghua is free this Saturday (**这个星期六你有空吗？**).\n" +
        "2. State what you **plan** to do together (**打算跟…一起…**) and **where** in Singapore (e.g. **圣淘沙** Sentosa, **东海岸公园** East Coast Park, or **乌节路** Orchard Road) + **one activity** (e.g. cycling, watching a film, swimming).\n" +
        "3. Mention the **weather forecast** for Saturday and what to wear or bring (e.g. **天气预报说…**, wear T-shirt/trainers or bring an umbrella/water).\n" +
        "4. Suggest a clear **meeting time and place** using **STPV** word order (e.g. **星期六上午九点在地铁站见面**).\n" +
        "5. End with an inviting question tag (**好吗？ / 怎么样？**).",
      hints: [
        "Use **这个星期六你有空吗？** followed by **我打算跟你一起去……**.",
        "Add a weather detail: **天气预报说星期六是晴天，很热，记得穿运动鞋、带一瓶水！**",
        "Check **STPV** on the meeting arrangement: **我们星期六早上九点在地铁站门口见面，怎么样？**",
      ],
      modelAnswer:
        "明华，你好！这个星期六你有空吗？我打算跟你一起去东海岸公园骑自行车，中午还可以去小贩中心吃鸡饭。天气预报说星期六是晴天，有一点儿热，你记得穿T恤衫和运动鞋，再带一瓶水。我们星期六上午九点在地铁站门口见面，怎么样？",
      markScheme: [
        {
          point: "Greets 明华 and asks whether they are free this Saturday (这个星期六你有空吗)",
          keywords: ["明华", "星期六", "有空"],
        },
        {
          point: "States weekend plan using 打算/想 + place + leisure/sport activity",
          keywords: ["打算", "一起", "东海岸", "圣淘沙", "乌节路", "看电影", "骑自行车", "游泳"],
        },
        {
          point: "Includes Saturday weather forecast and appropriate clothing/item to bring",
          keywords: ["天气", "晴天", "下雨", "热", "穿", "带"],
        },
        {
          point: "Arranges meeting time and place in correct Mandarin Time + Place + 见面 order",
          keywords: ["点", "在", "见面"],
        },
        {
          point: "Closes with a natural polite invitation question (好吗 / 怎么样 / 可以吗)",
          keywords: ["好吗", "怎么样", "可以吗"],
        },
      ],
      commonError:
        "Putting place and time after **见面** (*我们见面在地铁站九点* ✗ instead of **我们九点在地铁站见面** ✓).",
    },
    {
      id: "exam-r2-q30",
      kind: "written",
      topicId: "eating-out",
      guideRef: "ordering-dishes",
      difficulty: "challenge",
      marks: 5,
      question:
        "**IGCSE 0547 Roleplay Task 3 — Ordering at a Chinese Restaurant (餐厅点菜角色扮演 — 5 marks):**\n\n" +
        "You are eating out at a Chinese restaurant with your family. Write **your 5 spoken lines** (numbered `1.` to `5.` in **Simplified Hanzi**) in response to the waiter's prompts below:\n\n" +
        "1. *Waiter:* **欢迎光临！请问你们有几位？** → *(Say there are 5 people in your family today, and ask to look at the menu.)*\n" +
        "2. *Waiter:* **给您菜单。请问想点什么菜？** → *(Order **two** dishes using accurate classifiers, e.g. **一盘饺子**, **一碗牛肉面**, **半只烤鸭**, **一盘青菜**.)*\n" +
        "3. *Waiter:* **好的！对口味有什么要求吗？** → *(Make **one** flavour/dietary request, e.g. not too spicy **不要太辣** or less salt **少放一点儿盐**.)*\n" +
        "4. *Waiter:* **请问想喝点儿什么饮料？** → *(Order drinks for the table with accurate container classifiers, e.g. **一壶绿茶** and **两杯果汁**.)*\n" +
        "5. *Waiter (after the meal):* **吃好了吗？还需要别的吗？** → *(Say you are full, praise the food briefly, and ask for the bill + whether you can pay by card/phone.)*",
      hints: [
        "Line 1: **我们有五位（/ 五个人），请问可以看菜单吗？**",
        "Lines 2 & 4: Double-check **两** (not *二*) and container classifiers (**盘, 碗, 壶, 杯, 瓶**).",
        "Line 5: Use **我们吃饱了**, **菜很好吃**, and **服务员，买单！请问可以刷卡（/ 用手机付钱）吗？**",
      ],
      modelAnswer:
        "1. 我们今天有五位，请问可以看菜单吗？\n" +
        "2. 我们想要一盘饺子和一盘西红柿炒鸡蛋。\n" +
        "3. 请不要做得太辣，也少放一点儿盐，谢谢。\n" +
        "4. 请给我们来一壶热绿茶和两杯冰苹果汁。\n" +
        "5. 不用别的了，我们都吃饱了，菜非常好吃！服务员，买单，请问可以用手机付钱吗？",
      markScheme: [
        {
          point: "Line 1 states party of 5 politely (五位 / 五个人) and asks to see the menu (看菜单)",
          keywords: ["五位", "五个人", "菜单"],
        },
        {
          point: "Line 2 orders two food dishes using accurate classifiers (盘 / 碗 / 只 / 份)",
          keywords: ["盘", "碗", "只", "份", "饺子", "面", "青菜", "烤鸭", "鸡"],
        },
        {
          point: "Line 3 states a clear flavour or dietary request (不要太辣 / 少放盐 / 不要香菜 / 清淡)",
          keywords: ["辣", "盐", "香菜", "甜", "咸", "清淡"],
        },
        {
          point: "Line 4 orders drinks using accurate container classifiers (杯 / 壶 / 瓶) and 两 if ordering 2",
          keywords: ["杯", "壶", "瓶", "茶", "果汁", "水", "可乐", "牛奶"],
        },
        {
          point: "Line 5 says full/finished, asks for the bill (买单 / 结账), and asks about card/mobile payment",
          keywords: ["买单", "结账", "刷卡", "手机", "付钱"],
        },
      ],
      commonError:
        "Saying *我家有五口人* to the waiter instead of **我们有五位 / 五个人**, or using *好吃* for drinks instead of **好喝**.",
    },
  ],
};
