import { Exito } from './types'

// AQUI SE VAN A ALMACENAR TODOS LOS CASOS DE EXITO, ESTO PARA PODER REUTILIZARLOS EN DIFERENTES VERTICALES

const musacchioExito: Exito = {
  name: 'Musacchio Estudio',
  shortDesc:
    'Arquitectura premium en Aguascalientes con una presencia digital que comunica valor, proceso y nivel desde el primer vistazo.',
  before:
    "El trabajo del estudio era fuerte, pero en redes no se entendía rápido el 'por qué' y la marca se percibía dispareja: publicaciones sin sistema visual constante y sin una narrativa clara del valor.",
  services: [
    'Sistema visual aplicado a todo el contenido.',
    'Producción y edición mensual de reels.',
    'Carruseles y posts de posicionamiento.',
    'Estrategia de publicaciones para elevar percepción y filtrar mejor al cliente.',
  ],
  impact: {
    results: [
      { 'Cuentas alcanzadas': '+258% desde que el plan Sinergia fue implementado' },
      { Percepción: "Más premium, más consistente, más 'marca'" },
      { 'Mensaje en 3 segundos': 'La gente entiende rápido el nivel y el enfoque del estudio' },
      { 'Actividad del perfil': '118% de crecimiento en solo 3 meses' },
    ],
  },
  hImage: '/images/casos-exito/musacchio_h.webp',
  vImage: '/images/casos-exito/musacchio_h.webp',
}

const vestinovia: Exito = {
  name: 'VestiNovia',
  shortDesc:
    'Boutique de vestidos de novia en Aguascalientes que buscaba más citas y mayor conexión emocional con sus clientas.',
  before:
    'Antes de trabajar con Sinergia, Vestinovia ya hacía publicidad, pero no tenía una estrategia clara. Las campañas no eran constantes y el contenido se enfocaba más en los modelos que de lo que realmente siente una novia cuando busca el suyo.',
  services: [
    'Estrategia completa de publicidad en Meta Ads',
    'Creación y grabación de videos tipo Reel enfocados en generar citas',
    'Guiones emocionales pensados para conectar con novias reales',
  ],
  impact: {
    results: [
      { 'Costo por conversacion': 'Logramos anuncios con costos por mensaje por debajo de 1 dolar.' },
      { 'Más volumen de citas': 'Se incrementó el número de conversaciones por WhatsApp de manera constante.' },
      { 'Mejor calidad de prospectos': 'Las novias comenzaron a llegar con mayor intención real de agendar y comprar.' },
      { 'Estabilidad en resultados': 'Las campañas dejaron de ser inestables y comenzaron a generar resultados más predecibles.' },
    ],
  },
  hImage: '/images/casos-exito/vestiNovia_h.webp',
  vImage: '/images/casos-exito/vestiNovia_v.webp',
}

const DBSLegal: Exito = {
  name: 'DBS Legal',
  shortDesc:
    'Despacho de abogados especializado en propiedad intelectual y derecho corporativo que transformó su presencia digital para captar clientes estratégicos desde el primer mes.',
  before:
    'Antes de trabajar con Sinergia, DBS Legal contaba con una presencia digital limitada que no reflejaba su expertise ni facilitaba la captación de clientes. Necesitaban una plataforma web moderna, optimizada para conversiones y que comunicara claramente el valor de sus servicios especializados.',
  services: [
    'Diseño y desarrollo web con enfoque en experiencia del usuario',
    'Optimización técnica y estratégica para conversiones',
    'SEO técnico y posicionamiento en buscadores',
    'Integración de canales de contacto directo (formularios y WhatsApp)',
    'Optimización de rendimiento y velocidad web',
  ],
  impact: {
    results: [
      { 'Retorno de inversión': 'Desde el mes uno de lanzamiento se generaron leads que se convirtieron en clientes, logrando ROI inmediato.' },
      { 'Presencia digital fortalecida': 'Posicionamiento como referente digital en el sector legal especializado.' },
      { 'Claridad de servicios': 'Los visitantes comprenden rápidamente las áreas de práctica y metodología de trabajo antes de contactar.' },
      { 'Rendimiento técnico': 'Puntuación de 94% en LiteSpeed, garantizando carga rápida y experiencia óptima.' },
    ],
  },
  hImage: '/images/casos-exito/DBS_h.webp',
  vImage: '/images/casos-exito/DBS_h.webp',
}


const jMunozExito: Exito = {
  name: "J. Muñoz Arquitectos",
  shortDesc:
    "Campañas en Meta Ads para atraer doctores interesados en abrir o remodelar consultorios, usando embudo frío + caliente y creativos tipo caso de éxito para generar conversaciones listas para cotizar.",
  before:
    "Antes de trabajar con Sinergia, la captación de prospectos por anuncios no era constante y dependía más de esfuerzos aislados. No había una estructura clara ni una forma repetible de convertir el interés en mensajes útiles para cotizar proyectos.",
  services: [
    "Estrategia de Meta Ads enfocada a conversaciones (WhatsApp/Mensajes)",
    "Estructura de embudo: Frío (descubrimiento) + Caliente (remarketing)",
    "Producción y adaptación de creativos (video y carrusel) orientados a conversión",
    "Optimización continua según costo por conversación y volumen"
  ],
  impact: {
    results: [
      {
        "Más conversaciones con doctores": "En el periodo analizado se generaron 51 conversaciones con mensajes iniciados desde Meta Ads."
      },
      {
        "Creativos de 'caso de éxito' como motor": "Los formatos ganadores fueron el carrusel de caso de éxito (17 conversaciones) y el video de caso de éxito (13 conversaciones)."
      },
      {
        "Demanda real incluso fuera del estado": "Además de Aguascalientes, empezaron a llegar prospectos de otros estados que solicitaron cotización ."
      }
    ],
  },
  hImage: "/images/casos-exito/jMunoz.jpg",
  vImage: "/images/casos-exito/jMunoz.jpg"
};

export { musacchioExito, vestinovia, DBSLegal , jMunozExito}
