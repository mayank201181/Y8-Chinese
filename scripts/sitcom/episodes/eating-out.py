# "《哎呀！一家人》 Ai-Ya! Family" S01E10 "Extra Spicy, Hold The Tears"
# Topic: eating-out — Eating Out & Ordering at a Restaurant

EP = dict(
    topic="eating-out",
    logline="The family dines out at Uncle Seng's Sichuan-Singapore Noodle House, where Dad forgets to ask for 'not too spicy', learns all five Mandarin flavours through tears, and calls for the bill.",
)

# ---------------- COLD OPEN ----------------
scene("hawker", [("uncle", 250), ("meimei", 540), ("xiaoming", 810), ("dad", 1060)], "FRIDAY DINNER · UNCLE SENG'S NOODLE HOUSE")
L("uncle", "[[欢迎光临！请问几位？]] Welcome! How many in your party?", mood="excited", shot="close",
  boardClear=True, board="[[欢迎光临！请问几位？]] = Welcome! Table for how many?")
L("dad", "Watch your fearless father order dinner in Mandarin! [[我们有四个人！]] And give me your spiciest chilli noodles — extra volcanic!", mood="smug", shot="close")
L("meimei", "Dad, Sichuan chilli oil does not negotiate. Say [[不要太辣]] — not too spicy!", mood="worried", shot="two")
L("dad", "Nonsense! British tastebuds of steel! Wait — one bite — WHY IS MY TONGUE ON FIRE?!", mood="shock", shot="close", prop="plate")
sfx("gong")
poof("laoshi", 1140)
L("laoshi", "[[哎呀！]] Somebody fetch iced soy milk! That single life-saving phrase you ignored was [[不要太辣]], not too spicy! Time for full restaurant training!", mood="teach", shot="close",
  board="[[太辣了！]] Too spicy! → Say [[不要太辣！]]")
freeze("SPICE LEVEL: DRAGON BREATH", 2.4, narrator="Narrator: Dad drank three glasses of water in eight seconds.")

confess("dad", "DAD · Chilli Casualty · Currently Hugging A Jug Of Water")
L("dad", "My eyebrows are sweating. Next time I am tattooing [[不要太辣]] onto my chopsticks.", mood="sad")

title()

# ---------------- ACT 1: SEATING, MENU & ORDERING DISHES ----------------
scene("hawker", [("uncle", 230), ("mum", 500), ("meimei", 790), ("laoshi", 1080)], "ARRIVING & ORDERING FROM THE MENU")
L("laoshi", "From the doorway! The staff greet you with [[欢迎光临！请问几位？]] Welcome, how many people? Answer [[四位]] or [[我们有四个人]], then ask for the menu: [[可以看菜单吗？]]!", mood="teach", shot="close",
  boardClear=True, board="[[菜单]] menu · [[点菜]] order food")
L("uncle", "[[请坐！给您菜单。你们想点什么？]] Please sit! Here's the menu. What would you like to order?", mood="happy", shot="close", prop="book")
L("laoshi", "In restaurants, native speakers love using [[来]] — literally 'bring over' — right before the measure word and dish! [[来一碗牛肉面！]]", mood="teach", shot="close",
  board="[[来]] / [[我要]] + Measure Word + Dish")
L("mum", "Let me order for the table! [[点菜！来一碗牛肉面、一盘饺子、一盘糖醋鱼，再来四杯冰水！]] One bowl of beef noodles, one plate of dumplings, sweet-and-sour fish, and four iced waters!", mood="happy", shot="close",
  board="[[来一碗牛肉面、一盘饺子]] ✔")
L("meimei", "And remember: tasty food is [[好吃]], while tasty drinks are [[好喝]]! [[这里的牛肉面很好吃，绿茶也很好喝！]]", mood="excited", shot="two",
  board="[[好吃]] tasty (food)  vs  [[好喝]] tasty (drinks)")

# ---------------- ACT 2: THE FIVE FLAVOURS & PAYING THE BILL ----------------
scene("hawker", [("uncle", 220), ("xiaoming", 490), ("dad", 780), ("laoshi", 1080)], "FIVE FLAVOURS & THE BILL")
L("laoshi", "Chinese cuisine balances the classic five flavours — [[酸、甜、苦、辣、咸]]! Sour, sweet, bitter, spicy, and salty!", mood="teach", shot="close",
  boardClear=True, board="Five flavours: [[酸]] sour · [[甜]] sweet · [[苦]] bitter · [[辣]] spicy · [[咸]] salty")
L("xiaoming", "Listen to how dishes use them! [[糖醋鱼酸酸甜甜的，很好吃！苦瓜有一点儿苦。]] Sweet-and-sour fish is tangy and sweet; bitter gourd is a bit bitter!", mood="excited", shot="close", prop="plate",
  board="[[酸酸甜甜]] sweet & sour · [[有一点儿苦]]")
L("dad", "Now my polite kitchen requests! [[我的面条不要太辣，也少放盐，不要太咸！]] Not too spicy, less salt, not too salty!", mood="determined", shot="close",
  board="Requests: [[不要太辣 · 少放盐 · 不要香菜]]")
L("uncle", "[[没问题！]] No problem at all — mild broth coming up!", mood="happy", shot="two")
L("laoshi", "Finally, when every plate is clean, call the waiter with [[服务员]], never 'hey you', and ask for the bill: [[服务员，买单！一共多少钱？]]!", mood="teach", shot="close",
  boardClear=True, board="Bill: [[服务员，买单！一共多少钱？]]")
L("dad", "My favourite line until I see the total! [[服务员，买单！一共多少钱？可以用手机付钱吗？]] Waiter, bill please! How much altogether? Can I pay by phone?", mood="determined", shot="close", prop="phone")
sfx("ding")
L("uncle", "[[一共四十八块！谢谢光临！]] Forty-eight dollars altogether — thank you for coming!", mood="excited", shot="two")
L("laoshi", "[[太棒了！]] Dad survived the chilli, nailed all five flavours, and paid the bill in flawless Mandarin!", mood="happy", shot="close", gap=0.4)

confess("laoshi", "梅老师 LAOSHI MEI · Sixty-Second Recap")
L("laoshi", "Three golden rules for Topic Ten! One: enter and order smoothly — [[欢迎光临！请问几位？]], [[菜单]], [[点菜]], [[来一碗牛肉面、一盘饺子]].", mood="teach", boardClear=True, board="1. [[请问几位 · 菜单 · 来一碗牛肉面、一盘饺子]]")
L("laoshi", "Two: master the five flavours [[酸甜苦辣咸]] and polite requests like [[不要太辣]]!", mood="teach", board="2. [[酸 · 甜 · 苦 · 辣 · 咸 · 不要太辣]]")
L("laoshi", "Three: settle up politely — [[服务员，买单！一共多少钱？]]!", mood="smug", board="3. [[服务员，买单！一共多少钱？]]", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Five seconds on the clock with Laoshi Mei!", 2.8)
challenge(
    1,
    "Order smoothly: “Bring one bowl of beef noodles and one plate of dumplings!”",
    "[[来一碗牛肉面、一盘饺子！]]",
    "[[来]] + [[一碗牛肉面]] (bowl) + [[一盘饺子]] (plate)",
    "Challenge one! Order for the table: bring one bowl of beef noodles and one plate of dumplings!",
    "[[来一碗牛肉面、一盘饺子！]] [[来]] is the natural restaurant way to order!",
)
challenge(
    2,
    "Name all five Mandarin flavours + “Not too spicy!”",
    "[[酸、甜、苦、辣、咸 · 不要太辣！]]",
    "Sour [[酸]] · Sweet [[甜]] · Bitter [[苦]] · Spicy [[辣]] · Salty [[咸]]",
    "Challenge two! Say the five flavours — sour, sweet, bitter, spicy, salty — plus not too spicy!",
    "[[酸、甜、苦、辣、咸！不要太辣！]]",
)
challenge(
    3,
    "Call for the bill: “Waiter, bill please! How much altogether?”",
    "[[服务员，买单！一共多少钱？]]",
    "[[服务员]] (waiter) + [[买单]] (bill) + [[一共多少钱？]] (total?)",
    "Challenge three! Finish dinner like a pro: waiter, bill please! How much altogether?",
    "[[服务员，买单！一共多少钱？]]",
)
end_card()
