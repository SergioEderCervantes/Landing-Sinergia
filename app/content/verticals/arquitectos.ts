// app/content/verticals/arquitecto.ts
import { musacchioExito, jMunozExito } from '../cases'
import { VerticalContent } from '../types'
import { FaChartLine, FaUsers, FaClock } from 'react-icons/fa'

export const arquitectoContent: VerticalContent = {
  seo: {
    title: 'Más Proyectos para Constructoras y Arquitectos en Aguascalientes | Sinergia Studio',
    description: 'Instalamos anuncios + página de conversión para que cotizaciones te lleguen solas. Sistema probado con despachos y constructoras en Aguascalientes.',
  },
  hero: {
    headerCtaText: "Quiero más proyectos",
    title: "Cotizaciones constantes para constructoras y despachos en ",
    titleHighlight: "Aguascalientes",
    subtitle: "Instalamos un sistema simple: anuncios en Facebook e Instagram + una página clara para que te lleguen personas interesadas en construir, remodelar o diseñar… y te pidan cotización.",
    ctaText: "Quiero más proyectos",
    ctaSubtext: "Responde 3 preguntas y te decimos si aplica para tu empresa",
    ctaHref: "/arquitecto/contacto"
  },

  problematica: {
    mainTitle: "Si tu agenda es una montaña rusa…",
    mainTitleHighlight: "Es hora de cambiarlo.",
    cards: [
      {
        icon: FaChartLine,
        title: "Mes fuerte → mes flojo → pánico",
        description: "Viviendo con 'a ver qué sale' en lugar de un flujo predecible de proyectos."
      },
      {
        icon: FaUsers,
        title: "Dependencia de recomendados",
        description: "Confiando en un cliente grande o en recomendaciones que no puedes controlar."
      },
      {
        icon: FaClock,
        title: "Muchos interesados, pocos serios",
        description: "Gente que solo pregunta precio y desaparece sin intención real de contratar."
      }
    ]
  },

  sistemaSinergia: {
    title: "Así lo estructuramos en 3 pasos",
    subtitle: "Un sistema simple que pone tu constructora frente a clientes listos para cotizar",
    phases: [
      {
        number: "01",
        title: "Te encuentran",
        body: "Ponemos anuncios en Facebook e Instagram para que te vea gente que sí está buscando construir o remodelar."
      },
      {
        number: "02",
        title: "Te creen",
        body: "Los llevamos a una página clara donde entienden: qué haces, tu estilo, tu proceso y por qué eres serio."
      },
      {
        number: "03",
        title: "Te cotizan",
        body: "La página los empuja a una acción: pedir cotización / agendar llamada / WhatsApp."
      }
    ]
  },

  casosSistema: {
    title: "Resultados reales con despachos en Aguascalientes",
    subtitle: "Hemos trabajado con estudios de gran impacto en la ciudad",
    cases: [
      musacchioExito,
    ]
  },

  loQueCambia: {
    title: "El antes y el después",
    subtitle: "Cuando tienes un sistema que trabaja para ti",
    antesLabel: "Sin sistema",
    despuesLabel: "Con Sinergia",
    antesItems: [
      "Mes fuerte → mes flojo → pánico constante",
      "Dependes de que 'caiga' un proyecto",
      "Recomendaciones impredecibles como única fuente",
      "Muchos curiosos, pocos clientes serios",
      "Tu equipo se queda parado entre proyectos",
      "No sabes cuándo llegará el próximo cliente"
    ],
    despuesItems: [
      "Flujo constante y predecible de cotizaciones",
      "Sistema que genera oportunidades 24/7",
      "Anuncios + recomendaciones trabajando juntos",
      "Filtras intención antes de invertir tiempo",
      "Tu equipo siempre tiene pipeline de trabajo",
      "Controlas cuántos proyectos quieres tomar"
    ]
  },

  paraQuien: {
    label: "¿Para quién es esto?",
    title: "Este sistema aplica si...",
    items: [
      "Eres constructor, arquitecto o despacho en Aguascalientes",
      "Ya tienes proyectos entregados (no eres principiante)",
      "Quieres flujo constante, no solo 'cuando caiga algo'",
      "Estás dispuesto a invertir en anuncios para crecer",
      "Tienes capacidad de tomar más proyectos ahora"
    ],
    ctaText: "Ver si aplico",
    ctaHref: "/arquitecto/contacto",
    ctaNote: "Si no aplica para tu giro, te lo decimos directo"
  },

  queIncluye: {
    title: "¿Qué instalamos para que esto funcione?",
    subtitle: "Todo lo necesario para generar cotizaciones constantes",
    items: [
      "Anuncios que traen intención — No anuncios de 'likes'. Anuncios que traen gente que quiere cotizar.",
      "Página clara para proyectos — Una página pensada para que el cliente llegue y diga: 'Ok, estos sí. ¿Cuánto cuesta?'",
      "Estructura para convertir — Te dejamos guiones y preguntas para filtrar: cliente real vs curioso.",
      "Optimización continua — Ajustamos mensajes, audiencias y página basados en datos reales.",
      "Seguimiento de resultados — Sabes exactamente cuántas cotizaciones genera el sistema cada mes."
    ]
  },

  evaluacionGratuita: {
    title: "Deja de vivir con meses de pánico",
    subtitle: "descubre lo que tu estudio puede lograr",
    subtitleHighlight: "ahora",
    ctaText: "Quiero más proyectos",
    ctaHref: "/arquitecto/contacto",
    note: "Si no aplica para tu giro, te lo decimos directo"
  },

  contactForm: {
    submitButtonText: "Enviar",
    nextButtonText: "Siguiente",
    backButtonText: "Atrás",
    returnButtonText: "← Volver al inicio",
    returnHref: "/arquitecto",
    successTitle: "¡Listo! Revisaremos tu información",
    successMessage: "Nos pondremos en contacto contigo en las próximas 24 horas para ver si el sistema aplica para tu constructora o despacho.",
    successReturnText: "Volver al inicio",
    successReturnHref: "/arquitecto",
    steps: [
      {
        id: "name",
        label: "¿Cuál es tu nombre?",
        placeholder: "Tu nombre completo",
        type: "text"
      },
      {
        id: "empresa",
        label: "¿Nombre de tu constructora o despacho?",
        placeholder: "Nombre de la empresa",
        type: "text"
      },
      {
        id: "phone",
        label: "¿A qué número de WhatsApp te contactamos?",
        placeholder: "+52 123 456 7890",
        type: "tel"
      },
      {
        id: "proyectos",
        label: "¿Cuántos proyectos manejas al mes actualmente?",
        placeholder: "Ej: 2-3 proyectos",
        type: "text"
      },
      {
        id: "interes",
        label: "¿Qué te gustaría lograr con un flujo constante de cotizaciones?",
        placeholder: "Cuéntanos tu objetivo principal",
        type: "textarea"
      }
    ]
  }
}