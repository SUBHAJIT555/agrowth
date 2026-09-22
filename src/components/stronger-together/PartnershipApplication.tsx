"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const platforms = ["Google", "Facebook", "TikTok", "Bing", "Others"] as const;

const countries = [
  { value: "US", dial: "+1", label: "United States" },
  { value: "VN", dial: "+84", label: "Vietnam" },
  { value: "GB", dial: "+44", label: "United Kingdom" },
  { value: "AU", dial: "+61", label: "Australia" },
] as const;

function CountryFlag({ code }: { code: string }) {
  if (code === "VN") {
    return (
      <svg viewBox="0 0 16 12" width="22" height="16" aria-hidden="true">
        <rect width="16" height="12" fill="#da251d" />
        <polygon points="8,2.2 9.1,5.5 12.6,5.5 9.8,7.5 10.9,10.8 8,8.8 5.1,10.8 6.2,7.5 3.4,5.5 6.9,5.5" fill="#ff0" />
      </svg>
    );
  }
  if (code === "GB") {
    return (
      <svg viewBox="0 0 16 12" width="22" height="16" aria-hidden="true">
        <rect width="16" height="12" fill="#012169" />
        <path d="M0 0 16 12M16 0 0 12" stroke="#fff" strokeWidth="2.4" />
        <path d="M0 0 16 12M16 0 0 12" stroke="#c8102e" strokeWidth="1.2" />
        <path d="M8 0v12M0 6h16" stroke="#fff" strokeWidth="4" />
        <path d="M8 0v12M0 6h16" stroke="#c8102e" strokeWidth="2.2" />
      </svg>
    );
  }
  if (code === "AU") {
    return (
      <svg viewBox="0 0 16 12" width="22" height="16" aria-hidden="true">
        <rect width="16" height="12" fill="#012169" />
        <path d="M0 0 8 6M8 0 0 6" stroke="#fff" strokeWidth="1.2" />
        <path d="M4 0v6M0 3h8" stroke="#fff" strokeWidth="2" />
        <path d="M4 0v6M0 3h8" stroke="#c8102e" strokeWidth="1" />
        <circle cx="12" cy="8" r="0.6" fill="#fff" />
        <circle cx="10.2" cy="6.6" r="0.45" fill="#fff" />
        <circle cx="13.6" cy="6.8" r="0.45" fill="#fff" />
        <circle cx="11.2" cy="9.6" r="0.45" fill="#fff" />
        <circle cx="13.4" cy="9.2" r="0.4" fill="#fff" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 12" width="22" height="16" aria-hidden="true">
      <rect width="16" height="12" fill="#b22234" />
      <path d="M0 1h16M0 3h16M0 5h16M0 7h16M0 9h16M0 11h16" stroke="#fff" strokeWidth="1" />
      <rect width="6.4" height="6.4" fill="#3c3b6e" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="15" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function PartnershipApplication() {
  const [agreed, setAgreed] = useState(true);
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState<(typeof countries)[number]["value"]>("US");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity() || !agreed) {
      setStatus("Please complete the required fields.");
      return;
    }
    setStatus("Thanks — this demo form does not send messages.");
    form.reset();
    setAgreed(true);
  }

  return (
    <section id="contact-section" className="partners-application">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading5">
              <h2>
                <span className="headline-part1">Partner With Agent Mart AI</span>
                <span className="headline-part2"> - Let’s Grow Together!</span>
              </h2>
              <div className="space16" />
              <div className="content-contact">
                <p>
                  Join a global network of forward thinking agencies and businesses who are
                  leveraging our advertising expertise to help their clients thrive in a competitive
                  market. As a partner, you&apos;ll gain access to co-marketing opportunities,
                  strategic support, and a growing ecosystem of solutions designed to boost your
                  impact.
                  <br />
                  <br />
                  Whether you&apos;re looking to expand your service offerings, attract more
                  clients, or unlock new revenue streams, our partnership program is built to help
                  you grow—smarter, faster, and together. Let’s build long- term success through
                  collaboration and shared value.
                </p>
              </div>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="info-item-icon" aria-hidden="true">
                    <CalendarIcon />
                  </div>
                  <div className="info-item-content">
                    <h4 className="info-item-title">Fill out the form</h4>
                    <p className="info-item-subtitle">our team will get in touch within hours</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="info-item-icon" aria-hidden="true">
                    <ChatIcon />
                  </div>
                  <div className="info-item-content">
                    <h4 className="info-item-title">Need help now?</h4>
                    <p className="info-item-subtitle">
                      Chat with us through our 24/7 support channels
                    </p>
                  </div>
                </div>
              </div>
              <div className="space24" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-contact-form">
              <b>Send Us A Message</b>
              <form onSubmit={onSubmit} noValidate>
                <div className="single-input">
                  <span className="wpcf7-form-control-wrap required">
                    <input name="your-name" placeholder="Your name" required />
                  </span>
                </div>
                <div className="single-input">
                  <span className="wpcf7-form-control-wrap required">
                    <input type="email" name="email" placeholder="Your email" required />
                  </span>
                </div>
                <div className="single-input phone-contact">
                  <span className="wpcf7-form-control-wrap required" data-name="phone">
                    <div className="phone-field">
                      <span className="phone-flag" aria-hidden="true">
                        <CountryFlag code={country} />
                      </span>
                      <select
                        name="phone-country"
                        value={country}
                        aria-label="Telephone country code"
                        onChange={(event) => setCountry(event.target.value as typeof country)}
                      >
                        {countries.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.dial}
                          </option>
                        ))}
                      </select>
                      <input name="phone" placeholder="Your phone number" required />
                    </div>
                  </span>
                </div>
                <div className="single-input">
                  <input name="company" placeholder="Company name" />
                </div>
                <div className="form-row-split">
                  <div className="single-input">
                    <select name="contact-type" defaultValue="Telegram">
                      <option>Telegram</option>
                      <option>WhatsApp</option>
                    </select>
                  </div>
                  <div className="single-input">
                    <span className="wpcf7-form-control-wrap required">
                      <input name="contact-details" placeholder="Contact details" required />
                    </span>
                  </div>
                </div>
                <div className="single-input">
                  <textarea name="message" placeholder="Your Message" />
                </div>
                <div className="service-list service-wrapper-required">
                  {platforms.map((platform) => (
                    <label key={platform}>
                      <input type="checkbox" name="service" value={platform} />
                      {platform}
                    </label>
                  ))}
                </div>
                <label className="agreement-container">
                  <input
                    className="agreement-checkbox"
                    type="checkbox"
                    checked={agreed}
                    required
                    onChange={(event) => setAgreed(event.target.checked)}
                  />
                  <span className="agreement-text">
                    I agree to the <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
                    <Link href="/refund-policy">Refund Policy</Link>.
                  </span>
                </label>
                <div className="button">
                  <input
                    className="wpcf7-submit"
                    type="submit"
                    value="Submit"
                    disabled={!agreed}
                  />
                </div>
                {status ? <p className="form-status">{status}</p> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
