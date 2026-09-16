import type { Metadata } from "next";
import { MetaBeats } from "@/components/meta-ads/MetaBeats";
import { MetaContact } from "@/components/meta-ads/MetaContact";
import { MetaCta } from "@/components/meta-ads/MetaCta";
import { MetaFaq } from "@/components/meta-ads/MetaFaq";
import { MetaGuarantees } from "@/components/meta-ads/MetaGuarantees";
import { MetaHero } from "@/components/meta-ads/MetaHero";
import { MetaPlatform } from "@/components/meta-ads/MetaPlatform";
import { MetaSteps } from "@/components/meta-ads/MetaSteps";
import { MetaTestimonials } from "@/components/meta-ads/MetaTestimonials";
import { MetaWhyChoose } from "@/components/meta-ads/MetaWhyChoose";
import "@/styles/meta-ads.css";

export const metadata: Metadata = {
  title: "Rent Facebook Agency Ads Account",
};

export default function RentMetaAgencyAdsAccountPage() {
  return (
    <div className="meta-ads-page">
      <MetaHero />
      <MetaWhyChoose />
      <MetaPlatform />
      <MetaSteps />
      <MetaBeats />
      <MetaGuarantees />
      <MetaTestimonials />
      <MetaContact />
      <MetaFaq />
      <MetaCta />
    </div>
  );
}
