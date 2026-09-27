'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { PhoneCall, Menu, X, ShieldCheck, Wrench } from 'lucide-react'

interface NavbarProps {
  phone: string
  cleanPhone: string
}

export default function Navbar({ phone, cleanPhone }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/islerimiz', label: 'Yapılan İşler' },
    { href: '/yedek-parca', label: 'Yedek Parça' },
    { href: '/blog', label: 'Arıza Rehberi' },
    { href: '/periyodik-bakim', label: 'Periyodik Bakım' },
    { href: '/iletisim', label: 'İletişim & Konum' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Marka */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                TÜRK<span className="text-red-600">YILMAZ</span>
              </span>
              <span className="block text-[10px] font-bold text-slate-500 tracking-widest uppercase -mt-1">
                Beyaz Eşya Servisi
              </span>
            </div>
          </Link>

          {/* Masaüstü Menü */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-semibold text-slate-600 hover:text-red-600 px-3.5 py-2 rounded-xl hover:bg-slate-100 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Masaüstü Telefon Butonu */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${cleanPhone}`}
              className="relative overflow-hidden inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-red-600/20 hover:scale-105 transition"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>{phone}</span>
            </a>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Menüyü Aç"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-slate-50 px-4 py-2.5 rounded-xl transition"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold text-sm py-3 rounded-xl shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hemen Ara: {phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
