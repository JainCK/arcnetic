"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Code,
  Palette,
  Database,
  Briefcase,
  Users,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const [activeTeam, setActiveTeam] = useState("leadership");

  const teams = [
    { id: "leadership", label: "Leadership", icon: Target },
    { id: "development", label: "Development", icon: Code },
    { id: "design", label: "Design", icon: Palette },
    { id: "operations", label: "Operations", icon: Briefcase },
  ];

  const teamMembers = {
    leadership: [
      {
        name: "Alex Thompson",
        role: "Chief Executive Officer",
        bio: "Visionary leader with 15+ years in tech innovation and strategic growth.",
        expertise: ["Strategy", "Innovation", "Leadership"],
        social: { linkedin: "#", twitter: "#", email: "#" },
      },
      {
        name: "Sarah Chen",
        role: "Chief Technology Officer",
        bio: "Technology evangelist passionate about scalable solutions and team development.",
        expertise: ["Architecture", "Team Building", "Innovation"],
        social: { linkedin: "#", github: "#", email: "#" },
      },
      {
        name: "Marcus Rodriguez",
        role: "Chief Operating Officer",
        bio: "Operations expert focused on efficiency, quality, and sustainable growth.",
        expertise: ["Operations", "Quality", "Process"],
        social: { linkedin: "#", email: "#" },
      },
    ],
    development: [
      {
        name: "Emma Wilson",
        role: "Senior Full-Stack Developer",
        bio: "Full-stack architect specializing in modern web technologies and cloud solutions.",
        expertise: ["React", "Node.js", "AWS", "TypeScript"],
        social: { github: "#", linkedin: "#", email: "#" },
      },
      {
        name: "David Kim",
        role: "Mobile Development Lead",
        bio: "Mobile development expert crafting seamless cross-platform experiences.",
        expertise: ["React Native", "iOS", "Android", "Flutter"],
        social: { github: "#", linkedin: "#", email: "#" },
      },
      {
        name: "Lisa Park",
        role: "DevOps Engineer",
        bio: "Infrastructure specialist ensuring reliable, scalable, and secure deployments.",
        expertise: ["Docker", "Kubernetes", "CI/CD", "Security"],
        social: { github: "#", linkedin: "#", email: "#" },
      },
    ],
    design: [
      {
        name: "Jordan Taylor",
        role: "Lead UX/UI Designer",
        bio: "Design strategist creating intuitive experiences that delight users.",
        expertise: ["User Research", "Prototyping", "Design Systems"],
        social: { linkedin: "#", twitter: "#", email: "#" },
      },
      {
        name: "Maya Patel",
        role: "Visual Designer",
        bio: "Creative professional specializing in brand identity and visual storytelling.",
        expertise: ["Branding", "Illustration", "Animation"],
        social: { linkedin: "#", twitter: "#", email: "#" },
      },
    ],
    operations: [
      {
        name: "Ryan Johnson",
        role: "Project Manager",
        bio: "Agile practitioner ensuring smooth project delivery and team collaboration.",
        expertise: ["Agile", "Scrum", "Team Management"],
        social: { linkedin: "#", email: "#" },
      },
      {
        name: "Sofia Martinez",
        role: "Quality Assurance Lead",
        bio: "Quality champion dedicated to delivering bug-free, exceptional software.",
        expertise: ["Testing", "Automation", "Quality Systems"],
        social: { linkedin: "#", email: "#" },
      },
    ],
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return Linkedin;
      case "twitter":
        return Twitter;
      case "github":
        return Github;
      case "email":
        return Mail;
      default:
        return Mail;
    }
  };

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative">
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
            Meet Our Amazing Team
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Our diverse team of experts brings together creativity, technical
            excellence, and strategic thinking to deliver outstanding results
            for every project.
          </motion.p>
        </motion.div>

        {/* Team Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-2 border border-border/50">
            <div className="flex flex-wrap gap-2">
              {teams.map((team) => {
                const IconComponent = team.icon;
                return (
                  <button
                    key={team.id}
                    onClick={() => setActiveTeam(team.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTeam === team.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="font-medium">{team.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          key={activeTeam}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {teamMembers[activeTeam as keyof typeof teamMembers]?.map(
            (member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 group overflow-hidden">
                  <CardContent className="p-6">
                    {/* Profile Picture Placeholder */}
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary/70" />
                    </div>

                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-1 font-playfair">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                      {Object.entries(member.social).map(([platform, url]) => {
                        const IconComponent = getSocialIcon(platform);
                        return (
                          <Button
                            key={platform}
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
                            asChild
                          >
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <IconComponent className="h-4 w-4" />
                            </a>
                          </Button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                Join Our Growing Team
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're always looking for talented individuals who share our
                passion for innovation and excellence. Explore our current
                openings and become part of our amazing journey.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="/careers">View Open Positions</a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
