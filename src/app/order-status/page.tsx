import type { Metadata } from "next";
import { Suspense } from "react";
import { PayView } from "@/components/checkout/PayView";
import "@/styles/checkout.css";

export const metadata: Metadata = {
  title: "Payment status",
  robots: { index: false, follow: false },
};

export default function OrderStatusPage() {
  return (
    <Suspense fallback={<div className="ag-checkout-page" />}>
      <PayView />
    </Suspense>
  );
}
