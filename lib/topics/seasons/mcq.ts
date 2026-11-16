import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "seasons-m1",
    title: "Seasons Paper 1 — Four Seasons, Climates & 穿 vs 戴 Basics",
    questions: [
      {
        id: "seasons-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "four-seasons",
        question: "Which option lists the four seasons in the standard Mandarin order **spring, summer, autumn, winter**?",
        options: [
          "春天、夏天、秋天、冬天",
          "夏天、春天、冬天、秋天",
          "秋天、冬天、春天、夏天",
          "冬天、秋天、夏天、春天",
        ],
        answerIndex: 0,
        hints: ["Think of the 4-character set phrase **春夏秋冬** (*chūn xià qiū dōng*)."],
        explanation:
          "**春天** (spring), **夏天** (summer), **秋天** (autumn), **冬天** (winter) is the universal Mandarin sequence (**春夏秋冬**).",
      },
      {
        id: "seasons-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "four-seasons",
        question: "How do you ask **'Which season do you like best?'** in Mandarin?",
        options: [
          "你喜欢什么天气吗？",
          "你最喜欢哪个季节？",
          "你的最喜欢季节谁？",
          "一年有几个春天？",
        ],
        answerIndex: 1,
        hints: ["Use **最喜欢** (*like best*) + **哪个季节** (*which season*)."],
        explanation:
          "**你最喜欢哪个季节？** (*Nǐ zuì xǐhuan nǎge jìjié?*) uses the superlative verb phrase **最喜欢** + **哪个季节** (which season). **你的最喜欢季节** unnaturally copies English adjective grammar without **的** before **季节**.",
      },
      {
        id: "seasons-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "four-seasons",
        question: "Why does the character **秋** (*qiū*, in **秋天** autumn) combine **禾** (grain stalk) and **火** (fire)?",
        options: [
          "Because autumn is when volcanoes erupt in northern China",
          "Because farmers burn ice blocks in autumn",
          "Because harvest grain ripens and leaves turn fiery gold and red",
          "Because 秋 originally meant scorching summer heat",
        ],
        answerIndex: 2,
        hints: [
          "**禾** (*hé*) depicts a ripe cereal/rice stalk bending with grain.",
          "Think of harvest colours and **红叶** (red autumn leaves)!",
        ],
        explanation:
          "**秋** combines **禾** (harvest grain) with **火** (fire/warm golden-red hues), evoking ripened crops and fiery autumn foliage! Scorching summer heat is **炎** (two fires **火 + 火**).",
      },
      {
        id: "seasons-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "four-seasons",
        question: "Which 4-character idiom (**成语**) praises **spring** for being warm with flowers in full bloom?",
        options: [
          "秋高气爽",
          "四季分明",
          "四季如夏",
          "春暖花开",
        ],
        answerIndex: 3,
        hints: [
          "Look for the idiom starting with **春** (*chūn*, spring) + **暖** (*nuǎn*, warm).",
          "**花开** (*huā kāi*) means 'flowers bloom'.",
        ],
        explanation:
          "**春暖花开** (*chūn nuǎn huā kāi*) literally means 'spring is warm and flowers bloom'. **秋高气爽** describes crisp autumn air, **四季分明** means four distinct seasons, and **四季如夏** means like summer all year round.",
      },
      {
        id: "seasons-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "singapore-vs-beijing",
        question: "Which sentence accurately describes Singapore's equatorial climate?",
        options: [
          "新加坡一年四季都很热，没有冬天。",
          "新加坡气候四季分明，冬天常下雪。",
          "新加坡都一年四季是冷。",
          "新加坡的冬天比哈尔滨冷得多。",
        ],
        answerIndex: 0,
        hints: ["Singapore sits near the equator: it has no winter and is hot all year round!"],
        explanation:
          "**新加坡一年四季都很热，没有冬天。** ('Singapore is hot all year round and has no winter') is both factually accurate and grammatically clean (with **都** placed after **一年四季**).",
      },
      {
        id: "seasons-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-vs-beijing",
        question: "How do you say **'Singapore's climate is different from Beijing's'** in Mandarin?",
        options: [
          "新加坡的气候比北京不一样。",
          "新加坡的气候跟北京不一样。",
          "新加坡不一样北京的气候。",
          "新加坡的气候是不同比北京。",
        ],
        answerIndex: 1,
        hints: [
          "Equality (**一样**) and difference (**不一样**) pair two things using **跟** (*gēn*) or **和**, NOT **比**!",
          "Use the frame **A + 跟 + B + 不一样**.",
        ],
        explanation:
          "**新加坡的气候跟北京不一样。** uses **A 跟 B 不一样** accurately. Mixing **比** with **不一样** (*比北京不一样*) is a classic learner error!",
      },
      {
        id: "seasons-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "clothing-chuan-dai",
        question: "Which item below MUST use the verb **戴** (*dài*) instead of **穿** (*chuān*)?",
        options: [
          "毛衣 (máoyī — jumper)",
          "牛仔裤 (niúzǎikù — jeans)",
          "帽子 (màozi — hat)",
          "运动鞋 (yùndòngxié — trainers)",
        ],
        answerIndex: 2,
        hints: ["**穿** is for core clothes and shoes; **戴** is for accessories perched on the head, face, neck or hands!"],
        explanation:
          "**帽子** (*màozi*, hat) is a head accessory, so you must say **戴帽子**! **毛衣** (jumper), **牛仔裤** (jeans) and **运动鞋** (trainers) all take **穿**.",
      },
      {
        id: "seasons-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "How do you say **'a pair of blue trousers'** in Mandarin? (Watch out for the #1 English-speaker classifier trap!)",
        options: [
          "一双蓝色的裤子",
          "一件蓝色的裤子",
          "一顶蓝色的裤子",
          "一条蓝色的裤子",
        ],
        answerIndex: 3,
        hints: [
          "Never translate English 'a pair of trousers' with **双** — **双** requires TWO separate pieces!",
          "Trousers are ONE long, flexible garment — which classifier fits?",
        ],
        explanation:
          "**一条蓝色的裤子** uses **条** (*tiáo*, long flexible item). English says 'a pair of trousers', tempting learners to write **一双裤子**, which is wrong in Mandarin because the two trouser legs are sewn into one single garment!",
      },
      {
        id: "seasons-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "Match the three classifiers in order: **一___衬衫** (shirt), **一___运动鞋** (trainers), **一___帽子** (hat):",
        options: [
          "件 、 双 、 顶",
          "条 、 双 、 件",
          "件 、 条 、 把",
          "双 、 件 、 顶",
        ],
        answerIndex: 0,
        hints: [
          "Upper-body tops like **衬衫** take **件** (*jiàn*).",
          "Two separate shoes (**运动鞋**) take **双** (*shuāng*), and a hat on the crown of your head takes **顶** (*dǐng*).",
        ],
        explanation:
          "**一件衬衫** (top → **件**), **一双运动鞋** (pair of shoes → **双**), and **一顶帽子** (hat on head peak → **顶**).",
      },
      {
        id: "seasons-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "Look carefully at **眼镜** (*yǎnjìng*) vs **眼睛** (*yǎnjing*). Which sentence is sensible?",
        options: [
          "老师戴着一副眼睛。",
          "老师戴着一副眼镜。",
          "老师穿着一双眼镜。",
          "老师戴着一顶眼睛。",
        ],
        answerIndex: 1,
        hints: [
          "**眼睛** (*yǎnjing*, with eye radical **目**) means eyeballs; **眼镜** (*yǎnjìng*, with metal/mirror **钅**) means spectacles/glasses!",
          "Glasses use verb **戴** and classifier **副** (*fù*).",
        ],
        explanation:
          "**老师戴着一副眼镜。** ('The teacher is wearing a pair of glasses') pairs **戴** + **一副** + **眼镜** (*yǎnjìng*). Writing **戴着一副眼睛** hilariously says 'wearing a pair of eyeballs'!",
      },
      {
        id: "seasons-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "seasonal-activities",
        question: "Which pair of activities fits **冬天** (*winter*) in northern China?",
        options: [
          "去海边晒太阳、穿短裤",
          "去植物园看春天的花",
          "滑雪、堆雪人",
          "看秋天的红叶",
        ],
        answerIndex: 2,
        hints: ["Look for snow (**雪**) in both activities!"],
        explanation:
          "**滑雪** (*huá xuě*, skiing) and **堆雪人** (*duī xuěrén*, building a snowman) are classic snowy **冬天** activities.",
      },
      {
        id: "seasons-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "seasonal-activities",
        question: "You are packing in Singapore for a trip to Beijing: **我正在收拾行李箱，要___一件羽绒服。** Which character completes the blank?",
        options: [
          "穿",
          "戴",
          "待",
          "带",
        ],
        answerIndex: 3,
        hints: [
          "At 31°C in your Singapore bedroom while packing a suitcase (**收拾行李箱**), are you *wearing* the puffer jacket or *bringing/packing* it?",
          "Pick the character meaning 'to bring / pack along'.",
        ],
        explanation:
          "**带** (*dài*, bring/pack along) completes **要带一件羽绒服** ('need to pack/bring a puffer jacket'). **戴** is only for wearing accessories on your body, and **待** (*dāi*) means 'stay'.",
      },
      {
        id: "seasons-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-vs-beijing",
        question: "Translate: **'Beijing's winter is much colder than Singapore's.'**",
        options: [
          "北京的冬天比新加坡冷得多。",
          "北京的冬天比新加坡很冷。",
          "北京的冬天冷得多比新加坡。",
          "新加坡比北京的冬天冷得多。",
        ],
        answerIndex: 0,
        hints: [
          "Use **A + 比 + B + Adjective + 得多**.",
          "Remember **很** is banned before the adjective in a **比** sentence!",
        ],
        explanation:
          "**北京的冬天比新加坡冷得多。** puts **北京的冬天** first, **比新加坡** second, and **冷得多** (*much colder*) at the end without **很**.",
      },
      {
        id: "seasons-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "clothing-chuan-dai",
        question: "Inspect the left-hand radical of **衬衫**, **裤子**, **裙子** and **袜子**. Why must you write **衤** (5 strokes, two small strokes on the right) instead of **礻** (4 strokes, one small stroke on the right)?",
        options: [
          "Because 礻 means ice and snow",
          "Because 衤 is compressed from 衣 (clothing), whereas 礻 means altar/ritual (示)",
          "Because 衤 means silk thread 纟",
          "They are interchangeable variants of the exact same radical",
        ],
        answerIndex: 1,
        hints: [
          "Count the strokes of **衣** (*yī*, clothing) vs **示** (*shì*, altar/show).",
          "Which radical appears in **祝** (wish) and **神** (spirit) versus **裤 / 裙 / 衫**?",
        ],
        explanation:
          "**衤** (*yīzìpáng*, 5 strokes) is the side form of **衣** (clothing), used in **衬衫, 裤, 裙, 袜**. **礻** (*shìzìpáng*, 4 strokes) comes from **示** (altar/blessing) — swapping them creates a non-existent or wrong character in exams!",
      },
      {
        id: "seasons-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "describing-favourite-season",
        question: "Choose the **100% grammatical** IGCSE sentence using **虽然…但是…** (*Although…*):",
        options: [
          "虽然新加坡没有冬天，我最喜欢滑雪。",
          "虽然新加坡没有冬天，所以我最喜欢冬天。",
          "虽然新加坡没有冬天，但是我最喜欢冬天，因为十二月可以去日本滑雪。",
          "新加坡虽然没有冬天，但是因为冬天比夏天很凉快。",
        ],
        answerIndex: 2,
        hints: [
          "**虽然** ('although') MUST pair with **但是** or **可是** ('but') in the second clause — never leave it solo and never pair it with **所以**!",
          "Also check that no option sneaks **比…很** in at the end.",
        ],
        explanation:
          "**虽然新加坡没有冬天，但是我最喜欢冬天，因为十二月可以去日本滑雪。** pairs **虽然…但是…** cleanly and follows up with a clear **因为** reason! Leaving out **但是**, pairing **虽然** with **所以**, or writing **比夏天很凉快** are all grammar errors.",
      },
    ],
  },

  {
    id: "seasons-m2",
    title: "Seasons Paper 2 — Classifiers, Outfits & Climate Comparisons",
    questions: [
      {
        id: "seasons-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "four-seasons",
        question: "Which adjective pair best describes **夏天** (summer) vs **冬天** (winter) in northern China?",
        options: [
          "夏天寒冷，冬天炎热",
          "夏天凉快，冬天暖和",
          "夏天干燥，冬天四季如夏",
          "夏天炎热，冬天寒冷",
        ],
        answerIndex: 3,
        hints: ["**炎** has two fires (**火+火** = scorching); **寒** has ice (**冫** = freezing)."],
        explanation:
          "**夏天炎热，冬天寒冷** matches scorching summer (**炎热**) with bitterly cold winter (**寒冷**).",
      },
      {
        id: "seasons-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "four-seasons",
        question: "What does **北京的秋天不冷也不热，秋高气爽** mean?",
        options: [
          "Beijing's autumn is neither cold nor hot, with clear skies and crisp air.",
          "Beijing's autumn is both freezing and snowy every day.",
          "Beijing's spring is neither rainy nor dry.",
          "Beijing's autumn is hotter and more humid than summer.",
        ],
        answerIndex: 0,
        hints: [
          "**不 + A + 也不 + B** means 'neither A nor B'.",
          "**秋高气爽** is the classic autumn idiom!",
        ],
        explanation:
          "**不冷也不热** means 'neither cold nor hot', and **秋高气爽** means 'high clear autumn skies and crisp, refreshing air'.",
      },
      {
        id: "seasons-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "singapore-vs-beijing",
        question: "What does the 4-character phrase **四季分明** (*sìjì fēnmíng*) mean when describing Beijing or London?",
        options: [
          "Hot like summer in all four seasons",
          "Having four clearly distinct seasons",
          "Raining every afternoon of the year",
          "Having four winters in one year",
        ],
        answerIndex: 1,
        hints: ["**四季** = four seasons, **分明** = clearly separated / distinct."],
        explanation:
          "**四季分明** means 'having four clearly distinct seasons', contrasting with tropical Singapore's **四季如夏** ('like summer all year round').",
      },
      {
        id: "seasons-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-vs-beijing",
        question: "In July, Beijing hits 33°C and Singapore is 32°C. How do you say **'Beijing's summer is almost as hot as Singapore's'**?",
        options: [
          "北京的夏天比新加坡差不多一样热。",
          "北京的夏天没有新加坡冷。",
          "北京的夏天跟新加坡差不多一样热。",
          "北京的夏天一样新加坡很热。",
        ],
        answerIndex: 2,
        hints: [
          "Use **A + 跟 + B + (差不多)一样 + Adjective**.",
          "Never use **比** with **一样**!",
        ],
        explanation:
          "**北京的夏天跟新加坡差不多一样热。** uses **A 跟 B (差不多)一样 + Adjective** smoothly! **比…一样** mixes two incompatible comparison structures.",
      },
      {
        id: "seasons-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "Which sentence uses **BOTH** **穿** and **戴** with 100% accuracy?",
        options: [
          "妹妹穿一条红色的裙子，戴一双白色的袜子。",
          "妹妹戴一件毛衣，穿一条围巾。",
          "妹妹穿一顶黄色的帽子，戴一双运动鞋。",
          "妹妹穿一条红色的连衣裙，戴一副太阳镜。",
        ],
        answerIndex: 3,
        hints: [
          "Check every noun: dresses (**连衣裙**), jumpers (**毛衣**), socks (**袜子**) and shoes (**运动鞋**) all take **穿**!",
          "Sunglasses (**太阳镜**), scarves (**围巾**) and hats (**帽子**) all take **戴**!",
        ],
        explanation:
          "**妹妹穿一条红色的连衣裙，戴一副太阳镜。** ('My younger sister wears a red dress and wears a pair of sunglasses') gets both verbs AND both classifiers (**条** and **副**) right! Socks (**袜子**) and shoes (**运动鞋**) must use **穿**, never **戴**.",
      },
      {
        id: "seasons-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "clothing-chuan-dai",
        question: "Which item shares the exact same measure word **条** (*tiáo*) as **裤子** (trousers) and **裙子** (skirt)?",
        options: [
          "围巾 (wéijīn — scarf)",
          "毛衣 (máoyī — jumper)",
          "手套 (shǒutào — gloves)",
          "皮鞋 (píxié — leather shoes)",
        ],
        answerIndex: 0,
        hints: ["Look for the long, narrow, flexible strip of cloth wrapped around your neck!"],
        explanation:
          "**围巾** (*wéijīn*, scarf) is long and flexible, so it uses **一条围巾** — just like **一条裤子** and **一条裙子**! **毛衣** uses **件**, while **手套** and **皮鞋** use **双**.",
      },
      {
        id: "seasons-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "How do you say **'two white T-shirts'** in Mandarin?",
        options: [
          "二件白色的T恤衫",
          "两件白色的T恤衫",
          "两条白色的T恤衫",
          "两双白T恤衫",
        ],
        answerIndex: 1,
        hints: [
          "Before a measure word, 2 MUST be **两** (*liǎng*), never **二**!",
          "T-shirts are upper-body tops, so choose **件** (*jiàn*).",
        ],
        explanation:
          "**两件白色的T恤衫** uses **两** before a classifier (**两件**, never *二件*!) and **件** for an upper-body garment.",
      },
      {
        id: "seasons-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "What does **牛仔裤** (*niúzǎikù*) mean in English, and what is its literal origin?",
        options: [
          "Leather boots — literally 'cattle-hide footwear'",
          "Woollen jumper — literally 'calf-hair coat'",
          "Jeans — literally 'cowboy trousers'",
          "Shorts — literally 'running trousers'",
        ],
        answerIndex: 2,
        hints: [
          "**牛仔** (*niúzǎi*) means 'cowboy' in Cantonese/Mandarin.",
          "**裤** (*kù*) means 'trousers'.",
        ],
        explanation:
          "**牛仔裤** means **jeans** — coined from **牛仔** (cowboy) + **裤** (trousers)! Its classifier is **条** (**一条牛仔裤**).",
      },
      {
        id: "seasons-m2-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "clothing-chuan-dai",
        question: "After coming home from school in sweaty 32°C Singapore weather, what does **我回家先脱校服和袜子** mean?",
        options: [
          "When I get home, I buy a new school uniform and socks first.",
          "When I get home, I wash my jacket and trainers first.",
          "When I get home, I pack my uniform into a suitcase first.",
          "When I get home, I take off my school uniform and socks first.",
        ],
        answerIndex: 3,
        hints: ["**脱** (*tuō*) is the direct antonym of **穿** (*chuān*, put on/wear)!"],
        explanation:
          "**脱** (*tuō*) means 'to take off (clothes/footwear)', and **校服** (*xiàofú*) means 'school uniform'.",
      },
      {
        id: "seasons-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "seasonal-activities",
        question: "Put these words into correct Mandarin **STPV** order: **去 / 秋天 / 爬山 / 我们 / 常常**",
        options: [
          "秋天我们常常去爬山。",
          "我们去爬山常常在秋天。",
          "常常秋天去我们爬山。",
          "我们爬山去秋天常常。",
        ],
        answerIndex: 0,
        hints: [
          "Season/Time goes at the start (**秋天我们…** or **我们秋天…**).",
          "Frequency adverb **常常** (*often*) MUST sit directly before **去爬山**!",
        ],
        explanation:
          "**秋天我们常常去爬山。** ('In autumn we often go hiking') follows clean Mandarin order: Season (**秋天**) + Subject (**我们**) + Frequency Adverb (**常常**) + Verb (**去爬山**).",
      },
      {
        id: "seasons-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "seasonal-activities",
        question: "Your cousin in Shanghai writes: **四月我们全家去公园野餐、看花。** Which season is April in Shanghai?",
        options: [
          "冬天 (winter)",
          "春天 (spring)",
          "秋天 (autumn)",
          "夏天 (summer)",
        ],
        answerIndex: 1,
        hints: [
          "Shanghai is in the Northern Hemisphere (**四月** = April).",
          "Check the clues: **野餐** (picnic) and **看花** (viewing blooming flowers)!",
        ],
        explanation:
          "April (**四月**) in Shanghai is **春天** (*chūntiān*, spring), when families have picnics (**野餐**) and admire spring blossoms (**看花**).",
      },
      {
        id: "seasons-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "Why do many Singaporeans carry **一件外套** when going to a cinema or library even though outside is 32°C?",
        options: [
          "因为外面正在下大雪。",
          "因为新加坡冬天零下十度。",
          "因为电影院和图书馆里的空调太冷了！",
          "因为新加坡人最讨厌穿T恤衫。",
        ],
        answerIndex: 2,
        hints: [
          "Singapore never snows or drops below zero outdoors!",
          "Think about indoor **空调** (*kōngtiáo*, air-conditioning).",
        ],
        explanation:
          "**因为电影院和图书馆里的空调太冷了！** ('Because the air-conditioning inside cinemas and libraries is way too cold!') is a classic real-life Singapore survival tip!",
      },
      {
        id: "seasons-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "singapore-vs-beijing",
        question: "Check the position of **都** (*dōu*, all) in these four sentences. Which one is **100% grammatical**?",
        options: [
          "都新加坡一年四季很热。",
          "新加坡都一年四季很热。",
          "新加坡一年四季很热都。",
          "新加坡一年四季都很热。",
        ],
        answerIndex: 3,
        hints: [
          "In Mandarin, **都** ('all / every') MUST sit **after** the 'every/all' noun phrase it summarises (**一年四季**, all four seasons) and **before** the predicate (**很热**)!",
          "Test where **一年四季** ends and **很热** begins.",
        ],
        explanation:
          "**新加坡一年四季都很热。** places **都** right after **一年四季** ('all four seasons of the year') and directly before **很热**.",
      },
      {
        id: "seasons-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "seasonal-activities",
        question: "Meimei lives in Singapore. In **June (六月)** she flies to **Sydney (悉尼)**, and in **December (十二月)** she flies to **Harbin (哈尔滨)**. What clothes should she pack for **BOTH** trips?",
        options: [
          "Warm/winter clothes (毛衣 / 大衣 / 羽绒服) for BOTH trips, because June is winter in Sydney and December is winter in Harbin!",
          "T-shirts and swimsuits (T恤衫 / 泳衣) for BOTH trips, because June and December are summer everywhere",
          "Swimsuits for Harbin in December and puffer jackets for Sydney in December",
          "Shorts only, because neither Sydney nor Harbin has seasons",
        ],
        answerIndex: 0,
        hints: [
          "Sydney (**悉尼**) is in the Southern Hemisphere — what season is **六月** (June) in Australia?",
          "Harbin (**哈尔滨**) is in Northeast China — what season is **十二月** (December) there?",
        ],
        explanation:
          "**六月** (June) is **冬天** in Southern Hemisphere Sydney (cool/chilly, needing **毛衣 / 外套**), and **十二月** (December) is freezing **冬天** in Northern Hemisphere Harbin (needing **羽绒服 / 手套**)! So Meimei packs cold-weather layers on both holidays!",
      },
      {
        id: "seasons-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "describing-favourite-season",
        question: "Read Xiaoming's outfit description:\n> **今天哥哥穿一件白衬衫、一条黑裤子和一双皮鞋，还系了一条蓝色的领带。**\nCount how many **distinct items** (not counting individual left/right shoes separately) Xiaoming's brother has on:",
        options: [
          "3 items",
          "4 items",
          "5 items",
          "6 items",
        ],
        answerIndex: 1,
        hints: [
          "Count each classified phrase: **一件白衬衫**, **一条黑裤子**, **一双皮鞋**, and **一条蓝色的领带**.",
          "How many items are listed across the two clauses?",
        ],
        explanation:
          "He wears **4 items**: 1 white shirt (**一件白衬衫**), 1 pair of black trousers (**一条黑裤子**), 1 pair of leather shoes (**一双皮鞋**), plus 1 blue necktie (**一条蓝色的领带**)!",
      },
    ],
  },

  {
    id: "seasons-m3",
    title: "Seasons Paper 3 — IGCSE Reading, Suitcase Logic & Style",
    questions: [
      {
        id: "seasons-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "clothing-chuan-dai",
        question: "Which word means **'green'** in Mandarin — and requires the **ü** vowel in Pinyin?",
        options: [
          "蓝色 (lánsè)",
          "黄色 (huángsè)",
          "绿色 (lǜsè)",
          "黑色 (hēisè)",
        ],
        answerIndex: 2,
        hints: ["Think of green tea (**绿茶** *lǜchá*) — starts with **lǜ-**!"],
        explanation:
          "**绿色** (*lǜsè*) means green (typed `lv4 se4` on keyboards because of the umlaut **ü**). **蓝色** is blue, **黄色** is yellow, and **黑色** is black.",
      },
      {
        id: "seasons-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "seasonal-activities",
        question: "What is the difference between **滑雪** (*huá xuě*) and **滑冰** (*huá bīng*)?",
        options: [
          "滑雪 means swimming; 滑冰 means surfing.",
          "滑雪 means hiking; 滑冰 means picnicking.",
          "滑雪 means building a snowman; 滑冰 means drinking iced tea.",
          "滑雪 means skiing (on snow 雪); 滑冰 means ice-skating (on ice 冰).",
        ],
        answerIndex: 3,
        hints: ["**滑** means glide/slide — check **雪** (snow) vs **冰** (ice)!"],
        explanation:
          "**滑雪** = glide on snow (**skiing**), while **滑冰** = glide on ice (**ice-skating**). You can **滑冰** at an indoor rink in Singapore, whereas **滑雪** usually needs snowy mountains!",
      },
      {
        id: "seasons-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "You lose ONE sock in the washing machine! Which measure word describes **one single sock** (*one odd sock*) instead of a pair?",
        options: [
          "一只袜子 (yì zhī wàzi)",
          "一双袜子 (yì shuāng wàzi)",
          "一条袜子 (yì tiáo wàzi)",
          "一顶袜子 (yì dǐng wàzi)",
        ],
        answerIndex: 0,
        hints: [
          "**双** (*shuāng*) always means a matching pair (2 socks).",
          "Which classifier is used for one single shoe, sock, hand or small animal?",
        ],
        explanation:
          "**一只袜子** (*yì zhī wàzi*) means **one single sock**, whereas **一双袜子** means a pair of two socks! That same **只** vs **双** distinction applies to shoes (**一只鞋** vs **一双鞋**).",
      },
      {
        id: "seasons-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "At a clothing shop on Orchard Road (**乌节路**), you try on a jumper and say: **这件毛衣不大不小，很合适！** What are you telling the shop assistant?",
        options: [
          "This jumper is way too expensive and ugly!",
          "This jumper is neither too big nor too small — it fits really well!",
          "This jumper is too thick for Singapore's weather!",
          "Do you have this jumper in another colour?",
        ],
        answerIndex: 1,
        hints: [
          "**不大不小** = neither too big nor too small.",
          "**合适** (*héshì*) = suitable / right fit!",
        ],
        explanation:
          "**不大不小，很合适！** means 'Neither too big nor too small — it fits very well!'. Notice how **不 + Adj + 不 + Adj** expresses the ideal 'just right' middle ground.",
      },
      {
        id: "seasons-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "four-seasons",
        question: "Which city in southwest China is nicknamed **春城** (*Spring City*) because its climate is **四季如春** (18–22°C all year)?",
        options: [
          "哈尔滨 (Harbin)",
          "北京 (Beijing)",
          "昆明 (Kunming)",
          "伦敦 (London)",
        ],
        answerIndex: 2,
        hints: [
          "Harbin is the Ice City (**冰城**), and Beijing has hot summers and freezing winters (**四季分明**).",
          "Look for the Yunnan capital famous for **四季如春**!",
        ],
        explanation:
          "**昆明** (*Kūnmíng*) in Yunnan sits on a mild plateau where flowers bloom all year (**四季如春**, like spring in all four seasons), earning the title **春城**!",
      },
      {
        id: "seasons-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "singapore-vs-beijing",
        question: "How do you say **'Autumn in Shanghai is cooler than Singapore'** without any grammar slips?",
        options: [
          "上海的秋天比新加坡很凉快。",
          "上海的秋天凉快比新加坡。",
          "新加坡比上海的秋天凉快。",
          "上海的秋天比新加坡凉快。",
        ],
        answerIndex: 3,
        hints: [
          "Put **上海的秋天** as A, **新加坡** as B, and **凉快** as the bare adjective.",
          "Check that **很** is NOT present!",
        ],
        explanation:
          "**上海的秋天比新加坡凉快。** follows **A + 比 + B + Adjective** cleanly and states the right factual direction.",
      },
      {
        id: "seasons-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "clothing-chuan-dai",
        question: "Which word refers specifically to the **thick down / puffer jacket** essential for −15°C winters in Beijing or Harbin?",
        options: [
          "羽绒服 (yǔróngfú)",
          "衬衫 (chènshān)",
          "泳衣 (yǒngyī)",
          "短裤 (duǎnkù)",
        ],
        answerIndex: 0,
        hints: [
          "**羽** (*yǔ*) means feather and **绒** (*róng*) means soft down fluff!",
          "Classifier is **件**.",
        ],
        explanation:
          "**羽绒服** (*yǔróngfú*, feather-down garment) means **down / puffer jacket**. **衬衫** is a light buttoned shirt, **泳衣** is a swimsuit, and **短裤** is shorts.",
      },
      {
        id: "seasons-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "seasonal-activities",
        question: "Read Dad's packing note:\n> **下个星期去北京开会。北京现在十月，秋高气爽，白天十八度，晚上八度。**\nWhich suitcase list makes the most sense for Dad?",
        options: [
          "三条短裤、两件泳衣、一双拖鞋",
          "两件衬衫、一件毛衣、一件外套、两条长裤和一双皮鞋",
          "三件厚羽绒服、两双手套去堆雪人",
          "只带一把雨伞，不带任何衣服",
        ],
        answerIndex: 1,
        hints: [
          "October (**十月**) in Beijing is crisp autumn (**秋高气爽**): 18 degrees by day, 8 degrees at night, and Dad is going for work meetings (**开会**).",
          "Pick smart layering clothes suitable for 8–18 degrees!",
        ],
        explanation:
          "At 8–18 degrees for business meetings (**开会**), **两件衬衫、一件毛衣、一件外套、两条长裤和一双皮鞋** (shirts, a jumper, a jacket, trousers and leather shoes) is spot-on!",
      },
      {
        id: "seasons-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "clothing-chuan-dai",
        question: "Check the tone sandhi of **手表** (*shǒubiǎo*, wristwatch) and its verb + classifier. Which sentence is completely accurate?",
        options: [
          "爸爸穿着一条手表 (spoken shǒubiǎo).",
          "爸爸带着一顶手表 (spoken shòubiào).",
          "爸爸戴着一块手表 (where shǒu + biǎo is spoken shóubiǎo).",
          "爸爸穿了一双手表 (spoken shōubiāo).",
        ],
        answerIndex: 2,
        hints: [
          "Watches are wrist accessories → verb **戴** (*dài*), classifier **块** (*kuài*) or **只** (*zhī*).",
          "Both **手** (*shǒu*) and **表** (*biǎo*) are 3rd-tone characters — apply the 3rd + 3rd tone sandhi rule!",
        ],
        explanation:
          "**爸爸戴着一块手表** uses the accessory verb **戴** and classifier **块**, and because **手** (3rd) + **表** (3rd) stand together, **手** shifts to 2nd tone in speech (**shóubiǎo**).",
      },
      {
        id: "seasons-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "describing-favourite-season",
        question: "Read Linlin's IGCSE paragraph carefully:\n> **我从小住在新加坡，从来没见过真正的雪。虽然我很怕冷，但是我最想去哈尔滨看冬天的冰灯！如果今年十二月我们去哈尔滨，我一定要买一件红色的羽绒服和一双厚靴子。**\nWhich statement about Linlin is **TRUE**?",
        options: [
          "She grew up in Harbin and skis every winter.",
          "She loves freezing weather and never feels cold.",
          "She already owns three red puffer jackets in Singapore.",
          "She has never seen real snow before, feels the cold easily, yet dreams of seeing Harbin's winter ice lanterns.",
        ],
        answerIndex: 3,
        hints: [
          "Check **从来没见过真正的雪** (*has never seen real snow*) — note **过** for life experience!",
          "Check **虽然我很怕冷，但是…** (*although I am very afraid of the cold, …*).",
        ],
        explanation:
          "**从来没见过真正的雪** proves she has never seen real snow, **很怕冷** means she feels the cold easily, and **最想去哈尔滨看冬天的冰灯** shows she still wants to visit Harbin's ice lanterns!",
      },
      {
        id: "seasons-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "describing-favourite-season",
        question: "Why is **我最喜欢季节是夏天** slightly ungrammatical, and how do you fix it?",
        options: [
          "Add 的 after 最喜欢 → 我最喜欢的季节是夏天。 (or drop 是季节 and say 我最喜欢夏天。)",
          "Change 是 to 很 → 我最喜欢季节很夏天。",
          "Put 最 after 喜欢 → 我喜欢最季节是夏天。",
          "Change 夏天 to 热 → 我最喜欢季节是热。",
        ],
        answerIndex: 0,
        hints: [
          "In **我最喜欢___季节**, the clause **我最喜欢** ('that I like best') modifies the noun **季节** ('season').",
          "What particle connects a multi-character modifier to a noun in Mandarin?",
        ],
        explanation:
          "When **我最喜欢** modifies the noun **季节**, Mandarin requires **的**: **我最喜欢的季节是夏天。** Alternatively, use **最喜欢** directly as the main verb: **我最喜欢夏天。**",
      },
      {
        id: "seasons-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "clothing-chuan-dai",
        question: "Look at these four items: **① 雨伞  ② 围巾  ③ 太阳镜  ④ 羽绒服**. Match their classifiers in order ① → ② → ③ → ④:",
        options: [
          "顶 、 条 、 双 、 件",
          "把 、 条 、 副 、 件",
          "把 、 件 、 副 、 条",
          "件 、 条 、 把 、 双",
        ],
        answerIndex: 1,
        hints: [
          "① **雨伞** (umbrella handle) = **把**; ② **围巾** (long scarf) = **条**.",
          "③ **太阳镜** (sunglasses) = **副**; ④ **羽绒服** (puffer jacket) = **件**.",
        ],
        explanation:
          "**一把雨伞** (handle → **把**), **一条围巾** (long strip → **条**), **一副太阳镜** (glasses set → **副**), and **一件羽绒服** (upper-body coat → **件**).",
      },
      {
        id: "seasons-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "seasonal-activities",
        question: "In heartland Singapore, what footwear does **去巴刹买菜的时候，叔叔常常穿一双拖鞋** describe?",
        options: [
          "Winter snow boots",
          "Formal black leather shoes",
          "Slippers / flip-flops",
          "Ice skates",
        ],
        answerIndex: 2,
        hints: [
          "**巴刹** (*bāshā*) is a Singapore wet market.",
          "**拖鞋** (*tuōxié*) are casual open shoes you slip your feet into!",
        ],
        explanation:
          "**拖鞋** (*tuōxié*) means **slippers / flip-flops** — everyday casual footwear across Singapore neighbourhoods!",
      },
      {
        id: "seasons-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "singapore-vs-beijing",
        question: "Spot the **ONLY** sentence below with **100% accurate Mandarin grammar**:",
        options: [
          "伦敦的春天没有新加坡那么很热。",
          "哈尔滨的冬天比北京很冷得多。",
          "新加坡的气候跟马来西亚差不多一样。",
          "北京的秋天比上海一点儿凉快。",
        ],
        answerIndex: 2,
        hints: [
          "Check each distractor for classic traps: **那么 + 很** (illegal!), **比 + 很** (illegal!), and **一点儿** placed *before* the adjective (illegal!).",
          "Verify **A 跟 B 差不多一样**.",
        ],
        explanation:
          "**新加坡的气候跟马来西亚差不多一样。** ('Singapore's climate is almost the same as Malaysia's') is completely natural! Never combine **那么很**, never use **比…很**, and always put **一点儿** *after* the adjective (**凉快一点儿**).",
      },
      {
        id: "seasons-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "describing-favourite-season",
        question: "Choose the strongest IGCSE conclusion sentence combining **season preference**, **clothes/accessories** AND **activity**:",
        options: [
          "我喜欢秋天，秋天好，我穿衣服去公园。",
          "我最喜欢的季节是秋天，因为秋天秋高气爽，我可以穿一件舒服的毛衣和一双运动鞋，跟家人一起去香山爬山、看红叶！",
          "虽然我最喜欢秋天，所以我戴一件毛衣和一双牛仔裤去爬山。",
          "秋天比夏天很凉快，我穿帽子去滑雪。",
        ],
        answerIndex: 1,
        hints: [
          "Eliminate sentences that say *戴毛衣*, *一双牛仔裤*, *穿帽子* or *比夏天很凉快*.",
          "Look for **我最喜欢的季节是…**, **秋高气爽**, accurate **穿 + 件/双**, and **跟家人一起去…**!",
        ],
        explanation:
          "**我最喜欢的季节是秋天，因为秋天秋高气爽，我可以穿一件舒服的毛衣和一双运动鞋，跟家人一起去香山爬山、看红叶！** hits every top-band IGCSE criterion with zero classifier or verb errors!",
      },
    ],
  },
];
