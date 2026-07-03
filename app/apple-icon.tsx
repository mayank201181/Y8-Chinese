import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Letters only — emoji/CJK don't render in ImageResponse without a bundled font.
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
          background: "linear-gradient(135deg, #e11d48 0%, #f97316 100%)",
          color: "white",
          fontWeight: 800,
        }}
      >
        <div style={{ fontSize: 64, letterSpacing: -2 }}>Y8</div>
        <div style={{ fontSize: 40, letterSpacing: 6 }}>ZH</div>
      </div>
    ),
    { ...size }
  );
}
