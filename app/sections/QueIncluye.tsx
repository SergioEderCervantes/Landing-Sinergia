'use client'

import { useRef } from "react";
import { ensureGsap, gsap, useGSAP } from "../lib/gsapClient";
import InclusionItem from "../components/InclusionItem";
import { QueIncluyeContent } from "../content/types";

interface QueIncluyeProps {
  content: QueIncluyeContent
}

const QueIncluye = ({ content }: QueIncluyeProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  ensureGsap();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 78%",
      },
    });

    tl.from(".qi-header", { y: 40, opacity: 0, duration: 0.6, ease: "power2.out" })
      .from(".qi-bar", { scaleY: 0, duration: 0.45, stagger: 0.18, ease: "power2.inOut" }, "-=0.2")
      .from(".qi-text", { x: -16, opacity: 0, duration: 0.4, stagger: 0.18, ease: "power2.out" }, "<0.2");
  }, { scope: sectionRef });

  const subtitleLines = content.subtitle.split('\n')

  return (
    <section ref={sectionRef} className="text-white py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />

        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0">
          <header className="qi-header mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {content.title}
            </h2>
            <p className="text-lg text-gray-400 md:text-xl">
              {subtitleLines[0]}
              {subtitleLines[1] && <><br />{subtitleLines[1]}</>}
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {content.items.map((item, index) => (
              <InclusionItem key={index} item={item} />
            ))}
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default QueIncluye;
