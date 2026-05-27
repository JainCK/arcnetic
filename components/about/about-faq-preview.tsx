"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutFaqPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null); // All items collapsed by default

  const aboutFaqs = [
    {
      question: "When was Arcnetic founded?",
      answer:
        "Arcnetic was founded in 2025 with a vision to revolutionize digital solutions through innovative technology and exceptional user experiences.",
    },
    {
      question: "What makes Arcnetic different?",
      answer:
        "Our unique blend of cutting-edge technology, creative design, and strategic thinking sets us apart. We focus on long-term partnerships and measurable results.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work across various industries including fintech, healthcare, e-commerce, SaaS, and emerging technologies, adapting our expertise to each sector's unique needs.",
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-black relative border-t border-white/10">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-left"
          >
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight tracking-tight">
              Frequently asked <br className="hidden lg:inline" /> questions
            </h2>
            <p className="font-space-grotesk text-white/40 text-base md:text-lg">
              A quick look at who we are and how we work.
            </p>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="border-t border-white/10 mb-12">
              {aboutFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="py-6 cursor-pointer group border-b border-white/10"
                  >
                    <div className="flex gap-4 items-start">
                      {/* Plus/Minus Indicator */}
                      <span className="text-blue-500 font-space-grotesk text-xl font-bold flex-shrink-0 w-6 h-6 flex items-center justify-center select-none transition-colors duration-300">
                        {isOpen ? "—" : "+"}
                      </span>
                      
                      <div className="flex-grow">
                        <h3 className="font-playfair text-xl text-white font-semibold group-hover:text-white/80 transition-colors">
                          {faq.question}
                        </h3>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto", marginTop: 12 },
                                collapsed: { opacity: 0, height: 0, marginTop: 0 }
                              }}
                              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                              className="overflow-hidden"
                            >
                              <p className="font-space-grotesk text-white/50 text-base leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-left">
              <Link href="/faq">
                <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  <span className="flex items-center gap-2 font-space-grotesk tracking-widest text-xs">
                    VIEW FULL FAQ
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}