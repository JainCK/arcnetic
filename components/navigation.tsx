"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  // { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 30);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
        // Close mobile menu immediately when scrolling down
        setIsMenuOpen(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);

      // Update active section
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{
        duration: isMobile ? 0 : 0.3,
        ease: isMobile ? "linear" : "easeInOut",
      }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isMobile ? "" : "transition-all duration-500"
      } ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
      style={isMobile ? { display: showNav ? "block" : "none" } : {}}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <motion.button
              onClick={() => scrollToSection("#home")}
              className="bg-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Arcnetic
            </motion.button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl relative group ${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <motion.span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-12 h-12 rounded-xl"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left py-3 px-4 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
