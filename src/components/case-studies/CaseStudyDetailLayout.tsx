import { CaseStudyChallenge } from "@/components/case-studies/CaseStudyChallenge";
import { CaseStudyHero } from "@/components/case-studies/CaseStudyHero";
import { CaseStudyResults } from "@/components/case-studies/CaseStudyResults";
import { CaseStudySharedCta } from "@/components/case-studies/CaseStudySharedCta";
import { CaseStudySolution } from "@/components/case-studies/CaseStudySolution";
import type { CaseStudyDetail } from "@/data/case-studies/types";
import "@/styles/case-study-detail.css";

export function CaseStudyDetailLayout({ study }: { study: CaseStudyDetail }) {
  return (
    <div className="cs-detail-page">
      <CaseStudyHero study={study} />
      <CaseStudyChallenge service={study.service}>{study.challenge}</CaseStudyChallenge>
      <CaseStudySolution>{study.solution}</CaseStudySolution>
      <CaseStudyResults>{study.results}</CaseStudyResults>
      <CaseStudySharedCta />
    </div>
  );
}
