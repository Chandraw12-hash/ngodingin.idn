"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "../../../lib/i18n";
import LanguageToggle from "../ui/LanguageToggle";

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis";

// ─────────────────────────────────────────────────────────────────────────────
// LOGO
// ─────────────────────────────────────────────────────────────────────────────

function Logo({ label }: { label: string }) {
  return (
    <a
      href="/"
      className="flex select-none items-center gap-2.5"
      aria-label={label}
    >
      <div className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded">
        <img
          src="/logo/logo.jpeg"
          alt=""
          aria-hidden
          className="h-full w-full object-contain"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.display = "none";
            const wrap = img.parentElement!;
            const fb = document.createElement("span");
            fb.textContent = "NG";
            fb.setAttribute("aria-hidden", "true");
            fb.style.cssText = "color:var(--accent);font-size:12px;font-weight:700;font-family:var(--font-display),Georgia,serif;";
            wrap.appendChild(fb);
          }}
        />
      </div>
      <span className="text-[16px] font-semibold tracking-[-0.02em] text-ink">
        ngodingin<span className="text-accent">.id</span>
      </span>
    </a>
  );
}

function LogoText() {
  return (
    <span className="text-[16px] font-semibold tracking-[-0.02em] text-ink">
      ngodingin<span className="text-accent">.id</span>
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  // Scroll → solid background + border bawah tipis
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 20);
    fn();
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

  // Klik nav link → close lalu smooth scroll
  const handleNavClick = useCallback(
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setOpen(false);
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
          aria-label={t.nav.navLabel}
          className={`
            fixed inset-x-0 top-0 z-50
            transition-all duration-300
            ${solid || open
              ? "border-b border-line bg-surface backdrop-blur-md"
              : "border-b border-transparent bg-transparent"}
          `}
        >
          <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-5 md:px-8">
            <Logo label={t.nav.homeLabel} />

            {/* Desktop links */}
            <ul className="hidden list-none items-center gap-7 md:flex" role="list">
              {t.nav.links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop: bahasa + CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <LanguageToggle />
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.waAria}
                className="
                  inline-flex items-center gap-2 rounded px-4 py-2 text-[13.5px] font-semibold
                  bg-accent text-accent-ink
                  transition-all duration-200 hover:bg-accent-hover hover:-translate-y-px
                "
              >
                {t.nav.cta}
              </a>
            </div>

            {/* Mobile: bahasa + hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageToggle size="sm" />
              <button
                className="rounded p-2 text-ink transition-colors hover:bg-accent-soft"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={open}
                aria-controls="mobile-drawer"
              >
                {open
                  ? <X size={20} strokeWidth={2} aria-hidden />
                  : <Menu size={20} strokeWidth={2} aria-hidden />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── MOBILE DRAWER ────────────────────────────────────────────────── */}

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40 bg-ink-20 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* Drawer panel */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.drawerLabel}
        className={`
          fixed right-0 top-0 z-50 flex h-full w-[min(72vw,300px)] flex-col bg-surface md:hidden
          transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ boxShadow: "-16px 0 40px rgba(22,21,15,0.12)" }}
      >
        {/* Drawer header */}
        <div className="flex h-16 flex-shrink-0 items-center justify-between border-b border-line px-5">
          <LogoText />
          <button
            onClick={() => setOpen(false)}
            aria-label={t.nav.closeMenu}
            className="rounded p-2 text-faint transition-colors hover:bg-accent-soft hover:text-ink"
          >
            <X size={18} strokeWidth={2} aria-hidden />
          </button>
        </div>

        {/* Drawer links */}
        <nav aria-label={t.nav.drawerNavLabel} className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4">
          {t.nav.links.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick(href)}
              className="
                flex items-baseline gap-3 rounded px-4 py-3 text-[15px] font-medium text-ink
                transition-colors hover:bg-accent-soft hover:text-accent
              "
            >
              <span aria-hidden className="font-mono text-[11px] text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              {label}
            </a>
          ))}
        </nav>

        {/* Drawer footer: toggle bahasa + CTA */}
        <div className="flex-shrink-0 border-t border-line px-4 pb-8 pt-4">
          <div className="mb-3 flex items-center justify-between">
            <LanguageToggle size="sm" />
            <span aria-hidden className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              {t.nav.drawerNote}
            </span>
          </div>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.hero.waAria}
            className="
              flex w-full items-center justify-center gap-2 rounded bg-accent py-3 text-sm font-semibold text-accent-ink
              transition-colors hover:bg-accent-hover
            "
          >
            {t.nav.drawerCta}
          </a>
        </div>
      </div>
    </>
  );
}
