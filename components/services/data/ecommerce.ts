import type { ReactNode } from "react";
import type { ProcessStep } from "@/types/process";

export type EcommerceServiceMedia =
  | { kind?: "image" | "video"; src: string; alt: string }
  | {
      kind: "color";
      bg: string;
      logoSrc: string;
      logoAlt: string;
      alt: string;
    };

export interface EcommerceServiceSection {
  title: string;
  description: string;
  blurb?: string;
  media: EcommerceServiceMedia;
  items: Array<{
    number: string;
    title: string;
    description?: string;
  }>;
}

export interface EcommerceTypeSection {
  title: string;
  description: string;
  media?: { src: string; alt: string };
  items: string[];
}

export interface WhyChooseCard {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export const SERVICE_SECTIONS: EcommerceServiceSection[] = [
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
      logoSrc: "/ecommerce/presta-shop-logo.png",
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

export const ECOMMERCE_TYPE_SECTIONS: EcommerceTypeSection[] = [
  {
    title: "E-commerce B2C",
    description: "Solutions optimisées pour la vente aux particuliers",
    media: {
      src: "/ecommerce/ecommerce-b2c.svg",
      alt: "E-commerce B2C — vente aux particuliers",
    },
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
    description: "Plateformes spécialisées pour la vente aux professionnels",
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
    description: "Solutions pour créer votre propre plateforme de mise en relation",
    media: {
      src: "/ecommerce/marketplaces.svg",
      alt: "Marketplaces & Plateformes multi-vendeurs",
    },
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
    description: "Boutiques optimisées pour la vente à l'international",
    media: {
      src: "/ecommerce/ecom-international.svg",
      alt: "E-commerce international — vente à l'international",
    },
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

export const ECOMMERCE_PROCESS_STEPS: ProcessStep[] = [
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
