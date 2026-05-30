"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "custom-websites-seo",
    title: "Websites & SEO",
    description: "High-performance custom web architectures and technical SEO deep-dives.",
    colSpan: "md:col-span-2",
  },
  {
    id: "mobile-development",
    title: "Mobile Platforms",
    description: "Native and cross-platform mobile experiences.",
    colSpan: "md:col-span-1",
  },
  {
    id: "ai-workflow-automation",
    title: "AI Automations",
    description: "Intelligent LLM pipelines and n8n workflows that replace manual tasks — running 24/7 without payroll.",
    colSpan: "md:col-span-1",
  },
  {
    id: "custom-software-development",
    title: "Custom Software Solutions",
    description: "Tailored CRM/ERP dashboards, microservices, and internal tooling engineered to eliminate operational friction.",
    colSpan: "md:col-span-2",
  },
];

export function ServicesBento() {
  return (
    <section className="bg-black py-32 md:py-48 px-4 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-12 md:mb-16">
          <span className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-white/40 border border-white/10 rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
            Our Expertise
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl text-white mt-8 tracking-tight leading-[0.9]">
            What We Build.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`h-full ${service.colSpan}`}
            >
              <Link href={`/services/${service.id}`} className="group block h-full relative">
                <div className="h-full min-h-[220px] md:min-h-[280px] rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden p-8 md:p-10 transition-all duration-500 hover:border-white/20 hover:bg-[#111] flex flex-col justify-end">

                  <div className="relative z-10 w-full">
                    <div className="flex justify-between items-start mb-8">
                      <span className="font-space-grotesk text-white/20 text-sm font-bold tracking-widest">
                        0{index + 1}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-500 -rotate-45 group-hover:rotate-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-playfair text-2xl md:text-3xl text-white mb-3 leading-tight tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-space-grotesk text-white/40 group-hover:text-white/60 transition-colors duration-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer line */}
                  <div className="mt-8 pt-4 border-t border-white/5 w-full flex justify-between items-center group-hover:border-white/10 transition-colors duration-500">
                    <span className="font-space-grotesk text-[9px] uppercase tracking-[0.3em] text-white/20">
                      Specification 0{index + 1}
                    </span>
                    <span className="w-10 h-px bg-white/10 group-hover:w-20 group-hover:bg-white/30 transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}