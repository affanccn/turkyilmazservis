import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import WhatsappWidget from '@/components/WhatsappWidget'
import { client, urlFor } from '@/sanity/lib/client'
import { 
  PhoneCall, 
  MessageCircle, 
  ArrowLeft, 
  Clock, 
  Wrench, 
  ShieldCheck, 
  AlertTriangle 
} from 'lucide-react'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 60

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })

  if (!post) return {}

  return {
    title: `${post.title} | Türkyılmaz Servis Rehberi`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })

  if (!post) {
    notFound()
  }

  const phone = '0552 116 41 28'
  const cleanPhone = phone.replace(/\s+/g, '').replace('+', '')
  const waLink = `https://wa.me/905521164128?text=${encodeURIComponent(`Merhaba, "${post.title}" yazınızı okudum. Cihazımdaki arıza için yerinde servis talep etmek istiyorum.`)}`
  const imgUrl = post.coverImage ? urlFor(post.coverImage).url() : '/galeri/b1.jpeg'

  // Google Arama Motoru İçin Article Şeması
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Türkyılmaz Beyaz Eşya Servisi',
    },
  }

  return (
    <main className="relative min-h-screen bg-zinc-950 text-slate-100 selection:bg-red-600 selection:text-white pb-28 sm:pb-12 overflow-hidden tech-grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar phone={phone} cleanPhone={cleanPhone} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Geri Dön Linki */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Tüm Arıza Rehberlerine Dön
        </Link>

        {/* Başlık Alanı */}
        <header className="space-y-4 mb-8">
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider bg-red-950/60 px-3 py-1 rounded-full border border-red-600/30">
            Arıza Teşhis & Çözüm Rehberi
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
            {post.excerpt}
          </p>
        </header>

        {/* Kapak Görseli */}
        <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden bg-black border border-zinc-800 mb-10">
          <Image src={imgUrl} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Yazı Metin İçeriği (Paragraflara Bölünmüş Temiz Okuma Alanı) */}
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-10 mb-10 text-zinc-200 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
          {post.content}
        </div>

        {/* ARIZA ÇÖZÜLMEDİYSE DİREKT SERVİS ÇAĞRI KARTI (EN ÇOK DÖNÜŞÜM ALACAK BÖLÜM) */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-600/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-black text-white">
                Bu Adımlar Sorununuzu Çözmedi mi?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Elektronik kart, motor veya rezistans gibi iç donanım arızalarında cihazı zorlamak daha büyük masraflara yol açabilir. <strong>Gebze, Darıca ve Çayırova</strong> bölgesindeki gezici aracımızla adresinize gelip aynı gün garantili onarım yapalım.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-red-600/25 transition hover:scale-105"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>Hemen Ara: {phone}</span>
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-zinc-700 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp'tan Arıza Bildir</span>
            </a>
          </div>
        </div>

      </article>

      <WhatsappWidget phone={phone} />
    </main>
  )
}
