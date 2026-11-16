"""Speech-recognition QA: flags voice segments whose transcript drifts from the script.
Each line is split into English and [[Spanish]] parts; every part is transcribed in its own
language (Whisper 'small', multilingual) so Spanish pronunciation is checked too.
Usage: python3 asr.py episodes/<topic>.py   (after build.py)
"""
import json, re, hashlib, os, difflib, sys, unicodedata
import numpy as np, soundfile as sf
HERE = os.path.dirname(os.path.abspath(__file__))
from faster_whisper import WhisperModel
ns = {}; exec(open(os.path.join(HERE, 'common.py')).read(), ns)
exec(open(sys.argv[1]).read(), ns)
V = ns['VOICES']
m = WhisperModel('small', device='cpu', compute_type='int8', cpu_threads=int(os.environ.get('ASR_THREADS', '2')))
SPANISH = re.compile(r"\[\[(.+?)\]\]")

def segments(text):
    # same rule as build.py: punctuation-only English pieces are not voiced
    out, pos = [], 0
    real = lambda s: re.search(r"[A-Za-z0-9]", s)
    for mm in SPANISH.finditer(text):
        if real(text[pos:mm.start()]): out.append(("en", text[pos:mm.start()].strip()))
        out.append(("es", mm.group(1).strip())); pos = mm.end()
    if real(text[pos:]): out.append(("en", text[pos:].strip()))
    return out

def strip_acc(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')

def norm(s):
    s = strip_acc(s.lower().replace('-', ' '))
    return re.sub(r"[^a-z0-9 ]", "", s).split()

items = []
for b in ns['B']:
    if b['type'] == 'line': items.append((b['who'], b['text']))
    if b['type'] == 'challenge': items += [(ns.get('HOST', 'lola'), b['qs']), (ns.get('HOST', 'lola'), b['as_'])]
bad = []; n = 0; skipped = 0
for who, text in items:
    v = V[who]
    for kind, part in segments(text):
        lang = 'es' if kind == 'es' else v['lang']
        key = hashlib.sha1(json.dumps([v, part, lang]).encode()).hexdigest()[:16]
        f = os.path.join(HERE, 'tts_cache', f'{who}_{key}.wav')
        if not os.path.exists(f):
            bad.append((0.0, who, part, '<missing audio: run build.py first>')); continue
        au, sr = sf.read(f, dtype='float32'); au = au.mean(1) if au.ndim > 1 else au
        au = np.interp(np.arange(0, len(au), sr / 16000), np.arange(len(au)), au).astype('float32')
        segs, _ = m.transcribe(au, language='es' if kind == 'es' else 'en', beam_size=1)
        hyp = ' '.join(s.text for s in segs)
        a, b_ = norm(part), norm(hyp)
        if len(a) < 2: skipped += 1; continue   # 1-word clips: Whisper hallucinates ("¡Suscríbete!"), not a real check
        r = difflib.SequenceMatcher(None, a, b_).ratio(); n += 1
        if r < (0.8 if kind == 'es' else 0.85): bad.append((round(r, 2), who, f'[{kind}] ' + part, hyp))
for x in sorted(bad): print(x)
print('checked', n, 'segments; flagged', len(bad), '; skipped', skipped, 'one-word clips')
