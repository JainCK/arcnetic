import type { Metadata } from "next";
import { contactMetadata } from "@/lib/metadata";
import { SimpleContactForm } from "@/components/forms/simple-contact-form";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden border-b border-white/10">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#111] via-[#000000] to-[#000000]" />
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="max-w-4xl">
            <span className="font-space-grotesk text-xs uppercase tracking-[0.3em] text-white/40 border border-white/10 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm mb-8 inline-block">
              Contact Us
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium font-playfair text-white mb-8 tracking-tight leading-[0.9]">
              Start the <br/> Conversation.
            </h1>
            <p className="text-xl text-white/50 max-w-2xl font-space-grotesk leading-relaxed">
              Ready to engineer the inevitable? Let's discuss how Arcnetic can transform your business with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT GRID --- */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* LEFT COLUMN: INFO & LOCATIONS */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Direct Contact */}
              <div>
                <h3 className="text-2xl font-playfair text-white mb-6">Direct Channels</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/30 font-space-grotesk mb-1">Email Us</p>
                      <a href="mailto:aswin.p@arcnetic.com" className="text-lg text-white hover:underline font-playfair">
                        support@arcnetic.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/30 font-space-grotesk mb-1">Call Us</p>
                      <a href={`tel:${process.env.PHONE || "+917558952771"}`} className="text-lg text-white hover:underline font-playfair">
                        {process.env.PHONE || "+91-7558952771"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/10 w-full" />

              {/* Locations */}
              <div>
                <h3 className="text-2xl font-playfair text-white mb-6">Headquarters</h3>
                <div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="font-space-grotesk text-sm text-white/60 leading-relaxed">
                      <strong className="text-white block mb-1 font-playfair text-lg">India Office</strong>
                      {process.env.BUSINESS_ADDRESS || "Beyond Co-working, VS-08, 90 A, South, Canal Rd"}<br />
                      Giri Nagar, Kadavanthra<br />
                      {process.env.BUSINESS_CITY || "Kochi"}, {process.env.BUSINESS_STATE || "Kerala"} {process.env.BUSINESS_ZIP || "682020"}
                    </div>
                  </div>
                  
                  {/* Dark Map Embed */}
                  <div className="w-full h-48 rounded-lg overflow-hidden border border-white/10 relative grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4998.9443487481985!2d76.29866968062858!3d9.962951712250177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08733b6ee513b3%3A0x50318f647a0c9b6d!2sArcnetic!5e0!3m2!1sen!2sin!4v1757759832372!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* Overlay to ensure clicks work but style is maintained */}
                    <div className="absolute inset-0 pointer-events-none bg-black/20" />
                  </div>
                </div>
              </div>

              {/* Canada Office (Coming Soon) */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-between opacity-60">
                <div className="flex items-center gap-4">
                  <Globe className="w-5 h-5 text-white/40" />
                  <div>
                    <strong className="text-white block font-playfair">Canada Office</strong>
                    <span className="text-xs text-white/40 font-space-grotesk">Global Expansion</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-widest text-white/40 border border-white/5">
                  Coming Soon
                </span>
              </div>

            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="lg:col-span-7">
              <div className="sticky top-32">
                <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-[#050505] shadow-2xl relative overflow-hidden">
                  {/* Subtle decorative gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                  
                  <div className="relative z-10 mb-8">
                    <h2 className="text-3xl md:text-4xl font-playfair text-white mb-2">Send a Message</h2>
                    <p className="text-white/40 font-space-grotesk">
                      Tell us a bit about yourself, and we'll tell you how we can help.
                    </p>
                  </div>

                  <div className="relative z-10">
                    <SimpleContactForm />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}