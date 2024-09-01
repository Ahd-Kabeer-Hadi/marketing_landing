/* eslint-disable react/no-unescaped-entities */
import { Checklist } from "@/components/checklist";
import { Features } from "@/components/features";
import Hero from "@/components/hero";
import UnlockPotential from "@/components/unlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="max-w-7xl w-full mx-auto px-4">
        <Hero />
        <Features />
        <Checklist />
      </div>
      <UnlockPotential />
    </main>
  );
}
