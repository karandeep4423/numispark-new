import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "portail-immobilier",
    id: "01",
    name: "Portail Immobilier",
    category: "Expérience Web + CRM",
    year: "2025",
    duration: "8 mois",
    location: "France",
    heroTagline:
      "Refonte complète d'un portail immobilier conçu pour mettre chaque bien en valeur, simplifier la prise de contact et accélérer les équipes commerciales.",
    objectivesDescription:
      "Refonte d'un portail immobilier pensé pour mettre en valeur chaque bien, simplifier la prise de contact et donner plus de vitesse aux équipes commerciales. Le projet couvrait l'architecture d'information, le design UI/UX et l'intégration front-end complète avec un CRM existant.",
    tags: ["WEB", "UX", "DEV"],
    heroImage: "/images/image-jpeg-51.png",
    galleryImages: [
      "/images/image-jpeg-51.png",
      "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
      "/images/capture-decran-20260307-a-1836221.png",
    ],
    siteUrl: "#",
    sections: [
      {
        title: "Process & Design",
        body: "Nous avons commencé par une phase de découverte approfondie avec les équipes commerciales pour comprendre leurs flux de travail. Des entretiens utilisateurs ont permis d'identifier les frictions majeures dans le parcours d'achat.\n\nLa phase de conception s'est articulée autour d'un système de composants modulaire, permettant une évolution rapide du produit sans dette technique. Chaque décision visuelle a été documentée dans un design system partagé.",
      },
      {
        title: "Résultats",
        body: "Le nouveau portail a permis une réduction de 40 % du temps de mise en ligne d'un bien immobilier. Le taux de conversion des fiches produits a augmenté de 28 % grâce à une présentation visuelle repensée.\n\nL'intégration CRM a automatisé 60 % des tâches répétitives des équipes commerciales, leur permettant de se concentrer sur la relation client à haute valeur ajoutée.",
      },
    ],
  },
  {
    slug: "application-terrain",
    id: "02",
    name: "Application Terrain",
    category: "Produit Mobile",
    year: "2024",
    duration: "6 mois",
    location: "France",
    heroTagline:
      "Application métier aidant les équipes terrain à remonter les informations en temps réel et à maintenir une vision claire des priorités quotidiennes.",
    objectivesDescription:
      "Conception d'une application mobile native pensée pour les conditions terrain : hors-ligne, luminosité variable, utilisation gantée. Le défi était de condenser un flux de travail complexe en une interface simple et rapide à prendre en main.",
    tags: ["MOBILE APP", "UX", "API"],
    heroImage: "/images/capture-decran-20260307-a-1836221.png",
    galleryImages: [
      "/images/capture-decran-20260307-a-1836221.png",
      "/images/image-jpeg-51.png",
      "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
    ],
    siteUrl: "#",
    sections: [
      {
        title: "Recherche & Prototypage",
        body: "Des sessions d'observation terrain ont révélé des comportements d'usage impossibles à anticiper depuis un bureau. L'application a été prototypée, testée et itérée directement avec les utilisateurs finaux sur leur lieu de travail.\n\nLe mode hors-ligne avec synchronisation différée a été la fonctionnalité la plus critique à concevoir, nécessitant une architecture de données robuste.",
      },
      {
        title: "Impact Mesurable",
        body: "Le temps de saisie d'un rapport terrain est passé de 25 minutes à moins de 7 minutes. La fiabilité des données remontées a augmenté de 85 % grâce à la validation en temps réel.\n\nL'adoption spontanée par les équipes, sans formation obligatoire, a confirmé la justesse des choix UX réalisés tout au long du projet.",
      },
    ],
  },
  {
    slug: "plateforme-client",
    id: "03",
    name: "Plateforme Client",
    category: "SaaS B2B",
    year: "2024",
    duration: "10 mois",
    location: "Europe",
    heroTagline:
      "Espace client structuré autour des parcours, des contenus et des automatisations pour rendre l'accompagnement plus lisible et plus autonome.",
    objectivesDescription:
      "Création d'une plateforme SaaS B2B permettant à des clients professionnels de gérer leurs projets, accéder à leurs ressources et suivre leurs indicateurs en autonomie. L'enjeu principal était de réduire la charge sur les équipes support.",
    tags: ["SAAS", "DESIGN", "FRONTEND"],
    heroImage: "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
    galleryImages: [
      "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
      "/images/capture-decran-20260307-a-1836221.png",
      "/images/image-jpeg-51.png",
    ],
    siteUrl: "#",
    sections: [
      {
        title: "Architecture & Navigation",
        body: "La structure de navigation a été repensée autour des cas d'usage réels plutôt que de l'organisation interne de l'entreprise. Un travail approfondi de card sorting avec des clients a permis de valider chaque niveau d'arborescence.\n\nLe design system développé pour la plateforme est maintenant utilisé comme référence pour tous les nouveaux projets internes.",
      },
      {
        title: "Autonomisation",
        body: "Les clients peuvent désormais accéder à 90 % de leurs besoins sans contacter le support. Les tickets d'assistance ont diminué de 65 % dans les trois mois suivant le lancement.\n\nLa fonctionnalité d'onboarding contextuel a réduit le temps d'activation de 3 semaines à 4 jours en moyenne.",
      },
    ],
  },
  {
    slug: "experience-de-marque",
    id: "04",
    name: "Expérience de Marque",
    category: "Site Vitrine",
    year: "2024",
    duration: "4 mois",
    location: "France",
    heroTagline:
      "Site éditorial fort, avec une narration visuelle, des animations sélectives et un socle technique simple à faire évoluer.",
    objectivesDescription:
      "Mise en scène d'une marque dans un site éditorial fort, avec une narration visuelle, des animations sélectives et un socle technique simple à faire évoluer. Le projet a démarré par une phase de brand strategy pour aligner l'expression digitale avec l'identité de marque.",
    tags: ["MOTION", "CREATIVE", "DEV"],
    heroImage: "/images/rectangle-2108.png",
    galleryImages: [
      "/images/rectangle-2108.png",
      "/images/image-jpeg-51.png",
      "/images/a-256348-e-03-e-47-bddc-6-f-60021.png",
    ],
    siteUrl: "#",
    sections: [
      {
        title: "Direction Artistique",
        body: "La direction artistique a émergé d'une immersion dans l'univers de la marque : ses références, ses valeurs et son positionnement concurrentiel. Un moodboard a cristallisé les choix typographiques, chromatiques et cinétiques.\n\nChaque animation a été conçue pour renforcer le message, jamais pour décorer. Le résultat est une expérience cohérente où chaque élément a une raison d'être.",
      },
      {
        title: "Performance & Évolutivité",
        body: "Malgré la richesse visuelle, le site atteint un score Lighthouse de 96 en performance grâce à une stratégie d'optimisation des assets et de rendu côté serveur.\n\nL'architecture modulaire permet à l'équipe marketing d'ajouter de nouvelles sections sans intervention technique, via un CMS headless intégré.",
      },
    ],
  },
  {
    slug: "monhubimmo",
    id: "05",
    name: "MonHubImmo",
    category: "Plateforme SaaS Immobilier",
    year: "2025",
    duration: "12 mois",
    location: "France",
    heroTagline:
      "La première plateforme collaborative inter-enseignes pour les professionnels de l'immobilier — partage de mandats, réseau social métier et agent IA intégré.",
    objectivesDescription:
      "Conception et développement de MonHubImmo, un écosystème SaaS dédié aux agents et mandataires immobiliers de tous réseaux. L'objectif : briser les silos entre enseignes pour permettre la co-exclusivité, le partage de mandats et la mise en relation entre confrères à l'échelle nationale.",
    tags: ["WEB", "SAAS", "IA"],
    heroImage: "/projects/monhubimmo/monhubimmo-hero-section.png",
    galleryImages: [
      "/projects/monhubimmo/temoignage-monhubimmo.mp4",
      "/projects/monhubimmo/monhubimmo-home-page.png",
      "/projects/monhubimmo/search-agents.png",
      "/projects/monhubimmo/monhubimmo-biens.png",
      "/projects/monhubimmo/bien-details.png",
      "/projects/monhubimmo/bien-details-2.png",
      "/projects/monhubimmo/agent-dashboard.png",
      "/projects/monhubimmo/search-clients.png",
      "/projects/monhubimmo/search-client-detail.png",
      "/projects/monhubimmo/admin-dashboard.png",
      "/projects/monhubimmo/admin-users.png",
    ],
    siteUrl: "https://www.monhubimmo.fr/",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI",
      "Stripe",
      "Vercel",
    ],
    awardImage: {
      src: "/projects/monhubimmo/sweet-award.webp",
      label: "Sweet Awards 2025 · Salon RENT",
    },
    sections: [
      {
        title: "Produit & Architecture",
        body: "MonHubImmo repose sur trois piliers produit : une plateforme collaborative inter-cabinets pour le partage de mandats et de recherches acquéreurs, Hubie — le réseau social dédié à la profession immobilière — et Hugo, un agent IA qui accompagne les conseillers au quotidien.\n\nL'architecture a été pensée pour absorber une croissance rapide : backend scalable, API REST découplée et interface mobile-first pour les équipes terrain.",
      },
      {
        title: "Impact & Reconnaissance",
        body: "Dès son lancement, MonHubImmo a été adopté par des conseillers issus de plus de 20 réseaux nationaux — IAD, SAFTI, BSK, Capifrance, Guy Hoquet, Optimhome et bien d'autres.\n\nLa plateforme a été récompensée aux Sweet Awards 2025 au salon RENT et distinguée par Les Pépites Tech comme startup innovante de la French Tech. Les médias spécialisés — MySweetImmo, Radio Immo, Le Média Immo — ont relayé son impact sur la collaboration inter-enseignes.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
