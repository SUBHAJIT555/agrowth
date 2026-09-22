"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  getPaymentMethod,
  isEnabledPaymentMethod,
  paymentMethods,
  readCheckoutRequest,
  saveCheckoutPayment,
  type CheckoutRequest,
  type PaymentMethodId,
} from "@/lib/checkout";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";

const defaultMethod =
  paymentMethods.find((method) => method.enabled)?.id ?? "upi";

function isUpiId(value: string) {
  return /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/.test(value.trim());
}

export function CheckoutPayment() {
  const router = useRouter();
  const [request, setRequest] = useState<CheckoutRequest | null>(null);
  const [ready, setReady] = useState(false);
  const [methodId, setMethodId] = useState<PaymentMethodId>(defaultMethod);
  const [upiId, setUpiId] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const stored = readCheckoutRequest();
    setRequest(stored);
    if (stored?.paymentMethodId && isEnabledPaymentMethod(stored.paymentMethodId)) {
      setMethodId(stored.paymentMethodId);
    } else {
      setMethodId(defaultMethod);
    }
    setReady(true);
  }, []);

  const method = useMemo(() => getPaymentMethod(methodId), [methodId]);
  const isUpi = methodId === "upi";
  const checkoutHref = request?.productId
    ? `/checkout?service=${request.productId}`
    : "/checkout";

  function onPay(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!request || !method?.enabled) {
      setStatus("UPI is the only payment method available right now.");
      return;
    }

    if (isUpi && !isUpiId(upiId)) {
      setStatus("Enter a valid UPI ID, for example name@upi.");
      return;
    }

    saveCheckoutPayment(request, method.id);
    router.push("/checkout/success");
  }

  if (!ready) {
    return <div className="ag-checkout-page" />;
  }

  if (!request) {
    return (
      <div className="ag-checkout-page">
        <div className="checkout-shell ag-checkout-success">
          <p className="ag-checkout-kicker">Payment</p>
          <h1 className="ag-checkout-title">Payment</h1>
          <p>No checkout request was found in this browser.</p>
          <div className="ag-checkout-actions">
            <CheckoutButton href="/checkout">Back to checkout</CheckoutButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ag-checkout-page">
      <div className="checkout-shell">
        <p className="ag-checkout-kicker">Payment</p>
        <h1 className="ag-checkout-title">Complete payment</h1>
        <p className="ag-checkout-lead">
          Pay {request.amountLabel} to activate {request.productLabel}. Only UPI
          is open for payment right now.
        </p>

        <form className="ag-checkout-grid" onSubmit={onPay} noValidate>
          <div className="ag-checkout-card">
            <fieldset className="ag-checkout-amounts">
              <legend>Payment method</legend>
              <div className="ag-checkout-plan-grid ag-checkout-pay-grid">
                {paymentMethods.map((item) => {
                  const selected = methodId === item.id;
                  const disabled = !item.enabled;
                  return (
                    <label
                      key={item.id}
                      className={[
                        "ag-checkout-plan",
                        selected ? "is-selected" : "",
                        disabled ? "is-disabled" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <input
                        type="radio"
                        name="payment-method"
                        value={item.id}
                        checked={selected}
                        disabled={disabled}
                        onChange={() => {
                          if (disabled) return;
                          setMethodId(item.id);
                          setStatus("");
                        }}
                      />
                      <span className="ag-checkout-plan-label">
                        {item.label}
                        {disabled ? (
                          <span className="ag-checkout-amount-tag">Unavailable</span>
                        ) : null}
                      </span>
                      <span className="ag-checkout-plan-hint">{item.hint}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {isUpi ? (
              <div className="ag-checkout-fields ag-checkout-upi">
                <label htmlFor="upi-id">UPI ID</label>
                <input
                  id="upi-id"
                  name="upi-id"
                  placeholder="yourname@upi"
                  autoComplete="off"
                  value={upiId}
                  required
                  aria-label="UPI ID"
                  onChange={(event) => setUpiId(event.target.value)}
                />
                <p className="ag-checkout-pay-note">
                  Open any UPI app and pay {request.amountLabel} from this ID.
                  Account access starts after the payment is confirmed.
                </p>
              </div>
            ) : null}
          </div>

          <aside className="ag-checkout-card ag-checkout-summary">
            <h2>Payment summary</h2>
            <dl>
              <div>
                <dt>Service</dt>
                <dd>{request.productLabel}</dd>
              </div>
              <div>
                <dt>Option</dt>
                <dd>{request.billingPlanLabel}</dd>
              </div>
              <div>
                <dt>Amount</dt>
                <dd>{request.amountLabel}</dd>
              </div>
              <div>
                <dt>Method</dt>
                <dd>{method?.label ?? "—"}</dd>
              </div>
              <div>
                <dt>Reference</dt>
                <dd>{request.id}</dd>
              </div>
            </dl>
            <div className="ag-checkout-actions">
              <CheckoutButton type="submit">
                Pay {request.amountLabel} with UPI
              </CheckoutButton>
              {status ? <p className="ag-checkout-status">{status}</p> : null}
            </div>
            <p className="ag-checkout-back">
              <Link href={checkoutHref}>Back to checkout</Link>
            </p>
          </aside>
        </form>
      </div>
    </div>
  );
}
