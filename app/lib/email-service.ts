import emailjs from "@emailjs/browser";

export interface ContactFormData {
  /** Campos de identidad, con ids canónicos en todos los verticales. */
  name: string;
  email: string;
  phone: string;
  vertical: string;
  /** Resto de campos del formulario (varía por vertical): empresa, brand, budget… */
  extra: Record<string, string>;
  /** `extra` ya formateado como texto legible ("Etiqueta: valor" por línea). */
  details: string;
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
    const templateData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      vertical: data.vertical,
      details: data.details,
      submitted_at: new Date().toLocaleString("es-MX"),
      // Campos sueltos del vertical, por si la plantilla los referencia por nombre
      // ({{brand}}, {{empresa}}…). Los que no existan en la plantilla se ignoran.
      ...data.extra,
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