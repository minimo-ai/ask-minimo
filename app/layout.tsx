import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#6B8A7A",
};

export const metadata: Metadata = {
  title: "Ask MiniMo | Real Estate Clarity Companion",
  description: "Get clear on real estate with MiniMo — your AI-powered clarity companion. Understand your options, bust the myths, and feel confident. No pressure, no sales pitch. Just clarity.",
  keywords: ["real estate", "homebuying", "first time buyer", "VA loans", "real estate education", "home buying process", "real estate agent tools", "Texas real estate", "DFW homes"],
  authors: [{ name: "Ask MiniMo" }],
  creator: "Ask MiniMo",
  publisher: "Ask MiniMo",
  metadataBase: new URL("https://askminimo.com"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MiniMo",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://askminimo.com",
    siteName: "Ask MiniMo",
    title: "Ask MiniMo | Real Estate Clarity Companion",
    description: "Get clear on real estate with MiniMo — your AI-powered clarity companion. No pressure, no sales pitch. Just clarity.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ask MiniMo - Real Estate Clarity Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ask MiniMo | Real Estate Clarity Companion",
    description: "Get clear on real estate with MiniMo — your AI-powered clarity companion. No pressure, no sales pitch. Just clarity.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MiniMo" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
