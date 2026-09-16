import Image from "next/image";

export function ContactMethods() {
  return (
    <div className="faq-contact-boxs">
      <div className="row">
        <div className="col-lg-12">
          <div className="single-box">
            <div className="icon">
              <Image
                src="/assets/icons/contact/email.svg"
                width={33}
                height={32}
                alt="Email"
                unoptimized
              />
            </div>
            <div className="heading">
              <b>Our Email</b>
              <a href="mailto:sales@agrowth.io">sales@agrowth.io</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
