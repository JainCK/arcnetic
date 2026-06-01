import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Arcnetic - Engineering Excellence",
  description:
    "Explore Arcnetic's full suite of enterprise software services. From AI integration to cloud infrastructure, we build the systems that power the future.",
  openGraph: {
    title: "Our Services - Custom Software, AI, and Cloud Solutions | Arcnetic",
    description:
      "Discover our comprehensive software services designed for business growth and innovation.",
  },
};

const servicesData = [
  {
    iconName: "Code",
    title: "Websites & SEO",
    description:
      "Your website isn't just a digital brochure; it's a lead-generation engine. We engineer custom web architectures that prioritize core web vitals and frictionless user experiences.",
    href: "/services/custom-websites-seo",
  },
  {
    iconName: "Smartphone",
    title: "Mobile Platforms",
    description:
      "Engage your users on the go with custom native iOS and Android applications. We focus on creating intuitive, high-performance mobile experiences.",
    href: "/services/react-native-mobile-development",
  },
  {
    iconName: "BrainCircuit",
    title: "AI Automations",
    description:
      "Stop treating your team like robots. We integrate LLMs and n8n/Make.com automation pipelines that handle repetitive logic, routing, and data processing — 24/7.",
    href: "/services/ai-workflow-automation",
  },
  {
    iconName: "Cpu",
    title: "Custom Software Solutions",
    description:
      "Eliminate operational bottlenecks. We engineer bespoke CRMs, enterprise ERPs, microservices, and internal tooling that adapt perfectly to your unique workflows.",
    href: "/services/custom-software-development",
  },
  {
    iconName: "BarChart",
    title: "Digital Transformations",
    description:
      "Modernize your operations. We help businesses upgrade legacy systems, streamline workflows, and implement data-driven strategies for growth.",
    href: "/services/digital-transformation-consulting",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 overflow-hidden border-b border-white/10">
        {/* Background Void */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#111] via-[#000000] to-[#000000]" />
          <div className="absolute inset-0 opacity-[0.15] bg-[url('/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto relative z-10 max-w-7xl text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-white/60" />
              <span className="font-space-grotesk text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60">
                Core Capabilities
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-medium font-playfair text-white tracking-tight leading-[0.95] md:leading-[0.9]">
              Engineering <br /> Excellence.
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-xl md:max-w-2xl mx-auto font-space-grotesk leading-relaxed px-4">
              We deliver end-to-end software solutions engineered for enterprise-level performance, security, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 md:py-32 px-4 md:px-8 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          {/* Mobile: 1 col, Tablet: 2 col, Desktop: 3 col (centered last row using a 6-col grid layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
            {servicesData.map((service, index) => {
              // On desktop (lg screens), we use 6 columns:
              // Row 1: 3 cards spanning 2 columns each (cols 1-2, 3-4, 5-6)
              // Row 2: 2 cards spanning 2 columns each, centered by starting the 4th card at column 2 (cols 2-3, 4-5)
              const gridItemClasses = 
                index === 3 
                  ? "lg:col-span-2 lg:col-start-2" 
                  : "lg:col-span-2";
              return (
                <div key={service.title} className={gridItemClasses}>
                  <ServiceCard
                    iconName={service.iconName}
                    title={service.title}
                    description={service.description}
                    href={service.href}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CINEMATIC CTA --- */}
      <section className="relative py-32 px-4 overflow-hidden border-t border-white/10 bg-[#050505]">
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-playfair text-white mb-6 leading-tight">
            Have a Vision? <br /> Let's Engineer It.
          </h2>

          <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto font-space-grotesk">
            We provide a complimentary consultation to outline a technology strategy that aligns perfectly with your business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-10 bg-white text-black hover:bg-white/90 rounded-full font-playfair font-bold text-lg group">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

    </div>
  );
}