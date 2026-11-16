import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { AppGate } from "@/components/AppGate";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Year 8 Chinese Lab · 中文实验室", template: "%s · Year 8 Chinese Lab" },
  description:
    "Learn, practise and master Year 8 Mandarin Chinese (Tanglin Trust School / IGCSE 0547 pathway) — Simplified Hanzi, Pinyin, audio, interactive explorables, drills, Daily 5 and parent dashboard.",
  applicationName: "Chinese Lab",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "Chinese Lab" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c81e1e" },
    { media: "(prefers-color-scheme: dark)", color: "#141012" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Apply a saved theme before paint (no flash).
const themeScript = `try{var t=localStorage.getItem("y8m2:theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={nunito.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <ErrorBoundary>
          <StoreProvider>
            <AppGate>{children}</AppGate>
          </StoreProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
