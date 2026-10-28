import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schemas";
import { sendLead } from "@/lib/mailer";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const result = await sendLead("newsletter", { email: parsed.data.email });
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
