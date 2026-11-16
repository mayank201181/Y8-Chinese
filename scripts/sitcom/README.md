# Sitcom episodes — "¡Qué Caos!"

Animated, voiced, bilingual sitcom (one episode per Year 8 Spanish topic) rendered to MP4.
A spin-off of the Maths app's "Totally Raotional": Pablo (13, from Sevilla) is an exchange student
living with the Rao family in their Singapore HDB flat for a term, and he has brought Lola, his
sharp-tongued Sevillian grammar parrot.

| id | who | voice (Kokoro) | notes |
|---|---|---|---|
| `tara` | Tara, 12, deadpan, secretly good at Spanish | af_heart | |
| `mum` | Mum (Anjali), practical, learns fast | bf_emma | |
| `dad` | Dad (Vikram), "already speaks Spanish" | bm_george | adds -o to English words, *muy calor*, *soy en…* |
| `pablo` | Pablo, 13, football-mad, polite | em_alex | white-and-red football shirt |
| `lola` | Lola the parrot, teacher + pause-challenge host (`HOST`) | ef_dora, +1.5 semitones | sits on her own perch stand |
| `teacher` | Señor García, Tara's Spanish teacher | em_santa | |
| `uncle` | Uncle Hock at the hawker centre | am_michael, −1 semitone | stand at x≈1000 |

Sets: `living`, `kitchen`, `bedroom` (Pablo's room: bed, bedside table + alarm clock, ball under the
bed, poster above it, window with orange curtains between bed and desk, shelf, desk + lamp + computer,
red chair in front of the desk, wardrobe with mirror, suitcase on top), `classroom` (flag + map of
Spain), `hawker`, `park` (void-deck futsal goal), `plaza` (Sevilla-style square: AYUNTAMIENTO,
BIBLIOTECA, CAFÉ, MUSEO, fountain, signpost ESTACIÓN/PARQUE/PISCINA), `mall` (centro comercial, CINE),
plus `confess_<character>`.
Props: phone, tablet, book, plate, map, ball, umbrella, broom, clock, guitar.
SFX: ding, buzzer, scratch, trombone, poof, whoosh, tick, door, drawer, squawk, flap, whistle, flamenco.

## Bilingual lines

Inside a line, `[[double brackets]]` mark Spanish. `build.py` voices it with the **same** character
voice through Kokoro's Spanish G2P; the renderer shows it in yellow (subtitles, Lola's board, challenge
cards) without the brackets. Everything else is English.

* Always follow a new Spanish phrase with its English meaning.
* Put single Spanish words inside English sentences in brackets too (`[[Casa]] ends in A`), so they
  are pronounced the Spanish way.
* Dad's broken Spanish stays **outside** the brackets: it is read with his English accent and shown in
  white, so yellow on screen always means correct Spanish. On the board write mistakes as
  `✘ wrong   ✔ [[right]]` (the ✘ half is drawn red, the ✔ half green).
* Spoken text writes numbers and times as words in both languages (`a las siete y media`); board
  lines, challenge `q`/`a`/`work` and captions may use digits.
* Keep each episode to roughly 6000–6500 spoken characters (`lint_episode.py` counts them): that
  renders at 7–8 minutes because the Spanish is spoken slightly slower (`es_speed`).

## Pipeline (all local, no paid APIs)

1. `episodes/<topic>.py` — the script: beats of dialogue, moods, camera shots, board lines, SFX,
   freeze-frames, three pause challenges (hosted by Lola).
2. `lint_episode.py` — static checks: cast/sets/props, board size, digits in spoken text, balanced
   `[[ ]]`, ¿…? / ¡…!, missing accents and known Spanish errors inside the brackets.
3. `build.py` — Kokoro TTS per line (cached in `tts_cache/`), lip-sync envelopes, synthesized SFX and
   an Andalusian-cadence guitar bed with ducking → `out/<topic>/audio.wav` + `timeline.json`.
4. `asr.py` — Whisper (small) transcribes the English and Spanish parts separately to catch
   mispronunciations. Keep a note per episode in `qa/<topic>.asr.txt`.
5. `render.html` + `render.mjs` — Canvas renderer driven by `renderAt(t)` (fully deterministic);
   Playwright renders every frame in N workers → x264 parts → ffmpeg mux with loudness normalisation.
6. `gen_manifest.py` — writes `lib/sitcom.ts` listing every episode whose MP4 exists.

```bash
cd scripts/sitcom
pip install kokoro-onnx soundfile faster-whisper      # + ffmpeg (with rubberband) and Playwright/Chromium
curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
export NODE_PATH="$(npm root -g)"                    # so render.mjs can require('playwright')

python3 lint_episode.py episodes/mi-casa.py
python3 build.py episodes/mi-casa.py out/mi-casa
python3 asr.py episodes/mi-casa.py                   # QA (ASR_THREADS=4 to use more cores)
node render.mjs out/mi-casa --stills 10,60,120,200   # preview frames → out/mi-casa/stills/*.jpg
./make_episode.sh mi-casa                            # full build + render → public/videos/mi-casa.mp4 + poster
python3 gen_manifest.py                              # → lib/sitcom.ts
```

`make_episode.sh` does lint → build → asr → frames → encode → poster in one go and accepts several
topic ids. Renders are independent per episode, so the season can be split across machines: each
machine needs this folder (scripts, `fonts/`, the two Kokoro model files) and writes only
`public/videos/<topic>.mp4` and `public/videos/posters/<topic>.jpg`; run `gen_manifest.py` once at the end.

Writing tips: write numbers as words; avoid "nought" (TTS says "not"); avoid interjections like
"Hmm" or "Ugh"; keep lines under ~330 characters; Lola's board holds 5 lines (`boardClear=True`).
