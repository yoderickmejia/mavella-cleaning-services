import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { sendLead } from "@/lib/mailer";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { company: _company, ...data } = parsed.data;
  const result = await sendLead("contact", data);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
