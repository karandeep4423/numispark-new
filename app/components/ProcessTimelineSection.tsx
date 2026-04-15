"use client";

import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// ─── Default steps ────────────────────────────────────────────────────────────
const DEFAULT_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Découverte et Analyse",
    description:
      "Nous collaborons étroitement pour comprendre vos objectifs, défis et ambitions. Cette phase inclut l'analyse de votre marché, de votre concurrence et des tendances actuelles pour identifier les meilleures opportunités.",
  },
  {
    number: "02",
    title: "Conception UX et Prototypage",
    description:
      "Transformation des idées en plans structurés avec des prototypes pour visualiser le projet final et assurer une clarté stratégique. Cette approche permet d'affiner l'expérience utilisateur et d'optimiser les parcours de conversion.",
  },
  {
    number: "03",
    title: "Développement Agile",
    description:
      "Transformation des concepts en solutions entièrement fonctionnelles grâce à un design harmonieux et un développement robuste pour une performance optimale. Nous travaillons par itérations, vous permettant de suivre l'avancement et d'ajuster le projet en cours de route.",
  },
  {
    number: "04",
    title: "Tests et Déploiement",
    description:
      "Réalisation de tests rigoureux pour s'assurer que votre solution est exempte de problèmes, optimisée et prête pour un lancement sans accrocs. Nous vérifions la compatibilité cross-navigateurs et cross-devices, la sécurité et les performances.",
  },
  {
    number: "05",
    title: "Maintenance et Évolution",
    description:
      "Déploiement avec précision et support post-lancement pour maintenir un fonctionnement fluide et efficace, avec des mises à jour régulières et des recommandations d'amélioration continue.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
interface ProcessTimelineSectionProps {
  steps?: ProcessStep[];
}

export default function ProcessTimelineSection({
  steps = DEFAULT_STEPS,
}: ProcessTimelineSectionProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [lineProgress, setLineProgress] = useState(0);
  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const processTimelineRef = useRef<HTMLDivElement>(null);
  const maxLineProgressRef = useRef(0);
  const maxActiveStepIndexRef = useRef(-1);

  useEffect(() => {
    const updateTimeline = () => {
      if (!processTimelineRef.current) return;

      const rect = processTimelineRef.current.getBoundingClientRect();
      const sweepLine = window.innerHeight * 0.22;
      const progressHeight = Math.max(0, Math.min(rect.height, sweepLine - rect.top));
      const nextProgress = rect.height === 0 ? 0 : progressHeight / rect.height;
      const revealedProgress = Math.max(maxLineProgressRef.current, nextProgress);

      if (revealedProgress > maxLineProgressRef.current + 0.001) {
        maxLineProgressRef.current = revealedProgress;
        setLineProgress(revealedProgress);
      }

      let nextActiveIndex = -1;
      markerRefs.current.forEach((marker, index) => {
        if (!marker) return;
        const markerRect = marker.getBoundingClientRect();
        const markerOffset = markerRect.top - rect.top + markerRect.height / 2;
        if (progressHeight >= markerOffset) {
          nextActiveIndex = index;
        }
      });

      const revealedStepIndex = Math.max(maxActiveStepIndexRef.current, nextActiveIndex);
      if (revealedStepIndex > maxActiveStepIndexRef.current) {
        maxActiveStepIndexRef.current = revealedStepIndex;
        setActiveStepIndex(revealedStepIndex);
      }
    };

    updateTimeline();
    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);

    return () => {
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  return (
    <section className="relative bg-[#080808] py-24 w-full">
      {/* Sticky globe background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ overflow: "clip" }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/globe.svg"
            alt=""
            className="w-175 h-175 opacity-[0.07]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl  w-full mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="font-mono text-xs text-[#8F8F8F] tracking-widest mb-6">
            {"{ Processus de collaboration }"}
          </p>
          <h2 className="text-white font-[Neue_Montreal] text-[32px] md:text-[52px] font-medium leading-[1.2] md:leading-16.25">
            Comment nous{" "}
            <span className="text-[#05FFE0] italic">construisons ensemble</span>
            <br />
            chaque étape de votre projet.
          </h2>
        </div>

        {/* Timeline */}
        <div ref={processTimelineRef} className="relative">
          {/* Dim background line */}
          <div
            className="absolute inset-y-0 left-4 md:left-1/2 md:-translate-x-1/2 w-3 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #2A2A2A 0px, #2A2A2A 3px, transparent 3px, transparent 11px)",
            }}
          />
          {/* Bright progress line */}
          <div
            className="absolute top-0 left-4 md:left-1/2 md:-translate-x-1/2 w-3 pointer-events-none"
            style={{
              height: `${lineProgress * 100}%`,
              backgroundImage:
                "repeating-linear-gradient(to bottom, #05FFE0 0px, #05FFE0 3px, transparent 3px, transparent 11px)",
            }}
          />

          {steps.map((step, index) => {
            const isRight = index % 2 === 0;
            const isActive = index <= activeStepIndex;

            const card = (
              <div
                className={`w-full max-w-95 bg-[#0D0D0D] border border-[#1E1E1E] rounded-xl p-6 transition-all duration-700 ${
                  isActive ? "opacity-100" : "opacity-20"
                }`}
              >
                <p
                  className={`font-mono text-[11px] tracking-widest mb-3 transition-colors duration-700 ${
                    isActive ? "text-[#05FFE0]" : "text-[#333]"
                  }`}
                >
                  ETAPE {step.number}
                </p>
                <h3
                  className={`font-[Neue_Montreal] text-[18px] font-medium mb-3 leading-snug transition-colors duration-700 ${
                    isActive ? "text-white" : "text-[#333]"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`font-[Neue_Montreal] text-[13px] leading-relaxed transition-colors duration-700 ${
                    isActive ? "text-[#ACACAC]" : "text-[#292929]"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            );

            return (
              <div key={index} className="flex items-start py-8 md:py-16">
                {/* Left — hidden on mobile, shows card for even steps on desktop */}
                <div className="hidden md:flex flex-1 pr-6 justify-end">
                  {!isRight && card}
                </div>

                {/* Diamond marker */}
                <div className="w-8 md:w-14 flex justify-center items-start shrink-0 relative z-10 pt-1 md:pt-6">
                  <div
                    ref={(el) => { markerRefs.current[index] = el; }}
                    className="relative flex h-8 w-8 items-center justify-center"
                  >
                    <div className="absolute h-5 w-5 rotate-45 bg-[#080808]" />
                    <div
                      className={`relative z-10 w-3 h-3 rotate-45 transition-all duration-700 ${
                        isActive
                          ? "bg-[#05FFE0] shadow-[0_0_12px_3px_rgba(5,255,224,0.5)]"
                          : "bg-[#2A2A2A]"
                      }`}
                    />
                  </div>
                </div>

                {/* Right — full width on mobile, only if isRight on desktop */}
                <div className="flex-1 pl-4 md:pl-6">
                  <div className="md:hidden">{card}</div>
                  <div className="hidden md:block">{isRight ? card : null}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
