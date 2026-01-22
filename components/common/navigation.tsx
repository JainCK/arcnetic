"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- 1. REORGANIZED MENU DATA ---
const studioLinks = [
  { title: "Mission & Vision", href: "/about" },
  { title: "Careers", href: "/careers" },
  { title: "Contact Us", href: "/contact" },
];

const insightLinks = [
  { title: "Strategies", href: "/strategies" },
  { title: "Blog", href: "/blog" },
  { title: "FAQ", href: "/faq" },
];

const serviceLinks = [
  { title: "Web & Full Stack", href: "/services/web-development" },
  { title: "Mobile Apps", href: "/services/mobile-development" },
  { title: "AI Solutions", href: "/services/ai-solutions" },
  { title: "Cloud Infra", href: "/services/cloud-infrastructure" },
  { title: "Maintenance", href: "/services/maintenance-support" },
  { title: "Transformation", href: "/services/digital-transformation" },
];

export function NavigationMinimal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 border-b ${
          scrolled || isMenuOpen
            ? "bg-black/80 backdrop-blur-xl border-white/10 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* --- LOGO + NAME (As requested) --- */}
            <Link href="/" className="relative z-50 flex items-center gap-3 group">
               <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
                 {/* Ensure this path matches your public folder */}
                 <Image 
                   src="/images/arcnetic-logo.png" 
                   alt="Arcnetic Logo" 
                   fill
                   className="object-contain"
                 />
               </div>
               <span className="font-playfair text-xl md:text-2xl font-bold text-white tracking-tight">
                Arcnetic<span className="text-primary">.</span>
               </span>
            </Link>

            {/* --- DESKTOP NAV (Condensed Groups) --- */}
            <nav className="hidden md:flex items-center gap-10">
              
              {/* 1. Services Group */}
              <HoverMenu title="Services" href="/services">
                <div className="grid grid-cols-2 gap-x-12 gap-y-4 w-[500px] p-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group/link block"
                    >
                      <div className="text-sm font-space-grotesk text-white/60 group-hover/link:text-white transition-colors">
                        {link.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </HoverMenu>

              {/* 3. Studio Group */}
              <HoverMenu title="About Us">
                <div className="flex flex-col gap-4 w-48 p-2">
                  {studioLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-space-grotesk text-white/60 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </HoverMenu>

              {/* 2. Insights Group */}
              <HoverMenu title="Insights">
                <div className="flex flex-col gap-4 w-48 p-2">
                  {insightLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-space-grotesk text-white/60 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </HoverMenu>


            </nav>

            {/* --- ACTION BUTTON --- */}
            <div className="hidden md:flex items-center">
              <Link 
                href="/contact"
                className="group flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-xs font-space-grotesk uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black hover:border-white"
              >
                <span>Start Project</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* --- MOBILE HAMBURGER --- */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 text-white p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[9998] bg-black pt-32 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-10 pb-20">
              <MobileSection title="Studio" links={studioLinks} close={() => setIsMenuOpen(false)} />
              <MobileSection title="Services" links={serviceLinks} close={() => setIsMenuOpen(false)} />
              <MobileSection title="Insights" links={insightLinks} close={() => setIsMenuOpen(false)} />
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <Link 
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-full h-14 text-lg bg-white text-black hover:bg-white/90 font-playfair font-bold rounded-md"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- SUB-COMPONENTS ---

const HoverMenu = ({ title, children, href }: { title: string; children: React.ReactNode; href?: string }) => (
  <div className="group relative h-10 flex items-center justify-center">
    {href ? (
      <Link 
        href={href}
        className="flex items-center gap-1 text-sm font-space-grotesk uppercase tracking-wide text-white/70 group-hover:text-white transition-colors"
      >
        {title}
        <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180 opacity-50" />
      </Link>
    ) : (
      <button className="flex items-center gap-1 text-sm font-space-grotesk uppercase tracking-wide text-white/70 group-hover:text-white transition-colors">
        {title}
        <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180 opacity-50" />
      </button>
    )}
    
    {/* Dropdown Panel - Centered */}
    <div className="absolute top-8 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2">
      <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
        {children}
      </div>
    </div>
  </div>
);

const MobileSection = ({ title, links, close }: { title: string, links: any[], close: () => void }) => (
  <div className="space-y-4">
    <h3 className="text-white/30 font-space-grotesk text-xs uppercase tracking-[0.2em]">{title}</h3>
    <div className="flex flex-col gap-3">
      {links.map((link) => (
        <Link 
          key={link.href} 
          href={link.href} 
          onClick={close}
          className="text-2xl font-playfair text-white/80 hover:text-white hover:translate-x-2 transition-all"
        >
          {link.title}
        </Link>
      ))}
    </div>
  </div>
);