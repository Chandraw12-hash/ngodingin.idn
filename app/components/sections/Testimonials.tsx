"use client";

import { memo } from "react";
import { Star, Quote } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: "Ahmad Rizki",
    role: "Owner Warung Kopi Kenangan",
    text: "Website yang dibuat sangat profesional dan cepat. Setelah pakai website ini, omzet saya naik 40% dalam 3 bulan.",
    rating: 5,
  },
  {
    name: "Siti Nurjanah",
    role: "Founder Fashion Store",
    text: "Pelayanannya ramah dan hasilnya sesuai ekspektasi. Toko online saya sekarang lebih terpercaya di mata pelanggan.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Property Agent",
    text: "Proses cepat, kurang dari 14 hari website sudah jadi. Desainnya modern dan tampil sempurna di semua perangkat.",
    rating: 5,
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIAL CARD
// ─────────────────────────────────────────────────────────────────────────────

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const TestimonialCard = memo(function TestimonialCard({
  name,
  role,
  text,
  rating,
}: TestimonialCardProps) {
  return (
    <article
      aria-label={`Testimoni dari ${name}`}
      className="
        flex flex-col
        bg-white border border-slate-100 rounded-2xl p-6
        shadow-sm hover:shadow-md hover:-translate-y-0.5
        transition-all duration-200
      "
    >
      {/* Quote icon */}
      <Quote
        size={24}
        aria-hidden
        className="text-blue-100 mb-4 flex-shrink-0"
        strokeWidth={2}
      />

      {/* Stars */}
      <div
        className="flex gap-0.5 mb-4"
        aria-label={`Rating ${rating} dari 5 bintang`}
      >
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            aria-hidden
            className="fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
        {text}
      </p>

      {/* Divider */}
      <div className="h-px bg-slate-100 mb-5" aria-hidden />

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar initials */}
        <div
          aria-hidden
          className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"
        >
          <span className="text-white text-xs font-bold">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-sm leading-tight">{name}</p>
          <p className="text-xs text-slate-400 mt-0.5">{role}</p>
        </div>
      </div>
    </article>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      aria-labelledby="testimonials-heading"
      className="py-24 px-4 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-3 block"
            aria-hidden
          >
            Testimoni
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
            Dipercaya oleh 30+ klien UMKM di seluruh Indonesia.
          </p>
        </div>

        {/* Grid — 1 kolom mobile, 3 kolom desktop */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Daftar testimoni klien"
        >
          {testimonials.map((item) => (
            <li key={item.name} role="listitem">
              <TestimonialCard {...item} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}