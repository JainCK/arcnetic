"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, Users, Trophy, Lightbulb, Heart, ArrowUpRight } from "lucide-react";

export function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      description: "We believe trust is the currency of the future. Uncompromising ethical standards in every line of code we write.",
      colSpan: "md:col-span-2",
      gradient: "from-blue-500/20 to-cyan-500/5",
    },
    {
      icon: Zap,
      title: "Radical Innovation",
      description: "We don't just follow trends; we set them. Embracing the bleeding edge to solve complex challenges.",
      colSpan: "md:col-span-1",
      gradient: "from-yellow-500/20 to-orange-500/5",
    },
    {
      icon: Users,
      title: "Deep Collaboration",
      description: "Building inclusive partnerships that amplify success. Your wins are our wins.",
      colSpan: "md:col-span-1",
      gradient: "from-green-500/20 to-emerald-500/5",
    },
    {
      icon: Trophy,
      title: "Relentless Excellence",
      description: "Good isn't enough. We pursue perfection in digital craftsmanship with obsession.",
      colSpan: "md:col-span-2",
      gradient: "from-purple-500/20 to-pink-500/5",
    },
    {
      icon: Lightbulb,
      title: "Continuous Growth",
      description: "Evolution is our nature. We constantly upgrade our skills and technologies.",
      colSpan: "md:col-span-1",
      gradient: "from-indigo-500/20 to-blue-500/5",
    },
    {
      icon: Heart,
      title: "Impact Driven",
      description: "We measure success by the tangible value we create for clients and the world.",
      colSpan: "md:col-span-2",
      gradient: "from-red-500/20 to-rose-500/5",
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Section Header - Sticky Left */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/40 block mb-6">
                Our DNA
              </span>
              <h2 className="font-playfair text-4xl md:text-6xl text-white mb-6 leading-tight">
                Principles That <br/> Define Us.
              </h2>
              <p className="font-space-grotesk text-white/50 text-lg leading-relaxed mb-8">
                These are not just words on a wall. They are the non-negotiable rules of engagement for every project we touch.
              </p>
            </motion.div>
          </div>

          {/* Bento Grid Layout - Right Side */}
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden hover:border-white/30 transition-all duration-500 ${value.colSpan}`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-xl text-white/70 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-playfair text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="font-space-grotesk text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}