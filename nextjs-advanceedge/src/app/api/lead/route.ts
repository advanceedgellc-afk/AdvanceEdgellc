import { NextResponse } from "next/server";

const GHL_BASE = "https://services.leadconnectorhq.com";

export async function POST(req: Request) {
  console.log("GHL check:", {
    locationId: process.env.GHL_LOCATION_ID,
    length: process.env.GHL_LOCATION_ID?.length,
    tokenStart: process.env.GHL_API_TOKEN?.slice(0, 4),
    tokenLength: process.env.GHL_API_TOKEN?.length,
  });


  try {
    const body = await req.json();
    const { fullName, phoneNumber, emailAddress, legalCategory, caseDescription, website } = body;

    // Honeypot: bots fill this hidden field, humans don't
    if (website) return NextResponse.json({ ok: true });

    if (!fullName || !phoneNumber || !emailAddress || !legalCategory) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const [firstName, ...rest] = String(fullName).trim().split(" ");
    const lastName = rest.join(" ");

    const headers = {
      Authorization: `Bearer ${process.env.GHL_API_TOKEN}`,
      Version: "2021-07-28",
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // 1) Create or update the contact
    const contactRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        locationId: process.env.GHL_LOCATION_ID,
        firstName,
        lastName,
        name: fullName,
        email: emailAddress,
        phone: phoneNumber,
        source: "Website Case Review Form",
        tags: ["website-lead", legalCategory],
      }),
    });

    const contactData = await contactRes.json();
    if (!contactRes.ok) {
      console.error("GHL contact error:", contactData);
      return NextResponse.json({ ok: false, error: "CRM error" }, { status: 502 });
    }

    // 2) Save the case description as a note on the contact
    const contactId = contactData?.contact?.id;
    if (contactId && caseDescription) {
      await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          body: `Legal Issue: ${legalCategory}\n\nCase description:\n${caseDescription}`,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}