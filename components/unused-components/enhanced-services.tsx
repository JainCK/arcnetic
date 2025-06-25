"use client";

import React from "react";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Zap,
  Globe,
  Brain,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Applications",
    subtitle: "Bespoke Digital Solutions",
    description:
      "Enterprise-grade web applications built with cutting-edge technologies, designed for scalability, performance, and exceptional user experiences.",
    features: ["React/Next.js", "TypeScript", "Microservices", "Cloud Native"],
    metrics: { projects: "50+", performance: "98%", satisfaction: "100%" },
    gradient: "from-blue-500/20 to-cyan-500/20",
    delay: 0,
    color: "blue",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Intelligent Automation",
    description:
      "Advanced AI solutions including natural language processing, computer vision, predictive analytics, and intelligent automation systems.",
    features: ["TensorFlow", "PyTorch", "OpenAI", "Custom Models"],
    metrics: { accuracy: "94%", models: "25+", automation: "80%" },
    gradient: "from-purple-500/20 to-pink-500/20",
    delay: 0.1,
    color: "purple",
  },
  {
    icon: Database,
    title: "API & Database Solutions",
    subtitle: "Robust Data Architecture",
    description:
      "Scalable API development and database architecture ensuring optimal performance, security, and seamless data integration.",
    features: ["GraphQL", "REST APIs", "PostgreSQL", "Redis"],
    metrics: { apis: "100+", uptime: "99.9%", speed: "<50ms" },
    gradient: "from-green-500/20 to-emerald-500/20",
    delay: 0.2,
    color: "green",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    subtitle: "Scalable Software Solutions",
    description:
      "Complete SaaS platform development from MVP to enterprise scale, with modern architecture and advanced feature sets.",
    features: ["Multi-tenant", "Auto-scaling", "Analytics", "Integrations"],
    metrics: { users: "1M+", platforms: "15+", growth: "300%" },
    gradient: "from-orange-500/20 to-red-500/20",
    delay: 0.3,
    color: "orange",
  },
  {
    icon: Globe,
    title: "Enterprise Software",
    subtitle: "Business Transformation",
    description:
      "Mission-critical enterprise applications that streamline operations, enhance productivity, and drive digital transformation.",
    features: ["Enterprise Security", "Compliance", "Integration", "Support"],
    metrics: { enterprises: "30+", efficiency: "+40%", roi: "250%" },
    gradient: "from-indigo-500/20 to-purple-500/20",
    delay: 0.4,
    color: "indigo",
  },
  {
    icon: Zap,
    title: "No-Code Solutions",
    subtitle: "Rapid Development",
    description:
      "Fast-track development using modern no-code and low-code platforms, perfect for rapid prototyping and quick deployments.",
    features: ["Webflow", "Bubble", "Zapier", "Custom Tools"],
    metrics: { speed: "10x", projects: "75+", time: "70%" },
    gradient: "from-yellow-500/20 to-orange-500/20",
    delay: 0.5,
    color: "yellow",
  },
];

export function EnhancedServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Services
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-12 max-w-xs"
          />

          <motion.p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Comprehensive software solutions that transform businesses and drive
            innovation across industries, from startups to enterprise
            organizations.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: service.delay }}
              className="group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() =>
                setSelectedService(selectedService === index ? null : index)
              }
            >
              <Card className="h-full border-2 border-transparent hover:border-primary/30 transition-all duration-500 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden cursor-pointer">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={{
                    scale: hoveredService === index ? [1, 1.05, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat:
                      hoveredService === index ? Number.POSITIVE_INFINITY : 0,
                  }}
                />

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full"
                  animate={{
                    scale: hoveredService === index ? [1, 1.5, 1] : 1,
                    opacity: hoveredService === index ? [0.3, 1, 0.3] : 0.3,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat:
                      hoveredService === index ? Number.POSITIVE_INFINITY : 0,
                  }}
                />

                <CardHeader className="relative z-10 pb-4">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="h-8 w-8 text-primary" />
                  </motion.div>

                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">
                      {service.subtitle}
                    </Badge>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                    {Object.entries(service.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    className="flex items-center text-primary font-medium text-sm pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-2xl w-full bg-card border-2 border-primary/20 rounded-3xl p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                    {React.createElement(services[selectedService].icon, {
                      className: "h-6 w-6 text-primary",
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {services[selectedService].title}
                    </h3>
                    <p className="text-primary">
                      {services[selectedService].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {services[selectedService].description}
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {services[selectedService].features.map(
                        (feature, index) => (
                          <Badge key={index} variant="outline">
                            {feature}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Metrics</h4>
                    <div className="space-y-2">
                      {Object.entries(services[selectedService].metrics).map(
                        ([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-muted-foreground capitalize">
                              {key}:
                            </span>
                            <span className="font-medium text-primary">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
