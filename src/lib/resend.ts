import { Resend } from "resend";

// Initialize Resend client
// The API key will be read from environment variable VITE_RESEND_API_KEY
// For server-side usage, use RESEND_API_KEY instead
const getResendClient = () => {
  const apiKey = import.meta.env.VITE_RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
  
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
}

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  const resend = getResendClient();
  
  if (!resend) {
    // In development, if API key is not set, return success for testing
    if (import.meta.env.DEV) {
      console.log("Resend not configured. Form data:", formData);
      return { success: true };
    }
    return { success: false, error: "Email service not configured" };
  }

  try {
    // Format the email content
    const emailContent = `
New Quote Request from Patty's Delights Website

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email || "Not provided"}
- Phone: ${formData.phone}

Event Details:
- Date: ${formData.date || "Not specified"}
- Guest Count: ${formData.guestCount || "Not specified"}
- Services: ${formData.services || "Not specified"}
- Budget: ${formData.budget || "Not specified"}

Message:
${formData.message}

---
This email was sent from the contact form on Patty's Delights website.
    `.trim();

    const result = await resend.emails.send({
      from: "Patty's Delights <onboarding@resend.dev>", // Update this with your verified domain
      to: ["Pattysdelightsinc@gmail.com"], // Your business email
      replyTo: formData.email || undefined,
      subject: `New Quote Request from ${formData.name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #FF6B6B; padding-bottom: 10px;">
            New Quote Request from Patty's Delights Website
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email || "Not provided"}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Event Details</h3>
            <p><strong>Date:</strong> ${formData.date || "Not specified"}</p>
            <p><strong>Guest Count:</strong> ${formData.guestCount || "Not specified"}</p>
            <p><strong>Services:</strong> ${formData.services || "Not specified"}</p>
            <p><strong>Budget:</strong> ${formData.budget || "Not specified"}</p>
          </div>
          
          <div style="background-color: #fff5f5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF6B6B;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
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
