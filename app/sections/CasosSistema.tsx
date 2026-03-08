import CaseStudyCard from "../components/CaseStudyCard";
import { CasosSistemaContent } from "../content/types";

interface CasosSistemaProps {
  content: CasosSistemaContent
}

const CasosSistema = ({ content }: CasosSistemaProps) => {
  const subtitleLines = content.subtitle.split('\n')

  return (
    <section id="casos" className="text-white py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />

        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0">
          <header className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {content.title}
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">
              {subtitleLines[0]}
              {subtitleLines[1] && <><br />{subtitleLines[1]}</>}
            </p>
          </header>

          <div className="space-y-24">
            {content.cases.map((caseItem, index) => (
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
