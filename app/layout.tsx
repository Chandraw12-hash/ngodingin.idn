import type { Metadata } from "next";
import { Poppins, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Body — Poppins (sama dengan portfolio)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

// Heading — Fraunces, serif editorial (sama dengan portfolio)
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

// Label kickers — JetBrains Mono
const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ngodingin.id — Solusi Website untuk UMKM Indonesia",
  description:
    "Jasa pembuatan website profesional untuk UMKM Indonesia. Tampil lebih terpercaya, raih lebih banyak pelanggan. Konsultasi gratis via WhatsApp.",
  keywords: ["jasa website", "website umkm", "buat website murah", "web developer indonesia", "ngodingin"],
  openGraph: {
    title: "ngodingin.id — Solusi Website untuk UMKM Indonesia",
    description: "Website profesional buat bisnis kamu. Mulai dari Rp 500rb.",
    url: "https://ngodingin.id",
    siteName: "ngodingin.id",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${fraunces.variable} ${monoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
