"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function ProjectGallery({
  images,
  projectName,
}: {
  images: string[];
  projectName: string;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i !== null ? Math.max(0, i - 1) : null)),
    []
  );
  const next = useCallback(
    () =>
      setLightbox((i) =>
        i !== null ? Math.min(images.length - 1, i + 1) : null
      ),
    [images.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  return (
    <section className="px-[7.3%] pb-16">
      {/* ── Masonry grid — no empty space ── */}
      <div className="columns-1 md:columns-2 gap-3">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid mb-3">
            <button
              onClick={() => setLightbox(i)}
              className="group relative w-full block overflow-hidden rounded-[6px] cursor-zoom-in"
              aria-label={`Agrandir aperçu ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${projectName} — aperçu ${i + 1}`}
                width={960}
                height={2000}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                priority={i === 0}
              />
              {/* subtle hover overlay */}
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 rounded-[6px]" />
            </button>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
          onClick={close}
        >
          {/* Fixed UI — always visible regardless of scroll */}
          <button
            onClick={close}
            className="fixed top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fermer"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <span className="fixed top-5 left-1/2 z-10 -translate-x-1/2 text-white/50 font-mono text-sm pointer-events-none">
            {lightbox + 1} / {images.length}
          </span>

          {lightbox > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="fixed left-4 md:left-8 top-1/2 z-10 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Précédent"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {lightbox < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="fixed right-4 md:right-8 top-1/2 z-10 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Suivant"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Scrollable image — plain <img> to avoid next/image height constraints */}
          <div
            className="mx-auto max-w-5xl px-16 md:px-24 py-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={lightbox}
              src={images[lightbox]}
              alt={`${projectName} — aperçu ${lightbox + 1}`}
              className="w-full h-auto block rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
}
