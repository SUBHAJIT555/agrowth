"use client";

import { useState } from "react";
import { CaretDownIcon } from "@/components/meta-ads/icons";

const faqs = [
  {
    question: "1. How much does it cost to rent Facebook agency account solutions from Agent Mart AI?",
    answer:
      "There is no opening fee. The service fee depends on your spend level. Rates start from a competitive percentage of top-up volume, with special rates available for higher-spending accounts. Contact our team for a quote based on your monthly ad spend.\n\nAccepted payment methods: Payoneer, Wise, Cryptocurrency, and Local Bank transfer.",
  },
  {
    question: "2. What happens if my Meta agency account gets restricted by Meta?",
    answer:
      "If an account is suspended, you can use our Auto Top-up Platform to order a new one and immediately execute a balance transfer. The remaining funds will be moved to a fresh, active backup account instantly so your campaign downtime is kept to an absolute minimum.",
  },
  {
    question: "3. How does the Auto Top-up feature work?",
    answer:
      "Auto top-up is a feature in the Agent Mart AI platform that fully automated, self-service solution that gives you 100% control over your ad budget with zero middlemen.\nYou can instantly transfer funds from your Agent Mart wallet directly to your Meta ad accounts 24/7, even on weekends and holidays. This streamlined process eliminates tedious waiting times, prevents campaign downtime, and keeps your ads running seamlessly around the clock.",
  },
];

export function MetaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="service-faqs sp" style={{ backgroundColor: "#fff2e6" }} aria-labelledby="meta-faq-heading">
      <div className="container">
        <div className="heading5 text-center" style={{ textAlign: "center" }}>
          <h2 id="meta-faq-heading">
            <span className="headline-part1" style={{ color: "#000000" }}>
              Frequently Asked{" "}
            </span>
            <span className="headline-part2" style={{ color: "#121212" }}>
              Questions
            </span>
          </h2>
        </div>
        <div className="space60" />
        <div className="list-faqs">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div className={open ? "faqs-item open" : "faqs-item"} key={faq.question}>
                <div className="box-faqs">
                  <button
                    type="button"
                    className="faqs-title question"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className="faq-title">{faq.question}</span>
                    <span className="faq-icon">
                      <CaretDownIcon />
                    </span>
                  </button>
                  <div className="faqs-content">
                    {faq.answer.split("\n").map((paragraph, paragraphIndex) =>
                      paragraph ? <p key={paragraphIndex}>{paragraph}</p> : <br key={paragraphIndex} />,
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
