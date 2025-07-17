"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function AboutSection() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });

  return (
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
                  We partner with visionary businesses to build software that
                  doesn't just solve today's challenges—it creates tomorrow's
                  opportunities. Our mission is to deliver transformative
                  technology solutions that drive measurable business growth and
                  competitive advantage.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-primary mb-4 font-playfair">
                  Our Approach
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-space-grotesk">
                  Every solution we build is architected for business scale,
                  security, and performance. We combine cutting-edge technology
                  with proven business strategy to deliver software that
                  transforms operations and accelerates growth.
                </p>
              </div>

              <motion.div
                className="grid grid-cols-3 gap-3 pt-8"
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
                    <div className="text-sm font-bold text-primary font-space-grotesk">
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
                <Image
                  src="/images/office.jpg"
                  alt="Arcnetic enterprise software development team"
                  className="object-cover rounded-2xl"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUGITFRYfDR/9oADAMBAAIRAxEAPwA="
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
  );
}
