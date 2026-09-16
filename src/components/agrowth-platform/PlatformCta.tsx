import Link from "next/link";
import { ArrowRightIcon } from "@/components/agrowth-platform/icons";

export function PlatformCta() {
  return (
    <section className="cta2 platform-cta">
      <div className="container _relative">
        <div className="heading">
          <h2>Ready To Scale Without Limits?</h2>
          <p>
            If you&apos;re stuck with ad account restrictions, unstable performance, or scaling roadblocks, it&apos;s time to switch to a smarter solution
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
