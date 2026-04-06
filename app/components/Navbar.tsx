"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Projets", href: "/projets" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Français");
  const [isScrolled, setIsScrolled] = useState(false);

  const languages = ["Français", "English", "Deutsch"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="absolute top-3 left-10 right-10 z-50 flex items-center justify-between px-8 py-1">
      {/* Logo — hidden when scrolled */}
      <Link
        href="/"
        className={`flex items-center shrink-0 transition-all duration-300 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image
          src="/full-logo-white.svg"
          alt="Numispark"
          width={140}
          height={36}
          priority
        />
      </Link>

      {/* Center Nav Links — always sticky */}
      <ul className="fixed top-4 right-1/5 z-[70] hidden -translate-x-1/2 items-center gap-1 rounded-full border border-black/8 bg-[#5a5a5a]/92 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-white/72 transition-colors duration-200 hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side — hidden when scrolled */}
      <div
        className={`flex items-center gap-3 transition-all duration-300 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* CTA Button */}
        <Link
          href="/pre-audit"
          className="hidden md:inline-flex items-center  px-4 py-2 rounded-full bg-[#00e5c0] text-black text-sm font-semibold hover:bg-[#00cca8] transition-colors duration-200"
        >
          Pré-audit gratuit
        </Link>

        {/* Mail Icon */}
        <button
          aria-label="Contact"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </button>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-colors duration-200 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2" />
              <path d="M2 12h20" />
            </svg>
            <span>{selectedLang}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
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
            <div className="absolute right-0 mt-2 w-36 rounded-xl bg-[#1a1a2e] border border-white/10 shadow-xl overflow-hidden">
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
    </nav>
  );
};

export default Navbar;
