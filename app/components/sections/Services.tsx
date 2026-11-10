"use client";

import { memo } from "react";
import {
  Building2,
  School,
  Rocket,
  MonitorSmartphone,
  Gauge,
  Headphones,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — 3 layanan inti
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

const included: { icon: React.ElementType; label: string }[] = [
  { icon: MonitorSmartphone, label: "Responsive di semua device" },
  { icon: Gauge,             label: "Loading cepat & teroptimasi" },
  { icon: Headphones,        label: "Support pasca-launch" },
];

// ─────────────────────────────────────────────────────────────────────────────
// CORE SERVICE CARD — flat, border tipis, hover aksen
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
      className="group flex h-full flex-col rounded border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent md:p-8"
    >
      {/* Nomor monospace */}
      <span
        aria-hidden
        className="font-mono text-[12px] text-faint transition-colors duration-300 group-hover:text-accent"
      >
        {number}
      </span>

      {/* Icon */}
      <div aria-hidden className="mt-6 text-ink">
        <Icon size={22} strokeWidth={1.8} className="transition-colors duration-300 group-hover:text-accent" />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg text-ink">{title}</h3>

      {/* Desc */}
      <p className="mt-2 text-sm leading-[1.75] text-muted">{desc}</p>
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
      className="border-t border-line bg-bg"
    >
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">

        <Reveal>
          <SectionHeader
            id="services-heading"
            num="02"
            kicker="Layanan"
            title="Solusi lengkap untuk bisnis Anda."
            subtitle="Dari company profile hingga website sekolah — kami bantu wujudkan digital presence yang sesuai kebutuhan bisnis Anda."
          />
        </Reveal>

        {/* Core services grid */}
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3" role="list" aria-label="Layanan inti">
          {coreServices.map((service, i) => (
            <li key={service.title} role="listitem">
              <Reveal delay={i * 80} className="h-full">
                <CoreServiceCard {...service} />
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Included strip */}
        <Reveal delay={120}>
          <ul
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3"
            role="list"
            aria-label="Sudah termasuk di semua paket"
          >
            <li className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint" aria-hidden>
              Sudah termasuk
            </li>
            {included.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-muted">
                <Icon size={15} strokeWidth={2} className="flex-shrink-0 text-accent" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
