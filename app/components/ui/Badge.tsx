import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border border-accent-soft bg-accent-soft px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-accent ${className || ""}`}
    >
      {children}
    </span>
  );
}
