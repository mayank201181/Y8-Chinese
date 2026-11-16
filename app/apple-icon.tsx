// iOS home-screen icon: full-bleed crimson-and-gold square with 中 + Y8 badge.
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #dc2626 0%, #991b1b 72%, #b45309 100%)",
        }}
      >
        <svg width={104} height={104} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 2 }}>
          <g fill="none" stroke="#fef08a" strokeWidth={10.5} strokeLinecap="round" strokeLinejoin="round">
            <rect x={18} y={29} width={64} height={36} rx={6} />
            <line x1={50} y1={10} x2={50} y2={88} />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#fef08a",
            color: "#991b1b",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          Y8
        </div>
      </div>
    ),
    { ...size },
  );
}
