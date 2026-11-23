"use client";

import { memo } from "react";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { useLang } from "../../../lib/i18n";

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIAL CARD — flat, border tipis, kutipan serif
// ─────────────────────────────────────────────────────────────────────────────

const TestimonialCard = memo(function TestimonialCard({
  name,
  role,
  text,
  ratingLabel,
}: {
  name: string;
  role: string;
  text: string;
  ratingLabel: string;
}) {
  return (
    <figure
      aria-label={`${name} — ${role}`}
      className="flex h-full flex-col rounded border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent md:p-8"
    >
      {/* Kicker — penilaian */}
      <figcaption aria-hidden className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        <span className="mr-3 text-accent">★★★★★</span>
        5/5
      </figcaption>

      {/* Testimoni — serif, gaya editorial */}
      <blockquote className="mt-5 flex-1 text-[15px] leading-[1.85] text-ink">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Divider + autor */}
      <div aria-hidden className="mt-6 border-t border-line pt-5">
        <p className="text-sm font-semibold text-ink">{name}</p>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
          {role}
        </p>
      </div>

      <span className="sr-only">{ratingLabel}: 5/5</span>
    </figure>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const { t } = useLang();
  const c = t.testimonials;

  return (
    <section
      id="testimoni"
      aria-labelledby={c.headingId}
      className="border-t border-line bg-bg"
    >
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">

        <Reveal>
          <SectionHeader
            id={c.headingId}
            num={c.num}
            kicker={c.kicker}
            title={c.title}
            subtitle={c.subtitle}
          />
        </Reveal>

        {/* Grid */}
        <Reveal delay={80}>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3" role="list" aria-label={c.listLabel}>
            {c.items.map((item) => (
              <li key={item.name} role="listitem">
                <TestimonialCard {...item} ratingLabel={c.ratingAria} />
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
