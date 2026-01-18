import type { Metadata } from "next";
import { homeMetadata } from "@/lib/metadata";
import { OrganizationStructuredData } from "@/components/seo/structured-data";

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustIndicators } from "@/components/sections/trust-indicator";

const AboutSummary = dynamic(() => import("@/components/sections/AboutSummary").then(mod => mod.AboutSummary));
const ServicesSummary = dynamic(() => import("@/components/sections/ServicesSummary").then(mod => mod.ServicesSummary));
const StrategySummary = dynamic(() => import("@/components/sections/strategy-summary").then(mod => mod.StrategySummary));
const FaqPreview = dynamic(() => import("@/components/sections/FaqPreview").then(mod => mod.FaqPreview));
const ContactSummary = dynamic(() => import("@/components/sections/ContactSummary").then(mod => mod.ContactSummary));
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = homeMetadata;

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arcnetic.com";

// Home page structured data from your original file
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${baseUrl}/#webpage`,
  url: baseUrl,
  name: "Arcnetic - Elite Software Solutions",
  description:
    "Transform your business with world-class software solutions. Custom applications, AI systems, and digital transformation services.",
  isPartOf: {
    "@id": `${baseUrl}/#website`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <OrganizationStructuredData />

      {/* Page Content */}

      <main className="overflow-x-hidden">
        <HeroSection />
        <SectionDivider variant="waves" />
        <TrustIndicators />
        <SectionDivider variant="geometric" />
        <AboutSummary />
        <ServicesSummary />
        <SectionDivider variant="geometric" />
        <StrategySummary />
        <SectionDivider variant="geometric" />
        <FaqPreview />
        <SectionDivider variant="waves" />
        <ContactSummary />
      </main>
    </>
  );
}
