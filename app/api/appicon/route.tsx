// PWA app icon as a PNG, drawn on demand (no binary assets in the repo).
//   /api/appicon?size=192            rounded "any" icon
//   /api/appicon?size=512&maskable=1 full-bleed maskable icon (glyph in the safe zone)
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const MIN = 48;
const MAX = 1024;
const FALLBACK = 512;

function sizeFrom(raw: string | null): number {
  const n = Number(raw);
  if (!raw || !Number.isFinite(n)) return FALLBACK;
  return Math.round(Math.min(MAX, Math.max(MIN, n)));
}

/** A bold geometric 中 (zhōng) character drawn with clean stroked paths (no external font needed). */
function Zhong({ px }: { px: number }) {
  return (
    <svg width={px} height={px} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#fef08a" strokeWidth={10.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x={18} y={30} width={64} height={36} rx={6} />
        <line x1={50} y1={11} x2={50} y2={89} />
      </g>
    </svg>
  );
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const size = sizeFrom(searchParams.get("size"));
  const maskable = searchParams.get("maskable") === "1";
  const glyph = Math.round(size * (maskable ? 0.58 : 0.66));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #dc2626 0%, #991b1b 70%, #b45309 100%)",
          borderRadius: maskable ? 0 : Math.round(size * 0.22),
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: glyph,
            height: glyph,
          }}
        >
          <Zhong px={glyph} />
        </div>
      </div>
    ),
    {
      width: size,
      height: size,
      headers: { "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable" },
    },
  );
}
