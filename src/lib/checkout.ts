import {
  getBillingPlan,
  getProduct,
  type BillingPlanId,
  type ProductId,
} from "@/config/products";

export const CHECKOUT_STORAGE_KEY = "agrowth-checkout-request";

export const paymentMethods = [
  {
    id: "online-banking",
    label: "Online banking",
    hint: "Net banking is not available yet.",
    enabled: false,
  },
  {
    id: "card",
    label: "Card",
    hint: "Card payments are not available yet.",
    enabled: false,
  },
  {
    id: "upi",
    label: "UPI",
    hint: "Pay instantly with any UPI app.",
    enabled: true,
  },
] as const;

export type PaymentMethodId = (typeof paymentMethods)[number]["id"];

export type CheckoutRequest = {
  id: string;
  productId: ProductId;
  productLabel: string;
  billingPlanId: BillingPlanId;
  billingPlanLabel: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  contactType: "Telegram" | "WhatsApp";
  contactDetails: string;
  amount: number;
  amountLabel: string;
  currency: "INR";
  message: string;
  createdAt: string;
  paymentMethodId?: PaymentMethodId;
  paymentMethodLabel?: string;
  paidAt?: string;
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
    if (!getBillingPlan(parsed.billingPlanId)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function getPaymentMethod(id: string | null | undefined) {
  return paymentMethods.find((method) => method.id === id) ?? null;
}

export function isEnabledPaymentMethod(
  id: string | null | undefined,
): id is PaymentMethodId {
  return paymentMethods.some((method) => method.id === id && method.enabled);
}

export function saveCheckoutPayment(
  request: CheckoutRequest,
  methodId: PaymentMethodId,
) {
  const method = getPaymentMethod(methodId);
  if (!method?.enabled) return request;

  const next: CheckoutRequest = {
    ...request,
    paymentMethodId: method.id,
    paymentMethodLabel: method.label,
    paidAt: new Date().toISOString(),
  };
  saveCheckoutRequest(next);
  return next;
}
