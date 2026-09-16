"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { caseStudies, caseStudyFilters } from "@/data/case-studies";

export function CaseStudyListing() {
  const [filter, setFilter] = useState<(typeof caseStudyFilters)[number]["id"]>("all");

  const visible = useMemo(() => {
    if (filter === "all") return caseStudies;
    return caseStudies.filter((study) => study.tags.includes(filter));
  }, [filter]);

  return (
    <section className="case-study-section">
      <div className="case-study-container">
        <h1 className="case-study-title">Case Study</h1>
        <div className="title-border" />
        <div className="filter-tabs">
          {caseStudyFilters.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={active ? "filter-tab active" : "filter-tab"}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="case-studies-grid">
          {visible.map((study, index) => (
            <Link key={study.href} href={study.href} className="case-study-card">
              <div className="card-image has-image">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={800}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={index === 0}
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{study.title}</h3>
                <div className="card-meta">
                  <div className="author">
                    <span aria-hidden="true">👤</span>
                    <span>BY ALAN TRAN</span>
                  </div>
                  {study.tags.includes("e-commerce") ? (
                    <div className="category">
                      <span aria-hidden="true">🏷️</span>
                      <span>E-COMMERCE</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
