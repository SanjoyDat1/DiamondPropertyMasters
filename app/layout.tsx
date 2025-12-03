import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diamond Property Masters | Permanent All-Season Outdoor LED Lighting",
  description:
    "Premium permanent all-season outdoor LED lighting with smart app control. Serving Calgary, Vancouver, and Toronto.",
  keywords:
    "permanent LED lighting, outdoor lighting Calgary, outdoor lighting Vancouver, outdoor lighting Toronto, smart home lighting, all-season LED track lighting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
