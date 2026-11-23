"use client";

import { memo } from "react";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { useLang } from "../../../lib/i18n";

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis";

const STATS = [
  { n: "8+" },
  { n: "100%" },
  { n: "≤14" },
  { n: "24/7" },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// VALUE ROW — baris minta, seperti daftar "Stack" di portfolio
// ─────────────────────────────────────────────────────────────────────────────

const ValueRow = memo(function ValueRow({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
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
  const { t } = useLang();
  const a = t.about;

  return (
    <section
      id="tentang"
      aria-labelledby={a.headingId}
      className="border-t border-line bg-bg"
    >
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">

        <Reveal>
          <SectionHeader
            id={a.headingId}
            num={a.num}
            kicker={a.kicker}
            title={a.title}
            subtitle={a.subtitle}
          />
        </Reveal>

        {/* Two-column — narasi + daftar nilai */}
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:gap-14">

          {/* Kiri — cerita */}
          <Reveal delay={60}>
            <div className="max-w-[68ch]">
              <p className="text-[15px] leading-[1.85] text-muted">
                {a.p1}
              </p>
              <p className="mt-4 text-[15px] leading-[1.85] text-muted">{a.p2}</p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href="#harga"
                  className="
                    inline-flex items-center rounded bg-accent px-5 py-3 text-[15px] font-semibold text-accent-ink
                    transition-all duration-200 hover:-translate-y-px hover:bg-accent-hover
                  "
                >
                  {a.cta1}
                </a>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={a.cta2Aria}
                  className="
                    inline-flex items-center rounded border border-line px-5 py-3
                    text-[15px] font-semibold text-ink transition-all duration-200
                    hover:-translate-y-px hover:border-accent hover:text-accent
                  "
                >
                  {a.cta2}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Kanan — nilai, seperti daftar Stack di portfolio */}
          <Reveal delay={120}>
            <div className="border-t border-line">
              <p aria-hidden className="py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                {a.whyLabel}
              </p>
              {a.values.map((item) => (
                <ValueRow key={item.title} {...item} />
              ))}
            </div>
          </Reveal>

        </div>

        {/* Stats — angka serif */}
        <Reveal delay={80}>
          <ul
            className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10 md:grid-cols-4"
            role="list"
            aria-label={a.statsAria}
          >
            {STATS.map(({ n }, i) => (
              <li key={n} role="listitem" aria-label={`${n} ${a.stats[i].label}`}>
                <p className="text-3xl text-accent md:text-4xl" aria-hidden>
                  {n}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-faint" aria-hidden>
                  {a.stats[i].label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
