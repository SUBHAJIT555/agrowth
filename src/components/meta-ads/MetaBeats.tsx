"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/google-ads/FadeIn";
import { CompareCheckIcon, CompareCrossIcon } from "@/components/meta-ads/icons";

const rows = [
  "All Verticals Support",
  "Unlimit Spending",
  "Account Stability",
  "Management Platform",
  "Fast Account replacement",
  "Flexible Budget Transfers",
  "Multiple Payment Methods",
  "Random Account Bans",
  "Funding Delays",
  "Extra Hidden Fees",
] as const;

export function MetaBeats() {
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
    <section className="meta-beats" aria-labelledby="meta-beats-heading">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <h2 id="meta-beats-heading">
              How Agent Mart AI Beats
              <span>Regular Ad Accounts Every Single Time</span>
            </h2>
          </div>
        </FadeIn>
        <div className="comparison-grid" ref={gridRef}>
          <div className="comparison-card card-dark card-criteria" style={{ "--col-delay": "0.1s" } as CSSProperties}>
            <div className="card-top-content">
              <div className="card-header">
                <div className="header-pill">Feature</div>
              </div>
              {rows.map((row, index) => (
                <div className="row-item" style={{ "--row-index": index } as CSSProperties} key={row}>
                  <span className="criteria-title">{row}</span>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <span className="footer-text">Best For</span>
            </div>
          </div>
          <div className="comparison-card card-orange" style={{ "--col-delay": "0.3s" } as CSSProperties}>
            <div className="card-top-content">
              <div className="card-header">
                <div className="header-pill">Agent Mart AI</div>
              </div>
              {rows.map((row, index) => (
                <div className="row-item" data-label={row} style={{ "--row-index": index } as CSSProperties} key={row}>
                  <span className="agrowth-desc" data-label={row}>
                    <CompareCheckIcon />
                  </span>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <span className="footer-text">Media buyers & Performance teams</span>
            </div>
          </div>
          <div className="comparison-card card-dark" style={{ "--col-delay": "0.5s" } as CSSProperties}>
            <div className="card-top-content">
              <div className="card-header">
                <div className="header-pill">Regular Ad Accounts</div>
              </div>
              {rows.map((row, index) => (
                <div className="row-item" data-label={row} style={{ "--row-index": index } as CSSProperties} key={row}>
                  <span className="regular-desc" data-label={row}>
                    <CompareCrossIcon />
                  </span>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <span className="footer-text">Casual advertisers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
