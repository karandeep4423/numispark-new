"use client";

import { useState } from "react";
import CtaButton from "@/components/ui/CtaButton";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question:
      "Quels types de projets une agence web comme Numispark peut-elle prendre en charge ?",
    answer:
      "Numispark intervient sur des projets variés : sites vitrines, plateformes e-commerce, applications web sur mesure, refonte de marque et stratégie digitale. Chaque projet est abordé avec une approche personnalisée pour répondre à vos objectifs spécifiques.",
  },
  {
    id: 2,
    question: "Est-ce que Numispark s'adapte à mon secteur d'activité ?",
    answer:
      "Absolument ! Notre expérience couvre de nombreux secteurs : e-commerce, services B2B et B2C, éducation, coaching, tourisme, immobilier, santé, industrie, etc. Nous prenons le temps de comprendre les spécificités de votre secteur pour vous proposer des solutions adaptées à vos enjeux et à votre audience. Nos références clients témoignent de notre capacité à nous adapter à des univers variés.",
  },
  {
    id: 3,
    question: "Suis-je propriétaire de mon site/application à la livraison ?",
    answer:
      "Oui, vous êtes pleinement propriétaire de votre projet à la livraison. Les accès, les sources et tous les droits vous sont transférés. Nous vous accompagnons pour assurer une passation complète et sereine.",
  },
  {
    id: 4,
    question:
      "Est-ce que je peux avoir un accompagnement après la mise en ligne ?",
    answer:
      "Bien sûr. Nous proposons des formules de maintenance et d'accompagnement post-lancement pour assurer la performance et l'évolution de votre produit dans le temps.",
  },
  {
    id: 5,
    question:
      "Quels sont vos délais et comment garantissez-vous la ponctualité ?",
    answer:
      "Les délais varient selon la complexité du projet. Nous établissons un planning détaillé dès le démarrage avec des jalons clairs. Notre méthode de travail agile nous permet d'anticiper les imprévus et de respecter les engagements pris.",
  },
] as const;

interface FaqSectionProps {
  /** Render a 1px horizontal divider at the top of the section (used on non-home pages per Figma) */
  withTopDivider?: boolean;
}

export default function FaqSection({
  withTopDivider = false,
}: FaqSectionProps = {}) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      {withTopDivider && <div className="h-px w-full bg-black/10 mt-10 xl:mt-12 mb-20 xl:mb-24 " />}
      <section className="flex w-full flex-col pb-20 md:flex-row md:items-stretch">
        <div className="w-full bg-white px-8  md:w-1/2 md:px-14 xl:px-22.25">
        <p className="mb-6 font-mono text-[11px] tracking-[0.18em] text-black/35">
          {"{ F.A.Q }"}
        </p>

        <h2 className="mb-12 font-[Neue_Montreal] text-[38px] font-medium leading-[1.08] tracking-[-0.02em] text-black md:text-[45px] xl:text-[52px]">
          Questions
          <br />
          fréquemment posées
        </h2>

        <div className="h-px bg-black/10" />

        <div>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border-b border-black/10 transition-colors duration-200 ${
                  isOpen
                    ? "bg-[linear-gradient(180deg,#f6f9fc_0%,#f3f6fa_100%)]"
                    : "hover:bg-[linear-gradient(180deg,#f7faff_0%,#eef3f8_100%)]"
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className={`group flex w-full items-start justify-between gap-6 py-6 text-left transition-all duration-200 ${
                    isOpen ? "px-3" : "hover:px-3"
                  }`}
                >
                  <span className="font-[Neue_Montreal] text-[15px] leading-snug font-normal text-black md:text-[16px] lg:text-[17px] xl:text-[18px]">
                    {faq.question}
                  </span>
                  <Image
                    className={`h-7 w-7 shrink-0 transition-transform duration-500 ${
                      isOpen ? "rotate-180" : "group-hover:rotate-180"
                    }`}
                    src="/faq-btn.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div
                    className={`overflow-hidden transition-colors duration-200 ${
                      isOpen ? "px-3" : ""
                    }`}
                  >
                    <p className="font-[Neue_Montreal] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.78] text-[#7F7F7F]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <CtaButton>D&apos;AUTRES QUESTIONS</CtaButton>
        </div>
      </div>

        <div className="relative hidden self-stretch bg-black md:block md:w-1/2">
          <video
            src="/faq-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
