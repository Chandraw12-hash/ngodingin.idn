"use client";

import { Instagram, Github, Youtube, ArrowUpRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis%20pembuatan%20website.";

const links = {
  Layanan: [
    { label: "Landing Page",    href: "#layanan" },
    { label: "Company Profile", href: "#layanan" },
    { label: "Toko Online",     href: "#layanan" },
    { label: "Fullstack App",   href: "#layanan" },
  ],
  Navigasi: [
    { label: "Portfolio",  href: "#portfolio" },
    { label: "Harga",      href: "#harga" },
    { label: "Testimoni",  href: "#testimoni" },
    { label: "Tentang",    href: "#tentang" },
    { label: "FAQ",        href: "#faq" },
  ],
};

const socials = [
  { icon: Instagram, href: "https://instagram.com/ngodingin.idn",  label: "Instagram ngodingin.id" },
  { icon: Youtube,   href: "https://tiktok.com/@ngodingin.idn",    label: "TikTok ngodingin.id" },
  { icon: Github,    href: "https://github.com/ngodinginid",       label: "GitHub ngodingin.id" },
];

// ─────────────────────────────────────────────────────────────────────────────
// LOGO — pakai gambar asli, fallback ke teks jika gagal load
// ─────────────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-2.5 group select-none"
      aria-label="ngodingin.id — halaman utama"
    >
      <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-slate-200 group-hover:ring-blue-300 transition-all duration-200 flex-shrink-0">
        <img
          src="/logo/logo.jpeg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.display = "none";
            const wrap = img.parentElement!;
            wrap.style.background = "#2563eb";
            wrap.style.display = "flex";
            wrap.style.alignItems = "center";
            wrap.style.justifyContent = "center";
            const fb = document.createElement("span");
            fb.textContent = "</>";
            fb.setAttribute("aria-hidden", "true");
            fb.style.cssText =
              "color:white;font-size:10px;font-weight:800;font-family:monospace;";
            wrap.appendChild(fb);
          }}
        />
      </div>
      <span className="font-black text-[17px] tracking-[-0.04em] text-slate-900">
        ngodingin<span className="text-blue-600">.id</span>
      </span>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Footer"
      className="bg-white border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-14 border-b border-slate-100">

          {/* Brand column */}
          <div className="md:col-span-2">
            <Logo />

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mt-5">
              Solusi web development Laravel, Next.js &amp; Fullstack untuk
              UMKM dan bisnis Indonesia. Aman, rapi, dan beres tepat waktu.
            </p>

            {/* Social links */}
            <div
              className="flex items-center gap-3 mt-6"
              aria-label="Media sosial"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (buka tab baru)`}
                  className="
                    w-9 h-9 rounded-lg border border-slate-200
                    flex items-center justify-center
                    text-slate-400
                    hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50
                    transition-all duration-150
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  "
                >
                  <Icon size={16} strokeWidth={1.8} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <nav key={group} aria-label={`Navigasi ${group}`}>
              <p className="text-slate-900 font-bold text-[11px] uppercase tracking-[0.15em] mb-5">
                {group}
              </p>
              <ul className="space-y-3" role="list">
                {items.map((item) => (
                  <li key={item.label} role="listitem">
                    <a
                      href={item.href}
                      className="
                        group
                        inline-flex items-center gap-1
                        text-slate-500 hover:text-blue-600
                        text-sm font-medium
                        transition-colors duration-150
                        focus-visible:outline-none focus-visible:underline
                      "
                    >
                      {item.label}
                      <ArrowUpRight
                        size={11}
                        aria-hidden
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-[13px]">
            &copy; {year} ngodingin.id — All rights reserved.
          </p>
          <p className="text-slate-400 text-[13px]">
            Built with{" "}
            <span className="text-blue-500 font-semibold">Next.js</span>
            {" · "}
            <span className="text-blue-500 font-semibold">Laravel</span>
            {" · "}
            <span className="text-blue-500 font-semibold">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}