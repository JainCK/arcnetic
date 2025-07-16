"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Brain,
  Layers,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    subtitle: "Intelligent Business Automation",
    description:
      "Transform your operations with cutting-edge artificial intelligence. From predictive analytics to automated decision-making, we build AI systems that give your business a competitive edge.",
    benefits: [
      "Reduce operational costs by 40%",
      "Automate complex workflows",
      "Predictive business insights",
      "24/7 intelligent monitoring",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    delay: 0,
  },
  {
    icon: Rocket,
    title: "Business Applications",
    subtitle: "Mission-Critical Software",
    description:
      "Custom business applications built for scale, security, and performance. We create software that grows with your business and handles millions of users seamlessly.",
    benefits: [
      "99.9% uptime guarantee",
      "Business-grade security",
      "Unlimited scalability",
      "24/7 expert support",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    delay: 0.1,
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    subtitle: "Complete Business Evolution",
    description:
      "Modernize your entire business infrastructure with our comprehensive digital transformation services. From legacy system migration to cloud-native architectures.",
    benefits: [
      "Increase efficiency by 60%",
      "Reduce IT costs significantly",
      "Future-proof technology",
      "Seamless integration",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    delay: 0.2,
  },
  {
    icon: Shield,
    title: "Secure Cloud Solutions",
    subtitle: "Enterprise-Grade Infrastructure",
    description:
      "Build robust, secure, and scalable cloud infrastructure that protects your data while enabling rapid business growth and global accessibility.",
    benefits: [
      "Bank-level security",
      "Global CDN deployment",
      "Auto-scaling infrastructure",
      "Disaster recovery",
    ],
    gradient: "from-orange-500/20 to-red-500/20",
    delay: 0.3,
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    subtitle: "Revenue-Generating Software",
    description:
      "Launch your own SaaS platform with our end-to-end development services. From MVP to enterprise-scale platforms that generate recurring revenue.",
    benefits: [
      "Multi-tenant architecture",
      "Subscription management",
      "Advanced analytics",
      "Global payment processing",
    ],
    gradient: "from-indigo-500/20 to-purple-500/20",
    delay: 0.4,
  },
  {
    icon: Zap,
    title: "API & Integration",
    subtitle: "Seamless Connectivity",
    description:
      "Connect all your business systems with powerful APIs and integrations. Create a unified ecosystem that eliminates data silos and improves efficiency.",
    benefits: [
      "Real-time data sync",
      "Third-party integrations",
      "Custom API development",
      "Microservices architecture",
    ],
    gradient: "from-yellow-500/20 to-orange-500/20",
    delay: 0.5,
  },
];

export function EnterpriseServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Business Solutions
            </span>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Expertise
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-12 max-w-xs"
          />

          <motion.p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-space-grotesk"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We deliver transformative software solutions that drive measurable
            business results. From AI-powered automation to business-scale
            applications, we build technology that gives you a competitive
            advantage.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: service.delay }}
              className="group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
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

                <CardHeader className="relative z-10 pb-4">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="h-8 w-8 text-primary" />
                  </motion.div>

                  <div className="space-y-2">
                    <Badge
                      variant="secondary"
                      className="text-xs font-space-grotesk"
                    >
                      {service.subtitle}
                    </Badge>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300 font-playfair">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits
                        .slice(0, 2)
                        .map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {benefit}
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* <motion.div
                    className="flex items-center text-primary font-medium text-sm pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </motion.div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
