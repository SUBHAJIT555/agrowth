"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { readCheckoutRequest, type CheckoutRequest } from "@/lib/checkout";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";

export function CheckoutSuccess() {
  const [request, setRequest] = useState<CheckoutRequest | null>(null);

  useEffect(() => {
    setRequest(readCheckoutRequest());
  }, []);

  return (
    <div className="ag-checkout-page">
      <div className="checkout-shell ag-checkout-success">
        <h1 className="ag-checkout-title">Request received</h1>
        {request ? (
          <>
            <p>
              Thanks {request.name}. Your request for {request.productLabel}
              {request.amountLabel ? ` at ${request.amountLabel}` : ""} is saved
              in this browser.
            </p>
            <p className="ag-checkout-id">Reference: {request.id}</p>
          </>
        ) : (
          <p>No checkout request was found in this browser.</p>
        )}
        <div className="ag-checkout-actions">
          <CheckoutButton
            href={request?.productId ? `/checkout?service=${request.productId}` : "/checkout"}
          >
            Back to checkout
          </CheckoutButton>
        </div>
        <p>
          <Link href="/pages/contact-us">Contact Us</Link> if you need to add
          anything to this request.
        </p>
      </div>
    </div>
  );
}
