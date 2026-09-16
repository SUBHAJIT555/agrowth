import type { ReactNode } from "react";
import { CsSectionTitle } from "@/components/case-studies/CsSectionTitle";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "@/components/case-studies/icons";

export function CaseStudyChallenge({
  service,
  children,
}: {
  service: string;
  children: ReactNode;
}) {
  return (
    <section className="agrowth-cs-challenge container">
      <div className="challenge__header">
        <div className="challenge__left">
          <CsSectionTitle prefix="The" highlight="Challenge" />
          <div className="content">
            <article className="challenge__content">
              <div className="challenge__lead cs-prose">{children}</div>
            </article>
          </div>
        </div>
        <aside className="challenge__right">
          <div className="social-section">
            <p className="challenge__side-title">Share case study</p>
            <div className="challenge__social">
              <a href="#" target="_blank" className="social" aria-label="Share on Social" rel="noopener">
                <FacebookIcon />
              </a>
              <a href="#" target="_blank" className="social" aria-label="Share on Social" rel="noopener">
                <TwitterIcon />
              </a>
              <a href="#" target="_blank" className="social" aria-label="Share on Social" rel="noopener">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="services-section">
            <p className="challenge__side-title">Services Provided</p>
            <p className="challenge__services">{service}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
