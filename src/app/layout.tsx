import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import {
  ADDRESS_CITY,
  ADDRESS_LINE,
  BOOKSY_URL,
  PHONE_TEL,
} from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const TITLE = "Bulnes1672 · Barbería clásica en Granollers";
const DESCRIPTION =
  "Barbería tradicional en Granollers. Corte, afeitado con navaja y arreglo de barba. Servicio exclusivo para caballeros, solo con cita previa.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bulnes-1672.vercel.app"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "es_ES",
    images: ["/images/local-sillones.jpg"],
  },
  // Draft for client review — keep out of search engines until approved.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "Bulnes1672 · Barbería Clásica",
  telephone: "+34656606679",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_LINE,
    addressLocality: "Granollers",
    postalCode: ADDRESS_CITY.slice(0, 5),
    addressRegion: "Barcelona",
    addressCountry: "ES",
  },
  priceRange: "13€ – 31€",
  url: BOOKSY_URL,
  sameAs: [BOOKSY_URL],
  potentialAction: { "@type": "ReserveAction", target: PHONE_TEL },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-body bg-navy-950 text-cream antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
