// Website lead form -> GoHighLevel (free API route, no premium webhook trigger).
// Creates or updates the contact, tags it "website-lead" (start your GHL
// workflow with the free "Contact Tag" trigger), and adds a note with the
// message, SMS consent and where the lead came from.

const GHL_BASE = "https://services.leadconnectorhq.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot: bots fill this hidden field. Pretend success, send nothing.
    if (body.website) return Response.json({ success: true });

    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const smsConsent = body.smsConsent === true;
    const company = String(body.company ?? "").trim().slice(0, 120);
    const service = String(body.service ?? "").trim().slice(0, 80);

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

    const token = process.env.GHL_API_TOKEN;
    const locationId = process.env.GHL_LOCATION_ID;
    if (!token || !locationId) {
      console.error("GHL_API_TOKEN or GHL_LOCATION_ID is not set");
      return Response.json({ success: false }, { status: 500 });
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      Version: "2021-07-28",
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const [firstName, ...rest] = name.split(/\s+/);
    const tags = ["website-lead"];
    if (smsConsent) tags.push("sms-consent");

    // 1) Create or update the contact (GHL matches on email/phone, so a
    //    returning lead updates their existing contact instead of duplicating it).
    //    Tags are NOT sent here: upsert would replace all of the contact's tags.
    const contactRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers,
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        locationId,
        firstName,
        lastName: rest.join(" "),
        name,
        email,
        phone,
        ...(company ? { companyName: company } : {}),
        source: "Website - Contact Form",
      }),
    });

    const contactData = await contactRes.json().catch(() => ({}));
    if (!contactRes.ok) {
      console.error("GHL contact error:", contactRes.status, contactData);
      return Response.json({ success: false }, { status: 502 });
    }

    // 2) Add the message and lead details as a note (a failure here doesn't lose the lead)
    const contactId = contactData?.contact?.id;
    if (contactId) {
      const lines = [
        `Interested in: ${service || "(not selected)"}`,
        ...(company ? [`Firm: ${company}`] : []),
        "",
        message ? `Message:\n${message}` : "Message: (none)",
        "",
        `SMS consent: ${smsConsent ? "Yes" : "No"}`,
        `Page: ${body.pageUrl ?? ""}`,
      ];
      const utm = ["utm_source", "utm_medium", "utm_campaign"]
        .filter((k) => body[k])
        .map((k) => `${k}: ${body[k]}`);
      if (utm.length) lines.push(...utm);

      const noteRes = await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers,
        signal: AbortSignal.timeout(8000),
        body: JSON.stringify({ body: lines.join("\n") }),
      });
      if (!noteRes.ok) console.error("GHL note error:", noteRes.status, await noteRes.text());
    }

    // 3) Tag the contact. This starts the "Contact Tag added: website-lead"
    //    workflow. A returning contact already has the tag, so remove it first;
    //    otherwise GHL sees no new tag and the workflow would not run again.
    if (contactId) {
      const tagUrl = `${GHL_BASE}/contacts/${contactId}/tags`;
      if (contactData?.new === false) {
        await fetch(tagUrl, {
          method: "DELETE",
          headers,
          signal: AbortSignal.timeout(8000),
          body: JSON.stringify({ tags: ["website-lead"] }),
        }).catch((e) => console.error("GHL tag remove error:", e));
      }
      const tagRes = await fetch(tagUrl, {
        method: "POST",
        headers,
        signal: AbortSignal.timeout(8000),
        body: JSON.stringify({ tags }),
      });
      if (!tagRes.ok) console.error("GHL tag error:", tagRes.status, await tagRes.text());
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Lead form error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}