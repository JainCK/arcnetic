"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function Manifesto() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "end 0.25"],
  });

  const words = "We don't just build software. We architect digital dominance for the modern age.".split(" ");

  return (
    <section ref={container} className="bg-black py-20 md:py-40 px-4 min-h-[50vh] md:min-h-[80vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-wrap gap-x-2 md:gap-x-4 gap-y-2 justify-center">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          // Create opacity transform per word
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
          
          return (
            <motion.span
              key={i}
              style={{ opacity }}
              className="font-playfair text-3xl sm:text-4xl md:text-7xl text-white font-medium"
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
}