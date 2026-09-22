import type { CSSProperties } from "react";
import Link from "next/link";

export function PlatformCta() {
  return (
    <section
      className="agrowth-cta home-cta"
      style={
        {
          "--cta-bg-image": "url('/assets/images/home/cta-background.png')",
        } as CSSProperties
      }
    >
      <div className="agrowth-cta__inner">
        <div className="agrowth-cta__container">
          <div className="agrowth-cta__content">
            <h2 className="agrowth-cta__title">Ready to Take Full Control of You Ad Budget ?</h2>
            <div className="agrowth-cta__desc">
              <p>
                Join hundreds of media buyers and agencies already using AGrowth Platform to scale faster without the manual work slowing them down
              </p>
            </div>
          </div>
          <div className="agrowth-cta__actions">
            <Link
              href="/checkout?service=platform"
              className="agrowth-cta__btn agrowth-cta__btn--primary agrowth-cta__btn--primary-inverted"
            >
              Purchase
              <span className="agrowth-cta__btn-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#ffffff"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
