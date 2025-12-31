import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
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
  title: "Ask MiniMo | Real Estate Clarity for Texas Agents, Buyers & Sellers",
  description: "Get free real estate education from a Texas broker with 14+ years experience. MiniMo helps first-time buyers, veterans, and agents understand VA loans, new construction, and the DFW market. No pressure, no sales pitch — just clarity.",
  keywords: [
    "Texas real estate education",
    "VA loan Texas",
    "VA home loan DFW",
    "first time home buyer Texas",
    "first time home buyer Dallas",
    "new construction homes DFW",
    "Dallas Fort Worth real estate",
    "TREC compliance",
    "real estate agent tools Texas",
    "homebuying education",
    "veteran home buying",
    "military family real estate",
    "Dallas new construction",
    "Fort Worth new homes",
    "Grapevine real estate",
    "Texas homebuyer education"
  ],
  authors: [{ name: "Momentus Real Estate Group" }],
  creator: "Maureen Cappallo",
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
    title: "Ask MiniMo | Free Real Estate Education for Texas Homebuyers",
    description: "Free real estate clarity from a Texas broker. Understand VA loans, new construction, and the DFW market. Education-first, zero pressure. Built for first-time buyers, veterans, and agents.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ask MiniMo - Real Estate Clarity Companion for Texas Homebuyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ask MiniMo | Free Real Estate Education for Texas",
    description: "Free real estate clarity from a Texas broker. Understand VA loans, new construction, DFW market. Zero pressure, just education.",
    images: ["/og-image.png"],
    creator: "@momentusregroup",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://askminimo.com",
  },
  category: "Real Estate Education",
};

// ⚠️ REPLACE THIS WITH YOUR ACTUAL GOOGLE ANALYTICS ID
// Get it from: https://analytics.google.com → Admin → Data Streams → your stream → Measurement ID
const GA_MEASUREMENT_ID = "G-68EGN0G21R";

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
        
        {/* Additional SEO */}
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Dallas-Fort Worth" />
        
        {/* Schema.org structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Ask MiniMo",
              "description": "AI-powered real estate education tool for Texas homebuyers and agents",
              "url": "https://askminimo.com",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free real estate education with premium options available"
              },
              "creator": {
                "@type": "RealEstateAgent",
                "name": "Maureen Cappallo",
                "jobTitle": "Broker/Owner",
                "worksFor": {
                  "@type": "RealEstateAgent",
                  "name": "Momentus Real Estate Group",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "4501 Merlot Ave, Suite 200",
                    "addressLocality": "Grapevine",
                    "addressRegion": "TX",
                    "postalCode": "76051",
                    "addressCountry": "US"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Dallas-Fort Worth Metroplex"
                  }
                }
              },
              "about": [
                "Real Estate Education",
                "VA Loans",
                "New Construction Homes",
                "First-Time Home Buyers",
                "Dallas Fort Worth Real Estate"
              ]
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}
