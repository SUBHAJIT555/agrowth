import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Google",
    href: "/rent-google-agency-ads-account",
    image: "/assets/images/services/google-wordmark.png",
    width: 449,
    height: 210,
    copy: "We offer a revolutionary solution: Premium Google Ads accounts backed by our unparalleled expertise and unwavering support.",
  },
  {
    name: "Meta",
    href: "/rent-meta-agency-ads-account",
    image: "/assets/images/services/meta-wordmark.png",
    width: 420,
    height: 200,
    copy: "AGrowth Agency – With over 5 years of experience offering Facebook Agency Ads Accounts for ALL VERTICALS: POD, Dropship, Affiliate, Brands…",
  },
  {
    name: "TikTok",
    href: "/rent-tiktok-agency-ads-account",
    image: "/assets/images/services/tiktok-wordmark.png",
    width: 300,
    height: 140,
    copy: "Frustrated by frequent TikTok bans? AGrowth is designed to help businesses scale smoothly, free from the threat of account bans.",
  },
  {
    name: "Bing",
    href: "/rent-bing-agency-ads-account",
    image: "/assets/images/services/bing-wordmark.png",
    width: 300,
    height: 140,
    copy: "Ready to supercharge your Bing Ads campaigns? Take your ads campaign to a new level with Microsoft Bing Advertising from AGrowth Agency!",
  },
] as const;

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M1.5 6h9M6.5 2.5 10.5 6 6.5 9.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServicesGrid() {
  return (
    <section className="service-grid" aria-label="Services">
      <div className="container">
        <div className="space60" />
        <div className="row-grid-service">
          {services.map((service) => (
            <article className="box-service" key={service.name}>
              <div className="images">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={service.width}
                  height={service.height}
                />
              </div>
              <div className="service-heading">
                <div className="space16" />
                <p>{service.copy}</p>
                <div className="space30" />
                <Link href={service.href} className="theme-btn5">
                  Learn More
                  <ArrowRightIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
