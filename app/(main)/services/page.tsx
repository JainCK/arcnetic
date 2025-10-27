import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services - Custom Software, AI, and Cloud Solutions",
  description:
    "Explore Arcnetic's full suite of enterprise software services. We specialize in custom web and mobile development, AI integration, cloud infrastructure, and digital transformation strategies to elevate your business.",
  openGraph: {
    title: "Our Services - Custom Software, AI, and Cloud Solutions | Arcnetic",
    description:
      "Discover our comprehensive software services designed for business growth and innovation.",
  },
};

// We now pass a simple string for the icon name instead of the component itself.
const servicesData = [
  {
    iconName: "Code",
    title: "Web & Full-Stack Development",
    description:
      "We architect and build high-performance, scalable web applications, from dynamic single-page apps to complex enterprise-level SaaS platforms. Our full-stack expertise ensures a seamless, robust solution from database to user interface.",
    href: "/services/web-development",
  },
  {
    iconName: "Smartphone",
    title: "Mobile Development",
    description:
      "Engage your users on the go with custom native iOS and Android applications. We focus on creating intuitive, high-performance mobile experiences that deliver value and align with your business objectives.",
    href: "/services/mobile-development",
  },
  {
    iconName: "BrainCircuit",
    title: "AI Solutions",
    description:
      "Leverage the power of Artificial Intelligence to unlock new efficiencies and insights. We build and integrate custom machine learning models for predictive analytics, natural language processing, and intelligent automation.",
    href: "/services/ai-solutions",
  },
  {
    iconName: "Cloud",
    title: "Cloud & Infrastructure",
    description:
      "Build a resilient, scalable, and secure foundation for your applications. Our cloud experts design and manage robust infrastructures on AWS, Azure, and GCP, optimized for performance, cost-efficiency, and security.",
    href: "/services/cloud-infrastructure",
  },
  {
    iconName: "Wrench",
    title: "Maintenance & Support",
    description:
      "Ensure the long-term health and performance of your software with our dedicated maintenance and support plans. We provide proactive monitoring, timely updates, security patches, and expert technical assistance.",
    href: "/services/maintenance-support",
  },
  {
    iconName: "BarChart",
    title: "Digital Transformation",
    description:
      "Modernize your operations and gain a competitive edge. We help businesses upgrade legacy systems, streamline workflows with custom software, and implement data-driven strategies for sustainable growth.",
    href: "/services/digital-transformation",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 mt-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-playfair">
            Our Core Capabilities
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At Arcnetic, we deliver end-to-end software solutions engineered for
            enterprise-level performance, security, and scale. Explore our
            practice areas to see how we can help you achieve your business
            objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              iconName={service.iconName}
              title={service.title}
              description={service.description}
              href={service.href}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <h2 className="text-3xl font-bold mb-4 font-playfair">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss your requirements. We provide a complimentary
            consultation to outline a technology strategy that aligns with your
            goals.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
