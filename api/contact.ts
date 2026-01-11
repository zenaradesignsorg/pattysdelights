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

// Import sanitization utilities
// Note: In a serverless environment, you may need to copy these functions inline
// or use a shared package. For now, we'll implement sanitization inline.
const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '/': '&#x2F;',
  };
  return String(text).replace(/[&<>"'/]/g, (char) => map[char] || char);
};

const sanitizeText = (text: string, maxLength?: number): string => {
  if (!text) return '';
  let sanitized = text.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '').trim();
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  return sanitized;
};

const validateAndSanitizeEmail = (email: string): string | null => {
  if (!email) return null;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const trimmed = email.trim();
  if (trimmed.length > 320 || trimmed.length === 0 || /[\r\n]/.test(trimmed)) {
    return null;
  }
  if (!emailRegex.test(trimmed)) {
    return null;
  }
  return trimmed.toLowerCase();
};

const sanitizeEmailHeader = (text: string): string => {
  if (!text) return '';
  return text.replace(/[\r\n]/g, '').trim();
};

const INPUT_LIMITS = {
  NAME_MAX: 100,
  EMAIL_MAX: 320,
  PHONE_MAX: 20,
  MESSAGE_MAX: 5000,
  DATE_MAX: 10,
};

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Validate request body exists
    if (!req.body) {
      return res.status(400).json({ 
        success: false, 
        error: "Invalid request" 
      });
    }

    // Check request body size (limit to 50KB)
    const bodySize = JSON.stringify(req.body).length;
    if (bodySize > 50000) {
      return res.status(413).json({ 
        success: false, 
        error: "Request too large" 
      });
    }

    const {
      name,
      email,
      phone,
      date,
      guestCount,
      services,
      budget,
      message,
      _honeypot,
      _timeSpent,
    } = req.body;

    // Anti-spam: Check honeypot field (should be empty or undefined)
    if (_honeypot && _honeypot.trim() !== '') {
      // Bot detected - silently reject (don't reveal this is a honeypot)
      console.warn("Spam detected: honeypot field filled");
      return res.status(200).json({ 
        success: true, 
        message: "Email sent successfully" 
      });
    }

    // Anti-spam: Check if form was submitted too quickly (less than 3 seconds)
    if (_timeSpent !== undefined && _timeSpent < 3) {
      console.warn("Spam detected: form submitted too quickly");
      return res.status(200).json({ 
        success: true, 
        message: "Email sent successfully" 
      });
    }

    // Sanitize all inputs
    const sanitizedName = sanitizeText(name, INPUT_LIMITS.NAME_MAX);
    const sanitizedEmail = email ? validateAndSanitizeEmail(email) : null;
    const sanitizedPhone = sanitizeText(phone, INPUT_LIMITS.PHONE_MAX);
    const sanitizedDate = sanitizeText(date || "", INPUT_LIMITS.DATE_MAX);
    const sanitizedGuestCount = sanitizeText(guestCount || "", 10);
    const sanitizedServices = sanitizeText(services || "", 100);
    const sanitizedBudget = sanitizeText(budget || "", 50);
    const sanitizedMessage = sanitizeText(message, INPUT_LIMITS.MESSAGE_MAX);

    // Validate required fields after sanitization
    if (!sanitizedName || !sanitizedPhone || !sanitizedMessage) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing or invalid required fields" 
      });
    }

    // Sanitize email header fields to prevent header injection
    const safeSubject = sanitizeEmailHeader(`New Quote Request from ${sanitizedName}`);
    const safeReplyTo = sanitizedEmail || undefined;

    // Format email content (plain text)
    const emailContent = `
New Quote Request from Patty's Delights Website

Contact Information:
- Name: ${sanitizedName}
- Email: ${sanitizedEmail || "Not provided"}
- Phone: ${sanitizedPhone}

Event Details:
- Date: ${sanitizedDate || "Not specified"}
- Guest Count: ${sanitizedGuestCount || "Not specified"}
- Services: ${sanitizedServices || "Not specified"}
- Budget: ${sanitizedBudget || "Not specified"}

Message:
${sanitizedMessage}

---
This email was sent from the contact form on Patty's Delights website.
    `.trim();

    // HTML email with all user input properly escaped
    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #FF6B6B; padding-bottom: 10px;">
            New Quote Request from Patty's Delights Website
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${escapeHtml(sanitizedName)}</p>
            <p><strong>Email:</strong> ${sanitizedEmail ? escapeHtml(sanitizedEmail) : "Not provided"}</p>
            <p><strong>Phone:</strong> ${escapeHtml(sanitizedPhone)}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Event Details</h3>
            <p><strong>Date:</strong> ${sanitizedDate ? escapeHtml(sanitizedDate) : "Not specified"}</p>
            <p><strong>Guest Count:</strong> ${sanitizedGuestCount ? escapeHtml(sanitizedGuestCount) : "Not specified"}</p>
            <p><strong>Services:</strong> ${sanitizedServices ? escapeHtml(sanitizedServices) : "Not specified"}</p>
            <p><strong>Budget:</strong> ${sanitizedBudget ? escapeHtml(sanitizedBudget) : "Not specified"}</p>
          </div>
          
          <div style="background-color: #fff5f5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF6B6B;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(sanitizedMessage)}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This email was sent from the contact form on Patty's Delights website.
          </p>
        </div>
      `;

    // Send email via Resend
    const result = await resend.emails.send({
      from: "Patty's Delights <onboarding@resend.dev>", // TODO: Update with your verified domain
      to: ["Pattysdelightsinc@gmail.com"],
      replyTo: safeReplyTo,
      subject: safeSubject,
      text: emailContent,
      html: htmlContent,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      // Don't expose internal error details to client
      return res.status(500).json({ 
        success: false, 
        error: "Failed to send email. Please try again later." 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: "Email sent successfully" 
    });
  } catch (error) {
    console.error("Contact API error:", error);
    // Don't expose internal error details to client
    return res.status(500).json({ 
      success: false, 
      error: "An unexpected error occurred. Please try again later." 
    });
  }
}
