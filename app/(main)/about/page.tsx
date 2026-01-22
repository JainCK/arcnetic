import type { Metadata } from "next";
import { HeroSection } from "@/components/about/hero-section";
import { MissionSection } from "@/components/about/mission-section";
// TeamSection removed as per request
import { ValuesSection } from "@/components/about/values-section";
import { CultureSection } from "@/components/about/culture-section";
import { AboutFaqPreview } from "@/components/about/about-faq-preview";

export const metadata: Metadata = {
  title: "About Us | Arcnetic - Engineering The Inevitable",
  description:
    "Learn about Arcnetic's mission to deliver world-class software solutions. Discover the values and culture that drive our innovation.",
  keywords: [
    "about Arcnetic",
    "software development mission",
    "technology experts",
    "innovation",
    "corporate values",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <HeroSection />
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <section id="mission">
        <MissionSection />
      </section>
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <ValuesSection />
      
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <CultureSection />
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <AboutFaqPreview />
    </div>
  );
}