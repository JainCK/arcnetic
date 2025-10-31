"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Users, TrendingUp } from "lucide-react";

export function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description:
        "Founded with a vision to bridge the gap between technology and business needs.",
      icon: MapPin,
      stats: "2 Founders",
    },
    {
      year: "2020",
      title: "First Major Client",
      description:
        "Delivered our first enterprise-level solution, establishing our reputation for quality.",
      icon: Users,
      stats: "10 Team Members",
    },
    {
      year: "2021",
      title: "Expansion",
      description:
        "Opened offices in India and Canada, expanding our global presence.",
      icon: TrendingUp,
      stats: "25 Team Members",
    },
    {
      year: "2022",
      title: "Innovation Hub",
      description:
        "Launched our AI and Machine Learning division, staying ahead of industry trends.",
      icon: Calendar,
      stats: "40 Team Members",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description:
        "Received multiple awards for innovation and client satisfaction.",
      icon: Users,
      stats: "50+ Team Members",
    },
    {
      year: "2024",
      title: "Future Ready",
      description:
        "Continuing to evolve with cutting-edge technologies and expanding our service portfolio.",
      icon: TrendingUp,
      stats: "200+ Projects",
    },
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Journey
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            From a small startup to a global technology partner - discover the
            milestones that have shaped our growth and success.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-secondary h-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                        <milestone.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {milestone.year}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {milestone.stats}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-playfair">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Placeholder */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Growth in Pictures
            </h3>
            <p className="text-muted-foreground">
              Visual highlights from our journey of innovation and growth
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border hover:border-primary/50 transition-colors duration-300 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-2"></div>
                  <p className="text-sm text-muted-foreground">
                    Milestone {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
