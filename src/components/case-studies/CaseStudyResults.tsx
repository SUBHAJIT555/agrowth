import type { ReactNode } from "react";
import { CsSectionTitle } from "@/components/case-studies/CsSectionTitle";

export function CaseStudyResults({ children }: { children: ReactNode }) {
  return (
    <section className="agrowth-cs-results container">
      <header className="results__header">
        <CsSectionTitle prefix="The" highlight="Results" />
        <div className="content">
          <article>
            <div className="results__intro cs-prose">{children}</div>
          </article>
        </div>
      </header>
    </section>
  );
}
