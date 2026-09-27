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
  Radio, 
  Building2, 
  PackageCheck,
  CreditCard
} from 'lucide-react'

export const revalidate = 60

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
        serviceAreas: ['Gebze', 'Darıca', 'Çayırova', 'Dilovası', 'Körfez', 'İzmit', 'Gölcük', 'Derince', 'Pendik', 'Kartal', 'Tuzla', 'Şifa']
      }, 
      services: activeServices, 
      caseStudies 
    }
  } catch (error) {
    return { 
      settings: {
        phone: '0552 116 41 28',
        siteName: 'Türkyılmaz Beyaz Eşya Servisi',
        address: 'Fevziçakmak Mah. Doktor Zeki Acar Cad., Şebnem Sk. No:11, Darıca/Kocaeli',
        serviceAreas: ['Gebze', 'Darıca', 'Çayırova', 'Dilovası', 'Körfez', 'İzmit', 'Gölcük', 'Derince', 'Pendik', 'Kartal', 'Tuzla', 'Şifa']
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
    : ['Gebze', 'Darıca', 'Çayırova', 'Dilovası', 'Körfez', 'İzmit', 'Gölcük', 'Derince', 'Pendik', 'Kartal', 'Tuzla', 'Şifa']

  // Görseldeki 13 markanın tam listesi
  const brands = [
    'Arçelik', 'Beko', 'Samsung', 'Grundig', 'Altus', 'Vestel', 'Regal', 
    'Keysmart', 'Flavel', 'Finlux', 'SEG', 'Kumtel', 'Eminçelik'
  ]

  const faqs = [
    {
      q: 'Arıza tespiti ve servis süreci nasıl işliyor?',
      a: 'Bizi arayıp arıza bildiriminde bulunduğunuzda, gezici servis ekibimiz aynı gün adresinize yönlendirilir. Cihazınız yerinde incelenir, doğrudan arıza teşhis edilir ve onayınızla işlem yapılır.'
    },
    {
      q: 'Yapılan tamir ve değişen parçalar garantili mi?',
      a: 'Evet! Değiştirilen tüm orijinal yedek parçalar ve uzman işçiliğimiz 6 ay süresince resmi Türkyılmaz Servis garantisi altındadır.'
    },
    {
      q: 'Hangi cihaz ve markalara hizmet veriyorsunuz?',
      a: 'Arçelik, Beko, Samsung, Grundig, Altus, Vestel, Regal, Keysmart, Flavel, Finlux, SEG, Kumtel ve Eminçelik başta olmak üzere tüm buzdolabı, çamaşır, bulaşık, fırın, ankastre ocak, kurutma makineleri ile klima ve kombilere servis desteği sağlıyoruz.'
    },
    {
      q: 'Gebze, Darıca ve Çayırova dışındaki ilçelere servisiniz var mı?',
      a: 'Evet. Mobil gezici araçlarımızla Gebze, Darıca, Çayırova ve Dilovası başta olmak üzere Kocaeli geneline aynı gün servis yönlendiriyoruz.'
    },
    {
      q: 'Periyodik bakım yaptırmanın avantajı nedir?',
      a: 'Kombilerde 6 ayda bir, beyaz eşyalarda yılda bir yapılan düzenli kontroller cihazın ömrünü iki katına çıkarır, enerji tasarrufu sağlar ve yüksek maliyetli arızaların önüne geçer.'
    }
  ]

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-red-600 selection:text-white pb-28 sm:pb-0 overflow-x-hidden tech-grid-bg">
      
      {/* 1. CANLI SERVİS RADARI */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2 px-4">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-medium">
              <strong className="text-white">Canlı Servis Radarı:</strong> Gebze, Darıca & Çayırova Ekiplerimiz Sahada
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
              <Clock className="w-3.5 h-3.5 text-red-500" /> Ortalama Varış: 25 - 45 Dk
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-emerald-400 font-medium">Haftanın 7 Günü Kesintisiz Hizmet</span>
          </div>
        </div>
      </div>

      {/* 2. HEADER */}
      <Navbar phone={phone} cleanPhone={cleanPhone} />

      {/* 3. HERO / MANŞET BÖLÜMÜ (AYDINLIK & KAVİSLİ BEYAZ EŞYA GÖRSELLİ) */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* SOL KOLON: BAŞLIK, AÇIKLAMA VE BUTONLAR */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 text-red-700 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
                <Radio className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                <span>Gebze, Darıca & Çayırova Genelinde Aynı Gün Yerinde Servis</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Gebze, Darıca & Çayırova <br />
                <span className="text-red-600">Beyaz Eşya, Klima & Kombi Servisi</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Arçelik, Beko, Samsung, Grundig, Altus, Vestel, Regal, Keysmart, Flavel, Finlux, SEG, Kumtel ve Eminçelik cihazlarınızda dürüst arıza tespiti ve <strong className="text-slate-900 font-bold underline decoration-red-500 underline-offset-4">6 ay parça garantisi</strong> ile adresinizde tamir çözümleri.
              </p>

              {/* Butonlar */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={`tel:${cleanPhone}`}
                  className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-red-600/25 hover:shadow-red-600/40 transition-all hover:scale-105 active:scale-95 text-center"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 animate-shimmer" />
                  <PhoneCall className="w-5 h-5 animate-bounce" />
                  <span>Hemen Servis Çağır: {phone}</span>
                </a>

                <Link
                  href="/yedek-parca"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base px-6 py-4 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all hover:scale-105 text-center"
                >
                  <PackageCheck className="w-5 h-5 text-red-600" />
                  <span>Yedek Parça Kataloğu</span>
                </Link>
              </div>

            </div>

            {/* SAĞ KOLON: KAVİSLİ BEYAZ EŞYA GÖRSELİ VE YAN ROZETLER */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Arka Kavisli Zemin & Cihaz Görseli */}
                <div className="relative z-10 w-full h-72 sm:h-84 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-tr from-red-100 via-rose-50 to-white p-4 flex items-center justify-center border border-red-200/60 shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80"
                    alt="Türkyılmaz Servis Beyaz Eşya ve Kombi Tamiri"
                    fill
                    className="object-cover rounded-2xl mix-blend-multiply opacity-95 hover:scale-105 transition duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                </div>

                {/* Sağ Görsel Üstü 2 Mini Rozet */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase">Hızlı Servis</p>
                      <p className="text-xs font-black text-slate-900">Aynı Gün Yerinde</p>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase">Ödeme Kolaylığı</p>
                      <p className="text-xs font-black text-slate-900">Kapıda Kredi Kartı</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ALT GÜVEN METRİKLERİ (4'LÜ ÇERÇEVE) */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto text-left">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-6 h-6 text-red-600" />
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Hızlı</span>
              </div>
              <p className="text-xl font-black text-slate-900 tracking-tight">25-45 Dk</p>
              <p className="text-xs text-slate-500 mt-0.5">Ortalama Adrese Varış</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <ShieldCheck className="w-6 h-6 text-red-600" />
                <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">Resmi Belge</span>
              </div>
              <p className="text-xl font-black text-slate-900 tracking-tight">6 Ay Garanti</p>
              <p className="text-xs text-slate-500 mt-0.5">Değişen Parçalara</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <Wrench className="w-6 h-6 text-red-600" />
                <span className="text-[10px] font-extrabold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">%100</span>
              </div>
              <p className="text-xl font-black text-slate-900 tracking-tight">Orijinal Parça</p>
              <p className="text-xs text-slate-500 mt-0.5">Fabrika Onaylı Ürün</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <MapPin className="w-6 h-6 text-red-600" />
                <span className="text-[10px] font-extrabold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">Mobil</span>
              </div>
              <p className="text-xl font-black text-slate-900 tracking-tight">Yerinde Onarım</p>
              <p className="text-xs text-slate-500 mt-0.5">Evinizde Gözünüz Önünde</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. TÜM 13 MARKAYI İÇEREN KAYAN MARKA ŞERİDİ */}
      <section className="py-4 border-y border-slate-200 bg-white overflow-hidden">
        <div className="flex items-center">
          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <div 
                key={i} 
                className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold px-4 py-2 rounded-xl transition cursor-default shadow-2xs"
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
          <span className="text-xs font-bold text-red-600 tracking-wider uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-200">
            Hizmetlerimiz
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Tamir & Periyodik Bakım Çözümlerimiz
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Gereksiz parça masrafı ödemeden önce bize danışın. Yerinde doğru teşhis, garantili sonuç.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item: any) => (
            <div 
              key={item._id} 
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 shadow-xs hover:shadow-md transition"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center font-bold mb-5">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">{item.description}</p>
                {item.features && (
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3">
                    {item.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <a
                href={`tel:${cleanPhone}`}
                className="mt-6 inline-flex items-center justify-center gap-1.5 w-full text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 py-3 rounded-xl transition duration-200"
              >
                <span>Ustamıza Danış</span>
                <ChevronRight className="w-3.5 h-3.5 text-red-600" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GALERİ (SAHADAN İŞLER) */}
      <RepairGallery items={caseStudies} />

      {/* 7. BÖLGESEL SEO BİLGİLENDİRME BLOĞU */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1440px] mx-auto">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 text-xs text-slate-600 space-y-3 leading-relaxed shadow-xs">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Building2 className="w-4 h-4 text-red-600" />
            Gebze, Darıca & Çayırova Beyaz Eşya Servisi, Kombi & Klima Çözümleri
          </h2>
          <p>
            Türkyılmaz Beyaz Eşya Servisi olarak; <strong>Gebze</strong>, <strong>Darıca</strong>, <strong>Çayırova</strong> ve <strong>Dilovası</strong> başta olmak üzere Kocaeli genelinde <strong>Arçelik</strong>, <strong>Beko</strong>, <strong>Samsung</strong>, <strong>Grundig</strong>, <strong>Altus</strong>, <strong>Vestel</strong>, <strong>Regal</strong>, <strong>Keysmart</strong>, <strong>Flavel</strong>, <strong>Finlux</strong>, <strong>SEG</strong>, <strong>Kumtel</strong> ve <strong>Eminçelik</strong> markalarının buzdolabı motor değişimi, çamaşır makinesi kazan onarımı, bulaşık makinesi rezistans ve pompa tamiri, ankastre set üstü ocak tamiri ile klima gaz dolumu ve kombi bakımı alanında yerinde garantili hizmet sağlamaktayız.
          </p>
          <p>
            Darıca Fevziçakmak Mahallesi atölyemizden hareket eden donanımlı gezici servis araçlarımız, adresinize gelerek cihazınızı yerinde test eder ve değişen her parçaya 6 ay resmi servis garantisi sunar.
          </p>
        </div>
      </section>

      {/* 8. HARİTA BÖLÜMÜ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1440px] mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-200">
                Mobil Servis Ağı
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 tracking-tight">
                Gebze, Darıca, Çayırova ve Kocaeli'de Kapınızdayız
              </h2>
              <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                Tam donanımlı mobil araçlarımızla parça bekleme derdi olmadan arızanızı adresinizde gözünüzün önünde çözüyoruz.
              </p>

              <div className="mt-6">
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                  Gezici Ekiplerin Ulaştığı İlçeler:
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area: string, idx: number) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-xl shadow-2xs"
                    >
                      <MapPin className="w-3.5 h-3.5 text-red-600" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">Adresinize Servis Çağırın</p>
                  <p className="text-[11px] text-slate-500">Arayıp aynı gün servis randevusu oluşturun.</p>
                </div>
                <a
                  href={`tel:${cleanPhone}`}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-md"
                >
                  Hemen Ara
                </a>
              </div>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 shadow-inner">
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

      {/* 9. SSS */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-red-600 tracking-wider uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-200">
            Aklınıza Takılanlar
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            Beyaz eşya, ankastre, klima ve kombi tamir süreçleriyle ilgili tüm merak edilenler.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs"
            >
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 pl-7 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. ACİL ÇAĞRI BANNERI */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Cihazınızda Bir Arıza mı Var?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Gereksiz masraf ödemeden önce bize danışın. Adresinizde yerinde kontrol edip kalıcı çözümü üretelim.
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

      {/* 11. FOOTER */}
      <footer className="bg-white text-slate-600 py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-200 text-xs">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white border border-slate-200 p-1 shadow-2xs">
                <Image src="/logo.png" alt="Türkyılmaz Servis" fill className="object-contain p-1" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-base">TÜRKYILMAZ BEYAZ EŞYA SERVİSİ</p>
                <p className="text-xs text-slate-500 font-semibold">Gebze, Darıca & Çayırova Servis Ağı</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-md">
              Arçelik, Beko, Samsung, Grundig, Altus, Vestel, Regal, Keysmart, Flavel, Finlux, SEG, Kumtel ve Eminçelik cihazlarında 6 ay parça garantili yerinde servis hizmeti.
            </p>
          </div>

          <div>
            <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">Sayfalar</p>
            <ul className="space-y-2 text-slate-600">
              <li><Link href="/" className="hover:text-red-600 transition">Ana Sayfa</Link></li>
              <li><Link href="/islerimiz" className="hover:text-red-600 transition">Yapılan Sahadan İşler</Link></li>
              <li><Link href="/yedek-parca" className="hover:text-red-600 transition">Yedek Parça & Ürünler</Link></li>
              <li><Link href="/periyodik-bakim" className="hover:text-red-600 transition">Periyodik Bakım Kaydı</Link></li>
              <li><Link href="/iletisim" className="hover:text-red-600 transition">İletişim & Dükkan Konumu</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">İletişim & Adres</p>
            <div className="space-y-2.5 text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{shopAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-red-600 shrink-0" />
                <a href={`tel:${cleanPhone}`} className="text-slate-900 font-bold hover:text-red-600 transition">{phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>08:30 - 20:30 (Pazar Nöbetçi Ekip)</span>
              </p>
            </div>
          </div>
        </div>

        {/* ALT TELİF & CCN TEKNOLOJİ İMZASI */}
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Türkyılmaz Beyaz Eşya Servisi. Tüm hakları saklıdır.</p>
          
          <a
            href="https://affan-portfolio-gilt.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 px-3.5 py-1.5 rounded-full transition-colors shadow-2xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:animate-ping" />
            <span className="text-slate-500 group-hover:text-slate-700 transition">Tasarım & Yazılım:</span>
            <span className="font-bold text-slate-800 group-hover:text-slate-900 transition">
              CCN Teknoloji
            </span>
          </a>
        </div>
      </footer>

      {/* 12. WHATSAPP & MOBİL STICKY BAR */}
      <WhatsappWidget phone={phone} />

    </main>
  )
}
