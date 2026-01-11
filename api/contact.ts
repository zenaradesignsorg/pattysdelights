/**
 * Serverless Function for Contact Form
 * 
 * This file is for deployment on serverless platforms:
 * 
 * Vercel: Place in /api/contact.ts (or use /api/contact/route.ts for App Router)
 * Netlify: Place in /netlify/functions/contact.ts
 * Cloudflare Workers: Adapt to Cloudflare Workers format
 * 
 * Make sure to set RESEND_API_KEY as an environment variable in your deployment platform.
 */

import { Resend } from "resend";

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      date,
      guestCount,
      services,
      budget,
      message,
    } = req.body;

    // Validate required fields
    if (!name || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing required fields: name, phone, and message are required" 
      });
    }

    // Format email content
    const emailContent = `
New Quote Request from Patty's Delights Website

Contact Information:
- Name: ${name}
- Email: ${email || "Not provided"}
- Phone: ${phone}

Event Details:
- Date: ${date || "Not specified"}
- Guest Count: ${guestCount || "Not specified"}
- Services: ${services || "Not specified"}
- Budget: ${budget || "Not specified"}

Message:
${message}

---
This email was sent from the contact form on Patty's Delights website.
    `.trim();

    // Send email via Resend
    const result = await resend.emails.send({
      from: "Patty's Delights <onboarding@resend.dev>", // TODO: Update with your verified domain
      to: ["Pattysdelightsinc@gmail.com"],
      replyTo: email || undefined,
      subject: `New Quote Request from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #FF6B6B; padding-bottom: 10px;">
            New Quote Request from Patty's Delights Website
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email || "Not provided"}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Event Details</h3>
            <p><strong>Date:</strong> ${date || "Not specified"}</p>
            <p><strong>Guest Count:</strong> ${guestCount || "Not specified"}</p>
            <p><strong>Services:</strong> ${services || "Not specified"}</p>
            <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          </div>
          
          <div style="background-color: #fff5f5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF6B6B;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This email was sent from the contact form on Patty's Delights website.
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return res.status(500).json({ 
        success: false, 
        error: result.error.message || "Failed to send email" 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: "Email sent successfully" 
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : "An unexpected error occurred" 
    });
  }
}
