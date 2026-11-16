# "《哎呀！一家人》 Ai-Ya! Family" S01E12 "Been There, Ate That (Guò!)"
# Topic: tenses-particles — Time & Aspect Particles in Mandarin

EP = dict(
    topic="tenses-particles",
    logline="In the Season One finale, Xiaoming prepares to fly home for the holidays while Dad commits the ultimate 'mei qu le' crime, triggering a grand showdown of Mandarin time particles and negation.",
)

# ---------------- COLD OPEN ----------------
scene("living", [("meimei", 250), ("xiaoming", 560), ("dad", 880)], "END OF TERM · LIVING ROOM")
L("xiaoming", "Last evening before the school holidays! Let's look through our Singapore photo album!", mood="excited", shot="close", prop="tablet")
L("dad", "Look at Sentosa! Yesterday it rained, so I didn't go: Zuo tian wo bu qu le! Wait — no — wo mei qu le!", mood="thinking", shot="close")
sfx("gong")
poof("laoshi", 1110)
L("laoshi", "[[哎呀！]] Double alarm for the Season Finale! First, yesterday's action is negated with [[没]], NEVER bu! Second, when [[没]] walks in the door, [[了]] jumps out the window! Say [[昨天我没去]], NEVER mei qu le!", mood="teach", shot="close",
  boardClear=True, board="✘ 我不去了 / ✘ 我没去了   ✔ [[昨天我没去！]]")
L("meimei", "Mandarin verbs never change spelling like go, went, gone — tiny particles do all the time travel!", mood="excited", shot="two")
L("dad", "No irregular past participles?! Give me those particles immediately!", mood="excited", shot="close")
freeze("ZERO VERB CONJUGATIONS · PURE PARTICLE POWER", 2.4, narrator="Narrator: Dad tore up his French verb table in celebration.")

confess("laoshi", "梅老师 LAOSHI MEI · Season Finale Time-Lord")
L("laoshi", "How does Mandarin handle past, life experience, right-now ongoing, and future without changing a single verb? Five crystal-clear markers — let's unite them!", mood="smug")

title()

# ---------------- ACT 1: COMPLETED LE, EXPERIENCE GUO & ONGOING ZHENGZAI ----------------
scene("living", [("meimei", 240), ("xiaoming", 530), ("mum", 810), ("laoshi", 1090)], "PAST, EXPERIENCE & RIGHT NOW")
L("laoshi", "Marker one: completed action [[了]]! Put [[了]] right after the verb when a specific action is finished: [[我今天早上吃了两个包子。]] I ate two steamed buns this morning!", mood="teach", shot="close",
  boardClear=True, board="1. Completed [[了]]: [[我吃了两个包子]]")
L("laoshi", "Marker two: life experience [[过]] — 'have ever done before'! Unlike [[了]], [[过]] asks if you've EVER experienced it in your life!", mood="teach", shot="close",
  board="2. Experience [[过]]: [[去过北京 · 吃过烤鸭]]")
L("xiaoming", "[[美美，你去过北京吗？你吃过北京烤鸭吗？]] Meimei, have you ever been to Beijing? Have you ever eaten Peking roast duck?", mood="excited", shot="close",
  board="[[你去过北京吗？]] = Have you ever been to Beijing?")
L("meimei", "[[我没去过北京，但是我在新加坡吃过北京烤鸭！]] Notice when you negate [[过]] with [[没]], [[过]] STAYS: [[没去过]]!", mood="happy", shot="close",
  board="Negate [[过]]: [[没去过]] (keep [[过]]!)")
L("mum", "And marker three: what's happening RIGHT NOW? Wrap the verb in [[正在…呢]]! [[爸爸正在厨房喝咖啡呢！]] Dad is drinking coffee in the kitchen right now!", mood="happy", shot="two",
  boardClear=True, board="3. Ongoing now: [[正在 + Verb + 呢]]")

# ---------------- ACT 2: FUTURE MARKERS & THE BU VS MEI SHOWDOWN ----------------
scene("kitchen", [("meimei", 220), ("xiaoming", 470), ("mum", 720), ("dad", 940), ("laoshi", 1140)], "FUTURE PLANS & BU VS MEI FINALE")
L("laoshi", "Marker four: the future! Use [[会]] for predictions — [[明天会下雨]] — and [[打算]] or [[要]] for intentions: [[明年我们打算去北京看小明！]] Next year we plan to visit Xiaoming in Beijing!", mood="teach", shot="close",
  boardClear=True, board="4. Future: [[明天会下雨 · 我打算去北京]]")
L("laoshi", "Now the ultimate showdown: [[不]] versus [[没]]! Use [[不]] for present habits, future refusals, adjectives, and [[是、会、想]]! Use [[没]] ONLY for [[没有]] and actions that didn't happen in the past!", mood="teach", shot="close",
  board="[[不]]: habits / future / adj  vs  [[没]]: past / [[没有]]")
L("meimei", "Watch the contrast! Habit and future with [[不]]: [[我平时不喝咖啡，明天也不去游泳。]] Past with [[没]] and NO [[了]]: [[我昨天没喝咖啡，也没去游泳！]]", mood="excited", shot="close",
  board="[[明天不去]] (future)  vs  [[昨天没去]] (past, NO [[了]]!)")
L("dad", "Stand back, everyone — Season One boss battle! [[我以前没去过北京。现在我正在学中文呢！明年我打算跟家人一起去北京吃烤鸭！]]", mood="determined", shot="close", prop="book")
sfx("gong")
sfx("ding")
L("laoshi", "[[太完美了！]] [[没去过]], [[正在…呢]], [[打算]], AND STPV in one heroic breath! Dad just graduated Year Eight Mandarin!", mood="excited", shot="wide")
L("xiaoming", "[[谢谢叔叔、阿姨、美美和梅老师！明年北京见！]] Thank you everyone — see you in Beijing next year!", mood="excited", shot="wide", gap=0.4)

confess("laoshi", "梅老师 LAOSHI MEI · Season Finale Recap")
L("laoshi", "Three golden rules to crown Season One! One: [[了]] marks completed actions [[吃了两个包子]], while [[过]] marks life experience — [[我去过北京，没吃过烤鸭]].", mood="teach", boardClear=True, board="1. [[吃了]] (completed)  vs  [[去过 / 没去过]] (experience)")
L("laoshi", "Two: [[正在…呢]] is happening right now [[正在看书呢]], and [[会 / 打算]] point to the future [[明天会下雨，我打算去北京]].", mood="teach", board="2. [[正在…呢]] (now) · [[会 / 打算]] (future)")
L("laoshi", "Three: [[不]] negates habits, future, and adjectives [[不去、不热]], while [[没]] negates the past WITH NO [[了]] — [[昨天没去]]! [[同学们，加油！]]", mood="smug", board="3. [[明天不去]] vs [[昨天没去]] (NEVER 没…了!)", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Final three challenges of Season One with Laoshi Mei!", 2.8)
challenge(
    1,
    "Ask & answer: “Have you ever been to Beijing? — I haven't been to Beijing.”",
    "[[你去过北京吗？我没去过北京。]]",
    "Life experience uses [[过]]; negation [[没去过]] keeps [[过]]!",
    "Challenge one! Ask have you ever been to Beijing, then answer: I haven't been to Beijing!",
    "[[你去过北京吗？我没去过北京！]] Keep [[过]] even after [[没]]!",
)
challenge(
    2,
    "Say “Little brother is watching TV right now.”",
    "[[弟弟正在看电视呢。]]",
    "Ongoing right now: [[正在]] + Verb + [[呢]]",
    "Challenge two! How do you say: my younger brother is watching television right now?",
    "[[弟弟正在看电视呢！]] [[正在]] plus [[呢]] shows the action is happening right now!",
)
challenge(
    3,
    "Negation showdown: “I won't go tomorrow” vs “I didn't go yesterday”",
    "[[我明天不去 · 我昨天没去]]",
    "Future takes [[不]] ([[不去]]); past takes [[没]] with NO [[了]] ([[没去]])!",
    "Final challenge of Season One! Say both: I won't go tomorrow, and I didn't go yesterday!",
    "[[我明天不去，我昨天没去！]] [[不]] for tomorrow, [[没]] with zero [[了]] for yesterday!",
)
end_card()
