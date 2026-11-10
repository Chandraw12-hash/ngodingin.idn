"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "Cipakat Hub",
    category: "Sistem Informasi Desa",
    description: "Sistem informasi desa digital — surat online, booking fasilitas, pengaduan + peta, dan notifikasi WhatsApp.",
    tech: ["Laravel", "Tailwind CSS", "Vercel"],
    image: "/portopolio/porto1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Website SMP Negeri 3 Lubuk Pakam",
    category: "Education",
    description: "Website resmi sekolah dengan manajemen berita, galeri, data guru & siswa, dan dashboard admin.",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/portopolio/smpn.png",
    link: "https://smpnegeri3lubukpakam.sch.id",
  },
  {
    id: 3,
    title: "Bengkel Motor Jaya",
    category: "Landing Page",
    description: "Landing page modern untuk bengkel dengan booking service online dan testimoni pelanggan.",
    tech: ["Next.js", "TypeScript"],
    image: "/portopolio/porto3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Silades",
    category: "Web Application",
    description: "Aplikasi web untuk digitalisasi layanan administrasi desa — pengajuan surat online dan pengelolaan data pelayanan.",
    tech: ["Laravel", "MySQL", "Tailwind"],
    image: "/portopolio/porto6.png",
    link: "#",
  },
  {
    id: 5,
    title: "SI Pintar",
    category: "Monitoring Kesehatan",
    description: "Aplikasi Laravel untuk pengelolaan data balita, ibu hamil, dan monitoring status gizi secara terpusat.",
    tech: ["Laravel", "MySQL"],
    image: "/portopolio/porto4.png",
    link: "#",
  },
  {
    id: 6,
    title: "Website bersama kami",
    category: "Project berikutnya",
    description: "Slot ini menunggu project Anda. Ceritakan kebutuhan website bisnis kamu, dan kami wujudkan.",
    tech: ["Next.js", "Laravel", "Tailwind"],
    image: "", // tanpa gambar → tampil sebagai kartu CTA
    link: "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT CARD
// ─────────────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: (typeof projects)[number];
}

function ProjectCard({ project }: ProjectCardProps) {
  const hasImage = project.image !== "";

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded border border-line bg-surface transition-colors duration-300 hover:border-accent"
    >
      {/* Gambar — flat, tidak ada overlay & badge */}
      {hasImage ? (
        <div className="relative h-44 w-full flex-shrink-0 overflow-hidden bg-bg border-b border-line">
          <Image
            src={project.image}
            alt={project.title}
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
            Konsultasi sekarang ↗
          </a>
        </div>
      )}

      {/* Konten */}
      <div className="flex flex-1 flex-col p-6">
        {/* Kategori — monospace */}
        <p aria-hidden className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          {project.category}
        </p>

        <h3 className="mt-3 text-lg text-ink">
          {hasImage ? (
            project.title
          ) : (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              {project.title}
            </a>
          )}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-[1.75] text-muted">
          {project.description}
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
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent underline underline-offset-[3px] transition-colors hover:text-accent-hover"
          >
            Kunjungi website <ExternalLink size={13} aria-hidden />
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
  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="border-t border-line bg-bg">
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">

        <Reveal>
          <SectionHeader
            id="portfolio-heading"
            num="03"
            kicker="Portfolio"
            title="Proyek pilihan."
            subtitle="Beberapa project yang sudah kami kerjakan untuk UMKM, sekolah, dan instansi di Indonesia."
          />
        </Reveal>

        {/* Grid — mobile scroll horizontal, desktop grid */}
        <Reveal delay={80}>
          <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="min-w-[272px] sm:min-w-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
