# "《哎呀！一家人》 Ai-Ya! Family" S01E11 "Time Before Place Before Dumplings"
# Topic: sentence-patterns — Mandarin Sentence Patterns & Connectors

EP = dict(
    topic="sentence-patterns",
    logline="Dad builds an English-ordered Frankenstein sentence, so Laoshi Mei turns the living room into a Lego grammar workshop for STPV word order, comparisons, and paired connectors.",
)

# ---------------- COLD OPEN ----------------
scene("living", [("meimei", 260), ("xiaoming", 580), ("dad", 900)], "MONDAY EVENING · HOMEWORK TABLE")
L("dad", "Meimei, check my prize-winning Mandarin essay! 'I eat dumplings at the restaurant on Sunday': Wo chi jiaozi zai fanguan xingqitian!", mood="smug", shot="close", prop="book")
L("meimei", "Dad... every single block after 'I' is backwards.", mood="deadpan", shot="two")
sfx("buzzer")
poof("laoshi", 1110)
L("laoshi", "[[哎呀！]] Grammar emergency! English dumps place and time at the end like forgotten luggage, but Mandarin marches in golden STPV order: Subject, then Time, then Place, then Verb!", mood="teach", shot="close",
  boardClear=True, board="Golden Rule: Subject + Time + Place + Verb (STPV)!")
L("xiaoming", "So dumplings ALWAYS wait until the end! [[我星期天在饭馆吃饺子！]]", mood="excited", shot="close",
  board="[[我]] + [[星期天]] + [[在饭馆]] + [[吃饺子]] ✔")
L("dad", "Time BEFORE place BEFORE dumplings! Why didn't somebody print that on a mug?!", mood="shock", shot="close")
freeze("TIME → PLACE → DUMPLINGS", 2.4, narrator="Narrator: Meimei immediately ordered that mug.")

confess("laoshi", "梅老师 LAOSHI MEI · Chief Architect Of Mandarin Word Order")
L("laoshi", "Want Year Eight distinction marks? Stop writing choppy four-word baby sentences! Master STPV, [[比]] comparisons, and Mandarin's famous two-part connector pairs!", mood="smug")

title()

# ---------------- ACT 1: STPV WORD ORDER & BI / MEIYOU COMPARISONS ----------------
scene("classroom", [("meimei", 250), ("xiaoming", 560), ("dad", 850), ("laoshi", 1100)], "GRAMMAR WORKSHOP · STPV & COMPARISONS")
L("laoshi", "Let's test STPV! Even if you add 'with friends' — [[跟朋友一起]] — Time and Place STILL come before the action! Meimei, show us!", mood="teach", shot="close",
  boardClear=True, board="Subj + Time + [[跟…一起]] + Place + Verb")
L("meimei", "[[我星期六下午跟朋友一起在学校打篮球！]] Who? [[我]]. When? [[星期六下午]]. With whom? [[跟朋友一起]]. Where? [[在学校]]. Action? [[打篮球]]!", mood="excited", shot="close", prop="ball",
  board="[[我 · 星期六下午 · 在学校 · 打篮球]] ✔")
L("laoshi", "Next, comparisons! Positive comparison uses [[A比B]] plus adjective — and remember, NEVER put [[很]] after [[比]]! What if A is NOT as something as B?", mood="teach", shot="close",
  boardClear=True, board="[[A 比 B + Adj]] (NO [[很]]!)  |  [[A 没有 B 那么 + Adj]]")
L("xiaoming", "Use [[没有…那么…]]! [[新加坡的冬天没有北京那么冷！]] Singapore's winter is not as cold as Beijing's! And today: [[今天比昨天凉快一点儿。]] Today is a little cooler than yesterday!", mood="excited", shot="close",
  board="[[新加坡没有北京那么冷 · 比昨天凉快一点儿]]")
L("dad", "Wait — let me compare our Mandarin! [[我的中文没有小明那么好，但是比以前好得多！]] My Chinese isn't as good as Xiaoming's, but it's much better than before!", mood="determined", shot="close")
sfx("ding")
L("laoshi", "Zero [[很]] after [[比]], and textbook [[没有…那么…]]! Take a bow!", mood="happy", shot="two")

# ---------------- ACT 2: FOUR POWER CONNECTOR PAIRS ----------------
scene("living", [("mum", 230), ("meimei", 500), ("xiaoming", 790), ("laoshi", 1080)], "PAIRED CONNECTORS CHALLENGE")
L("laoshi", "Now the secret to high-scoring sentences: English drops the second half — you never say 'because it rained, therefore I stayed home' — but Mandarin LOVES using BOTH halves of paired connectors!", mood="teach", shot="close",
  boardClear=True, board="Mandarin uses BOTH halves of connector pairs!")
L("mum", "Pair one: cause and effect, [[因为…所以…]] — because, therefore! [[因为外面下大雨，所以我们待在家。]]", mood="happy", shot="close",
  board="1. [[因为…，所以…]] (Because…, therefore…)")
L("meimei", "Pair two: contrast, [[虽然…但是…]] — although, however! [[虽然中文有一点儿难，但是很有意思！]] Although Chinese is a bit hard, it's super interesting!", mood="excited", shot="close", prop="book",
  board="2. [[虽然…，但是…]] (Although…, but…)")
L("xiaoming", "Pair three: upgrading with 'not only, but also' — [[不但…而且…]]! [[鸡饭不但好吃，而且很便宜！]] Chicken rice is not only delicious, it's also cheap!", mood="excited", shot="close",
  boardClear=True, board="3. [[不但…，而且…]] (Not only…, but also…)")
L("laoshi", "And pair four: doing two actions at the exact same time — [[一边…一边…]]! [[小明明明一边听音乐，一边做作业！]] Listening to music while doing homework!", mood="teach", shot="close",
  board="4. [[一边 + V1，一边 + V2]] (while doing both)")
poof("dad", 1130)
L("dad", "Stand back for my grand connector combo! [[虽然我很累，但是我今天晚上在家一边喝绿茶，一边学中文！]]", mood="determined", shot="close", prop="book")
sfx("ding")
L("laoshi", "[[太了不起了！]] [[虽然…但是…]], STPV [[今天晚上在家]], AND [[一边…一边…]] in one glorious sentence!", mood="happy", shot="two", gap=0.4)

confess("laoshi", "梅老师 LAOSHI MEI · Sixty-Second Recap")
L("laoshi", "Three golden rules for Topic Eleven! One: obey STPV — Subject, Time, Place, Verb: [[我星期天在学校打篮球]].", mood="teach", boardClear=True, board="1. STPV: [[我 + 星期天 + 在学校 + 打篮球]]")
L("laoshi", "Two: compare with [[A比B]] plus adjective — never [[很]]! — and [[A没有B那么…]] for 'not as'.", mood="teach", board="2. [[A比B热]] (NO [[很]]) · [[A没有B那么冷]]")
L("laoshi", "Three: use BOTH halves of paired connectors — [[因为…所以…]], [[虽然…但是…]], [[不但…而且…]], and [[一边…一边…]]!", mood="smug", board="3. [[因为…所以 · 虽然…但是 · 不但…而且 · 一边…一边]]", gap=0.5)

# ---------------- PAUSE CHALLENGES ----------------
card("PAUSE CHALLENGE", "Five seconds on the clock with Laoshi Mei!", 2.8)
challenge(
    1,
    "Put in STPV order: “I play basketball at school on Sunday.”",
    "[[我星期天在学校打篮球。]]",
    "Subject [[我]] + Time [[星期天]] + Place [[在学校]] + Verb [[打篮球]]",
    "Challenge one! Put this into golden Mandarin STPV order: I play basketball at school on Sunday!",
    "[[我星期天在学校打篮球！]] Subject, time, place, then action!",
)
challenge(
    2,
    "Say “Although Chinese is hard, it is very interesting.”",
    "[[虽然中文很难，但是很有意思。]]",
    "Use BOTH halves: [[虽然…，但是…]]",
    "Challenge two! Use a paired connector to say: although Chinese is hard, it is very interesting!",
    "[[虽然中文很难，但是很有意思！]] Always keep both [[虽然]] and [[但是]]!",
)
challenge(
    3,
    "Say “Not only delicious, but also cheap!” & “listen to music while doing homework”",
    "[[不但好吃，而且便宜 · 一边听音乐一边做作业]]",
    "[[不但…而且…]] + [[一边…一边…]]",
    "Challenge three! Give both patterns: not only delicious, but also cheap — and listen to music while doing homework!",
    "[[不但好吃，而且便宜！一边听音乐，一边做作业！]]",
)
end_card()
