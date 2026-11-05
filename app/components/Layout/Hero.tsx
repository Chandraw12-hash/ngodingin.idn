"use client";

/**
 * Hero.tsx — ngodingin.id
 *
 * Hero dengan showcase perangkat (public/images/hp.png).
 * Fokus: bersih, lapang, dan berkelas — tanpa elemen visual yang berisik.
 */

import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Zap,
} from "lucide-react";
import Reveal from "../ui/Reveal";

// ─────────────────────────────────────────────────────────────────────────────
// 1. DATA
// ─────────────────────────────────────────────────────────────────────────────

// ⚠️ GANTI dengan nomor WA asli sebelum deploy!
const WA_HREF =
  "https://wa.me/6282319216326?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis";

const SERVICES = ["Laravel", "Next.js", "React", "REST API", "UI / UX"];

const STATS = [
  { n: "8+", sub: "project selesai" },
  { n: "100%", sub: "klien puas" },
  { n: "≤17d", sub: "rata-rata selesai" },
] as const;

const TRUST = [
  "Konsultasi gratis",
  "Revisi sampai puas",
  "No hidden cost",
  "Support pasca-launch",
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// 2. SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

// ── Kicker ───────────────────────────────────────────────────────────────────

function Kicker() {
  return (
    <div className="flex items-center gap-3 mb-9 select-none" aria-hidden>
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
      Kami bangun platform digital profesional yang meningkatkan kredibilitas
      bisnis kamu —{" "}
      <span className="text-slate-700 font-semibold">
        selesai tepat waktu, transparan, tanpa drama vendor
      </span>
      .
    </p>
  );
}

// ── TechLine ─────────────────────────────────────────────────────────────────

function TechLine() {
  return (
    <ul
      className="mb-11 flex flex-wrap items-center gap-x-2 gap-y-1.5 select-none sm:gap-x-2.5"
      role="list"
      aria-label="Teknologi yang kami gunakan"
    >
      {SERVICES.map((label, i) => (
        <li key={label} role="listitem" className="flex items-center gap-2 sm:gap-2.5">
          {i > 0 && (
            <span
              aria-hidden
              className="h-1 w-1 rounded-full bg-slate-300"
            />
          )}
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[11px] sm:tracking-[0.16em]">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ── CtaRow ───────────────────────────────────────────────────────────────────

function CtaRow() {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-11">
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
        style={{ boxShadow: "0 16px 32px -18px rgba(37,99,235,0.75)" }}
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

// ── FloatingNote ─────────────────────────────────────────────────────────────

interface FloatingNoteProps {
  className?: string;
  tone: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
}

function FloatingNote({
  className = "",
  tone,
  icon,
  title,
  sub,
}: FloatingNoteProps) {
  return (
    <div
      className={`
        hero-note
        absolute z-20 flex items-center gap-2.5 sm:gap-3
        rounded-2xl border border-white/80 bg-white/90
        px-3 py-2.5 sm:px-3.5 sm:py-3 backdrop-blur-md
        ${className}
      `}
      style={{ boxShadow: "0 24px 48px -28px rgba(15,23,42,0.55)" }}
    >
      <span
        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl sm:h-8 sm:w-8 ${tone}`}
        aria-hidden
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[12.5px] font-bold leading-tight text-slate-900">
          {title}
        </span>
        <span className="block text-[11px] leading-tight text-slate-400 mt-0.5">
          {sub}
        </span>
      </span>
    </div>
  );
}

// ── PhoneShowcase ────────────────────────────────────────────────────────────

function PhoneShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[400px]">
      <div className="relative aspect-[4/5] w-full">
        {/* Panel dasar */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[40px] border border-white/70"
          style={{
            background:
              "linear-gradient(155deg,#fbfdff 0%,#eff5ff 48%,#e7eefc 100%)",
            boxShadow:
              "0 40px 80px -44px rgba(15,23,42,0.35), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        />

        {/* Aksen titik halus */}
        <div
          aria-hidden
          className="absolute inset-0 overflow-hidden rounded-[40px]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            opacity: 0.18,
          }}
        />

        {/* Glow di belakang perangkat */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(191,219,254,0.9) 0%, rgba(191,219,254,0) 70%)",
          }}
        />

        {/* Perangkat */}
        <Image
          src="/images/hp.png"
          alt="Tampilan website ngodingin.id pada perangkat mobile"
          width={454}
          height={550}
          priority
          sizes="(max-width: 1024px) 60vw, 320px"
          className="absolute left-1/2 top-1/2 z-10 h-auto w-[82%] max-w-[320px] -translate-x-1/2 -translate-y-1/2 select-none"
          style={{ filter: "drop-shadow(0 28px 36px rgba(15,23,42,0.22))" }}
        />

        {/* Catatan mengambang — kiri atas */}
        <FloatingNote
          className="left-1 top-8 sm:-left-7 sm:top-10"
          tone="bg-blue-50 text-blue-600"
          icon={<Zap size={15} strokeWidth={2.5} />}
          title="Loading cepat"
          sub="Skor performa 98"
        />

        {/* Catatan mengambang — kanan bawah */}
        <FloatingNote
          className="bottom-10 right-1 sm:-right-6 sm:bottom-12"
          tone="bg-emerald-50 text-emerald-600"
          icon={<Check size={15} strokeWidth={3} />}
          title="100% klien puas"
          sub="8+ project selesai"
        />
      </div>
    </div>
  );
}

// ── StatStrip ────────────────────────────────────────────────────────────────

function StatStrip() {
  return (
    <ul
      className="flex flex-wrap items-center gap-x-8 gap-y-3"
      role="list"
      aria-label="Statistik layanan"
    >
      {STATS.map(({ n, sub }) => (
        <li
          key={n}
          role="listitem"
          className="flex items-baseline gap-2"
          aria-label={`${n} ${sub}`}
        >
          <span
            className="font-black tracking-tight leading-none text-slate-900"
            aria-hidden
            style={{ fontSize: 24, letterSpacing: "-0.04em" }}
          >
            {n}
          </span>
          <span
            className="text-[12px] font-medium text-slate-400"
            aria-hidden
          >
            {sub}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ── OnlineBadge ──────────────────────────────────────────────────────────────

function OnlineBadge() {
  return (
    <div
      className="
        inline-flex items-center gap-3
        rounded-full border border-slate-200/80 bg-white
        pl-4 pr-1.5 py-1.5
      "
      style={{ boxShadow: "0 8px 24px -18px rgba(15,23,42,0.4)" }}
      aria-label="Status: sedang online, biasanya membalas dalam kurang dari 1 jam"
    >
      <span className="relative flex h-2 w-2 flex-shrink-0" aria-hidden>
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>

      <p className="text-[12px] font-semibold leading-tight text-slate-700">
        Lagi online{" "}
        <span className="font-normal text-slate-400">· balas &lt;1 jam</span>
      </p>

      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp (buka tab baru)"
        className="
          flex-shrink-0 rounded-full
          bg-emerald-50 px-3.5 py-1.5
          text-[11px] font-bold text-emerald-700
          transition-colors duration-150 hover:bg-emerald-100
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
        "
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
      style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom, 1.5rem))" }}
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
    <section
      role="banner"
      aria-label="Hero — ngodingin.id"
      className="relative overflow-hidden bg-white min-h-screen"
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
            opacity: 0.35,
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)",
          }}
        />

        {/* Top-right radial glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: -180,
            right: -160,
            width: 640,
            height: 640,
            background:
              "radial-gradient(circle at center, #dbeafe 0%, transparent 70%)",
            opacity: 0.55,
          }}
        />

        {/* Bottom-left radial glow */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: -220,
            left: -220,
            width: 520,
            height: 520,
            background:
              "radial-gradient(circle at center, #ede9fe 0%, transparent 70%)",
            opacity: 0.35,
          }}
        />
      </div>

      {/* ── Content wrapper ───────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10 lg:px-12">
        {/* Navbar spacer */}
        <div className="pt-[88px] lg:pt-[96px]" aria-hidden />

        <Reveal distance={20}>
          <Kicker />
        </Reveal>

        {/* ── Two-column grid ─────────────────────────────────────────────── */}
        <div className="grid items-center gap-x-16 gap-y-14 pb-16 lg:grid-cols-[minmax(0,1fr)_400px] lg:pb-20">
          {/* ── Left column ── */}
          <div>
            <Reveal delay={80} distance={44}>
              <Headline />
            </Reveal>

            <Reveal delay={180} distance={36}>
              <ThinRule />
              <BodyCopy />
            </Reveal>

            <Reveal delay={260} distance={32}>
              <TechLine />
            </Reveal>

            <Reveal delay={330} distance={32}>
              <CtaRow />
            </Reveal>

            <Reveal delay={400} distance={24}>
              <TrustRow />
            </Reveal>
          </div>

          {/* ── Right column — showcase perangkat ── */}
          <Reveal delay={220} distance={64} className="w-full">
            <PhoneShowcase />
          </Reveal>
        </div>

        {/* ── Bottom bar: statistik + status ──────────────────────────────── */}
        <Reveal delay={120} distance={20}>
          <div className="flex flex-col items-start gap-6 border-t border-slate-200/70 py-7 sm:flex-row sm:items-center sm:justify-between">
            <StatStrip />
            <OnlineBadge />
          </div>
        </Reveal>
      </div>

      {/* ── Scroll hint ───────────────────────────────────────────────────── */}
      <ScrollHint />

      {/* ── Keyframe animations ───────────────────────────────────────────── */}
      <style jsx>{`
        @keyframes lineGrow {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 40px;
            opacity: 1;
          }
        }
        @keyframes scrollDot {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          75% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
        @keyframes noteIn {
          from {
            opacity: 0;
            transform: translate3d(18px, 10px, 0) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        :global(.hero-note) {
          animation: noteIn 700ms cubic-bezier(0.22, 1, 0.36, 1) 950ms both;
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes scrollDot {
            0%,
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          :global(.hero-note) {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
