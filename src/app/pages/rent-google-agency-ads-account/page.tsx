import type { Metadata } from "next";
import { GoogleBeats } from "@/components/google-ads/GoogleBeats";
import { GoogleContact } from "@/components/google-ads/GoogleContact";
import { GoogleCta } from "@/components/google-ads/GoogleCta";
import { GoogleFaq } from "@/components/google-ads/GoogleFaq";
import { GoogleGuarantees } from "@/components/google-ads/GoogleGuarantees";
import { GoogleHero } from "@/components/google-ads/GoogleHero";
import { GoogleOffer } from "@/components/google-ads/GoogleOffer";
import { GooglePlatform } from "@/components/google-ads/GooglePlatform";
import { GoogleSteps } from "@/components/google-ads/GoogleSteps";
import { GoogleTestimonials } from "@/components/google-ads/GoogleTestimonials";
import { GoogleWhyChoose } from "@/components/google-ads/GoogleWhyChoose";
import "@/styles/google-ads.css";

export const metadata: Metadata = {
  title: "Rent Google Agency Ads Account",
};

export default function RentGoogleAgencyAdsAccountPage() {
  return (
    <div className="google-ads-page">
      <GoogleHero />
      <GoogleWhyChoose />
      <GooglePlatform />
      <GoogleOffer />
      <GoogleSteps />
      <GoogleBeats />
      <GoogleGuarantees />
      <GoogleTestimonials />
      <GoogleContact />
      <GoogleFaq />
      <GoogleCta />
    </div>
  );
}
