import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 ${className || ""}`}>
      {children}
    </span>
  );
}