"use client";

import Link from "next/link";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const SERVICES = [
  {
    num: "01",
    title: "Création de Site Web",
    points: [
      "Sites vitrine et corporate",
      "Sites responsives et performants",
      "CMS WordPress personnalisé",
      "Hébergement et maintenance",
    ],
    desc: "Sites web professionnels, rapides et optimisés pour tous les appareils.",
    img: null,
    video: "/Service-website.mp4",
    slug: "creation-de-site-web",
  },
  {
    num: "02",
    title: "Audit SEO Gratuit",
    points: [
      "Audit technique complet",
      "Analyse on-page et off-page",
      "Rapport détaillé en 48h",
      "100% gratuit et sans engagement",
    ],
    desc: "Analyse complète de votre référencement pour identifier les opportunités d'amélioration.",
    img:"/services/seo-audit.jpg",
    video: null,
    slug: "audit-seo-gratuit",
  },
  {
    num: "03",
    title: "Développement\nd'Applications Mobiles",
    points: [
      "Applications natives iOS & Android",
      "Développement cross-platform (React Native, Flutter)",
      "Design UX/UI moderne et intuitif",
      "Maintenance et support continu",
    ],
    desc: "Applications mobiles natives et cross-platform performantes pour iOS et Android.",
    img: "/services/mobile.jpg",
    video: null,
    slug: "applications-mobiles",
  },
  {
    num: "04",
    title: "Développement\nE-commerce",
    points: [
      "Plateformes e-commerce sur-mesure",
      "Intégrations PrestaShop, Shopify, WooCommerce",
      "Optimisation des conversions",
      "Solutions de paiement sécurisées",
    ],
    desc: "Boutiques en ligne performantes et optimisées pour maximiser vos ventes.",
    img: "/services/ecommerce.jpg",
    video: null,
    slug: "e-commerce",
  },
  {
    num: "05",
    title: "Développement SaaS",
    points: [
      "Architecture cloud scalable",
      "Gestion multi-tenant",
      "Tableaux de bord analytics",
      "Intégrations API et webhooks",
    ],
    desc: "Solutions SaaS évolutives et sécurisées pour votre modèle d'abonnement.",
    img: "/services/saas.jpg",
    video: null,
    slug: "saas",
  },
  {
    num: "06",
    title: "Automatisation\n& Intelligence Artificielle",
    points: [
      "Automatisation des workflows",
      "Chatbots et assistants IA",
      "Analyse prédictive et machine learning",
      "Intégrations intelligentes",
    ],
    desc: "Automatisez vos processus et intégrez l'IA pour gagner en efficacité.",
    img: "/services/ia.jpg",
    video: null,
    slug: "ia-automatisation",
  },
  {
    num: "07",
    title: "Design Web & Mobile",
    points: [
      "Design UI/UX sur-mesure",
      "Prototypage et wireframing",
      "Design system et guidelines",
      "Tests utilisateurs et optimisation",
    ],
    desc: "Designs modernes et interfaces utilisateur qui captivent votre audience.",
    img: "/services/design-web-mobile.jpg",
    video: null,
    slug: "design-web-mobile",
  },
  {
    num: "08",
    title: "Design Logo\n& Réseaux Sociaux",
    points: [
      "Création de logos professionnels",
      "Charte graphique complète",
      "Posts et visuels réseaux sociaux",
      "Templates personnalisés",
    ],
    desc: "Identité visuelle forte et contenus percutants pour vos réseaux sociaux.",
    img: "/services/design-logo.jpg",
    video: null,
    slug: "design-logo",
  },
  {
    num: "09",
    title: "Référencement\nNaturel (SEO)",
    points: [
      "Audit SEO technique complet",
      "Optimisation on-page et off-page",
      "Stratégie de contenu SEO",
      "Suivi et reporting des performances",
    ],
    desc: "Positionnez votre site en première page de Google et générez du trafic qualifié.",
    img: "/services/seo.jpg",
    video: null,
    slug: "seo",
  },
  {
    num: "10",
    title: "Marketing Digital",
    points: [
      "Stratégie réseaux sociaux",
      "Publicités Facebook, Instagram, LinkedIn",
      "Community management",
      "Analytics et reporting",
    ],
    desc: "Stratégies digitales performantes pour booster votre visibilité et vos conversions.",
    img: "/services/ecommerce.jpg",
    video: null,
    slug: "marketing-digital",
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rotate-180"
    >
      <line
        x1="0"
        y1="8"
        x2="14"
        y2="8"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <polyline
        points="8,2 14,8 8,14"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <div className="flex flex-col w-full overflow-hidden border-b border-[#dadada] bg-white lg:h-screen lg:flex-row">
      <div className="relative flex flex-1 flex-col px-8 pt-12 pb-8 md:px-14 lg:px-18 xl:px-24 xl:pt-18 xl:pb-10">
        <p className="absolute top-[6%] left-[5%] font-mono text-[14px] text-[#8f8f8f]">
          {service.num}
        </p>

        <div className="mt-4">
          <h2 className="max-w-xl whitespace-pre-line font-[Neue_Montreal] text-[32px] font-medium leading-[1.05] text-black md:text-[38px] xl:text-[52px]">
            {service.title}
          </h2>
        </div>

        <div className="pt-6 xl:pt-8">
          <p className="mb-3 font-mono text-[13px] text-[#8f8f8f]">
            {"{ Points clés }"}
          </p>
          <div className="flex flex-col">
            {service.points.map((pt) => (
              <div
                key={pt}
                className="flex items-start gap-1.5 py-1.5 font-medium group"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20 transition-all duration-500 ease-out group-hover:translate-x-1" />
                <p className="font-[Neue_Montreal] text-[15px] leading-[1.35] text-black lg:text-[18px] xl:text-[22px] transition-all duration-500 ease-out group-hover:translate-x-5.5 group-hover:bg-[linear-gradient(90deg,#05D9FF_0%,#05FFE0_38%,#000000_82%)] group-hover:bg-clip-text group-hover:text-transparent motion-reduce:transform-none">
                  {pt}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-5 xl:pt-8">
          <p className="max-w-sm font-[Neue_Montreal] text-[15px] leading-[1.6] text-[#7f7f7f] xl:text-[18px]">
            {service.desc}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-5 inline-flex self-start rounded-full border border-black bg-black px-6 py-4 font-mono text-[12px] uppercase tracking-widest text-white transition-all duration-200 hover:border-[#05ffe0] hover:bg-[#05ffe0] hover:text-black"
          >
            <span className="flex items-center gap-8">
              En savoir plus
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>

      {/* Image / video – full height on desktop, fixed height on mobile */}
      <div className="relative shrink-0 overflow-hidden h-64 w-full sm:h-80 lg:h-auto lg:w-[46%] xl:w-[48%]">
        {service.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={service.img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : service.video ? (
          <video
            src={service.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-[#f8f8f8] to-[#ebebeb]" />
        )}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-[#101010]">
      <section className="relative flex min-h-screen items-end overflow-hidden rounded-br-[70px] rounded-bl-[70px] bg-[#101010] pb-16 md:pb-20">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />

        <div
          className="pointer-events-none absolute top-[-10%] right-[-5%] h-[60vh] w-[50vw] rounded-full opacity-30 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #05ffe0 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10">
          <h1 className="font-[Neue_Montreal] text-[34px] sm:text-[44px] lg:text-[56px] xl:text-[64px] font-medium leading-[1.12] text-white max-w-5xl">
            Une agence digitale globale{" "}
            <br className="hidden md:block" />
            qui accompagne la transformation
            <br className="hidden md:block" />
            des marques à travers des expériences numériques{" "}
            <span className="text-[#05ffe0]">puissantes et innovantes.</span>
          </h1>
        </div>
      </section>

      <section className="relative bg-white">
        {SERVICES.map((service, index) => (
          <div
            key={service.num}
            className="sticky top-0 w-full"
            style={{ zIndex: index + 1 }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </section>

      <div className="relative z-20">
        <TestimonialsSection />
      </div>
    </main>
  );
}
