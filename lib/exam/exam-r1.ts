import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-r1",
  title: "Paper 1 — Reading Comprehension & Core Vocabulary (阅读与词汇)",
  calculator: false,
  minutes: 45,
  questions: [
    // =========================================================================
    // SECTION A: WARM-UP SIGNS, LABELS & EVERYDAY VOCABULARY (Q01–Q08)
    // =========================================================================
    {
      id: "exam-r1-q01",
      kind: "mcq",
      topicId: "greetings-routine",
      guideRef: "greetings-identity",
      difficulty: "warmup",
      question:
        "You see this student name badge on the first day at a school exchange in Singapore:\n\n" +
        "| 姓名 | 年级 | 国籍 |\n" +
        "|---|---|---|\n" +
        "| **林小美** | **八年级** | **新加坡** |\n\n" +
        "Which statement about **林小美** (*Lín Xiǎoměi*) is **true**?",
      options: [
        "She is in Year 8 and comes from Singapore.",
        "She is eight years old and lives in Beijing.",
        "Her surname is 小 (*Xiǎo*) and she is British.",
        "She is a Mandarin teacher for Year 8.",
      ],
      answerIndex: 0,
      hints: [
        "Look at the three column headers: **姓名** (full name), **年级** (year group / grade), and **国籍** (nationality).",
        "**八年级** (*bā niánjí*) means Year 8 (not 8 years old, which would be **八岁**), and **新加坡** (*Xīnjiāpō*) is Singapore.",
      ],
      explanation:
        "**八年级** (*bā niánjí*) means Year 8, and **新加坡** (*Xīnjiāpō*) is Singapore. Eight years old would be written **八岁** (*bā suì*), and in Chinese names the surname comes first, so her surname (**姓**) is **林** (*Lín*), not **小**.",
    },
    {
      id: "exam-r1-q02",
      kind: "mcq",
      topicId: "time-measure-words",
      guideRef: "dates-days",
      difficulty: "warmup",
      question:
        "A school noticeboard displays the date of the Mandarin Singing Competition:\n\n" +
        "> **中文唱歌比赛：十一月二十五号（星期三）**\n\n" +
        "When does the competition take place?",
      options: [
        "Tuesday 25 October",
        "Wednesday 25 November",
        "Friday 11 December",
        "Wednesday 15 November",
      ],
      answerIndex: 1,
      hints: [
        "Remember Mandarin's big-to-small date order: **月** (*yuè*, month) comes before **号** (*hào*, day of the month).",
        "**十一月** is the 11th month, **二十五号** is the 25th, and **星期三** is the 3rd day of the week starting from Monday.",
      ],
      explanation:
        "**十一月** (*shíyī yuè*) is November, **二十五号** (*èrshíwǔ hào*) is the 25th, and **星期三** (*xīngqīsān*) is Wednesday. Notice that **星期一** is Monday, so **星期三** is Wednesday rather than Tuesday.",
    },
    {
      id: "exam-r1-q03",
      kind: "mcq",
      topicId: "weather",
      guideRef: "weather-conditions",
      difficulty: "warmup",
      question:
        "Your phone weather app for Orchard Road (**乌节路**) flashes this alert:\n\n" +
        "> **今天下午有大雨，还会打雷。出门请带雨伞！**\n\n" +
        "What does the alert advise you to take when going out?",
      options: [
        "Sunglasses",
        "A winter coat",
        "An umbrella",
        "A water bottle",
      ],
      answerIndex: 2,
      hints: [
        "**大雨** (*dà yǔ*) means heavy rain and **打雷** (*dǎléi*) means thunder.",
        "Look at the final noun **雨伞** (*yǔsǎn*), which starts with the character **雨** (rain).",
      ],
      explanation:
        "**带雨伞** (*dài yǔsǎn*) means 'bring an umbrella'. The alert warns that this afternoon there will be heavy rain (**大雨**) and thunder (**打雷**), so you should bring an umbrella when going out (**出门**).",
    },
    {
      id: "exam-r1-q04",
      kind: "mcq",
      topicId: "seasons",
      guideRef: "four-seasons",
      difficulty: "warmup",
      question:
        "Read this caption under a travel photograph:\n\n" +
        "> **哈尔滨的冬天非常冷，常常下大雪。**\n\n" +
        "Which season and weather condition are described in Harbin (**哈尔滨**)?",
      options: [
        "Autumn — cool and windy",
        "Spring — warm and rainy",
        "Summer — hot and humid",
        "Winter — very cold with frequent heavy snow",
      ],
      answerIndex: 3,
      hints: [
        "Identify the season word **冬天** (*dōngtiān*) and the adjective **冷** (*lěng*).",
        "Check the weather phrase **下大雪** (*xià dà xuě*) at the end of the sentence.",
      ],
      explanation:
        "**冬天** (*dōngtiān*) means winter, **非常冷** (*fēicháng lěng*) means very cold, and **常常下大雪** (*chángcháng xià dà xuě*) means it often snows heavily. Autumn is **秋天**, spring is **春天**, and summer is **夏天**.",
    },
    {
      id: "exam-r1-q05",
      kind: "mcq",
      topicId: "illness",
      guideRef: "symptoms-illness",
      difficulty: "warmup",
      question:
        "Xiaoming sends this text message to his form tutor before morning registration:\n\n" +
        "> **王老师，早安！我今天发烧，嗓子也很疼，不能去上学。**\n\n" +
        "Which **two** symptoms does Xiaoming have?",
      options: [
        "A fever and a sore throat",
        "A toothache and a stomachache",
        "A headache and a runny nose",
        "A cough and sore eyes",
      ],
      answerIndex: 0,
      hints: [
        "**发烧** (*fāshāo*) describes a high body temperature.",
        "**嗓子** (*sǎngzi*) refers to the throat, followed by **很疼** (*hěn téng*, hurts a lot).",
      ],
      explanation:
        "**发烧** (*fāshāo*) means to have a fever, and **嗓子也很疼** (*sǎngzi yě hěn téng*) means his throat is also very sore. Toothache would be **牙疼** (*yá téng*) and stomachache would be **肚子疼** (*dùzi téng*).",
    },
    {
      id: "exam-r1-q06",
      kind: "mcq",
      topicId: "hobbies",
      guideRef: "creative-music-hobbies",
      difficulty: "warmup",
      question:
        "A poster outside the school music room says:\n\n" +
        "> **你会弹钢琴或者拉小提琴吗？欢迎参加学校音乐社！**\n\n" +
        "Who is this poster looking for?",
      options: [
        "Students who can play basketball or football",
        "Students who can play the piano or the violin",
        "Students who enjoy painting and photography",
        "Students who like cooking Chinese dishes",
      ],
      answerIndex: 1,
      hints: [
        "Notice the two musical verbs **弹** (*tán*, pluck/press keys) and **拉** (*lā*, draw a bow).",
        "**钢琴** (*gāngqín*) is piano and **小提琴** (*xiǎotíqín*) is violin.",
      ],
      explanation:
        "**弹钢琴** (*tán gāngqín*) means to play the piano and **拉小提琴** (*lā xiǎotíqín*) means to play the violin. **或者** (*huòzhě*) means 'or' in statements and invitations like this poster for the school music club (**音乐社**).",
    },
    {
      id: "exam-r1-q07",
      kind: "short",
      topicId: "vegetables-fruits",
      guideRef: "fruits-vocab",
      difficulty: "warmup",
      question:
        "A fruit stall sign in Chinatown (**牛车水**) reads:\n\n" +
        "> **泰国芒果：又大又甜！**\n\n" +
        "What **fruit** is this stall advertising? Answer in **English** (one word).",
      answer: {
        type: "text",
        accept: ["mango", "mangoes", "thai mango", "thai mangoes"],
        display: "mango",
      },
      hints: [
        "**泰国** (*Tàiguó*) is Thailand, and **又大又甜** (*yòu dà yòu tián*) means 'both big and sweet'.",
        "Sound out **芒果** (*mángguǒ*) — it is a loanword that sounds very close to its English name!",
      ],
      solution: [
        "**芒果** (*mángguǒ*) means **mango** (notice the grass radical **艹** on **芒** and **果** meaning 'fruit').",
        "The full sign means: 'Thai mangoes: both big and sweet!'",
      ],
    },
    {
      id: "exam-r1-q08",
      kind: "mcq",
      topicId: "three-meals",
      guideRef: "meals-staples",
      difficulty: "warmup",
      question:
        "Look at the breakfast set menu at a local café:\n\n" +
        "> **早安套餐：两个鸡蛋、两片面包、一杯热牛奶**\n\n" +
        "Which item is **NOT** included in this breakfast set?",
      options: [
        "Two eggs",
        "Two slices of bread",
        "A bowl of noodles",
        "A cup of hot milk",
      ],
      answerIndex: 2,
      hints: [
        "Match each item: **鸡蛋** (*jīdàn*), **面包** (*miànbāo*), and **热牛奶** (*rè niúnǎi*).",
        "Check whether **面条** (*miàntiáo*, noodles) appears anywhere on the sign — don't confuse **面包** (bread) with **面条** (noodles)!",
      ],
      explanation:
        "The set includes **两个鸡蛋** (two eggs), **两片面包** (two slices of bread), and **一杯热牛奶** (a cup of hot milk). Learners often confuse **面包** (*miànbāo*, bread) with **面条** (*miàntiáo*, noodles) — a bowl of noodles is not on the menu.",
    },

    // =========================================================================
    // SECTION B: CORE TIMETABLES, WEATHER CARDS, MENUS & MESSAGES (Q09–Q22)
    // =========================================================================
    {
      id: "exam-r1-q09",
      kind: "short",
      topicId: "greetings-routine",
      guideRef: "clock-times",
      difficulty: "core",
      question:
        "Read Meimei's school-day morning schedule:\n\n" +
        "- **06:30** — 起床\n" +
        "- **06:50** — 吃早饭\n" +
        "- **07:15** — 坐校车上学\n" +
        "- **08:00** — 上第一节课\n\n" +
        "Write **07:15** in Mandarin using **刻** (*kè*, quarter-hour), e.g. in Simplified Hanzi (or toned Pinyin).",
      answer: {
        type: "text",
        accept: [
          "七点一刻",
          "早上七点一刻",
          "qī diǎn yí kè",
          "qī diǎn yī kè",
          "zǎoshang qī diǎn yí kè",
          "zǎoshang qī diǎn yī kè",
        ],
        display: "七点一刻 (qī diǎn yí kè)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["七点十五分", "七点十五"] },
          feedback: "七点十五分 is 7:15, but the question specifically asks you to use **刻** (quarter-hour = 15 minutes)!",
        },
        {
          spec: { type: "text", accept: ["七点三刻"] },
          feedback: "三刻 is three quarters (45 minutes, so 7:45). One quarter past seven is **一刻**!",
        },
      ],
      hints: [
        "Start with the hour: **七点** (*qī diǎn*, 7 o'clock).",
        "One quarter of an hour (15 minutes) in Mandarin is **一刻** (*yí kè*).",
      ],
      solution: [
        "**七点** (*qī diǎn*) = 7 o'clock.",
        "**一刻** (*yí kè*) = 15 minutes (one quarter past).",
        "Put them together in big-to-small order: **七点一刻** (*qī diǎn yí kè*).",
      ],
    },
    {
      id: "exam-r1-q10",
      kind: "mcq",
      topicId: "leisure-plans",
      guideRef: "free-time-activities",
      difficulty: "core",
      question:
        "Read David's message about how his family spends Sunday afternoon:\n\n" +
        "> **星期天下午，爸爸喜欢在家里看电视，妈妈常常去超市买东西，我最喜欢去图书馆看书。**\n\n" +
        "Where does **David's mum** usually go on Sunday afternoon?",
      options: [
        "To the library to read books",
        "To the cinema to watch a film",
        "To the park for a walk",
        "To the supermarket to go shopping",
      ],
      answerIndex: 3,
      hints: [
        "Carefully match each person (**爸爸**, **妈妈**, **我**) to their own activity rather than mixing them up!",
        "Look at the clause starting with **妈妈**: **常常去超市买东西**.",
      ],
      explanation:
        "The sentence states **妈妈常常去超市买东西** (*māma chángcháng qù chāoshì mǎi dōngxi*) — Mum often goes to the supermarket (**超市**) to buy things / shop (**买东西**). Going to the library (**去图书馆看书**) is what the narrator (**我**) likes most, and watching TV at home is Dad's (**爸爸**) hobby.",
    },
    {
      id: "exam-r1-q11",
      kind: "mcq",
      topicId: "eating-out",
      guideRef: "entering-seating",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Restaurant entrance sign showing opening hours and seating rules">' +
        '<rect x="20" y="16" width="600" height="188" rx="16" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>' +
        '<rect x="20" y="16" width="600" height="52" rx="16" fill="#c81e1e"/>' +
        '<text x="320" y="50" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="bold" fill="#ffffff">老北京饺子馆 · 欢迎光临</text>' +
        '<text x="320" y="102" text-anchor="middle" font-family="sans-serif" font-size="19" font-weight="bold" fill="#1e293b">营业时间：上午 11:30 — 晚上 9:30（星期一休息）</text>' +
        '<text x="320" y="140" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#1e293b">进门请先告诉服务员您有几位 · 本店不收现金，请刷卡或用手机付钱</text>' +
        '<text x="320" y="178" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#0d9488">外带（打包）八折优惠！</text>' +
        "</svg>",
      question:
        "Study the entrance sign outside **老北京饺子馆** (*Old Beijing Dumpling Restaurant*) above. Which statement is **correct** according to the sign?",
      options: [
        "The restaurant is closed on Mondays and does not accept cash.",
        "The restaurant opens at 9:30 in the morning every day.",
        "Customers can only pay with cash at the counter.",
        "Takeaway orders cost more than eating in the restaurant.",
      ],
      answerIndex: 0,
      hints: [
        "Check the bracketed note after the opening hours: **（星期一休息）** (*xīngqīyī xiūxi*).",
        "Look at the payment rule: **本店不收现金，请刷卡或用手机付钱** (*běn diàn bù shōu xiànjīn* = this shop does not accept cash).",
      ],
      explanation:
        "**星期一休息** means closed (resting) on Mondays, and **本店不收现金，请刷卡或用手机付钱** means the restaurant does not take cash — customers should pay by card (**刷卡**) or mobile phone (**用手机付钱**). Also note **上午 11:30** is opening time (9:30 pm is closing), and **打包八折优惠** means 20% off takeaway!",
    },
    {
      id: "exam-r1-q12",
      kind: "mcq",
      topicId: "sentence-patterns",
      guideRef: "bi-comparisons",
      difficulty: "core",
      question:
        "Read this customer review comparing two noodle stalls at a Singapore hawker centre (**小贩中心**):\n\n" +
        "> **李记的牛肉面没有张记的那么贵，但是味道跟张记的一样好吃！**\n\n" +
        "What is the reviewer saying about **李记** (*Lǐ Jì*) compared with **张记** (*Zhāng Jì*)?",
      options: [
        "Li Ji's beef noodles are more expensive and less tasty than Zhang Ji's.",
        "Li Ji's beef noodles are cheaper than Zhang Ji's, and taste just as good.",
        "Both stalls charge the exact same price, but Li Ji tastes much better.",
        "Neither stall sells tasty beef noodles.",
      ],
      answerIndex: 1,
      hints: [
        "Break down the negative comparison **A 没有 B 那么贵**: if A is 'not as expensive as' B, which one costs less?",
        "Then look at the second clause: **味道跟张记的一样好吃** — remember **A 跟 B 一样 + Adj**!",
      ],
      explanation:
        "**没有张记的那么贵** (*méiyǒu Zhāng Jì de nàme guì*) means 'not as expensive as Zhang Ji's' (so Li Ji is cheaper), while **跟张记的一样好吃** (*gēn Zhāng Jì de yíyàng hǎochī*) means 'just as delicious as Zhang Ji's'.",
    },
    {
      id: "exam-r1-q13",
      kind: "short",
      topicId: "time-measure-words",
      guideRef: "clothing-animal-classifiers",
      difficulty: "core",
      question:
        "Read Linlin's packing checklist for her school trip:\n\n" +
        "> **行李箱里有：三件T恤衫、两条牛仔裤、一双运动鞋和一顶帽子。**\n\n" +
        "How many **individual items** (counting a pair of trainers as **1** item on her list, i.e. adding the numbers of T-shirts, jeans, pairs of trainers, and hats) has she packed? Enter a single number.",
      answer: {
        type: "number",
        value: 7,
      },
      traps: [
        {
          spec: { type: "number", value: 6 },
          feedback: "Check the end of the sentence — did you forget **一顶帽子** (1 hat) or **一双运动鞋** (1 pair of trainers)?",
        },
        {
          spec: { type: "number", value: 8 },
          feedback: "Count each item group on her list: 三 (3) + 两 (2) + 一 (1) + 一 (1) = 7.",
        },
      ],
      hints: [
        "Pick out the four Mandarin number + classifier phrases: **三件**, **两条**, **一双**, and **一顶**.",
        "Add **三** (3) + **两** (2) + **一** (1) + **一** (1).",
      ],
      solution: [
        "**三件T恤衫** = 3 T-shirts.",
        "**两条牛仔裤** = 2 pairs of jeans (**条** is the classifier for long clothing like trousers).",
        "**一双运动鞋** = 1 pair of trainers, and **一顶帽子** = 1 hat.",
        "Total items listed: 3 + 2 + 1 + 1 = **7**.",
      ],
    },
    {
      id: "exam-r1-q14",
      kind: "mcq",
      topicId: "weather",
      guideRef: "reading-weather-reports",
      difficulty: "core",
      diagram:
        '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-city weather forecast card for Singapore, Beijing, London and Sydney">' +
        '<rect x="16" y="16" width="608" height="208" rx="14" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>' +
        '<text x="320" y="48" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#1e293b">明日世界城市天气预报 (Tomorrow\'s Forecast)</text>' +
        '<rect x="32" y="68" width="136" height="136" rx="10" fill="#fee2e2" stroke="#c81e1e"/>' +
        '<text x="100" y="96" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#c81e1e">新加坡</text>' +
        '<text x="100" y="128" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1e293b">雷阵雨 · 潮湿</text>' +
        '<text x="100" y="162" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">26°C – 32°C</text>' +
        '<rect x="180" y="68" width="136" height="136" rx="10" fill="#e0f2fe" stroke="#0d9488"/>' +
        '<text x="248" y="96" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0d9488">北京</text>' +
        '<text x="248" y="128" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1e293b">晴天 · 刮大风</text>' +
        '<text x="248" y="162" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">零下4°C – 3°C</text>' +
        '<rect x="328" y="68" width="136" height="136" rx="10" fill="#f1f5f9" stroke="#64748b"/>' +
        '<text x="396" y="96" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">伦敦</text>' +
        '<text x="396" y="128" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1e293b">阴天 · 有雾</text>' +
        '<text x="396" y="162" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">5°C – 9°C</text>' +
        '<rect x="476" y="68" width="136" height="136" rx="10" fill="#fef3c7" stroke="#b45309"/>' +
        '<text x="544" y="96" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#b45309">悉尼</text>' +
        '<text x="544" y="128" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1e293b">多云 · 暖和</text>' +
        '<text x="544" y="162" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1e293b">19°C – 24°C</text>' +
        "</svg>",
      question:
        "Look at the four-city weather forecast card above. Which city will be **sunny, very windy, and drop below freezing** tomorrow?",
      options: [
        "Singapore (新加坡)",
        "London (伦敦)",
        "Beijing (北京)",
        "Sydney (悉尼)",
      ],
      answerIndex: 2,
      hints: [
        "Look for **晴天** (*qíngtiān*, sunny) and **刮大风** (*guā dà fēng*, strong wind).",
        "Remember how Mandarin expresses sub-zero temperatures: **零下** (*língxià*, below zero).",
      ],
      explanation:
        "**北京** (*Běijīng*) shows **晴天 · 刮大风** (sunny and very windy) with temperatures of **零下4°C – 3°C** (-4°C to 3°C). London (**伦敦**) is overcast and foggy (**阴天 · 有雾**), Singapore (**新加坡**) has thundershowers and humidity (**雷阵雨 · 潮湿**), and Sydney (**悉尼**) is cloudy and warm (**多云 · 暖和**).",
    },
    {
      id: "exam-r1-q15",
      kind: "mcq",
      topicId: "seasons",
      guideRef: "clothing-chuan-dai",
      difficulty: "core",
      question:
        "Before flying from Singapore to Beijing in December, Mum sends Jiawei this reminder:\n\n" +
        "> **家伟，别忘了带一件厚大衣，还要戴围巾和手套！**\n\n" +
        "Which three items is Mum reminding Jiawei to pack/wear?",
      options: [
        "A jumper, jeans, and sunglasses",
        "A raincoat, boots, and a cap",
        "A shirt, shorts, and trainers",
        "A thick coat, a scarf, and gloves",
      ],
      answerIndex: 3,
      hints: [
        "**厚** (*hòu*) means thick, and **大衣** (*dàyī*) is an overcoat.",
        "Notice the accessory verb **戴** (*dài*) before **围巾** (*wéijīn*) and **手套** (*shǒutào*, literally 'hand-sheaths').",
      ],
      explanation:
        "**一件厚大衣** (*yí jiàn hòu dàyī*) is a thick overcoat, **围巾** (*wéijīn*) is a scarf, and **手套** (*shǒutào*) means gloves. Notice how Mandarin uses **带** (*dài*, bring) for carrying the coat in luggage, and **戴** (*dài*, wear accessories) for the scarf and gloves.",
    },
    {
      id: "exam-r1-q16",
      kind: "short",
      topicId: "illness",
      guideRef: "at-the-clinic",
      difficulty: "core",
      question:
        "Read the dosage label printed on a packet of clinic tablets:\n\n" +
        "> **感冒药：饭后吃。一天三次，一次两片。**\n\n" +
        "How many tablets (**片**, *piàn*) should the patient take in **one full day** altogether? Enter a number.",
      answer: {
        type: "number",
        value: 6,
      },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "2 tablets (**两片**) is the dose for **one time** (**一次**), not the whole day!",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "3 (**三次**) is how many **times** per day, not the total number of tablets.",
        },
        {
          spec: { type: "number", value: 5 },
          feedback: "Multiply rather than add: 3 times a day × 2 tablets each time!",
        },
      ],
      hints: [
        "**一天三次** (*yì tiān sān cì*) tells you how many times per day.",
        "**一次两片** (*yí cì liǎng piàn*) tells you how many tablets each time — multiply the two numbers!",
      ],
      solution: [
        "**一天三次** = 3 times a day.",
        "**一次两片** = 2 tablets per dose (taken **饭后**, after meals).",
        "Total tablets in one day: 3 × 2 = **6** tablets.",
      ],
    },
    {
      id: "exam-r1-q17",
      kind: "short",
      topicId: "vegetables-fruits",
      guideRef: "money-weights",
      difficulty: "core",
      question:
        "At a neighbourhood market stall, you see these two price tags:\n\n" +
        "- **草莓：十二块一斤**\n" +
        "- **西红柿：四块五一斤**\n\n" +
        "Dad buys **一斤草莓** (1 *jīn* of strawberries) and **两斤西红柿** (2 *jīn* of tomatoes). How much does he pay in total (in **块 / 元**)? Enter a number.",
      answer: {
        type: "number",
        value: 21,
      },
      traps: [
        {
          spec: { type: "number", value: 16.5 },
          feedback: "16.5 would be 1 jīn of strawberries + only 1 jīn of tomatoes — check how many jīn of tomatoes Dad buys (**两斤西红柿**)!",
        },
        {
          spec: { type: "number", value: 20 },
          feedback: "Watch **四块五** (*sì kuài wǔ*): that means 4.50 yuan (4 yuan 5 mao), not 4 yuan!",
        },
      ],
      hints: [
        "**十二块** = 12 yuan, and **四块五** = 4.5 yuan (since **五** after **块** means **五毛**, 0.5 yuan).",
        "Calculate 1 × 12 for the strawberries plus 2 × 4.5 for the tomatoes.",
      ],
      solution: [
        "Strawberries (**草莓**): 1 *jīn* × 12 = 12 yuan.",
        "Tomatoes (**西红柿**): **四块五** = 4.5 yuan per *jīn*, so 2 *jīn* × 4.5 = 9 yuan.",
        "Total cost: 12 + 9 = **21** yuan (**二十一块**).",
      ],
    },
    {
      id: "exam-r1-q18",
      kind: "mcq",
      topicId: "three-meals",
      guideRef: "drinks-containers",
      difficulty: "core",
      question:
        "A waiter reads back a family's drink order at a Tanglin café:\n\n" +
        "> **好的，您点了一壶绿茶、两杯冰奶茶和一瓶矿泉水。**\n\n" +
        "What did the family order?",
      options: [
        "One pot of green tea, two glasses of iced milk tea, and one bottle of mineral water",
        "One cup of black coffee, two bowls of soup, and one carton of milk",
        "Two pots of green tea, one glass of hot milk tea, and two bottles of cola",
        "One glass of apple juice, two cups of green tea, and one bottle of hot water",
      ],
      answerIndex: 0,
      hints: [
        "Check the container classifiers: **壶** (*hú*, pot/teapot), **杯** (*bēi*, cup/glass), and **瓶** (*píng*, bottle).",
        "**绿茶** (*lǜchá*) is green tea, **冰奶茶** (*bīng nǎichá*) is iced milk tea, and **矿泉水** (*kuàngquánshuǐ*) is mineral water.",
      ],
      explanation:
        "**一壶绿茶** is one pot of green tea, **两杯冰奶茶** is two cups/glasses of iced milk tea (**冰** = ice/iced), and **一瓶矿泉水** is one bottle of mineral water.",
    },
    {
      id: "exam-r1-q19",
      kind: "mcq",
      topicId: "eating-out",
      guideRef: "five-flavours",
      difficulty: "core",
      question:
        "When ordering online delivery, Auntie Mei types this special note to the kitchen:\n\n" +
        "> **备注：孩子不能吃辣，请不要放辣椒，也少放一点儿盐，谢谢！**\n\n" +
        "What two requests is Auntie Mei making?",
      options: [
        "Add extra chilli and plenty of sweet sauce",
        "No chilli peppers, and use a little less salt",
        "No coriander, and no sugar in the dish",
        "Make the soup sour and very salty",
      ],
      answerIndex: 1,
      hints: [
        "**不能吃辣** (*bù néng chī là*) explains why: the child cannot eat spicy food.",
        "Look at **不要放辣椒** (*bú yào fàng làjiāo*) and **少放一点儿盐** (*shǎo fàng yìdiǎnr yán*).",
      ],
      explanation:
        "**不要放辣椒** means 'please do not put chilli peppers in', and **少放一点儿盐** means 'put a little less salt (**盐**) in'. Coriander would be **香菜** (*xiāngcài*) and sugar would be **糖** (*táng*).",
    },
    {
      id: "exam-r1-q20",
      kind: "mcq",
      topicId: "tenses-particles",
      guideRef: "past-experience-guo",
      difficulty: "core",
      question:
        "Read this exchange in a class survey about China trips:\n\n" +
        "> **安娜：你去过上海吗？**\n" +
        "> **志明：我没去过上海，不过我去年去过北京，还吃过北京烤鸭！**\n\n" +
        "Which statement about **志明** (*Zhìmíng*) is **true**?",
      options: [
        "He went to Shanghai last year and ate roast duck there.",
        "He has visited both Shanghai and Beijing before.",
        "He has never been to Shanghai, but he visited Beijing last year and has tried Peking roast duck.",
        "He is planning to visit Beijing for the first time next year.",
      ],
      answerIndex: 2,
      hints: [
        "Watch the experiential particle **过** (*guo*) and its negative form **没 + Verb + 过**.",
        "**我没去过上海** tells you about Shanghai, while **去年去过北京，还吃过北京烤鸭** tells you about Beijing.",
      ],
      explanation:
        "**没去过上海** means 'have never been to Shanghai', whereas **去年去过北京，还吃过北京烤鸭** means he went to Beijing last year and has eaten Peking roast duck (**烤鸭**). Notice how **过** stays in the negative **没去过**!",
    },
    {
      id: "exam-r1-q21",
      kind: "short",
      topicId: "greetings-routine",
      guideRef: "introducing-yourself",
      difficulty: "core",
      question:
        "Read this pen-pal profile on the Tanglin–Suzhou exchange board:\n\n" +
        "> **大家好！我叫陈文浩，今年十三岁。我家有五口人：爸爸、妈妈、一个姐姐、一个弟弟和我。我家还养了一只可爱的小狗。**\n\n" +
        "How many **siblings** (brothers and sisters combined, **not** counting Wenhao himself) does **陈文浩** have? Enter a number.",
      answer: {
        type: "number",
        value: 2,
      },
      traps: [
        {
          spec: { type: "number", value: 5 },
          feedback: "5 (**五口人**) is the total number of people in his family — read carefully for how many **siblings** he has!",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "Don't count Wenhao himself (**我**) or the pet dog (**小狗**) as a sibling!",
        },
      ],
      hints: [
        "List the five family members after the colon: **爸爸、妈妈、一个姐姐、一个弟弟和我**.",
        "Count only his older sister (**姐姐**) and younger brother (**弟弟**).",
      ],
      solution: [
        "His family of five (**五口人**) consists of Dad (**爸爸**), Mum (**妈妈**), one older sister (**一个姐姐**), one younger brother (**一个弟弟**), and himself (**我**).",
        "Therefore he has 1 older sister + 1 younger brother = **2** siblings.",
      ],
    },
    {
      id: "exam-r1-q22",
      kind: "mcq",
      topicId: "hobbies",
      guideRef: "cca-hobby-profile",
      difficulty: "core",
      question:
        "Look at Ben's Term 2 CCA (**课外活动**) timetable at school:\n\n" +
        "| 星期 | 时间 | 课外活动 | 地点 |\n" +
        "|---|---|---|---|\n" +
        "| **星期二** | 下午 3:30–5:00 | **羽毛球社** | 体育馆 |\n" +
        "| **星期四** | 下午 3:30–4:45 | **中文戏剧社** | 礼堂 |\n" +
        "| **星期六** | 上午 9:00–10:30 | **游泳队** | 学校游泳池 |\n\n" +
        "Where is Ben at **4:00 pm on Tuesday**?",
      options: [
        "In the school hall for Chinese Drama Club",
        "At the school swimming pool for swim team training",
        "In the library reading Chinese novels",
        "In the sports hall playing in the Badminton Club",
      ],
      answerIndex: 3,
      hints: [
        "Find the row for **星期二** (*xīngqī'èr*, Tuesday) and check the time **下午 3:30–5:00**.",
        "Read both the club (**羽毛球社**) and the venue (**体育馆**, sports hall / gymnasium).",
      ],
      explanation:
        "**星期二** is Tuesday; between 3:30 pm and 5:00 pm Ben is at **羽毛球社** (*yǔmáoqiú shè*, Badminton Club) in the **体育馆** (*tǐyùguǎn*, sports hall). **礼堂** (school hall) is on Thursday (**星期四**), and **游泳池** (swimming pool) is on Saturday morning (**星期六上午**).",
    },

    // =========================================================================
    // SECTION C: CHALLENGE MULTI-DETAIL COMPREHENSION & INFERENCE (Q23–Q30)
    // =========================================================================
    {
      id: "exam-r1-q23",
      kind: "mcq",
      topicId: "leisure-plans",
      guideRef: "together-invitations",
      difficulty: "challenge",
      question:
        "Read this group-chat conversation between three classmates in Singapore:\n\n" +
        "- **小丽：** 这个星期六下午我们一起去圣淘沙海边打排球，怎么样？\n" +
        "- **大卫：** 不好意思，星期六下午我得上钢琴课。星期天下午我有空！\n" +
        "- **小丽：** 好啊！明华，你星期天下午能去吗？\n" +
        "- **明华：** 太好了！那我们星期天下午两点在地铁站见面吧。\n\n" +
        "What do the friends finally agree to do?",
      options: [
        "Meet at the MRT station at 2:00 pm on Sunday to go to Sentosa beach",
        "Meet at Sentosa beach at 2:00 pm on Saturday to play volleyball",
        "Go to David's house on Saturday afternoon to listen to him play the piano",
        "Cancel the trip completely because Minghua is busy all weekend",
      ],
      answerIndex: 0,
      hints: [
        "Track how the day changes! Xiaoli first suggests **星期六下午** (Saturday afternoon), but why does David say **不好意思**?",
        "Check David's counter-suggestion (**星期天下午**) and Minghua's final line (**星期天下午两点在地铁站见面**).",
      ],
      explanation:
        "Xiaoli initially proposes Saturday afternoon (**星期六下午**), but David politely declines (**不好意思，星期六下午我得上钢琴课** — he must attend his piano lesson) and suggests Sunday afternoon (**星期天下午**). Both Xiaoli and Minghua agree, arranging to meet at **2:00 pm on Sunday at the MRT station** (**星期天下午两点在地铁站见面**).",
    },
    {
      id: "exam-r1-q24",
      kind: "mcq",
      topicId: "sentence-patterns",
      guideRef: "cause-contrast",
      difficulty: "challenge",
      question:
        "Read Siyi's reflection in her school newsletter:\n\n" +
        "> **虽然学写汉字有一点儿难，但是因为我们的中文老师很有意思，所以我现在越来越喜欢上中文课了。**\n\n" +
        "Which summary accurately captures **both** the contrast and the reason in Siyi's sentence?",
      options: [
        "Writing Chinese characters is easy, so she has always loved Mandarin lessons.",
        "Although learning to write Hanzi is a bit hard, she likes Mandarin lessons more and more because her teacher is really interesting.",
        "Because her Mandarin teacher gives hard tests, she dislikes writing Chinese characters.",
        "Although her teacher is strict, she studies Mandarin because her parents make her.",
      ],
      answerIndex: 1,
      hints: [
        "Split the sentence into its two connector pairs: **虽然…，但是…** (although… however…) and **因为…，所以…** (because… therefore…).",
        "Also spot **越来越喜欢** (*yuèláiyuè xǐhuan*, like more and more).",
      ],
      explanation:
        "**虽然学写汉字有一点儿难** means 'Although learning to write Chinese characters is a little difficult', followed by **但是因为我们的中文老师很有意思，所以我现在越来越喜欢上中文课了** ('however, because our Mandarin teacher is very interesting, I now enjoy attending Mandarin class more and more').",
    },
    {
      id: "exam-r1-q25",
      kind: "mcq",
      topicId: "weather",
      guideRef: "weather-activities",
      difficulty: "challenge",
      question:
        "Read this announcement from the PE department about Sports Day:\n\n" +
        "> **通知：如果明天早上不下雨，运动会就在学校操场举行；要是下大雨，我们就改到星期五。虽然天气预报说明天是多云，比今天凉快，但是请大家还是带一把雨伞和一瓶水。**\n\n" +
        "According to the notice, which statement is **true**?",
      options: [
        "Sports Day has already been moved to Friday because heavy rain is guaranteed.",
        "Tomorrow's forecast says it will be hotter and sunnier than today.",
        "If it does not rain tomorrow morning, Sports Day will go ahead on the school sports field, and students should still bring an umbrella and water.",
        "If it rains heavily tomorrow, Sports Day will take place indoors in the sports hall.",
      ],
      answerIndex: 2,
      hints: [
        "Read the two conditional clauses carefully: **如果明天早上不下雨…** (if it does not rain tomorrow morning…) vs **要是下大雨…** (if it rains heavily…).",
        "Then check what the forecast actually predicts (**明天是多云，比今天凉快**) and what everyone must still bring (**还是带一把雨伞和一瓶水**).",
      ],
      explanation:
        "The notice states: if it doesn't rain tomorrow morning (**如果明天早上不下雨**), Sports Day will be held on the school field (**操场**); only if there is heavy rain (**要是下大雨**) will it move to Friday. Even though the forecast predicts cloudy and cooler weather (**多云，比今天凉快**), students should still bring an umbrella and a bottle of water.",
    },
    {
      id: "exam-r1-q26",
      kind: "mcq",
      topicId: "seasons",
      guideRef: "singapore-vs-beijing",
      difficulty: "challenge",
      question:
        "Read this excerpt from an email written by a Beijing exchange student staying in Singapore:\n\n" +
        "> **新加坡跟我的老家北京很不一样。这里一年四季都很热，没有冬天，也不会下雪。不过，商场和地铁里的冷气非常冷，所以我每天书包里都放一件薄外套！**\n\n" +
        "Why does the student carry a thin jacket (**一件薄外套**) in his schoolbag every day in Singapore?",
      options: [
        "Because Singapore's winter evenings drop below 10°C.",
        "Because it snows lightly in Singapore during December.",
        "Because his school uniform requires a thick blazer outdoors.",
        "Because the air-conditioning inside shopping malls and the MRT is very cold.",
      ],
      answerIndex: 3,
      hints: [
        "Don't stop reading after **一年四季都很热**! Look at the contrast word **不过** (*búguò*, however).",
        "**商场** (*shāngchǎng*) = shopping malls, **地铁** (*dìtiě*) = MRT/underground, and **冷气** (*lěngqì*) = air-conditioning.",
      ],
      explanation:
        "Although Singapore is hot all year round outdoors (**一年四季都很热**), the sentence after **不过** explains: **商场和地铁里的冷气非常冷，所以我每天书包里都放一件薄外套** — the air-conditioning (**冷气**) inside shopping malls and the MRT is freezing, so he keeps a light jacket in his bag every day!",
    },
    {
      id: "exam-r1-q27",
      kind: "short",
      topicId: "vegetables-fruits",
      guideRef: "market-dialogue",
      difficulty: "challenge",
      question:
        "Read this promotion banner at a fruit shop in Clementi:\n\n" +
        "> **周末大减价！**\n" +
        "> - **苹果：一袋十块钱，买两袋送一袋（不单卖）**\n" +
        "> - **西瓜：一个八块钱**\n\n" +
        "Mrs Tan needs **3 bags of apples** (**三袋苹果**) and **1 watermelon** (**一个西瓜**). Using the weekend promotion, what is the **minimum amount** (in **块 / dollars**) she needs to pay? Enter a number.",
      answer: {
        type: "number",
        value: 28,
      },
      traps: [
        {
          spec: { type: "number", value: 38 },
          feedback: "38 ignores the special offer! Read **买两袋送一袋** carefully: what does **送一袋** mean when you buy two bags?",
        },
        {
          spec: { type: "number", value: 20 },
          feedback: "20 covers the apples, great! Don't forget to add the **一个西瓜** (1 watermelon)!",
        },
      ],
      hints: [
        "Decode the shop offer **买两袋送一袋** (*mǎi liǎng dài sòng yí dài*): **买** = buy, **送** = give free!",
        "If you pay for 2 bags of apples at 10 dollars each and get 1 bag free, you already have 3 bags — then add 1 watermelon (**八块钱**).",
      ],
      solution: [
        "**买两袋送一袋** means 'Buy 2 bags, get 1 bag free'.",
        "To get **三袋苹果** (3 bags of apples), Mrs Tan only pays for 2 bags: 2 × 10 = 20 dollars.",
        "Plus **一个西瓜** (1 watermelon) = 8 dollars.",
        "Minimum total: 20 + 8 = **28** dollars (**二十八块钱**).",
      ],
    },
    {
      id: "exam-r1-q28",
      kind: "mcq",
      topicId: "three-meals",
      guideRef: "healthy-balanced-diet",
      difficulty: "challenge",
      question:
        "Read this school health nurse's column in the student magazine:\n\n" +
        "> **很多中学生早上起得太晚，不吃早饭就去上学，中午又只吃汉堡包、炸鸡和喝可乐。这样对身体很不好！大家每天早上应该吃鸡蛋、面包或者喝一碗热粥，中午和晚上要多吃青菜、豆腐和鱼，少喝甜的饮料。**\n\n" +
        "Which habit does the school nurse **criticise** as unhealthy for secondary students?",
      options: [
        "Skipping breakfast after waking up late, then only having burgers, fried chicken, and cola for lunch",
        "Eating eggs, bread, or hot rice porridge in the morning before school",
        "Eating plenty of green vegetables, tofu, and fish at lunch and dinner",
        "Drinking plain water instead of sugary soft drinks",
      ],
      answerIndex: 0,
      hints: [
        "Look for the sentence right before **这样对身体很不好！** ('Doing this is very bad for your health!').",
        "Contrast what many students currently do (**不吃早饭就去上学，中午又只吃…**) with what they **应该** (should) do.",
      ],
      explanation:
        "The nurse points out that many secondary school students (**中学生**) wake up too late, go to school without eating breakfast (**不吃早饭就去上学**), and at lunchtime only eat burgers, fried chicken, and drink cola (**只吃汉堡包、炸鸡和喝可乐**), warning **这样对身体很不好！** All the other options describe the healthy advice she recommends.",
    },
    {
      id: "exam-r1-q29",
      kind: "short",
      topicId: "eating-out",
      guideRef: "paying-the-bill",
      difficulty: "challenge",
      question:
        "Read this receipt summary from a family dinner at a Chinese restaurant:\n\n" +
        "- **烤鸭（半只）：** 28 元\n" +
        "- **西红柿炒鸡蛋：** 16 元\n" +
        "- **清炒青菜：** 12 元\n" +
        "- **米饭（四碗）：** 一碗 2 元\n" +
        "- **优惠：** 满 60 元减 10 元 *(Spend 60 yuan or more, get 10 yuan off)*\n\n" +
        "How much does the family actually pay after checking whether they qualify for the discount? Enter a number (in **元**).",
      answer: {
        type: "number",
        value: 54,
      },
      traps: [
        {
          spec: { type: "number", value: 64 },
          feedback: "64 元 is the subtotal before the discount — since 64 ≥ 60, apply **满 60 元减 10 元**!",
        },
        {
          spec: { type: "number", value: 58 },
          feedback: "Careful with **米饭（四碗）：一碗 2 元** — there are 4 bowls at 2 yuan each (8 yuan total), which pushes the subtotal over 60 yuan!",
        },
      ],
      hints: [
        "First calculate the cost of **四碗米饭** when **一碗 2 元** (4 × 2 = 8 元), then add all the dishes to find the subtotal.",
        "Check whether the subtotal reaches **60 元**; if it does, subtract **10 元** (**满 60 元减 10 元**).",
      ],
      solution: [
        "Dishes: 28 (half roast duck) + 16 (stir-fried tomato and egg) + 12 (stir-fried greens) = 56 元.",
        "Rice (**四碗米饭，一碗 2 元**): 4 × 2 = 8 元.",
        "Subtotal: 56 + 8 = 64 元. Since 64 ≥ 60, the **满 60 元减 10 元** promotion applies: 64 − 10 = **54** 元.",
      ],
    },
    {
      id: "exam-r1-q30",
      kind: "short",
      topicId: "tenses-particles",
      guideRef: "completed-action-le",
      difficulty: "challenge",
      question:
        "Read this diary entry very carefully — watch out for **completed** vs **cancelled** actions!\n\n" +
        "> **今天早上我本来想跟哥哥去东海岸公园骑自行车，可是突然下大雨了，我们就没去。上午我在家做了两个小时作业，下午雨停了，妈妈带我去电影院看了一场电影。**\n\n" +
        "Where did the writer **actually go** in the afternoon once the rain stopped? Answer in **Simplified Hanzi** (or toned Pinyin), naming the place.",
      answer: {
        type: "text",
        accept: [
          "电影院",
          "去电影院",
          "去了电影院",
          "diànyǐngyuàn",
          "qù diànyǐngyuàn",
          "qù le diànyǐngyuàn",
          "cinema",
          "the cinema",
        ],
        display: "电影院 (diànyǐngyuàn — the cinema)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["东海岸公园", "公园", "East Coast Park"] },
          feedback: "Look closely at **可是突然下大雨了，我们就没去** — they originally wanted to go to East Coast Park, but because it rained heavily they **didn't go** (**没去**)!",
        },
        {
          spec: { type: "text", accept: ["家", "在家", "home"] },
          feedback: "The writer stayed at home in the **morning** (**上午**), but look at the last clause starting with **下午雨停了**!",
        },
      ],
      hints: [
        "Don't fall for the first place mentioned (**东海岸公园**): **本来想…，可是…我们就没去** means they originally wanted to go there, but didn't go!",
        "Look at the final clause after **下午雨停了** ('in the afternoon the rain stopped'): **妈妈带我去____看了一场电影**.",
      ],
      solution: [
        "In the morning, heavy rain started (**下大雨了**), so they did **not** go to East Coast Park (**没去**).",
        "In the afternoon, after the rain stopped (**下午雨停了**), Mum took the writer to the **cinema** (**电影院**, *diànyǐngyuàn*) to watch a film.",
      ],
    },
  ],
};
