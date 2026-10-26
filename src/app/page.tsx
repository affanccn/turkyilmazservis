import { client } from '@/sanity/lib/client'
import { DEFAULT_SERVICES, DEFAULT_CASES } from '../lib/constants'
import RepairGallery from '@/components/RepairGallery'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import WhatsappWidget from '@/components/WhatsappWidget'
import {
  PhoneCall,
  ShieldCheck,
  Clock,
  MapPin,
  Wrench,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  CalendarClock,
  Radio,
  Building2,
  PackageCheck,
  Sparkles,
  ArrowUpRight
} from 'lucide-react'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Gebze & Darıca Teknik Servis | Beyaz Eşya, Buzdolabı, Çamaşır Tamiri',
  description: "Gebze, Darıca ve Çayırova'da aynı gün yerinde teknik servis. Buzdolabı motor ve gaz dolumu, çamaşır makinesi kazan değişimi, bulaşık, kombi ve klima tamirinde 6 ay garanti: 0552 116 41 28.",
  alternates: {
    canonical: 'https://www.turkyilmazservis.com',
  },
}

async function getData() {
  try {
    const settings = await client.fetch(`*[_type == "siteSettings"][0]`)
    const sanityServices = await client.fetch(`*[_type == "service"] | order(order asc)`)
    const caseStudies = await client.fetch(`*[_type == "caseStudy"] | order(order asc)`)

    const activeServices = sanityServices && sanityServices.length > 0 ? sanityServices : DEFAULT_SERVICES

    return {
      settings: settings || {
        phone: '0552 116 41 28',
        siteName: 'Türkyılmaz Beyaz Eşya Servisi',
        address: 'Fevziçakmak Mah. Doktor Zeki Acar Cad., Şebnem Sk. No:11, Darıca/Kocaeli',
        serviceAreas: ['Gebze', 'Darıca', 'Çayırova', 'Dilovası', 'Körfez', 'İzmit', 'Gölcük', 'Derince', 'Kartepe']
      },
      services: activeServices,
      caseStudies
    }
  } catch {
    return {
      settings: {
        phone: '0552 116 41 28',
        siteName: 'Türkyılmaz Beyaz Eşya Servisi',
        address: 'Fevziçakmak Mah. Doktor Zeki Acar Cad., Şebnem Sk. No:11, Darıca/Kocaeli',
        serviceAreas: ['Gebze', 'Darıca', 'Çayırova', 'Dilovası', 'Körfez', 'İzmit', 'Gölcük', 'Derince', 'Kartepe']
      },
      services: DEFAULT_SERVICES,
      caseStudies: DEFAULT_CASES
    }
  }
}

export default async function Home() {
  const { settings, services, caseStudies } = await getData()
  const phone = settings?.phone || '0552 116 41 28'
  const cleanPhone = phone.replace(/\s+/g, '').replace('+', '')
  const shopAddress = settings?.address || 'Fevziçakmak Mah. Doktor Zeki Acar Cad., Şebnem Sk. No:11, Darıca/Kocaeli'

  const serviceAreas = settings?.serviceAreas && settings.serviceAreas.length > 0
    ? settings.serviceAreas
    : ['Gebze', 'Darıca', 'Çayırova', 'Dilovası', 'Körfez', 'İzmit', 'Gölcük', 'Derince', 'Kartepe']

  // Görseldeki 13 markanın tam listesi
  const brands = [
    'Arçelik', 'Beko', 'Samsung', 'Grundig', 'Altus', 'Vestel', 'Regal',
    'Keysmart', 'Flavel', 'Finlux', 'SEG', 'Kumtel', 'Eminçelik'
  ]

  const faqs = [
    {
      q: 'Gebze ve Darıca bölgesinde arıza tespiti ve servis süreci nasıl işliyor?',
      a: 'Bizi arayıp arıza bildiriminde bulunduğunuzda, gezici servis ekibimiz 25-45 dakika içinde adresinize yönlendirilir. Cihazınız yerinde incelenir, doğrudan arıza teşhis edilir ve onayınızla tamir edilir.'
    },
    {
      q: 'Yapılan tamir ve değişen parçalar garantili mi?',
      a: 'Evet! Değiştirilen tüm orijinal yedek parçalar ve uzman işçiliğimiz 6 ay süresince resmi Türkyılmaz Servis garantisi altındadır. Garanti belgesi kaşeli ve imzalı olarak teslim edilir.'
    },
    {
      q: 'Buzdolabı soğutmama ve çamaşır makinesi kazan arızalarında yerinde tamir mümkün mü?',
      a: 'Evet. Tam donanımlı mobil servis araçlarımızda gaz dolum tüpleri, presli orijinal kazanlar, motorlar ve rezistanslar hazır bulunur. Arızaların %95’i evinizde gözünüzün önünde çözülür.'
    },
    {
      q: 'Hangi cihaz ve markalara teknik servis hizmeti veriyorsunuz?',
      a: 'Arçelik, Beko, Samsung, Grundig, Altus, Vestel, Regal, Keysmart, Flavel, Finlux, SEG, Kumtel ve Eminçelik başta olmak üzere tüm buzdolabı, çamaşır, bulaşık, fırın, ankastre ocak, kurutma makineleri ile kombi ve klimalara servis desteği sağlıyoruz.'
    },
    {
      q: 'Gebze, Darıca ve Çayırova dışındaki ilçelere servisiniz var mı?',
      a: 'Evet. Mobil gezici araçlarımızla Gebze, Darıca, Çayırova ve Dilovası başta olmak üzere Kocaeli ve Tuzla Şifa bölgesine aynı gün servis yönlendiriyoruz.'
    },
    {
      q: 'Kombi ve klima periyodik bakım yaptırmanın avantajı nedir?',
      a: 'Kombilerde 6 ayda bir, klimalarda ve beyaz eşyalarda yılda bir yapılan düzenli kontroller cihazın ömrünü iki katına çıkarır, enerji tasarrufu sağlar ve yüksek maliyetli arızaların önüne geçer.'
    }
  ]

  const homeFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  }

  return (
    <main className="relative min-h-screen bg-zinc-950 text-slate-100 selection:bg-red-600 selection:text-white pb-28 sm:pb-0 overflow-x-hidden tech-grid-bg">

      {/* SSS Schema Zengin Sonuç Enjeksiyonu */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />

      {/* Arka Plan Işıkları */}
      <div className="pointer-events-none absolute -left-40 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute -right-40 top-1/4 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl -z-10" />

      {/* 1. CANLI SERVİS RADARI */}
      <div className="bg-zinc-900/90 border-b border-zinc-800 text-xs py-2 px-4 backdrop-blur-md">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200 font-medium">
              <strong className="text-white">Canlı Servis Radarı:</strong> Gebze, Darıca & Çayırova Ekiplerimiz Sahada
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-zinc-300">
            <span className="flex items-center gap-1 text-slate-200 font-semibold">
              <Clock className="w-3.5 h-3.5 text-red-500" /> Ortalama Varış: 25 - 45 Dk
            </span>
            <span className="hidden md:inline text-zinc-600">•</span>
            <span className="hidden md:inline text-emerald-400 font-medium">Haftanın 7 Günü Kesintisiz Hizmet</span>
          </div>
        </div>
      </div>

      {/* 2. HEADER */}
      <Navbar phone={phone} cleanPhone={cleanPhone} />

      {/* 3. HERO BÖLÜMÜ */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto text-center relative z-10">

          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700/80 text-zinc-200 text-xs font-extrabold px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>Gebze & Darıca Genelinde Aynı Gün Yerinde Garantili Teknik Servis</span>
          </div>

          <h1 className="text-[1.85rem] xs:text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black text-white tracking-tight leading-tight sm:leading-none">
            Türkyılmaz Servis – <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-zinc-400">
              Gebze & Darıca Teknik Servis
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Türkyılmaz Teknik Servis olarak Gebze, Darıca ve Çayırova'da buzdolabı, çamaşır makinesi, bulaşık makinesi, klima ve kombi arızalarına yerinde müdahale ediyoruz. Dürüst arıza tespiti ve <strong className="text-white font-bold underline decoration-red-600 underline-offset-4">6 ay parça garantisi</strong> ile adresinizde kalıcı çözümler.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`tel:${cleanPhone}`}
              className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 animate-shimmer" />
              <PhoneCall className="w-5 h-5 animate-bounce" />
              <span>Hemen Servis Çağır: {phone}</span>
            </a>

            <Link
              href="/islerimiz"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-bold text-base px-7 py-4 rounded-2xl border border-zinc-700/80 hover:border-zinc-400 shadow-lg transition-all hover:scale-105"
            >
              <Wrench className="w-5 h-5 text-red-500" />
              <span>Sahadan Gerçek İşlerimiz</span>
            </Link>
          </div>

          {/* GÜVEN METRİKLERİ */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto text-left">
            <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition">
              <div className="flex items-center justify-between mb-1.5">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">Hızlı</span>
              </div>
              <p className="text-lg font-black text-white tracking-tight">25-45 Dk</p>
              <p className="text-xs text-zinc-400">Ortalama Adrese Varış</p>
            </div>

            <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition">
              <div className="flex items-center justify-between mb-1.5">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                <span className="text-[10px] font-bold text-slate-200 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded-full">Resmi Belge</span>
              </div>
              <p className="text-lg font-black text-white tracking-tight">6 Ay Garanti</p>
              <p className="text-xs text-zinc-400">Değişen Parçalara</p>
            </div>

            <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition">
              <div className="flex items-center justify-between mb-1.5">
                <Wrench className="w-5 h-5 text-red-500" />
                <span className="text-[10px] font-bold text-slate-200 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded-full">%100</span>
              </div>
              <p className="text-lg font-black text-white tracking-tight">Orijinal Parça</p>
              <p className="text-xs text-zinc-400">Fabrika Onaylı Ürün</p>
            </div>

            <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition">
              <div className="flex items-center justify-between mb-1.5">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-[10px] font-bold text-slate-300 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded-full">Mobil</span>
              </div>
              <p className="text-lg font-black text-white tracking-tight">Yerinde Onarım</p>
              <p className="text-xs text-zinc-400">Evinizde Gözünüz Önünde</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. TÜM 13 MARKAYI İÇEREN KAYAN MARKA ŞERİDİ */}
      <section className="py-4 border-y border-zinc-800 bg-zinc-950 overflow-hidden">
        <div className="flex items-center">
          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-xs font-bold px-4 py-2 rounded-xl transition cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                <span>{brand} Beyaz Eşya Servisi</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HİZMETLERİMİZ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-zinc-300 tracking-wider uppercase bg-zinc-900 px-4 py-1.5 rounded-full border border-zinc-700">
            Hizmetlerimiz
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 tracking-tight">
            Tamir & Periyodik Bakım Çözümlerimiz
          </h2>
          <p className="text-zinc-300 mt-2 text-sm sm:text-base">
            Gereksiz parça masrafı ödemeden önce bize danışın. Yerinde doğru teşhis, garantili sonuç.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item: any) => (
            <div
              key={item._id}
              className="bg-zinc-900/90 rounded-3xl border border-zinc-800 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-600 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 text-red-500 flex items-center justify-center font-bold mb-5">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-white leading-snug">{item.title}</h3>
                <p className="text-xs text-zinc-300 mt-2.5 leading-relaxed">{item.description}</p>
                {item.features && (
                  <ul className="mt-4 space-y-2 border-t border-zinc-800/80 pt-3">
                    {item.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="text-xs text-zinc-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <a
                href={`tel:${cleanPhone}`}
                className="mt-6 inline-flex items-center justify-center gap-1.5 w-full text-xs font-bold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 py-3 rounded-xl transition duration-200"
              >
                <span>Ustamıza Danış</span>
                <ChevronRight className="w-3.5 h-3.5 text-red-500" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. BÖLGESEL SEO MERKEZİ & HIZLI ERİŞİM (GEBZE & DARICA) */}
      {/* GOOGLE'IN DİZİNE EKLEMESİNİ SAĞLAYAN GÜÇLÜ İÇ LİNKLEME AĞI */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1440px] mx-auto border-t border-zinc-900">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-400 tracking-wider uppercase bg-red-950/60 px-4 py-1.5 rounded-full border border-red-600/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hizmet Ağımız ve Popüler Çözümler</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Gebze ve Darıca Teknik Servis Noktalarımız
          </h2>
          <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
            İlçenizi ve arızalı cihazınızı seçerek aynı gün yerinde servis talebi oluşturun. 6 ay garantili parça değişimi.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Kolon 1: Gebze Teknik Servis & Hizmetleri */}
          <div className="bg-zinc-900/90 rounded-3xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition">
            <div>
              <div className="flex items-center gap-2.5 text-red-500 font-extrabold text-base mb-2">
                <MapPin className="w-5 h-5 shrink-0" />
                <h3>Gebze Teknik Servis</h3>
              </div>
              <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                Gebze merkez, Yenikent, Arapçeşme, Gaziler, Osman Yılmaz ve tüm mahallelerde 25-45 dk adrese varış:
              </p>
              <div className="space-y-2">
                <Link
                  href="/gebze-teknik-servis"
                  className="group flex items-center justify-between text-xs font-bold text-white bg-zinc-950/80 hover:bg-red-600/20 border border-zinc-800 hover:border-red-500/50 p-3 rounded-xl transition"
                >
                  <span>Gebze Teknik Servis (Genel)</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-red-400 transition" />
                </Link>
                <Link
                  href="/gebze-beyaz-esya-servisi"
                  className="group flex items-center justify-between text-xs font-bold text-zinc-200 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-3 rounded-xl transition"
                >
                  <span>Gebze Beyaz Eşya Servisi</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/gebze-buzdolabi-servisi"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Gebze Buzdolabı Servisi & Gaz Dolumu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/gebze-camasir-makinesi-servisi"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Gebze Çamaşır Makinesi Tamiri & Kazan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/gebze-bulasik-makinesi-servisi"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Gebze Bulaşık Makinesi Servisi</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/gebze-kombi-servisi"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Gebze Kombi Bakımı & Petek Temizliği</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/gebze-klima-servisi"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Gebze Klima Servisi & Gaz Şarjı</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-zinc-800 text-[11px] text-zinc-400">
              <span className="font-bold text-white">Popüler Markalar: </span>
              <Link href="/gebze-arcelik-servisi" className="hover:text-red-400 transition underline underline-offset-2 mr-2">Arçelik</Link>
              <Link href="/gebze-beko-servisi" className="hover:text-red-400 transition underline underline-offset-2 mr-2">Beko</Link>
              <Link href="/gebze-samsung-servisi" className="hover:text-red-400 transition underline underline-offset-2 mr-2">Samsung</Link>
              <Link href="/gebze-vestel-servisi" className="hover:text-red-400 transition underline underline-offset-2">Vestel</Link>
            </div>
          </div>

          {/* Kolon 2: Darıca Teknik Servis & Hizmetleri */}
          <div className="bg-zinc-900/90 rounded-3xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition">
            <div>
              <div className="flex items-center gap-2.5 text-red-500 font-extrabold text-base mb-2">
                <MapPin className="w-5 h-5 shrink-0" />
                <h3>Darıca Teknik Servis (Atölye Merkezimiz)</h3>
              </div>
              <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                Fevziçakmak, Bayramoğlu, Piri Reis, Nenehatun, Kazımkarabekir ve tüm Darıca genelinde 20-30 dk ulaşım:
              </p>
              <div className="space-y-2">
                <Link
                  href="/darica-teknik-servis"
                  className="group flex items-center justify-between text-xs font-bold text-white bg-zinc-950/80 hover:bg-red-600/20 border border-zinc-800 hover:border-red-500/50 p-3 rounded-xl transition"
                >
                  <span>Darıca Teknik Servis (Merkez)</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-red-400 transition" />
                </Link>
                <Link
                  href="/darica-beyaz-esya-servisi"
                  className="group flex items-center justify-between text-xs font-bold text-zinc-200 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-3 rounded-xl transition"
                >
                  <span>Darıca Beyaz Eşya Servisi</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/darica-buzdolabi-tamiri"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Darıca Buzdolabı Tamiri & Gaz Dolumu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/darica-camasir-makinesi-tamiri"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Darıca Çamaşır Makinesi Tamiri & Rulman</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/darica-bulasik-makinesi-servisi"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Darıca Bulaşık Makinesi Servisi</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/darica-kombi-servisi"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Darıca Kombi Bakımı & Petek Temizliği</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/darica-klima-servisi"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Darıca Klima Servisi & Gaz Dolumu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-zinc-800 text-[11px] text-zinc-400">
              <span className="font-bold text-white">Marka Servisleri: </span>
              <Link href="/darica-arcelik-servisi" className="hover:text-red-400 transition underline underline-offset-2 mr-2">Darıca Arçelik</Link>
              <Link href="/darica-beko-servisi" className="hover:text-red-400 transition underline underline-offset-2">Darıca Beko</Link>
            </div>
          </div>

          {/* Kolon 3: Çayırova & Tuzla Şifa Mobil Hatları */}
          <div className="bg-zinc-900/90 rounded-3xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition">
            <div>
              <div className="flex items-center gap-2.5 text-red-500 font-extrabold text-base mb-2">
                <MapPin className="w-5 h-5 shrink-0" />
                <h3>Çayırova & Çevre Bölgeler</h3>
              </div>
              <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                Yenimahalle, Özgürlük, Akse, Dilovası ve Tuzla Şifa Mahallesine aynı gün yerinde servis:
              </p>
              <div className="space-y-2">
                <Link
                  href="/cayirova-teknik-servis"
                  className="group flex items-center justify-between text-xs font-bold text-white bg-zinc-950/80 hover:bg-red-600/20 border border-zinc-800 hover:border-red-500/50 p-3 rounded-xl transition"
                >
                  <span>Çayırova Teknik Servis (Genel)</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-red-400 transition" />
                </Link>
                <Link
                  href="/cayirova-beyaz-esya-servisi"
                  className="group flex items-center justify-between text-xs font-bold text-zinc-200 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-3 rounded-xl transition"
                >
                  <span>Çayırova Beyaz Eşya Servisi</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/cayirova-buzdolabi-servisi"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Çayırova Buzdolabı Tamiri</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/cayirova-camasir-makinesi-servisi"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Çayırova Çamaşır Makinesi Tamiri</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/tuzla-beyaz-esya-servisi"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Tuzla & Şifa Mahallesi Servisi</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/periyodik-bakim"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Kombi & Klima Periyodik Bakım Kaydı</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
                <Link
                  href="/blog"
                  className="group flex items-center justify-between text-xs font-semibold text-zinc-300 bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-800/80 p-2.5 rounded-xl transition"
                >
                  <span>Arıza Kütüphanesi & Hata Kodları</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
                </Link>
              </div>
            </div>
            <div className="mt-5 p-3 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">Acil Servis Hattı</p>
                <p className="text-[10px] text-zinc-400">Tek tıkla ustamıza bağlanın.</p>
              </div>
              <a
                href={`tel:${cleanPhone}`}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition shadow-sm"
              >
                0552 116 41 28
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 7. GALERİ */}
      <RepairGallery items={caseStudies} />

      {/* 8. BÖLGESEL SEO BİLGİLENDİRME BLOĞU */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1440px] mx-auto">
        <div className="bg-zinc-900/80 p-6 sm:p-8 rounded-3xl border border-zinc-800 text-xs text-zinc-300 space-y-3 leading-relaxed">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Building2 className="w-4 h-4 text-red-500" />
            Türkyılmaz Servis – Gebze & Darıca Yetkili Standartlarında Özel Teknik Servis
          </h2>
          <p>
            Türkyılmaz Beyaz Eşya ve Teknik Servis olarak; <strong>Gebze</strong>, <strong>Darıca</strong>, <strong>Çayırova</strong> ve <strong>Dilovası</strong> başta olmak üzere Kocaeli genelinde <strong>Arçelik</strong>, <strong>Beko</strong>, <strong>Samsung</strong>, <strong>Grundig</strong>, <strong>Altus</strong>, <strong>Vestel</strong>, <strong>Regal</strong>, <strong>Keysmart</strong>, <strong>Flavel</strong>, <strong>Finlux</strong>, <strong>SEG</strong>, <strong>Kumtel</strong> ve <strong>Eminçelik</strong> markalarının buzdolabı motor değişimi, kompresör gaz şarjı, çamaşır makinesi presli kazan onarımı, bulaşık makinesi sirkülasyon rezistansı ve tahliye pompa tamiri, ankastre set üstü ocak temperli cam değişimi ile klima gaz dolumu ve kombi ilaçlı petek temizliği alanında yerinde garantili hizmet sağlamaktayız.
          </p>
          <p>
            Darıca Fevziçakmak Mahallesi atölyemizden hareket eden donanımlı mobil gezici araçlarımız, adresinize gelerek cihazınızı yerinde test eder ve değişen her orijinal parçaya 6 ay resmi Türkyılmaz Servis garanti formu sunar.
          </p>
        </div>
      </section>

      {/* 9. HARİTA BÖLÜMÜ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1440px] mx-auto">
        <div className="bg-zinc-900/90 rounded-3xl border border-zinc-800 p-6 sm:p-10 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-zinc-300 tracking-wider uppercase bg-zinc-800 px-4 py-1.5 rounded-full border border-zinc-700">
                Mobil Servis Ağı
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 tracking-tight">
                Gebze, Darıca, Çayırova ve Kocaeli'de Kapınızdayız
              </h2>
              <p className="text-zinc-300 mt-3 text-sm leading-relaxed">
                Tam donanımlı mobil araçlarımızla parça bekleme derdi olmadan arızanızı adresinizde gözünüzün önünde çözüyoruz.
              </p>

              <div className="mt-6">
                <p className="text-xs font-bold text-zinc-100 uppercase tracking-wider mb-3">
                  Gezici Ekiplerin Ulaştığı İlçeler:
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area: string, idx: number) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1.5 rounded-xl"
                    >
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">Adresinize Servis Çağırın</p>
                  <p className="text-[11px] text-zinc-400">Arayıp aynı gün servis randevusu oluşturun.</p>
                </div>
                <a
                  href={`tel:${cleanPhone}`}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-md"
                >
                  Hemen Ara
                </a>
              </div>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-2xl border border-zinc-800 overflow-hidden bg-black">
              <iframe
                title="Türkyılmaz Teknik Servis Hizmet Bölgesi"
                src="https://maps.google.com/maps?q=Kocaeli,%20T%C3%BCrkiye&t=&z=10&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. SSS */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-zinc-300 tracking-wider uppercase bg-zinc-900 px-4 py-1.5 rounded-full border border-zinc-700">
            Aklınıza Takılanlar
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-3 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-zinc-300 mt-2 text-sm">
            Gebze ve Darıca beyaz eşya, ankastre, klima ve kombi tamir süreçleriyle ilgili tüm merak edilenler.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/90 p-6 rounded-2xl border border-zinc-800"
            >
              <h3 className="font-bold text-white text-sm sm:text-base flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-3 pl-7 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. ACİL ÇAĞRI BANNERI */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Cihazınızda Bir Arıza mı Var?
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            Gereksiz parça masrafı ödemeden önce bize danışın. Adresinizde yerinde kontrol edip 6 ay garantili kalıcı çözümü üretelim.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${cleanPhone}`}
              className="relative overflow-hidden inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 animate-shimmer" />
              <PhoneCall className="w-5 h-5 text-white" />
              <span>{phone} Nolu Hattı Ara</span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-black text-zinc-300 py-14 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 text-xs">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-zinc-900">
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <Image src="/logo.png" alt="Türkyılmaz Servis" fill className="object-contain p-1" />
              </div>
              <div>
                <p className="font-extrabold text-white text-base">TÜRKYILMAZ SERVİS</p>
                <p className="text-xs text-zinc-400 font-semibold">Gebze & Darıca Teknik Servis</p>
              </div>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
              Gebze, Darıca, Çayırova ve Kocaeli genelinde buzdolabı, çamaşır, bulaşık makinesi, klima ve kombi arızalarında 6 ay parça garantili yerinde servis.
            </p>
          </div>

          {/* Gebze & Darıca Linkleri */}
          <div>
            <p className="font-bold text-white text-sm uppercase tracking-wider mb-3">Gebze Servis Noktaları</p>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="/gebze-teknik-servis" className="hover:text-white transition">Gebze Teknik Servis</Link></li>
              <li><Link href="/gebze-beyaz-esya-servisi" className="hover:text-white transition">Gebze Beyaz Eşya Servisi</Link></li>
              <li><Link href="/gebze-buzdolabi-servisi" className="hover:text-white transition">Gebze Buzdolabı Servisi</Link></li>
              <li><Link href="/gebze-camasir-makinesi-servisi" className="hover:text-white transition">Gebze Çamaşır Makinesi Tamiri</Link></li>
              <li><Link href="/gebze-bulasik-makinesi-servisi" className="hover:text-white transition">Gebze Bulaşık Makinesi Servisi</Link></li>
              <li><Link href="/gebze-kombi-servisi" className="hover:text-white transition">Gebze Kombi & Petek Temizliği</Link></li>
              <li><Link href="/gebze-klima-servisi" className="hover:text-white transition">Gebze Klima Bakımı</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white text-sm uppercase tracking-wider mb-3">Darıca & Çayırova Servis</p>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="/darica-teknik-servis" className="hover:text-white transition">Darıca Teknik Servis</Link></li>
              <li><Link href="/darica-beyaz-esya-servisi" className="hover:text-white transition">Darıca Beyaz Eşya Servisi</Link></li>
              <li><Link href="/darica-buzdolabi-tamiri" className="hover:text-white transition">Darıca Buzdolabı Tamiri</Link></li>
              <li><Link href="/darica-camasir-makinesi-tamiri" className="hover:text-white transition">Darıca Çamaşır Makinesi Tamiri</Link></li>
              <li><Link href="/darica-bulasik-makinesi-servisi" className="hover:text-white transition">Darıca Bulaşık Makinesi Servisi</Link></li>
              <li><Link href="/cayirova-teknik-servis" className="hover:text-white transition">Çayırova Teknik Servis</Link></li>
              <li><Link href="/cayirova-beyaz-esya-servisi" className="hover:text-white transition">Çayırova Beyaz Eşya Servisi</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white text-sm uppercase tracking-wider mb-3">İletişim & Adres</p>
            <div className="space-y-2.5 text-zinc-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{shopAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${cleanPhone}`} className="text-white font-bold hover:text-red-500 transition">{phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>08:30 - 20:30 (Pazar Nöbetçi Ekip)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <p>© {new Date().getFullYear()} Türkyılmaz Beyaz Eşya & Teknik Servis. Tüm hakları saklıdır.</p>

          <a
            href="https://affan-portfolio-gilt.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 px-3.5 py-1.5 rounded-full transition-colors shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:animate-ping" />
            <span className="text-zinc-400 group-hover:text-zinc-200 transition">Tasarım & Yazılım:</span>
            <span className="font-bold text-zinc-200 group-hover:text-white transition">
              CCN Teknoloji
            </span>
          </a>
        </div>
      </footer>

      {/* 13. WHATSAPP & MOBİL STICKY BAR */}
      <WhatsappWidget phone={phone} />

    </main>
  )
}