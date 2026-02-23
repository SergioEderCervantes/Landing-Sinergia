import Hero from "./sections/Hero";
import Header from "./layout/Header";
import Problematica from "./sections/Problematica";
import SistemaSinergia from "./sections/SistemaSinergia";
import CasosSistema from "./sections/CasosSistema";
import StatusAndQualification from "./sections/StatusAndQualification";
import QueIncluye from "./sections/QueIncluye";
import EvaluacionGratuita from "./sections/EvaluacionGratuita";

export default function Home() {
  return (
    <>
      <main className="font-[inter] bg-linear-to-b from-white dark:from-black from-20% to-background  text-foreground">
        <Header />
        <Hero />
        <Problematica/>
        <SistemaSinergia />
        <CasosSistema />
        <StatusAndQualification />
        <QueIncluye />
        <EvaluacionGratuita />
      </main>
    </>
  );
}
