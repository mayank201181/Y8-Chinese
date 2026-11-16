# "《哎呀！一家人》 Ai-Ya! Family" S01E04 "Puffer Jacket On Orchard Road"
# Topic: seasons — Four Seasons & Clothing

EP = dict(
    topic="seasons",
    logline="Because the calendar says December, Dad wears an Arctic puffer jacket to Orchard Road and tries to 'chuan' a woolly hat, sparking a Singapore-versus-Beijing climate showdown.",
)

# ---------------- COLD OPEN ----------------
scene("mall", [("meimei", 260), ("xiaoming", 580), ("dad", 910)], "ORCHARD ROAD · DECEMBER IN SINGAPORE")
L("dad", "It is December! Winter has arrived! Stand back while I model my expedition parka, wool scarf, and ski gloves!", mood="excited", shot="close")
L("meimei", "Dad, we live one degree north of the equator. Tourists in shorts are taking photos of you.", mood="deadpan", shot="two")
L("dad", "Fashion knows no latitude! Look: wo chuan dayi, wo chuan weijin, wo chuan maozi!", mood="smug", shot="close")
sfx("buzzer")
poof("laoshi", 1110)
L("laoshi", "[[哎呀！]] First, you are going to melt into soup! Second, you cannot [[穿]] a hat or scarf! [[穿]] is for clothes on your torso, legs, and feet — accessories take [[戴]]!", mood="teach", shot="close",
  boardClear=True, board="[[穿]] clothes  ≠  [[戴]] accessories (hat/scarf/glasses)!")
L("xiaoming", "[[叔叔，新加坡没有冬天！一年四季都是夏天！]] Uncle, Singapore has no winter — it's summer all year round!", mood="shock", shot="close")
L("dad", "Is someone grilling satay, or is that me inside this coat?", mood="worried", shot="close")
freeze("ONE PUFFER JACKET · THIRTY-THREE DEGREES", 2.4, narrator="Narrator: Dad lasted four minutes before unzipping.")

confess("mum", "MUM · Sensible Singaporean · Left Dad Five Metres Behind")
L("mum", "Every December he sees fake snow on the shopping mall Christmas trees and forgets we live in the tropics.", mood="eyeroll")

title()

# ---------------- ACT 1: FOUR SEASONS & SINGAPORE VS BEIJING ----------------
scene("living", [("meimei", 250), ("xiaoming", 560), ("mum", 840), ("laoshi", 1090)], "AIR-CONDITIONED RECOVERY · FOUR SEASONS")
L("laoshi", "Now that Dad is safely near a fan, let's name the four seasons! [[一年有四个季节：春天、夏天、秋天、冬天。]]", mood="teach", shot="close",
  boardClear=True, board="[[春天]] spring · [[夏天]] summer · [[秋天]] autumn · [[冬天]] winter")
L("xiaoming", "Beijing has four distinct seasons! [[春天很暖和，夏天很热，秋天很凉快，冬天常常下雪！]] Spring is warm, summer is hot, autumn is cool, and winter often snows!", mood="excited", shot="close",
  board="[[春]]暖和 · [[夏]]热 · [[秋]]凉快 · [[冬]]冷/下雪")
L("mum", "[[小明，你最喜欢哪个季节？]] Xiaoming, which season do you like best?", mood="happy", shot="close",
  board="[[你最喜欢哪个季节？]] = Favourite season?")
L("xiaoming", "[[我最喜欢秋天，因为不冷也不热，非常舒服！]] I like autumn best, because it's neither cold nor hot — super comfortable!", mood="happy", shot="close",
  board="[[我最喜欢秋天 · 不冷也不热]]")
L("meimei", "Meanwhile in Singapore: [[新加坡一年四季都很热，常常下雨。]] And let's compare with [[比]]: [[北京的冬天比新加坡冷得多！]] Beijing's winter is much colder than Singapore's!", mood="excited", shot="close",
  boardClear=True, board="A [[比]] B + Adj: [[北京的冬天比新加坡冷得多！]]")
L("laoshi", "Golden comparison warning! With [[比]], NEVER sneak in [[很]]! Don't say bi xinjiapo hen leng — say [[比新加坡冷]], or add [[得多]] at the end for much colder!", mood="teach", shot="close",
  board="✘ 比新加坡很冷   ✔ [[比新加坡冷得多]]")

# ---------------- ACT 2: CHUAN VS DAI & PACKING FOR BEIJING ----------------
scene("bedroom", [("meimei", 240), ("xiaoming", 530), ("dad", 820), ("laoshi", 1090)], "PACKING A SUITCASE FOR BEIJING")
L("dad", "Fine! If Orchard Road rejects my puffer jacket, I'm packing for a family holiday to Beijing! Coach me on [[穿]] versus [[戴]]!", mood="determined", shot="close")
L("laoshi", "Think: essential clothing you step or slip your body into takes [[穿]]! [[穿毛衣]] jumper, [[穿大衣]] coat, [[穿衬衫]] shirt, [[穿裤子]] trousers, [[穿裙子]] skirt, [[穿运动鞋]] trainers!", mood="teach", shot="close",
  boardClear=True, board="[[穿]]: [[毛衣 · 大衣 · 衬衫 · 裤子 · 裙子 · 运动鞋]]")
L("meimei", "And accessories that perch on your head, neck, hands, eyes, or wrist take [[戴]]! [[戴帽子]] hat, [[戴围巾]] scarf, [[戴手套]] gloves, [[戴眼镜]] glasses, [[戴手表]] watch!", mood="happy", shot="close",
  board="[[戴]]: [[帽子 · 围巾 · 手套 · 眼镜 · 手表]]")
L("xiaoming", "In Singapore today, keep it light: [[在新加坡，我穿T恤衫和短裤，戴太阳镜。]] T-shirt and shorts with [[穿]], sunglasses with [[戴]]!", mood="happy", shot="close",
  board="Singapore: [[穿T恤衫 · 戴太阳镜]]")
L("dad", "And when we land in snowy Beijing: [[冬天去北京，我要穿毛衣和大衣，还要戴帽子、围巾和手套！]]", mood="determined", shot="close")
sfx("ding")
L("laoshi", "[[太棒了！]] [[穿]] for the jumper and coat, [[戴]] for the hat, scarf, and gloves! Now take that parka off before the air-con gives up!", mood="happy", shot="two", gap=0.4)

confess("laoshi", "梅老师 LAOSHI MEI · Sixty-Second Recap")
L("laoshi", "Three golden rules for Topic Four! One: the four seasons are [[春天、夏天、秋天、冬天]], and ask favourites with [[你最喜欢哪个季节？]].", mood="teach", boardClear=True, board="1. [[春天 · 夏天 · 秋天 · 冬天]]")
L("laoshi", "Two: compare climates with [[A比B]] plus adjective — no [[很]] allowed! [[北京的冬天比新加坡冷得多。]]", mood="teach", board="2. [[北京的冬天比新加坡冷得多]] (NO [[很]]!)")
L("laoshi", "Three: [[穿]] for clothes and shoes — [[穿大衣、穿裤子、穿鞋]]; [[戴]] for accessories — [[戴帽子、戴围巾、戴眼镜]]!", mood="smug", board="3. [[穿]] clothes/shoes  vs  [[戴]] hat/scarf/glasses", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Five seconds on the clock with Laoshi Mei!", 2.8)
challenge(
    1,
    "Name all four seasons in Mandarin in order!",
    "[[春天、夏天、秋天、冬天]]",
    "Spring [[春天]] → Summer [[夏天]] → Autumn [[秋天]] → Winter [[冬天]]",
    "Challenge one! Say all four seasons in order, from spring to winter, in Mandarin!",
    "[[春天、夏天、秋天、冬天！]] Spring, summer, autumn, winter!",
)
challenge(
    2,
    "Say “Beijing's winter is much colder than Singapore.”",
    "[[北京的冬天比新加坡冷得多。]]",
    "A [[比]] B + [[冷得多]] (NEVER put [[很]] after [[比]]!)",
    "Challenge two! Compare climates: say Beijing's winter is much colder than Singapore!",
    "[[北京的冬天比新加坡冷得多！]] Remember, never use [[很]] in a [[比]] sentence!",
)
challenge(
    3,
    "Choose 穿 or 戴: “wear a coat and wear a scarf & hat”",
    "[[穿大衣，戴围巾和帽子]]",
    "[[穿]] + clothes ([[大衣]]); [[戴]] + accessories ([[围巾、帽子]])",
    "Challenge three! How do you say wear a coat, and wear a scarf and hat?",
    "[[穿大衣，戴围巾和帽子！]] [[穿]] for the coat, [[戴]] for the scarf and hat!",
)
end_card()
