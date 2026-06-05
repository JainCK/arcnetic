"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Manifesto } from "@/components/sections/Manifesto";

// Inline noise pattern
const NOISE_DATA_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

interface HeroParallaxProps {
  products: Product[];
}

export const HeroParallax: React.FC<HeroParallaxProps> = ({ products }) => {
  const row1Base = products.slice(0, 4);
  const row2Base = products.slice(4, 8);
  
  // Determine how many sets to render (1 on server/initial load, 4 after hydration)
  const [mounted, setMounted] = React.useState(false);

  const ref = useRef(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [unitWidth, setUnitWidth] = React.useState(0);

  React.useEffect(() => {
    setMounted(true);
    const updateWidth = () => {
      if (rowRef.current) {
        // Measure the width of exactly one repeating unit (4 items + gaps)
        setUnitWidth(rowRef.current.scrollWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Use offset that maps exactly to the container's scroll boundaries
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const springConfig = { damping: 35, stiffness: 280, mass: 0.08 };

  // 1. Parallax 3D Transforms for the Images (Finish straightening by 0.5)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.5], [25, 0]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.5], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.4, 1]), springConfig);
  
  // 2. The Vertical Drop
  // By moving from 0% to 200% by scroll 0.5, the images drop down VERY fast.
  // They will completely clear out of the description section and wait at the bottom.
  const translateYImagesRaw = useTransform(scrollYProgress, [0, 0.5], ["0%", "200%"]);
  // Optional: wrap in spring for extra smoothness, though framer-motion handles % strings cleanly now.
  const translateYImages = useSpring(translateYImagesRaw, springConfig);

  // 3. Horizontal Parallax translation
  const scrollTranslateX1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 400]), springConfig);
  const scrollTranslateX2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -400]), springConfig);

  // 4. Continuous Marquee translation
  const continuousX1 = useMotionValue(0);
  const continuousX2 = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    if (unitWidth === 0) return; // Wait until width is measured
    
    const progress = scrollYProgress.get();
    if (progress > 0.4) {
      const speedFactor = Math.min(1, (progress - 0.4) / 0.1);
      const move = delta * 0.05 * speedFactor;
      
      // Move left, wrap around when a full unit is scrolled
      let nextX1 = continuousX1.get() - move;
      if (nextX1 <= -unitWidth) {
        nextX1 += unitWidth;
      }
      continuousX1.set(nextX1);

      // Move right, wrap around when a full unit is scrolled
      let nextX2 = continuousX2.get() + move;
      if (nextX2 >= unitWidth) {
        nextX2 -= unitWidth;
      }
      continuousX2.set(nextX2);
    }
  });

  // Combine scroll horizontal offset with continuous offset
  const finalX1 = useTransform(() => scrollTranslateX1.get() + continuousX1.get());
  const finalX2 = useTransform(() => scrollTranslateX2.get() + continuousX2.get());

  return (
    <div
      ref={ref}
      className="h-[300vh] relative overflow-hidden bg-black antialiased flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* Subtle background layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ contain: "strict" }}>
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{ backgroundImage: `url("${NOISE_DATA_URL}")` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_#000000_70%)]" />
      </div>

      {/* THE IMAGES LAYER (Absolute Background) */}
      <motion.div
        style={{ 
          rotateX, 
          rotateZ, 
          y: translateYImages, 
          opacity 
        }}
        className="absolute top-0 left-0 w-full h-[100vh] flex flex-col justify-center items-center z-10"
      >
        <motion.div 
          style={{ x: finalX1, marginBottom: "clamp(2rem, 3vw, 5rem)" }} 
          className="flex flex-row-reverse will-change-transform transform-gpu"
        >
          {Array.from({ length: mounted ? 4 : 1 }).map((_, setIdx) => (
            <div 
              key={`set-${setIdx}`} 
              ref={setIdx === 0 ? rowRef : null} 
              style={{
                gap: "clamp(2rem, 3vw, 5rem)",
                paddingLeft: "clamp(2rem, 3vw, 5rem)"
              }}
              className="flex flex-row-reverse"
            >
              {row1Base.map((product, idx) => (
                <ProductCard product={product} key={`row-1-${setIdx}-${idx}`} priority={setIdx === 0 && idx < 4} />
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: finalX2 }} className="flex flex-row will-change-transform transform-gpu">
          {Array.from({ length: mounted ? 4 : 1 }).map((_, setIdx) => (
            <div 
              key={`set-${setIdx}`} 
              style={{
                gap: "clamp(2rem, 3vw, 5rem)",
                paddingRight: "clamp(2rem, 3vw, 5rem)"
              }}
              className="flex flex-row"
            >
              {row2Base.map((product, idx) => (
                <ProductCard product={product} key={`row-2-${setIdx}-${idx}`} />
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>


      {/* THE TEXT LAYER (Normal Document Flow across the 300vh container) */}
      <div className="absolute top-0 left-0 w-full h-[300vh] flex flex-col pointer-events-none">
        
        {/* Zone 1: Title Section (Images are directly behind this initially) */}
        <div className="h-[100vh] w-full flex flex-col justify-center pointer-events-auto relative z-20">
          <Header />
        </div>

        {/* Zone 2: Description Section (Images speed past this) */}
        <div className="h-[100vh] w-full pointer-events-auto relative z-20">
          <Manifesto />
        </div>

        {/* Zone 3: Looping Section (Empty space here lets the waiting images take center stage) */}
        <div className="h-[100vh] w-full pointer-events-none relative z-20">
        </div>

      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto px-4 md:px-8 w-full flex flex-col items-start">
      {/* Badge / Pill */}
      <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 shadow-xl">
        <span className="font-space-grotesk text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40">
          Next Generation Systems
        </span>
      </div>

      {/* Main Title */}
      <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[0.95] mb-8 max-w-5xl drop-shadow-2xl">
        Automating<br />
        The Future.
      </h1>

      {/* Subtitle */}
      <p className="font-space-grotesk text-white/50 text-base md:text-lg max-w-xl leading-relaxed mb-10 drop-shadow-lg font-medium">
        We architect elite software and digital systems for businesses that refuse to stand still.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 items-center">
        <Link href="/contact">
          <button className="group relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-10 py-4 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 backdrop-blur-sm font-space-grotesk tracking-[0.2em] text-xs font-bold flex items-center gap-3 cursor-pointer">
            START EVOLUTION
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
        <Link href="/services">
          <button className="rounded-full border border-white/10 bg-black/40 px-10 py-4 text-white/60 hover:text-white hover:border-white/30 hover:bg-black/80 transition-all duration-500 font-space-grotesk tracking-[0.2em] text-xs font-bold cursor-pointer backdrop-blur-md">
            EXPLORE SERVICES
          </button>
        </Link>
      </div>
    </div>
  );
};

export const ProductCard: React.FC<{
  product: Product;
  priority?: boolean;
}> = ({ product, priority = false }) => {
  const isCentered = [
    "Voltra",
    "Solis Arc",
    "Arcnetic Estimate",
    "Bizdash",
    "Client App",
  ].includes(product.title);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      style={{
        width: "clamp(16rem, 28vw, 60rem)",
        height: "clamp(10rem, 17.5vw, 37.5rem)"
      }}
      className="group/product relative flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#050505] hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-[border-color,box-shadow,transform] duration-500 transform-gpu will-change-transform"
    >
      <a
        href={product.link}
        className="block h-full w-full relative"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          className={`object-cover ${
            isCentered ? "object-center" : "object-left-top"
          } absolute inset-0 group-hover/product:scale-110 group-hover/product:opacity-80 transition-all duration-700 rounded-2xl opacity-60`}
          fill
          sizes="(max-width: 768px) 256px, (max-width: 1536px) 500px, 960px"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          decoding="async"
        />
        {/* Redirect indicator arrow */}
        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-md text-white/70 group-hover/product:bg-white group-hover/product:border-white group-hover/product:text-black transition-all duration-500 -rotate-45 group-hover/product:rotate-0 shadow-lg">
          <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
        </div>
      </a>

      {/* Hover overlay gradient */}
      <div className="absolute inset-0 opacity-20 group-hover/product:opacity-60 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 pointer-events-none" />

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent flex items-end p-4 pointer-events-none">
        <h2 className="text-white text-xs md:text-sm font-bold opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 font-space-grotesk tracking-widest uppercase">
          {product.title}
        </h2>
      </div>
    </motion.div>
  );
};
