"use client";

import { useLang } from "../../../lib/i18n";
import type { Lang } from "../../../lib/dict";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
];

interface LanguageToggleProps {
  /** class tambahan untuk wrap */
  className?: string;
  /** ukuran kecil untuk drawer */
  size?: "sm" | "md";
}

/**
 * Toggle bahasa ID / EN — pill group monospace.
 */
export default function LanguageToggle({
  className = "",
  size = "md",
}: LanguageToggleProps) {
  const { lang, setLang, t } = useLang();

  const pad = size === "sm" ? "px-2 py-1 text-[10px]" : "px-2.5 py-1.5 text-[11px]";

  return (
    <div
      role="group"
      aria-label={t.nav.langGroup}
      className={`inline-flex items-center rounded border border-line bg-white ${className}`}
    >
      {OPTIONS.map(({ code, label }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={code === "id" ? "Bahasa Indonesia" : "English"}
            className={`
              ${pad} rounded font-mono uppercase tracking-[0.1em] transition-colors duration-150
              ${active
                ? "bg-accent text-accent-ink"
                : "text-faint hover:text-ink"}
            `}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
