import CaseStudyCard from "../components/CaseStudyCard";
import { CASOS } from "../model/EXITO";

const CasosSistema = () => {
  return (
    <section id="casos" className="text-white py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />

        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0">
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
            {CASOS.map((caseItem, index) => (
              <CaseStudyCard key={index} caseItem={caseItem} />
            ))}
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default CasosSistema;
