"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const sections = [
  {
    phase: "PHASE 01",
    title: "Discovery & Analysis",
    description: "We dive deep into your daily operations and your competitive market to find your best opportunities for growth.\n\nWe turn those insights into a solid roadmap for your new technology.",
    points: [
      "Stakeholder Workshops",
      "Market Intelligence",
      "Gap Analysis",
      "Opportunity Mapping"
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
  },
  {
    phase: "PHASE 02",
    title: "Strategic Design",
    description: "We craft a clear, actionable roadmap that aligns perfectly with your vision.\n\nBy carefully planning the technology and preparing for challenges upfront, we ensure the actual building phase is completely smooth and stress-free.",
    points: [
      "Framework Development",
      "Tech Roadmap",
      "Risk Assessment",
      "Resource Planning"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
  },
  {
    phase: "PHASE 03",
    title: "Implementation Planning",
    description: "We set clear deadlines and choose the perfect tools to bring your strategy to life.\n\nWe provide a clear breakdown of your project team and our process for delivering top-quality results at every milestone. ",
    points: [
      "Execution Roadmap",
      "Team Structure",
      "Tech Stack Selection",
      "QA Framework"
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
  },
  {
    phase: "PHASE 04",
    title: "Execution & Optimization",
    description: "We bring your project to life through active building and constant testing.\n\nWe stay flexible and make quick improvements as we go, ensuring we deliver a high-quality product that works exactly as promised. ",
    points: [
      "Agile Deployment",
      "Real-time Analytics",
      "Continuous Refinement",
      "Strategy Review"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
  },
  {
    phase: "PHASE 05",
    title: "Success Measurement",
    description: "We evaluate the true value and results created by your new technology. We give you the clear facts you need to see your progress and make smart decisions for the future of your business",
    points: [
      "KPI Tracking",
      "ROI Analysis",
      "Impact Reporting",
      "Future Recommendations"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
  }
];

export function StrategyClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Slightly accelerate the line drawing so it reaches the circles earlier, but not too fast
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(heroProgress, [0, 0.5], [0, 50]);

  const scrollToApproach = () => {
    const approachSection = document.getElementById("framework");
    if (approachSection) {
      approachSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-white selection:text-black">

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Background Void */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#000000] to-[#000000]" />
          <div className="absolute inset-0 opacity-[0.15] bg-[url('/noise.svg')] mix-blend-overlay" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10 container mx-auto px-4 text-center mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <span className="font-space-grotesk text-xs uppercase tracking-[0.4em] text-white/40 border border-white/10 rounded-full px-8 py-3 bg-white/5 backdrop-blur-sm">
              The Master Framework
            </span>
          </motion.div>

          <h1 className="font-playfair text-6xl md:text-[8vw] leading-[1.1] md:leading-[0.85] tracking-tight text-white select-none drop-shadow-2xl mb-10">
            Strategic Innovation.
          </h1>

          <p className="font-inter text-lg md:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-16 px-2 md:px-0">
            We don't just build software. We engineer outcomes.
            Aligning technology with vision to create the inevitable.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Button
              onClick={scrollToApproach}
              variant="ghost"
              className="group rounded-full border border-white/10 bg-white/5 px-10 py-8 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 shadow-2xl backdrop-blur-md"
            >
              <span className="flex items-center gap-4 font-space-grotesk tracking-[0.3em] text-xs font-bold">
                EXPLORE THE PROCESS
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-2" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* SEPARATION LINE */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="h-px bg-white/10 w-full mb-40" />
      </div>

      {/* FRAMEWORK HEADING */}
      <section id="framework" className="text-center px-4 md:px-8 pb-24 container mx-auto scroll-mt-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-5xl md:text-7xl font-playfair mb-8 tracking-tight"
        >
          The 5–Phase Framework
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
          className="font-inter text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Our proprietary methodology designed to minimize risk and maximize impact.
        </motion.p>
      </section>

      {/* NEW UI: STACKED STORY SECTIONS */}
      <div ref={containerRef} className="relative space-y-24 px-4 md:px-8 pb-32 container mx-auto">
        {/* Connecting Line Track (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 z-0" />

        {/* Connecting Line Progress (Desktop) */}
        <motion.div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2 z-0 origin-top shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          style={{ scaleY: lineHeight }}
        />

        {sections.map((item, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
            className={`relative z-10 flex flex-col md:flex-row gap-10 md:gap-14 items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
          >
            {/* Center Node (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-black border border-white/20 rounded-full items-center justify-center z-20 shadow-2xl">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: "-100px" }}
              className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
              className="w-full md:w-1/2 space-y-8"
            >
              <div className="font-space-grotesk text-xs uppercase tracking-[0.4em] text-white/50 font-bold">
                {item.phase}
              </div>

              <h3 className="text-3xl md:text-5xl font-playfair tracking-tight text-white leading-tight">
                {item.title}
              </h3>

              <p className="font-inter text-white/40 text-base md:text-lg leading-relaxed border-l border-white/10 pl-6">
                {item.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-base text-white/40">
                {item.points.map((p, idx) => (
                  <div key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-2 h-2 rounded-full bg-white/20 group-hover/item:bg-white transition-colors" />
                    <span className="font-inter group-hover/item:text-white transition-colors">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        ))}
      </div>

      {/* INSIGHTS */}
      <section className="px-4 md:px-8 py-32 container mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {[
            { title: "Systems > Tools", desc: "We build integrated systems that power entire enterprises, not just isolated apps." },
            { title: "Automation > Effort", desc: "We eliminate manual work through intelligent automation and autonomous workflows." },
            { title: "Scale > Growth", desc: "We design architectures that scale infinitely, ensuring your technology is never a bottleneck." }
          ].map((item, i) => (
            <div key={i} className="p-10 md:p-12 border border-white/10 rounded-3xl bg-black/50 backdrop-blur-sm hover:bg-white/5 transition-all duration-500 group">
              <h4 className="mb-4 font-bold text-2xl md:text-3xl font-playfair text-white group-hover:text-white transition-colors">{item.title}</h4>
              <p className="font-inter text-white/40 text-lg leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-4 md:px-8 py-48 container mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-playfair text-white tracking-tight leading-none">
            Start Building Your System.
          </h2>
          <div className="pt-8">
            <Link href="/contact">
              <button className="group relative overflow-hidden rounded-full border border-white/20 bg-white/10 h-14 md:h-16 px-8 md:px-12 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 backdrop-blur-sm font-space-grotesk tracking-[0.3em] text-[10px] md:text-xs font-bold inline-flex items-center gap-4 cursor-pointer justify-center">
                  GET STARTED
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
