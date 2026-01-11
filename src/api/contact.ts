import { ContactFormData, sendContactEmail } from "@/lib/resend";

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
    const formData: ContactFormData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { 
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Send email via Resend
    const result = await sendContactEmail(formData);

    if (!result.success) {
      return new Response(
        JSON.stringify({ success: false, error: result.error || "Failed to send email" }),
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
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : "An unexpected error occurred" 
      }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
