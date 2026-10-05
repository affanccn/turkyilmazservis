import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '600', '800', '900'],
})

export const metadata: Metadata = {
  
  metadataBase: new URL('https://www.turkyilmazservis.com'),
  title: {
    default: 'Türkyılmaz Servis | Gebze, Darıca & Çayırova Beyaz Eşya Servisi',
    template: '%s | Türkyılmaz Servis'
  },
  description: "Türkyılmaz Servis; Gebze, Darıca ve Çayırova'da beyaz eşya, klima ve kombi servisi. Arçelik, Beko, Vestel, Samsung ve diğer markalara yerinde servis.",
  keywords: [
    'gebze beyaz eşya servisi',
    'darıca beyaz eşya servisi',
    'çayırova beyaz eşya servisi',
    'gebze arçelik servisi',
    'darıca beko servisi',
    'gebze samsung servisi',
    'vestel servisi gebze',
    'altus servis darıca',
    'grundig servis darıca',
    'regal beyaz eşya tamiri',
    'keysmart servisi gebze',
    'flavel beyaz eşya servisi',
    'seg servis gebze',
    'kumtel ocak tamiri',
    'eminçelik ankastre servisi',
    'çamaşır makinesi kazan değişimi',
    'bulaşık makinesi tamiri gebze'
  ],
  authors: [{ name: 'Türkyılmaz Beyaz Eşya Servisi' }, { name: 'CCN Teknoloji', url: 'https://affan-portfolio-gilt.vercel.app/' }],
  creator: 'CCN Teknoloji',
  alternates: {
    canonical: 'https://www.turkyilmazservis.com/',
  },
  openGraph: {
    title: 'Türkyılmaz Servis | Beyaz Eşya Servisi',
    description: "Gebze, Darıca ve Çayırova'da Türkyılmaz Beyaz Eşya Servisi.",
    url: 'https://www.turkyilmazservis.com/',
    siteName: 'Türkyılmaz Beyaz Eşya Servisi',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Türkyılmaz Beyaz Eşya Servisi Logo'
      }
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Türkyılmaz Beyaz Eşya Servisi - Gebze, Darıca & Çayırova',
    description: 'Aynı gün yerinde garantili beyaz eşya, klima ve kombi tamir servisi.',
    images: ['/logo.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ApplianceRepair'],
    '@id': 'https://www.turkyilmazservis.com/#business',
    name: 'Türkyılmaz Beyaz Eşya Servisi',
    url: 'https://www.turkyilmazservis.com/',
    logo: 'https://www.turkyilmazservis.com/logo.png',
    image: 'https://www.turkyilmazservis.com/logo.png',
    telephone: '+905521164128',
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fevziçakmak Mahallesi Doktor Zeki Acar Caddesi, Şebnem Sk. No:11',
      addressLocality: 'Darıca',
      addressRegion: 'Kocaeli',
      postalCode: '41700',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7731,
      longitude: 29.4055
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '08:30',
        closes: '20:30'
      }
    ],
    areaServed: [
      'Gebze',
      'Darıca',
      'Çayırova',
      'Dilovası',
      'Kocaeli'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Beyaz Eşya, Ankastre, Kombi ve Klima Tamir Hizmetleri',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Arçelik Beko Samsung Vestel Buzdolabı & Çamaşır Makinesi Tamiri'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bulaşık Makinesi Rezistans ve Pompa Onarımı'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kumtel & Eminçelik Ankastre ve Ocak Tamiri'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Klima ve Kombi Periyodik Bakım Servisi'
          }
        }
      ]
    }
  }

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
