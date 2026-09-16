import type { ReactNode } from "react";

export type CaseStudyHeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseStudyDetail = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  lead: string;
  heroBg: string;
  heroImage: CaseStudyHeroImage;
  service: string;
  challenge: ReactNode;
  solution: ReactNode;
  results: ReactNode;
};
