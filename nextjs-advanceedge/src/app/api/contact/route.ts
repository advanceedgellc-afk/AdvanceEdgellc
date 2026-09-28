import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { message: "Invalid email address." },
        { status: 400 }
      );
    }

    // Configure Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // App Password
      },
    });

    // 1) Email to ADMIN (you)
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0a0d1e;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
        <p style="color:#666; font-size: 13px; margin-top: 24px;">
          This email was generated from the Advance Edge website contact form.
        </p>
      </div>
    `;

    // 2) Welcome email to USER
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0a0d1e 0%, #1a1f3a 100%); padding: 32px 24px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: #FF9A28; margin: 0; font-size: 26px;">Thank You for Reaching Out</h1>
        </div>

        <div style="background: #f5f5f5; padding: 32px 24px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #0a0d1e; margin-top: 0; font-size: 20px;">Hi ${name || "there"},</h2>
          <p style="color: #333; line-height: 1.6; font-size: 15px;">
            We’ve received your message and a member of the Advance Edge team will review it shortly.
            You can expect a response within one business day.
          </p>

          <div style="background: #ffffff; padding: 16px 18px; border-left: 4px solid #FF9A28; margin: 20px 0; font-size: 14px; color: #333;">
            <p style="margin: 0 0 8px 0;"><strong>Your message:</strong></p>
            <p style="margin: 0; white-space: pre-line;">${message}</p>
          </div>

          <p style="color: #666; font-size: 13px; margin-bottom: 24px;">
            If you need to add anything else, you can simply reply to this email.
          </p>

          <a href="https://advanceedgellc.com" style="display: inline-block; background: #FF9A28; color: #0a0d1e; padding: 10px 26px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">
            Visit Our Website
          </a>

          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            © ${new Date().getFullYear()} Advance Edge LLC. All rights reserved.
          </p>
        </div>
      </div>
    `;

    // Send admin email
    await transporter.sendMail({
      from: `"Advance Edge Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // your inbox
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: adminHtml,
    });

    // Send welcome email to user
    await transporter.sendMail({
      from: `"Advance Edge" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We’ve received your message",
      html: userHtml,
    });

    return Response.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
