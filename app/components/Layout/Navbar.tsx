"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const NAV = [
  { label: "Layanan",   href: "#layanan" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Harga",     href: "#harga" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Tentang",   href: "#tentang" },
];

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis";

// ─────────────────────────────────────────────────────────────────────────────
// LOGO
// ─────────────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2.5 group select-none"
      aria-label="ngodingin.id — halaman utama"
    >
      <div className="relative w-8 h-8 rounded-xl overflow-hidden ring-1 ring-slate-200 group-hover:ring-blue-300 transition-all duration-200 flex-shrink-0">
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
      <span className="font-black text-[16px] tracking-[-0.04em] text-slate-900">
        ngodingin<span className="text-blue-600">.id</span>
      </span>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [open, setOpen]   = useState(false);
  const [solid, setSolid] = useState(false);

  // Scroll → solid background
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 20);
    fn(); // cek posisi awal
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Kunci scroll body saat drawer terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Tutup drawer saat resize ke desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Tutup drawer saat klik nav link (smooth scroll)
  const handleNavClick = useCallback(
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setOpen(false);
      // Beri waktu drawer tutup dulu baru scroll
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    },
    []
  );

  return (
    <>
      {/* ── NAV BAR ──────────────────────────────────────────────────────── */}
      <header>
        <nav
          aria-label="Navigasi utama"
          className={`
            fixed inset-x-0 top-0 z-50
            transition-all duration-300
            ${solid
              ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm"
              : "bg-transparent"}
          `}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-12 flex items-center justify-between h-16">

            <Logo />

            {/* Desktop links */}
            <ul
              className="hidden md:flex items-center gap-0 list-none m-0 p-0"
              role="list"
            >
              {NAV.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="
                      block px-3.5 py-2
                      text-[13px] font-medium text-slate-500
                      hover:text-slate-900
                      rounded-lg hover:bg-slate-50
                      transition-all duration-150
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                    "
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Konsultasi gratis via WhatsApp (buka tab baru)"
                className="
                  inline-flex items-center gap-2
                  bg-blue-600 hover:bg-blue-700
                  text-white text-[13px] font-bold
                  px-4 py-2.5 rounded-xl
                  shadow-md shadow-blue-100
                  hover:shadow-lg hover:shadow-blue-200
                  transition-all duration-150
                  active:scale-[0.98]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                "
              >
                <MessageCircle size={14} strokeWidth={2.5} aria-hidden />
                Konsultasi Gratis
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="
                md:hidden p-2 rounded-xl
                text-slate-500 hover:bg-slate-100
                transition-colors
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
              "
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
            >
              {open
                ? <X size={20} strokeWidth={2} aria-hidden />
                : <Menu size={20} strokeWidth={2} aria-hidden />
              }
            </button>

          </div>
        </nav>
      </header>

      {/* ── MOBILE DRAWER ────────────────────────────────────────────────── */}

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40 md:hidden
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        style={{ background: "rgba(15,23,42,0.3)", backdropFilter: "blur(4px)" }}
      />

      {/* Drawer panel */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        className={`
          fixed top-0 right-0 z-50 h-full w-[min(72vw,288px)]
          bg-white flex flex-col
          md:hidden
          transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ boxShadow: "-16px 0 40px rgba(0,0,0,0.1)" }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100 flex-shrink-0">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            aria-label="Tutup menu"
            className="
              p-2 rounded-xl text-slate-400
              hover:bg-slate-100
              transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
            "
          >
            <X size={18} strokeWidth={2} aria-hidden />
          </button>
        </div>

        {/* Drawer links */}
        <nav
          aria-label="Menu mobile"
          className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-0.5"
        >
          {NAV.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick(href)}
              className="
                block py-3 px-4
                text-[15px] font-medium text-slate-600
                hover:text-blue-600 hover:bg-blue-50
                rounded-xl transition-all
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
              "
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Drawer footer CTA */}
        <div className="px-4 pb-8 pt-4 flex-shrink-0 border-t border-slate-100">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konsultasi gratis via WhatsApp (buka tab baru)"
            className="
              flex items-center justify-center gap-2
              w-full bg-blue-600 hover:bg-blue-700
              text-white text-[14px] font-bold
              py-4 rounded-2xl
              shadow-lg shadow-blue-100
              transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
            "
          >
            <MessageCircle size={16} strokeWidth={2.5} aria-hidden />
            Konsultasi Gratis Sekarang
          </a>
          <p className="text-center text-[11px] text-slate-400 mt-3" aria-hidden>
            Respon cepat &lt;1 jam ⚡
          </p>
        </div>
      </div>
    </>
  );
}