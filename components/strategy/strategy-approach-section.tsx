"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; // Added motion and useInView imports
import {
  Search,
  Lightbulb,
  Cog,
  BarChart3,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Brain,
  Target,
  Rocket,
} from "lucide-react"; // Added all missing lucide-react imports
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function StrategyApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [activePhase, setActivePhase] = useState(0);

  const nextPhase = () => {
    setActivePhase((prev) => (prev + 1) % strategyPhases.length);
  };

  const prevPhase = () => {
    setActivePhase(
      (prev) => (prev - 1 + strategyPhases.length) % strategyPhases.length
    );
  };

  const strategicPillars = [
    {
      icon: Brain,
      title: "Data-Driven Insights",
      description:
        "Every strategy begins with comprehensive data analysis and market intelligence to ensure informed decision-making.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Target,
      title: "Goal-Oriented Planning",
      description:
        "We align every strategic initiative with your specific business objectives and measurable outcomes.",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Rocket,
      title: "Innovation-First Approach",
      description:
        "Leveraging cutting-edge technologies and methodologies to create sustainable competitive advantages.",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  const strategyPhases = [
    {
      phase: 1,
      title: "Discovery & Analysis",
      icon: Search,
      description:
        "Deep dive into your business, market, and competitive landscape",
      details: [
        "Stakeholder interviews and workshops",
        "Market research and competitive analysis",
        "Current state assessment and gap analysis",
        "Opportunity identification and prioritization",
      ],
      duration: "2-3 weeks",
    },
    {
      phase: 2,
      title: "Strategic Design",
      icon: Lightbulb,
      description: "Craft comprehensive strategy aligned with your vision",
      details: [
        "Strategic framework development",
        "Technology roadmap creation",
        "Resource allocation planning",
        "Risk assessment and mitigation strategies",
      ],
      duration: "3-4 weeks",
    },
    {
      phase: 3,
      title: "Implementation Planning",
      icon: Cog,
      description: "Detailed execution roadmap with clear milestones",
      details: [
        "Project roadmap and timeline development",
        "Team structure and role definition",
        "Technology stack selection",
        "Quality assurance framework",
      ],
      duration: "1-2 weeks",
    },
    {
      phase: 4,
      title: "Execution & Optimization",
      icon: BarChart3,
      description: "Agile implementation with continuous monitoring",
      details: [
        "Agile development and deployment",
        "Performance monitoring and analytics",
        "Continuous optimization and refinement",
        "Regular strategy reviews and adjustments",
      ],
      duration: "Ongoing",
    },
    {
      phase: 5,
      title: "Success Measurement",
      icon: CheckCircle,
      description: "Comprehensive evaluation and future planning",
      details: [
        "KPI tracking and performance analysis",
        "ROI measurement and reporting",
        "Success story documentation",
        "Future strategy recommendations",
      ],
      duration: "Continuous",
    },
  ];

  return (
    <section id="strategy-approach" ref={ref} className="py-20  relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Strategic Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair">
            Our Strategic Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Built on three core pillars that ensure every strategy delivers
            measurable, sustainable results for your business.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {strategicPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 group">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <pillar.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-playfair">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategy Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-4xl font-bold mb-6 text-foreground font-playfair">
            Our Strategic Process
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A proven 5-phase methodology that transforms your vision into
            actionable, results-driven strategies.
          </p>
        </motion.div>

        {/* Interactive Process Timeline */}
        <div className="max-w-7xl mx-auto relative">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Mobile Phase Navigation */}
            <div className="mb-8">
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {React.createElement(strategyPhases[activePhase].icon, {
                      className: "h-5 w-5 text-primary",
                    })}
                    <div>
                      <div className="font-medium text-sm">
                        Phase {strategyPhases[activePhase].phase}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {strategyPhases[activePhase].title}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevPhase}
                      className="w-8 h-8 p-0"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextPhase}
                      className="w-8 h-8 p-0"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {/* Progress indicator */}
                <div className="mt-3 flex gap-1">
                  {strategyPhases.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        index === activePhase ? "bg-primary" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Phase Details */}
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6"
            >
              {/* Phase Content */}
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {React.createElement(strategyPhases[activePhase].icon, {
                      className: "h-5 w-5 text-primary",
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-primary font-medium mb-1">
                      Phase {strategyPhases[activePhase].phase}
                    </div>
                    <h4 className="text-xl font-bold text-foreground font-playfair leading-tight">
                      {strategyPhases[activePhase].title}
                    </h4>
                  </div>
                </div>

                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {strategyPhases[activePhase].description}
                </p>

                <div className="space-y-3 mb-6">
                  {strategyPhases[activePhase].details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground leading-relaxed">
                        {detail}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Duration:</span>
                  <span>{strategyPhases[activePhase].duration}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout with Content Between Arrows */}
          <div className="hidden md:flex items-start gap-6">
            {/* Left Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevPhase}
              className="w-12 h-12 rounded-xl hover:bg-primary/10 bg-background/80 backdrop-blur-sm flex-shrink-0 mt-60"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            {/* Center Content Area */}
            <div className="flex-1 max-w-6xl ">
              {/* Phase Navigation Tabs */}
              <div className="flex justify-center mb-16">
                <div className="flex gap-2 bg-background/80 backdrop-blur-sm rounded-2xl p-2">
                  {strategyPhases.map((phase, index) => (
                    <button
                      key={phase.phase}
                      onClick={() => setActivePhase(index)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm ${
                        activePhase === index
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {React.createElement(phase.icon, {
                        className: "h-4 w-4",
                      })}
                      <span className="font-medium">Phase {phase.phase}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Phase Content */}
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 gap-2 items-start"
              >
                {/* Phase Details */}
                <div className="ml-25">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      {React.createElement(strategyPhases[activePhase].icon, {
                        className: "h-6 w-6 text-primary",
                      })}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-primary font-medium mb-1">
                        Phase {strategyPhases[activePhase].phase}
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-playfair leading-tight">
                        {strategyPhases[activePhase].title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-md text-muted-foreground mb-4 leading-relaxed">
                    {strategyPhases[activePhase].description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {strategyPhases[activePhase].details.map(
                      (detail, index) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground leading-relaxed">
                            {detail}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium">Duration:</span>
                    <span>{strategyPhases[activePhase].duration}</span>
                  </div>
                </div>

                {/* Phase Visualization - Smaller for Desktop */}
                <div>
                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 max-w-lg">
                    <CardContent className="p-12">
                      <div className="w-25 h-25 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                        {React.createElement(strategyPhases[activePhase].icon, {
                          className: "h-10 w-10 text-primary/70",
                        })}
                      </div>
                      <div className="mt-4 text-center">
                        <div className="text-sm font-bold text-foreground mb-1">
                          Phase Visualization
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {strategyPhases[activePhase].phase} of{" "}
                          {strategyPhases.length}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>

            {/* Right Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextPhase}
              className="w-12 h-12 rounded-xl hover:bg-primary/10 bg-background/80 backdrop-blur-sm flex-shrink-0 mt-60"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
