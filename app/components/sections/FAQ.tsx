"use client";

import { useState, useCallback, memo } from "react";
import { Plus, Minus } from "lucide-react";

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
  {
    q: "Bagaimana cara mulai order?",
    a: "Cukup chat WhatsApp kami, ceritakan kebutuhan website kamu, dan kami akan bantu tentukan paket yang paling sesuai. Konsultasi pertama gratis tanpa komitmen.",
  },
] as const;

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20tanya%20lebih%20lanjut%20soal%20pembuatan%20website.";

// ─────────────────────────────────────────────────────────────────────────────
// FAQ ITEM
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
    <div
      className={`
        border rounded-xl overflow-hidden
        transition-all duration-200
        ${open ? "border-blue-200 bg-blue-50/40" : "border-gray-100 bg-white hover:border-gray-200"}
      `}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="
          w-full flex items-center justify-between
          text-left px-6 py-5 gap-4
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset
        "
      >
        <span className={`text-sm font-semibold leading-snug ${open ? "text-blue-700" : "text-gray-900"}`}>
          {q}
        </span>
        <span
          aria-hidden
          className={`
            flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
            transition-colors duration-200
            ${open ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}
          `}
        >
          {open
            ? <Minus size={12} strokeWidth={2.5} />
            : <Plus size={12} strokeWidth={2.5} />
          }
        </span>
      </button>

      {/* Answer — CSS height transition */}
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
          <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT EXPORT
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
      className="py-24 px-4 bg-white"
    >
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-3 block"
            aria-hidden
          >
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
            Tidak menemukan jawaban yang kamu cari? Langsung tanya via WhatsApp.
          </p>
        </div>

        {/* FAQ List */}
        <ul className="flex flex-col gap-3" role="list" aria-label="Daftar pertanyaan">
          {faqs.map((faq, i) => (
            <li key={faq.q} role="listitem">
              <FaqItem
                q={faq.q}
                a={faq.a}
                open={openIndex === i}
                onToggle={handleToggle(i)}
                index={i}
              />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400 mb-4">Masih ada pertanyaan lain?</p>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tanya via WhatsApp (buka tab baru)"
            className="
              inline-flex items-center gap-2
              bg-blue-600 hover:bg-blue-700
              text-white text-sm font-bold
              px-6 py-3 rounded-xl
              transition-all duration-200 active:scale-[0.98]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
            "
          >
            Tanya via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}