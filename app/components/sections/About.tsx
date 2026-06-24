"use client";

import { memo } from "react";
import { Shield, Clock, Heart, Code2, Award, Zap } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis";

const values = [
  { icon: Shield, title: "Terpercaya",   desc: "Dipercaya 8+ klien UMKM & instansi di Indonesia" },
  { icon: Clock,  title: "Tepat Waktu",  desc: "Pengerjaan sesuai deadline yang disepakati" },
  { icon: Heart,  title: "Ramah",        desc: "Konsultasi tanpa tekanan, kami siap membantu" },
  { icon: Code2,  title: "Fullstack",    desc: "Ditangani end-to-end, dari desain sampai deploy" },
  { icon: Award,  title: "Berkualitas",  desc: "Kode bersih dan terstruktur dengan baik" },
  { icon: Zap,    title: "Cepat",        desc: "Website dioptimalkan untuk performa terbaik" },
] as const;

const stats = [
  { n: "8+",   label: "Project selesai" },
  { n: "100%", label: "Klien puas" },
  { n: "≤14",  label: "Hari pengerjaan" },
  { n: "24/7", label: "Dukungan" },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

const ValueCard = memo(function ValueCard({
  icon: Icon,
  title,
  desc,
}: (typeof values)[number]) {
  return (
    <div
      aria-label={title}
      className="
        flex flex-col items-center text-center
        p-4 bg-white rounded-xl
        border border-slate-100
        shadow-sm hover:shadow-md hover:-translate-y-0.5
        transition-all duration-200
      "
    >
      <div
        aria-hidden
        className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3 flex-shrink-0"
      >
        <Icon size={18} className="text-blue-600" aria-hidden />
      </div>
      <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
    </div>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section
      id="tentang"
      aria-labelledby="about-heading"
      className="py-24 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-3 block"
            aria-hidden
          >
            Tentang Kami
          </span>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Ngodingin.id — Partner Digital untuk UMKM
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
            Kami percaya setiap bisnis berhak punya website profesional tanpa ribet.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Left — story */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              <strong className="text-slate-900 font-semibold">Ngodingin.id</strong> hadir
              sebagai solusi pembuatan website untuk UMKM Indonesia yang ingin naik kelas.
              Kami paham bahwa memiliki website profesional itu penting, tapi sering terasa
              mahal dan rumit.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Setiap project ditangani secara <strong className="text-slate-900 font-semibold">fullstack</strong> —
              dari desain antarmuka, pengembangan sistem, hingga deploy ke server — dengan
              komunikasi langsung tanpa perantara.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Dari company profile, toko online, hingga website resmi sekolah dan instansi —
              kami siap membantu bisnis Anda tampil lebih profesional dan menjangkau lebih
              banyak pelanggan.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#layanan"
                className="
                  inline-flex items-center
                  bg-blue-600 hover:bg-blue-700
                  text-white text-sm font-bold
                  px-5 py-3 rounded-xl
                  transition-colors duration-200 active:scale-[0.98]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                "
              >
                Lihat Layanan
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Konsultasi gratis via WhatsApp (buka tab baru)"
                className="
                  inline-flex items-center
                  border border-slate-200 hover:border-blue-300
                  text-slate-700 hover:text-blue-600
                  text-sm font-bold
                  px-5 py-3 rounded-xl
                  transition-colors duration-200 active:scale-[0.98]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                "
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>

          {/* Right — values grid */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-base font-bold text-gray-900 mb-5 text-center">
              Kenapa Pilih Kami?
            </h3>
            <ul
              className="grid grid-cols-2 gap-3"
              role="list"
              aria-label="Keunggulan kami"
            >
              {values.map((item) => (
                <li key={item.title} role="listitem">
                  <ValueCard {...item} />
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Stats bar */}
        <div className="border-t border-slate-100 pt-10">
          <ul
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            role="list"
            aria-label="Statistik kami"
          >
            {stats.map(({ n, label }) => (
              <li
                key={label}
                role="listitem"
                aria-label={`${n} ${label}`}
              >
                <p
                  className="text-3xl font-black text-blue-600 tracking-tight leading-none mb-2"
                  aria-hidden
                >
                  {n}
                </p>
                <p className="text-gray-500 text-sm" aria-hidden>
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}