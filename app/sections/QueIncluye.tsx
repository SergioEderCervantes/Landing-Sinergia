import InclusionItem from "../components/InclusionItem";

const QueIncluye = () => {
  const includes = [
    "Estrategia y configuración de Google Ads.",
    "Estrategia y configuración de Facebook Ads.",
    "Página optimizada para conversión.",
    "Automatización por WhatsApp.",
    "Medición y optimización constante.",
  ];

  return (
    <section className="text-white py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />

        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0">
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

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default QueIncluye;
