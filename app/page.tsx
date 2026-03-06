import Hero from "./sections/Hero";
import Header from "./layout/Header";
import Problematica from "./sections/Problematica";
import CasosSistema from "./sections/CasosSistema";
import LoQueCambia from "./sections/LoQueCambia";
import ParaQuien from "./sections/ParaQuien";
import QueIncluye from "./sections/QueIncluye";
import EvaluacionGratuita from "./sections/EvaluacionGratuita";
import ProcessSteps from "./sections/SistemaSinergia";


export default function Home() {
  return (
    <>
      <main className="font-[inter] bg-linear-to-b from-white dark:from-black from-10% to-background  text-foreground">
        <Header />
        <Hero />
        <Problematica/>
        {/* <SistemaSinergia /> */}
        <ProcessSteps/>
        <CasosSistema />
        <LoQueCambia />
        <ParaQuien />
        <QueIncluye />
        <EvaluacionGratuita />
      </main>
    </>
  );
}
