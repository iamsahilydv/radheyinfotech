import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rdhey infotech | Premium IT Services & ITSM Solutions",
  description: "rdhey infotech offers high-performance IT Service Management (ITSM), cybersecurity support, cloud solutions, and network infrastructure management for modern enterprises.",
  keywords: ["rdhey infotech", "it services bawal", "itsm rewari", "it support haryana", "managed it services", "cybersecurity solutions", "cloud migration"],
  metadataBase: new URL("https://rdheyinfotech.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

