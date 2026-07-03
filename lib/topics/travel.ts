import type { Topic } from "../types";

// Travel & Transport — Cambridge IGCSE 0547 pathway, Year 8.
// House style follows lib/topics/greetings.ts (the exemplar).

export const travel: Topic = {
  id: "travel",
  title: "Travel & Transport",
  titleChinese: { hanzi: "旅行与交通", pinyin: "lǚxíng yǔ jiāotōng" },
  subject: "chinese",
  icon: "🚄",
  color: "blue",
  intro:
    "How do you get to school? Have you ever been to China? How long is the flight from Singapore to Beijing? This topic gives you the machinery for all of it: the two 'take' verbs, the transport sandwich sentence, directions, distances, and the tiny particle 过 that turns 'I go' into 'I have been'. By the end you can plan, describe and boast about journeys — in Mandarin.",
  guide: [
    {
      heading: "坐 or 骑? The horse-riding rule for vehicles",
      discovery: {
        problem:
          "Here are four real phrases: {{坐公共汽车|zuò gōnggòng qìchē|take the bus}}, {{坐飞机|zuò fēijī|take the plane}}, {{骑自行车|qí zìxíngchē|ride a bike}}, {{骑摩托车|qí mótuōchē|ride a motorbike}}. Chinese uses TWO different verbs where English says 'take' or 'ride'. Look at how your body is positioned on each vehicle. What decides which verb you get?",
        idea:
          "It's your legs! {{坐|zuò|to sit}} is for vehicles you sit **inside** or on a seat: bus, train, plane, taxi, boat. {{骑|qí|to ride astride}} is for anything you straddle with one leg on each side — like riding a horse. In fact {{骑|qí}} contains {{马|mǎ|horse}} on its left! Now you can predict verbs for vehicles you've never seen: a camel? Straddle it — {{骑|qí}}. A ferry? You sit inside — {{坐|zuò}}. You discovered a rule, not a word list.",
      },
      body:
        "The everyday vehicles, sorted by the rule:\n\n**{{坐|zuò|sit in/on}}** — {{公共汽车|gōnggòng qìchē|bus}}, {{地铁|dìtiě|underground/MRT}}, {{火车|huǒchē|train}}, {{飞机|fēijī|aeroplane}}, {{出租车|chūzūchē|taxi}}, {{船|chuán|boat}}.\n\n**{{骑|qí|ride astride}}** — {{自行车|zìxíngchē|bicycle}}, {{摩托车|mótuōchē|motorbike}}, and of course {{马|mǎ|horse}}.\n\nIn Singapore, the MRT is simply {{地铁|dìtiě}} — literally 'ground iron', the underground railway.\n\nOne more verb: if YOU are the driver, use {{开车|kāichē|to drive a car}} — {{开|kāi}} means 'to operate/drive'. {{我爸爸开车。|Wǒ bàba kāichē.|My dad drives.}}",
      whyItWorks:
        "Why two verbs at all? Chinese cares about the physical action, not the vehicle's name. {{骑|qí}} originally meant 'to sit astride a horse' — the 马 inside the character is the fossil of that meaning. When bicycles arrived in China, they were 'straddled like horses', so 骑 stretched to cover them. English hides this by using vague 'take'; Chinese makes you picture the action. Picture the action and you will never pick the wrong verb.",
      strategies: ["Find the pattern", "Picture the action, don't translate the word"],
      keyPoints: [
        "坐 + vehicles you sit inside/on a seat: 公共汽车, 地铁, 火车, 飞机, 出租车, 船",
        "骑 + vehicles you straddle: 自行车, 摩托车, 马",
        "骑 contains the horse radical 马 — the memory hook for the rule",
        "开车 = to drive yourself; 坐出租车 = to ride in a taxi as a passenger",
        "MRT in Singapore = 地铁",
      ],
      vocab: [
        { hanzi: "坐", pinyin: "zuò", english: "to sit; to take (transport)", pos: "verb" },
        { hanzi: "骑", pinyin: "qí", english: "to ride (astride)", pos: "verb" },
        { hanzi: "开车", pinyin: "kāichē", english: "to drive (a car)", pos: "verb" },
        { hanzi: "公共汽车", pinyin: "gōnggòng qìchē", english: "bus", pos: "noun" },
        { hanzi: "地铁", pinyin: "dìtiě", english: "underground railway; MRT", pos: "noun" },
        { hanzi: "飞机", pinyin: "fēijī", english: "aeroplane", pos: "noun" },
        { hanzi: "出租车", pinyin: "chūzūchē", english: "taxi", pos: "noun" },
        { hanzi: "船", pinyin: "chuán", english: "boat; ship", pos: "noun" },
        { hanzi: "自行车", pinyin: "zìxíngchē", english: "bicycle", pos: "noun" },
        { hanzi: "摩托车", pinyin: "mótuōchē", english: "motorbike", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "坐 + sit-inside vehicle",
          example: { hanzi: "我坐地铁。", pinyin: "Wǒ zuò dìtiě.", english: "I take the MRT." },
          note: "Works for bus, train, plane, taxi, boat — anywhere you sit on a seat.",
        },
        {
          pattern: "骑 + straddle vehicle",
          example: { hanzi: "他骑自行车。", pinyin: "Tā qí zìxíngchē.", english: "He rides a bike." },
          note: "One leg each side = 骑. That's why it works for horses, bikes and motorbikes.",
        },
      ],
    },
    {
      heading: "怎么去？ Building the transport sandwich",
      discovery: {
        problem:
          "English says 'I go to school BY MRT' — transport at the END. Now look at the Chinese: {{我坐地铁去学校。|Wǒ zuò dìtiě qù xuéxiào.|I go to school by MRT.}} Where has the transport phrase gone, and why might Chinese insist on that position?",
        idea:
          "The transport moved to the MIDDLE: subject + {{坐地铁|zuò dìtiě}} + {{去学校|qù xuéxiào}}. Chinese narrates events in the order they happen: first you board the MRT, THEN you arrive at school. The sentence is a little film strip of your journey. Method before destination — always.",
      },
      body:
        "To ask how someone travels, use {{怎么|zěnme|how}}: {{你怎么去学校？|Nǐ zěnme qù xuéxiào?|How do you get to school?}} Just like {{什么|shénme}} in the names topic, {{怎么|zěnme}} sits exactly where the answer will go — swap it for the transport phrase and you have your reply: {{我骑自行车去学校。|Wǒ qí zìxíngchē qù xuéxiào.|I cycle to school.}}\n\nThree direction verbs to know:\n- {{去|qù|to go}} — away from the speaker\n- {{来|lái|to come}} — towards the speaker\n- {{回|huí|to return}} — back to where you belong: {{回家|huí jiā|go home}}, {{回国|huí guó|return to your home country}}\n\nChinese also chains verbs in event order. {{我去中国看朋友。|Wǒ qù Zhōngguó kàn péngyou.|I'm going to China to see friends.}} First you go to China, then you see friends — no word for 'to' or 'in order to' needed. The order of verbs IS the order of events.",
      whyItWorks:
        "Why 'method before destination'? Chinese word order follows the timeline: things that happen first come first. Boarding the MRT happens before arriving at school, so 坐地铁 comes before 去学校. The same logic powers verb chains: 去中国 happens before 看朋友, so it's written first. Once you trust the timeline principle, you can decode — and build — sentences you have never met.",
      strategies: ["Question words sit in the answer's seat", "Follow the timeline"],
      keyPoints: [
        "Sandwich shape: subject + 坐/骑 + vehicle + 去 + place",
        "怎么 asks 'how' and sits where the answer will go — no word-order flip",
        "回家 = go home; 回国 = return to your home country",
        "Verb chains run in event order: 我去中国看朋友 = go to China, then see friends",
      ],
      vocab: [
        { hanzi: "怎么", pinyin: "zěnme", english: "how", pos: "question word" },
        {
          hanzi: "去",
          pinyin: "qù",
          english: "to go",
          pos: "verb",
          example: { hanzi: "我去学校。", pinyin: "Wǒ qù xuéxiào.", english: "I go to school." },
        },
        { hanzi: "来", pinyin: "lái", english: "to come", pos: "verb" },
        { hanzi: "回家", pinyin: "huí jiā", english: "to go home", pos: "verb phrase" },
        { hanzi: "回国", pinyin: "huí guó", english: "to return to one's home country", pos: "verb phrase" },
        { hanzi: "看", pinyin: "kàn", english: "to see; to visit (a person)", pos: "verb" },
        { hanzi: "朋友", pinyin: "péngyou", english: "friend", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "你怎么去 + place？",
          example: {
            hanzi: "你怎么去机场？",
            pinyin: "Nǐ zěnme qù jīchǎng?",
            english: "How do you get to the airport?",
          },
          note: "怎么 sits in the answer's seat — replace it with 坐/骑 + vehicle to reply.",
        },
        {
          pattern: "Subject + 坐/骑 + vehicle + 去 + place",
          example: {
            hanzi: "我坐地铁去学校。",
            pinyin: "Wǒ zuò dìtiě qù xuéxiào.",
            english: "I go to school by MRT.",
          },
          note: "Method before destination — the sentence follows the journey's timeline.",
        },
        {
          pattern: "去 + place + verb 2 (do what there)",
          example: {
            hanzi: "我去中国看朋友。",
            pinyin: "Wǒ qù Zhōngguó kàn péngyou.",
            english: "I'm going to China to see friends.",
          },
          note: "No word for 'to' — the verb order shows the purpose.",
        },
      ],
    },
    {
      heading: "Where is it? Directions, 旁边 and the ruler word 离",
      discovery: {
        problem:
          "A tourist asks you: {{地铁站在哪儿？|Dìtiězhàn zài nǎr?|Where is the MRT station?}} You reply: {{往前走，然后往左拐。|Wǎng qián zǒu, ránhòu wǎng zuǒ guǎi.}} Using the building blocks {{前|qián|front}}, {{左|zuǒ|left}}, {{走|zǒu|to walk}} and {{拐|guǎi|to turn}} — what exactly did you tell them to do?",
        idea:
          "'Towards the front walk, then towards the left turn' — go straight ahead, then turn left. {{往|wǎng|towards}} + direction + verb is a machine: feed in any direction word and out comes an instruction. {{往右拐|wǎng yòu guǎi|turn right}}, {{往前走|wǎng qián zǒu|go straight on}} — you can now give directions you were never taught.",
      },
      body:
        "Ask where something is with {{在哪儿|zài nǎr|where (is it)?}} (in southern China and Singapore you'll also hear {{哪里|nǎlǐ}}): {{火车站在哪儿？|Huǒchēzhàn zài nǎr?|Where is the train station?}}\n\nThe direction words: {{左|zuǒ|left}}, {{右|yòu|right}}, {{前|qián|front/ahead}}, {{后|hòu|back/behind}}, and the very useful {{旁边|pángbiān|beside/next to}}: {{银行在学校旁边。|Yínháng zài xuéxiào pángbiān.|The bank is next to the school.}} Notice 旁边 comes AFTER the landmark — 'school's side', not 'beside school'.\n\nFor distance, use {{远|yuǎn|far}} and {{近|jìn|near}} with the ruler word {{离|lí|apart from}}:\n\n{{学校离我家很近。|Xuéxiào lí wǒ jiā hěn jìn.|School is very close to my home.}}\n\nThink of {{离|lí}} as laying a ruler between two places: A {{离|lí}} B + {{很远|hěn yuǎn}}/{{很近|hěn jìn}}. And just like {{我很好|wǒ hěn hǎo}}, there is no {{是|shì}} — the adjective connects directly.",
      whyItWorks:
        "Why does A 离 B 很近 work without 'is'? 离 isn't 'from' in the travelling sense — it marks the gap between two fixed points, and 远/近 is an adjective describing that gap. Since it measures a static distance, nobody is moving, which is exactly why you cannot use the journey frame 从…到 here (that one needs a route — see the next section). Two tools, two jobs: 离 is the ruler, 从…到 is the route.",
      strategies: ["Build, don't memorise", "One tool per job — ruler vs route"],
      keyPoints: [
        "在哪儿 / 在哪里 asks where something is",
        "往 + direction + 走/拐 gives directions: 往前走, 往左拐",
        "旁边 follows the landmark: 学校旁边 = next to the school",
        "Distance frame: A + 离 + B + 很远/很近 — and no 是",
        "离 measures a static gap; it is NOT the moving 'from' of a journey",
      ],
      vocab: [
        { hanzi: "在哪儿", pinyin: "zài nǎr", english: "where (is it)?", pos: "question phrase" },
        { hanzi: "左", pinyin: "zuǒ", english: "left", pos: "direction" },
        { hanzi: "右", pinyin: "yòu", english: "right", pos: "direction" },
        { hanzi: "前", pinyin: "qián", english: "front; ahead", pos: "direction" },
        { hanzi: "旁边", pinyin: "pángbiān", english: "beside, next to", pos: "position word" },
        { hanzi: "往", pinyin: "wǎng", english: "towards", pos: "preposition" },
        { hanzi: "拐", pinyin: "guǎi", english: "to turn (a corner)", pos: "verb" },
        { hanzi: "远", pinyin: "yuǎn", english: "far", pos: "adjective" },
        { hanzi: "近", pinyin: "jìn", english: "near, close", pos: "adjective" },
        {
          hanzi: "离",
          pinyin: "lí",
          english: "apart from (distance marker)",
          pos: "preposition",
          example: {
            hanzi: "学校离我家很近。",
            pinyin: "Xuéxiào lí wǒ jiā hěn jìn.",
            english: "School is very close to my home.",
          },
        },
      ],
      patterns: [
        {
          pattern: "Place + 在哪儿？",
          example: { hanzi: "机场在哪儿？", pinyin: "Jīchǎng zài nǎr?", english: "Where is the airport?" },
        },
        {
          pattern: "往 + direction + 走/拐",
          example: {
            hanzi: "往前走，然后往右拐。",
            pinyin: "Wǎng qián zǒu, ránhòu wǎng yòu guǎi.",
            english: "Go straight ahead, then turn right.",
          },
          note: "A direction machine: swap in 左/右/前 to build any instruction.",
        },
        {
          pattern: "A + 离 + B + 很远/很近",
          example: {
            hanzi: "机场离我家很远。",
            pinyin: "Jīchǎng lí wǒ jiā hěn yuǎn.",
            english: "The airport is far from my home.",
          },
          note: "No 是 — the adjective connects directly, just like 我很好.",
        },
      ],
    },
    {
      heading: "From A to B: 从…到… and how long it takes",
      discovery: {
        problem:
          "Decode this journey: {{从新加坡到北京，坐飞机要六个小时。|Cóng Xīnjiāpō dào Běijīng, zuò fēijī yào liù ge xiǎoshí.}} You know 新加坡 (Singapore), 北京 (Beijing), 坐飞机 (take a plane), 六个小时 (six hours). So what jobs are {{从|cóng}}, {{到|dào}} and {{要|yào}} doing?",
        idea:
          "{{从|cóng}} = from, {{到|dào}} = to — together they frame the route. And {{要|yào}}, which you may know as 'to want', here means 'needs/takes': the journey DEMANDS six hours of you. 'From Singapore to Beijing, taking the plane needs six hours.' You just read a full itinerary sentence.",
      },
      body:
        "The route frame is {{从|cóng|from}} A {{到|dào|to}} B: {{从我家到学校|cóng wǒ jiā dào xuéxiào|from my home to school}}, {{从香港到上海|cóng Xiānggǎng dào Shànghǎi|from Hong Kong to Shanghai}}.\n\nAdd transport and time to state the duration:\n\n{{从我家到机场，坐出租车要一个小时。|Cóng wǒ jiā dào jīchǎng, zuò chūzūchē yào yí ge xiǎoshí.|From my home to the airport, the taxi takes one hour.}}\n\nNote the tone change: {{一|yī}} becomes yí before {{个|gè}} — 一个小时 is said yí ge xiǎoshí.\n\nJourney places and things: {{机场|jīchǎng|airport}}, {{火车站|huǒchēzhàn|train station}}, {{车站|chēzhàn|(bus) stop, station}}, {{票|piào|ticket}} — a plane ticket is simply {{飞机票|fēijī piào}}, built like Lego.\n\n**离 or 从…到?** {{学校离我家很近|Xuéxiào lí wǒ jiā hěn jìn}} lays a ruler between two points (how near/far). {{从我家到学校要十分钟|Cóng wǒ jiā dào xuéxiào yào shí fēnzhōng}} traces a route and prices it in time. Ruler → 离. Route → 从…到.",
      whyItWorks:
        "Why does 要 mean 'takes' here? Its core meaning is 'to require/demand'. When you say a person 要 something, they want it; when a journey 要 six hours, the journey requires them. Chinese reuses one verb where English switches between 'want', 'need' and 'take' — spotting the shared core saves you three dictionary entries.",
      strategies: ["Decode with the words you know", "Ruler → 离, route → 从…到"],
      keyPoints: [
        "从 A 到 B frames a route: 从新加坡到北京",
        "Duration: 坐 + vehicle + 要 + number + 个小时",
        "要 = needs/takes when the subject is a journey",
        "票 builds compounds: 飞机票 plane ticket, 火车票 train ticket",
        "离 measures the gap; 从…到 traces the route — don't swap them",
      ],
      vocab: [
        { hanzi: "从", pinyin: "cóng", english: "from", pos: "preposition" },
        { hanzi: "到", pinyin: "dào", english: "to; to arrive", pos: "preposition/verb" },
        { hanzi: "要", pinyin: "yào", english: "to need, to take (time); to want", pos: "verb" },
        { hanzi: "小时", pinyin: "xiǎoshí", english: "hour", pos: "noun" },
        { hanzi: "票", pinyin: "piào", english: "ticket", pos: "noun" },
        { hanzi: "机场", pinyin: "jīchǎng", english: "airport", pos: "noun" },
        { hanzi: "火车", pinyin: "huǒchē", english: "train", pos: "noun" },
        { hanzi: "火车站", pinyin: "huǒchēzhàn", english: "train station", pos: "noun" },
        { hanzi: "车站", pinyin: "chēzhàn", english: "station; (bus) stop", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "从 + A + 到 + B",
          example: {
            hanzi: "从新加坡到马来西亚",
            pinyin: "cóng Xīnjiāpō dào Mǎláixīyà",
            english: "from Singapore to Malaysia",
          },
        },
        {
          pattern: "坐 + vehicle + 要 + duration",
          example: {
            hanzi: "坐飞机要六个小时。",
            pinyin: "Zuò fēijī yào liù ge xiǎoshí.",
            english: "The plane takes six hours.",
          },
          note: "要 here means 'requires' — the journey demands that much time.",
        },
      ],
    },
    {
      heading: "Holidays and the been-there particle 过",
      discovery: {
        problem:
          "One tiny character separates these two sentences: {{我去中国。|Wǒ qù Zhōngguó.}} and {{我去过中国。|Wǒ qùguo Zhōngguó.}} One means 'I'm going to China'; the other means 'I HAVE BEEN to China (at some point in my life)'. Which is which — and what is {{过|guo}} doing?",
        idea:
          "{{过|guo}} straight after a verb stamps it 'EXPERIENCED': 去过 = have been, {{吃过|chīguo|have (ever) eaten}}, {{看过|kànguo|have (ever) seen}}. 我去中国 is a plan or a present fact; 我去过中国 is a badge on your life's passport. One syllable, whole new tense-feeling — and English needs three words ('have been to') to match it.",
      },
      body:
        "Holiday words first: {{旅行|lǚxíng|to travel; trip}} and {{旅游|lǚyóu|to tour, travel for fun}} are near-twins; {{度假|dùjià|to go on holiday}} is what you do in the {{暑假|shǔjià|summer holidays}}. With {{去年|qùnián|last year}} and {{明年|míngnián|next year}} you can place a trip in time, and {{打算|dǎsuàn|to plan to}} announces intentions: {{我打算明年去英国。|Wǒ dǎsuàn míngnián qù Yīngguó.|I plan to go to the UK next year.}}\n\nThe experience particle {{过|guo}}:\n- Been there: {{我去过法国。|Wǒ qùguo Fǎguó.|I have been to France.}}\n- Never: use {{没|méi}}, keep 过: {{我没去过美国。|Wǒ méi qùguo Měiguó.|I have never been to the USA.}} Never 不去过!\n- Ask: {{你去过日本吗？|Nǐ qùguo Rìběn ma?|Have you ever been to Japan?}}\n\nPlaces to collect: {{中国|Zhōngguó|China}}, {{北京|Běijīng|Beijing}}, {{上海|Shànghǎi|Shanghai}}, {{香港|Xiānggǎng|Hong Kong}}, {{新加坡|Xīnjiāpō|Singapore}}, {{英国|Yīngguó|the UK}}, {{美国|Měiguó|the USA}}, {{法国|Fǎguó|France}}, {{日本|Rìběn|Japan}}, {{泰国|Tàiguó|Thailand}}, {{马来西亚|Mǎláixīyà|Malaysia}}.",
      whyItWorks:
        "Why does 过 mean 'have ever'? On its own, {{过|guò}} is a verb meaning 'to cross, to pass'. An experience is something you have passed through — so verb + 过 literally says 'the going-to-China has been crossed'. That's also why it pairs happily with 去年 (last year) but clashes with 明年 (next year): you can't have already crossed something that hasn't happened. And it explains the negative: 没 denies completed/experienced things, 不 denies wants and habits — an experience is completed, so it must be 没去过.",
      strategies: ["One tiny word, big meaning shift", "Test with a timeline"],
      keyPoints: [
        "verb + 过 = have had the experience: 去过, 吃过, 看过",
        "Negative is 没 + verb + 过: 我没去过美国 — never 不去过",
        "去 alone = go/going; 去过 = have been at some point",
        "打算 + verb phrase = plan to: 我打算去泰国度假",
        "Country names are collectable: 中国, 英国, 美国, 法国 all end in 国 (country)",
      ],
      vocab: [
        {
          hanzi: "过",
          pinyin: "guo",
          english: "experience particle (have ever…)",
          pos: "particle",
          example: { hanzi: "我去过中国。", pinyin: "Wǒ qùguo Zhōngguó.", english: "I have been to China." },
        },
        { hanzi: "旅行", pinyin: "lǚxíng", english: "to travel; trip", pos: "verb/noun" },
        { hanzi: "旅游", pinyin: "lǚyóu", english: "to tour, to travel for fun", pos: "verb" },
        { hanzi: "度假", pinyin: "dùjià", english: "to go on holiday", pos: "verb" },
        { hanzi: "暑假", pinyin: "shǔjià", english: "summer holidays", pos: "noun" },
        { hanzi: "去年", pinyin: "qùnián", english: "last year", pos: "noun" },
        { hanzi: "明年", pinyin: "míngnián", english: "next year", pos: "noun" },
        { hanzi: "打算", pinyin: "dǎsuàn", english: "to plan to", pos: "verb" },
      ],
      patterns: [
        {
          pattern: "Subject + verb + 过 + object",
          example: { hanzi: "我去过泰国。", pinyin: "Wǒ qùguo Tàiguó.", english: "I have been to Thailand." },
          note: "过 sits straight after the verb and stamps it 'experienced'.",
        },
        {
          pattern: "没 + verb + 过",
          example: {
            hanzi: "我没去过日本。",
            pinyin: "Wǒ méi qùguo Rìběn.",
            english: "I have never been to Japan.",
          },
          note: "Experiences negate with 没, never 不 — and 过 stays.",
        },
        {
          pattern: "打算 + verb phrase",
          example: {
            hanzi: "我打算暑假去马来西亚。",
            pinyin: "Wǒ dǎsuàn shǔjià qù Mǎláixīyà.",
            english: "I plan to go to Malaysia in the summer holidays.",
          },
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "坐", pinyin: "zuò", english: "to sit; to take (transport)" },
      { hanzi: "骑", pinyin: "qí", english: "to ride (astride)" },
      { hanzi: "开车", pinyin: "kāichē", english: "to drive (a car)" },
      { hanzi: "公共汽车", pinyin: "gōnggòng qìchē", english: "bus" },
      { hanzi: "地铁", pinyin: "dìtiě", english: "underground; MRT" },
      { hanzi: "火车", pinyin: "huǒchē", english: "train" },
      { hanzi: "飞机", pinyin: "fēijī", english: "aeroplane" },
      { hanzi: "出租车", pinyin: "chūzūchē", english: "taxi" },
      { hanzi: "自行车", pinyin: "zìxíngchē", english: "bicycle" },
      { hanzi: "摩托车", pinyin: "mótuōchē", english: "motorbike" },
      { hanzi: "船", pinyin: "chuán", english: "boat; ship" },
      { hanzi: "怎么", pinyin: "zěnme", english: "how" },
      { hanzi: "回家", pinyin: "huí jiā", english: "to go home" },
      { hanzi: "回国", pinyin: "huí guó", english: "to return to one's home country" },
      { hanzi: "左", pinyin: "zuǒ", english: "left" },
      { hanzi: "右", pinyin: "yòu", english: "right" },
      { hanzi: "前", pinyin: "qián", english: "front; ahead" },
      { hanzi: "旁边", pinyin: "pángbiān", english: "beside, next to" },
      { hanzi: "往", pinyin: "wǎng", english: "towards" },
      { hanzi: "拐", pinyin: "guǎi", english: "to turn (a corner)" },
      { hanzi: "在哪儿", pinyin: "zài nǎr", english: "where (is it)?" },
      { hanzi: "远", pinyin: "yuǎn", english: "far" },
      { hanzi: "近", pinyin: "jìn", english: "near, close" },
      { hanzi: "离", pinyin: "lí", english: "apart from (distance marker)" },
      { hanzi: "从", pinyin: "cóng", english: "from" },
      { hanzi: "到", pinyin: "dào", english: "to; to arrive" },
      { hanzi: "小时", pinyin: "xiǎoshí", english: "hour" },
      { hanzi: "票", pinyin: "piào", english: "ticket" },
      { hanzi: "机场", pinyin: "jīchǎng", english: "airport" },
      { hanzi: "火车站", pinyin: "huǒchēzhàn", english: "train station" },
      { hanzi: "过", pinyin: "guo", english: "experience particle (have ever…)" },
      { hanzi: "旅行", pinyin: "lǚxíng", english: "to travel; trip" },
      { hanzi: "度假", pinyin: "dùjià", english: "to go on holiday" },
      { hanzi: "暑假", pinyin: "shǔjià", english: "summer holidays" },
      { hanzi: "打算", pinyin: "dǎsuàn", english: "to plan to" },
    ],
    patterns: [
      {
        pattern: "Subject + 坐/骑 + vehicle + 去 + place",
        example: {
          hanzi: "我坐地铁去学校。",
          pinyin: "Wǒ zuò dìtiě qù xuéxiào.",
          english: "I go to school by MRT.",
        },
      },
      {
        pattern: "你怎么去 + place？",
        example: {
          hanzi: "你怎么去机场？",
          pinyin: "Nǐ zěnme qù jīchǎng?",
          english: "How do you get to the airport?",
        },
      },
      {
        pattern: "A + 离 + B + 很近/很远",
        example: {
          hanzi: "学校离我家很近。",
          pinyin: "Xuéxiào lí wǒ jiā hěn jìn.",
          english: "School is very close to my home.",
        },
      },
      {
        pattern: "从 A 到 B + 坐 X + 要 + duration",
        example: {
          hanzi: "从新加坡到北京，坐飞机要六个小时。",
          pinyin: "Cóng Xīnjiāpō dào Běijīng, zuò fēijī yào liù ge xiǎoshí.",
          english: "From Singapore to Beijing, the plane takes six hours.",
        },
      },
      {
        pattern: "Subject + verb + 过 + place",
        example: { hanzi: "我去过中国。", pinyin: "Wǒ qùguo Zhōngguó.", english: "I have been to China." },
      },
      {
        pattern: "打算 + verb phrase",
        example: {
          hanzi: "我打算明年去英国。",
          pinyin: "Wǒ dǎsuàn míngnián qù Yīngguó.",
          english: "I plan to go to the UK next year.",
        },
      },
    ],
    mnemonics: [
      { hanzi: "骑", tip: "The left side is 马 (horse) — you 骑 anything you straddle like a horse: bikes, motorbikes, camels." },
      { hanzi: "飞", tip: "飞 looks like a bird's wing catching the wind — 飞机 is the 'flying machine'." },
      { hanzi: "站", tip: "立 (to stand) on the left: a 车站 is where you STAND and wait for the bus or train." },
      { hanzi: "过", tip: "过 means 'to cross over'. An experience is something you've crossed through — 去过 = the trip is behind you." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "trav-quiz-mcq-q01",
        question: "What does {{飞机|fēijī}} mean?",
        options: ["Train", "Aeroplane", "Boat", "Bicycle"],
        answerIndex: 1,
        explanation:
          "{{飞|fēi}} means 'to fly' and {{机|jī}} means 'machine' — a plane is literally a 'flying machine'.",
        guideRef: "坐 or 骑? The horse-riding rule for vehicles",
        difficulty: "warmup",
      },
      {
        id: "trav-quiz-mcq-q02",
        question: "Which verb goes with {{自行车|zìxíngchē|bicycle}}?",
        options: ["{{坐|zuò}}", "{{骑|qí}}", "{{开|kāi}}", "{{走|zǒu}}"],
        answerIndex: 1,
        explanation:
          "You straddle a bicycle with one leg on each side, so it takes {{骑|qí|ride astride}} — the verb with the horse 马 inside. 坐 is for vehicles you sit inside.",
        guideRef: "坐 or 骑? The horse-riding rule for vehicles",
        difficulty: "warmup",
        strategy: "Find the pattern",
      },
      {
        id: "trav-quiz-mcq-q03",
        question: "Choose the correct way to say 'I go to school by MRT.'",
        options: [
          "{{我去学校坐地铁。|Wǒ qù xuéxiào zuò dìtiě.}}",
          "{{我坐地铁去学校。|Wǒ zuò dìtiě qù xuéxiào.}}",
          "{{坐地铁我去学校。|Zuò dìtiě wǒ qù xuéxiào.}}",
          "{{我去坐地铁学校。|Wǒ qù zuò dìtiě xuéxiào.}}",
        ],
        answerIndex: 1,
        explanation:
          "The sentence follows the journey's timeline: first you board ({{坐地铁|zuò dìtiě}}), then you arrive ({{去学校|qù xuéxiào}}). Method before destination — 我去学校坐地铁 would mean you go to school in order to ride the MRT!",
        guideRef: "怎么去？ Building the transport sandwich",
        difficulty: "core",
        hints: [
          "Which happens first: boarding the MRT or arriving at school?",
          "Chinese narrates events in order: subject + transport + 去 + place.",
        ],
        strategy: "Follow the timeline",
      },
      {
        id: "trav-quiz-mcq-q04",
        question: "{{你怎么去机场？|Nǐ zěnme qù jīchǎng?}} — what is this question asking?",
        options: [
          "When are you going to the airport?",
          "How do you get to the airport?",
          "Where is the airport?",
          "Why are you going to the airport?",
        ],
        answerIndex: 1,
        explanation:
          "{{怎么|zěnme}} asks 'how'. It sits exactly where the answer's transport phrase will go: 我坐出租车去机场.",
        guideRef: "怎么去？ Building the transport sandwich",
        difficulty: "core",
        hints: ["怎么 is the question word — check the guide for its meaning."],
      },
      {
        id: "trav-quiz-mcq-q05",
        question: "What does {{学校离我家很近。|Xuéxiào lí wǒ jiā hěn jìn.}} mean?",
        options: [
          "School is far from my home.",
          "School is very close to my home.",
          "I go from home to school.",
          "My home is inside the school.",
        ],
        answerIndex: 1,
        explanation:
          "{{离|lí}} lays a ruler between 学校 and 我家, and {{近|jìn}} says the gap is small — very close. {{远|yuǎn}} would make it far.",
        guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
        difficulty: "core",
        hints: ["离 measures the gap between two places.", "Is the adjective at the end 远 (far) or 近 (near)?"],
      },
      {
        id: "trav-quiz-mcq-q06",
        question:
          "{{从新加坡到香港，坐飞机要四个小时。|Cóng Xīnjiāpō dào Xiānggǎng, zuò fēijī yào sì ge xiǎoshí.}} How long is the flight?",
        options: ["Four hours", "Six hours", "Ten hours", "Fourteen hours"],
        answerIndex: 0,
        explanation:
          "{{四|sì}} is four and {{要|yào}} here means 'takes/needs' — the journey requires four hours. 十四 would be fourteen.",
        guideRef: "From A to B: 从…到… and how long it takes",
        difficulty: "core",
        hints: ["Find the number before 个小时.", "四 = 4; 十四 = 14 — check for a 十."],
      },
      {
        id: "trav-quiz-mcq-q07",
        question: "What does {{我去过中国。|Wǒ qùguo Zhōngguó.}} mean?",
        options: [
          "I am going to China.",
          "I have been to China.",
          "I want to go to China.",
          "I live in China.",
        ],
        answerIndex: 1,
        explanation:
          "{{过|guo}} straight after 去 stamps the verb 'experienced': at some point in my life, the trip happened. Without 过, 我去中国 is a plan or a present fact.",
        guideRef: "Holidays and the been-there particle 过",
        difficulty: "core",
        hints: ["Look for the tiny particle after 去 — what does it stamp on the verb?"],
      },
      {
        id: "trav-quiz-mcq-q08",
        question:
          "Challenge: {{骆驼|luòtuo|camel}} is a brand-new word. Which verb would Chinese use for travelling on a camel?",
        options: ["{{坐|zuò}}", "{{骑|qí}}", "{{开|kāi}}", "{{来|lái}}"],
        answerIndex: 1,
        explanation:
          "Picture the action: on a camel you sit astride, one leg each side — exactly like a horse or bike, so it's {{骑骆驼|qí luòtuo}}. The 坐/骑 rule works even for vehicles (and animals!) you've never met.",
        guideRef: "坐 or 骑? The horse-riding rule for vehicles",
        difficulty: "challenge",
        strategy: "Find the pattern",
        hints: [
          "Don't look for the word — picture how your body sits on a camel.",
          "Is it more like a taxi seat, or more like a horse?",
        ],
      },
      {
        id: "trav-quiz-mcq-q09",
        question: "A sign at the MRT exit says {{往左拐|wǎng zuǒ guǎi}}. What should you do?",
        options: ["Go straight ahead", "Turn left", "Turn right", "Go back"],
        answerIndex: 1,
        explanation:
          "{{往|wǎng}} = towards, {{左|zuǒ}} = left, {{拐|guǎi}} = turn: 'towards the left, turn'. 往右拐 would be turn right; 往前走 is go straight on.",
        guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
        difficulty: "core",
        hints: ["Break it into three blocks: 往 + direction + verb."],
      },
      {
        id: "trav-quiz-mcq-q10",
        question: "Challenge: which sentence correctly says 'I have never been to France'?",
        options: [
          "{{我不去过法国。|Wǒ bú qùguo Fǎguó.}}",
          "{{我没去过法国。|Wǒ méi qùguo Fǎguó.}}",
          "{{我没有去法国。|Wǒ méiyǒu qù Fǎguó.}}",
          "{{我去过没法国。|Wǒ qùguo méi Fǎguó.}}",
        ],
        answerIndex: 1,
        explanation:
          "Experiences negate with {{没|méi}}, and {{过|guo}} must stay: 没去过 = 'never been'. 不去过 is always wrong (不 denies wants and habits, not completed experiences), and 我没有去法国 merely says 'I didn't go' — without 过 it loses the 'never in my life' meaning.",
        guideRef: "Holidays and the been-there particle 过",
        difficulty: "challenge",
        hints: [
          "Two checks: which negative word, and does 过 survive?",
          "没 denies completed/experienced things; 过 marks the experience — you need both.",
        ],
        strategy: "One tiny word, big meaning shift",
      },
    ],
    qa: [
      {
        id: "trav-quiz-qa-q01",
        question: "Translate into Chinese: 'I go to school by MRT.' (Characters or pinyin.)",
        modelAnswer: "{{我坐地铁去学校。|Wǒ zuò dìtiě qù xuéxiào.|I go to school by MRT.}}",
        markScheme: [
          "Subject {{我|wǒ}} first",
          "{{坐|zuò}} (not 骑) with {{地铁|dìtiě}}",
          "Transport phrase BEFORE {{去学校|qù xuéxiào}}",
          "Sentence ends with the destination",
        ],
        commonError:
          "Copying English order: 我去学校坐地铁 ✗ — that means you go to school in order to ride the MRT.",
        guideRef: "怎么去？ Building the transport sandwich",
        difficulty: "warmup",
        hints: ["Sandwich shape: subject + transport + 去 + place."],
        solutions: [
          {
            label: "Build from the timeline (recommended)",
            steps: [
              "List the events in order: (1) board the MRT, (2) arrive at school.",
              "Write them in that order: 坐地铁 then 去学校.",
              "Add the subject: 我坐地铁去学校。",
            ],
          },
          {
            label: "Echo the question",
            steps: [
              "Imagine being asked: 你怎么去学校？",
              "怎么 sits in the answer's seat — swap it for the transport phrase 坐地铁.",
              "你→我 gives 我坐地铁去学校。",
            ],
          },
        ],
      },
      {
        id: "trav-quiz-qa-q02",
        question:
          "Your friend texts: {{暑假我们去泰国度假。从新加坡到泰国，坐飞机要两个小时。我们也打算坐船去海岛。|Shǔjià wǒmen qù Tàiguó dùjià. Cóng Xīnjiāpō dào Tàiguó, zuò fēijī yào liǎng ge xiǎoshí. Wǒmen yě dǎsuàn zuò chuán qù hǎidǎo.}} ({{海岛|hǎidǎo}} = island.) Answer in English: (a) Where are they going, and when? (b) How long is the flight? (c) What else do they plan to do?",
        modelAnswer:
          "(a) They're going to Thailand on holiday in the summer holidays. (b) Two hours from Singapore. (c) They also plan to take a boat to an island.",
        markScheme: [
          "Destination: Thailand ({{泰国|Tàiguó}}), in the summer holidays ({{暑假|shǔjià}})",
          "Flight time: two hours ({{两个小时|liǎng ge xiǎoshí}})",
          "Plan: take a boat ({{坐船|zuò chuán}}) to an island",
        ],
        commonError:
          "Reading 两个小时 as 'two o'clock' — 两点 is the time on a clock; 两个小时 is a two-hour duration.",
        guideRef: "From A to B: 从…到… and how long it takes",
        difficulty: "core",
        hints: [
          "Scan for the frames you know: 从…到…, 要…个小时, 打算….",
          "两 = two; 个小时 makes it a duration, not a clock time.",
        ],
      },
      {
        id: "trav-quiz-qa-q03",
        question:
          "Write two Chinese sentences: how you get to school, and why — using {{因为|yīnwèi|because}}. (Characters or pinyin; invent details if you like.)",
        modelAnswer:
          "{{我坐公共汽车去学校，因为学校离我家很远。|Wǒ zuò gōnggòng qìchē qù xuéxiào, yīnwèi xuéxiào lí wǒ jiā hěn yuǎn.|I take the bus to school, because school is far from my home.}}",
        markScheme: [
          "Correct verb for the vehicle chosen ({{坐|zuò}} or {{骑|qí}})",
          "Transport phrase before {{去学校|qù xuéxiào}}",
          "{{因为|yīnwèi}} introduces the reason",
          "Reason uses topic language, e.g. {{离…很远/很近|lí… hěn yuǎn/hěn jìn}}",
        ],
        commonError:
          "我去学校坐公共汽车 ✗ — English order. Transport goes before the destination.",
        guideRef: "怎么去？ Building the transport sandwich",
        difficulty: "core",
        hints: [
          "Sentence 1: subject + 坐/骑 + vehicle + 去学校.",
          "Sentence 2: 因为 + a 离 sentence (学校离我家很远/很近).",
        ],
      },
      {
        id: "trav-quiz-qa-q04",
        question:
          "A classmate is confused: '{{我去中国|wǒ qù Zhōngguó}} and {{我去过中国|wǒ qùguo Zhōngguó}} look nearly the same!' Explain the difference, where 过 goes, and how to say the negative ('I have never been').",
        modelAnswer:
          "我去中国 means 'I go / am going to China' — now or in the future. Adding {{过|guo}} straight after the verb stamps it as a life experience: 我去过中国 = 'I HAVE BEEN to China at some point.' 过 always sits immediately after the verb. The negative uses {{没|méi}} and keeps 过: {{我没去过中国|wǒ méi qùguo Zhōngguó|I have never been to China}} — never 不去过.",
        markScheme: [
          "去 = go/going (present or future)",
          "去过 = have been / life experience in the past",
          "过 goes immediately after the verb",
          "Negative: 没 + verb + 过 (没去过), NOT 不去过",
        ],
        commonError:
          "Writing 不去过 ✗ — 不 denies wants and habits; completed experiences negate with 没.",
        guideRef: "Holidays and the been-there particle 过",
        difficulty: "challenge",
        strategy: "One tiny word, big meaning shift",
        hints: [
          "Think of 过 as a 'been there' stamp in a passport.",
          "Which negative word pairs with things that are finished — 不 or 没?",
        ],
      },
      {
        id: "trav-quiz-qa-q05",
        question:
          "Translate into Chinese: 'From my home to the airport, the taxi takes one hour.' (Characters or pinyin.)",
        modelAnswer:
          "{{从我家到机场，坐出租车要一个小时。|Cóng wǒ jiā dào jīchǎng, zuò chūzūchē yào yí ge xiǎoshí.|From my home to the airport, the taxi takes one hour.}}",
        markScheme: [
          "Route frame {{从|cóng}}…{{到|dào}}… with 我家 then 机场",
          "{{坐出租车|zuò chūzūchē}} for 'the taxi' (as transport)",
          "{{要|yào}} for 'takes'",
          "{{一个小时|yí ge xiǎoshí}} — 一 said as yí before 个",
        ],
        commonError:
          "Using 离 for the journey ✗ — 离 is the ruler (static distance); a route with a travel time needs 从…到.",
        guideRef: "From A to B: 从…到… and how long it takes",
        difficulty: "core",
        hints: [
          "Start with the route frame: 从 A 到 B.",
          "Then transport + 要 + duration.",
        ],
        solutions: [
          {
            label: "Frame first (recommended)",
            steps: [
              "Lay the route: 从我家到机场.",
              "State the transport: 坐出租车.",
              "Price it in time with 要: 要一个小时.",
              "Assemble: 从我家到机场，坐出租车要一个小时。",
            ],
          },
          {
            label: "Copy a model sentence",
            steps: [
              "Recall the guide's model: 从新加坡到北京，坐飞机要六个小时。",
              "Swap the places: 新加坡→我家, 北京→机场.",
              "Swap the vehicle and the number: 飞机→出租车, 六→一 (tone change: yí ge).",
            ],
          },
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "trav-mcq-a",
        title: "Paper A — Getting around",
        description: "Vehicles, 坐/骑, the transport sandwich, directions and 离.",
        questions: [
          {
            id: "trav-mcq-a-q01",
            question: "What does {{公共汽车|gōnggòng qìchē}} mean?",
            options: ["Taxi", "Bus", "Train", "Boat"],
            answerIndex: 1,
            explanation:
              "公共 means 'public' and 汽车 'motor vehicle' — the public vehicle is the bus. A taxi is 出租车 ('rent-out vehicle').",
            guideRef: "坐 or 骑? The horse-riding rule for vehicles",
            difficulty: "warmup",
          },
          {
            id: "trav-mcq-a-q02",
            question: "In Singapore you take the MRT into town. Which Chinese word is the MRT?",
            options: ["{{火车|huǒchē}}", "{{地铁|dìtiě}}", "{{飞机|fēijī}}", "{{出租车|chūzūchē}}"],
            answerIndex: 1,
            explanation:
              "地铁 — literally 'ground iron', the underground railway — is the MRT. 火车 is an ordinary (overground) train.",
            guideRef: "坐 or 骑? The horse-riding rule for vehicles",
            difficulty: "warmup",
          },
          {
            id: "trav-mcq-a-q03",
            question: "Which of these vehicles takes the verb {{骑|qí}}?",
            options: ["{{船|chuán}}", "{{出租车|chūzūchē}}", "{{摩托车|mótuōchē}}", "{{飞机|fēijī}}"],
            answerIndex: 2,
            explanation:
              "You straddle a motorbike like a horse, so 骑摩托车. Boats, taxis and planes are sit-inside vehicles: 坐.",
            guideRef: "坐 or 骑? The horse-riding rule for vehicles",
            difficulty: "warmup",
            strategy: "Find the pattern",
          },
          {
            id: "trav-mcq-a-q04",
            question: "What does {{开车|kāichē}} mean?",
            options: ["To drive (a car)", "To take the bus", "To ride a bike", "To buy a ticket"],
            answerIndex: 0,
            explanation:
              "开 means 'to operate/drive' — 开车 is driving yourself. As a passenger in a car or taxi you 坐.",
            guideRef: "坐 or 骑? The horse-riding rule for vehicles",
            difficulty: "warmup",
          },
          {
            id: "trav-mcq-a-q05",
            question: "Fill the blank: {{我|wǒ}}___{{自行车去公园。|zìxíngchē qù gōngyuán.|…bicycle to the park.}}",
            options: ["{{坐|zuò}}", "{{骑|qí}}", "{{开|kāi}}", "{{到|dào}}"],
            answerIndex: 1,
            explanation:
              "A bicycle is straddled, so it must be 骑: 我骑自行车去公园 — I cycle to the park.",
            guideRef: "坐 or 骑? The horse-riding rule for vehicles",
            difficulty: "core",
            hints: ["How does your body sit on a bicycle — inside a seat, or astride?"],
          },
          {
            id: "trav-mcq-a-q06",
            question: "Choose the correct way to say 'She goes to the airport by taxi.'",
            options: [
              "{{她去机场坐出租车。|Tā qù jīchǎng zuò chūzūchē.}}",
              "{{她坐出租车去机场。|Tā zuò chūzūchē qù jīchǎng.}}",
              "{{坐她出租车去机场。|Zuò tā chūzūchē qù jīchǎng.}}",
              "{{她坐去出租车机场。|Tā zuò qù chūzūchē jīchǎng.}}",
            ],
            answerIndex: 1,
            explanation:
              "Timeline order: first board the taxi (坐出租车), then arrive (去机场). Method before destination.",
            guideRef: "怎么去？ Building the transport sandwich",
            difficulty: "core",
            hints: ["Which event happens first on the journey?", "Subject + transport + 去 + place."],
            strategy: "Follow the timeline",
          },
          {
            id: "trav-mcq-a-q07",
            question: "A friend asks {{你怎么去学校？|Nǐ zěnme qù xuéxiào?}} Which reply actually answers the question?",
            options: [
              "{{我七点去学校。|Wǒ qī diǎn qù xuéxiào.}}",
              "{{我骑自行车去学校。|Wǒ qí zìxíngchē qù xuéxiào.}}",
              "{{学校很大。|Xuéxiào hěn dà.}}",
              "{{我去过学校。|Wǒ qùguo xuéxiào.}}",
            ],
            answerIndex: 1,
            explanation:
              "怎么 asks HOW, so the answer must name a means of transport: 我骑自行车去学校. The others give a time, a description and an experience.",
            guideRef: "怎么去？ Building the transport sandwich",
            difficulty: "core",
            hints: ["怎么 = how. Which option contains a vehicle?"],
          },
          {
            id: "trav-mcq-a-q08",
            question: "What does {{火车站在哪儿？|Huǒchēzhàn zài nǎr?}} ask?",
            options: [
              "When does the train leave?",
              "Where is the train station?",
              "How much is a train ticket?",
              "Is the train station far?",
            ],
            answerIndex: 1,
            explanation:
              "在哪儿 asks for a location: 'the train station is WHERE?'. Like all Chinese question words, 哪儿 sits where the answer will go.",
            guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
            difficulty: "core",
            hints: ["Break it up: 火车站 + 在 + 哪儿."],
          },
          {
            id: "trav-mcq-a-q09",
            question: "{{往前走，然后往右拐。|Wǎng qián zǒu, ránhòu wǎng yòu guǎi.}} What are these directions?",
            options: [
              "Turn left, then go straight ahead.",
              "Go straight ahead, then turn right.",
              "Turn right, then turn left.",
              "Go back, then turn right.",
            ],
            answerIndex: 1,
            explanation:
              "往前走 = walk towards the front (straight on); 然后 = then; 往右拐 = turn towards the right.",
            guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
            difficulty: "core",
            hints: ["前 = front, 右 = right.", "往 + direction + verb: read each block in turn."],
          },
          {
            id: "trav-mcq-a-q10",
            question: "What does {{我家在地铁站旁边。|Wǒ jiā zài dìtiězhàn pángbiān.}} mean?",
            options: [
              "My home is far from the MRT station.",
              "My home is behind the MRT station.",
              "My home is next to the MRT station.",
              "The MRT station is inside my home.",
            ],
            answerIndex: 2,
            explanation:
              "旁边 means 'beside/next to' and follows its landmark: 地铁站旁边 = at the MRT station's side.",
            guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
            difficulty: "core",
            hints: ["旁边 comes AFTER the landmark it describes."],
          },
          {
            id: "trav-mcq-a-q11",
            question: "Challenge: which word completes {{机场|jīchǎng}}___{{我家很远。|wǒ jiā hěn yuǎn.|The airport is far from my home.}}",
            options: ["{{从|cóng}}", "{{到|dào}}", "{{离|lí}}", "{{往|wǎng}}"],
            answerIndex: 2,
            explanation:
              "This measures a static gap — nobody is travelling — so it needs the ruler word 离: 机场离我家很远. 从 only works in the journey frame 从…到….",
            guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
            difficulty: "challenge",
            hints: [
              "Is anything moving in this sentence, or is it just a distance?",
              "Ruler → 离; route → 从…到.",
            ],
            strategy: "One tool per job — ruler vs route",
          },
          {
            id: "trav-mcq-a-q12",
            question:
              "Challenge: in Thailand you might travel on an {{大象|dàxiàng|elephant}} — a word you've never learned a verb for. Predict the verb Chinese uses.",
            options: ["{{坐|zuò}}", "{{骑|qí}}", "{{开|kāi}}", "{{拐|guǎi}}"],
            answerIndex: 1,
            explanation:
              "On an elephant's back you sit astride, like on a horse — so Chinese says 骑大象. The 坐/骑 rule is about body position, which is why it extends to animals you've never studied.",
            guideRef: "坐 or 骑? The horse-riding rule for vehicles",
            difficulty: "challenge",
            strategy: "Find the pattern",
            hints: ["Don't translate — picture your legs.", "Horse, bike, motorbike… does an elephant join that club?"],
          },
          {
            id: "trav-mcq-a-q13",
            question:
              "Challenge: what is the difference between {{你在哪儿？|Nǐ zài nǎr?}} and {{你去哪儿？|Nǐ qù nǎr?}}",
            options: [
              "No difference — both mean 'where are you?'",
              "在哪儿 asks where you ARE now; 去哪儿 asks where you are GOING",
              "去哪儿 asks where you are now; 在哪儿 asks where you are going",
              "Both ask where you have been",
            ],
            answerIndex: 1,
            explanation:
              "The verb does the work: 在 = to be at (location now), 去 = to go (destination). 哪儿 just marks the unknown place in each. Swap the verb, swap the meaning.",
            guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
            difficulty: "challenge",
            hints: ["Compare the verbs, not the question word.", "在 = be at; 去 = go to."],
            strategy: "Build, don't memorise",
          },
        ],
      },
      {
        id: "trav-mcq-b",
        title: "Paper B — Journeys & holidays",
        description: "从…到…, journey times, tickets and stations, countries, 过 and 打算.",
        questions: [
          {
            id: "trav-mcq-b-q01",
            question: "What is a {{机场|jīchǎng}}?",
            options: ["A train station", "A bus stop", "An airport", "A hotel"],
            answerIndex: 2,
            explanation:
              "机 from 飞机 (plane) + 场 (open ground) = the plane-field: an airport. A train station is 火车站.",
            guideRef: "From A to B: 从…到… and how long it takes",
            difficulty: "warmup",
          },
          {
            id: "trav-mcq-b-q02",
            question: "Which country is {{新加坡|Xīnjiāpō}}?",
            options: ["China", "Singapore", "Japan", "Thailand"],
            answerIndex: 1,
            explanation:
              "新加坡 is Singapore — a sound-borrowing of the name. 中国 is China, 日本 Japan, 泰国 Thailand.",
            guideRef: "Holidays and the been-there particle 过",
            difficulty: "warmup",
          },
          {
            id: "trav-mcq-b-q03",
            question: "What does {{暑假|shǔjià}} mean?",
            options: ["Winter holiday", "Summer holidays", "The weekend", "New Year"],
            answerIndex: 1,
            explanation:
              "暑 means summer heat and 假 means holiday — the long summer break.",
            guideRef: "Holidays and the been-there particle 过",
            difficulty: "warmup",
          },
          {
            id: "trav-mcq-b-q04",
            question: "What does {{从北京到上海|cóng Běijīng dào Shànghǎi}} mean?",
            options: [
              "From Shanghai to Beijing",
              "From Beijing to Shanghai",
              "Beijing and Shanghai are close",
              "Go to Beijing, then to Shanghai",
            ],
            answerIndex: 1,
            explanation:
              "从 = from, 到 = to, in that order: from Beijing to Shanghai. Watch the direction — the frame reads left to right.",
            guideRef: "From A to B: 从…到… and how long it takes",
            difficulty: "core",
            hints: ["从 marks the start; 到 marks the end."],
          },
          {
            id: "trav-mcq-b-q05",
            question:
              "{{从新加坡到马来西亚，坐火车要七个小时。|Cóng Xīnjiāpō dào Mǎláixīyà, zuò huǒchē yào qī ge xiǎoshí.}} How long does the train take?",
            options: ["Seven hours", "Two hours", "Nine hours", "Seventeen hours"],
            answerIndex: 0,
            explanation:
              "七 = seven, and 要 means the journey 'requires' that long: seven hours by train. 十七 would be seventeen.",
            guideRef: "From A to B: 从…到… and how long it takes",
            difficulty: "core",
            hints: ["The number sits just before 个小时."],
          },
          {
            id: "trav-mcq-b-q06",
            question: "You buy a {{飞机票|fēijī piào}} at Changi. What have you bought?",
            options: ["A boarding gate number", "A plane ticket", "A map of the airport", "A train ticket"],
            answerIndex: 1,
            explanation:
              "Chinese builds compounds like Lego: 飞机 (plane) + 票 (ticket) = plane ticket. 火车票 is a train ticket by the same recipe.",
            guideRef: "From A to B: 从…到… and how long it takes",
            difficulty: "core",
            hints: ["票 = ticket. What kind is stuck on the front?"],
          },
          {
            id: "trav-mcq-b-q07",
            question: "What does {{我去过香港。|Wǒ qùguo Xiānggǎng.}} mean?",
            options: [
              "I am going to Hong Kong.",
              "I have been to Hong Kong.",
              "I want to go to Hong Kong.",
              "I am in Hong Kong now.",
            ],
            answerIndex: 1,
            explanation:
              "过 after 去 is the 'been there' stamp: at some point in my life I went to Hong Kong. Without 过 it would be a plan or present statement.",
            guideRef: "Holidays and the been-there particle 过",
            difficulty: "core",
            hints: ["Spot the particle straight after the verb."],
          },
          {
            id: "trav-mcq-b-q08",
            question: "How do you say 'I have never been to the USA'?",
            options: [
              "{{我不去美国。|Wǒ bú qù Měiguó.}}",
              "{{我没去过美国。|Wǒ méi qùguo Měiguó.}}",
              "{{我不去过美国。|Wǒ bú qùguo Měiguó.}}",
              "{{我没有美国。|Wǒ méiyǒu Měiguó.}}",
            ],
            answerIndex: 1,
            explanation:
              "Never-experienced = 没 + verb + 过: 我没去过美国. 我不去美国 is a refusal ('I'm not going'), 不去过 is ungrammatical, and 我没有美国 says you don't own the USA!",
            guideRef: "Holidays and the been-there particle 过",
            difficulty: "core",
            hints: ["Keep 过, and choose the right negative word.", "没 pairs with completed experiences; 不 with refusals and habits."],
          },
          {
            id: "trav-mcq-b-q09",
            question: "What does {{我打算明年去英国。|Wǒ dǎsuàn míngnián qù Yīngguó.}} mean?",
            options: [
              "I went to the UK last year.",
              "I plan to go to the UK next year.",
              "I must go to the UK this year.",
              "I have been to the UK.",
            ],
            answerIndex: 1,
            explanation:
              "打算 = plan to, 明年 = next year: a future intention. 去年 (last year) plus 过 would be needed for the past options.",
            guideRef: "Holidays and the been-there particle 过",
            difficulty: "core",
            hints: ["打算 announces an intention.", "明年 or 去年 — which is which? 明天 (tomorrow) shares its 明."],
          },
          {
            id: "trav-mcq-b-q10",
            question:
              "Your classmate from Shanghai says {{我暑假回国。|Wǒ shǔjià huí guó.}} What is she doing this summer?",
            options: [
              "Visiting a brand-new country",
              "Returning to China, her home country",
              "Staying in Singapore",
              "Going home straight after school today",
            ],
            answerIndex: 1,
            explanation:
              "回 means 'return to where you belong': 回国 = go back to your own country — for her, China. 回家 would just be going home to her house.",
            guideRef: "怎么去？ Building the transport sandwich",
            difficulty: "core",
            hints: ["回 = return; 国 = country. Whose country does one 'return' to?"],
          },
          {
            id: "trav-mcq-b-q11",
            question: "Challenge: which sentence is correct Chinese for 'School is very close to my home'?",
            options: [
              "{{学校从我家很近。|Xuéxiào cóng wǒ jiā hěn jìn.}}",
              "{{学校离我家很近。|Xuéxiào lí wǒ jiā hěn jìn.}}",
              "{{从学校离我家很近。|Cóng xuéxiào lí wǒ jiā hěn jìn.}}",
              "{{学校到我家很近。|Xuéxiào dào wǒ jiā hěn jìn.}}",
            ],
            answerIndex: 1,
            explanation:
              "A static distance needs the ruler word 离: A 离 B 很近. 从 and 到 belong to the journey frame 从…到… and can't measure a gap on their own.",
            guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
            difficulty: "challenge",
            hints: ["Nobody is travelling in this sentence.", "Ruler → 离; route → 从…到."],
            strategy: "One tool per job — ruler vs route",
          },
          {
            id: "trav-mcq-b-q12",
            question: "Challenge: decode {{我去泰国看爷爷。|Wǒ qù Tàiguó kàn yéye.}} ({{爷爷|yéye}} = grandpa.)",
            options: [
              "I'm going to Thailand to see my grandpa.",
              "My grandpa is going to Thailand.",
              "I saw my grandpa in Thailand last year.",
              "Grandpa is coming from Thailand to see me.",
            ],
            answerIndex: 0,
            explanation:
              "Verb chains run in event order: first 去泰国 (go to Thailand), then 看爷爷 (see grandpa) — so the second verb is the purpose of the trip. No word for 'to' is needed.",
            guideRef: "怎么去？ Building the transport sandwich",
            difficulty: "challenge",
            hints: ["Who is the subject of both verbs?", "Read the two verbs as a timeline: go…, then see…."],
            strategy: "Follow the timeline",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "trav-qa-a",
        title: "Paper A — Getting there",
        description: "Transport verbs, the sandwich sentence, directions and distances.",
        questions: [
          {
            id: "trav-qa-a-q01",
            question: "Translate into Chinese: 'I ride a bicycle to school.' (Characters or pinyin.)",
            modelAnswer: "{{我骑自行车去学校。|Wǒ qí zìxíngchē qù xuéxiào.|I cycle to school.}}",
            markScheme: [
              "{{骑|qí}} chosen (a bicycle is straddled)",
              "Transport phrase before {{去学校|qù xuéxiào}}",
              "Correct order: subject + 骑自行车 + 去学校",
            ],
            commonError: "坐自行车 ✗ — you don't sit inside a bike; astride vehicles take 骑.",
            guideRef: "坐 or 骑? The horse-riding rule for vehicles",
            difficulty: "warmup",
            hints: ["Which verb for a straddled vehicle?", "Then the sandwich: transport before destination."],
          },
          {
            id: "trav-qa-a-q02",
            question: "Translate into Chinese: 'The MRT station is next to my home.'",
            modelAnswer: "{{地铁站在我家旁边。|Dìtiězhàn zài wǒ jiā pángbiān.|The MRT station is next to my home.}}",
            markScheme: [
              "{{地铁站|dìtiězhàn}} as the subject",
              "{{在|zài}} before the location",
              "{{旁边|pángbiān}} placed AFTER {{我家|wǒ jiā}}",
            ],
            commonError:
              "English order 在旁边我家 ✗ — 旁边 follows its landmark: 我家旁边 = 'my home's side'.",
            guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
            difficulty: "core",
            hints: ["Shape: A 在 B 旁边.", "旁边 comes after the landmark, not before."],
          },
          {
            id: "trav-qa-a-q03",
            question:
              "Answer in a full Chinese sentence: {{你怎么去学校？|Nǐ zěnme qù xuéxiào?}} (Any true or invented answer.)",
            modelAnswer:
              "{{我坐公共汽车去学校。|Wǒ zuò gōnggòng qìchē qù xuéxiào.|I take the bus to school.}}",
            markScheme: [
              "Subject {{我|wǒ}}",
              "Verb matches the vehicle (坐 for bus/MRT/car, 骑 for bike)",
              "Transport phrase before 去学校",
              "Full sentence ending at the destination",
            ],
            commonError: "我去学校坐公共汽车 ✗ — transport must come before 去学校.",
            guideRef: "怎么去？ Building the transport sandwich",
            difficulty: "core",
            hints: ["怎么 sits in the answer's seat — swap it out.", "Pick a vehicle, check 坐 or 骑, keep the sandwich order."],
            solutions: [
              {
                label: "Echo the question (recommended)",
                steps: [
                  "Take 你怎么去学校？ and swap 你→我.",
                  "Replace 怎么 with your transport phrase, e.g. 坐公共汽车.",
                  "Result: 我坐公共汽车去学校。 — question words sit in the answer's seat.",
                ],
              },
              {
                label: "Build from the pattern",
                steps: [
                  "Pattern: subject + 坐/骑 + vehicle + 去 + place.",
                  "我 + 坐 + 公共汽车 + 去 + 学校 → 我坐公共汽车去学校。",
                ],
              },
            ],
          },
          {
            id: "trav-qa-a-q04",
            question:
              "A tourist at the MRT station is looking for the bank. Give directions in Chinese: 'Go straight ahead, then turn left. The bank is next to the school.' ({{银行|yínháng}} = bank, {{然后|ránhòu}} = then.)",
            modelAnswer:
              "{{往前走，然后往左拐。银行在学校旁边。|Wǎng qián zǒu, ránhòu wǎng zuǒ guǎi. Yínháng zài xuéxiào pángbiān.|Go straight ahead, then turn left. The bank is next to the school.}}",
            markScheme: [
              "{{往前走|wǎng qián zǒu}} for 'go straight ahead'",
              "{{往左拐|wǎng zuǒ guǎi}} for 'turn left' (direction before 拐)",
              "{{然后|ránhòu}} linking the two instructions",
              "银行 + 在 + 学校旁边 for the position sentence",
            ],
            commonError:
              "拐左 or 拐往左 ✗ — the direction goes inside the 往-phrase, BEFORE the verb: 往左拐.",
            guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
            difficulty: "core",
            hints: [
              "Direction machine: 往 + direction + 走/拐.",
              "Position sentence: A 在 B 旁边.",
            ],
          },
          {
            id: "trav-qa-a-q05",
            question:
              "Using {{离|lí}}, write a Chinese sentence saying that school is very close to your home.",
            modelAnswer: "{{学校离我家很近。|Xuéxiào lí wǒ jiā hěn jìn.|School is very close to my home.}}",
            markScheme: [
              "Frame A + 离 + B in order (学校离我家 or 我家离学校)",
              "{{很近|hěn jìn}} at the end",
              "No {{是|shì}} anywhere",
            ],
            commonError:
              "Adding 是 (学校是离我家很近 ✗) — like 我很好, the adjective connects directly with 很.",
            guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
            difficulty: "core",
            hints: ["Ruler frame: A 离 B + 很近.", "What did the ages topic teach about 是 before adjectives?"],
            solutions: [
              {
                label: "Ruler frame",
                steps: [
                  "Lay the ruler: 学校 离 我家.",
                  "Read the measurement: 很近.",
                  "学校离我家很近。",
                ],
              },
              {
                label: "Swap the ends",
                steps: [
                  "Distance is symmetric — measuring from home works too.",
                  "我家离学校很近。 is equally correct; both earn full marks.",
                ],
              },
            ],
          },
          {
            id: "trav-qa-a-q06",
            question:
              "Challenge: explain the rule that decides between {{坐|zuò}} and {{骑|qí}}, then predict the verb for (a) {{马|mǎ|horse}} and (b) {{出租车|chūzūchē|taxi}}.",
            modelAnswer:
              "骑 is for anything you straddle with one leg on each side (bike, motorbike, horse) — the character even contains 马. 坐 is for vehicles you sit inside or on a seat (bus, MRT, plane, taxi, boat). So: (a) 骑马 — you straddle a horse; (b) 坐出租车 — you sit inside a taxi.",
            markScheme: [
              "骑 = straddle / a leg each side",
              "坐 = sit inside / on a seat",
              "(a) 马 → 骑",
              "(b) 出租车 → 坐",
            ],
            commonError:
              "Explaining it as a word list to memorise — the whole point is that body position predicts the verb for vehicles you've never seen.",
            guideRef: "坐 or 骑? The horse-riding rule for vehicles",
            difficulty: "challenge",
            strategy: "Find the pattern",
            hints: [
              "What does your body do differently on a bike versus in a taxi?",
              "The 马 inside 骑 is a clue to the original meaning.",
            ],
          },
        ],
      },
      {
        id: "trav-qa-b",
        title: "Paper B — Journeys & holidays",
        description: "从…到…, journey times, itineraries, the experience particle 过 and holiday plans.",
        questions: [
          {
            id: "trav-qa-b-q01",
            question: "Translate into English: {{从新加坡到北京|cóng Xīnjiāpō dào Běijīng}}.",
            modelAnswer: "From Singapore to Beijing.",
            markScheme: [
              "从 = from",
              "到 = to",
              "Places in the right order: Singapore first, Beijing second",
            ],
            commonError: "Reversing the direction — 从 always marks the starting point.",
            guideRef: "From A to B: 从…到… and how long it takes",
            difficulty: "warmup",
            hints: ["从 marks the start of the route."],
          },
          {
            id: "trav-qa-b-q02",
            question:
              "Translate into Chinese: 'From Singapore to Beijing, the plane takes six hours.'",
            modelAnswer:
              "{{从新加坡到北京，坐飞机要六个小时。|Cóng Xīnjiāpō dào Běijīng, zuò fēijī yào liù ge xiǎoshí.|From Singapore to Beijing, the plane takes six hours.}}",
            markScheme: [
              "Route frame 从新加坡到北京",
              "{{坐飞机|zuò fēijī}} for 'the plane' as transport",
              "{{要|yào}} for 'takes'",
              "{{六个小时|liù ge xiǎoshí}} with 个 before 小时",
            ],
            commonError:
              "Dropping 个: 六小时 ✗ in this pattern — hours are counted with the measure word: 六个小时.",
            guideRef: "From A to B: 从…到… and how long it takes",
            difficulty: "core",
            hints: ["Frame first: 从 A 到 B.", "Then 坐 + vehicle + 要 + number + 个小时."],
            solutions: [
              {
                label: "Frame first (recommended)",
                steps: [
                  "Route: 从新加坡到北京.",
                  "Transport: 坐飞机.",
                  "Duration with 要: 要六个小时.",
                  "Assemble with a comma after the route: 从新加坡到北京，坐飞机要六个小时。",
                ],
              },
              {
                label: "Chunk-by-chunk from English",
                steps: [
                  "'From Singapore' → 从新加坡; 'to Beijing' → 到北京.",
                  "'the plane' as a means of travel → 坐飞机 (not just 飞机).",
                  "'takes six hours' → 要六个小时 — 要 means 'requires' here.",
                ],
              },
            ],
          },
          {
            id: "trav-qa-b-q03",
            question:
              "Read this holiday diary, then answer in English. {{去年暑假，我和家人去北京旅行。从新加坡到北京，坐飞机要六个小时。在北京，我们坐地铁，很方便。明年我打算去日本看朋友。|Qùnián shǔjià, wǒ hé jiārén qù Běijīng lǚxíng. Cóng Xīnjiāpō dào Běijīng, zuò fēijī yào liù ge xiǎoshí. Zài Běijīng, wǒmen zuò dìtiě, hěn fāngbiàn. Míngnián wǒ dǎsuàn qù Rìběn kàn péngyou.}} ({{方便|fāngbiàn}} = convenient.) (a) When did the writer travel, and where to? (b) How long was the flight? (c) How did the family get around Beijing, and why? (d) What is the plan for next year?",
            modelAnswer:
              "(a) Last year in the summer holidays, to Beijing (with their family). (b) Six hours from Singapore. (c) By underground/metro, because it was very convenient. (d) Next year they plan to go to Japan to see friends.",
            markScheme: [
              "(a) Last summer holidays ({{去年暑假|qùnián shǔjià}}) — trip to Beijing",
              "(b) Six hours ({{六个小时|liù ge xiǎoshí}})",
              "(c) By metro ({{坐地铁|zuò dìtiě}}), because it was convenient ({{方便|fāngbiàn}})",
              "(d) Plans ({{打算|dǎsuàn}}) to go to Japan to see friends next year",
            ],
            commonError:
              "Mixing up 去年 (last year) and 明年 (next year) — the diary starts in the past and ends with a future plan.",
            guideRef: "Holidays and the been-there particle 过",
            difficulty: "core",
            hints: [
              "Scan for time words first: 去年暑假…明年….",
              "The frames 从…到…, 要…个小时 and 打算 carry the answers.",
            ],
          },
          {
            id: "trav-qa-b-q04",
            question:
              "Reply to your penpal in Chinese: you HAVE been to China, but you have NEVER been to Japan. ({{但是|dànshì}} = but.)",
            modelAnswer:
              "{{我去过中国，但是没去过日本。|Wǒ qùguo Zhōngguó, dànshì méi qùguo Rìběn.|I have been to China, but I have never been to Japan.}}",
            markScheme: [
              "{{去过|qùguo}} for 'have been'",
              "Negative with {{没|méi}} + 去过 (NOT 不去过)",
              "Both countries correct: 中国 then 日本",
              "Two halves joined (但是 or a comma)",
            ],
            commonError: "不去过日本 ✗ — experiences negate with 没, and 过 must stay.",
            guideRef: "Holidays and the been-there particle 过",
            difficulty: "core",
            hints: [
              "Positive half: 我去过 + country.",
              "Negative half keeps 过 and swaps in 没.",
            ],
            solutions: [
              {
                label: "Build each half, then join",
                steps: [
                  "Been there: 我去过中国.",
                  "Never: 没去过日本 — 没 replaces the subject's repeat; 过 stays.",
                  "Join with 但是: 我去过中国，但是没去过日本。",
                ],
              },
              {
                label: "Stamp-and-flip",
                steps: [
                  "Write the same experience sentence twice: 我去过中国 / 我去过日本.",
                  "Flip the second to 'never' by inserting 没 before 去过 and dropping 我 (it's shared).",
                  "Result: 我去过中国，(但是)没去过日本。",
                ],
              },
            ],
          },
          {
            id: "trav-qa-b-q05",
            question:
              "Write your holiday plan in Chinese using {{打算|dǎsuàn}}: you plan to go to Malaysia in the summer holidays to see friends.",
            modelAnswer:
              "{{暑假我打算去马来西亚看朋友。|Shǔjià wǒ dǎsuàn qù Mǎláixīyà kàn péngyou.|In the summer holidays I plan to go to Malaysia to see friends.}}",
            markScheme: [
              "{{打算|dǎsuàn}} before the verb phrase",
              "{{去马来西亚|qù Mǎláixīyà}} before {{看朋友|kàn péngyou}} (event order)",
              "Time word 暑假 near the front (暑假我打算… or 我打算暑假… both fine)",
            ],
            commonError:
              "看朋友去马来西亚 ✗ — verb chains follow the timeline: first go, then see.",
            guideRef: "Holidays and the been-there particle 过",
            difficulty: "core",
            hints: [
              "Skeleton: time + 我打算 + 去 + place + do-what.",
              "Which happens first — arriving in Malaysia or seeing the friends?",
            ],
          },
          {
            id: "trav-qa-b-q06",
            question:
              "Challenge: translate BOTH sentences and explain the job of {{过|guo}}: (a) {{我去北京。|Wǒ qù Běijīng.}} (b) {{我去过北京。|Wǒ qùguo Běijīng.}}",
            modelAnswer:
              "(a) 'I go / am going to Beijing' — a present fact or plan. (b) 'I have been to Beijing' — a completed life experience. 过 sits straight after the verb and stamps it 'experienced': it turns going into having-gone, the way English switches from 'go' to 'have been to'.",
            markScheme: [
              "(a) translated as going (present/future)",
              "(b) translated as have been (past experience)",
              "过 identified as the experience marker placed straight after the verb",
              "Some explanation of the meaning shift (plan/fact vs life experience)",
            ],
            commonError:
              "Translating both as past tense — without 过 (or a past time word), 我去北京 is NOT 'I went to Beijing'.",
            guideRef: "Holidays and the been-there particle 过",
            difficulty: "challenge",
            strategy: "One tiny word, big meaning shift",
            hints: [
              "Only one character differs — everything hangs on it.",
              "过 originally means 'to cross': which sentence has the trip already behind the speaker?",
            ],
          },
          {
            id: "trav-qa-b-q07",
            question:
              "Challenge: your friend writes {{我家离机场很远|wǒ jiā lí jīchǎng hěn yuǎn}} and {{从我家到机场要一个小时|cóng wǒ jiā dào jīchǎng yào yí ge xiǎoshí}}. Explain in English what each sentence means and why Chinese uses 离 in one but 从…到 in the other.",
            modelAnswer:
              "The first means 'my home is far from the airport' — 离 is the ruler word: it measures the static gap between two points, described with 远/近. The second means 'from my home to the airport takes one hour' — 从…到 traces an actual route, which can then be priced in time (要一个小时) or given a transport method. Ruler → 离; route → 从…到. That's why you can't swap them: a gap can't 'take an hour', and a route isn't just 'far'.",
            markScheme: [
              "Sentence 1: home is far from the airport",
              "Sentence 2: home to airport takes one hour",
              "离 = static distance/gap, used with 远/近",
              "从…到 = journey/route frame, used with times or transport",
            ],
            commonError:
              "Assuming 离 means 'from' and hunting for a missing 到 — 离 works alone because nothing is moving.",
            guideRef: "Where is it? Directions, 旁边 and the ruler word 离",
            difficulty: "challenge",
            strategy: "One tool per job — ruler vs route",
            hints: [
              "Which sentence involves movement, and which is just a measurement?",
              "Think ruler versus route.",
            ],
          },
        ],
      },
    ],
  },
};
