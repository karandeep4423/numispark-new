"use client";

import { useState } from "react";
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
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* ── Left: FAQ ── */}
      <div className="w-full md:w-[55%] px-8 md:px-14 lg:px-20 py-20 bg-white">
        {/* Label */}
        <p className="font-mono text-[11px] tracking-[0.18em] text-black/35 mb-6">
          {"{ F.A.Q }"}
        </p>

        {/* Heading */}
        <h2 className="font-[Neue_Montreal] text-[38px] md:text-[50px] font-medium leading-[1.08] tracking-[-0.02em] text-black mb-12">
          Questions
          <br />
          fréquemment posées
        </h2>

        {/* Top divider */}
        <div className="h-px bg-black/10" />

        {/* Accordion */}
        <div>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-black/10">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="font-[Neue_Montreal] text-[14px] md:text-[15px] font-normal text-black leading-snug">
                    {faq.question}
                  </span>
                  {/* + rotates 45° to become × when open */}
                  <span
                    className={`mt-0.5 shrink-0 text-[10px] leading-none text-black/40 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <Image
                      src="/faq-btn.svg"
                      alt="Toggle answer"
                      width={15}
                      height={15}
                    />
                  </span>
                </button>

                {/* Collapsible answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-[Neue_Montreal] text-[13px] leading-[1.78] text-black/40">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA button */}
        <div className="mt-12">
          <button className="flex items-center gap-3 px-6 py-3 border border-black/20 rounded-full font-mono text-[11px] tracking-[0.14em] text-black/50 hover:border-black hover:text-black transition-all duration-200">
            D&apos;AUTRES QUESTIONS
            <span className="text-[16px] leading-none">+</span>
          </button>
        </div>
      </div>

      {/* ── Right: sticky video panel ── */}
      <div className="hidden md:block md:w-[45%] bg-black self-stretch relative">
        <div className="top-0 h-screen overflow-hidden">
          <video
            src="/faq-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
