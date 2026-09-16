import Image from "next/image";

const types = [
  {
    title: "Digital Agencies",
    description: "Scale client results with co-branded ads and tools.",
    icon: "/assets/icons/stronger-together/type-agencies.png",
  },
  {
    title: "SaaS & Tech Tools",
    description: "Integrate your platform into our ad ecosystem.",
    icon: "/assets/icons/stronger-together/type-saas.png",
  },
  {
    title: "Affiliate Teams",
    description: "Reach better ROI via secure, optimized accounts.",
    icon: "/assets/icons/stronger-together/type-affiliate.png",
  },
  {
    title: "Influencer Networks",
    description: "Collaborate on creator-led campaigns that convert.",
    icon: "/assets/icons/stronger-together/type-influencer.png",
  },
  {
    title: "AdTech Providers",
    description: "Add value with privacy, anti-ban, or automation tech.",
    icon: "/assets/icons/stronger-together/type-adtech.png",
  },
  {
    title: "Growth-Focused Firms",
    description: "Serve businesses ready to scale globally.",
    icon: "/assets/icons/stronger-together/type-growth.png",
  },
] as const;

export function PartnerWho() {
  return (
    <section className="partners-split partners-who" aria-labelledby="who-partners-heading">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="partners-split-visual">
              <Image
                src="/assets/images/stronger-together/who-partners.png"
                alt=""
                width={766}
                height={642}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="split-copy">
              <h2 id="who-partners-heading" className="partners-gradient-heading">
                Who Can Be Our Partners?
              </h2>
              <p>
                We welcome partners who share our vision for scalable, performance-driven
                advertising.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PartnerTypes() {
  return (
    <section className="partners-types partners-peach" aria-label="Partner types">
      <div className="container">
        <div className="categories-grid">
          {types.map((type) => (
            <article className="category-card dnw-box-border" key={type.title}>
              <div className="card-header">
                <div className="card-icon-image">
                  <Image
                    src={type.icon}
                    alt={type.title}
                    width={80}
                    height={90}
                    className="icon-image"
                  />
                </div>
                <h3 className="category-title">{type.title}</h3>
              </div>
              <p className="category-description">{type.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
