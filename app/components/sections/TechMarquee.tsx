"use client";

/**
 * TechMarquee — strip teknologi bergulir (infinite marquee).
 * Murni CSS, tanpa JavaScript.
 */

import { useLang } from "../../../lib/i18n";

const TECH = [
  "Laravel",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Inertia.js",
  "MySQL",
  "PostgreSQL",
  "REST API",
  "Flutter",
  "Vercel",
  "Git",
] as const;

function Items({ hidden }: { hidden?: boolean }) {
  const { t } = useLang();

  return (
    <ul
      className="flex list-none items-center gap-8 pr-8 md:gap-10 md:pr-10"
      role={hidden ? undefined : "list"}
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : t.marquee.label}
    >
      {TECH.map((t) => (
        <li
          key={t}
          className="flex list-none items-center gap-8 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.14em] text-faint md:gap-10"
        >
          {t}
          <span aria-hidden className="h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
        </li>
      ))}
    </ul>
  );
}

export default function TechMarquee() {
  const { t } = useLang();

  return (
    <section
      aria-label={t.marquee.label}
      className="overflow-hidden border-t border-line bg-bg"
    >
      <div className="marquee-track flex w-max py-4">
        <Items />
        <Items hidden />
      </div>
    </section>
  );
}
