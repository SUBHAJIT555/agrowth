import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/google-ads/FadeIn";
import {
  ChartColumnIcon,
  HandDollarIcon,
  MoneyTransferIcon,
  RotateArrowsIcon,
  SitemapIcon,
  TrendUpIcon,
  WalletIcon,
} from "@/components/google-ads/icons";

const features = [
  {
    icon: WalletIcon,
    title: "Proactive Fund Management",
    desc: "Fund all accounts 24/7 from your wallet.",
  },
  {
    icon: RotateArrowsIcon,
    title: "Auto Top-up",
    desc: "Funds added instantly, even on weekends.",
  },
  {
    icon: SitemapIcon,
    title: "Multi-platform Budgeting",
    desc: "Manage and distribute across all platforms in one place.",
  },
  {
    icon: MoneyTransferIcon,
    title: "Instant Withdrawals",
    desc: "Withdraw unused balance anytime with no lock-in or approval needed.",
  },
  {
    icon: HandDollarIcon,
    title: "Cost-Free Operation",
    desc: "No middlemen. No extra fees.",
  },
  {
    icon: ChartColumnIcon,
    title: "Streamlined Workflow",
    desc: "Save time. Focus on scaling to scale faster.",
  },
] as const;

export function GooglePlatform() {
  return (
    <section className="google-platform" aria-labelledby="google-platform-heading">
      <div className="container">
        <FadeIn variant="right" className="content-col">
          <div className="badge">Only at AGrowth</div>
          <div className="section-header">
            <h2 id="google-platform-heading">AGrowth Platform</h2>
            <p className="sub-primary">Direct Top-up, Full Control</p>
            <p className="sub-secondary">Manage balances, allocate budgets and scale your campaigns 24/7</p>
          </div>
          <div className="features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div className="feature-item" key={feature.title}>
                  <div className="feature-icon">
                    <Icon />
                  </div>
                  <div className="feature-info">
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link href="/agrowth-platform" className="theme-btn3 pill-banner">
            <div className="pill-text">
              <div className="pill-text-1">Built for media buyers who value speed, control and uptime</div>
              <div className="pill-text-2">One platform - Full control - Zero downtime</div>
            </div>
            <span className="rocket-circle" aria-hidden="true">
              <TrendUpIcon />
            </span>
          </Link>
        </FadeIn>
        <FadeIn variant="left" className="mockup-col">
          <Image
            src="/assets/images/google-ads/platform-mockup.png"
            alt=""
            width={900}
            height={1104}
            className="mockup-img"
          />
        </FadeIn>
      </div>
    </section>
  );
}
