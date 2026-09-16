"use client";

import { useState } from "react";
import { CaretDownIcon } from "@/components/agrowth-platform/icons";

const faqs = [
  {
    question: "What is the minimum deposit?",
    answer:
      "The minimum deposit starts from $200 (after fees). The system automatically calculates the exact transfer amount based on your rate card.",
  },
  {
    question: "Which payment methods are accepted?",
    answer: "We currently support Bank Transfer, Crypto, Payoneer, and Wise.",
  },
  {
    question: "Can I share accounts with my team?",
    answer:
      "Yes. You can easily share accounts via MCC (Google), Business Manager (Meta), or Business Center (TikTok) using the built-in sharing module.",
  },
  {
    question: "How many ad accounts can I request at once?",
    answer: "You can request up to 10 accounts at once and 30 accounts in total for a day.",
  },
  {
    question: "Is my budget and account secure?",
    answer:
      "Yes. Your funds and transactions are fully tracked within the platform with strict internal controls and transparency.",
  },
  {
    question: "How long are top-ups processed?",
    answer:
      "Top-ups are processed instantly once your wallet has a sufficient balance. No manual approval or waiting time is required.",
  },
];

export function PlatformFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="service-faqs sp" aria-labelledby="platform-faq-heading">
      <div className="container">
        <div className="heading5 text-center">
          <h2 id="platform-faq-heading">
            <span className="headline-part1">Frequently </span>
            <span className="headline-part2">Asked&nbsp;Questions</span>
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
                    <p>{faq.answer}</p>
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
