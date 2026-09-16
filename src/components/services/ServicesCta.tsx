import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";

export function ServicesCta() {
  return (
    <section
      className="cta2"
      style={
        {
          backgroundImage: "url('/assets/images/services/cta-sunburst.png')",
        } as CSSProperties
      }
    >
      <div className="container">
        <div className="heading">
          <h2>Maximize Your ROI with Our Best Solutions</h2>
          <p>
            We provide the best solutions to help you achieve your business goals. Our team of experts is dedicated to delivering results that matter.
          </p>
          <div className="form-area">
            <Button href="/contact-us">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
