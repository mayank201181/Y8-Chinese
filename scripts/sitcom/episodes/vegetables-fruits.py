# "《哎呀！一家人》 Ai-Ya! Family" S01E08 "King Of Durian Bargaining"
# Topic: vegetables-fruits — Vegetables, Fruits & Market Shopping

EP = dict(
    topic="vegetables-fruits",
    logline="At Uncle Seng's wet market stall, Dad mixes up half-kilo 'jin' with kilograms, sniffs his first Mao Shan Wang durian, and learns the art of Mandarin bargaining.",
)

# ---------------- COLD OPEN ----------------
scene("hawker", [("uncle", 280), ("meimei", 600), ("dad", 920)], "TIONG BAHRU WET MARKET · UNCLE SENG'S STALL")
L("uncle", "[[早安！新鲜的水果和蔬菜！]] Morning, neighbours! Fresh fruits and veggies just arrived!", mood="excited", shot="close")
L("dad", "Stand back, Meimei. Watch a master negotiator buy fruit from Uncle Seng! Wait — why is that spiky green rugby ball staring at me?", mood="shock", shot="close")
L("meimei", "That's [[榴莲]] — durian, the King of Fruits in Singapore! Smells dramatic, tastes creamy and sweet!", mood="excited", shot="two")
L("dad", "Right! Uncle Seng, give me five jin of apples — that's five whole kilograms, right?!", mood="smug", shot="close")
sfx("buzzer")
poof("laoshi", 1120)
L("laoshi", "[[哎呀！]] Abort the apple avalanche! In Chinese markets, [[一斤]] is FIVE HUNDRED grams — half a kilo! One full kilogram is [[一公斤]]!", mood="teach", shot="close",
  boardClear=True, board="[[一斤]] = 500g (half kilo)  |  [[一公斤]] = 1kg!")
L("uncle", "[[哈哈！]] Half a kilo vs one kilo — at least you won't need a wheelbarrow!", mood="happy", shot="close")
freeze("DURIAN LEVEL: MAXIMUM FRAGRANCE", 2.4, narrator="Narrator: Dad held his breath for forty-five seconds.")

confess("uncle", "UNCLE SENG · Wet Market Legend · Respects A Good Bargain")
L("uncle", "Thirty years running this stall! Anyone who says [[太贵了，便宜一点儿吧]] with good tones gets an extra mango on the house!", mood="happy")

title()

# ---------------- ACT 1: FRUITS & VEGETABLES ----------------
scene("hawker", [("uncle", 230), ("meimei", 500), ("xiaoming", 790), ("laoshi", 1080)], "THE PRODUCE AISLE")
L("laoshi", "First, fill your basket with essential fruits — [[水果]]! [[苹果]] apple, [[西瓜]] watermelon, [[草莓]] strawberry, [[香蕉]] banana, and Singapore's superstar [[榴莲]] durian!", mood="teach", shot="close",
  boardClear=True, board="[[水果]]: [[苹果 · 西瓜 · 草莓 · 香蕉 · 榴莲]]")
L("xiaoming", "Mmm, Uncle Seng's strawberries look amazing! [[这些草莓很新鲜，也很甜！]] These strawberries are super fresh and sweet!", mood="excited", shot="close",
  board="[[新鲜]] fresh · [[甜]] sweet · [[酸]] sour")
L("meimei", "Now Mum's vegetable list — [[蔬菜]]! [[西红柿]] tomato, [[黄瓜]] cucumber, [[青菜]] green leafy veg, and [[土豆]] potato!", mood="happy", shot="close", prop="phone",
  board="[[蔬菜]]: [[西红柿 · 黄瓜 · 青菜 · 土豆]]")
L("laoshi", "Fun vocab secret: look at the characters! [[西红柿]] is literally western red persimmon, [[黄瓜]] is yellow melon, and [[土豆]] is earth bean — potato!", mood="teach", shot="close",
  board="[[西红柿]] tomato · [[黄瓜]] cucumber · [[土豆]] potato")
L("uncle", "Healthy Year Eight wisdom: [[你们应该多吃蔬菜和水果！]] Eat plenty of vegetables and fruit!", mood="happy", shot="two")

# ---------------- ACT 2: WEIGHTS, PRICES & BARGAINING ----------------
scene("hawker", [("uncle", 230), ("dad", 510), ("meimei", 800), ("laoshi", 1090)], "PRICES & BARGAINING SHOWDOWN")
L("laoshi", "Time to ask the price! Point and ask [[多少钱？]] how much money, or [[苹果怎么卖？]] how are apples sold?", mood="teach", shot="close",
  boardClear=True, board="[[多少钱？ / 苹果怎么卖？]] = How much?")
L("dad", "Let me try! [[叔叔，苹果多少钱一斤？]] Uncle, how much are apples per half-kilo?", mood="determined", shot="close")
L("uncle", "[[五块钱一斤！草莓八块五一盒！]] Five dollars per jin! Strawberries are eight fifty a box!", mood="happy", shot="close",
  board="[[五块钱一斤]] ($5 / 500g) · [[八块五]] ($8.50)")
L("laoshi", "Notice spoken vs written money! On price tags you see [[元]] and [[角]], like ten cents units, while in everyday speech everyone says [[块]] and [[毛]]: [[五块钱]], [[八块五]]!", mood="teach", shot="close",
  board="Spoken [[块 / 毛]]  =  Written [[元 / 角]]")
L("meimei", "Now deploy the classic wet-market bargain combo, Dad! Exclaim [[太贵了！]] too expensive, then soften politely with [[便宜一点儿吧！]] a little bit cheaper, please!", mood="excited", shot="close",
  boardClear=True, board="Bargain: [[太贵了！便宜一点儿吧！]]")
L("dad", "Watch the King of Bargaining! [[哎呀，榴莲三十块钱一公斤？太贵了！便宜一点儿吧！]]", mood="determined", shot="close")
L("uncle", "[[好吧，二十五块！还要别的吗？]] Alright, twenty-five dollars! Anything else?", mood="happy", shot="two")
L("dad", "[[还要两斤西红柿和一斤青菜。一共多少钱？]] Also two jin of tomatoes and one jin of greens. How much altogether?", mood="excited", shot="close")
sfx("ding")
L("laoshi", "[[满分！]] Full marks! Weights, vegetables, bargaining with [[太贵了！便宜一点儿吧！]], and [[一共多少钱？]] to close!", mood="happy", shot="close", gap=0.4)

confess("laoshi", "梅老师 LAOSHI MEI · Sixty-Second Recap")
L("laoshi", "Three golden rules for Topic Eight! One: know your fruits [[苹果、西瓜、草莓、榴莲]] and veggies [[西红柿、黄瓜、青菜、土豆]].", mood="teach", boardClear=True, board="1. [[苹果·西瓜·草莓·榴莲 | 西红柿·黄瓜·青菜·土豆]]")
L("laoshi", "Two: [[一斤]] is half a kilo, [[一公斤]] is one kilo, and spoken prices use [[块]]: [[五块钱一斤]]!", mood="teach", board="2. [[一斤]] (500g) · [[一公斤]] (1kg) · [[五块钱一斤]]")
L("laoshi", "Three: bargain with a smile — [[太贵了！便宜一点儿吧！]] — then ask the total with [[一共多少钱？]]!", mood="smug", board="3. [[太贵了！便宜一点儿吧！ · 一共多少钱？]]", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Five seconds on the clock with Laoshi Mei!", 2.8)
challenge(
    1,
    "Name these four: “tomato, cucumber, potato, strawberry”",
    "[[西红柿、黄瓜、土豆、草莓]]",
    "[[西红柿]] tomato · [[黄瓜]] cucumber · [[土豆]] potato · [[草莓]] strawberry",
    "Challenge one! Say tomato, cucumber, potato, and strawberry in Mandarin!",
    "[[西红柿、黄瓜、土豆、草莓！]] Four wet-market superstars!",
)
challenge(
    2,
    "Ask & answer: “How much? Five dollars per jin (500g).”",
    "[[多少钱？五块钱一斤。]]",
    "[[多少钱？]] + [[五块钱]] ($5) + [[一斤]] (500g)",
    "Challenge two! Ask how much it costs, then answer: five dollars per jin!",
    "[[多少钱？五块钱一斤！]] Spoken Mandarin uses [[块]] for dollars and [[一斤]] for five hundred grams!",
)
challenge(
    3,
    "Bargain like a pro: “Too expensive! Make it a little cheaper!”",
    "[[太贵了！便宜一点儿吧！]]",
    "[[太贵了！]] (too expensive!) + [[便宜一点儿吧！]] (a bit cheaper!)",
    "Challenge three! Give Uncle Seng the classic market bargain line: too expensive, make it a bit cheaper!",
    "[[太贵了！便宜一点儿吧！]] Polite [[吧]] at the end wins the discount!",
)
end_card()
