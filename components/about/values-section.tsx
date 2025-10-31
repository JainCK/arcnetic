"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, Users, Trophy, Lightbulb, Heart } from "lucide-react";

export function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our interactions and deliverables.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies to solve complex challenges.",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and inclusive partnerships with our clients.",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description:
        "We strive for perfection in every project, delivering solutions that exceed expectations.",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "We invest in our team's growth and stay ahead of industry trends and technologies.",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      icon: Heart,
      title: "Client Success",
      description:
        "Our success is measured by the positive impact we create for our clients' businesses.",
      color: "text-red-500",
      bg: "bg-red-500/10",
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
            Our Core Values
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            These principles guide our decisions, shape our culture, and define
            how we interact with clients, partners, and each other.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-card/50 to-transparent backdrop-blur-sm">
                <div
                  className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-playfair">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Element */}
        {/* <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Values in Action
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              These aren't just words on a wall - they're the foundation of
              every project we undertake, every relationship we build, and every
              solution we deliver.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {values.map((value) => (
                <span
                  key={value.title}
                  className="px-4 py-2 bg-background/50 rounded-full text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-colors duration-200"
                >
                  {value.title}
                </span>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
