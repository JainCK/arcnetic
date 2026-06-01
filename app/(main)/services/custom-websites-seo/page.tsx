import type { Metadata } from "next";
import { WebsitesSeoClient } from "@/components/services/WebsitesSeoClient";

export const metadata: Metadata = {
  title: "Custom Web Development & Technical SEO | Arcnetic",
  description:
    "Your website isn't just a digital brochure; it's a lead-generation engine. We engineer custom Next.js web architectures and technical SEO plans designed to rank and convert.",
  openGraph: {
    title: "Custom Web Development & Technical SEO | Arcnetic",
    description:
      "We engineer high-performance custom web architectures that prioritize core web vitals and frictionless user experiences.",
    images: ["/images/services/web-development.jpg"],
  },
};

export default function WebsitesSeoPage() {
  return <WebsitesSeoClient />;
}
