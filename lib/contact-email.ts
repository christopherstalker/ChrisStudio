import nodemailer from "nodemailer";

import type { ContactFormValues } from "@/lib/contact-schema";

export async function sendContactEmail(inquiryId: string, data: ContactFormValues) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL_TO ?? process.env.SMTP_USER;

  if (!host || !port || !user || !pass || !to) {
    console.info("Email env vars are not fully configured; skipping outbound email send.", { inquiryId });
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: process.env.CONTACT_EMAIL_FROM ?? user,
    to,
    replyTo: data.email,
    subject: `New inquiry ${inquiryId} from ${data.name}`,
    text: [
      `Inquiry ID: ${inquiryId}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "N/A"}`,
      `Budget: ${data.budget || "N/A"}`,
      "",
      data.description,
    ].join("\n"),
  });
}
