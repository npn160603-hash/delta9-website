export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
  locale?: unknown;
};

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeNameForSubject(value: string) {
  return value.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = readText(payload.name);
  const email = readText(payload.email).toLowerCase();
  const message = readText(payload.message);
  const website = readText(payload.website);
  const locale = payload.locale === "vi" ? "vi" : "en";

  // Bots commonly fill this hidden field. Return success without sending mail.
  if (website) {
    return Response.json({ ok: true });
  }

  if (
    name.length < 2 ||
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(email) ||
    message.length < 10 ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return Response.json({ error: "Invalid form data" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender =
    process.env.CONTACT_FROM_EMAIL ||
    "Delta9 Website <onboarding@resend.dev>";

  if (!apiKey || !recipient) {
    console.error(
      "Contact form is missing RESEND_API_KEY or CONTACT_TO_EMAIL.",
    );
    return Response.json(
      { error: "Email service is not configured" },
      { status: 500 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const submittedAt = new Date().toISOString();

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `[Delta9 Website] New contact from ${normalizeNameForSubject(name)}`,
        html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h1 style="font-size: 22px; margin-bottom: 20px;">New website contact request</h1>
          <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 10px; font-weight: 700; width: 140px;">Name</td>
              <td style="border: 1px solid #cbd5e1; padding: 10px;">${safeName}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 10px; font-weight: 700;">Email</td>
              <td style="border: 1px solid #cbd5e1; padding: 10px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 10px; font-weight: 700;">Language</td>
              <td style="border: 1px solid #cbd5e1; padding: 10px;">${locale === "vi" ? "Vietnamese" : "English"}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 10px; font-weight: 700;">Submitted</td>
              <td style="border: 1px solid #cbd5e1; padding: 10px;">${submittedAt}</td>
            </tr>
          </table>
          <h2 style="font-size: 18px; margin: 24px 0 8px;">Message</h2>
          <div style="background: #f1f5f9; border-radius: 8px; padding: 16px; max-width: 648px;">${safeMessage}</div>
          <p style="color: #64748b; font-size: 13px; margin-top: 20px;">Reply directly to this email to respond to the visitor.</p>
        </div>
      `,
        text: [
          "New website contact request",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Language: ${locale === "vi" ? "Vietnamese" : "English"}`,
          `Submitted: ${submittedAt}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      console.error("Resend contact email failed:", response.status, error);
      return Response.json({ error: "Email delivery failed" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact email request failed:", error);
    return Response.json({ error: "Email delivery failed" }, { status: 502 });
  }
}
