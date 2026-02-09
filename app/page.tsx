import Image from "next/image";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <main className="bg-linear-to-b from-white dark:from-black from-40% to-background h-1500 text-foreground">
      <Hero/>
    </main>
  );
}
