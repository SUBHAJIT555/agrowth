import type { Metadata } from "next";
import { CheckoutPayment } from "@/components/checkout/CheckoutPayment";
import "@/styles/checkout.css";

export const metadata: Metadata = {
  title: "Payment",
};

export default function CheckoutPaymentPage() {
  return <CheckoutPayment />;
}
