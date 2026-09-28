import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email } = await request.json();

    console.log("🔍 Newsletter subscription attempt for:", email);
    console.log("📧 GMAIL_USER:", process.env.GMAIL_USER);
    console.log("🔐 GMAIL_PASSWORD exists:", !!process.env.GMAIL_PASSWORD);

    // Validate email
    if (!email || !email.includes("@")) {
      return Response.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Configure Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Test the transporter connection
    console.log("🧪 Testing Gmail connection...");
    await transporter.verify();
    console.log("✅ Gmail connection verified");

    // Email template for subscriber
    const subscriberEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0a0d1e 0%, #1a1f3a 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: #FF9A28; margin: 0; font-size: 28px;">Welcome to Advance Edge</h1>
        </div>
        
        <div style="background: #f5f5f5; padding: 40px 20px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #0a0d1e; margin-top: 0;">Thank You for Subscribing!</h2>
          
          <p style="color: #333; line-height: 1.6; font-size: 16px;">
            We're excited to have you on board. You'll now receive the latest news, insights, and updates about our legal tech solutions directly in your inbox.
          </p>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #FF9A28; margin: 20px 0;">
            <p style="color: #333; margin: 0;">
              <strong>What to expect:</strong><br/>
              • Industry insights and trends<br/>
              • Product updates and features<br/>
              • Exclusive resources and guides<br/>
              • Special offers and announcements
            </p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-bottom: 30px;">
            If you have any questions or need assistance, feel free to reach out to us at any time.
          </p>
          
          <a href="https://advanceedgellc.com" style="display: inline-block; background: #FF9A28; color: #0a0d1e; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Visit Our Website
          </a>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            © 2025 Advance Edge LLC. All rights reserved.
          </p>
        </div>
      </div>
    `;

    // Admin notification email
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif;">
        <h2 style="color: #0a0d1e;">New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
        <p style="color: #666; font-size: 14px; margin-top: 20px;">
          This is an automated notification from your website.
        </p>
      </div>
    `;

    // Send confirmation email to subscriber
    console.log("📤 Sending welcome email to:", email);
    await transporter.sendMail({
      from: `"Advance Edge" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Welcome to Advance Edge Newsletter",
      html: subscriberEmailHtml,
    });
    console.log("✅ Welcome email sent");

    // Send notification to admin
    console.log("📤 Sending admin notification...");
    await transporter.sendMail({
      from: `"Advance Edge" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Newsletter Subscription - ${email}`,
      html: adminEmailHtml,
    });
    console.log("✅ Admin notification sent");

    return Response.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Newsletter subscription error:", error);
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      code: error.code,
    });

    return Response.json(
      { 
        message: "Failed to process subscription. Please try again later.",
        error: error.message 
      },
      { status: 500 }
    );
  }
}
