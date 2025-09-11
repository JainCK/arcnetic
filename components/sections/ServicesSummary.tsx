"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Brain,
  Layers,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Rocket,
} from "lucide-react";

const featuredServices = [
  {
    icon: Brain,
    title: "AI & Machine Learning Development",
    subtitle: "Intelligent Solutions for Growth",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Rocket,
    title: "Custom Enterprise Software",
    subtitle: "Scalable & Secure Applications",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation Services",
    subtitle: "Modernize Your Legacy Systems",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

export function ServicesSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section ref={ref} id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Business Solutions
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-space-grotesk"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Our expertise covers the full spectrum of enterprise technology. We
            architect and deliver robust software solutions designed to solve
            complex challenges and create new opportunities.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="group relative"
            >
              <Card className="h-full border-2 border-transparent hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <CardHeader className="relative z-10 pb-4">
                  <motion.div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                    <service.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors duration-300 font-playfair">
                      {service.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="text-xs font-sans font-normal"
                    >
                      {service.subtitle}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground text-sm">
                    A brief summary of the service highlighting key value
                    propositions for potential clients.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* --- NEW CTA BUTTON --- */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/services">
            <Button size="lg" variant="default">
              Explore All Our Capabilities{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
