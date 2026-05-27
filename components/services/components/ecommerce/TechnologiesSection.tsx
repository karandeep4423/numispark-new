import ToolsSection from "@/components/sections/ToolsSection";

export default function TechnologiesSection() {
  return (
    <section className="border-t border-[#efefef] bg-white pt-16">
      <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:px-12 xl:px-16">
        <div>
          <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px] xl:text-[52px]">
            Technologies que nous maîtrisons
          </h2>
        </div>
        <div className="grid gap-4 text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-black sm:grid-cols-2 lg:grid-cols-1">
          <p>
            Chez Numispark, nous développons des solutions e-commerce sur-mesure
            qui transforment vos visiteurs en clients fidèles et boostent votre
            chiffre d&apos;affaires.
          </p>
          <p>
            Nous maîtrisons les principales plateformes du marché pour vous
            proposer la solution la mieux adaptée à vos besoins et ambitions.
          </p>
        </div>
      </div>
      <ToolsSection />
    </section>
  );
}
