import type { Metadata } from "next";
import { CaseStudyListing } from "@/components/case-study/CaseStudyListing";
import "@/styles/case-study.css";

export const metadata: Metadata = {
  title: "Case Study",
};

export default function CaseStudyPage() {
  return (
    <div className="case-study-page">
      <CaseStudyListing />
    </div>
  );
}
