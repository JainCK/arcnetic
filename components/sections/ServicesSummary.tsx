"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Wrench,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Users,
  Code,
} from "lucide-react";

// Using actual service data with enhanced presentation
const featuredServices = [
  {
    slug: "web-development",
    icon: Globe,
    title: "Web & Full-Stack Development",
    subtitle: "Modern Web Applications",
    shortDescription:
      "High-performance, scalable web applications from database to user interface",
    features: [
      "Custom Web Applications",
      "Progressive Web Apps",
      "E-commerce Platforms",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    slug: "mobile-development",
    icon: Smartphone,
    title: "Mobile Development",
    subtitle: "Native & Cross-Platform Apps",
    shortDescription:
      "Native iOS and Android applications with exceptional user experiences",
    features: [
      "Native iOS & Android Apps",
      "Cross-Platform Development",
      "App Store Optimization",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    slug: "ai-solutions",
    icon: Brain,
    title: "AI Solutions",
    subtitle: "Intelligent Business Automation",
    shortDescription:
      "Integrate ML and AI into your business processes for enhanced efficiency",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Predictive Analytics",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    slug: "cloud-infrastructure",
    icon: Cloud,
    title: "Cloud & Infrastructure",
    subtitle: "Scalable Cloud Solutions",
    shortDescription:
      "Scalable solutions on AWS, Azure, and GCP for modern businesses",
    features: [
      "Cloud Migration Services",
      "Infrastructure as Code",
      "Auto-scaling Solutions",
    ],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    slug: "maintenance-support",
    icon: Wrench,
    title: "Maintenance & Support",
    subtitle: "24/7 Application Support",
    shortDescription:
      "Keeping your applications running smoothly with ongoing support",
    features: [
      "24/7 Monitoring",
      "Security Updates",
      "Performance Optimization",
    ],
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    slug: "digital-transformation",
    icon: TrendingUp,
    title: "Digital Transformation",
    subtitle: "Legacy System Modernization",
    shortDescription:
      "Modernize legacy systems and processes for the digital age",
    features: [
      "Legacy System Modernization",
      "Process Automation",
      "System Integration",
    ],
    gradient: "from-teal-500/20 to-green-500/20",
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
              Enterprise-Grade Solutions
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Technology Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-space-grotesk"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            From cutting-edge AI solutions to robust cloud infrastructure, we
            deliver end-to-end technology services that transform businesses.
            Our expert team combines innovation with proven methodologies to
            build scalable, secure, and future-ready solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="group relative"
            >
              <Link href={`/services/${service.slug}`}>
                <Card className="h-full border-2 border-transparent hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden cursor-pointer group-hover:shadow-xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <CardHeader className="relative z-10 pb-1">
                    <motion.div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                      <service.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="space-y-3">
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
                  <CardContent className="relative z-10 space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <CheckCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium group/btn"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          className="mt-20 pt-16 border-t border-border/50"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "10+",
                label: "Years of Combined Expertise",
                desc: "Led by seasoned industry professionals",
              },
              {
                icon: Users,
                label: "Client-Centric Process",
                desc: "Collaborative, transparent, and agile",
              },
              {
                Icon: Code,
                label: "Modern Tech Stack",
                desc: "Leveraging cutting-edge technologies",
              },
              {
                number: "24/7",
                label: "Support Available",
                desc: "Round-the-clock assistance",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary font-playfair">
                  {stat.number ? (
                    stat.number
                  ) : stat.icon ? (
                    <stat.icon className="mx-auto h-8 w-8 text-primary" />
                  ) : stat.Icon ? (
                    <stat.Icon className="mx-auto h-8 w-8 text-primary" />
                  ) : null}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- NEW CTA BUTTON --- */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how our comprehensive technology solutions can accelerate
              your growth and give you a competitive advantage in today's
              digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/services">
                <Button size="lg" variant="default" className="min-w-[200px]">
                  Explore All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
