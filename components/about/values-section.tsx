"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Avatar helper ─── */
function Avatar({
  seed,
  size = 32,
  ring = "",
  className = "",
}: {
  seed: string;
  size?: number;
  ring?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-full overflow-hidden flex-shrink-0 ${ring ? `ring-2 ${ring}` : ""} ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
        alt={seed}
        width={size}
        height={size}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   PRINCIPLE 1 — INTEGRITY FIRST
   Live animation: Chat messages appear one by one, hold,
   then fade and repeat — continuous honest back-and-forth.
────────────────────────────────────────────────────────── */
const chatMessages = [
  { side: "left",  seed: "alex",  text: "can you review the PR?",          color: "bg-white/10"   },
  { side: "right", seed: "mia",   text: "sure — checking now...",          color: "bg-[#2563eb]"  },
  { side: "left",  seed: "alex",  text: "found any issues?",               color: "bg-white/10"   },
  { side: "right", seed: "mia",   text: "all good. approved ✓",            color: "bg-[#2563eb]"  },
];

function IntegritySkeleton() {
  return (
    <div className="w-full h-44 flex flex-col justify-end gap-2 px-4 pb-4 overflow-hidden">
      {/* Browser dots */}
      <div className="flex gap-1.5 absolute top-4 left-4">
        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <div className="w-2 h-2 rounded-full bg-[#28c840]" />
      </div>

      {chatMessages.map((m, i) => (
        <motion.div
          key={i}
          className={`flex items-center gap-2 ${m.side === "right" ? "flex-row-reverse" : ""}`}
          animate={{ opacity: [0, 0, 1, 1, 1, 0] }}
          transition={{
            duration: 6,
            times: [0, (i * 1.2) / 6, (i * 1.2 + 0.5) / 6, 0.7, 0.85, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeOut",
          }}
        >
          <Avatar seed={m.seed} size={22} ring="ring-[#050505]" />
          <div className={`px-3 py-1.5 rounded-2xl text-[10px] font-space-grotesk text-white max-w-[68%] ${m.color}`}>
            {m.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   PRINCIPLE 2 — RADICAL INNOVATION
   Live animation: A "feature card" moves continuously
   across kanban columns: Idea → Building → Shipped.
────────────────────────────────────────────────────────── */
function InnovationSkeleton() {
  const cols = ["Ideas", "Building", "Shipped 🚀"];
  const colColors = ["text-white/30", "text-[#febc2e]", "text-[#28c840]"];

  const staticCards = [
    { col: 0, text: "Edge runtime",   delay: 0   },
    { col: 1, text: "Realtime sync",  delay: 0.1 },
    { col: 2, text: "AI gateway",     delay: 0.2 },
  ];

  return (
    <div className="w-full h-44 flex gap-2.5 px-4 pt-10 pb-3 overflow-hidden relative">
      {/* Column headers */}
      {cols.map((c, i) => (
        <div key={i} className="flex-1">
          <span className={`font-space-grotesk text-[8px] font-semibold uppercase tracking-widest ${colColors[i]}`}>{c}</span>
        </div>
      ))}

      {/* Static background cards */}
      {staticCards.map((sc, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg border border-white/8 bg-white/4 px-2 py-1.5"
          style={{ left: `calc(${sc.col * 33.3}% + 16px)`, top: `70px`, width: "calc(33% - 8px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: sc.delay + 0.3 }}
        >
          <span className="font-space-grotesk text-[9px] text-white/50">{sc.text}</span>
        </motion.div>
      ))}

      {/* Live travelling card */}
      <motion.div
        className="absolute rounded-lg border border-[#2563eb]/60 bg-[#2563eb]/15 px-2 py-1.5 z-10"
        style={{ top: "95px", width: "calc(33% - 8px)" }}
        animate={{
          left: ["16px", "calc(33.3% + 16px)", "calc(66.6% + 16px)", "16px"],
          borderColor: ["rgba(37,99,235,0.6)", "rgba(254,188,46,0.6)", "rgba(40,200,64,0.6)", "rgba(37,99,235,0.6)"],
          backgroundColor: ["rgba(37,99,235,0.15)", "rgba(254,188,46,0.1)", "rgba(40,200,64,0.1)", "rgba(37,99,235,0.15)"],
        }}
        transition={{
          duration: 5,
          times: [0, 0.35, 0.65, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "easeInOut",
        }}
      >
        <span className="font-space-grotesk text-[9px] text-white/80">Zero-latency UI</span>
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   PRINCIPLE 3 — DEEP COLLABORATION
   Live animation: 3 cursors continuously drift around a
   shared document — real-time co-creation in motion.
────────────────────────────────────────────────────────── */
const liveCursors = [
  {
    seed: "priya", name: "Priya", color: "#60a5fa",
    x: [15, 35, 20, 50, 15], y: [20, 40, 60, 30, 20],
    duration: 8,
  },
  {
    seed: "omar", name: "Omar", color: "#f472b6",
    x: [60, 40, 70, 30, 60], y: [50, 25, 65, 45, 50],
    duration: 9,
  },
  {
    seed: "finn", name: "Finn", color: "#34d399",
    x: [30, 65, 45, 75, 30], y: [70, 55, 30, 70, 70],
    duration: 7,
  },
];

function CollaborationSkeleton() {
  return (
    <div className="w-full h-44 relative overflow-hidden px-4 pt-5">
      {/* Faint document lines */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="h-px bg-white/6 mb-3 rounded-full"
          animate={{ scaleX: [0.7, 1, 0.85, 1, 0.7] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}

      {/* Live cursors */}
      {liveCursors.map((c) => (
        <motion.div
          key={c.seed}
          className="absolute flex items-start gap-1 pointer-events-none"
          animate={{
            left: c.x.map((v) => `${v}%`),
            top: c.y.map((v) => `${v}%`),
          }}
          transition={{ duration: c.duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="10" height="12" viewBox="0 0 10 12" fill={c.color}>
            <path d="M0 0 L10 4 L4 6 L6 12 L0 0Z" />
          </svg>
          <div
            className="px-1.5 py-0.5 rounded text-[8px] font-space-grotesk text-black font-semibold"
            style={{ backgroundColor: c.color }}
          >
            {c.name}
          </div>
        </motion.div>
      ))}

      {/* Avatar row bottom */}
      <div className="absolute bottom-2 left-4 flex -space-x-1.5">
        {liveCursors.map((c) => (
          <Avatar key={c.seed} seed={c.seed} size={20} ring="ring-[#050505]" />
        ))}
        <div className="w-5 h-5 rounded-full bg-white/10 ring-2 ring-[#050505] flex items-center justify-center">
          <span className="font-space-grotesk text-[7px] text-white/50">+4</span>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   PRINCIPLE 4 — RELENTLESS EXCELLENCE
   Live animation: Metric bars fill to target,
   then ripple and refill — perpetual quality loop.
────────────────────────────────────────────────────────── */
const metrics = [
  { label: "Code Quality",  value: 98, color: "#60a5fa", delay: 0    },
  { label: "Test Coverage", value: 94, color: "#34d399", delay: 0.15 },
  { label: "Performance",   value: 99, color: "#f472b6", delay: 0.3  },
];

function ExcellenceSkeleton() {
  return (
    <div className="w-full h-44 flex flex-col justify-center gap-3.5 px-5 overflow-hidden">
      {metrics.map((m, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="font-space-grotesk text-[9px] text-white/40 w-20 flex-shrink-0">{m.label}</span>
          <div className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden relative">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ backgroundColor: m.color }}
              animate={{ width: ["0%", `${m.value}%`, `${m.value}%`, "0%"] }}
              transition={{
                duration: 4,
                times: [0, 0.4, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "easeInOut",
                delay: m.delay,
              }}
            />
          </div>
          <motion.span
            className="font-space-grotesk text-[10px] font-semibold w-6 text-right"
            style={{ color: m.color }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, times: [0, 0.4, 0.8, 1], repeat: Infinity, repeatDelay: 0.5, delay: m.delay + 0.3 }}
          >
            {m.value}
          </motion.span>
        </div>
      ))}

      {/* Twinkling stars */}
      <div className="flex items-center gap-1 mt-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <motion.span
            key={s}
            className="text-[#febc2e] text-sm"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, delay: s * 0.15, repeat: Infinity, ease: "easeInOut" }}
          >★</motion.span>
        ))}
        <span className="font-space-grotesk text-[9px] text-white/30 ml-1">5.0 · Top rated</span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   PRINCIPLE 5 — CONTINUOUS GROWTH
   Live animation: Skill tree nodes light up in sequence
   then dim — unlocking new skills perpetually.
────────────────────────────────────────────────────────── */
const treeNodes = [
  { label: "Fundamentals", cx: 50, cy: 82, delay: 0,    color: "#60a5fa" },
  { label: "Systems",      cx: 22, cy: 56, delay: 0.5,  color: "#34d399" },
  { label: "Cloud",        cx: 78, cy: 56, delay: 0.5,  color: "#34d399" },
  { label: "AI / ML",      cx: 10, cy: 24, delay: 1.1,  color: "#f472b6" },
  { label: "Platform",     cx: 50, cy: 16, delay: 1.1,  color: "#f472b6" },
  { label: "Leadership",   cx: 88, cy: 24, delay: 1.1,  color: "#f472b6" },
];

const treeEdges = [
  [50, 82, 22, 56], [50, 82, 78, 56],
  [22, 56, 10, 24], [50, 82, 50, 16], [78, 56, 88, 24],
];

function GrowthSkeleton() {
  return (
    <div className="w-full h-44 relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {treeEdges.map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {treeNodes.map((n, i) => (
          <g key={i}>
            {/* Outer ring pulse */}
            <motion.circle
              cx={n.cx} cy={n.cy} r={3.5}
              fill="none"
              stroke={n.color}
              strokeWidth="0.5"
              animate={{ r: [3.5, 6, 3.5], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, delay: n.delay, repeat: Infinity, ease: "easeOut" }}
            />
            {/* Core dot */}
            <motion.circle
              cx={n.cx} cy={n.cy} r={2}
              fill={n.color}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, delay: n.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        ))}
      </svg>

      {/* Labels */}
      {treeNodes.map((n, i) => (
        <motion.div
          key={i}
          className="absolute font-space-grotesk text-[7px] whitespace-nowrap -translate-x-1/2"
          style={{ left: `${n.cx}%`, top: `${n.cy + 6}%`, color: n.color }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, delay: n.delay + 0.1, repeat: Infinity, ease: "easeInOut" }}
        >
          {n.label}
        </motion.div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   PRINCIPLE 6 — IMPACT DRIVEN
   Live animation: World nodes pulse + ripple,
   stat counters animate live.
────────────────────────────────────────────────────────── */
const worldNodes = [
  { cx: 12, cy: 30 }, { cx: 38, cy: 22 }, { cx: 62, cy: 28 },
  { cx: 80, cy: 45 }, { cx: 25, cy: 65 }, { cx: 55, cy: 72 },
  { cx: 72, cy: 68 }, { cx: 42, cy: 50 },
];

const connections: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [4, 5], [5, 6], [1, 7], [7, 5],
];

const impactStats = [
  { label: "Clients",   values: [0, 47, 89, 120],  suffix: "+", color: "#60a5fa" },
  { label: "Revenue",   values: ["$0", "$3M", "$6M", "$8M+"],   color: "#34d399" },
  { label: "Countries", values: [0, 8, 14, 18],                 color: "#f472b6" },
];

function ImpactSkeleton() {
  return (
    <div className="w-full h-44 relative overflow-hidden">
      {/* SVG world constellation */}
      <svg className="absolute inset-0 w-full h-[65%]" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={worldNodes[a].cx} y1={worldNodes[a].cy}
            x2={worldNodes[b].cx} y2={worldNodes[b].cy}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.4"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          />
        ))}

        {worldNodes.map((n, i) => (
          <g key={i}>
            <motion.circle
              cx={n.cx} cy={n.cy} r={3}
              fill="none"
              stroke={i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#34d399" : "#f472b6"}
              strokeWidth="0.4"
              animate={{ r: [3, 7, 3], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle
              cx={n.cx} cy={n.cy} r={1.5}
              fill={i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#34d399" : "#f472b6"}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        ))}
      </svg>

      {/* Stat counters */}
      <div className="absolute bottom-2 left-3 right-3 flex justify-between">
        {impactStats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <motion.span
              className="font-playfair text-lg font-bold"
              style={{ color: s.color }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            >
              {Array.isArray(s.values) ? s.values[s.values.length - 1] : ""}
              {s.suffix ?? ""}
            </motion.span>
            <span className="font-space-grotesk text-[8px] text-white/30">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Card Data ─── */
const cards = [
  {
    title: "Integrity First",
    description:
      "We believe trust is the currency of the future. Uncompromising ethical standards in every line of code we write.",
    Skeleton: IntegritySkeleton,
  },
  {
    title: "Radical Innovation",
    description:
      "We don't just follow trends; we set them. Embracing the bleeding edge to solve complex challenges.",
    Skeleton: InnovationSkeleton,
  },
  {
    title: "Deep Collaboration",
    description:
      "Building inclusive partnerships that amplify success. Your wins are our wins.",
    Skeleton: CollaborationSkeleton,
  },
  {
    title: "Relentless Excellence",
    description:
      "Good isn't enough. We pursue perfection in digital craftsmanship with obsession.",
    Skeleton: ExcellenceSkeleton,
  },
  {
    title: "Continuous Growth",
    description:
      "Evolution is our nature. We constantly upgrade our skills and technologies.",
    Skeleton: GrowthSkeleton,
  },
  {
    title: "Impact Driven",
    description:
      "We measure success by the tangible value we create for clients and the world.",
    Skeleton: ImpactSkeleton,
  },
];

/* ─── Main Section ─── */
export function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-space-grotesk text-xs uppercase tracking-[0.25em] text-white/40 block mb-4">
            Our DNA
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl text-white leading-tight mb-4">
            Principles That Define Us.
          </h2>
          <p className="font-space-grotesk text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            These are not just words on a wall. They are the non-negotiable rules of engagement for every project we touch.
          </p>
        </motion.div>

        {/* 3-column borderless bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
          {cards.map((card, index) => {
            const { Skeleton } = card;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col"
              >
                {/* Illustration — no background, no border */}
                <div className="mb-5 overflow-hidden">
                  <Skeleton />
                </div>

                <h3 className="font-playfair text-xl text-white font-semibold mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="font-space-grotesk text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}