"use client";

import Image from "next/image";
import Link from "next/link";
import { oneCikanProjeler, roportajKesitleri } from "./utils/data";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Home() {
  // WhatsApp bağlantısı için telefon numarasını formatlıyoruz
  const phoneNumber = "905446932627"; // Boşluk ve + işareti olmadan
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header/Hero Section with Parallax */}
        <header className="relative h-screen flex items-center justify-center bg-[#f5f5f5] overflow-hidden">
          <Parallax speed={-15}>
            <div className="text-center px-4 md:px-8 max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-light mb-4">YUSUF ÖZDAMAR</h1>
              <p className="text-xl md:text-2xl font-extralight tracking-wider mb-8">MİMAR</p>
              <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
            </div>
          </Parallax>
          
          {/* Decorative architectural lines in background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
            <Parallax speed={-5}>
              <div className="w-full h-full" style={{
                backgroundImage: `url('/decorative/grid-lines.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
            </Parallax>
          </div>
        </header>

        {/* About Section with Parallax */}
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto relative overflow-hidden">
          {/* Mimari eskiz arka planı */}
          <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
            <Parallax speed={-3}>
              <div className="w-full h-full" style={{
                backgroundImage: `url('/decorative/architectural-sketch.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
            </Parallax>
          </div>
          
          <Parallax speed={5}>
            <h2 className="text-3xl font-light mb-12 text-center">HAKKINDA</h2>
          </Parallax>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Parallax speed={10}>
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  Mimar Yusuf Özdamar, Turgut Cansever ile çalışma fırsatı bulmuş, Türk mimarlık geleneğinin önemli temsilcilerinden biridir. Üsküdar Belediyesi ve Nuhoğlu İnşaat&apos;ta görev yapmış olan Özdamar, mimarlığın sadece bina yapmaktan ibaret olmadığını, aynı zamanda kültürel ve tarihi sorumluluğu olan bir meslek olduğunu savunmaktadır.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Mimarlık kariyeri boyunca, geleneksel değerleri modern anlayışla birleştirerek özgün projeler geliştiren Özdamar, mimarinin insan ve çevre ile uyumlu olması gerektiğini vurgulamaktadır.
                </p>
                <Link 
                  href="/hakkinda" 
                  className="inline-block border border-gray-800 px-6 py-3 text-lg hover:bg-gray-800 hover:text-white transition duration-300"
                >
                  Daha Fazla Bilgi
                </Link>
              </div>
            </Parallax>
            <Parallax speed={5}>
              <div className="bg-gray-200 h-80 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/profil/yusuf.jpg" 
                  alt="Mimar Yusuf Özdamar" 
                  width={500} 
                  height={500} 
                  className="object-cover w-full h-full"
                />
              </div>
            </Parallax>
          </div>
        </section>

        {/* Projects Section with Parallax */}
        <section className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
          {/* Mimari eskiz arka planı */}
          <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
            <Parallax speed={-2}>
              <div className="w-full h-full" style={{
                backgroundImage: `url('/decorative/grid-lines.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: 'rotate(90deg)'
              }}></div>
            </Parallax>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            <Parallax speed={5}>
              <h2 className="text-3xl font-light mb-12 text-center">PROJELER</h2>
            </Parallax>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oneCikanProjeler.map((project, idx) => (
                <Parallax key={project.id} speed={idx % 2 === 0 ? 10 : 5}>
                  <Link href={`/projeler/${project.id}`} className="block">
                    <div className="bg-gray-100 p-4 transition-transform duration-500 hover:translate-y-[-5px]">
                      <div className="bg-gray-200 h-60 mb-4 flex items-center justify-center overflow-hidden">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <p className="text-gray-500 italic">Proje Görseli</p>
                        )}
                      </div>
                      <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </Link>
                </Parallax>
              ))}
            </div>
            <Parallax speed={15}>
              <div className="text-center mt-12">
                <Link 
                  href="/projeler" 
                  className="inline-block border border-gray-800 px-6 py-3 text-lg hover:bg-gray-800 hover:text-white transition duration-300"
                >
                  Tüm Projeleri Görüntüle
                </Link>
              </div>
            </Parallax>
          </div>
        </section>

        {/* Quote Section with Parallax */}
        <section className="py-20 px-4 md:px-8 bg-gray-100 relative overflow-hidden">
          {/* Mimari eskiz arka planı */}
          <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
            <Parallax speed={-4}>
              <div className="w-full h-full" style={{
                backgroundImage: `url('/decorative/architectural-sketch.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: 'scale(0.8) rotate(-5deg)'
              }}></div>
            </Parallax>
          </div>
          
          <div className="max-w-3xl mx-auto text-center relative">
            <Parallax speed={5}>
              <h2 className="text-3xl font-light mb-12">RÖPORTAJDAN KESİTLER</h2>
            </Parallax>
            {roportajKesitleri.map((kesit, index) => (
              <Parallax key={index} speed={10}>
                <div className="mb-12 last:mb-0">
                  <blockquote className="text-xl italic mb-8">
                    &quot;{kesit.alinti}&quot;
                  </blockquote>
                  <p className="text-right text-gray-600">— {kesit.kaynak}</p>
                </div>
              </Parallax>
            ))}
          </div>
        </section>

        {/* Contact Section with Parallax */}
        <section className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center">
            <Parallax speed={5}>
              <h2 className="text-3xl font-light mb-12">İLETİŞİM</h2>
              <p className="text-lg mb-8">
                Projeler, işbirlikleri ve daha fazla bilgi için lütfen iletişime geçin.
              </p>
            </Parallax>
            <Parallax speed={10}>
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
            </Parallax>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 md:px-8 bg-gray-800 text-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Yusuf Özdamar</p>
            <div className="mt-4 md:mt-0 flex items-center">
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
    </ParallaxProvider>
  );
}
