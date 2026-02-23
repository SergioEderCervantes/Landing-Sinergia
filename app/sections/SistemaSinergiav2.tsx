'use client';
import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, ensureGsap } from "../lib/gsapClient";

type Step = {
  number: string;
  title: string;
  body: string;
};

const stepsData: Step[] = [
  {
    number: "01",
    title: "Atracción estratégica",
    body: `Usamos Google Ads y Facebook Ads en Aguascalientes para ponerte frente a personas que ya están buscando lo que tú vendes.`,
  },
  {
    number: "02",
    title: "Página que convierte",
    body: `Creamos una página clara que explica tu servicio sin confundir, genera confianza y lleva directo a agendar o cotizar.`,
  },
  {
    number: "03",
    title: "Seguimiento automático",
    body: `Implementamos seguimiento por WhatsApp para que ningún prospecto se pierda: respuestas inmediatas, confirmación de citas y recordatorios automáticos.`,
  },
];
type ProcessStepsProps = {
  title?: string;
  steps?: Step[];

};

export default function ProcessSteps({
  title = "El Sistema Sinergia",
  steps = stepsData,
}: ProcessStepsProps) {
  const sectionCont = useRef(null);

  useGSAP(() => {
    ensureGsap();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionCont.current,
        start: 'top 20%',
        pin: true,
        end: '+=800',
        scrub: true
      }
    });

    // Construcción dinámica de la línea de tiempo
    steps.forEach((_, idx) => {
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Construimos un sistema de ventas completo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step, idx) => (
              <article key={step.number} className="text-center">
                <div className="mb-6">
                  <p className="mb-2 text-xs tracking-[0.25em] text-white/45">{step.number}</p>
                  <h3 className={`step-title-${idx} text-2xl font-semibold tracking-wide`}>
                    {step.title}
                  </h3>
                </div>

                <div className="mx-auto mb-6 flex w-full items-center gap-5">
                  <div className={`step-dot-${idx} h-3 w-3 rounded-full ${idx !== 0 ? "bg-white/30" : "bg-transparent"}`} />

                  <div className="relative h-0.5 flex-1 overflow-hidden bg-white/10">
                    <div className={`step-line-animated-${idx} absolute left-0 top-0 h-full w-0 bg-shock-pink`} />
                  </div>
                </div>

                <p className="mx-auto max-w-xs text-sm leading-6 text-white/70">
                  {step.body}
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