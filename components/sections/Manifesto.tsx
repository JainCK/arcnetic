"use client";
import { motion } from "framer-motion";

export function Manifesto() {
  const words = "We don't just build software. We architect digital dominance for the modern age.".split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-black py-20 md:py-40 px-4 min-h-[50vh] md:min-h-[80vh] flex items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="max-w-4xl mx-auto flex flex-wrap gap-x-2 md:gap-x-4 gap-y-2 justify-center"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={item}
            className="font-playfair text-3xl sm:text-4xl md:text-7xl text-white font-medium"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}