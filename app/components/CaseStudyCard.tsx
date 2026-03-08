'use client'

import { Exito } from "../model/EXITO";
import { ensureGsap, gsap, useGSAP, ScrollTrigger } from "../lib/gsapClient";
import { useRef } from "react";

interface CaseStudyCardProps {
  caseItem: Exito;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseItem }) => {
  const container = useRef(null)
  const numberDisplay = String(caseItem.number).padStart(2, "0");
  const allResults = caseItem.impact.results.flatMap((r) => Object.entries(r));
  ensureGsap();
  useGSAP(()=>{
    gsap.from(
      ".animated",{
        y: 100,
        opacity: 0,
        scrollTrigger:{
          trigger: '.animated',
          start: 'top 95%'
        }
      }
    )
  }, {scope: container})


  return (
    <div ref={container} className="group relative space-y-6">
      {/* Background Number */}
      <span className="absolute -top-16 -left-4 text-[140px] font-black text-white/5 select-none pointer-events-none transition-colors group-hover:text-white/10">
        {numberDisplay}
      </span>

      <h3 className="animated relative z-10 text-2xl md:text-3xl font-bold tracking-tight text-lavender-web ml-2">
        {caseItem.name}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">

        {/* Box 1: Situación Inicial */}
        <div className="md:col-span-4 lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:bg-white/[0.07] transition-colors">
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Situación Inicial
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">{caseItem.before}</p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5">
            <p className="text-[10px] text-gray-600 font-mono">ESTADO: CRÍTICO</p>
          </div>
        </div>

        {/* Box 2: Imagen del cliente */}
        <div className="md:col-span-8 lg:col-span-6 bg-slate-800/40 border border-white/10 rounded-3xl overflow-hidden relative min-h-60 group/visual">
          <img
            src={caseItem.hImage}
            alt={caseItem.name}
            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          />
          <img
            src={caseItem.vImage}
            alt={caseItem.name}
            className="absolute inset-0 w-full h-full object-cover block lg:hidden"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent opacity-0 group-hover/visual:opacity-100 transition-opacity" />
        </div>

        {/* Box 3: Impacto Real */}
        <div className="md:col-span-6 lg:col-span-3 bg-teal/10 border border-teal/20 rounded-3xl p-6 flex flex-col justify-center">
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-teal/80">
            Impacto Real
          </h4>
          <ul className="space-y-2">
            {allResults.map(([key], i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-teal font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-teal/50 mt-1.5 shrink-0" />
                {key}
              </li>
            ))}
          </ul>
        </div>

        {/* Box 4: Estrategia + Logros Clave */}
        <div className="md:col-span-6 lg:col-span-12 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex-1">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-shock-pink">
              La Estrategia Sinergia
            </h4>
            <div className="flex flex-wrap gap-3">
              {caseItem.services.map((item, i) => (
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
              {allResults.map(([key, value], i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal/50 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-gray-300">{key}:</strong> {value}
                  </span>
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
