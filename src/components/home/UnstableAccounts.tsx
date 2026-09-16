"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { ArrowUpRightIcon, WarningShieldIcon, WarningTriangleIcon } from "@/components/home/icons";

const pains = [
  {
    title: "Low spend limits",
    desc: "Campaigns start working, then spending gets capped too early",
  },
  {
    title: "Random account bans",
    desc: "Accounts get flagged suddenly and performance drops overnight",
  },
  {
    title: "Constant learning resets",
    desc: "Every dead account means lost data and starting over again",
  },
  {
    title: "Extra top-up fees",
    desc: "The more you scale, the more hidden costs eat into profit",
  },
  {
    title: "Slow balance updates",
    desc: "Delayed funding slows campaigns down at the worst time",
  },
  {
    title: "Poor support responses",
    desc: "Auto replies waste time while campaigns stay stuck",
  },
];

export function UnstableAccounts() {
  const { ref, inView } = useInView<HTMLElement>(0.28);

  return (
    <section
      ref={ref}
      className={cn("home-unstable", inView && "open-laptop")}
    >
      <div className="container">
        <div className="unstable-grid">
          <div className="visual-column">
            <Image
              src="/assets/images/home/problem-bubble.png"
              alt=""
              width={210}
              height={210}
              className="glow-blob blob-orange-1"
            />
            <Image
              src="/assets/images/home/problem-bubble.png"
              alt=""
              width={130}
              height={130}
              className="glow-blob blob-orange-2"
            />
            <Image
              src="/assets/images/home/problem-bubble.png"
              alt=""
              width={130}
              height={130}
              className="glow-blob blob-yellow"
            />
            <Image
              src="/assets/images/home/problem-bubble.png"
              alt=""
              width={100}
              height={100}
              className="glow-blob blob-yellow-2"
            />
            <div className="laptop-scene">
              <div className="laptop-reflection" />
              <div className="laptop-container">
                <div className="laptop-lid">
                  <div className="laptop-join-line" />
                  <div className="screen-inner-content">
                    <div className="camera-dot" />
                    <div className="display-panel-open">
                      <div className="browser-window-open">
                        <div className="browser-header-open">
                          <div className="dot-wrap">
                            <div className="dot-c dot-red" />
                            <div className="dot-c dot-yellow" />
                            <div className="dot-c dot-green" />
                          </div>
                          <div className="nav-arrows">&lt; &gt;</div>
                          <div className="url-bar-open">
                            https://...
                            <span className="url-star">★</span>
                          </div>
                          <div className="browser-expand-btn">⤢</div>
                        </div>
                        <div className="dialog-content-open">
                          <div className="warning-icon-open">
                            <WarningTriangleIcon />
                          </div>
                          <p className="dialog-title">Ad Account Disabled</p>
                          <p>You can&apos;t use this account to run ads.</p>
                          <button type="button" className="close-btn-open">
                            CLOSE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="laptop-base">
                  <div className="opening-notch" />
                  <div className="rubber-feet feet-left" />
                  <div className="rubber-feet feet-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-column">
            <h2 className="section-headline">
              Good Ads Can&apos;t Scale On{" "}
              <span className="headline-accent">Unstable Accounts</span>
            </h2>
            <div className="pain-points-grid">
              {pains.map((pain) => (
                <div className="pain-card" key={pain.title}>
                  <div className="card-icon-wrapper">
                    <WarningShieldIcon />
                    <span className="card-title">{pain.title}</span>
                  </div>
                  <p className="card-desc">{pain.desc}</p>
                </div>
              ))}
            </div>
            <div className="cta-wrapper">
              <Link href="#home-contact" className="home-cta-btn">
                Contact Us Now
                <span className="btn-arrow">
                  <ArrowUpRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
