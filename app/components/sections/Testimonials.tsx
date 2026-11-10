"use client";

import { memo } from "react";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: "Tim Manajemen Sekolah",
    role: "SMP Negeri 3 Lubuk Pakam",
    text: "Hasilnya rapi dan profesional banget. Prosesnya juga cepet, komunikasi lancar dari awal sampai selesai.",
  },
  {
    name: "Dewi Sartika",
    role: "Pemilik Toko Fashion Lokal",
    text: "Awalnya ragu mau bikin website, tapi setelah konsultasi langsung paham. Website-nya sesuai ekspektasi, desain clean dan enak dilihat.",
  },
  {
    name: "Fajar Nugroho",
    role: "Mahasiswa & Pelaku UMKM",
    text: "Dikerjain beneran dari nol, bukan template asal pakai. Codenya juga rapi jadi gampang kalau mau dikembangin lagi ke depannya.",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIAL CARD — flat, border tipis, tanpa bintang besar
// ─────────────────────────────────────────────────────────────────────────────

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
}

const TestimonialCard = memo(function TestimonialCard({
  name,
  role,
  text,
}: TestimonialCardProps) {
  return (
    <figure
      aria-label={`Testimoni dari ${name}`}
      className="flex h-full flex-col rounded border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent md:p-8"
    >
      {/* Kicker — penilaian */}
      <figcaption aria-hidden className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        <span className="mr-3 text-accent">★★★★★</span>
        5/5
      </figcaption>

      {/* Testimoni — serif italic, gaya editorial */}
      <blockquote className="mt-5 flex-1 text-[15px] leading-[1.85] text-ink">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Divider */}
      <div aria-hidden className="mt-6 border-t border-line pt-5">
        <p className="text-sm font-semibold text-ink">{name}</p>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
          {role}
        </p>
      </div>
    </figure>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      aria-labelledby="testimonials-heading"
      className="border-t border-line bg-bg"
    >
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">

        <Reveal>
          <SectionHeader
            id="testimonials-heading"
            num="05"
            kicker="Testimoni"
            title="Apa kata mereka."
            subtitle="Dipercaya oleh klien UMKM, sekolah, dan pelaku bisnis lokal Indonesia."
          />
        </Reveal>

        {/* Grid */}
        <Reveal delay={80}>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3" role="list" aria-label="Daftar testimoni klien">
            {testimonials.map((item) => (
              <li key={item.name} role="listitem">
                <TestimonialCard {...item} />
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
