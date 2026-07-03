import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Year 8 Chinese Lab",
    short_name: "Chinese Lab",
    description:
      "Interactive Year 8 Mandarin study guide and question bank — Cambridge IGCSE 0547 pathway.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdf9f3",
    theme_color: "#e11d48",
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png" },
      {
        src: "/api/appicon?size=512&maskable=1",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
