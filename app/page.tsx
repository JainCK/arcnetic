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
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";
import { FloatingElements } from "@/components/floating-elements";
import { ParallaxText } from "@/components/parallax-text";
import { ScrollProgress } from "@/components/scroll-progress";
import { EnterpriseServices } from "@/components/enterprise-services";
import { TrustIndicators } from "@/components/trust-indicator";
import { SectionDivider } from "@/components/section-divider";
import { MagneticButton } from "@/components/magnetic-button";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });

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
        <ScrollProgress />
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
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 max-w-4xl"
              />
            </motion.div>
            {/* Subtitle - Enterprise Focused */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
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
              transition={{ duration: 0.8, delay: 1.2 }}
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
              transition={{ duration: 0.8, delay: 1.5 }}
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
        <section
          ref={aboutRef}
          id="about"
          className="py-32 bg-gradient-to-b from-muted/5 to-background relative overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-20">
                <motion.h2
                  className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-playfair"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Why Arcnetic
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={aboutInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-px bg-gradient-to-r from-primary to-secondary mx-auto mb-12 max-w-xs"
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-10"
                >
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-primary mb-4 font-playfair">
                      Our Mission
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed font-space-grotesk">
                      We partner with visionary businesses to build software
                      that doesn't just solve today's challenges—it creates
                      tomorrow's opportunities. Our mission is to deliver
                      transformative technology solutions that drive measurable
                      business growth and competitive advantage.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-primary mb-4 font-playfair">
                      Our Approach
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed font-space-grotesk">
                      Every solution we build is architected for business scale,
                      security, and performance. We combine cutting-edge
                      technology with proven business strategy to deliver
                      software that transforms operations and accelerates
                      growth.
                    </p>
                  </div>

                  <motion.div
                    className="grid grid-cols-3 gap-6 pt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {["Innovation", "Security", "Scale"].map((value, index) => (
                      <motion.div
                        key={value}
                        className="text-center p-4 rounded-2xl border border-primary/20"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-xl font-bold text-primary font-space-grotesk">
                          {value}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))",
                          "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.1))",
                          "linear-gradient(225deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))",
                          "linear-gradient(315deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                        ],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                    <img
                      src="/images/office.jpg"
                      alt="Arcnetic enterprise software development team"
                      className="w-full h-full object-cover rounded-2xl relative z-0.5"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl z-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

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

        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
