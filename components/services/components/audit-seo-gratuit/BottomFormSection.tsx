import AuditForm from "./AuditForm";

export default function BottomFormSection() {
  return (
    <section className="bg-[#0f0f0f] text-white">
      <div className="h-px w-full bg-[#2a2a2a]" />
      <div className="mx-auto grid max-w-7xl w-full gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-12 xl:px-16">
        <div className="self-start lg:sticky lg:top-8">
          <h2 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[36px] lg:text-[44px] xl:text-[52px]">
            Demander votre audit{" "}
            <span className="text-[#05ffe0]">gratuit.</span>
          </h2>
          <p className="mt-4 font-[Neue_Montreal] text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.7] text-[#7f7f7f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
        </div>

        <AuditForm dark />
      </div>
    </section>
  );
}
