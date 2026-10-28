import nodemailer from "nodemailer";
import { site } from "./site";

type LeadKind = "quote" | "contact" | "newsletter";

export type LeadResult = { ok: true; delivered: "email" | "log" } | { ok: false; error: string };

/**
 * Sends a lead notification via SMTP (Google Workspace / Gmail) when SMTP_USER
 * and SMTP_PASS are configured. Otherwise it falls back to "log mode": the
 * submission is logged server-side and treated as a success so the site is
 * fully functional before SMTP is connected.
 *
 * Env vars (see .env.example):
 *   SMTP_USER   — the Workspace mailbox that sends, e.g. "info@mavellacleaning.com"
 *   SMTP_PASS   — a Google "App Password" (16 chars) for that mailbox
 *   SMTP_HOST   — SMTP server (defaults to smtp.gmail.com)
 *   SMTP_PORT   — SMTP port (defaults to 465, SSL)
 *   EMAIL_FROM  — display sender (defaults to SMTP_USER). Must be that address/alias.
 *   EMAIL_TO    — destination inbox for leads (defaults to the business email)
 */
export async function sendLead(
  kind: LeadKind,
  data: Record<string, string | undefined>,
): Promise<LeadResult> {
  const subjectMap: Record<LeadKind, string> = {
    quote: "New quote request — Mavella Cleaning Services",
    contact: "New contact message — Mavella Cleaning Services",
    newsletter: "New newsletter signup — Mavella Cleaning Services",
  };
  const subject = subjectMap[kind];

  const entries = Object.entries(data).filter(([, v]) => v && String(v).trim().length > 0);
  const text = `${subject}\n\n${entries.map(([k, v]) => `${labelize(k)}: ${v}`).join("\n")}\n`;
  const html =
    `<h2 style="font-family:system-ui,sans-serif;color:#1f2937">${escapeHtml(subject)}</h2>` +
    `<table style="font-family:system-ui,sans-serif;border-collapse:collapse">` +
    entries
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 14px;color:#6b7280;font-size:13px">${labelize(k)}</td>` +
          `<td style="padding:6px 14px;color:#111827;font-size:14px;font-weight:600">${escapeHtml(
            String(v),
          )}</td></tr>`,
      )
      .join("") +
    `</table>`;

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.EMAIL_TO || site.contact.email;
  const from = process.env.EMAIL_FROM || user || site.contact.email;

  if (!user || !pass) {
    // Log mode — no SMTP configured yet.
    console.info(`[lead:${kind}] log-mode — no SMTP_USER/SMTP_PASS set\n  → To: ${to}\n${text}`);
    return { ok: true, delivered: "log" };
  }

  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;

  try {
    const transport = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
      auth: { user, pass },
    });

    await transport.sendMail({ from, to, replyTo: data.email, subject, text, html });
    return { ok: true, delivered: "email" };
  } catch (err) {
    console.error("[mailer] SMTP exception", err);
    return { ok: false, error: "delivery_failed" };
  }
}

function labelize(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
