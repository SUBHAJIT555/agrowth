"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { IndiaPhoneCode } from "@/components/forms/IndiaPhoneCode";
import { payloadFromForm, submitToMailer } from "@/lib/forms/submitToMailer";

const platforms = [
  { label: "Google", value: "Google" },
  { label: "Facebook", value: "Facebook" },
  { label: "TikTok", value: "Tiktok" },
  { label: "Bing", value: "Bing" },
  { label: "Others", value: "Others" },
] as const;

export function ContactForm() {
  const [agreed, setAgreed] = useState(true);
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const selected = form.querySelectorAll<HTMLInputElement>('input[name="service[]"]:checked');
    if (!form.checkValidity() || !agreed || selected.length === 0) {
      setStatus("Please complete the required fields.");
      return;
    }
    setStatus("Sending…");
    try {
      await submitToMailer(payloadFromForm(form, "contact"));
      setStatus("Message sent. We will get back to you shortly.");
      form.reset();
      setAgreed(true);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to send message.");
    }
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
              <IndiaPhoneCode boxed />
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
