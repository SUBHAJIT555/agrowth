"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/google-ads/FadeIn";

const rows = [
  {
    criteria: "Global Market Targeting",
    agrowth: "Global targeting across many countries (US, UK, EU, CA...)",
    regular: "Limited to the country of registration",
  },
  {
    criteria: "Top-up & Spend",
    agrowth: "Instant top-up, unlimited spend limits, no hidden fees via Agent Mart AI auto platform",
    regular: "Fixed spend thresholds and top-up limits",
  },
  {
    criteria: "Ban Risk & Recovery",
    agrowth: "Lower suspension risk with policy-compliant setup and appeal support",
    regular: "High risk of ban; appeals are slow and uncertain",
  },
  {
    criteria: "Account Approval",
    agrowth: "Faster approvals with pre-reviewed ad setup guidance",
    regular: "Slower creative review, frequent disapprovals",
  },
  {
    criteria: "Operational Downtime",
    agrowth: "Zero (Automated & self-service)",
    regular: "High (Waiting for top-ups/appeals)",
  },
  {
    criteria: "Balance Management",
    agrowth: "All-in-one platform",
    regular: "Manual and scattered",
  },
  {
    criteria: "Support",
    agrowth: "Instant support with ad policy expertise",
    regular: "Standard support with no priority",
  },
];

export function TikTokBeats() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("animate", entry.isIntersecting);
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tiktok-beats" aria-labelledby="tiktok-beats-heading">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <h2 id="tiktok-beats-heading">
              How Agent Mart AI Beats
              <span>Regular Ad Accounts Every Single Time</span>
            </h2>
          </div>
        </FadeIn>
        <div className="comparison-grid" ref={gridRef}>
          <div className="comparison-card card-dark card-criteria" style={{ "--col-delay": "0.1s" } as CSSProperties}>
            <div className="card-top-content">
              <div className="card-header" />
              {rows.map((row, index) => (
                <div className="row-item" style={{ "--row-index": index } as CSSProperties} key={row.criteria}>
                  <span className="criteria-title">{row.criteria}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="comparison-card card-orange" style={{ "--col-delay": "0.3s" } as CSSProperties}>
            <div className="card-top-content">
              <div className="card-header">
                <h3 className="card-header-title text-white">Agent Mart AI Premium Agency Account</h3>
              </div>
              {rows.map((row, index) => (
                <div className="row-item" data-label={row.criteria} style={{ "--row-index": index } as CSSProperties} key={row.criteria}>
                  <span className="agrowth-desc" data-label={row.criteria}>
                    {row.agrowth}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="comparison-card card-dark" style={{ "--col-delay": "0.5s" } as CSSProperties}>
            <div className="card-top-content">
              <div className="card-header">
                <h3 className="card-header-title text-orange">Regular Ads Account</h3>
              </div>
              {rows.map((row, index) => (
                <div className="row-item" data-label={row.criteria} style={{ "--row-index": index } as CSSProperties} key={row.criteria}>
                  <span className="regular-desc" data-label={row.criteria}>
                    {row.regular}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
