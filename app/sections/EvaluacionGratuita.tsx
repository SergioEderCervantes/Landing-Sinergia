import { Button } from "../components/Button";

const EvaluacionGratuita = () => {
  const reviewItems = [
    "Cómo estás atrayendo prospectos.",
    "Cuánto estás perdiendo por falta de seguimiento.",
    "Qué necesita tu negocio para crecer con estructura.",
  ];

  return (
    <section className="bg-transparent py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />

        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Evaluación gratuita
            </h2>
            <p className="mb-12 text-lg md:text-xl text-gray-400">
              Si tu negocio ya funciona pero quieres más clientes constantes:
              <br />
              <span className="font-semibold text-shock-pink">
                Agenda una evaluación gratuita.
              </span>
            </p>

            <p className="mb-3 text-lg font-semibold text-gray-300">Revisamos:</p>
            <ul className="mb-12 space-y-1 text-lg text-gray-400">
              {reviewItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className="mb-12 text-xl font-bold text-teal">
              Si vemos que no podemos ayudarte, te lo decimos directo.
            </p>

            <Button
              variant="primary"
              size="lg"
              className="bg-shock-pink text-xl text-white shadow-lg"
              href="/contacto"
            >
              Agendar evaluación gratuita
            </Button>

            <p className="mt-6 text-sm text-gray-500">
              Sin compromiso. Solo claridad.
            </p>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default EvaluacionGratuita;
