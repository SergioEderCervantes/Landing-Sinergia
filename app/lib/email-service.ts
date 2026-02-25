import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  brand: string;
  brand_story: string;
  website: string;
  budget: string;
  source: string;
  vertical: string;
}

interface EmailService {
  sendContactForm(data: ContactFormData): Promise<void>;
}

class EmailJsServive implements EmailService {
  private readonly serviceId: string;
  private readonly templateId: string;
  private readonly publicKey: string;

  constructor() {
    this.serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    this.templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    this.publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!this.serviceId || !this.templateId || !this.publicKey) {
      console.error("EmailJS: Missing environment variables");
    }
  }

  async sendContactForm(data: ContactFormData): Promise<void> {
    // Estaria mejor poder mandar el objeto data directamente
    const templateData = {
      name: data.name,
      email: data.email,
      brand: data.brand,
      brand_story: data.brand_story,
      website: data.website,
      budget: data.budget,
      source: data.source,
      vertical: data.vertical,
      submitted_at: new Date().toLocaleString("es-MX"),
    };
    try {
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateData,
        this.publicKey,
      );

      if (response.status !== 200) {
        throw new Error("Email send failed");
      }
      console.log("Formulario mandado con exito ");
    } catch (error) {
      console.error("EmailJS Error:", error);
      throw new Error("No pudimos enviar tu mensaje. Intenta de nuevo.");
    }
  }
}

// Aqui pondriamos el otro EmailService que conecte a un backend propio si es necesario

export const emailService: EmailService = new EmailJsServive();