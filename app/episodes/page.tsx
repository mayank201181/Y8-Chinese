import { Suspense } from "react";
import type { Metadata } from "next";
import { EpisodesHub } from "@/components/EpisodesHub";

export const metadata: Metadata = {
  title: "Sitcom Episodes — 《哎呀！一家人》 Ai-Ya! Family",
  description: "Animated bilingual Mandarin/English sitcom episodes for every Year 8 Chinese topic, with pause challenges.",
};

export default function EpisodesPage() {
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Loading episodes…</p>}>
      <EpisodesHub />
    </Suspense>
  );
}
