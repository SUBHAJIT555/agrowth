"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const platforms = [
  { label: "Google", value: "Google" },
  { label: "Facebook", value: "Facebook" },
  { label: "TikTok", value: "Tiktok" },
  { label: "Bing", value: "Bing" },
  { label: "Others", value: "Others" },
] as const;

const countries = [
  { value: "US", dial: "+1", label: "United States" },
  { value: "VN", dial: "+84", label: "Vietnam" },
  { value: "GB", dial: "+44", label: "United Kingdom" },
  { value: "AU", dial: "+61", label: "Australia" },
  { value: "JP", dial: "+81", label: "Japan" },
  { value: "KR", dial: "+82", label: "South Korea" },
  { value: "SG", dial: "+65", label: "Singapore" },
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
  if (code === "JP") {
    return (
      <svg viewBox="0 0 16 12" width="22" height="16" aria-hidden="true">
        <rect width="16" height="12" fill="#fff" stroke="#ccc" strokeWidth="0.3" />
        <circle cx="8" cy="6" r="3.2" fill="#bc002d" />
      </svg>
    );
  }
  if (code === "KR") {
    return (
      <svg viewBox="0 0 16 12" width="22" height="16" aria-hidden="true">
        <rect width="16" height="12" fill="#fff" stroke="#ccc" strokeWidth="0.3" />
        <circle cx="8" cy="6" r="2.4" fill="#cd2e3a" />
        <path d="M8 3.6a2.4 2.4 0 0 1 0 4.8" fill="#0047a0" />
      </svg>
    );
  }
  if (code === "SG") {
    return (
      <svg viewBox="0 0 16 12" width="22" height="16" aria-hidden="true">
        <rect width="16" height="6" fill="#ef3340" />
        <rect y="6" width="16" height="6" fill="#fff" />
        <circle cx="3.4" cy="3.1" r="1.5" fill="#fff" />
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

export function ContactForm() {
  const [agreed, setAgreed] = useState(true);
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState<(typeof countries)[number]["value"]>("US");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const selected = form.querySelectorAll<HTMLInputElement>('input[name="service[]"]:checked');
    if (!form.checkValidity() || !agreed || selected.length === 0) {
      setStatus("Please complete the required fields.");
      return;
    }
    setStatus("");
  }

  return (
    <div className="faq-contact-form">
      <b>Send Us A Message</b>
      <form onSubmit={onSubmit} noValidate>
        <div className="single-input">
          <span className="wpcf7-form-control-wrap required">
            <input name="your-name" placeholder="Your name" required aria-label="Your name" />
          </span>
        </div>
        <div className="single-input">
          <span className="wpcf7-form-control-wrap required">
            <input type="email" name="email" placeholder="Your email" required aria-label="Your email" />
          </span>
        </div>
        <div className="single-input phone-contact">
          <span className="wpcf7-form-control-wrap required" data-name="phone">
            <div className="phone-field">
              <div className="phone-flag-box">
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
              </div>
              <input
                id="phone-input"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                required
                aria-label="Your phone number"
              />
            </div>
          </span>
        </div>
        <div className="single-input">
          <input name="company" placeholder="Company name" aria-label="Company name" />
        </div>
        <div className="form-row-split">
          <div className="single-input">
            <select name="contact-type" defaultValue="Telegram" aria-label="Contact type">
              <option>Telegram</option>
              <option>WhatsApp</option>
            </select>
          </div>
          <div className="single-input">
            <span className="wpcf7-form-control-wrap required">
              <input
                name="contact-details"
                placeholder="Contact details"
                required
                aria-label="Contact details"
              />
            </span>
          </div>
        </div>
        <div className="single-input">
          <textarea name="message" placeholder="Your Message" aria-label="Your Message" />
        </div>
        <div className="service-list service-wrapper-required">
          {platforms.map((platform) => (
            <label key={platform.value}>
              <input type="checkbox" name="service[]" value={platform.value} />
              {platform.label}
            </label>
          ))}
        </div>
        <label className="agreement-container">
          <input
            className="agreement-checkbox"
            type="checkbox"
            name="agreement"
            value="agreed"
            checked={agreed}
            required
            onChange={(event) => setAgreed(event.target.checked)}
          />
          <span className="agreement-text">
            I agree to the{" "}
            <Link href="/pages/privacy-policy" target="_blank" title="Privacy Policy">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/pages/refund-policy" target="_blank" title="Refund Policy">
              Refund Policy
            </Link>.
          </span>
        </label>
        <div className={agreed ? "button" : "button is-disabled"}>
          <input
            className={agreed ? "wpcf7-submit submit-button-enabled" : "wpcf7-submit submit-button-disabled"}
            type="submit"
            value="Submit"
            disabled={!agreed}
          />
        </div>
        {status ? <p className="form-status">{status}</p> : null}
      </form>
    </div>
  );
}
