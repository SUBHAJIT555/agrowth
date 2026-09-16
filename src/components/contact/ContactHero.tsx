import Image from "next/image";

export function ContactHero() {
  return (
    <>
      <p className="title-ag">
        <span className="span">
          <Image
            src="/assets/icons/contact/span5.png"
            alt=""
            width={20}
            height={18}
          />
          Contact us
        </span>
      </p>
      <h1>
        <span className="headline-part1">Let&apos;s Start </span>
        <span className="headline-part2">Growing Together</span>
      </h1>
    </>
  );
}
