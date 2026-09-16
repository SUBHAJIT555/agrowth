import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, ShieldCheckIcon } from "@/components/tiktok-ads/icons";

const features = [
  "Instant Budget Allocation",
  "Dedicated Support",
  "High-trust Accounts",
  "24/7 Auto Top-up",
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
      <Link href="#lets-scale-your-ads" className="cta-btn btn-gradient">
        <span className="cta-text">Get Access</span>
        <span className="cta-arrow">
          <ArrowUpRightIcon />
        </span>
      </Link>
    </div>
  );
}

export function TikTokHero() {
  return (
    <section className="tiktok-hero" aria-label="Hero">
      <div className="hero-bg-container">
        <div className="hero-bg-bleed" />
      </div>
      <div className="hero-content">
        <div className="hero-copy">
          <div className="tag-image-wrapper">
            <Image
              src="/assets/images/shared/badge-tiktok-marketing-partner.jpg"
              alt="TikTok Marketing Partner"
              width={90}
              height={38}
              className="tag-logo-img"
              priority
            />
          </div>
          <div className="tagline-pill">
            <span className="tagline-text">Rent TikTok Agency Ads Account</span>
          </div>
          <h1 className="hero-title">Scale Limitlessly with TikTok Agency Accounts</h1>
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
              src="/assets/images/tiktok-ads/hero-visual.png"
              alt="TikTok Ads showcase"
              width={450}
              height={525}
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
