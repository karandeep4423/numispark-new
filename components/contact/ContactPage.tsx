"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/components/sections/FaqSection";

/* ────────────────────────── Data ────────────────────────── */

const CONTACT_INFOS = [
  {
    label: "Email",
    value: "contact@numispark.fr",
    href: "mailto:contact@numispark.fr",
  },
  {
    label: "Téléphone",
    value: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    label: "Adresse",
    value: "Paris, France",
    href: null,
  },
  {
    label: "Horaires",
    value: "Lun. – Ven. · 9h00 – 18h00",
    href: null,
  },
];

const REASONS = [
  {
    number: "I",
    title: "Création de site web",
    description:
      "Vous souhaitez un site vitrine, e-commerce ou une application sur mesure pensée pour convertir.",
  },
  {
    number: "II",
    title: "Refonte & UX/UI",
    description:
      "Votre site existant a besoin d’un nouveau souffle : design, performance, parcours utilisateur.",
  },
  {
    number: "III",
    title: "SEO & visibilité",
    description:
      "Vous voulez gagner en visibilité sur Google et générer du trafic qualifié sur la durée.",
  },
  {
    number: "IV",
    title: "Conseil & stratégie",
    description:
      "Un échange pour structurer votre projet digital, valider une idée ou cadrer un MVP.",
  },
];

const BUDGET_OPTIONS = [
  "< 5 000 €",
  "5 000 – 15 000 €",
  "15 000 – 30 000 €",
  "> 30 000 €",
];

const SUBJECT_OPTIONS = [
  "Création de site web",
  "Application mobile",
  "E-commerce",
  "SEO / Audit",
  "Autre",
];

const SOCIALS = [
  { label: "LINKEDIN", href: "#" },
  { label: "INSTAGRAM", href: "#" },
  { label: "TIKTOK", href: "#" },
  { label: "FACEBOOK", href: "#" },
];

/* ────────────────────────── Sub-components ────────────────────────── */

function RomanBadge({ number, dark }: { number: string; dark?: boolean }) {
  return (
    <div
      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[5px] ${
        dark ? "bg-[#222]" : "bg-[#f1f1f1]"
      }`}
    >
      <span
        className={`font-[Roboto_Mono] text-[18px] font-light ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {number}
      </span>
    </div>
  );
}

function ContactForm({ dark }: { dark?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const labelCls = `font-[Roboto_Mono] text-[11px] uppercase tracking-wider ${
    dark ? "text-white/70" : "text-black/60"
  }`;

  const inputCls = `w-full border-0 border-b bg-transparent pb-3 pt-1 font-[Neue_Montreal] text-[15px] leading-6 outline-none transition-colors ${
    dark
      ? "border-[#2a2a2a] text-white placeholder:text-white/40 focus:border-[#05ffe0]"
      : "border-[#d9d9d9] text-black placeholder:text-black/40 focus:border-black"
  }`;

  const chipCls = (active: boolean) =>
    `rounded-full border px-4 py-2 font-[Roboto_Mono] text-[11px] uppercase tracking-wider transition-colors duration-200 ${
      active
        ? dark
          ? "border-[#05ffe0] bg-[#05ffe0] text-black"
          : "border-black bg-black text-white"
        : dark
        ? "border-white/20 text-white/70 hover:border-white"
        : "border-black/20 text-black/70 hover:border-black"
    }`;

  return (
    <form
      className="flex w-full flex-col gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Nom complet *</label>
          <input
            type="text"
            name="name"
            required
            className={inputCls}
            aria-label="Nom complet"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Entreprise</label>
          <input
            type="text"
            name="company"
            className={inputCls}
            aria-label="Entreprise"
          />
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="vous@exemple.com"
            className={inputCls}
            aria-label="Email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls}>
            Téléphone{" "}
            <span className={dark ? "text-white/40" : "text-black/40"}>
              (optionnel)
            </span>
          </label>
          <input
            type="tel"
            name="phone"
            className={inputCls}
            aria-label="Téléphone"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className={labelCls}>Sujet</label>
        <div className="flex flex-wrap gap-2">
          {SUBJECT_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setSelectedSubject(opt)}
              className={chipCls(selectedSubject === opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className={labelCls}>Budget estimé</label>
        <div className="flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setSelectedBudget(opt)}
              className={chipCls(selectedBudget === opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelCls}>Votre message *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes…"
          className={`${inputCls} resize-none`}
          aria-label="Message"
        />
      </div>

      <label
        className={`flex cursor-pointer items-start gap-3 font-[Neue_Montreal] text-[13px] leading-[1.6] ${
          dark ? "text-white/60" : "text-black/60"
        }`}
      >
        <input
          type="checkbox"
          required
          className={`mt-1 h-4 w-4 shrink-0 rounded-sm border ${
            dark
              ? "border-white/30 bg-transparent accent-[#05ffe0]"
              : "border-black/30 bg-transparent accent-black"
          }`}
        />
        <span>
          J&apos;accepte que mes données soient utilisées pour traiter ma demande,
          conformément à la{" "}
          <Link
            href="/politique-de-confidentialite"
            className={
              dark
                ? "text-[#05ffe0] hover:underline"
                : "text-black underline hover:no-underline"
            }
          >
            politique de confidentialité
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        className={`mt-2 inline-flex w-fit items-center gap-8 rounded-full border px-6 py-3.5 font-[Roboto_Mono] text-[12px] uppercase tracking-wider transition-colors duration-300 ${
          dark
            ? "border-white bg-[#0f0f0f] text-white hover:bg-[#05ffe0] hover:text-black hover:border-[#05ffe0]"
            : "border-black bg-white text-black hover:bg-black hover:text-white"
        }`}
      >
        {submitted ? "Message envoyé" : "Envoyer le message"}
        <span className="text-sm leading-none">+</span>
      </button>

      {submitted && (
        <p
          className={`font-[Neue_Montreal] text-[14px] ${
            dark ? "text-[#05ffe0]" : "text-black"
          }`}
          role="status"
        >
          Merci, votre message a bien été pris en compte. Nous revenons vers vous
          sous 24h ouvrées.
        </p>
      )}
    </form>
  );
}

/* ────────────────────────── Main Component ────────────────────────── */

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen overflow-hidden bg-[#101010] flex flex-col">
        {/* Background video */}
        <div className="pointer-events-none absolute inset-0">
          <video
            src="/bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Title pinned toward bottom */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end gap-6 px-8 pb-28 pt-40 md:px-20">
          <p className="font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-white/70">
            {"{ Contact }"}
          </p>
          <h1 className="max-w-5xl font-[Neue_Montreal] text-[32px] font-medium leading-[1.05] text-white sm:text-[44px] lg:text-[58px] xl:text-[68px]">
            <span>Parlons de votre </span>
            <span className="text-[#05ffe0]">prochain projet</span>
            <span>.</span>
          </h1>
          <p className="max-w-2xl font-[Neue_Montreal] text-[16px] leading-[1.7] text-white/70 sm:text-[18px]">
            Une idée, un brief, un simple échange ? Notre équipe vous répond sous
            24h ouvrées pour cadrer ensemble votre besoin.
          </p>
        </div>
      </section>

      {/* ─── Contact infos + Form ─── */}
      <section className="border-t border-[#dadada] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20 lg:px-12 xl:px-16">
          {/* Left: contact info */}
          <div className="self-start lg:sticky lg:top-28">
            <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#8f8f8f]">
              {"{ Restons en contact }"}
            </p>
            <h2 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black sm:text-[36px] lg:text-[44px] xl:text-[52px]">
              Une équipe à votre <span className="italic">écoute</span>.
            </h2>
            <p className="mt-5 max-w-md font-[Neue_Montreal] text-[15px] leading-[1.7] text-[#7f7f7f] lg:text-[16px] xl:text-[17px]">
              Remplissez le formulaire, ou contactez-nous directement par
              téléphone ou par email. Nous étudions chaque demande avec attention.
            </p>

            <div className="mt-10 flex flex-col">
              {CONTACT_INFOS.map((info) => (
                <div key={info.label}>
                  <div className="flex flex-col gap-1 py-5">
                    <span className="font-[Roboto_Mono] text-[11px] uppercase tracking-wider text-[#8f8f8f]">
                      {info.label}
                    </span>
                    {info.href ? (
                      <Link
                        href={info.href}
                        className="font-[Neue_Montreal] text-[18px] text-black transition-colors hover:text-[#7f7f7f] sm:text-[20px]"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <span className="font-[Neue_Montreal] text-[18px] text-black sm:text-[20px]">
                        {info.value}
                      </span>
                    )}
                  </div>
                  <div className="h-px bg-[#d9d9d9]" />
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="mb-4 font-[Roboto_Mono] text-[11px] uppercase tracking-wider text-[#8f8f8f]">
                Suivez-nous
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {SOCIALS.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="font-[Roboto_Mono] text-[11px] uppercase tracking-[0.16em] text-black/70 transition-colors hover:text-black"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h3 className="mb-2 font-[Neue_Montreal] text-[22px] font-medium leading-tight text-black sm:text-[26px]">
              Décrivez-nous votre projet.
            </h3>
            <p className="mb-10 font-[Neue_Montreal] text-[15px] leading-[1.7] text-[#7f7f7f]">
              Plus vous nous donnerez de contexte, plus notre réponse sera
              pertinente.
            </p>
            <ContactForm />
          </div>
        </div>
        <div className="h-px bg-[#dadada]" />
      </section>

      {/* ─── Reasons / Why contact ─── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-[#8f8f8f]">
            {"{ Pour quoi nous contacter ? }"}
          </p>
          <h2 className="mb-12 font-[Neue_Montreal] text-[28px] font-medium leading-tight text-black sm:text-[36px] lg:text-[44px] xl:text-[52px]">
            Quel que soit votre besoin,
            <br />
            <span className="text-[#7f7f7f]">on en parle.</span>
          </h2>

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {REASONS.map((r) => (
              <div key={r.number} className="flex gap-4">
                <RomanBadge number={r.number} />
                <div>
                  <h3 className="font-[Neue_Montreal] text-[16px] font-medium leading-tight text-black sm:text-[18px]">
                    {r.title}
                  </h3>
                  <p className="mt-2 font-[Neue_Montreal] text-[15px] leading-[1.7] text-[#7f7f7f] lg:text-[16px] xl:text-[17px]">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Dark CTA strip (stats + direct contact) ─── */}
      <section className="bg-[#0f0f0f] text-white">
        <div className="h-px w-full bg-[#2a2a2a]" />
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-12 xl:px-16">
          {/* Left: Heading */}
          <div>
            <p className="mb-4 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-white/60">
              {"{ Prêt à démarrer ? }"}
            </p>
            <h2 className="font-[Neue_Montreal] text-[28px] font-medium leading-tight sm:text-[36px] lg:text-[44px] xl:text-[52px]">
              Donnons vie à votre{" "}
              <span className="text-[#05ffe0]">projet.</span>
            </h2>
            <p className="mt-5 max-w-md font-[Neue_Montreal] text-[15px] leading-[1.7] text-white/60 lg:text-[16px] xl:text-[17px]">
              Une question rapide ? Écrivez-nous directement ou réservez un
              créneau d&apos;échange — sans engagement.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="mailto:contact@numispark.fr"
                className="inline-flex items-center gap-8 rounded-full border border-[#05ffe0] bg-[#05ffe0] px-6 py-3.5 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-black transition-colors duration-300 hover:bg-white hover:border-white"
              >
                Nous écrire
                <span className="text-sm leading-none">+</span>
              </Link>
              <Link
                href="/services/audit-seo-gratuit"
                className="inline-flex items-center gap-8 rounded-full border border-white/40 bg-transparent px-6 py-3.5 font-[Roboto_Mono] text-[12px] uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                Audit SEO gratuit
                <span className="text-sm leading-none">+</span>
              </Link>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-12 self-center">
            <div>
              <p className="font-[Neue_Montreal] text-[44px] font-medium leading-none text-[#05ffe0] sm:text-[56px]">
                24h
              </p>
              <p className="mt-3 font-[Neue_Montreal] text-[14px] leading-[1.6] text-white/60">
                Délai de réponse moyen sur jours ouvrés
              </p>
            </div>
            <div>
              <p className="font-[Neue_Montreal] text-[44px] font-medium leading-none text-[#05ffe0] sm:text-[56px]">
                100%
              </p>
              <p className="mt-3 font-[Neue_Montreal] text-[14px] leading-[1.6] text-white/60">
                Devis personnalisé & sans engagement
              </p>
            </div>
            <div>
              <p className="font-[Neue_Montreal] text-[44px] font-medium leading-none text-[#05ffe0] sm:text-[56px]">
                +50
              </p>
              <p className="mt-3 font-[Neue_Montreal] text-[14px] leading-[1.6] text-white/60">
                Projets livrés pour des marques exigeantes
              </p>
            </div>
            <div>
              <p className="font-[Neue_Montreal] text-[44px] font-medium leading-none text-[#05ffe0] sm:text-[56px]">
                FR
              </p>
              <p className="mt-3 font-[Neue_Montreal] text-[14px] leading-[1.6] text-white/60">
                Une équipe française, à votre fuseau horaire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FaqSection />
    </main>
  );
}
