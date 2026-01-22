"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function AboutFaqPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            Common Questions
          </h2>
          <p className="font-space-grotesk text-white/50 text-lg">
            A quick look at who we are and how we work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {aboutFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border border-white/10 bg-[#0A0A0A] rounded-xl px-6 transition-all duration-300 hover:border-white/20"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  <span className="font-space-grotesk text-lg text-white/90 hover:text-white transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="font-space-grotesk text-white/50 leading-relaxed text-base border-t border-white/5 pt-4">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="text-center">
          <Link href="/faq">
            <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              <span className="flex items-center gap-2 font-space-grotesk tracking-widest text-xs">
                VIEW FULL FAQ
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}