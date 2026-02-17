import Hero from "./sections/Hero";
import Header from "./layout/Header";
import Problematica from "./sections/Problematica";
import SistemaSinergia from "./sections/SistemaSinergia";
import CasosSistema from "./sections/CasosSistema";
import AntesDespuesSection from "./sections/AntesDespuesSection";
import ParaQuienSection from "./sections/ParaQuienSection";
import QueIncluyeSection from "./sections/QueIncluyeSection";
import EvaluacionGratuitaSection from "./sections/EvaluacionGratuitaSection";

export default function Home() {
  return (
    <>
      <main className="font-[inter] bg-linear-to-b from-white dark:from-black from-20% to-background  text-foreground">
        <Header />
        <Hero />
        <Problematica/>
        <SistemaSinergia />
        <CasosSistema />
        <AntesDespuesSection />
        <ParaQuienSection />
        <QueIncluyeSection />
        <EvaluacionGratuitaSection />
      </main>
    </>
  );
}
