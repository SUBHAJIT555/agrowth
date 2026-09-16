import { FadeIn } from "@/components/google-ads/FadeIn";
import {
  ArrowsSpinIcon,
  BoltIcon,
  BusinessTimeIcon,
  HeadsetIcon,
  PuzzleIcon,
  ShieldHalvedIcon,
} from "@/components/meta-ads/icons";

const cards = [
  {
    tone: "card-orange",
    icon: BoltIcon,
    title: "UNLIMITED DAILY SPEND",
    desc: "Agency accounts remove the daily billing thresholds that cap standard accounts. Run campaigns at full budget from day one.",
  },
  {
    tone: "card-white",
    icon: ShieldHalvedIcon,
    title: "HIGHER ACCOUNT STABILITY",
    desc: "Verified Business Managers with high trust scores and no domain limits. Fewer random flags, fewer ad disapprovals, less downtime.",
  },
  {
    tone: "card-white",
    icon: BusinessTimeIcon,
    title: "FULL ACCESS TO META'S TOOLS",
    desc: "Pixel integration, Conversions API, domain verification, catalog setup - everything Meta offers, available from day one.",
  },
  {
    tone: "card-orange",
    icon: PuzzleIcon,
    title: "INSTANT REPLACEMENTS",
    desc: "If an account is disabled, the budget is transferred to a backup immediately. No downtime, no lost learning data, no budget wasted.",
  },
  {
    tone: "card-orange",
    icon: ArrowsSpinIcon,
    title: "EXCLUSIVE META PLATFORM BONUSES",
    desc: "Credit matches, spend incentives, and ad credits from Meta that only official agency partners can access - passed directly to you.",
  },
  {
    tone: "card-white",
    icon: HeadsetIcon,
    title: "PRIORITY SUPPORT FROM META",
    desc: "Agency accounts get faster ad review, direct escalation paths, and dedicated support channels not available to standard advertisers.",
  },
] as const;

export function MetaWhyChoose() {
  return (
    <section className="meta-why" aria-labelledby="meta-why-heading">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <h2 id="meta-why-heading">
              <span style={{ color: "#111827" }}>Why Choose </span>
              <span style={{ color: "#e04618" }}>Facebook Agency Account</span>
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
