import type { Metadata } from "next";
import { HeroSection } from "@/components/about/hero-section";
import { MissionSection } from "@/components/about/mission-section";
import { TeamSection } from "@/components/about/team-section";
import { ValuesSection } from "@/components/about/values-section";
import { JourneySection } from "@/components/about/journey-section";
import { CultureSection } from "@/components/about/culture-section";
import { AboutFaqPreview } from "@/components/about/about-faq-preview";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = {
  title: "About Us | Arcnetic - Our Mission, Team & Values",
  description:
    "Learn about Arcnetic's mission to deliver world-class software solutions. Meet our expert team and discover the values that drive our innovation.",
  keywords: [
    "about Arcnetic",
    "software development team",
    "company mission",
    "technology experts",
    "innovation",
    "values",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SectionDivider variant="waves" />

      <section id="mission">
        <MissionSection />
      </section>
      <SectionDivider variant="geometric" />

      <ValuesSection />
      <SectionDivider variant="dots" />

      <JourneySection />
      <SectionDivider variant="waves" />

      <CultureSection />
      <SectionDivider variant="geometric" />

      <section id="team">
        <TeamSection />
      </section>
      <SectionDivider variant="dots" />

      <AboutFaqPreview />
    </div>
  );
}
