"use client";

import React, { useState } from "react";
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

  const languages = ["Français", "English", "Deutsch"];

  return (
    <nav className="absolute top-3 left-10 right-10  z-50 flex items-center justify-between px-8 py-4 ">
      {/* Logo */}
      <Link href="/" className="flex items-center shrink-0">
        <Image
          src="/full-logo-white.svg"
          alt="Numispark"
          width={140}
          height={36}
          priority
        />
      </Link>

      {/* Center Nav Links */}
      <ul className="hidden md:flex items-center gap-5 bg-white/5 rounded-full px-6 py-2 border border-white/10">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className=" text-sm text-white/70 hover:text-white rounded-full transition-colors duration-200 hover:bg-white/10"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-3">
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
