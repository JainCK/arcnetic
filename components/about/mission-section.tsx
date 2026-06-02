"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const missions = [
  {
    number: "01",
    label: "Mission",
    title: "Empower Through Technology",
    description:
      "We equip businesses with cutting-edge solutions that drive real growth, operational efficiency, and lasting competitive advantage — not just software, but outcomes.",
    accent: "from-white/[0.06] to-transparent",
    borderAccent: "group-hover:border-white/30",
    stat: { value: "40+", label: "Products Shipped" },
  },
  {
    number: "02",
    label: "Vision",
    title: "Set the Global Standard",
    description:
      "To be the studio that redefines what's possible in software — where engineering rigour meets design precision, and every line of code moves a business forward. We build scalable, high-performance architectures that stand the test of time.",
    accent: "from-white/[0.06] to-transparent",
    borderAccent: "group-hover:border-white/30",
    stat: { value: "97%", label: "Client Retention" },
  },
  {
    number: "03",
    label: "Purpose",
    title: "Make Complexity Accessible",
    description:
      "The gap between world-class technology and those who need it most shouldn't exist. We close it — translating sophisticated engineering into tools anyone can use.",
    accent: "from-white/[0.06] to-transparent",
    borderAccent: "group-hover:border-white/30",
    stat: { value: "12+", label: "Industries Served" },
  },
];

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 bg-black relative overflow-hidden">
      {/* Subtle bg texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>

        {/* ── HEADER ── */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <span className="font-space-grotesk text-[10px] uppercase tracking-[0.35em] text-white/30 block mb-6">
                Core Philosophy
              </span>
              <h2 className="font-playfair text-5xl md:text-7xl text-white leading-[0.9] tracking-tight">
                What Drives
                <br />
                <em className="not-italic text-white/30">Us Forward.</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 lg:col-start-8 self-end"
            >
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-7 py-6 flex items-start gap-5">
                <div className="font-playfair text-4xl text-white/10 leading-none select-none shrink-0 mt-1">"</div>
                <div className="flex-1">
                  <p className="font-playfair text-base md:text-lg text-white/55 italic leading-relaxed mb-4">
                    We don't just build software. We engineer the systems that let ideas outgrow their limitations.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-white/20" />
                    <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-white/30">
                      Arcnetic PVT LTD
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="mt-12 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left"
          />
        </div>

        {/* ── CARDS ── */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-5">
          {missions.map((m, index) => (
            <motion.div
              key={m.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.12 }}
              className="group relative"
            >
              <div
                className={`relative h-full flex flex-col rounded-2xl border border-white/10 ${m.borderAccent} bg-[#050505] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]`}
              >
                {/* Gradient shine on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${m.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Top number bar */}
                <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/[0.06]">
                  <span className="font-playfair text-5xl text-white leading-none select-none">
                    {m.number}
                  </span>
                  <span className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-white/25 border border-white/10 rounded-full px-4 py-1.5">
                    {m.label}
                  </span>
                </div>

                {/* Body */}
                <div className="px-8 pt-8 pb-6 flex-1">
                  <h3 className="font-playfair text-2xl md:text-3xl text-white mb-5 leading-snug">
                    {m.title}
                  </h3>
                  <p className="font-space-grotesk text-white/40 text-sm leading-[1.8]">
                    {m.description}
                  </p>
                </div>

                {/* Stat pill at bottom */}
                <div className="px-8 pb-8">
                  <div className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4">
                    <span className="font-playfair text-2xl text-white">{m.stat.value}</span>
                    <span className="h-6 w-px bg-white/10" />
                    <span className="font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-white/30">
                      {m.stat.label}
                    </span>
                  </div>
                </div>

                {/* Bottom edge accent line that grows on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}