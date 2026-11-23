"use client";

import { memo } from "react";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { useLang } from "../../../lib/i18n";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — angka & durasi tetap sama di kedua bahasa
// ─────────────────────────────────────────────────────────────────────────────

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_NUMBER = "6282319216326";

const planMeta = [
  { price: "Rp 500", unit: "rb", duration: "≤ 1 minggu", popular: false },
  { price: "Rp 1,2", unit: "jt", duration: "≤ 2 minggu", popular: true },
  { price: "Rp 3",   unit: "jt", duration: "≤ 2 minggu", popular: false },
] as const;

const waMessages = [
  "Halo, saya tertarik dengan paket Mahasiswa (Rp 500rb).",
  "Halo, saya tertarik dengan paket Standar (Rp 1.2jt).",
  "Halo, saya tertarik dengan paket Profesional. Boleh konsultasi dulu?",
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// PLAN CARD — flat ala portfolio; popular = kartu aksen penuh
// ─────────────────────────────────────────────────────────────────────────────

interface PlanCardProps {
  index: number;
  waLink: (msg: string) => string;
}

const PlanCard = memo(function PlanCard({ index, waLink }: PlanCardProps) {
  const { t } = useLang();
  const meta = planMeta[index];
  const copy = t.pricing.plans[index];
  const isPopular = meta.popular;

  return (
    <article
      aria-label={`${t.pricing.kicker}: ${copy.name}`}
      className={`
        relative flex h-full flex-col rounded p-6 md:p-8
        transition-transform duration-200 hover:-translate-y-px
        ${isPopular
          ? "bg-accent text-accent-ink"
          : "border border-line bg-surface text-ink hover:border-accent"}
      `}
    >
      {/* Nama paket — monospace */}
      <p
        aria-hidden
        className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
          isPopular ? "text-accent-ink-80" : "text-faint"
        }`}
      >
        {isPopular && <span className="mr-3">★</span>}
        {copy.name}
      </p>

      {/* Harga — serif besar */}
      <div className="mt-5 flex items-baseline gap-1.5">
        <span
          className={`text-4xl leading-none md:text-[40px] ${
            isPopular ? "text-accent-ink" : "text-ink"
          }`}
        >
          {meta.price}
        </span>
        <span className={`text-sm font-medium ${isPopular ? "text-accent-ink-80" : "text-faint"}`}>
          {meta.unit}
        </span>
      </div>

      {/* Durasi */}
      <p className={`mt-2 text-xs font-medium ${isPopular ? "text-accent-ink-80" : "text-faint"}`}>
        {t.pricing.durationPrefix} {meta.duration}
      </p>

      {/* Deskripsi */}
      <p
        className={`mt-4 text-sm leading-[1.75] ${
          isPopular ? "text-accent-ink-90" : "text-muted"
        }`}
      >
        {copy.description}
      </p>

      {/* Divider */}
      <div aria-hidden className={`mt-6 mb-6 border-t ${isPopular ? "border-accent-ink-25" : "border-line"}`} />

      {/* Fitur */}
      <ul
        className="mb-8 flex-1 space-y-2.5"
        role="list"
        aria-label={copy.name}
      >
        {copy.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm" role="listitem">
            <span
              aria-hidden
              className={`mt-2 h-1 w-1 flex-shrink-0 rounded-full ${
                isPopular ? "bg-accent-ink" : "bg-accent"
              }`}
            />
            <span className={isPopular ? "text-accent-ink-90" : "text-muted"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={waLink(waMessages[index])}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.pricing.ctaAria} — ${copy.name}`}
        className={`
          inline-flex items-center justify-center rounded px-5 py-3 text-[14.5px] font-semibold
          transition-all duration-200 hover:-translate-y-px
          ${isPopular
            ? "bg-surface text-ink border border-transparent hover:border-accent-ink-25"
            : "bg-accent text-accent-ink hover:bg-accent-hover"}
        `}
      >
        {t.pricing.cta}
      </a>
    </article>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Pricing() {
  const { t } = useLang();
  const p = t.pricing;

  const waLink = (msg: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

  return (
    <section
      id="harga"
      aria-labelledby={p.headingId}
      className="border-t border-line bg-bg"
    >
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">

        <Reveal>
          <SectionHeader
            id={p.headingId}
            num={p.num}
            kicker={p.kicker}
            title={p.title}
            subtitle={p.subtitle}
          />
        </Reveal>

        {/* Grid */}
        <Reveal delay={80}>
          <ul
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label={p.listLabel}
          >
            {p.plans.map((_, i) => (
              <li key={i} role="listitem" className="flex flex-col">
                <PlanCard index={i} waLink={waLink} />
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Footnote */}
        <Reveal delay={60}>
          <p className="mt-8 text-[13px] text-faint">{p.footnote}</p>
        </Reveal>

      </div>
    </section>
  );
}
