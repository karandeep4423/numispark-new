"use client";

import ProcessTimelineSection from "./ProcessTimelineSection";
import CtaButton from "./CtaButton";
import NosProjectsSection from "./NosProjectsSection";
import FaqSection from "./FaqSection";
import Tools from "./Tools";
import Image from "next/image";
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
    title: "Design Adaptatif pour Mobile",
    description:
      "Nous créons des designs adaptés aux mobiles qui garantissent que votre site web soit superbe et fonctionne parfaitement sur tous les appareils.",
    icon: (
      <Image
        src="/website/design.svg"
        alt="Mobile-friendly design icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "02",
    title: "Développement Optimisé pour le SEO",
    description:
      "Nos sites web sont optimisés pour les moteurs de recherche, vous aidant à obtenir un meilleur classement et à attirer davantage de trafic organique.",
    icon: (
      <Image
        src="/website/seo.svg"
        alt="SEO optimized development icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "03",
    title: "CMS Facile à Gérer",
    description:
      "Nous intégrons des plateformes CMS conviviales, vous permettant de mettre à jour et de gérer votre site web sans effort.",
    icon: (
      <Image src="/website/cms.svg" alt="CMS icon" width={60} height={60} />
    ),
  },
  {
    number: "04",
    title: "Optimisation de la Vitesse",
    description:
      "Nous mettons en œuvre des techniques d'optimisation avancées pour améliorer la rapidité et la performance de votre site web.",
    icon: (
      <Image
        src="/website/speed.svg"
        alt="Speed optimization icon"
        width={60}
        height={60}
      />
    ),
  },
];

const FEATURES_BOTTOM: FeatureCard[] = [
  {
    number: "01",
    title: "Expérience Utilisateur Améliorée",
    description:
      "Nous livrons des sites web intuitifs et engageants, conçus pour offrir une navigation fluide et une expérience utilisateur supérieure.",
    icon: (
      <Image
        src="/website/user.svg"
        alt="Enhanced user experience icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "02",
    title: "Temps de Chargement Plus Rapides",
    description:
      "Notre processus de développement garantit des vitesses de chargement optimisées, améliorant la rétention des utilisateurs et leur satisfaction.",
    icon: (
      <Image
        src="/website/load.svg"
        alt="Fast loading icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "03",
    title: "Évolutivité pour la Croissance Future",
    description:
      "Nous construisons des solutions évolutives qui se développent avec votre entreprise, assurant la robustesse de votre site même avec l'augmentation du trafic.",
    icon: (
      <Image
        src="/website/future.svg"
        alt="Scalability icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "04",
    title: "Support Dédié Après Lancement",
    description:
      "Notre équipe fournit un support et une maintenance continus afin de garantir que votre site web reste sécurisé, à jour et pleinement fonctionnel.",
    icon: (
      <Image
        src="/website/support.svg"
        alt="Dedicated support icon"
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
      <h3 className="mt-8 font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black transition-transform duration-600 group-hover:translate-y-3 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
        {card.title}
      </h3>
      <p className="mt-24 font-[Neue_Montreal] text-[14px] leading-7 text-black/45 transition-all duration-600 group-hover:-translate-y-3 group-hover:text-black">
        {card.description}
      </p>
    </article>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

import React from "react";

export default function WebCreationPage() {
  return (
    <div className="bg-white">
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative w-full flex flex-col min-h-screen overflow-hidden bg-[#0a0a12]">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/rectangle-2108.png"
          alt="Background image of website creation process"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* Navbar logo placeholder — handled by layout */}

        {/* Bottom-left content */}
        <div className="relative max-w-7xl mx-auto w-full z-10 flex-1 flex flex-col justify-end px-10 md:px-20 pb-24">
          <h1 className="font-[Neue_Montreal] text-4xl sm:text-5xl text-white leading-tight tracking-tight mb-10">
            Agence experte en création de sites web sur mesure à Caen en
            Normandie
          </h1>
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4">
            <CtaButton href="/contact" variant="filled-cyan">Consultation gratuite</CtaButton>
            <CtaButton href="/projets" variant="outline-light">Découvrez nos services</CtaButton>
          </div>
        </div>
      </section>

      {/* ── 2. Technologies ──────────────────────────────────────────────── */}
      <section className="pt-16 sm:pt-24  bg-white">
        {/* 2-col header */}
        <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:px-12 xl:px-16">
          <div>
            <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px]">
              Technologies
              <br />
              que nous maîtrisons
            </h2>
          </div>
          <div className="grid gap-4 text-[15px] leading-7 text-black sm:grid-cols-2 lg:grid-cols-1">
            <p>
              Nous concevons des sites web sur mesure, pensés pour allier
              performance, clarté et impact visuel.
            </p>
            <p>
              Chaque projet est développé avec une attention particulière portée
              à l&apos;expérience utilisateur, à la rapidité d&apos;exécution et
              à l&apos;adaptabilité sur tous les supports.
            </p>
          </div>
        </div>
        <Tools />
      </section>

      {/* ── 3. Features — top 4 ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[30px] font-medium leading-tight text-black lg:text-[36px]">
            Principales caractéristiques de nos sites web
          </h2>
        </div>
        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 max-w-7xl mx-auto w-full">
          {FEATURES_TOP.map((card) => (
            <FeatureCardItem key={card.number + card.title} card={card} />
          ))}
        </div>
      </section>

      {/* ── 4. Dark CTA — Avantages ─────────────────────────────────────── */}

      <div className="bg-[#080808] mx-auto max-w-7xl w-full px-6 pt-20 pb-20 sm:px-8 lg:px-12 xl:px-16">
        <p className="mb-4 text-center font-[Roboto_Mono] text-[12px] text-white">
          {"{ Avantages de Nous Choisir }"}
        </p>
        <p className="bg-linear-to-r from-white from-39% to-[#414141] to-57% bg-clip-text text-transparent mx-auto max-w-3xl text-center font-[Neue_Montreal] text-[18px] font-medium leading-relaxed sm:text-[22px]">
          <span>
            Découvrez les avantages à choisir Numispark comme partenaire de
            confiance pour concevoir
          </span>
          <span className="bg-[#414141] bg-clip-text text-transparent">
            , développer et faire évoluer vos projets web avec une approche sur
            mesure, pensée pour répondre à vos objectifs et valoriser votre
            activité.
          </span>
        </p>

        {/* Monitor mockup */}
        <div className="mx-auto mt-12 flex flex-col items-center">
          {/* Monitor outer frame */}
          <div className="relative w-full max-w-[640px] rounded border border-white/20 p-3">
            {/* Screen with video */}
            <div className="relative overflow-hidden  border border-white/20  aspect-video">
              <video
                src="/audit-seo-gratuit/audit-seo-gratuit.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          {/* Neck stem */}

          <div className="h-[140px] w-[140px]  relative border rounded-b-xl border-white/20">
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

      {/* ── 6. Process Timeline ──────────────────────────────────────────── */}
      <ProcessTimelineSection />

      {/* ── 7. Nos Projets ───────────────────────────────────────────────── */}
      <NosProjectsSection />

      {/* ── 8. FAQ ───────────────────────────────────────────────────────── */}
      <FaqSection />
    </div>
  );
}
