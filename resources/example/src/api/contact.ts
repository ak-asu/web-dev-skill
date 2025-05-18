// Here's an implementation using Formspree as an example, https://formspree.io/

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Sends contact form data to a form handling service
 * @param formData The contact form data
 * @returns A promise that resolves to the response
 */
export async function submitContactForm(formData: ContactFormData): Promise<Response> {
  // Get the form endpoint from environment variables (set up in .env)
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
  
  if (!endpoint) {
    throw new Error('Form endpoint environment variable is not set');
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Form submission failed with status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}
