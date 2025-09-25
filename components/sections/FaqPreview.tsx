"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

// Selected FAQ questions for the main page
const featuredFaqs = [
  {
    question: "What services does Arcnetic offer?",
    answer:
      "Arcnetic offers a comprehensive range of software development and technology consulting services including custom software development, cloud infrastructure solutions, mobile app development, web development, AI solutions, and ongoing maintenance and support.",
  },
  {
    question: "What is your typical project development process?",
    answer:
      "Our development process follows agile methodologies and includes: Discovery & Requirements Analysis, Technical Architecture & Planning, Design & Prototyping, Development & Testing, Deployment & Launch, and Ongoing Support & Maintenance. We maintain transparent communication throughout with regular updates.",
  },
  {
    question: "How do you ensure project quality and timelines?",
    answer:
      "We ensure quality through comprehensive testing protocols, code reviews, and continuous integration practices. For timelines, we use detailed project planning, regular sprint reviews, and maintain buffer time for unexpected challenges with weekly status updates.",
  },
  {
    question: "What technologies and frameworks do you specialize in?",
    answer:
      "We specialize in modern technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure, GCP), mobile development (React Native, Flutter), databases (PostgreSQL, MongoDB), and DevOps tools (Docker, Kubernetes, Terraform).",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "We work with both startups and established enterprises. For startups, we offer flexible engagement models and MVP development. For enterprises, we provide comprehensive digital transformation and modernization services.",
  },
];

export function FaqPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <HelpCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Frequently Asked Questions
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Got Questions? We Have Answers
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Here are some of the most common questions we get from our clients.
            Find quick answers to help you get started.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="border-none">
            {featuredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className="border-b border-border/50 last:border-b-0"
                >
                  <AccordionTrigger className="text-left font-medium text-card-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Simple Learn More Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium group"
          >
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
