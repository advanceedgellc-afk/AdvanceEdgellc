export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot: bots fill this hidden field. Pretend success, send nothing.
    if (body.website) return Response.json({ success: true });

    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !phone || !email) {
      return Response.json(
        { success: false, message: "Name, phone and email are required." },
        { status: 400 }
      );
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }
    if (name.length > 100 || message.length > 2000) {
      return Response.json(
        { success: false, message: "Input too long." },
        { status: 400 }
      );
    }

    const [firstName, ...rest] = name.split(/\s+/);

    const res = await fetch(process.env.GHL_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        first_name: firstName,
        last_name: rest.join(" "),
        full_name: name,
        email,
        phone,
        message,
        source: "Website - Contact Form",
        page_url: body.pageUrl ?? "",
        utm_source: body.utm_source ?? "",
        utm_medium: body.utm_medium ?? "",
        utm_campaign: body.utm_campaign ?? "",
      }),
    });

    if (!res.ok) {
      console.error("GHL webhook error:", res.status, await res.text());
      return Response.json({ success: false }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Lead form error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}