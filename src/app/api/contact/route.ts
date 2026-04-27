import { NextResponse } from "next/server";

// Stub. Wire to Resend / Postmark / SendGrid before going live.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!email || typeof email !== "string" || !message || typeof message !== "string") {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    console.log("[contact]", { name, email, length: message.length });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
