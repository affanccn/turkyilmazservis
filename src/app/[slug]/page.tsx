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
  CalendarClock,
  Radio,
  Building2,
  PackageCheck
} from 'lucide-react'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Next.js'in bu sayfaları derleme (build) sırasında statik olarak üretmesini sağlar (Maksimum Hız)
export async function generateStaticParams() {
  return LANDING_PAGES.map((page) => ({
    slug: page.slug,
  }))
}

// Dinamik SEO Başlık ve Açıklamaları
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = LANDING_PAGES.find((p) => p.slug === slug)

  if (!page) return {}

  return {
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDesc,
      url: `https://turkyilmazservis.vercel.app/${page.slug}`,
      siteName: 'Türkyılmaz Beyaz Eşya Servisi',
      locale: 'tr_TR',
      type: 'website',
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

  // Google Arama Motoruna Sayfaya Özel ApplianceRepair JSON-LD Şeması
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ApplianceRepair',
    name: page.title,
    telephone: '+905521164128',
    url: `https://turkyilmazservis.vercel.app/${page.slug}`,
    areaServed: {
      '@type': 'City',
      name: page.district,
    },
    description: page.metaDesc,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Darıca',
      addressRegion: 'Kocaeli',
      addressCountry: 'TR',
    },
  }

  return (
    <main className="relative min-h-screen bg-zinc-950 text-slate-100 selection:bg-red-600 selection:text-white pb-28 sm:pb-0 overflow-x-hidden tech-grid-bg">
      
      {/* Schema Enjeksiyonu */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Arka plan ışıkları */}
      <div className="pointer-events-none absolute -left-40 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute -right-40 top-1/4 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl -z-10" />

      {/* Üst Bar */}
      <div className="bg-zinc-900/90 border-b border-zinc-800 text-xs py-2 px-4 backdrop-blur-md">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200 font-medium">
              <strong className="text-white">{page.district} Bölgesi:</strong> Gezici Tamir Ekibimiz Adresinize En Fazla 45 Dk Mesafede
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-zinc-300">
            <span className="flex items-center gap-1 text-slate-200 font-semibold">
              <Clock className="w-3.5 h-3.5 text-red-500" /> Aynı Gün Yerinde Müdahale
            </span>
          </div>
        </div>
      </div>

      <Navbar phone={phone} cleanPhone={cleanPhone} />

      {/* HERO BÖLÜMÜ */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8">
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

      {/* SIK KARŞILAŞILAN ARIZALAR & ÇÖZÜMLER (GOOGLE'IN ÇOK SEVDİĞİ DETAYLI TEKNİK ALAN) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Sol Kolon: Belirtiler */}
          <div className="bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl">
            <div className="flex items-center gap-2.5 text-red-500 text-sm font-bold uppercase tracking-wider mb-4">
              <AlertCircle className="w-5 h-5" />
              <span>Sık Görülen {page.brandOrDevice} Arızaları</span>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              {page.district} bölgesinde müşterilerimizin en çok bildirdiği şikayetler:
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
              Cihazınızı atölyeye götürmeden yerinde uyguladığımız işlemler:
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
            <p className="text-sm font-bold text-white">{page.district} İlçesinde Servis Talebi Oluşturun</p>
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

      {/* DİĞER İLÇE VE MARKA SAYFALARI (İÇ LİNKLEME - INTERNAL LINKING GÜCÜ) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-zinc-900">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
          Diğer Popüler Hizmet Bölgelerimiz & Sayfalar
        </h3>
        <div className="flex flex-wrap gap-2">
          {LANDING_PAGES.filter(p => p.slug !== page.slug).map((other) => (
            <Link
              key={other.slug}
              href={`/${other.slug}`}
              className="text-xs bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-800 text-zinc-400 px-3.5 py-2 rounded-xl transition"
            >
              {other.title}
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-zinc-400 py-10 px-4 border-t border-zinc-900 text-xs text-center">
        <p>© {new Date().getFullYear()} Türkyılmaz Beyaz Eşya Servisi - {page.district} Bölge Servis Ağı</p>
      </footer>

      <WhatsappWidget phone={phone} />
    </main>
  )
}
