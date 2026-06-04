"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Globe,
  Monitor,
  Activity,
  Terminal as TerminalIcon,
  Cpu,
  Zap,
  Search,
  Sparkles,
  Award,
  Shield,
  Clock,
  Compass,
  BarChart3,
  MousePointerClick,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 1. PERSPECTIVE MORPHING CANVAS COMPONENT
// ==========================================
function MorphingWireframeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Refs for high-performance canvas access without triggering loop re-initialization
  const scrollProgressRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress as it scrolls through screen
      const totalScroll = rect.height + windowHeight * 0.2;
      const currentScroll = windowHeight - rect.top;
      
      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
      setScrollProgress(progress);
      scrollProgressRef.current = progress;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      const newMouse = { x, y };
      setMouse(newMouse);
      mouseRef.current = newMouse;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      const context = canvas.getContext("2d");
      if (context) {
        context.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };
    window.addEventListener("resize", handleResize);

    // Layout configuration in local coordinates (-200 to 200)
    const browserFrame = { x: -160, y: -100, w: 320, h: 200, r: 6 };
    const elements = [
      { id: "header", x: -150, y: -90, w: 300, h: 16, type: "header" },
      { id: "sidebar", x: -150, y: -64, w: 50, h: 154, type: "sidebar" },
      { id: "card1", x: -90, y: -64, w: 75, h: 46, type: "card", title: "LCP", delay: 0.1 },
      { id: "card2", x: -5, y: -64, w: 75, h: 46, type: "card", title: "CLS", delay: 0.2 },
      { id: "card3", x: 80, y: -64, w: 70, h: 46, type: "card", title: "INP", delay: 0.3 },
      { id: "mainChart", x: -90, y: -8, w: 160, h: 98, type: "chart" },
      { id: "metrics", x: 80, y: -8, w: 70, h: 98, type: "metrics" }
    ];

    let pulseTime = 0;

    // Project coordinates
    const project = (
      px: number,
      py: number,
      pz: number,
      rotX: number,
      rotY: number,
      viewW: number,
      viewH: number
    ) => {
      // Rotate Y
      const x1 = px * Math.cos(rotY) - pz * Math.sin(rotY);
      const z1 = px * Math.sin(rotY) + pz * Math.cos(rotY);

      // Rotate X
      const y2 = py * Math.cos(rotX) - z1 * Math.sin(rotX);
      const z2 = py * Math.sin(rotX) + pz * Math.cos(rotX);

      // Simple perspective scaling
      const fov = 400;
      const scale = fov / (fov + z2);
      const finalX = x1 * scale + viewW / 2;
      const finalY = y2 * scale + viewH / 2;

      return { x: finalX, y: finalY, scale };
    };

    const render = () => {
      pulseTime += 0.03;
      const viewW = canvas.offsetWidth;
      const viewH = canvas.offsetHeight;

      ctx.clearRect(0, 0, viewW, viewH);

      // Phase transitions
      // progress: 0 to 0.4: slow rotation, wireframe lines only
      // progress: 0.4 to 0.8: snapping straight, morphing to solid cards, glowing green/violet
      const morphProgress = Math.max(0, Math.min(1, (scrollProgressRef.current - 0.2) * 2.5));

      // Calculate rotations using ref values
      const targetRotX = (1 - morphProgress) * (-0.2 + mouseRef.current.y * 0.15);
      const targetRotY = (1 - morphProgress) * (0.35 + mouseRef.current.x * 0.15);
      const targetRotZ = (1 - morphProgress) * 0.05;

      // Draw background ambient grids
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      const gridSize = 40;
      for (let x = 0; x < viewW; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, viewH);
        ctx.stroke();
      }
      for (let y = 0; y < viewH; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(viewW, y);
        ctx.stroke();
      }

      // Draw active elements
      const draw3dBox = (
        x: number,
        y: number,
        w: number,
        h: number,
        z: number,
        isFilled: boolean,
        fillColor: string,
        strokeColor: string,
        glowColor?: string
      ) => {
        // Compute 4 projected corners
        const c1 = project(x, y, z, targetRotX, targetRotY, viewW, viewH);
        const c2 = project(x + w, y, z, targetRotX, targetRotY, viewW, viewH);
        const c3 = project(x + w, y + h, z, targetRotX, targetRotY, viewW, viewH);
        const c4 = project(x, y + h, z, targetRotX, targetRotY, viewW, viewH);

        // Fill path
        ctx.beginPath();
        ctx.moveTo(c1.x, c1.y);
        ctx.lineTo(c2.x, c2.y);
        ctx.lineTo(c3.x, c3.y);
        ctx.lineTo(c4.x, c4.y);
        ctx.closePath();

        if (isFilled) {
          ctx.fillStyle = fillColor;
          ctx.fill();
        }

        ctx.strokeStyle = strokeColor;
        ctx.stroke();

        // Optional glow effect in high fidelity mode
        if (glowColor && morphProgress > 0.4) {
          ctx.shadowBlur = 15 * morphProgress;
          ctx.shadowColor = glowColor;
          ctx.strokeStyle = glowColor;
          ctx.stroke();
          ctx.shadowBlur = 0; // reset
        }
      };

      // 1. DRAW BROWSER MAIN WINDOW FRAME
      const browserStroke = `rgba(255, 255, 255, ${0.1 + morphProgress * 0.25})`;
      const browserFill = `rgba(10, 10, 10, ${0.4 + morphProgress * 0.45})`;
      draw3dBox(
        browserFrame.x,
        browserFrame.y,
        browserFrame.w,
        browserFrame.h,
        0,
        true,
        browserFill,
        browserStroke,
        morphProgress > 0.6 ? "rgba(255, 255, 255, 0.1)" : undefined
      );

      // Draw fake browser dots
      const dotCoords = [-145, -137, -129];
      dotCoords.forEach((cx, idx) => {
        const dot = project(cx, -90, 0, targetRotX, targetRotY, viewW, viewH);
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2.5, 0, Math.PI * 2);
        if (morphProgress > 0.5) {
          ctx.fillStyle = idx === 0 ? "rgba(255,255,255,0.4)" : idx === 1 ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.9)";
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
        }
        ctx.fill();
      });

      // 2. DRAW EACH NESTED WEB COMPONENT
      elements.forEach((el) => {
        // Animate positions slightly on morph progress
        const offsetZ = (1 - morphProgress) * (el.type === "card" ? 15 : el.type === "chart" ? 10 : 5);
        const fillAlpha = morphProgress * 0.15;
        const colorHue = "rgba(255, 255, 255"; // white theme

        const fillStyle = `rgba(255, 255, 255, ${0.01 + fillAlpha})`;
        const strokeStyle = `rgba(255, 255, 255, ${0.1 + morphProgress * 0.2})`;

        draw3dBox(
          el.x,
          el.y,
          el.w,
          el.h,
          offsetZ,
          true,
          fillStyle,
          strokeStyle,
          morphProgress > 0.7 ? `${colorHue}, 0.15)` : undefined
        );

        // Sub-elements content
        if (el.type === "header") {
          const lineP1 = project(el.x + 30, el.y + 8, offsetZ, targetRotX, targetRotY, viewW, viewH);
          const lineP2 = project(el.x + 120, el.y + 8, offsetZ, targetRotX, targetRotY, viewW, viewH);
          ctx.beginPath();
          ctx.moveTo(lineP1.x, lineP1.y);
          ctx.lineTo(lineP2.x, lineP2.y);
          ctx.strokeStyle = `rgba(255,255,255, ${0.15 + morphProgress * 0.25})`;
          ctx.stroke();
        }

        if (el.type === "sidebar") {
          // Draw sidebar skeleton rows
          for (let rowY = el.y + 12; rowY < el.y + el.h - 10; rowY += 16) {
            const p1 = project(el.x + 10, rowY, offsetZ, targetRotX, targetRotY, viewW, viewH);
            const p2 = project(el.x + el.w - 10, rowY, offsetZ, targetRotX, targetRotY, viewW, viewH);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255,255,255, ${0.08 + morphProgress * 0.15})`;
            ctx.stroke();
          }
        }

        if (el.type === "card") {
          // Draw card metric text or lines
          const pTitle = project(el.x + 8, el.y + 12, offsetZ, targetRotX, targetRotY, viewW, viewH);
          ctx.font = "bold 8px system-ui";
          ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + morphProgress * 0.5})`;
          ctx.fillText(el.title || "", pTitle.x, pTitle.y);

          // Draw score value
          const pVal = project(el.x + 8, el.y + 32, offsetZ, targetRotX, targetRotY, viewW, viewH);
          ctx.font = "bold 14px system-ui";
          if (morphProgress > 0.6) {
            ctx.fillStyle = "#ffffff"; // white text
            ctx.fillText(el.title === "LCP" ? "0.8s" : el.title === "CLS" ? "0.01" : "15ms", pVal.x, pVal.y);
          } else {
            ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
            ctx.fillText("--", pVal.x, pVal.y);
          }
        }

        if (el.type === "chart") {
          // Neon chart drawing
          const points = [];
          const segments = 16;
          for (let i = 0; i <= segments; i++) {
            const px = el.x + (el.w / segments) * i;
            // Sine waves representing search traffic
            const wave = Math.sin(i * 0.4 + pulseTime) * (15 + morphProgress * 15);
            const py = el.y + el.h / 2 - wave + 10;
            points.push(project(px, py, offsetZ, targetRotX, targetRotY, viewW, viewH));
          }

          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
          }
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = morphProgress > 0.6 
            ? "rgba(255, 255, 255, 0.9)" // white
            : "rgba(255, 255, 255, 0.2)";
          
          if (morphProgress > 0.6) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
          }
          ctx.stroke();
          ctx.shadowBlur = 0; // reset
          ctx.lineWidth = 1; // reset
        }

        if (el.type === "metrics") {
          // Lighthouse concentric circles
          const pCenter = project(el.x + el.w / 2, el.y + el.h / 2 - 10, offsetZ, targetRotX, targetRotY, viewW, viewH);
          ctx.beginPath();
          ctx.arc(pCenter.x, pCenter.y, 16 * pCenter.scale, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + morphProgress * 0.1})`;
          ctx.stroke();

          // Green dial filling
          if (morphProgress > 0.5) {
            ctx.beginPath();
            ctx.arc(pCenter.x, pCenter.y, 16 * pCenter.scale, -Math.PI / 2, Math.PI * 1.5 * morphProgress - Math.PI / 2);
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = "#ffffff"; // white dial
            ctx.stroke();
            ctx.lineWidth = 1;

            const pNum = project(el.x + el.w / 2 - 6, el.y + el.h / 2 - 6, offsetZ, targetRotX, targetRotY, viewW, viewH);
            ctx.font = "bold 9px system-ui";
            ctx.fillStyle = "#ffffff"; // white number
            ctx.fillText("98", pNum.x, pNum.y);
          }
        }
      });

      // Ambient particles floating
      if (morphProgress < 0.6) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        for (let i = 0; i < 8; i++) {
          const ptX = Math.sin(pulseTime * 0.5 + i) * 140;
          const ptY = Math.cos(pulseTime * 0.3 + i * 2) * 80;
          const ptZ = Math.sin(pulseTime + i * 3) * 60;
          const projPt = project(ptX, ptY, ptZ, targetRotX, targetRotY, viewW, viewH);
          ctx.beginPath();
          ctx.arc(projPt.x, projPt.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] border border-white/5 bg-zinc-950/40 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl flex items-center justify-center p-4">
      {/* Absolute Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[180px] h-[180px] rounded-full bg-white/5 blur-[60px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[180px] h-[180px] rounded-full bg-white/5 blur-[60px] pointer-events-none" />
      
      {/* Scroll Info Badge */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-space-grotesk tracking-widest text-white/50">
        <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
        SCROLL PROGRESS: {Math.round(scrollProgress * 100)}%
      </div>

      <div className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-space-grotesk tracking-widest text-white/50">
        {scrollProgress < 0.4 ? "STATE: 3D WIREFRAME" : "STATE: HIGH-FIDELITY WEB"}
      </div>

      <canvas ref={canvasRef} className="w-full h-full block cursor-grab" />
    </div>
  );
}

// ==========================================
// 2. DRAGGABLE BEFORE & AFTER SLIDER COMPONENT
// ==========================================
function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const onMouseDown = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6 mb-6">
        <div>
          <span className="font-space-grotesk text-[10px] text-emerald-400 uppercase tracking-widest">Interactive Sandbox</span>
          <h3 className="font-playfair text-2xl md:text-3xl text-white">Compare Architecture Performance</h3>
        </div>
        <div className="flex gap-4 text-xs font-space-grotesk">
          <span className="flex items-center gap-2 text-white/50">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Before: Bloated Template
          </span>
          <span className="flex items-center gap-2 text-white/50">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> After: Blazing Next.js
          </span>
        </div>
      </div>

      <div 
        ref={sliderRef}
        className="relative w-full h-[480px] sm:h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-black select-none cursor-ew-resize shadow-2xl"
        onMouseDown={onMouseDown}
        onTouchStart={onMouseDown}
      >
        {/* ==========================================
            SLIDE A: BEFORE (Bloated Template - Red Theme)
           ========================================== */}
        <div className="absolute inset-0 bg-[#060606] p-4 sm:p-8 flex flex-col justify-between z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.08),transparent)] pointer-events-none" />
          
          <div className="flex justify-between items-start relative z-10">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[9px] font-space-grotesk uppercase border border-red-500/20 bg-red-950/20 text-red-500">
                Bloated Template WordPress / PageBuilder
              </span>
              <h4 className="font-playfair text-sm sm:text-2xl text-white/90">Lagging Customer Experience</h4>
            </div>
            
            {/* Lighthouse score dial: Red 45 */}
            <div className="w-14 h-14 sm:w-20 sm:h-20 shrink-0 rounded-full border border-red-500/20 bg-red-950/20 flex flex-col items-center justify-center backdrop-blur-sm relative">
              <svg className="w-full h-full transform -rotate-95">
                <circle cx="50%" cy="50%" r="42%" stroke="rgba(255,255,255,0.05)" strokeWidth="3" fill="transparent" />
                <circle cx="50%" cy="50%" r="42%" stroke="#ef4444" strokeWidth="4.5" fill="transparent" strokeDasharray="250" strokeDashoffset="160" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-red-500 font-space-grotesk text-base sm:text-xl font-bold">45</span>
                <span className="text-[5px] sm:text-[7px] text-white/40 uppercase tracking-wider font-bold">PERFORMANCE</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 relative z-10 max-w-2xl w-full">
            <div className="p-2.5 sm:p-4 border border-white/5 bg-[#0c0c0c] rounded-xl space-y-0.5 sm:space-y-1">
              <span className="text-[8px] sm:text-[10px] font-space-grotesk text-white/40 block">LARGEST CONTENTFUL PAINT (LCP)</span>
              <span className="text-red-400 font-bold text-sm sm:text-lg">5.8 seconds</span>
              <span className="text-[8px] sm:text-[9px] text-red-400/60 block font-space-grotesk">★ Google Penalty Tier</span>
            </div>
            <div className="p-2.5 sm:p-4 border border-white/5 bg-[#0c0c0c] rounded-xl space-y-0.5 sm:space-y-1">
              <span className="text-[8px] sm:text-[10px] font-space-grotesk text-white/40 block">CRAWLABILITY RATING</span>
              <span className="text-amber-500 font-bold text-sm sm:text-lg">Fragmented Index</span>
              <span className="text-[8px] sm:text-[9px] text-amber-500/60 block font-space-grotesk">Bloated sitemap, 404 logs</span>
            </div>
            <div className="p-2.5 sm:p-4 border border-white/5 bg-[#0c0c0c] rounded-xl space-y-0.5 sm:space-y-1">
              <span className="text-[8px] sm:text-[10px] font-space-grotesk text-white/40 block">PIPELINE CONVERSIONS</span>
              <span className="text-red-400 font-bold text-sm sm:text-lg">0.6% Rate</span>
              <span className="text-[8px] sm:text-[9px] text-red-400/60 block font-space-grotesk">High checkout friction</span>
            </div>
          </div>

          <div className="border-t border-white/5 pt-3 sm:pt-4 flex justify-between items-center text-[8px] sm:text-[10px] font-space-grotesk text-white/30 uppercase tracking-widest relative z-10 w-full">
            <span>Server Response Time: ~1,500ms</span>
            <AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500/50" />
          </div>
        </div>

        {/* ==========================================
            SLIDE B: AFTER (Blazing Next.js - Green Theme - Clipped)
           ========================================== */}
        <div 
          className="absolute inset-0 bg-[#0a0a0a] p-4 sm:p-8 flex flex-col justify-between overflow-hidden z-20"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent)] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.svg')] mix-blend-overlay pointer-events-none" />
          
          <div className="flex justify-between items-start relative z-10 w-[calc(100%)] min-w-[300px] sm:min-w-[600px]">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[9px] font-space-grotesk uppercase border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 flex items-center gap-1.5 w-fit">
                <Sparkles className="h-3 w-3" /> Custom Next.js Architecture
              </span>
              <h4 className="font-playfair text-sm sm:text-2xl text-white">Sub-Second Interactive Conversion</h4>
            </div>
            
            {/* Lighthouse score dial: Green 98 */}
            <div className="w-14 h-14 sm:w-20 sm:h-20 shrink-0 rounded-full border border-emerald-500/20 bg-emerald-950/20 flex flex-col items-center justify-center backdrop-blur-sm relative">
              <svg className="w-full h-full transform -rotate-95">
                <circle cx="50%" cy="50%" r="42%" stroke="rgba(255,255,255,0.05)" strokeWidth="3" fill="transparent" />
                <circle cx="50%" cy="50%" r="42%" stroke="#10b981" strokeWidth="4.5" fill="transparent" strokeDasharray="250" strokeDashoffset="5" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-emerald-400 font-space-grotesk text-base sm:text-xl font-bold">98</span>
                <span className="text-[5px] sm:text-[7px] text-white/40 uppercase tracking-wider font-bold">PERFORMANCE</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 relative z-10 max-w-2xl w-full">
            <div className="p-2.5 sm:p-4 border border-emerald-500/10 bg-[#141414] rounded-xl space-y-0.5 sm:space-y-1">
              <span className="text-[8px] sm:text-[10px] font-space-grotesk text-white/40 block">LARGEST CONTENTFUL PAINT (LCP)</span>
              <span className="text-emerald-400 font-bold text-sm sm:text-lg">0.6 seconds</span>
              <span className="text-[8px] sm:text-[9px] text-emerald-400/60 block font-space-grotesk">★ Google Core Web Vitals Pass</span>
            </div>
            <div className="p-2.5 sm:p-4 border border-emerald-500/10 bg-[#141414] rounded-xl space-y-0.5 sm:space-y-1">
              <span className="text-[8px] sm:text-[10px] font-space-grotesk text-white/40 block">CRAWLABILITY RATING</span>
              <span className="text-emerald-400 font-bold text-sm sm:text-lg">Seamless Dominance</span>
              <span className="text-[8px] sm:text-[9px] text-emerald-400/60 block font-space-grotesk">Technical schema, silo structured</span>
            </div>
            <div className="p-2.5 sm:p-4 border border-emerald-500/10 bg-[#141414] rounded-xl space-y-0.5 sm:space-y-1">
              <span className="text-[8px] sm:text-[10px] font-space-grotesk text-white/40 block">PIPELINE CONVERSIONS</span>
              <span className="text-emerald-400 font-bold text-lg">2.8% Rate</span>
              <span className="text-[8px] sm:text-[9px] text-emerald-400/60 block font-space-grotesk">+360% Organic funnel conversion</span>
            </div>
          </div>

          <div className="border-t border-emerald-500/10 pt-3 sm:pt-4 flex justify-between items-center text-[8px] sm:text-[10px] font-space-grotesk text-emerald-400/70 uppercase tracking-widest relative z-10 w-full">
            <span>Server Response Time: ~45ms (Edge Cached)</span>
            <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
          </div>
        </div>

        {/* Drag handle line separator */}
        <div 
          className="absolute top-0 bottom-0 w-px bg-white/20 z-30 cursor-ew-resize"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Drag Handle Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-white/20 bg-black flex items-center justify-center shadow-xl group hover:border-white transition-colors">
            <div className="flex gap-0.5">
              <div className="w-[1.5px] h-3 bg-white/40 group-hover:bg-white" />
              <div className="w-[1.5px] h-3 bg-white/40 group-hover:bg-white" />
            </div>
          </div>
        </div>
      </div>
      
      <p className="font-space-grotesk text-xs text-white/40 text-center">
        💡 Drag the center handle left and right to inspect the visual and technical comparison between platforms.
      </p>
    </div>
  );
}

// ==========================================
// 3. DYNAMIC TYPING TERMINAL COMPONENT
// ==========================================
function DynamicTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Commands to type out
  const commands = [
    { type: "cmd", text: "npx create-next-app@latest arcnetic-websites-seo" },
    { type: "out", text: "⚙ Creating a new Next.js app in /arcnetic-websites-seo..." },
    { type: "out", text: "▲ Installing dependencies: react, react-dom, next, typescript, tailwindcss..." },
    { type: "out", text: "✓ Successfully created custom web architecture with clean Next.js Core." },
    { type: "cmd", text: "npm run optimize-lighthouse --technical-seo" },
    { type: "out", text: "⚛ Initiating crawler index audits and schema graph structuring..." },
    { type: "out", text: "✔ Remediating core web vitals and XML sitemap routes..." },
    { type: "out", text: "✓ Results: Performance 98 | Accessibility 100 | Best Practices 100 | SEO 100" },
    { type: "cmd", text: "npm run deploy --vercel-edge" },
    { type: "out", text: "▲ Deploying custom edge-cached SSR storefront to production..." },
    { type: "out", text: "🚀 Production Deployment Live: https://arcnetic-seo.vercel.app" }
  ];

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Main typing loop
  useEffect(() => {
    let currentCmdIndex = 0;
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const runLoop = () => {
      if (currentCmdIndex >= commands.length) {
        // Reset after a long pause
        timeout = setTimeout(() => {
          setLines([]);
          setTypedText("");
          currentCmdIndex = 0;
          charIndex = 0;
          runLoop();
        }, 6000);
        return;
      }

      const current = commands[currentCmdIndex];

      if (current.type === "cmd") {
        if (charIndex < current.text.length) {
          setTypedText((prev) => prev + current.text.charAt(charIndex));
          charIndex++;
          timeout = setTimeout(runLoop, 40 + Math.random() * 40);
        } else {
          // Finished typing command, press enter
          timeout = setTimeout(() => {
            setLines((prev) => [...prev, `arcnetic > ${current.text}`]);
            setTypedText("");
            charIndex = 0;
            currentCmdIndex++;
            runLoop();
          }, 600);
        }
      } else {
        // Instant output lines with slight loading pause
        timeout = setTimeout(() => {
          setLines((prev) => [...prev, current.text]);
          currentCmdIndex++;
          runLoop();
        }, 500 + Math.random() * 500);
      }
    };

    runLoop();

    return () => clearTimeout(timeout);
  }, []);

  // Auto scroll terminal to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, typedText]);

  return (
    <div className="w-full border border-white/10 rounded-2xl bg-zinc-950 overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
      {/* Top macOS Style Tab Header */}
      <div className="bg-zinc-900 border-b border-white/5 px-4 py-3 flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] sm:text-xs font-space-grotesk text-white/30 uppercase tracking-widest font-semibold">
          terminal — arcnetic-seo-deploy
        </span>
        <div className="w-12 h-1 bg-white/5 rounded-full" />
      </div>

      {/* Terminal Screen area */}
      <div 
        ref={containerRef}
        className="p-6 h-[260px] sm:h-[300px] overflow-y-auto space-y-2 text-zinc-300 leading-relaxed scrollbar-thin scrollbar-thumb-white/10"
      >
        {lines.map((line, idx) => {
          const isCommand = line.startsWith("arcnetic >");
          const isSuccess = line.startsWith("✓") || line.startsWith("✔");
          const isVercel = line.startsWith("▲") || line.startsWith("🚀");
          
          return (
            <div 
              key={idx} 
              className={`${
                isCommand 
                  ? "text-indigo-400" 
                  : isSuccess 
                    ? "text-emerald-400 font-semibold" 
                    : isVercel
                      ? "text-cyan-400"
                      : "text-white/60"
              }`}
            >
              {line}
            </div>
          );
        })}

        {/* Current Typing line */}
        <div className="text-indigo-400 flex items-center">
          <span>arcnetic &gt; {typedText}</span>
          <span className={`w-2 h-4 bg-indigo-400 ml-1 transition-opacity ${cursorVisible ? "opacity-100" : "opacity-0"}`} />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. MAIN WEBSITES & SEO PAGE CLIENT COMPONENT
// ==========================================
export function WebsitesSeoClient() {
  const stickyScrollRef = useRef<HTMLDivElement>(null);
  
  // Custom SEO Plan phases
  const seoPlans = [
    {
      phase: "Phase 1",
      title: "Foundation & Audit",
      focus: "Fixing what's broken.",
      description: "Our initial sprint is focused on technical repair. We diagnose search bottleneck leaks, crawling limitations, and schema deficiencies to set a clean structural baseline.",
      deliverables: [
        "Comprehensive Technical Audit",
        "Core Web Vitals Remediation (SSR Optimization)",
        "XML Sitemap Restructuring",
        "Robots.txt Crawl Budget Optimization",
        "Initial Keyword Strategy & Mapping"
      ]
    },
    {
      phase: "Phase 2",
      title: "Authority & Content Growth",
      focus: "Capturing search intent.",
      description: "With foundation fixes in place, we focus on index expansion. We structure a high-yield content roadmap engineered to dominate niche keywords and solve search queries better than competition.",
      deliverables: [
        "Competitor Keyword Gap Analysis",
        "Long-Form Content Strategy Roadmap",
        "On-Page Optimization (H1-H6 Hierarchies)",
        "Metadata Tuning & Semantic HTML5 Adjustments",
        "Internal Link Siloing & Crawl Restructuring"
      ]
    },
    {
      phase: "Phase 3",
      title: "Dominance & Outreach",
      focus: "Building digital trust.",
      description: "Phase 3 establishes online authority. We acquire high-reputation domain relationships to fuel page-rank increases, dominate regional indexing, and capture Google snippet features.",
      deliverables: [
        "High-DR Backlink Acquisition Strategy",
        "Local SEO Domination (Regional Silos)",
        "Rich Snippet & Structured Schema Optimization",
        "Continuous Search Result CTR A/B Testing",
        "Frictionless Lead Pipeline Alignment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* ==========================================
          HERO SECTION: SPLIT SCREEN INTERACTION
         ========================================== */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 sm:pt-24 lg:pt-32 pb-16 overflow-hidden border-b border-white/10">
        {/* Cinematic ambient lights */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,26,26,0.9),#000000_70%)]" />
          <div className="absolute inset-0 opacity-[0.12] bg-[url('/noise.svg')] mix-blend-overlay pointer-events-none" />
          {/* Subtle slow spinning ambient glow */}
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: High-contrast typography */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
              >
                <Sparkle className="h-3 w-3 text-white animate-spin" />
                <span className="font-space-grotesk text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/60">
                  Performance & Visibility
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight text-white text-balance"
              >
                Custom Web <br />
                <span className="text-white">
                  Development & <br /> Technical SEO
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-space-grotesk text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl border-l-2 border-white pl-6"
              >
                We build high-performance custom websites and execute technical SEO strategies that drive traffic, rank higher, and convert leads.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="pt-4 flex flex-wrap gap-4"
              >
                <Link href="/contact" className="group">
                  <div className="flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 font-space-grotesk text-xs uppercase tracking-widest font-semibold hover:bg-white/95 transition-all shadow-lg group-hover:scale-105 duration-300">
                    <span>INITIATE STRATEGY</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Right Column: WebGL/Canvas morphing browser simulation */}
            <motion.div
              className="lg:col-span-6 w-full"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <MorphingWireframeCanvas />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          ABOUT & HOW IT HELPS: BRIDGING ESTHETICS & ALGORITHMS
         ========================================== */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-b border-white/5 relative">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 space-y-4">
              <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/60">The Philosophy</span>
              <h2 className="font-playfair text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Bridging the Gap Between Aesthetics and Algorithms.
              </h2>
            </div>
            
            <div className="md:col-span-7 space-y-6">
              <p className="font-space-grotesk text-white/50 text-base sm:text-lg leading-relaxed">
                A beautiful site is useless if it's invisible. A highly ranking site is useless if users bounce immediately. By combining cutting-edge Next.js frontend frameworks with rigorous search engine optimization, we ensure your brand captures high-intent traffic and provides an experience that keeps them engaged.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-white font-medium mb-1">Blazing Speed</h4>
                    <p className="font-space-grotesk text-xs text-white/40">Sub-second load times that keep visitors on your page and boost search ranking signals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Search className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-white font-medium mb-1">Organic Domination</h4>
                    <p className="font-space-grotesk text-xs text-white/40">Indexation-focused schema and link silos that make Google bots favor your authority.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SUB-SERVICES: FOUR CAPABILITIES SPECIFIED
         ========================================== */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-[#030303] border-b border-white/5">
        <div className="container mx-auto max-w-7xl">
          
          <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto space-y-4">
            <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white px-4 py-1 border border-white/10 bg-white/5 rounded-full">
              Full Stack Capabilities
            </span>
            <h2 className="font-playfair text-4xl sm:text-6xl text-white tracking-tight">
              Engineered Deliverables
            </h2>
            <p className="font-space-grotesk text-white/50 text-sm">
              We specialize in custom web architectures that turn search bots into fans and page visitors into qualified pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Sub-Service 1 */}
            <div className="group relative p-8 sm:p-10 border border-white/10 bg-zinc-950/40 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[260px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.03] transition-all" />
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="font-playfair text-2xl text-white">High-Performance Web Apps</h3>
                <p className="font-space-grotesk text-sm text-white/50 leading-relaxed">
                  SSR (Server-Side Rendering) and SSG (Static Site Generation) architectures powered by Next.js. We optimize every script, style, and asset to deliver sub-second loading speeds.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-space-grotesk text-white/40">
                <span>Core Web Vitals Optimized</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>React Engine</span>
              </div>
            </div>

            {/* Sub-Service 2 */}
            <div className="group relative p-8 sm:p-10 border border-white/10 bg-zinc-950/40 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[260px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.03] transition-all" />
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="font-playfair text-2xl text-white">Technical SEO</h3>
                <p className="font-space-grotesk text-sm text-white/50 leading-relaxed">
                  Deep-dive indexability audits, detailed JSON-LD schema integration, structural page hierarchy adjustments, and robots.txt siloing built to command search engines.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-space-grotesk text-white/40">
                <span>Crawler-First Coding</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>Rich Snippets</span>
              </div>
            </div>

            {/* Sub-Service 3 */}
            <div className="group relative p-8 sm:p-10 border border-white/10 bg-zinc-950/40 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[260px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.03] transition-all" />
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="font-playfair text-2xl text-white">Headless CMS Integration</h3>
                <p className="font-space-grotesk text-sm text-white/50 leading-relaxed">
                  Decoupled backend content systems (Sanity, Contentful) enabling your marketing copywriters to deploy updates instantly at the edge without breaking UI configurations.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-space-grotesk text-white/40">
                <span>Decoupled Control</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>API-First Content</span>
              </div>
            </div>

            {/* Sub-Service 4 */}
            <div className="group relative p-8 sm:p-10 border border-white/10 bg-zinc-950/40 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[260px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.03] transition-all" />
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="font-playfair text-2xl text-white">Conversion Rate Optimization CRO</h3>
                <p className="font-space-grotesk text-sm text-white/50 leading-relaxed">
                  Data-backed customer experience optimizations. We test CTR layouts, structural checkout friction, dynamic forms, and CTA placement to convert organic traffic into paying customers.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-space-grotesk text-white/40">
                <span>Frictionless Funnels</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>UX Analytics</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SEO PLANS: STICKY SCROLL SECTION
         ========================================== */}
      <section id="plans" ref={stickyScrollRef} className="py-20 md:py-32 px-4 md:px-8 border-b border-white/5 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Sticky Left Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6 mb-8 lg:mb-0">
              <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/60">
                SEO PLANS & DELIVERABLES
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                Our Structured SEO Strategy
              </h2>
              <p className="font-space-grotesk text-sm text-white/50 leading-relaxed">
                We organize optimization into three highly focused phases, taking your brand from code remediation to search engine dominance.
              </p>
              <div className="pt-4 hidden lg:block border-t border-white/10">
                <div className="flex flex-col gap-3 font-space-grotesk text-xs text-white/40">
                  <span className="flex items-center gap-2"><Check className="h-4 w-4 text-white" /> Phase 1: Technical Repair</span>
                  <span className="flex items-center gap-2"><Check className="h-4 w-4 text-white" /> Phase 2: Indexation & Content</span>
                  <span className="flex items-center gap-2"><Check className="h-4 w-4 text-white" /> Phase 3: Authority Domination</span>
                </div>
              </div>
            </div>

            {/* Scrolling Right Column (Plans list) */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              {seoPlans.map((plan, index) => (
                <div 
                  key={plan.phase}
                  className="group p-8 sm:p-10 border border-white/10 bg-[#070707] hover:border-white/20 hover:bg-[#0A0A0A] rounded-3xl transition-all duration-500"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-white/5">
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase tracking-widest text-white/60 font-bold">
                        {plan.phase}
                      </span>
                      <h3 className="font-playfair text-2xl sm:text-3xl text-white group-hover:text-white transition-colors">
                        {plan.title}
                      </h3>
                    </div>
                    <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 font-space-grotesk text-[10px] uppercase tracking-widest text-white/60">
                      Focus: {plan.focus}
                    </span>
                  </div>
 
                  <p className="font-space-grotesk text-sm text-white/60 leading-relaxed mb-8">
                    {plan.description}
                  </p>
 
                  <div className="space-y-4">
                    <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-white/30 block mb-2">
                      Key Deliverables
                    </span>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {plan.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-white mt-0.5 shrink-0" />
                          <span className="font-space-grotesk text-xs text-white/80 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          PROOF OF WORK: INTERACTIVE OVERLAY SLIDER
         ========================================== */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-[#020202]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto space-y-4">
            <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/60">
              Measurable Success
            </span>
            <h2 className="font-playfair text-4xl sm:text-6xl text-white tracking-tight">
              Case Study Metrics
            </h2>
            <p className="font-space-grotesk text-sm text-white/50">
              See the actual Lighthouse improvements and search engine traffic spikes when shifting from bloated templates to Arcnetic architectures.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* ==========================================
          TECH STACK: INTERACTIVE TYPING TERMINAL
         ========================================== */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-t border-white/5 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/60 flex items-center gap-2">
                <TerminalIcon className="h-4 w-4" /> THE STACK SKELETON
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                Technical Stack & Deployment Command
              </h2>
              <p className="font-space-grotesk text-white/50 text-sm leading-relaxed">
                We write lightweight, modular code using modern frontend engines. Watch our terminal type out, compile, and index a new technical SEO framework at the edge.
              </p>
              
              {/* Stack specs list */}
              <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-[11px] text-white/40">
                <div className="p-3 border border-white/5 bg-white/[0.01] rounded-xl flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Next.js 15.5+</span>
                </div>
                <div className="p-3 border border-white/5 bg-white/[0.01] rounded-xl flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>React 19 Server</span>
                </div>
                <div className="p-3 border border-white/5 bg-white/[0.01] rounded-xl flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>TypeScript Core</span>
                </div>
                <div className="p-3 border border-white/5 bg-white/[0.01] rounded-xl flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <DynamicTerminal />
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          CINEMATIC CTA
         ========================================== */}
      <section className="py-24 md:py-40 relative overflow-hidden border-t border-white/10 px-4 bg-[#050505]">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="space-y-8">
            <div className="inline-flex h-12 w-12 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/40">
              <Shield className="h-6 w-6" />
            </div>
            
            <h2 className="font-playfair text-4xl sm:text-6xl md:text-7xl text-white leading-tight font-bold">
              Ready to Dominate Search <br className="hidden sm:inline" /> & Conversions?
            </h2>
            
            <p className="font-space-grotesk text-sm sm:text-base md:text-lg text-white/50 max-w-xl mx-auto">
              We combine modern frontend web frameworks with rigorous search engine optimization planning to ensure your brand captures high intent traffic and keeps users engaged.
            </p>

            <div className="pt-8">
              <Link href="/contact" className="inline-block group">
                <div className="relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 sm:px-12 py-4 sm:py-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <span className="flex items-center gap-4 font-space-grotesk text-xs sm:text-sm tracking-[0.2em] font-medium uppercase">
                    Start Your Strategy Consultation
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
