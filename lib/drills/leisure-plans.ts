import type { Drill } from "./types.ts";

interface SubjectEntry {
  hz: string;
  py: string;
  en: string;
  enCap: string;
}

const SUBJECTS: SubjectEntry[] = [
  { hz: "我", py: "wǒ", en: "I", enCap: "I" },
  { hz: "哥哥", py: "gēge", en: "my older brother", enCap: "My older brother" },
  { hz: "姐姐", py: "jiějie", en: "my older sister", enCap: "My older sister" },
  { hz: "弟弟", py: "dìdi", en: "my younger brother", enCap: "My younger brother" },
  { hz: "妹妹", py: "mèimei", en: "my younger sister", enCap: "My younger sister" },
  { hz: "爸爸", py: "bàba", en: "Dad", enCap: "Dad" },
  { hz: "妈妈", py: "māma", en: "Mum", enCap: "Mum" },
  { hz: "小明", py: "Xiǎomíng", en: "Xiaoming", enCap: "Xiaoming" },
  { hz: "美美", py: "Měiměi", en: "Meimei", enCap: "Meimei" },
];

const WEEKEND_TIMES = [
  { hz: "周末", py: "zhōumò", en: "at the weekend" },
  { hz: "星期六", py: "xīngqīliù", en: "on Saturday" },
  { hz: "星期天", py: "xīngqītiān", en: "on Sunday" },
  { hz: "星期六下午", py: "xīngqīliù xiàwǔ", en: "on Saturday afternoon" },
  { hz: "星期天上午", py: "xīngqītiān shàngwǔ", en: "on Sunday morning" },
  { hz: "平时", py: "píngshí", en: "on weekdays" },
];

const PLACE_ACTIVITIES = [
  {
    placeHz: "在家",
    placePy: "zài jiā",
    actHz: "看电视",
    actPy: "kàn diànshì",
    enI: "watch television at home",
    en3: "watches television at home",
  },
  {
    placeHz: "在家",
    placePy: "zài jiā",
    actHz: "上网",
    actPy: "shàngwǎng",
    enI: "go online at home",
    en3: "goes online at home",
  },
  {
    placeHz: "在家",
    placePy: "zài jiā",
    actHz: "休息",
    actPy: "xiūxi",
    enI: "rest at home",
    en3: "rests at home",
  },
  {
    placeHz: "去图书馆",
    placePy: "qù túshūguǎn",
    actHz: "看书",
    actPy: "kàn shū",
    enI: "go to the library to read books",
    en3: "goes to the library to read books",
  },
  {
    placeHz: "去公园",
    placePy: "qù gōngyuán",
    actHz: "散步",
    actPy: "sànbù",
    enI: "go to the park for a walk",
    en3: "goes to the park for a walk",
  },
  {
    placeHz: "去商场",
    placePy: "qù shāngchǎng",
    actHz: "买东西",
    actPy: "mǎi dōngxi",
    enI: "go to the mall to buy things",
    en3: "goes to the mall to buy things",
  },
  {
    placeHz: "去乌节路",
    placePy: "qù Wūjiélù",
    actHz: "逛街",
    actPy: "guàngjiē",
    enI: "go to Orchard Road to window-shop",
    en3: "goes to Orchard Road to window-shop",
  },
  {
    placeHz: "去电影院",
    placePy: "qù diànyǐngyuàn",
    actHz: "看电影",
    actPy: "kàn diànyǐng",
    enI: "go to the cinema to watch a film",
    en3: "goes to the cinema to watch a film",
  },
];

const FREQ_ADVERBS = [
  { hz: "总是", py: "zǒngshì", en: "always" },
  { hz: "常常", py: "chángcháng", en: "often" },
  { hz: "经常", py: "jīngcháng", en: "frequently" },
  { hz: "有时候", py: "yǒushíhou", en: "sometimes" },
  { hz: "很少", py: "hěn shǎo", en: "rarely" },
  { hz: "从不", py: "cóng bù", en: "never" },
];

const SIMPLE_ACTS = [
  { hz: "看电影", py: "kàn diànyǐng", enI: "watch films", en3: "watches films", inf: "watch a film" },
  { hz: "看电视", py: "kàn diànshì", enI: "watch television", en3: "watches television", inf: "watch television" },
  { hz: "上网", py: "shàngwǎng", enI: "go online", en3: "goes online", inf: "go online" },
  { hz: "玩手机", py: "wán shǒujī", enI: "play on a mobile phone", en3: "plays on a mobile phone", inf: "play on a mobile phone" },
  { hz: "听音乐", py: "tīng yīnyuè", enI: "listen to music", en3: "listens to music", inf: "listen to music" },
  { hz: "看书", py: "kàn shū", enI: "read books", en3: "reads books", inf: "read books" },
  { hz: "做运动", py: "zuò yùndòng", enI: "do sport", en3: "does sport", inf: "do sport" },
  { hz: "睡懒觉", py: "shuì lǎnjiào", enI: "have a lie-in", en3: "has a lie-in", inf: "have a lie-in" },
];

const CI_ACTIVITIES = [
  { vHz: "看", vPy: "kàn", objHz: "电影", objPy: "diànyǐng", enI: "watch a film", en3: "watches a film" },
  { vHz: "去", vPy: "qù", objHz: "图书馆", objPy: "túshūguǎn", enI: "go to the library", en3: "goes to the library" },
  { vHz: "去", vPy: "qù", objHz: "博物馆", objPy: "bówùguǎn", enI: "go to the museum", en3: "goes to the museum" },
  { vHz: "去", vPy: "qù", objHz: "海边", objPy: "hǎibiān", enI: "go to the beach", en3: "goes to the beach" },
  { vHz: "去", vPy: "qù", objHz: "电影院", objPy: "diànyǐngyuàn", enI: "go to the cinema", en3: "goes to the cinema" },
  { vHz: "做", vPy: "zuò", objHz: "运动", objPy: "yùndòng", enI: "do sport", en3: "does sport" },
];

const CI_COUNTS = [
  { hz: "一次", py: "yí cì", en: "once" },
  { hz: "两次", py: "liǎng cì", en: "twice" },
  { hz: "三次", py: "sān cì", en: "three times" },
  { hz: "四次", py: "sì cì", en: "four times" },
];

const PERIODS = [
  { hz: "一个星期", py: "yí gè xīngqī", en: "a week" },
  { hz: "一个月", py: "yí gè yuè", en: "a month" },
];

const FUTURE_TIMES = [
  { hz: "这个周末", py: "zhège zhōumò", en: "This weekend" },
  { hz: "下个周末", py: "xià gè zhōumò", en: "Next weekend" },
  { hz: "这个星期六", py: "zhège xīngqīliù", en: "This Saturday" },
  { hz: "这个星期天", py: "zhège xīngqītiān", en: "This Sunday" },
  { hz: "明天下午", py: "míngtiān xiàwǔ", en: "Tomorrow afternoon" },
];

const INTENTIONS = [
  { hz: "打算", py: "dǎsuàn", enI: "plan to", en3: "plans to" },
  { hz: "准备", py: "zhǔnbèi", enI: "prepare to", en3: "prepares to" },
  { hz: "想", py: "xiǎng", enI: "would like to", en3: "would like to" },
];

const COMPANIONS = [
  { hz: "朋友", py: "péngyou", en: "friends" },
  { hz: "好朋友", py: "hǎo péngyou", en: "good friends" },
  { hz: "同学", py: "tóngxué", en: "classmates" },
  { hz: "家人", py: "jiārén", en: "family" },
  { hz: "妈妈", py: "māma", en: "Mum" },
  { hz: "爸爸", py: "bàba", en: "Dad" },
];

const SG_OUTINGS = [
  { hz: "去乌节路逛街", py: "qù Wūjiélù guàngjiē", en: "go window-shopping on Orchard Road" },
  { hz: "去圣淘沙玩", py: "qù Shèngtáoshā wán", en: "go have fun on Sentosa" },
  { hz: "去东海岸公园野餐", py: "qù Dōnghǎi'àn Gōngyuán yěcān", en: "go for a picnic at East Coast Park" },
  { hz: "去植物园散步", py: "qù zhíwùyuán sànbù", en: "go for a walk in the Botanic Gardens" },
  { hz: "去电影院看电影", py: "qù diànyǐngyuàn kàn diànyǐng", en: "go to the cinema to watch a film" },
  { hz: "去图书馆看书", py: "qù túshūguǎn kàn shū", en: "go to the library to read books" },
  { hz: "去商场买东西", py: "qù shāngchǎng mǎi dōngxi", en: "go to the mall to buy things" },
];

function capFirst(s: string): string {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

export const drills: Drill[] = [
  {
    id: "leisure-plans.stpv-activities",
    topicId: "leisure-plans",
    title: "Stage-Before-Action (STPV) Weekend Sentences",
    level: 1,
    guideRef: "free-time-activities",
    generate(rng, tier) {
      const subj = rng.pick(SUBJECTS);
      const time = rng.pick(WEEKEND_TIMES);
      const pa = rng.pick(PLACE_ACTIVITIES);
      const isI = subj.hz === "我";

      if (tier === 1) {
        const hzAns = `${subj.hz}${pa.placeHz}${pa.actHz}`;
        const pyAns = capFirst(`${subj.py} ${pa.placePy} ${pa.actPy}`);
        const wrongHz = `${subj.hz}${pa.actHz}${pa.placeHz}`;
        return {
          prompt: `Translate into Mandarin using Stage-Before-Action order:\n*"${subj.enCap} ${isI ? pa.enI : pa.en3}."* (Use **${subj.hz}**, **${pa.placeHz}**, and **${pa.actHz}**.)`,
          answer: {
            type: "text",
            accept: [hzAns, pyAns],
            display: `${hzAns}。 (${pyAns}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [wrongHz] },
              feedback: `Put the location/destination **${pa.placeHz}** BEFORE the action **${pa.actHz}**!`,
            },
          ],
          hint: `Order: Subject (${subj.hz}) → Location/Destination (${pa.placeHz}) → Action (${pa.actHz}).`,
          solution: [
            `Set the stage before the action: **${subj.hz}** + **${pa.placeHz}** + **${pa.actHz}**.`,
            `Answer: **${hzAns}。** (*${pyAns}.*)`,
          ],
        };
      }

      if (tier === 2) {
        const chunks = rng.shuffle([subj.hz, time.hz, pa.placeHz, pa.actHz]);
        const hz1 = `${subj.hz}${time.hz}${pa.placeHz}${pa.actHz}`;
        const hz2 = `${time.hz}${subj.hz}${pa.placeHz}${pa.actHz}`;
        const py1 = capFirst(`${subj.py} ${time.py} ${pa.placePy} ${pa.actPy}`);
        const py2 = capFirst(`${time.py} ${subj.py} ${pa.placePy} ${pa.actPy}`);
        return {
          prompt: `Unscramble these 4 chunks into a natural STPV Mandarin sentence meaning *"${subj.enCap} ${isI ? pa.enI : pa.en3} ${time.en}"*:\n**${chunks.join(" / ")}**`,
          answer: {
            type: "text",
            accept: [hz1, hz2, py1, py2],
            display: `${hz1}。 (${py1}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${subj.hz}${pa.actHz}${pa.placeHz}${time.hz}`] },
              feedback: "Never leave Place or Time at the end! Use Subject + Time + Place + Verb.",
            },
          ],
          hint: `Subject + Time (${subj.hz}${time.hz}) first, then Place (${pa.placeHz}), then Action (${pa.actHz}).`,
          solution: [
            `1. Subject + Time: **${subj.hz}${time.hz}**`,
            `2. Place / Movement: **${pa.placeHz}**`,
            `3. Main verb phrase: **${pa.actHz}** → **${hz1}。**`,
          ],
        };
      }

      // tier === 3: full translation with STPV
      const hz1 = `${subj.hz}${time.hz}${pa.placeHz}${pa.actHz}`;
      const hz2 = `${time.hz}${subj.hz}${pa.placeHz}${pa.actHz}`;
      const py1 = capFirst(`${subj.py} ${time.py} ${pa.placePy} ${pa.actPy}`);
      const py2 = capFirst(`${time.py} ${subj.py} ${pa.placePy} ${pa.actPy}`);
      return {
        prompt: `Translate into Mandarin (Hanzi or tone-marked Pinyin):\n*"${subj.enCap} ${isI ? pa.enI : pa.en3} ${time.en}."* (Use **${subj.hz}**, **${time.hz}**, **${pa.placeHz}**, **${pa.actHz}**.)`,
        answer: {
          type: "text",
          accept: [hz1, hz2, py1, py2],
          display: `${hz1}。 (${py1}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${subj.hz}${pa.placeHz}${time.hz}${pa.actHz}`] },
            feedback: `Put Time (**${time.hz}**) BEFORE Place (**${pa.placeHz}**)!`,
          },
        ],
        hint: `Tick off STPV: ${subj.hz} → ${time.hz} → ${pa.placeHz} → ${pa.actHz}.`,
        solution: [
          `Apply STPV word order: **${subj.hz}** (Subject) + **${time.hz}** (Time) + **${pa.placeHz}** (Place) + **${pa.actHz}** (Verb).`,
          `Answer: **${hz1}。**`,
        ],
      };
    },
  },

  {
    id: "leisure-plans.frequency-placement",
    topicId: "leisure-plans",
    title: "Frequency Adverbs (总是–从不) & Counted 次",
    level: 2,
    guideRef: "frequency-adverbs",
    generate(rng, tier) {
      const subj = rng.pick(SUBJECTS);
      const isI = subj.hz === "我";

      if (tier === 1) {
        const adv = rng.pick(FREQ_ADVERBS);
        const act = rng.pick(SIMPLE_ACTS);
        const hzAns = `${subj.hz}${adv.hz}${act.hz}`;
        const pyAns = capFirst(`${subj.py} ${adv.py} ${act.py}`);
        return {
          prompt: `Translate into Mandarin:\n*"${subj.enCap} **${adv.en}** ${isI ? act.enI : act.en3}."* (Use **${subj.hz}**, **${adv.hz}**, and **${act.hz}**.)`,
          answer: {
            type: "text",
            accept: [hzAns, pyAns],
            display: `${hzAns}。 (${pyAns}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${subj.hz}${act.hz}${adv.hz}`] },
              feedback: `Frequency adverb **${adv.hz}** MUST stand BEFORE the verb **${act.hz}**!`,
            },
          ],
          hint: `Place **${adv.hz}** (${adv.py}) directly before **${act.hz}**.`,
          solution: [
            `Frequency adverbs go before the verb: **${subj.hz}** + **${adv.hz}** + **${act.hz}**.`,
            `Answer: **${hzAns}。**`,
          ],
        };
      }

      if (tier === 2) {
        const adv = rng.pick(FREQ_ADVERBS);
        const time = rng.pick(WEEKEND_TIMES.slice(0, 4));
        const pa = rng.pick(PLACE_ACTIVITIES);
        const hz1 = `${subj.hz}${time.hz}${adv.hz}${pa.placeHz}${pa.actHz}`;
        const hz2 = `${time.hz}${subj.hz}${adv.hz}${pa.placeHz}${pa.actHz}`;
        const py1 = capFirst(`${subj.py} ${time.py} ${adv.py} ${pa.placePy} ${pa.actPy}`);
        const py2 = capFirst(`${time.py} ${subj.py} ${adv.py} ${pa.placePy} ${pa.actPy}`);
        const chunks = rng.shuffle([subj.hz, time.hz, adv.hz, pa.placeHz, pa.actHz]);
        return {
          prompt: `Unscramble all 5 chunks into a grammatical Mandarin sentence:\n**${chunks.join(" / ")}**`,
          answer: {
            type: "text",
            accept: [hz1, hz2, py1, py2],
            display: `${hz1}。 (${py1}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${subj.hz}${time.hz}${pa.placeHz}${adv.hz}${pa.actHz}`] },
              feedback: `Put the frequency adverb **${adv.hz}** BEFORE the location phrase **${pa.placeHz}**!`,
            },
          ],
          hint: `Order: ${subj.hz} + ${time.hz} + ${adv.hz} + ${pa.placeHz} + ${pa.actHz}.`,
          solution: [
            `Frequency adverb **${adv.hz}** precedes both **${pa.placeHz}** and **${pa.actHz}**.`,
            `Answer: **${hz1}。**`,
          ],
        };
      }

      // tier === 3: exact occurrences with 次 splitting verb + object!
      const period = rng.pick(PERIODS);
      const count = rng.pick(CI_COUNTS);
      const act = rng.pick(CI_ACTIVITIES);
      const hz1 = `${subj.hz}${period.hz}${act.vHz}${count.hz}${act.objHz}`;
      const hz2 = `${period.hz}${subj.hz}${act.vHz}${count.hz}${act.objHz}`;
      const py1 = capFirst(`${subj.py} ${period.py} ${act.vPy} ${count.py} ${act.objPy}`);
      const py2 = capFirst(`${period.py} ${subj.py} ${act.vPy} ${count.py} ${act.objPy}`);
      return {
        prompt: `Translate using **次** (*cì*) in the exact post-verbal slot:\n*"${subj.enCap} ${isI ? act.enI : act.en3} **${count.en} ${period.en}**."* (Use **${subj.hz}**, **${period.hz}**, **${act.vHz}${act.objHz}**, and **${count.hz}**.)`,
        answer: {
          type: "text",
          accept: [hz1, hz2, py1, py2],
          display: `${hz1}。 (${py1}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${subj.hz}${period.hz}${count.hz}${act.vHz}${act.objHz}`] },
            feedback: `Exact counts like **${count.hz}** go AFTER the verb **${act.vHz}** and BEFORE **${act.objHz}**: **${act.vHz}${count.hz}${act.objHz}**!`,
          },
        ],
        hint: `Split **${act.vHz}${act.objHz}** around **${count.hz}**: **${act.vHz}${count.hz}${act.objHz}**.`,
        solution: [
          `1. Subject + Time period: **${subj.hz}${period.hz}**`,
          `2. Verb + Occurrence Count + Object: **${act.vHz}${count.hz}${act.objHz}**`,
          `Answer: **${hz1}。**`,
        ],
      };
    },
  },

  {
    id: "leisure-plans.dasuan-plans",
    topicId: "leisure-plans",
    title: "Weekend Plans with 打算 / 准备 & 先…再…",
    level: 2,
    guideRef: "making-plans-dasuan",
    generate(rng, tier) {
      const subj = rng.pick(SUBJECTS);
      const ftime = rng.pick(FUTURE_TIMES);
      const isI = subj.hz === "我";

      if (tier === 1) {
        const intent = rng.pick(INTENTIONS);
        const outing = rng.pick(SG_OUTINGS);
        const hz1 = `${ftime.hz}${subj.hz}${intent.hz}${outing.hz}`;
        const hz2 = `${subj.hz}${ftime.hz}${intent.hz}${outing.hz}`;
        const py1 = capFirst(`${ftime.py} ${subj.py} ${intent.py} ${outing.py}`);
        const py2 = capFirst(`${subj.py} ${ftime.py} ${intent.py} ${outing.py}`);
        return {
          prompt: `Translate into Mandarin:\n*"${ftime.en}, ${subj.en} **${isI ? intent.enI : intent.en3}** ${outing.en}."* (Use **${ftime.hz}**, **${subj.hz}**, **${intent.hz}**, and **${outing.hz}**.)`,
          answer: {
            type: "text",
            accept: [hz1, hz2, py1, py2],
            display: `${hz1}。 (${py1}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${ftime.hz}${subj.hz}${intent.hz}${outing.hz}了`] },
              feedback: "Future plans with **打算 / 准备 / 想** have not happened yet — NEVER add past-action **了**!",
            },
          ],
          hint: `Place **${intent.hz}** (${intent.py}) right before **${outing.hz}**.`,
          solution: [
            `Future Time + Subject + Intention + Action: **${hz1}。**`,
          ],
        };
      }

      if (tier === 2) {
        const outing = rng.pick(SG_OUTINGS);
        const hz1 = `${ftime.hz}${subj.hz}不打算${outing.hz}`;
        const hz2 = `${subj.hz}${ftime.hz}不打算${outing.hz}`;
        const py1 = capFirst(`${ftime.py} ${subj.py} bù dǎsuàn ${outing.py}`);
        const py2 = capFirst(`${subj.py} ${ftime.py} bù dǎsuàn ${outing.py}`);
        return {
          prompt: `Negate this future plan in Mandarin:\n*"${ftime.en}, ${subj.en} **${isI ? "do not plan to" : "does not plan to"}** ${outing.en}."* (Use **${ftime.hz}**, **${subj.hz}**, **打算**, and **${outing.hz}**.)`,
          answer: {
            type: "text",
            accept: [hz1, hz2, py1, py2],
            display: `${hz1}。 (${py1}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${ftime.hz}${subj.hz}没打算${outing.hz}了`] },
              feedback: "Negate a present/future intention with **不打算** (never *没…了*)!",
            },
          ],
          hint: `Use **不打算** (*bù dǎsuàn*) before **${outing.hz}**, with NO **了**.`,
          solution: [
            `Negate **打算** with **不**: **${hz1}。**`,
          ],
        };
      }

      // tier === 3: two-step sequence with 先...再...
      const pair = rng.shuffle(SIMPLE_ACTS).slice(0, 2);
      const a1 = pair[0];
      const a2 = pair[1];
      const hz1 = `${ftime.hz}${subj.hz}打算先${a1.hz}再${a2.hz}`;
      const hz2 = `${subj.hz}${ftime.hz}打算先${a1.hz}再${a2.hz}`;
      const py1 = capFirst(`${ftime.py} ${subj.py} dǎsuàn xiān ${a1.py}, zài ${a2.py}`);
      const py2 = capFirst(`${subj.py} ${ftime.py} dǎsuàn xiān ${a1.py}, zài ${a2.py}`);
      return {
        prompt: `Build a two-step weekend plan using **打算**, **先**, and **再**:\n*"${ftime.en}, ${subj.en} ${isI ? "plan to" : "plans to"} **first** ${a1.inf}, **and then** ${a2.inf}."* (Use **${ftime.hz}**, **${subj.hz}**, **${a1.hz}**, **${a2.hz}**.)`,
        answer: {
          type: "text",
          accept: [hz1, hz2, py1, py2],
          display: `${ftime.hz}${subj.hz}打算先${a1.hz}，再${a2.hz}。`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`先${ftime.hz}${subj.hz}打算${a1.hz}再${a2.hz}`] },
            feedback: "**先** is an adverb — it must stand AFTER the subject and **打算**, directly before the first verb!",
          },
        ],
        hint: `Frame: ${ftime.hz}${subj.hz}打算 + 先${a1.hz}，再${a2.hz}。`,
        solution: [
          `1. Time + Subject + Intention: **${ftime.hz}${subj.hz}打算**`,
          `2. Step 1 with **先**: **先${a1.hz}**`,
          `3. Step 2 with **再**: **再${a2.hz}** → **${ftime.hz}${subj.hz}打算先${a1.hz}，再${a2.hz}。**`,
        ],
      };
    },
  },

  {
    id: "leisure-plans.invitations-yiqi",
    topicId: "leisure-plans",
    title: "Companions (跟…一起) & Polite Invitations",
    level: 3,
    guideRef: "together-invitations",
    generate(rng, tier) {
      const outing = rng.pick(SG_OUTINGS);

      if (tier === 1) {
        const subj = rng.pick(SUBJECTS.slice(0, 5));
        const comp = rng.pick(COMPANIONS.slice(0, 4));
        const hzAns = `${subj.hz}跟${comp.hz}一起${outing.hz}`;
        const hzAlt = `${subj.hz}和${comp.hz}一起${outing.hz}`;
        const pyAns = capFirst(`${subj.py} gēn ${comp.py} yìqǐ ${outing.py}`);
        return {
          prompt: `Translate using **跟…一起** BEFORE the verb:\n*"${subj.enCap} ${subj.hz === "我" ? outing.en : outing.en.replace(/^go\b/, "goes")} together with ${comp.en}."* (Use **${subj.hz}**, **跟${comp.hz}一起**, and **${outing.hz}**.)`,
          answer: {
            type: "text",
            accept: [hzAns, hzAlt, pyAns],
            display: `${hzAns}。 (${pyAns}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${subj.hz}${outing.hz}跟${comp.hz}一起`] },
              feedback: `Never put **跟${comp.hz}一起** at the end! It must stand BEFORE **${outing.hz}**.`,
            },
          ],
          hint: `Order: ${subj.hz} + 跟${comp.hz}一起 + ${outing.hz}.`,
          solution: [
            `Put the companion phrase on stage before the verb: **${hzAns}。**`,
          ],
        };
      }

      if (tier === 2) {
        const ftime = rng.pick(FUTURE_TIMES);
        const tag = rng.pick([
          { hz: "好吗", py: "hǎo ma", en: "OK?" },
          { hz: "怎么样", py: "zěnmeyàng", en: "how about it?" },
        ]);
        const hz1 = `${ftime.hz}我们一起${outing.hz}${tag.hz}`;
        const hz2 = `我们${ftime.hz}一起${outing.hz}${tag.hz}`;
        const py1 = capFirst(`${ftime.py} wǒmen yìqǐ ${outing.py}, ${tag.py}`);
        const py2 = capFirst(`Wǒmen ${ftime.py} yìqǐ ${outing.py}, ${tag.py}`);
        return {
          prompt: `Invite your friend politely in Mandarin:\n*"${ftime.en}, shall we ${outing.en} together, **${tag.en}**"* (Use **${ftime.hz}**, **我们一起**, **${outing.hz}**, and **${tag.hz}**.)`,
          answer: {
            type: "text",
            accept: [hz1, hz2, py1, py2],
            display: `${ftime.hz}我们一起${outing.hz}，${tag.hz}？`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${ftime.hz}我们一起${outing.hz}怎么样吗`] },
              feedback: "Never combine **怎么样** and **吗** in the same sentence!",
            },
          ],
          hint: `Suggestion (**我们${ftime.hz}一起${outing.hz}**) + tag question (**${tag.hz}？**).`,
          solution: [
            `Build the suggestion with **一起**, then attach **，${tag.hz}？**:`,
            `**${ftime.hz}我们一起${outing.hz}，${tag.hz}？**`,
          ],
        };
      }

      // tier === 3: full 打算 + 跟…一起 + 去… sentence
      const subj = rng.pick(SUBJECTS.slice(0, 5));
      const ftime = rng.pick(FUTURE_TIMES);
      const comp = rng.pick(COMPANIONS.slice(0, 4));
      const hz1 = `${ftime.hz}${subj.hz}打算跟${comp.hz}一起${outing.hz}`;
      const hz2 = `${subj.hz}${ftime.hz}打算跟${comp.hz}一起${outing.hz}`;
      const py1 = capFirst(`${ftime.py} ${subj.py} dǎsuàn gēn ${comp.py} yìqǐ ${outing.py}`);
      const py2 = capFirst(`${subj.py} ${ftime.py} dǎsuàn gēn ${comp.py} yìqǐ ${outing.py}`);
      return {
        prompt: `Combine **打算** + **跟…一起** in exact Mandarin order:\n*"${ftime.en}, ${subj.en} ${subj.hz === "我" ? "plan" : "plans"} to ${outing.en} together with ${comp.en}."* (Use **${ftime.hz}**, **${subj.hz}**, **打算**, **跟${comp.hz}一起**, and **${outing.hz}**.)`,
        answer: {
          type: "text",
          accept: [hz1, hz2, py1, py2],
          display: `${hz1}。 (${py1}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${ftime.hz}${subj.hz}跟${comp.hz}一起打算${outing.hz}`] },
            feedback: `Put the intention verb **打算** BEFORE **跟${comp.hz}一起**!`,
          },
        ],
        hint: `Order: ${ftime.hz}${subj.hz} → 打算 → 跟${comp.hz}一起 → ${outing.hz}.`,
        solution: [
          `1. Time + Subject + Intention: **${ftime.hz}${subj.hz}打算**`,
          `2. Companion before action: **跟${comp.hz}一起**`,
          `3. Action: **${outing.hz}** → **${hz1}。**`,
        ],
      };
    },
  },
];
