"use client";

import { memo } from "react";
import {
  Building2,
  School,
  Rocket,
  Smartphone,
  Gauge,
  Headphones,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — 3 layanan inti (yang dipesan klien)
// ─────────────────────────────────────────────────────────────────────────────

const coreServices: {
  number: string;
  icon: React.ElementType;
  title: string;
  desc: string;
}[] = [
  {
    number: "01",
    icon: Building2,
    title: "Company Profile",
    desc: "Tampilkan profil bisnis, layanan, dan portofolio Anda secara profesional di satu tempat.",
  },
  {
    number: "02",
    icon: School,
    title: "Website Sekolah & Instansi",
    desc: "Website resmi dengan manajemen berita, data guru/siswa, galeri, dan dashboard admin.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Landing Page",
    desc: "Halaman fokus konversi untuk campaign, promo, atau peluncuran produk baru.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DATA — yang otomatis didapat di setiap paket
// ─────────────────────────────────────────────────────────────────────────────

const included: {
  icon: React.ElementType;
  label: string;
}[] = [
  { icon: Smartphone,  label: "Responsive di semua device" },
  { icon: Gauge,       label: "Loading cepat & teroptimasi" },
  { icon: Headphones,  label: "Support pasca-launch" },
];

// ─────────────────────────────────────────────────────────────────────────────
// CORE SERVICE CARD
// ─────────────────────────────────────────────────────────────────────────────

interface CoreCardProps {
  number: string;
  icon: React.ElementType;
  title: string;
  desc: string;
}

const CoreServiceCard = memo(function CoreServiceCard({
  number,
  icon: Icon,
  title,
  desc,
}: CoreCardProps) {
  return (
    <article
      aria-label={title}
      className="
        group relative flex flex-col
        p-8 sm:p-9
        rounded-2xl
        bg-white
        border border-slate-100
        hover:border-slate-200
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        transition-all duration-300
      "
    >
      {/* Number watermark */}
      <span
        aria-hidden
        className="
          absolute top-6 right-7
          font-black text-slate-50
          group-hover:text-blue-50
          transition-colors duration-300
          select-none
        "
        style={{ fontSize: 56, lineHeight: 1, letterSpacing: "-0.04em" }}
      >
        {number}
      </span>

      {/* Icon */}
      <div
        aria-hidden
        className="
          relative z-10
          w-11 h-11 mb-6 rounded-xl
          bg-slate-50 group-hover:bg-blue-600
          flex items-center justify-center
          transition-colors duration-300
        "
      >
        <Icon
          size={20}
          aria-hidden
          strokeWidth={2}
          className="text-slate-700 group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-lg font-bold text-slate-900 mb-2 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-slate-500 text-sm leading-relaxed">
        {desc}
      </p>
    </article>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section
      id="layanan"
      aria-labelledby="services-heading"
      className="py-20 sm:py-24 lg:py-28 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span
            aria-hidden
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-3 block"
          >
            Layanan Kami
          </span>

          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            Solusi Lengkap untuk Bisnis Anda
          </h2>

          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Dari company profile hingga toko online — kami bantu wujudkan
            website yang sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        {/* Core services grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12"
          role="list"
          aria-label="Layanan inti"
        >
          {coreServices.map((service) => (
            <li key={service.title} role="listitem">
              <CoreServiceCard {...service} />
            </li>
          ))}
        </ul>

        {/* Included strip — bukan "layanan", tapi yang otomatis didapat */}
        <div
          className="
            flex flex-col sm:flex-row items-center justify-center
            gap-x-10 gap-y-4
            py-6 px-8
            rounded-2xl
            bg-slate-50
            border border-slate-100
          "
        >
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider sm:border-r sm:border-slate-200 sm:pr-8">
            Sudah termasuk
          </span>
          {included.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={15} strokeWidth={2} className="text-blue-600 flex-shrink-0" aria-hidden />
              <span className="text-sm text-slate-600 font-medium">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}