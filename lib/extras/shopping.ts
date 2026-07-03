import type { TopicExtras } from "../types";

export const shoppingExtras: TopicExtras = {
  topicId: "shopping",
  hook:
    "Two words — {{多少钱？|duōshao qián?|How much?}} — unlock every market from Chinatown to Beijing. Add {{太贵了！|tài guì le!|Too expensive!}} and you're ready to bargain.",
  didYouKnow: [
    "The character {{贵|guì|expensive}} contains {{贝|bèi|shell}} — because cowrie shells were China's earliest money, over 3,000 years ago. The shell radical still lurks inside money words like 买 (buy), 卖 (sell), 财 (wealth) and 购 (purchase).",
    "November 11 — {{双十一|shuāng shíyī|Double Eleven}} — is the world's biggest shopping day. Started as a jokey 'Singles' Day' (11.11 looks like four lonely 1s), it now racks up more sales than Black Friday and Cyber Monday combined.",
    "In Chinese cities, even street-market fruit sellers take payment by QR code — many people haven't touched cash in years. You'll hear {{扫一扫|sǎo yi sǎo|scan it}} at checkouts everywhere.",
    "Spoken prices use {{块|kuài}}, which literally means 'lump' or 'piece' — like saying 'three lumps of money'. English does the same trick with 'quid' and 'bucks'.",
  ],
  activities: [
    {
      title: "Price-tag safari",
      steps: [
        "At a supermarket or wet market, pick five items and say each price in Mandarin: 3.50 dollars becomes {{三块五毛|sān kuài wǔ máo}}.",
        "In Chinatown or a heartland shop, listen for prices called out in Mandarin and see if you can catch the number before you see the tag.",
        "Ask a stallholder {{这个多少钱？|zhège duōshao qián?|How much is this?}} — pointing counts, courage matters.",
        "Practise the classic bargaining line at home first: {{可以便宜一点吗？|kěyǐ piányi yìdiǎn ma?|Can it be a bit cheaper?}}",
      ],
    },
    {
      title: "Run a bedroom shop",
      steps: [
        "Set up five objects on your desk with handwritten price tags in Chinese characters (e.g. 五块, 十二块五).",
        "Get a family member to be the customer: they ask {{多少钱？|duōshao qián?}}, you answer from the tag — no peeking at pinyin.",
        "Swap roles; when you're the buyer, haggle: {{太贵了！便宜一点吧。|Tài guì le! Piányi yìdiǎn ba.|Too expensive! A bit cheaper, come on.}}",
        "Close every sale with {{给你|gěi nǐ|here you go}} and {{谢谢|xièxie|thanks}}.",
      ],
    },
  ],
  interactives: ["money-counter", "number-builder"],
};
