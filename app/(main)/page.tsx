import type { Metadata } from "next";
import { homeMetadata } from "@/lib/metadata";
import { OrganizationStructuredData } from "@/components/seo/structured-data";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/lib/products";

import { ServicesBento } from "@/components/sections/ServicesBento";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactFooterV2 } from "@/components/sections/ContactFooterV2";

export const metadata: Metadata = homeMetadata;

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arcnetic.com";

// Home page structured data
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${baseUrl}/#webpage`,
  url: baseUrl,
  name: "Arcnetic — Custom Software Development & AI Solutions | Kochi, India",
  description:
    "Arcnetic is a premier software development studio in Kochi, Kerala. We architect elite custom applications, AI-powered systems, and digital transformation solutions that drive exceptional business results.",
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
      <main className="overflow-x-hidden bg-black min-h-screen">
        <HeroParallax products={products} />
        <ServicesBento />
        <Testimonials />
        <ContactFooterV2 />
      </main>
    </>
  );
}
