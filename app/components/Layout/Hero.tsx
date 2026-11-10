/**
 * Hero.tsx — ngodingin.id
 *
 * Hero bergaya porto-chandraw.vercel.app:
 * kicker monospace, judul serif besar, satu paragraf,
 * status strip, dua tombol (primary + ghost), lalu meta info.
 */

import Reveal from "../ui/Reveal";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

// ⚠️ GANTI dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis";

const META = [
  { label: "Harga",   value: "Mulai Rp 500rb" },
  { label: "Durasi",  value: "≤ 14 hari" },
  { label: "Fokus",   value: "Company Profile · Landing Page · Fullstack App" },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT EXPORT — <Hero />
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section role="banner" aria-label="Hero — ngodingin.id" className="bg-bg">
      <div className="mx-auto max-w-site px-5 pb-12 pt-24 md:px-8 md:pb-16 md:pt-28">
        {/* Kicker */}
        <Reveal>
          <p aria-hidden className="font-mono text-[12px] uppercase tracking-[0.14em] text-faint">
            <span className="mr-3 text-accent">01</span>
            Jasa Pembuatan Website&nbsp;·&nbsp;UMKM Indonesia
          </p>
        </Reveal>

        {/* Judul — serif besar, lebar terbatas seperti portfolio */}
        <Reveal delay={60}>
          <h1 className="mt-5 max-w-[16ch] text-4xl text-ink sm:text-5xl md:text-[56px]">
            Website yang <span className="text-accent">benar-benar</span> bekerja untuk bisnis kamu.
          </h1>
        </Reveal>

        {/* Deskripsi */}
        <Reveal delay={120}>
          <p className="mt-6 max-w-[62ch] text-[15.5px] leading-[1.75] text-muted">
            ngodingin.id membantu UMKM, sekolah, dan startup Indonesia tampil
            lebih terpercaya lewat website yang cepat, rapi, dan mudah
            dikelola — dari company profile sampai fullstack custom.
          </p>
        </Reveal>

        {/* Status strip */}
        <Reveal delay={180}>
          <nav aria-label="Tautan cepat" className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href="#layanan"
              className="font-medium text-accent underline underline-offset-[3px] transition-colors hover:text-accent-hover"
            >
              Lihat layanan
            </a>
            <a
              href="#portfolio"
              className="font-medium text-accent underline underline-offset-[3px] transition-colors hover:text-accent-hover"
            >
              Lihat portfolio
            </a>
            <a
              href="#harga"
              className="font-medium text-accent underline underline-offset-[3px] transition-colors hover:text-accent-hover"
            >
              Lihat harga
            </a>
          </nav>
        </Reveal>

        {/* Tombol */}
        <Reveal delay={240}>
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi gratis via WhatsApp (buka tab baru)"
              className="
                inline-flex items-center gap-2 rounded px-5 py-3 text-[15px] font-semibold
                bg-accent text-accent-ink
                transition-all duration-200 hover:bg-accent-hover hover:-translate-y-px
              "
            >
              Konsultasi Gratis
            </a>
            <a
              href="#harga"
              className="
                inline-flex items-center gap-2 rounded border border-line px-5 py-3
                text-[15px] font-semibold text-ink transition-all duration-200
                hover:border-accent hover:text-accent hover:-translate-y-px
              "
            >
              Paket &amp; Harga
            </a>
          </div>
        </Reveal>

        {/* Meta info — seperti baris "Pendidikan / IPK / Fokus" di portfolio */}
        <Reveal delay={300}>
          <dl className="mt-10 grid gap-x-8 gap-y-2 border-t border-line pt-6 text-sm sm:grid-cols-[110px_1fr]">
            {META.map(({ label, value }) => (
              <div key={label} className="flex items-baseline gap-3 sm:contents">
                <dt className="w-[86px] flex-shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                  {label}
                </dt>
                <dd className="text-muted">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
