import { AdPlatformTabs } from "@/components/home/AdPlatformTabs";
import { AgencyAccountSteps } from "@/components/home/AgencyAccountSteps";
import { BrandsMarquee } from "@/components/home/BrandsMarquee";
import { CampaignInfrastructure } from "@/components/home/CampaignInfrastructure";
import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import { HomeContact } from "@/components/home/HomeContact";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStats } from "@/components/home/HomeStats";
import { IncludedBenefits } from "@/components/home/IncludedBenefits";
import { PlatformCta } from "@/components/home/PlatformCta";
import { PlatformOverview } from "@/components/home/PlatformOverview";
import { UnstableAccounts } from "@/components/home/UnstableAccounts";

export default function Home() {
  return (
    <div className="home-page">
      <HomeHero />
      <BrandsMarquee />
      <UnstableAccounts />
      <AdPlatformTabs />
      <CampaignInfrastructure />
      <HomeStats />
      <IncludedBenefits />
      <PlatformOverview />
      <AgencyAccountSteps />
      <ClientTestimonials />
      <HomeContact />
      <PlatformCta />
    </div>
  );
}
