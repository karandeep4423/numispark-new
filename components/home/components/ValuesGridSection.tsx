interface ValueCard {
  number: string;
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

interface ImageCard {
  src: string;
  className?: string;
}

type GridItem =
  | { kind: "card"; data: ValueCard }
  | { kind: "image"; data: ImageCard };

const GRID_ITEMS: GridItem[] = [
  {
    kind: "card",
    data: {
      number: "01",
      title: "Solutions sur mesure",
      description:
        "Nous ne croyons pas aux solutions génériques. Nous développons des approches sur mesure, parfaitement alignées sur vos enjeux spécifiques, et créons de nouvelles fonctionnalités dès que vos besoins l'exigent.",
      icon: "/images/card-illustration-01.svg",
      iconAlt: "Solutions sur mesure",
    },
  },
  {
    kind: "card",
    data: {
      number: "02",
      title: "Technologie évolutive",
      description:
        "Nous concevons des architectures pérennes et extensibles. Notre priorité est de bâtir des solutions prêtes pour le futur, capables de s'adapter et de grandir au rythme de l'évolution de votre entreprise.",
      icon: "/images/card-illustration-02.svg",
      iconAlt: "Technologie évolutive",
    },
  },
  {
    kind: "image",
    data: { src: "/images/image-jpeg-51.png" },
  },
  {
    kind: "card",
    data: {
      number: "04",
      title: "Approche gagnant-gagnant",
      description:
        "Notre succès est indissociable du vôtre. Nous privilégions une collaboration étroite et durable, en fournissant des services qui favorisent une croissance soutenable et renforcent les liens avec vos clients.",
      icon: "/images/card-illustration-04.svg",
      iconAlt: "Approche gagnant-gagnant",
    },
  },
  {
    kind: "card",
    data: {
      number: "05",
      title: "Expertise métier",
      description:
        "Avec près d'une décennie d'expérience dans le secteur de l'informatique, nous maîtrisons les subtilités technologiques pour délivrer, de manière constante, des résultats d'une qualité exceptionnelle.",
      icon: "/images/card-illustration-03.svg",
      iconAlt: "Expertise métier",
    },
  },
  {
    kind: "image",
    data: {
      src: "/images/capture-decran-20260307-a-1836221.png",
      className: "bg-[#00e5c0]",
    },
  },
];

function ValueCardItem({ card }: { card: ValueCard }) {
  return (
    <div className="group relative flex flex-col border border-[#C8C8C8] bg-white px-6 py-8 sm:px-8 sm:py-10 lg:p-[10%] transition-all duration-600 hover:bg-linear-to-b hover:from-white hover:to-[#ebebeb] lg:aspect-865/695">
      <div className="flex items-start justify-between gap-6">
        <div className="transition-transform duration-600 group-hover:translate-y-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={card.icon} alt={card.iconAlt} />
        </div>
        <span className="font-mono text-[11px] text-black">{card.number}</span>
      </div>
      <h3 className="mt-6 lg:mt-[4.6%] font-[Neue_Montreal] text-[24px] lg:text-[28px] xl:text-[38px] font-medium leading-[1.15] tracking-[-0.01em] text-black transition-transform duration-600 group-hover:translate-y-3 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
        {card.title}
      </h3>
      <p className="mt-8 md:mt-auto font-[Neue_Montreal] text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-relaxed text-[#7F7F7F] transition-all duration-600 group-hover:-translate-y-3 group-hover:text-black">
        {card.description}
      </p>
    </div>
  );
}

function ImageItem({ image }: { image: ImageCard }) {
  return (
    <div className="border border-[#C8C8C8] overflow-hidden min-h-70 md:min-h-95 lg:min-h-0 lg:aspect-865/695">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`w-full h-full object-cover ${image.className ?? ""}`}
        src={image.src}
        alt=""
      />
    </div>
  );
}

export default function ValuesGridSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      {GRID_ITEMS.map((item, index) =>
        item.kind === "card" ? (
          <ValueCardItem key={index} card={item.data} />
        ) : (
          <ImageItem key={index} image={item.data} />
        ),
      )}
    </div>
  );
}
