export default function AuditHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#101010] flex flex-col">
      <div className="pointer-events-none absolute inset-0">
        <video
          src="/bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-1 items-end px-8 pb-28 pt-40 md:px-20">
        <h1 className="max-w-5xl font-[Neue_Montreal] text-[32px] font-medium leading-[1.05] text-white sm:text-[44px] lg:text-[58px] xl:text-[68px]">
          <span className="text-[#05ffe0]">Audit SEO Gratuit</span>
          <span>. Découvrez ce qui Freine Votre Visibilité sur Google</span>
        </h1>
      </div>
    </section>
  );
}
