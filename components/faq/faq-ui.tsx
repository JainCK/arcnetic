"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Phone, Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Arcnetic offer?",
        answer:
          "Arcnetic offers a comprehensive range of software development and technology consulting services including custom software development, cloud infrastructure solutions, mobile app development, web development, DevOps & automation, digital transformation consulting, and ongoing maintenance and support.",
      },
      {
        question: "Which industries do you serve?",
        answer:
          "We serve a diverse range of industries including healthcare, fintech, e-commerce, education, manufacturing, logistics, and startups. Our team has experience adapting our solutions to meet the specific needs and compliance requirements of various sectors.",
      },
      {
        question: "Do you work with startups or only established companies?",
        answer:
          "We work with both startups and established enterprises. For startups, we offer flexible engagement models and can provide MVP development, technical guidance, and scalable solutions that grow with your business. For enterprises, we provide comprehensive digital transformation and modernization services.",
      },
    ],
  },
  {
    category: "Project Process",
    questions: [
      {
        question: "What is your typical project development process?",
        answer:
          "Our development process follows agile methodologies and includes: 1) Discovery & Requirements Analysis, 2) Technical Architecture & Planning, 3) Design & Prototyping, 4) Development & Testing, 5) Deployment & Launch, 6) Ongoing Support & Maintenance. We maintain transparent communication throughout with regular updates and milestone reviews.",
      },
      {
        question: "How do you ensure project quality and timelines?",
        answer:
          "We ensure quality through comprehensive testing protocols, code reviews, and continuous integration practices. For timelines, we use detailed project planning, regular sprint reviews, and maintain buffer time for unexpected challenges. Our project managers provide weekly status updates and maintain open communication channels.",
      },
      {
        question: "Can you work with our existing team and tools?",
        answer:
          "Absolutely! We're experienced in collaborating with in-house teams and can adapt to your existing workflows, tools, and methodologies. We can integrate with your current development environment, version control systems, and project management tools to ensure seamless collaboration.",
      },
    ],
  },
  {
    category: "Technology & Security",
    questions: [
      {
        question: "What technologies and frameworks do you specialize in?",
        answer:
          "We specialize in a wide range of modern technologies including React, Next.js, Node.js, Python, Java, .NET, cloud platforms (AWS, Azure, GCP), mobile development (React Native, Flutter), databases (PostgreSQL, MongoDB, MySQL), and DevOps tools (Docker, Kubernetes, Jenkins, Terraform).",
      },
      {
        question: "How do you handle data security and privacy?",
        answer:
          "Security is paramount in our development process. We implement industry-standard security practices including encryption, secure authentication, regular security audits, compliance with regulations like GDPR and HIPAA where applicable, and secure coding practices.",
      },
    ],
  },
  {
    category: "Engagement",
    questions: [
      {
        question: "How do you structure your pricing?",
        answer:
          "We offer flexible pricing models including fixed-price projects, hourly rates, monthly retainers, and dedicated team models. The pricing depends on project complexity, timeline, technology requirements, and team size.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "Our typical payment terms include an initial deposit (usually 30 - 50%) to start the project, followed by milestone-based payments throughout development, and final payment upon project completion.",
      },
    ],
  },
];

export function FaqUI() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section ref={containerRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Void */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#000000] to-[#000000]" />
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-white/40 border border-white/10 rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
              Knowledge Base
            </span>
          </motion.div>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Common <br className="hidden md:block" /> Queries.
          </h1>
          <p className="font-space-grotesk text-white/50 max-w-xl mx-auto text-lg leading-relaxed">
            Everything you need to know about our process, technology, and how we deliver value.
          </p>
        </motion.div>
      </section>

      {/* --- FAQ CONTENT --- */}
      <section className="relative z-10 pb-32 pt-10 px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          {faqData.map((category, catIndex) => (
            <div key={category.category} className="space-y-8">
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/40">
                  0{catIndex + 1}
                </span>
                <h3 className="font-playfair text-3xl text-white">
                  {category.category}
                </h3>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Questions */}
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.category}-${index}`}
                    className="border border-white/10 bg-[#0A0A0A] rounded-xl px-6 transition-all duration-300 hover:border-white/20 data-[state=open]:border-primary/30 data-[state=open]:bg-white/[0.02]"
                  >
                    <AccordionTrigger className="hover:no-underline py-6 group">
                      <div className="flex items-center justify-between w-full text-left gap-6">
                        <span className="font-space-grotesk text-lg text-white/90 group-hover:text-white transition-colors">
                          {faq.question}
                        </span>
                        {/* Custom Icon handled by AccordionTrigger or CSS, but adding manual logic for visual flare */}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="font-space-grotesk text-white/50 leading-relaxed text-base border-t border-white/5 pt-4">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* --- MINIMAL CTA --- */}
      <section className="py-32 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              Still have questions?
            </h2>
            <p className="font-space-grotesk text-white/50 text-lg">
              Can't find the answer you're looking for? Our team is here to help you with any specific inquiries.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="h-14 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                >
                  <span className="flex items-center gap-3 font-space-grotesk tracking-widest text-xs">
                    CONTACT SUPPORT
                    <MessageSquare className="h-4 w-4" />
                  </span>
                </Button>
              </Link>
              
              <a href="mailto:hello@arcnetic.com" className="group">
                <span className="flex items-center gap-3 font-space-grotesk tracking-widest text-xs text-white/60 group-hover:text-white transition-colors">
                  EMAIL US DIRECTLY
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}