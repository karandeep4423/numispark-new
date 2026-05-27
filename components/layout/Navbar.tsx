"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Projets", href: "/projets" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  { label: "TIKTOK", href: "#" },
  { label: "LINKEDIN", href: "#" },
  { label: "INSTAGRAM", href: "#" },
  { label: "FACEBOOK", href: "#" },
];

const languages = ["Français", "English", "Deutsch"];

const Navbar = () => {
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Français");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━ DESKTOP NAV ━━━━━━━━━━━━━━━━━━ */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden lg:block">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 xl:gap-6 px-4 xl:px-17.5 pt-5 xl:pt-10.5 pb-3">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center transition-all duration-300 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Image
              src="/full-logo-white.svg"
              alt="Numispark"
              width={161}
              height={46}
              priority
            />
          </Link>

          {/* Center pill nav */}
          <ul className="inline-flex h-12 xl:h-15.5 items-center justify-center gap-6 xl:gap-8.5 rounded-[50px] bg-[rgba(46,46,46,0.80)] px-6 xl:px-9.25 py-3.75 backdrop-blur-[7px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-[Neue_Montreal] text-[17px] font-normal leading-normal whitespace-nowrap transition-colors duration-200 ${
                      isActive ? "text-white" : "text-[rgba(255,255,255,0.38)] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div
            className={`flex items-center justify-end gap-4 xl:gap-8 transition-all duration-300 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {/* Pré-audit gratuit */}
            <Link
              href="/services/audit-seo-gratuit"
              className="inline-flex items-center px-3 py-2 xl:px-4 xl:py-2.5 rounded-[60px] bg-[#05ffe0] text-black font-[Neue_Montreal] text-[17px] font-semibold hover:bg-white transition-colors duration-200 whitespace-nowrap"
            >
              Pré-audit gratuit
            </Link>

            {/* Separator */}
            <div className="bg-white h-6.25 w-px shrink-0" />

            {/* Mail icon */}
            <a
              href="mailto:contact@numispark.fr"
              className="text-white hover:text-[#05ffe0] transition-colors duration-200 shrink-0"
            >
              <svg width="20" height="16" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="2" rx="2" />
                <path d="m22 5-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 5" />
              </svg>
            </a>

            {/* Separator */}
            <div className="bg-white h-6.25 w-px shrink-0" />

            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2.25 text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2" />
                  <path d="M2 12h20" />
                </svg>
                <span className="font-['Jost'] text-[16px] text-white whitespace-nowrap">
                  {selectedLang}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl overflow-hidden z-80">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                        selectedLang === lang
                          ? "text-white bg-white/10"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ━━━━━━━━━━━━━━━━━━ MOBILE TOP BAR (closed) ━━━━━━━━━━━━━━━━━━ */}
      <div className="lg:hidden absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4.5 pt-14 pb-4">
        {/* Hamburger */}
        <button
          aria-label="Ouvrir le menu"
          onClick={() => setMobileMenuOpen(true)}
          className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-white shadow-[0px_4px_34px_0px_rgba(0,0,0,0.1)]"
        >
          <svg
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
            aria-hidden="true"
          >
            <rect width="20" height="1.8" rx="0.9" fill="#0f0f0f" />
            <rect y="5.6" width="20" height="1.8" rx="0.9" fill="#0f0f0f" />
            <rect y="11.2" width="20" height="1.8" rx="0.9" fill="#0f0f0f" />
          </svg>
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/full-logo-white.svg"
            alt="Numispark"
            width={120}
            height={30}
            priority
          />
        </Link>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━ MOBILE MENU OVERLAY (open) ━━━━━━━━━━━━━━━━━━ */}
      <div
        className={`lg:hidden fixed inset-0 z-100 bg-[#0f0f0f] flex flex-col transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Decorative background image */}
        <div className="pointer-events-none absolute right-0 top-0 h-[50vh] w-full overflow-hidden opacity-10">
          <Image
            src="/images/capture-decran-20260310-a-1052222.svg"
            alt=""
            fill
            className="object-cover object-top-right"
          />
        </div>

        {/* Close button */}
        <button
          aria-label="Fermer le menu"
          onClick={() => setMobileMenuOpen(false)}
          className="absolute left-4.5 top-15.75 flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-full border border-white bg-white shadow-[0px_4px_34px_0px_rgba(0,0,0,0.1)]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M18 6 6 18M6 6l12 12"
              stroke="#0f0f0f"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto pt-36 pb-10">
          {/* Nav links */}
          <nav className="px-4.5 flex flex-col">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-[Neue_Montreal] text-[29px] font-medium leading-14 text-white transition-colors duration-200 hover:text-[#05ffe0] ${
                  mobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${80 + i * 40}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="mx-4.5 mt-3 h-px bg-[#2a2a2a]" />

          {/* Pré-audit CTA */}
          <Link
            href="/services/audit-seo-gratuit"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4.5 py-6 font-[Neue_Montreal] text-[29px] font-medium text-white hover:text-[#05ffe0] transition-colors duration-200"
          >
            Pré-audit gratuit
          </Link>

          {/* Divider */}
          <div className="mx-4.5 h-px bg-[#2a2a2a]" />

          {/* Bottom row: socials + language */}
          <div className="px-4.5 pt-8 flex items-start justify-between">
            {/* Social links */}
            <div className="flex flex-col gap-11">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="font-mono text-[18px] uppercase text-[#7f7f7f] hover:text-white transition-colors duration-200"
                >
                  {s.label}
                </Link>
              ))}
            </div>

            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2.25 text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2" />
                  <path d="M2 12h20" />
                </svg>
                <span className="font-['Jost'] text-[16px] text-white whitespace-nowrap">
                  {selectedLang}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl overflow-hidden z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                        selectedLang === lang
                          ? "text-white bg-white/10"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
