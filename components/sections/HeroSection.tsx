"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      </motion.div>

      <div className="container mx-auto px-4 z-10 text-center relative max-w-7xl">
        <div className="h-40 md:h-32" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.26, 0.35, 0.45] }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold mb-8 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent leading-none font-playfair"
            style={{ y: textY }}
          >
            Arcnetic
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={heroInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 max-w-4xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground leading-relaxed max-w-5xl mx-auto font-space-grotesk">
            <span className="bg-primary bg-clip-text text-transparent font-semibold">
              Driving Business Growth with Custom Software & AI Solutions
            </span>
          </h2>
          <p className="text-md text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a premier software development partner in Kochi, we engineer
            transformative custom software that delivers measurable results.
            From AI-powered automation to enterprise-grade applications, we
            build technology that secures your competitive advantage.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-2xl hover:shadow-primary/40 rounded-2xl font-space-grotesk font-semibold"
          >
            Transform Your Business
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground font-space-grotesk"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Business Security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>99.9% Uptime SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <span>24/7 Expert Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
