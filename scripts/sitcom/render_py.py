"""Render frames + poster for a sitcom episode using .tts-env's Python Playwright + FFmpeg.
Usage:
  python render_py.py out/<topic> --workers 4
  python render_py.py out/<topic> --poster ../../public/videos/posters/<topic>.jpg
"""
import sys, os, json, base64, asyncio, subprocess, http.server, socketserver, threading

HERE = os.path.dirname(os.path.abspath(__file__))
FFMPEG = "/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/ffmpeg"
if not os.path.exists(FFMPEG):
    FFMPEG = "ffmpeg"

out_dir = os.path.abspath(sys.argv[1])
args = sys.argv[2:]
def opt(k, d=None):
    return args[args.index(k) + 1] if k in args else d

tl = json.load(open(os.path.join(out_dir, "timeline.json"), encoding="utf-8"))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=HERE, **kw)
    def log_message(self, *a):
        pass

httpd = socketserver.TCPServer(("127.0.0.1", 0), Handler)
port = httpd.server_address[1]
threading.Thread(target=httpd.serve_forever, daemon=True).start()

async def main():
    from playwright.async_api import async_playwright
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(args=["--disable-gpu-vsync"])

        async def make_page():
            pg = await browser.new_page(viewport={"width": 1280, "height": 720})
            await pg.goto(f"http://127.0.0.1:{port}/render.html")
            await pg.evaluate("tl => window.init(tl)", tl)
            return pg

        poster = opt("--poster")
        if poster:
            pg = await make_page()
            d = await pg.evaluate("t => window.frameJpeg(t, 0.88)", tl.get("poster_t", 6.5))
            os.makedirs(os.path.dirname(os.path.abspath(poster)), exist_ok=True)
            with open(poster, "wb") as f:
                f.write(base64.b64decode(d.split(",", 1)[1]))
            await browser.close()
            httpd.shutdown()
            return

        fps = tl["fps"]
        N = int(tl["duration"] * fps) + 1
        workers = int(opt("--workers", 4))
        per = (N + workers - 1) // workers

        async def run_worker(w):
            a, b = w * per, min(N, (w + 1) * per)
            if a >= b:
                return None
            pg = await make_page()
            seg_path = os.path.join(out_dir, f"part{w}.mp4")
            proc = subprocess.Popen(
                [FFMPEG, "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(fps),
                 "-c:v", "mjpeg", "-i", "-", "-c:v", "libx264", "-preset", "veryfast",
                 "-crf", "25", "-pix_fmt", "yuv420p", "-tune", "animation", seg_path],
                stdin=subprocess.PIPE
            )
            for i in range(a, b):
                d = await pg.evaluate("t => window.frameJpeg(t, 0.90)", i / fps)
                proc.stdin.write(base64.b64decode(d.split(",", 1)[1]))
            proc.stdin.close()
            proc.wait()
            return f"part{w}.mp4"

        parts = await asyncio.gather(*(run_worker(w) for w in range(workers)))
        with open(os.path.join(out_dir, "parts.txt"), "w") as f:
            for p in parts:
                if p:
                    f.write(f"file '{p}'\n")
        await browser.close()
        httpd.shutdown()

asyncio.run(main())
