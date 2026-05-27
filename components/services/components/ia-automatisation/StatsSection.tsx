import { STATS } from "@/components/services/data/ia-automatisation";
import CountUp from "./CountUp";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#8f8f8f]">
            {"{ Impact mesuré }"}
          </p>
          <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[40px] lg:text-[48px]">
            Des gains concrets, observés
            <br />
            sur nos missions IA.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className="border-t border-black/10 pt-6">
              <p className="font-[Neue_Montreal] text-[56px] font-medium leading-none tracking-[-0.02em] text-black sm:text-[72px] lg:text-[80px]">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-4 max-w-[14rem] font-[Neue_Montreal] text-[14px] leading-[1.6] text-[#7f7f7f]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
