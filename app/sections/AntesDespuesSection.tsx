import ComparisonColumn from "../components/ComparisonColumn";

const AntesDespuesSection = () => {
  const antesItems = [
    "Desorden.",
    "Dependencia de suerte.",
    "Pérdida de prospectos.",
  ];

  const despuesItems = [
    "Flujo constante de clientes.",
    "Más citas.",
    "Seguimiento automático.",
    "Decisiones basadas en datos.",
  ];

  return (
    <section className=" text-white">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <header className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Lo que cambia cuando instalas el sistema
          </h2>
          <p className="text-lg text-gray-400 md:text-xl">
            No es marketing.
            <br />
            Es estructura.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0">
          <ComparisonColumn
            title="Antes"
            items={antesItems}
            titleClassName="text-gray-500"
            listClassName="text-gray-400"
            wrapperClassName="md:border-r md:border-gray-700 md:pr-12"
          />
          <ComparisonColumn
            title="Después"
            items={despuesItems}
            titleClassName="text-shock-pink"
            listClassName="text-white"
            wrapperClassName="md:pl-12"
          />
        </div>
      </div>
    </section>
  );
};

export default AntesDespuesSection;
