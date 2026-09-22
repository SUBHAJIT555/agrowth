export const products = [
  {
    id: "google",
    label: "Rent Google Agency Ads Account",
    href: "/pages/rent-google-agency-ads-account",
    preferredAmount: 1000,
    amountOptions: [500, 1000, 2500, 5000],
  },
  {
    id: "meta",
    label: "Rent Facebook Agency Ads Account",
    href: "/pages/rent-meta-agency-ads-account",
    preferredAmount: 1000,
    amountOptions: [500, 1000, 2500, 5000],
  },
  {
    id: "tiktok",
    label: "Rent TikTok Agency Ads Account",
    href: "/pages/rent-tiktok-agency-ads-account",
    preferredAmount: 1000,
    amountOptions: [500, 1000, 2500, 5000],
  },
  {
    id: "platform",
    label: "AGrowth Platform",
    href: "/pages/agrowth-platform",
    preferredAmount: 200,
    amountOptions: [200, 500, 1000, 2500],
  },
] as const;

export function formatAmount(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export type ProductId = (typeof products)[number]["id"];

export function getProduct(id: string | null | undefined) {
  return products.find((product) => product.id === id) ?? null;
}

export function isProductId(value: string): value is ProductId {
  return products.some((product) => product.id === value);
}
