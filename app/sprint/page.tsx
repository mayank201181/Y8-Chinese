import type { Metadata } from "next";
import { SprintRunner } from "@/components/SprintRunner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Fluency sprint",
  description: "Quick-fire Mandarin Chinese — vocabulary, toned Pinyin, measure words and particles — timed (60s) or untimed.",
};

export default function SprintPage() {
  return <SprintRunner />;
}
