"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { ArrowUpRightIcon, GoogleMark, MetaMark, TikTokMark } from "@/components/home/icons";

const tabs = [
  {
    id: "meta",
    label: "Meta",
    icon: <MetaMark />,
    title: "Meta Agency Ad Accounts",
    href: "/rent-meta-agency-ads-account",
    pills: [
      "Low Service Fees From 3%",
      "Full Package (Profile, Fanpage, BM, Proxy)",
      "Unlimited Account Replacements",
      "Dedicated 24/7 Support",
    ],
    image: "/assets/images/home/platform-meta.png",
  },
  {
    id: "google",
    label: "Google",
    icon: <GoogleMark />,
    title: "Google Agency Ad Accounts",
    href: "/rent-google-agency-ads-account",
    pills: [
      "Competitive Rates Starting From 6%",
      "Verify Your Google Business Profile",
      "Flexible Billing Options",
      "Direct 1-1 Google Partner Support",
    ],
    image: "/assets/images/home/platform-google.png",
  },
  {
    id: "tiktok",
    label: "TikTok",
    icon: <TikTokMark />,
    title: "TikTok Agency Ad Accounts",
    href: "/rent-tiktok-agency-ads-account",
    pills: [
      "Affordable Rates From 3%",
      "Unlimited Account Access & Instant Setup",
      "Scale Winning Creatives Faster",
      "Exclusive Cash Rewards Programs",
    ],
    image: "/assets/images/home/platform-tiktok.png",
  },
] as const;

export function AdPlatformTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("meta");
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="home-ad-platform-wrap">
      <div className="container">
        <div className="heading5 text-center" style={{ marginBottom: 50 }}>
          <h2
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 42,
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: 15,
              color: "#000000",
            }}
          >
            <span className="headline-part1" style={{ color: "#000000", display: "block" }}>
              Limitless Scaling With
            </span>
            <span className="headline-part2" style={{ color: "#f5822a", display: "block" }}>
              Agency Ad Accounts Across All Platforms
            </span>
          </h2>
          <p
            className="section-desc"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 15,
              color: "#64748b",
              fontWeight: 500,
              lineHeight: "28px",
            }}
          >
            Trusted by +1000 advertisers with 98% satisfaction.
          </p>
        </div>
        <div ref={ref} className={cn("home-ad-platform", inView && "in-view")}>
          <div className="tabs-bar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={cn("tab-btn", active === tab.id && "active")}
                data-tab={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                aria-label={`${tab.label} tab`}
              >
                <div className="tab-btn-content">
                  {tab.icon}
                  <span className="tab-text">{tab.label}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="layout-body">
            <div className="left-column">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={cn("tab-content-item", active === tab.id && "active")}
                >
                  <h3 className="main-title">{tab.title}</h3>
                  <div className="cards-grid">
                    {tab.pills.map((pill) => (
                      <div className="card-pill" key={pill}>
                        {pill}
                      </div>
                    ))}
                  </div>
                  <Link href={tab.href} className="btn-see-more">
                    <span className="btn-text">See More</span>
                    <span className="btn-arrow">
                      <ArrowUpRightIcon />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="right-column">
              <div className="laptop-container">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={cn("laptop-mockup-wrapper", active === tab.id && "active")}
                  >
                    <Image
                      src={tab.image}
                      alt="Dashboard Mockup"
                      className="laptop-mockup"
                      width={900}
                      height={600}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
