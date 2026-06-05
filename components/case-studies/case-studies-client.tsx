"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allCaseStudies } from "@/lib/case-studies-data";

// --- COMPONENT --- --- COMPONENT ---

export function CaseStudiesClient() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Dedicated case study routing handles project views directly.

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#151515] via-[#000000] to-[#000000]" />
          <div className="absolute inset-0 opacity-[0.12] bg-[url('/noise.svg')] mix-blend-overlay" />
          {/* Subtle grid lines */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-white/40 border border-white/10 rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
              Proof of Impact
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-playfair text-6xl md:text-8xl font-medium text-white mb-8 tracking-tight leading-[0.9]"
          >
            Work That{" "}
            <br className="hidden md:block" />
            Speaks For Itself.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-space-grotesk text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Deep dives into the challenges we solved, the decisions we made, and the results we shipped.
          </motion.p>
        </motion.div>
      </section>

      {/* ── CASE STUDIES LIST (FEATURED STYLE) ── */}
      <section className="relative z-10 px-4 pb-24">
        <div className="container mx-auto max-w-6xl space-y-16">
          {allCaseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px bg-white/10 flex-grow" />
                <span className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Project {idx + 1}
                </span>
                <span className="h-px bg-white/10 flex-grow" />
              </div>

              <Link 
                href={`/case-studies/${cs.id}`}
                className="relative rounded-2xl border border-white/10 bg-[#050505] overflow-hidden hover:border-white/20 transition-all duration-500 group block cursor-pointer"
              >


                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cs.color || "from-emerald-500/10 via-transparent to-transparent"} pointer-events-none`} />

                <div className="relative z-10 p-6 md:p-10 grid md:grid-cols-2 gap-8 md:gap-12">
                  {/* Left */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="inline-block mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-space-grotesk uppercase tracking-widest text-white/60">
                        {cs.tag}
                      </span>
                      <p className="font-space-grotesk text-xs uppercase tracking-[0.25em] text-white/30 mb-2.5">
                        {cs.client}
                      </p>
                      <h2 className="font-playfair text-2xl md:text-3xl text-white leading-snug mb-4">
                        {cs.title}
                      </h2>
                      <p className="font-space-grotesk text-white/50 text-xs md:text-sm leading-relaxed">
                        {cs.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {cs.stack.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-space-grotesk text-white/40 border border-white/10 rounded-full bg-white/[0.03]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col justify-between">
                    <blockquote className="border-l-2 border-white/20 pl-6 mb-6">
                      <p className="font-playfair text-base md:text-lg text-white/80 italic leading-relaxed">
                        "{cs.outcome}"
                      </p>
                    </blockquote>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {cs.stats?.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                        >
                          <div className="font-playfair text-2xl text-white mb-1">{s.value}</div>
                          <div className="font-space-grotesk text-[9px] uppercase tracking-widest text-white/30">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      className="group/btn self-start flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-xs font-space-grotesk uppercase tracking-widest hover:bg-white/90 transition-all font-semibold"
                    >
                      View Detailed Report
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 px-4 overflow-hidden border-t border-white/10 bg-[#050505]">
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <span className="font-space-grotesk text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60">
                Ready to be next?
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium font-playfair text-white tracking-tight leading-[1.05] md:leading-[1.0] mb-6">
              Let's Build Something <br /> Remarkable.
            </h2>

            <p className="text-lg md:text-xl text-white/50 max-w-xl md:max-w-2xl mx-auto font-space-grotesk leading-relaxed mb-12">
              Every case study started with a conversation. Tell us about your challenge and let's figure out what's possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="h-14 px-10 bg-white text-black hover:bg-white/90 rounded-full font-playfair font-bold text-lg group flex items-center gap-2 transition-all cursor-pointer">
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button className="h-14 px-10 border border-white/20 text-white hover:bg-white/5 rounded-full font-playfair font-bold text-lg transition-all cursor-pointer bg-transparent">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Dedicated dynamic pages handle detail views. */}

    </div>
  );
}
