import type { Metadata } from "next";
import { ServicesCta } from "@/components/services/ServicesCta";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import "@/styles/services.css";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <ServicesGrid />
      <ServicesCta />
    </div>
  );
}
