"use client";

import Image from "next/image";
import React from "react";
import CtaButton from "@/components/ui/CtaButton";
import ProcessTimelineSection from "@/components/sections/ProcessTimelineSection";
import NosProjectsSection from "@/components/sections/NosProjectsSection";
import FaqSection from "@/components/sections/FaqSection";
import ToolsSection from "@/components/sections/ToolsSection";

// ─── Feature card data ──────────────────────────────────────────────────────

interface FeatureCard {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FEATURES_TOP: FeatureCard[] = [
  {
    number: "01",
    title: "Architecture Cloud Scalable",
    description:
      "Une infrastructure cloud-native pensée pour absorber votre croissance : conteneurs, auto-scaling et déploiements automatisés sur AWS, GCP ou Azure.",
    icon: (
      <Image
        src="/website/cms.svg"
        alt="Architecture cloud scalable"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "02",
    title: "Multi-Tenant Sécurisé",
    description:
      "Une plateforme unique qui sert tous vos clients, avec une isolation stricte des données, des rôles granulaires et un audit trail complet.",
    icon: (
      <Image
        src="/website/user.svg"
        alt="Multi-tenant sécurisé"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "03",
    title: "Tableaux de Bord Analytics",
    description:
      "Des dashboards temps réel pour suivre l'usage, la rétention, le MRR et les indicateurs clés de votre produit — pour vos clients comme pour vos équipes.",
    icon: (
      <Image
        src="/website/seo.svg"
        alt="Tableaux de bord analytics"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "04",
    title: "API & Intégrations",
    description:
      "Des API REST et GraphQL documentées, des webhooks fiables et des intégrations natives (Stripe, HubSpot, Slack…) pour connecter votre SaaS à son écosystème.",
    icon: (
      <Image
        src="/website/load.svg"
        alt="API et intégrations"
        width={60}
        height={60}
      />
    ),
  },
];

const FEATURES_BOTTOM: FeatureCard[] = [
  {
    number: "01",
    title: "Facturation & Abonnements",
    description:
      "Mise en place complète de Stripe Billing ou Chargebee : essais, paliers, upgrades, dunning automatique et gestion fine des plans tarifaires.",
    icon: (
      <Image
        src="/website/design.svg"
        alt="Facturation et abonnements"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "02",
    title: "Performance & Disponibilité",
    description:
      "Architecture optimisée pour des temps de réponse sub-seconde, monitoring 24/7, SLA mesurés et plan de continuité éprouvé.",
    icon: (
      <Image
        src="/website/speed.svg"
        alt="Performance et disponibilité"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "03",
    title: "Évolutivité Produit",
    description:
      "Un socle technique modulaire et bien testé qui permet d'itérer vite : feature flags, A/B testing et déploiements continus sans interruption.",
    icon: (
      <Image
        src="/website/future.svg"
        alt="Évolutivité produit"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "04",
    title: "Support Continu & MCO",
    description:
      "Maintenance applicative, supervision proactive, gestion des incidents et accompagnement produit pour faire grandir votre SaaS dans la durée.",
    icon: (
      <Image
        src="/website/support.svg"
        alt="Support continu"
        width={60}
        height={60}
      />
    ),
  },
];

// ─── Sub-component: feature card ────────────────────────────────────────────

function FeatureCardItem({ card }: { card: FeatureCard }) {
  return (
    <article className="group relative min-h-85 border border-[#ececec] bg-white px-6 py-8 transition-all duration-600 hover:bg-gradient-to-b hover:from-white hover:to-[#ebebeb] sm:px-8 sm:py-10">
      <div className="flex items-start justify-between gap-6">
        <div className="text-black transition-transform duration-600 group-hover:translate-y-3">
          {card.icon}
        </div>
        <span className="font-mono text-[11px] text-black">{card.number}</span>
      </div>
      <h3 className="mt-8 font-[Neue_Montreal] text-[28px] lg:text-[30px] xl:text-[32px] font-medium leading-tight text-black transition-transform duration-600 group-hover:translate-y-3 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
        {card.title}
      </h3>
      <p className="mt-24 font-[Neue_Montreal] text-[15px] lg:text-[17px] xl:text-[18px] leading-[1.7] text-black/45 transition-all duration-600 group-hover:-translate-y-3 group-hover:text-black">
        {card.description}
      </p>
    </article>
  );
}

// ─── Use-case cards (Roman badges) ──────────────────────────────────────────

type UseCase = {
  number: string;
  title: string;
  description: string;
};

const USE_CASES: UseCase[] = [
  {
    number: "I",
    title: "SaaS B2B & outils métiers",
    description:
      "Plateformes pour équipes : CRM, gestion de projet, RH, opérations — pensées pour l'adoption et la productivité.",
  },
  {
    number: "II",
    title: "Plateformes verticales",
    description:
      "SaaS sectoriels (santé, immobilier, finance, retail) avec workflows et conformité spécifiques à votre métier.",
  },
  {
    number: "III",
    title: "Marketplaces & réseaux",
    description:
      "Plateformes de mise en relation, gestion des transactions, KYC et systèmes de notation pour développer votre communauté.",
  },
  {
    number: "IV",
    title: "Data, IA & analytics",
    description:
      "Produits orientés données : ingestion, traitement, visualisation et modèles d'IA intégrés au cœur du produit.",
  },
];

// ─── Main component ──────────────────────────────────────────────────────────

export default function SaasPage() {
  return (
    <div className="bg-white">
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative w-full flex flex-col min-h-screen overflow-hidden bg-[#0a0a12]">
        <video
          src="/bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-black/15" />

        {/* Bottom-left content */}
        <div className="relative max-w-7xl mx-auto w-full z-10 flex-1 flex flex-col justify-end px-10 md:px-20 pb-24 pt-40">
          <p className="mb-6 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-white/70">
            {"{ Développement SaaS }"}
          </p>
          <h1 className="font-[Neue_Montreal] text-[44px] font-medium sm:text-[54px] lg:text-[60px] xl:text-[68px] text-white leading-[1.05] tracking-[-0.04em] mb-6">
            Concevons votre <span className="text-[#05ffe0]">SaaS</span> de la
            première ligne de code à la croissance.
          </h1>
          <p className="max-w-2xl mb-10 font-[Neue_Montreal] text-[16px] leading-[1.7] text-white/70 sm:text-[18px]">
            De l&apos;idée au MVP, puis à la plateforme scalable utilisée par
            des milliers d&apos;utilisateurs — une équipe produit & tech à vos
            côtés.
          </p>
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4">
            <CtaButton href="/contact" variant="filled-cyan">
              Discuter de mon projet
            </CtaButton>
            <CtaButton href="/projets" variant="outline-light">
              Voir nos réalisations
            </CtaButton>
          </div>
        </div>
      </section>

      {/* ── 2. Technologies ──────────────────────────────────────────────── */}
      <section className="pt-16 sm:pt-24 bg-white">
        <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:px-12 xl:px-16">
          <div>
            <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px] xl:text-[52px]">
              Stack &amp; technologies
              <br />
              que nous maîtrisons
            </h2>
          </div>
          <div className="grid gap-4 text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-black sm:grid-cols-2 lg:grid-cols-1">
            <p>
              Nous construisons des SaaS modernes avec un socle technique
              éprouvé : Next.js, Node.js, Python, PostgreSQL et infrastructure
              cloud-native.
            </p>
            <p>
              Chaque décision technique est prise en pensant à la performance,
              à la sécurité et à la capacité d&apos;évolution de votre produit
              sur plusieurs années.
            </p>
          </div>
        </div>
        <ToolsSection />
      </section>

      {/* ── 3. Features — top 4 ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[30px] font-medium leading-tight text-black lg:text-[36px]">
            Les fondations d&apos;un SaaS qui dure
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 max-w-7xl mx-auto w-full">
          {FEATURES_TOP.map((card) => (
            <FeatureCardItem key={card.number + card.title} card={card} />
          ))}
        </div>
      </section>

      {/* ── 4. Dark CTA — Avantages ─────────────────────────────────────── */}
      <div className="bg-[#080808] mx-auto max-w-7xl w-full px-6 pt-20 pb-20 sm:px-8 lg:px-12 xl:px-16">
        <p className="mb-4 text-center font-[Roboto_Mono] text-[12px] text-white">
          {"{ Pourquoi Numispark }"}
        </p>
        <p className="bg-linear-to-r from-white from-39% to-[#414141] to-57% bg-clip-text text-transparent mx-auto max-w-3xl text-center font-[Neue_Montreal] text-[18px] font-medium leading-relaxed sm:text-[22px]">
          <span>
            Une équipe produit et technique qui pense votre SaaS comme un{" "}
          </span>
          <span className="bg-[#414141] bg-clip-text text-transparent">
            actif stratégique : qualité du code, expérience utilisateur, time
            to market et coût d&apos;exploitation maîtrisé sur le long terme.
          </span>
        </p>

        {/* Monitor mockup */}
        <div className="mx-auto mt-12 flex flex-col items-center">
          <div className="relative w-full max-w-[640px] rounded border border-white/20 p-3">
            <div className="relative overflow-hidden border border-white/20 aspect-video">
              <Image
                src="/services/saas.jpg"
                alt="Aperçu d'une interface SaaS"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
          </div>
          <div className="h-[140px] w-[140px] relative border rounded-b-xl border-white/20">
            <span className="border-b bottom-3 absolute border-white/20 w-full"></span>
          </div>
        </div>
      </div>

      {/* ── 5. Features — bottom 4 ──────────────────────────────────────── */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto w-full">
          {FEATURES_BOTTOM.map((card) => (
            <FeatureCardItem key={card.number + card.title} card={card} />
          ))}
        </div>
      </section>

      {/* ── 6. Use cases (Roman badges, dark) ───────────────────────────── */}
      <section className="bg-[#0f0f0f] py-20 text-white">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-white/60">
            {"{ Pour qui ? }"}
          </p>
          <h2 className="mb-12 font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[36px] lg:text-[44px] xl:text-[52px]">
            Les SaaS que nous{" "}
            <span className="text-[#05ffe0]">construisons.</span>
          </h2>

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

      {/* ── 7. Process Timeline ──────────────────────────────────────────── */}
      <ProcessTimelineSection />

      {/* ── 8. Nos Projets ───────────────────────────────────────────────── */}
      <NosProjectsSection />

      {/* ── 9. FAQ ───────────────────────────────────────────────────────── */}
      <FaqSection />
    </div>
  );
}
