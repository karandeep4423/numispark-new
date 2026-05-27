import Image from "next/image";
import type { ReactNode } from "react";
import CtaButton from "./CtaButton";
import ProcessTimelineSection, {
  type ProcessStep,
} from "./ProcessTimelineSection";
import Tools from "./Tools";
import NosProjectsSection from "./NosProjectsSection";
import FaqSection from "./FaqSection";

type ServiceSection = {
  title: string;
  eyebrow: string;
  description: string;
  media: {
    src: string;
    alt: string;
    kind?: "image" | "video";
  };
  items: Array<{
    number: string;
    title: string;
    description?: string;
  }>;
};

type ApplicationSection = {
  title: string;
  description: string;
  media: {
    src: string;
    alt: string;
    kind?: "image" | "video";
  };
  items: string[];
};

type WhyChooseCard = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const SERVICE_SECTIONS: ServiceSection[] = [
  {
    eyebrow: "",
    title: "Applications Natives iOS & Android",
    description:
      "Nous développons des applications natives haute performance qui exploitent pleinement les capacités de chaque plateforme pour offrir une expérience utilisateur optimale.",
    media: {
      src: "/mobile/service-native-app.png",
      alt: "Aperçu mobile",
      kind: "image",
    },
    items: [
      {
        number: "01",
        title: "Développement iOS avec Swift et SwiftUI",
      },
      {
        number: "02",
        title: "Développement Android avec Kotlin et Jetpack Compose",
      },
      {
        number: "03",
        title:
          "Intégration parfaite avec les fonctionnalités natives des appareils",
      },
      {
        number: "04",
        title:
          "Optimisation des performances et de la consommation de batterie",
      },
      {
        number: "05",
        title: "Compatibilité avec les dernières versions iOS et Android",
      },
      {
        number: "06",
        title: "Respect des guidelines de design Apple et Google",
      },
    ],
  },
  {
    eyebrow: "",
    title: "Applications Cross-Platform",
    description:
      "Optimisez votre budget et accélérez votre mise sur le marché avec nos solutions cross-platform qui permettent de développer une seule base de code pour iOS et Android.",
    media: {
      src: "/mobile/service-cross-app.png",
      alt: "Développement cross-platform",
    },
    items: [
      {
        number: "01",
        title:
          "Développement avec React Native pour une expérience proche du natif",
      },
      {
        number: "02",
        title:
          "Solutions Flutter pour des interfaces utilisateur fluides et animées",
      },
      {
        number: "03",
        title: "Réutilisation maximale du code entre plateformes (jusqu'à 80%)",
      },
      {
        number: "04",
        title: "Déploiement simultané sur iOS et Android",
      },
      {
        number: "05",
        title:
          "Intégration de modules natifs pour les fonctionnalités spécifiques",
      },
      {
        number: "06",
        title:
          "Optimisation des performances pour une expérience utilisateur fluide",
      },
    ],
  },
  {
    eyebrow: "",
    title: "Design UX/UI Mobile",
    description:
      "Nous créons des interfaces intuitives, esthétiques et centrées sur l'utilisateur pour maximiser l'engagement et la satisfaction de vos utilisateurs.",
    media: {
      src: "/mobile/design-ux-ui.png",
      alt: "Design mobile UX/UI",
    },
    items: [
      {
        number: "01",
        title: "Analyse des parcours utilisateurs et wireframing",
      },
      {
        number: "02",
        title: "Design d'interfaces respectant les guidelines iOS et Android",
      },
      {
        number: "03",
        title:
          "Prototypage interactif pour tester l'expérience avant développement",
      },
      {
        number: "04",
        title: "Optimisation des interactions tactiles et des gestes",
      },
      {
        number: "05",
        title: "Design adaptatif pour tous les formats d'écran",
      },
      {
        number: "06",
        title: "Animation et microinteractions pour une expérience engageante",
      },
      {
        number: "07",
        title: "Tests utilisateurs pour valider et affiner les interfaces",
      },
    ],
  },
  {
    eyebrow: "",
    title: "Maintenance et Évolution",
    description:
      "Nous assurons la pérennité et la performance de votre application avec nos services complets de maintenance et d'évolution.",
    media: {
      src: "/mobile/maintenance-evolution.png",
      alt: "Maintenance applicative",
    },
    items: [
      {
        number: "01",
        title:
          "Mises à jour régulières pour compatibilité avec les nouveaux OS",
      },
      {
        number: "02",
        title: "Monitoring de performance et optimisations continues",
      },
      {
        number: "03",
        title: "Correctifs de bugs et améliorations",
      },
      {
        number: "04",
        title: "Développement de nouvelles fonctionnalités",
      },
      {
        number: "05",
        title: "Analyse des données d'utilisation pour guider les évolutions",
      },
      {
        number: "06",
        title: "Optimisation ASO (App Store Optimization)",
      },
      {
        number: "07",
        title: "Support technique réactif et accompagnement stratégique",
      },
    ],
  },
];

const APPLICATION_SECTIONS: ApplicationSection[] = [
  {
    title: "Applications E-commerce & Retail",
    description:
      "Transformez votre boutique en ligne avec une application mobile offrant une expérience d'achat fluide et personnalisée.",
    media: {
      src: "/mobile/cross-platform.png",
      alt: "Application e-commerce mobile",
    },
    items: [
      "Catalogues produits interactifs",
      "Processus d'achat optimisé",
      "Paiements sécurisés",
      "Programmes de fidélité",
      "Notifications push pour promotions",
      "Intégration avec vos systèmes de gestion",
    ],
  },
  {
    title: "Applications Entreprise & B2B",
    description:
      "Optimisez vos processus métier avec des applications sur-mesure pour vos collaborateurs ou clients professionnels.",
    media: {
      src: "/mobile/enterprise-b2b.png",
      alt: "Application entreprise mobile",
    },
    items: [
      "Outils de productivité et gestion",
      "Applications métier spécifiques",
      "Portails clients et fournisseurs",
      "Tableaux de bord et reporting",
      "Intégration avec vos systèmes d'information",
      "Synchronisation offline/online",
    ],
  },
  {
    title: "Applications de Services & Marketplaces",
    description:
      "Créez de nouvelles opportunités business avec des plateformes de mise en relation et de services.",
    media: {
      src: "/mobile/mobile-service-app-native.png",
      kind: "image",
      alt: "Plateforme de services mobile",
    },
    items: [
      "Applications de réservation",
      "Marketplaces et plateformes communautaires",
      "Services de livraison et logistique",
      "Applications basées sur la géolocalisation",
      "Solutions de paiement intégrées",
      "Systèmes de notation et avis",
    ],
  },
  {
    title: "Applications Innovantes & IoT",
    description:
      "Explorez de nouveaux territoires avec des applications connectant objets intelligents et expériences immersives.",
    media: {
      src: "/mobile/innovative-iot.png",
      alt: "Applications innovantes et IoT",
    },
    items: [
      "Applications IoT (Internet des Objets)",
      "Réalité augmentée et virtuelle",
      "Intégration de wearables et objets connectés",
      "Solutions de santé et bien-être",
      "Applications utilisant l'intelligence artificielle",
      "Expériences gamifiées",
    ],
  },
];

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Définition & Stratégie",
    description:
      "Nous commençons par comprendre votre produit, votre audience et vos objectifs pour établir une feuille de route mobile claire et réaliste.",
  },
  {
    number: "02",
    title: "Design UX/UI",
    description:
      "Nous concevons des interfaces pensées pour les usages mobiles, avec des prototypes validés avant le développement.",
  },
  {
    number: "03",
    title: "Développement Agile",
    description:
      "Nous développons par itérations courtes afin de livrer rapidement, ajuster le produit et sécuriser la qualité à chaque étape.",
  },
  {
    number: "04",
    title: "Tests & Déploiement",
    description:
      "Nous validons les parcours, les performances et la compatibilité avant la mise en ligne sur les stores et les environnements cibles.",
  },
];

const WHY_CHOOSE: WhyChooseCard[] = [
  {
    number: "01",
    title: "Expertise Technique Avancée",
    description:
      "Notre équipe de développeurs seniors maîtrise les dernières technologies et bonnes pratiques de développement mobile pour des applications performantes et évolutives.",
    icon: (
      <Image src="/mobile/code.svg" alt="Code Icon" width={60} height={60} />
    ),
  },
  {
    number: "02",
    title: "Approche Centrée Utilisateur",
    description:
      "Nous plaçons l'expérience utilisateur au cœur de notre démarche, garantissant des applications intuitives et engageantes qui répondent aux attentes réelles de vos utilisateurs.",
    icon: (
      <Image
        src="/mobile/user-check.svg"
        alt="User Icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "03",
    title: "Vision Business",
    description:
      "Nous ne développons pas simplement des applications, nous créons des outils stratégiques alignés avec vos objectifs business, avec une attention particulière portée au ROI.",
    icon: (
      <Image
        src="/mobile/target.svg"
        alt="Target Icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "04",
    title: "Méthodologie Transparente",
    description:
      "Notre processus agile vous implique à chaque étape, avec des démonstrations régulières et une communication claire sur les choix techniques.",
    icon: <Image src="/mobile/eye.svg" alt="Eye Icon" width={60} height={60} />,
  },
  {
    number: "05",
    title: "Accompagnement Complet",
    description:
      "De la conception initiale à la maintenance long-terme, nous vous accompagnons à chaque étape de la vie de votre application, vous garantissant un partenariat durable.",
    icon: (
      <Image
        src="/mobile/document.svg"
        alt="Document Icon"
        width={60}
        height={60}
      />
    ),
  },
  {
    number: "06",
    title: "Support & Évolution",
    description:
      "Nous restons à vos côtés après la mise en ligne pour suivre les usages, corriger, faire évoluer et maintenir votre produit dans la durée.",
    icon: (
      <Image
        src="/mobile/document.svg"
        alt="Support Icon"
        width={60}
        height={60}
      />
    ),
  },
];

function ServiceMedia({ src, alt, kind }: ServiceSection["media"]) {
  if (kind === "video") {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 420px, 100vw"
      className="object-cover"
      unoptimized
    />
  );
}

function ServiceSectionBlock({
  section,
  isFirst,
}: {
  section: ServiceSection;
  isFirst?: boolean;
}) {
  return (
    <section className={`py-16 ${isFirst ? "" : "border-t border-[#ececec]"}`}>
      <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-8">
          {section.eyebrow ? (
            <p className="font-[Neue_Montreal] text-[30px] font-medium leading-tight text-black lg:text-[36px]">
              {section.eyebrow}
            </p>
          ) : null}

          <div className="relative aspect-4/5 overflow-hidden bg-[#111] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <ServiceMedia {...section.media} />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="rounded-[14px] bg-black/68 p-4 backdrop-blur-sm">
                <p className="font-[Neue_Montreal] text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.7] text-white/86">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black lg:text-[34px]">
              {section.title}
            </h3>
            <p className="mt-3 max-w-3xl font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-black">
              {section.description}
            </p>
          </div>

          <div className="border-t border-[#e9e9e9]">
            {section.items.map((item) => (
              <details
                key={item.number + item.title}
                className="group border-b border-[#e9e9e9] py-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 font-mono text-[11px] text-black">
                      {item.number}
                    </span>
                    <span className="max-w-175 font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-black">
                      {item.title}
                    </span>
                  </div>
                  <img
                    src="/images/list-group-9.svg"
                    className="ml-4 w-4 leading-none text-black transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                {item.description ? (
                  <p className="mt-3 max-w-2xl font-[Neue_Montreal] text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.7] text-black/55">
                    {item.description}
                  </p>
                ) : null}
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppTypeSectionBlock({ section }: { section: ApplicationSection }) {
  return (
    <section className="py-10">
      <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 lg:px-12 xl:px-16">
        <div className="relative aspect-4/5 overflow-hidden bg-[#0f0f0f]">
          <ServiceMedia {...section.media} />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black lg:text-[34px]">
              {section.title}
            </h3>
            <p className="mt-3 max-w-2xl font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-black">
              {section.description}
            </p>
          </div>

          <ul className="border-t border-[#e9e9e9]">
            {section.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-b border-[#e9e9e9] py-5"
              >
                <img
                  src="/mobile/check.svg"
                  className="flex size-5 shrink-0 items-center justify-center  text-[10px] leading-none text-black"
                />
                <span className="font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-black">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function WhyCardBlock({ card }: { card: WhyChooseCard }) {
  return (
    <article className="group relative min-h-85 border border-[#ececec] bg-white px-6 py-8 transition-all duration-600 hover:bg-gradient-to-b hover:from-white hover:to-[#ebebeb] sm:px-8 sm:py-10">
      <div className="flex items-start justify-between gap-6">
        <div className="text-black transition-transform duration-600 group-hover:translate-y-3">
          {card.icon}
        </div>
        <span className="font-mono text-[11px] text-black">{card.number}</span>
      </div>
      <h3 className="mt-8 font-[Neue_Montreal] text-[28px] lg:text-[30px] xl:text-[32px] font-medium leading-tight text-black transition-transform duration-600 group-hover:translate-y-3 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
        {card.title}
      </h3>
      <p className="mt-24 font-[Neue_Montreal] text-[15px] lg:text-[17px] xl:text-[18px] leading-[1.7] text-black/45 transition-all duration-600 group-hover:-translate-y-3 group-hover:text-black">
        {card.description}
      </p>
    </article>
  );
}

function WhyImageBlock() {
  return (
    <div className="relative min-h-85 overflow-hidden border border-[#ececec] bg-[#f5f5f5]">
      <Image
        src="/mobile/mobile-why-card.png"
        alt="Equipe en réunion"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover grayscale"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}

export default function MobileDevelopmentPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative w-full flex flex-col min-h-screen overflow-hidden bg-[#121417] text-white">
        <img
          src="/images/rectangle-2108.svg"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Bottom-left content */}
        <div className="relative max-w-7xl mx-auto w-full z-10 flex-1 flex flex-col justify-end px-10 md:px-20 pb-24">
          <h1 className="font-[Neue_Montreal] text-[44px] font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-[54px] lg:text-[60px] xl:text-[68px]">
            Agence création applications mobile
            <br className="hidden sm:block" />
            sur-mesure à Caen en Normandie
          </h1>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <CtaButton href="/contact" variant="filled-white">
              Consultation gratuite
            </CtaButton>
            <CtaButton href="/services" variant="outline-light">
              Découvrez nos services
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-t border-[#efefef] bg-white pt-16">
        <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:px-12 xl:px-16">
          <div>
            <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px] xl:text-[52px]">
              Technologies
              <br />
              que nous maîtrisons
            </h2>
          </div>
          <div className="grid gap-4 text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-black sm:grid-cols-2 lg:grid-cols-1">
            <p>
              Nous concevons des applications sur mesure, pensées pour offrir
              une expérience fluide, intuitive et efficace.
            </p>
            <p>
              Chaque projet est élaboré avec une attention particulière portée à
              l&apos;ergonomie, à la simplicité des parcours utilisateurs et à
              la cohérence de l&apos;interface.
            </p>
          </div>
        </div>

        <Tools />
      </section>

      {/* Service blocks */}
      <section className="">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[30px] font-medium leading-tight text-black lg:text-[36px]">
            Nos services de développement mobile
          </h2>
        </div>
      </section>
      {SERVICE_SECTIONS.map((section, i) => (
        <ServiceSectionBlock
          key={section.title}
          section={section}
          isFirst={i === 0}
        />
      ))}

      {/* Process timeline */}
      <ProcessTimelineSection steps={PROCESS_STEPS} />

      {/* Types of apps */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px] xl:text-[52px]">
            Types d&apos;applications que nous développons
          </h2>
        </div>

        <div className="mt-10 flex flex-col">
          {APPLICATION_SECTIONS.map((section) => (
            <AppTypeSectionBlock key={section.title} section={section} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px] xl:text-[52px]">
            Pourquoi choisir Numispark ?
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl w-full grid-cols-1 md:grid-cols-2 ">
          <WhyCardBlock card={WHY_CHOOSE[0]} />
          <WhyImageBlock />
          {WHY_CHOOSE.slice(1).map((card) => (
            <WhyCardBlock key={card.number} card={card} />
          ))}
        </div>
      </section>
      <NosProjectsSection />
      <FaqSection />
    </main>
  );
}
