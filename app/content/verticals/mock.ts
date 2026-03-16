import { IoIosWarning, IoIosTrendingDown } from "react-icons/io";
import { FaGhost } from "react-icons/fa";
import { musacchioExito, vestinovia, DBSLegal } from "@/app/content/cases";
import { VerticalContent } from "../types";

export const mockContent: VerticalContent = {
  hero: {
    headerCtaText: "Mock CTA Header",
    title:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    titleHighlight: "consectetur",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    ctaText: "Lorem ipsum CTA",
    ctaSubtext: "Solo toma 99 segundos",
    ctaHref: "/mock/contacto",
  },

  problematica: {
    mainTitle: "Lorem ipsum dolor sit amet...",
    mainTitleHighlight: "consectetur adipiscing",
    cards: [
      {
        icon: FaGhost,
        title: "Lorem Ipsum Card 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        icon: IoIosWarning,
        title: "Lorem Ipsum Card 2",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
      },
      {
        icon: IoIosTrendingDown,
        title: "Lorem Ipsum Card 3",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.",
      },
    ],
  },

  sistemaSinergia: {
    title: "El Sistema Mock",
    subtitle: "Lorem ipsum dolor sit amet consectetur.",
    phases: [
      {
        number: "01",
        title: "Lorem Phase Uno",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        number: "02",
        title: "Lorem Phase Dos",
        body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        number: "03",
        title: "Lorem Phase Tres",
        body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
  },

  casosSistema: {
    title: "Lorem ipsum casos de éxito mock",
    subtitle: "Lorem ipsum dolor sit amet.\nConsectetur adipiscing elit.",
    cases: [musacchioExito, vestinovia, DBSLegal],
  },

  loQueCambia: {
    title: "Lorem ipsum cambia cuando instalas mock",
    subtitle: "Lorem ipsum. Consectetur.",
    antesLabel: "Antes Mock",
    despuesLabel: "Después Mock",
    antesItems: [
      "Lorem ipsum dolor sit amet.",
      "Consectetur adipiscing elit.",
      "Sed do eiusmod tempor.",
    ],
    despuesItems: [
      "Lorem ipsum mejorado.",
      "Consectetur optimizado.",
      "Eiusmod tempor incididunt.",
      "Labore et dolore magna.",
    ],
  },

  paraQuien: {
    label: "¿Para quién es este mock?",
    title: "Lorem ipsum es para ti si…",
    items: [
      "Lorem ipsum dolor sit amet.",
      "Consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt.",
    ],
    ctaText: "Quiero el mock",
    ctaHref: "/mock/contacto",
    ctaNote: "Lorem ipsum sin compromiso. Consectetur adipiscing directo.",
  },

  queIncluye: {
    title: "Qué incluye el Sistema Mock",
    subtitle: "Lorem ipsum bajo una misma estrategia.\nNada suelto.",
    items: [
      "Lorem ipsum estrategia y configuración.",
      "Consectetur página optimizada.",
      "Sed do eiusmod automatización.",
      "Labore et dolore medición constante.",
    ],
  },

  evaluacionGratuita: {
    title: "Evaluación Mock Gratuita",
    subtitle: "Lorem ipsum dolor sit amet consectetur:",
    subtitleHighlight: "Agenda una evaluación lorem ipsum.",
    ctaText: "Agendar evaluación mock",
    ctaHref: "/mock/contacto",
    note: "Lorem ipsum si no podemos ayudarte, consectetur adipiscing directo.",
  },

  contactForm: {
    submitButtonText: "Enviar Mock",
    nextButtonText: "Siguiente",
    backButtonText: "Atrás",
    returnButtonText: "Regresar",
    returnHref: "/mock",
    successTitle: "¡Mock Enviado!",
    successMessage:
      "Lorem ipsum dolor sit amet. Consectetur adipiscing elit y nos pondremos en contacto.",
    successReturnText: "Volver al mock",
    successReturnHref: "/mock",
    steps: [
      {
        id: "name",
        label: "¿Lorem ipsum llamas?",
        placeholder: "Tu nombre lorem",
        type: "text",
      },
      {
        id: "email",
        label: "¿A qué correo lorem?",
        placeholder: "lorem@ipsum.com",
        type: "email",
      },
      {
        id: "brand",
        label: "¿Cómo se llama tu lorem?",
        placeholder: "Nombre de tu lorem",
        type: "text",
      },
      {
        id: "brand_story",
        label: "Cuéntanos sobre tu lorem ipsum",
        placeholder: "¿Qué lorem y qué ipsum lograr?",
        type: "textarea",
      },
      {
        id: "website",
        label: "¿Tienes website lorem?",
        placeholder: "url o @lorem",
        type: "text",
      },
      {
        id: "budget",
        label: "¿Con cuanto lorem cuentas?",
        placeholder: "$9999 LOREM",
        type: "text",
      },
      {
        id: "source",
        label: "¿Cómo nos lorem encontraste?",
        placeholder: "Selecciona lorem",
        type: "select",
      },
    ],
  },
};
