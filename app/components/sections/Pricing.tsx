"use client";

import { memo } from "react";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_NUMBER = "6282319216326";

const plans = [
  {
    name: "Mahasiswa",
    price: "Rp 500",
    unit: "rb",
    duration: "≤ 1 minggu",
    description: "Untuk portofolio, tugas akhir, atau UKM",
    features: [
      "Landing page / 1 halaman",
      "Desain modern & responsive",
      "Form kontak / tombol WhatsApp",
      "Revisi 2x",
      "Tanpa domain & hosting",
    ],
    popular: false,
    waMessage: "Halo, saya tertarik dengan paket Mahasiswa (Rp 500rb).",
  },
  {
    name: "Standar",
    price: "Rp 1,2",
    unit: "jt",
    duration: "≤ 2 minggu",
    description: "Company profile + domain & hosting",
    features: [
      "Multi halaman (Home, Tentang, Layanan, Kontak)",
      "Katalog produk / portfolio",
      "Google Maps integrasi",
      "Domain .id / .com gratis 1 tahun",
      "Hosting ringan 1 tahun",
      "Revisi 3x",
    ],
    popular: true,
    waMessage: "Halo, saya tertarik dengan paket Standar (Rp 1.2jt).",
  },
  {
    name: "Profesional",
    price: "Rp 3",
    unit: "jt",
    duration: "≤ 2 minggu",
    description: "Fitur custom sesuai kebutuhan bisnis kamu",
    features: [
      "Semua fitur Standar",
      "Toko online / sistem booking",
      "Dashboard admin sederhana",
      "Domain & hosting 1 tahun",
      "Revisi unlimited",
      "Support prioritas",
      "Fitur tambahan sesuai request",
    ],
    popular: false,
    waMessage: "Halo, saya tertarik dengan paket Profesional. Boleh konsultasi dulu?",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// PLAN CARD — flat ala portfolio; popular = kartu aksen penuh
// ─────────────────────────────────────────────────────────────────────────────

interface PlanCardProps {
  plan: (typeof plans)[number];
  waLink: (msg: string) => string;
}

const PlanCard = memo(function PlanCard({ plan, waLink }: PlanCardProps) {
  const isPopular = plan.popular;

  return (
    <article
      aria-label={`Paket ${plan.name}`}
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
        {plan.name}
      </p>

      {/* Harga — serif besar */}
      <div className="mt-5 flex items-baseline gap-1.5">
        <span
          className={`text-4xl leading-none md:text-[40px] ${
            isPopular ? "text-accent-ink" : "text-ink"
          }`}
        >
          {plan.price}
        </span>
        <span className={`text-sm font-medium ${isPopular ? "text-accent-ink-80" : "text-faint"}`}>
          {plan.unit}
        </span>
      </div>

      {/* Durasi */}
      <p className={`mt-2 text-xs font-medium ${isPopular ? "text-accent-ink-80" : "text-faint"}`}>
        Selesai dalam {plan.duration}
      </p>

      {/* Deskripsi */}
      <p
        className={`mt-4 text-sm leading-[1.75] ${
          isPopular ? "text-accent-ink-90" : "text-muted"
        }`}
      >
        {plan.description}
      </p>

      {/* Divider */}
      <div aria-hidden className={`mt-6 mb-6 border-t ${isPopular ? "border-accent-ink-25" : "border-line"}`} />

      {/* Fitur */}
      <ul
        className="mb-8 flex-1 space-y-2.5"
        role="list"
        aria-label={`Fitur paket ${plan.name}`}
      >
        {plan.features.map((feature) => (
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
        href={waLink(plan.waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Pilih paket ${plan.name} via WhatsApp`}
        className={`
          inline-flex items-center justify-center rounded px-5 py-3 text-[14.5px] font-semibold
          transition-all duration-200 hover:-translate-y-px
          ${isPopular
            ? "bg-surface text-ink border border-transparent hover:border-accent-ink-25"
            : "bg-accent text-accent-ink hover:bg-accent-hover"}
        `}
      >
        {isPopular ? "Pilih Paket Ini" : "Pilih Paket Ini"}
      </a>
    </article>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Pricing() {
  const waLink = (msg: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

  return (
    <section
      id="harga"
      aria-labelledby="pricing-heading"
      className="border-t border-line bg-bg"
    >
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">

        <Reveal>
          <SectionHeader
            id="pricing-heading"
            num="04"
            kicker="Harga"
            title="Pilih sesuai kebutuhan."
            subtitle="Harga transparan, konsultasi gratis sebelum order. Khusus mahasiswa bisa nego & cicil."
          />
        </Reveal>

        {/* Grid */}
        <Reveal delay={80}>
          <ul
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Daftar paket harga"
          >
            {plans.map((plan) => (
              <li key={plan.name} role="listitem" className="flex flex-col">
                <PlanCard plan={plan} waLink={waLink} />
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Footnote */}
        <Reveal delay={60}>
          <p className="mt-8 text-[13px] text-faint">
            * Domain &amp; hosting bisa ditambahkan sesuai kebutuhan. Konsultasi pertama gratis tanpa komitmen —
            hubungi kami via WhatsApp untuk diskusi.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
