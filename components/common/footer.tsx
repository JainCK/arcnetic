"use client";

import { Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { usePublicConfig } from "@/hooks/usePublicConfig";

const solutions = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Apps", href: "/services/mobile-development" },
  { name: "AI Solutions", href: "/services/ai-solutions" },
  { name: "Cloud Infra", href: "/services/cloud-infrastructure" },
  { name: "Digital Transformation", href: "/services/digital-transformation" },
];

const studio = [
  { name: "Our Mission", href: "/about#mission" },
  { name: "Leadership", href: "/about#team" },
  { name: "Careers", href: "/careers" },
  { name: "Strategies", href: "/strategies" },
  { name: "Blog", href: "/blog" },
];

export function FooterMinimal() {
  const { config } = usePublicConfig();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-12 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8">
            <h2 className="font-playfair text-3xl font-bold text-white">Arcnetic.</h2>
            <p className="font-space-grotesk text-sm text-white/40 leading-relaxed max-w-xs">
              Engineering the next generation of digital enterprise. 
              Based in Kochi, operating globally.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <SocialIcon icon={Linkedin} href={`https://linkedin.com/${config?.social?.linkedin || "company/arcnetic"}`} />
              <SocialIcon icon={Twitter} href={`https://twitter.com/${config?.social?.twitter || "arcnetic"}`} />
              {/* <SocialIcon icon={Instagram} href={`https://instagram.com/${config?.social?.instagram || "arcnetic"}`} /> */}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/30 mb-8">
              Expertise
            </h3>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm font-space-grotesk text-white/60 hover:text-white transition-colors block py-1">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3">
            <h3 className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/30 mb-8">
              Studio
            </h3>
            <ul className="space-y-4">
              {studio.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm font-space-grotesk text-white/60 hover:text-white transition-colors block py-1">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/5 pt-12 gap-8">
          <div className="space-y-1">
             <p className="text-xs text-white/30 font-space-grotesk uppercase tracking-widest">© {currentYear} Arcnetic Pvt Ltd.</p>
             <div className="flex gap-4 text-xs text-white/30 font-space-grotesk">
               <Link href="/privacy" className="hover:text-white">Privacy</Link>
               <Link href="/terms" className="hover:text-white">Terms</Link>
             </div>
          </div>
          
          <div className="text-right">
             <p className="text-xs text-white/30 font-space-grotesk uppercase tracking-widest mb-1">System Status</p>
             <div className="flex items-center gap-2 justify-end">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-xs text-white/60 font-space-grotesk">All Systems Operational</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white border border-white/5 hover:border-white flex items-center justify-center text-white/60 hover:text-black transition-all duration-300"
  >
    <Icon className="h-4 w-4" />
  </a>
);