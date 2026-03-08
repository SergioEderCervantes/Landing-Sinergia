interface Impact {
  results: Record<string, string>[];
  // testimony: string;
}

export interface Exito {
  number: number;
  name: string;
  shortDesc: string;
  before: string;
  services: string[];
  impact: Impact;
  hImage: string;
  vImage: string;
}

const vestinovia: Exito = {
  number: 2,
  name: "VestiNovia",
  shortDesc:
    "Boutique de vestidos de novia en Aguascalientes que buscaba más citas y mayor conexión emocional con sus clientas.",

  before:
    "Antes de trabajar con Sinergia, Vestinovia ya hacía publicidad, pero no tenía una estrategia clara. Las campañas no eran constantes y el contenido se enfocaba más en los modelos que de lo que realmente siente una novia cuando busca el suyo.",

  services: [
    "Estrategia completa de publicidad en Meta Ads",
    "Creación y grabación de videos tipo Reel enfocados en generar citas",
    "Guiones emocionales pensados para conectar con novias reales",
  ],

  impact: {
    results: [
      {
        "Costo por conversacion":
          "Logramos anuncios con costos por mensaje por debajo de 1 dolar.",
      },
      {
        "Más volumen de citas":
          "Se incrementó el número de conversaciones por WhatsApp de manera constante.",
      },
      {
        "Mejor calidad de prospectos":
          "Las novias comenzaron a llegar con mayor intención real de agendar y comprar.",
      },
      {
        "Estabilidad en resultados":
          "Las campañas dejaron de ser inestables y comenzaron a generar resultados más predecibles.",
      },
    ],
    // testimony: "Sinergia nos ayudó a entender que no solo vendemos vestidos, vendemos una experiencia. Ahora nuestras campañas realmente conectan con las novias, recibimos más citas y sentimos que nuestra marca transmite seguridad y confianza."
  },

  hImage: "/images/casos-exito/vestiNovia_h.webp",
  vImage: "/images/casos-exito/vestiNovia_v.webp",
};


const DBS_legal: Exito = {
  number: 3,
  name: "DBS Legal",
  shortDesc:
    "Despacho de abogados especializado en propiedad intelectual y derecho corporativo que transformó su presencia digital para captar clientes estratégicos desde el primer mes.",
  before:
    "Antes de trabajar con Sinergia, DBS Legal contaba con una presencia digital limitada que no reflejaba su expertise ni facilitaba la captación de clientes. Necesitaban una plataforma web moderna, optimizada para conversiones y que comunicara claramente el valor de sus servicios especializados.",
  services: [
    "Diseño y desarrollo web con enfoque en experiencia del usuario",
    "Optimización técnica y estratégica para conversiones",
    "SEO técnico y posicionamiento en buscadores",
    "Integración de canales de contacto directo (formularios y WhatsApp)",
    "Optimización de rendimiento y velocidad web",
  ],
  impact: {
    results: [
      {
        "Retorno de inversión":
          "Desde el mes uno de lanzamiento se generaron leads que se convirtieron en clientes, logrando ROI inmediato.",
      },
      {
        "Presencia digital fortalecida":
          "Posicionamiento como referente digital en el sector legal especializado.",
      },
      {
        "Claridad de servicios":
          "Los visitantes comprenden rápidamente las áreas de práctica y metodología de trabajo antes de contactar.",
      },
      {
        "Rendimiento técnico":
          "Puntuación de 94% en LiteSpeed, garantizando carga rápida y experiencia óptima.",
      },
    ],
  },
  hImage: "/images/casos-exito/DBS_h.webp",
  vImage: "/images/casos-exito/DBS_h.webp",
};

const musacchioExito: Exito = {
  number: 1,
  name: "Musacchio Estudio",
  shortDesc:
    "Arquitectura premium en Aguascalientes con una presencia digital que comunica valor, proceso y nivel desde el primer vistazo.",
  before:
    "El trabajo del estudio era fuerte, pero en redes no se entendía rápido el ‘por qué’ y la marca se percibía dispareja: publicaciones sin sistema visual constante y sin una narrativa clara del valor.",
  services: [
    "Sistema visual aplicado a todo el contenido.",
    "Producción y edición mensual de reels.",
    "Carruseles y posts de posicionamiento.",
    "Estrategia de publicaciones para elevar percepción y filtrar mejor al cliente.",
  ],
  impact: {
    results: [
      {
        "Cuentas alcanzadas":
          "+258% desde que el plan Sinergia fue implementado",
      },
      { Percepción: "Más premium, más consistente, más ‘marca’" },
      {
        "Mensaje en 3 segundos":
          "La gente entiende rápido el nivel y el enfoque del estudio",
      },
      { "Actividad del perfil": "118% de crecimiento en solo 3 meses" },
    ],
    // testimony:"Ahora nuestra presencia digital se siente al nivel de nuestros proyectos. La gente entiende mejor lo que hacemos y por qué lo hacemos así.",
  },
  // Reemplaza por tus rutas reales
  hImage: "/images/casos-exito/musacchio_h.webp",
  vImage: "/images/casos-exito/musacchio_h.webp",
};

export const CASOS: Exito[] = [
  musacchioExito,
  vestinovia,
  DBS_legal,
];
