import ComparisonColumn from "../components/ComparisonColumn";
import QualificationColumn from "../components/QualificationColumn";

const StatusAndQualification = () => {
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

  const paraItems = [
    "Ya venden pero quieren escalar.",
    "Quieren dejar de improvisar.",
    "Están listas para invertir en crecimiento serio.",
  ];

  return (
    <section className="text-white py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />

        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Antes/Después Section */}
            <div className="space-y-12">
              <header>
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-lavender-web">
                  Lo que cambia cuando instalas el sistema
                </h2>
                <p className="text-lg md:text-xl text-gray-400">
                  No es marketing. Es estructura.
                </p>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-0">
                <ComparisonColumn
                  title="Antes"
                  items={antesItems}
                  titleClassName="text-gray-500"
                  listClassName="text-gray-400"
                  wrapperClassName="sm:border-r sm:border-gray-800 sm:pr-8 text-end"
                />
                <ComparisonColumn
                  title="Después"
                  items={despuesItems}
                  titleClassName="text-shock-pink"
                  listClassName="text-white"
                  wrapperClassName="sm:pl-8"
                />
              </div>
            </div>

            {/* Para Quien Section */}
            <div className="space-y-12 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 self-start">
              <header>
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  ¿Para quién es esto?
                </h2>
                <p className="text-lg text-gray-400">
                  Este sistema no es para todos. Es para empresas que están listas para crecer con estructura.
                </p>
              </header>

              <QualificationColumn
                title="Esto es para empresas en Aguascalientes que:"
                items={paraItems}
                titleClassName="text-white/80 text-xl"
                itemClassName="font-semibold text-teal"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default StatusAndQualification;
