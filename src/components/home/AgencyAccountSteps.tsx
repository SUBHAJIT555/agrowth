"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Business Review & Approval",
    desc: "Quick fit check, pricing, and straight answers from a Meta/TikTok/Google specialist",
  },
  {
    number: "02",
    title: "Secure & Flexible Payment",
    desc: "Fund your account easily via Payoneer, Wise, Cryptocurrencies, Bank Transfer",
  },
  {
    number: "03",
    title: "Account Setup & Access",
    desc: "Get approved and receive your agency accounts based on campaign goals within 24 hours",
  },
  {
    number: "04",
    title: "Launch & Ongoing Support",
    desc: "Receive full access and can start advertising instantly with expert assistance available whenever you need it",
  },
];

export function AgencyAccountSteps() {
  const { ref, inView } = useInView<HTMLElement>(0.25);

  return (
    <section ref={ref} className={cn("home-steps", inView && "animate")}>
      <div className="container">
        <h2 className="section-headline text-center mb-5">
          Get your Agency Ad Accounts in 4 steps
        </h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card-wrapper" key={step.number}>
              <div className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
