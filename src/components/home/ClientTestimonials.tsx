import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, QuoteIcon } from "@/components/home/icons";

function Stars() {
  return (
    <div className="star-bar">
      <Image
        src="/assets/images/home/trustpilot-stars.png"
        alt="Trustpilot rating"
        width={108}
        height={20}
      />
    </div>
  );
}

export function ClientTestimonials() {
  return (
    <section className="home-testi">
      <div className="container">
        <h2
          className="text-center"
          style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 44, fontWeight: 800, lineHeight: "54px", marginBottom: 48, color: "#0f172a" }}
        >
          Hear From <span style={{ color: "#ff5e00" }}>Our Clients</span>
        </h2>
        <div className="testimonials-grid">
          <div className="grid-column">
            <div className="card-quote-wrapper" style={{ position: "relative" }}>
              <div className="card-quote-icon">
                <QuoteIcon />
              </div>
              <article className="review-card">
                <Stars />
                <h3 className="review-title">Growth became predictable again</h3>
                <p className="review-desc">
                  We were constantly dealing with account restrictions and campaign interruptions. Since switching to AGrowth Agency Accounts, our ads have been running smoothly and scaling feels much more predictable. The difference has been night and day.
                </p>
                <div className="author-info">
                  <Image src="/assets/images/home/review-emily.png" alt="Emily Chen" className="author-avatar" width={56} height={56} />
                  <div className="author-details">
                    <p className="author-name">Emily Chen</p>
                    <p className="author-role">E-commerce Marketing Manager</p>
                  </div>
                </div>
              </article>
            </div>
            <div className="card-overlap-left-wrapper" style={{ position: "relative" }}>
              <article className="review-card bubble-down-card">
                <Stars />
                <h3 className="review-title">Good support solution staff service and...</h3>
                <p className="review-desc">Good support solution staff service and more</p>
                <div className="bubble-pointer-down" />
              </article>
              <div className="trustpilot-widget-block">
                <div className="client-avatars-row">
                  <Image src="/assets/images/home/review-cluster-1.png" alt="" width={65} height={65} className="avatar-item side avatar-item-1" />
                  <Image src="/assets/images/home/review-cluster-2.png" alt="" width={85} height={85} className="avatar-item center avatar-item-2" />
                  <Image src="/assets/images/home/review-cluster-3.png" alt="" width={65} height={65} className="avatar-item side avatar-item-3" />
                </div>
                <div className="trustpilot-stars-text">
                  Trustpilot <span className="stars-row">★★★★★</span>
                </div>
                <Link
                  href="https://www.trustpilot.com/review/agrowth.io"
                  className="theme-btn3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="btn-text">View more Trustpilot review</span>
                  <span className="btn-arrow">
                    <ArrowUpRightIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid-column">
            <article className="review-card card-vertical-img">
              <div className="vertical-img-wrapper">
                <Image src="/assets/images/home/review-daniel.png" alt="Daniel K" width={400} height={280} />
              </div>
              <div className="card-body-content">
                <Stars />
                <h3 className="review-title">Reliable and proactiveservice</h3>
                <p className="review-desc">
                  I&apos;ve had a great experience with this company. They are highly professional and always quick to respond. What I appreciate most is their proactive approach they are clearly ready to tackle any problem to ensure customer satisfaction.
                </p>
                <div className="author-details">
                  <p className="author-name">Daniel K</p>
                  <p className="author-role">Performance Marketer</p>
                </div>
              </div>
            </article>
            <div className="card-overlap-top-wrapper" style={{ position: "relative" }}>
              <Image src="/assets/images/home/review-mattia.png" alt="Mattia Lipreri" className="top-avatar" width={80} height={80} />
              <article className="review-card card-overlap-top">
                <Stars />
                <h3 className="review-title">Great service, these guys do it their best to support you</h3>
                <p className="review-desc">
                  Great service, these guys do it their best to support you from account creation to topup and replacement. I&apos;m really satisfied.
                </p>
                <div className="author-details">
                  <p className="author-name">Mattia Lipreri</p>
                  <p className="author-role">IT</p>
                </div>
              </article>
            </div>
          </div>
          <div className="grid-column">
            <div className="card-overlap-left-wrapper" style={{ position: "relative" }}>
              <Image src="/assets/images/home/review-sophia.png" alt="Sophia Martinez" className="overlapping-avatar-left" width={65} height={65} />
              <article className="review-card card-overlap-left">
                <Stars />
                <p className="review-desc">
                  They have really trusted and stable ad accounts, also very responsive support team my agent cherry is super helpful and reliable.
                </p>
                <div className="author-details">
                  <p className="author-name">Sophia Martinez</p>
                  <p className="author-role">DTC Brand Founder</p>
                </div>
              </article>
            </div>
            <div className="card-overlap-right-wrapper" style={{ position: "relative" }}>
              <article className="review-card card-overlap-right">
                <Stars />
                <h3 className="review-title">I&apos;ve tried a lot of agencies</h3>
                <p className="review-desc">
                  I&apos;ve tried a lot of agencies, and this one is the best so far. Quick and reliable service. The team helps with any issue you have and does a great job. Agent Tracy is amazing, a 10/10. She has everything under control and there are zero complaints. Great company, I hope they keep working like this. Highly recommended.
                </p>
                <div className="author-details">
                  <p className="author-name">Hossam</p>
                  <p className="author-role">ES</p>
                </div>
              </article>
              <Image src="/assets/images/home/review-hossam.png" alt="Hossam" className="overlapping-avatar" width={130} height={130} />
            </div>
            <article className="review-card">
              <div className="card-header-row">
                <h3 className="review-title">Fast Respond Team</h3>
                <Stars />
              </div>
              <p className="review-desc">
                I have been working with Alice for more than years, and she is really very responsive and helpful. Previously I ever engaged with other agencies, but their service was never as good as AGrowth Agency.
              </p>
              <div className="author-info">
                <Image src="/assets/images/home/review-robert.png" alt="Robert W." className="author-avatar" width={56} height={56} />
                <div className="author-details">
                  <p className="author-name">Robert W.</p>
                  <p className="author-role">Media Buying Team Lead</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
