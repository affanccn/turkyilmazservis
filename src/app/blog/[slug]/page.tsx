import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import WhatsappWidget from '@/components/WhatsappWidget'
import { client, urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { 
  Clock, 
  ArrowLeft, 
  Calendar, 
  Wrench, 
  PhoneCall, 
  CheckCircle2,
  ShieldCheck,
  HelpCircle
} from 'lucide-react'
import type { Metadata } from 'next'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

// Dinamik SEO Bilgileri
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  )

  if (!post) return { title: 'Yazı Bulunamadı | Türkyılmaz Servis' }

  return {
    title: `${post.title} | Arıza Rehberi`,
    description: post.excerpt || `${post.title} arıza tespiti ve tamir rehberi.`,
    alternates: {
      canonical: `https://www.turkyilmazservis.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.turkyilmazservis.com/blog/${slug}`,
      siteName: 'Türkyılmaz Beyaz Eşya Servisi',
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  // Sanity'den yazıyı çek
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  )

  if (!post) {
    notFound()
  }

  const phone = '0552 116 41 28'
  const cleanPhone = phone.replace(/\s+/g, '').replace('+', '')

  return (
    <main className="relative min-h-screen bg-zinc-950 text-slate-100 selection:bg-red-600 selection:text-white pb-28 sm:pb-0 overflow-x-hidden tech-grid-bg">
      <Navbar phone={phone} cleanPhone={cleanPhone} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        
        {/* Geri Dön Butonu */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full transition mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Arıza Rehberine Dön</span>
        </Link>

        {/* Başlık ve Meta Bilgileri */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs text-red-500 font-bold uppercase tracking-wider">
            <span>Arıza Rehberi & Çözüm</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 4 Dk Okuma
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Ana Görsel (Varsa) */}
        {post.mainImage && (
          <div className="relative w-full h-64 sm:h-96 rounded-3xl overflow-hidden border border-zinc-800 mb-10 bg-zinc-900">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Blog İçeriği (PortableText) */}
        <div className="prose prose-invert prose-red max-w-none text-zinc-300 leading-relaxed space-y-4 text-sm sm:text-base border-t border-zinc-800/80 pt-8">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="text-zinc-500 italic">Bu içerik henüz düzenleme aşamasındadır.</p>
          )}
        </div>

        {/* Hızlı Servis Çağrı Kartı */}
        <div className="mt-14 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Arızayı Çözemediniz mi?</span>
            <h3 className="text-xl font-black text-white">Aynı Gün Adresinize Gelelim</h3>
            <p className="text-xs text-zinc-400">Gebze, Darıca ve Çayırova için 30 dakikada yerinde arıza tespiti ve 6 ay parça garantisi.</p>
          </div>
          <a
            href={`tel:${cleanPhone}`}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition shadow-lg shrink-0"
          >
            <PhoneCall className="w-4 h-4 animate-bounce" />
            <span>Hemen Servis Çağır</span>
          </a>
        </div>

      </article>

      {/* FOOTER */}
      <footer className="bg-black text-zinc-400 py-10 px-4 border-t border-zinc-900 text-xs text-center">
        <p>© {new Date().getFullYear()} Türkyılmaz Beyaz Eşya Servisi - Arıza Çözüm Merkezi</p>
      </footer>

      <WhatsappWidget phone={phone} />
    </main>
  )
}
