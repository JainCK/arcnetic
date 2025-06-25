"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function InteractiveGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/10"
            />
          </pattern>
          <radialGradient id="spotlight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <motion.circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r="200"
          fill="url(#spotlight)"
          animate={{
            cx: mousePosition.x,
            cy: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      </svg>
    </div>
  );
}
