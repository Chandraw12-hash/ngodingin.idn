"use client";

import { memo } from "react";
import {
  Code2,
  ShoppingCart,
  Layout,
  Smartphone,
  Zap,
  Headphones,
  CheckCircle2,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const services: {
  icon: React.ElementType;
  title: string;
  desc: string;
  features: string[];
}[] = [
  {
    icon: Code2,
    title: "Company Profile",
    desc: "Website profesional untuk memperkenalkan bisnis Anda secara online.",
    features: ["Profil Perusahaan", "Galeri Foto", "Kontak & Maps"],
  },
  {
    icon: ShoppingCart,
    title: "Toko Online",
    desc: "Platform e-commerce lengkap untuk jualan produk digital atau fisik.",
    features: ["Katalog Produk", "Keranjang Belanja", "Integrasi WhatsApp"],
  },
  {
    icon: Layout,
    title: "Landing Page",
    desc: "Halaman khusus untuk campaign marketing dengan konversi tinggi.",
    features: ["Call to Action", "Form Lead", "Analytics"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Website yang tampil sempurna di desktop, tablet, dan smartphone.",
    features: ["Mobile First", "Touch Friendly", "Fast Loading"],
  },
  {
    icon: Zap,
    title: "Performa Cepat",
    desc: "Optimasi kecepatan loading untuk pengalaman pengguna terbaik.",
    features: ["Score 90+", "Image Optimized", "Cache System"],
  },
  {
    icon: Headphones,
    title: "Dukungan 24/7",
    desc: "Tim support siap membantu kapanpun Anda membutuhkan bantuan.",
    features: ["Fast Response", "Maintenance", "Training"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  features: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD
// ─────────────────────────────────────────────────────────────────────────────

const ServiceCard = memo(function ServiceCard({
  icon: Icon,
  title,
  desc,
  features,
}: ServiceCardProps) {
  return (
  <article
  aria-label={title}
  className="
    h-full
    flex flex-col
    group
        p-5 sm:p-6
        rounded-xl
        bg-white
        border border-gray-100
        hover:border-blue-200
        hover:shadow-lg
        hover:-translate-y-0.5
        transition-all duration-300
        focus-within:border-blue-200
      "
    >
      {/* Icon */}
      <div
        aria-hidden
        className="
          w-12 h-12 mb-4 rounded-lg
          bg-blue-50 group-hover:bg-blue-500
          flex items-center justify-center
          transition-colors duration-300
        "
      >
        <Icon
          size={22}
          aria-hidden
          className="
            text-blue-600
            group-hover:text-white
            transition-colors duration-300
          "
        />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {desc}
      </p>

      {/* Features */}
      <ul
  className="space-y-1 mt-auto"
  role="list"
  aria-label={`Fitur ${title}`}
      >
        {features.map((feature) => (
          <li
            key={feature}
            role="listitem"
            className="flex items-center gap-2 text-xs text-gray-400"
          >
            <CheckCircle2
              size={12}
              aria-hidden
              className="text-blue-500 flex-shrink-0"
            />
            {feature}
          </li>
        ))}
      </ul>
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
      className="py-16 sm:py-20 lg:py-24 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span
            aria-hidden
            className="
              text-sm
              font-semibold
              text-blue-600
              uppercase
              tracking-wider
            "
          >
            Layanan Kami
          </span>

          <h2
            id="services-heading"
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              text-gray-900
              mt-2
              mb-4
            "
          >
            Solusi Lengkap untuk Bisnis Anda
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Dari company profile hingga toko online, kami siap membantu
            mewujudkan website impian Anda
          </p>
        </div>

        {/* Services */}
       <ul
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-6
  "
  role="list"
  aria-label="Daftar layanan"
>
  {services.map((service) => (
    <li
      key={service.title}
      role="listitem"
    >
      <ServiceCard {...service} />
    </li>
  ))}
</ul>

      </div>
    </section>
  );
}