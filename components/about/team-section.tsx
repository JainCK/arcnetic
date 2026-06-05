"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function LeaderAvatar({ src, name, priority = false }: { src: string; name: string; priority?: boolean }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image 
      src={imgSrc} 
      alt={name}
      fill
      sizes="(max-width: 768px) 240px, 240px"
      priority={priority}
      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
      onError={() => {
        setImgSrc(`https://api.dicebear.com/7.x/avataaars/svg?seed=${name.split(' ')[0]}&eyebrows=defaultNatural&mouth=smile`);
      }}
    />
  );
}

function TeamMemberAvatar({ src, name }: { src: string; name: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image 
      src={imgSrc} 
      alt={name}
      width={56}
      height={56}
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      onError={() => {
        setImgSrc(`https://api.dicebear.com/7.x/avataaars/svg?seed=${name.split(' ')[0]}&eyebrows=defaultNatural&mouth=smile`);
      }}
    />
  );
}

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Adidev Manoj",
    role: "Full Stack Developer",
    avatar: "/images/team/Adidev.png",
  },
  {
    name: "Binil K Joseph",
    role: "Full Stack Developer",
    avatar: "/images/team/Binil.png",
  },
  {
    name: "Kadeeja Manika R",
    role: "UI/UX & Social Media Designer",
    avatar: "/images/team/Kadheeja.png",
  },
  {
    name: "Sindhuprabha K",
    role: "Growth and BDM",
    avatar: "/images/team/Sindhuprabha.png",
  },
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* SECTION 1: CEO & CTO Leadership */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="font-space-grotesk text-xs uppercase tracking-[0.25em] text-white/40 block mb-4">
            The Leadership
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            Minds Behind the Machine.
          </h2>
          <p className="font-space-grotesk text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our visionary leaders who set the direction, raise the bar, and push Arcnetic to engineer what others only imagine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto mb-36">
          {/* CEO - Aswin P kalyan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-60 h-60 mb-8">
              {/* Outer Orbiting Ring */}
              <div className="absolute inset-0 border border-white/10 rounded-full scale-105 animate-[spin_40s_linear_infinite]" />
              {/* Middle Orbiting Ring */}
              <div className="absolute inset-2 border border-white/20 rounded-full scale-100 animate-[spin_25s_linear_infinite_reverse]" />
              {/* Inner Ring */}
              <div className="absolute inset-4 border border-white/30 rounded-full scale-95 shadow-[0_0_20px_rgba(255,255,255,0.03)]" />
              {/* Image Container */}
              <div className="absolute inset-6 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors duration-500 bg-zinc-950">
                <LeaderAvatar src="/images/team/Aswin.png" name="Aswin P kalyan" />
              </div>
            </div>
            <h3 className="font-playfair text-2xl text-white mb-1 tracking-wide group-hover:text-white transition-colors duration-300">
              Aswin P kalyan
            </h3>
            <span className="font-space-grotesk text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3 block">
              Co-Founder and CEO
            </span>
            <p className="font-space-grotesk text-white/50 text-xs max-w-xs leading-relaxed">
              Visionary leader driving Arcnetic's mission to engineer the inevitable and transform businesses globally.
            </p>
          </motion.div>

          {/* CTO - Jain C Kuriakose */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-60 h-60 mb-8">
              {/* Outer Orbiting Ring */}
              <div className="absolute inset-0 border border-white/10 rounded-full scale-105 animate-[spin_45s_linear_infinite_reverse]" />
              {/* Middle Orbiting Ring */}
              <div className="absolute inset-2 border border-white/20 rounded-full scale-100 animate-[spin_30s_linear_infinite]" />
              {/* Inner Ring */}
              <div className="absolute inset-4 border border-white/30 rounded-full scale-95 shadow-[0_0_20px_rgba(255,255,255,0.03)]" />
              {/* Image Container */}
              <div className="absolute inset-6 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors duration-500 bg-zinc-950">
                <LeaderAvatar src="/images/team/Jain.png" name="Jain C Kuriakose" />
              </div>
            </div>
            <h3 className="font-playfair text-2xl text-white mb-1 tracking-wide group-hover:text-white transition-colors duration-300">
              Jain C Kuriakose
            </h3>
            <span className="font-space-grotesk text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3 block">
              Co-Founder and CTO
            </span>
            <p className="font-space-grotesk text-white/50 text-xs max-w-xs leading-relaxed">
              Mastermind behind Arcnetic's premium backend architecture and dynamic engineering systems.
            </p>
          </motion.div>
        </div>

        {/* SECTION 2 & 3 Combined: Clean flat dark-black layout exactly matching reference image */}
        <div className="max-w-5xl mx-auto text-center mt-20">

          {/* Sub-section title before team grid */}
          <div className="mb-12">
            <span className="font-space-grotesk text-xs uppercase tracking-[0.25em] text-white/40 block mb-3">
              The Collective
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-white tracking-tight">
              The Full Pack.
            </h2>
          </div>

          {/* Current Team Members Grid - Responsive 1x4 layout */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 justify-items-center max-w-5xl mx-auto mb-20"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="flex items-center gap-4 w-full max-w-[240px]"
              >
                {/* Member Avatar */}
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-zinc-900 border border-white/10 flex-shrink-0 flex items-center justify-center shadow-lg">
                  <TeamMemberAvatar src={member.avatar} name={member.name} />
                </div>

                {/* Member Info - Split into Name and Role stack */}
                <div className="flex flex-col text-left">
                  <h4 className="font-space-grotesk font-bold text-white text-sm tracking-wide leading-tight">
                    {member.name}
                  </h4>
                  <span className="font-space-grotesk text-[10px] text-white/50 uppercase tracking-wider mt-1">
                    {member.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Think you belong here?
          </h2>
          <p className="font-space-grotesk text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            We are always looking for extraordinary people — those who don't just want a job, but want to shape what comes next. If you're built to engineer the inevitable, there's a seat for you in the pack.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex items-center justify-center gap-6">
            <Link 
              href="/careers"
              className="group inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-white font-space-grotesk tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
            >
              JOIN THE PACK
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
