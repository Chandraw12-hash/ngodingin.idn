"use client";

import { ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Cipakat Hub",
    category: "Sistem Informasi Desa Terintegrasi",
    description: "Cipakat Hub - Sistem Informasi Desa Digital. Fitur surat online, booking fasilitas, pengaduan + peta, WA notifikasi, dan API endpoint.",
    tech: ["Laravel", "Tailwind CSS", "Vercel"],
    image: "/portopolio/porto1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Sistem Informasi Sekolah (SIS)",
    category: "Dashboard Admin",
    description: "Dashboard Admin untuk cek data siswa dan guru serta form pendfatran",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    image: "/portopolio/porto2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Bengkel Motor Jaya",
    category: "Landing Page",
    description: "Landing page modern untuk bengkel dengan booking service online dan testimoni pelanggan.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    image: "/portopolio/porto3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Silades",
    category: "Web Application",
    description: "Aplikasi berbasis web untuk digitalisasi layanan administrasi desa, mempermudah masyarakat mengajukan surat secara online dan membantu perangkat desa dalam pengelolaan data pelayanan.",
    tech: ["Laravel", "MySQL", "Tailwind"],
    image: "/portopolio/porto6.png",
    link: "#",
  },
  {
  id: 5,
    title: "SI Pintar",
    category: "Monitoring Kesehatan",
    description: "plikasi berbasis Laravel untuk pengelolaan data balita, ibu hamil, pemeriksaan kesehatan, dan monitoring status gizi secara terpusat.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    image: "/portopolio/porto4.png",
    link: "#",
  },
  {
    id: 6,
    title: "Porto Saya Sendiri",
    category: "Portfolio",
    description: "Website portfolio pribadi untuk menampilkan karya dan pengalaman profesional.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/portopolio/porto saya sendiri.png",
    link: "#",
  },
];

const WA_LINK = "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis";

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hasil Kerja Nyata</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Beberapa project yang sudah kami bantu wujudkan untuk UMKM Indonesia.</p>
        </div>

        {/* Grid Portfolio (Mobile scroll horizontal, desktop tetap grid) */}
<div className="flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col min-w-[280px] sm:min-w-0"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-52 bg-gray-100 overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${hoveredId === project.id ? "opacity-100" : "opacity-0"}`}>
                  <a href={project.link} className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <Eye size={20} />
                  </a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 text-gray-800 text-xs font-semibold rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-md"
          >
            💬 Konsultasi Gratis
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}