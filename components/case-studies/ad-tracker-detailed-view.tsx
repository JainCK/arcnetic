"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  ZoomIn, 
  X, 
  BarChart3, 
  ShieldAlert, 
  Award,
  Globe,
  Database,
  Layers
} from "lucide-react";
import { CaseStudy } from "@/lib/case-studies-data";

const techPills = [
  { name: "Next.js", category: "Frontend" },
  { name: "Bun", category: "Runtime" },
  { name: "PostgreSQL", category: "Database" },
  { name: "BullMQ", category: "Queue" },
  { name: "Redis", category: "Cache" },
  { name: "n8n", category: "Automation" },
  { name: "jsPDF", category: "PDF Engine" },
  { name: "Prisma", category: "ORM" },
];

const floatPositions = [
  { x: "5%",  y: "12%", delay: 0 },
  { x: "32%", y: "4%",  delay: 0.3 },
  { x: "55%", y: "15%",  delay: 0.6 },
  { x: "78%", y: "6%",  delay: 0.9 },
  { x: "82%", y: "55%", delay: 0.2 },
  { x: "55%", y: "68%", delay: 0.7 },
  { x: "28%", y: "62%", delay: 0.4 },
  { x: "6%",  y: "55%", delay: 0.8 },
];

function TechPillCluster() {
  return (
    <div className="relative w-full h-[220px] sm:h-[260px] select-none overflow-hidden">
      {/* Centre glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-56 bg-indigo-500/[0.03] rounded-full blur-[80px]" />
      </div>

      {/* Central label */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center space-y-1">
          <Cpu className="h-5 w-5 text-indigo-400/30 mx-auto animate-pulse" />
          <p className="font-space-grotesk text-[9px] uppercase tracking-[0.25em] text-white/20">
            Deployed Stack
          </p>
        </div>
      </div>

      {/* Floating pills */}
      {techPills.map((pill, i) => {
        const pos = floatPositions[i % floatPositions.length];
        return (
          <motion.div
            key={pill.name}
            className="absolute z-20"
            style={{ left: pos.x, top: pos.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: pos.delay }}
            animate={{
              y: [0, -6, 0],
              transition: {
                duration: 3.5 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: pos.delay,
              },
            }}
          >
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 bg-black/80 backdrop-blur-sm shadow-md hover:border-indigo-500/30 hover:bg-indigo-950/20 transition-all duration-300 cursor-default group">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80 group-hover:bg-indigo-400 animate-pulse" />
              <span className="font-mono text-[9px] text-white/70 group-hover:text-white transition-colors font-semibold whitespace-nowrap">
                {pill.name}
              </span>
              <span className="font-space-grotesk text-[7px] text-white/30 uppercase tracking-wider whitespace-nowrap hidden sm:block">
                [{pill.category}]
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

interface AdTrackerDetailedViewProps {
  caseStudy: CaseStudy;
  otherCases: CaseStudy[];
}

export function AdTrackerDetailedView({ caseStudy, otherCases }: AdTrackerDetailedViewProps) {
  const [activeImage, setActiveImage] = useState<{ src: string; caption: string } | null>(null);

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const floatAnimation = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black font-inter pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[2%] left-1/4 w-[600px] h-[600px] bg-indigo-500/[0.04] blur-[150px] rounded-full" />
        <div className="absolute top-[30%] right-1/4 w-[750px] h-[750px] bg-blue-500/[0.03] blur-[180px] rounded-full" />
        <div className="absolute top-[60%] left-1/3 w-[600px] h-[600px] bg-violet-500/[0.03] blur-[160px] rounded-full" />
        <div className="absolute bottom-[2%] right-1/3 w-[550px] h-[550px] bg-purple-500/[0.02] blur-[140px] rounded-full" />
      </div>

      {/* Grid overlay for tech look */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

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
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 mb-4"
          >
            <span className="px-3.5 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[9px] font-space-grotesk uppercase tracking-widest text-indigo-400 font-semibold shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              {caseStudy.tag}
            </span>
            <span className="font-space-grotesk text-[9px] uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-3.5 py-1 bg-white/5">
              {caseStudy.industry}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-playfair text-4xl md:text-6xl font-medium text-white leading-[1.12] mb-6 tracking-tight drop-shadow-sm"
          >
            Consolidating Cross-Channel Ad Metrics Into a Unified Real-Time Marketing Dashboard
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/10 font-space-grotesk text-xs text-white/50"
          >
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Client Name</span>
              <span className="text-white font-medium">{caseStudy.client}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Architecture</span>
              <span className="text-white font-medium">Turborepo & Microservices</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Sync Latency</span>
              <span className="text-indigo-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                Under 10 Minutes
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Reporting Engine</span>
              <span className="text-indigo-400 font-medium">n8n Webhook & jsPDF</span>
            </div>
          </motion.div>
        </div>

        {/* ── CLIENT QUOTE BLOCK ── */}
        <blockquote className="border-l-2 border-indigo-500/50 pl-6 my-10 max-w-4xl relative">
          <p className="font-playfair text-xl md:text-2xl text-white/80 italic leading-relaxed">
            "By consolidating fragmented Meta and Google Ads schemas into a type-safe data lake, we eliminated daily manual reporting entirely, empowering decision-makers with instant, normalized cross-channel insight."
          </p>
        </blockquote>

        {/* ── PREMIUM BROWSER COVER WINDOW (ss1.png) ── */}
        <div className="relative w-full mb-20 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-blue-500/15 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full shadow-2xl rounded-xl overflow-hidden border border-white/10 bg-[#0D0D10] group-hover:border-indigo-500/35 transition-all duration-500"
          >
            {/* Browser Bar */}
            <div className="flex items-center justify-between px-4 py-3.5 bg-[#121216] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="text-[10px] font-space-grotesk text-white/30 tracking-widest bg-white/[0.02] border border-white/5 rounded px-6 py-1 select-none">
                ad-performance-summary.arcnetic.dashboard
              </div>
              <div className="w-10 flex justify-end">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setActiveImage({ src: "/images/case-studies/ad-tracker/ss1.png", caption: "Figure 1.0 — Unified Multichannel Campaign Summary View" })}
                  className="cursor-pointer text-white/30 hover:text-white p-1 rounded hover:bg-white/5"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </motion.div>
              </div>
            </div>

            {/* Screenshot viewport with object-contain */}
            <div 
              onClick={() => setActiveImage({ src: "/images/case-studies/ad-tracker/ss1.png", caption: "Figure 1.0 — Unified Multichannel Campaign Summary View" })}
              className="relative w-full aspect-[16/10] bg-[#070709] cursor-zoom-in"
            >
              <Image
                src="/images/case-studies/ad-tracker/ss1.png"
                alt="Ad Performance Tracker Dashboard Cover"
                fill
                priority
                className="object-contain"
              />
              {/* Dark gradient mask on bottom to match styling */}
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>

            {/* Screenshot Footnote */}
            <div className="bg-[#09090C] border-t border-white/5 px-4 py-3 flex justify-between items-center text-xs font-space-grotesk text-white/40">
              <span>Figure 1.0 — High-Level Multichannel Performance Dashboard Overview</span>
              <span className="text-[9px] tracking-wider uppercase text-indigo-400/80 font-bold bg-indigo-500/10 px-2 py-0.5 rounded">
                Widescreen 16:10 Capture
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── CORE IMPACT STATS GRID ── */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 pb-12 border-b border-white/10">
          <div className="md:col-span-1 flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-7 hover:border-indigo-500/20 transition-colors">
            <div>
              <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-white/30 mb-4 block">
                Primary Metric
              </span>
              <div className="font-playfair text-4xl md:text-5xl text-white font-medium mb-3 tracking-tight">
                {caseStudy.metric?.value || "Success"}
              </div>
              <div className="font-space-grotesk text-xs text-white/50 leading-relaxed uppercase tracking-wider">
                {caseStudy.metric?.label || "Result Delivered"}
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-white/5 font-space-grotesk text-xs text-white/45 italic leading-relaxed">
              "{caseStudy.outcome}"
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-white/30 block">
              Core Engineering Achievements
            </span>
            
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid sm:grid-cols-2 gap-4"
            >
              {caseStudy.detailedReport.highlights.map((h, idx) => (
                <motion.li 
                  key={idx} 
                  variants={fadeInUp}
                  className="flex items-start gap-3.5 bg-white/[0.01] border border-white/[0.05] hover:border-indigo-500/15 hover:bg-indigo-950/[0.005] hover:shadow-[0_0_15px_rgba(99,102,241,0.02)] transition-all p-4 rounded-xl"
                >
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 text-indigo-400 shrink-0" />
                  <span className="font-space-grotesk text-xs md:text-sm text-white/70 leading-relaxed">
                    {h}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* ── SECTION 1: THE DATA FRAGMENTATION CHALLENGE ── */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-3 text-indigo-400 font-space-grotesk uppercase text-[10px] tracking-widest">
                <Layers className="w-4 h-4" />
                <span>The Fragmentation Problem</span>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight">
                The Challenge: Fragmented Metrics
              </h2>
              <div className="space-y-4 font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed">
                <p>
                  Modern digital marketing teams run spend across Google and Meta, but each platform serves campaign stats under distinct API parameters, schemas, and terminology. Standardizing conversions, clicks, and impressions into a single, cohesive view usually requires hours of error-prone manual spreadsheets.
                </p>
                <p>
                  Additionally, billing across multiple regional currencies (e.g. USD vs INR) makes global spend totals difficult to track dynamically, causing budgeting anomalies to slide past unnoticed until invoices arrive.
                </p>
              </div>
            </div>
            
            {/* Browser mock with screenshot-1 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />
              <motion.div 
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0D0D10] shadow-xl group cursor-zoom-in group-hover:border-indigo-500/25 transition-all duration-500"
                onClick={() => setActiveImage({ src: "/images/case-studies/ad-tracker/screenshot-1.png", caption: "Figure 1.1 — Dynamic Platform Performance Metrics" })}
              >
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#121216] border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="text-[8px] font-space-grotesk text-white/20 tracking-wider">
                    arcnetic.analytics.metrics
                  </div>
                  <ZoomIn className="w-3 h-3 text-white/20 group-hover:text-white" />
                </div>
                <div className="relative w-full aspect-[16/10] bg-[#070709]">
                  <Image
                    src="/images/case-studies/ad-tracker/screenshot-1.png"
                    alt="Ad Tracker Campaign Breakdown Screenshot"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="bg-[#09090C] border-t border-white/5 px-3 py-2 text-[10px] font-space-grotesk text-white/40 text-center">
                  Figure 1.1 — Dynamic Platform Performance & ROI Analysis
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.detailedReport.challengePoints?.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white/[0.01] border border-white/5 hover:border-indigo-500/20 hover:bg-indigo-950/[0.01] p-6 rounded-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-2.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 animate-pulse shrink-0" />
                  <h3 className="font-space-grotesk text-sm font-semibold text-white/90 group-hover:text-indigo-400 transition-colors">
                    {point.title}
                  </h3>
                </div>
                <p className="font-space-grotesk text-xs text-white/40 leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: ARCHITECTURE & QUEUE SYNCING (GRID OF 2 SCREENSHOTS) ── */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2.5 mb-3 text-indigo-400 font-space-grotesk uppercase text-[10px] tracking-widest">
              <Database className="w-4 h-4" />
              <span>Real-Time Sync Engine</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight">
              Real-Time Synchronization & Normalization
            </h2>
            <p className="font-space-grotesk text-white/60 text-sm md:text-base leading-relaxed">
              We decoupled the visual reporting layer from the API sync process. An asynchronous worker pipeline built with **Bun** and **BullMQ** runs background syncs every 10 minutes. A central currency-exchange utility hooks into daily rates to normalize all metrics in PostgreSQL, offering toggles to view calculations in USD or INR instantly.
            </p>
          </div>

          {/* Grid with 2 screenshots - browser mocks containing widescreen contain images */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Screenshot 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />
              <motion.div 
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0D0D10] shadow-xl group cursor-zoom-in group-hover:border-indigo-500/25 transition-all duration-500"
                onClick={() => setActiveImage({ src: "/images/case-studies/ad-tracker/screenshot-2.png", caption: "Figure 1.2 — Multi-Currency Performance Rollup Dashboard" })}
              >
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#121216] border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="text-[8px] font-space-grotesk text-white/20 tracking-wider">
                    arcnetic.dashboard.multicurrency
                  </div>
                  <ZoomIn className="w-3 h-3 text-white/20 group-hover:text-white" />
                </div>
                <div className="relative w-full aspect-[16/10] bg-[#070709]">
                  <Image
                    src="/images/case-studies/ad-tracker/screenshot-2.png"
                    alt="Ad Tracker Currency Switcher Screenshot"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="bg-[#09090C] border-t border-white/5 px-3 py-2 text-[10px] font-space-grotesk text-white/40 text-center">
                  Figure 1.2 — Multi-Currency Performance Rollup Dashboard
                </div>
              </motion.div>
            </div>

            {/* Screenshot 3 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />
              <motion.div 
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0D0D10] shadow-xl group cursor-zoom-in group-hover:border-indigo-500/25 transition-all duration-500"
                onClick={() => setActiveImage({ src: "/images/case-studies/ad-tracker/screenshot-3.png", caption: "Figure 1.3 — Bun & BullMQ Microservices Queue Monitoring" })}
              >
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#121216] border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="text-[8px] font-space-grotesk text-white/20 tracking-wider">
                    arcnetic.worker.monitoring
                  </div>
                  <ZoomIn className="w-3 h-3 text-white/20 group-hover:text-white" />
                </div>
                <div className="relative w-full aspect-[16/10] bg-[#070709]">
                  <Image
                    src="/images/case-studies/ad-tracker/screenshot-3.png"
                    alt="Ad Tracker BullMQ Queues Screenshot"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="bg-[#09090C] border-t border-white/5 px-3 py-2 text-[10px] font-space-grotesk text-white/40 text-center">
                  Figure 1.3 — Bun & BullMQ Microservices Queue Monitoring
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.detailedReport.solutionPillars?.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-white/[0.01] border border-white/5 hover:border-indigo-500/20 hover:bg-indigo-950/[0.01] p-6 rounded-xl transition-all duration-300 group"
              >
                <div className="font-playfair text-3xl text-indigo-400 mb-3 font-light tracking-tight group-hover:text-indigo-300 transition-colors">
                  {pillar.num}
                </div>
                <h3 className="font-space-grotesk text-sm font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-space-grotesk text-xs text-white/50 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: AUTOMATED PDF COMPILATION & WEBHOOKS ── */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* Browser mock with screenshot-4 - placed first on mobile, but properly sorted */}
            <div className="relative group order-last md:order-first">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />
              <motion.div 
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0D0D10] shadow-xl group cursor-zoom-in group-hover:border-indigo-500/25 transition-all duration-500"
                onClick={() => setActiveImage({ src: "/images/case-studies/ad-tracker/screenshot-4.png", caption: "Figure 1.4 — Server-Side Daily PDF Reporting & Slack Dispatch" })}
              >
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#121216] border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="text-[8px] font-space-grotesk text-white/20 tracking-wider">
                    arcnetic.webhook.pdflogs
                  </div>
                  <ZoomIn className="w-3 h-3 text-white/20 group-hover:text-white" />
                </div>
                <div className="relative w-full aspect-[16/10] bg-[#070709]">
                  <Image
                    src="/images/case-studies/ad-tracker/screenshot-4.png"
                    alt="Ad Tracker PDF Report Output Screenshot"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="bg-[#09090C] border-t border-white/5 px-3 py-2 text-[10px] font-space-grotesk text-white/40 text-center">
                  Figure 1.4 — Server-Side Daily PDF Reporting & Slack Dispatch
                </div>
              </motion.div>
            </div>

            <div>
              <div className="flex items-center gap-2.5 mb-3 text-indigo-400 font-space-grotesk uppercase text-[10px] tracking-widest">
                <Globe className="w-4 h-4" />
                <span>Automated Reporting Pipeline</span>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight">
                Automated Daily Reporting Pipelines
              </h2>
              <div className="space-y-4 font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed">
                <p>
                  To remove manual report compilation entirely, we built a dual-engine reporting pipeline. Inside the browser, users can trigger client-side **jsPDF** renders for instant exports.
                </p>
                <p>
                  On the server, an API endpoint compiles campaign rollups into base64 PDFs daily. A containerized **n8n** webhook engine triggers every morning, fetches the PDF briefings, runs spend anomaly checks against 7-day rolling budgets, and automatically broadcasts formatted reports directly to team Slack channels, WhatsApp, and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRANSFORMATION METRICS COMPARISON ── */}
        {caseStudy.detailedReport.resultsCompare && (
          <section className="mb-24">
            <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-10 tracking-tight text-center md:text-left">
              Operational Impact & Comparison
            </h2>

            <div className="rounded-2xl border border-white/10 bg-white/[0.01] overflow-hidden backdrop-blur-sm shadow-xl max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4 border-b border-white/10 bg-white/[0.03] p-4 text-[10px] font-space-grotesk uppercase tracking-wider text-white/40 font-semibold text-center md:text-left">
                <div className="pl-4">Target Process</div>
                <div className="text-center">Legacy Setup</div>
                <div className="text-center">Arcnetic System</div>
              </div>

              <div className="divide-y divide-white/5">
                {caseStudy.detailedReport.resultsCompare.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-4 items-center p-5 text-center md:text-left hover:bg-white/[0.01] transition-colors">
                    <div className="font-space-grotesk text-xs font-medium text-white/80 pl-4">{row.metric}</div>
                    
                    <div className="flex justify-center">
                      <span className="inline-block px-3 py-1.5 text-[10px] font-space-grotesk text-red-400 bg-red-950/20 border border-red-500/10 rounded-md max-w-[160px] w-full text-center">
                        {row.before}
                      </span>
                    </div>

                    <div className="flex justify-center">
                      <span className="inline-block px-3 py-1.5 text-[10px] font-space-grotesk text-indigo-400 bg-indigo-950/30 border border-indigo-500/20 rounded-md font-semibold max-w-[160px] w-full text-center shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                        {row.after}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── ARCHITECTURAL IMPLEMENTATION SECTION ── */}
        <section className="py-16 border-t border-white/5 mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.015] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2.5 mb-3 text-indigo-400 font-space-grotesk uppercase text-[10px] tracking-widest">
                <Cpu className="w-4 h-4" />
                <span>System Architecture & Topology</span>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight">
                Decoupled Monorepo Design
              </h2>
              <p className="font-space-grotesk text-white/70 text-sm md:text-base leading-relaxed">
                {caseStudy.detailedReport.architecture}
              </p>
            </div>
            
            {/* Shorter TechPillCluster Animation placed below description */}
            <div className="w-full mt-2">
              <TechPillCluster />
            </div>
          </div>
        </section>

        {/* ── CTA BLOCK ── */}
        <section className="py-24 px-4 text-center max-w-3xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/[0.04] rounded-full blur-[80px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 relative z-10"
          >
            <span className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-indigo-400 border border-indigo-500/20 rounded-full px-5 py-1.5 bg-indigo-500/5 inline-block">
              Scale Your Operations Next
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-medium tracking-tight mb-4 leading-tight">
              Looking for corporate analytics solutions?
              <br />
              Let's engineer your data pipeline.
            </h2>
            <p className="font-space-grotesk text-white/45 max-w-md mx-auto text-sm leading-relaxed mb-8">
              We design custom dashboards, workers, and automated reports that eliminate operational drag and support rapid strategic insights.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 rounded-full bg-white text-black px-8 py-4 text-xs font-space-grotesk uppercase tracking-widest hover:bg-white/90 transition-all font-semibold shadow-lg hover:shadow-indigo-500/10"
              >
                Connect with our team
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ── ABOUT ARCNETIC ── */}
        <section className="border-t border-white/10 pt-10 text-center md:text-left mb-20">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl md:text-3xl text-white font-medium mb-4">About Arcnetic</h3>
            <p className="font-space-grotesk text-base text-white/50 leading-relaxed">
              Arcnetic is an elite digital engineering studio specializing in high-performance web development, custom dashboards, distributed background queues, and complex integrations. We don't just write code — we build corporate-grade digital ecosystems.
            </p>
            <p className="font-space-grotesk text-sm text-white/30">
              &copy; {new Date().getFullYear()} Arcnetic. All rights reserved. Case study published with client consent.
            </p>
          </div>
        </section>

        {/* ── SUGGESTIONS ("READ NEXT") ── */}
        {otherCases.length > 0 && (
          <div className="pt-8 border-t border-white/10">
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
