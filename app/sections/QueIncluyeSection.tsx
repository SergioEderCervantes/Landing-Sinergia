import InclusionItem from "../components/InclusionItem";

const QueIncluyeSection = () => {
  const includes = [
    "Estrategia y configuración de Google Ads.",
    "Estrategia y configuración de Facebook Ads.",
    "Página optimizada para conversión.",
    "Automatización por WhatsApp.",
    "Medición y optimización constante.",
  ];

  return (
    <section className="bg-transparent text-white">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <header className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Qué incluye el Sistema Sinergia
          </h2>
          <p className="text-lg text-gray-400 md:text-xl">
            Todo bajo una misma estrategia.
            <br />
            Nada suelto.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {includes.map((item, index) => (
            <InclusionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueIncluyeSection;
