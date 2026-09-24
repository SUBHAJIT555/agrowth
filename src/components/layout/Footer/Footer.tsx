import Image from "next/image";
import Link from "next/link";
import {
  footerCompanyLinks,
  footerServiceLinks,
} from "@/config/navigation";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 size-5 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.2 4.8h2.4l1.2 3-1.8 1.2a11 11 0 0 0 5.8 5.8l1.2-1.8 3 1.2v2.4c0 .7-.6 1.2-1.3 1.2C9.8 18 6 14.2 6 6.1 6 5.4 6.5 4.8 7.2 4.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 size-5 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-footer-image bg-cover bg-center pt-[100px] text-white">
      <Container>
        <div className="grid gap-10 pb-10 md:grid-cols-2 nav:grid-cols-4 nav:gap-8">
          <div>
            <Logo variant="white" size="footer" className="mb-5" />
            <p className="mb-6 text-[18px] leading-7 text-white/85">
              {site.footerDescription}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Image
                src="/assets/images/shared/badge-meta-partner.png"
                alt="Meta Business Partner"
                width={80}
                height={40}
                className="h-12 w-auto"
              />
              <Image
                src="/assets/images/shared/badge-google-partner.png"
                alt="Google Partner"
                width={80}
                height={40}
                className="h-12 w-auto"
              />
              <Image
                src="/assets/images/shared/badge-tiktok-marketing-partner.jpg"
                alt="TikTok Marketing Partner"
                width={80}
                height={40}
                className="h-12 w-auto"
              />
            </div>
            <div className="mt-4">
              <Image
                src="/assets/images/shared/badge-trustpilot.png"
                alt="Trustpilot Rating"
                width={225}
                height={48}
                className="h-12 w-auto"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[24px] font-medium leading-6">Company</h3>
            <ul className="space-y-3">
              {footerCompanyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[16px] text-white transition-colors duration-200 hover:text-brand-orange-mid"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[24px] font-medium leading-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[16px] text-white transition-colors duration-200 hover:text-brand-orange-mid"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[24px] font-medium leading-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-start gap-4 text-[16px] text-white hover:text-brand-orange-mid"
                >
                  <MailIcon />
                  <span>Email: {site.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="flex items-start gap-4 text-[16px] text-white hover:text-brand-orange-mid"
                >
                  <PhoneIcon />
                  <span>Phone: {site.contact.phone}</span>
                </a>
              </li>
              <li className="text-[14px] leading-6 text-white/70">
                Legal name: {site.legalName}
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 border-t border-white/10 py-8 nav:grid-cols-4">
          <div className="hidden nav:block" />
          <div className="nav:col-span-3">
            <h3 className="mb-5 text-[24px] font-medium leading-6">
              Our Location
            </h3>
            <div className="space-y-4">
              {site.locations.map((location) => (
                <p
                  key={location.label}
                  className="flex items-start gap-3 text-[18px] leading-7 text-white/85"
                >
                  <Image
                    src="/assets/icons/icon-location.png"
                    alt=""
                    width={24}
                    height={24}
                    className="mt-1 size-5 shrink-0"
                  />
                  <span>
                    {location.label}: {location.address}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-[16px] text-white/90">{site.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
