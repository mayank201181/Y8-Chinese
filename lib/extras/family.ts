import type { TopicExtras } from "../types";

export const familyExtras: TopicExtras = {
  topicId: "family",
  hook:
    "Chinese has no plain word for 'brother' — you must say whether he's older ({{哥哥|gēge}}) or younger ({{弟弟|dìdi}}). In a Chinese family, age order is built into the language itself.",
  didYouKnow: [
    "Chinese splits grandparents by side of the family: dad's parents are {{爷爷|yéye|grandpa}} and {{奶奶|nǎinai|grandma}}, but mum's parents are {{外公|wàigōng}} and {{外婆|wàipó}} — 外 literally means 'outside', because traditionally you belonged to your father's family line.",
    "The character {{妈|mā|mum}} is a two-part machine: 女 (woman) gives the meaning and {{马|mǎ|horse}} gives the sound. Most Chinese characters are built this way — one half hints at meaning, the other at pronunciation.",
    "Many Singaporean families mix languages for relatives: 'Ah Gong' and 'Ah Ma' for grandpa and grandma come from Hokkien, while the same kids use Mandarin 爷爷 and 奶奶 at school. Same family tree, three languages.",
    "Because of the older/younger split, Chinese needs at least eight words just for cousins — for example {{表哥|biǎogē}} is an older male cousin on your mum's side. English gets away with one word; Chinese encodes the whole family map.",
  ],
  activities: [
    {
      title: "Label your real family tree",
      steps: [
        "Draw your family tree on a big piece of paper — grandparents at the top, you and any siblings at the bottom.",
        "Label every person with the correct Chinese word: watch the traps — dad's mum is {{奶奶|nǎinai}} but mum's mum is {{外婆|wàipó}}.",
        "Say one full sentence per person out loud: {{我有一个哥哥。|Wǒ yǒu yí gè gēge.|I have one older brother.}}",
        "Photograph your tree and test yourself at the weekend: cover the labels and recite them from memory.",
      ],
    },
    {
      title: "Family interview in Mandarin",
      steps: [
        "Ask a parent or grandparent: {{你有几个兄弟姐妹？|Nǐ yǒu jǐ gè xiōngdì jiěmèi?|How many siblings do you have?}}",
        "Record their answer and turn it into Chinese sentences: {{妈妈有两个妹妹。|Māma yǒu liǎng gè mèimei.|Mum has two younger sisters.}}",
        "If your family speaks Hokkien, Cantonese or Teochew, collect one kinship word from that language and find its Mandarin twin.",
        "Bonus: count the total number of people in your extended family in Chinese — out loud, no English allowed.",
      ],
    },
  ],
  interactives: ["measure-word", "tone-lab"],
  bonusDiagrams: [
    {
      id: "family-tree-diagram",
      title: "The Chinese family tree — both sides matter",
      svg:
        "<svg viewBox='0 0 360 210' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Family tree showing paternal grandparents yeye and nainai, maternal grandparents waigong and waipo, parents baba and mama, and the children gege, wo, and meimei'>" +
        "<rect x='14' y='10' width='70' height='40' rx='8' fill='#ffe4e6' stroke='#fda4af'/>" +
        "<text x='49' y='27' text-anchor='middle' font-size='13'>爷爷 奶奶</text>" +
        "<text x='49' y='42' text-anchor='middle' font-size='9' fill='#64748b'>yéye · nǎinai</text>" +
        "<text x='49' y='62' text-anchor='middle' font-size='8' fill='#94a3b8'>dad's parents</text>" +
        "<rect x='276' y='10' width='70' height='40' rx='8' fill='#e0f2fe' stroke='#7dd3fc'/>" +
        "<text x='311' y='27' text-anchor='middle' font-size='13'>外公 外婆</text>" +
        "<text x='311' y='42' text-anchor='middle' font-size='9' fill='#64748b'>wàigōng · wàipó</text>" +
        "<text x='311' y='62' text-anchor='middle' font-size='8' fill='#94a3b8'>mum's parents</text>" +
        "<line x1='49' y1='50' x2='150' y2='95' stroke='#cbd5e1' stroke-width='2'/>" +
        "<line x1='311' y1='50' x2='210' y2='95' stroke='#cbd5e1' stroke-width='2'/>" +
        "<rect x='115' y='95' width='60' height='40' rx='8' fill='#ffe4e6' stroke='#fda4af'/>" +
        "<text x='145' y='112' text-anchor='middle' font-size='13'>爸爸</text>" +
        "<text x='145' y='127' text-anchor='middle' font-size='9' fill='#64748b'>bàba</text>" +
        "<rect x='185' y='95' width='60' height='40' rx='8' fill='#e0f2fe' stroke='#7dd3fc'/>" +
        "<text x='215' y='112' text-anchor='middle' font-size='13'>妈妈</text>" +
        "<text x='215' y='127' text-anchor='middle' font-size='9' fill='#64748b'>māma</text>" +
        "<line x1='180' y1='135' x2='80' y2='165' stroke='#cbd5e1' stroke-width='2'/>" +
        "<line x1='180' y1='135' x2='180' y2='165' stroke='#cbd5e1' stroke-width='2'/>" +
        "<line x1='180' y1='135' x2='280' y2='165' stroke='#cbd5e1' stroke-width='2'/>" +
        "<rect x='50' y='165' width='60' height='38' rx='8' fill='#fef9c3' stroke='#fde047'/>" +
        "<text x='80' y='181' text-anchor='middle' font-size='13'>哥哥</text>" +
        "<text x='80' y='196' text-anchor='middle' font-size='9' fill='#64748b'>gēge (older)</text>" +
        "<rect x='150' y='165' width='60' height='38' rx='8' fill='#dcfce7' stroke='#86efac'/>" +
        "<text x='180' y='181' text-anchor='middle' font-size='13'>我</text>" +
        "<text x='180' y='196' text-anchor='middle' font-size='9' fill='#64748b'>wǒ (me!)</text>" +
        "<rect x='250' y='165' width='60' height='38' rx='8' fill='#fef9c3' stroke='#fde047'/>" +
        "<text x='280' y='181' text-anchor='middle' font-size='13'>妹妹</text>" +
        "<text x='280' y='196' text-anchor='middle' font-size='9' fill='#64748b'>mèimei (younger)</text>" +
        "</svg>",
      caption:
        "Dad's side (pink) and mum's side (blue) get different grandparent words — 外 means 'outside'. Siblings split by age: 哥哥 above you, 妹妹 below.",
    },
  ],
};
