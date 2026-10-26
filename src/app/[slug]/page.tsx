import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import WhatsappWidget from '@/components/WhatsappWidget'
import { LANDING_PAGES, LandingPageData } from '@/lib/landingPages'
import { 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Wrench, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft,
  ChevronRight,
  Radio,
  Building2,
  PackageCheck,
  HelpCircle
} from 'lucide-react'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Next.js'in bu sayfaları derleme (build) sırasında statik olarak üretmesini sağlar (Maksimum Hız & SEO)
export async function generateStaticParams() {
  return LANDING_PAGES.map((page) => ({
    slug: page.slug,
  }))
}

// Dinamik SEO Başlık, Açıklama ve Canonical
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = LANDING_PAGES.find((p) => p.slug === slug)

  if (!page) return {}

  const canonicalUrl = `https://www.turkyilmazservis.com/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDesc,
      url: canonicalUrl,
      siteName: 'Türkyılmaz Beyaz Eşya Servisi',
      locale: 'tr_TR',
      type: 'website',
      images: [
        {
          url: '/logo.png',
          width: 800,
          height: 800,
          alt: `${page.title} - Türkyılmaz Servis`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDesc,
      images: ['/logo.png'],
    },
  }
}

export default async function DynamicLandingPage({ params }: PageProps) {
  const { slug } = await params
  const page = LANDING_PAGES.find((p) => p.slug === slug)

  if (!page) {
    notFound()
  }

  const phone = '0552 116 41 28'
  const cleanPhone = phone.replace(/\s+/g, '').replace('+', '')
  const pageUrl = `https://www.turkyilmazservis.com/${page.slug}`

  // 1. Google ApplianceRepair / LocalBusiness Şeması
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ApplianceRepair',
    '@id': `${pageUrl}#service`,
    name: page.title,
    telephone: '+905521164128',
    url: pageUrl,
    logo: 'https://www.turkyilmazservis.com/logo.png',
    image: 'https://www.turkyilmazservis.com/logo.png',
    priceRange: '₺₺',
    areaServed: {
      '@type': 'City',
      name: page.district,
    },
    description: page.metaDesc,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fevziçakmak Mahallesi Doktor Zeki Acar Caddesi, Şebnem Sk. No:11',
      addressLocality: 'Darıca',
      addressRegion: 'Kocaeli',
      postalCode: '41700',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7731,
      longitude: 29.4055,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:30',
        closes: '20:30',
      },
    ],
  }

  // 2. BreadcrumbList Şeması (SERP Zengin Sonuçları)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: 'https://www.turkyilmazservis.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${page.district} Teknik Servis`,
        item: `https://www.turkyilmazservis.com/${page.district.toLowerCase() === 'gebze' ? 'gebze-teknik-servis' : page.district.toLowerCase() === 'darıca' ? 'darica-teknik-servis' : 'cayirova-teknik-servis'}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.title,
        item: pageUrl,
      },
    ],
  }

  // 3. FAQPage Şeması (Google Soru-Cevap Zengin Kutusu)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `${page.district} bölgesinde ${page.brandOrDevice} servisi için ne kadar sürede gelirsiniz?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Darıca ve Gebze mobil servis araçlarımızla ${page.district} içerisindeki adresinize ortalama 25-45 dakika içinde ulaşıp aynı gün yerinde müdahale ediyoruz.`,
        },
      },
      {
        '@type': 'Question',
        name: `Yapılan ${page.brandOrDevice} tamiri ve değişen parçalar garantili midir?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Evet, ${page.title} kapsamında taktığımız tüm orijinal yedek parçalar ve uzman işçiliğimiz 6 ay süresince resmi Türkyılmaz Servis garanti formu ile güvence altındadır.`,
        },
      },
      {
        '@type': 'Question',
        name: `${page.brandOrDevice} cihazımı atölyeye götürmeden evde mi tamir ediyorsunuz?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Evet! Parçalarımızı mobil aracımızda hazır bulundurarak arızayı adresinizde gözünüzün önünde tamir ediyoruz. Böylece cihazınız taşıma sırasında zarar görmez ve günlerce beklemezsiniz.`,
        },
      },
    ],
  }

  // İlçeye göre gruplandırılmış diğer sayfalar
  const sameDistrictPages = LANDING_PAGES.filter(p => p.district === page.district && p.slug !== page.slug)
  const otherDistrictPages = LANDING_PAGES.filter(p => p.district !== page.district)

  return (
    <main className="relative min-h-screen bg-zinc-950 text-slate-100 selection:bg-red-600 selection:text-white pb-28 sm:pb-0 overflow-x-hidden tech-grid-bg">
      
      {/* Çoklu Schema Enjeksiyonu */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Arka plan ışıkları */}
      <div className="pointer-events-none absolute -left-40 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute -right-40 top-1/4 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl -z-10" />

      {/* Üst Canlı Bilgi Barı */}
      <div className="bg-zinc-900/90 border-b border-zinc-800 text-xs py-2 px-4 backdrop-blur-md">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200 font-medium">
              <strong className="text-white">{page.district} Bölgesi:</strong> Gezici Tamir Ekibimiz Adresinize En Fazla 25-45 Dk Mesafede
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-zinc-300">
            <span className="flex items-center gap-1 text-slate-200 font-semibold">
              <Clock className="w-3.5 h-3.5 text-red-500" /> Aynı Gün Yerinde Garantili Müdahale
            </span>
          </div>
        </div>
      </div>

      <Navbar phone={phone} cleanPhone={cleanPhone} />

      {/* Breadcrumb (Gezinme Yolu) */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-xs text-zinc-400">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="hover:text-white transition">Ana Sayfa</Link>
          </li>
          <li className="text-zinc-600">/</li>
          <li>
            <span className="text-zinc-300 font-semibold">{page.district}</span>
          </li>
          <li className="text-zinc-600">/</li>
          <li className="text-red-400 font-bold truncate max-w-[200px] sm:max-w-none">
            {page.title}
          </li>
        </ol>
      </nav>

      {/* HERO BÖLÜMÜ */}
      <section className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700/80 text-zinc-200 text-xs font-extrabold px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>{page.badge}</span>
          </div>

          <h1 className="text-[1.85rem] xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {page.title}
          </h1>

          <p className="mt-5 text-sm sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            {page.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`tel:${cleanPhone}`}
              className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 animate-shimmer" />
              <PhoneCall className="w-5 h-5 animate-bounce" />
              <span>{page.district} Servis Çağır: {phone}</span>
            </a>

            <Link
              href="/islerimiz"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-bold text-base px-7 py-4 rounded-2xl border border-zinc-700/80 hover:border-zinc-400 shadow-lg transition-all hover:scale-105"
            >
              <Wrench className="w-5 h-5 text-red-500" />
              <span>Sahadan Örnek İşler</span>
            </Link>
          </div>

          {/* GÜVEN METRİKLERİ */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto text-left">
            <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800">
              <Clock className="w-5 h-5 text-red-500 mb-1.5" />
              <p className="text-lg font-black text-white">{page.district} İçi Hızlı</p>
              <p className="text-xs text-zinc-400">25-45 Dk Adrese Ulaşım</p>
            </div>
            <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800">
              <ShieldCheck className="w-5 h-5 text-red-500 mb-1.5" />
              <p className="text-lg font-black text-white">6 Ay Garanti</p>
              <p className="text-xs text-zinc-400">Resmi Belge İle Teslim</p>
            </div>
            <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800">
              <Wrench className="w-5 h-5 text-red-500 mb-1.5" />
              <p className="text-lg font-black text-white">Orijinal Parça</p>
              <p className="text-xs text-zinc-400">Cihaza Birebir Uyumlu</p>
            </div>
            <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800">
              <MapPin className="w-5 h-5 text-red-500 mb-1.5" />
              <p className="text-lg font-black text-white">Yerinde Tamir</p>
              <p className="text-xs text-zinc-400">Gözünüzün Önünde Onarım</p>
            </div>
          </div>

        </div>
      </section>

      {/* SIK KARŞILAŞILAN ARIZALAR & ÇÖZÜMLER (GOOGLE TEKNİK İÇERİK ALANI) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Sol Kolon: Belirtiler */}
          <div className="bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl">
            <div className="flex items-center gap-2.5 text-red-500 text-sm font-bold uppercase tracking-wider mb-4">
              <AlertCircle className="w-5 h-5" />
              <span>Sık Görülen {page.brandOrDevice} Arızaları</span>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              {page.district} bölgesinde müşterilerimizin en çok bildirdiği şikayetler ve arıza belirtileri:
            </p>
            <ul className="space-y-3.5">
              {page.commonFaults.map((fault, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                  <span>{fault}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ Kolon: Uygulanan Çözümler */}
          <div className="bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl">
            <div className="flex items-center gap-2.5 text-emerald-400 text-sm font-bold uppercase tracking-wider mb-4">
              <CheckCircle2 className="w-5 h-5" />
              <span>Uyguladığımız Garantili Çözümler</span>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              Cihazınızı atölyeye götürmeden yerinde uyguladığımız garantili profesyonel işlemler:
            </p>
            <ul className="space-y-3.5">
              {page.solutions.map((sol, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Hızlı Çağrı Kutusu */}
        <div className="mt-8 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-white">{page.district} İlçesinde Hemen Servis Talebi Oluşturun</p>
            <p className="text-xs text-zinc-400">Beklemeden ustamızla doğrudan görüşüp randevu saatini belirleyin.</p>
          </div>
          <a
            href={`tel:${cleanPhone}`}
            className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs px-6 py-3 rounded-xl transition shadow-md shrink-0"
          >
            Hemen Ulaş: {phone}
          </a>
        </div>
      </section>

      {/* SSS BÖLÜMÜ (ZENGİN SNIPPET DESTEĞİ) */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-red-500" />
          <span>{page.district} {page.brandOrDevice} Servisi Sıkça Sorulan Sorular</span>
        </h2>
        <div className="space-y-4">
          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800">
            <h3 className="font-bold text-white text-sm">
              {page.district} bölgesinde servis çağrıldığında ne kadar sürede adreste oluyorsunuz?
            </h3>
            <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
              Mobil gezici servis araçlarımız {page.district} genelinde sürekli hareket halinde olduğundan, randevu saatinize göre 25-45 dakika içinde kapınızda oluyoruz.
            </p>
          </div>
          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800">
            <h3 className="font-bold text-white text-sm">
              Cihaz tamirinde kullanılan parçalara garanti veriliyor mu?
            </h3>
            <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
              Evet! Tarafımızca değiştirilen tüm orijinal yedek parçalar ve uygulanan işçilik 6 ay süreyle resmi Türkyılmaz Servis garanti formu ile garanti altındadır.
            </p>
          </div>
          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800">
            <h3 className="font-bold text-white text-sm">
              Tamir işlemi evde mi yapılıyor, cihaz atölyeye götürülüyor mu?
            </h3>
            <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
              Arızaların %95'i doğrudan evinizde gözünüzün önünde çözülmektedir. Böylece cihazınızın taşınma esnasında çizilmesi veya günlerce atölyede beklemesi gibi durumlar yaşanmaz.
            </p>
          </div>
        </div>
      </section>

      {/* DİĞER İLÇE VE MARKA SAYFALARI (İÇ LİNKLEME - INTERNAL LINKING GÜCÜ) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-zinc-900 space-y-8">
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
            {page.district} Bölgesindeki Diğer Hizmetlerimiz
          </h3>
          <div className="flex flex-wrap gap-2">
            {sameDistrictPages.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="text-xs bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-800 text-zinc-300 px-3.5 py-2 rounded-xl transition font-medium"
              >
                {other.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
            Çevre İlçeler ve Popüler Servis Sayfalarımız
          </h3>
          <div className="flex flex-wrap gap-2">
            {otherDistrictPages.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="text-xs bg-zinc-950 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800/80 text-zinc-400 px-3 py-1.5 rounded-lg transition"
              >
                {other.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-zinc-400 py-10 px-4 border-t border-zinc-900 text-xs text-center">
        <p>© {new Date().getFullYear()} Türkyılmaz Beyaz Eşya Servisi - {page.district} Bölge Servis Ağı</p>
        <p className="mt-2 text-zinc-500">
          Gebze, Darıca, Çayırova ve Kocaeli geneline garantili yerinde beyaz eşya tamiri.
        </p>
      </footer>

      <WhatsappWidget phone={phone} />
    </main>
  )
}
