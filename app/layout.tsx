import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
  title: {
    default: "Delta9 Global",
    template: "%s | Delta9 Global",
  },
  description:
    "Kết nối đầu tư, thương mại và các cơ hội phát triển quốc tế.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}