import Image from "next/image";
import Link from "next/link";
import type { CaseStudyDetail } from "@/data/case-studies/types";

export function CaseStudyHero({ study }: { study: CaseStudyDetail }) {
  return (
    <section className="agrowth-cs-hero" style={{ ["--cs-bg" as string]: study.heroBg }}>
      <div className="agrowth-cs-hero__inner container">
        <div className="agrowth-cs-hero__left">
          <Link className="agrowth-cs-back" href="/case-study">
            <span aria-hidden="true">←</span> Back to all casestudies
          </Link>
          <h1 className="agrowth-cs-title">{study.title}</h1>
          <p className="agrowth-cs-lead">{study.lead}</p>
        </div>
        <div className="agrowth-cs-hero__right">
          <div className="agrowth-cs-image-wrap">
            <Image
              src={study.heroImage.src}
              alt={study.heroImage.alt}
              width={study.heroImage.width}
              height={study.heroImage.height}
              sizes="(max-width: 992px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
