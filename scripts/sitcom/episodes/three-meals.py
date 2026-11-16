# "《哎呀！一家人》 Ai-Ya! Family" S01E09 "Congee, Chicken Rice, Repeat"
# Topic: three-meals — Three Meals a Day & Drinks

EP = dict(
    topic="three-meals",
    logline="Beijing breakfast meets Singapore hawker lunch as Xiaoming craves steamed buns, Meimei champions Hainanese chicken rice, and Dad forgets the verb 'chi' before meals.",
)

# ---------------- COLD OPEN ----------------
scene("kitchen", [("mum", 260), ("xiaoming", 580), ("dad", 900)], "SUNDAY MORNING · KITCHEN SHOWDOWN")
L("dad", "Morning, team! Stomach rumbling at volume ten! Listen to my Mandarin: Wo e! Now I breakfast — wo zaofan!", mood="excited", shot="close", prop="plate")
sfx("buzzer")
poof("laoshi", 1110)
L("laoshi", "[[哎呀！]] Two kitchen crimes before toast! First, 'I'm hungry now' needs change-of-state [[了]]: [[我饿了！]] Second, [[早饭]] is a noun, not a verb — you MUST say [[吃早饭]], eat breakfast!", mood="teach", shot="close",
  boardClear=True, board="✘ 我早饭   ✔ [[我饿了！我要吃早饭！]]")
L("mum", "And if you're thirsty, add [[很]]: [[我很渴！]] Don't turn nouns into verbs before coffee!", mood="smug", shot="two")
L("xiaoming", "[[我饿了，我也很渴！]] Can we eat before Uncle invents 'I lunch'?", mood="happy", shot="close")
freeze("\"WO ZAOFAN!\"", 2.4, narrator="Narrator: Breakfast refused to cook itself without a verb.")

confess("xiaoming", "XIAOMING · Beijing Bun Ambassador · Newly Obsessed With Chicken Rice")
L("xiaoming", "In Beijing I grew up on hot [[包子]] and [[饺子]]. Then Meimei introduced me to Singapore [[鸡饭]]. Now I want four meals a day.", mood="excited")

title()

# ---------------- ACT 1: THREE MEALS & STAPLE FOODS ----------------
scene("kitchen", [("mum", 240), ("meimei", 520), ("xiaoming", 800), ("laoshi", 1090)], "BREAKFAST, LUNCH & DINNER")
L("laoshi", "Three meals a day is [[一日三餐]]: [[早饭]] breakfast, [[午饭]] lunch, and [[晚饭]] dinner — always paired with [[吃]]!", mood="teach", shot="close",
  boardClear=True, board="[[一日三餐]]: [[吃早饭 · 吃午饭 · 吃晚饭]]")
L("xiaoming", "For [[早饭]], Beijing style is warm and cosy! [[我早饭常常吃包子和鸡蛋，喝热牛奶。]] Steamed buns, eggs, and hot milk!", mood="happy", shot="close", prop="plate",
  board="Breakfast: [[包子]] buns · [[鸡蛋]] eggs · [[面包]] bread")
L("meimei", "For [[午饭]] at school or the hawker centre, Singapore wins! [[我午饭最喜欢吃鸡饭或者面条！]] Hainanese chicken rice or noodles!", mood="excited", shot="close",
  board="Lunch: [[鸡饭]] chicken rice · [[米饭]] rice · [[面条]] noodles")
L("mum", "And tonight for [[晚饭]], we're folding northern classics together! [[今天晚饭我们吃饺子、米饭和青菜！]] Dumplings, steamed rice, and greens!", mood="happy", shot="close",
  board="Dinner: [[饺子]] dumplings · [[米饭]] · [[青菜]]")
L("laoshi", "Bonus healthy-diet rule from Mum's kitchen: [[多吃蔬菜水果，少喝可乐！]] Eat plenty of veg and fruit, and drink less cola!", mood="teach", shot="close",
  board="Healthy diet: [[多吃蔬菜水果 · 少喝可乐]]")

# ---------------- ACT 2: DRINKS, CONTAINERS & HUNGRY / THIRSTY / FULL ----------------
scene("hawker", [("uncle", 230), ("meimei", 500), ("dad", 790), ("laoshi", 1080)], "LUNCH AT THE HAWKER CENTRE")
L("uncle", "[[你们想喝什么？]] What would you all like to drink with your chicken rice?", mood="happy", shot="close",
  boardClear=True, board="[[喝]] + Drinks: [[牛奶 · 果汁 · 绿茶 · 水 · 咖啡]]")
L("laoshi", "Watch the container measure words closely! Cups and glasses take [[杯]], bowls take [[碗]], and plates take [[盘]]!", mood="teach", shot="close",
  board="[[一杯]] cup/glass · [[一碗]] bowl · [[一盘]] plate")
L("meimei", "[[我很渴！我要一杯果汁和一碗面条！]] I'm thirsty! I'd like a glass of fruit juice and a bowl of noodles!", mood="excited", shot="close",
  board="[[我很渴 · 一杯果汁 · 一碗面条]]")
L("dad", "My turn! Let me match every single container! [[我饿了！我要一盘鸡饭、一盘饺子和一杯绿茶！]]", mood="determined", shot="close", prop="plate")
L("uncle", "[[好嘞！请慢用！]] Coming right up! Enjoy your meal — do you need a fork?", mood="excited", shot="two")
L("dad", "No fork needed! [[我会用筷子吃饺子和面条！]] I know how to use chopsticks to eat dumplings and noodles!", mood="smug", shot="close")
L("dad", "Twenty minutes later... phew! [[太好吃了！我吃饱了！]] Delicious! I am completely full!", mood="happy", shot="close")
sfx("ding")
L("laoshi", "[[太棒了！]] From [[我饿了]] and [[我很渴]], through [[碗、盘、杯]], all the way to [[我吃饱了]] I'm full! Not a single missing verb!", mood="happy", shot="close", gap=0.4)

confess("laoshi", "梅老师 LAOSHI MEI · Sixty-Second Recap")
L("laoshi", "Three golden rules for Topic Nine! One: pair [[吃]] with [[早饭、午饭、晚饭]] and staples [[米饭、面条、包子、饺子、鸡饭]].", mood="teach", boardClear=True, board="1. [[吃早饭/午饭/晚饭 · 米饭·面条·包子·饺子·鸡饭]]")
L("laoshi", "Two: pair [[喝]] with drinks [[牛奶、果汁、绿茶]], and match containers [[一碗面条、一盘饺子、一杯绿茶]].", mood="teach", board="2. [[喝牛奶/果汁/绿茶 · 一碗 · 一盘 · 一杯]]")
L("laoshi", "Three: nail the mealtime feelings — [[我饿了]] hungry, [[我很渴]] thirsty, and [[我吃饱了]] full!", mood="smug", board="3. [[我饿了 · 我很渴 · 我吃饱了]]", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Five seconds on the clock with Laoshi Mei!", 2.8)
challenge(
    1,
    "Say “For breakfast I eat steamed buns and drink milk.”",
    "[[我早饭吃包子，喝牛奶。]]",
    "[[早饭]] + [[吃包子]] + [[喝牛奶]] (keep [[吃]] & [[喝]]!)",
    "Challenge one! Say: for breakfast I eat steamed buns and drink milk!",
    "[[我早饭吃包子，喝牛奶！]] Always include [[吃]] for food and [[喝]] for drinks!",
)
challenge(
    2,
    "Match the containers: “a bowl of noodles, a plate of dumplings, a cup of green tea”",
    "[[一碗面条、一盘饺子、一杯绿茶]]",
    "[[碗]] bowl · [[盘]] plate · [[杯]] cup/glass",
    "Challenge two! Use the three container measure words: a bowl of noodles, a plate of dumplings, and a cup of green tea!",
    "[[一碗面条、一盘饺子、一杯绿茶！]] [[碗]], [[盘]], and [[杯]]!",
)
challenge(
    3,
    "Say all three: “I'm hungry! I'm very thirsty! I'm full!”",
    "[[我饿了！我很渴！我吃饱了！]]",
    "[[我饿了]] (hungry) · [[我很渴]] (thirsty) · [[我吃饱了]] (full)",
    "Challenge three! Say all three mealtime feelings: I'm hungry, I'm very thirsty, and I'm full!",
    "[[我饿了！我很渴！我吃饱了！]]",
)
end_card()
