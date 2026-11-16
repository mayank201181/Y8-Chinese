# "《哎呀！一家人》 Ai-Ya! Family" S01E06 "Don't Kick The Basketball!"
# Topic: hobbies — Hobbies, Sports & Music

EP = dict(
    topic="hobbies",
    logline="Dad tries to 'ti' a basketball into orbit on the community court, mixes up hand and foot sport verbs, and learns how Mandarin splits learned skills from permission.",
)

# ---------------- COLD OPEN ----------------
scene("park", [("meimei", 260), ("xiaoming", 580), ("dad", 910)], "COMMUNITY COURT · SATURDAY MORNING")
L("dad", "All recovered from my cold and ready for sport! Watch your old man play basketball! Wo ti lanqiu!", mood="excited", shot="close", prop="ball")
L("xiaoming", "[[叔叔，等一下！]] Uncle, wait — don't use your foot on my basketball!", mood="shock", shot="two", prop="ball")
sfx("whistle")
L("dad", "Too late! Why did it bounce off the mango tree and hit the rubbish bin?!", mood="shock", shot="close")
sfx("gong")
poof("laoshi", 1110)
L("laoshi", "[[哎呀！]] Because you used [[踢]], to kick with your foot! In Mandarin, sports played with hands or rackets use [[打]], and sports kicked with feet use [[踢]]! Never kick a basketball — say [[打篮球]]!", mood="teach", shot="close",
  boardClear=True, board="Hand/racket [[打篮球]]  ≠  Foot [[踢足球]]!")
L("meimei", "Also never translate English 'play basketball' as wan lanqiu. That sounds like you're poking the ball like a toddler!", mood="deadpan", shot="close")
freeze("\"WO TI LANQIU!\"", 2.4, narrator="Narrator: One mango and Dad's pride fell from the tree.")

confess("xiaoming", "XIAOMING · Tanglin Basketball CCA · Guarding The Ball")
L("xiaoming", "In English you 'play' football, 'play' basketball, AND 'play' the piano. Mandarin actually looks at what your hands and feet are doing!", mood="smug")

title()

# ---------------- ACT 1: SPORTS, CREATIVE HOBBIES & PREFERENCES ----------------
scene("park", [("meimei", 250), ("xiaoming", 560), ("dad", 840), ("laoshi", 1090)], "SPORTS & ARTS ACTION VERBS")
L("laoshi", "Let's sort the sports verbs! Anything hit or thrown with hands or a racket takes [[打]]: [[打篮球]] basketball, [[打网球]] tennis, [[打羽毛球]] badminton, [[打乒乓球]] table tennis!", mood="teach", shot="close",
  boardClear=True, board="[[打]]: [[打篮球 · 打网球 · 打羽毛球 · 打乒乓球]]")
L("xiaoming", "Football uses your feet, so it's [[踢足球]]! And standalone action hobbies don't need [[打]] at all: [[游泳]] swim, [[跑步]] run, [[骑自行车]] cycle!", mood="excited", shot="close", prop="ball",
  board="[[踢足球]] football · [[游泳]] swim · [[跑步]] run")
L("meimei", "What about music and arts? [[你的爱好是什么？]] Plucked or keyed instruments take [[弹]]! [[弹钢琴]] play piano, [[弹吉他]] play guitar — plus [[画画]] paint or draw, [[唱歌]] sing, and [[听音乐]] listen to music!", mood="happy", shot="close", prop="guitar",
  board="[[弹钢琴 · 弹吉他 · 画画 · 唱歌 · 听音乐]]")
L("dad", "Ooh, ask me my favourite! How do I level up from plain [[喜欢]] like to favourite?", mood="excited", shot="close")
L("laoshi", "Put [[最]] most right before [[喜欢]]! [[我最喜欢打羽毛球，因为很有意思，也对身体好！]] I like badminton best, because it's fun and good for your health!", mood="teach", shot="close",
  boardClear=True, board="[[喜欢]] like → [[很喜欢]] → [[最喜欢]] favourite!")

# ---------------- ACT 2: HUI VS NENG VS KEYI ----------------
scene("living", [("meimei", 240), ("xiaoming", 520), ("mum", 800), ("laoshi", 1080)], "AFTERNOON · CAN, ABLE OR ALLOWED?")
L("mum", "English uses one word — 'can' — for three completely different meanings! Laoshi Mei, test the kids!", mood="happy", shot="close",
  boardClear=True, board="3 kinds of “can”: [[会]] vs [[能]] vs [[可以]]")
L("laoshi", "Number one: a skill you learned through practice takes [[会]]! [[你会游泳吗？]] Can you swim — as in, do you know how?", mood="teach", shot="close",
  board="1. [[会]] = learned skill: [[我会游泳 · 我会弹钢琴]]")
L("meimei", "[[我会游泳，也会弹一点儿钢琴，但是我不会滑冰！]] I know how to swim and play a bit of piano, but I don't know how to ice-skate!", mood="happy", shot="close", prop="guitar")
L("laoshi", "Number two: [[能]] is whether circumstances or physical ability allow it today! For example, if your leg hurts: [[今天我不能去踢足球。]] I can't go play football today!", mood="teach", shot="close",
  board="2. [[能]] = able/possible today: [[今天不能去踢足球]]")
L("xiaoming", "Number three: [[可以]] asks polite permission — may I! [[妈妈，我现在可以玩电脑游戏吗？]] Auntie, may I play computer games now?", mood="excited", shot="close", prop="tablet",
  board="3. [[可以]] = permission: [[我可以…吗？]]")
L("mum", "[[不可以！先做作业！]] Permission denied! Homework first!", mood="smug", shot="two")
poof("dad", 1130)
L("dad", "Listen to my redeemed hobby speech! [[我最喜欢打羽毛球。我会弹吉他，但是今天手疼，不能弹！]]", mood="determined", shot="close", prop="guitar")
sfx("ding")
L("laoshi", "[[太精彩了！]] [[最喜欢]], [[打羽毛球]], [[会弹吉他]], AND [[不能]] in one heroic sentence! Basketballs everywhere are safe!", mood="happy", shot="two", gap=0.4)

confess("laoshi", "梅老师 LAOSHI MEI · Sixty-Second Recap")
L("laoshi", "Three golden rules for Topic Six! One: match the hobby verb — [[打篮球、打网球、打羽毛球]], [[踢足球]], [[弹钢琴]], [[画画]], [[游泳]]!", mood="teach", boardClear=True, board="1. [[打篮球/羽毛球 · 踢足球 · 弹钢琴 · 画画 · 游泳]]")
L("laoshi", "Two: express your number-one favourite with [[最喜欢]] — [[我最喜欢打篮球]]!", mood="teach", board="2. [[最喜欢]] = like best / favourite")
L("laoshi", "Three: split 'can' into three — [[会]] for learned skills, [[能]] for circumstances, and [[可以]] for permission!", mood="smug", board="3. [[会]] skill · [[能]] possible · [[可以]] permission", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Five seconds on the clock with Laoshi Mei!", 2.8)
challenge(
    1,
    "Pick the right verbs: “play basketball, play football, play piano”",
    "[[打篮球、踢足球、弹钢琴]]",
    "Hand [[打]] + basketball · Foot [[踢]] + football · Keys [[弹]] + piano",
    "Challenge one! Say play basketball, play football, and play the piano with the three correct Mandarin verbs!",
    "[[打篮球、踢足球、弹钢琴！]] [[打]] for hand sports, [[踢]] for football, and [[弹]] for piano!",
)
challenge(
    2,
    "Say “My favourite hobby is swimming.”",
    "[[我最喜欢游泳。]]",
    "[[最喜欢]] (like best) + [[游泳]] (swimming)",
    "Challenge two! How do you say, I like swimming best, in Mandarin?",
    "[[我最喜欢游泳！]] Put [[最]] right before [[喜欢]]!",
)
challenge(
    3,
    "Say “I know how to swim, but today I can't go.” (会 vs 能)",
    "[[我会游泳，但是今天不能去。]]",
    "[[会]] = learned skill; [[不能]] = can't due to circumstances",
    "Challenge three! Contrast [[会]] and [[能]]: say I know how to swim, but today I cannot go!",
    "[[我会游泳，但是今天不能去！]] [[会]] for the learned skill, [[不能]] for today's situation!",
)
end_card()
