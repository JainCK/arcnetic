"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Users, Zap, Globe, TrendingUp } from "lucide-react";

const indicators = [
  {
    icon: Shield,
    title: "Business Security",
    description:
      "Bank-level security protocols protecting your most sensitive business data",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Award-winning solutions trusted by leading businesses worldwide",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Senior engineers with 10+ years of business software experience",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Agile development process with guaranteed project timelines",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Solutions built to handle millions of users worldwide",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Average 300% return on investment within first year",
  },
];

export function TrustIndicators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-background to-muted/5"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Why Leading Businesses Choose Arcnetic
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto font-space-grotesk">
            We deliver business-grade solutions with the reliability and
            expertise your company demands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <indicator.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2 font-space-grotesk">
                {indicator.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
