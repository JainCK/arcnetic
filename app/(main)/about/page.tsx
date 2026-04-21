import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/about/hero-section";
import { MissionSection } from "@/components/about/mission-section";
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

      {/* JOIN THE TEAM SECTION */}
      <section className="py-24 md:py-32 px-4 text-center container mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair mb-6 tracking-tight">Become Part of the Vision</h2>
        <p className="font-space-grotesk text-white/50 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
          If you want to be a part of our collective, upscale your skillset, and share authentic innovation with the world—the Arcnetic team welcomes you.
        </p>
        <Link 
          href="/careers"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-space-grotesk uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          Explore Careers
        </Link>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <AboutFaqPreview />
    </div>
  );
}