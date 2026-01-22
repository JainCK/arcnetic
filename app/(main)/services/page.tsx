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
    title: "Web & Full-Stack Development",
    description:
      "We architect and build high-performance, scalable web applications, from dynamic single-page apps to complex enterprise-level SaaS platforms.",
    href: "/services/web-development",
  },
  {
    iconName: "Smartphone",
    title: "Mobile Development",
    description:
      "Engage your users on the go with custom native iOS and Android applications. We focus on creating intuitive, high-performance mobile experiences.",
    href: "/services/mobile-development",
  },
  {
    iconName: "BrainCircuit",
    title: "AI Solutions",
    description:
      "Leverage the power of Artificial Intelligence to unlock new efficiencies. We build custom machine learning models for predictive analytics and automation.",
    href: "/services/ai-solutions",
  },
  {
    iconName: "Cloud",
    title: "Cloud & Infrastructure",
    description:
      "Build a resilient, scalable foundation. Our experts design and manage robust infrastructures on AWS, Azure, and GCP, optimized for cost and security.",
    href: "/services/cloud-infrastructure",
  },
  {
    iconName: "Wrench",
    title: "Maintenance & Support",
    description:
      "Ensure the long-term health of your software. We provide proactive monitoring, timely updates, security patches, and expert technical assistance.",
    href: "/services/maintenance-support",
  },
  {
    iconName: "BarChart",
    title: "Digital Transformation",
    description:
      "Modernize your operations. We help businesses upgrade legacy systems, streamline workflows, and implement data-driven strategies for growth.",
    href: "/services/digital-transformation",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-8 overflow-hidden border-b border-white/10">
        {/* Background Void */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#111] via-[#000000] to-[#000000]" />
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
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
              Engineering <br/> Excellence.
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
          {/* Mobile: 1 col, Tablet: 2 col, Desktop: 3 col */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.title}
                iconName={service.iconName}
                title={service.title}
                description={service.description}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- CINEMATIC CTA --- */}
      <section className="relative py-32 px-4 overflow-hidden border-t border-white/10 bg-[#050505]">
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-playfair text-white mb-6 leading-tight">
            Have a Vision? <br/> Let's Engineer It.
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
            
            <Link href="/about">
              <Button variant="outline" className="h-14 px-10 border-white/10 text-white hover:bg-white/5 hover:text-white rounded-full font-space-grotesk tracking-widest text-xs">
                EXPLORE OUR PROCESS
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