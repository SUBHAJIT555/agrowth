import Image from "next/image";

const partners = [
  {
    name: "TopAds",
    logo: "/assets/logos/stronger-together/topads.jpg",
    description:
      "TopAds is a performance-driven digital agency focused on e- commerce growth in Southeast Asia. Specializing in affiliate marketing, influencer outreach, and direct-response ads, it helps brands drive ROI across major platforms like Facebook, TikTok and Google.",
  },
  {
    name: "AdsPower",
    logo: "/assets/logos/stronger-together/adspower.png",
    description:
      "AdsPower is a powerful anti- detect browser designed for digital marketers, affiliate professionals, and agencies managing multiple ad accounts. It ensures privacy, security, and operational efficiency by simulating separate browser environments for each account.",
  },
] as const;

export function StrategicPartners() {
  return (
    <section className="partners-growing" aria-label="See Who Growing With Us">
      <div className="orange-banner">
        <div className="container">
          <h2 className="banner-title">See Who Growing With Us</h2>
        </div>
      </div>
      <div className="cards-section">
        <div className="container">
          <div className="cards-grid">
            {partners.map((partner) => (
              <article className="service-card" key={partner.name}>
                <div className="card-image">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={65}
                    height={65}
                    className="logo-image"
                  />
                </div>
                <h3 className="card-title">{partner.name}</h3>
                <p className="card-description">{partner.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
