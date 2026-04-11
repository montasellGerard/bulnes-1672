import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bulnes 1672 — Barbería",
  description:
    "Barbería de autor en Palermo, CABA. Reservá tu turno por WhatsApp.",
  openGraph: {
    title: "Bulnes 1672 — Barbería",
    description: "Barbería de autor en Palermo, CABA.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-body bg-bg-base text-text-cream antialiased`}
      >
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
