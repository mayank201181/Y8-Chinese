"""Build audio + timeline for a bilingual Mandarin/English sitcom episode.
Usage: /Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/python build.py episodes/<topic>.py out/<topic>
Produces outdir/timeline.json and outdir/audio.wav
"""
import sys, os, json, hashlib, re
import numpy as np, soundfile as sf

SR = 24000
FPS = 24
HERE = os.path.dirname(os.path.abspath(__file__))
MODELS_DIR = "/Users/mayankrawat/Downloads/year8-workspace/.tts-env/models"
script_path, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
cache = os.path.join(HERE, "tts_cache"); os.makedirs(cache, exist_ok=True)

ns = {}
exec(open(os.path.join(HERE, "common.py")).read(), ns)
exec(open(script_path).read(), ns)
BEATS, VOICES, EP = ns["B"], ns["VOICES"], ns["EP"]
HOST = ns.get("HOST", "laoshi")

_k = None
_zh_g2p = None

def kokoro():
    global _k
    if _k is None:
        from kokoro_onnx import Kokoro
        onnx_p = os.path.join(MODELS_DIR, "kokoro-v1.0.onnx") if os.path.exists(os.path.join(MODELS_DIR, "kokoro-v1.0.onnx")) else os.path.join(HERE, "kokoro-v1.0.onnx")
        voices_p = os.path.join(MODELS_DIR, "voices-v1.0.bin") if os.path.exists(os.path.join(MODELS_DIR, "voices-v1.0.bin")) else os.path.join(HERE, "voices-v1.0.bin")
        _k = Kokoro(onnx_p, voices_p)
    return _k

def zh_g2p():
    global _zh_g2p
    if _zh_g2p is None:
        from misaki import zh
        _zh_g2p = zh.ZHG2P()
    return _zh_g2p

def to_pinyin(hanzi_str):
    try:
        from pypinyin import pinyin, Style
        clean = re.sub(r"[，。！？、；：“”‘’（）\s]+", " ", hanzi_str).strip()
        if not clean:
            return ""
        syls = [p[0] for p in pinyin(clean, style=Style.TONE, errors="ignore") if p and p[0].strip()]
        return " ".join(syls)
    except Exception:
        return ""

MANDARIN = re.compile(r"\[\[(.+?)\]\]")

def segments(text):
    """Split a line into (lang_kind, text) parts: [[...]] is Mandarin ('zh'), the rest English ('en')."""
    out_parts, pos = [], 0
    real_en = lambda s: re.search(r"[A-Za-z0-9]", s)
    for m in MANDARIN.finditer(text):
        if real_en(text[pos:m.start()]):
            out_parts.append(("en", text[pos:m.start()].strip()))
        out_parts.append(("zh", m.group(1).strip()))
        pos = m.end()
    if real_en(text[pos:]):
        out_parts.append(("en", text[pos:].strip()))
    return out_parts

def tts_one(who, text, kind):
    v = VOICES[who]
    voice_id = v["zh_voice"] if kind == "zh" else v["voice"]
    speed = v.get("zh_speed", 0.92) if kind == "zh" else v["speed"]
    key = hashlib.sha1(json.dumps([voice_id, speed, kind, text], ensure_ascii=False).encode()).hexdigest()[:16]
    f = os.path.join(cache, f"{who}_{kind}_{key}.wav")
    if not os.path.exists(f):
        if kind == "zh":
            res = zh_g2p()(text)
            phonemes = res[0] if isinstance(res, tuple) else res
            s, sr = kokoro().create(phonemes, voice=voice_id, speed=speed, is_phonemes=True)
        else:
            s, sr = kokoro().create(text, voice=voice_id, speed=speed, lang=v["lang"])
        assert sr == SR
        tmp_f = f"{f}.{os.getpid()}.tmp.wav"
        sf.write(tmp_f, s, sr)
        os.replace(tmp_f, f)
    a, sr = sf.read(f, dtype="float32")
    if a.ndim > 1:
        a = a.mean(1)
    idx = np.where(np.abs(a) > 0.01)[0]
    if len(idx):
        a = a[max(0, idx[0] - 600): idx[-1] + 1200]
    return a

def tts(who, text):
    """Voice a bilingual line: English segments with English voice, [[中文]] segments with Mandarin voice."""
    parts = segments(text)
    gap = np.zeros(int(0.11 * SR), dtype=np.float32)
    chunks_ = []
    for i, (kind, seg_txt) in enumerate(parts):
        if i:
            chunks_.append(gap)
        chunks_.append(tts_one(who, seg_txt, kind))
    return np.concatenate(chunks_) if chunks_ else np.zeros(1, dtype=np.float32)

def envelope(a):
    hop = SR // FPS
    n = int(np.ceil(len(a) / hop))
    e = np.array([np.sqrt(np.mean(a[i*hop:(i+1)*hop] ** 2)) if len(a[i*hop:(i+1)*hop]) else 0 for i in range(n)])
    p = np.percentile(e, 90) if len(e) else 1
    e = np.clip(e / (p + 1e-6), 0, 1)
    e = np.where(e < 0.12, 0, e)
    return [round(float(x), 2) for x in e]

# ---------------- synthesized sound effects & pentatonic music ----------------
rng = np.random.default_rng(7)
def t_(d): return np.arange(int(d * SR)) / SR
def adsr(n, a=0.005, r=0.2):
    env = np.ones(n); na = int(a*SR); nr = min(int(r*SR), n)
    if na: env[:na] = np.linspace(0, 1, na)
    env[-nr:] *= np.linspace(1, 0, nr); return env
def pluck(freq, dur, bright=0.5, decay=0.996):
    N = max(2, int(SR / freq)); buf = rng.uniform(-1, 1, N) * bright
    out_a = np.zeros(int(dur * SR))
    for i in range(len(out_a)):
        out_a[i] = buf[i % N]
        buf[i % N] = decay * 0.5 * (buf[i % N] + buf[(i + 1) % N])
    return out_a
NOTE = lambda n: 440 * 2 ** ((n - 69) / 12)

def sfx_ding():
    t = t_(1.1); return 0.5*(np.sin(2*np.pi*1318*t) + 0.5*np.sin(2*np.pi*2637*t) + 0.25*np.sin(2*np.pi*1975*t)) * np.exp(-t*4)
def sfx_buzzer():
    t = t_(0.65); w = np.sign(np.sin(2*np.pi*110*t)) * 0.3 + np.sign(np.sin(2*np.pi*116*t)) * 0.3
    return w * adsr(len(t), 0.01, 0.1)
def sfx_scratch():
    t = t_(0.5); f = 900 * np.exp(-t*4) + 200
    ph = np.cumsum(f) / SR; n = rng.uniform(-1, 1, len(t))
    return (0.5 * np.sin(2*np.pi*ph) * n + 0.3*n) * adsr(len(t), 0.005, 0.2) * 0.8
def sfx_trombone():
    out_l = []
    for i, (n, d) in enumerate([(58, .42), (57, .42), (56, .42), (55, 1.1)]):
        t = t_(d); f = NOTE(n) * (1 + (0.012*np.sin(2*np.pi*6*t) if i == 3 else 0))
        ph = np.cumsum(f) / SR
        w = sum(np.sin(2*np.pi*k*ph)/k for k in range(1, 8))
        out_l.append(w * adsr(len(t), 0.03, 0.12) * 0.25)
    return np.concatenate(out_l)
def sfx_poof():
    t = t_(0.55); n = rng.uniform(-1, 1, len(t)); y = np.zeros_like(n); a = 0.0
    for i in range(len(n)):
        c = 0.02 + 0.3 * np.exp(-t[i]*6); a += c * (n[i] - a); y[i] = a
    return y * np.exp(-t*5) * 2.2 + 0.25*np.sin(2*np.pi*(300 + 900*t)*t) * np.exp(-t*8)
def sfx_whoosh():
    t = t_(0.45); n = rng.uniform(-1, 1, len(t)); y = np.zeros_like(n); a = 0
    for i in range(len(n)):
        c = 0.03 + 0.15*np.sin(np.pi*t[i]/0.45); a += c*(n[i]-a); y[i] = a
    return y * np.sin(np.pi*t/0.45) * 1.6
def sfx_tick():
    t = t_(0.08); return np.sin(2*np.pi*1800*t) * np.exp(-t*60) * 0.5
def sfx_door():
    t = t_(0.5); return (np.sin(2*np.pi*90*t)*np.exp(-t*12) + rng.uniform(-1,1,len(t))*np.exp(-t*30)*0.3) * 0.8
def sfx_drawer():
    t = t_(0.45); n = rng.uniform(-1, 1, len(t)); return n * (0.15 + 0.1*np.sin(2*np.pi*30*t)) * adsr(len(t), 0.05, 0.1)
def sfx_gong():
    t = t_(1.8)
    freqs = [196, 294, 415, 523, 659]
    w = sum(np.sin(2*np.pi*f*t + 0.2*np.sin(2*np.pi*4*t)) / (k+1) for k, f in enumerate(freqs))
    return w * np.exp(-t*2.1) * 0.45
def sfx_chime():
    out_a = np.zeros(int(1.1*SR))
    for k, n in enumerate([72, 74, 76, 79, 81]):
        p = pluck(NOTE(n), 0.7, 0.55, 0.996); i = int(k*0.07*SR); out_a[i:i+len(p)] += p[:len(out_a)-i]
    return out_a * 0.6
def sfx_whistle():
    out_l = []
    for d in (0.14, 0.14, 0.5):
        t = t_(d); f = 2900 + 120*np.sin(2*np.pi*32*t)
        ph = np.cumsum(f) / SR
        w = np.sin(2*np.pi*ph) * (0.7 + 0.3*np.sin(2*np.pi*32*t))
        out_l.append(w * adsr(len(t), 0.01, 0.04) * 0.35); out_l.append(np.zeros(int(0.06*SR)))
    return np.concatenate(out_l)
def sfx_guzheng():
    # Sweeping C major pentatonic glissando (C D E G A)
    out_a = np.zeros(int(2.1*SR))
    notes = [60, 62, 64, 67, 69, 72, 74, 76, 79, 81, 84]
    for k, n in enumerate(notes):
        p = pluck(NOTE(n), 1.3, 0.55, 0.996); i = int(k*0.065*SR); out_a[i:i+len(p)] += p[:len(out_a)-i]
    return out_a * 0.42

def jingle():
    # Cheerful pentatonic Guzheng sitcom theme (C D E G A)
    mel = [(72,.18),(74,.18),(76,.18),(79,.34),(81,.18),(79,.18),(76,.34),(74,.18),(76,.18),(74,.18),(72,.75)]
    out_a = np.zeros(int(4.4*SR)); pos = 0.15
    for n, d in mel:
        p = pluck(NOTE(n), 1.0, 0.6, 0.996); i = int(pos*SR); out_a[i:i+len(p)] += p[:len(out_a)-i] * 0.52; pos += d
    for ch, at in [([48,55,60,64], 0.15), ([45,52,57,60], 1.05), ([53,60,65,69], 1.95), ([48,55,60,64,67,72], 2.75)]:
        for j, n in enumerate(ch):
            p = pluck(NOTE(n), 1.5, 0.48, 0.996); i = int((at + j*0.016)*SR); out_a[i:i+len(p)] += p[:len(out_a)-i]*0.34
    return out_a

def music_bed(dur):
    beat = 60/102; bar = 4*beat
    chords = [[60,64,67,72],[57,60,64,69],[53,57,60,67],[55,59,62,67]]
    loop = np.zeros(int(4*bar*SR) + SR)
    for b, ch in enumerate(chords):
        for s, (off, vel) in enumerate([(0,1.0),(1.5,.55),(2,.75),(3,.55)]):
            at = b*bar + off*beat
            for j, n in enumerate(ch if s % 2 == 0 else ch[::-1]):
                p = pluck(NOTE(n), 0.9, 0.32*vel, 0.994); i = int((at + j*0.014)*SR)
                loop[i:i+len(p)] += p
        bp = pluck(NOTE(ch[0]-12), 1.1, 0.45, 0.996); i = int(b*bar*SR); loop[i:i+len(bp)] += bp*0.75
    L = int(4*bar*SR); loop = loop[:L] + np.pad(loop[L:], (0, L - len(loop[L:])))
    reps = int(np.ceil(dur*SR / L)) + 1
    return np.tile(loop, reps)[:int(dur*SR)]

SFX = dict(ding=sfx_ding, buzzer=sfx_buzzer, scratch=sfx_scratch, trombone=sfx_trombone, poof=sfx_poof,
           whoosh=sfx_whoosh, tick=sfx_tick, door=sfx_door, drawer=sfx_drawer,
           gong=sfx_gong, chime=sfx_chime, whistle=sfx_whistle, guzheng=sfx_guzheng)
_sfx_cache = {}
def get_sfx(n):
    if n not in _sfx_cache: _sfx_cache[n] = SFX[n]().astype(np.float32)
    return _sfx_cache[n]

# ---------------- subtitles with automatic Pinyin ----------------
def display_text(text):
    """Turn [[今天下雨]] into [[今天下雨 (jīntiān xià yǔ)]] for crystal-clear bilingual subtitles!"""
    def repl(m):
        zh_txt = m.group(1).strip()
        py = to_pinyin(zh_txt)
        return f"[[{zh_txt} ({py})]]" if py else f"[[{zh_txt}]]"
    return MANDARIN.sub(repl, text)

def chunks(text, maxlen=90):
    parts = re.split(r'(?<=[.!?。！？])\s+', text.strip())
    out_c, cur = [], ""
    for p in parts:
        if len(cur) + len(p) + 1 <= maxlen:
            cur = (cur + " " + p).strip()
        else:
            if cur: out_c.append(cur)
            cur = p
    if cur: out_c.append(cur)
    fixed, carry = [], False
    for c in out_c:
        if carry: c = "[[" + c
        opens, closes = c.count("[["), c.count("]]")
        carry = opens > closes
        if carry: c = c + "]]"
        fixed.append(c)
    return fixed

# ---------------- timeline assembly ----------------
segs, sfx_events, dialog = [], [], []
t = 0.6
scene = None; cast = []; caption = None; moods = {}; board = []; music_on = []
cur_music = None

def push(kind, dur, **kw):
    global t
    seg = dict(kind=kind, t0=round(t, 3), t1=round(t + dur, 3), scene=scene, caption=caption,
               cast=[dict(c) for c in cast], moods=dict(moods), board=[dict(b) for b in board], **kw)
    segs.append(seg); t += dur; return seg

def set_music(on):
    global cur_music
    if on and cur_music is None: cur_music = [t, None]
    if not on and cur_music is not None:
        cur_music[1] = t; music_on.append(cur_music); cur_music = None

for b in BEATS:
    k = b["type"]
    if k == "scene":
        new_loc = b["id"]
        if scene and not scene.startswith("confess") and not new_loc.startswith("confess") and new_loc != scene:
            sfx_events.append((t, "whoosh", 0.5)); push("gap", 0.6)
        scene = new_loc; caption = b.get("caption"); board = []
        cast = [dict(who=w, x=x, appear=-10) for w, x in b["cast"]]
        moods = {w: moods.get(w, "neutral") for w, _ in b["cast"]}
        set_music(not scene.startswith("confess"))
        if caption: push("gap", 0.4)
        continue
    if k == "poof":
        sfx_events.append((t, b.get("sfx", "poof"), 0.9))
        cast = [c for c in cast if c["who"] != b["who"]] + [dict(who=b["who"], x=b["x"], appear=round(t, 3))]
        moods[b["who"]] = "teach"
        push("poof", 0.7, who=b["who"])
        continue
    if k == "sfx":
        sfx_events.append((t, b["name"], 0.9))
        push("gap", 0.35 + b.get("gap", 0)); continue
    if k == "freeze":
        sfx_events.append((t, b["sfx"], 1.0))
        hold = segs[-1]["t1"] - 0.35
        push("freeze", b["dur"], text=b["text"], narrator=b.get("narrator", ""), hold=round(hold, 3), ref=len(segs) - 1); continue
    if k == "title":
        set_music(False)
        sfx_events.append((t, "jingle", 0.8)); push("title", b["dur"], title=b["title"], sub=b["sub"]); continue
    if k == "card":
        set_music(False)
        sfx_events.append((t, "whoosh", 0.6)); push("card", b["dur"], text=b["text"], sub=b.get("sub", "")); continue
    if k == "challenge":
        set_music(False)
        for phase in ("q", "count", "a"):
            if phase == "count":
                for i in range(5): sfx_events.append((t + i, "tick", 1.0))
                push("challenge", 5.2, phase="count", n=b["n"], q=b["q"], a=b["a"], work=b["work"]); continue
            text = b["qs"] if phase == "q" else b["as_"]
            a = tts(HOST, text)
            if phase == "a": sfx_events.append((t, "ding", 0.7))
            st = t + 0.3; dialog.append((st, a))
            d = len(a)/SR
            push("challenge", 0.3 + d + 0.9, phase=phase, n=b["n"], q=b["q"], a=b["a"], work=b["work"],
                 who=HOST, say0=round(st, 3), env=envelope(a), subs=[], text=display_text(text))
        continue
    if k == "line":
        who = b["who"]
        if b.get("boardClear"): board = []
        a = tts(who, b["text"]); d = len(a) / SR
        st = t + 0.22
        if b.get("board"): board.append(dict(text=b["board"], t=round(st + 0.15, 3)))
        if b.get("diagram"):
            board = [x for x in board if "svg" not in x]
            board.append(dict(svg=b["diagram"], t=round(st + 0.15, 3)))
        moods[who] = b.get("mood", moods.get(who, "neutral"))
        dialog.append((st, a))
        disp = display_text(b["text"])
        cs = chunks(disp); tot = max(1, sum(len(c) for c in cs)); acc = 0; subs = []
        for c in cs:
            subs.append(dict(t=round(st + d * acc / tot, 3), text=c)); acc += len(c)
        push("line", 0.22 + d + 0.38 + b.get("gap", 0), who=who, say0=round(st, 3), env=envelope(a), mood=moods[who],
             shot=b.get("shot", "close"), prop=b.get("prop"), subs=subs, offstage=b.get("offstage", False))
        continue
    raise ValueError(k)
set_music(False)
total = t + 0.8

# ---------------- mix ----------------
mix = np.zeros(int((total + 6) * SR), dtype=np.float32)
def add(at, a, g):
    i = int(at * SR); n = min(len(a), len(mix) - i); mix[i:i+n] += a[:n] * g
voice = np.zeros_like(mix)
for st, a in dialog:
    i = int(st*SR); voice[i:i+len(a)] += a
voice *= 0.85 / (np.percentile(np.abs(voice[voice != 0]), 99.5) + 1e-6)
mix += voice
for st, name, g in sfx_events:
    add(st, jingle() if name == "jingle" else get_sfx(name), g)
venv = np.convolve(np.abs(voice), np.ones(2400)/2400, mode="same")
duck = 1 - 0.65 * np.clip(venv / 0.05, 0, 1)
for a0, a1 in music_on:
    d = a1 - a0
    if d < 1: continue
    m = music_bed(d).astype(np.float32)
    fade = np.ones(len(m)); nf = min(int(0.6*SR), len(m)//2)
    fade[:nf] = np.linspace(0, 1, nf); fade[-nf:] = np.linspace(1, 0, nf)
    i = int(a0*SR); n = min(len(m), len(mix)-i)
    mix[i:i+n] += (m * fade)[:n] * 0.075 * duck[i:i+n]
mix = mix[:int(total*SR)]
mix /= max(1.0, np.abs(mix).max() / 0.97)
sf.write(os.path.join(out, "audio.wav"), mix, SR)

title_t = next((x["t0"] for x in segs if x["kind"] == "title"), 5.0)
json.dump(dict(fps=FPS, duration=round(total, 3), topic=EP["topic"], host=HOST, poster_t=round(title_t + 3.4, 2), segments=segs), open(os.path.join(out, "timeline.json"), "w"), ensure_ascii=False)
print(f"segments={len(segs)} duration={total:.1f}s ({total/60:.1f} min)")
