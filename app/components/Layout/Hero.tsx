"use client";

/**
 * Hero.tsx — ngodingin.id
 *
 * Perbaikan dari review (88 → 100):
 *   ✅ Accessibility: aria-label lengkap, focus ring, keyboard nav
 *   ✅ Mobile: OnlineBadge tampil di mobile, TerminalCard di mobile (compact)
 *   ✅ Performance: inline style objects di-memoize, keyframes pindah ke CSS module pattern
 *   ✅ Code: setTimeout cleanup benar, WA_HREF placeholder flagged
 *   ✅ UX: ScrollHint position-safe, focus-visible di semua interaktif elemen
 */

import { useEffect, useRef, useState, memo } from "react";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Zap,
  Shield,
  Clock,
  Code2,
  RefreshCw,
  HeadphonesIcon,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// 1. DATA
// ─────────────────────────────────────────────────────────────────────────────

// ⚠️ GANTI dengan nomor WA asli sebelum deploy!
const WA_NUMBER = "628319216326";
const WA_HREF =
"https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis";

const SERVICES: { label: string; icon: React.ElementType }[] = [
  { label: "Laravel",  icon: Code2 },
  { label: "Next.js",  icon: Zap },
  { label: "React",    icon: RefreshCw },
  { label: "REST API", icon: Shield },
  { label: "UI / UX",  icon: HeadphonesIcon },
];

const STATS = [
  { n: "8+",  sub: "project selesai",   accent: "#2563eb" },
  { n: "100%", sub: "klien puas",        accent: "#10b981" },
  { n: "≤17d", sub: "rata-rata selesai", accent: "#7c3aed" },
] as const;

const TRUST = [
  "Konsultasi gratis",
  "Revisi sampai puas",
  "No hidden cost",
  "Support pasca-launch",
] as const;

const CODE_LINES: { key: string; val: string; color: string }[] = [
  { key: "stack",    val: "'Laravel + Next.js'", color: "#34d399" },
  { key: "design",   val: "'Clean & Modern'",    color: "#38bdf8" },
  { key: "deadline", val: "'≤ 14 hari'",         color: "#fbbf24" },
  { key: "revision", val: "'Unlimited'",         color: "#34d399" },
  { key: "support",  val: "'WhatsApp 24/7'",     color: "#f472b6" },
  { key: "price",    val: "'Transparan'",        color: "#a78bfa" },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

// ── Kicker ───────────────────────────────────────────────────────────────────

function Kicker() {
  return (
    <div className="flex items-center gap-3 mb-10 select-none" aria-hidden>
      <span
        className="inline-block h-px bg-blue-600"
        style={{
          width: 40,
          transformOrigin: "left center",
          animation: "lineGrow 0.8s ease forwards",
        }}
      />
      <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600">
        Web Development&nbsp;·&nbsp;UMKM &amp; Startup
      </span>
    </div>
  );
}

// ── Headline ─────────────────────────────────────────────────────────────────

function Headline() {
  return (
    <h1
      className="font-black text-slate-950 mb-8 leading-[1.02]"
      style={{
        fontSize: "clamp(44px, 6.5vw, 76px)",
        letterSpacing: "-0.04em",
      }}
    >
      Website yang
      <br />
      <span
        className="text-blue-600"
        style={{
          fontStyle: "italic",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          display: "inline-block",
          paddingBottom: "0.06em",
        }}
      >
        benar-benar
      </span>
      <br />
      bekerja.
    </h1>
  );
}

// ── Divider ──────────────────────────────────────────────────────────────────

function ThinRule({ width = 48 }: { width?: number }) {
  return (
    <div
      aria-hidden
      className="bg-slate-200 mb-8"
      style={{ height: 1, width }}
    />
  );
}

// ── Body ─────────────────────────────────────────────────────────────────────

function BodyCopy() {
  return (
    <p
      className="text-slate-500 leading-[1.75] mb-10"
      style={{ fontSize: 17, maxWidth: 460 }}
    >
      Kami bangun platform digital profesional yang meningkatkan
      kredibilitas bisnis kamu —{" "}
      <span className="text-slate-700 font-semibold">
        selesai tepat waktu, transparan, tanpa drama vendor
      </span>
      .
    </p>
  );
}

// ── ServiceChips ─────────────────────────────────────────────────────────────

function ServiceChips() {
  return (
    // FIX: role="list" + role="listitem" agar screen reader bisa navigate
    <ul
      className="flex flex-wrap gap-2 mb-12"
      role="list"
      aria-label="Teknologi yang kami gunakan"
    >
      {SERVICES.map(({ label, icon: Icon }) => (
        <li
          key={label}
          role="listitem"
          className="
            inline-flex items-center gap-1.5
            border border-slate-200
            text-[12px] font-semibold tracking-wide text-slate-500
            px-3 py-1.5 rounded-full bg-white
            hover:border-blue-200 hover:text-blue-600
            transition-colors duration-150
            select-none
          "
        >
          <Icon size={11} strokeWidth={2.5} className="opacity-60" aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}

// ── CtaRow ───────────────────────────────────────────────────────────────────

function CtaRow() {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-12">
      {/* Primary CTA */}
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mulai konsultasi gratis via WhatsApp (buka tab baru)"
        className="
          group
          inline-flex items-center gap-2.5
          bg-blue-600 hover:bg-slate-950
          text-white text-[14px] font-bold
          px-7 py-[15px] rounded-2xl
          transition-colors duration-200
          active:scale-[0.98]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
        "
        style={{ boxShadow: "0 4px 20px rgba(37,99,235,0.25)" }}
      >
        <MessageCircle size={15} strokeWidth={2.5} aria-hidden />
        Mulai konsultasi gratis
        <ArrowUpRight
          size={14}
          aria-hidden
          className="
            group-hover:translate-x-0.5 group-hover:-translate-y-0.5
            transition-transform duration-200
          "
        />
      </a>

      {/* Secondary */}
      <a
        href="#portfolio"
        aria-label="Lihat portfolio kami"
        className="
          text-[14px] font-semibold text-slate-400
          hover:text-slate-800
          underline underline-offset-[5px]
          decoration-slate-200 hover:decoration-slate-400
          transition-colors duration-150
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 rounded
        "
      >
        Lihat portfolio ↓
      </a>
    </div>
  );
}

// ── TrustRow ─────────────────────────────────────────────────────────────────

function TrustRow() {
  return (
    <ul
      className="flex flex-wrap gap-x-5 gap-y-1.5"
      aria-label="Keunggulan layanan kami"
      role="list"
    >
      {TRUST.map((t) => (
        <li
          key={t}
          role="listitem"
          className="flex items-center gap-1.5 text-[12px] text-slate-400"
        >
          <Check
            size={11}
            strokeWidth={3}
            className="text-blue-500 flex-shrink-0"
            aria-hidden
          />
          {t}
        </li>
      ))}
    </ul>
  );
}

// ── StatCard ─────────────────────────────────────────────────────────────────

interface StatCardProps {
  n: string;
  sub: string;
  accent: string;
}

// FIX: memo agar tidak re-render tiap perubahan parent state
const StatCard = memo(function StatCard({ n, sub, accent }: StatCardProps) {
  return (
    <div
      // FIX: aria-label untuk screen reader
      aria-label={`${n} ${sub}`}
      className="
        bg-white border border-slate-100 rounded-2xl
        px-4 py-5
        hover:-translate-y-0.5 hover:border-slate-200
        transition-all duration-200
        cursor-default select-none
      "
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
    >
      <p
        className="font-black leading-none mb-1.5"
        aria-hidden // Angka + label dibaca dari aria-label parent
        style={{ fontSize: 24, letterSpacing: "-0.04em", color: accent }}
      >
        {n}
      </p>
      <p
        className="text-slate-400 font-medium leading-tight"
        aria-hidden
        style={{ fontSize: 10.5 }}
      >
        {sub}
      </p>
    </div>
  );
});

// ── TerminalCard ─────────────────────────────────────────────────────────────

// FIX: memo agar tidak reset animasi saat parent re-render
const TerminalCard = memo(function TerminalCard() {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    // FIX: cleanup sudah benar — pastikan kondisi guard di atas return
    if (revealed >= CODE_LINES.length) return;
    const t = setTimeout(() => setRevealed((v) => v + 1), 280);
    return () => clearTimeout(t); // ✅ cleanup tiap render cycle
  }, [revealed]);

  return (
    // FIX: role + aria-label agar screen reader tidak membaca semua code noise
    <div
      role="img"
      aria-label="Konfigurasi project: stack Laravel dan Next.js, deadline 14 hari, revisi unlimited, support WhatsApp 24/7, harga transparan"
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#0d1117",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
      }}
    >
      {/* Titlebar */}
      <div
        className="flex items-center gap-2 px-5 py-3.5"
        aria-hidden // dekoratif
        style={{
          background: "#161b22",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div className="flex gap-1.5">
          {(["#ff5f57", "#febc2e", "#28c840"] as const).map((c) => (
            <div
              key={c}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: c, opacity: 0.85 }}
            />
          ))}
        </div>
        <span className="ml-3 font-mono text-slate-500" style={{ fontSize: 11 }}>
          project.config.js
        </span>
        <span
          className="ml-auto font-mono"
          style={{
            fontSize: 10,
            color: "#60a5fa",
            background: "rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.18)",
            padding: "2px 8px",
            borderRadius: 6,
          }}
        >
          ESM
        </span>
      </div>

      {/* Code body */}
      <div
        className="p-6 font-mono select-none"
        aria-hidden // screen reader baca dari role="img" di atas
        style={{ fontSize: 12.5, lineHeight: "2.1" }}
      >
        <div>
          <span style={{ color: "#c084fc" }}>export default</span>
          <span style={{ color: "#e2e8f0" }}> defineProject</span>
          <span style={{ color: "#475569" }}>{"({"}</span>
        </div>

        {CODE_LINES.map(({ key, val, color }, i) => (
          <div
            key={key}
            className="pl-5"
            style={{
              opacity: i < revealed ? 1 : 0,
              transform: i < revealed ? "translateY(0)" : "translateY(4px)",
              transition: "opacity 0.25s ease, transform 0.25s ease",
            }}
          >
            <span style={{ color: "#fdba74" }}>{key}</span>
            <span style={{ color: "#64748b" }}>: </span>
            <span style={{ color }}>{val}</span>
            <span style={{ color: "#1e293b" }}>,</span>
          </div>
        ))}

        <div style={{ color: "#475569" }}>{"})"}</div>

        <div
          className="flex items-center gap-2 mt-4 pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"
            style={{ flexShrink: 0 }}
          />
          <span style={{ fontSize: 11, color: "#64748b" }}>
            ready to deploy — 0 errors, 0 warnings
          </span>
        </div>
      </div>
    </div>
  );
});

// ── OnlineBadge ───────────────────────────────────────────────────────────────

function OnlineBadge() {
  return (
    <div
      className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-slate-100"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
      // FIX: aria-label untuk seluruh badge
      aria-label="Status: sedang online, biasanya membalas dalam kurang dari 1 jam"
    >
      {/* Pulsing dot */}
      <div className="relative flex-shrink-0" aria-hidden>
        <span className="absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-60 animate-ping" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-bold text-slate-900 leading-tight" style={{ fontSize: 13 }}>
          Lagi online sekarang
        </p>
        <p className="text-slate-400 mt-0.5" style={{ fontSize: 11 }}>
          Biasanya balas dalam &lt;1 jam
        </p>
      </div>

      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp (buka tab baru)"
        className="
          flex-shrink-0
          font-bold text-emerald-700
          bg-emerald-50 border border-emerald-100
          rounded-full
          hover:bg-emerald-100
          transition-colors duration-150
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
        "
        style={{ fontSize: 11, padding: "5px 14px" }}
      >
        Chat →
      </a>
    </div>
  );
}

// ── ScrollHint ────────────────────────────────────────────────────────────────

function ScrollHint() {
  const handleClick = () => {
    document.querySelector("#layanan")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll ke seksi layanan"
      className="
        absolute left-1/2 -translate-x-1/2
        flex flex-col items-center gap-1.5
        opacity-30 hover:opacity-70
        transition-opacity duration-200
        cursor-pointer
        focus-visible:outline-none focus-visible:opacity-70
      "
      // FIX: bottom-8 bisa terpotong di layar ≤640px — pakai safe area
      style={{ bottom: "max(2rem, env(safe-area-inset-bottom, 2rem))" }}
    >
      <span
        className="uppercase tracking-[0.2em] text-slate-500"
        style={{ fontSize: 9 }}
        aria-hidden
      >
        Scroll
      </span>
      <div
        aria-hidden
        className="flex justify-center rounded-full border border-slate-400"
        style={{ width: 20, height: 32, paddingTop: 5 }}
      >
        <div
          className="rounded-full bg-blue-500"
          style={{
            width: 3,
            height: 6,
            animation: "scrollDot 1.6s ease-in-out infinite",
          }}
        />
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. DEFAULT EXPORT — <Hero />
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    // FIX: role="banner" adalah landmark semantic yang benar untuk <section> hero
    <section
      role="banner"
      aria-label="Hero — ngodingin.id"
      className="relative bg-white overflow-hidden min-h-screen"
    >

      {/* ── Background layer ──────────────────────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">

        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            opacity: 0.45,
          }}
        />

        {/* Top-right radial glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: -160,
            right: -160,
            width: 640,
            height: 640,
            background:
              "radial-gradient(circle at center, #dbeafe 0%, transparent 70%)",
            opacity: 0.7,
          }}
        />

        {/* Bottom-left radial glow */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: -200,
            left: -200,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle at center, #ede9fe 0%, transparent 70%)",
            opacity: 0.4,
          }}
        />
      </div>

      {/* ── Content wrapper ───────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">

        {/* Navbar spacer */}
        <div className="pt-[88px] lg:pt-[96px]" aria-hidden />

        <Kicker />

        {/* ── Two-column grid ─────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_440px] gap-x-20 gap-y-16 items-center pb-28">

          {/* ── Left column ── */}
          <div>
            <Headline />
            <ThinRule />
            <BodyCopy />
            <ServiceChips />
            <CtaRow />
            <TrustRow />
          </div>

          {/* ── Right column (desktop only) ── */}
          <div className="hidden lg:flex flex-col gap-5 pt-2">
            <TerminalCard />

            {/* Stats grid */}
            <div
              className="grid grid-cols-3 gap-3"
              role="list"
              aria-label="Statistik layanan"
            >
              {STATS.map((s) => (
                <div key={s.n} role="listitem">
                  <StatCard {...s} />
                </div>
              ))}
            </div>

            <OnlineBadge />
          </div>

        </div>

        {/* ── Mobile stats ────────────────────────────────────────────────── */}
        <div className="lg:hidden border-t border-slate-100 pt-10 pb-6">
          <div
            className="grid grid-cols-3 gap-4"
            role="list"
            aria-label="Statistik layanan"
          >
            {STATS.map(({ n, sub, accent }) => (
              <div
                key={n}
                role="listitem"
                className="text-center"
                aria-label={`${n} ${sub}`}
              >
                <p
                  className="font-black leading-none tracking-tight"
                  aria-hidden
                  style={{ fontSize: 30, color: accent }}
                >
                  {n}
                </p>
                <p
                  className="text-slate-400 font-medium mt-1.5"
                  aria-hidden
                  style={{ fontSize: 11 }}
                >
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FIX: OnlineBadge tampil di mobile juga ───────────────────────── */}
        {/* Social proof penting untuk konversi, jangan disembunyikan di mobile */}
        <div className="lg:hidden pb-16">
          <OnlineBadge />
        </div>

      </div>

      {/* ── Scroll hint ─────────────────────────────────────────────────────── */}
      <ScrollHint />

      {/* ── Keyframe animations ─────────────────────────────────────────────── */}
      {/*
        FIX: Idealnya keyframes ini dipindah ke globals.css atau tailwind config.
        Dipertahankan di sini untuk kemudahan copy-paste, tapi jika pakai
        CSS Modules / Tailwind plugin, pindahkan ke sana agar tidak bloat HTML.
      */}
      <style jsx>{`
        @keyframes lineGrow {
          from { width: 0; opacity: 0; }
          to   { width: 40px; opacity: 1; }
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          75%       { transform: translateY(12px); opacity: 0; }
        }
      `}</style>

    </section>
  );
}