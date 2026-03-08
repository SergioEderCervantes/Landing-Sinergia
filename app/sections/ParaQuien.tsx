import { Button } from "../components/Button";

const paraItems = [
  "Ya vendes pero quieres escalar.",
  "Quieres dejar de improvisar.",
  "Estás listo para invertir en crecimiento serio.",
];

const ParaQuien = () => {
  return (
    <section className="text-white py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />

        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0 flex justify-center">
          <div className="w-full max-w-2xl bg-white/5 border border-teal/20 rounded-3xl p-10 md:p-14 flex flex-col items-center text-center gap-10">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                ¿Para quién es esto?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Esto es para ti si…
              </h2>
            </div>

            <ul className="w-full space-y-4 text-left">
              {paraItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-teal text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-lg text-teal font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                className="hover:bg-teal "
                href="/contacto"
              >
                Quiero el sistema 
              </Button>
              <p className="text-sm text-gray-500">
                Sin compromiso. Si no podemos ayudarte, te lo decimos directo.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default ParaQuien;
