"use client";

import NosProjectsSection from "./NosProjectsSection";
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
      <div className="my-16">
        <h2 className="text-[#8F8F8F] text-center font-mono text-sm font-normal leading-normal">
          {"{Qui sommes nous}"}
        </h2>
        <p className="text-center font-[Neue_Montreal] text-[52px] font-medium leading-[65px] text-black">
          Depuis 3 ans, Numispark accompagne 60+ entreprises françaises dans
          leur transformation numérique.
        </p>
        <button className="group flex items-center gap-[45px] mx-auto mt-8 px-[22px] py-[19px] bg-transparent border border-black rounded-[60px] hover:bg-[#05ffe0] hover:border-[#05ffe0] transition-colors duration-300">
          <span className="font-mono text-[14px] font-normal leading-normal text-black uppercase tracking-wide">
            En savoir plus
          </span>
          <span className="flex items-center justify-center w-[17px] h-[17px] text-black text-lg leading-none">
            +
          </span>
        </button>
      </div>
      {/* Stats — 3 columns */}
      <div className="mt-16 grid grid-cols-3 gap-16">
        <div className="group px-8 pt-8 pb-4 border-t-2 border-[#E0E0E0] hover:border-black transition-colors duration-300">
          <p className="font-[Neue_Montreal] text-[80px] font-medium leading-none text-black mb-6 group-hover:text-[#05ffe0] transition-colors duration-300">
            +60
          </p>
          <p className="font-[Neue_Montreal] text-[14px] font-normal leading-[22px] text-[#7F7F7F]">
            projets digitaux conçus, développés et livrés avec succès pour des
            clients allant de la startup au entreprise.
          </p>
        </div>
        <div className="group px-8 pt-8 pb-4 border-t-2 border-[#E0E0E0] hover:border-black transition-colors duration-300 ">
          <p className="font-[Neue_Montreal] text-[80px] font-medium leading-none text-black mb-6 group-hover:text-[#05ffe0] transition-colors duration-300">
            10
          </p>
          <p className="font-[Neue_Montreal] text-[14px] font-normal leading-[22px] text-[#7F7F7F]">
            spécialistes pluridisciplinaires qui mettent leur savoir-faire et
            leur créativité au service exclusif de la réussite de votre
            transformation digitale.
          </p>
        </div>
        <div className="group px-8 pt-8 pb-4 border-t-2 border-[#E0E0E0] hover:border-black transition-colors duration-300">
          <p className="font-[Neue_Montreal] text-[80px] font-medium leading-none text-black mb-6 group-hover:text-[#05ffe0] transition-colors duration-300">
            100 %
          </p>
          <p className="font-[Neue_Montreal] text-[14px] font-normal leading-[22px] text-[#7F7F7F]">
            de nos projets bénéficient d&apos;une rigueur méthodologique et
            d&apos;une expertise confirmée, assurant une qualité de livraison
            irréprochable.
          </p>
        </div>
      </div>
      {/* Next sections */}
      <div className="grid grid-cols-2">
        <div className="border-t-2 border-r-2 border-[#E0E0E0] py-8 px-8">
          <div className="flex">
            <div>
              <img
                src="/images/card-illustration-01.svg"
                alt="Solutions sur mesure"
              ></img>
              <h3 className="text-3xl font-bold">Solutions sur mesure</h3>
            </div>
            <p className="text-sm font-mono text-[#7F7F7F] top-0 left-0">01</p>
          </div>
          <p className="mt-16">
            Nous ne croyons pas aux solutions génériques. Nous développons des
            approches sur mesure, parfaitement alignées sur vos enjeux
            spécifiques, et créons de nouvelles fonctionnalités dès que vos
            besoins l&#39;exigent.
          </p>
        </div>
        <div className="border-t-2 border-r-2 border-[#E0E0E0] py-8 px-8">
          <div className="flex">
            <div>
              <img
                src="/images/card-illustration-02.svg"
                alt="Technologie évolutive"
              ></img>
              <h3 className="text-3xl font-bold">Technologie évolutive</h3>
            </div>
            <p className="text-sm font-mono text-[#7F7F7F] top-0 left-0">02</p>
          </div>
          <p className="mt-16">
            Nous concevons des architectures pérennes et extensibles. Notre
            priorité est de bâtir des solutions prêtes pour le futur, capables
            de s&rsquo;adapter et de grandir au rythme de l&rsquo;évolution de
            votre entreprise.
          </p>
        </div>
        <div className="border-t-2 border-r-2 border-[#E0E0E0]">
          <img
            className="w-full h-full"
            src="/images/image-jpeg-51.png"
            alt="Technologie évolutive"
          ></img>
        </div>
        <div className="border-t-2 border-r-2 border-[#E0E0E0] py-8 px-8">
          <div className="flex">
            <div>
              <img
                src="/images/card-illustration-04.svg"
                alt="Approche gagnant-gagnant"
              ></img>
              <h3 className="text-3xl font-bold">Approche gagnant-gagnant</h3>
            </div>
            <p className="text-sm font-mono text-[#7F7F7F] top-0 left-0">04</p>
          </div>
          <p className="mt-16">
            Notre succès est indissociable du vôtre. Nous privilégions une
            collaboration étroite et durable, en fournissant des services qui
            favorisent une croissance soutenable et renforcent les liens avec
            vos clients.
          </p>
        </div>
        <div className="border-t-2 border-r-2 border-[#E0E0E0] py-8 px-8">
          <div className="flex">
            <div>
              <img
                src="/images/card-illustration-03.svg"
                alt="Approche gagnant-gagnant"
              ></img>
              <h3 className="text-3xl font-bold">Expertise métier</h3>
            </div>
            <p className="text-sm font-mono text-[#7F7F7F] top-0 left-0">05</p>
          </div>
          <p className="mt-16">
            Avec près d&apos;une décennie d&apos;expérience dans le secteur de
            l&apos;informatique, nous maîtrisons les subtilités technologiques
            pour délivrer, de manière constante, des résultats d&apos;une
            qualité exceptionnelle.
          </p>
        </div>
        <div className="border-t-2 border-r-2 border-[#E0E0E0]">
          <img
            className="w-full h-full bg-[#00e5c0]"
            src="/images/capture-decran-20260307-a-1836221.png"
            alt="Technologie évolutive"
          ></img>
        </div>
      </div>
      {/* 360 section */}
      <div className="flex my-10 ">
        <img
          className="w-96 h-full"
          src="/images/capture-decran-20260310-a-1052222.svg"
          alt="Technologie évolutive"
        ></img>
        <div className="flex flex-col items-start">
          <h2 className="text-[#8F8F8F] font-mono text-sm font-normal leading-normal">
            {"{ Nos services }"}
          </h2>
          <p className="font-[Neue_Montreal] text-[52px] font-medium leading-[65px] text-black">
            Une approche 360° pour donnerdu sens, de la force et de la
            cohérence.
          </p>
          <button className="group flex gap-[45px] mx-auto mt-8 px-[22px] py-[19px] bg-transparent border border-black rounded-[60px] hover:bg-[#05ffe0] hover:border-[#05ffe0] transition-colors duration-300">
            <span className="font-mono text-[14px] font-normal leading-normal text-black uppercase tracking-wide">
              En savoir plus
            </span>
            <span className="flex items-center justify-center w-[17px] h-[17px] text-black text-lg leading-none">
              +
            </span>
          </button>
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
