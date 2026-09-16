import Image from "next/image";

export function PartnershipCTA() {
  return (
    <section className="partners-cta" aria-labelledby="grow-together-heading">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading-wrap">
              <h2 id="grow-together-heading" className="partners-gradient-heading">
                Let’s Grow Together!
              </h2>
              <p>
                Reach out to learn how our strategic alliances can help your business achieve more!
              </p>
              <a className="theme-btn3" href="#contact-section">
                Talk to Our Team
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="partners-cta-photo">
              <Image
                src="/assets/images/stronger-together/grow-together.png"
                alt=""
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
