import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";
import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function ContactUsRoute() {
  return <ContactPage />;
}
