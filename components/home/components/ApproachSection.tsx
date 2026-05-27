import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

export default function ApproachSection() {
  return (
    <div className="w-full px-5 sm:px-8 xl:px-[30px] py-12 md:py-20">
      <div className="flex flex-col items-center md:flex-row md:items-center gap-10 xl:gap-16">
        {/* Left: 3D snowflake image */}
        <div className="w-full max-w-[400px] md:max-w-none md:w-[38%] xl:w-[37%] flex-shrink-0 relative aspect-201/178">
          <Image
            className="object-contain"
            src="/images/capture-decran-20260310-a-1052222.svg"
            alt="Nos services"
            fill
          />
        </div>
        {/* Right: text content */}
        <div className="flex flex-col items-center md:items-start flex-1 min-w-0">
          <h2 className="text-[#8F8F8F] font-mono text-sm font-normal leading-normal">
            {"{ Nos services }"}
          </h2>
          <p className="mt-4 text-center md:text-left font-[Neue_Montreal] text-[28px] md:text-[42px] xl:text-[52px] font-medium leading-[1.25] xl:leading-[65px] text-black">
            Une approche 360° pour donner du sens, de la force et de la
            cohérence.
          </p>
          <CtaButton className="mt-8">Parlez-nous de votre projet</CtaButton>
        </div>
      </div>
    </div>
  );
}
