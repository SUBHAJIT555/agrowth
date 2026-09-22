"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const slides = [
  {
    title: "Proactive Fund Management",
    image: "/assets/images/home/benefit-fund.png",
    icon: "/assets/icons/home/benefit-fund.png",
    lines: [
      "No support needed.",
      "Deposit or withdraw directly on the dashboard anytime you want.",
    ],
  },
  {
    title: "All-in-one Dashboard",
    image: "/assets/images/home/benefit-dashboard.png",
    icon: "/assets/icons/home/benefit-dashboard.png",
    lines: [
      "Manage multiple ad accounts across platforms in one dashboard.",
      "Track performance, spend, and balance in real time.",
    ],
  },
  {
    title: "Real Human Support",
    image: "/assets/images/home/benefit-support.png",
    icon: "/assets/icons/home/benefit-support.png",
    lines: [
      "When account issues happen, our team escalates directly to Meta, TikTok, or Google to get resolved faster.",
    ],
  },
  {
    title: "Unlimited Scaling",
    image: "/assets/images/home/benefit-scaling.png",
    icon: "/assets/icons/home/benefit-scaling.png",
    lines: [
      "Take full control of your ad spend.",
      "Allocate or transfer budgets between accounts instantly.",
      "Scale winning ads without any delays.",
    ],
  },
];

export function IncludedBenefits() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [inView]);

  const offset = `-${index * 25}%`;

  return (
    <section className="home-choose-wrap">
      <div className="container">
        <div ref={ref} className={cn("home-choose", inView && "animate")}>
          <div className="slideshow-side">
            <div
              className="slides-container"
              style={{ width: "400%", transform: `translateX(${offset})` }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  className={cn("slide", slideIndex === index && "active")}
                  style={{ width: "25%" }}
                  key={slide.title}
                >
                  <Image src={slide.image} alt={slide.title} width={800} height={600} />
                </div>
              ))}
            </div>
            <div className="slideshow-dots">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.title}
                  className={cn("dot", slideIndex === index && "active")}
                  type="button"
                  aria-label={`Go to slide ${slideIndex + 1}`}
                  onClick={() => setIndex(slideIndex)}
                />
              ))}
            </div>
          </div>
          <div className="content-side">
            <div className="content-bg" />
            <div className="content-body">
              <h2 className="content-title">Included When You Choose Agent Mart AI</h2>
              <p className="content-subtitle">Focus on scaling. We&apos;ll handle the infrastructure</p>
              <div className="content-divider" />
              <div className="feature-slider-wrapper">
                <div
                  className="feature-items-container"
                  style={{ width: "400%", transform: `translateX(${offset})` }}
                >
                  {slides.map((slide) => (
                    <div className="feature-item" style={{ width: "25%" }} key={slide.title}>
                      <div className="feature-icon-container">
                        <div className="feature-icon">
                          <Image
                            src={slide.icon}
                            alt={slide.title}
                            className="feature-icon-img"
                            width={120}
                            height={120}
                          />
                        </div>
                      </div>
                      <div className="feature-details">
                        <h3 className="feature-title">{slide.title}</h3>
                        <div className="feature-points">
                          <ul>
                            {slide.lines.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
