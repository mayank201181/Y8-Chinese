# "《哎呀！一家人》 Ai-Ya! Family" S01E03 "Thirty-Two Degrees Of Drizzle"
# Topic: weather — Weather & Forecasts

EP = dict(
    topic="weather",
    logline="Singapore serves sunshine and a tropical downpour in the same five minutes, Dad yells 'wo shi re', and Laoshi Mei rescues the weather forecast.",
)

# ---------------- COLD OPEN ----------------
scene("plaza", [("meimei", 270), ("xiaoming", 590), ("dad", 920)], "VOID DECK PLAZA · SINGAPORE")
L("dad", "Look at that blue sky! Who needs an umbrella in Singapore? Watch my native weather report: Jin tian, wo shi re!", mood="smug", shot="close")
L("meimei", "Dad, two problems. One, those clouds just turned charcoal grey. Two, you NEVER put [[是]] before an adjective like hot!", mood="deadpan", shot="two", prop="umbrella")
L("dad", "Pah! In English I AM hot, so wo shi re! And it will never rain today!", mood="excited", shot="close")
sfx("gong")
poof("laoshi", 1110)
L("laoshi", "[[哎呀！]] Drop that [[是]] before lightning strikes! In Mandarin, adjectives link with [[很]] or [[太…了]], NEVER [[是]]! Say [[今天很热]], or [[太热了]]!", mood="teach", shot="close",
  boardClear=True, board="✘ 我是热 / 今天是热   ✔ [[今天很热 · 太热了！]]")
L("xiaoming", "[[哎呀，下雨了！下大雨了！]] Uh-oh, it's raining — pouring rain!", mood="shock", shot="close", prop="umbrella")
L("dad", "Thirty-two degrees and warm rain in my shoes! How is the sky sweating on me?!", mood="shock", shot="close")
freeze("\"IT WILL NEVER RAIN TODAY\"", 2.4, narrator="Narrator: It rained sideways for twenty minutes.")

confess("xiaoming", "XIAOMING · 13 · Beijing Weather Veteran · Umbrella Carrier")
L("xiaoming", "In Beijing, when it's cold it snows, and when it's sunny it stays sunny. Singapore weather changes faster than Laoshi Mei's eyebrows.", mood="smug")

title()

# ---------------- ACT 1: WEATHER CONDITIONS & TEMPERATURES ----------------
scene("living", [("meimei", 250), ("xiaoming", 560), ("dad", 850), ("laoshi", 1100)], "BACK INSIDE · TOWELLING OFF")
L("laoshi", "Let's master asking about the weather! [[今天天气怎么样？]] How is the weather today?", mood="teach", shot="close",
  boardClear=True, board="[[今天天气怎么样？]] = How's the weather today?")
L("meimei", "Five core weather conditions! Sunny day is [[晴天]], overcast day is [[阴天]], and windy is [[刮风]] or [[刮大风]]!", mood="happy", shot="close",
  board="[[晴天]] sunny · [[阴天]] overcast · [[刮风]] windy")
L("xiaoming", "And falling weather puts the verb [[下]] in front! [[下雨]] to rain, and in Beijing in January, [[下雪]] to snow!", mood="excited", shot="close",
  board="[[下雨]] rain ([[下大雨]]) · [[下雪]] snow")
L("dad", "Let me check my weather app for temperatures! Singapore says thirty-two degrees, Beijing says minus five! How do I read that?", mood="thinking", shot="close", prop="phone")
L("laoshi", "Temperature is [[温度]] or [[气温]], and degrees is [[度]]! So Singapore is [[三十二度]], [[很热]], and very humid — [[很潮湿]]!", mood="teach", shot="close",
  boardClear=True, board="[[温度 / 气温]] temp · [[三十二度]] (32°C)")
L("xiaoming", "And below zero is literally zero-below, [[零下]]! [[今天北京下雪，零下五度，太冷了！]] Today Beijing is snowing, minus five degrees, way too cold!", mood="excited", shot="close",
  board="[[零下五度]] = -5°C · [[太冷了！]]")
L("meimei", "When the weather is mild and pleasant, use [[暖和]] warm or [[凉快]] cool and breezy — again with [[很]], never [[是]]: [[今天很凉快]]!", mood="happy", shot="close",
  board="[[很暖和]] warm · [[很凉快]] cool (NO [[是]]!)")

# ---------------- ACT 2: YESTERDAY, TODAY & TOMORROW'S FORECAST ----------------
scene("park", [("meimei", 250), ("xiaoming", 550), ("mum", 830), ("laoshi", 1090)], "BOTANIC GARDENS · CHECKING TOMORROW")
L("mum", "The rain finally stopped! Shall we plan a picnic tomorrow? Xiaoming, [[明天天气怎么样？]] What's tomorrow's forecast?", mood="happy", shot="close", prop="phone",
  boardClear=True, board="[[明天天气怎么样？]] = How's tomorrow's weather?")
L("xiaoming", "Let me check! [[昨天是晴天，今天下雨，明天还会下雨！]] Yesterday was sunny, today it rained, and tomorrow it will rain again!", mood="worried", shot="close", prop="phone",
  board="[[昨天晴天]] · [[今天下雨]] · [[明天会下雨]]")
L("laoshi", "Spot the future forecast helper [[会]]! When predicting weather, put [[会]] right before the weather verb or adjective: [[明天会下雨]], [[明天会很冷]], [[下午会刮大风]]!", mood="teach", shot="close",
  board="Forecast [[会]] = will: [[明天会下雨 · 会刮风]]")
L("meimei", "And link the weather to your plans with [[因为…所以…]]! [[因为明天会下雨，所以我们带雨伞吧！]] Because it will rain tomorrow, let's bring umbrellas!", mood="excited", shot="close", prop="umbrella",
  board="[[因为明天会下雨，所以我们带雨伞。]]")
poof("dad", 1140)
L("dad", "Wait for me! I brought four umbrellas! Listen to my forecast: [[今天三十二度，太热了！明天会下雨！]]", mood="determined", shot="close", prop="umbrella")
sfx("ding")
L("laoshi", "[[好极了！]] Zero rogue [[是]], spot-on [[三十二度]], [[太热了]], and [[明天会下雨]]! Dad is officially waterproof!", mood="happy", shot="two", gap=0.4)

confess("laoshi", "梅老师 LAOSHI MEI · Sixty-Second Recap")
L("laoshi", "Three golden rules for Topic Three! One: know the big five weather words — [[晴天、阴天、下雨、下雪、刮风]].", mood="teach", boardClear=True, board="1. [[晴天 · 阴天 · 下雨 · 下雪 · 刮风]]")
L("laoshi", "Two: give temperatures with [[度]] and [[零下]], and NEVER use [[是]] before adjectives: say [[今天很热]] or [[太冷了]]!", mood="teach", board="2. [[三十二度 · 零下五度 · 很热 / 太热了]] (NO [[是]]!)")
L("laoshi", "Three: predict tomorrow's weather with [[会]] — [[明天会下雨]], [[明天会很凉快]]!", mood="smug", board="3. Forecast: [[明天会下雨]]", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Five seconds on the clock with Laoshi Mei!", 2.8)
challenge(
    1,
    "Fix Dad's mistake: “Today is very hot!” (NO 是!)",
    "[[今天很热！ / 今天太热了！]]",
    "Adjectives take [[很]] or [[太…了]], NEVER [[是]]",
    "Challenge one! Fix Dad's sentence: how do you say, today is very hot, in natural Mandarin?",
    "[[今天很热！]] Or [[今天太热了！]] Never put [[是]] before an adjective!",
)
challenge(
    2,
    "Say “snowing and minus five degrees” in Mandarin.",
    "[[下雪，零下五度]]",
    "[[下雪]] (snowing) + [[零下]] (below zero) + [[五度]] (5°C)",
    "Challenge two! How do you say snowing, minus five degrees?",
    "[[下雪，零下五度！]] [[零下]] means below zero, followed by [[五度]]!",
)
challenge(
    3,
    "Say “Tomorrow it will rain and be windy.”",
    "[[明天会下雨，也会刮风。]]",
    "Future forecast uses [[会]] + [[下雨 / 刮风]]",
    "Challenge three! Predict the forecast: tomorrow it will rain, in Mandarin!",
    "[[明天会下雨！]] Add [[刮风]] for windy: [[明天会下雨，也会刮风！]]",
)
end_card()
