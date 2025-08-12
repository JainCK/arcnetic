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
    default:
      "Custom Software Development in Kochi - Arcnetic | Business & AI Solutions",
    template: "%s | Arcnetic - Software Solutions",
  },
  description:
    "Arcnetic is a leading software development company in Kochi, Kerala, specializing in custom business software, AI-powered solutions, and digital transformation. We build scalable enterprise applications that drive growth and efficiency.",
  keywords: [
    "custom software development Kochi",
    "enterprise software solutions",
    "AI development company India",
    "digital transformation services",
    "business automation software",
    "software consultancy Kerala",
    "scalable web applications",
    "technology consulting Kochi",
    "enterprise software developers India",
    "cloud solutions",
    "SaaS platform development",
    "API development",
    "full-stack development company",
    "IT services Kochi",
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
    title: "Arcnetic: Elite Custom Software & AI Solutions in Kochi",
    description:
      "Partner with Arcnetic to build transformative business software. We deliver scalable applications, AI systems, and digital transformation strategies that produce measurable results.",
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
    title: "Arcnetic: Elite Custom Software & AI Solutions in Kochi",
    description:
      "Partner with Arcnetic to build transformative business software. We deliver scalable applications, AI systems, and digital transformation strategies that produce measurable results.",
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
      url: "https://arcnetic.com/images/arcnetic-logo.png",
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
      streetAddress:
        "Beyond Co-working, VS-08, 90 A, South, Canal Rd, Giri Nagar, Kadavanthra",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      postalCode: "682020",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "aswin.p@arcnetic.com",
      telephone: "+91-9995007616",
      url: "https://arcnetic.com/#contact",
      areaServed: "Worldwide",
      availableLanguage: "English",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
