import Image from "next/image";

export function PartnershipImportance() {
  return (
    <section className="partners-split partners-why" aria-labelledby="why-partnerships-heading">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="partners-split-visual">
              <Image
                src="/assets/images/stronger-together/why-partnerships.png"
                alt=""
                width={766}
                height={642}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="split-copy">
              <h2 id="why-partnerships-heading" className="partners-gradient-heading">
                Why Partnerships Matter At Agent Mart AI?
              </h2>
              <p>
                At Agent Mart AI, we believe that success in digital marketing requires not just
                expertise, but also synergy. That’s why we cooperate with top-tier platforms and
                technology providers across the globe.
              </p>
              <p>
                These strategic alliances allow us to deliver more scalable, secure, and innovative
                solutions for our clients, from global e-commerce brands to growing local
                businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
