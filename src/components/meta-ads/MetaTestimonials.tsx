"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/meta-ads/icons";

const reviews = [
  { src: "/assets/images/google-ads/review-01.png", width: 321, height: 618 },
  { src: "/assets/images/google-ads/review-02.png", width: 312, height: 600 },
  { src: "/assets/images/google-ads/review-03.png", width: 322, height: 616 },
  { src: "/assets/images/google-ads/review-04.png", width: 318, height: 612 },
  { src: "/assets/images/google-ads/review-05.png", width: 318, height: 612 },
  { src: "/assets/images/google-ads/review-06.png", width: 318, height: 612 },
  { src: "/assets/images/google-ads/review-07.png", width: 318, height: 612 },
  { src: "/assets/images/google-ads/review-08.png", width: 318, height: 612 },
];

function useSlidesToShow() {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 768) setCount(1);
      else if (window.innerWidth <= 1024) setCount(2);
      else setCount(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export function MetaTestimonials() {
  const slidesToShow = useSlidesToShow();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const loop = [...reviews, ...reviews];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => current + 1);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    if (index >= reviews.length) {
      const timeout = window.setTimeout(() => setIndex(0), 500);
      return () => window.clearTimeout(timeout);
    }
  }, [index]);

  const percent = 100 / slidesToShow;

  return (
    <section className="customer-reviews-section" style={{ backgroundColor: "#fff2e6" }} aria-labelledby="meta-reviews-heading">
      <div className="container">
        <div className="heading5" style={{ textAlign: "center" }}>
          <h2 id="meta-reviews-heading">
            <span className="headline-part1" style={{ color: "#000000" }}>
              Customer{" "}
            </span>
            <span className="headline-part2" style={{ color: "#f5822a" }}>
              Testimonials
            </span>
          </h2>
        </div>
        <div className="space60" />
        <div className="reviews-slider-container">
          <div className="customer-reviews-slider">
            <div
              className="customer-reviews-slider-track"
              style={{ transform: `translateX(-${index * percent}%)` }}
            >
              {loop.map((review, slideIndex) => (
                <div className="review-slide" key={`${review.src}-${slideIndex}`}>
                  <div className="review-card">
                    <div className="review-image-container">
                      <Image
                        src={review.src}
                        alt="Customer Review"
                        width={review.width}
                        height={review.height}
                        className="review-image"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space30" />
        <div className="reviews-nav-button-wrapper">
          <button
            className="slider-btn-custom prev-btn-custom"
            type="button"
            aria-label="Previous Slide"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onClick={() => setIndex((current) => (current === 0 ? reviews.length - 1 : current - 1))}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Link className="theme-btn3" href="/contact-us">
            Contact us now
            <span>
              <ArrowRightIcon />
            </span>
          </Link>
          <button
            className="slider-btn-custom next-btn-custom"
            type="button"
            aria-label="Next Slide"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onClick={() => setIndex((current) => current + 1)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
