"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Proje, projeler } from "../../utils/data";

// Proje detay client bileşeni için props tipi
interface ProjeDetayClientProps {
  proje: Proje;
  whatsappUrl: string;
}

export default function ProjeDetayClient({ proje, whatsappUrl }: ProjeDetayClientProps) {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white py-8 shadow-sm">
        <div className="container-custom">
          <Link href="/projeler" className="text-xl font-light hover:text-gray-600 transition duration-300">
            ← Projelere Dön
          </Link>
          <h1 className="text-4xl font-light mt-8 mb-2">{proje.title}</h1>
          <div className="w-16 h-1 bg-gray-400"></div>
        </div>
      </header>

      {/* Project Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12">
            {/* 3D Model - Daha büyük ve sayfaya uyumlu */}
            {proje.iframe && (
              <div className="mb-16">
                <h2 className="text-2xl font-light mb-6">3D MODEL GÖRÜNTÜSÜ</h2>
                <div 
                  className="w-full aspect-[4/1] rounded-lg overflow-hidden"
                  style={{ background: 'none' }}
                >
                  <div className="w-full h-full" dangerouslySetInnerHTML={{ 
                    __html: proje.iframe
                      .replace('<iframe', '<iframe style="width: 100%; height: 100%; border: none; background: none !important;"')
                      .replace('</iframe>', '</iframe>') 
                  }} />
                </div>
              </div>
            )}

            {/* Proje Bilgileri */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium mb-2">Proje</h3>
                <p className="text-gray-600">{proje.title}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Yıl</h3>
                <p className="text-gray-600">{proje.year}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Konum</h3>
                <p className="text-gray-600">{proje.location}</p>
              </div>
            </div>

            {/* Proje Görseli - Küçük ve tıklanabilir */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-6">PROJE GÖRSELİ</h2>
              <div className="flex flex-wrap gap-4">
                {proje.image && proje.image !== "/projeler/proje1.jpg" ? (
                  <div 
                    className="w-60 h-60 bg-gray-200 rounded cursor-pointer overflow-hidden group relative shadow-md hover:shadow-xl transition-all duration-300"
                    onClick={() => setShowImageModal(true)}
                  >
                    <Image
                      src={proje.image}
                      alt={proje.title}
                      width={240}
                      height={240}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">Proje Görseli</p>
                )}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-light mb-6">PROJE DETAYLARI</h2>
              <div className="prose max-w-none text-lg leading-relaxed">
                {proje.detailDescription ? (
                  proje.detailDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6">{paragraph}</p>
                  ))
                ) : (
                  <p>{proje.description}</p>
                )}
              </div>
            </div>

          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-light mb-6">DİĞER PROJELER</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projeler
                .filter((p) => p.id !== proje.id)
                .slice(0, 3)
                .map((digerProje) => (
                  <Link href={`/projeler/${digerProje.id}`} key={digerProje.id} className="block">
                    <div className="bg-white p-6 shadow-sm hover:shadow-md transition duration-300">
                      <div className="bg-gray-200 h-60 mb-6 flex items-center justify-center overflow-hidden">
                        {digerProje.image && digerProje.image !== "/projeler/proje1.jpg" ? (
                          <Image
                            src={digerProje.image}
                            alt={digerProje.title}
                            width={400}
                            height={300}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <p className="text-gray-500 italic">Proje Görseli</p>
                        )}
                      </div>
                      <h3 className="text-xl font-medium mb-2">{digerProje.title}</h3>
                      <p className="text-gray-600 mb-4">{digerProje.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {showImageModal && proje.image && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-xl"
              onClick={() => setShowImageModal(false)}
            >
              ✕
            </button>
            <Image
              src={proje.image}
              alt={proje.title}
              width={1200}
              height={800}
              className="object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-light mb-6">İLETİŞİME GEÇİN</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Bu proje hakkında daha fazla bilgi almak veya benzer bir çalışma için görüşmek isterseniz lütfen iletişime geçin.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="mailto:ozdamaryusuf@gmail.com" 
              className="inline-block border border-gray-800 px-6 py-3 text-lg hover:bg-gray-800 hover:text-white transition duration-300"
            >
              E-posta İle İletişim
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-800 bg-[#25D366] text-white px-6 py-3 text-lg hover:bg-[#128C7E] transition duration-300"
            >
              WhatsApp İle İletişim
            </a>
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
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 