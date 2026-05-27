import Image from "next/image";
import { USE_CASES } from "@/components/services/data/ia-automatisation";

export default function UseCasesSection() {
  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#05ffe0]">
              {"{ Cas d'usage }"}
            </p>
            <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight sm:text-[40px] lg:text-[48px]">
              Où l&apos;IA crée
              <br />
              le plus de valeur.
            </h2>
          </div>

          <div className="relative hidden h-56 lg:block">
            <Image
              src="/services/ia.jpg"
              alt="IA & Automatisation"
              fill
              className="rounded-2xl object-cover opacity-70"
              unoptimized
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {USE_CASES.map((uc) => (
            <div key={uc.number} className="flex gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[5px] bg-[#222]">
                <span className="font-[Roboto_Mono] text-[18px] font-light text-white">
                  {uc.number}
                </span>
              </div>
              <div>
                <h3 className="font-[Neue_Montreal] text-[16px] font-medium leading-tight text-white sm:text-[18px]">
                  {uc.title}
                </h3>
                <p className="mt-2 font-[Neue_Montreal] text-[15px] leading-[1.7] text-[#7f7f7f] lg:text-[16px] xl:text-[17px]">
                  {uc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
