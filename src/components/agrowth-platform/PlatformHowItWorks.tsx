"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/agrowth-platform/FadeIn";

const INTERVAL_MS = 4000;

const steps = [
  {
    title: "Proactive Fund Management",
    image: "/assets/images/agrowth-platform/how-wallet.png",
    description: (
      <p>
        Fund your wallet using flexible payment methods.
        <br />
        Your balance is instantly available once approved.
      </p>
    ),
  },
  {
    title: "Fast Set Up Ad Accounts",
    image: "/assets/images/agrowth-platform/how-accounts.png",
    description: (
      <p>
        Gain immediate access to high-trust accounts across Meta, TikTok, and Google. No warmup. No lengthy review. Just set up your timezone and vertical in one click.
      </p>
    ),
  },
  {
    title: "Unlimited Scaling",
    image: "/assets/images/agrowth-platform/how-scaling.png",
    description: (
      <p>
        Take full control of your ad spend. Allocate or transfer budgets between accounts instantly. Scale winning ads without any delays.
      </p>
    ),
  },
];

export function PlatformHowItWorks() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const activate = useCallback((index: number) => {
    setActive(index);
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !inView) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [inView, active]);

  return (
    <section ref={sectionRef} className="hiw" aria-labelledby="platform-hiw-heading">
      <div className="container">
        <FadeIn variant="right">
          <h2 id="platform-hiw-heading" className="hiw-heading">
            How It Works
          </h2>
        </FadeIn>
        <div className="row align-items-center hiw-row">
          <div className="col-lg-6 hiw-col-stepper">
            <FadeIn variant="right">
            <div className="hiw-stepper">
              {steps.map((step, index) => {
                const isActive = active === index;
                const paused = isActive && !inView;
                return (
                  <button
                    type="button"
                    className={`hiw-step${isActive ? " is-active" : ""}${paused ? " is-viewport-paused" : ""}`}
                    data-step-index={index}
                    key={step.title}
                    onClick={() => activate(index)}
                    aria-pressed={isActive}
                  >
                    <div className="hiw-step-indicator">
                      <div className="hiw-step-number-wrap">
                        <div className="hiw-step-number">{index + 1}</div>
                        <svg className="hiw-circle-progress" viewBox="0 0 48 48" key={`${index}-${isActive}-${active}`}>
                          <circle className="hiw-circle-track" cx="24" cy="24" r="22" />
                          <circle className="hiw-circle-fill" cx="24" cy="24" r="22" />
                        </svg>
                      </div>
                      <div className="hiw-step-line" />
                    </div>
                    <div className="hiw-step-card">
                      <div className="hiw-step-card-inner">
                        <div className="hiw-step-content">
                          <h3 className="hiw-step-title">{step.title}</h3>
                          <div className="hiw-step-desc">{step.description}</div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            </FadeIn>
          </div>
          <div className="col-lg-6 hiw-col-image">
            <FadeIn variant="left">
            <div className="hiw-images">
              {steps.map((step, index) => (
                <Image
                  key={step.title}
                  src={step.image}
                  alt={step.title}
                  width={2119}
                  height={1234}
                  className={active === index ? "is-visible" : ""}
                  priority={index === 0}
                />
              ))}
            </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
