"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  billingPlans,
  checkoutPath,
  formatAmount,
  getBillingPlan,
  getProduct,
  isProductId,
  products,
  type BillingPlanId,
} from "@/config/products";
import { createCheckoutId, saveCheckoutRequest } from "@/lib/checkout";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";

const defaultPlan = billingPlans.find((plan) => plan.id === "hourly") ?? billingPlans[0];

export function CheckoutView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requested = searchParams.get("service");
  const productId = requested && isProductId(requested) ? requested : null;
  const serviceLocked = Boolean(productId);
  const [planId, setPlanId] = useState<BillingPlanId>(defaultPlan.id);
  const [customAmount, setCustomAmount] = useState(
    defaultPlan.amount ? String(defaultPlan.amount) : "",
  );
  const [status, setStatus] = useState("");

  const product = useMemo(
    () => (productId ? getProduct(productId) : null),
    [productId],
  );
  const plan = useMemo(() => getBillingPlan(planId), [planId]);
  const isCustom = planId === "custom";
  const parsedCustom = Number(customAmount.replace(/[^\d]/g, ""));
  const amount: number = isCustom ? parsedCustom : (plan?.amount ?? parsedCustom);
  const amountValid = Number.isFinite(amount) && amount > 0;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity() || !product || !plan || !amountValid) {
      setStatus(
        isCustom
          ? "Enter a valid custom amount in INR."
          : "Please complete the required fields.",
      );
      return;
    }

    const data = new FormData(form);
    saveCheckoutRequest({
      id: createCheckoutId(),
      productId: product.id,
      productLabel: product.label,
      billingPlanId: plan.id,
      billingPlanLabel: plan.label,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      company: String(data.get("company") ?? ""),
      contactType:
        data.get("contact-type") === "WhatsApp" ? "WhatsApp" : "Telegram",
      contactDetails: String(data.get("contact-details") ?? ""),
      amount,
      amountLabel: formatAmount(amount),
      currency: "INR",
      message: String(data.get("message") ?? ""),
      createdAt: new Date().toISOString(),
    });

    router.push("/checkout/payment");
  }

  return (
    <div className="ag-checkout-page">
      <div className="checkout-shell">
        <p className="ag-checkout-kicker">{product?.kicker ?? "Services"}</p>
        <h1 className="ag-checkout-title">Checkout</h1>
        <p className="ag-checkout-lead">
          {serviceLocked
            ? "Choose an amount in INR. Use a quick amount or enter a custom value."
            : "Pick a service to purchase. You will choose the amount next."}
        </p>

        {!serviceLocked ? (
          <div className="ag-checkout-card">
            <h2>Purchase a service</h2>
            <div className="ag-checkout-buy-grid">
              {products.map((item) => (
                <Link
                  key={item.id}
                  href={checkoutPath(item.id)}
                  className="ag-checkout-plan"
                >
                  <span className="ag-checkout-plan-label">{item.kicker}</span>
                  <strong>{item.label}</strong>
                  <span className="ag-checkout-buy-label">Purchase</span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <form className="ag-checkout-grid" onSubmit={onSubmit} noValidate>
            <div className="ag-checkout-card">
              <div className="ag-checkout-locked">
                <h2>{product?.label}</h2>
                <p>This checkout is for the service you selected.</p>
              </div>
              <input type="hidden" name="service" value={productId ?? ""} />

              <fieldset className="ag-checkout-amounts">
                <legend>Amount</legend>
                <div className="ag-checkout-amount-row">
                  {billingPlans.map((item) => {
                    const selected = planId === item.id;
                    return (
                      <label
                        key={item.id}
                        className={
                          selected
                            ? "ag-checkout-amount is-selected"
                            : "ag-checkout-amount"
                        }
                      >
                        <input
                          type="radio"
                          name="billing-plan"
                          value={item.id}
                          checked={selected}
                          onChange={() => {
                            setPlanId(item.id);
                            setCustomAmount(item.amount ? String(item.amount) : "");
                          }}
                        />
                        <span>
                          {item.id === "hourly" || item.id === "daily"
                            ? `${item.label} · ${formatAmount(item.amount ?? 0)}`
                            : item.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="ag-checkout-fields ag-checkout-ondemand">
                <label htmlFor="custom-amount">Custom amount (INR)</label>
                <input
                  id="custom-amount"
                  name="custom-amount"
                  inputMode="numeric"
                  placeholder="Enter amount in ₹"
                  value={customAmount}
                  required={isCustom}
                  aria-label="Custom amount in INR"
                  onChange={(event) => {
                    setPlanId("custom");
                    setCustomAmount(event.target.value);
                  }}
                />
              </div>

              <div className="ag-checkout-fields">
                <input name="name" placeholder="Your name" required aria-label="Your name" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  aria-label="Your email"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  required
                  aria-label="Your phone number"
                />
                <input name="company" placeholder="Company name" aria-label="Company name" />
                <div className="ag-checkout-split">
                  <select name="contact-type" defaultValue="Telegram" aria-label="Contact type">
                    <option>Telegram</option>
                    <option>WhatsApp</option>
                  </select>
                  <input
                    name="contact-details"
                    placeholder="Contact details"
                    required
                    aria-label="Contact details"
                  />
                </div>
                <textarea name="message" placeholder="Your message" aria-label="Your message" />
              </div>
            </div>

            <aside className="ag-checkout-card ag-checkout-summary">
              <h2>Request summary</h2>
              <dl>
                <div>
                  <dt>Service</dt>
                  <dd>{product?.label}</dd>
                </div>
                <div>
                  <dt>Option</dt>
                  <dd>{plan?.label ?? "Custom"}</dd>
                </div>
                <div>
                  <dt>Amount</dt>
                  <dd>{amountValid ? formatAmount(amount) : "Enter INR amount"}</dd>
                </div>
                <div>
                  <dt>Currency</dt>
                  <dd>INR</dd>
                </div>
              </dl>
              <div className="ag-checkout-actions">
                <CheckoutButton type="submit">Place request</CheckoutButton>
                {status ? <p className="ag-checkout-status">{status}</p> : null}
              </div>
            </aside>
          </form>
        )}
      </div>
    </div>
  );
}
