import type { Metadata } from "next";
import { CaseStudiesClient } from "@/components/case-studies/case-studies-client";

export const metadata: Metadata = {
  title: "Case Studies | Arcnetic — Real Results, Real Projects",
  description:
    "Explore how Arcnetic has transformed businesses across fintech, healthtech, e-commerce, logistics, and more — with measurable outcomes and engineering excellence.",
  keywords: [
    "case studies",
    "software development projects",
    "client success stories",
    "arcnetic portfolio",
    "AI development results",
    "custom software outcomes",
    "digital transformation examples",
  ],
  openGraph: {
    title: "Case Studies — Work That Speaks For Itself | Arcnetic",
    description:
      "Deep dives into the challenges we solved, the decisions we made, and the results we shipped.",
    type: "website",
    url: "/case-studies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Arcnetic",
    description:
      "Real outcomes from real projects — explore how Arcnetic delivers measurable results.",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <CaseStudiesClient />
    </main>
  );
}
