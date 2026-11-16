# "《哎呀！一家人》 Ai-Ya! Family" S01E02 "Two Books Or Èr Books?"
# Topic: time-measure-words — Dates, Time & Measure Words

EP = dict(
    topic="time-measure-words",
    logline="Dad tries to buy two Mandarin textbooks with 'er ben shu', scrambles Tuesday's date backwards, and meets the mighty army of Chinese measure words.",
)

# ---------------- COLD OPEN ----------------
scene("living", [("meimei", 280), ("xiaoming", 600), ("dad", 920)], "TUESDAY MORNING · LIVING ROOM")
L("dad", "New study notebook! Let me write today's date in elite Mandarin: Tuesday, the seventeenth of November, twenty twenty-six!", mood="smug", shot="close", prop="book")
L("meimei", "Careful, Dad. English goes small to big, or scrambled in the middle. Mandarin goes strictly biggest to smallest.", mood="deadpan", shot="two")
L("dad", "Easy! Plus I bought two shiny dictionaries! Look: er ben shu!", mood="excited", shot="close", prop="book")
sfx("buzzer")
poof("laoshi", 1110)
L("laoshi", "[[哎呀！]] My ears! You NEVER say er before a measure word! Counting one, two, three is [[一、二、三]], yes, [[二]]. But two of anything takes [[两]]: [[两本书]]!", mood="teach", shot="close",
  boardClear=True, board="✘ 二本书   ✔ [[两本书]] (two books)")
L("xiaoming", "[[对！两个人，两本书，两杯水！]] Two people, two books, two cups of water — always [[两]]!", mood="excited", shot="close",
  board="[[两个人]] · [[两本书]] · [[两杯水]]")
L("dad", "Why does the number two need a costume change just to stand next to a book?!", mood="shock", shot="close")
freeze("\"ER BEN SHU?!\"", 2.4, narrator="Narrator: Number Two has strict wardrobe rules.")

confess("dad", "DAD · Amateur Polyglot · Confused By Classifiers")
L("dad", "In English, you say two books, two dogs, two trousers. Done! Apparently in Mandarin every noun brings its own bodyguard.", mood="annoyed")

title()

# ---------------- ACT 1: BIG-TO-SMALL DATES & ER VS LIANG ----------------
scene("classroom", [("meimei", 260), ("xiaoming", 600), ("laoshi", 940)], "TANGLIN STUDY CORNER · DATES")
L("laoshi", "First, let's fix your Dad's calendar! [[今天几月几号？星期几？]] What month and date is today, and what day of the week?", mood="teach", shot="close",
  boardClear=True, board="[[今天几月几号？星期几？]]")
L("meimei", "Biggest unit to smallest unit! Year [[年]], month [[月]], date [[号]], then weekday [[星期]]!", mood="happy", shot="close",
  board="Year [[年]] → Month [[月]] → Day [[号]] → Weekday")
L("xiaoming", "[[今天是二零二六年十一月十七号，星期二！]] Today is Tuesday, the seventeenth of November, twenty twenty-six!", mood="excited", shot="close",
  board="[[2026年11月17号星期二]] ✔")
L("laoshi", "Spot how clean Mandarin months and weekdays are! Month eleven is [[十一月]], and Tuesday is literally weekday two: [[星期二]]!", mood="teach", shot="close",
  board="[[十一月]] Nov · [[星期一]] Mon → [[星期天]] Sun")
L("meimei", "And yesterday, today, tomorrow are [[昨天、今天、明天]]! Wait — why is Tuesday [[星期二]] with [[二]], not liang?", mood="thinking", shot="close")
L("laoshi", "Brilliant question! Use [[二]] for counting, dates, ordinals like [[第二]], twelve [[十二]], and twenty [[二十]]. Switch to [[两]] right before a measure word, like [[两点]] two o'clock or [[两个星期]] two weeks!", mood="teach", shot="close",
  boardClear=True, board="[[二]]: [[星期二 · 十二 · 第二]]  |  [[两]] + MW: [[两个 · 两点]]")

# ---------------- ACT 2: CORE, SHAPE & PAIR CLASSIFIERS + ZHE/NA ----------------
scene("mall", [("meimei", 230), ("xiaoming", 500), ("dad", 790), ("laoshi", 1080)], "ORCHARD ROAD · MEASURE WORD BOOTCAMP")
L("dad", "Right, test me at the shops! In Mandarin, I cannot just say one coffee or this shirt?", mood="determined", shot="close")
L("laoshi", "Never! Between ANY number — or [[这]] this and [[那]] that — and the noun, you MUST slot in a measure word! Your everyday lifesaver is [[个]]: [[一个人]], [[三个苹果]], [[这个杯子]]!", mood="teach", shot="close",
  boardClear=True, board="Number / [[这 · 那]] + Measure Word + Noun")
L("meimei", "And food and study words match their containers! [[一本书]] for a book, [[一杯茶]] for a cup of tea, [[一碗米饭]] for a bowl of rice, and [[一盘饺子]] for a plate of dumplings!", mood="happy", shot="close", prop="book",
  board="[[本]] book · [[杯]] cup · [[碗]] bowl · [[盘]] plate")
L("xiaoming", "Don't forget [[口]] for family members — [[我家有四口人]] — and [[张]] for flat things like tables, paper, or tickets: [[一张桌子]], [[两张票]]!", mood="excited", shot="close",
  board="[[口]] family · [[张]] flat (table, ticket, paper)")
L("dad", "Aha! What about clothes and pets? Let me guess: yi ge trousers and yi ge shoes!", mood="smug", shot="close")
sfx("buzzer")
L("laoshi", "[[哎呀！]] Visualise the shape! Tops and coats take [[件]]: [[一件衬衫]], [[那件外套]]. Long flexible things — trousers, skirts, fish, roads — take [[条]]: [[一条裤子]], [[一条鱼]]!", mood="teach", shot="close",
  boardClear=True, board="[[件]] tops/coats · [[条]] long (trousers, skirt, fish)")
L("meimei", "Pairs take [[双]], like shoes, socks, or chopsticks: [[一双运动鞋]], [[一双筷子]]! And small animals take [[只]]: [[一只小狗]], [[两只猫]]!", mood="excited", shot="close",
  board="[[双]] pairs (shoes, chopsticks) · [[只]] animals")
L("dad", "Hold on, I've got this! [[我想买这件衬衫、那条裤子和一双运动鞋！]] I want to buy this shirt, those trousers, and a pair of trainers!", mood="determined", shot="close")
sfx("ding")
L("laoshi", "[[太好了！]] Three measure words in a single breath — [[这件]], [[那条]], [[一双]]! Not a rogue er in sight!", mood="happy", shot="two", gap=0.4)

confess("laoshi", "梅老师 LAOSHI MEI · Sixty-Second Recap")
L("laoshi", "Three golden rules for Topic Two! One: dates always run biggest to smallest — [[二零二六年十一月十七号星期二]].", mood="teach", boardClear=True, board="1. [[2026年11月17号星期二]] (Big → Small)")
L("laoshi", "Two: use [[二]] in dates and numbers like [[十二]] and [[星期二]], but ALWAYS use [[两]] before a measure word: [[两本书]], [[两个人]].", mood="teach", board="2. [[星期二]] vs [[两本书 · 两个人]]")
L("laoshi", "Three: match the classifier to the noun — even after [[这]] and [[那]]! [[这个、那本、一件、一条、一双、一只、一张]]!", mood="smug", board="3. [[这/那]] + [[个·本·杯·碗·盘·件·条·双·只·张]]", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Five seconds on the clock with Laoshi Mei!", 2.8)
challenge(
    1,
    "Say “Tuesday, 17 November 2026” in Mandarin order.",
    "[[2026年11月17号星期二]]",
    "Big → small: Year [[年]] + Month [[月]] + Date [[号]] + Weekday",
    "Challenge one! Say Tuesday, the seventeenth of November, twenty twenty-six in natural Mandarin order.",
    "[[二零二六年十一月十七号星期二！]] Biggest to smallest: year, month, day, then weekday!",
)
challenge(
    2,
    "How do you say “two books” and “a pair of shoes”?",
    "[[两本书 · 一双鞋]]",
    "[[两]] before measure words; [[本]] for books, [[双]] for pairs",
    "Challenge two! How do you say two books, and a pair of shoes, in Mandarin?",
    "[[两本书，一双鞋！]] Use [[两]] before a measure word, [[本]] for books, and [[双]] for pairs!",
)
challenge(
    3,
    "Fix the mistake: “this shirt and those trousers”",
    "[[这件衬衫和那条裤子]]",
    "[[这/那]] MUST take a classifier: [[件]] (top) & [[条]] (long)",
    "Challenge three! Translate: this shirt and those trousers — don't forget the measure words!",
    "[[这件衬衫和那条裤子！]] Tops take [[件]] and trousers take [[条]]!",
)
end_card()
