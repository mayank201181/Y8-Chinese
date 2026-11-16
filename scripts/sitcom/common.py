# Shared cast, season list and beat helpers for "¡Qué Caos!" (a "Totally Raotional" spin-off).
# build.py / lint_episode.py / asr.py exec this file, then the episode file, in one namespace.
# Episode files set EP = dict(topic=..., logline=...) and call the helpers below.
#
# Bilingual lines: anything inside [[double brackets]] is Spanish. build.py voices it with the
# SAME character voice through Kokoro's Spanish G2P (lang "es"); the renderer shows it in yellow
# without the brackets. Everything else is English. Dad's broken "Spanish" is deliberately left
# OUTSIDE the brackets, so it is read with his English accent and shown in white: yellow = correct.

VOICES = {
    # es_speed: Spanish parts are spoken a touch slower than English, for learners.
    "tara":    dict(voice="af_heart", speed=1.06, es_speed=0.96, lang="en-us"),
    "mum":     dict(voice="bf_emma", speed=1.08, es_speed=0.96, lang="en-gb"),
    "dad":     dict(voice="bm_george", speed=1.0, es_speed=0.94, lang="en-gb"),
    "pablo":   dict(voice="em_alex", speed=1.06, es_speed=0.98, lang="en-us"),
    "lola":    dict(voice="ef_dora", speed=1.04, es_speed=0.94, lang="en-us", pitch=1.5),
    "teacher": dict(voice="em_santa", speed=1.0, es_speed=0.94, lang="en-us"),
    "uncle":   dict(voice="am_michael", speed=1.0, es_speed=0.94, lang="en-us", pitch=-1.0),
}

# Who hosts the pause challenges (build.py / asr.py read this).
HOST = "lola"
SHOW = "¡QUÉ CAOS!"

# Season 1 running order = the app's topic order (lib/topics/meta.ts).
# (num, topic id, short topic name, episode title)
SEASON = [
    (1, "mi-casa", "My Home", "Mi Casa Es Tu Caos"),
    (2, "mi-dormitorio", "My Bedroom", "Hay Fever"),
    (3, "rutina-diaria", "Daily Routine", "Me Levanto, Me Lamento"),
    (4, "donde-vivo", "Where I Live", "Más O Menos"),
    (5, "deportes", "Sport", "Own Goal, Olé"),
    (6, "tiempo-libre", "Free Time", "Teleadicto"),
    (7, "tareas", "Chores", "Tengo Que What Now?"),
    (8, "el-tiempo", "The Weather", "Muy Calor"),
    (9, "la-ciudad", "Places In Town", "Todo Recto To Nowhere"),
    (10, "mi-ciudad", "Describing My Town", "Lo Bueno, Lo Malo Y Lo Dad"),
    (11, "presente", "The Present Tense", "Present Tense, Family Tense"),
    (12, "futuro-inmediato", "The Near Future", "Voy A Be Famous"),
    (13, "preterito", "The Preterite", "Fui Fighters"),
]

CHARACTERS = set(VOICES)
# living = the Raos' HDB living room; bedroom = the spare room Pablo sleeps in; classroom = Señor
# García's Spanish room; plaza = a Sevilla-style square; park = void deck + futsal court.
SETS = {"living", "kitchen", "bedroom", "classroom", "hawker", "park", "plaza", "mall"}  # + confess_<character>
MOODS = {"neutral", "happy", "excited", "deadpan", "annoyed", "shock", "smug", "thinking", "worried", "sad",
         "determined", "teach", "bored", "eyeroll"}
SHOTS = {"close", "two", "wide"}
PROPS = {"phone", "tablet", "book", "plate", "map", "ball", "umbrella", "broom", "clock", "guitar"}
SFX_NAMES = {"ding", "buzzer", "scratch", "trombone", "poof", "whoosh", "tick", "door", "drawer",
             "squawk", "flap", "whistle", "flamenco"}

B = []
def scene(id, cast, caption=None): B.append(dict(type="scene", id=id, cast=cast, caption=caption))
def L(who, text, **kw): B.append(dict(type="line", who=who, text=text, **kw))
def sfx(name, gap=0.0): B.append(dict(type="sfx", name=name, gap=gap))
def freeze(text, dur=2.6, s="scratch", narrator=""): B.append(dict(type="freeze", text=text, dur=dur, sfx=s, narrator=narrator))
def poof(who, x, s=None):
    # A character pops in. Lola flaps in (feathers + "flap"); everyone else poofs.
    B.append(dict(type="poof", who=who, x=x, sfx=s or ("flap" if who == "lola" else "poof")))
def card(text, sub="", dur=2.5): B.append(dict(type="card", text=text, sub=sub, dur=dur))
def challenge(n, q, a, work, qs, as_): B.append(dict(type="challenge", n=n, q=q, a=a, work=work, qs=qs, as_=as_))
def confess(who, caption): scene("confess_" + who, [(who, 640)], caption)

def _ep():
    ep = globals().get("EP") or {}
    row = next(r for r in SEASON if r[1] == ep["topic"])
    return row
def title(dur=5.0):
    num, _, short, t = _ep()
    B.append(dict(type="title", title=SHOW, sub=f"Episode {num} · “{t}”", dur=dur))
def end_card(dur=4.0):
    num = _ep()[0]
    nxt = next((r for r in SEASON if r[0] == num + 1), None)
    sub = f"Next time: {nxt[2]} — “{nxt[3]}”" if nxt else "¡Hasta luego! That's a wrap on Season 1!"
    B.append(dict(type="card", text=SHOW, sub=sub, dur=dur))
