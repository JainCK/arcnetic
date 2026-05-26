"use client";

import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { usePublicConfig } from "@/hooks/usePublicConfig";

const solutions = [
  { name: "Websites & SEO", href: "/services/custom-websites-seo" },
  { name: "Mobile Platforms", href: "/services/react-native-mobile-development" },
  { name: "AI Automations", href: "/services/ai-workflow-automation" },
  { name: "Custom Software", href: "/services/custom-software-development" },
  { name: "Digital Transformations", href: "/services/digital-transformation-consulting" },
];

const studio = [
  { name: "Our Mission", href: "/about#mission" },
  { name: "Strategies", href: "/strategies" },
  { name: "Careers", href: "/careers" },
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
            <div className="space-y-2">
              <h2 className="font-playfair text-3xl font-bold text-white">Arcnetic.</h2>
              <p className="text-xs text-white/30 font-space-grotesk uppercase tracking-widest">© {currentYear} Arcnetic Pvt Ltd.</p>
              <div className="flex gap-4 text-xs text-white/30 font-space-grotesk">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <SocialIcon icon={Linkedin} href={`https://linkedin.com/${config?.social?.linkedin || "company/arcnetic"}`} label="LinkedIn" />
              <SocialIcon icon={Twitter} href={`https://twitter.com/${config?.social?.twitter || "arcneticpvtltd"}`} label="Twitter" />
              <SocialIcon icon={Instagram} href={`https://instagram.com/${config?.social?.instagram || "arcnetic.official"}`} label="Instagram" />
              <SocialIcon icon={Facebook} href={`https://facebook.com/${config?.social?.facebook || "arcneticpvtltd"}`} label="Facebook" />
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


      </div>

      {/* Huge Background Name */}
      <div className="w-full flex justify-center items-center pointer-events-none select-none overflow-hidden mt-12 pb-4">
        <span 
          className="font-inter font-black text-[16vw] leading-none tracking-tighter whitespace-nowrap text-white"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))",
            maskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))"
          }}
        >
          Arcnetic
        </span>
      </div>
    </footer>
  );
}

const SocialIcon = ({ icon: Icon, href, label }: { icon: any, href: string, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white border border-white/5 hover:border-white flex items-center justify-center text-white/60 hover:text-black transition-all duration-300"
  >
    <Icon className="h-4 w-4" />
  </a>
);