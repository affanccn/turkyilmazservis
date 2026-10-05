import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Arıza Rehberleri (Blog)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Yazı Başlığı / Hata Kodu',
      type: 'string',
      description: 'Örn: Beko Buzdolabı Alt Tarafı Neden Soğutmaz? Çözüm Yolları',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Bağlantısı (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Cihaz Kategorisi',
      type: 'string',
      options: {
        list: [
          { title: 'Buzdolabı Arızaları', value: 'buzdolabi' },
          { title: 'Çamaşır Makinesi Hata Kodları', value: 'camasir' },
          { title: 'Bulaşık Makinesi Arızaları', value: 'bulasik' },
          { title: 'Kurutma Makinesi Çözümleri', value: 'kurutma' },
          { title: 'Kombi & Klima Rehberi', value: 'kombi-klima' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Kısa Özet (Meta Açıklaması)',
      type: 'text',
      rows: 3,
      description: 'Google arama sonuçlarında görünecek 1-2 cümlelik özet.',
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: 'coverImage',
      title: 'Kapak Görseli',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'content',
      title: 'Yazı İçeriği (Detaylı Anlatım)',
      type: 'text',
      rows: 15,
      description: 'Gemini veya ustanın hazırladığı çözüm rehberini, arıza adımlarını buraya yapıştırın.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'coverImage',
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: `Kategori: ${category || 'Genel'}`,
        media,
      }
    },
  },
})
