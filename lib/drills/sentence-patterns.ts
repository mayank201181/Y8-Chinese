import type { Drill, DrillItem, Rng } from "./types.ts";

interface Term {
  hz: string;
  py: string;
  en: string;
}

const SUBJECTS: readonly Term[] = [
  { hz: "我", py: "Wǒ", en: "I" },
  { hz: "妈妈", py: "Māma", en: "Mum" },
  { hz: "爸爸", py: "Bàba", en: "Dad" },
  { hz: "哥哥", py: "Gēge", en: "my older brother" },
  { hz: "姐姐", py: "Jiějie", en: "my older sister" },
  { hz: "弟弟", py: "Dìdi", en: "my younger brother" },
  { hz: "小明", py: "Xiǎomíng", en: "Xiaoming" },
  { hz: "美美", py: "Měiměi", en: "Meimei" },
];

const TIMES: readonly Term[] = [
  { hz: "每天早上", py: "měitiān zǎoshang", en: "every morning" },
  { hz: "星期六下午", py: "xīngqīliù xiàwǔ", en: "on Saturday afternoon" },
  { hz: "星期天上午", py: "xīngqītiān shàngwǔ", en: "on Sunday morning" },
  { hz: "今天中午", py: "jīntiān zhōngwǔ", en: "at noon today" },
  { hz: "每天晚上", py: "měitiān wǎnshang", en: "every evening" },
  { hz: "星期五下午", py: "xīngqīwǔ xiàwǔ", en: "on Friday afternoon" },
];

const COMPANIONS: readonly Term[] = [
  { hz: "跟朋友一起", py: "gēn péngyou yìqǐ", en: "with friends" },
  { hz: "跟同学一起", py: "gēn tóngxué yìqǐ", en: "with classmates" },
  { hz: "跟家人一起", py: "gēn jiārén yìqǐ", en: "with family" },
];

const PLACE_ACTIONS: readonly { place: Term; action: Term }[] = [
  {
    place: { hz: "在图书馆", py: "zài túshūguǎn", en: "in the library" },
    action: { hz: "看书", py: "kàn shū", en: "read books" },
  },
  {
    place: { hz: "在学校", py: "zài xuéxiào", en: "at school" },
    action: { hz: "打篮球", py: "dǎ lánqiú", en: "play basketball" },
  },
  {
    place: { hz: "在小贩中心", py: "zài xiǎofàn zhōngxīn", en: "at the hawker centre" },
    action: { hz: "吃鸡饭", py: "chī jīfàn", en: "eat chicken rice" },
  },
  {
    place: { hz: "在东海岸公园", py: "zài Dōnghǎi'àn Gōngyuán", en: "at East Coast Park" },
    action: { hz: "骑自行车", py: "qí zìxíngchē", en: "ride a bicycle" },
  },
  {
    place: { hz: "在家", py: "zài jiā", en: "at home" },
    action: { hz: "做作业", py: "zuò zuòyè", en: "do homework" },
  },
  {
    place: { hz: "在乌节路", py: "zài Wūjiélù", en: "on Orchard Road" },
    action: { hz: "买衣服", py: "mǎi yīfu", en: "buy clothes" },
  },
  {
    place: { hz: "在公园", py: "zài gōngyuán", en: "in the park" },
    action: { hz: "散步", py: "sànbù", en: "take a walk" },
  },
  {
    place: { hz: "在房间", py: "zài fángjiān", en: "in the bedroom" },
    action: { hz: "复习中文", py: "fùxí Zhōngwén", en: "revise Chinese" },
  },
];

const COMPARISONS: readonly {
  a: Term;
  b: Term;
  adj: Term;
}[] = [
  {
    a: { hz: "新加坡", py: "Xīnjiāpō", en: "Singapore" },
    b: { hz: "北京", py: "Běijīng", en: "Beijing" },
    adj: { hz: "热", py: "rè", en: "hot" },
  },
  {
    a: { hz: "哈尔滨", py: "Hā'ěrbīn", en: "Harbin" },
    b: { hz: "上海", py: "Shànghǎi", en: "Shanghai" },
    adj: { hz: "冷", py: "lěng", en: "cold" },
  },
  {
    a: { hz: "大餐厅", py: "dà cāntīng", en: "big restaurants" },
    b: { hz: "小贩中心", py: "xiǎofàn zhōngxīn", en: "hawker centres" },
    adj: { hz: "贵", py: "guì", en: "expensive" },
  },
  {
    a: { hz: "飞机", py: "fēijī", en: "aeroplanes" },
    b: { hz: "公共汽车", py: "gōnggòng qìchē", en: "buses" },
    adj: { hz: "快", py: "kuài", en: "fast" },
  },
  {
    a: { hz: "巴刹的水果", py: "bāshā de shuǐguǒ", en: "wet-market fruit" },
    b: { hz: "超市的水果", py: "chāoshì de shuǐguǒ", en: "supermarket fruit" },
    adj: { hz: "便宜", py: "piányi", en: "cheap" },
  },
  {
    a: { hz: "这件毛衣", py: "zhè jiàn máoyī", en: "this jumper" },
    b: { hz: "那件毛衣", py: "nà jiàn máoyī", en: "that jumper" },
    adj: { hz: "暖和", py: "nuǎnhuo", en: "warm" },
  },
  {
    a: { hz: "今天的天气", py: "jīntiān de tiānqì", en: "today's weather" },
    b: { hz: "昨天的天气", py: "zuótiān de tiānqì", en: "yesterday's weather" },
    adj: { hz: "凉快", py: "liángkuai", en: "cool" },
  },
  {
    a: { hz: "周末的牛车水", py: "zhōumò de Niúchēshuǐ", en: "Chinatown at the weekend" },
    b: { hz: "平时的牛车水", py: "píngshí de Niúchēshuǐ", en: "Chinatown on weekdays" },
    adj: { hz: "热闹", py: "rènao", en: "lively" },
  },
  {
    a: { hz: "写汉字", py: "xiě Hànzì", en: "writing Chinese characters" },
    b: { hz: "说中文", py: "shuō Zhōngwén", en: "speaking Chinese" },
    adj: { hz: "难", py: "nán", en: "difficult" },
  },
  {
    a: { hz: "西瓜", py: "xīguā", en: "watermelon" },
    b: { hz: "苹果", py: "píngguǒ", en: "apples" },
    adj: { hz: "甜", py: "tián", en: "sweet" },
  },
];

const CAUSE_PAIRS: readonly {
  causeHz: string;
  causePy: string;
  causeEn: string;
  resVerbHz: string;
  resVerbPy: string;
  resVerbEn: string;
}[] = [
  {
    causeHz: "今天下大雨",
    causePy: "jīntiān xià dà yǔ",
    causeEn: "it is raining heavily today",
    resVerbHz: "在家看书",
    resVerbPy: "zài jiā kàn shū",
    resVerbEn: "reads at home",
  },
  {
    causeHz: "外面太热了",
    causePy: "wàimiàn tài rè le",
    causeEn: "it is too hot outside",
    resVerbHz: "去游泳",
    resVerbPy: "qù yóuyǒng",
    resVerbEn: "goes swimming",
  },
  {
    causeHz: "明天有中文考试",
    causePy: "míngtiān yǒu Zhōngwén kǎoshì",
    causeEn: "there is a Chinese exam tomorrow",
    resVerbHz: "在图书馆复习",
    resVerbPy: "zài túshūguǎn fùxí",
    resVerbEn: "revises in the library",
  },
  {
    causeHz: "嗓子很疼",
    causePy: "sǎngzi hěn téng",
    causeEn: "having a sore throat",
    resVerbHz: "去看医生",
    resVerbPy: "qù kàn yīshēng",
    resVerbEn: "goes to see the doctor",
  },
  {
    causeHz: "坐地铁很方便",
    causePy: "zuò dìtiě hěn fāngbiàn",
    causeEn: "taking the MRT is convenient",
    resVerbHz: "每天坐地铁上学",
    resVerbPy: "měitiān zuò dìtiě shàngxué",
    resVerbEn: "takes the MRT to school every day",
  },
];

const CONTRAST_PAIRS: readonly {
  concHz: string;
  concPy: string;
  concEn: string;
  contHz: string;
  contPy: string;
  contEn: string;
}[] = [
  {
    concHz: "汉字很难写",
    concPy: "Hànzì hěn nán xiě",
    concEn: "Chinese characters are hard to write",
    contHz: "很有意思",
    contPy: "hěn yǒu yìsi",
    contEn: "very interesting",
  },
  {
    concHz: "这家小贩中心很小",
    concPy: "zhè jiā xiǎofàn zhōngxīn hěn xiǎo",
    concEn: "this hawker centre is small",
    contHz: "鸡饭很好吃",
    contPy: "jīfàn hěn hǎochī",
    contEn: "the chicken rice is delicious",
  },
  {
    concHz: "榴莲有点儿贵",
    concPy: "liúlián yǒudiǎnr guì",
    concEn: "durian is a bit expensive",
    contHz: "非常香",
    contPy: "fēicháng xiāng",
    contEn: "extremely fragrant",
  },
  {
    concHz: "打羽毛球很累",
    concPy: "dǎ yǔmáoqiú hěn lèi",
    concEn: "playing badminton is tiring",
    contHz: "对身体很好",
    contPy: "duì shēntǐ hěn hǎo",
    contEn: "very good for health",
  },
  {
    concHz: "今天天气有点儿热",
    concPy: "jīntiān tiānqì yǒudiǎnr rè",
    concEn: "today's weather is a bit hot",
    contHz: "没有下雨",
    contPy: "méiyǒu xià yǔ",
    contEn: "it didn't rain",
  },
];

const COND_PAIRS: readonly {
  condHz: string;
  condPy: string;
  condEn: string;
  actHz: string;
  actPy: string;
  actEn: string;
}[] = [
  {
    condHz: "明天晴天",
    condPy: "míngtiān qíngtiān",
    condEn: "it is sunny tomorrow",
    actHz: "去圣淘沙",
    actPy: "qù Shèngtáoshā",
    actEn: "go to Sentosa",
  },
  {
    condHz: "下午不下雨",
    condPy: "xiàwǔ bú xià yǔ",
    condEn: "it doesn't rain in the afternoon",
    actHz: "去东海岸公园骑自行车",
    actPy: "qù Dōnghǎi'àn Gōngyuán qí zìxíngchē",
    actEn: "cycle at East Coast Park",
  },
  {
    condHz: "星期六有空",
    condPy: "xīngqīliù yǒu kòng",
    condEn: "free on Saturday",
    actHz: "去乌节路看电影",
    actPy: "qù Wūjiélù kàn diànyǐng",
    actEn: "watch a film on Orchard Road",
  },
  {
    condHz: "肚子饿了",
    condPy: "dùzi è le",
    condEn: "hungry",
    actHz: "吃一碗牛肉面",
    actPy: "chī yì wǎn niúròumiàn",
    actEn: "eat a bowl of beef noodles",
  },
];

const ADDITION_ITEMS: readonly {
  subjHz: string;
  subjPy: string;
  subjEn: string;
  q1Hz: string;
  q1Py: string;
  q2Hz: string;
  q2Py: string;
  en: string;
}[] = [
  {
    subjHz: "这家餐厅的菜",
    subjPy: "Zhè jiā cāntīng de cài",
    subjEn: "This restaurant's dishes",
    q1Hz: "便宜",
    q1Py: "piányi",
    q2Hz: "很好吃",
    q2Py: "hěn hǎochī",
    en: "not only cheap, but also delicious",
  },
  {
    subjHz: "新加坡的地铁",
    subjPy: "Xīnjiāpō de dìtiě",
    subjEn: "Singapore's MRT",
    q1Hz: "干净",
    q1Py: "gānjìng",
    q2Hz: "很方便",
    q2Py: "hěn fāngbiàn",
    en: "not only clean, but also very convenient",
  },
  {
    subjHz: "巴刹的芒果",
    subjPy: "Bāshā de mángguǒ",
    subjEn: "Mangoes at the wet market",
    q1Hz: "新鲜",
    q1Py: "xīnxiān",
    q2Hz: "很甜",
    q2Py: "hěn tián",
    en: "not only fresh, but also very sweet",
  },
  {
    subjHz: "多吃蔬菜",
    subjPy: "Duō chī shūcài",
    subjEn: "Eating plenty of vegetables",
    q1Hz: "好吃",
    q1Py: "hǎochī",
    q2Hz: "对身体好",
    q2Py: "duì shēntǐ hǎo",
    en: "not only tasty, but also good for health",
  },
  {
    subjHz: "我们的中文老师",
    subjPy: "Wǒmen de Zhōngwén lǎoshī",
    subjEn: "Our Chinese teacher",
    q1Hz: "热情",
    q1Py: "rèqíng",
    q2Hz: "很有耐心",
    q2Py: "hěn yǒu nàixīn",
    en: "not only enthusiastic, but also very patient",
  },
  {
    subjHz: "北京的秋天",
    subjPy: "Běijīng de qiūtiān",
    subjEn: "Autumn in Beijing",
    q1Hz: "凉快",
    q1Py: "liángkuai",
    q2Hz: "很舒服",
    q2Py: "hěn shūfu",
    en: "not only cool, but also very comfortable",
  },
];

const SIMULTANEOUS_PAIRS: readonly {
  v1Hz: string;
  v1Py: string;
  v2Hz: string;
  v2Py: string;
  en: string;
}[] = [
  {
    v1Hz: "听音乐",
    v1Py: "tīng yīnyuè",
    v2Hz: "做作业",
    v2Py: "zuò zuòyè",
    en: "listening to music while doing homework",
  },
  {
    v1Hz: "喝茶",
    v1Py: "hē chá",
    v2Hz: "聊天",
    v2Py: "liáotiān",
    en: "drinking tea while chatting",
  },
  {
    v1Hz: "跑步",
    v1Py: "pǎobù",
    v2Hz: "听中文歌",
    v2Py: "tīng Zhōngwén gē",
    en: "jogging while listening to Chinese songs",
  },
  {
    v1Hz: "吃晚饭",
    v1Py: "chī wǎnfàn",
    v2Hz: "看电视",
    v2Py: "kàn diànshì",
    en: "eating dinner while watching TV",
  },
  {
    v1Hz: "散步",
    v1Py: "sànbù",
    v2Hz: "拍照",
    v2Py: "pāizhào",
    en: "taking a walk while taking photos",
  },
];

const SEQUENCE_PAIRS: readonly {
  v1Hz: string;
  v1Py: string;
  v2Hz: string;
  v2Py: string;
  en: string;
}[] = [
  {
    v1Hz: "洗手",
    v1Py: "xǐ shǒu",
    v2Hz: "吃晚饭",
    v2Py: "chī wǎnfàn",
    en: "first washes hands, then eats dinner",
  },
  {
    v1Hz: "做作业",
    v1Py: "zuò zuòyè",
    v2Hz: "玩电脑游戏",
    v2Py: "wán diànnǎo yóuxì",
    en: "first does homework, then plays computer games",
  },
  {
    v1Hz: "复习生词",
    v1Py: "fùxí shēngcí",
    v2Hz: "睡觉",
    v2Py: "shuìjiào",
    en: "first revises new words, then goes to sleep",
  },
  {
    v1Hz: "去图书馆看书",
    v1Py: "qù túshūguǎn kàn shū",
    v2Hz: "去吃午饭",
    v2Py: "qù chī wǔfàn",
    en: "first goes to the library to read, then goes to eat lunch",
  },
];

function capFirst(s: string): string {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

export const drills: Drill[] = [
  {
    id: "sentence-patterns.stpv-scrambler",
    topicId: "sentence-patterns",
    title: "STPV Word-Order Scrambler",
    level: 1,
    guideRef: "stpv-word-order",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const subj = rng.pick(SUBJECTS);
      const time = rng.pick(TIMES);
      const pa = rng.pick(PLACE_ACTIONS);

      if (tier === 1) {
        // 4 blocks: S + T + P + V
        const blocks = [subj.hz, time.hz, pa.place.hz, pa.action.hz];
        let shuffled = rng.shuffle(blocks);
        if (shuffled.join("") === blocks.join("")) {
          shuffled = [pa.action.hz, subj.hz, pa.place.hz, time.hz];
        }
        const ansHz = `${subj.hz}${time.hz}${pa.place.hz}${pa.action.hz}`;
        const altHz = `${time.hz}${subj.hz}${pa.place.hz}${pa.action.hz}`;
        const ansPy = `${subj.py} ${time.py} ${pa.place.py} ${pa.action.py}`;
        const altPy = `${capFirst(time.py)} ${subj.py.toLowerCase()} ${pa.place.py} ${pa.action.py}`;
        const engOrder = `${subj.hz}${pa.action.hz}${pa.place.hz}${time.hz}`;

        return {
          prompt: `Unscramble into natural Mandarin **STPV** order (*${subj.en} — ${pa.action.en} — ${pa.place.en} — ${time.en}*):\n\n**${shuffled.join(" / ")}**`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy, altPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: { type: "text", accept: [engOrder] },
              feedback:
                "That's English word order! Put Time and Place BEFORE the action verb in Mandarin (STPV).",
            },
          ],
          hint: "Line up **Subject + Time + Place (在…) + Verb**!",
          solution: [
            `1. Subject + Time: **${subj.hz}${time.hz}**`,
            `2. Place (before verb!): **${pa.place.hz}**`,
            `3. Verb + Object at the end: **${pa.action.hz}**`,
            `Full sentence: **${ansHz}。** (*${ansPy}.*)`,
          ],
        };
      }

      const comp = rng.pick(COMPANIONS);
      if (tier === 2) {
        // 5 blocks: S + T + Companion + P + V
        const blocks = [subj.hz, time.hz, comp.hz, pa.place.hz, pa.action.hz];
        let shuffled = rng.shuffle(blocks);
        if (shuffled.join("") === blocks.join("")) {
          shuffled = [pa.action.hz, pa.place.hz, subj.hz, comp.hz, time.hz];
        }
        const ansHz = `${subj.hz}${time.hz}${comp.hz}${pa.place.hz}${pa.action.hz}`;
        const ansHz2 = `${subj.hz}${time.hz}${pa.place.hz}${comp.hz}${pa.action.hz}`;
        const altHz = `${time.hz}${subj.hz}${comp.hz}${pa.place.hz}${pa.action.hz}`;
        const ansPy = `${subj.py} ${time.py} ${comp.py} ${pa.place.py} ${pa.action.py}`;

        return {
          prompt: `Unscramble all 5 blocks into natural Mandarin **STPV** order (*${subj.en} — ${pa.action.en} — ${comp.en} — ${pa.place.en} — ${time.en}*):\n\n**${shuffled.join(" / ")}**`,
          answer: {
            type: "text",
            accept: [ansHz, ansHz2, altHz, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`${subj.hz}${pa.action.hz}${comp.hz}${pa.place.hz}${time.hz}`],
              },
              feedback:
                "Keep the verb at the very end! Time, **跟…一起**, and **在 + Place** must all stand BEFORE the verb.",
            },
          ],
          hint: "Order: **Subject + Time + 跟…一起 + 在… + Verb**!",
          solution: [
            `1. Subject + Time: **${subj.hz}${time.hz}**`,
            `2. Companion + Place: **${comp.hz}${pa.place.hz}**`,
            `3. Action at the end: **${pa.action.hz}**`,
            `Full sentence: **${ansHz}。**`,
          ],
        };
      }

      // Tier 3: Translate from English prompt with given vocabulary cues
      const ansHz = `${subj.hz}${time.hz}${comp.hz}${pa.place.hz}${pa.action.hz}`;
      const ansHz2 = `${subj.hz}${time.hz}${pa.place.hz}${comp.hz}${pa.action.hz}`;
      const altHz = `${time.hz}${subj.hz}${comp.hz}${pa.place.hz}${pa.action.hz}`;
      const ansPy = `${subj.py} ${time.py} ${comp.py} ${pa.place.py} ${pa.action.py}`;
      return {
        prompt: `Translate into Mandarin using **STPV** word order:\n*“${capFirst(time.en)}, ${subj.en} (${subj.hz}) — ${pa.action.en} (${pa.action.hz}) — ${comp.en} (${comp.hz}) — ${pa.place.en} (${pa.place.hz}).”*`,
        answer: {
          type: "text",
          accept: [ansHz, ansHz2, altHz, ansPy],
          display: `${ansHz}。`,
        },
        traps: [
          {
            spec: {
              type: "text",
              accept: [`${subj.hz}${pa.action.hz}${comp.hz}${pa.place.hz}${time.hz}`],
            },
            feedback:
              "Never leave Companion, Place, or Time trailing after the verb! Move them in front of the verb.",
          },
        ],
        hint: "Put **Subject + Time + 跟…一起 + 在… + Verb**.",
        solution: [
          `Set the stage before the action: **${subj.hz}** (S) + **${time.hz}** (T) + **${comp.hz}** (With) + **${pa.place.hz}** (P) + **${pa.action.hz}** (V).`,
          `Answer: **${ansHz}。**`,
        ],
      };
    },
  },
  {
    id: "sentence-patterns.bi-comparisons",
    topicId: "sentence-patterns",
    title: "比, 没有 & 一样 Comparison Builder",
    level: 2,
    guideRef: "bi-comparisons",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const item = rng.pick(COMPARISONS);

      if (tier === 1) {
        const useEq = rng.bool(0.3);
        if (useEq) {
          const ansHz = `${item.a.hz}跟${item.b.hz}一样${item.adj.hz}`;
          const altHz = `${item.a.hz}和${item.b.hz}一样${item.adj.hz}`;
          const ansPy = `${capFirst(item.a.py)} gēn ${item.b.py} yíyàng ${item.adj.py}`;
          return {
            prompt: `Build an **equal comparison** (*A is as ${item.adj.en} as B*) using **跟…一样**:\n- A = **${item.a.hz}** (${item.a.en})\n- B = **${item.b.hz}** (${item.b.en})\n- Adjective = **${item.adj.hz}** (${item.adj.en})`,
            answer: {
              type: "text",
              accept: [ansHz, altHz, ansPy],
              display: `${ansHz}。`,
            },
            traps: [
              {
                spec: {
                  type: "text",
                  accept: [`${item.a.hz}比${item.b.hz}一样${item.adj.hz}`],
                },
                feedback:
                  "Never mix **比** with **一样**! Use **跟** (or **和**) with **一样**: **A 跟 B 一样 + Adj**.",
              },
            ],
            hint: "Frame: **A + 跟 + B + 一样 + Adjective**.",
            solution: [
              `Slot A (**${item.a.hz}**) + **跟** + Slot B (**${item.b.hz}**) + **一样** + **${item.adj.hz}**.`,
              `Answer: **${ansHz}。**`,
            ],
          };
        }

        const ansHz = `${item.a.hz}比${item.b.hz}${item.adj.hz}`;
        const ansPy = `${capFirst(item.a.py)} bǐ ${item.b.py} ${item.adj.py}`;
        return {
          prompt: `Build a **比** comparison (*${item.a.en} vs ${item.b.en} — more ${item.adj.en}*):\n- A = **${item.a.hz}**\n- B = **${item.b.hz}**\n- Adjective = **${item.adj.hz}**`,
          answer: {
            type: "text",
            accept: [ansHz, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`${item.a.hz}比${item.b.hz}很${item.adj.hz}`],
              },
              feedback:
                "Golden Trap! Never put **很** before the adjective in a **比** sentence — drop **很**!",
            },
          ],
          hint: "Frame: **A + 比 + B + Adjective** (NO **很**!).",
          solution: [
            `Combine **${item.a.hz} + 比 + ${item.b.hz} + ${item.adj.hz}** with zero **很**.`,
            `Answer: **${ansHz}。** (*${ansPy}.*)`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          // 得多
          const ansHz = `${item.a.hz}比${item.b.hz}${item.adj.hz}得多`;
          const ansPy = `${capFirst(item.a.py)} bǐ ${item.b.py} ${item.adj.py} de duō`;
          return {
            prompt: `Express **MUCH more ${item.adj.en}** using **比** and **得多**:\n- A = **${item.a.hz}** (${item.a.en})\n- B = **${item.b.hz}** (${item.b.en})\n- Adjective = **${item.adj.hz}** (${item.adj.en})`,
            answer: {
              type: "text",
              accept: [ansHz, ansPy],
              display: `${ansHz}。`,
            },
            traps: [
              {
                spec: {
                  type: "text",
                  accept: [
                    `${item.a.hz}比${item.b.hz}很${item.adj.hz}`,
                    `${item.a.hz}比${item.b.hz}非常${item.adj.hz}`,
                  ],
                },
                feedback:
                  "Never use **很** or **非常** with **比**! Put **得多** AFTER the adjective.",
              },
            ],
            hint: "Put **得多** AFTER the adjective: **A + 比 + B + Adj + 得多**.",
            solution: [
              `**${item.a.hz}** + **比** + **${item.b.hz}** + **${item.adj.hz}** + **得多**.`,
              `Answer: **${ansHz}。**`,
            ],
          };
        }
        if (mode === 2) {
          // 一点儿
          const ansHz = `${item.a.hz}比${item.b.hz}${item.adj.hz}一点儿`;
          const ansPy = `${capFirst(item.a.py)} bǐ ${item.b.py} ${item.adj.py} yìdiǎnr`;
          return {
            prompt: `Express **A LITTLE BIT more ${item.adj.en}** using **比** and **一点儿**:\n- A = **${item.a.hz}** (${item.a.en})\n- B = **${item.b.hz}** (${item.b.en})\n- Adjective = **${item.adj.hz}** (${item.adj.en})`,
            answer: {
              type: "text",
              accept: [ansHz, ansPy],
              display: `${ansHz}。`,
            },
            traps: [
              {
                spec: {
                  type: "text",
                  accept: [`${item.a.hz}比${item.b.hz}一点儿${item.adj.hz}`],
                },
                feedback:
                  "Put **一点儿** AFTER the adjective (**" + item.adj.hz + "一点儿**), not before it!",
              },
            ],
            hint: "Frame: **A + 比 + B + Adj + 一点儿**.",
            solution: [
              `Attach **一点儿** right after **${item.adj.hz}**.`,
              `Answer: **${ansHz}。**`,
            ],
          };
        }
        // 没有…那么…
        const ansHz = `${item.b.hz}没有${item.a.hz}那么${item.adj.hz}`;
        const altHz = `${item.b.hz}没有${item.a.hz}${item.adj.hz}`;
        const ansPy = `${capFirst(item.b.py)} méiyǒu ${item.a.py} nàme ${item.adj.py}`;
        return {
          prompt: `Build a **negative comparison** (*${item.b.en} — NOT as ${item.adj.en} as — ${item.a.en}*) using **没有…那么…**:\n- Smaller/less (**${item.b.hz}**)\n- Greater (**${item.a.hz}**)\n- Adjective (**${item.adj.hz}**)`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}。`,
          },
          hint: "Frame: **X + 没有 + Y + 那么 + Adjective**.",
          solution: [
            `**${item.b.hz}** + **没有** + **${item.a.hz}** + **那么${item.adj.hz}**.`,
            `Answer: **${ansHz}。**`,
          ],
        };
      }

      // Tier 3: Flip transformation (A 比 B Adj -> B 没有 A 那么 Adj, or fix broken 比 + 很 sentence)
      if (rng.bool(0.5)) {
        const srcHz = `${item.a.hz}比${item.b.hz}${item.adj.hz}。`;
        const ansHz = `${item.b.hz}没有${item.a.hz}那么${item.adj.hz}`;
        const altHz = `${item.b.hz}没有${item.a.hz}${item.adj.hz}`;
        const ansPy = `${capFirst(item.b.py)} méiyǒu ${item.a.py} nàme ${item.adj.py}`;
        return {
          prompt: `Flip this **比** sentence into an equivalent **没有…那么…** sentence starting with **${item.b.hz}**:\n\n**${srcHz}**`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`${item.a.hz}没有${item.b.hz}那么${item.adj.hz}`],
              },
              feedback:
                "You kept the same order, which reversed the meaning! Swap A and B so **" + item.b.hz + "** comes first.",
            },
          ],
          hint: `Swap the two nouns: **${item.b.hz} + 没有 + ${item.a.hz} + 那么 + ${item.adj.hz}**.`,
          solution: [
            `Since **${item.a.hz}** > **${item.b.hz}**, **${item.b.hz}** is NOT as **${item.adj.hz}** as **${item.a.hz}**.`,
            `Answer: **${ansHz}。**`,
          ],
        };
      }

      const ansHz = `${item.a.hz}比${item.b.hz}更${item.adj.hz}`;
      const ansPy = `${capFirst(item.a.py)} bǐ ${item.b.py} gèng ${item.adj.py}`;
      return {
        prompt: `Both **${item.b.hz}** and **${item.a.hz}** are **${item.adj.hz}** (${item.adj.en}), and **${item.a.hz}** is **EVEN MORE ${item.adj.en}**! Write this using **比…更…**:`,
        answer: {
          type: "text",
          accept: [ansHz, ansPy],
          display: `${ansHz}。`,
        },
        traps: [
          {
            spec: {
              type: "text",
              accept: [`${item.a.hz}比${item.b.hz}很${item.adj.hz}`],
            },
            feedback:
              "Use **更** (*even more*), NEVER **很**, before the adjective in a **比** sentence!",
          },
        ],
        hint: "Frame: **A + 比 + B + 更 + Adjective**.",
        solution: [
          `Relative adverb **更** sits before **${item.adj.hz}**: **${ansHz}。**`,
        ],
      };
    },
  },
  {
    id: "sentence-patterns.cause-contrast",
    topicId: "sentence-patterns",
    title: "Paired Connector Combiner: 因为…所以, 虽然…但是 & 如果…就",
    level: 2,
    guideRef: "cause-contrast",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const subj = rng.pick(SUBJECTS);

      if (tier === 1) {
        const isCause = rng.bool(0.5);
        if (isCause) {
          const cp = rng.pick(CAUSE_PAIRS);
          const ansHz = `因为${cp.causeHz}，所以${subj.hz}${cp.resVerbHz}`;
          const ansPy = `Yīnwèi ${cp.causePy}, suǒyǐ ${subj.py} ${cp.resVerbPy}`;
          return {
            prompt: `Combine using **因为…，所以…** (*because … therefore …*):\n- Cause: **${cp.causeHz}** (${cp.causeEn})\n- Result: **${subj.hz}${cp.resVerbHz}** (${subj.en} — ${cp.resVerbEn})`,
            answer: {
              type: "text",
              accept: [ansHz, ansPy],
              display: `${ansHz}。`,
            },
            traps: [
              {
                spec: {
                  type: "text",
                  accept: [`因为${cp.causeHz}，${subj.hz}${cp.resVerbHz}`],
                },
                feedback:
                  "Keep BOTH bookends! Don't drop **所以** in the second clause.",
              },
            ],
            hint: "Write **因为 + Cause，所以 + Result**.",
            solution: [
              `Clause 1: **因为${cp.causeHz}，**`,
              `Clause 2: **所以${subj.hz}${cp.resVerbHz}。**`,
            ],
          };
        }
        const ct = rng.pick(CONTRAST_PAIRS);
        const ansHz = `虽然${ct.concHz}，但是${ct.contHz}`;
        const altHz = `虽然${ct.concHz}，可是${ct.contHz}`;
        const ansPy = `Suīrán ${ct.concPy}, dànshì ${ct.contPy}`;
        return {
          prompt: `Combine using **虽然…，但是…** (*although … yet …*):\n- Clause 1: **${ct.concHz}** (${ct.concEn})\n- Clause 2: **${ct.contHz}** (${ct.contEn})`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`虽然${ct.concHz}，${ct.contHz}`],
              },
              feedback:
                "Don't drop **但是**! Mandarin requires **但是** (or **可是**) after **虽然**.",
            },
          ],
          hint: "Write **虽然 + Clause 1，但是 + Clause 2**.",
          solution: [
            `Open with **虽然${ct.concHz}，** and balance with **但是${ct.contHz}。**`,
          ],
        };
      }

      if (tier === 2) {
        const cd = rng.pick(COND_PAIRS);
        const ansHz = `如果${cd.condHz}，${subj.hz}就${cd.actHz}`;
        const altHz = `要是${cd.condHz}，${subj.hz}就${cd.actHz}`;
        const ansPy = `Rúguǒ ${cd.condPy}, ${subj.py} jiù ${cd.actPy}`;
        return {
          prompt: `Combine using **如果…，…就…** (*if …, then …* — watch where **就** goes!):\n- Condition: **${cd.condHz}** (${cd.condEn})\n- Subject: **${subj.hz}** (${subj.en})\n- Consequence action: **${cd.actHz}** (${cd.actEn})`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`如果${cd.condHz}，就${subj.hz}${cd.actHz}`],
              },
              feedback:
                "Adverb alert! **就** must stand AFTER the subject **" + subj.hz + "**, never before it (**" + subj.hz + "就…**).",
            },
          ],
          hint: `Put **就** AFTER **${subj.hz}**: **如果…，${subj.hz}就 + Verb**.`,
          solution: [
            `Condition: **如果${cd.condHz}，**`,
            `Consequence (Subject + 就 + Verb): **${subj.hz}就${cd.actHz}。**`,
          ],
        };
      }

      // Tier 3: Mixed error correction or connector selection across all 3 frames
      const kind = rng.int(1, 3);
      if (kind === 1) {
        const cd = rng.pick(COND_PAIRS);
        const broken = `如果${cd.condHz}，就${subj.hz}${cd.actHz}。`;
        const fixed = `如果${cd.condHz}，${subj.hz}就${cd.actHz}`;
        const fixedPy = `Rúguǒ ${cd.condPy}, ${subj.py} jiù ${cd.actPy}`;
        return {
          prompt: `Fix the word-order error in this conditional sentence and type the complete corrected Mandarin sentence:\n\n**✗ ${broken}**`,
          answer: {
            type: "text",
            accept: [fixed, fixedPy],
            display: `${fixed}。`,
          },
          hint: `Move the adverb **就** so it sits AFTER the subject **${subj.hz}**!`,
          solution: [
            `**就** is an adverb and cannot precede the subject **${subj.hz}**.`,
            `Corrected sentence: **${fixed}。**`,
          ],
        };
      }
      if (kind === 2) {
        const ct = rng.pick(CONTRAST_PAIRS);
        const ansHz = `虽然${ct.concHz}，但是${subj.hz}觉得${ct.contHz}`;
        const altHz = `虽然${ct.concHz}，可是${subj.hz}觉得${ct.contHz}`;
        const ansPy = `Suīrán ${ct.concPy}, dànshì ${subj.py} juéde ${ct.contPy}`;
        return {
          prompt: `Build a concession sentence with **虽然…，但是…**:\n- Fact: **${ct.concHz}** (${ct.concEn})\n- Opinion: **${subj.hz}觉得${ct.contHz}** (${subj.en} thinks: ${ct.contEn})`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}。`,
          },
          hint: "Pair **虽然** at the start with **但是** before the opinion clause!",
          solution: [
            `**虽然${ct.concHz}，但是${subj.hz}觉得${ct.contHz}。**`,
          ],
        };
      }
      const cp = rng.pick(CAUSE_PAIRS);
      const ansHz = `因为${cp.causeHz}，所以${subj.hz}今天${cp.resVerbHz}`;
      const altHz = `因为${cp.causeHz}，所以今天${subj.hz}${cp.resVerbHz}`;
      const ansPy = `Yīnwèi ${cp.causePy}, suǒyǐ ${subj.py} jīntiān ${cp.resVerbPy}`;
      return {
        prompt: `Build a cause-and-result sentence with **因为…，所以…** + **今天**:\n- Cause: **${cp.causeHz}**\n- Result: **${subj.hz}** + **今天** + **${cp.resVerbHz}**`,
        answer: {
          type: "text",
          accept: [ansHz, altHz, ansPy],
          display: `${ansHz}。`,
        },
        hint: "Keep **因为…，所以…** and place **今天** before the verb in the result clause!",
        solution: [
          `**因为${cp.causeHz}，所以${subj.hz}今天${cp.resVerbHz}。**`,
        ],
      };
    },
  },
  {
    id: "sentence-patterns.addition-simultaneous",
    topicId: "sentence-patterns",
    title: "Sentence Upgraders: 不但…而且, 一边…一边 & 先…再",
    level: 3,
    guideRef: "addition-simultaneous",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const subj = rng.pick(SUBJECTS);

      if (tier === 1) {
        const sim = rng.pick(SIMULTANEOUS_PAIRS);
        const ansHz = `${subj.hz}一边${sim.v1Hz}，一边${sim.v2Hz}`;
        const ansPy = `${subj.py} yìbiān ${sim.v1Py}, yìbiān ${sim.v2Py}`;
        return {
          prompt: `Express two simultaneous actions using **一边…，一边…** (*${subj.en} — ${sim.en}*):\n- Subject: **${subj.hz}**\n- Action 1: **${sim.v1Hz}**\n- Action 2: **${sim.v2Hz}**`,
          answer: {
            type: "text",
            accept: [ansHz, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`一边${subj.hz}${sim.v1Hz}，一边${sim.v2Hz}`],
              },
              feedback:
                "Put the subject **" + subj.hz + "** BEFORE the first **一边**!",
            },
          ],
          hint: `Frame: **${subj.hz} + 一边 + ${sim.v1Hz}，一边 + ${sim.v2Hz}**.`,
          solution: [
            `Place **${subj.hz}** first, then **一边${sim.v1Hz}，一边${sim.v2Hz}。**`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const add = rng.pick(ADDITION_ITEMS);
          const ansHz = `${add.subjHz}不但${add.q1Hz}，而且${add.q2Hz}`;
          const altHz = `${add.subjHz}不但很${add.q1Hz}，而且${add.q2Hz}`;
          const ansPy = `${add.subjPy} búdàn ${add.q1Py}, érqiě ${add.q2Py}`;
          return {
            prompt: `Upgrade using **不但…，而且…** (*${add.subjEn}: ${add.en}*):\n- Shared subject: **${add.subjHz}**\n- Quality 1: **${add.q1Hz}**\n- Quality 2: **${add.q2Hz}**`,
            answer: {
              type: "text",
              accept: [ansHz, altHz, ansPy],
              display: `${ansHz}。`,
            },
            traps: [
              {
                spec: {
                  type: "text",
                  accept: [`不但${add.subjHz}${add.q1Hz}，而且${add.q2Hz}`],
                },
                feedback:
                  "Because both clauses share ONE subject (**" + add.subjHz + "**), put the subject BEFORE **不但**!",
              },
            ],
            hint: "Same subject → **Subject + 不但 + Q1，而且 + Q2**.",
            solution: [
              `Shared subject leads: **${ansHz}。**`,
            ],
          };
        }
        const seq = rng.pick(SEQUENCE_PAIRS);
        const ansHz = `${subj.hz}先${seq.v1Hz}，再${seq.v2Hz}`;
        const altHz = `${subj.hz}先${seq.v1Hz}，然后${seq.v2Hz}`;
        const ansPy = `${subj.py} xiān ${seq.v1Py}, zài ${seq.v2Py}`;
        return {
          prompt: `Express step-by-step order using **先…，再…** (*${subj.en} ${seq.en}*):\n- Subject: **${subj.hz}**\n- Step 1: **${seq.v1Hz}**\n- Step 2: **${seq.v2Hz}**`,
          answer: {
            type: "text",
            accept: [ansHz, altHz, ansPy],
            display: `${ansHz}。`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`先${subj.hz}${seq.v1Hz}，再${seq.v2Hz}`],
              },
              feedback:
                "**先** is an adverb — put **" + subj.hz + "** BEFORE **先**!",
            },
          ],
          hint: `Frame: **${subj.hz} + 先 + ${seq.v1Hz}，再 + ${seq.v2Hz}**.`,
          solution: [
            `Put **${subj.hz}** before **先**, and **再** before the second verb: **${ansHz}。**`,
          ],
        };
      }

      // Tier 3: Two-subject 不但…而且… vs replacing illegal clause-level 和
      const s1 = rng.pick(SUBJECTS);
      let s2 = rng.pick(SUBJECTS);
      if (s2.hz === s1.hz) {
        s2 = s1.hz === "我" ? SUBJECTS[3] : SUBJECTS[0];
      }
      const hobbies = [
        { hz: "会说中文", py: "huì shuō Zhōngwén", en: "can speak Chinese" },
        { hz: "喜欢吃鸡饭", py: "xǐhuan chī jīfàn", en: "likes eating chicken rice" },
        { hz: "喜欢打羽毛球", py: "xǐhuan dǎ yǔmáoqiú", en: "likes playing badminton" },
        { hz: "常常去图书馆", py: "chángcháng qù túshūguǎn", en: "often goes to the library" },
      ] as const;
      const hob = rng.pick(hobbies);
      const ansHz = `不但${s1.hz}${hob.hz}，而且${s2.hz}也${hob.hz}`;
      const ansPy = `Búdàn ${s1.py} ${hob.py}, érqiě ${s2.py} yě ${hob.py}`;
      return {
        prompt: `Combine these TWO different subjects using **不但…，而且…也…**:\n1. **${s1.hz}${hob.hz}。** (${s1.en} — ${hob.en})\n2. **${s2.hz}也${hob.hz}。** (${s2.en} also — ${hob.en})`,
        answer: {
          type: "text",
          accept: [ansHz, ansPy],
          display: `${ansHz}。`,
        },
        traps: [
          {
            spec: {
              type: "text",
              accept: [`${s1.hz}不但${hob.hz}，而且${s2.hz}也${hob.hz}`],
            },
            feedback:
              "Two DIFFERENT subjects (**" + s1.hz + "** vs **" + s2.hz + "**)! Move **不但** in front of **" + s1.hz + "**.",
          },
        ],
        hint: `Two subjects → **不但 + ${s1.hz}…，而且 + ${s2.hz} + 也…**!`,
        solution: [
          `Because Subject 1 (**${s1.hz}**) ≠ Subject 2 (**${s2.hz}**), **不但** stands at the very front.`,
          `Answer: **${ansHz}。**`,
        ],
      };
    },
  },
];
