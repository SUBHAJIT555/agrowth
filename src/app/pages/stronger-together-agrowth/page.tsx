import type { Metadata } from "next";
import { PartnershipApplication } from "@/components/stronger-together/PartnershipApplication";
import { PartnershipBenefits } from "@/components/stronger-together/PartnershipBenefits";
import { PartnershipCTA } from "@/components/stronger-together/PartnershipCTA";
import { PartnershipHero } from "@/components/stronger-together/PartnershipHero";
import { PartnershipImportance } from "@/components/stronger-together/PartnershipImportance";
import { PartnershipProcess } from "@/components/stronger-together/PartnershipProcess";
import { PartnerTypes, PartnerWho } from "@/components/stronger-together/PartnerTypes";
import { StrategicPartners } from "@/components/stronger-together/StrategicPartners";
import "@/styles/stronger-together.css";

export const metadata: Metadata = {
  title: "Stronger Together | AGrowth Strategic Partners",
};

export default function StrongerTogetherPage() {
  return (
    <div className="partners-page">
      <PartnershipHero />
      <StrategicPartners />
      <PartnershipImportance />
      <PartnershipBenefits />
      <PartnerWho />
      <PartnerTypes />
      <PartnershipCTA />
      <PartnershipProcess />
      <PartnershipApplication />
    </div>
  );
}
