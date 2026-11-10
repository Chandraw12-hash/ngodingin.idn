"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal — animasi masuk yang konsisten untuk seluruh halaman.
 *
 * Arah: dari bawah ke atas (translateY positif → 0) dengan fade halus.
 * Animasi hanya berjalan sekali saat elemen pertama kali terlihat.
 * Otomatis nonaktif jika pengguna mengaktifkan "prefers-reduced-motion".
 */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Jeda sebelum animasi dimulai (ms). */
  delay?: number;
  /** Jarak awal dari bawah (px). */
  distance?: number;
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 28,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    // Elemen yang sudah di viewport langsung tampil pada frame berikutnya
    // supaya transisi tetap berjalan (tidak "snap").
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          requestAnimationFrame(() => setShown(true));
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, ${distance}px, 0)`,
        transition: `opacity 800ms ${EASE} ${delay}ms, transform 900ms ${EASE} ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
