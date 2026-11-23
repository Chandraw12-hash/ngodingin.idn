"use client";

import Reveal from "../ui/Reveal";
import { useLang } from "../../../lib/i18n";

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis";

// ─────────────────────────────────────────────────────────────────────────────
// CTA BAND — pita aksen penuh sebelum footer, standar agency
// ─────────────────────────────────────────────────────────────────────────────

export default function CtaBand() {
  const { t } = useLang();
  const c = t.cta;

  return (
    <section
      id="kontak"
      aria-labelledby={c.headingId}
      className="bg-accent"
    >
      <div className="mx-auto max-w-site px-5 py-16 text-center md:px-8 md:py-24">
        <Reveal>
          <p aria-hidden className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent-ink-80">
            <span className="mr-3">{c.num}</span>
            {c.kicker}
          </p>

          <h2
            id={c.headingId}
            className="mx-auto mt-5 max-w-[20ch] text-3xl text-white md:text-5xl"
          >
            {c.title}
          </h2>

          <p className="mx-auto mt-5 max-w-[52ch] text-[15.5px] leading-[1.75] text-accent-ink-90">
            {c.desc}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.waAria}
              className="
                inline-flex items-center gap-2 rounded bg-white px-6 py-3.5
                text-[15px] font-semibold text-ink
                transition-all duration-200 hover:-translate-y-px hover:bg-[var(--surface)]
              "
            >
              {c.primary}
            </a>
            <a
              href="#harga"
              className="
                inline-flex items-center gap-2 rounded border border-accent-ink-25 px-6 py-3.5
                text-[15px] font-semibold text-white
                transition-all duration-200 hover:-translate-y-px hover:border-white
              "
            >
              {c.secondary}
            </a>
          </div>

          <p aria-hidden className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink-80">
            {c.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
