#!/usr/bin/env bash
# Build + render one or more 《哎呀！一家人》 Ai-Ya! Family episodes end-to-end using .tts-env!
#   scripts/sitcom/make_episode.sh <topic-id> [<topic-id> ...]
set -euo pipefail
cd "$(dirname "$0")"
ROOT="$(cd ../.. && pwd)"
VENV="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv"
PY="$VENV/bin/python"
FFMPEG="$VENV/bin/ffmpeg"
FFPROBE="$VENV/bin/ffprobe"
WORKERS="${WORKERS:-6}"

mkdir -p "$ROOT/public/videos/posters"
for T in "$@"; do
  echo "=== $T: lint"
  "$PY" lint_episode.py "episodes/$T.py"
  echo "=== $T: voices + timeline (Kokoro Mandarin + English)"
  "$PY" build.py "episodes/$T.py" "out/$T"
  echo "=== $T: frames ($WORKERS workers)"
  rm -f "out/$T"/part*.mp4
  "$PY" render_py.py "out/$T" --workers "$WORKERS"
  echo "=== $T: encode MP4 + poster"
  "$FFMPEG" -y -loglevel error -f concat -safe 0 -i "out/$T/parts.txt" -i "out/$T/audio.wav" \
    -c:v copy \
    -af "loudnorm=I=-16:TP=-1.5:LRA=11" -ar 48000 -c:a aac -b:a 128k -movflags +faststart -shortest \
    "$ROOT/public/videos/$T.mp4"
  "$PY" render_py.py "out/$T" --poster "$ROOT/public/videos/posters/$T.jpg"
  rm -f "out/$T"/part*.mp4
  echo "=== $T: done $(du -h "$ROOT/public/videos/$T.mp4" | cut -f1) $("$FFPROBE" -v error -show_entries format=duration -of csv=p=0 "$ROOT/public/videos/$T.mp4")s"
done
if [ -z "${SKIP_MANIFEST:-}" ]; then
  "$PY" gen_manifest.py
fi
