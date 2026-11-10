import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  className?: string;
}

export default function Button({ children, variant = "primary", href, className }: ButtonProps) {
  const base = "inline-flex items-center gap-2 rounded px-5 py-3 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-px";
  const variants = {
    primary: "bg-accent text-accent-ink hover:bg-accent-hover",
    outline: "border border-line text-ink hover:border-accent hover:text-accent",
  };

  const classes = `${base} ${variants[variant]} ${className || ""}`;

  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return <button className={classes}>{children}</button>;
}
