import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

export default function EcommerceHero() {
  return (
    <section className="relative w-full flex flex-col min-h-screen overflow-hidden bg-[#121417] text-white">
      <Image
        src="/ecommerce/hero-bg.jpg"
        alt="Boutique e-commerce performante"
        fill
        className="object-cover"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto w-full z-10 flex-1 flex flex-col justify-end px-10 md:px-20 pb-24">
        <h1 className="font-[Neue_Montreal] text-[44px] font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-[54px] lg:text-[60px] xl:text-[68px]">
          Transformez votre activité
          <br className="hidden sm:block" />
          avec une boutique en ligne performante
        </h1>
        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
          <CtaButton href="/contact" variant="filled-white">
            Consultation gratuite
          </CtaButton>
          <CtaButton href="/services" variant="outline-light">
            Découvrez nos services
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
