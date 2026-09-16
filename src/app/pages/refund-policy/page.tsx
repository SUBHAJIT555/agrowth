import type { Metadata } from "next";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import { RefundPolicyContent } from "@/components/policies/RefundPolicyContent";
import "@/styles/policies.css";

export const metadata: Metadata = {
  title: "Refund Policy",
};

export default function RefundPolicyRoute() {
  return (
    <PolicyPageLayout variant="document">
      <RefundPolicyContent />
    </PolicyPageLayout>
  );
}
