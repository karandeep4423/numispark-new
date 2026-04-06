"use client";

import { useState } from "react";
import Image from "next/image";
import NosProjectsSection from "./NosProjectsSection";
import FaqSection from "./FaqSection";

/* ────────────────────────── Data ────────────────────────── */

const BENEFITS_CHECKLIST = [
  "100% gratuit et sans engagement",
  "Rapport détaillé en 24-48h",
  "Analyse par un expert SEO",
  "Recommandations personnalisées et actionnables",
];

type ProblemCard = {
  number: string;
  title: string;
  description: string;
};

const PROBLEMS: ProblemCard[] = [
  {
    number: "I",
    title: "Visibilité limitée sur Google",
    description:
      "Votre site reste invisible sur Google tandis que vos concurrents dominent les résultats de recherche",
  },
  {
    number: "II",
    title: "Un trafic organique qui ne progresse pas",
    description:
      "Vous investissez du temps et de l\u2019argent dans votre site, mais votre trafic organique stagne",
  },
  {
    number: "III",
    title: "Des freins techniques invisibles",
    description:
      "Des problèmes techniques cachés bloquent l\u2019indexation de vos pages sans que vous le sachiez",
  },
  {
    number: "IV",
    title: "Un contenu mal ciblé pour le référencement",
    description:
      "Vos contenus ne sont pas optimisés pour les bons mots-clés ciblant votre audience",
  },
  {
    number: "V",
    title: "Une stratégie de netlinking à renforcer",
    description:
      "Votre stratégie de liens externes est insuffisante ou mal orientée",
  },
];

type BenefitItem = {
  number: string;
  title: string;
  description: string;
};

const BENEFITS: BenefitItem[] = [
  {
    number: "I",
    title: "Diagnostic complet",
    description:
      "Comprendre pourquoi votre site ne performe pas comme il le devrait",
  },
  {
    number: "II",
    title: "Actions à fort impact",
    description:
      "Identifier les \"quick wins\" (actions rapides à fort impact)",
  },
  {
    number: "III",
    title: "Feuille de route claire",
    description: "Obtenir une feuille de route claire et priorisée",
  },
  {
    number: "IV",
    title: "Décisions éclairées",
    description:
      "Prendre des décisions éclairées pour votre stratégie SEO",
  },
];

type TabSubSection = {
  title: string;
  items: string[];
};

type PillarTab = {
  id: string;
  label: string;
  heading: string;
  description: string;
  subheading: string;
  subSections: TabSubSection[];
};

const PILLAR_TABS: PillarTab[] = [
  {
    id: "technique",
    label: "Audit SEO Technique",
    heading: "Structure et architecture du site",
    description:
      "Le SEO technique constitue les fondations solides de votre référencement. Sans une base technique optimisée, vos efforts de contenu et de liens seront compromis.",
    subheading: "Ce que nous analysons",
    subSections: [
      {
        title: "",
        items: [
          "Crawlabilité et indexabilité",
          "Sitemap XML et robots.txt",
          "Architecture de l\u2019information",
          "Hiérarchie des pages",
        ],
      },
      {
        title: "Performance et vitesse",
        items: [
          "Core Web Vitals",
          "Temps de chargement",
          "Optimisation mobile",
          "Expérience utilisateur technique",
        ],
      },
      {
        title: "Problèmes techniques critiques",
        items: [
          "Erreurs d\u2019indexation",
          "Pages orphelines",
          "Redirections en chaîne",
          "Erreurs 404 et 5xx",
          "Problèmes de canonicalisation",
          "Sécurité HTTPS",
        ],
      },
    ],
  },
  {
    id: "on-page",
    label: "Audit SEO On-Page",
    heading: "Optimisation du contenu et des balises",
    description:
      "L\u2019optimisation on-page garantit que chaque page de votre site est parfaitement structurée pour les moteurs de recherche et vos utilisateurs.",
    subheading: "Ce que nous analysons",
    subSections: [
      {
        title: "",
        items: [
          "Balises title et méta-descriptions",
          "Hiérarchie des balises Hn",
          "Attributs alt des images",
          "Données structurées (Schema.org)",
        ],
      },
      {
        title: "Qualité et pertinence du contenu",
        items: [
          "Densité et placement des mots-clés",
          "Qualité et profondeur du contenu",
          "Fraîcheur et mise à jour",
          "Lisibilité et engagement",
        ],
      },
      {
        title: "Structure des URLs et maillage",
        items: [
          "URLs propres et descriptives",
          "Fil d\u2019Ariane et navigation",
          "Liens internes stratégiques",
          "Optimisation des ancres",
        ],
      },
    ],
  },
  {
    id: "off-page",
    label: "Audit SEO Off-Page",
    heading: "Profil de liens et autorité",
    description:
      "L\u2019audit off-page analyse votre autorité en ligne et la qualité de votre profil de liens pour renforcer votre positionnement dans les résultats de recherche.",
    subheading: "Ce que nous analysons",
    subSections: [
      {
        title: "",
        items: [
          "Qualité des liens entrants",
          "Diversité des domaines référents",
          "Pertinence thématique des backlinks",
          "Liens toxiques à désavouer",
        ],
      },
      {
        title: "Autorité et confiance",
        items: [
          "Domain Authority et Trust Flow",
          "Cohérence thématique du profil",
          "Signaux de confiance (E-E-A-T)",
          "Comparaison concurrentielle",
        ],
      },
      {
        title: "Présence et réputation en ligne",
        items: [
          "Mentions et citations de marque",
          "Profils sur les annuaires",
          "Avis et réputation en ligne",
          "Signaux sociaux",
        ],
      },
    ],
  },
];

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  badge: string;
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "I",
    title: "Remplissez le formulaire",
    description:
      "Entrez simplement l\u2019URL de votre site web, votre nom, email et téléphone dans le formulaire ci-dessous.",
    badge: "2 min",
  },
  {
    number: "II",
    title: "Notre analyse approfondie",
    description:
      "Notre équipe d\u2019experts SEO analyse votre site sous les 3 angles fondamentaux : technique, on-page et off-page. Nous utilisons des outils professionnels (Screaming Frog, Ahrefs, Semrush, Pagespeed Insights) pour un diagnostic fiable et complet.",
    badge: "24 à 48h",
  },
  {
    number: "III",
    title: "Vous recevez votre rapport détaillé",
    description:
      "Vous recevez par email un rapport d\u2019audit SEO complet (format PDF) avec diagnostic des 3 piliers SEO, liste des problèmes identifiés par ordre de priorité, recommandations actionnables pour chaque pilier, et plan d\u2019action concret et priorisé.",
    badge: "Rapport PDF personnalisé",
  },
  {
    number: "IV",
    title: "Échange conseil (optionnel)",
    description:
      "Nous vous proposons un échange téléphonique ou visioconférence (20-30 minutes) pour vous présenter les résultats de l\u2019audit et répondre à vos questions sur les 3 piliers analysés.",
    badge: "Call de présentation ou réunion Teams",
  },
];

type AdvantageCard = {
  number: string;
  title: string;
  description: string;
};

const ADVANTAGES: AdvantageCard[] = [
  {
    number: "I",
    title: "Analyse holistique des 3 piliers du SEO",
    description:
      "Sites de réservation, applications de découvertes locales, plateformes de mise en relation franchisée.",
  },
  {
    number: "II",
    title: "Analyse humaine par un expert SEO",
    description:
      "Boutiques en ligne, marketplaces, stratégies de conversion, systèmes de gestion de stocks.",
  },
  {
    number: "III",
    title: "Recommandations personnalisées et actionnables",
    description:
      "Plateformes LMS, outils pédagogiques, solutions de formation en ligne, apprentissage en ligne.",
  },
  {
    number: "IV",
    title: "Rapport clair et compréhensible",
    description:
      "Pas de jargon technique incompréhensible. Nous expliquons chaque point en langage simple pour que vous compreniez exactement ce qu\u2019il faut faire, que ce soit pour l\u2019aspect technique, on-page ou off-page.",
  },
  {
    number: "V",
    title: "Approche stratégique orientée ROI",
    description:
      "Notre analyse va au-delà des aspects techniques pour se concentrer sur ce qui générera réellement du trafic qualifié et des conversions pour votre business.",
  },
];

type AudienceCard = {
  number: string;
  title: string;
  description: string;
};

const AUDIENCE: AudienceCard[] = [
  {
    number: "I",
    title: "TPE, PME et entrepreneurs",
    description:
      "Vous souhaitez améliorer votre visibilité locale ou nationale mais n\u2019avez pas les ressources pour engager une agence SEO à temps plein.",
  },
  {
    number: "II",
    title: "Startups et scale-ups",
    description:
      "Vous cherchez à accélérer votre croissance organique et à réduire votre dépendance aux canaux d\u2019acquisition payants.",
  },
  {
    number: "III",
    title: "E-commerces",
    description:
      "Vous voulez augmenter votre trafic qualifié, votre visibilité produit et vos ventes en ligne via le référencement naturel.",
  },
  {
    number: "IV",
    title: "Sites corporate et B2B",
    description:
      "Vous souhaitez générer plus de leads qualifiés et renforcer votre autorité en ligne dans votre secteur.",
  },
  {
    number: "V",
    title: "Sites existants en perte de vitesse",
    description:
      "Votre trafic organique a chuté récemment et vous souhaitez comprendre pourquoi et inverser la tendance.",
  },
  {
    number: "VI",
    title: "Projets de refonte web",
    description:
      "Vous préparez une refonte de votre site et voulez vous assurer de ne pas perdre votre capital SEO existant.",
  },
];

/* ────────────────────────── Sub-components ────────────────────────── */

function RomanBadge({ number, dark }: { number: string; dark?: boolean }) {
  return (
    <div
      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[5px] ${
        dark ? "bg-[#222]" : "bg-[#f1f1f1]"
      }`}
    >
      <span
        className={`font-[Roboto_Mono] text-[18px] font-light ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {number}
      </span>
    </div>
  );
}

function CheckIcon() {
  return (
    <Image
      src="/audit-seo-gratuit/check.svg"
      alt=""
      width={24}
      height={17}
      className="shrink-0"
      unoptimized
    />
  );
}

function CheckIconSmall() {
  return (
    <Image
      src="/audit-seo-gratuit/check-small.svg"
      alt=""
      width={18}
      height={13}
      className="shrink-0"
      unoptimized
    />
  );
}

function AuditForm({ dark }: { dark?: boolean }) {
  const labelCls = `font-[Neue_Montreal] text-[14px] leading-6 ${
    dark ? "text-white" : "text-black"
  }`;

  const inputCls = `w-full border-0 border-b bg-transparent pb-3 pt-1 font-[Neue_Montreal] text-[14px] leading-6 outline-none ${
    dark
      ? "border-[#2a2a2a] text-white placeholder:text-white/40 focus:border-[#05ffe0]"
      : "border-[#d9d9d9] text-black placeholder:text-black/40 focus:border-black"
  }`;

  return (
    <form
      className="flex w-full flex-col gap-8"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Nom complet */}
      <div className="flex flex-col gap-2">
        <label className={labelCls}>Nom complet</label>
        <input
          type="text"
          name="name"
          className={inputCls}
          aria-label="Nom complet"
        />
      </div>
      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className={labelCls}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="contact@bolieustudio.com"
          className={inputCls}
          aria-label="Email"
        />
      </div>
      {/* Téléphone */}
      <div className="flex flex-col gap-2">
        <label className={labelCls}>
          Téléphone{" "}
          <span className={dark ? "text-white/50" : "text-black/50"}>
            (optionnel)
          </span>
        </label>
        <input
          type="tel"
          name="phone"
          className={inputCls}
          aria-label="Téléphone"
        />
      </div>
      {/* Entreprise */}
      <div className="flex flex-col gap-2">
        <label className={labelCls}>Entreprise</label>
        <input
          type="text"
          name="company"
          className={inputCls}
          aria-label="Entreprise"
        />
      </div>
      {/* URL */}
      <div className="flex flex-col gap-2">
        <label className={labelCls}>Url de votre site web</label>
        <input
          type="url"
          name="url"
          className={inputCls}
          aria-label="URL du site web"
        />
      </div>
      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className={`${labelCls} ${dark ? "text-white/50!" : "text-black/50!"}`}>
          Message
        </label>
        <textarea
          name="message"
          rows={3}
          className={`${inputCls} resize-none`}
          aria-label="Message"
        />
      </div>
      {/* CTA */}
      <button
        type="submit"
        className={`mt-4 inline-flex w-fit items-center gap-8 rounded-full border px-6 py-3.5 font-[Roboto_Mono] text-[12px] uppercase tracking-wider transition-colors duration-300 ${
          dark
            ? "border-white bg-[#0f0f0f] text-white hover:bg-white hover:text-black"
            : "border-black bg-white text-black hover:bg-black hover:text-white"
        }`}
      >
        Demander mon audit SEO gratuit
        <span className="text-sm leading-none">+</span>
      </button>
    </form>
  );
}

/* ────────────────────────── Main Component ────────────────────────── */

export default function AuditSeoGratuitPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="bg-white">
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen overflow-hidden bg-[#101010] flex flex-col">
        {/* Background video */}
        <div className="pointer-events-none absolute inset-0">
          <video
            src="/bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Title pinned toward bottom */}
        <div className="relative z-10 flex flex-1 items-end px-8 pb-28 pt-40 md:px-20">
          <h1 className="max-w-5xl font-[Neue_Montreal] text-[32px] font-medium leading-[1.05] text-white sm:text-[38px] lg:text-[52px]">
            <span className="text-[#05ffe0]">Audit SEO Gratuit</span>
            <span>. Découvrez ce qui Freine Votre Visibilité sur Google</span>
          </h1>
        </div>
      </section>

      {/* ─── Subtitle + Form + Benefits ─── */}
      <section className="border-t border-[#dadada]">
        {/* Subtitle */}
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
          <p className="mx-auto max-w-4xl text-center font-[Neue_Montreal] text-[18px] font-medium leading-relaxed sm:text-[22px] lg:text-[28px]">
            Identifiez rapidement les problèmes techniques, les opportunités
            d&apos;optimisation on-page et les axes d&apos;amélioration off-page
            pour booster votre référencement naturel et générer plus de trafic
            qualifié.
          </p>
        </div>

        {/* Form + Benefits grid */}
        <div className="mx-auto grid max-w-350 gap-10 px-6 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-12 xl:px-16">
          {/* Left: Image */}
          <div>
            <div className="relative aspect-602/786 overflow-hidden">
              <Image
                src="/audit-seo-gratuit/hero-laptop.jpg"
                alt="Audit SEO gratuit"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Right: Benefits checklist */}
          <div>
            <div className="mb-10">
              {BENEFITS_CHECKLIST.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-4 py-5">
                    <CheckIcon />
                    <p className="font-[Neue_Montreal] text-[14px] leading-6 sm:text-[16px]">
                      {item}
                    </p>
                  </div>
                  <div className="h-px bg-[#d9d9d9]" />
                </div>
              ))}
            </div>
          </div>
          {/* Sticky heading + scrollable form */}
          <div className="self-start lg:sticky lg:top-8">
            <h2 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[32px] lg:text-[36px]">
              Demander votre audit gratuit.
            </h2>
            <p className="mt-4 font-[Neue_Montreal] text-[14px] leading-7 text-[#7f7f7f]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          {/* Form */}
          <AuditForm />
        </div>
        <div className="h-px bg-[#dadada]" />
      </section>

      {/* ─── Problems Grid ─── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-350 px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="mb-10 font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black sm:text-[32px] lg:text-[36px]">
            Bénéfices immédiats
            <br />
            de notre audit SEO gratuit.
          </h2>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {PROBLEMS.map((problem) => (
              <div key={problem.number} className="flex gap-4">
                <RomanBadge number={problem.number} />
                <div>
                  <h3 className="font-[Neue_Montreal] text-[16px] font-medium leading-tight text-black sm:text-[18px]">
                    {problem.title}
                  </h3>
                  <p className="mt-2 font-[Neue_Montreal] text-[14px] leading-7 text-[#7f7f7f]">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Dark Section: Pourquoi + Benefits + 3 Pillar Tabs ─── */}
      <section className="bg-[#0f0f0f] text-white">
        {/* Pourquoi */}
        <div className="mx-auto max-w-350 px-6 pt-20 sm:px-8 lg:px-12 xl:px-16">
          <p className="mb-4 text-center font-[Roboto_Mono] text-[12px] text-white">
            {"{ POURQUOI ? }"}
          </p>
          <p className="mx-auto max-w-3xl text-center font-[Neue_Montreal] text-[18px] font-medium leading-relaxed sm:text-[22px]">
            <span>
              Un audit SEO professionnel vous permet de déterminer précisément
              les freins à{" "}
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

          {/* Decorative illustration */}
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
              {/* Bottom fade into dark bg */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#0f0f0f] to-transparent" />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[#2a2a2a]" />

        {/* Benefits Items (dark) */}
        <div className="mx-auto max-w-350 px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="mb-10 text-center font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[32px] lg:text-[36px]">
            <span className="text-[#05ffe0]">Bénéfices immédiats</span>{" "}
            de notre audit SEO gratuit
          </h2>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div key={benefit.number} className="flex gap-4">
                <RomanBadge number={benefit.number} dark />
                <div>
                  <h3 className="font-[Neue_Montreal] text-[16px] font-medium leading-tight text-white sm:text-[18px]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 font-[Neue_Montreal] text-[14px] leading-7 text-[#7f7f7f]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-[#2a2a2a]" />

        {/* 3 Pillar Tabs */}
        <div className="mx-auto max-w-350 px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="mb-10 text-center font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[32px] lg:text-[36px]">
            Notre audit SEO gratuit couvre les{" "}
            <span className="text-[#05ffe0]">
              3 piliers essentiels du référencement
            </span>
          </h2>

          {/* Tab switcher */}
          <div className="mx-auto mb-10 flex w-fit items-center rounded-full bg-[#222] p-1">
            {PILLAR_TABS.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`rounded-full px-4 py-3 font-[Roboto_Mono] text-[11px] uppercase text-white transition-colors duration-200 sm:px-8 sm:text-[12px] ${
                  activeTab === i ? "bg-[#383838]" : "hover:bg-[#2a2a2a]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-start lg:gap-16">
            {/* Left: Sticky image area */}
            <div className="lg:sticky lg:top-8">
              <div className="relative aspect-582/699 w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f]">
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #05ffe0 1.5px, transparent 1.5px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <video
                    src={`/audit-seo-gratuit/seo-3-piliers.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Right: Tab details */}
            <div>
              <p className="mb-1 font-[Roboto_Mono] text-[12px] text-[#05ffe0]">
                {String(activeTab + 1).padStart(2, "0")}
              </p>
              <h3
                className="mb-3 font-[Neue_Montreal] text-[20px] leading-relaxed sm:text-[22px]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #fff 0%, #05ffe0 56%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {PILLAR_TABS[activeTab].heading}
              </h3>

              <h4 className="mb-3 font-[Neue_Montreal] text-[22px] font-medium leading-tight text-white sm:text-[26px]">
                {PILLAR_TABS[activeTab].subheading}
              </h4>
              <p className="mb-6 font-[Neue_Montreal] text-[14px] leading-7 text-[#7f7f7f]">
                {PILLAR_TABS[activeTab].description}
              </p>

              {/* Sub-sections with checklist items */}
              {PILLAR_TABS[activeTab].subSections.map((section, si) => (
                <div key={si}>
                  {section.title && (
                    <div className="flex items-center gap-2 pb-1 pt-5">
                      <span className="font-[Roboto_Mono] text-[12px] text-[#05ffe0]">
                        {"\u00BB"}
                      </span>
                      <span className="font-[Neue_Montreal] text-[15px] font-medium text-[#05ffe0]">
                        {section.title}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col">
                    {section.items.map((item, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-4 py-3.5">
                          <CheckIconSmall />
                          <p className="font-[Neue_Montreal] text-[14px] leading-6 text-white sm:text-[16px]">
                            {item}
                          </p>
                        </div>
                        <div className="h-px w-full bg-[#2a2a2a]" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Process Steps ─── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-350 px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <p className="mb-2 font-[Roboto_Mono] text-[12px] text-[#8f8f8f] lg:text-left">
                {"{ Comment ça marche }"}
              </p>
              <h2 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black sm:text-[32px] lg:text-[36px]">
                Notre processus d&apos;audit SEO en 4 étapes
              </h2>
            </div>
            <p className="self-end mb-8 font-[Neue_Montreal] text-[14px] leading-7 text-black">
              Cet audit est 100% gratuit et sans engagement. Aucune obligation
              d&apos;achat ni de souscription à nos services.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="flex gap-4">
                <RomanBadge number={step.number} />
                <div>
                  <h3 className="font-[Neue_Montreal] text-[16px] font-medium leading-tight text-black sm:text-[18px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-[Neue_Montreal] text-[14px] leading-7 text-[#7f7f7f]">
                    {step.description}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-[#05ffe0] px-3 py-1 font-[Neue_Montreal] text-[12px] text-black">
                    {step.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Advantages Grid ─── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-350 px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="mb-10 font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black sm:text-[32px] lg:text-[36px]">
            Pourquoi votre site n&apos;apparaît pas en première page de Google ?
          </h2>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((adv) => (
              <div key={adv.number} className="flex gap-4">
                <RomanBadge number={adv.number} />
                <div>
                  <h3 className="font-[Neue_Montreal] text-[16px] font-medium leading-tight text-black sm:text-[18px]">
                    {adv.title}
                  </h3>
                  <p className="mt-2 font-[Neue_Montreal] text-[14px] leading-7 text-[#7f7f7f]">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Audience Section (Dark) ─── */}
      <section className="bg-[#0f0f0f] py-16 text-white">
        <div className="mx-auto max-w-350 px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="mb-10 font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[32px] lg:text-[36px]">
            Pour qui est cet{" "}
            <span className="text-[#05ffe0]">audit SEO complet ?</span>
          </h2>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {AUDIENCE.map((item) => (
              <div key={item.number} className="flex gap-4">
                <RomanBadge number={item.number} dark />
                <div>
                  <h3 className="font-[Neue_Montreal] text-[16px] font-medium leading-tight text-white sm:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-[Neue_Montreal] text-[14px] leading-7 text-[#7f7f7f]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom Form Section (Dark) ─── */}
      <section className="bg-[#0f0f0f] text-white">
        <div className="h-px w-full bg-[#2a2a2a]" />
        <div className="mx-auto grid max-w-350 gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-12 xl:px-16">
          {/* Left: Heading */}
          <div className="self-start lg:sticky lg:top-8">
            <h2 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[32px] lg:text-[36px]">
              Demander votre audit{" "}
              <span className="text-[#05ffe0]">gratuit.</span>
            </h2>
            <p className="mt-4 font-[Neue_Montreal] text-[14px] leading-7 text-[#7f7f7f]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          {/* Right: Form */}
          <AuditForm dark />
        </div>
      </section>

      {/* ─── Footer Components ─── */}
      <NosProjectsSection />
      <FaqSection />
    </main>
  );
}
