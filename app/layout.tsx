import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
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
  title: "Arcnetic - Elite Software Solutions | Transform Your Business",
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
  ].join(", "),
  authors: [{ name: "Arcnetic", url: "https://arcnetic.com" }],
  creator: "Arcnetic",
  publisher: "Arcnetic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      "Transform your business with world-class software solutions. Business applications and digital transformation services.",
    siteName: "Arcnetic",
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
    title: "Arcnetic - Elite Software Solutions",
    description:
      "Transform your business with world-class software solutions and digital transformation services.",
    creator: "@arcnetic",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://arcnetic.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
