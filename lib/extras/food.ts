import type { TopicExtras } from "../types";

export const foodExtras: TopicExtras = {
  topicId: "food",
  hook:
    "Singapore's hawker culture is on the UNESCO heritage list — and every stall is a free Mandarin classroom. Today's homework: {{我要一碗面。|Wǒ yào yì wǎn miàn.|I'd like a bowl of noodles.}}",
  didYouKnow: [
    "{{筷子|kuàizi|chopsticks}} hides a superstition: boat people avoided the old word 箸 (zhù) because it sounded like {{住|zhù|to stop}} — bad luck for a boat! They flipped it to {{快|kuài|fast}}, added the bamboo radical on top, and 'speedy sticks' stuck.",
    "{{饭|fàn}} means both 'cooked rice' and 'meal' — so {{吃饭|chīfàn|to eat}} is literally 'eat rice', even if you're having pizza. That's how central rice is to Chinese food culture.",
    "Singapore's hawker culture joined the UNESCO Intangible Cultural Heritage list in 2020. Classic dishes carry their Chinese names with them: {{海南鸡饭|Hǎinán jīfàn|Hainanese chicken rice}} and {{炒粿条|chǎo guǒtiáo|char kway teow}} — that second one is Mandarin borrowed back from Teochew!",
    "Some food words are pure sound-loans between English and Chinese: {{咖啡|kāfēi|coffee}} and {{巧克力|qiǎokèlì|chocolate}} mimic the English sounds, while 'hot dog' got translated word-for-word into {{热狗|règǒu|hot + dog}}.",
  ],
  activities: [
    {
      title: "Order your lunch in Mandarin at a hawker centre",
      steps: [
        "Pick a Chinese-run stall (chicken rice, noodles, and zi char stalls are perfect).",
        "Rehearse in the queue: {{我要一份海南鸡饭。|Wǒ yào yí fèn Hǎinán jīfàn.|I'd like one Hainanese chicken rice.}}",
        "Level up with a drink from the drinks stall: {{一杯冰水|yì bēi bīng shuǐ|one iced water}} or {{我要热的|wǒ yào rè de|I want it hot}}.",
        "Finish with {{谢谢|xièxie|thanks}} — and if the uncle or auntie replies in Mandarin, you've officially had your first transaction in Chinese.",
      ],
    },
    {
      title: "Fridge raid: label everything",
      steps: [
        "Sticky-note eight things in your kitchen: {{牛奶|niúnǎi|milk}}, {{鸡蛋|jīdàn|eggs}}, {{苹果|píngguǒ|apples}}, {{米饭|mǐfàn|rice}}, {{水|shuǐ|water}}, {{茶|chá|tea}}, {{面包|miànbāo|bread}}, {{鱼|yú|fish}}.",
        "Say the measure word combo every time you grab one: {{一个苹果|yí gè píngguǒ|an apple}}, {{一杯牛奶|yì bēi niúnǎi|a glass of milk}}, {{一条鱼|yì tiáo yú|a fish}}.",
        "At dinner, announce one like or dislike: {{我不喜欢吃鱼。|Wǒ bù xǐhuan chī yú.|I don't like eating fish.}}",
        "After one week, remove the labels and quiz yourself while making breakfast.",
      ],
    },
  ],
  interactives: ["measure-word", "money-counter"],
  bonusDiagrams: [
    {
      id: "food-place-setting",
      title: "A Chinese place setting",
      svg:
        "<svg viewBox='0 0 320 180' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Chinese place setting showing a plate, rice bowl, chopsticks, spoon and teacup with their Chinese names'>" +
        "<rect x='0' y='0' width='320' height='180' rx='12' fill='#fff7ed'/>" +
        "<circle cx='120' cy='90' r='52' fill='#ffffff' stroke='#fda4af' stroke-width='3'/>" +
        "<circle cx='120' cy='90' r='38' fill='none' stroke='#fecdd3' stroke-width='2'/>" +
        "<text x='120' y='86' text-anchor='middle' font-size='15'>盘子</text>" +
        "<text x='120' y='102' text-anchor='middle' font-size='9' fill='#64748b'>pánzi · plate</text>" +
        "<circle cx='229' cy='60' r='26' fill='#ffffff' stroke='#7dd3fc' stroke-width='3'/>" +
        "<circle cx='229' cy='60' r='16' fill='none' stroke='#bae6fd' stroke-width='2'/>" +
        "<text x='229' y='58' text-anchor='middle' font-size='11'>碗</text>" +
        "<text x='229' y='71' text-anchor='middle' font-size='8' fill='#64748b'>wǎn · bowl</text>" +
        "<line x1='276' y1='24' x2='284' y2='128' stroke='#a16207' stroke-width='4' stroke-linecap='round'/>" +
        "<line x1='290' y1='24' x2='296' y2='128' stroke='#a16207' stroke-width='4' stroke-linecap='round'/>" +
        "<text x='286' y='146' text-anchor='middle' font-size='11'>筷子</text>" +
        "<text x='286' y='158' text-anchor='middle' font-size='8' fill='#64748b'>kuàizi</text>" +
        "<ellipse cx='226' cy='121' rx='14' ry='9' fill='#ffffff' stroke='#94a3b8' stroke-width='2.5'/>" +
        "<line x1='238' y1='115' x2='256' y2='102' stroke='#94a3b8' stroke-width='3' stroke-linecap='round'/>" +
        "<text x='226' y='146' text-anchor='middle' font-size='11'>勺子</text>" +
        "<text x='226' y='158' text-anchor='middle' font-size='8' fill='#64748b'>sháozi · spoon</text>" +
        "<circle cx='40' cy='42' r='18' fill='#ffffff' stroke='#86efac' stroke-width='3'/>" +
        "<path d='M 58 36 Q 68 42 58 48' fill='none' stroke='#86efac' stroke-width='3'/>" +
        "<text x='40' y='75' text-anchor='middle' font-size='11'>茶杯</text>" +
        "<text x='40' y='87' text-anchor='middle' font-size='8' fill='#64748b'>chábēi · teacup</text>" +
        "</svg>",
      caption:
        "Bowl in hand, chopsticks on the right, spoon for soup: 碗 (wǎn), 筷子 (kuàizi), 勺子 (sháozi), 盘子 (pánzi), 茶杯 (chábēi). Each one takes its own measure word too — 一双筷子, a PAIR of chopsticks!",
    },
  ],
};
