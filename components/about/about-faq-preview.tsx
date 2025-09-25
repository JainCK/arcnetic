"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HelpCircle,
  ArrowRight,
  Building,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AboutFaqPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const aboutFaqs = [
    {
      icon: Building,
      question: "When was Arcnetic founded?",
      answer:
        "Arcnetic was founded in 2025 with a vision to revolutionize digital solutions through innovative technology and exceptional user experiences.",
      category: "Company History",
    },
    {
      icon: Lightbulb,
      question: "What makes Arcnetic different from other agencies?",
      answer:
        "Our unique blend of cutting-edge technology, creative design, and strategic thinking sets us apart. We focus on long-term partnerships and measurable results.",
      category: "Our Approach",
    },
    {
      icon: Rocket,
      question: "What industries do you specialize in?",
      answer:
        "We work across various industries including fintech, healthcare, e-commerce, SaaS, and emerging technologies, adapting our expertise to each sector's unique needs.",
      category: "Expertise",
    },
    {
      icon: Users,
      question: "How does your team collaboration process work?",
      answer:
        "We believe in transparent collaboration with dedicated project managers, regular updates, and direct access to our development team throughout the project lifecycle.",
      category: "Team & Process",
    },
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Get to know us better through commonly asked questions about our
            company, culture, and approach to creating exceptional digital
            experiences.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <Accordion type="single" collapsible className="border-none">
            {aboutFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-b border-border/50 last:border-b-0"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <faq.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xs text-primary font-medium mb-1 uppercase tracking-wide">
                        {faq.category}
                      </div>
                      <div className="text-lg font-medium text-foreground">
                        {faq.question}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="ml-14">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Learn More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                Have More Questions?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Explore our comprehensive FAQ section for detailed answers about
                our services, processes, pricing, and everything else you need
                to know about working with Arcnetic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                  asChild
                >
                  <a href="/faq" className="flex items-center gap-2">
                    View Complete FAQ
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/10"
                  asChild
                >
                  <a href="/contact">Contact Us Directly</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
