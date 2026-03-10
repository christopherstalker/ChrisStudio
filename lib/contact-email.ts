import type { ContactFormValues } from "@/lib/contact-schema";

const CONTACT_RECIPIENT = "christopherstalker1@outlook.com";

type SendContactEmailArgs = {
  inquiryId: string;
  data: ContactFormValues;
  submittedAt: Date;
};

export async function sendContactEmail({
  inquiryId,
  data,
  submittedAt,
}: SendContactEmailArgs) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT_RECIPIENT;

  if (!resendApiKey || !from) {
    throw new Error("Missing RESEND_API_KEY or CONTACT_FROM_EMAIL environment variables.");
  }

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

  const response = await fetch("https://api.resend.com/emails", {
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
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend request failed (${response.status}): ${errorBody}`);
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
