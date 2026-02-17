import { Button } from "../components/Button";

const EvaluacionGratuitaSection = () => {
  const reviewItems = [
    "Cómo estás atrayendo prospectos.",
    "Cuánto estás perdiendo por falta de seguimiento.",
    "Qué necesita tu negocio para crecer con estructura.",
  ];

  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Evaluación gratuita
        </h2>
        <p className="mb-12 text-xl md:text-2xl">
          Si tu negocio ya funciona pero quieres más clientes constantes:
          <br />
          <span className="font-semibold text-shock-pink">
            Agenda una evaluación gratuita.
          </span>
        </p>

        <p className="mb-6 text-lg font-semibold text-gray-300">Revisamos:</p>
        <ul className="mb-12 space-y-3 text-lg text-gray-400">
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
          className="bg-shock-pink px-10 py-5 text-xl text-white shadow-lg hover:bg-fuchsia-600"
        >
          Agendar evaluación gratuita
        </Button>

        <p className="mt-6 text-sm text-gray-500">
          Sin compromiso. Solo claridad.
        </p>
      </div>
    </section>
  );
};

export default EvaluacionGratuitaSection;
