"use client";

import Link from "next/link";
import { useState } from "react";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";
import Tools from "./Tools";

// ─── Figma asset URLs (temporary ~7 days – replace with local files) ─────────
const P = {
  karandeep:
    "https://www.figma.com/api/mcp/asset/fe5b40c8-a6ff-4b57-b601-cb9ce460293e",
  thomas:
    "https://www.figma.com/api/mcp/asset/e21be67f-4643-4bec-bfc4-b2afceed3aea",
  samuel:
    "https://www.figma.com/api/mcp/asset/91d69cb4-e9ba-4d9e-aac7-326ddfd87fa2",
  lucas:
    "https://www.figma.com/api/mcp/asset/96402993-fd88-44a2-a132-186ce0458ea4",
  matheo:
    "https://www.figma.com/api/mcp/asset/4683ca0b-aae8-43b8-a5a8-e1d17c1cb050",
  antoine:
    "https://www.figma.com/api/mcp/asset/9bf9a19e-110b-49d0-aff2-350b55eed327",
  louis:
    "https://www.figma.com/api/mcp/asset/4301c43e-dab1-4ffa-bc4b-1453968ba43b",
  charlotte:
    "https://www.figma.com/api/mcp/asset/69c68873-1387-4652-b484-43932e4c7842",
  amelie:
    "https://www.figma.com/api/mcp/asset/30f5e18c-bc25-43ee-8f40-b94f844e7aa7",
  sophia:
    "https://www.figma.com/api/mcp/asset/3760675a-5864-4f58-9fa6-defc4fcc2d03",
} as const;

const AGENCE_IMG =
  "https://www.figma.com/api/mcp/asset/7b280407-5380-467c-a7cb-59b1ca58ee6b";
const EXPERTISE_IMG =
  "https://www.figma.com/api/mcp/asset/4ca6037c-3f65-426d-9d4e-181f6c65493d";

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  {
    value: "+60",
    label: "Projets réalisés",
    desc: "projets digitaux conçus, développés et livrés avec succès pour des clients allant de la startup à l'entreprise.",
  },
  {
    value: "10",
    label: "Secteurs d'activité",
    desc: "spécialistes pluridisciplinaires qui mettent leur savoir-faire et leur créativité au service exclusif de la réussite de votre transformation digitale.",
  },
  {
    value: "07",
    label: "Experts full remote",
    desc: "domaines d'expertise pour couvrir tous vos besoins digitaux.",
  },
  {
    value: "+25",
    label: "Clients satisfaits",
    desc: "technologies maîtrisées. Frameworks front & back-end, CMS, solutions e-commerce, bases de données, automatisation et IA.",
  },
];

const WEB_SKILLS = [
  "Ux Ui Design",
  "E-commerce",
  "Stratégie webmarketing & référencement",
  "Solutions SaaS",
];
const MOBILE_SKILLS = ["iOS", "Android", "Intelligence artificielle"];

const FOUNDERS = [
  {
    name: "Karandeep",
    role: "Fondateur & Directeur Général",
    photo: P.karandeep,
  },
  { name: "Thomas", role: "Co-fondateur & Chef de projet", photo: P.thomas },
];
const TECH_TEAM = [
  { name: "Samuel", role: "Lead Développeur", photo: P.samuel },
  { name: "Lucas", role: "Développeur Backend", photo: P.lucas },
  { name: "Mathéo", role: "Développeur Frontend", photo: P.matheo },
  { name: "Antoine", role: "Développeur Full Stack", photo: P.antoine },
  { name: "Louis", role: "Développeur Mobile", photo: P.louis },
];
const DESIGN_TEAM = [
  { name: "Charlotte", role: "Designer Graphique & UI/UX", photo: P.charlotte },
  { name: "Amélie", role: "Experte SEO", photo: P.amelie },
  { name: "Sophia", role: "Spécialiste Marketing Digital", photo: P.sophia },
];

const SECTORS = [
  {
    num: "I",
    label: "Tourisme et Loisirs",
    desc: "Sites de réservation, applications de découverte locale, plateformes de mise en relation touristique.",
  },
  {
    num: "II",
    label: "E-commerce & Retail",
    desc: "Boutiques en ligne, marketplaces, stratégies de conversion, systèmes de gestion des stocks.",
  },
  {
    num: "III",
    label: "Éducation et Formation",
    desc: "Plateformes LMS, outils pédagogiques digitaux, solutions d'apprentissage en ligne.",
  },
  {
    num: "IV",
    label: "Services B2B",
    desc: "Applications métier spécialisées, intranets collaboratifs, outils de productivité sur-mesure.",
  },
  {
    num: "V",
    label: "Coaching",
    desc: "Sites de réservation, applications de découverte locale, plateformes de mise en relation touristique.",
  },
  {
    num: "VI",
    label: "Industrie et Artisanat",
    desc: "Digitalisation des processus, présence en ligne optimisée, catalogues produits interactifs.",
  },
];

// ─── TeamCard ─────────────────────────────────────────────────────────────────
function TeamCard({
  name,
  role,
  photo,
}: {
  name: string;
  role: string;
  photo: string;
}) {
  return (
    <div
      className="relative overflow-hidden bg-[#1a1a1a] group"
      style={{ aspectRatio: "478 / 614" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[50%] bg-linear-to-t from-black/75 to-transparent" />
      {/* Name + role */}
      <div className="absolute bottom-8 left-8 text-white">
        <p className="font-[Neue_Montreal] text-[22px] font-medium leading-tight">
          {name}
        </p>
        <p className="font-mono text-[12px] text-white/50 mt-1">{role}</p>
      </div>
      {/* Teal cross (Figma detail) */}
      <span className="absolute bottom-9 right-8 text-[#05ffe0] text-[22px] font-thin leading-none">
        +
      </span>
    </div>
  );
}

// ─── TeamFilter type ──────────────────────────────────────────────────────────
type TeamFilter = "all" | "tech" | "design";

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const [teamFilter, setTeamFilter] = useState<TeamFilter>("all");

  return (
    <div className="bg-white">
      {/* ════════════════════════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-[#101010]  overflow-hidden flex flex-col">
        {/* Video fills right ~55% */}
        <div className="absolute inset-0 pointer-events-none">
          <video
            src="/bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute right-0 top-0 h-full w-full object-cover"
          />
          {/* Fade gradient so left stays fully dark */}
          <div className="absolute inset-0  bg-black/50" />
          {/* Subtle overall veil */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero title – pinned toward the bottom */}
        <div className="relative z-10 flex-1 flex items-end px-10 md:px-20 pb-28 pt-40">
          <h1 className="font-[Neue_Montreal] text-[52px] md:text-[68px] lg:text-[80px] font-medium leading-[1.05] text-white max-w-5xl">
            Une agence digitale née pour construire{" "}
            <span className="text-[#05ffe0]">des produits qui performent.</span>
          </h1>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. L'AGENCE
      ════════════════════════════════════════════════════════════════════ */}
      <section id="agence" className="bg-white overflow-hidden">
        {/* ── Sticky internal section nav ── */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-black/5">
          <div className="px-10 md:px-20">
            <div className="flex items-center gap-1 py-3">
              {[
                { label: "L'agence", href: "#agence" },
                { label: "Expertises", href: "#expertises" },
                { label: "Le team", href: "#team" },
                { label: "Nos outils", href: "#outils" },
                { label: "Témoignages", href: "#temoignages" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-1.5 rounded-full font-mono text-[11px] tracking-widest text-black/40 uppercase hover:text-black hover:bg-black/5 transition-all duration-150 first:bg-[#101010] first:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="px-10 md:px-20 py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left: heading + large decorative image */}
            <div className="lg:w-[40%]">
              <h2 className="font-[Neue_Montreal] text-[48px] font-medium leading-tight text-black mb-8">
                L&apos;agence
              </h2>
              {/* Decorative 3-D shapes image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={AGENCE_IMG}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: description + CTA + 2×2 stats */}
            <div className="lg:w-[60%] flex flex-col gap-6 pt-0 lg:pt-2">
              <p className="font-[Neue_Montreal] text-[17px] leading-[1.75] text-black/60">
                Créée en 2022 par Karandeep et Thomas, Numispark est née
                d&apos;un constat simple&nbsp;: les TPE et PME françaises
                méritent la même expertise technique que les grandes
                entreprises, mais avec une approche plus humaine et des tarifs
                adaptés.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-10 px-6 py-4 border border-black rounded-full font-mono text-[11px] tracking-widest text-black uppercase hover:bg-[#05ffe0] hover:border-[#05ffe0] transition-all duration-200"
                >
                  Planifier un appel
                  <span className="text-xs leading-none opacity-40">←</span>
                </Link>
              </div>
              {/* 2 × 2 stats grid */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-10 mt-4 border-t border-black/8 pt-10">
                {STATS.map((s) => (
                  <div key={s.value}>
                    <p className="font-[Neue_Montreal] text-[56px] font-medium text-black leading-none mb-3">
                      {s.value}
                    </p>
                    <p className="font-[Neue_Montreal] text-[13px] leading-[1.6] text-black/40">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. EXPERTISES
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="h-px bg-[#dadada] mb-0" />
        <div className="px-10 md:px-20 pt-16">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left: lists */}
            <div className="lg:w-[45%]">
              <h2 className="font-[Neue_Montreal] text-[52px] font-medium leading-tight text-black mb-14">
                Expertises
              </h2>

              {/* WEB */}
              <p className="font-mono text-[12px] tracking-widest text-black/30 mb-5">
                {"{ WEB }"}
              </p>
              <div className="mb-12">
                {WEB_SKILLS.map((skill) => (
                  <div key={skill} className="border-b border-black/8 py-4">
                    <p className="font-[Neue_Montreal] text-[26px] text-black">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile */}
              <p className="font-mono text-[12px] tracking-widest text-black/30 mb-5">
                {"{ Mobile }"}
              </p>
              <div>
                {MOBILE_SKILLS.map((skill) => (
                  <div key={skill} className="border-b border-black/8 py-4">
                    <p className="font-[Neue_Montreal] text-[26px] text-black">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>

              {/* Company description */}
              <p className="font-[Neue_Montreal] text-[18px] leading-[1.72] text-[#7f7f7f] mt-14 max-w-lg">
                Nous accompagnons les entreprises dans la conception et le
                développement de solutions digitales performantes. De
                l&apos;interface utilisateur à l&apos;architecture technique,
                chaque projet est pensé pour allier esthétique, efficacité et
                résultats mesurables.
              </p>
            </div>

            {/* Right: sticky decorative image */}
            <div className="lg:w-[55%]">
              <div
                className="sticky top-10 overflow-hidden bg-[#eee]"
                style={{ height: "80vh", maxHeight: "700px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={EXPERTISE_IMG}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. TEAM
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="h-px bg-[#dadada] mb-0" />
        <div className="px-10 md:px-20 pt-16">
          {/* Header row */}
          <p className="font-mono text-[12px] tracking-widest text-black/30 mb-4">
            {"{ Team Numispark }"}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <h2 className="font-[Neue_Montreal] text-[52px] font-medium leading-tight text-black">
              Notre équipe
              <br />
              d&apos;experts full remote
            </h2>
            {/* Filter pill tabs */}
            <div className="flex items-center bg-[#f1f1f1] rounded-full p-1 shrink-0">
              {(["all", "tech", "design"] as TeamFilter[]).map((f) => {
                const labels: Record<TeamFilter, string> = {
                  all: "Toute l'équipe",
                  tech: "Équipe technique",
                  design: "Équipe Design & Marketing",
                };
                return (
                  <button
                    key={f}
                    onClick={() => setTeamFilter(f)}
                    className={`px-5 py-3 rounded-full font-mono text-[11px] tracking-widest whitespace-nowrap transition-all duration-200 ${
                      teamFilter === f
                        ? "bg-[#101010] text-white"
                        : "text-black hover:text-black/60"
                    }`}
                  >
                    {labels[f].toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Founders ── */}
          {teamFilter === "all" && (
            <div className="mb-24">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-[35%] lg:sticky lg:top-10">
                  <h3 className="font-[Neue_Montreal] text-[30px] font-medium text-black mb-4">
                    Les fondateurs
                  </h3>
                  <p className="font-[Neue_Montreal] text-[18px] leading-[1.72] text-[#7f7f7f]">
                    À l&apos;origine du projet, deux profils complémentaires
                    réunis par la même vision&nbsp;: créer des expériences
                    digitales utiles, performantes et élégantes. Entre
                    stratégie, gestion de projet et expertise technique, ils
                    accompagnent chaque client avec exigence, transparence et
                    ambition.
                  </p>
                </div>
                <div className="lg:w-[65%] grid grid-cols-2 gap-6">
                  {FOUNDERS.map((m) => (
                    <TeamCard key={m.name} {...m} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Technical team ── */}
          {(teamFilter === "all" || teamFilter === "tech") && (
            <div className="mb-24">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Cards on left */}
                <div className="lg:w-[65%] grid grid-cols-2 md:grid-cols-3 gap-6">
                  {TECH_TEAM.map((m) => (
                    <TeamCard key={m.name} {...m} />
                  ))}
                </div>
                {/* Label on right */}
                <div className="lg:w-[35%] lg:sticky lg:top-24">
                  <h3 className="font-[Neue_Montreal] text-[30px] font-medium text-black mb-4">
                    Équipe technique
                  </h3>
                  <p className="font-[Neue_Montreal] text-[18px] leading-[1.72] text-[#7f7f7f]">
                    Notre équipe technique conçoit des solutions robustes,
                    évolutives et parfaitement optimisées. Du développement
                    backend aux interfaces les plus fluides, chaque ligne de
                    code est pensée pour la performance, la sécurité et la
                    scalabilité. Nous privilégions des technologies fiables et
                    modernes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ── Design & Marketing ── */}
          {(teamFilter === "all" || teamFilter === "design") && (
            <div>
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-[35%] lg:sticky lg:top-10">
                  <h3 className="font-[Neue_Montreal] text-[30px] font-medium text-black mb-4">
                    Équipe Design
                    <br />
                    &amp; Marketing
                  </h3>
                  <p className="font-[Neue_Montreal] text-[18px] leading-[1.72] text-[#7f7f7f]">
                    Créativité et stratégie avancent main dans la main. Nous
                    concevons des identités fortes, des interfaces intuitives et
                    des expériences centrées utilisateur. En parallèle, nous
                    mettons en place des stratégies marketing précises pour
                    assurer visibilité, engagement et croissance.
                  </p>
                </div>
                <div className="lg:w-[65%] grid grid-cols-2 md:grid-cols-3 gap-6">
                  {DESIGN_TEAM.map((m) => (
                    <TeamCard key={m.name} {...m} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. TOOLS
      ════════════════════════════════════════════════════════════════════ */}

      <Tools />
      {/* ════════════════════════════════════════════════════════════════════
          6. SECTORS (dark)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#101010]">
        <div className="px-10 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {SECTORS.map((s) => (
              <div key={s.num}>
                {/* Number box + label on same row */}
                <div className="flex flex-row gap-4 mb-4">
                  <div className="bg-[#222] rounded-[5px] w-14 h-14 flex items-center justify-center shrink-0">
                    <span className="font-mono text-[20px] font-light text-white">
                      {s.num}
                    </span>
                  </div>
                  <p className="font-[Neue_Montreal] text-[20px] font-medium text-white leading-snug ">
                    {s.label}
                  </p>
                </div>
                {/* Description indented to align with label */}
                <p className="font-[Neue_Montreal] text-[15px] leading-[1.65] text-[#7f7f7f] ">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          7. TESTIMONIALS  (reused component)
      ════════════════════════════════════════════════════════════════════ */}
      <TestimonialsSection />
    </div>
  );
}
