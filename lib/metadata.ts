import type { Metadata } from "next";
import { serverConfig } from "./config";

export const homeMetadata: Metadata = {
  title: "Arcnetic - Elite Software Solutions | Transform Your Business",
  description:
    "Arcnetic delivers world-class software solutions for businesses. Custom applications, AI systems, and digital transformation services that drive exceptional business results.",
  keywords:
    "business software, digital transformation, custom software development, AI solutions, business automation, software consultancy, enterprise applications",
  openGraph: {
    title: "Arcnetic - Elite Software Solutions",
    description:
      "Transform your business with world-class software solutions. Custom applications, AI systems, and digital transformation services.",
    url: "https://arcnetic.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arcnetic - Elite Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: serverConfig.social.twitter,
    creator: serverConfig.social.twitter,
    title: "Arcnetic - Elite Software Solutions",
    description:
      "Transform your business with world-class software solutions and digital transformation services.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://arcnetic.com",
  },
};

export const servicesMetadata: Metadata = {
  title: "Our Services - Custom Software Development | Arcnetic",
  description:
    "Discover our comprehensive software development services: custom applications, AI solutions, digital transformation, cloud solutions, and enterprise software development.",
  keywords:
    "custom software development, AI solutions, digital transformation, cloud solutions, enterprise software, web applications, mobile app development",
  openGraph: {
    title: "Our Services - Custom Software Development | Arcnetic",
    description:
      "Discover our comprehensive software development services for business transformation.",
    url: "https://arcnetic.com#services",
    type: "website",
  },
};

export const aboutMetadata: Metadata = {
  title: "About Arcnetic - Elite Software Development Team",
  description:
    "Learn about Arcnetic's mission to deliver transformative software solutions. Our expert team combines cutting-edge technology with proven business strategy.",
  keywords:
    "about arcnetic, software development team, business strategy, cutting-edge technology, expert developers",
  openGraph: {
    title: "About Arcnetic - Elite Software Development Team",
    description:
      "Learn about our mission to deliver transformative software solutions for businesses.",
    url: "https://arcnetic.com#about",
    type: "website",
  },
};

export const contactMetadata: Metadata = {
  title: "Contact Arcnetic - Get Your Software Project Started",
  description:
    "Ready to transform your business with custom software solutions? Contact Arcnetic today for a consultation. Let's discuss your project requirements.",
  keywords:
    "contact arcnetic, software consultation, project requirements, custom software quotes, business transformation",
  openGraph: {
    title: "Contact Arcnetic - Get Your Software Project Started",
    description:
      "Ready to transform your business? Contact us for a consultation.",
    url: "https://arcnetic.com#contact",
    type: "website",
  },
};
