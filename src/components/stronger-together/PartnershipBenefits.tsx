import Image from "next/image";
import type { ReactNode } from "react";

const benefits: {
  title: ReactNode;
  description: ReactNode;
  icon: string;
}[] = [
  {
    icon: "/assets/icons/stronger-together/benefit-comarketing.png",
    title: (
      <>
        <p>
          <strong>Boost Your Brand Through </strong>
        </p>
        <p>
          <strong>Co-marketing</strong>
        </p>
      </>
    ),
    description: (
      <>
        Join forces with us on co-branded campaigns,
        <br />
        featured content, and social promotions that
        <br />
        spotlight your agency and drive greater
        <br />
        awareness among high-value prospects.
      </>
    ),
  },
  {
    icon: "/assets/icons/stronger-together/benefit-network.png",
    title: (
      <p>
        <strong>
          Tap Into A Broader Client
          <br />
          Network
        </strong>
      </p>
    ),
    description: (
      <>
        Get direct exposure to our ecosystem of clients
        <br />
        actively seeking trusted agency support,
        <br />
        helping you expand your pipeline and secure
        <br />
        more qualified leads faster.
      </>
    ),
  },
  {
    icon: "/assets/icons/stronger-together/benefit-income.png",
    title: (
      <>
        <p>
          <strong>Unlock New Income Streams </strong>
        </p>
        <p>
          <strong>With Our Partner Benefits</strong>
        </p>
      </>
    ),
    description: (
      <>
        Benefit from our generous referral
        <br />
        commissions and exclusive discounts designed
        <br />
        to help your agency increase profits with every
        <br />
        client you bring into the partnership.
      </>
    ),
  },
  {
    icon: "/assets/icons/stronger-together/benefit-solutions.png",
    title: (
      <p>
        <strong>
          Deliver End-to-end Client
          <br />
          Solutions
        </strong>
      </p>
    ),
    description: (
      <>
        Integrate our products into your offering to
        <br />
        create a full-service experience, making your
        <br />
        agency more valuable and indispensable to
        <br />
        your clients’ long-term growth.
      </>
    ),
  },
];

export function PartnershipBenefits() {
  return (
    <section className="partners-benefits partners-peach" aria-label="Partnership benefits">
      <div className="container">
        <div className="row justify-content-center layout-2x2">
          {benefits.map((benefit, index) => (
            <div className="col-lg-6 col-md-6" key={index}>
              <div className="support-box dnw-box-border">
                <div className="support-header">
                  <div className="support-icon">
                    <Image src={benefit.icon} alt="" width={80} height={88} />
                  </div>
                  <h3>{benefit.title}</h3>
                </div>
                <div className="desc">
                  <p>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
