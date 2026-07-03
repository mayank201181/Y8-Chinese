import type { TopicExtras } from "../types";

export const weatherExtras: TopicExtras = {
  topicId: "weather",
  hook:
    "Singapore has one season; Chinese has words for four. Learn {{下雨|xià yǔ|to rain}} first though — around here, it's the forecast most days at 4 p.m.",
  didYouKnow: [
    "The character {{雨|yǔ|rain}} is a picture: raindrops falling inside a cloud under the sky. It then becomes the roof of other weather characters — {{雪|xuě|snow}}, {{雷|léi|thunder}}, {{雾|wù|fog}} and {{霜|shuāng|frost}} all wear the rain radical like a hat.",
    "Weather 'falls' in Chinese: it's {{下雨|xià yǔ|down-rain}} and {{下雪|xià xuě|down-snow}} — the verb 下 (descend) does the raining. You never say 'it rains'; you say 'sky is downing rain'.",
    "The English word 'typhoon' and the Chinese {{台风|táifēng}} are long-lost relatives — the word travelled between Chinese, Arabic, Greek and English over centuries, and nobody fully agrees who had it first.",
    "While Singapore sits at a steady 26–32°C, the city of {{哈尔滨|Hā'ěrbīn|Harbin}} in China's far north drops below −20°C and hosts the world's largest ice festival — entire glowing palaces carved from river ice.",
  ],
  activities: [
    {
      title: "Be the family weather presenter",
      steps: [
        "Each evening this week, check tomorrow's forecast and announce it in Mandarin: {{明天很热。|Míngtiān hěn rè.|Tomorrow will be hot.}} {{明天下雨。|Míngtiān xià yǔ.|It will rain tomorrow.}}",
        "Include the temperature using Chinese numbers: {{三十二度|sānshí'èr dù|32 degrees}}.",
        "When the 4 p.m. thunderstorm hits, call it live: {{下大雨了！|Xià dà yǔ le!|It's pouring!}}",
        "Score your forecasts: one point every time yesterday's Mandarin prediction came true.",
      ],
    },
    {
      title: "Four-seasons postcard hunt",
      steps: [
        "Find photos (family trips, news, or online) of a place in each season: spring 春, summer 夏, autumn 秋, winter 冬.",
        "Caption each photo with one Mandarin sentence: {{北京的冬天很冷。|Běijīng de dōngtiān hěn lěng.|Beijing's winter is very cold.}}",
        "Compare with home: {{新加坡没有冬天。|Xīnjiāpō méiyǒu dōngtiān.|Singapore has no winter.}}",
        "Ask a relative who has travelled: {{哪里最冷？|Nǎlǐ zuì lěng?|Where was coldest?}} and note their answer in Chinese.",
      ],
    },
  ],
  interactives: ["number-builder", "tone-lab"],
};
