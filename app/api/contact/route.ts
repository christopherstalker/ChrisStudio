import { NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/contact-email";
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
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const inquiryId = `MRW-${new Date().getFullYear()}-${crypto
      .randomUUID()
      .slice(0, 8)
      .toUpperCase()}`;

    await sendContactEmail(inquiryId, parsed.data);

    return NextResponse.json({
      ok: true,
      inquiryId,
      message:
        "Thanks for the brief. I will review it and reply with next steps within one business day.",
    });
  } catch (error) {
    console.error("Contact form submission failed.", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong while submitting the form.",
      },
      { status: 500 },
    );
  }
}
