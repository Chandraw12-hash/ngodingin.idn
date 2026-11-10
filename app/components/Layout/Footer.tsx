"use client";

import { Instagram, Mail } from "lucide-react";
import Reveal from "../ui/Reveal";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis%20pembuatan%20website.";

const links = {
  Layanan: [
    { label: "Company Profile", href: "#layanan" },
    { label: "Website Sekolah", href: "#layanan" },
    { label: "Landing Page",    href: "#layanan" },
  ],
  Navigasi: [
    { label: "Portfolio",  href: "#portfolio" },
    { label: "Harga",      href: "#harga" },
    { label: "Testimoni",  href: "#testimoni" },
    { label: "FAQ",        href: "#faq" },
    { label: "Tentang",    href: "#tentang" },
  ],
  Kontak: [
    { label: "Konsultasi WhatsApp", href: WA_HREF },
  ],
};

const socials = [
  { icon: Instagram, href: "https://instagram.com/ngodingin.idn", label: "Instagram ngodingin.id" },
  { icon: Mail,      href: "mailto:chandra123wj@gmail.com",       label: "Email ngodingin.id" },
];

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER — minimal: border atas, grid tautan, baris bawah monospace
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer aria-label="Footer" className="border-t border-line bg-bg">
      <div className="mx-auto max-w-site px-5 md:px-8">

        {/* ── MAIN ── */}
        <Reveal>
          <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-[1.4fr_auto_auto_auto] md:gap-14">

            {/* Brand */}
            <div>
              <a href="/" className="select-none" aria-label="ngodingin.id — halaman utama">
                <span className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
                  ngodingin<span className="text-accent">.id</span>
                </span>
              </a>

              <p className="mt-4 max-w-[36ch] text-sm leading-[1.75] text-muted">
                Jasa pembuatan website profesional untuk UMKM dan bisnis
                Indonesia — aman, rapi, dan beres tepat waktu.
              </p>

              {/* Sosial */}
              <div className="mt-5 flex items-center gap-2.5" aria-label="Media sosial">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (buka tab baru)`}
                    className="
                      inline-flex h-9 w-9 items-center justify-center rounded border border-line
                      text-faint transition-colors duration-200
                      hover:border-accent hover:text-accent
                    "
                  >
                    <Icon size={16} strokeWidth={1.8} aria-hidden />
                  </a>
                ))}
              </div>
            </div>

            {/* Kolom tautan */}
            {Object.entries(links).map(([group, items]) => (
              <nav key={group} aria-label={`Navigasi ${group}`}>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                  {group}
                </p>
                <ul className="mt-4 space-y-2.5" role="list">
                  {items.map((item) => (
                    <li key={item.label} role="listitem">
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

          </div>
        </Reveal>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-line py-6 sm:flex-row">
          <p className="font-mono text-[12px] text-faint">
            &copy; {year} ngodingin.id — All rights reserved.
          </p>
          <p className="font-mono text-[12px] text-faint">
            Next.js · Laravel · Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
