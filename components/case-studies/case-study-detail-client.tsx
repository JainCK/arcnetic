"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CaseStudy, getOtherCaseStudies } from "@/lib/case-studies-data";
import { CohesiveDetailedView } from "./cohesive-detailed-view";
import { AdTrackerDetailedView } from "./ad-tracker-detailed-view";
import { DashboardDetailedView } from "./dashboard-detailed-view";

interface CaseStudyDetailClientProps {
  caseStudy: CaseStudy;
}

export function CaseStudyDetailClient({ caseStudy }: CaseStudyDetailClientProps) {
  const otherCases = getOtherCaseStudies(caseStudy.id, 3);

  if (caseStudy.id === "cohesive-consulting-solutions") {
    return <CohesiveDetailedView caseStudy={caseStudy} otherCases={otherCases} />;
  }

  if (caseStudy.id === "ad-performance-daily-summary") {
    return <AdTrackerDetailedView caseStudy={caseStudy} otherCases={otherCases} />;
  }

  if (caseStudy.id === "bizdash") {
    return <DashboardDetailedView caseStudy={caseStudy} otherCases={otherCases} />;
  }

  // Fade-in animation definitions
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black font-inter pt-32 pb-24">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full" />
        <div className="absolute top-[40vh] right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[180px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
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

        {/* ── HEADER BLOCK ── */}
        <div className="max-w-4xl mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-space-grotesk uppercase tracking-widest text-white/70">
              {caseStudy.tag}
            </span>
            <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-3.5 py-1 bg-white/5">
              {caseStudy.industry}
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-space-grotesk text-xs md:text-sm uppercase tracking-[0.25em] text-white/30 mb-3"
          >
            Client Success: {caseStudy.client}
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl md:text-6xl font-medium text-white leading-[1.1] mb-6 tracking-tight"
          >
            {caseStudy.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-space-grotesk text-white/50 text-base md:text-lg leading-relaxed"
          >
            {caseStudy.description}
          </motion.p>
        </div>

        {/* ── COVER IMAGE ── */}
        {caseStudy.image && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-2xl border border-white/10 mb-16 shadow-2xl"
          >
            <Image
              src={caseStudy.image}
              alt={`${caseStudy.client} Project Image`}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        )}

        {/* ── OUTCOME QUOTE / CORE STATS GRID ── */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 pb-12 border-b border-white/10">
          
          {/* Key Stats Block */}
          <div className="md:col-span-1 flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-7">
            <div>
              <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-white/30 mb-4 block">
                Primary Impact
              </span>
              <div className="font-playfair text-4xl md:text-5xl text-white font-medium mb-3">
                {caseStudy.metric ? caseStudy.metric.value : caseStudy.stats?.[0]?.value || "Success"}
              </div>
              <div className="font-space-grotesk text-xs text-white/50 leading-relaxed uppercase tracking-wider">
                {caseStudy.metric ? caseStudy.metric.label : caseStudy.stats?.[0]?.label || "Result Delivered"}
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-white/5 font-space-grotesk text-xs text-white/40 italic leading-relaxed">
              "{caseStudy.outcome}"
            </div>
          </div>

          {/* Key Deliverables List */}
          <div className="md:col-span-2 space-y-6">
            <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-white/30 block">
              Project Deliverables & Key Accomplishments
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
                  className="flex items-start gap-3.5 bg-white/[0.01] border border-white/[0.05] hover:border-white/10 transition-colors p-4 rounded-xl"
                >
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 text-emerald-400/80 shrink-0" />
                  <span className="font-space-grotesk text-xs md:text-sm text-white/70 leading-relaxed">
                    {h}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Quick stats details if available */}
            {caseStudy.stats && caseStudy.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {caseStudy.stats.map((stat, i) => (
                  <div key={i} className="bg-white/[0.01] border border-white/[0.05] p-4 rounded-xl text-center">
                    <div className="font-playfair text-xl md:text-2xl text-white mb-1 font-semibold">{stat.value}</div>
                    <div className="font-space-grotesk text-[9px] uppercase tracking-wider text-white/30">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── THE CHALLENGE & SOLUTION SECTION ── */}
        {!caseStudy.detailedReport.challengePoints && !caseStudy.detailedReport.solutionPillars ? (
          // Fallback simple side-by-side layout for other case studies
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-white/30 border-b border-white/5 pb-2">
                The Challenge
              </h4>
              <p className="font-space-grotesk text-white/70 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {caseStudy.detailedReport.challenge}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-white/30 border-b border-white/5 pb-2">
                The Engineering Solution
              </h4>
              <p className="font-space-grotesk text-white/70 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {caseStudy.detailedReport.solution}
              </p>
            </motion.div>
          </div>
        ) : (
          // Premium dynamic Bento layout for rich case studies
          <div className="space-y-24 mb-24">
            
            {/* Challenge & Gaps Grid */}
            <div>
              <div className="max-w-3xl mb-12">
                <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-4 tracking-tight">
                  The Challenge & Gaps
                </h2>
                <p className="font-space-grotesk text-white/60 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {caseStudy.detailedReport.challenge}
                </p>
              </div>

              {caseStudy.detailedReport.challengePoints && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {caseStudy.detailedReport.challengePoints.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="bg-white/[0.01] border border-white/5 hover:border-red-500/20 hover:bg-red-950/[0.01] p-6 rounded-xl transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-2.5 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 mt-1.5 animate-pulse shrink-0" />
                        <h3 className="font-space-grotesk text-sm font-semibold text-white/90 group-hover:text-red-400 transition-colors">
                          {point.title}
                        </h3>
                      </div>
                      <p className="font-space-grotesk text-xs text-white/40 leading-relaxed">
                        {point.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Bento Grid */}
            <div>
              <div className="max-w-3xl mb-12">
                <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-4 tracking-tight">
                  The Engineering Transformation
                </h2>
                <p className="font-space-grotesk text-white/60 text-sm md:text-base leading-relaxed">
                  {caseStudy.detailedReport.solution}
                </p>
              </div>

              {caseStudy.detailedReport.solutionPillars && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {caseStudy.detailedReport.solutionPillars.map((pillar, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      className="bg-white/[0.01] border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-950/[0.01] p-6 rounded-xl transition-all duration-300 group"
                    >
                      <div className="font-playfair text-3xl text-emerald-400/80 mb-3 font-light tracking-tight group-hover:text-emerald-300 transition-colors">
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
              )}
            </div>

            {/* Before vs After Comparison */}
            {caseStudy.detailedReport.resultsCompare && (
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium mb-10 tracking-tight text-center md:text-left">
                  Transformation Metrics
                </h2>

                <div className="rounded-2xl border border-white/10 bg-white/[0.01] overflow-hidden backdrop-blur-sm shadow-xl max-w-4xl mx-auto">
                  <div className="grid grid-cols-3 gap-4 border-b border-white/10 bg-white/[0.03] p-4 text-[10px] font-space-grotesk uppercase tracking-wider text-white/40 font-semibold text-center md:text-left">
                    <div className="pl-4">Target Dimension</div>
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
                          <span className="inline-block px-3 py-1.5 text-[10px] font-space-grotesk text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 rounded-md font-semibold max-w-[160px] w-full text-center shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                            {row.after}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ── ARCHITECTURAL IMPLEMENTATION ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.02] via-[#050505] to-transparent p-6 md:p-10 mb-16"
        >
          <h4 className="font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">
            Architectural Implementation
          </h4>
          <p className="font-space-grotesk text-white/70 text-sm md:text-base leading-relaxed mb-6">
            {caseStudy.detailedReport.architecture}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
            <span className="text-[10px] font-space-grotesk uppercase tracking-wider text-white/30 mr-2">
              Tech Integration:
            </span>
            {caseStudy.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[10px] font-space-grotesk text-white/40 border border-white/10 rounded-full bg-white/[0.02]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── INTRIGUING CTA BLOCK ── */}
        <section className="py-16 px-6 border border-white/10 bg-gradient-to-b from-[#050505] to-[#010101] rounded-2xl text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-white/40 border border-white/10 rounded-full px-5 py-1.5 bg-white/5 inline-block">
              Scale Your Project Next
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium tracking-tight">
              Looking for similar results?
              <br />
              Let's craft your solution.
            </h2>
            <p className="font-space-grotesk text-white/40 max-w-md mx-auto text-xs md:text-sm leading-relaxed">
              Every system we build starts with defining unique targets. Talk to our engineering team to outline what we can achieve for you.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-xs font-space-grotesk uppercase tracking-widest hover:bg-white/90 transition-all font-semibold"
              >
                Connect with our team
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
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
    </div>
  );
}
