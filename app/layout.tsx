import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Year 8 Chinese Lab · 中文实验室",
  description:
    "Interactive Year 8 Mandarin study guide and question bank for the Cambridge IGCSE Chinese (0547) pathway — guides, quizzes, flashcards, games and an AI tutor.",
  appleWebApp: {
    capable: true,
    title: "Chinese Lab",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#e11d48",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
