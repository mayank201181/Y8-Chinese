# "《哎呀！一家人》 Ai-Ya! Family" S01E05 "Doctor, My Tones Hurt"
# Topic: illness — Illness, Body & Seeing the Doctor

EP = dict(
    topic="illness",
    logline="After overheating in his puffer jacket and gulping three bowls of iced cendol, Dad catches a dramatic cold and learns how to describe symptoms, see a doctor, and give Mandarin health advice.",
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 320), ("mum", 640), ("meimei", 940)], "WEDNESDAY MORNING · SOFA HOSPITAL")
L("dad", "Farewell, cruel world. After yesterday's puffer-jacket incident and three bowls of ice, everything hurts. Even my tones hurt.", mood="sad", shot="close")
L("mum", "Stop being dramatic! [[你怎么了？哪里不舒服？]] What's wrong with you? Where do you feel unwell?", mood="worried", shot="two",
  boardClear=True, board="[[你怎么了？ / 哪里不舒服？]] = What's wrong?")
L("dad", "My head! My stomach! In Mandarin: teng wo de tou! Teng wo de duzi!", mood="sad", shot="close")
sfx("buzzer")
poof("laoshi", 1120)
L("laoshi", "[[哎呀！]] Even sick, word order comes first! Put the body part FIRST, then [[疼]] hurt right after it: [[头疼]], [[肚子疼]], [[嗓子疼]]!", mood="teach", shot="close",
  board="Body part + [[疼]]: [[头疼 · 肚子疼 · 嗓子疼]]")
L("meimei", "Dad's Mandarin grammar has a fever too.", mood="deadpan", shot="close")
freeze("PATIENT ZERO OF BAD WORD ORDER", 2.4, narrator="Narrator: Mum fetched the thermometer anyway.")

confess("meimei", "MEIMEI · Junior Nurse · Hiding The Iced Drinks")
L("meimei", "Whenever Mum gets a cold, she still runs the whole flat. Whenever Dad gets a sniffle, he writes his will on a napkin.", mood="eyeroll")

title()

# ---------------- ACT 1: BODY PARTS & SYMPTOMS ----------------
scene("living", [("dad", 250), ("mum", 530), ("xiaoming", 810), ("laoshi", 1090)], "SYMPTOM CHECKLIST")
L("laoshi", "Quick body-part scan from top to toe! [[头]] head, [[眼睛]] eyes, [[耳朵]] ears, [[鼻子]] nose, [[嘴]] mouth, [[嗓子]] throat, [[手]] hand, [[肚子]] tummy, [[腿]] leg, [[脚]] foot!", mood="teach", shot="close",
  boardClear=True, board="[[头 · 眼睛 · 耳朵 · 鼻子 · 嗓子 · 肚子 · 腿 · 脚]]")
L("xiaoming", "Uncle, tell us properly! [[你哪里不舒服？]] Which symptoms do you actually have?", mood="worried", shot="close")
L("dad", "Let me try body part plus [[疼]]: [[我头疼，嗓子疼，肚子也有一点儿疼。]] My head hurts, my throat hurts, and my tummy hurts a bit too!", mood="sad", shot="close",
  board="[[我头疼，嗓子疼]] ✔")
L("mum", "Let's check the thermometer — thirty-eight point five! [[你发烧了！你感冒了，还一直咳嗽！]] You have a fever! You caught a cold, and you keep coughing!", mood="shock", shot="close",
  board="[[发烧]] fever · [[感冒]] cold · [[咳嗽]] cough")
L("laoshi", "Memorise that symptom trio! [[感冒]] catch a cold, [[发烧]] have a fever, and [[咳嗽]] cough! Time to go to the clinic: [[去医院看医生]]!", mood="teach", shot="close",
  board="[[生病了]] sick → [[去医院看医生]] see a doctor")

# ---------------- ACT 2: SEEING THE DOCTOR & HEALTH ADVICE ----------------
scene("classroom", [("dad", 260), ("meimei", 560), ("xiaoming", 840), ("laoshi", 1100)], "ROLEPLAY CLINIC · DR MEI ON DUTY")
sfx("chime")
L("laoshi", "Welcome to Doctor Mei's clinic! [[请坐。你怎么了？]] Please sit down. What seems to be the matter?", mood="teach", shot="close", prop="tablet",
  boardClear=True, board="Doctor: [[你怎么了？]]  Patient: [[我感冒了，发烧、咳嗽。]]")
L("dad", "[[医生，我生病了。我感冒了，头疼，还咳嗽。]] Doctor, I'm ill — I have a cold, a headache, and a cough.", mood="sad", shot="close")
L("laoshi", "Now listen to the two superstar advice words! First, [[应该]] means should: [[你应该多喝水，多休息，早点睡觉！]] You should drink more warm water, rest more, and sleep early!", mood="teach", shot="close",
  board="[[你应该多喝水、多休息]] = You should drink more water & rest")
L("meimei", "And no more iced cendol! [[别喝冰水！]] Don't drink iced water!", mood="annoyed", shot="close",
  board="[[别 / 不要]] + Verb = Don't… ([[别喝冰水！]])")
L("xiaoming", "Second superstar word: when the doctor says you MUST take medicine, that tiny character [[得]] is pronounced dei, third tone! [[你得吃药！]]", mood="excited", shot="close",
  boardClear=True, board="[[得]] děi = must: [[你得吃药！]] (take medicine)")
L("laoshi", "Notice Mandarin says EAT medicine — [[吃药]], never drink medicine! For example: [[一天吃三次，一次两片。]] Three times a day, two tablets each time!", mood="teach", shot="close",
  board="[[吃药]] take medicine · [[一天三次]]")
L("dad", "Understood, Doctor! [[我得吃药，我应该多喝水、多休息！]] Wait — does [[多休息]] mean Xiaoming washes the dishes all week?", mood="smug", shot="close")
sfx("ding")
L("xiaoming", "[[哎呀！]] Suddenly Uncle's tones sound remarkably healthy!", mood="happy", shot="two", gap=0.4)

confess("laoshi", "梅老师 LAOSHI MEI · Sixty-Second Recap")
L("laoshi", "Three golden rules for Topic Five! One: put the body part BEFORE [[疼]] — [[头疼、肚子疼、嗓子疼]], plus [[发烧、感冒、咳嗽]].", mood="teach", boardClear=True, board="1. [[头疼 · 肚子疼 · 发烧 · 感冒 · 咳嗽]]")
L("laoshi", "Two: see the doctor is [[看医生]], and take medicine is [[吃药]]!", mood="teach", board="2. [[去医院看医生 · 吃药]]")
L("laoshi", "Three: give caring advice with [[应该]] should and [[得]] must — [[你应该多喝水、多休息，你得吃药！]]", mood="smug", board="3. [[你应该多喝水、多休息 · 你得吃药]]", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Five seconds on the clock with Laoshi Mei!", 2.8)
challenge(
    1,
    "Say “I have a headache, a fever, and a cold.”",
    "[[我头疼、发烧，还感冒了。]]",
    "Body part + [[疼]] ([[头疼]]), [[发烧]] (fever), [[感冒]] (cold)",
    "Challenge one! Tell the doctor: I have a headache, a fever, and a cold, in Mandarin!",
    "[[我头疼、发烧，还感冒了！]] Body part first for [[头疼]]!",
)
challenge(
    2,
    "Give advice: “You should drink more water and rest more.”",
    "[[你应该多喝水，多休息。]]",
    "[[应该]] (should) + [[多喝水]] + [[多休息]]",
    "Challenge two! Give caring health advice: you should drink more water and rest more!",
    "[[你应该多喝水，多休息！]] [[多]] before a verb means do more of it!",
)
challenge(
    3,
    "Say “You must see a doctor and take medicine!” (use 得 děi)",
    "[[你得看医生，你得吃药！]]",
    "[[得]] (děi = must) + [[看医生]] / [[吃药]]",
    "Challenge three! Using [[得]], tell someone: you must see a doctor and take medicine!",
    "[[你得看医生，你得吃药！]] Remember, take medicine in Mandarin is [[吃药]]!",
)
end_card()
