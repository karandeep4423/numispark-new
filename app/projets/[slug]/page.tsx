import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "portail-immobilier",
    id: "01",
    name: "Portail Immobilier",
    category: "Expérience Web + CRM",
    year: "2025",
    description:
      "Refonte d'un portail immobilier pensé pour mettre en valeur chaque bien, simplifier la prise de contact et donner plus de vitesse aux équipes commerciales.",
    tags: ["WEB", "UX", "DEV"],
    image: "/images/image-jpeg-51.png",
  },
  {
    slug: "application-terrain",
    id: "02",
    name: "Application Terrain",
    category: "Produit Mobile",
    year: "2024",
    description:
      "Conception d'une application métier qui aide les équipes terrain à remonter les informations en temps réel et à garder une vision claire des priorités quotidiennes.",
    tags: ["MOBILE APP", "UX", "API"],
    image: "/images/capture-decran-20260307-a-1836221.png",
  },
  {
    slug: "plateforme-client",
    id: "03",
    name: "Plateforme Client",
    category: "SaaS B2B",
    year: "2024",
    description:
      "Création d'un espace client structuré autour des parcours, des contenus et des automatisations pour rendre l'accompagnement plus lisible et plus autonome.",
    tags: ["SAAS", "DESIGN", "FRONTEND"],
    image: "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
  },
  {
    slug: "experience-de-marque",
    id: "04",
    name: "Expérience de Marque",
    category: "Site Vitrine",
    year: "2024",
    description:
      "Mise en scène d'une marque dans un site éditorial fort, avec une narration visuelle, des animations sélectives et un socle technique simple à faire évoluer.",
    tags: ["MOTION", "CREATIVE", "DEV"],
    image: "/images/capture-decran-20260310-a-1052222.svg",
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
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-mono text-sm text-black/40">Projet introuvable.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back link */}
      <div className="px-10 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-black/40 hover:text-black transition-colors duration-200"
        >
          ← Retour
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative w-full h-[70vh] mt-8 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-10 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/35 mb-4">
          {project.id} — {project.year}
        </p>
        <h1 className="font-[Neue_Montreal] text-[56px] font-medium leading-[0.94] tracking-[-0.04em] text-black mb-8">
          {project.name}
        </h1>
        <p className="font-[Neue_Montreal] text-[18px] leading-[1.72] text-black/60 mb-10 max-w-xl">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/15 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-black/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
