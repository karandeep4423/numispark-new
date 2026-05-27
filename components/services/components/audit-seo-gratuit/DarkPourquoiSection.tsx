import RomanBadge from "../shared/RomanBadge";
import { BENEFITS } from "@/components/services/data/audit-seo";
import PourquoiSection from "./PourquoiSection";
import PillarsTabsSection from "./PillarsTabsSection";

export default function DarkPourquoiSection() {
  return (
    <section className="bg-[#0f0f0f] text-white">
      <PourquoiSection />

      <div className="h-px w-full bg-[#2a2a2a]" />

      <div className="mx-auto max-w-7xl w-full px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
        <h2 className="mb-10 text-center font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[36px] lg:text-[44px] xl:text-[52px]">
          <span className="text-[#05ffe0]">Bénéfices immédiats</span>{" "}
          de notre audit SEO gratuit
        </h2>

        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <div key={benefit.number} className="flex gap-4">
              <RomanBadge number={benefit.number} dark />
              <div>
                <h3 className="font-[Neue_Montreal] text-[16px] font-medium leading-tight text-white sm:text-[18px]">
                  {benefit.title}
                </h3>
                <p className="mt-2 font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-[#7f7f7f]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-[#2a2a2a]" />

      <PillarsTabsSection />
    </section>
  );
}
