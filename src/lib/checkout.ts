import { getProduct, type ProductId } from "@/config/products";

export const CHECKOUT_STORAGE_KEY = "agrowth-checkout-request";

export type CheckoutRequest = {
  id: string;
  productId: ProductId;
  productLabel: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  contactType: "Telegram" | "WhatsApp";
  contactDetails: string;
  amount: number;
  amountLabel: string;
  message: string;
  createdAt: string;
};

export function createCheckoutId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `ag-${Date.now()}`;
}

export function saveCheckoutRequest(request: CheckoutRequest) {
  window.localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(request));
}

export function readCheckoutRequest(): CheckoutRequest | null {
  const raw = window.localStorage.getItem(CHECKOUT_STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as CheckoutRequest;
    if (!getProduct(parsed.productId)) return null;
    return parsed;
  } catch {
    return null;
  }
}
