import type { NavItem, NavLink } from "@/types/navigation";

export const headerNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/pages/services",
    aliases: [
      "/services",
      "/pages/rent-google-agency-ads-account",
      "/rent-google-agency-ads-account",
      "/pages/rent-meta-agency-ads-account",
      "/rent-meta-agency-ads-account",
      "/pages/rent-tiktok-agency-ads-account",
      "/rent-tiktok-agency-ads-account",
    ],
    children: [
      {
        label: "Rent Google Agency Ads Account",
        href: "/pages/rent-google-agency-ads-account",
      },
      {
        label: "Rent Facebook Agency Ads Account",
        href: "/pages/rent-meta-agency-ads-account",
      },
      {
        label: "Rent TikTok Agency Ads Account",
        href: "/pages/rent-tiktok-agency-ads-account",
      },
    ],
  },
  {
    label: "Platform",
    href: "/pages/agrowth-platform",
    aliases: ["/agrowth-platform"],
  },
  {
    label: "Case Study",
    href: "/case-study",
    aliases: ["/blogs/case-study"],
  },
  {
    label: "Partner",
    href: "/pages/stronger-together-agrowth",
    aliases: ["/stronger-together-agrowth"],
  },
];

export const headerCta: NavLink = {
  label: "Contact Us",
  href: "/pages/contact-us",
};

export const footerCompanyLinks: NavLink[] = [
  { label: "Contact Us", href: "/pages/contact-us" },
  { label: "Checkout", href: "/checkout" },
  { label: "Case Study", href: "/case-study" },
  { label: "Partner", href: "/pages/stronger-together-agrowth" },
  { label: "Agent Mart Platform", href: "/pages/agrowth-platform" },
  { label: "Privacy Policy", href: "/pages/privacy-policy" },
  { label: "Payment Methods", href: "/pages/payment-methods-policy" },
  { label: "Refund Policy", href: "/pages/refund-policy" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Services", href: "/pages/services" },
  {
    label: "Rent Google Agency Ads Account",
    href: "/pages/rent-google-agency-ads-account",
  },
  {
    label: "Rent Facebook Agency Ads Account",
    href: "/pages/rent-meta-agency-ads-account",
  },
  {
    label: "Rent TikTok Agency Ads Account",
    href: "/pages/rent-tiktok-agency-ads-account",
  },
];

export const footerNavigation = {
  company: footerCompanyLinks,
  services: footerServiceLinks,
} as const;

function matchesPath(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

export function isNavItemActive(pathname: string, item: NavItem) {
  if (matchesPath(pathname, item.href)) return true;
  if (item.aliases?.some((alias) => matchesPath(pathname, alias))) return true;
  if (item.children?.some((child) => matchesPath(pathname, child.href))) {
    return true;
  }
  return false;
}
