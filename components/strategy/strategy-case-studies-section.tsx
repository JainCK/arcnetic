"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  ArrowRight,
  Star,
  Building,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function StrategyCaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Revolution",
      industry: "Retail Technology",
      client: "TechMart Global",
      challenge: "Legacy system modernization for 10M+ users",
      solution: "Microservices architecture with AI-powered recommendations",
      results: {
        revenue: "+150%",
        performance: "60% faster",
        users: "300% growth",
        satisfaction: "95% rating",
      },
      metrics: [
        { icon: TrendingUp, label: "Revenue Growth", value: "150%" },
        { icon: Clock, label: "Performance Boost", value: "60%" },
        { icon: Users, label: "User Growth", value: "300%" },
        { icon: Star, label: "Satisfaction", value: "95%" },
      ],
      technologies: ["React", "Node.js", "AWS", "AI/ML", "Microservices"],
      timeline: "8 months",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      title: "FinTech Innovation",
      industry: "Financial Services",
      client: "SecureBank Pro",
      challenge: "Real-time fraud detection and prevention system",
      solution: "AI-powered threat detection with blockchain security",
      results: {
        fraud: "-95%",
        processing: "50ms",
        compliance: "100%",
        savings: "$2.3M",
      },
      metrics: [
        { icon: TrendingUp, label: "Fraud Reduction", value: "95%" },
        { icon: Zap, label: "Processing Speed", value: "50ms" },
        { icon: Building, label: "Compliance", value: "100%" },
        { icon: DollarSign, label: "Cost Savings", value: "$2.3M" },
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "Blockchain",
        "Kubernetes",
        "Redis",
      ],
      timeline: "12 months",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 3,
      title: "Healthcare Platform",
      industry: "Healthcare Technology",
      client: "MediConnect Solutions",
      challenge: "Telemedicine platform for rural healthcare access",
      solution: "Cloud-native platform with IoT integration",
      results: {
        reach: "500K+",
        response: "85% faster",
        satisfaction: "98%",
        costs: "-40%",
      },
      metrics: [
        { icon: Users, label: "Patients Reached", value: "500K+" },
        { icon: Clock, label: "Response Time", value: "85%" },
        { icon: Star, label: "Satisfaction", value: "98%" },
        { icon: DollarSign, label: "Cost Reduction", value: "40%" },
      ],
      technologies: ["React Native", "Django", "IoT", "WebRTC", "Azure"],
      timeline: "10 months",
      color: "from-purple-500/20 to-pink-500/20",
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair">
            Success Stories That Inspire
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real-world examples of how our strategic approach transforms
            businesses and creates measurable impact across industries.
          </p>
        </motion.div>

        {/* Case Study Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12 overflow-x-auto"
        >
          <div className="flex gap-2 bg-background/80 backdrop-blur-sm rounded-2xl p-2 border border-border/50">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap ${
                  activeCase === index
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <div className="font-medium">{study.title}</div>
                <div className="text-xs opacity-80">{study.industry}</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Case Study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Case Study Details */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                  <Building className="h-4 w-4" />
                  {caseStudies[activeCase].industry}
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3 font-playfair">
                  {caseStudies[activeCase].title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  Client: {caseStudies[activeCase].client}
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {caseStudies[activeCase].challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {caseStudies[activeCase].solution}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-foreground mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudies[activeCase].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Project Timeline:</span>
                <span>{caseStudies[activeCase].timeline}</span>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                View Full Case Study
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Results Metrics */}
            <div>
              <Card
                className={`border-primary/20 bg-gradient-to-br ${caseStudies[activeCase].color}`}
              >
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-foreground mb-6 font-playfair">
                    Measurable Results
                  </h4>

                  <div className="grid grid-cols-2 gap-6">
                    {caseStudies[activeCase].metrics.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <metric.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1 font-playfair">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-background/50 rounded-xl">
                    <h5 className="font-bold text-foreground mb-3">
                      Client Testimonial
                    </h5>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "The strategic approach and technical expertise
                      demonstrated by Arcnetic transformed our business
                      completely. The results exceeded all our expectations."
                    </p>
                    <div className="flex items-center gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
