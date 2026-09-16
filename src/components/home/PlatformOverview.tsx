import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/home/icons";

const features = [
  "Self-service top-up & top-down.",
  "No middleman, no support tickets.",
  "Instant budget swap across platforms.",
  "All platforms in one place.",
];

export function PlatformOverview() {
  return (
    <section className="agrowth-platform sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto text-center">
            <div className="heading5">
              <h2 style={{ fontSize: 44, fontWeight: 600, lineHeight: "54px" }}>
                <span className="ap-headline-part1">Manage Every Platform</span>
                <span className="ap-headline-part2">From One Place</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="space50" />
        <div className="row align-items-center ap-row">
          <div className="col-lg-5">
            <div className="ap-content">
              <h3 className="ap-subheading">One dashboard. Every platform.</h3>
              <p className="ap-description">
                Top-up and top-down your ad budget across Meta, Google, TikTok and more — instantly, without going through a middleman or opening a support ticket.
              </p>
              <ul className="ap-feature-list">
                {features.map((feature) => (
                  <li key={feature}>
                    <span className="ap-check" aria-hidden="true">
                      ✓
                    </span>
                    <span className="ap-feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="ap-cta">
                <Link href="/agrowth-platform" className="home-cta-btn theme-btn3">
                  See How It Works
                  <span className="btn-arrow">
                    <ArrowUpRightIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="ap-media">
              <div className="ap-video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/uYbIlpFR6U8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Manage Every Platform"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
