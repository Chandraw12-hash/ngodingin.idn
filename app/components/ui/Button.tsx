import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  className?: string;
}

export default function Button({ children, variant = "primary", href, className }: ButtonProps) {
  const base = "inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer px-5 py-2.5 text-sm";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const classes = `${base} ${variants[variant]} ${className || ""}`;

  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return <button className={classes}>{children}</button>;
}