import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "@/app/components/VideoPlayer";
import ProjectGallery from "@/app/components/ProjectGallery";

/* ── Arrow-left icon for the back button ── */
function ArrowLeftIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 12H4M4 12l6-6M4 12l6 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Arrow-right icon for CTA buttons ── */
function ArrowRightIcon({ color = "white" }: { color?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M13 8l-4-4M13 8l-4 4"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ProjectSection {
  title: string;
  body: string;
}

interface Project {
  slug: string;
  id: string;
  name: string;
  category: string;
  year: string;
  duration: string;
  location: string;
  heroTagline: string;
  objectivesDescription: string;
  tags: string[];
  heroImage: string;
  galleryImages: string[];
  siteUrl: string;
  sections: ProjectSection[];
  techStack?: string[];
  awardImage?: { src: string; label: string };
}

const projects: Project[] = [
  {
    slug: "portail-immobilier",
    id: "01",
    name: "Portail Immobilier",
    category: "Expérience Web + CRM",
    year: "2025",
    duration: "8 mois",
    location: "France",
    heroTagline:
      "Refonte complète d'un portail immobilier conçu pour mettre chaque bien en valeur, simplifier la prise de contact et accélérer les équipes commerciales.",
    objectivesDescription:
      "Refonte d'un portail immobilier pensé pour mettre en valeur chaque bien, simplifier la prise de contact et donner plus de vitesse aux équipes commerciales. Le projet couvrait l'architecture d'information, le design UI/UX et l'intégration front-end complète avec un CRM existant.",
    tags: ["WEB", "UX", "DEV"],
    heroImage: "/images/image-jpeg-51.png",
    galleryImages: [
      "/images/image-jpeg-51.png",
      "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
      "/images/capture-decran-20260307-a-1836221.png",
    ],
    siteUrl: "#",
    sections: [
      {
        title: "Process & Design",
        body: "Nous avons commencé par une phase de découverte approfondie avec les équipes commerciales pour comprendre leurs flux de travail. Des entretiens utilisateurs ont permis d'identifier les frictions majeures dans le parcours d'achat.\n\nLa phase de conception s'est articulée autour d'un système de composants modulaire, permettant une évolution rapide du produit sans dette technique. Chaque décision visuelle a été documentée dans un design system partagé.",
      },
      {
        title: "Résultats",
        body: "Le nouveau portail a permis une réduction de 40 % du temps de mise en ligne d'un bien immobilier. Le taux de conversion des fiches produits a augmenté de 28 % grâce à une présentation visuelle repensée.\n\nL'intégration CRM a automatisé 60 % des tâches répétitives des équipes commerciales, leur permettant de se concentrer sur la relation client à haute valeur ajoutée.",
      },
    ],
  },
  {
    slug: "application-terrain",
    id: "02",
    name: "Application Terrain",
    category: "Produit Mobile",
    year: "2024",
    duration: "6 mois",
    location: "France",
    heroTagline:
      "Application métier aidant les équipes terrain à remonter les informations en temps réel et à maintenir une vision claire des priorités quotidiennes.",
    objectivesDescription:
      "Conception d'une application mobile native pensée pour les conditions terrain : hors-ligne, luminosité variable, utilisation gantée. Le défi était de condenser un flux de travail complexe en une interface simple et rapide à prendre en main.",
    tags: ["MOBILE APP", "UX", "API"],
    heroImage: "/images/capture-decran-20260307-a-1836221.png",
    galleryImages: [
      "/images/capture-decran-20260307-a-1836221.png",
      "/images/image-jpeg-51.png",
      "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
    ],
    siteUrl: "#",
    sections: [
      {
        title: "Recherche & Prototypage",
        body: "Des sessions d'observation terrain ont révélé des comportements d'usage impossibles à anticiper depuis un bureau. L'application a été prototypée, testée et itérée directement avec les utilisateurs finaux sur leur lieu de travail.\n\nLe mode hors-ligne avec synchronisation différée a été la fonctionnalité la plus critique à concevoir, nécessitant une architecture de données robuste.",
      },
      {
        title: "Impact Mesurable",
        body: "Le temps de saisie d'un rapport terrain est passé de 25 minutes à moins de 7 minutes. La fiabilité des données remontées a augmenté de 85 % grâce à la validation en temps réel.\n\nL'adoption spontanée par les équipes, sans formation obligatoire, a confirmé la justesse des choix UX réalisés tout au long du projet.",
      },
    ],
  },
  {
    slug: "plateforme-client",
    id: "03",
    name: "Plateforme Client",
    category: "SaaS B2B",
    year: "2024",
    duration: "10 mois",
    location: "Europe",
    heroTagline:
      "Espace client structuré autour des parcours, des contenus et des automatisations pour rendre l'accompagnement plus lisible et plus autonome.",
    objectivesDescription:
      "Création d'une plateforme SaaS B2B permettant à des clients professionnels de gérer leurs projets, accéder à leurs ressources et suivre leurs indicateurs en autonomie. L'enjeu principal était de réduire la charge sur les équipes support.",
    tags: ["SAAS", "DESIGN", "FRONTEND"],
    heroImage: "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
    galleryImages: [
      "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
      "/images/capture-decran-20260307-a-1836221.png",
      "/images/image-jpeg-51.png",
    ],
    siteUrl: "#",
    sections: [
      {
        title: "Architecture & Navigation",
        body: "La structure de navigation a été repensée autour des cas d'usage réels plutôt que de l'organisation interne de l'entreprise. Un travail approfondi de card sorting avec des clients a permis de valider chaque niveau d'arborescence.\n\nLe design system développé pour la plateforme est maintenant utilisé comme référence pour tous les nouveaux projets internes.",
      },
      {
        title: "Autonomisation",
        body: "Les clients peuvent désormais accéder à 90 % de leurs besoins sans contacter le support. Les tickets d'assistance ont diminué de 65 % dans les trois mois suivant le lancement.\n\nLa fonctionnalité d'onboarding contextuel a réduit le temps d'activation de 3 semaines à 4 jours en moyenne.",
      },
    ],
  },
  {
    slug: "experience-de-marque",
    id: "04",
    name: "Expérience de Marque",
    category: "Site Vitrine",
    year: "2024",
    duration: "4 mois",
    location: "France",
    heroTagline:
      "Site éditorial fort, avec une narration visuelle, des animations sélectives et un socle technique simple à faire évoluer.",
    objectivesDescription:
      "Mise en scène d'une marque dans un site éditorial fort, avec une narration visuelle, des animations sélectives et un socle technique simple à faire évoluer. Le projet a démarré par une phase de brand strategy pour aligner l'expression digitale avec l'identité de marque.",
    tags: ["MOTION", "CREATIVE", "DEV"],
    heroImage: "/images/rectangle-2108.png",
    galleryImages: [
      "/images/rectangle-2108.png",
      "/images/image-jpeg-51.png",
      "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
    ],
    siteUrl: "#",
    sections: [
      {
        title: "Direction Artistique",
        body: "La direction artistique a émergé d'une immersion dans l'univers de la marque : ses références, ses valeurs et son positionnement concurrentiel. Un moodboard a cristallisé les choix typographiques, chromatiques et cinétiques.\n\nChaque animation a été conçue pour renforcer le message, jamais pour décorer. Le résultat est une expérience cohérente où chaque élément a une raison d'être.",
      },
      {
        title: "Performance & Évolutivité",
        body: "Malgré la richesse visuelle, le site atteint un score Lighthouse de 96 en performance grâce à une stratégie d'optimisation des assets et de rendu côté serveur.\n\nL'architecture modulaire permet à l'équipe marketing d'ajouter de nouvelles sections sans intervention technique, via un CMS headless intégré.",
      },
    ],
  },
  {
    slug: "monhubimmo",
    id: "05",
    name: "MonHubImmo",
    category: "Plateforme SaaS Immobilier",
    year: "2025",
    duration: "12 mois",
    location: "France",
    heroTagline:
      "La première plateforme collaborative inter-enseignes pour les professionnels de l'immobilier — partage de mandats, réseau social métier et agent IA intégré.",
    objectivesDescription:
      "Conception et développement de MonHubImmo, un écosystème SaaS dédié aux agents et mandataires immobiliers de tous réseaux. L'objectif : briser les silos entre enseignes pour permettre la co-exclusivité, le partage de mandats et la mise en relation entre confrères à l'échelle nationale.",
    tags: ["WEB", "SAAS", "IA"],
    heroImage: "/projects/monhubimmo/monhubimmo-hero-section.png",
    galleryImages: [
      "/projects/monhubimmo/temoignage-monhubimmo.mp4",
      "/projects/monhubimmo/monhubimmo-home-page.png",
      "/projects/monhubimmo/search-agents.png",
      "/projects/monhubimmo/monhubimmo-biens.png",
      "/projects/monhubimmo/bien-details.png",
      "/projects/monhubimmo/bien-details-2.png",
      "/projects/monhubimmo/agent-dashboard.png",
      "/projects/monhubimmo/search-clients.png",
      "/projects/monhubimmo/search-client-detail.png",
      "/projects/monhubimmo/admin-dashboard.png",
      "/projects/monhubimmo/admin-users.png",
    ],
    siteUrl: "https://www.monhubimmo.fr/",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI",
      "Stripe",
      "Vercel",
    ],
    awardImage: {
      src: "/projects/monhubimmo/sweet-award.webp",
      label: "Sweet Awards 2025 · Salon RENT",
    },
    sections: [
      {
        title: "Produit & Architecture",
        body: "MonHubImmo repose sur trois piliers produit : une plateforme collaborative inter-cabinets pour le partage de mandats et de recherches acquéreurs, Hubie — le réseau social dédié à la profession immobilière — et Hugo, un agent IA qui accompagne les conseillers au quotidien.\n\nL'architecture a été pensée pour absorber une croissance rapide : backend scalable, API REST découplée et interface mobile-first pour les équipes terrain.",
      },
      {
        title: "Impact & Reconnaissance",
        body: "Dès son lancement, MonHubImmo a été adopté par des conseillers issus de plus de 20 réseaux nationaux — IAD, SAFTI, BSK, Capifrance, Guy Hoquet, Optimhome et bien d'autres.\n\nLa plateforme a été récompensée aux Sweet Awards 2025 au salon RENT et distinguée par Les Pépites Tech comme startup innovante de la French Tech. Les médias spécialisés — MySweetImmo, Radio Immo, Le Média Immo — ont relayé son impact sur la collaboration inter-enseignes.",
      },
    ],
  },
];

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f]">
        <p className="font-mono text-sm text-white/40">Projet introuvable.</p>
      </div>
    );
  }

  return (
    <main className="bg-[#0f0f0f] text-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
        {/* Background image + overlay */}
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Back button — circle with arrow */}
        <Link
          href="/projets"
          aria-label="Retour aux projets"
          className="absolute bottom-[10%] left-[7.3%] z-10 flex h-[49px] w-[49px] items-center justify-center rounded-full border border-white/70 hover:border-white hover:bg-white/10 transition-all duration-300"
        >
          <ArrowLeftIcon />
        </Link>

        {/* Project title */}
        <h1 className="absolute bottom-[10%] left-[calc(7.3%+100px)] z-10 font-[Neue_Montreal] text-5xl font-medium leading-none text-white">
          {project.name}
        </h1>

        {/* Hero info card — top right */}
        <div className="absolute right-[7.3%] bottom-[8%] z-10 w-[min(453px,42vw)] rounded-[5px] bg-[rgba(46,46,46,0.7)] backdrop-blur-[20px] px-10 py-12">
          <div className="flex flex-col gap-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/25 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="font-[Neue_Montreal] text-[15px] leading-[1.55] text-white/85">
              {project.heroTagline}
            </p>
          </div>
        </div>
      </section>

      {/* ── INFO SECTION ── */}
      <section className="px-[7.3%] pt-20 pb-24">
        <div className="grid grid-cols-5 gap-x-8 lg:gap-x-12">
          {/* Left column — CTA + meta */}
          <div className="col-span-5 lg:col-span-2 flex flex-col gap-10">
            {/* CTA button */}
            <div>
              {project.siteUrl !== "#" ? (
                <Link
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-10 rounded-full border border-white bg-[#0f0f0f] px-[22px] py-[19px] font-mono text-[14px] uppercase tracking-wide text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Voir le site
                  <ArrowRightIcon color="currentColor" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-10 rounded-full border border-white/25 bg-[#0f0f0f] px-[22px] py-[19px] font-mono text-[14px] uppercase tracking-wide text-white/40 cursor-default">
                  Voir le site
                  <ArrowRightIcon color="currentColor" />
                </span>
              )}
            </div>

            {/* Meta info */}
            <div className="flex flex-col">
              <MetaRow label="Temps" value={project.duration} />
              <MetaRow label="Catégories" value={project.category} />
              <MetaRow label="Localisation" value={project.location} />
              <MetaRow label="Année" value={project.year} isLast />
            </div>

            {/* Tech stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column — Objectifs */}
          <div className="col-span-5 lg:col-span-3 mt-16 lg:mt-0">
            <h2 className="font-[Neue_Montreal] text-[clamp(32px,3vw,52px)] font-medium leading-tight text-white mb-6">
              Objectifs
            </h2>
            <div className="h-px bg-[#474747] mb-8" />
            <p className="font-[Neue_Montreal] text-[19px] leading-[1.42] text-white/85">
              {project.objectivesDescription}
            </p>

            {/* Award */}
            {project.awardImage && (
              <div className="mt-10 flex items-center gap-5 rounded-[8px] border border-[#f5c842]/20 bg-[#f5c842]/5 p-5">
                <div className="relative w-[88px] h-[88px] flex-shrink-0">
                  <Image
                    src={project.awardImage.src}
                    alt={project.awardImage.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#f5c842]/70 mb-1">
                    Récompense
                  </p>
                  <p className="font-[Neue_Montreal] text-[16px] font-medium text-white leading-snug">
                    {project.awardImage.label}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── VIDEO (if first item is .mp4) ── */}
      {project.galleryImages[0]?.endsWith(".mp4") && (
        <section className="px-[7.3%] pb-16">
          <div className="relative w-full aspect-[4/3] lg:aspect-[16/9] overflow-hidden rounded-[5px]">
            <VideoPlayer src={project.galleryImages[0]} />
          </div>
        </section>
      )}

      {/* ── MASONRY GALLERY ── */}
      {(() => {
        const screenshots = project.galleryImages.filter(
          (img) => !img.endsWith(".mp4")
        );
        return screenshots.length > 0 ? (
          <ProjectGallery images={screenshots} projectName={project.name} />
        ) : null;
      })()}

      {/* ── TEXT SECTION 1 ── */}
      {project.sections[0] && (
        <ContentSection
          title={project.sections[0].title}
          body={project.sections[0].body}
        />
      )}

      {/* ── TEXT SECTION 2 ── */}
      {project.sections[1] && (
        <ContentSection
          title={project.sections[1].title}
          body={project.sections[1].body}
        />
      )}

      <div className="h-24" />
    </main>
  );
}

/* ── Sub-components ── */

function MetaRow({
  label,
  value,
  isLast = false,
}: {
  label: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <div>
      <p className="font-[Neue_Montreal] text-[19px] text-white py-5">
        <span className="text-white/50">{label} : </span>
        {value}
      </p>
      {!isLast && <div className="h-px bg-[#474747]" />}
    </div>
  );
}

function ContentSection({ title, body }: { title: string; body: string }) {
  const paragraphs = body.split("\n\n").filter(Boolean);
  return (
    <section className="px-[7.3%] py-20">
      <div className="grid grid-cols-5 gap-x-8 lg:gap-x-12">
        <div className="col-span-5 lg:col-span-2 mb-8 lg:mb-0">
          <h2 className="font-[Neue_Montreal] text-[clamp(32px,3vw,52px)] font-medium leading-tight text-white">
            {title}
          </h2>
        </div>
        <div className="col-span-5 lg:col-span-3 flex flex-col gap-6">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-[Neue_Montreal] text-[19px] leading-[1.42] text-white/70"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
