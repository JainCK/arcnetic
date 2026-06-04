"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";


export function ContactFooterV2() {
  return (
    <section className="bg-black py-32 px-4 relative overflow-hidden flex flex-col items-center justify-center text-center border-t border-white/5">
      {/* Subtle radial glow — same as about page */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_#000000_70%)] pointer-events-none" />

      <div className="relative z-10 container mx-auto flex flex-col items-center">
        <p className="font-space-grotesk text-xs uppercase tracking-[0.5em] text-white/30 mb-8">
          Ready to dominate?
        </p>

        <Link href="/contact" className="group inline-flex flex-col items-start mb-32 relative">
          <div className="relative flex items-center">
            <h2 className="font-playfair text-[10vw] leading-none text-white tracking-tighter">
              Let's Talk
            </h2>
            <ArrowUpRight className="absolute left-full h-12 w-12 md:h-32 md:w-32 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-700" />
          </div>
          <div className="h-[3px] w-0 bg-white transition-all duration-500 group-hover:w-full mt-3" />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl border-t border-white/10 pt-16">
          <div className="flex flex-col items-center md:items-start text-left">
            <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/30 mb-2">General Inquiries</span>
            <a href="mailto:support@arcnetic.com" className="font-inter text-lg text-white hover:text-white/60 transition-colors duration-300">support@arcnetic.com</a>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/30 mb-2">Direct Line</span>
            <a href="tel:+919995007616" className="font-inter text-lg text-white hover:text-white/60 transition-colors duration-300">+91 9995 007 616</a>
          </div>
          <div className="flex flex-col items-center md:items-end text-right">
            <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/30 mb-2">Headquarters</span>
            <span className="font-inter text-lg text-white">Kochi, Kerala, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
