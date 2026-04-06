"use client";

import Image from "next/image";
import Link from "next/link";
import CtaButton from "./CtaButton";

const socials = ["TIKTOK", "LINKEDIN", "INSTAGRAM", "FACEBOOK"];

const legalLinks = [
  { label: "MENTIONS LÉGALES", href: "/mentions-legales" },
  {
    label: "POLITIQUE DE CONFIDENTIALITÉ",
    href: "/politique-de-confidentialite",
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Full-bleed background video */}
      <video
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle dark vignette so card stands out */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Outer padding â€” video shows above and around the card */}
      <div className="relative z-10 px-6 md:px-10 pt-46 pb-8">
        {/* â”€â”€ Inset dark card â”€â”€ */}
        <div className="rounded-2xl overflow-hidden bg-[#111]/70 backdrop-blur-sm border border-white/5">
          {/* Top section: socials (left) + tagline/CTA (right) */}
          <div className="flex flex-col md:flex-row gap-10 px-10 md:px-14 pt-12 pb-10">
            {/* Left: social links */}
            <div className="md:w-[45%] flex flex-col justify-start pt-1">
              <nav className="flex flex-wrap gap-x-8 gap-y-4">
                {socials.map((s) => (
                  <Link
                    key={s}
                    href="#"
                    className="font-mono text-[11px] tracking-[0.16em]  hover:text-white transition-colors duration-200"
                  >
                    {s}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right: tagline + description + CTA */}
            <div className="md:w-[55%] flex flex-col gap-5">
              <h2 className="font-[Neue_Montreal] text-[28px] md:text-[36px] lg:text-[40px] font-medium leading-[1.1] text-white">
                Nous croyons en l&apos;humains
                <br />
                pour créer l&apos;avenir.
              </h2>
              <p className="font-[Neue_Montreal]  text-[13px] leading-[1.75]  max-w-sm">
                Créer des solutions numériques qui stimulent l&apos;innovation
                et favorisent la croissance.
              </p>
              <div>
                <CtaButton href="/contact" variant="outline-footer">CONTACTEZ-NOUS</CtaButton>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 px-10 md:px-14 py-7">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/full-logo-white.svg"
                alt="Numispark"
                width={156}
                height={34}
                className="h-8 w-auto"
              />
            </Link>

            {/* Copyright + legal links */}
            <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
              <span className="font-mono text-[10px] tracking-widest ">
                ©2026 NUMISPARK.
              </span>
              {legalLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="font-mono text-[10px] tracking-widest  transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Language selector */}
            <div className="flex items-center gap-2 shrink-0">
              <Image
                src="/globe.svg"
                alt=""
                width={13}
                height={13}
                className="opacity-30 invert"
              />
              <span className="font-mono text-[10px] tracking-widest ">
                Français
              </span>
              <span className=" text-[9px]">▼</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
