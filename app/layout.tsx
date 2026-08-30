import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import MetaPixelWrapper from "./components/MetaPixelWrapper";
import GoogleTagWrapper from "./components/GoogleTagWrapper";
import VisitPing from "./components/VisitPing";
import ConsentProvider from "./components/ConsentProvider";
import CookieBanner from "./components/CookieBanner";
import { SITE_URL } from "./lib/siteUrl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin']
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sinergia Studio — Sistema de Ventas Digital en Aguascalientes',
    template: '%s | Sinergia Studio',
  },
  description: 'Agencia de marketing digital en Aguascalientes. Instalamos sistemas de ventas que generan clientes constantes para tu negocio.',
  openGraph: {
    siteName: 'Sinergia Studio',
    locale: 'es_MX',
    type: 'website',
  },
  icons: {
    icon: '/logos/isotipo.svg',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ConsentProvider>
          <MetaPixelWrapper />
          <GoogleTagWrapper/>
          <VisitPing />
          {children}
          <CookieBanner />
        </ConsentProvider>
      </body>
    </html>
  );
}
