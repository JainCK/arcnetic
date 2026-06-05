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
  Sparkles, 
  Clock, 
  AlertTriangle, 
  Cpu, 
  Sliders, 
  Database, 
  Layers, 
  Send,
  Workflow,
  ZoomIn,
  X
} from "lucide-react";
import { CaseStudy } from "@/lib/case-studies-data";

const techPills = [
  { name: "Next.js 15", category: "Frontend" },
  { name: "Node.js", category: "Runtime" },
  { name: "Express", category: "API Server" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis 7", category: "Cache" },
  { name: "n8n", category: "Automation" },
  { name: "Docker", category: "DevOps" },
  { name: "TypeScript", category: "Language" },
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
        <div className="w-56 h-56 bg-purple-500/[0.03] rounded-full blur-[80px]" />
      </div>

      {/* Central label */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center space-y-1">
          <Cpu className="h-5 w-5 text-purple-400/30 mx-auto animate-pulse" />
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
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/10 bg-black/80 backdrop-blur-sm shadow-md hover:border-purple-500/30 hover:bg-purple-950/20 transition-all duration-300 cursor-default group">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400/80 group-hover:bg-purple-400 animate-pulse" />
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



interface DashboardDetailedViewProps {
  caseStudy: CaseStudy;
  otherCases: CaseStudy[];
}

export function DashboardDetailedView({ caseStudy, otherCases }: DashboardDetailedViewProps) {
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
        <div className="absolute top-[5%] left-1/4 w-[600px] h-[600px] bg-purple-500/[0.03] blur-[150px] rounded-full" />
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
            <span className="px-3 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-[9px] font-space-grotesk uppercase tracking-widest text-purple-400 font-semibold shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              {caseStudy.tag}
            </span>
            <span className="font-space-grotesk text-[9px] uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-3 py-0.5 bg-white/5">
              {caseStudy.industry}
            </span>
          </div>

          <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.15] mb-6 tracking-tight">
            Bridging Legacy ERPs with Modern Web Dashboards — Unified Business Intelligence & Automated Ledger Reports
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/10 font-space-grotesk text-xs text-white/50">
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Product Framework</span>
              <span className="text-white font-medium">{caseStudy.client}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Services Delivered</span>
              <span className="text-white font-medium">Bimodal Sync, ERP Connector & Automation</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Delivered By</span>
              <span className="text-purple-400 font-medium">Arcnetic Private Limited</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-white/30 block mb-1">Caching Latency</span>
              <span className="text-purple-400 font-medium">&lt; 10 Seconds Sync</span>
            </div>
          </div>
        </div>

        <blockquote className="border-l-2 border-purple-500/50 pl-6 my-10 max-w-4xl">
          <p className="font-playfair text-xl md:text-2xl text-white/80 italic leading-relaxed">
            "We took the friction out of corporate accounting. By decoupling local database inventory grids from isolated Tally XML services, businesses can track daily ledger health, spot anomalies, and broadcast automated briefings in real-time."
          </p>
        </blockquote>

        {/* ── SIDE-BY-SIDE LIGHT & DARK THEME IMAGES ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Dark Theme */}
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500/15 via-indigo-500/15 to-purple-500/15 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000 pointer-events-none" />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0D0D10] shadow-2xl group cursor-zoom-in group-hover:border-purple-500/35 transition-all duration-500"
              onClick={() => setActiveImage({ src: "/images/case-studies/BizDash/DashboardDarkMode.png", caption: "BizDash Dashboard Overview (Dark Theme)" })}
            >
              {/* Browser Bar */}
              <div className="flex items-center justify-between px-4 py-3.5 bg-[#121216] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[10px] font-space-grotesk text-white/30 tracking-widest bg-white/[0.02] border border-white/5 rounded px-6 py-1 select-none">
                  bizdash.darkmode.app
                </div>
                <ZoomIn className="w-3.5 h-3.5 text-white/20 group-hover:text-white" />
              </div>
              <div className="relative w-full aspect-[16/10] bg-[#070709]">
                <Image
                  src="/images/case-studies/BizDash/DashboardDarkMode.png"
                  alt="BizDash Dark Mode Overview"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Light Theme */}
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-blue-500/15 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000 pointer-events-none" />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0D0D10] shadow-2xl group cursor-zoom-in group-hover:border-purple-500/35 transition-all duration-500"
              onClick={() => setActiveImage({ src: "/images/case-studies/BizDash/DashboardLightMode.png", caption: "BizDash Dashboard Overview (Light Theme)" })}
            >
              {/* Browser Bar */}
              <div className="flex items-center justify-between px-4 py-3.5 bg-[#121216] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[10px] font-space-grotesk text-white/30 tracking-widest bg-white/[0.02] border border-white/5 rounded px-6 py-1 select-none">
                  bizdash.lightmode.app
                </div>
                <ZoomIn className="w-3.5 h-3.5 text-white/20 group-hover:text-white" />
              </div>
              <div className="relative w-full aspect-[16/10] bg-[#070709]">
                <Image
                  src="/images/case-studies/BizDash/DashboardLightMode.png"
                  alt="BizDash Light Mode Overview"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── THE PROJECT CONTEXT ── */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight border-b border-white/5 pb-2">
            The Product: BizDash
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 font-space-grotesk text-base md:text-lg text-white/70 leading-relaxed">
              <p>
                BizDash is an enterprise-grade business management utility designed to aggregate financial spreadsheets, active stock parameters, and corporate ledger statements into a single, high-contrast visual interface.
              </p>
              <p>
                It solves data isolation issues for small and medium enterprises by establishing structured PostgreSQL pooling alongside a local SOAP/XML connector targeting **TallyPrime** systems. Operating under bimodal sync strategies, it caters to internal sales tracking as well as official accounting balances.
              </p>
              <p className="text-white/90 font-medium">
                To simplify deployment, the entire ecosystem is containerized for seamless cloud or staging environments.
              </p>
            </div>
            <div className="md:col-span-1 bg-white/[0.01] border border-white/5 p-6 rounded-xl space-y-4">
              <h3 className="font-space-grotesk text-xs uppercase tracking-wider text-white/40 font-semibold">Key Capabilities</h3>
              <ul className="space-y-2.5 font-space-grotesk text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shrink-0" />
                  <span><strong>Bimodal Operations</strong> — Switch between local transactional records and official ERP reports.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shrink-0" />
                  <span><strong>Tally SOAP Connector</strong> — Live queries parsing financial accounts and Gross/Nett totals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shrink-0" />
                  <span><strong>Stock Alerts</strong> — Low-stock threshold triggers auto-flagging endangered SKU numbers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shrink-0" />
                  <span><strong>n8n Workflows</strong> — Automated digests scheduled daily and dispatched to team channels.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── THE CHALLENGE SECTION ── */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight border-b border-white/5 pb-2">
            The Challenge: Fragmented Data and Manual Compilations
          </h2>
          <div className="space-y-6">
            <p className="font-space-grotesk text-white/70 text-base md:text-lg leading-relaxed">
              When analyzing typical retail and operations pipelines, a critical gap emerges: operational data (such as item sales, inventory checkouts, and stock alerts) exists in isolation from the ledger records kept inside the company's accounting software. Bookkeepers spend hours manually extracting P&L logs, creating massive delays in business analysis:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {caseStudy.detailedReport.challengePoints?.map((gap, i) => (
                <div key={i} className="bg-white/[0.01] border border-white/5 hover:border-purple-500/20 hover:bg-purple-950/[0.01] p-5 rounded-xl transition-all duration-300 group">
                  <div className="flex items-start gap-2.5 mb-2.5">
                    <AlertTriangle className="h-4 w-4 text-purple-500/80 shrink-0 mt-0.5" />
                    <h3 className="font-space-grotesk text-xs font-semibold text-white/90 group-hover:text-purple-400 transition-colors">
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

        {/* ── Figure 1.1: CustomReports.png ── */}
        <div className="relative w-full my-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />
          <motion.div 
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0D0D10] shadow-xl group cursor-zoom-in group-hover:border-purple-500/25 transition-all duration-500"
            onClick={() => setActiveImage({ src: "/images/case-studies/BizDash/CustomReports.png", caption: "Figure 1.1 — n8n Workflow Automation Canvas & Custom Reporting View" })}
          >
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#121216] border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
              </div>
              <div className="text-[8px] font-space-grotesk text-white/20 tracking-wider">
                bizdash.custom.reports
              </div>
              <ZoomIn className="w-3 h-3 text-white/20 group-hover:text-white" />
            </div>
            <div className="relative w-full aspect-[16/10] bg-[#070709]">
              <Image
                src="/images/case-studies/BizDash/CustomReports.png"
                alt="BizDash Custom Reporting Page Screenshot"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* ── THE SOLUTION SECTION & PILLARS ── */}
        <section className="mb-20">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight border-b border-white/5 pb-2">
            The Engineering Solution: Decoupled Architecture & Automation
          </h2>
          <p className="font-space-grotesk text-white/70 text-base md:text-lg leading-relaxed mb-10">
            We developed a unified portal leveraging Next.js 15, Node.js/Express, PostgreSQL, Redis, and n8n, enabling instant data alignment and automated reports.
          </p>

          <div className="space-y-16">
            
            {/* 1. Next.js 15 Frontend */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-purple-500/10 text-purple-400 text-xs flex items-center justify-center font-bold">1</span>
                Next.js 15 Dashboard — High Contrast & High Performance
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                The visual dashboard uses the Next.js App Router to separate route structures. The UI is built with Montserrat typography and a dark, modern aesthetic to maintain accessibility. It features collapsible panel grids, real-time sync status lights, and responsive modal screens for PDF report previews.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pl-7 pt-2 font-space-grotesk text-sm text-white/50">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" /> Collapsible dashboard grids for modular layout customization</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" /> Real-time backend API connectivity monitor</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" /> Interactive modal previews of PDF digests before broadcast</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" /> Fast-loading data tables with instant CSV/PDF triggers</li>
              </ul>
            </div>

            {/* ── Figure 1.2: SettingsPage.png ── */}
            <div className="relative w-full my-8 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />
              <motion.div 
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0D0D10] shadow-xl group cursor-zoom-in group-hover:border-purple-500/25 transition-all duration-500"
                onClick={() => setActiveImage({ src: "/images/case-studies/BizDash/SettingsPage.png", caption: "Figure 1.2 — Interactive Setup Onboarding Wizard" })}
              >
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#121216] border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="text-[8px] font-space-grotesk text-white/20 tracking-wider">
                    bizdash.setup.wizard
                  </div>
                  <ZoomIn className="w-3 h-3 text-white/20 group-hover:text-white" />
                </div>
                <div className="relative w-full aspect-[16/10] bg-[#070709]">
                  <Image
                    src="/images/case-studies/BizDash/SettingsPage.png"
                    alt="Setup Wizard Settings Page Screenshot"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* 2. Bimodal Sync Engine */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-purple-500/10 text-purple-400 text-xs flex items-center justify-center font-bold">2</span>
                Bimodal Sync Engine — Bridging Local Database & ERP Accounts
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                The dashboard can run in two distinct modes depending on settings. In **Internal Mode**, it pulls sales and stock parameters directly from PostgreSQL databases. In **External Mode**, it initiates XML SOAP queries directly to local Tally ERP ports, extracting Ledger totals for today, the current fiscal year (CFY), and lifetime reports.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pl-7 pt-2 font-space-grotesk text-sm text-white/50">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>XML SOAP envelope builder</strong> — dynamically creates requests containing date filters (YYYYMMDD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Direct HTTP/XML endpoint sync</strong> — fetches Profit and Loss nodes directly on port 9000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Dual-Source normalizer</strong> — maps both Postgres and XML ledgers into unified client objects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Automatic ledger routing</strong> — separates Direct Expenses, Sales Accounts, and Costs</span>
                </li>
              </ul>

            </div>

            {/* 3. n8n Scheduled Workflows */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-purple-500/10 text-purple-400 text-xs flex items-center justify-center font-bold">3</span>
                n8n Scheduled Workflows — Automated Reporting Digests
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                To streamline administrative overhead, we integrated **n8n** as an orchestration engine. Every morning, the n8n container invokes backend endpoints to capture consolidated P&L metrics, checks for low-stock inventory items, compiles a beautiful responsive HTML report, and sends it directly via SMTP and Slack webhook channels.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pl-7 pt-2 font-space-grotesk text-sm text-white/50">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Scheduled cron timers</strong> — triggers digests automatically based on timezone parameters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Responsive HTML compiler</strong> — compiles sales metrics, P&L totals, and stock warnings into table rows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Multi-channel broadcast</strong> — pushes identical metrics to Slack webhooks and SMTP mailboxes simultaneously</span>
                </li>
              </ul>

            </div>

            {/* 4. Onboarding Setup Wizard */}
            <div className="space-y-4">
              <h3 className="font-space-grotesk text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-purple-500/10 text-purple-400 text-xs flex items-center justify-center font-bold">4</span>
                Setup Wizard — Visual Environment Onboarding
              </h3>
              <p className="font-space-grotesk text-sm md:text-base text-white/60 leading-relaxed pl-7">
                Non-technical administrators struggle with editing environment variables. We built an onboarding wizard that guides users through configuring database pool strings, Tally XML base URLs, and SMTP details. The wizard tests connection health (testing local Tally availability by exporting a List of Companies) before storing settings in PostgreSQL.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pl-7 pt-2 font-space-grotesk text-sm text-white/50">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Dynamic pool re-initialization</strong> — backend dynamically restarts PostgreSQL connections upon URL change</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Tally connection verification</strong> — tests HTTP reachability before committing settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>User onboarding routing</strong> — redirects users to wizard if settings table keys are missing</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* ── THE RESULTS COMPARISON DASHBOARD ── */}
        <section className="mb-20">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight border-b border-white/5 pb-2">
            The Impact: Before vs. After
          </h2>
          <p className="font-space-grotesk text-white/70 text-base md:text-lg leading-relaxed mb-8">
            Decoupling calculations and automating digests eliminated spreadsheet overhead completely.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.01] overflow-hidden backdrop-blur-sm shadow-xl max-w-4xl mx-auto mb-10">
            <div className="grid grid-cols-3 gap-4 border-b border-white/10 bg-white/[0.03] p-4 text-xs font-space-grotesk uppercase tracking-wider text-white/40 font-semibold">
              <div className="pl-4">Process</div>
              <div className="text-center">Legacy Setup</div>
              <div className="text-center">Arcnetic System</div>
            </div>

            <div className="divide-y divide-white/5 font-space-grotesk text-sm">
              {caseStudy.detailedReport.resultsCompare?.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 items-center p-5">
                  <div className="font-medium text-white/80 pl-4">{row.metric}</div>
                  
                  <div className="flex justify-center">
                    <span className="inline-block px-3 py-1.5 text-xs text-red-400 bg-red-950/20 border border-red-500/10 rounded-md max-w-[180px] w-full text-center">
                      {row.before}
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <span className="inline-block px-3 py-1.5 text-xs text-purple-400 bg-purple-950/30 border border-purple-500/20 rounded-md font-semibold max-w-[160px] w-full text-center shadow-[0_0_10px_rgba(168,85,247,0.1)]">
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
            Implementation Highlights
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {caseStudy.detailedReport.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl hover:border-purple-500/10 transition-colors">
                <CheckCircle2 className="h-4.5 w-4.5 text-purple-400 shrink-0 mt-0.5" />
                <span className="font-space-grotesk text-sm md:text-base text-white/70 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── ARCHITECTURAL IMPLEMENTATION SECTION ── */}
        <section className="py-16 border-t border-white/5 mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/[0.015] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2.5 mb-3 text-purple-400 font-space-grotesk uppercase text-[10px] tracking-widest">
                <Workflow className="w-4 h-4" />
                <span>Docker Orchestration & System Topology</span>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-6 tracking-tight">
                Decoupled Container Topology
              </h2>
              <p className="font-space-grotesk text-white/70 text-sm md:text-base leading-relaxed">
                {caseStudy.detailedReport.architecture}
              </p>
            </div>
            
            {/* Floating stack cluster */}
            <div className="w-full mt-2">
              <TechPillCluster />
            </div>
          </div>
        </section>

        {/* ── CTA BLOCK ── */}
        <section className="py-24 px-4 text-center max-w-3xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/[0.04] rounded-full blur-[80px] pointer-events-none" />
          <div className="space-y-6 relative z-10">
            <span className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-purple-400 border border-purple-500/20 rounded-full px-5 py-1.5 bg-purple-500/5 inline-block mb-2">
              Partner with Arcnetic
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-medium tracking-tight mb-4 leading-tight">
              Ready to automate your operations and ERP reports?
            </h2>
            <p className="font-space-grotesk text-white/45 max-w-lg mx-auto text-sm leading-relaxed mb-8">
              Let's build a custom dashboard that integrates legacy systems, monitors live inventory stock levels, and schedules daily SMTP/Slack digests automatically.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto text-xs font-space-grotesk">
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 rounded-full bg-white text-black px-8 py-4 text-xs uppercase tracking-widest hover:bg-white/90 transition-all font-semibold shadow-lg hover:shadow-purple-500/10"
              >
                Start a Project
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── ABOUT ARCNETIC ── */}
        <section className="border-t border-white/10 pt-10 text-center md:text-left">
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
          <div className="pt-8 border-t border-white/10 mt-16">
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
