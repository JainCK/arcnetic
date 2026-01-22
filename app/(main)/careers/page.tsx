import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Code, Lightbulb, Globe, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

// SEO Optimized Metadata
export const metadata: Metadata = {
  title: "Careers | Arcnetic - Engineer The Future",
  description:
    "Join the team building the inevitable. Explore career opportunities in software engineering, AI, and design at Arcnetic.",
  openGraph: {
    title: "Careers | Arcnetic",
    description:
      "Join the team building the inevitable. Explore career opportunities in software engineering, AI, and design at Arcnetic.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://arcnetic.com"}/careers`,
  },
  keywords: [
    "software developer jobs",
    "tech careers",
    "AI engineer jobs",
    "remote tech jobs",
    "arcnetic careers",
  ],
};

const values = [
  {
    icon: Code,
    title: "Technical Mastery",
    description:
      "We don't just write code; we craft systems. We demand excellence, efficiency, and scalability in every commit.",
  },
  {
    icon: Lightbulb,
    title: "Radical Innovation",
    description:
      "We solve problems others ignore. We leverage bleeding-edge technology to create unfair advantages for our clients.",
  },
  {
    icon: Users,
    title: "Collective Genius",
    description:
      "No lone wolves. We believe in the multiplier effect of high-trust, high-bandwidth collaboration.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Your work will power enterprises around the world. We build software that matters.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden border-b border-white/10">
        {/* Background Void */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#111] via-[#000000] to-[#000000]" />
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="max-w-4xl">
            <Link href="/">
                <Button variant="ghost" className="mb-12 text-white/40 hover:text-white hover:bg-white/5 pl-0 transition-all group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Base
                </Button>
            </Link>
            
            <span className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-white/40 border border-white/10 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm mb-8 inline-block">
              Join the Vanguard
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium font-playfair text-white mb-8 tracking-tight leading-[0.9]">
              Build The <br/> Inevitable.
            </h1>
            <p className="text-xl text-white/50 max-w-2xl font-space-grotesk leading-relaxed">
              We are looking for the obsessive, the curious, and the relentless. 
              Help us engineer the next generation of digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* --- CULTURE GRID --- */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
                The Engineering Standard
              </h2>
              <p className="font-space-grotesk text-white/50 text-lg">
                We don't hire for seats; we hire for standards. Here is what defines us.
              </p>
            </div>
            <div className="h-px flex-1 bg-white/10 hidden md:block mx-8 mb-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-[#111] transition-all duration-500 hover:border-white/20"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white/60 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-playfair text-white mb-4 group-hover:translate-x-1 transition-transform">
                  {value.title}
                </h3>
                <p className="text-sm text-white/40 font-space-grotesk leading-relaxed group-hover:text-white/60 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPLICATION SECTION --- */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="relative rounded-3xl border border-white/10 bg-[#050505] overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none opacity-20" />
            
            <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16 relative z-10">
              
              <div className="space-y-8">
                <h2 className="font-playfair text-4xl md:text-6xl text-white leading-tight">
                  Ready to deploy?
                </h2>
                <p className="font-space-grotesk text-lg text-white/50 leading-relaxed max-w-md">
                  We are always searching for exceptional talent. If you don't see a specific role but know you belong here, send us your signal.
                </p>
                
                <div className="pt-4">
                  <a href="mailto:careers@arcnetic.com" className="inline-block">
                    <Button className="h-14 px-8 bg-white text-black hover:bg-white/90 rounded-full font-playfair font-bold text-lg">
                      <Mail className="mr-3 h-5 w-5" />
                      Apply Now
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                <h3 className="font-space-grotesk text-sm uppercase tracking-widest text-white/40 mb-6">
                  Application Protocol
                </h3>
                
                <div className="space-y-6 font-space-grotesk text-white/70">
                  <p>
                    Send your dossier to <span className="text-white border-b border-white/20">aswin.p@arcnetic.com or jainkuriakose@arcnetic.com</span> including:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                      <span>Your resume / CV (PDF format preferred)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                      <span>GitHub profile or Portfolio link</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                      <span>A brief cover letter on why you want to build the future with us</span>
                    </li>
                  </ul>
                  <p className="text-sm text-white/30 pt-4 border-t border-white/5">
                    Response time: 5-7 business days for qualified candidates.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}