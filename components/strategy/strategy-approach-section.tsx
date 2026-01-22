"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Cog,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export function StrategyApproachSection() {
  const ref = useRef(null);
  
  const strategyPhases = [
    {
      id: "01",
      title: "Discovery & Analysis",
      icon: Search,
      description: "Deep dive into your business, market, and competitive landscape to identify high-value opportunities.",
      details: [
        "Stakeholder Workshops",
        "Market Intelligence",
        "Gap Analysis",
        "Opportunity Mapping",
      ],
    },
    {
      id: "02",
      title: "Strategic Design",
      icon: Lightbulb,
      description: "Crafting a comprehensive roadmap aligned with your vision, ensuring every technical decision supports a business goal.",
      details: [
        "Framework Development",
        "Tech Roadmap",
        "Risk Assessment",
        "Resource Planning",
      ],
    },
    {
      id: "03",
      title: "Implementation Planning",
      icon: Cog,
      description: "Defining the execution blueprint with clear milestones, ensuring a seamless transition from strategy to reality.",
      details: [
        "Execution Roadmap",
        "Team Structure",
        "Tech Stack Selection",
        "QA Framework",
      ],
    },
    {
      id: "04",
      title: "Execution & Optimization",
      icon: BarChart3,
      description: "Agile implementation with continuous monitoring, allowing for rapid adaptation and consistent delivery.",
      details: [
        "Agile Deployment",
        "Real-time Analytics",
        "Continuous Refinement",
        "Strategy Review",
      ],
    },
    {
      id: "05",
      title: "Success Measurement",
      icon: CheckCircle,
      description: "Comprehensive evaluation of ROI and impact, providing the data needed for future growth and scaling.",
      details: [
        "KPI Tracking",
        "ROI Analysis",
        "Impact Reporting",
        "Future Recommendations",
      ],
    },
  ];

  return (
    <section id="strategy-approach" ref={ref} className="py-20 md:py-32 bg-black relative">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="font-playfair text-3xl md:text-6xl text-white mb-6">
            The 5-Phase Framework
          </h2>
          <p className="font-space-grotesk text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            Our proprietary methodology designed to minimize risk and maximize impact.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px md:before:mx-auto before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          
          {strategyPhases.map((phase, index) => (
            <div key={phase.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* Center Dot */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center rounded-full border border-white/20 bg-black z-10 group-hover:border-white group-hover:bg-white transition-all duration-500">
                <phase.icon className="w-4 h-4 text-white/50 group-hover:text-black transition-colors" />
              </div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[calc(100%-3rem)] md:w-[calc(50%-3rem)] ml-12 md:ml-0 p-6 md:p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-[#111] transition-all duration-300 group-hover:border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-space-grotesk text-xs text-white/50 tracking-widest font-medium">PHASE {phase.id}</span>
                </div>
                
                <h3 className="font-playfair text-2xl text-white mb-3 group-hover:text-white transition-colors">
                  {phase.title}
                </h3>
                
                <p className="font-space-grotesk text-sm text-white/50 leading-relaxed mb-6">
                  {phase.description}
                </p>

                {/* Details List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/5">
                  {phase.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                      <span className="font-space-grotesk text-xs text-white/60">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}