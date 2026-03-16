import { IoIosWarning, IoIosTrendingDown } from "react-icons/io";
import { FaGhost } from "react-icons/fa";
import { musacchioExito, vestinovia, DBSLegal } from "@/app/content/cases";
import { VerticalContent } from "../types";

export const generalContent: VerticalContent = {
  hero: {
    headerCtaText: "Evalua mi negocio",
    title:
      "Consigue un flujo predecible de citas calificadas, sin perseguir leads ni vivir pegado al celular.",
    titleHighlight: "predecible",
    subtitle:
      "Instalamos un sistema de ventas que atrae a tu cliente ideal, filtra a los curiosos y agenda automáticamente solo a quienes están listos para comprar.",
    ctaText: "Iniciar Diagnóstico de Viabilidad",
    ctaSubtext: "Solo toma 45 segundos",
    ctaHref: "/general/contacto",
  },

  problematica: {
    mainTitle: "El problema no es tu producto...",
    mainTitleHighlight: "es tu sistema",
    cards: [
      {
        icon: FaGhost,
        title: "Leads fantasma",
        description:
          "Te llenas de mensajes preguntando 'precio', pero cuando respondes, desaparecen o te dejan en visto.",
      },
      {
        icon: IoIosWarning,
        title: "Respuesta Tardía es una venta Perdida",
        description:
          "Tardar más de 5 minutos en responder reduce tu conversión drásticamente. Tu WhatsApp actual es un cementerio de chats olvidados.",
      },
      {
        icon: IoIosTrendingDown,
        title: " Ingresos 'Montaña Rusa'",
        description:
          "Un mes facturas bien, el siguiente no sabes de dónde saldrán los clientes. Vives dependiento de referidos.",
      },
    ],
  },

  sistemaSinergia: {
    title: "El Sistema Sinergia",
    subtitle: "Construimos un sistema de ventas completo.",
    phases: [
      {
        number: "01",
        title: "Atracción estratégica",
        body: "Usamos Google Ads y Facebook Ads en Aguascalientes para ponerte frente a personas que ya están buscando lo que tú vendes.",
      },
      {
        number: "02",
        title: "Página que convierte",
        body: "Creamos una página clara que explica tu servicio sin confundir, genera confianza y lleva directo a agendar o cotizar.",
      },
      {
        number: "03",
        title: "Seguimiento automático",
        body: "Implementamos seguimiento por WhatsApp para que ningún prospecto se pierda: respuestas inmediatas, confirmación de citas y recordatorios automáticos.",
      },
    ],
  },

  casosSistema: {
    title: "Empresas en Aguascalientes que ya instalaron el Sistema Sinergia",
    subtitle:
      "No vendemos anuncios.\nInstalamos sistemas que generan clientes.",
    cases: [musacchioExito, vestinovia, DBSLegal],
  },

  loQueCambia: {
    title: "Lo que cambia cuando instalas el sistema",
    subtitle: "No es marketing. Es estructura.",
    antesLabel: "Antes",
    despuesLabel: "Después",
    antesItems: [
      "Dependes de la suerte y el boca a boca.",
      "Prospectos que preguntan y desaparecen.",
      "Sin estructura ni seguimiento.",
    ],
    despuesItems: [
      "Flujo constante de clientes.",
      "Más citas. Mejor calidad de prospectos.",
      "Seguimiento automático.",
      "Decisiones basadas en datos reales.",
    ],
  },

  paraQuien: {
    label: "¿Para quién es esto?",
    title: "Esto es para ti si…",
    items: [
      "Ya vendes pero quieres escalar.",
      "Quieres dejar de improvisar.",
      "Estás listo para invertir en crecimiento serio.",
    ],
    ctaText: "Quiero el sistema",
    ctaHref: "/general/contacto",
    ctaNote: "Sin compromiso. Si no podemos ayudarte, te lo decimos directo.",
  },

  queIncluye: {
    title: "Qué incluye el Sistema Sinergia",
    subtitle: "Todo bajo una misma estrategia.\nNada suelto.",
    items: [
      "Estrategia y configuración de Ads.",
      "Página optimizada para conversión.",
      "Automatización de contactos por WhatsApp.",
      "Medición y optimización constante.",
    ],
  },

  evaluacionGratuita: {
    title: "Evaluación gratuita",
    subtitle: "Si tu negocio ya funciona pero quieres más clientes constantes:",
    subtitleHighlight: "Agenda una evaluación gratuita.",
    ctaText: "Agendar evaluación gratuita",
    ctaHref: "/general/contacto",
    note: "Si vemos que no podemos ayudarte, te lo decimos directo.",
  },

  contactForm: {
    submitButtonText: "Enviar",
    nextButtonText: "Siguiente",
    backButtonText: "Atrás",
    returnButtonText: "Regresar",
    returnHref: "/general",
    successTitle: "¡Mensaje Enviado!",
    successMessage:
      "Gracias por tu interés. Revisaremos tu información y nos pondremos en contacto contigo lo antes posible.",
    successReturnText: "Volver al inicio",
    successReturnHref: "/general",
    steps: [
      {
        id: "name",
        label: "¿Cómo te llamas?",
        placeholder: "Tu nombre completo",
        type: "text",
      },
      {
        id: "email",
        label: "¿A qué correo te escribimos?",
        placeholder: "tu@email.com",
        type: "email",
      },
      {
        id: "brand",
        label: "¿Cómo se llama tu marca o negocio?",
        placeholder: "Nombre de tu negocio",
        type: "text",
      },
      {
        id: "brand_story",
        label: "Cuéntanos un poco sobre tu marca",
        placeholder: "¿Qué haces y qué buscas lograr?",
        type: "textarea",
      },
      {
        id: "website",
        label: "¿Tienes website o redes sociales?",
        placeholder: "url o @usuario",
        type: "text",
      },
      {
        id: "budget",
        label: "¿Con cuanto presupuesto cuentas para este proyecto?",
        placeholder: "$10000 MXN",
        type: "text",
      },
      {
        id: "source",
        label: "¿Cómo nos encontraste?",
        placeholder: "Selecciona una opción",
        type: "select",
      },
    ],
  },
};
