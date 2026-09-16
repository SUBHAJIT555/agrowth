import Image from "next/image";

const steps = [
  {
    n: "1.",
    title: "Apply",
    copy: "Complete our simple partnership application form to get started.",
    icon: "/assets/icons/stronger-together/step-apply.png",
    width: 540,
    height: 538,
  },
  {
    n: "2.",
    title: "Connect",
    copy: "Join a call with our team to discuss how we can collaborate effectively.",
    icon: "/assets/icons/stronger-together/step-connect.png",
    width: 1024,
    height: 961,
  },
  {
    n: "3.",
    title: "Finalize",
    copy: "Sign the partnership agreement and unlock access to exclusive resources.",
    icon: "/assets/icons/stronger-together/step-finalize.png",
    width: 358,
    height: 238,
  },
  {
    n: "4.",
    title: "Launch",
    copy: "Start growing your business with our tools, support, and co-marketing opportunities.",
    icon: "/assets/icons/stronger-together/step-launch.png",
    width: 571,
    height: 369,
  },
] as const;

export function PartnershipProcess() {
  return (
    <section className="partners-process partners-peach" aria-labelledby="how-to-partner-heading">
      <div className="container">
        <div className="heading5 text-center">
          <h2 id="how-to-partner-heading">How To Partner With Us?</h2>
        </div>
        <div className="row row-how-we-work justify-content-center">
          {steps.map((step) => (
            <div className="col-lg-3 col-md-6" key={step.title}>
              <div className="we-work-box dnw-box-border">
                <div className="step">{step.n}</div>
                <div className="we-work-icon">
                  <div className="we-work-icon-wrap">
                    <Image src={step.icon} alt="" width={step.width} height={step.height} />
                  </div>
                </div>
                <h3>{step.title}</h3>
                <div className="desc">
                  <p>{step.copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
