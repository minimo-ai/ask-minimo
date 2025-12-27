import type { Metadata } from "next";
import { Nunito, Fraunces } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
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
    <html lang="en" className={`${nunito.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased text-ink-800 bg-cream-50">
        {children}
      </body>
    </html>
  );
}
