import Image from "next/image";
import type { EcommerceTypeSection } from "@/components/services/data/ecommerce";

interface TypeSectionBlockProps {
  section: EcommerceTypeSection;
}

export default function TypeSectionBlock({ section }: TypeSectionBlockProps) {
  return (
    <section className="py-10">
      <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 lg:px-12 xl:px-16">
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
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
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
            <p className="mt-3 max-w-2xl font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-black">
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
