import Link from "next/link";
import { ArrowRightIcon } from "@/components/meta-ads/icons";

export function MetaCta() {
  return (
    <section className="cta2 meta-cta">
      <div className="container _relative">
        <div className="heading">
          <h2>Ready To Scale Without Limits?</h2>
          <div className="space16" />
          <p>
            If you&apos;re stuck with ad account restrictions, unstable performance, or scalling roadblocks, it&apos;s time to switch to a smarter solution
          </p>
          <div className="form-area">
            <Link className="theme-btn3" href="/contact-us">
              CONTACT US NOW
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
