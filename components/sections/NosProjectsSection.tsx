"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const DESKTOP_CARD_VH = 90;
const DESKTOP_GAP = 12;
const DESKTOP_VISIBLE_CARDS = 1;

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
    image: "/projects/monhubimmo/monhubimmo-hero-section.png",
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

const maxDesktopSteps = Math.max(projects.length - DESKTOP_VISIBLE_CARDS, 0);
const desktopCardHeightCss = `${DESKTOP_CARD_VH}vh`;
const desktopTrackHeightCss = `calc(${DESKTOP_VISIBLE_CARDS} * ${DESKTOP_CARD_VH}vh + ${(DESKTOP_VISIBLE_CARDS - 1) * DESKTOP_GAP}px)`;
const desktopSectionHeight = `calc(100vh + ${maxDesktopSteps} * (${DESKTOP_CARD_VH}vh + ${DESKTOP_GAP}px) + 120px)`;

export default function NosProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const lastOffsetRef = useRef(0);
  const lastActiveRef = useRef(0);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      frameId = 0;

      if (!sectionRef.current) return;

      const cardHeight = (window.innerHeight * DESKTOP_CARD_VH) / 100;
      const step = cardHeight + DESKTOP_GAP;
      const maxOffset = maxDesktopSteps * step;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollDistance = Math.max(
        sectionRef.current.offsetHeight - window.innerHeight,
        1,
      );
      const progress = Math.max(0, Math.min(1, -rect.top / scrollDistance));
      const nextOffset = progress * maxOffset;
      const nextActive = Math.min(
        maxDesktopSteps,
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

  const activeProject = projects[activeIndex];

  return (
    <section className="bg-white">
      <div
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{ height: desktopSectionHeight }}
      >
        <div className="sticky top-0 h-screen overflow-hidden ">
          <div className="mx-auto flex h-full max-w-7xl w-full items-center gap-14 px-10 py-10 xl:px-16">
            <div
              className="flex w-[38%] shrink-0 flex-col justify-between py-4 pr-8"
              style={{ height: desktopTrackHeightCss }}
            >
              <div>
                {/* Two-line heading: fixed "Nos projets" + animated project name in gray */}
                <div className="mb-10">
                  <h2 className="font-[Neue_Montreal] text-[44px] xl:text-[52px] font-bold leading-none tracking-[-0.04em] text-black">
                    Nos projets
                  </h2>
                  <div className="relative h-13 overflow-hidden">
                    {projects.map((project, index) => (
                      <h2
                        key={project.id}
                        className={`absolute font-[Neue_Montreal] text-[44px] xl:text-[52px] font-bold leading-none tracking-[-0.04em] text-black/30 transition-all duration-500 ease-out ${
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

                {/* Description */}
                <div className="relative min-h-36">
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className={`absolute inset-0 transition-all duration-500 ease-out ${
                        index === activeIndex
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-6 opacity-0"
                      }`}
                    >
                      <p className="max-w-md font-[Neue_Montreal] text-[17px] lg:text-[18px] xl:text-[20px] leading-[1.75] text-black/55">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Metadata */}
                <div className="relative h-15 mb-10">
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className={`absolute inset-0 flex items-center gap-5 transition-all duration-500 ease-out ${
                        index === activeIndex
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-4 opacity-0"
                      }`}
                    >
                      <div className="flex h-15 w-15 items-center justify-center rounded-[18px] border border-black/8 bg-[#f4f4f1]">
                        <span className="font-mono text-[22px] text-black/30">
                          {project.id}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <span className="font-mono text-[12px] uppercase tracking-[0.32em] text-black/28">
                          {project.year}
                        </span>
                        <span className="font-mono text-[14px] uppercase tracking-[0.22em] text-black/55">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress indicators */}
                <div className="mb-8 flex gap-3">
                  {projects.map((_, index) => (
                    <span
                      key={index}
                      className={`h-0.75 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-18 bg-black/70"
                          : "w-9 bg-black/12"
                      }`}
                    />
                  ))}
                </div>

                <Link
                  href={`/projets/${activeProject.slug}`}
                  className="inline-flex items-center gap-3 font-mono text-[14px] uppercase tracking-[0.34em] text-black/42 transition-colors duration-200 hover:text-black"
                >
                  <span className="border-b border-black/18 pb-1 transition-colors duration-200 hover:border-black">
                    Voir le projet
                  </span>
                  <span className="transition-transform duration-200 hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div
              className="relative flex-1 overflow-hidden "
              style={{ height: desktopTrackHeightCss }}
            >
              <div
                className="flex flex-col will-change-transform "
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
                    style={{ height: desktopCardHeightCss }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 1280px) 52vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      priority={index < DESKTOP_VISIBLE_CARDS}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/38 via-black/8 to-transparent" />

                    <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/18 bg-white/82 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-black backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
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

        <Link
          href={`/projets/${projects[0].slug}`}
          className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-black/40 transition-colors duration-200 hover:text-black"
        >
          Voir le projet vedette →
        </Link>
      </div>
    </section>
  );
}
