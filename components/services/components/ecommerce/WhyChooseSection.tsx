import Image from "next/image";
import type { ReactNode } from "react";

interface WhyChooseCard {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const WHY_CHOOSE: WhyChooseCard[] = [
  {
    number: "01",
    title: "Expertise E-commerce Complète",
    description:
      "Notre équipe combine expertise technique et compréhension des enjeux business du e-commerce pour créer des solutions qui génèrent des résultats concrets.",
    icon: (
      <Image
        src="/ecommerce/expertise-icon.svg"
        alt="Expertise e-commerce complète"
        width={60}
        height={60}
        unoptimized
      />
    ),
  },
  {
    number: "02",
    title: "Focus sur la Conversion",
    description:
      "Nous ne nous contentons pas de créer des sites beaux, mais des plateformes qui convertissent vos visiteurs en clients grâce à des parcours d'achat optimisés.",
    icon: (
      <Image
        src="/ecommerce/conversion-icon.svg"
        alt="Focus sur la conversion"
        width={60}
        height={60}
        unoptimized
      />
    ),
  },
  {
    number: "03",
    title: "Évolutivité & Scalabilité",
    description:
      "Nos solutions sont conçues pour évoluer avec votre business, de vos premiers clients à des volumes de commandes importants, sans compromettre les performances.",
    icon: (
      <Image
        src="/ecommerce/scalability-icon.svg"
        alt="Évolutivité et scalabilité"
        width={60}
        height={60}
        unoptimized
      />
    ),
  },
  {
    number: "04",
    title: "Sécurité & Conformité",
    description:
      "Nous implémentons les standards les plus stricts en matière de sécurité des paiements (PCI-DSS) et de protection des données (RGPD) pour une totale tranquillité.",
    icon: (
      <Image
        src="/ecommerce/security-icon.svg"
        alt="Sécurité et conformité"
        width={60}
        height={60}
        unoptimized
      />
    ),
  },
  {
    number: "05",
    title: "Approche Data-Driven",
    description:
      "Nos décisions sont guidées par les données, avec mise en place d'outils d'analyse permettant de mesurer précisément vos performances et d'identifier les opportunités.",
    icon: (
      <Image
        src="/ecommerce/data-driven-icon.svg"
        alt="Approche data-driven"
        width={60}
        height={60}
        unoptimized
      />
    ),
  },
];

function WhyCard({ card }: { card: WhyChooseCard }) {
  return (
    <article className="flex flex-col border border-[#c8c8c8] bg-white px-8 py-10 sm:px-12 sm:py-12">
      <div className="flex items-start justify-between gap-6">
        <div className="text-black">{card.icon}</div>
        <span className="font-['Roboto_Mono'] text-[11px] font-light text-black">
          {card.number}
        </span>
      </div>
      <h3 className="mt-12 font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black lg:text-[34px] xl:text-[38px]">
        {card.title}
      </h3>
      <p className="mt-auto pt-20 font-[Neue_Montreal] text-[16px] leading-[1.7] text-[#7f7f7f] lg:text-[18px] xl:text-[20px]">
        {card.description}
      </p>
    </article>
  );
}

function WhyImage() {
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

export default function WhyChooseSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <h2 className="font-[Neue_Montreal] text-[32px] font-medium leading-tight text-black sm:text-[38px] lg:text-[44px] xl:text-[52px]">
          Pourquoi choisir Numispark pour votre e-commerce&nbsp;?
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl w-full grid-cols-1 md:grid-cols-2">
        <WhyCard card={WHY_CHOOSE[0]} />
        <WhyImage />
        {WHY_CHOOSE.slice(1).map((card) => (
          <WhyCard key={card.number} card={card} />
        ))}
      </div>
    </section>
  );
}
