import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
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
    "residential design",
    "commercial design",
  ],
  authors: [{ name: "Naira Faraj" }],
  openGraph: {
    title: "Naira Faraj | Interior Designer",
    description:
      "An elegant studio for bespoke interior design. Where vision meets craftsmanship.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f3ef",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
