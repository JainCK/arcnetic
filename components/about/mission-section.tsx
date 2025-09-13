"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Rocket, Heart, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

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
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Driving Digital Excellence
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Drives Us Forward
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Our core beliefs and aspirations shape everything we do, from the
            solutions we create to the relationships we build.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <mission.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-playfair">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {mission.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              See Our Story in Action
            </h3>
            <p className="text-muted-foreground">
              Watch how we've grown and evolved to become a trusted technology
              partner
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                </div>
                <p className="text-white/80">Company Story Video</p>
                <p className="text-white/60 text-sm">Coming Soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
