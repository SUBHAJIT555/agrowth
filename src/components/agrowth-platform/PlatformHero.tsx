import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/agrowth-platform/FadeIn";
import { ArrowRightIcon } from "@/components/agrowth-platform/icons";

export function PlatformHero() {
  return (
    <section className="abp-hero" aria-labelledby="platform-hero-heading">
      <div className="abp-bg">
        <Image
          src="/assets/images/agrowth-platform/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="abp-overlay" />
      <div className="container">
        <div className="abp-row">
          <FadeIn variant="right" className="abp-content">
            <h1 id="platform-hero-heading" className="abp-title">
              AGrowth Platform
            </h1>
            <p className="abp-subtitle">YOUR AD BUDGET, FULLY IN YOUR CONTROL</p>
            <div className="abp-divider" />
            <p className="abp-desc">
              Experience the ultimate AGrowth Auto Top-up Platform designed for Media Buyers. Manage balances, allocate budgets, and scale your campaigns 24/7 - all-in-one platform.
            </p>
            <div className="abp-btn-wrap">
              <Link className="theme-btn3" href="/checkout?service=platform">
                Purchase
                <span>
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
          </FadeIn>
          <FadeIn variant="left" className="abp-video">
            <div className="abp-video-wrap">
              <iframe
                src="https://www.youtube.com/embed/uYbIlpFR6U8"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="AGrowth Platform"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
