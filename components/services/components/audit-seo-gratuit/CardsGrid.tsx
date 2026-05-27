import RomanBadge from "../shared/RomanBadge";
import type { CardItem } from "@/components/services/data/audit-seo";

interface CardsGridProps {
  items: CardItem[];
  title: React.ReactNode;
  dark?: boolean;
  className?: string;
  columns?: 2 | 3;
}

export default function CardsGrid({
  items,
  title,
  dark = false,
  className = "",
  columns = 2,
}: CardsGridProps) {
  const gridCols =
    columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2";
  const titleColor = dark ? "" : "text-black";

  return (
    <section className={`py-16 ${dark ? "bg-[#0f0f0f] text-white" : "bg-white"} ${className}`}>
      <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <h2 className={`mb-10 font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[36px] lg:text-[44px] xl:text-[52px] ${titleColor}`}>
          {title}
        </h2>

        <div className={`grid gap-x-12 gap-y-8 ${gridCols}`}>
          {items.map((item) => (
            <div key={item.number} className="flex gap-4">
              <RomanBadge number={item.number} dark={dark} />
              <div>
                <h3 className={`font-[Neue_Montreal] text-[16px] font-medium leading-tight sm:text-[18px] ${
                  dark ? "text-white" : "text-black"
                }`}>
                  {item.title}
                </h3>
                <p className="mt-2 font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-[#7f7f7f]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
