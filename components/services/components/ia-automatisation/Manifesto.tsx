export default function Manifesto() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="mb-6 text-center font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#8f8f8f]">
          {"{ Notre conviction }"}
        </p>
        <p className="text-center font-[Neue_Montreal] text-[22px] font-medium leading-[1.4] text-black sm:text-[28px] lg:text-[34px]">
          L&apos;IA n&apos;est pas une <span className="italic">tendance</span>
          . C&apos;est un{" "}
          <span className="bg-gradient-to-r from-black to-[#bdbdbd] bg-clip-text text-transparent">
            levier opérationnel
          </span>{" "}
          qui doit produire des résultats mesurables — dès le premier mois.
        </p>
      </div>
    </section>
  );
}
