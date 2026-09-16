import type { Metadata } from "next";
import { TikTokBeats } from "@/components/tiktok-ads/TikTokBeats";
import { TikTokContact } from "@/components/tiktok-ads/TikTokContact";
import { TikTokCta } from "@/components/tiktok-ads/TikTokCta";
import { TikTokFaq } from "@/components/tiktok-ads/TikTokFaq";
import { TikTokGuarantees } from "@/components/tiktok-ads/TikTokGuarantees";
import { TikTokHero } from "@/components/tiktok-ads/TikTokHero";
import { TikTokPlatform } from "@/components/tiktok-ads/TikTokPlatform";
import { TikTokSteps } from "@/components/tiktok-ads/TikTokSteps";
import { TikTokTestimonials } from "@/components/tiktok-ads/TikTokTestimonials";
import { TikTokWhyChoose } from "@/components/tiktok-ads/TikTokWhyChoose";
import "@/styles/tiktok-ads.css";

export const metadata: Metadata = {
  title: "Rent TikTok Agency Ads Account",
};

export default function RentTikTokAgencyAdsAccountPage() {
  return (
    <div className="tiktok-ads-page">
      <TikTokHero />
      <TikTokWhyChoose />
      <TikTokPlatform />
      <TikTokSteps />
      <TikTokBeats />
      <TikTokGuarantees />
      <TikTokTestimonials />
      <TikTokContact />
      <TikTokFaq />
      <TikTokCta />
    </div>
  );
}
