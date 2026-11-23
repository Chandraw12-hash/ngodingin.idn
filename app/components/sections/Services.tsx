"use client";

import { memo } from "react";
import {
  Building2,
  School,
  Rocket,
  MonitorSmartphone,
  Gauge,
  Headphones,
} from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { useLang } from "../../../lib/i18n";

const ICONS = [Building2, School, Rocket] as const;
const INCLUDED_ICONS = [MonitorSmartphone, Gauge, Headphones] as const;

// ─────────────────────────────────────────────────────────────────────────────
// CORE SERVICE CARD — flat, border tipis, hover aksen
// ─────────────────────────────────────────────────────────────────────────────

interface CoreCardProps {
  number: string;
  icon: React.ElementType;
  title: string;
  desc: string;
}

const CoreServiceCard = memo(function CoreServiceCard({
  number,
  icon: Icon,
  title,
  desc,
}: CoreCardProps) {
  return (
    <article
      aria-label={title}
      className="group flex h-full flex-col rounded border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent md:p-8"
    >
      {/* Nomor monospace */}
      <span
        aria-hidden
        className="font-mono text-[12px] text-faint transition-colors duration-300 group-hover:text-accent"
      >
        {number}
      </span>

      {/* Icon */}
      <div aria-hidden className="mt-6 text-ink">
        <Icon size={22} strokeWidth={1.8} className="transition-colors duration-300 group-hover:text-accent" />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg text-ink">{title}</h3>

      {/* Desc */}
      <p className="mt-2 text-sm leading-[1.75] text-muted">{desc}</p>
    </article>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section
      id="layanan"
      aria-labelledby={s.headingId}
      className="border-t border-line bg-bg"
    >
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">

        <Reveal>
          <SectionHeader
            id={s.headingId}
            num={s.num}
            kicker={s.kicker}
            title={s.title}
            subtitle={s.subtitle}
          />
        </Reveal>

        {/* Core services grid */}
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3" role="list" aria-label={s.listLabel}>
          {s.items.map((item, i) => (
            <li key={item.title} role="listitem">
              <Reveal delay={i * 80} className="h-full">
                <CoreServiceCard
                  number={`0${i + 1}`}
                  icon={ICONS[i]}
                  title={item.title}
                  desc={item.desc}
                />
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Included strip */}
        <Reveal delay={120}>
          <ul
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3"
            role="list"
            aria-label={s.includedAria}
          >
            <li className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint" aria-hidden>
              {s.includedLabel}
            </li>
            {s.included.map((label, i) => (
              <li key={label} className="flex items-center gap-2 text-sm text-muted">
                {(() => {
                  const Icon = INCLUDED_ICONS[i];
                  return <Icon size={15} strokeWidth={2} className="flex-shrink-0 text-accent" aria-hidden />;
                })()}
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
