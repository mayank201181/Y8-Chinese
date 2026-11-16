import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

const CITIES = [
  { zh: "新加坡", py: "Xīnjiāpō", en: "Singapore" },
  { zh: "北京", py: "Běijīng", en: "Beijing" },
  { zh: "上海", py: "Shànghǎi", en: "Shanghai" },
  { zh: "伦敦", py: "Lúndūn", en: "London" },
  { zh: "悉尼", py: "Xīní", en: "Sydney" },
  { zh: "哈尔滨", py: "Hā'ěrbīn", en: "Harbin" },
  { zh: "香港", py: "Xiānggǎng", en: "Hong Kong" },
  { zh: "东京", py: "Dōngjīng", en: "Tokyo" },
] as const;

const SUBJECTS = [
  { zh: "我", py: "wǒ", en: "I" },
  { zh: "我们", py: "wǒmen", en: "we" },
  { zh: "妈妈", py: "māma", en: "Mum" },
  { zh: "爸爸", py: "bàba", en: "Dad" },
  { zh: "哥哥", py: "gēge", en: "my older brother" },
  { zh: "姐姐", py: "jiějie", en: "my older sister" },
  { zh: "小明", py: "Xiǎomíng", en: "Xiaoming" },
  { zh: "美美", py: "Měiměi", en: "Meimei" },
] as const;

const DIGITS_ZH = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const DIGITS_PY = ["líng", "yī", "èr", "sān", "sì", "wǔ", "liù", "qī", "bā", "jiǔ"];

/** Convert an integer 0..39 into Hanzi and toned Pinyin. */
function intToZh(n: number): { zh: string; py: string } {
  if (n < 10) return { zh: DIGITS_ZH[n], py: DIGITS_PY[n] };
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  const tensZh = tens === 1 ? "十" : `${DIGITS_ZH[tens]}十`;
  const tensPy = tens === 1 ? "shí" : `${DIGITS_PY[tens]}shí`;
  if (ones === 0) return { zh: tensZh, py: tensPy };
  const sep = ones === 2 ? "'" : "";
  return {
    zh: `${tensZh}${DIGITS_ZH[ones]}`,
    py: `${tensPy}${sep}${DIGITS_PY[ones]}`,
  };
}

/** Build accepted Hanzi + Pinyin temperature phrases for °C integer `t` (-25..36). */
function tempPhrase(t: number): { zh: string; py: string; accepts: string[] } {
  if (t === 0) {
    return { zh: "零度", py: "líng dù", accepts: ["零度", "líng dù", "língdù"] };
  }
  const abs = Math.abs(t);
  const prefixZh = t < 0 ? "零下" : "";
  const prefixPy = t < 0 ? "língxià " : "";
  if (abs === 2) {
    const zh = `${prefixZh}两度`;
    const altZh = `${prefixZh}二度`;
    const py = `${prefixPy}liǎng dù`;
    const altPy = `${prefixPy}èr dù`;
    return { zh, py, accepts: [zh, altZh, py, altPy] };
  }
  const num = intToZh(abs);
  const zh = `${prefixZh}${num.zh}度`;
  const py = `${prefixPy}${num.py} dù`;
  const accepts = [zh, py];
  if (abs === 1) accepts.push(`${prefixPy}yí dù`);
  if (abs % 10 === 1 && abs > 10) accepts.push(py.replace("yī dù", "yí dù"));
  return { zh, py, accepts };
}

export const drills: Drill[] = [
  // ---------------------------------------------------------------------------
  // DRILL 1: Weather Conditions & Separable Verb-Objects (weather-conditions)
  // ---------------------------------------------------------------------------
  {
    id: "weather.conditions-builder",
    topicId: "weather",
    title: "Weather Conditions & Separable Verbs (晴天 / 下大雨 / 刮大风)",
    level: 1,
    guideRef: "weather-conditions",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const city = rng.pick(CITIES);

      if (tier === 1) {
        const times = [
          { zh: "今天", py: "jīntiān", en: "Today" },
          { zh: "今天上午", py: "jīntiān shàngwǔ", en: "This morning" },
          { zh: "今天下午", py: "jīntiān xiàwǔ", en: "This afternoon" },
        ] as const;
        const conds = [
          { zh: "是晴天", altZh: "晴天", py: "shì qíngtiān", en: "is a sunny day", isNoun: true, bare: "晴天" },
          { zh: "是阴天", altZh: "阴天", py: "shì yīntiān", en: "is an overcast day", isNoun: true, bare: "阴天" },
          { zh: "多云", altZh: "", py: "duōyún", en: "is cloudy", isNoun: false, bare: "多云" },
          { zh: "下雨", altZh: "", py: "xià yǔ", en: "is raining", isNoun: false, bare: "下雨" },
          { zh: "刮风", altZh: "", py: "guā fēng", en: "is windy", isNoun: false, bare: "刮风" },
          { zh: "有雾", altZh: "", py: "yǒu wù", en: "is foggy", isNoun: false, bare: "有雾" },
        ] as const;
        const tm = rng.pick(times);
        const cond = rng.pick(conds);
        const ansZh = `${tm.zh}${city.zh}${cond.zh}`;
        const ansZh2 = `${city.zh}${tm.zh}${cond.zh}`;
        const ansPy = `${tm.py} ${city.py} ${cond.py}`;
        const ansPy2 = `${city.py} ${tm.py} ${cond.py}`;
        const accepts = [ansZh, ansZh2, ansPy, ansPy2];
        if (cond.altZh) {
          accepts.push(`${tm.zh}${city.zh}${cond.altZh}`, `${city.zh}${tm.zh}${cond.altZh}`);
        }
        const traps: Trap[] = cond.isNoun
          ? []
          : [
              {
                spec: {
                  type: "text",
                  accept: [`${tm.zh}${city.zh}是${cond.zh}`, `${city.zh}${tm.zh}是${cond.zh}`],
                },
                feedback: `Don't add 是 before ${cond.zh}! Only sky nouns ending in 天 (晴天/阴天) take 是.`,
              },
            ];
        return {
          prompt: `Translate into Mandarin:\n**"${tm.en}, ${city.en} (${city.zh}) ${cond.en}."**`,
          answer: {
            type: "text",
            accept: accepts,
            display: `${ansZh}。 (${ansPy}.)`,
          },
          traps,
          hint: cond.isNoun
            ? `Use ${tm.zh} + ${city.zh} + 是 + ${cond.bare}.`
            : `Use ${tm.zh} + ${city.zh} + ${cond.zh} (NO 是!).`,
          solution: [
            `Time + Place: **${tm.zh}${city.zh}** (or **${city.zh}${tm.zh}**).`,
            cond.isNoun
              ? `Sky noun takes **是**: **${cond.zh}**.`
              : `Weather predicate needs NO **是**: **${cond.zh}**.`,
            `Full sentence: **${ansZh}。**`,
          ],
        };
      }

      if (tier === 2) {
        const times = [
          { zh: "今天早上", py: "jīntiān zǎoshang", en: "This morning" },
          { zh: "今天下午", py: "jīntiān xiàwǔ", en: "This afternoon" },
          { zh: "今天晚上", py: "jīntiān wǎnshang", en: "Tonight" },
        ] as const;
        const sepVerbs = [
          { v: "下", n: "雨", mod: "大", zh: "下大雨", py: "xià dà yǔ", wrong: "大下雨", en: "rains heavily (heavy rain)" },
          { v: "下", n: "雨", mod: "小", zh: "下小雨", py: "xià xiǎo yǔ", wrong: "小下雨", en: "drizzles (light rain)" },
          { v: "下", n: "雪", mod: "大", zh: "下大雪", py: "xià dà xuě", wrong: "大下雪", en: "snows heavily (heavy snow)" },
          { v: "下", n: "雪", mod: "小", zh: "下小雪", py: "xià xiǎo xuě", wrong: "小下雪", en: "snows lightly (light snow)" },
          { v: "刮", n: "风", mod: "大", zh: "刮大风", py: "guā dà fēng", wrong: "大刮风", en: "has strong winds" },
        ] as const;
        const tm = rng.pick(times);
        const sv = rng.pick(sepVerbs);
        const ansZh = `${tm.zh}${city.zh}${sv.zh}`;
        const ansZh2 = `${city.zh}${tm.zh}${sv.zh}`;
        const ansPy = `${tm.py} ${city.py} ${sv.py}`;
        const ansPy2 = `${city.py} ${tm.py} ${sv.py}`;
        return {
          prompt: `Translate into Mandarin using a **separable verb-object** phrase:\n**"${tm.en}, ${city.en} (${city.zh}) ${sv.en}."**`,
          answer: {
            type: "text",
            accept: [ansZh, ansZh2, ansPy, ansPy2],
            display: `${ansZh}。 (${ansPy}.)`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`${tm.zh}${city.zh}${sv.wrong}`, `${city.zh}${tm.zh}${sv.wrong}`],
              },
              feedback: `${sv.v}${sv.n} is Verb + Noun, so ${sv.mod} must slot in the MIDDLE: ${sv.zh}!`,
            },
            {
              spec: {
                type: "text",
                accept: [`${tm.zh}${city.zh}是${sv.zh}`, `${city.zh}${tm.zh}是${sv.zh}`],
              },
              feedback: `Drop 是! ${sv.zh} is already a verb phrase.`,
            },
          ],
          hint: `Insert **${sv.mod}** right between **${sv.v}** and **${sv.n}** → **${sv.zh}** (no 是!).`,
          solution: [
            `Time + Place: **${tm.zh}${city.zh}**.`,
            `Split **${sv.v}${sv.n}** and insert **${sv.mod}** before the noun: **${sv.zh}** (*${sv.py}*).`,
            `Full sentence: **${ansZh}。**`,
          ],
        };
      }

      // Tier 3: Ongoing 正在…呢 vs Imminent 快要…了
      const places = [
        ...CITIES.map((c) => ({ zh: c.zh, py: c.py, en: `in ${c.en} (${c.zh})` })),
        { zh: "外面", py: "wàimiàn", en: "outside (外面)" },
      ];
      const pl = rng.pick(places);
      const actions = [
        { zh: "下雨", py: "xià yǔ", en: "rain", ing: "raining" },
        { zh: "下大雨", py: "xià dà yǔ", en: "rain heavily", ing: "raining heavily" },
        { zh: "下雪", py: "xià xuě", en: "snow", ing: "snowing" },
        { zh: "刮大风", py: "guā dà fēng", en: "blow strong winds", ing: "blowing strong winds" },
        { zh: "打雷", py: "dǎ léi", en: "thunder", ing: "thundering" },
      ] as const;
      const act = rng.pick(actions);
      const ongoing = rng.bool();

      if (ongoing) {
        const z1 = `${pl.zh}正在${act.zh}呢`;
        const z2 = `${pl.zh}正在${act.zh}`;
        const p1 = `${pl.py} zhèngzài ${act.py} ne`;
        const p2 = `${pl.py} zhèngzài ${act.py}`;
        return {
          prompt: `Translate into Mandarin using **正在…呢**:\n**"Right now it is ${act.ing} ${pl.en}."**`,
          answer: {
            type: "text",
            accept: [z1, z2, `现在${z1}`, `现在${z2}`, p1, p2],
            display: `${z1}。 (${p1}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${pl.zh}正在${act.zh}了`] },
              feedback: "Don't mix ongoing 正在 with completed 了! Use 正在 + Verb + 呢.",
            },
          ],
          hint: `Place **${pl.zh}** + **正在** + **${act.zh}** + **呢**.`,
          solution: [
            `Location topic: **${pl.zh}**.`,
            `Ongoing frame: **正在 + ${act.zh} + 呢**.`,
            `Full sentence: **${z1}。**`,
          ],
        };
      } else {
        const z1 = `${pl.zh}快要${act.zh}了`;
        const z2 = `${pl.zh}要${act.zh}了`;
        const p1 = `${pl.py} kuài yào ${act.py} le`;
        const p2 = `${pl.py} yào ${act.py} le`;
        return {
          prompt: `Translate into Mandarin using **快要…了**:\n**"It is about to ${act.en} ${pl.en}!"**`,
          answer: {
            type: "text",
            accept: [z1, z2, p1, p2],
            display: `${z1}！ (${p1}!)`,
          },
          hint: `Use **${pl.zh}** + **快要** + **${act.zh}** + **了**.`,
          solution: [
            `Location topic: **${pl.zh}**.`,
            `Imminent weather frame: **快要 + ${act.zh} + 了**.`,
            `Full sentence: **${z1}！**`,
          ],
        };
      }
    },
  },

  // ---------------------------------------------------------------------------
  // DRILL 2: Thermometers, Sub-Zero Degrees & Feelings (temperature-degree)
  // ---------------------------------------------------------------------------
  {
    id: "weather.temperature-feelings",
    topicId: "weather",
    title: "Thermometers, 零下 Degrees & Feelings (度 / 热 / 冷 / 潮湿)",
    level: 1,
    guideRef: "temperature-degree",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const city = rng.pick(CITIES);

      if (tier === 1) {
        // Positive temperature + feeling with 很
        const bands = [
          { min: 29, max: 35, feelZh: "热", feelPy: "rè", feelEn: "hot" },
          { min: 26, max: 31, feelZh: "潮湿", feelPy: "cháoshī", feelEn: "humid" },
          { min: 21, max: 25, feelZh: "暖和", feelPy: "nuǎnhuo", feelEn: "warm" },
          { min: 15, max: 20, feelZh: "凉快", feelPy: "liángkuai", feelEn: "cool" },
          { min: 3, max: 9, feelZh: "冷", feelPy: "lěng", feelEn: "cold" },
        ] as const;
        const band = rng.pick(bands);
        const temp = rng.int(band.min, band.max);
        const tp = tempPhrase(temp);
        const ansZh = `今天${city.zh}${tp.zh}，很${band.feelZh}`;
        const ansZh2 = `${city.zh}今天${tp.zh}，很${band.feelZh}`;
        const ansZhShi = `今天${city.zh}是${tp.zh}，很${band.feelZh}`;
        const ansPy = `jīntiān ${city.py} ${tp.py}, hěn ${band.feelPy}`;
        return {
          prompt: `Write in Mandarin (using **度** and **很**, with NO **是** before the adjective!):\n**"Today ${city.en} (${city.zh}) is ${temp}°C, very ${band.feelEn}."**`,
          answer: {
            type: "text",
            accept: [ansZh, ansZh2, ansZhShi, ansPy],
            display: `${ansZh}。 (${ansPy}.)`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`今天${city.zh}${tp.zh}，是${band.feelZh}`, `${city.zh}今天${tp.zh}，是${band.feelZh}`],
              },
              feedback: `Never use 是 before the adjective ${band.feelZh}! Link it with 很: 很${band.feelZh}.`,
            },
          ],
          hint: `${temp}°C = **${tp.zh}**; 'very ${band.feelEn}' = **很${band.feelZh}** (no 是!).`,
          solution: [
            `Today + City + Degrees: **今天${city.zh}${tp.zh}**`,
            `Feeling with **很**: **很${band.feelZh}** (*hěn ${band.feelPy}*)`,
            `Full sentence: **${ansZh}。**`,
          ],
        };
      }

      if (tier === 2) {
        // Sub-zero temperatures (-1 to -24°C) in Mandarin with 零下…度
        const negTemp = -rng.int(1, 24);
        const tp = tempPhrase(negTemp);
        const posTp = tempPhrase(Math.abs(negTemp));
        const mode = rng.pick(["write_temp", "full_sentence"] as const);
        if (mode === "write_temp") {
          return {
            prompt: `How do you write **${negTemp}°C** in Mandarin for ${city.en} (${city.zh})? (Write the temperature phrase using **零下…度**.)`,
            answer: {
              type: "text",
              accept: tp.accepts,
              display: `${tp.zh} (${tp.py})`,
            },
            traps: [
              {
                spec: { type: "text", accept: posTp.accepts },
                feedback: `${posTp.zh} is +${Math.abs(negTemp)}°C! Add 零下 ('below zero') at the start for minus temperatures.`,
              },
            ],
            hint: `Use **零下** ('below zero') + number + **度**.`,
            solution: [
              `'Below zero' = **零下** (*língxià*).`,
              `${Math.abs(negTemp)} degrees = **${posTp.zh}**.`,
              `Combined: **${tp.zh}** (*${tp.py}*).`,
            ],
          };
        } else {
          const deg = rng.pick([
            { zh: "非常冷", py: "fēicháng lěng", en: "extremely cold" },
            { zh: "太冷了", py: "tài lěng le", en: "too cold" },
          ] as const);
          const z1 = `今天${city.zh}${tp.zh}，${deg.zh}`;
          const z2 = `${city.zh}今天${tp.zh}，${deg.zh}`;
          const p1 = `jīntiān ${city.py} ${tp.py}, ${deg.py}`;
          return {
            prompt: `Translate into Mandarin:\n**"Today ${city.en} (${city.zh}) is ${negTemp}°C, ${deg.en}!"**`,
            answer: {
              type: "text",
              accept: [z1, z2, `今天${city.zh}是${tp.zh}，${deg.zh}`, p1],
              display: `${z1}！ (${p1}!)`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`今天${city.zh}${posTp.zh}，${deg.zh}`] },
                feedback: `Don't forget 零下 for minus temperatures (${negTemp}°C = ${tp.zh})!`,
              },
            ],
            hint: `Use **${tp.zh}** for ${negTemp}°C, then **${deg.zh}**.`,
            solution: [
              `${negTemp}°C = **${tp.zh}**.`,
              `Feeling = **${deg.zh}**.`,
              `Full sentence: **${z1}！**`,
            ],
          };
        }
      }

      // Tier 3: Reading comprehension arithmetic with 升高 / 下降 / 最高 & 最低气温
      const startTemp = rng.int(-15, 25);
      const delta = rng.int(3, 12);
      const rises = rng.bool();
      const endTemp = rises ? startTemp + delta : startTemp - delta;
      const startP = tempPhrase(startTemp);
      const deltaP = intToZh(delta);
      const verbZh = rises ? "升高" : "下降";
      const wrongEnd = rises ? startTemp - delta : startTemp + delta;

      return {
        prompt: `Read this Mandarin weather update and calculate today's temperature in **°C** (type a number, e.g. \`-6\` or \`18\`):\n> **昨天${city.zh}的气温是${startP.zh}，今天的气温${verbZh}了${deltaP.zh}度。**`,
        answer: {
          type: "number",
          value: endTemp,
          display: `${endTemp}`,
        },
        traps: [
          {
            spec: { type: "number", value: wrongEnd },
            feedback: rises
              ? `升高 (shēnggāo) means 'rose / went UP', so ADD ${delta} to ${startTemp}!`
              : `下降 (xiàjiàng) means 'dropped / went DOWN', so SUBTRACT ${delta} from ${startTemp}!`,
          },
        ],
        hint: `**${startP.zh}** = ${startTemp}°C, and **${verbZh}了${deltaP.zh}度** means ${rises ? "rose" : "dropped"} by ${delta}°C.`,
        solution: [
          `Yesterday's temperature (**${startP.zh}**) = ${startTemp}°C.`,
          `**${verbZh}了${deltaP.zh}度** = ${rises ? `rose (+${delta}°C)` : `dropped (−${delta}°C)`}.`,
          `${startTemp} ${rises ? "+" : "−"} ${delta} = **${endTemp}**°C.`,
        ],
      };
    },
  },

  // ---------------------------------------------------------------------------
  // DRILL 3: Forecast Timeframes & 比 Comparisons (time-weather-forecasts)
  // ---------------------------------------------------------------------------
  {
    id: "weather.forecast-timeframes",
    topicId: "weather",
    title: "Forecast Timeframes & 比 Comparisons (会 / 没 / 比)",
    level: 2,
    guideRef: "time-weather-forecasts",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const city = rng.pick(CITIES);
        const slots = [
          { zh: "明天", py: "míngtiān", en: "Tomorrow" },
          { zh: "明天早上", py: "míngtiān zǎoshang", en: "Tomorrow morning" },
          { zh: "明天下午", py: "míngtiān xiàwǔ", en: "Tomorrow afternoon" },
          { zh: "明天晚上", py: "míngtiān wǎnshang", en: "Tomorrow evening" },
        ] as const;
        const acts = [
          { zh: "下雨", py: "xià yǔ", en: "rain" },
          { zh: "下大雨", py: "xià dà yǔ", en: "rain heavily" },
          { zh: "下雪", py: "xià xuě", en: "snow" },
          { zh: "刮大风", py: "guā dà fēng", en: "have strong winds" },
          { zh: "打雷", py: "dǎ léi", en: "thunder" },
        ] as const;
        const sl = rng.pick(slots);
        const act = rng.pick(acts);
        const pos = rng.bool();
        const modalZh = pos ? "会" : "不会";
        const modalPy = pos ? "huì" : "bú huì";
        const modalPyAlt = pos ? "huì" : "bù huì";
        const z1 = `${sl.zh}${city.zh}${modalZh}${act.zh}`;
        const z2 = `${city.zh}${sl.zh}${modalZh}${act.zh}`;
        const p1 = `${sl.py} ${city.py} ${modalPy} ${act.py}`;
        const p2 = `${sl.py} ${city.py} ${modalPyAlt} ${act.py}`;

        return {
          prompt: `Translate into Mandarin using **${modalZh}**:\n**"${sl.en}, ${city.en} (${city.zh}) ${pos ? "will" : "will not"} ${act.en}."**`,
          answer: {
            type: "text",
            accept: [z1, z2, p1, p2],
            display: `${z1}。 (${p1}.)`,
          },
          hint: `Big-to-small time first (**${sl.zh}**), then **${city.zh}** + **${modalZh}** + **${act.zh}**.`,
          solution: [
            `Time + City: **${sl.zh}${city.zh}**.`,
            `Future prediction: **${modalZh}${act.zh}**.`,
            `Full sentence: **${z1}。**`,
          ],
        };
      }

      if (tier === 2) {
        const usePastNeg = rng.bool(0.45);
        if (usePastNeg) {
          const city = rng.pick(CITIES);
          const pastTimes = [
            { zh: "昨天", py: "zuótiān", en: "Yesterday" },
            { zh: "昨天下午", py: "zuótiān xiàwǔ", en: "Yesterday afternoon" },
            { zh: "昨天晚上", py: "zuótiān wǎnshang", en: "Last night" },
          ] as const;
          const acts = [
            { zh: "下雨", py: "xià yǔ", en: "rain" },
            { zh: "下雪", py: "xià xuě", en: "snow" },
            { zh: "刮风", py: "guā fēng", en: "blow wind / be windy" },
            { zh: "打雷", py: "dǎ léi", en: "thunder" },
          ] as const;
          const pt = rng.pick(pastTimes);
          const act = rng.pick(acts);
          const z1 = `${pt.zh}${city.zh}没${act.zh}`;
          const z2 = `${pt.zh}${city.zh}没有${act.zh}`;
          const z3 = `${city.zh}${pt.zh}没${act.zh}`;
          const z4 = `${city.zh}${pt.zh}没有${act.zh}`;
          const p1 = `${pt.py} ${city.py} méi ${act.py}`;
          return {
            prompt: `Translate into Mandarin (watch out for the **没 + 了** trap!):\n**"${pt.en}, it did NOT ${act.en} in ${city.en} (${city.zh})."**`,
            answer: {
              type: "text",
              accept: [z1, z2, z3, z4, p1],
              display: `${z1}。 (${p1}.)`,
            },
            traps: [
              {
                spec: {
                  type: "text",
                  accept: [`${pt.zh}${city.zh}没${act.zh}了`, `${pt.zh}${city.zh}没有${act.zh}了`],
                },
                feedback: "Drop 了! Never keep 了 when negating a past action with 没(有).",
              },
              {
                spec: {
                  type: "text",
                  accept: [`${pt.zh}${city.zh}不${act.zh}`],
                },
                feedback: "Use 没 (méi), not 不, to say something did NOT happen in the past!",
              },
            ],
            hint: `Use **${pt.zh}${city.zh}** + **没** + **${act.zh}** (NO 了!).`,
            solution: [
              `Past negation uses **没(有)** and drops **了** completely.`,
              `Full sentence: **${z1}。**`,
            ],
          };
        }

        // Basic A 比 B + Adjective comparison
        const [c1, c2] = rng.shuffle(CITIES).slice(0, 2);
        const adjs = [
          { zh: "热", py: "rè", en: "hotter" },
          { zh: "冷", py: "lěng", en: "colder" },
          { zh: "暖和", py: "nuǎnhuo", en: "warmer" },
          { zh: "凉快", py: "liángkuai", en: "cooler" },
          { zh: "潮湿", py: "cháoshī", en: "more humid" },
          { zh: "干燥", py: "gānzào", en: "drier" },
        ] as const;
        const adj = rng.pick(adjs);
        const z1 = `今天${c1.zh}比${c2.zh}${adj.zh}`;
        const z2 = `${c1.zh}今天比${c2.zh}${adj.zh}`;
        const p1 = `jīntiān ${c1.py} bǐ ${c2.py} ${adj.py}`;
        return {
          prompt: `Translate into Mandarin using **比**:\n**"Today ${c1.en} (${c1.zh}) is ${adj.en} than ${c2.en} (${c2.zh})."**`,
          answer: {
            type: "text",
            accept: [z1, z2, p1],
            display: `${z1}。 (${p1}.)`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`今天${c1.zh}比${c2.zh}很${adj.zh}`, `${c1.zh}今天比${c2.zh}很${adj.zh}`],
              },
              feedback: `Never put 很 before ${adj.zh} in a 比 comparison!`,
            },
          ],
          hint: `Use **今天${c1.zh} + 比 + ${c2.zh} + ${adj.zh}** (no 很!).`,
          solution: [
            `Comparison frame: **A + 比 + B + Adjective** (no 很!).`,
            `Full sentence: **${z1}。**`,
          ],
        };
      }

      // Tier 3: Upgraded comparisons (得多 / 一点儿 / 没有…那么…)
      const [c1, c2] = rng.shuffle(CITIES).slice(0, 2);
      const adjs = [
        { zh: "热", py: "rè", baseEn: "hot", erEn: "hotter" },
        { zh: "冷", py: "lěng", baseEn: "cold", erEn: "colder" },
        { zh: "暖和", py: "nuǎnhuo", baseEn: "warm", erEn: "warmer" },
        { zh: "凉快", py: "liángkuai", baseEn: "cool", erEn: "cooler" },
        { zh: "潮湿", py: "cháoshī", baseEn: "humid", erEn: "more humid" },
      ] as const;
      const adj = rng.pick(adjs);
      const kind = rng.pick(["much_more", "a_little", "not_as"] as const);

      if (kind === "much_more") {
        const z1 = `${c1.zh}比${c2.zh}${adj.zh}得多`;
        const p1 = `${c1.py} bǐ ${c2.py} ${adj.py} de duō`;
        return {
          prompt: `Translate into Mandarin using **比…得多**:\n**"${c1.en} (${c1.zh}) is MUCH ${adj.erEn} than ${c2.en} (${c2.zh})."**`,
          answer: {
            type: "text",
            accept: [z1, p1],
            display: `${z1}。 (${p1}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${c1.zh}比${c2.zh}非常${adj.zh}`, `${c1.zh}比${c2.zh}很${adj.zh}`] },
              feedback: `Put 得多 AFTER ${adj.zh} (${adj.zh}得多), never 很/非常 before it!`,
            },
          ],
          hint: `Place **得多** right AFTER **${adj.zh}**: **${c1.zh}比${c2.zh}${adj.zh}得多**.`,
          solution: [
            `Frame: **A + 比 + B + Adjective + 得多**.`,
            `Full sentence: **${z1}。**`,
          ],
        };
      }

      if (kind === "a_little") {
        const z1 = `今天比昨天${adj.zh}一点儿`;
        const z2 = `今天比昨天${adj.zh}一点`;
        const p1 = `jīntiān bǐ zuótiān ${adj.py} yìdiǎnr`;
        const zCity = `${c1.zh}比${c2.zh}${adj.zh}一点儿`;
        const zCity2 = `${c1.zh}比${c2.zh}${adj.zh}一点`;
        const pCity = `${c1.py} bǐ ${c2.py} ${adj.py} yìdiǎnr`;
        const useCities = rng.bool(0.7);
        return useCities
          ? {
              prompt: `Translate into Mandarin using **比…一点儿**:\n**"${c1.en} (${c1.zh}) is a little ${adj.erEn} than ${c2.en} (${c2.zh})."**`,
              answer: {
                type: "text",
                accept: [zCity, zCity2, pCity],
                display: `${zCity}。 (${pCity}.)`,
              },
              traps: [
                {
                  spec: { type: "text", accept: [`${c1.zh}比${c2.zh}有点儿${adj.zh}`] },
                  feedback: `In a 比 comparison, put 一点儿 AFTER ${adj.zh}, not 有点儿 before it!`,
                },
              ],
              hint: `Use **${c1.zh} + 比 + ${c2.zh} + ${adj.zh}一点儿**.`,
              solution: [
                `In comparisons, 'a little more' uses **Adjective + 一点儿** after **比**.`,
                `Full sentence: **${zCity}。**`,
              ],
            }
          : {
              prompt: `Translate into Mandarin using **比…一点儿**:\n**"Today is a little ${adj.erEn} than yesterday."**`,
              answer: {
                type: "text",
                accept: [z1, z2, p1],
                display: `${z1}。 (${p1}.)`,
              },
              hint: `Use **今天 + 比 + 昨天 + ${adj.zh}一点儿**.`,
              solution: [`Full sentence: **${z1}。**`],
            };
      }

      // not_as: A 没有 B 那么 + Adj
      const z1 = `${c1.zh}没有${c2.zh}那么${adj.zh}`;
      const z2 = `${c1.zh}没有${c2.zh}${adj.zh}`;
      const p1 = `${c1.py} méiyǒu ${c2.py} nàme ${adj.py}`;
      return {
        prompt: `Translate into Mandarin using **没有…那么…**:\n**"${c1.en} (${c1.zh}) is not as ${adj.baseEn} as ${c2.en} (${c2.zh})."**`,
        answer: {
          type: "text",
          accept: [z1, z2, p1],
          display: `${z1}。 (${p1}.)`,
        },
        hint: `Use **${c1.zh} + 没有 + ${c2.zh} + 那么 + ${adj.zh}**.`,
        solution: [
          `Negative comparison frame: **A + 没有 + B + (那么) + Adjective**.`,
          `Full sentence: **${z1}。**`,
        ],
      };
    },
  },

  // ---------------------------------------------------------------------------
  // DRILL 4: Weather Gear & Paired Connectors 因为…所以 / 如果…就 (weather-activities)
  // ---------------------------------------------------------------------------
  {
    id: "weather.cause-effect-plans",
    topicId: "weather",
    title: "Weather Plans: 一把雨伞, 因为…所以… & 如果…就…",
    level: 3,
    guideRef: "weather-activities",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const sub = rng.pick(SUBJECTS);

      if (tier === 1) {
        const gearActions = [
          {
            zh: "带一把雨伞",
            py: "dài yì bǎ yǔsǎn",
            en: "brings an umbrella",
            enInf: "bring an umbrella",
            wrong: "带一个雨伞",
            wrongMsg: "Umbrellas take the handle classifier 把 (bǎ), not 个!",
          },
          {
            zh: "带两把雨伞",
            py: "dài liǎng bǎ yǔsǎn",
            en: "brings two umbrellas",
            enInf: "bring two umbrellas",
            wrong: "带二把雨伞",
            wrongMsg: "Use 两 (liǎng), not 二, before a measure word: 两把雨伞!",
          },
          {
            zh: "穿一件雨衣",
            py: "chuān yí jiàn yǔyī",
            en: "wears a raincoat",
            enInf: "wear a raincoat",
            wrong: "穿一把雨衣",
            wrongMsg: "Raincoats (雨衣) are upper-body garments, so use 件 (jiàn): 一件雨衣!",
          },
          {
            zh: "待在家看书",
            py: "dāi zài jiā kàn shū",
            en: "stays at home to read",
            enInf: "stay at home to read",
            wrong: "带在家看书",
            wrongMsg: "Use 待 (dāi = stay), not 带 (dài = carry), in 待在家!",
          },
          {
            zh: "去海边游泳",
            py: "qù hǎibiān yóuyǒng",
            en: "goes to the beach to swim",
            enInf: "go to the beach to swim",
            wrong: "",
            wrongMsg: "",
          },
        ] as const;
        const ga = rng.pick(gearActions);
        const day = rng.pick([
          { zh: "今天", py: "jīntiān", en: "Today" },
          { zh: "明天", py: "míngtiān", en: "Tomorrow" },
        ] as const);
        const isFirstOrPlural = sub.zh === "我" || sub.zh === "我们";
        const verbEn = day.zh === "明天" ? `will ${ga.enInf}` : isFirstOrPlural ? ga.enInf : ga.en;
        const z1 = `${day.zh}${sub.zh}${ga.zh}`;
        const z2 = `${sub.zh}${day.zh}${ga.zh}`;
        const p1 = `${day.py} ${sub.py} ${ga.py}`;
        const traps: Trap[] = ga.wrong
          ? [{ spec: { type: "text", accept: [`${day.zh}${sub.zh}${ga.wrong}`, `${sub.zh}${day.zh}${ga.wrong}`] }, feedback: ga.wrongMsg }]
          : [];

        return {
          prompt: `Translate into Mandarin (watch classifiers and characters!):\n**"${day.en}, ${sub.en} (${sub.zh}) ${verbEn}."**`,
          answer: {
            type: "text",
            accept: [z1, z2, p1],
            display: `${z1}。 (${p1}.)`,
          },
          traps,
          hint: `Combine **${day.zh}** + **${sub.zh}** + **${ga.zh}**.`,
          solution: [
            `Time & Subject: **${day.zh}${sub.zh}**.`,
            `Action phrase: **${ga.zh}** (*${ga.py}*).`,
            `Full sentence: **${z1}。**`,
          ],
        };
      }

      if (tier === 2) {
        // 因为 + Weather，所以 + Subject + Plan
        const causes = [
          { zh: "今天下大雨", py: "jīntiān xià dà yǔ", en: "it is raining heavily today" },
          { zh: "外面打雷", py: "wàimiàn dǎ léi", en: "it is thundering outside" },
          { zh: "今天刮大风", py: "jīntiān guā dà fēng", en: "there are strong winds today" },
          { zh: "今天太热了", py: "jīntiān tài rè le", en: "today is too hot" },
          { zh: "外面下大雪", py: "wàimiàn xià dà xuě", en: "it is snowing heavily outside" },
        ] as const;
        const effects = [
          { zh: "待在家", py: "dāi zài jiā", en: "stay(s) at home" },
          { zh: "不去海边", py: "bú qù hǎibiān", en: "do(es) not go to the beach" },
          { zh: "不去公园", py: "bú qù gōngyuán", en: "do(es) not go to the park" },
          { zh: "不能踢足球", py: "bù néng tī zúqiú", en: "cannot play football" },
        ] as const;
        const c = rng.pick(causes);
        const e = rng.pick(effects);
        const z1 = `因为${c.zh}，所以${sub.zh}${e.zh}`;
        const p1 = `yīnwèi ${c.py}, suǒyǐ ${sub.py} ${e.py}`;
        return {
          prompt: `Connect with **因为…，所以…**:\n**"Because ${c.en}, ${sub.en} (${sub.zh}) ${e.en}."**`,
          answer: {
            type: "text",
            accept: [z1, p1],
            display: `${z1}。 (${p1}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`因为${c.zh}，${sub.zh}${e.zh}`] },
              feedback: "In formal Mandarin cause-and-effect sentences, include BOTH halves: 因为…, 所以…!",
            },
          ],
          hint: `Write **因为${c.zh}，所以${sub.zh}${e.zh}**.`,
          solution: [
            `Cause clause: **因为${c.zh}，**`,
            `Effect clause with **所以**: **所以${sub.zh}${e.zh}。**`,
          ],
        };
      }

      // Tier 3: 如果 + Tomorrow Weather，Subject + 就 + Action
      const conds = [
        { zh: "明天是晴天", alt: "明天晴天", py: "míngtiān shì qíngtiān", en: "tomorrow is a sunny day", sunny: true },
        { zh: "明天不下雨", alt: "", py: "míngtiān bú xià yǔ", en: "it does not rain tomorrow", sunny: true },
        { zh: "明天下雨", alt: "", py: "míngtiān xià yǔ", en: "it rains tomorrow", sunny: false },
        { zh: "明天刮大风", alt: "", py: "míngtiān guā dà fēng", en: "there are strong winds tomorrow", sunny: false },
        { zh: "明天下午打雷", alt: "", py: "míngtiān xiàwǔ dǎ léi", en: "it thunders tomorrow afternoon", sunny: false },
      ] as const;
      const cond = rng.pick(conds);
      const sunnyPlans = [
        { zh: "去海边", py: "qù hǎibiān", en: "will go to the beach" },
        { zh: "去公园", py: "qù gōngyuán", en: "will go to the park" },
        { zh: "去踢足球", py: "qù tī zúqiú", en: "will go and play football" },
      ] as const;
      const rainyPlans = [
        { zh: "待在家", py: "dāi zài jiā", en: "will stay at home" },
        { zh: "带一把雨伞", py: "dài yì bǎ yǔsǎn", en: "will bring an umbrella" },
        { zh: "不去海边", py: "bú qù hǎibiān", en: "will not go to the beach" },
      ] as const;
      const plan = cond.sunny ? rng.pick(sunnyPlans) : rng.pick(rainyPlans);

      const z1 = `如果${cond.zh}，${sub.zh}就${plan.zh}`;
      const p1 = `rúguǒ ${cond.py}, ${sub.py} jiù ${plan.py}`;
      const accepts = [z1, p1];
      if (cond.alt) accepts.push(`如果${cond.alt}，${sub.zh}就${plan.zh}`);

      return {
        prompt: `Translate into Mandarin using **如果…，Subject + 就 + Verb**:\n**"If ${cond.en}, ${sub.en} (${sub.zh}) ${plan.en}."**`,
        answer: {
          type: "text",
          accept: accepts,
          display: `${z1}。 (${p1}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`如果${cond.zh}，就${sub.zh}${plan.zh}`] },
            feedback: `Word-order trap! Put the subject ${sub.zh} BEFORE the adverb 就: ${sub.zh}就${plan.zh}!`,
          },
          {
            spec: { type: "text", accept: [`如果${cond.zh}，所以${sub.zh}${plan.zh}`] },
            feedback: "Pair 如果 ('if') with 就 ('then'), NOT 所以!",
          },
        ],
        hint: `Remember: **就** goes AFTER the subject **${sub.zh}** → **${sub.zh}就${plan.zh}**!`,
        solution: [
          `Condition clause: **如果${cond.zh}，**`,
          `Result clause (Subject + 就 + Verb): **${sub.zh}就${plan.zh}。**`,
        ],
      };
    },
  },
];
