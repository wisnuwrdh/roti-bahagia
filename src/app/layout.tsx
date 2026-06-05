import type { Metadata } from "next";
import { Noto_Serif, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Roti Bahagia - Roti Segar Bakery Lokal",
  description:
    "Roti segar bakery lokal: pesan lewat WhatsApp, siap hari ini. Roti tawar, croissant, donat, roti gandum, dan kue custom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${notoSerif.variable} ${beVietnamPro.variable}`}
    >
      <body className="min-h-full flex flex-col relative">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
