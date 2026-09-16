"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { ClockIcon, TargetIcon } from "@/components/home/icons";

const stats = [
  { target: "2000+", label: "Active Accounts", comma: false },
  { target: "0,2%", label: "Banned Accounts", comma: true },
  { target: "900+", label: "Advertisers", comma: false },
  { target: "98%", label: "Client Retention Rate", comma: false },
];

const outerItems = [
  { left: "6.7%", top: "100%", delay: "0.1s", type: "scaled" as const },
  { left: "14.9%", top: "44.4%", delay: "0.3s", type: "avatar1" as const },
  { left: "36.6%", top: "10.1%", delay: "0.5s", type: "topup" as const },
  { left: "63.4%", top: "10.1%", delay: "0.7s", type: "avatar2" as const },
  { left: "85.1%", top: "44.4%", delay: "0.9s", type: "target" as const },
  { left: "93.3%", top: "100%", delay: "1.1s", type: "scaled" as const },
  { left: "14.9%", top: "155.6%", delay: "1.9s", type: "clock" as const },
];

const innerItems = [
  { left: "15%", top: "100%", delay: "0s", type: "avatar3" as const },
  { left: "32.5%", top: "33.9%", delay: "0.2s", type: "brand" as const },
  { left: "67.5%", top: "33.9%", delay: "0.4s", type: "target" as const },
  { left: "85%", top: "100%", delay: "0.6s", type: "avatar3" as const },
  { left: "32.5%", top: "166.1%", delay: "1.0s", type: "clock" as const },
];

function OrbitVisual({
  type,
}: {
  type: "scaled" | "topup" | "avatar1" | "avatar2" | "avatar3" | "brand" | "target" | "clock";
}) {
  if (type === "scaled") {
    return (
      <div className="status-pill text-pill">
        <span className="emoji">🚀</span>
        <span className="pill-text">Campaign Scaled</span>
      </div>
    );
  }
  if (type === "topup") {
    return (
      <div className="status-pill text-pill">
        <span className="emoji">🪙</span>
        <span className="pill-text">Top-up Completed</span>
      </div>
    );
  }
  if (type === "avatar1") {
    return (
      <div className="avatar-item">
        <Image src="/assets/images/home/stats-avatar-1.png" alt="Client Avatar 1" className="avatar-img" width={52} height={52} />
      </div>
    );
  }
  if (type === "avatar2") {
    return (
      <div className="avatar-item">
        <Image src="/assets/images/home/stats-avatar-2.png" alt="Client Avatar 2" className="avatar-img" width={52} height={52} />
      </div>
    );
  }
  if (type === "avatar3") {
    return (
      <div className="avatar-item">
        <Image src="/assets/images/home/stats-avatar-3.png" alt="Client Avatar 3" className="avatar-img" width={52} height={52} />
      </div>
    );
  }
  if (type === "brand") {
    return (
      <div className="brand-badge">
        <Image src="/assets/images/home/stats-brand-mark.png" alt="Brand Logo" className="badge-logo" width={32} height={32} />
      </div>
    );
  }
  if (type === "target") {
    return (
      <div className="status-pill icon-only-pill">
        <span className="pill-icon">
          <TargetIcon />
        </span>
      </div>
    );
  }
  return (
    <div className="status-pill icon-only-pill">
      <span className="pill-icon">
        <ClockIcon />
      </span>
    </div>
  );
}

function parseTarget(target: string, comma: boolean) {
  const suffix = target.replace(/[0-9.,]/g, "");
  const numeric = target.replace(/[^0-9.,]/g, "");
  const value = comma ? Number(numeric.replace(",", ".")) : Number(numeric);
  return { value, suffix, comma };
}

function formatValue(value: number, comma: boolean, suffix: string) {
  if (comma) {
    return `${value.toFixed(1).replace(".", ",")}${suffix}`;
  }
  return `${Math.round(value)}${suffix}`;
}

function OrbitItem({
  className,
  left,
  top,
  delay,
  children,
  direction,
}: {
  className: string;
  left: string;
  top: string;
  delay: string;
  children: ReactNode;
  direction: "cw" | "ccw";
}) {
  const style = {
    left,
    top,
    "--delay": delay,
  } as CSSProperties;

  return (
    <div className={cn("floating-element", className)} style={style}>
      <div className={cn("upright-wrapper", direction === "cw" ? "upright-cw" : "upright-ccw")}>
        <div className="float-wrapper" style={{ "--delay": delay } as CSSProperties}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function HomeStats() {
  const { ref, inView } = useInView<HTMLElement>(0.3);
  const numbersRef = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    stats.forEach((stat, index) => {
      const el = numbersRef.current[index];
      if (!el) {
        return;
      }
      const parsed = parseTarget(stat.target, stat.comma);
      if (reduced) {
        el.textContent = formatValue(parsed.value, parsed.comma, parsed.suffix);
        return;
      }
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        el.textContent = formatValue(parsed.value * eased, parsed.comma, parsed.suffix);
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    });
  }, [inView]);

  return (
    <section ref={ref} className="home-stats-wrap">
      <div className="container">
        <div className="home-stats">
          <div className="arches-wrapper">
            <svg
              className="arches-svg static-arches"
              viewBox="0 0 1200 560"
              preserveAspectRatio="none"
              fill="none"
            >
              <path d="M 180 560 A 420 420 0 0 1 1020 560" stroke="#e2e8f0" strokeWidth="1.5" />
              <path d="M 80 560 A 520 520 0 0 1 1120 560" stroke="#e2e8f0" strokeWidth="1.5" />
            </svg>
            <div className="orbit-container orbit-outer">
              {outerItems.map((item) => (
                <OrbitItem
                  key={`${item.left}-${item.top}`}
                  className="outer-item"
                  left={item.left}
                  top={item.top}
                  delay={item.delay}
                  direction="cw"
                >
                  <OrbitVisual type={item.type} />
                </OrbitItem>
              ))}
            </div>
            <div className="orbit-container orbit-inner">
              {innerItems.map((item) => (
                <OrbitItem
                  key={`${item.left}-${item.top}`}
                  className="inner-item"
                  left={item.left}
                  top={item.top}
                  delay={item.delay}
                  direction="ccw"
                >
                  <OrbitVisual type={item.type} />
                </OrbitItem>
              ))}
            </div>
          </div>
          <div className="stats-content">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div className="stat-column" key={stat.label}>
                  <span
                    className="stat-number"
                    ref={(node) => {
                      numbersRef.current[index] = node;
                    }}
                  >
                    {stat.comma ? "0%" : stat.target.endsWith("+") ? "0+" : "0%"}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <h2 className="stats-tagline">We Build the Best Solution for Media Buyers</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
