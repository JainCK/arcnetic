"use client";

import { useState, useRef, useEffect } from "react";
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
    title: "AI & Machine Learning Development",
    subtitle: "Intelligent Solutions for Business Growth",
    description:
      "We build custom AI and ML solutions for predictive analytics, NLP, and automation to drive efficiency and give your business a competitive edge.",
    benefits: [
      "AI-driven operational cost reduction",
      "Automate complex business workflows",
      "Gain predictive insights for forecasting",
      "Implement 24/7 intelligent data monitoring",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    delay: 0,
  },
  {
    icon: Rocket,
    title: "Custom Enterprise Software Development",
    subtitle: "Scalable & Secure Business Applications",
    description:
      "We build high-performance, secure, and scalable custom enterprise software to streamline operations and support millions of users.",
    benefits: [
      "Guaranteed 99.9% application uptime",
      "Enterprise-grade multi-layer security",
      "Architecture built for unlimited scalability",
      "Dedicated 24/7 technical support",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    delay: 0.1,
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation Services",
    subtitle: "Modernize Your Legacy Systems & Infrastructure",
    description:
      "Modernize your business with our digital transformation services. We migrate legacy systems, re-architect apps for the cloud, and optimize IT infrastructure.",
    benefits: [
      "Boost operational efficiency up to 60%",
      "Achieve significant IT cost reduction",
      "Adopt future-proof cloud-native technology",
      "Ensure seamless system and data integration",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    delay: 0.2,
  },
  {
    icon: Shield,
    title: "Secure Cloud Infrastructure & DevOps",
    subtitle: "Managed Cloud Solutions for Enterprises",
    description:
      "We design, build, and manage secure, scalable cloud infrastructures on AWS, Azure, and GCP, ensuring data protection and business continuity.",
    benefits: [
      "Multi-layered, bank-grade security protocols",
      "High-performance global CDN deployment",
      "Automated scaling for optimal performance & cost",
      "Comprehensive disaster recovery planning",
    ],
    gradient: "from-orange-500/20 to-red-500/20",
    delay: 0.3,
  },
  {
    icon: Layers,
    title: "SaaS Application Development",
    subtitle: "From MVP to Scalable SaaS Platforms",
    description:
      "We build and launch your SaaS platform, from MVP to enterprise-grade, multi-tenant solutions designed for recurring revenue.",
    benefits: [
      "Secure multi-tenant architecture design",
      "Integrated subscription billing & management",
      "In-depth user & business analytics dashboards",
      "Support for global payment gateways",
    ],
    gradient: "from-indigo-500/20 to-purple-500/20",
    delay: 0.4,
  },
  {
    icon: Zap,
    title: "API Development & System Integration",
    subtitle: "Connecting Your Business-Critical Systems",
    description:
      "We create unified digital ecosystems with custom, secure, and reliable REST & GraphQL APIs to connect your software, databases, and third-party apps.",
    benefits: [
      "Real-time data synchronization across platforms",
      "Expert third-party service & API integrations",
      "Custom REST & GraphQL API development",
      "Scalable microservices-based architecture",
    ],
    gradient: "from-yellow-500/20 to-orange-500/20",
    delay: 0.5,
  },
];

export function EnterpriseServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isMobile ? 0.3 : 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: isMobile ? 0.2 : 0.4,
              delay: isMobile ? 0.05 : 0.1,
            }}
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

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-12 max-w-xs"
          />

          <motion.p
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-space-grotesk"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Our expertise covers the full spectrum of enterprise technology. We
            architect and deliver robust software solutions designed to solve
            complex challenges, enhance efficiency, and create new opportunities
            for your business.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <Card className="h-full border-2 border-transparent hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden cursor-pointer">
                {/* Static Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <CardHeader className="relative z-10 pb-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200"
                    whileHover={{ rotate: 2 }}
                    transition={{ duration: 0.2 }}
                  >
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

                <CardContent className="relative z-10 space-y-4">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 text-sm mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm text-primary">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits
                        .slice(0, 4)
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
