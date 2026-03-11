import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naira Faraj | Interior Designer",
  description:
    "An elegant studio for bespoke interior design. Where vision meets craftsmanship to create spaces that inspire.",
  keywords: [
    "interior design",
    "interior designer",
    "Naira Faraj",
    "luxury interiors",
    "home design",
  ],
  authors: [{ name: "Naira Faraj" }],
};

export const viewport: Viewport = {
  themeColor: "#f4f2ed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#f4f2ed] text-[#1a1716]">{children}</body>
    </html>
  );
}
