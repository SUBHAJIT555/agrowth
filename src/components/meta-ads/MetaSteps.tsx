import { FadeIn } from "@/components/google-ads/FadeIn";

const steps = [
  {
    number: "1",
    title: "Business Review & Approval",
    desc: "Quick fit check, pricing, and straight answers from a Facebook specialist",
  },
  {
    number: "2",
    title: "Secure & Flexible Payment",
    desc: "Fund your account easily via Payoneer, Wise, Cryptocurrencies, Bank Transfer",
  },
  {
    number: "3",
    title: "Account Setup & Access",
    desc: "Get approved and receive your agency accounts based on campaign goals within 24 hours",
  },
  {
    number: "4",
    title: "Launch & Ongoing Support",
    desc: "Receive full access and can start advertising instantly with expert assistance available whenever you need it",
  },
];

export function MetaSteps() {
  return (
    <section className="meta-steps" aria-labelledby="meta-steps-heading">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <h2 id="meta-steps-heading">
              Get your
              <span>Facebook Agency Ad Accounts in 4 steps</span>
            </h2>
          </div>
        </FadeIn>
        <div className="steps-row">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 150} className="step-item">
              <div className="step-number-container">
                <div className="step-number">{step.number}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <div className="step-desc">{step.desc}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
