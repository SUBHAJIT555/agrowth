"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  formatAmount,
  getProduct,
  isProductId,
  products,
  type ProductId,
} from "@/config/products";
import { createCheckoutId, saveCheckoutRequest } from "@/lib/checkout";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";

const defaultProductId: ProductId = "google";

export function CheckoutView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requested = searchParams.get("service");
  const initialProduct =
    requested && isProductId(requested) ? requested : defaultProductId;

  const [productId, setProductId] = useState<ProductId>(initialProduct);
  const [amount, setAmount] = useState(
    () => getProduct(initialProduct)?.preferredAmount ?? 1000,
  );
  const [status, setStatus] = useState("");
  const product = useMemo(() => getProduct(productId), [productId]);

  useEffect(() => {
    if (!product) return;
    setAmount(product.preferredAmount);
  }, [product]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity() || !product) {
      setStatus("Please complete the required fields.");
      return;
    }

    const data = new FormData(form);
    saveCheckoutRequest({
      id: createCheckoutId(),
      productId: product.id,
      productLabel: product.label,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      company: String(data.get("company") ?? ""),
      contactType:
        data.get("contact-type") === "WhatsApp" ? "WhatsApp" : "Telegram",
      contactDetails: String(data.get("contact-details") ?? ""),
      amount,
      amountLabel: formatAmount(amount),
      message: String(data.get("message") ?? ""),
      createdAt: new Date().toISOString(),
    });

    router.push("/checkout/success");
  }

  return (
    <div className="ag-checkout-page">
      <div className="checkout-shell">
        <h1 className="ag-checkout-title">Checkout</h1>
        <p className="ag-checkout-lead">
          Choose the service and a preferred amount. We will review the request
          and follow up with next steps.
        </p>

        <form className="ag-checkout-grid" onSubmit={onSubmit} noValidate>
          <div className="ag-checkout-card">
            <h2>Your details</h2>
            <fieldset className="ag-checkout-services">
              <legend className="sr-only">Service</legend>
              {products.map((item) => (
                <label className="ag-checkout-service" key={item.id}>
                  <input
                    type="radio"
                    name="service"
                    value={item.id}
                    checked={productId === item.id}
                    onChange={() => setProductId(item.id)}
                  />
                  <span className="ag-checkout-service-copy">
                    <span>{item.label}</span>
                    <em>Preferred {formatAmount(item.preferredAmount)}</em>
                  </span>
                </label>
              ))}
            </fieldset>

            <fieldset className="ag-checkout-amounts">
              <legend>Preferred amount</legend>
              <div className="ag-checkout-amount-row">
                {product?.amountOptions.map((value) => (
                  <label
                    key={value}
                    className={
                      amount === value
                        ? "ag-checkout-amount is-selected"
                        : "ag-checkout-amount"
                    }
                  >
                    <input
                      type="radio"
                      name="amount"
                      value={value}
                      checked={amount === value}
                      onChange={() => setAmount(value)}
                    />
                    {formatAmount(value)}
                    {value === product.preferredAmount ? (
                      <span className="ag-checkout-amount-tag">Preferred</span>
                    ) : null}
                  </label>
                ))}
              </div>
            </fieldset>

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
                <dd>{product?.label ?? "Select a service"}</dd>
              </div>
              <div>
                <dt>Preferred amount</dt>
                <dd>{formatAmount(amount)}</dd>
              </div>
            </dl>
            <div className="ag-checkout-actions">
              <CheckoutButton type="submit">Place request</CheckoutButton>
              {status ? <p className="ag-checkout-status">{status}</p> : null}
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}
