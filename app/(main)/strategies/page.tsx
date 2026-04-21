import type { Metadata } from "next";
import { StrategyClient } from "@/components/strategy/strategy-client";

export const metadata: Metadata = {
  title:
    "Strategic Innovation | Arcnetic - Transforming Business Through Technology",
  description:
    "Discover our proven 5-phase strategic process that transforms vision into measurable results.",
  keywords: [
    "strategic innovation",
    "business strategy",
    "digital transformation",
    "technology strategy",
    "strategic planning",
    "innovation methodology",
    "business transformation",
    "strategic consulting",
    "technology roadmap",
    "strategic excellence",
  ],
  openGraph: {
    title: "Strategic Innovation That Transforms - Arcnetic",
    description:
      "Experience our proven 5-phase strategic process that transforms vision into measurable results through data-driven insights and innovative solutions.",
    type: "website",
    url: "/strategies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Innovation - Arcnetic",
    description:
      "Discover how our strategic approach creates sustainable competitive advantages through technology innovation.",
  },
};

export default function StrategiesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <StrategyClient />
    </main>
  );
}
