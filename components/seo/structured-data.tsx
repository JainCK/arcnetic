import Script from "next/script";
import { serverConfig } from "@/lib/config";

interface SEOStructuredDataProps {
  data: Record<string, any> | Record<string, any>[];
}

export function SEOStructuredData({ data }: SEOStructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLd.map((item, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item),
          }}
        />
      ))}
    </>
  );
}

interface BreadcrumbItem {
  name: string;
  item: string;
  position: number;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbStructuredData({ items }: BreadcrumbProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.item,
    })),
  };

  return <SEOStructuredData data={breadcrumbSchema} />;
}

interface ServiceSchema {
  name: string;
  description: string;
  serviceType: string[];
  provider: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  areaServed?: string;
  audience?: {
    "@type": "Audience";
    audienceType: string;
  };
}

interface ServiceStructuredDataProps {
  service: ServiceSchema;
}

export function ServiceStructuredData({ service }: ServiceStructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arcnetic.com";
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#${service.name.toLowerCase().replace(/\s+/g, "-")}`,
    ...service,
  };

  return <SEOStructuredData data={serviceSchema} />;
}

export function FAQStructuredData({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <SEOStructuredData data={faqSchema} />;
}

export function OrganizationStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arcnetic.com";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: serverConfig.business.name,
    legalName: serverConfig.business.legalName,
    url: baseUrl,
    logo: `${baseUrl}/images/arcnetic-logo.png`,
    description:
      "Elite software solutions for forward-thinking businesses. Custom applications, AI systems, and digital transformation services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: serverConfig.business.address,
      addressLocality: serverConfig.business.city,
      addressRegion: serverConfig.business.state,
      postalCode: serverConfig.business.zip,
      addressCountry: serverConfig.business.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: serverConfig.contact.phone,
      email: serverConfig.contact.email,
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
    sameAs: [
      `https://twitter.com/${serverConfig.social.twitter?.replace("@", "")}`,
      `https://www.linkedin.com/${serverConfig.social.linkedin}`,
      `https://facebook.com/${serverConfig.social.facebook}`,
    ],
    foundingDate: "2024",
    knowsAbout: [
      "Software Development",
      "AI Solutions",
      "Digital Transformation",
      "Business Applications",
      "Cloud Solutions",
    ],
    serviceArea: {
      "@type": "Place",
      name: "Worldwide",
    },
  };

  return <SEOStructuredData data={organizationSchema} />;
}
