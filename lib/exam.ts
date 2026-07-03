import type { ComprehensiveExam } from "./types";

// The cross-topic "Big Exam" — four mock papers that sweep all twelve topics:
// greetings, family, school, hobbies, food, shopping, daily routine/time,
// weather, travel, home, health and festivals. Question ids are globally
// unique and all start with "exam-".
export const COMPREHENSIVE_EXAM: ComprehensiveExam = {
  mcqPapers: [
    {
      id: "exam-mcq-1",
      title: "Mock Exam Paper 1 — Reading & language",
      description:
        "Fifteen quick-fire reading and language questions sweeping all twelve topics — a warm-up lap for the real exam.",
      questions: [
        {
          id: "exam-mcq-1-q01",
          question:
            "You meet your head teacher in the corridor. Which greeting is the most polite?",
          options: [
            "{{再见|zàijiàn}}",
            "{{你好|nǐ hǎo}}",
            "{{您好|nín hǎo}}",
            "{{你呢？|nǐ ne?}}",
          ],
          answerIndex: 2,
          explanation:
            "Chinese shows politeness by word choice: swapping {{你|nǐ|you}} for the polite {{您|nín}} upgrades the whole greeting. 你好 is fine for friends, 再见 says goodbye, and 你呢？ only bounces a question back.",
          guideRef: "Saying hello (and why there are no 'a.m./p.m.' rules)",
          difficulty: "warmup",
        },
        {
          id: "exam-mcq-1-q02",
          question: "Which verb do you need before {{茶|chá|tea}}?",
          options: ["{{看|kàn}}", "{{吃|chī}}", "{{买|mǎi}}", "{{喝|hē}}"],
          answerIndex: 3,
          explanation:
            "Chinese has no all-purpose 'have': you must choose {{吃|chī|eat}} for things you chew and {{喝|hē|drink}} for liquids. Tea is a liquid, so it takes 喝 — {{我喝茶|wǒ hē chá|I drink tea}}.",
          guideRef: "Three meals and the eat/drink split",
          difficulty: "warmup",
        },
        {
          id: "exam-mcq-1-q03",
          question: "What is the weather doing if {{今天下雨。|Jīntiān xià yǔ.}}?",
          options: ["It is snowing", "It is windy", "It is raining", "It is sunny"],
          answerIndex: 2,
          explanation:
            "In Chinese, rain FALLS: {{下|xià|to fall}} + {{雨|yǔ|rain}} = it's raining. Swap the noun and the same machine gives {{下雪|xià xuě|it's snowing}} — which is why reading the second character matters.",
          guideRef: "Rain falls, wind scrapes: the weather verbs",
          difficulty: "warmup",
        },
        {
          id: "exam-mcq-1-q04",
          question: "Which sentence correctly says 'My older sister is very tall'?",
          options: [
            "{{我姐姐是很高。|Wǒ jiějie shì hěn gāo.}}",
            "{{我姐姐很高。|Wǒ jiějie hěn gāo.}}",
            "{{我姐姐高很。|Wǒ jiějie gāo hěn.}}",
            "{{很高我姐姐。|Hěn gāo wǒ jiějie.}}",
          ],
          answerIndex: 1,
          explanation:
            "高 is an adjective, and adjectives connect to the subject with the {{很|hěn}} bridge — never with {{是|shì}}. 是 is an equals sign reserved for noun = noun (我是学生). Note the dropped 的: close family lets you say 我姐姐 instead of 我的姐姐.",
          guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
          difficulty: "core",
          hints: [
            "Is 高 a noun or an adjective? That decides whether 是 is allowed.",
            "Think of 我很好 — the same bridge works here.",
            "很 goes before the adjective, never after it.",
          ],
        },
        {
          id: "exam-mcq-1-q05",
          question: "Which verb completes 'play football' in Chinese?",
          options: ["{{看|kàn}}", "{{玩|wán}}", "{{踢|tī}}", "{{打|dǎ}}"],
          answerIndex: 2,
          explanation:
            "Chinese picks the sport verb by body part: hand-and-ball games take {{打|dǎ|to hit}} (打篮球), kicking games take {{踢|tī|to kick}} — so football is {{踢足球|tī zúqiú}}. 玩 is for toys and games generally, and 看足球 would just mean watching it.",
          guideRef: "Why 'play' is five different verbs",
          difficulty: "core",
          hints: [
            "Which part of your body touches the ball in football?",
            "Hands → 打, feet → 踢.",
          ],
        },
        {
          id: "exam-mcq-1-q06",
          question: "A price tag reads {{三十五块|sānshíwǔ kuài}}. How much is it?",
          options: ["3.50 yuan", "53 yuan", "350 yuan", "35 yuan"],
          answerIndex: 3,
          explanation:
            "Read it in blocks: {{三十|sānshí|thirty}} + {{五|wǔ|five}} = 35, and {{块|kuài}} is the spoken measure for whole yuan. 53 would be 五十三 — the order of the digits around 十 decides everything.",
          guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
          difficulty: "core",
          hints: [
            "Break it at 十: how many tens, then how many ones?",
            "三十 = three tens. What follows 三十?",
          ],
        },
        {
          id: "exam-mcq-1-q07",
          question: "What time is {{差一刻八点|chà yí kè bā diǎn}}?",
          options: ["8:15", "7:45", "8:45", "7:15"],
          answerIndex: 1,
          explanation:
            "{{差|chà|lacking}} counts BACKWARDS from the hour it names: lacking one quarter to eight o'clock = 7:45. The clock has not reached eight yet — English says exactly the same thing with 'a quarter to eight'.",
          guideRef: "Morning or afternoon? Day-parts and counting backwards with 差",
          difficulty: "core",
          hints: [
            "差 = lacking — the clock has NOT reached eight yet.",
            "一刻 is one quarter of an hour.",
            "Compare English 'a quarter to eight'.",
          ],
        },
        {
          id: "exam-mcq-1-q08",
          question: "Which sentence correctly says 'I go to school by bus'?",
          options: [
            "{{我坐公共汽车去学校。|Wǒ zuò gōnggòng qìchē qù xuéxiào.}}",
            "{{我去学校坐公共汽车。|Wǒ qù xuéxiào zuò gōnggòng qìchē.}}",
            "{{坐公共汽车我去学校。|Zuò gōnggòng qìchē wǒ qù xuéxiào.}}",
            "{{我去坐学校公共汽车。|Wǒ qù zuò xuéxiào gōnggòng qìchē.}}",
          ],
          answerIndex: 0,
          explanation:
            "The transport sandwich puts HOW you travel before WHERE you go: subject + 坐公共汽车 + 去学校. Chinese states the means before the goal, so 我去学校坐公共汽车 (English order) is the classic error.",
          guideRef: "怎么去？ Building the transport sandwich",
          difficulty: "core",
          hints: [
            "Means of travel first, destination second.",
            "Shape: subject + 坐/骑 + vehicle + 去 + place.",
          ],
        },
        {
          id: "exam-mcq-1-q09",
          question: "How do you say 'The book is ON the table'?",
          options: [
            "{{书在上桌子。|Shū zài shàng zhuōzi.}}",
            "{{上桌子在书。|Shàng zhuōzi zài shū.}}",
            "{{书上在桌子。|Shū shàng zài zhuōzi.}}",
            "{{书在桌子上。|Shū zài zhuōzi shàng.}}",
          ],
          answerIndex: 3,
          explanation:
            "Chinese location words come AFTER the noun they describe: 桌子上 is literally 'the table's top'. English says 'on the table'; Chinese says 'table-on'. So the shape is thing + 在 + place + position word.",
          guideRef: "The location system: why 上 comes after the noun",
          difficulty: "core",
          hints: [
            "Where does 上 sit — before or after 桌子?",
            "Think of 桌子上 as 'the table's top surface'.",
          ],
        },
        {
          id: "exam-mcq-1-q10",
          question:
            "Your friend has a cold. What does the doctor mean by {{你应该多喝水，多休息。|Nǐ yīnggāi duō hē shuǐ, duō xiūxi.}}?",
          options: [
            "You should drink more water and rest more",
            "You should drink less water and sleep less",
            "You should take medicine three times a day",
            "You should avoid cold water",
          ],
          answerIndex: 0,
          explanation:
            "{{应该|yīnggāi}} = should, and the 多-trick puts {{多|duō|more}} BEFORE the verb to mean 'do more of it': 多喝水 = drink more water, 多休息 = rest more. The opposite advice would use 少 (less) in the same slot.",
          guideRef: "Giving advice: 应该, 别 and the 多/少 trick",
          difficulty: "core",
          hints: [
            "应该 = should. Now decode the two 多 phrases.",
            "多 before a verb means 'do more of it'.",
          ],
        },
        {
          id: "exam-mcq-1-q11",
          question:
            "At Chinese New Year almost every family serves a whole fish. What is the real reason?",
          options: [
            "Fish is the cheapest dish in winter",
            "{{鱼|yú|fish}} sounds exactly like {{余|yú|surplus}}, so fish wishes you a year of plenty",
            "Fish is red, the lucky New Year colour",
            "The zodiac calendar has a Year of the Fish",
          ],
          answerIndex: 1,
          explanation:
            "New Year food is chosen by sound-puns: 鱼 and 余 are both yú, so serving fish acts out the saying {{年年有余|niánnián yǒu yú|may every year have a surplus}}. The dish is a spoken wish you can eat — cost, colour and the zodiac have nothing to do with it.",
          guideRef: "Lucky food: the sound-pun on every plate",
          difficulty: "challenge",
          hints: [
            "Say 鱼 aloud, then say 余 (surplus) aloud.",
            "Lucky foods are chosen by what their names SOUND like.",
            "Which option talks about sound, not sight or price?",
          ],
          strategy: "Sound-puns power festival food",
        },
        {
          id: "exam-mcq-1-q12",
          question:
            "Read the passage, then answer. {{我叫王明，今年十三岁。我家有五口人。我最喜欢数学，因为数学很有意思。我觉得体育有点儿难。|Wǒ jiào Wáng Míng, jīnnián shísān suì. Wǒ jiā yǒu wǔ kǒu rén. Wǒ zuì xǐhuan shùxué, yīnwèi shùxué hěn yǒuyìsi. Wǒ juéde tǐyù yǒudiǎnr nán.}} Which statement about Wang Ming is TRUE?",
          options: [
            "He likes maths best because it is interesting",
            "He is twelve and loves PE",
            "There are four people in his family",
            "He finds maths a little difficult",
          ],
          answerIndex: 0,
          explanation:
            "最喜欢数学 + 因为…很有意思 = maths is his favourite because it is interesting. The traps: he is 十三岁 (13, not 12), his family has 五口人 (five, not four), and it is 体育 (PE), not maths, that he finds 有点儿难 (a bit hard).",
          difficulty: "core",
          hints: [
            "Scan for 最喜欢 — the superlative marks his favourite.",
            "因为 introduces the reason.",
            "Check each option against the numbers: 十三岁, 五口人.",
          ],
          strategy: "Verify every detail against the passage — distractors recycle its words",
        },
        {
          id: "exam-mcq-1-q13",
          question: "Three of these sentences are correct. Which one is WRONG?",
          options: [
            "{{我十三岁。|Wǒ shísān suì.}}",
            "{{我是学生。|Wǒ shì xuésheng.}}",
            "{{我是十三岁。|Wǒ shì shísān suì.}}",
            "{{我很高。|Wǒ hěn gāo.}}",
          ],
          answerIndex: 2,
          explanation:
            "Ages never take {{是|shì}}: 我十三岁 connects directly, so 我是十三岁 is the classic English-speaker error. 是 only works as an equals sign between two nouns (我是学生), and adjectives take the 很 bridge (我很高).",
          guideRef: "Age and the missing verb",
          difficulty: "challenge",
          hints: [
            "Quick test: is the word after 是 a noun?",
            "Ages and adjectives connect without 是; only noun = noun needs it.",
            "One sentence puts 是 in front of an age…",
          ],
          strategy: "Noun after? 是. Age or adjective after? No 是.",
        },
        {
          id: "exam-mcq-1-q14",
          question:
            "Read this market conversation, then answer. Shopper: {{这条裤子多少钱？|Zhè tiáo kùzi duōshao qián?}} Seller: {{一百块。|Yìbǎi kuài.}} Shopper: {{太贵了！便宜一点儿吧。|Tài guì le! Piányi yìdiǎnr ba.}} Seller: {{好吧，八十五块。|Hǎo ba, bāshíwǔ kuài.}} Shopper: {{好，我买。|Hǎo, wǒ mǎi.}} How much does the shopper pay in the end?",
          options: [
            "100 yuan — the seller refused to bargain",
            "185 yuan — the shopper bought two pairs",
            "85 yuan — the shopper bargained the price down",
            "15 yuan — the seller gave a huge discount",
          ],
          answerIndex: 2,
          explanation:
            "The bargaining script runs: opening price 一百块 (100), the shopper protests 太贵了 and asks 便宜一点儿吧 (a bit cheaper, please), and the seller concedes 八十五块 (85), which the shopper accepts with 我买. The LAST price before 我买 is the one paid.",
          guideRef: "Bargaining: 太贵了！便宜一点儿吧",
          difficulty: "challenge",
          hints: [
            "Track each price as it appears: 一百块, then…?",
            "便宜一点儿吧 is the request for a discount — did the seller agree?",
            "The price the shopper pays is the one just before 我买.",
          ],
        },
        {
          id: "exam-mcq-1-q15",
          question:
            "Read this holiday diary, then answer. {{春节的时候，我们坐飞机去北京看爷爷。北京的冬天比新加坡冷，还下雪！我们吃了鱼和饺子，爷爷给我一个红包。|Chūnjié de shíhou, wǒmen zuò fēijī qù Běijīng kàn yéye. Běijīng de dōngtiān bǐ Xīnjiāpō lěng, hái xià xuě! Wǒmen chī le yú hé jiǎozi, yéye gěi wǒ yí gè hóngbāo.}} Which statement is TRUE?",
          options: [
            "The family went to Beijing by train",
            "They ate noodles and moon cakes",
            "Grandpa gave the writer two red envelopes",
            "It snowed, and Beijing's winter was colder than Singapore's",
          ],
          answerIndex: 3,
          explanation:
            "The 比 sentence 北京的冬天比新加坡冷 puts Beijing first, so Beijing wins the 'cold' contest, and 还下雪 adds that it even snowed. The traps: they flew (坐飞机, not a train), ate 鱼和饺子 (fish and dumplings), and got 一个红包 — one envelope, not two.",
          difficulty: "challenge",
          hints: [
            "In A 比 B + adjective, who does the adjective describe more — A or B?",
            "下雪 is snow falling; 坐飞机 tells you the transport.",
            "Count the 红包: 一个 or 两个?",
          ],
          strategy: "Verify every detail against the passage — distractors recycle its words",
        },
      ],
    },
    {
      id: "exam-mcq-2",
      title: "Mock Exam Paper 2 — Reading & language",
      description:
        "A second full sweep of the course, with trickier grammar calls and longer reading passages.",
      questions: [
        {
          id: "exam-mcq-2-q01",
          question: "What does {{妹妹|mèimei}} mean?",
          options: ["younger brother", "older sister", "younger sister", "older brother"],
          answerIndex: 2,
          explanation:
            "Chinese never lets 'sister' stay vague: {{姐姐|jiějie}} is older, {{妹妹|mèimei}} is younger. The brothers split the same way — 哥哥 older, 弟弟 younger.",
          guideRef: "Meet the family: why 'brother' is two different words",
          difficulty: "warmup",
        },
        {
          id: "exam-mcq-2-q02",
          question: "Which day is {{星期五|xīngqīwǔ}}?",
          options: ["Wednesday", "Thursday", "Friday", "Sunday"],
          answerIndex: 2,
          explanation:
            "Weekdays are a number code counted from Monday: 星期一 = Monday (day 1), so 星期五 = day five = Friday. Only Sunday breaks the code — 星期日/星期天, never 星期七.",
          guideRef: "Days of the week: crack the number code",
          difficulty: "warmup",
        },
        {
          id: "exam-mcq-2-q03",
          question: "What does {{看书|kàn shū}} mean?",
          options: ["to read (books)", "to watch TV", "to buy books", "to listen to music"],
          answerIndex: 0,
          explanation:
            "Pastimes come in verb + object pairs: 看 (look at) + 书 (book) = to read. The same 看 pairs with 电视 for watching TV — the object tells you which English verb to pick.",
          guideRef: "看, 听, 唱, 跳: everyday pastimes in verb + object pairs",
          difficulty: "warmup",
        },
        {
          id: "exam-mcq-2-q04",
          question:
            "Someone asks {{你是哪国人？|Nǐ shì nǎ guó rén?}} Which reply makes sense?",
          options: [
            "{{我叫李明。|Wǒ jiào Lǐ Míng.}}",
            "{{我十三岁。|Wǒ shísān suì.}}",
            "{{我很好。|Wǒ hěn hǎo.}}",
            "{{我是英国人。|Wǒ shì Yīngguórén.}}",
          ],
          answerIndex: 3,
          explanation:
            "哪国 (which country) sits exactly where the answer will go, so the reply keeps the same shape and swaps in a country: 我是英国人 — country + {{人|rén}} = nationality. The other options answer 'what's your name', 'how old are you' and 'how are you'.",
          guideRef: "Where are you from? 是 and the country-name code",
          difficulty: "core",
          hints: [
            "哪国 asks 'which country' — the answer must contain one.",
            "Question words sit in the answer's seat: replace 哪国 with a country.",
          ],
        },
        {
          id: "exam-mcq-2-q05",
          question:
            "A friend tastes your soup and says {{有点儿咸。|Yǒudiǎnr xián.}} What are they really telling you?",
          options: [
            "It is deliciously salty",
            "It is too sweet",
            "It is not salty enough",
            "It is a bit too salty — a gentle complaint",
          ],
          answerIndex: 3,
          explanation:
            "{{有点儿|yǒudiǎnr}} is reserved for things drifting the WRONG way — a built-in mild complaint, 'a bit too…'. For happy surprises Chinese uses 很 or 非常 instead, which is why 有点儿好吃 sounds bizarre. And 咸 is salty, not sweet (甜).",
          guideRef: "Tasty or not: the 好 + verb discovery",
          difficulty: "core",
          hints: [
            "Is 有点儿 used for compliments or complaints?",
            "咸 = salty. Now add the attitude 有点儿 carries.",
          ],
        },
        {
          id: "exam-mcq-2-q06",
          question:
            "Which sentence is in the correct order for 'I get up at seven o'clock'?",
          options: [
            "{{我起床七点。|Wǒ qǐchuáng qī diǎn.}}",
            "{{七点我的起床。|Qī diǎn wǒ de qǐchuáng.}}",
            "{{我七点起床。|Wǒ qī diǎn qǐchuáng.}}",
            "{{起床我七点。|Qǐchuáng wǒ qī diǎn.}}",
          ],
          answerIndex: 2,
          explanation:
            "The golden rule: the time goes BEFORE the verb — 我 + 七点 + 起床. English hangs 'at seven' on the end, so 我起床七点 is a direct-translation trap; and 我的起床 wrongly treats the verb like a possession.",
          guideRef: "The golden rule: time before the verb",
          difficulty: "core",
          hints: [
            "Where does the time phrase go relative to the verb?",
            "Subject + time + verb — never verb then time.",
          ],
        },
        {
          id: "exam-mcq-2-q07",
          question: "{{北京比新加坡冷。|Běijīng bǐ Xīnjiāpō lěng.}} What does this mean?",
          options: [
            "Singapore is colder than Beijing",
            "Beijing is colder than Singapore",
            "Beijing and Singapore are equally cold",
            "Beijing used to be cold",
          ],
          answerIndex: 1,
          explanation:
            "In the frame A + {{比|bǐ}} + B + adjective, A is the winner of the comparison: Beijing 比 Singapore cold = Beijing is colder. The adjective never changes form — no '-er' — because 比 does all the comparing.",
          guideRef: "Comparing cities and reading the forecast",
          difficulty: "core",
          hints: [
            "In A 比 B + adjective, which city does the adjective describe more?",
            "The one BEFORE 比 wins the contest.",
          ],
        },
        {
          id: "exam-mcq-2-q08",
          question: "Which measure word do you need for a bed?",
          options: ["{{只|zhī}}", "{{条|tiáo}}", "{{口|kǒu}}", "{{张|zhāng}}"],
          answerIndex: 3,
          explanation:
            "{{张|zhāng}} counts flat, surface-y things — beds, tables, photos: {{一张床|yì zhāng chuáng}}. 只 counts most animals, 条 counts long bendy things (fish, trousers), and 口 counts family members.",
          guideRef: "One bed, one 张? Measure words for furniture",
          difficulty: "core",
          hints: [
            "What shape is a bed — long and bendy, or a flat surface?",
            "张 goes with flat things: 床, 桌子, 照片.",
          ],
        },
        {
          id: "exam-mcq-2-q09",
          question:
            "The doctor asks {{你怎么了？|Nǐ zěnme le?}} What do they want to know?",
          options: [
            "What's wrong / what happened to you",
            "How old you are",
            "Where you live",
            "Whether you have eaten",
          ],
          answerIndex: 0,
          explanation:
            "你怎么了？ is THE opening question at the doctor's: 'what's wrong with you / what happened?'. The 了 signals that something has changed — you weren't ill before. You answer with the problem: 我头疼, 我发烧了…",
          guideRef: "At the doctor's: 你怎么了？",
          difficulty: "core",
          hints: [
            "It is the first thing a doctor says to a patient.",
            "了 hints that something has CHANGED — what would a doctor ask about?",
          ],
        },
        {
          id: "exam-mcq-2-q10",
          question: "Which measure word goes with {{裤子|kùzi|trousers}}?",
          options: ["{{件|jiàn}}", "{{条|tiáo}}", "{{张|zhāng}}", "{{本|běn}}"],
          answerIndex: 1,
          explanation:
            "The clothes sorting machine: long, leg-shaped items (裤子, 裙子) take {{条|tiáo}}, while tops and coats take {{件|jiàn}} — {{一条裤子|yì tiáo kùzi|a pair of trousers}}. 张 is for flat surfaces and 本 for books.",
          guideRef: "Clothes and the measure-word sorting machine",
          difficulty: "core",
          hints: [
            "Is 裤子 worn on your top half or your legs?",
            "Long, trailing items of clothing take 条.",
          ],
        },
        {
          id: "exam-mcq-2-q11",
          question:
            "{{我去过中国，可是我没去过美国。|Wǒ qùguo Zhōngguó, kěshì wǒ méi qùguo Měiguó.}} What does the speaker mean?",
          options: [
            "I am going to China, then America",
            "I want to go to China, not America",
            "I have been to China but never to America",
            "I live in China, not America",
          ],
          answerIndex: 2,
          explanation:
            "{{过|guo}} straight after a verb stamps it as a life experience: 去过 = have been. The negative keeps 过 and uses {{没|méi}}: 没去过 = have never been. Without 过 the sentence would be a plan (我去中国 = I'm going to China) — one syllable changes the whole time-feeling.",
          guideRef: "Holidays and the been-there particle 过",
          difficulty: "challenge",
          hints: [
            "What job does 过 do straight after a verb?",
            "去过 is a badge on your life's passport, not a plan.",
            "没 + 去过 = never had that experience.",
          ],
        },
        {
          id: "exam-mcq-2-q12",
          question:
            "Read the passage, then answer. {{中秋节的时候，我们晚上吃月饼，看月亮。月饼有点儿甜，可是很好吃。我最喜欢中秋节。|Zhōngqiūjié de shíhou, wǒmen wǎnshang chī yuèbing, kàn yuèliang. Yuèbing yǒudiǎnr tián, kěshì hěn hǎochī. Wǒ zuì xǐhuan Zhōngqiūjié.}} What does the family do in the evening?",
          options: [
            "Eat dumplings and watch fireworks",
            "Eat moon cakes and look at the moon",
            "Give red envelopes and sing songs",
            "Watch dragon-boat races",
          ],
          answerIndex: 1,
          explanation:
            "吃月饼，看月亮 = eat moon cakes and look at the moon — the two signature Mid-Autumn activities. Dumplings and red envelopes belong to Chinese New Year, and dragon boats to 端午节; festivals each have their own props.",
          guideRef: "中秋节 and 端午节: moon cakes and dragon boats",
          difficulty: "core",
          hints: [
            "Find the two verb + object pairs after 晚上.",
            "月 appears in both objects — moon cake and moon.",
          ],
        },
        {
          id: "exam-mcq-2-q13",
          question:
            "{{我会游泳，可是我不喜欢游泳。|Wǒ huì yóuyǒng, kěshì wǒ bù xǐhuan yóuyǒng.}} What is the speaker saying?",
          options: [
            "I can swim, but I do not like swimming",
            "I like swimming, but I cannot swim",
            "I can neither swim nor do I like it",
            "I am learning to swim because I like it",
          ],
          answerIndex: 0,
          explanation:
            "{{会|huì}} is a learned skill (I know how to), while {{喜欢|xǐhuan}} is enjoyment — Chinese keeps them strictly apart, and 可是 (but) sets them against each other here. Skill: yes. Enjoyment: no.",
          guideRef: "会: skills you have learned (and why it isn't 喜欢)",
          difficulty: "challenge",
          hints: [
            "会 = a skill you have learned; 喜欢 = what you enjoy.",
            "可是 means 'but' — the two halves must contrast.",
            "Which half is negated by 不?",
          ],
        },
        {
          id: "exam-mcq-2-q14",
          question:
            "Read this diary, then answer. {{我每天七点半起床，八点坐公共汽车去学校。上午我有四节课。下午四点我跟朋友一起踢足球，晚上九点半睡觉。|Wǒ měi tiān qī diǎn bàn qǐchuáng, bā diǎn zuò gōnggòng qìchē qù xuéxiào. Shàngwǔ wǒ yǒu sì jié kè. Xiàwǔ sì diǎn wǒ gēn péngyou yìqǐ tī zúqiú, wǎnshang jiǔ diǎn bàn shuìjiào.}} Which statement is TRUE?",
          options: [
            "The writer gets up at seven and cycles to school",
            "The writer has four lessons in the morning",
            "The writer plays basketball after school",
            "The writer goes to bed at nine o'clock",
          ],
          answerIndex: 1,
          explanation:
            "上午我有四节课 = four lessons in the morning ({{节|jié}} is the measure word for lessons). The traps all shave off a detail: getting up is at 七点半 (7:30, not 7:00) and by bus (坐公共汽车, not cycling), the sport is 踢足球 (football), and bedtime is 九点半 (9:30).",
          difficulty: "challenge",
          hints: [
            "Check the halves: 七点半 and 九点半 both contain 半.",
            "节 counts lessons — find the number before it.",
            "踢 tells you which sport it is.",
          ],
          strategy: "Verify every detail against the passage — distractors recycle its words",
        },
        {
          id: "exam-mcq-2-q15",
          question: "Which is the correct way to say 'two younger brothers'?",
          options: [
            "{{二个弟弟|èr gè dìdi}}",
            "{{两个弟弟|liǎng gè dìdi}}",
            "{{弟弟两个|dìdi liǎng gè}}",
            "{{两弟弟|liǎng dìdi}}",
          ],
          answerIndex: 1,
          explanation:
            "When '2' counts things, it becomes {{两|liǎng}} before the measure word: 两个弟弟. 二 is for maths and reading numbers aloud, the number + measure word must come BEFORE the noun, and the measure word 个 can never be skipped.",
          difficulty: "challenge",
          hints: [
            "Counting things: is it 二 or 两 before a measure word?",
            "The order is number + measure word + noun.",
            "Can 个 ever be dropped when counting people?",
          ],
          strategy: "Two rules at once: 两 before measure words, and never skip the measure word",
        },
      ],
    },
  ],
  qaPapers: [
    {
      id: "exam-qa-1",
      title: "Mock Exam Paper 3 — Writing",
      description:
        "Now you produce the Chinese yourself: translations, guided writing and a reading passage that sweep the whole course.",
      questions: [
        {
          id: "exam-qa-1-q01",
          question:
            "Translate into Chinese: 'Hello! My name is Li Ming. I am thirteen.' (Characters or pinyin.)",
          modelAnswer:
            "{{你好！我叫李明，我十三岁。|Nǐ hǎo! Wǒ jiào Lǐ Míng, wǒ shísān suì.|Hello! I'm called Li Ming, I'm thirteen.}}",
          markScheme: [
            "{{你好|nǐ hǎo}} for the greeting",
            "{{我叫|wǒ jiào}} + name for 'my name is'",
            "Age with NO 是: 我十三岁",
          ],
          commonError: "我是十三岁 ✗ — ages connect directly and never take 是.",
          difficulty: "warmup",
        },
        {
          id: "exam-qa-1-q02",
          question:
            "Translate into Chinese: 'I have one older brother and one younger sister.'",
          modelAnswer:
            "{{我有一个哥哥和一个妹妹。|Wǒ yǒu yí gè gēge hé yí gè mèimei.|I have an older brother and a younger sister.}}",
          markScheme: [
            "{{有|yǒu}} for 'have'",
            "Measure word 个 after each number: 一个哥哥",
            "{{哥哥|gēge}} (older brother) and {{妹妹|mèimei}} (younger sister) — the right halves of each pair",
            "{{和|hé}} joining the two",
          ],
          commonError:
            "Choosing 弟弟 or 姐姐 — Chinese splits every sibling word by age, so check older/younger before you write.",
          difficulty: "warmup",
        },
        {
          id: "exam-qa-1-q03",
          question:
            "You are at a hawker centre. Order in Chinese: 'I would like a bowl of noodles and two cups of tea.'",
          modelAnswer:
            "{{我要一碗面条和两杯茶。|Wǒ yào yì wǎn miàntiáo hé liǎng bēi chá.|I'd like a bowl of noodles and two cups of tea.}}",
          markScheme: [
            "{{我要|wǒ yào}} to place the order",
            "{{一碗|yì wǎn}} before 面条",
            "{{两杯茶|liǎng bēi chá}} — 两 (not 二) before the measure word",
            "Number + measure word + food, in that order, for both items",
          ],
          commonError: "二杯茶 ✗ — counting things always uses 两 before the measure word.",
          guideRef: "Ordering like a local: 我要 and measure words",
          difficulty: "core",
          hints: [
            "Start the order with 我要.",
            "Each food needs number + measure word: bowls are 碗, cups are 杯.",
            "How does '2' change before a measure word?",
          ],
          solutions: [
            {
              label: "Build from the ordering pattern (recommended)",
              steps: [
                "Frame: 我要 + [number + measure word + food], repeated with 和.",
                "Noodles come in bowls: 一碗面条.",
                "Tea comes in cups, and 2 becomes 两: 两杯茶.",
                "Assemble: 我要一碗面条和两杯茶。",
              ],
            },
            {
              label: "Chunk-by-chunk from English",
              steps: [
                "'I would like' → 我要 (要 = want/order).",
                "'a bowl of noodles' → 一碗面条 — the measure word 碗 translates 'bowl of'.",
                "'two cups of tea' → 两杯茶 — 杯 translates 'cup of', and 2 counting things is 两.",
                "Join with 和 and check every food has its measure word.",
              ],
            },
          ],
        },
        {
          id: "exam-qa-1-q04",
          question:
            "Guided writing: describe your school day in 3-4 Chinese sentences. Include: (1) when you get up, (2) how you travel to school, (3) one thing you do in the evening, (4) when you go to bed.",
          modelAnswer:
            "{{我每天七点起床。我坐公共汽车去学校。晚上我先做作业，然后看电视。我十点睡觉。|Wǒ měi tiān qī diǎn qǐchuáng. Wǒ zuò gōnggòng qìchē qù xuéxiào. Wǎnshang wǒ xiān zuò zuòyè, ránhòu kàn diànshì. Wǒ shí diǎn shuìjiào.|I get up at seven every day. I take the bus to school. In the evening I first do homework, then watch TV. I go to bed at ten.}}",
          markScheme: [
            "Every time phrase BEFORE its verb: 我七点起床, not 我起床七点",
            "A transport sentence with 坐/骑 before 去学校",
            "An evening activity such as 做作业 or 看电视",
            "A bedtime with 睡觉",
            "3-4 complete sentences covering all four points",
          ],
          commonError:
            "Copying English order: 我起床七点 ✗ — the time slots in before the verb, every single time.",
          guideRef: "The golden rule: time before the verb",
          difficulty: "core",
          hints: [
            "Every sentence has the same skeleton: 我 + time + verb (+ rest).",
            "For the journey, remember the transport sandwich: 坐 + vehicle + 去学校.",
            "Link two evening actions with 先…然后… for style marks.",
          ],
          solutions: [
            {
              label: "Sentence machine (recommended)",
              steps: [
                "Write the skeleton four times: 我 + [time] + [verb phrase].",
                "Fill the slots: 七点/起床, then the bus sandwich 坐公共汽车去学校.",
                "Evening: 晚上我做作业 (or upgrade with 先…然后…).",
                "Bedtime: 我十点睡觉. Read each sentence checking time-before-verb.",
              ],
            },
            {
              label: "Diary walk-through",
              steps: [
                "Walk through your real day in order: wake, travel, evening, sleep.",
                "Say each step aloud in Chinese BEFORE writing — your ear catches 我起床七点 as wrong.",
                "Write the four sentences down in time order; the sequence itself keeps the story clear.",
              ],
            },
          ],
        },
        {
          id: "exam-qa-1-q05",
          question: "Translate into Chinese: 'Today is very hot. Yesterday it rained.'",
          modelAnswer:
            "{{今天很热。昨天下雨了。|Jīntiān hěn rè. Zuótiān xià yǔ le.|Today is very hot. Yesterday it rained.}}",
          markScheme: [
            "今天很热 — the 很 bridge, with NO 是",
            "{{下雨|xià yǔ}} for rain",
            "{{了|le}} marking that the rain actually happened",
            "Time words 今天 / 昨天 at the front of each sentence",
          ],
          commonError:
            "今天是很热 ✗ — 热 is an adjective, so it connects with 很, never with 是.",
          guideRef: "Hot, cold and just right: temperature and feel",
          difficulty: "core",
          hints: [
            "Is 热 a noun or an adjective? That decides 是 or 很.",
            "Rain FALLS in Chinese: 下 + 雨.",
            "What tiny word shows yesterday's rain is done and dusted?",
          ],
        },
        {
          id: "exam-qa-1-q06",
          question:
            "Read about Xiaomei's home, then answer in English. {{我住在新加坡。我家附近有一个地铁站和一个公园。我的房间不大，房间里有一张床和一张桌子。我最喜欢在房间里看书。|Wǒ zhù zài Xīnjiāpō. Wǒ jiā fùjìn yǒu yí gè dìtiězhàn hé yí gè gōngyuán. Wǒ de fángjiān bú dà, fángjiān lǐ yǒu yì zhāng chuáng hé yì zhāng zhuōzi. Wǒ zuì xǐhuan zài fángjiān lǐ kàn shū.}} (a) Which two places are near her home? (b) Name the two pieces of furniture in her room. (c) What does she most like doing there?",
          modelAnswer:
            "(a) An MRT (underground) station and a park. (b) A bed and a table (desk). (c) Reading (books) in her room.",
          markScheme: [
            "(a) MRT station ({{地铁站|dìtiězhàn}}) AND park ({{公园|gōngyuán}}) — both needed",
            "(b) Bed ({{床|chuáng}}) and table ({{桌子|zhuōzi}})",
            "(c) Reading — {{看书|kàn shū}}",
          ],
          commonError:
            "Giving only one of the two places — 和 links TWO items in the 附近 sentence, and the mark scheme wants both.",
          guideRef: "My neighbourhood: 附近 and 离",
          difficulty: "core",
          hints: [
            "附近有… lists what is NEAR her home — 和 joins the two places.",
            "房间里有… lists the furniture; 张 is the flat-things measure word.",
            "最喜欢 flags her favourite activity.",
          ],
        },
        {
          id: "exam-qa-1-q07",
          question:
            "A classmate writes {{我是十二岁|wǒ shì shí'èr suì}} and {{我是很高|wǒ shì hěn gāo}}, arguing that English needs 'am', so Chinese must need 是. Explain the real rule, and give one sentence where 是 IS correct.",
          modelAnswer:
            "是 is not 'am' — it is an equals sign that only links two NOUNS: {{我是学生|wǒ shì xuésheng|I am a student}}, 她是新加坡人. Ages and adjectives don't equate you with another noun, they DESCRIBE you, so they connect directly: 我十二岁 (no verb at all) and 我很高 (with the 很 bridge before the adjective). Quick test before you write: if the next word is a noun, use 是; if it is an age or an adjective, leave 是 out.",
          markScheme: [
            "是 links noun to noun — an equals sign, not 'am'",
            "Ages take NO 是: 我十二岁",
            "Adjectives use the 很 bridge: 我很高",
            "A correct 是 example such as 我是学生 or 我是英国人",
          ],
          commonError:
            "Calling 是 'optional' — it is flatly wrong before ages and adjectives, and required between two nouns.",
          guideRef: "Describing people: the 很 bridge (and why 是 is wrong)",
          difficulty: "challenge",
          hints: [
            "What KIND of word follows 是 in correct sentences like 我是学生?",
            "What kind of word is 高? And 十二岁 behaves like an adjective too.",
            "State the test: noun after? 是. Age or adjective after? No 是.",
          ],
          strategy: "Noun after? 是. Age or adjective after? No 是.",
        },
        {
          id: "exam-qa-1-q08",
          question:
            "Guided writing: write 3-4 Chinese sentences about Chinese New Year. Include: (1) a food your family eats, (2) who gives you a red envelope (use the 给 sandwich), (3) a greeting you say, (4) your opinion of the festival.",
          modelAnswer:
            "{{春节的时候，我们吃鱼和饺子。奶奶给我一个红包。我们说：恭喜发财！我最喜欢春节。|Chūnjié de shíhou, wǒmen chī yú hé jiǎozi. Nǎinai gěi wǒ yí gè hóngbāo. Wǒmen shuō: gōngxǐ fācái! Wǒ zuì xǐhuan Chūnjié.|At Chinese New Year we eat fish and dumplings. Grandma gives me a red envelope. We say: gongxi facai! I like Chinese New Year best.}}",
          markScheme: [
            "A festival food with 吃 (鱼, 饺子…)",
            "给 sandwich in order: giver + 给 + 我 + 一个红包",
            "A greeting such as 恭喜发财 or 新年快乐",
            "An opinion with 喜欢 / 最喜欢",
            "3-4 complete sentences covering all four points",
          ],
          commonError:
            "奶奶给一个红包我 ✗ — the receiver comes straight after 给: 给我一个红包.",
          guideRef: "红包 and giving: the 给 sandwich",
          difficulty: "challenge",
          hints: [
            "Open with the time frame: 春节的时候.",
            "The 给 sandwich runs giver + 给 + receiver + thing — receiver BEFORE the thing.",
            "Finish with a 最喜欢 opinion to hit the last bullet point.",
          ],
        },
      ],
    },
    {
      id: "exam-qa-2",
      title: "Mock Exam Paper 4 — Translation & writing",
      description:
        "The final paper: two-way translation, grammar explanations and IGCSE-style guided writing at full stretch.",
      questions: [
        {
          id: "exam-qa-2-q01",
          question:
            "Translate into English: {{我星期一有数学课。|Wǒ xīngqīyī yǒu shùxué kè.}}",
          modelAnswer: "I have a maths lesson on Monday.",
          markScheme: [
            "星期一 = Monday (day one of the number code)",
            "数学 = maths",
            "有…课 = have a lesson/class",
          ],
          commonError:
            "Reading 星期一 as Sunday — the code runs Monday = 1 to Saturday = 6, and Sunday is the odd one out (星期日/星期天).",
          guideRef: "Days of the week: crack the number code",
          difficulty: "warmup",
        },
        {
          id: "exam-qa-2-q02",
          question: "Translate into Chinese: 'My head hurts.'",
          modelAnswer: "{{我头疼。|Wǒ tóu téng.|My head hurts.}}",
          markScheme: [
            "头 + 疼 in that order",
            "No 的 between 我 and 头 — body parts drop it",
            "No 是 anywhere",
          ],
          commonError:
            "我的头是疼 ✗ — body parts drop the 的, and aches connect directly without 是.",
          guideRef: "Saying what hurts: 头疼 and the missing 的",
          difficulty: "warmup",
        },
        {
          id: "exam-qa-2-q03",
          question:
            "Translate into Chinese: 'My home is very far from school. I take the MRT to school.'",
          modelAnswer:
            "{{我家离学校很远。我坐地铁去学校。|Wǒ jiā lí xuéxiào hěn yuǎn. Wǒ zuò dìtiě qù xuéxiào.|My home is very far from school. I take the MRT to school.}}",
          markScheme: [
            "Ruler frame: 我家 + 离 + 学校 (either end may come first)",
            "{{很远|hěn yuǎn}} at the end, with no 是",
            "{{坐地铁|zuò dìtiě}} BEFORE 去学校 — the transport sandwich",
          ],
          commonError:
            "我去学校坐地铁 ✗ — how you travel must come before where you go.",
          guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
          difficulty: "core",
          hints: [
            "Distance uses the ruler word: A 离 B + 很远/很近.",
            "Second sentence is the sandwich: 坐 + vehicle + 去 + place.",
          ],
        },
        {
          id: "exam-qa-2-q04",
          question:
            "Guided writing: write 3-4 Chinese sentences about your hobbies. Include: (1) your favourite hobby with 最喜欢, (2) a skill you have with 会, (3) how often or when you do it, (4) an invitation to a friend.",
          modelAnswer:
            "{{我最喜欢打篮球。我也会游泳。我周末常常跟朋友一起打篮球。我们星期六去游泳，好吗？|Wǒ zuì xǐhuan dǎ lánqiú. Wǒ yě huì yóuyǒng. Wǒ zhōumò chángcháng gēn péngyou yìqǐ dǎ lánqiú. Wǒmen xīngqīliù qù yóuyǒng, hǎo ma?|I like basketball best. I can also swim. At weekends I often play basketball with friends. Shall we go swimming on Saturday?}}",
          markScheme: [
            "最喜欢 + a hobby with its correct verb (打/踢/看/听…)",
            "会 + a learned skill",
            "A time or frequency word BEFORE the verb: 周末 / 常常…",
            "An invitation, e.g. ending in …，好吗？",
            "3-4 complete sentences covering all four points",
          ],
          commonError:
            "打游泳 ✗ — swimming is just 游泳 with no extra verb; 打 belongs to hand-and-ball games only.",
          guideRef: "Time words first, then the fun: 常常, 周末 and inviting friends",
          difficulty: "core",
          hints: [
            "Pick the sport verb by body part: hands 打, feet 踢.",
            "会 states a skill, 喜欢 states enjoyment — the task wants both.",
            "Time and frequency words slot in BEFORE the verb: 我周末常常….",
          ],
        },
        {
          id: "exam-qa-2-q05",
          question:
            "Read about a shopping trip, then answer in English. {{今天我和妹妹去买东西。妹妹买了一条黄色的裙子，五十块。我很喜欢一件红色的衣服，可是太贵了，一百二十块，所以我没有买。|Jīntiān wǒ hé mèimei qù mǎi dōngxi. Mèimei mǎi le yì tiáo huángsè de qúnzi, wǔshí kuài. Wǒ hěn xǐhuan yí jiàn hóngsè de yīfu, kěshì tài guì le, yìbǎi èrshí kuài, suǒyǐ wǒ méiyǒu mǎi.}} (a) What did the younger sister buy, and how much did it cost? (b) Why did the writer NOT buy the red top?",
          modelAnswer:
            "(a) A yellow skirt, which cost 50 yuan. (b) Although the writer really liked it, it was too expensive at 120 yuan, so they did not buy it.",
          markScheme: [
            "(a) Yellow ({{黄色|huángsè}}) skirt ({{裙子|qúnzi}})",
            "(a) 50 yuan ({{五十块|wǔshí kuài}})",
            "(b) Too expensive ({{太贵了|tài guì le}}) — 120 yuan",
          ],
          commonError:
            "Swapping the two prices — attach each price to its own item as you read, don't collect them at the end.",
          difficulty: "core",
          hints: [
            "Colours sit before their noun with 的: 黄色的裙子.",
            "太…了 is the over-the-limit frame — that's the reason for (b).",
            "所以 introduces the consequence: …so I didn't buy it.",
          ],
        },
        {
          id: "exam-qa-2-q06",
          question:
            "Explain why English 'play' becomes different verbs in Chinese, then give the correct verb phrase for (a) basketball and (b) football.",
          modelAnswer:
            "Chinese picks the verb by HOW your body plays: {{打|dǎ|to hit}} for hand-and-ball games, {{踢|tī|to kick}} for kicking games, and {{玩|wán|to play}} only for toys and games in general — there is no all-purpose 'play'. So (a) basketball is {{打篮球|dǎ lánqiú}} (hands) and (b) football is {{踢足球|tī zúqiú}} (feet). The body-part rule even predicts the verb for sports you have never been taught.",
          markScheme: [
            "The verb is chosen by body part / how the sport is played",
            "(a) 打篮球",
            "(b) 踢足球",
          ],
          commonError:
            "Reaching for 玩 with every sport — 玩足球 sounds like toying with the ball, not playing the match.",
          guideRef: "Why 'play' is five different verbs",
          difficulty: "core",
          hints: [
            "What do your hands do in basketball, and your feet in football?",
            "Explain the rule first, then apply it to (a) and (b).",
          ],
        },
        {
          id: "exam-qa-2-q07",
          question:
            "Challenge: translate into Chinese: 'In the summer holidays I plan to fly to Beijing, because I have never been to China.'",
          modelAnswer:
            "{{暑假我打算坐飞机去北京，因为我没去过中国。|Shǔjià wǒ dǎsuàn zuò fēijī qù Běijīng, yīnwèi wǒ méi qùguo Zhōngguó.|In the summer holidays I plan to fly to Beijing, because I have never been to China.}}",
          markScheme: [
            "Time word {{暑假|shǔjià}} at the front",
            "{{打算|dǎsuàn}} for 'plan to'",
            "坐飞机 BEFORE 去北京 — transport sandwich",
            "'Never been' = {{没|méi}} + 去过, keeping 过",
            "{{因为|yīnwèi}} linking the reason",
          ],
          commonError:
            "不去过 ✗ — life experiences negate with 没, and the 过 must stay: 没去过.",
          guideRef: "Holidays and the been-there particle 过",
          difficulty: "challenge",
          hints: [
            "Start with the time frame 暑假, then 打算 + the plan.",
            "'Fly to Beijing' is the sandwich: 坐飞机去北京.",
            "'Have never been' is an experience — which negator keeps 过?",
          ],
          solutions: [
            {
              label: "Frame by frame (recommended)",
              steps: [
                "Time first: 暑假 opens the sentence.",
                "The plan: 我打算 + 坐飞机去北京 (transport before destination).",
                "The reason: 因为 + 我没去过中国 — 没 negates the experience, 过 stays.",
                "Assemble: 暑假我打算坐飞机去北京，因为我没去过中国。",
              ],
            },
            {
              label: "Two halves, then join",
              steps: [
                "Half 1 as its own sentence: 暑假我打算坐飞机去北京。",
                "Half 2 as its own sentence: 我没去过中国。",
                "Glue them with 因为 before the reason half; the comma replaces the full stop.",
              ],
            },
          ],
        },
        {
          id: "exam-qa-2-q08",
          question:
            "Guided writing: introduce your family in about 4 Chinese sentences. Include: (1) how many people, using 口, (2) who they are, (3) one person's job with 是 or 在…工作, (4) a pet with 养 and its measure word.",
          modelAnswer:
            "{{我家有四口人：爸爸、妈妈、弟弟和我。爸爸是医生，他在医院工作。妈妈很忙，也很漂亮。我们家养一只狗，它很可爱。|Wǒ jiā yǒu sì kǒu rén: bàba, māma, dìdi hé wǒ. Bàba shì yīshēng, tā zài yīyuàn gōngzuò. Māma hěn máng, yě hěn piàoliang. Wǒmen jiā yǎng yì zhī gǒu, tā hěn kě'ài.|There are four people in my family: Dad, Mum, my younger brother and me. Dad is a doctor; he works at a hospital. Mum is busy and also very pretty. We keep a dog; it is very cute.}}",
          markScheme: [
            "我家有 + number + 口人 for the headcount",
            "Family members listed, ending …和我",
            "A job with 是 + job, or 在 + place + 工作",
            "养 + 一只/一条 + pet, with the right measure word",
            "About 4 complete sentences covering all four points",
          ],
          commonError:
            "四个人 for the family headcount ✗ — families are counted with the mouth measure: 四口人.",
          guideRef: "Pets and jobs: 只, 条, 养 and 在…工作",
          difficulty: "challenge",
          hints: [
            "Open with the headcount: 我家有…口人, then list with 、 and finish 和我.",
            "Jobs: 是 + job title, or the workplace frame 在 + place + 工作.",
            "Pets take 养, and the measure word depends on the animal: 只 for dogs and cats, 条 for fish.",
          ],
        },
      ],
    },
  ],
};
