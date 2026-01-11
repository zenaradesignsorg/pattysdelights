import { ContactFormData, sendContactEmail } from "@/lib/resend";
import {
  sanitizeText,
  validateAndSanitizeEmail,
  INPUT_LIMITS,
} from "@/lib/sanitize";

/**
 * API endpoint handler for contact form submissions
 * This can be used as a serverless function or API route
 * 
 * For Vercel: Place this in /api/contact/route.ts
 * For Netlify: Place this in /netlify/functions/contact.ts
 * For other platforms: Adapt accordingly
 */
export async function POST(request: Request) {
  try {
    // Check request body size (limit to 50KB)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 50000) {
      return new Response(
        JSON.stringify({ success: false, error: "Request too large" }),
        { 
          status: 413,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const formData: ContactFormData = await request.json();

    // Anti-spam: Check honeypot field (should be empty or undefined)
    if (formData._honeypot && formData._honeypot.trim() !== '') {
      // Bot detected - silently reject (don't reveal this is a honeypot)
      console.warn("Spam detected: honeypot field filled");
      return new Response(
        JSON.stringify({ success: true, message: "Email sent successfully" }),
        { 
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Anti-spam: Check if form was submitted too quickly (less than 3 seconds)
    if (formData._timeSpent !== undefined && formData._timeSpent < 3) {
      console.warn("Spam detected: form submitted too quickly");
      return new Response(
        JSON.stringify({ success: true, message: "Email sent successfully" }),
        { 
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

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
      return new Response(
        JSON.stringify({ success: false, error: "Missing or invalid required fields" }),
        { 
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Create sanitized form data
    const sanitizedFormData: ContactFormData = {
      name: sanitizedName,
      email: sanitizedEmail || "",
      phone: sanitizedPhone,
      date: sanitizedDate,
      guestCount: sanitizedGuestCount,
      services: sanitizedServices,
      budget: sanitizedBudget,
      message: sanitizedMessage,
    };

    // Send email via Resend
    const result = await sendContactEmail(sanitizedFormData);

    if (!result.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Failed to send email. Please try again later." }),
        { 
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { 
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    // Don't expose internal error details to client
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "An unexpected error occurred. Please try again later." 
      }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
