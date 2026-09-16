"use client";

import { useState } from "react";
import { CaretDownIcon } from "@/components/tiktok-ads/icons";

const faqs = [
  {
    question: "1. What payment methods are supported?",
    answer: "At AGrowth, we accept a variety of payment methods to make it convenient for our clients. You can pay using Payoneer, Wise, Cryptocurrencies, Bank Transfer.",
  },
  {
    question: "2. How fast is the top-up process?",
    answer: "With the AGrowth Auto Top-up Platform, you have 100% autonomy. Fund your wallet anytime and the balance will reflect in your account in minutes. No chat, no lengthy, no manual approvals.",
  },
  {
    question: "3. What happens to my balance if an account gets restricted?",
    answer: "If an account is disabled, our platform allows you to instantly transfer the remaining balance to another account. Your budget stays 100% intact and operational.",
  },
  {
    question: "4. Are there any hidden fees?",
    answer: 'All fees (rental, top-up, or service) are displayed in real-time on the AGrowth Dashboard. What you see is exactly what you pay - no hidden "handling fees" or manual markups.',
  },
];

export function TikTokFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="service-faqs sp" style={{ backgroundColor: "#fff2e6" }} aria-labelledby="tiktok-faq-heading">
      <div className="container">
        <div className="heading5 text-center" style={{ textAlign: "center" }}>
          <h2 id="tiktok-faq-heading">
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
