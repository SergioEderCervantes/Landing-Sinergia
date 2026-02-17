interface CaseStudy {
    number: string;
    title: string;
    antes: string[];
    intervencion: string[];
    resultado: {
      metrics: string[];
      description: string[];
    };
  }
  
  interface CaseStudyCardProps {
    caseItem: CaseStudy;
  }
  
  const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseItem }) => {
    return (
      <div className="relative">
        <span className="absolute -top-12 left-0 text-[120px] font-black text-gray-100/20 opacity-70 md:-left-8 md:-top-20 md:text-[200px]">
          {caseItem.number}
        </span>
        <div className="relative z-10">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight">
            {caseItem.title}
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
            <div className="md:border-r md:border-gray-200 md:pr-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                ANTES
              </h4>
              <ul className="space-y-2 text-gray-700">
                {caseItem.antes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="md:border-r md:border-gray-200 md:px-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                INTERVENCIÓN
              </h4>
              <ul className="space-y-2 text-gray-700">
                {caseItem.intervencion.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="md:pl-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal">
                RESULTADO
              </h4>
              <div className="space-y-2">
                {caseItem.resultado.metrics.map((metric, i) => (
                  <p key={i} className="text-xl font-bold text-gray-900">
                    {metric}
                  </p>
                ))}
                <ul className="space-y-2 pt-2 text-gray-700">
                  {caseItem.resultado.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CaseStudyCard;
  