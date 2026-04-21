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
    <div className="min-h-screen bg-black text-white font-sans">

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Background Void */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#000000] to-[#000000]" />
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10 container mx-auto px-4 text-center mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-white/40 border border-white/10 rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
              The Master Framework
            </span>
          </motion.div>

          <h1 className="font-playfair text-6xl md:text-[7vw] leading-[1.1] md:leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 select-none drop-shadow-2xl mb-8">
            Strategic<br />
            Innovation.
          </h1>

          <p className="font-space-grotesk text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 px-2 md:px-0">
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
              className="group rounded-full border border-white/10 bg-white/5 px-8 py-6 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <span className="flex items-center gap-3 font-space-grotesk tracking-[0.2em] text-xs">
                EXPLORE THE PROCESS
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* SEPARATION LINE */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="h-px bg-white/10 w-full mb-32" />
      </div>

      {/* FRAMEWORK HEADING */}
      <section id="framework" className="text-center px-4 md:px-8 pb-16 container mx-auto scroll-mt-32">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-5xl font-playfair mb-4"
        >
          The 5–Phase Framework
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-white/50"
        >
          Our proprietary methodology designed to minimize risk and maximize impact.
        </motion.p>
      </section>

      {/* NEW UI: STACKED STORY SECTIONS */}
      <div ref={containerRef} className="relative space-y-32 px-4 md:px-8 pb-32 container mx-auto">
        {/* Connecting Line Track (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 z-0" />
        
        {/* Connecting Line Progress (Desktop) */}
        <motion.div 
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2 z-0 origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        {sections.map((item, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: "-100px" }}
            className={`relative z-10 flex flex-col md:flex-row gap-10 items-center ${
              i % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Center Node (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-black border border-white/20 rounded-full items-center justify-center z-20">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>

            {/* IMAGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, margin: "-100px" }}
              className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </motion.div>

            {/* CONTENT */}
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
              className="w-full md:w-1/2"
            >
              <div className="text-xs text-white/40 mb-2 font-space-grotesk uppercase tracking-wider">
                {item.phase}
              </div>

              <h3 className="text-3xl md:text-4xl font-playfair mb-4">
                {item.title}
              </h3>

              <p className="text-white/50 mb-6 text-lg whitespace-pre-line">
                {item.description}
              </p>

              <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-white/50">
                {item.points.map((p, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        ))}
      </div>

      {/* INSIGHTS */}
      <section className="px-4 md:px-8 py-24 container mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Systems > Tools", desc: "We build integrated systems." },
          { title: "Automation > Effort", desc: "We eliminate manual work." },
          { title: "Scale > Growth", desc: "We design for scalability." }
        ].map((item, i) => (
          <div key={i} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
            <h4 className="mb-2 font-semibold text-xl font-playfair">{item.title}</h4>
            <p className="text-white/50 text-sm">{item.desc}</p>
          </div>
        ))}
        </div>
      </section>

      <section className="text-center px-4 md:px-8 py-32 container mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair mb-8">Start Building Your System</h2>
        <Link href="/contact" className="px-8 py-4 bg-white text-black rounded-full inline-flex items-center gap-2 text-xs font-space-grotesk uppercase tracking-widest hover:bg-gray-200 transition-colors">
          Get Started <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
