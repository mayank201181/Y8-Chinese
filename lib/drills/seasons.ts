import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

const SUBJECTS = [
  { zh: "我", py: "wǒ", en: "I", en3: false },
  { zh: "妈妈", py: "māma", en: "Mum", en3: true },
  { zh: "爸爸", py: "bàba", en: "Dad", en3: true },
  { zh: "哥哥", py: "gēge", en: "my older brother", en3: true },
  { zh: "姐姐", py: "jiějie", en: "my older sister", en3: true },
  { zh: "弟弟", py: "dìdi", en: "my younger brother", en3: true },
  { zh: "小明", py: "Xiǎomíng", en: "Xiaoming", en3: true },
  { zh: "美美", py: "Měiměi", en: "Meimei", en3: true },
] as const;

const SEASONS = [
  {
    zh: "春天",
    py: "chūntiān",
    en: "spring",
    feelZh: "很暖和",
    feelPy: "hěn nuǎnhuo",
    feelEn: "very warm",
    idiomZh: "春暖花开",
    idiomPy: "chūn nuǎn huā kāi",
    idiomEn: "warm with blooming flowers (春暖花开)",
  },
  {
    zh: "夏天",
    py: "xiàtiān",
    en: "summer",
    feelZh: "很热",
    feelPy: "hěn rè",
    feelEn: "very hot",
    idiomZh: "非常炎热",
    idiomPy: "fēicháng yánrè",
    idiomEn: "scorching hot (非常炎热)",
  },
  {
    zh: "秋天",
    py: "qiūtiān",
    en: "autumn",
    feelZh: "很凉快",
    feelPy: "hěn liángkuai",
    feelEn: "very cool",
    idiomZh: "秋高气爽",
    idiomPy: "qiū gāo qì shuǎng",
    idiomEn: "clear-skied and crisp (秋高气爽)",
  },
  {
    zh: "冬天",
    py: "dōngtiān",
    en: "winter",
    feelZh: "很冷",
    feelPy: "hěn lěng",
    feelEn: "very cold",
    idiomZh: "常常下大雪",
    idiomPy: "chángcháng xià dà xuě",
    idiomEn: "often snowing heavily (常常下大雪)",
  },
] as const;

const CITIES = [
  { zh: "新加坡", py: "Xīnjiāpō", en: "Singapore" },
  { zh: "北京", py: "Běijīng", en: "Beijing" },
  { zh: "上海", py: "Shànghǎi", en: "Shanghai" },
  { zh: "哈尔滨", py: "Hā'ěrbīn", en: "Harbin" },
  { zh: "伦敦", py: "Lúndūn", en: "London" },
  { zh: "悉尼", py: "Xīní", en: "Sydney" },
  { zh: "东京", py: "Dōngjīng", en: "Tokyo" },
  { zh: "昆明", py: "Kūnmíng", en: "Kunming" },
] as const;

const COLOURS = [
  { zh: "白色的", shortZh: "白", py: "báisè de", en: "white" },
  { zh: "黑色的", shortZh: "黑", py: "hēisè de", en: "black" },
  { zh: "红色的", shortZh: "红", py: "hóngsè de", en: "red" },
  { zh: "蓝色的", shortZh: "蓝", py: "lánsè de", en: "blue" },
  { zh: "黄色的", shortZh: "黄", py: "huángsè de", en: "yellow" },
  { zh: "绿色的", shortZh: "绿", py: "lǜsè de", en: "green" },
] as const;

const WARDROBE = [
  {
    zh: "衬衫",
    py: "chènshān",
    enSg: "shirt",
    enPl: "shirts",
    verb: "穿",
    verbPy: "chuān",
    wrongVerb: "戴",
    mw: "件",
    mwPy: "jiàn",
    onePy: "yí jiàn",
    wrongMw: "条",
    price: 90,
  },
  {
    zh: "毛衣",
    py: "máoyī",
    enSg: "jumper",
    enPl: "jumpers",
    verb: "穿",
    verbPy: "chuān",
    wrongVerb: "戴",
    mw: "件",
    mwPy: "jiàn",
    onePy: "yí jiàn",
    wrongMw: "条",
    price: 140,
  },
  {
    zh: "外套",
    py: "wàitào",
    enSg: "jacket",
    enPl: "jackets",
    verb: "穿",
    verbPy: "chuān",
    wrongVerb: "戴",
    mw: "件",
    mwPy: "jiàn",
    onePy: "yí jiàn",
    wrongMw: "条",
    price: 180,
  },
  {
    zh: "大衣",
    py: "dàyī",
    enSg: "overcoat",
    enPl: "overcoats",
    verb: "穿",
    verbPy: "chuān",
    wrongVerb: "戴",
    mw: "件",
    mwPy: "jiàn",
    onePy: "yí jiàn",
    wrongMw: "条",
    price: 260,
  },
  {
    zh: "羽绒服",
    py: "yǔróngfú",
    enSg: "puffer jacket",
    enPl: "puffer jackets",
    verb: "穿",
    verbPy: "chuān",
    wrongVerb: "戴",
    mw: "件",
    mwPy: "jiàn",
    onePy: "yí jiàn",
    wrongMw: "双",
    price: 320,
  },
  {
    zh: "裤子",
    py: "kùzi",
    enSg: "pair of trousers",
    enPl: "pairs of trousers",
    verb: "穿",
    verbPy: "chuān",
    wrongVerb: "戴",
    mw: "条",
    mwPy: "tiáo",
    onePy: "yì tiáo",
    wrongMw: "双",
    price: 120,
  },
  {
    zh: "牛仔裤",
    py: "niúzǎikù",
    enSg: "pair of jeans",
    enPl: "pairs of jeans",
    verb: "穿",
    verbPy: "chuān",
    wrongVerb: "戴",
    mw: "条",
    mwPy: "tiáo",
    onePy: "yì tiáo",
    wrongMw: "双",
    price: 150,
  },
  {
    zh: "短裤",
    py: "duǎnkù",
    enSg: "pair of shorts",
    enPl: "pairs of shorts",
    verb: "穿",
    verbPy: "chuān",
    wrongVerb: "戴",
    mw: "条",
    mwPy: "tiáo",
    onePy: "yì tiáo",
    wrongMw: "双",
    price: 70,
  },
  {
    zh: "裙子",
    py: "qúnzi",
    enSg: "skirt",
    enPl: "skirts",
    verb: "穿",
    verbPy: "chuān",
    wrongVerb: "戴",
    mw: "条",
    mwPy: "tiáo",
    onePy: "yì tiáo",
    wrongMw: "件",
    price: 130,
  },
  {
    zh: "运动鞋",
    py: "yùndòngxié",
    enSg: "pair of trainers",
    enPl: "pairs of trainers",
    verb: "穿",
    verbPy: "chuān",
    wrongVerb: "戴",
    mw: "双",
    mwPy: "shuāng",
    onePy: "yì shuāng",
    wrongMw: "条",
    price: 220,
  },
  {
    zh: "袜子",
    py: "wàzi",
    enSg: "pair of socks",
    enPl: "pairs of socks",
    verb: "穿",
    verbPy: "chuān",
    wrongVerb: "戴",
    mw: "双",
    mwPy: "shuāng",
    onePy: "yì shuāng",
    wrongMw: "条",
    price: 25,
  },
  {
    zh: "帽子",
    py: "màozi",
    enSg: "hat",
    enPl: "hats",
    verb: "戴",
    verbPy: "dài",
    wrongVerb: "穿",
    mw: "顶",
    mwPy: "dǐng",
    onePy: "yì dǐng",
    wrongMw: "件",
    price: 55,
  },
  {
    zh: "围巾",
    py: "wéijīn",
    enSg: "scarf",
    enPl: "scarves",
    verb: "戴",
    verbPy: "dài",
    wrongVerb: "穿",
    mw: "条",
    mwPy: "tiáo",
    onePy: "yì tiáo",
    wrongMw: "双",
    price: 65,
  },
  {
    zh: "手套",
    py: "shǒutào",
    enSg: "pair of gloves",
    enPl: "pairs of gloves",
    verb: "戴",
    verbPy: "dài",
    wrongVerb: "穿",
    mw: "双",
    mwPy: "shuāng",
    onePy: "yì shuāng",
    wrongMw: "条",
    price: 45,
  },
  {
    zh: "太阳镜",
    py: "tàiyángjìng",
    enSg: "pair of sunglasses",
    enPl: "pairs of sunglasses",
    verb: "戴",
    verbPy: "dài",
    wrongVerb: "穿",
    mw: "副",
    mwPy: "fù",
    onePy: "yí fù",
    wrongMw: "双",
    price: 160,
  },
] as const;

const RMB_NUMS: Record<number, string> = {
  25: "二十五",
  45: "四十五",
  55: "五十五",
  65: "六十五",
  70: "七十",
  90: "九十",
  120: "一百二十",
  130: "一百三十",
  140: "一百四十",
  150: "一百五十",
  160: "一百六十",
  180: "一百八十",
  220: "二百二十",
  260: "二百六十",
  320: "三百二十",
};

export const drills: Drill[] = [
  // ---------------------------------------------------------------------------
  // DRILL 1: Four Seasons, Reasons & Idioms (four-seasons)
  // ---------------------------------------------------------------------------
  {
    id: "seasons.four-seasons-traits",
    topicId: "seasons",
    title: "Four Seasons, Reasons & Idioms (春夏秋冬 / 最喜欢)",
    level: 1,
    guideRef: "four-seasons",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const sub = rng.pick(SUBJECTS);
      const sea = rng.pick(SEASONS);
      const city = rng.pick([
        { zh: "北京", py: "Běijīng", en: "Beijing" },
        { zh: "上海", py: "Shànghǎi", en: "Shanghai" },
        { zh: "伦敦", py: "Lúndūn", en: "London" },
        { zh: "东京", py: "Dōngjīng", en: "Tokyo" },
      ] as const);

      if (tier === 1) {
        const likeVerb = sub.en3 ? "likes" : "like";
        const z1 = `${sub.zh}最喜欢${sea.zh}，因为${sea.zh}${sea.feelZh}`;
        const p1 = `${sub.py} zuì xǐhuan ${sea.py}, yīnwèi ${sea.py} ${sea.feelPy}`;
        return {
          prompt: `Translate into Mandarin:\n**"${sub.en} (${sub.zh}) ${likeVerb} ${sea.en} best, because ${sea.en} is ${sea.feelEn}."**`,
          answer: {
            type: "text",
            accept: [z1, p1],
            display: `${z1}。 (${p1}.)`,
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: [`${sub.zh}最喜欢${sea.zh}，因为${sea.zh}是${sea.feelZh.replace("很", "")}`],
              },
              feedback: "Never use 是 before a season feeling adjective — link it with 很!",
            },
          ],
          hint: `Use **${sub.zh}最喜欢${sea.zh}，因为${sea.zh}${sea.feelZh}**.`,
          solution: [
            `Preference: **${sub.zh}最喜欢${sea.zh}** (*${sub.py} zuì xǐhuan ${sea.py}*).`,
            `Reason: **因为${sea.zh}${sea.feelZh}**.`,
            `Full sentence: **${z1}。**`,
          ],
        };
      }

      if (tier === 2) {
        const useNeither = rng.bool(0.45);
        if (useNeither) {
          const mildSea = rng.pick([SEASONS[0], SEASONS[2]] as const);
          const z1 = `${city.zh}的${mildSea.zh}不冷也不热`;
          const z2 = `${city.zh}${mildSea.zh}不冷也不热`;
          const p1 = `${city.py} de ${mildSea.py} bù lěng yě bú rè`;
          const p2 = `${city.py} de ${mildSea.py} bù lěng yě bù rè`;
          return {
            prompt: `Translate into Mandarin using **不…也不…**:\n**"${city.en}'s (${city.zh}) ${mildSea.en} is neither cold nor hot."**`,
            answer: {
              type: "text",
              accept: [z1, z2, p1, p2],
              display: `${z1}。 (${p1}.)`,
            },
            hint: `Use **${city.zh}的${mildSea.zh}** + **不冷也不热**.`,
            solution: [
              `Subject: **${city.zh}的${mildSea.zh}**.`,
              `Balanced frame: **不冷也不热** (*neither cold nor hot*).`,
              `Full sentence: **${z1}。**`,
            ],
          };
        }

        const z1 = `${city.zh}的${sea.zh}${sea.idiomZh}`;
        const z2 = `${city.zh}${sea.zh}${sea.idiomZh}`;
        const p1 = `${city.py} de ${sea.py} ${sea.idiomPy}`;
        return {
          prompt: `Translate into Mandarin using the upgrade phrase given:\n**"${city.en}'s (${city.zh}) ${sea.en} is ${sea.idiomEn}."**`,
          answer: {
            type: "text",
            accept: [z1, z2, p1],
            display: `${z1}。 (${p1}.)`,
          },
          hint: `Combine **${city.zh}的${sea.zh}** + **${sea.idiomZh}** (no 是 needed!).`,
          solution: [
            `Subject: **${city.zh}的${sea.zh}**.`,
            `Upgrade predicate: **${sea.idiomZh}** (*${sea.idiomPy}*).`,
            `Full sentence: **${z1}。**`,
          ],
        };
      }

      // Tier 3: 虽然…，但是… seasonal concession
      const concessions = [
        {
          cZh: "新加坡没有冬天",
          cPy: "Xīnjiāpō méiyǒu dōngtiān",
          cEn: "Singapore has no winter",
          mZh: "最喜欢冬天",
          mPy: "zuì xǐhuan dōngtiān",
          mEn: "like(s) winter best",
        },
        {
          cZh: "冬天很冷",
          cPy: "dōngtiān hěn lěng",
          cEn: "winter is very cold",
          mZh: "很喜欢滑雪",
          mPy: "hěn xǐhuan huá xuě",
          mEn: "really like(s) skiing",
        },
        {
          cZh: "夏天很热",
          cPy: "xiàtiān hěn rè",
          cEn: "summer is very hot",
          mZh: "最喜欢夏天",
          mPy: "zuì xǐhuan xiàtiān",
          mEn: "like(s) summer best",
        },
        {
          cZh: "新加坡不下雪",
          cPy: "Xīnjiāpō bú xià xuě",
          cEn: "Singapore does not snow",
          mZh: "最想去堆雪人",
          mPy: "zuì xiǎng qù duī xuěrén",
          mEn: "most want(s) to go and build a snowman",
        },
      ] as const;
      const con = rng.pick(concessions);
      const z1 = `虽然${con.cZh}，但是${sub.zh}${con.mZh}`;
      const z2 = `虽然${con.cZh}，可是${sub.zh}${con.mZh}`;
      const p1 = `suīrán ${con.cPy}, dànshì ${sub.py} ${con.mPy}`;

      return {
        prompt: `Connect with **虽然…，但是…**:\n**"Although ${con.cEn}, ${sub.en} (${sub.zh}) ${con.mEn}."**`,
        answer: {
          type: "text",
          accept: [z1, z2, p1],
          display: `${z1}。 (${p1}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`虽然${con.cZh}，${sub.zh}${con.mZh}`] },
            feedback: "Never leave 虽然 without its partner! Add 但是 (or 可是) at the start of the second clause.",
          },
          {
            spec: { type: "text", accept: [`虽然${con.cZh}，所以${sub.zh}${con.mZh}`] },
            feedback: "虽然 ('although') pairs with 但是 ('but'), NOT 所以 ('so')!",
          },
        ],
        hint: `Write **虽然${con.cZh}，但是${sub.zh}${con.mZh}**.`,
        solution: [
          `Clause 1: **虽然${con.cZh}，**`,
          `Clause 2 with **但是**: **但是${sub.zh}${con.mZh}。**`,
        ],
      };
    },
  },

  // ---------------------------------------------------------------------------
  // DRILL 2: Singapore vs World Climate Comparator (singapore-vs-beijing)
  // ---------------------------------------------------------------------------
  {
    id: "seasons.climate-comparator",
    topicId: "seasons",
    title: "Climate Comparator: 一样 / 不一样 & 比 (新加坡 vs 北京)",
    level: 2,
    guideRef: "singapore-vs-beijing",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const tropicalPlaces = [
          { zh: "新加坡", py: "Xīnjiāpō", en: "Singapore" },
          { zh: "马来西亚", py: "Mǎláixīyà", en: "Malaysia" },
          { zh: "曼谷", py: "Màngǔ", en: "Bangkok" },
        ] as const;
        const tropTraits = [
          { zh: "一年四季都很热", py: "yìnián sìjì dōu hěn rè", en: "is hot in all four seasons of the year", trapPre: "都一年四季很热" },
          { zh: "一年四季都很潮湿", py: "yìnián sìjì dōu hěn cháoshī", en: "is humid in all four seasons of the year", trapPre: "都一年四季很潮湿" },
          { zh: "一年四季如夏", py: "yìnián sìjì rú xià", en: "is like summer in all four seasons", trapPre: "" },
          { zh: "没有冬天", py: "méiyǒu dōngtiān", en: "has no winter", trapPre: "不有冬天" },
          { zh: "没有秋天", py: "méiyǒu qiūtiān", en: "has no autumn", trapPre: "不有秋天" },
        ] as const;
        const fourSeasonCities = [
          { zh: "北京", py: "Běijīng", en: "Beijing" },
          { zh: "上海", py: "Shànghǎi", en: "Shanghai" },
          { zh: "哈尔滨", py: "Hā'ěrbīn", en: "Harbin" },
          { zh: "伦敦", py: "Lúndūn", en: "London" },
          { zh: "东京", py: "Dōngjīng", en: "Tokyo" },
          { zh: "纽约", py: "Niǔyuē", en: "New York" },
        ] as const;
        const mode = rng.pick(["trop", "four_season", "basic_bi"] as const);
        if (mode === "trop") {
          const tp = rng.pick(tropicalPlaces);
          const tr = rng.pick(tropTraits);
          const z1 = `${tp.zh}${tr.zh}`;
          const p1 = `${tp.py} ${tr.py}`;
          const traps: Trap[] = tr.trapPre
            ? [
                {
                  spec: { type: "text", accept: [`${tp.zh}${tr.trapPre}`] },
                  feedback: tr.trapPre.startsWith("都")
                    ? `Put 都 AFTER 一年四季: ${z1}!`
                    : "Always negate 有 with 没有, never 不有!",
                },
              ]
            : [];
          return {
            prompt: `Translate into Mandarin:\n**"${tp.en} (${tp.zh}) ${tr.en}."**`,
            answer: {
              type: "text",
              accept: [z1, p1],
              display: `${z1}。 (${p1}.)`,
            },
            traps,
            hint: `Combine **${tp.zh}** + **${tr.zh}**.`,
            solution: [`Full sentence: **${z1}。** (*${p1}.*)`],
          };
        }
        if (mode === "four_season") {
          const c = rng.pick(fourSeasonCities);
          const z1 = `${c.zh}的气候四季分明`;
          const z2 = `${c.zh}气候四季分明`;
          const p1 = `${c.py} de qìhòu sìjì fēnmíng`;
          return {
            prompt: `Translate into Mandarin using **四季分明**:\n**"${c.en}'s (${c.zh}) climate has four distinct seasons."**`,
            answer: {
              type: "text",
              accept: [z1, z2, p1],
              display: `${z1}。 (${p1}.)`,
            },
            hint: `Use **${c.zh}的气候** + **四季分明**.`,
            solution: [
              `Subject: **${c.zh}的气候**.`,
              `Predicate idiom: **四季分明**.`,
              `Full sentence: **${z1}。**`,
            ],
          };
        }
        const c = rng.pick(fourSeasonCities);
        const tp = rng.pick(tropicalPlaces);
        const adj = rng.pick([
          { zh: "冷", py: "lěng", er: "colder" },
          { zh: "凉快", py: "liángkuai", er: "cooler" },
          { zh: "干燥", py: "gānzào", er: "drier" },
        ] as const);
        const z1 = `${c.zh}比${tp.zh}${adj.zh}`;
        const p1 = `${c.py} bǐ ${tp.py} ${adj.py}`;
        return {
          prompt: `Translate into Mandarin using **比**:\n**"${c.en} (${c.zh}) is ${adj.er} than ${tp.en} (${tp.zh})."**`,
          answer: {
            type: "text",
            accept: [z1, p1],
            display: `${z1}。 (${p1}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${c.zh}比${tp.zh}很${adj.zh}`] },
              feedback: `Never put 很 before ${adj.zh} in a 比 comparison!`,
            },
          ],
          hint: `Use **${c.zh} + 比 + ${tp.zh} + ${adj.zh}** (no 很!).`,
          solution: [`Full sentence: **${z1}。** (*${p1}.*)`],
        };
      }

      if (tier === 2) {
        // A 跟 B 一样 / 不一样
        const [c1, c2] = rng.shuffle(CITIES).slice(0, 2);
        const same = rng.bool(0.45);
        if (!same) {
          const z1 = `${c1.zh}的气候跟${c2.zh}不一样`;
          const z2 = `${c1.zh}的气候和${c2.zh}不一样`;
          const p1 = `${c1.py} de qìhòu gēn ${c2.py} bù yíyàng`;
          return {
            prompt: `Translate into Mandarin using **跟…不一样**:\n**"${c1.en}'s (${c1.zh}) climate is different from ${c2.en}'s (${c2.zh})."**`,
            answer: {
              type: "text",
              accept: [z1, z2, `${c1.zh}的气候跟${c2.zh}的不一样`, p1],
              display: `${z1}。 (${p1}.)`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`${c1.zh}的气候比${c2.zh}不一样`] },
                feedback: "Never use 比 with 不一样! Pair the two places with 跟 (or 和): 跟…不一样.",
              },
            ],
            hint: `Use **${c1.zh}的气候 + 跟 + ${c2.zh} + 不一样**.`,
            solution: [
              `Frame: **A + 跟 + B + 不一样**.`,
              `Full sentence: **${z1}。**`,
            ],
          };
        } else {
          const sea = rng.pick(SEASONS);
          const adjs = [
            { zh: "热", py: "rè", en: "hot" },
            { zh: "冷", py: "lěng", en: "cold" },
            { zh: "暖和", py: "nuǎnhuo", en: "warm" },
            { zh: "凉快", py: "liángkuai", en: "cool" },
          ] as const;
          const adj = rng.pick(adjs);
          const z1 = `${c1.zh}的${sea.zh}跟${c2.zh}一样${adj.zh}`;
          const z2 = `${c1.zh}的${sea.zh}和${c2.zh}一样${adj.zh}`;
          const p1 = `${c1.py} de ${sea.py} gēn ${c2.py} yíyàng ${adj.py}`;
          return {
            prompt: `Translate into Mandarin using **跟…一样 + Adjective**:\n**"${c1.en}'s (${c1.zh}) ${sea.en} is as ${adj.en} as ${c2.en}'s (${c2.zh})."**`,
            answer: {
              type: "text",
              accept: [z1, z2, p1],
              display: `${z1}。 (${p1}.)`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`${c1.zh}的${sea.zh}比${c2.zh}一样${adj.zh}`] },
                feedback: "Use 跟 (or 和), never 比, in an 一样 equality comparison!",
              },
            ],
            hint: `Use **${c1.zh}的${sea.zh} + 跟 + ${c2.zh} + 一样${adj.zh}**.`,
            solution: [
              `Equality frame: **A + 跟 + B + 一样 + Adjective**.`,
              `Full sentence: **${z1}。**`,
            ],
          };
        }
      }

      // Tier 3: Seasonal 比…得多 / 一点儿 comparisons
      const [c1, c2] = rng.shuffle(CITIES).slice(0, 2);
      const sea = rng.pick(SEASONS);
      const adjs = [
        { zh: "冷", py: "lěng", er: "colder" },
        { zh: "热", py: "rè", er: "hotter" },
        { zh: "凉快", py: "liángkuai", er: "cooler" },
        { zh: "暖和", py: "nuǎnhuo", er: "warmer" },
        { zh: "干燥", py: "gānzào", er: "drier" },
      ] as const;
      const adj = rng.pick(adjs);
      const much = rng.bool(0.6);
      const degZh = much ? "得多" : "一点儿";
      const degPy = much ? "de duō" : "yìdiǎnr";
      const degEn = much ? `much ${adj.er}` : `a little ${adj.er}`;

      const z1 = `${c1.zh}的${sea.zh}比${c2.zh}${adj.zh}${degZh}`;
      const z2 = `${c1.zh}${sea.zh}比${c2.zh}${adj.zh}${degZh}`;
      const p1 = `${c1.py} de ${sea.py} bǐ ${c2.py} ${adj.py} ${degPy}`;
      const accepts = [z1, z2, p1];
      if (!much) accepts.push(`${c1.zh}的${sea.zh}比${c2.zh}${adj.zh}一点`);

      return {
        prompt: `Translate into Mandarin using **比…${degZh}**:\n**"${c1.en}'s (${c1.zh}) ${sea.en} is ${degEn} than ${c2.en}'s (${c2.zh})."**`,
        answer: {
          type: "text",
          accept: accepts,
          display: `${z1}。 (${p1}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${c1.zh}的${sea.zh}比${c2.zh}很${adj.zh}`] },
            feedback: `Never put 很 before ${adj.zh} in a 比 comparison! Put ${degZh} AFTER ${adj.zh}.`,
          },
        ],
        hint: `Write **${c1.zh}的${sea.zh} + 比 + ${c2.zh} + ${adj.zh}${degZh}**.`,
        solution: [
          `Comparison frame: **A + 比 + B + Adjective + ${degZh}**.`,
          `Full sentence: **${z1}。**`,
        ],
      };
    },
  },

  // ---------------------------------------------------------------------------
  // DRILL 3: 穿 vs 戴 + Clothing Classifiers & Shopping Bills (clothing-chuan-dai)
  // ---------------------------------------------------------------------------
  {
    id: "seasons.chuan-dai-classifiers",
    topicId: "seasons",
    title: "穿 vs 戴 + Clothing Classifiers (件 · 条 · 双 · 顶 · 副)",
    level: 2,
    guideRef: "clothing-chuan-dai",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const sub = rng.pick(SUBJECTS);

      if (tier === 1) {
        const item = rng.pick(WARDROBE);
        const wearsEn = sub.en3 ? "wears" : "wear";
        const z1 = `${sub.zh}${item.verb}一${item.mw}${item.zh}`;
        const p1 = `${sub.py} ${item.verbPy} ${item.onePy} ${item.py}`;
        return {
          prompt: `Translate into Mandarin (choose **穿** vs **戴** AND the exact measure word!):\n**"${sub.en} (${sub.zh}) ${wearsEn} one ${item.enSg} (${item.zh})."**`,
          answer: {
            type: "text",
            accept: [z1, p1],
            display: `${z1}。 (${p1}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${sub.zh}${item.wrongVerb}一${item.mw}${item.zh}`] },
              feedback:
                item.verb === "穿"
                  ? `${item.zh} is a garment/footwear item, so use 穿 (chuān), NOT 戴!`
                  : `${item.zh} is an accessory, so use 戴 (dài), NOT 穿!`,
            },
            {
              spec: { type: "text", accept: [`${sub.zh}${item.verb}一${item.wrongMw}${item.zh}`] },
              feedback: `Check the classifier! ${item.zh} takes ${item.mw} (${item.mwPy}), NOT ${item.wrongMw}!`,
            },
          ],
          hint: `${item.zh} uses verb **${item.verb}** and classifier **${item.mw}** (*${item.mwPy}*).`,
          solution: [
            `Verb for **${item.zh}**: **${item.verb}** (*${item.verbPy}*).`,
            `Classifier for **${item.zh}**: **${item.mw}** (*${item.mwPy}*).`,
            `Full sentence: **${z1}。**`,
          ],
        };
      }

      if (tier === 2) {
        const item = rng.pick(WARDROBE);
        const col = rng.pick(COLOURS);
        const qty = rng.pick([
          { n: 1, zh: "一", py: item.onePy.split(" ")[0], en: "one" },
          { n: 2, zh: "两", py: "liǎng", en: "two" },
          { n: 3, zh: "三", py: "sān", en: "three" },
        ] as const);
        const nounEn = qty.n === 1 ? item.enSg : item.enPl;
        const wearsEn = sub.en3 ? "wears" : "wear";
        const z1 = `${sub.zh}${item.verb}${qty.zh}${item.mw}${col.zh}${item.zh}`;
        const zShort = `${sub.zh}${item.verb}${qty.zh}${item.mw}${col.shortZh}${item.zh}`;
        const p1 = `${sub.py} ${item.verbPy} ${qty.py} ${item.mwPy} ${col.py} ${item.py}`;
        const traps: Trap[] = [
          {
            spec: { type: "text", accept: [`${sub.zh}${item.wrongVerb}${qty.zh}${item.mw}${col.zh}${item.zh}`] },
            feedback: `Wrong verb! ${item.zh} requires ${item.verb} (${item.verbPy}), not ${item.wrongVerb}.`,
          },
          {
            spec: { type: "text", accept: [`${sub.zh}${item.verb}${qty.zh}${item.wrongMw}${col.zh}${item.zh}`] },
            feedback: `Wrong classifier! ${item.zh} requires ${item.mw} (${item.mwPy}), not ${item.wrongMw}.`,
          },
        ];
        if (qty.n === 2) {
          traps.push({
            spec: { type: "text", accept: [`${sub.zh}${item.verb}二${item.mw}${col.zh}${item.zh}`] },
            feedback: "Use 两 (liǎng), NEVER 二, before a measure word!",
          });
        }

        return {
          prompt: `Translate into Mandarin (with verb, quantity, classifier, colour + **的**, and noun):\n**"${sub.en} (${sub.zh}) ${wearsEn} ${qty.en} ${col.en} ${nounEn} (${item.zh})."**`,
          answer: {
            type: "text",
            accept: [z1, zShort, p1],
            display: `${z1}。 (${p1}.)`,
          },
          traps,
          hint: `Order: **${sub.zh} + ${item.verb} + ${qty.zh}${item.mw} + ${col.zh} + ${item.zh}**.`,
          solution: [
            `Subject + Verb: **${sub.zh}${item.verb}**.`,
            `Quantity + Classifier: **${qty.zh}${item.mw}**.`,
            `Colour + Noun: **${col.zh}${item.zh}**.`,
            `Full sentence: **${z1}。**`,
          ],
        };
      }

      // Tier 3: Orchard Road / Shanghai Clothes Shopping Total in RMB (元)
      const [it1, it2] = rng.shuffle(WARDROBE).slice(0, 2);
      const q1 = rng.pick([
        { n: 2, zh: "两" },
        { n: 3, zh: "三" },
      ] as const);
      const q2 = rng.pick([
        { n: 1, zh: "一" },
        { n: 2, zh: "两" },
      ] as const);
      const total = q1.n * it1.price + q2.n * it2.price;
      const forgotMult = it1.price + it2.price;
      const p1Zh = RMB_NUMS[it1.price];
      const p2Zh = RMB_NUMS[it2.price];

      return {
        prompt: `Read this Mandarin shopping receipt and calculate the **total cost in RMB (元)** (type a number):\n> **${sub.zh}买了${q1.zh}${it1.mw}${it1.zh}（一${it1.mw}${p1Zh}元）和${q2.zh}${it2.mw}${it2.zh}（一${it2.mw}${p2Zh}元）。一共多少钱？**`,
        answer: {
          type: "number",
          value: total,
          display: `${total}`,
        },
        traps:
          forgotMult !== total
            ? [
                {
                  spec: { type: "number", value: forgotMult },
                  feedback: `Check the quantities! Multiply ${q1.zh}${it1.mw} (${q1.n} × ${it1.price}) + ${q2.zh}${it2.mw} (${q2.n} × ${it2.price})!`,
                },
              ]
            : [],
        hint: `**${q1.zh}${it1.mw}${it1.zh}** = ${q1.n} × ${it1.price} 元, and **${q2.zh}${it2.mw}${it2.zh}** = ${q2.n} × ${it2.price} 元.`,
        solution: [
          `${q1.zh}${it1.mw}${it1.zh}: ${q1.n} × ${it1.price} = ${q1.n * it1.price} 元.`,
          `${q2.zh}${it2.mw}${it2.zh}: ${q2.n} × ${it2.price} = ${q2.n * it2.price} 元.`,
          `Total = ${q1.n * it1.price} + ${q2.n * it2.price} = **${total}** 元.`,
        ],
      };
    },
  },

  // ---------------------------------------------------------------------------
  // DRILL 4: Seasonal Activities & Suitcase Packing (seasonal-activities)
  // ---------------------------------------------------------------------------
  {
    id: "seasons.packing-activities",
    topicId: "seasons",
    title: "Seasonal Activities & Suitcase Packing (STPV & 带 vs 穿/戴)",
    level: 3,
    guideRef: "seasonal-activities",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const sub = rng.pick(SUBJECTS);

      if (tier === 1) {
        const plans = [
          { seaZh: "春天", seaPy: "chūntiān", seaEn: "In spring", actZh: "去公园看花", actPy: "qù gōngyuán kàn huā", actEn: "go(es) to the park to see flowers" },
          { seaZh: "春天", seaPy: "chūntiān", seaEn: "In spring", actZh: "去公园野餐", actPy: "qù gōngyuán yěcān", actEn: "go(es) to the park for a picnic" },
          { seaZh: "夏天", seaPy: "xiàtiān", seaEn: "In summer", actZh: "去海边游泳", actPy: "qù hǎibiān yóuyǒng", actEn: "go(es) to the beach to swim" },
          { seaZh: "夏天", seaPy: "xiàtiān", seaEn: "In summer", actZh: "吃冰淇淋", actPy: "chī bīngqílín", actEn: "eat(s) ice cream" },
          { seaZh: "秋天", seaPy: "qiūtiān", seaEn: "In autumn", actZh: "去爬山", actPy: "qù pá shān", actEn: "go(es) hiking" },
          { seaZh: "秋天", seaPy: "qiūtiān", seaEn: "In autumn", actZh: "去看红叶", actPy: "qù kàn hóngyè", actEn: "go(es) to see red autumn leaves" },
          { seaZh: "冬天", seaPy: "dōngtiān", seaEn: "In winter", actZh: "去滑雪", actPy: "qù huá xuě", actEn: "go(es) skiing" },
          { seaZh: "冬天", seaPy: "dōngtiān", seaEn: "In winter", actZh: "堆雪人", actPy: "duī xuěrén", actEn: "build(s) a snowman" },
        ] as const;
        const pl = rng.pick(plans);
        const z1 = `${pl.seaZh}${sub.zh}常常${pl.actZh}`;
        const z2 = `${sub.zh}${pl.seaZh}常常${pl.actZh}`;
        const p1 = `${pl.seaPy} ${sub.py} chángcháng ${pl.actPy}`;

        return {
          prompt: `Translate into Mandarin in **STPV** order using **常常** (*often*):\n**"${pl.seaEn}, ${sub.en} (${sub.zh}) often ${pl.actEn}."**`,
          answer: {
            type: "text",
            accept: [z1, z2, p1],
            display: `${z1}。 (${p1}.)`,
          },
          hint: `Put **${pl.seaZh}** and **${sub.zh}** first, then **常常** + **${pl.actZh}**.`,
          solution: [
            `Season & Subject: **${pl.seaZh}${sub.zh}**.`,
            `Frequency adverb + Action: **常常${pl.actZh}**.`,
            `Full sentence: **${z1}。**`,
          ],
        };
      }

      if (tier === 2) {
        // Packing for a trip: 去 City 旅行，Subject 要带 Quantity + Classifier + Item
        const dest = rng.pick([
          { zh: "北京", py: "Běijīng", en: "Beijing" },
          { zh: "哈尔滨", py: "Hā'ěrbīn", en: "Harbin" },
          { zh: "伦敦", py: "Lúndūn", en: "London" },
          { zh: "悉尼", py: "Xīní", en: "Sydney" },
          { zh: "东京", py: "Dōngjīng", en: "Tokyo" },
        ] as const);
        const item = rng.pick(WARDROBE);
        const z1 = `去${dest.zh}旅行，${sub.zh}要带一${item.mw}${item.zh}`;
        const p1 = `qù ${dest.py} lǚxíng, ${sub.py} yào dài ${item.onePy} ${item.py}`;

        return {
          prompt: `Translate into Mandarin (watch the packing verb **带** vs **戴**, plus the classifier!):\n**"Travelling to ${dest.en} (${dest.zh}), ${sub.en} (${sub.zh}) need(s) to bring/pack one ${item.enSg} (${item.zh})."**`,
          answer: {
            type: "text",
            accept: [z1, p1],
            display: `${z1}。 (${p1}.)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`去${dest.zh}旅行，${sub.zh}要戴一${item.mw}${item.zh}`] },
              feedback: "Packing/bringing an item in luggage uses 带 (dài), NOT the accessory-wearing verb 戴!",
            },
            {
              spec: { type: "text", accept: [`去${dest.zh}旅行，${sub.zh}要带一${item.wrongMw}${item.zh}`] },
              feedback: `Check the classifier for ${item.zh}: use ${item.mw}, not ${item.wrongMw}!`,
            },
          ],
          hint: `'Travel to ${dest.en}' = **去${dest.zh}旅行**; 'bring/pack' = **带** + **一${item.mw}${item.zh}**.`,
          solution: [
            `Trip clause: **去${dest.zh}旅行，**`,
            `Packing clause with **带**: **${sub.zh}要带一${item.mw}${item.zh}。**`,
          ],
        };
      }

      // Tier 3: Serial-verb outfit + seasonal activity
      const combos = [
        {
          seaZh: "冬天",
          seaPy: "dōngtiān",
          seaEn: "In winter",
          outZh: "穿一件羽绒服",
          outPy: "chuān yí jiàn yǔróngfú",
          outEn: "wear(s) a puffer jacket",
          wrongOut: "戴一件羽绒服",
          actZh: "去滑雪",
          actPy: "qù huá xuě",
          actEn: "to go skiing",
        },
        {
          seaZh: "冬天",
          seaPy: "dōngtiān",
          seaEn: "In winter",
          outZh: "戴一双手套",
          outPy: "dài yì shuāng shǒutào",
          outEn: "wear(s) a pair of gloves",
          wrongOut: "穿一双手套",
          actZh: "去堆雪人",
          actPy: "qù duī xuěrén",
          actEn: "to go and build a snowman",
        },
        {
          seaZh: "夏天",
          seaPy: "xiàtiān",
          seaEn: "In summer",
          outZh: "戴一副太阳镜",
          outPy: "dài yí fù tàiyángjìng",
          outEn: "wear(s) a pair of sunglasses",
          wrongOut: "穿一副太阳镜",
          actZh: "去海边",
          actPy: "qù hǎibiān",
          actEn: "to go to the beach",
        },
        {
          seaZh: "秋天",
          seaPy: "qiūtiān",
          seaEn: "In autumn",
          outZh: "穿一双运动鞋",
          outPy: "chuān yì shuāng yùndòngxié",
          outEn: "wear(s) a pair of trainers",
          wrongOut: "戴一双运动鞋",
          actZh: "去爬山",
          actPy: "qù pá shān",
          actEn: "to go hiking",
        },
        {
          seaZh: "春天",
          seaPy: "chūntiān",
          seaEn: "In spring",
          outZh: "穿一件毛衣",
          outPy: "chuān yí jiàn máoyī",
          outEn: "wear(s) a jumper",
          wrongOut: "戴一件毛衣",
          actZh: "去公园看花",
          actPy: "qù gōngyuán kàn huā",
          actEn: "to go to the park to see flowers",
        },
        {
          seaZh: "夏天",
          seaPy: "xiàtiān",
          seaEn: "In summer",
          outZh: "穿一条短裤",
          outPy: "chuān yì tiáo duǎnkù",
          outEn: "wear(s) a pair of shorts",
          wrongOut: "穿一双短裤",
          actZh: "去海边游泳",
          actPy: "qù hǎibiān yóuyǒng",
          actEn: "to go to the beach to swim",
        },
      ] as const;

      const cb = rng.pick(combos);
      const z1 = `${cb.seaZh}${sub.zh}${cb.outZh}${cb.actZh}`;
      const z2 = `${sub.zh}${cb.seaZh}${cb.outZh}${cb.actZh}`;
      const p1 = `${cb.seaPy} ${sub.py} ${cb.outPy} ${cb.actPy}`;

      return {
        prompt: `Build a chronological **serial-verb** Mandarin sentence:\n**"${cb.seaEn}, ${sub.en} (${sub.zh}) ${cb.outEn} ${cb.actEn}."**`,
        answer: {
          type: "text",
          accept: [z1, z2, p1],
          display: `${z1}。 (${p1}.)`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${cb.seaZh}${sub.zh}${cb.wrongOut}${cb.actZh}`] },
            feedback: "Check 穿 vs 戴 and the measure word carefully!",
          },
        ],
        hint: `Order: **${cb.seaZh}** + **${sub.zh}** + **${cb.outZh}** + **${cb.actZh}**.`,
        solution: [
          `Season & Subject: **${cb.seaZh}${sub.zh}**.`,
          `Outfit action first: **${cb.outZh}**.`,
          `Destination & activity second: **${cb.actZh}**.`,
          `Full sentence: **${z1}。**`,
        ],
      };
    },
  },
];
