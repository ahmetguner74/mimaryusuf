"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projeler } from "../utils/data";
import Menu from "../components/Menu";

export default function ProjectsPage() {
  // WhatsApp bağlantısı için telefon numarasını formatlıyoruz
  const phoneNumber = "905446932627"; // Boşluk ve + işareti olmadan
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Menu />
      
      {/* Header */}
      <header className="bg-white py-8 shadow-sm">
        <div className="container-custom">
          <Link href="/" className="text-xl font-light hover:text-gray-600 transition duration-300">
            ← Ana Sayfa
          </Link>
          <h1 className="text-4xl font-light mt-8 mb-2">PROJELER</h1>
          <div className="w-16 h-1 bg-gray-400"></div>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container-custom">
          <p className="text-lg text-gray-600 mb-8">
            Mimar Yusuf Özdamar&apos;ın seçkin projeleri, modern mimari ile geleneksel değerleri harmanlayan özgün tasarımlar sunmaktadır.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projeler.map((project) => (
              <Link href={`/projeler/${project.id}`} key={project.id} className="block">
                <div className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-gray-200 h-60 mb-6 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <p className="text-gray-500 italic">Proje Görseli</p>
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{project.year}</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">TASARIM YAKLAŞIMI</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Projelerinde insan ölçeğini ve çevresel uyumu ön planda tutan Yusuf Özdamar, her yapıyı içinde bulunduğu bağlamın bir parçası olarak ele almaktadır. Geleneksel değerleri modern tekniklerle birleştirerek, kimlikli ve sürdürülebilir mekânlar yaratmayı hedeflemektedir.
            </p>
            <p className="text-lg">
              Malzeme seçiminden mekân organizasyonuna kadar her aşamada kullanıcı deneyimini önemseyen Özdamar, mimari detayların incelikle ele alındığı, işlevsel ve estetik açıdan tatmin edici projeler ortaya koymaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-light mb-6">İŞBİRLİĞİ</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Yeni projeler veya işbirlikleri için Yusuf Özdamar ile iletişime geçebilirsiniz.
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
            <a href="https://www.linkedin.com/in/yusuf-%C3%B6zdamar-72935265/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mr-4">
              LinkedIn
            </a>
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