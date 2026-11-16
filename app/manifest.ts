import type { MetadataRoute } from "next";

// Web app manifest: makes the Year 8 Chinese Lab installable ("Add to Home Screen").
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Year 8 Chinese Lab · 中文实验室",
    short_name: "Chinese Lab",
    description:
      "Learn, practise and master Year 8 Mandarin Chinese (Simplified Characters + Pinyin + English) — problem-first lessons, auto-marked practice, procedural drills, 60s sprints and IGCSE 0547 mocks.",
    lang: "en-GB",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#faf7f5",
    theme_color: "#c81e1e",
    categories: ["education", "kids"],
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
