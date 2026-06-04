import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyById, allCaseStudies } from "@/lib/case-studies-data";
import { CaseStudyDetailClient } from "@/components/case-studies/case-study-detail-client";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return allCaseStudies.map((cs) => ({
    id: cs.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = getCaseStudyById(id);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Arcnetic",
    };
  }

  return {
    title: `${caseStudy.client} Case Study | Arcnetic`,
    description: caseStudy.description,
    keywords: [
      `${caseStudy.client.toLowerCase()} case study`,
      `${caseStudy.tag.toLowerCase()} project`,
      "arcnetic client success",
      `${caseStudy.industry.toLowerCase()} software`,
    ],
    openGraph: {
      title: `${caseStudy.client} Success Story — ${caseStudy.title} | Arcnetic`,
      description: caseStudy.description,
      type: "website",
      url: `/case-studies/${caseStudy.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.client} Case Study | Arcnetic`,
      description: caseStudy.description,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const caseStudy = getCaseStudyById(id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <CaseStudyDetailClient caseStudy={caseStudy} />
    </main>
  );
}
