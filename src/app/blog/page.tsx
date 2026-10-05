import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import WhatsappWidget from '@/components/WhatsappWidget'
import { client, urlFor } from '@/sanity/lib/client'
import { BookOpen, Calendar, ArrowRight, Wrench, PhoneCall } from 'lucide-react'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Arıza Teşhis Rehberi & Hata Kodları | Türkyılmaz Servis',
  description: 'Beyaz eşya arızaları, hata kodları ve evde uygulanabilecek pratik çözüm rehberleri. Gebze, Darıca ve Çayırova teknik destek.',
  alternates: {
    canonical: '/blog',
  },
}

async function getPosts() {
  try {
    const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)`)
    return posts || []
  } catch {
    return []
  }
}

export default async function BlogIndexPage() {
  const posts = await getPosts()
  const phone = '0552 116 41 28'
  const cleanPhone = phone.replace(/\s+/g, '').replace('+', '')

  return (
    <main className="relative min-h-screen bg-zinc-950 text-slate-100 selection:bg-red-600 selection:text-white pb-28 sm:pb-12 overflow-hidden tech-grid-bg">
      <Navbar phone={phone} cleanPhone={cleanPhone} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-red-500 tracking-wider uppercase bg-red-950/60 px-4 py-1.5 rounded-full border border-red-600/30">
            Arıza Çözüm Kütüphanesi
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Beyaz Eşya Hata Kodları & Tamir Rehberi
          </h1>
          <p className="text-zinc-300 mt-3 text-sm sm:text-base leading-relaxed">
            Cihazınız arızalandığında panik yapmayın. Karşılaştığınız hata kodunun ne anlama geldiğini ve güvenli ilk kontrolleri rehberlerimizden öğrenin.
          </p>
        </div>

        {/* Blog Kartları Listesi */}
        {posts.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center max-w-md mx-auto">
            <BookOpen className="w-10 h-10 text-zinc-500 mx-auto mb-3" />
            <p className="text-white font-bold text-base">Rehberler Hazırlanıyor</p>
            <p className="text-xs text-zinc-400 mt-1">
              İlk arıza teşhis rehberimiz yakında burada yayınlanacaktır.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => {
              const postUrl = `/blog/${post.slug?.current || post.slug}`
              const imgUrl = post.coverImage ? urlFor(post.coverImage).url() : '/galeri/b1.jpeg'

              return (
                <article
                  key={post._id}
                  className="bg-zinc-900/90 rounded-3xl border border-zinc-800 overflow-hidden hover:border-zinc-600 transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 w-full bg-black overflow-hidden">
                      <Image
                        src={imgUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[11px] text-zinc-400 mb-2">
                        <Calendar className="w-3.5 h-3.5 text-red-500" />
                        <span>
                          {new Date(post.publishedAt || Date.now()).toLocaleDateString('tr-TR')}
                        </span>
                      </div>
                      <h2 className="text-base font-bold text-white group-hover:text-red-400 transition leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-xs text-zinc-300 mt-2.5 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={postUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 hover:text-white transition"
                    >
                      <span>Çözüm Adımlarını Oku</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>

      <WhatsappWidget phone={phone} />
    </main>
  )
}
