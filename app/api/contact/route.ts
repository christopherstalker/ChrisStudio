import { NextResponse } from "next/server";

import {
  isContactConfigError,
  sendContactEmail,
} from "@/lib/contact-email";
import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please review the highlighted fields and try again.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const inquiryId = `CS-${new Date().getFullYear()}-${crypto
      .randomUUID()
      .slice(0, 8)
      .toUpperCase()}`;
    const submittedAt = new Date();

    await sendContactEmail({
      inquiryId,
      data: parsed.data,
      submittedAt,
    });

    return NextResponse.json({
      ok: true,
      inquiryId,
      message:
        "Thanks for the brief. I will review it and reply with next steps within one business day.",
    });
  } catch (error) {
    if (isContactConfigError(error)) {
      console.error("Contact form email configuration is missing.", error);

      return NextResponse.json(
        {
          ok: false,
          message:
            "Contact form email delivery is not configured yet. Please set RESEND_API_KEY and CONTACT_FROM_EMAIL.",
        },
        { status: 503 },
      );
    }

    console.error("Contact form submission failed.", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "We couldn't send your inquiry right now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
