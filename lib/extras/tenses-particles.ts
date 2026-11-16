import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How does a language with ZERO verb conjugations — where **吃** never changes between *eat*, *ate*, *eaten*, and *eating* — express finer shades of experience and change than English? Welcome to Mandarin's precision particle engine: **了**, **过**, **正在**, and the legendary **不 vs 没** split!",
  didYouKnow: [
    "In Singlish, adding *'liao'* at the end of a sentence (*'Eat liao!'*, *'Rain liao!'*, *'No more liao!'*) comes straight from Hokkien/Mandarin **了** (*liǎo / le*), preserving BOTH of Mandarin **了**'s exact jobs — completed action AND change of state!",
    "Why does **上个星期** (*'up week'*) mean *last week* while **下个星期** (*'down week'*) means *next week*? Traditional Chinese books and calendar scrolls were written **vertically from top to bottom**, so earlier events literally sat **above** (**上**) and later events sat **below** (**下**)!",
    "The particle **了** (*le*, neutral tone) is actually the fast, unstressed cousin of the full verb **了** (*liǎo*, 3rd tone = *to finish/complete*), still heard in phrases like **受不了** (*shòu bu liǎo* = *can't stand it*)!",
    "Unlike French, Spanish, or English, Mandarin learners never have to memorise 50 irregular past-participle tables — once you know a verb like **去** or **买**, snapping **了**, **过**, **正在**, or **打算** onto it unlocks every timeframe instantly.",
  ],
  activities: [
    {
      title: "Two Truths and a Lie: 过 (guo) Edition",
      emoji: "🕵️",
      materials: [
        "One slip of paper per player",
        "A pen",
      ],
      steps: [
        "Each player writes **three Mandarin life-experience statements** using **Verb + 过** or **从来没 + Verb + 过** — two true and one bluff (e.g. **我去过哈尔滨两次**, **我吃过辣椒螃蟹**, **我从来没看过下雪**).",
        "Classmates interrogate the speaker in Mandarin using **什么时候…？** (*When did you…?*) — forcing the speaker to switch from experience **过** to specific past **了** (**我去年十二月去了哈尔滨，看了冰灯！**)!",
        "Vote on which **过** statement was the bluff!",
      ],
      maths:
        "Trains instant switching between **Verb + 过** (general life experience) and **Time + Verb + 了** (specific past episode details).",
    },
    {
      title: "不 vs 没 Lightning Paddles",
      emoji: "🏓",
      materials: [
        "One red card labelled **不 (bù / bú)** and one teal card labelled **没 (méi)** per player",
      ],
      steps: [
        "The caller reads 15 rapid-fire prompts mixing timeframes and verbs (e.g. **我 ______ 有姐姐**, **昨天 ______ 下雨**, **明天我 ______ 去**, **昨天天气 ______ 冷**, **我 ______ 吃过榴莲**, **爸爸平时 ______ 喝咖啡**).",
        "Players slam up **不** or **没** within 2 seconds — and anyone who holds up **没** for a past verb must shout **'NO 了!'** (or **'KEEP 过!'** if it's an experience sentence).",
      ],
      maths:
        "Automates the **不** (habit / future / adjective / 是) vs **没** (有 / past event / 过 / ongoing) reflex under exam time pressure.",
    },
  ],
  history: {
    title: "From Classical 矣 (yǐ) to Everyday 了 (le): How Spoken Chinese Invented Aspect Particles",
    story:
      "Two thousand years ago in Classical Chinese, writers marked a new state at the end of a sentence with the literary character **矣** (*yǐ*). During the Tang and Song dynasties (618–1279 CE), storytellers in bustling city teahouses began finishing vivid action clauses with the verb **了** (*liǎo*, 'finish'): first *Verb + Object + 了* ('ate the meal — finished!'), and gradually sliding **了** right up behind the verb (**吃了饭**) while softening its pronunciation to a feather-light neutral **le**. Over the same centuries, **过** (*cross over*) and **着** (*attach to*) grammaticalised beside it, giving modern Mandarin from Beijing to Singapore one of the world's crispest aspect systems.",
  },
};
