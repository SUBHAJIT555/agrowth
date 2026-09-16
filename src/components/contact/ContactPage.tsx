import { ContactContent } from "@/components/contact/ContactContent";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMethods } from "@/components/contact/ContactMethods";

export function ContactPage() {
  return (
    <div className="ag-contact-page">
      <section className="faq-contact contact-page sp2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading5">
                <ContactHero />
                <ContactContent />
                <div className="space24" />
                <ContactMethods />
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
