"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToMission = () => {
    const element = document.querySelector("#mission");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="pt-24 relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#000000] to-[#000000]" />
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-white/40 border border-white/10 rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
            Our Story
          </span>
        </motion.div>

        <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-medium text-white mb-8 tracking-tight leading-[0.9]">
          The Architects <br /> of Tomorrow.
        </h1>

        <p className="font-space-grotesk text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          We are not just developers. We are innovators, strategists, and problem solvers dedicated to engineering the future of digital business.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Button 
            onClick={scrollToMission}
            variant="ghost" 
            className="group rounded-full border border-white/10 bg-white/5 px-8 py-6 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="flex items-center gap-3 font-space-grotesk tracking-[0.2em] text-xs">
              DISCOVER OUR MISSION
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}