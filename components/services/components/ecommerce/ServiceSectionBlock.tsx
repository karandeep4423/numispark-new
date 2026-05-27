import Image from "next/image";
import type {
  EcommerceServiceSection,
  EcommerceServiceMedia as ServiceMedia,
} from "@/components/services/data/ecommerce";

function ServiceMediaImage({ media }: { media: ServiceMedia }) {
  if (media.kind === "color") {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: media.bg }}
      >
        <Image
          src={media.logoSrc}
          alt={media.logoAlt}
          width={200}
          height={100}
          className="object-contain max-w-[60%]"
          unoptimized
        />
      </div>
    );
  }

  if (media.kind === "video") {
    return (
      <video
        src={media.src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-label={media.alt}
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      sizes="(min-width: 1024px) 420px, 100vw"
      className="object-cover"
      unoptimized
    />
  );
}

interface ServiceSectionBlockProps {
  section: EcommerceServiceSection;
  isFirst?: boolean;
}

export default function ServiceSectionBlock({
  section,
  isFirst,
}: ServiceSectionBlockProps) {
  return (
    <section className={`py-16 ${isFirst ? "" : "border-t border-[#ececec]"}`}>
      <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-6">
          <div className="relative aspect-4/5 overflow-hidden bg-[#111] shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <ServiceMediaImage media={section.media} />
            {section.media.kind !== "color" && (
              <>
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="rounded-[14px] bg-black/68 p-4 backdrop-blur-sm">
                    <p className="font-[Neue_Montreal] text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.7] text-white/86">
                      {section.description}
                    </p>
                  </div>
                </div>
              </>
            )}
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
                {item.description ? (
                  <p className="mt-3 max-w-2xl font-[Neue_Montreal] text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.7] text-black/55">
                    {item.description}
                  </p>
                ) : null}
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
