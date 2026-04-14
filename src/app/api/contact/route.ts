import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type ContactRequest = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (process.env.NODE_ENV === "development") {
      // TODO: remove after verifying env loads locally
      console.log("ENV CHECK:", {
        hasKey: Boolean(resendApiKey),
        hasTo: Boolean(contactToEmail),
        hasFrom: Boolean(contactFromEmail),
      });
    }

    const body = (await request.json()) as ContactRequest;

    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
    }

    const payload = {
      name: normalize(body.name),
      company: normalize(body.company),
      email: normalize(body.email),
      phone: normalize(body.phone),
      projectType: normalize(body.projectType),
      message: normalize(body.message),
    };

    if (!payload.name || !payload.company || !payload.email || !payload.projectType || !payload.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required contact fields." },
        { status: 400 }
      );
    }

    if (!resendApiKey || !contactFromEmail || !contactToEmail) {
      console.error("Missing email environment configuration for contact form delivery.");
      return NextResponse.json(
        { ok: false, error: "Email delivery is not configured." },
        { status: 500 }
      );
    }

    const lines = [
      `Name: ${payload.name}`,
      `Company: ${payload.company}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Project Type: ${payload.projectType}`,
      "",
      "Message:",
      payload.message,
    ];

    const html = `
      <div style="font-family: Arial, sans-serif; color: #1c1917; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">New quote request from ${escapeHtml(site.name)}</h2>
        <p style="margin: 0 0 20px;">A contact request was submitted on the website.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
          <tbody>
            <tr><td style="padding: 8px 12px; border: 1px solid #e4e4e7; font-weight: 600;">Name</td><td style="padding: 8px 12px; border: 1px solid #e4e4e7;">${escapeHtml(payload.name)}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #e4e4e7; font-weight: 600;">Company</td><td style="padding: 8px 12px; border: 1px solid #e4e4e7;">${escapeHtml(payload.company)}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #e4e4e7; font-weight: 600;">Email</td><td style="padding: 8px 12px; border: 1px solid #e4e4e7;">${escapeHtml(payload.email)}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #e4e4e7; font-weight: 600;">Phone</td><td style="padding: 8px 12px; border: 1px solid #e4e4e7;">${escapeHtml(payload.phone || "Not provided")}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #e4e4e7; font-weight: 600;">Project Type</td><td style="padding: 8px 12px; border: 1px solid #e4e4e7;">${escapeHtml(payload.projectType)}</td></tr>
            <tr><td style="padding: 8px 12px; border: 1px solid #e4e4e7; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 8px 12px; border: 1px solid #e4e4e7; white-space: pre-wrap;">${escapeHtml(payload.message)}</td></tr>
          </tbody>
        </table>
      </div>
    `;

    if (process.env.NODE_ENV === "development") {
      // Temporary sender audit log for local verification.
      console.log("RESEND SEND CONFIG:", {
        to: contactToEmail,
        from: contactFromEmail,
      });
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactFromEmail,
        to: [contactToEmail],
        reply_to: payload.email,
        subject: `Quote request from ${payload.company}`,
        text: lines.join("\n"),
        html,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("Resend contact email failed:", resendError);
      return NextResponse.json(
        { ok: false, error: "Failed to send email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
