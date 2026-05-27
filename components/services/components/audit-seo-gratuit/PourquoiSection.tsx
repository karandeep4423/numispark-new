export default function PourquoiSection() {
  return (
    <div className="mx-auto max-w-7xl w-full px-6 pt-20 sm:px-8 lg:px-12 xl:px-16">
      <p className="mb-4 text-center font-[Roboto_Mono] text-[12px] text-white">
        {"{ POURQUOI ? }"}
      </p>
      <p className="mx-auto max-w-3xl text-center font-[Neue_Montreal] text-[18px] font-medium leading-relaxed sm:text-[22px]">
        <span>
          Un audit SEO professionnel vous permet de déterminer précisément les
          freins à{" "}
        </span>
        <span className="bg-linear-to-r from-white from-39% to-[#414141] to-57% bg-clip-text text-transparent">
          votre visibilité
        </span>
        <span className="bg-[#414141] bg-clip-text text-transparent">
          , d&apos;identifier les opportunités d&apos;amélioration et
          d&apos;établir un plan d&apos;action priorisé pour propulser votre
          site en première page des résultats de recherche.
        </span>
      </p>

      <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center">
        <div className="relative h-80 w-full overflow-hidden lg:h-[450px]">
          <video
            src="/audit-seo-gratuit/audit-seo-gratuit.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#0f0f0f] to-transparent" />
        </div>
      </div>
    </div>
  );
}
