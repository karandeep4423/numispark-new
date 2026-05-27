import ProcessTimelineSection from "@/components/sections/ProcessTimelineSection";
import NosProjectsSection from "@/components/sections/NosProjectsSection";
import FaqSection from "@/components/sections/FaqSection";
import IaHero from "./components/ia-automatisation/IaHero";
import Manifesto from "./components/ia-automatisation/Manifesto";
import CapabilitiesSection from "./components/ia-automatisation/CapabilitiesSection";
import ChatSection from "./components/ia-automatisation/ChatSection";
import StatsSection from "./components/ia-automatisation/StatsSection";
import UseCasesSection from "./components/ia-automatisation/UseCasesSection";

export default function IaAutomatisationPage() {
  return (
    <div className="bg-white">
      <IaHero />
      <Manifesto />
      <CapabilitiesSection />
      <ChatSection />
      <StatsSection />
      <UseCasesSection />
      <ProcessTimelineSection />
      <NosProjectsSection />
      <FaqSection />
    </div>
  );
}
