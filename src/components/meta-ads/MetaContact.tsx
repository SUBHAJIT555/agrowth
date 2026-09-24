"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { IndiaPhoneCode } from "@/components/forms/IndiaPhoneCode";
import { ArrowUpRightIcon, CalendarIcon, ChatIcon } from "@/components/meta-ads/icons";
import { payloadFromForm, submitToMailer } from "@/lib/forms/submitToMailer";

const platforms = ["Google", "Facebook", "TikTok", "Bing", "Others"] as const;

export function MetaContact() {
  const [agreed, setAgreed] = useState(true);
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity() || !agreed) {
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
    <section
      id="lets-scale-your-ads"
      className="meta-contact home-contact faq-contact contact-page sp2"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading5">
              <h2>
                <span className="headline-part1">Let&rsquo;s Scale </span>
                <span className="headline-part2">Your Ads!</span>
              </h2>
              <div className="content-contact">
                <p>
                  Grow your ads with our trusted agency accounts — activated fast, pay flexibly,
                  <br />
                  and backed by 24/7 expert support.
                </p>
                <p>
                  <em>
                    * Fill out the form - our team will get in touch within hours.
                    <br />
                    * Need help now? Chat with us through our 24/7 support channels.
                  </em>
                </p>
              </div>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="info-item-icon" aria-hidden="true">
                    <CalendarIcon />
                  </div>
                  <div className="info-item-content">
                    <p className="info-item-title">Fill out the form</p>
                    <p className="info-item-subtitle">our team will get in touch within hours</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="info-item-icon" aria-hidden="true">
                    <ChatIcon />
                  </div>
                  <div className="info-item-content">
                    <p className="info-item-title">Need help now?</p>
                    <p className="info-item-subtitle">Chat with us through our 24/7 support channels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-contact-form glass-layout">
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
                      <IndiaPhoneCode />
                      <input name="phone" placeholder="Your phone number" required />
                    </div>
                  </span>
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
                    onChange={(event) => setAgreed(event.target.checked)}
                  />
                  <span className="agreement-text">
                    I agree to the <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
                    <Link href="/refund-policy">Refund Policy</Link>.
                  </span>
                </label>
                <button
                  type="submit"
                  className={agreed ? "home-cta-btn theme-btn3 submit-button-enabled" : "home-cta-btn submit-button-disabled"}
                  disabled={!agreed}
                >
                  Submit
                  <span className="btn-arrow">
                    <ArrowUpRightIcon />
                  </span>
                </button>
                {status ? <p className="form-status">{status}</p> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
