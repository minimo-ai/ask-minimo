import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ask MiniMo — Real Estate Clarity Companion",
  description:
    "Get clear on real estate. Understand your options, know what comes next, and feel confident — no pressure, no sales pitch. Educational guidance for homebuyers and sellers.",
  keywords: [
    "real estate help",
    "homebuying education",
    "first time homebuyer",
    "real estate questions",
    "mortgage help",
    "VA loan help",
    "home buying process",
  ],
  verification: {
    google: "BOmcVzyzcTlfvOi2m0uG5Ftmp0yi5PglzgOnX4-sgbM",
  },
  openGraph: {
    title: "Ask MiniMo — Real Estate Clarity Companion",
    description: "Get clear on real estate. No pressure. Ever.",
    type: "website",
    url: "https://askminimo.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ask MiniMo — Real Estate Clarity Companion",
    description: "Get clear on real estate. No pressure. Ever.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-ink-800 bg-cream-50">
        {children}
      </body>
    </html>
  );
}
