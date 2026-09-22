import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutView } from "@/components/checkout/CheckoutView";
import "@/styles/checkout.css";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="ag-checkout-page" />}>
      <CheckoutView />
    </Suspense>
  );
}
