import { Resend } from "resend";
import {
  escapeHtml,
  sanitizeText,
  validateAndSanitizeEmail,
  sanitizeEmailHeader,
  INPUT_LIMITS,
} from "./sanitize";

// NOTE: This function should only be used server-side
// Client-side usage is disabled for security (API keys should never be exposed)
const getResendClient = () => {
  // Only use server-side environment variable (RESEND_API_KEY)
  // VITE_ prefixed variables are exposed to the client bundle - DO NOT USE for API keys
  const apiKey = import.meta.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.warn("Resend API key not found. Email functionality will be disabled.");
    return null;
  }
  
  return new Resend(apiKey);
};

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  guestCount: string;
  services: string;
  budget: string;
  message: string;
  // Anti-spam fields (optional, may not be present)
  _honeypot?: string;
  _timeSpent?: number;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  const resend = getResendClient();
  
  if (!resend) {
    // Server-side only - this should not be called from client
    return { success: false, error: "Email service not configured" };
  }

  try {
    // Sanitize all inputs
    const sanitizedName = sanitizeText(formData.name, INPUT_LIMITS.NAME_MAX);
    const sanitizedEmail = formData.email ? validateAndSanitizeEmail(formData.email) : null;
    const sanitizedPhone = sanitizeText(formData.phone, INPUT_LIMITS.PHONE_MAX);
    const sanitizedDate = sanitizeText(formData.date || "", INPUT_LIMITS.DATE_MAX);
    const sanitizedGuestCount = sanitizeText(formData.guestCount || "", 10);
    const sanitizedServices = sanitizeText(formData.services || "", 100);
    const sanitizedBudget = sanitizeText(formData.budget || "", 50);
    const sanitizedMessage = sanitizeText(formData.message, INPUT_LIMITS.MESSAGE_MAX);

    // Validate required fields after sanitization
    if (!sanitizedName || !sanitizedPhone || !sanitizedMessage) {
      return { success: false, error: "Invalid or missing required fields" };
    }

    // Sanitize email header fields to prevent header injection
    const safeSubject = sanitizeEmailHeader(`New Quote Request from ${sanitizedName}`);
    const safeReplyTo = sanitizedEmail || undefined;

    // Format the email content (plain text)
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

    const result = await resend.emails.send({
      from: "Patty's Delights <noreply@pattysdelights.com>",
      to: ["Pattysdelightsinc@gmail.com"], // Your business email
      replyTo: safeReplyTo,
      subject: safeSubject,
      text: emailContent,
      html: htmlContent,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return { success: false, error: result.error.message || "Failed to send email" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "An unexpected error occurred" 
    };
  }
};
