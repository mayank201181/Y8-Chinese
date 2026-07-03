import type { Topic } from "../types";

// Shopping & Money — Cambridge IGCSE 0547 pathway, Year 8.
// House style: see lib/topics/greetings.ts (exemplar).

export const shopping: Topic = {
  id: "shopping",
  title: "Shopping & Money",
  titleChinese: { hanzi: "购物", pinyin: "gòuwù" },
  subject: "chinese",
  icon: "🛍️",
  color: "fuchsia",
  intro:
    "Money, clothes, colours and the art of the deal. By the end of this topic you can ask prices, count your change, pick the right size — and haggle at a market like a local. Along the way you'll crack two of Mandarin's best-kept systems: how prices are spoken versus written, and the measure-word 'sorting machine' that decides whether clothes take 件, 条, 双 or 顶.",
  guide: [
    {
      heading: "Money: 块, 毛 and 分 — and the price-tag puzzle",
      discovery: {
        problem:
          "A price tag in a Beijing shop reads 35元. You take the T-shirt to the till and the shopkeeper says {{三十五块|sānshíwǔ kuài|thirty-five kuai}}. Hold on — the tag says {{元|yuán}}, but she says {{块|kuài}}. Same price, two different words. What do you think is going on?",
        idea:
          "Nothing is wrong — Chinese money has two registers. {{元|yuán}} and {{角|jiǎo}} are the **written** words you see on price tags, receipts and banknotes; {{块|kuài}} and {{毛|máo}} are the **spoken** words everyone actually says. English does exactly the same thing: a British price tag says 'pounds', but out loud you might say 'quid'. Read 元, say 块.",
      },
      body:
        "The unit system is beautifully simple — everything is tens:\n- 1 {{块|kuài}} = 10 {{毛|máo}} = 100 {{分|fēn|cents}}\n- written register: 1 {{元|yuán}} = 10 {{角|jiǎo}} = 100 {{分|fēn}}\n\nTo ask a price, use {{多少钱？|duōshao qián?|how much money?}} — literally 'how-much money?'. Point at the thing first: {{这个多少钱？|zhège duōshao qián?|How much is this one?}}\n\nSaying a price stacks the units biggest-first: ¥3.50 is {{三块五毛|sān kuài wǔ máo|three kuai five mao}}. In real speech the **last unit is usually dropped**: {{三块五|sān kuài wǔ}}. ¥12.50 is {{十二块五|shí'èr kuài wǔ}}.\n\nBigger prices need {{百|bǎi|hundred}}: {{一百块|yìbǎi kuài|¥100}}, {{三百五十块|sānbǎi wǔshí kuài|¥350}}.\n\nOne trap: before a measure word like 块, 'two' is {{两|liǎng}}, not 二 — {{两块|liǎng kuài|¥2}}, never 二块.",
      whyItWorks:
        "Why can Chinese drop the final unit in 三块五? Because price units always march downhill in the same order — 块, then 毛, then 分 — so after 三块, the next number can only be 毛. The listener fills it in automatically. English speakers do the identical trick: 'three fifty' for £3.50. When a language lets you omit something, it's because the pattern makes it predictable.",
      strategies: [
        "Match the register to the situation: tags are written (元), mouths are spoken (块)",
        "Units march downhill — use that to decode shortened prices",
      ],
      keyPoints: [
        "Spoken: 块 and 毛; written: 元 and 角; 分 works in both",
        "1 块 = 10 毛 = 100 分",
        "多少钱？ asks the price; answer biggest unit first: 三块五(毛)",
        "The final unit is usually dropped in speech: 三块五 = ¥3.50",
        "两块 for ¥2, never 二块",
      ],
      vocab: [
        { hanzi: "钱", pinyin: "qián", english: "money", pos: "noun" },
        { hanzi: "块", pinyin: "kuài", english: "kuai, yuan (spoken)", pos: "measure word" },
        { hanzi: "元", pinyin: "yuán", english: "yuan (written)", pos: "measure word" },
        { hanzi: "毛", pinyin: "máo", english: "ten cents (spoken)", pos: "measure word" },
        { hanzi: "角", pinyin: "jiǎo", english: "ten cents (written)", pos: "measure word" },
        { hanzi: "分", pinyin: "fēn", english: "cent", pos: "measure word" },
        {
          hanzi: "多少钱",
          pinyin: "duōshao qián",
          english: "how much (money)?",
          pos: "question phrase",
          example: { hanzi: "这个多少钱？", pinyin: "Zhège duōshao qián?", english: "How much is this one?" },
        },
        { hanzi: "百", pinyin: "bǎi", english: "hundred", pos: "number" },
        { hanzi: "两", pinyin: "liǎng", english: "two (before measure words)", pos: "number" },
      ],
      patterns: [
        {
          pattern: "Thing + 多少钱？",
          example: {
            hanzi: "这条裤子多少钱？",
            pinyin: "Zhè tiáo kùzi duōshao qián?",
            english: "How much are these trousers?",
          },
          note: "No verb needed — point at the thing, then ask 'how much money?'.",
        },
        {
          pattern: "Number + 块 + number + (毛)",
          example: { hanzi: "三块五（毛）。", pinyin: "Sān kuài wǔ (máo).", english: "¥3.50." },
          note: "Units go biggest-first, and the last unit can be dropped in speech.",
        },
      ],
    },
    {
      heading: "Buying things: 买, 卖 and the shop dialogue",
      discovery: {
        problem:
          "Two characters, one stroke of difference: {{买|mǎi|to buy}} and {{卖|mài|to sell}}. Look closely — 卖 is just 买 wearing a little 十 on top, and the tone changes from falling-rising (mǎi) to falling (mài). Which one do you think the shopkeeper does, and how could you remember which is which?",
        idea:
          "The shopkeeper {{卖|mài|sells}}. Memory trick: the 十 on top looks like a **plus sign** — selling *adds* money to your pocket. And the seller's tone falls (mài) like goods coming down off the shelf. One tiny component, opposite meaning: character-building is a system, not luck.",
      },
      body:
        "To say what you want, use {{要|yào|to want}} or the softer {{想|xiǎng|would like to}}: {{我要买一件T恤衫。|Wǒ yào mǎi yí jiàn T-xùshān.|I want to buy a T-shirt.}} / {{我想买东西。|Wǒ xiǎng mǎi dōngxi.|I'd like to buy some things.}} {{东西|dōngxi|things, stuff}} is the all-purpose word for 'stuff' — {{买东西|mǎi dōngxi}} literally 'buy things' = to go shopping.\n\nWhere to shop: {{商店|shāngdiàn|shop}}, {{超市|chāoshì|supermarket}}, {{市场|shìchǎng|market}}, {{书店|shūdiàn|bookshop}}.\n\nEvery shop conversation runs on the same five-line frame:\n- Shopkeeper: {{你要买什么？|Nǐ yào mǎi shénme?|What do you want to buy?}}\n- You: {{我要买苹果。|Wǒ yào mǎi píngguǒ.|I want to buy apples.}}\n- You: {{多少钱？|Duōshao qián?|How much?}}\n- Shopkeeper: {{八块。|Bā kuài.|Eight kuai.}} — add {{一共|yígòng|altogether}} for a total: {{一共十块。|Yígòng shí kuài.|Ten kuai altogether.}}\n- You hand over money: {{给你钱。|Gěi nǐ qián.|Here's the money.}} Shopkeeper returns change: {{找你两块。|Zhǎo nǐ liǎng kuài.|Two kuai change for you.}}",
      whyItWorks:
        "Why does {{找|zhǎo}}, whose everyday meaning is 'to look for', mean 'to give change'? {{找钱|zhǎoqián}} is the shopkeeper 'finding' the difference between what you paid and the price, and handing it back. So 找你两块 is literally 'find-for-you two kuai'. Shop talk is formulaic — the same five slots every time — which is why learning the *frame* beats memorising whole dialogues: swap the item and the numbers, and the rest never changes.",
      strategies: [
        "Learn the frame, swap the slots",
        "Use components to tell look-alike characters apart (买/卖)",
      ],
      keyPoints: [
        "买 mǎi = buy; 卖 mài = sell — the 十 'plus sign' on top marks the seller",
        "我要买… states what you want; 我想买… is softer ('would like')",
        "一共 gives the total: 一共十块",
        "给你钱 hands money over; 找你 + amount hands change back",
        "买东西 = to go shopping ('buy things')",
      ],
      vocab: [
        { hanzi: "买", pinyin: "mǎi", english: "to buy", pos: "verb" },
        { hanzi: "卖", pinyin: "mài", english: "to sell", pos: "verb" },
        { hanzi: "要", pinyin: "yào", english: "to want", pos: "verb" },
        { hanzi: "想", pinyin: "xiǎng", english: "would like to", pos: "verb" },
        { hanzi: "给", pinyin: "gěi", english: "to give", pos: "verb" },
        {
          hanzi: "找钱",
          pinyin: "zhǎoqián",
          english: "to give change",
          pos: "verb",
          example: { hanzi: "找你两块。", pinyin: "Zhǎo nǐ liǎng kuài.", english: "Two kuai change for you." },
        },
        { hanzi: "一共", pinyin: "yígòng", english: "altogether, in total", pos: "adverb" },
        { hanzi: "东西", pinyin: "dōngxi", english: "thing(s), stuff", pos: "noun" },
        { hanzi: "商店", pinyin: "shāngdiàn", english: "shop", pos: "noun" },
        { hanzi: "超市", pinyin: "chāoshì", english: "supermarket", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "我要买 + thing",
          example: {
            hanzi: "我要买一顶帽子。",
            pinyin: "Wǒ yào mǎi yì dǐng màozi.",
            english: "I want to buy a hat.",
          },
        },
        {
          pattern: "一共 + price",
          example: { hanzi: "一共十五块。", pinyin: "Yígòng shíwǔ kuài.", english: "Fifteen kuai altogether." },
          note: "Use after adding up more than one item.",
        },
        {
          pattern: "找你 + amount",
          example: { hanzi: "找你五块。", pinyin: "Zhǎo nǐ wǔ kuài.", english: "Five kuai change for you." },
          note: "The shopkeeper's line — 找 'finds' the difference and hands it back.",
        },
      ],
    },
    {
      heading: "Clothes and the measure-word sorting machine",
      discovery: {
        problem:
          "Chinese uses four different words where English just says 'a': {{一件T恤衫|yí jiàn T-xùshān|a T-shirt}}, {{一条裤子|yì tiáo kùzi|a pair of trousers}}, {{一双鞋子|yì shuāng xiézi|a pair of shoes}}, {{一顶帽子|yì dǐng màozi|a hat}}. That looks random — but it isn't. Look at the *shape* of each item of clothing. Can you work out the sorting rule?",
        idea:
          "Measure words sort nouns by shape and kind: {{件|jiàn}} for clothes worn on the torso (shirts, jackets), {{条|tiáo}} for long thin things (trousers, skirts — and rivers and fish!), {{双|shuāng}} for natural pairs (shoes, socks, chopsticks), {{顶|dǐng}} for things with a crown — 顶 literally means 'top'. Crack the rule and you can classify clothes you've never seen.",
      },
      body:
        "The core wardrobe: {{衣服|yīfu|clothes}}, {{T恤衫|T-xùshān|T-shirt}}, {{裤子|kùzi|trousers}}, {{裙子|qúnzi|skirt}}, {{鞋子|xiézi|shoes}}, {{帽子|màozi|hat}}.\n\nCounting clothes always takes the pattern **number + measure word + noun**:\n- {{一件衣服|yí jiàn yīfu|one item of clothing}} — 件 for torso-wear\n- {{一条裙子|yì tiáo qúnzi|a skirt}} — 条 for long, thin, hanging things\n- {{一双鞋子|yì shuāng xiézi|a pair of shoes}} — 双 for pairs\n- {{一顶帽子|yì dǐng màozi|a hat}} — 顶 for headgear\n\nThe verb for wearing clothes, shoes and trousers is {{穿|chuān|to wear}}: {{我今天穿裙子。|Wǒ jīntiān chuān qúnzi.|I'm wearing a skirt today.}}\n\nListen to the little word 一 changing its tone: {{一件|yí jiàn}} (yí before a falling tone) but {{一条|yì tiáo}}, {{一双|yì shuāng}}, {{一顶|yì dǐng}} (yì before the other tones). Your ear will learn this faster than your eyes.",
      whyItWorks:
        "Why does Chinese bother with measure words at all? Chinese nouns don't change for singular/plural — 裤子 is 'trouser(s)'. The measure word does the counting work, and while it's there, it carries a free description of the noun's shape. That's why the system is *guessable*: a scarf ({{围巾|wéijīn}}) is long and thin, so it must be 一条围巾 — and it is. You're not memorising pairs; you're running a sorting machine.",
      strategies: [
        "Classify by shape: torso → 件, long & thin → 条, pairs → 双, crowned → 顶",
        "Meet a new noun? Guess its measure word from its shape before you look it up",
      ],
      keyPoints: [
        "Counting pattern: number + measure word + noun (一条裤子)",
        "件 torso-wear · 条 long/thin · 双 pairs · 顶 hats",
        "穿 is the verb for wearing clothes and shoes",
        "裤子 and 鞋子 are 'a pair of' in English but singular-shaped in Chinese: 一条裤子, 一双鞋子",
        "一 changes tone: yí jiàn but yì tiáo, yì shuāng, yì dǐng",
      ],
      vocab: [
        { hanzi: "衣服", pinyin: "yīfu", english: "clothes", pos: "noun" },
        { hanzi: "T恤衫", pinyin: "T-xùshān", english: "T-shirt", pos: "noun" },
        { hanzi: "裤子", pinyin: "kùzi", english: "trousers", pos: "noun" },
        { hanzi: "裙子", pinyin: "qúnzi", english: "skirt", pos: "noun" },
        { hanzi: "鞋子", pinyin: "xiézi", english: "shoes", pos: "noun" },
        { hanzi: "帽子", pinyin: "màozi", english: "hat", pos: "noun" },
        { hanzi: "件", pinyin: "jiàn", english: "measure word (torso-wear)", pos: "measure word" },
        { hanzi: "条", pinyin: "tiáo", english: "measure word (long, thin things)", pos: "measure word" },
        { hanzi: "双", pinyin: "shuāng", english: "measure word (pairs)", pos: "measure word" },
        {
          hanzi: "穿",
          pinyin: "chuān",
          english: "to wear",
          pos: "verb",
          example: { hanzi: "他穿T恤衫。", pinyin: "Tā chuān T-xùshān.", english: "He wears a T-shirt." },
        },
      ],
      patterns: [
        {
          pattern: "Number + measure word + clothing",
          example: {
            hanzi: "我要买一条裤子。",
            pinyin: "Wǒ yào mǎi yì tiáo kùzi.",
            english: "I want to buy a pair of trousers.",
          },
          note: "Never skip the measure word — 一裤子 is wrong.",
        },
      ],
    },
    {
      heading: "Colours, sizes and fit: 太大了！",
      discovery: {
        problem:
          "In a changing room you try on two shirts and tell the assistant: {{这件很大|zhè jiàn hěn dà|this one is (very) big}} about the first, and {{这件太大了|zhè jiàn tài dà le|this one is TOO big}} about the second. She only rushes off to fetch a different size for one of them. Which one — and what did the extra 太…了 signal?",
        idea:
          "She fetches a new size for the 太大了 shirt. {{很大|hěn dà}} just describes; the frame {{太|tài|too}} + adjective + {{了|le}} **complains** — it says the size has crossed a line and something must change. The 了 is part of the frame: 太大了, never just 太大 on its own in a complaint.",
      },
      body:
        "Colours attach {{色|sè|colour}} to make the colour word, then link to the noun with {{的|de}}: {{红色的裙子|hóngsè de qúnzi|a red skirt}}. The set: {{红色|hóngsè|red}}, {{黄色|huángsè|yellow}}, {{蓝色|lánsè|blue}}, {{绿色|lǜsè|green}}, {{白色|báisè|white}}, {{黑色|hēisè|black}}, {{粉红色|fěnhóngsè|pink}} — literally 'powder-red'.\n\nSizes use {{号|hào|size}}: {{大号|dàhào|large}}, {{中号|zhōnghào|medium}}, {{小号|xiǎohào|small}}. The assistant asks {{你穿多大号？|Nǐ chuān duō dà hào?|What size do you wear?}} — {{我穿中号。|Wǒ chuān zhōnghào.|I wear a medium.}}\n\nWrong fit? Complain with the frame: {{太大了！|Tài dà le!|Too big!}} {{太小了！|Tài xiǎo le!|Too small!}} Then ask for another size with {{有没有|yǒu méiyǒu|is there / do you have}}: {{有没有小一点儿的？|Yǒu méiyǒu xiǎo yìdiǎnr de?|Do you have a slightly smaller one?}} The final {{的|de}} means 'one' — 'a smaller ONE' — so you don't repeat the noun.",
      whyItWorks:
        "Two machines are working here. First, adjective + {{一点儿|yìdiǎnr|a little}} builds a comparison with no 'more' or '-er': {{大一点儿|dà yìdiǎnr}} = 'a bit bigger'. Second, {{有没有|yǒu méiyǒu}} is the verb 有 and its negative 没有 jammed together — literally 'have-not-have?' — which is Chinese's other way of making a yes/no question, no 吗 needed. Both are reusable far beyond shopping: 好一点儿 (a bit better), 你有没有笔？ (do you have a pen?).",
      strategies: [
        "太…了 is a two-part frame — always close it with 了",
        "Adjective + 一点儿 + 的 asks for 'a slightly …-er one' without repeating the noun",
      ],
      keyPoints: [
        "Colour + 色 + 的 + noun: 蓝色的T恤衫",
        "Sizes: 大号 / 中号 / 小号; ask with 你穿多大号？",
        "太 + adjective + 了 = 'too …' — a complaint that asks for action",
        "有没有…一点儿的？ asks for a slightly bigger/smaller one",
        "很大 describes; 太大了 complains",
      ],
      vocab: [
        { hanzi: "红色", pinyin: "hóngsè", english: "red", pos: "noun/adjective" },
        { hanzi: "黄色", pinyin: "huángsè", english: "yellow", pos: "noun/adjective" },
        { hanzi: "蓝色", pinyin: "lánsè", english: "blue", pos: "noun/adjective" },
        { hanzi: "绿色", pinyin: "lǜsè", english: "green", pos: "noun/adjective" },
        { hanzi: "白色", pinyin: "báisè", english: "white", pos: "noun/adjective" },
        { hanzi: "黑色", pinyin: "hēisè", english: "black", pos: "noun/adjective" },
        { hanzi: "粉红色", pinyin: "fěnhóngsè", english: "pink", pos: "noun/adjective" },
        { hanzi: "号", pinyin: "hào", english: "size", pos: "noun" },
        { hanzi: "太", pinyin: "tài", english: "too (excessively)", pos: "adverb" },
        { hanzi: "一点儿", pinyin: "yìdiǎnr", english: "a little, a bit", pos: "phrase" },
      ],
      patterns: [
        {
          pattern: "太 + adjective + 了",
          example: { hanzi: "这双鞋子太小了！", pinyin: "Zhè shuāng xiézi tài xiǎo le!", english: "These shoes are too small!" },
          note: "The frame needs both halves — 太 opens it, 了 closes it.",
        },
        {
          pattern: "有没有 + adjective + 一点儿的？",
          example: {
            hanzi: "有没有大一点儿的？",
            pinyin: "Yǒu méiyǒu dà yìdiǎnr de?",
            english: "Do you have a slightly bigger one?",
          },
          note: "The 的 stands in for the noun — 'a bigger ONE'.",
        },
        {
          pattern: "Colour + 色的 + noun",
          example: {
            hanzi: "我要那条黑色的裤子。",
            pinyin: "Wǒ yào nà tiáo hēisè de kùzi.",
            english: "I want those black trousers.",
          },
        },
      ],
    },
    {
      heading: "Bargaining: 太贵了！便宜一点儿吧",
      discovery: {
        problem:
          "At a Beijing street market a seller asks {{一百块|yìbǎi kuài|¥100}} for a hat. A local shakes her head: {{太贵了！便宜一点儿吧。|Tài guì le! Piányi yìdiǎnr ba.|Too expensive! A bit cheaper, come on.}} She gets it for sixty. The next day you try the same two lines at a big shopping-centre chain store — and get a blank stare. Same country, same words. Why did it work in one place and not the other?",
        idea:
          "Bargaining is about **where**, not just what you say. Markets and small stalls expect haggling — the first price is an opening move, not a rule. Supermarkets, chain shops and malls have fixed prices ({{不讲价|bù jiǎngjià|no bargaining}}), in China and in Singapore alike. The phrases only unlock doors that are already unlocked.",
      },
      body:
        "The two judgement words: {{贵|guì|expensive}} and {{便宜|piányi|cheap}}. Turn 贵 into an opening move with the complaint frame you already own: {{太贵了！|Tài guì le!|Too expensive!}}\n\nThen make your offer politely with {{吧|ba}}: {{便宜一点儿吧。|Piányi yìdiǎnr ba.|Make it a bit cheaper, eh?}} 吧 softens a demand into a friendly suggestion — the difference between 'Cheaper!' and 'How about a bit cheaper?'. The seller may agree with {{好吧|hǎo ba|all right then}}.\n\nA full market exchange:\n- You: {{这顶帽子多少钱？|Zhè dǐng màozi duōshao qián?|How much is this hat?}}\n- Seller: {{三十块。|Sānshí kuài.|Thirty kuai.}}\n- You: {{太贵了！便宜一点儿吧。|Tài guì le! Piányi yìdiǎnr ba.}}\n- Seller: {{好吧，二十块。|Hǎo ba, èrshí kuài.|All right, twenty kuai.}}\n\nSweeten the deal with a compliment: {{很漂亮|hěn piàoliang|very pretty}}, {{很好看|hěn hǎokàn|really nice-looking}} — flattering the goods while frowning at the price is classic market theatre. And 好看 is another building-block word: {{好|hǎo|good}} + {{看|kàn|to look at}} = good-to-look-at.",
      whyItWorks:
        "Why does 便宜一点儿吧 work as an offer? It reuses the comparison machine from the fitting room: adjective + {{一点儿|yìdiǎnr}} = 'a bit more (adjective)'. In the shop you wanted 大一点儿 (a bit bigger); at the market you want 便宜一点儿 (a bit cheaper). One pattern, two situations — that's the payoff for learning patterns instead of phrases. The 吧 then marks it as a negotiation, not an order.",
      strategies: [
        "Reuse patterns in new situations: 大一点儿 at the shop becomes 便宜一点儿 at the market",
        "Read the venue: stalls and markets bargain; malls and supermarkets don't",
      ],
      keyPoints: [
        "贵 = expensive, 便宜 = cheap",
        "太贵了！ opens a bargain; 便宜一点儿吧 makes the offer",
        "吧 softens a request into a suggestion",
        "Bargain at markets and stalls; never at supermarkets, chain shops or malls",
        "漂亮 and 好看 both praise how something looks",
      ],
      vocab: [
        { hanzi: "贵", pinyin: "guì", english: "expensive", pos: "adjective" },
        { hanzi: "便宜", pinyin: "piányi", english: "cheap", pos: "adjective" },
        { hanzi: "吧", pinyin: "ba", english: "suggestion particle", pos: "particle" },
        { hanzi: "漂亮", pinyin: "piàoliang", english: "pretty, beautiful", pos: "adjective" },
        { hanzi: "好看", pinyin: "hǎokàn", english: "nice-looking", pos: "adjective" },
        { hanzi: "市场", pinyin: "shìchǎng", english: "market", pos: "noun" },
        { hanzi: "书店", pinyin: "shūdiàn", english: "bookshop", pos: "noun" },
      ],
      patterns: [
        {
          pattern: "太贵了！便宜一点儿吧。",
          example: {
            hanzi: "太贵了！便宜一点儿吧。",
            pinyin: "Tài guì le! Piányi yìdiǎnr ba.",
            english: "Too expensive! Make it a bit cheaper.",
          },
          note: "The classic two-line bargaining opener — complaint, then softened offer.",
        },
        {
          pattern: "Adjective + 一点儿",
          example: { hanzi: "便宜一点儿。", pinyin: "Piányi yìdiǎnr.", english: "A bit cheaper." },
          note: "Comparison without 'more' — works with any adjective.",
        },
      ],
    },
  ],
  learn: {
    vocab: [
      { hanzi: "钱", pinyin: "qián", english: "money" },
      { hanzi: "块", pinyin: "kuài", english: "kuai / yuan (spoken)" },
      { hanzi: "元", pinyin: "yuán", english: "yuan (written)" },
      { hanzi: "毛", pinyin: "máo", english: "ten cents (spoken)" },
      { hanzi: "分", pinyin: "fēn", english: "cent" },
      { hanzi: "多少钱", pinyin: "duōshao qián", english: "how much (money)?" },
      { hanzi: "百", pinyin: "bǎi", english: "hundred" },
      { hanzi: "两", pinyin: "liǎng", english: "two (before measure words)" },
      { hanzi: "买", pinyin: "mǎi", english: "to buy" },
      { hanzi: "卖", pinyin: "mài", english: "to sell" },
      { hanzi: "要", pinyin: "yào", english: "to want" },
      { hanzi: "给", pinyin: "gěi", english: "to give" },
      { hanzi: "找钱", pinyin: "zhǎoqián", english: "to give change" },
      { hanzi: "一共", pinyin: "yígòng", english: "altogether" },
      { hanzi: "东西", pinyin: "dōngxi", english: "thing(s), stuff" },
      { hanzi: "商店", pinyin: "shāngdiàn", english: "shop" },
      { hanzi: "超市", pinyin: "chāoshì", english: "supermarket" },
      { hanzi: "市场", pinyin: "shìchǎng", english: "market" },
      { hanzi: "书店", pinyin: "shūdiàn", english: "bookshop" },
      { hanzi: "衣服", pinyin: "yīfu", english: "clothes" },
      { hanzi: "裤子", pinyin: "kùzi", english: "trousers" },
      { hanzi: "裙子", pinyin: "qúnzi", english: "skirt" },
      { hanzi: "鞋子", pinyin: "xiézi", english: "shoes" },
      { hanzi: "T恤衫", pinyin: "T-xùshān", english: "T-shirt" },
      { hanzi: "帽子", pinyin: "màozi", english: "hat" },
      { hanzi: "件", pinyin: "jiàn", english: "measure word: torso-wear" },
      { hanzi: "条", pinyin: "tiáo", english: "measure word: long, thin things" },
      { hanzi: "双", pinyin: "shuāng", english: "measure word: pairs" },
      { hanzi: "顶", pinyin: "dǐng", english: "measure word: hats" },
      { hanzi: "穿", pinyin: "chuān", english: "to wear" },
      { hanzi: "红色", pinyin: "hóngsè", english: "red" },
      { hanzi: "蓝色", pinyin: "lánsè", english: "blue" },
      { hanzi: "号", pinyin: "hào", english: "size" },
      { hanzi: "贵", pinyin: "guì", english: "expensive" },
      { hanzi: "便宜", pinyin: "piányi", english: "cheap" },
    ],
    patterns: [
      {
        pattern: "Thing + 多少钱？",
        example: {
          hanzi: "这条裤子多少钱？",
          pinyin: "Zhè tiáo kùzi duōshao qián?",
          english: "How much are these trousers?",
        },
      },
      {
        pattern: "我要买 + number + measure word + thing",
        example: {
          hanzi: "我要买一件T恤衫。",
          pinyin: "Wǒ yào mǎi yí jiàn T-xùshān.",
          english: "I want to buy a T-shirt.",
        },
      },
      {
        pattern: "太 + adjective + 了",
        example: { hanzi: "太贵了！", pinyin: "Tài guì le!", english: "Too expensive!" },
      },
      {
        pattern: "有没有 + adjective + 一点儿的？",
        example: {
          hanzi: "有没有大一点儿的？",
          pinyin: "Yǒu méiyǒu dà yìdiǎnr de?",
          english: "Do you have a slightly bigger one?",
        },
      },
      {
        pattern: "Colour + 色的 + noun",
        example: {
          hanzi: "我要那条红色的裙子。",
          pinyin: "Wǒ yào nà tiáo hóngsè de qúnzi.",
          english: "I want that red skirt.",
        },
      },
      {
        pattern: "找你 + amount",
        example: { hanzi: "找你两块。", pinyin: "Zhǎo nǐ liǎng kuài.", english: "Two kuai change for you." },
      },
    ],
    mnemonics: [
      {
        hanzi: "卖",
        tip: "卖 (sell) is 买 (buy) with 十 on top — a plus sign, because selling ADDS money to your pocket.",
      },
      {
        hanzi: "贵",
        tip: "The bottom of 贵 is 贝 (shell) — ancient China used shells as money, so 'expensive' costs many shells.",
      },
      {
        hanzi: "块",
        tip: "块 really means 'lump, piece' — a 'piece' of money, exactly like British slang 'quid'.",
      },
      {
        hanzi: "穿",
        tip: "穿 originally means 'to pierce through' — you WEAR clothes by pushing your head and arms through the holes.",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "shop-quiz-mcq-q01",
        question: "You want to ask the price of something. What do you say?",
        options: [
          "{{多少钱？|Duōshao qián?}}",
          "{{什么名字？|Shénme míngzi?}}",
          "{{你几岁？|Nǐ jǐ suì?}}",
          "{{谢谢！|Xièxie!}}",
        ],
        answerIndex: 0,
        explanation:
          "{{多少钱|duōshao qián}} is literally 'how-much money?' — the all-purpose price question. The others ask a name, ask an age and say thank you.",
        guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
        difficulty: "warmup",
      },
      {
        id: "shop-quiz-mcq-q02",
        question:
          "A price tag reads 20元. The shopkeeper tells you the price out loud. Which word will you almost certainly HEAR?",
        options: ["{{毛|máo}}", "{{块|kuài}}", "{{分|fēn}}", "{{号|hào}}"],
        answerIndex: 1,
        explanation:
          "{{元|yuán}} is the written register on tags and receipts; in speech people say {{块|kuài}} — 二十块. Like 'pounds' on a British price tag but 'quid' out loud. 毛 and 分 are smaller units, and 号 means size.",
        guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
        difficulty: "warmup",
        strategy: "Match the register to the situation",
      },
      {
        id: "shop-quiz-mcq-q03",
        question: "A fruit seller says {{三块五|sān kuài wǔ}}. How much is that?",
        options: ["¥35", "¥3.05", "¥3.50", "¥5.30"],
        answerIndex: 2,
        explanation:
          "Price units march downhill (块 then 毛), so after 三块 the trailing 五 can only mean 五毛 — the dropped unit is predictable. 三块五(毛) = 3 kuai 5 mao = ¥3.50.",
        guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
        difficulty: "core",
        hints: [
          "The last unit has been dropped, like English 'three fifty'.",
          "After 块 the next unit down is 毛 (ten cents).",
        ],
      },
      {
        id: "shop-quiz-mcq-q04",
        question: "Which measure word completes the sentence? 我要买一___裤子。",
        options: ["{{件|jiàn}}", "{{条|tiáo}}", "{{双|shuāng}}", "{{顶|dǐng}}"],
        answerIndex: 1,
        explanation:
          "Trousers are long and thin, so they take {{条|tiáo}}: 一条裤子. 件 is torso-wear, 双 is pairs (shoes, socks), 顶 is hats. Note trousers are NOT 双 — Chinese treats them as one long item, not a pair.",
        guideRef: "Clothes and the measure-word sorting machine",
        difficulty: "core",
        hints: [
          "Sort by shape: what shape are trousers?",
          "Long, thin, hanging things take the same measure word as rivers and fish.",
        ],
        strategy: "Classify by shape",
      },
      {
        id: "shop-quiz-mcq-q05",
        question: "Which sentence correctly says 'I want to buy a pair of black trousers'?",
        options: [
          "{{我要买一件黑色的裤子。|Wǒ yào mǎi yí jiàn hēisè de kùzi.}}",
          "{{我要买一条黑色的裤子。|Wǒ yào mǎi yì tiáo hēisè de kùzi.}}",
          "{{我要买黑色一条的裤子。|Wǒ yào mǎi hēisè yì tiáo de kùzi.}}",
          "{{我要买一条裤子黑色。|Wǒ yào mǎi yì tiáo kùzi hēisè.}}",
        ],
        answerIndex: 1,
        explanation:
          "The full shopping phrase stacks up as number + measure word + colour + 的 + noun: 一条黑色的裤子. Option 1 uses the wrong measure word (件 is torso-wear); options 3 and 4 put the colour in the wrong slot.",
        guideRef: "Colours, sizes and fit: 太大了！",
        difficulty: "core",
        hints: [
          "First pick the right measure word for trousers.",
          "Colour + 色的 sits directly in front of the noun.",
        ],
      },
      {
        id: "shop-quiz-mcq-q06",
        question:
          "You try on a T-shirt and it's far too big. What do you say to get one that fits?",
        options: [
          "{{太大了！有没有小一点儿的？|Tài dà le! Yǒu méiyǒu xiǎo yìdiǎnr de?}}",
          "{{太小了！有没有大一点儿的？|Tài xiǎo le! Yǒu méiyǒu dà yìdiǎnr de?}}",
          "{{很好看！多少钱？|Hěn hǎokàn! Duōshao qián?}}",
          "{{太贵了！便宜一点儿吧。|Tài guì le! Piányi yìdiǎnr ba.}}",
        ],
        answerIndex: 0,
        explanation:
          "The shirt is too BIG (太大了), so you need a SMALLER one: 小一点儿的. Option 2 has the direction backwards, option 3 compliments and asks the price, and option 4 haggles over money — the problem here is size, not price.",
        guideRef: "Colours, sizes and fit: 太大了！",
        difficulty: "core",
        hints: [
          "Two steps: complain about the fit, then ask for the OPPOSITE size.",
          "Too big → you want 小一点儿的, 'a slightly smaller one'.",
        ],
      },
      {
        id: "shop-quiz-mcq-q07",
        question:
          "At the market: apples are {{三块|sān kuài}} and bananas are {{两块五|liǎng kuài wǔ}}. The seller says {{一共…|yígòng…}}. Which price finishes her sentence?",
        options: [
          "{{五块|wǔ kuài}}",
          "{{五块五|wǔ kuài wǔ}}",
          "{{六块|liù kuài}}",
          "{{三块五|sān kuài wǔ}}",
        ],
        answerIndex: 1,
        explanation:
          "{{一共|yígòng}} means 'altogether', so add: 3 kuai + 2 kuai 5 mao = 5 kuai 5 mao = {{五块五|wǔ kuài wǔ}}. Doing quick sums inside the dialogue is exactly what real listening exams (and real markets) demand.",
        guideRef: "Buying things: 买, 卖 and the shop dialogue",
        difficulty: "core",
        hints: [
          "一共 signals a total — add the two prices.",
          "¥3 + ¥2.50 = ?",
        ],
        strategy: "Learn the frame, swap the slots",
      },
      {
        id: "shop-quiz-mcq-q08",
        question:
          "A hat costs {{七块五|qī kuài wǔ}}. You pay with a {{十块|shí kuài}} note. What does the shopkeeper say as she hands back your change?",
        options: [
          "{{找你两块五。|Zhǎo nǐ liǎng kuài wǔ.}}",
          "{{找你三块五。|Zhǎo nǐ sān kuài wǔ.}}",
          "{{找你两块。|Zhǎo nǐ liǎng kuài.}}",
          "{{给你七块五。|Gěi nǐ qī kuài wǔ.}}",
        ],
        answerIndex: 0,
        explanation:
          "Change = what you paid minus the price: 10 − 7.5 = 2.5, and 'two' before 块 is {{两|liǎng}}, so {{找你两块五|zhǎo nǐ liǎng kuài wǔ}}. 找 is the change verb ('I find you ¥2.50 back'); 给你七块五 would absurdly hand you the price itself.",
        guideRef: "Buying things: 买, 卖 and the shop dialogue",
        difficulty: "challenge",
        hints: [
          "Work out the change first: 10 − 7.5.",
          "The change verb is 找, not 给 — and remember which word 'two' becomes before 块.",
          "¥2.50 in spoken Chinese is 两块五.",
        ],
        strategy: "Do the maths before you pick the sentence",
      },
      {
        id: "shop-quiz-mcq-q09",
        question: "{{超市卖东西，我们去超市买东西。|Chāoshì mài dōngxi, wǒmen qù chāoshì mǎi dōngxi.}} What does {{卖|mài}} mean?",
        options: ["to buy", "to sell", "to want", "to give"],
        answerIndex: 1,
        explanation:
          "{{卖|mài}} (falling tone, with the 十 'plus sign' on top) is 'to sell' — the supermarket sells things, we go there to buy (买 mǎi) them. The added 十 marks the one who gains the money.",
        guideRef: "Buying things: 买, 卖 and the shop dialogue",
        difficulty: "core",
        hints: ["Which of the pair wears the little 十 hat — and what did the 'plus sign' stand for?"],
        strategy: "Use components to tell look-alike characters apart",
      },
      {
        id: "shop-quiz-mcq-q10",
        question:
          "Challenge: you've never met the word {{围巾|wéijīn|scarf}} — a long strip of cloth you wrap round your neck. Using the sorting machine, which is correct for 'I want to buy a scarf'?",
        options: [
          "{{我要买一件围巾。|Wǒ yào mǎi yí jiàn wéijīn.}}",
          "{{我要买一双围巾。|Wǒ yào mǎi yì shuāng wéijīn.}}",
          "{{我要买一条围巾。|Wǒ yào mǎi yì tiáo wéijīn.}}",
          "{{我要买一顶围巾。|Wǒ yào mǎi yì dǐng wéijīn.}}",
        ],
        answerIndex: 2,
        explanation:
          "A scarf is long and thin, so the sorting machine files it under {{条|tiáo}} — 一条围巾, just like 裤子 and 裙子. You classified a noun you'd never seen: that's the whole point of learning the rule instead of the list.",
        guideRef: "Clothes and the measure-word sorting machine",
        difficulty: "challenge",
        hints: [
          "Don't panic at the new word — the question tells you its shape.",
          "Long + thin things share a measure word with trousers and rivers.",
        ],
        strategy: "Meet a new noun? Guess its measure word from its shape",
      },
    ],
    qa: [
      {
        id: "shop-quiz-qa-q01",
        question: "Translate into Chinese: 'I want to buy a T-shirt.' (Characters or pinyin.)",
        modelAnswer: "{{我要买一件T恤衫。|Wǒ yào mǎi yí jiàn T-xùshān.|I want to buy a T-shirt.}}",
        markScheme: [
          "Uses {{我要买|wǒ yào mǎi}} (我想买 also acceptable)",
          "Includes a measure word between the number and the noun",
          "Correct measure word {{件|jiàn}} for a T-shirt",
          "Noun {{T恤衫|T-xùshān}} at the end",
        ],
        commonError:
          "Skipping the measure word (我要买一T恤衫 ✗) or using 条 — T-shirts are torso-wear, so 件.",
        guideRef: "Clothes and the measure-word sorting machine",
        difficulty: "warmup",
        hints: ["Pattern: 我要买 + number + measure word + thing."],
      },
      {
        id: "shop-quiz-qa-q02",
        question:
          "Read the market dialogue, then answer in English.\n\nA: {{你要买什么？|Nǐ yào mǎi shénme?}}\nB: {{我要买一顶帽子。多少钱？|Wǒ yào mǎi yì dǐng màozi. Duōshao qián?}}\nA: {{二十五块。|Èrshíwǔ kuài.}}\nB: {{太贵了！便宜一点儿吧。|Tài guì le! Piányi yìdiǎnr ba.}}\nA: {{好吧，二十块。|Hǎo ba, èrshí kuài.}}\n\n(a) What does B want to buy? (b) What is the first price? (c) What price do they agree in the end, and how did B get it?",
        modelAnswer:
          "(a) A hat. (b) ¥25 (25 kuai). (c) ¥20 — B bargained by complaining 太贵了 ('too expensive') and asking 便宜一点儿吧 ('make it a bit cheaper'), and the seller agreed with 好吧.",
        markScheme: [
          "(a) a hat ({{帽子|màozi}})",
          "(b) 25 kuai / ¥25",
          "(c) 20 kuai / ¥20",
          "(c) mentions bargaining: said it was too expensive / asked for cheaper",
        ],
        commonError:
          "Mixing up the two prices — 二十五 is 25 (two-ten-five) and 二十 is 20 (two-ten); read the number stack carefully.",
        guideRef: "Bargaining: 太贵了！便宜一点儿吧",
        difficulty: "core",
        hints: [
          "The item comes straight after 买 in B's first line.",
          "There are two prices in the dialogue — the first offer and the final deal.",
        ],
      },
      {
        id: "shop-quiz-qa-q03",
        question:
          "Explain the difference between {{这条裙子很大|zhè tiáo qúnzi hěn dà}} and {{这条裙子太大了|zhè tiáo qúnzi tài dà le}}. Why does the second one need 了?",
        modelAnswer:
          "很大 simply describes the skirt: 'it's (very) big' — a neutral observation. 太大了 complains: 'it's TOO big', meaning it has crossed a line and something should change (fetch another size, don't buy it). 太…了 is a two-part frame — 太 opens the complaint and 了 closes it, so the 了 isn't optional decoration; it completes the pattern.",
        markScheme: [
          "很大 = describes / neutral 'very big'",
          "太大了 = 'too big' — a complaint / problem needing action",
          "太…了 is a frame: 太 + adjective + 了 belong together",
          "了 completes the frame (not a past-tense marker here)",
        ],
        commonError:
          "Translating 太 as just 'very' — then 太大了 and 很大 look identical, and you miss that 太…了 signals 'over the line'.",
        guideRef: "Colours, sizes and fit: 太大了！",
        difficulty: "core",
        hints: [
          "One sentence would make a shop assistant fetch a new size. Which, and why?",
          "Think of 太…了 as a frame with two halves.",
        ],
      },
      {
        id: "shop-quiz-qa-q04",
        question:
          "A shirt costs {{三十五块|sānshíwǔ kuài}}. You pay with a {{五十块|wǔshí kuài}} note. Write the shopkeeper's change sentence in Chinese, and state the change in figures.",
        modelAnswer:
          "{{找你十五块。|Zhǎo nǐ shíwǔ kuài.|Fifteen kuai change for you.}} The change is ¥15 (50 − 35 = 15).",
        markScheme: [
          "Correct arithmetic: 50 − 35 = 15 / ¥15",
          "Uses the change verb {{找|zhǎo}} (找你…)",
          "Amount {{十五块|shíwǔ kuài}} in the sentence",
        ],
        commonError:
          "Using 给 instead of 找 — 给你十五块 is just 'I give you ¥15'; the shop-change verb is 找 (找钱).",
        guideRef: "Buying things: 买, 卖 and the shop dialogue",
        difficulty: "challenge",
        hints: [
          "First do the maths: 50 − 35.",
          "The frame is 找你 + amount.",
          "15 = 十五, so the amount is 十五块.",
        ],
        solutions: [
          {
            label: "Subtract, then slot in (recommended)",
            steps: [
              "Change = paid − price: 50 − 35 = 15.",
              "Convert to Chinese: 15 = 十五, money unit 块 → 十五块.",
              "Slot into the change frame 找你 + amount → 找你十五块。",
            ],
          },
          {
            label: "Count up like a market seller",
            steps: [
              "Start at the price and count up to the note: 三十五 → 四十 is 5, 四十 → 五十 is 10.",
              "5 + 10 = 15, so the change is 十五块.",
              "Say the seller's line: 找你十五块。",
            ],
          },
        ],
      },
      {
        id: "shop-quiz-qa-q05",
        question:
          "You're at a market stall and like a skirt priced at {{四十块|sìshí kuài}}. Write a four-line bargaining exchange (you, seller, you, seller) in which you get the price down. (Characters or pinyin.)",
        modelAnswer:
          "{{这条裙子多少钱？|Zhè tiáo qúnzi duōshao qián?|How much is this skirt?}} — {{四十块。|Sìshí kuài.|Forty kuai.}} — {{太贵了！便宜一点儿吧。|Tài guì le! Piányi yìdiǎnr ba.|Too expensive! A bit cheaper, please.}} — {{好吧，三十块。|Hǎo ba, sānshí kuài.|All right, thirty kuai.}}",
        markScheme: [
          "Asks the price with {{多少钱|duōshao qián}} (measure word 条 if the skirt is named)",
          "Seller states a price with 块",
          "Complains with {{太贵了|tài guì le}}",
          "Offers with {{便宜一点儿吧|piányi yìdiǎnr ba}} (吧 present)",
          "Final price is lower than the first",
        ],
        commonError:
          "Forgetting 吧 — without it 便宜一点儿 sounds like a blunt order rather than a friendly offer; and remember 太贵了 needs the closing 了.",
        guideRef: "Bargaining: 太贵了！便宜一点儿吧",
        difficulty: "core",
        hints: [
          "Follow the frame: ask price → price → complain + offer → new price.",
          "Your two power lines are 太贵了！ and 便宜一点儿吧。",
        ],
        solutions: [
          {
            label: "Build from the five-slot frame",
            steps: [
              "Line 1 (you): thing + 多少钱？ → 这条裙子多少钱？",
              "Line 2 (seller): a price → 四十块。",
              "Line 3 (you): complaint + softened offer → 太贵了！便宜一点儿吧。",
              "Line 4 (seller): agree lower → 好吧，三十块。",
            ],
          },
          {
            label: "Recycle patterns you already own",
            steps: [
              "Price question: reuse 多少钱 from the money section.",
              "Complaint: reuse the 太…了 frame with 贵.",
              "Offer: reuse adjective + 一点儿 (fitting-room pattern) with 便宜, plus 吧 to soften.",
              "Close with any lower number + 块.",
            ],
          },
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "shop-mcq-a",
        title: "Paper A — Prices & money",
        description: "Money units and registers, saying prices, totals and change.",
        questions: [
          {
            id: "shop-mcq-a-q01",
            question: "What does {{钱|qián}} mean?",
            options: ["shop", "money", "clothes", "size"],
            answerIndex: 1,
            explanation: "钱 means money — as in {{多少钱|duōshao qián|how much money?}}.",
            guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
            difficulty: "warmup",
          },
          {
            id: "shop-mcq-a-q02",
            question: "How many {{毛|máo}} make one {{块|kuài}}?",
            options: ["2", "10", "100", "1000"],
            answerIndex: 1,
            explanation:
              "The system is all tens: 1 块 = 10 毛, and 1 毛 = 10 分, so 1 块 = 100 分.",
            guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
            difficulty: "warmup",
          },
          {
            id: "shop-mcq-a-q03",
            question: "Where would you go to buy milk, fruit and snacks under one roof?",
            options: [
              "{{书店|shūdiàn}}",
              "{{超市|chāoshì}}",
              "{{市场|shìchǎng}}",
              "{{学校|xuéxiào}}",
            ],
            answerIndex: 1,
            explanation:
              "{{超市|chāoshì}} is the supermarket ('super-market', a direct loan-translation). 书店 is a bookshop, 市场 an open market, 学校 a school.",
            guideRef: "Buying things: 买, 卖 and the shop dialogue",
            difficulty: "warmup",
          },
          {
            id: "shop-mcq-a-q04",
            question: "Which pinyin is correct for 一块 (¥1)?",
            options: ["yī kuài", "yí kuài", "yì kuài", "yǐ kuài"],
            answerIndex: 1,
            explanation:
              "一 changes tone by what follows: before a falling (4th) tone like kuài it becomes rising yí — {{一块|yí kuài}}. Before other tones it's yì (一条 yì tiáo); yī is only the counting/citation form.",
            guideRef: "Clothes and the measure-word sorting machine",
            difficulty: "core",
            hints: ["What tone is kuài? 一 reacts to the tone that follows it."],
          },
          {
            id: "shop-mcq-a-q05",
            question: "How do you SAY ¥12.50?",
            options: [
              "{{十二块五|shí'èr kuài wǔ}}",
              "{{十二块五分|shí'èr kuài wǔ fēn}}",
              "{{二十块五|èrshí kuài wǔ}}",
              "{{十五块二|shíwǔ kuài èr}}",
            ],
            answerIndex: 0,
            explanation:
              "¥12.50 = 12 kuai 5 mao → 十二块五毛, and speech drops the final unit: 十二块五. Option 2 wrongly makes the 5 into 分 (cents, ¥12.05); options 3 and 4 scramble the digits (¥20.50, ¥15.20).",
            guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
            difficulty: "core",
            hints: ["12 = 十二 (ten-two). The trailing digit after 块 means 毛."],
          },
          {
            id: "shop-mcq-a-q06",
            question: "Which is the correct way to say ¥2?",
            options: [
              "{{二块|èr kuài}}",
              "{{两块|liǎng kuài}}",
              "{{两毛|liǎng máo}}",
              "{{二十块|èrshí kuài}}",
            ],
            answerIndex: 1,
            explanation:
              "Before a measure word, 'two' is {{两|liǎng}}, so ¥2 = 两块 — 二块 is the classic error. 两毛 is ¥0.20 and 二十块 is ¥20.",
            guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
            difficulty: "core",
            hints: ["块 is a measure word — which 'two' do measure words demand?"],
          },
          {
            id: "shop-mcq-a-q07",
            question:
              "{{一本书八块，一支笔两块。一共多少钱？|Yì běn shū bā kuài, yì zhī bǐ liǎng kuài. Yígòng duōshao qián?|A book is ¥8, a pen is ¥2. How much altogether?}}",
            options: [
              "{{六块|liù kuài}}",
              "{{八块|bā kuài}}",
              "{{十块|shí kuài}}",
              "{{十二块|shí'èr kuài}}",
            ],
            answerIndex: 2,
            explanation:
              "{{一共|yígòng}} asks for the total: 8 + 2 = 10 → {{十块|shí kuài}}. Don't be tempted by the numbers you can see in the question — 一共 always means 'do the sum'.",
            guideRef: "Buying things: 买, 卖 and the shop dialogue",
            difficulty: "core",
            hints: ["一共 = altogether. Add the two prices."],
          },
          {
            id: "shop-mcq-a-q08",
            question: "Where are you most likely to SEE the word {{元|yuán}} rather than hear it?",
            options: [
              "In a friend's spoken reply to 多少钱",
              "On a price tag or receipt",
              "In a market seller's shouted price",
              "Nowhere — 元 is never used",
            ],
            answerIndex: 1,
            explanation:
              "元 (with 角) is the written register: price tags, receipts, banknotes. Mouths use 块 and 毛. It's a register split, not two currencies — like 'pounds' in print versus 'quid' out loud.",
            guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
            difficulty: "core",
            strategy: "Match the register to the situation",
          },
          {
            id: "shop-mcq-a-q09",
            question: "{{三百五十块|sānbǎi wǔshí kuài}} is how much?",
            options: ["¥35", "¥305", "¥350", "¥3,500"],
            answerIndex: 2,
            explanation:
              "三百 = 3 × 100 = 300, 五十 = 50, so 三百五十块 = ¥350. Chinese numbers stack multiplier + unit in order, so read them left to right like a sum: 300 + 50.",
            guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
            difficulty: "core",
            hints: ["百 = hundred. Read it as 三×百 plus 五×十."],
          },
          {
            id: "shop-mcq-a-q10",
            question: "The cashier says {{找你五块|zhǎo nǐ wǔ kuài}}. What is happening?",
            options: [
              "She is asking you for another ¥5",
              "She is giving you ¥5 change",
              "She is looking for a ¥5 item",
              "She is telling you the total is ¥5",
            ],
            answerIndex: 1,
            explanation:
              "In shops {{找|zhǎo}} means to give change — she has 'found' the difference between what you paid and the price, and is handing back ¥5. The total would be introduced by 一共.",
            guideRef: "Buying things: 买, 卖 and the shop dialogue",
            difficulty: "core",
            hints: ["Everyday 找 = 'look for'. What does the shopkeeper 'find' for you at the till?"],
          },
          {
            id: "shop-mcq-a-q11",
            question:
              "Challenge: a melon costs {{六块五|liù kuài wǔ}}. You hand over {{十块|shí kuài}}. Which change sentence is correct?",
            options: [
              "{{找你四块五。|Zhǎo nǐ sì kuài wǔ.}}",
              "{{找你三块五。|Zhǎo nǐ sān kuài wǔ.}}",
              "{{找你三块。|Zhǎo nǐ sān kuài.}}",
              "{{找你四块。|Zhǎo nǐ sì kuài.}}",
            ],
            answerIndex: 1,
            explanation:
              "10 − 6.5 = 3.5 → {{三块五|sān kuài wǔ}}. A quick check: count up from 六块五 by 五毛 to reach 七块, then 三块 more to 十块 — 0.5 + 3 = 3.5. Option 1 subtracted only the kuai; options 3 and 4 dropped the 五毛.",
            guideRef: "Buying things: 买, 卖 and the shop dialogue",
            difficulty: "challenge",
            hints: [
              "Change = 10 − 6.5.",
              "Count up: 六块五 → 七块 needs 五毛; 七块 → 十块 needs 三块.",
            ],
            strategy: "Do the maths before you pick the sentence",
          },
          {
            id: "shop-mcq-a-q12",
            question:
              "Challenge: {{九毛|jiǔ máo}} + {{一毛|yì máo}} = ? (Answer as a Chinese price.)",
            options: [
              "{{十毛|shí máo}}",
              "{{一块|yí kuài}}",
              "{{一分|yì fēn}}",
              "{{十块|shí kuài}}",
            ],
            answerIndex: 1,
            explanation:
              "9 mao + 1 mao = 10 mao, and ten 毛 make one 块 — so the natural answer is {{一块|yí kuài}}. 十毛 is arithmetically right but nobody says it, just as English speakers say 'one pound', not 'a hundred pence'.",
            guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
            difficulty: "challenge",
            hints: [
              "Add the mao first.",
              "10 毛 rolls over into the next unit up — what is it called?",
            ],
          },
          {
            id: "shop-mcq-a-q13",
            question: "The shopkeeper greets you with {{你要买什么？|Nǐ yào mǎi shénme?}} What is she asking?",
            options: [
              "What do you want to buy?",
              "How much money do you have?",
              "What size do you wear?",
              "Do you want a bag?",
            ],
            answerIndex: 0,
            explanation:
              "要买 = want to buy, 什么 = what, sitting exactly where the answer will go: 'You want to buy WHAT?' Reply with 我要买 + the thing.",
            guideRef: "Buying things: 买, 卖 and the shop dialogue",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "shop-mcq-b",
        title: "Paper B — Clothes, colours & bargaining",
        description: "Wardrobe words, measure words, sizes and fit, and market haggling.",
        questions: [
          {
            id: "shop-mcq-b-q01",
            question: "What colour is {{红色|hóngsè}}?",
            options: ["blue", "red", "yellow", "black"],
            answerIndex: 1,
            explanation: "红 hóng = red; adding 色 makes the colour word. Think of red lanterns at Chinese New Year.",
            guideRef: "Colours, sizes and fit: 太大了！",
            difficulty: "warmup",
          },
          {
            id: "shop-mcq-b-q02",
            question: "Which measure word goes with {{鞋子|xiézi|shoes}}?",
            options: ["{{件|jiàn}}", "{{条|tiáo}}", "{{双|shuāng}}", "{{顶|dǐng}}"],
            answerIndex: 2,
            explanation:
              "Shoes come in natural pairs, so {{双|shuāng}}: 一双鞋子 — the same measure word as socks and chopsticks.",
            guideRef: "Clothes and the measure-word sorting machine",
            difficulty: "warmup",
          },
          {
            id: "shop-mcq-b-q03",
            question: "What does {{便宜|piányi}} mean?",
            options: ["expensive", "cheap", "pretty", "convenient"],
            answerIndex: 1,
            explanation:
              "便宜 = cheap, the opposite of {{贵|guì|expensive}}. It's also your key bargaining word: 便宜一点儿吧！",
            guideRef: "Bargaining: 太贵了！便宜一点儿吧",
            difficulty: "warmup",
          },
          {
            id: "shop-mcq-b-q04",
            question: "Which sentence correctly says 'She is wearing a red skirt today'?",
            options: [
              "{{她今天穿红色的裙子。|Tā jīntiān chuān hóngsè de qúnzi.}}",
              "{{她今天买红色的裙子。|Tā jīntiān mǎi hóngsè de qúnzi.}}",
              "{{她今天是红色的裙子。|Tā jīntiān shì hóngsè de qúnzi.}}",
              "{{她今天穿裙子的红色。|Tā jīntiān chuān qúnzi de hóngsè.}}",
            ],
            answerIndex: 0,
            explanation:
              "The wearing verb is {{穿|chuān}}, and colour + 色的 goes BEFORE the noun: 红色的裙子. Option 2 says she BUYS it, option 3 says she IS it, and option 4 reverses the colour and noun.",
            guideRef: "Colours, sizes and fit: 太大了！",
            difficulty: "core",
            hints: ["Pick the verb first: wear = 穿. Then check the colour sits in front of the noun."],
          },
          {
            id: "shop-mcq-b-q05",
            question: "Which pinyin is correct for 一双 (one pair)?",
            options: ["yī shuāng", "yí shuāng", "yì shuāng", "yǐ shuāng"],
            answerIndex: 2,
            explanation:
              "shuāng is a 1st (high) tone, and 一 turns into falling yì before 1st, 2nd and 3rd tones: {{一双|yì shuāng}}. It only becomes rising yí before 4th tones (一件 yí jiàn).",
            guideRef: "Clothes and the measure-word sorting machine",
            difficulty: "core",
            hints: ["Compare: 一件 yí jiàn (jiàn falls) but 一条 yì tiáo. What tone is shuāng?"],
          },
          {
            id: "shop-mcq-b-q06",
            question: "我要买一___帽子。 Which measure word fills the gap?",
            options: ["{{顶|dǐng}}", "{{双|shuāng}}", "{{条|tiáo}}", "{{件|jiàn}}"],
            answerIndex: 0,
            explanation:
              "Hats take {{顶|dǐng}}, which literally means 'top' — the measure word for things with a crown, worn at your top. 一顶帽子.",
            guideRef: "Clothes and the measure-word sorting machine",
            difficulty: "core",
            hints: ["Which measure word literally means 'top'?"],
          },
          {
            id: "shop-mcq-b-q07",
            question:
              "The shoes pinch — they're too small. How do you ask for a bigger pair?",
            options: [
              "{{有没有大一点儿的？|Yǒu méiyǒu dà yìdiǎnr de?}}",
              "{{有没有小一点儿的？|Yǒu méiyǒu xiǎo yìdiǎnr de?}}",
              "{{有没有便宜一点儿的？|Yǒu méiyǒu piányi yìdiǎnr de?}}",
              "{{太大了！|Tài dà le!}}",
            ],
            answerIndex: 0,
            explanation:
              "Too small → ask for a slightly BIGGER one: 大一点儿的, with 的 standing in for 'one'. Option 2 goes the wrong way, option 3 asks for a cheaper one, and option 4 complains the shoes are too big — the opposite problem.",
            guideRef: "Colours, sizes and fit: 太大了！",
            difficulty: "core",
            hints: ["The shoes are 太小了 — so the fix is the opposite adjective + 一点儿的."],
          },
          {
            id: "shop-mcq-b-q08",
            question: "{{粉红色|fěnhóngsè}} is which colour?",
            options: ["purple", "orange", "pink", "grey"],
            answerIndex: 2,
            explanation:
              "粉 fěn = powder, so 粉红色 is 'powder-red' — pink. Chinese often builds new colours by modifying a base colour word.",
            guideRef: "Colours, sizes and fit: 太大了！",
            difficulty: "core",
            hints: ["It's built from 红 (red) plus 粉 (powder). Powdered-down red is…?"],
          },
          {
            id: "shop-mcq-b-q09",
            question: "In which place is it fine to say {{便宜一点儿吧|piányi yìdiǎnr ba}} and haggle over the price?",
            options: [
              "A supermarket checkout",
              "A street-market stall",
              "A chain clothes shop in a mall",
              "A bookshop till",
            ],
            answerIndex: 1,
            explanation:
              "Markets and small stalls expect bargaining — the first price is an opening move. Supermarkets, chain shops and malls (in China and Singapore alike) have fixed prices, and haggling there just earns a blank stare.",
            guideRef: "Bargaining: 太贵了！便宜一点儿吧",
            difficulty: "core",
            strategy: "Read the venue",
          },
          {
            id: "shop-mcq-b-q10",
            question: "A friend tries on a jacket and you say {{很好看！|Hěn hǎokàn!}} What did you tell them?",
            options: [
              "It's too expensive!",
              "It looks really nice!",
              "It's too big!",
              "It's very cheap!",
            ],
            answerIndex: 1,
            explanation:
              "好看 is built from 好 (good) + 看 (look at) = good-to-look-at, i.e. nice-looking. Chinese builds many adjectives this way: 好吃 'good-to-eat' (tasty), 好听 'good-to-listen-to'.",
            guideRef: "Bargaining: 太贵了！便宜一点儿吧",
            difficulty: "core",
            hints: ["Break it into its two characters: 好 + 看."],
          },
          {
            id: "shop-mcq-b-q11",
            question:
              "Challenge: {{袜子|wàzi|socks}} is a new word for you. Which is correct for 'two pairs of socks'?",
            options: [
              "{{两件袜子|liǎng jiàn wàzi}}",
              "{{两条袜子|liǎng tiáo wàzi}}",
              "{{两双袜子|liǎng shuāng wàzi}}",
              "{{两顶袜子|liǎng dǐng wàzi}}",
            ],
            answerIndex: 2,
            explanation:
              "Socks come in natural pairs, exactly like shoes, so the sorting machine files them under {{双|shuāng}}: 两双袜子. Note also 两 (not 二) before the measure word.",
            guideRef: "Clothes and the measure-word sorting machine",
            difficulty: "challenge",
            hints: [
              "Don't translate the word — classify the object. How do socks come?",
              "Same category as shoes and chopsticks.",
            ],
            strategy: "Meet a new noun? Guess its measure word from its shape",
          },
          {
            id: "shop-mcq-b-q12",
            question:
              "Challenge: at a market you want to START a bargain, not just chat. Which line does the job?",
            options: [
              "{{这顶帽子很贵。|Zhè dǐng màozi hěn guì.}}",
              "{{太贵了！便宜一点儿吧。|Tài guì le! Piányi yìdiǎnr ba.}}",
              "{{这顶帽子很好看。|Zhè dǐng màozi hěn hǎokàn.}}",
              "{{我不要帽子。|Wǒ bú yào màozi.}}",
            ],
            answerIndex: 1,
            explanation:
              "很贵 merely observes ('it's expensive') — like 很大 in the fitting room, it asks for nothing. The 太…了 frame plus the softened offer 便宜一点儿吧 signals 'the price crossed a line — move it'. Option 3 compliments (which WEAKENS your bargaining position if said alone!) and option 4 walks away.",
            guideRef: "Bargaining: 太贵了！便宜一点儿吧",
            difficulty: "challenge",
            hints: [
              "Recall 很大 versus 太大了 — which one made the assistant act?",
              "A bargain opener needs a complaint AND an offer.",
            ],
            strategy: "太…了 complains; 很 merely describes",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "shop-qa-a",
        title: "Paper A — At the market: prices & change",
        description: "Asking prices, understanding shop dialogues, and money arithmetic.",
        questions: [
          {
            id: "shop-qa-a-q01",
            question: "Translate into English: {{这个多少钱？|Zhège duōshao qián?}}",
            modelAnswer: "How much is this (one)? — literally 'this one, how much money?'",
            markScheme: [
              "'How much' for {{多少钱|duōshao qián}}",
              "'this (one)' for {{这个|zhège}}",
              "Phrased as a question",
            ],
            guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
            difficulty: "warmup",
            hints: ["多少 = how much/many; 钱 = money."],
          },
          {
            id: "shop-qa-a-q02",
            question:
              "Translate into Chinese: 'I want to buy apples. How much altogether?' (Characters or pinyin.)",
            modelAnswer:
              "{{我要买苹果。一共多少钱？|Wǒ yào mǎi píngguǒ. Yígòng duōshao qián?|I want to buy apples. How much altogether?}}",
            markScheme: [
              "{{我要买|wǒ yào mǎi}} (or 我想买) + {{苹果|píngguǒ}}",
              "{{一共|yígòng}} for 'altogether'",
              "{{多少钱|duōshao qián}} for the price question",
            ],
            commonError:
              "Putting 一共 at the end English-style (多少钱一共 ✗) — 一共 sits at the front of the price question.",
            guideRef: "Buying things: 买, 卖 and the shop dialogue",
            difficulty: "core",
            hints: [
              "Two sentences: a 我要买 line, then a total question.",
              "一共 goes before 多少钱.",
            ],
          },
          {
            id: "shop-qa-a-q03",
            question:
              "Read the supermarket-till dialogue, then answer in English.\n\nA: {{你要买什么？|Nǐ yào mǎi shénme?}}\nB: {{我要买两瓶水。多少钱？|Wǒ yào mǎi liǎng píng shuǐ. Duōshao qián?}} ({{瓶|píng}} = bottle)\nA: {{一共四块。|Yígòng sì kuài.}}\nB: {{给你十块。|Gěi nǐ shí kuài.}}\nA: {{找你六块。|Zhǎo nǐ liù kuài.}}\n\n(a) What does B buy, and how many? (b) What is the total? (c) How much does B hand over, and how much change comes back? (d) Check: do the numbers add up?",
            modelAnswer:
              "(a) Water — two bottles. (b) ¥4 altogether. (c) B hands over ¥10 and gets ¥6 change. (d) Yes: 10 − 4 = 6, so 找你六块 is correct.",
            markScheme: [
              "(a) two bottles of water",
              "(b) ¥4 / 4 kuai total",
              "(c) pays ¥10, change ¥6",
              "(d) verifies 10 − 4 = 6",
            ],
            commonError:
              "Reading 找你六块 as B paying six more kuai — 找 flows FROM the shopkeeper TO you; it's change, not a demand.",
            guideRef: "Buying things: 买, 卖 and the shop dialogue",
            difficulty: "core",
            hints: [
              "给你… is the customer handing money; 找你… is the change coming back.",
              "Part (d) is a subtraction check.",
            ],
          },
          {
            id: "shop-qa-a-q04",
            question:
              "Your penpal asks why her Chinese textbook writes 元 but the video she watched says 块. Explain the difference, and give the matching pair for ten cents.",
            modelAnswer:
              "They're two registers of the same money. 元 (and 角) are the written forms found on price tags, receipts and banknotes; 块 (and 毛) are the spoken forms everyone uses in conversation. So a tag saying 5元 is read aloud as 五块. The ten-cent pair is 角 (written) and 毛 (spoken). English does the same: the tag says 'pounds', people say 'quid'.",
            markScheme: [
              "元/角 = written register (tags, receipts, notes)",
              "块/毛 = spoken register",
              "Same money, different situations — not different amounts",
              "Ten cents: written 角, spoken 毛",
            ],
            commonError:
              "Thinking 块 and 元 are different amounts or currencies — they are the SAME unit in different registers.",
            guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
            difficulty: "core",
            hints: [
              "Think 'pounds' on the tag versus 'quid' out loud.",
              "Each spoken unit has a written twin.",
            ],
          },
          {
            id: "shop-qa-a-q05",
            question:
              "{{一件T恤衫二十五块，一顶帽子十五块。你给老板五十块。|Yí jiàn T-xùshān èrshíwǔ kuài, yì dǐng màozi shíwǔ kuài. Nǐ gěi lǎobǎn wǔshí kuài.|A T-shirt is ¥25 and a hat is ¥15. You give the shopkeeper ¥50.}} Write the shopkeeper's change sentence in Chinese, showing your working.",
            modelAnswer:
              "Total: 25 + 15 = 40 (四十块). Change: 50 − 40 = 10. Shopkeeper: {{一共四十块。找你十块。|Yígòng sìshí kuài. Zhǎo nǐ shí kuài.|Forty kuai altogether. Ten kuai change for you.}}",
            markScheme: [
              "Total 25 + 15 = 40 / 四十块 (bonus for using 一共)",
              "Change 50 − 40 = 10",
              "Sentence uses 找你 + {{十块|shí kuài}}",
            ],
            commonError:
              "Finding change from only ONE item (50 − 25 = 25 ✗) — total both items first, then subtract.",
            guideRef: "Buying things: 买, 卖 and the shop dialogue",
            difficulty: "challenge",
            hints: [
              "Two steps: total first, change second.",
              "25 + 15 = ?, then 50 minus that.",
              "The frame is 找你 + amount.",
            ],
            solutions: [
              {
                label: "Total, then subtract (recommended)",
                steps: [
                  "Add the items: 25 + 15 = 40 → 一共四十块.",
                  "Subtract from the note: 50 − 40 = 10.",
                  "Change sentence: 找你十块。",
                ],
              },
              {
                label: "Subtract item by item",
                steps: [
                  "Start with the 五十块 note.",
                  "Take off the T-shirt: 50 − 25 = 25.",
                  "Take off the hat: 25 − 15 = 10.",
                  "Same answer: 找你十块。 (Any correct route to 10 earns the marks.)",
                ],
              },
            ],
          },
          {
            id: "shop-qa-a-q06",
            question:
              "Write a two-line exchange in Chinese: ask the price of a pair of trousers, and have the shopkeeper answer ¥45. (Characters or pinyin.)",
            modelAnswer:
              "{{这条裤子多少钱？|Zhè tiáo kùzi duōshao qián?|How much are these trousers?}} — {{四十五块。|Sìshíwǔ kuài.|Forty-five kuai.}}",
            markScheme: [
              "Question: thing + {{多少钱|duōshao qián}}",
              "Measure word {{条|tiáo}} with 裤子",
              "Answer: {{四十五|sìshíwǔ}} + 块",
            ],
            commonError:
              "四十五 mis-stacked as 四五十 or 五十四 — build it as 40 (四十) + 5 (五).",
            guideRef: "Money: 块, 毛 and 分 — and the price-tag puzzle",
            difficulty: "core",
            hints: [
              "Pattern: 这 + measure word + noun + 多少钱？",
              "45 = four-tens five.",
            ],
          },
        ],
      },
      {
        id: "shop-qa-b",
        title: "Paper B — Clothes, fit & bargaining",
        description: "Buying clothes, getting the right size, and writing market dialogues.",
        questions: [
          {
            id: "shop-qa-b-q01",
            question: "Translate into English: {{我穿中号。|Wǒ chuān zhōnghào.}}",
            modelAnswer: "I wear (a) medium (size M).",
            markScheme: [
              "{{穿|chuān}} = wear",
              "{{中号|zhōnghào}} = medium / size M",
            ],
            guideRef: "Colours, sizes and fit: 太大了！",
            difficulty: "warmup",
            hints: ["中 sits between 大 and 小."],
          },
          {
            id: "shop-qa-b-q02",
            question:
              "Translate into Chinese: 'I want to buy a pair of black shoes.' (Characters or pinyin.)",
            modelAnswer:
              "{{我要买一双黑色的鞋子。|Wǒ yào mǎi yì shuāng hēisè de xiézi.|I want to buy a pair of black shoes.}}",
            markScheme: [
              "{{我要买|wǒ yào mǎi}} (or 我想买)",
              "Measure word {{双|shuāng}} for shoes",
              "Colour {{黑色|hēisè}} + {{的|de}} before the noun",
              "{{鞋子|xiézi}} at the end",
            ],
            commonError:
              "Ordering it English-style with the colour after the noun (一双鞋子黑色 ✗) — colour + 色的 always comes BEFORE the noun.",
            guideRef: "Colours, sizes and fit: 太大了！",
            difficulty: "core",
            hints: [
              "Slot order: number + measure + colour色的 + noun.",
              "Shoes come in pairs — which measure word?",
            ],
          },
          {
            id: "shop-qa-b-q03",
            question:
              "In the fitting room, the T-shirt you tried is far too big. Write TWO Chinese sentences: complain about the fit, then ask for a smaller one.",
            modelAnswer:
              "{{太大了！|Tài dà le!|Too big!}} {{有没有小一点儿的？|Yǒu méiyǒu xiǎo yìdiǎnr de?|Do you have a slightly smaller one?}}",
            markScheme: [
              "Complaint uses the frame 太 + 大 + 了",
              "Request uses {{有没有|yǒu méiyǒu}}",
              "{{小一点儿|xiǎo yìdiǎnr}} — the correct direction (smaller)",
              "Final {{的|de}} to mean 'one' (no need to repeat the noun)",
            ],
            commonError:
              "太大 without the closing 了 — the complaint frame needs both halves: 太…了.",
            guideRef: "Colours, sizes and fit: 太大了！",
            difficulty: "core",
            hints: [
              "Complaint frame: 太 + adjective + 了.",
              "Too big means you want a SMALLER one: 小一点儿的.",
            ],
          },
          {
            id: "shop-qa-b-q04",
            question:
              "Read the clothes-stall dialogue, then answer in English.\n\nA: {{你要买什么？|Nǐ yào mǎi shénme?}}\nB: {{我想买一条裙子。有没有蓝色的？|Wǒ xiǎng mǎi yì tiáo qúnzi. Yǒu méiyǒu lánsè de?}}\nA: {{有。这条很漂亮，六十块。|Yǒu. Zhè tiáo hěn piàoliang, liùshí kuài.}}\nB: {{太贵了！便宜一点儿吧。|Tài guì le! Piányi yìdiǎnr ba.}}\nA: {{好吧，四十五块。|Hǎo ba, sìshíwǔ kuài.}}\n\n(a) What does B want to buy, and in what colour? (b) How does A praise the item? (c) What are the first and final prices? (d) How much did bargaining save?",
            modelAnswer:
              "(a) A skirt, in blue. (b) A says it's very pretty (很漂亮). (c) First price ¥60; final price ¥45. (d) Bargaining saved ¥15 (60 − 45).",
            markScheme: [
              "(a) a skirt, blue",
              "(b) 'very pretty' / 漂亮 mentioned",
              "(c) ¥60 first, ¥45 final",
              "(d) saved ¥15",
            ],
            commonError:
              "Missing that 有没有蓝色的 asks about COLOUR availability — the 的 stands in for 'a blue ONE', no noun repeated.",
            guideRef: "Bargaining: 太贵了！便宜一点儿吧",
            difficulty: "core",
            hints: [
              "The colour hides in B's second sentence: 蓝色的.",
              "Two prices appear — before and after the haggle. Subtract for (d).",
            ],
          },
          {
            id: "shop-qa-b-q05",
            question:
              "Explain the measure-word 'sorting machine' for clothes: what kinds of item take 件, 条, 双 and 顶, and why is the system guessable? Then classify two words you may not have met: {{大衣|dàyī|overcoat}} and {{围巾|wéijīn|scarf}}.",
            modelAnswer:
              "Measure words classify nouns by shape and kind: 件 for clothes worn on the torso (T-shirts, jackets), 条 for long thin things (trousers, skirts — also rivers and fish), 双 for natural pairs (shoes, socks), 顶 for headgear (顶 literally means 'top'). It's guessable because the categories are physical — look at an object's shape and you can predict its measure word without being taught it. 大衣 (overcoat) is torso-wear → 一件大衣; 围巾 (scarf) is long and thin → 一条围巾.",
            markScheme: [
              "件 = torso-wear; 条 = long/thin; 双 = pairs; 顶 = hats/headgear",
              "System is shape-based, so new nouns can be classified by looking at them",
              "大衣 → 件",
              "围巾 → 条",
            ],
            commonError:
              "Classifying 围巾 as 件 'because it's clothing' — the machine sorts by SHAPE first: long and thin beats 'is clothing'.",
            guideRef: "Clothes and the measure-word sorting machine",
            difficulty: "challenge",
            hints: [
              "Four categories: torso, long-thin, pairs, crowned.",
              "For the new words, ignore the translation and picture the object's shape.",
            ],
            solutions: [
              {
                label: "Sort by shape (recommended)",
                steps: [
                  "State the four categories and their logic (torso / long-thin / pairs / top).",
                  "大衣: worn on the torso like a jacket → 件.",
                  "围巾: a long strip → same family as 裤子, 裙子, rivers → 条.",
                ],
              },
              {
                label: "Match to a known 'anchor' word",
                steps: [
                  "Pick an anchor you know in each category: 件-T恤衫, 条-裤子, 双-鞋子, 顶-帽子.",
                  "Ask which anchor each new word most resembles physically.",
                  "大衣 resembles a T-shirt/jacket (torso) → 件; 围巾 resembles trousers' long-thin shape → 条.",
                ],
              },
            ],
          },
          {
            id: "shop-qa-b-q06",
            question:
              "At a market stall you want a hat priced at {{三十块|sānshí kuài}}. Write a four-line bargaining dialogue (you, seller, you, seller) ending with a price of {{二十块|èrshí kuài}}. (Characters or pinyin.)",
            modelAnswer:
              "{{这顶帽子多少钱？|Zhè dǐng màozi duōshao qián?|How much is this hat?}} — {{三十块。|Sānshí kuài.|Thirty kuai.}} — {{太贵了！便宜一点儿吧。|Tài guì le! Piányi yìdiǎnr ba.|Too expensive! A bit cheaper, please.}} — {{好吧，二十块。|Hǎo ba, èrshí kuài.|All right, twenty kuai.}}",
            markScheme: [
              "Opens with thing + {{多少钱|duōshao qián}}, measure word {{顶|dǐng}} for the hat",
              "Seller's first price: 三十块",
              "Complaint {{太贵了|tài guì le}} with the closing 了",
              "Offer {{便宜一点儿吧|piányi yìdiǎnr ba}} with 吧",
              "Final line agrees 二十块",
            ],
            commonError:
              "Using 件 or 条 with 帽子 — hats are 'crowned' items and take 顶; and don't drop the 吧, which keeps the offer friendly.",
            guideRef: "Bargaining: 太贵了！便宜一点儿吧",
            difficulty: "challenge",
            hints: [
              "The frame: price question → price → 太贵了 + offer → lower price.",
              "Hat measure word is the one meaning 'top'.",
              "Your offer line is 便宜一点儿吧.",
            ],
            solutions: [
              {
                label: "Fill the four slots of the frame",
                steps: [
                  "Slot 1 (you): 这 + 顶 + 帽子 + 多少钱？",
                  "Slot 2 (seller): 三十块。",
                  "Slot 3 (you): 太贵了！便宜一点儿吧。",
                  "Slot 4 (seller): 好吧，二十块。",
                ],
              },
              {
                label: "Adapt the model from the guide",
                steps: [
                  "Take the guide's market exchange word for word.",
                  "Swap the numbers: opening price 三十块, closing price 二十块.",
                  "Check the measure word still matches the item (帽子 → 顶) — everything else is unchanged.",
                ],
              },
            ],
          },
          {
            id: "shop-qa-b-q07",
            question:
              "Your family visits both a wet market and a big shopping mall in Singapore. Explain IN ENGLISH where you could try bargaining and where you shouldn't, and write the one Chinese sentence you'd use to open the bargain.",
            modelAnswer:
              "Bargaining is expected at market stalls and small independent shops — the first price is an opening move, and haggling is a normal, even friendly, part of the exchange. Supermarkets, chain stores and mall shops have fixed prices, so bargaining there doesn't work (and just confuses the cashier). This is true in China and Singapore alike. Opening line: {{太贵了！便宜一点儿吧。|Tài guì le! Piányi yìdiǎnr ba.|Too expensive! Make it a bit cheaper.}}",
            markScheme: [
              "Markets/stalls: bargaining OK and expected",
              "Malls/supermarkets/chain shops: fixed prices, no bargaining",
              "Chinese opener includes {{太贵了|tài guì le}} and/or {{便宜一点儿吧|piányi yìdiǎnr ba}}",
            ],
            commonError:
              "Treating bargaining as rude everywhere or acceptable everywhere — the skill is reading the VENUE.",
            guideRef: "Bargaining: 太贵了！便宜一点儿吧",
            difficulty: "core",
            hints: [
              "Think about who sets the price: a stall owner can move it; a chain-store cashier can't.",
              "The opener is the classic two-part line from the guide.",
            ],
          },
        ],
      },
    ],
  },
};
