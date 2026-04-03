"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Config ──────────────────────────────────────────────────────────────────
// Card height as % of viewport height (also the right-column window height)
const CARD_VH = 80;
// Gap between cards in pixels
const GAP = 24;

// ─── Data ─────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: "01",
    slug: "portail-immobilier",
    name: "Portail Immobilier",
    category: "Expérience Web + CRM",
    year: "2025",
    description:
      "Refonte d'un portail immobilier pensé pour mettre en valeur chaque bien, simplifier la prise de contact et donner plus de vitesse aux équipes commerciales.",
    tags: ["WEB", "UX", "DEV"],
    image: "/images/image-jpeg-51.png",
  },
  {
    id: "02",
    slug: "application-terrain",
    name: "Application Terrain",
    category: "Produit Mobile",
    year: "2024",
    description:
      "Conception d'une application métier qui aide les équipes terrain à remonter les informations en temps réel et à garder une vision claire des priorités quotidiennes.",
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
      "Création d'un espace client structuré autour des parcours, des contenus et des automatisations pour rendre l'accompagnement plus lisible et plus autonome.",
    tags: ["SAAS", "DESIGN", "FRONTEND"],
    image: "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
  },
  {
    id: "04",
    slug: "experience-de-marque",
    name: "Expérience de Marque",
    category: "Site Vitrine",
    year: "2024",
    description:
      "Mise en scène d'une marque dans un site éditorial fort, avec une narration visuelle, des animations sélectives et un socle technique simple à faire évoluer.",
    tags: ["MOTION", "CREATIVE", "DEV"],
    image: "/images/capture-decran-20260310-a-1052222.svg",
  },
];

// ─── Section height (CSS calc) ────────────────────────────────────────────────
// 100vh (first card fills screen) + (n-1) steps + extra tail spacing
const sectionHeight = `calc(100vh + ${projects.length - 1} * (${CARD_VH}vh + ${GAP}px) + 100px)`;

// ─── Component ────────────────────────────────────────────────────────────────
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

      const cardHeight = (window.innerHeight * CARD_VH) / 100;
      const step = cardHeight + GAP;
      const maxOffset = (projects.length - 1) * step;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollDist = Math.max(
        sectionRef.current.offsetHeight - window.innerHeight,
        1,
      );
      const progress = Math.max(0, Math.min(1, -rect.top / scrollDist));

      const nextOffset = progress * maxOffset;
      const nextActive = Math.min(
        projects.length - 1,
        Math.floor(nextOffset / step + 0.01),
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

  return (
    <section
      ref={sectionRef}
      className="relative "
      style={{ height: sectionHeight }}
    >
      {/* ── Sticky viewport ─────────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-full max-w-360 mx-auto px-10 lg:px-16 flex items-center gap-12 lg:gap-20">

          {/* ── LEFT COLUMN ─────────────────────────────────────────────── */}
          <div className="hidden lg:flex flex-col h-screen py-14 w-95 xl:w-105 shrink-0 relative">
            {/* Static section label */}
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-black">
              Nos projets
            </p>

            {/* Per-project detail panels */}
            <div className="flex-1 relative mt-8">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={project.id}
                    className={`absolute inset-0 flex flex-col transition-all duration-500 ease-in-out ${
                      isActive
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-5 pointer-events-none"
                    }`}
                  >
                    {/* Project name */}
                    <h2 className="font-[Neue_Montreal] text-[52px] xl:text-[60px] font-medium leading-[0.94] tracking-[-0.04em] text-black">
                      {project.name}
                    </h2>

                    {/* Description */}
                    <p className="mt-7 font-[Neue_Montreal] text-[15px] leading-[1.72] text-black max-w-90">
                      {project.description}
                    </p>

                    {/* Project badge */}
                    <div className="mt-10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black/6 border border-black/8 flex items-center justify-center shrink-0">
                        <span className="font-mono text-[11px] font-semibold text-black/35">
                          {project.id}
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-black/30">
                          {project.year}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-black/50">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress indicators */}
            <div className="mb-8 flex gap-1.5">
              {projects.map((_, i) => (
                <span
                  key={i}
                  className={`h-0.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-10 bg-black/50"
                      : "w-5 bg-black/12"
                  }`}
                />
              ))}
            </div>

            {/* CTA link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-black/35 hover:text-black transition-colors duration-200 group"
            >
              <span className="border-b border-black/15 group-hover:border-black pb-px transition-colors duration-200">
                Voir tous les projets
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* ── RIGHT COLUMN — image track ───────────────────────────────── */}
          <div
            className="flex-1 relative overflow-hidden"
            style={{ height: `${CARD_VH}vh` }}
          >
            {/* Scrolling track */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                transform: `translateY(-${trackOffset}px)`,
                gap: `${GAP}px`,
                transition: "transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)",
              }}
            >
              {projects.map((project, index) => {
                return (
                  <Link
                    key={project.id}
                    href={`/projets/${project.slug}`}
                    className="relative block shrink-0 overflow-hidden cursor-pointer"
                    style={{ height: `${CARD_VH}vh` }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover"
                      priority={index === 0}
                    />

                    {/* Tags */}
                    <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/30 border border-white/20 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ── Mobile fallback (stacked cards) ─────────────────────────── */}
      <div className="lg:hidden max-w-3xl mx-auto px-5 py-16 space-y-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-black mb-8">
          Nos projets
        </p>
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projets/${project.slug}`}
            className="block overflow-hidden border border-black/10 bg-white"
          >
            <div className="relative h-[56vw] min-h-50 max-h-80">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/30 border border-white/20 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/40 mb-1">
                {project.year} — {project.category}
              </p>
              <h3 className="font-[Neue_Montreal] text-[22px] font-medium tracking-[-0.02em] text-black mb-3">
                {project.name}
              </h3>
              <p className="font-[Neue_Montreal] text-[14px] leading-[1.65] text-black/55">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
        <a
          href="#"
          className="inline-flex items-center gap-2 mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-black/40 hover:text-black transition-colors duration-200"
        >
          Voir tous les projets →
        </a>
      </div>
    </section>
  );
}
