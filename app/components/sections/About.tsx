"use client";

import { memo } from "react";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis";

const values = [
  { title: "Terpercaya",  desc: "Dipercaya klien UMKM & instansi di Indonesia" },
  { title: "Tepat Waktu", desc: "Pengerjaan sesuai deadline yang disepakati" },
  { title: "Fullstack",   desc: "End-to-end, dari desain sampai deploy" },
  { title: "Berkualitas", desc: "Kode bersih dan terstruktur dengan baik" },
] as const;

const stats = [
  { n: "8+",   label: "Project selesai" },
  { n: "100%", label: "Klien puas" },
  { n: "≤14",  label: "Hari pengerjaan" },
  { n: "24/7", label: "Dukungan" },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// VALUE ROW — baris minta, seperti daftar "Stack" di portfolio
// ─────────────────────────────────────────────────────────────────────────────

const ValueRow = memo(function ValueRow({
  title,
  desc,
}: (typeof values)[number]) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[160px_1fr] sm:gap-4">
      <h4 className="text-[15px] font-semibold text-ink">{title}</h4>
      <p className="text-sm leading-[1.75] text-muted">{desc}</p>
    </div>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section
      id="tentang"
      aria-labelledby="about-heading"
      className="border-t border-line bg-bg"
    >
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">

        <Reveal>
          <SectionHeader
            id="about-heading"
            num="07"
            kicker="Tentang"
            title="Partner digital untuk UMKM."
            subtitle="Kami percaya setiap bisnis berhak punya website profesional — tanpa mahal, tanpa ribet."
          />
        </Reveal>

        {/* Two-column — narasi + daftar nilai */}
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:gap-14">

          {/* Kiri — cerita */}
          <Reveal delay={60}>
            <div className="max-w-[68ch]">
              <p className="text-[15px] leading-[1.85] text-muted">
                <strong className="font-semibold text-ink">ngodingin.id</strong> hadir
                sebagai solusi pembuatan website untuk UMKM Indonesia yang ingin naik
                kelas. Setiap project ditangani secara fullstack — dari desain
                antarmuka, pengembangan sistem, hingga deploy ke server — dengan
                komunikasi langsung tanpa perantara.
              </p>
              <p className="mt-4 text-[15px] leading-[1.85] text-muted">
                Dari company profile, landing page, hingga website resmi sekolah dan
                instansi — kami siap membantu bisnis Anda tampil lebih profesional
                dan menjangkau lebih banyak pelanggan.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href="#harga"
                  className="
                    inline-flex items-center rounded bg-accent px-5 py-3 text-[15px] font-semibold text-accent-ink
                    transition-all duration-200 hover:bg-accent-hover hover:-translate-y-px
                  "
                >
                  Lihat Paket
                </a>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Konsultasi gratis via WhatsApp (buka tab baru)"
                  className="
                    inline-flex items-center rounded border border-line px-5 py-3
                    text-[15px] font-semibold text-ink transition-all duration-200
                    hover:border-accent hover:text-accent hover:-translate-y-px
                  "
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </Reveal>

          {/* Kanan — nilai, seperti daftar Stack di portfolio */}
          <Reveal delay={120}>
            <div className="border-t border-line">
              <p aria-hidden className="py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                Kenapa kami
              </p>
              {values.map((item) => (
                <ValueRow key={item.title} {...item} />
              ))}
            </div>
          </Reveal>

        </div>

        {/* Stats — grid angka serif */}
        <Reveal delay={80}>
          <ul
            className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10 md:grid-cols-4"
            role="list"
            aria-label="Statistik kami"
          >
            {stats.map(({ n, label }) => (
              <li key={label} role="listitem" aria-label={`${n} ${label}`}>
                <p className="text-3xl text-accent md:text-4xl" aria-hidden>
                  {n}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-faint" aria-hidden>
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
