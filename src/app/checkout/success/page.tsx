import type { Metadata } from "next";
import { CheckoutSuccess } from "@/components/checkout/CheckoutSuccess";
import "@/styles/checkout.css";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutSuccessPage() {
  return <CheckoutSuccess />;
}
