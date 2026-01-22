"use client";

import {
  ArrowRight,
  Code,
  Smartphone,
  BrainCircuit,
  Cloud,
  Wrench,
  BarChart,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Icon mapping for dynamic rendering
const iconMap: Record<string, LucideIcon> = {
  Code,
  Smartphone,
  BrainCircuit,
  Cloud,
  Wrench,
  BarChart,
};

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

export function ServiceCard({
  iconName,
  title,
  description,
  href,
  index,
}: ServiceCardProps) {
  const IconComponent = iconMap[iconName] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={href} className="h-full block group relative">
        <div className="h-full p-6 md:p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-[#111] transition-all duration-500 relative overflow-hidden group-hover:border-white/20 flex flex-col">
            
            {/* Hover Glow Gradient - Contained */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:scale-110 transition-transform duration-300 shrink-0">
                        {/* Slightly smaller icon on mobile */}
                        <IconComponent className="h-4 w-4 md:h-5 md:w-5 text-white/70 group-hover:text-white" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/20 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-xl md:text-2xl text-white mb-3 group-hover:tracking-wide transition-all leading-tight">
                    {title}
                </h3>
                
                <p className="font-space-grotesk text-sm text-white/50 leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {/* Footer Line & CTA */}
                <div className="mt-auto">
                   <div className="h-px w-full bg-white/5 group-hover:bg-white/20 transition-colors" />
                   <div className="pt-4">
                       <span className="font-space-grotesk text-[10px] md:text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                           Learn More
                       </span>
                   </div>
                </div>
            </div>
        </div>
      </Link>
    </motion.div>
  );
}