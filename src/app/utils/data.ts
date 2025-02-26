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
    iframe: `<div class="sketchfab-embed-wrapper"> <iframe title="Haunted House ( interior &amp; exterior 3d scan )" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/ffa19bcc5efa4acc9b493d28b8d151a0/embed"> </iframe> </div>`
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
    iframe: `<div class="sketchfab-embed-wrapper"> <iframe title="Old Historical Fountain." frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/52d55ec7e47f43c1921baa2bbc6448b2/embed?autostart=1"> </iframe> </div>`
  },
  {
    id: 3,
    title: "Proje 3",
    description: "Proje 3 açıklaması.",
    year: "2018",
    location: "İstanbul",
    image: "/projeler/proje3.jpg"
  },
  {
    id: 4,
    title: "Proje 4",
    description: "Proje 4 açıklaması.",
    year: "2021",
    location: "İstanbul",
    image: "/projeler/proje4.jpg"
  },
  {
    id: 5,
    title: "Proje 5",
    description: "Proje 5 açıklaması.",
    year: "2017",
    location: "İzmir",
    image: "/projeler/proje5.jpg"
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