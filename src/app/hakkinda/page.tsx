import React from "react";
import Image from "next/image";
import Link from "next/link";
import { deneyimler } from "../utils/data";

export const metadata = {
  title: "Hakkında | Mimar Yusuf Özdamar",
  description: "Mimar Yusuf Özdamar'ın özgeçmişi, deneyimleri ve mimari yaklaşımı hakkında bilgiler."
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white py-8 shadow-sm">
        <div className="container-custom">
          <Link href="/" className="text-xl font-light hover:text-gray-600 transition duration-300">
            ← Ana Sayfa
          </Link>
          <h1 className="text-4xl font-light mt-8 mb-2">HAKKINDA</h1>
          <div className="w-16 h-1 bg-gray-400"></div>
        </div>
      </header>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-light mb-6">BİYOGRAFİ</h2>
              <p className="text-lg leading-relaxed mb-6">
                Mimar Yusuf Özdamar, Türk mimarlık dünyasının değerli isimlerinden biridir. 1993 yılında Turgut Cansever Mimarlık'ta çizim elemanı olarak başladığı kariyerinde, Türk mimarlık geleneğini modern çizgilerle buluşturan çalışmalarda bulunmuştur.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Kariyerinin en önemli dönüm noktası, 1993-1995 yılları arasında büyük usta Turgut Cansever ile çalışma fırsatı bulması olmuştur. Bu deneyim, onun mimari anlayışını derinden etkilemiş ve mimarlığın sadece bina yapmaktan ibaret olmadığını, kültürel ve tarihi sorumluluğu olan bir meslek olduğunu kavramasını sağlamıştır.
              </p>
              <p className="text-lg leading-relaxed">
                1995-1998 yılları arasında Yapı Donatım AŞ'de mimar olarak görev yapan Özdamar, 1999'dan bu yana bağımsız mimar olarak çalışmalarını sürdürmekte, geleneksel değerleri modern anlayışla birleştiren projeler geliştirmeye devam etmektedir.
              </p>
            </div>
            <div className="bg-gray-200 h-[600px] flex items-center justify-center overflow-hidden rounded-lg">
              <Image 
                src="/profil/yusuf.jpg" 
                alt="Mimar Yusuf Özdamar" 
                width={600} 
                height={800} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-light mb-8">DENEYİM</h2>
          <div className="space-y-6">
            {deneyimler.map((deneyim, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-gray-200 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-medium">{deneyim.pozisyon}</h3>
                  {deneyim.sirket && (
                    <p className="text-lg text-gray-700 mt-1">{deneyim.sirket}</p>
                  )}
                  <p className="text-gray-600 mt-1">
                    {deneyim.baslangic} - {deneyim.bitis} · {deneyim.sure}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-light mb-8">MİMARİ YAKLAŞIM</h2>
          <div className="bg-white p-8 shadow-sm rounded-lg">
            <p className="text-lg leading-relaxed mb-6">
              Yusuf Özdamar'ın mimari yaklaşımı, geleneksel değerleri modern tekniklerle buluşturma üzerine kuruludur. Mimarlığın sadece bir bina tasarlamaktan ibaret olmadığını, insan ve çevre ile uyumlu mekânlar yaratmanın önemine inanmaktadır.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Turgut Cansever'in etkisiyle, mimarinin kültürel ve tarihsel bağlamını her zaman göz önünde bulundurmaktadır. Her projesinde, o mekânın kullanıcılarının ihtiyaçlarını ve konforu ön planda tutarken, estetik değerleri de ihmal etmemektedir.
            </p>
            <p className="text-lg leading-relaxed">
              "Mimarlık sadece görsel bir sanat değil, aynı zamanda insanların yaşam kalitesini doğrudan etkileyen sosyal bir sorumluluktur" düşüncesiyle hareket eden Özdamar, sürdürülebilir ve çevreye duyarlı tasarımları desteklemektedir.
            </p>
          </div>
          <div className="mt-12 text-center">
            <blockquote className="text-xl italic mb-4">
              "İyi mimarlık, bir toplumun kültürel değerlerini ve yaşam tarzını yansıtmalıdır."
            </blockquote>
            <p className="text-right text-gray-600">— Yusuf Özdamar</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Yusuf Özdamar</p>
          <div className="mt-4 md:mt-0">
            <Link href="/" className="text-white hover:text-gray-300 mr-4">
              Ana Sayfa
            </Link>
            <Link href="/hakkinda" className="text-white hover:text-gray-300 mr-4">
              Hakkında
            </Link>
            <Link href="/projeler" className="text-white hover:text-gray-300 mr-4">
              Projeler
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 