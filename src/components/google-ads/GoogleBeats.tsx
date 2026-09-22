"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/google-ads/FadeIn";

const rows = [
  {
    criteria: "Billing & Payment",
    agrowth: "Flexible invoice-based billings",
    regular: "Fixed payment thresholds, limited methods",
  },
  {
    criteria: "Account Stability",
    agrowth: "High resistance to suspension via the agency tier",
    regular: "Easily suspended due to policy triggers",
  },
  {
    criteria: "Budget Transfer",
    agrowth: "Quick fund transfer to new account if needed",
    regular: "Longer waiting time",
  },
  {
    criteria: "Support",
    agrowth: "Priority support via Google Partner channel",
    regular: "Generic Google support, long wait times",
  },
  {
    criteria: "Cost Efficiency",
    agrowth: "Lower fees from 5%",
    regular: "Higher, no optimization",
  },
  {
    criteria: "Promotional Credit",
    agrowth: "Eligible for bonus credit up to $384",
    regular: "Rare or none for individual accounts",
  },
  {
    criteria: "Auto Top-up",
    agrowth: "Via Agent Mart Auto Platform",
    regular: "Manual",
  },
  {
    criteria: "Balance Management",
    agrowth: "All-in-one Platform",
    regular: "Manual and Scattered",
  },
];

export function GoogleBeats() {
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
    <section className="google-beats" aria-labelledby="google-beats-heading">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <h2 id="google-beats-heading">
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
                <h3 className="card-header-title text-white">Agent Mart AI</h3>
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
                <h3 className="card-header-title text-orange">Regular Ad Accounts</h3>
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
