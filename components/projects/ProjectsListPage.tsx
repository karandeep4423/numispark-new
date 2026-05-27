import NosProjectsSection from "@/components/sections/NosProjectsSection";
import FaqSection from "@/components/sections/FaqSection";

export default function ProjectsListPage() {
  return (
    <div className="mt-16">
      <h1 className="text-center my-16 text-4xl font-[Neue_Montreal] font-semibold">
        Notre Travail, Votre Image
      </h1>
      <NosProjectsSection />
      <FaqSection />
    </div>
  );
}
