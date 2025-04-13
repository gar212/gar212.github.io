import type { Metadata } from "next";
import { Libre_Franklin } from 'next/font/google';
import LenisScrollProvider from "./providers/lenis-provider";

import "./globals.css";

const libreFranklin = Libre_Franklin({ 
  subsets: ['latin'], 
  weight: ['400','500','600', '700'], 
});

export const metadata: Metadata = {
  title: "Garet Lam • Web Developer",
  description: "Bringing Your Digital Ideas to Life Through Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreFranklin.className} antialiased`}
      >
        <LenisScrollProvider>
        {children}
        </LenisScrollProvider>
      </body>
    </html>
  );
}
