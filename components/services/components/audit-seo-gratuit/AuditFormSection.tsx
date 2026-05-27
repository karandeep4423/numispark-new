import Image from "next/image";
import { BENEFITS_CHECKLIST } from "@/components/services/data/audit-seo";
import { CheckIcon } from "./CheckIcons";
import AuditForm from "./AuditForm";

export default function AuditFormSection() {
  return (
    <section className="border-t border-[#dadada]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
        <p className="mx-auto max-w-4xl text-center font-[Neue_Montreal] text-[18px] font-medium leading-relaxed sm:text-[22px] lg:text-[28px]">
          Identifiez rapidement les problèmes techniques, les opportunités
          d&apos;optimisation on-page et les axes d&apos;amélioration off-page
          pour booster votre référencement naturel et générer plus de trafic
          qualifié.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-12 xl:px-16">
        <div>
          <div className="relative aspect-602/786 overflow-hidden">
            <Image
              src="/audit-seo-gratuit/hero-laptop.jpg"
              alt="Audit SEO gratuit"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        <div>
          <div className="mb-10">
            {BENEFITS_CHECKLIST.map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 py-5">
                  <CheckIcon />
                  <p className="font-[Neue_Montreal] text-[14px] leading-6 sm:text-[16px]">
                    {item}
                  </p>
                </div>
                <div className="h-px bg-[#d9d9d9]" />
              </div>
            ))}
          </div>
        </div>

        <div className="self-start lg:sticky lg:top-8">
          <h2 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[36px] lg:text-[44px] xl:text-[52px]">
            Demander votre audit gratuit.
          </h2>
          <p className="mt-4 font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-[#7f7f7f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
        </div>

        <AuditForm />
      </div>
      <div className="h-px bg-[#dadada]" />
    </section>
  );
}
