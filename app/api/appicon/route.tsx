import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const sizeParam = Number(req.nextUrl.searchParams.get("size") ?? "512");
  const size = [192, 512].includes(sizeParam) ? sizeParam : 512;
  const maskable = req.nextUrl.searchParams.get("maskable") === "1";
  const scale = size / 512;
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
          // maskable icons need a safe zone: shrink content toward the centre
          padding: maskable ? Math.round(size * 0.12) : 0,
        }}
      >
        <div style={{ fontSize: Math.round(200 * scale), letterSpacing: -4 }}>Y8</div>
        <div style={{ fontSize: Math.round(120 * scale), letterSpacing: 16 }}>ZH</div>
      </div>
    ),
    { width: size, height: size }
  );
}
