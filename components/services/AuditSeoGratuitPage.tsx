import NosProjectsSection from "@/components/sections/NosProjectsSection";
import FaqSection from "@/components/sections/FaqSection";
import {
  PROBLEMS,
  ADVANTAGES,
  AUDIENCE,
} from "./data/audit-seo";
import AuditHero from "./components/audit-seo-gratuit/AuditHero";
import AuditFormSection from "./components/audit-seo-gratuit/AuditFormSection";
import CardsGrid from "./components/audit-seo-gratuit/CardsGrid";
import DarkPourquoiSection from "./components/audit-seo-gratuit/DarkPourquoiSection";
import ProcessStepsSection from "./components/audit-seo-gratuit/ProcessStepsSection";
import BottomFormSection from "./components/audit-seo-gratuit/BottomFormSection";

export default function AuditSeoGratuitPage() {
  return (
    <main className="bg-white">
      <AuditHero />
      <AuditFormSection />

      <CardsGrid
        items={PROBLEMS}
        title={
          <>
            Bénéfices immédiats
            <br />
            de notre audit SEO gratuit.
          </>
        }
      />

      <DarkPourquoiSection />

      <ProcessStepsSection />

      <CardsGrid
        items={ADVANTAGES}
        title="Pourquoi votre site n'apparaît pas en première page de Google ?"
        columns={3}
      />

      <CardsGrid
        items={AUDIENCE}
        title={
          <>
            Pour qui est cet{" "}
            <span className="text-[#05ffe0]">audit SEO complet ?</span>
          </>
        }
        dark
        columns={3}
      />

      <BottomFormSection />

      <NosProjectsSection withTopDivider />
      <FaqSection withTopDivider />
    </main>
  );
}
