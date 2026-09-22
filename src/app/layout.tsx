import type { Metadata } from "next";
import { Assistant, Inter, Outfit } from "next/font/google";
import { GsapProvider } from "@/components/animations/GsapProvider";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/config/site";
import "./globals.css";
import "@/styles/home.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-assistant",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: site.titleTemplate,
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.contact.email,
  logo: `${site.url}/assets/logos/agent-mart-logo.svg`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${assistant.variable} h-full`}
    >
      <body className={`${outfit.className} flex min-h-full flex-col bg-background text-foreground`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <GsapProvider />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
