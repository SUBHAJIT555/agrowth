import type { Metadata } from "next";
import { PaymentMethodsPolicyContent } from "@/components/policies/PaymentMethodsPolicyContent";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import "@/styles/policies.css";

export const metadata: Metadata = {
  title: "Payment Methods Policy",
};

export default function PaymentMethodsPolicyRoute() {
  return (
    <PolicyPageLayout>
      <PaymentMethodsPolicyContent />
    </PolicyPageLayout>
  );
}
