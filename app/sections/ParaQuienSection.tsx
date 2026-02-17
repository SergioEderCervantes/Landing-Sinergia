import QualificationColumn from "../components/QualificationColumn";

const ParaQuienSection = () => {
  const paraItems = [
    "Ya venden pero quieren escalar.",
    "Quieren dejar de improvisar.",
    "Están listas para invertir en crecimiento serio.",
  ];

  const noEsParaItems = [
    "Quiere “probar redes sociales”.",
    "Busca resultados sin inversión.",
    "No está dispuesto a estructurar su proceso comercial.",
  ];

  return (
    <section className=" text-white">
      <div className="mx-auto max-w-5xl px-6 py-28">
        <header className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            ¿Para quién es esto?
          </h2>
          <p className="text-lg text-gray-400 md:text-xl">
            Este sistema no es para todos.
            <br />
            Es para empresas que están listas para crecer con estructura.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <QualificationColumn
            title="Esto es para empresas en Aguascalientes que:"
            items={paraItems}
            titleClassName="text-white"
            itemClassName="font-semibold text-teal"
          />
          <QualificationColumn
            title="No es para quien:"
            items={noEsParaItems}
            titleClassName="text-gray-400"
            itemClassName="text-gray-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ParaQuienSection;
