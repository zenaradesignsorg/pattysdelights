import { ContactFormData } from "./resend";

/**
 * Client-side function to submit contact form
 * This calls the API endpoint to send the email
 */
export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Determine the API endpoint based on environment
    // In production, this should point to your serverless function
    const apiEndpoint = import.meta.env.VITE_API_ENDPOINT || "/api/contact";
    
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      return { 
        success: false, 
        error: data.error || `Server error: ${response.status}` 
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    
    // Fallback: In development, log the form data if API endpoint fails
    // Note: Direct client-side email sending is not recommended for production
    if (import.meta.env.DEV) {
      console.warn("API endpoint not available. Form data:", formData);
      console.warn("Please set up the serverless function or configure VITE_API_ENDPOINT");
      // Return success in dev mode so form can be tested
      return { success: true };
    }
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to submit form. Please try again or call us directly." 
    };
  }
};
