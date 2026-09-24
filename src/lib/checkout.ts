import {
  getBillingPlan,
  getProduct,
  type BillingPlanId,
  type ProductId,
} from "@/config/products";

export const CHECKOUT_STORAGE_KEY = "agrowth-checkout-request";
export const CHECKOUT_CART_KEY = "agrowth-checkout-cart";
export const PENDING_ORDER_KEY = "ama_pending_order_id";

export const paymentMethods = [
  {
    id: "online-banking",
    label: "Online banking",
    hint: "Coming soon. mPurse hosted checkout is not active on this merchant.",
    enabled: false,
  },
  {
    id: "card",
    label: "Card",
    hint: "Coming soon. mPurse hosted checkout is not active on this merchant.",
    enabled: false,
  },
  {
    id: "upi",
    label: "UPI",
    hint: "Phone: open UPI app. Computer: scan QR with your phone.",
    enabled: true,
  },
] as const;

export type PaymentMethodId = (typeof paymentMethods)[number]["id"];

export type CheckoutCartItem = {
  name: string;
  quantity: number;
  price: number;
  productId: ProductId;
  billingPlanId: BillingPlanId;
};

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
  address: string;
  city: string;
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
  orderId?: string;
};

export function createCheckoutId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `ag-${Date.now()}`;
}

export function saveCheckoutRequest(request: CheckoutRequest) {
  window.localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(request));
  saveCheckoutCart([
    {
      name: request.productLabel,
      quantity: 1,
      price: request.amount,
      productId: request.productId,
      billingPlanId: request.billingPlanId,
    },
  ]);
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

export function saveCheckoutCart(items: CheckoutCartItem[]) {
  window.localStorage.setItem(CHECKOUT_CART_KEY, JSON.stringify(items));
}

export function readCheckoutCart(): CheckoutCartItem[] {
  const raw = window.localStorage.getItem(CHECKOUT_CART_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as CheckoutCartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function clearCheckoutCart() {
  window.localStorage.removeItem(CHECKOUT_CART_KEY);
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
  extras?: Partial<CheckoutRequest>,
) {
  const method = getPaymentMethod(methodId);
  if (!method?.enabled) return request;

  const next: CheckoutRequest = {
    ...request,
    paymentMethodId: method.id,
    paymentMethodLabel: method.label,
    ...extras,
  };
  saveCheckoutRequest(next);
  return next;
}

export function markCheckoutPaid(request: CheckoutRequest, orderId?: string) {
  const next: CheckoutRequest = {
    ...request,
    paidAt: new Date().toISOString(),
    orderId: orderId || request.orderId,
  };
  saveCheckoutRequest(next);
  clearCheckoutCart();
  window.sessionStorage.removeItem(PENDING_ORDER_KEY);
  return next;
}

export function preferredUpiMode() {
  if (typeof navigator === "undefined") return "QR";
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
    ? "INTENT"
    : "QR";
}

export function splitName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" ") || "Customer",
  };
}

export type MpurseCreateResult = {
  success?: boolean;
  error?: string;
  order_id?: string;
  flow?: string;
  pay_url?: string;
  checkout_url?: string;
  amount?: string;
  qr_data?: string;
  intent_url?: string;
};

export async function startMpursePayment(request: CheckoutRequest) {
  const names = splitName(request.name);
  const res = await fetch("/api/mpurse.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "create_session",
      payment_method: "upi",
      upi_mode: preferredUpiMode(),
      name: request.name,
      billing_first_name: names.firstName,
      billing_last_name: names.lastName,
      billing_email: request.email,
      billing_phone: request.phone,
      billing_address: request.address || request.company,
      billing_town: request.city,
      notes: request.message,
      cart_items: [
        {
          name: request.productLabel,
          quantity: 1,
          price: request.amount,
        },
      ],
    }),
  });

  const raw = await res.text();
  let result: MpurseCreateResult = {};
  try {
    result = raw ? (JSON.parse(raw) as MpurseCreateResult) : {};
  } catch {
    throw new Error(
      "Payment PHP is not running. Keep yarn dev open and in another terminal run: yarn php:api",
    );
  }

  if (!res.ok || !result.order_id) {
    throw new Error(result.error || "Failed to start payment");
  }

  if (result.flow === "hosted") {
    throw new Error("Card and net banking are not available yet. Please pay with UPI.");
  }

  window.sessionStorage.setItem(PENDING_ORDER_KEY, result.order_id);
  saveCheckoutPayment(request, "upi", { orderId: result.order_id });
  return result;
}
