import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { SkipToContent } from "@/components/accessibility-skip-link"

const _geist = Geist({ subsets: ["latin"], display: "swap", preload: true })
const _geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  viewportFit: "cover",
}

export const metadata: Metadata = {
  title: "Prestigia Agency - Agence Digital Marketing à Casablanca | SEO, Branding & Web Design",
  description:
    "Prestigia Agency : Agence de marketing digital à Casablanca spécialisée en SEO, branding, développement web et stratégie digitale.",
  keywords: [
    "agence marketing digital Casablanca",
    "SEO Casablanca",
    "branding Maroc",
    "développement web Casablanca",
    "agence web Maroc",
    "marketing stratégique digital",
    "design graphique",
    "services digitaux Casablanca",
    "agence SEO Maroc",
    "création site web",
    "gestion réseaux sociaux",
    "digital marketing agency Morocco",
    "stratégie digitale entreprise",
    "référencement naturel Maroc",
    "community management Casablanca",
  ],
  generator: "Next.js",
  metadataBase: new URL("https://prestigia-agency.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://prestigia-agency.com",
    title: "Prestigia Agency - Excellence Digitale | Services SEO et Marketing Digital",
    description:
      "Transformez votre présence digitale avec notre agence de marketing digital spécialisée en SEO, branding et développement web.",
    siteName: "Prestigia Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prestigia Agency - Excellence Digitale",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 800,
        height: 800,
        alt: "Prestigia Agency Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestigia Agency - Excellence Digitale",
    description: "Agence de marketing digital à Casablanca spécialisée en SEO, branding et développement web",
    images: ["/og-image.png"],
    creator: "@prestigia_agency",
    site: "@prestigia_agency",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://prestigia-agency.com",
    languages: {
      fr: "https://prestigia-agency.com/fr",
      en: "https://prestigia-agency.com/en",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      "msvalidate.01": "ms-verification-code",
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Prestigia Agency",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://prestigia-agency.com/#business",
        name: "Prestigia Agency",
        description: "Agence de marketing digital spécialisée en SEO, branding et développement web à Casablanca",
        url: "https://prestigia-agency.com",
        telephone: "+212652768993",
        email: "contact@prestigia-agency.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bld Qods - The Gold Center, Étage 1, Bureau 2",
          addressLocality: "Casablanca",
          addressRegion: "Ain Chock",
          postalCode: "20000",
          addressCountry: "MA",
        },
        image: {
          "@type": "ImageObject",
          url: "https://prestigia-agency.com/icon.png",
          width: 400,
          height: 400,
        },
        logo: {
          "@type": "ImageObject",
          url: "https://prestigia-agency.com/icon.png",
          width: 400,
          height: 400,
        },
        sameAs: [
          "https://web.facebook.com/profile.php?id=61584253697576&locale=fr_FR",
          "https://www.instagram.com/prestigia__agency",
          "https://www.linkedin.com/company/prestigia",
        ],
        areaServed: [
          { "@type": "Country", name: "Morocco" },
          { "@type": "Country", name: "France" },
          { "@type": "Country", name: "Belgium" },
        ],
        serviceType: ["SEO", "Web Development", "Branding", "Digital Marketing"],
        priceRange: "$$",
        foundingDate: "2012",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 12 },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          telephone: "+212652768993",
          email: "contact@prestigia-agency.com",
          availableLanguage: ["en", "fr", "ar"],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "150",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://prestigia-agency.com/#organization",
        name: "Prestigia Agency",
        url: "https://prestigia-agency.com",
        logo: "https://prestigia-agency.com/icon.png",
        sameAs: [
          "https://web.facebook.com/profile.php?id=61584253697576&locale=fr_FR",
          "https://www.instagram.com/prestigia__agency",
          "https://www.linkedin.com/company/prestigia",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://prestigia-agency.com/#website",
        url: "https://prestigia-agency.com",
        name: "Prestigia Agency",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://prestigia-agency.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1419450969751777');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1419450969751777&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XXXXXXXXXX');
              `,
          }}
        />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>

      <body className="font-sans antialiased">
        <SkipToContent />
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
