import Image from "next/image";

export function GoogleGuarantees() {
  return (
    <section className="google-guarantees" aria-label="Guarantees">
      <div className="container">
        <div className="guarantees-img-wrapper">
          <Image
            src="/assets/images/google-ads/guarantees.png"
            alt="Guarantees"
            width={1200}
            height={670}
            className="guarantees-img"
          />
        </div>
      </div>
    </section>
  );
}
