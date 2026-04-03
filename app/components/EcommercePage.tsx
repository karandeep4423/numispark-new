import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ProcessTimelineSection, {
  type ProcessStep,
} from "./ProcessTimelineSection";
import NosProjectsSection from "./NosProjectsSection";
import FaqSection from "./FaqSection";

type EcommerceServiceSection = {
  title: string;
  description: string;
  blurb?: string;
  media:
    | { kind?: "image" | "video"; src: string; alt: string }
    | { kind: "color"; bg: string; logoSrc: string; logoAlt: string; alt: string };
  items: Array<{
    number: string;
    title: string;
    description?: string;
  }>;
};

type EcommerceTypeSection = {
  title: string;
  description: string;
  media?: { src: string; alt: string };
  items: string[];
};

type WhyChooseCard = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const SERVICE_SECTIONS: EcommerceServiceSection[] = [
  {
    title: "Création de boutiques en ligne sur-mesure",
    description:
      "Nous concevons des sites e-commerce entièrement personnalisés qui reflètent parfaitement votre marque et répondent aux besoins spécifiques de votre activité.",
    blurb:
      "Cette approche sur-mesure est idéale pour les entreprises ayant des besoins spécifiques non couverts par les solutions standard, ou souhaitant se démarquer avec une expérience d'achat unique.",
    media: {
      src: "/ecommerce/service-boutiques.jpg",
      alt: "Boutique e-commerce sur-mesure",
    },
    items: [
      { number: "01", title: "Architectures e-commerce robustes et évolutives" },
      { number: "02", title: "Design unique et parfaitement aligné avec votre identité" },
      { number: "03", title: "Expérience d'achat fluide et intuitive" },
      { number: "04", title: "Fonctionnalités avancées et personnalisées" },
      { number: "05", title: "Optimisation SEO intégrée dès la conception" },
      { number: "06", title: "Performances et vitesse de chargement optimales" },
      { number: "07", title: "Compatibilité multi-appareils (responsive design)" },
    ],
  },
  {
    title: "Développement PrestaShop",
    description:
      "Exploitez tout le potentiel de la solution e-commerce open-source française la plus populaire pour créer une boutique performante et évolutive.",
    blurb:
      "PrestaShop offre un excellent équilibre entre puissance, flexibilité et coût, idéal pour les PME et les projets e-commerce ambitieux en B2C ou B2B.",
    media: {
      kind: "color",
      bg: "#fadeeb",
      logoSrc: "/ecommerce/logo-prestashop.png",
      logoAlt: "PrestaShop",
      alt: "Développement PrestaShop",
    },
    items: [
      { number: "01", title: "Installation et configuration avancée" },
      { number: "02", title: "Développement de thèmes personnalisés" },
      { number: "03", title: "Création de modules sur-mesure" },
      { number: "04", title: "Migration et mise à niveau de versions" },
      { number: "05", title: "Optimisation des performances" },
      { number: "06", title: "Intégration multi-boutiques et multilingue" },
      { number: "07", title: "Connexion avec vos outils métier (ERP, CRM, logistique)" },
    ],
  },
  {
    title: "Développement Shopify & Shopify Plus",
    description:
      "Lancez rapidement une boutique performante grâce à la plateforme SaaS leader du marché, reconnue pour sa stabilité et sa facilité d'utilisation.",
    blurb:
      "Shopify est la solution idéale pour les startups et les marques souhaitant une mise sur le marché rapide et une plateforme évolutive sans maintenance technique.",
    media: {
      kind: "color",
      bg: "#e8f1d7",
      logoSrc: "/ecommerce/logo-shopify.png",
      logoAlt: "Shopify",
      alt: "Développement Shopify",
    },
    items: [
      { number: "01", title: "Déploiement et personnalisation complète" },
      { number: "02", title: "Développement de thèmes sur-mesure" },
      { number: "03", title: "Création d'applications privées Shopify" },
      { number: "04", title: "Optimisation de la conversion" },
      { number: "05", title: "Configuration des passerelles de paiement" },
      { number: "06", title: "Intégration avec vos systèmes existants" },
      { number: "07", title: "Stratégies d'automatisation et scaling" },
    ],
  },
  {
    title: "Développement WooCommerce",
    description:
      "Transformez votre site WordPress en une boutique en ligne puissante et flexible, parfaitement intégrée à votre écosystème existant.",
    blurb:
      "WooCommerce est particulièrement adapté pour les entreprises disposant déjà d'un site WordPress, ou souhaitant combiner contenu éditorial et e-commerce.",
    media: {
      kind: "color",
      bg: "#f1ecf7",
      logoSrc: "/ecommerce/logo-woocommerce.png",
      logoAlt: "WooCommerce",
      alt: "Développement WooCommerce",
    },
    items: [
      { number: "01", title: "Installation et configuration optimisée" },
      { number: "02", title: "Thèmes et extensions personnalisés" },
      { number: "03", title: "Développement de fonctionnalités spécifiques" },
      { number: "04", title: "Optimisation des performances" },
      { number: "05", title: "Sécurisation renforcée" },
      { number: "06", title: "Intégration avec l'écosystème WordPress" },
      { number: "07", title: "Solutions de paiement avancées" },
    ],
  },
  {
    title: "Refonte et migration e-commerce",
    description:
      "Transformez votre boutique existante en une plateforme moderne, performante et génératrice de croissance.",
    media: {
      src: "/ecommerce/service-refonte.jpg",
      alt: "Refonte et migration e-commerce",
    },
    items: [
      { number: "01", title: "Audit complet de votre plateforme actuelle" },
      { number: "02", title: "Recommandations stratégiques et techniques" },
      { number: "03", title: "Migration de données (produits, clients, commandes)" },
      { number: "04", title: "Refonte UX/UI pour maximiser les conversions" },
      { number: "05", title: "Préservation du référencement et redirection" },
      { number: "06", title: "Transition sans interruption d'activité" },
      { number: "07", title: "Formations et accompagnement post-migration" },
    ],
  },
  {
    title: "Optimisation e-commerce & conversion",
    description:
      "Maximisez le rendement de votre boutique en ligne avec des optimisations ciblées sur l'expérience utilisateur et la conversion.",
    blurb:
      "Ces optimisations permettent d'augmenter significativement votre taux de conversion et votre panier moyen sans nécessiter une refonte complète.",
    media: {
      src: "/ecommerce/service-optimisation.jpg",
      alt: "Optimisation e-commerce et conversion",
    },
    items: [
      { number: "01", title: "Analyse des parcours d'achat et points de friction" },
      { number: "02", title: "Optimisation du tunnel de conversion" },
      { number: "03", title: "A/B testing sur les éléments clés" },
      { number: "04", title: "Amélioration de l'expérience mobile" },
      { number: "05", title: "Optimisation des fiches produits" },
      { number: "06", title: "Mise en place de stratégies cross-selling et upselling" },
      { number: "07", title: "Analyse et amélioration continue basée sur les données" },
    ],
  },
];

const ECOMMERCE_TYPE_SECTIONS: EcommerceTypeSection[] = [
  {
    title: "E-commerce B2C",
    description:
      "Solutions optimisées pour la vente aux particuliers",
    items: [
      "Catalogues produits attractifs",
      "Parcours d'achat simplifiés",
      "Gestion des promotions et fidélisation",
      "Intégration réseaux sociaux et marketplace",
      "Avis clients et notations produits",
      "Paiements multiples (CB, PayPal, Apple Pay...)",
      "Optimisation mobile pour achats impulsifs",
    ],
  },
  {
    title: "E-commerce B2B",
    description:
      "Plateformes spécialisées pour la vente aux professionnels",
    media: {
      src: "/ecommerce/section-b2b.jpg",
      alt: "E-commerce B2B — vente aux professionnels",
    },
    items: [
      "Tarification personnalisée et devis en ligne",
      "Comptes clients avec hiérarchie d'accès",
      "Catalogues et conditions spécifiques par client",
      "Processus de validation de commandes",
      "Facturation et paiement différé",
      "Intégration avec vos systèmes ERP",
      "Commandes récurrentes et par lots",
    ],
  },
  {
    title: "Marketplaces & Plateformes multi-vendeurs",
    description:
      "Solutions pour créer votre propre plateforme de mise en relation",
    items: [
      "Gestion des vendeurs et commissionnement",
      "Système de notation et avis",
      "Messagerie interne",
      "Gestion des litiges",
      "Paiements sécurisés et séquestres",
      "Tableau de bord vendeur",
      "Analytics et reporting avancés",
    ],
  },
  {
    title: "E-commerce international",
    description:
      "Boutiques optimisées pour la vente à l'international",
    items: [
      "Multi-devises et multi-langues",
      "Adaptation aux spécificités locales",
      "Gestion de la TVA et taxes internationales",
      "Intégration logistique transfrontalière",
      "Localisation des contenus",
      "Optimisation SEO multilingue",
      "Méthodes de paiement internationales",
    ],
  },
];

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Analyse & Stratégie",
    description:
      "Nous commençons par comprendre votre activité, vos produits, votre marché et vos objectifs commerciaux. Notre phase d'analyse inclut un audit de l'existant (si refonte), une analyse approfondie de la concurrence, la définition des parcours client idéaux, la sélection de la solution technique la mieux adaptée à vos besoins, la planification des fonctionnalités prioritaires et l'établissement du calendrier de déploiement pour assurer un lancement réussi.",
  },
  {
    number: "02",
    title: "Design UX/UI E-commerce",
    description:
      "Nous concevons une expérience d'achat optimisée pour la conversion. Cette phase comprend la création de wireframes des pages clés (accueil, catégories, fiches produit, panier, tunnel), le développement de maquettes graphiques desktop et mobile, l'optimisation des parcours d'achat pour maximiser les conversions, la réalisation de prototypes interactifs pour validation et la création d'un design responsif adapté à tous les appareils.",
  },
  {
    number: "03",
    title: "Développement & Intégration",
    description:
      "Nous développons votre boutique avec un focus sur la qualité, la performance et l'évolutivité. Cette étape inclut la configuration de la plateforme et de l'hébergement, le développement frontend et backend de votre solution, l'intégration complète du catalogue produits, la mise en place des passerelles de paiement sécurisées, la connexion avec vos outils métier (ERP, logistique) et la réalisation de tests fonctionnels et d'intégration pour garantir la fiabilité de l'ensemble.",
  },
  {
    number: "04",
    title: "Tests & Assurance Qualité",
    description:
      "Nous validons minutieusement chaque aspect de votre boutique pour garantir une expérience utilisateur irréprochable. Cette phase comprend des tests sur tous les appareils et navigateurs, la simulation complète des parcours d'achat, des tests de charge et performance pour assurer la stabilité, la validation de la sécurité et de la conformité, les tests des processus métier (commandes, stocks, etc.) et l'optimisation finale avant lancement.",
  },
  {
    number: "05",
    title: "Lancement & Accompagnement",
    description:
      "Nous assurons un déploiement maîtrisé et un suivi post-lancement pour garantir votre succès. Cette dernière étape inclut la migration en production, la formation complète de votre équipe, la fourniture d'une documentation technique et utilisateur détaillée, un support technique post-lancement réactif, l'analyse des premières données de vente pour identifier les opportunités et la réalisation d'optimisations et ajustements continus.",
  },
];

const PLATFORM_LOGOS = [
  { src: "/ecommerce/logo-woocommerce.png", alt: "WooCommerce", width: 160 },
  { src: "/ecommerce/logo-shopify.png", alt: "Shopify", width: 120 },
  { src: "/ecommerce/logo-prestashop.png", alt: "PrestaShop", width: 150 },
  { src: "/ecommerce/logo-bigcommerce.png", alt: "BigCommerce", width: 160 },
];

const WHY_CHOOSE: WhyChooseCard[] = [
  {
    number: "01",
    title: "Expertise E-commerce Complète",
    description:
      "Notre équipe combine expertise technique et compréhension des enjeux business du e-commerce pour créer des solutions qui génèrent des résultats concrets.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30 5L32.5 22.5L47 15L37 28L55 30L37 32L47 45L32.5 37.5L30 55L27.5 37.5L13 45L23 32L5 30L23 28L13 15L27.5 22.5Z"
          stroke="black"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Focus sur la Conversion",
    description:
      "Nous ne nous contentons pas de créer des sites beaux, mais des plateformes qui convertissent vos visiteurs en clients grâce à des parcours d'achat optimisés.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 30C6 30 15.5 12 30 12C44.5 12 54 30 54 30C54 30 44.5 48 30 48C15.5 48 6 30 6 30Z"
          stroke="black"
          strokeWidth="1.4"
        />
        <circle cx="30" cy="30" r="8" stroke="black" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Évolutivité & Scalabilité",
    description:
      "Nos solutions sont conçues pour évoluer avec votre business, de vos premiers clients à des volumes de commandes importants, sans compromettre les performances.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 53H22V39H37V25H52V11"
          stroke="black"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7 39H22" stroke="black" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M22 53V39" stroke="black" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M37 39V25" stroke="black" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M52 25V11" stroke="black" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Sécurité & Conformité",
    description:
      "Nous implémentons les standards les plus stricts en matière de sécurité des paiements (PCI-DSS) et de protection des données (RGPD) pour une totale tranquillité.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="9" stroke="black" strokeWidth="1.4" />
        <path
          d="M30 8V12M30 48V52M52 30H48M12 30H8M45.5 14.5L42.7 17.3M17.3 42.7L14.5 45.5M45.5 45.5L42.7 42.7M17.3 17.3L14.5 14.5"
          stroke="black"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Approche Data-Driven",
    description:
      "Nos décisions sont guidées par les données, avec mise en place d'outils d'analyse permettant de mesurer précisément vos performances et d'identifier les opportunités.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="34" width="10" height="18" stroke="black" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="24" y="24" width="10" height="28" stroke="black" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="40" y="14" width="10" height="38" stroke="black" strokeWidth="1.4" strokeLinejoin="round" />
        <line x1="5" y1="52" x2="55" y2="52" stroke="black" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

function EcommerceServiceMedia({ media }: { media: EcommerceServiceSection["media"] }) {
  if (media.kind === "color") {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: media.bg }}
      >
        <Image
          src={media.logoSrc}
          alt={media.logoAlt}
          width={200}
          height={100}
          className="object-contain max-w-[60%]"
          unoptimized
        />
      </div>
    );
  }

  if (media.kind === "video") {
    return (
      <video
        src={media.src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-label={media.alt}
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
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
  section: EcommerceServiceSection;
  isFirst?: boolean;
}) {
  return (
    <section className={`py-16 ${isFirst ? "" : "border-t border-[#ececec]"}`}>
      <div className="mx-auto grid max-w-350 gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-6">
          <div className="relative aspect-4/5 overflow-hidden bg-[#111] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <EcommerceServiceMedia media={section.media} />
            {section.media.kind !== "color" && (
              <>
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="rounded-[14px] bg-black/68 p-4 backdrop-blur-sm">
                    <p className="font-[Neue_Montreal] text-[13px] leading-6 text-white/86">
                      {section.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          {section.blurb && (
            <p className="font-[Neue_Montreal] text-[14px] leading-7 text-black/60">
              {section.blurb}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black lg:text-[34px]">
              {section.title}
            </h3>
            <p className="mt-3 max-w-3xl font-[Neue_Montreal] text-[15px] leading-7 text-black">
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
                    <span className="max-w-175 font-[Neue_Montreal] text-[14px] leading-6 text-black">
                      {item.title}
                    </span>
                  </div>
                  <Image
                    src="/images/list-group-9.svg"
                    width={16}
                    height={16}
                    className="ml-4 w-4 leading-none text-black transition-transform duration-300 group-open:rotate-45"
                    alt=""
                  />
                </summary>
                {item.description ? (
                  <p className="mt-3 max-w-2xl font-[Neue_Montreal] text-[13px] leading-7 text-black/55">
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

function EcommerceTypeSectionBlock({ section }: { section: EcommerceTypeSection }) {
  return (
    <section className="py-10">
      <div className="mx-auto grid max-w-350 gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 lg:px-12 xl:px-16">
        <div className="relative aspect-4/5 overflow-hidden bg-[#0f0f0f]">
          {section.media ? (
            <>
              <Image
                src={section.media.src}
                alt={section.media.alt}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-[#121417] to-[#1e222a]">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black lg:text-[34px]">
              {section.title}
            </h3>
            <p className="mt-3 max-w-2xl font-[Neue_Montreal] text-[15px] leading-7 text-black">
              {section.description}
            </p>
          </div>

          <ul className="border-t border-[#e9e9e9]">
            {section.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-b border-[#e9e9e9] py-5"
              >
                <Image
                  src="/mobile/check.svg"
                  width={20}
                  height={20}
                  className="size-5 shrink-0"
                  alt=""
                />
                <span className="font-[Neue_Montreal] text-[14px] leading-6 text-black">
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
    <article className="flex flex-col border border-[#c8c8c8] bg-white px-8 py-10 sm:px-12 sm:py-12">
      <div className="flex items-start justify-between gap-6">
        <div className="text-black">{card.icon}</div>
        <span className="font-['Roboto_Mono'] text-[11px] font-light text-black">
          {card.number}
        </span>
      </div>
      <h3 className="mt-12 font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black lg:text-[34px]">
        {card.title}
      </h3>
      <p className="mt-auto pt-20 font-[Neue_Montreal] text-[16px] leading-8 text-[#7f7f7f] lg:text-[18px]">
        {card.description}
      </p>
    </article>
  );
}

function WhyImageBlock() {
  return (
    <div className="relative overflow-hidden border border-[#c8c8c8] bg-[#f5f5f5]">
      <Image
        src="/ecommerce/why-choose-photo.jpg"
        alt="Solutions e-commerce"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
}

export default function EcommercePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden bg-[#121417] text-white">
        <Image
          src="/ecommerce/hero-bg.jpg"
          alt="Boutique e-commerce performante"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-16 left-8 max-w-3xl z-10 sm:left-12">
          <h1 className="font-[Neue_Montreal] text-[44px] font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-[54px]">
            Transformez votre activité
            <br className="hidden sm:block" />
            avec une boutique en ligne performante
          </h1>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 rounded-full bg-white px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:bg-[#05ffe0]"
            >
              Consultation gratuite
              <span className="text-[15px] leading-none">+</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-4 rounded-full border border-white/50 bg-transparent px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              Découvrez nos services
              <span className="text-[15px] leading-none">+</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies / Platforms */}
      <section className="border-t border-[#efefef] bg-white pt-16">
        <div className="mx-auto grid max-w-350 gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:px-12 xl:px-16">
          <div>
            <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px]">
              Technologies que nous maîtrisons
            </h2>
          </div>
          <div className="grid gap-4 text-[15px] leading-7 text-black sm:grid-cols-2 lg:grid-cols-1">
            <p>
              Chez Numispark, nous développons des solutions e-commerce sur-mesure qui transforment
              vos visiteurs en clients fidèles et boostent votre chiffre d&apos;affaires.
            </p>
            <p>
              Nous maîtrisons les principales plateformes du marché pour vous proposer la solution
              la mieux adaptée à vos besoins et ambitions.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-350 px-6 pb-16 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {PLATFORM_LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center rounded-2xl bg-[#f5f5f5] px-8 py-10"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={60}
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service blocks */}
      <section className="">
        <div className="mx-auto max-w-350 px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[30px] font-medium leading-tight text-black lg:text-[36px]">
            Nos services de développement e-commerce
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

      {/* E-commerce types */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-350 px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px]">
            Solutions e-commerce adaptées à vos besoins
          </h2>
        </div>

        <div className="mt-10 flex flex-col">
          {ECOMMERCE_TYPE_SECTIONS.map((section) => (
            <EcommerceTypeSectionBlock key={section.title} section={section} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white">
        <div className="mx-auto max-w-350 px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px]">
            Pourquoi choisir Numispark pour votre e-commerce&nbsp;?
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-350 grid-cols-1 md:grid-cols-2">
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
