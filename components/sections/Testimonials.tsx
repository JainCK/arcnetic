"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Working with the Arcnetic team to overhaul our digital presence was a seamless experience from start to finish. They didn't just build a clean, high-performing website for Cohesive Solutions; they fully structured our SEO and engineered a custom WhatsApp integration that immediately streamlined how we handle inbound leads. What stood out most was how accommodating they were to our specific operational needs, adjusting the build without any friction. The entire ecosystem was delivered right on schedule, exactly as promised. Highly recommend them for any business looking to upgrade their digital infrastructure.",
    name: "Vinu Kurian",
    role: "Founder, Cohesive Consulting Solutions"
  },
  {
    quote: "We engaged Arcnetic to build a custom CRM for our accounting firm, and the level of technical execution has been outstanding. Accounting requires strict data organization and secure workflows, and the team took the time to truly understand our requirements. They were incredibly accommodating whenever we requested specific portal adjustments and remained highly communicative throughout the entire build. Most importantly, they delivered a robust, finalized system strictly within the agreed timeline. It was a great experience working with a team that values both precision and punctuality.",
    name: "Saji Kunnel",
    role: "Founder, Accounting Firm"
  },
  {
    quote: "We had a great experience working with Arcnetic on our website development for one of my client. Their team followed a very structured and professional process throughout the project. All deliverables were clearly documented, timelines were respected, and communication was smooth from start to finish.\n\nThe final website was delivered exactly as expected, both in quality and functionality. We especially appreciate their attention to detail, transparency, and technical expertise.\n\nHighly recommended for anyone looking for a reliable and professional web development partner.",
    name: "Jagan Jijo",
    role: "Founder, Lumelensmedia UK"
  },
  {
    quote: "Great experience working with this team. They delivered excellent services in building a scalable SaaS application with a strong focus on growth and performance. What really stood out was their understanding of visitor conversion for retail businesses—they translated business goals into smart, practical software features. Professional, responsive, and highly skilled. Highly recommended for anyone looking to build or scale a SaaS product.",
    name: "Christy Daniel",
    role: "Client"
  }
];

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = quote.length > 180 || quote.includes("\n");

  const getCollapsedQuote = (text: string) => {
    if (text.length <= 160) return text;
    const sub = text.slice(0, 160);
    const lastSpace = sub.lastIndexOf(" ");
    return (lastSpace > 120 ? sub.slice(0, lastSpace) : sub) + "...";
  };

  const displayedQuote = isExpanded ? quote : (isLong ? getCollapsedQuote(quote) : quote);

  return (
    <div className="h-full min-h-[260px] rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 md:p-10 transition-all duration-500 hover:border-white/20 hover:bg-[#111] flex flex-col justify-between">
      <div>
        <p className="font-space-grotesk text-white/80 text-base md:text-lg leading-relaxed whitespace-pre-line mb-4">
          "{displayedQuote}"
        </p>
        {isLong && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-space-grotesk text-purple-400 hover:text-purple-300 font-semibold mb-6 underline underline-offset-4 decoration-purple-500/30 cursor-pointer transition-colors block animate-fadeIn"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      <div className="border-t border-white/5 pt-6 mt-auto">
        <h4 className="font-playfair text-white text-base font-medium tracking-tight">
          {name}
        </h4>
        {role && (
          <p className="font-space-grotesk text-white/40 text-xs mt-1">
            {role}
          </p>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      // Using a small buffer of 15px to avoid floating point precision issues in some browsers
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  // Autoplay Effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Check if we are at the end of the scrollable area
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 25;

        if (isAtEnd) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        } else {
          // Scroll by one card's width depending on screen size
          const cardWidth = clientWidth >= 768 ? clientWidth / 3 : clientWidth;
          scrollRef.current.scrollBy({
            left: cardWidth,
            behavior: "smooth"
          });
        }
        
        // Update button states after smooth scroll finishes
        setTimeout(checkScroll, 300);
      }
    }, 4000); // Scroll automatically every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by one card's width depending on responsive size
      const cardWidth = clientWidth >= 768 ? clientWidth / 3 : clientWidth;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
      
      // We trigger a slight delay to allow smooth scrolling to finish before updating state
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="bg-black py-24 md:py-36 px-4 border-t border-white/5 relative overflow-hidden">
      {/* Self-contained scrollbar hiding styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-white/40 border border-white/10 rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
              Testimonials
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl text-white mt-8 tracking-tight leading-[0.9]">
              People love us, you know.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4 items-center shrink-0">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${
                canScrollLeft 
                  ? "hover:bg-white hover:text-black hover:border-white cursor-pointer active:scale-95" 
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${
                canScrollRight 
                  ? "hover:bg-white hover:text-black hover:border-white cursor-pointer active:scale-95" 
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container with Interactive Pause Boundaries */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] shrink-0 snap-start"
              >
                <TestimonialCard quote={t.quote} name={t.name} role={t.role} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
