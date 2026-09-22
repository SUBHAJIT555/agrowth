import { FadeIn } from "@/components/agrowth-platform/FadeIn";
import { CircleExclamationIcon, RocketIcon } from "@/components/agrowth-platform/icons";

const withoutItems = [
  "Manual top-up and top-down requests",
  "Waiting hours (or days) for account approvals",
  "No real-time visibility into spend or balance",
  "No audit trail when things go wrong",
  "Coordinating account access via spreadsheets",
];

const withItems = [
  "Auto wallet top-up/top-down runs 24/7",
  "New ad accounts requested and provisioned in minutes",
  "All-in-one centralized dashboard shows operation in real time",
  "Full transaction history and billing with downloadable logs",
  "Manage account access easily from one unified platform",
];

export function PlatformWhyChoose() {
  return (
    <section className="wcp" aria-labelledby="platform-why-heading">
      <div className="container">
        <FadeIn className="wcp-heading">
          <h2 id="platform-why-heading">
            <span className="wcp-h-part1">Why Choose </span>
            <span className="wcp-h-part2">Agent Mart Platform</span>
          </h2>
        </FadeIn>
        <div className="wcp-row">
          <FadeIn className="wcp-col" delay={80}>
            <div className="wcp-col-header wcp-header-grey">
              <span className="wcp-col-header-icon">
                <CircleExclamationIcon />
              </span>
              <h3 className="wcp-col-header-title">Without a platform</h3>
            </div>
            <ul className="wcp-list wcp-list-grey">
              {withoutItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn className="wcp-col" delay={160}>
            <div className="wcp-col-header wcp-header-orange">
              <span className="wcp-col-header-icon">
                <RocketIcon />
              </span>
              <h3 className="wcp-col-header-title">With Agent Mart Platform</h3>
            </div>
            <ul className="wcp-list wcp-list-orange">
              {withItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
