import { FadeIn } from "@/components/google-ads/FadeIn";
import {
  BoltIcon,
  BusinessTimeIcon,
  HeadsetIcon,
  MedalIcon,
  ShieldHalvedIcon,
} from "@/components/google-ads/icons";

const cards = [
  {
    tone: "card-orange",
    icon: BoltIcon,
    title: "UNLIMITED SPEND & FAST FUNDING",
    desc: "Scale with no daily spending limits. Fund your accounts in minutes via our AGrowth auto platform, even on holidays.",
  },
  {
    tone: "card-white",
    icon: ShieldHalvedIcon,
    title: "VERIFIED AGENCY ACCOUNTS",
    desc: "Warm and high-trust Google ad accounts with strong reputations, ready to run ads in any industry, even high-risk niches.",
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
    title: "FASTER APPROVALS & APPEALS",
    desc: "Agency-level infrastructure ensures priority verification, real-time account monitoring, and fast-track appeals if issues arise - keeping your campaigns live and profitable.",
  },
  {
    tone: "card-white",
    icon: HeadsetIcon,
    title: "DEDICATED GOOGLE PARTNER SUPPORT",
    desc: "Get strategic consultations from certified Google Account Managers and Google Partner consultants to give personalized guidance and hands-on campaign support.",
  },
] as const;

export function GoogleWhyChoose() {
  return (
    <section className="google-why" aria-labelledby="google-why-heading">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <h2 id="google-why-heading">
              <span style={{ color: "#111827" }}>Why Choose </span>
              <span style={{ color: "#e04618" }}>Google Agency Account</span>
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
