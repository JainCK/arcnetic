"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Puzzle,
  TrendingUp,
  Shield,
  Target,
  Users,
} from "lucide-react";

export function CultureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cultureAspects = [
    {
      icon: Target,
      title: "Client-Centric",
      description: "Our success is measured by yours. We dive deep into your goals.",
    },
    {
      icon: Puzzle,
      title: "Collaborative",
      description: "We function as an extension of your team, combining expertise.",
    },
    {
      icon: Shield,
      title: "Accountable",
      description: "We take full responsibility for our code, from end to end.",
    },
    {
      icon: BookOpen,
      title: "Curious",
      description: "Committed to professional growth and staying ahead of trends.",
    },
    {
      icon: TrendingUp,
      title: "Pragmatic",
      description: "Applying cutting-edge technology in practical, efficient ways.",
    },
    {
      icon: Users,
      title: "Transparent",
      description: "Open, honest, and proactive communication at every stage.",
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#020202] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/40 block mb-6">
            Environment
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl text-white mb-6">
            The Arcnetic Culture.
          </h2>
          <p className="font-space-grotesk text-white/50 text-lg leading-relaxed">
            We believe that great work happens when people feel valued, inspired, 
            and supported in an environment that encourages growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {cultureAspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-10 hover:bg-[#0A0A0A] transition-colors duration-500 group"
            >
              <aspect.icon className="h-8 w-8 text-white/30 mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-playfair text-white mb-3">
                {aspect.title}
              </h3>
              <p className="font-space-grotesk text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                {aspect.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}