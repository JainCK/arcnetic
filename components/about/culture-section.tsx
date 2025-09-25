"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Coffee,
  Gamepad2,
  Music,
  BookOpen,
  Dumbbell,
  Camera,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function CultureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [activeTab, setActiveTab] = useState("workspace");

  const cultureAspects = [
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description:
        "Flexible hours, remote work options, and wellness programs to keep our team happy and productive.",
    },
    {
      icon: Gamepad2,
      title: "Fun & Games",
      description:
        "Regular team building activities, game nights, and hackathons to foster creativity and collaboration.",
    },
    {
      icon: Music,
      title: "Creative Environment",
      description:
        "Open spaces designed to inspire innovation, with music, art, and comfortable work areas.",
    },
    {
      icon: BookOpen,
      title: "Learning Culture",
      description:
        "Continuous learning opportunities, conferences, certifications, and knowledge sharing sessions.",
    },
    {
      icon: Dumbbell,
      title: "Health & Wellness",
      description:
        "Gym memberships, mental health support, and wellness programs for our team's well-being.",
    },
    {
      icon: Camera,
      title: "Memorable Moments",
      description:
        "Team outings, celebration events, and creating lasting memories together as one family.",
    },
  ];

  const tabs = [
    { id: "workspace", label: "Workspace" },
    { id: "team", label: "Team Events" },
    { id: "benefits", label: "Benefits" },
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
            Our Culture & Environment
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            At Arcnetic, we believe that great work happens when people feel
            valued, inspired, and supported in an environment that encourages
            growth and creativity.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {cultureAspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <aspect.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 font-playfair">
                    {aspect.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {aspect.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Gallery Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Life at Arcnetic
            </h3>
            <p className="text-muted-foreground">
              Explore different aspects of our workplace culture
            </p>
          </div> */}

        {/* Tab Navigation */}
        {/* <div className="flex justify-center mb-8">
            <div className="bg-muted/50 rounded-xl p-1 flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div> */}
      </div>

      {/* Gallery Grid */}
      {/* <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={`${activeTab}-${item}`}
                className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"></div>
                  <p className="text-sm text-muted-foreground">
                    {activeTab === "workspace" && `Office Space ${item}`}
                    {activeTab === "team" && `Team Event ${item}`}
                    {activeTab === "benefits" && `Benefit ${item}`}
                  </p>
                </div>
              </div>
            ))}
          </motion.div> */}
      {/* </motion.div>
      </div> */}
    </section>
  );
}
