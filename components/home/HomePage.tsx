import HeroSection from "@/components/sections/HeroSection";
import NosProjectsSection from "@/components/sections/NosProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ToolsSection from "@/components/sections/ToolsSection";
import ServicesAccordionSection from "@/components/sections/ServicesAccordionSection";
import ProcessTimelineSection from "@/components/sections/ProcessTimelineSection";
import NosAtoutsSection from "@/components/sections/NosAtoutsSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import ValuesGridSection from "./components/ValuesGridSection";
import ApproachSection from "./components/ApproachSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection
        videoSrc="/HomePage/Home-hero-section-video.mp4"
        title={
          <>
            Nous concevons
            <br />
            des produits numériques
            <br />
            <span className="text-[#05FFE0]">centrés sur l&apos;humain.</span>
          </>
        }
        description="Nous accompagnons les entreprises dans leur transformation digitale avec créativité et expertise technique."
      />

      <WhoWeAreSection />
      <ValuesGridSection />
      <ApproachSection />

      <ServicesAccordionSection />
      <ToolsSection />
      <ProcessTimelineSection />
      <NosAtoutsSection />
      <NosProjectsSection />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
}
