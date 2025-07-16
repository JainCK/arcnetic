"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { ArrowRight, ChevronUp } from "lucide-react";

import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { FloatingElements } from "@/components/floating-elements";
import { ParallaxText } from "@/components/parallax-text";
import { EnterpriseServices } from "@/components/enterprise-services";
import { TrustIndicators } from "@/components/trust-indicator";
import { SectionDivider } from "@/components/section-divider";
import { MagneticButton } from "@/components/magnetic-button";
import { AboutSection } from "@/components/about-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function ClientHomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPct = (clientX - innerWidth / 2) / innerWidth;
      const yPct = (clientY - innerHeight / 2) / innerHeight;
      x.set(xPct * 5);
      y.set(yPct * 5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <FloatingElements />

        {/* Hero Section - Enterprise Focus */}
        <section
          ref={heroRef}
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: backgroundY }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          </motion.div>

          <motion.div
            style={{ x, y }}
            className="container mx-auto px-4 z-10 text-center relative max-w-7xl"
          >
            {/* Extra space above title */}
            <div className="h-40 md:h-32" />
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: [0.25, 0.26, 0.35, 0.45] }}
              className="mb-8"
            >
              <motion.h1
                className="text-6xl md:text-xl lg:text-[12rem] font-bold mb-8 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent leading-none"
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-muted-foreground leading-relaxed max-w-5xl mx-auto font-space-grotesk">
                <span className="bg-primary bg-clip-text text-transparent font-semibold">
                  Elite Software Solutions for Forward-Thinking Businesses
                </span>
              </h2>
              <p className="text-sm md:text-md lg:text-md text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We build transformative software that drives measurable business
                results. From AI-powered automation to business-scale
                applications, we deliver technology that gives you a competitive
                advantage.
              </p>
            </motion.div>
            {/* Single CTA Button */}
            <motion.div
              className="flex justify-center items-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MagneticButton
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-10 py-6 bg-primary hover:from-primary/80 hover:to-secondary/80 transition-all duration-300 shadow-2xl hover:shadow-3xl rounded-2xl font-space-grotesk font-semibold"
              >
                Transform Your Business
                <ArrowRight className="ml-3 h-6 w-6" />
              </MagneticButton>
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
          </motion.div>
        </section>

        <SectionDivider variant="waves" />
        <TrustIndicators />
        <SectionDivider variant="geometric" />
        <ParallaxText baseVelocity={-3}>
          Enterprise • Innovation • Excellence • Results •
        </ParallaxText>
        <AboutSection />

        <section
          ref={servicesRef}
          id="services"
          className="relative overflow-hidden"
        >
          <EnterpriseServices />
        </section>
        <SectionDivider variant="dots" />
        <ContactForm />
        <Footer />

        {/* Scroll to Top Button */}
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-primary text-primary-foreground rounded-2xl shadow-2xl z-40 backdrop-blur-sm transition-opacity md:opacity-100 opacity-0 md:block hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ChevronUp className="h-4 w-4" />
          </motion.button>
        )}
      </div>
    </ThemeProvider>
  );
}
