import CtaButton from "@/components/ui/CtaButton";

interface StatItem {
  value: string;
  description: string;
}

const STATS: StatItem[] = [
  {
    value: "+60",
    description:
      "Projets digitaux conçus, développés et livrés avec succès pour des clients allant de la startup au entreprise.",
  },
  {
    value: "10",
    description:
      "Spécialistes pluridisciplinaires qui mettent leur savoir-faire et leur créativité au service exclusif de la réussite de votre transformation digitale.",
  },
  {
    value: "100 %",
    description:
      "De nos projets bénéficient d'une rigueur méthodologique et d'une expertise confirmée, assurant une qualité de livraison irréprochable.",
  },
];

export default function WhoWeAreSection() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="my-16 flex flex-col items-center gap-6 mx-4 md:mx-10">
        <h2 className="text-[#8F8F8F] text-center font-mono text-[14px] font-normal leading-normal">
          {"{ Qui sommes nous }"}
        </h2>
        <p className="text-center font-[Neue_Montreal] text-[28px] lg:text-[40px] xl:text-[52px] font-medium leading-tight text-black">
          Depuis 3 ans, Numispark accompagne 60+ entreprises françaises dans
          leur transformation numérique.
        </p>
        <CtaButton className="mx-auto ">En savoir plus</CtaButton>
      </div>

      {/* Stats — 3 columns */}
      <div className="mt-16  grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mx-4 md:mx-10">
        {STATS.map((stat, index) => (
          <div
            key={stat.value}
            className={`group ${
              index === 0 ? "md:mb-16 " : ""
            }px-8 pt-8 pb-4 border-t-2 border-[#E0E0E0] hover:border-black transition-all duration-600 bg-[linear-gradient(127deg,transparent_0%,transparent_100%)] hover:bg-[linear-gradient(127deg,#E7ECF2_3.71%,rgba(231,236,242,0)_40.97%)]`}
          >
            <p className="font-[PP_Neue_Machina] text-[60px] lg:text-[72px] xl:text-[94px] font-light leading-16.25 text-black mb-6 transition-all duration-600 group-hover:translate-y-1">
              {stat.value}
            </p>
            <p className="font-[Neue_Montreal] transition-all duration-600 group-hover:-translate-y-1 text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-8 text-[#7F7F7F] group-hover:text-black">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
