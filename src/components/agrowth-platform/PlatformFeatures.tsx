import { FadeIn } from "@/components/agrowth-platform/FadeIn";
import {
  ChartLineIcon,
  ClockRotateLeftIcon,
  FileInvoiceDollarIcon,
  ShareNodesIcon,
  UpDownIcon,
  UserPlusIcon,
} from "@/components/agrowth-platform/icons";

const features = [
  {
    title: "Dashboard",
    icon: ChartLineIcon,
    body: (
      <>
        <p>All in one centralized interface</p>
        <p>Monitor balances and other spent activity</p>
      </>
    ),
  },
  {
    title: "Ad Account Request",
    icon: UserPlusIcon,
    body: (
      <>
        <p>Request new ad accounts in seconds</p>
        <p>No delays, no back-and-forth</p>
      </>
    ),
  },
  {
    title: "TopUp/Down",
    icon: UpDownIcon,
    body: (
      <>
        <p>Add or withdraw budget anytime</p>
        <p>Real-time control across accounts</p>
      </>
    ),
  },
  {
    title: "Multi-Account Management",
    icon: ShareNodesIcon,
    body: (
      <p>
        Manage multiple ad accounts from one place
        <br />
        Built for fast and scalable campaign operations
      </p>
    ),
  },
  {
    title: "Transaction History",
    icon: ClockRotateLeftIcon,
    body: (
      <>
        <p>Full transparency, full control</p>
        <p>Track every transaction date, amount, status, and details</p>
      </>
    ),
  },
  {
    title: "Billing",
    icon: FileInvoiceDollarIcon,
    body: (
      <>
        <p>Execute a deposit with flexible payment methods</p>
        <p>Auto-calculated amounts, ready to use instantly</p>
      </>
    ),
  },
];

export function PlatformFeatures() {
  return (
    <section className="akf" aria-labelledby="platform-features-heading">
      <div className="container">
        <FadeIn className="akf-heading">
          <h2 id="platform-features-heading">
            <span className="akf-h-part1">Key </span>
            <span className="akf-h-part2">Features</span>
          </h2>
        </FadeIn>
        <p className="akf-subtitle">
          Everything you need to manage, allocate, and track your ad budget in one unified, real-time dashboard.
        </p>
        <div className="akf-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn className="akf-card" delay={index * 70} key={feature.title}>
                <div className="akf-card-icon">
                  <Icon />
                </div>
                <div className="akf-card-content">
                  <h3 className="akf-card-title">{feature.title}</h3>
                  <div className="akf-card-body">{feature.body}</div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
