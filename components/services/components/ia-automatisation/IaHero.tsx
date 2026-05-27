import CtaButton from "@/components/ui/CtaButton";
import RotatingWord from "./RotatingWord";
import NeuralNetwork from "./NeuralNetwork";

export default function IaHero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#050505]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] animate-ai-grid-shift"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,255,224,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(5,255,224,0.25) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(5,255,224,0.18), transparent 55%)",
        }}
      />
      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[420px] w-[660px] -translate-y-1/2 opacity-60 animate-ai-float lg:block">
        <NeuralNetwork />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-8 pb-24 pt-40 md:px-20">
        <p className="mb-6 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#05ffe0]">
          {"{ Automatisation & Intelligence Artificielle }"}
        </p>
        <h1 className="max-w-5xl font-[Neue_Montreal] text-[42px] font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-[54px] lg:text-[64px] xl:text-[72px]">
          Mettons l&apos;IA au service de
          <br />
          <RotatingWord />.
        </h1>
        <p className="mt-8 max-w-2xl font-[Neue_Montreal] text-[16px] leading-[1.75] text-white/65 sm:text-[18px]">
          Nous concevons des assistants intelligents, des automatisations
          métier et des modèles sur-mesure — pour libérer vos équipes des
          tâches répétitives et accélérer vos décisions.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <CtaButton href="/contact" variant="filled-cyan">
            Lancer un projet IA
          </CtaButton>
          <CtaButton href="/projets" variant="outline-light">
            Voir nos cas clients
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
