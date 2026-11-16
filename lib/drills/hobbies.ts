import type { Drill } from "./types.ts";

const PEOPLE = [
  { zh: "我", py: "Wǒ", en: "I", obj: false },
  { zh: "哥哥", py: "Gēge", en: "My older brother", obj: true },
  { zh: "姐姐", py: "Jiějie", en: "My older sister", obj: true },
  { zh: "弟弟", py: "Dìdi", en: "My younger brother", obj: true },
  { zh: "妹妹", py: "Mèimei", en: "My younger sister", obj: true },
  { zh: "爸爸", py: "Bàba", en: "Dad", obj: true },
  { zh: "妈妈", py: "Māma", en: "Mum", obj: true },
  { zh: "小明", py: "Xiǎomíng", en: "Xiaoming", obj: true },
  { zh: "美美", py: "Měiměi", en: "Meimei", obj: true },
  { zh: "爷爷", py: "Yéye", en: "Grandpa", obj: true },
] as const;

const SPORT_COLLOCATIONS = [
  { verb: "打", verbPy: "dǎ", noun: "篮球", nounPy: "lánqiú", en: "play basketball", wrongVerb: "玩" },
  { verb: "打", verbPy: "dǎ", noun: "羽毛球", nounPy: "yǔmáoqiú", en: "play badminton", wrongVerb: "玩" },
  { verb: "打", verbPy: "dǎ", noun: "网球", nounPy: "wǎngqiú", en: "play tennis", wrongVerb: "踢" },
  { verb: "打", verbPy: "dǎ", noun: "乒乓球", nounPy: "pīngpāngqiú", en: "play table tennis", wrongVerb: "玩" },
  { verb: "打", verbPy: "dǎ", noun: "排球", nounPy: "páiqiú", en: "play volleyball", wrongVerb: "踢" },
  { verb: "踢", verbPy: "tī", noun: "足球", nounPy: "zúqiú", en: "play football", wrongVerb: "打" },
  { verb: "骑", verbPy: "qí", noun: "自行车", nounPy: "zìxíngchē", en: "ride a bicycle", wrongVerb: "开" },
  { verb: "骑", verbPy: "qí", noun: "马", nounPy: "mǎ", en: "ride a horse", wrongVerb: "坐" },
  { verb: "打", verbPy: "dǎ", noun: "太极拳", nounPy: "tàijíquán", en: "practise Tai Chi", wrongVerb: "玩" },
] as const;

const STPV_PLACES = [
  { zh: "体育馆", py: "tǐyùguǎn", en: "in the sports hall" },
  { zh: "运动场", py: "yùndòngchǎng", en: "on the sports field" },
  { zh: "学校", py: "xuéxiào", en: "at school" },
  { zh: "公园", py: "gōngyuán", en: "in the park" },
  { zh: "东海岸公园", py: "Dōnghǎi'àn Gōngyuán", en: "at East Coast Park" },
] as const;

const STPV_TIMES = [
  { zh: "星期六上午", py: "xīngqīliù shàngwǔ", en: "on Saturday morning" },
  { zh: "星期天下午", py: "xīngqītiān xiàwǔ", en: "on Sunday afternoon" },
  { zh: "放学以后", py: "fàngxué yǐhòu", en: "after school" },
  { zh: "每个周末", py: "měi gè zhōumò", en: "every weekend" },
  { zh: "每天早上", py: "měitiān zǎoshang", en: "every morning" },
] as const;

const MUSIC_CREATIVE_COLLOCATIONS = [
  { verb: "弹", verbPy: "tán", noun: "钢琴", nounPy: "gāngqín", en: "play the piano", wrongVerb: "玩", clue: "fingers press keys" },
  { verb: "弹", verbPy: "tán", noun: "吉他", nounPy: "jítā", en: "play the guitar", wrongVerb: "拉", clue: "fingers pluck strings" },
  { verb: "拉", verbPy: "lā", noun: "小提琴", nounPy: "xiǎotíqín", en: "play the violin", wrongVerb: "弹", clue: "hand pulls a bow" },
  { verb: "拉", verbPy: "lā", noun: "二胡", nounPy: "èrhú", en: "play the erhu", wrongVerb: "弹", clue: "hand pulls a bow across two strings" },
  { verb: "吹", verbPy: "chuī", noun: "笛子", nounPy: "dízi", en: "play the bamboo flute", wrongVerb: "弹", clue: "mouth blows air" },
  { verb: "下", verbPy: "xià", noun: "棋", nounPy: "qí", en: "play chess", wrongVerb: "玩", clue: "pieces placed down on a board" },
  { verb: "玩", verbPy: "wán", noun: "电脑游戏", nounPy: "diànnǎo yóuxì", en: "play computer games", wrongVerb: "打", clue: "video games use 玩!" },
] as const;

const SIMULTANEOUS_A = [
  { zh: "听音乐", py: "tīng yīnyuè", en: "listening to music" },
  { zh: "喝茶", py: "hē chá", en: "drinking tea" },
  { zh: "唱歌", py: "chànggē", en: "singing" },
  { zh: "坐地铁", py: "zuò dìtiě", en: "riding the MRT" },
] as const;

const SIMULTANEOUS_B = [
  { zh: "画画", py: "huàhuà", en: "drawing" },
  { zh: "看书", py: "kànshū", en: "reading a book" },
  { zh: "做饭", py: "zuòfàn", en: "cooking" },
  { zh: "散步", py: "sànbù", en: "taking a walk" },
  { zh: "做作业", py: "zuò zuòyè", en: "doing homework" },
] as const;

const INTEREST_TOPICS = [
  { zh: "中国书法", py: "Zhōngguó shūfǎ", en: "Chinese calligraphy" },
  { zh: "古典音乐", py: "gǔdiǎn yīnyuè", en: "classical music" },
  { zh: "打羽毛球", py: "dǎ yǔmáoqiú", en: "playing badminton" },
  { zh: "画画", py: "huàhuà", en: "drawing" },
  { zh: "拍照", py: "pāizhào", en: "taking photos" },
  { zh: "踢足球", py: "tī zúqiú", en: "playing football" },
  { zh: "下棋", py: "xiàqí", en: "playing chess" },
  { zh: "弹吉他", py: "tán jítā", en: "playing the guitar" },
] as const;

const REASONS = [
  { zh: "很有意思", py: "hěn yǒu yìsi", en: "it is very interesting" },
  { zh: "对身体好", py: "duì shēntǐ hǎo", en: "it is good for one's health" },
  { zh: "可以放松心情", py: "kěyǐ fàngsōng xīnqíng", en: "it helps relax one's mood" },
  { zh: "可以交新朋友", py: "kěyǐ jiāo xīn péngyou", en: "one can make new friends" },
] as const;

const SKILLS = [
  { zh: "游泳", py: "yóuyǒng", en: "swim" },
  { zh: "滑冰", py: "huábīng", en: "ice-skate" },
  { zh: "滑雪", py: "huáxuě", en: "ski" },
  { zh: "弹钢琴", py: "tán gāngqín", en: "play the piano" },
  { zh: "弹吉他", py: "tán jítā", en: "play the guitar" },
  { zh: "拉小提琴", py: "lā xiǎotíqín", en: "play the violin" },
  { zh: "骑自行车", py: "qí zìxíngchē", en: "ride a bicycle" },
  { zh: "吹笛子", py: "chuī dízi", en: "play the flute" },
] as const;

const DEGREE_SKILLS = [
  { verb: "打", verbPy: "dǎ", obj: "篮球", objPy: "lánqiú", adj: "好", adjPy: "hǎo", enVerb1: "play basketball", enVerb3: "plays basketball", enAdv: "very well" },
  { verb: "打", verbPy: "dǎ", obj: "羽毛球", objPy: "yǔmáoqiú", adj: "好", adjPy: "hǎo", enVerb1: "play badminton", enVerb3: "plays badminton", enAdv: "very well" },
  { verb: "打", verbPy: "dǎ", obj: "网球", objPy: "wǎngqiú", adj: "好", adjPy: "hǎo", enVerb1: "play tennis", enVerb3: "plays tennis", enAdv: "very well" },
  { verb: "踢", verbPy: "tī", obj: "足球", objPy: "zúqiú", adj: "好", adjPy: "hǎo", enVerb1: "play football", enVerb3: "plays football", enAdv: "very well" },
  { verb: "弹", verbPy: "tán", obj: "钢琴", objPy: "gāngqín", adj: "好", adjPy: "hǎo", enVerb1: "play the piano", enVerb3: "plays the piano", enAdv: "very well" },
  { verb: "拉", verbPy: "lā", obj: "小提琴", objPy: "xiǎotíqín", adj: "好听", adjPy: "hǎotīng", enVerb1: "play the violin", enVerb3: "plays the violin", enAdv: "very melodiously" },
  { verb: "跑", verbPy: "pǎo", obj: "步", objPy: "bù", adj: "快", adjPy: "kuài", enVerb1: "run", enVerb3: "runs", enAdv: "very fast" },
] as const;

export const drills: Drill[] = [
  {
    id: "hobbies.sports-verb-matcher",
    topicId: "hobbies",
    title: "Sport Action Verbs & STPV Builder (打 / 踢 / 骑 & 词序)",
    level: 1,
    guideRef: "sports-verbs",
    generate(rng, tier) {
      const p = rng.pick(PEOPLE);
      if (tier === 1) {
        const s = rng.pick(SPORT_COLLOCATIONS);
        const prompt = `Choose the exact Mandarin sport phrase for **${p.en}** (${p.zh}):\n\nWrite **"${s.en}"** in Mandarin *(never use **玩** for sports!)*.`;
        const ansZh = `${s.verb}${s.noun}`;
        const ansPy = `${s.verbPy} ${s.nounPy}`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [ansZh, ansPy],
            display: `${ansZh} (${ansPy})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${s.wrongVerb}${s.noun}`, `玩${s.noun}`] },
              feedback: `Watch the physical motion! ${s.noun} takes ${s.verb} (${s.verbPy}), NEVER ${s.wrongVerb} or 玩!`,
            },
          ],
          hint: `Hands/racket = 打 (dǎ), feet = 踢 (tī), straddling wheels/horse = 骑 (qí). Combine the right verb with ${s.noun}!`,
          solution: [
            `Action verb: **${s.verb}** (*${s.verbPy}*).`,
            `Sport noun: **${s.noun}** (*${s.nounPy}*).`,
            `Collocation: **${ansZh}** (*${ansPy}*).`,
          ],
        };
      }

      if (tier === 2) {
        const t = rng.pick(STPV_TIMES);
        const pl = rng.pick(STPV_PLACES);
        const s = rng.pick(SPORT_COLLOCATIONS.slice(0, 7));
        const enVerb = p.obj
          ? s.en.replace(/^play /, "plays ").replace(/^ride /, "rides ")
          : s.en;
        const prompt = `Build a full Mandarin sentence obeying **Golden STPV (Subject + Time + Place + Verb)**:\n\n**"${p.en} ${enVerb} ${pl.en} ${t.en}."**\n*(Use **${p.zh}**, **${t.zh}**, **在${pl.zh}**, and **${s.verb}${s.noun}**.)*`;
        const ans1 = `${p.zh}${t.zh}在${pl.zh}${s.verb}${s.noun}`;
        const ans2 = `${t.zh}${p.zh}在${pl.zh}${s.verb}${s.noun}`;
        const ansPy = `${p.py} ${t.py} zài ${pl.py} ${s.verbPy} ${s.nounPy}`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [ans1, ans2, ansPy],
            display: `${ans1}。 (${ansPy}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${p.zh}${s.verb}${s.noun}在${pl.zh}${t.zh}`, `${p.zh}在${pl.zh}${s.verb}${s.noun}${t.zh}`] },
              feedback: "Golden STPV rule: both Time and 在 + Place MUST stand BEFORE the sport verb, never at the end!",
            },
          ],
          hint: `Order: ${p.zh} (Subject) + ${t.zh} (Time) + 在${pl.zh} (Place) + ${s.verb}${s.noun} (Verb).`,
          solution: [
            `Subject + Time: **${p.zh}${t.zh}**`,
            `Place before verb: **在${pl.zh}**`,
            `Action verb + sport: **${s.verb}${s.noun}** → **${ans1}。**`,
          ],
        };
      }

      const sep = rng.pick([
        { v: "游", o: "泳", pyV: "yóu", pyO: "yǒng", enPast: "swam" },
        { v: "跑", o: "步", pyV: "pǎo", pyO: "bù", enPast: "jogged" },
      ] as const);
      const dur = rng.pick([
        { zh: "半个小时", py: "bàn gè xiǎoshí", en: "for half an hour" },
        { zh: "一个小时", py: "yí gè xiǎoshí", en: "for one hour" },
        { zh: "两个小时", py: "liǎng gè xiǎoshí", en: "for two hours" },
        { zh: "四十五分钟", py: "sìshíwǔ fēnzhōng", en: "for 45 minutes" },
      ] as const);
      const pastTime = rng.pick([
        { zh: "昨天早上", py: "zuótiān zǎoshang", en: "yesterday morning" },
        { zh: "昨天下午", py: "zuótiān xiàwǔ", en: "yesterday afternoon" },
        { zh: "今天早上", py: "jīntiān zǎoshang", en: "this morning" },
      ] as const);
      const prompt = `Translate using the **separable verb (${sep.v}${sep.o})** duration rule:\n\n**"${p.en} ${sep.enPast} ${dur.en} ${pastTime.en}."**\n*(Start with **${p.zh}${pastTime.zh}…** and split **${sep.v}** and **${sep.o}** around **了 + ${dur.zh}**!)*`;
      const ans1 = `${p.zh}${pastTime.zh}${sep.v}了${dur.zh}${sep.o}`;
      const ans2 = `${pastTime.zh}${p.zh}${sep.v}了${dur.zh}${sep.o}`;
      const ansPy = `${p.py} ${pastTime.py} ${sep.pyV} le ${dur.py} ${sep.pyO}`;
      return {
        prompt,
        answer: {
          type: "text",
          accept: [ans1, ans2, ansPy],
          display: `${ans1}。 (${ansPy}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${p.zh}${pastTime.zh}${sep.v}${sep.o}了${dur.zh}`] },
            feedback: `${sep.v}${sep.o} is a separable verb-object compound! Split it into ${sep.v}了${dur.zh}${sep.o}.`,
          },
        ],
        hint: `Slot 了 + ${dur.zh} right between ${sep.v} and ${sep.o}: ${sep.v}了${dur.zh}${sep.o}!`,
        solution: [
          `Subject + Time: **${p.zh}${pastTime.zh}**`,
          `Split separable verb around 了 + duration: **${sep.v}了${dur.zh}${sep.o}**`,
          `Full sentence: **${ans1}。**`,
        ],
      };
    },
  },

  {
    id: "hobbies.music-creative-verbs",
    topicId: "hobbies",
    title: "Instrument & Creative Hobby Verbs (弹 / 拉 / 吹 / 下 / 玩)",
    level: 1,
    guideRef: "creative-music-hobbies",
    generate(rng, tier) {
      const p = rng.pick(PEOPLE);
      if (tier === 1) {
        const m = rng.pick(MUSIC_CREATIVE_COLLOCATIONS);
        const prompt = `${p.en} (${p.zh}) loves this hobby. Write **"${m.en}"** in Mandarin *(match the exact physical verb to ${m.noun}!)*:`;
        const ansZh = `${m.verb}${m.noun}`;
        const ansPy = `${m.verbPy} ${m.nounPy}`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [ansZh, ansPy],
            display: `${ansZh} (${ansPy})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${m.wrongVerb}${m.noun}`] },
              feedback: `Not ${m.wrongVerb}! Remember: ${m.clue} → ${m.verb}${m.noun} (${ansPy}).`,
            },
          ],
          hint: `Clue: ${m.clue} → choose 弹 (tán), 拉 (lā), 吹 (chuī), 下 (xià), or 玩 (wán).`,
          solution: [
            `Physical action (${m.clue}): **${m.verb}** (*${m.verbPy}*).`,
            `Object: **${m.noun}** (*${m.nounPy}*) → **${ansZh}**.`,
          ],
        };
      }

      if (tier === 2) {
        const a = rng.pick(SIMULTANEOUS_A);
        const b = rng.pick(SIMULTANEOUS_B);
        const likeVerb = p.obj ? "likes" : "like";
        const prompt = `Translate into Mandarin using **一边…一边…** (doing two actions at the same time):\n\n**"${p.en} ${likeVerb} ${b.en} while ${a.en}."**\n*(Start with **${p.zh}喜欢一边${a.zh}，一边…**)*`;
        const ans1 = `${p.zh}喜欢一边${a.zh}，一边${b.zh}`;
        const ans2 = `${p.zh}喜欢一边${b.zh}，一边${a.zh}`;
        const ansPy = `${p.py} xǐhuan yìbiān ${a.py}, yìbiān ${b.py}`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [ans1, ans2, ansPy],
            display: `${ans1}。 (${ansPy}.)`,
          },
          hint: `Frame: ${p.zh}喜欢 + 一边 + ${a.zh} + ，一边 + ${b.zh}.`,
          solution: [
            `Subject + 喜欢: **${p.zh}喜欢**`,
            `Simultaneous pair: **一边${a.zh}，一边${b.zh}。**`,
          ],
        };
      }

      const student = rng.pick(PEOPLE.slice(1, 9));
      const inst = rng.pick(MUSIC_CREATIVE_COLLOCATIONS.slice(0, 5));
      const daysPair = rng.pick([
        { zh: "星期一和星期四", count: 2 },
        { zh: "星期二和星期五", count: 2 },
        { zh: "星期一、星期三和星期五", count: 3 },
      ] as const);
      const hrs = rng.pick([
        { zh: "一个小时", val: 1 },
        { zh: "两个小时", val: 2 },
      ] as const);
      const weeks = rng.int(2, 4);
      const weeksZh: Record<number, string> = { 2: "两", 3: "三", 4: "四" };
      const perWeek = daysPair.count * hrs.val;
      const total = perWeek * weeks;
      const prompt = `Read this CCA practice schedule carefully:\n\n**${student.zh}每个${daysPair.zh}放学以后都练习${inst.verb}${inst.noun}，每次练习${hrs.zh}。**\n\nHow many hours in total does ${student.en} practise **${inst.verb}${inst.noun}** over **${weeksZh[weeks]}个星期** (${weeks} weeks)? *(Type a number.)*`;
      return {
        prompt,
        answer: {
          type: "number",
          value: total,
          display: `${total} (${total}个小时)`,
        },
        traps: [
          {
            spec: { type: "number", value: perWeek },
            feedback: `${perWeek} hours is for ONE week (${daysPair.count} sessions × ${hrs.val}h). Multiply by ${weeksZh[weeks]}个星期 (${weeks} weeks)!`,
          },
        ],
        hint: `${daysPair.zh} = ${daysPair.count} sessions per week × ${hrs.val} hour(s) each = ${perWeek} hours/week. Now multiply by ${weeks} weeks!`,
        solution: [
          `Sessions per week (**${daysPair.zh}**): ${daysPair.count}.`,
          `Hours per week: ${daysPair.count} × ${hrs.val} = ${perWeek} hours.`,
          `Over **${weeksZh[weeks]}个星期** (${weeks} weeks): ${perWeek} × ${weeks} = **${total} hours**.`,
        ],
      };
    },
  },

  {
    id: "hobbies.preference-reasons",
    topicId: "hobbies",
    title: "Preferences & 对…感兴趣 Frame Generator (喜好与感兴趣)",
    level: 2,
    guideRef: "likes-degrees",
    generate(rng, tier) {
      const p = rng.pick(PEOPLE);
      if (tier === 1) {
        const deg = rng.pick([
          { zh: "最喜欢", py: "zuì xǐhuan", en1: "like … best", en3: "likes … best", trap: "很最喜欢" },
          { zh: "非常喜欢", py: "fēicháng xǐhuan", en1: "really like", en3: "really likes", trap: "" },
          { zh: "不太喜欢", py: "bú tài xǐhuan", en1: "don't really like", en3: "doesn't really like", trap: "" },
          { zh: "讨厌", py: "tǎoyàn", en1: "dislike", en3: "dislikes", trap: "" },
        ] as const);
        const h = rng.pick(INTEREST_TOPICS);
        const enPhrase = deg.zh === "最喜欢"
          ? `${p.en} ${p.obj ? "likes" : "like"} ${h.en} best.`
          : `${p.en} ${p.obj ? deg.en3 : deg.en1} ${h.en}.`;
        const prompt = `Translate into Mandarin using **${deg.zh}**:\n\n**"${enPhrase}"** *(Subject: **${p.zh}**)*`;
        const ansZh = `${p.zh}${deg.zh}${h.zh}`;
        const ansPy = `${p.py} ${deg.py} ${h.py}`;
        const traps = deg.trap
          ? [
              {
                spec: { type: "text" as const, accept: [`${p.zh}${deg.trap}${h.zh}`] },
                feedback: "Never put 很 in front of 最! Just write 最喜欢.",
              },
            ]
          : undefined;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [ansZh, ansPy],
            display: `${ansZh}。 (${ansPy}.)`,
          },
          traps,
          hint: `Order: ${p.zh} + ${deg.zh} + ${h.zh} (${h.py}).`,
          solution: [
            `Subject + preference verb: **${p.zh}${deg.zh}**`,
            `Hobby phrase: **${h.zh}** → **${ansZh}。**`,
          ],
        };
      }

      if (tier === 2) {
        const h = rng.pick(INTEREST_TOPICS);
        const deg = rng.pick([
          { zh: "很", alt: "非常", py: "hěn", en1: "am very interested in", en3: "is very interested in" },
          { zh: "不", alt: "不", py: "bù", en1: "am not interested in", en3: "is not interested in" },
        ] as const);
        const enPred = p.obj ? deg.en3 : deg.en1;
        const prompt = `Translate into Mandarin using the **对…感兴趣** frame:\n\n**"${p.en} ${enPred} ${h.en}."** *(Subject: **${p.zh}**)*`;
        const ans1 = `${p.zh}对${h.zh}${deg.zh}感兴趣`;
        const ans2 = `${p.zh}对${h.zh}${deg.alt}感兴趣`;
        const ansPy = `${p.py} duì ${h.py} ${deg.py} gǎn xìngqù`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: Array.from(new Set([ans1, ans2, ansPy])),
            display: `${ans1}。 (${ansPy}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${p.zh}${deg.zh}感兴趣对${h.zh}`] },
              feedback: "Put 对 + Topic BEFORE (很/不)感兴趣 — never at the end like English!",
            },
          ],
          hint: `Frame: ${p.zh} + 对 + ${h.zh} + ${deg.zh}感兴趣.`,
          solution: [
            `Subject + prepositional topic: **${p.zh}对${h.zh}**`,
            `Degree + predicate: **${deg.zh}感兴趣** → **${ans1}。**`,
          ],
        };
      }

      const h = rng.pick(INTEREST_TOPICS.slice(2));
      const r = rng.pick(REASONS);
      const prompt = `Combine preference + justification in Mandarin using **最喜欢** and **因为**:\n\n**"${p.en} ${p.obj ? "likes" : "like"} ${h.en} best, because ${r.en}."**\n*(Frame: **${p.zh}最喜欢${h.zh}，因为${r.zh}。**)*`;
      const ansZh = `${p.zh}最喜欢${h.zh}，因为${r.zh}`;
      const ansPy = `${p.py} zuì xǐhuan ${h.py}, yīnwèi ${r.py}`;
      return {
        prompt,
        answer: {
          type: "text",
          accept: [ansZh, ansPy],
          display: `${ansZh}。 (${ansPy}.)`,
        },
        hint: `First clause: ${p.zh}最喜欢${h.zh}， Second clause: 因为${r.zh}.`,
        solution: [
          `Superlative preference: **${p.zh}最喜欢${h.zh}，**`,
          `Reason with 因为: **因为${r.zh}。**`,
        ],
      };
    },
  },

  {
    id: "hobbies.ability-modals-de",
    topicId: "hobbies",
    title: "Ability Modals (会 / 能 / 可以) & 得 Degree Complement",
    level: 3,
    guideRef: "ability-hui-neng",
    generate(rng, tier) {
      const p = rng.pick(PEOPLE);
      if (tier === 1) {
        const sk = rng.pick(SKILLS);
        const pos = rng.bool(0.6);
        const modZh = pos ? "会" : "不会";
        const modPy = pos ? "huì" : "bú huì";
        const enVerb = pos
          ? p.obj ? "knows how to" : "know how to"
          : p.obj ? "doesn't know how to" : "don't know how to";
        const prompt = `Translate into Mandarin using the **learned-skill** modal (**会 / 不会**):\n\n**"${p.en} ${enVerb} ${sk.en}."** *(Subject: **${p.zh}**)*`;
        const ansZh = `${p.zh}${modZh}${sk.zh}`;
        const ansPy = `${p.py} ${modPy} ${sk.py}`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [ansZh, ansPy],
            display: `${ansZh}。 (${ansPy}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${p.zh}${pos ? "可以" : "不可以"}${sk.zh}`] },
              feedback: "可以 is for rules/permission! For a skill learned through practice, always use 会 / 不会.",
            },
          ],
          hint: `Skills acquired by learning take 会 / 不会: ${p.zh}${modZh}${sk.zh}.`,
          solution: [
            `Subject + learned-skill modal: **${p.zh}${modZh}**`,
            `Skill phrase: **${sk.zh}** → **${ansZh}。**`,
          ],
        };
      }

      if (tier === 2) {
        const kind = rng.int(1, 3);
        if (kind === 1) {
          const reason = rng.pick([
            { zh: "今天发烧了", en: "has a fever today" },
            { zh: "今天脚疼", en: "has a sore foot today" },
            { zh: "今天作业太多", en: "has too much homework today" },
            { zh: "外面下大雨", en: "it is raining heavily outside" },
          ] as const);
          const sport = rng.pick(["去游泳", "去踢足球", "去打篮球", "去打网球", "去跑步"] as const);
          const subj = rng.pick(PEOPLE.slice(1, 9));
          const prompt = `Choose **不会**, **不能**, or **不可以** to fill the blank *(type ONLY the missing 2-character word)*:\n\n**因为${reason.zh}，所以${subj.zh} ___ ${sport}。** *(Circumstance blocks going today!)*`;
          return {
            prompt,
            answer: {
              type: "text",
              accept: ["不能", "bù néng"],
              display: "不能 (bù néng)",
            },
            traps: [
              {
                spec: { type: "text", accept: ["不会", "bú huì"] },
                feedback: `不会 would mean ${subj.zh} forgot the skill! When illness, rain, or homework prevents going today, use 不能.`,
              },
            ],
            hint: "Circumstantial or physical inability today uses 不能 (bù néng)!",
            solution: [
              `Because a temporary circumstance (**${reason.zh}**) blocks the action today, use **不能** (*bù néng*).`,
            ],
          };
        }
        if (kind === 2) {
          const place = rng.pick(["博物馆里", "图书馆里", "音乐厅里", "教室里", "科学实验室里"] as const);
          const act = rng.pick(["拍照", "大声唱歌", "吃东西", "打球", "玩手机游戏"] as const);
          const askMode = rng.bool();
          if (askMode) {
            const prompt = `Choose **会**, **能**, or **可以** to ask politely for **permission** *(type ONLY the missing modal)*:\n\n**老师，请问在${place} ___ ${act}吗？**`;
            return {
              prompt,
              answer: {
                type: "text",
                accept: ["可以", "kěyǐ"],
                display: "可以 (kěyǐ)",
              },
              traps: [
                {
                  spec: { type: "text", accept: ["会", "huì"] },
                  feedback: "会 is for learned skills! Asking whether rules allow an action uses 可以 (kěyǐ).",
                },
              ],
              hint: "Asking for permission according to rules uses 可以 (kěyǐ).",
              solution: [`Asking permission uses **可以** (*kěyǐ*): **在${place}可以${act}吗？**`],
            };
          }
          const prompt = `Choose **不会** or **不可以** to state a strict **rule / prohibition** on a sign *(type ONLY the missing word)*:\n\n**请注意：在${place} ___ ${act}！** *("Not allowed!")*`;
          return {
            prompt,
            answer: {
              type: "text",
              accept: ["不可以", "不能", "bù kěyǐ", "bù néng"],
              display: "不可以 (bù kěyǐ)",
            },
            traps: [
              {
                spec: { type: "text", accept: ["不会", "bú huì"] },
                feedback: "不会 means lacking a learned skill — for rules ('not allowed'), use 不可以!",
              },
            ],
            hint: "Prohibition / 'not allowed' uses 不可以 (bù kěyǐ).",
            solution: [`Rule prohibition uses **不可以**: **在${place}不可以${act}！**`],
          };
        }
        const subj = rng.pick(PEOPLE.slice(1, 9));
        const sk = rng.pick(SKILLS);
        const prompt = `Choose **会**, **得 (děi)**, or **别** to express a **learned skill** *(type ONLY the missing character)*:\n\n**${subj.zh}学了三年了，现在很 ___ ${sk.zh}。**`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: ["会", "huì"],
            display: "会 (huì)",
          },
          hint: "Only ONE modal pairs with 很 to mean 'skilled / good at' a learned activity!",
          solution: [`Learned skill after **很** uses **会** (*huì*): **很会${sk.zh}**.`],
        };
      }

      const d = rng.pick(DEGREE_SKILLS);
      const enVerb = p.obj ? d.enVerb3 : d.enVerb1;
      const prompt = `Translate into Mandarin using the **Verb + 得 (de) + 很 + Adjective** degree complement *(remember: never put 得 right after the noun ${d.obj}!)*:\n\n**"${p.en} ${enVerb} ${d.enAdv}."** *(Subject: **${p.zh}**)*`;
      const echoZh = `${p.zh}${d.verb}${d.obj}${d.verb}得很好`.replace(/很好$/, `很${d.adj}`);
      const frontZh = `${p.zh}${d.obj}${d.verb}得很${d.adj}`;
      const echoPy = `${p.py} ${d.verbPy} ${d.objPy} ${d.verbPy} de hěn ${d.adjPy}`;
      const frontPy = `${p.py} ${d.objPy} ${d.verbPy} de hěn ${d.adjPy}`;
      return {
        prompt,
        answer: {
          type: "text",
          accept: [echoZh, frontZh, echoPy, frontPy],
          display: `${echoZh}。 / ${frontZh}。`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${p.zh}${d.verb}${d.obj}得很${d.adj}`] },
            feedback: `得 (de) MUST attach directly to the verb ${d.verb}, never to the object ${d.obj}! Repeat ${d.verb} (${d.verb}${d.obj}${d.verb}得…) or front ${d.obj} (${d.obj}${d.verb}得…).`,
          },
        ],
        hint: `Either echo the verb (${p.zh}${d.verb}${d.obj}${d.verb}得很${d.adj}) or front the object (${p.zh}${d.obj}${d.verb}得很${d.adj})!`,
        solution: [
          `Method 1 (Verb echo): **${echoZh}。**`,
          `Method 2 (Fronted object): **${frontZh}。**`,
        ],
      };
    },
  },
];
