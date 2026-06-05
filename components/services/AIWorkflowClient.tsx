"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Workflow,
  Bot,
  Search,
  MessageSquare,
  Zap,
  ChevronRight,
  X,
  Sparkles,
  Clock,
  TrendingUp,
  Shield,
} from "lucide-react";
import Link from "next/link";

// ==========================================================
// 1. NODE-BASED CANVAS: Animated n8n-style workflow diagram
// ==========================================================
function NodeWorkflowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Node definitions — positions as fractions of width/height
    const nodeDefinitions = [
      { id: "trigger",   label: "WEBHOOK TRIGGER",  sub: "HTTP POST",         fx: 0.08, fy: 0.50, color: "rgba(255,255,255,0.9)" },
      { id: "filter",    label: "FILTER LOGIC",      sub: "If/Else Route",     fx: 0.28, fy: 0.28, color: "rgba(255,255,255,0.8)" },
      { id: "llm",       label: "LLM — CLAUDE",      sub: "Summarise & Route", fx: 0.28, fy: 0.72, color: "rgba(255,255,255,0.8)" },
      { id: "crm",       label: "CRM UPDATE",        sub: "PostgreSQL Write",  fx: 0.52, fy: 0.18, color: "rgba(255,255,255,0.7)" },
      { id: "notify",    label: "SLACK NOTIFY",      sub: "Webhook Dispatch",  fx: 0.52, fy: 0.50, color: "rgba(255,255,255,0.7)" },
      { id: "report",    label: "REPORT ENGINE",     sub: "PDF + S3 Upload",   fx: 0.52, fy: 0.82, color: "rgba(255,255,255,0.7)" },
      { id: "output",    label: "DONE — LOGGED",     sub: "Audit Trail ✓",     fx: 0.80, fy: 0.50, color: "rgba(255,255,255,0.6)" },
    ];

    // Edges
    const edges = [
      { from: "trigger", to: "filter" },
      { from: "trigger", to: "llm" },
      { from: "filter",  to: "crm" },
      { from: "filter",  to: "notify" },
      { from: "llm",     to: "report" },
      { from: "crm",     to: "output" },
      { from: "notify",  to: "output" },
      { from: "report",  to: "output" },
    ];

    // Pulses — each travels along an edge
    const pulses: { edgeIdx: number; t: number; speed: number }[] = [];
    edges.forEach((_, i) => {
      pulses.push({ edgeIdx: i, t: Math.random(), speed: 0.004 + Math.random() * 0.003 });
    });

    const render = () => {
      timeRef.current += 0.012;
      const t = timeRef.current;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      ctx.clearRect(0, 0, W, H);

      // Background grid
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      const gs = 48;
      for (let x = 0; x < W; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      // Resolve pixel positions
      const nodes = nodeDefinitions.map((n) => ({
        ...n,
        x: n.fx * W,
        y: n.fy * H,
      }));
      const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

      // Draw edges
      edges.forEach((edge) => {
        const a = nodeMap[edge.from];
        const b = nodeMap[edge.to];
        if (!a || !b) return;

        // Bezier control point (curved lines)
        const cpx = (a.x + b.x) / 2;
        const cpy = (a.y + b.y) / 2 - 20;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(cpx, cpy, b.x, b.y);
        ctx.strokeStyle = "rgba(255,255,255,0.07)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Draw pulse dots traveling along edges
      pulses.forEach((pulse) => {
        pulse.t = (pulse.t + pulse.speed) % 1;
        const edge = edges[pulse.edgeIdx];
        if (!edge) return;
        const a = nodeMap[edge.from];
        const b = nodeMap[edge.to];
        if (!a || !b) return;

        const cpx = (a.x + b.x) / 2;
        const cpy = (a.y + b.y) / 2 - 20;
        const pt = pulse.t;
        const px = (1 - pt) * (1 - pt) * a.x + 2 * (1 - pt) * pt * cpx + pt * pt * b.x;
        const py = (1 - pt) * (1 - pt) * a.y + 2 * (1 - pt) * pt * cpy + pt * pt * b.y;

        const alpha = Math.sin(pulse.t * Math.PI); // fade in/out
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.9})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = 0.04 * Math.sin(t + node.fx * 10);
        const r = 8 + pulse * 30;

        // Glow ring
        const grad = ctx.createRadialGradient(node.x, node.y, r * 0.3, node.x, node.y, r * 2.5);
        grad.addColorStop(0, "rgba(255,255,255,0.06)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Node box
        const bw = Math.min(W * 0.18, 148);
        const bh = 52;
        const bx = node.x - bw / 2;
        const by = node.y - bh / 2;
        ctx.beginPath();
        ctx.roundRect(bx, by, bw, bh, 10);
        ctx.fillStyle = "rgba(10,10,10,0.85)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Dot indicator
        ctx.beginPath();
        ctx.arc(bx + 14, by + bh / 2, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.5 + 0.4 * Math.sin(t * 2 + node.fx * 5)})`;
        ctx.fill();

        // Label
        ctx.font = `bold ${Math.min(9, W * 0.012)}px monospace`;
        ctx.fillStyle = node.color;
        ctx.fillText(node.label, bx + 26, by + bh / 2 - 5);
        ctx.font = `${Math.min(8, W * 0.01)}px monospace`;
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.fillText(node.sub, bx + 26, by + bh / 2 + 9);
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-[#030303] shadow-2xl select-none">
      {/* Top badge */}
      <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
        <span className="font-space-grotesk text-[9px] uppercase tracking-widest text-white/50">
          Live Workflow — n8n Architecture
        </span>
      </div>
      <div className="absolute top-5 right-5 z-20 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
        <span className="font-space-grotesk text-[9px] uppercase tracking-widest text-white/40">
          Pulses = Data in Motion
        </span>
      </div>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

// ==========================================================
// 2. SCROLL TIMELINE: Manual → AI transformation
// ==========================================================
const timelineItems = [
  {
    manual: "Manually copy leads from email into CRM spreadsheets (45 min/day)",
    ai: "Webhook triggers auto-populate CRM on form submit — 0 seconds",
  },
  {
    manual: "Support agent reads tickets and routes them by hand (3 hrs/day)",
    ai: "LLM reads intent, classifies, and assigns tickets in real-time",
  },
  {
    manual: "Weekly analyst exports CSVs and builds report decks (4 hrs/wk)",
    ai: "Scheduled n8n workflow generates & emails PDF reports automatically",
  },
  {
    manual: "Dev team scrapes competitor pricing manually every Monday (2 hrs)",
    ai: "AI web-crawler agent runs nightly and posts diffs to Slack at 6am",
  },
  {
    manual: "HR screens 200 CVs per role, copy-pastes summaries to Notion",
    ai: "LLM pipeline screens, ranks, and drafts interview notes automatically",
  },
];

function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-index") || "-1");
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6, rootMargin: "0px 0px -15% 0px" }
    );

    const items = containerRef.current?.querySelectorAll("[data-index]");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto">
      {/* Centre spine */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

      {timelineItems.map((item, i) => (
        <div
          key={i}
          data-index={i}
          className="relative grid grid-cols-[1fr_40px_1fr] gap-4 items-center mb-14 sm:mb-20"
        >
          {/* LEFT: Manual task */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={i <= activeIndex ? { opacity: 1, x: 0 } : { opacity: 0.25, x: -30 }}
            transition={{ duration: 0.5 }}
            className="text-right"
          >
            <div
              className={`inline-block p-4 rounded-2xl border font-space-grotesk text-sm leading-relaxed transition-all duration-500 ${
                i <= activeIndex
                  ? "border-white/10 bg-white/[0.03] text-white/40 line-through decoration-red-500/60"
                  : "border-white/5 bg-transparent text-white/20"
              }`}
            >
              {item.manual}
            </div>
            {i <= activeIndex && (
              <div className="mt-2 font-space-grotesk text-[10px] uppercase tracking-widest text-red-400/70">
                ✕ Manual — Hours Lost
              </div>
            )}
          </motion.div>

          {/* Centre node */}
          <div className="flex flex-col items-center gap-1.5">
            <motion.div
              animate={i <= activeIndex ? { scale: 1.2, backgroundColor: "rgba(255,255,255,1)" } : { scale: 1, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ duration: 0.4 }}
              className="h-4 w-4 rounded-full border border-white/30 flex-shrink-0"
            />
            <span className="font-space-grotesk text-[8px] text-white/20 uppercase tracking-widest">
              0{i + 1}
            </span>
          </div>

          {/* RIGHT: AI solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={i <= activeIndex ? { opacity: 1, x: 0 } : { opacity: 0.15, x: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className={`p-4 rounded-2xl border font-space-grotesk text-sm leading-relaxed transition-all duration-500 ${
                i <= activeIndex
                  ? "border-white/20 bg-white/[0.06] text-white/90"
                  : "border-white/5 bg-transparent text-white/20"
              }`}
            >
              {item.ai}
            </div>
            {i <= activeIndex && (
              <div className="mt-2 font-space-grotesk text-[10px] uppercase tracking-widest text-emerald-400/80">
                ✓ Automated — Runs 24/7
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// ==========================================================
// 3. SUB-SERVICE CARDS
// ==========================================================
const subServices = [
  {
    icon: Workflow,
    title: "Intelligent Workflow Automation",
    desc: "Multi-step API trigger pipelines using n8n and Make.com. We map your manual processes and rebuild them as automated, event-driven workflows that run 24/7 without human input.",
    tags: ["n8n", "Make.com", "Webhooks", "API Triggers"],
  },
  {
    icon: Bot,
    title: "Custom LLM Integration",
    desc: "Embedding Claude, OpenAI GPT-4, or secure local Ollama models directly into your proprietary data environment. Build internal copilots, document processors, and intelligent routing systems.",
    tags: ["Claude API", "OpenAI", "Ollama", "RAG Pipelines"],
  },
  {
    icon: Search,
    title: "Automated Auditing Tools",
    desc: "AI-powered web crawlers and data scraping agents that run on schedule — monitoring competitor pricing, extracting structured data, and generating analysis reports automatically.",
    tags: ["Python", "Playwright", "Scrapy", "Cron Jobs"],
  },
  {
    icon: MessageSquare,
    title: "Conversational AI Interfaces",
    desc: "Context-aware chatbots trained on your documentation and internal knowledge base. Deploy to your website, Slack, or internal portal for 24/7 customer support and knowledge retrieval.",
    tags: ["LLM Fine-Tuning", "RAG", "Embeddings", "Vector DB"],
  },
];

function SubServiceCard({
  icon: Icon,
  title,
  desc,
  tags,
  index,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  tags: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-7 sm:p-9 border border-white/10 bg-[#050505] rounded-3xl hover:border-white/20 hover:bg-[#090909] transition-all duration-400 overflow-hidden"
    >
      {/* Ambient hover glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.015] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 space-y-5">
        <div className="flex items-start justify-between">
          <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-space-grotesk text-xs text-white/20 font-bold tracking-widest">
            0{index + 1}
          </span>
        </div>

        <div>
          <h3 className="font-playfair text-2xl text-white mb-3 leading-tight">{title}</h3>
          <p className="font-space-grotesk text-sm text-white/50 leading-relaxed">{desc}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-[10px] text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-xs font-space-grotesk text-white/30 uppercase tracking-widest group-hover:text-white/60 transition-colors">
          <span>Explore Capability</span>
          <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================================
// 4. FLOATING TECH PILL CLUSTER
// ==========================================================
const techPills = [
  { name: "n8n", category: "Automation" },
  { name: "Make.com", category: "Automation" },
  { name: "Claude API", category: "LLM" },
  { name: "Hugging Face", category: "ML Models" },
  { name: "Ollama", category: "Local LLM" },
  { name: "Python", category: "Scripting" },
  { name: "OpenAI", category: "LLM" },
  { name: "Playwright", category: "Crawling" },
  { name: "Pinecone", category: "Vector DB" },
  { name: "FastAPI", category: "Backend" },
  { name: "LangChain", category: "LLM Framework" },
  { name: "Cron / Trigger", category: "Scheduling" },
];

const floatPositions = [
  { x: "5%",  y: "12%", delay: 0 },
  { x: "22%", y: "4%",  delay: 0.3 },
  { x: "45%", y: "8%",  delay: 0.6 },
  { x: "68%", y: "3%",  delay: 0.9 },
  { x: "82%", y: "15%", delay: 1.2 },
  { x: "88%", y: "48%", delay: 0.2 },
  { x: "78%", y: "75%", delay: 0.7 },
  { x: "52%", y: "82%", delay: 1.0 },
  { x: "28%", y: "78%", delay: 0.4 },
  { x: "8%",  y: "65%", delay: 0.8 },
  { x: "2%",  y: "38%", delay: 1.1 },
  { x: "35%", y: "45%", delay: 0.15 },
];

function TechPillCluster() {
  return (
    <div className="relative w-full h-[360px] sm:h-[440px] select-none overflow-hidden rounded-3xl border border-white/5 bg-[#030303]">
      {/* Centre glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 bg-white/[0.03] rounded-full blur-[80px]" />
      </div>

      {/* Central label */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center space-y-2">
          <Sparkles className="h-8 w-8 text-white/20 mx-auto" />
          <p className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-white/30">
            The Stack
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
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: pos.delay }}
            animate={{
              y: [0, -8, 0],
              transition: {
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: pos.delay,
              },
            }}
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/12 bg-black/80 backdrop-blur-sm shadow-lg hover:border-white/25 hover:bg-white/5 transition-all duration-300 cursor-default group">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60 group-hover:bg-white animate-pulse" />
              <span className="font-mono text-[11px] text-white/70 group-hover:text-white transition-colors font-semibold whitespace-nowrap">
                {pill.name}
              </span>
              <span className="font-space-grotesk text-[8px] text-white/30 uppercase tracking-wider whitespace-nowrap hidden sm:block">
                [{pill.category}]
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// ==========================================================
// 5. MAIN EXPORT
// ==========================================================
export function AIWorkflowClient() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative overflow-x-hidden">

      {/* Ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(18,18,18,0.9),#000000_75%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[url('/noise.svg')] mix-blend-overlay" />
        <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px]" />
      </div>

      {/* ========================================================
          HERO SECTION
         ======================================================== */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 sm:pt-24 lg:pt-32 pb-20 border-b border-white/10 z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">

            {/* Left: Typography */}
            <div className="lg:col-span-5 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
              >
                <Sparkles className="h-3 w-3 text-white animate-spin" style={{ animationDuration: "4s" }} />
                <span className="font-space-grotesk text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/60">
                  AI Business Automation & Intelligent Workflows
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.92] tracking-tight text-white"
              >
                Stop Treating<br />
                <span className="italic">Your Team</span><br />
                Like Robots.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-space-grotesk text-base sm:text-lg text-white/55 leading-relaxed border-l-2 border-white/30 pl-6"
              >
                We deliver intelligent AI workflows and business automation solutions to eliminate manual tasks and accelerate enterprise growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 pt-4"
              >
                <Link href="/contact" className="group shrink-0">
                  <div className="flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 font-space-grotesk text-xs uppercase tracking-widest font-semibold hover:bg-white/90 transition-all shadow-lg group-hover:scale-105 duration-300">
                    <span>Start Automating</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>

                {/* Quick stats next to the button */}
                <div className="flex gap-6 sm:gap-8 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-8 py-1">
                  {[
                    { val: "24/7", label: "System uptime" },
                    { val: "~0", label: "Human errors" },
                    { val: "∞", label: "Scale capacity" },
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-0.5">
                      <div className="font-playfair text-xl sm:text-2xl text-white font-medium leading-none">{stat.val}</div>
                      <div className="font-space-grotesk text-[8px] sm:text-[9px] uppercase tracking-widest text-white/40 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Node-based canvas */}
            <motion.div
              className="lg:col-span-7 lg:pl-10 xl:pl-16"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <NodeWorkflowCanvas />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          HOW IT HELPS STRIP
         ======================================================== */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 border-b border-white/5 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4 space-y-4">
              <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/40">
                The ROI Argument
              </span>
              <h2 className="font-playfair text-3xl sm:text-5xl text-white leading-tight">
                It Buys You Time.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="font-space-grotesk text-white/55 text-base sm:text-lg leading-relaxed border-l border-white/10 pl-6">
                A properly architected automation pipeline can turn a <strong className="text-white/80">4-hour daily data reconciliation task into a 3-second automated script</strong>. It reduces human error to near zero and scales infinitely without adding payroll. Every hour your team recovers from manual work is an hour invested back into growth, product, and strategy.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-5">
                {[
                  { icon: Clock,      val: "−97%",  label: "Time on manual tasks" },
                  { icon: Shield,     val: "≈ 0%",  label: "Human error rate" },
                  { icon: TrendingUp, val: "+∞",    label: "Operational scalability" },
                ].map(({ icon: I, val, label }) => (
                  <div key={label} className="flex gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-white">
                      <I className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-playfair text-2xl text-white">{val}</div>
                      <div className="font-space-grotesk text-[10px] uppercase tracking-widest text-white/40 mt-0.5">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SCROLL TIMELINE
         ======================================================== */}
      <section id="timeline" className="relative py-24 md:py-40 px-4 md:px-8 border-b border-white/5 z-10 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 md:mb-24 text-center space-y-4">
            <span className="font-space-grotesk text-xs uppercase tracking-[0.25em] text-white/40 px-4 py-1 border border-white/10 bg-white/5 rounded-full">
              Manual vs Automated
            </span>
            <h2 className="font-playfair text-4xl sm:text-6xl text-white tracking-tight">
              What We Replace
            </h2>
            <p className="font-space-grotesk text-sm text-white/45 max-w-xl mx-auto">
              Scroll down. Watch manual tasks get struck through as AI solutions light up on the right.
            </p>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-[1fr_40px_1fr] gap-4 mb-10 max-w-5xl mx-auto">
            <div className="text-right font-space-grotesk text-[10px] uppercase tracking-[0.25em] text-red-400/60 font-semibold">
              ← Manual Tasks (Before)
            </div>
            <div />
            <div className="font-space-grotesk text-[10px] uppercase tracking-[0.25em] text-emerald-400/70 font-semibold">
              AI Solutions (After) →
            </div>
          </div>

          <ScrollTimeline />
        </div>
      </section>

      {/* ========================================================
          SUB-SERVICES GRID
         ======================================================== */}
      <section className="relative py-24 md:py-36 px-4 md:px-8 bg-[#030303] border-b border-white/5 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14 md:mb-20 text-center space-y-4">
            <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/50 px-4 py-1 border border-white/10 bg-white/5 rounded-full">
              Capabilities
            </span>
            <h2 className="font-playfair text-4xl sm:text-6xl text-white tracking-tight">
              What We Build
            </h2>
            <p className="font-space-grotesk text-sm text-white/45 max-w-xl mx-auto">
              Four core automation disciplines, each engineered to eliminate specific categories of operational waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {subServices.map((svc, i) => (
              <SubServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          TECH STACK PILL CLUSTER
         ======================================================== */}
      <section className="relative py-24 md:py-36 px-4 md:px-8 border-b border-white/5 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="space-y-6">
              <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/40">
                The Stack
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl text-white leading-tight">
                Engineered With the Right Tools
              </h2>
              <p className="font-space-grotesk text-sm text-white/50 leading-relaxed">
                We use battle-tested automation platforms, frontier LLM APIs, and open-source local models to build pipelines that are reliable, secure, and maintainable long-term.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "n8n & Make.com for visual workflow orchestration",
                  "Claude, OpenAI & local Ollama for secure LLM integration",
                  "Python + FastAPI for custom AI microservice backends",
                  "Hugging Face & LangChain for fine-tuned ML pipelines",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="h-px w-5 bg-white/30 mt-2.5 shrink-0" />
                    <p className="font-space-grotesk text-sm text-white/60">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pill cluster */}
            <TechPillCluster />
          </div>
        </div>
      </section>

      {/* ========================================================
          CINEMATIC CTA
         ======================================================== */}
      <section className="relative py-28 md:py-48 px-4 bg-[#050505] z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.012] rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="space-y-8">
            <div className="inline-flex h-14 w-14 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/40">
              <Zap className="h-6 w-6" />
            </div>
            <h2 className="font-playfair text-4xl sm:text-6xl md:text-7xl text-white font-bold leading-tight">
              Ready to Automate<br />the Repetitive?
            </h2>
            <p className="font-space-grotesk text-sm sm:text-base md:text-lg text-white/45 max-w-xl mx-auto">
              Let's map your current manual workflows and design an automation architecture that eliminates them — permanently.
            </p>
            <div className="pt-6">
              <Link href="/contact" className="inline-block group">
                <div className="relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-10 sm:px-14 py-4 sm:py-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <span className="flex items-center gap-4 font-space-grotesk text-xs sm:text-sm tracking-[0.2em] font-medium uppercase">
                    Book an Automation Audit
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
