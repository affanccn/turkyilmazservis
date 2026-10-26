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
  // ==========================================
  // 1. GEBZE ANA ARAMA KELİMELERİ (GENEL & CİHAZ)
  // ==========================================
  {
    slug: 'gebze-teknik-servis',
    district: 'Gebze',
    brandOrDevice: 'Teknik Servis',
    title: 'Gebze Teknik Servis | Beyaz Eşya, Kombi & Klima',
    metaTitle: 'Gebze Teknik Servis | Aynı Gün Garantili Özel Servis',
    metaDesc: 'Gebze teknik servis arayışınızda 25-45 dk adrese varış. Buzdolabı, çamaşır, bulaşık makinesi, kombi ve klima tamirinde 6 ay parça garantisi: 0552 116 41 28.',
    badge: 'Gebze Mobil Teknik Servis Ağı',
    description: 'Gebze merkez ve tüm mahallelerinde buzdolabı, çamaşır makinesi, bulaşık makinesi, ankastre ocak, kombi ve klima cihazlarınız için uzman teknisyenlerimizle yerinde garantili arıza teşhisi ve tamir hizmeti sunuyoruz.',
    commonFaults: [
      'Beyaz eşyaların aniden elektrik kesmesi veya sigorta attırması',
      'Buzdolabı soğutmama, gaz kaçağı ve aşırı motor ısınması',
      'Çamaşır ve bulaşık makinesinin su boşaltmaması ya da su almaması',
      'Kombi basınç düşmesi, peteklerin ısınmaması ve klima gaz eksikliği'
    ],
    solutions: [
      'Yerinde profesyonel arıza tespiti ve orijinal yedek parça montajı',
      'Atölyeye taşımadan gözünüzün önünde 1. sınıf işçilikle onarım',
      'Yapılan her parça ve mekanik işçiliğe 6 ay resmi Türkyılmaz Servis garantisi',
      'Aynı gün içinde 25-45 dakika aralığında mobil ekip yönlendirmesi'
    ]
  },
  {
    slug: 'gebze-beyaz-esya-servisi',
    district: 'Gebze',
    brandOrDevice: 'Beyaz Eşya',
    title: 'Gebze Beyaz Eşya Servisi | Yerinde Garantili Tamir',
    metaTitle: 'Gebze Beyaz Eşya Servisi | Buzdolabı & Çamaşır Tamiri',
    metaDesc: 'Gebze beyaz eşya servisi. Arçelik, Beko, Samsung, Vestel buzdolabı, çamaşır ve bulaşık makinesi tamirinde yerinde 6 ay garantili parça desteği: 0552 116 41 28.',
    badge: 'Gebze Beyaz Eşya Uzmanı',
    description: 'Gebze genelinde ev ve iş yerlerinizdeki Arçelik, Beko, Vestel, Samsung, Grundig, Altus ve diğer tüm marka beyaz eşyalarınıza dürüst, garantili ve yerinde tamir desteği sağlıyoruz.',
    commonFaults: [
      'Buzdolabı soğutmuyor, dondurucu buz eritip su akıtıyor',
      'Çamaşır makinesi sıkma yaparken aşırı vuruntu ve ses yapıyor',
      'Bulaşık makinesi tableti eritmiyor, bardakları lekeli bırakıyor',
      'Kurutma makinesi geç kurutuyor veya tambur dönmüyor'
    ],
    solutions: [
      'Fabrika presli komple kazan ve rulman grubu revizyonu',
      'Orijinal kompresör (motor) montajı ve gaz kaçak onarımı',
      'Rezistans, pompa ve elektronik anakart tamiri',
      '6 ay geçerli servis garanti formu ile teslimat'
    ]
  },
  {
    slug: 'gebze-buzdolabi-servisi',
    district: 'Gebze',
    brandOrDevice: 'Buzdolabı',
    title: 'Gebze Buzdolabı Servisi | Gaz Dolumu & Motor Tamiri',
    metaTitle: 'Gebze Buzdolabı Servisi | Soğutmama & Motor Değişimi',
    metaDesc: 'Gebze buzdolabı tamiri ve gaz dolumu. No-frost alt bölme soğutmama, kompresör motor arızası ve gaz kaçağı yerinde 6 ay garantili tamir: 0552 116 41 28.',
    badge: 'Gebze Buzdolabı Çözüm Merkezi',
    description: 'Gebze’de buzdolabınız soğutmadığında hemen yüksek maliyetli motor değişimine gitmiyoruz. Gaz basınç testi ve sensör ölçümleriyle doğru teşhis koyarak en uygun maliyetle yerinde tamir ediyoruz.',
    commonFaults: [
      'No-frost buzdolabının üstü donduruyor fakat alt kabin ılık kalıyor',
      'Kompresör motoru kalkış yaparken tık tık sesi yapıp duruyor',
      'Buzdolabı içine ve tabanına su birikiyor, tahliye deliği donuyor',
      'Cihaz sürekli alarm çalıyor ve panelde ünlem işareti yanıyor'
    ],
    solutions: [
      'R600a ve R134a çevre dostu orijinal gaz dolumu ve kaçak kaynağı',
      'İnverter ve klasik kompresör (motor) sıfır parça değişimi',
      'Defrost rezistansı, bi-metal termostat ve fan motoru onarımı',
      'Sensör kalibrasyonu ve elektronik kontrol kartı revizyonu'
    ]
  },
  {
    slug: 'gebze-camasir-makinesi-servisi',
    district: 'Gebze',
    brandOrDevice: 'Çamaşır Makinesi',
    title: 'Gebze Çamaşır Makinesi Servisi & Kazan Değişimi',
    metaTitle: 'Gebze Çamaşır Makinesi Servisi | Kazan Rulman & Pompa',
    metaDesc: 'Gebze çamaşır makinesi tamircisi. Sıkmada sarsıntı, rulman sesi, su akıtma ve tahliye arızalarında yerinde 6 ay garantili parça değişimi: 0552 116 41 28.',
    badge: 'Gebze Çamaşır Makinesi Ustası',
    description: 'Çamaşır makineniz yüksek devirde aşırı ses yapıyorsa, yerinden oynuyorsa veya suyunu tahliye etmiyorsa Gebze genelinde donanımlı mobil araçlarımızla dakikalar içinde kapınızdayız.',
    commonFaults: [
      'Sıkma programına geçince aşırı helikopter gibi uğultu ve sarsıntı',
      'Tambur kilitlendi ya da elle çevrildiğinde sürtünme sesi geliyor',
      'Cihaz program ortasında kalıyor ve su tahliyesi yapmıyor',
      'Kapak kilidi açılmıyor ya da su giriş ventilinden su almıyor'
    ],
    solutions: [
      'Orijinal presli komple kazan ve rulman grubu değişimi',
      'Manyetik tahliye motoru (pompa) ve filtre temizliği',
      'Hidrolik amortisör ve askı yayları yenileme',
      'Elektronik PTC kapak kilit mekanizması onarımı'
    ]
  },
  {
    slug: 'gebze-bulasik-makinesi-servisi',
    district: 'Gebze',
    brandOrDevice: 'Bulaşık Makinesi',
    title: 'Gebze Bulaşık Makinesi Servisi | Rezistans & Pompa',
    metaTitle: 'Gebze Bulaşık Makinesi Servisi | Isıtmama & Su Tahliye Tamiri',
    metaDesc: 'Gebze bulaşık makinesi tamircisi. Suyu ısıtmama, tableti eritmeme, su sızdırma ve yıkama pompası arızalarına yerinde 6 ay garantili tamir: 0552 116 41 28.',
    badge: 'Gebze Bulaşık Makinesi Servisi',
    description: 'Bulaşık makinenizin suyu ısıtmaması, bulaşıkları kirli çıkarması veya sürekli su boşaltma modunda kalması arızalarını Gebze adresinizde orijinal parçalarla garantili olarak gideriyoruz.',
    commonFaults: [
      'Yıkama sonunda bulaşıklar soğuk ve yağlı çıkıyor, tablet erimiyor',
      'Alt kısımdan su akıtıyor veya ekranda taşma (aquastop) hatası veriyor',
      'Yıkama pervaneleri dönmüyor ve yıkama sesi duyulmuyor',
      'Program bitmiyor, sürekli tahliye motoru çalışıyor'
    ],
    solutions: [
      'Akış tipi ısıtıcı tüp (rezistans) ve NTC sensör değişimi',
      'Sirkülasyon (yıkama) motoru ve tahliye pompa onarımı',
      'Su sayacı (debimetre) ve ventil grubu yenileme',
      'Alt karter conta ve sızıntı hattı revizyonu'
    ]
  },

  // ==========================================
  // 2. DARICA ANA ARAMA KELİMELERİ (GENEL & CİHAZ)
  // ==========================================
  {
    slug: 'darica-teknik-servis',
    district: 'Darıca',
    brandOrDevice: 'Teknik Servis',
    title: 'Darıca Teknik Servis | Beyaz Eşya, Kombi & Klima',
    metaTitle: 'Darıca Teknik Servis | Yerel Atölye Aynı Gün Hızlı Tamir',
    metaDesc: 'Darıca teknik servis. Fevziçakmak merkezli atölyemizden 20-30 dk içinde yerinde müdahale. Beyaz eşya, kombi, klima 6 ay garantili tamir: 0552 116 41 28.',
    badge: 'Darıca Yerel Teknik Servis',
    description: 'Darıca Fevziçakmak Mahallesi merkezli servisimizle Bayramoğlu, Piri Reis, Nenehatun, Bağlarbaşı, Zincirlikuyu ve tüm Darıca mahallelerine 20-30 dakika içinde teknik servis ulaştırıyoruz.',
    commonFaults: [
      'Buzdolabı motorunun devreye girmemesi ve dondurucu arızaları',
      'Çamaşır makinesi kazan bilye dağılması ve su kaçakları',
      'Bulaşık makinesi rezistans yanması ve program iptalleri',
      'Kombi sıcak su arızası ve peteklerin ısınmaması'
    ],
    solutions: [
      'Doğrudan yerel Darıca atölyemizden uzman kadro yönlendirmesi',
      'Fabrika onaylı orijinal yedek parça ve test cihazları',
      'Değişen parçalara ve işçiliğe 6 ay resmi yazılı garanti',
      'Gereksiz parça değişimine gitmeyen dürüst esnaf anlayışı'
    ]
  },
  {
    slug: 'darica-beyaz-esya-servisi',
    district: 'Darıca',
    brandOrDevice: 'Beyaz Eşya',
    title: 'Darıca Beyaz Eşya Servisi | Garantili Yerinde Tamir',
    metaTitle: 'Darıca Beyaz Eşya Servisi | Aynı Gün Yerinde Garantili Tamir',
    metaDesc: 'Darıca beyaz eşya servisi. Arçelik, Beko, Samsung, Vestel buzdolabı, çamaşır, bulaşık tamirinde yerinde 6 ay garantili parça desteği: 0552 116 41 28.',
    badge: 'Darıca Bölge Beyaz Eşya Servisi',
    description: 'Darıca sakinlerine beyaz eşya tamirinde aracısız, komisyonsuz, doğrudan ustasından garantili servis hizmeti sunuyoruz. Evinize gelip cihazınızı gözünüzün önünde tamir ediyoruz.',
    commonFaults: [
      'Çamaşır makinesinin sıkarken aşırı sarsıntı ve gürültü yapması',
      'Buzdolabı yiyecekleri dondurmuyor veya koku yapıyor',
      'Bulaşık makinesinin suyu ısıtmaması ve tableti bırakması',
      'Kurutma makinesinin nemli bırakması ve tambur arızası'
    ],
    solutions: [
      'Orijinal presli kazan ve amortisör değişimi',
      'Kompresör motor montajı ve gaz kaçak testi',
      'Sirkülasyon pompası ve rezistans revizyonu',
      '6 ay kaşeli servis garanti belgesi'
    ]
  },
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
    slug: 'darica-bulasik-makinesi-servisi',
    district: 'Darıca',
    brandOrDevice: 'Bulaşık Makinesi',
    title: 'Darıca Bulaşık Makinesi Servisi | Yerinde Garantili Tamir',
    metaTitle: 'Darıca Bulaşık Makinesi Tamiri | Rezistans & Pompa Değişimi',
    metaDesc: 'Darıca bulaşık makinesi tamiri. Su ısıtmama, tahliye etmeme ve su kaçağı arızalarına aynı gün yerinde 6 ay garantili parça montajı: 0552 116 41 28.',
    badge: 'Darıca Bulaşık Makinesi Tamircisi',
    description: 'Darıca mahallelerinde bulaşık makineniz yıkama yapmadığında, suyu ısıtmadığında ya da alttan su sızdırdığında atölyeye götürmeden evinizde garantili onarım yapıyoruz.',
    commonFaults: [
      'Bulaşıklar yıkandıktan sonra ıslak ve soğuk kalıyor',
      'Makine suyunu tahliye edemiyor ve bip uyarısı veriyor',
      'Kapak altından veya karterden su sızdırıyor',
      'Deterjan kapağı açılmıyor ya da su ventili ses yapıyor'
    ],
    solutions: [
      'Rezistans ısıtıcı tüpü ve sıcaklık sensörü montajı',
      'Manyetik tahliye motoru değişimi ve hortum temizliği',
      'Kapak yayları, conta ve emniyet kilidi revizyonu',
      'Yıkama motoru pervanesi ve iç hat temizliği'
    ]
  },

  // ==========================================
  // 3. ÇAYIROVA ANA ARAMA KELİMELERİ
  // ==========================================
  {
    slug: 'cayirova-teknik-servis',
    district: 'Çayırova',
    brandOrDevice: 'Teknik Servis',
    title: 'Çayırova Teknik Servis | Beyaz Eşya & Kombi',
    metaTitle: 'Çayırova Teknik Servis | Aynı Gün Yerinde Garantili Tamir',
    metaDesc: 'Çayırova teknik servis. Buzdolabı, çamaşır, bulaşık makinesi, kombi ve klima arızalarında aynı gün yerinde 6 ay garantili tamir desteği: 0552 116 41 28.',
    badge: 'Çayırova Teknik Servis',
    description: 'Yenimahalle, Özgürlük, Akse, İnönü ve tüm Çayırova mahallelerine dakikalar içinde servis ulaştırıyor; beyaz eşya ve iklimlendirme cihazlarınızı yerinde garantili tamir ediyoruz.',
    commonFaults: [
      'Buzdolabı motorunun devreye girmemesi ve soğutma kesintisi',
      'Çamaşır makinesi tambur rulmanının dağılması ve ses yapması',
      'Bulaşık makinesinin tableti eritmeyip suyu tahliye etmemesi',
      'Kombi barının sürekli sıfırlanması ve ateşleme arızası'
    ],
    solutions: [
      'Mobil araçlarımızla aynı gün adresinizde arıza teşhisi',
      'Orijinal yedek parça ve hassas test ekipmanları',
      'Değişen her parçaya 6 ay resmi Türkyılmaz Servis garantisi'
    ]
  },
  {
    slug: 'cayirova-beyaz-esya-servisi',
    district: 'Çayırova',
    brandOrDevice: 'Beyaz Eşya',
    title: 'Çayırova Beyaz Eşya Servisi | Garantili Yerinde Tamir',
    metaTitle: 'Çayırova Beyaz Eşya Servisi | Buzdolabı & Çamaşır Tamiri',
    metaDesc: 'Çayırova beyaz eşya servisi. Arçelik, Beko, Samsung, Vestel tamirinde yerinde 6 ay garantili parça desteği: 0552 116 41 28.',
    badge: 'Çayırova Beyaz Eşya Servisi',
    description: 'Çayırova sakinlerine evlerinde gözlerinin önünde beyaz eşya tamiri hizmeti. Arçelik, Beko, Vestel, Samsung gibi tüm markalarda garantili parça montajı yapıyoruz.',
    commonFaults: [
      'Buzdolabı karlanma yapıyor ve soğutmuyor',
      'Çamaşır makinesi yerinden zıplıyor ve sarsıntı yapıyor',
      'Bulaşık makinesi su sızdırıyor veya duruyor'
    ],
    solutions: [
      'Kompresör motor değişimi ve gaz kaçağı kaynağı',
      'Orijinal presli kazan montajı',
      'Isıtıcı rezistans ve elektronik kart tamiri'
    ]
  },
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

  // ==========================================
  // 4. MARKA ÖZEL SAYFALARI (GEBZE & DARICA)
  // ==========================================
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
    slug: 'darica-beko-servisi',
    district: 'Darıca',
    brandOrDevice: 'Beko',
    title: 'Darıca Beko Beyaz Eşya Servisi',
    metaTitle: 'Darıca Beko Servisi | Yerinde Garantili Tamir & Onarım',
    metaDesc: 'Darıca Beko buzdolabı, çamaşır ve bulaşık makinesi tamiri. Fevziçakmak atölyemizden aynı gün 6 ay garantili parça desteği: 0552 116 41 28.',
    badge: 'Darıca Beko Servisi',
    description: 'Darıca genelinde Beko marka buzdolabı, çamaşır makinesi, bulaşık makinesi ve klimalara aynı gün hızlı ve garantili parça montajı sağlıyoruz.',
    commonFaults: [
      'Beko no-frost buzdolabı karlanma ve koku arızası',
      'Beko çamaşır makinesi sıkmada yüksek ses ve sallantı',
      'Beko bulaşık makinesi su ısıtmama ve tablet kalıntısı'
    ],
    solutions: [
      'Presli kazan ve orijinal motor takozları değişimi',
      'Orijinal R600a gaz basımı ve kaçak tamiri',
      'Isıtıcı rezistans ve elektronik kart onarımı'
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

  // ==========================================
  // 5. KOMBİ & KLİMA SAYFALARI (GEBZE & DARICA)
  // ==========================================
  {
    slug: 'gebze-kombi-servisi',
    district: 'Gebze',
    brandOrDevice: 'Kombi',
    title: 'Gebze Kombi Bakımı & Petek Temizliği',
    metaTitle: 'Gebze Kombi Servisi | Petek Temizliği & Periyodik Bakım',
    metaDesc: 'Gebze kombi tamiri ve periyodik bakım. Makineli petek temizliği, bar düşmesi ve ateşleme arızalarında uzman servis: 0552 116 41 28.',
    badge: 'Gebze Kombi & Isıtma Çözümleri',
    description: 'DemirDöküm, Baymak, E.C.A., Bosch, Vaillant ve lider marka kombilerinizde kış öncesi ve sonrası detaylı mekanik bakım ve ilaçlı petek temizliği hizmeti.',
    commonFaults: [
      'Kombi su basıncı (bar) sürekli düşüyor veya yükseliyor',
      'Peteklerin altı soğuk üstü sıcak kalıyor, ev ısınmıyor',
      'Sıcak su açılınca kombi ateşleme yapmıyor ya da su ılık akıyor'
    ],
    solutions: [
      'Genleşme tankı azot basınç dolumu ve emniyet ventili değişimi',
      'Çift yönlü kimyasallı makineli radyatör petek temizliği',
      'NTC sıcak su sensörü, üç yollu vana ve plakalı eşanjör temizliği'
    ]
  },
  {
    slug: 'darica-kombi-servisi',
    district: 'Darıca',
    brandOrDevice: 'Kombi',
    title: 'Darıca Kombi Servisi | Petek Temizliği & Bakım',
    metaTitle: 'Darıca Kombi Servisi | Periyodik Bakım & Petek Temizliği',
    metaDesc: 'Darıca kombi servisi ve petek temizliği. Bar düşmesi, ateşleme hatası ve su ısıtmama problemlerine yerinde garantili çözüm: 0552 116 41 28.',
    badge: 'Darıca Kombi Servisi',
    description: 'Darıca genelinde kombi bakımı ve petek temizliğinde çift yönlü yıkama makineleri ile tesisattaki tüm çamur ve kireci söküyor, yakıt tasarrufu sağlıyoruz.',
    commonFaults: [
      'Kombi arıza kodu veriyor ve kırmızı ışık yakıyor',
      'Sıcak su dalgalı geliyor, bir ısınıyor bir soğuyor',
      'Kombiden aşırı ses ve su damlatma problemi'
    ],
    solutions: [
      'Sirkülasyon pompası ve fan motoru bakımı',
      'Genleşme tankı hava kontrolü ve membran testi',
      'Elektronik ateşleme elektrodu ve gaz valfi ayarı'
    ]
  },
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
      'Klima üflüyor ama soğutmuyor ya da ısıtmıyor',
      'İç üniteden odaya su damlatıyor veya buz atıyor',
      'Klimadan kötü koku geliyor ve hava debisi düştü'
    ],
    solutions: [
      'Manometre ile gaz basınç testi ve orijinal R410A / R32 gaz dolumu',
      'Drenaj hortumu ve eğim ayarı düzeltmesi',
      'Antibakteriyel kimyasal ilaçlı serpantin ve filtre temizliği'
    ]
  },
  {
    slug: 'darica-klima-servisi',
    district: 'Darıca',
    brandOrDevice: 'Klima',
    title: 'Darıca Klima Servisi & Gaz Dolumu',
    metaTitle: 'Darıca Klima Servisi | Gaz Dolumu & İlaçlı Bakım',
    metaDesc: 'Darıca klima servisi. Yerinde R32 ve R410 gaz şarjı, serpantin yıkama ve soğutmama arızalarında aynı gün garantili servis: 0552 116 41 28.',
    badge: 'Darıca Klima Çözümleri',
    description: 'Darıca genelinde yaz ve kış sezonu öncesi klima gaz ölçümü, kompresör testi ve antibakteriyel ilaçlı petek temizliği ile klimanızı ilk günkü verimine kavuşturuyoruz.',
    commonFaults: [
      'Klima soğuk hava üflemiyor, dış ünite devreye girmiyor',
      'İç ünite fanı ses yapıyor veya hava akışı çok zayıf',
      'Klima borularında karlanma ve donma oluşuyor'
    ],
    solutions: [
      'Hassas terazi ve manometre ile gramajlı gaz dolumu',
      'Kondansatör ve 4 yollu vana onarımı',
      'İç ünite antibakteriyel ilaçlı hijyenik temizlik'
    ]
  },

  // ==========================================
  // 6. TUZLA & ŞİFA SAYFALARI
  // ==========================================
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
