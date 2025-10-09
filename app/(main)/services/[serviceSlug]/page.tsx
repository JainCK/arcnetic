import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { ArrowRight, Check, Users, Shield, Code } from "lucide-react";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  Professional Service
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {service.features.slice(0, 3).map((feature) => (
                  <Badge key={feature} variant="secondary">
                    {feature}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-md px-6 py-4">
                  Get Started
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                <Image
                  src={service.heroImage || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {"Why Choose Our "}
                {service.title}
                {"?"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Minimal feature list with dividers instead of boxed cards */}
            <div className="divide-y divide-border">
              {service.features.map((feature) => (
                <div key={feature} className="py-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {/* Using same Check icon already imported at top of file */}
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium leading-tight">{feature}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {"Professional "}
                        {feature.toLowerCase()}
                        {" services tailored to your needs."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services - Proper Accordion */}
      <section className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Left-aligned header */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Our Service Offerings
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Comprehensive solutions designed to meet all your{" "}
                {service.title.toLowerCase()} needs. Each offering is crafted
                with precision and delivered with excellence.
              </p>
            </div>

            {/* Accordion with proper collapsible functionality */}
            <Accordion type="single" collapsible className="space-y-6">
              {service.subServices.map((subService, index) => (
                <AccordionItem
                  key={subService.title}
                  value={`item-${index}`}
                  className="border-l-4 border-primary/20 hover:border-primary/40 transition-all duration-300 border-b-0"
                >
                  <div className="pl-8 relative">
                    {/* Connector dot */}
                    <div className="absolute -left-2 top-6 w-4 h-4 bg-primary/20 group-hover:bg-primary/40 rounded-full border-4 border-background transition-colors duration-300" />

                    <AccordionTrigger className="hover:no-underline pb-0 pt-4">
                      <div className="flex items-center gap-3 text-left w-full">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors duration-300">
                            {subService.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed mt-2 text-left">
                            {subService.description}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pb-8 pt-4">
                      <div className="space-y-6 ml-4">
                        {/* Features grid */}
                        <div className="grid md:grid-cols-2 gap-4">
                          {subService.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                            >
                              <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <span className="text-sm font-medium text-foreground leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Service highlight */}
                        <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">
                              Why choose this service:
                            </span>
                            {" " + getServiceHighlight(subService.title)}
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Bottom accent */}
            <div className="mt-16 pt-8 border-t border-gradient-to-r from-transparent via-primary/20 to-transparent">
              <p className="text-center text-muted-foreground">
                Need a custom solution?
                <Link
                  href="/contact"
                  className="text-primary hover:underline font-medium ml-1"
                >
                  Let's discuss your requirements
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {"Technologies We Use"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {
                "We leverage cutting-edge technologies and industry best practices to deliver exceptional results."
              }
            </p>
          </div>

          {/* Using the minimal, subtle group display */}
          <div className="max-w-5xl mx-auto">
            <TechStackDisplay
              techStack={service.techStack}
              showCategories={true}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {service.cta.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {service.cta.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-md px-6 py-4">
                  {service.cta.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  number: "10+",
                  label: "Years of Combined Expertise",
                  desc: "Led by seasoned industry professionals",
                },
                {
                  icon: Users,
                  label: "Client-Centric Process",
                  desc: "Collaborative, transparent, and agile",
                },
                {
                  icon: Code,
                  label: "Modern Tech Stack",
                  desc: "Leveraging cutting-edge technologies",
                },
                {
                  number: "24/7",
                  label: "Support Available",
                  desc: "Round-the-clock assistance",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-xl md:text-md font-bold text-primary">
                    {stat.number ? (
                      stat.number
                    ) : stat.icon ? (
                      <stat.icon className="mx-auto h-6 w-6 text-primary" />
                    ) : null}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
