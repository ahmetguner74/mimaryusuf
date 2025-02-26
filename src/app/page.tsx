"use client";

import Image from "next/image";
import Link from "next/link";
import { oneCikanProjeler, roportajKesitleri } from "./utils/data";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Menu from "./components/Menu";
import { useState, useEffect } from "react";
import RulesIcon from "./components/RulesIcon";

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isQuoteFading, setIsQuoteFading] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  
  // WhatsApp bağlantısı için telefon numarasını formatlıyoruz
  const phoneNumber = "905446932627"; // Boşluk ve + işareti olmadan
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  // Smooth scroll fonksiyonu
  const scrollToContent = () => {
    const quoteSection = document.querySelector('#quote-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
      setShowScroll(false);
    }
  };

  // Röportaj kesitlerini otomatik değiştir
  useEffect(() => {
    const timer = setInterval(() => {
      setIsQuoteFading(true);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => 
          prevIndex === roportajKesitleri.length - 1 ? 0 : prevIndex + 1
        );
        setIsQuoteFading(false);
      }, 1000); // Fade out tamamlandıktan sonra
    }, 15000); // Her 5 saniyede bir değiştir

    return () => clearInterval(timer);
  }, []);

  const currentQuote = roportajKesitleri[currentQuoteIndex];

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Menu />
        
        {/* Header/Hero Section with Parallax */}
        <header className="relative h-screen flex items-center justify-center bg-[#f5f5f5] overflow-hidden">
          <Parallax speed={-15}>
            <div className="text-center px-4 md:px-8 max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-light mb-4">YUSUF ÖZDAMAR</h1>
              <p className="text-xl md:text-2xl font-extralight tracking-wider mb-8">MİMAR</p>
              <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
            </div>
          </Parallax>
          
          {/* Scroll indicator animation - now clickable */}
          {showScroll && (
            <div 
              onClick={scrollToContent}
              className="absolute bottom-10 left-2/2 transform -translate-x-2/2 flex flex-col items-center cursor-pointer hover:opacity-50 transition-opacity animate-bounce"
            >
              <p className="text-sm text-gray-500 mb-2 font-light">KEŞFET</p>
              <RulesIcon 
                width={60} 
                height={60} 
                className="transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          )}

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

        {/* Quote Section with Parallax */}
        <section id="quote-section" className="py-20 px-4 md:px-8 bg-gray-200 relative overflow-hidden">
          {/* Mimari eskiz arka planı */}
          <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
            <Parallax speed={-4}>
              <div className="w-full h-full" style={{
                backgroundImage: `url('/decorative/architectural-sketch.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: 'scale(0.8) rotate(-5deg)'
              }}></div>
            </Parallax>
          </div>
          
          <div className="max-w-2xl mx-auto text-center relative">
            <Parallax speed={5}>
              <h2 className="text-3xl font-light mb-12">RÖPORTAJDAN KESİTLER</h2>
            </Parallax>
            <div className="min-h-[200px] flex items-center justify-center">
              <div className={`transition-opacity duration-1000 ${isQuoteFading ? 'opacity-0' : 'opacity-100'}`}>
                <blockquote className="text-xl italic mb-8">
                  &quot;{currentQuote.alinti}&quot;
                </blockquote>
                <p className="text-right text-gray-600">— {currentQuote.kaynak}</p>
              </div>
            </div>
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
                      <h3 className="text-xl font-medium text-center">{project.title}</h3>
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
