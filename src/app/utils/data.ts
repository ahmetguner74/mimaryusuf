// Kariyer deneyimi tipi tanımlaması
export interface Deneyim {
  pozisyon: string;
  sirket?: string;
  baslangic: string;
  bitis: string;
  sure: string;
}

// Kariyer deneyimleri
export const deneyimler: Deneyim[] = [
  {
    pozisyon: "MİMAR",
    baslangic: "1999",
    bitis: "Halen",
    sure: "25 yıl 3 ay"
  },
  {
    pozisyon: "MİMAR",
    sirket: "YAPI DONATIM AŞ",
    baslangic: "1995",
    bitis: "1998",
    sure: "3 yıl"
  },
  {
    pozisyon: "ÇİZİM ELEMANI",
    sirket: "TURGUT CANSEVER MİMARLIK",
    baslangic: "1993",
    bitis: "1995",
    sure: "2 yıl"
  }
];

// Proje tipi tanımlaması
export interface Proje {
  id: number;
  title: string;
  description: string;
  year: string;
  location: string;
  image: string;
  detailDescription?: string; // Detaylı açıklama (opsiyonel)
  iframe?: string; // 3D model iframe kodu (opsiyonel)
  beforeAfterImages?: {
    before: string;
    after: string;
    beforeLabel: string;
    afterLabel: string;
  }; // Karşılaştırma görselleri (opsiyonel)
}

// Tüm projeler
export const projeler: Proje[] = [
  {
    id: 1,
    title: "Tirilye Tabut Ev ve Perili Ev Koruma Çalışması",
    description: "Bursa'nın Mudanya ilçesinde bulunan, yaklaşık 200 yıllık geçmişe sahip tarihi yapıların restorasyonu ve kültürel mirasın korunması.",
    year: "2019",
    location: "Bursa, Mudanya",
    image: "/projeler/proje1.jpg",
    detailDescription: `Bursa'nın Mudanya ilçesine bağlı Tirilye Mahallesi'nde bulunan Tabut Ev ve Perili Ev, yaklaşık 200 yıllık geçmişleriyle bölgenin kültürel mirasının en dikkat çekici parçaları arasında yer alıyor. Rumlardan kalma bu yapılar, hem mimari özellikleriyle hem de hikayeleriyle Tirilye'nin tarihine ışık tutuyor. Tabut Ev, 1880'li yıllarda tabut imalathanesi olarak kullanılmış ve alışılmadık tasarımıyla bu ismi almış. Perili Ev ise, hakkında dolaşan gizemli anlatılarla halk arasında merak uyandıran bir simge haline gelmiş. Yusuf Özdamar liderliğinde gerçekleştirilen bu proje, her iki yapının restorasyonu ve gelecek nesillere aktarılması amacıyla hayata geçirildi.

ÇEKÜL Vakfı ile iş birliği içinde yürütülen çalışmada, temel hedef yapıların orijinal dokusunu koruyarak Tirilye'nin eşsiz kimliğini yaşatmaktı. Zeytin bahçeleri ve denizin kucaklaştığı bu bereketli coğrafyada, yeşil ve mavinin buluştuğu noktada yer alan evler, modern restorasyon teknikleriyle yeniden canlandırıldı. Mudanya Belediyesi'nin de destek verdiği proje, sadece fiziksel bir yenileme değil, aynı zamanda bölge halkının bu mirasa sahip çıkmasını sağlayacak bir farkındalık hareketi oldu. Yapılar, turizme kazandırılarak Tirilye'nin tarihsel ve doğal güzelliklerini ziyaretçilere sunmaya devam ediyor.

Projenin bir parçası olarak, Tabut Ev ve Perili Ev'in iç ve dış mekanları 3D tarama teknolojisiyle dijital ortama aktarıldı. Bu sayede, yapıların her detayı sanal ortamda keşfedilebilir hale geldi.`,
    iframe: `<div class="sketchfab-embed-wrapper"> <iframe title="Haunted House ( interior &amp; exterior 3d scan )" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="600" src="https://sketchfab.com/models/ffa19bcc5efa4acc9b493d28b8d151a0/embed"> </iframe> </div>`
  },
  {
    id: 2,
    title: "Tarihi Osmanlı Çeşmesi Restorasyon Projesi",
    description: "18. yüzyıldan kalma tarihi Osmanlı çeşmesinin detaylı belgeleme ve restorasyon çalışması.",
    year: "2020",
    location: "İstanbul, Üsküdar",
    image: "/projeler/proje2.jpg",
    detailDescription: `Üsküdar'ın tarihi dokusunun önemli bir parçası olan bu 18. yüzyıl Osmanlı çeşmesi, uzun yıllar boyunca ihmal edilmiş durumdaydı. Restorasyon projemiz, bu değerli kültür varlığını gelecek nesillere aktarmayı hedefledi.

Çeşmenin orijinal taş işçiliği, kitabesi ve süslemeleri detaylı bir şekilde belgelendi. Yapının strüktürel sorunları tespit edildi ve müdahale yöntemleri belirlendi. Restorasyon sürecinde, geleneksel yapım teknikleri ve malzemeler kullanılarak, çeşmenin özgün karakteri korundu.

3D tarama teknolojisi kullanılarak yapının her detayı dijital ortama aktarıldı. Bu sayede, gelecekte yapılabilecek müdahaleler için değerli bir belgeleme arşivi oluşturuldu. Aynı zamanda, bu dijital model sayesinde restorasyon öncesi ve sonrası durumun karşılaştırılması mümkün oldu.

Proje kapsamında çeşmenin su sistemi de yenilendi ve tekrar işlevsel hale getirildi. Böylece tarihi çeşme, hem estetik değerini hem de asıl işlevini geri kazandı.`,
    iframe: `<div class="sketchfab-embed-wrapper"> <iframe title="Old Historical Fountain." frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="600" src="https://sketchfab.com/models/52d55ec7e47f43c1921baa2bbc6448b2/embed?autostart=1"> </iframe> </div>`
  },
  {
    id: 3,
    title: "3D Fotogrametri Projesi",
    description: "Tarihi yapıların 3D fotogrametri teknolojisi ile belgelenmesi ve dijital arşivlenmesi çalışması.",
    year: "2023",
    location: "İstanbul",
    image: "/projeler/proje3.jpg",
    detailDescription: `3D fotogrametri teknolojisi kullanılarak gerçekleştirilen bu projede, tarihi yapıların detaylı belgelenmesi ve dijital ortamda arşivlenmesi amaçlanmıştır. Yüksek çözünürlüklü fotoğraflar ve gelişmiş yazılımlar kullanılarak yapının her detayı hassas bir şekilde 3 boyutlu modele aktarılmıştır.

Bu teknoloji sayesinde, yapının mevcut durumu, malzeme özellikleri ve yapısal detayları milimetrik hassasiyetle belgelenmiştir. Oluşturulan 3D model, restorasyon çalışmalarında referans olarak kullanılabilecek ve gelecek nesillere aktarılabilecek bir dijital arşiv niteliğindedir.

Proje kapsamında yapının dış cephesi ve iç mekanları detaylı olarak taranmış, elde edilen veriler işlenerek yüksek kaliteli bir 3D model oluşturulmuştur. Bu model üzerinden yapının her açıdan incelenmesi, kesit ve görünüşlerinin alınması mümkün hale gelmiştir.`,
    iframe: `<iframe src="https://cloud.agisoft.com/embedded/projects/37a47445-c16c-45c1-955a-d3f701ff0c2d/25040ea5-2847-4177-b786-a1fc1739854b/?autoplay=1&name=1&mode=Full&position=-105.49448,39.503638,2628.513929&orientation=42.472,-37.374,0" width="100%" height="600" allow="clipboard-write" allowfullscreen="allowfullscreen" style="border: 0" title="03"></iframe>`
  },
  {
    id: 4,
    title: "Kara Mustafapaşa Kaplıcaları Rölöve ve Restorasyon Projesi",
    description: "Tarihi Kara Mustafapaşa Kaplıcaları'nın detaylı rölöve çalışması ve restorasyon projesi.",
    year: "2021",
    location: "İstanbul",
    image: "/projeler/proje4.jpg",
    detailDescription: `Osmanlı döneminin önemli tarihi yapılarından olan Kara Mustafapaşa Kaplıcaları'nın rölöve ve restorasyon projesi, yapının özgün karakterini koruyarak gelecek nesillere aktarılmasını amaçlamaktadır.

Proje kapsamında yapının mevcut durumu detaylı olarak belgelenmiş, yapısal sorunları tespit edilmiş ve özgün mimari özelliklerini koruyacak şekilde restorasyon önerileri geliştirilmiştir. Kaplıcanın tarihi dokusunu ve işlevini yeniden kazandırmak için geleneksel yapım teknikleri ve malzemeler kullanılması planlanmıştır.

Rölöve çalışmaları sırasında yapının tüm mimari elemanları, süslemeleri ve yapısal detayları hassas ölçümlerle belgelenmiş, fotogrametrik yöntemler kullanılarak dijital ortama aktarılmıştır. Bu veriler ışığında hazırlanan restorasyon projesi, yapının özgün plan şemasını ve mekansal kurgusunu korumayı hedeflemektedir.`
  },
  {
    id: 5,
    title: "Değişim Analizleri",
    description: "2006-2024 yılları arasında kentsel doku ve yapılaşmanın değişiminin karşılaştırmalı analizi.",
    year: "2006-2024",
    location: "Bursa, Merkez",
    image: "/projeler/proje5-2024.jpg",
    detailDescription: `Bu proje, Bursa'nın merkez bölgesinde kentsel dokuda meydana gelen değişimleri analiz etmek ve belgelemek amacıyla gerçekleştirilmiştir. 2006 ve 2024 yılları arasındaki yapılaşma, yeşil alan ve kentsel doku değişimleri detaylı olarak incelenmiştir.

Çalışma kapsamında, aynı bölgenin farklı dönemlerde çekilen hava fotoğrafları kullanılarak karşılaştırmalı analizler yapılmıştır. Bu analizler, kentsel gelişimin yönünü, yoğunluğunu ve karakterini anlamamıza yardımcı olmaktadır.

İnteraktif slider görüntüleme sistemi sayesinde, 18 yıllık süreçte meydana gelen değişimler kolayca gözlemlenebilmektedir. Bu çalışma, kentsel planlama ve koruma çalışmalarına ışık tutacak önemli veriler sunmaktadır.`,
    beforeAfterImages: {
      before: "/projeler/proje5-2006.jpg",
      after: "/projeler/proje5-2024.jpg",
      beforeLabel: "2006",
      afterLabel: "2024"
    }
  },
  {
    id: 6,
    title: "Proje 6",
    description: "Proje 6 açıklaması.",
    year: "2022",
    location: "Ankara",
    image: "/projeler/proje6.jpg"
  }
];

// Ana sayfada gösterilen öne çıkan projeler
export const oneCikanProjeler: Proje[] = projeler.slice(0, 3);

// Röportaj kesiti tipi tanımlaması
export interface RoportajKesiti {
  alinti: string;
  kaynak: string;
}

// Röportaj kesitleri
export const roportajKesitleri: RoportajKesiti[] = [
  {
    alinti: "Turgut Bey ile geçirdiğim zaman, bana mimarlığın bir bina yapmaktan çok daha öte bir sorumluluk olduğunu öğretti.",
    kaynak: "Mimarhane Röportajı"
  },
  {
    alinti: "Mimarlık, toplumun kültürel değerlerini ve yaşam biçimini yansıtmalı, geçmişle gelecek arasında köprü kurmalıdır.",
    kaynak: "Mimarhane Röportajı"
  },
  {
    alinti: "Her projenin kendine has bir ruhu vardır. Önemli olan o ruhu keşfedip, doğru şekilde yansıtabilmektir.",
    kaynak: "Mimarhane Röportajı"
  },
  {
    alinti: "Geleneksel mimarimiz, sürdürülebilirlik ve çevre uyumu konusunda bizlere çok değerli dersler sunuyor.",
    kaynak: "Mimarhane Röportajı"
  }
];

// Simge SVG'si
export const RulesSvg = `<g>
  <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FAB943;" d="M703.677,739.349l-236.911-0.067l-236.912-0.067    L396.959,847.31l167.106,108.096l69.806-108.029L703.677,739.349z M594.241,795.675h-83.084h-83.017l58.542,37.89l58.607,37.888    l24.475-37.888L594.241,795.675z"/>
  <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#4D4D4D;" d="M306.566,757.454l-14.35,22.129l2.279,1.477l14.352-22.129    L306.566,757.454z M549.984,914.904L535.7,937.032l2.213,1.475l14.35-22.128L549.984,914.904z M541.266,909.271l-14.283,22.129    l2.28,1.474l14.283-22.128L541.266,909.271z M532.616,903.707l-14.351,22.126l2.28,1.409l14.35-22.129L532.616,903.707z     M523.898,898.072l-14.283,22.129l2.212,1.477l14.35-22.13L523.898,898.072z M515.182,892.44l-14.284,22.129l2.28,1.473    l14.284-22.125L515.182,892.44z M515.717,872.523l-23.536,36.413l2.279,1.475L517.997,874L515.717,872.523z M497.813,881.175    l-14.283,22.126l2.28,1.477l14.284-22.128L497.813,881.175z M489.096,875.539l-14.284,22.131l2.281,1.475l14.283-22.129    L489.096,875.539z M480.445,869.907l-14.35,22.13l2.279,1.475l14.352-22.129L480.445,869.907z M471.727,864.275l-14.282,22.129    l2.279,1.474l14.284-22.128L471.727,864.275z M463.011,858.71l-14.283,22.129l2.279,1.407l14.283-22.062L463.011,858.71z     M463.546,838.794l-23.536,36.411l2.281,1.477l23.535-36.413L463.546,838.794z M445.644,847.443l-14.283,22.129l2.28,1.477    l14.283-22.129L445.644,847.443z M436.925,841.81l-14.283,22.13l2.28,1.476l14.284-22.131L436.925,841.81z M428.274,836.181    l-14.35,22.125l2.28,1.477l14.35-22.128L428.274,836.181z M419.557,830.544l-14.282,22.13l2.28,1.476l14.283-22.129    L419.557,830.544z M410.907,824.913l-14.35,22.129l2.281,1.473l14.283-22.127L410.907,824.913z M411.377,805.063l-23.538,36.414    l2.28,1.406l23.537-36.344L411.377,805.063z M393.472,813.715l-14.283,22.127l2.28,1.476l14.283-22.128L393.472,813.715z     M384.823,808.08l-14.351,22.13l2.281,1.477l14.283-22.131L384.823,808.08z M376.105,802.448l-14.351,22.129l2.28,1.477    l14.35-22.129L376.105,802.448z M367.388,796.816l-14.284,22.127l2.28,1.475l14.284-22.13L367.388,796.816z M358.737,791.185    l-14.351,22.125l2.28,1.477l14.283-22.129L358.737,791.185z M359.273,771.335l-23.604,36.345l2.279,1.476l23.537-36.347    L359.273,771.335z M341.302,779.918l-14.284,22.13l2.281,1.477l14.283-22.131L341.302,779.918z M332.652,774.352l-14.351,22.13    l2.28,1.407l14.284-22.13L332.652,774.352z M323.935,768.721l-14.282,22.126l2.211,1.476l14.352-22.129L323.935,768.721z     M315.218,763.086l-14.283,22.129l2.279,1.478l14.283-22.132L315.218,763.086z"/>
  <polygon style="fill-rule:evenodd;clip-rule:evenodd;fill:#FACC76;" points="703.677,739.349 466.766,739.281 229.854,739.214     262.243,760.202 479.104,760.202 690.133,760.271   "/>
</g>`; 