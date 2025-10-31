import type { Metadata } from "next";
import { homeMetadata } from "@/lib/metadata";
import { OrganizationStructuredData } from "@/components/seo/structured-data";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSummary } from "@/components/sections/AboutSummary";
import { ServicesSummary } from "@/components/sections/ServicesSummary";
import { StrategySummary } from "@/components/sections/strategy-summary";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { ContactSummary } from "@/components/sections/ContactSummary";
import { TrustIndicators } from "@/components/sections/trust-indicator";
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
