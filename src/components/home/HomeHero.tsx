import Link from "next/link";
import { ArrowUpRightIcon, ShieldCheckIcon } from "@/components/home/icons";
import { BrandMark } from "@/components/ui/Logo";

const features = [
  "Instant Replacements",
  "24/7 Support",
  "Free Top-up Platform",
  "Unlimited Ad Budget",
];

function ContactCta({ className }: { className: string }) {
  return (
    <div className={className}>
      <Link href="/contact-us" className="cta-btn btn-white">
        <span className="cta-text">Contact Us</span>
        <span className="cta-arrow">
          <ArrowUpRightIcon />
        </span>
      </Link>
      <Link href="/checkout" className="cta-btn btn-gradient">
        <span className="cta-text">Purchase</span>
        <span className="cta-arrow">
          <ArrowUpRightIcon />
        </span>
      </Link>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="home-hero" aria-label="Hero">
      <div className="hero-bg-container">
        <div className="hero-bg-bleed" />
      </div>
      <div className="hero-content">
        <div className="hero-copy">
          <div className="tagline-pill">
            <span className="tagline-text">
              Advertising All Platforms with Premium Ad Accounts
            </span>
          </div>
          <h1 className="hero-title">
            Rent Agency Ad Accounts
            <br />
            Meta, Google, TikTok & More
          </h1>
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
          <div className="social-proof-pill">
            <span className="proof-text">
              Trusted by <strong>+1000</strong> advertisers with 98% satisfaction
            </span>
          </div>
          <ContactCta className="cta-group cta-desktop-only" />
        </div>
      </div>
      <ContactCta className="cta-group cta-mobile-only" />
      <div className="bottom-divider">
        <svg viewBox="0 0 1400 120" preserveAspectRatio="none" className="wave-svg">
          <path d="M0 120 L0 112 Q 700 15 1400 112 L 1400 120 Z" fill="#ffffff" />
        </svg>
        <div className="floating-logo-badge">
          <BrandMark
            tone="color"
            title="Agent Mart AI"
            className="logo-svg"
            style={{ width: 42, height: 42 }}
          />
        </div>
      </div>
    </section>
  );
}
