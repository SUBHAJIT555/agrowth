import { FadeIn } from "@/components/google-ads/FadeIn";
import {
  ArrowsSpinIcon,
  BoltIcon,
  BusinessTimeIcon,
  HeadsetIcon,
  MedalIcon,
  ShieldHalvedIcon,
} from "@/components/tiktok-ads/icons";

const cards = [
  {
    tone: "card-orange",
    icon: BoltIcon,
    title: "UNLIMITED SPEND & FAST FUNDING",
    desc: "Scale with no daily spending limits. Fund your accounts in minutes via our AGrowth Auto platform, even on holidays.",
  },
  {
    tone: "card-white",
    icon: ShieldHalvedIcon,
    title: "VERIFIED AGENCY ACCOUNTS",
    desc: "Warm and high-trust TikTok ad accounts with strong reputations, ready to run ads in any industry - issued via TikTok Business Center.",
  },
  {
    tone: "card-white",
    icon: BusinessTimeIcon,
    title: "24/7 OPERATIONAL AUTONOMY",
    desc: "Manage, monitor, and allocate budgets proactively across your ad assets through the AGrowth dashboard.",
  },
  {
    tone: "card-orange",
    icon: MedalIcon,
    title: "INSTANT REPLACEMENTS",
    desc: "If an account is disabled, the budget is transferred to a backup immediately. No downtime, no lost learning data, no budget wasted.",
  },
  {
    tone: "card-orange",
    icon: ArrowsSpinIcon,
    title: "PREMIUM AD CREDIT REWARDS",
    desc: "Access exclusive credit matches and spend-based bonuses from TikTok. 100% of these agency-only incentives are directly to you.",
  },
  {
    tone: "card-white",
    icon: HeadsetIcon,
    title: "PRIORITY TIKTOK AM SUPPORT",
    desc: "Direct escalation to TikTok Account Managers. Faster ad reviews, creative pre-checks, and rapid policy resolution.",
  },
] as const;

export function TikTokWhyChoose() {
  return (
    <section className="tiktok-why" aria-labelledby="tiktok-why-heading">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <h2 id="tiktok-why-heading">
              <span style={{ color: "#111827" }}>Why Choose </span>
              <span style={{ color: "#e04618" }}>TikTok Agency Account</span>
            </h2>
          </div>
        </FadeIn>
        <div className="grid-container">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.title} delay={index * 100} className={`feature-card ${card.tone}`}>
                <div className="card-icon">
                  <Icon />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
