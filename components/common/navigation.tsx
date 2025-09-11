"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Data for the navigation links
const aboutLinks = [
  {
    title: "Our Mission",
    href: "/about#mission",
    description: "Learn what drives us.",
  },
  { title: "The Team", href: "/about#team", description: "Meet our experts." },
  { title: "Careers", href: "/careers", description: "Join our growing team." },
];

const serviceCategories = [
  {
    title: "Web & Full Stack Development",
    href: "/services/web-development",
    description: "Custom web apps, APIs, and SaaS platforms.",
  },
  {
    title: "Mobile Development",
    href: "/services/mobile-development",
    description: "Native iOS and Android applications.",
  },
  {
    title: "AI Solutions",
    href: "/services/ai-solutions",
    description: "Integrate ML and AI into your business.",
  },
  {
    title: "Cloud & Infrastructure",
    href: "/services/cloud-infrastructure",
    description: "Scalable solutions on AWS, Azure, and GCP.",
  },
  {
    title: "Maintenance & Support",
    href: "/services/maintenance-support",
    description: "Keeping your applications running smoothly.",
  },
  {
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Modernize legacy systems and processes.",
  },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className="fixed-nav fixed top-0 left-0 right-0 w-full z-[9999] bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-md"
      style={{
        position: "fixed !important" as any,
        top: "0 !important" as any,
        left: "0 !important" as any,
        right: "0 !important" as any,
        width: "100% !important" as any,
        zIndex: "9999 !important" as any,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleScrollTo("#home")}
            className="flex items-center"
          >
            <Image
              src="/images/arcnetic-logo.png"
              alt="Arcnetic Logo"
              width={140}
              height={40}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavItem href="/" onClick={() => handleScrollTo("#home")}>
              Home
            </NavItem>

            <HoverNavItem title="About">
              <div className="p-2 w-64">
                {aboutLinks.map((item) => (
                  <NavLink
                    key={item.title}
                    href={item.href}
                    title={item.title}
                    className="block w-full text-left p-3 rounded-lg hover:bg-muted"
                  />
                ))}
              </div>
            </HoverNavItem>

            <HoverNavItem title="Services" mega>
              <div className="grid grid-cols-2 gap-4 p-4 w-[36rem]">
                {serviceCategories.map((item) => (
                  <NavLink
                    key={item.title}
                    href={item.href}
                    title={item.title}
                    className="block w-full text-left p-3 rounded-lg hover:bg-muted"
                  >
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </NavLink>
                ))}
              </div>
            </HoverNavItem>

            <NavItem href="/strategies">Strategies</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                ))}
            </Button>
            <Button>Get a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <NavLink
                href="/"
                onClick={() => handleScrollTo("#home")}
                title="Home"
                className="w-full text-left p-3 font-semibold"
              />
              <MobileAccordion
                title="About"
                links={aboutLinks}
                closeMenu={() => setIsMenuOpen(false)}
              />
              <MobileAccordion
                title="Services"
                links={serviceCategories}
                closeMenu={() => setIsMenuOpen(false)}
              />
              <NavLink
                href="/strategies"
                title="Strategies"
                className="w-full text-left p-3 font-semibold"
              />
              <NavLink
                href="/blog"
                title="Blog"
                className="w-full text-left p-3 font-semibold"
              />
              <NavLink
                href="/contact"
                title="Contact"
                className="w-full text-left p-3 font-semibold"
              />
              <div className="border-t border-border mt-4 pt-4 flex justify-between items-center">
                <Button className="flex-1">Get a Quote</Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="ml-2"
                >
                  {mounted &&
                    (theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    ))}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Helper components for navigation items
const NavItem = ({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) => {
  const content = (
    <div className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </div>
  );
  return href ? (
    <Link href={href}>{content}</Link>
  ) : (
    <button onClick={onClick}>{content}</button>
  );
};

const HoverNavItem = ({
  children,
  title,
  mega,
}: {
  children: React.ReactNode;
  title: string;
  mega?: boolean;
}) => (
  <div className="group relative">
    <div className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 cursor-default">
      {title}{" "}
      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
    </div>
    <div
      className={`absolute top-full pt-2 -translate-x-1/2 left-1/2 hidden group-hover:block ${mega ? "min-w-max" : ""}`}
    >
      <div className="bg-background rounded-lg border shadow-lg overflow-hidden">
        {children}
      </div>
    </div>
  </div>
);

const NavLink = React.forwardRef<
  any,
  {
    href: string;
    title: string;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
  }
>(({ href, title, className, children, ...props }, ref) => {
  return (
    <Link href={href} ref={ref} className={className} {...props}>
      <div className="font-semibold text-foreground">{title}</div>
      {children}
    </Link>
  );
});
NavLink.displayName = "NavLink";

const MobileAccordion = ({
  title,
  links,
  closeMenu,
}: {
  title: string;
  links: { title: string; href: string }[];
  closeMenu: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 font-semibold"
      >
        {title}
        <ChevronDown
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4"
          >
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                title={link.title}
                onClick={closeMenu}
                className="block w-full text-left py-2 px-3 text-muted-foreground"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
