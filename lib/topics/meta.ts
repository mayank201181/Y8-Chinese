// ---------------------------------------------------------------------------
// Topic registry: order, strand, icon and the fixed guide-section outline.
// Section ids here are the contract shared by guide authors (who must use
// them) and question / drill authors (whose guideRef must point at them).
// Aligned with Tanglin Trust School (Singapore) Year 8 Chinese (Foreign Language /
// Cambridge IGCSE 0547 pathway) + Core Foundations & Mandarin Grammar.
// Pure data — safe to import from Node scripts.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** Year 9 / IGCSE 0547 look-ahead (light touch). */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Where this sits in Tanglin Year 8 Chinese scheme (term + curriculum bullets). */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Foundations",
  "Term 1 · Weather & Health",
  "Term 2 · Hobbies & Leisure",
  "Term 3 · Food & Grammar",
];

const S = (id: string, heading: string, covers: string, stretch?: boolean): SectionPlan => ({
  id,
  heading,
  covers,
  ...(stretch ? { stretch } : {}),
});

export const TOPIC_META: TopicMeta[] = [
  // ----------------------- FOUNDATIONS (Y7 -> Y8 BRIDGE) -------------------
  {
    id: "greetings-routine",
    title: "自我介绍与日常 — Self-Introduction, Family & Daily Routine",
    strand: "Foundations",
    icon: "👋",
    curriculum: "Foundations (Y7→Y8 Bridge): greetings, personal profile, family, clock time & daily routine",
    sections: [
      S("greetings-identity", "Greetings, name, nationality & grade: 你叫什么名字？", "你好/您好, 早上好, 再见; 叫, 姓, 是, 哪国人 (新加坡人, 英国人, 中国人); 今年十二/十三岁, 上八年级 (Year 8); 吗 & 呢 questions."),
      S("family-pets", "Family members & pets: 你家有几口人？", "家, 爸爸, 妈妈, 哥哥, 姐姐, 弟弟, 妹妹, 爷爷, 奶奶; 有/没有; 几口人 vs 几个人; 养宠物 (一只狗, 一只猫); 和 (never joins two clauses!)."),
      S("clock-times", "Telling the clock time: 现在几点？", "点, 半, 刻 (一刻/三刻), 分, 差五分八点; 早上, 上午, 中午, 下午, 晚上; big-to-small time order (早上七点半)."),
      S("daily-routine", "School-day routine: 起床, 上学, 睡觉", "起床, 刷牙, 洗脸, 吃早饭, 上学, 上课, 放学, 回家, 做作业, 睡觉; Subject + Time + Action word order (我早上六点半起床)."),
      S("introducing-yourself", "Putting a full self-introduction together", "Writing and speaking a cohesive 80-character Year 8 self-introduction covering name, age, Singapore home, family, school grade and daily routine.", true),
    ],
  },
  {
    id: "time-measure-words",
    title: "时间与量词 — Dates, Time & Measure Words",
    strand: "Foundations",
    icon: "📅",
    curriculum: "Foundations (Y7→Y8 Bridge): numbers, dates, days of week, durations & core Mandarin classifiers",
    sections: [
      S("dates-days", "Years, months, dates & days: 今天几月几号？星期几？", "年, 月, 号/日, 星期一至星期天/星期日 (禮拜/周); 昨天, 今天, 明天, 前天, 后天; Mandarin big-to-small date order (二〇二六年十一月十七号星期二)."),
      S("er-vs-liang", "Numbers & the 二 (èr) vs 两 (liǎng) rule", "Counting 1–100+, 百, 千; when to use 二 (counting, dates, phone/bus numbers, ordinals 第二, 十二/二十) vs 两 (before measure words: 两个人, 两本书, 两点)."),
      S("core-measure-words", "Essential classifiers: 个, 口, 本, 杯, 碗, 盘", "Why Mandarin needs a measure word between number and noun; 个 (general), 口 (family members), 本 (books/dictionaries), 杯 (cups/glasses), 碗 (bowls), 盘 (plates/dishes)."),
      S("clothing-animal-classifiers", "Shape & pair classifiers: 件, 条, 双, 只, 张", "件 (tops/coats/matters), 条 (long/flexible: trousers, skirts, fish, roads), 双 (pairs: shoes, chopsticks, socks), 只 (small animals/birds), 张 (flat surfaces: tables, tickets, paper)."),
      S("demonstratives-duration", "这/那/哪 + Measure Word & time durations", "这个/那个/哪个/几个/多少; point-in-time (八点上课) vs duration after the verb (学了两个小时中文).", true),
    ],
  },

  // ----------------------- TERM 1: WEATHER, SEASONS & HEALTH ---------------
  {
    id: "weather",
    title: "天气 — Weather & Forecasts",
    strand: "Term 1 · Weather & Health",
    icon: "🌦️",
    curriculum: "Tanglin Y8 Term 1: Weather conditions, temperatures, feelings & forecasts",
    sections: [
      S("weather-conditions", "Weather types: 晴天, 阴天, 下雨, 下雪, 刮风", "天气怎么样？ 晴天, 阴天, 多云, 下雨 (下大雨/下小雨), 下雪, 刮大风, 打雷, 有雾; verb-object nature of 下雨 and 刮风."),
      S("temperature-degree", "Temperatures & feelings: 温度, 度, 热, 冷, 暖和, 凉快", "气温/温度, 度 (°C), 零下五度 (-5°C); 热, 冷, 暖和, 凉快, 潮湿 (humid — vital for Singapore!), 舒服; 很/非常/太…了 (no 是 before adjectives!)."),
      S("time-weather-forecasts", "Past, today & tomorrow's forecast: 昨天, 今天, 明天会…", "昨天天气很好, 今天有雨, 明天会下雨 / 要刮风; 比昨天热; weather report timeframes and reading forecast icons."),
      S("weather-activities", "Weather & knock-on plans: 因为下雨，所以…", "What you do or bring in different weather: 带雨伞, 待在家, 去海边, 不能踢足球; linking weather to decisions with 如果…就… and 因为…所以…."),
      S("reading-weather-reports", "Comparing city weather reports (IGCSE 0547 style)", "Reading and writing multi-city weather bulletins (新加坡, 北京, 伦敦, 悉尼) with temperatures, conditions and clothing/activity advice.", true),
    ],
  },
  {
    id: "seasons",
    title: "四季与穿着 — Four Seasons & Clothing",
    strand: "Term 1 · Weather & Health",
    icon: "🍂",
    curriculum: "Tanglin Y8 Term 1: Four seasons, Singapore vs Beijing climates, clothing & 穿/戴",
    sections: [
      S("four-seasons", "The four seasons: 春天, 夏天, 秋天, 冬天", "一年有四个季节: 春天 (春暖花开), 夏天 (炎热/常下雨), 秋天 (秋高气爽/凉快), 冬天 (寒冷/下雪); 你最喜欢哪个季节？为什么？"),
      S("singapore-vs-beijing", "Comparing climates: 新加坡 vs 北京", "新加坡一年四季都很热 / 没有冬天; 北京四季分明; comparing climates with A比B+adj (北京的冬天比新加坡冷得多) and 一样/不一样."),
      S("clothing-chuan-dai", "Clothes & accessories: 穿 (wear) vs 戴 (put on accessories)", "穿 + 衣服, 衬衫, T恤衫, 毛衣, 外套/大衣, 裤子, 牛仔裤, 裙子, 运动鞋; 戴 + 帽子, 围巾, 手套, 眼镜, 手表; classifiers 件, 条, 双, 顶, 副."),
      S("seasonal-activities", "Seasonal activities & travel plans", "春天去公园看花, 夏天去海边游泳/吃冰淇淋, 秋天去爬山, 冬天去滑雪/堆雪人; packing a suitcase for a trip from Singapore to China."),
      S("describing-favourite-season", "Writing about seasons, climate & outfits", "Structuring an extended paragraph comparing Singapore's tropical climate with a four-season destination, justifying your favourite season.", true),
    ],
  },
  {
    id: "illness",
    title: "生病与看病 — Illness, Body & Seeing the Doctor",
    strand: "Term 1 · Weather & Health",
    icon: "🩺",
    curriculum: "Tanglin Y8 Term 1: Body parts, symptoms, seeing the doctor & health advice",
    sections: [
      S("body-parts", "Parts of the body: 身体部位", "头, 头发, 眼睛, 耳朵, 鼻子, 嘴/嘴巴, 牙齿, 嗓子/喉咙, 手, 肚子, 腿, 脚, 身体; describing appearance or where it hurts."),
      S("symptoms-illness", "Symptoms & illnesses: 头疼, 发烧, 感冒, 咳嗽", "你怎么了？/ 哪里不舒服？ 我生病了: 头疼, 肚子疼, 嗓子疼, 牙疼, 发烧, 感冒, 咳嗽, 流鼻涕, 累; 疼 placed right after the body part."),
      S("at-the-clinic", "Seeing the doctor: 看医生, 吃药, 打针", "去医院, 看医生/看病, 检查, 开药, 吃药 (一天三次，一次两片), 量体温, 休息; roleplay dialogue between 医生 and 病人."),
      S("modal-advice", "Giving health advice: 应该, 得 (děi), 多喝水, 别…", "你应该多喝水 / 多休息 / 早点睡觉; 你得吃药 (děi = must, vs de/dé!); 不要/别喝冰水, 少吃糖; healthy habits."),
      S("sick-leave-note", "Writing a sick-leave message & recovery diary", "Writing a polite message (请假条 / text to 老师) explaining symptoms, when they started, what the doctor said and how long you need to rest.", true),
    ],
  },

  // ----------------------- TERM 2: HOBBIES & LEISURE -----------------------
  {
    id: "hobbies",
    title: "爱好与运动 — Hobbies, Sports & Music",
    strand: "Term 2 · Hobbies & Leisure",
    icon: "🏀",
    curriculum: "Tanglin Y8 Term 2: Sports (打/踢/游), music & creative hobbies, ability (会) & preferences",
    sections: [
      S("sports-verbs", "Action verbs for sports: 打 (hand) vs 踢 (foot) vs 骑", "打篮球, 打网球, 打乒乓球, 打羽毛球, 打排球; 踢足球; 游泳, 跑步, 滑冰, 滑雪, 骑自行车; why you cannot say *玩篮球* for playing basketball."),
      S("creative-music-hobbies", "Music, arts & quiet hobbies: 弹钢琴, 画画, 看书", "弹钢琴, 弹吉他, 拉小提琴 (hand action distinctions!), 唱歌, 跳舞, 听音乐, 画画, 看书/阅读, 拍照, 玩电脑游戏, 做饭."),
      S("likes-degrees", "Expressing preferences: 喜欢, 最喜欢, 感兴趣", "你的爱好是什么？ 喜欢, 很喜欢, 最喜欢, 不太喜欢, 讨厌; 对…感兴趣 (我对中国文化很感兴趣); giving reasons (因为很有意思 / 对身体好)."),
      S("ability-hui-neng", "Ability & permission: 会 (learned skill) vs 能 vs 可以", "我会游泳 / 我会说一点儿中文 (learned skill); 今天我不能去打球 (circumstance/ability); 这里可以拍照吗？(permission); 打得很好 (degree complement intro)."),
      S("cca-hobby-profile", "Talking about Singapore CCAs & club life", "Describing school CCAs (课外活动), how long you have practised a sport or instrument, and who you practise with.", true),
    ],
  },
  {
    id: "leisure-plans",
    title: "周末与计划 — Free Time, Frequency & Weekend Plans",
    strand: "Term 2 · Hobbies & Leisure",
    icon: "🎬",
    curriculum: "Tanglin Y8 Term 2: Leisure activities, frequency adverbs, intentions (打算) & invitations",
    sections: [
      S("free-time-activities", "Weekend & leisure activities: 看电影, 上网, 买东西", "周末, 空闲时间/有空的时候; 看电影, 看电视, 上网, 跟朋友聊天, 逛街/买东西, 去公园散步, 去图书馆, 在家休息."),
      S("frequency-adverbs", "How often? 常常, 有时候, 很少, 从不", "总是, 常常/经常, 有时候, 很少, 从不/从来不; exact placement BEFORE the verb (我周末常常看电影); 每天, 每个星期六, 一个星期两次."),
      S("making-plans-dasuan", "Future intentions: 打算, 准备, 想, 要", "这个周末你打算做什么？ 我打算跟朋友一起去看电影; 准备 (plan/prepare to), 想 (would like to), 要 (going to); contrasting routine vs specific plan."),
      S("together-invitations", "Inviting friends & arranging to meet: 跟…一起, 怎么样？", "跟/和 + person + 一起 + verb (我跟朋友一起去乌节路); 礼貌邀请: 你这个星期六有空吗？我们一起去看电影，好吗 / 怎么样？; accepting & declining politely (太好了！/ 不好意思，我有事)."),
      S("weekend-diary-plan", "Contrasting last weekend vs next weekend", "Combining past leisure activities with upcoming weekend plans, times, places (乌节路, 圣淘沙, 电影院) and opinions.", true),
    ],
  },

  // ----------------------- TERM 3: FOOD, MEALS & GRAMMAR -------------------
  {
    id: "vegetables-fruits",
    title: "蔬菜与水果 — Vegetables, Fruits & Market Shopping",
    strand: "Term 3 · Food & Grammar",
    icon: "🍓",
    curriculum: "Tanglin Y8 Term 3: Fruits, vegetables, weights (斤/公斤), prices (块/毛) & market bargaining",
    sections: [
      S("fruits-vocab", "Fruits & describing taste/freshness: 苹果, 西瓜, 草莓", "水果: 苹果, 香蕉, 西瓜, 草莓, 葡萄, 橙子, 芒果, 榴莲 (Singapore favourite!); 新鲜, 甜, 酸, 好吃, 多汁."),
      S("vegetables-vocab", "Vegetables & ingredients: 西红柿, 黄瓜, 青菜, 土豆", "蔬菜: 西红柿 (番茄), 黄瓜, 青菜/白菜, 土豆, 胡萝卜, 洋葱, 蘑菇, 豆腐; healthy eating phrases (多吃蔬菜和水果)."),
      S("money-weights", "Weights & Chinese money: 斤, 公斤, 元/块, 角/毛", "多少钱？ 一斤 (500g) vs 一公斤 (1kg); spoken 块/毛 vs written 元/角 (三块五 = 3.50元); 新币 (SGD) vs 人民币 (RMB); 怎么卖？(苹果怎么卖？五块钱一斤)."),
      S("bargaining-tai-le", "Shopping & bargaining: 太贵了！便宜一点儿吧", "贵, 便宜, 太贵了！可以便宜一点儿吗？/ 便宜一点儿吧！; 还要别的吗？ 一共多少钱？ 给您钱 / 找您两块."),
      S("market-dialogue", "At a wet market or supermarket (巴刹与超市)", "Completing a full buying-and-bargaining dialogue with quantities, measure words, total calculation and polite payment.", true),
    ],
  },
  {
    id: "three-meals",
    title: "一日三餐 — Three Meals a Day & Drinks",
    strand: "Term 3 · Food & Grammar",
    icon: "🥟",
    curriculum: "Tanglin Y8 Term 3: Breakfast/lunch/dinner, staple foods, drinks, hunger/thirst & healthy diet",
    sections: [
      S("meals-staples", "Three meals & staple foods: 早饭, 午饭, 晚饭, 米饭, 面条", "一日三餐: 早饭/早餐, 午饭/午餐, 晚饭/晚餐, 零食/夜宵; 米饭, 炒饭, 面条, 包子, 饺子, 面包, 鸡蛋, 三明治, 粥."),
      S("meats-dishes", "Meats, seafood & classic dishes: 鸡肉, 牛肉, 鱼", "猪肉, 牛肉, 鸡肉, 羊肉, 鱼, 虾; 鸡饭 (Hainanese chicken rice!), 烤鸭, 西红柿炒鸡蛋; cooking methods (炒, 烤, 煮, 蒸)."),
      S("drinks-containers", "Drinks & container classifiers: 牛奶, 果汁, 茶, 咖啡", "喝 + 水, 牛奶, 果汁, 苹果汁, 茶 (绿茶/奶茶), 咖啡, 可乐, 汤; 一杯茶, 一瓶水, 一碗汤, 一盒牛奶."),
      S("hungry-thirsty-full", "Appetite & mealtime phrases: 饿, 渴, 吃饱了", "我饿了 / 我很渴; 吃早饭 (never forget the meal verb 吃/喝); 我吃饱了 (I'm full); 慢用; 拿筷子 vs 用刀叉."),
      S("healthy-balanced-diet", "Describing a balanced diet (健康饮食)", "Explaining what you eat for three meals, why breakfast matters, and giving healthy diet advice (多吃蔬菜水果，少喝可乐，少吃快餐).", true),
    ],
  },
  {
    id: "eating-out",
    title: "出去吃饭 — Eating Out & Ordering at a Restaurant",
    strand: "Term 3 · Food & Grammar",
    icon: "🥢",
    curriculum: "Tanglin Y8 Term 3: Restaurant & hawker centre ordering, five flavours, requests & paying the bill",
    sections: [
      S("entering-seating", "Arriving at a restaurant: 请问几位？菜单", "饭馆/餐厅, 小贩中心 (Singapore hawker centre!), 服务员; 欢迎光临！请问几位？ 我们有四个人; 请坐; 可以看菜单吗？"),
      S("ordering-dishes", "Ordering food & drinks: 点菜, 来一碗…, 我要…", "你们想点什么？ 我要/想点…; 来一碗牛肉面，一盘饺子，两杯冰水; 还要别的吗？ 够了，谢谢."),
      S("five-flavours", "The five flavours & dietary requests: 酸甜苦辣咸", "味道怎么样？ 酸, 甜, 苦, 辣, 咸, 清淡, 香; 好吃 (food) vs 好喝 (drinks); 不要太辣 / 少放盐 / 不要香菜 / 我吃素."),
      S("paying-the-bill", "Paying the bill & reviews: 服务员，买单！", "服务员，买单 / 结账！ 一共多少钱？ 可以刷卡 / 用手机付钱吗？ 打包 (takeaway); 这家餐厅的菜不但好吃，而且不贵."),
      S("restaurant-review", "Roleplay & writing a restaurant/hawker review", "Writing an IGCSE-style account of eating out with family or friends: where you went, what you ordered, how it tasted and whether you recommend it.", true),
    ],
  },
  {
    id: "sentence-patterns",
    title: "句型与连词 — Mandarin Sentence Patterns & Connectors",
    strand: "Term 3 · Food & Grammar",
    icon: "🧱",
    curriculum: "Core Grammar: STPV golden word order, 比/没有 comparisons & paired connectors",
    sections: [
      S("stpv-word-order", "The Golden Rule: Subject + Time + Place + Verb (STPV)", "Why Mandarin NEVER puts place or time at the end like English ('I play basketball at school on Sunday' → 我星期天在学校打篮球); with-phrase 跟…一起 before the verb too!"),
      S("bi-comparisons", "Comparisons with 比 (bǐ) and 没有 (méiyǒu)", "A + 比 + B + Adjective (+ 得多 / 一点儿); trap: NEVER use 很 with 比 (*A比B很热* ✗ → A比B热 ✓); negative comparison A没有B(那么)+Adj; A跟B一样(+Adj)."),
      S("cause-contrast", "Cause & concession pairs: 因为…所以… & 虽然…但是…", "Mandarin uses BOTH halves of paired connectors! 因为天气太热，所以我们去游泳; 虽然中文很难，但是很有意思; subject placement rules."),
      S("addition-simultaneous", "Upgrading sentences: 不但…而且… & 一边…一边…", "不但…而且… (not only… but also…, same vs different subjects); 一边…一边… (doing two actions at once: 一边听音乐一边做作业); 先…再/然后…."),
      S("combining-clauses", "Building high-scoring IGCSE complex sentences", "Transforming choppy 4-word sentences into rich, natural multi-clause Mandarin paragraphs using STPV + connectors + comparisons.", true),
    ],
  },
  {
    id: "tenses-particles",
    title: "时态与助词 — Time & Aspect Particles in Mandarin",
    strand: "Term 3 · Food & Grammar",
    icon: "⏳",
    curriculum: "Core Grammar: Past, present & future in Mandarin — 了, 过, 正在, 会/打算 & 不 vs 没",
    sections: [
      S("completed-action-le", "Completed action & change of state: 了 (le)", "Mandarin verbs don't conjugate! Verb + 了 for completed actions (我吃了两碗米饭) and sentence-final 了 for new situations (下雨了 / 我饿了); when NOT to use 了 (habitual actions, adjectives with 很)."),
      S("past-experience-guo", "Life experience: Verb + 过 (guo)", "去过, 吃过, 看过, 学过 (我以前去过北京 / 你吃过北京烤鸭吗？); contrasting 了 (specific completed event) vs 过 (ever experienced); negation 没(有)+Verb+过 (keep 过!)."),
      S("ongoing-zhengzai", "Right now: 正在 / 在 … (呢)", "Expressing ongoing present ('am/is/are -ing'): 正在/在 + Verb (+ 呢), e.g. 弟弟正在看电视呢; negation 没(在) + Verb."),
      S("future-markers", "Talking about the future: 要, 会, 打算, 快要…了", "会 (prediction/likelihood: 明天会下雨), 打算/准备 (planned intention: 我打算学弹吉他), 要 (scheduled/determined), 快(要)…了 (about to happen: 快要放假了!)."),
      S("bu-vs-mei", "The ultimate negation showdown: 不 (bù) vs 没 / 没有 (méi)", "不 for present habits, future intentions, adjectives, 是/会/想 (我不喝咖啡 / 明天不去); 没(有) for completed past actions and 有 (我昨天没去 — NEVER *没去了*!).", true),
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
