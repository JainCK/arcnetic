"use client";

import { motion } from "framer-motion";

export function MorphingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 60% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 60%)",
            "radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.05) 0%, transparent 60%)",
            "radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.05) 0%, transparent 60%)",
            "radial-gradient(circle at 60% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 60%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  );
}
