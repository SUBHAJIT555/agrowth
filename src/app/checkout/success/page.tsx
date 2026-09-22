import type { Metadata } from "next";
import { CheckoutSuccess } from "@/components/checkout/CheckoutSuccess";
import "@/styles/checkout.css";

export const metadata: Metadata = {
  title: "Payment received",
};

export default function CheckoutSuccessPage() {
  return <CheckoutSuccess />;
}
