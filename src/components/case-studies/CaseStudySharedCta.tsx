import Link from "next/link";
import { ArrowRightIcon } from "@/components/case-studies/icons";

const sharedCtaHref =
  "/services?utm_source=banner&utm_medium=thanhnb&utm_campaign=rent_service_casestudy&utm_content=blog_sidebar_casestudy";

export function CaseStudySharedCta() {
  return (
    <section className="cta2 cs-shared-cta">
      <div className="container _relative">
        <div className="heading">
          <h2>Ready to scale without limit?</h2>
          <p>
            If you&apos;re stuck with ad account restriction, unstable performance, or scaling roadbloacks, it&apos;s time to switch to a smarter solution.
          </p>
          <div className="form-area">
            <Link className="theme-btn3" href={sharedCtaHref}>
              Contact Us
              <span>
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
