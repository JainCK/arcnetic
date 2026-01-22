"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  
  // Smooth Parallax: Text moves slower than background creates 3D depth
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); 
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]); 
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]); // Text drifts down slowly

  return (
    <section
      ref={targetRef}
      className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center"
    >
      {/* ... (background code) ... */}
      <div className="absolute inset-0 z-0">
         {/* OPTION A: If you downloaded a video to public/videos/hero-bg.mp4 */}
         {/* ... */}
         {/* OPTION B: CSS Fallback (The Dark Knight Void) */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#000000] to-[#000000] z-[-1]" />
         
         {/* Animated Fog/Noise Texture for depth */}
         <div className="absolute inset-0 opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay animate-pulse" />
      </div>

      {/* 2. Content with Smooth Parallax */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 flex flex-col items-center justify-center px-4 text-center"
      >
        {/* ... (Minimal Tagline) ... */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="font-space-grotesk text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 border border-white/5 rounded-full px-6 py-3 bg-white/5 backdrop-blur-md shadow-2xl">
            Next Generation Systems
          </span>
        </motion.div>

        {/* Massive Headline */}
        <h1 className="font-playfair text-6xl sm:text-[11vw] md:text-[8vw] leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/20 select-none drop-shadow-2xl">
          Automating<br />
          The Future.
        </h1>

        {/* Floating CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-16"
        >
          <Link href="/contact">
            <Button 
              variant="ghost" 
              className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-10 py-8 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-4 font-space-grotesk tracking-[0.2em] text-xs font-medium">
                START EVOLUTION
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}