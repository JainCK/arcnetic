"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ContactMinimal() {
  return (
    <section className="bg-black py-20 md:py-40 px-4 min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* 1. Subtle "Work With Us" Label */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-8 md:mb-12 text-center"
      >
        <span className="font-space-grotesk text-[10px] md:text-sm uppercase tracking-[0.3em] text-white/40">
          Start a Project
        </span>
      </motion.div>

      {/* 2. The Massive Link (The Grand Finale) */}
      <Link href="/contact" className="group relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Text */}
          <h2 className="font-playfair text-[15vw] md:text-[12vw] leading-[0.8] text-white transition-colors duration-500 group-hover:text-white/80">
            Let's Talk
          </h2>
          
          {/* Decorative Arrow that appears on hover */}
          <div className="absolute -right-8 top-0 md:-right-24 md:top-4 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-4 group-hover:translate-x-4">
            <ArrowUpRight className="h-12 w-12 md:h-32 md:w-32 text-white" />
          </div>

          {/* Underline Animation */}
          <div className="h-1 w-0 bg-white transition-all duration-500 group-hover:w-full mt-4" />
        </motion.div>
      </Link>

      {/* 3. Secondary Info (Email / Phone / Location) */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left max-w-4xl w-full">
        
        {/* Email */}
        <div className="space-y-2">
          <h3 className="font-space-grotesk text-xs uppercase tracking-widest text-white/40">Email</h3>
          <a href="mailto:aswin.p@arcnetic.com" className="block font-playfair text-xl text-white hover:text-white/70 transition-colors">
            support@arcnetic.com
          </a>
        </div>

        {/* Phone - New Addition */}
        <div className="space-y-2">
          <h3 className="font-space-grotesk text-xs uppercase tracking-widest text-white/40">Phone</h3>
          <a href="tel:+917558952771" className="block font-playfair text-xl text-white hover:text-white/70 transition-colors">
            +91 7558 952 771
          </a>
        </div>

        {/* Location - Renamed */}
        <div className="space-y-2">
          <h3 className="font-space-grotesk text-xs uppercase tracking-widest text-white/40">Headquarters</h3>
          <p className="font-playfair text-xl text-white">
            Kochi, India
          </p>
        </div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-[-20%] left-[50%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />
    </section>
  );
}