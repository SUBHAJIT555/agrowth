export const products = [
  {
    id: "google",
    label: "Rent Google Agency Ads Account",
    href: "/pages/rent-google-agency-ads-account",
    kicker: "Google Ads",
  },
  {
    id: "meta",
    label: "Rent Facebook Agency Ads Account",
    href: "/pages/rent-meta-agency-ads-account",
    kicker: "Meta Ads",
  },
  {
    id: "tiktok",
    label: "Rent TikTok Agency Ads Account",
    href: "/pages/rent-tiktok-agency-ads-account",
    kicker: "TikTok Ads",
  },
  {
    id: "platform",
    label: "Agent Mart Platform",
    href: "/pages/agrowth-platform",
    kicker: "Platform",
  },
] as const;

export const billingPlans = [
  { id: "hourly", label: "Hourly", amount: 2500 },
  { id: "daily", label: "One day", amount: 8000 },
  { id: "amt-500", label: "₹500", amount: 500 },
  { id: "amt-1000", label: "₹1,000", amount: 1000 },
  { id: "amt-2000", label: "₹2,000", amount: 2000 },
  { id: "amt-5000", label: "₹5,000", amount: 5000 },
  { id: "custom", label: "Custom", amount: null },
] as const;

export type ProductId = (typeof products)[number]["id"];
export type BillingPlanId = (typeof billingPlans)[number]["id"];

export const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatAmount(value: number) {
  return inrFormatter.format(value);
}

export function getBillingPlan(id: string | null | undefined) {
  return billingPlans.find((plan) => plan.id === id) ?? null;
}

export function getProduct(id: string | null | undefined) {
  return products.find((product) => product.id === id) ?? null;
}

export function isProductId(value: string): value is ProductId {
  return products.some((product) => product.id === value);
}

export function checkoutPath(id: ProductId) {
  return `/checkout?service=${id}`;
}
