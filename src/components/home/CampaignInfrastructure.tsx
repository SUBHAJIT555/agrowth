"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import {
  BullhornIcon,
  ChartIcon,
  CreditCardIcon,
  HeadsetIcon,
  PaletteIcon,
  UserShieldIcon,
} from "@/components/home/icons";

const rows = [
  { label: "Creative", icon: <PaletteIcon />, protected: false },
  { label: "Campaigns", icon: <BullhornIcon />, protected: false },
  {
    label: "Accounts",
    icon: <UserShieldIcon />,
    protected: true,
    desc: "Stable agency accounts built for uninterrupted advertising.",
  },
  {
    label: "Payments",
    icon: <CreditCardIcon />,
    protected: true,
    desc: "Reliable payment methods and spend stability.",
  },
  {
    label: "Support & Operations",
    icon: <HeadsetIcon />,
    protected: true,
    desc: "Priority support and fast issue resolution.",
  },
  { label: "Revenue & Growth", icon: <ChartIcon />, protected: false },
];

export function CampaignInfrastructure() {
  const { ref, inView } = useInView<HTMLElement>(0.25);

  return (
    <section ref={ref} className="home-infra">
      <div className="container">
        <div className="infra-grid">
          <div className="visual-column">
            <div className="heading5">
              <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 42, fontWeight: 800, lineHeight: 1.2 }}>
                <span className="headline-part1" style={{ color: "#000000", display: "block" }}>
                  The Infrastructure
                </span>
                <span
                  className="headline-part2"
                  style={{ color: "#ff5e00", display: "block", textTransform: "lowercase" }}
                >
                  behind every campaign
                </span>
              </h2>
            </div>
            <div className="image-card">
              <Image
                src="/assets/videos/home/infrastructure.gif"
                alt="Campaign Infrastructure"
                width={450}
                height={450}
                unoptimized
              />
            </div>
          </div>
          <div className={cn("timeline-column", inView && "animate")}>
            <div className="timeline-line" />
            <div className="timeline-container">
              {rows.map((row, index) => (
                <div
                  className="timeline-row"
                  key={row.label}
                  style={{ animationDelay: `${0.1 + index * 0.7}s` }}
                >
                  <div
                    className={cn("flow-pill", row.protected ? "pill-orange" : "pill-grey")}
                    style={
                      row.protected
                        ? { background: "#ff5e00", color: "#ffffff" }
                        : { backgroundColor: "#f1f5f9", color: "#334155" }
                    }
                  >
                    {row.icon}
                    <h3>{row.label}</h3>
                  </div>
                  {row.protected ? (
                    <>
                      <div
                        className="connector-line"
                        style={{ animationDelay: `${0.1 + index * 0.7}s` }}
                      >
                        <div className="connector-dot" />
                      </div>
                      <div
                        className="annotation-box"
                        style={{ animationDelay: `${0.1 + index * 0.7}s` }}
                      >
                        <p className="annotation-title">Protected by Agent Mart AI</p>
                        <p className="annotation-desc">{row.desc}</p>
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
