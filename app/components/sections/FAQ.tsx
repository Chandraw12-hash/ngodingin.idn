"use client";

import { useState, useCallback, memo } from "react";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Berapa lama website selesai?",
    a: "Tergantung paket yang dipilih. Paket Mahasiswa selesai dalam 1 minggu, paket Standar dan Profesional dalam 2 minggu. Durasi bisa lebih cepat tergantung kelengkapan materi dari kamu.",
  },
  {
    q: "Apakah bisa cicil atau nego harga?",
    a: "Bisa. Khusus paket Mahasiswa harga sangat fleksibel dan bisa cicil. Untuk paket lain silakan konsultasi dulu via WhatsApp — kami terbuka untuk diskusi.",
  },
  {
    q: "Revisi itu maksudnya gimana?",
    a: "Revisi adalah perubahan desain atau konten setelah website selesai dibuat. Jumlah revisi sesuai paket — Mahasiswa 2x, Standar 3x, Profesional unlimited. Satu sesi revisi bisa mencakup beberapa perubahan sekaligus.",
  },
  {
    q: "Apakah saya perlu menyiapkan materi sendiri?",
    a: "Iya, kamu perlu menyiapkan teks konten, foto, dan logo bisnis kamu. Kami akan bantu susun dan desainnya. Kalau belum punya foto, kami bisa bantu cari alternatif foto dari library gratis.",
  },
  {
    q: "Domain dan hosting diurus sendiri atau bantu setup?",
    a: "Kami bantu setup semuanya dari awal sampai website live. Paket Standar dan Profesional sudah termasuk domain dan hosting 1 tahun. Paket Mahasiswa bisa ditambahkan dengan biaya terpisah.",
  },
  {
    q: "Setelah website jadi, siapa yang maintenance?",
    a: "Kami menyediakan support pasca-launch via WhatsApp. Untuk update konten kecil-kecilan biasanya bisa kami bantu gratis. Untuk perubahan besar bisa didiskusikan terpisah.",
  },
  {
    q: "Teknologi apa yang dipakai?",
    a: "Kami pakai Next.js atau Laravel tergantung kebutuhan. Semua website dioptimasi untuk kecepatan loading, SEO dasar, dan tampil sempurna di semua perangkat.",
  },
] as const;

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20mau%20tanya%20lebih%20lanjut%20soal%20pembuatan%20website.";

// ─────────────────────────────────────────────────────────────────────────────
// FAQ ITEM — baris minimal dipisah border, seperti layout editorial
// ─────────────────────────────────────────────────────────────────────────────

interface FaqItemProps {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}

const FaqItem = memo(function FaqItem({ q, a, open, onToggle, index }: FaqItemProps) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="group flex w-full items-baseline gap-4 py-5 text-left"
      >
        {/* Nomor pertanyaan */}
        <span
          aria-hidden
          className={`font-mono text-[12px] transition-colors ${
            open ? "text-accent" : "text-faint group-hover:text-accent"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`flex-1 text-[15px] font-medium leading-snug transition-colors sm:text-base ${
            open ? "text-accent" : "text-ink group-hover:text-accent"
          }`}
        >
          {q}
        </span>

        <span
          aria-hidden
          className={`font-mono text-base leading-none transition-transform duration-300 ${
            open ? "rotate-45 text-accent" : "text-faint group-hover:text-accent"
          }`}
        >
          +
        </span>
      </button>

      {/* Jawaban */}
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`
          grid transition-all duration-300 ease-in-out
          ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          <p className="max-w-[68ch] pb-5 pl-9 text-sm leading-[1.8] text-muted">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = useCallback(
    (i: number) => () => setOpenIndex((prev) => (prev === i ? null : i)),
    []
  );

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-line bg-bg"
    >
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">

        <Reveal>
          <SectionHeader
            id="faq-heading"
            num="06"
            kicker="FAQ"
            title="Pertanyaan yang sering ditanyakan."
            subtitle="Tidak menemukan jawaban yang kamu cari? Langsung tanya via WhatsApp."
          />
        </Reveal>

        {/* FAQ List — satu kolom, garis pemisah */}
        <Reveal delay={80}>
          <div className="border-t border-line" role="list" aria-label="Daftar pertanyaan">
            {faqs.map((faq, i) => (
              <div key={faq.q} role="listitem">
                <FaqItem
                  q={faq.q}
                  a={faq.a}
                  open={openIndex === i}
                  onToggle={handleToggle(i)}
                  index={i}
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={60}>
          <div className="mt-10">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tanya via WhatsApp (buka tab baru)"
              className="
                inline-flex items-center gap-2 rounded px-5 py-3 text-[15px] font-semibold
                bg-accent text-accent-ink transition-all duration-200 hover:bg-accent-hover hover:-translate-y-px
              "
            >
              Tanya via WhatsApp
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
