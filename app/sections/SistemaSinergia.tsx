'use client';
import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, ensureGsap } from "../lib/gsapClient";
import { SistemaSinergiaContent } from "../content/types";

interface ProcessStepsProps {
  content: SistemaSinergiaContent
}

export default function ProcessSteps({ content }: ProcessStepsProps) {
  const sectionCont = useRef(null);

  useGSAP(() => {
    ensureGsap();

      const tl = gsap.timeline({
        scrollTrigger: {
        trigger: sectionCont.current,
        start: window.innerWidth < 768 ? 'center center' : 'top top',
        pin: true,
        end: '+=800',
        scrub: 1
        }
      });

    // Construcción dinámica de la línea de tiempo
    content.phases.forEach((_, idx) => {
      // 1. Dot (excepto el primero)
      if (idx !== 0) {
        tl.fromTo(`.step-dot-${idx}`,{
          backgroundColor: "rgba(255,255,255,0.3)"
        },
           {
          backgroundColor: "var(--shock-pink)",
        });
      }

      // 2. Título (se anima junto con el dot si no es el primero)
      tl.to(`.step-title-${idx}`, {
        color: "var(--shock-pink)",
      }, idx !== 0 ? "<" : undefined);

      // 3. Línea (rellenado)
      tl.to(`.step-line-animated-${idx}`, {
        width: "100%",
      });
    });

  }, { scope: sectionCont });

  return (
    <section ref={sectionCont} className="w-full text-white py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />
        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{content.title}</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {content.phases.map((phase, idx) => (
              <article key={phase.number} className="text-center">
                <div className="mb-6">
                  <p className="mb-2 text-xs tracking-[0.25em] text-white/45">{phase.number}</p>
                  <h3 className={`step-title-${idx} text-2xl font-semibold tracking-wide`}>
                    {phase.title}
                  </h3>
                </div>

                <div className="mx-auto mb-6 flex w-full items-center gap-5">
                  <div className={`step-dot-${idx} hidden md:block size-4 rounded-full ${idx !== 0 ? "bg-white/30" : "bg-transparent"}`} />

                  <div className="relative h-0.5 flex-1 overflow-hidden bg-white/10">
                    <div className={`step-line-animated-${idx} absolute left-0 top-0 h-full w-0 bg-shock-pink`} />
                  </div>
                </div>

                <p className="mx-auto max-w-xs text-sm leading-6 text-white/70">
                  {phase.body}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
