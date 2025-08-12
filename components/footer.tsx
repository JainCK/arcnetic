"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, ArrowRight, MapPin } from "lucide-react";
import { usePublicConfig } from "@/hooks/usePublicConfig";
import Link from "next/link";
import Image from "next/image";

const solutions = [
  "Full-Stack Development",
  "Business Applications",
  "AI Solutions",
  "Digital Transformation",
  "Cloud Solutions",
];

const company = ["About", "Careers", "Blog", "Contact"];

const Footer: FC = () => {
  const { config } = usePublicConfig();

  return (
    <footer className="py-20 bg-gradient-to-t from-muted/20 to-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <motion.div
                className="flex items-center mb-2"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/arcnetic-logo.png"
                  alt="Arcnetic Logo"
                  width={120}
                  height={34}
                  className="h-10 w-auto mr-1"
                />
                <h3 className="text-3xl font-bold bg-primary bg-clip-text text-transparent font-playfair">
                  Arcnetic
                </h3>
              </motion.div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed font-space-grotesk">
                Elite software solutions for forward-thinking businesses.
              </p>

              {/* Address Section */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground text-sm font-medium">
                    Location
                  </span>
                </div>
                <address className="text-muted-foreground text-sm leading-relaxed not-italic">
                  Beyond Co-working, VS-08, 90 A, South,
                  <br />
                  Canal Rd, Giri Nagar, Kadavanthra,
                  <br />
                  Kochi, Kerala 682020, India
                </address>
              </div>
              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-xl"
                    asChild
                  >
                    <a
                      href={`https://linkedin.com/${config?.social.linkedin || "company/arcnetic"}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-xl"
                    asChild
                  ></Button>
                </motion.div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 font-space-grotesk">Solutions</h4>
              <div className="space-y-3">
                {solutions.map((item) => (
                  <motion.div
                    key={item}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 font-space-grotesk">Company</h4>
              <div className="space-y-3">
                <motion.a
                  href="#about"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  About
                </motion.a>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="/careers"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </motion.div>
                <motion.a
                  href="#contact"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Contact
                </motion.a>
                <motion.div className="mt-6">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/pricing">
                      View Pricing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            className="border-t border-border/50 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-foreground font-space-grotesk">
              © 2025-26 Arcnetic. All rights reserved. | Software Solutions
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
