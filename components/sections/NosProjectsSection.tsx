"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const DESKTOP_GAP = 12;

// Card config per breakpoint — change these values to tune each layout
const CONFIG_LG = { cardVh: 70, visibleCards: 1.5 }; // laptop  (lg, <1280px)
const CONFIG_XL = { cardVh: 49, visibleCards: 2 }; // desktop (xl, ≥1280px)

const projects = [
  {
    id: "01",
    slug: "monhubimmo",
    name: "MonHubImmo",
    category: "Plateforme SaaS Immobilier",
    year: "2025",
    description:
      "Creation de la premiere plateforme collaborative inter-enseignes pour les professionnels de l'immobilier : partage de mandats, reseau social metier et agent IA integre.",
    tags: ["WEB", "SAAS", "IA"],
    image: "/images/capture-decran-20260307-a-1836221.png",
  },
  {
    id: "02",
    slug: "application-terrain",
    name: "Application Terrain",
    category: "Produit Mobile",
    year: "2024",
    description:
      "Conception d'une application metier qui aide les equipes terrain a remonter les informations en temps reel et a garder une vision claire des priorites quotidiennes.",
    tags: ["MOBILE APP", "UX", "API"],
    image: "/images/capture-decran-20260307-a-1836221.png",
  },
  {
    id: "03",
    slug: "plateforme-client",
    name: "Plateforme Client",
    category: "SaaS B2B",
    year: "2024",
    description:
      "Creation d'un espace client structure autour des parcours, des contenus et des automatisations pour rendre l'accompagnement plus lisible et plus autonome.",
    tags: ["SAAS", "DESIGN", "FRONTEND"],
    image: "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
  },
  {
    id: "04",
    slug: "experience-de-marque",
    name: "Experience de Marque",
    category: "Site Vitrine",
    year: "2024",
    description:
      "Mise en scene d'une marque dans un site editorial fort, avec une narration visuelle, des animations selectives et un socle technique simple a faire evoluer.",
    tags: ["MOTION", "CREATIVE", "DEV"],
    image: "/images/capture-decran-20260310-a-1052222.svg",
  },
  {
    id: "05",
    slug: "monhubimmo",
    name: "MonHubImmo",
    category: "Plateforme SaaS Immobilier",
    year: "2025",
    description:
      "Creation de la premiere plateforme collaborative inter-enseignes pour les professionnels de l'immobilier : partage de mandats, reseau social metier et agent IA integre.",
    tags: ["WEB", "SAAS", "IA"],
    image: "/projects/monhubimmo/monhubimmo-hero-section.png",
  },
] as const;

interface NosProjectsSectionProps {
  /** Render a 1px horizontal divider at the top of the section (used on non-home pages per Figma) */
  withTopDivider?: boolean;
}

export default function NosProjectsSection({
  withTopDivider = false,
}: NosProjectsSectionProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);
  const [cardConfig, setCardConfig] = useState(CONFIG_LG);

  const sectionRef = useRef<HTMLDivElement>(null);
  const lastOffsetRef = useRef(0);
  const lastActiveRef = useRef(0);
  // Ref so scroll handler always reads the current config without stale closure
  const cardConfigRef = useRef(CONFIG_LG);

  // Switch card config on xl breakpoint
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1280px)");
    const apply = (matches: boolean) => {
      const cfg = matches ? CONFIG_XL : CONFIG_LG;
      cardConfigRef.current = cfg;
      setCardConfig(cfg);
      // Reset scroll state so positions recalculate cleanly after resize
      lastOffsetRef.current = 0;
      lastActiveRef.current = 0;
      setTrackOffset(0);
      setActiveIndex(0);
    };
    apply(mql.matches);
    const handler = (e: MediaQueryListEvent) => apply(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      frameId = 0;
      if (!sectionRef.current) return;

      const { cardVh, visibleCards } = cardConfigRef.current;
      const totalCards = projects.length + 1;
      const maxSteps = Math.max(totalCards - visibleCards, 0);

      const cardHeight = (window.innerHeight * cardVh) / 100;
      const step = cardHeight + DESKTOP_GAP;
      const maxOffset = maxSteps * step;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollDistance = Math.max(
        sectionRef.current.offsetHeight - window.innerHeight,
        1,
      );
      const progress = Math.max(0, Math.min(1, -rect.top / scrollDistance));
      const nextOffset = progress * maxOffset;
      // Cap active project at last real project (placeholder card has no info)
      const nextActive = Math.min(
        projects.length - 1,
        Math.round(nextOffset / Math.max(step, 1)),
      );

      if (Math.abs(lastOffsetRef.current - nextOffset) > 0.3) {
        lastOffsetRef.current = nextOffset;
        setTrackOffset(nextOffset);
      }

      if (lastActiveRef.current !== nextActive) {
        lastActiveRef.current = nextActive;
        setActiveIndex(nextActive);
      }
    };

    const schedule = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const { cardVh, visibleCards } = cardConfig;
  const totalCards = projects.length + 1;
  const maxSteps = Math.max(totalCards - visibleCards, 0);
  const cardHeightCss = `${cardVh}vh`;
  const trackHeightCss = `calc(${visibleCards} * ${cardVh}vh + ${(visibleCards - 1) * DESKTOP_GAP}px)`;
  const sectionHeight = `calc(100vh + ${maxSteps} * (${cardVh}vh + ${DESKTOP_GAP}px) + 120px)`;

  return (
    <section className="bg-white py-10">
      <div
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{ height: sectionHeight }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* items-start: track aligns to top edge so no dead space above first card */}
          <div className="flex h-full w-full items-start px-10  xl:px-16">
            {/* Left column — always full screen height, independent of image sizing constants */}
            <div className="relative w-[38%] xl:w-[28%] shrink-0 py-10 pr-8 h-full">
              {/* Top: heading — anchored to top */}
              <div>
                {/* Two-line heading: fixed "Nos projets" + animated project name in gray */}
                <h2 className="font-[Neue_Montreal] text-[34px] xl:text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-black">
                  Nos projets
                </h2>
                <div className="relative h-11 xl:h-13 overflow-hidden">
                  {projects.map((project, index) => (
                    <h2
                      key={project.id}
                      className={`absolute font-[Neue_Montreal] text-[34px] xl:text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-black/35 transition-all duration-500 ease-out ${
                        index === activeIndex
                          ? "translate-y-0 opacity-100"
                          : index < activeIndex
                            ? "-translate-y-full opacity-0"
                            : "translate-y-full opacity-0"
                      }`}
                    >
                      {project.name}
                    </h2>
                  ))}
                </div>
              </div>

              {/* Bottom: description + thumbnail — pinned to bottom of container */}
              <div className="absolute bottom-8 left-0 right-8">
                {/* Description — fixed height keeps spacing consistent across all projects */}
                <div className="relative h-32 xl:h-36 mb-5 overflow-hidden">
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className={`absolute inset-0 transition-all duration-500 ease-out ${
                        index === activeIndex
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-6 opacity-0"
                      }`}
                    >
                      <p className="max-w-md font-[Neue_Montreal] text-[18px] xl:text-[20px] leading-[1.7] text-black/55">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Small thumbnail + year — category caption */}
                <div className="relative h-10">
                  {projects.map((project, index) => (
                    <Link
                      key={project.id}
                      href={`/projets/${project.slug}`}
                      className={`absolute inset-0 flex items-center gap-4 transition-all duration-500 ease-out ${
                        index === activeIndex
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-3 opacity-0"
                      }`}
                    >
                      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                      <span className="font-mono text-[14px] uppercase tracking-[0.18em] text-black">
                        {project.year} — {project.category}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="relative flex-1 overflow-hidden"
              style={{ height: trackHeightCss }}
            >
              <div
                className="flex flex-col will-change-transform"
                style={{
                  gap: `${DESKTOP_GAP}px`,
                  transform: `translateY(-${trackOffset}px)`,
                  transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {projects.map((project, index) => (
                  <Link
                    key={project.id}
                    href={`/projets/${project.slug}`}
                    className="group relative block shrink-0 overflow-hidden bg-[#111]"
                    style={{ height: cardHeightCss }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 1280px) 52vw, 100vw"
                      className="object-cover bg-no-repeat transition-transform duration-500 group-hover:scale-[1.02]"
                      priority={index < visibleCards}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/38 via-black/8 to-transparent" />

                    <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-2 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full hover:bg-[#05FFE0] border border-white/18 bg-white/82 px-4 py-2 font-mono text-[14px] uppercase tracking-[0.16em] text-black backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}

                {/* Dark placeholder card — "Voir tous les projets" */}
                <Link
                  href="/projets"
                  className="group relative flex shrink-0 items-end justify-end overflow-hidden bg-[#0A0A0A] p-10"
                  style={{ height: cardHeightCss }}
                >
                  <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-white/70 transition-colors duration-200 group-hover:text-white">
                    {"{ Voir tous les projets }"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile screen */}
      <div className="mx-auto max-w-3xl space-y-6 px-5 py-16 lg:hidden">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.22em] text-black">
          Nos projets
        </p>

        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projets/${project.slug}`}
            className="block overflow-hidden rounded-[22px] border border-black/10 bg-white"
          >
            <div className="relative h-[56vw] min-h-50 max-h-80">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/82 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-black/40">
                {project.year} — {project.category}
              </p>
              <h3 className="mb-3 font-[Neue_Montreal] text-[22px] font-medium tracking-[-0.02em] text-black">
                {project.name}
              </h3>
              <p className="font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.65] text-black/55">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
