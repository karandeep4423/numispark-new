import RomanBadge from "../shared/RomanBadge";
import { PROCESS_STEPS } from "@/components/services/data/audit-seo";

export default function ProcessStepsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-2 font-[Roboto_Mono] text-[12px] text-[#8f8f8f] lg:text-left">
              {"{ Comment ça marche }"}
            </p>
            <h2 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black sm:text-[36px] lg:text-[44px] xl:text-[52px]">
              Notre processus d&apos;audit SEO en 4 étapes
            </h2>
          </div>
          <p className="self-end mb-8 font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-black">
            Cet audit est 100% gratuit et sans engagement. Aucune obligation
            d&apos;achat ni de souscription à nos services.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="flex gap-4">
              <RomanBadge number={step.number} />
              <div>
                <h3 className="font-[Neue_Montreal] text-[16px] font-medium leading-tight text-black sm:text-[18px]">
                  {step.title}
                </h3>
                <p className="mt-2 font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-[#7f7f7f]">
                  {step.description}
                </p>
                <span className="mt-2 inline-block rounded-full bg-[#05ffe0] px-3 py-1 font-[Neue_Montreal] text-[12px] text-black">
                  {step.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
