import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, ShieldCheckIcon } from "@/components/meta-ads/icons";

const features = [
  "Free Top-up Platform",
  "Unlimited Ad Budget",
  "Instant Replacements",
  "24/7 Support",
];

function AccessCta({ className }: { className: string }) {
  return (
    <div className={className}>
      <a href="#" className="cta-btn btn-white visually-hidden-cta" tabIndex={-1} aria-hidden="true">
        <span className="cta-text">Contact Us</span>
        <span className="cta-arrow">
          <ArrowUpRightIcon />
        </span>
      </a>
      <Link href="/checkout?service=meta" className="cta-btn btn-gradient">
        <span className="cta-text">Purchase</span>
        <span className="cta-arrow">
          <ArrowUpRightIcon />
        </span>
      </Link>
    </div>
  );
}

export function MetaHero() {
  return (
    <section className="meta-hero" aria-label="Hero">
      <div className="hero-bg-container">
        <div className="hero-bg-bleed" />
      </div>
      <div className="hero-content">
        <div className="hero-copy">
          <div className="tag-image-wrapper">
            <Image
              src="/assets/images/shared/badge-meta-partner.png"
              alt="Meta Business Partner"
              width={90}
              height={38}
              className="tag-logo-img"
              priority
            />
          </div>
          <div className="tagline-pill">
            <span className="tagline-text">Rent Facebook Agency Ads Account</span>
          </div>
          <h1 className="hero-title">Powered by Meta&apos;s Official Partner Network</h1>
          <div className="features-list">
            {features.map((feature) => (
              <div className="feature-item" key={feature}>
                <span className="check-icon">
                  <ShieldCheckIcon />
                </span>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>
          <AccessCta className="cta-group cta-desktop-only" />
        </div>
        <div className="hero-media">
          <div className="hero-image-wrapper">
            <Image
              src="/assets/images/meta-ads/hero-visual.png"
              alt="Facebook Ads Manager on AGrowth Agency"
              width={450}
              height={405}
              className="hero-right-img"
              priority
            />
          </div>
        </div>
      </div>
      <AccessCta className="cta-group cta-mobile-only" />
    </section>
  );
}
