import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TechStackDisplay } from "@/components/services/TechStackDisplay";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getServiceHighlight,
} from "@/lib/services-data";
import { ArrowRight, Check, Shield } from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    serviceSlug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    serviceSlug: slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - Arcnetic`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} - Professional Services | Arcnetic`,
      description: service.shortDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* --- HERO SECTION: CINEMATIC VOID --- */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center pt-32 pb-16 md:pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#000000] to-[#000000]" />
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            
            {/* Left: Text Content */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                 <div className="h-px w-8 md:w-12 bg-white/20" />
                 <span className="font-space-grotesk text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50">
                   Professional Service
                 </span>
              </div>
              
              <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] md:leading-[0.9] text-white">
                {service.title}
              </h1>
              
              <p className="font-space-grotesk text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl border-l border-white/10 pl-6">
                {service.shortDescription}
              </p>

              <div className="pt-4 md:pt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="outline" className="h-12 md:h-14 px-6 md:px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm group">
                    <span className="font-space-grotesk tracking-widest text-[10px] md:text-xs">INITIATE PROJECT</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Minimal Image Display - Hidden on very small mobile if desired, or kept responsive */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="aspect-[4/5] relative rounded-none overflow-hidden border border-white/10 bg-white/5 group">
                <Image
                  src={service.heroImage || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-80 grayscale group-hover:grayscale-0"
                  priority // LCP optimization
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-[10px] font-space-grotesk uppercase tracking-wider text-white border border-white/20 bg-black/50 backdrop-blur-md"
                      >
                        {feature}
                      </span>
                    ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE: MINIMAL GRID --- */}
      <section className="py-20 md:py-32 border-t border-white/5 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Sticky Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit mb-8 lg:mb-0">
              <span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-white/40 block mb-4">
                The Advantage
              </span>
              <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6 md:mb-8 text-balance">
                Why Arcnetic for {service.title}?
              </h2>
              <p className="font-space-grotesk text-white/50 leading-relaxed text-sm">
                {service.longDescription}
              </p>
            </div>

            {/* Feature Grid */}
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                {service.features.map((feature, i) => (
                  <div key={feature} className="group border-t border-white/10 pt-6 transition-colors hover:border-white/40">
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-space-grotesk text-xs text-white/30">0{i + 1}</span>
                      <Check className="h-4 w-4 text-white/40 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-playfair text-xl md:text-2xl text-white mb-2">{feature}</h4>
                    <p className="font-space-grotesk text-sm text-white/50">
                      Professional {feature.toLowerCase()} services engineered for scale and performance.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OFFERINGS: ULTRA CLEAN ACCORDION --- */}
      <section className="py-20 md:py-32 bg-[#050505] px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 md:mb-20 text-center">
            <h2 className="font-playfair text-4xl md:text-6xl text-white mb-6">
              Capabilities
            </h2>
            <p className="font-space-grotesk text-white/50 max-w-2xl mx-auto px-4">
              Comprehensive solutions designed to meet all your {service.title.toLowerCase()} needs. 
              Precision engineered for the modern enterprise.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {service.subServices.map((subService, index) => (
              <AccordionItem
                key={subService.title}
                value={`item-${index}`}
                className="border border-white/10 bg-white/[0.02] px-4 md:px-6 py-2 transition-all duration-300 hover:bg-white/[0.05] data-[state=open]:bg-white/[0.08] data-[state=open]:border-white/20"
              >
                <AccordionTrigger className="hover:no-underline py-6 group text-left">
                  <div className="flex items-center gap-4 md:gap-6 text-left">
                    <span className="font-space-grotesk text-xs text-white/30 group-hover:text-white transition-colors shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-playfair text-xl md:text-3xl text-white group-hover:tracking-wide transition-all">
                      {subService.title}
                    </h3>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-8">
                  <div className="pl-0 md:pl-12 grid md:grid-cols-2 gap-8 md:gap-12 pt-4">
                    <div className="space-y-6">
                      <p className="font-space-grotesk text-white/70 leading-relaxed text-base md:text-lg">
                        {subService.description}
                      </p>
                      <div className="p-6 border border-white/10 bg-black/40">
                        <p className="font-space-grotesk text-sm text-white/60">
                          <span className="block text-xs uppercase tracking-widest text-white/30 mb-2">Highlight</span>
                          {getServiceHighlight(subService.title)}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="font-space-grotesk text-xs uppercase tracking-widest text-white/30 block mb-4">Includes</span>
                      {subService.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 group/item">
                          <div className="h-px w-4 bg-white/20 group-hover/item:w-6 transition-all" />
                          <span className="font-space-grotesk text-sm text-white/70 group-hover/item:text-white">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* --- TECH STACK: DARK MODE --- */}
      <section className="py-20 md:py-32 border-t border-white/5 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">
                Architecture & Tech
              </h2>
              <p className="font-space-grotesk text-white/50 text-sm md:text-base">
                We leverage cutting-edge technologies and industry best practices to deliver exceptional results.
              </p>
            </div>
            <div className="h-px flex-1 bg-white/10 hidden md:block mx-8 mb-2" />
          </div>

          <div className="max-w-6xl mx-auto">
            <TechStackDisplay
              techStack={service.techStack}
              showCategories={true}
            />
          </div>
        </div>
      </section>

      {/* --- CTA: MINIMAL --- */}
      <section className="py-24 md:py-40 relative overflow-hidden px-4">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-white/[0.02]" />
        
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Shield className="h-10 w-10 md:h-12 md:w-12 text-white/20 mx-auto" />
            
            <h2 className="font-playfair text-4xl md:text-7xl text-white leading-tight">
              {service.cta.title}
            </h2>
            
            <p className="font-space-grotesk text-base md:text-lg text-white/50 max-w-xl mx-auto">
              {service.cta.description}
            </p>

            <div className="pt-8">
              <Link href="/contact" className="inline-block group">
                 <div className="relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 md:px-12 py-4 md:py-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <span className="flex items-center gap-4 font-space-grotesk text-xs md:text-sm tracking-[0.2em] font-medium">
                      {service.cta.buttonText.toUpperCase()}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                 </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}