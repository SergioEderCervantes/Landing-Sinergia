'use client'

import { useRef } from "react";
import { ensureGsap, gsap, useGSAP } from "../lib/gsapClient";
import { LoQueCambiaContent } from "../content/types";

interface LoQueCambiaProps {
  content: LoQueCambiaContent
}

const LoQueCambia = ({ content }: LoQueCambiaProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  ensureGsap();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 78%",
      },
    });

    tl.from(".stq-header", { y: 40, opacity: 0, duration: 0.6, ease: "power2.out" })
      .from(".stq-card", { scale: 0.97, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
      .from(".stq-antes-label", { x: -20, opacity: 0, duration: 0.35, ease: "power2.out" }, "-=0.2")
      .from(".stq-antes-item", { x: -28, opacity: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.15")
      .from(".stq-despues-label", { x: 20, opacity: 0, duration: 0.35, ease: "power2.out" }, "-=0.35")
      .from(".stq-despues-item", { x: 28, opacity: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.15");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="text-white py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />

        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0 space-y-14">
          <header className="stq-header text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-lavender-web">
              {content.title}
            </h2>
            <p className="text-lg text-gray-400">
              {content.subtitle}
            </p>
          </header>

          {/* Split comparison card */}
          <div className="stq-card relative grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-white/10">
            {/* Antes */}
            <div className="p-10 md:p-14 flex flex-col gap-8 bg-white/[0.03]">
              <span className="stq-antes-label text-xs font-bold uppercase tracking-[0.25em] text-gray-600">
                {content.antesLabel}
              </span>
              <ul className="space-y-5">
                {content.antesItems.map((item, i) => (
                  <li key={i} className="stq-antes-item flex items-start gap-3 text-gray-500 text-lg">
                    <span className="mt-1 text-red-500/40 text-xl leading-none">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divisor vertical con gradiente */}
            <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />

            {/* Después */}
            <div className="p-10 md:p-14 flex flex-col gap-8 bg-teal/5 relative">
              {/* Glow sutil */}
              <div className="absolute inset-0 bg-radial-[at_top_right] from-teal/10 to-transparent pointer-events-none" />
              <span className="stq-despues-label relative text-xs font-bold uppercase tracking-[0.25em] text-teal">
                {content.despuesLabel}
              </span>
              <ul className="relative space-y-5">
                {content.despuesItems.map((item, i) => (
                  <li key={i} className="stq-despues-item flex items-start gap-3 text-white text-lg font-medium">
                    <span className="mt-1 text-teal text-xl leading-none">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default LoQueCambia;
