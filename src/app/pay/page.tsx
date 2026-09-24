import type { Metadata } from "next";
import { Suspense } from "react";
import { PayView } from "@/components/checkout/PayView";
import "@/styles/checkout.css";

export const metadata: Metadata = {
  title: "Pay",
  robots: { index: false, follow: false },
};

export default function PayPage() {
  return (
    <Suspense fallback={<div className="ag-checkout-page" />}>
      <PayView />
    </Suspense>
  );
}
