# "《哎呀！一家人》 Ai-Ya! Family" S01E07 "Operation Sentosa Saturday"
# Topic: leisure-plans — Free Time, Frequency & Weekend Plans

EP = dict(
    topic="leisure-plans",
    logline="Everyone has rival plans for Saturday in Singapore, Dad parks frequency adverbs at the wrong end of the sentence, and Meimei negotiates a cinema trip with polite Mandarin invitations.",
)

# ---------------- COLD OPEN ----------------
scene("living", [("meimei", 250), ("xiaoming", 560), ("dad", 880)], "FRIDAY EVENING · WEEKEND SUMMIT")
L("meimei", "Thank goodness it's Friday! [[周末到了！]] Operation Sentosa Saturday begins!", mood="excited", shot="close", prop="map")
L("dad", "Hold your deckchairs! In my free time, I go to the park often! Listen: wo qu gongyuan changchang!", mood="smug", shot="close")
sfx("buzzer")
poof("laoshi", 1100)
L("laoshi", "[[哎呀！]] Stop parking adverbs in the boot of the car! English puts 'often' or 'sometimes' at the end, but Mandarin ALWAYS puts frequency adverbs BEFORE the verb: [[我常常去公园]]!", mood="teach", shot="close",
  boardClear=True, board="✘ 我去公园常常   ✔ [[我常常去公园]]")
L("xiaoming", "Uncle's sentences always drive on the wrong side of the road!", mood="happy", shot="two")
L("dad", "At least my enthusiasm is in the front seat!", mood="determined", shot="close")
freeze("\"WO QU GONGYUAN CHANGCHANG\"", 2.4, narrator="Narrator: Another adverb rescued from the end of a sentence.")

confess("meimei", "MEIMEI · Weekend Strategist · Cinema Negotiator")
L("meimei", "Four people in one flat means four completely different ideas of relaxing. Time to deploy polite Mandarin invitations.", mood="smug")

title()

# ---------------- ACT 1: FREE TIME & FREQUENCY ADVERBS ----------------
scene("living", [("meimei", 240), ("xiaoming", 530), ("mum", 810), ("laoshi", 1090)], "FREE TIME & HOW OFTEN")
L("laoshi", "First, two ways to say free time and weekend: [[周末]] weekend, and [[空闲时间]] or [[有空的时候]] when you're free!", mood="teach", shot="close",
  boardClear=True, board="[[周末]] weekend · [[空闲时间 / 有空的时候]] free time")
L("mum", "Let's line up the frequency ladder from hundred percent down to zero — and every single one stands BEFORE the verb!", mood="happy", shot="close",
  board="Subj + Time + [[总是 / 常常 / 有时候 / 很少 / 从不]] + Verb")
L("meimei", "[[我周末常常听音乐、看书，有时候上网跟朋友聊天。]] On weekends I often listen to music and read, and sometimes go online to chat with friends!", mood="happy", shot="close", prop="phone",
  board="[[常常]] often · [[有时候]] sometimes")
L("xiaoming", "[[空闲时间我常常运动，很少看电视，从不睡懒觉！]] In my free time I often exercise, rarely watch TV, and never sleep in!", mood="excited", shot="close",
  board="[[很少]] rarely · [[从不]] never")
L("mum", "Really, Xiaoming? Who was snoring until ten last Sunday?", mood="smug", shot="two")
L("xiaoming", "Okay, okay — [[有时候睡懒觉！]] Sometimes!", mood="worried", shot="close")

# ---------------- ACT 2: MAKING PLANS WITH DASUAN & POLITE INVITATIONS ----------------
scene("kitchen", [("meimei", 240), ("xiaoming", 520), ("dad", 800), ("laoshi", 1080)], "SATURDAY PLAN & INVITATIONS")
L("laoshi", "Habits use [[常常]], but what about a specific plan for THIS weekend? Use [[打算]] plan to or intend to! [[这个周末你打算做什么？]]", mood="teach", shot="close",
  boardClear=True, board="[[这个周末你打算做什么？]] = What do you plan to do?")
L("meimei", "Watch where 'with friends' goes too — BEFORE the verb with [[跟…一起]]! [[我打算跟朋友一起去看电影！]] I plan to go watch a film together with my friends!", mood="excited", shot="close", prop="phone",
  board="[[打算]] + [[跟…一起]] + Verb: [[我打算跟朋友一起去看电影]]")
L("xiaoming", "And Sunday? [[星期天我们打算一起去圣淘沙游泳，再去乌节路买东西！]] On Sunday we plan to go swimming at Sentosa together, then go shopping on Orchard Road!", mood="excited", shot="close", prop="map",
  board="[[去圣淘沙游泳 · 去买东西]]")
L("dad", "Wait — how do I politely invite everyone without sounding bossy?", mood="thinking", shot="close")
L("laoshi", "State your suggestion, then tag [[好吗？]] okay? or [[怎么样？]] how about that? right at the end! First check if they're free: [[你星期六下午有空吗？]]", mood="teach", shot="close",
  boardClear=True, board="Invite: [[我们一起去…，好吗？ / 怎么样？]]")
L("dad", "Let me try on the whole crew! [[你们星期六下午有空吗？我们一起去看电影，好吗？晚上一起去吃饭，怎么样？]]", mood="determined", shot="close")
sfx("ding")
L("meimei", "[[太好了！]] Dad's buying the popcorn AND dinner! Invitation accepted!", mood="excited", shot="two")
L("laoshi", "Spotless word order — frequency before the verb, [[跟…一起]] before the verb, and [[好吗 / 怎么样]] sealing the deal!", mood="happy", shot="close", gap=0.4)

confess("laoshi", "梅老师 LAOSHI MEI · Sixty-Second Recap")
L("laoshi", "Three golden rules for Topic Seven! One: put frequency words BEFORE the verb — [[周末我常常看书，有时候上网，很少看电视]].", mood="teach", boardClear=True, board="1. [[常常 · 有时候 · 很少]] BEFORE the verb!")
L("laoshi", "Two: state weekend plans with [[打算]] and [[跟…一起]] before the action — [[我打算跟朋友一起去看电影]].", mood="teach", board="2. [[我打算跟朋友一起去看电影]]")
L("laoshi", "Three: invite friends warmly by ending with [[好吗？]] or [[怎么样？]]!", mood="smug", board="3. [[我们一起去…，好吗？ / 怎么样？]]", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Five seconds on the clock with Laoshi Mei!", 2.8)
challenge(
    1,
    "Fix the word order: “On weekends I often watch films and rarely watch TV.”",
    "[[我周末常常看电影，很少看电视。]]",
    "[[常常]] (often) & [[很少]] (rarely) MUST go BEFORE the verb",
    "Challenge one! Say: on weekends I often watch films, and rarely watch TV!",
    "[[我周末常常看电影，很少看电视！]] Frequency adverbs always stand before the verb!",
)
challenge(
    2,
    "Say “I plan to go shopping together with my friends.”",
    "[[我打算跟朋友一起去买东西。]]",
    "[[打算]] + [[跟朋友一起]] + [[去买东西]]",
    "Challenge two! Using [[打算]] and [[跟…一起]], say: I plan to go shopping together with my friends!",
    "[[我打算跟朋友一起去买东西！]] [[跟朋友一起]] comes right before the action!",
)
challenge(
    3,
    "Invite a friend: “Let's go to the park together, how about it?”",
    "[[我们一起去公园，怎么样？ / 好吗？]]",
    "[[我们一起…]] + [[怎么样？]] or [[好吗？]]",
    "Challenge three! Invite a friend politely: let's go to the park together, how about it?",
    "[[我们一起去公园，怎么样？]] Or [[我们一起去公园，好吗？]]",
)
end_card()
