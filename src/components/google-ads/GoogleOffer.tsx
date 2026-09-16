"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/google-ads/FadeIn";
import { ArrowUpRightIcon } from "@/components/google-ads/icons";

export function GoogleOffer() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => banner.classList.add("open-envelope"), 300);
          } else {
            banner.classList.remove("open-envelope");
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(banner);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="google-offer-section" aria-labelledby="google-offer-heading">
      <div className="container">
        <FadeIn>
          <div
            ref={bannerRef}
            className="google-offer"
            onClick={() => bannerRef.current?.classList.toggle("open-envelope")}
          >
            <div className="banner-stripes" />
            <div className="banner-glow" />
            <div className="banner-container">
              <div className="banner-left">
                <div className="envelope-container" id="google-envelope">
                  <div className="envelope-back" />
                  <div className="coupon-card">
                    <div className="coupon-content">
                      <span className="coupon-label">COUPON</span>
                      <span className="coupon-value">$384</span>
                    </div>
                  </div>
                  <div className="envelope-front">
                    <svg viewBox="0 0 290 190" className="envelope-pocket-svg">
                      <defs>
                        <filter id="pocket-shadow-google-offer" x="-10%" y="-10%" width="120%" height="120%">
                          <feDropShadow dx="0" dy="-4" stdDeviation="5" floodColor="#000" floodOpacity="0.6" />
                        </filter>
                        <linearGradient id="pocket-left-grad-google-offer" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#161616" />
                          <stop offset="100%" stopColor="#0d0d0d" />
                        </linearGradient>
                        <linearGradient id="pocket-right-grad-google-offer" x1="100%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#161616" />
                          <stop offset="100%" stopColor="#0d0d0d" />
                        </linearGradient>
                        <linearGradient id="pocket-bottom-grad-google-offer" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#1c1c1c" />
                          <stop offset="100%" stopColor="#0f0f0f" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 0 L 145 95 L 0 190 Z" fill="url(#pocket-left-grad-google-offer)" />
                      <line x1="0" y1="0" x2="145" y2="95" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      <path d="M 290 0 L 145 95 L 290 190 Z" fill="url(#pocket-right-grad-google-offer)" />
                      <line x1="290" y1="0" x2="145" y2="95" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      <path d="M 0 190 L 145 90 L 290 190 Z" fill="url(#pocket-bottom-grad-google-offer)" filter="url(#pocket-shadow-google-offer)" />
                      <polyline points="0 190 145 90 290 190" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" fill="none" />
                    </svg>
                  </div>
                  <div className="flap-top">
                    <div className="flap-face flap-face-back">
                      <svg viewBox="0 0 290 90" className="flap-svg">
                        <defs>
                          <linearGradient id="flap-back-grad-google-offer" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#1c1c1c" />
                            <stop offset="100%" stopColor="#0f0f0f" />
                          </linearGradient>
                        </defs>
                        <path d="M 0 90 L 290 90 L 145 0 Z" fill="url(#flap-back-grad-google-offer)" />
                        <polyline points="0 90 145 0 290 90" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" fill="none" />
                      </svg>
                    </div>
                    <div className="flap-face flap-face-front">
                      <svg viewBox="0 0 290 90" className="flap-svg">
                        <defs>
                          <linearGradient id="flap-front-grad-google-offer" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#141414" />
                            <stop offset="100%" stopColor="#0a0a0a" />
                          </linearGradient>
                        </defs>
                        <path d="M 0 90 L 290 90 L 145 0 Z" fill="url(#flap-front-grad-google-offer)" />
                      </svg>
                    </div>
                  </div>
                  <Image src="/assets/images/google-ads/coin.png" alt="" width={68} height={68} className="coin coin-1" />
                  <Image src="/assets/images/google-ads/coin-2.png" alt="" width={105} height={105} className="coin coin-2" />
                  <Image src="/assets/images/google-ads/coin.png" alt="" width={48} height={48} className="coin coin-3" />
                </div>
              </div>
              <div className="banner-right">
                <div className="content-card">
                  <h2 id="google-offer-heading" className="title" style={{ fontSize: 38 }}>
                    <span style={{ color: "#ffffff" }}>Special Offer</span>
                  </h2>
                  <div className="subtitle">
                    <p>Spend actively and receive a promo code. Reach out now to secure your bonus.</p>
                  </div>
                  <Link href="/contact-us" className="cta-button">
                    <span className="btn-text">CLAIM OFFER</span>
                    <span className="btn-icon-wrapper">
                      <ArrowUpRightIcon />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
