import CaseStudyCard from "../components/CaseStudyCard";

const cases = [
  {
    number: "01",
    title: "Caso 01 — Empresa de servicios locales",
    antes: [
      "Dependía de recomendaciones.",
      "Ventas variables.",
      "Sin seguimiento estructurado.",
    ],
    intervencion: [
      "Google Ads + Meta Ads.",
      "Página optimizada para citas.",
      "Automatización por WhatsApp.",
    ],
    resultado: {
      metrics: ["+48% en citas agendadas."],
      description: [
        "Flujo constante de prospectos.",
        "Proceso comercial medible.",
      ],
    },
  },
  {
    number: "02",
    title: "Caso 02 — Negocio especializado",
    antes: [
      "Prospectos preguntaban precio y desaparecían.",
      "Mucho tráfico, poca conversión.",
    ],
    intervencion: [
      "Reestructuración de atracción.",
      "Página clara y directa.",
      "Seguimiento automático.",
    ],
    resultado: {
      metrics: ["+37% en cotizaciones calificadas."],
      description: [
        "Mejora en calidad de leads.",
        "Ventas más previsibles.",
      ],
    },
  },
];

const CasosSistema = () => {
  return (
    <section className=" text-white ">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <header className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Empresas en Aguascalientes que ya instalaron el Sistema Sinergia
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">
            No vendemos anuncios.
            <br />
            Instalamos sistemas que generan clientes.
          </p>
        </header>

        <div className="space-y-24">
          {cases.map((caseItem, index) => (
            <CaseStudyCard key={index} caseItem={caseItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasosSistema;
