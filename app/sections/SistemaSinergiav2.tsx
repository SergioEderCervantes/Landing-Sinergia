type Step = {
  number: string;
  title: string;
  body: string;
};

const stepsData: Step[] = [
  {
    number: "01",
    title: "Atracción estratégica",
    body: `Usamos Google Ads y Facebook Ads en Aguascalientes para ponerte frente a personas que ya están buscando lo que tú vendes.`,
  },
  {
    number: "02",
    title: "Página que convierte",
    body: `Creamos una página clara que explica tu servicio sin confundir, genera confianza y lleva directo a agendar o cotizar.`,
  },
  {
    number: "03",
    title: "Seguimiento automático",
    body: `Implementamos seguimiento por WhatsApp para que ningún prospecto se pierda: respuestas inmediatas, confirmación de citas y recordatorios automáticos.`,
  },
];
type ProcessStepsProps = {
  title?: string;
  steps?: Step[];

};

export default function ProcessSteps({
  title = "El Sistema Sinergia",
  steps = stepsData,

}: ProcessStepsProps) {
  return (
    <section
      className="w-full text-white py-20"
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />
        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0">
          {/* title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Construimos un sistema de ventas completo.
            </p>
          </div>

          {/* Steps grid */}
          {/* TODO: ahorita en movil se stackean las columnas, cambiar a un carrusel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step, idx) => (
              <article key={step.number} className="text-center  ">
                {/* Title + number */}
                <div className="mb-6">
                  <p className="mb-2 text-xs tracking-[0.25em] text-white/45">
                    {step.number}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-wide">
                    {step.title}
                  </h3>
                </div>

                <div
                  className="mx-auto mb-6 flex w-full items-center gap-5 "
                  data-step={idx}
                >
                  {/* Dot */}
                  <div
                    className={`step-dot h-3 w-3 rounded-full  ${idx !== 0 ? "bg-white/50" : "bg-transparent"}`}
                    data-dot
                  />

                  <div className="relative h-0.5 flex-1 overflow-hidden">
                    <div
                      className="step-line absolute left-0 top-0 h-0.5 w-full bg-white/30"
                      style={{ transformOrigin: "left center" }}
                      data-line
                    />
                  </div>
                </div>

                {/* Body */}
                <p className="mx-auto max-w-xs text-sm leading-6 text-white/70">
                  <span>{step.body}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}