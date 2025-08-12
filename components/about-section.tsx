"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export function AboutSection() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  // Detect mobile for minimal animations
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile-first animation variants
  const containerVariants = isMobile
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      };

  const titleVariants = isMobile
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, delay: 0.1 },
      };

  const underlineVariants = isMobile
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2, delay: 0.2 },
      }
    : {
        initial: { scaleX: 0 },
        animate: { scaleX: 1 },
        transition: { duration: 0.8, delay: 0.3 },
      };

  return (
    <section
      ref={aboutRef}
      id="about"
      className="py-32 bg-gradient-to-b from-muted/5 to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={containerVariants.initial}
          animate={aboutInView ? containerVariants.animate : {}}
          transition={containerVariants.transition}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-playfair"
              initial={titleVariants.initial}
              animate={aboutInView ? titleVariants.animate : {}}
              transition={titleVariants.transition}
            >
              Why Arcnetic
            </motion.h2>
            <motion.div
              initial={underlineVariants.initial}
              animate={aboutInView ? underlineVariants.animate : {}}
              transition={underlineVariants.transition}
              className="h-px bg-gradient-to-r from-primary to-secondary mx-auto mb-12 max-w-xs"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={aboutInView ? { opacity: 1 } : {}}
              transition={{
                duration: isMobile ? 0.2 : 0.4,
                delay: isMobile ? 0.1 : 0.2,
              }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-primary mb-4 font-playfair">
                  Our Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-space-grotesk">
                  Our mission is to forge long-term partnerships with visionary
                  businesses. Through expert custom software development, we
                  build solutions that not only solve today’s challenges but
                  also unlock tomorrow's opportunities for measurable growth and
                  a distinct competitive advantage.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-primary mb-4 font-playfair">
                  Our Approach
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-space-grotesk">
                  We architect every solution for enterprise-level scale,
                  security, and performance. Our approach fuses cutting-edge
                  technology with proven business strategy, delivering robust
                  software that optimizes operations and accelerates your path
                  to market leadership.
                </p>
              </div>

              <motion.div
                className="grid grid-cols-3 gap-3 pt-8"
                initial={{ opacity: 0 }}
                animate={aboutInView ? { opacity: 1 } : {}}
                transition={{
                  duration: isMobile ? 0.2 : 0.4,
                  delay: isMobile ? 0.2 : 0.4,
                }}
              >
                {["Innovation", "Security", "Scale"].map((value, index) => (
                  <motion.div
                    key={value}
                    className="text-center p-4 rounded-2xl border border-primary/20"
                    whileHover={isMobile ? {} : { scale: 1.02 }}
                    transition={
                      isMobile ? {} : { type: "tween", duration: 0.2 }
                    }
                  >
                    <div className="text-sm font-bold text-primary font-space-grotesk">
                      {value}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={aboutInView ? { opacity: 1 } : {}}
              transition={{
                duration: isMobile ? 0.2 : 0.4,
                delay: isMobile ? 0.15 : 0.3,
              }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <Image
                  src="/images/arcnetic-office.jpg"
                  alt="The Arcnetic enterprise software development team in Kochi collaborating on a project."
                  className="object-cover rounded-2xl"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUGITFRYfDR/9oADAMBAAIRAxEAPwA="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl z-20" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
