// Browser-tab icon: a rounded crimson → warm-gold square with a bold 中 glyph.
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#fef08a" strokeWidth={11} strokeLinecap="round" strokeLinejoin="round">
            <rect x={18} y={30} width={64} height={36} rx={6} />
            <line x1={50} y1={11} x2={50} y2={89} />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
