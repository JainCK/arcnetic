"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  PenTool,
  Search,
  Cpu,
  Zap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Code2,
  TerminalSquare,
  Phone,
  Image as ImageIcon,
  MessageCircle,
  Camera
} from "lucide-react";
import Link from "next/link";

// ==========================================================
// 1. HERO ANIMATION: Code entering and splitting to iOS/Android
// ==========================================================
function HeroDeviceAnimation() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center select-none perspective-[1200px]">
      
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-blue-500/[0.08] rounded-full blur-[100px]" />
        <div className="absolute top-[20%] w-[200px] h-[200px] bg-emerald-500/[0.05] rounded-full blur-[80px]" />
      </div>

      {/* 3D Phone Container */}
      <motion.div 
        initial={{ rotateX: 55, rotateY: -15, rotateZ: 20, scale: 0.85, y: 40 }}
        animate={{ rotateX: 35, rotateY: -18, rotateZ: 15, scale: 1, y: 0 }}
        whileHover={{ rotateX: 25, rotateY: -12, rotateZ: 10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 80, damping: 25, mass: 1 }}
        className="relative w-[280px] h-[540px] sm:w-[320px] sm:h-[620px] rounded-[56px] shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Phone Frame (Titanium look) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#3a3a3a] via-[#5a5a5a] to-[#2a2a2a] rounded-[56px] shadow-[20px_40px_60px_rgba(0,0,0,0.8),_inset_0_0_0_2px_rgba(255,255,255,0.2)] flex items-center justify-center p-[4px]">
          
          {/* Side Buttons */}
          <div className="absolute top-[100px] -left-[2px] w-[4px] h-[26px] bg-[#2a2a2a] rounded-l-md shadow-inner" />
          <div className="absolute top-[140px] -left-[2px] w-[4px] h-[50px] bg-[#2a2a2a] rounded-l-md shadow-inner" />
          <div className="absolute top-[200px] -left-[2px] w-[4px] h-[50px] bg-[#2a2a2a] rounded-l-md shadow-inner" />
          <div className="absolute top-[160px] -right-[2px] w-[4px] h-[70px] bg-[#2a2a2a] rounded-r-md shadow-inner" />

          {/* Screen Bezel */}
          <div className="w-full h-full bg-black rounded-[52px] p-[6px] relative overflow-hidden">
            
            {/* Display Area */}
            <div className="w-full h-full bg-[#050505] rounded-[46px] relative overflow-hidden flex flex-col">
              
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-40 flex items-center justify-between px-2.5 shadow-[0_4px_10px_rgba(0,0,0,0.5)] border border-white/[0.02]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-[#222]" />
                <div className="w-1 h-1 rounded-full bg-emerald-500/40 shadow-[0_0_4px_rgba(16,185,129,0.5)]" />
              </div>

              {/* Status Bar Indicators */}
              <div className="absolute top-4 right-6 flex items-center gap-1.5 z-40">
                <div className="w-3 h-2.5 flex items-end gap-[1px]">
                  <div className="w-[2px] h-[30%] bg-white/60 rounded-sm" />
                  <div className="w-[2px] h-[50%] bg-white/60 rounded-sm" />
                  <div className="w-[2px] h-[70%] bg-white/60 rounded-sm" />
                  <div className="w-[2px] h-[100%] bg-white/60 rounded-sm" />
                </div>
                <div className="w-4 h-2.5 rounded-sm border border-white/40 flex items-center p-[1px]">
                  <div className="w-[70%] h-full bg-white/80 rounded-sm" />
                </div>
              </div>
              <div className="absolute top-4 left-6 z-40 font-mono text-[9px] text-white/80 font-medium">
                10:28
              </div>

              {/* Screen Content Split */}
              <div className="absolute top-0 bottom-0 left-0 right-0 flex pt-14">
                {/* iOS Side */}
                <motion.div 
                  className="flex-1 border-r border-white/5 relative overflow-hidden flex flex-col items-center pt-6 bg-gradient-to-br from-[#0a0a0a] to-[#000]"
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                  <div className="font-space-grotesk text-[8px] uppercase tracking-[0.2em] text-white/30 mb-5 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/[0.05]">iOS App</div>
                  
                  {/* Premium iOS UI Mockup */}
                  <div className="w-[85%] space-y-3">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                        <div className="w-full h-full bg-[#111] rounded-full flex items-center justify-center">
                           <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500/40 to-purple-500/40 blur-sm" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-14 h-2 rounded-full bg-white/40" />
                        <div className="w-20 h-3 rounded-full bg-white/90" />
                      </div>
                    </div>
                    
                    {/* Glassmorphism Card */}
                    <div className="w-full h-[110px] rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] backdrop-blur-xl p-4 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                       <div className="flex justify-between items-start">
                         <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                         </div>
                         <div className="w-12 h-4 rounded-full bg-emerald-400/20 flex items-center justify-center border border-emerald-400/30">
                            <span className="text-[7px] text-emerald-400 font-bold uppercase tracking-wider">+2.4%</span>
                         </div>
                       </div>
                       <div className="space-y-1.5 mt-2">
                         <div className="w-[60%] h-4 rounded-full bg-white/80" />
                         <div className="w-[40%] h-2 rounded-full bg-white/30" />
                       </div>
                    </div>
                    
                    {/* List Items */}
                    <div className="space-y-2 pt-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="w-full h-[54px] rounded-2xl bg-white/[0.03] border border-white/[0.03] flex items-center px-3 gap-3">
                           <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center">
                             <Layers className="w-4 h-4 text-purple-400" />
                           </div>
                           <div className="flex-1 space-y-1.5">
                             <div className="w-[70%] h-2 rounded-full bg-white/60" />
                             <div className="w-[40%] h-1.5 rounded-full bg-white/20" />
                           </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* iOS Dock */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-[46px] rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md flex items-center justify-around px-4 shadow-lg">
                      <div className="w-8 h-8 rounded-xl bg-green-500/80 flex items-center justify-center shadow-sm">
                        <Phone className="w-4 h-4 text-white" fill="currentColor" />
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-blue-500/80 flex items-center justify-center shadow-sm">
                        <MessageCircle className="w-4 h-4 text-white" fill="currentColor" />
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-400 to-purple-500 flex items-center justify-center shadow-sm">
                        <ImageIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                  </div>
                </motion.div>

                {/* Android Side */}
                <motion.div 
                  className="flex-1 relative overflow-hidden flex flex-col items-center pt-6 bg-gradient-to-bl from-[#0a0a0a] to-[#000]"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                >
                  <div className="font-space-grotesk text-[8px] uppercase tracking-[0.2em] text-emerald-400/50 mb-5 bg-emerald-500/[0.05] px-2.5 py-1 rounded-sm border border-emerald-500/10">Android</div>
                  
                  {/* Premium Android UI Mockup */}
                  <div className="w-[85%] space-y-3 relative h-full">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-[0_4px_16px_rgba(16,185,129,0.25)] flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/50 rounded-md" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-14 h-2 rounded-sm bg-white/40" />
                        <div className="w-20 h-3 rounded-sm bg-white/90" />
                      </div>
                    </div>
                    
                    {/* Material Card */}
                    <div className="w-full h-[110px] rounded-2xl bg-[#151515] border-b-[3px] border-emerald-500/40 shadow-[0_12px_24px_rgba(0,0,0,0.8)] p-4 flex flex-col justify-between relative overflow-hidden">
                       <div className="flex justify-between items-start z-10">
                         <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-emerald-400" />
                         </div>
                       </div>
                       <div className="space-y-1.5 mt-2 z-10">
                         <div className="w-[60%] h-4 rounded-sm bg-white/80" />
                         <div className="w-[40%] h-2 rounded-sm bg-white/30" />
                       </div>
                       {/* Material Ripple effect simulation */}
                       <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/[0.06] rounded-full scale-150 translate-x-6 -translate-y-6" />
                    </div>
                    
                    {/* List Items */}
                    <div className="space-y-2 pt-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="w-full h-[54px] rounded-xl bg-[#0f0f0f] border border-white/[0.02] flex items-center px-3 gap-3">
                           <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                             <TerminalSquare className="w-4 h-4 text-cyan-400" />
                           </div>
                           <div className="flex-1 space-y-1.5">
                             <div className="w-[70%] h-2 rounded-sm bg-white/60" />
                             <div className="w-[40%] h-1.5 rounded-sm bg-white/20" />
                           </div>
                        </div>
                      ))}
                    </div>

                    {/* Android Bottom Nav */}
                    <div className="absolute bottom-6 left-0 right-0 h-[48px] bg-[#111] border-t border-emerald-500/20 flex items-center justify-around px-4 shadow-[0_-4px_12px_rgba(0,0,0,0.5)]">
                      <Phone className="w-4 h-4 text-white/50" />
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <ImageIcon className="w-4 h-4 text-white/50" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Home indicator (Bottom Bar) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/30 rounded-full z-40" />
              
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}


// ==========================================================
// 2. HOW IT HELPS: Touch-optimized Side-Scrolling Carousel
// ==========================================================
const benefits = [
  {
    title: "One Codebase",
    subtitle: "Unified Engineering",
    desc: "Deploy to both iOS and Android without doubling your engineering budget. You manage one codebase, one backlog, and one team.",
    color: "from-blue-500/20 to-transparent",
    border: "border-blue-500/20",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Premium Native Experience",
    subtitle: "Uncompromised Quality",
    desc: "Indistinguishable from native builds, complete with fluid 60fps animations and deep device integration.",
    color: "from-purple-500/20 to-transparent",
    border: "border-purple-500/20",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Fast Time-to-Market",
    subtitle: "Accelerated Deployment",
    desc: "Drastically cut down time-to-market while reaching your users globally, regardless of what device they hold.",
    color: "from-emerald-500/20 to-transparent",
    border: "border-emerald-500/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cost-Effective Scaling",
    subtitle: "Lean Operations",
    desc: "Maintain a lean team. Updates and feature rollouts are seamless without needing specialized iOS and Android engineers.",
    color: "from-orange-500/20 to-transparent",
    border: "border-orange-500/20",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Over-the-Air Updates",
    subtitle: "Instant Iteration",
    desc: "Deploy critical bug fixes and feature updates instantly to your users' devices without waiting for app store approval.",
    color: "from-pink-500/20 to-transparent",
    border: "border-pink-500/20",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  }
];

const displayBenefits = [...benefits, ...benefits]; // Duplicate to 10 items for perfect seamless wrapping

function CarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const tempPauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLg = windowWidth >= 1024;
  const isSm = windowWidth >= 640;
  
  // Dynamic horizontal offset per card to keep them compact on smaller viewports
  const spread = windowWidth >= 1440 
    ? 180 
    : windowWidth >= 1280 
      ? 160 
      : windowWidth >= 1024 
        ? 140 
        : windowWidth >= 768 
          ? 110 
          : 80;
  
  // Hide the outer background cards (distance = 2) on screens smaller than 1280px to prevent overlap with arrows
  const maxDistance = windowWidth >= 1280 ? 2 : 1;

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

    const nextIdx = direction === "next"
      ? (activeIndex + 1) % displayBenefits.length
      : (activeIndex - 1 + displayBenefits.length) % displayBenefits.length;

    setActiveIndex(nextIdx);
    setIsPaused(true);

    tempPauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayBenefits.length);
    }, 2800); // Faster looping
    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x; // Changed to horizontal swipe
    // Lower threshold for a more responsive swipe feel
    if (swipe < -20) {
      setActiveIndex((prev) => (prev + 1) % displayBenefits.length);
    } else if (swipe > 20) {
      setActiveIndex((prev) => (prev - 1 + displayBenefits.length) % displayBenefits.length);
    }
  };

  return (
    <div 
      className="w-full py-4 sm:py-8 relative flex flex-col items-center justify-center px-4 overflow-hidden group/carousel"
    >
      
      {/* Left Arrow Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleArrowNav("prev");
        }}
        className="absolute left-2 sm:left-6 lg:left-12 xl:left-16 2xl:left-24 top-1/2 -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/10 bg-black/60 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all duration-300 z-30 shadow-lg"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleArrowNav("next");
        }}
        className="absolute right-2 sm:right-6 lg:right-12 xl:right-16 2xl:right-24 top-1/2 -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/10 bg-black/60 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all duration-300 z-30 shadow-lg"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      <div className="relative w-full max-w-[360px] sm:max-w-[500px] lg:max-w-[640px]">
        {/* Carousel Window */}
        <div 
          className="w-full h-[260px] sm:h-[320px] lg:h-[380px] relative"
        >
        {displayBenefits.map((benefit, i) => {
          // Visual Infinite Looping Math for 10 items
          let distance = i - activeIndex;
          if (distance > Math.floor(displayBenefits.length / 2)) {
            distance -= displayBenefits.length;
          } else if (distance < -Math.floor(displayBenefits.length / 2)) {
            distance += displayBenefits.length;
          }
          
          const isVisible = Math.abs(distance) <= maxDistance;
          const isActive = distance === 0;
          
          return (
            <motion.div
              key={`${benefit.title}-${i}`}
              drag="x" // Horizontal drag
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              onClick={(e) => {
                e.stopPropagation();
                if (activeIndex !== i) {
                  setActiveIndex(i);
                }
              }}
              animate={{
                x: distance * spread, // Horizontal spread
                y: 0,
                scale: 1 - Math.abs(distance) * 0.12, // Scale down more aggressively for depth
                zIndex: 10 - Math.abs(distance),
                opacity: isVisible ? 1 : 0,
              }}
              // Softer, smoother spring similar to mobile OS app switchers
              transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.8 }}
              className={`group absolute top-0 left-0 w-full h-full p-6 sm:p-8 lg:p-10 rounded-[32px] border bg-[#080808] shadow-[0_30px_60px_rgba(0,0,0,0.9)] ${benefit.border} cursor-grab active:cursor-grabbing flex flex-col justify-center overflow-hidden`}
              style={{ pointerEvents: isVisible ? "auto" : "none" }}
            >
              {/* Background Stock Image with Gradient Overlay */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover opacity-[0.14] mix-blend-luminosity transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#080808]/85 to-[#080808]" />
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-20`} />
              </div>

              {/* Dynamic Loader Top Border Accent Line */}
              {isActive ? (
                <motion.div 
                  className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${benefit.color}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={isPaused ? { duration: 0.2 } : { duration: 2.8, ease: "linear" }}
                />
              ) : (
                <div 
                  className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${benefit.color}`}
                  style={{ width: "0%" }}
                />
              )}
              <div className={`absolute -top-24 -right-24 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br ${benefit.color} rounded-full blur-[60px] opacity-15`} />
              
              <div className="relative z-10">
                <span className="font-space-grotesk text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3 sm:mb-4 block">
                  0{(i % 5) + 1} // {benefit.subtitle}
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="font-space-grotesk text-xs sm:text-sm text-white/55 leading-relaxed max-w-lg">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
      
      {/* Pagination Indicators */}
      <div className="mt-12 sm:mt-16 mb-4 flex gap-2 sm:gap-3 z-20">
        {benefits.map((_, originalIndex) => (
          <button
            key={originalIndex}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(originalIndex);
              togglePause(true);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              (activeIndex % 5) === originalIndex ? "bg-white w-8 sm:w-10" : "bg-white/20 hover:bg-white/40 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ==========================================================
// 3. SUB-SERVICE CARDS
// ==========================================================
const subServices = [
  {
    icon: Smartphone,
    title: "Cross-Platform App Development",
    desc: "Single codebase deployment to App Store and Google Play using React Native. Maintain feature parity across platforms automatically.",
    tags: ["React Native", "iOS", "Android", "TypeScript"],
  },
  {
    icon: PenTool,
    title: "Mobile UI/UX Prototyping",
    desc: "High-fidelity, interactive mobile wireframes designed for thumb zones, touch targets, and modern gesture-based navigation.",
    tags: ["Figma", "Interaction Design", "Wireframing"],
  },
  {
    icon: Search,
    title: "App Store Optimization (ASO)",
    desc: "Ensuring your app is discoverable upon launch. Keyword optimization, screenshot design, and conversion rate optimization.",
    tags: ["ASO", "Growth", "App Store", "Google Play"],
  },
  {
    icon: Cpu,
    title: "Native API Bridging",
    desc: "Custom modules for complex device hardware access when standard libraries fall short. Seamless integration with native code.",
    tags: ["Swift", "Kotlin", "JSI", "Hardware APIs"],
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
// 4. TECH STACK: Layered Architecture Graphic
// ==========================================================
function LayeredStackGraphic() {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] select-none flex items-center justify-center perspective-[1200px]">
      
      {/* Centre glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-64 h-64 bg-white/[0.02] rounded-full blur-[80px]" />
      </div>

      <div className="relative w-[280px] sm:w-[340px] transform-style-3d rotate-x-12 rotate-y-[-15deg] hover:rotate-x-0 hover:rotate-y-0 transition-transform duration-1000 ease-out z-10">
        
        {/* Layer 1: JS/React */}
        <motion.div 
          className="absolute w-full h-[120px] rounded-2xl border border-blue-500/30 bg-[#050505]/80 backdrop-blur-md shadow-[0_20px_40px_rgba(59,130,246,0.1)] flex flex-col items-center justify-center transform translate-z-[80px]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ transform: "translateZ(80px) translateY(-100px)" }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none" />
          <TerminalSquare className="w-6 h-6 text-blue-400 mb-2" />
          <h4 className="font-space-grotesk font-semibold text-white tracking-widest text-sm uppercase">JS Application Layer</h4>
          <p className="font-mono text-[10px] text-white/50 mt-1">React Native • Redux/Zustand • TypeScript</p>
        </motion.div>

        {/* Connecting Lines */}
        <div className="absolute w-[2px] h-[60px] bg-gradient-to-b from-blue-500/50 to-white/20 left-[20%] z-0" style={{ transform: "translateZ(40px) translateY(-40px)" }} />
        <div className="absolute w-[2px] h-[60px] bg-gradient-to-b from-blue-500/50 to-white/20 right-[20%] z-0" style={{ transform: "translateZ(40px) translateY(-40px)" }} />

        {/* Layer 2: Bridge */}
        <motion.div 
          className="absolute w-full h-[100px] rounded-2xl border border-white/20 bg-[#0a0a0a]/90 backdrop-blur-md shadow-[0_20px_40px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center transform translate-z-[0px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transform: "translateZ(0px) translateY(0px)" }}
        >
          <Layers className="w-5 h-5 text-white/70 mb-2" />
          <h4 className="font-space-grotesk font-semibold text-white tracking-widest text-sm uppercase">The Bridge / JSI</h4>
          <p className="font-mono text-[10px] text-white/50 mt-1">Async JSON • Expo Modules</p>
        </motion.div>

        {/* Connecting Lines */}
        <div className="absolute w-[2px] h-[60px] bg-gradient-to-b from-white/20 to-emerald-500/50 left-[20%] z-0" style={{ transform: "translateZ(-40px) translateY(100px)" }} />
        <div className="absolute w-[2px] h-[60px] bg-gradient-to-b from-white/20 to-emerald-500/50 right-[20%] z-0" style={{ transform: "translateZ(-40px) translateY(100px)" }} />

        {/* Layer 3: Native */}
        <motion.div 
          className="absolute w-full h-[120px] rounded-2xl border border-emerald-500/30 bg-[#050505]/80 backdrop-blur-md shadow-[0_20px_40px_rgba(16,185,129,0.1)] flex flex-col items-center justify-center transform translate-z-[-80px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ transform: "translateZ(-80px) translateY(160px)" }}
        >
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full pointer-events-none" />
          <Cpu className="w-6 h-6 text-emerald-400 mb-2" />
          <h4 className="font-space-grotesk font-semibold text-white tracking-widest text-sm uppercase">Native Modules Layer</h4>
        </motion.div>

      </div>
    </div>
  );
}

// ==========================================================
// 5. MAIN EXPORT
// ==========================================================
export function MobileDevClient() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative overflow-x-hidden">

      {/* Ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(18,18,18,0.9),#000000_75%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[url('/noise.svg')] mix-blend-overlay" />
        <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px]" />
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
                <Smartphone className="h-3 w-3 text-white" />
                <span className="font-space-grotesk text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/60">
                  Cross Platform Mobile App Development
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.92] tracking-tight text-white"
              >
                Build Once.<br />
                <span className="italic">Deploy</span><br />
                Everywhere.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-space-grotesk text-base sm:text-lg text-white/55 leading-relaxed border-l-2 border-white/30 pl-6"
              >
                Expert React Native mobile app development for high-performance, cross-platform iOS and Android experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link href="/contact" className="group">
                  <div className="flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 font-space-grotesk text-xs uppercase tracking-widest font-semibold hover:bg-white/90 transition-all shadow-lg group-hover:scale-105 duration-300">
                    <span>Start Your Project</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>

            </div>

            {/* Right: Device Animation */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <HeroDeviceAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          HOW IT HELPS: Carousel
         ======================================================== */}
      <section id="how-it-helps" className="relative py-16 md:py-20 border-b border-white/5 z-10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-6 md:mb-8 space-y-4">
            <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/40">
              The React Native Advantage
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl text-white leading-tight max-w-2xl">
              By utilizing React Native, we drastically cut down time-to-market.
            </h2>
          </div>
        </div>
        
        {/* Full bleed carousel */}
        <CarouselSection />
      </section>

      {/* ========================================================
          SUB-SERVICES GRID
         ======================================================== */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-[#030303] border-b border-white/5 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14 md:mb-20 text-center space-y-4">
            <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/50 px-4 py-1 border border-white/10 bg-white/5 rounded-full">
              Mobile Capabilities
            </span>
            <h2 className="font-playfair text-4xl sm:text-6xl text-white tracking-tight">
              What We Deliver
            </h2>
            <p className="font-space-grotesk text-sm text-white/45 max-w-xl mx-auto">
              From high-fidelity prototyping to app store optimization, we handle the entire lifecycle of your mobile application.
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
          TECH STACK: Layered Graphic
         ======================================================== */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 border-b border-white/5 z-10 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/40">
                The Stack
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl text-white leading-tight">
                Architected for Performance
              </h2>
              <p className="font-space-grotesk text-sm text-white/50 leading-relaxed">
                We utilize the modern React Native architecture, leveraging Expo and JSI (JavaScript Interface) to eliminate the traditional bridge bottleneck, ensuring fluid 60fps performance and instantaneous native module calls.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "React Native for universal declarative UI",
                  "Expo framework for rapid builds and OTA updates",
                  "Redux or Zustand for deterministic state management",
                  "TypeScript for end-to-end type safety",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="h-px w-5 bg-white/30 mt-2.5 shrink-0" />
                    <p className="font-space-grotesk text-sm text-white/60">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Layered Stack Graphic */}
            <div className="order-1 md:order-2">
              <LayeredStackGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CINEMATIC CTA
         ======================================================== */}
      <section className="relative py-20 md:py-28 px-4 bg-[#050505] z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.012] rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="space-y-8">
            <div className="inline-flex h-14 w-14 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/40">
              <Smartphone className="h-6 w-6" />
            </div>
            <h2 className="font-playfair text-4xl sm:text-6xl md:text-7xl text-white font-bold leading-tight">
              Ready to Launch<br />on Both Stores?
            </h2>
            <p className="font-space-grotesk text-sm sm:text-base md:text-lg text-white/45 max-w-xl mx-auto">
              Stop maintaining two separate codebases. Let's build a unified, high-performance mobile application that your users will love.
            </p>
            <div className="pt-6">
              <Link href="/contact" className="inline-block group">
                <div className="relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-10 sm:px-14 py-4 sm:py-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <span className="flex items-center gap-4 font-space-grotesk text-xs sm:text-sm tracking-[0.2em] font-medium uppercase">
                    Discuss Your Mobile App
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
