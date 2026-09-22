import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetailLayout } from "@/components/case-studies/CaseStudyDetailLayout";
import { getCaseStudy, getCaseStudySlugs } from "@/data/case-studies/registry";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const path = `/blogs/case-study/${study.slug}`;

  return {
    title: study.metaTitle,
    description: study.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${study.metaTitle} – Agent Mart AI`,
      description: study.description,
      url: path,
      images: [study.heroImage.src],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return <CaseStudyDetailLayout study={study} />;
}
