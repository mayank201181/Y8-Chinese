import type { Topic } from "../types";

// Home & Neighbourhood — describing where you live, rooms, furniture,
// the 在…上/里 location system, and your neighbourhood (Singapore flavour).

export const home: Topic = {
  id: "home",
  title: "Home & Neighbourhood",
  titleChinese: { hanzi: "家与社区", pinyin: "jiā yǔ shèqū" },
  subject: "chinese",
  icon: "🏠",
  color: "lime",
  intro:
    "Where do you live — a house, a flat, an HDB block? In this topic you learn to describe your home room by room, count furniture with the right measure words, and say exactly where everything is. Along the way you'll discover one of the most satisfying patterns in Chinese: the location system, where the word for 'on' comes after the noun — the mirror image of English. By the end you can give a full tour of your home and your neighbourhood.",
  guide: [
    {
      heading: "Where do you live? 住在 and your kind of home",
      discovery: {
        problem:
          "Read these three answers to 'where do you live?': {{我住在新加坡。|Wǒ zhù zài Xīnjiāpō.|I live in Singapore.}} {{我住在组屋。|Wǒ zhù zài zǔwū.|I live in an HDB flat.}} {{我住在十五楼。|Wǒ zhù zài shíwǔ lóu.|I live on the 15th floor.}} Three totally different scales — a country, a building, a floor — yet the sentence never changes shape. What's the pattern, and how would you say 'I live in a flat'?",
        idea:
          "The pattern is **{{住在|zhù zài|to live in/at}} + any place**, and it works at every zoom level: country, city, type of home, even the floor. So 'I live in a flat' is just {{我住在公寓。|Wǒ zhù zài gōngyù.}} One pattern, unlimited answers — you never memorise a new sentence, you just swap the place.",
      },
      body:
        "The verb for living somewhere is {{住|zhù|to live}}, and it glues to the place with {{在|zài|at/in}}: {{我住在新加坡。|Wǒ zhù zài Xīnjiāpō.|I live in Singapore.}}\n\nKinds of home:\n- {{房子|fángzi|house}} — a house\n- {{公寓|gōngyù|flat, apartment}} — a flat\n- {{组屋|zǔwū|HDB flat}} — an HDB flat; most people in Singapore {{住在组屋|zhù zài zǔwū}}!\n\n{{楼|lóu|building; floor}} does double duty: it means a building, and after a number it means a floor — {{我住在十五楼。|Wǒ zhù zài shíwǔ lóu.|I live on the 15th floor.}} To count how many storeys a building has, use {{层|céng|storey (measure word)}}: {{我家的楼有二十层。|Wǒ jiā de lóu yǒu èrshí céng.|My building has twenty storeys.}}\n\nNow describe your home. Remember from Greetings: adjectives connect with {{很|hěn|very}}, never with 是 — {{我的房子很大。|Wǒ de fángzi hěn dà.|My house is very big.}} {{我的房间很小，可是很漂亮。|Wǒ de fángjiān hěn xiǎo, kěshì hěn piàoliang.|My room is small, but very pretty.}} Useful pairs: {{大|dà|big}}/{{小|xiǎo|small}} and {{新|xīn|new}}/{{旧|jiù|old (things)}}.",
      whyItWorks:
        "Why is 我的房子是大 wrong? In Chinese, adjectives like {{大|dà}} behave like verbs — 大 already means 'to be big'. Adding {{是|shì}} would be saying 'is is-big'. The linker {{很|hěn}} fills the rhythm instead (and is so common it barely means 'very' any more). This is the same rule that gave you 我很好 in Greetings — one rule, reused everywhere.",
      strategies: [
        "One pattern, every zoom level: 住在 + country, city, building or floor",
        "No 是 with adjectives — let 很 do the linking",
      ],
      keyPoints: [
        "住在 + place: 我住在新加坡 / 我住在组屋",
        "组屋 = HDB flat — the everyday Singapore home word",
        "number + 楼 gives the floor you live on: 十五楼 = 15th floor",
        "层 counts storeys: 二十层 = twenty storeys",
        "Describe with 很 + adjective, never 是 + adjective: 我的房子很大",
      ],
      vocab: [
        {
          hanzi: "住",
          pinyin: "zhù",
          english: "to live (somewhere)",
          pos: "verb",
          example: { hanzi: "我住在新加坡。", pinyin: "Wǒ zhù zài Xīnjiāpō.", english: "I live in Singapore." },
        },
        { hanzi: "家", pinyin: "jiā", english: "home; family", pos: "noun" },
        { hanzi: "房子", pinyin: "fángzi", english: "house", pos: "noun" },
        { hanzi: "公寓", pinyin: "gōngyù", english: "flat, apartment", pos: "noun" },
        { hanzi: "组屋", pinyin: "zǔwū", english: "HDB flat (Singapore)", pos: "noun" },
        { hanzi: "楼", pinyin: "lóu", english: "building; floor", pos: "noun" },
        { hanzi: "层", pinyin: "céng", english: "storey", pos: "measure word" },
        { hanzi: "新", pinyin: "xīn", english: "new", pos: "adjective" },
        { hanzi: "旧", pinyin: "jiù", english: "old (things, not people)", pos: "adjective" },
        { hanzi: "漂亮", pinyin: "piàoliang", english: "pretty, beautiful", pos: "adjective" },
      ],
      patterns: [
        {
          pattern: "Subject + 住在 + place",
          example: {
            hanzi: "我住在组屋，在十九楼。",
            pinyin: "Wǒ zhù zài zǔwū, zài shíjiǔ lóu.",
            english: "I live in an HDB flat, on the 19th floor.",
          },
          note: "The same pattern works for a country, a city, a building or a floor.",
        },
        {
          pattern: "Subject + 很 + adjective",
          example: { hanzi: "我的家很漂亮。", pinyin: "Wǒ de jiā hěn piàoliang.", english: "My home is very pretty." },
          note: "Adjectives never take 是 — 很 is the linker, just like 我很好.",
        },
      ],
    },
    {
      heading: "Rooms: 有 says what's there",
      discovery: {
        problem:
          "You already know {{我有一个弟弟。|Wǒ yǒu yí ge dìdi.|I have a little brother.}} Now read: {{我家有一个花园。|Wǒ jiā yǒu yí ge huāyuán.}} Word for word that's 'my home has a garden' — but how would you naturally say it in English? What job is {{有|yǒu|to have}} doing here?",
        idea:
          "When the subject is a **place**, 有 stops meaning 'owns' and means '**there is / there are**'. 我家有一个花园 = 'There is a garden at my home.' English needs a whole new structure ('there is…'); Chinese just reuses 有. One word, two jobs — and you already knew the word.",
      },
      body:
        "Take the tour. A home is made of {{房间|fángjiān|room}}:\n- {{客厅|kètīng|living room}} — living room\n- {{厨房|chúfáng|kitchen}} — kitchen\n- {{卧室|wòshì|bedroom}} — bedroom\n- {{洗手间|xǐshǒujiān|bathroom, toilet}} — the polite word; {{厕所|cèsuǒ|toilet}} is the plain one\n- {{书房|shūfáng|study}} — study ('book room')\n- {{花园|huāyuán|garden}} — garden ('flower garden')\n\nSay what your home has: {{我家有三个卧室和两个洗手间。|Wǒ jiā yǒu sān ge wòshì hé liǎng ge xǐshǒujiān.|My home has three bedrooms and two bathrooms.}} Careful: before a measure word, 'two' is {{两|liǎng|two (before measure words)}}, not 二 — 两个, never 二个.\n\nAsk back: {{你家有几个房间？|Nǐ jiā yǒu jǐ ge fángjiān?|How many rooms does your home have?}} And for what's missing, use {{没有|méiyǒu|to not have; there isn't}}: {{我家没有书房。|Wǒ jiā méiyǒu shūfáng.|My home doesn't have a study.}}\n\nHomes also mean housework! {{我帮妈妈做饭。|Wǒ bāng māma zuò fàn.|I help Mum cook.}} {{晚饭以后，我洗碗。|Wǎnfàn yǐhòu, wǒ xǐ wǎn.|After dinner, I wash the dishes.}} {{我打扫我的房间。|Wǒ dǎsǎo wǒ de fángjiān.|I clean my room.}}",
      whyItWorks:
        "English splits 'having' into two structures: 'I have a brother' but 'THERE IS a garden'. Chinese sees them as the same idea — a subject that contains something. Person + 有 = owns; place + 有 = contains, i.e. 'there is'. That's why you get 我家有三个卧室 = 'in my home there are three bedrooms'. No new grammar to learn — just a wider use of a verb you met in Family.",
      strategies: [
        "Reuse what you know: place + 有 = 'there is/are'",
        "两 before measure words, 二 only for counting: 两个卧室 ✓, 二个卧室 ✗",
      ],
      keyPoints: [
        "place + 有 + thing = 'there is/are': 我家有一个花园",
        "Rooms: 客厅, 厨房, 卧室, 洗手间/厕所, 书房, 花园",
        "两 (not 二) before 个: 两个卧室",
        "没有 for what's missing: 我家没有花园",
        "帮 + person + action = help someone do something: 我帮妈妈做饭",
      ],
      vocab: [
        { hanzi: "客厅", pinyin: "kètīng", english: "living room", pos: "noun" },
        { hanzi: "厨房", pinyin: "chúfáng", english: "kitchen", pos: "noun" },
        { hanzi: "卧室", pinyin: "wòshì", english: "bedroom", pos: "noun" },
        { hanzi: "洗手间", pinyin: "xǐshǒujiān", english: "bathroom, toilet", pos: "noun" },
        { hanzi: "书房", pinyin: "shūfáng", english: "study", pos: "noun" },
        { hanzi: "花园", pinyin: "huāyuán", english: "garden", pos: "noun" },
        {
          hanzi: "有",
          pinyin: "yǒu",
          english: "to have; there is/are",
          pos: "verb",
          example: { hanzi: "我家有三个卧室。", pinyin: "Wǒ jiā yǒu sān ge wòshì.", english: "My home has three bedrooms." },
        },
        { hanzi: "打扫", pinyin: "dǎsǎo", english: "to clean, to sweep", pos: "verb" },
        { hanzi: "做饭", pinyin: "zuò fàn", english: "to cook", pos: "verb phrase" },
        { hanzi: "洗碗", pinyin: "xǐ wǎn", english: "to wash the dishes", pos: "verb phrase" },
      ],
      patterns: [
        {
          pattern: "Place + 有 + number + measure word + thing",
          example: {
            hanzi: "我家有三个卧室和一个客厅。",
            pinyin: "Wǒ jiā yǒu sān ge wòshì hé yí ge kètīng.",
            english: "My home has three bedrooms and a living room.",
          },
          note: "With a place as subject, 有 means 'there is/are'. Negate with 没有.",
        },
        {
          pattern: "帮 + person + action",
          example: { hanzi: "我帮妈妈做饭。", pinyin: "Wǒ bāng māma zuò fàn.", english: "I help Mum cook." },
          note: "帮 + the person comes first, then the action they get help with.",
        },
      ],
    },
    {
      heading: "One bed, one 张? Measure words for furniture",
      discovery: {
        problem:
          "Chinese never says just 'a bed'. It says {{一张床|yì zhāng chuáng|one zhāng of bed}}, {{一把椅子|yì bǎ yǐzi|one bǎ of chair}}, {{一台电视|yì tái diànshì|one tái of TV}}. Now sort these into the same three groups: {{桌子|zhuōzi|table}}, {{电脑|diànnǎo|computer}}, {{纸|zhǐ|paper}}. Which measure word does each take — and what does each group have in common?",
        idea:
          "Measure words sort nouns by **shape and type**: {{张|zhāng}} for things with a flat surface (bed, table, paper, photo), {{把|bǎ}} for things you grip (a chair — you grab its back; also umbrellas and knives), {{台|tái}} for machines (TV, computer). So 桌子 and 纸 join 床 in team 张, and 电脑 joins 电视 in team 台. Sort by shape and you can guess measure words for nouns you've never met!",
      },
      body:
        "Meet the furniture:\n- {{床|chuáng|bed}}, {{桌子|zhuōzi|table}}, {{椅子|yǐzi|chair}}\n- {{沙发|shāfā|sofa}}, {{电视|diànshì|television}}, {{电脑|diànnǎo|computer}}\n- {{书架|shūjià|bookshelf}}, {{灯|dēng|lamp, light}}\n\nCounting always goes **number + measure word + noun**:\n- {{张|zhāng}} — flat surfaces: {{一张床|yì zhāng chuáng}}, {{一张桌子|yì zhāng zhuōzi}}\n- {{把|bǎ}} — things you grip: {{两把椅子|liǎng bǎ yǐzi}}\n- {{台|tái}} — machines: {{一台电视|yì tái diànshì}}, {{一台电脑|yì tái diànnǎo}}\n- and when nothing else fits, {{个|gè}} is the safety net: {{一个沙发|yí ge shāfā}}, {{一个书架|yí ge shūjià}}, {{一个灯|yí ge dēng}}\n\nPut it together with 有 and the listing comma 、: {{我的卧室有一张床、一张桌子和两把椅子。|Wǒ de wòshì yǒu yì zhāng chuáng, yì zhāng zhuōzi hé liǎng bǎ yǐzi.|My bedroom has a bed, a table and two chairs.}}",
      whyItWorks:
        "English already does this for some nouns: a SHEET of paper, a LOAF of bread, a PAIR of scissors. Chinese simply applies the idea to every noun. And because measure words classify by shape, they carry real information — hearing 一张… tells you something flat is coming before you even hear the noun. That's why native speakers can guess: photos are flat, so {{一张照片|yì zhāng zhàopiàn|a photo}}. You can make the same guesses.",
      strategies: [
        "Sort by shape, not by translation: flat → 张, grippable → 把, machine → 台",
        "When unsure, 个 is the safety net — wrong measure word beats no measure word",
      ],
      keyPoints: [
        "Always number + measure word + noun: 两把椅子",
        "张 = flat surfaces: 床, 桌子, 纸, 照片",
        "把 = things you grip: 椅子 (grab its back!)",
        "台 = machines: 电视, 电脑",
        "沙发, 书架 and 灯 take plain 个 at this level",
      ],
      vocab: [
        { hanzi: "张", pinyin: "zhāng", english: "measure word for flat things (bed, table, paper)", pos: "measure word" },
        { hanzi: "把", pinyin: "bǎ", english: "measure word for things you grip (chair, umbrella)", pos: "measure word" },
        { hanzi: "台", pinyin: "tái", english: "measure word for machines (TV, computer)", pos: "measure word" },
        {
          hanzi: "床",
          pinyin: "chuáng",
          english: "bed",
          pos: "noun",
          example: { hanzi: "我的卧室有一张床。", pinyin: "Wǒ de wòshì yǒu yì zhāng chuáng.", english: "My bedroom has a bed." },
        },
        { hanzi: "桌子", pinyin: "zhuōzi", english: "table", pos: "noun" },
        { hanzi: "椅子", pinyin: "yǐzi", english: "chair", pos: "noun" },
        { hanzi: "电视", pinyin: "diànshì", english: "television", pos: "noun" },
        { hanzi: "电脑", pinyin: "diànnǎo", english: "computer", pos: "noun" },
        { hanzi: "书架", pinyin: "shūjià", english: "bookshelf", pos: "noun" },
        { hanzi: "沙发", pinyin: "shāfā", english: "sofa", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "Number + measure word + noun",
          example: { hanzi: "两把椅子", pinyin: "liǎng bǎ yǐzi", english: "two chairs" },
          note: "Every counted noun needs its measure word — there is no bare 'two chairs' in Chinese.",
        },
        {
          pattern: "Place + 有 + list with 、 and 和",
          example: {
            hanzi: "客厅有一个沙发、一台电视和一个书架。",
            pinyin: "Kètīng yǒu yí ge shāfā, yì tái diànshì hé yí ge shūjià.",
            english: "The living room has a sofa, a TV and a bookshelf.",
          },
          note: "、 separates list items; 和 joins only the last two.",
        },
      ],
    },
    {
      heading: "The location system: why 上 comes after the noun",
      discovery: {
        problem:
          "English says the book is ON the table — the position word comes BEFORE 'table'. Now look at the Chinese: {{书在桌子上。|Shū zài zhuōzi shàng.|The book is on the table.}} Find {{上|shàng|on top; above}}. Where is it sitting? And if {{下|xià|under; below}} means 'under', where exactly is the cat in {{猫在床下。|Māo zài chuáng xià.}}?",
        idea:
          "上 comes AFTER 桌子 — the mirror image of English! Chinese treats {{桌子上|zhuōzi shàng}} as one place: 'the table's top'. So 猫在床下 = the cat is at 'the bed's underside' — under the bed. Once you read 桌子上 as a single place-word, the order stops being strange and starts being logical.",
      },
      body:
        "The full position toolkit — always glued AFTER the noun:\n- {{上|shàng|on top; above}} / {{下|xià|under; below}}\n- {{里|lǐ|inside}}\n- {{旁边|pángbiān|beside, next to}}\n- {{前面|qiánmiàn|in front}} / {{后面|hòumiàn|behind}}\n- {{中间|zhōngjiān|the middle, between}}\n- {{对面|duìmiàn|opposite}}\n\nThe sentence shape is **thing + {{在|zài|to be at}} + noun + position word**: {{电脑在书房里。|Diànnǎo zài shūfáng lǐ.|The computer is in the study.}} {{书架在床旁边。|Shūjià zài chuáng pángbiān.|The bookshelf is beside the bed.}} For 'between', name both sides: {{桌子在沙发和电视的中间。|Zhuōzi zài shāfā hé diànshì de zhōngjiān.|The table is between the sofa and the TV.}}\n\nNow **the flip**. Compare:\n- {{书在桌子上。|Shū zài zhuōzi shàng.|The book is on the table.}} — you already know about the book; 在 tells you WHERE it is.\n- {{桌子上有一本书。|Zhuōzi shàng yǒu yì běn shū.|On the table there is a book.}} — you start from the place; 有 introduces something NEW.\n\nEnglish makes exactly the same choice: 'THE book is on the table' versus 'there is A book on the table'. Known thing → 在 sentence. New thing → 有 sentence.",
      whyItWorks:
        "Why must 上 follow 桌子? Because Chinese position words are really nouns naming a zone: 上 = 'the top', 里 = 'the inside', 旁边 = 'the side'. {{桌子上|zhuōzi shàng}} literally means 'table-top', {{房间里|fángjiān lǐ}} means 'room-inside'. So 书在桌子上 is perfectly regular Chinese — thing + 在 + place — where the place happens to be built from noun + zone. Writing 在上桌子 ✗ is English word order wearing Chinese clothes; to a Chinese reader it's as odd as 'the book is table-on the' is to you.",
      strategies: [
        "Read 桌子上 as one word: 'table-top' — then the order is obvious",
        "Known thing → 在 sentence; new thing → 有 sentence",
      ],
      keyPoints: [
        "Shape: thing + 在 + noun + position word — 书在桌子上",
        "The position word comes AFTER the noun: 在上桌子 ✗, 在桌子上 ✓",
        "Toolkit: 上, 下, 里, 旁边, 前面, 后面, 中间, 对面",
        "The flip: 书在桌子上 (where a known book is) ↔ 桌子上有一本书 (a new book exists there)",
        "Between: A 和 B 的中间",
      ],
      vocab: [
        {
          hanzi: "在",
          pinyin: "zài",
          english: "to be at/in/on",
          pos: "verb",
          example: { hanzi: "书在桌子上。", pinyin: "Shū zài zhuōzi shàng.", english: "The book is on the table." },
        },
        { hanzi: "上", pinyin: "shàng", english: "on top; above", pos: "position word" },
        { hanzi: "下", pinyin: "xià", english: "under; below", pos: "position word" },
        { hanzi: "里", pinyin: "lǐ", english: "inside", pos: "position word" },
        { hanzi: "旁边", pinyin: "pángbiān", english: "beside, next to", pos: "position word" },
        { hanzi: "前面", pinyin: "qiánmiàn", english: "in front", pos: "position word" },
        { hanzi: "后面", pinyin: "hòumiàn", english: "behind", pos: "position word" },
        { hanzi: "中间", pinyin: "zhōngjiān", english: "the middle, between", pos: "position word" },
        { hanzi: "对面", pinyin: "duìmiàn", english: "opposite", pos: "position word" },
      ],
      patterns: [
        {
          pattern: "Thing + 在 + noun + position word",
          example: { hanzi: "猫在床下。", pinyin: "Māo zài chuáng xià.", english: "The cat is under the bed." },
          note: "The position word always follows the noun — the mirror image of English.",
        },
        {
          pattern: "Noun + position word + 有 + thing",
          example: {
            hanzi: "桌子上有一本书。",
            pinyin: "Zhuōzi shàng yǒu yì běn shū.",
            english: "There is a book on the table.",
          },
          note: "Start from the place and use 有 to introduce something new.",
        },
        {
          pattern: "A + 在 + B 和 C + 的中间",
          example: {
            hanzi: "桌子在沙发和电视的中间。",
            pinyin: "Zhuōzi zài shāfā hé diànshì de zhōngjiān.",
            english: "The table is between the sofa and the TV.",
          },
        },
      ],
    },
    {
      heading: "My neighbourhood: 附近 and 离",
      discovery: {
        problem:
          "{{附近|fùjìn|nearby, the area near}} means 'the nearby area'. Using what you know about 桌子上, decode: {{我家附近有一个游泳池。|Wǒ jiā fùjìn yǒu yí ge yóuyǒngchí.}} Then try: {{学校附近有很多商店。|Xuéxiào fùjìn yǒu hěn duō shāngdiàn.}}",
        idea:
          "附近 slots in exactly like a position word: 我家附近 = 'my home's nearby area', so the sentence means 'Near my home there is a swimming pool.' The second one: 'Near the school there are many shops.' The location system keeps paying off — place + zone word + 有 + new things.",
      },
      body:
        "Places worth knowing:\n- {{商店|shāngdiàn|shop}}, {{超市|chāoshì|supermarket}}, {{饭店|fàndiàn|restaurant}}\n- {{公园|gōngyuán|park}}, {{游泳池|yóuyǒngchí|swimming pool}}\n- {{图书馆|túshūguǎn|library}}, {{医院|yīyuàn|hospital}}\n\nDescribe your area with the 附近 + 有 pattern: {{我家附近有一个超市、一个公园和一个图书馆。|Wǒ jiā fùjìn yǒu yí ge chāoshì, yí ge gōngyuán hé yí ge túshūguǎn.|Near my home there's a supermarket, a park and a library.}} Very Singapore: {{我家楼下有商店。|Wǒ jiā lóuxià yǒu shāngdiàn.|There are shops below my block.}} — {{楼下|lóuxià|downstairs, below the block}} is just 楼 + 下, the location system again!\n\nFor distance, use {{离|lí|(distance) from}}: **A + 离 + B + {{很近|hěn jìn|very close}}/{{很远|hěn yuǎn|very far}}**. {{我家离学校很近。|Wǒ jiā lí xuéxiào hěn jìn.|My home is very close to school.}} {{我家离医院很远。|Wǒ jiā lí yīyuàn hěn yuǎn.|My home is far from the hospital.}} Ask with 吗: {{你家离图书馆远吗？|Nǐ jiā lí túshūguǎn yuǎn ma?|Is your home far from the library?}} Answer: {{不远，很近。|Bù yuǎn, hěn jìn.|Not far — very close.}}",
      whyItWorks:
        "Why 离 and not 在? 在 pins one thing to one place; 离 measures the GAP between two fixed points, and then the gap gets described with an adjective — {{近|jìn|close}} or {{远|yuǎn|far}}. And because 近/远 are adjectives, the old rule applies again: link with 很, never 是. 我家离学校是很近 ✗. Three sections in, and 'no 是 with adjectives' is still doing all the work.",
      strategies: [
        "Recycle the position-word logic: 附近 and 楼下 work just like 上 and 里",
        "Distance sentences are adjective sentences: A 离 B + 很 + 近/远",
      ],
      keyPoints: [
        "place + 附近 + 有 + things: 我家附近有一个公园",
        "楼下 = below the block — 楼 + 下, the same system",
        "A 离 B 很近 / 很远 for distance between two points",
        "Not far = 不远 (bù yuǎn); question: …远吗？",
        "Never 是 before 近/远 — 很 links adjectives",
      ],
      vocab: [
        {
          hanzi: "附近",
          pinyin: "fùjìn",
          english: "nearby, the area near",
          pos: "position word",
          example: {
            hanzi: "我家附近有一个公园。",
            pinyin: "Wǒ jiā fùjìn yǒu yí ge gōngyuán.",
            english: "There is a park near my home.",
          },
        },
        { hanzi: "商店", pinyin: "shāngdiàn", english: "shop", pos: "noun" },
        { hanzi: "超市", pinyin: "chāoshì", english: "supermarket", pos: "noun" },
        { hanzi: "公园", pinyin: "gōngyuán", english: "park", pos: "noun" },
        { hanzi: "图书馆", pinyin: "túshūguǎn", english: "library", pos: "noun" },
        { hanzi: "医院", pinyin: "yīyuàn", english: "hospital", pos: "noun" },
        { hanzi: "游泳池", pinyin: "yóuyǒngchí", english: "swimming pool", pos: "noun" },
        { hanzi: "离", pinyin: "lí", english: "(distance) from", pos: "preposition" },
        { hanzi: "近", pinyin: "jìn", english: "close, near", pos: "adjective" },
        { hanzi: "远", pinyin: "yuǎn", english: "far", pos: "adjective" },
      ],
      patterns: [
        {
          pattern: "Place + 附近 + 有 + things",
          example: {
            hanzi: "我家附近有一个超市和一个公园。",
            pinyin: "Wǒ jiā fùjìn yǒu yí ge chāoshì hé yí ge gōngyuán.",
            english: "Near my home there's a supermarket and a park.",
          },
        },
        {
          pattern: "A + 离 + B + 很近 / 很远",
          example: {
            hanzi: "我家离学校很近。",
            pinyin: "Wǒ jiā lí xuéxiào hěn jìn.",
            english: "My home is very close to school.",
          },
          note: "离 marks the gap between two points; 近/远 describe the gap, linked by 很.",
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "住", pinyin: "zhù", english: "to live (somewhere)" },
      { hanzi: "家", pinyin: "jiā", english: "home; family" },
      { hanzi: "房子", pinyin: "fángzi", english: "house" },
      { hanzi: "公寓", pinyin: "gōngyù", english: "flat, apartment" },
      { hanzi: "组屋", pinyin: "zǔwū", english: "HDB flat (Singapore)" },
      { hanzi: "楼", pinyin: "lóu", english: "building; floor" },
      { hanzi: "房间", pinyin: "fángjiān", english: "room" },
      { hanzi: "客厅", pinyin: "kètīng", english: "living room" },
      { hanzi: "厨房", pinyin: "chúfáng", english: "kitchen" },
      { hanzi: "卧室", pinyin: "wòshì", english: "bedroom" },
      { hanzi: "洗手间", pinyin: "xǐshǒujiān", english: "bathroom, toilet" },
      { hanzi: "花园", pinyin: "huāyuán", english: "garden" },
      { hanzi: "有", pinyin: "yǒu", english: "to have; there is/are" },
      { hanzi: "桌子", pinyin: "zhuōzi", english: "table" },
      { hanzi: "椅子", pinyin: "yǐzi", english: "chair" },
      { hanzi: "床", pinyin: "chuáng", english: "bed" },
      { hanzi: "电视", pinyin: "diànshì", english: "television" },
      { hanzi: "电脑", pinyin: "diànnǎo", english: "computer" },
      { hanzi: "沙发", pinyin: "shāfā", english: "sofa" },
      { hanzi: "张", pinyin: "zhāng", english: "measure word: flat things" },
      { hanzi: "把", pinyin: "bǎ", english: "measure word: things you grip" },
      { hanzi: "台", pinyin: "tái", english: "measure word: machines" },
      { hanzi: "在", pinyin: "zài", english: "to be at/in/on" },
      { hanzi: "上", pinyin: "shàng", english: "on top; above" },
      { hanzi: "下", pinyin: "xià", english: "under; below" },
      { hanzi: "里", pinyin: "lǐ", english: "inside" },
      { hanzi: "旁边", pinyin: "pángbiān", english: "beside, next to" },
      { hanzi: "对面", pinyin: "duìmiàn", english: "opposite" },
      { hanzi: "中间", pinyin: "zhōngjiān", english: "the middle, between" },
      { hanzi: "附近", pinyin: "fùjìn", english: "nearby, the area near" },
      { hanzi: "超市", pinyin: "chāoshì", english: "supermarket" },
      { hanzi: "公园", pinyin: "gōngyuán", english: "park" },
      { hanzi: "离", pinyin: "lí", english: "(distance) from" },
      { hanzi: "近", pinyin: "jìn", english: "close, near" },
      { hanzi: "远", pinyin: "yuǎn", english: "far" },
    ],
    patterns: [
      {
        pattern: "Subject + 住在 + place",
        example: { hanzi: "我住在组屋。", pinyin: "Wǒ zhù zài zǔwū.", english: "I live in an HDB flat." },
      },
      {
        pattern: "Place + 有 + number + measure word + thing",
        example: {
          hanzi: "我家有三个卧室。",
          pinyin: "Wǒ jiā yǒu sān ge wòshì.",
          english: "My home has three bedrooms.",
        },
      },
      {
        pattern: "Thing + 在 + noun + position word",
        example: { hanzi: "书在桌子上。", pinyin: "Shū zài zhuōzi shàng.", english: "The book is on the table." },
      },
      {
        pattern: "Noun + position word + 有 + thing",
        example: {
          hanzi: "桌子上有一本书。",
          pinyin: "Zhuōzi shàng yǒu yì běn shū.",
          english: "There is a book on the table.",
        },
      },
      {
        pattern: "Place + 附近 + 有 + things",
        example: {
          hanzi: "我家附近有一个公园。",
          pinyin: "Wǒ jiā fùjìn yǒu yí ge gōngyuán.",
          english: "There is a park near my home.",
        },
      },
      {
        pattern: "A + 离 + B + 很近 / 很远",
        example: {
          hanzi: "我家离学校很近。",
          pinyin: "Wǒ jiā lí xuéxiào hěn jìn.",
          english: "My home is very close to school.",
        },
      },
    ],
    mnemonics: [
      {
        hanzi: "家",
        tip: "A roof 宀 with a pig 豕 underneath — in ancient China, a pig under your roof meant a prosperous home. Roof + pig = home.",
      },
      {
        hanzi: "上",
        tip: "The stroke sits ABOVE the base line in 上 (up/on) and hangs BELOW it in 下 (down/under). The characters are pictures of their own meaning.",
      },
      {
        hanzi: "床",
        tip: "广 (a lean-to roof) over 木 (wood) — a wooden bed under a shelter.",
      },
      {
        hanzi: "电脑",
        tip: "电 = electricity, 脑 = brain: a computer is an 'electric brain'. 电 also unlocks 电视 ('electric vision' = TV).",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "home-quiz-mcq-q01",
        question: "What does {{卧室|wòshì}} mean?",
        options: ["Kitchen", "Living room", "Bedroom", "Garden"],
        answerIndex: 2,
        explanation:
          "{{卧室|wòshì}} is the bedroom (卧 = to lie down). {{厨房|chúfáng}} is the kitchen, {{客厅|kètīng}} the living room, {{花园|huāyuán}} the garden.",
        guideRef: "Rooms: 有 says what's there",
        difficulty: "warmup",
      },
      {
        id: "home-quiz-mcq-q02",
        question: "You live in an HDB flat in Singapore. Which word names your kind of home?",
        options: ["{{房子|fángzi}}", "{{组屋|zǔwū}}", "{{花园|huāyuán}}", "{{医院|yīyuàn}}"],
        answerIndex: 1,
        explanation:
          "{{组屋|zǔwū}} is the HDB flat — the everyday Singapore home word. 房子 is a house, 花园 a garden, and 医院 is a hospital!",
        guideRef: "Where do you live? 住在 and your kind of home",
        difficulty: "warmup",
      },
      {
        id: "home-quiz-mcq-q03",
        question: "Which measure word goes with {{床|chuáng|bed}}?",
        options: ["{{个|gè}}", "{{把|bǎ}}", "{{台|tái}}", "{{张|zhāng}}"],
        answerIndex: 3,
        explanation:
          "A bed has a big flat surface, so it joins team {{张|zhāng}} with 桌子, 纸 and 照片. 把 is for grippable things, 台 for machines.",
        guideRef: "One bed, one 张? Measure words for furniture",
        difficulty: "core",
        hints: [
          "Think shape, not translation. What does the surface of a bed look like?",
          "Flat surfaces — beds, tables, paper — all share one measure word.",
        ],
        strategy: "Sort by shape, not by translation",
      },
      {
        id: "home-quiz-mcq-q04",
        question: "Choose the correct way to say 'The book is on the table.'",
        options: [
          "{{书在上桌子。|Shū zài shàng zhuōzi.}}",
          "{{书在桌子上。|Shū zài zhuōzi shàng.}}",
          "{{上桌子在书。|Shàng zhuōzi zài shū.}}",
          "{{桌子在书上。|Zhuōzi zài shū shàng.}}",
        ],
        answerIndex: 1,
        explanation:
          "The position word comes AFTER the noun: 桌子上 = 'the table's top', so 书在桌子上. Option 1 is English word order in disguise, and option 4 says the table is on the book!",
        guideRef: "The location system: why 上 comes after the noun",
        difficulty: "core",
        hints: [
          "Remember the mirror-image discovery: where does 上 sit compared with English 'on'?",
          "Read 桌子上 as one word: 'table-top'. The shape is thing + 在 + place.",
        ],
        strategy: "Read 桌子上 as one word: 'table-top'",
      },
      {
        id: "home-quiz-mcq-q05",
        question: "What does {{我家有三个卧室。|Wǒ jiā yǒu sān ge wòshì.}} mean?",
        options: [
          "My home has three bedrooms",
          "My bedroom has three beds",
          "I live on the third floor",
          "My home has three bathrooms",
        ],
        answerIndex: 0,
        explanation:
          "我家 (my home) + 有 (there are) + 三个卧室 (three bedrooms). With a place as subject, 有 means 'there is/are'.",
        guideRef: "Rooms: 有 says what's there",
        difficulty: "warmup",
      },
      {
        id: "home-quiz-mcq-q06",
        question:
          "Which sentence tells someone there is a cat under the bed — introducing it as NEW information? ({{只|zhī}} is the measure word for cats.)",
        options: [
          "{{猫在床下。|Māo zài chuáng xià.}}",
          "{{床下有一只猫。|Chuáng xià yǒu yì zhī māo.}}",
          "{{床在猫下。|Chuáng zài māo xià.}}",
          "{{猫有一张床。|Māo yǒu yì zhāng chuáng.}}",
        ],
        answerIndex: 1,
        explanation:
          "New things are introduced with 有: 床下有一只猫 = 'Under the bed there is a cat.' 猫在床下 locates a cat you already know about; 床在猫下 puts the bed under the cat; 猫有一张床 means the cat owns a bed!",
        guideRef: "The location system: why 上 comes after the noun",
        difficulty: "core",
        hints: [
          "Known thing → 在 sentence; new thing → 有 sentence.",
          "Which sentence starts from the PLACE and introduces the cat with 有?",
        ],
        strategy: "Known thing → 在; new thing → 有",
      },
      {
        id: "home-quiz-mcq-q07",
        question: "What does {{我住在十二楼。|Wǒ zhù zài shí'èr lóu.}} mean?",
        options: [
          "I live in building 12",
          "I live on the 12th floor",
          "My home has 12 rooms",
          "My building has 12 storeys",
        ],
        answerIndex: 1,
        explanation:
          "After a number, 楼 means a floor: 十二楼 = the 12th floor. Counting storeys uses 层 instead: 十二层 = twelve storeys.",
        guideRef: "Where do you live? 住在 and your kind of home",
        difficulty: "core",
        hints: ["楼 after a number names which floor you are on."],
      },
      {
        id: "home-quiz-mcq-q08",
        question: "What does {{我家离学校很近。|Wǒ jiā lí xuéxiào hěn jìn.}} mean?",
        options: [
          "My home is very far from school",
          "My home is very close to school",
          "My home is behind the school",
          "There is a school near my home",
        ],
        answerIndex: 1,
        explanation:
          "离 marks the gap between 我家 and 学校, and 很近 says the gap is small: very close. 很远 would be 'very far'; 'there is a school near my home' would use 附近有.",
        guideRef: "My neighbourhood: 附近 and 离",
        difficulty: "core",
        hints: [
          "A 离 B + adjective describes the distance between A and B.",
          "近 = close, 远 = far — which one is here?",
        ],
      },
      {
        id: "home-quiz-mcq-q09",
        question:
          "Challenge: you've never learnt the word {{书桌|shūzhuō|desk}} — but a desk is a piece of furniture with a big flat top. Which measure word should it take?",
        options: ["{{把|bǎ}}", "{{台|tái}}", "{{张|zhāng}}", "{{层|céng}}"],
        answerIndex: 2,
        explanation:
          "A desk has a flat surface, so it joins 桌子 and 床 in team {{张|zhāng}}: 一张书桌. Measure words sort by shape, which is why you can classify furniture you've never met — that's the real skill.",
        difficulty: "challenge",
        hints: [
          "You can't have memorised this — so use the sorting rule instead.",
          "Which group did 桌子 (table) belong to, and why?",
        ],
        strategy: "Sort by shape, not by translation",
      },
      {
        id: "home-quiz-mcq-q10",
        question: "Challenge: one of these sentences contains an error. Which one?",
        options: [
          "{{电脑在桌子上。|Diànnǎo zài zhuōzi shàng.}}",
          "{{书在里书包。|Shū zài lǐ shūbāo.}}",
          "{{超市在我家对面。|Chāoshì zài wǒ jiā duìmiàn.}}",
          "{{椅子在床旁边。|Yǐzi zài chuáng pángbiān.}}",
        ],
        answerIndex: 1,
        explanation:
          "书在里书包 ✗ puts 里 BEFORE the noun — that's English order ('in the bag') wearing Chinese clothes. The position word glues on after: {{书在书包里|Shū zài shūbāo lǐ|The book is in the schoolbag}}. The other three all follow noun + position word correctly.",
        guideRef: "The location system: why 上 comes after the noun",
        difficulty: "challenge",
        hints: [
          "Check each sentence's position word: 上, 里, 对面, 旁边. Where should they sit?",
          "One of them copies English word order — position word before the noun.",
        ],
        strategy: "Read 桌子上 as one word: 'table-top'",
      },
    ],
    qa: [
      {
        id: "home-quiz-qa-q01",
        question:
          "Translate into Chinese: 'My home has four rooms and a garden.' (Characters or pinyin.)",
        modelAnswer:
          "{{我家有四个房间和一个花园。|Wǒ jiā yǒu sì ge fángjiān hé yí ge huāyuán.|My home has four rooms and a garden.}}",
        markScheme: [
          "Subject {{我家|wǒ jiā|my home}}",
          "Uses {{有|yǒu}} for 'there is/are'",
          "{{四个房间|sì ge fángjiān}} with the measure word 个",
          "{{和一个花园|hé yí ge huāyuán}} joined with 和",
        ],
        commonError: "Dropping the measure word (我家有四房间 ✗) — every counted noun needs one.",
        guideRef: "Rooms: 有 says what's there",
        difficulty: "warmup",
        hints: ["Pattern: place + 有 + number + 个 + noun."],
      },
      {
        id: "home-quiz-qa-q02",
        question:
          "Here is a sentence: {{桌子上有一台电脑。|Zhuōzi shàng yǒu yì tái diànnǎo.}} Rewrite it so it starts with {{电脑|diànnǎo}}, then explain in one sentence how the meaning changes.",
        modelAnswer:
          "{{电脑在桌子上。|Diànnǎo zài zhuōzi shàng.|The computer is on the table.}} The 有 sentence introduces the computer as new information ('on the table there is a computer'); the 在 sentence tells you where an already-known computer is.",
        markScheme: [
          "Correct rewrite: {{电脑在桌子上|diànnǎo zài zhuōzi shàng}}",
          "Keeps 上 AFTER 桌子",
          "Explains: 有 introduces something new / 在 locates a known thing",
        ],
        commonError:
          "电脑在上桌子 ✗ — when 电脑 moves to the front, 上 must stay glued after 桌子. 桌子上 is one place-word: 'table-top'.",
        guideRef: "The location system: why 上 comes after the noun",
        difficulty: "core",
        hints: [
          "The flip swaps which end of the sentence you start from.",
          "Thing first → use 在. Place first → use 有.",
          "桌子 + 上 travel together — never split them.",
        ],
        strategy: "Known thing → 在; new thing → 有",
        solutions: [
          {
            label: "Swap the ends (recommended)",
            steps: [
              "Label the parts: place = 桌子上, thing = 一台电脑.",
              "The 有 sentence runs place → 有 → thing. The 在 sentence runs thing → 在 → place.",
              "Move 电脑 to the front, replace 有 with 在, keep 桌子上 intact: 电脑在桌子上。",
              "Meaning shift: now the computer is old news and the sentence answers 'where is it?'.",
            ],
          },
          {
            label: "Draw the picture",
            steps: [
              "Both sentences describe the same photo: a computer sitting on a table.",
              "Start the story from the TABLE: 'On the table there's… a computer!' → 桌子上有一台电脑。",
              "Start the story from the COMPUTER: 'The computer? It's on the table.' → 电脑在桌子上。",
              "Same picture, different starting point — that's all the flip is.",
            ],
          },
        ],
      },
      {
        id: "home-quiz-qa-q03",
        question:
          "Read this description, then answer in English: {{我的卧室不大，可是很漂亮。房间里有一张床、一张书桌和两把椅子。床在窗户旁边，书桌上有一台电脑。|Wǒ de wòshì bú dà, kěshì hěn piàoliang. Fángjiān lǐ yǒu yì zhāng chuáng, yì zhāng shūzhuō hé liǎng bǎ yǐzi. Chuáng zài chuānghu pángbiān, shūzhuō shàng yǒu yì tái diànnǎo.}} ({{可是|kěshì}} = but, {{书桌|shūzhuō}} = desk, {{窗户|chuānghu}} = window.) (a) Is the bedroom big? (b) What furniture is in it? (c) Where is the bed? (d) What is on the desk?",
        modelAnswer:
          "(a) No — it is not big (不大), but it is very pretty. (b) A bed, a desk and two chairs. (c) Beside the window. (d) A computer.",
        markScheme: [
          "(a) Not big / small, but pretty",
          "(b) Bed, desk, two chairs",
          "(c) Bed is beside the window ({{旁边|pángbiān}})",
          "(d) A computer on the desk",
        ],
        commonError:
          "Reading 床在窗户旁边 backwards — the FIRST noun is the thing being located, so it's the bed that is beside the window, not a window beside the bed's… anything.",
        guideRef: "The location system: why 上 comes after the noun",
        difficulty: "core",
        hints: [
          "Hunt for the numbers and measure words to list the furniture.",
          "In each location sentence, thing + 在 + place: the first noun is the thing.",
        ],
      },
      {
        id: "home-quiz-qa-q04",
        question:
          "Describe your own home in at least three Chinese sentences: one with {{住在|zhù zài}}, one with {{有|yǒu}}, and one using a position word (上/下/里/旁边…). (Characters or pinyin.)",
        modelAnswer:
          "Example answer: {{我住在组屋，在十五楼。|Wǒ zhù zài zǔwū, zài shíwǔ lóu.|I live in an HDB flat, on the 15th floor.}} {{我家有三个卧室、一个客厅和一个厨房。|Wǒ jiā yǒu sān ge wòshì, yí ge kètīng hé yí ge chúfáng.|My home has three bedrooms, a living room and a kitchen.}} {{我的床在窗户旁边。|Wǒ de chuáng zài chuānghu pángbiān.|My bed is beside the window.}} Any accurate sentences following the three patterns earn full marks.",
        markScheme: [
          "A 住在 sentence: 我住在 + place (type of home and/or floor)",
          "A 有 sentence with correct measure words (两 not 二 before 个)",
          "A location sentence with the position word AFTER the noun",
          "Natural word order throughout; no 是 before adjectives",
        ],
        commonError:
          "Slipping into English order in the location sentence (我的床在旁边窗户 ✗) — the position word comes after the noun: 窗户旁边.",
        guideRef: "Rooms: 有 says what's there",
        difficulty: "core",
        hints: [
          "Three jobs, three patterns — do them one at a time.",
          "Frames: 我住在…。 我家有…个…和…个…。 我的…在…上/里/旁边。",
          "Check every counted noun has its measure word.",
        ],
        strategy: "Build, don't memorise — reuse the three patterns",
        solutions: [
          {
            label: "Sentence-frame method (recommended)",
            steps: [
              "Frame 1: 我住在 ___ — fill in 组屋 / 公寓 / 房子, and add the floor with 在…楼 if you like.",
              "Frame 2: 我家有 ___ — count your real rooms: number + 个 + room, list with 、 and 和.",
              "Frame 3: 我的 ___ 在 ___ + position word — pick one thing in your room and pin it down.",
              "Read it back checking the two danger spots: measure words present, position word after the noun.",
            ],
          },
          {
            label: "Answer three questions",
            steps: [
              "Pretend a penpal asked: Where do you live? How many rooms does your home have? Where is your bed?",
              "Answer each in Chinese: the questions force out exactly the 住在, 有 and 在 patterns.",
              "Question words sit in the answer's seat (remember Greetings) — so each answer copies the question's shape.",
            ],
          },
        ],
      },
      {
        id: "home-quiz-qa-q05",
        question:
          "A classmate asks: 'Why does Chinese say {{书在桌子上|shū zài zhuōzi shàng}} with 上 AFTER 桌子? And what's different about {{桌子上有一本书|zhuōzi shàng yǒu yì běn shū}}?' Explain both.",
        modelAnswer:
          "In Chinese, {{上|shàng}} works like a noun meaning 'the top', so {{桌子上|zhuōzi shàng}} is one place-word: 'the table's top'. The sentence shape is thing + {{在|zài}} + place — and the place just happens to be built from noun + position word. That's why 上 must follow 桌子; 在上桌子 ✗ is English word order, not Chinese. {{桌子上有一本书|Zhuōzi shàng yǒu yì běn shū}} starts from the place and uses 有 to introduce something new: 'On the table there is a book' — used when the listener didn't know about the book yet.",
        markScheme: [
          "上 behaves like a noun: 'the top'; 桌子上 = 'table-top', one place",
          "Sentence shape: thing + 在 + place, so the position word must follow the noun",
          "在上桌子 rejected as English word order",
          "桌子上有… introduces NEW information; 书在… locates a KNOWN thing",
        ],
        commonError:
          "Saying only 'that's just how Chinese is' — the mark scheme wants the table-top idea: position words are nouns naming a zone.",
        guideRef: "The location system: why 上 comes after the noun",
        difficulty: "challenge",
        hints: [
          "What kind of word is 上 really — a preposition like English 'on', or something else?",
          "Try translating 桌子上 as a single noun. What does the sentence shape become?",
          "For the second part: which sentence pattern introduces new things?",
        ],
        strategy: "Read 桌子上 as one word: 'table-top'",
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "home-mcq-a",
        title: "Paper A — My house & rooms",
        description: "Kinds of home, 住在, floors, rooms with 有, adjectives and helping at home.",
        questions: [
          {
            id: "home-mcq-a-q01",
            question: "What does {{厨房|chúfáng}} mean?",
            options: ["Bathroom", "Kitchen", "Study", "Living room"],
            answerIndex: 1,
            explanation:
              "厨房 is the kitchen — the room for 做饭 (cooking). 洗手间 is the bathroom, 书房 the study, 客厅 the living room.",
            guideRef: "Rooms: 有 says what's there",
            difficulty: "warmup",
          },
          {
            id: "home-mcq-a-q02",
            question: "Which word means 'to live (somewhere)'?",
            options: ["{{有|yǒu}}", "{{住|zhù}}", "{{离|lí}}", "{{家|jiā}}"],
            answerIndex: 1,
            explanation:
              "住 is the verb 'to live': 我住在新加坡. 有 = have/there is, 离 marks distance, 家 is the noun 'home'.",
            guideRef: "Where do you live? 住在 and your kind of home",
            difficulty: "warmup",
          },
          {
            id: "home-mcq-a-q03",
            question: "What does {{客厅|kètīng}} mean?",
            options: ["Bedroom", "Bathroom", "Living room", "Garden"],
            answerIndex: 2,
            explanation:
              "客厅 is the living room — literally 'guest hall', the room where you receive guests (客 = guest).",
            guideRef: "Rooms: 有 says what's there",
            difficulty: "warmup",
          },
          {
            id: "home-mcq-a-q04",
            question: "Complete the sentence: {{我住|Wǒ zhù}} ___ {{新加坡。|Xīnjiāpō.}}",
            options: ["{{有|yǒu}}", "{{是|shì}}", "{{在|zài}}", "{{里|lǐ}}"],
            answerIndex: 2,
            explanation:
              "住 glues to its place with 在: 住在 + place. 有 would mean 'have', 是 'to be', and 里 is a position word that follows a noun, not the verb.",
            guideRef: "Where do you live? 住在 and your kind of home",
            difficulty: "core",
            hints: ["Which little word attaches 住 to a location?"],
          },
          {
            id: "home-mcq-a-q05",
            question: "A penpal asks: {{你家有几个房间？|Nǐ jiā yǒu jǐ ge fángjiān?}} What do they want to know?",
            options: [
              "Where your home is",
              "How many rooms your home has",
              "Which floor you live on",
              "Whether your home is big",
            ],
            answerIndex: 1,
            explanation:
              "几 asks 'how many' (expecting a small number) and sits right where the answer's number will go: 我家有五个房间. Question words sit in the answer's seat.",
            guideRef: "Rooms: 有 says what's there",
            difficulty: "core",
            hints: ["几 + measure word asks for a number.", "Echo the question to answer it: 我家有…个房间."],
          },
          {
            id: "home-mcq-a-q06",
            question: "What does {{我家没有书房。|Wǒ jiā méiyǒu shūfáng.}} mean?",
            options: [
              "My home has a new study",
              "My home does not have a study",
              "My study is not big",
              "I don't like my study",
            ],
            answerIndex: 1,
            explanation:
              "没有 is the negative of 有: 'there isn't / doesn't have'. So: my home has no study. 书房 = study ('book room').",
            guideRef: "Rooms: 有 says what's there",
            difficulty: "core",
            hints: ["有 = there is; what does putting 没 in front do?"],
          },
          {
            id: "home-mcq-a-q07",
            question: "Which adjective means 'new'?",
            options: ["{{旧|jiù}}", "{{新|xīn}}", "{{大|dà}}", "{{小|xiǎo}}"],
            answerIndex: 1,
            explanation: "新 = new; its opposite 旧 = old (for things). 大/小 are big/small.",
            guideRef: "Where do you live? 住在 and your kind of home",
            difficulty: "warmup",
          },
          {
            id: "home-mcq-a-q08",
            question: "Choose the correct way to say 'My house is very big.'",
            options: [
              "{{我的房子是大。|Wǒ de fángzi shì dà.}}",
              "{{我的房子很大。|Wǒ de fángzi hěn dà.}}",
              "{{我的房子大很。|Wǒ de fángzi dà hěn.}}",
              "{{很大我的房子。|Hěn dà wǒ de fángzi.}}",
            ],
            answerIndex: 1,
            explanation:
              "Adjectives link with 很, never 是 — 大 already means 'to be big', so 是大 would be 'is is-big'. 很 also has to come BEFORE the adjective.",
            guideRef: "Where do you live? 住在 and your kind of home",
            difficulty: "core",
            hints: [
              "Same rule as 我很好 in Greetings.",
              "No 是 with adjectives — which word does the linking instead?",
            ],
            strategy: "No 是 with adjectives — let 很 do the linking",
          },
          {
            id: "home-mcq-a-q09",
            question: "What does {{我家的楼有二十层。|Wǒ jiā de lóu yǒu èrshí céng.}} mean?",
            options: [
              "My building has twenty storeys",
              "I live on the twentieth floor",
              "My home has twenty rooms",
              "My building is twenty years old",
            ],
            answerIndex: 0,
            explanation:
              "层 is the measure word for storeys, and 有 says how many the building has: twenty storeys in total. 'I live on the 20th floor' would be 我住在二十楼.",
            guideRef: "Where do you live? 住在 and your kind of home",
            difficulty: "core",
            hints: ["楼 names a floor you're ON; 层 COUNTS storeys.", "有 + number + 层 = 'has … storeys'."],
          },
          {
            id: "home-mcq-a-q10",
            question: "After dinner, {{我帮妈妈洗碗。|Wǒ bāng māma xǐ wǎn.}} What do you do?",
            options: [
              "You help Mum cook",
              "You help Mum wash the dishes",
              "You clean your bedroom",
              "You help Mum go shopping",
            ],
            answerIndex: 1,
            explanation:
              "帮 + person + action: help Mum 洗碗 (wash dishes — 洗 wash + 碗 bowls). Cooking would be 做饭, cleaning your room 打扫房间.",
            guideRef: "Rooms: 有 says what's there",
            difficulty: "core",
            hints: ["洗 means wash — 洗手间 is the 'wash-hands room'. So 洗碗 = wash the…?"],
          },
          {
            id: "home-mcq-a-q11",
            question:
              "Challenge: {{我住在组屋，我家在十九楼，楼下有超市。|Wǒ zhù zài zǔwū, wǒ jiā zài shíjiǔ lóu, lóuxià yǒu chāoshì.}} Which statement is TRUE?",
            options: [
              "The speaker lives in a house",
              "There is a supermarket below the block",
              "The flat is on the ninth floor",
              "The supermarket is far from home",
            ],
            answerIndex: 1,
            explanation:
              "楼下有超市 = 'below the block there's a supermarket' — 楼 + 下 is the location system again, and a very Singapore set-up! 组屋 is an HDB flat (not a house) and 十九 is nineteen, not nine.",
            difficulty: "challenge",
            hints: [
              "Decode 楼下 with the position-word logic: 楼 + 下.",
              "Careful with 十九 — is that 9 or 19?",
            ],
            strategy: "Recycle the position-word logic",
          },
          {
            id: "home-mcq-a-q12",
            question:
              "Challenge: {{书房|shūfáng}} is 'book + room' = study, and {{客厅|kètīng}} is 'guest + hall' = living room. So what should {{饭厅|fàntīng}} mean?",
            options: ["Dining room", "Kitchen", "Bookshop", "Hotel"],
            answerIndex: 0,
            explanation:
              "饭 (meal) + 厅 (hall) = the hall for meals: dining room. You decoded a word you were never taught by reusing its building blocks — Chinese vocabulary is Lego.",
            difficulty: "challenge",
            hints: ["Break it apart: what is 饭? What kind of room is a 厅?"],
            strategy: "Build, don't memorise",
          },
        ],
      },
      {
        id: "home-mcq-b",
        title: "Paper B — Where things are & my neighbourhood",
        description: "Position words, the 在/有 flip, 附近, 离…近/远 and decoding new location words.",
        questions: [
          {
            id: "home-mcq-b-q01",
            question: "What does {{公园|gōngyuán}} mean?",
            options: ["Hospital", "Library", "Park", "Shop"],
            answerIndex: 2,
            explanation: "公园 is the park. 医院 = hospital, 图书馆 = library, 商店 = shop.",
            guideRef: "My neighbourhood: 附近 and 离",
            difficulty: "warmup",
          },
          {
            id: "home-mcq-b-q02",
            question: "Which position word means 'inside'?",
            options: ["{{上|shàng}}", "{{下|xià}}", "{{里|lǐ}}", "{{旁边|pángbiān}}"],
            answerIndex: 2,
            explanation: "里 = inside: 房间里 = 'room-inside', in the room. 上 = on, 下 = under, 旁边 = beside.",
            guideRef: "The location system: why 上 comes after the noun",
            difficulty: "warmup",
          },
          {
            id: "home-mcq-b-q03",
            question: "{{猫在椅子下。|Māo zài yǐzi xià.}} Where is the cat?",
            options: ["On the chair", "Under the chair", "Beside the chair", "In front of the chair"],
            answerIndex: 1,
            explanation:
              "椅子下 = 'the chair's underside', so the cat is under the chair. Read noun + position word as one place.",
            guideRef: "The location system: why 上 comes after the noun",
            difficulty: "core",
            hints: ["Which zone does 下 name — the top or the underside?"],
          },
          {
            id: "home-mcq-b-q04",
            question: "Complete: {{书包在床|Shūbāo zài chuáng}} ___ 。 (The schoolbag is beside the bed.)",
            options: ["{{上|shàng}}", "{{旁边|pángbiān}}", "{{有|yǒu}}", "{{在|zài}}"],
            answerIndex: 1,
            explanation:
              "'Beside' is 旁边, and like every position word it follows the noun: 床旁边 = 'the bed's side'. 上 would put the bag ON the bed; 有 and 在 aren't position words at all.",
            guideRef: "The location system: why 上 comes after the noun",
            difficulty: "core",
            hints: ["The slot after 床 needs a position word.", "Which position word means 'beside'?"],
          },
          {
            id: "home-mcq-b-q05",
            question: "What does {{图书馆在学校对面。|Túshūguǎn zài xuéxiào duìmiàn.}} mean?",
            options: [
              "The library is opposite the school",
              "The library is inside the school",
              "The library is behind the school",
              "The school is far from the library",
            ],
            answerIndex: 0,
            explanation:
              "学校对面 = 'the school's opposite side', so the library sits across from the school. 里 would be inside, 后面 behind; distance would need 离…远.",
            guideRef: "The location system: why 上 comes after the noun",
            difficulty: "core",
            hints: ["对面 = the facing side. Whose facing side? The noun before it."],
          },
          {
            id: "home-mcq-b-q06",
            question:
              "Your friend asks {{我的手机呢？|Wǒ de shǒujī ne?|Where's my phone?}} ({{手机|shǒujī}} = mobile phone). Which reply fits best?",
            options: [
              "{{桌子上有一个手机。|Zhuōzi shàng yǒu yí ge shǒujī.}}",
              "{{手机在桌子上。|Shǒujī zài zhuōzi shàng.}}",
              "{{桌子在手机上。|Zhuōzi zài shǒujī shàng.}}",
              "{{我有一个手机。|Wǒ yǒu yí ge shǒujī.}}",
            ],
            answerIndex: 1,
            explanation:
              "The phone is a KNOWN thing (it's your friend's!), so locate it with 在: 手机在桌子上. The 有 version introduces some new, random phone; option 3 puts the table on the phone.",
            guideRef: "The location system: why 上 comes after the noun",
            difficulty: "core",
            hints: [
              "Is the phone new information, or something you both already know about?",
              "Known thing → 在 sentence; new thing → 有 sentence.",
            ],
            strategy: "Known thing → 在; new thing → 有",
          },
          {
            id: "home-mcq-b-q07",
            question: "What does {{超市|chāoshì}} mean?",
            options: ["Hospital", "Restaurant", "Supermarket", "Park"],
            answerIndex: 2,
            explanation: "超市 is the supermarket ('super-market' — 超 = super!). 医院 = hospital, 饭店 = restaurant.",
            guideRef: "My neighbourhood: 附近 and 离",
            difficulty: "warmup",
          },
          {
            id: "home-mcq-b-q08",
            question:
              "{{我家附近有一个游泳池和很多商店。|Wǒ jiā fùjìn yǒu yí ge yóuyǒngchí hé hěn duō shāngdiàn.}} ({{很多|hěn duō}} = many.) What is near the speaker's home?",
            options: [
              "A park and many shops",
              "A swimming pool and one shop",
              "A swimming pool and many shops",
              "Many swimming pools and one shop",
            ],
            answerIndex: 2,
            explanation:
              "一个游泳池 = ONE swimming pool; 很多商店 = MANY shops. The numbers and measure words carry the detail — always check them before answering.",
            guideRef: "My neighbourhood: 附近 and 离",
            difficulty: "core",
            hints: ["Match each amount word to its noun: 一个 goes with…? 很多 goes with…?"],
          },
          {
            id: "home-mcq-b-q09",
            question: "What is {{你家离图书馆远吗？|Nǐ jiā lí túshūguǎn yuǎn ma?}} asking?",
            options: [
              "Is there a library near your home?",
              "Where is the library?",
              "Is your home far from the library?",
              "Do you often go to the library?",
            ],
            answerIndex: 2,
            explanation:
              "A 离 B + 远 + 吗 asks whether the gap between home and library is big: 'Is your home far from the library?' 'Is there a library nearby' would use 附近有…吗.",
            guideRef: "My neighbourhood: 附近 and 离",
            difficulty: "core",
            hints: ["离 measures the gap between two places; 吗 turns the statement into a question."],
          },
          {
            id: "home-mcq-b-q10",
            question: "Choose the correct way to say 'My home is not far from the supermarket.'",
            options: [
              "{{我家不离超市远。|Wǒ jiā bù lí chāoshì yuǎn.}}",
              "{{我家离超市不远。|Wǒ jiā lí chāoshì bù yuǎn.}}",
              "{{我家离不远超市。|Wǒ jiā lí bù yuǎn chāoshì.}}",
              "{{我家离超市很不远。|Wǒ jiā lí chāoshì hěn bù yuǎn.}}",
            ],
            answerIndex: 1,
            explanation:
              "Keep the frame A 离 B intact, then negate the adjective: 不远. 不 attaches to what it denies — the farness, not the 离. And 很不远 piles 很 onto a negative, which Chinese avoids.",
            guideRef: "My neighbourhood: 附近 and 离",
            difficulty: "core",
            hints: [
              "The frame is A + 离 + B + adjective. Which part is being denied?",
              "不 sits directly before the word it negates.",
            ],
          },
          {
            id: "home-mcq-b-q11",
            question: "Challenge: which is the correct way to say 'There are many books on the bookshelf'?",
            options: [
              "{{有很多书在上书架。|Yǒu hěn duō shū zài shàng shūjià.}}",
              "{{书架有很多书上。|Shūjià yǒu hěn duō shū shàng.}}",
              "{{书架上有很多书。|Shūjià shàng yǒu hěn duō shū.}}",
              "{{很多书有书架上。|Hěn duō shū yǒu shūjià shàng.}}",
            ],
            answerIndex: 2,
            explanation:
              "'There are…' sentences start from the place: 书架上 ('the bookshelf's top') + 有 + the new things. Option 1 copies English 'there are many books on…' word by word — and even puts 上 before the noun.",
            guideRef: "The location system: why 上 comes after the noun",
            difficulty: "challenge",
            hints: [
              "New things are introduced with a place-first 有 sentence.",
              "Build the place first: bookshelf + 上, glued in that order.",
            ],
            strategy: "Known thing → 在; new thing → 有",
          },
          {
            id: "home-mcq-b-q12",
            question:
              "Challenge: {{楼上|lóushàng}} means 'upstairs' (building + above). In Singapore many people say {{我家楼下有超市。|Wǒ jiā lóuxià yǒu chāoshì.}} What does it mean?",
            options: [
              "My home is under the supermarket",
              "There is a supermarket below my block",
              "There is a supermarket opposite my block",
              "My block is behind the supermarket",
            ],
            answerIndex: 1,
            explanation:
              "楼下 = 楼 + 下, 'the downstairs of the block' — so 'below my block there is a supermarket', the classic void-deck shops. You decoded 楼下 from 楼上 by swapping the position word: the system, not the phrase list.",
            difficulty: "challenge",
            hints: [
              "If 楼上 is building + above, what is 楼 + 下?",
              "Then apply place + 有 = 'there is'.",
            ],
            strategy: "Recycle the position-word logic",
          },
          {
            id: "home-mcq-b-q13",
            question:
              "Challenge: {{书在电脑旁边，电脑在书桌上。|Shū zài diànnǎo pángbiān, diànnǎo zài shūzhuō shàng.}} ({{书桌|shūzhuō}} = desk.) So where is the book?",
            options: [
              "On the desk, next to the computer",
              "Under the desk, next to the computer",
              "On top of the computer",
              "Beside the desk, on a chair",
            ],
            answerIndex: 0,
            explanation:
              "Chain the clues: the computer is on the desk, and the book is beside the computer — so the book must also be on the desk, next to the computer. Two location sentences, one picture.",
            difficulty: "challenge",
            hints: [
              "Draw it! Place the computer first using clue 2.",
              "Now use clue 1 to place the book relative to the computer.",
            ],
            strategy: "Translate the picture, not the words",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "home-qa-a",
        title: "Paper A — Describing your home",
        description: "Translating and writing about your home, rooms, furniture and chores.",
        questions: [
          {
            id: "home-qa-a-q01",
            question:
              "Translate into Chinese: 'I live in Singapore. I live in a flat.' (Characters or pinyin.)",
            modelAnswer:
              "{{我住在新加坡。我住在公寓。|Wǒ zhù zài Xīnjiāpō. Wǒ zhù zài gōngyù.|I live in Singapore. I live in a flat.}}",
            markScheme: [
              "{{住在|zhù zài}} used in both sentences",
              "Place comes after 住在: 新加坡 / 公寓",
              "Correct home word {{公寓|gōngyù|flat}}",
            ],
            commonError: "Leaving out 在 (我住新加坡) — at this level always glue 住 to its place with 在.",
            guideRef: "Where do you live? 住在 and your kind of home",
            difficulty: "warmup",
            hints: ["Same pattern twice, different zoom level: 住在 + place."],
          },
          {
            id: "home-qa-a-q02",
            question:
              "Translate into Chinese: 'My home has two bedrooms, a living room and a kitchen.' (Characters or pinyin.)",
            modelAnswer:
              "{{我家有两个卧室、一个客厅和一个厨房。|Wǒ jiā yǒu liǎng ge wòshì, yí ge kètīng hé yí ge chúfáng.|My home has two bedrooms, a living room and a kitchen.}}",
            markScheme: [
              "我家 + {{有|yǒu}} for 'there are'",
              "{{两个|liǎng ge}} for 'two' before the measure word (not 二个)",
              "Every room counted with 个",
              "List joined with 、 and final 和",
            ],
            commonError: "二个卧室 ✗ — before a measure word, 'two' is always 两: 两个卧室.",
            guideRef: "Rooms: 有 says what's there",
            difficulty: "core",
            hints: [
              "Pattern: place + 有 + number + 个 + room.",
              "Which 'two' goes before 个 — 二 or 两?",
            ],
          },
          {
            id: "home-qa-a-q03",
            question:
              "Write one Chinese sentence saying your living room has one sofa, one television and two chairs — using the right measure word for each.",
            modelAnswer:
              "{{我的客厅有一个沙发、一台电视和两把椅子。|Wǒ de kètīng yǒu yí ge shāfā, yì tái diànshì hé liǎng bǎ yǐzi.|My living room has a sofa, a TV and two chairs.}}",
            markScheme: [
              "{{一个沙发|yí ge shāfā}} — 个 for the sofa",
              "{{一台电视|yì tái diànshì}} — 台 for the machine",
              "{{两把椅子|liǎng bǎ yǐzi}} — 把 for the chairs, with 两",
              "Place + 有 + list structure",
            ],
            commonError:
              "一张电视 ✗ — 张 is for flat furniture like beds and tables; a TV is a machine, so it takes 台.",
            guideRef: "One bed, one 张? Measure words for furniture",
            difficulty: "core",
            hints: [
              "Sort each item by shape/type before you write: which is a machine? Which do you grip?",
              "The sofa doesn't fit 张/把/台 — use the safety net.",
            ],
            strategy: "Sort by shape, not by translation",
          },
          {
            id: "home-qa-a-q04",
            question:
              "Read this and answer in English: {{我住在组屋，在十五楼。我家不大，有两个卧室、一个客厅和一个厨房，没有书房。我的卧室很小，可是很漂亮。|Wǒ zhù zài zǔwū, zài shíwǔ lóu. Wǒ jiā bú dà, yǒu liǎng ge wòshì, yí ge kètīng hé yí ge chúfáng, méiyǒu shūfáng. Wǒ de wòshì hěn xiǎo, kěshì hěn piàoliang.}} ({{可是|kěshì}} = but.) (a) What kind of home does the writer live in, and on which floor? (b) Which rooms does the home have? (c) Does it have a study? (d) What is the bedroom like?",
            modelAnswer:
              "(a) An HDB flat, on the 15th floor. (b) Two bedrooms, a living room and a kitchen. (c) No — 没有书房 says there is no study. (d) Very small, but very pretty.",
            markScheme: [
              "(a) HDB flat + 15th floor",
              "(b) Two bedrooms, living room, kitchen",
              "(c) No study (没有)",
              "(d) Small but pretty",
            ],
            commonError:
              "Missing the negatives: 不大 = NOT big, 没有书房 = NO study. Spot 不 and 没 before translating.",
            guideRef: "Rooms: 有 says what's there",
            difficulty: "core",
            hints: [
              "Scan for numbers first: 十五, 两个, 一个…",
              "Underline 不 and 没有 — they flip the meaning of what follows.",
            ],
          },
          {
            id: "home-qa-a-q05",
            question:
              "Write two Chinese sentences about helping at home: (a) you help Mum cook ({{做饭|zuò fàn|to cook}}); (b) you clean your bedroom ({{打扫|dǎsǎo|to clean}}).",
            modelAnswer:
              "{{我帮妈妈做饭。|Wǒ bāng māma zuò fàn.|I help Mum cook.}} {{我打扫我的卧室。|Wǒ dǎsǎo wǒ de wòshì.|I clean my bedroom.}}",
            markScheme: [
              "(a) {{帮|bāng}} + 妈妈 + 做饭 in that order",
              "(b) 打扫 + the room being cleaned",
              "Subject 我 in both sentences",
            ],
            commonError:
              "我做饭帮妈妈 ✗ — 帮 + the person comes BEFORE the action they get help with: 我帮妈妈做饭.",
            guideRef: "Rooms: 有 says what's there",
            difficulty: "core",
            hints: [
              "Pattern: 帮 + person + action.",
              "打扫 works like English 'clean': verb + the thing cleaned.",
            ],
          },
          {
            id: "home-qa-a-q06",
            question:
              "Write at least four Chinese sentences describing your home: where you live (and the floor), what rooms it has, one sentence with 很 + adjective, and one chore you do. (Characters or pinyin.)",
            modelAnswer:
              "Example answer: {{我住在公寓，在八楼。|Wǒ zhù zài gōngyù, zài bā lóu.|I live in a flat, on the 8th floor.}} {{我家有三个卧室、一个客厅和一个厨房。|Wǒ jiā yǒu sān ge wòshì, yí ge kètīng hé yí ge chúfáng.|My home has three bedrooms, a living room and a kitchen.}} {{我的房间很小，可是很漂亮。|Wǒ de fángjiān hěn xiǎo, kěshì hěn piàoliang.|My room is small but very pretty.}} {{我帮妈妈洗碗。|Wǒ bāng māma xǐ wǎn.|I help Mum wash the dishes.}} Any accurate sentences covering the four jobs earn full marks.",
            markScheme: [
              "住在 sentence with home type (房子/公寓/组屋), floor with …楼 a bonus",
              "有 sentence listing rooms with measure words",
              "很 + adjective sentence with no 是",
              "A chore sentence (帮…, 做饭, 洗碗 or 打扫…)",
            ],
            commonError:
              "是 + adjective (我的房间是小 ✗) — adjectives link with 很. This is the single most common slip in home descriptions.",
            guideRef: "Where do you live? 住在 and your kind of home",
            difficulty: "challenge",
            hints: [
              "Four jobs — tick them off one at a time, one pattern each.",
              "Frames: 我住在…，在…楼。 我家有…。 我的…很…。 我帮…／我打扫…。",
              "Final check: measure words present? No 是 before adjectives?",
            ],
            strategy: "Build, don't memorise — one pattern per sentence",
            solutions: [
              {
                label: "Checklist method (recommended)",
                steps: [
                  "List the four jobs: live-where, rooms, adjective, chore.",
                  "Match each job to its pattern: 住在+place / 家有+list / 很+adj / 帮+person+action.",
                  "Fill each frame with YOUR real details — real answers are easier to remember and mark.",
                  "Proofread for the two classic errors: missing measure words, and 是 before an adjective.",
                ],
              },
              {
                label: "Interview yourself",
                steps: [
                  "Ask yourself the exam-style questions: 你住在哪儿？你家有几个房间？你的房间大吗？你帮妈妈做什么？",
                  "Answer each one in a full sentence — questions force out full patterns.",
                  "String the four answers together; add 可是 or 和 to make it flow.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "home-qa-b",
        title: "Paper B — Locations & neighbourhood",
        description: "Position words, the 在/有 flip, and describing your neighbourhood with 附近 and 离.",
        questions: [
          {
            id: "home-qa-b-q01",
            question: "Translate into Chinese: 'The computer is in the study.' (Characters or pinyin.)",
            modelAnswer:
              "{{电脑在书房里。|Diànnǎo zài shūfáng lǐ.|The computer is in the study.}}",
            markScheme: [
              "Thing first: {{电脑|diànnǎo}}",
              "{{在|zài}} before the place",
              "{{里|lǐ}} AFTER 书房, not before",
            ],
            commonError: "电脑在里书房 ✗ — English 'in the study' order. 里 glues on after: 书房里 = 'study-inside'.",
            guideRef: "The location system: why 上 comes after the noun",
            difficulty: "warmup",
            hints: ["Shape: thing + 在 + noun + position word."],
          },
          {
            id: "home-qa-b-q02",
            question: "Translate into Chinese: 'There is a park near my home.' (Characters or pinyin.)",
            modelAnswer:
              "{{我家附近有一个公园。|Wǒ jiā fùjìn yǒu yí ge gōngyuán.|There is a park near my home.}}",
            markScheme: [
              "Place first: {{我家附近|wǒ jiā fùjìn}}",
              "{{有|yǒu}} to introduce the new thing",
              "{{一个公园|yí ge gōngyuán}} with the measure word",
            ],
            commonError:
              "Starting with 有 like English 'There is…' — Chinese existence sentences start from the PLACE: 我家附近有….",
            guideRef: "My neighbourhood: 附近 and 离",
            difficulty: "warmup",
            hints: ["Pattern: place + 附近 + 有 + thing.", "'There is' has no separate word — 有 does that job."],
          },
          {
            id: "home-qa-b-q03",
            question:
              "Rewrite {{床下有一只猫。|Chuáng xià yǒu yì zhī māo.}} so it starts with {{猫|māo}}, then explain in one sentence when you would use each version.",
            modelAnswer:
              "{{猫在床下。|Māo zài chuáng xià.|The cat is under the bed.}} Use 床下有一只猫 to tell someone a cat exists there (new information); use 猫在床下 when you both already know the cat and you're saying where it is.",
            markScheme: [
              "Correct rewrite: {{猫在床下|māo zài chuáng xià}}",
              "床 + 下 kept together in that order",
              "有 version = new information; 在 version = locating a known thing",
            ],
            commonError: "猫在下床 ✗ — moving 猫 to the front must not split 床下 ('the bed's underside').",
            guideRef: "The location system: why 上 comes after the noun",
            difficulty: "core",
            hints: [
              "This is the flip from the guide — swap which end you start from.",
              "Thing first → 在; place first → 有.",
            ],
            strategy: "Known thing → 在; new thing → 有",
            solutions: [
              {
                label: "Swap the ends",
                steps: [
                  "Label: place = 床下, thing = 一只猫.",
                  "Move the thing to the front and drop its number: 猫….",
                  "Replace 有 with 在 and keep 床下 glued: 猫在床下。",
                ],
              },
              {
                label: "Ask the question each answers",
                steps: [
                  "床下有什么？('What's under the bed?') → 床下有一只猫。",
                  "猫在哪儿？('Where's the cat?') → 猫在床下。",
                  "Each sentence starts with what the question already knew — that's how to pick between them.",
                ],
              },
            ],
          },
          {
            id: "home-qa-b-q04",
            question:
              "Read this living-room description and answer in English: {{客厅里有一个沙发、一台电视和一张桌子。电视在沙发对面，桌子在沙发和电视的中间。灯在沙发旁边。|Kètīng lǐ yǒu yí ge shāfā, yì tái diànshì hé yì zhāng zhuōzi. Diànshì zài shāfā duìmiàn, zhuōzi zài shāfā hé diànshì de zhōngjiān. Dēng zài shāfā pángbiān.}} ({{灯|dēng}} = lamp.) (a) Name the three pieces of furniture introduced first. (b) Where is the TV? (c) Where is the table? (d) Where is the lamp?",
            modelAnswer:
              "(a) A sofa, a TV and a table. (b) Opposite the sofa. (c) Between the sofa and the TV. (d) Beside the sofa.",
            markScheme: [
              "(a) Sofa, TV, table",
              "(b) TV opposite ({{对面|duìmiàn}}) the sofa",
              "(c) Table between ({{中间|zhōngjiān}}) sofa and TV",
              "(d) Lamp beside ({{旁边|pángbiān}}) the sofa",
            ],
            commonError:
              "Mixing up 对面 (opposite, facing) and 旁边 (right next to) — the TV faces the sofa from across the room; the lamp stands next to it.",
            guideRef: "The location system: why 上 comes after the noun",
            difficulty: "core",
            hints: [
              "Sketch the room as you read — each sentence pins one item.",
              "In every location sentence the FIRST noun is the thing being placed.",
            ],
            strategy: "Translate the picture, not the words",
          },
          {
            id: "home-qa-b-q05",
            question:
              "Translate into Chinese: 'My home is very close to school, but very far from the swimming pool.' ({{可是|kěshì}} = but.)",
            modelAnswer:
              "{{我家离学校很近，可是离游泳池很远。|Wǒ jiā lí xuéxiào hěn jìn, kěshì lí yóuyǒngchí hěn yuǎn.|My home is very close to school, but very far from the swimming pool.}}",
            markScheme: [
              "{{离|lí}} used before both places",
              "{{很近|hěn jìn}} for close, {{很远|hěn yuǎn}} for far",
              "{{可是|kěshì}} joining the two halves",
              "No 是 before 近/远",
            ],
            commonError: "我家离学校是很近 ✗ — 近 and 远 are adjectives, so they link with 很, never 是.",
            guideRef: "My neighbourhood: 附近 and 离",
            difficulty: "core",
            hints: [
              "Frame: A 离 B 很近／很远.",
              "The second half can drop 我家 and reuse it: …，可是离…很远。",
            ],
          },
          {
            id: "home-qa-b-q06",
            question:
              "A friend wrote {{我的书在上桌子|wǒ de shū zài shàng zhuōzi}} ✗ and can't see the problem. Correct the sentence, name the error, and explain WHY Chinese orders it that way.",
            modelAnswer:
              "Correct version: {{我的书在桌子上。|Wǒ de shū zài zhuōzi shàng.|My book is on the table.}} The error: 上 was placed before 桌子, copying English 'ON the table'. Chinese position words work like nouns naming a zone — {{桌子上|zhuōzi shàng}} means 'the table's top' — so 上 must come AFTER the noun it belongs to. The sentence shape is thing + 在 + place, and 桌子上 is the place.",
            markScheme: [
              "Corrected sentence: 我的书在桌子上",
              "Error named: position word placed before the noun (English order)",
              "Explanation: 上 names a zone, 桌子上 = 'table-top', one place-word",
              "Shape identified: thing + 在 + place",
            ],
            commonError:
              "Correcting the sentence without the reason — 'it sounds wrong' isn't an explanation. The table-top idea is what earns the marks.",
            guideRef: "The location system: why 上 comes after the noun",
            difficulty: "challenge",
            hints: [
              "First fix it, then explain it — two separate jobs.",
              "What does 桌子上 literally mean if 上 is a noun?",
              "Compare: whose word order is 在上桌子 really?",
            ],
            strategy: "Read 桌子上 as one word: 'table-top'",
          },
          {
            id: "home-qa-b-q07",
            question:
              "Describe your neighbourhood in at least three Chinese sentences: one with {{附近有|fùjìn yǒu}}, one with {{离…很近/很远|lí… hěn jìn/hěn yuǎn}}, and one with {{对面|duìmiàn}} or {{旁边|pángbiān}}. (Characters or pinyin.)",
            modelAnswer:
              "Example answer: {{我家附近有一个超市、一个公园和一个图书馆。|Wǒ jiā fùjìn yǒu yí ge chāoshì, yí ge gōngyuán hé yí ge túshūguǎn.|Near my home there's a supermarket, a park and a library.}} {{我家离学校很近，可是离医院很远。|Wǒ jiā lí xuéxiào hěn jìn, kěshì lí yīyuàn hěn yuǎn.|My home is close to school but far from the hospital.}} {{我家对面有一个游泳池。|Wǒ jiā duìmiàn yǒu yí ge yóuyǒngchí.|Opposite my home there's a swimming pool.}} Any accurate sentences using the three patterns earn full marks.",
            markScheme: [
              "附近 sentence: place + 附近 + 有 + things with measure words",
              "离 sentence: A 离 B 很近/很远, no 是",
              "A 对面/旁边 sentence with the position word after the noun",
              "Natural list punctuation (、 and 和) where lists appear",
            ],
            commonError:
              "Position words drifting in front of their nouns (对面我家 ✗) — every zone word in this topic follows its noun: 我家对面.",
            guideRef: "My neighbourhood: 附近 and 离",
            difficulty: "challenge",
            hints: [
              "Three sentences, three patterns — write them one at a time.",
              "Frames: 我家附近有…。 我家离…很近／很远。 我家对面／旁边有…。",
              "Use real places from your own neighbourhood — easier to write and to remember.",
            ],
            strategy: "Recycle the position-word logic",
          },
        ],
      },
    ],
  },
};
