import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Why does a Year 8 student in Singapore or Beijing already know all 12 months and 7 days of the week the moment they can count from 1 to 12 — while English learners have to memorise Roman emperors (*July, August*) and Norse gods (*Thursday, Friday*)?",
  didYouKnow: [
    "Because Mandarin months (**一月…十二月**) and number words (**一…十**) are short one-syllable building blocks, psychologists found that Chinese speakers hold ~2 extra digits in short-term working memory compared with speakers of longer multi-syllable number systems!",
    "In Singapore and southern China, **礼拜** (*lǐbài*, literally 'worship service') became an everyday word for 'week' (**礼拜一** to **礼拜天**) when 19th-century coastal port cities adopted the 7-day cycle anchored around Sunday church services.",
    "Why do fish, dragons, rivers, roads, and trousers all share **条** (*tiáo*)? Originally **条** meant a slender tree branch (**木** wood at the bottom!), and over two millennia it expanded to become Mandarin's master classifier for anything long, sinuous, and flowing.",
    "On cheques, banknotes, and bank slips in China and Singapore, numbers have special 'anti-forgery' characters (**大写数字**): **一, 二, 三** are written **壹, 贰, 叁** so nobody can turn **一** (1) into **十** (10) or **二** (2) into **三** (3) with one extra pen stroke!",
  ],
  activities: [
    {
      title: "Hawker & Orchard Road Classifier Snap",
      emoji: "🃏",
      materials: ["20 small paper cards", "Marker pen"],
      steps: [
        "Write 10 classifier cards (个, 口, 本, 杯, 碗, 盘, 件, 条, 双, 张) and 10 noun cards (词典, 绿茶, 牛肉面, 鸡饭, 衬衫, 裤子, 筷子, 小鱼, 电影票, 桌子).",
        "Shuffle both piles face-down and flip one classifier card + one noun card simultaneously.",
        "If they form a genuine idiomatic pair, shout '两点/两[MW][Noun]!' using 两 (never 二!) to win both cards!",
      ],
      maths: "Automates visual shape-to-classifier matching (本/杯/碗/盘/件/条/双/张) alongside mandatory 两 before classifiers.",
    },
    {
      title: "Five-Day Calendar Time-Travel Challenge",
      emoji: "📆",
      materials: ["Phone calendar", "Scrap paper"],
      steps: [
        "Pick a tricky month-boundary date (like 28 Feb, 30 Apr, 31 May, or 31 Oct) and announce it in Mandarin as 前天 or 昨天.",
        "Your partner has 10 seconds to work out 明天 or 后天 and say the full Month + Date + Weekday aloud in Big → Small order!",
        "Score bonus points for catching Sunday (星期天, never *星期七*!) and February (二月, never *两月*!).",
      ],
      maths: "Sharpens IGCSE 0547 Listening date-shift comprehension across 前天 · 昨天 · 今天 · 明天 · 后天.",
    },
  ],
  history: {
    title: "How Ancient Tally Sticks & Bamboo Slips Shaped Chinese Measure Words",
    story:
      "Over 3,000 years ago on Shang-dynasty oracle bones (**甲骨文**), Chinese scribes counted shells and Jade pieces by writing Noun + Number + Repeat-Noun (for instance, 'jade ten-strings'). Before paper was invented during the Han dynasty, books were written vertically on narrow strips of bamboo tied together with silk cords, and official documents were stretched flat or rolled into scrolls — giving rise to shape-rich classifiers like **本** (bound root/volume), **张** (stretched flat sheet), and **条** (slender branch/strip). When Hokkien, Teochew, Cantonese, and Mandarin speakers later converged in Singapore, every dialect preserved this vivid classifier system — which is why ordering at a Chinatown hawker stall today is still a living museum of ancient visual geometry!",
  },
};
