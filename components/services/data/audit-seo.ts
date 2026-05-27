export const BENEFITS_CHECKLIST = [
  "100% gratuit et sans engagement",
  "Rapport détaillé en 24-48h",
  "Analyse par un expert SEO",
  "Recommandations personnalisées et actionnables",
];

export interface CardItem {
  number: string;
  title: string;
  description: string;
}

export const PROBLEMS: CardItem[] = [
  {
    number: "I",
    title: "Visibilité limitée sur Google",
    description:
      "Votre site reste invisible sur Google tandis que vos concurrents dominent les résultats de recherche",
  },
  {
    number: "II",
    title: "Un trafic organique qui ne progresse pas",
    description:
      "Vous investissez du temps et de l’argent dans votre site, mais votre trafic organique stagne",
  },
  {
    number: "III",
    title: "Des freins techniques invisibles",
    description:
      "Des problèmes techniques cachés bloquent l’indexation de vos pages sans que vous le sachiez",
  },
  {
    number: "IV",
    title: "Un contenu mal ciblé pour le référencement",
    description:
      "Vos contenus ne sont pas optimisés pour les bons mots-clés ciblant votre audience",
  },
  {
    number: "V",
    title: "Une stratégie de netlinking à renforcer",
    description:
      "Votre stratégie de liens externes est insuffisante ou mal orientée",
  },
];

export const BENEFITS: CardItem[] = [
  {
    number: "I",
    title: "Diagnostic complet",
    description:
      "Comprendre pourquoi votre site ne performe pas comme il le devrait",
  },
  {
    number: "II",
    title: "Actions à fort impact",
    description:
      "Identifier les \"quick wins\" (actions rapides à fort impact)",
  },
  {
    number: "III",
    title: "Feuille de route claire",
    description: "Obtenir une feuille de route claire et priorisée",
  },
  {
    number: "IV",
    title: "Décisions éclairées",
    description: "Prendre des décisions éclairées pour votre stratégie SEO",
  },
];

export interface TabSubSection {
  title: string;
  items: string[];
}

export interface PillarTab {
  id: string;
  label: string;
  heading: string;
  description: string;
  subheading: string;
  subSections: TabSubSection[];
}

export const PILLAR_TABS: PillarTab[] = [
  {
    id: "technique",
    label: "Audit SEO Technique",
    heading: "Structure et architecture du site",
    description:
      "Le SEO technique constitue les fondations solides de votre référencement. Sans une base technique optimisée, vos efforts de contenu et de liens seront compromis.",
    subheading: "Ce que nous analysons",
    subSections: [
      {
        title: "",
        items: [
          "Crawlabilité et indexabilité",
          "Sitemap XML et robots.txt",
          "Architecture de l’information",
          "Hiérarchie des pages",
        ],
      },
      {
        title: "Performance et vitesse",
        items: [
          "Core Web Vitals",
          "Temps de chargement",
          "Optimisation mobile",
          "Expérience utilisateur technique",
        ],
      },
      {
        title: "Problèmes techniques critiques",
        items: [
          "Erreurs d’indexation",
          "Pages orphelines",
          "Redirections en chaîne",
          "Erreurs 404 et 5xx",
          "Problèmes de canonicalisation",
          "Sécurité HTTPS",
        ],
      },
    ],
  },
  {
    id: "on-page",
    label: "Audit SEO On-Page",
    heading: "Optimisation du contenu et des balises",
    description:
      "L’optimisation on-page garantit que chaque page de votre site est parfaitement structurée pour les moteurs de recherche et vos utilisateurs.",
    subheading: "Ce que nous analysons",
    subSections: [
      {
        title: "",
        items: [
          "Balises title et méta-descriptions",
          "Hiérarchie des balises Hn",
          "Attributs alt des images",
          "Données structurées (Schema.org)",
        ],
      },
      {
        title: "Qualité et pertinence du contenu",
        items: [
          "Densité et placement des mots-clés",
          "Qualité et profondeur du contenu",
          "Fraîcheur et mise à jour",
          "Lisibilité et engagement",
        ],
      },
      {
        title: "Structure des URLs et maillage",
        items: [
          "URLs propres et descriptives",
          "Fil d’Ariane et navigation",
          "Liens internes stratégiques",
          "Optimisation des ancres",
        ],
      },
    ],
  },
  {
    id: "off-page",
    label: "Audit SEO Off-Page",
    heading: "Profil de liens et autorité",
    description:
      "L’audit off-page analyse votre autorité en ligne et la qualité de votre profil de liens pour renforcer votre positionnement dans les résultats de recherche.",
    subheading: "Ce que nous analysons",
    subSections: [
      {
        title: "",
        items: [
          "Qualité des liens entrants",
          "Diversité des domaines référents",
          "Pertinence thématique des backlinks",
          "Liens toxiques à désavouer",
        ],
      },
      {
        title: "Autorité et confiance",
        items: [
          "Domain Authority et Trust Flow",
          "Cohérence thématique du profil",
          "Signaux de confiance (E-E-A-T)",
          "Comparaison concurrentielle",
        ],
      },
      {
        title: "Présence et réputation en ligne",
        items: [
          "Mentions et citations de marque",
          "Profils sur les annuaires",
          "Avis et réputation en ligne",
          "Signaux sociaux",
        ],
      },
    ],
  },
];

export interface AuditProcessStep {
  number: string;
  title: string;
  description: string;
  badge: string;
}

export const PROCESS_STEPS: AuditProcessStep[] = [
  {
    number: "I",
    title: "Remplissez le formulaire",
    description:
      "Entrez simplement l’URL de votre site web, votre nom, email et téléphone dans le formulaire ci-dessous.",
    badge: "2 min",
  },
  {
    number: "II",
    title: "Notre analyse approfondie",
    description:
      "Notre équipe d’experts SEO analyse votre site sous les 3 angles fondamentaux : technique, on-page et off-page. Nous utilisons des outils professionnels (Screaming Frog, Ahrefs, Semrush, Pagespeed Insights) pour un diagnostic fiable et complet.",
    badge: "24 à 48h",
  },
  {
    number: "III",
    title: "Vous recevez votre rapport détaillé",
    description:
      "Vous recevez par email un rapport d’audit SEO complet (format PDF) avec diagnostic des 3 piliers SEO, liste des problèmes identifiés par ordre de priorité, recommandations actionnables pour chaque pilier, et plan d’action concret et priorisé.",
    badge: "Rapport PDF personnalisé",
  },
  {
    number: "IV",
    title: "Échange conseil (optionnel)",
    description:
      "Nous vous proposons un échange téléphonique ou visioconférence (20-30 minutes) pour vous présenter les résultats de l’audit et répondre à vos questions sur les 3 piliers analysés.",
    badge: "Call de présentation ou réunion Teams",
  },
];

export const ADVANTAGES: CardItem[] = [
  {
    number: "I",
    title: "Analyse holistique des 3 piliers du SEO",
    description:
      "Sites de réservation, applications de découvertes locales, plateformes de mise en relation franchisée.",
  },
  {
    number: "II",
    title: "Analyse humaine par un expert SEO",
    description:
      "Boutiques en ligne, marketplaces, stratégies de conversion, systèmes de gestion de stocks.",
  },
  {
    number: "III",
    title: "Recommandations personnalisées et actionnables",
    description:
      "Plateformes LMS, outils pédagogiques, solutions de formation en ligne, apprentissage en ligne.",
  },
  {
    number: "IV",
    title: "Rapport clair et compréhensible",
    description:
      "Pas de jargon technique incompréhensible. Nous expliquons chaque point en langage simple pour que vous compreniez exactement ce qu’il faut faire, que ce soit pour l’aspect technique, on-page ou off-page.",
  },
  {
    number: "V",
    title: "Approche stratégique orientée ROI",
    description:
      "Notre analyse va au-delà des aspects techniques pour se concentrer sur ce qui générera réellement du trafic qualifié et des conversions pour votre business.",
  },
];

export const AUDIENCE: CardItem[] = [
  {
    number: "I",
    title: "TPE, PME et entrepreneurs",
    description:
      "Vous souhaitez améliorer votre visibilité locale ou nationale mais n’avez pas les ressources pour engager une agence SEO à temps plein.",
  },
  {
    number: "II",
    title: "Startups et scale-ups",
    description:
      "Vous cherchez à accélérer votre croissance organique et à réduire votre dépendance aux canaux d’acquisition payants.",
  },
  {
    number: "III",
    title: "E-commerces",
    description:
      "Vous voulez augmenter votre trafic qualifié, votre visibilité produit et vos ventes en ligne via le référencement naturel.",
  },
  {
    number: "IV",
    title: "Sites corporate et B2B",
    description:
      "Vous souhaitez générer plus de leads qualifiés et renforcer votre autorité en ligne dans votre secteur.",
  },
  {
    number: "V",
    title: "Sites existants en perte de vitesse",
    description:
      "Votre trafic organique a chuté récemment et vous souhaitez comprendre pourquoi et inverser la tendance.",
  },
  {
    number: "VI",
    title: "Projets de refonte web",
    description:
      "Vous préparez une refonte de votre site et voulez vous assurer de ne pas perdre votre capital SEO existant.",
  },
];
