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
    default: 'Türkyılmaz Servis | Gebze & Darıca Teknik Servis - Beyaz Eşya, Kombi, Klima',
    template: '%s | Türkyılmaz Servis'
  },
  description: "Gebze, Darıca ve Çayırova'da garantili teknik servis. Buzdolabı, çamaşır, bulaşık makinesi tamiri ile kombi ve klima bakımı. Yerinde 6 ay resmi garanti: 0552 116 41 28.",
  keywords: [
    'gebze teknik servis',
    'darıca teknik servis',
    'çayırova teknik servis',
    'gebze beyaz eşya servisi',
    'darıca beyaz eşya servisi',
    'çayırova beyaz eşya servisi',
    'gebze buzdolabı servisi',
    'darıca buzdolabı tamiri',
    'çayırova buzdolabı servisi',
    'gebze çamaşır makinesi servisi',
    'darıca çamaşır makinesi tamiri',
    'gebze bulaşık makinesi tamiri',
    'darıca bulaşık makinesi servisi',
    'gebze kombi servisi',
    'darıca kombi servisi',
    'gebze klima servisi',
    'darıca klima servisi',
    'gebze arçelik servisi',
    'darıca arçelik servisi',
    'gebze beko servisi',
    'darıca beko servisi',
    'gebze samsung servisi',
    'vestel servisi gebze',
    'çamaşır makinesi kazan değişimi',
    'buzdolabı gaz dolumu gebze'
  ],
  authors: [{ name: 'Türkyılmaz Beyaz Eşya Servisi' }, { name: 'CCN Teknoloji', url: 'https://affan-portfolio-gilt.vercel.app/' }],
  creator: 'CCN Teknoloji',
  alternates: {
    canonical: 'https://www.turkyilmazservis.com',
  },
  openGraph: {
    title: 'Türkyılmaz Servis | Gebze & Darıca Teknik Servis - Beyaz Eşya Servisi',
    description: "Gebze, Darıca ve Çayırova'da aynı gün yerinde beyaz eşya, klima ve kombi tamir servisi. 6 ay parça garantisi.",
    url: 'https://www.turkyilmazservis.com',
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
    description: 'Aynı gün yerinde 6 ay garantili beyaz eşya, klima ve kombi tamir servisi: 0552 116 41 28.',
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
    url: 'https://www.turkyilmazservis.com',
    logo: 'https://www.turkyilmazservis.com/logo.png',
    image: 'https://www.turkyilmazservis.com/logo.png',
    telephone: '+905521164128',
    priceRange: '₺₺',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Nakit, Kredi Kartı, Banka Kartı, Havale/EFT',
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
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    areaServed: [
      'Gebze',
      'Darıca',
      'Çayırova',
      'Dilovası',
      'Tuzla',
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
            name: 'Gebze & Darıca Buzdolabı Tamiri ve Gaz Dolumu Servisi'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gebze & Darıca Çamaşır Makinesi Kazan ve Rulman Değişimi'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bulaşık Makinesi Rezistans ve Tahliye Pompası Onarımı'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Klima Gaz Dolumu ve Antibakteriyel İlaçlı Bakım'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kombi Periyodik Bakımı ve Makineli İlaçlı Petek Temizliği'
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
