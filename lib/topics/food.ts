import type { Topic } from "../types";

// Food & Drink — Cambridge IGCSE 0547 pathway, Year 8.
// House style: see greetings.ts (exemplar). AoPS pedagogy: discover patterns, don't decree them.

export const food: Topic = {
  id: "food",
  title: "Food & Drink",
  titleChinese: { hanzi: "饮食", pinyin: "yǐnshí" },
  subject: "chinese",
  icon: "🥟",
  color: "orange",
  intro:
    "Food is where Mandarin gets delicious — and where Singapore gives you a head start. By the end of this topic you can read a hawker-centre menu, order {{海南鸡饭|Hǎinán jīfàn|Hainanese chicken rice}} with the right measure word, say exactly how spicy you like it, and understand why Chinese splits English 'have' into two different verbs.",
  guide: [
    {
      heading: "Three meals and the eat/drink split",
      discovery: {
        problem:
          "English uses 'have' for everything: have breakfast, have soup, have tea, have a sandwich. Chinese has no all-purpose 'have' for food. Look at these two real sentences: {{我吃米饭|wǒ chī mǐfàn|I eat rice}} and {{我喝茶|wǒ hē chá|I drink tea}}. Now decide: which verb goes with {{牛奶|niúnǎi|milk}}? Which goes with {{面包|miànbāo|bread}}? What is your rule?",
        idea:
          "Chinese always makes you choose: {{吃|chī|to eat}} for things you chew, {{喝|hē|to drink}} for liquids. So 'have breakfast' is {{吃早饭|chī zǎofàn|eat breakfast}} — never 有早饭, which would mean you *own* a breakfast. Spotting the 'have' trap now will save you dozens of errors later.",
      },
      body:
        "The three meals are built from time-of-day words plus {{饭|fàn|cooked rice; meal}}:\n- {{早饭|zǎofàn|breakfast}} (early + meal)\n- {{午饭|wǔfàn|lunch}} (midday + meal)\n- {{晚饭|wǎnfàn|dinner}} (evening + meal)\n\nSay what you eat or drink with a simple subject + verb + food shape: {{我七点吃早饭。|Wǒ qī diǎn chī zǎofàn.|I eat breakfast at seven.}} {{他喝牛奶。|Tā hē niúnǎi.|He drinks milk.}}\n\nHungry and thirsty use {{了|le}} to signal a new state: {{我饿了！|Wǒ è le!|I'm hungry (I've become hungry)!}} {{我渴了。|Wǒ kě le.|I'm thirsty.}} To say you're not hungry: {{我不饿。|Wǒ bú è.|I'm not hungry.}} — notice {{不|bù}} changes to bú before a 4th-tone word like {{饿|è}}.",
      whyItWorks:
        "Why does {{饭|fàn}} mean both 'cooked rice' and 'meal'? Rice has been the heart of a Chinese meal for thousands of years, so 'eat rice' came to mean 'eat a meal'. That's why {{吃饭了吗？|Chī fàn le ma?|Have you eaten?}} works as a friendly greeting — food and daily life are that closely linked.",
      strategies: ["Chew or swallow? Choose 吃 or 喝", "Beware the English 'have' trap"],
      keyPoints: [
        "吃 = eat (things you chew); 喝 = drink (liquids)",
        "'Have breakfast/lunch/dinner' = 吃早饭 / 吃午饭 / 吃晚饭 — never 有",
        "饭 means both 'cooked rice' and 'meal': 早饭, 午饭, 晚饭",
        "我饿了 / 我渴了 — 了 marks the new state; negative is 我不饿 (bú è)",
      ],
      vocab: [
        {
          hanzi: "吃",
          pinyin: "chī",
          english: "to eat",
          pos: "verb",
          example: { hanzi: "我吃早饭。", pinyin: "Wǒ chī zǎofàn.", english: "I eat breakfast." },
        },
        {
          hanzi: "喝",
          pinyin: "hē",
          english: "to drink",
          pos: "verb",
          example: { hanzi: "她喝水。", pinyin: "Tā hē shuǐ.", english: "She drinks water." },
        },
        { hanzi: "早饭", pinyin: "zǎofàn", english: "breakfast", pos: "noun" },
        { hanzi: "午饭", pinyin: "wǔfàn", english: "lunch", pos: "noun" },
        { hanzi: "晚饭", pinyin: "wǎnfàn", english: "dinner", pos: "noun" },
        { hanzi: "饭", pinyin: "fàn", english: "cooked rice; meal", pos: "noun" },
        { hanzi: "饿", pinyin: "è", english: "hungry", pos: "adjective" },
        { hanzi: "渴", pinyin: "kě", english: "thirsty", pos: "adjective" },
      ],
      patterns: [
        {
          pattern: "Subject + 吃/喝 + food/drink",
          example: { hanzi: "我喝牛奶。", pinyin: "Wǒ hē niúnǎi.", english: "I drink milk." },
          note: "Pick the verb by the food: chewable → 吃, liquid → 喝.",
        },
        {
          pattern: "Subject + 饿/渴 + 了",
          example: { hanzi: "我饿了！", pinyin: "Wǒ è le!", english: "I'm hungry!" },
          note: "了 signals a change of state — 'I've become hungry'.",
        },
      ],
    },
    {
      heading: "Building food words: chicken + meat = ?",
      discovery: {
        problem:
          "You know {{鸡|jī|chicken (the bird)}} and {{肉|ròu|meat}}. So what must {{鸡肉|jīròu}} mean? Now stretch it: {{牛|niú}} means cow — decode {{牛肉|niúròu}} and {{牛奶|niúnǎi}} (奶 = milk). Last one, no help: {{果汁|guǒzhī}} is fruit + juice, so what is {{苹果汁|píngguǒzhī}}?",
        idea:
          "Chinese food words are LEGO. 鸡肉 = chicken meat, 牛肉 = beef, 牛奶 = cow's milk, 苹果汁 = apple juice. Learn the blocks, and menu words you've never seen before simply fall apart into pieces you know.",
      },
      body:
        "The staples: {{米饭|mǐfàn|cooked rice}}, {{面条|miàntiáo|noodles}}, {{面包|miànbāo|bread}} — notice 面 (flour) builds both noodles and bread. Dumpling-family favourites: {{饺子|jiǎozi|dumplings}} and {{包子|bāozi|steamed buns}}.\n\nProteins and sides: {{鸡肉|jīròu|chicken (meat)}}, {{牛肉|niúròu|beef}}, {{鱼|yú|fish}}, {{鸡蛋|jīdàn|egg (chicken egg)}}, {{汤|tāng|soup}}, {{蔬菜|shūcài|vegetables}}.\n\nFruit: {{水果|shuǐguǒ|fruit}} is the category; {{苹果|píngguǒ|apple}} and {{香蕉|xiāngjiāo|banana}} are members.\n\nDrinks: {{水|shuǐ|water}}, {{茶|chá|tea}}, {{牛奶|niúnǎi|milk}}, {{果汁|guǒzhī|juice}}, {{可乐|kělè|cola}}, {{咖啡|kāfēi|coffee}}. 可乐 and 咖啡 are sound-borrowings from English — say them aloud and you'll hear it.",
      whyItWorks:
        "English hides word history (why is cow meat called 'beef'?), but Chinese compounds stay transparent: each character keeps its meaning inside the new word. That's why one hour of block-learning beats ten hours of list-memorising — 鱼 + 汤 gives you {{鱼汤|yútāng|fish soup}} for free, and a menu becomes a puzzle you can actually solve.",
      strategies: ["Break unknown words into known blocks", "Decode menus like puzzles, not lists"],
      keyPoints: [
        "Compounds are transparent: animal + 肉 = that animal's meat (牛肉 = beef)",
        "面 (flour) builds 面条 (noodles) and 面包 (bread)",
        "水果 is the category 'fruit'; 苹果, 香蕉 are examples",
        "可乐 and 咖啡 are borrowed from English sounds",
      ],
      vocab: [
        { hanzi: "米饭", pinyin: "mǐfàn", english: "cooked rice", pos: "noun" },
        { hanzi: "面条", pinyin: "miàntiáo", english: "noodles", pos: "noun" },
        { hanzi: "面包", pinyin: "miànbāo", english: "bread", pos: "noun" },
        { hanzi: "饺子", pinyin: "jiǎozi", english: "dumplings", pos: "noun" },
        { hanzi: "鸡肉", pinyin: "jīròu", english: "chicken (meat)", pos: "noun" },
        { hanzi: "牛肉", pinyin: "niúròu", english: "beef", pos: "noun" },
        { hanzi: "鱼", pinyin: "yú", english: "fish", pos: "noun" },
        { hanzi: "鸡蛋", pinyin: "jīdàn", english: "egg", pos: "noun" },
        { hanzi: "汤", pinyin: "tāng", english: "soup", pos: "noun" },
        { hanzi: "果汁", pinyin: "guǒzhī", english: "fruit juice", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "Animal + 肉 = that meat",
          example: { hanzi: "我吃鸡肉。", pinyin: "Wǒ chī jīròu.", english: "I eat chicken." },
          note: "牛肉 beef, 鸡肉 chicken — and it keeps working for animals you meet later.",
        },
        {
          pattern: "Fruit + 汁 = that juice",
          example: {
            hanzi: "我喝苹果汁。",
            pinyin: "Wǒ hē píngguǒzhī.",
            english: "I drink apple juice.",
          },
          note: "果汁 is the general word; put a fruit in front for the exact flavour.",
        },
      ],
    },
    {
      heading: "Tasty or not: the 好 + verb discovery",
      discovery: {
        problem:
          "You already know {{好|hǎo|good}} and {{吃|chī|to eat}}. Chinese sticks them together: {{好吃|hǎochī}} literally means 'good to eat' — tasty! So without being taught: what must {{好喝|hǎohē}} mean? And which one would you use for {{果汁|guǒzhī|juice}} — 好吃 or 好喝?",
        idea:
          "**好 + verb = 'good to VERB'.** 好吃 = tasty (food you chew), 好喝 = tasty (drinks), and later you'll meet {{好看|hǎokàn|good to look at → attractive/enjoyable to watch}}. You just discovered a machine for making new words, not one word.",
      },
      body:
        "The four core tastes:\n- {{甜|tián|sweet}} — 香蕉很甜\n- {{酸|suān|sour}} — think lime juice\n- {{辣|là|spicy}} — chilli heat\n- {{咸|xián|salty}} — soy sauce territory\n\nDial the strength up and down:\n- {{很|hěn|very (neutral)}} : {{很好吃|hěn hǎochī|really tasty}}\n- {{非常|fēicháng|extremely}} : {{非常好吃|fēicháng hǎochī|extremely tasty}} — strong praise\n- {{太…了|tài…le|too…!}} : {{太辣了！|Tài là le!|It's too spicy!}} — over the limit\n- {{有点儿|yǒudiǎnr|a bit (too)}} : {{有点儿咸|yǒudiǎnr xián|a bit too salty}} — a gentle complaint\n\nRemember from Greetings: adjectives connect directly to the subject with no {{是|shì|to be}} — {{这个汤很好喝。|Zhège tāng hěn hǎohē.|This soup is delicious.}}",
      whyItWorks:
        "Why does {{有点儿|yǒudiǎnr}} sound like a complaint? Because Chinese reserves it for things drifting the *wrong* way — 有点儿辣 means 'a bit too spicy (for me)'. That's why 有点儿好吃 sounds bizarre: you can't be 'a bit too delicious'. For happy surprises, Chinese reaches for 很 or 非常 instead. Intensifiers carry attitude, not just volume.",
      strategies: ["好 + verb = good to VERB", "Match the intensifier to your attitude"],
      keyPoints: [
        "好吃 for food, 好喝 for drinks — both literally 'good to eat/drink'",
        "Four tastes: 甜 sweet, 酸 sour, 辣 spicy, 咸 salty",
        "太…了 = too much: 太辣了! ; 有点儿 = a bit (too) — mild complaint",
        "No 是 with adjectives: 汤很好喝, NOT 汤是好喝",
      ],
      vocab: [
        {
          hanzi: "好吃",
          pinyin: "hǎochī",
          english: "tasty, delicious (food)",
          pos: "adjective",
          example: { hanzi: "饺子很好吃。", pinyin: "Jiǎozi hěn hǎochī.", english: "Dumplings are delicious." },
        },
        { hanzi: "好喝", pinyin: "hǎohē", english: "tasty, delicious (drinks)", pos: "adjective" },
        { hanzi: "甜", pinyin: "tián", english: "sweet", pos: "adjective" },
        { hanzi: "酸", pinyin: "suān", english: "sour", pos: "adjective" },
        { hanzi: "辣", pinyin: "là", english: "spicy, hot", pos: "adjective" },
        { hanzi: "咸", pinyin: "xián", english: "salty", pos: "adjective" },
        { hanzi: "非常", pinyin: "fēicháng", english: "extremely", pos: "adverb" },
        { hanzi: "有点儿", pinyin: "yǒudiǎnr", english: "a bit (too)", pos: "adverb" },
      ],
      patterns: [
        {
          pattern: "好 + verb",
          example: { hanzi: "这个茶很好喝。", pinyin: "Zhège chá hěn hǎohē.", english: "This tea is delicious." },
          note: "'Good to VERB': 好吃 good to eat, 好喝 good to drink, 好看 good to watch.",
        },
        {
          pattern: "太 + adjective + 了！",
          example: { hanzi: "太辣了！", pinyin: "Tài là le!", english: "It's too spicy!" },
          note: "太 needs its partner 了 — they come as a pair.",
        },
        {
          pattern: "有点儿 + adjective",
          example: { hanzi: "这个汤有点儿咸。", pinyin: "Zhège tāng yǒudiǎnr xián.", english: "This soup is a bit too salty." },
          note: "Only for unwelcome qualities — a built-in polite complaint.",
        },
      ],
    },
    {
      heading: "Ordering like a local: 我要 and measure words",
      discovery: {
        problem:
          "Even English refuses to say 'a rice' — you say 'a BOWL OF rice', 'a CUP OF tea'. Chinese does this for *everything*, with measure words: {{一碗米饭|yì wǎn mǐfàn|a bowl of rice}}, {{一杯茶|yì bēi chá|a cup of tea}}. So at a noodle stall, how would you ask for one bowl of noodles? And what would 'a cup of coffee' be?",
        idea:
          "Number + **measure word** + noun, always. Choose the measure by the container or shape: {{碗|wǎn|bowl}} for rice, noodles and soup; {{杯|bēi|cup/glass}} for drinks; {{瓶|píng|bottle}} for bottled drinks; {{盘|pán|plate}} for dishes served flat; and {{个|gè|general measure}} when nothing better fits.",
      },
      body:
        "At a Singapore hawker centre, ordering is a three-line game. Get attention: {{服务员！|Fúwùyuán!|Waiter!}} Ask for the {{菜单|càidān|menu}} if there is one, then order with {{要|yào|to want}}:\n\n{{我要一碗面条。|Wǒ yào yì wǎn miàntiáo.|I'd like a bowl of noodles.}}\n\nLocals often use the snappier {{来|lái|to come; (here) bring}}: {{来一个包子！|Lái yí ge bāozi!|One steamed bun, please! (lit. 'bring one bun')}}\n\nAsk the price with {{多少钱|duōshao qián|how much money}}: {{海南鸡饭多少钱？|Hǎinán jīfàn duōshao qián?|How much is the Hainanese chicken rice?}}\n\nSingapore flavour: {{海南鸡饭|Hǎinán jīfàn|Hainanese chicken rice}} — poached chicken over fragrant rice — is practically the national dish, and {{点心|diǎnxin|dim sum}} (small steamed and fried dishes, a Cantonese tradition) is weekend-brunch royalty. Hawker centres are the perfect classroom: stall signs are bilingual, so you can check your menu-decoding on the spot.\n\nCounting reminder: with measure words, two is {{两|liǎng|two (before measure words)}}, not 二 — {{两杯茶|liǎng bēi chá|two cups of tea}}.",
      whyItWorks:
        "Measure words feel like extra work until you see the system: they classify nouns by shape and container, so 碗 covers anything bowl-shaped-served, 杯 anything cup-served. That's why you can pick the right measure for a food you've never ordered — laksa comes in a bowl, so it must be 一碗. When no shape fits, 个 is the universal fallback: 一个包子.",
      strategies: ["Choose the measure by the container", "When stuck, fall back on 个", "两, not 二, before measure words"],
      keyPoints: [
        "Order shape: 我要 + number + measure word + food",
        "碗 bowls (rice/noodles/soup), 杯 cups, 瓶 bottles, 盘 plates, 个 fallback",
        "来一个… is the casual 'bring me one…' you'll hear at hawker stalls",
        "多少钱? asks the price; 两 (not 二) before measure words",
      ],
      vocab: [
        { hanzi: "要", pinyin: "yào", english: "to want (order)", pos: "verb" },
        { hanzi: "服务员", pinyin: "fúwùyuán", english: "waiter, waitress", pos: "noun" },
        { hanzi: "菜单", pinyin: "càidān", english: "menu", pos: "noun" },
        { hanzi: "多少钱", pinyin: "duōshao qián", english: "how much (money)?", pos: "question phrase" },
        {
          hanzi: "碗",
          pinyin: "wǎn",
          english: "bowl (measure word)",
          pos: "measure word",
          example: { hanzi: "一碗米饭", pinyin: "yì wǎn mǐfàn", english: "a bowl of rice" },
        },
        {
          hanzi: "杯",
          pinyin: "bēi",
          english: "cup, glass (measure word)",
          pos: "measure word",
          example: { hanzi: "一杯茶", pinyin: "yì bēi chá", english: "a cup of tea" },
        },
        { hanzi: "瓶", pinyin: "píng", english: "bottle (measure word)", pos: "measure word" },
        { hanzi: "盘", pinyin: "pán", english: "plate (measure word)", pos: "measure word" },
        { hanzi: "个", pinyin: "gè", english: "general measure word", pos: "measure word" },
        { hanzi: "两", pinyin: "liǎng", english: "two (before measure words)", pos: "number" },
      ],
      patterns: [
        {
          pattern: "我要 + number + measure word + noun",
          example: {
            hanzi: "我要一碗米饭。",
            pinyin: "Wǒ yào yì wǎn mǐfàn.",
            english: "I'd like a bowl of rice.",
          },
          note: "The measure word is never optional — 我要一米饭 is wrong.",
        },
        {
          pattern: "来 + number + measure word + noun",
          example: { hanzi: "来一盘饺子！", pinyin: "Lái yì pán jiǎozi!", english: "One plate of dumplings, please!" },
          note: "Casual ordering — literally 'let one plate of dumplings come'.",
        },
        {
          pattern: "Thing + 多少钱？",
          example: {
            hanzi: "一杯咖啡多少钱？",
            pinyin: "Yì bēi kāfēi duōshao qián?",
            english: "How much is a cup of coffee?",
          },
          note: "No verb needed — the thing plus the price question is a full sentence.",
        },
      ],
    },
    {
      heading: "Wants and choices: 想 and 还是",
      discovery: {
        problem:
          "Two waiters, two questions. Waiter A asks {{你要茶吗？|Nǐ yào chá ma?|Do you want tea?}} Waiter B asks {{你要茶还是咖啡？|Nǐ yào chá háishi kāfēi?|Do you want tea or coffee?}} One question can be answered with yes/no; the other CANNOT. Which is which — and what should you say to Waiter B?",
        idea:
          "{{还是|háishi|or (in questions)}} builds the choice into the question, so 'yes' makes no sense as an answer — you must pick one: {{我要咖啡。|Wǒ yào kāfēi.|I'll have coffee.}} A 还是 question never takes 吗: the choice already does the question's job.",
      },
      body:
        "To say what you'd *like to do*, put {{想|xiǎng|would like to}} before a verb:\n\n{{我想吃饺子。|Wǒ xiǎng chī jiǎozi.|I'd like to eat dumplings.}}\n{{我想喝果汁。|Wǒ xiǎng hē guǒzhī.|I'd like to drink juice.}}\n\nCompare: {{我要一杯果汁|wǒ yào yì bēi guǒzhī}} is the direct order ('I want / I'll have'); {{我想…|wǒ xiǎng}} + verb is the softer wish ('I'd like to…'). At a stall, 要 gets food on your tray; chatting with friends, 想 shares a craving.\n\nOffer choices with A {{还是|háishi}} B:\n{{你想吃米饭还是面条？|Nǐ xiǎng chī mǐfàn háishi miàntiáo?|Would you like rice or noodles?}}\nAnswer by naming your pick: {{我想吃面条。|Wǒ xiǎng chī miàntiáo.|I'd like noodles.}}\n\nJoin foods (not choices) with {{和|hé|and}}: {{我吃面包和鸡蛋。|Wǒ chī miànbāo hé jīdàn.|I eat bread and eggs.}} — but 和 links nouns, never two halves of a question.",
      whyItWorks:
        "Chinese keeps its two question machines separate. 吗 bolts a yes/no switch onto a statement; 还是 wires a fork into the middle. Using both — 你要茶还是咖啡吗？✗ — is like asking 'Do you want tea or coffee, yes or no?' The machinery clashes. English 'or' hides this difference; Chinese makes it visible, which is exactly why examiners love testing it.",
      strategies: ["还是 questions: answer by choosing, never with yes/no", "One question machine at a time: 吗 or 还是, never both"],
      keyPoints: [
        "想 + verb = would like to (do): 我想吃饺子",
        "要 + noun orders the thing; 想 + verb expresses the wish",
        "A 还是 B? forces a choice — answer with one option, not 'yes'",
        "Never add 吗 to a 还是 question",
        "和 joins nouns (面包和鸡蛋), not question choices",
      ],
      vocab: [
        {
          hanzi: "想",
          pinyin: "xiǎng",
          english: "would like to, want to",
          pos: "verb",
          example: { hanzi: "我想吃点心。", pinyin: "Wǒ xiǎng chī diǎnxin.", english: "I'd like to eat dim sum." },
        },
        { hanzi: "还是", pinyin: "háishi", english: "or (in questions)", pos: "conjunction" },
        { hanzi: "和", pinyin: "hé", english: "and (joins nouns)", pos: "conjunction" },
        { hanzi: "海南鸡饭", pinyin: "Hǎinán jīfàn", english: "Hainanese chicken rice", pos: "noun" },
        { hanzi: "点心", pinyin: "diǎnxin", english: "dim sum", pos: "noun" },
        { hanzi: "来", pinyin: "lái", english: "to come; bring (ordering)", pos: "verb" },
      ],
      patterns: [
        {
          pattern: "Subject + 想 + verb phrase",
          example: { hanzi: "我想喝可乐。", pinyin: "Wǒ xiǎng hē kělè.", english: "I'd like to drink cola." },
          note: "想 needs a verb after it — 我想可乐 is incomplete.",
        },
        {
          pattern: "A + 还是 + B？",
          example: {
            hanzi: "你要茶还是咖啡？",
            pinyin: "Nǐ yào chá háishi kāfēi?",
            english: "Do you want tea or coffee?",
          },
          note: "Already a question — do not add 吗.",
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "早饭", pinyin: "zǎofàn", english: "breakfast" },
      { hanzi: "午饭", pinyin: "wǔfàn", english: "lunch" },
      { hanzi: "晚饭", pinyin: "wǎnfàn", english: "dinner" },
      { hanzi: "吃", pinyin: "chī", english: "to eat" },
      { hanzi: "喝", pinyin: "hē", english: "to drink" },
      { hanzi: "饿", pinyin: "è", english: "hungry" },
      { hanzi: "渴", pinyin: "kě", english: "thirsty" },
      { hanzi: "米饭", pinyin: "mǐfàn", english: "cooked rice" },
      { hanzi: "面条", pinyin: "miàntiáo", english: "noodles" },
      { hanzi: "面包", pinyin: "miànbāo", english: "bread" },
      { hanzi: "饺子", pinyin: "jiǎozi", english: "dumplings" },
      { hanzi: "包子", pinyin: "bāozi", english: "steamed bun" },
      { hanzi: "鸡肉", pinyin: "jīròu", english: "chicken (meat)" },
      { hanzi: "牛肉", pinyin: "niúròu", english: "beef" },
      { hanzi: "鱼", pinyin: "yú", english: "fish" },
      { hanzi: "鸡蛋", pinyin: "jīdàn", english: "egg" },
      { hanzi: "汤", pinyin: "tāng", english: "soup" },
      { hanzi: "蔬菜", pinyin: "shūcài", english: "vegetables" },
      { hanzi: "水果", pinyin: "shuǐguǒ", english: "fruit" },
      { hanzi: "苹果", pinyin: "píngguǒ", english: "apple" },
      { hanzi: "香蕉", pinyin: "xiāngjiāo", english: "banana" },
      { hanzi: "水", pinyin: "shuǐ", english: "water" },
      { hanzi: "茶", pinyin: "chá", english: "tea" },
      { hanzi: "牛奶", pinyin: "niúnǎi", english: "milk" },
      { hanzi: "果汁", pinyin: "guǒzhī", english: "fruit juice" },
      { hanzi: "可乐", pinyin: "kělè", english: "cola" },
      { hanzi: "咖啡", pinyin: "kāfēi", english: "coffee" },
      { hanzi: "好吃", pinyin: "hǎochī", english: "tasty (food)" },
      { hanzi: "甜", pinyin: "tián", english: "sweet" },
      { hanzi: "酸", pinyin: "suān", english: "sour" },
      { hanzi: "辣", pinyin: "là", english: "spicy" },
      { hanzi: "咸", pinyin: "xián", english: "salty" },
      { hanzi: "要", pinyin: "yào", english: "to want (order)" },
      { hanzi: "想", pinyin: "xiǎng", english: "would like to" },
      { hanzi: "还是", pinyin: "háishi", english: "or (in questions)" },
    ],
    patterns: [
      {
        pattern: "Subject + 吃/喝 + food/drink",
        example: { hanzi: "我吃饺子，喝茶。", pinyin: "Wǒ chī jiǎozi, hē chá.", english: "I eat dumplings and drink tea." },
      },
      {
        pattern: "我要 + number + measure word + noun",
        example: { hanzi: "我要一碗米饭。", pinyin: "Wǒ yào yì wǎn mǐfàn.", english: "I'd like a bowl of rice." },
      },
      {
        pattern: "Subject + 想 + verb phrase",
        example: { hanzi: "我想吃饺子。", pinyin: "Wǒ xiǎng chī jiǎozi.", english: "I'd like to eat dumplings." },
      },
      {
        pattern: "A + 还是 + B？",
        example: { hanzi: "你要茶还是咖啡？", pinyin: "Nǐ yào chá háishi kāfēi?", english: "Tea or coffee?" },
      },
      {
        pattern: "太 + adjective + 了！",
        example: { hanzi: "太辣了！", pinyin: "Tài là le!", english: "Too spicy!" },
      },
      {
        pattern: "好 + verb",
        example: { hanzi: "海南鸡饭很好吃。", pinyin: "Hǎinán jīfàn hěn hǎochī.", english: "Hainanese chicken rice is delicious." },
      },
    ],
    mnemonics: [
      {
        hanzi: "吃",
        tip: "The mouth radical 口 sits on the left — you eat with your mouth. The right side 乞 means 'to beg': a mouth begging for food.",
      },
      {
        hanzi: "喝 / 渴",
        tip: "Twins with different radicals: 喝 (drink) has mouth 口 — you drink with your mouth; 渴 (thirsty) has water 氵 — thirsty means you need water.",
      },
      {
        hanzi: "好吃",
        tip: "好 (good) + 吃 (eat) = 'good-to-eat' = tasty. The pattern is a machine: 好喝 good-to-drink, 好看 good-to-look-at.",
      },
      {
        hanzi: "茶",
        tip: "Grass 艹 on top, a person 人 in the middle, a tree 木 below: a person picking tea leaves among the plants.",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "food-quiz-mcq-q01",
        question: "Which verb goes with {{米饭|mǐfàn|rice}}?",
        options: ["{{喝|hē}}", "{{吃|chī}}", "{{要|yào}}", "{{是|shì}}"],
        answerIndex: 1,
        explanation:
          "Rice is chewed, so it takes {{吃|chī|to eat}}. {{喝|hē}} is only for liquids; 要 means 'want' and 是 means 'to be' — neither says what you *do* with the rice.",
        guideRef: "Three meals and the eat/drink split",
        difficulty: "warmup",
        strategy: "Chew or swallow? Choose 吃 or 喝",
      },
      {
        id: "food-quiz-mcq-q02",
        question: "What does {{好吃|hǎochī}} mean?",
        options: ["Easy to cook", "Tasty (of food)", "Very hungry", "Good morning"],
        answerIndex: 1,
        explanation:
          "{{好|hǎo|good}} + {{吃|chī|eat}} = 'good to eat' — tasty. It describes food; drinks use {{好喝|hǎohē}} instead.",
        guideRef: "Tasty or not: the 好 + verb discovery",
        difficulty: "warmup",
      },
      {
        id: "food-quiz-mcq-q03",
        question: "How do you say 'I have breakfast at seven o'clock'?",
        options: [
          "{{我七点有早饭。|Wǒ qī diǎn yǒu zǎofàn.}}",
          "{{我七点喝早饭。|Wǒ qī diǎn hē zǎofàn.}}",
          "{{我七点吃早饭。|Wǒ qī diǎn chī zǎofàn.}}",
          "{{我七点是早饭。|Wǒ qī diǎn shì zǎofàn.}}",
        ],
        answerIndex: 2,
        explanation:
          "English 'have breakfast' hides the real action: eating. Chinese says it straight — {{吃早饭|chī zǎofàn|eat breakfast}}. 有 would mean you *possess* a breakfast, and 是 would make you *be* one!",
        guideRef: "Three meals and the eat/drink split",
        difficulty: "core",
        hints: [
          "What are you actually doing to the breakfast — owning it, or something else?",
          "Remember the 'have' trap: Chinese picks the real verb, 吃 or 喝.",
        ],
        strategy: "Beware the English 'have' trap",
      },
      {
        id: "food-quiz-mcq-q04",
        question: "Choose the correct way to order two cups of coffee.",
        options: [
          "{{两杯咖啡|liǎng bēi kāfēi}}",
          "{{二杯咖啡|èr bēi kāfēi}}",
          "{{两个咖啡|liǎng ge kāfēi}}",
          "{{两瓶咖啡|liǎng píng kāfēi}}",
        ],
        answerIndex: 0,
        explanation:
          "Before a measure word, 'two' is {{两|liǎng}}, not 二 — and cups of coffee take {{杯|bēi|cup}}. 两瓶 would be two *bottles*, and 个 is only the fallback when no container word fits.",
        guideRef: "Ordering like a local: 我要 and measure words",
        difficulty: "core",
        hints: [
          "Two checks: which word for 'two', and which container?",
          "二 never sits directly before a measure word.",
        ],
        strategy: "两, not 二, before measure words",
      },
      {
        id: "food-quiz-mcq-q05",
        question:
          "The waiter asks: {{你要茶还是咖啡？|Nǐ yào chá háishi kāfēi?}} Which reply works?",
        options: [
          "{{是。|Shì.|Yes.}}",
          "{{我要咖啡。|Wǒ yào kāfēi.}}",
          "{{要。|Yào.|Want.}}",
          "{{谢谢。|Xièxie.|Thank you.}}",
        ],
        answerIndex: 1,
        explanation:
          "{{还是|háishi}} builds a choice into the question, so yes/no answers make no sense — you must name your pick: {{我要咖啡|wǒ yào kāfēi}}. 是 answers a yes/no question, which this isn't.",
        guideRef: "Wants and choices: 想 and 还是",
        difficulty: "core",
        hints: [
          "Can you answer 'Do you want tea or coffee?' with just 'yes' in English?",
          "A 还是 question is answered by choosing one option.",
        ],
        strategy: "还是 questions: answer by choosing, never with yes/no",
      },
      {
        id: "food-quiz-mcq-q06",
        question: "Spot the error: {{我吃果汁。|Wǒ chī guǒzhī.}} Which word is wrong?",
        options: ["{{我|wǒ}}", "{{吃|chī}}", "{{果汁|guǒzhī}}", "Nothing is wrong"],
        answerIndex: 1,
        explanation:
          "{{果汁|guǒzhī|juice}} is a liquid, so it needs {{喝|hē|to drink}}: 我喝果汁。 The subject and the noun are fine — only the verb betrays the eat/drink split.",
        guideRef: "Three meals and the eat/drink split",
        difficulty: "core",
        hints: ["Is juice chewed or swallowed?", "Liquids always take 喝."],
        strategy: "Chew or swallow? Choose 吃 or 喝",
      },
      {
        id: "food-quiz-mcq-q07",
        question: "Your friend says: {{这个汤有点儿咸。|Zhège tāng yǒudiǎnr xián.}} What do they mean?",
        options: [
          "The soup is wonderfully salty — a compliment",
          "The soup is a bit too salty — a gentle complaint",
          "The soup is extremely spicy",
          "They would like more soup",
        ],
        answerIndex: 1,
        explanation:
          "{{有点儿|yǒudiǎnr}} flags an *unwelcome* quality — 'a bit too…'. That's why it reads as a mild complaint. Praise would use 很 or {{非常|fēicháng|extremely}} instead, and {{咸|xián}} is salty, not spicy.",
        guideRef: "Tasty or not: the 好 + verb discovery",
        difficulty: "core",
        hints: [
          "有点儿 carries attitude, not just amount.",
          "Would a Chinese speaker ever say 有点儿好吃? Why not?",
        ],
        strategy: "Match the intensifier to your attitude",
      },
      {
        id: "food-quiz-mcq-q08",
        question:
          "A hawker-stall sign reads {{牛肉面|niúròu miàn}}. You've never seen this word — decode it. What's for sale?",
        options: ["Beef noodles", "Chicken rice", "Fish soup", "Milk bread"],
        answerIndex: 0,
        explanation:
          "Blocks: {{牛肉|niúròu|beef}} + {{面|miàn|noodles (short for 面条)}} = beef noodles. Compound words stay transparent — you can read menu items you were never taught.",
        guideRef: "Building food words: chicken + meat = ?",
        difficulty: "core",
        hints: ["Break it into 牛 + 肉 + 面.", "牛 is cow; what is animal + 肉?"],
        strategy: "Break unknown words into known blocks",
      },
      {
        id: "food-quiz-mcq-q09",
        question:
          "Challenge: {{看|kàn}} means 'to watch/look'. A friend says a film is {{好看|hǎokàn}}. Using the pattern you discovered, what do they mean?",
        options: [
          "The film is enjoyable to watch",
          "The film is easy to find",
          "They watched it well",
          "The film is about food",
        ],
        answerIndex: 0,
        explanation:
          "好 + verb = 'good to VERB'. {{好吃|hǎochī}} is good-to-eat, {{好喝|hǎohē}} good-to-drink — so {{好看|hǎokàn}} is good-to-watch: enjoyable, worth seeing. One pattern, endless words.",
        guideRef: "Tasty or not: the 好 + verb discovery",
        difficulty: "challenge",
        hints: [
          "What did 好 + 吃 and 好 + 喝 literally mean?",
          "Apply 'good to VERB' with the verb 看.",
        ],
        strategy: "好 + verb = good to VERB",
      },
      {
        id: "food-quiz-mcq-q10",
        question:
          "Challenge: at a hawker centre you order laksa — a spicy noodle soup served in a bowl. You've never learnt its measure word. Which order is most natural?",
        options: [
          "{{我要一杯叻沙。|Wǒ yào yì bēi lāsā.}}",
          "{{我要一盘叻沙。|Wǒ yào yì pán lāsā.}}",
          "{{我要一碗叻沙。|Wǒ yào yì wǎn lāsā.}}",
          "{{我要一瓶叻沙。|Wǒ yào yì píng lāsā.}}",
        ],
        answerIndex: 2,
        explanation:
          "Measure words classify by container: laksa is a noodle soup served in a bowl, so it takes {{碗|wǎn|bowl}} — exactly like 一碗汤 and 一碗面条. You chose correctly for a word you'd never met: that's the system working.",
        guideRef: "Ordering like a local: 我要 and measure words",
        difficulty: "challenge",
        hints: [
          "What is laksa served in?",
          "Match the measure word to the container: soup and noodles pattern with 碗.",
        ],
        strategy: "Choose the measure by the container",
      },
    ],
    qa: [
      {
        id: "food-quiz-qa-q01",
        question: "Translate into Chinese: 'I'm hungry. I'd like to eat dumplings.' (Characters or pinyin.)",
        modelAnswer: "{{我饿了。我想吃饺子。|Wǒ è le. Wǒ xiǎng chī jiǎozi.}}",
        markScheme: [
          "{{我饿了|wǒ è le}} with 了 for the new state",
          "{{想|xiǎng}} before the verb for 'would like to'",
          "Verb {{吃|chī}} present after 想 (not 我想饺子)",
          "{{饺子|jiǎozi}} as the food",
        ],
        commonError: "我是饿 ✗ — adjectives like 饿 never take 是. Also note the pinyin: 不饿 is bú è (tone change before 4th tone).",
        guideRef: "Three meals and the eat/drink split",
        difficulty: "warmup",
        hints: ["Two short sentences: state, then wish.", "想 must be followed by a verb — which one?"],
      },
      {
        id: "food-quiz-qa-q02",
        question:
          "You're at a noodle stall. Order in Chinese: 'Waiter! I'd like a bowl of noodles and a cup of tea.'",
        modelAnswer: "{{服务员！我要一碗面条和一杯茶。|Fúwùyuán! Wǒ yào yì wǎn miàntiáo hé yì bēi chá.}}",
        markScheme: [
          "Calls {{服务员|fúwùyuán}}",
          "{{我要|wǒ yào}} to order",
          "{{一碗面条|yì wǎn miàntiáo}} — 碗 for noodles",
          "{{一杯茶|yì bēi chá}} — 杯 for tea",
          "{{和|hé}} joining the two items",
        ],
        commonError: "Dropping the measure words (我要面条和茶 loses the exam marks for 一碗/一杯) or swapping them (一杯面条 ✗).",
        guideRef: "Ordering like a local: 我要 and measure words",
        difficulty: "core",
        hints: [
          "Three parts: call the waiter, 我要…, join with 和.",
          "Each item needs number + measure word: bowl for noodles, cup for tea.",
        ],
        strategy: "Choose the measure by the container",
        solutions: [
          {
            label: "Build item by item (recommended)",
            steps: [
              "Attention first: 服务员！",
              "Item 1: noodles come in a bowl → 一碗面条.",
              "Item 2: tea comes in a cup → 一杯茶.",
              "Assemble: 我要 + item 1 + 和 + item 2 → 我要一碗面条和一杯茶。",
            ],
          },
          {
            label: "Start from the pattern",
            steps: [
              "Pattern: 我要 + number + measure + noun.",
              "Run it twice — 我要一碗面条 / (我要)一杯茶 — then merge the two orders with 和.",
              "Check both measure words against their containers: 碗 bowl ✓, 杯 cup ✓.",
            ],
          },
        ],
      },
      {
        id: "food-quiz-qa-q03",
        question:
          "Menu comprehension. A stall menu lists: {{牛肉面|niúròu miàn}}, {{海南鸡饭|Hǎinán jīfàn}}, {{鱼汤|yútāng}}, {{苹果汁|píngguǒzhī}}. Your friend doesn't eat beef but loves chicken, and wants a drink too. In English: (a) which dish should they order, and why not the first one? (b) what drink is available?",
        modelAnswer:
          "(a) They should order 海南鸡饭 (Hainanese chicken rice) — 鸡 means chicken. They must avoid 牛肉面 because 牛肉 is beef (cow + meat). (b) The drink is 苹果汁, apple juice (苹果 apple + 汁 juice).",
        markScheme: [
          "Picks 海南鸡饭 / chicken rice for the friend",
          "Rejects 牛肉面 because 牛肉 = beef",
          "Identifies 苹果汁 as apple juice",
          "Shows block-decoding (animal + 肉, fruit + 汁) in the reasoning",
        ],
        commonError: "Mixing up 牛 (cow) and 鱼 (fish) shapes, or reading 鸡蛋-style compounds right-to-left — Chinese compounds read left to right: 牛肉 is 'cow-meat', not 'meat-cow'.",
        guideRef: "Building food words: chicken + meat = ?",
        difficulty: "core",
        hints: [
          "Break every menu word into blocks you know.",
          "牛 = cow, 鸡 = chicken, 鱼 = fish, 汁 = juice.",
        ],
        strategy: "Decode menus like puzzles, not lists",
      },
      {
        id: "food-quiz-qa-q04",
        question:
          "Write three Chinese sentences about your real day: what you eat for breakfast, what you eat for lunch, and what you drink with dinner. (Characters or pinyin.)",
        modelAnswer:
          "{{早饭我吃面包和鸡蛋。|Zǎofàn wǒ chī miànbāo hé jīdàn.|For breakfast I eat bread and eggs.}} {{午饭我吃海南鸡饭。|Wǔfàn wǒ chī Hǎinán jīfàn.|For lunch I eat Hainanese chicken rice.}} {{晚饭我喝一杯果汁。|Wǎnfàn wǒ hē yì bēi guǒzhī.|With dinner I drink a glass of juice.}}",
        markScheme: [
          "Three sentences covering 早饭 / 午饭 / 晚饭",
          "{{吃|chī}} used for foods",
          "{{喝|hē}} used for the drink",
          "Real food/drink vocabulary from the topic, correctly written",
          "Bonus: 和 to join foods, or a measure word like 一杯",
        ],
        commonError: "Using 吃 for the drink (喝 required), or inserting 是: 早饭是我吃面包 ✗ — keep the simple subject + verb + food shape.",
        guideRef: "Three meals and the eat/drink split",
        difficulty: "core",
        hints: [
          "Shape: meal word + 我 + 吃/喝 + food.",
          "Check every verb: chewable → 吃, liquid → 喝.",
        ],
      },
      {
        id: "food-quiz-qa-q05",
        question:
          "Challenge: explain to a new student how {{好吃|hǎochī}} is built, why drinks use a different word, and predict — with reasoning — what 好看 and 好喝 mean.",
        modelAnswer:
          "好吃 = {{好|hǎo|good}} + {{吃|chī|eat}}, literally 'good to eat' — tasty. The pattern is 好 + verb = 'good to VERB', so the word changes with the action: drinks aren't eaten, they're drunk, so drinks take {{好喝|hǎohē}} ('good to drink'). By the same machine, 好看 (好 + 看 'watch/look') means 'good to look at / enjoyable to watch'.",
        markScheme: [
          "Breaks 好吃 into 好 + 吃 = 'good to eat'",
          "States the general rule: 好 + verb = good to VERB",
          "好喝 for drinks because the action is drinking, not eating",
          "Predicts 好看 = good to look at / worth watching, using the rule",
        ],
        commonError: "Treating 好吃 as one unanalysable word ('delicious') — you then can't explain 好喝 or predict 好看. The whole point is the reusable pattern.",
        guideRef: "Tasty or not: the 好 + verb discovery",
        difficulty: "challenge",
        hints: [
          "Start by translating each character of 好吃 literally.",
          "What verb do you do to a drink? To a film?",
        ],
        strategy: "好 + verb = good to VERB",
        solutions: [
          {
            label: "Literal translation route",
            steps: [
              "Translate character by character: 好 = good, 吃 = eat → 'good-eat'.",
              "Smooth it into English: 'good to eat' = tasty.",
              "Swap the verb: 喝 drink → 好喝 'good to drink'; 看 look → 好看 'good to look at'.",
            ],
          },
          {
            label: "Pattern-machine route",
            steps: [
              "State the rule first: 好 + V = 'good to V'.",
              "Feed in each verb (吃, 喝, 看) and read off the outputs.",
              "Explain the food/drink split: the verb must match the real action, so soup-drinking cultures even say 好喝 for soup.",
            ],
          },
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "food-mcq-a",
        title: "Paper A — Meals & tastes",
        description: "Meals, the eat/drink split, food compounds and taste words.",
        questions: [
          {
            id: "food-mcq-a-q01",
            question: "What does {{早饭|zǎofàn}} mean?",
            options: ["Breakfast", "Lunch", "Dinner", "A snack"],
            answerIndex: 0,
            explanation:
              "{{早|zǎo|early/morning}} + {{饭|fàn|meal}} = the morning meal, breakfast. 午饭 is lunch and 晚饭 is dinner.",
            guideRef: "Three meals and the eat/drink split",
            difficulty: "warmup",
          },
          {
            id: "food-mcq-a-q02",
            question: "Which of these do you {{喝|hē|drink}}?",
            options: ["{{米饭|mǐfàn}}", "{{面包|miànbāo}}", "{{果汁|guǒzhī}}", "{{饺子|jiǎozi}}"],
            answerIndex: 2,
            explanation:
              "{{果汁|guǒzhī|juice}} is the only liquid — 喝 territory. Rice, bread and dumplings are chewed, so they take 吃.",
            guideRef: "Three meals and the eat/drink split",
            difficulty: "warmup",
          },
          {
            id: "food-mcq-a-q03",
            question: "What does {{我饿了|wǒ è le}} mean?",
            options: ["I'm thirsty", "I'm hungry", "I'm full", "I'm tired"],
            answerIndex: 1,
            explanation:
              "{{饿|è}} is hungry; {{了|le}} marks the new state — 'I've got hungry'. Thirsty would be {{我渴了|wǒ kě le}}.",
            guideRef: "Three meals and the eat/drink split",
            difficulty: "warmup",
          },
          {
            id: "food-mcq-a-q04",
            question: "What is {{牛肉|niúròu}}?",
            options: ["Chicken", "Beef", "Fish", "Egg"],
            answerIndex: 1,
            explanation:
              "{{牛|niú|cow}} + {{肉|ròu|meat}} = beef. Chicken meat is {{鸡肉|jīròu}} by exactly the same recipe.",
            guideRef: "Building food words: chicken + meat = ?",
            difficulty: "warmup",
          },
          {
            id: "food-mcq-a-q05",
            question: "How do you say 'have lunch' in Chinese?",
            options: [
              "{{吃午饭|chī wǔfàn}}",
              "{{有午饭|yǒu wǔfàn}}",
              "{{喝午饭|hē wǔfàn}}",
              "{{做午饭|zuò wǔfàn}}",
            ],
            answerIndex: 0,
            explanation:
              "English 'have' hides the real action; Chinese states it — you *eat* lunch: {{吃午饭|chī wǔfàn}}. 有午饭 = to possess a lunch, 做午饭 = to make lunch.",
            guideRef: "Three meals and the eat/drink split",
            difficulty: "core",
            hints: ["What do you actually do to lunch?", "Avoid the English 'have' trap — pick 吃 or 喝."],
          },
          {
            id: "food-mcq-a-q06",
            question: "Decode the unseen word {{苹果汁|píngguǒzhī}}.",
            options: ["Apple pie", "Apple juice", "Fruit salad", "Orange juice"],
            answerIndex: 1,
            explanation:
              "{{苹果|píngguǒ|apple}} + {{汁|zhī|juice}} = apple juice. The blocks do the work — no memorising needed.",
            guideRef: "Building food words: chicken + meat = ?",
            difficulty: "core",
            hints: ["You know 苹果 and you know 果汁 — overlap them.", "The last character names the kind of thing it is."],
            strategy: "Break unknown words into known blocks",
          },
          {
            id: "food-mcq-a-q07",
            question: "Spot the error: {{我喝饺子。|Wǒ hē jiǎozi.}} Which word is wrong?",
            options: ["{{我|wǒ}}", "{{喝|hē}}", "{{饺子|jiǎozi}}", "Nothing is wrong"],
            answerIndex: 1,
            explanation:
              "Dumplings are chewed, so the verb must be {{吃|chī}}: 我吃饺子。 The eat/drink split is strict — 喝 is only for liquids.",
            guideRef: "Three meals and the eat/drink split",
            difficulty: "core",
            hints: ["Check the verb against the food.", "Is a dumpling a liquid?"],
          },
          {
            id: "food-mcq-a-q08",
            question:
              "Which sentence politely complains that the dish is slightly too salty?",
            options: [
              "{{这个菜非常咸。|Zhège cài fēicháng xián.}}",
              "{{这个菜有点儿咸。|Zhège cài yǒudiǎnr xián.}}",
              "{{这个菜很好吃。|Zhège cài hěn hǎochī.}}",
              "{{这个菜太甜了。|Zhège cài tài tián le.}}",
            ],
            answerIndex: 1,
            explanation:
              "{{有点儿|yǒudiǎnr}} = 'a bit (too)' — the built-in gentle complaint. 非常咸 is a blunt 'extremely salty', 很好吃 is praise, and 太甜了 complains about sweetness, not saltiness.",
            guideRef: "Tasty or not: the 好 + verb discovery",
            difficulty: "core",
            hints: ["Which intensifier is reserved for unwelcome qualities?", "咸 is the taste you need — then soften it."],
            strategy: "Match the intensifier to your attitude",
          },
          {
            id: "food-mcq-a-q09",
            question: "Which of these would you describe as {{好喝|hǎohē}}?",
            options: ["{{面条|miàntiáo}}", "{{牛奶|niúnǎi}}", "{{米饭|mǐfàn}}", "{{面包|miànbāo}}"],
            answerIndex: 1,
            explanation:
              "好喝 = 'good to drink', so it only fits drinks — {{牛奶|niúnǎi|milk}}. Noodles, rice and bread are eaten, so they'd be 好吃.",
            guideRef: "Tasty or not: the 好 + verb discovery",
            difficulty: "core",
            hints: ["好喝 contains the verb 喝 — what does that restrict it to?"],
          },
          {
            id: "food-mcq-a-q10",
            question: "How do you say 'I'm not hungry'?",
            options: [
              "{{我不饿。|Wǒ bú è.}}",
              "{{我不渴。|Wǒ bù kě.}}",
              "{{我很饿。|Wǒ hěn è.}}",
              "{{我饿了。|Wǒ è le.}}",
            ],
            answerIndex: 0,
            explanation:
              "{{不|bù}} negates the adjective directly: 我不饿 — and 不 shifts to bú before the 4th-tone {{饿|è}}. 不渴 is 'not thirsty', and the other two say you ARE hungry.",
            guideRef: "Three meals and the eat/drink split",
            difficulty: "core",
            hints: ["Negate with 不 straight before the adjective.", "Careful: 渴 is thirsty, 饿 is hungry."],
          },
          {
            id: "food-mcq-a-q11",
            question:
              "A friend asks: {{你早饭吃什么？|Nǐ zǎofàn chī shénme?|What do you eat for breakfast?}} Which is a sensible answer?",
            options: [
              "{{我吃面包和鸡蛋。|Wǒ chī miànbāo hé jīdàn.}}",
              "{{我是面包。|Wǒ shì miànbāo.}}",
              "{{我喝面包。|Wǒ hē miànbāo.}}",
              "{{面包吃我。|Miànbāo chī wǒ.}}",
            ],
            answerIndex: 0,
            explanation:
              "我吃面包和鸡蛋 keeps the question's shape and swaps 什么 for the answer. 我是面包 claims you ARE bread, 喝 is the wrong verb for bread, and 面包吃我 has the bread eating you!",
            guideRef: "Three meals and the eat/drink split",
            difficulty: "core",
            hints: ["Question words sit in the answer's seat — replace 什么 with the food.", "Check verb and word order."],
          },
          {
            id: "food-mcq-a-q12",
            question:
              "Challenge: which verb do Chinese speakers actually use with {{汤|tāng|soup}}?",
            options: [
              "{{吃汤|chī tāng}}",
              "{{喝汤|hē tāng}}",
              "{{有汤|yǒu tāng}}",
              "{{要汤|yào tāng}}",
            ],
            answerIndex: 1,
            explanation:
              "Chinese soup is thin and sipped, so you {{喝汤|hē tāng|drink soup}} — even though English 'eats' it with a spoon. Apply the rule (liquid → 喝), not the English habit. 要汤 just means 'want soup' — it doesn't say what you do with it.",
            guideRef: "Three meals and the eat/drink split",
            difficulty: "challenge",
            hints: ["Don't translate the English habit — apply the liquid rule.", "Is soup chewed or swallowed?"],
            strategy: "Chew or swallow? Choose 吃 or 喝",
          },
          {
            id: "food-mcq-a-q13",
            question:
              "Challenge: {{羊|yáng}} means sheep. You have never been taught the word 羊肉 — what must it mean?",
            options: ["Lamb (sheep meat)", "Sheep's milk", "Wool", "A flock of sheep"],
            answerIndex: 0,
            explanation:
              "Animal + {{肉|ròu|meat}} = that animal's meat, so 羊肉 is lamb/mutton — the same block-recipe as 牛肉 and 鸡肉. Sheep's milk would need 奶, like 牛奶.",
            guideRef: "Building food words: chicken + meat = ?",
            difficulty: "challenge",
            hints: ["Recall the recipe behind 牛肉 and 鸡肉.", "The second block tells you the category: 肉 = meat."],
            strategy: "Break unknown words into known blocks",
          },
        ],
      },
      {
        id: "food-mcq-b",
        title: "Paper B — At the restaurant",
        description: "Ordering, measure words, prices, 想/要 and 还是 choices.",
        questions: [
          {
            id: "food-mcq-b-q01",
            question: "What does {{菜单|càidān}} mean?",
            options: ["Chef", "Menu", "The bill", "Table"],
            answerIndex: 1,
            explanation:
              "{{菜|cài|dish}} + {{单|dān|list}} = the list of dishes — the menu. Ask for it before you order.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "warmup",
          },
          {
            id: "food-mcq-b-q02",
            question: "Who do you call when you want to order?",
            options: ["{{老师|lǎoshī}}", "{{服务员|fúwùyuán}}", "{{学生|xuésheng}}", "{{妈妈|māma}}"],
            answerIndex: 1,
            explanation:
              "{{服务员|fúwùyuán}} means waiter/waitress — literally 'service person'. 老师 is your teacher; calling them over won't get you noodles.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "warmup",
          },
          {
            id: "food-mcq-b-q03",
            question: "What does {{多少钱？|duōshao qián?}} ask?",
            options: ["What time is it?", "Where is it?", "How much does it cost?", "How old are you?"],
            answerIndex: 2,
            explanation:
              "{{多少|duōshao|how much/many}} + {{钱|qián|money}} = 'how much money?' — the price question. 几岁/多大 ask ages, not prices.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "warmup",
          },
          {
            id: "food-mcq-b-q04",
            question: "Fill the gap: {{一|yì}} ___ {{茶|chá}}",
            options: ["{{碗|wǎn}}", "{{杯|bēi}}", "{{盘|pán}}", "{{个|gè}}"],
            answerIndex: 1,
            explanation:
              "Tea is served in a cup, so it takes {{杯|bēi}}: 一杯茶. 碗 is for bowl-served food like rice and soup, 盘 for plates.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "core",
            hints: ["What container does tea arrive in?"],
            strategy: "Choose the measure by the container",
          },
          {
            id: "food-mcq-b-q05",
            question: "Fill the gap: {{我要一|wǒ yào yì}} ___ {{米饭。|mǐfàn.}}",
            options: ["{{杯|bēi}}", "{{瓶|píng}}", "{{碗|wǎn}}", "{{张|zhāng}}"],
            answerIndex: 2,
            explanation:
              "Rice is served in a bowl: {{一碗米饭|yì wǎn mǐfàn}}. 杯 would put your rice in a cup and 瓶 in a bottle — memorable, but wrong.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "core",
            hints: ["Picture the rice arriving at your table — in what?"],
            strategy: "Choose the measure by the container",
          },
          {
            id: "food-mcq-b-q06",
            question: "Which item best completes {{一瓶|yì píng}} ___ ?",
            options: ["{{米饭|mǐfàn}}", "{{可乐|kělè}}", "{{饺子|jiǎozi}}", "{{点心|diǎnxin}}"],
            answerIndex: 1,
            explanation:
              "{{瓶|píng}} means bottle, and of these only {{可乐|kělè|cola}} comes bottled. Measure words must match how the item is actually served.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "core",
            hints: ["瓶 = bottle. Which option lives in a bottle?"],
          },
          {
            id: "food-mcq-b-q07",
            question: "Which is the correct way to order a plate of dumplings?",
            options: [
              "{{我要一盘饺子。|Wǒ yào yì pán jiǎozi.}}",
              "{{我要饺子一盘。|Wǒ yào jiǎozi yì pán.}}",
              "{{我要盘一饺子。|Wǒ yào pán yì jiǎozi.}}",
              "{{我一盘要饺子。|Wǒ yì pán yào jiǎozi.}}",
            ],
            answerIndex: 0,
            explanation:
              "The order is fixed: 我要 + number + measure + noun → 我要一盘饺子。 Chinese never floats the measure phrase after the noun the way English can ('dumplings — one plate').",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "core",
            hints: ["Number, then measure, then noun — always that order.", "Start from 我要 and build rightwards."],
          },
          {
            id: "food-mcq-b-q08",
            question:
              "You want to soften 'I want dumplings' into 'I'd like to EAT dumplings'. Which sentence does it?",
            options: [
              "{{我想吃饺子。|Wǒ xiǎng chī jiǎozi.}}",
              "{{我想饺子。|Wǒ xiǎng jiǎozi.}}",
              "{{我要想饺子。|Wǒ yào xiǎng jiǎozi.}}",
              "{{我吃想饺子。|Wǒ chī xiǎng jiǎozi.}}",
            ],
            answerIndex: 0,
            explanation:
              "{{想|xiǎng}} must be followed by a verb: 我想 + 吃饺子。 我想饺子 is missing the verb (and drifts towards 'I miss dumplings'), and the other two scramble the order.",
            guideRef: "Wants and choices: 想 and 还是",
            difficulty: "core",
            hints: ["想 + VERB + thing.", "Which word names the action of eating?"],
          },
          {
            id: "food-mcq-b-q09",
            question: "Which question CANNOT be answered with a simple yes or no?",
            options: [
              "{{你要咖啡吗？|Nǐ yào kāfēi ma?}}",
              "{{你饿吗？|Nǐ è ma?}}",
              "{{你要果汁还是可乐？|Nǐ yào guǒzhī háishi kělè?}}",
              "{{你想吃饭吗？|Nǐ xiǎng chī fàn ma?}}",
            ],
            answerIndex: 2,
            explanation:
              "The {{还是|háishi}} question offers a fork — juice OR cola — so the only sensible answers name one option. The three 吗 questions are yes/no by design.",
            guideRef: "Wants and choices: 想 and 还是",
            difficulty: "core",
            hints: ["Find the question with a built-in choice.", "吗 = yes/no switch; 还是 = fork."],
            strategy: "还是 questions: answer by choosing, never with yes/no",
          },
          {
            id: "food-mcq-b-q10",
            question:
              "Challenge: you order {{海南鸡饭|Hǎinán jīfàn}} at a hawker centre. Decoding the name, what arrives?",
            options: [
              "Chicken with rice",
              "Beef noodles",
              "Fish soup with rice",
              "A chicken-and-egg sandwich",
            ],
            answerIndex: 0,
            explanation:
              "{{海南|Hǎinán}} (the island the dish's cooks came from) + {{鸡|jī|chicken}} + {{饭|fàn|rice}}: poached chicken over fragrant rice — Singapore's most famous plate.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "challenge",
            hints: ["Ignore the place name and decode the last two characters.", "鸡 + 饭 — two blocks you know."],
            strategy: "Break unknown words into known blocks",
          },
          {
            id: "food-mcq-b-q11",
            question: "A local shouts {{来一个包子！|Lái yí ge bāozi!}} at a stall. What are they doing?",
            options: [
              "Saying a bun is coming towards them",
              "Ordering one steamed bun, casually",
              "Asking the price of buns",
              "Complaining the bun is too spicy",
            ],
            answerIndex: 1,
            explanation:
              "{{来|lái}} in ordering means 'bring (me)' — 来一个包子 is the relaxed hawker-stall way to order one bun. Prices would need {{多少钱|duōshao qián}}.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "challenge",
            hints: ["来 literally means 'come' — but who wants what to come where?", "Compare it with 我要一个包子."],
          },
          {
            id: "food-mcq-b-q12",
            question: "Challenge: which pairing of measure word and item is WRONG?",
            options: [
              "{{一杯牛奶|yì bēi niúnǎi}}",
              "{{一碗汤|yì wǎn tāng}}",
              "{{一瓶水|yì píng shuǐ}}",
              "{{一杯饺子|yì bēi jiǎozi}}",
            ],
            answerIndex: 3,
            explanation:
              "Dumplings don't come in cups — they're served on plates: {{一盘饺子|yì pán jiǎozi}}. The other three match container to item perfectly: cup of milk, bowl of soup, bottle of water.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "challenge",
            hints: ["Test each pair: could the item really arrive in that container?", "杯 = cup. What food would never fit sensibly in one?"],
            strategy: "Choose the measure by the container",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "food-qa-a",
        title: "Paper A — My meals",
        description: "Writing about meals, tastes and everyday eating.",
        questions: [
          {
            id: "food-qa-a-q01",
            question: "Translate into Chinese: 'I drink milk.' (Characters or pinyin.)",
            modelAnswer: "{{我喝牛奶。|Wǒ hē niúnǎi.}}",
            markScheme: [
              "Subject {{我|wǒ}}",
              "Verb {{喝|hē}} — milk is a liquid",
              "{{牛奶|niúnǎi}} after the verb",
            ],
            commonError: "我吃牛奶 ✗ — milk is a liquid, so the eat/drink split demands 喝.",
            guideRef: "Three meals and the eat/drink split",
            difficulty: "warmup",
            hints: ["Subject + verb + drink. Which verb do liquids take?"],
          },
          {
            id: "food-qa-a-q02",
            question:
              "A friend asks: {{你饿吗？|Nǐ è ma?}} Reply in a full Chinese sentence that you are NOT hungry.",
            modelAnswer: "{{我不饿。|Wǒ bú è.}}",
            markScheme: [
              "Subject {{我|wǒ}}",
              "{{不|bù}} directly before {{饿|è}}",
              "No 是 and no 了 in the negative reply",
            ],
            commonError: "我不饿了 changes the meaning to 'I'm not hungry ANY MORE'. For a plain 'I'm not hungry', stop at 我不饿 — and say it bú è (tone change before 4th tone).",
            guideRef: "Three meals and the eat/drink split",
            difficulty: "warmup",
            hints: ["Echo the question: 你饿吗 → 我(不)饿.", "Negate with 不 straight before the adjective."],
          },
          {
            id: "food-qa-a-q03",
            question:
              "Translate into Chinese: 'For breakfast I eat bread and eggs, and drink a cup of milk.'",
            modelAnswer: "{{早饭我吃面包和鸡蛋，喝一杯牛奶。|Zǎofàn wǒ chī miànbāo hé jīdàn, hē yì bēi niúnǎi.}}",
            markScheme: [
              "{{早饭|zǎofàn}} sets the meal (at the front or after 我)",
              "{{吃|chī}} with 面包和鸡蛋",
              "{{和|hé}} joining the two foods",
              "{{喝|hē}} with the milk — verb switches for the liquid",
              "Measure phrase {{一杯|yì bēi}} before 牛奶",
            ],
            commonError: "Using one verb for everything (吃…和牛奶 ✗) — the sentence must switch from 吃 to 喝 when it reaches the drink.",
            guideRef: "Three meals and the eat/drink split",
            difficulty: "core",
            hints: [
              "Two verb groups: an eating group and a drinking group.",
              "和 joins the foods; the drink needs its own verb 喝.",
              "'A cup of' = 一杯 before 牛奶.",
            ],
            solutions: [
              {
                label: "Split by verb (recommended)",
                steps: [
                  "Sort the items: bread, eggs → chewed → 吃; milk → liquid → 喝.",
                  "Eating half: 我吃面包和鸡蛋.",
                  "Drinking half: 喝一杯牛奶 — 杯 because milk comes in a cup.",
                  "Front the meal word and join: 早饭我吃面包和鸡蛋，喝一杯牛奶。",
                ],
              },
              {
                label: "Translate then repair",
                steps: [
                  "Rough word-for-word draft: 早饭我吃面包和鸡蛋和牛奶.",
                  "Repair 1: milk can't take 吃 — split off 喝牛奶.",
                  "Repair 2: 'a cup of' needs the measure word → 一杯牛奶.",
                  "Read the result aloud to check both verbs match their foods.",
                ],
              },
            ],
          },
          {
            id: "food-qa-a-q04",
            question:
              "Read the chat, then answer in English.\n\nA: {{你想吃什么？|Nǐ xiǎng chī shénme?}}\nB: {{我想吃饺子。|Wǒ xiǎng chī jiǎozi.}}\nA: {{你要喝什么？|Nǐ yào hē shénme?}}\nB: {{我要一杯果汁。|Wǒ yào yì bēi guǒzhī.}}\n\n(a) What would B like to eat? (b) What does B order to drink, and how much of it?",
            modelAnswer:
              "(a) B would like to eat dumplings (饺子). (b) B orders juice — one cup/glass of it (一杯果汁).",
            markScheme: [
              "(a) dumplings / 饺子",
              "(b) juice / 果汁",
              "(b) quantity: one cup/glass ({{一杯|yì bēi}})",
            ],
            commonError: "Missing the measure word detail — 一杯 tells you HOW MUCH, and comprehension questions often award a mark for it.",
            guideRef: "Wants and choices: 想 and 还是",
            difficulty: "core",
            hints: ["想吃 = would like to eat; 要喝 = will have (to drink).", "一杯 carries its own mark — don't skip it."],
          },
          {
            id: "food-qa-a-q05",
            question:
              "Ask your friend in Chinese whether they want juice or cola. (Careful: this is a choice question!)",
            modelAnswer: "{{你要果汁还是可乐？|Nǐ yào guǒzhī háishi kělè?}}",
            markScheme: [
              "Subject {{你|nǐ}} + verb {{要|yào}} (or 想喝)",
              "The two drinks 果汁 and 可乐",
              "{{还是|háishi}} between the choices",
              "NO 吗 at the end",
            ],
            commonError: "Adding 吗: 你要果汁还是可乐吗？✗ — 还是 already makes it a question; the two question machines never stack.",
            guideRef: "Wants and choices: 想 and 还是",
            difficulty: "core",
            hints: ["Pattern: 你要 A 还是 B？", "Should there be a 吗? Check the 'one machine at a time' rule."],
            strategy: "One question machine at a time: 吗 or 还是, never both",
          },
          {
            id: "food-qa-a-q06",
            question:
              "Your friend takes one bite and cries: {{太辣了！|Tài là le!}} Explain in English what they mean, and write a Chinese sentence they might say instead if it were only slightly spicy.",
            modelAnswer:
              "太辣了 means 'it's TOO spicy!' — 太…了 says something has gone over the limit. If it were only slightly spicy they could say {{这个菜有点儿辣。|Zhège cài yǒudiǎnr là.|This dish is a bit (too) spicy.}}",
            markScheme: [
              "太…了 = 'too …' — over the limit, a strong complaint",
              "{{辣|là}} correctly identified as spicy",
              "Milder version uses {{有点儿|yǒudiǎnr}} + 辣",
              "Sensible sentence shape (subject + 有点儿 + adjective)",
            ],
            commonError: "Translating 太辣了 as just 'very spicy' — 很辣 is 'very spicy'; 太…了 adds the complaint 'TOO spicy (for me)'.",
            guideRef: "Tasty or not: the 好 + verb discovery",
            difficulty: "core",
            hints: ["太 + 了 come as a pair — what shade of meaning do they add?", "Which intensifier means 'a bit (too)'?"],
          },
          {
            id: "food-qa-a-q07",
            question:
              "Challenge: using building blocks only, work out how to say (a) 'fish soup' and (b) 'apple juice' in Chinese — then explain the block logic in one sentence each.",
            modelAnswer:
              "(a) {{鱼汤|yútāng}} — 鱼 (fish) + 汤 (soup): the describing block comes first, the category block last, so 'fish-soup'. (b) {{苹果汁|píngguǒzhī}} — 苹果 (apple) + 汁 (juice): apple describes the kind of juice, so it sits in front.",
            markScheme: [
              "(a) 鱼汤 with fish before soup",
              "(b) 苹果汁 with apple before juice",
              "Explains order: describer first, category last",
              "Links to known models (牛肉, 果汁) or the block strategy",
            ],
            commonError: "Reversing the blocks (汤鱼 ✗, 汁苹果 ✗) — Chinese compounds put the category LAST, like English 'fish soup', not French-style 'soup of fish'.",
            guideRef: "Building food words: chicken + meat = ?",
            difficulty: "challenge",
            hints: [
              "Copy the shape of 牛肉: describer + category.",
              "Which character names the overall kind of thing? Put it last.",
            ],
            strategy: "Break unknown words into known blocks",
          },
        ],
      },
      {
        id: "food-qa-b",
        title: "Paper B — Ordering out",
        description: "Hawker-centre and restaurant situations: ordering, prices, choices.",
        questions: [
          {
            id: "food-qa-b-q01",
            question:
              "You sit down at a restaurant. Write what you say to call the waiter and ask for the menu.",
            modelAnswer: "{{服务员！我要菜单。|Fúwùyuán! Wǒ yào càidān.}}",
            markScheme: [
              "Calls {{服务员|fúwùyuán}}",
              "{{我要|wǒ yào}} (or 我想看) + {{菜单|càidān}}",
            ],
            commonError: "Calling 老师 (teacher) by habit — the person bringing your noodles is 服务员.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "warmup",
            hints: ["Two moves: attention word, then 我要 + the thing you want."],
          },
          {
            id: "food-qa-b-q02",
            question:
              "Translate the order: 'One bowl of rice, one plate of dumplings and two cups of tea.'",
            modelAnswer: "{{一碗米饭，一盘饺子和两杯茶。|Yì wǎn mǐfàn, yì pán jiǎozi hé liǎng bēi chá.}}",
            markScheme: [
              "{{一碗米饭|yì wǎn mǐfàn}} — 碗 for rice",
              "{{一盘饺子|yì pán jiǎozi}} — 盘 for dumplings",
              "{{两杯茶|liǎng bēi chá}} — 杯 for tea",
              "{{两|liǎng}}, not 二, before the measure word",
              "{{和|hé}} before the final item",
            ],
            commonError: "二杯茶 ✗ — before a measure word, 'two' is always 两. Examiners test this deliberately.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "core",
            hints: [
              "Each item: number + measure + noun. Match each container.",
              "Rice → bowl, dumplings → plate, tea → cup.",
              "Which word for 'two' goes before measure words?",
            ],
          },
          {
            id: "food-qa-b-q03",
            question:
              "Ask the stallholder in Chinese how much the Hainanese chicken rice costs.",
            modelAnswer: "{{海南鸡饭多少钱？|Hǎinán jīfàn duōshao qián?}}",
            markScheme: [
              "{{海南鸡饭|Hǎinán jīfàn}} named as the thing",
              "{{多少钱|duōshao qián}} directly after it",
              "No 是 and no 吗 added",
            ],
            commonError: "Adding extra machinery: 海南鸡饭是多少钱吗？✗ — thing + 多少钱？ is already a complete question.",
            guideRef: "Ordering like a local: 我要 and measure words",
            difficulty: "core",
            hints: ["Pattern: thing + 多少钱？— nothing else needed."],
          },
          {
            id: "food-qa-b-q04",
            question:
              "Read this hawker-centre exchange, then answer in English.\n\nStallholder: {{你要吃什么？|Nǐ yào chī shénme?}}\nYou: {{我要海南鸡饭。|Wǒ yào Hǎinán jīfàn.}}\nStallholder: {{你要喝茶还是喝水？|Nǐ yào hē chá háishi hē shuǐ?}}\nYou: {{一杯水。多少钱？|Yì bēi shuǐ. Duōshao qián?}}\nStallholder: {{五块钱。|Wǔ kuài qián.|five dollars}}\n\n(a) What food is ordered? (b) What choice does the stallholder offer, and what is chosen? (c) What is the total price?",
            modelAnswer:
              "(a) Hainanese chicken rice (海南鸡饭). (b) The choice is tea or water (茶还是水); the customer chooses a cup/glass of water. (c) Five dollars (五块钱).",
            markScheme: [
              "(a) Hainanese chicken rice",
              "(b) choice offered: tea or water",
              "(b) chosen: (a cup of) water",
              "(c) five dollars / 5 kuai",
            ],
            commonError: "Reading 还是 as part of the answer rather than the fork — the stallholder is OFFERING two drinks, not serving both.",
            guideRef: "Wants and choices: 想 and 还是",
            difficulty: "core",
            hints: ["还是 marks the two options being offered.", "块 is the spoken word for dollars — 五块 = five of them."],
          },
          {
            id: "food-qa-b-q05",
            question:
              "Challenge: explain the difference between {{你要咖啡吗？|Nǐ yào kāfēi ma?}} and {{你要茶还是咖啡？|Nǐ yào chá háishi kāfēi?}} — what does each ask, and how must each be answered?",
            modelAnswer:
              "你要咖啡吗？ is a yes/no question: 吗 bolts a yes/no switch onto the statement 你要咖啡, so you answer 要 (yes, I do) or {{不要|bú yào|no}}. 你要茶还是咖啡？ uses 还是 to build a fork into the sentence — 'yes' is meaningless, so you answer by naming one option, e.g. 我要茶. And because 还是 already makes it a question, you never add 吗 to it.",
            markScheme: [
              "吗 question = yes/no; answered 要 / 不要 (or equivalent)",
              "还是 question = forced choice between A and B",
              "还是 answered by naming one option, never 'yes'",
              "还是 and 吗 never combine in one question",
            ],
            commonError: "Answering the 还是 question with 是 or 要 alone — the asker still doesn't know WHICH drink you want.",
            guideRef: "Wants and choices: 想 and 还是",
            difficulty: "challenge",
            hints: [
              "Try answering each with 'yes' — which one breaks?",
              "One question machine at a time: what job does each machine do?",
            ],
            strategy: "One question machine at a time: 吗 or 还是, never both",
            solutions: [
              {
                label: "Test with answers",
                steps: [
                  "Answer both questions with 要 ('yes, want').",
                  "For 你要咖啡吗？ it works — the question only asked yes-or-no.",
                  "For 你要茶还是咖啡？ it fails — the waiter still can't pour anything, proving the question demands a choice.",
                  "Conclude: 吗 = switch, 还是 = fork; answer each with what it asks for.",
                ],
              },
              {
                label: "Compare the machinery",
                steps: [
                  "Strip each question to its skeleton: [statement + 吗] vs [A 还是 B].",
                  "吗 adds a yes/no switch onto a complete statement.",
                  "还是 wires the two options into the middle of the sentence — the question IS the choice.",
                  "Since each structure is already a full question, stacking them (…还是…吗) double-asks and is ungrammatical.",
                ],
              },
            ],
          },
          {
            id: "food-qa-b-q06",
            question:
              "Challenge: you're at a dim sum restaurant with a friend. Write two Chinese sentences: first tell your friend you'd like to eat dim sum, then order one plate of steamed buns from the waiter in the casual style.",
            modelAnswer:
              "{{我想吃点心。|Wǒ xiǎng chī diǎnxin.|I'd like to eat dim sum.}} {{来一盘包子！|Lái yì pán bāozi!|One plate of buns, please!}}",
            markScheme: [
              "Sentence 1: {{想|xiǎng}} + verb {{吃|chī}} + {{点心|diǎnxin}}",
              "Sentence 2 orders 包子 with a correct measure phrase ({{一盘|yì pán}} or 一个)",
              "Casual style: {{来|lái}} + measure phrase (我要… also accepted)",
              "Word order: number + measure + noun",
            ],
            commonError: "我想点心 ✗ — 想 must be followed by a verb; without 吃 it drifts towards 'I miss dim sum'.",
            guideRef: "Wants and choices: 想 and 还是",
            difficulty: "challenge",
            hints: [
              "Wish first (想 + verb), order second.",
              "The hawker-style order starts with 来.",
              "Buns on a plate — which measure word?",
            ],
            solutions: [
              {
                label: "Wish then order (recommended)",
                steps: [
                  "The wish: 我 + 想 + 吃 + 点心 → 我想吃点心。",
                  "The order: casual verb 来 + 一盘 + 包子 → 来一盘包子！",
                  "Check: 想 has its verb (吃) ✓, measure word matches a plate of buns ✓.",
                ],
              },
              {
                label: "Formal first, then relax it",
                steps: [
                  "Draft both sentences with 要: 我要吃点心。我要一盘包子。",
                  "Soften the first: swap 要 for 想 to make it a friendly wish.",
                  "Make the second hawker-casual: replace 我要 with 来 → 来一盘包子！",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
