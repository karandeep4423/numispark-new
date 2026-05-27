"use client";

import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";

const GAP = 24;

function computeVisible(width: number) {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
}

const testimonials = [
  {
    id: 1,
    title: "Impact immédiat",
    quote:
      "Un travail précis, stratégique et parfaitement exécuté. Le résultat renforce clairement notre positionnement premium.",
    name: "Sophie M.",
    role: "Directrice Communication Netflix",
    logo: "/images/card-illustration-01.svg",
  },
  {
    id: 2,
    title: "Vision et performance",
    quote:
      "Une approche UX claire, orientée business et conversion. Collaboration fluide et efficace.",
    name: "Thomas R.",
    role: "Head of Digital BMW Group",
    logo: "/images/card-illustration-02.svg",
  },
  {
    id: 3,
    title: "Design stratégique",
    quote:
      "Un équilibre parfait entre esthétique et performance. Les retours internes ont été excellents.",
    name: "Claire D.",
    role: "VP Marketing Europe Microsoft",
    logo: "/images/card-illustration-03.svg",
  },
  {
    id: 4,
    title: "Approche produit",
    quote:
      "Une vraie compréhension des enjeux utilisateurs et techniques. Impact visible dès le lancement.",
    name: "David C.",
    role: "Global Product Director Uber Eat",
    logo: "/images/card-illustration-04.svg",
  },
  {
    id: 5,
    title: "Exécution parfaite",
    quote:
      "Une équipe réactive, créative et très attentive aux détails. Le rendu final dépasse largement nos attentes.",
    name: "Julie P.",
    role: "Head of Brand Airbnb France",
    logo: "/images/card-illustration-01.svg",
  },
];

export default function TestimonialsSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardW, setCardW] = useState(0);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    function update() {
      const el = containerRef.current;
      if (!el) return;
      const w = el.offsetWidth;
      const vc = computeVisible(w);
      const cw = (w - (vc - 1) * GAP) / vc;
      setCardW(cw);
      setVisibleCount(vc);
      setOffset((o) => Math.min(o, Math.max(0, testimonials.length - vc)));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxOffset = Math.max(0, testimonials.length - visibleCount);
  const canPrev = offset > 0;
  const canNext = offset < maxOffset;

  const handlePrev = () => setOffset((o) => Math.max(0, o - 1));
  const handleNext = () => setOffset((o) => Math.min(maxOffset, o + 1));

  return (
    <section className="py-24 bg-white  w-full">
      {/* Header */}
      <div className="text-center px-8 mb-10">
        <p className="font-mono text-[12px] tracking-[0.18em] text-black/40">
          {"{ Témoignages }"}
        </p>
        <h2 className="mt-3 font-[Neue_Montreal] text-[40px] xl:text-[52px] font-medium leading-tight tracking-[-0.03em] text-black">
          Découvrez ce que nos clients ont à dire
        </h2>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-3 mb-10">
        <button
          onClick={handlePrev}
          disabled={!canPrev}
          aria-label="Précédent"
          className={`w-16 h-16 rounded-full border flex items-center justify-center text-base transition-all duration-200 ${
            !canPrev
              ? "border-black/15 text-black/25 cursor-not-allowed"
              : "border-black text-black  hover:bg-[#05ffe0] hover:border-[#05ffe0]"
          }`}
        >
          <Image src="/arrow-left.svg" alt="Précédent" width={24} height={24} />
        </button>
        <button
          onClick={handleNext}
          disabled={!canNext}
          aria-label="Suivant"
          className={`w-16 h-16 rounded-full border flex items-center justify-center text-base transition-all duration-200 ${
            !canNext
              ? "border-black/15 text-black/25 cursor-not-allowed"
              : "border-black text-black hover:bg-[#05ffe0] hover:border-[#05ffe0]"
          }`}
        >
          <Image src="/arrow-right.svg" alt="Suivant" width={24} height={24} />
        </button>
      </div>

      {/* Cards track */}
      <div
        ref={containerRef}
        className=" grid grid-cols-3 px-4 sm:px-8 overflow-hidden"
      >
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${-offset * (cardW + GAP)}px)`,
          }}
        >
          {testimonials.map((t) => {
            return (
              <div
                key={t.id}
                style={{
                  width:
                    cardW > 0
                      ? `${cardW}px`
                      : `calc((100% - ${(visibleCount - 1) * GAP}px) / ${visibleCount})`,
                }}
                className="group  relative shrink-0 rounded-[5px] border border-[#C8C8C8] bg-white pt-12 sm:pt-10 xl:pt-12 px-6 sm:px-8 xl:px-10.5 pb-8 xl:pb-10.5 flex flex-col justify-between  transition-all duration-500 cursor-pointer hover:border-black hover:bg-[linear-gradient(145deg,#E7ECF2_0%,#F5F7FA_100%)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              >
                {/* Quote icon pinned top-right at the same level as the title */}
                <Image
                  src="/images/card-format-quote.svg"
                  alt=""
                  width={72}
                  height={56}
                  className="absolute top-4 right-5 w-14 h-11 sm:w-9 sm:h-7 sm:top-2.5"
                />
                <div>
                  <h3 className="font-[Neue_Montreal] text-[24px] sm:text-[20px] lg:text-[22px] xl:text-[31px] font-semibold transition-all duration-500 group-hover:translate-y-2 text-black mb-4 leading-snug">
                    {t.title}
                  </h3>
                  <p className="font-[Neue_Montreal] group-hover:text-black transition-all duration-500 group-hover:translate-y-2 text-[15px] sm:text-[14px] lg:text-[17px] xl:text-[20px] leading-[1.72] text-black/50">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-8 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-black/5 border border-black/8 flex items-center justify-center shrink-0">
                    <Image
                      src={t.logo}
                      alt={t.name}
                      width={32}
                      height={32}
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-[14px] font-medium text-black leading-tight">
                      {t.name}
                    </p>
                    <p
                      className="font-mono text-[14px] text-black/40 mt-0.5 uppercase"
                      style={{ letterSpacing: "0.06em" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
