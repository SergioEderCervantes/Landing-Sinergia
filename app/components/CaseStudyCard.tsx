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
    <div className="group relative space-y-6">
      {/* Background Number - more subtle */}
      <span className="absolute -top-16 -left-4 text-[140px] font-black text-white/5 select-none pointer-events-none transition-colors group-hover:text-white/10">
        {caseItem.number}
      </span>

      <h3 className="relative z-10 text-2xl md:text-3xl font-bold tracking-tight text-lavender-web ml-2">
        {caseItem.title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
        
        {/* Box 1: Antes (Small, Dark) */}
        <div className="md:col-span-4 lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:bg-white/[0.07] transition-colors">
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Situación Inicial
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {caseItem.antes.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-400/50">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5">
            <p className="text-[10px] text-gray-600 font-mono">ESTADO: CRÍTICO</p>
          </div>
        </div>

        {/* Box 2: Visual/Recurso (The "Image" box) */}
        <div className="md:col-span-8 lg:col-span-6 bg-slate-800/40 border border-white/10 rounded-3xl overflow-hidden relative min-h-60 group/visual">
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-shock-pink/10 to-teal/10">
                {/* Placeholder for Client Asset */}
                <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p className="text-xs font-medium text-white/30 uppercase tracking-widest">Recurso Visual Cliente</p>
                </div>
            </div>
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent opacity-0 group-hover/visual:opacity-100 transition-opacity" />
        </div>

        {/* Box 3: Resultado (High Impact) */}
        <div className="md:col-span-6 lg:col-span-3 bg-teal/10 border border-teal/20 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-teal/80">
            Impacto Real
          </h4>
          {caseItem.resultado.metrics.map((metric, i) => (
            <p key={i} className="text-4xl font-black text-teal drop-shadow-sm mb-2">
              {metric}
            </p>
          ))}
          <p className="text-xs text-teal/60 font-medium uppercase mt-2">Crecimiento medido</p>
        </div>

        {/* Box 4: Intervención (Longer, horizontal on desktop) */}
        <div className="md:col-span-6 lg:col-span-12 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-shock-pink">
              La Estrategia Sinergia
            </h4>
            <div className="flex flex-wrap gap-3">
                {caseItem.intervencion.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5">
                        {item}
                    </span>
                ))}
            </div>
          </div>
          <div className="flex-1 md:border-l md:border-white/10 md:pl-8">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Logros Clave
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
              {caseItem.resultado.description.map((desc, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal/50" /> {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyCard;
