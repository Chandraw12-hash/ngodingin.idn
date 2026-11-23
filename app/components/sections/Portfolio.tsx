"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { useLang } from "../../../lib/i18n";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — judul & stack tetap sama di kedua bahasa
// ─────────────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "Cipakat Hub",
    tech: ["Laravel", "Tailwind CSS", "Vercel"],
    image: "/portopolio/porto1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Website SMP Negeri 3 Lubuk Pakam",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/portopolio/smpn.png",
    link: "https://smpnegeri3lubukpakam.sch.id",
  },
  {
    id: 3,
    title: "Bengkel Motor Jaya",
    tech: ["Next.js", "TypeScript"],
    image: "/portopolio/porto3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Silades",
    tech: ["Laravel", "MySQL", "Tailwind"],
    image: "/portopolio/porto6.png",
    link: "#",
  },
  {
    id: 5,
    title: "SI Pintar",
    tech: ["Laravel", "MySQL"],
    image: "/portopolio/porto4.png",
    link: "#",
  },
  {
    id: 6,
    title: "", // dari dictionary (judul kartu CTA)
    tech: ["Next.js", "Laravel", "Tailwind"],
    image: "",
    link: "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT CARD
// ─────────────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: (typeof projects)[number];
  copy: {
    category: string;
    description: string;
    title?: string;
    ctaBadge?: string;
  };
  visitLabel: string;
  visitAria: string;
}

function ProjectCard({ project, copy, visitLabel, visitAria }: ProjectCardProps) {
  const hasImage = project.image !== "";
  const title = hasImage ? project.title : (copy.title ?? project.title);

  return (
    <article
      aria-label={title}
      className="group flex h-full flex-col overflow-hidden rounded border border-line bg-surface transition-colors duration-300 hover:border-accent"
    >
      {/* Gambar — flat, tidak ada overlay & badge */}
      {hasImage ? (
        <div className="relative h-44 w-full flex-shrink-0 overflow-hidden border-b border-line bg-bg">
          <Image
            src={project.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div
          aria-hidden
          className="flex h-44 w-full flex-shrink-0 items-center justify-center border-b border-line bg-accent-soft"
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent"
          >
            {copy.ctaBadge}
          </a>
        </div>
      )}

      {/* Konten */}
      <div className="flex flex-1 flex-col p-6">
        {/* Kategori — monospace */}
        <p aria-hidden className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          {copy.category}
        </p>

        <h3 className="mt-3 text-lg text-ink">
          {hasImage ? (
            title
          ) : (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
              {title}
            </a>
          )}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-[1.75] text-muted">
          {copy.description}
        </p>

        {/* Tech — monospace kecil */}
        <p className="mt-4 font-mono text-[11.5px] text-faint">
          {project.tech.join(" · ")}
        </p>

        {/* Link external — hanya jika punya link nyata */}
        {hasImage && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${visitAria} ${title}`}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent underline underline-offset-[3px] transition-colors hover:text-accent-hover"
          >
            {visitLabel} <ExternalLink size={13} aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const { t } = useLang();
  const p = t.portfolio;

  return (
    <section id="portfolio" aria-labelledby={p.headingId} className="border-t border-line bg-bg">
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

        {/* Grid — mobile scroll horizontal, desktop grid */}
        <Reveal delay={80}>
          <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
            {projects.map((project, i) => (
              <div key={project.id} className="min-w-[272px] sm:min-w-0">
                <ProjectCard
                  project={project}
                  copy={p.projects[i]}
                  visitLabel={p.visit}
                  visitAria={p.visitAria}
                />
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
