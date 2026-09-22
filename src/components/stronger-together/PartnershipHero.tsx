import Image from "next/image";

export function PartnershipHero() {
  return (
    <section className="partners-hero" aria-label="Hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="heading-wrap">
              <h1 className="partners-gradient-heading">
                AGROWTH STRATEGIC PARTNERS DRIVING GROWTH TOGETHER
              </h1>
              <p>Grow your business with Agent Mart AI&apos;s certified partners</p>
              <a className="theme-btn3" href="#contact-section">
                Become Our Partners
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="partners-hero-visual">
              <Image
                src="/assets/images/stronger-together/hero-handshake.png"
                alt=""
                width={500}
                height={419}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
