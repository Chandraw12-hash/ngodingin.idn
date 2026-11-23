/**
 * HeroVisual — animasi hero buatan sendiri, tanpa gambar eksternal.
 *
 * Browser mockup yang "membangun dirinya sendiri":
 * mini-nav → headline → paragraf → tombol → kartu fitur menyusul masuk
 * bergiliran, progress deploy berjalan 0→100%, status berganti jadi
 * "Live ✓", lalu dua badge mengambang diagonal.
 */

"use client";

import { Zap, Check } from "lucide-react";
import { useLang } from "../../../lib/i18n";

export default function HeroVisual() {
  const { t } = useLang();
  const v = t.visual;

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
      {/* Caption ala kartu figur */}
      <div className="mb-3 flex items-baseline justify-between gap-4" aria-hidden>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          {v.caption}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          {v.brand}
        </p>
      </div>

      <div className="relative">
        {/* Backdrop titik halus di belakang kartu */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-6 hidden rounded-3xl sm:block"
          style={{
            backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            opacity: 0.06,
            maskImage:
              "radial-gradient(70% 70% at 50% 50%, #000 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(70% 70% at 50% 50%, #000 0%, transparent 100%)",
          }}
        />

        {/* ── Kartu browser ──────────────────────────────────────────────── */}
        <figure
          role="img"
          aria-label={v.alt}
          className="relative m-0 overflow-hidden rounded border border-line bg-white"
          style={{ boxShadow: "0 30px 60px -38px rgba(15,23,42,0.45)" }}
        >
          {/* Chrome bar */}
          <figcaption className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
            </span>
            <span
              aria-hidden
              className="flex flex-1 items-center justify-center gap-1.5 rounded bg-white px-3 py-1 font-mono text-[11px] text-faint"
              style={{ border: "1px solid var(--line)" }}
            >
              <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden>
                <path
                  d="M2 4.5V3a2.5 2.5 0 015 0v1.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <rect x="0.75" y="4.5" width="7.5" height="5.75" rx="1.25" fill="currentColor" />
              </svg>
              ngodingin.id
            </span>
            <span className="w-[34px]" aria-hidden />
          </figcaption>

          {/* Preview halaman */}
          <div className="relative p-5 sm:p-6">
            {/* Mini nav */}
            <div className="anim-in flex items-center gap-3" style={{ animationDelay: "60ms" }}>
              <span aria-hidden className="h-5 w-5 flex-shrink-0 rounded bg-accent" />
              <span aria-hidden className="h-2 flex-1 rounded bg-line" />
              <span
                aria-hidden
                className="anim-in rounded bg-accent px-3 py-1 text-[9px] font-semibold text-accent-ink"
                style={{ animationDelay: "140ms" }}
              >
                {v.miniNav}
              </span>
            </div>

            {/* Headline — bar menyusul masuk */}
            <div className="mt-6 space-y-2.5" aria-hidden>
              <div
                className="anim-bar h-5 w-[78%] rounded bg-ink"
                style={{ animationDelay: "260ms" }}
              />
              <div
                className="anim-bar h-5 w-[52%] rounded bg-accent"
                style={{ animationDelay: "420ms" }}
              />
            </div>

            {/* Paragraf */}
            <div className="mt-5 space-y-2" aria-hidden>
              <div className="anim-in h-2.5 w-[88%] rounded bg-line" style={{ animationDelay: "620ms" }} />
              <div className="anim-in h-2.5 w-[70%] rounded bg-line" style={{ animationDelay: "720ms" }} />
            </div>

            {/* Tombol */}
            <div className="mt-5 flex gap-2.5" aria-hidden>
              <span
                className="anim-in rounded bg-accent px-4 py-2 text-[10px] font-semibold text-accent-ink"
                style={{ animationDelay: "860ms" }}
              >
                {v.miniPrimary}
              </span>
              <span
                className="anim-in rounded border border-line px-4 py-2 text-[10px] font-semibold text-ink"
                style={{ animationDelay: "960ms" }}
              >
                {v.miniSecondary}
              </span>
            </div>

            {/* Kartu fitur */}
            <div className="mt-6 grid grid-cols-3 gap-2.5" aria-hidden>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="anim-in rounded border border-line bg-surface p-2.5"
                  style={{ animationDelay: `${1020 + i * 120}ms` }}
                >
                  <span className="block h-1.5 w-6 rounded bg-accent" />
                  <span className="mt-2 block h-1.5 w-full rounded bg-line" />
                  <span className="mt-1.5 block h-1.5 w-2/3 rounded bg-line" />
                </div>
              ))}
            </div>

            {/* Status deploy — progress + teks berganti */}
            <div
              className="anim-in mt-6 flex items-center gap-3 border-t border-line pt-4"
              style={{ animationDelay: "1400ms" }}
            >
              <span className="flex-shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                {v.deploy}
              </span>
              <span
                aria-hidden
                className="h-1.5 flex-1 overflow-hidden rounded-full bg-line"
              >
                <span className="anim-progress block h-full rounded-full bg-accent" />
              </span>
              <span
                aria-hidden
                className="relative h-4 w-[92px] flex-shrink-0 font-mono text-[10px] uppercase tracking-[0.1em]"
              >
                <span className="status-a absolute inset-0 text-faint">{v.building}</span>
                <span className="status-b absolute inset-0 font-semibold text-accent">
                  {v.live}
                </span>
              </span>
            </div>
          </div>
        </figure>

        {/* ── Badge mengambang ───────────────────────────────────────────── */}
        <div
          aria-hidden
          className="float-a absolute -right-3 top-[30%] hidden items-center gap-2 rounded border border-line bg-white px-3.5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink shadow-lg sm:flex"
        >
          <Zap size={13} strokeWidth={2.5} className="text-accent" />
          {v.badge1}
        </div>

        <div
          aria-hidden
          className="float-b absolute -left-3 bottom-[16%] hidden items-center gap-2 rounded border border-line bg-white px-3.5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink shadow-lg sm:flex"
        >
          <Check size={13} strokeWidth={3} className="text-accent" />
          {v.badge2}
        </div>
      </div>
    </div>
  );
}
