import type { Metadata } from "next";
import { homeMetadata } from "@/lib/metadata";
import ClientHomePage from "@/components/client-page";
import { OrganizationStructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = homeMetadata;

// Generate static params for SSG
export async function generateStaticParams() {
  return [{}];
}

// Home page structured data
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://arcnetic.com/#webpage",
  url: "https://arcnetic.com",
  name: "Arcnetic - Elite Software Solutions",
  description:
    "Transform your business with world-class software solutions. Custom applications, AI systems, and digital transformation services.",
  isPartOf: {
    "@id": "https://arcnetic.com/#website",
  },
  about: {
    "@id": "https://arcnetic.com/#organization",
  },
  mainEntity: {
    "@type": "Service",
    "@id": "https://arcnetic.com/#service",
    name: "Custom Software Development",
    description:
      "Elite software solutions including custom applications, AI systems, and digital transformation services",
    provider: {
      "@id": "https://arcnetic.com/#organization",
    },
    serviceType: [
      "Custom Software Development",
      "AI Solutions",
      "Digital Transformation",
      "Business Applications",
      "Cloud Solutions",
      "Web Application Development",
      "Mobile App Development",
      "API Development",
      "Database Design",
      "DevOps Services",
    ],
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "Business",
    },
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
      item: "https://arcnetic.com",
    },
  ],
};

export default function HomePage() {
  return (
    <>
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
      <ClientHomePage />
    </>
  );
}
