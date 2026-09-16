import Image from "next/image";

const rowRight = [
  { src: "/assets/images/home/marquee-google.png", alt: "Google" },
  { src: "/assets/images/home/marquee-taboola.png", alt: "Taboola" },
  { src: "/assets/images/home/marquee-yandex.png", alt: "Yandex" },
];

const rowLeft = [
  { src: "/assets/images/home/marquee-gone-in-woods.png", alt: "Gone in the Woods" },
  { src: "/assets/images/home/marquee-yango.png", alt: "Yango Ads" },
  { src: "/assets/images/home/marquee-lumeera.png", alt: "Lumeera" },
];

function Track({
  items,
  direction,
}: {
  items: { src: string; alt: string }[];
  direction: "right" | "left";
}) {
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-row">
      <div className={`marquee-track ${direction === "right" ? "track-right" : "track-left"}`}>
        {loop.map((item, index) => (
          <div className="logo-item" key={`${item.alt}-${index}`}>
            <Image src={item.src} alt={item.alt} width={160} height={60} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandsMarquee() {
  return (
    <section className="home-marquee" aria-label="Brand partners">
      <div className="concentric-bg" />
      <div className="brands-marquee-container">
        <Track items={rowRight} direction="right" />
        <Track items={rowLeft} direction="left" />
      </div>
    </section>
  );
}
