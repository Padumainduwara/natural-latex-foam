import type { Metadata, Viewport } from "next";
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


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#052e16", 
};


export const metadata: Metadata = {
  metadataBase: new URL('https://naturallatexfoamsrilanka.lk'),
  alternates: {
    canonical: 'https://naturallatexfoamsrilanka.lk',
    languages: {
      'en-LK': 'https://naturallatexfoamsrilanka.lk',
    },
  },
  title: {
    default: "Natural Latex Foam Sri Lanka | #1 Organic Mattresses Factory",
    template: "%s | Natural Latex Foam Sri Lanka",
  },
  description: "Buy 100% Natural Latex Foam mattresses & pillows in Sri Lanka directly from the factory. Orthopedic support, eco-friendly, 25-year warranty. Best price in Ratmalana.",
  keywords: [
    "Natural Latex Foam",
    "Natural Latex Mattress Sri Lanka", 
    "Latex Pillows Sri Lanka",
    "Rubber Mattress Price Sri Lanka",
    "Organic Bedding Sri Lanka", 
    "Natural Latex Foam Lanka Pvt Ltd", 
    "Buy latex mattress Colombo",
    "Mattress Shop Ratmalana",
    "Mattress Factory Sri Lanka",
    "Best orthopedic mattress for back pain Sri Lanka",
    "Latex Kotta",
    "Rubber Kotta",
    "Rubber mattress price",
    "Natural rubber ninda",
    "Natural Latex Foam Lanka",
    "Arpico latex mattress alternative",
    "Cushion works Ratmalana",
    "Eco friendly mattress Sri Lanka",
    "Latex Sheets Sri Lanka",
    "Wholesale Mattress Sri Lanka"
  ],
  authors: [{ name: "Natural Latex Foam Lanka Pvt Ltd", url: "https://naturallatexfoamsrilanka.lk" }],
  creator: "Natural Latex Foam Lanka Pvt Ltd",
  publisher: "Natural Latex Foam Lanka Pvt Ltd",
  category: "Home & Garden > Furniture > Bedding",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "LK-1", 
    "geo.placename": "Ratmalana",
    "geo.position": "6.8194;79.8820",
    "ICBM": "6.8194, 79.8820",
    "rating": "General",
    "distribution": "Global",
    "revisit-after": "7 days",
  },
  openGraph: {
    title: "Natural Latex Foam Sri Lanka | Best Organic Sleep",
    description: "Upgrade your sleep with Sri Lanka's #1 natural latex mattresses. 100% Eco-friendly, Chemical-free & 25-Year Warranty. Factory Direct Price.",
    url: 'https://naturallatexfoamsrilanka.lk',
    siteName: 'Natural Latex Foam Sri Lanka',
    images: [
      {
        url: 'https://naturallatexfoamsrilanka.lk/images/hero-bg1.jpg', 
        width: 1200,
        height: 630,
        alt: 'Natural Latex Foam Factory Sri Lanka',
      },
      {
        url: 'https://naturallatexfoamsrilanka.lk/images/logo.png',
        width: 500,
        height: 500,
        alt: 'Natural Latex Foam Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Natural Latex Foam Sri Lanka",
    description: "Best natural latex mattresses and pillows in Sri Lanka. 25-year warranty.",
    images: ['https://naturallatexfoamsrilanka.lk/images/hero-bg1.jpg'],
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
    google: 'Q_QOAs0X_eMOcNgMVy-9C-oq3d_PatIUI_jh7pjfRXE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://naturallatexfoamsrilanka.lk/#website",
        "url": "https://naturallatexfoamsrilanka.lk",
        "name": "Natural Latex Foam Sri Lanka",
        "description": "Manufacturer of 100% natural latex foam mattresses and pillows in Sri Lanka.",
        "publisher": {
          "@id": "https://naturallatexfoamsrilanka.lk/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://naturallatexfoamsrilanka.lk/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://naturallatexfoamsrilanka.lk/#organization",
        "name": "Natural Latex Foam Lanka Pvt Ltd",
        "legalName": "Natural Latex Foam Lanka Private Limited",
        "url": "https://naturallatexfoamsrilanka.lk",
        "logo": {
          "@type": "ImageObject",
          "url": "https://naturallatexfoamsrilanka.lk/images/logo.png",
          "width": 512,
          "height": 512
        },
       
        "sameAs": [
          "https://www.facebook.com/naturallatexfoamlankalk",
          "https://www.instagram.com/naturallatexfoamlanka"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+94-77-773-3074",
          "contactType": "customer service",
          "areaServed": "LK",
          "availableLanguage": ["English", "Sinhala"]
        },
        "knowsAbout": ["Natural Latex", "Orthopedic Mattresses", "Sleep Health", "Sustainable Manufacturing"]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://naturallatexfoamsrilanka.lk/#localbusiness",
        "parentOrganization": {
          "@id": "https://naturallatexfoamsrilanka.lk/#organization"
        },
        "name": "Natural Latex Foam Lanka - Factory Outlet",
        "image": "https://naturallatexfoamsrilanka.lk/images/hero-bg1.jpg",
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
          "latitude": 6.8194, 
          "longitude": 79.8820
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
          ],
          "opens": "08:30",
          "closes": "17:30"
        },
        "hasMap": "https://maps.google.com/?q=6.8194,79.8820" 
      },
      {
        "@type": "ManufacturingPlant",
        "@id": "https://naturallatexfoamsrilanka.lk/#factory",
        "name": "Natural Latex Foam Lanka Factory",
        "url": "https://naturallatexfoamsrilanka.lk",
        "location": {
             "@id": "https://naturallatexfoamsrilanka.lk/#localbusiness"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="advanced-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="afterInteractive"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}