"use client";
import CtaButton from "./CtaButton";
import { useState } from "react";
import TestimonialsSection from "./TestimonialsSection";
import Tools from "./Tools";

// ─── Figma asset URLs (temporary ~7 days – replace with local files) ─────────
const P = {
  karandeep: "/about/team.png",
  thomas: "/about/team.png",
  samuel: "/about/team.png",
  lucas: "/about/team.png",
  matheo: "/about/team.png",
  antoine: "/about/team.png",
  louis: "/about/team.png",
  charlotte: "/about/team.png",
  amelie: "/about/team.png",
  sophia: "/about/team.png",
} as const;

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
    bio: "Expert en développement et stratégie digitale, ancienne expérience en startups parisiennes.",
    hoverMedia: "/bg-video.mp4",
  },
  {
    name: "Thomas",
    role: "Co-fondateur & Chef de projet",
    photo: P.thomas,
    bio: "Pilotage produit, coordination d'équipes et structuration de projets digitaux sur mesure.",
    hoverMedia: "/bg-video.mp4",
  },
];
const TECH_TEAM = [
  {
    name: "Samuel",
    role: "Lead Développeur",
    photo: P.samuel,
    bio: "Architecture technique, revue de code et accompagnement des projets les plus ambitieux.",
    hoverMedia: "/bg-video.mp4",
  },
  {
    name: "Lucas",
    role: "Développeur Backend",
    photo: P.lucas,
    bio: "Conçoit des bases solides, des APIs fiables et des systèmes pensés pour durer.",
    hoverMedia: "/bg-video.mp4",
  },
  {
    name: "Mathéo",
    role: "Développeur Frontend",
    photo: P.matheo,
    bio: "Transforme les maquettes en interfaces fluides, rapides et agréables à utiliser.",
    hoverMedia: "/bg-video.mp4",
  },
  {
    name: "Antoine",
    role: "Développeur Full Stack",
    photo: P.antoine,
    bio: "Intervient de l'interface à la logique métier pour connecter chaque brique du produit.",
    hoverMedia: "/bg-video.mp4",
  },
  {
    name: "Louis",
    role: "Développeur Mobile",
    photo: P.louis,
    bio: "Développe des expériences mobiles robustes, natives ou cross-platform, centrées utilisateur.",
    hoverMedia: "/bg-video.mp4",
  },
];
const DESIGN_TEAM = [
  {
    name: "Charlotte",
    role: "Designer Graphique & UI/UX",
    photo: P.charlotte,
    bio: "Imagine des univers visuels cohérents et des interfaces pensées pour guider l'utilisateur.",
    hoverMedia: "/bg-video.mp4",
  },
  {
    name: "Amélie",
    role: "Experte SEO",
    photo: P.amelie,
    bio: "Travaille la visibilité organique avec une approche stratégique, éditoriale et technique.",
    hoverMedia: "/bg-video.mp4",
  },
  {
    name: "Sophia",
    role: "Spécialiste Marketing Digital",
    photo: P.sophia,
    bio: "Active les bons leviers d'acquisition pour transformer l'attention en croissance mesurable.",
    hoverMedia: "/bg-video.mp4",
  },
];

const TEAM_SECTIONS = {
  founders: {
    title: "Les fondateurs",
    description:
      "À l'origine du projet, deux profils complémentaires réunis par la même vision : créer des expériences digitales utiles, performantes et élégantes. Entre stratégie, gestion de projet et expertise technique, ils accompagnent chaque client avec exigence, transparence et ambition.",
  },
  tech: {
    title: "Équipe technique",
    description:
      "Notre équipe technique conçoit des solutions robustes, évolutives et parfaitement optimisées. Du développement backend aux interfaces les plus fluides, chaque ligne de code est pensée pour la performance, la sécurité et la scalabilité. Nous privilégions des technologies fiables et modernes pour garantir des produits durables.",
  },
  design: {
    title: "Équipe Design\n& Marketing",
    description:
      "Créativité et stratégie avancent main dans la main. Nous concevons des identités fortes, des interfaces intuitives et des expériences centrées utilisateur. En parallèle, nous mettons en place des stratégies marketing précises pour assurer visibilité, engagement et croissance. Chaque projet est pensé pour séduire autant qu'il convertit.",
  },
} as const;

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
  bio,
  hoverMedia,
}: {
  name: string;
  role: string;
  photo: string;
  bio: string;
  hoverMedia?: string;
}) {
  const isVideoHoverMedia = hoverMedia
    ? /\.(mp4|webm|ogg)$/i.test(hoverMedia)
    : false;

  return (
    <div
      className="group relative overflow-hidden bg-[#1a1a1a]"
      style={{ aspectRatio: "478 / 614" }}
    >
      {/* Default photo – grayscale, fades out on hover */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:opacity-0"
      />
      {/* Hover media – GIF / video that appears on hover */}
      {hoverMedia &&
        (isVideoHoverMedia ? (
          <video
            src={hoverMedia}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full scale-[1.06] object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hoverMedia}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-[1.06] object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
          />
        ))}
      <div className="absolute inset-0 bg-black/10 transition-colors duration-500 ease-out group-hover:bg-black/24" />
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-linear-to-t from-black/90 via-black/36 to-transparent transition-all duration-500 ease-out group-hover:h-[54%] group-hover:from-black/94 group-hover:via-black/58" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
        <div className="max-w-[18rem]">
          <p className="font-[Neue_Montreal] text-[20px] font-medium leading-tight sm:text-[21px]">
            {name}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/65 sm:text-[11px]">
            {role}
          </p>
          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:mt-4 group-hover:max-h-24 group-hover:opacity-100">
            <p className="max-w-[16rem] text-[14px] leading-[1.5] text-white/92">
              {bio}
            </p>
          </div>
        </div>
      </div>
      <span className="absolute bottom-6 right-5 z-10 text-[#05ffe0] text-[22px] font-thin leading-none transition-transform duration-500 ease-out group-hover:rotate-45 sm:bottom-7 sm:right-6">
        +
      </span>
    </div>
  );
}

function TeamTextCard({
  title,
  description,
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center bg-white px-0 py-4 sm:px-2 lg:px-4 ${className}`}
    >
      <h3 className="whitespace-pre-line font-[Neue_Montreal] text-[28px] font-medium leading-[1.15] text-black">
        {title}
      </h3>
      <p className="mt-5  font-[Neue_Montreal] text-[16px] leading-[1.72] text-[#7f7f7f]">
        {description}
      </p>
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
        <div className="relative max-w-7xl mx-auto w-full z-10 flex-1 flex items-end px-6 md:px-20 pb-20 pt-32 md:pb-28 md:pt-40">
          <h1 className="font-[Neue_Montreal] text-[32px] sm:text-[42px] lg:text-[52px] xl:text-[60px] font-medium leading-[1.1] text-white max-w-5xl">
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
        {/* <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-black/5">
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
        </div> */}

        {/* ── Content ── */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 pt-12 md:pt-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left: heading + large decorative image */}
            <div className="lg:w-[40%]">
              <h2 className="font-[Neue_Montreal] text-[36px] md:text-[48px] font-medium leading-tight text-black mb-8">
                L&apos;agence
              </h2>
            </div>

            {/* Right: description + CTA + 2×2 stats */}
            <div className="lg:w-[60%] flex flex-col gap-6 pt-0 lg:pt-2">
              <p className="font-[Neue_Montreal] text-[17px] leading-[1.75] text-black">
                Créée en 2022 par Karandeep et Thomas, Numispark est née
                d&apos;un constat simple&nbsp;: les TPE et PME françaises
                méritent la même expertise technique que les grandes
                entreprises, mais avec une approche plus humaine et des tarifs
                adaptés.
              </p>
              <div>
                <CtaButton href="/contact">Planifier un appel</CtaButton>
              </div>
            </div>
          </div>
          <div className="flex gap-10 flex-col md:flex-row items-center justify-center mt-6">
            {/* Decorative 3-D shapes image */}
            <div
              className="relative w-full h-full overflow-y-visible"
              style={{ aspectRatio: "4/5" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about/agency-logo.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* 2 × 2 stats grid */}
            <div className="grid grid-cols-1  md:grid-cols-2 gap-x-10 gap-y-0   border-black/8 ">
              {STATS.map((s) => (
                <div
                  key={s.value}
                  className="group px-4 pt-6 pb-4 border-t-2 border-[#E0E0E0] hover:border-black transition-all duration-600 bg-[linear-gradient(127deg,transparent_0%,transparent_100%)] hover:bg-[linear-gradient(127deg,#E7ECF2_3.71%,rgba(231,236,242,0)_40.97%)]"
                >
                  <p className="font-[Neue_Montreal] text-[40px] md:text-[56px] font-medium text-black leading-none mb-3 transition-all duration-600 group-hover:translate-y-1">
                    {s.value}
                  </p>
                  <p className="font-[Neue_Montreal] text-[13px] leading-[1.6] text-black/40 group-hover:text-black transition-all duration-600 group-hover:-translate-y-1">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. EXPERTISES
      ════════════════════════════════════════════════════════════════════ */}
      <section className=" bg-white">
        <div className="h-px bg-[#dadada] mb-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left: lists */}
            <div className="lg:w-[45%] mt-10 px-6 md:px-10 lg:px-16">
              <h2 className="font-[Neue_Montreal] text-[32px] md:text-[42px] font-medium leading-tight text-black mb-10 md:mb-14">
                Expertises
              </h2>

              {/* WEB */}
              <p className="font-mono text-[12px] tracking-widest text-black/30 mb-5">
                {"{ WEB }"}
              </p>
              <div className="mb-12">
                {WEB_SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className="group py-0.5 w-full cursor-default"
                  >
                    <p className="inline-block font-[Neue_Montreal] text-[20px] text-black transition-all duration-500 ease-out group-hover:translate-x-[22px] group-hover:bg-[linear-gradient(90deg,#05D9FF_0%,#05FFE0_38%,#000000_82%)] group-hover:bg-clip-text group-hover:text-transparent motion-reduce:transform-none">
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
                  <div
                    key={skill}
                    className="group py-0.5 w-full cursor-default"
                  >
                    <p className="inline-block font-[Neue_Montreal] text-[20px] text-black transition-all duration-500 ease-out group-hover:translate-x-[22px] group-hover:bg-[linear-gradient(90deg,#05D9FF_0%,#05FFE0_38%,#000000_82%)] group-hover:bg-clip-text group-hover:text-transparent motion-reduce:transform-none">
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
            <div className=" hidden md:flex lg:w-[55%] h-full">
              <div
                className=" overflow-hidden bg-[#eee]"
                style={{ height: "155vh", maxHeight: "1200px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about/expertise.jpg"
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
      <section id="team" className="bg-white">
        <div className="h-px bg-[#dadada] mb-0" />
        <div className="max-w-7xl mx-auto w-full px-5 md:px-20 pt-16 pb-8">
          <p className="mb-4 font-mono text-[12px] tracking-widest text-black/30">
            {"{ Team Numispark }"}
          </p>
          <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-[Neue_Montreal] text-[35px] font-medium leading-tight text-black">
              Notre équipe
              <br />
              d&apos;experts full remote
            </h2>
            <div className="shrink-0 rounded-full bg-[#f1f1f1] p-1 max-w-full overflow-x-auto">
              <div className="flex items-center min-w-max">
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
                      className={`rounded-full px-5 py-3 font-mono text-[11px] tracking-widest whitespace-nowrap transition-all duration-200 ${
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
          </div>

          {teamFilter === "all" && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <TeamTextCard
                title={TEAM_SECTIONS.founders.title}
                description={TEAM_SECTIONS.founders.description}
              />
              <TeamCard {...FOUNDERS[0]} />
              <TeamCard {...FOUNDERS[1]} />
              <TeamCard {...TECH_TEAM[0]} />
              <TeamCard {...TECH_TEAM[1]} />
              <TeamTextCard
                title={TEAM_SECTIONS.tech.title}
                description={TEAM_SECTIONS.tech.description}
              />
              <TeamCard {...TECH_TEAM[2]} />
              <TeamCard {...TECH_TEAM[3]} />
              <TeamCard {...TECH_TEAM[4]} />
              <TeamTextCard
                title={TEAM_SECTIONS.design.title}
                description={TEAM_SECTIONS.design.description}
              />
              <TeamCard {...DESIGN_TEAM[0]} />
              <TeamCard {...DESIGN_TEAM[1]} />
              <div className="hidden xl:block" />
              <TeamCard {...DESIGN_TEAM[2]} />
            </div>
          )}

          {teamFilter === "tech" && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
              <TeamTextCard
                title={TEAM_SECTIONS.tech.title}
                description={TEAM_SECTIONS.tech.description}
              />
              <TeamCard {...TECH_TEAM[0]} />
              <TeamCard {...TECH_TEAM[1]} />
              <TeamCard {...TECH_TEAM[2]} />
              <TeamCard {...TECH_TEAM[3]} />
              <TeamCard {...TECH_TEAM[4]} />
            </div>
          )}

          {teamFilter === "design" && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <TeamTextCard
                title={TEAM_SECTIONS.design.title}
                description={TEAM_SECTIONS.design.description}
              />
              <TeamCard {...DESIGN_TEAM[0]} />
              <TeamCard {...DESIGN_TEAM[1]} />
              <div className="hidden xl:block" />
              <TeamCard {...DESIGN_TEAM[2]} />
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
        <div className="max-w-7xl mx-auto w-full px-10 md:px-20">
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
