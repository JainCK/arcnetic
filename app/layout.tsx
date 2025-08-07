import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arcnetic.com"),
  title: {
    default: "Arcnetic - Elite Software Solutions | Transform Your Business",
    template: "%s | Arcnetic - Elite Software Solutions",
  },
  description:
    "Arcnetic delivers world-class software solutions for businesses. Custom applications, AI systems, and digital transformation services that drive exceptional business results.",
  keywords: [
    "business software",
    "digital transformation",
    "custom software development",
    "AI solutions",
    "business automation",
    "software consultancy",
    "business applications",
    "scalable solutions",
    "technology consulting",
    "software architecture",
    "enterprise software",
    "web applications",
    "mobile app development",
    "cloud solutions",
    "API development",
    "database design",
    "DevOps services",
    "software consulting",
    "agile development",
    "full-stack development",
  ].join(", "),
  authors: [{ name: "Arcnetic Team", url: "https://arcnetic.com" }],
  creator: "Arcnetic",
  publisher: "Arcnetic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  classification: "Business Software Development",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arcnetic.com",
    title: "Arcnetic - Elite Software Solutions",
    description:
      "Transform your business with world-class software solutions. Custom applications, AI systems, and digital transformation services that drive exceptional business results.",
    siteName: "Arcnetic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arcnetic - Elite Software Solutions for Business Transformation",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Arcnetic Logo - Elite Software Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcnetic - Elite Software Solutions",
    description:
      "Transform your business with world-class software solutions and digital transformation services.",
    creator: "@arcnetic",
    site: "@arcnetic",
    images: [
      {
        url: "/twitter-image.jpg",
        alt: "Arcnetic - Elite Software Solutions",
      },
    ],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
  alternates: {
    canonical: "https://arcnetic.com",
    languages: {
      "en-US": "https://arcnetic.com",
    },
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://arcnetic.com/#organization",
    name: "Arcnetic",
    url: "https://arcnetic.com",
    logo: {
      "@type": "ImageObject",
      url: "https://arcnetic.com/images/logo1.png",
      width: 600,
      height: 60,
    },
    description:
      "Elite software solutions for forward-thinking businesses. Custom applications, AI systems, and digital transformation services.",
    foundingDate: "2024",
    industry: "Software Development",
    employees: {
      "@type": "QuantitativeValue",
      value: "10-50",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IND",
      addressRegion: "Global",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "aswin.p@arcnetic.com",
      url: "https://arcnetic.com/#contact",
    },
    sameAs: [
      "https://twitter.com/arcnetic",
      "https://linkedin.com/company/arcnetic",
    ],
    services: [
      "Custom Software Development",
      "AI Solutions",
      "Digital Transformation",
      "Business Applications",
      "Cloud Solutions",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://arcnetic.com/#website",
    url: "https://arcnetic.com",
    name: "Arcnetic",
    description: "Elite software solutions for forward-thinking businesses",
    publisher: {
      "@id": "https://arcnetic.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://arcnetic.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="color-scheme" content="dark light" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="icon" href="/images/favicon/favicon.ico" sizes="32x32" />
        <link
          rel="icon"
          href="/images/favicon/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/images/favicon/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/images/favicon/apple-touch-icon.png"
        />
        {/* Syntax highlighting styles */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/images/favicon/android-chrome-192x192.png"
          sizes="192x192"
          type="image/png"
        />
        <link
          rel="icon"
          href="/images/favicon/android-chrome-512x512.png"
          sizes="512x512"
          type="image/png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link rel="canonical" href="https://arcnetic.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GoogleAnalytics />
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
