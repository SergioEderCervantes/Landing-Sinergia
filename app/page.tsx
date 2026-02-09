import Image from "next/image";
import Hero from "./sections/Hero";
import Header from "./layout/Header";
import Problematica from "./sections/Problematica";

export default function Home() {
  return (
    <>
      <main className="font-[inter] bg-linear-to-b from-white dark:from-black from-40% to-background h-1500 text-foreground">
        <Header />
        <Hero />
        <Problematica/>
      </main>
    </>
  );
}
