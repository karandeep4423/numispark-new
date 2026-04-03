"use client";

import ProcessTimelineSection from "./ProcessTimelineSection";
import NosProjectsSection from "./NosProjectsSection";
import FaqSection from "./FaqSection";
import Tools from "./Tools";
// ─── Feature card data ──────────────────────────────────────────────────────

interface FeatureCard {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// SVG icons extracted from Figma illustrations
const IconMobile = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="20" y="4" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);
const IconSeo = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 45 L35 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M35 25 L45 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M38 15 L45 15 L45 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconCms = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="30" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M30 16 L30 22 M30 38 L30 44 M16 30 L22 30 M38 30 L44 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconSpeed = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 42 L20 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 42 L30 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M40 42 L40 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="44" x2="46" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconUX = () => (
  <svg width="60" height="60" viewBox="none 0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="38" cy="22" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M14 44 C14 36 30 34 30 34 C30 34 46 36 46 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);
const IconLoad = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 22 C20 16 40 16 40 22 C40 28 28 30 28 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M36 38 C36 32 20 32 20 38 C20 44 32 42 32 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="22" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="38" cy="45" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);
const IconScalability = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="14" y1="44" x2="46" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="44" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="44" x2="30" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="40" y1="44" x2="40" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconSupport = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 24 C22 18 38 18 38 24 C38 32 30 34 30 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M26 42 C26 38 34 38 34 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="30" cy="46" r="1.5" fill="currentColor" />
  </svg>
);

const FEATURES_TOP: FeatureCard[] = [
  {
    number: "01",
    title: "Design Adaptatif pour Mobile",
    description:
      "Nous créons des designs adaptés aux mobiles qui garantissent que votre site web soit superbe et fonctionne parfaitement sur tous les appareils.",
    icon: <IconMobile />,
  },
  {
    number: "02",
    title: "Développement Optimisé pour le SEO",
    description:
      "Nos sites web sont optimisés pour les moteurs de recherche, vous aidant à obtenir un meilleur classement et à attirer davantage de trafic organique.",
    icon: <IconSeo />,
  },
  {
    number: "03",
    title: "CMS Facile à Gérer",
    description:
      "Nous intégrons des plateformes CMS conviviales, vous permettant de mettre à jour et de gérer votre site web sans effort.",
    icon: <IconCms />,
  },
  {
    number: "04",
    title: "Optimisation de la Vitesse",
    description:
      "Nous mettons en œuvre des techniques d'optimisation avancées pour améliorer la rapidité et la performance de votre site web.",
    icon: <IconSpeed />,
  },
];

const FEATURES_BOTTOM: FeatureCard[] = [
  {
    number: "01",
    title: "Expérience Utilisateur Améliorée",
    description:
      "Nous livrons des sites web intuitifs et engageants, conçus pour offrir une navigation fluide et une expérience utilisateur supérieure.",
    icon: <IconUX />,
  },
  {
    number: "02",
    title: "Temps de Chargement Plus Rapides",
    description:
      "Notre processus de développement garantit des vitesses de chargement optimisées, améliorant la rétention des utilisateurs et leur satisfaction.",
    icon: <IconLoad />,
  },
  {
    number: "03",
    title: "Évolutivité pour la Croissance Future",
    description:
      "Nous construisons des solutions évolutives qui se développent avec votre entreprise, assurant la robustesse de votre site même avec l'augmentation du trafic.",
    icon: <IconScalability />,
  },
  {
    number: "04",
    title: "Support Dédié Après Lancement",
    description:
      "Notre équipe fournit un support et une maintenance continus afin de garantir que votre site web reste sécurisé, à jour et pleinement fonctionnel.",
    icon: <IconSupport />,
  },
];

// ─── Technology logos ───────────────────────────────────────────────────────

const TECHNOLOGIES = [
  { name: "Angular", abbr: "NG" },
  { name: "Django", abbr: "DJ" },
  { name: "Node.js", abbr: "N" },
  { name: "React", abbr: "R" },
  { name: "Tailwind", abbr: "TW" },
  { name: "Vue.js", abbr: "V" },
];

// ─── Sub-component: feature card ────────────────────────────────────────────

function FeatureCardItem({ card }: { card: FeatureCard }) {
  return (
    <div className="relative border border-[#c8c8c8] bg-white flex flex-col p-[86px_86px_60px]">
      {/* number — top right */}
      <span className="absolute top-21.25 right-21.5 font-mono text-[14px] font-light text-black">
        {card.number}
      </span>

      {/* illustration */}
      <div className="mb-8 text-black">{card.icon}</div>

      {/* spacer keeps description pushed to bottom */}
      <div className="mt-auto">
        <h3 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black mb-8">
          {card.title}
        </h3>
        <p className="font-[Neue_Montreal] text-[18px] font-normal leading-8 text-[#7f7f7f]">
          {card.description}
        </p>
      </div>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

import React from "react";
import Link from "next/link";

export default function WebCreationPage() {
  return (
    <div className="bg-white">
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative w-full h-screen overflow-hidden bg-[#0a0a12]">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/rectangle-2108.png"
        alt="Background image of website creation process"
      />
      <div className="absolute inset-0 bg-black/10" />

      {/* Navbar logo placeholder — handled by layout */}

      {/* Bottom-left content */}
      <div className="absolute bottom-16 left-12 max-w-3xl z-10">
        <h1 className="font-[Neue_Montreal] text-5xl md:text-6xl text-white leading-tight tracking-tight mb-10">
        Agence experte en création de sites web sur mesure à Caen en
        Normandie
        </h1>
        <div className="flex items-center gap-4">
        <a
          href="/contact"
          className="inline-flex items-center gap-4 px-6 py-4 bg-[#05ffe0] rounded-full font-mono text-[14px] font-normal text-black uppercase tracking-wide hover:bg-white transition-colors duration-300"
        >
          Demander un devis
          <span className="text-lg leading-none">+</span>
        </a>
        <Link
          href="/projets"
          className="inline-flex items-center gap-4 px-6 py-4 bg-transparent border border-white/50 rounded-full font-mono text-[14px] font-normal text-white uppercase tracking-wide hover:border-white hover:bg-white/10 transition-colors duration-300"
        >
          Voir nos réalisations
          <span className="text-lg leading-none">→</span>
        </Link>
        </div>
      </div>
      </section>

      {/* ── 2. Technologies ──────────────────────────────────────────────── */}
      <section className="py-24 px-12 bg-white">
        {/* 2-col header */}
        <div className="grid grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="font-[Neue_Montreal] text-[52px] font-medium leading-16.25 text-black">
              Technologies que nous maîtrisons
            </h2>
          </div>
          <div className="flex items-center">
            <p className="font-[Neue_Montreal] text-[18px] font-normal leading-8 text-[#7F7F7F]">
              Nous concevons des sites web sur mesure, pensés pour allier
              performance, clarté et impact visuel. Chaque projet est développé
              avec une attention particulière portée à l&apos;expérience
              utilisateur, à la rapidité d&apos;exécution et à l&apos;adaptabilité
              sur tous les supports.
            </p>
          </div>
        </div>

        {/* Logo cards */}
        {/* <div className="grid grid-cols-6 gap-0">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="border border-[#e8e8e8] flex flex-col items-center justify-center py-10 px-6 hover:border-black transition-colors duration-300 group"
            >
              <span className="font-[Neue_Montreal] text-[28px] font-medium text-black group-hover:text-[#05ffe0] transition-colors duration-300">
                {tech.abbr}
              </span>
              <span className="font-mono text-[12px] text-[#7F7F7F] mt-2 uppercase tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </div> */}
        <Tools />
      </section>

      {/* ── 3. Features — top 4 ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="px-12 py-16 border-t border-[#e8e8e8]">
          <p className="font-mono text-[13px] font-normal text-[#7F7F7F] mb-3">
            {"{ Nos Services }"}
          </p>
          <h2 className="font-[Neue_Montreal] text-[52px] font-medium leading-16.25 text-black max-w-xl">
            Principales caractéristiques de nos sites web
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-2">
          {FEATURES_TOP.map((card) => (
            <FeatureCardItem key={card.number + card.title} card={card} />
          ))}
        </div>
      </section>

      {/* ── 4. Dark CTA — Avantages ─────────────────────────────────────── */}
      <section className="bg-[#080808] py-24 px-12">
        <div className="grid grid-cols-2 items-center gap-16 max-w-350 mx-auto">
          {/* left: image */}
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/a-256348-e-03-e-47-bddc-6-f-60021.png"
              alt="Mockup laptop Numispark"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>

          {/* right: text */}
          <div>
            <p className="font-mono text-[13px] font-normal text-[#05ffe0] mb-4">
              {"{ Avantages de Nous Choisir }"}
            </p>
            <p className="font-[Neue_Montreal] text-[28px] font-normal leading-9 text-white">
              Découvrez les avantages à choisir Numispark comme partenaire de
              confiance pour concevoir, développer et faire évoluer vos projets
              web avec une approche sur mesure, pensée pour répondre à vos
              objectifs et valoriser votre activité.
            </p>
            <a
              href="/contact"
              className="mt-10 inline-flex items-center gap-4 px-6 py-4 bg-transparent border border-white/30 rounded-full font-mono text-[14px] font-normal text-white uppercase tracking-wide hover:border-[#05ffe0] hover:text-[#05ffe0] transition-colors duration-300"
            >
              Démarrer un projet
              <span className="text-lg leading-none">+</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Features — bottom 4 ──────────────────────────────────────── */}
      <section className="bg-white">
        <div className="grid grid-cols-2">
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
