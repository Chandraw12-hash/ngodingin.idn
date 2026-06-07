"use client";

import { Check } from "lucide-react";
import { memo } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_NUMBER = "6281234567890";

const plans = [
  {
    name: "Mahasiswa",
    price: "500",
    unit: "rb",
    duration: "≤ 1 minggu",
    description: "Untuk portofolio, tugas akhir, atau UKM",
    features: [
      "Landing page / 1 halaman",
      "Desain modern & responsive",
      "Form kontak / Tombol WhatsApp",
      "Revisi 2x",
      "Tanpa domain & hosting",
    ],
    popular: false,
    buttonText: "Pilih Paket Ini",
    waMessage: "Halo, saya tertarik dengan paket Mahasiswa (Rp 500rb).",
  },
  {
    name: "Standar",
    price: "1.2",
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
    buttonText: "Pilih Paket Ini",
    waMessage: "Halo, saya tertarik dengan paket Standar (Rp 1.2jt).",
  },
  {
    name: "Profesional",
    price: "3",
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
    buttonText: "Konsultasi Gratis",
    waMessage: "Halo, saya tertarik dengan paket Profesional. Boleh konsultasi dulu?",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// PLAN CARD
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
        relative rounded-2xl p-7
        flex flex-col h-full
        transition-all duration-300 hover:-translate-y-1
        ${isPopular
          ? "bg-blue-600 text-white shadow-xl shadow-blue-200/50 border-2 border-blue-500"
          : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
        }
      `}
    >
      {/* Popular badge — clean pill, no emoji */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-slate-900 text-white text-[11px] font-bold px-4 py-1.5 rounded-full tracking-wide uppercase whitespace-nowrap">
            Paling Diminati
          </span>
        </div>
      )}

      {/* Package name */}
      <p className={`text-[11px] font-bold tracking-[0.15em] uppercase mb-4 ${isPopular ? "text-blue-200" : "text-blue-500"}`}>
        {plan.name}
      </p>

      {/* Price */}
      <div className="mb-3 flex items-baseline gap-1.5">
        <span className={`text-4xl font-black tracking-tight leading-none ${isPopular ? "text-white" : "text-gray-900"}`}>
          {plan.price === "Sesuai" ? plan.price : `Rp ${plan.price}`}
        </span>
        <span className={`text-sm font-medium ${isPopular ? "text-blue-200" : "text-gray-400"}`}>
          {plan.unit}
        </span>
      </div>

      {/* Duration — text only, no badge/sticker */}
      <p className={`text-xs font-medium mb-4 ${isPopular ? "text-blue-200" : "text-gray-400"}`}>
        Selesai dalam {plan.duration}
      </p>

      {/* Description */}
      <p className={`text-sm leading-relaxed mb-6 ${isPopular ? "text-blue-100" : "text-gray-500"}`}>
        {plan.description}
      </p>

      {/* Divider */}
      <div className={`h-px mb-6 ${isPopular ? "bg-blue-500/60" : "bg-gray-100"}`} aria-hidden />

      {/* Features */}
      <ul
        className="space-y-3 mb-8 flex-1"
        role="list"
        aria-label={`Fitur paket ${plan.name}`}
      >
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm" role="listitem">
            <Check
              size={13}
              aria-hidden
              className={`flex-shrink-0 mt-0.5 ${isPopular ? "text-blue-300" : "text-blue-500"}`}
            />
            <span className={isPopular ? "text-blue-50" : "text-gray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href={waLink(plan.waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${plan.buttonText} — paket ${plan.name} via WhatsApp`}
        className={`
          block text-center py-3.5 rounded-xl font-bold text-sm
          transition-all duration-200 active:scale-[0.98]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          ${isPopular
            ? "bg-white text-blue-600 hover:bg-gray-50 focus-visible:ring-white"
            : "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500"
          }
        `}
      >
        {plan.buttonText}
      </a>
    </article>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function Pricing() {
  const waLink = (msg: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

  return (
    <section
      id="harga"
      aria-labelledby="pricing-heading"
      className="py-24 px-4 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-3 block"
            aria-hidden
          >
            Harga Terjangkau
          </span>
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Pilih Sesuai Kebutuhan
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Mulai dari Rp 500rb untuk mahasiswa. Konsultasi gratis sebelum order.
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Daftar paket harga"
        >
          {plans.map((plan) => (
            <li key={plan.name} role="listitem" className="flex flex-col">
              <PlanCard plan={plan} waLink={waLink} />
            </li>
          ))}
        </ul>

        {/* Footnote */}
        <div className="text-center mt-10 space-y-1">
          <p className="text-xs text-gray-400">
            * Harga untuk mahasiswa bisa nego &amp; cicil. Domain &amp; hosting bisa ditambahkan sesuai kebutuhan.
          </p>
          <p className="text-xs text-gray-400">
            Hubungi kami via WhatsApp untuk konsultasi gratis — tim siap membantu.
          </p>
        </div>

      </div>
    </section>
  );
}