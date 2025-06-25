"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "waves" | "geometric" | "gradient" | "dots";
}

export function SectionDivider({ variant = "waves" }: SectionDividerProps) {
  if (variant === "waves") {
    return (
      <div className="relative h-32 overflow-hidden">
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    );
  }

  if (variant === "geometric") {
    return (
      <div className="relative h-32 flex items-center justify-center overflow-hidden">
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className="relative h-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/2 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return (
    <div className="relative h-32 flex items-center justify-center">
      <motion.div
        className="grid grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary/30 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
