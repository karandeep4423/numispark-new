export const ROTATING_WORDS = [
  "vos workflows",
  "votre support",
  "vos décisions",
  "vos données",
  "votre croissance",
];

export interface Capability {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "Automatisation de workflows",
    description:
      "Connectez vos outils, supprimez les tâches répétitives et orchestrez vos process métier de bout en bout — sans intervention humaine.",
    tag: "n8n · Make · Zapier",
  },
  {
    number: "02",
    title: "Chatbots & assistants IA",
    description:
      "Des agents conversationnels qui répondent à vos clients, qualifient vos leads et assistent vos équipes en s'appuyant sur votre base de connaissances.",
    tag: "RAG · GPT-4 · Claude",
  },
  {
    number: "03",
    title: "Analyse prédictive & ML",
    description:
      "Modèles de prévision, scoring de leads, détection d'anomalies — nous transformons vos données en avantage opérationnel mesurable.",
    tag: "ML · Forecasting",
  },
  {
    number: "04",
    title: "Intégrations intelligentes",
    description:
      "Vos APIs, vos CRM et vos outils internes connectés à des modèles d'IA via des intégrations robustes, monitorées et évolutives.",
    tag: "API · Webhooks · LLM",
  },
];

export interface ChatTurn {
  from: "user" | "ai";
  text: string;
}

export const CHAT_SCRIPT: ChatTurn[] = [
  { from: "user", text: "Trouve les 3 leads les plus chauds de cette semaine." },
  {
    from: "ai",
    text: "J'ai croisé Hubspot et l'historique de visites — voici 3 prospects à recontacter aujourd'hui : Alpha Group, Lumen Studio, Norma Co.",
  },
  { from: "user", text: "Crée une relance personnalisée pour Lumen Studio." },
  {
    from: "ai",
    text: "Mail rédigé et programmé pour 9h12, basé sur leur dernier échange et la page produit consultée hier.",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 72, suffix: "%", label: "de tâches répétitives automatisées en moyenne" },
  { value: 4, suffix: "×", label: "plus de leads traités avec la même équipe" },
  { value: 24, suffix: "/7", label: "support client assisté par IA" },
  { value: 30, suffix: " jours", label: "pour livrer un premier workflow productif" },
];

export interface UseCase {
  number: string;
  title: string;
  description: string;
}

export const USE_CASES: UseCase[] = [
  {
    number: "I",
    title: "Service client augmenté",
    description:
      "Tri automatique des tickets, réponses suggérées, FAQ dynamique connectée à votre documentation interne.",
  },
  {
    number: "II",
    title: "Sales & marketing",
    description:
      "Scoring de leads, enrichissement de données, génération de contenus et relances personnalisées à grande échelle.",
  },
  {
    number: "III",
    title: "Opérations & back-office",
    description:
      "Extraction de documents, rapprochement de données, validation de factures, reporting automatisé.",
  },
  {
    number: "IV",
    title: "Produit & data",
    description:
      "Fonctionnalités IA embarquées dans votre produit : recherche sémantique, recommandations, génération assistée.",
  },
];
