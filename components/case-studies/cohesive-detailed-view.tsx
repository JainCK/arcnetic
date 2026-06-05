"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Clock, AlertTriangle, ZoomIn, X } from "lucide-react";
import { CaseStudy } from "@/lib/case-studies-data";

interface CohesiveDetailedViewProps {
  caseStudy: CaseStudy;
  otherCases: CaseStudy[];
}

interface BrowserScreenshotProps {
  src: string;
  alt: string;
  caption: string;
  urlLabel: string;
  onZoom: (src: string, caption: string) => void;
}

function BrowserScreenshot({ src, alt, caption, urlLabel, onZoom }: BrowserScreenshotProps) {
  return (
    <div className="relative w-full my-8 group">
      {/* Emerald backdrop glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700 pointer-events-none" />
      <motion.div 
        whileHover={{ y: -4, scale: 1.005 }}
        className="relative w-full shadow-xl rounded-xl overflow-hidden border border-white/10 bg-[#0D0D10] group-hover:border-emerald-500/25 transition-all duration-500 cursor-zoom-in"
        onClick={() => onZoom(src, caption)}
      >
        {/* Browser Bar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#121216] border-b border-white/5 select-none">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
          </div>
          <div className="text-[9px] font-space-grotesk text-white/20 tracking-wider">
            {urlLabel}
          </div>
          <ZoomIn className="w-3.5 h-3.5 text-white/20 group-hover:text-white transition-colors" />
        </div>

        {/* Screenshot viewport with object-contain */}
        <div className="relative w-full aspect-[16/10] bg-[#070709]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
          />
        </div>

        {/* Screenshot Caption */}
        <div className="bg-[#09090C] border-t border-white/5 px-3 py-2 text-[10px] font-space-grotesk text-white/40 text-center">
          {caption}
        </div>
      </motion.div>
    </div>
  );
}

function ImagePlaceholder({ text }: { text: string }) {
  return (
    <div className="relative my-8 w-full group">
      {/* Background glow on hover */}
      <div className="absolute -inset-0.5 bg-emerald-500/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
      <div className="relative w-full border border-dashed border-white/10 hover:border-emerald-500/30 bg-[#030303] hover:bg-emerald-950/[0.015] p-8 rounded-xl flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.02)]">
        <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center group-hover:scale-105 transition-transform group-hover:border-emerald-500/20 group-hover:bg-emerald-500/5">
          <svg className="w-4 h-4 text-white/40 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="font-space-grotesk text-[9px] uppercase tracking-widest text-white/30 group-hover:text-emerald-400 transition-colors">
          Design Team Image Suggestion
        </div>
        <p className="font-space-grotesk text-xs md:text-sm text-white/50 max-w-lg leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

export function CohesiveDetailedView({ caseStudy, otherCases }: CohesiveDetailedViewProps) {
  const [activeImage, setActiveImage] = useState<{ src: string; caption: string } | null>(null);

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black font-inter pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[5%] left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.03] blur-[150px] rounded-full" />
        <div className="absolute top-[40%] right-1/4 w-[700px] h-[700px] bg-blue-500/[0.03] blur-[180px] rounded-full" />
        <div className="absolute bottom-[10%] left-1/3 w-[500px] h-[500px] bg-indigo-500/[0.02] blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* ── BREADCRUMB / BACK LINK ── */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-xs font-space-grotesk uppercase tracking-widest text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Case Studies
          </Link>
        </motion.div>

        {/* ── HERO METADATA ── */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-0.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-space-grotesk uppercase tracking-widest text-white/70">
              {caseStudy.tag}
            </span>
            <span className="font-space-grotesk text-[9px] uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-3 py-0.5 bg-white/5">
              {caseStudy.industry}
            </span>
          </div>

          <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.15] mb-6 tracking-tight">
            How Arcnetic Transformed Cohesive Consulting Solutions' Digital Presence — Turning a Static Website Into a 24/7 Lead Generation Engine
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/10 font-space-grotesk text-xs text-white/50">
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Client</span>
              <span className="text-white font-medium">{caseStudy.client}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Services Delivered</span>
              <span className="text-white font-medium">Full-Stack Web, SEO & Automation</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Delivered By</span>
              <span className="text-emerald-400 font-medium">Arcnetic Private Limited</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Key Impact</span>
              <span className="text-emerald-400 font-medium">90+ Mobile, 24/7 Bot Live</span>
            </div>
          </div>
        </div>

        {/* ── CLIENT QUOTE BLOCK ── */}
        <blockquote className="border-l-2 border-emerald-500/50 pl-6 my-10 max-w-4xl">
          <p className="font-playfair text-xl md:text-2xl text-white/80 italic leading-relaxed">
            "A firm with 20 years of expertise and 100% client confidentiality deserved a digital presence that matched their standard of excellence — so we built one from the ground up."
          </p>
        </blockquote>

        <BrowserScreenshot 
          src="/images/case-studies/cohesive/ss1.png"
          alt="Cohesive Consulting Solutions Homepage Cover"
          caption="Figure 1.0 — High-Performance Next.js Homepage with clear visual structure and CTA funnels"
          urlLabel="cohesive.in.home"
          onZoom={(src, caption) => setActiveImage({ src, caption })}
        />

        {/* ── THE CLIENT SECTION ── */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight border-b border-white/5 pb-2">
            The Client: Cohesive Consulting Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 font-space-grotesk text-base md:text-lg text-white/70 leading-relaxed">
              <p>
                Cohesive Consulting Solutions is a premier financial and tax advisory firm with over 20 years of industry experience. They specialise in high-end tax, accounting, and GST strategies.
              </p>
              <p>
                What sets Cohesive apart is their commitment to a bespoke, client-first approach — each engagement is tailored, discreet, and backed by an unwavering 100% client confidentiality policy. A reputation built over two decades, word-of-mouth referrals, and deep domain expertise had earned them a loyal client base.
              </p>
              <p className="text-white/90 font-medium">
                But their digital presence was not reflecting that authority.
              </p>
            </div>
            <div className="md:col-span-1 bg-white/[0.01] border border-white/5 p-6 rounded-xl space-y-4">
              <h3 className="font-space-grotesk text-xs uppercase tracking-wider text-white/40 font-semibold">Specialist Services</h3>
              <ul className="space-y-2.5 font-space-grotesk text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
                  <span><strong>Income Tax & Filing</strong> — Individual and corporate tax compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
                  <span><strong>GST Advisory & Compliance</strong> — End-to-end GST registration, filing, and advisory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
                  <span><strong>TAS (Tax Accounting Services)</strong> — Structured, bespoke accounting support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
                  <span><strong>Tax Advisory</strong> — Strategic planning and advisory for businesses and HNIs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <BrowserScreenshot 
          src="/images/case-studies/cohesive/Screenshot 2026-06-03 002045.png"
          alt="Cohesive Services Overview Mockup"
          caption="Figure 1.1 — Clean layout showcasing core accounting and tax services with high contrast design"
          urlLabel="cohesive.in.services"
          onZoom={(src, caption) => setActiveImage({ src, caption })}
        />

        {/* ── THE CHALLENGE SECTION ── */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight border-b border-white/5 pb-2">
            The Challenge: A Trusted Firm Invisible Online
          </h2>
          <div className="space-y-6">
            <p className="font-space-grotesk text-white/70 text-base md:text-lg leading-relaxed">
              When Cohesive Consulting Solutions came to Arcnetic, the core problem was clear: their digital presence was not converting — or even reaching — the clients they deserved. For a firm that had built two decades of credibility through personal service, their website was essentially a missed opportunity — every single day.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {caseStudy.detailedReport.challengePoints?.map((gap, i) => (
                <div key={i} className="bg-white/[0.01] border border-white/5 hover:border-amber-500/20 hover:bg-amber-950/[0.01] p-5 rounded-xl transition-all duration-300 group">
                  <div className="flex items-start gap-2.5 mb-2.5">
                    <AlertTriangle className="h-4 w-4 text-amber-500/80 shrink-0 mt-0.5" />
                    <h3 className="font-space-grotesk text-xs font-semibold text-white/90 group-hover:text-amber-400 transition-colors">
                      {gap.title}
                    </h3>
                  </div>
                  <p className="font-space-grotesk text-xs md:text-sm text-white/40 leading-relaxed">
                    {gap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BrowserScreenshot 
          src="/images/case-studies/cohesive/Screenshot 2026-06-03 002113.png"
          alt="PageSpeed Performance Insights"
          caption="Figure 1.2 — Sub-second LCP and excellent Core Web Vitals performance score"
          urlLabel="cohesive.in.speed"
          onZoom={(src, caption) => setActiveImage({ src, caption })}
        />

        {/* ── THE SOLUTION SECTION & PILLARS ── */}
        <section className="mb-20">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight border-b border-white/5 pb-2">
            Our Solution: A Full-Stack Digital Transformation
          </h2>
          <p className="font-space-grotesk text-white/70 text-base md:text-lg leading-relaxed mb-10">
            Arcnetic designed and executed a comprehensive solution — not just a redesign, but a performance-first, conversion-optimised, and SEO-ready digital platform built to work as hard as the team behind it.
          </p>

          <div className="space-y-16">
            
            {/* 1. Next.js Website */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 text-xs flex items-center justify-center font-bold">1</span>
                Next.js Website — Built for Speed, Scale & SEO
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                We chose Next.js as the development framework for specific, strategic reasons. Next.js enables server-side rendering (SSR) and static site generation (SSG), which directly benefits Core Web Vitals, crawlability, and perceived performance — all critical for a professional services firm competing for search visibility.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pl-7 pt-2 font-space-grotesk text-sm text-white/50">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> Clean, semantic HTML structure for maximum crawl efficiency</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> Component-based architecture for easy long-term updates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> Optimised assets, lazy loading, and minimal render blocking</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> Fast-loading fonts and CSS for instant visual rendering</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> Secure, production-grade deployment environment</li>
              </ul>
            </div>

            {/* 2. Technical SEO */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 text-xs flex items-center justify-center font-bold">2</span>
                Technical SEO — Getting Found Starts at the Foundation
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                Before any content strategy can work, the technical infrastructure must be flawless. Our SEO team executed a comprehensive technical audit and implementation, covering:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pl-7 pt-2 font-space-grotesk text-sm text-white/50">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Canonical tags & URLs</strong> — eliminating duplicate content and structuring clean URL hierarchies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>XML sitemaps</strong> — automatic generation and submission ensuring Google indexes all pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Robots.txt</strong> — directing crawlers to high-value pages and protecting private paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Social Open Graph</strong> — Open Graph and Twitter Card tags to control shared link appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Core Web Vitals</strong> — Largest Contentful Paint (LCP), CLS, and FID brought within green zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>HTTPS & Site Security</strong> — SSL setup representing search ranking trust signals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Internal Linking</strong> — building topical authority across Tax, GST, TAS, and Advisory clusters</span>
                </li>
              </ul>
              <div className="pl-7">
                <BrowserScreenshot 
                  src="/images/case-studies/cohesive/Screenshot 2026-06-03 002138.png"
                  alt="Google Indexing and Crawl Diagnostics"
                  caption="Figure 1.4 — Schema mapping markup validated by search diagnostics indexers"
                  urlLabel="cohesive.in.seo-console"
                  onZoom={(src, caption) => setActiveImage({ src, caption })}
                />
              </div>
            </div>

            {/* 3. On-Page SEO */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 text-xs flex items-center justify-center font-bold">3</span>
                On-Page SEO — Owning the Search Terms That Matter
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                With a technically sound foundation in place, we layered in a meticulous on-page SEO strategy designed specifically for the competitive financial and tax advisory space:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pl-7 pt-2 font-space-grotesk text-sm text-white/50">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Keyword Research</strong> — targeting terms like "GST consultant [city]" and "income tax advisory"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Title Tags & Meta</strong> — metadata tags customized for CTR optimizations and engine crawling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Header Hierarchy</strong> — logical structure of H1–H4 elements matching search intent layouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>E-E-A-T Content</strong> — demonstrating authority, expertise, and confidentiality trust-first</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Service Page Audits</strong> — rewriting content to rank without losing premium advisory branding tone</span>
                </li>
              </ul>
            </div>

            {/* 4. Schema Markup */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 text-xs flex items-center justify-center font-bold">4</span>
                Schema Markup — Telling Google Exactly Who You Are
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                One of the most impactful — and most overlooked — elements of our SEO implementation was structured data via Schema.org markup. Google now has complete, structured, machine-readable context about Cohesive Consulting Solutions — their services, authority, and trustworthiness.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pl-7 pt-2 font-space-grotesk text-sm text-white/50">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>LocalBusiness schema</strong> — mapping physical address details, contact channels, and hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>ProfessionalService schema</strong> — explicitly signaling professional advisory credentials to search crawlers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Service schema</strong> — blocks detailing Tax Filing, GST Advisory, TAS, and Tax Planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>FAQPage schema</strong> — targeting dynamic search result expandable snippets to raise organic CTR</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>BreadcrumbList schema</strong> — enhancing navigation indexes on search result listings</span>
                </li>
              </ul>
            </div>

            {/* 5. UX & Mobile Optimisation */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 text-xs flex items-center justify-center font-bold">5</span>
                UX & Mobile Optimisation — Designed Around the User
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                A professional services website must do one thing above all else: build trust, fast. Our UX strategy was built around that principle, making it mobile-first, reflecting how the majority of professional service prospects browse:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pl-7 pt-2 font-space-grotesk text-sm text-white/50">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Streamlined navigation</strong> — users can find any service or contact method within two clicks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Clear visual hierarchy</strong> — layout hierarchy guiding attention flow to high-intent actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Trust-signal positioning</strong> — surfacing 20+ years of experience and confidentiality guarantees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Mobile-first design</strong> — responsive frameworks optimized first for smart screens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Touch-friendly interfaces</strong> — spacing, form fields, and CTA button sizing for effortless tapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Accessibility baseline</strong> — high contrast ratios, semantic elements, and screen-readable setups</span>
                </li>
              </ul>
            </div>

            {/* 6. Page Speed Optimisation */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 text-xs flex items-center justify-center font-bold">6</span>
                Page Speed Optimisation — Because Every Second Counts
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                Speed is not just a UX consideration — it is a direct ranking factor and a direct driver of bounce rate. We treated performance as a non-negotiable deliverable. Our approach included next/image WebP formats, next/font layout optimization, third-party script deferral, server-side rendering, and CDN caching.
              </p>
              
              {/* Technical speed comparison block */}
              <div className="pt-4 max-w-xl mx-auto">
                <div className="rounded-xl border border-white/10 bg-white/[0.01] overflow-hidden">
                  <div className="grid grid-cols-3 gap-2 bg-white/[0.03] p-3 text-xs font-space-grotesk uppercase tracking-wider text-white/40 font-semibold">
                    <div className="pl-2">Metric</div>
                    <div className="text-center">Before</div>
                    <div className="text-center">After</div>
                  </div>
                  <div className="divide-y divide-white/5 font-space-grotesk text-sm">
                    <div className="grid grid-cols-3 gap-2 p-3 items-center">
                      <div className="pl-2 text-white/80">PageSpeed Mobile</div>
                      <div className="text-center text-white/30">Unoptimised</div>
                      <div className="text-center text-emerald-400 font-semibold">90+</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-3 items-center">
                      <div className="pl-2 text-white/80">PageSpeed Desktop</div>
                      <div className="text-center text-white/30">Unoptimised</div>
                      <div className="text-center text-emerald-400 font-semibold">95+</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-3 items-center">
                      <div className="pl-2 text-white/80">Largest Contentful Paint</div>
                      <div className="text-center text-white/30">Slow</div>
                      <div className="text-center text-emerald-400 font-semibold">&lt; 2.5s</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-3 items-center">
                      <div className="pl-2 text-white/80">Time to First Byte</div>
                      <div className="text-center text-white/30">Delayed</div>
                      <div className="text-center text-emerald-400 font-semibold">&lt; 600ms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. CRO */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 text-xs flex items-center justify-center font-bold">7</span>
                CRO (Conversion Rate Optimisation) — Turning Visitors Into Enquiries
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                Traffic without conversion is just noise. Our CRO implementation was designed to ensure every visitor had a clear, friction-free pathway to becoming a lead:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pl-7 pt-2 font-space-grotesk text-sm text-white/50">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Above-the-fold CTAs</strong> — a strong, visible CTA above scroll lines on key landing landing pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Service-specific landing pages</strong> — dedicated, structured conversion flows for each unique tax category</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Credibility trust badges</strong> — positioning years of practice and security guarantees early</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Exit-intent design</strong> — persistent header navigations and footer actions to recapture attention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Social Proof Positioning</strong> — client feedback and credentials positioned at high-action drop zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Optimal Form Design</strong> — low form field counts with data security notices</span>
                </li>
              </ul>
            </div>

            {/* 8. Contact Form & WhatsApp Business Integration */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 text-xs flex items-center justify-center font-bold">8</span>
                Contact Form & WhatsApp Business Integration — Meeting Clients Where They Are
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                For a firm serving individual and business clients, accessibility and responsiveness are trust signals in themselves. We implemented a dual-channel lead capture and communication system:
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pl-7 pt-4">
                <div className="bg-white/[0.01] border border-white/5 p-5 rounded-xl">
                  <h4 className="font-space-grotesk text-xs font-semibold text-white mb-2">Contact Form</h4>
                  <p className="font-space-grotesk text-xs md:text-sm text-white/50 leading-relaxed">
                    Custom-built enquiry forms with service qualification selectors. Routes submissions directly to firm mailboxes using clean structured data. Meets strict GDPR privacy guidelines.
                  </p>
                </div>
                <div className="bg-white/[0.01] border border-white/5 p-5 rounded-xl">
                  <h4 className="font-space-grotesk text-xs font-semibold text-white mb-2">WhatsApp Business</h4>
                  <p className="font-space-grotesk text-xs md:text-sm text-white/50 leading-relaxed">
                    One-tap floating WhatsApp contact actions integrated on key landing flows. Features pre-populated message template links relevant to the browsing category.
                  </p>
                </div>
                <div className="bg-white/[0.01] border border-white/5 p-5 rounded-xl">
                  <h4 className="font-space-grotesk text-xs font-semibold text-white mb-2">WhatsApp Bot Automation</h4>
                  <p className="font-space-grotesk text-xs md:text-sm text-white/50 leading-relaxed">
                    Configured an off-hours interactive script: welcome greeting &rarr; service mapping &rarr; basic client details logging. Confirms expected response schedules and passes off to humans during open hours.
                  </p>
                </div>
              </div>

              <div className="pl-7">
                <BrowserScreenshot 
                  src="/images/case-studies/cohesive/Screenshot 2026-06-03 002202.png"
                  alt="WhatsApp Bot conversation capture"
                  caption="Figure 1.7 — WhatsApp Business floating CTA and automated off-hours welcome trigger log"
                  urlLabel="cohesive.in.whatsapp"
                  onZoom={(src, caption) => setActiveImage({ src, caption })}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── THE RESULTS COMPARISON DASHBOARD ── */}
        <section className="mb-20">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight border-b border-white/5 pb-2">
            The Results: What Changed
          </h2>
          <p className="font-space-grotesk text-white/70 text-base md:text-lg leading-relaxed mb-8">
            The transformation delivered measurable impact across every dimension of digital performance.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.01] overflow-hidden backdrop-blur-sm shadow-xl max-w-4xl mx-auto mb-10">
            <div className="grid grid-cols-3 gap-4 border-b border-white/10 bg-white/[0.03] p-4 text-xs font-space-grotesk uppercase tracking-wider text-white/40 font-semibold">
              <div className="pl-4">Area</div>
              <div className="text-center">Before</div>
              <div className="text-center">After</div>
            </div>

            <div className="divide-y divide-white/5 font-space-grotesk text-sm">
              {caseStudy.detailedReport.resultsCompare?.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 items-center p-5">
                  <div className="font-medium text-white/80 pl-4">{row.metric}</div>
                  
                  <div className="flex justify-center">
                    <span className="inline-block px-3 py-1.5 text-xs text-red-400 bg-red-950/20 border border-red-500/10 rounded-md max-w-[160px] w-full text-center">
                      {row.before}
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <span className="inline-block px-3 py-1.5 text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 rounded-md font-semibold max-w-[160px] w-full text-center shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      {row.after}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </section>

        {/* ── AT A GLANCE CHECKLIST ── */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight border-b border-white/5 pb-2">
            What We Built, At a Glance
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {caseStudy.detailedReport.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl hover:border-emerald-500/10 transition-colors">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-space-grotesk text-sm md:text-base text-white/70 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY THIS MATTERS ── */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight border-b border-white/5 pb-2">
            Why This Matters for Professional Services Firms
          </h2>
          <div className="space-y-4 font-space-grotesk text-base md:text-lg text-white/70 leading-relaxed">
            <p>
              Cohesive Consulting Solutions is not just a tax firm — they are trusted advisors. Their website now reflects that. It communicates authority, builds trust within seconds of arrival, and actively converts visitors into consultations.
            </p>
            <p>
              For any professional services firm — whether in finance, law, consulting, or advisory — the digital presence is often the first moment of trust or doubt in a client's decision. Arcnetic exists to make sure it is always the former.
            </p>
          </div>
        </section>

        {/* ── CTA / CONTACT CHANNELS ── */}
        <section className="py-24 px-4 text-center max-w-3xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/[0.04] rounded-full blur-[80px] pointer-events-none" />
          <div className="space-y-6 relative z-10">
            <span className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-emerald-400 border border-emerald-500/20 rounded-full px-5 py-1.5 bg-emerald-500/5 inline-block mb-2">
              Partner with Arcnetic
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-medium tracking-tight mb-4 leading-tight">
              Ready to Build a Website That Works <br className="hidden md:block" /> as Hard as You Do?
            </h2>
            <p className="font-space-grotesk text-white/45 max-w-lg mx-auto text-sm leading-relaxed mb-8">
              At Arcnetic Private Limited, we build digital systems that generate leads, establish authority, and convert trust into clients — for professional services firms that demand excellence.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto text-xs font-space-grotesk">
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 rounded-full bg-white text-black px-8 py-4 text-xs uppercase tracking-widest hover:bg-white/90 transition-all font-semibold shadow-lg hover:shadow-emerald-500/10"
              >
                Start a Project
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="font-space-grotesk text-[10px] text-white/30 italic mt-6">
              *We work with a limited number of clients at a time to ensure every engagement gets our full attention.
            </p>
          </div>
        </section>

        {/* ── ABOUT ARCNETIC ── */}
        <section className="border-t border-white/10 pt-10 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl md:text-3xl text-white font-medium mb-4">About Arcnetic Private Limited</h3>
            <p className="font-space-grotesk text-base text-white/50 leading-relaxed">
              Arcnetic is a results-driven digital solutions company specialising in high-performance web development, technical SEO, conversion rate optimisation, and intelligent automation for professional services and growing businesses. We do not build websites — we build digital growth systems.
            </p>
            <p className="font-space-grotesk text-sm text-white/30">
              &copy; Arcnetic Private Limited. All rights reserved. Case study published with client permission.
            </p>
          </div>
        </section>

        {/* ── SUGGESTIONS ("READ NEXT") ── */}
        {otherCases.length > 0 && (
          <div className="pt-20 mt-20 border-t border-white/10">
            <h3 className="font-playfair text-2xl md:text-3xl text-white mb-8 tracking-tight text-center md:text-left">
              Explore More Work
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {otherCases.map((cs) => (
                <Link
                  key={cs.id}
                  href={`/case-studies/${cs.id}`}
                  className="group block flex flex-col bg-[#050505] border border-white/5 hover:border-white/20 transition-all duration-300 rounded-xl overflow-hidden p-6 hover:-translate-y-1 h-full"
                >
                  <span className="px-2.5 py-0.5 self-start bg-white/5 border border-white/10 rounded-full text-[9px] font-space-grotesk uppercase tracking-widest text-white/50 mb-4">
                    {cs.tag}
                  </span>
                  
                  <p className="font-space-grotesk text-[9px] uppercase tracking-wider text-white/30 mb-1">
                    {cs.client}
                  </p>
                  
                  <h4 className="font-playfair text-lg text-white mb-3 leading-snug group-hover:underline decoration-white/20 underline-offset-4 decoration-1 transition-all">
                    {cs.title}
                  </h4>
                  
                  <p className="font-space-grotesk text-white/40 text-xs leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {cs.description}
                  </p>
                  
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
                    <span className="text-[9px] font-space-grotesk text-white/30 max-w-[70%] line-clamp-1">
                      {cs.outcome}
                    </span>
                    <span className="flex items-center gap-1 text-[9px] font-space-grotesk uppercase tracking-widest text-white/30 group-hover:text-white transition-colors shrink-0">
                      Read
                      <ArrowUpRight className="h-2.5 w-2.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── DYNAMIC LIGHTBOX SCREENSHOT MODAL ── */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-center items-center p-4 cursor-zoom-out select-none"
            onClick={() => setActiveImage(null)}
          >
            {/* Close Button */}
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black transition-all cursor-pointer z-50 shadow-lg"
              onClick={() => setActiveImage(null)}
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Modal Image viewport */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl aspect-[16/10] bg-[#030303] rounded-xl overflow-hidden border border-white/10 shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()} // stop close on image click
            >
              <Image
                src={activeImage.src}
                alt={activeImage.caption}
                fill
                className="object-contain p-2"
              />
            </motion.div>

            {/* Image Caption */}
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center text-white/50 text-sm font-space-grotesk max-w-xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {activeImage.caption}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
