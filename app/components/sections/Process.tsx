"use client";

import { memo } from "react";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { useLang } from "../../../lib/i18n";

const ICONS = [MessageSquare, PenTool, Code2, Rocket] as const;

// ─────────────────────────────────────────────────────────────────────────────
// STEP — editorial: border atas + nomor mono, bukan kartu berbayang
// ─────────────────────────────────────────────────────────────────────────────

interface StepProps {
  num: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  timing: string;
}

const ProcessStep = memo(function ProcessStep({
  num,
  icon: Icon,
  title,
  desc,
  timing,
}: StepProps) {
  return (
    <li role="listitem" className="group h-full">
      <div className="flex h-full flex-col border-t border-line pt-5 transition-colors duration-300 group-hover:border-accent">
        <div className="flex items-center justify-between">
          <span aria-hidden className="font-mono text-[12px] text-accent">
            {num}
          </span>
          <Icon
            size={18}
            strokeWidth={1.8}
            aria-hidden
            className="text-faint transition-colors duration-300 group-hover:text-accent"
          />
        </div>

        <h3 className="mt-5 text-lg text-ink">{title}</h3>

        <p className="mt-2 flex-1 text-sm leading-[1.75] text-muted">{desc}</p>

        <p aria-hidden className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
          {timing}
        </p>
      </div>
    </li>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Process() {
  const { t } = useLang();
  const p = t.process;

  return (
    <section
      id="proses"
      aria-labelledby={p.headingId}
      className="border-t border-line bg-bg"
    >
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">

        <Reveal>
          <SectionHeader
            id={p.headingId}
            num={p.num}
            kicker={p.kicker}
            title={p.title}
            subtitle={p.subtitle}
          />
        </Reveal>

        <Reveal delay={80}>
          <ul
            className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
            role="list"
            aria-label={p.listLabel}
          >
            {p.steps.map((step, i) => (
              <ProcessStep
                key={step.title}
                num={`0${i + 1}`}
                icon={ICONS[i]}
                title={step.title}
                desc={step.desc}
                timing={step.timing}
              />
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  );
}
