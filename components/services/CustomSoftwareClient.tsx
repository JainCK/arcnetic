"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Cpu,
  Layers,
  Database,
  Terminal,
  ArrowUpRight,
  Activity,
  Sparkle,
  Sparkles,
  X,
  ChevronRight,
  Monitor,
  Server,
  CheckCircle2,
  Zap
} from "lucide-react";
import Link from "next/link";

// ==========================================================
// 1. ISOMETRIC LAYER SEPARATION CANVAS COMPONENT
// ==========================================================
function IsometricLayerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const hoverRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      mouseRef.current = { x, y };
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      hoverRef.current = true;
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      hoverRef.current = false;
      mouseRef.current = { x: 0, y: 0 };
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
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

    let pulseTime = 0;
    let separation = 0; // Animates between 0 and 1

    const project = (x: number, y: number, z: number, viewW: number, viewH: number) => {
      // Isometric projection math
      // Rotate by 30 degrees (PI / 6)
      const cos30 = Math.cos(Math.PI / 6);
      const sin30 = Math.sin(Math.PI / 6);

      // Mouse interactive tilt offsets
      const mouseTiltX = mouseRef.current.x * 12;
      const mouseTiltY = mouseRef.current.y * 12;

      const screenX = (x - y) * cos30 + viewW / 2 + mouseTiltX;
      const screenY = (x + y) * sin30 - z + viewH / 2 - 20 + mouseTiltY;

      return { x: screenX, y: screenY };
    };

    const drawIsoRect = (
      cx: number,
      cy: number,
      cz: number,
      w: number,
      h: number,
      fillColor: string,
      strokeColor: string,
      viewW: number,
      viewH: number
    ) => {
      const c1 = project(cx - w / 2, cy - h / 2, cz, viewW, viewH);
      const c2 = project(cx + w / 2, cy - h / 2, cz, viewW, viewH);
      const c3 = project(cx + w / 2, cy + h / 2, cz, viewW, viewH);
      const c4 = project(cx - w / 2, cy + h / 2, cz, viewW, viewH);

      ctx.beginPath();
      ctx.moveTo(c1.x, c1.y);
      ctx.lineTo(c2.x, c2.y);
      ctx.lineTo(c3.x, c3.y);
      ctx.lineTo(c4.x, c4.y);
      ctx.closePath();

      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.stroke();
    };

    const drawCylinder = (
      cx: number,
      cy: number,
      cz: number,
      r: number,
      h: number,
      fillColor: string,
      strokeColor: string,
      viewW: number,
      viewH: number
    ) => {
      // Draw cylinder columns for database clusters
      const steps = 32;
      const basePoints = [];
      const topPoints = [];

      for (let i = 0; i <= steps; i++) {
        const theta = (i / steps) * Math.PI * 2;
        const px = cx + r * Math.cos(theta);
        const py = cy + r * Math.sin(theta);
        basePoints.push(project(px, py, cz, viewW, viewH));
        topPoints.push(project(px, py, cz + h, viewW, viewH));
      }

      // Fill sides
      ctx.beginPath();
      ctx.moveTo(basePoints[0].x, basePoints[0].y);
      for (let i = 1; i <= steps; i++) {
        ctx.lineTo(basePoints[i].x, basePoints[i].y);
      }
      ctx.lineTo(topPoints[steps].x, topPoints[steps].y);
      for (let i = steps - 1; i >= 0; i--) {
        ctx.lineTo(topPoints[i].x, topPoints[i].y);
      }
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();

      // Side outlines
      ctx.beginPath();
      ctx.moveTo(basePoints[0].x, basePoints[0].y);
      ctx.lineTo(topPoints[0].x, topPoints[0].y);
      ctx.moveTo(basePoints[steps / 2].x, basePoints[steps / 2].y);
      ctx.lineTo(topPoints[steps / 2].x, topPoints[steps / 2].y);
      ctx.strokeStyle = strokeColor;
      ctx.stroke();

      // Top circle
      ctx.beginPath();
      ctx.moveTo(topPoints[0].x, topPoints[0].y);
      for (let i = 1; i <= steps; i++) {
        ctx.lineTo(topPoints[i].x, topPoints[i].y);
      }
      ctx.closePath();
      ctx.fillStyle = `rgba(255,255,255,0.05)`;
      ctx.fill();
      ctx.stroke();
    };

    const render = () => {
      pulseTime += 0.025;
      const viewW = canvas.offsetWidth;
      const viewH = canvas.offsetHeight;

      ctx.clearRect(0, 0, viewW, viewH);

      // Dampened hover separation state transition
      const targetSep = hoverRef.current ? 1.0 : 0.05;
      separation += (targetSep - separation) * 0.1;

      // Vertical coordinates for isometric planes
      const dbZ = -45 - separation * 55;
      const logicZ = 0;
      const uiZ = 45 + separation * 55;

      // Draw background ambient grids
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
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

      // Draw connecting vertical structural support lines when hovering
      if (separation > 0.1) {
        ctx.beginPath();
        const corners = [
          { x: -90, y: -60 },
          { x: 90, y: -60 },
          { x: 90, y: 60 },
          { x: -90, y: 60 }
        ];
        corners.forEach((c) => {
          const ptDb = project(c.x, c.y, dbZ, viewW, viewH);
          const ptUi = project(c.x, c.y, uiZ, viewW, viewH);
          ctx.moveTo(ptDb.x, ptDb.y);
          ctx.lineTo(ptUi.x, ptUi.y);
        });
        ctx.strokeStyle = `rgba(255, 255, 255, ${separation * 0.06})`;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]); // Reset
      }

      // ==========================================
      // LAYER 1: DATABASE PLANE (Bottom - Red/Amber ambient)
      // ==========================================
      const dbBaseColor = `rgba(255,255,255, ${0.01 + separation * 0.02})`;
      const dbBorderColor = `rgba(255,255,255, ${0.08 + separation * 0.1})`;
      drawIsoRect(0, 0, dbZ, 200, 140, dbBaseColor, dbBorderColor, viewW, viewH);

      // Draw DB cluster cylinders
      const cylinders = [
        { cx: -50, cy: -20, r: 16, h: 24 },
        { cx: 0, cy: -20, r: 16, h: 24 },
        { cx: 50, cy: -20, r: 16, h: 24 }
      ];
      cylinders.forEach((cyl) => {
        drawCylinder(
          cyl.cx,
          cyl.cy,
          dbZ,
          cyl.r,
          cyl.h,
          "rgba(255,255,255,0.02)",
          `rgba(255,255,255, ${0.1 + separation * 0.15})`,
          viewW,
          viewH
        );

        // Server neon stripes
        for (let sz = dbZ + 4; sz < dbZ + cyl.h; sz += 8) {
          const cStrip1 = project(cyl.cx - cyl.r - 1, cyl.cy - 1, sz, viewW, viewH);
          const cStrip2 = project(cyl.cx - cyl.r - 1, cyl.cy + 1, sz, viewW, viewH);
          ctx.beginPath();
          ctx.moveTo(cStrip1.x, cStrip1.y);
          ctx.lineTo(cStrip2.x, cStrip2.y);
          ctx.lineWidth = 2;
          ctx.strokeStyle = `rgba(255,255,255, ${0.35 + Math.sin(pulseTime + sz) * 0.2})`;
          ctx.stroke();
          ctx.lineWidth = 1;
        }
      });

      // Label Database Layer
      const labelDb = project(-86, 56, dbZ, viewW, viewH);
      ctx.font = "bold 8px monospace";
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.fillText("DATABASE LAYER — POSTGRESQL / REDIS", labelDb.x, labelDb.y);

      // ==========================================
      // LAYER 2: LOGIC & SERVICES PLANE (Middle - Indigo/Cyan ambient)
      // ==========================================
      const logicBaseColor = `rgba(255,255,255, ${0.01 + separation * 0.03})`;
      const logicBorderColor = `rgba(255,255,255, ${0.08 + separation * 0.12})`;
      drawIsoRect(0, 0, logicZ, 200, 140, logicBaseColor, logicBorderColor, viewW, viewH);

      // Draw central microservice logic chips and connection routes
      const nodes = [
        { x: -60, y: 10, label: "Auth" },
        { x: -10, y: -20, label: "Core API" },
        { x: 40, y: 20, label: "Sync Engine" }
      ];

      // Connecting flowlines
      ctx.beginPath();
      const ptA = project(nodes[0].x, nodes[0].y, logicZ, viewW, viewH);
      const ptB = project(nodes[1].x, nodes[1].y, logicZ, viewW, viewH);
      const ptC = project(nodes[2].x, nodes[2].y, logicZ, viewW, viewH);
      ctx.moveTo(ptA.x, ptA.y);
      ctx.lineTo(ptB.x, ptB.y);
      ctx.lineTo(ptC.x, ptC.y);
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.stroke();

      // Draw flowing API request pulses
      const t = (pulseTime * 0.5) % 1;
      const pulse1 = {
        x: nodes[0].x + (nodes[1].x - nodes[0].x) * t,
        y: nodes[0].y + (nodes[1].y - nodes[0].y) * t
      };
      const pulse2 = {
        x: nodes[1].x + (nodes[2].x - nodes[1].x) * t,
        y: nodes[1].y + (nodes[2].y - nodes[1].y) * t
      };

      [pulse1, pulse2].forEach((p) => {
        const pt = project(p.x, p.y, logicZ, viewW, viewH);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      });

      // Nodes boxes
      nodes.forEach((node) => {
        drawIsoRect(
          node.x,
          node.y,
          logicZ,
          32,
          20,
          "rgba(255,255,255,0.02)",
          "rgba(255,255,255,0.15)",
          viewW,
          viewH
        );
        const pText = project(node.x - 12, node.y + 3, logicZ, viewW, viewH);
        ctx.font = "bold 6.5px monospace";
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fillText(node.label, pText.x, pText.y);
      });

      // Label Logic Layer
      const labelLogic = project(-86, 56, logicZ, viewW, viewH);
      ctx.font = "bold 8px monospace";
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.fillText("MICROSERVICES & BUSINESS LOGIC — NODE.JS / GO", labelLogic.x, labelLogic.y);

      // ==========================================
      // LAYER 3: CLIENT / UI LAYER (Top - Glassmorphic dashboard mockup)
      // ==========================================
      const uiBaseColor = `rgba(10, 10, 10, ${0.45 + separation * 0.45})`;
      const uiBorderColor = `rgba(255,255,255, ${0.12 + separation * 0.18})`;
      drawIsoRect(0, 0, uiZ, 200, 140, uiBaseColor, uiBorderColor, viewW, viewH);

      // Browser dots top corner
      const browserDots = [-88, -80, -72];
      browserDots.forEach((dx) => {
        const dot = project(dx, -56, uiZ, viewW, viewH);
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fill();
      });

      // UI Grid Cards
      // 1. Chart card on bottom-left
      drawIsoRect(
        -25,
        15,
        uiZ,
        96,
        60,
        "rgba(255,255,255,0.015)",
        "rgba(255,255,255,0.08)",
        viewW,
        viewH
      );

      // Neon line chart inside dashboard
      const chartPoints = [];
      const chartSegments = 8;
      for (let i = 0; i <= chartSegments; i++) {
        const px = -65 + (80 / chartSegments) * i;
        const wave = Math.sin(i * 0.5 + pulseTime) * (hoverRef.current ? 8 : 4);
        const py = 20 - wave;
        chartPoints.push(project(px, py, uiZ, viewW, viewH));
      }
      ctx.beginPath();
      ctx.moveTo(chartPoints[0].x, chartPoints[0].y);
      for (let i = 1; i < chartPoints.length; i++) {
        ctx.lineTo(chartPoints[i].x, chartPoints[i].y);
      }
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.stroke();

      // 2. Metrics card on top-right
      drawIsoRect(
        50,
        -15,
        uiZ,
        48,
        36,
        "rgba(255,255,255,0.02)",
        "rgba(255,255,255,0.1)",
        viewW,
        viewH
      );
      const metricVal = project(38, -12, uiZ, viewW, viewH);
      ctx.font = "bold 9px monospace";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("+422%", metricVal.x, metricVal.y);

      // 3. User profiles cards
      drawIsoRect(
        50,
        30,
        uiZ,
        48,
        36,
        "rgba(255,255,255,0.02)",
        "rgba(255,255,255,0.1)",
        viewW,
        viewH
      );
      const userDot1 = project(40, 24, uiZ, viewW, viewH);
      ctx.beginPath();
      ctx.arc(userDot1.x, userDot1.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.fill();

      const userDot2 = project(54, 32, uiZ, viewW, viewH);
      ctx.beginPath();
      ctx.arc(userDot2.x, userDot2.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fill();

      // Label UI Layer
      const labelUi = project(-86, 56, uiZ, viewW, viewH);
      ctx.font = "bold 8px monospace";
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.fillText("UI CLIENT PORTAL & DASHBOARD — NEXT.JS", labelUi.x, labelUi.y);

      // Ambient particles floating between logic and UI layers
      if (separation > 0.3) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
        for (let i = 0; i < 6; i++) {
          const ptX = Math.sin(pulseTime * 0.4 + i) * 60;
          const ptY = Math.cos(pulseTime * 0.25 + i * 2.3) * 40;
          const ptZ = logicZ + separation * 25 + Math.sin(pulseTime + i) * 15;
          const projPt = project(ptX, ptY, ptZ, viewW, viewH);
          ctx.beginPath();
          ctx.arc(projPt.x, projPt.y, 1, 0, Math.PI * 2);
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
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] border border-white/5 bg-zinc-950/40 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl flex items-center justify-center p-4 cursor-pointer select-none group"
    >
      {/* Absolute Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[180px] h-[180px] rounded-full bg-white/5 blur-[70px] pointer-events-none group-hover:bg-white/[0.08] transition-all duration-700" />
      <div className="absolute bottom-1/4 right-1/4 w-[180px] h-[180px] rounded-full bg-white/5 blur-[70px] pointer-events-none group-hover:bg-white/[0.08] transition-all duration-700" />

      {/* Interactive State Badge */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-space-grotesk tracking-widest text-white/50">
        <div className={`h-1.5 w-1.5 rounded-full bg-white ${isHovered ? "animate-ping" : "animate-pulse"}`} />
        SYSTEM TILT: {isHovered ? "ACTIVE" : "STANDBY"}
      </div>

      <div className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-space-grotesk tracking-widest text-white/50">
        VIEW: ISOMETRIC SOFTWARE STACK
      </div>

      <canvas ref={canvasRef} className="w-full h-full block" />
      
      <p className="absolute bottom-6 font-space-grotesk text-[10px] text-white/30 uppercase tracking-widest pointer-events-none group-hover:text-white/60 transition-colors duration-300">
        💡 Hover your mouse to separate software architecture layers
      </p>
    </div>
  );
}

// ==========================================
// 2. SUB-SERVICES ANIMATED BENTO GRID
// ==========================================
interface BentoCardProps {
  title: string;
  desc: string;
  gridClass: string;
  icon: React.ElementType;
  demoType: "crm" | "portal" | "legacy" | "api";
}

function BentoCard({ title, desc, gridClass, icon: Icon, demoType }: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isHovered) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    let pulse = 0;

    const renderDemo = () => {
      pulse += 0.05;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      if (demoType === "crm") {
        // CRM: Growing live bar charts
        const barCount = 5;
        const spacing = width / (barCount + 1);
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.beginPath();
        ctx.moveTo(10, height - 20);
        ctx.lineTo(width - 10, height - 20);
        ctx.stroke();

        for (let i = 0; i < barCount; i++) {
          const barH = 30 + Math.sin(pulse + i) * 20;
          const barW = Math.min(24, spacing * 0.6);
          const x = spacing * (i + 1) - barW / 2;
          const y = height - 20 - barH;

          ctx.fillStyle = "rgba(255,255,255,0.04)";
          ctx.fillRect(x, y, barW, barH);
          ctx.strokeStyle = "rgba(255,255,255,0.3)";
          ctx.strokeRect(x, y, barW, barH);

          // Dot on top
          ctx.beginPath();
          ctx.arc(x + barW / 2, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        }
      } else if (demoType === "portal") {
        // Portal: circular dial metrics console
        const cx = width / 2;
        const cy = height / 2 - 10;
        const r = Math.min(cx, cy) * 0.5;

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.04)";
        ctx.stroke();

        // Neon dial fill
        ctx.beginPath();
        ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + (Math.sin(pulse * 0.3) * 0.5 + 0.5) * Math.PI * 2);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "rgba(255,255,255,0.7)";
        ctx.stroke();
        ctx.lineWidth = 1;

        // Pulse core
        ctx.beginPath();
        ctx.arc(cx, cy, 6 + Math.sin(pulse) * 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.2)";
        ctx.fill();
      } else if (demoType === "legacy") {
        // Legacy: red/chaotic lines organizing into clean white lines
        const lineCount = 6;
        for (let i = 0; i < lineCount; i++) {
          const y = (height / (lineCount + 1)) * (i + 1);
          
          ctx.beginPath();
          ctx.moveTo(20, y);
          // Wave becomes straight on pulse progression
          const factor = Math.max(0, 1 - (pulse * 0.1 % 2.5));
          const waveX = Math.sin(pulse + i * 2) * (20 * factor);
          ctx.bezierCurveTo(width / 3, y + waveX, (width / 3) * 2, y - waveX, width - 20, y);
          
          ctx.strokeStyle = factor > 0.4 ? "rgba(239, 68, 68, 0.3)" : "rgba(255,255,255,0.4)";
          ctx.stroke();
        }
      } else if (demoType === "api") {
        // API: flow packets between nodes
        const n1 = { x: 30, y: height / 2 };
        const n2 = { x: width / 2, y: height / 2 };
        const n3 = { x: width - 30, y: height / 2 };

        [n1, n2, n3].forEach((node) => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,255,0.03)";
          ctx.fill();
          ctx.strokeStyle = "rgba(255,255,255,0.2)";
          ctx.stroke();
        });

        // Flow packets
        const pos = (pulse * 0.1) % 2;
        const currentPacketX = pos < 1 
          ? n1.x + (n2.x - n1.x) * pos 
          : n2.x + (n3.x - n2.x) * (pos - 1);
        
        ctx.beginPath();
        ctx.arc(currentPacketX, height / 2, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(renderDemo);
    };

    renderDemo();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div
      className={`group relative p-8 sm:p-10 border border-white/10 bg-zinc-950/40 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-zinc-950/60 transition-all duration-300 min-h-[250px] sm:min-h-[300px] flex flex-col justify-between ${gridClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-0 right-0 w-44 h-44 bg-white/[0.02] rounded-full blur-3xl" />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-60" />
      </div>

      <div className="space-y-4 relative z-10">
        <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-playfair text-2xl text-white group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        <p className="font-space-grotesk text-sm text-white/50 leading-relaxed max-w-lg">
          {desc}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-1.5 text-xs font-space-grotesk text-white/30 uppercase tracking-widest relative z-10 group-hover:text-white/60 transition-colors">
        <span>Active Simulation</span>
        <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}

// ==========================================
// 3. CASE STUDY BLURRED PREVIEWS & BREAKDOWN MODALS
// ==========================================
interface CaseStudy {
  id: string;
  badge: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  snippets: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "cohesive-consulting-solutions",
    badge: "Web Dev · SEO · Automation",
    title: "Cohesive Consulting Solutions",
    problem:
      "Despite 20 years of experience and strict client confidentiality, Cohesive Consulting Solutions lacked organic search visibility, zero Schema markup context for Google, slow page load latency, and no automated channels to capture or qualify inbound enquiries.",
    solution:
      "We engineered a custom Next.js website optimized for Core Web Vitals, configured complete technical schemas (LocalBusiness, ProfessionalService, FAQ), optimized metadata silos, and integrated a 24/7 automated WhatsApp Business chatbot.",
    impact:
      "Achieved 90+ mobile PageSpeed scores, automated lead qualification, and created structured GDPR-compliant lead pipelines, resolving enquiries instantly.",
    snippets: ["Next.js Architecture", "WhatsApp Welcome Bot", "Structured Schema Maps"]
  }
];

// ==========================================
// 4. MAIN CLIENT COMPONENT EXPORT
// ==========================================
export function CustomSoftwareClient() {

  // Infinite Tech marquee items
  const techLogos = [
    { name: "Node.js", category: "Backend" },
    { name: "Go (Golang)", category: "High Performance" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "In-Memory cache" },
    { name: "Next.js", category: "Full-Stack Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Go (Golang)", category: "High Performance" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "In-Memory cache" },
    { name: "Next.js", category: "Full-Stack Frontend" }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative overflow-hidden">
      
      {/* Cinematic ambient background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,20,20,0.9),#000000_80%)]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[url('/noise.svg')] mix-blend-overlay" />
        <div className="absolute top-[15%] right-[-15%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[140px]" />
      </div>

      {/* ==========================================================
          HERO SECTION: SPLIT SCREEN INTERACTION
         ========================================================== */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 sm:pt-24 lg:pt-32 pb-16 overflow-hidden border-b border-white/10 z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
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
                  Custom Architecture & Flow
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight text-white text-balance"
              >
                Enterprise Custom <br />
                <span className="text-white">
                  Software & <br /> Internal Tooling
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-space-grotesk text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl border-l-2 border-white pl-6"
              >
                We engineer scalable enterprise software and internal tools to streamline your operational workflows.
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

            {/* Right Column: WebGL/Canvas perspective software layers separation */}
            <motion.div
              className="lg:col-span-6 w-full"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <IsometricLayerCanvas />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          INTRO SECTION: IMPACT & AUTOMATION
         ========================================== */}
      <section className="py-20 md:py-32 px-4 md:px-8 border-b border-white/5 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-5 space-y-4">
              <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/60">Philosophy</span>
              <h2 className="font-playfair text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Software That Adaptes to Your Workflows, Not the Other Way Around.
              </h2>
            </div>
            
            <div className="md:col-span-7 space-y-6">
              <p className="font-space-grotesk text-white/50 text-base sm:text-lg leading-relaxed">
                Custom software stops the bleeding of manual data entry and fragmented communication. By automating data flows and providing custom views for different stakeholders, we reduce operational overhead and give leadership the clarity needed to make data-driven decisions.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-white font-medium mb-1">Automated Pipelines</h4>
                    <p className="font-space-grotesk text-xs text-white/40">Complete elimination of manual spreadsheet sync lags and redundant data entry bottlenecks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg text-white font-medium mb-1">Centralized Sync</h4>
                    <p className="font-space-grotesk text-xs text-white/40">Consolidating SaaS metrics and distributed storage databases into a secure platform.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SUB-SERVICES BENTO GRID SECTION
         ========================================== */}
      <section id="bento" className="relative py-20 md:py-32 px-4 md:px-8 bg-[#030303] border-b border-white/5 z-10">
        <div className="container mx-auto max-w-7xl">
          
          <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto space-y-4">
            <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white px-4 py-1 border border-white/10 bg-white/5 rounded-full">
              Full Stack Capabilities
            </span>
            <h2 className="font-playfair text-4xl sm:text-6xl text-white tracking-tight">
              Modular Sub-Services
            </h2>
            <p className="font-space-grotesk text-white/50 text-sm">
              From CRM systems to API mesh layers — every capability is engineered for your exact operational workflow.
            </p>
          </div>

          {/* Bento grid with explicit placement to guarantee masonry layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto_auto] gap-6 lg:gap-8">
            {/* Row 1, Col 1-2: CRM */}
            <BentoCard
              title="Bespoke CRM & ERP Systems"
              desc="Centralizing your operational data pipelines for total visibility. Automate sales funnels, handle logistics routing, and run multi-warehouse balance systems."
              gridClass="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2"
              icon={Database}
              demoType="crm"
            />
            
            {/* Rows 1-2, Col 3: Portal (tall card) */}
            <BentoCard
              title="Internal Dashboards & Portals"
              desc="Clean, role-based interfaces that surface critical metrics in real-time. Give warehouse logistics or customer executives custom access tools."
              gridClass="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3"
              icon={Monitor}
              demoType="portal"
            />

            {/* Row 2, Col 1: Legacy */}
            <BentoCard
              title="Legacy Modernization"
              desc="Refactoring aging codebases into agile, microservice environments. Patch critical security vulnerabilities and normalize databases."
              gridClass="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3"
              icon={Cpu}
              demoType="legacy"
            />

            {/* Row 2, Col 2: API (fills the gap next to Legacy, below CRM) */}
            <BentoCard
              title="API Development & Integration"
              desc="Connecting disparate SaaS platforms into a unified ecosystem. Custom REST and GraphQL interfaces running behind rate-limited webhook triggers."
              gridClass="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3"
              icon={Terminal}
              demoType="api"
            />
          </div>

        </div>
      </section>

      {/* ==========================================
          PROOF OF WORK: BLURRED UI SNIPPETS GRID & MODALS
         ========================================== */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 border-b border-white/5 z-10">
        <div className="container mx-auto max-w-6xl">
          
          <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto space-y-4">
            <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/60">
              Sanitized Preview
            </span>
            <h2 className="font-playfair text-4xl sm:text-6xl text-white tracking-tight">
              Featured Case Study
            </h2>
            <p className="font-space-grotesk text-sm text-white/50 max-w-lg mx-auto">
              For privacy, proprietary client dashboards are sanitized and blurred. Click the preview snippet below to inspect the detailed Problem, Solution, and Impact analysis.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.id}`}
                className="group block relative border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Mock UI Background (Blurred) */}
                <div className="h-[240px] bg-zinc-950 p-6 flex flex-col justify-between border-b border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                  
                  {/* Blurred mock content layout */}
                  <div className="space-y-4 filter blur-md group-hover:blur-[3px] transition-all duration-700 pointer-events-none select-none">
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-2 bg-white/20 rounded-full" />
                      <div className="w-16 h-4 bg-white/10 rounded-full" />
                    </div>
                    <div className="h-6 w-3/4 bg-white/20 rounded-md" />
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-white/10 rounded-md" />
                      <div className="h-3 w-5/6 bg-white/10 rounded-md" />
                      <div className="h-3 w-4/5 bg-white/10 rounded-md" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {study.snippets.map((snip, i) => (
                        <div key={i} className="h-6 bg-white/10 rounded-md flex items-center justify-center text-[5px] text-white/30">
                          {snip}
                        </div>
                      ))}
                    </div>
                  </div>

                  <span className="relative z-20 font-space-grotesk text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                    {study.badge}
                  </span>
                </div>

                {/* Case Study Details overlay summary */}
                <div className="p-6 bg-[#030303] flex justify-between items-center">
                  <div>
                    <h3 className="font-playfair text-lg text-white font-semibold">
                      {study.title}
                    </h3>
                    <p className="font-space-grotesk text-xs text-white/40 mt-1">
                      Click to read case study
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Dynamic routing replaces popup breakdowns. */}

      {/* ==========================================
          TECH STACK LOGO GRID SECTION
         ========================================== */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 md:py-32 border-b border-white/5 bg-black relative z-10"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <h3 className="font-playfair text-white/90 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
              Trusted by modern operators across industries.
            </h3>
            <p className="font-playfair text-white/40 text-base sm:text-lg font-light">
              From pilot to scale without chaos.
            </p>
          </div>

          {/* Staggered Logo Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center"
          >
            {techLogos.slice(0, 5).map((tech, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="text-center group select-none cursor-default"
              >
                <span className="font-space-grotesk text-xl md:text-2xl font-bold tracking-tight text-white block">
                  {tech.name}
                </span>
                <span className="font-space-grotesk text-[9px] uppercase tracking-widest text-white/50 block mt-1.5">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ==========================================
          CINEMATIC CALL TO ACTION
         ========================================== */}
      <section className="py-24 md:py-40 relative overflow-hidden border-t border-white/10 px-4 bg-[#050505] z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="space-y-8">
            <div className="inline-flex h-12 w-12 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/40">
              <Cpu className="h-5 w-5" />
            </div>
            
            <h2 className="font-playfair text-4xl sm:text-6xl md:text-7xl text-white leading-tight font-bold">
              Ready to Automate <br /> & Scale Operations?
            </h2>
            
            <p className="font-space-grotesk text-sm sm:text-base md:text-lg text-white/50 max-w-xl mx-auto">
              We combine distributed, high-performance database microservices with highly optimized React interfaces to scale organizational data and drive business-wide efficiency.
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
