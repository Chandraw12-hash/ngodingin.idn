"use client";

/**
 * Hero.tsx — ngodingin.id
 *
 * Dua kolom: teks kiri + animasi browser mockup kanan.
 * Struktur editorial ala agency profesional:
 * kicker mono bernomor → judul serif → paragraf → link cepat → CTA → meta.
 */

import Reveal from "../ui/Reveal";
import HeroVisual from "./HeroVisual";
import { useLang } from "../../../lib/i18n";

// ⚠️ GANTI dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section role="banner" aria-label={h.sectionLabel} className="bg-bg">
      <div className="mx-auto max-w-site px-5 pb-14 pt-24 md:px-8 md:pb-20 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* ── Kiri — teks ──────────────────────────────────────────────── */}
          <div>
            {/* Kicker */}
            <Reveal>
              <p
                aria-hidden
                className="font-mono text-[12px] uppercase tracking-[0.14em] text-faint"
              >
                <span className="mr-3 text-accent">01</span>
                {h.kicker}
              </p>
            </Reveal>

            {/* Judul — serif besar, lebar terbatas */}
            <Reveal delay={60}>
              <h1 className="mt-5 max-w-[15ch] text-4xl text-ink sm:text-5xl md:text-[54px]">
                {h.titleA}{" "}
                <span className="text-accent">{h.titleAccent}</span>{" "}
                {h.titleB}
              </h1>
            </Reveal>

            {/* Deskripsi */}
            <Reveal delay={120}>
              <p className="mt-6 max-w-[58ch] text-[15.5px] leading-[1.75] text-muted">
                {h.desc}
              </p>
            </Reveal>

            {/* Link cepat */}
            <Reveal delay={170}>
              <nav
                aria-label={h.kicker}
                className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
              >
                {h.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="font-medium text-accent underline underline-offset-[3px] transition-colors hover:text-accent-hover"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </Reveal>

            {/* Tombol */}
            <Reveal delay={230}>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={h.waAria}
                  className="
                    inline-flex items-center gap-2 rounded bg-accent px-6 py-3.5
                    text-[15px] font-semibold text-accent-ink
                    transition-all duration-200 hover:-translate-y-px hover:bg-accent-hover
                  "
                >
                  {h.ctaPrimary}
                </a>
                <a
                  href="#harga"
                  aria-label={h.priceAria}
                  className="
                    inline-flex items-center gap-2 rounded border border-line px-6 py-3.5
                    text-[15px] font-semibold text-ink transition-all duration-200
                    hover:-translate-y-px hover:border-accent hover:text-accent
                  "
                >
                  {h.ctaSecondary}
                </a>
              </div>
            </Reveal>

            {/* Meta info */}
            <Reveal delay={290}>
              <dl className="mt-10 grid gap-x-8 gap-y-2 border-t border-line pt-6 text-sm sm:grid-cols-[110px_1fr]">
                {h.meta.map(({ label, value }) => (
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

          {/* ── Kanan — animasi hero ─────────────────────────────────────── */}
          <Reveal delay={140} distance={40}>
            <HeroVisual />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
