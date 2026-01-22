"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Smartphone, Cloud, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "web-development",
    title: "Web",
    icon: Globe,
    colSpan: "md:col-span-2", // Bento: Wide block
    bg: "from-blue-900/20 to-black",
  },
  {
    id: "mobile-development",
    title: "Mobile",
    icon: Smartphone,
    colSpan: "md:col-span-1", // Bento: Small block
    bg: "from-purple-900/20 to-black",
  },
  {
    id: "ai-solutions",
    title: "Artificial Intelligence",
    icon: Brain,
    colSpan: "md:col-span-1",
    bg: "from-emerald-900/20 to-black",
  },
  {
    id: "cloud-infrastructure",
    title: "Infrastructure",
    icon: Cloud,
    colSpan: "md:col-span-2",
    bg: "from-orange-900/20 to-black",
  },
];

export function ServicesBento() {
  return (
    <section className="bg-black py-20 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Minimal Header */}
        <div className="mb-8 md:mb-16 flex justify-between items-end border-b border-white/10 pb-4">
          <h2 className="font-playfair text-4xl md:text-5xl text-white">Capabilities</h2>
          <span className="font-space-grotesk text-[10px] md:text-xs text-white/40 mb-2">02 — SERVICES</span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 ${service.colSpan}`}
            >
              <Link href={`/services/${service.id}`} className="block h-full w-full p-8 relative z-20">
                {/* Hover Gradient Reveal */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <service.icon className="h-8 w-8 text-white/70 group-hover:text-white transition-colors" />
                    <ArrowUpRight className="h-6 w-6 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <h3 className="font-space-grotesk text-3xl font-light text-white group-hover:tracking-wider transition-all">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}