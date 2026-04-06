"use client";

import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Atout {
  titlePrefix: string;
  accent: string;
  subtitle: string;
  bullets: readonly string[];
  activeCircle: "outer" | "middle" | "inner";
}

// ─── Default data ─────────────────────────────────────────────────────────────
const DEFAULT_ATOUTS: readonly Atout[] = [
  {
    titlePrefix: "Une expérience",
    accent: "multisectorielle",
    subtitle:
      "Nous accompagnons des entreprises de toutes tailles et de tous secteurs",
    bullets: [
      "Startups et scale-ups",
      "TPE et PME en croissance",
      "Grands comptes et institutions",
      "E-commerce et retail",
      "Services B2B et B2C",
      "Education et formation",
      "Tourisme et loisirs",
      "Coaching et développement personnel",
    ],
    activeCircle: "outer",
  },
  {
    titlePrefix: "Une approche",
    accent: "collaborative",
    subtitle:
      "Nous privilégions une relation de proximité et de transparence avec nos clients",
    bullets: [
      "Compréhension approfondie de vos objectifs business",
      "Co-construction de la stratégie digitale",
      "Communication claire et régulière",
      "Processus agile et itératif",
      "Suivi détaillé de l'avancement du projet",
    ],
    activeCircle: "middle",
  },
  {
    titlePrefix: "Un accompagnement de",
    accent: "A à Z",
    subtitle: "Nous vous accompagnons à chaque étape de votre projet digital",
    bullets: [
      "Définition de la stratégie",
      "Conception de l'expérience utilisateur",
      "Développement technique",
      "Tests et validation",
      "Déploiement et mise en production",
      "Formation et support post-lancement",
    ],
    activeCircle: "inner",
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────
interface NosAtoutsSectionProps {
  atouts?: readonly Atout[];
}

export default function NosAtoutsSection({
  atouts = DEFAULT_ATOUTS,
}: NosAtoutsSectionProps) {
  const [activeAtoutIndex, setActiveAtoutIndex] = useState(0);
  const atoutsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateAtoutsSection = () => {
      if (!atoutsSectionRef.current) return;

      const rect = atoutsSectionRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) {
        setActiveAtoutIndex(0);
        return;
      }

      const progress = Math.max(
        0,
        Math.min(0.9999, -rect.top / scrollableDistance),
      );
      const nextIndex = Math.min(
        atouts.length - 1,
        Math.floor(progress * atouts.length),
      );

      setActiveAtoutIndex((currentIndex) =>
        currentIndex === nextIndex ? currentIndex : nextIndex,
      );
    };

    updateAtoutsSection();
    window.addEventListener("scroll", updateAtoutsSection, { passive: true });
    window.addEventListener("resize", updateAtoutsSection);

    return () => {
      window.removeEventListener("scroll", updateAtoutsSection);
      window.removeEventListener("resize", updateAtoutsSection);
    };
  }, [atouts.length]);

  const activeAtout = atouts[activeAtoutIndex];

  return (
    <section className="bg-[#080808]">
      <div ref={atoutsSectionRef} className="relative h-[230vh] md:h-[240vh]">
        <div className="sticky top-4 h-[calc(100vh-32px)] sm:top-6 sm:h-[calc(100vh-48px)]">
          <div className="relative mx-auto h-full w-full max-w-295 overflow-hidden rounded-[28px] border border-white/6 bg-[linear-gradient(180deg,#151515_0%,#0d0d0d_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_34%),radial-gradient(circle_at_73%_42%,rgba(255,255,255,0.02),transparent_44%)] opacity-80" />

            <div className="relative grid h-full grid-cols-1 gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[380px_1fr] lg:gap-4 lg:px-12 lg:py-12 xl:grid-cols-[420px_1fr] xl:px-14 xl:py-14">
              {/* Left column: text */}
              <div className="flex h-full flex-col justify-between lg:py-4">
                <div className="relative min-h-37.5 sm:min-h-42.5 lg:min-h-52.5">
                  {atouts.map((atout, index) => {
                    const isActive = index === activeAtoutIndex;

                    return (
                      <div
                        key={atout.accent}
                        className={`absolute inset-0 transition-all duration-500 ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "pointer-events-none translate-y-4 opacity-0"
                        }`}
                      >
                        <p className="mb-5 font-mono text-[11px] tracking-[0.04em] text-[#C8C8C8]">
                          {"{ Nos atouts }"}
                        </p>
                        <h2 className="max-w-105 font-[Neue_Montreal] text-[30px] font-medium leading-[0.98] tracking-[-0.03em] text-white sm:text-[34px] lg:text-[38px] xl:text-[40px]">
                          {atout.titlePrefix}{" "}
                          <span className="text-[#05FFE0]">{atout.accent}</span>
                        </h2>
                        <p className="mt-4 max-w-90 font-[Neue_Montreal] text-[13px] leading-[1.65] text-[#ACACAC] sm:text-[14px] lg:max-w-82.5 xl:max-w-90">
                          {atout.subtitle}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="relative min-h-55 pt-4 sm:min-h-62.5 lg:min-h-70 lg:pt-0">
                  <div className="mb-5 h-px w-full max-w-72.5 bg-white/30" />
                  {atouts.map((atout, index) => {
                    const isActive = index === activeAtoutIndex;

                    return (
                      <ul
                        key={`${atout.accent}-list`}
                        className={`absolute inset-x-0 top-6 max-w-75 space-y-2 font-mono text-[11px] leading-[1.8] text-[#B7B7B7] transition-all duration-500 sm:text-[12px] ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "pointer-events-none translate-y-4 opacity-0"
                        }`}
                      >
                        {atout.bullets.map((bullet) => (
                          <li key={bullet}>• {bullet}</li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              </div>

              {/* Right column: concentric circles */}
              <div className="relative mb-10 flex min-h-75 items-center justify-center lg:min-h-0 lg:justify-end">
                <div className="relative h-[min(55vw,420px)] w-[min(55vw,420px)] sm:h-[min(48vw,460px)] sm:w-[min(48vw,460px)] lg:-mr-8 lg:h-[min(70vh,520px)] lg:w-[min(70vh,520px)] xl:-mr-2.5">
                  {(
                    [
                      { key: "outer", size: "h-full w-full", zIndex: 10 },
                      { key: "middle", size: "h-[56%] w-[56%]", zIndex: 20 },
                      { key: "inner", size: "h-[21%] w-[21%]", zIndex: 30 },
                    ] as const
                  ).map((circle) => {
                    const isActive = activeAtout.activeCircle === circle.key;

                    return (
                      <div
                        key={circle.key}
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border transition-all duration-700 ${circle.size} ${
                          isActive
                            ? "border-[#05FFE0] shadow-[0_0_24px_0_rgba(5,255,224,0.24)]"
                            : "border-white/16"
                        }`}
                        style={{
                          zIndex: circle.zIndex,
                          background: isActive
                            ? "linear-gradient(180deg, rgba(5,255,224,0.21) 0%, rgba(3,153,134,0.04) 70%, rgba(3,153,134,0) 100%)"
                            : "transparent",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
