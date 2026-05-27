"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import ProcessTimelineSection from "./ProcessTimelineSection";
import NosProjectsSection from "./NosProjectsSection";
import FaqSection from "./FaqSection";

/* ─────────────────────────── Data ─────────────────────────── */

const ROTATING_WORDS = [
  "vos workflows",
  "votre support",
  "vos décisions",
  "vos données",
  "votre croissance",
];

type Capability = {
  number: string;
  title: string;
  description: string;
  tag: string;
};

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "Automatisation de workflows",
    description:
      "Connectez vos outils, supprimez les tâches répétitives et orchestrez vos process métier de bout en bout — sans intervention humaine.",
    tag: "n8n · Make · Zapier",
  },
  {
    number: "02",
    title: "Chatbots & assistants IA",
    description:
      "Des agents conversationnels qui répondent à vos clients, qualifient vos leads et assistent vos équipes en s'appuyant sur votre base de connaissances.",
    tag: "RAG · GPT-4 · Claude",
  },
  {
    number: "03",
    title: "Analyse prédictive & ML",
    description:
      "Modèles de prévision, scoring de leads, détection d'anomalies — nous transformons vos données en avantage opérationnel mesurable.",
    tag: "ML · Forecasting",
  },
  {
    number: "04",
    title: "Intégrations intelligentes",
    description:
      "Vos APIs, vos CRM et vos outils internes connectés à des modèles d'IA via des intégrations robustes, monitorées et évolutives.",
    tag: "API · Webhooks · LLM",
  },
];

type ChatTurn = { from: "user" | "ai"; text: string };

const CHAT_SCRIPT: ChatTurn[] = [
  { from: "user", text: "Trouve les 3 leads les plus chauds de cette semaine." },
  {
    from: "ai",
    text: "J'ai croisé Hubspot et l'historique de visites — voici 3 prospects à recontacter aujourd'hui : Alpha Group, Lumen Studio, Norma Co.",
  },
  { from: "user", text: "Crée une relance personnalisée pour Lumen Studio." },
  {
    from: "ai",
    text: "Mail rédigé et programmé pour 9h12, basé sur leur dernier échange et la page produit consultée hier.",
  },
];

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 72, suffix: "%", label: "de tâches répétitives automatisées en moyenne" },
  { value: 4, suffix: "×", label: "plus de leads traités avec la même équipe" },
  { value: 24, suffix: "/7", label: "support client assisté par IA" },
  { value: 30, suffix: " jours", label: "pour livrer un premier workflow productif" },
];

type UseCase = {
  number: string;
  title: string;
  description: string;
};

const USE_CASES: UseCase[] = [
  {
    number: "I",
    title: "Service client augmenté",
    description:
      "Tri automatique des tickets, réponses suggérées, FAQ dynamique connectée à votre documentation interne.",
  },
  {
    number: "II",
    title: "Sales & marketing",
    description:
      "Scoring de leads, enrichissement de données, génération de contenus et relances personnalisées à grande échelle.",
  },
  {
    number: "III",
    title: "Opérations & back-office",
    description:
      "Extraction de documents, rapprochement de données, validation de factures, reporting automatisé.",
  },
  {
    number: "IV",
    title: "Produit & data",
    description:
      "Fonctionnalités IA embarquées dans votre produit : recherche sémantique, recommandations, génération assistée.",
  },
];

/* ─────────────── Hook: useInView ─────────────── */

function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options ?? { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);
  return [ref, inView];
}

/* ─────────────── Sub-components ─────────────── */

function RotatingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block align-baseline">
      <span
        key={index}
        className="inline-block bg-gradient-to-r from-[#05ffe0] to-white bg-clip-text text-transparent"
        style={{ animation: "fadeUp 0.6s ease forwards" }}
      >
        {ROTATING_WORDS[index]}
      </span>
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.12em] bg-[#05ffe0] animate-ai-blink" />
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </span>
  );
}

function NeuralNetwork() {
  const nodes = [
    { x: 60, y: 80 },
    { x: 60, y: 180 },
    { x: 60, y: 280 },
    { x: 240, y: 60 },
    { x: 240, y: 160 },
    { x: 240, y: 260 },
    { x: 240, y: 360 },
    { x: 420, y: 120 },
    { x: 420, y: 240 },
    { x: 600, y: 180 },
  ];
  const edges: [number, number][] = [
    [0, 3], [0, 4], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [2, 6],
    [3, 7], [4, 7], [4, 8], [5, 7], [5, 8], [6, 8],
    [7, 9], [8, 9],
  ];

  return (
    <svg
      viewBox="0 0 660 420"
      className="h-full w-full"
      role="img"
      aria-label="Réseau neuronal animé"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#05ffe0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#05ffe0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const n1 = nodes[a];
        const n2 = nodes[b];
        return (
          <line
            key={i}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="#05ffe0"
            strokeWidth="1"
            strokeOpacity="0.45"
            strokeDasharray="6 12"
            className="animate-ai-flow"
            style={{ animationDelay: `${(i % 5) * 0.4}s` }}
          />
        );
      })}

      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r="14"
            fill="url(#nodeGlow)"
            className="animate-ai-pulse"
            style={{ transformOrigin: `${n.x}px ${n.y}px`, animationDelay: `${(i % 4) * 0.3}s` }}
          />
          <circle cx={n.x} cy={n.y} r="4" fill="#05ffe0" />
        </g>
      ))}
    </svg>
  );
}

function ChatDemo() {
  const [containerRef, inView] = useInView<HTMLDivElement>({ threshold: 0.25 });
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const run = (i: number) => {
      if (cancelled || i >= CHAT_SCRIPT.length) {
        timeouts.push(
          setTimeout(() => {
            if (cancelled) return;
            setVisibleCount(0);
            run(0);
          }, 4000)
        );
        return;
      }
      const turn = CHAT_SCRIPT[i];
      const delay = turn.from === "ai" ? 1200 : 600;

      if (turn.from === "ai") {
        setTyping(true);
        timeouts.push(
          setTimeout(() => {
            if (cancelled) return;
            setTyping(false);
            setVisibleCount(i + 1);
            timeouts.push(setTimeout(() => run(i + 1), 1400));
          }, delay)
        );
      } else {
        timeouts.push(
          setTimeout(() => {
            if (cancelled) return;
            setVisibleCount(i + 1);
            timeouts.push(setTimeout(() => run(i + 1), 1200));
          }, delay)
        );
      }
    };

    run(0);
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [inView]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#111]/80 p-5 backdrop-blur-sm shadow-[0_30px_80px_rgba(5,255,224,0.08)]"
    >
      <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-3">
        <span className="h-2 w-2 rounded-full bg-[#05ffe0] animate-ai-pulse" />
        <span className="font-[Roboto_Mono] text-[11px] uppercase tracking-wider text-white/60">
          Numispark · Assistant IA
        </span>
      </div>

      <div className="flex min-h-[260px] flex-col gap-3">
        {CHAT_SCRIPT.slice(0, visibleCount).map((turn, i) => (
          <div
            key={i}
            className={`flex ${
              turn.from === "user" ? "justify-end" : "justify-start"
            }`}
            style={{ animation: "chatIn 0.35s ease forwards" }}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 font-[Neue_Montreal] text-[14px] leading-[1.5] ${
                turn.from === "user"
                  ? "bg-white/10 text-white"
                  : "bg-[#05ffe0] text-black"
              }`}
            >
              {turn.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1.5 rounded-2xl bg-[#05ffe0]/15 px-4 py-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#05ffe0] animate-ai-pulse" />
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#05ffe0] animate-ai-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#05ffe0] animate-ai-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes chatIn {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function CapabilityCard({
  cap,
  active,
  onHover,
}: {
  cap: Capability;
  active: boolean;
  onHover: () => void;
}) {
  return (
    <article
      onMouseEnter={onHover}
      className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 ${
        active
          ? "border-[#05ffe0]/60 bg-[#0a0a0a] shadow-[0_0_60px_-20px_rgba(5,255,224,0.45)]"
          : "border-white/10 bg-[#0a0a0a]/60"
      }`}
    >
      {/* Animated grid background */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ${
          active ? "opacity-100" : "group-hover:opacity-100"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(5,255,224,0.18) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-[Roboto_Mono] text-[11px] uppercase tracking-wider text-[#05ffe0]">
            {cap.tag}
          </span>
          <span className="font-[Roboto_Mono] text-[11px] text-white/40">
            {cap.number}
          </span>
        </div>
        <h3 className="mt-6 font-[Neue_Montreal] text-[22px] font-medium leading-tight text-white sm:text-[26px]">
          {cap.title}
        </h3>
        <p className="mt-3 font-[Neue_Montreal] text-[15px] leading-[1.7] text-white/55">
          {cap.description}
        </p>
      </div>
    </article>
  );
}

/* ─────────────────────────── Main ─────────────────────────── */

export default function IaAutomatisationPage() {
  const [activeCap, setActiveCap] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveCap((i) => (i + 1) % CAPABILITIES.length),
      3200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-white">
      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#050505]">
        {/* Animated grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18] animate-ai-grid-shift"
          style={{
            backgroundImage:
              "linear-gradient(rgba(5,255,224,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(5,255,224,0.25) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(5,255,224,0.18), transparent 55%)",
          }}
        />
        {/* Floating neural net (decorative) */}
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

      {/* ── 2. Manifesto ─────────────────────────────────────────────── */}
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

      {/* ── 3. Capabilities (auto-cycling) ──────────────────────────── */}
      <section className="bg-[#050505] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#05ffe0]">
                {"{ Capacités }"}
              </p>
              <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight sm:text-[40px] lg:text-[48px]">
                Quatre piliers pour
                <br />
                déployer l&apos;IA dans votre métier.
              </h2>
            </div>
            <p className="font-[Neue_Montreal] text-[15px] leading-[1.7] text-white/60 lg:text-[17px]">
              Chaque mission combine une ou plusieurs de ces capacités, intégrées
              à votre stack existant et pilotées par des KPIs business clairs.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {CAPABILITIES.map((cap, i) => (
              <CapabilityCard
                key={cap.number}
                cap={cap}
                active={i === activeCap}
                onHover={() => setActiveCap(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Chat demo + neural visual ────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#050505] py-24 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(5,255,224,0.12), transparent 50%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20 lg:px-12 xl:px-16">
          <div>
            <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#05ffe0]">
              {"{ Démo · Assistant IA }"}
            </p>
            <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight sm:text-[40px] lg:text-[48px]">
              Vos collaborateurs,
              <br />
              <span className="bg-gradient-to-r from-white to-[#05ffe0] bg-clip-text text-transparent">
                augmentés par l&apos;IA.
              </span>
            </h2>
            <p className="mt-6 max-w-md font-[Neue_Montreal] text-[15px] leading-[1.7] text-white/60 lg:text-[17px]">
              Un assistant connecté à vos données qui répond, agit et déclenche
              des workflows. Pas un gadget — un copilote intégré à vos outils
              du quotidien.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Connecté à votre CRM, vos docs, vos APIs",
                "Réponses sourcées et traçables",
                "Exécute des actions, ne se contente pas de parler",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-[Neue_Montreal] text-[15px] text-white/75"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#05ffe0]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ChatDemo />
          </div>
        </div>
      </section>

      {/* ── 5. Stats (animated count-up) ────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#8f8f8f]">
              {"{ Impact mesuré }"}
            </p>
            <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[40px] lg:text-[48px]">
              Des gains concrets, observés
              <br />
              sur nos missions IA.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="border-t border-black/10 pt-6"
              >
                <p className="font-[Neue_Montreal] text-[56px] font-medium leading-none tracking-[-0.02em] text-black sm:text-[72px] lg:text-[80px]">
                  <CountUp end={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-4 max-w-[14rem] font-[Neue_Montreal] text-[14px] leading-[1.6] text-[#7f7f7f]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Use cases ────────────────────────────────────────────── */}
      <section className="bg-[#050505] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#05ffe0]">
                {"{ Cas d'usage }"}
              </p>
              <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight sm:text-[40px] lg:text-[48px]">
                Où l&apos;IA crée
                <br />
                le plus de valeur.
              </h2>
            </div>

            {/* Decorative image — half-faded */}
            <div className="relative hidden h-56 lg:block">
              <Image
                src="/services/ia.jpg"
                alt="IA & Automatisation"
                fill
                className="rounded-2xl object-cover opacity-70"
                unoptimized
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>
          </div>

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {USE_CASES.map((uc) => (
              <div key={uc.number} className="flex gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[5px] bg-[#222]">
                  <span className="font-[Roboto_Mono] text-[18px] font-light text-white">
                    {uc.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-[Neue_Montreal] text-[16px] font-medium leading-tight text-white sm:text-[18px]">
                    {uc.title}
                  </h3>
                  <p className="mt-2 font-[Neue_Montreal] text-[15px] leading-[1.7] text-[#7f7f7f] lg:text-[16px] xl:text-[17px]">
                    {uc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Process ──────────────────────────────────────────────── */}
      <ProcessTimelineSection />

      {/* ── 8. Projets ──────────────────────────────────────────────── */}
      <NosProjectsSection />

      {/* ── 9. FAQ ─────────────────────────────────────────────────── */}
      <FaqSection />
    </div>
  );
}
