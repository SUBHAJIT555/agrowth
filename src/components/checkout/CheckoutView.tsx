"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
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
import { IndiaPhoneCode } from "@/components/forms/IndiaPhoneCode";
import {
  createCheckoutId,
  readCheckoutRequest,
  saveCheckoutRequest,
} from "@/lib/checkout";
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
  const [hydrated, setHydrated] = useState(false);
  const [saved, setSaved] = useState(() => ({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    contactDetails: "",
    message: "",
  }));

  useEffect(() => {
    const stored = readCheckoutRequest();
    if (!stored || stored.paidAt) {
      setHydrated(true);
      return;
    }
    if (stored.billingPlanId) {
      setPlanId(stored.billingPlanId);
      setCustomAmount(
        stored.billingPlanId === "custom"
          ? String(stored.amount || "")
          : stored.amount
            ? String(stored.amount)
            : "",
      );
    }
    setSaved({
      name: stored.name ?? "",
      email: stored.email ?? "",
      phone: stored.phone ?? "",
      company: stored.company ?? "",
      address: stored.address ?? "",
      city: stored.city ?? "",
      contactDetails: stored.contactDetails ?? "",
      message: stored.message ?? "",
    });
    setHydrated(true);
  }, []);

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
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "").replace(/^91/, "");
    if (!/^[6-9][0-9]{9}$/.test(phone)) {
      setStatus("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    const existing = readCheckoutRequest();
    saveCheckoutRequest({
      id: existing?.id && !existing.paidAt ? existing.id : createCheckoutId(),
      productId: product.id,
      productLabel: product.label,
      billingPlanId: plan.id,
      billingPlanLabel: plan.label,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone,
      company: String(data.get("company") ?? ""),
      address: String(data.get("address") ?? ""),
      city: String(data.get("city") ?? ""),
      contactType:
        data.get("contact-type") === "WhatsApp" ? "WhatsApp" : "Telegram",
      contactDetails: String(data.get("contact-details") ?? ""),
      amount,
      amountLabel: formatAmount(amount),
      currency: "INR",
      message: String(data.get("message") ?? ""),
      createdAt: existing?.createdAt ?? new Date().toISOString(),
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
          <form
            key={hydrated ? "ready" : "init"}
            className="ag-checkout-grid"
            onSubmit={onSubmit}
            noValidate
          >
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
                <input
                  name="name"
                  placeholder="Your name"
                  required
                  defaultValue={saved.name}
                  aria-label="Your name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  defaultValue={saved.email}
                  aria-label="Your email"
                />
                <div className="ag-checkout-phone">
                  <IndiaPhoneCode />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit Indian mobile"
                    required
                    defaultValue={saved.phone}
                    aria-label="Your phone number"
                  />
                </div>
                <input
                  name="company"
                  placeholder="Company name"
                  defaultValue={saved.company}
                  aria-label="Company name"
                />
                <input
                  name="address"
                  placeholder="Street address"
                  required
                  defaultValue={saved.address}
                  aria-label="Street address"
                />
                <input
                  name="city"
                  placeholder="City"
                  required
                  defaultValue={saved.city}
                  aria-label="City"
                />
                <div className="ag-checkout-split">
                  <select name="contact-type" defaultValue="Telegram" aria-label="Contact type">
                    <option>Telegram</option>
                    <option>WhatsApp</option>
                  </select>
                  <input
                    name="contact-details"
                    placeholder="Contact details"
                    required
                    defaultValue={saved.contactDetails}
                    aria-label="Contact details"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  defaultValue={saved.message}
                  aria-label="Your message"
                />
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
