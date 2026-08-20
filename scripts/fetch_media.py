import subprocess
import urllib.request
from pathlib import Path

root = Path(r"e:\arakoh")
videos = root / "public" / "videos"
images = root / "public" / "images"
videos.mkdir(parents=True, exist_ok=True)

out = videos / "piano-atmosphere.mp4"
poster = images / "ara-koh-video-poster.jpg"
yt_id = "4Tr0otuiQuU"

urllib.request.urlretrieve(
    "https://i.ytimg.com/vi/{}/maxresdefault.jpg".format(yt_id),
    poster,
)
print("poster", poster.stat().st_size)

# Avoid special chars in format selector by using a simple progressive format
cmd = [
    "yt-dlp",
    "-f",
    "18/best",
    "-o",
    str(out),
    "--max-filesize",
    "45M",
    "https://www.youtube.com/watch?v={}".format(yt_id),
]
print("running", " ".join(cmd))
proc = subprocess.run(cmd, capture_output=True, text=True)
print((proc.stdout or "")[-2000:])
print((proc.stderr or "")[-2000:])
print("exit", proc.returncode)
if out.exists():
    print("video", out.stat().st_size)
else:
    for p in videos.glob("*"):
        print("found", p.name, p.stat().st_size)
