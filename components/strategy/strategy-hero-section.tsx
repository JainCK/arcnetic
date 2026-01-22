"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StrategyHeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const scrollToApproach = () => {
    const approachSection = document.getElementById("strategy-approach");
    if (approachSection) {
      approachSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Void */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#000000] to-[#000000]" />
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 container mx-auto px-4 text-center"
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
  );
}