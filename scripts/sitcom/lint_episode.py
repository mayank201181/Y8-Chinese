"""Static checks for a Mandarin/English sitcom episode script.
Usage: python3 lint_episode.py episodes/<topic>.py [...]
"""
import sys, os, re

HERE = os.path.dirname(os.path.abspath(__file__))

def load(path):
    ns = {}
    exec(open(os.path.join(HERE, "common.py")).read(), ns)
    exec(open(path).read(), ns)
    return ns

MANDARIN = re.compile(r"\[\[(.+?)\]\]")
HANZI = re.compile(r"[\u4e00-\u9fff]")

def check_mandarin(t, where, errs):
    if t.count("[[") != t.count("]]"):
        errs.append(f"{where}: unbalanced [[ ]]: {t[:70]!r}")
        return
    for zh_seg in MANDARIN.findall(t):
        if not HANZI.search(zh_seg):
            errs.append(f"{where}: [[...]] must contain Simplified Hanzi (got {zh_seg!r})")
    outside = MANDARIN.sub(" ", t)
    if HANZI.search(outside):
        errs.append(f"{where}: Hanzi outside [[ ]] in spoken line (wrap in [[ ]] so Mandarin voice speaks it): {t[:70]!r}")
    if re.search(r"[0-9]", outside):
        errs.append(f"{where}: digits in spoken English text — spell numbers as words: {t[:70]!r}")

def lint(path):
    errs = []
    try:
        ns = load(path)
    except Exception as e:
        return [f"script failed to execute: {e}"]
    ep = ns.get("EP") or {}
    topics = {r[1] for r in ns["SEASON"]}
    if ep.get("topic") not in topics:
        errs.append(f"EP['topic']={ep.get('topic')!r} not in SEASON")
    if not ep.get("logline"):
        errs.append("EP['logline'] missing")
    beats = ns.get("B") or []
    if len(beats) < 25:
        errs.append(f"only {len(beats)} beats (need at least 25)")
    cur_cast = set()
    challenges = 0
    for i, b in enumerate(beats):
        tp = b["type"]
        w = f"beat[{i}]({tp})"
        if tp == "scene":
            loc = b["id"]
            if not (loc in ns["SETS"] or (loc.startswith("confess_") and loc[8:] in ns["CHARACTERS"])):
                errs.append(f"{w}: unknown scene {loc!r}")
            cur_cast = {c[0] for c in b["cast"]}
            for ch_id, _ in b["cast"]:
                if ch_id not in ns["CHARACTERS"]:
                    errs.append(f"{w}: unknown character {ch_id!r}")
        elif tp == "poof":
            if b["who"] not in ns["CHARACTERS"]:
                errs.append(f"{w}: unknown character {b['who']!r}")
            cur_cast.add(b["who"])
        elif tp == "sfx":
            if b["name"] not in ns["SFX_NAMES"]:
                errs.append(f"{w}: unknown sfx {b['name']!r}")
        elif tp == "line":
            who = b["who"]
            if who not in ns["CHARACTERS"]:
                errs.append(f"{w}: unknown speaker {who!r}")
            if not b.get("offstage") and who not in cur_cast:
                errs.append(f"{w}: {who!r} speaks on stage before entering cur_cast={cur_cast}")
            if b.get("mood") and b["mood"] not in ns["MOODS"]:
                errs.append(f"{w}: unknown mood {b['mood']!r}")
            if b.get("prop") and b["prop"] not in ns["PROPS"]:
                errs.append(f"{w}: unknown prop {b['prop']!r}")
            check_mandarin(b["text"], w, errs)
        elif tp == "challenge":
            challenges += 1
            check_mandarin(b["qs"], f"{w}.qs", errs)
            check_mandarin(b["as_"], f"{w}.as_", errs)
    if challenges != 3:
        errs.append(f"expected 3 pause challenges, found {challenges}")
    return errs

bad = 0
for p in sys.argv[1:]:
    es = lint(p)
    if es:
        bad += 1
        print(f"FAIL {p}:")
        for e in es:
            print(f"  - {e}")
    else:
        print(f"OK   {p}")
sys.exit(1 if bad else 0)
