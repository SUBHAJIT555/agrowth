export type CaseStudyCard = {
  title: string;
  href: string;
  image: string;
  tags: string[];
};

export const caseStudyFilters = [
  { id: "all", label: "ALL" },
  { id: "e-commerce", label: "E-COMMERCE" },
] as const;

export const caseStudies: CaseStudyCard[] = [
  {
    title: "Faith Hope Love",
    href: "/blogs/case-study/faith-hope-love",
    image: "/assets/images/case-study/faith-hope-love.png",
    tags: [],
  },
  {
    title: "Lumeera",
    href: "/blogs/case-study/lumeera",
    image: "/assets/images/case-study/lumeera.png",
    tags: ["e-commerce"],
  },
  {
    title: "Schaedelsucht",
    href: "/blogs/case-study/schaedelsucht",
    image: "/assets/images/case-study/schaedelsucht.png",
    tags: ["e-commerce"],
  },
  {
    title: "MarketWatch",
    href: "/blogs/case-study/marketwatch",
    image: "/assets/images/case-study/marketwatch.png",
    tags: ["e-commerce"],
  },
  {
    title: "Good in the Woods",
    href: "/blogs/case-study/good-in-the-woods",
    image: "/assets/images/case-study/good-in-the-woods.png",
    tags: ["e-commerce"],
  },
];
