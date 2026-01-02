import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- ADVANCED GLOBAL SEO METADATA ---
export const metadata: Metadata = {
  metadataBase: new URL('https://naturallatexfoamsrilanka.lk'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Natural Latex Foam Sri Lanka | 100% Organic Mattresses & Pillows",
    template: "%s | Natural Latex Foam Sri Lanka",
  },
  description: "Experience the best sleep with 100% natural latex mattresses and pillows in Sri Lanka. Eco-friendly, orthopedic support, and 25-year warranty. Factory in Ratmalana.",
  keywords: [
    // Core English Keywords
    "Natural Latex Mattress Sri Lanka", 
    "Latex Pillows Sri Lanka", 
    "Orthopedic Mattress", 
    "Organic Bedding Sri Lanka", 
    "Natural Latex Foam Lanka Pvt Ltd", 
    // Location Based
    "Mattress Shop Ratmalana",
    "Mattress Shop Colombo",
    // Singlish/Local Terms (Godak ay search karana dewal)
    "Rubber Mattress Price",
    "Latex Kotta",
    "Rubber Kotta",
    "Sleep Products Sri Lanka"
  ],
  authors: [{ name: "Natural Latex Foam Lanka" }],
  creator: "Navicodes",
  publisher: "Natural Latex Foam Lanka Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Natural Latex Foam Sri Lanka | Best Organic Sleep",
    description: "Upgrade your sleep with Sri Lanka's #1 natural latex mattresses. 100% Eco-friendly & 25-Year Warranty.",
    url: 'https://naturallatexfoamsrilanka.lk',
    siteName: 'Natural Latex Foam Sri Lanka',
    images: [
      {
        url: '/images/hero-bg.jpg', 
        width: 1200,
        height: 630,
        alt: 'Natural Latex Foam Factory Sri Lanka',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Natural Latex Foam Sri Lanka",
    description: "Best natural latex mattresses and pillows in Sri Lanka. 25-year warranty.",
    images: ['/images/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // IMPORTNANT: Google Search Console eken ganna code eka methanata danna
    google: 'google-site-verification-code-here', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // --- AI & GOOGLE KNOWLEDGE GRAPH SCHEMA (JSON-LD) ---
  // Meka thama AI tools walata site eka "therum ganna" udaw karanne.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // Changed from Organization to LocalBusiness for better Maps SEO
    "name": "Natural Latex Foam Lanka Pvt Ltd",
    "url": "https://naturallatexfoamsrilanka.lk",
    "logo": "https://naturallatexfoamsrilanka.lk/images/logo.png",
    "image": "https://naturallatexfoamsrilanka.lk/images/hero-bg.jpg",
    "description": "Manufacturer of 100% natural latex foam mattresses and pillows in Sri Lanka.",
    "telephone": "+94-77-773-3074",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No 10E, Pirivena Road",
      "addressLocality": "Ratmalana",
      "addressRegion": "Western Province",
      "postalCode": "10390",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.8194, // Ratmalana coordinates (Approx)
      "longitude": 79.8820
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:30",
      "closes": "17:30"
    },
    "sameAs": [
      "https://www.facebook.com/naturallatexfoamlankalk",
      "https://www.instagram.com/naturallatexfoamlanka"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94-77-773-3074",
      "contactType": "Sales",
      "areaServed": "LK",
      "availableLanguage": ["English", "Sinhala"]
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900`}>
        {children}
      </body>
    </html>
  );
}