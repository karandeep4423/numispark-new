"use client";

import { useEffect, useState } from "react";
import { CAPABILITIES } from "@/components/services/data/ia-automatisation";
import CapabilityCard from "./CapabilityCard";

export default function CapabilitiesSection() {
  const [activeCap, setActiveCap] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveCap((i) => (i + 1) % CAPABILITIES.length),
      3200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#05ffe0]">
              {"{ Capacités }"}
            </p>
            <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight sm:text-[40px] lg:text-[48px]">
              Quatre piliers pour
              <br />
              déployer l&apos;IA dans votre métier.
            </h2>
          </div>
          <p className="font-[Neue_Montreal] text-[15px] leading-[1.7] text-white/60 lg:text-[17px]">
            Chaque mission combine une ou plusieurs de ces capacités, intégrées
            à votre stack existant et pilotées par des KPIs business clairs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard
              key={cap.number}
              cap={cap}
              active={i === activeCap}
              onHover={() => setActiveCap(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
