import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mimar Yusuf Özdamar | Resmi Web Sitesi",
  description: "Mimar Yusuf Özdamar'ın resmi web sitesi. Projeler, mimari yaklaşım ve daha fazlası.",
  keywords: "Yusuf Özdamar, mimar, Türk mimarisi, mimarlık, Turgut Cansever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
