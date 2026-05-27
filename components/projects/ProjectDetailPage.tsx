import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "@/components/ui/VideoPlayer";
import ProjectGallery from "@/components/sections/ProjectGallery";
import type { Project } from "@/types/project";
import { ArrowLeftIcon, ArrowRightIcon } from "./components/Icons";
import MetaRow from "./components/MetaRow";
import ContentSection from "./components/ContentSection";

interface ProjectDetailPageProps {
  project: Project;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const galleryScreenshots = project.galleryImages.filter(
    (img) => !img.endsWith(".mp4"),
  );
  const galleryVideo = project.galleryImages[0]?.endsWith(".mp4")
    ? project.galleryImages[0]
    : null;

  return (
    <main className="bg-[#0f0f0f] text-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <Link
          href="/projets"
          aria-label="Retour aux projets"
          className="absolute bottom-[10%] left-[7.3%] z-10 flex h-[49px] w-[49px] items-center justify-center rounded-full border border-white/70 hover:border-white hover:bg-white/10 transition-all duration-300"
        >
          <ArrowLeftIcon />
        </Link>

        <h1 className="absolute bottom-[10%] left-[calc(7.3%+100px)] z-10 font-[Neue_Montreal] text-5xl font-medium leading-none text-white">
          {project.name}
        </h1>

        <div className="absolute right-[7.3%] bottom-[8%] z-10 w-[min(453px,42vw)] rounded-[5px] bg-[rgba(46,46,46,0.7)] backdrop-blur-[20px] px-10 py-12">
          <div className="flex flex-col gap-4">
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

            <div className="flex flex-col">
              <MetaRow label="Temps" value={project.duration} />
              <MetaRow label="Catégories" value={project.category} />
              <MetaRow label="Localisation" value={project.location} />
              <MetaRow label="Année" value={project.year} isLast />
            </div>

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
      {galleryVideo && (
        <section className="px-[7.3%] pb-16">
          <div className="relative w-full aspect-[4/3] lg:aspect-[16/9] overflow-hidden rounded-[5px]">
            <VideoPlayer src={galleryVideo} />
          </div>
        </section>
      )}

      {/* ── MASONRY GALLERY ── */}
      {galleryScreenshots.length > 0 && (
        <ProjectGallery images={galleryScreenshots} projectName={project.name} />
      )}

      {/* ── TEXT SECTIONS ── */}
      {project.sections[0] && (
        <ContentSection
          title={project.sections[0].title}
          body={project.sections[0].body}
        />
      )}
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
