export interface LandingPageData {
  slug: string
  district: string
  brandOrDevice: string
  title: string
  metaTitle: string
  metaDesc: string
  badge: string
  description: string
  commonFaults: string[]
  solutions: string[]
}

export const LANDING_PAGES: LandingPageData[] = [
  // 1. Gebze Marka Sayfaları
  {
    slug: 'gebze-arcelik-servisi',
    district: 'Gebze',
    brandOrDevice: 'Arçelik',
    title: 'Gebze Arçelik Beyaz Eşya Servisi',
    metaTitle: 'Gebze Arçelik Servisi | Garantili Beyaz Eşya Tamiri',
    metaDesc: 'Gebze geneli Arçelik buzdolabı, çamaşır ve bulaşık makinesi tamiri. Orijinal parça, 6 ay resmi garanti, aynı gün yerinde servis: 0552 116 41 28.',
    badge: 'Gebze Bölge Arçelik Çözümleri',
    description: 'Gebze’nin tüm mahallelerine tam donanımlı mobil araçlarımızla aynı gün Arçelik buzdolabı, çamaşır makinesi, bulaşık makinesi ve kurutma cihazları için yerinde arıza tespiti ve onarım hizmeti sağlıyoruz.',
    commonFaults: [
      'Arçelik çamaşır makinesi sıkmada aşırı ses ve sarsıntı yapıyor',
      'Arçelik buzdolabı alt kısmı soğutuyor üst kısmı soğutmuyor',
      'Arçelik bulaşık makinesi suyu ısıtmıyor ve tableti eritmiyor',
      'Kurutma makinesi tamburu dönmüyor ve kurutmuyor'
    ],
    solutions: [
      'Orijinal presli kazan ve amortisör değişimi',
      'Sensör, fan motoru ve gaz kaçağı tespiti',
      'Akış tipi ısıtıcı (rezistans) ve pompa revizyonu',
      'Sıfır tahrik motoru ve kayış hattı yenileme'
    ]
  },
  {
    slug: 'gebze-beko-servisi',
    district: 'Gebze',
    brandOrDevice: 'Beko',
    title: 'Gebze Beko Beyaz Eşya Servisi',
    metaTitle: 'Gebze Beko Servisi | Yerinde Garantili Tamir & Bakım',
    metaDesc: 'Gebze Beko buzdolabı, çamaşır makinesi ve klima arızalarında aynı gün yerinde tamir. 6 ay resmi parça garantisi: 0552 116 41 28.',
    badge: 'Gebze Beko Mobil Servis',
    description: 'Beko marka ev aletlerinizde yaşanan soğutmama, su akıtma, ses yapma ve elektronik arızalara Gebze adresinizde fabrika standartlarında garantili çözümler üretiyoruz.',
    commonFaults: [
      'Beko buzdolabı motor devreye girmiyor (tık tık sesi)',
      'Beko çamaşır makinesi suyu boşaltmıyor ve kapak kilitli kalıyor',
      'Beko bulaşık makinesi sürekli su alıyor veya hata kodu veriyor'
    ],
    solutions: [
      'Orijinal kompresör (motor) ve röle montajı',
      'Manyetik tahliye motoru ve emniyet kilit revizyonu',
      'Ventil ve su sayacı sensör grubu onarımı'
    ]
  },
  {
    slug: 'gebze-samsung-servisi',
    district: 'Gebze',
    brandOrDevice: 'Samsung',
    title: 'Gebze Samsung Beyaz Eşya Servisi',
    metaTitle: 'Gebze Samsung Servisi | Buzdolabı & Çamaşır Makinesi Tamiri',
    metaDesc: 'Gebze Samsung buzdolabı inverter motor tamiri, çamaşır ve bulaşık makinesi yerinde servis desteği: 0552 116 41 28.',
    badge: 'Samsung Cihazları Onarımı',
    description: 'Samsung dijital inverter buzdolabı, EcoBubble çamaşır makinesi ve bulaşık makinelerindeki arızalara Gebze genelinde 6 ay garantili parça montajı yapıyoruz.',
    commonFaults: [
      'Samsung Inverter buzdolabı soğutmuyor ve ekranda hata veriyor',
      'EcoBubble çamaşır makinesi 4E / 5E su tahliye arızası',
      'Samsung bulaşık makinesi alt kartere su sızdırıyor (LC hatası)'
    ],
    solutions: [
      'Inverter anakart ve sensör testi, yerinde onarım',
      'Drenaj pompası ve su seviye prosestat değişimi',
      'Taban sızıntı contaları ve hortum revizyonu'
    ]
  },
  {
    slug: 'gebze-vestel-servisi',
    district: 'Gebze',
    brandOrDevice: 'Vestel',
    title: 'Gebze Vestel Beyaz Eşya Servisi',
    metaTitle: 'Gebze Vestel Servisi | Aynı Gün Yerinde Beyaz Eşya Tamiri',
    metaDesc: 'Gebze Vestel beyaz eşya tamiri. Buzdolabı, çamaşır, bulaşık ve ankastre ocak arızalarında 6 ay garantili servis: 0552 116 41 28.',
    badge: 'Vestel & Regal Tamir Desteği',
    description: 'Vestel ve Regal marka cihazlarınızın mekanik ve kart arızalarını atölyeye götürmeden, adresinizde gözünüzün önünde garantili parçalarla çözüyoruz.',
    commonFaults: [
      'Vestel çamaşır makinesi sıkma yaparken vuruntu yapıyor',
      'Vestel buzdolabı buzluk karlanma yapıyor altı soğutmuyor',
      'Vestel bulaşık makinesi program bitirmiyor'
    ],
    solutions: [
      'Kazan yataklama bilyeleri ve amortisör değişimi',
      'Defrost rezistansı, sensör ve termik onarımı',
      'Elektronik kart revizyonu ve yıkama pompası bakımı'
    ]
  },

  // 2. Darıca Cihaz & Marka Sayfaları
  {
    slug: 'darica-camasir-makinesi-tamiri',
    district: 'Darıca',
    brandOrDevice: 'Çamaşır Makinesi',
    title: 'Darıca Çamaşır Makinesi Tamiri & Kazan Değişimi',
    metaTitle: 'Darıca Çamaşır Makinesi Tamiri | Kazan & Rulman Değişimi',
    metaDesc: 'Darıca çamaşır makinesi tamircisi. Sıkmada ses, su akıtma, pompa ve rulman arızalarına yerinde 6 ay garantili tamir: 0552 116 41 28.',
    badge: 'Darıca Çamaşır Makinesi Uzmanı',
    description: 'Darıca merkezli servisimizle tüm markaların çamaşır makinelerinde rulman dağılması, su boşaltmama, kapak kilidi kırılması ve sarsıntı sorunlarına yerinde garantili çözüm sunuyoruz.',
    commonFaults: [
      'Makine sıkma yaparken helikopter gibi çok yüksek ses çıkarıyor',
      'Kazan dönmüyor, motor uğultu yapıyor',
      'Altından su akıtıyor veya programın ortasında duruyor'
    ],
    solutions: [
      'Fabrika presli komple kazan ve rulman grubu değişimi',
      'Motor kömürü, takometre ve tahrik kayışı yenileme',
      'Körük lastiği ve tahliye hortumu değişimi'
    ]
  },
  {
    slug: 'darica-buzdolabi-tamiri',
    district: 'Darıca',
    brandOrDevice: 'Buzdolabı',
    title: 'Darıca Buzdolabı Tamiri & Gaz Dolumu',
    metaTitle: 'Darıca Buzdolabı Tamiri | Motor Değişimi & Gaz Kaçağı',
    metaDesc: 'Darıca buzdolabı tamircisi. Soğutmama, karlık yapma, motor arızası ve gaz şarjı. 6 ay garantili parça değişimi: 0552 116 41 28.',
    badge: 'Darıca Buzdolabı Servisi',
    description: 'Buzdolabınız yeterince soğutmuyorsa motor değişimi kararı verilmeden önce hassas gaz ve sensör testleri yaparak müşterimizi gereksiz masraftan kurtarıyoruz.',
    commonFaults: [
      'Buzdolabı çalışıyor ama soğutmuyor, yiyecekler bozuluyor',
      'Motor aşırı ısınıyor ve duruyor',
      'Arka kısımdan veya alt kısımdan su akıtıyor'
    ],
    solutions: [
      'Kaçak tespiti ve orijinal R600a / R134a gaz şarjı',
      'Kompresör (motor) ve termik röle değişimi',
      'Sensör, evap fan motoru ve termostat onarımı'
    ]
  },
  {
    slug: 'darica-arcelik-servisi',
    district: 'Darıca',
    brandOrDevice: 'Arçelik',
    title: 'Darıca Arçelik Beyaz Eşya Servisi',
    metaTitle: 'Darıca Arçelik Servisi | Aynı Gün Garantili Tamir',
    metaDesc: 'Darıca Arçelik servisi. Buzdolabı, çamaşır, bulaşık ve klima arızalarında orijinal parça, yerinde 6 ay garanti: 0552 116 41 28.',
    badge: 'Darıca Arçelik Servis Desteği',
    description: 'Darıca Fevziçakmak atölyemizden çıkan araçlarımızla Bayramoğlu, Piri Reis, Nenehatun ve tüm mahallelere dakikalar içinde Arçelik cihaz onarımına ulaşıyoruz.',
    commonFaults: [
      'Arçelik çamaşır makinesi tamburu kilitlendi',
      'Arçelik no-frost buzdolabı alt bölmeyi soğutmuyor',
      'Arçelik bulaşık makinesi suyu tahliye etmiyor'
    ],
    solutions: [
      'Orijinal Arçelik presli kazan montajı',
      'Hava kanalı ve defrost sensör grubu değişimi',
      'Tahliye pompa motoru değişimi'
    ]
  },

  // 3. Çayırova Sayfaları
  {
    slug: 'cayirova-buzdolabi-servisi',
    district: 'Çayırova',
    brandOrDevice: 'Buzdolabı',
    title: 'Çayırova Buzdolabı Tamir Servisi',
    metaTitle: 'Çayırova Buzdolabı Servisi | Garantili Motor & Gaz Tamiri',
    metaDesc: 'Çayırova buzdolabı tamiri. Soğutmama, motor ve gaz arızalarına yerinde 6 ay garantili parça desteği: 0552 116 41 28.',
    badge: 'Çayırova Buzdolabı Tamiri',
    description: 'Çayırova genelinde Arçelik, Beko, Altus, Vestel ve Samsung buzdolaplarınızdaki tüm soğutma arızalarını aynı gün yerinde çözüyoruz.',
    commonFaults: [
      'Buzdolabı üstü buz tutuyor altı ılık kalıyor',
      'Motor çalışırken aşırı sarsıntı ve tıkırtı sesi geliyor',
      'Cihaz sürekli alarm veriyor'
    ],
    solutions: [
      'Damlalık ısıtıcısı ve fan motoru onarımı',
      'Orijinal kompresör montajı',
      'Sensör kalibrasyonu ve elektronik kart onarımı'
    ]
  },
  {
    slug: 'cayirova-camasir-makinesi-servisi',
    district: 'Çayırova',
    brandOrDevice: 'Çamaşır Makinesi',
    title: 'Çayırova Çamaşır Makinesi Servisi',
    metaTitle: 'Çayırova Çamaşır Makinesi Tamiri | Yerinde Garantili Çözüm',
    metaDesc: 'Çayırova çamaşır makinesi tamircisi. Kazan rulman, su akıtma ve kart arızalarında 6 ay garantili parça değişimi: 0552 116 41 28.',
    badge: 'Çayırova Çamaşır Makinesi Servisi',
    description: 'Yenimahalle, Özgürlük, Akse ve Çayırova’nın tüm mahallelerine aynı gün yerinde çamaşır makinesi tamiri hizmeti sunuyoruz.',
    commonFaults: [
      'Çamaşır makinesi sıkmaya geçince yerinden yürüyor',
      'Kapak açılmıyor, çamaşırlar içeride kaldı',
      'Su almıyor veya deterjanı çekmiyor'
    ],
    solutions: [
      'Amortisör ve komple kazan yatak revizyonu',
      'Elektronik kapak kilidi (PTC) değişimi',
      'Su giriş ventili ve deterjan kutusu temizliği'
    ]
  },

  // 4. Bölgesel Klima & Kombi Sayfaları
  {
    slug: 'gebze-klima-servisi',
    district: 'Gebze',
    brandOrDevice: 'Klima',
    title: 'Gebze Klima Bakımı & Gaz Dolumu',
    metaTitle: 'Gebze Klima Servisi | Klima Gaz Dolumu & Bakım',
    metaDesc: 'Gebze klima servisi. R410A / R32 klima gaz dolumu, iç ünite ilaçlı petek temizliği ve kompresör tamiri: 0552 116 41 28.',
    badge: 'Gebze Klima Servisi',
    description: 'Arçelik, Beko, Samsung, Vestel ve tüm marka klimalarınızda soğutmama, gaz kaçağı ve koku problemlerine Gebze genelinde garantili çözümler.',
    commonFaults: [
      'Klima üflüyor ama soğutmuyor / ısıtmıyor',
      'İç üniteden su damlatıyor',
      'Klimadan kötü koku geliyor ve performans düştü'
    ],
    solutions: [
      'Manometre ile gaz basınç testi ve orijinal gaz dolumu',
      'Drenaj hortumu ve eğim ayarı düzeltmesi',
      'Antibakteriyel kimyasal ilaçlı serpantin temizliği'
    ]
  },
  {
    slug: 'gebze-kombi-servisi',
    district: 'Gebze',
    brandOrDevice: 'Kombi',
    title: 'Gebze Kombi Bakımı & Petek Temizliği',
    metaTitle: 'Gebze Kombi Servisi | Petek Temizliği & Periyodik Bakım',
    metaDesc: 'Gebze kombi tamiri ve periyodik bakım. Makineli petek temizliği, bar düşmesi ve ateşleme arızalarında uzman servis: 0552 116 41 28.',
    badge: 'Gebze Kombi & Isıtma Çözümleri',
    description: 'DemirDöküm, Baymak ve lider marka kombilerinizde kış öncesi ve sonrası detaylı mekanik bakım ve ilaçlı petek temizliği hizmeti.',
    commonFaults: [
      'Kombi su basıncı (bar) sürekli düşüyor',
      'Peteklerin altı soğuk üstü sıcak kalıyor',
      'Sıcak su açılınca kombi ateşleme yapmıyor'
    ],
    solutions: [
      'Genleşme tankı azot basınç dolumu ve emniyet ventili değişimi',
      'Çift yönlü kimyasallı makineli radyatör temizliği',
      'NTC sıcak su sensörü ve üç yollu vana tamiri'
    ]
  },

  // 5. Tuzla & Pendik Sayfaları
  {
    slug: 'tuzla-beyaz-esya-servisi',
    district: 'Tuzla',
    brandOrDevice: 'Beyaz Eşya',
    title: 'Tuzla & Şifa Beyaz Eşya Servisi',
    metaTitle: 'Tuzla Beyaz Eşya Servisi | Şifa Mahallesi Tamir Servisi',
    metaDesc: 'Tuzla ve Şifa Mahallesi Arçelik, Beko, Samsung buzdolabı, çamaşır, bulaşık tamiri. Yerinde 6 ay garantili parça: 0552 116 41 28.',
    badge: 'Tuzla & Şifa Mobil Servis',
    description: 'Tuzla ve Şifa Mahallesi sakinlerine en yakın mobil servis araçlarımızla aynı gün buzdolabı, çamaşır ve bulaşık makinesi tamir hizmeti.',
    commonFaults: [
      'Buzdolabı motor kilitlenmesi',
      'Çamaşır makinesi rulman aşınması',
      'Bulaşık makinesi rezistans arızası'
    ],
    solutions: [
      'Yerinde kompresör ve parça değişimi',
      'Orijinal presli kazan yenileme',
      'Akış tipi ısıtıcı değişimi'
    ]
  }
]
