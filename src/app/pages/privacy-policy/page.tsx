import type { Metadata } from "next";
import { PolicyPageLayout } from "@/components/policies/PolicyPageLayout";
import { PrivacyPolicyContent } from "@/components/policies/PrivacyPolicyContent";
import "@/styles/policies.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyRoute() {
  return (
    <PolicyPageLayout>
      <PrivacyPolicyContent />
    </PolicyPageLayout>
  );
}
