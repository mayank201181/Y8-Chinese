import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Why does English lazily use 'play' for basketball, football, piano, violin, flute, and chess — while Mandarin insists on six different action verbs that mirror the exact physics of your hands, feet, and breath?",
  didYouKnow: [
    "Look closely at **乒** (*pīng*) and **乓** (*pāng*) in **乒乓球** (table tennis): take the character **兵** (*bīng*, soldier) and flick off its right leg for **乒**, then flick off its left leg for **乓** — a visual cartoon of a ping-pong ball bouncing left and right across the net!",
    "In **篮球** (*lánqiú*, basketball), **篮** carries the **竹** (bamboo) radical on top because when James Naismith invented basketball in 1891, players literally threw the ball into woven **peach baskets**!",
    "Almost every secondary school in Singapore has a **华乐团** (*Huáyuètuán*, Chinese Orchestra) CCA, structured like a Western symphony orchestra into four sections: bowed strings (**拉弦**, like **二胡**), plucked strings (**弹拨**, like **古筝** and **琵琶**), wind (**吹管**, like **笛子**), and percussion (**打击**).",
    "Singapore badminton star Loh Kean Yew (**骆建佑**) made history in 2021 as Singapore's first BWF World Champion in men's singles — inspiring packed evening courts at every community-club **体育馆** across the island!",
  ],
  activities: [
    {
      title: "Charades Freeze-Frame: Name That Verb! (动作猜动词)",
      emoji: "🎭",
      materials: [
        "12 hobby slips: 打羽毛球, 踢足球, 骑自行车, 弹钢琴, 拉小提琴, 吹笛子, 下棋, 拍照, 游泳, 滑冰, 打太极拳, 画画",
      ],
      steps: [
        "One player draws a slip and mimes ONLY the hand/foot/mouth motion silently for 3 seconds.",
        "Teammates must shout **first** the single Mandarin action verb (**打! 踢! 弹! 拉! 吹! 骑! 下!**) and **then** a full STPV sentence (e.g. **哥哥星期六在体育馆打羽毛球！**).",
        "Deduct 1 point immediately if anyone accidentally says **玩** for a sport or instrument!",
      ],
      maths:
        "Links somatic muscle memory directly to Mandarin's physical-manner verbs (打/踢/弹/拉/吹/骑/下) and reinforces STPV sentence framing.",
    },
    {
      title: "The Joseph Schooling Modal Challenge (会 vs 能 vs 可以)",
      emoji: "🏊",
      materials: [
        "Three large signs on your desk labelled 会 (Skill), 能 (Situation/Capability), and 可以 (Permission)",
      ],
      steps: [
        "Read out English 'can / can't' scenarios at speed: *'Can I borrow a racket?'*, *'My sister can play the erhu'*, *'It's pouring with rain so we can't play tennis'*, *'No photography allowed in the concert hall!'*.",
        "Slap the matching Mandarin modal card within 2 seconds and translate the full sentence aloud.",
        "Bonus round: add a **得** (*de*) degree complement to every **会** sentence (e.g. **她拉二胡拉得非常好！**).",
      ],
      maths:
        "Trains instant semantic disambiguation of English 'can' into Mandarin's three distinct modal categories plus post-verbal 得 complements.",
    },
  ],
  history: {
    title: "Cuju (蹴鞠): China's 2,300-Year-Old Ancestor of Football",
    story:
      "Next time you say **踢足球** (*tī zúqiú*, kick-foot-ball), remember that FIFA officially recognises ancient China's **蹴鞠** (*cùjū* — literally 'kick-ball', notice the **足** foot radical in **蹴**!) as the earliest recorded form of football! Played over 2,300 years ago during the Warring States period and Han dynasty to train soldiers' agility, *cuju* grew so popular by the Tang and Song dynasties that imperial palaces had grand pitches, women's teams competed in silk uniforms, and players scored by kicking a feather-stuffed leather ball through a high net opening without ever touching it with their hands. Across two millennia, the character radical **足** (foot) has stayed right at the heart of Chinese football!",
  },
};
