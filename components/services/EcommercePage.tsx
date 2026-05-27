import ProcessTimelineSection from "@/components/sections/ProcessTimelineSection";
import NosProjectsSection from "@/components/sections/NosProjectsSection";
import FaqSection from "@/components/sections/FaqSection";
import {
  SERVICE_SECTIONS,
  ECOMMERCE_TYPE_SECTIONS,
  ECOMMERCE_PROCESS_STEPS,
} from "./data/ecommerce";
import EcommerceHero from "./components/ecommerce/EcommerceHero";
import TechnologiesSection from "./components/ecommerce/TechnologiesSection";
import ServiceSectionBlock from "./components/ecommerce/ServiceSectionBlock";
import TypeSectionBlock from "./components/ecommerce/TypeSectionBlock";
import WhyChooseSection from "./components/ecommerce/WhyChooseSection";

export default function EcommercePage() {
  return (
    <main className="bg-white">
      <EcommerceHero />
      <TechnologiesSection />

      <section>
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[30px] font-medium leading-tight text-black lg:text-[36px]">
            Nos services de développement e-commerce
          </h2>
        </div>
      </section>

      {SERVICE_SECTIONS.map((section, i) => (
        <ServiceSectionBlock
          key={section.title}
          section={section}
          isFirst={i === 0}
        />
      ))}

      <ProcessTimelineSection steps={ECOMMERCE_PROCESS_STEPS} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px] xl:text-[52px]">
            Solutions e-commerce adaptées à vos besoins
          </h2>
        </div>

        <div className="mt-10 flex flex-col">
          {ECOMMERCE_TYPE_SECTIONS.map((section) => (
            <TypeSectionBlock key={section.title} section={section} />
          ))}
        </div>
      </section>

      <WhyChooseSection />

      <NosProjectsSection />
      <FaqSection />
    </main>
  );
}
