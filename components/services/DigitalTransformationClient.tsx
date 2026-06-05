"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Bot,
  Database,
  ChevronLeft,
  ChevronRight,
  Activity,
  Layers,
  Network,
  Settings,
  Cpu,
  BarChart,
  Zap,
  Server,
  Code2,
  Users
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================================
// 1. HERO ANIMATION: Holistic Orbit
// ==========================================================
function HeroOrbitAnimation() {
  const satellites = [
    { name: "Web Presence", icon: Globe, color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500/30" },
    { name: "AI Automation", icon: Bot, color: "text-emerald-400", bg: "bg-emerald-500/20", border: "border-emerald-500/30" },
    { name: "Mobile Ecosystem", icon: Smartphone, color: "text-purple-400", bg: "bg-purple-500/20", border: "border-purple-500/30" },
    { name: "Custom Software", icon: Database, color: "text-orange-400", bg: "bg-orange-500/20", border: "border-orange-500/30" },
  ];

  return (
    <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] flex items-center justify-center select-none overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-white/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
        
        {/* The Core */}
        <motion.div 
          className="absolute z-30 w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-white/20 bg-black flex flex-col items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.1)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)] animate-pulse" style={{ animationDuration: '3s' }} />
          <Activity className="w-8 h-8 text-white mb-2" />
          <span className="font-space-grotesk font-bold text-xs uppercase tracking-widest text-white">Business</span>
          <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-white/50">Core</span>
        </motion.div>

        {/* Orbit Rings */}
        <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-white/5 border-dashed" />
        <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/10" />

        {/* Orbiting Elements */}
        <motion.div 
          className="absolute w-full h-full z-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {satellites.map((sat, i) => {
            const angle = (i * 360) / satellites.length;
            // Place them on the outer ring radius (approx 160px for mobile, 210px for desktop)
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
            const radius = isMobile ? 130 : 180;
            
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div 
                key={sat.name}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
              >
                {/* Counter-rotate to keep upright */}
                <motion.div 
                  className="flex flex-col items-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border backdrop-blur-md ${sat.bg} ${sat.border} shadow-lg relative`}>
                    <sat.icon className={`w-5 h-5 ${sat.color}`} />
                    
                    {/* Data particle traveling to center */}
                    <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
                       <motion.div 
                          className={`w-1.5 h-1.5 rounded-full ${sat.color.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor]`}
                          animate={{ 
                            scale: [1, 0, 1],
                            opacity: [1, 0, 1],
                            x: [0, -x * 0.8],
                            y: [0, -y * 0.8]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.5,
                            ease: "easeInOut" 
                          }}
                       />
                    </div>
                  </div>
                  <span className="mt-2 font-mono text-[9px] text-white/50 uppercase whitespace-nowrap bg-black/50 px-2 py-0.5 rounded-md border border-white/5">{sat.name}</span>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}

// ==========================================================
// 2. STORYLINE NARRATIVE (horizontal circuit-node journey)
// ==========================================================
const storylineData = [
  {
    id: "01",
    stage: "Stage 01",
    label: "Audit",
    title: "Growth Requires Infrastructure.",
    text: "Digital transformation isn't just about adopting new tools; it's about fundamentally rewiring how your business operates from the ground up to prepare for massive scaling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    icon: Database,
    techBadges: ["Cloud Migration", "Tech Debt Audit", "Infrastructure"],
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    glowColor: "rgba(59, 130, 246, 0.15)",
    floatingBadges: [
      { name: "Cloud Audit", icon: Database, color: "text-blue-400" },
      { name: "Tech Debt", icon: Settings, color: "text-indigo-400" },
    ]
  },
  {
    id: "02",
    stage: "Stage 02",
    label: "Integrate",
    title: "The Macro Picture.",
    text: "We unify your entire digital footprint—aligning bespoke web frontends, mobile platforms, and internal backoffice portals into a single source of truth.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200",
    icon: Layers,
    techBadges: ["Unified APIs", "Omni-channel", "Ecosystem Mapping"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    glowColor: "rgba(168, 85, 247, 0.15)",
    floatingBadges: [
      { name: "Omni-Channel", icon: Network, color: "text-purple-400" },
      { name: "Sync Dashboard", icon: Layers, color: "text-pink-400" },
    ]
  },
  {
    id: "03",
    stage: "Stage 03",
    label: "Automate",
    title: "AI-Powered Workflows.",
    text: "Remove human operational bottlenecks. We deploy intelligent autonomous agents, custom LLM integrations, and robust API workflows operating 24/7.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    icon: Bot,
    techBadges: ["Autonomous Agents", "Custom LLMs", "Process Digitization"],
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    glowColor: "rgba(16, 185, 129, 0.15)",
    floatingBadges: [
      { name: "AI Agent", icon: Bot, color: "text-emerald-400" },
      { name: "Auto-Workflows", icon: Zap, color: "text-teal-400" },
    ]
  },
  {
    id: "04",
    stage: "Stage 04",
    label: "Scale",
    title: "Designed for 10x Capacity.",
    text: "Stop letting legacy systems hold you back. Deploy future-proof cloud infrastructure, fully automated operations, and scale your business without breaking a single core component.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200",
    icon: Cpu,
    techBadges: ["Elastic Cloud", "DevOps Pipelines", "10x Capacity"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    glowColor: "rgba(249, 115, 22, 0.15)",
    floatingBadges: [
      { name: "Metrics Hub", icon: Cpu, color: "text-orange-400" },
      { name: "10x Platform", icon: BarChart, color: "text-red-400" },
    ]
  }
];

function StorylineNarrative() {
  const [activeStep, setActiveStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const tempPauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const direction = activeStep >= prevStep ? 1 : -1;

  const togglePause = (val: boolean | ((prev: boolean) => boolean)) => {
    if (tempPauseTimeoutRef.current) {
      clearTimeout(tempPauseTimeoutRef.current);
    }
    setIsPaused(val);
  };

  const handleArrowNav = (direction: "prev" | "next") => {
    if (tempPauseTimeoutRef.current) {
      clearTimeout(tempPauseTimeoutRef.current);
    }

    const nextStep = direction === "next"
      ? (activeStep + 1) % storylineData.length
      : (activeStep - 1 + storylineData.length) % storylineData.length;

    setPrevStep(activeStep);
    setActiveStep(nextStep);
    setIsPaused(true);

    tempPauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const handleSelectStep = (index: number) => {
    setPrevStep(activeStep);
    setActiveStep(index);
  };

  // Ultra-smooth, non-laggy autoplay interval (runs on GPU-accelerated circle/bars transition)
  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(() => {
      setPrevStep(activeStep);
      setActiveStep((prev) => (prev + 1) % storylineData.length);
    }, 4500); // 4.5 seconds node active duration

    return () => clearTimeout(timeout);
  }, [isPaused, activeStep]);

  // Unified slide/fade entry/exit variants for the entire panel
  const panelVariants = {
    initial: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 80, damping: 22 }, // Softer spring for a smoother, luxurious glide
        opacity: { duration: 0.6, ease: "easeOut" as const }, // Slower, smoother crossfade
        staggerChildren: 0.08
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 80, damping: 22 },
        opacity: { duration: 0.4, ease: "easeIn" as const }
      }
    })
  };

  const textVariants = {
    initial: { y: 15, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 70, damping: 18 } // Softer, slower text entrance
    }
  };

  const imageVariants = {
    initial: { scale: 0.96, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 60, damping: 18 } // Gentle browser zoom
    }
  };

  return (
    <div 
      className="container mx-auto px-4 md:px-8 max-w-7xl group/roadmap"
    >
      
      {/* Header section reintroduced and styled beautifully */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
        <span className="font-space-grotesk text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          Transformation Roadmap
        </span>
        <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight">
          Rewiring Your Operations
        </h2>
        <p className="font-space-grotesk text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
          A systematic, four-stage architectural journey designed to audit legacy bottlenecks, unify ecosystems, automate friction, and scale capacity.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-between gap-4">
        {/* Left Arrow Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleArrowNav("prev");
          }}
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/10 bg-black/60 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all duration-300 z-30 shrink-0 shadow-lg -translate-y-10 sm:-translate-y-12"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Horizontal Sequential Circuit Connector Timeline */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between flex-1 pb-10 border-b border-white/5 mb-8 gap-6 md:gap-2 px-4">
          {storylineData.map((item, i) => {
            const isActive = activeStep === i;
            const isCompleted = activeStep > i;
            const isNodeCompleted = isCompleted || isActive;
            const IconComponent = item.icon;
            
            return (
              <React.Fragment key={item.id}>
                
                {/* Circular Interactive Node */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectStep(i);
                  }}
                  className="flex flex-col items-center gap-3 relative focus:outline-none group"
                >
                  <div className={`h-16 w-16 sm:h-20 sm:w-20 rounded-full flex items-center justify-center border-2 transition-all duration-500 relative ${
                    isActive 
                      ? "bg-black border-emerald-400/40 text-white scale-110 shadow-[0_0_25px_rgba(16,185,129,0.15)]" 
                      : isCompleted
                        ? "bg-emerald-500/5 border-emerald-500 text-emerald-400 scale-100"
                        : "bg-black border-white/10 text-white/30 hover:border-white/20 hover:text-white/60"
                  }`}>
                    
                    {/* Outer breathing ring for active node */}
                    {isActive && (
                      <div className="absolute inset-[-6px] rounded-full border border-emerald-400/10 animate-ping" style={{ animationDuration: '3s' }} />
                    )}

                    {/* Circular progress border that draws dynamically */}
                    {isActive && (
                      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-10" viewBox="0 0 80 80">
                        <motion.circle
                          cx="40"
                          cy="40"
                          r="37"
                          className="stroke-emerald-400 fill-none stroke-[2]"
                          strokeDasharray="232.5"
                          initial={{ strokeDashoffset: 232.5 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={isPaused ? { duration: 0.2 } : { duration: 4.5, ease: "linear" }}
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    
                    <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 relative z-10" />
                    
                    {/* Status Achievement Checkmark - Premium Animated SVG */}
                    <AnimatePresence>
                      {isNodeCompleted && (
                        <motion.div 
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="absolute -top-1 -right-1 h-5.5 w-5.5 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)] border border-black z-20"
                        >
                          <svg className="h-3 w-3 text-black stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" strokeWidth={3.5} />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="text-center space-y-0.5">
                    <div className={`font-space-grotesk text-[10px] sm:text-xs font-bold tracking-wider transition-colors ${
                      isActive ? "text-emerald-400" : isCompleted ? "text-emerald-500/70" : "text-white/30 group-hover:text-white/50"
                    }`}>
                      {item.label}
                    </div>
                    <div className="font-mono text-[9px] text-white/20 uppercase tracking-widest">
                      {item.stage}
                    </div>
                  </div>
                </button>

                {/* Animated Progress Arrow Connector */}
                {i < storylineData.length - 1 && (
                  <div className="hidden md:block relative flex-1 h-[2px] bg-white/5 min-w-[40px] mx-1 sm:mx-2 lg:mx-4">
                    {/* Completed / Loading Progress line */}
                    {isActive ? (
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-teal-400"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={isPaused ? { duration: 0.2 } : { duration: 4.5, ease: "linear" }}
                      />
                    ) : (
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-teal-400"
                        style={{ width: isCompleted ? "100%" : "0%" }}
                      />
                    )}
                    {/* The traveling glow pulse particle */}
                    {isActive ? (
                      <motion.div 
                        className="absolute top-1/2 -translate-y-1/2 w-5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 shadow-[0_0_10px_#10b981]"
                        initial={{ left: "calc(0% - 10px)" }}
                        animate={{ left: "calc(100% - 10px)" }}
                        transition={isPaused ? { duration: 0.2 } : { duration: 4.5, ease: "linear" }}
                      />
                    ) : (
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 shadow-[0_0_10px_#10b981]"
                        style={{ 
                          left: isCompleted ? "calc(100% - 10px)" : "calc(0% - 10px)",
                          opacity: isActive ? 1 : 0
                        }}
                      />
                    )}
                  </div>
                )}

              </React.Fragment>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleArrowNav("next");
          }}
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/10 bg-black/60 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all duration-300 z-30 shrink-0 shadow-lg -translate-y-10 sm:-translate-y-12"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Main Content & Mockup Panel */}
      <div 
        className="relative min-h-[440px] sm:min-h-[540px] lg:min-h-[380px]"
      >
        <AnimatePresence custom={direction}>
          {storylineData.map((item, i) => {
            if (activeStep !== i) return null;
            
            return (
              <motion.div
                key={`panel-${item.id}`}
                custom={direction}
                variants={panelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-x-0 top-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center"
              >
                {/* Left Side: Staggered Stage Description (5 cols) */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
                  <motion.div variants={textVariants} className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-space-grotesk text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
                        {item.stage} &mdash; {item.label}
                      </span>
                    </div>
                    
                    <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white font-medium leading-[1.1] tracking-tight">
                      {item.title}
                    </h3>
                  </motion.div>
                  
                  <motion.p variants={textVariants} className="font-space-grotesk text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
                    {item.text}
                  </motion.p>
                  
                  <motion.div variants={textVariants} className="flex flex-wrap gap-2 pt-2">
                    {item.techBadges.map((badge, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-mono text-[11px] text-white/80 shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </motion.div>
                </div>
                
                {/* Right Side: Staggered Sliding Webpage Dashboard Mockup (7 cols) */}
                <motion.div 
                  custom={direction}
                  variants={imageVariants}
                  className="lg:col-span-7 relative h-[320px] sm:h-[400px] lg:h-[440px] flex items-center justify-center"
                >
                  
                  {/* Ambient Background Glow matching active theme */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-[120px] opacity-25 rounded-full pointer-events-none z-0`} />
                  
                  {/* Elegant Glassmorphic Showcase Window */}
                  <div className="relative z-10 w-full h-full rounded-2xl border border-white/10 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
                    
                    {/* Browser Header Bar */}
                    <div className="h-9 px-4 bg-white/[0.03] border-b border-white/5 flex items-center justify-between pointer-events-none">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                      <div className="bg-white/5 rounded px-4 py-0.5 font-mono text-[9px] text-white/30 tracking-wider">
                        arcnetic.com/dashboard
                      </div>
                      <div className="w-4" />
                    </div>
                    
                    {/* Webpage Image Frame */}
                    <div className="flex-1 w-full h-full relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      
                      <Image 
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="w-full h-full object-cover opacity-90 transition-transform duration-[8s] scale-100 group-hover:scale-105"
                      />
                      
                      {/* Visual Hotspot */}
                      <div className="absolute top-6 right-6 z-20 flex items-center justify-center">
                        <motion.div 
                          className="absolute w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40"
                          animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="h-3 w-3 rounded-full bg-emerald-400 border border-white shadow" />
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Floating Decorative Badges overlapping the window */}
                  {item.floatingBadges.map((fBadge, fIdx) => {
                    const IconComponent = fBadge.icon;
                    const yOffset = fIdx % 2 === 0 ? [0, -10, 0] : [0, 10, 0];
                    const xOffset = fIdx % 2 === 0 ? [0, 6, 0] : [0, -6, 0];
                    
                    const positionClasses = fIdx === 0
                      ? "top-6 -left-4 sm:top-10 sm:-left-6"
                      : "bottom-10 -right-4 sm:bottom-12 sm:-right-6";
                      
                    return (
                      <motion.div
                        key={`floating-${fIdx}`}
                        className={`absolute z-20 ${positionClasses} backdrop-blur-md bg-black/60 border border-white/15 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
                        animate={{ 
                          y: yOffset,
                          x: xOffset
                        }}
                        transition={{ 
                          duration: 4 + fIdx * 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <IconComponent className={`h-3.5 w-3.5 ${fBadge.color}`} />
                        </div>
                        <span className="font-space-grotesk text-[10px] sm:text-xs font-semibold text-white/95 pr-1">
                          {fBadge.name}
                        </span>
                      </motion.div>
                    );
                  })}
                  
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

    </div>
  );
}

// ==========================================================
// 3. SUB-SERVICE CARDS
// ==========================================================
const subServices = [
  {
    icon: Network,
    title: "System Architecture Auditing",
    desc: "Identifying legacy bottlenecks and tech debt holding your operations back. We map your entire digital footprint and architect a modernization roadmap.",
    tags: ["Tech Debt", "Cloud Infrastructure", "Security"],
  },
  {
    icon: Layers,
    title: "Omni-Channel Strategy",
    desc: "Aligning your web, mobile, and internal portals into a single source of truth. Delivering a unified experience across all touchpoints.",
    tags: ["Unified API", "Data Lakes", "Microservices"],
  },
  {
    icon: Settings,
    title: "Process Digitization",
    desc: "Moving offline or siloed processes into automated, cloud-based workflows. Eliminating paper trails, manual data entry, and operational friction.",
    tags: ["Digital Workflows", "Paperless", "ERP"],
  },
  {
    icon: Users,
    title: "Technical Team Scaling",
    desc: "Providing the architectural blueprints, DevOps pipelines, and standard operating procedures for your internal teams to build upon seamlessly.",
    tags: ["DevOps", "Agile", "Team Augmentation"],
  },
];


function SubServiceCard({
  icon: Icon,
  title,
  desc,
  tags,
  index,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  tags: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-7 sm:p-9 border border-white/10 bg-[#050505] rounded-3xl hover:border-white/20 hover:bg-[#090909] transition-all duration-400 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.015] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 space-y-5">
        <div className="flex items-start justify-between">
          <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-space-grotesk text-xs text-white/20 font-bold tracking-widest">
            0{index + 1}
          </span>
        </div>

        <div>
          <h3 className="font-playfair text-2xl text-white mb-3 leading-tight">{title}</h3>
          <p className="font-space-grotesk text-sm text-white/50 leading-relaxed">{desc}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-[10px] text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-xs font-space-grotesk text-white/30 uppercase tracking-widest group-hover:text-white/60 transition-colors pt-2">
          <span>Explore Capability</span>
          <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================================
// 4. TECH STACK: Interactive Architecture Diagram
// ==========================================================
const stackNodes = [
  {
    id: "frontend",
    label: "Front-End Experience",
    icon: Code2,
    color: "bg-blue-500",
    textColor: "text-blue-400",
    border: "border-blue-500/30",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    description: "Multi-platform user interfaces engineered for speed, conversion, and fluid 60fps animations. We build unified components that look and feel native on any device screen.",
    tech: ["Next.js", "React Native", "TailwindCSS", "Framer Motion"],
  },
  {
    id: "backend",
    label: "Core Infrastructure",
    icon: Server,
    color: "bg-purple-500",
    textColor: "text-purple-400",
    border: "border-purple-500/30",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    description: "Highly scalable, secure backends capable of handling massive enterprise data volumes with microservices architecture designed for modular, decoupled growth.",
    tech: ["Node.js", "Go", "PostgreSQL", "AWS / Docker"],
  },
  {
    id: "automation",
    label: "Automation & AI Layer",
    icon: Zap,
    color: "bg-emerald-500",
    textColor: "text-emerald-400",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    description: "The connective workflow tissue that removes human operational friction. Autonomous agents, custom LLM pipelines, and orchestrators operating 24/7 in the background.",
    tech: ["n8n", "OpenAI / Claude", "Make.com", "Python scripts"],
  },
  {
    id: "data",
    label: "Data & Security Layer",
    icon: Database,
    color: "bg-orange-500",
    textColor: "text-orange-400",
    border: "border-orange-500/30",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    description: "Enterprise-grade analytical data warehouses, dynamic real-time reporting pipelines, and robust data lakes secured by industry-leading encryption and security standards.",
    tech: ["Snowflake", "PostgreSQL", "ETL Pipelines", "Kafka / Supabase"],
  }
];

function InteractiveStackDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth scroll-driven line height progression
  const lineHeight = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full pt-2 pb-12 md:pt-4 md:pb-20 overflow-visible">
      
      {/* Dynamic Curving S-Curve SVG Timeline Connecting Path */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-visible">
        <svg className="hidden md:block absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="line-glow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="33%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="66%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="active-line-glow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="33%" stopColor="#a855f7" />
              <stop offset="66%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          
          {/* Background track S-curve path connecting alternating nodes */}
          <path 
            d="M 42,12.5 Q 50,25 58,37.5 Q 50,50 42,62.5 Q 50,75 58,87.5" 
            fill="none" 
            stroke="url(#line-glow)" 
            strokeWidth="0.3" 
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Real-time scroll progress drawn S-curve path */}
          <motion.path 
            d="M 42,12.5 Q 50,25 58,37.5 Q 50,50 42,62.5 Q 50,75 58,87.5" 
            fill="none" 
            stroke="url(#active-line-glow)" 
            strokeWidth="0.4"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: lineHeight }}
          />
        </svg>
      </div>

      {/* 4 Stack Rows */}
      <div className="relative z-10 space-y-16 md:space-y-24 max-w-5xl mx-auto px-4 md:px-0">
        {stackNodes.map((node, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.section
              key={node.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-14 items-center justify-between relative ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              
              {/* NODE COLUMN: Stage Title & Pulsing Icon Card */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`w-full md:w-[45%] flex items-center gap-4 ${
                  isEven ? "md:justify-end md:text-right" : "md:justify-start md:text-left"
                }`}
              >
                {!isEven && (
                  <div className={`h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex items-center justify-center border border-white/10 bg-[#080808]/90 shadow-xl relative group shrink-0 ${node.glow}`}>
                    <node.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${node.textColor}`} />
                    <div className="absolute inset-[-4px] rounded-2xl border border-white/5 animate-pulse pointer-events-none" style={{ animationDuration: '3s' }} />
                  </div>
                )}
                
                <div className="space-y-1">
                  <span className="font-space-grotesk text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/40 block">
                    Layer 0{i + 1}
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-white font-semibold leading-tight tracking-tight">
                    {node.label}
                  </h3>
                </div>

                {isEven && (
                  <div className={`h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex items-center justify-center border border-white/10 bg-[#080808]/90 shadow-xl relative group shrink-0 ${node.glow}`}>
                    <node.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${node.textColor}`} />
                    <div className="absolute inset-[-4px] rounded-2xl border border-white/5 animate-pulse pointer-events-none" style={{ animationDuration: '3s' }} />
                  </div>
                )}
              </motion.div>

              {/* EMPTY CENTER CHANNEL GAP (Simulates space for S-Curve line) */}
              <div className="hidden md:block w-[6%] h-12" />

              {/* CARD COLUMN: Glassmorphism Explanation Card */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`w-full md:w-[49%] p-8 sm:p-10 rounded-[32px] border bg-[#050505]/95 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between ${node.border}`}
              >
                {/* Subtle Ambient Accent Glow inside card */}
                <div className={`absolute -top-20 -right-20 w-44 h-44 rounded-full blur-[70px] opacity-15 ${node.color} pointer-events-none`} />
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <node.icon className={`w-5 h-5 ${node.textColor}`} />
                    <span className="font-space-grotesk text-[10px] uppercase tracking-[0.2em] text-white/40">Explanation</span>
                  </div>
                  
                  <p className="font-space-grotesk text-sm text-white/60 leading-relaxed">
                    {node.description}
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="font-space-grotesk text-[9px] uppercase tracking-[0.2em] text-white/40">Technologies</div>
                    <div className="flex flex-wrap gap-2">
                      {node.tech.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-[10px] text-white/80 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.section>
          );
        })}
      </div>

    </div>
  );
}


// ==========================================================
// 5. MAIN EXPORT
// ==========================================================
export function DigitalTransformationClient() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative overflow-x-hidden">

      {/* Ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(18,18,18,0.9),#000000_75%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[url('/noise.svg')] mix-blend-overlay" />
      </div>

      {/* ========================================================
          HERO SECTION
         ======================================================== */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 sm:pt-24 lg:pt-32 pb-20 border-b border-white/10 z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 mt-0 lg:-mt-12">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">

            {/* Left: Typography */}
            <div className="lg:col-span-6 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
              >
                <Activity className="h-3 w-3 text-white" />
                <span className="font-space-grotesk text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/60">
                  Digital Transformation Strategy & Business Scaling
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.92] tracking-tight text-white"
              >
                Scale Without<br />
                <span className="italic">Breaking</span><br />
                Your Core.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-space-grotesk text-base sm:text-lg text-white/55 leading-relaxed border-l-2 border-white/30 pl-6"
              >
                We deliver comprehensive digital transformation strategies to scale your infrastructure, automate workflows, and accelerate enterprise growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link href="/contact" className="group">
                  <div className="flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 font-space-grotesk text-xs uppercase tracking-widest font-semibold hover:bg-white/90 transition-all shadow-lg group-hover:scale-105 duration-300">
                    <span>Audit My Infrastructure</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Right: Orbit Animation */}
            <motion.div
              className="lg:col-span-6 mt-8 lg:mt-10"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <HeroOrbitAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          STORYLINE SHOWCASE
         ======================================================== */}
      <section id="scale-process" className="relative py-24 sm:py-32 border-b border-white/5 z-10 bg-[#030303] overflow-hidden">
        <StorylineNarrative />
      </section>

      {/* ========================================================
          THE ARCNETIC APPROACH
         ======================================================== */}
      <section className="relative py-24 md:py-32 border-b border-white/5 z-10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 space-y-4">
              <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/40">
                How We Scale Your Business
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl text-white leading-tight">
                Assess. Build.<br />Automate. Scale.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="font-space-grotesk text-white/55 text-base sm:text-lg leading-relaxed border-l border-white/10 pl-6">
                We implement the <strong className="text-white/90">Arcnetic approach</strong>: We first stabilize your digital footprint (Web/Mobile), streamline your operations (Custom Software), remove repetitive friction (AI), and deploy a resilient infrastructure that handles 10x your current volume without breaking a sweat.
              </p>
              
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { step: "01", label: "Assess", desc: "Audit Tech Debt" },
                  { step: "02", label: "Build", desc: "Solidify Footprint" },
                  { step: "03", label: "Automate", desc: "Remove Friction" },
                  { step: "04", label: "Scale", desc: "10x Capacity" },
                ].map((item) => (
                  <div key={item.step} className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="font-space-grotesk text-xs uppercase tracking-widest text-white/30 mb-2">{item.step}</div>
                    <div className="font-playfair text-xl text-white mb-1">{item.label}</div>
                    <div className="font-space-grotesk text-[10px] uppercase tracking-widest text-white/50">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SUB-SERVICES GRID
         ======================================================== */}
      <section className="relative py-24 md:py-36 px-4 md:px-8 bg-[#030303] border-b border-white/5 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14 md:mb-20 text-center space-y-4">
            <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/50 px-4 py-1 border border-white/10 bg-white/5 rounded-full">
              Transformation Pillars
            </span>
            <h2 className="font-playfair text-4xl sm:text-6xl text-white tracking-tight">
              Rewiring Your Ecosystem
            </h2>
            <p className="font-space-grotesk text-sm text-white/45 max-w-xl mx-auto">
              We look at the macro picture, combining bespoke presence, internal software, and automation to build systems meant for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {subServices.map((svc, i) => (
              <SubServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          TECH STACK: Interactive Diagram
         ======================================================== */}
      <section className="relative py-24 md:py-36 px-4 md:px-8 border-b border-white/5 z-10 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6 md:mb-8 text-center space-y-4">
            <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/40">
              The Architecture
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl text-white leading-tight">
              Full Stack Synthesis
            </h2>
            <p className="font-space-grotesk text-sm text-white/50 max-w-xl mx-auto">
              Click the nodes below to explore the technologies that power our digital transformation ecosystems, from the user interface down to the automated backend.
            </p>
          </div>
          
          <InteractiveStackDiagram />
        </div>
      </section>

      {/* ========================================================
          CINEMATIC CTA
         ======================================================== */}
      <section className="relative py-28 md:py-48 px-4 bg-[#050505] z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.012] rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="space-y-8">
            <div className="inline-flex h-14 w-14 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/40">
              <Activity className="h-6 w-6" />
            </div>
            <h2 className="font-playfair text-4xl sm:text-6xl md:text-7xl text-white font-bold leading-tight">
              Ready to Scale<br />Your Operations?
            </h2>
            <p className="font-space-grotesk text-sm sm:text-base md:text-lg text-white/45 max-w-xl mx-auto">
              Stop letting legacy tech hold your growth hostage. Let's map out a digital transformation roadmap tailored to your 10x goals.
            </p>
            <div className="pt-6">
              <Link href="/contact" className="inline-block group">
                <div className="relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-10 sm:px-14 py-4 sm:py-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <span className="flex items-center gap-4 font-space-grotesk text-xs sm:text-sm tracking-[0.2em] font-medium uppercase">
                    Book a Strategy Call
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
