import { faithHopeLove } from "@/data/case-studies/faith-hope-love";
import { goodInTheWoods } from "@/data/case-studies/good-in-the-woods";
import { lumeera } from "@/data/case-studies/lumeera";
import { marketwatch } from "@/data/case-studies/marketwatch";
import { schaedelsucht } from "@/data/case-studies/schaedelsucht";
import type { CaseStudyDetail } from "@/data/case-studies/types";

export const caseStudyDetails: CaseStudyDetail[] = [
  faithHopeLove,
  lumeera,
  schaedelsucht,
  marketwatch,
  goodInTheWoods,
];

export function getCaseStudy(slug: string) {
  return caseStudyDetails.find((study) => study.slug === slug);
}

export function getCaseStudySlugs() {
  return caseStudyDetails.map((study) => study.slug);
}
