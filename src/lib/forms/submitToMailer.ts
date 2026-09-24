export type MailerFormType = "contact" | "newsletter" | "quote" | "partnership";

export async function submitToMailer(
  payload: Record<string, unknown> & { formType: MailerFormType },
): Promise<{ success: boolean; message?: string; error?: string }> {
  const res = await fetch("/api/submit.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const raw = await res.text();
  let data: { success?: boolean; message?: string; error?: string } = {};
  try {
    data = raw ? (JSON.parse(raw) as typeof data) : {};
  } catch {
    throw new Error(
      "Mail server is not running. In another terminal run: yarn php:api",
    );
  }
  if (!res.ok || !data.success) {
    throw new Error(data.message ?? data.error ?? "Unable to send message.");
  }
  return { success: true, message: data.message };
}

export function payloadFromForm(
  form: HTMLFormElement,
  formType: MailerFormType,
): Record<string, unknown> & { formType: MailerFormType } {
  const data = new FormData(form);
  const services = [
    ...data.getAll("service"),
    ...data.getAll("service[]"),
  ]
    .map((item) => String(item).trim())
    .filter(Boolean);

  const name = String(data.get("your-name") || data.get("name") || data.get("fullName") || "");

  return {
    formType,
    name,
    fullName: String(data.get("fullName") || name),
    email: String(data.get("email") || ""),
    phone: String(data.get("phone") || ""),
    company: String(data.get("company") || ""),
    companyName: String(data.get("companyName") || data.get("company") || ""),
    website: String(data.get("website") || ""),
    subject: String(data.get("subject") || ""),
    message: String(data.get("message") || ""),
    contactType: String(data.get("contact-type") || ""),
    contactDetails: String(data.get("contact-details") || ""),
    services,
  };
}
