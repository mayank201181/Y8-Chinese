# Shared cast, season list and beat helpers for "《哎呀！一家人》 Ai-Ya! Family".
# build.py / lint_episode.py exec this file, then the episode file, in one namespace.
# Episode files set EP = dict(topic=..., logline=...) and call the helpers below.
#
# Bilingual lines: anything inside [[double brackets]] is Simplified Mandarin Chinese (简体中文).
# build.py voices [[...]] with each character's Kokoro Mandarin voice (zf_xiaobei, zm_yunxi, etc.)
# via misaki.zh G2P, and enriches subtitles with tone-marked Pinyin!
# Dad's mangled "toneless English-Mandarin" is deliberately left OUTSIDE [[ ]] in romanised form,
# so it is voiced with his British accent and shown in white: yellow = authentic Mandarin!

VOICES = {
    "meimei":   dict(voice="af_heart",    speed=1.06, lang="en-us", zh_voice="zf_xiaobei",  zh_speed=0.90),
    "mum":      dict(voice="bf_emma",     speed=1.07, lang="en-gb", zh_voice="zf_xiaoxiao", zh_speed=0.92),
    "dad":      dict(voice="bm_george",   speed=1.00, lang="en-gb", zh_voice="zm_yunjian",  zh_speed=0.90),
    "xiaoming": dict(voice="am_liam",     speed=1.05, lang="en-us", zh_voice="zm_yunxi",    zh_speed=0.94),
    "laoshi":   dict(voice="bf_isabella", speed=1.03, lang="en-gb", zh_voice="zf_xiaoyi",   zh_speed=0.90),
    "uncle":    dict(voice="am_michael",  speed=1.00, lang="en-us", zh_voice="zm_yunyang",  zh_speed=0.90),
}

# Who hosts the pause challenges.
HOST = "laoshi"
SHOW = "哎呀！一家人 · AI-YA!"
SHOW_TITLE_FULL = "《哎呀！一家人》 Ai-Ya! Family"
SHOW_BLURB_FULL = (
    "Thirteen-year-old cousin Xiaoming arrives from Beijing to stay with Meimei's family in Singapore — "
    "and Dad insists his Mandarin tones are 'already native'. One bilingual episode per Year 8 Chinese topic "
    "with Simplified Hanzi & Pinyin on screen, ending with three pause challenges hosted by Laoshi Mei (梅老师)."
)

# Season 1 running order = the app's 12-topic order (lib/topics/meta.ts).
SEASON = [
    (1, "greetings-routine", "Self-Intro & Routine", "Nǐ Hǎo, Seven A.M.!"),
    (2, "time-measure-words", "Dates & Measure Words", "Two Books Or Èr Books?"),
    (3, "weather", "Weather & Forecasts", "Thirty-Two Degrees Of Drizzle"),
    (4, "seasons", "Seasons & Clothing", "Puffer Jacket On Orchard Road"),
    (5, "illness", "Illness & Doctor", "Doctor, My Tones Hurt"),
    (6, "hobbies", "Hobbies & Sports", "Don't Kick The Basketball!"),
    (7, "leisure-plans", "Weekend Plans", "Operation Sentosa Saturday"),
    (8, "vegetables-fruits", "Fruits & Market", "King Of Durian Bargaining"),
    (9, "three-meals", "Three Meals & Drinks", "Congee, Chicken Rice, Repeat"),
    (10, "eating-out", "Eating Out", "Extra Spicy, Hold The Tears"),
    (11, "sentence-patterns", "Sentence Patterns", "Time Before Place Before Dumplings"),
    (12, "tenses-particles", "Time & Aspect Particles", "Been There, Ate That (Guò!)"),
]

CHARACTERS = set(VOICES)
SETS = {"living", "kitchen", "bedroom", "classroom", "hawker", "park", "plaza", "mall"}
MOODS = {
    "neutral", "happy", "excited", "deadpan", "annoyed", "shock", "smug",
    "thinking", "worried", "sad", "determined", "teach", "bored", "eyeroll",
}
SHOTS = {"close", "two", "wide"}
PROPS = {"phone", "tablet", "book", "plate", "map", "ball", "umbrella", "broom", "clock", "guitar"}
SFX_NAMES = {
    "ding", "buzzer", "scratch", "trombone", "poof", "whoosh", "tick",
    "door", "drawer", "gong", "chime", "whistle", "guzheng",
}

B = []
def scene(id, cast, caption=None): B.append(dict(type="scene", id=id, cast=cast, caption=caption))
def L(who, text, **kw): B.append(dict(type="line", who=who, text=text, **kw))
def sfx(name, gap=0.0): B.append(dict(type="sfx", name=name, gap=gap))
def freeze(text, dur=2.6, s="scratch", narrator=""): B.append(dict(type="freeze", text=text, dur=dur, sfx=s, narrator=narrator))
def poof(who, x, s=None):
    B.append(dict(type="poof", who=who, x=x, sfx=s or ("chime" if who == "laoshi" else "poof")))
def card(text, sub="", dur=2.5): B.append(dict(type="card", text=text, sub=sub, dur=dur))
def challenge(n, q, a, work, qs, as_): B.append(dict(type="challenge", n=n, q=q, a=a, work=work, qs=qs, as_=as_))
def confess(who, caption): scene("confess_" + who, [(who, 640)], caption)

def _ep():
    ep = globals().get("EP") or {}
    return next(r for r in SEASON if r[1] == ep["topic"])

def title(dur=4.8):
    num, _, short, t = _ep()
    B.append(dict(type="title", title="哎呀！AI-YA!", sub=f"Episode {num} · “{t}”", dur=dur))

def end_card(dur=3.8):
    num = _ep()[0]
    nxt = next((r for r in SEASON if r[0] == num + 1), None)
    sub = f"Next time: {nxt[2]} — “{nxt[3]}”" if nxt else "再见 (zàijiàn)! That's a wrap on Season 1!"
    B.append(dict(type="card", text=SHOW_TITLE_FULL, sub=sub, dur=dur))
