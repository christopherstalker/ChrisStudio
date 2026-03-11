import type { ContactFormValues } from "@/lib/contact-schema";

const CONTACT_RECIPIENT = "christopherstalker1@outlook.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const REQUEST_TIMEOUT_MS = 10_000;

export type SendContactEmailArgs = {
  inquiryId: string;
  data: ContactFormValues;
  submittedAt: Date;
};

type ContactEmailConfig = {
  resendApiKey: string;
  from: string;
  to: string;
};

function getContactEmailConfig(): ContactEmailConfig {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT_RECIPIENT;

  if (!resendApiKey || !from) {
    throw new Error(
      "Missing required email configuration. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.",
    );
  }

  return {
    resendApiKey,
    from,
    to,
  };
}

export function isContactConfigError(error: unknown) {
  return error instanceof Error && error.message.startsWith("Missing required email configuration");
}

export async function sendContactEmail({
  inquiryId,
  data,
  submittedAt,
}: SendContactEmailArgs) {
  const { resendApiKey, from, to } = getContactEmailConfig();

  const text = [
    `Inquiry ID: ${inquiryId}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "N/A"}`,
    `Project Budget: ${data.budget}`,
    `Submission timestamp: ${submittedAt.toISOString()}`,
    "",
    "Project Description:",
    data.description,
  ].join("\n");

  const html = `
    <h2>New project inquiry</h2>
    <p><strong>Inquiry ID:</strong> ${inquiryId}</p>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company || "N/A")}</p>
    <p><strong>Project Budget:</strong> ${escapeHtml(data.budget)}</p>
    <p><strong>Submission timestamp:</strong> ${submittedAt.toISOString()}</p>
    <p><strong>Project Description:</strong></p>
    <p>${escapeHtml(data.description).replace(/\n/g, "<br />")}</p>
  `;

  const timeoutController = new AbortController();
  const timeout = setTimeout(() => {
    timeoutController.abort();
  }, REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `New project inquiry from ${data.name}`,
        text,
        html,
      }),
      signal: timeoutController.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Resend request failed (${response.status}): ${errorBody}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
