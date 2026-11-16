// ---------------------------------------------------------------------------
// Core Year 8 Mandarin grammar & classifier reference engine.
// Powers the 60s Fluency Sprint, procedural drills, interactive widgets,
// and unit tests (tests/verbs.test.ts -> tests/chinese.test.ts).
// Pure TypeScript — client- & server-safe.
// ---------------------------------------------------------------------------

export interface ClassifierEntry {
  /** Classifier Hanzi, e.g. "本" */
  mw: string;
  /** Tone-marked Pinyin, e.g. "běn" */
  pinyin: string;
  /** Core rule / category */
  rule: string;
  /** Example nouns that take this classifier */
  nouns: { hanzi: string; pinyin: string; en: string }[];
}

export const MEASURE_WORDS: ClassifierEntry[] = [
  {
    mw: "个",
    pinyin: "gè",
    rule: "General classifier for people, fruits, rooms & abstract items",
    nouns: [
      { hanzi: "人", pinyin: "rén", en: "person" },
      { hanzi: "学生", pinyin: "xuésheng", en: "student" },
      { hanzi: "朋友", pinyin: "péngyou", en: "friend" },
      { hanzi: "苹果", pinyin: "píngguǒ", en: "apple" },
      { hanzi: "西瓜", pinyin: "xīguā", en: "watermelon" },
      { hanzi: "星期", pinyin: "xīngqī", en: "week" },
      { hanzi: "月", pinyin: "yuè", en: "month" },
      { hanzi: "包子", pinyin: "bāozi", en: "steamed bun" },
    ],
  },
  {
    mw: "口",
    pinyin: "kǒu",
    rule: "Family members living in a household (你家有几口人？)",
    nouns: [
      { hanzi: "人", pinyin: "rén", en: "family member (in household)" },
    ],
  },
  {
    mw: "本",
    pinyin: "běn",
    rule: "Bound books, notebooks, dictionaries & magazines",
    nouns: [
      { hanzi: "书", pinyin: "shū", en: "book" },
      { hanzi: "中文书", pinyin: "Zhōngwén shū", en: "Chinese book" },
      { hanzi: "词典", pinyin: "cídiǎn", en: "dictionary" },
      { hanzi: "杂志", pinyin: "zázhì", en: "magazine" },
      { hanzi: "笔记本", pinyin: "bǐjìběn", en: "notebook" },
      { hanzi: "菜单", pinyin: "càidān", en: "bound menu" },
    ],
  },
  {
    mw: "杯",
    pinyin: "bēi",
    rule: "Cups, glasses & mugs of drink",
    nouns: [
      { hanzi: "水", pinyin: "shuǐ", en: "glass/cup of water" },
      { hanzi: "茶", pinyin: "chá", en: "cup of tea" },
      { hanzi: "绿茶", pinyin: "lǜchá", en: "cup of green tea" },
      { hanzi: "牛奶", pinyin: "niúnǎi", en: "glass of milk" },
      { hanzi: "果汁", pinyin: "guǒzhī", en: "glass of juice" },
      { hanzi: "咖啡", pinyin: "kāfēi", en: "cup of coffee" },
      { hanzi: "奶茶", pinyin: "nǎichá", en: "cup of bubble/milk tea" },
    ],
  },
  {
    mw: "碗",
    pinyin: "wǎn",
    rule: "Bowls of rice, noodles, soup or porridge",
    nouns: [
      { hanzi: "米饭", pinyin: "mǐfàn", en: "bowl of cooked rice" },
      { hanzi: "面条", pinyin: "miàntiáo", en: "bowl of noodles" },
      { hanzi: "牛肉面", pinyin: "niúròumiàn", en: "bowl of beef noodles" },
      { hanzi: "汤", pinyin: "tāng", en: "bowl of soup" },
      { hanzi: "鸡蛋汤", pinyin: "jīdàntāng", en: "bowl of egg soup" },
      { hanzi: "粥", pinyin: "zhōu", en: "bowl of porridge/congee" },
    ],
  },
  {
    mw: "盘",
    pinyin: "pán",
    rule: "Plates or dishes of food served at the table",
    nouns: [
      { hanzi: "饺子", pinyin: "jiǎozi", en: "plate of dumplings" },
      { hanzi: "炒饭", pinyin: "chǎofàn", en: "plate of fried rice" },
      { hanzi: "青菜", pinyin: "qīngcài", en: "plate of stir-fried greens" },
      { hanzi: "鸡饭", pinyin: "jīfàn", en: "plate of chicken rice" },
      { hanzi: "水果", pinyin: "shuǐguǒ", en: "plate of fruit" },
    ],
  },
  {
    mw: "瓶",
    pinyin: "píng",
    rule: "Bottles of drink or medicine",
    nouns: [
      { hanzi: "可乐", pinyin: "kělè", en: "bottle of cola" },
      { hanzi: "矿泉水", pinyin: "kuàngquánshuǐ", en: "bottle of mineral water" },
      { hanzi: "苹果汁", pinyin: "píngguǒzhī", en: "bottle of apple juice" },
    ],
  },
  {
    mw: "件",
    pinyin: "jiàn",
    rule: "Upper-body clothing, coats, dresses & matters/gifts",
    nouns: [
      { hanzi: "衣服", pinyin: "yīfu", en: "piece of clothing" },
      { hanzi: "衬衫", pinyin: "chènshān", en: "shirt" },
      { hanzi: "T恤衫", pinyin: "T-xùshān", en: "T-shirt" },
      { hanzi: "毛衣", pinyin: "máoyī", en: "sweater/jumper" },
      { hanzi: "外套", pinyin: "wàitào", en: "jacket/coat" },
      { hanzi: "大衣", pinyin: "dàyī", en: "overcoat" },
      { hanzi: "礼物", pinyin: "lǐwù", en: "gift" },
    ],
  },
  {
    mw: "条",
    pinyin: "tiáo",
    rule: "Long, narrow or flexible items: trousers, skirts, scarves, fish, roads",
    nouns: [
      { hanzi: "裤子", pinyin: "kùzi", en: "pair of trousers" },
      { hanzi: "牛仔裤", pinyin: "niúzǎikù", en: "pair of jeans" },
      { hanzi: "裙子", pinyin: "qúnzi", en: "skirt/dress" },
      { hanzi: "围巾", pinyin: "wéijīn", en: "scarf" },
      { hanzi: "鱼", pinyin: "yú", en: "fish" },
      { hanzi: "黄瓜", pinyin: "huángguā", en: "cucumber" },
    ],
  },
  {
    mw: "双",
    pinyin: "shuāng",
    rule: "Natural pairs: shoes, socks, chopsticks, gloves, eyes",
    nouns: [
      { hanzi: "鞋", pinyin: "xié", en: "pair of shoes" },
      { hanzi: "运动鞋", pinyin: "yùndòngxié", en: "pair of trainers/sneakers" },
      { hanzi: "袜子", pinyin: "wàzi", en: "pair of socks" },
      { hanzi: "筷子", pinyin: "kuàizi", en: "pair of chopsticks" },
      { hanzi: "手套", pinyin: "shǒutào", en: "pair of gloves" },
      { hanzi: "眼睛", pinyin: "yǎnjing", en: "pair of eyes" },
    ],
  },
  {
    mw: "只",
    pinyin: "zhī",
    rule: "Small animals, birds, cats, dogs & single hands/ears",
    nouns: [
      { hanzi: "狗", pinyin: "gǒu", en: "dog" },
      { hanzi: "猫", pinyin: "māo", en: "cat" },
      { hanzi: "小鸟", pinyin: "xiǎoniǎo", en: "little bird" },
      { hanzi: "兔子", pinyin: "tùzi", en: "rabbit" },
      { hanzi: "熊猫", pinyin: "xióngmāo", en: "panda" },
    ],
  },
  {
    mw: "张",
    pinyin: "zhāng",
    rule: "Flat surfaces & sheets: tables, beds, tickets, paper, photos",
    nouns: [
      { hanzi: "桌子", pinyin: "zhuōzi", en: "table/desk" },
      { hanzi: "床", pinyin: "chuáng", en: "bed" },
      { hanzi: "电影票", pinyin: "diànyǐngpiào", en: "cinema ticket" },
      { hanzi: "照片", pinyin: "zhàopiàn", en: "photo" },
      { hanzi: "纸", pinyin: "zhǐ", en: "sheet of paper" },
    ],
  },
  {
    mw: "把",
    pinyin: "bǎ",
    rule: "Objects with a handle or grasped by hand: umbrellas, chairs",
    nouns: [
      { hanzi: "雨伞", pinyin: "yǔsǎn", en: "umbrella" },
      { hanzi: "椅子", pinyin: "yǐzi", en: "chair" },
    ],
  },
  {
    mw: "顶",
    pinyin: "dǐng",
    rule: "Hats & caps",
    nouns: [
      { hanzi: "帽子", pinyin: "màozi", en: "hat/cap" },
    ],
  },
  {
    mw: "斤",
    pinyin: "jīn",
    rule: "Chinese market weight unit (500 grams = half a kilo)",
    nouns: [
      { hanzi: "草莓", pinyin: "cǎoméi", en: "500g of strawberries" },
      { hanzi: "西红柿", pinyin: "xīhóngshì", en: "500g of tomatoes" },
      { hanzi: "土豆", pinyin: "tǔdòu", en: "500g of potatoes" },
      { hanzi: "葡萄", pinyin: "pútao", en: "500g of grapes" },
    ],
  },
];

export interface ParticleSprintItem {
  /** Sentence with blank ___ */
  sentence: string;
  /** English cue */
  cue: string;
  /** Accepted answers (Hanzi + Pinyin) */
  accept: string[];
  /** Canonical display answer */
  answerDisplay: string;
  /** Brief grammar reason */
  reason: string;
}

export const PARTICLE_DRILL_BANK: ParticleSprintItem[] = [
  {
    sentence: "我昨天___去学校，因为我发烧了。",
    cue: "didn't (past action)",
    accept: ["没", "没有", "méi", "méiyǒu"],
    answerDisplay: "没 / 没有 (méi)",
    reason: "Negating a completed past action uses 没(有), never 不.",
  },
  {
    sentence: "爸爸平时___喝咖啡，他喜欢喝茶。",
    cue: "doesn't (habit)",
    accept: ["不", "bù"],
    answerDisplay: "不 (bù)",
    reason: "Present habits and preferences are negated with 不.",
  },
  {
    sentence: "明天我___打算去买东西。",
    cue: "don't (future plan)",
    accept: ["不", "bù"],
    answerDisplay: "不 (bù)",
    reason: "Future plans and mental verbs like 打算 take 不.",
  },
  {
    sentence: "我家___养宠物。",
    cue: "don't have",
    accept: ["没有", "没", "méiyǒu", "méi"],
    answerDisplay: "没有 (méiyǒu)",
    reason: "The verb 有 (to have) is ALWAYS negated with 没 (没有), never *不有*.",
  },
  {
    sentence: "你以前去___北京吗？",
    cue: "ever been (past experience)",
    accept: ["过", "guo", "guò"],
    answerDisplay: "过 (guo)",
    reason: "Verb + 过 expresses life experience ('have ever done').",
  },
  {
    sentence: "我吃___北京烤鸭，非常好吃！",
    cue: "have tasted before (experience)",
    accept: ["过", "guo", "guò"],
    answerDisplay: "过 (guo)",
    reason: "吃过 means 'have eaten/tasted at least once before'.",
  },
  {
    sentence: "今天早饭我吃___两个包子。",
    cue: "ate (completed action with quantity)",
    accept: ["了", "le"],
    answerDisplay: "了 (le)",
    reason: "Verb + 了 marks a specific completed action.",
  },
  {
    sentence: "看！外面下大雨___！",
    cue: "it has started raining (new state)",
    accept: ["了", "le"],
    answerDisplay: "了 (le)",
    reason: "Sentence-final 了 signals a change of state ('now it's raining!').",
  },
  {
    sentence: "弟弟___在房间里听音乐呢。",
    cue: "is right now (-ing)",
    accept: ["正在", "正", "zhèngzài"],
    answerDisplay: "正在 (zhèngzài)",
    reason: "正在 + Verb (+ 呢) expresses an action in progress right now.",
  },
  {
    sentence: "妈妈___做晚饭呢，很香！",
    cue: "is cooking right now",
    accept: ["正在", "在", "zhèngzài", "zài"],
    answerDisplay: "正在 / 在 (zhèngzài)",
    reason: "正在 or 在 before the verb marks an ongoing action.",
  },
  {
    sentence: "天气预报说，明天下午___下雨。",
    cue: "will (weather prediction)",
    accept: ["会", "要", "huì", "yào"],
    answerDisplay: "会 (huì)",
    reason: "会 expresses future likelihood or predictions.",
  },
  {
    sentence: "这个周末我___跟朋友一起去看电影。",
    cue: "plan to",
    accept: ["打算", "准备", "dǎsuàn", "zhǔnbèi"],
    answerDisplay: "打算 (dǎsuàn)",
    reason: "打算 + Verb expresses a planned intention.",
  },
  {
    sentence: "新加坡___伦敦热得多。",
    cue: "more … than (comparison)",
    accept: ["比", "bǐ"],
    answerDisplay: "比 (bǐ)",
    reason: "A 比 B + Adjective compares two things ('A is more adj than B').",
  },
  {
    sentence: "今天___昨天那么冷。",
    cue: "not as … as",
    accept: ["没有", "méiyǒu"],
    answerDisplay: "没有 (méiyǒu)",
    reason: "A 没有 B (那么) + Adjective means 'A is not as adj as B'.",
  },
  {
    sentence: "你感冒了，___多喝温水、多休息。",
    cue: "should (advice)",
    accept: ["应该", "yīnggāi"],
    answerDisplay: "应该 (yīnggāi)",
    reason: "应该 + Verb gives advice ('should').",
  },
  {
    sentence: "姐姐___弹钢琴，弹得非常好。",
    cue: "can / knows how to (learned skill)",
    accept: ["会", "huì"],
    answerDisplay: "会 (huì)",
    reason: "会 + Verb expresses a skill learned through study or practice.",
  },
  {
    sentence: "哥哥喜欢___篮球，弟弟喜欢踢足球。",
    cue: "play (basketball — hand sport)",
    accept: ["打", "dǎ"],
    answerDisplay: "打 (dǎ)",
    reason: "Ball sports played with hands/rackets take 打 (打篮球, 打网球, 打羽毛球).",
  },
  {
    sentence: "我周末最喜欢跟同学一起___足球。",
    cue: "play (football — foot sport)",
    accept: ["踢", "tī"],
    answerDisplay: "踢 (tī)",
    reason: "Football is played by kicking with the foot: 踢足球.",
  },
  {
    sentence: "北京的冬天很冷，出门要___围巾和帽子。",
    cue: "wear (accessories: scarf & hat)",
    accept: ["戴", "dài"],
    answerDisplay: "戴 (dài)",
    reason: "Accessories (帽子, 围巾, 手套, 眼镜, 手表) take 戴, whereas clothes/shoes take 穿.",
  },
  {
    sentence: "今天下雪，你应该多___一件毛衣。",
    cue: "wear (clothes: jumper)",
    accept: ["穿", "chuān"],
    answerDisplay: "穿 (chuān)",
    reason: "Garments put on the body or feet (毛衣, 外套, 裤子, 鞋) take 穿.",
  },
];

// ---------------------------------------------------------------------------
// Mandarin numbers, 二 vs 两, clock times & RMB/SGD money helpers
// ---------------------------------------------------------------------------

const DIGITS = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

/** Convert integer 0..999 into standard Simplified Hanzi (counting form: uses 二). */
export function numberToHanzi(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 999) throw new Error(`Out of range: ${n}`);
  if (n < 10) return DIGITS[n];
  if (n < 20) return n === 10 ? "十" : `十${DIGITS[n - 10]}`;
  if (n < 100) {
    const tens = Math.floor(n / 10);
    const ones = n % 10;
    return `${DIGITS[tens]}十${ones ? DIGITS[ones] : ""}`;
  }
  const hundreds = Math.floor(n / 100);
  const rem = n % 100;
  if (rem === 0) return `${DIGITS[hundreds]}百`;
  if (rem < 10) return `${DIGITS[hundreds]}百零${DIGITS[rem]}`;
  return `${DIGITS[hundreds]}百${DIGITS[Math.floor(rem / 10)]}十${rem % 10 ? DIGITS[rem % 10] : ""}`;
}

/**
 * Quantity + Measure Word + Noun phrase, automatically applying the 二 vs 两 rule:
 * 2 before a classifier is ALWAYS 两 (两个人, 两本书), while 12/20/22 keep 二 (十二个人, 二十本书).
 */
export function quantityPhrase(count: number, mw: string, noun = ""): string {
  const numStr = count === 2 ? "两" : numberToHanzi(count);
  return `${numStr}${mw}${noun}`;
}

/** Accepted Hanzi variants for a clock time (hour 1..12, minute 0..59). */
export function clockAccepted(hour: number, minute: number): string[] {
  const h = hour === 2 ? "两" : numberToHanzi(hour);
  if (minute === 0) return [`${h}点`, `${h}点钟`];
  if (minute === 15) return [`${h}点一刻`, `${h}点十五分`, `${h}点十五`];
  if (minute === 30) return [`${h}点半`, `${h}点三十分`, `${h}点三十`];
  if (minute === 45) {
    const nextH = hour === 12 ? 1 : hour + 1;
    const nh = nextH === 2 ? "两" : numberToHanzi(nextH);
    return [`${h}点三刻`, `${h}点四十五分`, `${h}点四十五`, `差一刻${nh}点`, `差十五分${nh}点`];
  }
  const m = minute < 10 ? `零${DIGITS[minute]}` : numberToHanzi(minute);
  const out = [`${h}点${m}分`, `${h}点${m}`];
  if (minute === 55) {
    const nextH = hour === 12 ? 1 : hour + 1;
    const nh = nextH === 2 ? "两" : numberToHanzi(nextH);
    out.unshift(`差五分${nh}点`);
  }
  return out;
}
