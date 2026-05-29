import Image from "next/image";
import type { ReactNode } from "react";
import CtaButton from "@/components/ui/CtaButton";
import ProcessTimelineSection from "@/components/sections/ProcessTimelineSection";
import NosProjectsSection from "@/components/sections/NosProjectsSection";
import FaqSection from "@/components/sections/FaqSection";
import ToolsSection from "@/components/sections/ToolsSection";
import type { ProcessStep } from "@/types/process";

type SeoServiceSection = {
  title: string;
  description: string;
  blurb?: string;
  media: { src: string; alt: string };
  items: Array<{
    number: string;
    title: string;
  }>;
};

type SeoTypeSection = {
  title: string;
  media: { src: string; alt: string };
  items: string[];
};

type WhyChooseCard = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const SERVICE_SECTIONS: SeoServiceSection[] = [
  {
    title: "Audit SEO Complet",
    description:
      "Nous analysons en profondeur la performance actuelle de votre site pour identifier les opportunités d\u2019amélioration et les blocages techniques qui limitent votre visibilité.",
    blurb:
      "Nos audits vont au-delà du simple diagnostic pour vous fournir une feuille de route claire et priorisée, adaptée à vos ressources et objectifs business.",
    media: {
      src: "/seo/service-audit.jpg",
      alt: "Audit SEO complet",
    },
    items: [
      {
        number: "01",
        title: "Analyse technique complète (indexation, vitesse, structure)",
      },
      { number: "02", title: "Évaluation du contenu et de la pertinence SEO" },
      { number: "03", title: "Audit des balises et éléments on-page" },
      {
        number: "04",
        title: "Analyse de la structure des liens (internes et externes)",
      },
      { number: "05", title: "Étude du profil de backlinks" },
      { number: "06", title: "Benchmark concurrentiel détaillé" },
      { number: "07", title: "Recommandations priorisées et actionnables" },
    ],
  },
  {
    title: "Stratégie SEO Sur-mesure",
    description:
      "Nous élaborons des stratégies de référencement personnalisées qui s\u2019alignent avec vos objectifs business et votre secteur d\u2019activité.",
    blurb:
      "Notre approche stratégique combine vision à long terme et quick wins pour des résultats à la fois rapides et durables.",
    media: {
      src: "/seo/service-strategie.jpg",
      alt: "Stratégie SEO sur-mesure",
    },
    items: [
      {
        number: "01",
        title: "Recherche approfondie de mots-clés stratégiques",
      },
      { number: "02", title: "Analyse d\u2019intention de recherche" },
      { number: "03", title: "Cartographie des contenus à développer" },
      {
        number: "04",
        title: "Structuration de l\u2019architecture du site optimisée SEO",
      },
      { number: "05", title: "Planification des optimisations techniques" },
      {
        number: "06",
        title: "Stratégie de création de contenu à valeur ajoutée",
      },
      { number: "07", title: "Plan de netlinking qualitatif" },
      { number: "08", title: "Définition des KPIs et objectifs mesurables" },
    ],
  },
  {
    title: "Optimisation SEO Technique",
    description:
      "Nous améliorons les fondations techniques de votre site pour garantir une indexation optimale et une expérience utilisateur irréprochable.",
    blurb:
      "Ces optimisations techniques constituent le socle indispensable d\u2019une stratégie SEO performante et durable.",
    media: {
      src: "/seo/service-technique.jpg",
      alt: "Optimisation SEO technique",
    },
    items: [
      {
        number: "01",
        title: "Optimisation de la structure du site et de l\u2019arborescence",
      },
      {
        number: "02",
        title: "Amélioration des performances (Core Web Vitals)",
      },
      { number: "03", title: "Correction des erreurs d\u2019indexation" },
      {
        number: "04",
        title: "Configuration des fichiers robots.txt et sitemaps",
      },
      {
        number: "05",
        title: "Mise en place de données structurées (Schema.org)",
      },
      { number: "06", title: "Optimisation pour mobile et responsive design" },
      { number: "07", title: "Résolution des problèmes de duplicate content" },
      { number: "08", title: "Sécurisation HTTPS et redirections" },
    ],
  },
  {
    title: "Content Marketing SEO",
    description:
      "Nous créons des contenus stratégiques qui répondent aux intentions de recherche de vos cibles tout en positionnant votre expertise.",
    blurb:
      "Notre approche content combine pertinence SEO et valeur ajoutée réelle pour vos visiteurs et clients potentiels.",
    media: {
      src: "/seo/service-content.jpg",
      alt: "Content marketing SEO",
    },
    items: [
      {
        number: "01",
        title: "Création de pages cornerstone et pillar content",
      },
      {
        number: "02",
        title: "Rédaction d\u2019articles de blog optimisés SEO",
      },
      { number: "03", title: "Enrichissement des pages produits et services" },
      {
        number: "04",
        title: "Optimisation des balises title et meta descriptions",
      },
      { number: "05", title: "Structuration hiérarchique (H1, H2, H3)" },
      {
        number: "06",
        title: "Intégration naturelle des mots-clés principaux et secondaires",
      },
      {
        number: "07",
        title: "Création de contenus multiformats (guides, FAQ, infographies)",
      },
      {
        number: "08",
        title: "Optimisation des images et éléments multimédias",
      },
    ],
  },
  {
    title: "Netlinking & Link Building",
    description:
      "Nous développons votre autorité en ligne grâce à des stratégies d\u2019acquisition de backlinks qualitatifs et pertinents.",
    blurb:
      "Notre approche privilégie toujours la qualité à la quantité pour construire un profil de liens naturel et pérenne.",
    media: {
      src: "/seo/service-netlinking.jpg",
      alt: "Netlinking et link building",
    },
    items: [
      { number: "01", title: "Audit de votre profil de backlinks actuel" },
      {
        number: "02",
        title: "Identification d\u2019opportunités de liens qualifiés",
      },
      { number: "03", title: "Outreach et relations avec sites partenaires" },
      {
        number: "04",
        title: "Création de contenus link-worthy (infographies, études)",
      },
      { number: "05", title: "Guest posting sur des sites autoritaires" },
      {
        number: "06",
        title: "Récupération de mentions non liées (link reclamation)",
      },
      { number: "07", title: "Analyse des backlinks concurrents" },
      { number: "08", title: "Diversification des ancres de liens" },
    ],
  },
  {
    title: "Suivi et Reporting SEO",
    description:
      "Nous analysons en continu l\u2019efficacité de vos actions SEO et ajustons la stratégie en fonction des résultats et des évolutions algorithmiques.",
    blurb:
      "Nos reportings combinent données techniques et impacts business pour une vision claire de votre ROI SEO.",
    media: {
      src: "/seo/service-reporting.jpg",
      alt: "Suivi et reporting SEO",
    },
    items: [
      {
        number: "01",
        title: "Monitoring des positions sur les mots-clés stratégiques",
      },
      {
        number: "02",
        title: "Analyse de l\u2019évolution du trafic organique",
      },
      { number: "03", title: "Suivi des conversions issues du canal SEO" },
      { number: "04", title: "Reporting mensuel clair et actionnable" },
      { number: "05", title: "Analyses de performance par page et segment" },
      { number: "06", title: "Veille algorithmique et adaptation" },
      { number: "07", title: "Identification des nouvelles opportunités" },
      { number: "08", title: "Recommandations d\u2019optimisation continue" },
    ],
  },
];

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Analyse & Découverte",
    description:
      "Nous commençons par une analyse approfondie de votre situation actuelle et de vos objectifs. Cela inclut un audit technique complet de votre site, une analyse de votre secteur et de la concurrence, l\u2019étude des intentions de recherche de votre cible, l\u2019identification des opportunités de mots-clés, la définition des objectifs et KPIs, ainsi qu\u2019un benchmark des meilleures pratiques sectorielles.",
  },
  {
    number: "02",
    title: "Élaboration de la Stratégie",
    description:
      "Nous définissons une stratégie personnalisée basée sur les données recueillies. Cette phase comprend la sélection des mots-clés prioritaires, la planification des optimisations techniques, l\u2019élaboration d\u2019une stratégie de contenu et d\u2019un planning éditorial, un plan d\u2019amélioration de l\u2019architecture du site, une stratégie de netlinking, et la priorisation des actions à fort impact.",
  },
  {
    number: "03",
    title: "Implémentation & Optimisation",
    description:
      "Nous mettons en œuvre les actions définies dans la stratégie. Cela inclut les corrections techniques et optimisations, la production et optimisation de contenus, l\u2019amélioration de la structure interne, les actions de link building, l\u2019optimisation des éléments on-page, ainsi que la mise en place du tracking et des mesures de performance.",
  },
  {
    number: "04",
    title: "Suivi & Analyse",
    description:
      "Nous mesurons les résultats et ajustons la stratégie en continu. Cette phase comprend le monitoring des positions, l\u2019analyse du trafic et des conversions, l\u2019identification des performances par page, les ajustements basés sur les données, la veille des mises à jour algorithmiques, et un reporting régulier et transparent sur l\u2019évolution de votre visibilité.",
  },
  {
    number: "05",
    title: "Évolution & Scale",
    description:
      "Nous faisons évoluer votre stratégie pour amplifier les résultats. Cette phase finale inclut l\u2019expansion vers de nouveaux territoires de mots-clés, le renforcement des contenus performants, le scaling des stratégies de netlinking efficaces, l\u2019adaptation aux évolutions du marché, l\u2019innovation et le test de nouvelles approches, ainsi que l\u2019intégration SEO dans votre écosystème marketing global.",
  },
];

const SEO_TYPE_SECTIONS: SeoTypeSection[] = [
  {
    title: "SEO Local",
    media: { src: "/seo/type-local.jpg", alt: "SEO Local" },
    items: [
      "Optimisation Google My Business / Google Business Profile",
      "Référencement local ciblé par ville/région",
      "Gestion des avis et réputation locale",
      "Citations et annuaires locaux",
      "Stratégie de contenu géo-localisé",
      "Optimisation des pages locales",
    ],
  },
  {
    title: "SEO E-commerce",
    media: { src: "/seo/type-ecommerce.jpg", alt: "SEO E-commerce" },
    items: [
      "Optimisation des fiches produits et catégories",
      "Structuration technique des catalogues volumineux",
      "Gestion du duplicate content",
      "Optimisation de la recherche interne",
      "Rich snippets et données structurées e-commerce",
      "Stratégies pour les produits saisonniers",
    ],
  },
  {
    title: "SEO B2B",
    media: { src: "/seo/type-b2b.jpg", alt: "SEO B2B" },
    items: [
      "Ciblage de mots-clés à forte intention d\u2019achat",
      "Création de contenus démontrant l\u2019expertise",
      "Optimisation des pages services et solutions",
      "Stratégie de génération de leads par le contenu",
      "Netlinking dans les écosystèmes professionnels",
      "Positionnement d\u2019experts et thought leadership",
    ],
  },
  {
    title: "SEO International",
    media: { src: "/seo/type-international.jpg", alt: "SEO International" },
    items: [
      "Stratégies multilingues (hreflang, traductions)",
      "Ciblage géographique précis",
      "Adaptation culturelle des contenus",
      "Acquisition de backlinks locaux",
      "Optimisation pour moteurs de recherche internationaux",
      "Stratégies d\u2019expansion par pays/langue",
    ],
  },
];

const WHY_CHOOSE: WhyChooseCard[] = [
  {
    number: "01",
    title: "Expertise SEO Avancée",
    description:
      "Notre équipe combine expertise technique et compétences stratégiques pour naviguer efficacement dans l\u2019écosystème complexe et changeant du référencement naturel.",
    icon: (
      <Image
        src="/seo/expertise-icon.svg"
        width={60}
        height={60}
        alt="Expertise SEO avancée"
        unoptimized
      />
    ),
  },
  {
    number: "02",
    title: "Approche Data-Driven",
    description:
      "Nous basons chaque décision sur des données concrètes et mesurables, privilégiant les actions à fort impact qui génèrent un ROI démontrable pour votre entreprise.",
    icon: (
      <Image
        src="/seo/data-driven-icon.svg"
        width={60}
        height={60}
        alt="Approche data-driven"
        unoptimized
      />
    ),
  },
  {
    number: "03",
    title: "Transparence Totale",
    description:
      "Nos méthodes sont 100% white hat et durables, avec une communication claire sur les actions menées et les résultats obtenus, sans promesses irréalistes.",
    icon: (
      <Image
        src="/seo/transparency-icon.svg"
        width={60}
        height={60}
        alt="Transparence totale"
        unoptimized
      />
    ),
  },
  {
    number: "04",
    title: "Vision Business",
    description:
      "Nous ne nous limitons pas aux métriques SEO mais alignons notre stratégie sur vos objectifs business concrets : leads, ventes, chiffre d\u2019affaires et ROI.",
    icon: (
      <Image
        src="/seo/business-focus-icon.svg"
        width={60}
        height={60}
        alt="Vision business"
        unoptimized
      />
    ),
  },
  {
    number: "05",
    title: "Adaptabilité Constante",
    description:
      "Notre veille permanente sur les évolutions des algorithmes et des bonnes pratiques garantit l\u2019adaptabilité et la pérennité de votre stratégie SEO.",
    icon: (
      <Image
        src="/seo/adaptability-icon.svg"
        width={60}
        height={60}
        alt="Adaptabilité constante"
        unoptimized
      />
    ),
  },
];

function ServiceSectionBlock({
  section,
  isFirst,
}: {
  section: SeoServiceSection;
  isFirst?: boolean;
}) {
  return (
    <section className={`py-16 ${isFirst ? "" : "border-t border-[#ececec]"}`}>
      <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-6">
          <div className="relative aspect-4/5 overflow-hidden bg-[#111] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <Image
              src={section.media.src}
              alt={section.media.alt}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="rounded-[14px] bg-black/68 p-4 backdrop-blur-sm">
                <p className="font-[Neue_Montreal] text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.7] text-white/86">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
          {section.blurb && (
            <p className="font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-black/60">
              {section.blurb}
            </p>
          )}
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
                  <Image
                    src="/images/list-group-9.svg"
                    width={16}
                    height={16}
                    className="ml-4 w-4 leading-none text-black transition-transform duration-300 group-open:rotate-45"
                    alt=""
                  />
                </summary>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SeoTypeSectionBlock({ section }: { section: SeoTypeSection }) {
  return (
    <section className="py-10">
      <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 lg:px-12 xl:px-16">
        <div className="relative aspect-4/5 overflow-hidden bg-[#0f0f0f]">
          <Image
            src={section.media.src}
            alt={section.media.alt}
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black lg:text-[34px]">
              {section.title}
            </h3>
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
    <div className="relative overflow-hidden border border-[#c8c8c8] bg-[#f5f5f5]">
      <Image
        src="/seo/why-choose-photo.jpg"
        alt="Stratégie SEO Numispark"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
}

export default function SeoPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen bg-[#121417] overflow-hidden flex flex-col text-white">
        <Image
          src="/seo/hero-bg.jpg"
          alt="Stratégie SEO sur-mesure"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto w-full z-10 flex-1 flex flex-col justify-end px-10 md:px-20 pb-24">
          <h1 className="font-[Neue_Montreal] text-[44px] font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-[54px] lg:text-[60px] xl:text-[68px]">
            Boostez votre visibilité et votre
            <br className="hidden sm:block" />
            trafic organique grâce à une
            <br className="hidden sm:block" />
            stratégie SEO sur-mesure
          </h1>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <CtaButton href="/contact" variant="filled-white">Consultation gratuite</CtaButton>
            <CtaButton href="/services" variant="outline-light">Découvrez nos services</CtaButton>
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
              Nous maîtrisons les outils et technologies de référencement les
              plus performants pour garantir une visibilité maximale à votre
              site web.
            </p>
            <p>
              Chaque stratégie SEO est élaborée avec une approche data-driven,
              combinant expertise technique et compréhension approfondie des
              algorithmes de recherche.
            </p>
          </div>
        </div>
        <ToolsSection />
      </section>

      {/* Service blocks */}
      <section className="">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[30px] font-medium leading-tight text-black lg:text-[36px]">
            Nos services de référencement naturel
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

      {/* SEO types */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px] xl:text-[52px]">
            SEO adapté à vos besoins
          </h2>
        </div>

        <div className="mt-10 flex flex-col">
          {SEO_TYPE_SECTIONS.map((section) => (
            <SeoTypeSectionBlock key={section.title} section={section} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px] xl:text-[52px]">
            Pourquoi choisir Numispark pour votre SEO&nbsp;?
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl w-full grid-cols-1 md:grid-cols-2">
          <WhyCardBlock card={WHY_CHOOSE[0]} />
          <WhyImageBlock />
          {WHY_CHOOSE.slice(1).map((card) => (
            <WhyCardBlock key={card.number} card={card} />
          ))}
        </div>
      </section>

      <NosProjectsSection withTopDivider />
      <FaqSection withTopDivider />
    </main>
  );
}
