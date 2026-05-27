"use client";

import { useState } from "react";
import Image from "next/image";
import type { AccordionService } from "@/types/service";

// ─── Default data (homepage services list) ───────────────────────────────────
const DEFAULT_SERVICES: AccordionService[] = [
  {
    number: "01",
    title: "Création de site web",
    description:
      "Nous construisons des sites internet sur-mesure, responsives et optimisés pour les moteurs de recherche, qui convertiront vos visiteurs en clients.",
    expertise: [
      "Design mobile-first pour une expérience utilisateur optimale sur tous les appareils",
      "Développement personnalisé ou CMS selon vos besoins",
      "Optimisation SEO intégrée dès la conception",
      "Sites vitrines performants et sites e-commerce évolutifs",
      "Interfaces administratives intuitives pour une gestion facilitée",
    ],
    image: "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
  },
  {
    number: "02",
    title: "Développement d'applications mobiles",
    description:
      "Nous concevons des applications mobiles natives et cross-platform performantes, pensées pour offrir une expérience fluide et engageante à vos utilisateurs.",
    expertise: [
      "Applications iOS et Android sur-mesure",
      "Développement cross-platform avec React Native",
      "UX/UI optimisée pour les usages mobiles",
      "Intégration d'API et services tiers",
    ],
    image: "/images/capture-decran-20260307-a-1836221.png",
  },
  {
    number: "03",
    title: "Stratégie webmarketing & référencement",
    description:
      "Nous élaborons des stratégies digitales complètes pour améliorer votre visibilité en ligne et attirer un trafic qualifié vers votre site.",
    expertise: [
      "Audit SEO technique et sémantique",
      "Stratégie de contenu et netlinking",
      "Campagnes publicitaires Google Ads & Meta Ads",
      "Analytics et reporting de performance",
    ],
    image: "/images/card-illustration-01.svg",
  },
  {
    number: "04",
    title: "Conception UX/UI",
    description:
      "Nous créons des interfaces intuitives et esthétiques qui placent l'utilisateur au centre de chaque décision de design.",
    expertise: [
      "Recherche utilisateur et personas",
      "Wireframing et prototypage interactif",
      "Design systems cohérents et scalables",
      "Tests d'utilisabilité et itérations",
    ],
    image: "/images/card-illustration-02.svg",
  },
  {
    number: "05",
    title: "Solutions SaaS",
    description:
      "Nous développons des plateformes SaaS robustes et scalables, conçues pour répondre aux besoins métiers spécifiques de vos clients.",
    expertise: [
      "Architecture cloud-native et microservices",
      "Systèmes d'authentification et gestion des rôles",
      "Facturation et abonnements récurrents",
      "Tableaux de bord et analytics en temps réel",
    ],
    image: "/images/card-illustration-03.svg",
  },
  {
    number: "06",
    title: "Intelligence Artificielle & Automatisation",
    description:
      "Nous intégrons des solutions d'IA et d'automatisation pour optimiser vos processus métier et vous démarquer de la concurrence.",
    expertise: [
      "Intégration de modèles LLM (GPT, Claude, Mistral)",
      "Chatbots et assistants virtuels intelligents",
      "Automatisation des workflows métier",
      "Analyse prédictive et recommandations",
    ],
    image: "/images/card-illustration-04.svg",
  },
  {
    number: "07",
    title: "E-commerce",
    description:
      "Nous créons des boutiques en ligne performantes et optimisées pour la conversion, avec une expérience d'achat fluide sur tous les devices.",
    expertise: [
      "Développement Shopify, WooCommerce ou sur-mesure",
      "Tunnel d'achat optimisé pour la conversion",
      "Intégration de solutions de paiement sécurisées",
      "Gestion des stocks et des commandes",
    ],
    image: "/images/capture-decran-20260310-a-1052222.svg",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
interface ServicesAccordionSectionProps {
  /** Override the default services list */
  services?: AccordionService[];
}

export default function ServicesAccordionSection({
  services = DEFAULT_SERVICES,
}: ServicesAccordionSectionProps) {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="flex  w-full flex-col md:flex-row md:items-stretch bg-white">
      {/* Left: preview image — matches accordion column height */}
      <div className="relative hidden md:block md:w-[45%] self-stretch overflow-hidden shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={activeService}
          src={services[activeService].image}
          alt={services[activeService].title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      {/* Right: accordion list */}
      <div className="w-full md:w-[55%] flex flex-col mx-16">
        {services.map((service, index) => (
          <div key={index} className="border-b border-[#E0E0E0] first:border-t group transition-all duration-600 bg-[linear-gradient(127deg,transparent_0%,transparent_100%)] hover:bg-[linear-gradient(127deg,#E7ECF2_3.71%,rgba(231,236,242,0)_40.97%)]">
            <button
              className="w-full flex items-center justify-between py-6 px-3 text-left cursor-pointer"
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-center gap-5">
                <span className="font-mono text-[13px] lg:text-[14px]  leading-none transition-all duration-500  group-hover:ml-2">
                  {service.number}
                </span>
                <span
                  className={`font-[Neue_Montreal] text-[14px] lg:text-[19px] xl:text-[26px] leading-normal transition-colors duration-200 ${
                    activeService === index ? "font-semibold text-black" : "font-medium text-black"
                  }`}
                >
                  {service.title}
                </span>
              </div>
              <span className="text-black text-2xl font-light leading-none shrink-0">
                {activeService === index ? (
                  "−"
                ) : (
                  <Image className="transition-transform duration-500 group-hover:rotate-360" src="/faq-btn.svg" alt="Plus icon" width={20} height={20} />
                )}
              </span>
            </button>

            {activeService === index && (
              <div className="px-8 pb-8">
                <p className="text-[15px] lg:text-[17px] xl:text-[18px] text-[#7F7F7F] font-[Neue_Montreal] leading-[1.7] mb-5">
                  {service.description}
                </p>
                {service.expertise && (
                  <>
                    <p className="font-[Neue_Montreal] text-[14px] lg:text-[15px] xl:text-[16px] font-semibold text-black mb-3">
                      Notre expertise
                    </p>
                    <ul className="space-y-2">
                      {service.expertise.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[14px] lg:text-[15px] xl:text-[16px] text-[#7F7F7F] font-[Neue_Montreal] leading-[1.7]"
                        >
                          <span className=" shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
