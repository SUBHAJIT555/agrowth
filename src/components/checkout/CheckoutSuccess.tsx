"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { readCheckoutRequest, type CheckoutRequest } from "@/lib/checkout";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";

export function CheckoutSuccess() {
  const router = useRouter();
  const [request, setRequest] = useState<CheckoutRequest | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readCheckoutRequest();
    setRequest(stored);
    setReady(true);
    if (stored?.orderId && !stored.paidAt) {
      router.replace(`/pay?order_id=${encodeURIComponent(stored.orderId)}`);
    }
  }, [router]);

  if (!ready) {
    return <div className="ag-checkout-page" />;
  }

  return (
    <div className="ag-checkout-page">
      <div className="checkout-shell ag-checkout-success">
        <h1 className="ag-checkout-title">
          {request?.paidAt ? "Payment received" : "Payment pending"}
        </h1>
        {request?.paidAt ? (
          <>
            <p>
              Thanks {request.name}. Payment for {request.productLabel}
              {request.amountLabel ? ` of ${request.amountLabel}` : ""} is
              confirmed.
            </p>
            <p className="ag-checkout-id">
              Reference: {request.orderId || request.id}
            </p>
          </>
        ) : (
          <p>
            Payment is not confirmed yet. If you already started UPI, keep the
            pay page open until it succeeds.
          </p>
        )}
        <div className="ag-checkout-actions">
          <CheckoutButton
            href={
              request?.orderId && !request.paidAt
                ? `/pay?order_id=${encodeURIComponent(request.orderId)}`
                : request?.productId
                  ? `/checkout?service=${request.productId}`
                  : "/checkout"
            }
          >
            {request?.paidAt ? "Back to checkout" : "Open payment page"}
          </CheckoutButton>
        </div>
        <p>
          <Link href="/pages/contact-us">Contact Us</Link> if you need help with
          this order.
        </p>
      </div>
    </div>
  );
}
