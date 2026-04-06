"use client";

import NosProjectsSection from "./NosProjectsSection";
import CtaButton from "./CtaButton";
import TestimonialsSection from "./TestimonialsSection";
import FaqSection from "./FaqSection";
import Tools from "./Tools";
import HeroSection from "./HeroSection";
import ServicesAccordionSection from "./ServicesAccordionSection";
import ProcessTimelineSection from "./ProcessTimelineSection";
import NosAtoutsSection from "./NosAtoutsSection";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        videoSrc="/HomePage/Home-hero-section-video.mp4"
        title={
          <>
            Nous concevons
            <br />
            des produits numériques
            <br />
            <span className="text-[#00e5c0]">centrés sur l&apos;humain.</span>
          </>
        }
        description="Nous accompagnons les entreprises dans leur transformation digitale avec créativité et expertise technique."
      />

      {/* Qui sommes nous */}
      <div className="my-16 flex flex-col items-center gap-6 mx-4 md:mx-10">
        <h2 className="text-[#8F8F8F] text-center font-mono text-sm font-normal leading-normal">
          {"{Qui sommes nous}"}
        </h2>
        <p className="text-center font-[Neue_Montreal] text-[26px] md:text-[42px] font-medium leading-[1.2] md:leading-12.5 text-black">
          Depuis 3 ans, Numispark accompagne 60+ entreprises françaises dans
          leur transformation numérique.
        </p>
        <CtaButton className="mx-auto ">En savoir plus</CtaButton>
      </div>
      {/* Stats — 3 columns */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mx-4 md:mx-10">
        <div className="group md:mb-16 px-8 pt-8 pb-4 border-t-2 border-[#E0E0E0] hover:border-black transition-all duration-600 bg-[linear-gradient(127deg,transparent_0%,transparent_100%)] hover:bg-[linear-gradient(127deg,#E7ECF2_3.71%,rgba(231,236,242,0)_40.97%)]">
          <p className="font-[Neue_Montreal] text-[60px] md:text-[80px] font-medium leading-none text-black mb-6 transition-all duration-600 group-hover:translate-y-1">
            +60
          </p>
          <p className="font-[Neue_Montreal] transition-all duration-600 group-hover:-translate-y-1 text-[14px] font-normal leading-5.5 text-[#7F7F7F] group-hover:text-black">
            projets digitaux conçus, développés et livrés avec succès pour des
            clients allant de la startup au entreprise.
          </p>
        </div>
        <div className="group px-8 pt-8 pb-4 border-t-2 border-[#E0E0E0] hover:border-black transition-all duration-600 bg-[linear-gradient(127deg,transparent_0%,transparent_100%)] hover:bg-[linear-gradient(127deg,#E7ECF2_3.71%,rgba(231,236,242,0)_40.97%)]">
          <p className="font-[Neue_Montreal] text-[60px] md:text-[80px] font-medium leading-none text-black mb-6 transition-all duration-600 group-hover:translate-y-1">
            10
          </p>
          <p className="font-[Neue_Montreal]  group-hover:-translate-y-1 text-[14px] font-normal leading-5.5 text-[#7F7F7F] group-hover:text-black transition-all duration-600">
            spécialistes pluridisciplinaires qui mettent leur savoir-faire et
            leur créativité au service exclusif de la réussite de votre
            transformation digitale.
          </p>
        </div>
        <div className="group px-8 pt-8 pb-4 border-t-2 border-[#E0E0E0] hover:border-black transition-all duration-600 bg-[linear-gradient(127deg,transparent_0%,transparent_100%)] hover:bg-[linear-gradient(127deg,#E7ECF2_3.71%,rgba(231,236,242,0)_40.97%)]">
          <p className="font-[Neue_Montreal] text-[60px] md:text-[80px] font-medium leading-none text-black mb-6 transition-all duration-600 group-hover:translate-y-1">
            100 %
          </p>
          <p className="font-[Neue_Montreal] text-[14px] font-normal leading-5.5 text-[#7F7F7F] group-hover:text-black transition-all duration-600 group-hover:-translate-y-1">
            de nos projets bénéficient d&apos;une rigueur méthodologique et
            d&apos;une expertise confirmée, assurant une qualité de livraison
            irréprochable.
          </p>
        </div>
      </div>
      {/* Next sections */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="group relative min-h-85 border border-[#ececec] bg-white px-6 py-8 transition-all duration-600 hover:bg-linear-to-b hover:from-white hover:to-[#ebebeb] sm:px-8 sm:py-10">
          <div className="flex items-start justify-between gap-6">
            <div className="transition-transform duration-600 group-hover:translate-y-3">
              <img src="/images/card-illustration-01.svg" alt="Solutions sur mesure" />
            </div>
            <span className="font-mono text-[11px] text-black">01</span>
          </div>
          <h3 className="mt-8 font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black transition-transform duration-600 group-hover:translate-y-3 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
            Solutions sur mesure
          </h3>
          <p className="mt-24 font-[Neue_Montreal] text-[14px] leading-7 text-black/45 transition-all duration-600 group-hover:-translate-y-3 group-hover:text-black">
            Nous ne croyons pas aux solutions génériques. Nous développons des
            approches sur mesure, parfaitement alignées sur vos enjeux
            spécifiques, et créons de nouvelles fonctionnalités dès que vos
            besoins l&#39;exigent.
          </p>
        </div>
        <div className="group relative min-h-85 border border-[#ececec] bg-white px-6 py-8 transition-all duration-600 hover:bg-linear-to-b hover:from-white hover:to-[#ebebeb] sm:px-8 sm:py-10">
          <div className="flex items-start justify-between gap-6">
            <div className="transition-transform duration-600 group-hover:translate-y-3">
              <img src="/images/card-illustration-02.svg" alt="Technologie évolutive" />
            </div>
            <span className="font-mono text-[11px] text-black">02</span>
          </div>
          <h3 className="mt-8 font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black transition-transform duration-600 group-hover:translate-y-3 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
            Technologie évolutive
          </h3>
          <p className="mt-24 font-[Neue_Montreal] text-[14px] leading-7 text-black/45 transition-all duration-600 group-hover:-translate-y-3 group-hover:text-black">
            Nous concevons des architectures pérennes et extensibles. Notre
            priorité est de bâtir des solutions prêtes pour le futur, capables
            de s&rsquo;adapter et de grandir au rythme de l&rsquo;évolution de
            votre entreprise.
          </p>
        </div>
        <div className="border border-[#ececec]">
          <img className="w-full h-full object-cover" src="/images/image-jpeg-51.png" alt="" />
        </div>
        <div className="group relative min-h-85 border border-[#ececec] bg-white px-6 py-8 transition-all duration-600 hover:bg-linear-to-b hover:from-white hover:to-[#ebebeb] sm:px-8 sm:py-10">
          <div className="flex items-start justify-between gap-6">
            <div className="transition-transform duration-600 group-hover:translate-y-3">
              <img src="/images/card-illustration-04.svg" alt="Approche gagnant-gagnant" />
            </div>
            <span className="font-mono text-[11px] text-black">04</span>
          </div>
          <h3 className="mt-8 font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black transition-transform duration-600 group-hover:translate-y-3 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
            Approche gagnant-gagnant
          </h3>
          <p className="mt-24 font-[Neue_Montreal] text-[14px] leading-7 text-black/45 transition-all duration-600 group-hover:-translate-y-3 group-hover:text-black">
            Notre succès est indissociable du vôtre. Nous privilégions une
            collaboration étroite et durable, en fournissant des services qui
            favorisent une croissance soutenable et renforcent les liens avec
            vos clients.
          </p>
        </div>
        <div className="group relative min-h-85 border border-[#ececec] bg-white px-6 py-8 transition-all duration-600 hover:bg-linear-to-b hover:from-white hover:to-[#ebebeb] sm:px-8 sm:py-10">
          <div className="flex items-start justify-between gap-6">
            <div className="transition-transform duration-600 group-hover:translate-y-3">
              <img src="/images/card-illustration-03.svg" alt="Expertise métier" />
            </div>
            <span className="font-mono text-[11px] text-black">05</span>
          </div>
          <h3 className="mt-8 font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black transition-transform duration-600 group-hover:translate-y-3 group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
            Expertise métier
          </h3>
          <p className="mt-24 font-[Neue_Montreal] text-[14px] leading-7 text-black/45 transition-all duration-600 group-hover:-translate-y-3 group-hover:text-black">
            Avec près d&apos;une décennie d&apos;expérience dans le secteur de
            l&apos;informatique, nous maîtrisons les subtilités technologiques
            pour délivrer, de manière constante, des résultats d&apos;une
            qualité exceptionnelle.
          </p>
        </div>
        <div className="border border-[#ececec]">
          <img className="w-full h-full object-cover bg-[#00e5c0]" src="/images/capture-decran-20260307-a-1836221.png" alt="" />
        </div>
      </div>
      {/* 360 section */}
      <div className="flex flex-col items-center md:flex-row md:items-start my-10">
        <img
          className="w-full max-w-101 md:w-96 h-auto object-contain"
          src="/images/capture-decran-20260310-a-1052222.svg"
          alt="Nos services"
        />
        <div className="flex flex-col items-center md:items-start px-4 md:px-8">
          <h2 className="text-[#8F8F8F] font-mono text-sm font-normal leading-normal">
            {"{ Nos services }"}
          </h2>
          <p className="text-center md:text-left font-[Neue_Montreal] text-[30px] md:text-[52px] font-medium leading-[1.2] md:leading-16.25 text-black">
            Une approche 360° pour donnerdu sens, de la force et de la
            cohérence.
          </p>
          <CtaButton className="mx-auto mt-8">En savoir plus</CtaButton>
        </div>
      </div>

      {/* Services Accordion */}
      <ServicesAccordionSection />

      {/* Tools / Logos Marquee */}
      <Tools />

      {/* Process Timeline */}
      <ProcessTimelineSection />

      {/* Nos Atouts */}
      <NosAtoutsSection />

      {/* Projects */}
      <NosProjectsSection />

      <TestimonialsSection />
      <FaqSection />
    </div>
  );
};

export default Home;
