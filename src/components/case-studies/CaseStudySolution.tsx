import type { ReactNode } from "react";
import { CsSectionTitle } from "@/components/case-studies/CsSectionTitle";

export function CaseStudySolution({ children }: { children: ReactNode }) {
  return (
    <section className="agrowth-cs-solution container">
      <div className="solution__header">
        <CsSectionTitle prefix="Our" highlight="Solution" />
        <div className="content">
          <article>
            <div className="solution__intro cs-prose">{children}</div>
          </article>
        </div>
      </div>
    </section>
  );
}
