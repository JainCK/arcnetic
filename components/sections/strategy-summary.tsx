"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  BarChart3,
  Rocket,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function StrategySummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const strategyHighlights = [
    {
      icon: Target,
      title: "Strategic Planning",
      description:
        "Data-driven strategies aligned with your business goals and market opportunities.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Lightbulb,
      title: "Innovation Design",
      description:
        "Creative solutions that leverage cutting-edge technology for competitive advantage.",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description:
        "Continuous monitoring and refinement to maximize ROI and business impact.",
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  const achievements = [
    {
      metric: "100%",
      label: "Commitment to Success",
      description:
        "We are fully invested in your project's outcome from day one.",
    },
    {
      metric: "ROI-Driven",
      label: "Development Process",
      description: "Every feature is built with your business goals in mind.",
    },
    {
      metric: "Expert-Led",
      label: "Strategic Planning",
      description: "Leveraging decades of combined team experience.",
    },
    {
      metric: "Future-Proof",
      label: "Technology Stack",
      description: "Building scalable solutions that grow with you.",
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
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            <Rocket className="h-4 w-4" />
            Strategic Excellence
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Strategic Innovation That
            <br />
            <span className="text-primary">Transforms Businesses</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            We don't just build solutions—we craft comprehensive strategies that
            align technology with your business vision to create sustainable
            competitive advantages.
          </motion.p>
        </motion.div>

        {/* Strategy Highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {strategyHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 group">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-playfair">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-xl md:text-xl font-bold text-primary mb-2 font-playfair">
                {achievement.metric}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Strategic Process Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                    Our Strategic Methodology
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Experience our proven 5-phase strategic process that
                    transforms vision into measurable results through
                    data-driven insights and innovative solutions.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "Discovery & Market Analysis",
                      "Strategic Framework Design",
                      "Implementation Roadmap",
                      "Agile Execution & Monitoring",
                      "Optimization & Growth",
                    ].map((phase, index) => (
                      <motion.div
                        key={phase}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-foreground font-medium">
                          {phase}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Custom CTA - Not a button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  >
                    <a
                      href="/strategies"
                      className="inline-flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-all duration-300 group-hover:scale-105">
                        <span className="font-semibold">
                          Explore Our Strategic Approach
                        </span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                      <div className="w-2 h-2 bg-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </a>
                  </motion.div>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                    <div className="relative">
                      {/* Animated Strategy Visualization */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-32 h-32 border-4 border-primary/20 rounded-full relative"
                      >
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full"></div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/60 rounded-full"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-secondary/60 rounded-full"></div>
                      </motion.div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Target className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
