import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}

export const WHATSAPP_NUMBER = "6281234567890";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function waLink(pesan?: string) {
  const text = pesan
    ? `?text=${encodeURIComponent(pesan)}`
    : "?text=Halo%2C%20saya%20ingin%20konsultasi%20pembuatan%20website.";

  return `${WHATSAPP_URL}${text}`;
}