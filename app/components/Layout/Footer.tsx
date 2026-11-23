"use client";

import { Instagram, Mail } from "lucide-react";
import Reveal from "../ui/Reveal";
import { useLang } from "../../../lib/i18n";

// ⚠️ Ganti dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis%20pembuatan%20website.";

const socials = [
  { icon: Instagram, href: "https://instagram.com/ngodingin.idn", key: "socialInstagram" as const },
  { icon: Mail,      href: "mailto:chandra123wj@gmail.com",       key: "socialEmail" as const },
];

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER — minimal: border atas, grid tautan, baris bawah monospace
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const year = new Date().getFullYear();

  const groups = [f.groups.layanan, f.groups.navigasi, f.groups.kontak];

  return (
    <footer aria-label={f.label} className="border-t border-line bg-bg">
      <div className="mx-auto max-w-site px-5 md:px-8">

        {/* ── MAIN ── */}
        <Reveal>
          <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-[1.4fr_auto_auto_auto] md:gap-14">

            {/* Brand */}
            <div>
              <a href="/" className="select-none" aria-label={f.homeLabel}>
                <span className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
                  ngodingin<span className="text-accent">.id</span>
                </span>
              </a>

              <p className="mt-4 max-w-[36ch] text-sm leading-[1.75] text-muted">
                {f.desc}
              </p>

              {/* Sosial */}
              <div className="mt-5 flex items-center gap-2.5" aria-label={f.socialsLabel}>
                {socials.map(({ icon: Icon, href, key }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${f[key]} ${f.tabNote}`}
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
            {groups.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                  {group.heading}
                </p>
                <ul className="mt-4 space-y-2.5" role="list">
                  {group.items.map((item) => {
                    const isWa = item.href === "WA";
                    const href = isWa ? WA_HREF : item.href;
                    return (
                      <li key={item.label} role="listitem">
                        <a
                          href={href}
                          target={isWa ? "_blank" : undefined}
                          rel={isWa ? "noopener noreferrer" : undefined}
                          aria-label={isWa ? `${item.label} ${f.tabNote}` : undefined}
                          className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            ))}

          </div>
        </Reveal>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-line py-6 sm:flex-row">
          <p className="font-mono text-[12px] text-faint">
            &copy; {year} {f.rights}
          </p>
          <p className="font-mono text-[12px] text-faint">{f.built}</p>
        </div>

      </div>
    </footer>
  );
}
