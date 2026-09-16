import type { Metadata } from "next";
import { PlatformCta } from "@/components/agrowth-platform/PlatformCta";
import { PlatformFaq } from "@/components/agrowth-platform/PlatformFaq";
import { PlatformFeatures } from "@/components/agrowth-platform/PlatformFeatures";
import { PlatformHero } from "@/components/agrowth-platform/PlatformHero";
import { PlatformHowItWorks } from "@/components/agrowth-platform/PlatformHowItWorks";
import { PlatformWhyChoose } from "@/components/agrowth-platform/PlatformWhyChoose";
import "@/styles/agrowth-platform.css";

export const metadata: Metadata = {
  title: "AGrowth Platform",
};

export default function AgrowthPlatformPage() {
  return (
    <div className="platform-page">
      <PlatformHero />
      <PlatformWhyChoose />
      <PlatformFeatures />
      <PlatformHowItWorks />
      <PlatformFaq />
      <PlatformCta />
    </div>
  );
}
