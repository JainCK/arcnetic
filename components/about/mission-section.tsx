"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Rocket, Heart } from "lucide-react";

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const missions = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.",
    },
    {
      icon: Rocket,
      title: "Our Vision",
      description:
        "To be the global leader in transformative software solutions, setting new standards for excellence and innovation in technology.",
    },
    {
      icon: Heart,
      title: "Our Purpose",
      description:
        "To bridge the gap between complex technology and real-world business needs, making digital transformation accessible to all.",
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/40 block mb-6">
                Core Philosophy
              </span>
              <h2 className="font-playfair text-4xl md:text-6xl text-white mb-6 leading-tight">
                What Drives <br/> Us Forward.
              </h2>
              <p className="font-space-grotesk text-white/50 text-lg leading-relaxed">
                Our core beliefs and aspirations shape everything we do, from the
                solutions we create to the relationships we build.
              </p>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-8 grid gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-10 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-[#111] transition-all duration-500 hover:border-white/20"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-500 text-white">
                    <mission.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair text-white mb-4">
                      {mission.title}
                    </h3>
                    <p className="font-space-grotesk text-white/50 leading-relaxed text-lg">
                      {mission.description}
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