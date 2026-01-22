import type { Metadata } from "next";
import { FaqUI } from "@/components/faq/faq-ui";

export const metadata: Metadata = {
  title: "FAQ | Arcnetic - Common Queries",
  description:
    "Get answers to commonly asked questions about Arcnetic's software development services, processes, and pricing models.",
  keywords: [
    "FAQ",
    "software development questions",
    "Arcnetic process",
    "pricing models",
    "tech stack",
  ],
  openGraph: {
    title: "Common Queries | Arcnetic",
    description: "Everything you need to know about partnering with Arcnetic.",
    type: "website",
  },
};

export default function FAQPage() {
  return <FaqUI />;
}