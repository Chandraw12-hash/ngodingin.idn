import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}