import type { Metadata } from "next";
import { contactMetadata } from "@/lib/metadata";
import { ContactSection } from "@/components/forms/simple-contact-form";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 overflow-hidden border-b border-white/10">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#111] via-[#000000] to-[#000000]" />
          <div className="absolute inset-0 opacity-[0.15] bg-[url('/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="max-w-4xl">
            <span className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-white/40 border border-white/10 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm mb-8 inline-block">
              Contact Us
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium font-playfair text-white mb-8 tracking-tight leading-[0.9]">
              Start the <br /> Conversation.
            </h1>
            <p className="text-xl text-white/50 max-w-2xl font-space-grotesk leading-relaxed">
              Ready to engineer the inevitable? Let's discuss how Arcnetic can transform your business with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* ─── REDESIGNED FORM + MAP SECTION ─── */}
      <ContactSection />

    </div>
  );
}