# "《哎呀！一家人》 Ai-Ya! Family" S01E01 "Nǐ Hǎo, Seven A.M.!"
# Topic: greetings-routine — Self-Introduction, Family & Daily Routine

EP = dict(
    topic="greetings-routine",
    logline="Cousin Xiaoming arrives from Beijing, Dad accidentally calls Mum a horse because of Mandarin tones, and Laoshi Mei rescues everyone's morning routine with Subject + Time + Verb.",
)

# ---------------- COLD OPEN ----------------
scene("living", [("meimei", 300), ("dad", 760)], "MEIMEI'S FLAT · SINGAPORE")
L("dad", "Meimei! Your cousin Xiaoming lands from Beijing any minute. Stand back. My Mandarin tones are already native.", mood="smug", shot="close", prop="tablet")
L("dad", "Watch this. Knee how! War jiao Dad! And this is your auntie, my lovely ma!", mood="excited", shot="close")
L("meimei", "Dad. You just used the dipping third tone on ma. You told everyone Mum is a horse.", mood="deadpan", shot="close")
L("dad", "Nonsense. Tone schmone! Context does the heavy lifting.", mood="smug", shot="two", gap=0.3)
sfx("door")
scene("living", [("meimei", 250), ("dad", 560), ("xiaoming", 920)])
L("xiaoming", "[[你们好！我叫小明。我是中国人！]] Hello everyone! My name is Xiaoming, from Beijing!", mood="excited", shot="close")
L("dad", "Knee how, Xiaoming! Welcome! Meet my wonderful horse!", mood="excited", shot="close")
sfx("gong")
poof("laoshi", 1090)
L("laoshi", "[[哎呀！]] Hold every tone right there! Mother is first tone, high and flat: [[妈妈]]. Horse is third tone: [[马]]. Call Mum a horse again and you sleep on the balcony!", mood="teach", shot="close",
  boardClear=True, board="[[妈]] mā (mum)  ≠  [[马]] mǎ (horse)!")
L("dad", "There is a talking panda in a crimson waistcoat in my living room.", mood="shock", shot="close")
L("meimei", "That's Laoshi Mei. Whenever someone commits a crime against Mandarin grammar, she appears.", mood="deadpan", shot="two")
freeze("\"MEET MY WONDERFUL HORSE\"", 2.4, narrator="Narrator: Mum heard everything from the kitchen.")

confess("meimei", "MEIMEI · 13 · Year 8 At Tanglin · Tone Survivor")
L("meimei", "I study Year Eight Mandarin here in Singapore. My cousin Xiaoming is staying for the term, and Dad thinks Mandarin is just English spoken loudly.", mood="deadpan")
confess("laoshi", "梅老师 LAOSHI MEI · Mandarin Tutor · Zero Tolerance For Wrong Tones")
L("laoshi", "[[大家好！]] Hello everyone! Mandarin has no verb conjugations, no masculine tables, and no plural endings. All I ask for is four little tones and putting the time before the verb. Is that too much?", mood="smug", gap=0.4)

title()

# ---------------- ACT 1: GREETINGS, NAME, AGE & FAMILY ----------------
scene("living", [("meimei", 260), ("xiaoming", 580), ("laoshi", 920)])
L("meimei", "Xiaoming, show Dad a proper Year Eight self-introduction.", mood="happy", shot="close",
  boardClear=True, board="[[你叫什么名字？]] = What's your name?")
L("xiaoming", "[[你好！我叫王小明。我今年十三岁，上八年级。]] Hello! I'm Wang Xiaoming. I am thirteen this year, in Year Eight.", mood="happy", shot="close",
  board="[[我叫…]] · [[我今年十三岁]] · [[上八年级]]")
L("laoshi", "Notice two gems! First, Chinese family names come first: [[王]] is his surname, [[小明]] is his given name. Second, before age you don't need the verb to be! Just [[我今年十三岁]], literally I this year thirteen years old!", mood="teach", shot="close",
  board="✘ 我是十三岁   ✔ [[我今年十三岁]]")
poof("mum", 1120)
L("mum", "Welcome, Xiaoming! Tell us about your family in Beijing. [[你家有几口人？]] How many people are in your family?", mood="happy", shot="close",
  boardClear=True, board="[[你家有几口人？]] = How many in your family?")
L("xiaoming", "[[我家有四口人：爸爸、妈妈、妹妹和我。]] There are four people in my family: Dad, Mum, my little sister, and me!", mood="excited", shot="close",
  board="[[四口人]] = 4 family members")
L("laoshi", "Spot the special family measure word: [[口]], literally mouth — how many mouths to feed under one roof! And if you have no pets, negate [[有]] with [[没]]: [[我家没有狗]], never bu you!", mood="teach", shot="close",
  board="✘ 不有   ✔ [[没有]] (don't have)")

# ---------------- ACT 2: CLOCK TIME & DAILY ROUTINE (STPV) ----------------
scene("kitchen", [("meimei", 260), ("xiaoming", 560), ("dad", 860), ("laoshi", 1100)], "NEXT MORNING · SINGAPORE SCHOOL HOURS")
sfx("whistle")
L("meimei", "Wake up, Xiaoming! Tanglin buses leave early! [[现在几点？]] What time is it now?", mood="worried", shot="close", prop="clock",
  boardClear=True, board="[[现在几点？]] = What time is it now?")
L("xiaoming", "[[现在早上六点半！]] Six thirty in the morning?! In Beijing I was still dreaming about dumplings!", mood="shock", shot="close",
  board="[[早上六点半]] = 6:30 a.m. (big → small!)")
L("laoshi", "Mandarin time always flows from biggest to smallest: part of day first, then hour [[点]], then half [[半]] or quarter [[刻]]! So [[早上六点半]], morning six o'clock half!", mood="teach", shot="close",
  board="Part of day + Hour [[点]] + [[半 / 一刻]]")
L("dad", "Easy! In Mandarin I say: I wake up at seven o'clock — wo qichuang qi dian!", mood="smug", shot="close")
sfx("buzzer")
L("laoshi", "English brain alert! Mandarin NEVER puts the clock time at the end of the sentence! Put Subject, then Time, then Action: [[我早上七点起床]]!", mood="teach", shot="close",
  boardClear=True, board="✘ 我起床七点   ✔ [[我早上七点起床]]")
L("meimei", "Let me do my full school morning! [[我早上六点一刻起床，六点半吃早饭，七点上学！]] I get up at six fifteen, eat breakfast at six thirty, and go to school at seven!", mood="excited", shot="close",
  board="Subj + Time + Verb: [[我六点半吃早饭]] ✔")
L("xiaoming", "And after school: [[我下午四点放学，五点回家，晚上十点睡觉。]] Finish school at four, go home at five, sleep at ten!", mood="happy", shot="close",
  board="[[放学]] finish school · [[回家]] go home · [[睡觉]] sleep")
L("dad", "Wait, let me try properly! [[我早上七点半喝咖啡。]] I drink coffee at half past seven in the morning!", mood="determined", shot="close")
sfx("ding")
L("laoshi", "[[太棒了！]] Magnificent! Subject [[我]], time [[早上七点半]], action [[喝咖啡]]! Mum is no longer a horse, and the clock is in the right place!", mood="happy", shot="two", gap=0.5)

confess("laoshi", "梅老师 LAOSHI MEI · Sixty-Second Recap")
L("laoshi", "Three golden rules for Topic One! One: [[我叫…]], [[我今年十三岁]] — no [[是]] needed before your age.", mood="teach", boardClear=True, board="1. [[我叫… · 我今年十三岁]]")
L("laoshi", "Two: count family members with [[口]], and negate [[有]] with [[没有]]: [[我家有四口人]].", mood="teach", board="2. [[我家有四口人 · 没有]]")
L("laoshi", "Three: Subject plus Time plus Action! [[我早上七点上学]]. Time ALWAYS comes before the verb!", mood="smug", board="3. Subj + Time + Verb ✔", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Five seconds on the clock with Laoshi Mei!", 2.8)
challenge(
    1,
    "How do you ask “How many people are in your family?”",
    "[[你家有几口人？]]",
    "family members take [[口]] (kǒu) → [[你家有几口人？]]",
    "Challenge one! How do you ask, how many people are in your family, in Mandarin?",
    "[[你家有几口人？]] Use [[几口人]] for family members!",
)
challenge(
    2,
    "Fix the word order: “I go to school at 7:30 a.m.”",
    "[[我早上七点半上学]]",
    "Subject [[我]] + Time [[早上七点半]] + Verb [[上学]]",
    "Challenge two! Put this in natural Mandarin order: I go to school at half past seven in the morning.",
    "[[我早上七点半上学。]] Subject, then time [[早上七点半]], then the verb [[上学]]!",
)
challenge(
    3,
    "Say “I don't have an older brother” in Mandarin.",
    "[[我没有哥哥]]",
    "[[有]] is ALWAYS negated with [[没]] → [[没有]]",
    "Challenge three! How do you say, I don't have an older brother?",
    "[[我没有哥哥。]] Remember, [[有]] is always negated with [[没]], never bu!",
)
end_card()
